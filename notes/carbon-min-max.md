---
title: Carbon reads the same at min and max
date: 2026-11-13
summary: Gemini 4 Carbon's effort setting buys thinking, not exploring. Its min run had the most tool calls of all three tiers.
run: hvir/gemini-4-carbon__copilot-cli__20261113T160228Z
kind: comparison
tags: [gemini, effort]
pin: true
---

Usually more effort means more exploring. Gemini 4 Carbon at min made more tool calls (76)
than at max (75) and took longer than at default. Of the 34 models with all three tiers on
the bench, it's the only one whose min run made the most calls.

The one-call gap is noise. What stands out is that min and max did the same reading:

| | min (low) | default (medium) | max (high) |
|---|---|---|---|
| model requests | 17 | 13 | 17 |
| files read | 58 | 53 | 57 |
| tool calls | 76 | 63 | 75 |
| reasoning tokens | **0** | 3,179 | **5,466** |
| model time | 258s | 205s | 378s |
| wall clock | 353s | 217s | 400s |
| README lines | 146 | 122 | 162 |

For Carbon, the effort setting changes how much it thinks between steps, not how many
steps it takes. On `low` it doesn't think at all (zero reasoning tokens), but it still reads
as much as it does on `high`.

**The extra time at min wasn't the model.** Min spent 95 seconds outside model calls, against
12 for default. That went on running hvir's own checks: lint and typecheck before writing,
then the seam check, format, lint and two architecture test files after, then lint and the
tests again. Nothing a README can break. Max ran a lighter set (seams, architecture,
format), and default only ran `format:check`.

**Not a Gemini 4 thing.** Gemini 4 Argon does explore more at its highest effort: 38 files at
`high`, against 18–22 at `low` and `medium`. Its two lower tiers look alike, though: neither
used any reasoning tokens, so `medium` behaved like `low`.
