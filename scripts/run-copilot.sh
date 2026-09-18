#!/usr/bin/env bash
# Run one README Challenge trial with GitHub Copilot CLI.
#
#   scripts/run-copilot.sh --target <name> --model <model-id> [--batch <id>] [--prompt-file <file>]
#                          [--reasoning-effort <level>] [--timeout <seconds>]
#
# Each run gets a fresh copy of targets/<name>/ under an opaque per-run
# scratch dir, /private/var/tmp/ws/<8 hex>/<name>/ (outside $HOME, which the
# sandbox denies), runs the target's setup command (deps; the agent has no
# network), then runs copilot headless with the sandbox policy rendered from
# harness/copilot/settings.template.json and captures everything into
# results/<target>/<batch>/<run-id>/:
#
#   README.md        the artifact (absent if the model didn't produce one)
#   meta.json        model, harness, target, prompt, timing, exit code, usage,
#                    tool-call counts, compactions, reasoning effort (requested
#                    and as actually used), every model the session called
#   usage.json       copilot --usage-output-file
#   otel.jsonl       OpenTelemetry spans + metrics (every tool call with args)
#   events.jsonl     copilot --output-format json event stream
#   session.md       copilot --share transcript
#   changes.diff     everything the agent changed in the working tree
#   setup.log        output of the target's setup command
#   stderr.log       copilot stderr
#   logs/            copilot --log-dir (gitignored)
#
# Nothing the agent can observe should hint that this is a benchmark: the
# scratch dir name is random, the working copy is named after the project,
# its git history is one commit by the project's author with no remote and
# no reflog of where it came from, every path in the environment and on the
# copilot command line lives under the scratch dir or the agent's fake HOME,
# and the scratch dir is deleted after the run (--keep-work to keep it).
#
# Auth: COPILOT_GITHUB_TOKEN if set, otherwise `gh auth token`, because
# COPILOT_HOME is redirected to harness/copilot and won't see ~/.copilot creds.
set -euo pipefail

BENCH_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRATCH_ROOT="${READMEBENCH_SCRATCH_ROOT:-/private/var/tmp/ws}"
CACHE_ROOT="$SCRATCH_ROOT/cache"
KEEP_WORK=false
TARGET_NAME=""
MODEL=""
BATCH=""
PROMPT_FILE="$BENCH_ROOT/prompt.txt"
OUT_ROOT="$BENCH_ROOT/results"
EFFORT=""   # copilot --reasoning-effort; empty = harness default for the model
TIMEOUT=1200  # seconds before a stalled run is killed (exit code 124, like timeout(1))

while [ $# -gt 0 ]; do
  case "$1" in
    --target)      TARGET_NAME="$2"; shift 2 ;;
    --model)       MODEL="$2"; shift 2 ;;
    --batch)       BATCH="$2"; shift 2 ;;
    --prompt-file) PROMPT_FILE="$2"; shift 2 ;;
    --reasoning-effort) EFFORT="$2"; shift 2 ;;
    --timeout)     TIMEOUT="$2"; shift 2 ;;
    --out)         OUT_ROOT="$2"; shift 2 ;;
    --scratch-root) SCRATCH_ROOT="$2"; CACHE_ROOT="$SCRATCH_ROOT/cache"; shift 2 ;;
    --keep-work)   KEEP_WORK=true; shift ;;
    -h|--help)     sed -n '2,28p' "$0"; exit 0 ;;
    *) echo "unknown arg: $1" >&2; exit 2 ;;
  esac
done
[ -n "$MODEL" ] || { echo "error: --model is required" >&2; exit 2; }
[ -n "$TARGET_NAME" ] || { echo "error: --target is required" >&2; exit 2; }
TARGET="$BENCH_ROOT/targets/$TARGET_NAME"
LOCK="$BENCH_ROOT/targets/$TARGET_NAME.lock.json"
[ -d "$TARGET/.git" ] && [ -f "$LOCK" ] || { echo "error: target '$TARGET_NAME' not prepared; run scripts/prepare-target.py" >&2; exit 1; }

HARNESS_VERSION="$(copilot --version 2>/dev/null | sed -nE 's/^GitHub Copilot CLI ([0-9]+(\.[0-9]+)*)\.?$/\1/p' | head -1)"
[ -n "$HARNESS_VERSION" ] || { echo "error: could not determine copilot version" >&2; exit 1; }
BATCH="${BATCH:-$(date -u +%Y-%m-%d)_copilot-cli-$HARNESS_VERSION}"
# The harness is part of what's measured, so a batch must not mix versions
# (Copilot CLI auto-updates whenever it's run outside this script).
DRIFT="$(python3 -c '
import glob, json, os, sys
seen = {json.load(open(m))["harness"]["version"] for m in glob.glob(os.path.join(sys.argv[1], "*", "meta.json"))}
print(" ".join(sorted(seen - {sys.argv[2]})))' "$OUT_ROOT/$TARGET_NAME/$BATCH" "$HARNESS_VERSION")"
[ -z "$DRIFT" ] || { echo "error: batch '$BATCH' has runs on copilot-cli $DRIFT but the installed CLI is $HARNESS_VERSION; use a new --batch" >&2; exit 1; }

TS="$(date -u +%Y%m%dT%H%M%SZ)"
RUN_ID="${TARGET_NAME}__${MODEL}__copilot-cli__${TS}"
OUT="$OUT_ROOT/$TARGET_NAME/$BATCH/${MODEL}__copilot-cli__${TS}"
# Everything the agent can see lives under one opaque scratch dir: the working
# copy is named after the project, and the agent's HOME and TMPDIR are a
# sibling. The sandbox grants the user profile and temp dir read/write, and
# this way that grant covers nothing real. The real home is denied by absolute
# path in the rendered policy. Copilot's own state (settings, session store,
# logs, usage/otel/share outputs) goes in $FAKE_HOME/.copilot, its default
# location, and is collected into $OUT afterwards.
SCRATCH="$SCRATCH_ROOT/$(openssl rand -hex 4)"
WORK="$SCRATCH/$TARGET_NAME"
FAKE_HOME="$SCRATCH/home"
COPILOT_HOME="$FAKE_HOME/.copilot"
mkdir -p "$OUT" "$CACHE_ROOT" "$FAKE_HOME/tmp" "$COPILOT_HOME/logs"
sed -e "s|\${REAL_HOME}|$HOME|g" -e "s|\${FAKE_HOME}|$FAKE_HOME|g" -e "s|\${CACHE_ROOT}|$CACHE_ROOT|g" \
  "$BENCH_ROOT/harness/copilot/settings.template.json" > "$COPILOT_HOME/settings.json"
cp "$BENCH_ROOT/harness/copilot/config.json" "$COPILOT_HOME/config.json"

PROMPT="$(cat "$PROMPT_FILE")"
SETUP="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1])).get("setup") or "")' "$LOCK")"
# The one commit the agent sees is authored by the project's author (recorded
# in the lock file), falling back to the invoking user's git identity.
AUTHOR_NAME="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1])).get("author_name") or "")' "$LOCK")"
AUTHOR_EMAIL="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1])).get("author_email") or "")' "$LOCK")"
[ -n "$AUTHOR_NAME" ] || AUTHOR_NAME="$(git config --get user.name || true)"
[ -n "$AUTHOR_EMAIL" ] || AUTHOR_EMAIL="$(git config --get user.email || true)"
[ -n "$AUTHOR_NAME" ] && [ -n "$AUTHOR_EMAIL" ] || { echo "error: no author in lock and no git user.name/user.email configured" >&2; exit 1; }

echo "run:     $RUN_ID"
echo "model:   $MODEL${EFFORT:+ (effort $EFFORT)}"
echo "harness: copilot-cli $HARNESS_VERSION"
echo "target:  $TARGET_NAME"
echo "out:     $OUT"
echo "work:    $WORK"

# Files only; the git repo the agent sees is created from scratch below so it
# carries no remote, no reflog of a clone, and no dangling objects.
git clone --quiet "$TARGET" "$WORK"
rm -rf "$WORK/.git"

# Dependencies, with network, before the agent starts.
SETUP_EXIT=None
if [ -n "$SETUP" ]; then
  echo "setup:   $SETUP"
  set +e
  ( cd "$WORK" && UV_CACHE_DIR="$CACHE_ROOT/uv" npm_config_cache="$CACHE_ROOT/npm" \
      ELECTRON_CACHE="$CACHE_ROOT/electron" bash -c "$SETUP" ) > "$OUT/setup.log" 2>&1
  SETUP_EXIT=$?
  set -e
  [ "$SETUP_EXIT" -eq 0 ] || echo "warning: setup exited $SETUP_EXIT (see setup.log)" >&2
fi
# One commit, after setup so its artifacts (.venv, node_modules) don't show up
# as agent changes. Local-only identity: the sandbox can't read ~/.gitconfig.
git -C "$WORK" init --quiet
git -C "$WORK" config user.name "$AUTHOR_NAME"
git -C "$WORK" config user.email "$AUTHOR_EMAIL"
git -C "$WORK" add -A >/dev/null 2>&1 || true
git -C "$WORK" commit --quiet -m "Initial commit" >/dev/null 2>&1 || true

# The sandbox inherits the environment, so start from a clean one: no shell
# session vars, no stray credentials, git pointed away from ~/.gitconfig (which
# the sandbox can't read and would otherwise make every git call fail), and
# tool caches under the bench cache dir (readable inside the sandbox). No CI=1:
# a developer's shell doesn't have it, and nothing here needs it (no tty, so
# tools already run non-interactively). The OTel vars are stripped from the
# agent's shell via --secret-env-vars below; copilot itself still honors them.
CLEAN_ENV=(
  "HOME=$FAKE_HOME"
  "USER=$USER"
  "LOGNAME=$USER"
  "SHELL=/bin/zsh"
  "TERM=dumb"
  "LANG=${LANG:-en_US.UTF-8}"
  "TMPDIR=$FAKE_HOME/tmp"
  "PATH=$HOME/.local/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
  "GIT_CONFIG_GLOBAL=/dev/null"
  "GIT_CONFIG_NOSYSTEM=1"
  "GIT_TERMINAL_PROMPT=0"
  "UV_CACHE_DIR=$CACHE_ROOT/uv"
  "UV_OFFLINE=1"
  "npm_config_cache=$CACHE_ROOT/npm"
  "npm_config_offline=true"
  "ELECTRON_CACHE=$CACHE_ROOT/electron"
  "NO_COLOR=1"
  "COPILOT_HOME=$COPILOT_HOME"
  "COPILOT_GITHUB_TOKEN=${COPILOT_GITHUB_TOKEN:-$(gh auth token)}"
  "COPILOT_AUTO_UPDATE=false"
  "COPILOT_OTEL_FILE_EXPORTER_PATH=$COPILOT_HOME/logs/telemetry.jsonl"
  "OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT=true"
)

STARTED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
T0=$(date +%s)
set +e
# macOS has no timeout(1); a watchdog subshell kills the run's process group
# if it stalls (seen once: copilot 1.0.86 idling before its first model call).
(
  cd "$WORK" && exec env -i "${CLEAN_ENV[@]}" copilot \
    -p "$PROMPT" \
    --model "$MODEL" \
    ${EFFORT:+--reasoning-effort "$EFFORT"} \
    --allow-all-tools \
    --add-dir "$FAKE_HOME" \
    --no-ask-user \
    --no-custom-instructions \
    --disable-builtin-mcps \
    --excluded-tools web_fetch fetch_copilot_cli_documentation \
    --secret-env-vars COPILOT_GITHUB_TOKEN COPILOT_OTEL_FILE_EXPORTER_PATH OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT \
    --no-auto-update \
    --output-format json \
    --usage-output-file "$COPILOT_HOME/usage.json" \
    --share "$COPILOT_HOME/session.md" \
    --log-dir "$COPILOT_HOME/logs" \
    --log-level info
) > "$OUT/events.jsonl" 2> "$OUT/stderr.log" &
RUN_PID=$!
( sleep "$TIMEOUT"; kill -0 "$RUN_PID" 2>/dev/null && { echo "timeout: killing run after ${TIMEOUT}s" >&2; touch "$OUT/.timed-out"; kill -TERM "$RUN_PID"; sleep 10; kill -KILL "$RUN_PID" 2>/dev/null; } ) &
WATCHDOG=$!
wait "$RUN_PID"; EXIT_CODE=$?
pkill -P "$WATCHDOG" 2>/dev/null; kill "$WATCHDOG" 2>/dev/null; wait "$WATCHDOG" 2>/dev/null   # its sleep too, or it holds stdout open
# copilot exits 0 on SIGTERM, so the watchdog leaves a marker instead
[ -f "$OUT/.timed-out" ] && { EXIT_CODE=124; rm -f "$OUT/.timed-out"; }
set -e
T1=$(date +%s)
FINISHED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Collect copilot's outputs from the fake home.
for f in usage.json session.md; do
  [ -f "$COPILOT_HOME/$f" ] && mv "$COPILOT_HOME/$f" "$OUT/$f"
done
[ -f "$COPILOT_HOME/logs/telemetry.jsonl" ] && mv "$COPILOT_HOME/logs/telemetry.jsonl" "$OUT/otel.jsonl"
rm -rf "$OUT/logs"; mv "$COPILOT_HOME/logs" "$OUT/logs" 2>/dev/null || mkdir -p "$OUT/logs"

# Artifact + everything else the agent touched (relative to the post-setup commit).
README_PRODUCED=false
if [ -f "$WORK/README.md" ]; then
  cp "$WORK/README.md" "$OUT/README.md"
  README_PRODUCED=true
fi
git -C "$WORK" add -A >/dev/null 2>&1 || true
git -C "$WORK" diff --cached > "$OUT/changes.diff" || true
git -C "$WORK" diff --cached --stat > "$OUT/changes.txt" || true
# The OTel export repeats the system prompt and tool definitions on every
# chat span; dedupe them so the trace is a few hundred KB, not several MB.
[ -f "$OUT/otel.jsonl" ] && python3 "$BENCH_ROOT/scripts/slim-otel.py" "$OUT/otel.jsonl" >/dev/null

PROMPT="$PROMPT" python3 - "$OUT" <<PY
import json, sys, os, collections
sys.path.insert(0, os.path.join("$BENCH_ROOT", "scripts"))
from importlib import import_module
effort_from_otel = import_module("backfill-meta").effort_from_otel
out = sys.argv[1]
models = json.load(open(os.path.join("$BENCH_ROOT", "models.json")))
lock = json.load(open("$LOCK"))
m = models.get("$MODEL", {})

def jsonl(path):
    try:
        for line in open(path):
            line = line.strip()
            if line:
                try: yield json.loads(line)
                except ValueError: pass
    except FileNotFoundError:
        return

# Compaction / truncation from the event stream.
compactions, truncations = [], 0
for e in jsonl(os.path.join(out, "events.jsonl")):
    t = e.get("type")
    d = e.get("data") or {}
    if t == "session.compaction_complete":
        compactions.append({k: d.get(k) for k in (
            "success", "preCompactionTokens", "postCompactionTokens",
            "preCompactionMessagesLength", "messagesRemoved", "model")})
    elif t == "session.truncation":
        truncations += 1

# Tool calls and files read from OTel spans.
tool_calls = collections.Counter()
files_viewed = set()
for r in jsonl(os.path.join(out, "otel.jsonl")):
    if r.get("type") != "span": continue
    attrs = r.get("attributes") or {}
    if attrs.get("gen_ai.operation.name") != "execute_tool": continue
    name = attrs.get("gen_ai.tool.name", "?")
    tool_calls[name] += 1
    if name == "view":
        try:
            p = json.loads(attrs.get("gen_ai.tool.call.arguments", "{}")).get("path")
            if p: files_viewed.add(os.path.relpath(p, "$WORK") if p.startswith("$WORK") else p)
        except ValueError:
            pass

usage = None
try: usage = json.load(open(os.path.join(out, "usage.json")))
except Exception: pass

meta = {
  "id": os.path.basename(out),
  "batch": "$BATCH",
  "target": {"name": lock["name"], "url": lock["url"], "commit": lock["commit"],
             "snapshot_commit": lock["snapshot_commit"]},
  "model": {"id": "$MODEL", "vendor": m.get("vendor"), "name": m.get("name"),
            "version": m.get("version"), "variant": m.get("variant"),
            "display": m.get("display", "$MODEL")},
  "harness": {"name": "GitHub Copilot CLI", "id": "copilot-cli", "version": "$HARNESS_VERSION"},
  "prompt": os.environ["PROMPT"],
  "started_at": "$STARTED_AT",
  "finished_at": "$FINISHED_AT",
  "wall_clock_seconds": $((T1 - T0)),
  "exit_code": $EXIT_CODE,
  "setup_exit_code": $SETUP_EXIT,
  "readme_produced": "$README_PRODUCED" == "true",
  "readme_bytes": os.path.getsize(os.path.join(out, "README.md")) if "$README_PRODUCED" == "true" else None,
  "readme_lines": sum(1 for _ in open(os.path.join(out, "README.md"))) if "$README_PRODUCED" == "true" else None,
  "usage": usage,
  "tool_calls": dict(tool_calls),
  "reasoning_effort_requested": "$EFFORT" or None,
  **effort_from_otel(os.path.join(out, "otel.jsonl"), "$MODEL"),
  "files_viewed": sorted(files_viewed),
  "compactions": compactions,
  "truncations": truncations,
}
json.dump(meta, open(os.path.join(out, "meta.json"), "w"), indent=2)
summary = {k: meta[k] for k in ("wall_clock_seconds", "exit_code", "readme_produced", "readme_lines", "reasoning_level", "truncations")}
summary["compactions"] = len(compactions)
summary["tool_calls"] = sum(tool_calls.values())
if usage:
    mm = (usage.get("modelMetrics") or {}).get("$MODEL") or {}
    u = mm.get("usage") or {}
    summary["requests"] = (mm.get("requests") or {}).get("count")
    summary["tokens"] = {k: u.get(k) for k in ("inputTokens", "outputTokens", "cacheReadTokens", "cacheWriteTokens", "reasoningTokens")}
print(json.dumps(summary))
PY

if [ "$KEEP_WORK" = true ]; then
  echo "kept:    $SCRATCH" >&2
else
  rm -rf "$SCRATCH"
fi
