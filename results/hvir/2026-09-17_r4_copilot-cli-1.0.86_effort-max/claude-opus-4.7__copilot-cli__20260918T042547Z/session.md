# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `656dd5a7-f864-441b-b259-d0f6e863c90c`  
> - **Started:** 9/18/2026, 12:26:02 AM  
> - **Duration:** 1m 45s  
> - **Exported:** 9/18/2026, 12:27:47 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>2s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir.**

/private/var/tmp/ws/bbef6b32/hvir

<details>
<summary>26 lines</summary>

```
.git
.githooks
.github
.gitignore
.prettierignore
.prettierrc.json
LICENSE
THIRD_PARTY_NOTICES.md
build
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
node_modules
package-lock.json
package.json
packages
scripts
src
stryker.config.json
test
tsconfig.base.json
tsconfig.json
tsconfig.node.json
tsconfig.web.json
vitest.config.ts
```

</details>


---

<sub>3s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/package.json.**

/private/var/tmp/ws/bbef6b32/hvir/package.json

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

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src.**

/private/var/tmp/ws/bbef6b32/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/LICENSE.**

/private/var/tmp/ws/bbef6b32/hvir/LICENSE (lines 1-5)

```
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
```


---

<sub>9s</sub>

### `glob`

**/private/var/tmp/ws/bbef6b32/hvir/README***

"/private/var/tmp/ws/bbef6b32/hvir/README*"

```
No files matched the pattern.
```


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/main.**

/private/var/tmp/ws/bbef6b32/hvir/src/main

<details>
<summary>38 lines</summary>

```
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
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/renderer.**

/private/var/tmp/ws/bbef6b32/hvir/src/renderer

```
index.html
src
```


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/renderer/src.**

/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src

<details>
<summary>27 lines</summary>

```
App.tsx
ErrorBoundary.tsx
context-menu
dashboards
development
diagnostics
document-review
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
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/renderer/index.html.**

/private/var/tmp/ws/bbef6b32/hvir/src/renderer/index.html

<details>
<summary>25 lines</summary>

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-src hvir-preview:; connect-src 'self' data: ws://localhost:* http://localhost:*"
    />
    <title>hvir</title>
    <style>
      html,
      body,
      #root {
        margin: 0;
        height: 100%;
        background: #0b0d10;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>


---

<sub>18s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/App.tsx (lines 1-60)

<details>
<summary>60 lines</summary>

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
```

</details>


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/electron-builder.yml.**

/private/var/tmp/ws/bbef6b32/hvir/electron-builder.yml

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


---

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/packages.**

/private/var/tmp/ws/bbef6b32/hvir/packages

```
rename-noreplace
```


---

<sub>24s</sub>

### `glob`

**/private/var/tmp/ws/bbef6b32/hvir/src/main/*/README***

"/private/var/tmp/ws/bbef6b32/hvir/src/main/*/README*"

```
No files matched the pattern.
```


---

<sub>26s</sub>

### `glob`

**/private/var/tmp/ws/bbef6b32/hvir/**/README.md**

"/private/var/tmp/ws/bbef6b32/hvir/**/README.md"

```
No files matched the pattern.
```


---

<sub>28s</sub>

### `glob`

**/private/var/tmp/ws/bbef6b32/hvir/.github/****

"/private/var/tmp/ws/bbef6b32/hvir/.github/**"

```
No files matched the pattern.
```


---

<sub>29s</sub>

### `bash`

**List .github directory contents**

$ ls -la /private/var/tmp/ws/bbef6b32/hvir/.github/ 2>&1 | head -40

<details>
<summary>6 lines</summary>

```
total 8
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 18 00:25 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 18 00:25 ..
-rw-r--r--@  1 air-jarmak  wheel  1785 Sep 18 00:25 dependabot.yml
drwxr-xr-x@ 13 air-jarmak  wheel   416 Sep 18 00:25 workflows
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>31s</sub>

### `bash`

**List workflow files**

$ ls /private/var/tmp/ws/bbef6b32/hvir/.github/workflows/

<details>
<summary>12 lines</summary>

```
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>33s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/build.**

/private/var/tmp/ws/bbef6b32/hvir/build

<details>
<summary>10 lines</summary>

```
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
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts.**

/private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>38s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts.**

/private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts (lines 1-60)

<details>
<summary>60 lines</summary>

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
```

</details>


---

<sub>41s</sub>

### `grep`

**hvir**

"hvir" (src/main/index.ts)

```
/private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts:177:          title: 'Choose a folder for hvir',
/private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts:212:      createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
/private/var/tmp/ws/bbef6b32/hvir/src/main/index.ts:223:        'hvir-git',
```


---

<sub>43s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/shared.**

/private/var/tmp/ws/bbef6b32/hvir/src/shared

<details>
<summary>37 lines</summary>

```
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
```

</details>


---

<sub>47s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/App.tsx (lines 60-130)

<details>
<summary>71 lines</summary>

```
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
```

</details>


---

<sub>50s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/bbef6b32/hvir/THIRD_PARTY_NOTICES.md (lines 1-30)

<details>
<summary>21 lines</summary>

```
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
```

</details>


---

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/bbef6b32/hvir/.gitignore.**

/private/var/tmp/ws/bbef6b32/hvir/.gitignore

<details>
<summary>16 lines</summary>

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
```

</details>


---

<sub>54s</sub>

### `grep`

**ghostty**

"ghostty" (src)

<details>
<summary>17 matches</summary>

```
/private/var/tmp/ws/bbef6b32/hvir/src/main/smoke/capacity.ts
/private/var/tmp/ws/bbef6b32/hvir/src/shared/ipc/terminal.ts
/private/var/tmp/ws/bbef6b32/hvir/src/main/smoke/capacity-terminals.ts
/private/var/tmp/ws/bbef6b32/hvir/src/main/smoke/terminal-file-paste.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/styles/terminal-pane.css
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/settings/TerminalThemeGallery.tsx
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/terminal-file-link.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/terminal-pane.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/terminal-clipboard-osc.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/terminal-theme-catalog.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/ghostty-terminal-fit.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/ghostty-terminal-events.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/ghostty-terminal-keyboard.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/generated-terminal-theme-catalog.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/terminal-palette.ts
/private/var/tmp/ws/bbef6b32/hvir/src/renderer/src/terminal/terminal-pane-factory.ts
```

</details>


---

<sub>58s</sub>

### Copilot

I have enough context. This is `hvir` — an Electron-based developer workbench with terminals (Ghostty-web + node-pty), a file viewer (CodeMirror), Git integration, SSH support, and document review. Let me draft a README that matches the project.

---

<sub>1m 32s</sub>

### `create`

**create a new file at /private/var/tmp/ws/bbef6b32/hvir/README.md.**

/private/var/tmp/ws/bbef6b32/hvir/README.md

```
Created file /private/var/tmp/ws/bbef6b32/hvir/README.md with 5718 characters
```


---

<sub>1m 38s</sub>

### `bash`

**Verify README.md formats cleanly with Prettier**

$ cd /private/var/tmp/ws/bbef6b32/hvir && npx --no-install prettier --check README.md 2>&1 | tail -20

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 2 completed with exit code 0>
```


---

<sub>1m 39s</sub>

### Copilot

Created `README.md` for `hvir` and verified it passes the repo's Prettier check.

The README describes hvir as a desktop developer workbench (Electron + React 19) that combines:
- Terminals (node-pty + ghostty-web)
- CodeMirror 6 file viewer with Shiki, Markdown/Mermaid preview
- Git integration (worker-backed, incl. graph view)
- SSH remote workspaces, document review, sessions

It documents Node 24+ requirement, install/dev/build/package flows (macOS `.pkg`, Linux `.deb`), the `verify` gate and individual checks (lint, typecheck, vitest, stryker, seams, ADRs, architecture), smoke/acceptance suites, the `src/` + `packages/` + `scripts/` layout, the `hooks:install` step, and the MIT license with a pointer to `THIRD_PARTY_NOTICES.md`.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
