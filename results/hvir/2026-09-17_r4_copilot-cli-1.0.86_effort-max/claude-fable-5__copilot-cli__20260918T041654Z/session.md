# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `3decf495-2a3d-47b4-a26d-88ff067135a6`  
> - **Started:** 9/18/2026, 12:17:10 AM  
> - **Duration:** 2m 4s  
> - **Exported:** 9/18/2026, 12:19:14 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>3s</sub>

### Copilot

Let me explore the project first to understand what it's about.

---

<sub>4s</sub>

### `bash`

**List project files and recent git history**

$ ls -la /private/var/tmp/ws/9f761520/hvir && git -C /private/var/tmp/ws/9f761520/hvir --no-pager log --oneline -5 2>/dev/null | head -20

<details>
<summary>31 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 18 00:17 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 18 00:16 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 18 00:17 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 18 00:16 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 18 00:16 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 18 00:16 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 18 00:16 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 18 00:16 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 18 00:16 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 18 00:16 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 18 00:16 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 18 00:16 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 18 00:16 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 18 00:16 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 18 00:17 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 18 00:16 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 18 00:16 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 18 00:16 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 18 00:16 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 18 00:16 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 18 00:16 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 18 00:16 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 18 00:16 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 18 00:16 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 18 00:16 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 18 00:16 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 18 00:16 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 18 00:16 vitest.config.ts
a250884 Initial commit
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f761520/hvir/package.json.**

/private/var/tmp/ws/9f761520/hvir/package.json

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

**List src and packages structure**

$ ls /private/var/tmp/ws/9f761520/hvir/src /private/var/tmp/ws/9f761520/hvir/src/* /private/var/tmp/ws/9f761520/hvir/packages 2>/dev/null | head -60

<details>
<summary>56 lines</summary>

```
/private/var/tmp/ws/9f761520/hvir/packages:
rename-noreplace

/private/var/tmp/ws/9f761520/hvir/src:
main
preload
renderer
shared
workers

/private/var/tmp/ws/9f761520/hvir/src/main:
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

/private/var/tmp/ws/9f761520/hvir/src/preload:
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts

/private/var/tmp/ws/9f761520/hvir/src/renderer:
index.html
src

/private/var/tmp/ws/9f761520/hvir/src/shared:
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>15s</sub>

### Copilot

An Electron app called "hvir". Let me dig into the docs and source to understand its purpose before writing the README.

---

<sub>17s</sub>

### `bash`

**List .github, renderer, shared, workers directories**

$ ls /private/var/tmp/ws/9f761520/hvir/.github /private/var/tmp/ws/9f761520/hvir/.github/* 2>/dev/null; ls /private/var/tmp/ws/9f761520/hvir/src/renderer/src /private/var/tmp/ws/9f761520/hvir/src/shared /private/var/tmp/ws/9f761520/hvir/src/workers 2>/dev/null | head -80

<details>
<summary>86 lines</summary>

```
/private/var/tmp/ws/9f761520/hvir/.github/dependabot.yml

/private/var/tmp/ws/9f761520/hvir/.github:
dependabot.yml
workflows

/private/var/tmp/ws/9f761520/hvir/.github/workflows:
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
/private/var/tmp/ws/9f761520/hvir/src/renderer/src:
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

/private/var/tmp/ws/9f761520/hvir/src/shared:
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

/private/var/tmp/ws/9f761520/hvir/src/workers:
echo-worker.ts
git-worker.ts
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>17s</sub>

### `bash`

**View electron-builder config and renderer index.html**

$ head -50 /private/var/tmp/ws/9f761520/hvir/electron-builder.yml; echo ---; head -30 /private/var/tmp/ws/9f761520/hvir/src/renderer/index.html

<details>
<summary>77 lines</summary>

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
---
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>27s</sub>

### Copilot

The structure suggests a developer workbench app. Let me understand the "harness" concept and check for docs/ADRs to capture the project's purpose accurately.

---

<sub>30s</sub>

### `bash` — Failed

**Check for docs dir, list scripts, view harness-profile**

$ glob_result=$(ls -d /private/var/tmp/ws/9f761520/hvir/docs 2>/dev/null); echo "docs: $glob_result"; ls /private/var/tmp/ws/9f761520/hvir/scripts | head -60; echo ---; head -40 /private/var/tmp/ws/9f761520/hvir/src/shared/harness-profile.ts

```
Permission denied and could not request permission from user
```


---

<sub>30s</sub>

### `bash`

**View App.tsx and check-adrs script**

$ head -60 /private/var/tmp/ws/9f761520/hvir/src/renderer/src/App.tsx; echo ===; cat /private/var/tmp/ws/9f761520/hvir/scripts/check-adrs.mjs 2>/dev/null | head -30

<details>
<summary>89 lines</summary>

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
===
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
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f761520/hvir/src/shared/harness-profile.ts.**

/private/var/tmp/ws/9f761520/hvir/src/shared/harness-profile.ts (lines 1-60)

<details>
<summary>49 lines</summary>

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
```

</details>


---

<sub>39s</sub>

### `bash`

**List scripts and sessions/harness renderer dirs**

$ ls /private/var/tmp/ws/9f761520/hvir/scripts | head -60; echo ===; ls /private/var/tmp/ws/9f761520/hvir/src/renderer/src/sessions /private/var/tmp/ws/9f761520/hvir/src/renderer/src/harness 2>/dev/null

<details>
<summary>71 lines</summary>

```
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
===
/private/var/tmp/ws/9f761520/hvir/src/renderer/src/harness:
ProviderContextMeter.tsx

/private/var/tmp/ws/9f761520/hvir/src/renderer/src/sessions:
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
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>44s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f761520/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/9f761520/hvir/src/shared/harness-provider.ts

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


---

<sub>48s</sub>

### Copilot

Clear now: "harness" = AI coding agent CLIs run in terminals. Let me find which providers are bundled and check the main-process harness catalog, then write the README.

---

<sub>51s</sub>

### `grep`

**displayName: '**

"displayName: '" (src/main/harness)

<details>
<summary>15 matches</summary>

```
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
```

</details>


---

<sub>51s</sub>

### `bash`

**List harness/sessions main dirs and view main index**

$ ls /private/var/tmp/ws/9f761520/hvir/src/main/harness /private/var/tmp/ws/9f761520/hvir/src/main/sessions 2>/dev/null; echo ===; head -25 /private/var/tmp/ws/9f761520/hvir/src/main/index.ts

<details>
<summary>67 lines</summary>

```
/private/var/tmp/ws/9f761520/hvir/src/main/harness:
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

/private/var/tmp/ws/9f761520/hvir/src/main/sessions:
sessions-observation-application.ts
sessions-observation-port.ts
sessions-open-resolution.ts
sessions-projection-identities.ts
sessions-projection-values.ts
sessions-telemetry-projection.ts
sessions-usage-observation-port.ts
sessions-usage-projection.ts
===
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
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>1m 17s</sub>

### Copilot

I have a good picture. Let me verify one product detail — whether workspaces are git worktrees — then write the README.

---

<sub>1m 20s</sub>

### `grep`

**worktree**

"worktree" (src/main)

<details>
<summary>84 matches</summary>

```
[grep content: 71 matches across 19 file(s) under /private/var/tmp/ws/9f761520/hvir/src/main]
workspace-removal-coordinator.ts:35:     if (!workspace.missing) throw new Error('Only removed worktrees can be dismissed')

git/git-branches.ts (8 match(es)):
  14: import type { GitWorktreeCapability } from './git-worktrees'
  27:     private readonly worktrees: GitWorktreeCapability,
  51:         this.worktrees.discover(workspaceRoot),
  66:       discovery.worktrees.flatMap((worktree) =>
  67:         worktree.branch ? [[worktree.branch, worktree.root] as const] : [],
  80:         ...(occupied.get(name) ? { worktree: occupied.get(name) } : {}),
  121:     if (target.worktree && !hostPathEquals(target.worktree, workspaceRoot)) {
  122:       throw new Error(`${branch} is checked out in ${target.worktree.path}`)

git/worker-host-broker.ts (6 match(es)):
  55:   const worktreePrune = sameArgs(call.args.slice(2), [
  56:     'worktree',
  68:   if (worktreePrune && !permissions.allowWorktreePrune) {
  69:     throw new Error('git worker requested an unauthorized worktree prune')
  134:         : worktreePrune || branchSwitch
  265:     case 'worktree':

git/git-worktrees.ts (10 match(es)):
  10:     const args = ['worktree', 'list', '--porcelain', '-z'] as const
  14:         const legacyArgs = ['worktree', 'list', '--porcelain'] as const
  19:         const worktrees = parseLegacyWorktreeList(legacy.stdout, projectRoot.hostId)
  20:         if (worktrees.length === 0) throw new Error('git reported no worktrees')
  21:         return { repository: true, worktrees }
  28:         worktrees: [{ root: projectRoot, detached: false, bare: false }],
  31:     const worktrees = parseWorktreeList(result.stdout, projectRoot.hostId)
  32:     if (worktrees.length === 0) throw new Error('git reported no worktrees')
  33:     return { repository: true, worktrees }
  38:     const args = ['worktree', 'prune', '--expire', 'now', '--verbose'] as const

git/mutation-coordinator.ts (4 match(es)):
  159:       throw new Error('Connect to the project host before pruning worktrees')
  164:     if (targets.length === 0) throw new Error('Git reports no prunable worktrees')
  170:       kind: 'worktree-prune',
  184:         discovery.worktrees.some((worktree) => hostPathEquals(worktree.root, target.root))
git/untracked-line-counts.ts:92:     // Status and the live worktree may race; an unavailable count is truthful.

git/mutation-authorization.ts (5 match(es)):
  11: export type GitMutationKind = 'worktree-prune' | 'branch-switch' | 'fetch' | 'pull'
  72: const PRUNE_ARGS = ['worktree', 'prune', '--expire', 'now', '--verbose'] as const
  222:   if (sameArgs(command, PRUNE_ARGS)) return { kind: 'worktree-prune', root }
  238:     case 'worktree-prune':
  287:     value === 'worktree-prune' ||

git/git-parsers.ts (9 match(es)):
  19: ): WorktreeDiscovery['worktrees'] {
  20:   const worktrees: WorktreeDiscovery['worktrees'][number][] = []
  34:     worktrees.push(current)
  45:     if (key === 'worktree') {
  47:       if (!value.startsWith('/')) throw new Error('git reported a non-absolute worktree')
  60:         value.trim().slice(0, 1_024) || 'Git reported stale worktree metadata'
  64:   return worktrees
  67: /** Compatibility for Git versions predating `worktree list -z`. */
  71: ): WorktreeDiscovery['worktrees'] {

git/git-engine.ts (7 match(es)):
  19: import { GitWorktreeCapability } from './git-worktrees'
  26:   private readonly worktreeCapability: GitWorktreeCapability
  35:     this.worktreeCapability = new GitWorktreeCapability(context)
  37:     this.branchCapability = new GitBranchCapability(context, this.worktreeCapability)
  43:   worktrees(projectRoot: HostPath): Promise<WorktreeDiscovery> {
  44:     return this.worktreeCapability.discover(projectRoot)
  48:     return this.worktreeCapability.prune(projectRoot)
ipc/authority-router.ts:276:   worktreeRoots(root: HostPath): readonly HostPath[] {
ipc/features/git.ts:41:       relatedWorktreeRoots: ipc.authority.worktreeRoots(root),
harness/harness-probe.ts:161:     // One profile may have entries for several worktrees; invalidate every

terminal/terminal-workspace-move-coordinator.ts (2 match(es)):
  260:       throw new Error('Move target must be a worktree in the source project')
  271:     if (target.missing) throw new Error('Target worktree is no longer present')

project-registry.ts (6 match(es)):
  301:     if (workspace.missing) throw new Error('This worktree is no longer present')
  377:     for (const discovered of discovery.worktrees) {
  382:         throw new Error('Git reported a worktree on another host')
  402:                 discovered.prunableReason ?? 'Git reported stale worktree metadata',
  533:     if (workspace.missing) throw new Error('This worktree is no longer present')
  607:     if (!workspace.missing) throw new Error('Only removed worktrees can be dismissed')
smoke/workspace-remote.ts:352:             'Files, Git branches, and worktrees are not changed'

smoke/terminal-move.ts (2 match(es)):
  253:         if (${expectNew} && !move.getAttribute('aria-label')?.includes('new worktree')) {
  254:           return fail('new-worktree move indicator missing');

smoke/sessions-projection.ts (2 match(es)):
  276:   return `cross-project/worktree + renderer rollover + stale Open + quiet release + ${terminalStatus}${captureStatus} + ${overviewStatus} + ${pickerStatus} + hidden ${hiddenTerminalStatus} + ${hiddenStatus}`
  1018:     title: 'Retained smoke session · Review hierarchy and integrated footer across multiple worktrees and narrow windows',

smoke/sessions-visual.ts (3 match(es)):
  84:           !groups.some(group => group.querySelectorAll('.sessions-worktree-heading').length > 1) ||
  85:           !groups.some(group => group.querySelectorAll('.sessions-worktree-heading').length === 1)) {
  86:         return reject(new Error('Sessions project/worktree hierarchy was lost'));
smoke/workspace-close.ts:304:               return reject(new Error('workspace middle-click activated the closing worktree'));
```

</details>


---

<sub>1m 20s</sub>

### `grep`

**default**

"default" (src/main/harness/providers/shell.ts)

```
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:14:    default: true,
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:19:    defaultProfile: {
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:20:      id: asHarnessProfileId('plain-shell-default'),
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:22:      description: 'The default interactive shell on this host.',
/private/var/tmp/ws/9f761520/hvir/src/main/harness/providers/shell.ts:36:    return { file: ctx.defaultShell, args: ['-l'] }
```


---

<sub>1m 36s</sub>

### Copilot

Confirmed: workspaces are git worktrees; Shell is the default harness. I have everything needed — writing the README now.

---

<sub>1m 53s</sub>

### `create`

**create a new file at /private/var/tmp/ws/9f761520/hvir/README.md.**

/private/var/tmp/ws/9f761520/hvir/README.md

```
Created file /private/var/tmp/ws/9f761520/hvir/README.md with 3895 characters
```


---

<sub>1m 57s</sub>

### Copilot

Verifying the README passes the repo's Prettier check:

---

<sub>1m 58s</sub>

### `bash`

**Run prettier check on README.md**

$ cd /private/var/tmp/ws/9f761520/hvir && cat .prettierignore && npx prettier --check README.md

<details>
<summary>10 lines</summary>

```
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
Checking formatting...
All matched files use Prettier code style!
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>2m 4s</sub>

### Copilot

Created `README.md`, grounded in the actual codebase:

- **What hvir is**: an Electron/React desktop workbench for running coding-agent CLIs ("harnesses" — Claude Code, Codex, Gemini CLI, Copilot CLI, Cursor CLI, Pi, Shell) and Ghostty-based terminals across git worktrees, with sessions dashboard, git integration, document review, viewer, and SSH remote workspaces.
- **Requirements**: Node ≥ 24 + native toolchain (postinstall rebuilds `node-pty` and the bundled addon).
- **Getting started, common scripts table** (dev/test/verify/smoke/packaging), **repo layout**, and **MIT license** references.

Prettier check passes (markdown is ignored by config anyway).

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
