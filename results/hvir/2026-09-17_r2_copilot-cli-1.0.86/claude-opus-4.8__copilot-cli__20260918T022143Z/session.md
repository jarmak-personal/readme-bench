# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `49973ab2-b578-40c7-8435-a5625efcf5bb`  
> - **Started:** 9/17/2026, 10:21:57 PM  
> - **Duration:** 49s  
> - **Exported:** 9/17/2026, 10:22:47 PM  

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

Let me explore the project structure first.

---

<sub>2s</sub>

### `bash`

**List files and recent git log**

$ cd /private/var/tmp/ws/5132d54a/hvir && ls -la && git --no-pager log --oneline -10 2>/dev/null

<details>
<summary>31 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 22:21 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:21 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:21 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:21 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:21 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 22:21 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 22:21 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 22:21 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:21 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 22:21 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 22:21 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 22:21 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 22:21 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 22:21 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 22:21 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 22:21 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 17 22:21 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:21 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 22:21 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 22:21 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 22:21 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 22:21 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 22:21 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 22:21 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 22:21 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 22:21 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 22:21 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 22:21 vitest.config.ts
f316795 Initial commit
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/5132d54a/hvir/package.json.**

/private/var/tmp/ws/5132d54a/hvir/package.json

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

<sub>6s</sub>

### `bash`

**Inspect src, packages, build, license**

$ cd /private/var/tmp/ws/5132d54a/hvir && echo "=== src ===" && ls src && echo "=== packages ===" && ls -R packages | head -30 && echo "=== build ===" && ls build && echo "=== LICENSE ===" && head -3 LICENSE

<details>
<summary>44 lines</summary>

```
=== src ===
main
preload
renderer
shared
workers
=== packages ===
rename-noreplace

packages/rename-noreplace:
binding.gyp
build
index.js
LICENSE
package.json
rename_noreplace.c

packages/rename-noreplace/build:
binding.Makefile
config.gypi
gyp-mac-tool
Makefile
Release
rename_noreplace.target.mk

packages/rename-noreplace/build/Release:
obj.target
rename_noreplace.node

packages/rename-noreplace/build/Release/obj.target:
rename_noreplace

packages/rename-noreplace/build/Release/obj.target/rename_noreplace:
rename_noreplace.o
=== build ===
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
=== LICENSE ===
MIT License

Copyright (c) 2026 hvir contributors
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### Copilot

Let me look deeper at the source structure and any architecture docs to understand what hvir does.

---

<sub>12s</sub>

### `bash`

**Explore src subdirs, github, docs**

$ cd /private/var/tmp/ws/5132d54a/hvir && echo "=== src tree (2 levels) ===" && ls src/*/ && echo "=== .github ===" && ls -R .github | head -40 && echo "=== docs/adr search ===" && find . -path ./node_modules -prune -o \( -iname "*.md" -o -ipath "*adr*" \) -print 2>/dev/null | grep -v node_modules | head -40

<details>
<summary>111 lines</summary>

```
=== src tree (2 levels) ===
src/main/:
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

src/preload/:
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts

src/renderer/:
index.html
src

src/shared/:
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

src/workers/:
echo-worker.ts
git-worker.ts
=== .github ===
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
=== docs/adr search ===
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./test/adr-lifecycle.test.ts
./THIRD_PARTY_NOTICES.md
./scripts/adr-lifecycle.mts
./scripts/check-adrs.mjs
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>17s</sub>

### `bash`

**Read renderer, main index, builder config**

$ cd /private/var/tmp/ws/5132d54a/hvir && ls src/renderer/src && echo "=== index.ts head ===" && head -60 src/main/index.ts && echo "=== electron-builder.yml ===" && cat electron-builder.yml

<details>
<summary>161 lines</summary>

```
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
=== index.ts head ===
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
=== electron-builder.yml ===
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>23s</sub>

### `bash`

**Read harness provider and App**

$ cd /private/var/tmp/ws/5132d54a/hvir && echo "=== harness-provider shared ===" && head -40 src/shared/harness-provider.ts && echo "=== App.tsx head ===" && head -50 src/renderer/src/App.tsx

<details>
<summary>84 lines</summary>

```
=== harness-provider shared ===
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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>28s</sub>

### Copilot

I have enough understanding. hvir is an Electron desktop developer workbench (terminals, git worktrees, SSH remote workspaces, file/document viewer, AI harness integration). Let me write the README.

---

<sub>46s</sub>

### `create`

**create a new file at /private/var/tmp/ws/5132d54a/hvir/README.md.**

/private/var/tmp/ws/5132d54a/hvir/README.md

```
Created file /private/var/tmp/ws/5132d54a/hvir/README.md with 3433 characters
```


---

<sub>47s</sub>

### Copilot

Created `README.md`. It covers hvir's purpose (an Electron desktop developer workbench), key features (embedded terminals via ghostty-web/node-pty, git worktree workflows, SSH remote workspaces, document viewer with Markdown/Mermaid/diffs, and AI harness integration), requirements (Node ≥24, macOS/Linux), and getting-started/build/dev instructions with a project-structure overview and license — all derived from `package.json`, the source tree, and packaging config.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
