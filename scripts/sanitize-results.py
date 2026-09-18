#!/usr/bin/env python3
"""Scrub personal identifiers from captured runs before they are committed.

    scripts/sanitize-results.py            rewrite results/ and targets/*.lock.json in place
    scripts/sanitize-results.py --check    report anything that still looks personal (exit 1 if so)
    scripts/sanitize-results.py [--check] PATH...   limit to these files or directories

What gets rewritten, in order:

  * the invoking user's home directory (`/Users/x`, `/home/x`)  → `~`
    Copilot's telemetry records its sandbox policy, which names the real
    home as a denied path; node-gyp and friends log cache paths under it.
  * the invoking user's git email, and any `NNNN+user@users.noreply.github.com`
    form of it                                                  → `user@users.noreply.github.com`
  * literal replacements from `.sanitize.json` (gitignored), e.g. an upstream
    author's address that an agent saw in `git log`:
        {"replace": {"someone@company.com": "someone@users.noreply.github.com"},
         "allow": ["^/home/fixture-user$"]}

`--check` then scans for anything that still looks like a home path or an
email and is not on the allow list (GitHub noreply aliases, example/invalid/
test domains, and npm's public deprecation-notice addresses are allowed).
The Pages workflow does not run this; it is a pre-commit habit.
"""
import argparse, json, os, re, subprocess, sys
from pathlib import Path

BENCH_ROOT = Path(__file__).resolve().parent.parent
TEXT_SUFFIXES = {".md", ".jsonl", ".json", ".log", ".diff", ".txt", ".yml", ".yaml"}
ALLOW_DEFAULT = [r".*@users\.noreply\.github\.com$", r".*@example\.(com|org|net|test|invalid)$",
                 r".*\.(invalid|test|example)$", r"^i@izs\.me$", r"^git@github\.com$",
                 r"^\d+\+[\w-]+@users\.noreply\.github\.com$"]
EMAIL = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
HOME_PATH = re.compile(r"(?<![\w/])(/Users|/home)/[A-Za-z0-9._-]+")

def git(*args):
    try:
        return subprocess.run(["git", *args], capture_output=True, text=True, check=True).stdout.strip()
    except Exception:
        return ""

def rules():
    cfg = {}
    local = BENCH_ROOT / ".sanitize.json"
    if local.exists():
        cfg = json.loads(local.read_text())
    replace = []
    home = str(Path.home())
    replace.append((re.compile(re.escape(home) + r"(?![A-Za-z0-9._-])"), "~"))
    email = git("config", "--get", "user.email")
    if email:
        user = email.split("@")[0].split("+")[-1]
        alias = f"{user}@users.noreply.github.com"
        replace.append((re.compile(r"\d+\+" + re.escape(alias.split("@")[0]) + r"@users\.noreply\.github\.com"), alias))
        if email != alias:
            replace.append((re.compile(re.escape(email)), alias))
    for k, v in (cfg.get("replace") or {}).items():
        replace.append((re.compile(re.escape(k)), v))
    allow = [re.compile(p) for p in ALLOW_DEFAULT + (cfg.get("allow") or [])]
    return replace, allow

def files(paths):
    for p in paths:
        p = Path(p)
        if p.is_file():
            yield p
        elif p.is_dir():
            for f in sorted(p.rglob("*")):
                if f.is_file() and f.suffix in TEXT_SUFFIXES and ".git" not in f.parts:
                    yield f

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="report, don't rewrite")
    ap.add_argument("paths", nargs="*")
    a = ap.parse_args()
    paths = a.paths or [BENCH_ROOT / "results", *(BENCH_ROOT / "targets").glob("*.lock.json")]
    replace, allow = rules()
    changed = 0; findings = {}
    for f in files(paths):
        try:
            text = f.read_text(encoding="utf-8", errors="surrogateescape")
        except Exception:
            continue
        if a.check:
            hits = {m.group(0) for m in HOME_PATH.finditer(text)} | {m.group(0) for m in EMAIL.finditer(text)}
            hits = {h for h in hits if not h.startswith("~") and not any(r.match(h) for r in allow)}
            if hits:
                findings[str(f.relative_to(BENCH_ROOT))] = sorted(hits)
            continue
        new = text
        for rx, rep in replace:
            new = rx.sub(rep, new)
        if new != text:
            f.write_text(new, encoding="utf-8", errors="surrogateescape"); changed += 1
    if a.check:
        for f, hits in findings.items():
            print(f"{f}: {', '.join(hits)}")
        print(f"{len(findings)} file(s) with something that looks personal" if findings else "clean")
        sys.exit(1 if findings else 0)
    print(f"rewrote {changed} file(s)")

if __name__ == "__main__":
    main()
