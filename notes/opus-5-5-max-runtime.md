---
title: Twenty-three minutes of Opus 5.5
date: 2026-09-23
summary: 17 minutes or reasoning before writing a word.
run: hvir/claude-opus-5.5__copilot-cli__20260923T051759Z
tags: [effort-max, long-run]
pin: true
---

Until now, the longest run on the bench was Claude Fable 5.1 at max: about six minutes.
The Readme bench harness had a 20-minute limit that was only ever meant to catch a stalled CLI.

Claude Opus 5.5 at max hit that limit. When it timed out, it hadn't stalled, 187 tool calls, 17.7M input
tokens, still reading the installer's AppArmor handling and the image-paste code.
So I removed the limit and ran it again, twice (once on a newer Copilot CLI, once on the
pinned one; see the [Harness section of the README](https://github.com/jarmak-personal/readme-bench#harness)). Every attempt did the same thing:

| attempt | wall-clock | tool calls | input tokens | README |
|---|---|---|---|---|
| 1 (cut off) | 20 min | 187 | 17.7M | *none* |
| 2 | 30.8 min | 321 | 34.6M | 487 lines |
| 3 (this one) | 23 min | 236 | 21.4M | 285 lines |

The run on the site is the third (harness matched with the previous runs):

- first write to `README.md` at about **17 minutes**
- 5 more minutes of edits, re-checking claims against the source
- **21.4M input tokens**, about 6× the next-largest run (Gemini 3.8 Flash at max, 3.7M)
- **285 lines**, the longest README on the bench (next: 241)

At default effort the same model wrote 118 lines in under a minute; at low, 74 lines in 29 seconds.

Copilot's system prompt for Opus 4.8, Opus 5, Sonnet 5, Fable 5 and Fable 5.1 says
*"Prioritize brevity. Default to the shortest possible response that satisfies the request."*
Opus 5.5 gets a prompt without that line, as do Haiku 4.5 and
Opus 4.7. (That's about its chat replies rather than files it writes, but worth noting.)

The "is the extra thinking worth it" question from [Thinking, and README length](#/notes/thinking-and-length)
has never had a sharper example. I'll let you decide if longer == better in this case.
