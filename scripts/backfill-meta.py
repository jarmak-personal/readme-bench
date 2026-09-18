#!/usr/bin/env python3
"""Add reasoning-effort and subagent fields to run meta.json files.

    scripts/backfill-meta.py [results/<target>/<batch>/<run> ...]

With no arguments, every run under results/. Idempotent. The same extraction
runs at the end of scripts/run-copilot.sh for new runs; this exists for runs
recorded before those fields were tracked.

Fields (all from the chat spans in otel.jsonl):
  reasoning_level    effort level the primary model was called with, as
                     Copilot reported it (null for models with no levels)
  chat_calls         {model: {level: n}} for every model the session called,
                     which is how subagents show up: Copilot's `task` tool
                     runs them on its own choice of model and effort
"""
import collections, json, sys
from pathlib import Path

BENCH_ROOT = Path(__file__).resolve().parent.parent

def effort_from_otel(otel_path, primary_model):
    calls = collections.defaultdict(collections.Counter)
    try:
        for line in open(otel_path):
            line = line.strip()
            if not line: continue
            try: r = json.loads(line)
            except ValueError: continue
            if r.get("type") != "span": continue
            a = r.get("attributes") or {}
            if a.get("gen_ai.operation.name") != "chat": continue
            calls[a.get("gen_ai.request.model") or "?"][a.get("gen_ai.request.reasoning.level") or "none"] += 1
    except FileNotFoundError:
        return {"reasoning_level": None, "chat_calls": {}}
    primary = calls.get(primary_model)
    level = primary.most_common(1)[0][0] if primary else None
    return {"reasoning_level": None if level == "none" else level,
            "chat_calls": {m: dict(c) for m, c in calls.items()}}

def backfill(run_dir):
    meta_path = run_dir / "meta.json"
    meta = json.loads(meta_path.read_text())
    fields = effort_from_otel(run_dir / "otel.jsonl", meta["model"]["id"])
    if all(meta.get(k) == v for k, v in fields.items()):
        return False
    # keep the key order readable: slot the new fields after tool_calls
    out = {}
    for k, v in meta.items():
        if k in fields: continue
        out[k] = v
        if k == "tool_calls": out.update(fields)
    for k, v in fields.items(): out.setdefault(k, v)
    meta_path.write_text(json.dumps(out, indent=2) + "\n")
    return True

if __name__ == "__main__":
    runs = [Path(p) for p in sys.argv[1:]] or sorted(p.parent for p in (BENCH_ROOT / "results").glob("*/*/*/meta.json"))
    changed = 0
    for r in runs:
        if backfill(r):
            changed += 1
            m = json.loads((r / "meta.json").read_text())
            others = {k: v for k, v in m["chat_calls"].items() if k != m["model"]["id"]}
            print(f"{r.name:50} effort={m['reasoning_level']}" + (f"  subagents={others}" if others else ""))
    print(f"{changed}/{len(runs)} updated")
