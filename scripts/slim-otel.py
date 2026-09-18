#!/usr/bin/env python3
"""Deduplicate repeated attributes in a Copilot OTel export, in place.

    scripts/slim-otel.py <otel.jsonl>

Every `chat` span carries the full system prompt and tool definitions; over a
run that is ~90% of the file. Keep the first occurrence of each distinct value
and replace later identical ones with a reference to the span that has it.
Nothing unique is dropped.
"""
import json, sys

DEDUP_KEYS = ("gen_ai.system_instructions", "gen_ai.tool.definitions", "gen_ai.tool.description")

def main(path):
    rows = [l for l in open(path) if l.strip()]
    seen = {}  # (key, value) -> spanId
    out = []
    before = sum(len(l) for l in rows)
    for l in rows:
        r = json.loads(l)
        attrs = r.get("attributes") if r.get("type") == "span" else None
        if attrs:
            for k in DEDUP_KEYS:
                if k in attrs and isinstance(attrs[k], str) and len(attrs[k]) > 200:
                    sig = (k, attrs[k])
                    if sig in seen:
                        attrs[k] = f"<identical to span {seen[sig]}>"
                    else:
                        seen[sig] = r.get("spanId")
        out.append(json.dumps(r, separators=(",", ":")) + "\n")
    open(path, "w").writelines(out)
    after = sum(len(l) for l in out)
    print(f"{path}: {before:,} → {after:,} bytes")

if __name__ == "__main__":
    for p in sys.argv[1:]:
        main(p)
