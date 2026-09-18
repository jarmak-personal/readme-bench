A small, informal benchmark for how well coding agents understand an
unfamiliar repository and explain it. Take a repository, remove its
documentation and agent-instruction files, and give every model the same
prompt:

> Please create a README.md for this project.

The agent inspects the repository with its tools, offline, and writes the
README. The README is published exactly as produced. That is the result —
there is no score.

## What a run shows

- whether the model worked out what the project does
- whether install and usage are right, and checkable
- what it chose to include, and what it chose to leave out
- whether it invented anything the code doesn't support

## What the numbers are

Wall-clock, request count, tokens, tool calls, files read, and compactions
are captured from the harness for context. Token counts use each vendor's
tokenizer and cache accounting and are not comparable across vendors. No
metric is the default ordering; runs are listed alphabetically by model,
then by version, then by effort tier.

## Isolation

The agent has no network access and can see only the working copy plus a
scratch home directory. Git history is a single commit. Dependencies are
installed before the agent starts, so it can run the project's own tooling
but cannot fetch anything.

[The targets](#/targets) · method, scripts, and raw run data:
[github.com/jarmak-personal/readme-bench](https://github.com/jarmak-personal/readme-bench)
