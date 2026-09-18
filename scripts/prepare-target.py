#!/usr/bin/env python3
"""Prepare a target repository snapshot for the benchmark.

    scripts/prepare-target.py <name> <git-url> <commit>
        [--strip GLOB]... [--keep GLOB]... [--setup CMD]

Clones the repo at the commit into targets/<name>/, removes human-authored
documentation and agent instruction files (DEFAULT_STRIP plus --strip, minus
--keep), fixes manifests that reference removed files, and re-initialises git
as a single orphan commit so nothing removed is recoverable from history.
Records everything in targets/<name>.lock.json.

--setup is a shell command (e.g. "npm ci", "uv sync") that installs
dependencies. It runs here once to validate it, and again in every fresh
working copy before the agent starts, because the agent has no network.
"""
import argparse, fnmatch, json, os, re, shutil, subprocess, sys
from datetime import datetime, timezone
from pathlib import Path

BENCH_ROOT = Path(__file__).resolve().parent.parent
CACHE_ROOT = Path("/private/var/tmp/ws/cache")

# Globs matched (case-insensitively) against every path in the repo, relative
# to its root. Things that explain the project to a human or an agent.
DEFAULT_STRIP = [
    "**/README*",
    "docs", "doc", "documentation",
    "**/AGENTS.md", "**/CLAUDE.md", "**/GEMINI.md",
    ".claude", ".copilot", ".cursor", ".cursorrules", ".windsurfrules", ".agents", ".codex",
    ".github/copilot-instructions.md", ".github/instructions", ".github/agents",
    ".github/skills", ".github/prompts", ".github/pull_request_template.md",
    ".github/ISSUE_TEMPLATE",
    "CONTRIBUTING*", "ARCHITECTURE*", "DESIGN*", "CHANGELOG*", "HISTORY*",
    "ROADMAP*", "FAQ*", "GETTING-STARTED*", "GETTING_STARTED*",
]

def sh(*args, cwd=None, check=True, capture=True):
    return subprocess.run(args, cwd=cwd, check=check, text=True,
                          capture_output=capture).stdout.strip() if capture else \
           subprocess.run(args, cwd=cwd, check=check).returncode

def glob_to_regex(pat):
    """fnmatch-ish, but `**` spans directories and `*` does not, and a pattern
    without a slash matches at any depth only when it starts with `**/`."""
    out = ""
    i = 0
    while i < len(pat):
        c = pat[i]
        if pat.startswith("**/", i):
            out += "(?:.*/)?"; i += 3
        elif c == "*":
            out += "[^/]*"; i += 1
        elif c == "?":
            out += "[^/]"; i += 1
        else:
            out += re.escape(c); i += 1
    return re.compile("^" + out + "$", re.IGNORECASE)

def matches(relpath, patterns):
    return any(p.match(relpath) for p in patterns)

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("name"); ap.add_argument("url"); ap.add_argument("commit")
    ap.add_argument("--strip", action="append", default=[], metavar="GLOB")
    ap.add_argument("--keep", action="append", default=[], metavar="GLOB")
    ap.add_argument("--setup", default=None, metavar="CMD")
    a = ap.parse_args()

    target = BENCH_ROOT / "targets" / a.name
    lock = BENCH_ROOT / "targets" / f"{a.name}.lock.json"
    if target.exists():
        sys.exit(f"error: {target} already exists; remove it first")
    target.parent.mkdir(parents=True, exist_ok=True)
    CACHE_ROOT.mkdir(parents=True, exist_ok=True)

    print(f"cloning {a.url} @ {a.commit} → {target}")
    sh("git", "clone", "--quiet", a.url, str(target))
    sh("git", "-C", str(target), "checkout", "--quiet", a.commit)
    resolved = sh("git", "-C", str(target), "rev-parse", "HEAD")
    upstream = sh("git", "-C", str(target), "log", "-1", "--format=%H %ad %s", "--date=short")
    author_name = sh("git", "-C", str(target), "log", "-1", "--format=%an")
    # The snapshot commit carries the upstream author's name so the history
    # looks lived-in, but not their real address: GitHub's noreply alias for
    # the repo owner is plausible to an agent and reveals nothing the URL
    # doesn't. Transcripts end up public (agents run `git log`).
    owner = re.search(r"github\.com[:/]([^/]+)/", a.url)
    author_email = f"{owner.group(1)}@users.noreply.github.com" if owner else "author@users.noreply.github.com"
    shutil.rmtree(target / ".git")

    # --- strip ---
    strip_pats = [glob_to_regex(p) for p in DEFAULT_STRIP + a.strip]
    keep_pats = [glob_to_regex(p) for p in a.keep]
    removed = []
    # Walk top-down so a removed directory's children aren't visited/listed.
    for root, dirs, files in os.walk(target, topdown=True):
        rel_root = os.path.relpath(root, target)
        rel_root = "" if rel_root == "." else rel_root + "/"
        for d in list(dirs):
            rel = rel_root + d
            if matches(rel, strip_pats) and not matches(rel, keep_pats):
                removed.append(rel + "/"); shutil.rmtree(os.path.join(root, d)); dirs.remove(d)
        for f in files:
            rel = rel_root + f
            if matches(rel, strip_pats) and not matches(rel, keep_pats):
                removed.append(rel); os.remove(os.path.join(root, f))

    # --- manifest fixups ---
    # Python: `readme = "README.md"` under [project] makes the package
    # unbuildable once the README is gone, and hatch force-includes of removed
    # docs fail the build. Drop those lines so `uv sync` / `pip install -e .`
    # still work. Node has no equivalent problem.
    fixups = []
    for pp in target.rglob("pyproject.toml"):
        if any(part in ("node_modules", ".venv") for part in pp.parts):
            continue
        lines = pp.read_text().splitlines(keepends=True)
        kept = []
        for ln in lines:
            if re.match(r"^\s*readme\s*=", ln):
                fixups.append(f"{pp.relative_to(target)}: removed `{ln.strip()}`"); continue
            m = re.match(r'^\s*"([^"]+)"\s*=\s*"[^"]*"\s*$', ln)
            if m and not (pp.parent / m.group(1)).exists() \
                 and re.search(r"\.(md|rst|txt)$|^docs?/", m.group(1), re.I):
                fixups.append(f"{pp.relative_to(target)}: removed `{ln.strip()}`"); continue
            kept.append(ln)
        if len(kept) != len(lines):
            pp.write_text("".join(kept))
    # Manifest fields that tell the model what the project is or whose it is:
    # a description is a ready-made opening sentence, keywords color the
    # intent, and homepage/repository/bugs/author email reveal the account.
    # Drop them so the model has to intuit the project from the code.
    MANIFEST_FIELDS = ("description", "keywords", "homepage", "repository", "bugs")
    for mf in target.rglob("package.json"):
        if any(part in ("node_modules", ".venv") for part in mf.parts):
            continue
        raw = mf.read_text()
        data = json.loads(raw)
        dropped = [k for k in MANIFEST_FIELDS if k in data]
        for k in dropped: del data[k]
        if isinstance(data.get("author"), dict) and "email" in data["author"]:
            del data["author"]["email"]; dropped.append("author.email")
        if dropped:
            fixups.append(f"{mf.relative_to(target)}: removed {', '.join(f'`{k}`' for k in dropped)}")
            mf.write_text(json.dumps(data, indent=2, ensure_ascii=False) + ("\n" if raw.endswith("\n") else ""))
    for mf in target.rglob("pyproject.toml"):
        if any(part in ("node_modules", ".venv") for part in mf.parts):
            continue
        lines = mf.read_text().splitlines(keepends=True)
        kept = [ln for ln in lines if not re.match(r'^\s*(description|keywords)\s*=', ln)]
        if len(kept) != len(lines):
            fixups.append(f"{mf.relative_to(target)}: removed `description`/`keywords`")
            mf.write_text("".join(kept))

    # --- squash history ---
    sh("git", "init", "--quiet", cwd=target)
    sh("git", "add", "-A", cwd=target)
    sh("git", "-c", f"user.name={author_name}", "-c", f"user.email={author_email}",
       "commit", "--quiet", "-m", "Initial commit", cwd=target)  # neutral: no upstream URL, no hint that anything was removed
    snapshot = sh("git", "rev-parse", "HEAD", cwd=target)

    # --- validate setup ---
    setup_ok = None
    if a.setup:
        print(f"running setup: {a.setup}")
        env = dict(os.environ, UV_CACHE_DIR=str(CACHE_ROOT / "uv"),
                   npm_config_cache=str(CACHE_ROOT / "npm"),
                   ELECTRON_CACHE=str(CACHE_ROOT / "electron"))
        setup_ok = subprocess.run(["bash", "-c", a.setup], cwd=target, env=env).returncode == 0
        if not setup_ok:
            print("warning: setup command failed", file=sys.stderr)

    lock.write_text(json.dumps({
        "name": a.name, "url": a.url, "commit": resolved, "upstream_head": upstream,
        "author_name": author_name, "author_email": author_email,
        "snapshot_commit": snapshot,
        "prepared_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "setup": a.setup, "setup_ok": setup_ok,
        "strip_patterns": DEFAULT_STRIP + a.strip, "keep_patterns": a.keep,
        "removed": removed, "manifest_fixups": fixups,
    }, indent=2) + "\n")

    print(f"removed {len(removed)} path(s):"); print("\n".join(f"  {r}" for r in removed))
    if fixups:
        print("manifest fixups:"); print("\n".join(f"  {f}" for f in fixups))
    print(f"wrote {lock}")

if __name__ == "__main__":
    main()
