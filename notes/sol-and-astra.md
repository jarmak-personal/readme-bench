---
title: GPT-6 Sol, GPT-5.6 Sol, GPT-6 Astra
date: 2026-09-23
summary: GPT-6 Sol thinks and explores as much as the others but writes the least. And one line in the harness prompt cut its exploring by two-thirds.
run: hvir/gpt-6-sol__copilot-cli__20260923T054112Z
kind: comparison
tags: [gpt, effort, harness]
pin: false
---

GPT-6 Sol reads as brief. I wanted to know whether that's the thinking, the exploring, or
just the writing.

| | tier | reasoning tokens | tool calls | files read | README lines |
|---|---|---|---|---|---|
| GPT-5.6 Sol | min (none) | 0 | 19 | 10 | *none* |
| | default | 554 | 17 | 7 | 110 |
| | max | 3,166 | 66 | 30 | 133 |
| GPT-6 Sol | min (none) | 0 | 11 | 6 | 44 |
| | default | 318 | 31 | 15 | 52 |
| | max | 6,544 | 95 | 55 | 80 |
| GPT-6 Astra | min (low) | 12 | 40 | 9 | 116 |
| | default | 153 | 49 | 8 | 140 |
| | max | 9,291 | 65 | 32 | 176 |

**Thinking isn't what's short.** At max, GPT-6 Sol spends about twice the reasoning tokens
of 5.6 Sol (6,544 vs 3,166), though less than Astra. (Copilot only reports reasoning token
counts, not the reasoning itself, so the count is all there is to compare.)

**Nor is exploring.** At max, GPT-6 Sol makes the most tool calls of the three and reads the
most files: 55, against 30 and 32. Like the others at max, it hands part of the search to
Copilot's search subagent.

**The writing is short.** 44, 52, 80 lines. It's the shortest README on the bench at
default, the second shortest at min (after GPT-5 mini), and at max it reads nearly twice as
many files as Astra to write less than half as much.

**The harness can make it look even briefer.** The first time I ran these, Copilot CLI had
auto-updated to 1.0.88, which adds one instruction to the GPT system prompt: *"Default to
doing the work yourself. Generally do not invoke subagents unless the user explicitly asks
for them."* Same model, same effort, same repo:

| GPT-6 Sol at max | tool calls | files read | delegated? | README lines |
|---|---|---|---|---|
| CLI 1.0.86 (on the site) | 95 | 55 | yes | 80 |
| CLI 1.0.88 (hidden batch) | 34 | 24 | no | 49 |

One line of harness prompt: about a third of the tool calls, fewer than half the files,
and a README 60% as long. That's why the bench now pins the CLI version, and why every run on the site is on
1.0.86.

One curiosity: at default and max, GPT-6 Sol ran a SQL query against Copilot's session
store, looking for earlier sessions in this repository from the past week. There weren't
any (every run starts with a fresh store). No other model on the bench has looked.
