# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6bdcdff6-63b1-4593-82ee-e2d1c35c2673`  
> - **Started:** 9/17/2026, 9:20:02 PM  
> - **Duration:** 1m 48s  
> - **Exported:** 9/17/2026, 9:21:51 PM  

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

I'll explore the project first to understand what it does.

---

<sub>2s</sub>

### `bash`

**List repo contents and git log**

$ cd /private/var/tmp/ws/c975e8e8/hvir && ls -la && git log --oneline -20 2>/dev/null | head -30

<details>
<summary>31 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 21:19 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 21:19 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 21:20 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 21:19 .githooks
drwxr-xr-x@   5 air-jarmak  wheel     160 Sep 17 21:19 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 21:19 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 21:19 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 21:19 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 21:19 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 21:19 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 21:19 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 21:19 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 21:19 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 21:19 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 21:19 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 21:19 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    7275 Sep 17 21:19 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 21:19 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 21:19 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 21:19 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 21:19 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 21:19 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 21:19 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 21:19 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 21:19 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 21:19 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 21:19 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 21:19 vitest.config.ts
1efc5e4 Initial commit
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/package.json.**

/private/var/tmp/ws/c975e8e8/hvir/package.json

<details>
<summary>142 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "description": "A lightweight, view-first workbench for agentic development.",
  "author": {
    "name": "hvir contributors",
    "email": "jarmak-personal@users.noreply.github.com"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "homepage": "https://github.com/jarmak-personal/hvir",
  "repository": {
    "type": "git",
    "url": "https://github.com/jarmak-personal/hvir.git"
  },
  "bugs": "https://github.com/jarmak-personal/hvir/issues",
  "desktopName": "hvir",
  "keywords": [
    "agentic-development",
    "electron",
    "terminal",
    "git",
    "ssh"
  ],
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

<sub>6s</sub>

### `bash`

**Show source tree**

$ cd /private/var/tmp/ws/c975e8e8/hvir && find src packages build .github -type d -not -path '*/node_modules/*' | head -60 && echo --- && ls scripts | head -60

<details>
<summary>114 lines</summary>

```
src
src/renderer
src/renderer/src
src/renderer/src/tree
src/renderer/src/settings
src/renderer/src/settings/sections
src/renderer/src/scrollbars
src/renderer/src/path-copy
src/renderer/src/development
src/renderer/src/layout
src/renderer/src/health
src/renderer/src/terminal
src/renderer/src/document-review
src/renderer/src/workspaces
src/renderer/src/context-menu
src/renderer/src/harness
src/renderer/src/styles
src/renderer/src/viewer
src/renderer/src/sessions
src/renderer/src/workbench
src/renderer/src/dashboards
src/renderer/src/diagnostics
src/renderer/src/git
src/shared
src/shared/ipc
src/workers
src/main
src/main/smoke
src/main/web-pane
src/main/pty
src/main/health
src/main/project-file-operations
src/main/terminal
src/main/document-review
src/main/harness
src/main/harness/providers
src/main/viewer
src/main/project-host
src/main/sessions
src/main/project-folder-picker
src/main/filename-search
src/main/window
src/main/diagnostics
src/main/ipc
src/main/ipc/features
src/main/git
src/preload
packages
packages/rename-noreplace
packages/rename-noreplace/build
packages/rename-noreplace/build/Release
packages/rename-noreplace/build/Release/obj.target
packages/rename-noreplace/build/Release/obj.target/rename_noreplace
packages/rename-noreplace/build/Release/.deps
packages/rename-noreplace/build/Release/.deps/Release
packages/rename-noreplace/build/Release/.deps/Release/obj.target
packages/rename-noreplace/build/Release/.deps/Release/obj.target/rename_noreplace
build
build/native
build/icons-linux
---
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### Copilot

Electron + React "hvir" workbench. Let me dig into features and docs.

---

<sub>1m 1s</sub>

### `bash`

**Inspect github config and adr script**

$ cd /private/var/tmp/ws/c975e8e8/hvir && find .github .githooks -type f | head -40 && echo ---ADR--- && head -40 scripts/check-adrs.mjs && echo ---SRCTOP--- && ls src/main src/renderer/src src/shared | head -80

<details>
<summary>131 lines</summary>

```
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
.github/ISSUE_TEMPLATE/config.yml
.github/dependabot.yml
.githooks/pre-push
---ADR---
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
---SRCTOP---
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

src/renderer/src:
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

src/shared:
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>20s</sub>

### task (Completed)

### Copilot

I’m inspecting the app’s structure and build/test scripts now, then I’ll summarize the concrete behavior and architecture with file evidence.

### `glob`

**src/main/**/***

"src/main/**/*"

<details>
<summary>314 matches</summary>

```
[glob: 294 path(s) under /private/var/tmp/ws/c975e8e8/hvir/src/main; grouped by directory]

/private/var/tmp/ws/c975e8e8/hvir/src/main/smoke/ (97 path(s))
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
  document-review-evidence.mts
  document-review-fixture.ts
  document-review.ts
  electron-process-metrics.ts
  external-documents.ts
  external-file-move.ts
  failure-evidence.mts
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
  interruption-identity.mts
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
  scenario-selection.mts
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/harness/ (36 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/project-file-operations/ (25 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/ (21 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/ (21 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/ (21 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/git/ (14 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/document-review/ (11 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/diagnostics/ (10 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/main/sessions/ (8 path(s))
  sessions-observation-application.ts
  sessions-observation-port.ts
  sessions-open-resolution.ts
  sessions-projection-identities.ts
  sessions-projection-values.ts
  sessions-telemetry-projection.ts
  sessions-usage-observation-port.ts
  sessions-usage-projection.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/terminal/ (7 path(s))
  electron-clipboard-file-paste.ts
  renderer-pty-lifecycle.ts
  session-registry.ts
  terminal-identity-publication.ts
  terminal-launch-admission.ts
  terminal-start-response.ts
  terminal-workspace-move-coordinator.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/pty/ (6 path(s))
  pty-contract.ts
  pty-launch-admission.ts
  pty-session-lifetime.ts
  pty-session-observation.ts
  pty-stream-attachment.ts
  pty-supervisor.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/window/ (6 path(s))
  electron-renderer-document-lifecycle.ts
  electron-renderer-recovery.ts
  electron-window-manager.ts
  renderer-recovery-monitor.ts
  window-health-tracker.ts
  window-policy.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/filename-search/ (4 path(s))
  filename-enumerator.ts
  filename-search-coordinator.ts
  filename-search-policy.ts
  index.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/health/ (2 path(s))
  workbench-health-events.ts
  workbench-health.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/project-folder-picker/ (2 path(s))
  index.ts
  project-folder-picker-coordinator.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/web-pane/ (2 path(s))
  loopback-http-proxy.ts
  web-pane-route-registry.ts

/private/var/tmp/ws/c975e8e8/hvir/src/main/viewer/ (1 path(s))
  document-read-authority.ts

[extensions: .ts=290, .mts=4]
```

</details>


### `glob`

**src/renderer/src/**/***

"src/renderer/src/**/*"

<details>
<summary>370 matches</summary>

```
[glob: 348 path(s) under /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src; grouped by directory]

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/ (69 path(s))
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
  terminal-color-schema.mts
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/ (59 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/styles/ (38 path(s))
  base.css
  composer-submit.css
  context-menu.css
  diagnostic-report.css
  dialogs.css
  document-review.css
  file-operations.css
  git-controls.css
  git-graph.css
  git-history.css
  git-inspector.css
  harness-settings.css
  health.css
  path-copy.css
  primitives.css
  projects.css
  provider-context.css
  scrollbars.css
  sessions-collection.css
  sessions-overview.css
  sessions-terminal-detail.css
  settings.css
  shell.css
  terminal-context-menu.css
  terminal-list.css
  terminal-move.css
  terminal-pane.css
  terminal-search.css
  terminal-shell.css
  terminal-theme-gallery.css
  tree.css
  viewer-content.css
  viewer-find.css
  viewer-tabs.css
  viewer-workload.css
  web-pane.css
  workspace-catalog.css
  workspace-state.css

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/settings/ (34 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/tree/ (27 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/document-review/ (23 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/git/ (19 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/workspaces/ (16 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/workbench/ (15 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/sessions/ (14 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/ (8 path(s))
  App.tsx
  ErrorBoundary.tsx
  hvir.d.ts
  main.tsx
  styles.css
  theme-model.ts
  theme.ts
  themes.css

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/dashboards/ (8 path(s))
  ElectronWebPaneSurface.tsx
  WebPane.tsx
  WebPaneStack.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts
  web-pane-surface.ts
  web-pane-url.ts
  web-pane-workspace-policy.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/development/ (4 path(s))
  development-performance-fixture.tsx
  development-performance-pump.tsx
  development-renderer-instrumentation.tsx
  performance-measure-budget.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/health/ (3 path(s))
  WorkbenchHealthControl.tsx
  use-diagnostic-evidence.ts
  use-workbench-health.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/layout/ (3 path(s))
  PaneResizer.tsx
  split-layout-policy.ts
  workspace-layout-persistence.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/path-copy/ (3 path(s))
  PathCopyMenu.tsx
  path-copy.ts
  use-path-copy-menu.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/diagnostics/ (2 path(s))
  DiagnosticReportDialog.tsx
  owned-capture-masks.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/context-menu/ (1 path(s))
  viewport-context-menu.ts

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/harness/ (1 path(s))
  ProviderContextMeter.tsx

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/scrollbars/ (1 path(s))
  scrollbar-presentation.ts

[extensions: .ts=222, .tsx=85, .css=40, .mts=1]
```

</details>


### `glob`

**src/shared/**/***

"src/shared/**/*"

<details>
<summary>51 matches</summary>

```
[glob: 47 path(s) under /private/var/tmp/ws/c975e8e8/hvir/src/shared; grouped by directory]

/private/var/tmp/ws/c975e8e8/hvir/src/shared/ (36 path(s))
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

/private/var/tmp/ws/c975e8e8/hvir/src/shared/ipc/ (11 path(s))
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

**src/preload/**/***

"src/preload/**/*"

```
/private/var/tmp/ws/c975e8e8/hvir/src/preload/terminal-clipboard-file-paste.ts
/private/var/tmp/ws/c975e8e8/hvir/src/preload/index.ts
/private/var/tmp/ws/c975e8e8/hvir/src/preload/renderer-diagnostics.ts
```


### `glob`

**src/workers/**/***

"src/workers/**/*"

```
/private/var/tmp/ws/c975e8e8/hvir/src/workers/git-worker.ts
/private/var/tmp/ws/c975e8e8/hvir/src/workers/echo-worker.ts
```


### `glob`

**packages/**/***

"packages/**/*"

<details>
<summary>14 matches</summary>

```
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/rename_noreplace.c
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/binding.gyp
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/LICENSE
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/index.js
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/package.json
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/binding.Makefile
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/config.gypi
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/Makefile
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/gyp-mac-tool
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/rename_noreplace.target.mk
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/Release/rename_noreplace.node
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/Release/obj.target/rename_noreplace/rename_noreplace.o
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/Release/.deps/Release/rename_noreplace.node.d
/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/build/Release/.deps/Release/obj.target/rename_noreplace/rename_noreplace.o.d
```

</details>


### `glob`

**build/**/***

"build/**/*"

<details>
<summary>19 matches</summary>

```
/private/var/tmp/ws/c975e8e8/hvir/build/icon-linux.svg
/private/var/tmp/ws/c975e8e8/hvir/build/entitlements.mac.plist
/private/var/tmp/ws/c975e8e8/hvir/build/pkg-scripts/preinstall
/private/var/tmp/ws/c975e8e8/hvir/build/pkg-scripts/postinstall
/private/var/tmp/ws/c975e8e8/hvir/build/icon-macos.png
/private/var/tmp/ws/c975e8e8/hvir/build/linux/hvir.apparmor
/private/var/tmp/ws/c975e8e8/hvir/build/linux/after-remove.sh
/private/var/tmp/ws/c975e8e8/hvir/build/linux/after-install.sh
/private/var/tmp/ws/c975e8e8/hvir/build/icon-macos.svg
/private/var/tmp/ws/c975e8e8/hvir/build/entitlements.mac.inherit.plist
/private/var/tmp/ws/c975e8e8/hvir/build/icon-macos.icns
/private/var/tmp/ws/c975e8e8/hvir/build/native/hvir-command
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/64x64.png
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/512x512.png
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/32x32.png
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/128x128.png
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/256x256.png
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/1024x1024.png
/private/var/tmp/ws/c975e8e8/hvir/build/icons-linux/16x16.png
```

</details>


### `view` — Failed

**view the file at /private/var/tmp/ws/c975e8e8/hvir/electron-vite.config.ts.**

/private/var/tmp/ws/c975e8e8/hvir/electron-vite.config.ts

```
Path does not exist
```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/electron-builder.yml.**

/private/var/tmp/ws/c975e8e8/hvir/electron-builder.yml

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/eslint.config.mjs.**

/private/var/tmp/ws/c975e8e8/hvir/eslint.config.mjs

<details>
<summary>473 lines</summary>

```
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'
import { smokeImportBoundary } from './scripts/smoke-import-boundary.mjs'

// --- Seam enforcement (AGENTS.md "Respect the seams") ---------------------
//
// These import bans are how the architecture is enforced mechanically rather
// than by convention. Native/host primitives may only be touched inside the
// `LocalHost` module; `ipcRenderer` only inside the preload bridge; and
// `.spawnPty()` may only be *called* by the PTY supervisor.

/** node builtins + native modules — confined to the LocalHost implementation. */
const HOST_PRIMITIVE_BANS = [
  'fs',
  'node:fs',
  'fs/promises',
  'node:fs/promises',
  'child_process',
  'node:child_process',
  'chokidar',
  'node-pty',
].map((name) => ({
  name,
  message:
    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
    'src/main/project-host/local-host.ts. Go through the ProjectHost seam (ADR-010).',
}))

const DYNAMIC_HOST_IMPORT_BANS = HOST_PRIMITIVE_BANS.map(({ name, message }) => ({
  selector: `ImportExpression[source.value='${name}']`,
  message,
}))

/** `ipcRenderer` — confined to the preload bridge. */
const IPC_RENDERER_BAN = {
  name: 'electron',
  importNames: ['ipcRenderer'],
  message:
    'ipcRenderer may only be used in src/preload. The renderer talks to main ' +
    'through the typed bridge (window.hvir), never ipcRenderer directly.',
}

const SPAWN_PTY_BAN = {
  selector:
    "MemberExpression[property.name='spawnPty'], " +
    "MemberExpression[computed=true][property.value='spawnPty']",
  message:
    'Every PTY must be spawned through the PTY supervisor (ADR-006). Do not access ' +
    'host.spawnPty outside src/main/pty/pty-supervisor.ts.',
}

// Both erased and runtime contract dependencies point inward. The two barrels
// are compatibility/composition surfaces, never domain dependencies.
const SHARED_CONTRACT_IMPORT_BAN =
  '(^|/)(ipc|index|shared)(\\.[cm]?[jt]sx?)?$|(^|/)(main|preload|renderer|workers)(/|$)|^\\.\\.?$|^electron$'
const SHARED_CONTRACT_MESSAGE =
  'Shared capability contracts import named shared leaves, not the IPC aggregate, barrels, or process implementations.'
const SHARED_CONTRACT_EXPRESSION_SELECTOR = SHARED_CONTRACT_IMPORT_BAN.replaceAll(
  '/',
  '\\/',
)

const HARNESS_FACADE_IMPORT_BAN = '(^|/)(?<!shared/)harness-provider(\\.[cm]?[jt]sx?)?$'
const HARNESS_ASSEMBLY_IMPORT_BAN =
  '(^|/)(?<!shared/)(bundled-harness-providers|harness-provider)(\\.[cm]?[jt]sx?)?$'
const HARNESS_IMPLEMENTATION_IMPORT_BAN =
  HARNESS_ASSEMBLY_IMPORT_BAN + '|(^|/)providers(/|$)|(^|/)(claude|codex)-'
const HARNESS_DIRECTION_MESSAGE =
  'Harness contracts and neutral policy depend inward, never on bundled assembly, concrete providers, or their observation implementations.'

const VIEWER_PRESENTATION_IMPORT_BAN =
  '(^|/)[A-Z][^/]*$|(^|/)(highlight-worker|highlight-request|source-highlighting|source-blame-gutter|use-[^/]+)(\\.[cm]?[jt]sx?)?$|^react(/|$)|^electron$'

function dependencyDirectionRules(
  pattern,
  message = HARNESS_DIRECTION_MESSAGE,
  caseSensitive = false,
) {
  const selector = (
    caseSensitive ? '(^|/)main/harness(/|$)|' + pattern : pattern
  ).replaceAll('/', '\\/')
  return {
    'no-restricted-imports': [
      'error',
      {
        paths: [...HOST_PRIMITIVE_BANS, IPC_RENDERER_BAN],
        patterns: [
          { regex: pattern, message, caseSensitive },
          // Viewer component names are case-sensitive. Preserve the inherited
          // renderer harness ban with its original case-insensitive semantics.
          ...(caseSensitive
            ? [{ regex: '(^|/)main/harness(/|$)', message: HARNESS_DIRECTION_MESSAGE }]
            : []),
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      SPAWN_PTY_BAN,
      ...DYNAMIC_HOST_IMPORT_BANS,
      {
        selector: `ImportExpression[source.value=/${selector}/], TSImportType[source.value=/${selector}/], CallExpression[callee.name='require'] > Literal.arguments[value=/${selector}/]`,
        message,
      },
    ],
  }
}

export default tseslint.config(
  { ignores: ['out/**', 'dist/**', 'node_modules/**', 'coverage/**'] },

  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx,mts,cts}'],
    plugins: { 'smoke-ownership': { rules: { inward: smokeImportBoundary } } },
    rules: { 'smoke-ownership/inward': 'error' },
  },

  // Type-aware linting for all TypeScript source.
  {
    files: ['**/*.{ts,tsx,mts}'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-restricted-imports': [
        'error',
        { paths: [...HOST_PRIMITIVE_BANS, IPC_RENDERER_BAN] },
      ],
      'no-restricted-syntax': ['error', SPAWN_PTY_BAN, ...DYNAMIC_HOST_IMPORT_BANS],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  {
    files: ['src/shared/**/*.{ts,tsx,mts,cts}'],
    ignores: ['src/shared/ipc.ts', 'src/shared/index.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [...HOST_PRIMITIVE_BANS],
          patterns: [
            { regex: SHARED_CONTRACT_IMPORT_BAN, message: SHARED_CONTRACT_MESSAGE },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        SPAWN_PTY_BAN,
        ...DYNAMIC_HOST_IMPORT_BANS,
        {
          selector: `ImportExpression[source.value=/${SHARED_CONTRACT_EXPRESSION_SELECTOR}/], TSImportType[source.value=/${SHARED_CONTRACT_EXPRESSION_SELECTOR}/], CallExpression[callee.name='require'] > Literal.arguments[value=/${SHARED_CONTRACT_EXPRESSION_SELECTOR}/]`,
          message: SHARED_CONTRACT_MESSAGE,
        },
      ],
    },
  },

  // The facade is for application compatibility, not an internal contract owner.
  {
    files: ['src/main/harness/**/*.{ts,tsx,mts,cts}'],
    ignores: ['src/main/harness/harness-provider.ts'],
    rules: dependencyDirectionRules(HARNESS_FACADE_IMPORT_BAN),
  },
  {
    files: ['src/main/harness/providers/**/*.{ts,tsx,mts,cts}'],
    rules: dependencyDirectionRules(HARNESS_ASSEMBLY_IMPORT_BAN),
  },
  {
    files: [
      'src/main/harness/harness-provider-contract.ts',
      'src/main/harness/harness-provider-registry.ts',
      'src/main/harness/harness-provider-capabilities.ts',
      'src/main/harness/harness-provider-probes.ts',
      'src/main/harness/harness-launch-selection.ts',
      'src/main/harness/harness-composer-contracts.ts',
      'src/main/harness/harness-text-validation.ts',
      'src/main/harness/harness-usage*.ts',
      'src/main/harness/harness-telemetry*.ts',
      'src/main/harness/bounded-line-reader.ts',
    ],
    rules: dependencyDirectionRules(HARNESS_IMPLEMENTATION_IMPORT_BAN),
  },

  // PTY internals depend on leaf contracts, never their facade or sibling owners.
  {
    files: ['src/main/pty/**/*.{ts,tsx,mts,cts}'],
    ignores: ['src/main/pty/pty-supervisor.ts'],
    rules: dependencyDirectionRules(
      HARNESS_IMPLEMENTATION_IMPORT_BAN +
        '|(^|/)pty-supervisor(\\.[cm]?[jt]sx?)?$|(^|/)pty-(launch-admission|session-lifetime|session-observation|stream-attachment)(\\.[cm]?[jt]sx?)?$',
      'PTY internal owners import leaf contracts, never the supervisor, sibling owners, or concrete harness implementations.',
    ),
  },

  // Project state and workflows consume the host contract, never concrete host owners.
  {
    files: [
      'src/main/project-registry.ts',
      'src/main/project-coordinator.ts',
      'src/main/project-host/project-host.ts',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            ...HOST_PRIMITIVE_BANS,
            IPC_RENDERER_BAN,
            {
              name: './project-host',
              message:
                'Import the ProjectHost contract directly, not concrete catalog exports.',
            },
          ],
          patterns: [
            {
              group: [
                '**/project-registry',
                '**/project-coordinator',
                '**/project-host/index',
                '**/project-host/ssh-*',
                '**/project-host/renderer-ssh-prompter',
                '**/project-host/project-host-catalog',
                '**/project-host/local-host',
                './ssh-*',
                './renderer-ssh-prompter',
                './project-host-catalog',
                './local-host',
              ],
              message:
                'Project state and workflows depend only on the ProjectHost contract and consumer-owned ports.',
            },
          ],
        },
      ],
    },
  },
  // Concrete catalogs implement host capabilities without project persistence/workflows.
  // The ProjectHost contract cannot depend on any concrete owner it describes.
  {
    files: ['src/main/project-host/project-host-catalog.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [...HOST_PRIMITIVE_BANS, IPC_RENDERER_BAN],
          patterns: [
            {
              group: ['**/project-registry', '**/project-coordinator'],
              message:
                'Host capabilities cannot depend on project persistence or project workflows.',
            },
          ],
        },
      ],
    },
  },

  // Renderer: React-specific rules.
  {
    files: ['src/renderer/**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...dependencyDirectionRules('(^|/)main/harness(/|$)'),
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // Viewer presentation and effects depend inward, including erased imports.
  {
    files: ['src/renderer/src/viewer/**/*.{ts,tsx}'],
    ignores: ['src/renderer/src/viewer/FileViewer.tsx'],
    rules: dependencyDirectionRules(
      '(^|/)FileViewer(\\.[cm]?[jt]sx?)?$',
      'Viewer presentation and effect owners cannot depend on FileViewer orchestration or harness implementation.',
      true,
    ),
  },
  {
    files: [
      'src/renderer/src/viewer/highlight-protocol.ts',
      'src/renderer/src/viewer/viewer-workload-policy.ts',
      'src/renderer/src/viewer/source-coordinate.ts',
      'src/renderer/src/viewer/viewer-position.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(main|preload|workers)(/|$)|' + VIEWER_PRESENTATION_IMPORT_BAN,
      'Pure viewer policy and highlight contracts cannot import presentation, effect, or process implementations.',
      true,
    ),
  },
  {
    files: ['src/renderer/src/viewer/*.worker.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(main|preload)(/|$)|' + VIEWER_PRESENTATION_IMPORT_BAN,
      'Viewer workers consume policy and protocols, never renderer components or their effects.',
      true,
    ),
  },

  // Contracts extracted from concrete consumers remain inward across all import forms.
  {
    files: ['src/main/diagnostics/diagnostic-journal.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(diagnostic-intake|diagnostic-report[^/]*|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'The journal consumes closed evidence contracts rather than report preparation or runtime consumers.',
    ),
  },
  {
    files: ['src/main/diagnostics/diagnostic-evidence.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(diagnostic-intake|diagnostic-journal|diagnostic-report[^/]*|runtime-diagnostics|authority-router|deps)(\\.[cm]?[jt]sx?)?$',
      'Closed diagnostic evidence and writer contracts cannot depend on their concrete consumers.',
    ),
  },
  {
    files: [
      'src/main/diagnostics/diagnostic-intake.ts',
      'src/main/diagnostics/diagnostic-report-evidence.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(diagnostic-intake|diagnostic-journal|diagnostic-report-coordinator|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'Diagnostic admission and evidence policy consume closed evidence contracts, never concrete consumers.',
    ),
  },
  {
    files: ['src/main/ipc/authority-router.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(deps|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'IPC authority consumes its own narrow port, never the feature dependency aggregate or diagnostic runtime.',
    ),
  },
  {
    files: [
      'src/main/ipc/authority-port.ts',
      'src/main/diagnostics/runtime-diagnostics.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(authority-router|deps|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'IPC diagnostic consumers use the closed authority port rather than the concrete router.',
    ),
  },
  {
    files: [
      'src/renderer/src/viewer/viewer-workspace-state.ts',
      'src/renderer/src/viewer/external-document-tabs.ts',
      'src/renderer/src/viewer/viewer-read-policy.ts',
      'src/renderer/src/viewer/viewer-path-rebind.ts',
      'src/renderer/src/viewer/viewer-path-removal.ts',
      'src/renderer/src/viewer/viewer-workspace-selectors.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(main|preload|workers)(/|$)|(^|/)viewer-workspace-model(\\.[cm]?[jt]sx?)?$|' +
        VIEWER_PRESENTATION_IMPORT_BAN,
      'Viewer state and policy depend inward, never on the workspace reducer, presentation, or effects.',
      true,
    ),
  },
  {
    files: [
      'src/renderer/src/tree/use-file-manager-reveal.ts',
      'src/renderer/src/tree/use-path-copy-action.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)use-file-create-actions(\\.[cm]?[jt]sx?)?$',
      'Tree action contracts and effects cannot depend on creation orchestration.',
    ),
  },
  {
    files: ['src/renderer/src/tree/file-action-menu.ts'],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)(use-[^/]+|DirectoryTree)(\\.[cm]?[jt]sx?)?$|^react(/|$)',
      'The tree action request contract cannot depend on its concrete hooks or views.',
    ),
  },
  {
    files: ['src/renderer/src/document-review/use-document-review-delivery.ts'],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)use-document-review-interaction(\\.[cm]?[jt]sx?)?$',
      'Review workspace contracts and delivery cannot depend on interaction orchestration.',
    ),
  },
  {
    files: ['src/renderer/src/document-review/document-review-workspace.ts'],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)(use-[^/]+|document-review-workspace-controller)(\\.[cm]?[jt]sx?)?$|^react(/|$)',
      'Review workspace contracts cannot depend on effect hooks or the concrete workspace controller.',
    ),
  },
  {
    files: ['scripts/project-management/project-token-fields.ts'],
    rules: dependencyDirectionRules(
      '(^|/)canonical-project(\\.[cm]?[jt]sx?)?$',
      'Canonical Project item contracts and field adapters cannot depend on the concrete Project client.',
    ),
  },
  {
    files: ['scripts/project-management/canonical-project-item.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(canonical-project|project-token-fields)(\\.[cm]?[jt]sx?)?$',
      'The canonical Project item contract cannot depend on its concrete client or field adapter.',
    ),
  },

  // Seam exemption: LocalHost owns the host primitives (but still not ipcRenderer).
  {
    files: ['src/main/project-host/local-host.ts'],
    rules: {
      'no-restricted-imports': ['error', { paths: [IPC_RENDERER_BAN] }],
      'no-restricted-syntax': ['error', SPAWN_PTY_BAN],
    },
  },

  // Seam exemption: the preload bridge owns ipcRenderer (but still not host primitives).
  {
    files: ['src/preload/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', { paths: [...HOST_PRIMITIVE_BANS] }],
    },
  },

  // Seam exemption: only the supervisor may call host.spawnPty().
  {
    files: ['src/main/pty/pty-supervisor.ts'],
    rules: {
      'no-restricted-syntax': ['error', ...DYNAMIC_HOST_IMPORT_BANS],
    },
  },

  // Tests may reach for node builtins directly to arrange fixtures — they are
  // not production seams.
  {
    files: ['test/**/*.ts'],
    rules: {
      'no-restricted-imports': 'off',
      'no-restricted-syntax': ['error', SPAWN_PTY_BAN],
    },
  },

  // Contributor process launchers may use Node host primitives directly; the
  // ProjectHost boundary governs application source under src/.
  {
    files: [
      'scripts/run-smoke-scenarios.mts',
      'scripts/architecture-hotspots.mts',
      'scripts/architecture-policy.mts',
      'scripts/architecture-inventory.mts',
      'scripts/architecture-authorization.mts',
      'scripts/architecture-github.mts',
      'scripts/architecture-wiring.mts',
      'scripts/architecture-module-resolution.mts',
      'scripts/architecture-module-graph.mts',
      'scripts/run-smoke-interruption.mts',
      'scripts/smoke-failure-artifact.mts',
      'scripts/inspect-packaged-runtime.mts',
      'scripts/installed-startup-probe.mts',
      'scripts/real-host-ssh-contract.mts',
      'scripts/run-real-host-ssh-acceptance.mts',
      'scripts/require-release-ci-evidence.mts',
      'scripts/prepare-release-linux-package.mts',
      'scripts/validate-release-pr.mts',
      'scripts/generate-terminal-theme-catalog.mts',
      'scripts/check-terminal-runtime.mts',
      'scripts/agent-work-checkpoint-store.mts',
      'scripts/ghostty-web-update/candidate-bundle.mts',
      'scripts/ghostty-web-update/cli.mts',
      'scripts/ghostty-web-update/github-delivery.mts',
      'scripts/ghostty-web-update/github-release-source.mts',
      'scripts/ghostty-web-update/repository-candidate.mts',
      'scripts/project-management/native-issue-worktrees.ts',
    ],
    rules: {
      'no-restricted-imports': 'off',
    },
  },

  // Config / plain-JS files: no type-aware linting.
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  prettier,
)
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/vitest.config.ts.**

/private/var/tmp/ws/c975e8e8/hvir/vitest.config.ts

<details>
<summary>12 lines</summary>

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
```

</details>


### `glob`

**scripts/**/***

"scripts/**/*"

<details>
<summary>111 matches</summary>

```
[glob: 106 path(s) under /private/var/tmp/ws/c975e8e8/hvir/scripts; grouped by directory]

/private/var/tmp/ws/c975e8e8/hvir/scripts/ (50 path(s))
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
  inspect-packaged-runtime.mts
  install-git-hooks.sh
  installed-harness-dialog-probe.mts
  installed-startup-probe.mts
  native-installer.template.sh
  phase8-gauntlet.sh
  prepare-release-linux-package.mts
  prepare-release-pr.mjs
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

/private/var/tmp/ws/c975e8e8/hvir/scripts/project-management/ (48 path(s))
  audit-canonical-project.ts
  canonical-project-config.ts
  canonical-project-fields.ts
  canonical-project-item.ts
  canonical-project.ts
  contributor-status-cli.ts
  contributor-status.ts
  contributor-token-migration.ts
  github-client.ts
  github-contributor-acceptance.ts
  github-delivery-adapters.ts
  github-issues.ts
  github-kind-automation.ts
  github-pagination.ts
  github-pull-requests.ts
  github-session-tokens.ts
  github-token-migration.ts
  issue-context-cli.ts
  issue-context.ts
  issue-delivery.ts
  issue-planning.ts
  issue-start-cli.ts
  issue-start.ts
  kind-cli.ts
  kind-policy.ts
  kind-reconciler.ts
  legacy-token-evidence.ts
  migrate-project-tokens.ts
  native-issue-worktrees.ts
  package.json
  planning-cli.ts
  planning-fields.ts
  planning-record.ts
  project-config.ts
  project-token-fields.ts
  pull-request-cli.ts
  pull-request-planning.ts
  pull-request-relationships.ts
  read-contributor-status.ts
  read-issue-context.ts
  read-planning-record.ts
  session-token-allocation.ts
  session-token-capture.ts
  session-token-receipts.ts
  start-issue.ts
  sync-kind.ts
  sync-pull-request-planning.ts
  token-migration-plan.ts

/private/var/tmp/ws/c975e8e8/hvir/scripts/ghostty-web-update/ (8 path(s))
  candidate-bundle.mts
  cli.mts
  coordinator.mts
  github-client.mts
  github-delivery.mts
  github-release-source.mts
  policy.mts
  repository-candidate.mts

[extensions: .ts=47, .mts=40, .sh=10, .mjs=7, .json=2]
```

</details>


### Copilot

I’ve mapped the source tree; next I’m pulling the app entry points, IPC contracts, and the scripts that define the architectural checks and verification flow.

### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/package.json.**

/private/var/tmp/ws/c975e8e8/hvir/package.json

<details>
<summary>142 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "description": "A lightweight, view-first workbench for agentic development.",
  "author": {
    "name": "hvir contributors",
    "email": "jarmak-personal@users.noreply.github.com"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "homepage": "https://github.com/jarmak-personal/hvir",
  "repository": {
    "type": "git",
    "url": "https://github.com/jarmak-personal/hvir.git"
  },
  "bugs": "https://github.com/jarmak-personal/hvir/issues",
  "desktopName": "hvir",
  "keywords": [
    "agentic-development",
    "electron",
    "terminal",
    "git",
    "ssh"
  ],
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


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/index.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/preload/index.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/preload/index.ts

<details>
<summary>103 lines</summary>

```
/**
 * Preload bridge — the ONLY module permitted to touch `ipcRenderer` (enforced
 * by lint). It exposes a single typed surface, `window.hvir`, validated against
 * the shared IPC contract. The renderer never sees `ipcRenderer` and can only
 * reach channels declared in `INVOKE_CHANNELS`.
 */

import { contextBridge, ipcRenderer, webUtils } from 'electron'

import {
  EVENT_CHANNELS,
  MAX_EXTERNAL_FILE_SOURCES,
  RENDERER_INVOKE_CHANNELS,
  SEND_CHANNELS,
  isRendererDiagnosticSession,
  type HvirApi,
  type IpcEventChannel,
  type IpcEventPayload,
  type RendererIpcInvokeChannel,
  type IpcRequest,
  type IpcResponse,
  type IpcSendChannel,
  type IpcSendPayload,
} from '../shared'
import { RendererDiagnosticsAdapter } from './renderer-diagnostics'
import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'

const rendererDiagnostics = new RendererDiagnosticsAdapter({
  send: (batch) => ipcRenderer.send('diagnostics:render-containment', batch),
})

let readyGeneration: number | undefined
let readyRequested = false
let readySent = false
const signalRendererReady = (): void => {
  if (!readyRequested || readySent || readyGeneration === undefined) return
  readySent = true
  ipcRenderer.send('app:renderer-ready', { ownerGeneration: readyGeneration })
}

ipcRenderer.on('diagnostics:session', (_event, session: unknown) => {
  rendererDiagnostics.activate(session)
  if (isRendererDiagnosticSession(session)) {
    readyGeneration = session.ownerGeneration
    signalRendererReady()
  }
})

const api: HvirApi = {
  rendererReady: () => {
    readyRequested = true
    signalRendererReady()
  },
  resolveTerminalClipboardFilePaste: (file) =>
    terminalClipboardFilePasteText(file, (candidate) =>
      webUtils.getPathForFile(candidate),
    ),
  diagnostics: {
    processSandboxed: process.sandboxed,
    recordRenderContainment: (occurrenceId) =>
      rendererDiagnostics.recordRenderContainment(occurrenceId),
  },
  externalFiles: {
    acquireDropped: (files) => {
      if (files.length > MAX_EXTERNAL_FILE_SOURCES) {
        return Promise.reject(
          new Error(
            `The external file list exceeds ${MAX_EXTERNAL_FILE_SOURCES} entries`,
          ),
        )
      }
      const paths = files.map((file) => webUtils.getPathForFile(file))
      return ipcRenderer.invoke('fs:acquire-dropped-files', { paths })
    },
  },
  invoke<C extends RendererIpcInvokeChannel>(
    channel: C,
    request: IpcRequest<C>,
  ): Promise<IpcResponse<C>> {
    if (!RENDERER_INVOKE_CHANNELS.includes(channel)) {
      return Promise.reject(
        new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
      )
    }
    return ipcRenderer.invoke(channel, request) as Promise<IpcResponse<C>>
  },
  send<C extends IpcSendChannel>(channel: C, payload: IpcSendPayload<C>): void {
    if (!SEND_CHANNELS.includes(channel)) {
      throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
    }
    ipcRenderer.send(channel, payload)
  },
  on<E extends IpcEventChannel>(
    channel: E,
    callback: (payload: IpcEventPayload<E>) => void,
  ) {
    if (!EVENT_CHANNELS.includes(channel)) {
      throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
    }
    const listener = (_event: Electron.IpcRendererEvent, payload: unknown): void => {
      callback(payload as IpcEventPayload<E>)
    }
    ipcRenderer.on(channel, listener)
    return () => {
      ipcRenderer.off(channel, listener)
    }
  },
}

contextBridge.exposeInMainWorld('hvir', api)
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/shared/ipc.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/shared/ipc.ts

<details>
<summary>176 lines</summary>

```
/** One typed preload API and explicit composition of feature-owned wire contracts. */
import type { Disposer } from './disposer'
import type { OperationResult } from './operation-result'
import type { ExternalFileGrantResult } from './project-file-operations'
import {
  composeIpcContracts,
  ipcChannels,
  type InvokeMap,
  type SendMap,
  type EventMap,
  type PreloadOnlyChannel,
} from './ipc-contract'
import { appIpc } from './ipc/app'
import { diagnosticsIpc } from './ipc/diagnostics'
import { projectIpc } from './ipc/project'
import { filesystemIpc } from './ipc/filesystem'
import { gitIpc } from './ipc/git'
import { previewIpc } from './ipc/preview'
import { harnessIpc } from './ipc/harness'
import { terminalIpc } from './ipc/terminal'
import { sessionsIpc } from './ipc/sessions'
import { webPaneIpc } from './ipc/web-pane'
import { documentReviewIpc } from './ipc/document-review'

// Compatibility only: domain contracts import their named owners directly.
export { type AppInfo, type EchoRequest, type EchoResponse } from './ipc/app'
export {
  MAX_PROJECT_WATCH_INTERESTS,
  type ProjectWatchInterestsRequest,
  type ProjectWatchInterestsResponse,
  type ProjectHostOption,
  type OpenProjectRequest,
  type SwitchWorkspaceRequest,
  type RefreshProjectRequest,
  type CloseProjectRequest,
  type PruneProjectWorktreesRequest,
  type DismissWorkspaceRequest,
  type AcknowledgeWorkspaceRequest,
  type PlanWorkspaceCloseRequest,
  type WorkspaceClosePlan,
  type CloseWorkspaceRequest,
  type ReopenWorkspaceRequest,
  type ConnectHostRequest,
  type DisconnectHostRequest,
  type ConnectedHost,
  type BrowseHostRequest,
  type BrowseHostResponse,
  type ProjectFolderPickerStartRequest,
  type ProjectFolderPickerLease,
  type ProjectFolderPickerBrowseRequest,
  type ProjectFolderPickerCreateDirectoryRequest,
  type ProjectFolderPickerCloseRequest,
  type SshPromptRequest,
  type SshPromptResponse,
} from './ipc/project'
export {
  type ReadDirectoryRequest,
  type ReadFileRequest,
  type RevealProjectEntryRequest,
  type AcquireDroppedFilesRequest,
  type ResolveEntryResponse,
  type ReadFileResponse,
  type ReadAssetResponse,
} from './ipc/filesystem'
export {
  type HarnessProfilesRequest,
  type HarnessProbeProfilesRequest,
  type HarnessProbeTemplatesRequest,
  type MaterializeHarnessProfilesRequest,
  type SaveHarnessProfileRequest,
  type HarnessProfileRequest,
  type HarnessPreviewRequest,
  type AuthorizeHarnessPathRequest,
  type ConfigureComposerSubmitRequest,
} from './ipc/harness'
export {
  type StartPtyRequest,
  type StartPtyResponse,
  type TerminalIdentityStatus,
  type TerminalRecoverySession,
  type TerminalLayoutEntry,
  type TerminalRecoveryRequest,
  type RecordTerminalRecoveryDecisionRequest,
  type TerminalLayoutRequest,
  type ForgetTerminalRequest,
  type PlanTerminalMoveRequest,
  type TerminalMovePlan,
  type MoveTerminalRequest,
  type MoveTerminalResponse,
  type RebindTerminalProfileRequest,
  MAX_CLIPBOARD_WRITE_BYTES,
} from './ipc/terminal'
export {
  type WebPaneCommandAction,
  type OpenWebPaneRequest,
  type OpenWebPaneResponse,
  type CloseWebPaneRequest,
  type OpenWebPaneExternalRequest,
  type OpenWebPaneBrowserRequest,
  type WebPaneBlockedNavigation,
} from './ipc/web-pane'
export { type ProjectRootResponse, type ProjectState } from './workspace-types'
export { type OperationResult, unwrapOperation } from './operation-result'
export type { TerminalAttentionState } from './terminal-attention'

const contract = composeIpcContracts(
  appIpc,
  diagnosticsIpc,
  projectIpc,
  filesystemIpc,
  gitIpc,
  previewIpc,
  harnessIpc,
  terminalIpc,
  sessionsIpc,
  webPaneIpc,
  documentReviewIpc,
)

export type IpcInvokeMap = InvokeMap<typeof contract>
export type IpcSendMap = SendMap<typeof contract>
export type IpcEventMap = EventMap<typeof contract>
export type IpcInvokeChannel = keyof IpcInvokeMap

export type RendererIpcInvokeChannel = Exclude<
  IpcInvokeChannel,
  PreloadOnlyIpcInvokeChannel
>

export type IpcSendChannel = keyof IpcSendMap

export type IpcEventChannel = keyof IpcEventMap

export type IpcRequest<C extends IpcInvokeChannel> = IpcInvokeMap[C]['request']

export type IpcResponse<C extends IpcInvokeChannel> = IpcInvokeMap[C]['response']

export type IpcSendPayload<C extends IpcSendChannel> = IpcSendMap[C]

export type IpcEventPayload<E extends IpcEventChannel> = IpcEventMap[E]

/**
 * The surface exposed to the renderer as `window.hvir` (via the preload
 * bridge). Defined here — a pure, electron-free type — so the renderer can type
 * against it without importing anything from main/preload.
 */
export interface HvirApi {
  /** Signals that the workbench surface committed for the preload's exact generation. */
  rendererReady(): void
  /** Resolve one disk-backed clipboard File to safe local terminal paste text. */
  resolveTerminalClipboardFilePaste(file: File): string | undefined
  invoke<C extends RendererIpcInvokeChannel>(
    channel: C,
    request: IpcRequest<C>,
  ): Promise<IpcResponse<C>>
  send<C extends IpcSendChannel>(channel: C, payload: IpcSendPayload<C>): void
  on<E extends IpcEventChannel>(
    channel: E,
    callback: (payload: IpcEventPayload<E>) => void,
  ): Disposer
  readonly externalFiles: {
    /** Converts renderer File objects to inert main-owned paths inside preload. */
    acquireDropped(
      files: readonly File[],
    ): Promise<OperationResult<ExternalFileGrantResult>>
  }
  readonly diagnostics: {
    /** Electron's renderer-process sandbox state, surfaced read-only by preload. */
    readonly processSandboxed: boolean
    /** Domain-owned, content-free evidence. Invalid or overloaded calls are dropped. */
    recordRenderContainment(occurrenceId: string): void
  }
}

export type PreloadOnlyIpcInvokeChannel = PreloadOnlyChannel<typeof contract>
export const INVOKE_CHANNELS = ipcChannels(contract.invoke)
export const SEND_CHANNELS = ipcChannels(contract.send)
export const EVENT_CHANNELS = ipcChannels(contract.event)
export const PRELOAD_ONLY_INVOKE_CHANNELS: readonly PreloadOnlyIpcInvokeChannel[] =
  INVOKE_CHANNELS.filter(
    (channel): channel is PreloadOnlyIpcInvokeChannel =>
      contract.invoke[channel].access === 'preload',
  )
export const RENDERER_INVOKE_CHANNELS: readonly RendererIpcInvokeChannel[] =
  INVOKE_CHANNELS.filter(
    (channel): channel is RendererIpcInvokeChannel =>
      contract.invoke[channel].access === 'renderer',
  )
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/check-seams.sh.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/check-seams.sh

<details>
<summary>99 lines</summary>

```
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
hits=$(grep -rnE '\.currentOwner\(|\.realpath\(|getRegisteredWorkspaceRoot|\basHostId\b|\bdirnameHostPath\b' \
  'src/main/ipc/features' --include='*.ts' --include='*.tsx' --include='*.mts' || true)
report "IPC features use central owner/path authority" "$hits"

# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
# consumers continue to depend on ProjectHost and host-qualified paths only.
hits=$(grep -rnE "from ['\"]ssh2['\"]|import\(['\"]ssh2['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -vE '^src/main/project-host/ssh-(client-lifecycle|host|host-options|file-access|exclusive-create|project-file-transfer|abort|transport-pool|watch-service)\.ts' || true)
report "ssh2 details stay inside the SshHost adapter" "$hits"

# 9. Host-local collaborators share SshHost's authentication lifecycle. They
# receive authenticated clients through narrow ports and never construct one.
hits=$(grep -rnE '\bnew Client\(|clientFactory' \
  src/main/project-host/ssh-{client-lifecycle,file-access,exclusive-create,project-file-transfer,transport-pool,watch-service}.ts || true)
report "SSH collaborators do not create independent clients" "$hits"

# 10. The collaborators are private composition details, not parallel
# ProjectHost façades exposed to consumers through the package barrel.
hits=$(grep -nE 'Ssh(FileAccess|TransportPool|WatchService|AuthenticationLifecycle)|startSshAuthentication' \
  src/main/project-host/index.ts || true)
report "only SshHost is exported as the remote host façade" "$hits"

# 11. The project-host catalog is the only main-process owner allowed to
# construct SSH hosts. Project persistence/workflows cannot import concrete host
# owners, and the catalog cannot depend on project persistence/workflows.
hits=$({
  grep -rnE '\bnew SshHost\(' src/main --include='*.ts' --include='*.mts' \
    | grep -v '^src/main/project-host/project-host-catalog.ts' || true
  grep -nE "RendererSshPrompter|SshHostTrustStore|LocalSshIdentitySource|parseSshConfig|known-hosts|identityFileCandidates|from ['\"]\./project-host/(ssh-host|ssh-host-trust|ssh-identity-source|renderer-ssh-prompter|project-host-catalog)['\"]" \
    src/main/project-registry.ts src/main/project-coordinator.ts || true
  grep -nE "from ['\"][^'\"]*(project-registry|project-coordinator)['\"]" \
    src/main/project-host/project-host-catalog.ts src/main/project-host/project-host.ts || true
  sed -n '/^export class ProjectRegistry/,$p' src/main/project-registry.ts \
    | grep -nE '^  (public )?(async )?(listHosts|hostById|connectedHosts|connectHost|disconnectHost|disconnectSshHosts|browseHost)[(:=]' || true
})
report "SSH construction and implementation owners stay in the host catalog" "$hits"

# 12. Git capability modules share one command/cancellation/root policy. No
# capability constructs a git invocation against the host directly.
hits=$(grep -rnF ".exec('git'" src/main/git --include='*.ts' --include='*.mts' \
  | grep -vE '^src/main/git/(git-command-context|worker-host-broker)\.ts' || true)
report "Git commands use the shared command context" "$hits"

# 13. The utility-process proxy implements only Git's exact exec/read/metadata port,
# rather than pretending to be a complete ProjectHost with never placeholders.
hits=$(grep -nE 'implements ProjectHost|execStream\(\): never|spawnPty\(\): never|connectLoopback\(\): never|readFile\(\): never|writeFile\(\): never|readdir\(\): never|stat\(\): never|realpath\(\): never|watch\(\): never' \
  src/workers/git-worker.ts || true)
report "Git worker proxy exposes only exact exec, read, and metadata operations" "$hits"

if [[ "$fail" -ne 0 ]]; then
  printf '\n\033[31mseam check failed\033[0m\n'
  exit 1
fi
printf '\nseam check passed\n'
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/check-adrs.mjs

<details>
<summary>162 lines</summary>

```
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
  const previous = recordIds.get(id)
  if (previous) {
    errors.push(`ADR-${id} is duplicated by ${previous} and ${name}`)
  }
  recordIds.set(id, name)

  if (!source.startsWith(`# ADR-${id}: `)) {
    errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
  }

  let previousOffset = -1
  for (const section of requiredSections) {
    const matches = [...source.matchAll(new RegExp(`^${section}$`, 'gm'))]
    if (matches.length !== 1) {
      errors.push(`docs/adr/${name}: expected exactly one ${section}`)
      continue
    }
    if (matches[0].index < previousOffset) {
      errors.push(`docs/adr/${name}: required decision sections are out of order`)
    }
    previousOffset = matches[0].index
  }

  if (/^\s*[-*]\s+\[[ xX]\]/m.test(source)) {
    errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
  }
  if (
    /^#{2,}\s+(?:status|implementation|progress|acceptance|verification|test(?: run)? evidence|retrospective|research queue|delivery sequence|rollout plan)\b/im.test(
      source,
    )
  ) {
    errors.push(
      `docs/adr/${name}: progress, evidence, and rollout sections do not belong in ADRs`,
    )
  }
}

const design = readFileSync(designPath, 'utf8')
const indexSection = design.match(/## 4\. Key decisions\n([\s\S]*?)\n## 5\. Architecture/)
if (!indexSection) {
  errors.push('docs/design.md: missing bounded section 4 ADR index')
} else {
  errors.push(...validateAdrLifecycles(recordSources, indexSection[1]))
  const indexed = [
    ...indexSection[1].matchAll(
      /^### \[ADR-(\d{3}) — [^\]]+\]\(adr\/(ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md)\)$/gm,
    ),
  ]
  const indexedFiles = indexed.map((match) => match[2])
  for (const match of indexed) {
    if (match[1] !== match[3]) {
      errors.push(`docs/design.md: ADR-${match[1]} links to ADR-${match[3]}`)
    }
  }
  for (const name of records) {
    const count = indexedFiles.filter((indexedName) => indexedName === name).length
    if (count !== 1) {
      errors.push(`docs/design.md: ${name} must appear exactly once in the ADR index`)
    }
  }
  for (const name of indexedFiles) {
    if (!records.includes(name)) {
      errors.push(`docs/design.md: index points to non-record ${name}`)
    }
  }
  if (
    /^\*\*Decision:\*\*/m.test(indexSection[1]) ||
    /^#### .*addendum/im.test(indexSection[1])
  ) {
    errors.push(
      'docs/design.md: ADR bodies or implementation addenda remain embedded in the index',
    )
  }
}

function markdownFiles(directory) {
  const files = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || ['node_modules', 'out'].includes(entry.name))
      continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...markdownFiles(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function headingHasFragment(path, fragment) {
  const decoded = decodeURIComponent(fragment).toLowerCase()
  const headings = readFileSync(path, 'utf8').match(/^#{1,6}\s+.+$/gm) ?? []
  return headings.some((heading) => {
    const text = heading
      .replace(/^#{1,6}\s+/, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_~]/g, '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s/g, '-')
    return text === decoded
  })
}

for (const sourcePath of markdownFiles(root)) {
  const source = readFileSync(sourcePath, 'utf8')
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const href = match[1].replace(/^<|>$/g, '')
    if (/^(?:[a-z]+:|#)/i.test(href)) continue
    const [withoutFragment, fragment] = href.split('#', 2)
    const localPart = withoutFragment.split('?', 1)[0]
    const targetPath = resolve(dirname(sourcePath), decodeURIComponent(localPart))
    const sourceIsAdrSurface =
      sourcePath === designPath || sourcePath.startsWith(`${adrDirectory}/`)
    const targetIsAdr =
      targetPath.startsWith(`${adrDirectory}/`) || targetPath === adrDirectory
    if (!sourceIsAdrSurface && !targetIsAdr) continue
    if (!existsSync(targetPath)) {
      errors.push(`${relative(root, sourcePath)}: broken local link ${href}`)
    } else if (
      fragment &&
      targetPath.endsWith('.md') &&
      !headingHasFragment(targetPath, fragment)
    ) {
      errors.push(`${relative(root, sourcePath)}: missing heading fragment in ${href}`)
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exitCode = 1
} else {
  console.log(`ADR structure check passed (${records.length} records)`)
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-hotspots.mjs.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-hotspots.mjs

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()

```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/check-terminal-runtime.mts

<details>
<summary>127 lines</summary>

```
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
          },
        },
        requestRender(force?: boolean) {
          forcedRender = force
        },
      },
      [provider],
    )
  } catch {
    return false
  }
  return (
    receivedProvider === provider && receivedPriority === true && forcedRender === true
  )
}

function isTerminalConstructor(value: unknown): value is TerminalConstructor {
  if (typeof value !== 'function') return false
  const prototype = Reflect.get(value, 'prototype') as unknown
  return typeof prototype === 'object' && prototype !== null
}

export function assertTerminalRuntimeContract(runtime: TerminalRuntimeModule): void {
  const missing: string[] = REQUIRED_TERMINAL_METHODS.filter(
    (method) => typeof Reflect.get(runtime.Terminal.prototype, method) !== 'function',
  )
  missing.push(
    ...REQUIRED_PARSER_METHODS.filter(
      (method) =>
        typeof Reflect.get(runtime.GhosttyTerminal.prototype, method) !== 'function',
    ),
  )
  if (!hasCustomLinkProviderPriorityAndForcedRender(runtime.Terminal.prototype)) {
    missing.push('custom link-provider priority and forced render')
  }
  if (missing.length === 0) return

  throw new Error(
    `Installed dependencies do not match this checkout: ghostty-web is missing required terminal runtime capabilities (${missing.join(', ')}). ${RECOVERY}`,
  )
}

export async function verifyInstalledTerminalWasmEvidence(
  readWasmBytes: ReadInstalledWasmBytes = readInstalledWasmBytes,
): Promise<void> {
  let actualBytes: number
  try {
    actualBytes = await readWasmBytes()
  } catch (cause) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm could not be inspected. ${RECOVERY}`,
      { cause },
    )
  }
  const expectedBytes = GHOSTTY_TERMINAL_CAPABILITY_PROFILE.artifact.wasmBytes
  if (actualBytes === expectedBytes) return
  throw new Error(
    `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm is ${actualBytes} bytes; the reviewed capability profile requires ${expectedBytes}. ${RECOVERY}`,
  )
}

export async function verifyTerminalRuntimeContract(
  loadRuntime: LoadTerminalRuntime = async () => import('ghostty-web'),
): Promise<void> {
  await verifyInstalledTerminalWasmEvidence()
  let runtime: unknown
  try {
    runtime = await loadRuntime()
  } catch (cause) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web could not be loaded. ${RECOVERY}`,
      { cause },
    )
  }
  const terminal = Reflect.get(Object(runtime), 'Terminal') as unknown
  const parser = Reflect.get(Object(runtime), 'GhosttyTerminal') as unknown
  if (!isTerminalConstructor(terminal) || !isTerminalConstructor(parser)) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web does not export the required Terminal and GhosttyTerminal constructors. ${RECOVERY}`,
    )
  }
  assertTerminalRuntimeContract({ Terminal: terminal, GhosttyTerminal: parser })
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await verifyTerminalRuntimeContract()
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
```

</details>


### `glob`

****/ADR***

"**/ADR*"

```
No files matched the pattern.
```


### Copilot

I found the seam and terminal checks; now I’m pulling the renderer’s top-level layout and the package/build config details that determine the actual panes and packaging targets.

### `rg`

**export default defineConfig|main:|renderer:|preload:|build:**

"export default defineConfig|main:|renderer:|preload:|build:" in *electron-vite*.ts

```
No matches found.
```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/App.tsx (lines 1-260)

<details>
<summary>260 lines</summary>

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
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/index.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/index.ts (lines 1-260)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/authority-router.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/authority-router.ts (lines 1-260)

<details>
<summary>244 lines</summary>

```
import { ipcMain } from 'electron'
import {
  EVENT_CHANNELS,
  INVOKE_CHANNELS,
  SEND_CHANNELS,
  asHostId,
  dirnameHostPath,
  hostPath,
  hostPathEquals,
  type HostPath,
  type IpcEventChannel,
  type IpcInvokeChannel,
  type IpcRequest,
  type IpcResponse,
  type IpcSendChannel,
  type IpcSendPayload,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import type { RendererOwner } from '../renderer-resource-scopes'
import type {
  IpcContractDiagnostic,
  IpcProjectAuthorityPort,
  IpcRouterAuthorityPort,
} from './authority-port'
export type { IpcContractDiagnostic } from './authority-port'
import { reconstructIpcHostPath } from './host-path-authority'
import {
  OWNER_SCOPED_INVOKE_CHANNELS,
  OWNER_SCOPED_SEND_CHANNELS,
} from './authority-channel-policy'

export {
  AUTHORITY_SCOPED_INVOKE_CHANNELS,
  OWNER_SCOPED_INVOKE_CHANNELS,
  OWNER_SCOPED_SEND_CHANNELS,
} from './authority-channel-policy'
export interface IpcInvokeContext {
  readonly sender: Electron.WebContents
  readonly authority: IpcAuthority
  owner(): RendererOwner
}
export interface IpcSendContext {
  readonly sender: Electron.WebContents
  readonly authority: IpcAuthority
  owner(): RendererOwner
}
export type IpcInvokeHandler<C extends IpcInvokeChannel> = (
  req: IpcRequest<C>,
  context: IpcInvokeContext,
) => IpcResponse<C> | Promise<IpcResponse<C>>
export type IpcSendHandler<C extends IpcSendChannel> = (
  payload: IpcSendPayload<C>,
  context: IpcSendContext,
) => void
/** Narrow capability given to feature registrars; transport and lifecycle stay private. */
export interface IpcRegistrar {
  readonly authority: IpcAuthority
  handle<C extends IpcInvokeChannel>(channel: C, handler: IpcInvokeHandler<C>): void
  handleSend<C extends IpcSendChannel>(channel: C, handler: IpcSendHandler<C>): void
}
export interface IpcMainRegistrationPort {
  handle(
    channel: string,
    listener: (event: Electron.IpcMainInvokeEvent, request: unknown) => unknown,
  ): void
  removeHandler(channel: string): void
  on(
    channel: string,
    listener: (event: Electron.IpcMainEvent, payload: unknown) => void,
  ): unknown
  removeListener(
    channel: string,
    listener: (event: Electron.IpcMainEvent, payload: unknown) => void,
  ): unknown
}
const electronIpcMainPort = ipcMain as unknown as IpcMainRegistrationPort
export interface EffectiveIpcManifest {
  readonly invoke: readonly IpcInvokeChannel[]
  readonly send: readonly IpcSendChannel[]
  readonly event: readonly IpcEventChannel[]
}

export class IpcAuthorityRouter {
  readonly authority: IpcAuthority
  private readonly invokeChannels = new Set<IpcInvokeChannel>()
  private readonly sendChannels = new Set<IpcSendChannel>()
  private readonly sendListeners = new Map<
    IpcSendChannel,
    (event: Electron.IpcMainEvent, payload: unknown) => void
  >()
  private disposed = false

  constructor(
    private readonly deps: IpcRouterAuthorityPort,
    private readonly transport: IpcMainRegistrationPort = electronIpcMainPort,
  ) {
    this.authority = new IpcAuthority(deps)
  }

  handle<C extends IpcInvokeChannel>(channel: C, handler: IpcInvokeHandler<C>): void {
    this.assertCanRegister(channel, this.invokeChannels, 'invoke')
    this.invokeChannels.add(channel)
    const ownerScoped = includes(OWNER_SCOPED_INVOKE_CHANNELS, channel)
    this.transport.handle(channel, (event, request) => {
      const startedAt = performance.now()
      try {
        assertMainFrame(event)
      } catch (error) {
        this.reportDiagnostic(channel, 'non-main-frame', startedAt)
        throw error
      }
      return handler(
        request as IpcRequest<C>,
        this.context(event.sender, ownerScoped, channel, startedAt),
      )
    })
  }

  handleSend<C extends IpcSendChannel>(channel: C, handler: IpcSendHandler<C>): void {
    this.assertCanRegister(channel, this.sendChannels, 'send')
    this.sendChannels.add(channel)
    const ownerScoped = includes(OWNER_SCOPED_SEND_CHANNELS, channel)
    const listener = (event: Electron.IpcMainEvent, payload: unknown): void => {
      const startedAt = performance.now()
      try {
        assertMainFrame(event)
      } catch (reason) {
        this.reportDiagnostic(channel, 'non-main-frame', startedAt)
        console.warn(
          `[ipc] ignored invalid ${channel} message: ${reason instanceof Error ? reason.message : String(reason)}`,
        )
        return
      }
      try {
        handler(
          payload as IpcSendPayload<C>,
          this.context(event.sender, ownerScoped, channel, startedAt),
        )
      } catch (reason) {
        console.warn(
          `[ipc] ignored invalid ${channel} message: ${reason instanceof Error ? reason.message : String(reason)}`,
        )
      }
    }
    this.sendListeners.set(channel, listener)
    this.transport.on(channel, listener)
  }

  assertComplete(): void {
    assertExactChannels('invoke', INVOKE_CHANNELS, this.invokeChannels)
    assertExactChannels('send', SEND_CHANNELS, this.sendChannels)
  }

  effectiveManifest(): EffectiveIpcManifest {
    return {
      invoke: [...this.invokeChannels],
      send: [...this.sendChannels],
      event: EVENT_CHANNELS,
    }
  }

  dispose(): void {
    if (this.disposed) return
    this.disposed = true
    for (const channel of this.invokeChannels) this.transport.removeHandler(channel)
    for (const [channel, listener] of this.sendListeners) {
      this.transport.removeListener(channel, listener)
    }
    this.invokeChannels.clear()
    this.sendChannels.clear()
    this.sendListeners.clear()
  }

  private context(
    sender: Electron.WebContents,
    ownerScoped: boolean,
    channel: IpcInvokeChannel | IpcSendChannel,
    startedAt: number,
  ): IpcInvokeContext & IpcSendContext {
    let owner: RendererOwner | undefined
    return {
      sender,
      authority: this.authority,
      owner: () => {
        if (!ownerScoped) throw new Error('IPC channel is not owner-scoped')
        try {
          owner ??= this.deps.rendererResources.currentIpcOwner(sender.id)
          this.deps.rendererResources.assertCurrent(owner)
          return owner
        } catch (error) {
          this.reportDiagnostic(channel, 'renderer-revoked', startedAt)
          throw error
        }
      },
    }
  }

  private reportDiagnostic(
    channel: IpcContractDiagnostic['channel'],
    outcome: IpcContractDiagnostic['outcome'],
    startedAt: number,
  ): void {
    try {
      this.deps.recordIpcContractDiagnostic({
        channel,
        outcome,
        timing: timingBucket(performance.now() - startedAt),
      })
    } catch {
      // Diagnostics is a droppable observer and never owns IPC behavior.
    }
  }

  private assertCanRegister<C extends IpcInvokeChannel | IpcSendChannel>(
    channel: C,
    registered: ReadonlySet<C>,
    direction: 'invoke' | 'send',
  ): void {
    if (this.disposed) throw new Error('IPC authority router is disposed')
    const declared = direction === 'invoke' ? INVOKE_CHANNELS : SEND_CHANNELS
    if (!(declared as readonly string[]).includes(channel)) {
      throw new Error(`Cannot register undeclared ${direction} channel '${channel}'`)
    }
    if (registered.has(channel)) {
      throw new Error(`IPC ${direction} channel '${channel}' is already registered`)
    }
  }
}

function timingBucket(elapsedMs: number): IpcContractDiagnostic['timing'] {
  if (elapsedMs < 1) return 'under-1ms'
  if (elapsedMs < 10) return 'under-10ms'
  return '10ms-or-more'
}

export class IpcAuthority {
  private readonly canonicalRoots = new WeakMap<
    ProjectHost,
    Map<string, Promise<HostPath>>
  >()

  constructor(private readonly deps: IpcProjectAuthorityPort) {}

  workspaceRoot(candidate: HostPath): HostPath {
    if (
      !candidate ||
      typeof candidate.hostId !== 'string' ||
      typeof candidate.path !== 'string'
    ) {
      throw new Error('Workspace belongs to another project or is no longer registered')
    }
    const decoded = hostPath(asHostId(candidate.hostId), candidate.path)
    const root = this.deps.getRegisteredWorkspaceRoot(decoded)
    if (!root || !hostPathEquals(decoded, root)) {
      throw new Error('Workspace belongs to another project or is no longer registered')
    }
    return root
  }

  reconstructHostPath(candidate: HostPath): HostPath {
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/deps.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/deps.ts (lines 1-260)

<details>
<summary>172 lines</summary>

```
import type {
  BrowseHostResponse,
  ConnectedHost,
  EchoWorkerProtocol,
  GitWorkerProtocol,
  HostPath,
  IpcEventChannel,
  IpcEventPayload,
  KeybindingMap,
  ProjectHostOption,
  ProjectState,
  ProjectWatchInterestsResponse,
  WorkspaceClosePlan,
  RenderContainmentDiagnosticBatch,
  WorkbenchHealthSnapshot,
} from '../../shared'
import type { HarnessProfileStoreContract } from '../harness/harness-profile-store'
import type { HarnessProbeManager } from '../harness/harness-probe'
import type { RemoteImagePasteCoordinator } from '../harness/remote-image-paste'
import type { HtmlPreviewProtocol } from '../html-preview-protocol'
import type { ProjectHost } from '../project-host'
import type { PtySupervisor } from '../pty/pty-supervisor'
import type { RendererOwner } from '../renderer-resource-scopes'
import type { TerminalSessionStore } from '../terminal/session-registry'
import type { TerminalWorkspaceMoveCoordinator } from '../terminal/terminal-workspace-move-coordinator'
import type { WebPaneRouteRegistry } from '../web-pane/web-pane-route-registry'
import type { WorkerClient } from '../worker-host'
import type { IpcRouterAuthorityPort } from './authority-port'
import type { DiagnosticReportCoordinator } from '../diagnostics/diagnostic-report-coordinator'
import type { RuntimeDiagnostics } from '../diagnostics/runtime-diagnostics'
import type { FilenameSearchCoordinator } from '../filename-search/filename-search-coordinator'
import type { ProjectFileOperationCoordinator } from '../project-file-operations'
import type { ProjectFolderPickerCoordinator } from '../project-folder-picker'
import type {
  DocumentReviewCoordinator,
  DocumentReviewDeliveryCoordinator,
} from '../document-review'
import type { SessionsObservationPort } from '../sessions/sessions-observation-port'
import type { SessionsUsageObservationPort } from '../sessions/sessions-usage-observation-port'

export type EmitRendererEvent = <E extends IpcEventChannel>(
  channel: E,
  payload: IpcEventPayload<E>,
) => void

/** The application host's clipboard, narrowed to the one write hvir performs. */
export interface SystemClipboardPort {
  writeText(text: string): void
}

export interface IpcDeps extends IpcRouterAuthorityPort {
  readonly echoWorker: WorkerClient<EchoWorkerProtocol>
  readonly gitWorker: WorkerClient<GitWorkerProtocol>
  readonly filenameSearch: Pick<FilenameSearchCoordinator, 'search' | 'cancel' | 'revoke'>
  readonly projectFiles: Pick<
    ProjectFileOperationCoordinator,
    | 'create'
    | 'acquireClipboard'
    | 'acquireDropped'
    | 'copyExternal'
    | 'discloseExternalMove'
    | 'acquireExternalMove'
    | 'releaseExternalMove'
    | 'moveExternal'
    | 'organize'
    | 'discloseDeletion'
    | 'delete'
    | 'cancel'
  >
  readonly projectFolderPicker: Pick<
    ProjectFolderPickerCoordinator,
    'start' | 'browse' | 'createDirectory' | 'close'
  >
  readonly documentReview: Pick<
    DocumentReviewCoordinator,
    'activate' | 'save' | 'revalidate'
  >
  readonly documentReviewDelivery: Pick<
    DocumentReviewDeliveryCoordinator,
    'preview' | 'destinations' | 'prepare' | 'insert' | 'sendNow'
  >
  readonly getHost: (hostId: string) => ProjectHost | undefined
  readonly connectedHosts: () => readonly ProjectHost[]
  readonly revealLocalEntry: (path: HostPath) => void
  readonly listHosts: () => readonly ProjectHostOption[]
  readonly connectHost: (hostId: string, owner: RendererOwner) => Promise<ConnectedHost>
  readonly disconnectHost: (hostId: string) => Promise<ProjectHostOption>
  readonly browseHost: (
    hostId: string,
    path: string,
    owner: RendererOwner,
  ) => Promise<BrowseHostResponse>
  readonly openProject: (
    hostId: string,
    path: string,
    owner: RendererOwner,
  ) => Promise<ProjectState>
  readonly switchWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<ProjectState>
  readonly refreshProject: (projectId: string) => Promise<ProjectState>
  readonly updateWatchInterests: (
    paths: readonly HostPath[],
  ) => Promise<ProjectWatchInterestsResponse>
  readonly closeProject: (projectId: string) => Promise<ProjectState>
  readonly pruneWorktrees: (projectId: string) => Promise<ProjectState>
  readonly dismissWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<ProjectState>
  readonly planWorkspaceClose: (
    projectId: string,
    workspaceId: string,
  ) => Promise<WorkspaceClosePlan>
  readonly closeWorkspace: (
    projectId: string,
    workspaceId: string,
    expectedTerminalCount: number,
    terminateTerminals: boolean,
  ) => Promise<ProjectState>
  readonly reopenWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<ProjectState>
  readonly acknowledgeWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<ProjectState>
  readonly switchGitBranch: (root: HostPath, branch: string) => Promise<ProjectState>
  readonly fetchGit: (root: HostPath) => Promise<ProjectState>
  readonly pullGit: (root: HostPath) => Promise<ProjectState>
  readonly respondSshPrompt: (
    owner: RendererOwner,
    id: number,
    answers?: readonly string[],
  ) => void
  readonly rendererReady: (owner: RendererOwner, reportedGeneration: number) => void
  readonly getWorkbenchHealth: () => WorkbenchHealthSnapshot
  readonly acknowledgeWorkbenchHealth: (occurrenceId: string) => WorkbenchHealthSnapshot
  readonly diagnostics: {
    readonly reports: Pick<
      DiagnosticReportCoordinator,
      'create' | 'capture' | 'copy' | 'save' | 'cancel' | 'delete'
    >
    readonly evidence: Pick<RuntimeDiagnostics, 'evidenceState' | 'deleteEvidence'>
  }
  readonly recordRenderContainment: (
    owner: RendererOwner,
    batch: RenderContainmentDiagnosticBatch,
  ) => void
  readonly ptySupervisor: PtySupervisor
  readonly terminalSessions: TerminalSessionStore
  readonly sessionsObservation: Pick<
    SessionsObservationPort,
    'acquire' | 'snapshot' | 'release' | 'resolveOpen'
  >
  readonly sessionsUsage: Pick<
    SessionsUsageObservationPort,
    'acquire' | 'snapshot' | 'release'
  >
  readonly terminalMoves: Pick<TerminalWorkspaceMoveCoordinator, 'plan' | 'move'>
  readonly harnessProfiles: HarnessProfileStoreContract
  readonly harnessProbes: HarnessProbeManager
  readonly remoteImagePaste: Pick<RemoteImagePasteCoordinator, 'pasteOrForward'>
  /** Defaults to the Electron clipboard; scenarios override it to stay inert. */
  readonly systemClipboard?: SystemClipboardPort
  readonly updateAttention: (owner: RendererOwner, count: number) => void
  readonly updateWebPaneBindings: (owner: RendererOwner, bindings: KeybindingMap) => void
  readonly updateWebPaneFullPage: (owner: RendererOwner, paneId?: string) => void
  readonly htmlPreviews: HtmlPreviewProtocol
  readonly webPanes: WebPaneRouteRegistry
  readonly openExternal: (url: string) => Promise<void>
  readonly emit: EmitRendererEvent
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/terminal.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/terminal.ts (lines 1-220)

<details>
<summary>215 lines</summary>

```
import { hostPathEquals } from '../../../shared'
import { resolveHarnessLaunch } from '../../harness/harness-launch'
import { harnessProvider, selectHarnessLaunch } from '../../harness/harness-provider'
import {
  attachRendererPty,
  canAttachRetainedRendererPty,
  registerRendererPty,
  rendererPtyQualifier,
} from '../../terminal/renderer-pty-lifecycle'
import {
  isAuthorizedTerminalFork,
  isHarnessSessionId,
  isTerminalId,
  terminalLaunchMode,
} from '../../terminal/terminal-launch-admission'
import { terminalStartedResponse } from '../../terminal/terminal-start-response'
import { PtyStartUnavailableError } from '../../pty/pty-supervisor'
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'
type TerminalIpcDeps = Pick<
  IpcDeps,
  | 'getHost'
  | 'terminalSessions'
  | 'harnessProfiles'
  | 'harnessProbes'
  | 'rendererResources'
  | 'ptySupervisor'
  | 'terminalMoves'
>

export function registerTerminalIpc(ipc: IpcRegistrar, deps: TerminalIpcDeps): void {
  ipc.handle('terminal:recovery', (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    return deps.terminalSessions.list(root)
  })

  ipc.handle('terminal:record-recovery-decision', async (req, context) => {
    const root = ipc.authority.workspaceRoot(req.root)
    const restoredIds = recoveryDecisionIds(req.restoredIds)
    const skippedIds = recoveryDecisionIds(req.skippedIds)
    if (restoredIds.length + skippedIds.length > 500) {
      throw new Error('Invalid terminal recovery decision')
    }
    const decided = new Set(restoredIds)
    if (skippedIds.some((id) => decided.has(id))) {
      throw new Error('Invalid terminal recovery decision')
    }
    await deps.terminalSessions.recordRecoveryDecision(root, {
      restoredIds,
      skippedIds,
    })
    const owner = context.owner()
    for (const id of skippedIds) {
      const qualifier = rendererPtyQualifier(root, id)
      if (deps.rendererResources.hasTransferredResource(owner, qualifier)) {
        await deps.rendererResources.disposeResource(owner, 'pty-session', id)
      }
    }
  })
  ipc.handle('terminal:update-layout', async (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    const rawSessions: unknown = req.sessions
    if (!Array.isArray(rawSessions) || rawSessions.length > 500) {
      throw new Error('Invalid terminal layout')
    }
    const sessions = rawSessions.map((value: unknown) => {
      if (!isUnknownRecord(value)) throw new Error('Invalid terminal layout entry')
      const id = value['id']
      const title = value['title']
      const position = value['position']
      const active = value['active']
      const attention = value['attention']
      if (
        !isTerminalId(id) ||
        !isTerminalTitle(title) ||
        !Number.isSafeInteger(position) ||
        typeof position !== 'number' ||
        position < 0 ||
        position >= 500 ||
        typeof active !== 'boolean' ||
        (attention !== undefined && !isTerminalAttention(attention))
      ) {
        throw new Error('Invalid terminal layout entry')
      }
      return { id, title, position, active, attention }
    })
    await deps.terminalSessions.updateLayout(root, sessions)
  })
  ipc.handle('terminal:forget', async (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    if (!isTerminalId(req.id)) throw new Error('Invalid terminal session id')
    await deps.terminalSessions.forget(root, req.id)
  })
  ipc.handle('terminal:plan-move', (req, context) =>
    operationResult(() => Promise.resolve(deps.terminalMoves.plan(req, context.owner()))),
  )

  ipc.handle('terminal:move', (req, context) =>
    operationResult(() => deps.terminalMoves.move(req, context.owner())),
  )

  ipc.handle('terminal:rebind-profile', async (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    const projectRoot = ipc.authority.projectRoot(root)
    if (!isTerminalId(req.id)) throw new Error('Invalid terminal session id')
    const profile = deps.harnessProfiles.get(req.profileId)
    if (!profile || profile.launchRevision !== req.launchRevision) {
      throw new Error('Harness profile launch configuration changed')
    }
    if (
      profile.scope.kind === 'project' &&
      !hostPathEquals(profile.scope.projectRoot, projectRoot)
    ) {
      throw new Error('Harness profile is scoped to another project')
    }
    return deps.terminalSessions.rebindProfile({
      id: req.id,
      providerId: profile.providerId,
      profileId: profile.id,
      launchRevision: profile.launchRevision,
      workspaceRoot: root,
    })
  })

  ipc.handle('pty:start', async (req, context) => {
    if (!isTerminalId(req.sessionId)) throw new Error('Invalid PTY session id')
    const requestedMode = terminalLaunchMode(req)
    if (
      req.replacesSessionId !== undefined &&
      (!isTerminalId(req.replacesSessionId) ||
        req.replacesSessionId === req.sessionId ||
        requestedMode !== 'fresh')
    ) {
      throw new Error('Invalid terminal replacement request')
    }
    const owner = context.owner()
    const root = ipc.authority.workspaceRoot(req.workspaceRoot)
    const projectRoot = ipc.authority.projectRoot(root)
    const cwd = ipc.authority.workspaceRoot(req.cwd)
    if (
      cwd.hostId !== root.hostId ||
      !hostPathEquals(ipc.authority.projectRoot(cwd), projectRoot)
    ) {
      throw new Error('Terminal launch context belongs to another project')
    }
    const host = deps.getHost(root.hostId)
    if (!host) throw new Error('Terminal launch host is unavailable')
    const cols = terminalDimension(req.cols)
    const rows = terminalDimension(req.rows)
    const profile = deps.harnessProfiles.get(req.profileId)
    if (!profile) throw new Error(`Unknown harness profile '${req.profileId}'`)
    if (
      !Number.isSafeInteger(req.launchRevision) ||
      req.launchRevision <= 0 ||
      profile.launchRevision !== req.launchRevision
    ) {
      throw new Error('Harness profile launch configuration changed')
    }
    const provider = harnessProvider(profile.providerId)
    if (
      !isTerminalTitle(req.title) ||
      !Number.isSafeInteger(req.position) ||
      req.position < 0 ||
      req.position >= 500 ||
      typeof req.active !== 'boolean' ||
      (req.composerSubmitMode !== 'enter' && req.composerSubmitMode !== 'ctrl-enter') ||
      (req.admission !== undefined &&
        req.admission !== 'interactive' &&
        req.admission !== 'bulk') ||
      (req.resume !== undefined && typeof req.resume !== 'boolean')
    ) {
      throw new Error('Invalid PTY session metadata')
    }
    if (
      profile.scope.kind === 'project' &&
      !hostPathEquals(profile.scope.projectRoot, projectRoot)
    ) {
      throw new Error('Harness profile is scoped to another project')
    }
    const availabilityRequest = {
      host,
      projectRoot,
      workspaceRoot: cwd,
      profiles: [profile],
      store: deps.harnessProfiles,
    } as const
    let effectiveCapabilities =
      requestedMode === 'fork'
        ? await deps.harnessProbes.resolveLaunchCapabilities(
            availabilityRequest,
            profile,
            req.composerSubmitMode,
          )
        : deps.harnessProbes.effectiveLaunchCapabilities(
            availabilityRequest,
            profile,
            req.composerSubmitMode,
          )
    if (requestedMode === 'resume') {
      if (
        !effectiveCapabilities.exactResume ||
        !isHarnessSessionId(req.harnessSessionId) ||
        !deps.terminalSessions.authorizeResume({
          id: req.sessionId,
          providerId: profile.providerId,
          profileId: profile.id,
          launchRevision: profile.launchRevision,
          harnessSessionId: req.harnessSessionId,
          workspaceRoot: root,
          cwd,
        })
      ) {
        throw new Error('Terminal resume is not authorized for this project')
      }
    }
    if (requestedMode === 'fork') {
      if (!isAuthorizedTerminalFork({
        request: req,
        capabilities: effectiveCapabilities,
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/git.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/git.ts (lines 1-220)

<details>
<summary>103 lines</summary>

```
import {
  GIT_BLAME_TYPE,
  GIT_BRANCHES_TYPE,
  GIT_CHANGES_TYPE,
  GIT_COMMIT_DETAIL_TYPE,
  GIT_DIFF_INPUTS_TYPE,
  GIT_HISTORY_TYPE,
  GIT_IGNORED_ENTRIES_TYPE,
} from '../../../shared'
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'

type GitIpcDeps = Pick<
  IpcDeps,
  'getProject' | 'gitWorker' | 'fetchGit' | 'pullGit' | 'switchGitBranch'
>

export function registerGitIpc(ipc: IpcRegistrar, deps: GitIpcDeps): void {
  ipc.handle('git:diff-inputs', async (req) => {
    const { root, host } = deps.getProject()
    // Historical/deleted Git entries legitimately have no live leaf. Their
    // existing parent is still canonicalized before the worker may inspect
    // repository blobs, so this does not turn into a lexical-only bypass.
    const path = await ipc.authority.projectPath(req.path, root, host, {
      allowMissingLeaf: true,
    })
    return deps.gitWorker.request(GIT_DIFF_INPUTS_TYPE, {
      path,
      base: req.base,
      revision: req.revision,
      root,
    })
  })

  ipc.handle('git:changes', async (req) => {
    const project = deps.getProject()
    const root = await ipc.authority.projectPath(req.root, project.root, project.host)
    return deps.gitWorker.request(GIT_CHANGES_TYPE, {
      root,
      relatedWorktreeRoots: ipc.authority.worktreeRoots(root),
    })
  })

  ipc.handle('git:history', async (req) => {
    const project = deps.getProject()
    const root = await ipc.authority.projectPath(req.root, project.root, project.host)
    const path = req.path
      ? await ipc.authority.projectPath(req.path, project.root, project.host)
      : undefined
    return deps.gitWorker.request(GIT_HISTORY_TYPE, {
      root,
      path,
      limit: req.limit,
      cursor: req.cursor,
      allRefs: req.allRefs,
    })
  })

  ipc.handle('git:ignored-entries', async (req) => {
    const project = deps.getProject()
    const [root, directory] = await Promise.all([
      ipc.authority.projectPath(req.root, project.root, project.host),
      ipc.authority.projectPath(req.directory, project.root, project.host),
    ])
    return deps.gitWorker.request(GIT_IGNORED_ENTRIES_TYPE, {
      root,
      directory,
      names: req.names,
    })
  })

  ipc.handle('git:commit-detail', async (req) => {
    const project = deps.getProject()
    const root = await ipc.authority.projectPath(req.root, project.root, project.host)
    return deps.gitWorker.request(GIT_COMMIT_DETAIL_TYPE, { root, hash: req.hash })
  })

  ipc.handle('git:blame', async (req) => {
    const { root, host } = deps.getProject()
    const path = await ipc.authority.projectPath(req.path, root, host)
    return deps.gitWorker.request(GIT_BLAME_TYPE, { root, path })
  })

  ipc.handle('git:branches', async (req) => {
    const project = deps.getProject()
    const root = await ipc.authority.projectPath(req.root, project.root, project.host)
    return deps.gitWorker.request(GIT_BRANCHES_TYPE, { root })
  })

  ipc.handle('git:fetch', (req) =>
    operationResult(async () => {
      const project = deps.getProject()
      const root = await ipc.authority.projectPath(req.root, project.root, project.host)
      return deps.fetchGit(root)
    }),
  )

  ipc.handle('git:pull', (req) =>
    operationResult(async () => {
      const project = deps.getProject()
      const root = await ipc.authority.projectPath(req.root, project.root, project.host)
      return deps.pullGit(root)
    }),
  )

  ipc.handle('git:switch-branch', (req) =>
    operationResult(async () => {
      const project = deps.getProject()
      const root = await ipc.authority.projectPath(req.root, project.root, project.host)
      return deps.switchGitBranch(root, req.branch)
    }),
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/document-review.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/document-review.ts (lines 1-220)

<details>
<summary>126 lines</summary>

```
import {
  hostPathEquals,
  type DocumentReviewDeliverySelection,
  type ReviewWorkspaceIdentity,
} from '../../../shared'
import { isDocumentReviewIdentifier } from '../../../shared'
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'

type DocumentReviewIpcDeps = Pick<
  IpcDeps,
  'documentReview' | 'documentReviewDelivery' | 'getProject' | 'getProjectState'
>

export function registerDocumentReviewIpc(
  ipc: IpcRegistrar,
  deps: DocumentReviewIpcDeps,
): void {
  ipc.handle('document-review:restore', (request, context) =>
    operationResult(async () => {
      const root = ipc.authority.workspaceRoot(request.workspace.root)
      ipc.authority.assertActiveWorkspace(root)
      const project = requireActiveWorkspace(deps, request.workspace, root)
      return deps.documentReview.activate(
        context.owner(),
        request.workspace,
        project.host,
      )
    }),
  )

  ipc.handle('document-review:save', (request, context) =>
    operationResult(async () => {
      const root = ipc.authority.workspaceRoot(request.workspace.root)
      ipc.authority.assertActiveWorkspace(root)
      requireActiveWorkspace(deps, request.workspace, root)
      return deps.documentReview.save(context.owner(), request)
    }),
  )

  ipc.handle('document-review:revalidate', (request, context) =>
    operationResult(async () => {
      const root = ipc.authority.workspaceRoot(request.workspace.root)
      ipc.authority.assertActiveWorkspace(root)
      const project = requireActiveWorkspace(deps, request.workspace, root)
      const canonical = await ipc.authority.projectPath(
        request.document,
        project.root,
        project.host,
        { returnCanonical: true },
      )
      return deps.documentReview.revalidate(context.owner(), request, canonical)
    }),
  )

  ipc.handle('document-review:delivery-destinations', (request, context) =>
    operationResult(() => {
      const root = ipc.authority.workspaceRoot(request.workspace.root)
      ipc.authority.assertActiveWorkspace(root)
      requireActiveWorkspace(deps, request.workspace, root)
      return Promise.resolve(
        deps.documentReviewDelivery.destinations(context.owner(), request),
      )
    }),
  )

  ipc.handle('document-review:preview-delivery', (request, context) =>
    operationResult(() => {
      const root = ipc.authority.workspaceRoot(request.workspace.root)
      ipc.authority.assertActiveWorkspace(root)
      requireActiveWorkspace(deps, request.workspace, root)
      requireDeliverySelection(request.selection)
      return Promise.resolve(
        deps.documentReviewDelivery.preview(context.owner(), request),
      )
    }),
  )

  ipc.handle('document-review:prepare-delivery', (request, context) =>
    operationResult(() => {
      const root = ipc.authority.workspaceRoot(request.workspace.root)
      ipc.authority.assertActiveWorkspace(root)
      requireActiveWorkspace(deps, request.workspace, root)
      if (!isDocumentReviewIdentifier(request.terminalId)) {
        throw new Error('Invalid review terminal')
      }
      requireDeliverySelection(request.selection)
      return Promise.resolve(
        deps.documentReviewDelivery.prepare(context.owner(), request),
      )
    }),
  )

  ipc.handle('document-review:insert-delivery', (request, context) =>
    operationResult(() => {
      if (!isDocumentReviewIdentifier(request.preparedId)) {
        throw new Error('Invalid prepared review delivery')
      }
      return Promise.resolve(
        deps.documentReviewDelivery.insert(context.owner(), request.preparedId),
      )
    }),
  )

  ipc.handle('document-review:send-now-delivery', (request, context) =>
    operationResult(() => {
      if (!isDocumentReviewIdentifier(request.preparedId)) {
        throw new Error('Invalid prepared review delivery')
      }
      return deps.documentReviewDelivery.sendNow(context.owner(), request.preparedId)
    }),
  )
}

function requireDeliverySelection(selection: DocumentReviewDeliverySelection): void {
  const id = selection.kind === 'comment' ? selection.commentId : selection.batchId
  if (!isDocumentReviewIdentifier(id)) throw new Error('Invalid review selection')
}

function requireActiveWorkspace(
  deps: DocumentReviewIpcDeps,
  workspace: ReviewWorkspaceIdentity,
  root: ReviewWorkspaceIdentity['root'],
) {
  const state = deps.getProjectState()
  const project = state.projects.find(
    (candidate) => candidate.id === state.activeProjectId,
  )
  const active = project?.workspaces.find(
    (candidate) => candidate.id === state.activeWorkspaceId,
  )
  if (!active || active.id !== workspace.id || !hostPathEquals(active.root, root)) {
    throw new Error('Document review belongs to another workspace identity')
  }
  return deps.getProject()
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/web-pane.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/web-pane.ts (lines 1-220)

<details>
<summary>136 lines</summary>

```
import {
  LOCAL_HOST_ID,
  hostPathEquals,
  parseKeybindingOverrides,
  type HostPath,
} from '../../../shared'
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'

type WebPaneIpcDeps = Pick<
  IpcDeps,
  | 'getProject'
  | 'ptySupervisor'
  | 'rendererResources'
  | 'webPanes'
  | 'openExternal'
  | 'updateWebPaneBindings'
  | 'updateWebPaneFullPage'
>

export function registerWebPaneIpc(ipc: IpcRegistrar, deps: WebPaneIpcDeps): void {
  ipc.handle('web-pane:open', (req, context) => {
    const owner = context.owner()
    return operationResult(async () => {
      const active = deps.getProject()
      let root: HostPath
      let terminalId: string
      if (req.source === 'terminal') {
        root = ipc.authority.workspaceRoot(req.root)
        terminalId = req.terminalId
        if (!isTerminalId(terminalId)) throw new Error('Invalid source terminal')
        const terminal = deps.ptySupervisor.get(terminalId)
        if (
          !terminal ||
          terminal.ownerId !== owner.id ||
          terminal.ownerGeneration !== owner.generation ||
          terminal.hostId !== root.hostId ||
          !hostPathEquals(terminal.workspaceRoot, root)
        ) {
          throw new Error('Web pane source terminal is not live in this workspace')
        }
      } else {
        if (!isWebPaneId(req.paneId)) throw new Error('Invalid source web pane')
        const source = deps.webPanes.source(req.paneId, owner.id, owner.generation)
        if (!source) throw new Error('Source web pane is no longer live')
        root = ipc.authority.workspaceRoot(source.workspaceRoot)
        terminalId = source.terminalId
      }
      if (!hostPathEquals(root, active.root) || root.hostId !== active.host.hostId) {
        throw new Error('Web panes may be opened only from the active workspace')
      }
      deps.rendererResources.assertCurrent(owner)
      const route = await deps.webPanes.open({
        ownerId: owner.id,
        ownerGeneration: owner.generation,
        sourceTerminalId: terminalId,
        workspaceRoot: root,
        host: active.host,
        url: req.url,
      })
      try {
        deps.rendererResources.register(
          owner,
          { lifetime: 'workspace', type: 'web-pane', root, id: route.paneId },
          () => deps.webPanes.close(route.paneId, owner.id, owner.generation),
          // Reopening the same workspace/origin intentionally returns the same route.
          { duplicate: 'reuse' },
        )
        return route
      } catch (error) {
        await deps.webPanes.close(route.paneId, owner.id, owner.generation)
        throw error
      }
    })
  })

  ipc.handle('web-pane:close', async (req, context) => {
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
    const owner = context.owner()
    const disposed = await deps.rendererResources.disposeResource(
      owner,
      'web-pane',
      req.paneId,
    )
    if (!disposed) {
      await deps.webPanes.close(req.paneId, owner.id, owner.generation)
    }
  })

  ipc.handle('web-pane:open-external', async (req, context) => {
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
    const owner = context.owner()
    const decision = deps.webPanes.navigationForPane(
      req.paneId,
      owner.id,
      req.url,
      owner.generation,
    )
    if (decision.kind !== 'external') throw new Error('External URL is not authorized')
    await deps.openExternal(decision.url)
  })

  ipc.handle('web-pane:open-browser', async (req, context) => {
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
    const owner = context.owner()
    const source = deps.webPanes.source(req.paneId, owner.id, owner.generation)
    const decision = deps.webPanes.navigationForPane(
      req.paneId,
      owner.id,
      req.url,
      owner.generation,
    )
    if (!source || decision.kind !== 'allow') {
      throw new Error('Browser URL is not authorized by this web pane')
    }
    if (source.hostId !== LOCAL_HOST_ID) {
      throw new Error('Open in browser for SSH panes needs a compatibility route')
    }
    await deps.openExternal(decision.url)
  })

  ipc.handleSend('web-pane:reserved-bindings', (bindings, context) => {
    deps.updateWebPaneBindings(context.owner(), parseKeybindingOverrides(bindings))
  })
  ipc.handleSend('web-pane:full-page', ({ paneId }, context) => {
    const owner = context.owner()
    if (
      paneId !== undefined &&
      (!isWebPaneId(paneId) || !deps.webPanes.has(paneId, owner.id, owner.generation))
    ) {
      throw new Error('Invalid full-page web pane')
    }
    deps.updateWebPaneFullPage(owner, paneId)
  })
}

function isTerminalId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(value)
}

function isWebPaneId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-f0-9-]{36}$/.test(value)
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/sessions.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/sessions.ts (lines 1-220)

<details>
<summary>93 lines</summary>

```
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { asSessionsWorkspaceRuntimeId } from '../../../shared'

type SessionsIpcDeps = Pick<
  IpcDeps,
  'rendererResources' | 'sessionsObservation' | 'sessionsUsage' | 'switchWorkspace'
>

export function registerSessionsIpc(ipc: IpcRegistrar, deps: SessionsIpcDeps): void {
  ipc.handle('sessions:observe', (request, context) => {
    const owner = context.owner()
    deps.rendererResources.assertCurrent(owner)
    const snapshot = deps.sessionsObservation.acquire(owner, request.demandGeneration)
    try {
      deps.rendererResources.register(
        owner,
        { lifetime: 'renderer', type: 'sessions-observation' },
        () => {
          deps.sessionsObservation.release(owner, request.demandGeneration)
        },
        { duplicate: 'reuse' },
      )
      return snapshot
    } catch (error) {
      deps.sessionsObservation.release(owner, request.demandGeneration)
      throw error
    }
  })

  ipc.handle('sessions:snapshot', (request, context) =>
    deps.sessionsObservation.snapshot(context.owner(), request.demandGeneration),
  )

  ipc.handle('sessions:release', async (request, context) => {
    const owner = context.owner()
    // Qualify the release at the observation owner before touching the renderer
    // resource. A duplicate from an older demand must not revoke a newer lease.
    if (!deps.sessionsObservation.release(owner, request.demandGeneration)) return
    await deps.rendererResources.disposeResource(owner, 'sessions-observation')
  })

  ipc.handle('sessions:usage-observe', (request, context) => {
    const owner = context.owner()
    deps.rendererResources.assertCurrent(owner)
    const snapshot = deps.sessionsUsage.acquire(owner, request)
    try {
      deps.rendererResources.register(
        owner,
        { lifetime: 'renderer', type: 'sessions-usage-observation' },
        () => {
          deps.sessionsUsage.release(owner, request.demandGeneration)
        },
        { duplicate: 'reuse' },
      )
      return snapshot
    } catch (error) {
      deps.sessionsUsage.release(owner, request.demandGeneration)
      throw error
    }
  })

  ipc.handle('sessions:usage-snapshot', (request, context) =>
    deps.sessionsUsage.snapshot(context.owner(), request.demandGeneration),
  )

  ipc.handle('sessions:usage-release', async (request, context) => {
    const owner = context.owner()
    if (!deps.sessionsUsage.release(owner, request.demandGeneration)) return
    await deps.rendererResources.disposeResource(owner, 'sessions-usage-observation')
  })

  ipc.handle('sessions:open', async (request, context) => {
    const owner = context.owner()
    deps.rendererResources.assertCurrent(owner)
    const target = deps.sessionsObservation.resolveOpen(owner, request)
    if (target.outcome === 'unavailable') return target
    const state = await deps.switchWorkspace(target.projectId, target.workspaceId)
    deps.rendererResources.assertCurrent(owner)
    return {
      outcome: 'opened' as const,
      state,
      handle: target.handle,
      workspaceQualifier: target.workspaceQualifier,
      livePty: target.livePty,
    }
  })

  ipc.handle('sessions:resolve-terminal', (request, context) => {
    const owner = context.owner()
    deps.rendererResources.assertCurrent(owner)
    const target = deps.sessionsObservation.resolveOpen(owner, request)
    if (target.outcome === 'unavailable') return target
    return {
      outcome: 'resolved' as const,
      handle: target.handle,
      workspaceQualifier: target.workspaceQualifier,
      workspaceRuntimeId: asSessionsWorkspaceRuntimeId(target.workspaceId),
      livePty: target.livePty,
    }
  })
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/project.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/features/project.ts (lines 1-260)

<details>
<summary>117 lines</summary>

```
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'

type ProjectIpcDeps = Pick<
  IpcDeps,
  | 'getProjectState'
  | 'listHosts'
  | 'connectHost'
  | 'disconnectHost'
  | 'browseHost'
  | 'projectFolderPicker'
  | 'openProject'
  | 'switchWorkspace'
  | 'refreshProject'
  | 'updateWatchInterests'
  | 'closeProject'
  | 'pruneWorktrees'
  | 'dismissWorkspace'
  | 'planWorkspaceClose'
  | 'closeWorkspace'
  | 'reopenWorkspace'
  | 'acknowledgeWorkspace'
  | 'respondSshPrompt'
>

export function registerProjectIpc(ipc: IpcRegistrar, deps: ProjectIpcDeps): void {
  ipc.handle('project:root', () => deps.getProjectState())
  ipc.handle('project:hosts', () => deps.listHosts())
  ipc.handle('project:connect-host', (req, context) =>
    operationResult(() => deps.connectHost(req.hostId, context.owner())),
  )
  ipc.handle('project:disconnect-host', (req) =>
    operationResult(() => deps.disconnectHost(req.hostId)),
  )
  ipc.handle('project:browse-host', (req, context) =>
    operationResult(() => deps.browseHost(req.hostId, req.path, context.owner())),
  )
  ipc.handle('project:folder-picker-start', (req, context) =>
    operationResult(() => deps.projectFolderPicker.start(context.owner(), req.hostId)),
  )
  ipc.handle('project:folder-picker-browse', (req, context) =>
    operationResult(() =>
      deps.projectFolderPicker.browse(context.owner(), req.pickerId, req.path),
    ),
  )
  ipc.handle('project:folder-picker-create-directory', (req, context) =>
    operationResult(() =>
      deps.projectFolderPicker.createDirectory(
        context.owner(),
        req.pickerId,
        req.destinationParent,
        req.name,
      ),
    ),
  )
  ipc.handle('project:folder-picker-close', (req, context) =>
    operationResult(() => deps.projectFolderPicker.close(context.owner(), req.pickerId)),
  )
  ipc.handle('project:open', (req, context) =>
    operationResult(() => deps.openProject(req.hostId, req.path, context.owner())),
  )
  ipc.handle('project:switch', (req) =>
    operationResult(() => deps.switchWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('project:refresh', (req) =>
    operationResult(() => deps.refreshProject(req.projectId)),
  )
  ipc.handle('project:watch-interests', (req) =>
    operationResult(async () => {
      ipc.authority.assertActiveWorkspace(req.root)
      return deps.updateWatchInterests(req.paths)
    }),
  )
  ipc.handle('project:close', (req) =>
    operationResult(() => deps.closeProject(req.projectId)),
  )
  ipc.handle('workspace:prune', (req) =>
    operationResult(() => deps.pruneWorktrees(req.projectId)),
  )
  ipc.handle('workspace:dismiss', (req) =>
    operationResult(() => deps.dismissWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('workspace:plan-close', (req) =>
    operationResult(() => deps.planWorkspaceClose(req.projectId, req.workspaceId)),
  )
  ipc.handle('workspace:close', (req) =>
    operationResult(() =>
      deps.closeWorkspace(
        req.projectId,
        req.workspaceId,
        req.expectedTerminalCount,
        req.terminateTerminals,
      ),
    ),
  )
  ipc.handle('workspace:reopen', (req) =>
    operationResult(() => deps.reopenWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('workspace:acknowledge', (req) =>
    operationResult(() => deps.acknowledgeWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('ssh:prompt-response', (req, context) => {
    if (!Number.isSafeInteger(req?.id) || req.id <= 0) {
      throw new Error('Invalid SSH prompt id')
    }
    if (
      req.answers !== undefined &&
      (!Array.isArray(req.answers) ||
        req.answers.length > 16 ||
        req.answers.some(
          (answer) => typeof answer !== 'string' || answer.length > 16_384,
        ))
    ) {
      throw new Error('Invalid SSH prompt answers')
    }
    deps.respondSshPrompt(context.owner(), req.id, req.answers)
  })
}
```

</details>


### `glob`

***electron-vite***

"*electron-vite*"

```
No files matched the pattern.
```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/index.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/index.ts (lines 1-220)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/local-host.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/local-host.ts (lines 1-220)

<details>
<summary>205 lines</summary>

```
/**
 * `LocalHost` — the default `ProjectHost` (ADR-010).
 *
 * This is the ONLY module permitted to import node's fs / child_process and the
 * native modules chokidar and node-pty (enforced by lint). Everything else in
 * hvir reaches the local filesystem, processes, and PTYs through this seam, so
 * the day `SshHost` arrives nothing above the seam changes.
 *
 * node-pty is imported lazily inside `spawnPty` so the native binary is only
 * loaded when a PTY is actually spawned — keeping `dev` and unit tests from
 * needing an Electron-ABI rebuild before Phase 2.
 */

import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process'
import { isUtf8 } from 'node:buffer'
import { randomUUID } from 'node:crypto'
import { constants, mkdirSync, realpathSync } from 'node:fs'
import { promises as fsp } from 'node:fs'
import { createRequire } from 'node:module'
import { connect } from 'node:net'
import { basename, dirname, join, relative, sep } from 'node:path'
import { StringDecoder } from 'node:string_decoder'
import { getSystemErrorName } from 'node:util'
import chokidar from 'chokidar'

import {
  assertProjectHostTextPrefixByteLimit,
  boundTextWorkload,
  hostPath,
  LOCAL_HOST_ID,
  type TextWorkload,
} from '../../shared'
import type {
  DirEntry,
  ExecResult,
  FileType,
  HostId,
  HostConnectionState,
  HostWatchTier,
  HostPath,
  LoopbackEndpoint,
  Stat,
  WatchEvent,
  WatchEventType,
} from '../../shared'
import type {
  Disposer,
  ExclusiveCreateOptions,
  ExecOptions,
  ExecStreamHandle,
  ProjectHost,
  ProjectFileMetadataOptions,
  ProjectFileRenameOptions,
  ProjectFileDeletionPort,
  ProjectFileStreamOptions,
  ProjectFileTrashOptions,
  ProjectFileTransferPort,
  ProjectFileWriteStreamOptions,
  PtyExit,
  PtyProcess,
  ReadFileOptions,
  RemoveFileOptions,
  SpawnPtyOptions,
  WatchOptions,
  WriteFileOptions,
} from './project-host'
import {
  assertLoopbackEndpoint,
  MAX_EXEC_STREAM_WRITE_BYTES,
  ProjectPathExistsError,
  PROJECT_FILE_STREAM_CHUNK_BYTES,
} from './project-host'

const DEFAULT_MAX_BUFFER = 10 * 1024 * 1024 // 10 MiB
const ATOMIC_RENAME_HELPER_VERSION = '0.1.0'
const ATOMIC_RENAME_HELPER_PACKAGE = '@hvir/rename-noreplace'
const atomicRenameRequire = createRequire(import.meta.url)

interface AtomicRenameBinding {
  metadata(): unknown
  renameNoReplace(
    sourceParentFd: number,
    source: string,
    destinationParentFd: number,
    destination: string,
  ): unknown
}

export class LocalHost implements ProjectHost {
  readonly hostId: HostId = LOCAL_HOST_ID
  readonly connectionState: HostConnectionState = 'connected'
  readonly watchTier: HostWatchTier = 'native'
  readonly fileTransfer: ProjectFileTransferPort = {
    readFileChunks: (path, opts) => this.readFileChunks(path, opts),
    writeFileChunksExclusive: (path, chunks, opts) =>
      this.writeFileChunksExclusive(path, chunks, opts),
    setMetadata: (path, opts) => this.setProjectFileMetadata(path, opts),
    renameNoReplace: (source, destination, opts) =>
      this.renameProjectFileNoReplace(source, destination, opts),
    removeDirectory: (path, opts) => this.removeDirectory(path, opts),
  }
  readonly fileDeletion: ProjectFileDeletionPort

  /** Live watcher lifecycles, including any native-to-polling fallback. */
  private readonly watchers = new Set<Disposer>()
  /** Buffered commands owned until their process and pipes have closed. */
  private readonly bufferedExecs = new Set<Disposer>()

  /** Prepare one host-qualified local root during synchronous application bootstrap. */
  static ensureBootstrapDirectory(path: HostPath): void {
    mkdirSync(resolveHostPath(path, LOCAL_HOST_ID), { recursive: true })
  }

  constructor(
    private readonly options: {
      readonly trashItem?: (path: HostPath) => Promise<void>
    } = {},
  ) {
    this.fileDeletion = options.trashItem
      ? {
          capability: 'recoverable',
          trashEntry: (path, trashOptions) => this.trashEntry(path, trashOptions),
        }
      : { capability: 'unavailable' }
  }

  connect(): Promise<void> {
    return Promise.resolve()
  }

  onConnectionState(cb: (state: HostConnectionState) => void): Disposer {
    cb(this.connectionState)
    return () => undefined
  }

  async dispose(): Promise<void> {
    const stopping = [...this.bufferedExecs].map((stop) => stop())
    this.bufferedExecs.clear()
    const closing = [...this.watchers].map((stop) => stop())
    this.watchers.clear()
    await Promise.all([...stopping, ...closing].map((result) => Promise.resolve(result)))
  }

  defaultShell(): Promise<string> {
    return Promise.resolve(
      process.env.SHELL ??
        (process.platform === 'win32' ? 'powershell.exe' : '/bin/bash'),
    )
  }

  exec(
    command: string,
    args: readonly string[],
    opts: ExecOptions = {},
  ): Promise<ExecResult> {
    const environment = childEnvironment(opts.env, opts.unsetEnv)
    return new Promise<ExecResult>((resolve, reject) => {
      if (opts.signal?.aborted) {
        reject(execAbortError(opts.signal))
        return
      }
      const child = spawn(command, [...args], {
        cwd: opts.cwd ? this.resolve(opts.cwd) : undefined,
        env: environment,
        // Buffered commands never own a terminal. Give each POSIX command its
        // own session so login-interactive shells and terminal job-control
        // signals cannot stop Electron's process group with them.
        detached: process.platform !== 'win32',
      })
      const maxBuffer = opts.maxBuffer ?? DEFAULT_MAX_BUFFER
      let stdout = ''
      let stderr = ''
      let bytes = 0
      let stdoutNulRecords = 0
      let settled = false
      let truncated = false
      let terminalError: Error | undefined
      const stdoutDecoder = new StringDecoder('utf8')
      const stderrDecoder = new StringDecoder('utf8')

      const terminate = (): void => {
        try {
          terminateBufferedExec(child)
        } catch (reason) {
          terminalError ??= asError(reason)
          child.kill('SIGKILL')
        }
      }
      let resolveClosed = (): void => undefined
      const closed = new Promise<void>((resolveClose) => {
        resolveClosed = resolveClose
      })
      const stop: Disposer = () => {
        if (!settled && !terminalError && !truncated) {
          terminalError = new Error('Local host disposed during buffered exec')
          terminate()
        }
        return closed
      }
      const abort = (): void => {
        if (terminalError || truncated || settled) return
        terminalError = execAbortError(opts.signal!)
        terminate()
      }
      const finish = (): void => {
        this.bufferedExecs.delete(stop)
        opts.signal?.removeEventListener('abort', abort)
        resolveClosed()
      }
      this.bufferedExecs.add(stop)
      opts.signal?.addEventListener('abort', abort, { once: true })

      const overflow = (): boolean => {
        if (
          bytes <= maxBuffer &&
          (opts.maxStdoutNulRecords === undefined ||
            stdoutNulRecords < opts.maxStdoutNulRecords)
        )
          return false
        if (opts.allowTruncatedOutput) {
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/ssh-host.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/project-host/ssh-host.ts (lines 1-240)

<details>
<summary>231 lines</summary>

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
    this.setState('disconnected')
    await Promise.all([...clients].map((client) => closeSshClient(client)))
    for (const attempt of this.credentialAttempts) attempt.identityGeneration.release()
    this.credentialAttempts.clear()
  }

  async defaultShell(): Promise<string> {
    if (this.resolvedShell) return this.resolvedShell
    const result = await this.exec('sh', [
      '-lc',
      'if [ -n "$SHELL" ] && [ -x "$SHELL" ]; then printf "%s\\n" "$SHELL"; elif command -v bash >/dev/null 2>&1; then command -v bash; else printf "/bin/sh\\n"; fi',
    ])
    const candidate = result.stdout.trim().split(/\r?\n/).at(-1)
    this.resolvedShell =
      result.code === 0 && candidate?.startsWith('/') ? candidate : '/bin/sh'
    return this.resolvedShell
  }

  async exec(
    command: string,
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/workers/git-worker.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/workers/git-worker.ts (lines 1-220)

<details>
<summary>210 lines</summary>

```
import {
  GIT_DIFF_INPUTS_TYPE,
  GIT_BLAME_TYPE,
  GIT_CHANGES_TYPE,
  GIT_HISTORY_TYPE,
  GIT_IGNORED_ENTRIES_TYPE,
  GIT_IGNORED_PATHS_TYPE,
  GIT_COMMIT_DETAIL_TYPE,
  GIT_WORKTREES_TYPE,
  GIT_PRUNE_WORKTREES_TYPE,
  GIT_WORKSPACE_ACTIVITY_TYPE,
  GIT_BRANCHES_TYPE,
  GIT_FETCH_TYPE,
  GIT_PULL_TYPE,
  GIT_SWITCH_BRANCH_TYPE,
  asHostId,
  hostPath,
  type DiffBase,
  type GitWorkerPayload,
  type HostPath,
  type WorkerRequest,
  type WorkerResponse,
  type WorkerHostCall,
  type WorkerHostCallInput,
  type WorkerHostResult,
  type HostId,
  type Stat,
} from '../shared'
import type { GitExecOptions, GitHostPort } from '../main/git/git-command-context'
import { GitEngine } from '../main/git/git-engine'

interface ParentPort {
  on(
    event: 'message',
    listener: (e: { data: WorkerRequest | WorkerHostResult }) => void,
  ): void
  postMessage(message: WorkerResponse | WorkerHostCall): void
}

const port = (process as unknown as { parentPort?: ParentPort }).parentPort
if (!port) throw new Error('git-worker must run as an Electron utility process')

const hostResults = new Map<
  number,
  { resolve(value: unknown): void; reject(error: Error): void }
>()
let nextHostCallId = 0

port.on('message', ({ data }) => {
  if ('kind' in data && data.kind === 'host-result') {
    const pending = hostResults.get(data.callId)
    if (!pending) return
    hostResults.delete(data.callId)
    if (data.ok) pending.resolve(data.result)
    else pending.reject(new Error(data.error))
    return
  }
  void handle(data as WorkerRequest)
})

async function handle(request: WorkerRequest): Promise<void> {
  try {
    if (!request.payload || typeof request.payload !== 'object')
      throw new Error('invalid git payload')
    const raw = request.payload as Record<string, unknown>
    if (!isRawPath(raw['root'])) throw new Error('invalid git root')
    const root = decodePath(raw['root'])
    const relatedWorktreeRoots = decodeRelatedWorktreeRoots(
      raw['relatedWorktreeRoots'],
      root,
    )
    const engine = new GitEngine(new ProxyGitHost(root.hostId), root)
    let result: unknown
    if (request.type === GIT_WORKTREES_TYPE) {
      result = await engine.worktrees(root)
    } else if (request.type === GIT_BRANCHES_TYPE) {
      result = await engine.branches(root)
    } else if (request.type === GIT_FETCH_TYPE) {
      result = await engine.fetch(root)
    } else if (request.type === GIT_PULL_TYPE) {
      result = await engine.pullFastForward(root, relatedWorktreeRoots)
    } else if (
      request.type === GIT_SWITCH_BRANCH_TYPE &&
      typeof raw['branch'] === 'string'
    ) {
      result = await engine.switchBranch(root, raw['branch'], relatedWorktreeRoots)
    } else if (request.type === GIT_PRUNE_WORKTREES_TYPE) {
      result = await engine.pruneWorktrees(root)
    } else if (request.type === GIT_WORKSPACE_ACTIVITY_TYPE) {
      result = await engine.workspaceActivity(root, relatedWorktreeRoots)
    } else if (request.type === GIT_DIFF_INPUTS_TYPE && isPayload(request.payload)) {
      const path = decodePath(request.payload.path)
      assertProjectPath(path, root)
      result = await engine.diffInputs(
        path,
        request.payload.base,
        request.payload.revision,
      )
    } else if (request.type === GIT_CHANGES_TYPE) {
      result = await engine.changes(root, relatedWorktreeRoots)
    } else if (
      request.type === GIT_IGNORED_ENTRIES_TYPE &&
      isRawPath(raw['directory']) &&
      Array.isArray(raw['names'])
    ) {
      const directory = decodePath(raw['directory'])
      assertProjectPath(directory, root)
      result = await engine.ignoredEntries(
        root,
        directory,
        raw['names'] as readonly string[],
      )
    } else if (request.type === GIT_IGNORED_PATHS_TYPE && Array.isArray(raw['paths'])) {
      result = await engine.ignoredPaths(root, raw['paths'] as readonly string[])
    } else if (request.type === GIT_HISTORY_TYPE) {
      const path = isRawPath(raw['path']) ? decodePath(raw['path']) : undefined
      if (path) assertProjectPath(path, root)
      const cursor = typeof raw['cursor'] === 'string' ? raw['cursor'] : undefined
      result = await engine.history(
        root,
        Number(raw['limit']),
        cursor,
        path,
        raw['allRefs'] === true,
      )
    } else if (request.type === GIT_BLAME_TYPE && isRawPath(raw['path'])) {
      const path = decodePath(raw['path'])
      assertProjectPath(path, root)
      result = await engine.blame(path)
    } else if (request.type === GIT_COMMIT_DETAIL_TYPE) {
      result = await engine.commitDetail(root, String(raw['hash']))
    } else throw new Error(`unknown request type: ${request.type}`)
    port?.postMessage({ id: request.id, ok: true, result })
  } catch (error) {
    port?.postMessage({
      id: request.id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    })
  }
}

function decodeRelatedWorktreeRoots(value: unknown, root: HostPath): readonly HostPath[] {
  if (value === undefined) return []
  if (!Array.isArray(value) || value.length > 1_000 || !value.every(isRawPath)) {
    throw new Error('invalid related worktree roots')
  }
  return value.map((candidate) => {
    const decoded = decodePath(candidate)
    if (decoded.hostId !== root.hostId) throw new Error('worktree host mismatch')
    return decoded
  })
}

class ProxyGitHost implements GitHostPort {
  constructor(readonly hostId: HostId) {}
  exec(
    command: string,
    args: readonly string[],
    opts: GitExecOptions = {},
  ): Promise<import('../shared').ExecResult> {
    return hostCall({
      operation: 'exec',
      hostId: this.hostId,
      command,
      args,
      cwd: opts.cwd,
      input: opts.input,
      maxBuffer: opts.maxBuffer,
      allowTruncatedOutput: opts.allowTruncatedOutput,
      maxStdoutNulRecords: opts.maxStdoutNulRecords,
      ...(opts.allowIndexRefresh ? { allowIndexRefresh: true } : {}),
    }) as Promise<import('../shared').ExecResult>
  }
  readTextFile(path: HostPath): Promise<string> {
    return hostCall({
      operation: 'readTextFile',
      hostId: this.hostId,
      path,
    }) as Promise<string>
  }
  readTextFilePrefix(
    path: HostPath,
    maxBytes: number,
  ): Promise<import('../shared').TextWorkload> {
    return hostCall({
      operation: 'readTextFilePrefix',
      hostId: this.hostId,
      path,
      maxBytes,
    }) as Promise<import('../shared').TextWorkload>
  }
  stat(path: HostPath): Promise<Stat> {
    return hostCall({
      operation: 'stat',
      hostId: this.hostId,
      path,
    }) as Promise<Stat>
  }
}

function hostCall(call: WorkerHostCallInput): Promise<unknown> {
  const callId = ++nextHostCallId
  return new Promise((resolve, reject) => {
    hostResults.set(callId, { resolve, reject })
    port?.postMessage({ ...call, kind: 'host-call', callId })
  })
}

function isPayload(value: unknown): value is GitWorkerPayload {
  if (!value || typeof value !== 'object') return false
  const payload = value as {
    path?: unknown
    root?: unknown
    base?: unknown
  }
  return isRawPath(payload.path) && isRawPath(payload.root) && isDiffBase(payload.base)
}

function isRawPath(value: unknown): value is HostPath {
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-hotspots.json.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-hotspots.json (lines 1-240)

<details>
<summary>231 lines</summary>

```
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
    ".sh",
    ".bash",
    ".zsh",
    ".c",
    ".h"
  ],
  "budgets": [
    {
      "path": "src/main/git/git-engine.ts",
      "kind": "stricter",
      "maxLines": 128,
      "owner": "GitEngine facade",
      "rationale": "GitEngine is the stable facade over capability modules and the shared command context; its lower named cap prevents the facade from reabsorbing capability implementations.",
      "reconsiderWhen": "The facade starts executing Git capability policy rather than delegating through its shared command context."
    },
    {
      "path": "src/main/index.ts",
      "kind": "stricter",
      "maxLines": 520,
      "owner": "main composition root",
      "rationale": "The composition root wires runtime owners, window presentation, coordinators, worker adapters, and IPC; this strict cap prevents product workflows from returning.",
      "reconsiderWhen": "An application workflow or resource lifecycle moves into the bootstrap instead of a constructed capability owner."
    },
    {
      "path": "src/main/project-host/ssh-host.ts",
      "kind": "durable",
      "maxLines": 1171,
      "owner": "SshHost connection and authentication adapter",
      "rationale": "One public host adapter owns authentication, connection state, cached capabilities, and capacity admission while private collaborators own file, watch, and pool mechanics.",
      "reconsiderWhen": "Authentication/reconnect or transport capacity moves into an independently owned coordinator shared by multiple ProjectHost adapters."
    },
    {
      "path": "src/main/smoke/capacity-terminals.ts",
      "kind": "durable",
      "maxLines": 1137,
      "owner": "terminal capacity acceptance scenario",
      "rationale": "The scenario owns one capacity setup, workload, measurement, and cleanup lifetime across real terminals.",
      "reconsiderWhen": "Terminal workload creation and capacity measurement require independent scenario lifetimes, or the scenario starts measuring non-terminal capacity owners."
    },
    {
      "path": "src/main/smoke/document-review.ts",
      "kind": "durable",
      "maxLines": 1111,
      "owner": "document review Electron acceptance",
      "rationale": "One production-composed review workflow proves anchors, explicit handoff, persistence, and cleanup in its real renderer environment.",
      "reconsiderWhen": "Anchor persistence and provider handoff become independently activated review workflows with separate setup and cleanup contracts."
    },
    {
      "path": "src/main/smoke/index.ts",
      "kind": "stricter",
      "maxLines": 850,
      "owner": "Electron smoke composition root",
      "rationale": "The root constructs production resources, wires narrow project ports and named scenario calls, and reports and disposes the selected lifetime. Scenario assertions and fixture policy remain in their named owners.",
      "reconsiderWhen": "The root reabsorbs scenario assertions or feature fixture policy instead of wiring the owning modules."
    },
    {
      "path": "src/main/smoke/project-file-operations.ts",
      "kind": "durable",
      "maxLines": 1173,
      "owner": "project file operations Electron acceptance",
      "rationale": "One scenario owns disposable source and destination roots and the cross-process operation lifecycle through production authority.",
      "reconsiderWhen": "Source grants and destination execution acquire independent operation lifetimes that can be verified through separate production-composed scenarios."
    },
    {
      "path": "src/main/smoke/sessions-projection.ts",
      "kind": "durable",
      "maxLines": 1198,
      "owner": "Sessions projection Electron acceptance",
      "rationale": "The scenario follows one live session surface lease across workspace and global projections, preserving a shared real-process lifetime.",
      "reconsiderWhen": "The global Sessions projection no longer shares the workspace terminal surface lease, allowing independent lease and projection acceptance scenarios."
    },
    {
      "path": "src/renderer/src/App.tsx",
      "kind": "stricter",
      "maxLines": 686,
      "owner": "renderer composition shell",
      "rationale": "The renderer root is now a composition shell for feature-owned models and views; this strict cap prevents it from reabsorbing feature state and policy.",
      "reconsiderWhen": "Feature state, effects, or navigation policy return to the renderer composition shell."
    },
    {
      "path": "src/renderer/src/settings/HarnessProfilesSettings.tsx",
      "kind": "stricter",
      "maxLines": 220,
      "owner": "harness profile settings composition view",
      "rationale": "HarnessProfilesSettings composes extracted profile policy, controller, fields, and dialogs; the named cap prevents those responsibilities from moving back into the view.",
      "reconsiderWhen": "Profile validation, persistence, or dialog lifecycle is reintroduced into the composition view."
    },
    {
      "path": "src/renderer/src/styles.css",
      "kind": "stricter",
      "maxLines": 100,
      "owner": "stylesheet import manifest",
      "rationale": "The root stylesheet is an explicit ordered import manifest; its lower named cap prevents feature rules from returning to the global composition surface.",
      "reconsiderWhen": "The ordered import manifest begins owning feature selectors or feature-specific cascade rules."
    },
    {
      "path": "src/renderer/src/terminal/terminal-runtime.ts",
      "kind": "stricter",
      "maxLines": 600,
      "owner": "terminal runtime",
      "rationale": "The runtime intentionally owns pane listener wiring and live PTY lifecycle authority. Terminal event effects may evolve inside that owner without forcing false extraction seams, while the named cap remains a blocking non-growth ratchet.",
      "reconsiderWhen": "PTY admission or durable session recovery becomes independently owned from pane listener and live terminal teardown."
    },
    {
      "path": "src/renderer/src/terminal/TerminalWorkspace.tsx",
      "kind": "stricter",
      "maxLines": 422,
      "owner": "terminal workspace composition view",
      "rationale": "TerminalWorkspace is now the feature composition view over extracted policy, effects, persistence, recovery, and presentation modules; the named cap preserves that boundary.",
      "reconsiderWhen": "Session recovery, split persistence, or terminal lifecycle policy returns to the workspace composition view."
    },
    {
      "path": "test/file-create-actions.test.tsx",
      "kind": "durable",
      "maxLines": 1154,
      "owner": "file creation actions interaction tests",
      "rationale": "The suite covers one creation workflow's targeting, collision, and user confirmation semantics through narrow file-operation ports.",
      "reconsiderWhen": "Target selection and file creation confirmation become independently activated actions with separate operation authority."
    },
    {
      "path": "test/ghostty-terminal-pane-lifecycle.test.tsx",
      "kind": "durable",
      "maxLines": 1195,
      "owner": "Ghostty terminal pane lifecycle tests",
      "rationale": "The suite exercises the pane's single listener and resource lifetime through its immediate runtime boundary.",
      "reconsiderWhen": "Canvas materialization and listener/disposal ownership split into independent production lifetimes with distinct runtime ports."
    },
    {
      "path": "test/git-engine.test.ts",
      "kind": "durable",
      "maxLines": 1172,
      "owner": "GitEngine public facade contract tests",
      "rationale": "The suite preserves public Git facade behavior over its immediate command boundary while capability parsing policy is tested separately.",
      "reconsiderWhen": "The GitEngine public facade stops owning a tested command contract because that contract moves to another independently callable capability."
    },
    {
      "path": "test/harness-profiles-settings.test.tsx",
      "kind": "durable",
      "maxLines": 1160,
      "owner": "harness profile settings interaction tests",
      "rationale": "The suite proves the settings feature's user interaction and state lifecycle using one renderer environment and provider catalog.",
      "reconsiderWhen": "Profile editing and launch-profile selection become separate user workflows with independent controller and persistence lifetimes."
    },
    {
      "path": "test/project-file-operation-coordinator.test.ts",
      "kind": "durable",
      "maxLines": 1107,
      "owner": "project file operation coordinator tests",
      "rationale": "The suite proves one operation-scoped authority and cleanup lifecycle across host-qualified source and destination ports.",
      "reconsiderWhen": "External-source grants and host-to-host execution move into independently owned coordinators with separate revocation lifetimes."
    },
    {
      "path": "test/smoke-scenario-runner.test.ts",
      "kind": "durable",
      "maxLines": 1159,
      "owner": "smoke process runner tests",
      "rationale": "The suite proves process ownership, interruption, and cleanup through the launcher's immediate child-process boundary.",
      "reconsiderWhen": "Process launch supervision and interruption/cleanup become distinct production owners with separate externally observable contracts."
    },
    {
      "path": "test/ssh-host.test.ts",
      "kind": "durable",
      "maxLines": 1621,
      "owner": "SshHost immediate transport adapter tests",
      "rationale": "The suite characterizes the single public host adapter using its immediate SSH boundary; authentication, reconnect, and teardown assertions share the adapter's lifecycle fixture.",
      "reconsiderWhen": "Authentication, reconnect, or transport capacity moves out of the public adapter into a separate production owner with its own immediate boundary."
    },
    {
      "path": "test/terminal-ipc-resume.test.ts",
      "kind": "durable",
      "maxLines": 1182,
      "owner": "terminal resume IPC authority tests",
      "rationale": "The suite checks one transport authority boundary for exact resume, missing artifacts, and late lifecycle completion.",
      "reconsiderWhen": "Resume authorization leaves the terminal IPC registrar or provider artifact qualification gains a separate public authority boundary."
    },
    {
      "path": "test/terminal-session-registry.test.ts",
      "kind": "durable",
      "maxLines": 1192,
      "owner": "terminal session registry tests",
      "rationale": "The suite owns deterministic registry transitions, retained identity, and lifecycle invariants over the same narrow ports.",
      "reconsiderWhen": "Retained recovery identity and live session transitions cease sharing one registry authority and acquire separate production owners."
    }
  ],
  "generated": [
    {
      "path": "src/renderer/src/terminal/generated-terminal-theme-catalog.ts",
      "maxLines": 5000,
      "owner": "terminal theme catalog generator",
      "rationale": "The deterministic catalog is emitted from the pinned Ghostty/iTerm2 theme source tree; theme data is not manually maintained.",
      "reconsiderWhen": "The output format, pinned theme input, or reproducible generator changes.",
      "generator": "scripts/generate-terminal-theme-catalog.mts",
      "inputs": [
        {
          "path": "scripts/generate-terminal-theme-catalog.mts",
          "sha256": "a7721aa27836926b452ab3756322614b0771518ed2e3171d8e43d0ff387c109e"
        },
        {
          "path": "src/renderer/src/terminal/terminal-color-schema.mts",
          "sha256": "94919f83b1b4876ff99f2d6957f27ddb6701a3ecfc399adb7d0cbe464d6483fe"
        }
      ],
      "command": "npm run generate:terminal-themes -- --source <verified-ghostty-theme-tree>"
    }
  ]
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/adr-lifecycle.mts.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/adr-lifecycle.mts (lines 1-240)

<details>
<summary>155 lines</summary>

```
type Relationship = {
  direction: 'Supersedes' | 'Superseded by'
  target: string
  file: string
  kind: 'full' | 'partial'
  scope: string
}
type Lifecycle = { state: string; relationships: Relationship[] }

// The readable Markdown preamble is the authority; the design index mirrors it.
function parseLifecycle(
  source: string,
  label: string,
  prefix: string,
  errors: string[],
): Lifecycle {
  const preamble = source.trimStart().split('\n')
  const boundary = preamble.findIndex((line) => !line.startsWith('> '))
  const lines = boundary < 0 ? preamble : preamble.slice(0, boundary)
  const remainder = boundary < 0 ? [] : preamble.slice(boundary)
  if (remainder.some((line) => /^> (?:Lifecycle|Supersedes|Superseded by):/.test(line))) {
    errors.push(`${label}: lifecycle notices must form one leading block`)
  }
  const states = lines.filter((line) => line.startsWith('> Lifecycle:'))
  const state = states[0]?.slice('> Lifecycle: '.length) ?? ''
  if (
    states.length !== 1 ||
    !['Active', 'Partially superseded', 'Superseded'].includes(state)
  ) {
    errors.push(`${label}: expected one valid Lifecycle notice`)
  }
  const relationships: Relationship[] = []
  for (const line of lines.filter((line) => !line.startsWith('> Lifecycle:'))) {
    const match =
      /^> (Supersedes|Superseded by): \[ADR-(\d{3})\]\(([^)]+)\) \| (full|partial) \| (\S.*)$/.exec(
        line,
      )
    if (!match) {
      errors.push(`${label}: malformed lifecycle relationship`)
      continue
    }
    const [, direction = '', target = '', href = '', kind = '', scope = ''] = match
    const file = href.slice(prefix.length)
    if (
      !href.startsWith(prefix) ||
      !file.startsWith(`ADR-${target}-`) ||
      !/^ADR-\d{3}-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(file)
    ) {
      errors.push(`${label}: relationship must link directly to its named ADR`)
    }
    if (
      (kind === 'full' && scope !== 'Entire decision.') ||
      (kind === 'partial' && scope === 'Entire decision.')
    ) {
      errors.push(`${label}: replacement scope conflicts with ${kind} relationship`)
    }
    relationships.push({
      direction: direction as Relationship['direction'],
      target,
      file: href.slice(prefix.length),
      kind: kind as Relationship['kind'],
      scope,
    })
  }
  const incoming = relationships.filter((edge) => edge.direction === 'Superseded by')
  const expected = incoming.some((edge) => edge.kind === 'full')
    ? 'Superseded'
    : incoming.length
      ? 'Partially superseded'
      : 'Active'
  if (state !== expected)
    errors.push(
      `${label}: Lifecycle must be ${expected} for its replacement relationships`,
    )
  const keys = relationships.map((edge) => `${edge.direction}:${edge.target}`)
  if (new Set(keys).size !== keys.length)
    errors.push(`${label}: duplicate or conflicting relationships`)
  return { state, relationships }
}

export function validateAdrLifecycles(
  records: Map<string, string>,
  index: string,
): string[] {
  const errors: string[] = []
  const lifecycles = new Map<string, Lifecycle>()
  const names = new Map<string, string>()
  for (const [name, source] of records) {
    const id = name.slice(4, 7)
    names.set(id, name)
    const context = source.indexOf('\n## Context\n')
    const preamble = source.slice(source.indexOf('\n') + 1, context)
    lifecycles.set(id, parseLifecycle(preamble, name, '', errors))
    if (/^> (?:Lifecycle|Supersedes|Superseded by):/m.test(source.slice(context))) {
      errors.push(`${name}: lifecycle notices belong before Context`)
    }
  }
  const entries = [
    ...index.matchAll(
      /^### \[ADR-(\d{3}) — [^\]]+\]\(adr\/[^)]+\)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm,
    ),
  ]
  for (const [id, lifecycle] of lifecycles) {
    const entry = entries.find((match) => match[1] === id)
    if (!entry) {
      errors.push(`ADR-${id}: missing lifecycle index entry`)
      continue
    }
    const mirrored = parseLifecycle(entry[2] ?? '', `index ADR-${id}`, 'adr/', errors)
    const normalized = (value: Lifecycle) =>
      JSON.stringify({
        state: value.state,
        relationships: value.relationships.map((edge) => JSON.stringify(edge)).sort(),
      })
    if (normalized(lifecycle) !== normalized(mirrored))
      errors.push(`ADR-${id}: inconsistent record/index lifecycle`)
    for (const edge of lifecycle.relationships) {
      if (edge.target === id) errors.push(`ADR-${id}: supersession self-link`)
      if (names.get(edge.target) !== edge.file) {
        errors.push(`ADR-${id}: missing relationship target ${edge.file}`)
        continue
      }
      const inverse = edge.direction === 'Supersedes' ? 'Superseded by' : 'Supersedes'
      const reciprocal = lifecycles
        .get(edge.target)
        ?.relationships.find(
          (other) => other.direction === inverse && other.target === id,
        )
      if (
        !reciprocal ||
        reciprocal.kind !== edge.kind ||
        reciprocal.scope !== edge.scope
      ) {
        errors.push(
          `ADR-${id}: nonreciprocal or conflicting relationship with ADR-${edge.target}`,
        )
      }
    }
  }
  const visiting = new Set<string>()
  const visited = new Set<string>()
  function visit(id: string) {
    if (visiting.has(id)) {
      errors.push(`ADR-${id}: supersession cycle`)
      return
    }
    if (visited.has(id)) return
    visiting.add(id)
    for (const edge of lifecycles.get(id)?.relationships ?? []) {
      if (edge.direction === 'Supersedes') visit(edge.target)
    }
    visiting.delete(id)
    visited.add(id)
  }
  for (const id of lifecycles.keys()) visit(id)
  return errors
}
```

</details>


### `glob`

***vite*.ts**

"*vite*.ts"

```
/private/var/tmp/ws/c975e8e8/hvir/vitest.config.ts
/private/var/tmp/ws/c975e8e8/hvir/electron.vite.config.ts
```


### `glob`

**docs/adr/**/***

"docs/adr/**/*"

```
No files matched the pattern.
```


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-260)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/TerminalWorkspace.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/TerminalWorkspace.tsx (lines 1-260)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/settings/SettingsDialog.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/settings/SettingsDialog.tsx (lines 1-220)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-220)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/sessions/SessionsOverview.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/sessions/SessionsOverview.tsx (lines 1-220)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/dashboards/WebPane.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/dashboards/WebPane.tsx (lines 1-220)

<details>
<summary>212 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import type {
  HostPath,
  WebPaneBlockedNavigation,
  WebPaneDiagnosticEvent,
} from '../../../shared'
import { ElectronWebPaneSurface } from './ElectronWebPaneSurface'
import {
  appendWebPaneDiagnostic,
  redactedWebPaneDiagnosticUrl,
  webPaneDiagnosticReport,
  type WebPaneDiagnosticRow,
} from './web-pane-diagnostics'
import type { WebPaneSurface, WebPaneSurfaceHandle } from './web-pane-surface'
import { webPaneUrlFromInput } from './web-pane-url'

export interface WebViewState {
  readonly id: string
  readonly title: string
  readonly url: string
  readonly origin: string
  readonly partition: string
  readonly workspaceRoot: HostPath
  readonly sourceTerminalId: string
  readonly blockedNavigation?: WebPaneBlockedNavigation
  readonly routeDiagnostic?: {
    readonly revision: number
    readonly event: WebPaneDiagnosticEvent
  }
}

/** Product chrome around the swappable, hostile-content guest surface. */
export function WebPane({
  view,
  focused,
  onToggleFocus,
  onTitle,
  onBlockedNavigation,
  onOpenBrowser,
  onRevealTerminal,
  Surface = ElectronWebPaneSurface,
}: {
  readonly view: WebViewState
  readonly focused: boolean
  readonly onToggleFocus: () => void
  readonly onTitle: (title: string) => void
  readonly onBlockedNavigation: (navigation: WebPaneBlockedNavigation) => void
  readonly onOpenBrowser: (url: string) => void
  readonly onRevealTerminal: () => void
  readonly Surface?: WebPaneSurface
}): ReactElement {
  const surfaceRef = useRef<WebPaneSurfaceHandle>(null)
  const editingRef = useRef(false)
  const [pathInput, setPathInput] = useState(() => pathOf(view.url))
  const [diagnostics, setDiagnostics] = useState<readonly WebPaneDiagnosticRow[]>([])
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false)
  const browserHandoffAvailable = view.workspaceRoot.hostId === 'local'

  useEffect(() => {
    setPathInput(pathOf(view.url))
    surfaceRef.current?.navigate(view.url)
  }, [view.url])

  useEffect(() => {
    if (!view.blockedNavigation) return
    appendDiagnostic(setDiagnostics, {
      kind: 'blocked-navigation',
      message: `Blocked ${view.blockedNavigation.kind} navigation`,
      url: view.blockedNavigation.url,
    })
  }, [view.blockedNavigation])

  useEffect(() => {
    if (view.routeDiagnostic) {
      appendDiagnostic(setDiagnostics, view.routeDiagnostic.event)
    }
  }, [view.routeDiagnostic])

  const navigate = (): void => {
    surfaceRef.current?.navigate(webPaneUrlFromInput(view.origin, pathInput))
  }
  const currentUrl = webPaneUrlFromInput(view.origin, pathInput)

  return (
    <div className="web-pane" data-diagnostic-capture="web-pane">
      <div className="web-pane-toolbar">
        <button
          type="button"
          aria-label="Back"
          title="Back"
          onClick={() => surfaceRef.current?.back()}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Forward"
          title="Forward"
          onClick={() => surfaceRef.current?.forward()}
        >
          →
        </button>
        <span className="web-pane-origin" title={view.origin}>
          {view.origin}
        </span>
        <form
          className="web-pane-path"
          onSubmit={(event) => {
            event.preventDefault()
            editingRef.current = false
            navigate()
          }}
        >
          <input
            aria-label={`Path on ${view.title}`}
            value={pathInput}
            spellCheck={false}
            onFocus={() => {
              editingRef.current = true
            }}
            onBlur={() => {
              editingRef.current = false
            }}
            onChange={(event) => setPathInput(event.target.value)}
            placeholder="/"
          />
        </form>
        <button
          type="button"
          aria-label={`Reload ${view.title}`}
          title="Reload"
          onClick={() => surfaceRef.current?.reload()}
        >
          ⟳
        </button>
        <button
          type="button"
          aria-label="Reveal source terminal"
          title="Back to terminal"
          onClick={onRevealTerminal}
        >
          &gt;_
        </button>
        <button
          type="button"
          aria-label="Web pane diagnostics"
          aria-pressed={diagnosticsOpen}
          title="Diagnostics"
          onClick={() => setDiagnosticsOpen((open) => !open)}
        >
          {diagnostics.length > 0 ? `!${diagnostics.length}` : 'ⓘ'}
        </button>
        <button
          type="button"
          aria-label={
            focused
              ? `Restore the workbench around ${view.title}`
              : `Expand ${view.title} to the full window`
          }
          aria-pressed={focused}
          title={focused ? 'Restore workbench' : 'Full page'}
          onClick={onToggleFocus}
        >
          {focused ? '⇲' : '⛶'}
        </button>
        <button
          type="button"
          aria-label={`Open ${view.title} in the browser`}
          title={
            browserHandoffAvailable
              ? 'Open in browser'
              : 'Browser handoff for SSH panes needs a compatibility route'
          }
          disabled={!browserHandoffAvailable}
          onClick={() => onOpenBrowser(currentUrl)}
        >
          ↗
        </button>
      </div>
      {view.blockedNavigation ? (
        <div className="web-pane-navigation-blocked" role="status">
          <span>
            {view.blockedNavigation.kind === 'external'
              ? `This link leaves hvir for ${hostnameOf(view.blockedNavigation.url)}.`
              : `This link uses another local server (${originOf(view.blockedNavigation.url)}).`}
          </span>
          <button
            type="button"
            onClick={() => onBlockedNavigation(view.blockedNavigation!)}
          >
            {view.blockedNavigation.kind === 'external'
              ? 'Open in system browser'
              : 'Open as web pane'}
          </button>
        </div>
      ) : null}
      {diagnosticsOpen ? (
        <section className="web-pane-diagnostics" aria-label="Web pane diagnostics">
          <div>
            <strong>Recent pane events</strong>
            <button
              type="button"
              disabled={diagnostics.length === 0}
              onClick={() =>
                void navigator.clipboard.writeText(
                  webPaneDiagnosticReport(view, diagnostics),
                )
              }
            >
              Copy report
            </button>
          </div>
          {diagnostics.length === 0 ? (
            <p>No failures or console warnings recorded.</p>
          ) : (
            <ol>
              {diagnostics.map((row, index) => (
                <li key={`${row.at}:${index}`}>
                  <code>{row.kind}</code> {row.message}
```

</details>


### Copilot

I’ve confirmed the main UI surfaces; I’m now collecting package/runtime evidence for the terminal, editor, diagramming, SSH, and native addon choices.

### `rg`

**ghostty-web|node-pty|CodeMirror|codemirror|shiki|mermaid|ssh2|rename-noreplace**

"ghostty-web|node-pty|CodeMirror|codemirror|shiki|mermaid|ssh2|rename-noreplace" (src /private/var/tmp/ws/c975e8e8/hvir/packages /private/var/tmp/ws/c975e8e8/hvir/scripts)

<details>
<summary>98 matches</summary>

```
[grep content: 257 matches across 63 file(s) under /private/var/tmp/ws/c975e8e8/hvir]
packages/rename-noreplace/package.json:2:   "name": "@hvir/rename-noreplace",
packages/rename-noreplace/rename_noreplace.c:31:         "hvir.rename-noreplace.v1",

scripts/check-seams.sh (5 match(es)):
  29: # 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
  30: hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
  65: # 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
  67: hits=$(grep -rnE "from ['\"]ssh2['\"]|import\(['\"]ssh2['\"]\)" \
  70: report "ssh2 details stay inside the SshHost adapter" "$hits"

scripts/ghostty-terminal-capability-profile.mts (6 match(es)):
  8:     url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
  25:     presentationOwner: 'ghostty-web-canvas',
  55:     owner: 'ghostty-web-native-snapshot',
  71:     presentationOwner: 'ghostty-web-canvas',
  79:     presentationOwner: 'ghostty-web-canvas',
  87:     lineRunOwner: 'ghostty-web-canvas',

scripts/architecture-module-graph.mts (4 match(es)):
  178:           from === 'packages/rename-noreplace/index.js' &&
  179:           target === 'packages/rename-noreplace/build/Release/rename_noreplace.node'
  182:             'packages/rename-noreplace/binding.gyp',
  183:             'packages/rename-noreplace/rename_noreplace.c',
scripts/run-macos-package-smoke.sh:436:   packaged_pty="$application/Contents/Resources/app.asar.unpacked/node_modules/node-pty/build/Release/pty.node"

scripts/inspect-packaged-runtime.mts (5 match(es)):
  13: const PTY_NATIVE_ENTRY = '/node_modules/node-pty/build/Release/pty.node'
  14: const PTY_SPAWN_HELPER_ENTRY = '/node_modules/node-pty/build/Release/spawn-helper'
  16:   '/node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node'
  17: const RENAME_PACKAGE_ROOT = '/node_modules/@hvir/rename-noreplace'
  172:     metadata() !== 'hvir.rename-noreplace.v1'

scripts/ghostty-web-update/github-delivery.mts (14 match(es)):
  74:       throw new Error('Multiple open ghostty-web update pull requests require cleanup.')
  92:         throw new Error('Open ghostty-web update branch changed during inspection.')
  100:           'Open ghostty-web update pull request body does not match its branch.',
  125:       throw new Error('Open ghostty-web update branch changed before publication.')
  140:       `deps: update ghostty-web to ${candidate.release.tag}`,
  219:     const match = /^([0-9a-f]{40})\s+refs\/heads\/automation\/ghostty-web-update$/.exec(
  222:     if (!match) throw new Error('Remote ghostty-web update branch evidence is invalid.')
  314:     throw new Error('Open ghostty-web update package.json is invalid.')
  316:   const root = record(packageJson, 'Open ghostty-web update package.json')
  317:   const dependencies = record(root.dependencies, 'Open ghostty-web update dependencies')
  318:   if (typeof dependencies['ghostty-web'] !== 'string') {
  319:     throw new Error('Open ghostty-web update pin is missing.')
  321:   return parsePinnedArtifactUrl(dependencies['ghostty-web'])
  356:               new Error(`${command} failed during ghostty-web delivery.`, {
scripts/ghostty-web-update/github-client.mts:50:         headers.set('User-Agent', 'hvir-ghostty-web-updater')

scripts/ghostty-web-update/candidate-bundle.mts (18 match(es)):
  55:     throw new Error('Prepared ghostty-web candidate has an unexpected file set.')
  137:     throw new Error('Applied ghostty-web bundle changed an unexpected file set.')
  195:   const bundle = record(value, 'ghostty-web candidate manifest')
  213:   const hashes = record(bundle.fileHashes, 'ghostty-web candidate file hashes')
  240:   const pin = record(value, 'ghostty-web base pin')
  241:   const url = requiredString(pin.url, 'ghostty-web base URL')
  255:   const release = record(value, 'validated ghostty-web release')
  256:   const url = requiredString(release.url, 'ghostty-web release URL')
  258:   const sha256 = requiredString(release.sha256, 'ghostty-web SHA-256')
  259:   const npmIntegrity = requiredString(release.npmIntegrity, 'ghostty-web npm integrity')
  260:   const sourceCommit = requiredString(release.sourceCommit, 'ghostty-web source commit')
  277:     throw new Error('Validated ghostty-web release manifest is inconsistent.')
  294:   const delivery = record(value, 'ghostty-web delivery state')
  298:     const open = record(openValue, 'open ghostty-web pull request')
  299:     const headSha = requiredString(open.headSha, 'open ghostty-web head')
  300:     requireCommit(headSha, 'open ghostty-web head')
  303:       throw new Error('Open ghostty-web pull request number is invalid.')
  305:     const tag = parsePinnedTag(requiredString(open.tag, 'open ghostty-web tag'))

scripts/ghostty-web-update/repository-candidate.mts (25 match(es)):
  45:       dependencies['ghostty-web'],
  46:       'package.json ghostty-web pin',
  58:       packages['node_modules/ghostty-web'],
  59:       'ghostty-web lock entry',
  62:       rootDependencies['ghostty-web'] !== url ||
  66:       throw new Error('The ghostty-web package and lockfile pins are inconsistent.')
  73:       throw new Error('The ghostty-web capability evidence does not match the lockfile.')
  78:         'The ghostty-web third-party notice does not match the current pin.',
  93:       throw new Error('The ghostty-web update checkout must start clean.')
  175:         'The prepared ghostty-web candidate does not match its release evidence.',
  192:       packages['node_modules/ghostty-web'],
  193:       'ghostty-web lock entry',
  196:       rootDependencies['ghostty-web'] !== release.url ||
  201:       throw new Error('npm did not generate the exact validated ghostty-web lock entry.')
  222:   dependencies['ghostty-web'] = release.url
  238:     packages['node_modules/ghostty-web'],
  239:     'ghostty-web lock entry',
  241:   rootDependencies['ghostty-web'] = release.url
  289:     /(?<=\[ghostty-web compatibility fork\]\(https:\/\/github\.com\/jarmak-personal\/ghostty-web\/releases\/tag\/)hvir-v[^)]+(?=\)\.)/g
  312:     throw new Error('Expected one ghostty-web profile npm integrity.')
  331:     throw new Error('The ghostty-web profile WASM size is invalid.')
  346:     /(?<=\[ghostty-web compatibility fork\]\(https:\/\/github\.com\/jarmak-personal\/ghostty-web\/releases\/tag\/)hvir-v[^)]+(?=\)\.)/g,
  358:   if (matches.length !== 1) throw new Error(`Expected one ghostty-web ${name}.`)
  366:     throw new Error(`Expected one ghostty-web ${name}.`)
  422:               new Error(`${command} failed during ghostty-web candidate preparation.`, {

scripts/ghostty-web-update/cli.mts (7 match(es)):
  33:     throw new Error('Usage: update:ghostty-web -- <prepare|publish> <bundle-directory>')
  64:         `ghostty-web update no-op: ${result.selectedTag} is already represented by ${result.reason === 'main-current' ? 'main' : 'the open update pull request'}.`,
  69:         `ghostty-web update suppressed: ${result.selectedTag} was already declined by closing ${result.rejectedTag}.`,
  78:       console.log(`ghostty-web update prepared: ${bundle.release.tag}.`)
  105:     throw new Error('A newer ghostty-web release appeared before publication.')
  120:     `ghostty-web update pull request #${published.pullRequestNumber}: ${published.url}`,
  143:     console.error(error instanceof Error ? error.message : 'ghostty-web update failed.')

[omitted 169 match(es) in 51 file(s); see original output for full results]
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/c975e8e8/hvir/electron.vite.config.ts (lines 1-220)

<details>
<summary>137 lines</summary>

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
      rollupOptions: {
        input: {
          index: resolve('src/main/index.ts'),
          // Utility-process workers are built as sibling entries so the main
          // process can `utilityProcess.fork` their compiled output.
          'echo-worker': resolve('src/workers/echo-worker.ts'),
          'git-worker': resolve('src/workers/git-worker.ts'),
        },
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve('src/preload/index.ts'),
        },
      },
    },
  },
  renderer: {
    root: 'src/renderer',
    // These are loaded from module workers or other dynamic imports. Vite's
    // HTML crawl cannot discover them on a cold dev start, so without an
    // explicit list first use re-optimizes dependencies and reloads the whole
    // Electron renderer in the middle of a view-mode change.
    optimizeDeps: {
      include: [
        'markdown-it',
        'markdown-it-task-lists',
        'mermaid',
        'yaml',
        '@shikijs/langs',
        'shiki/core',
        'shiki/engine/javascript',
        'shiki/langs',
        '@shikijs/themes/dark-plus',
        '@shikijs/themes/github-light-default',
      ],
    },
    worker: {
      // Shiki's fine-grained language imports are split into worker chunks;
      // Rollup cannot represent that graph in the default IIFE worker format.
      format: 'es',
    },
    build: {
      rollupOptions: {
        input: {
          index: resolve('src/renderer/index.html'),
        },
      },
    },
    plugins: [react(), excludeDevelopmentPerformancePolicyFromProduction()],
  },
}

export default defineConfig(({ mode }) => {
  const smokeBuild = mode === 'smoke'
  const buildChannel: ApplicationBuildChannel = smokeBuild
    ? 'smoke'
    : mode === 'ssh-acceptance'
      ? 'ssh-acceptance'
      : mode === 'development'
        ? 'development'
        : 'release'
  return {
    ...baseConfig,
    main: {
      ...baseConfig.main,
      plugins: [
        ...(baseConfig.main?.plugins ?? []),
        excludeSmokeRuntimeFromProduction(smokeBuild),
      ],
      define: {
        ...baseConfig.main?.define,
        __HVIR_SMOKE_BUILD__: JSON.stringify(smokeBuild),
        __HVIR_BUILD_CHANNEL__: JSON.stringify(buildChannel),
      },
    },
  }
})
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/check-terminal-runtime.mts (lines 1-220)

<details>
<summary>127 lines</summary>

```
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
          },
        },
        requestRender(force?: boolean) {
          forcedRender = force
        },
      },
      [provider],
    )
  } catch {
    return false
  }
  return (
    receivedProvider === provider && receivedPriority === true && forcedRender === true
  )
}

function isTerminalConstructor(value: unknown): value is TerminalConstructor {
  if (typeof value !== 'function') return false
  const prototype = Reflect.get(value, 'prototype') as unknown
  return typeof prototype === 'object' && prototype !== null
}

export function assertTerminalRuntimeContract(runtime: TerminalRuntimeModule): void {
  const missing: string[] = REQUIRED_TERMINAL_METHODS.filter(
    (method) => typeof Reflect.get(runtime.Terminal.prototype, method) !== 'function',
  )
  missing.push(
    ...REQUIRED_PARSER_METHODS.filter(
      (method) =>
        typeof Reflect.get(runtime.GhosttyTerminal.prototype, method) !== 'function',
    ),
  )
  if (!hasCustomLinkProviderPriorityAndForcedRender(runtime.Terminal.prototype)) {
    missing.push('custom link-provider priority and forced render')
  }
  if (missing.length === 0) return

  throw new Error(
    `Installed dependencies do not match this checkout: ghostty-web is missing required terminal runtime capabilities (${missing.join(', ')}). ${RECOVERY}`,
  )
}

export async function verifyInstalledTerminalWasmEvidence(
  readWasmBytes: ReadInstalledWasmBytes = readInstalledWasmBytes,
): Promise<void> {
  let actualBytes: number
  try {
    actualBytes = await readWasmBytes()
  } catch (cause) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm could not be inspected. ${RECOVERY}`,
      { cause },
    )
  }
  const expectedBytes = GHOSTTY_TERMINAL_CAPABILITY_PROFILE.artifact.wasmBytes
  if (actualBytes === expectedBytes) return
  throw new Error(
    `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm is ${actualBytes} bytes; the reviewed capability profile requires ${expectedBytes}. ${RECOVERY}`,
  )
}

export async function verifyTerminalRuntimeContract(
  loadRuntime: LoadTerminalRuntime = async () => import('ghostty-web'),
): Promise<void> {
  await verifyInstalledTerminalWasmEvidence()
  let runtime: unknown
  try {
    runtime = await loadRuntime()
  } catch (cause) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web could not be loaded. ${RECOVERY}`,
      { cause },
    )
  }
  const terminal = Reflect.get(Object(runtime), 'Terminal') as unknown
  const parser = Reflect.get(Object(runtime), 'GhosttyTerminal') as unknown
  if (!isTerminalConstructor(terminal) || !isTerminalConstructor(parser)) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web does not export the required Terminal and GhosttyTerminal constructors. ${RECOVERY}`,
    )
  }
  assertTerminalRuntimeContract({ Terminal: terminal, GhosttyTerminal: parser })
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await verifyTerminalRuntimeContract()
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/package.json.**

/private/var/tmp/ws/c975e8e8/hvir/packages/rename-noreplace/package.json (lines 1-200)

<details>
<summary>20 lines</summary>

```
{
  "name": "@hvir/rename-noreplace",
  "version": "0.1.0",
  "private": true,
  "description": "Private hvir Node-API binding for atomic no-replace rename",
  "license": "MIT",
  "main": "index.js",
  "files": [
    "index.js",
    "LICENSE",
    "binding.gyp",
    "rename_noreplace.c",
    "build/Release/rename_noreplace.node"
  ],
  "gypfile": true,
  "os": [
    "darwin",
    "linux"
  ]
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/markdown-renderer.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/markdown-renderer.ts (lines 1-220)

<details>
<summary>88 lines</summary>

```
import MarkdownIt, { type Token } from 'markdown-it'

import { MARKDOWN_OPTIONS } from './render-protocol'
import {
  enableSourceLineAnchors,
  enableTaskLists,
  wrapSourceLine,
} from './markdown-extensions'
import type { LoadedViewerGrammar, ViewerGrammarRegistry } from './shiki-grammar-registry'

const MERMAID_FENCE_LANGUAGES = new Set(['mermaid', 'mmd'])
const PLAIN_FENCE_LANGUAGES = new Set(['plain', 'plaintext', 'text', 'txt'])

export async function renderMarkdownDocument(
  source: string,
  theme: 'dark' | 'light',
  grammars: Pick<ViewerGrammarRegistry, 'load'>,
): Promise<string> {
  // Bare repository filenames such as `design.md` are not web hosts. The
  // linkifier turns them into http://design.md and can navigate Electron's
  // main frame; authored Markdown links still render normally.
  const markdown = enableSourceLineAnchors(
    enableTaskLists(new MarkdownIt(MARKDOWN_OPTIONS)),
  )
  const validateLink = markdown.validateLink.bind(markdown)
  markdown.validateLink = (url) => url.startsWith('file://') || validateLink(url)
  const env: Record<string, unknown> = {}
  const tokens = markdown.parse(source, env)
  const loaded = await loadFenceGrammars(
    tokens.map((token) => token.info),
    grammars,
  )
  markdown.renderer.rules.fence = (tokens, index) => {
    const token = tokens[index]
    if (!token) return ''
    const language = fenceLanguage(token.info)
    if (MERMAID_FENCE_LANGUAGES.has(language)) {
      return wrapSourceLine(
        token,
        `<div class="mermaid-diagram"><pre>${escapeHtml(token.content)}</pre></div>`,
      )
    }
    const grammar = loaded.get(language)
    if (!grammar) return plainFence(token)
    try {
      return wrapSourceLine(
        token,
        grammar.highlighter.codeToHtml(token.content, {
          lang: grammar.id,
          theme: theme === 'light' ? 'github-light-default' : 'dark-plus',
        }),
      )
    } catch {
      return plainFence(token)
    }
  }
  return markdown.renderer.render(tokens, markdown.options, env)
}

async function loadFenceGrammars(
  infos: readonly string[],
  grammars: Pick<ViewerGrammarRegistry, 'load'>,
): Promise<Map<string, LoadedViewerGrammar>> {
  const loaded = new Map<string, LoadedViewerGrammar>()
  const languages = new Set(infos.map(fenceLanguage).filter(Boolean))
  await Promise.all(
    [...languages].map(async (language) => {
      if (MERMAID_FENCE_LANGUAGES.has(language) || PLAIN_FENCE_LANGUAGES.has(language))
        return
      try {
        const grammar = await grammars.load(language)
        if (grammar) loaded.set(language, grammar)
      } catch {
        // One unavailable grammar must not fail the Markdown surface.
      }
    }),
  )
  return loaded
}

function fenceLanguage(info: string): string {
  return info.trim().split(/\s+/)[0]?.toLowerCase() ?? ''
}

function plainFence(token: Token): string {
  return wrapSourceLine(token, `<pre><code>${escapeHtml(token.content)}</code></pre>`)
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/shiki-language-catalog.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/shiki-language-catalog.ts (lines 1-220)

<details>
<summary>20 lines</summary>

```
import { bundledLanguagesInfo, type BundledLanguage } from 'shiki/langs'

export interface ViewerGrammarDefinition {
  readonly id: BundledLanguage
  readonly aliases: readonly BundledLanguage[]
  readonly load: (typeof bundledLanguagesInfo)[number]['import']
}

export const VIEWER_GRAMMAR_DEFINITIONS: readonly ViewerGrammarDefinition[] =
  bundledLanguagesInfo.map((grammar) => ({
    id: grammar.id as BundledLanguage,
    aliases: (grammar.aliases ?? []) as BundledLanguage[],
    load: grammar.import,
  }))

const GRAMMAR_BY_NAME = new Map<string, ViewerGrammarDefinition>()

for (const grammar of VIEWER_GRAMMAR_DEFINITIONS) {
  GRAMMAR_BY_NAME.set(grammar.id, grammar)
  for (const alias of grammar.aliases) GRAMMAR_BY_NAME.set(alias, grammar)
}

export function resolveViewerGrammar(name: string): ViewerGrammarDefinition | undefined {
  return GRAMMAR_BY_NAME.get(name.trim().toLowerCase())
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/highlight-worker.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/viewer/highlight-worker.ts (lines 1-220)

<details>
<summary>14 lines</summary>

```
let sharedHighlightWorker: Worker | undefined

export function getHighlightWorker(): Worker {
  sharedHighlightWorker ??= new Worker(
    new URL('./highlight.worker.ts', import.meta.url),
    { type: 'module' },
  )
  return sharedHighlightWorker
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    sharedHighlightWorker?.terminate()
    sharedHighlightWorker = undefined
  })
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts (lines 1-220)

<details>
<summary>201 lines</summary>

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
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/package.json.**

/private/var/tmp/ws/c975e8e8/hvir/package.json (lines 1-220)

<details>
<summary>142 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "description": "A lightweight, view-first workbench for agentic development.",
  "author": {
    "name": "hvir contributors",
    "email": "jarmak-personal@users.noreply.github.com"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "homepage": "https://github.com/jarmak-personal/hvir",
  "repository": {
    "type": "git",
    "url": "https://github.com/jarmak-personal/hvir.git"
  },
  "bugs": "https://github.com/jarmak-personal/hvir/issues",
  "desktopName": "hvir",
  "keywords": [
    "agentic-development",
    "electron",
    "terminal",
    "git",
    "ssh"
  ],
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


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/TerminalDeck.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/terminal/TerminalDeck.tsx (lines 1-220)

<details>
<summary>187 lines</summary>

```
import type { CSSProperties, ReactElement, RefObject } from 'react'

import type {
  ComposerSubmitMode,
  HarnessProviderDescriptor,
  HostConnectionState,
  HostPath,
} from '../../../shared'
import { PaneResizer } from '../layout/PaneResizer'
import type { TerminalThemeOverride } from '../settings/settings'
import type {
  TerminalCursorDefaults,
  TerminalLinkActivation,
  TerminalTypography,
} from './terminal-pane'
import type { TerminalSession } from './terminal-workspace-model'
import type { FreshTerminalStart } from './terminal-runtime-options'
import type { TerminalRuntimeRegistry } from './terminal-runtime-registry'
import {
  TerminalSessionRuntimes,
  type TerminalSessionRuntimesProps,
} from './TerminalSessionRuntimes'

export function TerminalDeck({
  deckRef,
  label,
  visible,
  presentationVisible,
  available,
  ready,
  sessions,
  providers,
  activeId,
  primaryActiveId,
  secondaryActiveId,
  split,
  primaryWidth,
  terminalTheme,
  terminalLightThemeId,
  terminalDarkThemeId,
  terminalTypography,
  cursorDefaults,
  ligatures,
  composerSubmitMode,
  workspaceRoot,
  connectionState,
  onCreateDefault,
  onUpdateSession,
  onFreshStarted,
  onForkIdentity,
  onForkStartFailed,
  onExit,
  onInput,
  onOutput,
  onBell,
  onFocus,
  onLink,
  onSplit,
  onFork,
  onOpenTerminalSettings,
  onSetPrimaryWidth,
  onResetPrimaryWidth,
  runtimes,
}: {
  readonly deckRef: RefObject<HTMLDivElement | null>
  readonly label: string
  readonly visible: boolean
  readonly presentationVisible: boolean
  readonly available: boolean
  readonly ready: boolean
  readonly sessions: readonly TerminalSession[]
  readonly providers: readonly HarnessProviderDescriptor[]
  readonly activeId?: string
  readonly primaryActiveId?: string
  readonly secondaryActiveId?: string
  readonly split: boolean
  readonly primaryWidth?: number
  readonly terminalTheme: TerminalThemeOverride
  readonly terminalLightThemeId: string
  readonly terminalDarkThemeId: string
  readonly terminalTypography: TerminalTypography
  readonly cursorDefaults: TerminalCursorDefaults
  readonly ligatures: boolean
  readonly composerSubmitMode: ComposerSubmitMode
  readonly workspaceRoot: HostPath
  readonly connectionState: HostConnectionState
  readonly onCreateDefault?: () => void
  readonly onUpdateSession: (
    id: string,
    update: (session: TerminalSession) => TerminalSession,
  ) => void
  readonly onFreshStarted: (id: string, started: FreshTerminalStart) => void
  readonly onForkIdentity: TerminalSessionRuntimesProps['onForkIdentity']
  readonly onForkStartFailed: TerminalSessionRuntimesProps['onForkStartFailed']
  readonly onExit: TerminalSessionRuntimesProps['onExit']
  readonly onInput: (id: string, data: string) => void
  readonly onOutput: (id: string) => void
  readonly onBell: (id: string) => void
  readonly onFocus: (id: string) => void
  readonly onLink: (session: TerminalSession, activation: TerminalLinkActivation) => void
  readonly onSplit: () => void
  readonly onFork: (id: string) => void
  readonly onOpenTerminalSettings: () => void
  readonly onSetPrimaryWidth: (width: number) => void
  readonly onResetPrimaryWidth: () => void
  readonly runtimes: TerminalRuntimeRegistry
}): ReactElement {
  const style = primaryWidth
    ? ({ '--terminal-primary-track': `${primaryWidth}px` } as CSSProperties)
    : undefined
  const sessionRuntimes = (
    <TerminalSessionRuntimes
      sessions={sessions}
      providers={providers}
      activeId={activeId}
      primaryActiveId={primaryActiveId}
      secondaryActiveId={secondaryActiveId}
      presented={visible}
      presentationVisible={presentationVisible}
      terminalTheme={terminalTheme}
      terminalLightThemeId={terminalLightThemeId}
      terminalDarkThemeId={terminalDarkThemeId}
      terminalTypography={terminalTypography}
      cursorDefaults={cursorDefaults}
      ligatures={ligatures}
      composerSubmitMode={composerSubmitMode}
      workspaceRoot={workspaceRoot}
      connectionState={connectionState}
      onUpdateSession={onUpdateSession}
      onFreshStarted={onFreshStarted}
      onForkIdentity={onForkIdentity}
      onForkStartFailed={onForkStartFailed}
      onExit={onExit}
      onInput={onInput}
      onOutput={onOutput}
      onBell={onBell}
      onFocus={onFocus}
      onLink={onLink}
      onSplit={onSplit}
      onFork={onFork}
      onOpenTerminalSettings={onOpenTerminalSettings}
      runtimes={runtimes}
    />
  )
  if (!visible) return sessionRuntimes
  return (
    <div
      className={`terminal-deck${split ? ' split' : ''}`}
      ref={deckRef}
      style={style}
      aria-label={`${label} terminal workspace`}
      data-diagnostic-capture="terminal"
      hidden={!visible}
    >
      {ready && sessions.length === 0 ? (
        <div className="terminal-empty">
          {available && onCreateDefault ? (
            <button type="button" onClick={onCreateDefault}>
              New terminal
            </button>
          ) : (
            <span>No retained terminals</span>
          )}
        </div>
      ) : null}
      {sessionRuntimes}
      {split ? (
        <PaneResizer
          orientation="vertical"
          className="terminal-split-resizer"
          label="Resize split terminals"
          onDrag={(clientX) => {
            const left = deckRef.current?.getBoundingClientRect().left ?? 0
            onSetPrimaryWidth(clientX - left)
          }}
          onNudge={(delta) => {
            const primary = deckRef.current?.querySelector<HTMLElement>(
              '[data-terminal-slot="primary"].visible',
            )
            if (primary) {
              onSetPrimaryWidth(primary.getBoundingClientRect().width + delta)
            }
          }}
          onReset={onResetPrimaryWidth}
        />
      ) : null}
    </div>
  )
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-220)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/document-review/DocumentReviewInlineSurface.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/document-review/DocumentReviewInlineSurface.tsx (lines 1-220)

<details>
<summary>212 lines</summary>

```
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

import {
  DocumentReviewInlineHostContext,
  lineRangeLabel,
  type RegisterDocumentReviewInlineHost,
} from './document-review-inline'
import type { DocumentReviewComment, ReviewSourceRange } from './document-review-types'
import type { DocumentReviewInteraction } from './use-document-review-interaction'

interface DraftText {
  readonly key: string
  readonly body: string
}

interface EditText {
  readonly commentId: string
  readonly body: string
}

export function DocumentReviewInlineProvider({
  interaction,
  children,
}: {
  readonly interaction: DocumentReviewInteraction
  readonly children: ReactNode
}): ReactElement {
  const [host, setHost] = useState<HTMLElement>()
  const [draft, setDraft] = useState<DraftText>()
  const [edit, setEdit] = useState<EditText>()
  const registerHost = useCallback<RegisterDocumentReviewInlineHost>((nextHost) => {
    let registered = true
    setHost(nextHost)
    return () => {
      if (!registered) return
      registered = false
      setHost((current) => (current === nextHost ? undefined : current))
    }
  }, [])
  const pendingKey = interaction.pendingRange
    ? rangeKey(interaction.pendingRange)
    : undefined
  const draftBody = pendingKey && draft?.key === pendingKey ? draft.body : ''

  useEffect(() => {
    if (!interaction.pendingRange) setDraft(undefined)
  }, [interaction.pendingRange])
  useEffect(() => {
    if (edit && !interaction.comments.some((comment) => comment.id === edit.commentId)) {
      setEdit(undefined)
    }
  }, [edit, interaction.comments])

  return (
    <DocumentReviewInlineHostContext.Provider value={registerHost}>
      {children}
      {host && interaction.active && interaction.inlineRange
        ? createPortal(
            <DocumentReviewInlineThread
              interaction={interaction}
              draftBody={draftBody}
              onDraftBody={(body) => {
                if (pendingKey) setDraft({ key: pendingKey, body })
              }}
              edit={edit}
              onBeginEdit={(comment) =>
                setEdit({ commentId: comment.id, body: comment.body })
              }
              onEditBody={(body) =>
                setEdit((current) => (current ? { ...current, body } : current))
              }
              onCancelEdit={() => setEdit(undefined)}
              onSaveEdit={(commentId, body) => {
                interaction.edit(commentId, body)
                setEdit(undefined)
              }}
            />,
            host,
          )
        : null}
    </DocumentReviewInlineHostContext.Provider>
  )
}

function DocumentReviewInlineThread({
  interaction,
  draftBody,
  onDraftBody,
  edit,
  onBeginEdit,
  onEditBody,
  onCancelEdit,
  onSaveEdit,
}: {
  readonly interaction: DocumentReviewInteraction
  readonly draftBody: string
  readonly onDraftBody: (body: string) => void
  readonly edit?: EditText
  readonly onBeginEdit: (comment: DocumentReviewComment) => void
  readonly onEditBody: (body: string) => void
  readonly onCancelEdit: () => void
  readonly onSaveEdit: (commentId: string, body: string) => void
}): ReactElement | null {
  const range = interaction.inlineRange
  const comments = useMemo(
    () =>
      range
        ? interaction.comments.filter((comment) =>
            rangesOverlap(range, comment.anchor.range),
          )
        : [],
    [interaction.comments, range],
  )
  if (!range) return null
  return (
    <section
      className="document-review-inline"
      aria-label={`Document review at ${lineRangeLabel(range)}`}
      onKeyDown={(event) => {
        if (event.key !== 'Escape') return
        event.preventDefault()
        event.stopPropagation()
        if (edit) onCancelEdit()
        else interaction.cancelCapture()
      }}
    >
      <header>
        <strong>Review</strong>
        <span>{lineRangeLabel(range)}</span>
        <button
          type="button"
          className="document-review-close"
          aria-label={`Close review at ${lineRangeLabel(range)}`}
          onClick={interaction.cancelCapture}
        >
          Close
        </button>
      </header>
      {interaction.pendingRange ? (
        <NewCommentForm
          range={interaction.pendingRange}
          body={draftBody}
          onBody={onDraftBody}
          onSubmit={interaction.submit}
          onCancel={interaction.cancelCapture}
        />
      ) : null}
      {comments.length > 0 ? (
        <ol className="document-review-comments">
          {comments.map((comment) => (
            <ReviewCommentCard
              key={comment.id}
              comment={comment}
              edit={edit?.commentId === comment.id ? edit : undefined}
              focusRequest={
                interaction.commentNavigation?.id === comment.id
                  ? interaction.commentNavigation.request
                  : undefined
              }
              interaction={interaction}
              showLocation={!rangesEqual(range, comment.anchor.range)}
              onBeginEdit={() => onBeginEdit(comment)}
              onEditBody={onEditBody}
              onCancelEdit={onCancelEdit}
              onSaveEdit={(body) => onSaveEdit(comment.id, body)}
            />
          ))}
        </ol>
      ) : interaction.pendingRange ? null : (
        <p className="document-review-empty">No comments at this location.</p>
      )}
    </section>
  )
}

function NewCommentForm({
  range,
  body,
  onBody,
  onSubmit,
  onCancel,
}: {
  readonly range: ReviewSourceRange
  readonly body: string
  readonly onBody: (body: string) => void
  readonly onSubmit: (body: string) => Promise<void>
  readonly onCancel: () => void
}): ReactElement {
  const form = useRef<HTMLFormElement>(null)
  const textarea = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    form.current?.scrollIntoView?.({ block: 'nearest' })
    textarea.current?.focus({ preventScroll: true })
  }, [range.endLine, range.startLine])
  return (
    <form
      ref={form}
      className="document-review-compose"
      aria-label={`New comment for ${lineRangeLabel(range)}`}
      onSubmit={(event) => {
        event.preventDefault()
        void onSubmit(body)
      }}
    >
      <textarea
        ref={textarea}
        aria-label="New review comment"
        value={body}
        onChange={(event) => onBody(event.currentTarget.value)}
      />
      <div>
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/dashboards/WebPaneStack.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/dashboards/WebPaneStack.tsx (lines 1-220)

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

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx (lines 1-220)

<details>
<summary>197 lines</summary>

```
import { useState, type ReactElement } from 'react'

import type { WorkbenchHealthItem } from '../../../shared'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
import { useWorkbenchHealth } from './use-workbench-health'
import { useDiagnosticEvidence } from './use-diagnostic-evidence'
import { DiagnosticReportDialog } from '../diagnostics/DiagnosticReportDialog'

export function WorkbenchHealthControl(): ReactElement {
  const [open, setOpen] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)
  const health = useWorkbenchHealth()
  const evidence = useDiagnosticEvidence()
  const unresolved = health.snapshot.items.filter((item) => item.state !== 'resolved')
  const newCount = unresolved.filter((item) => item.state === 'open').length
  const critical = unresolved.some((item) => item.severity === 'critical')
  const label = !health.ready
    ? 'Workbench health: loading'
    : health.snapshot.evidence === 'unavailable'
      ? `Workbench health: evidence unavailable, ${unresolved.length} unresolved fault${unresolved.length === 1 ? '' : 's'}`
      : unresolved.length === 0
        ? 'Workbench health: no unresolved faults'
        : `Workbench health: ${unresolved.length} unresolved fault${unresolved.length === 1 ? '' : 's'}, ${newCount} open`

  return (
    <>
      <button
        type="button"
        className={`workbench-health-toggle${critical ? ' critical' : ''}${newCount > 0 ? ' new' : ''}${health.snapshot.evidence === 'unavailable' ? ' unavailable' : ''}`}
        aria-label={label}
        title={label}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">◇</span>
        {unresolved.length > 0 ? <b>{unresolved.length}</b> : null}
      </button>
      {open ? (
        <ConfirmationDialog
          labelledBy="workbench-health-title"
          actions={[{ label: 'Close', kind: 'cancel', onSelect: () => setOpen(false) }]}
          className="workbench-health-dialog"
        >
          <header className="workbench-health-heading">
            <div>
              <h2 id="workbench-health-title">Workbench health</h2>
              <p>
                Application faults observed by hvir, separate from terminal attention.
              </p>
            </div>
            <EvidenceState evidence={health.snapshot.evidence} />
          </header>
          {health.snapshot.items.length === 0 ? (
            <p className="workbench-health-empty">No workbench faults observed.</p>
          ) : (
            <ol className="workbench-health-list">
              {health.snapshot.items.map((item) => (
                <HealthItem
                  item={item}
                  key={`${item.kind}:${item.occurrenceId}`}
                  onAcknowledge={() => health.acknowledge(item.occurrenceId)}
                />
              ))}
            </ol>
          )}
          {health.snapshot.dropped > 0 ? (
            <p className="workbench-health-dropped">
              {health.snapshot.dropped} older health item
              {health.snapshot.dropped === 1 ? '' : 's'} omitted by the local bound.
            </p>
          ) : null}
          <DiagnosticEvidenceDetails evidence={evidence} />
          <button
            type="button"
            className="prepare-diagnostic-report"
            onClick={() => {
              setOpen(false)
              setReportOpen(true)
            }}
          >
            Prepare diagnostic report
          </button>
        </ConfirmationDialog>
      ) : null}
      {reportOpen ? (
        <DiagnosticReportDialog onClose={() => setReportOpen(false)} />
      ) : null}
    </>
  )
}

function DiagnosticEvidenceDetails({
  evidence,
}: {
  readonly evidence: ReturnType<typeof useDiagnosticEvidence>
}): ReactElement {
  const state = evidence.state
  return (
    <section className="workbench-health-storage" aria-label="Local diagnostic evidence">
      <h3>Local diagnostic evidence</h3>
      {state ? (
        <>
          <p>
            Recent memory is bounded to {state.recent.maxEvents} events /{' '}
            {formatBytes(state.recent.maxBytes)}.
          </p>
          {state.journal ? (
            <>
              <p>
                Journal bound: {state.journal.maxSegments} ×{' '}
                {formatBytes(state.journal.maxSegmentBytes)}, retained for{' '}
                {state.journal.retentionHours / 24} days.
              </p>
              <code>{state.journal.location}</code>
            </>
          ) : (
            <p>Durable journaling is disabled in this build.</p>
          )}
        </>
      ) : (
        <p>Loading local evidence details…</p>
      )}
      <button
        type="button"
        disabled={evidence.deleting || !state}
        onClick={evidence.deleteEvidence}
      >
        {evidence.deleting ? 'Deleting evidence…' : 'Delete local evidence'}
      </button>
      {evidence.message ? <p role="status">{evidence.message}</p> : null}
    </section>
  )
}

function HealthItem({
  item,
  onAcknowledge,
}: {
  readonly item: WorkbenchHealthItem
  readonly onAcknowledge: () => void
}): ReactElement {
  return (
    <li className={`workbench-health-item ${item.severity} ${item.state}`}>
      <div className="workbench-health-item-title">
        <strong>{healthKindLabel(item.kind)}</strong>
        <span>
          {item.severity} · {item.state}
        </span>
      </div>
      <p>
        {item.owner === 'window-manager' ? 'Window manager' : 'React error boundary'} ·
        renderer {item.ownerId}, generation {item.ownerGeneration} · {item.count}{' '}
        occurrence
        {item.count === 1 ? '' : 's'}
      </p>
      <p>Classification: {item.classification.replaceAll('-', ' ')}</p>
      <p>
        First {formatTime(item.firstObservedAt)} · last {formatTime(item.lastObservedAt)}
      </p>
      {item.recoveryOutcome ? (
        <p>Recovery: {recoveryLabel(item.recoveryOutcome)}</p>
      ) : null}
      <code>{item.correlation}</code>
      {item.state === 'open' ? (
        <button type="button" onClick={onAcknowledge}>
          Acknowledge
        </button>
      ) : null}
    </li>
  )
}

function EvidenceState({
  evidence,
}: {
  readonly evidence: 'durable' | 'memory-only' | 'unavailable'
}): ReactElement {
  const label =
    evidence === 'durable'
      ? 'Bounded local evidence'
      : evidence === 'memory-only'
        ? 'Memory-only evidence'
        : 'Durable evidence unavailable'
  return <span className={`workbench-health-evidence ${evidence}`}>{label}</span>
}

function healthKindLabel(kind: WorkbenchHealthItem['kind']): string {
  if (kind === 'react-render-contained') return 'Render failure contained'
  if (kind === 'main-document-load-failed') return 'Workbench document failed to load'
  if (kind === 'renderer-process-exited') return 'Renderer exited unexpectedly'
  return 'Renderer became unresponsive'
}

function recoveryLabel(
  outcome: NonNullable<WorkbenchHealthItem['recoveryOutcome']>,
): string {
  return outcome.replaceAll('-', ' ')
}

function formatTime(value: string): string {
  return new Date(value).toLocaleString()
}

function formatBytes(value: number): string {
  return value >= 1024 * 1024
    ? `${value / (1024 * 1024)} MiB`
    : `${Math.round(value / 1024)} KiB`
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/settings/SettingsDialog.tsx.**

/private/var/tmp/ws/c975e8e8/hvir/src/renderer/src/settings/SettingsDialog.tsx (lines 1-80)

<details>
<summary>73 lines</summary>

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
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/smoke/index.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/smoke/index.ts (lines 1-180)

<details>
<summary>178 lines</summary>

```
import {
  verifyTerminalThemeScenario,
  verifyTerminalMoveScenario,
  verifyWorkbenchLayoutScenario,
  verifyTerminalSplitScenario,
  verifyAppSettingsScenario,
  verifyHarnessProfilesScenario,
} from './terminal-presentation-scenarios'
import type { ElectronSmokeDependencies } from './bootstrap-contract'
import { SmokeRendererReadiness } from './renderer-readiness-observer'
import { verifyTerminalLifecycleScenario } from './terminal-lifecycle-scenario'
import { verifyCapacityScenario } from './capacity-scenario'
import { createProjectFixtureCommands } from './project-fixture-commands'
import { verifyNativeHostWorker } from './native-host-worker'
import { verifyRendererReadiness } from './renderer-readiness'
import { createProjectFileFixture } from './project-file-fixture'
import {
  createDocumentReviewFixture,
  documentReviewSmokeProvider,
} from './document-review-fixture'
import { createViewerFixtures } from './viewer-fixtures'
import { createSmokeProjectState } from './project-state-fixture'
import { createSessionsProjectState } from './sessions-project-fixture'
import type { BrowserWindow } from 'electron'
import { dispatchWorkerHostCall } from '../git/worker-host-broker'
import { createFilenameSearchCoordinator } from '../filename-search'
import { createProjectFileOperationCoordinator } from '../project-file-operations'
import { ProjectFolderPickerCoordinator } from '../project-folder-picker'
import { createDocumentReviewRuntime } from '../document-review'
import { HarnessProfileStore } from '../harness/harness-profile-store'
import {
  HarnessProviderRegistry,
  harnessProviderCatalog,
  harnessProviders,
} from '../harness/harness-provider'
import { HarnessUsageDemandController } from '../harness/harness-usage-demand-controller'
import { sendRendererEvent } from '../renderer-event-delivery'
import { registerIpcHandlers } from '../ipc'
import type { RendererResourceScopes } from '../renderer-resource-scopes'
import { PtySupervisor } from '../pty/pty-supervisor'
import { SessionsObservationPort } from '../sessions/sessions-observation-port'
import { SessionsUsageObservationPort } from '../sessions/sessions-usage-observation-port'
import { createWorkerClient, workerPath } from '../worker-host'
import { createWorkspaceCleanup } from '../workspace-cleanup'
import { SmokeCleanup } from './cleanup'
import {
  reportSmokeFailureEvidence,
  smokeCleanupResource,
  type SmokeFailureCheckpoint,
  type SmokeFailurePhase,
  type SmokeOwnedResourceEvidence,
} from './failure-evidence.mts'
import { recordRendererIsolationSelection } from './renderer-isolation'
import { createSmokeImagePasteFallback } from './image-paste-fallback'
import { verifyDiagnosticRestart } from './diagnostic-report-restart'
import { verifyDevelopmentPerformanceMode } from './development-performance'
import { verifyDocumentReviewWorkflow } from './document-review'
import { verifyGitWorkflow } from './git-workflow'
import { verifyPlatformContracts } from './platform-contracts'
import { verifyRendererAuthorityLifecycle } from './renderer-authority'
import { createExternalMoveSmokeControl } from './external-file-move'
import {
  createRemoteProjectFileSmokeHost,
  verifyProjectFileOperationsSmoke,
} from './project-file-operations'
import { verifyFocusedViewer } from './viewer-position'
import { verifyViewerContent } from './viewer-content'
import { verifyWorkbenchHealthScenario } from './workbench-health-scenario'
import { verifyRendererRecoveryScenario } from './renderer-recovery-scenario'
import { verifySessionsProjectionScenario } from './sessions-projection-scenario'
import { sessionsUsageSmokeProvider } from './sessions-usage-provider'
import { createTerminalMoveSmokeHarness } from './terminal-move'
import { createSmokeTerminalSessionStore } from './terminal-session-store'
import { verifyTerminalPresentationLifecycle } from './terminal-presentation'
import { verifyWebPaneWorkflow } from './web-pane'
import { verifyWorkspaceRemoteWorkflow } from './workspace-remote'
import { workspaceCloseSmokeCommands } from './workspace-close'
import {
  asHostId,
  hostPath,
  joinHostPath,
  localPath,
  type Disposer,
  type EchoWorkerProtocol,
  type GitWorkerProtocol,
  type IpcEventChannel,
  type IpcEventPayload,
} from '../../shared'

/** Production-composed Electron acceptance workflow selected by `HVIR_SMOKE=1`. */
export async function runSmoke(dependencies: ElectronSmokeDependencies): Promise<number> {
  const {
    createWindow,
    harnessProbeManager,
    htmlPreviews,
    rendererResources,
    mode,
    projectRoot,
    openExternal,
    updateWebPaneBindings,
    updateWebPaneFullPage,
    webPaneRoutes,
    interruptionCheckpoint,
  } = dependencies
  let smokeWindow: BrowserWindow | undefined
  let smokeSupervisor: PtySupervisor | undefined
  let cleanupFailureResource: ReturnType<typeof smokeCleanupResource> = null
  let discardedRendererGenerations = 0
  let stopSmokeWatch: Disposer | undefined
  const cleanup = new SmokeCleanup((name) => interruptionCheckpoint.disposed(name), {
    onFailure: (name) => {
      cleanupFailureResource = smokeCleanupResource(name)
      reportSmokeFailureEvidence(
        'cleanup',
        smokeOwnedResourceEvidence(
          smokeWindow,
          smokeSupervisor,
          stopSmokeWatch !== undefined,
          rendererResources,
        ),
        null,
        cleanupFailureResource,
      )
    },
  })
  let scenarioFailed = false
  let failurePhase: SmokeFailurePhase = 'resources-created'
  let failureCheckpoint: SmokeFailureCheckpoint | null = null
  const recordSmokePhase = (phase: SmokeFailurePhase): void => {
    failurePhase = phase
    failureCheckpoint = null
    reportSmokeFailureEvidence(
      phase,
      smokeOwnedResourceEvidence(
        smokeWindow,
        smokeSupervisor,
        stopSmokeWatch !== undefined,
        rendererResources,
      ),
    )
  }
  const recordSmokeCheckpoint = (checkpoint: SmokeFailureCheckpoint): void => {
    failureCheckpoint = checkpoint
    reportSmokeFailureEvidence(
      failurePhase,
      smokeOwnedResourceEvidence(
        smokeWindow,
        smokeSupervisor,
        stopSmokeWatch !== undefined,
        rendererResources,
      ),
      checkpoint,
    )
  }
  recordSmokePhase(failurePhase)
  try {
    const defaultHarnessProviderId = harnessProviderCatalog().find(
      (provider) => provider.default,
    )!.id
    const smokeRoot = projectRoot
    const {
      host,
      smokeTrashRecoveryRoot,
      failTrashFor,
      prepare: prepareProjectFiles,
    } = createProjectFileFixture(smokeRoot, cleanup)
    const worker = cleanup.acquire(
      'echo worker',
      () =>
        createWorkerClient<EchoWorkerProtocol>(
          workerPath('echo-worker.js'),
          'hvir-echo-smoke',
        ),
      (worker) => worker.dispose(),
    )

    const git = cleanup.acquire(
      'Git worker',
      () =>
        createWorkerClient<GitWorkerProtocol>(
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-hotspots.mts.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-hotspots.mts (lines 1-220)

<details>
<summary>138 lines</summary>

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
  const policy = validatePolicy(JSON.parse(readFileSync(join(root, POLICY_PATH), 'utf8')))
  const inventory = source.collectInventory(policy)
  const head = fullCommit(root, 'HEAD')
  const rows = evaluateInventory(
    policy,
    inventory,
    source.comparisonCounts(inventory, [head]),
  )
  return {
    policy,
    inventory,
    version: 2,
    mode: 'provisional-report',
    head,
    evidence:
      'No authorization claimed; architecture:check resolves the current target and acceptance evidence.',
    rows,
    violations: rows.filter((row) => row.status === 'over'),
  }
}

export function formatReport(report: {
  mode: string
  rows: ArchitectureRow[]
  violations: ArchitectureRow[]
  context?: ArchitectureContext
  admission?: { kind: string }
  evidence?: string
}): string {
  const lines = [
    `architecture budgets (${report.mode})`,
    `${report.rows.length} maintained source files; every file has one governing rule`,
  ]
  if (report.context)
    lines.push(
      `candidate ${report.context.head}; ${report.context.target} base ${report.context.base}; ${report.admission?.kind ?? 'unavailable'}`,
    )
  if (report.evidence) lines.push(report.evidence)
  for (const row of report.rows.filter(
    (row) => row.aboveComfort || row.exception || row.status === 'over',
  )) {
    lines.push(
      `${row.status === 'over' ? '!' : '·'} ${row.path}: ${row.lines}/${row.effectiveLimit} lines (${row.category}, ${row.governingRule}${row.aboveComfort ? ', above comfort' : ''})`,
    )
  }
  lines.push(`${report.violations.length} budget violation(s)`)
  return lines.join('\n')
}

export async function runArchitectureCommand(root = repositoryRoot): Promise<void> {
  try {
    const enforce = process.argv.includes('--enforce')
    let collected
    if (enforce) {
      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
      const context = await resolveArchitectureContext(root, api)
      collected = await authorizeCandidate({
        root,
        context,
        loadIntegration: (merge, epic) =>
          loadArchitectureIntegration(root, api, merge, epic),
      })
      await requireCurrentRemovalIssues(api, collected.policy)
      const current = await resolveArchitectureContext(root, api)
      if (current.base !== context.base || current.head !== context.head)
        throw new Error('Architecture target changed during verification; reverify')
    } else collected = collectArchitectureHotspots(root)
    const { policy, inventory, ...report } = collected
    const dependencies = collectModuleGraph(root, inventory, policy)
    dependencies.violations.push(...(await checkModuleDirections(dependencies, root)))
    console.log(
      process.argv.includes('--json')
        ? JSON.stringify({ ...report, dependencies }, null, 2)
        : `${formatReport(report)}\n${formatModuleGraph(dependencies)}`,
    )
    if (enforce && (report.violations.length || dependencies.violations.length))
      process.exitCode = 1
  } catch (error) {
    console.error(
      `Architecture verification failed: ${error instanceof Error ? error.message : 'Unknown failure'}`,
    )
    process.exitCode = 1
  }
}

export function formatModuleGraph(graph: ModuleGraph): string {
  return [
    `module graph: ${graph.modules.length} maintained TS/JS modules; ${graph.edges.length} internal edges`,
    `roots: ${graph.scope.roots.join(', ')}; resolution: ${graph.scope.configs.join(', ')}`,
    ...graph.scope.exclusions,
    `${graph.runtimeComponents.length} runtime cycle(s); ${graph.staticComponents.length} static component(s)`,
    ...graph.staticComponents.flatMap((members) => [
      `component: ${members.join(', ')}`,
      ...graph.edges
        .filter((edge) => members.includes(edge.from) && members.includes(edge.to))
        .map(
          (edge) =>
            `  ${edge.from}:${edge.line} --${edge.kind}/${edge.form}--> ${edge.to}`,
        ),
    ]),
    ...graph.loading
      .filter((entry) => entry.disposition !== 'external')
      .map(
        (entry) =>
          `loading: ${entry.from}:${entry.line} ${entry.form} ${entry.disposition}${entry.target ? ` -> ${entry.target}` : ''}`,
      ),
    ...graph.violations.map(
      (issue) =>
        `! ${issue.rule}: ${issue.from ?? ''}${issue.line ? `:${issue.line}` : ''}${issue.to ? ` -> ${issue.to}` : ''}: ${issue.detail}`,
    ),
    `${graph.violations.length} dependency violation(s)`,
  ].join('\n')
}
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-policy.mts.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-policy.mts (lines 1-220)

<details>
<summary>215 lines</summary>

```
// Architecture budgets and maintained-source classification share one policy owner.
import { extname, basename } from 'node:path'
import type { Buffer } from 'node:buffer'

export const POLICY_PATH = 'scripts/architecture-hotspots.json'
export const SOURCE_ROOTS = [
  'src',
  'test',
  'scripts',
  'packages',
  'build',
  '.github',
  '.githooks',
  '.agents',
  '.claude',
]
export const SOURCE_EXTENSIONS = [
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.css',
  '.sh',
  '.bash',
  '.zsh',
  '.c',
  '.h',
]
const DATA_EXTENSIONS = new Set([
  '.json',
  '.yaml',
  '.yml',
  '.md',
  '.txt',
  '.html',
  '.svg',
  '.png',
  '.gif',
  '.icns',
  '.plist',
  '.toml',
  '.csv',
  '.gyp',
  '.apparmor',
  '.dev',
  '.gitignore',
  '.prettierignore',
])
const DISPOSABLE_ROLES: Readonly<Record<string, string>> = {
  node_modules: 'installed dependencies',
  '.git': 'Git internals',
  out: 'disposable build output',
  dist: 'disposable distribution output',
  coverage: 'disposable test coverage',
}

export interface BudgetMetadata {
  path: string
  maxLines: number
  owner: string
  rationale: string
  reconsiderWhen: string
}
export interface ArchitectureBudget extends BudgetMetadata {
  kind: 'stricter' | 'transitional' | 'durable'
  removalIssue?: string
}
export interface GeneratedBudget extends BudgetMetadata {
  generator: string
  inputs: Array<{ path: string; sha256: string }>
  command: string
}
export interface ArchitecturePolicy {
  version: 2
  comfortLines: 500
  defaultMaximum: number
  roots: string[]
  extensions: string[]
  budgets: ArchitectureBudget[]
  generated: GeneratedBudget[]
}
export type ArchitectureRule =
  | ArchitectureBudget
  | (GeneratedBudget & { kind: 'generated' })
  | { kind: 'ordinary'; maxLines: number }
export type SourceInventory = Map<string, Buffer>
export type ComparisonCounts = Map<string, number[]>
export interface ArchitectureRow {
  path: string
  category: 'production' | 'test' | 'smoke' | 'tooling' | 'generated'
  lines: number
  governingRule: ArchitectureRule['kind']
  declaredLimit: number
  effectiveLimit: number
  aboveComfort: boolean
  status: 'ok' | 'over'
  exception?: Exclude<ArchitectureRule, { kind: 'ordinary' }>
}

export function disposableDirectory(path: string): boolean {
  return (
    path.split('/').some((part) => Object.hasOwn(DISPOSABLE_ROLES, part)) ||
    /^packages\/[^/]+\/build(?:\/|$)/.test(path)
  )
}

// Configured source extensions always win. These fixed data dispositions are not a
// caller-configurable exclusion list; ignored or untracked unknown source still fails.
export function sourceDisposition(
  path: string,
  policy: ArchitecturePolicy,
): 'source' | 'data' | 'inspect' {
  const extension = extname(path)
  if (policy.extensions.includes(extension)) return 'source'
  if (
    DATA_EXTENSIONS.has(extension) ||
    ['.log', '.tsbuildinfo'].includes(extension) ||
    /^\.env(?:\.[a-zA-Z0-9_-]+)*$/.test(basename(path))
  )
    return 'data'
  return 'inspect'
}
export function isSource(
  path: string,
  bytes: Buffer,
  policy: ArchitecturePolicy,
): boolean {
  if (sourceDisposition(path, policy) === 'source') return true
  const first = bytes.subarray(0, 200).toString().split('\n')[0] ?? ''
  if (/^#!.*\b(?:sh|bash|zsh)(?:\s|$)/.test(first)) return true
  if (
    first.startsWith('#!') ||
    (extname(path) && sourceDisposition(path, policy) !== 'data')
  ) {
    throw new Error(
      `Unclassified source language: ${path}; add an explicit policy disposition`,
    )
  }
  return false
}
export function inScope(path: string, policy: ArchitecturePolicy): boolean {
  return !path.includes('/') || policy.roots.some((root) => path.startsWith(`${root}/`))
}

export function physicalLines(bytes: Uint8Array): number {
  if (!bytes.length) return 0
  let count = 0
  for (const byte of bytes) if (byte === 10) count++
  return count + (bytes[bytes.length - 1] === 10 ? 0 : 1)
}
function closed(
  value: unknown,
  keys: string[],
  label: string,
): asserts value is Record<string, unknown> {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    Object.keys(value).some((key) => !keys.includes(key))
  )
    throw new Error(`Malformed ${label}: unexpected fields`)
}
function text(value: unknown, label: string): asserts value is string {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`Missing ${label}`)
}
function maximum(value: unknown): asserts value is number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 1)
    throw new Error('Malformed integer maximum')
}
export function repositoryPath(value: unknown): string {
  text(value, 'repository path')
  if (
    value.startsWith('/') ||
    value.includes('\\') ||
    value.split('/').some((p) => !p || p === '..' || p === '.') ||
    /[*?[\]]/.test(value) ||
    [...value].some((c) => c.charCodeAt(0) < 32)
  )
    throw new Error(`Invalid exact repository path: ${value}`)
  return value
}
function uniqueStrings(values: unknown, label: string): asserts values is string[] {
  if (
    !Array.isArray(values) ||
    values.some((v: unknown) => typeof v !== 'string') ||
    new Set(values).size !== values.length
  )
    throw new Error(`Malformed ${label}`)
}
function metadata(entry: Record<string, unknown>): BudgetMetadata {
  maximum(entry.maxLines)
  text(entry.owner, 'owner')
  text(entry.rationale, 'rationale')
  text(entry.reconsiderWhen, 'reconsiderWhen')
  return {
    path: repositoryPath(entry.path),
    maxLines: entry.maxLines,
    owner: entry.owner,
    rationale: entry.rationale,
    reconsiderWhen: entry.reconsiderWhen,
  }
}
export function validatePolicy(value: unknown): ArchitecturePolicy {
  closed(
    value,
    [
      'version',
      'comfortLines',
      'defaultMaximum',
      'roots',
      'extensions',
      'budgets',
      'generated',
    ],
    'policy',
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-module-graph.mts.**

/private/var/tmp/ws/c975e8e8/hvir/scripts/architecture-module-graph.mts (lines 1-220)

<details>
<summary>217 lines</summary>

```
import { existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'
import type { ArchitecturePolicy, SourceInventory } from './architecture-policy.mts'
import {
  createModuleResolution,
  DECLARATION_EXTENSION,
  MODULE_EXTENSION,
  moduleReferences,
  RESOLUTION_CONFIGS,
  type ModuleReference,
} from './architecture-module-resolution.mts'

export interface ModuleEdge extends ModuleReference {
  from: string
  to: string
  kind: 'runtime' | 'type-only'
}
export interface LoadingDisposition extends ModuleReference {
  from: string
  target?: string
  disposition:
    | 'external'
    | 'asset'
    | 'native-build-output'
    | 'process-entry'
    | 'nonliteral'
    | 'discovery'
}
export interface GraphViolation {
  rule: string
  from?: string
  to?: string
  line?: number
  detail: string
}
export interface ModuleGraph {
  scope: { roots: string[]; configs: string[]; exclusions: string[] }
  modules: string[]
  edges: ModuleEdge[]
  loading: LoadingDisposition[]
  staticComponents: string[][]
  runtimeComponents: string[][]
  violations: GraphViolation[]
}

/** Tarjan over deterministic paths; same policy includes singleton runtime self-loops. */
export function cyclicComponents(modules: string[], edges: ModuleEdge[]): string[][] {
  const adjacency = new Map(modules.map((path) => [path, [] as string[]]))
  for (const edge of edges) adjacency.get(edge.from)!.push(edge.to)
  const ids = new Map<string, number>(),
    low = new Map<string, number>()
  const stack: string[] = [],
    active = new Set<string>(),
    components: string[][] = []
  let serial = 0
  function visit(path: string): void {
    ids.set(path, serial)
    low.set(path, serial++)
    stack.push(path)
    active.add(path)
    for (const target of adjacency.get(path)!) {
      if (!ids.has(target)) {
        visit(target)
        low.set(path, Math.min(low.get(path)!, low.get(target)!))
      } else if (active.has(target))
        low.set(path, Math.min(low.get(path)!, ids.get(target)!))
    }
    if (low.get(path) !== ids.get(path)) return
    const component: string[] = []
    let current: string
    do {
      current = stack.pop()!
      active.delete(current)
      component.push(current)
    } while (current !== path)
    if (component.length > 1 || adjacency.get(path)!.includes(path))
      components.push(component.sort())
  }
  for (const path of modules) if (!ids.has(path)) visit(path)
  return components.sort((a, b) => a.join('\0').localeCompare(b.join('\0'), 'en'))
}

export function collectModuleGraph(
  root: string,
  inventory: SourceInventory,
  policy: ArchitecturePolicy,
): ModuleGraph {
  const resolver = createModuleResolution(root)
  const modules = [...inventory.keys()]
    .filter((path) => MODULE_EXTENSION.test(path))
    .sort()
  const included = new Set(modules)
  const edges: ModuleEdge[] = [],
    loading: LoadingDisposition[] = [],
    violations: GraphViolation[] = []
  for (const from of modules) {
    const text = inventory.get(from)!.toString()
    const source = ts.createSourceFile(from, text, ts.ScriptTarget.Latest, true)
    const declaration = DECLARATION_EXTENSION.test(from)
    const emission = ts.transpileModule(text, {
      fileName: from.replace(/\.d(?=\.[cm]?ts$)/, ''),
      reportDiagnostics: true,
      compilerOptions: {
        ...resolver.options(from),
        noEmit: false,
        declaration: false,
        sourceMap: false,
        inlineSourceMap: false,
      },
    })
    const errors =
      emission.diagnostics?.filter((d) => d.category === ts.DiagnosticCategory.Error) ??
      []
    if (errors.length)
      throw new Error(
        `Malformed module input: ${from}: ${errors.map((d) => ts.flattenDiagnosticMessageText(d.messageText, ' ')).join('; ')}`,
      )
    const emitted = declaration ? '' : emission.outputText
    const runtime = new Set(
      moduleReferences(
        ts.createSourceFile(`${from}.js`, emitted, ts.ScriptTarget.Latest, true),
      )
        .filter((ref) => !ref.erased)
        .map((ref) => ref.specifier),
    )
    for (const ref of moduleReferences(source, resolver.options(from))) {
      const kind =
        !declaration && !ref.erased && runtime.has(ref.specifier)
          ? 'runtime'
          : 'type-only'
      if (!ref.specifier || ref.form === 'discovery') {
        loading.push({
          ...ref,
          from,
          disposition: ref.form === 'discovery' ? 'discovery' : 'nonliteral',
        })
        continue
      }
      if (ref.form === 'module-runner') {
        const target = ref.specifier.startsWith('/')
          ? ref.specifier.slice(1)
          : resolver.asset(from, ref.specifier)
        if (!included.has(target))
          violations.push({
            rule: 'unresolved-module-runner',
            from,
            to: target,
            line: ref.line,
            detail: 'Module-runner entry must be maintained source',
          })
        loading.push({ ...ref, from, target, disposition: 'discovery' })
        continue
      }
      const resolved = resolver.resolveReference(from, ref.specifier)
      let target = resolved.target
      if (ref.form === 'worker' || ref.form === 'utility-process') {
        if (target && DECLARATION_EXTENSION.test(target))
          target = resolver.runtimeCompanion(from, ref.specifier, target)
        if (!target || !included.has(target))
          violations.push({
            rule: target ? 'unclassified-process-entry' : 'unresolved-process-entry',
            from,
            to: target ?? resolver.asset(from, ref.specifier),
            line: ref.line,
            detail: 'Process entry must resolve to maintained implementation source',
          })
        loading.push({ ...ref, from, target, disposition: 'process-entry' })
        continue
      }
      if (resolved.external || (!target && !resolved.local)) {
        loading.push({ ...ref, from, disposition: 'external' })
        continue
      }
      if (!target) {
        target = resolver.asset(from, ref.specifier)
        if (
          from === 'packages/rename-noreplace/index.js' &&
          target === 'packages/rename-noreplace/build/Release/rename_noreplace.node'
        ) {
          for (const input of [
            'packages/rename-noreplace/binding.gyp',
            'packages/rename-noreplace/rename_noreplace.c',
          ]) {
            if (!existsSync(resolve(root, input)))
              throw new Error(`Missing required native build input: ${input}`)
          }
          loading.push({ ...ref, from, target, disposition: 'native-build-output' })
          continue
        }
        if (
          /\.(css|json|svg|png|jpe?g|gif|webp|avif|ico|wasm|txt|html|woff2?|ttf|otf)$/.test(
            target,
          ) &&
          !target.startsWith('../') &&
          existsSync(resolve(root, target)) &&
          statSync(resolve(root, target)).isFile()
        ) {
          loading.push({ ...ref, from, target, disposition: 'asset' })
          continue
        }
        violations.push({
          rule: 'unresolved-internal',
          from,
          to: target,
          line: ref.line,
          detail: `Unresolved internal ${ref.form}: ${ref.specifier}`,
        })
        continue
      }
      if (kind === 'runtime' && DECLARATION_EXTENSION.test(target)) {
        if (!included.has(target)) {
          violations.push({
            rule: 'unclassified-internal',
            from,
            to: target,
            line: ref.line,
            detail: 'Resolved declaration is absent from maintained inventory',
          })
          continue
```

</details>


### `view`

**view the file at /private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/authority-channel-policy.ts.**

/private/var/tmp/ws/c975e8e8/hvir/src/main/ipc/authority-channel-policy.ts (lines 1-220)

<details>
<summary>111 lines</summary>

```
import { SEND_CHANNELS, type IpcInvokeChannel } from '../../shared'

export const OWNER_SCOPED_INVOKE_CHANNELS = [
  'workbench-health:acknowledge',
  'diagnostic-evidence:get',
  'diagnostic-evidence:delete',
  'diagnostic-report:create',
  'diagnostic-report:capture',
  'diagnostic-report:copy',
  'diagnostic-report:save',
  'diagnostic-report:cancel',
  'diagnostic-report:delete',
  'project:connect-host',
  'project:browse-host',
  'project:folder-picker-start',
  'project:folder-picker-browse',
  'project:folder-picker-create-directory',
  'project:folder-picker-close',
  'project:open',
  'sessions:observe',
  'sessions:snapshot',
  'sessions:release',
  'sessions:usage-observe',
  'sessions:usage-snapshot',
  'sessions:usage-release',
  'sessions:open',
  'sessions:resolve-terminal',
  'document-review:restore',
  'document-review:save',
  'document-review:revalidate',
  'document-review:delivery-destinations',
  'document-review:preview-delivery',
  'document-review:prepare-delivery',
  'document-review:insert-delivery',
  'document-review:send-now-delivery',
  'ssh:prompt-response',
  'fs:read',
  'fs:read-asset',
  'fs:filename-search',
  'fs:reveal-entry',
  'fs:create-entry',
  'fs:acquire-clipboard-files',
  'fs:acquire-dropped-files',
  'fs:copy-external',
  'fs:external-move-disclosure',
  'fs:acquire-external-move-files',
  'fs:release-external-move-grant',
  'fs:move-external',
  'fs:organize-entry',
  'fs:deletion-disclosure',
  'fs:delete-entry',
  'fs:cancel-file-operation',
  'html-preview:create',
  'web-pane:open',
  'web-pane:close',
  'web-pane:open-external',
  'web-pane:open-browser',
  'terminal:plan-move',
  'terminal:move',
  'terminal:record-recovery-decision',
  'terminal:resolve-file-clipboard',
  'pty:start',
] as const satisfies readonly IpcInvokeChannel[]

export const OWNER_SCOPED_SEND_CHANNELS = SEND_CHANNELS

export const AUTHORITY_SCOPED_INVOKE_CHANNELS = [
  'project:watch-interests',
  'document-review:restore',
  'document-review:save',
  'document-review:revalidate',
  'document-review:delivery-destinations',
  'document-review:preview-delivery',
  'document-review:prepare-delivery',
  'fs:readdir',
  'fs:filename-search',
  'fs:resolve-entry',
  'fs:reveal-entry',
  'fs:read',
  'fs:read-asset',
  'fs:write',
  'fs:create-entry',
  'fs:copy-external',
  'fs:move-external',
  'fs:organize-entry',
  'fs:deletion-disclosure',
  'fs:delete-entry',
  'git:diff-inputs',
  'git:changes',
  'git:history',
  'git:ignored-entries',
  'git:commit-detail',
  'git:blame',
  'git:branches',
  'git:fetch',
  'git:pull',
  'git:switch-branch',
  'html-preview:create',
  'harness:profiles',
  'harness:probe-snapshot',
  'harness:probe-profiles',
  'harness:probe-templates',
  'harness:profile-materialize',
  'harness:profile-save',
  'harness:preview',
  'harness:authorize-path',
  'terminal:recovery',
  'terminal:record-recovery-decision',
  'terminal:update-layout',
  'terminal:forget',
  'terminal:rebind-profile',
  'pty:start',
  'web-pane:open',
] as const satisfies readonly IpcInvokeChannel[]
```

</details>


### Copilot

**Outcome:** the app is a view-first Electron workbench centered on a project/workspace shell with **terminal**, **file viewer**, **git**, **sessions**, **web panes**, **document review**, **workspace/project controls**, **settings**, and **workbench health/diagnostics**. The renderer root (`src/renderer/src/App.tsx`) wires those surfaces together: it switches between the **workspace** and **sessions** destinations, coordinates terminal/viewer/web-pane focus, and keeps git, review, and session state in sync. Evidence: `src/renderer/src/App.tsx`, `src/renderer/src/terminal/TerminalWorkspace.tsx`, `src/renderer/src/viewer/FileViewer.tsx`, `src/renderer/src/git/GitPanel.tsx`, `src/renderer/src/sessions/SessionsOverview.tsx`, `src/renderer/src/dashboards/WebPane.tsx`, `src/renderer/src/document-review/DocumentReviewInlineSurface.tsx`, `src/renderer/src/workspaces/ProjectsBar.tsx`, `src/renderer/src/settings/SettingsDialog.tsx`, `src/renderer/src/health/WorkbenchHealthControl.tsx`.

**User-facing features, one sentence each**
- **Terminal:** multi-session workspace terminals with split panes, recovery, profile selection, prompt-aware launch/fork/resume, file/web link handling, and attention tracking (`src/renderer/src/terminal/TerminalWorkspace.tsx`, `src/renderer/src/terminal/TerminalDeck.tsx`, `src/main/terminal/*`, `src/main/pty/*`).
- **Viewer:** a file viewer for source, diff, rendered markdown, large-file fallback, blame, search/go-to-line, split tabs, and document-review inline overlays (`src/renderer/src/viewer/FileViewer.tsx`, `src/renderer/src/viewer/*`).
- **Git:** a git rail with branch controls, changes/history views, commit details, fetch/pull/switch, and graph navigation (`src/renderer/src/git/GitPanel.tsx`, `src/main/git/*`).
- **Sessions:** a global sessions overview that projects live terminal/workspace sessions and can open the exact terminal/workspace from the list (`src/renderer/src/sessions/SessionsOverview.tsx`, `src/main/sessions/*`).
- **Workspaces / SSH remote:** project tabs and workspace switching, plus remote host connection/browse/prompt support backed by `ProjectHost` and `SshHost` (`src/renderer/src/workspaces/ProjectsBar.tsx`, `src/main/project-host/*`, `src/main/project-registry.ts`).
- **Document review:** inline review comments/threads and delivery workflows for saving/revalidating/previewing/sending review content (`src/renderer/src/document-review/DocumentReviewInlineSurface.tsx`, `src/renderer/src/document-review/DocumentReviewWorkspace.tsx`, `src/main/document-review/*`, `src/main/ipc/features/document-review.ts`).
- **Web pane:** an embedded webview surface with navigation controls, diagnostics, external/browser handoff, and terminal-origin binding (`src/renderer/src/dashboards/WebPane.tsx`, `src/renderer/src/dashboards/WebPaneStack.tsx`, `src/main/web-pane/*`, `src/main/ipc/features/web-pane.ts`).
- **Workbench health / diagnostics:** a health button/dialog showing renderer/workbench faults and local diagnostic evidence plus report preparation (`src/renderer/src/health/WorkbenchHealthControl.tsx`, `src/main/diagnostics/*`).
- **Settings:** app preferences, terminal/theme/appearance/git/keybinding sections, plus harness profile management and composer-submit consent (`src/renderer/src/settings/SettingsDialog.tsx`, `src/renderer/src/settings/*`).
- **File tree / project file ops:** tree navigation, creation/deletion/organization, copy/move, external move grants, reveal, and path-copy actions (`src/renderer/src/tree/*`, `src/main/project-file-operations/*`, `src/main/ipc/features/filesystem.ts`).

**Architecture:** main/preload/renderer are cleanly separated, with **workers** for CPU/utility work and **utility processes** for git. The main process is the composition root (`src/main/index.ts`) that builds the app runtime, window manager, project registry/coordinator, host catalog, PTY supervisor, worker clients, and feature coordinators; the preload bridge is the only code allowed to touch `ipcRenderer` and exposes the typed `window.hvir` API (`src/preload/index.ts`, `src/shared/ipc.ts`). IPC is contract-driven: `src/shared/ipc.ts` composes feature contracts into typed invoke/send/event maps, `src/main/ipc/authority-router.ts` registers them centrally, and `src/main/ipc/features/*.ts` implements each feature surface against narrow ports. The main process also runs workers (`src/workers/echo-worker.ts`, `src/workers/git-worker.ts`) and enforces owner-scoped/authority-scoped channels in `src/main/ipc/authority-channel-policy.ts`.

**Architectural rules / seam enforcement:** `eslint.config.mjs` is the primary mechanical enforcement layer. It bans host primitives (`fs`, `child_process`, `chokidar`, `node-pty`) everywhere except `src/main/project-host/local-host.ts`, bans `ipcRenderer` everywhere except `src/preload`, and restricts `.spawnPty()` to `src/main/pty/pty-supervisor.ts`. It also encodes dependency-direction rules for harness, PTY, viewer, diagnostics, project-host, and other domains. `scripts/check-seams.sh` is a grep-level backstop that rechecks those same invariants outside lint: `ipcRenderer` only in preload, host primitives only in `local-host.ts`, `spawnPty()` only in the PTY supervisor, `ssh2` only in the SSH host adapter, `ipcMain` only in the authority router, web-pane loopback only in the proxy, and bundled harness IDs only under `src/main/harness/` (`scripts/check-seams.sh`). `scripts/check-adrs.mjs` enforces ADR formatting and indexing under `docs/adr/` and cross-checks links against `docs/design.md`; in this checkout I found **no `docs/adr` directory at all**, so there are no ADR files present to enumerate (`scripts/check-adrs.mjs`, repo glob result).

**Technology choices:** the terminal uses **ghostty-web** as its pane/runtime (`src/renderer/src/terminal/ghostty-terminal-pane.ts`, `scripts/check-terminal-runtime.mts`), and `package.json` pins it to a specific tarball plus checks the installed WASM/runtime contract before dev/build. The renderer viewer uses **CodeMirror** (`@codemirror/*`) for source-edit/search capabilities and **shiki** for syntax grammars/highlighting (`src/renderer/src/viewer/shiki-language-catalog.ts`, `src/renderer/src/viewer/markdown-renderer.ts`); Markdown rendering also supports **mermaid** fences and task lists (`src/renderer/src/viewer/markdown-renderer.ts`). SSH support comes from **ssh2** inside `SshHost` and is explicitly treated as an implementation detail of the remote host adapter (`src/main/project-host/ssh-host.ts`, `scripts/check-seams.sh`). The native addon **`@hvir/rename-noreplace`** is an optional local package used for atomic no-replace rename on Linux/macOS (`packages/rename-noreplace/*`, `src/main/project-host/local-host.ts`, `electron-builder.yml`).

**Platform support / packaging:** `electron-builder.yml` targets **macOS pkg** and **Linux deb**. macOS uses hardened runtime and entitlements, installs to `/Applications`, and packages `THIRD_PARTY_NOTICES.md` plus the native `hvir-command` helper; Linux targets `.deb` with apparmor and after-install/remove scripts, and declares runtime deps like `libgtk-3-0`, `libnss3`, `libsecret-1-0`, `libxss1`, `libxtst6`, etc. The builder explicitly keeps `npmRebuild: false` because postinstall already rebuilds `node-pty` and the native addon, and packaging should not rebuild ssh2’s optional CPU-features module (`electron-builder.yml`). `package.json` requires **Node >=24** and `postinstall` runs `install-electron`, `node-gyp rebuild --directory node_modules/@hvir/rename-noreplace`, and `electron-rebuild -f -o node-pty`; `predev`/`prebuild` run the terminal runtime contract check (`package.json`, `scripts/check-terminal-runtime.mts`). The `electron.vite.config.ts` build splits `main`, `preload`, and `renderer`, externalizes dependencies so native modules load from `node_modules`, and builds `echo-worker`/`git-worker` as separate main-process entries (`electron.vite.config.ts`).

**Testing / verification:** unit tests use **Vitest** in Node-only mode (`vitest.config.ts`), with tests under `test/**/*.test.{ts,tsx}` and a setup file for console-output policy. Smoke coverage is broad and scenario-based: `npm run smoke` builds the smoke bundle and runs named scenarios such as `pty-native`, `viewer-position`, `viewer-content`, `git-workflow`, `workspace-remote`, `web-pane`, `renderer-authority`, `renderer-recovery`, `sessions-projection`, `document-review`, `terminal-presentation`, `terminal-lifecycle`, `native-host-worker`, `workbench-health`, `platform-contracts`, `terminal-theme`, `terminal-move`, `workbench-layout`, `terminal-split`, `app-settings`, and `harness-profiles` (`package.json`, `src/main/smoke/index.ts`). There are dedicated **SSH acceptance** paths for macOS and a real-host variant (`acceptance:ssh:macos`, `acceptance:ssh:real-host`), **mutation testing** via `stryker run`, and installed-package smoke scripts for Linux/macOS. `npm run verify` is the composite gate: `check-seams && check-adrs && architecture:check && lint && typecheck && npm test` (`package.json`).


---

<sub>1m 7s</sub>

### `bash`

**Check builder config, docs, hooks, CI**

$ cd /private/var/tmp/ws/c975e8e8/hvir && head -25 electron-builder.yml && echo ---- && ls docs 2>&1 && head -5 LICENSE && echo --- && head -20 .githooks/pre-push && echo ---CI--- && head -50 .github/workflows/ci.yml

<details>
<summary>28 lines</summary>

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
----
ls: docs: No such file or directory
<shellId: 3 completed with exit code 1>
```

</details>


---

<sub>1m 10s</sub>

### `bash`

**Check license, hooks, CI steps**

$ cd /private/var/tmp/ws/c975e8e8/hvir && head -3 LICENSE; echo ---HOOK---; cat .githooks/pre-push; echo ---CI---; grep -n "run:" .github/workflows/ci.yml | head -30

<details>
<summary>34 lines</summary>

```
MIT License

Copyright (c) 2026 hvir contributors
---HOOK---
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
---CI---
57:        run: node scripts/validate-release-pr.mts
85:        run: npm ci
90:        run: npm run verify
110:        run: npm ci
115:        run: xvfb-run -a npm run smoke
120:        run: xvfb-run -a npm run smoke:development-performance
123:        run: xvfb-run -a npm run smoke:isolation
154:        run: npm ci
159:        run: npm run smoke:macos:ci
220:        run: node scripts/ci-attempt-evidence.mts
226:        run: |
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>1m 10s</sub>

### Copilot

Now writing the README.

---

<sub>1m 41s</sub>

### `create`

**create a new file at /private/var/tmp/ws/c975e8e8/hvir/README.md.**

/private/var/tmp/ws/c975e8e8/hvir/README.md

```
Created file /private/var/tmp/ws/c975e8e8/hvir/README.md with 6859 characters
```


---

<sub>1m 44s</sub>

### `bash`

**Prettier check README**

$ cd /private/var/tmp/ws/c975e8e8/hvir && npx prettier --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 5 completed with exit code 0>
```


---

<sub>1m 45s</sub>

### Copilot

Created `README.md` (Prettier-clean).

Contents: project overview and platform/license, a feature table for each workbench surface (terminal, viewer, git, sessions, workspaces/SSH, document review, web pane, file tree, health, settings), prerequisites and install/dev/package commands, an architecture section covering the main/preload/renderer/worker split plus the lint- and script-enforced seam rules, key technologies, and the development/test layers (verify gate, vitest, smoke scenarios, SSH acceptance, mutation, CI and pre-push hook).

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
