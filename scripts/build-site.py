#!/usr/bin/env python3
"""Build the static site from results/.

    scripts/build-site.py [--out site]

The site is a pure function of the run directories, the target lock files,
and four optional curation inputs:

    results/<target>/<batch>/<run>/notes.md   curator's notes on one run
    targets/<name>.md                          curator's "about this project"
    notes/highlights.json                      cards on the landing page
    notes/<slug>.md                            longer posts (front matter: title, date, summary)
    about.md                                   the About page, in the curator's words

Output goes to site/data/ (index.json, traces.json, per-run README/notes
copies, posts); the static app in site/ reads it at runtime. Nothing here
renders markdown — the browser does that, so the README is shown exactly as
produced.
"""
import argparse, json, re, shutil, sys
from datetime import datetime
from pathlib import Path

BENCH_ROOT = Path(__file__).resolve().parent.parent

def front_matter(text):
    """Tiny YAML-ish front matter: `key: value` and `key: [a, b]` only."""
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if not m:
        return {}, text
    meta = {}
    for line in m.group(1).splitlines():
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        v = v.strip()
        if v.startswith("[") and v.endswith("]"):
            v = [x.strip().strip("'\"") for x in v[1:-1].split(",") if x.strip()]
        else:
            v = v.strip("'\"")
        meta[k.strip()] = v
    return meta, m.group(2)

MIN_EFFORTS = {"none", "minimal", "low"}
MAX_EFFORTS = {"high", "xhigh", "max"}

def tier_of(meta):
    """Which of the three effort tiers a run belongs to: min / default / max.

    From the effort the harness was asked for; models that take no effort
    setting report none, so fall back to the batch name (…_effort-min/-max).
    """
    req = meta.get("reasoning_effort_requested")
    if req in MIN_EFFORTS:
        return "min"
    if req in MAX_EFFORTS:
        return "max"
    b = meta.get("batch") or ""
    return "min" if "effort-min" in b else "max" if "effort-max" in b else "default"

_TS = re.compile(r'"timestamp":"([^"]+)"')
_TYPE = re.compile(r'"type":"([a-z._]+)"')
_TOOL = re.compile(r'"toolName":"([^"]+)"')
_CALL = re.compile(r'"toolCallId":"([^"]+)"')

def trace_of(run_dir):
    """Timeline of one run from the CLI's event stream, in seconds from the prompt.

    turns: [start, first_token, end] per model call — start→first_token is the
    model thinking (plus latency), first_token→end is it streaming its reply.
    tools: [start, name, duration] per tool call. Model calls and tool calls
    alternate strictly within the main session; only subagents overlap.
    """
    path = run_dir / "events.jsonl"
    if not path.exists():
        return None
    ts = lambda s: datetime.strptime(s, "%Y-%m-%dT%H:%M:%S.%fZ").timestamp()
    t0 = None; cur = None; turns = []; tools = []; open_tools = {}; end = None
    for line in path.read_text(errors="replace").splitlines():
        mt, mts = _TYPE.search(line), _TS.search(line)
        if not (mt and mts):
            continue
        kind, t = mt.group(1), ts(mts.group(1))
        if kind == "user.message" and t0 is None:
            t0 = t
        if t0 is None:
            continue
        o = round(t - t0, 2)
        if kind == "model.call_start":
            cur = [o, None, None]
        elif kind == "assistant.message_start" and cur and cur[1] is None:
            cur[1] = o
        elif kind == "model.call_finished" and cur:
            cur[2] = o; turns.append(cur); cur = None
        elif kind == "tool.execution_start":
            cid, name = _CALL.search(line), _TOOL.search(line)
            rec = [o, name.group(1) if name else "?", 0]
            tools.append(rec)
            if cid:
                open_tools[cid.group(1)] = rec
        elif kind == "tool.execution_complete":
            cid = _CALL.search(line)
            rec = cid and open_tools.pop(cid.group(1), None)
            if rec:
                rec[2] = round(o - rec[0], 2)
        elif kind == "result":
            end = o
    if t0 is None:
        return None
    think = sum((b if b is not None else c) - a for a, b, c in turns)
    stream = sum(c - (b if b is not None else c) for a, b, c in turns)
    return {"duration": end, "turns": turns, "tools": tools,
            "think": round(think, 1), "stream": round(stream, 1),
            "tool": round(sum(d for _, n, d in tools if n != "task"), 1)}

def version_key(v):
    """Natural sort key for versions like 4.8, 4.10, 5, 5.1."""
    if not v:
        return (float("inf"),)
    return tuple(int(p) if p.isdigit() else p for p in re.split(r"[.\-]", str(v)))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=str(BENCH_ROOT / "site"))
    a = ap.parse_args()
    out = Path(a.out)
    data = out / "data"
    if data.exists():
        shutil.rmtree(data)
    (data / "runs").mkdir(parents=True)

    bench = json.loads((BENCH_ROOT / "bench.json").read_text())
    models = json.loads((BENCH_ROOT / "models.json").read_text())

    # --- targets ---
    targets = []
    for name in bench["targets"]:
        lock_path = BENCH_ROOT / "targets" / f"{name}.lock.json"
        if not lock_path.exists():
            print(f"warning: no lock file for target {name}", file=sys.stderr)
            continue
        lock = json.loads(lock_path.read_text())
        about_path = BENCH_ROOT / "targets" / f"{name}.md"
        about_meta, about_body = ({}, "")
        if about_path.exists():
            about_meta, about_body = front_matter(about_path.read_text())
            (data / f"target-{name}.md").write_text(about_body)
        targets.append({
            "name": name,
            "title": about_meta.get("title", name),
            "summary": about_meta.get("summary", ""),
            "has_about": bool(about_body.strip()),
            "url": lock.get("url"),
            "commit": lock.get("commit"),
            "prepared_at": lock.get("prepared_at"),
            "setup": lock.get("setup"),
            "removed": lock.get("removed", []),
            "manifest_fixups": lock.get("manifest_fixups", []),
        })

    # --- runs ---
    runs = []
    traces = {}
    for meta_path in sorted((BENCH_ROOT / "results").glob("*/*/*/meta.json")):
        run_dir = meta_path.parent
        meta = json.loads(meta_path.read_text())
        target = run_dir.parent.parent.name
        if run_dir.parent.name in (bench.get("hidden_batches") or []):
            continue
        if target not in bench["targets"]:
            continue
        rid = f"{target}/{run_dir.name}"
        dest = data / "runs" / target / run_dir.name
        dest.mkdir(parents=True)
        for f in ("README.md", "changes.diff", "session.md"):
            if (run_dir / f).exists():
                shutil.copy(run_dir / f, dest / f)

        notes = None
        if (run_dir / "notes.md").exists():
            nmeta, nbody = front_matter((run_dir / "notes.md").read_text())
            (dest / "notes.md").write_text(nbody)
            notes = {"summary": nmeta.get("summary", ""), "tags": nmeta.get("tags", []),
                     "has_body": bool(nbody.strip())}

        m = meta.get("model", {})
        reg = models.get(m.get("id"), {})
        usage = meta.get("usage") or {}
        mm = (usage.get("modelMetrics") or {}).get(m.get("id")) or {}
        u = mm.get("usage") or {}
        runs.append({
            "id": rid,
            "target": target,
            "batch": meta.get("batch"),
            "model": {
                "id": m.get("id"),
                "vendor": m.get("vendor") or reg.get("vendor"),
                "name": m.get("name") or reg.get("name") or m.get("id"),
                "version": m.get("version") or reg.get("version"),
                "variant": m.get("variant") or reg.get("variant"),
                "display": m.get("display") or reg.get("display") or m.get("id"),
            },
            "harness": meta.get("harness", {}),
            "started_at": meta.get("started_at"),
            "wall_clock_seconds": meta.get("wall_clock_seconds"),
            "exit_code": meta.get("exit_code"),
            "readme_produced": meta.get("readme_produced", False),
            "readme_lines": meta.get("readme_lines"),
            "readme_bytes": meta.get("readme_bytes"),
            "requests": (mm.get("requests") or {}).get("count"),
            "tokens": {
                "input": u.get("inputTokens"),
                "output": u.get("outputTokens"),
                "cache_read": u.get("cacheReadTokens"),
                "cache_write": u.get("cacheWriteTokens"),
                "reasoning": u.get("reasoningTokens"),
            },
            "cost": (mm.get("requests") or {}).get("cost"),
            "tool_calls": sum((meta.get("tool_calls") or {}).values()),
            "tool_calls_by_name": meta.get("tool_calls") or {},
            "files_viewed": len(meta.get("files_viewed") or []),
            "files_viewed_list": meta.get("files_viewed") or [],
            "compactions": len(meta.get("compactions") or []),
            "reasoning_level": meta.get("reasoning_level"),
            "tier": tier_of(meta),
            # models other than the primary that the session called: Copilot's
            # task tool runs subagents on its own choice of model and effort
            "subagents": {k: v for k, v in (meta.get("chat_calls") or {}).items() if k != m.get("id")},
            "truncations": meta.get("truncations", 0),
            "has_session": (run_dir / "session.md").exists(),
            "has_diff": (run_dir / "changes.diff").exists() and (run_dir / "changes.diff").stat().st_size > 0,
            "notes": notes,
        })
        tr = trace_of(run_dir)
        if tr:
            traces[rid] = tr

    runs.sort(key=lambda r: (r["model"]["name"].lower(), version_key(r["model"]["version"]),
                             r["model"]["variant"] or "", r["harness"].get("name", ""), r["started_at"] or ""))

    # --- curation: posts and landing-page highlights ---
    notes_dir = BENCH_ROOT / "notes"
    posts = []
    if notes_dir.exists():
        (data / "posts").mkdir()
        for p in sorted(notes_dir.glob("*.md")):
            pmeta, pbody = front_matter(p.read_text())
            (data / "posts" / p.name).write_text(pbody)
            posts.append({"slug": p.stem, "title": pmeta.get("title", p.stem),
                          "date": pmeta.get("date", ""), "summary": pmeta.get("summary", "")})
        posts.sort(key=lambda p: p["date"], reverse=True)
    highlights = []
    if (notes_dir / "highlights.json").exists():
        run_ids = {r["id"] for r in runs}
        for h in json.loads((notes_dir / "highlights.json").read_text()):
            if h.get("run") and h["run"] not in run_ids:
                print(f"warning: highlight refers to unknown run {h['run']}", file=sys.stderr)
                continue
            highlights.append(h)

    about = BENCH_ROOT / "about.md"
    if about.exists():
        (data / "about.md").write_text(front_matter(about.read_text())[1])

    (data / "traces.json").write_text(json.dumps(traces, separators=(",", ":")))
    (data / "index.json").write_text(json.dumps({
        "title": bench["title"], "tagline": bench.get("tagline", ""), "intro": bench.get("intro", ""),
        "repo_url": bench.get("repo_url"), "prompt": (BENCH_ROOT / "prompt.txt").read_text().strip(),
        "targets": targets, "runs": runs, "posts": posts, "highlights": highlights,
        "has_about": about.exists(),
    }, indent=1))
    print(f"{len(runs)} run(s), {len(traces)} trace(s), {len(targets)} target(s), {len(posts)} post(s), {len(highlights)} highlight(s) → {data}")

if __name__ == "__main__":
    main()
