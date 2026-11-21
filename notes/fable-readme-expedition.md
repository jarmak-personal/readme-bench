---
title: Fable's 21-minute README expedition
date: 2026-11-20
summary: Fable 5.2 ran tests before and after writing a README, and took 21 minutes to finish.
run: hvir/claude-fable-5.2__copilot-cli__20261120T171944Z
kind: long run
tags: [claude, effort-max, long-run]
pin: true
---

Claude Fable 5.2 at max ran the test suite before writing a README.
Afterward it ran the tests again and compared the failures. It also checked architecture,
lint, links and scripts. The resulting README is 278 lines.

| | low | default | max |
|---|---|---|---|
| wall clock | 45s | 40s | 21m 24s |
| tool calls | 8 | 6 | 180 |
| input tokens | 180K | 146K | 24.2M |
| README lines | 95 | 81 | 278 |

The max run first wrote the README around 15 minutes 41 seconds in, then spent more time
editing and checking it. Most of the 24.2 million input tokens were cache reads. In its
final response it called out unverified release URLs
and a tagline it had inferred from a settings preview. Those qualifications are less
visible in the README itself.

[Opus 5.5 at max](#/notes/opus-5-5-max-runtime) took
23 minutes on the pinned CLI, and Sonnet 5.5 took nearly 23 minutes. Their default runs
finished in under a minute. I don't know how much of that is the model, the effort setting,
or Copilot's model-specific instructions. The CLI version is pinned, but that doesn't
establish that every instruction or service behavior is identical across models and runs.

The work is thorough. I'm less sure that running the tests twice made this a better
introduction to hvir for someone who has never seen it. The benchmark asks for a README;
the model has to decide what that means.
