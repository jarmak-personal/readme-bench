---
title: Twenty-three minutes of Opus 5.5
date: 2026-09-23
summary: Claude Opus 5.5 at max effort researched for 17 minutes before writing a word, then spent 5 more checking itself. Three attempts, three marathons.
run: hvir/claude-opus-5.5__copilot-cli__20260923T051759Z
quote: A temporary script confirmed that every local link and heading anchor resolves, every `npm run` command exists in `package.json`, and each environment variable and smoke scenario name appears in the code.
kind: runtime
tags: [effort-max, long-run]
pin: true
---

Until now, the longest run on the bench was Claude Fable 5.1 at max: about six minutes.
The harness had a 20-minute limit that was only ever meant to catch a stalled CLI.

Claude Opus 5.5 at max hit that limit. It hadn't stalled: 187 tool calls, 17.7M input
tokens, still reading the installer's AppArmor handling and the image-paste code. No README.
So I removed the limit and ran it again, twice (once on a newer Copilot CLI, once on the
pinned one; see the [Harness section of the README](https://github.com/jarmak-personal/readme-bench#harness)). Every attempt did the same thing:

| attempt | wall-clock | tool calls | input tokens | README |
|---|---|---|---|---|
| 1 (cut off) | 20 min | 187 | 17.7M | *none* |
| 2 | 30.8 min | 321 | 34.6M | 487 lines |
| 3 (this one) | 23 min | 236 | 21.4M | 285 lines |

The run on the site is the third:

- first write to `README.md` at about **17 minutes**
- then 5 more minutes of edits, re-checking claims against the source
- **21.4M input tokens**, about 6× the next-largest run (Gemini 3.8 Flash at max, 3.7M)
- **285 lines**, the longest README on the bench (next: 241)

At default effort the same model wrote 118 lines in under a minute; at low, 74 lines in 29 seconds.

One harness detail: Copilot's system prompt for Opus 4.8, Opus 5, Sonnet 5, Fable 5 and
Fable 5.1 says *"Prioritize brevity. Default to the shortest possible response that
satisfies the request."* Opus 5.5 gets a prompt without that line, as do Haiku 4.5 and
Opus 4.7. (That's about its chat replies rather
than files it writes, but it's a difference.)

By its own account, every claim in the README was checked. The "is the extra thinking
worth it" question from [Thinking, and README length](#/notes/thinking-and-length) has
never had a sharper example.
