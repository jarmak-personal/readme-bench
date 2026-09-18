# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `ac33950f-8d36-43b7-824f-3c18638037e1`  
> - **Started:** 9/18/2026, 12:19:33 AM  
> - **Duration:** 3m 40s  
> - **Exported:** 9/18/2026, 12:23:13 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>1s</sub>

### Copilot

I'll explore the project structure first to understand what this is.

---

<sub>4s</sub>

### `bash`

**List project root and git log**

$ cd /private/var/tmp/ws/986d17d8/hvir && ls -la && echo "---GIT---" && git --no-pager log --oneline -20 2>/dev/null | head -30

<details>
<summary>32 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 18 00:19 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 18 00:19 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 18 00:19 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 18 00:19 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 18 00:19 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 18 00:19 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 18 00:19 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 18 00:19 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 18 00:19 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 18 00:19 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 18 00:19 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 18 00:19 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 18 00:19 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 18 00:19 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 18 00:19 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 18 00:19 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 18 00:19 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 18 00:19 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 18 00:19 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 18 00:19 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 18 00:19 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 18 00:19 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 18 00:19 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 18 00:19 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 18 00:19 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 18 00:19 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 18 00:19 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 18 00:19 vitest.config.ts
---GIT---
a42874f Initial commit
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### `bash`

**List all project files**

$ cd /private/var/tmp/ws/986d17d8/hvir && find . -not -path '*/node_modules/*' -not -path '*/.git/*' -not -path '*/venv/*' -not -path '*/__pycache__/*' -type f | head -200

<details>
<summary>201 lines</summary>

```
./electron.vite.config.ts
./.githooks/pre-push
./tsconfig.node.json
./LICENSE
./test/real-host-ssh-contract.test.ts
./test/project-entry-deletion.test.ts
./test/project-folder-picker-coordinator.test.ts
./test/harness-launch-menu.test.ts
./test/html-sandbox.test.ts
./test/use-document-review-workspace.test.tsx
./test/pty-supervisor-late-completion.test.ts
./test/terminal-fit.test.ts
./test/ghostty-terminal-search-identity.test.tsx
./test/issue-context.test.ts
./test/development-performance-measure-budget.test.ts
./test/native-installer.test.ts
./test/git-workspace.test.tsx
./test/ghostty-web-update-policy.test.ts
./test/terminal-attention-controller.test.tsx
./test/lifecycle-fixtures.test.ts
./test/pty-session-resources.test.ts
./test/diff-view-refresh.test.tsx
./test/claude-session-recovery.test.ts
./test/terminal-workspace-model.test.ts
./test/external-file-move-renderer.test.tsx
./test/pty-ownership.test.ts
./test/session-dialog.test.tsx
./test/capacity-terminal-activity.test.ts
./test/smoke-failure-artifact.test.ts
./test/release-pr-integrity.test.ts
./test/terminal-recovery-planner.test.ts
./test/project-kind-reconciler.test.ts
./test/terminal-workspace-materialization.test.tsx
./test/harness-probe.test.ts
./test/external-file-move.test.ts
./test/ssh-host-trust.test.ts
./test/tree-git-status.test.ts
./test/ssh-file-access.test.ts
./test/harness-profile-editor.test.tsx
./test/ghostty-web-update-coordinator.test.ts
./test/test-console-output-policy.test.ts
./test/electron-project-reveal.test.ts
./test/terminal-workspace-move-coordinator.test.ts
./test/terminal-wheel.test.ts
./test/diagnostic-evidence.test.ts
./test/git-windowing.test.ts
./test/remote-image-paste.test.ts
./test/workbench-layout.test.ts
./test/csv-parser.test.ts
./test/document-review-retention.test.ts
./test/terminal-semantic-regions.test.ts
./test/harness-shell-environment.test.ts
./test/terminal-context-menu.test.tsx
./test/files-interactions.test.tsx
./test/project-coordinator.test.ts
./test/project-pr-workflow-security.test.ts
./test/electron-process-metrics.test.ts
./test/sessions-terminal-ssh.test.tsx
./test/terminal-runtime.test.tsx
./test/verified-project-copy.test.ts
./test/harness-usage-artifact.test.ts
./test/viewer-tab-close-confirmation.test.tsx
./test/terminal-fork-runtime.test.tsx
./test/viewer-workload-policy.test.ts
./test/token-migration-plan.test.ts
./test/terminal-file-link.test.ts
./test/terminal-attention.test.ts
./test/terminal-ipc-launch-probe.test.ts
./test/external-document-ipc.test.ts
./test/terminal-layout-controls.test.tsx
./test/project-token-fields.test.ts
./test/diagnostic-report.test.ts
./test/viewer-position-operation.test.ts
./test/retained-viewer-workspace-cache.test.ts
./test/smoke-image-paste-fallback.test.ts
./test/issue-lifecycle-guidance.test.ts
./test/smoke-recovery-delivery.test.ts
./test/workbench-command-listener.test.tsx
./test/web-pane-workspace.test.ts
./test/workspace-removal-coordinator.test.ts
./test/ssh-config.test.ts
./test/pty-supervisor-workspace-close.test.ts
./test/project-host-catalog.test.ts
./test/terminal-surface-attachment.test.ts
./test/codex-session-discovery.test.ts
./test/ghostty-terminal-pane-lifecycle.test.tsx
./test/terminal-fork-launch.test.ts
./test/harness-usage-read-scheduler.test.ts
./test/git-graph-layout.test.ts
./test/terminal-profiles.test.tsx
./test/terminal-context-meter.test.tsx
./test/terminal-theme-gallery.test.tsx
./test/highlight-request.test.ts
./test/terminal-resume-unavailable.test.tsx
./test/github-contributor-status.test.ts
./test/commit-detail-client.test.ts
./test/find-control.test.tsx
./test/sessions-usage-observation-port.test.ts
./test/terminal-path-activation.test.ts
./test/worker-host-broker.test.ts
./test/terminal-clipboard-osc.test.ts
./test/viewer-ownership.test.ts
./test/harness-profile-store.test.ts
./test/external-file-move-coordinator.test.ts
./test/codex-session-recovery-lifecycle.test.ts
./test/settings-dialog-focus.test.tsx
./test/window-health-tracker.test.ts
./test/terminal-recovery-controller.test.tsx
./test/project-entry-organization.test.ts
./test/contributor-status.test.ts
./test/terminal-view-fork.test.tsx
./test/harness-argument-editor.test.ts
./test/local-host.test.ts
./test/settings-navigation.test.ts
./test/git-mutation-coordinator.test.ts
./test/project-kind-workflow-security.test.ts
./test/viewport-context-menu.test.ts
./test/document-review-coordinator.test.ts
./test/release-ci-evidence.test.ts
./test/terminal-event-router.test.ts
./test/project-registry-migration.test.ts
./test/electron-renderer-document-lifecycle.test.ts
./test/terminal-pane-event-coordinator-clipboard.test.ts
./test/git-mutation-authorization.test.ts
./test/ghostty-terminal-keyboard.test.ts
./test/macos-file-pasteboard.test.ts
./test/renderer-resource-scopes.test.ts
./test/github-delivery-start-status.test.ts
./test/native-icon-assets.test.ts
./test/terminal-session-commands.test.tsx
./test/ipc-contract.test.ts
./test/terminal-ipc-resume.test.ts
./test/rendered-link.test.ts
./test/prepare-release-linux-package.test.ts
./test/source-view.test.tsx
./test/git-engine.test.ts
./test/workbench-health.test.ts
./test/highlight-protocol.test.ts
./test/ghostty-terminal-events.test.ts
./test/diagnostic-report-evidence.test.ts
./test/ghostty-terminal-fit.test.ts
./test/file-viewer-controls.test.tsx
./test/terminal-runtime.test.ts
./test/project-planning-record.test.ts
./test/packaged-runtime-inspection.test.ts
./test/terminal-clipboard-file-paste.test.ts
./test/ssh-transport-pool.test.ts
./test/project-watch-interests.test.tsx
./test/smoke-selection.test.ts
./test/file-create-actions.test.tsx
./test/installed-startup-probe.test.ts
./test/markdown-highlighting.test.ts
./test/terminal-recovery-dialog.test.tsx
./test/ipc-contract-ownership.test.ts
./test/required-smoke-artifact-workflow.test.ts
./test/filename-enumerator.test.ts
./test/worker-host.typecheck.ts
./test/document-review-delivery-interaction.test.tsx
./test/harness-provider-ownership.test.ts
./test/terminal-workspace-collection.test.tsx
./test/pty-supervisor-observation.test.ts
./test/harness-provider.test.ts
./test/github-project-planning.test.ts
./test/file-name.test.ts
./test/document-review-smoke-driver.test.ts
./test/file-manager-reveal-policy.test.ts
./test/web-pane-route-registry.test.ts
./test/harness-telemetry-envelope.test.ts
./test/workspace-removal-flow.test.ts
./test/ssh-host.test.ts
./test/viewer-command-targets.test.ts
./test/window-policy.test.ts
./test/rendered-image-refresh.test.tsx
./test/capacity-performance.test.ts
./test/git-ignore-refresh.test.ts
./test/application-runtime.test.ts
./test/smoke-interruption.test.ts
./test/terminal-theme-generator.test.ts
./test/pty-session-identity-lifecycle.test.ts
./test/renderer-authority-smoke.test.ts
./test/project-pr-planning.test.ts
./test/harness-telemetry-hub.test.ts
./test/host-path.test.ts
./test/capacity-output-fixtures.test.ts
./test/terminal-profile-recovery.test.ts
./test/pty-supervisor-usage-observation.test.ts
./test/real-host-ssh-workflow.test.ts
./test/external-document-ssh.test.ts
./test/git-worker-host-router.test.ts
./test/ghostty-render-scheduler.test.ts
./test/error-boundary-health.test.tsx
./test/claude-context-telemetry.test.ts
./test/project-host-ownership.test.ts
./test/terminal-theme-catalog.test.ts
./test/test-console-output-policy.ts
./test/harness-profile-draft.test.ts
./test/terminal-sessions-surface-owner.test.tsx
./test/session-token-receipts.test.ts
./test/file-tree-reveal.test.tsx
./test/claude-session-artifact.test.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### Copilot

This is a substantial Electron app. Let me inspect the key config and source structure.

---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/package.json.**

/private/var/tmp/ws/986d17d8/hvir/package.json

<details>
<summary>127 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "author": {
    "name": "hvir contributors"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "desktopName": "hvir",
  "main": "./out/main/index.js",
  "scripts": {
    "postinstall": "npm run install:runtime",
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
    "prebuild": "node scripts/check-terminal-runtime.mts",
    "predev": "node scripts/check-terminal-runtime.mts",
    "dev": "electron-vite dev",
    "build": "npm run typecheck && electron-vite build",
    "build:smoke": "electron-vite build --mode smoke",
    "build:dir": "npm run build && electron-builder --dir",
    "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
    "pack:mac:arm64:signed": "npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true",
    "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
    "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
    "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
    "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
    "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
    "assemble:native-release": "node scripts/assemble-native-release.mjs",
    "render:native-installer": "node scripts/render-native-installer.mjs",
    "preview": "electron-vite preview",
    "typecheck:node": "tsc --noEmit -p tsconfig.node.json",
    "typecheck:web": "tsc --noEmit -p tsconfig.web.json",
    "typecheck": "npm run typecheck:node && npm run typecheck:web",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "hooks:install": "bash scripts/install-git-hooks.sh",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:mutation": "stryker run",
    "check-seams": "bash scripts/check-seams.sh",
    "check-adrs": "node scripts/check-adrs.mjs",
    "architecture:report": "node scripts/architecture-hotspots.mjs",
    "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
    "generate:terminal-themes": "node scripts/generate-terminal-theme-catalog.mts",
    "update:ghostty-web": "node scripts/ghostty-web-update/cli.mts",
    "project:kind": "node scripts/project-management/sync-kind.ts",
    "project:audit": "node scripts/project-management/audit-canonical-project.ts",
    "project:record": "node scripts/project-management/read-planning-record.ts",
    "project:pr": "node scripts/project-management/sync-pull-request-planning.ts",
    "project:status": "node scripts/project-management/read-contributor-status.ts",
    "project:migrate-tokens": "node scripts/project-management/migrate-project-tokens.ts",
    "issue:context": "node scripts/project-management/read-issue-context.ts",
    "issue:start": "node scripts/project-management/start-issue.ts",
    "verify": "npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test",
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
    "smoke:scenario": "npm run build:smoke && node scripts/run-smoke-scenarios.mts",
    "smoke:isolation": "npm run build:smoke && node scripts/run-smoke-interruption.mts",
    "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
    "smoke:linux:installed": "bash scripts/run-linux-package-smoke.sh",
    "smoke:macos:installed": "bash scripts/run-macos-package-smoke.sh",
    "smoke:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts",
    "smoke:development-performance": "node scripts/run-smoke-scenarios.mts development-performance",
    "performance:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts",
    "gauntlet": "bash scripts/phase8-gauntlet.sh"
  },
  "dependencies": {
    "@codemirror/merge": "^6.12.2",
    "@codemirror/search": "^6.7.2",
    "@codemirror/state": "^6.7.4",
    "@codemirror/view": "^6.43.11",
    "bplist-parser": "^0.5.0",
    "chokidar": "^5.0.0",
    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
    "markdown-it": "^15.0.1",
    "markdown-it-task-lists": "^2.1.1",
    "mermaid": "^11.17.2",
    "node-pty": "^1.1.0",
    "plist": "^3.1.1",
    "shiki": "^4.4.3",
    "ssh-config": "^5.2.1",
    "ssh2": "^1.17.0",
    "yaml": "^2.9.0"
  },
  "devDependencies": {
    "@electron/rebuild": "^4.2.0",
    "@eslint/js": "^10.0.1",
    "@stryker-mutator/core": "^10.0.0",
    "@stryker-mutator/vitest-runner": "^10.0.0",
    "@types/node": "^24.13.3",
    "@types/plist": "^3.0.5",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@types/ssh2": "^1.15.6",
    "@vitejs/plugin-react": "^5.2.0",
    "cross-env": "^10.0.0",
    "electron": "^43.4.1",
    "electron-builder": "^26.0.0",
    "electron-vite": "^5.0.0",
    "eslint": "^10.10.0",
    "eslint-config-prettier": "^10.1.0",
    "eslint-plugin-react-hooks": "^7.1.0",
    "eslint-plugin-react-refresh": "^0.5.6",
    "happy-dom": "^20.14.0",
    "node-gyp": "^13.0.1",
    "prettier": "^3.9.6",
    "proper-lockfile": "^4.1.2",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "typescript": "^6.0.3",
    "typescript-eslint": "^8.70.0",
    "vite": "^7.3.0",
    "vitest": "^5.0.0"
  },
  "overrides": {
    "typed-rest-client": {
      "qs": "6.15.3"
    }
  },
  "optionalDependencies": {
    "@hvir/rename-noreplace": "file:packages/rename-noreplace"
  }
}
```

</details>


---

<sub>8s</sub>

### `bash`

**Show src and packages structure**

$ cd /private/var/tmp/ws/986d17d8/hvir && ls -R src | head -100 && echo "===PACKAGES===" && find packages -maxdepth 3 -not -path '*/node_modules/*' | head -40

<details>
<summary>110 lines</summary>

```
main
preload
renderer
shared
workers

src/main:
application-runtime-policy.ts
application-runtime.ts
attention-badge.ts
build-environment.d.ts
diagnostics
document-review
filename-search
git
harness
health
html-preview-protocol.ts
index.ts
ipc
ipc.ts
navigation-policy.ts
project-coordinator.ts
project-file-operations
project-folder-picker
project-host
project-registry.ts
project-watch.ts
pty
renderer-event-delivery.ts
renderer-event-publisher.ts
renderer-presentation-resources.ts
renderer-resource-scopes.ts
sessions
smoke
terminal
viewer
web-pane
window
workbench-runtime.ts
worker-host.ts
workspace-activity.ts
workspace-cleanup.ts
workspace-coordinator.ts
workspace-removal-coordinator.ts

src/main/diagnostics:
diagnostic-event.ts
diagnostic-evidence.ts
diagnostic-intake.ts
diagnostic-journal.ts
diagnostic-report-builder.ts
diagnostic-report-coordinator.ts
diagnostic-report-evidence.ts
diagnostic-report-storage.ts
electron-diagnostic-report-actions.ts
runtime-diagnostics.ts

src/main/document-review:
document-review-application.ts
document-review-coordinator.ts
document-review-delivery-coordinator.ts
document-review-delivery-policy.ts
document-review-delivery-terminal.ts
document-review-policy.ts
document-review-retention.ts
document-review-runtime.ts
document-review-store-codec.ts
document-review-store.ts
index.ts

src/main/filename-search:
filename-enumerator.ts
filename-search-coordinator.ts
filename-search-policy.ts
index.ts

src/main/git:
git-branches.ts
git-command-context.ts
git-detail.ts
git-diff.ts
git-engine.ts
git-history.ts
git-parsers.ts
git-status.ts
git-worktrees.ts
mutation-authorization.ts
mutation-coordinator.ts
untracked-line-counts.ts
worker-host-broker.ts
worker-host-router.ts

src/main/harness:
bounded-line-reader.ts
bundled-harness-providers.ts
claude-context-telemetry.ts
claude-keybindings.ts
claude-session-artifact.ts
claude-session-recovery.ts
===PACKAGES===
packages
packages/rename-noreplace
packages/rename-noreplace/rename_noreplace.c
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
packages/rename-noreplace/build
packages/rename-noreplace/build/rename_noreplace.target.mk
packages/rename-noreplace/build/gyp-mac-tool
packages/rename-noreplace/build/Makefile
packages/rename-noreplace/build/Release
packages/rename-noreplace/build/config.gypi
packages/rename-noreplace/build/binding.Makefile
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### Copilot

Now let me dig into what the app actually does — renderer surfaces, docs, and build config.

---

<sub>16s</sub>

### `bash`

**Inspect renderer, shared, workers, .github**

$ cd /private/var/tmp/ws/986d17d8/hvir && echo "===RENDERER===" && ls src/renderer && echo "===SHARED===" && ls src/shared && echo "===WORKERS===" && ls src/workers && echo "===PRELOAD===" && ls src/preload && echo "===GITHUB===" && find .github -type f | head -40 && echo "===BUILD===" && ls build

<details>
<summary>73 lines</summary>

```
===RENDERER===
index.html
src
===SHARED===
application-build-channel.ts
composer-submit.ts
diagnostic-evidence.ts
diagnostic-report-event.ts
diagnostic-report.ts
diagnostics.ts
disposer.ts
document-review.ts
file-uri.ts
filename-search.ts
fs-types.ts
git-types.ts
harness-profile.ts
harness-provider.ts
harness-telemetry.ts
harness-usage.ts
host-path.ts
html-preview.ts
index.ts
ipc
ipc-contract.ts
ipc.ts
keybindings.ts
markdown-it-task-lists.d.ts
operation-result.ts
project-file-operations.ts
rendered-link.ts
sessions-projection.ts
terminal-attention.ts
terminal-clipboard-file-paste.ts
terminal-start-admission.ts
viewer-types.ts
viewer-workload-policy.ts
web-pane.ts
workbench-health.ts
worker-protocol.ts
workspace-types.ts
===WORKERS===
echo-worker.ts
git-worker.ts
===PRELOAD===
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts
===GITHUB===
.github/workflows/real-host-ssh.yml
.github/workflows/release.yml
.github/workflows/ghostty-web-update.yml
.github/workflows/project-pr-planning.yml
.github/workflows/codeql.yml
.github/workflows/lock-tracker-conversations.yml
.github/workflows/project-kind.yml
.github/workflows/macos-package-release.yml
.github/workflows/release-pr-merged.yml
.github/workflows/ci.yml
.github/workflows/smoke-stress.yml
.github/dependabot.yml
===BUILD===
entitlements.mac.inherit.plist
entitlements.mac.plist
icon-linux.svg
icon-macos.icns
icon-macos.png
icon-macos.svg
icons-linux
linux
native
pkg-scripts
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>16s</sub>

### `bash`

**Find markdown docs and ADR check script**

$ cd /private/var/tmp/ws/986d17d8/hvir && find . -name '*.md' -not -path './node_modules/*' -not -path './.git/*' | head -40 && echo "===ADR-SCRIPT===" && head -40 scripts/check-adrs.mjs

<details>
<summary>41 lines</summary>

```
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
===ADR-SCRIPT===
import console from 'node:console'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { validateAdrLifecycles } from './adr-lifecycle.mts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const adrDirectory = join(root, 'docs', 'adr')
const designPath = join(root, 'docs', 'design.md')
const recordName = /^ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const requiredSections = [
  '## Context',
  '## Decision',
  '## Consequences',
  '## Rejected alternatives',
]
const errors = []

const directoryEntries = readdirSync(adrDirectory).filter((name) =>
  statSync(join(adrDirectory, name)).isFile(),
)
const records = directoryEntries.filter((name) => recordName.test(name)).sort()
const unexpected = directoryEntries
  .filter(
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
  )
  .sort()

for (const name of unexpected) {
  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
}

const recordIds = new Map()
const recordSources = new Map()
for (const name of records) {
  const id = recordName.exec(name)[1]
  const path = join(adrDirectory, name)
  const source = readFileSync(path, 'utf8')
  recordSources.set(name, source)
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>20s</sub>

### Copilot

Repo has no docs directory or README yet. Let me understand the product's feature set in depth.

---

<sub>35s</sub>

### task (Completed)

### Copilot

I’ll inspect the renderer, main process, shared domain types, and packaging config, then summarize what hvir does from the user’s perspective with file-backed citations.

### `glob`

**src/renderer/src/**/*.{ts,tsx}**

"src/renderer/src/**/*.{ts,tsx}"

<details>
<summary>328 matches</summary>

```
[glob: 307 path(s) under /private/var/tmp/ws/986d17d8/hvir/src/renderer/src; grouped by directory]

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/ (68 path(s))
  TerminalContextMenu.tsx
  TerminalContextMeter.tsx
  TerminalDeck.tsx
  TerminalMoveDialog.tsx
  TerminalRail.tsx
  TerminalRailCompact.tsx
  TerminalRecoveryDialog.tsx
  TerminalSearch.tsx
  TerminalSessionRuntimes.tsx
  TerminalView.tsx
  TerminalWorkspace.tsx
  TerminalWorkspaceCollection.tsx
  TerminalWorkspaceControls.tsx
  TerminalWorkspaceDialogs.tsx
  effect-generation.ts
  generated-terminal-theme-catalog.ts
  ghostty-terminal-events.ts
  ghostty-terminal-file-paste.ts
  ghostty-terminal-fit.ts
  ghostty-terminal-keyboard.ts
  ghostty-terminal-pane.ts
  harness-launch-menu.ts
  terminal-attention.ts
  terminal-clipboard-osc.ts
  terminal-clipboard-write.ts
  terminal-clipboard.ts
  terminal-context-menu-position.ts
  terminal-context-menu-target.ts
  terminal-event-router.ts
  terminal-file-link.ts
  terminal-fit.ts
  terminal-fork-policy.ts
  terminal-palette.ts
  terminal-pane-event-coordinator.ts
  terminal-pane-factory.ts
  terminal-pane.ts
  terminal-probe-policy.ts
  terminal-profile-recovery.ts
  terminal-recovery-planner.ts
  terminal-runtime-interactions.ts
  terminal-runtime-launch.ts
  terminal-runtime-live-settings.ts
  terminal-runtime-options.ts
  terminal-runtime-presentation.ts
  terminal-runtime-registry.ts
  terminal-runtime.ts
  terminal-search-controller.ts
  terminal-semantic-regions.ts
  terminal-sessions-surface-owner.ts
  terminal-split-persistence.ts
  terminal-surface-attachment.ts
  terminal-theme-catalog.ts
  terminal-wheel.ts
  terminal-workspace-model.ts
  terminal-workspace-runtime-owner.ts
  use-new-worktree-move-badge.ts
  use-terminal-attention-controller.ts
  use-terminal-attention.ts
  use-terminal-context-menu.ts
  use-terminal-launch-menu-layout.ts
  use-terminal-pane-controller.ts
  use-terminal-persistence.ts
  use-terminal-profiles.ts
  use-terminal-recovery.ts
  use-terminal-session-commands.ts
  use-terminal-workspace-move.ts
  use-terminal-workspace-runtime.ts
  use-terminal-workspace-transfer.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/viewer/ (59 path(s))
  DiffView.tsx
  FileViewer.tsx
  FindControl.tsx
  GoToLineControl.tsx
  LargeFileView.tsx
  MarkdownFragment.tsx
  RenderedView.tsx
  RepositoryImageView.tsx
  SourceView.tsx
  TabStrip.tsx
  code-scroll-anchor.ts
  codemirror-find-target.ts
  csv-parser.ts
  csv-protocol.ts
  csv.worker.ts
  diff-policy.ts
  dom-find-target.ts
  external-document-context.ts
  external-document-tabs.ts
  highlight-protocol.ts
  highlight-request.ts
  highlight-worker.ts
  highlight.worker.ts
  json-protocol.ts
  json.worker.ts
  markdown-client.ts
  markdown-extensions.ts
  markdown-renderer.ts
  markdown-repository-images.ts
  markdown.worker.ts
  render-protocol.ts
  rendered-link-handler.ts
  rendered-position.ts
  retained-viewer-workspace-cache.ts
  shiki-grammar-registry.ts
  shiki-language-catalog.ts
  shiki-language-names.ts
  source-blame-gutter.ts
  source-coordinate.ts
  source-highlighting.ts
  structured-data.ts
  tab-state.ts
  use-diff-inputs.ts
  use-source-blame.ts
  use-viewer-path-lifecycle.ts
  use-viewer-workspace.ts
  viewer-byte-format.ts
  viewer-command-targets.ts
  viewer-document-refresh.ts
  viewer-find.ts
  viewer-path-rebind.ts
  viewer-path-removal.ts
  viewer-position.ts
  viewer-read-policy.ts
  viewer-workload-policy.ts
  viewer-workspace-model.ts
  viewer-workspace-persistence.ts
  viewer-workspace-selectors.ts
  viewer-workspace-state.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/settings/ (34 path(s))
  ComposerSubmitConsentDialog.tsx
  HarnessProfileAdvancedFields.tsx
  HarnessProfileCommandFields.tsx
  HarnessProfileDialogs.tsx
  HarnessProfileEditor.tsx
  HarnessProfileOverlays.tsx
  HarnessProfilesSettings.tsx
  SettingsActiveSection.tsx
  SettingsDialog.tsx
  SettingsSection.tsx
  SettingsSectionNavigation.tsx
  TerminalThemeGallery.tsx
  harness-argument-editor.ts
  harness-profile-draft.ts
  harness-profile-editor-policy.ts
  harness-profile-request-policy.ts
  keybindings.ts
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/KeybindingsSettings.tsx
  sections/TerminalSettings.tsx
  sections/TypographyFontField.tsx
  settings-draft.ts
  settings-model.ts
  settings-navigation.ts
  settings.ts
  typography-presentation.ts
  typography-settings.ts
  use-add-harness-dialog.ts
  use-harness-binding-authorization.ts
  use-harness-folder-picker.ts
  use-harness-profile-editor.ts
  use-harness-profile-load.ts
  use-settings-controller.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/tree/ (27 path(s))
  DirectoryTree.tsx
  FileCreateOverlays.tsx
  FileDeletionDialog.tsx
  FileExternalMoveDialog.tsx
  FileOrganizationDialog.tsx
  FileTree.tsx
  FilenameSearch.tsx
  directory-entry-sort.ts
  file-action-destination.ts
  file-action-menu.ts
  file-manager-reveal.ts
  file-name.ts
  file-operation-feedback.ts
  git-ignore-refresh.ts
  git-status-decoration.ts
  project-entry-drag.ts
  project-file-entry-name.ts
  project-file-owner-key.ts
  use-external-file-actions.ts
  use-external-file-copy.ts
  use-external-file-move.ts
  use-file-create-actions.ts
  use-file-deletion-actions.ts
  use-file-manager-reveal.ts
  use-file-organization-actions.ts
  use-path-copy-action.ts
  use-project-file-operation.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/document-review/ (23 path(s))
  DocumentReviewControls.tsx
  DocumentReviewDeliveryPanel.tsx
  DocumentReviewInlineSurface.tsx
  document-review-anchor.ts
  document-review-batches.ts
  document-review-capture.ts
  document-review-delivery-client.ts
  document-review-delivery-feedback.ts
  document-review-eligibility.ts
  document-review-inline.ts
  document-review-lifecycle.ts
  document-review-model.ts
  document-review-rendered.ts
  document-review-selectors.ts
  document-review-source.ts
  document-review-types.ts
  document-review-validation.ts
  document-review-workspace-controller.ts
  document-review-workspace.ts
  index.ts
  use-document-review-delivery.ts
  use-document-review-interaction.ts
  use-document-review-workspace.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/git/ (19 path(s))
  GitBranchControls.tsx
  GitChangesView.tsx
  GitGraphLanes.tsx
  GitGraphView.tsx
  GitHistoryView.tsx
  GitPanel.tsx
  commit-detail-client.ts
  commit-file-tree.ts
  commit-message.ts
  git-capability.ts
  git-graph-lane-metrics.ts
  git-graph-layout.ts
  git-rail-model.ts
  git-sync-coordinator.ts
  git-sync-status.ts
  use-git-commit-details.ts
  use-git-rail-controller.ts
  use-git-workspace.ts
  virtual-range.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workspaces/ (16 path(s))
  ConnectionStatus.tsx
  MissingWorkspaceNotice.tsx
  ProjectsBar.tsx
  SessionDialog.tsx
  SshPromptDialog.tsx
  WorkspaceCatalogDialogs.tsx
  connection-status.ts
  initial-host-connection.ts
  project-folder-picker-client.ts
  project-session-events.ts
  project-session-model.ts
  project-session.ts
  project-state-delivery.ts
  project-watch-interests.ts
  workspace-attention.ts
  workspace-session-actions.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workbench/ (15 path(s))
  ConfirmationDialog.tsx
  TerminalLayoutControls.tsx
  active-terminal-focus.ts
  middle-click-close.ts
  modal-keyboard-model.ts
  use-modal-keyboard.ts
  use-renderer-ready.ts
  use-terminal-path-activation.ts
  use-workbench-commands.ts
  use-workbench-layout.ts
  use-workbench-overlays.ts
  workbench-command-router.ts
  workbench-layout-policy.ts
  workbench-overlay-model.ts
  workspace-pane-state.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/sessions/ (14 path(s))
  SessionsApplicationDestination.tsx
  SessionsCollectionToolbar.tsx
  SessionsOverview.tsx
  SessionsOverviewCard.tsx
  SessionsOverviewNotice.tsx
  SessionsTerminalDetail.tsx
  sessions-overview-model.ts
  sessions-projection-coordinator.ts
  sessions-renderer-observation.ts
  sessions-terminal-detail-controller.ts
  sessions-terminal-overlay.ts
  sessions-terminal-surface.ts
  use-sessions-foreground.ts
  use-sessions-terminal-detail.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/dashboards/ (8 path(s))
  ElectronWebPaneSurface.tsx
  WebPane.tsx
  WebPaneStack.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts
  web-pane-surface.ts
  web-pane-url.ts
  web-pane-workspace-policy.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/ (6 path(s))
  App.tsx
  ErrorBoundary.tsx
  hvir.d.ts
  main.tsx
  theme-model.ts
  theme.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/development/ (4 path(s))
  development-performance-fixture.tsx
  development-performance-pump.tsx
  development-renderer-instrumentation.tsx
  performance-measure-budget.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/health/ (3 path(s))
  WorkbenchHealthControl.tsx
  use-diagnostic-evidence.ts
  use-workbench-health.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/layout/ (3 path(s))
  PaneResizer.tsx
  split-layout-policy.ts
  workspace-layout-persistence.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/path-copy/ (3 path(s))
  PathCopyMenu.tsx
  path-copy.ts
  use-path-copy-menu.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/diagnostics/ (2 path(s))
  DiagnosticReportDialog.tsx
  owned-capture-masks.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/context-menu/ (1 path(s))
  viewport-context-menu.ts

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/harness/ (1 path(s))
  ProviderContextMeter.tsx

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/scrollbars/ (1 path(s))
  scrollbar-presentation.ts

[extensions: .ts=222, .tsx=85]
```

</details>


### `glob`

**src/main/**/*.ts**

"src/main/**/*.ts"

<details>
<summary>310 matches</summary>

```
[glob: 290 path(s) under /private/var/tmp/ws/986d17d8/hvir/src/main; grouped by directory]

/private/var/tmp/ws/986d17d8/hvir/src/main/smoke/ (93 path(s))
  app-settings.ts
  bootstrap-contract.ts
  capacity-live-presentation.ts
  capacity-output-fixtures.ts
  capacity-performance.ts
  capacity-scenario.ts
  capacity-terminals.ts
  capacity.ts
  cleanup.ts
  development-performance.ts
  diagnostic-report-restart.ts
  document-review-driver.ts
  document-review-fixture.ts
  document-review.ts
  electron-process-metrics.ts
  external-documents.ts
  external-file-move.ts
  filename-search.ts
  files-interactions.ts
  git-changes-layout.ts
  git-diff.ts
  git-dirty-navigation.ts
  git-workflow.ts
  harness-profile-workflow.ts
  harness-settings-layout.ts
  harness-settings-visual.ts
  image-paste-fallback.ts
  index.ts
  interruption-checkpoint.ts
  macos-file-pasteboard.ts
  native-host-worker.ts
  native-pty.ts
  platform-contracts.ts
  project-entry-deletion.ts
  project-file-fixture.ts
  project-file-operations.ts
  project-fixture-commands.ts
  project-state-fixture.ts
  pty-lifecycle.ts
  renderer-authority.ts
  renderer-isolation.ts
  renderer-lifecycle.ts
  renderer-readiness-observer.ts
  renderer-readiness.ts
  renderer-recovery-delivery.ts
  renderer-recovery-producer.ts
  renderer-recovery-scenario.ts
  renderer-recovery.ts
  scenarios.ts
  scrollbar-presentation.ts
  sessions-project-fixture.ts
  sessions-projection-scenario.ts
  sessions-projection.ts
  sessions-usage-provider.ts
  sessions-visual.ts
  terminal-chrome.ts
  terminal-context-menu.ts
  terminal-cursor-presentation.ts
  terminal-explicit-launch.ts
  terminal-file-paste.ts
  terminal-hidden-reveal.ts
  terminal-horizon-presentation.ts
  terminal-keyboard-negotiation.ts
  terminal-lifecycle-scenario.ts
  terminal-ligature-presentation.ts
  terminal-middle-click-close.ts
  terminal-move.ts
  terminal-palette-presentation.ts
  terminal-presentation-scenarios.ts
  terminal-presentation.ts
  terminal-project-return.ts
  terminal-renderer-lifecycle.ts
  terminal-scenario-ready.ts
  terminal-search.ts
  terminal-semantic-navigation.ts
  terminal-session-store.ts
  terminal-split.ts
  terminal-synchronized-output.ts
  terminal-theme-gallery-presentation.ts
  viewer-content.ts
  viewer-find.ts
  viewer-fixtures.ts
  viewer-live-reload.ts
  viewer-position-operation.ts
  viewer-position.ts
  web-pane-boundary.ts
  web-pane.ts
  workbench-chrome.ts
  workbench-health-scenario.ts
  workbench-health.ts
  workbench-layout.ts
  workspace-close.ts
  workspace-remote.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/harness/ (36 path(s))
  bounded-line-reader.ts
  bundled-harness-providers.ts
  claude-context-telemetry.ts
  claude-keybindings.ts
  claude-session-artifact.ts
  claude-session-recovery.ts
  codex-context-telemetry.ts
  codex-session-discovery.ts
  electron-clipboard-image.ts
  harness-composer-contracts.ts
  harness-launch-selection.ts
  harness-launch.ts
  harness-probe.ts
  harness-profile-store.ts
  harness-provider-capabilities.ts
  harness-provider-contract.ts
  harness-provider-probes.ts
  harness-provider-registry.ts
  harness-provider.ts
  harness-shell-environment.ts
  harness-telemetry-hub.ts
  harness-telemetry-protocol.ts
  harness-text-validation.ts
  harness-usage-artifact.ts
  harness-usage-demand-controller.ts
  harness-usage-read-scheduler.ts
  harness-usage.ts
  providers/claude-code.ts
  providers/codex.ts
  providers/cursor.ts
  providers/gemini.ts
  providers/github-copilot.ts
  providers/pi.ts
  providers/shell.ts
  remote-image-paste-storage.ts
  remote-image-paste.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/project-file-operations/ (25 path(s))
  case-only-project-entry-rename.ts
  clipboard-file-list.ts
  create-project-entry.ts
  delete-project-entry.ts
  electron-clipboard-files.ts
  electron-external-move-picker.ts
  external-file-copy.ts
  external-file-grants.ts
  external-file-move-operation.ts
  external-file-move.ts
  external-file-operation.ts
  index.ts
  project-entry-deletion-operation.ts
  project-entry-operation-results.ts
  project-entry-organization.ts
  project-entry-removal.ts
  project-file-confinement.ts
  project-file-copy-limits.ts
  project-file-operation-coordinator.ts
  project-file-operation-runtime.ts
  project-file-path-errors.ts
  staging-cleanup.ts
  verified-project-copy-manifest.ts
  verified-project-copy.ts
  verified-project-entry-metadata.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/ (21 path(s))
  application-runtime-policy.ts
  application-runtime.ts
  attention-badge.ts
  build-environment.d.ts
  html-preview-protocol.ts
  index.ts
  ipc.ts
  navigation-policy.ts
  project-coordinator.ts
  project-registry.ts
  project-watch.ts
  renderer-event-delivery.ts
  renderer-event-publisher.ts
  renderer-presentation-resources.ts
  renderer-resource-scopes.ts
  workbench-runtime.ts
  worker-host.ts
  workspace-activity.ts
  workspace-cleanup.ts
  workspace-coordinator.ts
  workspace-removal-coordinator.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/ipc/ (21 path(s))
  authority-channel-policy.ts
  authority-port.ts
  authority-router.ts
  deps.ts
  features/app.ts
  features/clipboard.ts
  features/diagnostic-report.ts
  features/document-review.ts
  features/filesystem.ts
  features/git.ts
  features/harness.ts
  features/image-paste.ts
  features/preview.ts
  features/project.ts
  features/sessions.ts
  features/terminal-file-paste.ts
  features/terminal.ts
  features/web-pane.ts
  host-path-authority.ts
  operation-result.ts
  project-commands.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ (21 path(s))
  electron-project-reveal.ts
  electron-project-trash.ts
  index.ts
  local-host.ts
  project-host-catalog.ts
  project-host.ts
  renderer-ssh-prompter.ts
  ssh-abort.ts
  ssh-auth.ts
  ssh-client-lifecycle.ts
  ssh-config.ts
  ssh-exclusive-create.ts
  ssh-file-access.ts
  ssh-host-options.ts
  ssh-host-trust.ts
  ssh-host.ts
  ssh-identity-source.ts
  ssh-project-file-transfer.ts
  ssh-text-prefix.ts
  ssh-transport-pool.ts
  ssh-watch-service.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/git/ (14 path(s))
  git-branches.ts
  git-command-context.ts
  git-detail.ts
  git-diff.ts
  git-engine.ts
  git-history.ts
  git-parsers.ts
  git-status.ts
  git-worktrees.ts
  mutation-authorization.ts
  mutation-coordinator.ts
  untracked-line-counts.ts
  worker-host-broker.ts
  worker-host-router.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/document-review/ (11 path(s))
  document-review-application.ts
  document-review-coordinator.ts
  document-review-delivery-coordinator.ts
  document-review-delivery-policy.ts
  document-review-delivery-terminal.ts
  document-review-policy.ts
  document-review-retention.ts
  document-review-runtime.ts
  document-review-store-codec.ts
  document-review-store.ts
  index.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/diagnostics/ (10 path(s))
  diagnostic-event.ts
  diagnostic-evidence.ts
  diagnostic-intake.ts
  diagnostic-journal.ts
  diagnostic-report-builder.ts
  diagnostic-report-coordinator.ts
  diagnostic-report-evidence.ts
  diagnostic-report-storage.ts
  electron-diagnostic-report-actions.ts
  runtime-diagnostics.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/sessions/ (8 path(s))
  sessions-observation-application.ts
  sessions-observation-port.ts
  sessions-open-resolution.ts
  sessions-projection-identities.ts
  sessions-projection-values.ts
  sessions-telemetry-projection.ts
  sessions-usage-observation-port.ts
  sessions-usage-projection.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/terminal/ (7 path(s))
  electron-clipboard-file-paste.ts
  renderer-pty-lifecycle.ts
  session-registry.ts
  terminal-identity-publication.ts
  terminal-launch-admission.ts
  terminal-start-response.ts
  terminal-workspace-move-coordinator.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/pty/ (6 path(s))
  pty-contract.ts
  pty-launch-admission.ts
  pty-session-lifetime.ts
  pty-session-observation.ts
  pty-stream-attachment.ts
  pty-supervisor.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/window/ (6 path(s))
  electron-renderer-document-lifecycle.ts
  electron-renderer-recovery.ts
  electron-window-manager.ts
  renderer-recovery-monitor.ts
  window-health-tracker.ts
  window-policy.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/filename-search/ (4 path(s))
  filename-enumerator.ts
  filename-search-coordinator.ts
  filename-search-policy.ts
  index.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/health/ (2 path(s))
  workbench-health-events.ts
  workbench-health.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/project-folder-picker/ (2 path(s))
  index.ts
  project-folder-picker-coordinator.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/web-pane/ (2 path(s))
  loopback-http-proxy.ts
  web-pane-route-registry.ts

/private/var/tmp/ws/986d17d8/hvir/src/main/viewer/ (1 path(s))
  document-read-authority.ts

[extensions: .ts=290]
```

</details>


### `glob`

**src/shared/**/*.ts**

"src/shared/**/*.ts"

<details>
<summary>51 matches</summary>

```
[glob: 47 path(s) under /private/var/tmp/ws/986d17d8/hvir/src/shared; grouped by directory]

/private/var/tmp/ws/986d17d8/hvir/src/shared/ (36 path(s))
  application-build-channel.ts
  composer-submit.ts
  diagnostic-evidence.ts
  diagnostic-report-event.ts
  diagnostic-report.ts
  diagnostics.ts
  disposer.ts
  document-review.ts
  file-uri.ts
  filename-search.ts
  fs-types.ts
  git-types.ts
  harness-profile.ts
  harness-provider.ts
  harness-telemetry.ts
  harness-usage.ts
  host-path.ts
  html-preview.ts
  index.ts
  ipc-contract.ts
  ipc.ts
  keybindings.ts
  markdown-it-task-lists.d.ts
  operation-result.ts
  project-file-operations.ts
  rendered-link.ts
  sessions-projection.ts
  terminal-attention.ts
  terminal-clipboard-file-paste.ts
  terminal-start-admission.ts
  viewer-types.ts
  viewer-workload-policy.ts
  web-pane.ts
  workbench-health.ts
  worker-protocol.ts
  workspace-types.ts

/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc/ (11 path(s))
  app.ts
  diagnostics.ts
  document-review.ts
  filesystem.ts
  git.ts
  harness.ts
  preview.ts
  project.ts
  sessions.ts
  terminal.ts
  web-pane.ts

[extensions: .ts=47]
```

</details>


### `glob`

**electron-builder*.yml**

"electron-builder*.yml"

```
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml
```


### `glob`

**build/****

"build/**"

<details>
<summary>19 matches</summary>

```
/private/var/tmp/ws/986d17d8/hvir/build/icon-linux.svg
/private/var/tmp/ws/986d17d8/hvir/build/native/hvir-command
/private/var/tmp/ws/986d17d8/hvir/build/icon-macos.icns
/private/var/tmp/ws/986d17d8/hvir/build/icon-macos.svg
/private/var/tmp/ws/986d17d8/hvir/build/entitlements.mac.inherit.plist
/private/var/tmp/ws/986d17d8/hvir/build/icon-macos.png
/private/var/tmp/ws/986d17d8/hvir/build/entitlements.mac.plist
/private/var/tmp/ws/986d17d8/hvir/build/pkg-scripts/preinstall
/private/var/tmp/ws/986d17d8/hvir/build/pkg-scripts/postinstall
/private/var/tmp/ws/986d17d8/hvir/build/linux/hvir.apparmor
/private/var/tmp/ws/986d17d8/hvir/build/linux/after-remove.sh
/private/var/tmp/ws/986d17d8/hvir/build/linux/after-install.sh
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/64x64.png
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/512x512.png
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/32x32.png
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/128x128.png
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/1024x1024.png
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/256x256.png
/private/var/tmp/ws/986d17d8/hvir/build/icons-linux/16x16.png
```

</details>


### Copilot

I’ve mapped the code areas; next I’m reading the entrypoints and the shared domain contracts that define projects, workspaces, sessions, harnesses, and the main UI surfaces.

### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/index.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/index.ts (lines 1-260)

<details>
<summary>260 lines</summary>

```
import { app, BrowserWindow, dialog, shell } from 'electron'
import { registerIpcHandlers } from './ipc'
import { createProjectCommands } from './ipc/project-commands'
import { GitMutationCoordinator } from './git/mutation-coordinator'
import { GitMutationAuthorization } from './git/mutation-authorization'
import { GitWorkerHostRouter } from './git/worker-host-router'
import { HtmlPreviewProtocol } from './html-preview-protocol'
import { createWorkerClient, workerPath, type WorkerClient } from './worker-host'
import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
import { ProjectFolderPickerCoordinator as FolderPicker } from './project-folder-picker'
import { electronReveal } from './project-host/electron-project-reveal'
import { ProjectRegistry } from './project-registry'
import { ProjectCoordinator } from './project-coordinator'
import { PtySupervisor } from './pty/pty-supervisor'
import { AttentionBadge } from './attention-badge'
import { HarnessProfileStore } from './harness/harness-profile-store'
import { HarnessProbeManager } from './harness/harness-probe'
import { harnessProviders } from './harness/harness-provider'
import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
import { ProjectWatchController } from './project-watch'
import { WorkspaceCoordinator } from './workspace-coordinator'
import { createWorkspaceCleanup } from './workspace-cleanup'
import { WorkspaceRemovalCoordinator } from './workspace-removal-coordinator'
import { TerminalSessionRegistry } from './terminal/session-registry'
import { TerminalWorkspaceMoveCoordinator } from './terminal/terminal-workspace-move-coordinator'
import { installTerminalIdentityPublication } from './terminal/terminal-identity-publication'
import { RendererResourceScopes, type RendererOwner } from './renderer-resource-scopes'
import { createRendererPresentationInstaller } from './renderer-presentation-resources'
import { createElectronWindowManager } from './window/electron-window-manager'
import { WorkbenchRuntime } from './workbench-runtime'
import { RuntimeDiagnostics } from './diagnostics/runtime-diagnostics'
import { createDiagnosticReportCoordinator } from './diagnostics/diagnostic-report-coordinator'
import { RendererEventPublisher } from './renderer-event-publisher'
import { createFilenameSearchCoordinator } from './filename-search'
import { createProjectFileOperationCoordinator } from './project-file-operations'
import type { DocumentReviewRuntime } from './document-review'
import { installApplicationDocumentReviewRuntime } from './document-review/document-review-application'
import { installApplicationSessionsObservation } from './sessions/sessions-observation-application'
import { applicationRuntime, applicationUserDataPath } from './application-runtime'
import {
  GIT_WORKSPACE_ACTIVITY_TYPE,
  GIT_FETCH_TYPE,
  GIT_PRUNE_WORKTREES_TYPE,
  GIT_PULL_TYPE,
  GIT_SWITCH_BRANCH_TYPE,
  GIT_WORKTREES_TYPE,
  localPath,
  type EchoWorkerProtocol,
  type GitWorkerProtocol,
} from '../shared'
HtmlPreviewProtocol.registerScheme()
function createWorkbenchEntry(): void {
  const runtime = new WorkbenchRuntime({
    start: startup,
    suspend: suspendWorkbenchSessions,
    reopen: reopenWorkbench,
    shutdown,
  })
  const htmlPreviews = runtime.own(
    'HTML preview protocol',
    new HtmlPreviewProtocol(),
    (previews) => previews.dispose(),
  )
  const harnessProbeManager = runtime.own(
    'harness probe manager',
    new HarnessProbeManager(),
    (probes) => probes.dispose(),
  )
  const rendererScopes = runtime.own(
    'renderer resource scopes',
    new RendererResourceScopes(),
    (scopes) => scopes.dispose(),
  )
  const rendererEvents = new RendererEventPublisher(rendererScopes)
  const diagnostics = RuntimeDiagnostics.create(
    applicationRuntime.userDataRoot,
    app.isPackaged || __HVIR_SMOKE_BUILD__,
    (state) => rendererEvents.toWindows('workbench-health:state', state),
  )
  const diagnosticReports = runtime.own(
    'Diagnostic reports',
    createDiagnosticReportCoordinator(diagnostics, rendererScopes, applicationRuntime),
    (reports) => reports.dispose(),
  )
  const diagnosticIpc = { reports: diagnosticReports, evidence: diagnostics }
  diagnostics.recordApplication('application-starting')
  const gitMutationAuthorizations = runtime.own(
    'Git mutation authorizations',
    new GitMutationAuthorization(),
    (authorizations) => authorizations.dispose(),
  )
  let echoWorker: WorkerClient<EchoWorkerProtocol> | null = null
  let gitWorker: WorkerClient<GitWorkerProtocol> | null = null
  let projectRegistry: ProjectRegistry | null = null
  let sshPrompter: RendererSshPrompter | null = null
  let ptySupervisor: PtySupervisor | null = null
  let terminalSessionRegistry: TerminalSessionRegistry | null = null
  let harnessProfileStore: HarnessProfileStore | null = null
  let documentReview: DocumentReviewRuntime | null = null
  let attentionBadge: AttentionBadge | null = null
  let workspaceCoordinator: WorkspaceCoordinator | null = null
  let hostCatalog: ProjectHostCatalog | null = null
  const installRendererPresentation = createRendererPresentationInstaller({
    scopes: rendererScopes,
    reports: diagnosticReports,
    attention: () => attentionBadge,
    sshPrompter: () => sshPrompter,
  })
  const windowManager = runtime.own(
    'Electron window manager',
    createElectronWindowManager({
      htmlPreviews,
      activateRenderer: (ownerId) =>
        installRendererPresentation(rendererScopes.activateOwner(ownerId)),
      rolloverRenderer: (owner) => {
        diagnostics.revokeRenderer(owner)
        const transition = rendererScopes.rolloverOwner(owner.id)
        void transition.cleanup.catch((error) =>
          console.error('[renderer] generation cleanup failed', error),
        )
        return installRendererPresentation(transition.owner)
      },
      revokeRenderer: (owner) => {
        diagnostics.closeRenderer(owner)
        void rendererScopes
          .revokeOwner(owner.id)
          .catch((error) => console.error('[renderer] owner cleanup failed', error))
      },
      isRendererCurrent: (owner) => rendererScopes.isCurrent(owner),
      resumeRendererIpc: (owner) => rendererScopes.resumeOwnerIpc(owner),
      setOwnerFocused: (owner, focused) =>
        attentionBadge?.setFocused(owner.id, focused, owner.generation),
      startRendererDiagnostics: (owner) => diagnostics.startRenderer(owner),
      rendererReady: (owner) => diagnostics.rendererReady(owner),
      recordWindowHealth: (event) => diagnostics.recordWindowHealth(event),
      onLastWindowClosed: () => {
        void runtime
          .suspend()
          .catch((error) =>
            console.error('[session] cleanup after window close failed', error),
          )
      },
      isShuttingDown: () => runtime.isShuttingDown,
    }),
    (manager) => manager.dispose(),
  )
  const { routes: webPaneRoutes, createWindow } = windowManager
  async function startup(): Promise<void> {
    htmlPreviews.register()
    const emit = rendererEvents.toWindows
    sshPrompter = runtime.own(
      'SSH prompter',
      new RendererSshPrompter(
        (owner, prompt) => rendererEvents.toRenderer(owner, 'ssh:prompt', prompt),
        (owner, hostId) =>
          rendererEvents.toRenderer(owner, 'ssh:prompt-cancel', { hostId }),
      ),
      (prompter) => prompter.cancelAll(),
    )
    hostCatalog = runtime.own(
      'project host catalog',
      await ProjectHostCatalog.create({
        prompter: sshPrompter,
        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
        trashItem: electronTrash(shell),
      }),
      (catalog) => catalog.dispose(),
    )
    const requestedProjectRoot = projectRootArgument()
    const registry = await ProjectRegistry.create(
      requestedProjectRoot ? localPath(requestedProjectRoot) : undefined,
      hostCatalog,
      applicationUserDataPath('projects.json'),
      (state) => emit('project:state', state),
      async () => {
        const selection = await dialog.showOpenDialog({
          title: 'Choose a folder for hvir',
          defaultPath: process.cwd(),
          properties: ['openDirectory'],
        })
        return selection.canceled || !selection.filePaths[0]
          ? undefined
          : localPath(selection.filePaths[0])
      },
    )
    if (!registry) return app.quit()
    projectRegistry = runtime.own('project registry', registry, (item) => item.dispose())
    terminalSessionRegistry = runtime.own(
      'terminal session registry',
      await TerminalSessionRegistry.load(
        hostCatalog.local,
        localPath(applicationUserDataPath('terminal-sessions.json')),
        (event) => diagnostics.recordSessionRegistry(event),
      ),
      (sessions) => sessions.flush(),
    )
    harnessProfileStore = runtime.own(
      'harness profile store',
      await HarnessProfileStore.load(
        hostCatalog.local,
        localPath(applicationUserDataPath('harness-profiles.json')),
      ),
      (profiles) => profiles.flush(),
    )
    await harnessProfileStore
      .importLegacyDefaults(terminalSessionRegistry.profileReferences())
      .catch((error) =>
        console.warn('[harness] legacy recovery profile import failed', error),
      )
    echoWorker = runtime.own(
      'echo worker',
      createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
      (worker) => worker.dispose(),
    )
    const gitHostRouter = new GitWorkerHostRouter({
      authority: projectRegistry,
      authorizations: gitMutationAuthorizations,
    })
    gitWorker = runtime.own(
      'Git worker',
      createWorkerClient<GitWorkerProtocol>(
        workerPath('git-worker.js'),
        'hvir-git',
        (call) => gitHostRouter.route(call),
      ),
      (worker) => worker.dispose(),
    )
    const filenameSearch = runtime.own(
      'filename search',
      createFilenameSearchCoordinator(gitWorker),
      (search) => search.dispose(),
    )
    const projectFiles = runtime.own(
      'project file operations',
      createProjectFileOperationCoordinator(registry, hostCatalog, rendererScopes),
      (operations) => operations.dispose(),
    )
    ptySupervisor = runtime.own(
      'PTY supervisor',
      new PtySupervisor({
        onDiagnostic: (event) => diagnostics.recordPty(event),
        registerSessionIdentity: (terminalId, harnessSessionId) =>
          terminalSessionRegistry!.recordIdentity(terminalId, harnessSessionId),
        cancelSessionIdentityRegistration: (terminalId) =>
          terminalSessionRegistry!.cancelIdentityRegistration(terminalId),
      }),
      (supervisor) => supervisor.disposeAllAndWait(),
    )
    const sessionsPorts = installApplicationSessionsObservation(
      runtime,
      projectRegistry,
      hostCatalog,
      terminalSessionRegistry,
      ptySupervisor,
      rendererEvents,
    )
    documentReview = await installApplicationDocumentReviewRuntime(
      runtime,
      hostCatalog.local,
      rendererScopes,
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/main.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/main.tsx (lines 1-220)

<details>
<summary>35 lines</summary>

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ErrorBoundary } from './ErrorBoundary'
import './styles.css'
import './themes.css'
import { installScrollbarPresentation } from './scrollbars/scrollbar-presentation'
import { initializeAppSettings } from './settings/settings'
import { initializeAppTheme } from './theme'

initializeAppTheme()
initializeAppSettings(document.documentElement.style)

const container = document.getElementById('root')
if (!container) throw new Error('hvir: #root element not found')
const disposeScrollbarPresentation = installScrollbarPresentation(container)
window.addEventListener('beforeunload', disposeScrollbarPresentation, { once: true })

const root = createRoot(container)
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

if (import.meta.env.DEV) {
  void import('./development/development-renderer-instrumentation').then(
    ({ installDevelopmentRendererInstrumentation }) => {
      installDevelopmentRendererInstrumentation()
    },
    (error: unknown) =>
      console.error(
        '[development-performance] renderer instrumentation failed to load',
        error,
      ),
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx (lines 1-320)

<details>
<summary>320 lines</summary>

```
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import {
  GIT_CHANGE_DISPLAY_LIMIT,
  hostPathEquals,
  type GitChanges,
  type HostPath,
  type ProjectState,
} from '../../shared'
import { PaneResizer } from './layout/PaneResizer'
import type { WebViewState } from './dashboards/WebPane'
import { WebPaneStack } from './dashboards/WebPaneStack'
import { useWebPaneWorkspace } from './dashboards/use-web-pane-workspace'
import { TerminalWorkspaceCollection } from './terminal/TerminalWorkspaceCollection'
import { useTerminalWorkspaceRuntime } from './terminal/use-terminal-workspace-runtime'
import { useTerminalAttention } from './terminal/use-terminal-attention'
import { ProjectsBar } from './workspaces/ProjectsBar'
import { MissingWorkspaceNotice } from './workspaces/MissingWorkspaceNotice'
import { useProjectSession } from './workspaces/project-session'
import { useProjectWatchInterests } from './workspaces/project-watch-interests'
import { SessionDialog } from './workspaces/SessionDialog'
import { SshPromptDialog } from './workspaces/SshPromptDialog'
import { FileTree } from './tree/FileTree'
import { isGitIgnoreRulePath } from './tree/git-ignore-refresh'
import { GitPanel } from './git/GitPanel'
import { workspaceGitEnabled } from './git/git-capability'
import { GitGraphView } from './git/GitGraphView'
import { useGitWorkspace } from './git/use-git-workspace'
import { FileViewer } from './viewer/FileViewer'
import { TabStrip } from './viewer/TabStrip'
import { useViewerWorkspace } from './viewer/use-viewer-workspace'
import { setAppTheme, useAppTheme } from './theme'
import { SettingsDialog } from './settings/SettingsDialog'
import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
import { useWorkbenchCommands } from './workbench/use-workbench-commands'
import { focusVisibleActiveTerminalAfterLayout } from './workbench/active-terminal-focus'
import { useWorkbenchLayout } from './workbench/use-workbench-layout'
import { useWorkbenchOverlays } from './workbench/use-workbench-overlays'
import { TerminalLayoutControls } from './workbench/TerminalLayoutControls'
import { useRendererReady } from './workbench/use-renderer-ready'
import { useTerminalPathActivation } from './workbench/use-terminal-path-activation'
import * as review from './document-review/use-document-review-workspace'
import { SessionsApplicationDestination } from './sessions/SessionsApplicationDestination'
export function App(): ReactElement {
  const [destination, setDestination] = useState<'workspace' | 'sessions'>('workspace')
  const theme = useAppTheme()
  const settings = useAppSettings()
  const rootRef = useRef<HostPath | undefined>(undefined)
  const workspaceSwitchRef = useRef<(direction: -1 | 1) => void>(() => undefined)
  const sessionErrorRef = useRef<(message: string) => void>(() => undefined)
  const restoreViewerRef = useRef<() => void>(() => undefined)
  const resetGitGraphRef = useRef<() => void>(() => undefined)
  const deactivateGitGraphRef = useRef<() => void>(() => undefined)
  const deactivateWebPaneRef = useRef<() => void>(() => undefined)
  const [gitChanges, setGitChanges] = useState<GitChanges>()
  const overlays = useWorkbenchOverlays()
  const terminalAttention = useTerminalAttention()
  const viewer = useViewerWorkspace({
    onActivateFile: () => {
      deactivateGitGraphRef.current()
      deactivateWebPaneRef.current()
      restoreViewerRef.current()
    },
  })
  const {
    tabs,
    activeTab,
    primaryTabs,
    secondaryTabs,
    primaryActiveTab,
    secondaryActiveTab,
    split: viewerSplit,
    switchWorkspace: switchViewerWorkspace,
    openFile,
    activateTab,
    closeTab,
    pinTab,
    setMode: setViewerMode,
    cycleActiveMode,
    viewerCommands,
    setDiffBase: setViewerDiffBase,
    setContent: setViewerContent,
    navigationHandled,
    schedulePosition,
    reloadTab,
    saveTab,
    handleWatchEvent,
    reloadCleanFiles,
    focusPane: focusViewerPane,
    getActivePane,
    openSplit: openViewerSplit,
    closeSplit: closeViewerSplit,
    moveTab: moveTabToPane,
    reorderTabs: reorderViewerTabs,
  } = viewer
  const reviewWatch = review.useWatchFanout(handleWatchEvent)
  const web = useWebPaneWorkspace({
    onActivate: () => {
      focusViewerPane('primary')
      deactivateGitGraphRef.current()
      restoreViewerRef.current()
    },
    onError: (message) => sessionErrorRef.current(message),
  })
  const {
    views: webViews,
    activeId: activeWebViewId,
    active: webViewActive,
    activeRef: webViewActiveRef,
    focused: webViewFocused,
    setFocused: setWebViewFocused,
    setActive: setWebViewActive,
    applyProjectState: applyWebProjectState,
    setWorkspaceRoot: setWebWorkspaceRoot,
    openLink: openWebLink,
    activateView: activateWebView,
    closeView: closeWebView,
    forgetTerminalViews,
    followBlockedNavigation,
    setTitle: setWebViewTitle,
    openBrowser: openWebViewInBrowser,
  } = web
  const changedCount = gitChanges?.workingTree.length ?? 0
  const changedCountLabel = gitChanges?.workingTreeLimited
    ? `${GIT_CHANGE_DISPLAY_LIMIT.toLocaleString()}+`
    : changedCount.toLocaleString()
  const applyProjectViewState = useCallback(
    (state: ProjectState): void => {
      switchViewerWorkspace(state.root, state.connectionState === 'connected')
      if (!applyWebProjectState(state, rootRef.current)) return
      resetGitGraphRef.current()
      setGitChanges(undefined)
    },
    [applyWebProjectState, switchViewerWorkspace],
  )
  const session = useProjectSession({
    composerSubmitMode: settings.composerSubmitMode,
    onProjectState: applyProjectViewState,
    onReloadFiles: reloadCleanFiles,
    onWatchEvent: reviewWatch.handle,
    isIgnoreRulePath: isGitIgnoreRulePath,
  })
  const accept = session.acceptProjectState
  const {
    projectState,
    root,
    activeWorkspace,
    connectionState,
    rootError,
    refreshHosts,
  } = session
  const documentReview = review.useReviewWorkspace(activeWorkspace, reviewWatch)
  const { watch: watchVersion, ignored: ignoredRefreshVersion } = session.versions
  const { content: contentVersion, git: gitVersion } = session.versions
  useRendererReady(Boolean(root))
  const watchInterests = useProjectWatchInterests({
    root,
    connected: connectionState === 'connected',
    missing: activeWorkspace?.missing,
    openPaths: viewer.openWatchPaths,
    reviewPaths: documentReview.watchPaths,
    dependencyPaths: viewer.renderedWatchPaths,
  })
  const gitEnabled = workspaceGitEnabled(activeWorkspace)
  const terminalWorkspaces = useTerminalWorkspaceRuntime({
    projectState,
    acceptProjectState: session.acceptProjectState,
    forgetWebViews: forgetTerminalViews,
    acknowledgeWorkspaces: session.acknowledgeWorkspaces,
    onError: session.reportError,
  })
  const layout = useWorkbenchLayout({
    root,
    gitAvailable: gitEnabled,
    workspaceMissing: Boolean(activeWorkspace?.missing),
  })
  const {
    workbenchRef,
    viewerGroupsRef,
    railMode,
    setRailMode,
    terminalMode,
    setTerminalMode,
    toggleTerminalFocus,
    restoreViewer,
    treeCollapsed,
    setTreeCollapsed,
    setTreeWidth,
    setTerminalHeight,
    setViewerPrimaryWidth,
    resetViewerPrimaryWidth,
    focusTerminal: showTerminal,
  } = layout
  const git = useGitWorkspace({
    root,
    hasDirtyViewerTabs: () => tabs.some((tab) => tab.dirty),
    acceptProjectState: session.acceptProjectState,
    refreshContent: session.refreshWorkspaceContent,
    refreshGit: session.refreshGit,
    activateViewer: () => {
      focusViewerPane('primary')
      restoreViewer()
    },
    deactivateWebPane: () => setWebViewActive(false),
  })
  const {
    graphOpen: gitGraphOpen,
    graphActive: gitGraphActive,
    graphActiveRef: gitGraphActiveRef,
    graphRequest: gitGraphRequest,
    openGraph: openGitGraph,
    activateGraph: activateGitGraph,
    closeGraph: closeGitGraph,
    resetGraph: resetGitGraph,
    deactivateGraph: deactivateGitGraph,
    switchBranch: switchGitBranch,
    fetch: fetchGit,
    pull: pullGit,
  } = git
  const terminalPathActivation = useTerminalPathActivation({
    root,
    selectedFile: activeTab?.path,
    openFile: (path, position) =>
      openFile(path, true, 'file-tree', 'head', undefined, position),
    revealDirectory: layout.focusTree,
  })
  rootRef.current = root
  sessionErrorRef.current = session.reportError
  workspaceSwitchRef.current = session.switchRelativeWorkspace
  restoreViewerRef.current = restoreViewer
  resetGitGraphRef.current = resetGitGraph
  deactivateGitGraphRef.current = deactivateGitGraph
  deactivateWebPaneRef.current = () => setWebViewActive(false)
  useEffect(() => {
    if (overlays.projectPickerOpen) void refreshHosts()
  }, [overlays.projectPickerOpen, refreshHosts])
  useEffect(() => {
    if (root) setWebWorkspaceRoot(root)
  }, [root, setWebWorkspaceRoot])
  useEffect(() => {
    if (activeWorkspace?.missing) resetGitGraph()
  }, [activeWorkspace?.missing, resetGitGraph])
  useWorkbenchCommands(settings.keybindings, {
    enabled: destination === 'workspace',
    closeWebPane: closeWebView,
    escapeWebPaneFocus: () => setWebViewFocused(false),
    canUseViewerCommands: () => !gitGraphActiveRef.current && !webViewActiveRef.current,
    cycleViewMode: cycleActiveMode,
    findFile: layout.focusFilenameSearch,
    findInFile: viewerCommands.findInFile,
    findInTerminal: terminalWorkspaces.openTerminalSearch,
    goToLine: viewerCommands.goToLine,
    toggleTerminalFocus,
    focusTerminal: layout.focusTerminal,
    focusViewer: () => layout.focusViewer(getActivePane()),
    focusTree: layout.focusTree,
    switchWorkspace: (direction) => {
      setDestination('workspace')
      workspaceSwitchRef.current(direction)
    },
  })
  const revealSourceTerminal = async (view: WebViewState): Promise<void> => {
    const target = projectState?.projects
      .flatMap((project) =>
        project.workspaces.map((workspace) => ({ project, workspace })),
      )
      .find(({ workspace }) => hostPathEquals(workspace.root, view.workspaceRoot))
    if (!target) {
      session.reportError('The source workspace is no longer registered')
      return
    }
    if (!rootRef.current || !hostPathEquals(rootRef.current, view.workspaceRoot)) {
      await session.switchWorkspace(target.project.id, target.workspace.id)
    }
    window.requestAnimationFrame(() => {
      const source = [
        ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
      ].find((element) => element.dataset['terminalSession'] === view.sourceTerminalId)
      source?.click()
      source?.focus()
      if (!source) session.reportError('The source terminal has closed')
    })
  }
  if (rootError) return <div className="startup-error">{rootError}</div>
  if (!root) return <div className="startup-loading">Starting hvir…</div>
  const rootWebViews = webViews.filter((view) => hostPathEquals(view.workspaceRoot, root))
  const renderViewerPane = (
    pane: 'primary' | 'secondary',
    paneTabs: typeof primaryTabs,
    paneTab: typeof primaryActiveTab,
    graphPane: boolean,
  ): ReactElement => (
    <section
      className={`viewer-group viewer-group-${pane}`}
      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
      data-diagnostic-capture="viewer"
      data-viewer-pane={pane}
      tabIndex={-1}
      onPointerDownCapture={(event) => {
        if (event.button !== 0) return
        if (
          paneTab &&
          !(graphPane && gitGraphActive) &&
          !(pane === 'primary' && webViewActive)
        ) {
          focusViewerPane(pane, paneTab.id)
        } else {
          focusViewerPane(pane)
        }
      }}
    >
      <TabStrip
        tabs={paneTabs}
        pathCopyRoot={root}
        pane={pane}
        activeId={
          (graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)
            ? undefined
            : paneTab?.id
        }
        onActivate={(id) => activateTab(id, pane)}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts (lines 1-260)

<details>
<summary>80 lines</summary>

```
import type { HostConnectionState, HostWatchTier } from './fs-types'
import type { HostPath } from './host-path'

export interface ProjectRootResponse {
  readonly root: HostPath
}

export interface ProjectState extends ProjectRootResponse {
  /** Main-owned identity for ordering and deduplicating authoritative state. */
  readonly revision: number
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  readonly projects: readonly RegisteredProjectState[]
  readonly activeProjectId: string
  readonly activeWorkspaceId: string
}

export const WORKSPACE_ACTIVITY_SCHEMA = 1
export const WORKSPACE_ACTIVITY_STATUS_LIMIT = 2_000
export const WORKSPACE_ACTIVITY_FIELDS = 'head-branch-porcelain-v2-path-state' as const

/** Bounded result of the existing per-worktree porcelain status invocation. */
export interface WorkspaceStatusActivity {
  readonly schema: typeof WORKSPACE_ACTIVITY_SCHEMA
  readonly fields: typeof WORKSPACE_ACTIVITY_FIELDS
  readonly statusLimit: typeof WORKSPACE_ACTIVITY_STATUS_LIMIT
  readonly statusEntryCount: number
  readonly statusTruncated: boolean
  readonly statusDigest: string
}

/** Host-qualified comparison state retained only for a closed workspace. */
export interface WorkspaceActivitySnapshot extends WorkspaceStatusActivity {
  readonly root: HostPath
  readonly head?: string
  readonly branch?: string
}

export interface WorkspaceActivityResult {
  readonly changedFiles: number
  /** Omitted when the root is no longer a Git repository. */
  readonly status?: WorkspaceStatusActivity
}

/** One checkout reported by `git worktree list`, or the root of a plain directory. */
export interface DiscoveredWorktree {
  readonly root: HostPath
  readonly head?: string
  readonly branch?: string
  readonly detached: boolean
  readonly bare: boolean
  readonly prunable?: boolean
  /** Git's porcelain explanation for why its administrative record is stale. */
  readonly prunableReason?: string
}

export interface WorktreeDiscovery {
  readonly repository: boolean
  readonly worktrees: readonly DiscoveredWorktree[]
}

/** Renderer-facing persisted workspace record. Missing records await lifecycle cleanup. */
export interface WorkspaceState {
  readonly id: string
  readonly root: HostPath
  readonly name: string
  readonly head?: string
  readonly branch?: string
  readonly main: boolean
  /** Closed workspaces stay in the catalog but own no renderer workspace runtime. */
  readonly closed: boolean
  readonly missing: boolean
  /** Present only when Git still lists this missing workspace as prunable. */
  readonly prunableReason?: string
  readonly repository: boolean
  readonly changedFiles: number
  /** Successful discovery found this worktree after the project's baseline. */
  readonly newlyDiscovered?: boolean
}

/** A registered project owns discovered worktree workspaces. */
export interface RegisteredProjectState {
  readonly id: string
  readonly registeredRoot: HostPath
  readonly displayName: string
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  readonly activeWorkspaceId: string
  readonly workspaces: readonly WorkspaceState[]
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts (lines 1-260)

<details>
<summary>84 lines</summary>

```
/** Serializable harness-provider vocabulary shared across the main/renderer boundary. */

const PROVIDER_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/

declare const harnessProviderIdBrand: unique symbol

/** Opaque persisted identifier. Provider behavior remains owned by main. */
export type HarnessProviderId = string & {
  readonly [harnessProviderIdBrand]: 'HarnessProviderId'
}

export type HarnessSessionIdentity = 'none' | 'preassigned' | 'discovered'

export type HarnessContextPresentation = 'none' | 'count' | 'pressure'

export interface HarnessContextPressurePolicy {
  /** Provider-owned fallback used only when telemetry has no reported window. */
  readonly assumedWindowTokens?: number
  readonly warningPercent: number
  readonly criticalPercent: number
}

export interface HarnessProviderCapabilities {
  readonly sessionIdentity: HarnessSessionIdentity
  readonly exactResume: boolean
  /** Present only when the probed provider version supports an exact native fork. */
  readonly exactFork?: true
  readonly contextPresentation: HarnessContextPresentation
  readonly contextPressure?: HarnessContextPressurePolicy
  /** Trusted effective launch contract; absent means document review is Copy-only. */
  readonly reviewInsertContractRevision?: number
  /** Exact provider/profile submit contract; absent keeps review delivery Insert-only. */
  readonly reviewSendNowContractRevision?: number
}

export type HarnessModifiedKeyProtocol = 'none' | 'modify-other-keys' | 'csi-u'

export interface HarnessTerminalInputCapabilities {
  /** Wire format used by the foreground TUI for otherwise ambiguous modified keys. */
  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
  /** Whether hvir should encode Meta+Enter as Control+Enter in intentional-submit mode. */
  readonly metaEnterAliasesControl: boolean
}

/** Bounded data-only description safe to expose to the renderer. */
export interface HarnessProviderDescriptor {
  readonly id: HarnessProviderId
  readonly displayName: string
  readonly default: boolean
  /** The bundled provider has an exact fork contract; a probe still decides version support. */
  readonly exactForkLaunch?: true
  readonly capabilities: HarnessProviderCapabilities
  readonly terminalInput: HarnessTerminalInputCapabilities
  /** Data-only suggestion; catalog membership never materializes a launch profile. */
  readonly profileTemplate?: {
    readonly displayName: string
    readonly description: string
  }
  readonly profileGuidance: {
    readonly reservedArguments: readonly string[]
  }
}

export type HarnessProbeStatus =
  | 'unchecked'
  | 'available'
  | 'executable-missing'
  | 'version-unsupported'
  | 'capability-absent'
  | 'authentication-required'
  | 'disconnected'
  | 'timeout'
  | 'malformed-output'
  | 'probe-failed'

export interface HarnessProfileProbe {
  readonly providerId: HarnessProviderId
  readonly profileId: import('./harness-profile').HarnessProfileId
  readonly launchRevision: number
  readonly hostId: import('./host-path').HostId
  readonly status: HarnessProbeStatus
  readonly checkedAt?: number
  readonly expiresAt?: number
  readonly version?: string
  readonly detail?: string
  readonly capabilities: HarnessProviderCapabilities
}

export function isHarnessProviderId(value: unknown): value is HarnessProviderId {
  return typeof value === 'string' && PROVIDER_ID.test(value)
}

export function asHarnessProviderId(value: string): HarnessProviderId {
  if (!isHarnessProviderId(value)) {
    throw new Error(`Invalid harness provider id '${value}'`)
  }
  return value
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts (lines 1-260)

<details>
<summary>101 lines</summary>

```
import type { HarnessProviderId } from './harness-provider'
import type { HostPath } from './host-path'

const PROFILE_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/
const BINDING_NAME = /^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/
const ENVIRONMENT_NAME = /^[a-zA-Z_][a-zA-Z0-9_]{0,127}$/

declare const harnessProfileIdBrand: unique symbol

export type HarnessProfileId = string & {
  readonly [harnessProfileIdBrand]: 'HarnessProfileId'
}

export type HarnessProfileScope =
  | { readonly kind: 'global' }
  | { readonly kind: 'project'; readonly projectRoot: HostPath }

export type HarnessProfileExecutable =
  | { readonly kind: 'provider-default' }
  | { readonly kind: 'command'; readonly command: string }
  | { readonly kind: 'path'; readonly path: HostPath; readonly grantId?: string }

export type HarnessArgumentPart =
  | { readonly kind: 'literal'; readonly value: string }
  | {
      readonly kind: 'path'
      readonly source: 'projectRoot' | 'workspaceRoot' | 'binding'
      readonly binding?: string
    }

export interface HarnessProfileArgument {
  readonly parts: readonly HarnessArgumentPart[]
}

export type HarnessEnvironmentBinding =
  | {
      readonly kind: 'literal'
      readonly name: string
      readonly value: string
    }
  | {
      readonly kind: 'reference'
      readonly name: string
      readonly source: 'host' | 'local-forward'
      readonly sourceName: string
    }
  | { readonly kind: 'unset'; readonly name: string }

export interface HarnessPathBinding {
  readonly name: string
  readonly path: HostPath
  /** Main-issued authorization for paths outside the registered project. */
  readonly grantId?: string
}

export interface HarnessPathGrant {
  readonly id: string
  readonly path: HostPath
}

export interface HarnessProfileInput {
  readonly displayName: string
  readonly description?: string
  readonly providerId: HarnessProviderId
  readonly scope: HarnessProfileScope
  readonly executable: HarnessProfileExecutable
  readonly args: readonly HarnessProfileArgument[]
  readonly environment: readonly HarnessEnvironmentBinding[]
  readonly pathBindings: readonly HarnessPathBinding[]
  readonly order: number
}

export interface HarnessProfile extends HarnessProfileInput {
  readonly id: HarnessProfileId
  readonly launchRevision: number
  readonly metadataRevision: number
  readonly providerContractVersion: number
  readonly builtIn: boolean
}

export interface HarnessCommandPreviewEnvironment {
  readonly name: string
  readonly operation: 'set' | 'reference' | 'unset'
  readonly displayValue?: string
  readonly redacted: boolean
}

/** Exhaustive provider-owned ways hvir may start a harness conversation. */
export type HarnessLaunchMode = 'fresh' | 'resume' | 'fork'

export interface HarnessCommandPreview {
  readonly profileId: HarnessProfileId
  readonly launchRevision: number
  readonly providerId: HarnessProviderId
  readonly mode: HarnessLaunchMode
  readonly executable: string
  readonly args: readonly string[]
  readonly environment: readonly HarnessCommandPreviewEnvironment[]
  readonly command: string
  readonly artifactIdentity: string
}

export function isHarnessProfileId(value: unknown): value is HarnessProfileId {
  return typeof value === 'string' && PROFILE_ID.test(value)
}

export function asHarnessProfileId(value: string): HarnessProfileId {
  if (!isHarnessProfileId(value)) {
    throw new Error(`Invalid harness profile id '${value}'`)
  }
  return value
}

export function isHarnessBindingName(value: unknown): value is string {
  return typeof value === 'string' && BINDING_NAME.test(value)
}

export function isHarnessEnvironmentName(value: unknown): value is string {
  return typeof value === 'string' && ENVIRONMENT_NAME.test(value)
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts (lines 1-260)

<details>
<summary>227 lines</summary>

```
import type { HostConnectionState } from './fs-types'
import type { HarnessProfileId } from './harness-profile'
import type { HarnessContextPressurePolicy, HarnessProviderId } from './harness-provider'
import type { HarnessUsageValue } from './harness-usage'
import type { ProjectState } from './workspace-types'

export const SESSIONS_PROJECTION_VERSION = 1
export const MAX_SESSIONS_PROJECTION_ROWS = 500
export const MAX_SESSIONS_PROJECTION_WORKSPACES = 1_000
export const MAX_SESSIONS_PROJECTION_PROVIDERS = 128
export const MAX_SESSIONS_USAGE_ROWS = MAX_SESSIONS_PROJECTION_ROWS

declare const sessionsTerminalHandleBrand: unique symbol
declare const sessionsPtyHandleBrand: unique symbol
declare const sessionsProjectHandleBrand: unique symbol
declare const sessionsWorkspaceHandleBrand: unique symbol
declare const sessionsWorkspaceQualifierBrand: unique symbol
declare const sessionsWorkspaceRuntimeIdBrand: unique symbol

/** Opaque hvir identity. Consumers may compare or route it, but never present it. */
export type SessionsTerminalHandle = string & {
  readonly [sessionsTerminalHandleBrand]: 'SessionsTerminalHandle'
}

/** Opaque identity for one exact live PTY instance. */
export type SessionsPtyHandle = string & {
  readonly [sessionsPtyHandleBrand]: 'SessionsPtyHandle'
}

/** Projection-owned identity with no host or path content. */
export type SessionsProjectHandle = string & {
  readonly [sessionsProjectHandleBrand]: 'SessionsProjectHandle'
}

/** Projection-owned identity with no host or path content. */
export type SessionsWorkspaceHandle = string & {
  readonly [sessionsWorkspaceHandleBrand]: 'SessionsWorkspaceHandle'
}

/** Path-free qualifier for matching one ProjectState workspace revision in the renderer. */
export type SessionsWorkspaceQualifier = string & {
  readonly [sessionsWorkspaceQualifierBrand]: 'SessionsWorkspaceQualifier'
}

/** Renderer workspace owner selected by main; never present this internal routing value. */
export type SessionsWorkspaceRuntimeId = string & {
  readonly [sessionsWorkspaceRuntimeIdBrand]: 'SessionsWorkspaceRuntimeId'
}

export type SessionsReasonCode =
  | 'not-materialized'
  | 'not-live'
  | 'telemetry-pending'
  | 'source-unavailable'
  | 'source-stale'
  | 'connection-unavailable'
  | 'workspace-unavailable'
  | 'stopped'
  | 'recovery-unavailable'
  | 'transport-unavailable'

export type SessionsUsageReasonCode =
  | 'not-live'
  | 'identity-pending'
  | 'observation-pending'
  | 'identity-unavailable'
  | 'connection-unavailable'
  | 'source-unavailable'
  | 'observation-capacity'

/** Content-free cumulative usage projected from the provider-owned observer. */
export type SessionsUsageFact =
  | { readonly status: 'unsupported' }
  | { readonly status: 'pending'; readonly reason: SessionsUsageReasonCode }
  | { readonly status: 'unavailable'; readonly reason: SessionsUsageReasonCode }
  | { readonly status: 'reset'; readonly reason: SessionsUsageReasonCode }
  | {
      readonly status: 'stale'
      readonly value: HarnessUsageValue
      readonly observedAt: number
      readonly reason: SessionsUsageReasonCode
    }
  | {
      readonly status: 'exact' | 'partial'
      readonly value: HarnessUsageValue
      readonly observedAt: number
    }

export type SessionsFact<T> =
  | { readonly status: 'unsupported' }
  | { readonly status: 'pending'; readonly reason: SessionsReasonCode }
  | { readonly status: 'unavailable'; readonly reason: SessionsReasonCode }
  | {
      readonly status: 'stale'
      readonly value: T
      readonly observedAt: number
      readonly reason: SessionsReasonCode
    }
  | { readonly status: 'available'; readonly value: T; readonly observedAt?: number }

export interface SessionsModelFact {
  readonly id: string
  readonly displayName?: string
}

export interface SessionsContextFact {
  readonly usedTokens: number
  readonly windowTokens?: number
  readonly usedPercent?: number
}

export interface SessionsTurnFact {
  readonly state: 'working' | 'waiting-for-user' | 'waiting-for-approval' | 'idle'
}

export interface SessionsFreshnessFact {
  readonly staleAfterMs: number
}

export interface SessionsTelemetryFacts {
  readonly model: SessionsFact<SessionsModelFact>
  readonly context: SessionsFact<SessionsContextFact>
  readonly turn: SessionsFact<SessionsTurnFact>
  readonly freshness: SessionsFact<SessionsFreshnessFact>
}

export interface SessionsProviderProjection {
  readonly id: HarnessProviderId
  readonly displayName: string
  readonly telemetrySupported: boolean
  readonly usageSupported: boolean
  readonly sessionKind: 'agent' | 'shell'
  readonly contextPressure?: HarnessContextPressurePolicy
}

export interface SessionsWorkspaceProjection {
  readonly projectId: SessionsProjectHandle
  readonly projectName: string
  readonly workspaceId: SessionsWorkspaceHandle
  readonly qualifier: SessionsWorkspaceQualifier
  readonly workspaceName: string
  readonly main: boolean
  readonly closed: boolean
  readonly missing: boolean
  readonly host: {
    readonly id: string
    readonly label: string
    readonly kind: 'local' | 'ssh'
    readonly connectionState: HostConnectionState
  }
}

export interface SessionsLivePtyQualifier {
  readonly handle: SessionsPtyHandle
  readonly rendererOwnerId: number
  readonly rendererGeneration: number
}

/** Main-safe facts before renderer runtime/attention state is joined. */
export interface SessionsObservedSession {
  readonly handle: SessionsTerminalHandle
  readonly workspaceId: SessionsWorkspaceHandle
  readonly providerId: HarnessProviderId
  readonly profile: SessionsFact<{ readonly id: HarnessProfileId }>
  readonly title: string
  readonly lifecycle: 'retained' | 'live'
  readonly livePty?: SessionsLivePtyQualifier
  readonly telemetry: SessionsTelemetryFacts
}

export interface SessionsObservationSnapshot {
  readonly version: typeof SESSIONS_PROJECTION_VERSION
  readonly demandGeneration: number
  readonly revision: number
  readonly activeProject?: SessionsProjectHandle
  readonly workspaces: readonly SessionsWorkspaceProjection[]
  readonly providers: readonly SessionsProviderProjection[]
  readonly sessions: readonly SessionsObservedSession[]
}

export interface SessionsProjectionChange {
  readonly demandGeneration: number
  readonly revision: number
}

export interface SessionsDemandRequest {
  readonly demandGeneration: number
}

export interface SessionsUsageDemandTarget {
  readonly handle: SessionsTerminalHandle
  readonly livePty?: SessionsLivePtyQualifier
}

export interface SessionsUsageDemandRequest {
  readonly demandGeneration: number
  readonly projectionDemandGeneration: number
  readonly sourceRevision: number
  readonly targets: readonly SessionsUsageDemandTarget[]
}

export interface SessionsUsageSnapshotRow {
  readonly handle: SessionsTerminalHandle
  readonly usage: SessionsUsageFact
}

export interface SessionsUsageSnapshot {
  readonly version: typeof SESSIONS_PROJECTION_VERSION
  readonly demandGeneration: number
  readonly revision: number
  readonly sampledAt: number
  readonly rows: readonly SessionsUsageSnapshotRow[]
}

export interface SessionsUsageChange {
  readonly demandGeneration: number
  readonly revision: number
}

export interface SessionsOpenRequest extends SessionsDemandRequest {
  readonly sourceRevision: number
  readonly handle: SessionsTerminalHandle
  readonly projectId: SessionsProjectHandle
  readonly workspaceId: SessionsWorkspaceHandle
  readonly workspaceQualifier: SessionsWorkspaceQualifier
  readonly livePty?: SessionsLivePtyQualifier
}

export type SessionsOpenUnavailableReason =
  | 'stale-projection'
  | 'session-unavailable'
  | 'workspace-unavailable'
  | 'connection-unavailable'
  | 'terminal-unavailable'

export type SessionsOpenResponse =
  | {
      readonly outcome: 'opened'
      readonly state: ProjectState
      readonly handle: SessionsTerminalHandle
      readonly workspaceQualifier: SessionsWorkspaceQualifier
      readonly livePty: SessionsLivePtyQualifier
    }
  | {
      readonly outcome: 'unavailable'
      readonly reason: SessionsOpenUnavailableReason
    }

/** Exact read-only resolution for borrowing an existing renderer terminal surface. */
export type SessionsTerminalResolutionResponse =
  | {
      readonly outcome: 'resolved'
      readonly handle: SessionsTerminalHandle
      readonly workspaceQualifier: SessionsWorkspaceQualifier
      readonly workspaceRuntimeId: SessionsWorkspaceRuntimeId
      readonly livePty: SessionsLivePtyQualifier
    }
  | {
      readonly outcome: 'unavailable'
      readonly reason: SessionsOpenUnavailableReason
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts (lines 1-260)

<details>
<summary>222 lines</summary>

```
import { containsHostPath, hostPathEquals, type HostPath } from './host-path'

export const DOCUMENT_REVIEW_LIMITS = {
  batchesPerWorkspace: 1,
  batchMembers: 64,
  commentsPerDocument: 64,
  commentsPerWorkspace: 256,
  commentBytes: 8 * 1024,
  contextBytes: 4 * 1024,
  deliveryPayloadBytes: 64 * 1024,
  deliveryQuoteBytes: 2 * 1024,
  excerptBytes: 32 * 1024,
  idBytes: 128,
  revalidationReadBytes: 4 * 1024 * 1024,
  sourceRangeLines: 100,
  storedWorkspaceBytes: 2 * 1024 * 1024,
  workspaceIdBytes: 256,
} as const

export interface ReviewWorkspaceIdentity {
  /** Stable registered project/worktree identity, not a path-derived key. */
  readonly id: string
  readonly root: HostPath
}

export type DocumentReviewDocumentIssue =
  'foreign-document' | 'document-outside-workspace'

export function documentReviewWorkspaceEquals(
  left: ReviewWorkspaceIdentity,
  right: ReviewWorkspaceIdentity,
): boolean {
  return left.id === right.id && hostPathEquals(left.root, right.root)
}

export function documentReviewDocumentIssue(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): DocumentReviewDocumentIssue | undefined {
  if (document.hostId !== workspace.root.hostId) return 'foreign-document'
  if (
    !containsHostPath(workspace.root, document) ||
    hostPathEquals(workspace.root, document)
  ) {
    return 'document-outside-workspace'
  }
  return undefined
}

export function isDocumentReviewDocument(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): boolean {
  return documentReviewDocumentIssue(workspace, document) === undefined
}

export function documentReviewUtf8Bytes(value: string): number {
  return new TextEncoder().encode(value).byteLength
}

export function isDocumentReviewIdentifier(
  value: unknown,
  maximumBytes: number = DOCUMENT_REVIEW_LIMITS.idBytes,
): value is string {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    documentReviewUtf8Bytes(value) <= maximumBytes &&
    ![...value].some((character) => {
      const code = character.codePointAt(0)!
      return code <= 31 || code === 127
    })
  )
}

export interface ReviewDocumentSnapshot {
  readonly algorithm: 'sha256'
  /** Lowercase hexadecimal digest of the exact on-disk UTF-8 bytes. */
  readonly digest: string
  readonly byteLength: number
}

export interface ReviewSourceRange {
  /** Inclusive, one-based line. */
  readonly startLine: number
  /** Inclusive, one-based line. */
  readonly endLine: number
}

export interface ReviewAnchorLocation {
  readonly snapshot: ReviewDocumentSnapshot
  readonly range: ReviewSourceRange
}

export type ReviewAnchorStaleReason =
  | 'ambiguous-match'
  | 'deleted'
  | 'host-unavailable'
  | 'incomplete-read'
  | 'invalid-snapshot'
  | 'invalid-text'
  | 'missing-match'
  | 'read-limit-exceeded'

export type ReviewAnchorState =
  | { readonly status: 'current' }
  | { readonly status: 'moved'; readonly previous: ReviewAnchorLocation }
  | {
      readonly status: 'stale'
      readonly reason: ReviewAnchorStaleReason
      /** Explicit human decision; staleness remains visible and orthogonal. */
      readonly reviewed: boolean
    }

/** Representation-independent source identity shared by rendered and source capture. */
export interface DocumentReviewAnchor {
  readonly snapshot: ReviewDocumentSnapshot
  readonly range: ReviewSourceRange
  readonly excerpt: string
  /** Exact immediately preceding source, including its line delimiter. */
  readonly contextBefore: string
  /** Exact immediately following source, including its line delimiter. */
  readonly contextAfter: string
  readonly state: ReviewAnchorState
}

export type ReviewCommentLifecycle = 'draft' | 'sent' | 'resolved'

export interface DocumentReviewComment {
  readonly id: string
  readonly workspace: ReviewWorkspaceIdentity
  readonly document: HostPath
  readonly body: string
  readonly anchor: DocumentReviewAnchor
  readonly lifecycle: ReviewCommentLifecycle
}

export interface DocumentReviewBatch {
  readonly id: string
  readonly workspace: ReviewWorkspaceIdentity
  readonly commentIds: readonly string[]
}

export interface DocumentReviewModel {
  readonly workspace: ReviewWorkspaceIdentity
  readonly comments: readonly DocumentReviewComment[]
  readonly batches: readonly DocumentReviewBatch[]
}

export interface DocumentReviewStoreNotice {
  readonly kind: 'corrupt' | 'future-version' | 'read-failure'
  /** Basename only; review state and user-data paths remain private. */
  readonly recoveryFile?: string
  readonly writeBlocked: boolean
}

export interface DocumentReviewWorkspaceSnapshot {
  readonly workspaceGeneration: number
  readonly revision: number
  readonly model: DocumentReviewModel
  readonly notice?: DocumentReviewStoreNotice
}

export interface DocumentReviewRestoreRequest {
  readonly workspace: ReviewWorkspaceIdentity
}

export interface DocumentReviewSaveRequest extends DocumentReviewRestoreRequest {
  readonly workspaceGeneration: number
  readonly expectedRevision: number
  readonly model: DocumentReviewModel
}

export interface DocumentReviewRevalidateRequest extends DocumentReviewRestoreRequest {
  readonly workspaceGeneration: number
  readonly document: HostPath
}

export type DocumentReviewRevalidation =
  | {
      readonly status: 'read'
      readonly document: HostPath
      readonly snapshot: ReviewDocumentSnapshot
      readonly content: string
    }
  | {
      readonly status: 'stale'
      readonly document: HostPath
      readonly reason: 'deleted' | 'host-unavailable' | 'incomplete-read' | 'invalid-text'
    }

export type DocumentReviewDeliverySelection =
  | { readonly kind: 'comment'; readonly commentId: string }
  | { readonly kind: 'batch'; readonly batchId: string }

export interface DocumentReviewDeliveryPayload {
  /** Exact LF-normalized human-readable body used by Preview, Copy, and Insert. */
  readonly body: string
  readonly byteLength: number
  readonly commentIds: readonly string[]
}

export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'

export interface DocumentReviewDeliveryDestination {
  readonly terminalId: string
  readonly title: string
  readonly providerName: string
  readonly lifecycle: 'live'
  readonly connection: 'connected'
  readonly attention?: import('./terminal-attention').TerminalAttentionState
  readonly capability: DocumentReviewDeliveryCapability
}

export interface DocumentReviewDeliveryScopeRequest {
  readonly workspace: ReviewWorkspaceIdentity
  readonly workspaceGeneration: number
}

export interface DocumentReviewPreviewRequest extends DocumentReviewDeliveryScopeRequest {
  readonly selection: DocumentReviewDeliverySelection
}

export interface DocumentReviewPrepareRequest extends DocumentReviewPreviewRequest {
  readonly terminalId: string
}

export interface PreparedDocumentReviewDelivery {
  readonly id: string
  readonly destination: DocumentReviewDeliveryDestination
  readonly payload: DocumentReviewDeliveryPayload
}

export interface DocumentReviewInsertRequest {
  readonly preparedId: string
}

export interface DocumentReviewInsertResult {
  readonly outcome: 'inserted'
}

export interface DocumentReviewSendNowRequest {
  readonly preparedId: string
}

export type DocumentReviewSendNowResult =
  | {
      readonly outcome: 'sent'
      /** Authoritative durable state after delivered drafts were removed. */
      readonly snapshot: DocumentReviewWorkspaceSnapshot
    }
  | {
      /** The prepared terminal authority was consumed to prevent a duplicate send. */
      readonly outcome: 'send-authority-consumed'
      /** Confirmed describes only the PTY boundary, never agent receipt. */
      readonly ptyAcceptance: 'confirmed' | 'indeterminate'
      readonly reason: string
    }
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts (lines 1-260)

<details>
<summary>112 lines</summary>

```
/** Static IPC composition only: these witnesses carry types, never handlers or validators. */
interface InvokeDeclaration<Request, Response, Access extends 'renderer' | 'preload'> {
  /** Phantom payload types; no request or response data is allocated here. */
  readonly types: { request: Request; response: Response }
  readonly access: Access
}

interface PayloadDeclaration<Payload> {
  readonly types: Payload
}

export function invoke<Request, Response>(): InvokeDeclaration<
  Request,
  Response,
  'renderer'
> {
  return { access: 'renderer' } as InvokeDeclaration<Request, Response, 'renderer'>
}

export function preloadInvoke<Request, Response>(): InvokeDeclaration<
  Request,
  Response,
  'preload'
> {
  return { access: 'preload' } as InvokeDeclaration<Request, Response, 'preload'>
}

export function payload<Payload>(): PayloadDeclaration<Payload> {
  return {} as PayloadDeclaration<Payload>
}

export interface IpcFeatureContract {
  readonly invoke: Readonly<
    Record<string, InvokeDeclaration<unknown, unknown, 'renderer' | 'preload'>>
  >
  readonly send: Readonly<Record<string, PayloadDeclaration<unknown>>>
  readonly event: Readonly<Record<string, PayloadDeclaration<unknown>>>
}

type Channels<F extends IpcFeatureContract> =
  keyof F['invoke'] | keyof F['send'] | keyof F['event']
type InternalDuplicates<F extends IpcFeatureContract> =
  | Extract<keyof F['invoke'], keyof F['send'] | keyof F['event']>
  | Extract<keyof F['send'], keyof F['event']>
type DuplicateChannels<
  Features extends readonly IpcFeatureContract[],
  Seen = never,
> = Features extends readonly [
  infer First extends IpcFeatureContract,
  ...infer Rest extends readonly IpcFeatureContract[],
]
  ? | InternalDuplicates<First>
    | Extract<Channels<First>, Seen>
    | DuplicateChannels<Rest, Seen | Channels<First>>
  : never
type UniqueChannels<F extends readonly IpcFeatureContract[]> = [
  DuplicateChannels<F>,
] extends [never]
  ? unknown
  : { readonly duplicateIpcChannels: DuplicateChannels<F> }

type Intersect<Union> = (Union extends unknown ? (value: Union) => void : never) extends (
  value: infer Intersection,
) => void
  ? Intersection
  : never
type Combined<Features extends readonly IpcFeatureContract[]> = {
  [Direction in keyof IpcFeatureContract]: Intersect<Features[number][Direction]>
}

export type InvokeMap<Contract extends IpcFeatureContract> = {
  [Channel in keyof Contract['invoke']]: Contract['invoke'][Channel]['types']
}
export type SendMap<Contract extends IpcFeatureContract> = {
  [Channel in keyof Contract['send']]: Contract['send'][Channel]['types']
}
export type EventMap<Contract extends IpcFeatureContract> = {
  [Channel in keyof Contract['event']]: Contract['event'][Channel]['types']
}
export type PreloadOnlyChannel<Contract extends IpcFeatureContract> = {
  [
    Channel in keyof Contract['invoke']
  ]: Contract['invoke'][Channel]['access'] extends 'preload' ? Channel : never
}[keyof Contract['invoke']]

/** One closed application composition. Duplicate wire names fail before bridge admission. */
export function composeIpcContracts<const Features extends readonly IpcFeatureContract[]>(
  ...features: Features & UniqueChannels<Features>
): Combined<Features> {
  const combined: { [Direction in keyof IpcFeatureContract]: Record<string, unknown> } = {
    invoke: {},
    send: {},
    event: {},
  }
  const seen = new Set<string>()
  for (const feature of features) {
    for (const direction of ['invoke', 'send', 'event'] as const) {
      for (const [channel, declaration] of Object.entries(feature[direction])) {
        if (seen.has(channel)) throw new Error(`Duplicate IPC channel '${channel}'`)
        if (direction === 'invoke') {
          const access = (declaration as IpcFeatureContract['invoke'][string]).access
          if (access !== 'renderer' && access !== 'preload') {
            throw new Error(`Invalid IPC invoke classification for '${channel}'`)
          }
        }
        seen.add(channel)
        Object.defineProperty(combined[direction], channel, {
          value: declaration,
          enumerable: true,
        })
      }
    }
  }
  return combined as Combined<Features>
}

/** Keys come from declarations, never a second handwritten allowlist. */
export function ipcChannels<Declarations extends object>(
  declarations: Declarations,
): readonly (keyof Declarations & string)[] {
  return Object.keys(declarations) as (keyof Declarations & string)[]
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/electron-builder.yml.**

/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml (lines 1-260)

<details>
<summary>71 lines</summary>

```
appId: dev.hvir.app
productName: hvir
directories:
  output: dist
  buildResources: build
files:
  - out/**
  - package.json
  - '!node_modules/@hvir/rename-noreplace/**'
  - node_modules/@hvir/rename-noreplace/index.js
  - node_modules/@hvir/rename-noreplace/package.json
  - node_modules/@hvir/rename-noreplace/LICENSE
  - node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
extraResources:
  - from: THIRD_PARTY_NOTICES.md
    to: THIRD_PARTY_NOTICES.md
  - from: build/native/hvir-command
    to: hvir-command
asar: true
asarUnpack:
  - node_modules/**/*.node
# postinstall rebuilds the required node-pty module against Electron's ABI. Keep
# packaging from also rebuilding ssh2's optional cpu-features acceleration module;
# ssh2 has a supported JavaScript fallback when that optional module is absent.
npmRebuild: false
mac:
  icon: build/icon-macos.icns
  category: public.app-category.developer-tools
  target:
    - pkg
  hardenedRuntime: true
  entitlements: build/entitlements.mac.plist
  entitlementsInherit: build/entitlements.mac.inherit.plist
pkg:
  artifactName: hvir-${version}-macos-${arch}.${ext}
  scripts: pkg-scripts
  installLocation: /Applications
  allowAnywhere: false
  allowCurrentUserHome: false
  allowRootDirectory: true
  isRelocatable: false
  isVersionChecked: true
  hasStrictIdentifier: true
  overwriteAction: upgrade
linux:
  icon: build/icons-linux
  executableName: hvir
  syncDesktopName: true
  category: Development
  target:
    - deb
deb:
  packageCategory: devel
  appArmorProfile: build/linux/hvir.apparmor
  afterInstall: build/linux/after-install.sh
  afterRemove: build/linux/after-remove.sh
  depends:
    - libc6 (>= 2.35)
    - libstdc++6 (>= 12)
    - libasound2 | libasound2t64
    - libatspi2.0-0 | libatspi2.0-0t64
    - libgtk-3-0 | libgtk-3-0t64
    - libnotify4
    - libnss3
    - libsecret-1-0
    - libuuid1
    - libxss1
    - libxtst6
    - util-linux
    - xdg-utils
  recommends: []
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml.**

/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml (lines 1-260)

<details>
<summary>16 lines</summary>

```
extends: ./electron-builder.yml
appId: dev.hvir.ssh-acceptance
productName: hvir SSH Acceptance
directories:
  output: dist/ssh-acceptance
  buildResources: build
forceCodeSigning: true
mac:
  # Clear the inherited release pkg target. The guarded command supplies only `dir`.
  target: null
  # Contributor acceptance bundles must never consume ambient release notarization state.
  notarize: false
  extendInfo:
    NSLocalNetworkUsageDescription: >-
      hvir SSH Acceptance connects to contributor-selected SSH hosts on the local
      network.
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/package.json.**

/private/var/tmp/ws/986d17d8/hvir/package.json (lines 1-220)

<details>
<summary>127 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "author": {
    "name": "hvir contributors"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "desktopName": "hvir",
  "main": "./out/main/index.js",
  "scripts": {
    "postinstall": "npm run install:runtime",
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
    "prebuild": "node scripts/check-terminal-runtime.mts",
    "predev": "node scripts/check-terminal-runtime.mts",
    "dev": "electron-vite dev",
    "build": "npm run typecheck && electron-vite build",
    "build:smoke": "electron-vite build --mode smoke",
    "build:dir": "npm run build && electron-builder --dir",
    "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
    "pack:mac:arm64:signed": "npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true",
    "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
    "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
    "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
    "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
    "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
    "assemble:native-release": "node scripts/assemble-native-release.mjs",
    "render:native-installer": "node scripts/render-native-installer.mjs",
    "preview": "electron-vite preview",
    "typecheck:node": "tsc --noEmit -p tsconfig.node.json",
    "typecheck:web": "tsc --noEmit -p tsconfig.web.json",
    "typecheck": "npm run typecheck:node && npm run typecheck:web",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "hooks:install": "bash scripts/install-git-hooks.sh",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:mutation": "stryker run",
    "check-seams": "bash scripts/check-seams.sh",
    "check-adrs": "node scripts/check-adrs.mjs",
    "architecture:report": "node scripts/architecture-hotspots.mjs",
    "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
    "generate:terminal-themes": "node scripts/generate-terminal-theme-catalog.mts",
    "update:ghostty-web": "node scripts/ghostty-web-update/cli.mts",
    "project:kind": "node scripts/project-management/sync-kind.ts",
    "project:audit": "node scripts/project-management/audit-canonical-project.ts",
    "project:record": "node scripts/project-management/read-planning-record.ts",
    "project:pr": "node scripts/project-management/sync-pull-request-planning.ts",
    "project:status": "node scripts/project-management/read-contributor-status.ts",
    "project:migrate-tokens": "node scripts/project-management/migrate-project-tokens.ts",
    "issue:context": "node scripts/project-management/read-issue-context.ts",
    "issue:start": "node scripts/project-management/start-issue.ts",
    "verify": "npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test",
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
    "smoke:scenario": "npm run build:smoke && node scripts/run-smoke-scenarios.mts",
    "smoke:isolation": "npm run build:smoke && node scripts/run-smoke-interruption.mts",
    "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
    "smoke:linux:installed": "bash scripts/run-linux-package-smoke.sh",
    "smoke:macos:installed": "bash scripts/run-macos-package-smoke.sh",
    "smoke:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts",
    "smoke:development-performance": "node scripts/run-smoke-scenarios.mts development-performance",
    "performance:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts",
    "gauntlet": "bash scripts/phase8-gauntlet.sh"
  },
  "dependencies": {
    "@codemirror/merge": "^6.12.2",
    "@codemirror/search": "^6.7.2",
    "@codemirror/state": "^6.7.4",
    "@codemirror/view": "^6.43.11",
    "bplist-parser": "^0.5.0",
    "chokidar": "^5.0.0",
    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
    "markdown-it": "^15.0.1",
    "markdown-it-task-lists": "^2.1.1",
    "mermaid": "^11.17.2",
    "node-pty": "^1.1.0",
    "plist": "^3.1.1",
    "shiki": "^4.4.3",
    "ssh-config": "^5.2.1",
    "ssh2": "^1.17.0",
    "yaml": "^2.9.0"
  },
  "devDependencies": {
    "@electron/rebuild": "^4.2.0",
    "@eslint/js": "^10.0.1",
    "@stryker-mutator/core": "^10.0.0",
    "@stryker-mutator/vitest-runner": "^10.0.0",
    "@types/node": "^24.13.3",
    "@types/plist": "^3.0.5",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@types/ssh2": "^1.15.6",
    "@vitejs/plugin-react": "^5.2.0",
    "cross-env": "^10.0.0",
    "electron": "^43.4.1",
    "electron-builder": "^26.0.0",
    "electron-vite": "^5.0.0",
    "eslint": "^10.10.0",
    "eslint-config-prettier": "^10.1.0",
    "eslint-plugin-react-hooks": "^7.1.0",
    "eslint-plugin-react-refresh": "^0.5.6",
    "happy-dom": "^20.14.0",
    "node-gyp": "^13.0.1",
    "prettier": "^3.9.6",
    "proper-lockfile": "^4.1.2",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "typescript": "^6.0.3",
    "typescript-eslint": "^8.70.0",
    "vite": "^7.3.0",
    "vitest": "^5.0.0"
  },
  "overrides": {
    "typed-rest-client": {
      "qs": "6.15.3"
    }
  },
  "optionalDependencies": {
    "@hvir/rename-noreplace": "file:packages/rename-noreplace"
  }
}
```

</details>


### Copilot

I have the core contracts. I’m now pulling the surfaces that tell me what the app shows users and which harness providers are bundled.

### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-220)

<details>
<summary>65 lines</summary>

```
/** The single explicit assembly of trusted, bundled providers. No observers start here. */

import type {
  ComposerSubmitMode,
  HarnessProviderDescriptor,
  HarnessProviderId,
  HarnessProfileId,
} from '../../shared'
import type { ProjectHost } from '../project-host/project-host'
import type { HarnessProvider } from './harness-provider-contract'
import { HarnessProviderRegistry } from './harness-provider-registry'
import { plainShellProvider, customCommandProvider } from './providers/shell'
import { claudeCodeProvider } from './providers/claude-code'
import { codexProvider } from './providers/codex'
import { piProvider } from './providers/pi'
import { geminiProvider } from './providers/gemini'
import { githubCopilotProvider } from './providers/github-copilot'
import { cursorProvider } from './providers/cursor'

export const harnessProviders = new HarnessProviderRegistry([
  plainShellProvider,
  claudeCodeProvider,
  codexProvider,
  piProvider,
  geminiProvider,
  githubCopilotProvider,
  cursorProvider,
  customCommandProvider,
])

export function harnessProvider(id: string): HarnessProvider {
  return harnessProviders.get(id)
}

export function harnessProviderCatalog(): readonly HarnessProviderDescriptor[] {
  return harnessProviders.catalog()
}

export async function configureHarnessComposerSubmit(
  host: ProjectHost,
  mode: ComposerSubmitMode,
): Promise<void> {
  for (const provider of harnessProviders.all()) {
    await provider.composerConfiguration?.configure(host, mode)
  }
}

/** Data-only inspection surface for diagnostics/tests; never provider-contributed UI. */
export function harnessProviderDiagnostics(): readonly {
  readonly id: HarnessProviderId
  readonly profileContractVersion: number
  readonly defaultProfileId?: HarnessProfileId
  readonly artifactInputs: {
    readonly executable: boolean
    readonly environmentKeys: readonly string[]
    readonly pathBindings: readonly string[]
  }
  readonly probeInvokesVersion: boolean
}[] {
  return harnessProviders.all().map((provider) => ({
    id: provider.manifest.id,
    profileContractVersion: provider.profile.version,
    defaultProfileId: provider.profile.defaultProfile?.id,
    artifactInputs: {
      executable: provider.profile.artifactExecutable,
      environmentKeys: provider.profile.artifactEnvironmentKeys,
      pathBindings: provider.profile.artifactPathBindings,
    },
    probeInvokesVersion: provider.probe.versionArgs !== undefined,
  }))
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/index.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/index.ts (lines 1-220)

<details>
<summary>52 lines</summary>

```
export type {
  Disposer,
  ExecOptions,
  ExecStreamHandle,
  ExclusiveCreateOptions,
  ProjectFileMetadataOptions,
  ProjectFileMode,
  ProjectFileRenameOptions,
  ProjectFileStreamOptions,
  ProjectFileTransferPort,
  ProjectFileWriteStreamOptions,
  ProjectHost,
  PtyExit,
  PtyProcess,
  ReadFileOptions,
  RemoveFileOptions,
  SpawnPtyOptions,
  WatchOptions,
  WriteFileOptions,
} from './project-host'
export {
  assertLoopbackEndpoint,
  isProjectPathExistsError,
  MAX_EXEC_STREAM_WRITE_BYTES,
  PROJECT_FILE_STREAM_CHUNK_BYTES,
  isPtyWriteIndeterminateError,
  ProjectPathExistsError,
  PtyWriteIndeterminateError,
} from './project-host'
export { LocalHost } from './local-host'
export { electronTrash } from './electron-project-trash'
export { SshHost } from './ssh-host'
export {
  SSH_CONTROL_CHANNEL_BUDGET,
  SSH_DEFAULT_MAX_CONCURRENT_EXECS,
  SSH_MAX_CONTROL_TRANSPORTS,
  SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS,
  SSH_MAX_PHYSICAL_TRANSPORTS,
  SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS,
  SSH_TERMINAL_CHANNEL_BUDGET,
  SSH_TRANSPORT_IDLE_GRACE_MS,
} from './ssh-host'
export type { SshTransportDiagnostic } from './ssh-host'
export type { SshAuthPrompter, SshPrompt } from './ssh-auth'
export type { SshHostOptions } from './ssh-host-options'
export type { SshIdentitySource } from './ssh-identity-source'
export { ProjectHostCatalog, identityFileCandidates } from './project-host-catalog'
export { RendererSshPrompter } from './renderer-ssh-prompter'
export { SshHostTrustStore } from './ssh-host-trust'
export type { SshHostTrust } from './ssh-host-trust'
export { parseSshConfig } from './ssh-config'
export type { SshAliasConfig } from './ssh-config'
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/project-host.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/project-host.ts (lines 1-260)

<details>
<summary>229 lines</summary>

```
/**
 * `ProjectHost` — the transport seam (ADR-010).
 *
 * Every filesystem, exec, PTY, and watch operation in hvir goes through a
 * `ProjectHost`. `LocalHost` is the default implementation; `SshHost` (Phase 4)
 * will implement the same interface over ssh2. Nothing above this seam knows or
 * cares whether a project is local or remote — remoteness is transport, not a
 * server. All paths are host-qualified `HostPath`s.
 */

import type { Duplex } from 'node:stream'

import type {
  HostId,
  HostPath,
  DirEntry,
  Stat,
  WatchEvent,
  ExecResult,
  HostConnectionState,
  HostWatchTier,
  Disposer,
  LoopbackEndpoint,
  TextWorkload,
} from '../../shared'

export type { Disposer }

/** Maximum UTF-8 payload accepted by one duplex exec-stream write. */
export const MAX_EXEC_STREAM_WRITE_BYTES = 256 * 1024

export interface ExecOptions {
  readonly cwd?: HostPath
  readonly env?: Record<string, string>
  /** Remove inherited variables before applying `env`. */
  readonly unsetEnv?: readonly string[]
  /** Written to the child's stdin before the stream is exposed. */
  readonly input?: string
  /**
   * Keep stdin open for `ExecStreamHandle.write()` / `.end()`.
   *
   * Streaming stdin remains closed by default so existing commands that read
   * until EOF cannot hang. Buffered `exec()` always ignores this option and
   * closes stdin after `input`.
   */
  readonly keepStdinOpen?: boolean
  readonly signal?: AbortSignal
  /** Max bytes to buffer across stdout+stderr before failing. */
  readonly maxBuffer?: number
  /** Terminate and return the buffered prefix instead of rejecting at maxBuffer. */
  readonly allowTruncatedOutput?: boolean
  /** Also terminate after this many NUL-delimited stdout records. */
  readonly maxStdoutNulRecords?: number
}

export interface ExecStreamHandle {
  onStdout(cb: (chunk: string) => void): Disposer
  onStderr(cb: (chunk: string) => void): Disposer
  onError(cb: (error: Error) => void): Disposer
  onExit(cb: (result: { code: number | null; signal: string | null }) => void): Disposer
  /** Write one bounded UTF-8 payload, resolving after the transport accepts it. */
  write(data: string): Promise<void>
  /** Optionally write one final bounded payload, then close stdin. */
  end(data?: string): Promise<void>
  kill(signal?: string): void
  dispose(): void
}

export interface WatchOptions {
  readonly recursive?: boolean
  /**
   * Additional host-qualified roots owned by the same backend. They follow the
   * same depth policy as `path`; callers use this to keep UI-driven shallow
   * interests bounded without consuming one SSH channel per directory.
   */
  readonly additionalPaths?: readonly HostPath[]
  /** Directory basenames to prune entirely from a recursive watch. */
  readonly excludeDirectoryNames?: readonly string[]
  /** Watch backends report asynchronous failures here instead of throwing. */
  readonly onError?: (error: Error) => void
}

export interface WriteFileOptions {
  /** Reject if the live file no longer has the version originally read. */
  readonly expectedMtimeMs?: number
  /** Cancel an in-flight write without publishing its temporary file. */
  readonly signal?: AbortSignal
}

export type ProjectFileMode = 0o644 | 0o755

export const PROJECT_FILE_STREAM_CHUNK_BYTES = 64 * 1024

export interface ProjectFileStreamOptions {
  readonly signal?: AbortSignal
}

export interface ProjectFileWriteStreamOptions extends ProjectFileStreamOptions {
  readonly mode: ProjectFileMode
  /** Exact destination ownership begins immediately after exclusive creation. */
  readonly onCreated?: () => void
}

export interface ProjectFileMetadataOptions extends ProjectFileStreamOptions {
  readonly mode: ProjectFileMode
  readonly mtimeSeconds: number
}

export interface ProjectFileRenameOptions extends ProjectFileStreamOptions {
  /** The immediate no-replace primitive has been submitted and must finish truthfully. */
  readonly onSubmitted?: () => void
}

export interface ProjectFileTrashOptions extends ProjectFileStreamOptions {
  /** The immediate recoverable-trash primitive has been submitted. */
  readonly onSubmitted?: () => void
}

/** Truthful immediate deletion mechanics; recursive policy remains coordinator-owned. */
export type ProjectFileDeletionPort =
  | {
      readonly capability: 'recoverable'
      trashEntry(path: HostPath, opts?: ProjectFileTrashOptions): Promise<void>
    }
  | {
      readonly capability: 'permanent'
    }
  | {
      readonly capability: 'unavailable'
    }

/** Immediate transfer mechanics. Recursive policy remains coordinator-owned. */
export interface ProjectFileTransferPort {
  readFileChunks(
    path: HostPath,
    opts?: ProjectFileStreamOptions,
  ): AsyncIterable<Uint8Array>
  writeFileChunksExclusive(
    path: HostPath,
    chunks: AsyncIterable<Uint8Array>,
    opts: ProjectFileWriteStreamOptions,
  ): Promise<void>
  setMetadata(path: HostPath, opts: ProjectFileMetadataOptions): Promise<void>
  renameNoReplace(
    source: HostPath,
    destination: HostPath,
    opts?: ProjectFileRenameOptions,
  ): Promise<void>
  removeDirectory(
    path: HostPath,
    opts?: { readonly ignoreMissing?: boolean },
  ): Promise<void>
}

export interface ExclusiveCreateOptions {
  readonly mode: ProjectFileMode
  /** Reject before beginning the immediate exclusive filesystem effect. */
  readonly signal?: AbortSignal
  /** Exact destination ownership begins immediately after exclusive creation. */
  readonly onCreated?: () => void
}

export class ProjectPathExistsError extends Error {
  readonly code = 'EEXIST'

  constructor() {
    super('The destination already exists')
    this.name = 'ProjectPathExistsError'
  }
}

export function isProjectPathExistsError(reason: unknown): boolean {
  return (
    reason instanceof ProjectPathExistsError ||
    (typeof reason === 'object' &&
      reason !== null &&
      (reason as { code?: unknown }).code === 'EEXIST')
  )
}

export interface RemoveFileOptions {
  /** Reject if the live file no longer has the version originally read. */
  readonly expectedMtimeMs?: number
  /** Treat an already-absent removal target as a successful idempotent cleanup. */
  readonly ignoreMissing?: boolean
}

export interface ReadFileOptions {
  /** Keep this user-visible file on the SSH polling fast path. */
  readonly pollingInterest?: boolean
  /** Revoke an in-flight bounded read when its renderer/workspace lease ends. */
  readonly signal?: AbortSignal
}

export interface SpawnPtyOptions {
  readonly file: string
  readonly args?: readonly string[]
  readonly cwd: HostPath
  readonly env?: Record<string, string>
  /** Remove inherited variables before applying `env`. */
  readonly unsetEnv?: readonly string[]
  readonly cols?: number
  readonly rows?: number
  /** TERM name; defaults to `xterm-256color`. */
  readonly name?: string
}

export interface PtyExit {
  readonly exitCode: number
  readonly signal: number | undefined
}

/** The transport may have accepted a write but cannot confirm its completion. */
export class PtyWriteIndeterminateError extends Error {
  override readonly name = 'PtyWriteIndeterminateError'
}

export function isPtyWriteIndeterminateError(
  value: unknown,
): value is PtyWriteIndeterminateError {
  return value instanceof PtyWriteIndeterminateError
}

/** A live pseudo-terminal. Produced only via the PTY supervisor (ADR-006). */
export interface PtyProcess {
  readonly pid: number
  onData(cb: (data: string) => void): Disposer
  onExit(cb: (e: PtyExit) => void): Disposer
  write(data: string): void
  /**
   * Resolves only when the immediate PTY transport accepts the complete write.
   * An adapter rejects with `PtyWriteIndeterminateError` when it cannot decide.
   */
  writeConfirmed(data: string): Promise<void>
  resize(cols: number, rows: number): void
  kill(signal?: string): void
}

export function assertLoopbackEndpoint(endpoint: LoopbackEndpoint): void {
  if (
    !Number.isInteger(endpoint.port) ||
    endpoint.port < 1 ||
    endpoint.port > 65_535 ||
    !['localhost', '127.0.0.1', '::1'].includes(endpoint.hostname)
  ) {
    throw new Error('Invalid loopback endpoint')
  }
}

export interface ProjectHost {
  readonly hostId: HostId
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  /** Present when this host can participate in verified project-file transfers. */
  readonly fileTransfer?: ProjectFileTransferPort
  /** Exact recovery guarantee and immediate top-level trash mechanic, when available. */
  readonly fileDeletion: ProjectFileDeletionPort

  /** Establish the connection (a no-op for LocalHost). */
  connect(): Promise<void>
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-config.ts (lines 1-260)

<details>
<summary>46 lines</summary>

```
import SSHConfig from 'ssh-config'

export interface SshAliasConfig {
  readonly alias: string
  readonly hostname: string
  readonly user: string
  readonly port: number
  readonly identityFiles: readonly string[]
}

export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
  const parsed = SSHConfig.parse(text)
  const aliases = parsed.flatMap((line): string[] => {
    if (!('param' in line) || !('config' in line)) return []
    const section = line
    if (section.param.toLowerCase() !== 'host') return []
    const value =
      typeof section.value === 'string'
        ? section.value
        : section.value.map((part) => part.val).join(' ')
    return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
  })
  return [...new Set(aliases)].map((alias) => {
    const values = parsed.compute(alias, { ignoreCase: true, matchExec: false })
    const one = (value: string | string[] | undefined): string | undefined =>
      Array.isArray(value) ? value[0] : value
    const hostname = one(values['hostname']) ?? alias
    const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
    const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
    const rawIdentity = values['identityfile']
    const identityFiles = (
      Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
    ).map((path) =>
      path
        .replace(/^~(?=\/|$)/, home)
        .replaceAll('%d', home)
        .replaceAll('%h', hostname)
        .replaceAll('%r', user),
    )
    return {
      alias,
      hostname,
      user,
      port: Number.isFinite(rawPort) ? rawPort : 22,
      identityFiles,
    }
  })
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-transport-pool.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-transport-pool.ts (lines 1-260)

<details>
<summary>236 lines</summary>

```
import { type Client, type ClientChannel, type SFTPWrapper } from 'ssh2'

import type { Disposer } from './project-host'

export const SSH_MAX_PHYSICAL_TRANSPORTS = 8
export const SSH_MAX_CONTROL_TRANSPORTS = 2
export const SSH_CONTROL_CHANNEL_BUDGET = 6
export const SSH_TERMINAL_CHANNEL_BUDGET = 8
export const SSH_TUNNEL_CHANNEL_BUDGET = 16
export const SSH_MAX_TUNNEL_TRANSPORTS = 2
export const SSH_TRANSPORT_IDLE_GRACE_MS = 5 * 60_000

const SSH_CHANNEL_OPEN_ATTEMPTS = 5

export type SshTransportRole = 'control' | 'terminal' | 'tunnel'

interface SshTransport {
  readonly id: number
  readonly role: SshTransportRole
  readonly client: Client
  readonly primary: boolean
  readonly channels: Set<ClientChannel>
  readonly failureListeners: Set<() => void>
  pendingChannels: number
  readonly channelBudget: number
  sftpActive: boolean
  closed: boolean
  idleTimer?: ReturnType<typeof setTimeout>
}

interface SshTransportReservation {
  readonly transport: SshTransport
  release(): void
}

export interface SshTransportDiagnostic {
  readonly id: number
  readonly role: SshTransportRole
  readonly primary: boolean
  readonly channels: number
  readonly pendingChannels: number
  readonly channelBudget: number
  readonly refusedChannels: number
}

export interface SshTransportPoolOwner {
  connected(): Promise<Client>
  assertTransportGrowthAllowed(role: SshTransportRole): void
  openAuxiliaryTransport(role: SshTransportRole): Promise<Client>
  lifecycleSignal(): AbortSignal
}

/**
 * Singular channel-capacity authority for one logical SshHost. It owns every
 * physical transport and channel lease but delegates authentication to the
 * host's one connection lifecycle.
 */
export class SshTransportPool {
  private readonly channels = new Set<ClientChannel>()
  private readonly transports = new Set<SshTransport>()
  private nextTransportId = 1
  private transportGrowthTail: Promise<void> = Promise.resolve()
  private readonly refusedChannels = new Map<number, number>()

  constructor(private readonly owner: SshTransportPoolOwner) {}

  diagnostics(): readonly SshTransportDiagnostic[] {
    return [...this.transports]
      .filter((transport) => !transport.closed)
      .map((transport) => ({
        id: transport.id,
        role: transport.role,
        primary: transport.primary,
        channels: transport.channels.size + (transport.sftpActive ? 1 : 0),
        pendingChannels: transport.pendingChannels,
        channelBudget: transport.channelBudget,
        refusedChannels: this.refusedChannels.get(transport.id) ?? 0,
      }))
      .sort((a, b) => a.id - b.id)
  }

  registerPrimary(client: Client): void {
    this.registerTransport('control', client, true)
  }

  retireClient(client: Client): void {
    const transport = this.transportForClient(client)
    if (transport) this.retireTransport(transport)
  }

  async openChannel(
    role: SshTransportRole,
    open: (client: Client) => Promise<ClientChannel>,
    signal?: AbortSignal,
    channelOpenAttempts = SSH_CHANNEL_OPEN_ATTEMPTS,
  ): Promise<ClientChannel> {
    const { value: channel, reservation } = await this.openWithChannelRetry(
      role,
      (transport) => open(transport.client),
      signal,
      channelOpenAttempts,
    )
    this.activateChannel(reservation, channel)
    return channel
  }

  async openSftp(): Promise<SFTPWrapper> {
    const { value: session, reservation } = await this.openWithChannelRetry(
      'control',
      (transport) =>
        new Promise<SFTPWrapper>((resolve, reject) => {
          try {
            transport.client.sftp((error, value) =>
              error ? reject(error) : resolve(value),
            )
          } catch (error) {
            reject(asError(error))
          }
        }),
    )
    reservation.release()
    const { transport } = reservation
    if (transport.idleTimer) clearTimeout(transport.idleTimer)
    transport.idleTimer = undefined
    transport.sftpActive = true
    session.once('close', () => {
      transport.sftpActive = false
      this.scheduleTransportIdle(transport)
    })
    return session
  }

  onChannelTransportFailure(channel: ClientChannel, callback: () => void): Disposer {
    const transport = [...this.transports].find((candidate) =>
      candidate.channels.has(channel),
    )
    if (!transport || transport.closed) {
      callback()
      return () => undefined
    }
    transport.failureListeners.add(callback)
    return () => {
      transport.failureListeners.delete(callback)
    }
  }

  dispose(): ReadonlySet<Client> {
    const transports = [...this.transports]
    const clients = new Set(transports.map((transport) => transport.client))
    for (const transport of transports) {
      transport.closed = true
      if (transport.idleTimer) clearTimeout(transport.idleTimer)
      for (const fail of transport.failureListeners) fail()
      transport.failureListeners.clear()
    }
    this.transports.clear()
    for (const channel of this.channels) channel.close()
    this.channels.clear()
    this.refusedChannels.clear()
    this.transportGrowthTail = Promise.resolve()
    return clients
  }

  private registerTransport(
    role: SshTransportRole,
    client: Client,
    primary: boolean,
  ): SshTransport {
    const existing = this.transportForClient(client)
    if (existing) return existing
    const transport: SshTransport = {
      id: this.nextTransportId++,
      role,
      client,
      primary,
      channels: new Set(),
      failureListeners: new Set(),
      pendingChannels: 0,
      channelBudget:
        role === 'control'
          ? SSH_CONTROL_CHANNEL_BUDGET
          : role === 'tunnel'
            ? SSH_TUNNEL_CHANNEL_BUDGET
            : SSH_TERMINAL_CHANNEL_BUDGET,
      sftpActive: false,
      closed: false,
    }
    this.transports.add(transport)
    return transport
  }

  private transportForClient(client: Client): SshTransport | undefined {
    return [...this.transports].find(
      (transport) => transport.client === client && !transport.closed,
    )
  }

  private transportLoad(transport: SshTransport): number {
    return (
      transport.channels.size + transport.pendingChannels + (transport.sftpActive ? 1 : 0)
    )
  }

  private availableTransport(
    role: SshTransportRole,
    excluded: ReadonlySet<number>,
  ): SshTransport | undefined {
    return [...this.transports]
      .filter(
        (transport) =>
          !transport.closed &&
          transport.role === role &&
          !excluded.has(transport.id) &&
          this.transportLoad(transport) < transport.channelBudget,
      )
      .sort((a, b) => this.transportLoad(a) - this.transportLoad(b) || a.id - b.id)[0]
  }

  private reserveOnTransport(transport: SshTransport): SshTransportReservation {
    if (transport.idleTimer) {
      clearTimeout(transport.idleTimer)
      transport.idleTimer = undefined
    }
    transport.pendingChannels++
    let released = false
    return {
      transport,
      release: () => {
        if (released) return
        released = true
        transport.pendingChannels = Math.max(0, transport.pendingChannels - 1)
        this.scheduleTransportIdle(transport)
      },
    }
  }

  private async reserveTransport(
    role: SshTransportRole,
    excluded: ReadonlySet<number> = new Set(),
  ): Promise<SshTransportReservation> {
    const primary = await this.owner.connected()
    this.registerTransport('control', primary, true)
    const available = this.availableTransport(role, excluded)
    if (available) return this.reserveOnTransport(available)

    let resolveResult!: (reservation: SshTransportReservation) => void
    let rejectResult!: (error: Error) => void
    const result = new Promise<SshTransportReservation>((resolve, reject) => {
      resolveResult = resolve
      rejectResult = reject
    })
    const grow = async (): Promise<void> => {
      try {
        const reused = this.availableTransport(role, excluded)
        if (reused) {
          resolveResult(this.reserveOnTransport(reused))
          return
        }
        const live = [...this.transports].filter((transport) => !transport.closed)
        const roleCount = live.filter((transport) => transport.role === role).length
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalView.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalView.tsx (lines 1-260)

<details>
<summary>237 lines</summary>

```
import type { ReactElement } from 'react'

import type {
  ComposerSubmitMode,
  HarnessTelemetry,
  HarnessModifiedKeyProtocol,
  HarnessProfileId,
  HarnessProviderCapabilities,
  HostConnectionState,
  HostPath,
  TerminalIdentityStatus,
} from '../../../shared'
import type { TerminalThemeOverride } from '../settings/settings'
import { useAppTheme, type AppTheme } from '../theme'
import { TerminalContextMenu } from './TerminalContextMenu'
import { terminalForkAvailability } from './terminal-fork-policy'
import { terminalThemePalette } from './terminal-theme-catalog'
import { TerminalSearch } from './TerminalSearch'
import type {
  TerminalCursorDefaults,
  TerminalLinkActivation,
  TerminalTypography,
} from './terminal-pane'
import { useTerminalPaneController } from './use-terminal-pane-controller'
import type { FreshTerminalStart } from './terminal-runtime-options'
import type { TerminalForkRequest } from './terminal-workspace-model'
import type { TerminalRuntimeRegistry } from './terminal-runtime-registry'
import { useTerminalContextMenu } from './use-terminal-context-menu'

interface TerminalViewProps {
  readonly sessionId: string
  readonly profileId: HarnessProfileId
  readonly launchRevision: number
  readonly supportsResume: boolean
  readonly capabilities: HarnessProviderCapabilities
  readonly exactForkLaunch?: true
  readonly fallbackTitle: string
  readonly harnessSessionId?: string
  readonly identityStatus?: TerminalIdentityStatus
  readonly identityDiverged?: true
  readonly forkRequest?: TerminalForkRequest
  readonly forkPending?: true
  readonly resumeOnStart: boolean
  readonly startMode: 'interactive' | 'bulk'
  readonly position: number
  readonly slot: 'primary' | 'secondary'
  readonly presented: boolean
  readonly visible: boolean
  readonly active: boolean
  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
  readonly metaEnterAliasesControl: boolean
  readonly themeOverride: TerminalThemeOverride
  readonly lightThemeId: string
  readonly darkThemeId: string
  readonly typography: TerminalTypography
  readonly cursorDefaults: TerminalCursorDefaults
  readonly ligatures: boolean
  readonly composerSubmitMode: ComposerSubmitMode
  readonly cwd: HostPath
  readonly workspaceRoot: HostPath
  readonly runtimes: TerminalRuntimeRegistry
  readonly connectionState: HostConnectionState
  readonly onTitle: (title: string) => void
  readonly onStatus: (status: string) => void
  readonly onTelemetry: (telemetry: HarnessTelemetry | undefined) => void
  readonly onIdentity: (
    harnessSessionId: string | undefined,
    status: TerminalIdentityStatus,
    identityDiverged?: true,
  ) => void
  readonly onStartFailed?: (reason: string) => void
  readonly onExit?: (exitCode: number) => void
  readonly onStarted: () => void
  readonly onFreshStarted: (started: FreshTerminalStart) => void
  readonly onCapabilities: (capabilities: HarnessProviderCapabilities) => void
  readonly onInput: (data: string) => void
  readonly onOutput: () => void
  readonly onBell: () => void
  readonly onFocus: () => void
  readonly onLink: (activation: TerminalLinkActivation) => void
  readonly onSplit: () => void
  readonly onFork: (sessionId: string) => void
  readonly onOpenTerminalSettings: () => void
}

export function TerminalView(props: TerminalViewProps): ReactElement | null {
  const {
    sessionId,
    supportsResume,
    harnessSessionId,
    slot,
    visible,
    active,
    themeOverride,
    lightThemeId,
    darkThemeId,
    connectionState,
  } = props
  const appTheme = useAppTheme()
  const effectiveTheme: AppTheme = themeOverride === 'app' ? appTheme : themeOverride
  const terminalTheme = terminalThemePalette(effectiveTheme, lightThemeId, darkThemeId)
  const controller = useTerminalPaneController(
    {
      ...props,
      presentation: visible ? 'visible' : 'hidden',
      theme: terminalTheme,
    },
    props.runtimes,
    props.presented,
  )
  const {
    containerRef,
    live,
    title,
    status,
    exited,
    semanticRegionsAvailable,
    semanticRegion,
    restart,
    startFresh,
    previousSemanticRegion,
    nextSemanticRegion,
    searchController,
    openSearch,
    getContextMenuTarget,
    focus,
  } = controller
  const contextMenu = useTerminalContextMenu(getContextMenuTarget, visible)
  const forkAvailability = terminalForkAvailability(
    {
      capabilities: props.capabilities,
      harnessSessionId: props.harnessSessionId,
      identityStatus: props.identityStatus,
      identityDiverged: props.identityDiverged,
      forkPending: props.forkPending,
    },
    props,
    live && contextMenu.request?.target.isCurrent() === true,
  )
  const canRecoverHarness = supportsResume && Boolean(harnessSessionId)

  if (!props.presented) return null

  return (
    <section
      className={`terminal-panel terminal-surface${visible ? ' visible' : ''}${active ? ' active' : ''}`}
      data-terminal-slot={slot}
      aria-label={title}
      aria-hidden={!visible}
      data-terminal-session={sessionId}
      data-terminal-status={status}
    >
      {visible && connectionState === 'connected' && exited ? (
        <div
          className="terminal-recovery-actions"
          role="group"
          aria-label={`Recovery actions for ${title}`}
        >
          <span className="terminal-recovery-status" role="status">
            {status}
          </span>
          {canRecoverHarness ? (
            <button
              type="button"
              className="terminal-start-fresh"
              aria-label={`Start fresh ${title}`}
              onClick={startFresh}
            >
              Start fresh
            </button>
          ) : null}
          <button
            type="button"
            className="terminal-restart"
            aria-label={`${canRecoverHarness ? 'Retry recovery' : 'Restart'} ${title}`}
            onClick={restart}
          >
            {canRecoverHarness ? 'Retry recovery' : 'Restart'}
          </button>
        </div>
      ) : null}
      {visible && active && semanticRegionsAvailable ? (
        <div
          className="terminal-semantic-navigation"
          role="group"
          aria-label="Transcript regions"
          onMouseDown={(event) => event.preventDefault()}
        >
          <button
            type="button"
            aria-label="Previous transcript region"
            title="Previous transcript region"
            onClick={previousSemanticRegion}
          >
            ↑
          </button>
          <span className="terminal-semantic-region" role="status" aria-live="polite">
            {semanticRegion
              ? `${regionLabel(semanticRegion.kind)} ${semanticRegion.index} of ${semanticRegion.total}`
              : 'Transcript regions'}
          </span>
          <button
            type="button"
            aria-label="Next transcript region"
            title="Next transcript region"
            onClick={nextSemanticRegion}
          >
            ↓
          </button>
        </div>
      ) : null}
      <div
        className="terminal-container"
        data-terminal-theme={effectiveTheme}
        style={{ backgroundColor: terminalTheme.background }}
        ref={containerRef}
        tabIndex={-1}
        onFocus={(event) => {
          if (event.target === event.currentTarget) focus()
        }}
        onMouseDown={focus}
        onContextMenu={contextMenu.openFromPointer}
        onKeyDownCapture={contextMenu.openFromKeyboard}
      />
      <TerminalSearch
        controller={searchController}
        canCopyRegion={semanticRegionsAvailable}
      />
      <TerminalContextMenu
        controller={contextMenu}
        onSearch={openSearch}
        onSplit={props.onSplit}
        onFork={() => props.onFork(sessionId)}
        forkAvailability={forkAvailability}
        onOpenSettings={props.onOpenTerminalSettings}
      />
    </section>
  )
}

function regionLabel(kind: 'prompt' | 'command' | 'output'): string {
  return `${kind[0]!.toUpperCase()}${kind.slice(1)}`
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalWorkspaceCollection.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalWorkspaceCollection.tsx (lines 1-260)

<details>
<summary>80 lines</summary>

```
import type { ComponentProps, ReactElement } from 'react'

import { sessionsWorkspaceQualifier, type ProjectState } from '../../../shared'
import { TerminalWorkspace } from './TerminalWorkspace'
import type { useTerminalWorkspaceRuntime } from './use-terminal-workspace-runtime'

type WorkspaceProps = ComponentProps<typeof TerminalWorkspace>
type WorkspaceRuntime = ReturnType<typeof useTerminalWorkspaceRuntime>

interface TerminalWorkspaceCollectionProps {
  readonly state?: ProjectState
  readonly runtime: WorkspaceRuntime
  readonly terminalPresented: boolean
  readonly railCompact: WorkspaceProps['railCompact']
  readonly onRailCompact: WorkspaceProps['onRailCompact']
  readonly onRollup: WorkspaceProps['onRollup']
  readonly onOpenPath: WorkspaceProps['onOpenPath']
  readonly onOpenWebLink: WorkspaceProps['onOpenWebLink']
  readonly preferences: WorkspaceProps['preferences']
  readonly onOpenSettings: WorkspaceProps['onOpenSettings']
  readonly onOpenTerminalSettings: WorkspaceProps['onOpenTerminalSettings']
  readonly onOpenHarnessSettings: WorkspaceProps['onOpenHarnessSettings']
  readonly onAddHarness: WorkspaceProps['onAddHarness']
}

/** Mounts only selected, retained-session, or admitted-transfer workspace owners. */
export function TerminalWorkspaceCollection({
  state,
  runtime,
  terminalPresented,
  railCompact,
  onRailCompact,
  onRollup,
  onOpenPath,
  onOpenWebLink,
  preferences,
  onOpenSettings,
  onOpenTerminalSettings,
  onOpenHarnessSettings,
  onAddHarness,
}: TerminalWorkspaceCollectionProps): ReactElement {
  const materialized = new Set(runtime.materializedWorkspaceIds)
  return (
    <>
      {state?.projects.flatMap((project, projectIndex) =>
        project.workspaces.flatMap((workspace, workspaceIndex) =>
          !workspace.closed &&
          (workspace.id === state.activeWorkspaceId || materialized.has(workspace.id))
            ? [
                <TerminalWorkspace
                  key={workspace.id}
                  workspaceId={workspace.id}
                  sessionsWorkspaceQualifier={sessionsWorkspaceQualifier(
                    state.revision,
                    projectIndex,
                    workspaceIndex,
                  )}
                  cwd={workspace.root}
                  label={workspace.name}
                  available={!workspace.missing}
                  visible={workspace.id === state.activeWorkspaceId}
                  presentationVisible={
                    terminalPresented && workspace.id === state.activeWorkspaceId
                  }
                  railCompact={railCompact}
                  onRailCompact={onRailCompact}
                  connectionState={project.connectionState}
                  {...runtime.moveProps(project, workspace)}
                  onRollup={onRollup}
                  onOpenPath={onOpenPath}
                  onOpenWebLink={onOpenWebLink}
                  preferences={preferences}
                  onOpenSettings={onOpenSettings}
                  onOpenTerminalSettings={onOpenTerminalSettings}
                  onOpenHarnessSettings={onOpenHarnessSettings}
                  onAddHarness={onAddHarness}
                />,
              ]
            : [],
        ),
      )}
    </>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalContextMeter.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalContextMeter.tsx (lines 1-220)

<details>
<summary>20 lines</summary>

```
import type { HarnessContextPressurePolicy, HarnessTelemetry } from '../../../shared'
import { ProviderContextMeter } from '../harness/ProviderContextMeter'

export function TerminalContextMeter({
  telemetry,
  countOnly = false,
  pressurePolicy,
}: {
  readonly telemetry?: HarnessTelemetry
  readonly countOnly?: boolean
  readonly pressurePolicy?: HarnessContextPressurePolicy
}) {
  const contextFacet = telemetry?.facets.context
  return (
    <ProviderContextMeter
      contextFacet={contextFacet}
      countOnly={countOnly}
      pressurePolicy={pressurePolicy}
    />
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalSearch.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalSearch.tsx (lines 1-220)

<details>
<summary>169 lines</summary>

```
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactElement,
} from 'react'

import { writeApplicationClipboard } from './terminal-clipboard'
import type { TerminalSearchController } from './terminal-search-controller'

interface TerminalSearchProps {
  readonly controller: TerminalSearchController
  readonly canCopyRegion: boolean
  readonly writeText?: (value: string) => Promise<void>
}

export function TerminalSearch({
  controller,
  canCopyRegion,
  writeText = writeApplicationClipboard,
}: TerminalSearchProps): ReactElement | null {
  const snapshot = useSyncExternalStore(
    controller.subscribe,
    controller.snapshot,
    controller.snapshot,
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const operation = useRef(0)
  const [pendingCopy, setPendingCopy] = useState<'match' | 'region'>()
  const [feedback, setFeedback] = useState<string>()

  useEffect(() => {
    if (!snapshot.open) return
    inputRef.current?.focus()
    inputRef.current?.select()
    return () => {
      operation.current += 1
      setPendingCopy(undefined)
      setFeedback(undefined)
    }
  }, [snapshot.open])

  const copy = (kind: 'match' | 'region'): void => {
    if (pendingCopy) return
    const id = (operation.current += 1)
    setPendingCopy(kind)
    setFeedback(undefined)
    const text =
      kind === 'match'
        ? Promise.resolve().then(() => controller.currentMatchText())
        : controller.extractCurrentRegion()
    void text
      .then((value) => writeText(value))
      .then(
        () => {
          if (operation.current !== id || !controller.snapshot().open) return
          setPendingCopy(undefined)
          setFeedback(kind === 'match' ? 'Copied match.' : 'Copied terminal region.')
        },
        () => {
          if (operation.current !== id || !controller.snapshot().open) return
          setPendingCopy(undefined)
          setFeedback(
            kind === 'match'
              ? 'Could not copy the current match to the clipboard.'
              : 'Could not copy the current terminal region to the clipboard.',
          )
        },
      )
  }

  if (!snapshot.open) return null
  const status = snapshot.pending
    ? 'Searching…'
    : snapshot.query.length === 0
      ? 'Type to search this terminal'
      : snapshot.matchCount === 0
        ? 'No matches'
        : `${(snapshot.matchIndex ?? 0) + 1} of ${snapshot.matchCount}`

  return (
    <div
      className="terminal-search"
      role="search"
      aria-label="Search terminal output"
      onMouseDown={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault()
          event.stopPropagation()
          controller.close(true)
        } else if (event.key === 'Enter' && event.target === inputRef.current) {
          event.preventDefault()
          controller.navigate(event.shiftKey ? 'previous' : 'next')
        }
      }}
    >
      <div className="terminal-search-query-row">
        <input
          ref={inputRef}
          type="search"
          aria-label="Find in terminal"
          placeholder="Find in terminal"
          spellCheck={false}
          value={snapshot.query}
          onChange={(event) => controller.setQuery(event.currentTarget.value)}
        />
        <span className="terminal-search-status" role="status" aria-live="polite">
          {status}
        </span>
        <button
          type="button"
          aria-label="Previous terminal match"
          title="Previous match (Shift+Enter)"
          disabled={snapshot.matchCount === 0 || snapshot.pending}
          onClick={() => controller.navigate('previous')}
        >
          ↑
        </button>
        <button
          type="button"
          aria-label="Next terminal match"
          title="Next match (Enter)"
          disabled={snapshot.matchCount === 0 || snapshot.pending}
          onClick={() => controller.navigate('next')}
        >
          ↓
        </button>
        <button
          type="button"
          aria-label="Close terminal search"
          title="Close search (Escape)"
          onClick={() => controller.close(true)}
        >
          ×
        </button>
      </div>
      <div className="terminal-search-actions">
        <label>
          <input
            type="checkbox"
            checked={snapshot.caseSensitive}
            onChange={(event) => controller.setCaseSensitive(event.currentTarget.checked)}
          />
          Match case
        </label>
        <button
          type="button"
          disabled={snapshot.matchCount === 0 || pendingCopy !== undefined}
          onClick={() => copy('match')}
        >
          Copy Match
        </button>
        {canCopyRegion ? (
          <button
            type="button"
            title="Copy the current semantic prompt, command, or output block"
            disabled={pendingCopy !== undefined}
            onClick={() => copy('region')}
          >
            Copy Semantic Region
          </button>
        ) : null}
        {feedback ? (
          <span
            className="terminal-search-feedback"
            role={feedback.startsWith('Could not') ? 'alert' : 'status'}
          >
            {feedback}
          </span>
        ) : null}
      </div>
    </div>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-semantic-regions.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-semantic-regions.ts (lines 1-260)

<details>
<summary>232 lines</summary>

```
import type {
  TerminalEventLocation,
  TerminalEventProvenance,
  TerminalEventScreen,
  TerminalSemanticAction,
} from './terminal-pane'

export const MAX_TERMINAL_SEMANTIC_REGIONS = 256

export type TerminalSemanticRegionKind = 'prompt' | 'command' | 'output'
export type TerminalSemanticRegionDirection = 'previous' | 'next'

export interface TerminalSemanticRegionSummary {
  readonly kind: TerminalSemanticRegionKind
  readonly index: number
  readonly total: number
}

export interface TerminalSemanticMarker {
  readonly action: TerminalSemanticAction
  readonly provenance: TerminalEventProvenance
}

export interface ResolvedTerminalSemanticRegion {
  readonly id: number
  readonly kind: TerminalSemanticRegionKind
  readonly location: TerminalEventLocation
}

export interface TerminalSemanticNavigationPlan {
  readonly candidates: readonly ResolvedTerminalSemanticRegion[]
  readonly resolved: readonly ResolvedTerminalSemanticRegion[]
  readonly changed: boolean
}

export interface TerminalSemanticCopyRange {
  readonly kind: TerminalSemanticRegionKind
  readonly start: TerminalEventProvenance
  readonly end?: TerminalEventProvenance
}

interface SemanticRegion {
  readonly id: number
  readonly kind: TerminalSemanticRegionKind
  readonly screen: TerminalEventScreen
  readonly start: TerminalEventProvenance
  end?: TerminalEventProvenance
}

interface MarkerSignature {
  readonly action: TerminalSemanticAction
  readonly row: number
  readonly column: number
}

/**
 * Per-pane semantic transcript state. It stores terminal-owned provenance only;
 * transcript text and provider policy never enter this owner.
 */
export class TerminalSemanticRegions {
  private regions: SemanticRegion[] = []
  private readonly openByScreen = new Map<TerminalEventScreen, number>()
  private readonly lastMarkerByScreen = new Map<TerminalEventScreen, MarkerSignature>()
  private nextId = 1
  private activeId?: number

  get size(): number {
    return this.regions.length
  }

  consume(marker: TerminalSemanticMarker): boolean {
    const beforeAvailable = this.regions.length > 0
    const beforeActive = this.activeId
    const { action, provenance } = marker
    if (action === 'fresh-line') return false

    const last = this.lastMarkerByScreen.get(provenance.screen)
    if (
      last?.action === action &&
      last.row === provenance.row &&
      last.column === provenance.column
    ) {
      return false
    }
    this.lastMarkerByScreen.set(provenance.screen, {
      action,
      row: provenance.row,
      column: provenance.column,
    })

    switch (action) {
      case 'fresh-line-new-prompt':
      case 'new-command':
        this.startPrompt(provenance)
        break
      case 'prompt-start':
        this.startPrompt(provenance)
        break
      case 'end-prompt-start-input':
      case 'end-prompt-start-input-terminate-eol':
        if (!this.transition(provenance, 'prompt', 'command')) {
          this.dropOpen(provenance.screen)
        }
        break
      case 'end-input-start-output':
        if (!this.transition(provenance, 'command', 'output')) {
          this.dropOpen(provenance.screen)
        }
        break
      case 'end-command':
        if (!this.finish(provenance, 'output')) this.dropOpen(provenance.screen)
        break
    }

    this.enforceBound()
    return beforeAvailable !== this.regions.length > 0 || beforeActive !== this.activeId
  }

  navigationPlan(
    direction: TerminalSemanticRegionDirection,
    screen: TerminalEventScreen,
    resolve: (provenance: TerminalEventProvenance) => TerminalEventLocation | undefined,
  ): TerminalSemanticNavigationPlan {
    const retained: SemanticRegion[] = []
    const resolved: ResolvedTerminalSemanticRegion[] = []
    for (const region of this.regions) {
      const location = resolve(region.start)
      const end = region.end ? resolve(region.end) : location
      if (!location || !end || location.screen !== end.screen) {
        if (this.openByScreen.get(region.screen) === region.id) {
          this.openByScreen.delete(region.screen)
        }
        continue
      }
      retained.push(region)
      resolved.push({ id: region.id, kind: region.kind, location })
    }

    const changed = retained.length !== this.regions.length
    this.regions = retained
    if (this.activeId !== undefined && !retained.some(({ id }) => id === this.activeId)) {
      this.activeId = undefined
    }
    for (const candidateScreen of ['normal', 'alternate'] as const) {
      if (!retained.some((region) => region.screen === candidateScreen)) {
        this.lastMarkerByScreen.delete(candidateScreen)
      }
    }

    const visible = resolved.filter(({ location }) => location.screen === screen)
    const activeIndex = visible.findIndex(({ id }) => id === this.activeId)
    const candidates =
      activeIndex < 0
        ? direction === 'previous'
          ? [...visible].reverse()
          : visible
        : direction === 'previous'
          ? visible.slice(0, activeIndex).reverse()
          : visible.slice(activeIndex + 1)

    return { candidates, resolved, changed }
  }

  activate(
    id: number,
    screen: TerminalEventScreen,
    resolved: readonly ResolvedTerminalSemanticRegion[],
  ): TerminalSemanticRegionSummary | undefined {
    const visible = resolved.filter(({ location }) => location.screen === screen)
    const index = visible.findIndex((region) => region.id === id)
    if (index < 0) return undefined
    this.activeId = id
    return {
      kind: visible[index]!.kind,
      index: index + 1,
      total: visible.length,
    }
  }

  currentCopyRange(screen: TerminalEventScreen): TerminalSemanticCopyRange | undefined {
    const active =
      this.activeId === undefined
        ? undefined
        : this.regions.find((region) => region.id === this.activeId && region.screen === screen)
    const region =
      active ?? [...this.regions].reverse().find((candidate) => candidate.screen === screen)
    return region ? { kind: region.kind, start: region.start, end: region.end } : undefined
  }

  clear(): void {
    this.regions = []
    this.openByScreen.clear()
    this.lastMarkerByScreen.clear()
    this.activeId = undefined
  }

  private startPrompt(provenance: TerminalEventProvenance): void {
    const open = this.open(provenance.screen)
    if (
      open?.kind === 'prompt' &&
      open.start.row === provenance.row &&
      open.start.column === provenance.column
    ) {
      return
    }
    if (open) {
      if (open.kind === 'output') {
        this.complete(open, provenance)
      } else {
        this.dropOpen(provenance.screen)
      }
    }
    this.start('prompt', provenance)
  }

  private transition(
    provenance: TerminalEventProvenance,
    expected: TerminalSemanticRegionKind,
    next: TerminalSemanticRegionKind,
  ): boolean {
    const open = this.open(provenance.screen)
    if (open?.kind !== expected) return false
    this.complete(open, provenance)
    this.start(next, provenance)
    return true
  }

  private finish(
    provenance: TerminalEventProvenance,
    expected: TerminalSemanticRegionKind,
  ): boolean {
    const open = this.open(provenance.screen)
    if (open?.kind !== expected) return false
    this.complete(open, provenance)
    return true
  }

  private start(kind: TerminalSemanticRegionKind, start: TerminalEventProvenance): void {
    const region: SemanticRegion = {
      id: this.nextId++,
      kind,
      screen: start.screen,
      start,
    }
    this.regions.push(region)
    this.openByScreen.set(start.screen, region.id)
  }

  private complete(region: SemanticRegion, end: TerminalEventProvenance): void {
    region.end = end
    this.openByScreen.delete(region.screen)
  }

  private dropOpen(screen: TerminalEventScreen): void {
    const id = this.openByScreen.get(screen)
    if (id === undefined) return
    this.openByScreen.delete(screen)
    this.regions = this.regions.filter((region) => region.id !== id)
    if (this.activeId === id) this.activeId = undefined
  }
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-theme-catalog.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-theme-catalog.ts (lines 1-220)

<details>
<summary>93 lines</summary>

```
import type { AppTheme } from '../theme-model'
import {
  GENERATED_TERMINAL_THEME_CATALOG,
  GENERATED_TERMINAL_THEME_CATALOG_PROVENANCE,
} from './generated-terminal-theme-catalog'
import {
  normalizeTerminalColorTheme,
  terminalThemeForAppearance,
} from './terminal-palette'
import type { TerminalColorTheme } from './terminal-pane'

export const DEFAULT_TERMINAL_THEME_IDS = {
  dark: 'hvir-default-dark',
  light: 'hvir-default-light',
} as const

export const TERMINAL_THEME_SEARCH_RESULT_LIMIT = 48

export interface TerminalThemeCatalogEntry {
  readonly id: string
  readonly name: string
  readonly source: 'hvir' | 'ghostty'
  readonly palette: TerminalColorTheme
}

export interface TerminalThemeSearchResult {
  readonly entries: readonly TerminalThemeCatalogEntry[]
  readonly total: number
  readonly limited: boolean
}

const BUILTIN_DEFAULTS: readonly TerminalThemeCatalogEntry[] = [
  {
    id: DEFAULT_TERMINAL_THEME_IDS.dark,
    name: 'Hvir Dark',
    source: 'hvir',
    palette: terminalThemeForAppearance('dark'),
  },
  {
    id: DEFAULT_TERMINAL_THEME_IDS.light,
    name: 'Hvir Light',
    source: 'hvir',
    palette: terminalThemeForAppearance('light'),
  },
]

export const TERMINAL_THEME_CATALOG_SOURCE = GENERATED_TERMINAL_THEME_CATALOG_PROVENANCE

export const TERMINAL_THEME_CATALOG: readonly TerminalThemeCatalogEntry[] = Object.freeze(
  [
    ...BUILTIN_DEFAULTS,
    ...GENERATED_TERMINAL_THEME_CATALOG.map((theme) =>
      Object.freeze({
        id: theme.id,
        name: theme.name,
        source: 'ghostty' as const,
        palette: normalizeTerminalColorTheme(theme.palette, 'dark'),
      }),
    ),
  ],
)

const THEME_BY_ID = new Map(TERMINAL_THEME_CATALOG.map((theme) => [theme.id, theme]))

export function normalizeTerminalThemeId(value: unknown, appearance: AppTheme): string {
  return typeof value === 'string' && THEME_BY_ID.has(value)
    ? value
    : DEFAULT_TERMINAL_THEME_IDS[appearance]
}

export function terminalThemeCatalogEntry(
  value: unknown,
  appearance: AppTheme,
): TerminalThemeCatalogEntry {
  return THEME_BY_ID.get(normalizeTerminalThemeId(value, appearance))!
}

export function terminalThemePalette(
  appearance: AppTheme,
  lightThemeId: unknown,
  darkThemeId: unknown,
): TerminalColorTheme {
  return terminalThemeCatalogEntry(
    appearance === 'light' ? lightThemeId : darkThemeId,
    appearance,
  ).palette
}

export function searchTerminalThemes(
  query: string,
  limit = TERMINAL_THEME_SEARCH_RESULT_LIMIT,
): TerminalThemeSearchResult {
  const boundedLimit = Math.max(0, Math.min(TERMINAL_THEME_SEARCH_RESULT_LIMIT, limit))
  const normalizedQuery = query.trim().toLocaleLowerCase('en-US')
  const matches = normalizedQuery
    ? TERMINAL_THEME_CATALOG.filter((theme) =>
        theme.name.toLocaleLowerCase('en-US').includes(normalizedQuery),
      )
    : TERMINAL_THEME_CATALOG
  return {
    entries: matches.slice(0, boundedLimit),
    total: matches.length,
    limited: matches.length > boundedLimit,
  }
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-attention.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-attention.ts (lines 1-220)

<details>
<summary>66 lines</summary>

```
import type { TerminalAttentionState } from '../../../shared'

export type TerminalAttention = TerminalAttentionState
export type TerminalIdleAttentionState = 'initial' | 'armed' | 'settled'

export interface TerminalOutputAttentionDecision {
  readonly notify: boolean
  readonly scheduleIdle: boolean
}

const attentionPriority: Record<TerminalAttention, number> = {
  working: 1,
  bell: 2,
  idle: 3,
}

export function nextTerminalAttention(
  current: TerminalAttention | undefined,
  incoming: TerminalAttention,
  focused: boolean,
): TerminalAttention | undefined {
  if (focused) return undefined
  if (current && attentionPriority[current] >= attentionPriority[incoming]) {
    return current
  }
  return incoming
}

/**
 * Idle-after-burst represents a completed terminal turn, not terminal startup,
 * resize repaint, or an arbitrary control-sequence write. Enter is the one
 * engine- and harness-independent boundary available at the TerminalPane seam.
 */
export function terminalInputArmsIdleAttention(data: string): boolean {
  return data.includes('\r') || data.includes('\n')
}

export function terminalIdleAttentionAfterInput(
  state: TerminalIdleAttentionState,
  data: string,
): TerminalIdleAttentionState {
  return terminalInputArmsIdleAttention(data) ? 'armed' : state
}

export function terminalOutputAttentionDecision(
  state: TerminalIdleAttentionState,
): TerminalOutputAttentionDecision {
  return {
    notify: state !== 'initial',
    scheduleIdle: state === 'armed',
  }
}

export function terminalAttentionLabel(attention: TerminalAttention): string {
  if (attention === 'idle') return 'Ready'
  if (attention === 'bell') return 'Bell'
  return 'Working'
}

export function terminalAttentionBadgeText(attention: TerminalAttention): string {
  if (attention === 'idle') return 'ready'
  if (attention === 'bell') return 'bell'
  return 'working'
}

export function terminalActionableAttentionCount(
  attentions: readonly (TerminalAttention | undefined)[],
): number {
  return attentions.filter((attention) => attention === 'idle' || attention === 'bell')
    .length
}

export function terminalWorkingCount(
  attentions: readonly (TerminalAttention | undefined)[],
): number {
  return attentions.filter((attention) => attention === 'working').length
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-260)

<details>
<summary>251 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import {
  basenameHostPath,
  canRender,
  renderedFileType,
  type DiffBase,
  type ViewMode,
  type GitBlameRun,
  type HostPath,
} from '../../../shared'
import { DiffView } from './DiffView'
import { FindControl } from './FindControl'
import { GoToLineControl } from './GoToLineControl'
import { RenderedView } from './RenderedView'
import { SourceView } from './SourceView'
import { LargeFileView } from './LargeFileView'
import { useSourceBlame } from './use-source-blame'
import { formatViewerBytes } from './viewer-byte-format'
import type { SourceCoordinate } from './source-coordinate'
import type {
  ViewerDocumentPosition,
  ViewerNavigationPosition,
  ViewerTab,
} from './tab-state'
import type { RegisterViewerCommandTarget } from './viewer-command-targets'
import {
  viewerFindUnavailable,
  type RegisterViewerFindTarget,
  type ViewerFindTarget,
} from './viewer-find'
import type { ViewerPositionCapture } from './viewer-position'
import {
  canUseInteractiveSource,
  sourcePreview,
  SOURCE_INTERACTIVE_BYTE_LIMIT,
} from './viewer-workload-policy'
import {
  DocumentReviewChrome,
  DocumentReviewToolbar,
} from '../document-review/DocumentReviewControls'
import { DocumentReviewInlineProvider } from '../document-review/DocumentReviewInlineSurface'
import {
  useDocumentReviewInteraction,
  type DocumentReviewDocumentProjection,
  type DocumentReviewWorkspaceBinding,
} from '../document-review/use-document-review-interaction'

interface FileViewerProps {
  readonly tab?: ViewerTab
  readonly gitRefreshVersion: number
  readonly onMode: (mode: ViewMode, position?: ViewerDocumentPosition) => void
  readonly onDiffBase: (base: DiffBase) => void
  readonly onContent: (content: string) => void
  readonly onSave: () => void
  readonly onReload: () => void
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly onNavigationHandled: (serial: number) => void
  readonly registerCommands: RegisterViewerCommandTarget
  readonly onOpenPath: (path: HostPath) => void
  readonly onRenderedDependencies: (tabId: string, paths: readonly HostPath[]) => void
  readonly documentReview?: DocumentReviewWorkspaceBinding
}

export function FileViewer({
  tab,
  gitRefreshVersion,
  onMode,
  onDiffBase,
  onContent,
  onSave,
  onReload,
  onPosition,
  onNavigationHandled,
  registerCommands,
  onOpenPath,
  onRenderedDependencies,
  documentReview,
}: FileViewerProps): ReactElement {
  const [showBlame, setShowBlame] = useState(false)
  const [modeControlExpanded, setModeControlExpanded] = useState(false)
  const [manualNavigation, setManualNavigation] = useState<ViewerNavigationPosition>()
  const [findTarget, setFindTarget] = useState<ViewerFindTarget>()
  const [findRequest, setFindRequest] = useState<number>()
  const [goToLineRequest, setGoToLineRequest] = useState<number>()
  const manualNavigationSerial = useRef(0)
  const commandSerial = useRef(0)
  const modeControlRef = useRef<HTMLDivElement>(null)
  const tabId = tab?.id
  const currentPath = tab?.path
  const blameMode = tab?.externalWorkspaceRoot ? undefined : tab?.mode
  const positionCapture = useRef<(() => ViewerDocumentPosition) | undefined>(undefined)
  const binaryImage = Boolean(tab?.file?.binary && renderedFileType(tab.path) === 'image')
  const boundedPreview = Boolean(
    tab?.file && tab.file.size > SOURCE_INTERACTIVE_BYTE_LIMIT,
  )
  const navigationContent =
    tab?.file && !tab.file.binary
      ? boundedPreview
        ? sourcePreview(tab.file.content)
        : tab.file.content
      : undefined
  const documentRefreshVersion = tab?.refresh?.version ?? 0
  const { blame, blameStatus } = useSourceBlame(
    currentPath,
    blameMode,
    showBlame,
    documentRefreshVersion,
    gitRefreshVersion,
  )

  const registerFindTarget: RegisterViewerFindTarget = useCallback((target) => {
    setFindTarget(target)
    let active = true
    return () => {
      if (!active) return
      active = false
      setFindTarget((current) => (current === target ? undefined : current))
    }
  }, [])

  const reportRenderedDependencies = useCallback(
    (paths: readonly HostPath[]): void => {
      if (tabId) onRenderedDependencies(tabId, paths)
    },
    [onRenderedDependencies, tabId],
  )

  const navigate = useCallback(
    (coordinate: SourceCoordinate): void => {
      setManualNavigation({
        ...coordinate,
        serial: (manualNavigationSerial.current -= 1),
        focus: true,
      })
      onMode('source', positionCapture.current?.())
    },
    [onMode],
  )
  const navigateReviewLine = useCallback(
    (line: number): void => navigate({ line }),
    [navigate],
  )
  const reviewInteraction = useDocumentReviewInteraction(
    tab?.file && !tab.file.binary && !tab.externalWorkspaceRoot
      ? {
          path: tab.path,
          content: tab.file.content,
          dirty: tab.dirty,
          mode: tab.mode,
        }
      : undefined,
    documentReview,
    navigateReviewLine,
  )

  const handleNavigation = (serial: number): void => {
    if (manualNavigation?.serial === serial) setManualNavigation(undefined)
    else onNavigationHandled(serial)
  }

  useEffect(() => {
    if (!tabId) return
    return registerCommands(tabId, {
      findInFile: () => setFindRequest((commandSerial.current += 1)),
      goToLine: () => setGoToLineRequest((commandSerial.current += 1)),
    })
  }, [registerCommands, tabId])

  useEffect(() => {
    if (!modeControlExpanded) return
    const collapseOutside = (event: PointerEvent): void => {
      if (
        event.target instanceof Node &&
        !modeControlRef.current?.contains(event.target)
      ) {
        setModeControlExpanded(false)
      }
    }
    document.addEventListener('pointerdown', collapseOutside, true)
    return () => document.removeEventListener('pointerdown', collapseOutside, true)
  }, [modeControlExpanded])

  return (
    <div className="viewer-body">
      {tab ? (
        <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
          {tab.conflict ? (
            <button className="conflict-badge" type="button" onClick={onReload}>
              Changed on disk · reload
            </button>
          ) : null}
          {tab.error && tab.file ? (
            <span className="viewer-operation-error" role="status" title={tab.error}>
              Save failed
            </span>
          ) : null}
          <div className="view-controls">
            {tab.externalWorkspaceRoot ? (
              <span className="external-document-status">
                Read-only · outside project
                <span
                  className="external-document-location"
                  title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
                >
                  {tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:
                  {tab.file?.resolvedPath?.path ?? tab.path.path}
                </span>
              </span>
            ) : null}
            <DocumentReviewToolbar interaction={reviewInteraction} mode={tab.mode} />
            <FindControl
              key={`${tab.id}:${tab.pane}:${tab.mode}`}
              requestSerial={findRequest}
              target={findTarget}
              unavailable={viewerFindUnavailable(tab)}
              boundedPreview={boundedPreview && tab.mode !== 'rendered'}
              onRequestHandled={(serial) =>
                setFindRequest((current) => (current === serial ? undefined : current))
              }
            />
            <GoToLineControl
              requestSerial={goToLineRequest}
              content={navigationContent}
              boundedPreview={boundedPreview}
              onRequestHandled={(serial) =>
                setGoToLineRequest((current) =>
                  current === serial ? undefined : current,
                )
              }
              onNavigate={navigate}
            />
            {tab.mode === 'diff' && !tab.diffRevision ? (
              <select
                className="diff-base-select"
                aria-label="Diff base"
                value={tab.diffBase}
                onChange={(event) => onDiffBase(event.currentTarget.value as DiffBase)}
              >
                <option value="working-tree">Index</option>
                <option value="head">HEAD</option>
                <option value="branch-point">Branch point</option>
              </select>
            ) : null}
            {tab.mode === 'source' && !tab.externalWorkspaceRoot ? (
              <button
                type="button"
                className={`blame-toggle${showBlame ? ' active' : ''}`}
                aria-pressed={showBlame}
                onClick={() => setShowBlame((shown) => !shown)}
              >
                Blame
              </button>
            ) : null}
            <div
              ref={modeControlRef}
              className={`mode-control${modeControlExpanded ? ' expanded' : ''}`}
              role="group"
              aria-label="View mode"
              onFocus={(event) => {
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-220)

<details>
<summary>129 lines</summary>

```
import type { ReactElement } from 'react'

import {
  basenameHostPath,
  type DiffBase,
  type GitChanges,
  type HostConnectionState,
  type HostPath,
} from '../../../shared'
import { GitBranchControls } from './GitBranchControls'
import { GitChangesView } from './GitChangesView'
import { GitHistoryView } from './GitHistoryView'
import { useGitCommitDetails } from './use-git-commit-details'
import { useGitRailController } from './use-git-rail-controller'

interface GitPanelProps {
  readonly root: HostPath
  readonly refreshVersion: number
  readonly historyRefreshVersion: number
  readonly onOpenChange: (path: HostPath, base: DiffBase, untracked?: boolean) => void
  readonly onOpenHistory: (path: HostPath, revision: string) => void
  readonly onOpenGraph: (hash?: string) => void
  readonly onChanges: (changes: GitChanges | undefined) => void
  readonly connectionState?: HostConnectionState
  readonly hidden?: boolean
  readonly historyPaused?: boolean
  readonly hasDirtyViewerTabs: boolean
  readonly onSwitchBranch: (branch: string) => Promise<void>
  readonly onFetch: () => Promise<void>
  readonly onPull: () => Promise<void>
  readonly autoFetchIntervalMs: number
}

export function GitPanel({
  root,
  refreshVersion,
  historyRefreshVersion,
  onOpenChange,
  onOpenHistory,
  onOpenGraph,
  onChanges,
  connectionState = 'connected',
  hidden = false,
  historyPaused = false,
  hasDirtyViewerTabs,
  onSwitchBranch,
  onFetch,
  onPull,
  autoFetchIntervalMs,
}: GitPanelProps): ReactElement {
  const controller = useGitRailController({
    root,
    refreshVersion,
    historyRefreshVersion,
    onChanges,
    connectionState,
    hidden,
    historyPaused,
    hasDirtyViewerTabs,
    onSwitchBranch,
    onFetch,
    onPull,
    autoFetchIntervalMs,
  })
  const details = useGitCommitDetails(root)
  const { model } = controller

  return (
    <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
      <header className="panel-header">
        <span className="panel-meta">{basenameHostPath(root)}</span>
      </header>
      <GitBranchControls
        root={root}
        model={model}
        syncState={controller.syncState}
        onSwitchBranch={(branch) => void controller.switchBranch(branch)}
        onFetch={controller.fetch}
        onPull={controller.pull}
      />
      <div className="git-tabs">
        <button
          type="button"
          className={model.view === 'changes' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('changes')}
        >
          Changes {controller.changeCountLabel ? `(${controller.changeCountLabel})` : ''}
        </button>
        <button
          type="button"
          className={model.view === 'history' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('history')}
        >
          History
        </button>
      </div>
      <div
        className={`tree-scroll git-scroll${model.view === 'history' ? ' history-active' : ''}`}
      >
        {connectionState !== 'connected' ? (
          <div className="git-empty">Reconnect to inspect Git.</div>
        ) : model.view === 'changes' ? (
          <GitChangesView
            root={root}
            changes={model.changes}
            loading={model.changesLoading}
            error={model.changesError}
            onOpen={onOpenChange}
          />
        ) : (
          <GitHistoryView
            commits={model.commits}
            hasMore={model.hasMore}
            error={model.historyError}
            initialLoading={model.historyInitialLoading}
            repositoryState={model.historyRepositoryState}
            root={root}
            expanded={details.expanded}
            detailStates={details.detailStates}
            collapsedDirectories={details.collapsedDirectories}
            onOpenGraph={onOpenGraph}
            onOpenFile={onOpenHistory}
            onLoadMore={controller.loadMoreHistory}
            onToggleCommit={details.toggleCommit}
            onToggleDirectory={details.toggleDirectory}
          />
        )}
      </div>
    </section>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/dashboards/WebPaneStack.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/dashboards/WebPaneStack.tsx (lines 1-220)

<details>
<summary>53 lines</summary>

```
import type { ReactElement } from 'react'

import { hostPathEquals, type HostPath } from '../../../shared'
import { WebPane, type WebViewState } from './WebPane'

export function WebPaneStack({
  views,
  root,
  active,
  activeId,
  focused,
  onToggleFocus,
  onTitle,
  onBlockedNavigation,
  onOpenBrowser,
  onRevealTerminal,
}: {
  readonly views: readonly WebViewState[]
  readonly root: HostPath
  readonly active: boolean
  readonly activeId?: string
  readonly focused: boolean
  readonly onToggleFocus: () => void
  readonly onTitle: (id: string, title: string) => void
  readonly onBlockedNavigation: (id: string) => void
  readonly onOpenBrowser: (id: string, url: string) => void
  readonly onRevealTerminal: (view: WebViewState) => void
}): ReactElement {
  return (
    <>
      {views.map((view) => (
        // Visibility-based hiding: display:none breaks <webview> guests, so
        // inactive panes collapse to zero height instead.
        <div
          className={`workspace-view${
            hostPathEquals(view.workspaceRoot, root) && active && activeId === view.id
              ? ''
              : ' web-view-hidden'
          }`}
          key={view.id}
        >
          <WebPane
            view={view}
            focused={hostPathEquals(view.workspaceRoot, root) && focused}
            onToggleFocus={onToggleFocus}
            onTitle={(title) => onTitle(view.id, title)}
            onBlockedNavigation={() => onBlockedNavigation(view.id)}
            onOpenBrowser={(url) => onOpenBrowser(view.id, url)}
            onRevealTerminal={() => onRevealTerminal(view)}
          />
        </div>
      ))}
    </>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-220)

<details>
<summary>217 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import {
  displayHostPath,
  type ProjectState,
  type RegisteredProjectState,
  type HostWatchTier,
  type WorkspaceState,
  type WorkspaceClosePlan,
} from '../../../shared'
import { RemoteConnectionBadge } from './ConnectionStatus'
import { connectionStateLabel } from './connection-status'
import type { WorkspaceAttentionRollups } from './project-session-model'
import {
  aggregateActionableWorkspaceAttention,
  aggregateWorkingWorkspaceTerminals,
  workspaceActionableAttention,
} from './workspace-attention'
import type { AppTheme } from '../theme'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
import {
  closeOnMiddleClick,
  guardMiddleClickClosePointerDown,
} from '../workbench/middle-click-close'
import { WorkbenchHealthControl } from '../health/WorkbenchHealthControl'
import { ClosedWorktreesDialog, CloseWorkspaceDialog } from './WorkspaceCatalogDialogs'

interface ProjectsBarProps {
  readonly state: ProjectState
  readonly rollups: WorkspaceAttentionRollups
  readonly busy: boolean
  readonly onAdd: () => void
  readonly onSwitch: (projectId: string, workspaceId: string) => void
  readonly onRefresh: (projectId: string) => void
  readonly onCloseProject: (projectId: string) => void
  readonly onPrune: (projectId: string) => void
  readonly onDismiss: (projectId: string, workspaceId: string) => void
  readonly onPlanCloseWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<WorkspaceClosePlan | undefined>
  readonly onCloseWorkspace: (
    projectId: string,
    workspaceId: string,
    plan: WorkspaceClosePlan,
    terminateTerminals: boolean,
  ) => void
  readonly onReopenWorkspace: (projectId: string, workspaceId: string) => void
  readonly watchTier: HostWatchTier
  readonly statusError?: string
  readonly onChangeConnection: () => void
  readonly onDisconnect: () => void
  readonly onReconnect: () => void
  readonly theme: AppTheme
  readonly onTheme: (theme: AppTheme) => void
  readonly onSettings: () => void
  readonly sessionsActive: boolean
  readonly onSessions: () => void
}

export function ProjectsBar({
  state,
  rollups,
  busy,
  onAdd,
  onSwitch,
  onRefresh,
  onCloseProject,
  onPrune,
  onDismiss,
  onPlanCloseWorkspace,
  onCloseWorkspace,
  onReopenWorkspace,
  watchTier,
  statusError,
  onChangeConnection,
  onDisconnect,
  onReconnect,
  theme,
  onTheme,
  onSettings,
  sessionsActive,
  onSessions,
}: ProjectsBarProps): ReactElement {
  const [pruneProjectId, setPruneProjectId] = useState<string>()
  const [closeProjectId, setCloseProjectId] = useState<string>()
  const [catalogProjectId, setCatalogProjectId] = useState<string>()
  const [planningWorkspaceId, setPlanningWorkspaceId] = useState<string>()
  const [closeWorkspaceRequest, setCloseWorkspaceRequest] = useState<{
    readonly projectId: string
    readonly workspaceId: string
    readonly plan: WorkspaceClosePlan
  }>()
  const [connectionMenu, setConnectionMenu] = useState<{
    readonly projectId: string
    readonly left: number
    readonly top: number
  }>()
  const connectionMenuRef = useRef<HTMLElement>(null)
  const activeProject = state.projects.find(
    (project) => project.id === state.activeProjectId,
  )
  const prunable =
    activeProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const openWorkspaces =
    activeProject?.workspaces.filter((workspace) => !workspace.closed) ?? []
  const closedWorkspaces =
    activeProject?.workspaces.filter((workspace) => workspace.closed) ?? []
  // A single-checkout project has nothing to switch between; reclaim the row.
  // Errors and prune prompts still force the bar because it is their only home.
  const showWorkspacesBar =
    activeProject !== undefined &&
    (openWorkspaces.length > 1 ||
      closedWorkspaces.length > 0 ||
      Boolean(statusError) ||
      prunable.length > 0)
  const pruneProject = state.projects.find((project) => project.id === pruneProjectId)
  const closeProject = state.projects.find((project) => project.id === closeProjectId)
  const catalogProject = state.projects.find((project) => project.id === catalogProjectId)
  const catalogWorkspaces =
    catalogProject?.workspaces.filter((workspace) => workspace.closed) ?? []
  const closeWorkspace = closeWorkspaceRequest
    ? state.projects
        .find((project) => project.id === closeWorkspaceRequest.projectId)
        ?.workspaces.find(
          (workspace) => workspace.id === closeWorkspaceRequest.workspaceId,
        )
    : undefined
  const pruneTargets =
    pruneProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const connectionProject =
    activeProject?.id === connectionMenu?.projectId ? activeProject : undefined
  useEffect(() => {
    setConnectionMenu((current) =>
      current && current.projectId !== state.activeProjectId ? undefined : current,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    setCatalogProjectId((current) =>
      current === state.activeProjectId ? current : undefined,
    )
    setCloseWorkspaceRequest((current) =>
      current?.projectId === state.activeProjectId ? current : undefined,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    if (!connectionMenu) return
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setConnectionMenu(undefined)
    }
    window.addEventListener('keydown', handleKeyDown)
    connectionMenuRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [connectionMenu])
  const canCloseWorkspace = (workspace: WorkspaceState): boolean =>
    !busy &&
    !workspace.missing &&
    workspace.id !== state.activeWorkspaceId &&
    planningWorkspaceId !== workspace.id
  const requestWorkspaceClose = (projectId: string, workspace: WorkspaceState): void => {
    if (!canCloseWorkspace(workspace)) return
    setPlanningWorkspaceId(workspace.id)
    void onPlanCloseWorkspace(projectId, workspace.id)
      .then((plan) => {
        if (!plan) return
        if (plan.terminalCount > 0) {
          setCloseWorkspaceRequest({
            projectId,
            workspaceId: workspace.id,
            plan,
          })
        } else {
          onCloseWorkspace(projectId, workspace.id, plan, false)
        }
      })
      .finally(() => setPlanningWorkspaceId(undefined))
  }
  return (
    <>
      <header className="projects-shell">
        <nav
          className="projects-bar"
          aria-label="Projects"
          data-diagnostic-capture="project-navigation"
        >
          <button
            type="button"
            className={`sessions-destination${sessionsActive ? ' active' : ''}`}
            aria-current={sessionsActive ? 'page' : undefined}
            onClick={onSessions}
          >
            Sessions
          </button>
          {state.projects.map((project) => {
            const active = !sessionsActive && project.id === state.activeProjectId
            const remote = project.registeredRoot.hostId !== 'local'
            const workspaceIds = project.workspaces.map((workspace) => workspace.id)
            const actionable = aggregateActionableWorkspaceAttention(
              workspaceIds,
              rollups,
            )
            const working = aggregateWorkingWorkspaceTerminals(workspaceIds, rollups)
            const showWorking = working > 0 && actionable === 0
            const title = projectTabTitle(project, working)
            const target = activeWorkspace(project)
            return (
              <div
                className={`project-tab${active ? ' active' : ''}`}
                key={project.id}
                title={title}
              >
                <button
                  type="button"
                  className="project-tab-main"
                  aria-current={active ? 'page' : undefined}
                  aria-label={projectTabLabel(project, actionable, working)}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/sessions/SessionsOverview.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/sessions/SessionsOverview.tsx (lines 1-220)

<details>
<summary>213 lines</summary>

```
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactElement,
} from 'react'

import type {
  ProjectState,
  SessionsLivePtyQualifier,
  SessionsOpenUnavailableReason,
  SessionsProjectionRow,
  SessionsTerminalHandle,
  SessionsWorkspaceQualifier,
} from '../../../shared'
import { SessionsOverviewCard } from './SessionsOverviewCard'
import { SessionsOverviewNotice } from './SessionsOverviewNotice'
import { SessionsCollectionToolbar } from './SessionsCollectionToolbar'
import { SessionsTerminalDetail } from './SessionsTerminalDetail'
import {
  SessionsProjectionCoordinator,
  createSessionsMainObservationPort,
} from './sessions-projection-coordinator'
import type { SessionsRendererObservationPort } from './sessions-renderer-observation'
import { sessionsTerminalOverlayOrigin } from './sessions-terminal-overlay'
import {
  sessionsTerminalSurfaceEligible,
  type SessionsTerminalSurfacePort,
} from './sessions-terminal-surface'
import { useSessionsForeground } from './use-sessions-foreground'
import { useSessionsTerminalDetail } from './use-sessions-terminal-detail'
import {
  DEFAULT_SESSIONS_OVERVIEW_POLICY,
  SESSIONS_OVERVIEW_PAGE_SIZE,
  sessionsOverviewFocusFallback,
  sessionsOverviewCardIdentity,
  sessionsOverviewGroups,
  sessionsOverviewPage,
  sessionsOverviewPolicyLabel,
  sessionsOverviewRows,
  sessionsOverviewWorkspaces,
  type SessionsOverviewPolicy,
} from './sessions-overview-model'

interface SessionsOverviewProps {
  readonly observation: SessionsRendererObservationPort
  readonly surface: SessionsTerminalSurfacePort
  readonly onOpened: (state: ProjectState) => void
  readonly onFocusOpened: (
    handle: SessionsTerminalHandle,
    workspaceQualifier: SessionsWorkspaceQualifier,
    livePty: SessionsLivePtyQualifier,
  ) => Promise<boolean>
  readonly onOpenFailed: (message: string) => void
}

export function SessionsOverview({
  observation,
  surface,
  onOpened,
  onFocusOpened,
  onOpenFailed,
}: SessionsOverviewProps): ReactElement {
  const coordinator = useRef<SessionsProjectionCoordinator | undefined>(undefined)
  coordinator.current ??= new SessionsProjectionCoordinator(
    createSessionsMainObservationPort(window.hvir),
    observation,
  )
  const source = coordinator.current
  const foreground = useSessionsForeground()
  const snapshot = useSyncExternalStore(
    source.subscribe,
    source.snapshot,
    source.snapshot,
  )
  const { controller: detail, state: detailState } = useSessionsTerminalDetail({
    surface,
    snapshot,
    foreground,
  })
  const [policy, setPolicy] = useState<SessionsOverviewPolicy>(
    DEFAULT_SESSIONS_OVERVIEW_POLICY,
  )
  const [selected, setSelected] = useState<SessionsTerminalHandle>()
  const [feedback, setFeedback] = useState<string>()
  const [opening, setOpening] = useState<SessionsTerminalHandle>()
  const detailOrigin = useRef<ReturnType<typeof sessionsTerminalOverlayOrigin>>(undefined)
  const [pageIndex, setPageIndex] = useState(0)
  const previousOrder = useRef<readonly SessionsTerminalHandle[]>([])
  const pendingFocus = useRef<SessionsTerminalHandle | undefined>(undefined)
  const rowElements = useRef(new Map<SessionsTerminalHandle, HTMLElement>())
  const collectionControl = useRef<HTMLButtonElement>(null)
  const openGeneration = useRef(0)

  useEffect(() => {
    if (!foreground) return
    const release = source.acquire()
    return release
  }, [foreground, source])
  useEffect(() => {
    if (foreground) return
    openGeneration.current += 1
    rowElements.current.clear()
    setOpening(undefined)
    detailOrigin.current = undefined
    setFeedback(undefined)
    pendingFocus.current = undefined
  }, [foreground])
  useEffect(
    () => () => {
      openGeneration.current += 1
    },
    [],
  )

  const allGroups = useMemo(
    () => sessionsOverviewGroups(snapshot.rows, policy),
    [policy, snapshot.rows],
  )
  const rows = useMemo(() => sessionsOverviewRows(allGroups), [allGroups])
  const handles = useMemo(() => rows.map((row) => row.handle), [rows])
  const page = useMemo(
    () => sessionsOverviewPage(allGroups, pageIndex),
    [allGroups, pageIndex],
  )
  useEffect(() => {
    if (!foreground || snapshot.status !== 'available') return
    if (page.pageIndex !== pageIndex) setPageIndex(page.pageIndex)
  }, [foreground, page.pageIndex, pageIndex, snapshot.status])
  useEffect(() => {
    if (!foreground || snapshot.status !== 'available') return
    const selectedDisappeared = selected !== undefined && !handles.includes(selected)
    const next = sessionsOverviewFocusFallback(previousOrder.current, handles, selected)
    previousOrder.current = handles
    const nextIndex = next ? handles.indexOf(next) : -1
    if (nextIndex >= 0) {
      const nextPage = Math.floor(nextIndex / SESSIONS_OVERVIEW_PAGE_SIZE)
      if (nextPage !== pageIndex) setPageIndex(nextPage)
    }
    if (next !== selected) {
      setSelected(next)
    }
    if (selectedDisappeared && document.activeElement === document.body) {
      if (next) pendingFocus.current = next
      else collectionControl.current?.focus()
    }
  }, [foreground, handles, pageIndex, selected, snapshot.status])
  useEffect(() => {
    const handle = pendingFocus.current
    if (!handle || !page.rows.some((row) => row.handle === handle)) return
    pendingFocus.current = undefined
    rowElements.current.get(handle)?.focus()
  }, [page.rows])
  useLayoutEffect(() => {
    if (detailState.status !== 'inactive') return
    const handle = pendingFocus.current
    if (!handle) return
    pendingFocus.current = undefined
    const row = rowElements.current.get(handle)
    if (row) row.focus()
    else collectionControl.current?.focus()
  }, [detailState.status])

  const updatePolicy = <K extends keyof SessionsOverviewPolicy>(
    key: K,
    value: SessionsOverviewPolicy[K],
  ): void => {
    setPolicy((current) => ({ ...current, [key]: value }))
    setSelected(undefined)
    setPageIndex(0)
    setFeedback(undefined)
  }

  const open = useCallback(
    async (row: SessionsProjectionRow): Promise<void> => {
      if (opening) return
      const captured = source.snapshot()
      const generation = (openGeneration.current += 1)
      setOpening(row.handle)
      setFeedback('Opening exact terminal…')
      try {
        const result = await window.hvir.invoke('sessions:open', {
          demandGeneration: captured.demandGeneration,
          sourceRevision: captured.sourceRevision,
          handle: row.handle,
          projectId: row.project.id,
          workspaceId: row.workspace.id,
          workspaceQualifier: row.workspace.qualifier,
          livePty: row.livePty,
        })
        if (generation !== openGeneration.current) return
        if (result.outcome === 'unavailable') {
          setFeedback(
            openUnavailableMessage(
              source.snapshot().revision !== captured.revision
                ? 'stale-projection'
                : result.reason,
            ),
          )
          return
        }
        onOpened(result.state)
        const focused = await onFocusOpened(
          result.handle,
          result.workspaceQualifier,
          result.livePty,
        )
        if (!focused)
          onOpenFailed('The exact terminal changed before it could receive focus')
      } catch {
        if (generation === openGeneration.current) {
          setFeedback('The exact terminal could not be opened')
        }
      } finally {
        if (generation === openGeneration.current) setOpening(undefined)
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/document-review/DocumentReviewControls.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/document-review/DocumentReviewControls.tsx (lines 1-220)

<details>
<summary>198 lines</summary>

```
import { useEffect, useState, type ReactElement } from 'react'

import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
import { DocumentReviewDeliveryPanel } from './DocumentReviewDeliveryPanel'
import { lineRangeLabel } from './document-review-inline'
import type { DocumentReviewInteraction } from './use-document-review-interaction'

export function DocumentReviewToolbar({
  interaction,
  mode,
}: {
  readonly interaction: DocumentReviewInteraction
  readonly mode?: 'rendered' | 'source' | 'diff'
}): ReactElement | null {
  if (!interaction.available && interaction.comments.length === 0) return null
  return (
    <div className="document-review-toolbar" role="group" aria-label="Document review">
      <button
        type="button"
        className={interaction.active ? 'active' : ''}
        aria-label={
          interaction.active ? 'Exit Document review mode' : 'Enter Document review mode'
        }
        aria-pressed={interaction.active}
        disabled={!interaction.available}
        title="Document review mode"
        onClick={interaction.toggle}
      >
        Review{interaction.comments.length > 0 ? ` ${interaction.comments.length}` : ''}
      </button>
      {interaction.active && mode === 'source' ? (
        <button
          type="button"
          aria-label="Add comment for selected source lines"
          disabled={interaction.dirty || !interaction.sourceRange}
          title={
            interaction.dirty
              ? 'Save or reload before capturing a source range'
              : interaction.sourceRange
                ? `Add comment for ${lineRangeLabel(interaction.sourceRange)}`
                : 'Choose a source line or range first'
          }
          onClick={interaction.captureSource}
        >
          Add comment
        </button>
      ) : null}
    </div>
  )
}

export function DocumentReviewChrome({
  interaction,
}: {
  readonly interaction: DocumentReviewInteraction
}): ReactElement | null {
  const [confirmDiscard, setConfirmDiscard] = useState(false)
  useEffect(() => {
    if (!interaction.active || !interaction.activeBatchId) setConfirmDiscard(false)
  }, [interaction.active, interaction.activeBatchId])
  if (!interaction.active) return null
  const showTray = Boolean(
    interaction.activeBatchId ||
    interaction.historyCount > 0 ||
    interaction.dirty ||
    interaction.orphanedComments.length > 0 ||
    interaction.error ||
    interaction.delivery.loading ||
    interaction.delivery.notice ||
    interaction.delivery.error,
  )
  return (
    <aside className="document-review-chrome" aria-label="Document review comments">
      {showTray ? (
        <div className="document-review-tray">
          {interaction.dirty ? (
            <span className="document-review-guidance" role="status">
              Save or reload to add comments. Existing review stays on the saved version.
            </span>
          ) : null}
          {interaction.error ? (
            <span className="document-review-error" role="alert">
              {interaction.error}
            </span>
          ) : null}
          {!interaction.delivery.open && interaction.delivery.error ? (
            <span className="document-review-error" role="alert">
              {interaction.delivery.error}
            </span>
          ) : null}
          {interaction.delivery.notice ? (
            <span className="document-review-notice" role="status">
              {interaction.delivery.notice}
            </span>
          ) : null}
          {interaction.delivery.loading && !interaction.delivery.open ? (
            <span className="document-review-notice" role="status">
              Sending review…
            </span>
          ) : null}
          {interaction.orphanedComments.map((comment) => (
            <button
              key={comment.id}
              type="button"
              className="document-review-orphan"
              onClick={() => interaction.navigate(comment)}
            >
              Open unplaced comment · {lineRangeLabel(comment.anchor.range)}
            </button>
          ))}
          {interaction.activeBatchId ? (
            <button
              type="button"
              className="document-review-primary"
              aria-label={`Send ${interaction.activeBatchCount} review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'} to the top terminal`}
              disabled={
                interaction.delivery.loading || interaction.delivery.directHandoffBlocked
              }
              title={
                interaction.delivery.directHandoffBlocked
                  ? 'Review and prepare the feedback again before another send'
                  : 'Send to the first visible terminal'
              }
              onClick={() =>
                interaction.delivery.handoffBatch(interaction.activeBatchId!)
              }
            >
              Send review {interaction.activeBatchCount}
            </button>
          ) : null}
          {interaction.activeBatchId ? (
            <button
              type="button"
              aria-label={`Discard ${interaction.activeBatchCount} draft review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'}`}
              onClick={() => {
                if (
                  interaction.activeBatchCount > 1 ||
                  interaction.activeBatchDocumentCount > 1
                ) {
                  setConfirmDiscard(true)
                } else {
                  interaction.discardReview()
                }
              }}
            >
              Discard review
            </button>
          ) : null}
          {interaction.activeBatchId ? (
            <button
              type="button"
              aria-label={`Review and send ${interaction.activeBatchCount} comments`}
              onClick={() =>
                interaction.delivery.previewBatch(interaction.activeBatchId!)
              }
            >
              Review and send…
            </button>
          ) : null}
          {interaction.historyCount > 0 ? (
            <button
              type="button"
              aria-label={`Clear ${interaction.historyCount} sent and resolved review ${interaction.historyCount === 1 ? 'comment' : 'comments'} from this workspace`}
              onClick={interaction.clearHistory}
            >
              Clear sent review {interaction.historyCount}
            </button>
          ) : null}
        </div>
      ) : null}
      <DocumentReviewDeliveryPanel delivery={interaction.delivery} />
      {confirmDiscard ? (
        <ConfirmationDialog
          labelledBy="document-review-discard-title"
          actions={[
            {
              label: 'Cancel',
              kind: 'cancel',
              onSelect: () => setConfirmDiscard(false),
            },
            {
              label: 'Discard review',
              kind: 'destructive',
              onSelect: () => {
                setConfirmDiscard(false)
                interaction.discardReview()
              },
            },
          ]}
        >
          <h2 id="document-review-discard-title">Discard this review?</h2>
          <p>
            This removes {interaction.activeBatchCount} unsent review{' '}
            {interaction.activeBatchCount === 1 ? 'comment' : 'comments'} from this
            workspace.
          </p>
        </ConfirmationDialog>
      ) : null}
    </aside>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/settings/SettingsDialog.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/settings/SettingsDialog.tsx (lines 1-220)

<details>
<summary>134 lines</summary>

```
import { useCallback, useEffect, useRef, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import type { AppTheme } from '../theme'
import { ComposerSubmitConsentDialog } from './ComposerSubmitConsentDialog'
import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
import { SettingsActiveSection } from './SettingsActiveSection'
import { SettingsSectionNavigation } from './SettingsSectionNavigation'
import type { AppSettings } from './settings'
import {
  DEFAULT_SETTINGS_DESTINATION,
  settingsSectionHeadingId,
  type SettingsDestination,
} from './settings-navigation'
import { useSettingsController } from './use-settings-controller'

interface SettingsDialogProps {
  readonly theme: AppTheme
  readonly settings: AppSettings
  readonly onSave: (theme: AppTheme, settings: AppSettings) => void
  readonly onClose: () => void
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialDestination?: SettingsDestination
}

export function SettingsDialog({
  theme,
  settings,
  onSave,
  onClose,
  workspaceRoot,
  projectRoot,
  initialDestination = DEFAULT_SETTINGS_DESTINATION,
}: SettingsDialogProps): ReactElement {
  const dialog = useRef<HTMLElement>(null)
  const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
  const confirmSafeToLeaveHarnesses = useCallback(
    () => harnessProfiles.current?.confirmSafeToLeave() ?? Promise.resolve(true),
    [],
  )
  const controller = useSettingsController({
    theme,
    settings,
    initialDestination,
    confirmSafeToLeaveHarnesses,
    onSave,
    onClose,
  })
  const requestClose = controller.requestClose

  useEffect(() => {
    if (initialDestination.intent === 'add-harness') return
    const frame = window.requestAnimationFrame(() => {
      if (initialDestination.section === 'appearance') dialog.current?.focus()
      else
        document
          .getElementById(settingsSectionHeadingId(initialDestination.section))
          ?.focus()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [initialDestination])

  useEffect(() => {
    const keydown = (event: KeyboardEvent): void => {
      if (dialog.current?.querySelector('.modal-backdrop.nested')) return
      if (event.key === 'Escape' && !(event.target instanceof HTMLTextAreaElement)) {
        requestClose()
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [requestClose])

  const statusMessage = controller.validation?.message ?? controller.saveError

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog settings-dialog"
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        tabIndex={-1}
      >
        <header className="settings-shell-heading">
          <div>
            <span>Workbench preferences</span>
            <h2 id="settings-title">Settings</h2>
          </div>
          <p>Keep hvir focused, legible, and tuned to the way you work.</p>
        </header>
        <div className="settings-shell-body">
          <SettingsSectionNavigation
            activeSection={controller.activeSection}
            onSelect={controller.requestSection}
          />
          <div className="settings-content">
            <SettingsActiveSection
              activeSection={controller.activeSection}
              draft={controller.draft}
              validation={controller.validation}
              harnessProfiles={harnessProfiles}
              workspaceRoot={workspaceRoot}
              projectRoot={projectRoot}
              initialAddOpen={controller.initialAddOpen}
              onChange={controller.updateDraft}
              onComposerSubmitMode={controller.requestComposerSubmitMode}
            />
          </div>
        </div>
        <footer className="settings-footer">
          <div className="settings-footer-status" aria-live="polite">
            {statusMessage ? (
              <p className="dialog-error" role="alert">
                {statusMessage}
              </p>
            ) : (
              <span>App preferences apply together when saved.</span>
            )}
          </div>
          <div className="dialog-actions">
            <button type="button" onClick={controller.requestClose}>
              Close settings
            </button>
            <button type="button" onClick={() => void controller.save()}>
              Save app settings
            </button>
          </div>
        </footer>
      </section>
      {controller.composerConsentOpen ? (
        <ComposerSubmitConsentDialog
          onCancel={controller.cancelComposerConsent}
          onConfirm={controller.confirmComposerConsent}
        />
      ) : null}
    </div>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workbench/use-workbench-commands.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workbench/use-workbench-commands.ts (lines 1-260)

<details>
<summary>59 lines</summary>

```
import { useEffect, useRef } from 'react'

import type {
  KeybindingAction,
  KeybindingContext,
  KeybindingMap,
  WebPaneCommandAction,
} from '../../../shared'
import { keybindingAvailableInContext } from '../../../shared'
import { matchesKeybinding } from '../settings/keybindings'
import {
  dispatchWorkbenchCommand,
  type WorkbenchCommandPorts,
} from './workbench-command-router'

export function useWorkbenchCommands(
  keybindings: KeybindingMap,
  ports: WorkbenchCommandPorts & { readonly enabled?: boolean },
): void {
  const portsRef = useRef(ports)
  portsRef.current = ports

  useEffect(() => {
    const perform = (
      action: WebPaneCommandAction,
      paneId?: string,
      context?: KeybindingContext,
    ): boolean => {
      if (portsRef.current.enabled === false) return false
      if (document.querySelector('[aria-modal="true"]')) return false
      return dispatchWorkbenchCommand(action, paneId, portsRef.current, context)
    }
    const keydown = (event: KeyboardEvent): void => {
      if (event.defaultPrevented || document.querySelector('[aria-modal="true"]')) return
      const action = (Object.entries(keybindings) as [KeybindingAction, string][]).find(
        ([, binding]) => matchesKeybinding(event, binding),
      )?.[0]
      if (!action) return
      const context: KeybindingContext =
        event.target instanceof Element && event.target.closest('.terminal-panel')
          ? 'terminal'
          : event.target instanceof Element && event.target.closest('.web-pane')
            ? 'web-pane'
            : 'workbench'
      if (!keybindingAvailableInContext(action, context)) return
      if (!perform(action, undefined, context)) return
      event.preventDefault()
      // Ghostty owns a target-level key listener. Once a terminal-scoped
      // workbench command is claimed, keep that same stroke out of the PTY.
      if (context === 'terminal') event.stopPropagation()
    }
    window.hvir.send('web-pane:reserved-bindings', keybindings)
    const disposeCommand = window.hvir.on('web-pane:command', ({ action, paneId }) =>
      perform(action, paneId),
    )
    window.addEventListener('keydown', keydown, true)
    return () => {
      window.removeEventListener('keydown', keydown, true)
      void disposeCommand()
    }
  }, [keybindings])
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workbench/use-workbench-layout.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workbench/use-workbench-layout.ts (lines 1-260)

<details>
<summary>239 lines</summary>

```
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type SetStateAction,
} from 'react'

import type { HostPath } from '../../../shared'
import {
  persistWorkspaceLayout,
  restoreWorkspaceLayout,
} from '../layout/workspace-layout-persistence'
import { fitSplitPrimaryWidth, PANE_DIVIDER_SIZE } from '../layout/split-layout-policy'
import type { ViewerPaneId } from '../viewer/tab-state'
import { focusActiveTerminalAfterLayout } from './active-terminal-focus'
import { clamp, fitTerminalHeight } from './workbench-layout-policy'
import {
  DEFAULT_WORKSPACE_PANE_STATE,
  WorkspacePaneStateSession,
  type TerminalLayoutMode,
} from './workspace-pane-state'

const TREE_MIN_WIDTH = 160
const TREE_MAX_WIDTH = 520
const MAIN_MIN_WIDTH = 420
const VIEWER_PANE_MIN_WIDTH = 240

export type WorkbenchRailMode = 'files' | 'git'

export function useWorkbenchLayout({
  root,
  gitAvailable,
  workspaceMissing,
}: {
  readonly root?: HostPath
  readonly gitAvailable: boolean
  readonly workspaceMissing: boolean
}) {
  const workbenchRef = useRef<HTMLElement>(null)
  const viewerGroupsRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef(root)
  const paneStateSessionRef = useRef<WorkspacePaneStateSession | undefined>(undefined)
  if (!paneStateSessionRef.current) {
    paneStateSessionRef.current = new WorkspacePaneStateSession()
  }
  const [railMode, setRailMode] = useState<WorkbenchRailMode>('files')
  const [terminalModeState, setTerminalModeState] =
    useState<TerminalLayoutMode>('restored')
  const [terminalRailCompactState, setTerminalRailCompactState] = useState(false)
  const [treeCollapsedState, setTreeCollapsedState] = useState(false)
  const terminalModeRef = useRef<TerminalLayoutMode>('restored')
  const terminalRailCompactRef = useRef(false)
  const treeCollapsedRef = useRef(false)
  rootRef.current = root

  useLayoutEffect(() => {
    const state = root
      ? paneStateSessionRef.current?.read(root)
      : DEFAULT_WORKSPACE_PANE_STATE
    const next = state ?? DEFAULT_WORKSPACE_PANE_STATE
    terminalModeRef.current = next.terminalMode
    terminalRailCompactRef.current = next.terminalRailCompact
    treeCollapsedRef.current = next.treeCollapsed
    setTerminalModeState(next.terminalMode)
    setTerminalRailCompactState(next.terminalRailCompact)
    setTreeCollapsedState(next.treeCollapsed)
  }, [root])

  const setTerminalMode = useCallback(
    (update: SetStateAction<TerminalLayoutMode>): void => {
      const next = resolveStateUpdate(update, terminalModeRef.current)
      terminalModeRef.current = next
      setTerminalModeState(next)
      const activeRoot = rootRef.current
      if (activeRoot) {
        paneStateSessionRef.current?.write(activeRoot, {
          terminalMode: next,
          terminalRailCompact: terminalRailCompactRef.current,
          treeCollapsed: treeCollapsedRef.current,
        })
      }
    },
    [],
  )

  const setTreeCollapsed = useCallback((update: SetStateAction<boolean>): void => {
    const next = resolveStateUpdate(update, treeCollapsedRef.current)
    treeCollapsedRef.current = next
    setTreeCollapsedState(next)
    const activeRoot = rootRef.current
    if (activeRoot) {
      paneStateSessionRef.current?.write(activeRoot, {
        terminalMode: terminalModeRef.current,
        terminalRailCompact: terminalRailCompactRef.current,
        treeCollapsed: next,
      })
    }
  }, [])

  const setTerminalRailCompact = useCallback((compact: boolean): void => {
    terminalRailCompactRef.current = compact
    setTerminalRailCompactState(compact)
    const activeRoot = rootRef.current
    if (activeRoot) {
      paneStateSessionRef.current?.write(activeRoot, {
        terminalMode: terminalModeRef.current,
        terminalRailCompact: compact,
        treeCollapsed: treeCollapsedRef.current,
      })
    }
    focusActiveTerminalAfterLayout()
  }, [])

  useEffect(() => {
    if (!root) return
    const layout = restoreWorkspaceLayout(root)
    const workbench = workbenchRef.current
    if (workbench) {
      setTrack(workbench, '--tree-track', layout.treeWidth)
      setTrack(
        workbench,
        '--terminal-track',
        layout.terminalHeight
          ? fitTerminalHeight(layout.terminalHeight, workbench.clientHeight)
          : undefined,
      )
    }
    const viewerGroups = viewerGroupsRef.current
    if (viewerGroups) {
      setTrack(viewerGroups, '--viewer-primary-track', layout.viewerPrimaryWidth)
    }
  }, [root])

  useEffect(() => {
    const workbench = workbenchRef.current
    if (!workbench) return
    const observer = new ResizeObserver(() => {
      const terminalTrack = Number.parseFloat(
        workbench.style.getPropertyValue('--terminal-track'),
      )
      if (!Number.isFinite(terminalTrack)) return
      const next = fitTerminalHeight(terminalTrack, workbench.clientHeight)
      if (Math.abs(next - terminalTrack) > 0.5) {
        workbench.style.setProperty('--terminal-track', `${next}px`)
      }
    })
    observer.observe(workbench)
    return () => observer.disconnect()
  }, [root])

  useEffect(() => {
    if ((!gitAvailable || workspaceMissing) && railMode === 'git') {
      setRailMode('files')
    }
  }, [gitAvailable, railMode, workspaceMissing])

  const setTreeWidth = useCallback((width: number): void => {
    const workbench = workbenchRef.current
    if (!workbench) return
    const terminalRailWidth =
      workbench
        .querySelector<HTMLElement>('.terminal-rail:not([hidden])')
        ?.getBoundingClientRect().width ?? 0
    const max = Math.max(
      TREE_MIN_WIDTH,
      Math.min(
        TREE_MAX_WIDTH,
        workbench.clientWidth - PANE_DIVIDER_SIZE - MAIN_MIN_WIDTH - terminalRailWidth,
      ),
    )
    const next = clamp(width, TREE_MIN_WIDTH, max)
    workbench.style.setProperty('--tree-track', `${next}px`)
    if (rootRef.current) persistWorkspaceLayout(rootRef.current, { treeWidth: next })
  }, [])

  const resetTreeWidth = useCallback((): void => {
    workbenchRef.current?.style.removeProperty('--tree-track')
    if (rootRef.current) persistWorkspaceLayout(rootRef.current, { treeWidth: 0 })
  }, [])

  const setTerminalHeight = useCallback((height: number): void => {
    const workbench = workbenchRef.current
    if (!workbench) return
    const next = fitTerminalHeight(height, workbench.clientHeight)
    workbench.style.setProperty('--terminal-track', `${next}px`)
    if (rootRef.current) {
      persistWorkspaceLayout(rootRef.current, { terminalHeight: next })
    }
  }, [])

  const resetTerminalHeight = useCallback((): void => {
    workbenchRef.current?.style.removeProperty('--terminal-track')
    if (rootRef.current) persistWorkspaceLayout(rootRef.current, { terminalHeight: 0 })
  }, [])

  const setViewerPrimaryWidth = useCallback((width: number): void => {
    const groups = viewerGroupsRef.current
    if (!groups) return
    const next = fitSplitPrimaryWidth(width, groups.clientWidth, VIEWER_PANE_MIN_WIDTH)
    groups.style.setProperty('--viewer-primary-track', `${next}px`)
    if (rootRef.current) {
      persistWorkspaceLayout(rootRef.current, { viewerPrimaryWidth: next })
    }
  }, [])

  const resetViewerPrimaryWidth = useCallback((): void => {
    viewerGroupsRef.current?.style.removeProperty('--viewer-primary-track')
    if (rootRef.current) {
      persistWorkspaceLayout(rootRef.current, { viewerPrimaryWidth: 0 })
    }
  }, [])

  const toggleTerminalFocus = useCallback(
    () => setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : 'maximized')),
    [setTerminalMode],
  )
  const focusTerminal = useCallback((): void => {
    setTerminalMode((mode) => (mode === 'collapsed' ? 'restored' : mode))
    focusActiveTerminalAfterLayout()
  }, [setTerminalMode])
  const focusViewer = useCallback(
    (pane: ViewerPaneId): void => {
      setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
      requestAnimationFrame(() =>
        document.querySelector<HTMLElement>(`[data-viewer-pane="${pane}"]`)?.focus(),
      )
    },
    [setTerminalMode],
  )
  const focusTree = useCallback((): void => {
    setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
    setTreeCollapsed(false)
    setRailMode('files')
    requestAnimationFrame(() =>
      document.querySelector<HTMLElement>('.tree-panel')?.focus(),
    )
  }, [setTerminalMode, setTreeCollapsed])

  const focusFilenameSearch = useCallback((): void => {
    setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
    setTreeCollapsed(false)
    setRailMode('files')
    requestAnimationFrame(() => {
      const input = document.querySelector<HTMLInputElement>('[data-filename-search]')
      if (input) input.focus()
      else
        document
          .querySelector<HTMLButtonElement>('[data-filename-search-trigger]')
          ?.click()
    })
  }, [setTerminalMode, setTreeCollapsed])

  const restoreViewer = useCallback((): void => {
    setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
  }, [setTerminalMode])

  return {
    workbenchRef,
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalWorkspace.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalWorkspace.tsx (lines 1-260)

<details>
<summary>257 lines</summary>

```
import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
  type ReactElement,
} from 'react'
import {
  asSessionsTerminalHandle,
  sessionsProjectionDisplayTitle,
  type HostConnectionState,
  type HostPath,
  type MoveTerminalResponse,
  type SessionsWorkspaceQualifier,
  type WorkspaceState,
} from '../../../shared'
import type { SessionsRendererSession } from '../sessions/sessions-renderer-observation'
import { fitSplitPrimaryWidth } from '../layout/split-layout-policy'
import type { TerminalPreferences } from '../settings/settings'
import {
  normalizeTerminalWebTarget,
  activateTerminalFileTarget,
  type ResolvedTerminalFileTarget,
} from './terminal-file-link'
import { TerminalDeck } from './TerminalDeck'
import { TerminalWorkspaceControls } from './TerminalWorkspaceControls'
import {
  readTerminalSplitLayout,
  writeTerminalSplitLayout,
} from './terminal-split-persistence'
import {
  initialTerminalWorkspaceModel,
  settledTerminalSessions,
  terminalPaneActiveId,
  terminalWorkspaceReducer,
  terminalWorkspaceActionAffectsSessionsProjection,
  terminalWorkspaceSplit,
  type TerminalSession,
  type TerminalWorkspaceAction,
} from './terminal-workspace-model'
import {
  useTerminalAttentionController,
  useTerminalAttentionRollup,
} from './use-terminal-attention-controller'
import { useTerminalProfiles } from './use-terminal-profiles'
import { useTerminalPersistence } from './use-terminal-persistence'
import { useTerminalRecovery } from './use-terminal-recovery'
import type { TerminalRuntimeRegistry } from './terminal-runtime-registry'
import {
  useTerminalWorkspaceMove,
  type TerminalWorkspaceController,
} from './use-terminal-workspace-move'
import { useTerminalSessionCommands } from './use-terminal-session-commands'

interface TerminalWorkspaceProps {
  readonly cwd: HostPath
  readonly workspaceId: string
  readonly sessionsWorkspaceQualifier: SessionsWorkspaceQualifier
  readonly connectionState: HostConnectionState
  readonly available: boolean
  readonly visible: boolean
  readonly presentationVisible: boolean
  readonly railCompact: boolean
  readonly onRailCompact: (compact: boolean) => void
  readonly label: string
  readonly onRollup: (workspaceId: string, rollup: TerminalWorkspaceRollup) => void
  readonly onOpenPath: (target: ResolvedTerminalFileTarget) => void
  readonly onOpenWebLink: (activation: {
    readonly terminalId: string
    readonly workspaceRoot: HostPath
    readonly url: string
  }) => void
  readonly preferences: TerminalPreferences
  readonly onOpenSettings: () => void
  readonly onOpenTerminalSettings: () => void
  readonly onOpenHarnessSettings: () => void
  readonly onAddHarness: () => void
  readonly runtimes: TerminalRuntimeRegistry
  readonly moveTargets: readonly WorkspaceState[]
  readonly onMaterializationChange: (workspaceId: string, retained: boolean) => void
  readonly onSessionsSource: (
    workspaceId: string,
    source: (() => readonly SessionsRendererSession[]) | undefined,
  ) => void
  readonly onSessionsChanged: (workspaceId: string) => void
  readonly onController: (
    workspaceId: string,
    controller: TerminalWorkspaceController | undefined,
  ) => void
  readonly onPrepareMoveTarget: (workspaceId: string) => Promise<void>
  readonly onReleaseMoveTarget: (workspaceId: string) => void
  readonly onTerminalMoved: (
    sessionId: string,
    sourceWorkspaceId: string,
    targetWorkspaceId: string,
    response: MoveTerminalResponse,
  ) => void
  readonly onAcknowledgeMoveTargets: (workspaceIds: readonly string[]) => Promise<void>
  readonly onError: (message: string) => void
}

export interface TerminalWorkspaceRollup {
  readonly actionable: number
  readonly working: number
}

export function TerminalWorkspace({
  cwd,
  workspaceId,
  sessionsWorkspaceQualifier,
  connectionState,
  available,
  visible,
  presentationVisible,
  railCompact,
  onRailCompact,
  label,
  onRollup,
  onOpenPath,
  onOpenWebLink,
  preferences,
  onOpenSettings,
  onOpenTerminalSettings,
  onOpenHarnessSettings,
  onAddHarness,
  runtimes,
  moveTargets,
  onMaterializationChange,
  onSessionsSource,
  onSessionsChanged,
  onController,
  onPrepareMoveTarget,
  onReleaseMoveTarget,
  onTerminalMoved,
  onAcknowledgeMoveTargets,
  onError,
}: TerminalWorkspaceProps): ReactElement {
  const workspaceRootRef = useRef(cwd)
  if (
    workspaceRootRef.current.hostId !== cwd.hostId ||
    workspaceRootRef.current.path !== cwd.path
  ) {
    workspaceRootRef.current = cwd
  }
  const workspaceRoot = workspaceRootRef.current
  const terminalDeckRef = useRef<HTMLDivElement>(null)
  const restoredSplitLayout = useRef(readTerminalSplitLayout(workspaceRoot))
  const [model, dispatch] = useReducer(terminalWorkspaceReducer, {
    ...initialTerminalWorkspaceModel,
    primaryWidth: restoredSplitLayout.current.primaryWidth,
  })
  const modelRef = useRef(model)
  const [menuOpen, setMenuOpen] = useState(false)
  const profileState = useTerminalProfiles({
    root: workspaceRoot,
    connectionState,
    menuOpen,
  })
  const { providers, profiles, probes, acceptCatalog, acceptRecoveryProbes } =
    profileState
  const send = useCallback(
    (action: TerminalWorkspaceAction): void => {
      const current = modelRef.current
      const next = terminalWorkspaceReducer(current, action)
      modelRef.current = next
      dispatch(action)
      if (next !== current && terminalWorkspaceActionAffectsSessionsProjection(action)) {
        onSessionsChanged(workspaceId)
      }
    },
    [onSessionsChanged, workspaceId],
  )
  modelRef.current = model
  useEffect(() => {
    onSessionsSource(workspaceId, () =>
      settledTerminalSessions(modelRef.current.sessions).map((session) => {
        const runtime = runtimes.sessionSnapshot(session.id)
        const handle = asSessionsTerminalHandle(session.id)
        const providerName =
          providers.find((provider) => provider.id === session.providerId)?.displayName ??
          String(session.providerId)
        return {
          handle,
          workspaceQualifier: sessionsWorkspaceQualifier,
          providerId: session.providerId,
          profileId: session.profileId,
          title: sessionsProjectionDisplayTitle(
            session.title,
            handle,
            `${providerName} · ${label}`,
            [workspaceRoot.path, session.cwd.path, session.harnessSessionId ?? ''],
          ),
          dormant: session.dormant === true,
          resumeOnStart: session.resumeOnStart,
          exited: runtime?.exited === true,
          recoveryUnavailable: runtime?.recoveryFailure !== undefined,
          attention: session.attention,
        }
      }),
    )
    return () => onSessionsSource(workspaceId, undefined)
  }, [
    label,
    onSessionsSource,
    providers,
    runtimes,
    sessionsWorkspaceQualifier,
    workspaceId,
    workspaceRoot.path,
  ])
  const { sessions, activeId } = model
  useEffect(() => {
    onMaterializationChange(workspaceId, sessions.length > 0)
  }, [onMaterializationChange, sessions.length, workspaceId])
  const updateSession = useCallback(
    (id: string, update: (session: TerminalSession) => TerminalSession): void => {
      const session = modelRef.current.sessions.find((candidate) => candidate.id === id)
      if (!session) return
      const updated = update(session)
      if (updated !== session) send({ type: 'session-updated', session: updated })
    },
    [send],
  )
  const {
    reset: resetAttention,
    focusSession: focusAttentionSession,
    forgetSession: forgetAttentionSession,
    raiseAttention,
    recordInput,
    recordOutput,
  } = useTerminalAttentionController({
    idleThresholdMs: preferences.idleThresholdMs,
    onUpdateSession: updateSession,
  })
  useTerminalAttentionRollup({ workspaceId, sessions, onRollup })
  const recovery = useTerminalRecovery({
    root: workspaceRoot,
    available,
    visible,
    mode: preferences.terminalRecoveryMode,
    model,
    providers,
    profiles,
    probes,
    splitLayout: restoredSplitLayout.current,
    ports: {
      acceptCatalog,
      acceptProbes: acceptRecoveryProbes,
      resetAttention,
      send,
    },
  })
  const { ready: recoveryReady, defaultProvider, defaultProfile } = recovery
  useTerminalPersistence({ root: workspaceRoot, model, ready: recoveryReady })
  const commands = useTerminalSessionCommands({
    available,
    workspaceRoot,
    profiles,
    providers,
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/project-host-catalog.ts (lines 1-240)

<details>
<summary>201 lines</summary>

```
import { homedir } from 'node:os'
import { join } from 'node:path'

import { localPath, type HostPath, type ProjectHostOption } from '../../shared'
import { LocalHost } from './local-host'
import type { Disposer, ProjectHost } from './project-host'
import type { SshAuthPrompter } from './ssh-auth'
import { parseSshConfig, type SshAliasConfig } from './ssh-config'
import { SshHost } from './ssh-host'
import { SshHostTrustStore } from './ssh-host-trust'
import { LocalSshIdentitySource } from './ssh-identity-source'

export interface ProjectHostCatalogOptions {
  readonly prompter: SshAuthPrompter
  readonly trustFile: HostPath
  readonly home?: string
  readonly agentSocket?: string
  readonly trashItem?: (path: HostPath) => Promise<void>
}

/** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
export class ProjectHostCatalog {
  readonly local: LocalHost
  private readonly hosts = new Map<string, ProjectHost>()
  private readonly pendingHosts = new Map<string, Promise<ProjectHost>>()
  private readonly hostStateDisposers = new Map<string, Disposer>()
  private readonly listeners = new Set<() => void>()
  private disposed = false
  private disposal?: Promise<void>

  private constructor(
    local: LocalHost,
    private readonly aliases: readonly SshAliasConfig[],
    private readonly prompter: SshAuthPrompter,
    private readonly trust: SshHostTrustStore,
    private readonly home: string,
    private readonly agentSocket: string | undefined,
  ) {
    this.local = local
    this.hosts.set(local.hostId, local)
  }

  static async create(options: ProjectHostCatalogOptions): Promise<ProjectHostCatalog> {
    const local = new LocalHost({ trashItem: options.trashItem })
    try {
      await local.connect()
      const home = options.home ?? homedir()
      const aliases = await loadSshAliases(local, home)
      const trust = await SshHostTrustStore.load(local, options.trustFile)
      return new ProjectHostCatalog(
        local,
        aliases,
        options.prompter,
        trust,
        home,
        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
      )
    } catch (error) {
      await local.dispose()
      throw error
    }
  }

  onHostStateChange(listener: () => void): Disposer {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  listHosts(): readonly ProjectHostOption[] {
    return [
      hostOption(this.local, 'Local', 'local'),
      ...this.aliases.map((config) => {
        const host = this.hosts.get(config.alias)
        return host
          ? hostOption(host, config.alias, 'ssh')
          : {
              hostId: config.alias,
              label: config.alias,
              kind: 'ssh' as const,
              connectionState: 'disconnected' as const,
              watchTier: 'polling' as const,
            }
      }),
    ]
  }

  hostById(hostId: string): ProjectHost | undefined {
    return this.hosts.get(hostId)
  }

  connectedHosts(): readonly ProjectHost[] {
    return [...this.hosts.values()].filter(
      ({ connectionState }) => connectionState === 'connected',
    )
  }

  materializeHost(hostId: string): Promise<ProjectHost> {
    if (this.disposed)
      return Promise.reject(new Error('Project host catalog is disposed'))
    const existing = this.hosts.get(hostId)
    if (existing) return Promise.resolve(existing)
    const pending = this.pendingHosts.get(hostId)
    if (pending) return pending
    const creation = Promise.resolve()
      .then(() => this.createSshHost(hostId))
      .finally(() => {
        if (this.pendingHosts.get(hostId) === creation) this.pendingHosts.delete(hostId)
      })
    this.pendingHosts.set(hostId, creation)
    return creation
  }

  async disconnectHost(hostId: string): Promise<ProjectHostOption> {
    if (hostId === this.local.hostId) throw new Error('The local host cannot disconnect')
    const host = this.hosts.get(hostId)
    if (!host) throw new Error(`SSH host is not connected: ${hostId}`)
    await host.dispose()
    return hostOption(host, hostId, 'ssh')
  }

  async disconnectSshHosts(): Promise<void> {
    await Promise.all(
      [...this.hosts.values()]
        .filter((host) => host.hostId !== this.local.hostId)
        .map((host) => host.dispose()),
    )
  }

  dispose(): Promise<void> {
    if (this.disposal) return this.disposal
    this.disposed = true
    this.disposal = this.disposeOwnedHosts()
    return this.disposal
  }

  private async disposeOwnedHosts(): Promise<void> {
    await Promise.all(
      [...this.pendingHosts.values()].map((pending) => pending.catch(() => undefined)),
    )
    for (const dispose of this.hostStateDisposers.values()) await dispose()
    this.hostStateDisposers.clear()
    await Promise.all([...this.hosts.values()].map((host) => host.dispose()))
    this.listeners.clear()
  }

  private createSshHost(hostId: string): ProjectHost {
    const config = this.aliases.find((candidate) => candidate.alias === hostId)
    if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
    if (this.disposed) throw new Error('Project host catalog is disposed')
    const existing = this.hosts.get(hostId)
    if (existing) return existing
    const host = new SshHost({
      config,
      identitySource: new LocalSshIdentitySource(
        this.local,
        identityFileCandidates(config, this.home),
      ),
      agentSocket: this.agentSocket,
      prompter: this.prompter,
      trust: this.trust.forAlias(config.alias),
    })
    this.hosts.set(hostId, host)
    this.hostStateDisposers.set(
      hostId,
      host.onConnectionState(() => {
        for (const listener of this.listeners) listener()
      }),
    )
    return host
  }
}

const DEFAULT_IDENTITY_NAMES = [
  'id_rsa',
  'id_ecdsa',
  'id_ecdsa_sk',
  'id_ed25519',
  'id_ed25519_sk',
  'id_xmss',
  'id_dsa',
] as const

/** OpenSSH's conventional identity set applies when no IdentityFile is configured. */
export function identityFileCandidates(
  config: SshAliasConfig,
  home = homedir(),
): readonly string[] {
  if (config.identityFiles.length) return [...new Set(config.identityFiles)]
  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
}

async function loadSshAliases(
  host: LocalHost,
  home: string,
): Promise<readonly SshAliasConfig[]> {
  try {
    return parseSshConfig(
      await host.readTextFile(localPath(join(home, '.ssh/config'))),
      home,
    )
  } catch {
    return []
  }
}

function hostOption(
  host: ProjectHost,
  label: string,
  kind: 'local' | 'ssh',
): ProjectHostOption {
  return {
    hostId: host.hostId,
    label,
    kind,
    connectionState: host.connectionState,
    watchTier: host.watchTier,
  }
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-host.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-host.ts (lines 1-220)

<details>
<summary>213 lines</summary>

```
import { createHash, randomUUID } from 'node:crypto'
import { StringDecoder } from 'node:string_decoder'

import { Client, utils, type ClientChannel, type ConnectConfig } from 'ssh2'

import {
  asHostId,
  type DirEntry,
  type ExecResult,
  type HostConnectionState,
  type HostId,
  type HostPath,
  type HostWatchTier,
  type LoopbackEndpoint,
  type Stat,
  type WatchEvent,
} from '../../shared'
import {
  assertLoopbackEndpoint,
  MAX_EXEC_STREAM_WRITE_BYTES,
  PtyWriteIndeterminateError,
  type Disposer,
  type ExecOptions,
  type ExecStreamHandle,
  type ProjectHost,
  type ProjectFileTransferPort,
  type PtyProcess,
  type ReadFileOptions,
  type SpawnPtyOptions,
  type WatchOptions,
  type WriteFileOptions,
} from './project-host'
import type { SshPrompt } from './ssh-auth'
import { closeSshClient, startSshAuthentication } from './ssh-client-lifecycle'
import { SshFileAccess } from './ssh-file-access'
import type { SshHostOptions } from './ssh-host-options'
import { SshIdentityGeneration } from './ssh-identity-source'
import {
  SshTransportPool,
  type SshTransportDiagnostic,
  type SshTransportRole,
} from './ssh-transport-pool'
import { SshWatchService } from './ssh-watch-service'

export {
  SSH_CONTROL_CHANNEL_BUDGET,
  SSH_MAX_CONTROL_TRANSPORTS,
  SSH_MAX_PHYSICAL_TRANSPORTS,
  SSH_TERMINAL_CHANNEL_BUDGET,
  SSH_TRANSPORT_IDLE_GRACE_MS,
  type SshTransportDiagnostic,
} from './ssh-transport-pool'

export const SSH_DEFAULT_MAX_CONCURRENT_EXECS = 4
export const SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS = 4
export const SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS = 5_000

interface SshCredentialAttempt {
  password?: string
  readonly passphrases: Map<string, string>
  readonly identityGeneration: SshIdentityGeneration
}

let nextRemotePid = -1

export class SshHost implements ProjectHost {
  readonly hostId: HostId
  readonly fileDeletion = { capability: 'permanent' } as const
  readonly fileTransfer: ProjectFileTransferPort
  private state: HostConnectionState = 'disconnected'
  private tier: HostWatchTier = 'polling'
  private client?: Client
  private clientGeneration = 0
  private connecting?: Promise<void>
  private cancelConnecting?: (error: Error) => void
  private disposed = false
  private reconnectAttempt = 0
  private reconnectTimer?: ReturnType<typeof setTimeout>
  private reconnectSuppressed = false
  private promptedDuringConnect = false
  private resolvedShell?: string
  private readonly listeners = new Set<(state: HostConnectionState) => void>()
  private readonly pendingClients = new Set<Client>()
  private readonly credentialAttempts = new Set<SshCredentialAttempt>()
  private promptTail: Promise<void> = Promise.resolve()
  private cachedPassword?: string
  private readonly cachedPassphrases = new Map<string, string>()
  private acceptedHostFingerprint?: string
  private promptAbort?: AbortController
  private poolGrowthPromptBlocked = false
  private lifecycleAbort = new AbortController()
  private readonly maxConcurrentExecs: number
  private activeExecs = 0
  private readonly execWaiters: Array<{
    resolve: (release: () => void) => void
    reject: (error: Error) => void
    signal?: AbortSignal
    abort?: () => void
  }> = []
  private readonly transportPool: SshTransportPool
  private readonly files: SshFileAccess
  private readonly watches: SshWatchService
  constructor(private readonly options: SshHostOptions) {
    this.hostId = asHostId(options.config.alias)
    this.transportPool = new SshTransportPool({
      connected: () => this.connected(),
      assertTransportGrowthAllowed: (role) => this.assertTransportGrowthAllowed(role),
      openAuxiliaryTransport: (role) => this.openAuxiliaryTransport(role),
      lifecycleSignal: () => this.lifecycleAbort.signal,
    })
    this.files = new SshFileAccess(
      {
        hostId: this.hostId,
        openSftp: () => this.transportPool.openSftp(),
      },
      options,
    )
    this.fileTransfer = {
      readFileChunks: (path, streamOptions) =>
        this.files.readFileChunks(path, streamOptions),
      writeFileChunksExclusive: (path, chunks, streamOptions) =>
        this.files.writeFileChunksExclusive(path, chunks, streamOptions),
      setMetadata: (path, metadataOptions) =>
        this.files.setProjectFileMetadata(path, metadataOptions),
      renameNoReplace: (source, destination, streamOptions) =>
        this.files.renameProjectFileNoReplace(source, destination, streamOptions),
      removeDirectory: (path, removeOptions) =>
        this.files.removeDirectory(path, removeOptions),
    }
    this.watches = new SshWatchService(
      {
        hostId: this.hostId,
        connectionState: () => this.state,
        watchTier: () => this.tier,
        setWatchTier: (tier) => {
          this.tier = tier
          this.notifyState()
        },
        onConnectionState: (callback) => this.onConnectionState(callback),
        execStream: (command, args) => this.execStream(command, args),
      },
      this.files,
      options,
    )
    const requestedExecs = options.maxConcurrentExecs ?? SSH_DEFAULT_MAX_CONCURRENT_EXECS
    this.maxConcurrentExecs = Math.max(
      1,
      Math.min(
        16,
        Number.isFinite(requestedExecs)
          ? Math.floor(requestedExecs)
          : SSH_DEFAULT_MAX_CONCURRENT_EXECS,
      ),
    )
  }
  get connectionState(): HostConnectionState {
    return this.state
  }
  get watchTier(): HostWatchTier {
    return this.tier
  }
  transportDiagnostics(): readonly SshTransportDiagnostic[] {
    return this.transportPool.diagnostics()
  }
  onConnectionState(cb: (state: HostConnectionState) => void): Disposer {
    this.listeners.add(cb)
    cb(this.state)
    return () => {
      this.listeners.delete(cb)
    }
  }
  async connect(): Promise<void> {
    this.reconnectSuppressed = false
    return this.beginConnect()
  }
  private async beginConnect(): Promise<void> {
    if (this.state === 'connected') return
    if (this.connecting) return this.connecting
    this.disposed = false
    if (this.lifecycleAbort.signal.aborted) this.lifecycleAbort = new AbortController()
    this.setState(this.reconnectAttempt ? 'reconnecting' : 'connecting')
    this.connecting = this.open()
      .catch((error: unknown) => {
        this.setState(this.disposed ? 'disconnected' : 'failed')
        throw error
      })
      .finally(() => {
        this.connecting = undefined
      })
    return this.connecting
  }
  async dispose(): Promise<void> {
    this.disposed = true
    this.lifecycleAbort.abort()
    this.promptAbort?.abort()
    this.clientGeneration++
    this.cancelConnecting?.(new Error('SSH connection cancelled'))
    this.cancelConnecting = undefined
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = undefined
    }
    this.reconnectAttempt = 0
    for (const waiter of this.execWaiters.splice(0)) {
      if (waiter.abort) waiter.signal?.removeEventListener('abort', waiter.abort)
      waiter.reject(new Error('SSH connection cancelled'))
    }
    const clients = new Set<Client>([
      ...this.transportPool.dispose(),
      ...this.pendingClients,
    ])
    if (this.client) clients.add(this.client)
    this.pendingClients.clear()
    this.client = undefined
    this.files.dispose()
    this.resolvedShell = undefined
    this.cachedPassword = undefined
    this.cachedPassphrases.clear()
    this.acceptedHostFingerprint = undefined
    this.poolGrowthPromptBlocked = false
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/project-registry.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/project-registry.ts (lines 1-220)

<details>
<summary>206 lines</summary>

```
import {
  asHostId,
  basenameHostPath,
  hostPathEquals,
  hostPath,
  localPath,
  type HostPath,
  type ProjectState,
  type RegisteredProjectState,
  type WorktreeDiscovery,
  type WorkspaceActivityResult,
  type WorkspaceActivitySnapshot,
  type WorkspaceState,
} from '../shared'
import type { Disposer, ProjectHost } from './project-host/project-host'
import {
  comparableWorkspaceActivity,
  validActivitySnapshot,
  workspaceActivityChanged,
  workspaceActivitySnapshot,
} from './workspace-activity'

export interface ActiveProject {
  readonly host: ProjectHost
  readonly root: HostPath
  readonly projectId: string
  readonly workspaceId: string
}

/** ProjectRegistry's consumer-owned view of the live host catalog. */
export interface ProjectRegistryHostCatalog {
  readonly local: ProjectHost
  hostById(hostId: string): ProjectHost | undefined
  materializeHost(hostId: string): Promise<ProjectHost>
  onHostStateChange(listener: () => void): Disposer
}

type WorkspaceRecord = WorkspaceState & {
  readonly activityBaseline?: WorkspaceActivitySnapshot
  readonly latestActivity?: WorkspaceActivitySnapshot
}

interface ProjectRecord {
  readonly id: string
  readonly registeredRoot: HostPath
  readonly displayName: string
  activeWorkspaceId: string
  discoveryBaselineEstablished: boolean
  workspaces: WorkspaceRecord[]
}

interface StoredProjectRegistry {
  readonly version: 3
  readonly activeProjectId: string
  readonly projects: readonly {
    readonly hostId: string
    readonly path: string
    readonly displayName: string
    readonly activeWorkspacePath: string
    readonly discoveryBaselineEstablished: boolean
    readonly workspaces: readonly {
      readonly path: string
      readonly head?: string
      readonly branch?: string
      readonly main: boolean
      readonly closed: boolean
      readonly missing: boolean
      readonly prunableReason?: string
      readonly repository: boolean
      readonly changedFiles: number
      readonly newlyDiscovered?: boolean
      readonly activityBaseline?: Omit<WorkspaceActivitySnapshot, 'root'>
    }[]
  }[]
}

const PROJECT_REGISTRY_VERSION = 3
const PREVIOUS_PROJECT_REGISTRY_VERSION = 2
const LEGACY_PROJECT_REGISTRY_VERSION = 1
const MAX_PROJECTS = 100
const MAX_WORKSPACES = 1_000

export class ProjectRegistry {
  private activeProject: ActiveProject
  private pendingWrite: Promise<void> = Promise.resolve()
  private stateRevision = 0
  private readonly stopHostState: Disposer
  private readonly stateListeners = new Set<() => void>()

  private constructor(
    private readonly hostCatalog: ProjectRegistryHostCatalog,
    initialRoot: HostPath,
    private readonly file: HostPath,
    private readonly projects: ProjectRecord[],
    private activeProjectId: string,
    private readonly onState: (state: ProjectState) => void,
  ) {
    const initialProject = projects[0] ?? createProject(initialRoot)
    if (projects.length === 0) projects.push(initialProject)
    const initialWorkspace = initialProject.workspaces[0]!
    this.activeProject = {
      host: hostCatalog.local,
      root: initialWorkspace.root,
      projectId: initialProject.id,
      workspaceId: initialWorkspace.id,
    }
    this.stopHostState = hostCatalog.onHostStateChange(() => this.publishState())
  }

  static async create(
    initialRoot: HostPath,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
  ): Promise<ProjectRegistry>
  static async create(
    initialRoot: HostPath | undefined,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
    selectInitialRoot: () => Promise<HostPath | undefined>,
  ): Promise<ProjectRegistry | undefined>
  static async create(
    initialRoot: HostPath | undefined,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
    selectInitialRoot?: () => Promise<HostPath | undefined>,
  ): Promise<ProjectRegistry | undefined> {
    const local = hostCatalog.local
    const file = localPath(registryFile)
    const stored = await loadProjects(local, file)
    let canonicalRoot = initialRoot ? await local.realpath(initialRoot) : undefined
    if (!canonicalRoot && !stored?.projects.length) {
      const selected = await selectInitialRoot?.()
      if (!selected) return undefined
      canonicalRoot = await local.realpath(selected)
    }
    const projects = stored?.projects.length ? stored.projects : []
    let activeProjectId = stored?.activeProjectId
    if (canonicalRoot) {
      let selectedProject = projects.find(
        (project) =>
          hostPathEquals(project.registeredRoot, canonicalRoot) ||
          project.workspaces.some((workspace) =>
            hostPathEquals(workspace.root, canonicalRoot),
          ),
      )
      if (!selectedProject) {
        if (projects.length >= MAX_PROJECTS) throw new Error('Project registry is full')
        selectedProject = createProject(canonicalRoot)
        projects.push(selectedProject)
      }
      const selectedWorkspace = selectedProject.workspaces.find((workspace) =>
        hostPathEquals(workspace.root, canonicalRoot),
      )
      if (selectedWorkspace && !selectedWorkspace.missing) {
        const selectedIndex = selectedProject.workspaces.indexOf(selectedWorkspace)
        const opened = openWorkspaceRecord(selectedWorkspace)
        selectedProject.workspaces[selectedIndex] = opened
        selectedProject.activeWorkspaceId = opened.id
      }
      activeProjectId = selectedProject.id
    }
    const fallbackRoot = canonicalRoot ?? projects[0]?.registeredRoot
    if (!fallbackRoot || !activeProjectId) return undefined
    const registry = new ProjectRegistry(
      hostCatalog,
      fallbackRoot,
      file,
      projects,
      activeProjectId,
      onState,
    )
    try {
      await registry.restoreActive()
      if (!stored || canonicalRoot) await registry.persist()
      return registry
    } catch (error) {
      await registry.dispose()
      throw error
    }
  }

  get active(): ActiveProject {
    return this.activeProject
  }

  state(): ProjectState {
    const activeHost = this.activeProject.host
    return {
      revision: this.stateRevision,
      root: this.activeProject.root,
      connectionState: activeHost.connectionState,
      watchTier: activeHost.watchTier,
      projects: this.projects.map((project) => this.rendererProject(project)),
      activeProjectId: this.activeProject.projectId,
      activeWorkspaceId: this.activeProject.workspaceId,
    }
  }

  projectById(projectId: string): RegisteredProjectState | undefined {
    const project = this.projects.find((candidate) => candidate.id === projectId)
    return project ? this.rendererProject(project) : undefined
  }

  observe(listener: () => void): Disposer {
    this.stateListeners.add(listener)
    return () => {
      this.stateListeners.delete(listener)
    }
  }

  /** Resolve only exact persisted workspace roots; no live host is required. */
  registeredWorkspaceRoot(candidate: HostPath): HostPath | undefined {
    return this.projects
      .flatMap((project) => project.workspaces)
      .find((workspace) => !workspace.closed && hostPathEquals(workspace.root, candidate))
      ?.root
  }
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/main/workspace-coordinator.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/main/workspace-coordinator.ts (lines 1-220)

<details>
<summary>204 lines</summary>

```
import {
  MAX_PROJECT_WATCH_INTERESTS,
  hostPathEquals,
  type HostPath,
  type IpcEventPayload,
  type ProjectState,
  type ProjectWatchInterestsResponse,
  type RegisteredProjectState,
  type WorkspaceActivityResult,
  type WorktreeDiscovery,
} from '../shared'
import type { ProjectHost } from './project-host'
import type { WorkspaceRemovalPort } from './workspace-removal-coordinator'
import {
  canonicalProjectWatchInterests,
  type ProjectWatchCallbacks,
  type ProjectWatchInterestCache,
  type ProjectWatchTarget,
} from './project-watch'

export interface WorkspaceRegistryPort {
  readonly active: {
    readonly host: ProjectHost
    readonly root: HostPath
    readonly projectId: string
    readonly workspaceId: string
  }
  state(): ProjectState
  projectById(projectId: string): RegisteredProjectState | undefined
  reconcileWorktrees(
    projectId: string,
    discovery: WorktreeDiscovery,
  ): Promise<ProjectState>
  updateWorkspaceActivity(
    projectId: string,
    activity: ReadonlyMap<string, WorkspaceActivityResult>,
  ): Promise<ProjectState>
}

export interface WorkspaceDiscoveryPort {
  discover(root: HostPath): Promise<WorktreeDiscovery>
  workspaceActivity(
    root: HostPath,
    relatedRoots: readonly HostPath[],
  ): Promise<WorkspaceActivityResult>
}

export interface WorkspaceWatchPort {
  readonly target: ProjectWatchTarget
  updateInterests(interests: readonly HostPath[]): void
  dispose(): Promise<void>
}

export interface WorkspaceCoordinatorOptions {
  readonly registry: WorkspaceRegistryPort
  readonly discovery: WorkspaceDiscoveryPort
  readonly removal: WorkspaceRemovalPort
  readonly emitWatch: (event: IpcEventPayload<'project:watch'>) => void
  readonly createWatch: (
    target: ProjectWatchTarget,
    callbacks: ProjectWatchCallbacks,
  ) => WorkspaceWatchPort
  readonly shouldPoll?: () => boolean
  readonly onError?: (message: string, error: unknown) => void
}

type RefreshMode = 'full' | 'passive'

interface RefreshRecord {
  readonly generation: number
  readonly mode: RefreshMode
  readonly promise: Promise<ProjectState>
}

/** Owns watch replacement, refresh deduplication, polling, and transition serialization. */
export class WorkspaceCoordinator {
  private readonly refreshes = new Map<string, RefreshRecord>()
  private readonly inFlightRefreshes = new Set<Promise<ProjectState>>()
  private readonly inFlightRemovals = new Map<string, Set<Promise<void>>>()
  private readonly exclusiveOperations = new Map<string, Promise<ProjectState>>()
  private readonly refreshTimers = new Map<string, ReturnType<typeof setTimeout>>()
  private readonly projectGenerations = new Map<string, number>()
  private readonly suspendedPassiveActivity = new Map<string, Set<string>>()
  private watch?: WorkspaceWatchPort
  private watchGeneration = 0
  private watchInterestCache: ProjectWatchInterestCache = new Map()
  private pollTimer?: ReturnType<typeof setInterval>
  private operationTail: Promise<void> = Promise.resolve()
  private disposed = false

  constructor(private readonly options: WorkspaceCoordinatorOptions) {}

  serialize<T>(operation: () => Promise<T>): Promise<T> {
    const result = this.operationTail.then(operation, operation)
    this.operationTail = result.then(
      () => undefined,
      () => undefined,
    )
    return result
  }

  refresh(projectId: string): Promise<ProjectState> {
    return this.requestRefresh(projectId, 'full')
  }

  private requestRefresh(projectId: string, mode: RefreshMode): Promise<ProjectState> {
    const exclusive = this.exclusiveOperations.get(projectId)
    if (exclusive) return exclusive
    const existing = this.refreshes.get(projectId)
    const generation = this.projectGeneration(projectId)
    if (existing?.generation === generation) {
      if (mode === 'passive' || existing.mode === 'full') return existing.promise
      return this.upgradeRefresh(projectId, existing, generation)
    }
    return this.registerRefresh(projectId, generation, mode, () =>
      this.refreshProject(projectId, generation, mode),
    )
  }

  scheduleRefresh(projectId: string, delayMs = 350): void {
    if (this.disposed) return
    const existing = this.refreshTimers.get(projectId)
    if (existing) clearTimeout(existing)
    this.refreshTimers.set(
      projectId,
      setTimeout(() => {
        this.refreshTimers.delete(projectId)
        void this.refresh(projectId).catch((error) =>
          this.report(`[workspace] watch refresh failed for ${projectId}`, error),
        )
      }, delayMs),
    )
  }

  coalesceProjectOperation(
    projectId: string,
    operation: () => Promise<ProjectState>,
  ): Promise<ProjectState> {
    const existing = this.exclusiveOperations.get(projectId)
    if (existing) return existing
    const result = this.serialize(operation)
    this.exclusiveOperations.set(projectId, result)
    void result.then(
      () => this.releaseExclusive(projectId, result),
      () => this.releaseExclusive(projectId, result),
    )
    return result
  }

  async replaceWatch(target?: ProjectWatchTarget): Promise<void> {
    const generation = ++this.watchGeneration
    this.watchInterestCache.clear()
    const previous = this.watch
    this.watch = undefined
    await previous?.dispose()
    if (
      this.disposed ||
      generation !== this.watchGeneration ||
      !target ||
      target.host.connectionState !== 'connected'
    ) {
      return
    }
    const owner: { controller?: WorkspaceWatchPort } = {}
    const created = this.options.createWatch(target, {
      emit: (event) => {
        if (generation === this.watchGeneration && this.watch === owner.controller) {
          this.options.emitWatch(event)
        }
      },
      refreshGit: () => {
        if (generation === this.watchGeneration && this.watch === owner.controller) {
          this.scheduleRefresh(target.projectId)
        }
      },
      repositoryEnabled: () => {
        if (generation !== this.watchGeneration || this.watch !== owner.controller) {
          return false
        }
        const active = this.options.registry.active
        const workspace = this.options.registry
          .projectById(target.projectId)
          ?.workspaces.find((candidate) => candidate.id === active.workspaceId)
        return workspace?.repository === true
      },
    })
    owner.controller = created
    if (generation === this.watchGeneration && !this.disposed) {
      this.watch = created
    } else {
      await created.dispose()
    }
  }

  stopWatch(): Promise<void> {
    return this.replaceWatch()
  }

  async updateWatchInterests(
    requestedPaths: readonly HostPath[],
  ): Promise<ProjectWatchInterestsResponse> {
    const controller = this.watch
    if (!controller) throw new Error('Project watch is unavailable')
    const generation = this.watchGeneration
    const { host, root } = this.options.registry.active
    if (!hostPathEquals(controller.target.root, root)) {
      throw new Error('Project watch changed while interests were being updated')
    }
    const canonical = await canonicalProjectWatchInterests(
      host,
      root,
      requestedPaths,
      MAX_PROJECT_WATCH_INTERESTS,
      this.watchInterestCache,
    )
    if (
      generation !== this.watchGeneration ||
      this.watch !== controller ||
      !hostPathEquals(this.options.registry.active.root, root)
    ) {
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-pane.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-pane.ts (lines 1-260)

<details>
<summary>237 lines</summary>

```
/**
 * `TerminalPane` — the terminal seam (ADR-003).
 *
 * The terminal is a swappable pane, never the foundation. Everything above this
 * interface is engine-agnostic; the concrete implementation (ghostty-web, then
 * native libghostty) lands in Phase 2. Because ghostty-web is xterm.js-API
 * compatible, this shape stays close to that mental model.
 *
 * Concrete engines implement this interface; the Phase 2 spike uses
 * ghostty-web in `ghostty-terminal-pane.ts`.
 */

import type { Disposer } from '../../../shared'

export interface TerminalSize {
  readonly cols: number
  readonly rows: number
}

export interface TerminalColorTheme {
  readonly background: string
  readonly foreground: string
  readonly cursor: string
  readonly cursorText: string
  readonly selectionBackground: string
  readonly selectionForeground: string
  readonly black: string
  readonly red: string
  readonly green: string
  readonly yellow: string
  readonly blue: string
  readonly magenta: string
  readonly cyan: string
  readonly white: string
  readonly brightBlack: string
  readonly brightRed: string
  readonly brightGreen: string
  readonly brightYellow: string
  readonly brightBlue: string
  readonly brightMagenta: string
  readonly brightCyan: string
  readonly brightWhite: string
}

export interface TerminalTypography {
  readonly fontFamily: string
  readonly fontSize: number
}

export type TerminalCursorShape = 'block' | 'hollow-block' | 'bar' | 'underline'
export type TerminalCursorBlinkPolicy = 'terminal' | 'blinking' | 'steady'

/** Engine-neutral local defaults; parser-owned application requests remain authoritative. */
export interface TerminalCursorDefaults {
  readonly shape: TerminalCursorShape
  readonly blink: TerminalCursorBlinkPolicy
}

export type TerminalPresentation = 'visible' | 'hidden'

/** Why the terminal engine produced bytes for its PTY-facing data channel. */
export type TerminalPaneDataSource = 'user' | 'terminal-response'

export type TerminalEventScreen = 'normal' | 'alternate'

export interface TerminalEventProvenance {
  readonly id: number
  readonly screen: TerminalEventScreen
  readonly row: number
  readonly column: number
}

export interface TerminalEventLocation {
  readonly screen: TerminalEventScreen
  readonly row: number
  readonly column: number
}

export interface TerminalRetainedBufferRange {
  readonly start: Readonly<{ row: number; column: number }>
  readonly end: Readonly<{ row: number; column: number }>
}

/** One immutable, pane-owned native search snapshot. */
export interface TerminalRetainedBufferSearch {
  readonly query: string
  readonly caseSensitive: boolean
  readonly matches: readonly TerminalRetainedBufferRange[]
  /** Reveal a current match without mutating terminal selection. */
  reveal(match: TerminalRetainedBufferRange): boolean
  /** Extract exact plain text, or fail closed for stale/foreign ranges. */
  extract(match: TerminalRetainedBufferRange): string | undefined
  dispose(): void
}

export type TerminalSemanticAction =
  | 'fresh-line'
  | 'fresh-line-new-prompt'
  | 'new-command'
  | 'prompt-start'
  | 'end-prompt-start-input'
  | 'end-prompt-start-input-terminate-eol'
  | 'end-input-start-output'
  | 'end-command'

export type TerminalProgressState = 'remove' | 'set' | 'error' | 'indeterminate' | 'pause'

export type TerminalNotificationSource = 'osc-9' | 'osc-777'

export type TerminalPaletteTarget =
  | { readonly kind: 'palette'; readonly index: number }
  | {
      readonly kind: 'special'
      readonly name: 'bold' | 'underline' | 'blink' | 'reverse' | 'italic'
    }
  | {
      readonly kind: 'dynamic'
      readonly name:
        | 'foreground'
        | 'background'
        | 'cursor'
        | 'pointer-foreground'
        | 'pointer-background'
        | 'tektronix-foreground'
        | 'tektronix-background'
        | 'highlight-background'
        | 'tektronix-cursor'
        | 'highlight-foreground'
    }

export interface TerminalEventColor {
  readonly r: number
  readonly g: number
  readonly b: number
}

export type TerminalPaletteRequest =
  | {
      readonly type: 'set'
      readonly target: TerminalPaletteTarget
      readonly color: TerminalEventColor
    }
  | { readonly type: 'query'; readonly target: TerminalPaletteTarget }
  | { readonly type: 'reset'; readonly target: TerminalPaletteTarget }
  | { readonly type: 'reset-palette' }
  | { readonly type: 'reset-special' }

/** Closed, engine-neutral events produced by the terminal parser/state owner. */
export type TerminalEvent =
  | { readonly type: 'title'; readonly title: string }
  | { readonly type: 'working-directory'; readonly uri: string }
  | { readonly type: 'bell' }
  | {
      readonly type: 'notification'
      readonly source: TerminalNotificationSource
      readonly title: string
      readonly body: string
    }
  | {
      readonly type: 'progress'
      readonly state: TerminalProgressState
      readonly progress?: number
    }
  | {
      readonly type: 'semantic'
      readonly action: TerminalSemanticAction
      readonly options: string
      readonly provenance: TerminalEventProvenance
    }
  | {
      readonly type: 'palette'
      readonly operation: number
      readonly request: TerminalPaletteRequest
    }
  | {
      readonly type: 'clipboard'
      readonly operation: 'read'
      readonly selection: string
    }
  | {
      readonly type: 'clipboard'
      readonly operation: 'write'
      readonly selection: string
      readonly data: string
    }

export type TerminalLinkActivation =
  | { readonly kind: 'file'; readonly target: string }
  | { readonly kind: 'loopback-http'; readonly target: string }

export interface TerminalPaneEvents {
  /** User input or parser-owned protocol replies that must be written to the PTY. */
  onData(cb: (data: string, source: TerminalPaneDataSource) => void): Disposer
  /** Explicit clipboard-paste gesture; policy remains outside the swappable pane. */
  onClipboardPaste(cb: (fallbackData: string) => void): Disposer
  /** Parser-owned terminal semantics; consumers retain all product authority. */
  onEvent(cb: (event: TerminalEvent) => void): Disposer
  /** The pane's own resize (cols/rows), e.g. from a layout change. */
  onResize(cb: (size: TerminalSize) => void): Disposer
  /** A user explicitly activated a typed link rendered by the terminal. */
  onLink(cb: (activation: TerminalLinkActivation) => void): Disposer
}

export interface TerminalPane {
  /** Attach the pane to a DOM container and begin rendering. */
  mount(container: HTMLElement): void
  /** Move the retained render surface without resetting its VT buffer. */
  reparent(container: HTMLElement): void
  /** Tear down, releasing the render surface and all listeners. */
  dispose(): void
  /** Write PTY output into the pane. */
  write(data: string): void
  /** Resize the terminal grid. */
  resize(cols: number, rows: number): void
  /** Update colors without remounting or restarting the PTY. */
  setTheme(theme: TerminalColorTheme): void
  /** Update text presentation; visible panes refit, hidden panes defer until reveal. */
  setTypography(typography: TerminalTypography): void
  /** Update parser defaults without replacing effective application cursor state. */
  setCursorDefaults(defaults: TerminalCursorDefaults): void
  /** Enable or disable compatible text shaping without changing the terminal grid. */
  setLigatures(enabled: boolean): void
  /** Start or stop visible engine work without changing the live terminal state. */
  setPresentation(presentation: TerminalPresentation): void
  /** Force the current grid to repaint without changing PTY geometry. */
  redraw(): void
  /** Resolve retained semantic provenance, or fail closed after eviction/reset. */
  resolveEventProvenance(
    provenance: TerminalEventProvenance,
  ): TerminalEventLocation | undefined
  /** Report the screen whose retained rows are currently presented. */
  activeEventScreen(): TerminalEventScreen
  /** Reveal a retained event on the currently presented screen without selecting text. */
  revealEventLocation(location: TerminalEventLocation): boolean
  /** Search this pane's retained normal buffer through its bounded engine primitive. */
  searchRetainedBuffer(
    query: string,
    options: Readonly<{ caseSensitive: boolean; signal?: AbortSignal }>,
  ): Promise<TerminalRetainedBufferSearch>
  /** Cancel the current query and revoke its ranges. */
  cancelRetainedBufferSearch(): void
  /** Capture an authenticated boundary at the current parser cursor. */
  captureRetainedBufferBoundary(): TerminalEventProvenance | undefined
  /** Extract exact plain text for one authenticated half-open semantic range. */
  extractRetainedBufferRange(
    start: TerminalEventProvenance,
    end: TerminalEventProvenance,
    options?: Readonly<{ signal?: AbortSignal }>,
  ): Promise<string>
  /** Cancel the current exact semantic-range extraction. */
  cancelRetainedBufferExtraction(): void
  /** Report whether this exact pane owns a text selection. */
  hasSelection(): boolean
  /** Read this exact pane's selected plain text without acquiring clipboard authority. */
  getSelection(): string
  /** Paste plain text through the engine's native bracketed-paste behavior. */
  paste(data: string): void
  /** Select all retained text owned by this pane. */
  selectAll(): void
  /** Clear visible cells and retained scrollback without writing to the PTY. */
```

</details>


### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts (lines 1-260)

<details>
<summary>240 lines</summary>

```
import {
  Terminal as GhosttyTerminal,
  init,
  type CursorBlink as GhosttyCursorBlink,
  type CursorStyle as GhosttyCursorStyle,
  type ITheme as GhosttyTheme,
  type IRetainedBufferRange as GhosttyRetainedBufferRange,
  type IRetainedBufferSearchResult as GhosttyRetainedBufferSearchResult,
  type ILink,
  type ILinkProvider,
  type TerminalEventProvenance as GhosttyTerminalEventProvenance,
} from 'ghostty-web'
import ghosttyWasmUrl from 'ghostty-web/ghostty-vt.wasm?url'

import type {
  ComposerSubmitMode,
  Disposer,
  HarnessModifiedKeyProtocol,
} from '../../../shared'
import type {
  TerminalEvent,
  TerminalEventLocation,
  TerminalEventProvenance,
  TerminalEventScreen,
  TerminalPane,
  TerminalPaneDataSource,
  TerminalPaneEvents,
  TerminalPresentation,
  TerminalSize,
  TerminalColorTheme,
  TerminalCursorDefaults,
  TerminalLinkActivation,
  TerminalRetainedBufferRange,
  TerminalRetainedBufferSearch,
  TerminalTypography,
} from './terminal-pane'
import { translateGhosttyTerminalEvent } from './ghostty-terminal-events'
import { terminalColorThemeEquals } from './terminal-palette'
import {
  detectTerminalFileLinks,
  detectTerminalWebLinks,
  isFileUri,
  isTerminalWebTarget,
} from './terminal-file-link'
import { TerminalFitController } from './ghostty-terminal-fit'
import { resolveGhosttyTerminalFilePaste } from './ghostty-terminal-file-paste'
import {
  ghosttyClipboardPasteFallback,
  ghosttyKeyboardOverride,
} from './ghostty-terminal-keyboard'
import { TerminalWheelController } from './terminal-wheel'

let initializeGhostty: Promise<void> | undefined
const TERMINAL_SCROLLBACK_BYTES = 10_000_000

function toGhosttyTheme(theme: TerminalColorTheme): GhosttyTheme {
  return {
    background: theme.background,
    foreground: theme.foreground,
    cursor: theme.cursor,
    cursorAccent: theme.cursorText,
    selectionBackground: theme.selectionBackground,
    selectionForeground: theme.selectionForeground,
    black: theme.black,
    red: theme.red,
    green: theme.green,
    yellow: theme.yellow,
    blue: theme.blue,
    magenta: theme.magenta,
    cyan: theme.cyan,
    white: theme.white,
    brightBlack: theme.brightBlack,
    brightRed: theme.brightRed,
    brightGreen: theme.brightGreen,
    brightYellow: theme.brightYellow,
    brightBlue: theme.brightBlue,
    brightMagenta: theme.brightMagenta,
    brightCyan: theme.brightCyan,
    brightWhite: theme.brightWhite,
  }
}

function toGhosttyCursorStyle(
  shape: TerminalCursorDefaults['shape'],
): GhosttyCursorStyle {
  return shape === 'hollow-block' ? 'block_hollow' : shape
}

function toGhosttyCursorBlink(
  policy: TerminalCursorDefaults['blink'],
): GhosttyCursorBlink {
  if (policy === 'blinking') return true
  if (policy === 'steady') return false
  return 'terminal'
}

export interface GhosttyTerminalPaneOptions {
  readonly cursorDefaults: TerminalCursorDefaults
  readonly ligatures: boolean
  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
  readonly metaEnterAliasesControl: boolean
  readonly composerSubmitMode: ComposerSubmitMode
}

/** Load the shared WASM instance off the first paint, then create a pane. */
export async function createGhosttyTerminalPane(
  theme: TerminalColorTheme,
  typography: TerminalTypography,
  options: GhosttyTerminalPaneOptions,
): Promise<TerminalPane> {
  initializeGhostty ??= init({ wasmUrl: ghosttyWasmUrl })
  await initializeGhostty
  return new GhosttyTerminalPane(theme, typography, options)
}

class ListenerSet<T> {
  private readonly listeners = new Set<(value: T) => void>()

  on(callback: (value: T) => void): Disposer {
    this.listeners.add(callback)
    return () => {
      this.listeners.delete(callback)
    }
  }

  emit(value: T): void {
    for (const callback of this.listeners) callback(value)
  }

  clear(): void {
    this.listeners.clear()
  }
}

class DataListenerSet {
  private readonly listeners = new Set<
    (data: string, source: TerminalPaneDataSource) => void
  >()

  on(callback: (data: string, source: TerminalPaneDataSource) => void): Disposer {
    this.listeners.add(callback)
    return () => {
      this.listeners.delete(callback)
    }
  }

  emit(data: string, source: TerminalPaneDataSource): void {
    for (const callback of this.listeners) callback(data, source)
  }

  clear(): void {
    this.listeners.clear()
  }
}

class GhosttyTerminalPane implements TerminalPane {
  private readonly terminal: GhosttyTerminal
  private readonly fit: TerminalFitController
  private readonly nativeProvenance = new WeakMap<
    TerminalEventProvenance,
    GhosttyTerminalEventProvenance
  >()
  private cursorDefaults: TerminalCursorDefaults
  private ligatures: boolean

  constructor(
    private theme: TerminalColorTheme,
    private typography: TerminalTypography,
    options: GhosttyTerminalPaneOptions,
  ) {
    this.cursorDefaults = options.cursorDefaults
    this.ligatures = options.ligatures
    this.terminal = new GhosttyTerminal({
      allowTransparency: false,
      cursorBlink: toGhosttyCursorBlink(options.cursorDefaults.blink),
      cursorStyle: toGhosttyCursorStyle(options.cursorDefaults.shape),
      fontFamily: typography.fontFamily,
      fontLigatures: options.ligatures,
      fontSize: typography.fontSize,
      scrollbackBytes: TERMINAL_SCROLLBACK_BYTES,
      theme: toGhosttyTheme(theme),
      disableContextMenu: true,
      resolveClipboardFilePaste: (file) =>
        resolveGhosttyTerminalFilePaste(window.hvir, file),
    })
    this.fit = new TerminalFitController(this.terminal)
    this.terminal.attachCustomKeyEventHandler((event) => {
      const pasteFallback = ghosttyClipboardPasteFallback(event)
      if (pasteFallback !== undefined) {
        this.emitClipboardPaste(pasteFallback)
        return true
      }
      const data = ghosttyKeyboardOverride(event, options)
      if (data === undefined) return false
      this.emitData(data, 'user')
      return true
    })
  }

  private readonly dataListeners = new DataListenerSet()
  private readonly clipboardPasteListeners = new ListenerSet<string>()
  private readonly eventListeners = new ListenerSet<TerminalEvent>()
  private readonly resizeListeners = new ListenerSet<TerminalSize>()
  private readonly linkListeners = new ListenerSet<TerminalLinkActivation>()
  private readonly engineDisposers: Array<{ dispose(): void }> = []
  private surface?: HTMLDivElement
  private mounted = false
  private disposed = false
  private presentation: TerminalPresentation = 'visible'
  private readonly wheel = new TerminalWheelController()
  private searchHighlight?: Readonly<{
    owner: object
    range: GhosttyRetainedBufferRange
  }>
  private searchHighlightLayer?: HTMLDivElement
  private hasPresentedFrame = false
  private processingPtyOutput = 0

  readonly events: TerminalPaneEvents = {
    onData: (callback) => this.dataListeners.on(callback),
    onClipboardPaste: (callback) => this.clipboardPasteListeners.on(callback),
    onEvent: (callback) => this.eventListeners.on(callback),
    onResize: (callback) => this.resizeListeners.on(callback),
    onLink: (callback) => this.linkListeners.on(callback),
  }

  mount(container: HTMLElement): void {
    if (this.disposed) throw new Error('Cannot mount a disposed terminal pane')
    if (this.mounted) throw new Error('Terminal pane is already mounted')
    this.mounted = true
    const surface = document.createElement('div')
    surface.className = 'terminal-engine-host'
    // Read-only smoke/capacity telemetry. Keep it on the concrete adapter so
    // the engine-neutral TerminalPane seam does not learn ghostty counters.
    Object.defineProperty(surface, '__hvirTerminalPerformance', {
      configurable: true,
      get: () => ({
        ...this.terminal.getRenderStats(),
        cols: this.terminal.cols,
        rows: this.terminal.rows,
        retainedRows: this.terminal.getScrollbackLength(),
        retainedByteLimit: this.disposed ? 0 : this.terminal.getScrollbackByteLimit(),
        palette: this.theme,
        effectiveColors: this.terminal.wasmTerm?.getColors(),
        fontFamily: this.typography.fontFamily,
        fontSize: this.typography.fontSize,
        fontLigatures: this.ligatures,
      }),
    })
    Object.defineProperty(surface, '__hvirTerminalCursor', {
      configurable: true,
      get: () => ({
        defaults: this.cursorDefaults,
        effective: this.terminal.wasmTerm?.getCursor(),
      }),
    })
    container.append(surface)
    this.surface = surface
    this.terminal.setRenderPaused(true)
    this.engineDisposers.push(
```

</details>


### Copilot

I’ve got the substance; I’m now grabbing line numbers for the claims so the report can be precise and auditable.

### `rg`

**^**

"^" (src/main/index.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/main/index.ts:import { app, BrowserWindow, dialog, shell } from 'electron'
```


### `rg`

**^**

"^" (src/renderer/src/App.tsx)

```
/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx:import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
```


### `rg`

**^export interface ProjectState|^export interface RegisteredProjectState|^export interface WorkspaceState**

"^export interface ProjectState|^export interface RegisteredProjectState|^export interface WorkspaceState" (src/shared/workspace-types.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface ProjectState extends ProjectRootResponse {
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface WorkspaceState {
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface RegisteredProjectState {
```


### `rg`

**^export interface HarnessProviderDescriptor|^export interface HarnessProviderCapabilities|^export interface HarnessProfile**

"^export interface HarnessProviderDescriptor|^export interface HarnessProviderCapabilities|^export interface HarnessProfile" (src/shared/harness-provider.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export interface HarnessProviderCapabilities {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export interface HarnessProviderDescriptor {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export interface HarnessProfileProbe {
```


### `rg`

**^export type HarnessProfileScope|^export interface HarnessProfileInput|^export type HarnessLaunchMode|^export interface HarnessCommandPreview**

"^export type HarnessProfileScope|^export interface HarnessProfileInput|^export type HarnessLaunchMode|^export interface HarnessCommandPreview" (src/shared/harness-profile.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export type HarnessProfileScope =
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessProfileInput {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessCommandPreviewEnvironment {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export type HarnessLaunchMode = 'fresh' | 'resume' | 'fork'
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessCommandPreview {
```


### `rg`

**^export interface SessionsObservationSnapshot|^export interface SessionsWorkspaceProjection|^export interface SessionsObservedSession|^export interface SessionsOpenResponse**

"^export interface SessionsObservationSnapshot|^export interface SessionsWorkspaceProjection|^export interface SessionsObservedSession|^export interface SessionsOpenResponse" (src/shared/sessions-projection.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts:export interface SessionsWorkspaceProjection {
/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts:export interface SessionsObservedSession {
/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts:export interface SessionsObservationSnapshot {
```


### `rg`

**^export interface DocumentReviewModel|^export interface DocumentReviewComment|^export interface DocumentReviewDeliveryDestination|^export type DocumentReviewDeliveryCapability**

"^export interface DocumentReviewModel|^export interface DocumentReviewComment|^export interface DocumentReviewDeliveryDestination|^export type DocumentReviewDeliveryCapability" (src/shared/document-review.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewComment {
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewModel {
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewDeliveryDestination {
```


### `rg`

**^export function composeIpcContracts|^export interface IpcFeatureContract**

"^export function composeIpcContracts|^export interface IpcFeatureContract" (src/shared/ipc-contract.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export interface IpcFeatureContract {
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export function composeIpcContracts<const Features extends readonly IpcFeatureContract[]>(
```


### `rg`

**^appId:|^mac:|^linux:|^pkg:**

"^appId:|^mac:|^linux:|^pkg:" (electron-builder.yml)

```
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:appId: dev.hvir.app
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:mac:
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:pkg:
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:linux:
```


### `rg`

**^extends:|^appId:|^mac:**

"^extends:|^appId:|^mac:" (electron-builder.ssh-acceptance.yml)

```
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:extends: ./electron-builder.yml
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:appId: dev.hvir.ssh-acceptance
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:mac:
```


### `rg`

**"scripts"|"pack:mac:arm64"|"pack:linux:x64"|"pack:linux:arm64"|"ghostty-web"|"node-pty"|"ssh2"**

""scripts"|"pack:mac:arm64"|"pack:linux:x64"|"pack:linux:arm64"|"ghostty-web"|"node-pty"|"ssh2"" (package.json)

<details>
<summary>7 matches</summary>

```
/private/var/tmp/ws/986d17d8/hvir/package.json:  "scripts": {
/private/var/tmp/ws/986d17d8/hvir/package.json:    "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "node-pty": "^1.1.0",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "ssh2": "^1.17.0",
```

</details>


### `rg`

**^(export interface|export type|export const|function createWorkbenchEntry|HtmlPreviewProtocol.registerScheme|async function startup|const registry = await ProjectRegistry.create)**

"^(export interface|export type|export const|function createWorkbenchEntry|HtmlPreviewProtocol.registerScheme|async function startup|const registry = await ProjectRegistry.create)" (src/main/index.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/main/index.ts:HtmlPreviewProtocol.registerScheme()
/private/var/tmp/ws/986d17d8/hvir/src/main/index.ts:function createWorkbenchEntry(): void {
```


### `rg`

**^(export function App|const \[destination|const viewer = useViewerWorkspace|const web = useWebPaneWorkspace|const session = useProjectSession|const git = useGitWorkspace|const terminalWorkspaces = useTerminalWorkspaceRuntime|return \(|if \(!root\)|const renderViewerPane)**

"^(export function App|const \[destination|const viewer = useViewerWorkspace|const web = useWebPaneWorkspace|const session = useProjectSession|const git = useGitWorkspace|const terminalWorkspaces = useTerminalWorkspaceRuntime|return \(|if \(!root\)|const renderViewerPane)" (src/renderer/src/App.tsx)

```
/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx:export function App(): ReactElement {
```


### `rg`

**^(export interface ProjectState|export interface WorkspaceState|export interface RegisteredProjectState|export type WorkspaceStatusActivity|export interface ProjectRootResponse)**

"^(export interface ProjectState|export interface WorkspaceState|export interface RegisteredProjectState|export type WorkspaceStatusActivity|export interface ProjectRootResponse)" (src/shared/workspace-types.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface ProjectRootResponse {
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface ProjectState extends ProjectRootResponse {
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface WorkspaceState {
/private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts:export interface RegisteredProjectState {
```


### `rg`

**^(export interface HarnessProviderCapabilities|export interface HarnessProviderDescriptor|export type HarnessSessionIdentity|export type HarnessContextPresentation|export type HarnessModifiedKeyProtocol)**

"^(export interface HarnessProviderCapabilities|export interface HarnessProviderDescriptor|export type HarnessSessionIdentity|export type HarnessContextPresentation|export type HarnessModifiedKeyProtocol)" (src/shared/harness-provider.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export type HarnessSessionIdentity = 'none' | 'preassigned' | 'discovered'
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export type HarnessContextPresentation = 'none' | 'count' | 'pressure'
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export interface HarnessProviderCapabilities {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export type HarnessModifiedKeyProtocol = 'none' | 'modify-other-keys' | 'csi-u'
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts:export interface HarnessProviderDescriptor {
```


### `rg`

**^(export type HarnessProfileScope|export interface HarnessProfileInput|export interface HarnessProfile|export type HarnessLaunchMode|export interface HarnessCommandPreview)**

"^(export type HarnessProfileScope|export interface HarnessProfileInput|export interface HarnessProfile|export type HarnessLaunchMode|export interface HarnessCommandPreview)" (src/shared/harness-profile.ts)

<details>
<summary>7 matches</summary>

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export type HarnessProfileScope =
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessProfileArgument {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessProfileInput {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessProfile extends HarnessProfileInput {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessCommandPreviewEnvironment {
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export type HarnessLaunchMode = 'fresh' | 'resume' | 'fork'
/private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts:export interface HarnessCommandPreview {
```

</details>


### `rg`

**^(export interface SessionsWorkspaceProjection|export interface SessionsObservedSession|export interface SessionsObservationSnapshot|export interface SessionsOpenResponse|export interface SessionsTerminalResolutionResponse)**

"^(export interface SessionsWorkspaceProjection|export interface SessionsObservedSession|export interface SessionsObservationSnapshot|export interface SessionsOpenResponse|export interface SessionsTerminalResolutionResponse)" (src/shared/sessions-projection.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts:export interface SessionsWorkspaceProjection {
/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts:export interface SessionsObservedSession {
/private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts:export interface SessionsObservationSnapshot {
```


### `rg`

**^(export interface DocumentReviewModel|export interface DocumentReviewComment|export interface DocumentReviewDeliveryDestination|export type DocumentReviewDeliveryCapability|export interface DocumentReviewBatch)**

"^(export interface DocumentReviewModel|export interface DocumentReviewComment|export interface DocumentReviewDeliveryDestination|export type DocumentReviewDeliveryCapability|export interface DocumentReviewBatch)" (src/shared/document-review.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewComment {
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewBatch {
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewModel {
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'
/private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts:export interface DocumentReviewDeliveryDestination {
```


### `rg`

**^(export interface IpcFeatureContract|export function composeIpcContracts|export type InvokeMap|export type SendMap|export type EventMap)**

"^(export interface IpcFeatureContract|export function composeIpcContracts|export type InvokeMap|export type SendMap|export type EventMap)" (src/shared/ipc-contract.ts)

```
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export interface IpcFeatureContract {
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export type InvokeMap<Contract extends IpcFeatureContract> = {
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export type SendMap<Contract extends IpcFeatureContract> = {
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export type EventMap<Contract extends IpcFeatureContract> = {
/private/var/tmp/ws/986d17d8/hvir/src/shared/ipc-contract.ts:export function composeIpcContracts<const Features extends readonly IpcFeatureContract[]>(
```


### `rg`

**^(appId:|productName:|mac:|linux:|pkg:|target:|artifactName:)**

"^(appId:|productName:|mac:|linux:|pkg:|target:|artifactName:)" (electron-builder.yml)

```
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:appId: dev.hvir.app
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:productName: hvir
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:mac:
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:pkg:
/private/var/tmp/ws/986d17d8/hvir/electron-builder.yml:linux:
```


### `rg`

**^(extends:|appId:|productName:|mac:|target:|notarize:)**

"^(extends:|appId:|productName:|mac:|target:|notarize:)" (electron-builder.ssh-acceptance.yml)

```
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:extends: ./electron-builder.yml
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:appId: dev.hvir.ssh-acceptance
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:productName: hvir SSH Acceptance
/private/var/tmp/ws/986d17d8/hvir/electron-builder.ssh-acceptance.yml:mac:
```


### `rg`

**^\s+"(pack:mac:arm64|pack:linux:x64|pack:linux:arm64|build:macos:ssh-acceptance|acceptance:ssh:macos|build|dev|smoke)"|ghostty-web|node-pty|ssh2**

"^\s+"(pack:mac:arm64|pack:linux:x64|pack:linux:arm64|build:macos:ssh-acceptance|acceptance:ssh:macos|build|dev|smoke)"|ghostty-web|node-pty|ssh2" (package.json)

<details>
<summary>14 matches</summary>

```
/private/var/tmp/ws/986d17d8/hvir/package.json:    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "dev": "electron-vite dev",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "build": "npm run typecheck && electron-vite build",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "update:ghostty-web": "node scripts/ghostty-web-update/cli.mts",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "node-pty": "^1.1.0",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "ssh2": "^1.17.0",
/private/var/tmp/ws/986d17d8/hvir/package.json:    "@types/ssh2": "^1.15.6",
```

</details>


### Copilot

I need exact line references, so I’m numbering the key files directly now and then I’ll synthesize the report from those anchors.

### `bash`

**Number main entry lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/main/index.ts | sed -n '1,240p'

<details>
<summary>241 lines</summary>

```
1	import { app, BrowserWindow, dialog, shell } from 'electron'
     2	import { registerIpcHandlers } from './ipc'
     3	import { createProjectCommands } from './ipc/project-commands'
     4	import { GitMutationCoordinator } from './git/mutation-coordinator'
     5	import { GitMutationAuthorization } from './git/mutation-authorization'
     6	import { GitWorkerHostRouter } from './git/worker-host-router'
     7	import { HtmlPreviewProtocol } from './html-preview-protocol'
     8	import { createWorkerClient, workerPath, type WorkerClient } from './worker-host'
     9	import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
    10	import { ProjectFolderPickerCoordinator as FolderPicker } from './project-folder-picker'
    11	import { electronReveal } from './project-host/electron-project-reveal'
    12	import { ProjectRegistry } from './project-registry'
    13	import { ProjectCoordinator } from './project-coordinator'
    14	import { PtySupervisor } from './pty/pty-supervisor'
    15	import { AttentionBadge } from './attention-badge'
    16	import { HarnessProfileStore } from './harness/harness-profile-store'
    17	import { HarnessProbeManager } from './harness/harness-probe'
    18	import { harnessProviders } from './harness/harness-provider'
    19	import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
    20	import { ProjectWatchController } from './project-watch'
    21	import { WorkspaceCoordinator } from './workspace-coordinator'
    22	import { createWorkspaceCleanup } from './workspace-cleanup'
    23	import { WorkspaceRemovalCoordinator } from './workspace-removal-coordinator'
    24	import { TerminalSessionRegistry } from './terminal/session-registry'
    25	import { TerminalWorkspaceMoveCoordinator } from './terminal/terminal-workspace-move-coordinator'
    26	import { installTerminalIdentityPublication } from './terminal/terminal-identity-publication'
    27	import { RendererResourceScopes, type RendererOwner } from './renderer-resource-scopes'
    28	import { createRendererPresentationInstaller } from './renderer-presentation-resources'
    29	import { createElectronWindowManager } from './window/electron-window-manager'
    30	import { WorkbenchRuntime } from './workbench-runtime'
    31	import { RuntimeDiagnostics } from './diagnostics/runtime-diagnostics'
    32	import { createDiagnosticReportCoordinator } from './diagnostics/diagnostic-report-coordinator'
    33	import { RendererEventPublisher } from './renderer-event-publisher'
    34	import { createFilenameSearchCoordinator } from './filename-search'
    35	import { createProjectFileOperationCoordinator } from './project-file-operations'
    36	import type { DocumentReviewRuntime } from './document-review'
    37	import { installApplicationDocumentReviewRuntime } from './document-review/document-review-application'
    38	import { installApplicationSessionsObservation } from './sessions/sessions-observation-application'
    39	import { applicationRuntime, applicationUserDataPath } from './application-runtime'
    40	import {
    41	  GIT_WORKSPACE_ACTIVITY_TYPE,
    42	  GIT_FETCH_TYPE,
    43	  GIT_PRUNE_WORKTREES_TYPE,
    44	  GIT_PULL_TYPE,
    45	  GIT_SWITCH_BRANCH_TYPE,
    46	  GIT_WORKTREES_TYPE,
    47	  localPath,
    48	  type EchoWorkerProtocol,
    49	  type GitWorkerProtocol,
    50	} from '../shared'
    51	HtmlPreviewProtocol.registerScheme()
    52	function createWorkbenchEntry(): void {
    53	  const runtime = new WorkbenchRuntime({
    54	    start: startup,
    55	    suspend: suspendWorkbenchSessions,
    56	    reopen: reopenWorkbench,
    57	    shutdown,
    58	  })
    59	  const htmlPreviews = runtime.own(
    60	    'HTML preview protocol',
    61	    new HtmlPreviewProtocol(),
    62	    (previews) => previews.dispose(),
    63	  )
    64	  const harnessProbeManager = runtime.own(
    65	    'harness probe manager',
    66	    new HarnessProbeManager(),
    67	    (probes) => probes.dispose(),
    68	  )
    69	  const rendererScopes = runtime.own(
    70	    'renderer resource scopes',
    71	    new RendererResourceScopes(),
    72	    (scopes) => scopes.dispose(),
    73	  )
    74	  const rendererEvents = new RendererEventPublisher(rendererScopes)
    75	  const diagnostics = RuntimeDiagnostics.create(
    76	    applicationRuntime.userDataRoot,
    77	    app.isPackaged || __HVIR_SMOKE_BUILD__,
    78	    (state) => rendererEvents.toWindows('workbench-health:state', state),
    79	  )
    80	  const diagnosticReports = runtime.own(
    81	    'Diagnostic reports',
    82	    createDiagnosticReportCoordinator(diagnostics, rendererScopes, applicationRuntime),
    83	    (reports) => reports.dispose(),
    84	  )
    85	  const diagnosticIpc = { reports: diagnosticReports, evidence: diagnostics }
    86	  diagnostics.recordApplication('application-starting')
    87	  const gitMutationAuthorizations = runtime.own(
    88	    'Git mutation authorizations',
    89	    new GitMutationAuthorization(),
    90	    (authorizations) => authorizations.dispose(),
    91	  )
    92	  let echoWorker: WorkerClient<EchoWorkerProtocol> | null = null
    93	  let gitWorker: WorkerClient<GitWorkerProtocol> | null = null
    94	  let projectRegistry: ProjectRegistry | null = null
    95	  let sshPrompter: RendererSshPrompter | null = null
    96	  let ptySupervisor: PtySupervisor | null = null
    97	  let terminalSessionRegistry: TerminalSessionRegistry | null = null
    98	  let harnessProfileStore: HarnessProfileStore | null = null
    99	  let documentReview: DocumentReviewRuntime | null = null
   100	  let attentionBadge: AttentionBadge | null = null
   101	  let workspaceCoordinator: WorkspaceCoordinator | null = null
   102	  let hostCatalog: ProjectHostCatalog | null = null
   103	  const installRendererPresentation = createRendererPresentationInstaller({
   104	    scopes: rendererScopes,
   105	    reports: diagnosticReports,
   106	    attention: () => attentionBadge,
   107	    sshPrompter: () => sshPrompter,
   108	  })
   109	  const windowManager = runtime.own(
   110	    'Electron window manager',
   111	    createElectronWindowManager({
   112	      htmlPreviews,
   113	      activateRenderer: (ownerId) =>
   114	        installRendererPresentation(rendererScopes.activateOwner(ownerId)),
   115	      rolloverRenderer: (owner) => {
   116	        diagnostics.revokeRenderer(owner)
   117	        const transition = rendererScopes.rolloverOwner(owner.id)
   118	        void transition.cleanup.catch((error) =>
   119	          console.error('[renderer] generation cleanup failed', error),
   120	        )
   121	        return installRendererPresentation(transition.owner)
   122	      },
   123	      revokeRenderer: (owner) => {
   124	        diagnostics.closeRenderer(owner)
   125	        void rendererScopes
   126	          .revokeOwner(owner.id)
   127	          .catch((error) => console.error('[renderer] owner cleanup failed', error))
   128	      },
   129	      isRendererCurrent: (owner) => rendererScopes.isCurrent(owner),
   130	      resumeRendererIpc: (owner) => rendererScopes.resumeOwnerIpc(owner),
   131	      setOwnerFocused: (owner, focused) =>
   132	        attentionBadge?.setFocused(owner.id, focused, owner.generation),
   133	      startRendererDiagnostics: (owner) => diagnostics.startRenderer(owner),
   134	      rendererReady: (owner) => diagnostics.rendererReady(owner),
   135	      recordWindowHealth: (event) => diagnostics.recordWindowHealth(event),
   136	      onLastWindowClosed: () => {
   137	        void runtime
   138	          .suspend()
   139	          .catch((error) =>
   140	            console.error('[session] cleanup after window close failed', error),
   141	          )
   142	      },
   143	      isShuttingDown: () => runtime.isShuttingDown,
   144	    }),
   145	    (manager) => manager.dispose(),
   146	  )
   147	  const { routes: webPaneRoutes, createWindow } = windowManager
   148	  async function startup(): Promise<void> {
   149	    htmlPreviews.register()
   150	    const emit = rendererEvents.toWindows
   151	    sshPrompter = runtime.own(
   152	      'SSH prompter',
   153	      new RendererSshPrompter(
   154	        (owner, prompt) => rendererEvents.toRenderer(owner, 'ssh:prompt', prompt),
   155	        (owner, hostId) =>
   156	          rendererEvents.toRenderer(owner, 'ssh:prompt-cancel', { hostId }),
   157	      ),
   158	      (prompter) => prompter.cancelAll(),
   159	    )
   160	    hostCatalog = runtime.own(
   161	      'project host catalog',
   162	      await ProjectHostCatalog.create({
   163	        prompter: sshPrompter,
   164	        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
   165	        trashItem: electronTrash(shell),
   166	      }),
   167	      (catalog) => catalog.dispose(),
   168	    )
   169	    const requestedProjectRoot = projectRootArgument()
   170	    const registry = await ProjectRegistry.create(
   171	      requestedProjectRoot ? localPath(requestedProjectRoot) : undefined,
   172	      hostCatalog,
   173	      applicationUserDataPath('projects.json'),
   174	      (state) => emit('project:state', state),
   175	      async () => {
   176	        const selection = await dialog.showOpenDialog({
   177	          title: 'Choose a folder for hvir',
   178	          defaultPath: process.cwd(),
   179	          properties: ['openDirectory'],
   180	        })
   181	        return selection.canceled || !selection.filePaths[0]
   182	          ? undefined
   183	          : localPath(selection.filePaths[0])
   184	      },
   185	    )
   186	    if (!registry) return app.quit()
   187	    projectRegistry = runtime.own('project registry', registry, (item) => item.dispose())
   188	    terminalSessionRegistry = runtime.own(
   189	      'terminal session registry',
   190	      await TerminalSessionRegistry.load(
   191	        hostCatalog.local,
   192	        localPath(applicationUserDataPath('terminal-sessions.json')),
   193	        (event) => diagnostics.recordSessionRegistry(event),
   194	      ),
   195	      (sessions) => sessions.flush(),
   196	    )
   197	    harnessProfileStore = runtime.own(
   198	      'harness profile store',
   199	      await HarnessProfileStore.load(
   200	        hostCatalog.local,
   201	        localPath(applicationUserDataPath('harness-profiles.json')),
   202	      ),
   203	      (profiles) => profiles.flush(),
   204	    )
   205	    await harnessProfileStore
   206	      .importLegacyDefaults(terminalSessionRegistry.profileReferences())
   207	      .catch((error) =>
   208	        console.warn('[harness] legacy recovery profile import failed', error),
   209	      )
   210	    echoWorker = runtime.own(
   211	      'echo worker',
   212	      createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
   213	      (worker) => worker.dispose(),
   214	    )
   215	    const gitHostRouter = new GitWorkerHostRouter({
   216	      authority: projectRegistry,
   217	      authorizations: gitMutationAuthorizations,
   218	    })
   219	    gitWorker = runtime.own(
   220	      'Git worker',
   221	      createWorkerClient<GitWorkerProtocol>(
   222	        workerPath('git-worker.js'),
   223	        'hvir-git',
   224	        (call) => gitHostRouter.route(call),
   225	      ),
   226	      (worker) => worker.dispose(),
   227	    )
   228	    const filenameSearch = runtime.own(
   229	      'filename search',
   230	      createFilenameSearchCoordinator(gitWorker),
   231	      (search) => search.dispose(),
   232	    )
   233	    const projectFiles = runtime.own(
   234	      'project file operations',
   235	      createProjectFileOperationCoordinator(registry, hostCatalog, rendererScopes),
   236	      (operations) => operations.dispose(),
   237	    )
   238	    ptySupervisor = runtime.own(
   239	      'PTY supervisor',
   240	      new PtySupervisor({
<shellId: 11 completed with exit code 0>
```

</details>


### `bash`

**Number app lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx | sed -n '1,260p'

<details>
<summary>261 lines</summary>

```
1	import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
     2	import {
     3	  GIT_CHANGE_DISPLAY_LIMIT,
     4	  hostPathEquals,
     5	  type GitChanges,
     6	  type HostPath,
     7	  type ProjectState,
     8	} from '../../shared'
     9	import { PaneResizer } from './layout/PaneResizer'
    10	import type { WebViewState } from './dashboards/WebPane'
    11	import { WebPaneStack } from './dashboards/WebPaneStack'
    12	import { useWebPaneWorkspace } from './dashboards/use-web-pane-workspace'
    13	import { TerminalWorkspaceCollection } from './terminal/TerminalWorkspaceCollection'
    14	import { useTerminalWorkspaceRuntime } from './terminal/use-terminal-workspace-runtime'
    15	import { useTerminalAttention } from './terminal/use-terminal-attention'
    16	import { ProjectsBar } from './workspaces/ProjectsBar'
    17	import { MissingWorkspaceNotice } from './workspaces/MissingWorkspaceNotice'
    18	import { useProjectSession } from './workspaces/project-session'
    19	import { useProjectWatchInterests } from './workspaces/project-watch-interests'
    20	import { SessionDialog } from './workspaces/SessionDialog'
    21	import { SshPromptDialog } from './workspaces/SshPromptDialog'
    22	import { FileTree } from './tree/FileTree'
    23	import { isGitIgnoreRulePath } from './tree/git-ignore-refresh'
    24	import { GitPanel } from './git/GitPanel'
    25	import { workspaceGitEnabled } from './git/git-capability'
    26	import { GitGraphView } from './git/GitGraphView'
    27	import { useGitWorkspace } from './git/use-git-workspace'
    28	import { FileViewer } from './viewer/FileViewer'
    29	import { TabStrip } from './viewer/TabStrip'
    30	import { useViewerWorkspace } from './viewer/use-viewer-workspace'
    31	import { setAppTheme, useAppTheme } from './theme'
    32	import { SettingsDialog } from './settings/SettingsDialog'
    33	import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
    34	import { useWorkbenchCommands } from './workbench/use-workbench-commands'
    35	import { focusVisibleActiveTerminalAfterLayout } from './workbench/active-terminal-focus'
    36	import { useWorkbenchLayout } from './workbench/use-workbench-layout'
    37	import { useWorkbenchOverlays } from './workbench/use-workbench-overlays'
    38	import { TerminalLayoutControls } from './workbench/TerminalLayoutControls'
    39	import { useRendererReady } from './workbench/use-renderer-ready'
    40	import { useTerminalPathActivation } from './workbench/use-terminal-path-activation'
    41	import * as review from './document-review/use-document-review-workspace'
    42	import { SessionsApplicationDestination } from './sessions/SessionsApplicationDestination'
    43	export function App(): ReactElement {
    44	  const [destination, setDestination] = useState<'workspace' | 'sessions'>('workspace')
    45	  const theme = useAppTheme()
    46	  const settings = useAppSettings()
    47	  const rootRef = useRef<HostPath | undefined>(undefined)
    48	  const workspaceSwitchRef = useRef<(direction: -1 | 1) => void>(() => undefined)
    49	  const sessionErrorRef = useRef<(message: string) => void>(() => undefined)
    50	  const restoreViewerRef = useRef<() => void>(() => undefined)
    51	  const resetGitGraphRef = useRef<() => void>(() => undefined)
    52	  const deactivateGitGraphRef = useRef<() => void>(() => undefined)
    53	  const deactivateWebPaneRef = useRef<() => void>(() => undefined)
    54	  const [gitChanges, setGitChanges] = useState<GitChanges>()
    55	  const overlays = useWorkbenchOverlays()
    56	  const terminalAttention = useTerminalAttention()
    57	  const viewer = useViewerWorkspace({
    58	    onActivateFile: () => {
    59	      deactivateGitGraphRef.current()
    60	      deactivateWebPaneRef.current()
    61	      restoreViewerRef.current()
    62	    },
    63	  })
    64	  const {
    65	    tabs,
    66	    activeTab,
    67	    primaryTabs,
    68	    secondaryTabs,
    69	    primaryActiveTab,
    70	    secondaryActiveTab,
    71	    split: viewerSplit,
    72	    switchWorkspace: switchViewerWorkspace,
    73	    openFile,
    74	    activateTab,
    75	    closeTab,
    76	    pinTab,
    77	    setMode: setViewerMode,
    78	    cycleActiveMode,
    79	    viewerCommands,
    80	    setDiffBase: setViewerDiffBase,
    81	    setContent: setViewerContent,
    82	    navigationHandled,
    83	    schedulePosition,
    84	    reloadTab,
    85	    saveTab,
    86	    handleWatchEvent,
    87	    reloadCleanFiles,
    88	    focusPane: focusViewerPane,
    89	    getActivePane,
    90	    openSplit: openViewerSplit,
    91	    closeSplit: closeViewerSplit,
    92	    moveTab: moveTabToPane,
    93	    reorderTabs: reorderViewerTabs,
    94	  } = viewer
    95	  const reviewWatch = review.useWatchFanout(handleWatchEvent)
    96	  const web = useWebPaneWorkspace({
    97	    onActivate: () => {
    98	      focusViewerPane('primary')
    99	      deactivateGitGraphRef.current()
   100	      restoreViewerRef.current()
   101	    },
   102	    onError: (message) => sessionErrorRef.current(message),
   103	  })
   104	  const {
   105	    views: webViews,
   106	    activeId: activeWebViewId,
   107	    active: webViewActive,
   108	    activeRef: webViewActiveRef,
   109	    focused: webViewFocused,
   110	    setFocused: setWebViewFocused,
   111	    setActive: setWebViewActive,
   112	    applyProjectState: applyWebProjectState,
   113	    setWorkspaceRoot: setWebWorkspaceRoot,
   114	    openLink: openWebLink,
   115	    activateView: activateWebView,
   116	    closeView: closeWebView,
   117	    forgetTerminalViews,
   118	    followBlockedNavigation,
   119	    setTitle: setWebViewTitle,
   120	    openBrowser: openWebViewInBrowser,
   121	  } = web
   122	  const changedCount = gitChanges?.workingTree.length ?? 0
   123	  const changedCountLabel = gitChanges?.workingTreeLimited
   124	    ? `${GIT_CHANGE_DISPLAY_LIMIT.toLocaleString()}+`
   125	    : changedCount.toLocaleString()
   126	  const applyProjectViewState = useCallback(
   127	    (state: ProjectState): void => {
   128	      switchViewerWorkspace(state.root, state.connectionState === 'connected')
   129	      if (!applyWebProjectState(state, rootRef.current)) return
   130	      resetGitGraphRef.current()
   131	      setGitChanges(undefined)
   132	    },
   133	    [applyWebProjectState, switchViewerWorkspace],
   134	  )
   135	  const session = useProjectSession({
   136	    composerSubmitMode: settings.composerSubmitMode,
   137	    onProjectState: applyProjectViewState,
   138	    onReloadFiles: reloadCleanFiles,
   139	    onWatchEvent: reviewWatch.handle,
   140	    isIgnoreRulePath: isGitIgnoreRulePath,
   141	  })
   142	  const accept = session.acceptProjectState
   143	  const {
   144	    projectState,
   145	    root,
   146	    activeWorkspace,
   147	    connectionState,
   148	    rootError,
   149	    refreshHosts,
   150	  } = session
   151	  const documentReview = review.useReviewWorkspace(activeWorkspace, reviewWatch)
   152	  const { watch: watchVersion, ignored: ignoredRefreshVersion } = session.versions
   153	  const { content: contentVersion, git: gitVersion } = session.versions
   154	  useRendererReady(Boolean(root))
   155	  const watchInterests = useProjectWatchInterests({
   156	    root,
   157	    connected: connectionState === 'connected',
   158	    missing: activeWorkspace?.missing,
   159	    openPaths: viewer.openWatchPaths,
   160	    reviewPaths: documentReview.watchPaths,
   161	    dependencyPaths: viewer.renderedWatchPaths,
   162	  })
   163	  const gitEnabled = workspaceGitEnabled(activeWorkspace)
   164	  const terminalWorkspaces = useTerminalWorkspaceRuntime({
   165	    projectState,
   166	    acceptProjectState: session.acceptProjectState,
   167	    forgetWebViews: forgetTerminalViews,
   168	    acknowledgeWorkspaces: session.acknowledgeWorkspaces,
   169	    onError: session.reportError,
   170	  })
   171	  const layout = useWorkbenchLayout({
   172	    root,
   173	    gitAvailable: gitEnabled,
   174	    workspaceMissing: Boolean(activeWorkspace?.missing),
   175	  })
   176	  const {
   177	    workbenchRef,
   178	    viewerGroupsRef,
   179	    railMode,
   180	    setRailMode,
   181	    terminalMode,
   182	    setTerminalMode,
   183	    toggleTerminalFocus,
   184	    restoreViewer,
   185	    treeCollapsed,
   186	    setTreeCollapsed,
   187	    setTreeWidth,
   188	    setTerminalHeight,
   189	    setViewerPrimaryWidth,
   190	    resetViewerPrimaryWidth,
   191	    focusTerminal: showTerminal,
   192	  } = layout
   193	  const git = useGitWorkspace({
   194	    root,
   195	    hasDirtyViewerTabs: () => tabs.some((tab) => tab.dirty),
   196	    acceptProjectState: session.acceptProjectState,
   197	    refreshContent: session.refreshWorkspaceContent,
   198	    refreshGit: session.refreshGit,
   199	    activateViewer: () => {
   200	      focusViewerPane('primary')
   201	      restoreViewer()
   202	    },
   203	    deactivateWebPane: () => setWebViewActive(false),
   204	  })
   205	  const {
   206	    graphOpen: gitGraphOpen,
   207	    graphActive: gitGraphActive,
   208	    graphActiveRef: gitGraphActiveRef,
   209	    graphRequest: gitGraphRequest,
   210	    openGraph: openGitGraph,
   211	    activateGraph: activateGitGraph,
   212	    closeGraph: closeGitGraph,
   213	    resetGraph: resetGitGraph,
   214	    deactivateGraph: deactivateGitGraph,
   215	    switchBranch: switchGitBranch,
   216	    fetch: fetchGit,
   217	    pull: pullGit,
   218	  } = git
   219	  const terminalPathActivation = useTerminalPathActivation({
   220	    root,
   221	    selectedFile: activeTab?.path,
   222	    openFile: (path, position) =>
   223	      openFile(path, true, 'file-tree', 'head', undefined, position),
   224	    revealDirectory: layout.focusTree,
   225	  })
   226	  rootRef.current = root
   227	  sessionErrorRef.current = session.reportError
   228	  workspaceSwitchRef.current = session.switchRelativeWorkspace
   229	  restoreViewerRef.current = restoreViewer
   230	  resetGitGraphRef.current = resetGitGraph
   231	  deactivateGitGraphRef.current = deactivateGitGraph
   232	  deactivateWebPaneRef.current = () => setWebViewActive(false)
   233	  useEffect(() => {
   234	    if (overlays.projectPickerOpen) void refreshHosts()
   235	  }, [overlays.projectPickerOpen, refreshHosts])
   236	  useEffect(() => {
   237	    if (root) setWebWorkspaceRoot(root)
   238	  }, [root, setWebWorkspaceRoot])
   239	  useEffect(() => {
   240	    if (activeWorkspace?.missing) resetGitGraph()
   241	  }, [activeWorkspace?.missing, resetGitGraph])
   242	  useWorkbenchCommands(settings.keybindings, {
   243	    enabled: destination === 'workspace',
   244	    closeWebPane: closeWebView,
   245	    escapeWebPaneFocus: () => setWebViewFocused(false),
   246	    canUseViewerCommands: () => !gitGraphActiveRef.current && !webViewActiveRef.current,
   247	    cycleViewMode: cycleActiveMode,
   248	    findFile: layout.focusFilenameSearch,
   249	    findInFile: viewerCommands.findInFile,
   250	    findInTerminal: terminalWorkspaces.openTerminalSearch,
   251	    goToLine: viewerCommands.goToLine,
   252	    toggleTerminalFocus,
   253	    focusTerminal: layout.focusTerminal,
   254	    focusViewer: () => layout.focusViewer(getActivePane()),
   255	    focusTree: layout.focusTree,
   256	    switchWorkspace: (direction) => {
   257	      setDestination('workspace')
   258	      workspaceSwitchRef.current(direction)
   259	    },
   260	  })
<shellId: 12 completed with exit code 0>
```

</details>


### `bash`

**Number workspace types lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/shared/workspace-types.ts | sed -n '1,220p'

<details>
<summary>91 lines</summary>

```
1	import type { HostConnectionState, HostWatchTier } from './fs-types'
     2	import type { HostPath } from './host-path'
     3	
     4	export interface ProjectRootResponse {
     5	  readonly root: HostPath
     6	}
     7	
     8	export interface ProjectState extends ProjectRootResponse {
     9	  /** Main-owned identity for ordering and deduplicating authoritative state. */
    10	  readonly revision: number
    11	  readonly connectionState: HostConnectionState
    12	  readonly watchTier: HostWatchTier
    13	  readonly projects: readonly RegisteredProjectState[]
    14	  readonly activeProjectId: string
    15	  readonly activeWorkspaceId: string
    16	}
    17	
    18	export const WORKSPACE_ACTIVITY_SCHEMA = 1
    19	export const WORKSPACE_ACTIVITY_STATUS_LIMIT = 2_000
    20	export const WORKSPACE_ACTIVITY_FIELDS = 'head-branch-porcelain-v2-path-state' as const
    21	
    22	/** Bounded result of the existing per-worktree porcelain status invocation. */
    23	export interface WorkspaceStatusActivity {
    24	  readonly schema: typeof WORKSPACE_ACTIVITY_SCHEMA
    25	  readonly fields: typeof WORKSPACE_ACTIVITY_FIELDS
    26	  readonly statusLimit: typeof WORKSPACE_ACTIVITY_STATUS_LIMIT
    27	  readonly statusEntryCount: number
    28	  readonly statusTruncated: boolean
    29	  readonly statusDigest: string
    30	}
    31	
    32	/** Host-qualified comparison state retained only for a closed workspace. */
    33	export interface WorkspaceActivitySnapshot extends WorkspaceStatusActivity {
    34	  readonly root: HostPath
    35	  readonly head?: string
    36	  readonly branch?: string
    37	}
    38	
    39	export interface WorkspaceActivityResult {
    40	  readonly changedFiles: number
    41	  /** Omitted when the root is no longer a Git repository. */
    42	  readonly status?: WorkspaceStatusActivity
    43	}
    44	
    45	/** One checkout reported by `git worktree list`, or the root of a plain directory. */
    46	export interface DiscoveredWorktree {
    47	  readonly root: HostPath
    48	  readonly head?: string
    49	  readonly branch?: string
    50	  readonly detached: boolean
    51	  readonly bare: boolean
    52	  readonly prunable?: boolean
    53	  /** Git's porcelain explanation for why its administrative record is stale. */
    54	  readonly prunableReason?: string
    55	}
    56	
    57	export interface WorktreeDiscovery {
    58	  readonly repository: boolean
    59	  readonly worktrees: readonly DiscoveredWorktree[]
    60	}
    61	
    62	/** Renderer-facing persisted workspace record. Missing records await lifecycle cleanup. */
    63	export interface WorkspaceState {
    64	  readonly id: string
    65	  readonly root: HostPath
    66	  readonly name: string
    67	  readonly head?: string
    68	  readonly branch?: string
    69	  readonly main: boolean
    70	  /** Closed workspaces stay in the catalog but own no renderer workspace runtime. */
    71	  readonly closed: boolean
    72	  readonly missing: boolean
    73	  /** Present only when Git still lists this missing workspace as prunable. */
    74	  readonly prunableReason?: string
    75	  readonly repository: boolean
    76	  readonly changedFiles: number
    77	  /** Successful discovery found this worktree after the project's baseline. */
    78	  readonly newlyDiscovered?: boolean
    79	}
    80	
    81	/** A registered project owns discovered worktree workspaces. */
    82	export interface RegisteredProjectState {
    83	  readonly id: string
    84	  readonly registeredRoot: HostPath
    85	  readonly displayName: string
    86	  readonly connectionState: HostConnectionState
    87	  readonly watchTier: HostWatchTier
    88	  readonly activeWorkspaceId: string
    89	  readonly workspaces: readonly WorkspaceState[]
    90	}
<shellId: 13 completed with exit code 0>
```

</details>


### `bash`

**Number harness provider lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/shared/harness-provider.ts | sed -n '1,220p'

<details>
<summary>99 lines</summary>

```
1	/** Serializable harness-provider vocabulary shared across the main/renderer boundary. */
     2	
     3	const PROVIDER_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/
     4	
     5	declare const harnessProviderIdBrand: unique symbol
     6	
     7	/** Opaque persisted identifier. Provider behavior remains owned by main. */
     8	export type HarnessProviderId = string & {
     9	  readonly [harnessProviderIdBrand]: 'HarnessProviderId'
    10	}
    11	
    12	export type HarnessSessionIdentity = 'none' | 'preassigned' | 'discovered'
    13	
    14	export type HarnessContextPresentation = 'none' | 'count' | 'pressure'
    15	
    16	export interface HarnessContextPressurePolicy {
    17	  /** Provider-owned fallback used only when telemetry has no reported window. */
    18	  readonly assumedWindowTokens?: number
    19	  readonly warningPercent: number
    20	  readonly criticalPercent: number
    21	}
    22	
    23	export interface HarnessProviderCapabilities {
    24	  readonly sessionIdentity: HarnessSessionIdentity
    25	  readonly exactResume: boolean
    26	  /** Present only when the probed provider version supports an exact native fork. */
    27	  readonly exactFork?: true
    28	  readonly contextPresentation: HarnessContextPresentation
    29	  readonly contextPressure?: HarnessContextPressurePolicy
    30	  /** Trusted effective launch contract; absent means document review is Copy-only. */
    31	  readonly reviewInsertContractRevision?: number
    32	  /** Exact provider/profile submit contract; absent keeps review delivery Insert-only. */
    33	  readonly reviewSendNowContractRevision?: number
    34	}
    35	
    36	export type HarnessModifiedKeyProtocol = 'none' | 'modify-other-keys' | 'csi-u'
    37	
    38	export interface HarnessTerminalInputCapabilities {
    39	  /** Wire format used by the foreground TUI for otherwise ambiguous modified keys. */
    40	  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
    41	  /** Whether hvir should encode Meta+Enter as Control+Enter in intentional-submit mode. */
    42	  readonly metaEnterAliasesControl: boolean
    43	}
    44	
    45	/** Bounded data-only description safe to expose to the renderer. */
    46	export interface HarnessProviderDescriptor {
    47	  readonly id: HarnessProviderId
    48	  readonly displayName: string
    49	  readonly default: boolean
    50	  /** The bundled provider has an exact fork contract; a probe still decides version support. */
    51	  readonly exactForkLaunch?: true
    52	  readonly capabilities: HarnessProviderCapabilities
    53	  readonly terminalInput: HarnessTerminalInputCapabilities
    54	  /** Data-only suggestion; catalog membership never materializes a launch profile. */
    55	  readonly profileTemplate?: {
    56	    readonly displayName: string
    57	    readonly description: string
    58	  }
    59	  readonly profileGuidance: {
    60	    readonly reservedArguments: readonly string[]
    61	  }
    62	}
    63	
    64	export type HarnessProbeStatus =
    65	  | 'unchecked'
    66	  | 'available'
    67	  | 'executable-missing'
    68	  | 'version-unsupported'
    69	  | 'capability-absent'
    70	  | 'authentication-required'
    71	  | 'disconnected'
    72	  | 'timeout'
    73	  | 'malformed-output'
    74	  | 'probe-failed'
    75	
    76	export interface HarnessProfileProbe {
    77	  readonly providerId: HarnessProviderId
    78	  readonly profileId: import('./harness-profile').HarnessProfileId
    79	  readonly launchRevision: number
    80	  readonly hostId: import('./host-path').HostId
    81	  readonly status: HarnessProbeStatus
    82	  readonly checkedAt?: number
    83	  readonly expiresAt?: number
    84	  readonly version?: string
    85	  readonly detail?: string
    86	  readonly capabilities: HarnessProviderCapabilities
    87	}
    88	
    89	export function isHarnessProviderId(value: unknown): value is HarnessProviderId {
    90	  return typeof value === 'string' && PROVIDER_ID.test(value)
    91	}
    92	
    93	export function asHarnessProviderId(value: string): HarnessProviderId {
    94	  if (!isHarnessProviderId(value)) {
    95	    throw new Error(`Invalid harness provider id '${value}'`)
    96	  }
    97	  return value
    98	}
<shellId: 14 completed with exit code 0>
```

</details>


### `bash`

**Number harness profile lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/shared/harness-profile.ts | sed -n '1,220p'

<details>
<summary>121 lines</summary>

```
1	import type { HarnessProviderId } from './harness-provider'
     2	import type { HostPath } from './host-path'
     3	
     4	const PROFILE_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/
     5	const BINDING_NAME = /^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/
     6	const ENVIRONMENT_NAME = /^[a-zA-Z_][a-zA-Z0-9_]{0,127}$/
     7	
     8	declare const harnessProfileIdBrand: unique symbol
     9	
    10	export type HarnessProfileId = string & {
    11	  readonly [harnessProfileIdBrand]: 'HarnessProfileId'
    12	}
    13	
    14	export type HarnessProfileScope =
    15	  | { readonly kind: 'global' }
    16	  | { readonly kind: 'project'; readonly projectRoot: HostPath }
    17	
    18	export type HarnessProfileExecutable =
    19	  | { readonly kind: 'provider-default' }
    20	  | { readonly kind: 'command'; readonly command: string }
    21	  | { readonly kind: 'path'; readonly path: HostPath; readonly grantId?: string }
    22	
    23	export type HarnessArgumentPart =
    24	  | { readonly kind: 'literal'; readonly value: string }
    25	  | {
    26	      readonly kind: 'path'
    27	      readonly source: 'projectRoot' | 'workspaceRoot' | 'binding'
    28	      readonly binding?: string
    29	    }
    30	
    31	export interface HarnessProfileArgument {
    32	  readonly parts: readonly HarnessArgumentPart[]
    33	}
    34	
    35	export type HarnessEnvironmentBinding =
    36	  | {
    37	      readonly kind: 'literal'
    38	      readonly name: string
    39	      readonly value: string
    40	    }
    41	  | {
    42	      readonly kind: 'reference'
    43	      readonly name: string
    44	      readonly source: 'host' | 'local-forward'
    45	      readonly sourceName: string
    46	    }
    47	  | { readonly kind: 'unset'; readonly name: string }
    48	
    49	export interface HarnessPathBinding {
    50	  readonly name: string
    51	  readonly path: HostPath
    52	  /** Main-issued authorization for paths outside the registered project. */
    53	  readonly grantId?: string
    54	}
    55	
    56	export interface HarnessPathGrant {
    57	  readonly id: string
    58	  readonly path: HostPath
    59	}
    60	
    61	export interface HarnessProfileInput {
    62	  readonly displayName: string
    63	  readonly description?: string
    64	  readonly providerId: HarnessProviderId
    65	  readonly scope: HarnessProfileScope
    66	  readonly executable: HarnessProfileExecutable
    67	  readonly args: readonly HarnessProfileArgument[]
    68	  readonly environment: readonly HarnessEnvironmentBinding[]
    69	  readonly pathBindings: readonly HarnessPathBinding[]
    70	  readonly order: number
    71	}
    72	
    73	export interface HarnessProfile extends HarnessProfileInput {
    74	  readonly id: HarnessProfileId
    75	  readonly launchRevision: number
    76	  readonly metadataRevision: number
    77	  readonly providerContractVersion: number
    78	  readonly builtIn: boolean
    79	}
    80	
    81	export interface HarnessCommandPreviewEnvironment {
    82	  readonly name: string
    83	  readonly operation: 'set' | 'reference' | 'unset'
    84	  readonly displayValue?: string
    85	  readonly redacted: boolean
    86	}
    87	
    88	/** Exhaustive provider-owned ways hvir may start a harness conversation. */
    89	export type HarnessLaunchMode = 'fresh' | 'resume' | 'fork'
    90	
    91	export interface HarnessCommandPreview {
    92	  readonly profileId: HarnessProfileId
    93	  readonly launchRevision: number
    94	  readonly providerId: HarnessProviderId
    95	  readonly mode: HarnessLaunchMode
    96	  readonly executable: string
    97	  readonly args: readonly string[]
    98	  readonly environment: readonly HarnessCommandPreviewEnvironment[]
    99	  readonly command: string
   100	  readonly artifactIdentity: string
   101	}
   102	
   103	export function isHarnessProfileId(value: unknown): value is HarnessProfileId {
   104	  return typeof value === 'string' && PROFILE_ID.test(value)
   105	}
   106	
   107	export function asHarnessProfileId(value: string): HarnessProfileId {
   108	  if (!isHarnessProfileId(value)) {
   109	    throw new Error(`Invalid harness profile id '${value}'`)
   110	  }
   111	  return value
   112	}
   113	
   114	export function isHarnessBindingName(value: unknown): value is string {
   115	  return typeof value === 'string' && BINDING_NAME.test(value)
   116	}
   117	
   118	export function isHarnessEnvironmentName(value: unknown): value is string {
   119	  return typeof value === 'string' && ENVIRONMENT_NAME.test(value)
   120	}
<shellId: 15 completed with exit code 0>
```

</details>


### `bash`

**Number sessions projection lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/shared/sessions-projection.ts | sed -n '1,240p'

<details>
<summary>241 lines</summary>

```
1	import type { HostConnectionState } from './fs-types'
     2	import type { HarnessProfileId } from './harness-profile'
     3	import type { HarnessContextPressurePolicy, HarnessProviderId } from './harness-provider'
     4	import type { HarnessUsageValue } from './harness-usage'
     5	import type { ProjectState } from './workspace-types'
     6	
     7	export const SESSIONS_PROJECTION_VERSION = 1
     8	export const MAX_SESSIONS_PROJECTION_ROWS = 500
     9	export const MAX_SESSIONS_PROJECTION_WORKSPACES = 1_000
    10	export const MAX_SESSIONS_PROJECTION_PROVIDERS = 128
    11	export const MAX_SESSIONS_USAGE_ROWS = MAX_SESSIONS_PROJECTION_ROWS
    12	
    13	declare const sessionsTerminalHandleBrand: unique symbol
    14	declare const sessionsPtyHandleBrand: unique symbol
    15	declare const sessionsProjectHandleBrand: unique symbol
    16	declare const sessionsWorkspaceHandleBrand: unique symbol
    17	declare const sessionsWorkspaceQualifierBrand: unique symbol
    18	declare const sessionsWorkspaceRuntimeIdBrand: unique symbol
    19	
    20	/** Opaque hvir identity. Consumers may compare or route it, but never present it. */
    21	export type SessionsTerminalHandle = string & {
    22	  readonly [sessionsTerminalHandleBrand]: 'SessionsTerminalHandle'
    23	}
    24	
    25	/** Opaque identity for one exact live PTY instance. */
    26	export type SessionsPtyHandle = string & {
    27	  readonly [sessionsPtyHandleBrand]: 'SessionsPtyHandle'
    28	}
    29	
    30	/** Projection-owned identity with no host or path content. */
    31	export type SessionsProjectHandle = string & {
    32	  readonly [sessionsProjectHandleBrand]: 'SessionsProjectHandle'
    33	}
    34	
    35	/** Projection-owned identity with no host or path content. */
    36	export type SessionsWorkspaceHandle = string & {
    37	  readonly [sessionsWorkspaceHandleBrand]: 'SessionsWorkspaceHandle'
    38	}
    39	
    40	/** Path-free qualifier for matching one ProjectState workspace revision in the renderer. */
    41	export type SessionsWorkspaceQualifier = string & {
    42	  readonly [sessionsWorkspaceQualifierBrand]: 'SessionsWorkspaceQualifier'
    43	}
    44	
    45	/** Renderer workspace owner selected by main; never present this internal routing value. */
    46	export type SessionsWorkspaceRuntimeId = string & {
    47	  readonly [sessionsWorkspaceRuntimeIdBrand]: 'SessionsWorkspaceRuntimeId'
    48	}
    49	
    50	export type SessionsReasonCode =
    51	  | 'not-materialized'
    52	  | 'not-live'
    53	  | 'telemetry-pending'
    54	  | 'source-unavailable'
    55	  | 'source-stale'
    56	  | 'connection-unavailable'
    57	  | 'workspace-unavailable'
    58	  | 'stopped'
    59	  | 'recovery-unavailable'
    60	  | 'transport-unavailable'
    61	
    62	export type SessionsUsageReasonCode =
    63	  | 'not-live'
    64	  | 'identity-pending'
    65	  | 'observation-pending'
    66	  | 'identity-unavailable'
    67	  | 'connection-unavailable'
    68	  | 'source-unavailable'
    69	  | 'observation-capacity'
    70	
    71	/** Content-free cumulative usage projected from the provider-owned observer. */
    72	export type SessionsUsageFact =
    73	  | { readonly status: 'unsupported' }
    74	  | { readonly status: 'pending'; readonly reason: SessionsUsageReasonCode }
    75	  | { readonly status: 'unavailable'; readonly reason: SessionsUsageReasonCode }
    76	  | { readonly status: 'reset'; readonly reason: SessionsUsageReasonCode }
    77	  | {
    78	      readonly status: 'stale'
    79	      readonly value: HarnessUsageValue
    80	      readonly observedAt: number
    81	      readonly reason: SessionsUsageReasonCode
    82	    }
    83	  | {
    84	      readonly status: 'exact' | 'partial'
    85	      readonly value: HarnessUsageValue
    86	      readonly observedAt: number
    87	    }
    88	
    89	export type SessionsFact<T> =
    90	  | { readonly status: 'unsupported' }
    91	  | { readonly status: 'pending'; readonly reason: SessionsReasonCode }
    92	  | { readonly status: 'unavailable'; readonly reason: SessionsReasonCode }
    93	  | {
    94	      readonly status: 'stale'
    95	      readonly value: T
    96	      readonly observedAt: number
    97	      readonly reason: SessionsReasonCode
    98	    }
    99	  | { readonly status: 'available'; readonly value: T; readonly observedAt?: number }
   100	
   101	export interface SessionsModelFact {
   102	  readonly id: string
   103	  readonly displayName?: string
   104	}
   105	
   106	export interface SessionsContextFact {
   107	  readonly usedTokens: number
   108	  readonly windowTokens?: number
   109	  readonly usedPercent?: number
   110	}
   111	
   112	export interface SessionsTurnFact {
   113	  readonly state: 'working' | 'waiting-for-user' | 'waiting-for-approval' | 'idle'
   114	}
   115	
   116	export interface SessionsFreshnessFact {
   117	  readonly staleAfterMs: number
   118	}
   119	
   120	export interface SessionsTelemetryFacts {
   121	  readonly model: SessionsFact<SessionsModelFact>
   122	  readonly context: SessionsFact<SessionsContextFact>
   123	  readonly turn: SessionsFact<SessionsTurnFact>
   124	  readonly freshness: SessionsFact<SessionsFreshnessFact>
   125	}
   126	
   127	export interface SessionsProviderProjection {
   128	  readonly id: HarnessProviderId
   129	  readonly displayName: string
   130	  readonly telemetrySupported: boolean
   131	  readonly usageSupported: boolean
   132	  readonly sessionKind: 'agent' | 'shell'
   133	  readonly contextPressure?: HarnessContextPressurePolicy
   134	}
   135	
   136	export interface SessionsWorkspaceProjection {
   137	  readonly projectId: SessionsProjectHandle
   138	  readonly projectName: string
   139	  readonly workspaceId: SessionsWorkspaceHandle
   140	  readonly qualifier: SessionsWorkspaceQualifier
   141	  readonly workspaceName: string
   142	  readonly main: boolean
   143	  readonly closed: boolean
   144	  readonly missing: boolean
   145	  readonly host: {
   146	    readonly id: string
   147	    readonly label: string
   148	    readonly kind: 'local' | 'ssh'
   149	    readonly connectionState: HostConnectionState
   150	  }
   151	}
   152	
   153	export interface SessionsLivePtyQualifier {
   154	  readonly handle: SessionsPtyHandle
   155	  readonly rendererOwnerId: number
   156	  readonly rendererGeneration: number
   157	}
   158	
   159	/** Main-safe facts before renderer runtime/attention state is joined. */
   160	export interface SessionsObservedSession {
   161	  readonly handle: SessionsTerminalHandle
   162	  readonly workspaceId: SessionsWorkspaceHandle
   163	  readonly providerId: HarnessProviderId
   164	  readonly profile: SessionsFact<{ readonly id: HarnessProfileId }>
   165	  readonly title: string
   166	  readonly lifecycle: 'retained' | 'live'
   167	  readonly livePty?: SessionsLivePtyQualifier
   168	  readonly telemetry: SessionsTelemetryFacts
   169	}
   170	
   171	export interface SessionsObservationSnapshot {
   172	  readonly version: typeof SESSIONS_PROJECTION_VERSION
   173	  readonly demandGeneration: number
   174	  readonly revision: number
   175	  readonly activeProject?: SessionsProjectHandle
   176	  readonly workspaces: readonly SessionsWorkspaceProjection[]
   177	  readonly providers: readonly SessionsProviderProjection[]
   178	  readonly sessions: readonly SessionsObservedSession[]
   179	}
   180	
   181	export interface SessionsProjectionChange {
   182	  readonly demandGeneration: number
   183	  readonly revision: number
   184	}
   185	
   186	export interface SessionsDemandRequest {
   187	  readonly demandGeneration: number
   188	}
   189	
   190	export interface SessionsUsageDemandTarget {
   191	  readonly handle: SessionsTerminalHandle
   192	  readonly livePty?: SessionsLivePtyQualifier
   193	}
   194	
   195	export interface SessionsUsageDemandRequest {
   196	  readonly demandGeneration: number
   197	  readonly projectionDemandGeneration: number
   198	  readonly sourceRevision: number
   199	  readonly targets: readonly SessionsUsageDemandTarget[]
   200	}
   201	
   202	export interface SessionsUsageSnapshotRow {
   203	  readonly handle: SessionsTerminalHandle
   204	  readonly usage: SessionsUsageFact
   205	}
   206	
   207	export interface SessionsUsageSnapshot {
   208	  readonly version: typeof SESSIONS_PROJECTION_VERSION
   209	  readonly demandGeneration: number
   210	  readonly revision: number
   211	  readonly sampledAt: number
   212	  readonly rows: readonly SessionsUsageSnapshotRow[]
   213	}
   214	
   215	export interface SessionsUsageChange {
   216	  readonly demandGeneration: number
   217	  readonly revision: number
   218	}
   219	
   220	export interface SessionsOpenRequest extends SessionsDemandRequest {
   221	  readonly sourceRevision: number
   222	  readonly handle: SessionsTerminalHandle
   223	  readonly projectId: SessionsProjectHandle
   224	  readonly workspaceId: SessionsWorkspaceHandle
   225	  readonly workspaceQualifier: SessionsWorkspaceQualifier
   226	  readonly livePty?: SessionsLivePtyQualifier
   227	}
   228	
   229	export type SessionsOpenUnavailableReason =
   230	  | 'stale-projection'
   231	  | 'session-unavailable'
   232	  | 'workspace-unavailable'
   233	  | 'connection-unavailable'
   234	  | 'terminal-unavailable'
   235	
   236	export type SessionsOpenResponse =
   237	  | {
   238	      readonly outcome: 'opened'
   239	      readonly state: ProjectState
   240	      readonly handle: SessionsTerminalHandle
<shellId: 16 completed with exit code 0>
```

</details>


### `bash`

**Number document review lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/shared/document-review.ts | sed -n '1,240p'

<details>
<summary>241 lines</summary>

```
1	import { containsHostPath, hostPathEquals, type HostPath } from './host-path'
     2	
     3	export const DOCUMENT_REVIEW_LIMITS = {
     4	  batchesPerWorkspace: 1,
     5	  batchMembers: 64,
     6	  commentsPerDocument: 64,
     7	  commentsPerWorkspace: 256,
     8	  commentBytes: 8 * 1024,
     9	  contextBytes: 4 * 1024,
    10	  deliveryPayloadBytes: 64 * 1024,
    11	  deliveryQuoteBytes: 2 * 1024,
    12	  excerptBytes: 32 * 1024,
    13	  idBytes: 128,
    14	  revalidationReadBytes: 4 * 1024 * 1024,
    15	  sourceRangeLines: 100,
    16	  storedWorkspaceBytes: 2 * 1024 * 1024,
    17	  workspaceIdBytes: 256,
    18	} as const
    19	
    20	export interface ReviewWorkspaceIdentity {
    21	  /** Stable registered project/worktree identity, not a path-derived key. */
    22	  readonly id: string
    23	  readonly root: HostPath
    24	}
    25	
    26	export type DocumentReviewDocumentIssue =
    27	  'foreign-document' | 'document-outside-workspace'
    28	
    29	export function documentReviewWorkspaceEquals(
    30	  left: ReviewWorkspaceIdentity,
    31	  right: ReviewWorkspaceIdentity,
    32	): boolean {
    33	  return left.id === right.id && hostPathEquals(left.root, right.root)
    34	}
    35	
    36	export function documentReviewDocumentIssue(
    37	  workspace: ReviewWorkspaceIdentity,
    38	  document: HostPath,
    39	): DocumentReviewDocumentIssue | undefined {
    40	  if (document.hostId !== workspace.root.hostId) return 'foreign-document'
    41	  if (
    42	    !containsHostPath(workspace.root, document) ||
    43	    hostPathEquals(workspace.root, document)
    44	  ) {
    45	    return 'document-outside-workspace'
    46	  }
    47	  return undefined
    48	}
    49	
    50	export function isDocumentReviewDocument(
    51	  workspace: ReviewWorkspaceIdentity,
    52	  document: HostPath,
    53	): boolean {
    54	  return documentReviewDocumentIssue(workspace, document) === undefined
    55	}
    56	
    57	export function documentReviewUtf8Bytes(value: string): number {
    58	  return new TextEncoder().encode(value).byteLength
    59	}
    60	
    61	export function isDocumentReviewIdentifier(
    62	  value: unknown,
    63	  maximumBytes: number = DOCUMENT_REVIEW_LIMITS.idBytes,
    64	): value is string {
    65	  return (
    66	    typeof value === 'string' &&
    67	    value.length > 0 &&
    68	    documentReviewUtf8Bytes(value) <= maximumBytes &&
    69	    ![...value].some((character) => {
    70	      const code = character.codePointAt(0)!
    71	      return code <= 31 || code === 127
    72	    })
    73	  )
    74	}
    75	
    76	export interface ReviewDocumentSnapshot {
    77	  readonly algorithm: 'sha256'
    78	  /** Lowercase hexadecimal digest of the exact on-disk UTF-8 bytes. */
    79	  readonly digest: string
    80	  readonly byteLength: number
    81	}
    82	
    83	export interface ReviewSourceRange {
    84	  /** Inclusive, one-based line. */
    85	  readonly startLine: number
    86	  /** Inclusive, one-based line. */
    87	  readonly endLine: number
    88	}
    89	
    90	export interface ReviewAnchorLocation {
    91	  readonly snapshot: ReviewDocumentSnapshot
    92	  readonly range: ReviewSourceRange
    93	}
    94	
    95	export type ReviewAnchorStaleReason =
    96	  | 'ambiguous-match'
    97	  | 'deleted'
    98	  | 'host-unavailable'
    99	  | 'incomplete-read'
   100	  | 'invalid-snapshot'
   101	  | 'invalid-text'
   102	  | 'missing-match'
   103	  | 'read-limit-exceeded'
   104	
   105	export type ReviewAnchorState =
   106	  | { readonly status: 'current' }
   107	  | { readonly status: 'moved'; readonly previous: ReviewAnchorLocation }
   108	  | {
   109	      readonly status: 'stale'
   110	      readonly reason: ReviewAnchorStaleReason
   111	      /** Explicit human decision; staleness remains visible and orthogonal. */
   112	      readonly reviewed: boolean
   113	    }
   114	
   115	/** Representation-independent source identity shared by rendered and source capture. */
   116	export interface DocumentReviewAnchor {
   117	  readonly snapshot: ReviewDocumentSnapshot
   118	  readonly range: ReviewSourceRange
   119	  readonly excerpt: string
   120	  /** Exact immediately preceding source, including its line delimiter. */
   121	  readonly contextBefore: string
   122	  /** Exact immediately following source, including its line delimiter. */
   123	  readonly contextAfter: string
   124	  readonly state: ReviewAnchorState
   125	}
   126	
   127	export type ReviewCommentLifecycle = 'draft' | 'sent' | 'resolved'
   128	
   129	export interface DocumentReviewComment {
   130	  readonly id: string
   131	  readonly workspace: ReviewWorkspaceIdentity
   132	  readonly document: HostPath
   133	  readonly body: string
   134	  readonly anchor: DocumentReviewAnchor
   135	  readonly lifecycle: ReviewCommentLifecycle
   136	}
   137	
   138	export interface DocumentReviewBatch {
   139	  readonly id: string
   140	  readonly workspace: ReviewWorkspaceIdentity
   141	  readonly commentIds: readonly string[]
   142	}
   143	
   144	export interface DocumentReviewModel {
   145	  readonly workspace: ReviewWorkspaceIdentity
   146	  readonly comments: readonly DocumentReviewComment[]
   147	  readonly batches: readonly DocumentReviewBatch[]
   148	}
   149	
   150	export interface DocumentReviewStoreNotice {
   151	  readonly kind: 'corrupt' | 'future-version' | 'read-failure'
   152	  /** Basename only; review state and user-data paths remain private. */
   153	  readonly recoveryFile?: string
   154	  readonly writeBlocked: boolean
   155	}
   156	
   157	export interface DocumentReviewWorkspaceSnapshot {
   158	  readonly workspaceGeneration: number
   159	  readonly revision: number
   160	  readonly model: DocumentReviewModel
   161	  readonly notice?: DocumentReviewStoreNotice
   162	}
   163	
   164	export interface DocumentReviewRestoreRequest {
   165	  readonly workspace: ReviewWorkspaceIdentity
   166	}
   167	
   168	export interface DocumentReviewSaveRequest extends DocumentReviewRestoreRequest {
   169	  readonly workspaceGeneration: number
   170	  readonly expectedRevision: number
   171	  readonly model: DocumentReviewModel
   172	}
   173	
   174	export interface DocumentReviewRevalidateRequest extends DocumentReviewRestoreRequest {
   175	  readonly workspaceGeneration: number
   176	  readonly document: HostPath
   177	}
   178	
   179	export type DocumentReviewRevalidation =
   180	  | {
   181	      readonly status: 'read'
   182	      readonly document: HostPath
   183	      readonly snapshot: ReviewDocumentSnapshot
   184	      readonly content: string
   185	    }
   186	  | {
   187	      readonly status: 'stale'
   188	      readonly document: HostPath
   189	      readonly reason: 'deleted' | 'host-unavailable' | 'incomplete-read' | 'invalid-text'
   190	    }
   191	
   192	export type DocumentReviewDeliverySelection =
   193	  | { readonly kind: 'comment'; readonly commentId: string }
   194	  | { readonly kind: 'batch'; readonly batchId: string }
   195	
   196	export interface DocumentReviewDeliveryPayload {
   197	  /** Exact LF-normalized human-readable body used by Preview, Copy, and Insert. */
   198	  readonly body: string
   199	  readonly byteLength: number
   200	  readonly commentIds: readonly string[]
   201	}
   202	
   203	export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'
   204	
   205	export interface DocumentReviewDeliveryDestination {
   206	  readonly terminalId: string
   207	  readonly title: string
   208	  readonly providerName: string
   209	  readonly lifecycle: 'live'
   210	  readonly connection: 'connected'
   211	  readonly attention?: import('./terminal-attention').TerminalAttentionState
   212	  readonly capability: DocumentReviewDeliveryCapability
   213	}
   214	
   215	export interface DocumentReviewDeliveryScopeRequest {
   216	  readonly workspace: ReviewWorkspaceIdentity
   217	  readonly workspaceGeneration: number
   218	}
   219	
   220	export interface DocumentReviewPreviewRequest extends DocumentReviewDeliveryScopeRequest {
   221	  readonly selection: DocumentReviewDeliverySelection
   222	}
   223	
   224	export interface DocumentReviewPrepareRequest extends DocumentReviewPreviewRequest {
   225	  readonly terminalId: string
   226	}
   227	
   228	export interface PreparedDocumentReviewDelivery {
   229	  readonly id: string
   230	  readonly destination: DocumentReviewDeliveryDestination
   231	  readonly payload: DocumentReviewDeliveryPayload
   232	}
   233	
   234	export interface DocumentReviewInsertRequest {
   235	  readonly preparedId: string
   236	}
   237	
   238	export interface DocumentReviewInsertResult {
   239	  readonly outcome: 'inserted'
   240	}
<shellId: 17 completed with exit code 0>
```

</details>


### `bash`

**Number terminal pane lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/terminal-pane.ts | sed -n '1,260p'

<details>
<summary>261 lines</summary>

```
1	/**
     2	 * `TerminalPane` — the terminal seam (ADR-003).
     3	 *
     4	 * The terminal is a swappable pane, never the foundation. Everything above this
     5	 * interface is engine-agnostic; the concrete implementation (ghostty-web, then
     6	 * native libghostty) lands in Phase 2. Because ghostty-web is xterm.js-API
     7	 * compatible, this shape stays close to that mental model.
     8	 *
     9	 * Concrete engines implement this interface; the Phase 2 spike uses
    10	 * ghostty-web in `ghostty-terminal-pane.ts`.
    11	 */
    12	
    13	import type { Disposer } from '../../../shared'
    14	
    15	export interface TerminalSize {
    16	  readonly cols: number
    17	  readonly rows: number
    18	}
    19	
    20	export interface TerminalColorTheme {
    21	  readonly background: string
    22	  readonly foreground: string
    23	  readonly cursor: string
    24	  readonly cursorText: string
    25	  readonly selectionBackground: string
    26	  readonly selectionForeground: string
    27	  readonly black: string
    28	  readonly red: string
    29	  readonly green: string
    30	  readonly yellow: string
    31	  readonly blue: string
    32	  readonly magenta: string
    33	  readonly cyan: string
    34	  readonly white: string
    35	  readonly brightBlack: string
    36	  readonly brightRed: string
    37	  readonly brightGreen: string
    38	  readonly brightYellow: string
    39	  readonly brightBlue: string
    40	  readonly brightMagenta: string
    41	  readonly brightCyan: string
    42	  readonly brightWhite: string
    43	}
    44	
    45	export interface TerminalTypography {
    46	  readonly fontFamily: string
    47	  readonly fontSize: number
    48	}
    49	
    50	export type TerminalCursorShape = 'block' | 'hollow-block' | 'bar' | 'underline'
    51	export type TerminalCursorBlinkPolicy = 'terminal' | 'blinking' | 'steady'
    52	
    53	/** Engine-neutral local defaults; parser-owned application requests remain authoritative. */
    54	export interface TerminalCursorDefaults {
    55	  readonly shape: TerminalCursorShape
    56	  readonly blink: TerminalCursorBlinkPolicy
    57	}
    58	
    59	export type TerminalPresentation = 'visible' | 'hidden'
    60	
    61	/** Why the terminal engine produced bytes for its PTY-facing data channel. */
    62	export type TerminalPaneDataSource = 'user' | 'terminal-response'
    63	
    64	export type TerminalEventScreen = 'normal' | 'alternate'
    65	
    66	export interface TerminalEventProvenance {
    67	  readonly id: number
    68	  readonly screen: TerminalEventScreen
    69	  readonly row: number
    70	  readonly column: number
    71	}
    72	
    73	export interface TerminalEventLocation {
    74	  readonly screen: TerminalEventScreen
    75	  readonly row: number
    76	  readonly column: number
    77	}
    78	
    79	export interface TerminalRetainedBufferRange {
    80	  readonly start: Readonly<{ row: number; column: number }>
    81	  readonly end: Readonly<{ row: number; column: number }>
    82	}
    83	
    84	/** One immutable, pane-owned native search snapshot. */
    85	export interface TerminalRetainedBufferSearch {
    86	  readonly query: string
    87	  readonly caseSensitive: boolean
    88	  readonly matches: readonly TerminalRetainedBufferRange[]
    89	  /** Reveal a current match without mutating terminal selection. */
    90	  reveal(match: TerminalRetainedBufferRange): boolean
    91	  /** Extract exact plain text, or fail closed for stale/foreign ranges. */
    92	  extract(match: TerminalRetainedBufferRange): string | undefined
    93	  dispose(): void
    94	}
    95	
    96	export type TerminalSemanticAction =
    97	  | 'fresh-line'
    98	  | 'fresh-line-new-prompt'
    99	  | 'new-command'
   100	  | 'prompt-start'
   101	  | 'end-prompt-start-input'
   102	  | 'end-prompt-start-input-terminate-eol'
   103	  | 'end-input-start-output'
   104	  | 'end-command'
   105	
   106	export type TerminalProgressState = 'remove' | 'set' | 'error' | 'indeterminate' | 'pause'
   107	
   108	export type TerminalNotificationSource = 'osc-9' | 'osc-777'
   109	
   110	export type TerminalPaletteTarget =
   111	  | { readonly kind: 'palette'; readonly index: number }
   112	  | {
   113	      readonly kind: 'special'
   114	      readonly name: 'bold' | 'underline' | 'blink' | 'reverse' | 'italic'
   115	    }
   116	  | {
   117	      readonly kind: 'dynamic'
   118	      readonly name:
   119	        | 'foreground'
   120	        | 'background'
   121	        | 'cursor'
   122	        | 'pointer-foreground'
   123	        | 'pointer-background'
   124	        | 'tektronix-foreground'
   125	        | 'tektronix-background'
   126	        | 'highlight-background'
   127	        | 'tektronix-cursor'
   128	        | 'highlight-foreground'
   129	    }
   130	
   131	export interface TerminalEventColor {
   132	  readonly r: number
   133	  readonly g: number
   134	  readonly b: number
   135	}
   136	
   137	export type TerminalPaletteRequest =
   138	  | {
   139	      readonly type: 'set'
   140	      readonly target: TerminalPaletteTarget
   141	      readonly color: TerminalEventColor
   142	    }
   143	  | { readonly type: 'query'; readonly target: TerminalPaletteTarget }
   144	  | { readonly type: 'reset'; readonly target: TerminalPaletteTarget }
   145	  | { readonly type: 'reset-palette' }
   146	  | { readonly type: 'reset-special' }
   147	
   148	/** Closed, engine-neutral events produced by the terminal parser/state owner. */
   149	export type TerminalEvent =
   150	  | { readonly type: 'title'; readonly title: string }
   151	  | { readonly type: 'working-directory'; readonly uri: string }
   152	  | { readonly type: 'bell' }
   153	  | {
   154	      readonly type: 'notification'
   155	      readonly source: TerminalNotificationSource
   156	      readonly title: string
   157	      readonly body: string
   158	    }
   159	  | {
   160	      readonly type: 'progress'
   161	      readonly state: TerminalProgressState
   162	      readonly progress?: number
   163	    }
   164	  | {
   165	      readonly type: 'semantic'
   166	      readonly action: TerminalSemanticAction
   167	      readonly options: string
   168	      readonly provenance: TerminalEventProvenance
   169	    }
   170	  | {
   171	      readonly type: 'palette'
   172	      readonly operation: number
   173	      readonly request: TerminalPaletteRequest
   174	    }
   175	  | {
   176	      readonly type: 'clipboard'
   177	      readonly operation: 'read'
   178	      readonly selection: string
   179	    }
   180	  | {
   181	      readonly type: 'clipboard'
   182	      readonly operation: 'write'
   183	      readonly selection: string
   184	      readonly data: string
   185	    }
   186	
   187	export type TerminalLinkActivation =
   188	  | { readonly kind: 'file'; readonly target: string }
   189	  | { readonly kind: 'loopback-http'; readonly target: string }
   190	
   191	export interface TerminalPaneEvents {
   192	  /** User input or parser-owned protocol replies that must be written to the PTY. */
   193	  onData(cb: (data: string, source: TerminalPaneDataSource) => void): Disposer
   194	  /** Explicit clipboard-paste gesture; policy remains outside the swappable pane. */
   195	  onClipboardPaste(cb: (fallbackData: string) => void): Disposer
   196	  /** Parser-owned terminal semantics; consumers retain all product authority. */
   197	  onEvent(cb: (event: TerminalEvent) => void): Disposer
   198	  /** The pane's own resize (cols/rows), e.g. from a layout change. */
   199	  onResize(cb: (size: TerminalSize) => void): Disposer
   200	  /** A user explicitly activated a typed link rendered by the terminal. */
   201	  onLink(cb: (activation: TerminalLinkActivation) => void): Disposer
   202	}
   203	
   204	export interface TerminalPane {
   205	  /** Attach the pane to a DOM container and begin rendering. */
   206	  mount(container: HTMLElement): void
   207	  /** Move the retained render surface without resetting its VT buffer. */
   208	  reparent(container: HTMLElement): void
   209	  /** Tear down, releasing the render surface and all listeners. */
   210	  dispose(): void
   211	  /** Write PTY output into the pane. */
   212	  write(data: string): void
   213	  /** Resize the terminal grid. */
   214	  resize(cols: number, rows: number): void
   215	  /** Update colors without remounting or restarting the PTY. */
   216	  setTheme(theme: TerminalColorTheme): void
   217	  /** Update text presentation; visible panes refit, hidden panes defer until reveal. */
   218	  setTypography(typography: TerminalTypography): void
   219	  /** Update parser defaults without replacing effective application cursor state. */
   220	  setCursorDefaults(defaults: TerminalCursorDefaults): void
   221	  /** Enable or disable compatible text shaping without changing the terminal grid. */
   222	  setLigatures(enabled: boolean): void
   223	  /** Start or stop visible engine work without changing the live terminal state. */
   224	  setPresentation(presentation: TerminalPresentation): void
   225	  /** Force the current grid to repaint without changing PTY geometry. */
   226	  redraw(): void
   227	  /** Resolve retained semantic provenance, or fail closed after eviction/reset. */
   228	  resolveEventProvenance(
   229	    provenance: TerminalEventProvenance,
   230	  ): TerminalEventLocation | undefined
   231	  /** Report the screen whose retained rows are currently presented. */
   232	  activeEventScreen(): TerminalEventScreen
   233	  /** Reveal a retained event on the currently presented screen without selecting text. */
   234	  revealEventLocation(location: TerminalEventLocation): boolean
   235	  /** Search this pane's retained normal buffer through its bounded engine primitive. */
   236	  searchRetainedBuffer(
   237	    query: string,
   238	    options: Readonly<{ caseSensitive: boolean; signal?: AbortSignal }>,
   239	  ): Promise<TerminalRetainedBufferSearch>
   240	  /** Cancel the current query and revoke its ranges. */
   241	  cancelRetainedBufferSearch(): void
   242	  /** Capture an authenticated boundary at the current parser cursor. */
   243	  captureRetainedBufferBoundary(): TerminalEventProvenance | undefined
   244	  /** Extract exact plain text for one authenticated half-open semantic range. */
   245	  extractRetainedBufferRange(
   246	    start: TerminalEventProvenance,
   247	    end: TerminalEventProvenance,
   248	    options?: Readonly<{ signal?: AbortSignal }>,
   249	  ): Promise<string>
   250	  /** Cancel the current exact semantic-range extraction. */
   251	  cancelRetainedBufferExtraction(): void
   252	  /** Report whether this exact pane owns a text selection. */
   253	  hasSelection(): boolean
   254	  /** Read this exact pane's selected plain text without acquiring clipboard authority. */
   255	  getSelection(): string
   256	  /** Paste plain text through the engine's native bracketed-paste behavior. */
   257	  paste(data: string): void
   258	  /** Select all retained text owned by this pane. */
   259	  selectAll(): void
   260	  /** Clear visible cells and retained scrollback without writing to the PTY. */
<shellId: 18 completed with exit code 0>
```

</details>


### `bash`

**Number ghostty pane lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts | sed -n '1,220p'

<details>
<summary>221 lines</summary>

```
1	import {
     2	  Terminal as GhosttyTerminal,
     3	  init,
     4	  type CursorBlink as GhosttyCursorBlink,
     5	  type CursorStyle as GhosttyCursorStyle,
     6	  type ITheme as GhosttyTheme,
     7	  type IRetainedBufferRange as GhosttyRetainedBufferRange,
     8	  type IRetainedBufferSearchResult as GhosttyRetainedBufferSearchResult,
     9	  type ILink,
    10	  type ILinkProvider,
    11	  type TerminalEventProvenance as GhosttyTerminalEventProvenance,
    12	} from 'ghostty-web'
    13	import ghosttyWasmUrl from 'ghostty-web/ghostty-vt.wasm?url'
    14	
    15	import type {
    16	  ComposerSubmitMode,
    17	  Disposer,
    18	  HarnessModifiedKeyProtocol,
    19	} from '../../../shared'
    20	import type {
    21	  TerminalEvent,
    22	  TerminalEventLocation,
    23	  TerminalEventProvenance,
    24	  TerminalEventScreen,
    25	  TerminalPane,
    26	  TerminalPaneDataSource,
    27	  TerminalPaneEvents,
    28	  TerminalPresentation,
    29	  TerminalSize,
    30	  TerminalColorTheme,
    31	  TerminalCursorDefaults,
    32	  TerminalLinkActivation,
    33	  TerminalRetainedBufferRange,
    34	  TerminalRetainedBufferSearch,
    35	  TerminalTypography,
    36	} from './terminal-pane'
    37	import { translateGhosttyTerminalEvent } from './ghostty-terminal-events'
    38	import { terminalColorThemeEquals } from './terminal-palette'
    39	import {
    40	  detectTerminalFileLinks,
    41	  detectTerminalWebLinks,
    42	  isFileUri,
    43	  isTerminalWebTarget,
    44	} from './terminal-file-link'
    45	import { TerminalFitController } from './ghostty-terminal-fit'
    46	import { resolveGhosttyTerminalFilePaste } from './ghostty-terminal-file-paste'
    47	import {
    48	  ghosttyClipboardPasteFallback,
    49	  ghosttyKeyboardOverride,
    50	} from './ghostty-terminal-keyboard'
    51	import { TerminalWheelController } from './terminal-wheel'
    52	
    53	let initializeGhostty: Promise<void> | undefined
    54	const TERMINAL_SCROLLBACK_BYTES = 10_000_000
    55	
    56	function toGhosttyTheme(theme: TerminalColorTheme): GhosttyTheme {
    57	  return {
    58	    background: theme.background,
    59	    foreground: theme.foreground,
    60	    cursor: theme.cursor,
    61	    cursorAccent: theme.cursorText,
    62	    selectionBackground: theme.selectionBackground,
    63	    selectionForeground: theme.selectionForeground,
    64	    black: theme.black,
    65	    red: theme.red,
    66	    green: theme.green,
    67	    yellow: theme.yellow,
    68	    blue: theme.blue,
    69	    magenta: theme.magenta,
    70	    cyan: theme.cyan,
    71	    white: theme.white,
    72	    brightBlack: theme.brightBlack,
    73	    brightRed: theme.brightRed,
    74	    brightGreen: theme.brightGreen,
    75	    brightYellow: theme.brightYellow,
    76	    brightBlue: theme.brightBlue,
    77	    brightMagenta: theme.brightMagenta,
    78	    brightCyan: theme.brightCyan,
    79	    brightWhite: theme.brightWhite,
    80	  }
    81	}
    82	
    83	function toGhosttyCursorStyle(
    84	  shape: TerminalCursorDefaults['shape'],
    85	): GhosttyCursorStyle {
    86	  return shape === 'hollow-block' ? 'block_hollow' : shape
    87	}
    88	
    89	function toGhosttyCursorBlink(
    90	  policy: TerminalCursorDefaults['blink'],
    91	): GhosttyCursorBlink {
    92	  if (policy === 'blinking') return true
    93	  if (policy === 'steady') return false
    94	  return 'terminal'
    95	}
    96	
    97	export interface GhosttyTerminalPaneOptions {
    98	  readonly cursorDefaults: TerminalCursorDefaults
    99	  readonly ligatures: boolean
   100	  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
   101	  readonly metaEnterAliasesControl: boolean
   102	  readonly composerSubmitMode: ComposerSubmitMode
   103	}
   104	
   105	/** Load the shared WASM instance off the first paint, then create a pane. */
   106	export async function createGhosttyTerminalPane(
   107	  theme: TerminalColorTheme,
   108	  typography: TerminalTypography,
   109	  options: GhosttyTerminalPaneOptions,
   110	): Promise<TerminalPane> {
   111	  initializeGhostty ??= init({ wasmUrl: ghosttyWasmUrl })
   112	  await initializeGhostty
   113	  return new GhosttyTerminalPane(theme, typography, options)
   114	}
   115	
   116	class ListenerSet<T> {
   117	  private readonly listeners = new Set<(value: T) => void>()
   118	
   119	  on(callback: (value: T) => void): Disposer {
   120	    this.listeners.add(callback)
   121	    return () => {
   122	      this.listeners.delete(callback)
   123	    }
   124	  }
   125	
   126	  emit(value: T): void {
   127	    for (const callback of this.listeners) callback(value)
   128	  }
   129	
   130	  clear(): void {
   131	    this.listeners.clear()
   132	  }
   133	}
   134	
   135	class DataListenerSet {
   136	  private readonly listeners = new Set<
   137	    (data: string, source: TerminalPaneDataSource) => void
   138	  >()
   139	
   140	  on(callback: (data: string, source: TerminalPaneDataSource) => void): Disposer {
   141	    this.listeners.add(callback)
   142	    return () => {
   143	      this.listeners.delete(callback)
   144	    }
   145	  }
   146	
   147	  emit(data: string, source: TerminalPaneDataSource): void {
   148	    for (const callback of this.listeners) callback(data, source)
   149	  }
   150	
   151	  clear(): void {
   152	    this.listeners.clear()
   153	  }
   154	}
   155	
   156	class GhosttyTerminalPane implements TerminalPane {
   157	  private readonly terminal: GhosttyTerminal
   158	  private readonly fit: TerminalFitController
   159	  private readonly nativeProvenance = new WeakMap<
   160	    TerminalEventProvenance,
   161	    GhosttyTerminalEventProvenance
   162	  >()
   163	  private cursorDefaults: TerminalCursorDefaults
   164	  private ligatures: boolean
   165	
   166	  constructor(
   167	    private theme: TerminalColorTheme,
   168	    private typography: TerminalTypography,
   169	    options: GhosttyTerminalPaneOptions,
   170	  ) {
   171	    this.cursorDefaults = options.cursorDefaults
   172	    this.ligatures = options.ligatures
   173	    this.terminal = new GhosttyTerminal({
   174	      allowTransparency: false,
   175	      cursorBlink: toGhosttyCursorBlink(options.cursorDefaults.blink),
   176	      cursorStyle: toGhosttyCursorStyle(options.cursorDefaults.shape),
   177	      fontFamily: typography.fontFamily,
   178	      fontLigatures: options.ligatures,
   179	      fontSize: typography.fontSize,
   180	      scrollbackBytes: TERMINAL_SCROLLBACK_BYTES,
   181	      theme: toGhosttyTheme(theme),
   182	      disableContextMenu: true,
   183	      resolveClipboardFilePaste: (file) =>
   184	        resolveGhosttyTerminalFilePaste(window.hvir, file),
   185	    })
   186	    this.fit = new TerminalFitController(this.terminal)
   187	    this.terminal.attachCustomKeyEventHandler((event) => {
   188	      const pasteFallback = ghosttyClipboardPasteFallback(event)
   189	      if (pasteFallback !== undefined) {
   190	        this.emitClipboardPaste(pasteFallback)
   191	        return true
   192	      }
   193	      const data = ghosttyKeyboardOverride(event, options)
   194	      if (data === undefined) return false
   195	      this.emitData(data, 'user')
   196	      return true
   197	    })
   198	  }
   199	
   200	  private readonly dataListeners = new DataListenerSet()
   201	  private readonly clipboardPasteListeners = new ListenerSet<string>()
   202	  private readonly eventListeners = new ListenerSet<TerminalEvent>()
   203	  private readonly resizeListeners = new ListenerSet<TerminalSize>()
   204	  private readonly linkListeners = new ListenerSet<TerminalLinkActivation>()
   205	  private readonly engineDisposers: Array<{ dispose(): void }> = []
   206	  private surface?: HTMLDivElement
   207	  private mounted = false
   208	  private disposed = false
   209	  private presentation: TerminalPresentation = 'visible'
   210	  private readonly wheel = new TerminalWheelController()
   211	  private searchHighlight?: Readonly<{
   212	    owner: object
   213	    range: GhosttyRetainedBufferRange
   214	  }>
   215	  private searchHighlightLayer?: HTMLDivElement
   216	  private hasPresentedFrame = false
   217	  private processingPtyOutput = 0
   218	
   219	  readonly events: TerminalPaneEvents = {
   220	    onData: (callback) => this.dataListeners.on(callback),
<shellId: 19 completed with exit code 0>
```

</details>


### `bash`

**Number terminal view lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/terminal/TerminalView.tsx | sed -n '1,220p'

<details>
<summary>221 lines</summary>

```
1	import type { ReactElement } from 'react'
     2	
     3	import type {
     4	  ComposerSubmitMode,
     5	  HarnessTelemetry,
     6	  HarnessModifiedKeyProtocol,
     7	  HarnessProfileId,
     8	  HarnessProviderCapabilities,
     9	  HostConnectionState,
    10	  HostPath,
    11	  TerminalIdentityStatus,
    12	} from '../../../shared'
    13	import type { TerminalThemeOverride } from '../settings/settings'
    14	import { useAppTheme, type AppTheme } from '../theme'
    15	import { TerminalContextMenu } from './TerminalContextMenu'
    16	import { terminalForkAvailability } from './terminal-fork-policy'
    17	import { terminalThemePalette } from './terminal-theme-catalog'
    18	import { TerminalSearch } from './TerminalSearch'
    19	import type {
    20	  TerminalCursorDefaults,
    21	  TerminalLinkActivation,
    22	  TerminalTypography,
    23	} from './terminal-pane'
    24	import { useTerminalPaneController } from './use-terminal-pane-controller'
    25	import type { FreshTerminalStart } from './terminal-runtime-options'
    26	import type { TerminalForkRequest } from './terminal-workspace-model'
    27	import type { TerminalRuntimeRegistry } from './terminal-runtime-registry'
    28	import { useTerminalContextMenu } from './use-terminal-context-menu'
    29	
    30	interface TerminalViewProps {
    31	  readonly sessionId: string
    32	  readonly profileId: HarnessProfileId
    33	  readonly launchRevision: number
    34	  readonly supportsResume: boolean
    35	  readonly capabilities: HarnessProviderCapabilities
    36	  readonly exactForkLaunch?: true
    37	  readonly fallbackTitle: string
    38	  readonly harnessSessionId?: string
    39	  readonly identityStatus?: TerminalIdentityStatus
    40	  readonly identityDiverged?: true
    41	  readonly forkRequest?: TerminalForkRequest
    42	  readonly forkPending?: true
    43	  readonly resumeOnStart: boolean
    44	  readonly startMode: 'interactive' | 'bulk'
    45	  readonly position: number
    46	  readonly slot: 'primary' | 'secondary'
    47	  readonly presented: boolean
    48	  readonly visible: boolean
    49	  readonly active: boolean
    50	  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
    51	  readonly metaEnterAliasesControl: boolean
    52	  readonly themeOverride: TerminalThemeOverride
    53	  readonly lightThemeId: string
    54	  readonly darkThemeId: string
    55	  readonly typography: TerminalTypography
    56	  readonly cursorDefaults: TerminalCursorDefaults
    57	  readonly ligatures: boolean
    58	  readonly composerSubmitMode: ComposerSubmitMode
    59	  readonly cwd: HostPath
    60	  readonly workspaceRoot: HostPath
    61	  readonly runtimes: TerminalRuntimeRegistry
    62	  readonly connectionState: HostConnectionState
    63	  readonly onTitle: (title: string) => void
    64	  readonly onStatus: (status: string) => void
    65	  readonly onTelemetry: (telemetry: HarnessTelemetry | undefined) => void
    66	  readonly onIdentity: (
    67	    harnessSessionId: string | undefined,
    68	    status: TerminalIdentityStatus,
    69	    identityDiverged?: true,
    70	  ) => void
    71	  readonly onStartFailed?: (reason: string) => void
    72	  readonly onExit?: (exitCode: number) => void
    73	  readonly onStarted: () => void
    74	  readonly onFreshStarted: (started: FreshTerminalStart) => void
    75	  readonly onCapabilities: (capabilities: HarnessProviderCapabilities) => void
    76	  readonly onInput: (data: string) => void
    77	  readonly onOutput: () => void
    78	  readonly onBell: () => void
    79	  readonly onFocus: () => void
    80	  readonly onLink: (activation: TerminalLinkActivation) => void
    81	  readonly onSplit: () => void
    82	  readonly onFork: (sessionId: string) => void
    83	  readonly onOpenTerminalSettings: () => void
    84	}
    85	
    86	export function TerminalView(props: TerminalViewProps): ReactElement | null {
    87	  const {
    88	    sessionId,
    89	    supportsResume,
    90	    harnessSessionId,
    91	    slot,
    92	    visible,
    93	    active,
    94	    themeOverride,
    95	    lightThemeId,
    96	    darkThemeId,
    97	    connectionState,
    98	  } = props
    99	  const appTheme = useAppTheme()
   100	  const effectiveTheme: AppTheme = themeOverride === 'app' ? appTheme : themeOverride
   101	  const terminalTheme = terminalThemePalette(effectiveTheme, lightThemeId, darkThemeId)
   102	  const controller = useTerminalPaneController(
   103	    {
   104	      ...props,
   105	      presentation: visible ? 'visible' : 'hidden',
   106	      theme: terminalTheme,
   107	    },
   108	    props.runtimes,
   109	    props.presented,
   110	  )
   111	  const {
   112	    containerRef,
   113	    live,
   114	    title,
   115	    status,
   116	    exited,
   117	    semanticRegionsAvailable,
   118	    semanticRegion,
   119	    restart,
   120	    startFresh,
   121	    previousSemanticRegion,
   122	    nextSemanticRegion,
   123	    searchController,
   124	    openSearch,
   125	    getContextMenuTarget,
   126	    focus,
   127	  } = controller
   128	  const contextMenu = useTerminalContextMenu(getContextMenuTarget, visible)
   129	  const forkAvailability = terminalForkAvailability(
   130	    {
   131	      capabilities: props.capabilities,
   132	      harnessSessionId: props.harnessSessionId,
   133	      identityStatus: props.identityStatus,
   134	      identityDiverged: props.identityDiverged,
   135	      forkPending: props.forkPending,
   136	    },
   137	    props,
   138	    live && contextMenu.request?.target.isCurrent() === true,
   139	  )
   140	  const canRecoverHarness = supportsResume && Boolean(harnessSessionId)
   141	
   142	  if (!props.presented) return null
   143	
   144	  return (
   145	    <section
   146	      className={`terminal-panel terminal-surface${visible ? ' visible' : ''}${active ? ' active' : ''}`}
   147	      data-terminal-slot={slot}
   148	      aria-label={title}
   149	      aria-hidden={!visible}
   150	      data-terminal-session={sessionId}
   151	      data-terminal-status={status}
   152	    >
   153	      {visible && connectionState === 'connected' && exited ? (
   154	        <div
   155	          className="terminal-recovery-actions"
   156	          role="group"
   157	          aria-label={`Recovery actions for ${title}`}
   158	        >
   159	          <span className="terminal-recovery-status" role="status">
   160	            {status}
   161	          </span>
   162	          {canRecoverHarness ? (
   163	            <button
   164	              type="button"
   165	              className="terminal-start-fresh"
   166	              aria-label={`Start fresh ${title}`}
   167	              onClick={startFresh}
   168	            >
   169	              Start fresh
   170	            </button>
   171	          ) : null}
   172	          <button
   173	            type="button"
   174	            className="terminal-restart"
   175	            aria-label={`${canRecoverHarness ? 'Retry recovery' : 'Restart'} ${title}`}
   176	            onClick={restart}
   177	          >
   178	            {canRecoverHarness ? 'Retry recovery' : 'Restart'}
   179	          </button>
   180	        </div>
   181	      ) : null}
   182	      {visible && active && semanticRegionsAvailable ? (
   183	        <div
   184	          className="terminal-semantic-navigation"
   185	          role="group"
   186	          aria-label="Transcript regions"
   187	          onMouseDown={(event) => event.preventDefault()}
   188	        >
   189	          <button
   190	            type="button"
   191	            aria-label="Previous transcript region"
   192	            title="Previous transcript region"
   193	            onClick={previousSemanticRegion}
   194	          >
   195	            ↑
   196	          </button>
   197	          <span className="terminal-semantic-region" role="status" aria-live="polite">
   198	            {semanticRegion
   199	              ? `${regionLabel(semanticRegion.kind)} ${semanticRegion.index} of ${semanticRegion.total}`
   200	              : 'Transcript regions'}
   201	          </span>
   202	          <button
   203	            type="button"
   204	            aria-label="Next transcript region"
   205	            title="Next transcript region"
   206	            onClick={nextSemanticRegion}
   207	          >
   208	            ↓
   209	          </button>
   210	        </div>
   211	      ) : null}
   212	      <div
   213	        className="terminal-container"
   214	        data-terminal-theme={effectiveTheme}
   215	        style={{ backgroundColor: terminalTheme.background }}
   216	        ref={containerRef}
   217	        tabIndex={-1}
   218	        onFocus={(event) => {
   219	          if (event.target === event.currentTarget) focus()
   220	        }}
<shellId: 20 completed with exit code 0>
```

</details>


### `bash`

**Number file viewer lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/viewer/FileViewer.tsx | sed -n '1,220p'

<details>
<summary>221 lines</summary>

```
1	import { ExternalDocumentWorkspace } from './external-document-context'
     2	import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
     3	import {
     4	  basenameHostPath,
     5	  canRender,
     6	  renderedFileType,
     7	  type DiffBase,
     8	  type ViewMode,
     9	  type GitBlameRun,
    10	  type HostPath,
    11	} from '../../../shared'
    12	import { DiffView } from './DiffView'
    13	import { FindControl } from './FindControl'
    14	import { GoToLineControl } from './GoToLineControl'
    15	import { RenderedView } from './RenderedView'
    16	import { SourceView } from './SourceView'
    17	import { LargeFileView } from './LargeFileView'
    18	import { useSourceBlame } from './use-source-blame'
    19	import { formatViewerBytes } from './viewer-byte-format'
    20	import type { SourceCoordinate } from './source-coordinate'
    21	import type {
    22	  ViewerDocumentPosition,
    23	  ViewerNavigationPosition,
    24	  ViewerTab,
    25	} from './tab-state'
    26	import type { RegisterViewerCommandTarget } from './viewer-command-targets'
    27	import {
    28	  viewerFindUnavailable,
    29	  type RegisterViewerFindTarget,
    30	  type ViewerFindTarget,
    31	} from './viewer-find'
    32	import type { ViewerPositionCapture } from './viewer-position'
    33	import {
    34	  canUseInteractiveSource,
    35	  sourcePreview,
    36	  SOURCE_INTERACTIVE_BYTE_LIMIT,
    37	} from './viewer-workload-policy'
    38	import {
    39	  DocumentReviewChrome,
    40	  DocumentReviewToolbar,
    41	} from '../document-review/DocumentReviewControls'
    42	import { DocumentReviewInlineProvider } from '../document-review/DocumentReviewInlineSurface'
    43	import {
    44	  useDocumentReviewInteraction,
    45	  type DocumentReviewDocumentProjection,
    46	  type DocumentReviewWorkspaceBinding,
    47	} from '../document-review/use-document-review-interaction'
    48	
    49	interface FileViewerProps {
    50	  readonly tab?: ViewerTab
    51	  readonly gitRefreshVersion: number
    52	  readonly onMode: (mode: ViewMode, position?: ViewerDocumentPosition) => void
    53	  readonly onDiffBase: (base: DiffBase) => void
    54	  readonly onContent: (content: string) => void
    55	  readonly onSave: () => void
    56	  readonly onReload: () => void
    57	  readonly onPosition: (position: ViewerDocumentPosition) => void
    58	  readonly onNavigationHandled: (serial: number) => void
    59	  readonly registerCommands: RegisterViewerCommandTarget
    60	  readonly onOpenPath: (path: HostPath) => void
    61	  readonly onRenderedDependencies: (tabId: string, paths: readonly HostPath[]) => void
    62	  readonly documentReview?: DocumentReviewWorkspaceBinding
    63	}
    64	
    65	export function FileViewer({
    66	  tab,
    67	  gitRefreshVersion,
    68	  onMode,
    69	  onDiffBase,
    70	  onContent,
    71	  onSave,
    72	  onReload,
    73	  onPosition,
    74	  onNavigationHandled,
    75	  registerCommands,
    76	  onOpenPath,
    77	  onRenderedDependencies,
    78	  documentReview,
    79	}: FileViewerProps): ReactElement {
    80	  const [showBlame, setShowBlame] = useState(false)
    81	  const [modeControlExpanded, setModeControlExpanded] = useState(false)
    82	  const [manualNavigation, setManualNavigation] = useState<ViewerNavigationPosition>()
    83	  const [findTarget, setFindTarget] = useState<ViewerFindTarget>()
    84	  const [findRequest, setFindRequest] = useState<number>()
    85	  const [goToLineRequest, setGoToLineRequest] = useState<number>()
    86	  const manualNavigationSerial = useRef(0)
    87	  const commandSerial = useRef(0)
    88	  const modeControlRef = useRef<HTMLDivElement>(null)
    89	  const tabId = tab?.id
    90	  const currentPath = tab?.path
    91	  const blameMode = tab?.externalWorkspaceRoot ? undefined : tab?.mode
    92	  const positionCapture = useRef<(() => ViewerDocumentPosition) | undefined>(undefined)
    93	  const binaryImage = Boolean(tab?.file?.binary && renderedFileType(tab.path) === 'image')
    94	  const boundedPreview = Boolean(
    95	    tab?.file && tab.file.size > SOURCE_INTERACTIVE_BYTE_LIMIT,
    96	  )
    97	  const navigationContent =
    98	    tab?.file && !tab.file.binary
    99	      ? boundedPreview
   100	        ? sourcePreview(tab.file.content)
   101	        : tab.file.content
   102	      : undefined
   103	  const documentRefreshVersion = tab?.refresh?.version ?? 0
   104	  const { blame, blameStatus } = useSourceBlame(
   105	    currentPath,
   106	    blameMode,
   107	    showBlame,
   108	    documentRefreshVersion,
   109	    gitRefreshVersion,
   110	  )
   111	
   112	  const registerFindTarget: RegisterViewerFindTarget = useCallback((target) => {
   113	    setFindTarget(target)
   114	    let active = true
   115	    return () => {
   116	      if (!active) return
   117	      active = false
   118	      setFindTarget((current) => (current === target ? undefined : current))
   119	    }
   120	  }, [])
   121	
   122	  const reportRenderedDependencies = useCallback(
   123	    (paths: readonly HostPath[]): void => {
   124	      if (tabId) onRenderedDependencies(tabId, paths)
   125	    },
   126	    [onRenderedDependencies, tabId],
   127	  )
   128	
   129	  const navigate = useCallback(
   130	    (coordinate: SourceCoordinate): void => {
   131	      setManualNavigation({
   132	        ...coordinate,
   133	        serial: (manualNavigationSerial.current -= 1),
   134	        focus: true,
   135	      })
   136	      onMode('source', positionCapture.current?.())
   137	    },
   138	    [onMode],
   139	  )
   140	  const navigateReviewLine = useCallback(
   141	    (line: number): void => navigate({ line }),
   142	    [navigate],
   143	  )
   144	  const reviewInteraction = useDocumentReviewInteraction(
   145	    tab?.file && !tab.file.binary && !tab.externalWorkspaceRoot
   146	      ? {
   147	          path: tab.path,
   148	          content: tab.file.content,
   149	          dirty: tab.dirty,
   150	          mode: tab.mode,
   151	        }
   152	      : undefined,
   153	    documentReview,
   154	    navigateReviewLine,
   155	  )
   156	
   157	  const handleNavigation = (serial: number): void => {
   158	    if (manualNavigation?.serial === serial) setManualNavigation(undefined)
   159	    else onNavigationHandled(serial)
   160	  }
   161	
   162	  useEffect(() => {
   163	    if (!tabId) return
   164	    return registerCommands(tabId, {
   165	      findInFile: () => setFindRequest((commandSerial.current += 1)),
   166	      goToLine: () => setGoToLineRequest((commandSerial.current += 1)),
   167	    })
   168	  }, [registerCommands, tabId])
   169	
   170	  useEffect(() => {
   171	    if (!modeControlExpanded) return
   172	    const collapseOutside = (event: PointerEvent): void => {
   173	      if (
   174	        event.target instanceof Node &&
   175	        !modeControlRef.current?.contains(event.target)
   176	      ) {
   177	        setModeControlExpanded(false)
   178	      }
   179	    }
   180	    document.addEventListener('pointerdown', collapseOutside, true)
   181	    return () => document.removeEventListener('pointerdown', collapseOutside, true)
   182	  }, [modeControlExpanded])
   183	
   184	  return (
   185	    <div className="viewer-body">
   186	      {tab ? (
   187	        <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
   188	          {tab.conflict ? (
   189	            <button className="conflict-badge" type="button" onClick={onReload}>
   190	              Changed on disk · reload
   191	            </button>
   192	          ) : null}
   193	          {tab.error && tab.file ? (
   194	            <span className="viewer-operation-error" role="status" title={tab.error}>
   195	              Save failed
   196	            </span>
   197	          ) : null}
   198	          <div className="view-controls">
   199	            {tab.externalWorkspaceRoot ? (
   200	              <span className="external-document-status">
   201	                Read-only · outside project
   202	                <span
   203	                  className="external-document-location"
   204	                  title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
   205	                >
   206	                  {tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:
   207	                  {tab.file?.resolvedPath?.path ?? tab.path.path}
   208	                </span>
   209	              </span>
   210	            ) : null}
   211	            <DocumentReviewToolbar interaction={reviewInteraction} mode={tab.mode} />
   212	            <FindControl
   213	              key={`${tab.id}:${tab.pane}:${tab.mode}`}
   214	              requestSerial={findRequest}
   215	              target={findTarget}
   216	              unavailable={viewerFindUnavailable(tab)}
   217	              boundedPreview={boundedPreview && tab.mode !== 'rendered'}
   218	              onRequestHandled={(serial) =>
   219	                setFindRequest((current) => (current === serial ? undefined : current))
   220	              }
<shellId: 21 completed with exit code 0>
```

</details>


### `bash`

**Number builder config lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/electron-builder.yml | sed -n '1,160p'

<details>
<summary>72 lines</summary>

```
1	appId: dev.hvir.app
     2	productName: hvir
     3	directories:
     4	  output: dist
     5	  buildResources: build
     6	files:
     7	  - out/**
     8	  - package.json
     9	  - '!node_modules/@hvir/rename-noreplace/**'
    10	  - node_modules/@hvir/rename-noreplace/index.js
    11	  - node_modules/@hvir/rename-noreplace/package.json
    12	  - node_modules/@hvir/rename-noreplace/LICENSE
    13	  - node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
    14	extraResources:
    15	  - from: THIRD_PARTY_NOTICES.md
    16	    to: THIRD_PARTY_NOTICES.md
    17	  - from: build/native/hvir-command
    18	    to: hvir-command
    19	asar: true
    20	asarUnpack:
    21	  - node_modules/**/*.node
    22	# postinstall rebuilds the required node-pty module against Electron's ABI. Keep
    23	# packaging from also rebuilding ssh2's optional cpu-features acceleration module;
    24	# ssh2 has a supported JavaScript fallback when that optional module is absent.
    25	npmRebuild: false
    26	mac:
    27	  icon: build/icon-macos.icns
    28	  category: public.app-category.developer-tools
    29	  target:
    30	    - pkg
    31	  hardenedRuntime: true
    32	  entitlements: build/entitlements.mac.plist
    33	  entitlementsInherit: build/entitlements.mac.inherit.plist
    34	pkg:
    35	  artifactName: hvir-${version}-macos-${arch}.${ext}
    36	  scripts: pkg-scripts
    37	  installLocation: /Applications
    38	  allowAnywhere: false
    39	  allowCurrentUserHome: false
    40	  allowRootDirectory: true
    41	  isRelocatable: false
    42	  isVersionChecked: true
    43	  hasStrictIdentifier: true
    44	  overwriteAction: upgrade
    45	linux:
    46	  icon: build/icons-linux
    47	  executableName: hvir
    48	  syncDesktopName: true
    49	  category: Development
    50	  target:
    51	    - deb
    52	deb:
    53	  packageCategory: devel
    54	  appArmorProfile: build/linux/hvir.apparmor
    55	  afterInstall: build/linux/after-install.sh
    56	  afterRemove: build/linux/after-remove.sh
    57	  depends:
    58	    - libc6 (>= 2.35)
    59	    - libstdc++6 (>= 12)
    60	    - libasound2 | libasound2t64
    61	    - libatspi2.0-0 | libatspi2.0-0t64
    62	    - libgtk-3-0 | libgtk-3-0t64
    63	    - libnotify4
    64	    - libnss3
    65	    - libsecret-1-0
    66	    - libuuid1
    67	    - libxss1
    68	    - libxtst6
    69	    - util-linux
    70	    - xdg-utils
    71	  recommends: []
<shellId: 22 completed with exit code 0>
```

</details>


### `bash`

**Number app render lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx | sed -n '260,520p'

<details>
<summary>262 lines</summary>

```
260	  })
   261	  const revealSourceTerminal = async (view: WebViewState): Promise<void> => {
   262	    const target = projectState?.projects
   263	      .flatMap((project) =>
   264	        project.workspaces.map((workspace) => ({ project, workspace })),
   265	      )
   266	      .find(({ workspace }) => hostPathEquals(workspace.root, view.workspaceRoot))
   267	    if (!target) {
   268	      session.reportError('The source workspace is no longer registered')
   269	      return
   270	    }
   271	    if (!rootRef.current || !hostPathEquals(rootRef.current, view.workspaceRoot)) {
   272	      await session.switchWorkspace(target.project.id, target.workspace.id)
   273	    }
   274	    window.requestAnimationFrame(() => {
   275	      const source = [
   276	        ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
   277	      ].find((element) => element.dataset['terminalSession'] === view.sourceTerminalId)
   278	      source?.click()
   279	      source?.focus()
   280	      if (!source) session.reportError('The source terminal has closed')
   281	    })
   282	  }
   283	  if (rootError) return <div className="startup-error">{rootError}</div>
   284	  if (!root) return <div className="startup-loading">Starting hvir…</div>
   285	  const rootWebViews = webViews.filter((view) => hostPathEquals(view.workspaceRoot, root))
   286	  const renderViewerPane = (
   287	    pane: 'primary' | 'secondary',
   288	    paneTabs: typeof primaryTabs,
   289	    paneTab: typeof primaryActiveTab,
   290	    graphPane: boolean,
   291	  ): ReactElement => (
   292	    <section
   293	      className={`viewer-group viewer-group-${pane}`}
   294	      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
   295	      data-diagnostic-capture="viewer"
   296	      data-viewer-pane={pane}
   297	      tabIndex={-1}
   298	      onPointerDownCapture={(event) => {
   299	        if (event.button !== 0) return
   300	        if (
   301	          paneTab &&
   302	          !(graphPane && gitGraphActive) &&
   303	          !(pane === 'primary' && webViewActive)
   304	        ) {
   305	          focusViewerPane(pane, paneTab.id)
   306	        } else {
   307	          focusViewerPane(pane)
   308	        }
   309	      }}
   310	    >
   311	      <TabStrip
   312	        tabs={paneTabs}
   313	        pathCopyRoot={root}
   314	        pane={pane}
   315	        activeId={
   316	          (graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)
   317	            ? undefined
   318	            : paneTab?.id
   319	        }
   320	        onActivate={(id) => activateTab(id, pane)}
   321	        onClose={closeTab}
   322	        onPin={pinTab}
   323	        onReorder={reorderViewerTabs}
   324	        onMoveToPane={moveTabToPane}
   325	        split={viewerSplit}
   326	        onSplit={openViewerSplit}
   327	        onClosePane={pane === 'secondary' ? closeViewerSplit : undefined}
   328	        graphOpen={graphPane && gitGraphOpen}
   329	        graphActive={graphPane && gitGraphActive}
   330	        onActivateGraph={activateGitGraph}
   331	        onCloseGraph={closeGitGraph}
   332	        webTabs={
   333	          pane === 'primary'
   334	            ? rootWebViews.map((view) => ({ id: view.id, title: view.title }))
   335	            : undefined
   336	        }
   337	        activeWebId={pane === 'primary' && webViewActive ? activeWebViewId : undefined}
   338	        onActivateWeb={activateWebView}
   339	        onCloseWeb={closeWebView}
   340	      />
   341	      {graphPane && gitGraphOpen ? (
   342	        <div className="workspace-view" hidden={!gitGraphActive}>
   343	          <GitGraphView
   344	            root={root}
   345	            refreshVersion={gitVersion}
   346	            connectionState={connectionState}
   347	            requestedHash={gitGraphRequest.hash}
   348	            requestSerial={gitGraphRequest.serial}
   349	            onOpen={(path, base, revision) => openFile(path, true, 'git', base, revision)}
   350	          />
   351	        </div>
   352	      ) : null}
   353	      {pane === 'primary' ? (
   354	        <WebPaneStack
   355	          views={webViews}
   356	          root={root}
   357	          active={webViewActive}
   358	          activeId={activeWebViewId}
   359	          focused={webViewFocused}
   360	          onToggleFocus={() => setWebViewFocused((focused) => !focused)}
   361	          onTitle={setWebViewTitle}
   362	          onBlockedNavigation={followBlockedNavigation}
   363	          onOpenBrowser={openWebViewInBrowser}
   364	          onRevealTerminal={(view) => void revealSourceTerminal(view)}
   365	        />
   366	      ) : null}
   367	      <div
   368	        className="workspace-view"
   369	        hidden={(graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)}
   370	      >
   371	        {activeWorkspace?.missing ? (
   372	          <MissingWorkspaceNotice root={root} />
   373	        ) : (
   374	          <FileViewer
   375	            key={`${pane}:${paneTab?.id ?? 'empty'}`}
   376	            tab={paneTab}
   377	            gitRefreshVersion={gitVersion}
   378	            onMode={(mode, at) => paneTab && setViewerMode(paneTab.id, mode, at)}
   379	            onDiffBase={(diffBase) => paneTab && setViewerDiffBase(paneTab.id, diffBase)}
   380	            onContent={(content) => paneTab && setViewerContent(paneTab.id, content)}
   381	            onSave={() => paneTab && saveTab(paneTab.id)}
   382	            onReload={() => paneTab && reloadTab(paneTab.id)}
   383	            onPosition={(position) => paneTab && schedulePosition(paneTab.id, position)}
   384	            onNavigationHandled={(serial) =>
   385	              paneTab && navigationHandled(paneTab.id, serial)
   386	            }
   387	            registerCommands={viewerCommands.register}
   388	            onOpenPath={(path) => {
   389	              focusViewerPane(pane)
   390	              if (paneTab) pinTab(paneTab.id)
   391	              openFile(path, true)
   392	            }}
   393	            onRenderedDependencies={viewer.setRenderedDependencies}
   394	            documentReview={documentReview}
   395	          />
   396	        )}
   397	      </div>
   398	    </section>
   399	  )
   400	  return (
   401	    <div className="app-shell">
   402	      {projectState ? (
   403	        <ProjectsBar
   404	          state={projectState}
   405	          rollups={terminalAttention.rollups}
   406	          busy={session.busy}
   407	          onAdd={overlays.openProjectPicker}
   408	          onSwitch={(projectId, workspaceId) => {
   409	            setDestination('workspace')
   410	            void session.switchWorkspace(projectId, workspaceId)
   411	          }}
   412	          onRefresh={(projectId) => void session.refreshProject(projectId)}
   413	          onCloseProject={(projectId) => void session.closeProject(projectId)}
   414	          onPrune={(projectId) => void session.pruneWorktrees(projectId)}
   415	          onDismiss={(projectId, workspaceId) =>
   416	            void session.dismissWorkspace(projectId, workspaceId)
   417	          }
   418	          onPlanCloseWorkspace={session.planWorkspaceClose}
   419	          onCloseWorkspace={(projectId, workspaceId, plan, terminateTerminals) =>
   420	            void session.closeWorkspace(projectId, workspaceId, plan, terminateTerminals)
   421	          }
   422	          onReopenWorkspace={(projectId, workspaceId) =>
   423	            void session.reopenWorkspace(projectId, workspaceId)
   424	          }
   425	          watchTier={session.watchTier}
   426	          statusError={session.error}
   427	          onChangeConnection={overlays.openProjectPicker}
   428	          onDisconnect={() => void session.disconnect()}
   429	          onReconnect={() => void session.reconnect()}
   430	          theme={theme}
   431	          onTheme={(nextTheme) => setAppTheme(nextTheme)}
   432	          onSettings={() => overlays.openSettings()}
   433	          sessionsActive={destination === 'sessions'}
   434	          onSessions={() => setDestination('sessions')}
   435	        />
   436	      ) : null}
   437	      <main
   438	        className={`workbench${connectionState === 'connected' ? '' : ' project-stale'}${terminalMode === 'maximized' ? ' terminal-focused' : ''}${terminalMode === 'collapsed' ? ' terminal-collapsed' : ''}${treeCollapsed ? ' tree-collapsed' : ''}${layout.terminalRailCompact ? ' terminal-rail-compact' : ''}${webViewFocused && webViewActive ? ' web-focused' : ''}`}
   439	        ref={workbenchRef}
   440	        hidden={destination === 'sessions'}
   441	      >
   442	        <aside
   443	          className="tree-panel"
   444	          aria-label="Project rail"
   445	          data-diagnostic-capture="project-navigation"
   446	          tabIndex={-1}
   447	        >
   448	          <nav className="rail-nav" aria-label="Project views">
   449	            <button
   450	              type="button"
   451	              className={railMode === 'files' ? 'active' : ''}
   452	              aria-current={railMode === 'files' ? 'page' : undefined}
   453	              onClick={() => setRailMode('files')}
   454	            >
   455	              Files
   456	            </button>
   457	            {gitEnabled ? (
   458	              <button
   459	                type="button"
   460	                className={railMode === 'git' ? 'active' : ''}
   461	                aria-current={railMode === 'git' ? 'page' : undefined}
   462	                onClick={() => setRailMode('git')}
   463	              >
   464	                Git{changedCount > 0 ? ` ${changedCountLabel}` : ''}
   465	              </button>
   466	            ) : null}
   467	          </nav>
   468	          <div className="rail-content">
   469	            <FileTree
   470	              key={`files:${root.hostId}:${root.path}`}
   471	              root={root}
   472	              refreshVersion={watchVersion}
   473	              searchRefreshVersion={contentVersion}
   474	              ignoredRefreshVersion={ignoredRefreshVersion}
   475	              changedFiles={gitChanges?.workingTree}
   476	              gitChangesLimited={gitChanges?.workingTreeLimited}
   477	              selected={terminalPathActivation.revealRequest?.path ?? activeTab?.path}
   478	              revealRequest={terminalPathActivation.revealRequest}
   479	              onOpen={openFile}
   480	              onPointerActivate={focusVisibleActiveTerminalAfterLayout}
   481	              viewerPathRebind={viewer}
   482	              onWorkspaceContentChanged={session.refreshWorkspaceContent}
   483	              connected={connectionState === 'connected'}
   484	              missing={activeWorkspace?.missing}
   485	              hidden={railMode !== 'files'}
   486	              gitEnabled={gitEnabled}
   487	              watchInterestsLimited={watchInterests.limited}
   488	              onExpandedChange={watchInterests.updateExpandedPath}
   489	            />
   490	            {gitEnabled ? (
   491	              <GitPanel
   492	                key={`git:${root.hostId}:${root.path}`}
   493	                root={root}
   494	                refreshVersion={contentVersion}
   495	                historyRefreshVersion={gitVersion}
   496	                onChanges={setGitChanges}
   497	                onOpenChange={(path, base, untracked) =>
   498	                  openFile(path, true, untracked ? 'git-untracked' : 'git', base)
   499	                }
   500	                onOpenHistory={(path, revision) =>
   501	                  openFile(path, true, 'git', 'head', revision)
   502	                }
   503	                onOpenGraph={openGitGraph}
   504	                connectionState={connectionState}
   505	                hidden={railMode !== 'git'}
   506	                historyPaused={gitGraphActive}
   507	                hasDirtyViewerTabs={tabs.some((tab) => tab.dirty)}
   508	                onSwitchBranch={switchGitBranch}
   509	                onFetch={fetchGit}
   510	                onPull={pullGit}
   511	                autoFetchIntervalMs={settings.gitAutoFetchIntervalMs}
   512	              />
   513	            ) : null}
   514	          </div>
   515	        </aside>
   516	        <PaneResizer
   517	          orientation="vertical"
   518	          className="tree-resizer"
   519	          label="Resize file tree"
   520	          onDragStart={() => {
<shellId: 23 completed with exit code 0>
```

</details>


### `bash`

**Number app lower render lines**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx | sed -n '520,760p'

<details>
<summary>168 lines</summary>

```
520	          onDragStart={() => {
   521	            if (treeCollapsed) setTreeCollapsed(false)
   522	          }}
   523	          onDrag={(clientX) => {
   524	            const left = workbenchRef.current?.getBoundingClientRect().left ?? 0
   525	            setTreeWidth(clientX - left)
   526	          }}
   527	          onNudge={(delta) => {
   528	            if (treeCollapsed) {
   529	              if (delta > 0) setTreeCollapsed(false)
   530	              return
   531	            }
   532	            const current =
   533	              workbenchRef.current?.querySelector<HTMLElement>('.tree-panel')
   534	            if (current) setTreeWidth(current.getBoundingClientRect().width + delta)
   535	          }}
   536	          onReset={layout.resetTreeWidth}
   537	          action={
   538	            <button
   539	              type="button"
   540	              className="tree-collapse-toggle"
   541	              data-resizer-action
   542	              aria-label={
   543	                treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'
   544	              }
   545	              aria-pressed={treeCollapsed}
   546	              title={treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'}
   547	              onDoubleClick={(event) => event.stopPropagation()}
   548	              onClick={() => setTreeCollapsed((collapsed) => !collapsed)}
   549	            >
   550	              <svg aria-hidden="true" viewBox="0 0 16 16">
   551	                <path
   552	                  d={
   553	                    treeCollapsed
   554	                      ? 'M4 3 8.5 8 4 13M8 3l4.5 5L8 13'
   555	                      : 'M12 3 7.5 8l4.5 5M8 3 3.5 8 8 13'
   556	                  }
   557	                />
   558	              </svg>
   559	            </button>
   560	          }
   561	        />
   562	        <section className="viewer-panel" aria-label="File viewer">
   563	          <div
   564	            className={`viewer-groups${viewerSplit ? ' split' : ''}`}
   565	            ref={viewerGroupsRef}
   566	          >
   567	            {renderViewerPane('primary', primaryTabs, primaryActiveTab, true)}
   568	            {viewerSplit ? (
   569	              <>
   570	                <PaneResizer
   571	                  orientation="vertical"
   572	                  className="viewer-split-resizer"
   573	                  label="Resize split viewers"
   574	                  onDrag={(clientX) => {
   575	                    const left =
   576	                      viewerGroupsRef.current?.getBoundingClientRect().left ?? 0
   577	                    setViewerPrimaryWidth(clientX - left)
   578	                  }}
   579	                  onNudge={(delta) => {
   580	                    const current = viewerGroupsRef.current?.querySelector<HTMLElement>(
   581	                      '.viewer-group-primary',
   582	                    )
   583	                    if (current) {
   584	                      setViewerPrimaryWidth(current.getBoundingClientRect().width + delta)
   585	                    }
   586	                  }}
   587	                  onReset={resetViewerPrimaryWidth}
   588	                />
   589	                {renderViewerPane('secondary', secondaryTabs, secondaryActiveTab, false)}
   590	              </>
   591	            ) : null}
   592	          </div>
   593	        </section>
   594	        <PaneResizer
   595	          orientation="horizontal"
   596	          className="terminal-resizer"
   597	          label="Resize terminal"
   598	          onDragStart={() => {
   599	            if (terminalMode !== 'restored') setTerminalMode('restored')
   600	          }}
   601	          onDrag={(clientY) => {
   602	            const bottom = workbenchRef.current?.getBoundingClientRect().bottom ?? 0
   603	            setTerminalHeight(bottom - clientY)
   604	          }}
   605	          onNudge={(delta) => {
   606	            if (terminalMode !== 'restored') {
   607	              if (
   608	                (terminalMode === 'maximized' && delta < 0) ||
   609	                (terminalMode === 'collapsed' && delta > 0)
   610	              ) {
   611	                setTerminalMode('restored')
   612	              }
   613	              return
   614	            }
   615	            const current =
   616	              workbenchRef.current?.querySelector<HTMLElement>('.terminal-panel')
   617	            if (current) setTerminalHeight(current.getBoundingClientRect().height + delta)
   618	          }}
   619	          onReset={layout.resetTerminalHeight}
   620	          action={<TerminalLayoutControls mode={terminalMode} onMode={setTerminalMode} />}
   621	        />
   622	        <TerminalWorkspaceCollection
   623	          state={projectState}
   624	          runtime={terminalWorkspaces}
   625	          terminalPresented={
   626	            destination === 'workspace' &&
   627	            terminalMode !== 'collapsed' &&
   628	            !(webViewFocused && webViewActive)
   629	          }
   630	          railCompact={layout.terminalRailCompact}
   631	          onRailCompact={layout.setTerminalRailCompact}
   632	          onRollup={terminalAttention.updateRollup}
   633	          onOpenPath={terminalPathActivation.activate}
   634	          onOpenWebLink={openWebLink}
   635	          preferences={terminalPreferences(settings)}
   636	          onOpenSettings={() => overlays.openSettings()}
   637	          onOpenTerminalSettings={() => overlays.openSettings('terminal')}
   638	          onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
   639	          onAddHarness={overlays.openAddHarnessSettings}
   640	        />
   641	      </main>
   642	      <SessionsApplicationDestination
   643	        active={destination === 'sessions'}
   644	        runtime={terminalWorkspaces}
   645	        onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
   646	        onError={session.reportError}
   647	      />
   648	      {overlays.projectPickerOpen ? (
   649	        <SessionDialog
   650	          hosts={session.hosts}
   651	          currentRoot={root}
   652	          suspended={session.prompts.length > 0}
   653	          onCancel={overlays.closeProjectPicker}
   654	          onConnect={session.connectHost}
   655	          onBrowse={session.browseHost}
   656	          folderPicker={session.folderPicker}
   657	          onDisconnect={session.disconnectHost}
   658	          onOpen={session.openHost}
   659	          onOpened={() => (setDestination('workspace'), overlays.closeProjectPicker())}
   660	        />
   661	      ) : null}
   662	      {overlays.settingsOpen ? (
   663	        <SettingsDialog
   664	          theme={theme}
   665	          settings={settings}
   666	          workspaceRoot={root}
   667	          projectRoot={session.activeProject?.registeredRoot}
   668	          initialDestination={overlays.settingsDestination}
   669	          onClose={overlays.closeSettings}
   670	          onSave={(nextTheme, nextSettings) => {
   671	            setAppTheme(nextTheme)
   672	            setAppSettings(nextSettings)
   673	            overlays.closeSettings()
   674	          }}
   675	        />
   676	      ) : null}
   677	      {session.prompts[0] ? (
   678	        <SshPromptDialog
   679	          key={session.prompts[0].id}
   680	          prompt={session.prompts[0]}
   681	          onAnswer={session.answerPrompt}
   682	        />
   683	      ) : null}
   684	    </div>
   685	  )
   686	}
<shellId: 24 completed with exit code 0>
```

</details>


### `bash`

**Number bundled providers**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/main/harness/bundled-harness-providers.ts | sed -n '1,160p'

<details>
<summary>72 lines</summary>

```
1	/** The single explicit assembly of trusted, bundled providers. No observers start here. */
     2	
     3	import type {
     4	  ComposerSubmitMode,
     5	  HarnessProviderDescriptor,
     6	  HarnessProviderId,
     7	  HarnessProfileId,
     8	} from '../../shared'
     9	import type { ProjectHost } from '../project-host/project-host'
    10	import type { HarnessProvider } from './harness-provider-contract'
    11	import { HarnessProviderRegistry } from './harness-provider-registry'
    12	import { plainShellProvider, customCommandProvider } from './providers/shell'
    13	import { claudeCodeProvider } from './providers/claude-code'
    14	import { codexProvider } from './providers/codex'
    15	import { piProvider } from './providers/pi'
    16	import { geminiProvider } from './providers/gemini'
    17	import { githubCopilotProvider } from './providers/github-copilot'
    18	import { cursorProvider } from './providers/cursor'
    19	
    20	export const harnessProviders = new HarnessProviderRegistry([
    21	  plainShellProvider,
    22	  claudeCodeProvider,
    23	  codexProvider,
    24	  piProvider,
    25	  geminiProvider,
    26	  githubCopilotProvider,
    27	  cursorProvider,
    28	  customCommandProvider,
    29	])
    30	
    31	export function harnessProvider(id: string): HarnessProvider {
    32	  return harnessProviders.get(id)
    33	}
    34	
    35	export function harnessProviderCatalog(): readonly HarnessProviderDescriptor[] {
    36	  return harnessProviders.catalog()
    37	}
    38	
    39	export async function configureHarnessComposerSubmit(
    40	  host: ProjectHost,
    41	  mode: ComposerSubmitMode,
    42	): Promise<void> {
    43	  for (const provider of harnessProviders.all()) {
    44	    await provider.composerConfiguration?.configure(host, mode)
    45	  }
    46	}
    47	
    48	/** Data-only inspection surface for diagnostics/tests; never provider-contributed UI. */
    49	export function harnessProviderDiagnostics(): readonly {
    50	  readonly id: HarnessProviderId
    51	  readonly profileContractVersion: number
    52	  readonly defaultProfileId?: HarnessProfileId
    53	  readonly artifactInputs: {
    54	    readonly executable: boolean
    55	    readonly environmentKeys: readonly string[]
    56	    readonly pathBindings: readonly string[]
    57	  }
    58	  readonly probeInvokesVersion: boolean
    59	}[] {
    60	  return harnessProviders.all().map((provider) => ({
    61	    id: provider.manifest.id,
    62	    profileContractVersion: provider.profile.version,
    63	    defaultProfileId: provider.profile.defaultProfile?.id,
    64	    artifactInputs: {
    65	      executable: provider.profile.artifactExecutable,
    66	      environmentKeys: provider.profile.artifactEnvironmentKeys,
    67	      pathBindings: provider.profile.artifactPathBindings,
    68	    },
    69	    probeInvokesVersion: provider.probe.versionArgs !== undefined,
    70	  }))
    71	}
<shellId: 25 completed with exit code 0>
```

</details>


### `bash`

**Number project host exports**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/index.ts | sed -n '1,160p'

<details>
<summary>53 lines</summary>

```
1	export type {
     2	  Disposer,
     3	  ExecOptions,
     4	  ExecStreamHandle,
     5	  ExclusiveCreateOptions,
     6	  ProjectFileMetadataOptions,
     7	  ProjectFileMode,
     8	  ProjectFileRenameOptions,
     9	  ProjectFileStreamOptions,
    10	  ProjectFileTransferPort,
    11	  ProjectFileWriteStreamOptions,
    12	  ProjectHost,
    13	  PtyExit,
    14	  PtyProcess,
    15	  ReadFileOptions,
    16	  RemoveFileOptions,
    17	  SpawnPtyOptions,
    18	  WatchOptions,
    19	  WriteFileOptions,
    20	} from './project-host'
    21	export {
    22	  assertLoopbackEndpoint,
    23	  isProjectPathExistsError,
    24	  MAX_EXEC_STREAM_WRITE_BYTES,
    25	  PROJECT_FILE_STREAM_CHUNK_BYTES,
    26	  isPtyWriteIndeterminateError,
    27	  ProjectPathExistsError,
    28	  PtyWriteIndeterminateError,
    29	} from './project-host'
    30	export { LocalHost } from './local-host'
    31	export { electronTrash } from './electron-project-trash'
    32	export { SshHost } from './ssh-host'
    33	export {
    34	  SSH_CONTROL_CHANNEL_BUDGET,
    35	  SSH_DEFAULT_MAX_CONCURRENT_EXECS,
    36	  SSH_MAX_CONTROL_TRANSPORTS,
    37	  SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS,
    38	  SSH_MAX_PHYSICAL_TRANSPORTS,
    39	  SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS,
    40	  SSH_TERMINAL_CHANNEL_BUDGET,
    41	  SSH_TRANSPORT_IDLE_GRACE_MS,
    42	} from './ssh-host'
    43	export type { SshTransportDiagnostic } from './ssh-host'
    44	export type { SshAuthPrompter, SshPrompt } from './ssh-auth'
    45	export type { SshHostOptions } from './ssh-host-options'
    46	export type { SshIdentitySource } from './ssh-identity-source'
    47	export { ProjectHostCatalog, identityFileCandidates } from './project-host-catalog'
    48	export { RendererSshPrompter } from './renderer-ssh-prompter'
    49	export { SshHostTrustStore } from './ssh-host-trust'
    50	export type { SshHostTrust } from './ssh-host-trust'
    51	export { parseSshConfig } from './ssh-config'
    52	export type { SshAliasConfig } from './ssh-config'
<shellId: 26 completed with exit code 0>
```

</details>


### `bash`

**Number project host catalog**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/project-host-catalog.ts | sed -n '1,220p'

<details>
<summary>221 lines</summary>

```
1	import { homedir } from 'node:os'
     2	import { join } from 'node:path'
     3	
     4	import { localPath, type HostPath, type ProjectHostOption } from '../../shared'
     5	import { LocalHost } from './local-host'
     6	import type { Disposer, ProjectHost } from './project-host'
     7	import type { SshAuthPrompter } from './ssh-auth'
     8	import { parseSshConfig, type SshAliasConfig } from './ssh-config'
     9	import { SshHost } from './ssh-host'
    10	import { SshHostTrustStore } from './ssh-host-trust'
    11	import { LocalSshIdentitySource } from './ssh-identity-source'
    12	
    13	export interface ProjectHostCatalogOptions {
    14	  readonly prompter: SshAuthPrompter
    15	  readonly trustFile: HostPath
    16	  readonly home?: string
    17	  readonly agentSocket?: string
    18	  readonly trashItem?: (path: HostPath) => Promise<void>
    19	}
    20	
    21	/** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
    22	export class ProjectHostCatalog {
    23	  readonly local: LocalHost
    24	  private readonly hosts = new Map<string, ProjectHost>()
    25	  private readonly pendingHosts = new Map<string, Promise<ProjectHost>>()
    26	  private readonly hostStateDisposers = new Map<string, Disposer>()
    27	  private readonly listeners = new Set<() => void>()
    28	  private disposed = false
    29	  private disposal?: Promise<void>
    30	
    31	  private constructor(
    32	    local: LocalHost,
    33	    private readonly aliases: readonly SshAliasConfig[],
    34	    private readonly prompter: SshAuthPrompter,
    35	    private readonly trust: SshHostTrustStore,
    36	    private readonly home: string,
    37	    private readonly agentSocket: string | undefined,
    38	  ) {
    39	    this.local = local
    40	    this.hosts.set(local.hostId, local)
    41	  }
    42	
    43	  static async create(options: ProjectHostCatalogOptions): Promise<ProjectHostCatalog> {
    44	    const local = new LocalHost({ trashItem: options.trashItem })
    45	    try {
    46	      await local.connect()
    47	      const home = options.home ?? homedir()
    48	      const aliases = await loadSshAliases(local, home)
    49	      const trust = await SshHostTrustStore.load(local, options.trustFile)
    50	      return new ProjectHostCatalog(
    51	        local,
    52	        aliases,
    53	        options.prompter,
    54	        trust,
    55	        home,
    56	        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
    57	      )
    58	    } catch (error) {
    59	      await local.dispose()
    60	      throw error
    61	    }
    62	  }
    63	
    64	  onHostStateChange(listener: () => void): Disposer {
    65	    this.listeners.add(listener)
    66	    return () => {
    67	      this.listeners.delete(listener)
    68	    }
    69	  }
    70	
    71	  listHosts(): readonly ProjectHostOption[] {
    72	    return [
    73	      hostOption(this.local, 'Local', 'local'),
    74	      ...this.aliases.map((config) => {
    75	        const host = this.hosts.get(config.alias)
    76	        return host
    77	          ? hostOption(host, config.alias, 'ssh')
    78	          : {
    79	              hostId: config.alias,
    80	              label: config.alias,
    81	              kind: 'ssh' as const,
    82	              connectionState: 'disconnected' as const,
    83	              watchTier: 'polling' as const,
    84	            }
    85	      }),
    86	    ]
    87	  }
    88	
    89	  hostById(hostId: string): ProjectHost | undefined {
    90	    return this.hosts.get(hostId)
    91	  }
    92	
    93	  connectedHosts(): readonly ProjectHost[] {
    94	    return [...this.hosts.values()].filter(
    95	      ({ connectionState }) => connectionState === 'connected',
    96	    )
    97	  }
    98	
    99	  materializeHost(hostId: string): Promise<ProjectHost> {
   100	    if (this.disposed)
   101	      return Promise.reject(new Error('Project host catalog is disposed'))
   102	    const existing = this.hosts.get(hostId)
   103	    if (existing) return Promise.resolve(existing)
   104	    const pending = this.pendingHosts.get(hostId)
   105	    if (pending) return pending
   106	    const creation = Promise.resolve()
   107	      .then(() => this.createSshHost(hostId))
   108	      .finally(() => {
   109	        if (this.pendingHosts.get(hostId) === creation) this.pendingHosts.delete(hostId)
   110	      })
   111	    this.pendingHosts.set(hostId, creation)
   112	    return creation
   113	  }
   114	
   115	  async disconnectHost(hostId: string): Promise<ProjectHostOption> {
   116	    if (hostId === this.local.hostId) throw new Error('The local host cannot disconnect')
   117	    const host = this.hosts.get(hostId)
   118	    if (!host) throw new Error(`SSH host is not connected: ${hostId}`)
   119	    await host.dispose()
   120	    return hostOption(host, hostId, 'ssh')
   121	  }
   122	
   123	  async disconnectSshHosts(): Promise<void> {
   124	    await Promise.all(
   125	      [...this.hosts.values()]
   126	        .filter((host) => host.hostId !== this.local.hostId)
   127	        .map((host) => host.dispose()),
   128	    )
   129	  }
   130	
   131	  dispose(): Promise<void> {
   132	    if (this.disposal) return this.disposal
   133	    this.disposed = true
   134	    this.disposal = this.disposeOwnedHosts()
   135	    return this.disposal
   136	  }
   137	
   138	  private async disposeOwnedHosts(): Promise<void> {
   139	    await Promise.all(
   140	      [...this.pendingHosts.values()].map((pending) => pending.catch(() => undefined)),
   141	    )
   142	    for (const dispose of this.hostStateDisposers.values()) await dispose()
   143	    this.hostStateDisposers.clear()
   144	    await Promise.all([...this.hosts.values()].map((host) => host.dispose()))
   145	    this.listeners.clear()
   146	  }
   147	
   148	  private createSshHost(hostId: string): ProjectHost {
   149	    const config = this.aliases.find((candidate) => candidate.alias === hostId)
   150	    if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
   151	    if (this.disposed) throw new Error('Project host catalog is disposed')
   152	    const existing = this.hosts.get(hostId)
   153	    if (existing) return existing
   154	    const host = new SshHost({
   155	      config,
   156	      identitySource: new LocalSshIdentitySource(
   157	        this.local,
   158	        identityFileCandidates(config, this.home),
   159	      ),
   160	      agentSocket: this.agentSocket,
   161	      prompter: this.prompter,
   162	      trust: this.trust.forAlias(config.alias),
   163	    })
   164	    this.hosts.set(hostId, host)
   165	    this.hostStateDisposers.set(
   166	      hostId,
   167	      host.onConnectionState(() => {
   168	        for (const listener of this.listeners) listener()
   169	      }),
   170	    )
   171	    return host
   172	  }
   173	}
   174	
   175	const DEFAULT_IDENTITY_NAMES = [
   176	  'id_rsa',
   177	  'id_ecdsa',
   178	  'id_ecdsa_sk',
   179	  'id_ed25519',
   180	  'id_ed25519_sk',
   181	  'id_xmss',
   182	  'id_dsa',
   183	] as const
   184	
   185	/** OpenSSH's conventional identity set applies when no IdentityFile is configured. */
   186	export function identityFileCandidates(
   187	  config: SshAliasConfig,
   188	  home = homedir(),
   189	): readonly string[] {
   190	  if (config.identityFiles.length) return [...new Set(config.identityFiles)]
   191	  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
   192	}
   193	
   194	async function loadSshAliases(
   195	  host: LocalHost,
   196	  home: string,
   197	): Promise<readonly SshAliasConfig[]> {
   198	  try {
   199	    return parseSshConfig(
   200	      await host.readTextFile(localPath(join(home, '.ssh/config'))),
   201	      home,
   202	    )
   203	  } catch {
   204	    return []
   205	  }
   206	}
   207	
   208	function hostOption(
   209	  host: ProjectHost,
   210	  label: string,
   211	  kind: 'local' | 'ssh',
   212	): ProjectHostOption {
   213	  return {
   214	    hostId: host.hostId,
   215	    label,
   216	    kind,
   217	    connectionState: host.connectionState,
   218	    watchTier: host.watchTier,
   219	  }
   220	}
<shellId: 27 completed with exit code 0>
```

</details>


### `bash`

**Number ssh config parser**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-config.ts | sed -n '1,120p'

<details>
<summary>49 lines</summary>

```
1	import SSHConfig from 'ssh-config'
     2	
     3	export interface SshAliasConfig {
     4	  readonly alias: string
     5	  readonly hostname: string
     6	  readonly user: string
     7	  readonly port: number
     8	  readonly identityFiles: readonly string[]
     9	}
    10	
    11	export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
    12	  const parsed = SSHConfig.parse(text)
    13	  const aliases = parsed.flatMap((line): string[] => {
    14	    if (!('param' in line) || !('config' in line)) return []
    15	    const section = line
    16	    if (section.param.toLowerCase() !== 'host') return []
    17	    const value =
    18	      typeof section.value === 'string'
    19	        ? section.value
    20	        : section.value.map((part) => part.val).join(' ')
    21	    return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
    22	  })
    23	  return [...new Set(aliases)].map((alias) => {
    24	    const values = parsed.compute(alias, { ignoreCase: true, matchExec: false })
    25	    const one = (value: string | string[] | undefined): string | undefined =>
    26	      Array.isArray(value) ? value[0] : value
    27	    const hostname = one(values['hostname']) ?? alias
    28	    const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
    29	    const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
    30	    const rawIdentity = values['identityfile']
    31	    const identityFiles = (
    32	      Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
    33	    ).map((path) =>
    34	      path
    35	        .replace(/^~(?=\/|$)/, home)
    36	        .replaceAll('%d', home)
    37	        .replaceAll('%h', hostname)
    38	        .replaceAll('%r', user),
    39	    )
    40	    return {
    41	      alias,
    42	      hostname,
    43	      user,
    44	      port: Number.isFinite(rawPort) ? rawPort : 22,
    45	      identityFiles,
    46	    }
    47	  })
    48	}
<shellId: 28 completed with exit code 0>
```

</details>


### `bash`

**Number ssh transport pool**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/main/project-host/ssh-transport-pool.ts | sed -n '1,120p'

<details>
<summary>121 lines</summary>

```
1	import { type Client, type ClientChannel, type SFTPWrapper } from 'ssh2'
     2	
     3	import type { Disposer } from './project-host'
     4	
     5	export const SSH_MAX_PHYSICAL_TRANSPORTS = 8
     6	export const SSH_MAX_CONTROL_TRANSPORTS = 2
     7	export const SSH_CONTROL_CHANNEL_BUDGET = 6
     8	export const SSH_TERMINAL_CHANNEL_BUDGET = 8
     9	export const SSH_TUNNEL_CHANNEL_BUDGET = 16
    10	export const SSH_MAX_TUNNEL_TRANSPORTS = 2
    11	export const SSH_TRANSPORT_IDLE_GRACE_MS = 5 * 60_000
    12	
    13	const SSH_CHANNEL_OPEN_ATTEMPTS = 5
    14	
    15	export type SshTransportRole = 'control' | 'terminal' | 'tunnel'
    16	
    17	interface SshTransport {
    18	  readonly id: number
    19	  readonly role: SshTransportRole
    20	  readonly client: Client
    21	  readonly primary: boolean
    22	  readonly channels: Set<ClientChannel>
    23	  readonly failureListeners: Set<() => void>
    24	  pendingChannels: number
    25	  readonly channelBudget: number
    26	  sftpActive: boolean
    27	  closed: boolean
    28	  idleTimer?: ReturnType<typeof setTimeout>
    29	}
    30	
    31	interface SshTransportReservation {
    32	  readonly transport: SshTransport
    33	  release(): void
    34	}
    35	
    36	export interface SshTransportDiagnostic {
    37	  readonly id: number
    38	  readonly role: SshTransportRole
    39	  readonly primary: boolean
    40	  readonly channels: number
    41	  readonly pendingChannels: number
    42	  readonly channelBudget: number
    43	  readonly refusedChannels: number
    44	}
    45	
    46	export interface SshTransportPoolOwner {
    47	  connected(): Promise<Client>
    48	  assertTransportGrowthAllowed(role: SshTransportRole): void
    49	  openAuxiliaryTransport(role: SshTransportRole): Promise<Client>
    50	  lifecycleSignal(): AbortSignal
    51	}
    52	
    53	/**
    54	 * Singular channel-capacity authority for one logical SshHost. It owns every
    55	 * physical transport and channel lease but delegates authentication to the
    56	 * host's one connection lifecycle.
    57	 */
    58	export class SshTransportPool {
    59	  private readonly channels = new Set<ClientChannel>()
    60	  private readonly transports = new Set<SshTransport>()
    61	  private nextTransportId = 1
    62	  private transportGrowthTail: Promise<void> = Promise.resolve()
    63	  private readonly refusedChannels = new Map<number, number>()
    64	
    65	  constructor(private readonly owner: SshTransportPoolOwner) {}
    66	
    67	  diagnostics(): readonly SshTransportDiagnostic[] {
    68	    return [...this.transports]
    69	      .filter((transport) => !transport.closed)
    70	      .map((transport) => ({
    71	        id: transport.id,
    72	        role: transport.role,
    73	        primary: transport.primary,
    74	        channels: transport.channels.size + (transport.sftpActive ? 1 : 0),
    75	        pendingChannels: transport.pendingChannels,
    76	        channelBudget: transport.channelBudget,
    77	        refusedChannels: this.refusedChannels.get(transport.id) ?? 0,
    78	      }))
    79	      .sort((a, b) => a.id - b.id)
    80	  }
    81	
    82	  registerPrimary(client: Client): void {
    83	    this.registerTransport('control', client, true)
    84	  }
    85	
    86	  retireClient(client: Client): void {
    87	    const transport = this.transportForClient(client)
    88	    if (transport) this.retireTransport(transport)
    89	  }
    90	
    91	  async openChannel(
    92	    role: SshTransportRole,
    93	    open: (client: Client) => Promise<ClientChannel>,
    94	    signal?: AbortSignal,
    95	    channelOpenAttempts = SSH_CHANNEL_OPEN_ATTEMPTS,
    96	  ): Promise<ClientChannel> {
    97	    const { value: channel, reservation } = await this.openWithChannelRetry(
    98	      role,
    99	      (transport) => open(transport.client),
   100	      signal,
   101	      channelOpenAttempts,
   102	    )
   103	    this.activateChannel(reservation, channel)
   104	    return channel
   105	  }
   106	
   107	  async openSftp(): Promise<SFTPWrapper> {
   108	    const { value: session, reservation } = await this.openWithChannelRetry(
   109	      'control',
   110	      (transport) =>
   111	        new Promise<SFTPWrapper>((resolve, reject) => {
   112	          try {
   113	            transport.client.sftp((error, value) =>
   114	              error ? reject(error) : resolve(value),
   115	            )
   116	          } catch (error) {
   117	            reject(asError(error))
   118	          }
   119	        }),
   120	    )
<shellId: 29 completed with exit code 0>
```

</details>


### `bash`

**Number projects bar**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/workspaces/ProjectsBar.tsx | sed -n '1,180p'

<details>
<summary>181 lines</summary>

```
1	import { useEffect, useRef, useState, type ReactElement } from 'react'
     2	
     3	import {
     4	  displayHostPath,
     5	  type ProjectState,
     6	  type RegisteredProjectState,
     7	  type HostWatchTier,
     8	  type WorkspaceState,
     9	  type WorkspaceClosePlan,
    10	} from '../../../shared'
    11	import { RemoteConnectionBadge } from './ConnectionStatus'
    12	import { connectionStateLabel } from './connection-status'
    13	import type { WorkspaceAttentionRollups } from './project-session-model'
    14	import {
    15	  aggregateActionableWorkspaceAttention,
    16	  aggregateWorkingWorkspaceTerminals,
    17	  workspaceActionableAttention,
    18	} from './workspace-attention'
    19	import type { AppTheme } from '../theme'
    20	import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
    21	import {
    22	  closeOnMiddleClick,
    23	  guardMiddleClickClosePointerDown,
    24	} from '../workbench/middle-click-close'
    25	import { WorkbenchHealthControl } from '../health/WorkbenchHealthControl'
    26	import { ClosedWorktreesDialog, CloseWorkspaceDialog } from './WorkspaceCatalogDialogs'
    27	
    28	interface ProjectsBarProps {
    29	  readonly state: ProjectState
    30	  readonly rollups: WorkspaceAttentionRollups
    31	  readonly busy: boolean
    32	  readonly onAdd: () => void
    33	  readonly onSwitch: (projectId: string, workspaceId: string) => void
    34	  readonly onRefresh: (projectId: string) => void
    35	  readonly onCloseProject: (projectId: string) => void
    36	  readonly onPrune: (projectId: string) => void
    37	  readonly onDismiss: (projectId: string, workspaceId: string) => void
    38	  readonly onPlanCloseWorkspace: (
    39	    projectId: string,
    40	    workspaceId: string,
    41	  ) => Promise<WorkspaceClosePlan | undefined>
    42	  readonly onCloseWorkspace: (
    43	    projectId: string,
    44	    workspaceId: string,
    45	    plan: WorkspaceClosePlan,
    46	    terminateTerminals: boolean,
    47	  ) => void
    48	  readonly onReopenWorkspace: (projectId: string, workspaceId: string) => void
    49	  readonly watchTier: HostWatchTier
    50	  readonly statusError?: string
    51	  readonly onChangeConnection: () => void
    52	  readonly onDisconnect: () => void
    53	  readonly onReconnect: () => void
    54	  readonly theme: AppTheme
    55	  readonly onTheme: (theme: AppTheme) => void
    56	  readonly onSettings: () => void
    57	  readonly sessionsActive: boolean
    58	  readonly onSessions: () => void
    59	}
    60	
    61	export function ProjectsBar({
    62	  state,
    63	  rollups,
    64	  busy,
    65	  onAdd,
    66	  onSwitch,
    67	  onRefresh,
    68	  onCloseProject,
    69	  onPrune,
    70	  onDismiss,
    71	  onPlanCloseWorkspace,
    72	  onCloseWorkspace,
    73	  onReopenWorkspace,
    74	  watchTier,
    75	  statusError,
    76	  onChangeConnection,
    77	  onDisconnect,
    78	  onReconnect,
    79	  theme,
    80	  onTheme,
    81	  onSettings,
    82	  sessionsActive,
    83	  onSessions,
    84	}: ProjectsBarProps): ReactElement {
    85	  const [pruneProjectId, setPruneProjectId] = useState<string>()
    86	  const [closeProjectId, setCloseProjectId] = useState<string>()
    87	  const [catalogProjectId, setCatalogProjectId] = useState<string>()
    88	  const [planningWorkspaceId, setPlanningWorkspaceId] = useState<string>()
    89	  const [closeWorkspaceRequest, setCloseWorkspaceRequest] = useState<{
    90	    readonly projectId: string
    91	    readonly workspaceId: string
    92	    readonly plan: WorkspaceClosePlan
    93	  }>()
    94	  const [connectionMenu, setConnectionMenu] = useState<{
    95	    readonly projectId: string
    96	    readonly left: number
    97	    readonly top: number
    98	  }>()
    99	  const connectionMenuRef = useRef<HTMLElement>(null)
   100	  const activeProject = state.projects.find(
   101	    (project) => project.id === state.activeProjectId,
   102	  )
   103	  const prunable =
   104	    activeProject?.workspaces.filter(
   105	      (workspace) => workspace.prunableReason !== undefined,
   106	    ) ?? []
   107	  const openWorkspaces =
   108	    activeProject?.workspaces.filter((workspace) => !workspace.closed) ?? []
   109	  const closedWorkspaces =
   110	    activeProject?.workspaces.filter((workspace) => workspace.closed) ?? []
   111	  // A single-checkout project has nothing to switch between; reclaim the row.
   112	  // Errors and prune prompts still force the bar because it is their only home.
   113	  const showWorkspacesBar =
   114	    activeProject !== undefined &&
   115	    (openWorkspaces.length > 1 ||
   116	      closedWorkspaces.length > 0 ||
   117	      Boolean(statusError) ||
   118	      prunable.length > 0)
   119	  const pruneProject = state.projects.find((project) => project.id === pruneProjectId)
   120	  const closeProject = state.projects.find((project) => project.id === closeProjectId)
   121	  const catalogProject = state.projects.find((project) => project.id === catalogProjectId)
   122	  const catalogWorkspaces =
   123	    catalogProject?.workspaces.filter((workspace) => workspace.closed) ?? []
   124	  const closeWorkspace = closeWorkspaceRequest
   125	    ? state.projects
   126	        .find((project) => project.id === closeWorkspaceRequest.projectId)
   127	        ?.workspaces.find(
   128	          (workspace) => workspace.id === closeWorkspaceRequest.workspaceId,
   129	        )
   130	    : undefined
   131	  const pruneTargets =
   132	    pruneProject?.workspaces.filter(
   133	      (workspace) => workspace.prunableReason !== undefined,
   134	    ) ?? []
   135	  const connectionProject =
   136	    activeProject?.id === connectionMenu?.projectId ? activeProject : undefined
   137	  useEffect(() => {
   138	    setConnectionMenu((current) =>
   139	      current && current.projectId !== state.activeProjectId ? undefined : current,
   140	    )
   141	  }, [state.activeProjectId])
   142	  useEffect(() => {
   143	    setCatalogProjectId((current) =>
   144	      current === state.activeProjectId ? current : undefined,
   145	    )
   146	    setCloseWorkspaceRequest((current) =>
   147	      current?.projectId === state.activeProjectId ? current : undefined,
   148	    )
   149	  }, [state.activeProjectId])
   150	  useEffect(() => {
   151	    if (!connectionMenu) return
   152	    const handleKeyDown = (event: KeyboardEvent): void => {
   153	      if (event.key === 'Escape') setConnectionMenu(undefined)
   154	    }
   155	    window.addEventListener('keydown', handleKeyDown)
   156	    connectionMenuRef.current?.focus()
   157	    return () => window.removeEventListener('keydown', handleKeyDown)
   158	  }, [connectionMenu])
   159	  const canCloseWorkspace = (workspace: WorkspaceState): boolean =>
   160	    !busy &&
   161	    !workspace.missing &&
   162	    workspace.id !== state.activeWorkspaceId &&
   163	    planningWorkspaceId !== workspace.id
   164	  const requestWorkspaceClose = (projectId: string, workspace: WorkspaceState): void => {
   165	    if (!canCloseWorkspace(workspace)) return
   166	    setPlanningWorkspaceId(workspace.id)
   167	    void onPlanCloseWorkspace(projectId, workspace.id)
   168	      .then((plan) => {
   169	        if (!plan) return
   170	        if (plan.terminalCount > 0) {
   171	          setCloseWorkspaceRequest({
   172	            projectId,
   173	            workspaceId: workspace.id,
   174	            plan,
   175	          })
   176	        } else {
   177	          onCloseWorkspace(projectId, workspace.id, plan, false)
   178	        }
   179	      })
   180	      .finally(() => setPlanningWorkspaceId(undefined))
<shellId: 30 completed with exit code 0>
```

</details>


### `bash`

**Number sessions overview**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/sessions/SessionsOverview.tsx | sed -n '1,180p'

<details>
<summary>181 lines</summary>

```
1	import {
     2	  useCallback,
     3	  useEffect,
     4	  useLayoutEffect,
     5	  useMemo,
     6	  useRef,
     7	  useState,
     8	  useSyncExternalStore,
     9	  type KeyboardEvent as ReactKeyboardEvent,
    10	  type ReactElement,
    11	} from 'react'
    12	
    13	import type {
    14	  ProjectState,
    15	  SessionsLivePtyQualifier,
    16	  SessionsOpenUnavailableReason,
    17	  SessionsProjectionRow,
    18	  SessionsTerminalHandle,
    19	  SessionsWorkspaceQualifier,
    20	} from '../../../shared'
    21	import { SessionsOverviewCard } from './SessionsOverviewCard'
    22	import { SessionsOverviewNotice } from './SessionsOverviewNotice'
    23	import { SessionsCollectionToolbar } from './SessionsCollectionToolbar'
    24	import { SessionsTerminalDetail } from './SessionsTerminalDetail'
    25	import {
    26	  SessionsProjectionCoordinator,
    27	  createSessionsMainObservationPort,
    28	} from './sessions-projection-coordinator'
    29	import type { SessionsRendererObservationPort } from './sessions-renderer-observation'
    30	import { sessionsTerminalOverlayOrigin } from './sessions-terminal-overlay'
    31	import {
    32	  sessionsTerminalSurfaceEligible,
    33	  type SessionsTerminalSurfacePort,
    34	} from './sessions-terminal-surface'
    35	import { useSessionsForeground } from './use-sessions-foreground'
    36	import { useSessionsTerminalDetail } from './use-sessions-terminal-detail'
    37	import {
    38	  DEFAULT_SESSIONS_OVERVIEW_POLICY,
    39	  SESSIONS_OVERVIEW_PAGE_SIZE,
    40	  sessionsOverviewFocusFallback,
    41	  sessionsOverviewCardIdentity,
    42	  sessionsOverviewGroups,
    43	  sessionsOverviewPage,
    44	  sessionsOverviewPolicyLabel,
    45	  sessionsOverviewRows,
    46	  sessionsOverviewWorkspaces,
    47	  type SessionsOverviewPolicy,
    48	} from './sessions-overview-model'
    49	
    50	interface SessionsOverviewProps {
    51	  readonly observation: SessionsRendererObservationPort
    52	  readonly surface: SessionsTerminalSurfacePort
    53	  readonly onOpened: (state: ProjectState) => void
    54	  readonly onFocusOpened: (
    55	    handle: SessionsTerminalHandle,
    56	    workspaceQualifier: SessionsWorkspaceQualifier,
    57	    livePty: SessionsLivePtyQualifier,
    58	  ) => Promise<boolean>
    59	  readonly onOpenFailed: (message: string) => void
    60	}
    61	
    62	export function SessionsOverview({
    63	  observation,
    64	  surface,
    65	  onOpened,
    66	  onFocusOpened,
    67	  onOpenFailed,
    68	}: SessionsOverviewProps): ReactElement {
    69	  const coordinator = useRef<SessionsProjectionCoordinator | undefined>(undefined)
    70	  coordinator.current ??= new SessionsProjectionCoordinator(
    71	    createSessionsMainObservationPort(window.hvir),
    72	    observation,
    73	  )
    74	  const source = coordinator.current
    75	  const foreground = useSessionsForeground()
    76	  const snapshot = useSyncExternalStore(
    77	    source.subscribe,
    78	    source.snapshot,
    79	    source.snapshot,
    80	  )
    81	  const { controller: detail, state: detailState } = useSessionsTerminalDetail({
    82	    surface,
    83	    snapshot,
    84	    foreground,
    85	  })
    86	  const [policy, setPolicy] = useState<SessionsOverviewPolicy>(
    87	    DEFAULT_SESSIONS_OVERVIEW_POLICY,
    88	  )
    89	  const [selected, setSelected] = useState<SessionsTerminalHandle>()
    90	  const [feedback, setFeedback] = useState<string>()
    91	  const [opening, setOpening] = useState<SessionsTerminalHandle>()
    92	  const detailOrigin = useRef<ReturnType<typeof sessionsTerminalOverlayOrigin>>(undefined)
    93	  const [pageIndex, setPageIndex] = useState(0)
    94	  const previousOrder = useRef<readonly SessionsTerminalHandle[]>([])
    95	  const pendingFocus = useRef<SessionsTerminalHandle | undefined>(undefined)
    96	  const rowElements = useRef(new Map<SessionsTerminalHandle, HTMLElement>())
    97	  const collectionControl = useRef<HTMLButtonElement>(null)
    98	  const openGeneration = useRef(0)
    99	
   100	  useEffect(() => {
   101	    if (!foreground) return
   102	    const release = source.acquire()
   103	    return release
   104	  }, [foreground, source])
   105	  useEffect(() => {
   106	    if (foreground) return
   107	    openGeneration.current += 1
   108	    rowElements.current.clear()
   109	    setOpening(undefined)
   110	    detailOrigin.current = undefined
   111	    setFeedback(undefined)
   112	    pendingFocus.current = undefined
   113	  }, [foreground])
   114	  useEffect(
   115	    () => () => {
   116	      openGeneration.current += 1
   117	    },
   118	    [],
   119	  )
   120	
   121	  const allGroups = useMemo(
   122	    () => sessionsOverviewGroups(snapshot.rows, policy),
   123	    [policy, snapshot.rows],
   124	  )
   125	  const rows = useMemo(() => sessionsOverviewRows(allGroups), [allGroups])
   126	  const handles = useMemo(() => rows.map((row) => row.handle), [rows])
   127	  const page = useMemo(
   128	    () => sessionsOverviewPage(allGroups, pageIndex),
   129	    [allGroups, pageIndex],
   130	  )
   131	  useEffect(() => {
   132	    if (!foreground || snapshot.status !== 'available') return
   133	    if (page.pageIndex !== pageIndex) setPageIndex(page.pageIndex)
   134	  }, [foreground, page.pageIndex, pageIndex, snapshot.status])
   135	  useEffect(() => {
   136	    if (!foreground || snapshot.status !== 'available') return
   137	    const selectedDisappeared = selected !== undefined && !handles.includes(selected)
   138	    const next = sessionsOverviewFocusFallback(previousOrder.current, handles, selected)
   139	    previousOrder.current = handles
   140	    const nextIndex = next ? handles.indexOf(next) : -1
   141	    if (nextIndex >= 0) {
   142	      const nextPage = Math.floor(nextIndex / SESSIONS_OVERVIEW_PAGE_SIZE)
   143	      if (nextPage !== pageIndex) setPageIndex(nextPage)
   144	    }
   145	    if (next !== selected) {
   146	      setSelected(next)
   147	    }
   148	    if (selectedDisappeared && document.activeElement === document.body) {
   149	      if (next) pendingFocus.current = next
   150	      else collectionControl.current?.focus()
   151	    }
   152	  }, [foreground, handles, pageIndex, selected, snapshot.status])
   153	  useEffect(() => {
   154	    const handle = pendingFocus.current
   155	    if (!handle || !page.rows.some((row) => row.handle === handle)) return
   156	    pendingFocus.current = undefined
   157	    rowElements.current.get(handle)?.focus()
   158	  }, [page.rows])
   159	  useLayoutEffect(() => {
   160	    if (detailState.status !== 'inactive') return
   161	    const handle = pendingFocus.current
   162	    if (!handle) return
   163	    pendingFocus.current = undefined
   164	    const row = rowElements.current.get(handle)
   165	    if (row) row.focus()
   166	    else collectionControl.current?.focus()
   167	  }, [detailState.status])
   168	
   169	  const updatePolicy = <K extends keyof SessionsOverviewPolicy>(
   170	    key: K,
   171	    value: SessionsOverviewPolicy[K],
   172	  ): void => {
   173	    setPolicy((current) => ({ ...current, [key]: value }))
   174	    setSelected(undefined)
   175	    setPageIndex(0)
   176	    setFeedback(undefined)
   177	  }
   178	
   179	  const open = useCallback(
   180	    async (row: SessionsProjectionRow): Promise<void> => {
<shellId: 31 completed with exit code 0>
```

</details>


### `bash`

**Number settings dialog**

$ nl -ba /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/settings/SettingsDialog.tsx | sed -n '1,180p'

<details>
<summary>142 lines</summary>

```
1	import { useCallback, useEffect, useRef, type ReactElement } from 'react'
     2	
     3	import type { HostPath } from '../../../shared'
     4	import type { AppTheme } from '../theme'
     5	import { ComposerSubmitConsentDialog } from './ComposerSubmitConsentDialog'
     6	import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
     7	import { SettingsActiveSection } from './SettingsActiveSection'
     8	import { SettingsSectionNavigation } from './SettingsSectionNavigation'
     9	import type { AppSettings } from './settings'
    10	import {
    11	  DEFAULT_SETTINGS_DESTINATION,
    12	  settingsSectionHeadingId,
    13	  type SettingsDestination,
    14	} from './settings-navigation'
    15	import { useSettingsController } from './use-settings-controller'
    16	
    17	interface SettingsDialogProps {
    18	  readonly theme: AppTheme
    19	  readonly settings: AppSettings
    20	  readonly onSave: (theme: AppTheme, settings: AppSettings) => void
    21	  readonly onClose: () => void
    22	  readonly workspaceRoot?: HostPath
    23	  readonly projectRoot?: HostPath
    24	  readonly initialDestination?: SettingsDestination
    25	}
    26	
    27	export function SettingsDialog({
    28	  theme,
    29	  settings,
    30	  onSave,
    31	  onClose,
    32	  workspaceRoot,
    33	  projectRoot,
    34	  initialDestination = DEFAULT_SETTINGS_DESTINATION,
    35	}: SettingsDialogProps): ReactElement {
    36	  const dialog = useRef<HTMLElement>(null)
    37	  const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
    38	  const confirmSafeToLeaveHarnesses = useCallback(
    39	    () => harnessProfiles.current?.confirmSafeToLeave() ?? Promise.resolve(true),
    40	    [],
    41	  )
    42	  const controller = useSettingsController({
    43	    theme,
    44	    settings,
    45	    initialDestination,
    46	    confirmSafeToLeaveHarnesses,
    47	    onSave,
    48	    onClose,
    49	  })
    50	  const requestClose = controller.requestClose
    51	
    52	  useEffect(() => {
    53	    if (initialDestination.intent === 'add-harness') return
    54	    const frame = window.requestAnimationFrame(() => {
    55	      if (initialDestination.section === 'appearance') dialog.current?.focus()
    56	      else
    57	        document
    58	          .getElementById(settingsSectionHeadingId(initialDestination.section))
    59	          ?.focus()
    60	    })
    61	    return () => window.cancelAnimationFrame(frame)
    62	  }, [initialDestination])
    63	
    64	  useEffect(() => {
    65	    const keydown = (event: KeyboardEvent): void => {
    66	      if (dialog.current?.querySelector('.modal-backdrop.nested')) return
    67	      if (event.key === 'Escape' && !(event.target instanceof HTMLTextAreaElement)) {
    68	        requestClose()
    69	      }
    70	    }
    71	    window.addEventListener('keydown', keydown)
    72	    return () => window.removeEventListener('keydown', keydown)
    73	  }, [requestClose])
    74	
    75	  const statusMessage = controller.validation?.message ?? controller.saveError
    76	
    77	  return (
    78	    <div className="modal-backdrop">
    79	      <section
    80	        className="project-dialog settings-dialog"
    81	        ref={dialog}
    82	        role="dialog"
    83	        aria-modal="true"
    84	        aria-labelledby="settings-title"
    85	        tabIndex={-1}
    86	      >
    87	        <header className="settings-shell-heading">
    88	          <div>
    89	            <span>Workbench preferences</span>
    90	            <h2 id="settings-title">Settings</h2>
    91	          </div>
    92	          <p>Keep hvir focused, legible, and tuned to the way you work.</p>
    93	        </header>
    94	        <div className="settings-shell-body">
    95	          <SettingsSectionNavigation
    96	            activeSection={controller.activeSection}
    97	            onSelect={controller.requestSection}
    98	          />
    99	          <div className="settings-content">
   100	            <SettingsActiveSection
   101	              activeSection={controller.activeSection}
   102	              draft={controller.draft}
   103	              validation={controller.validation}
   104	              harnessProfiles={harnessProfiles}
   105	              workspaceRoot={workspaceRoot}
   106	              projectRoot={projectRoot}
   107	              initialAddOpen={controller.initialAddOpen}
   108	              onChange={controller.updateDraft}
   109	              onComposerSubmitMode={controller.requestComposerSubmitMode}
   110	            />
   111	          </div>
   112	        </div>
   113	        <footer className="settings-footer">
   114	          <div className="settings-footer-status" aria-live="polite">
   115	            {statusMessage ? (
   116	              <p className="dialog-error" role="alert">
   117	                {statusMessage}
   118	              </p>
   119	            ) : (
   120	              <span>App preferences apply together when saved.</span>
   121	            )}
   122	          </div>
   123	          <div className="dialog-actions">
   124	            <button type="button" onClick={controller.requestClose}>
   125	              Close settings
   126	            </button>
   127	            <button type="button" onClick={() => void controller.save()}>
   128	              Save app settings
   129	            </button>
   130	          </div>
   131	        </footer>
   132	      </section>
   133	      {controller.composerConsentOpen ? (
   134	        <ComposerSubmitConsentDialog
   135	          onCancel={controller.cancelComposerConsent}
   136	          onConfirm={controller.confirmComposerConsent}
   137	        />
   138	      ) : null}
   139	    </div>
   140	  )
   141	}
<shellId: 32 completed with exit code 0>
```

</details>


### Copilot

**hvir is a desktop workbench for local or SSH-backed projects that combines a project/file explorer, Git views, a multi-pane code viewer, web panes, and a Ghostty-powered terminal surface, with built-in support for AI “harness” sessions and document-review workflows.** It’s not just a terminal app: the main window is a project-oriented IDE/workbench where you switch between projects/workspaces, inspect Git history/changes, open files/diffs/rendered docs, and manage live sessions. [`src/main/index.ts:52-239`, `src/renderer/src/App.tsx:43-260`, `src/renderer/src/App.tsx:400-685`]

### Main user-facing features

- **Project/workspace navigation bar** with project tabs, a Sessions entry, connection status, theme/settings access, project refresh/disconnect/reconnect actions, and workspace close/prune/reopen flows. [`src/renderer/src/workspaces/ProjectsBar.tsx:61-180`, `src/renderer/src/App.tsx:400-436`]
- **File tree / project rail** with file browsing, filename search, Git decorations, ignore refresh, and workspace-missing handling. [`src/renderer/src/App.tsx:437-515`, `src/renderer/src/tree/FileTree.tsx` (via import in `App.tsx:22`, `469-489`)]
- **Git panel and Git graph** with Changes, History, branch switching, fetch/pull, diff opening, and graph navigation. [`src/renderer/src/git/GitPanel.tsx:1-99`, `src/renderer/src/App.tsx:490-513`, `src/renderer/src/App.tsx:341-352`]
- **File viewer** for source, rendered markdown/HTML-ish content, large-file fallback, diffs, go-to-line, in-file search, blame, reload/save, and opening paths. It also integrates document review in source mode. [`src/renderer/src/viewer/FileViewer.tsx:65-220`]
- **Split file viewer panes** (primary/secondary) with tab strips, pane switching, and drag resizing. [`src/renderer/src/App.tsx:286-397`, `src/renderer/src/App.tsx:562-593`]
- **Web panes** embedded in the workbench, with title updates, blocked-navigation handling, browser-open fallback, and a “reveal source terminal” bridge back to a terminal that produced a web view. [`src/renderer/src/dashboards/WebPaneStack.tsx:1-32`, `src/renderer/src/App.tsx:353-366`, `src/renderer/src/App.tsx:261-281`]
- **Terminal workspaces** with multiple retained terminal surfaces per workspace, drag-resizable terminal area, compact/rail controls, and workspace-level terminal management. [`src/renderer/src/terminal/TerminalWorkspaceCollection.tsx:1-30`, `src/renderer/src/terminal/TerminalWorkspace.tsx:1-120`, `src/renderer/src/App.tsx:622-640`]
- **Terminal UI features** including search, copy-match, semantic-region navigation (prompt/command/output), recovery/restart/start-fresh controls, context menus, splits, and fork/resume support depending on provider capabilities. [`src/renderer/src/terminal/TerminalView.tsx:86-220`, `src/renderer/src/terminal/TerminalSearch.tsx:1-100`, `src/renderer/src/terminal/TerminalContextMeter.tsx:1-20`, `src/renderer/src/terminal/terminal-attention.ts:1-40`, `src/renderer/src/terminal/terminal-semantic-regions.ts:1-60`]
- **Sessions overview mode** for projecting and opening exact live terminal sessions, with paging, filtering/grouping, and a detail surface. [`src/renderer/src/sessions/SessionsOverview.tsx:62-180`]
- **Settings dialog** for appearance, Git, keybindings, terminal preferences, typography, and harness profiles, with consent gating for composer-submit behavior. [`src/renderer/src/settings/SettingsDialog.tsx:27-140`]
- **Document review workflow** for source comments, batches, review delivery, and sending/copying/inserting review text into a live terminal. [`src/renderer/src/document-review/DocumentReviewControls.tsx:1-120`, `src/shared/document-review.ts:129-240`]
- **Command/keybinding routing** that maps global shortcuts to workbench actions and reserves bindings for terminal/web-pane contexts. [`src/renderer/src/workbench/use-workbench-commands.ts:1-34`]
- **Workspaces can be local or SSH remote**; the project browser can connect/disconnect hosts and switch between them. [`src/main/project-host/project-host-catalog.ts:21-172`, `src/main/project-host/index.ts:1-52`]

### Domain vocabulary

- **Project**: a top-level registered entity in the app state, identified by `ProjectState.projects[]`, with a registered root, display name, connection/watch state, and one or more workspaces. [`src/shared/workspace-types.ts:81-90`]
- **Workspace**: a concrete checkout/worktree or directory under a project, with name, root path, Git metadata, closed/missing/prunable flags, and changed-file counts. Closed workspaces remain in the catalog but have no active renderer runtime. [`src/shared/workspace-types.ts:62-79`]
- **Workspace state / project state**: the renderer-facing snapshot of all projects/workspaces plus active project/workspace IDs and host connection/watch tier. [`src/shared/workspace-types.ts:8-16`, `src/shared/workspace-types.ts:62-90`]
- **Project host**: the transport seam for filesystem, exec, PTY, and watch operations; can be local or SSH. [`src/main/project-host/project-host.ts:1-40`, `src/main/project-host/index.ts:1-52`]
- **SSH host / remote host**: a `ProjectHost` implementation backed by `ssh2`, created from `~/.ssh/config` aliases and SSH identity/trust data. Users can materialize and switch to these remote hosts. [`src/main/project-host/project-host-catalog.ts:43-172`, `src/main/project-host/ssh-config.ts:11-48`, `src/main/project-host/index.ts:32-52`]
- **Harness**: a bundled provider-backed “coding agent/session” concept. The provider model carries capabilities like session identity, resume/fork support, context-pressure presentation, and document-review delivery contracts. The app bundles providers for Shell, Claude Code, Codex, Pi, Gemini, GitHub Copilot, Cursor, and a custom-command provider. [`src/shared/harness-provider.ts:12-46`, `src/main/harness/bundled-harness-providers.ts:1-39`]
- **Harness profile**: a persisted launch recipe for a provider: scope, executable, args, env bindings, path bindings, launch revision, and contract version. Profiles can be `fresh`, `resume`, or `fork` launches. [`src/shared/harness-profile.ts:14-100`]
- **Session / sessions projection**: a main-to-renderer projection of live/retained terminal sessions, provider capabilities, workspace membership, telemetry/freshness/context facts, and open resolution data. This powers the Sessions screen and exact-terminal reopening. [`src/shared/sessions-projection.ts:7-240`, `src/renderer/src/sessions/SessionsOverview.tsx:62-180`]
- **Viewer / pane**: a viewer tab is a file/document surface; a pane is one of the split viewer sides or a terminal surface. The app uses a workbench layout to orchestrate tree, viewer, and terminal panes. [`src/renderer/src/App.tsx:286-397`, `src/renderer/src/terminal/terminal-pane.ts:1-260`]
- **Document review**: a workspace-scoped collection of anchored comments/batches over exact source ranges, with stale-anchor handling and delivery destinations into live terminals. [`src/shared/document-review.ts:20-240`]

### Remote / SSH capabilities

Yes — hvir supports opening and managing projects on remote SSH hosts. `ProjectHostCatalog` loads SSH aliases from `~/.ssh/config`, creates `SshHost` instances on demand, tracks host state, and exposes local plus SSH hosts in the UI; `ProjectHost` is explicitly designed as the transport seam so local vs remote is abstracted away. The SSH stack includes transport pooling, SFTP/file transfer, exec, PTY, watches, auth prompts, trust storage, and identity-file resolution. [`src/main/project-host/project-host-catalog.ts:43-172`, `src/main/project-host/ssh-config.ts:11-48`, `src/main/project-host/ssh-transport-pool.ts:5-120`, `src/main/project-host/project-host.ts:1-40`, `src/main/project-host/index.ts:1-52`]

### Terminal stack / Ghostty features

The terminal is rendered by **ghostty-web** through a swappable `TerminalPane` adapter. The adapter applies themes, fonts, cursor shape/blink, ligatures, custom key handling, 10 MB scrollback, clipboard file-paste resolution, and retains engine-owned search/selection semantics. The higher-level terminal UI adds search, copy-match, copy-semantic-region, semantic prompt/command/output navigation, context menus, split/fork controls, recovery/start-fresh/restart, attention state, and telemetry/context pressure display. [`src/renderer/src/terminal/ghostty-terminal-pane.ts:1-220`, `src/renderer/src/terminal/terminal-pane.ts:1-260`, `src/renderer/src/terminal/TerminalView.tsx:86-220`, `src/renderer/src/terminal/TerminalSearch.tsx:1-100`, `src/renderer/src/terminal/terminal-semantic-regions.ts:1-60`, `src/renderer/src/terminal/terminal-theme-catalog.ts:1-60`, `src/renderer/src/terminal/terminal-attention.ts:1-40`, `src/renderer/src/terminal/TerminalContextMeter.tsx:1-20`]

### Startup / app entry

Renderer startup initializes the theme and persisted settings, installs scrollbar presentation, mounts `<App />` inside an error boundary, and optionally loads development instrumentation. Main startup registers the HTML preview scheme, creates the workbench runtime, loads the project host catalog, project registry, terminal session registry, harness profile store, workers, Git routing, PTY supervisor, sessions/document-review runtimes, and window management. [`src/renderer/src/main.tsx:1-28`, `src/main/index.ts:51-240`]

### Platform support and package formats

- **Targets**: macOS and Linux only are defined in the main builder config; there is no Windows target in the checked-in config. [`electron-builder.yml:26-52`]
- **macOS packaging**: `pkg` target only, with artifact name `hvir-${version}-macos-${arch}.${ext}`; the `package.json` scripts only expose `pack:mac:arm64` and an SSH acceptance build that overrides the target for a mac acceptance bundle. [`electron-builder.yml:26-44`, `package.json:24-34`, `electron-builder.ssh-acceptance.yml:1-9`]
- **Linux packaging**: `deb` target only, with executable name `hvir` and Debian package settings/dependencies. `package.json` exposes `pack:linux:x64` and `pack:linux:arm64`. [`electron-builder.yml:45-71`, `package.json:27-34`]
- **SSH acceptance build**: a separate macOS-oriented acceptance config (`dev.hvir.ssh-acceptance`) that inherits the main builder config but clears the normal release target and disables notarization. [`electron-builder.ssh-acceptance.yml:1-9`]

If you want, I can also turn this into a ready-to-paste README “What is hvir?” section with the same factual scope and citations removed.


---

<sub>35s</sub>

### `bash`

**Read electron-builder config and CI workflow**

$ cd /private/var/tmp/ws/986d17d8/hvir && cat electron-builder.yml && echo "===CI===" && cat .github/workflows/ci.yml

<details>
<summary>277 lines</summary>

```
appId: dev.hvir.app
productName: hvir
directories:
  output: dist
  buildResources: build
files:
  - out/**
  - package.json
  - '!node_modules/@hvir/rename-noreplace/**'
  - node_modules/@hvir/rename-noreplace/index.js
  - node_modules/@hvir/rename-noreplace/package.json
  - node_modules/@hvir/rename-noreplace/LICENSE
  - node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
extraResources:
  - from: THIRD_PARTY_NOTICES.md
    to: THIRD_PARTY_NOTICES.md
  - from: build/native/hvir-command
    to: hvir-command
asar: true
asarUnpack:
  - node_modules/**/*.node
# postinstall rebuilds the required node-pty module against Electron's ABI. Keep
# packaging from also rebuilding ssh2's optional cpu-features acceleration module;
# ssh2 has a supported JavaScript fallback when that optional module is absent.
npmRebuild: false
mac:
  icon: build/icon-macos.icns
  category: public.app-category.developer-tools
  target:
    - pkg
  hardenedRuntime: true
  entitlements: build/entitlements.mac.plist
  entitlementsInherit: build/entitlements.mac.inherit.plist
pkg:
  artifactName: hvir-${version}-macos-${arch}.${ext}
  scripts: pkg-scripts
  installLocation: /Applications
  allowAnywhere: false
  allowCurrentUserHome: false
  allowRootDirectory: true
  isRelocatable: false
  isVersionChecked: true
  hasStrictIdentifier: true
  overwriteAction: upgrade
linux:
  icon: build/icons-linux
  executableName: hvir
  syncDesktopName: true
  category: Development
  target:
    - deb
deb:
  packageCategory: devel
  appArmorProfile: build/linux/hvir.apparmor
  afterInstall: build/linux/after-install.sh
  afterRemove: build/linux/after-remove.sh
  depends:
    - libc6 (>= 2.35)
    - libstdc++6 (>= 12)
    - libasound2 | libasound2t64
    - libatspi2.0-0 | libatspi2.0-0t64
    - libgtk-3-0 | libgtk-3-0t64
    - libnotify4
    - libnss3
    - libsecret-1-0
    - libuuid1
    - libxss1
    - libxtst6
    - util-linux
    - xdg-utils
  recommends: []
===CI===
name: CI

on:
  pull_request:
    branches:
      - main
      - 'epic/**'

permissions:
  contents: read

concurrency:
  group: ci-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  release-version-integrity:
    name: Release version integrity
    if: >-
      github.event_name == 'pull_request' &&
      github.actor == 'github-actions[bot]' &&
      github.event.pull_request.user.login == 'github-actions[bot]' &&
      github.event.pull_request.base.ref == github.event.repository.default_branch &&
      github.event.pull_request.head.repo.full_name == github.repository &&
      startsWith(github.event.pull_request.head.ref, 'release/v')
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    permissions:
      contents: read
      pull-requests: read

    steps:
      - name: Check out trusted release validation
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.pull_request.base.sha }}
          persist-credentials: false
          sparse-checkout: |-
            scripts/validate-release-pr.mts
            scripts/release-github-evidence.mts
          sparse-checkout-cone-mode: false

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Validate version-only release change
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GITHUB_TOKEN: ${{ github.token }}
          RELEASE_PR_HEAD_SHA: ${{ github.event.pull_request.head.sha }}
          RELEASE_PR_MODE: pre-merge
          RELEASE_PR_NUMBER: ${{ github.event.pull_request.number }}
          RELEASE_SOURCE_SHA: ${{ github.event.pull_request.head.sha }}
        run: node scripts/validate-release-pr.mts

  verify:
    name: Verification (Linux)
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: ubuntu-24.04
    timeout-minutes: 15
    permissions:
      actions: read
      contents: read
      issues: read
      pull-requests: read

    steps:
      - name: Check out repository
        uses: actions/checkout@v7
        with:
          # Architecture validates the exact event base/head and accepted epic history.
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run policy, type, and test verification
        env:
          HVIR_REPO_TOKEN: ${{ github.token }}
        run: npm run verify

  electron-smoke:
    name: Electron smoke (Linux)
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: ubuntu-24.04
    timeout-minutes: 15

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run production Electron workflow
        env:
          HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/production
        run: xvfb-run -a npm run smoke

      - name: Run development renderer Performance Timeline containment
        env:
          HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/development-performance
        run: xvfb-run -a npm run smoke:development-performance

      - name: Prove failure and interruption isolation
        run: xvfb-run -a npm run smoke:isolation

      - name: Upload bounded Electron failure evidence
        if: failure()
        uses: actions/upload-artifact@v7
        with:
          name: ci-electron-smoke-failure-${{ github.run_attempt }}
          path: ${{ runner.temp }}/hvir-smoke-artifacts
          if-no-files-found: ignore
          retention-days: 7

  macos-electron-smoke:
    # Temporary reduced gate: terminal-presentation, terminal-lifecycle, and capacity
    # remain available through local commands while their macOS flakes are hardened.
    name: Electron correctness (macOS arm64; temporary reduced gate)
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: macos-15
    timeout-minutes: 15

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run focused unpackaged Electron scenarios
        env:
          HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/macos-ci
        run: npm run smoke:macos:ci

      - name: Upload bounded macOS Electron failure evidence
        if: failure()
        uses: actions/upload-artifact@v7
        with:
          name: ci-macos-electron-smoke-failure-${{ github.run_attempt }}
          path: ${{ runner.temp }}/hvir-smoke-artifacts
          if-no-files-found: ignore
          retention-days: 7

  codeql:
    name: CodeQL analysis
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: ubuntu-24.04
    timeout-minutes: 20
    permissions:
      actions: read
      contents: read
      packages: read
      security-events: write

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v4.37.9
        with:
          languages: javascript-typescript

      - name: Analyze
        uses: github/codeql-action/analyze@v4.37.9

  merge-acceptance:
    name: Merge acceptance
    needs:
      - release-version-integrity
      - verify
      - electron-smoke
      - macos-electron-smoke
      - codeql
    if: always()
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    permissions:
      actions: read
      contents: read

    steps:
      - name: Check out exact head for base ancestry proof
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          fetch-depth: 0
          persist-credentials: false

      - name: Require one coherent CI attempt
        env:
          GITHUB_TOKEN: ${{ github.token }}
        run: node scripts/ci-attempt-evidence.mts

      - name: Require exact candidate ancestry
        env:
          BASE_SHA: ${{ github.event.pull_request.base.sha }}
          HEAD_SHA: ${{ github.event.pull_request.head.sha }}
        run: |
          if [[ ! "$BASE_SHA" =~ ^[0-9a-f]{40}$ || ! "$HEAD_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::Pull request base and head must be full commit SHAs"
            exit 1
          fi
          if [ "$(git rev-parse HEAD)" != "$HEAD_SHA" ]; then
            echo "::error::Merge acceptance did not check out the exact pull request head"
            exit 1
          fi
          if ! git merge-base --is-ancestor "$BASE_SHA" "$HEAD_SHA"; then
            echo "::error::The tested pull request base is not an ancestor of its head"
            exit 1
          fi
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>41s</sub>

### `bash`

**Read runtime and seams check scripts**

$ cd /private/var/tmp/ws/986d17d8/hvir && echo "===check-terminal-runtime===" && head -50 scripts/check-terminal-runtime.mts && echo "===check-seams===" && head -60 scripts/check-seams.sh

<details>
<summary>95 lines</summary>

```
===check-terminal-runtime===
#!/usr/bin/env node

import console from 'node:console'
import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { GHOSTTY_TERMINAL_CAPABILITY_PROFILE } from './ghostty-terminal-capability-profile.mts'

const REQUIRED_TERMINAL_METHODS = [
  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.synchronizedOutput.terminalMethods,
  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.hostOwnedContextMenu.terminalMethods,
  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.retainedBuffer.terminalMethods,
] as const
const REQUIRED_PARSER_METHODS =
  GHOSTTY_TERMINAL_CAPABILITY_PROFILE.synchronizedOutput.parserMethods
const RECOVERY = 'Run `npm ci` in this worktree, then retry the command.'

interface TerminalConstructor {
  readonly prototype: object
}

interface TerminalRuntimeModule {
  readonly Terminal: TerminalConstructor
  readonly GhosttyTerminal: TerminalConstructor
}

type LoadTerminalRuntime = () => Promise<unknown>
type ReadInstalledWasmBytes = () => Promise<number>

const readInstalledWasmBytes: ReadInstalledWasmBytes = async () =>
  (await stat(fileURLToPath(import.meta.resolve('ghostty-web/ghostty-vt.wasm')))).size

function hasCustomLinkProviderPriorityAndForcedRender(prototype: object): boolean {
  const register = Reflect.get(prototype, 'registerLinkProvider') as unknown
  if (typeof register !== 'function') return false

  const provider = Object.freeze({})
  let receivedProvider: unknown
  let receivedPriority: unknown
  let forcedRender: unknown
  try {
    Reflect.apply(
      register,
      {
        linkDetector: {
          registerProvider(candidate: unknown, priority?: boolean) {
            receivedProvider = candidate
            receivedPriority = priority
===check-seams===
#!/usr/bin/env bash
#
# Grep-level enforcement of the architectural seams (AGENTS.md "Respect the
# seams"). This is a coarse backstop that complements the precise ESLint rules
# in eslint.config.mjs — it catches a violation even if lint is skipped, and
# documents the invariants in one readable place.
#
set -uo pipefail

fail=0
SRC="src"

report() {
  # $1 = human description, $2 = matching lines (empty = ok)
  if [[ -n "$2" ]]; then
    printf '\033[31m✗ %s\033[0m\n' "$1"
    printf '%s\n' "$2" | sed 's/^/    /'
    fail=1
  else
    printf '\033[32m✓ %s\033[0m\n' "$1"
  fi
}

# 1. ipcRenderer only in the preload bridge.
hits=$(grep -rnw 'ipcRenderer' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/preload/' || true)
report "ipcRenderer used only in src/preload/" "$hits"

# 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/project-host/local-host.ts' || true)
report "host primitives imported only in local-host.ts" "$hits"

# 3. PTY spawning (host.spawnPty call sites) only in the supervisor.
hits=$(grep -rnE '\.spawnPty\(' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/pty/pty-supervisor.ts' || true)
report "host.spawnPty() called only in pty-supervisor.ts" "$hits"

# 4. Bundled harness identities stay inside provider-owned main modules. Shared
# IPC, persistence, and renderer code treat provider ids as opaque catalog data.
hits=$(grep -rnE "['\"](plain-shell|claude-code|codex)['\"]" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/harness/' || true)
report "bundled harness ids used only in src/main/harness/" "$hits"

# 5. Raw loopback streams are transport for the main-owned pane proxy, never a
# renderer, IPC, harness, or feature-level socket API.
hits=$(grep -rnE '\.connectLoopback\(' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/web-pane/loopback-http-proxy.ts' || true)
report "host.connectLoopback() called only in the web-pane proxy" "$hits"

# 6. ipcMain is a single transport choke point. Feature registrars receive the
# narrow IpcRegistrar capability and cannot install handlers directly.
hits=$(grep -rnw 'ipcMain' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/ipc/authority-router.ts' || true)
report "ipcMain used only in the IPC authority router" "$hits"

# 7. Feature registrars cannot bypass central renderer-owner or canonical-path
# authority resolution.
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>41s</sub>

### `bash`

**Read vitest config, git hook, license, gitignore**

$ cd /private/var/tmp/ws/986d17d8/hvir && cat vitest.config.ts && echo "===HOOK===" && cat .githooks/pre-push && echo "===LICENSE===" && head -5 LICENSE && echo "===GITIGNORE===" && cat .gitignore

<details>
<summary>53 lines</summary>

```
import { defineConfig } from 'vitest/config'

// Unit tests run under plain Node (not Electron). They cover the pure/seam
// logic — HostPath, LocalHost's fs/exec/watch — never the Electron runtime.
export default defineConfig({
  test: {
    environment: 'node',
    // Node's experimental global shadows happy-dom's renderer-owned storage.
    execArgv: ['--no-experimental-webstorage'],
    include: ['test/**/*.test.{ts,tsx}'],
    setupFiles: ['./test/test-console-output-policy.ts'],
  },
})
===HOOK===
#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

echo "[pre-push] Running TypeScript checks..."
npm run typecheck

echo "[pre-push] Running hvir's local-platform Electron smoke test..."

if [[ "$(uname -s)" == "Linux" && -z "${DISPLAY:-}" ]]; then
  if ! command -v xvfb-run >/dev/null 2>&1; then
    echo "[pre-push] Linux has no DISPLAY and xvfb-run is unavailable." >&2
    echo "[pre-push] Install Xvfb, provide DISPLAY, or use git push --no-verify." >&2
    exit 1
  fi
  exec xvfb-run -a npm run smoke
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  exec npm run smoke:macos
fi

exec npm run smoke
===LICENSE===
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
===GITIGNORE===
# dependencies
node_modules

# build output
out
dist
packages/*/build

# logs
*.log
npm-debug.log*

# editor / OS
.DS_Store
.vscode/*
!.vscode/extensions.json
*.local

# vitest / coverage
coverage
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>47s</sub>

### `bash`

**Check for AGENTS.md and list renderer src + scripts**

$ cd /private/var/tmp/ws/986d17d8/hvir && ls -a | grep -i agents; echo "exit:$?"; echo "===RENDERER SRC===" && ls src/renderer/src && echo "===SCRIPTS===" && ls scripts

<details>
<summary>83 lines</summary>

```
exit:1
===RENDERER SRC===
App.tsx
context-menu
dashboards
development
diagnostics
document-review
ErrorBoundary.tsx
git
harness
health
hvir.d.ts
layout
main.tsx
path-copy
scrollbars
sessions
settings
styles
styles.css
terminal
theme-model.ts
theme.ts
themes.css
tree
viewer
workbench
workspaces
===SCRIPTS===
adr-lifecycle.mts
agent-work-checkpoint-store.mts
architecture-authorization.mts
architecture-github.mts
architecture-hotspots.json
architecture-hotspots.mjs
architecture-hotspots.mts
architecture-inventory.mts
architecture-module-directions.mts
architecture-module-graph.mts
architecture-module-resolution.mts
architecture-policy.mts
architecture-wiring.mts
assemble-native-release.d.mts
assemble-native-release.mjs
capture-contributor-usage.mts
check-adrs.mjs
check-seams.sh
check-terminal-runtime.mts
ci-attempt-evidence.mts
create-smoke-repository.sh
generate-terminal-theme-catalog.mts
ghostty-terminal-capability-profile.mts
ghostty-web-update
inspect-packaged-runtime.mts
install-git-hooks.sh
installed-harness-dialog-probe.mts
installed-startup-probe.mts
native-installer.template.sh
phase8-gauntlet.sh
prepare-release-linux-package.mts
prepare-release-pr.mjs
project-management
real-host-ssh-contract.mts
real-host-ssh.vite.config.mts
record-macos-ssh-identity.sh
release-changelog.d.mts
release-changelog.mjs
release-github-evidence.mts
render-native-installer.d.mts
render-native-installer.mjs
require-release-ci-evidence.mts
run-linux-package-smoke.sh
run-macos-package-smoke.sh
run-macos-ssh-acceptance.sh
run-real-host-ssh-acceptance.mts
run-smoke-interruption.mts
run-smoke-scenarios.mts
run-smoke.sh
smoke-failure-artifact.mts
smoke-import-boundary.mjs
validate-release-pr.mts
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>47s</sub>

### `bash`

**Read vite config and third-party notices**

$ cd /private/var/tmp/ws/986d17d8/hvir && head -60 electron.vite.config.ts && echo "===THIRD PARTY HEAD===" && head -30 THIRD_PARTY_NOTICES.md

<details>
<summary>79 lines</summary>

```
import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin, type UserConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

import { DEVELOPMENT_PERFORMANCE_MEASURE_POLICY_ID } from './src/renderer/src/development/performance-measure-budget'
import type { ApplicationBuildChannel } from './src/shared'

function excludeDevelopmentPerformancePolicyFromProduction(): Plugin {
  return {
    name: 'exclude-development-performance-policy-from-production',
    apply: 'build',
    generateBundle(_options, bundle): void {
      const retainedPolicy = Object.values(bundle).find(
        (output) =>
          output.type === 'chunk' &&
          output.code.includes(DEVELOPMENT_PERFORMANCE_MEASURE_POLICY_ID),
      )
      if (retainedPolicy) {
        this.error(
          `Production renderer chunk ${retainedPolicy.fileName} retained development Performance Timeline policy`,
        )
      }
    },
  }
}

function excludeSmokeRuntimeFromProduction(smokeBuild: boolean): Plugin {
  return {
    name: 'exclude-smoke-runtime-from-production',
    apply: 'build',
    generateBundle(_options, bundle): void {
      if (smokeBuild) return
      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk') continue
        const smokeModule = Object.keys(output.modules).find((moduleId) =>
          moduleId.replaceAll('\\', '/').includes('/src/main/smoke/'),
        )
        if (smokeModule) {
          this.error(
            `Production main chunk ${output.fileName} retained smoke module ${smokeModule}`,
          )
        }
        if (output.code.includes('HVIR_SMOKE')) {
          this.error(
            `Production main chunk ${output.fileName} retained the HVIR_SMOKE activation path`,
          )
        }
      }
    },
  }
}

// Three build targets. `externalizeDepsPlugin` keeps `dependencies` (node-pty,
// chokidar) out of the main/preload bundles so native modules load from
// node_modules at runtime instead of being bundled.
const baseConfig: UserConfig = {
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
===THIRD PARTY HEAD===
# Third-party notices

hvir includes and redistributes third-party software. Bundled npm dependencies retain
their own license files; this document additionally preserves the notices for the terminal
runtime that hvir modifies and redistributes. The names below identify the upstream
components only; hvir is not affiliated with or endorsed by their authors.

## Skill Steward rename-noreplace binding

Source: <https://github.com/CongBao/skill-steward>

hvir's private `@hvir/rename-noreplace` Node-API package derives its basename
validation and platform syscall wrapper from Skill Steward's binding. hvir modifies
that implementation to accept separate source and destination parent directory file
descriptors for atomic cross-directory no-replace rename.

MIT License

Copyright (c) 2026 Skill Steward contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>52s</sub>

### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/986d17d8/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>52s</sub>

### `bash`

**Read harness provider shared types and bundled providers**

$ cd /private/var/tmp/ws/986d17d8/hvir && head -40 src/shared/harness-provider.ts && echo "===BUNDLED===" && head -60 src/main/harness/bundled-harness-providers.ts

<details>
<summary>87 lines</summary>

```
/** Serializable harness-provider vocabulary shared across the main/renderer boundary. */

const PROVIDER_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/

declare const harnessProviderIdBrand: unique symbol

/** Opaque persisted identifier. Provider behavior remains owned by main. */
export type HarnessProviderId = string & {
  readonly [harnessProviderIdBrand]: 'HarnessProviderId'
}

export type HarnessSessionIdentity = 'none' | 'preassigned' | 'discovered'

export type HarnessContextPresentation = 'none' | 'count' | 'pressure'

export interface HarnessContextPressurePolicy {
  /** Provider-owned fallback used only when telemetry has no reported window. */
  readonly assumedWindowTokens?: number
  readonly warningPercent: number
  readonly criticalPercent: number
}

export interface HarnessProviderCapabilities {
  readonly sessionIdentity: HarnessSessionIdentity
  readonly exactResume: boolean
  /** Present only when the probed provider version supports an exact native fork. */
  readonly exactFork?: true
  readonly contextPresentation: HarnessContextPresentation
  readonly contextPressure?: HarnessContextPressurePolicy
  /** Trusted effective launch contract; absent means document review is Copy-only. */
  readonly reviewInsertContractRevision?: number
  /** Exact provider/profile submit contract; absent keeps review delivery Insert-only. */
  readonly reviewSendNowContractRevision?: number
}

export type HarnessModifiedKeyProtocol = 'none' | 'modify-other-keys' | 'csi-u'

export interface HarnessTerminalInputCapabilities {
  /** Wire format used by the foreground TUI for otherwise ambiguous modified keys. */
  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
===BUNDLED===
/** The single explicit assembly of trusted, bundled providers. No observers start here. */

import type {
  ComposerSubmitMode,
  HarnessProviderDescriptor,
  HarnessProviderId,
  HarnessProfileId,
} from '../../shared'
import type { ProjectHost } from '../project-host/project-host'
import type { HarnessProvider } from './harness-provider-contract'
import { HarnessProviderRegistry } from './harness-provider-registry'
import { plainShellProvider, customCommandProvider } from './providers/shell'
import { claudeCodeProvider } from './providers/claude-code'
import { codexProvider } from './providers/codex'
import { piProvider } from './providers/pi'
import { geminiProvider } from './providers/gemini'
import { githubCopilotProvider } from './providers/github-copilot'
import { cursorProvider } from './providers/cursor'

export const harnessProviders = new HarnessProviderRegistry([
  plainShellProvider,
  claudeCodeProvider,
  codexProvider,
  piProvider,
  geminiProvider,
  githubCopilotProvider,
  cursorProvider,
  customCommandProvider,
])

export function harnessProvider(id: string): HarnessProvider {
  return harnessProviders.get(id)
}

export function harnessProviderCatalog(): readonly HarnessProviderDescriptor[] {
  return harnessProviders.catalog()
}

export async function configureHarnessComposerSubmit(
  host: ProjectHost,
  mode: ComposerSubmitMode,
): Promise<void> {
  for (const provider of harnessProviders.all()) {
    await provider.composerConfiguration?.configure(host, mode)
  }
}

/** Data-only inspection surface for diagnostics/tests; never provider-contributed UI. */
export function harnessProviderDiagnostics(): readonly {
  readonly id: HarnessProviderId
  readonly profileContractVersion: number
  readonly defaultProfileId?: HarnessProfileId
  readonly artifactInputs: {
    readonly executable: boolean
    readonly environmentKeys: readonly string[]
    readonly pathBindings: readonly string[]
  }
  readonly probeInvokesVersion: boolean
}[] {
  return harnessProviders.all().map((provider) => ({
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>55s</sub>

### Copilot

Clear picture forming: hvir is a desktop workbench for running AI coding agents in terminals. Let me confirm details with the explorer.

---

<sub>1m 36s</sub>

### `read_agent`

<details>
<summary>Arguments</summary>

```json
{
  "agent_id": "d23d6911-dd6a-4d2c-aed0-625eea7dd341",
  "wait": true,
  "timeout": 180
}
```

</details>

<details>
<summary>40 lines</summary>

```
Agent is idle (waiting for messages). agent_id: d23d6911-dd6a-4d2c-aed0-625eea7dd341, agent_type: explore, status: idle, description: Explore app features for README, elapsed: 60s, total_turns: 1

[Turn 0]
**hvir is a desktop workbench for local or SSH-backed projects that combines a project/file explorer, Git views, a multi-pane code viewer, web panes, and a Ghostty-powered terminal surface, with built-in support for AI “harness” sessions and document-review workflows.** It’s not just a terminal app: the main window is a project-oriented IDE/workbench where you switch between projects/workspaces, inspect Git history/changes, open files/diffs/rendered docs, and manage live sessions. [`src/main/index.ts:52-239`, `src/renderer/src/App.tsx:43-260`, `src/renderer/src/App.tsx:400-685`]

### Main user-facing features

- **Project/workspace navigation bar** with project tabs, a Sessions entry, connection status, theme/settings access, project refresh/disconnect/reconnect actions, and workspace close/prune/reopen flows. [`src/renderer/src/workspaces/ProjectsBar.tsx:61-180`, `src/renderer/src/App.tsx:400-436`]
- **File tree / project rail** with file browsing, filename search, Git decorations, ignore refresh, and workspace-missing handling. [`src/renderer/src/App.tsx:437-515`, `src/renderer/src/tree/FileTree.tsx` (via import in `App.tsx:22`, `469-489`)]
- **Git panel and Git graph** with Changes, History, branch switching, fetch/pull, diff opening, and graph navigation. [`src/renderer/src/git/GitPanel.tsx:1-99`, `src/renderer/src/App.tsx:490-513`, `src/renderer/src/App.tsx:341-352`]
- **File viewer** for source, rendered markdown/HTML-ish content, large-file fallback, diffs, go-to-line, in-file search, blame, reload/save, and opening paths. It also integrates document review in source mode. [`src/renderer/src/viewer/FileViewer.tsx:65-220`]
- **Split file viewer panes** (primary/secondary) with tab strips, pane switching, and drag resizing. [`src/renderer/src/App.tsx:286-397`, `src/renderer/src/App.tsx:562-593`]
- **Web panes** embedded in the workbench, with title updates, blocked-navigation handling, browser-open fallback, and a “reveal source terminal” bridge back to a terminal that produced a web view. [`src/renderer/src/dashboards/WebPaneStack.tsx:1-32`, `src/renderer/src/App.tsx:353-366`, `src/renderer/src/App.tsx:261-281`]
- **Terminal workspaces** with multiple retained terminal surfaces per workspace, drag-resizable terminal area, compact/rail controls, and workspace-level terminal management. [`src/renderer/src/terminal/TerminalWorkspaceCollection.tsx:1-30`, `src/renderer/src/terminal/TerminalWorkspace.tsx:1-120`, `src/renderer/src/App.tsx:622-640`]
- **Terminal UI features** including search, copy-match, semantic-region navigation (prompt/command/output), recovery/restart/start-fresh controls, context menus, splits, and fork/resume support depending on provider capabilities. [`src/renderer/src/terminal/TerminalView.tsx:86-220`, `src/renderer/src/terminal/TerminalSearch.tsx:1-100`, `src/renderer/src/terminal/TerminalContextMeter.tsx:1-20`, `src/renderer/src/terminal/terminal-attention.ts:1-40`, `src/renderer/src/terminal/terminal-semantic-regions.ts:1-60`]
- **Sessions overview mode** for projecting and opening exact live terminal sessions, with paging, filtering/grouping, and a detail surface. [`src/renderer/src/sessions/SessionsOverview.tsx:62-180`]
- **Settings dialog** for appearance, Git, keybindings, terminal preferences, typography, and harness profiles, with consent gating for composer-submit behavior. [`src/renderer/src/settings/SettingsDialog.tsx:27-140`]
- **Document review workflow** for source comments, batches, review delivery, and sending/copying/inserting review text into a live terminal. [`src/renderer/src/document-review/DocumentReviewControls.tsx:1-120`, `src/shared/document-review.ts:129-240`]
- **Command/keybinding routing** that maps global shortcuts to workbench actions and reserves bindings for terminal/web-pane contexts. [`src/renderer/src/workbench/use-workbench-commands.ts:1-34`]
- **Workspaces can be local or SSH remote**; the project browser can connect/disconnect hosts and switch between them. [`src/main/project-host/project-host-catalog.ts:21-172`, `src/main/project-host/index.ts:1-52`]

### Domain vocabulary

- **Project**: a top-level registered entity in the app state, identified by `ProjectState.projects[]`, with a registered root, display name, connection/watch state, and one or more workspaces. [`src/shared/workspace-types.ts:81-90`]
- **Workspace**: a concrete checkout/worktree or directory under a project, with name, root path, Git metadata, closed/missing/prunable flags, and changed-file counts. Closed workspaces remain in the catalog but have no active renderer runtime. [`src/shared/workspace-types.ts:62-79`]
- **Workspace state / project state**: the renderer-facing snapshot of all projects/workspaces plus active project/workspace IDs and host connection/watch tier. [`src/shared/workspace-types.ts:8-16`, `src/shared/workspace-types.ts:62-90`]
- **Project host**: the transport seam for filesystem, exec, PTY, and watch operations; can be local or SSH. [`src/main/project-host/project-host.ts:1-40`, `src/main/project-host/index.ts:1-52`]
- **SSH host / remote host**: a `ProjectHost` implementation backed by `ssh2`, created from `~/.ssh/config` aliases and SSH identity/trust data. Users can materialize and switch to these remote hosts. [`src/main/project-host/project-host-catalog.ts:43-172`, `src/main/project-host/ssh-config.ts:11-48`, `src/main/project-host/index.ts:32-52`]
- **Harness**: a bundled provider-backed “coding agent/session” concept. The provider model carries capabilities like session identity, resume/fork support, context-pressure presentation, and document-review delivery contracts. The app bundles providers for Shell, Claude Code, Codex, Pi, Gemini, GitHub Copilot, Cursor, and a custom-command provider. [`src/shared/harness-provider.ts:12-46`, `src/main/harness/bundled-harness-providers.ts:1-39`]
- **Harness profile**: a persisted launch recipe for a provider: scope, executable, args, env bindings, path bindings, launch revision, and contract version. Profiles can be `fresh`, `resume`, or `fork` launches. [`src/shared/harness-profile.ts:14-100`]
- **Session / sessions projection**: a main-to-renderer projection of live/retained terminal sessions, provider capabilities, workspace membership, telemetry/freshness/context facts, and open resolution data. This powers the Sessions screen and exact-terminal reopening. [`src/shared/sessions-projection.ts:7-240`, `src/renderer/src/sessions/SessionsOverview.tsx:62-180`]
- **Viewer / pane**: a viewer tab is a file/document surface; a pane is one of the split viewer sides or a terminal surface. The app uses a workbench layout to orchestrate tree, viewer, and terminal panes. [`src/renderer/src/App.tsx:286-397`, `src/renderer/src/terminal/terminal-pane.ts:1-260`]
- **Document review**: a workspace-scoped collection of anchored comments/batches over exact source ranges, with stale-anchor handling and delivery destinations into live terminals. [`src/shared/document-review.ts:20-240`]

### Remote / SSH capabilities

Yes — hvir supports opening and managing projects on remote SSH hosts. `ProjectHostCatalog` loads SSH aliases from `~/.ssh/config`, creates `SshHost` instances on demand, tracks host state, and exposes local plus SSH hosts in the UI; `ProjectHost` is explicitly designed as the transport seam so local vs remote is abstracted away. The SSH stack includes transport pooling, SFTP/file transfer, exec, PTY, watches, auth prompts, trust storage, and identity-file resolution. [`src/main/project-host/project-host-catalog.ts:43-172`, `src/main/project-host/ssh-config.ts:11-48`, `src/main/project-host/ssh-transport-pool.ts:5-120`, `src/main/project-host/project-host.ts:1-40`, `src/main/project-host/index.ts:1-52`]

### Terminal stack / Ghostty features

The terminal is rendered by **ghostty-web** through a swappable `TerminalPane` adapter. The adapter applies themes, fonts, cursor shape/blink, ligatures, custom key handling, 10 MB scrollback, clipboard file-paste resolution, and retains engine-owned search/selection semantics. The higher-level terminal UI adds search, copy-match, copy-semantic-region, semantic prompt/command/output navigation, context menus, split/fork controls, recovery/start-fresh/restart, attention state, and telemetry/context pressure display. [`src/renderer/src/terminal/ghostty-terminal-pane.ts:1-220`, `src/renderer/src/terminal/terminal-pane.ts:1-260`, `src/renderer/src/terminal/TerminalView.tsx:86-220`, `src/renderer/src/terminal/TerminalSearch.tsx:1-100`, `src/renderer/src/terminal/terminal-semantic-regions.ts:1-60`, `src/renderer/src/terminal/terminal-theme-catalog.ts:1-60`, `src/renderer/src/terminal/terminal-attention.ts:1-40`, `src/renderer/src/terminal/TerminalContextMeter.tsx:1-20`]

### Startup / app entry

Renderer startup initializes the theme and persisted settings, installs scrollbar presentation, mounts `<App />` inside an error boundary, and optionally loads development instrumentation. Main startup registers the HTML preview scheme, creates the workbench runtime, loads the project host catalog, project registry, terminal session registry, harness profile store, workers, Git routing, PTY supervisor, sessions/document-review runtimes, and window management. [`src/renderer/src/main.tsx:1-28`, `src/main/index.ts:51-240`]

### Platform support and package formats

- **Targets**: macOS and Linux only are defined in the main builder config; there is no Windows target in the checked-in config. [`electron-builder.yml:26-52`]
- **macOS packaging**: `pkg` target only, with artifact name `hvir-${version}-macos-${arch}.${ext}`; the `package.json` scripts only expose `pack:mac:arm64` and an SSH acceptance build that overrides the target for a mac acceptance bundle. [`electron-builder.yml:26-44`, `package.json:24-34`, `electron-builder.ssh-acceptance.yml:1-9`]
- **Linux packaging**: `deb` target only, with executable name `hvir` and Debian package settings/dependencies. `package.json` exposes `pack:linux:x64` and `pack:linux:arm64`. [`electron-builder.yml:45-71`, `package.json:27-34`]
- **SSH acceptance build**: a separate macOS-oriented acceptance config (`dev.hvir.ssh-acceptance`) that inherits the main builder config but clears the normal release target and disables notarization. [`electron-builder.ssh-acceptance.yml:1-9`]

If you want, I can also turn this into a ready-to-paste README “What is hvir?” section with the same factual scope and citations removed.
```

</details>


---

<sub>1m 44s</sub>

### `bash`

**Check git remote and native command**

$ cd /private/var/tmp/ws/986d17d8/hvir && git --no-pager remote -v; echo "---"; ls build/native build/pkg-scripts build/linux 2>/dev/null; echo "===hvir-command==="; head -30 build/native/hvir-command 2>/dev/null

<details>
<summary>39 lines</summary>

```
---
build/linux:
after-install.sh
after-remove.sh
hvir.apparmor

build/native:
hvir-command

build/pkg-scripts:
postinstall
preinstall
===hvir-command===
#!/bin/sh
set -eu

# hvir-native-package-command-v1

case "$(/usr/bin/uname -s)" in
Linux)
  application='/opt/hvir/hvir'
  ;;
Darwin)
  application='/Applications/hvir.app/Contents/MacOS/hvir'
  ;;
*)
  echo 'hvir: the installed command is available only on Linux and macOS' >&2
  exit 69
  ;;
esac

if [ "$#" -gt 0 ]; then
  case "$1" in
  -*)
    # Smoke and Chromium switches are explicit internal options.
    ;;
  *)
    caller_directory=$(pwd -P)
    case "$1" in
    /*) project_candidate=$1 ;;
    *) project_candidate=$caller_directory/$1 ;;
    esac
    if [ ! -d "$project_candidate" ]; then
<shellId: 33 completed with exit code 0>
```

</details>


---

<sub>1m 44s</sub>

### `bash`

**Check terminal runtime requirements and release workflow**

$ cd /private/var/tmp/ws/986d17d8/hvir && grep -rn "ghostty-web\|node-pty\|GHOSTTY" scripts/check-terminal-runtime.mts | tail -20; echo "===RELEASE WF==="; head -50 .github/workflows/release.yml

<details>
<summary>61 lines</summary>

```
scripts/check-terminal-runtime.mts:9:import { GHOSTTY_TERMINAL_CAPABILITY_PROFILE } from './ghostty-terminal-capability-profile.mts'
scripts/check-terminal-runtime.mts:12:  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.synchronizedOutput.terminalMethods,
scripts/check-terminal-runtime.mts:13:  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.hostOwnedContextMenu.terminalMethods,
scripts/check-terminal-runtime.mts:14:  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.retainedBuffer.terminalMethods,
scripts/check-terminal-runtime.mts:17:  GHOSTTY_TERMINAL_CAPABILITY_PROFILE.synchronizedOutput.parserMethods
scripts/check-terminal-runtime.mts:33:  (await stat(fileURLToPath(import.meta.resolve('ghostty-web/ghostty-vt.wasm')))).size
scripts/check-terminal-runtime.mts:89:    `Installed dependencies do not match this checkout: ghostty-web is missing required terminal runtime capabilities (${missing.join(', ')}). ${RECOVERY}`,
scripts/check-terminal-runtime.mts:101:      `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm could not be inspected. ${RECOVERY}`,
scripts/check-terminal-runtime.mts:105:  const expectedBytes = GHOSTTY_TERMINAL_CAPABILITY_PROFILE.artifact.wasmBytes
scripts/check-terminal-runtime.mts:108:    `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm is ${actualBytes} bytes; the reviewed capability profile requires ${expectedBytes}. ${RECOVERY}`,
scripts/check-terminal-runtime.mts:113:  loadRuntime: LoadTerminalRuntime = async () => import('ghostty-web'),
scripts/check-terminal-runtime.mts:121:      `Installed dependencies do not match this checkout: ghostty-web could not be loaded. ${RECOVERY}`,
scripts/check-terminal-runtime.mts:129:      `Installed dependencies do not match this checkout: ghostty-web does not export the required Terminal and GhosttyTerminal constructors. ${RECOVERY}`,
===RELEASE WF===
name: Release

on:
  workflow_dispatch:
    inputs:
      bump:
        description: current releases package.json; patch/minor/major open a validated release PR.
        required: true
        type: choice
        options:
          - current
          - patch
          - minor
          - major
      source_sha:
        description: Exact merged release source; automation only, normally left blank.
        required: false
        type: string

permissions:
  contents: read

concurrency:
  group: release
  cancel-in-progress: false

jobs:
  prepare:
    name: Prepare ${{ inputs.bump }} release
    runs-on: ubuntu-24.04
    timeout-minutes: 15
    permissions:
      actions: read
      contents: write
      issues: read
      pull-requests: write
    outputs:
      ready: ${{ steps.release.outputs.ready }}
      version: ${{ steps.release.outputs.version }}
      tag: ${{ steps.release.outputs.tag }}
      sha: ${{ steps.release.outputs.sha }}
    steps:
      - name: Require the default branch
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
        run: |
          if [ "$GITHUB_REF" != "refs/heads/$DEFAULT_BRANCH" ]; then
            echo "::error::Run releases from $DEFAULT_BRANCH, not $GITHUB_REF_NAME"
            exit 1
          fi
<shellId: 34 completed with exit code 0>
```

</details>


---

<sub>1m 50s</sub>

### `bash`

**List all architectural seam rules**

$ cd /private/var/tmp/ws/986d17d8/hvir && grep -n 'report "' scripts/check-seams.sh

<details>
<summary>14 lines</summary>

```
27:report "ipcRenderer used only in src/preload/" "$hits"
33:report "host primitives imported only in local-host.ts" "$hits"
38:report "host.spawnPty() called only in pty-supervisor.ts" "$hits"
45:report "bundled harness ids used only in src/main/harness/" "$hits"
51:report "host.connectLoopback() called only in the web-pane proxy" "$hits"
57:report "ipcMain used only in the IPC authority router" "$hits"
63:report "IPC features use central owner/path authority" "$hits"
70:report "ssh2 details stay inside the SshHost adapter" "$hits"
76:report "SSH collaborators do not create independent clients" "$hits"
82:report "only SshHost is exported as the remote host façade" "$hits"
97:report "SSH construction and implementation owners stay in the host catalog" "$hits"
103:report "Git commands use the shared command context" "$hits"
109:report "Git worker proxy exposes only exact exec, read, and metadata operations" "$hits"
<shellId: 35 completed with exit code 0>
```

</details>


---

<sub>1m 50s</sub>

### `bash`

**Inspect architecture hotspots tooling**

$ cd /private/var/tmp/ws/986d17d8/hvir && head -30 scripts/architecture-hotspots.mts 2>/dev/null; echo "===HOTSPOT JSON==="; head -25 scripts/architecture-hotspots.json

<details>
<summary>55 lines</summary>

```
#!/usr/bin/env node
import console from 'node:console'
import process from 'node:process'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import {
  POLICY_PATH,
  evaluateInventory,
  validatePolicy,
  type ArchitectureRow,
} from './architecture-policy.mts'
import { createArchitectureInventory, fullCommit } from './architecture-inventory.mts'
import {
  authorizeCandidate,
  type ArchitectureContext,
} from './architecture-authorization.mts'
import {
  githubAdapter,
  loadArchitectureIntegration,
  requireCurrentRemovalIssues,
  resolveArchitectureContext,
} from './architecture-github.mts'
import { collectModuleGraph, type ModuleGraph } from './architecture-module-graph.mts'
import { checkModuleDirections } from './architecture-module-directions.mts'

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

export function collectArchitectureHotspots(root = repositoryRoot) {
  const source = createArchitectureInventory(root)
===HOTSPOT JSON===
{
  "version": 2,
  "comfortLines": 500,
  "defaultMaximum": 1000,
  "roots": [
    "src",
    "test",
    "scripts",
    "packages",
    "build",
    ".github",
    ".githooks",
    ".agents",
    ".claude"
  ],
  "extensions": [
    ".ts",
    ".tsx",
    ".mts",
    ".cts",
    ".js",
    ".jsx",
    ".mjs",
    ".cjs",
    ".css",
<shellId: 36 completed with exit code 0>
```

</details>


---

<sub>2m 3s</sub>

### `bash`

**Check harness provider display names**

$ cd /private/var/tmp/ws/986d17d8/hvir && grep -rn "label\|displayName\|name:" src/main/harness/providers/claude-code.ts | head -5; echo "---codex---"; grep -rn "label\|displayName" src/main/harness/providers/codex.ts | head -5; echo "---list providers---"; ls src/main/harness/providers

<details>
<summary>14 lines</summary>

```
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
---codex---
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
---list providers---
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
<shellId: 37 completed with exit code 0>
```

</details>


---

<sub>2m 3s</sub>

### `bash`

**Count test and source files**

$ cd /private/var/tmp/ws/986d17d8/hvir && echo "test files: $(ls test/*.test.ts test/*.test.tsx 2>/dev/null | wc -l)" && echo "src files: $(find src -type f \( -name '*.ts' -o -name '*.tsx' \) | wc -l)" && grep -c '' package.json >/dev/null; node -e "const p=require('./package.json');console.log(Object.keys(p.scripts).length+' scripts')"

```
test files:      376
src files:      649
55 scripts
<shellId: 38 completed with exit code 0>
```


---

<sub>2m 6s</sub>

### `bash`

**List all harness provider display names**

$ cd /private/var/tmp/ws/986d17d8/hvir && grep -rhn "displayName: '" src/main/harness/providers/*.ts | sed "s/.*displayName: //" | sort -u

<details>
<summary>9 lines</summary>

```
'Claude Code',
'Codex',
'Cursor CLI',
'Custom',
'Gemini CLI',
'GitHub Copilot CLI',
'Pi',
'Shell',
<shellId: 39 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### Copilot

I have everything I need. Writing the README now.

---

<sub>2m 55s</sub>

### `create`

**create a new file at /private/var/tmp/ws/986d17d8/hvir/README.md.**

/private/var/tmp/ws/986d17d8/hvir/README.md

```
Created file /private/var/tmp/ws/986d17d8/hvir/README.md with 10186 characters
```


---

<sub>3m 1s</sub>

### Copilot

Let me verify my claims and check README formatting against the repo's Prettier config.

---

<sub>3m 4s</sub>

### `bash`

**Check docs dir tracking and prettier config**

$ cd /private/var/tmp/ws/986d17d8/hvir && git --no-pager ls-files | grep -c '^docs/' ; echo "docs dir exists: $([ -d docs ] && echo yes || echo no)"; cat .prettierignore; echo "===PRETTIERRC==="; cat .prettierrc.json

<details>
<summary>18 lines</summary>

```
0
docs dir exists: no
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
===PRETTIERRC===
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
<shellId: 40 completed with exit code 0>
```

</details>


---

<sub>3m 4s</sub>

### `bash`

**Verify scrollback, blame, shiki claims**

$ cd /private/var/tmp/ws/986d17d8/hvir && grep -rn "scrollback" src/renderer/src/terminal/ghostty-terminal-pane.ts | head -5; echo "---blame---"; grep -rn "blame" src/renderer/src/viewer/FileViewer.tsx | head -3; echo "---shiki---"; grep -rln "shiki" src | head -5

<details>
<summary>16 lines</summary>

```
src/renderer/src/terminal/ghostty-terminal-pane.ts:180:      scrollbackBytes: TERMINAL_SCROLLBACK_BYTES,
src/renderer/src/terminal/ghostty-terminal-pane.ts:405:    const scrollbackLength = this.terminal.getScrollbackLength()
src/renderer/src/terminal/ghostty-terminal-pane.ts:406:    const retainedRows = scrollbackLength + this.terminal.rows
src/renderer/src/terminal/ghostty-terminal-pane.ts:408:    this.terminal.scrollToLine(Math.max(0, scrollbackLength - location.row))
src/renderer/src/terminal/ghostty-terminal-pane.ts:573:    const scrollbackLength = this.terminal.getScrollbackLength()
---blame---
src/renderer/src/viewer/FileViewer.tsx:18:import { useSourceBlame } from './use-source-blame'
src/renderer/src/viewer/FileViewer.tsx:91:  const blameMode = tab?.externalWorkspaceRoot ? undefined : tab?.mode
src/renderer/src/viewer/FileViewer.tsx:104:  const { blame, blameStatus } = useSourceBlame(
---shiki---
src/renderer/src/styles/viewer-content.css
src/renderer/src/viewer/highlight-protocol.ts
src/renderer/src/viewer/shiki-language-names.ts
src/renderer/src/viewer/shiki-language-catalog.ts
src/renderer/src/viewer/highlight.worker.ts
<shellId: 41 completed with exit code 0>
```

</details>


---

<sub>3m 12s</sub>

### `bash`

**Verify scrollback constant and run ADR check**

$ cd /private/var/tmp/ws/986d17d8/hvir && grep -rn "TERMINAL_SCROLLBACK_BYTES =" src/ ; echo "===check-adrs==="; npm run check-adrs 2>&1 | tail -6

<details>
<summary>8 lines</summary>

```
src/renderer/src/terminal/ghostty-terminal-pane.ts:54:const TERMINAL_SCROLLBACK_BYTES = 10_000_000
===check-adrs===
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/986d17d8/hvir/docs/adr'
}

Node.js v26.5.0
<shellId: 42 completed with exit code 0>
```

</details>


---

<sub>3m 22s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/986d17d8/hvir/README.md.**

/private/var/tmp/ws/986d17d8/hvir/README.md

```
File /private/var/tmp/ws/986d17d8/hvir/README.md updated with changes.
```


---

<sub>3m 22s</sub>

### `bash`

**Verify seam claims by running check-seams**

$ cd /private/var/tmp/ws/986d17d8/hvir && npm run check-seams 2>&1 | tail -20

<details>
<summary>17 lines</summary>

```
> hvir@0.2.3 check-seams
> bash scripts/check-seams.sh

✓ ipcRenderer used only in src/preload/
✓ host primitives imported only in local-host.ts
✓ host.spawnPty() called only in pty-supervisor.ts
✓ bundled harness ids used only in src/main/harness/
✓ host.connectLoopback() called only in the web-pane proxy
✓ ipcMain used only in the IPC authority router
✓ IPC features use central owner/path authority
✓ ssh2 details stay inside the SshHost adapter
✓ SSH collaborators do not create independent clients
✓ only SshHost is exported as the remote host façade
✓ SSH construction and implementation owners stay in the host catalog
✓ Git commands use the shared command context
✓ Git worker proxy exposes only exact exec, read, and metadata operations

seam check passed
<shellId: 43 completed with exit code 0>
```

</details>


---

<sub>3m 25s</sub>

### Copilot

All 13 seam claims verified against the actual checker. Final review of the README:

---

<sub>3m 25s</sub>

### `view`

**view the file at /private/var/tmp/ws/986d17d8/hvir/README.md.**

/private/var/tmp/ws/986d17d8/hvir/README.md

<details>
<summary>177 lines</summary>

````
# hvir

A desktop workbench for driving coding agents across local and remote projects.

hvir is an Electron application that puts a Ghostty-powered terminal surface, a Git-aware file
tree, a split file/diff viewer, and embedded web panes into one project-oriented window. Terminals
are not just shells — they are **harness sessions** launched from bundled provider profiles
(Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi, plain shell, or a custom
command), so the workbench can resume them exactly, track their context pressure, surface them in a
sessions overview, and deliver code-review comments straight into a running agent.

Projects can live on the local machine or on a remote machine reached over SSH; the same file tree,
Git views, viewer, and terminals work against either.

---

## Features

**Projects and workspaces**

- Project bar with tabs, connection status, refresh/disconnect/reconnect, and workspace
  close/prune/reopen flows.
- Git-decorated file tree with filename search, ignore refresh, and missing-workspace handling.
- Local projects and SSH-backed remote projects driven through one host abstraction; remote hosts
  are discovered from `~/.ssh/config`, with transport pooling, SFTP, trust storage, and identity
  resolution.

**Git**

- Changes and History panels, branch switching, fetch/pull, and diff opening.
- Commit graph with layout and navigation.
- Blame, untracked line counts, and worktree awareness.
- Git work runs in a dedicated worker host, off the UI and off the main thread.

**Viewer**

- Split primary/secondary viewer panes with tab strips and drag resizing.
- Syntax-highlighted source (Shiki), rendered Markdown with task lists and Mermaid diagrams,
  sandboxed HTML preview, and a large-file fallback.
- Diff view, go-to-line, in-file search, reload/save, and image rendering.

**Terminals**

- Terminals rendered by [`ghostty-web`](https://github.com/jarmak-personal/ghostty-web) through a
  swappable pane adapter: themes, typography, ligatures, cursor control, and 10 MB scrollback.
- Search with copy-match, semantic prompt/command/output region navigation, host-owned context
  menus, splits, and file/URL link activation.
- Clipboard file paste (including remote workspaces) and OSC clipboard integration.
- Recovery controls — restart, start fresh, resume, and fork — gated by what the underlying
  provider actually supports.
- Attention badges and a context meter showing agent token pressure.

**Harness sessions**

- Bundled providers: Shell, Claude Code, Codex, Pi, Gemini CLI, GitHub Copilot CLI, Cursor CLI,
  and Custom.
- Harness profiles are persisted launch recipes (executable, arguments, environment bindings, path
  bindings) that can start `fresh`, `resume`, or `fork` a session.
- Sessions overview projects live and retained sessions with paging, filtering, grouping, and exact
  reopen of the originating terminal.

**Document review**

- Anchored comments and batches over exact source ranges, with stale-anchor handling.
- Deliver a review to a live agent terminal by copy, insert, or send-now, depending on the
  provider's trusted submit contract.

**Web panes**

- Embedded web views inside the workbench, with title updates, blocked-navigation handling,
  browser-open fallback, and a "reveal source terminal" bridge back to the terminal that produced
  the view.

**Settings and diagnostics**

- Settings dialog for appearance, typography, Git, keybindings, terminal preferences, and harness
  profiles, with consent gating for composer-submit behavior.
- Diagnostic journal, evidence collection, and exportable diagnostic reports.

---

## Requirements

- **Node.js 24 or newer** (`engines.node: >=24`).
- A C/C++ toolchain, because `postinstall` rebuilds native modules:
  - `node-pty` is rebuilt against Electron's ABI.
  - The bundled `@hvir/rename-noreplace` Node-API addon is compiled with `node-gyp`.
- **macOS** or **Linux**. There is no Windows target.
- On headless Linux, `xvfb-run` is required to run the Electron smoke suites.

## Getting started

```bash
git clone <repository-url> hvir
cd hvir
npm ci          # also runs install:runtime (Electron + native module rebuilds)
npm run dev     # launch the app with hot reload
```

`npm run dev` and `npm run build` are preceded by `scripts/check-terminal-runtime.mts`, which
verifies that the installed `ghostty-web` runtime exposes the exact terminal capabilities this
checkout was reviewed against. If it fails, re-run `npm ci`.

Optionally install the repository's Git hooks (a pre-push typecheck + local-platform smoke run):

```bash
npm run hooks:install
```

## Building and packaging

```bash
npm run build          # typecheck, then build main / preload / renderer bundles
npm run build:dir      # unpacked application directory
npm run preview        # run the built app

npm run pack:mac:arm64     # macOS .pkg (arm64)
npm run pack:linux:x64     # Debian .deb (x64)
npm run pack:linux:arm64   # Debian .deb (arm64)
```

Artifacts are written to `dist/`. macOS ships a signed-capable `.pkg` installed to `/Applications`
with a hardened runtime; Linux ships a `.deb` with an AppArmor profile.

Both installers also provide an `hvir` shell command that opens a directory as a project:

```bash
hvir .
hvir ~/code/my-project
```

## Development scripts

| Command | What it does |
| --- | --- |
| `npm run verify` | The full gate: seams, ADRs, architecture, lint, typecheck, unit tests |
| `npm run lint` | ESLint across the repository |
| `npm run typecheck` | `tsc --noEmit` for both the node and web project graphs |
| `npm test` | Vitest unit suite (~376 test files, plain Node environment) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:mutation` | Stryker mutation testing |
| `npm run format` | Prettier write (`format:check` to verify) |
| `npm run check-seams` | Grep-level enforcement of the architectural seams |
| `npm run check-adrs` | Validate `docs/adr` record naming, sections, and lifecycle |
| `npm run architecture:check` | Enforce module size and direction policy (`architecture:report` to inspect) |

### Smoke and acceptance suites

Unit tests run under plain Node and never touch the Electron runtime. Behavior that depends on a
real Electron process is covered by scenario-driven smoke runs against a purpose-built smoke build:

```bash
npm run smoke                 # full scenario set
npm run smoke:macos           # macOS scenario set
npm run smoke:scenario <name> # a single scenario, e.g. git-workflow
npm run smoke:isolation       # failure and interruption isolation
npm run smoke:capacity        # capacity scenario
npm run performance:capacity  # capacity with the controlled performance gate
```

Installed-package and remote-host acceptance:

```bash
npm run smoke:linux:installed
npm run smoke:macos:installed
npm run acceptance:ssh:macos
npm run acceptance:ssh:real-host
```

The smoke runtime is compiled only into `--mode smoke` builds; the Vite config fails the production
build if any `src/main/smoke/` module or `HVIR_SMOKE` activation path survives into it.

## Architecture

hvir uses the standard three-target Electron split, with strict, machine-enforced seams between
them:

```
src/
  main/        Electron main process: window + workbench runtime, project registry,
               project hosts (local and SSH), PTY supervisor, Git engine and worker
               host, harness providers and profiles, sessions, document review,
               viewer, web panes, diagnostics, IPC authority router
  preload/     The only place allowed to touch ipcRenderer; exposes the typed bridge
  renderer/    React 19 UI: workbench layout, file tree, Git panel and graph, viewer
               panes, terminal workspaces, sessions overview, settings, dashboards
  shared/      Serializable vocabulary shared across the boundary (IPC contract,
               workspace/project types, harness provider and profile types,
               sessions projection, document review)
  workers/     Off-thread workers (Git, echo)
packages/      Native addons (rename-noreplace)
scripts/       Build, policy, smoke, release, and project-management tooling
test/          Vitest unit and contract suites
```

The seams are the load-bearing design constraint, checked by both ESLint rules and
`scripts/check-seams.sh`:

- `ipcRenderer` appears only in `src/preload/`; `ipcMain` only in the IPC authority router.
- Host primitives (`fs`, `child_process`, `chokidar`, `node-pty`) are imported only by
  `local-host.ts` — everything else goes through the `ProjectHost` transport seam, which is what
  makes local and SSH workspaces interchangeable.
- `host.spawnPty()` is called only by the PTY supervisor.
- Bundled harness identifiers live only in `src/main/harness/`; shared, persisted, and renderer code
  treat provider ids as opaque catalog data.
- `ssh2` details stay inside the `SshHost` adapter, and only `SshHost` is exported as the remote
  host façade.
- Git commands go through the shared command context; the Git worker proxy exposes only exact exec,
  read, and metadata operations.
- Raw loopback streams are transport for the main-owned web-pane proxy and nothing else.

Architectural decisions belong in `docs/adr` as `ADR-NNN-short-kebab-title.md`, each with
Context / Decision / Consequences / Rejected alternatives sections. `npm run check-adrs` enforces
that naming, structure, and lifecycle, and requires the directory to exist.

## Continuous integration

Pull requests run Linux verification (`npm run verify`), Linux Electron smoke plus development
performance and isolation runs, a reduced macOS arm64 Electron correctness gate, and CodeQL. A merge
acceptance job then proves one coherent CI attempt and exact base/head ancestry. Releases are driven
by the `Release` workflow from the default branch, which opens a validated version-only release PR
before publishing macOS and Linux packages.

## License

MIT — see [LICENSE](LICENSE).

Redistributed third-party components, including the modified terminal runtime and the
`rename-noreplace` binding, are documented in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). hvir is not affiliated with or endorsed by the
authors of the coding agents it can launch.
````

</details>


---

<sub>3m 30s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/986d17d8/hvir/README.md.**

/private/var/tmp/ws/986d17d8/hvir/README.md

```
File /private/var/tmp/ws/986d17d8/hvir/README.md updated with changes.
```


---

<sub>3m 33s</sub>

### `bash`

**Confirm only README.md was added**

$ cd /private/var/tmp/ws/986d17d8/hvir && git --no-pager status --short

```
?? README.md
<shellId: 44 completed with exit code 0>
```


---

<sub>3m 34s</sub>

### Copilot

Created `README.md` for **hvir** — an Electron desktop workbench for driving coding agents across local and SSH-backed projects.

Content is grounded in the actual code, not guessed:

- **What it is / features** — verified against `src/renderer` surfaces, `src/main` subsystems, and `src/shared` domain types (harness providers, profiles, sessions projection, document review).
- **Requirements & setup** — Node ≥24, native rebuilds (`node-pty`, `@hvir/rename-noreplace`), the `check-terminal-runtime` prebuild gate.
- **Packaging** — macOS `.pkg` / Linux `.deb` targets and the installed `hvir` CLI, from `electron-builder.yml` and `build/native/hvir-command`.
- **Scripts & test strategy** — all 55 npm scripts reviewed; unit vs. Electron smoke vs. acceptance distinction.
- **Architecture seams** — all 13 rules confirmed by running `npm run check-seams` (all pass).

Two accuracy notes I handled: no git remote is configured, so the clone URL is a placeholder; and `docs/adr` doesn't exist in this checkout (so `check-adrs`, and therefore `verify`, currently fails), so I worded that section as the enforced convention rather than claiming records exist. Markdown is Prettier-ignored, so no formatting gate applies.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
