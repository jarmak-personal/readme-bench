# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `db700bd2-6c1d-4de4-a707-900518577f3d`  
> - **Started:** 9/17/2026, 10:20:38 PM  
> - **Duration:** 1m 0s  
> - **Exported:** 9/17/2026, 10:21:39 PM  

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

I'll explore the repository first to understand what this project is.

---

<sub>2s</sub>

### `bash`

**List repo contents and recent commits**

$ cd /private/var/tmp/ws/2a7af456/hvir && ls -la && git log --oneline --no-pager | head -30

<details>
<summary>31 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 22:20 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:20 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:20 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:20 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:20 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 22:20 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 22:20 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 22:20 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:20 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 22:20 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 22:20 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 22:20 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 22:20 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 22:20 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 22:20 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 22:20 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 17 22:20 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:20 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 22:20 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 22:20 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 22:20 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 22:20 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 22:20 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 22:20 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 22:20 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 22:20 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 22:20 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 22:20 vitest.config.ts
fatal: unrecognized argument: --no-pager
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>3s</sub>

### Copilot

An Electron + Vite + TypeScript app. Let me dig into the details.

---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/2a7af456/hvir/package.json.**

/private/var/tmp/ws/2a7af456/hvir/package.json

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

<sub>5s</sub>

### `bash`

**Show git log and source tree**

$ cd /private/var/tmp/ws/2a7af456/hvir && git --no-pager log --oneline | head -20 && echo "---SRC---" && find src packages -maxdepth 3 -type d | head -60

<details>
<summary>53 lines</summary>

```
1a49481 Initial commit
---SRC---
src
src/renderer
src/renderer/src
src/renderer/src/tree
src/renderer/src/settings
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### Copilot

Let me understand what the app actually does — checking docs, ADRs, and the main entry points.

---

<sub>9s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && ls .github .github/* 2>/dev/null | head -40 && echo "---" && cat electron-builder.yml && echo "---DOCS---" && find . -path ./node_modules -prune -o -name "*.md" -print | head -40**

$ cd /private/var/tmp/ws/2a7af456/hvir && ls .github .github/* 2>/dev/null | head -40 && echo "---" && cat electron-builder.yml && echo "---DOCS---" && find . -path ./node_modules -prune -o -name "*.md" -print | head -40

<details>
<summary>93 lines</summary>

```
.github/dependabot.yml

.github:
dependabot.yml
workflows

.github/workflows:
ci.yml
codeql.yml
ghostty-web-update.yml
lock-tracker-conversations.yml
macos-package-release.yml
project-kind.yml
project-pr-planning.yml
real-host-ssh.yml
release-pr-merged.yml
release.yml
smoke-stress.yml
---
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
---DOCS---
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && ls src/main src/renderer/src src/shared && echo "---" && ls build**

$ cd /private/var/tmp/ws/2a7af456/hvir && ls src/main src/renderer/src src/shared && echo "---" && ls build

<details>
<summary>117 lines</summary>

```
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
---
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

<sub>13s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && head -60 src/main/index.ts && echo "=== harness providers ===" && ls src/main/harness src/main/harness/providers && echo "=== workbench ===" && ls src/renderer/src/workbench | head -40**

$ cd /private/var/tmp/ws/2a7af456/hvir && head -60 src/main/index.ts && echo "=== harness providers ===" && ls src/main/harness src/main/harness/providers && echo "=== workbench ===" && ls src/renderer/src/workbench | head -40

<details>
<summary>117 lines</summary>

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
=== harness providers ===
src/main/harness:
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
providers
remote-image-paste-storage.ts
remote-image-paste.ts

src/main/harness/providers:
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
=== workbench ===
active-terminal-focus.ts
ConfirmationDialog.tsx
middle-click-close.ts
modal-keyboard-model.ts
TerminalLayoutControls.tsx
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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>13s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && head -40 scripts/check-adrs.mjs && echo "=== ci ===" && head -60 .github/workflows/ci.yml**

$ cd /private/var/tmp/ws/2a7af456/hvir && head -40 scripts/check-adrs.mjs && echo "=== ci ===" && head -60 .github/workflows/ci.yml

<details>
<summary>90 lines</summary>

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
=== ci ===
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
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>18s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && cat .gitignore && echo "=== App.tsx head ===" && head -80 src/renderer/src/App.tsx**

$ cd /private/var/tmp/ws/2a7af456/hvir && cat .gitignore && echo "=== App.tsx head ===" && head -80 src/renderer/src/App.tsx

<details>
<summary>98 lines</summary>

```
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
=== App.tsx head ===
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
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>18s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && ls src/renderer/src/viewer src/renderer/src/workspaces src/renderer/src/sessions src/renderer/src/document-review src/main/project-host | head -80**

$ cd /private/var/tmp/ws/2a7af456/hvir && ls src/renderer/src/viewer src/renderer/src/workspaces src/renderer/src/sessions src/renderer/src/document-review src/main/project-host | head -80

<details>
<summary>78 lines</summary>

```
src/main/project-host:
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

src/renderer/src/document-review:
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
DocumentReviewControls.tsx
DocumentReviewDeliveryPanel.tsx
DocumentReviewInlineSurface.tsx
index.ts
use-document-review-delivery.ts
use-document-review-interaction.ts
use-document-review-workspace.ts

src/renderer/src/sessions:
sessions-overview-model.ts
sessions-projection-coordinator.ts
sessions-renderer-observation.ts
sessions-terminal-detail-controller.ts
sessions-terminal-overlay.ts
sessions-terminal-surface.ts
SessionsApplicationDestination.tsx
SessionsCollectionToolbar.tsx
SessionsOverview.tsx
SessionsOverviewCard.tsx
SessionsOverviewNotice.tsx
SessionsTerminalDetail.tsx
use-sessions-foreground.ts
use-sessions-terminal-detail.ts

src/renderer/src/viewer:
code-scroll-anchor.ts
codemirror-find-target.ts
csv-parser.ts
csv-protocol.ts
csv.worker.ts
diff-policy.ts
DiffView.tsx
dom-find-target.ts
external-document-context.ts
external-document-tabs.ts
FileViewer.tsx
FindControl.tsx
GoToLineControl.tsx
highlight-protocol.ts
highlight-request.ts
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>23s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && head -50 src/shared/keybindings.ts && echo "=== providers/github-copilot ===" && head -40 src/main/harness/providers/github-copilot.ts**

$ cd /private/var/tmp/ws/2a7af456/hvir && head -50 src/shared/keybindings.ts && echo "=== providers/github-copilot ===" && head -40 src/main/harness/providers/github-copilot.ts

<details>
<summary>85 lines</summary>

```
export const KEYBINDING_ACTIONS = [
  'cycleViewMode',
  'findFile',
  'findInFile',
  'findInTerminal',
  'goToLine',
  'focusTerminal',
  'focusViewer',
  'focusTree',
  'toggleTerminalFocus',
  'nextWorkspace',
  'previousWorkspace',
] as const

export type KeybindingAction = (typeof KEYBINDING_ACTIONS)[number]
export type KeybindingMap = Readonly<Record<KeybindingAction, string>>

export const DEFAULT_KEYBINDINGS: KeybindingMap = {
  cycleViewMode: 'Mod+Shift+M',
  findFile: 'Mod+P',
  findInFile: 'Mod+F',
  // Keep ordinary PTY Ctrl+F available on every platform. Terminal search uses
  // the existing workbench Shift variant instead of borrowing viewer search.
  findInTerminal: 'Mod+Shift+F',
  goToLine: 'Ctrl+G',
  focusTerminal: 'Mod+J',
  focusViewer: 'Mod+1',
  focusTree: 'Mod+0',
  toggleTerminalFocus: 'Mod+Shift+J',
  nextWorkspace: 'Mod+Alt+]',
  previousWorkspace: 'Mod+Alt+[',
}

export type KeybindingContext = 'workbench' | 'terminal' | 'web-pane'

export function keybindingAvailableInContext(
  action: KeybindingAction,
  context: KeybindingContext,
): boolean {
  if (action === 'findFile') return context !== 'terminal'
  if (action === 'findInFile') return context === 'workbench'
  if (action === 'findInTerminal') return context === 'terminal'
  if (action === 'goToLine') return context === 'workbench'
  if (action === 'cycleViewMode') return context !== 'terminal'
  return true
}

export interface KeyboardStroke {
  readonly key: string
  readonly code?: string
=== providers/github-copilot ===
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const githubCopilotProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('github-copilot-cli'),
    displayName: 'GitHub Copilot CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('github-copilot-cli-default'),
      displayName: 'GitHub Copilot CLI',
      description:
        'Copilot CLI. Launch-only across versions without verified --session-id.',
    },
    reservedArguments: ['--session-id', '--resume', '-r', '--continue', '--connect'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({
    file: 'copilot',
    args: [],
    shellEnvironment: true,
  }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>23s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && ls build/native && head -30 scripts/check-terminal-runtime.mts && echo "=== seams ===" && head -25 scripts/check-seams.sh**

$ cd /private/var/tmp/ws/2a7af456/hvir && ls build/native && head -30 scripts/check-terminal-runtime.mts && echo "=== seams ===" && head -25 scripts/check-seams.sh

<details>
<summary>49 lines</summary>

```
hvir-command
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
=== seams ===
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
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>26s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && head -25 build/native/hvir-command && echo "=== webpane ===" && ls src/renderer/src/dashboards && echo "=== settings ===" && ls src/renderer/src/settings**

$ cd /private/var/tmp/ws/2a7af456/hvir && head -25 build/native/hvir-command && echo "=== webpane ===" && ls src/renderer/src/dashboards && echo "=== settings ===" && ls src/renderer/src/settings

<details>
<summary>63 lines</summary>

```
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
=== webpane ===
ElectronWebPaneSurface.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
WebPane.tsx
WebPaneStack.tsx
=== settings ===
ComposerSubmitConsentDialog.tsx
harness-argument-editor.ts
harness-profile-draft.ts
harness-profile-editor-policy.ts
harness-profile-request-policy.ts
HarnessProfileAdvancedFields.tsx
HarnessProfileCommandFields.tsx
HarnessProfileDialogs.tsx
HarnessProfileEditor.tsx
HarnessProfileOverlays.tsx
HarnessProfilesSettings.tsx
keybindings.ts
sections
settings-draft.ts
settings-model.ts
settings-navigation.ts
settings.ts
SettingsActiveSection.tsx
SettingsDialog.tsx
SettingsSection.tsx
SettingsSectionNavigation.tsx
TerminalThemeGallery.tsx
typography-presentation.ts
typography-settings.ts
use-add-harness-dialog.ts
use-harness-binding-authorization.ts
use-harness-folder-picker.ts
use-harness-profile-editor.ts
use-harness-profile-load.ts
use-settings-controller.ts
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>27s</sub>

### Copilot

I have a clear picture: an Electron desktop workbench for running coding-agent CLIs. Writing the README now.

---

<sub>46s</sub>

### `create`

**create a new file at /private/var/tmp/ws/2a7af456/hvir/README.md.**

/private/var/tmp/ws/2a7af456/hvir/README.md

```
Created file /private/var/tmp/ws/2a7af456/hvir/README.md with 4074 characters
```


---

<sub>50s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && ls src/workers src/preload && npx prettier --check README.md**

$ cd /private/var/tmp/ws/2a7af456/hvir && ls src/workers src/preload && npx prettier --check README.md

<details>
<summary>10 lines</summary>

```
src/preload:
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts

src/workers:
echo-worker.ts
git-worker.ts
Checking formatting...
All matched files use Prettier code style!
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>55s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2a7af456/hvir/README.md.**

/private/var/tmp/ws/2a7af456/hvir/README.md

```
File /private/var/tmp/ws/2a7af456/hvir/README.md updated with changes.
```


---

<sub>55s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2a7af456/hvir/README.md.**

/private/var/tmp/ws/2a7af456/hvir/README.md

```
File /private/var/tmp/ws/2a7af456/hvir/README.md updated with changes.
```


---

<sub>56s</sub>

### `bash`

**cd /private/var/tmp/ws/2a7af456/hvir && npx prettier --check README.md && git status --short**

$ cd /private/var/tmp/ws/2a7af456/hvir && npx prettier --check README.md && git status --short

```
Checking formatting...
All matched files use Prettier code style!
?? README.md
<shellId: 12 completed with exit code 0>
```


---

<sub>57s</sub>

### Copilot

Created `README.md`, derived from the actual code rather than guesses.

Covers:
- **What it is** — Electron/React/TypeScript desktop workbench for coding agents (terminals + tree + viewer + Git).
- **Features** — harness providers (Claude Code, Codex, Cursor, Gemini, Copilot CLI, Pi, shell), terminal workbench, sessions overview, viewer/diff, document review, Git worktrees, SSH remote projects, web panes.
- **Requirements** — Node 24+, macOS/Linux, native-module rebuild on `postinstall`.
- **Getting started, packaging, development commands** (`verify`, `smoke`, seams/ADR checks), repo layout, MIT license.

Verified it passes the repo's Prettier check.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
