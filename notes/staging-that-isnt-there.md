---
title: The staging area that isn't there
date: 2026-10-23
summary: hvir's git panel can't stage or commit but seven READMEs say it can, six of them from Gemini.
run: hvir/gemini-4-argon__copilot-cli__20261023T024336Z
quote: Off-main-thread Git engine (`git-worker`) supporting working-tree status, staging/unstaging, commits, branch & worktree management
kind: invented feature
tags: [gemini, invented, git]
pin: true
---

hvir's git panel is read-mostly. It shows status, history, blame and diffs, and the only
things it will change are on a short list in `src/main/git/mutation-authorization.ts`:

```ts
export type GitMutationKind = 'worktree-prune' | 'branch-switch' | 'fetch' | 'pull'
```

No stage, commit, or push; in hvir I expect you'll have your agent do that.

Seven READMEs give it a staging area anyway:

| run | tier | what it says |
|---|---|---|
| Gemini 4 Argon | default | "staging/unstaging, commits, branch & worktree management" |
| Gemini 4 Argon | min | "staging/unstaging, branch switching, fetching, pulling, and worktree pruning" |
| Gemini 3.5 Flash | max | "In-app file staging, commits, branch switching, remote fetches" |
| Gemini 3.7 Flash | default | "Interactive Git panel for staging, committing, branch switching, fetching" |
| Gemini 3.8 Flash | min | "Integrated Git status tracking, staging, changes inspector, commit log" |
| Gemini 3.8 Flash | max | "Stage, unstage, and inspect working tree changes" |
| Claude Opus 4.7 | max | "status, staging, diff, branch switching, worktrees, fetch" |

Argon's min line is the clearest case: it lists all four real mutations and then adds staging
in front of them. It found the list, and the list didn't have staging, but a git panel has
staging, so it wrote staging.

hvir *does* track staged and unstaged state (the changes view shows both), and every git client
the model has ever seen probably has a stage button next to that. So it fills in the feature it
expects to be there.

Three READMEs go the other way and say so outright: Opus 5.5 at max, Sonnet 5.5 at max, and
Haiku 5.5 at max (*"The git panel does not commit, stage, or push."*). Argon at max gets the
list right too, without calling out what's missing which I think its even more correct (no need
to draw attention to somthing that's not there.)
