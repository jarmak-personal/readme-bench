---
title: GPT-6 Sol vs GPT-6.1 Sol
date: 2026-10-01
summary: Same exploring, twice the README. GPT-6.1 Sol always delegates to the search subagent.
run: hvir/gpt-6.1-sol__copilot-cli__20261001T041048Z
kind: comparison
tags: [gpt, effort, subagents]
pin: true
---

GPT-6 Sol wrote the shortest READMEs on the bench. A week later GPT-6.1 Sol is out, so:
same repo, same prompt, same CLI (1.0.86), all three tiers.

| | tier | reasoning tokens | Sol's tool calls | subagent's tool calls | files read | words | README lines |
|---|---|---|---|---|---|---|---|
| GPT-6 Sol | min (none) | 0 | 11 | – | 6 | 359 | 44 |
| | default | 318 | 31 | – | 15 | 429 | 52 |
| | max | 6,544 | 71 | 24 | 55 | 457 | 80 |
| GPT-6.1 Sol | min (low) | 33 | 12 | 47 | 6 | 627 | 114 |
| | default | 156 | 33 | 30 | 24 | 888 | 154 |
| | max | 9,027 | 55 | 30 | 43 | 1,038 | 166 |

**The README is about twice as long at every tier.** The extra is mostly sections 6 left
out: packaging (the `.pkg` and `.deb` builds) at every tier, plus bigger tables, 23–35 table
rows against 8–11.

**Sol's own exploring barely changed.** Counting only the calls the model made itself,
6.1 is within a couple of calls of 6 at min and default, and makes *fewer* at max (55 vs 71).

**What changed is delegation.** GPT-6 Sol handed work to Copilot's search subagent only at
max. GPT-6.1 Sol does it at every tier, once, early, and lets it run 30–47 searches and reads
on its behalf. So the headline tool-call counts (59, 63, 85 vs 11, 31, 95) mostly measure
the subagent, not Sol.

**Not quite like for like at min.** The models API lists `none` for GPT-6.1 Sol, but the
model rejects it (*"'none' is not supported with the 'gpt-6.1-sol' model"*), so its min is
`low`. Even so, 33 reasoning tokens is next to nothing, and the README is still 2.6× as long.

And the curiosity from last time is gone: GPT-6 Sol queried Copilot's session store for
earlier sessions in this repo; GPT-6.1 Sol never does.
