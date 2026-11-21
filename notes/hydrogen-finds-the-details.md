---
title: Hydrogen finds the details
date: 2026-11-20
summary: At low effort Gemini 4 Hydrogen misses the agents. At high effort it finds them, and a lot more besides.
run: hvir/gemini-4-hydrogen__copilot-cli__20261120T174602Z
kind: comparison
tags: [gemini, effort, readme]
pin: true
---

Gemini 4 Hydrogen at [low effort](#/run/hvir/gemini-4-hydrogen__copilot-cli__20261120T170452Z)
describes hvir as an Electron workbench with a terminal, file viewer, Git and SSH. All useful
things to know. It never mentions coding agents.

At [high effort](#/run/hvir/gemini-4-hydrogen__copilot-cli__20261120T174602Z), it finds
the agents. It even distinguishes Claude Code's preassigned session IDs from Codex's session
discovery, and catches remote SSH image transfer.

But the introduction is a single sentence packing in Electron, SSH, GPU/WASM, harness
orchestration, a file and diff viewer, document review, Git and web panes. Then comes an
extensive feature list, with the agents under the second heading. There's plenty of
information about what hvir contains. I still don't think it tells a new reader very well
why they might want to use it.

| | low | default | high |
|---|---|---|---|
| wall clock | 25s | 44s | 87s |
| README lines | 68 | 106 | 130 |

The extra effort found more of the project. That's not quite the same as choosing what
matters most to someone seeing it for the first time. One run at each setting can't tell
us whether Hydrogen always behaves this way, but the comparison gets at a problem I see in
these READMEs more generally.
