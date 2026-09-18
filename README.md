# README Challenge

A small, informal benchmark for how well coding agents can understand an
unfamiliar repository and explain it.

> [!NOTE]
> (This is AI generated, and, as the bench shows (IMO): it is not great.)**

**One repo. One prompt. Here's the README.**

* Start with a fixed repository snapshot.
* Remove existing documentation and agent instruction files.
* Give each model the same prompt:

  > Please create a README.md for this project.

* Let the agent inspect the repository with its tools and write the README.
* Publish the READMEs side by side, exactly as produced.

There is no score. The README is the result. Readers can see how each system
understood the same project and what it chose to communicate: what the
project does, how to install and use it, which details matter, and whether
it invented anything the code doesn't support.

## Method

### Target repository

A repository at one commit, prepared by `scripts/prepare-target.py` into
`targets/<name>/` with a committed `targets/<name>.lock.json` recording the
upstream commit, everything removed, and any manifest fixups. The script
clones, strips human-authored explanation, and re-initialises git as a single
orphan commit ("Initial commit", no upstream URL) so the removed files are not
recoverable from history. Agents do go looking: one run tried `git fsck
--lost-found` and `git log -S AGENTS.md`. Several targets can coexist;
results are keyed by target.

**Scars.** Stripping leaves references behind: a CI step that lints
`docs/adr`, a script that reads `AGENTS.md`, a `homepage` field in the
manifest. These can't be removed without editing the software itself, so
they stay. An agent can infer that documentation existed; it cannot recover
it.

Removed: `README*`, `docs/`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`,
`.github/copilot-instructions.md`, `.github/{instructions,agents,skills,prompts}`,
`.claude/`, `.cursor*`, `CONTRIBUTING*`, `ARCHITECTURE*`, `DESIGN*`,
`CHANGELOG*` and similar (see the script for the full pattern list).

Kept: source, comments and docstrings, tests, package manifests,
configuration, schemas and types, CLI implementations, build files, licenses.
Anything the software itself reveals is fair game. Per-target `--keep` and
`--strip` overrides handle judgment calls (e.g. a `.agents/skills` directory
that ships inside the wheel is product, not repo documentation).

**Manifest fixups.** `readme = "README.md"` in `pyproject.toml` makes a
Python package unbuildable once the README is gone, as do build-system
force-includes of removed docs. The prepare step drops those lines and
records each one in the lock file.

**Dependencies.** The agent has no network, so it could never install
anything itself. Each target has a setup command (`npm ci`, `uv sync`, …)
that runs in every fresh working copy *before* the agent starts, so the
agent sees the repo as a developer would after cloning and installing. The
setup result is committed in the working copy so it never appears in the
agent's diff.

**Contamination.** Removing the README from the snapshot does not remove it
from training data. A public, popular repo measures recall as much as
comprehension. Prefer an obscure or private repo, or a fork with deliberate
mutations (renamed package, changed flag, removed feature) so a memorised
README is detectably wrong.

### Isolation

The agent runs with **no network access** and can only see the working copy.
This is enforced, not requested:

* Copilot CLI's sandbox (macOS Seatbelt) with outbound and local network
  blocked, the real home directory denied by absolute path, keychain and
  dev-tool caches denied (`harness/copilot/settings.template.json`, rendered
  per run).
* Copilot's path permissions restricted to the working copy plus a per-run
  scratch directory (no `--allow-all-paths`).
* The agent's `$HOME` and `$TMPDIR` point at that scratch directory
  (`/private/var/tmp/ws/<random>/home`), so tests and tools that
  need a writable home or temp dir work without the agent fighting the
  sandbox — and nothing real is exposed. Tool caches (uv, npm, electron)
  live in a bench-owned cache dir the sandbox can read.
* Web tools removed from the model's tool list; built-in GitHub MCP server
  disabled; custom instructions disabled.
* Clean environment (`env -i`) with the auth token stripped from the shell.
* Working copies live outside `$HOME` under an opaque per-run scratch dir
  (`/private/var/tmp/ws/<random>/<project>`), named after the project, with
  a one-commit git history authored by the project's author and no remote,
  and are deleted after the run. Nothing in the paths, environment, or git
  history mentions the bench, the model, or the run.

Verified with a probe prompt that tries DNS, HTTP, loopback, the real home,
`/etc`, the built-in file reader, and web fetch (all blocked), and the
scratch home, `$TMPDIR`, `tempfile`, `uv`, `git log` (all work).

### Harness

The harness is part of the system under test. The first batches use
**GitHub Copilot CLI** (headless `-p` mode, `--allow-all-tools`,
`--no-ask-user`) because it exposes many models under one consistent
harness with good usage reporting. Runs on other harnesses (vendor-native
agents, minimal agents) are separate runs, not interchangeable ones.

The CLI version cannot be pinned forever, since new models require new
versions. A **batch** is one CLI version; every run records its batch.

Autonomy policy: `--no-ask-user`. An agent that would have asked a
clarifying question instead proceeds or stops. A run that produces no
README is still a run.

### Capture

Each run lives in `results/<target>/<batch>/<run-id>/`:

| file | contents |
|---|---|
| `README.md` | the artifact, exactly as produced (absent if none) |
| `meta.json` | model (id + vendor/name/version from `models.json`), harness + version, target, prompt, timing, exit code, usage, tool-call counts by tool, files viewed, compactions (with pre/post token counts) and truncations |
| `usage.json` | Copilot's usage report: input / output / cache read / cache write / reasoning tokens, request count (LLM round-trips), API duration, cost |
| `otel.jsonl` | OpenTelemetry spans and metrics, including every tool call with arguments (which files were read) |
| `events.jsonl` | the CLI's JSON event stream |
| `session.md` | human-readable transcript |
| `changes.diff` | everything the agent changed in the working tree |
| `setup.log` | output of the target's dependency setup |

Token counts are not comparable across vendors (different tokenizers,
different cache accounting), and compaction counts depend on each model's
context window. They are context, not a score.

**What leaks, and the scrub.** Transcripts and telemetry are public once
committed, and they pick up more than the README: `git log` shows the
snapshot commit's author, Copilot's telemetry records its sandbox policy
(which names the real home directory as a denied path), and build tools log
cache paths. Two measures:

* `prepare-target.py` authors the snapshot commit with the repo owner's
  GitHub noreply alias (`<owner>@users.noreply.github.com`), never the
  upstream author's real address.
* `scripts/sanitize-results.py` rewrites the invoking user's home directory
  to `~` and their git email to its noreply alias across `results/` and the
  lock files, plus any literal replacements in a private, gitignored
  `.sanitize.json`. `--check` reports anything that still looks like a home
  path or an email and is not on the allow list. Run it before committing
  results; the Pages workflow does not.

Transcripts also embed every file the agent read, so publishing them
redistributes the target. Keep the target's license notice with the
results, and for a target that is not open source publish only the README,
`meta.json` and the trace timeline (`site/data/traces.json` carries
timestamps and tool names, no code).

### Presentation

Runs are grouped by model, alphabetically by model name and then by version
(natural sort, ascending: Opus 4.8 before Opus 5), and within a model by
effort tier (min → default → max). That is organisation, not ranking.
Metrics such as tokens, turns, wall-clock and length are shown and sortable,
but no metric is the default order.

Every model runs at three **effort tiers**: the harness default, the lowest
reasoning effort it accepts, and the highest. The tier is recorded per run
(from `reasoning_effort_requested`, falling back to the batch name for models
that take no effort setting), so the site can lay the runs out as a
models × tiers grid.

Curation is a separate layer: notes on top of the artifact, visually
distinct from it. No LLM-as-judge; models prefer their own family and a
rubric would only move the argument.

## Site

`scripts/build-site.py` turns `results/` into `site/data/` and the static
app in `site/` renders it. GitHub Actions rebuilds and deploys it to Pages
on push.

| page | what it is |
|---|---|
| **Overview** (`#/`) | one chart (input tokens against README lines, each model a path from min to max effort; a run with no README sits hollow on the baseline) beside the editor's notes |
| **Reading room** (`#/runs`) | every run in a rail with time and length bars; the README as produced on the right; pin one run and the next opens beside it, with a by-section compare a click away |
| **Effort** (`#/effort`) | the models × tiers grid, shaded by any one metric |
| **Trace** (`#/trace`) | every run on one clock: each tool call a tick (rust = the write), hatched while the model thinks and solid while it streams, from `events.jsonl`; click a strip to read that README in a drawer |
| **Notes** (`#/notes`) | every note, newest first |

Plus a page per run (README, facts, tool calls, files read), transcript and
diff pages, and target pages.

Everything the curator writes is markdown, in one place:

* `notes/<slug>.md` — a note. Front matter, all optional: `title:`,
  `date:`, `summary:` (one line; defaults to the body's first paragraph),
  `tags: [a, b]`, `run: <target>/<run-id>` (attaches the note to that run:
  it then appears on the run page, in the reading room and the trace
  drawer, and marks the run with ※), `quote:` (a line from the README or
  transcript, shown on the card), `kind:` (a small label), and `pin: true`
  (show it on the overview). The Notes page lists every note; each has its
  own page at `#/notes/<slug>`.
* `about.md` — the About page.
* `targets/<name>.md` — about the target, in the curator's words: what it
  actually does, real install/usage, things that don't exist. Front matter
  `title:` and `summary:`.

Preview locally: `scripts/build-site.py && (cd site && python3 -m http.server 8000)`.

## Usage

```bash
# 1. Prepare a target (once per target)
scripts/prepare-target.py hvir https://github.com/jarmak-personal/hvir <commit> --setup 'npm ci'

# 2. Run one model against one target
scripts/run-copilot.sh --target hvir --model claude-sonnet-5

# Options: --batch <id>  --prompt-file <file>  --out <dir>  --scratch-root <dir>  --keep-work
```

Requirements: `copilot` (GitHub Copilot CLI), `gh` (for the auth token),
`git`, `python3`. macOS for the Seatbelt sandbox; Linux works with
`bwrap` and the namespace tooling Copilot's sandbox requires.

Available model ids: `curl -H "Authorization: Bearer $(gh auth token)" https://api.githubcopilot.com/models`.
Models with `policy.state: disabled` must be enabled in your GitHub Copilot
settings first. Add new ids to `models.json` with their sort keys.

## License

Code is MIT; the data in `results/` and `notes/` is CC BY 4.0. See
`LICENSE`. Each target keeps its own license, which the transcripts quote.
