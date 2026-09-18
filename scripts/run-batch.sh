#!/usr/bin/env bash
# Run one README Challenge batch: every model in models.json (or the ones
# given) against one target, sequentially, with a shared batch id.
#
#   scripts/run-batch.sh --target <name> --batch <id> [--effort min|max|<level>]
#                        [--log <file>] [model-id ...]
#
# --effort min / max picks each model's lowest / highest supported reasoning
# level from the Copilot models API (models with no levels run without the
# flag); a literal level is passed to every model as-is. No --effort means the
# harness default. Models the API says are unavailable are skipped up front.
# A failed run is logged and the batch continues. Progress goes to stdout and,
# with --log, to a file as well.
set -uo pipefail
BENCH_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET=""; BATCH=""; EFFORT=""; LOG=""; MODELS=()
while [ $# -gt 0 ]; do
  case "$1" in
    --target) TARGET="$2"; shift 2 ;;
    --batch)  BATCH="$2"; shift 2 ;;
    --effort) EFFORT="$2"; shift 2 ;;
    --log)    LOG="$2"; shift 2 ;;
    -h|--help) sed -n '2,14p' "$0"; exit 0 ;;
    -*) echo "unknown arg: $1" >&2; exit 2 ;;
    *) MODELS+=("$1"); shift ;;
  esac
done
[ -n "$TARGET" ] && [ -n "$BATCH" ] || { echo "error: --target and --batch are required" >&2; exit 2; }
[ ${#MODELS[@]} -gt 0 ] || MODELS=($(python3 -c 'import json;print(" ".join(k for k in json.load(open("'"$BENCH_ROOT"'/models.json")) if not k.startswith("_")))'))
[ -n "$LOG" ] && exec > >(tee -a "$LOG") 2>&1

# model id → supported reasoning levels (lowest→highest), from the API.
LEVELS="$(curl -sf -H "Authorization: Bearer ${COPILOT_GITHUB_TOKEN:-$(gh auth token)}" \
  -H "Copilot-Integration-Id: copilot-cli" https://api.githubcopilot.com/models \
  | python3 -c '
import json,sys
order=["none","minimal","low","medium","high","xhigh","max"]
for m in json.load(sys.stdin)["data"]:
    lv=sorted(((m.get("capabilities") or {}).get("supports") or {}).get("reasoning_effort") or [], key=order.index)
    print(m["id"], (m.get("policy") or {}).get("state") or "enabled", " ".join(lv))')" || { echo "error: could not fetch models" >&2; exit 1; }

echo "batch:   $BATCH"; echo "target:  $TARGET"; echo "effort:  ${EFFORT:-default}"; echo "models:  ${MODELS[*]}"; echo
failed=(); skipped=()
for m in "${MODELS[@]}"; do
  read -r _ policy levels <<<"$(grep "^$m " <<<"$LEVELS" || echo "$m missing")"
  if [ "$policy" = "missing" ] || [ "$policy" = "disabled" ]; then
    echo "##### $m: skipped ($policy)"; skipped+=("$m"); continue
  fi
  level=""
  case "$EFFORT" in
    "")  ;;
    min) level="${levels%% *}" ;;
    max) level="${levels##* }" ;;
    *)   level="$EFFORT" ;;
  esac
  echo "##### $m${level:+ @ $level} $(date -u +%H:%M:%SZ)"
  "$BENCH_ROOT/scripts/run-copilot.sh" --target "$TARGET" --model "$m" --batch "$BATCH" ${level:+--reasoning-effort "$level"} \
    || { echo "##### $m FAILED (exit $?)"; failed+=("$m"); }
  echo
done
echo "##### BATCH DONE $(date -u +%H:%M:%SZ)  failed: ${failed[*]:-none}  skipped: ${skipped[*]:-none}"
[ ${#failed[@]} -eq 0 ]
