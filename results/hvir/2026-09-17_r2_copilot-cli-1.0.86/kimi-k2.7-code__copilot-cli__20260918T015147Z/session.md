# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6b9d5edd-4a0f-4adc-a64b-92f0c973eb6e`  
> - **Started:** 9/17/2026, 9:52:01 PM  
> - **Duration:** 36s  
> - **Exported:** 9/17/2026, 9:52:38 PM  

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

**view the file at /private/var/tmp/ws/bfd176f1/hvir.**

/private/var/tmp/ws/bfd176f1/hvir

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

<sub>4s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/package.json.**

/private/var/tmp/ws/bfd176f1/hvir/package.json

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

<sub>4s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/LICENSE.**

/private/var/tmp/ws/bfd176f1/hvir/LICENSE

<details>
<summary>17 lines</summary>

```
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src.**

/private/var/tmp/ws/bfd176f1/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/.github.**

/private/var/tmp/ws/bfd176f1/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>6s</sub>

### `glob`

****/*.md**

"**/*.md"

```
/private/var/tmp/ws/bfd176f1/hvir/THIRD_PARTY_NOTICES.md
/private/var/tmp/ws/bfd176f1/hvir/test/fixtures/rendered.md
/private/var/tmp/ws/bfd176f1/hvir/test/fixtures/rendered-mmd.md
```


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/main.**

/private/var/tmp/ws/bfd176f1/hvir/src/main

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

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/renderer.**

/private/var/tmp/ws/bfd176f1/hvir/src/renderer

```
index.html
src
```


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/bfd176f1/hvir/THIRD_PARTY_NOTICES.md (lines 1-50)

<details>
<summary>37 lines</summary>

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

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## ghostty-web

Source: <https://github.com/coder/ghostty-web>

hvir currently consumes a provenance-recorded artifact from its bounded
[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
That artifact retains ghostty-web's upstream license and authorship.

The fork maintains hvir's demand-driven rendering, terminal presentation lifecycle, and
structured terminal-event compatibility in source. Those modifications are maintained by
hvir contributors, not by Coder or the Ghostty project, and hvir consumes the resulting
immutable artifact without modifying it during installation.
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/renderer/src.**

/private/var/tmp/ws/bfd176f1/hvir/src/renderer/src

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

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/bfd176f1/hvir/electron.vite.config.ts

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


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/electron-builder.yml.**

/private/var/tmp/ws/bfd176f1/hvir/electron-builder.yml

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

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/App.tsx (lines 1-80)

<details>
<summary>80 lines</summary>

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
```

</details>


---

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/main/index.ts.**

/private/var/tmp/ws/bfd176f1/hvir/src/main/index.ts (lines 1-80)

<details>
<summary>80 lines</summary>

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
```

</details>


---

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/.github/workflows.**

/private/var/tmp/ws/bfd176f1/hvir/.github/workflows

<details>
<summary>11 lines</summary>

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
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/terminal/TerminalWorkspaceCollection.tsx.**

/private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/terminal/TerminalWorkspaceCollection.tsx (lines 1-40)

<details>
<summary>36 lines</summary>

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
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-40)

<details>
<summary>40 lines</summary>

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
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/bfd176f1/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-40)

<details>
<summary>37 lines</summary>

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
```

</details>


---

<sub>18s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/build.**

/private/var/tmp/ws/bfd176f1/hvir/build

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

<sub>18s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/test.**

/private/var/tmp/ws/bfd176f1/hvir/test

<details>
<summary>381 lines</summary>

```
adr-lifecycle.test.ts
application-runtime.test.ts
architecture-command.test.ts
architecture-github.test.ts
architecture-history.test.ts
architecture-module-directions.test.ts
architecture-module-graph.test.ts
architecture-policy.test.ts
architecture-wiring.test.ts
attention-badge.test.ts
canonical-project-config.test.ts
capacity-live-presentation.test.ts
capacity-output-fixtures.test.ts
capacity-performance.test.ts
capacity-terminal-activity.test.ts
ci-attempt-evidence.test.ts
ci-workflow.test.ts
claude-context-telemetry.test.ts
claude-keybindings.test.ts
claude-session-artifact.test.ts
claude-session-recovery.test.ts
clipboard-file-list.test.ts
clipboard-ipc.test.ts
codemirror-find-target.test.tsx
codex-context-telemetry.test.ts
codex-session-discovery.test.ts
codex-session-recovery-lifecycle.test.ts
commit-detail-client.test.ts
commit-file-tree.test.ts
commit-message.test.ts
confirmation-dialog.test.tsx
contributor-status-entrypoint.test.ts
contributor-status.test.ts
csv-parser.test.ts
development-performance-measure-budget.test.ts
development-renderer-instrumentation.test.tsx
diagnostic-evidence.test.ts
diagnostic-intake.test.ts
diagnostic-journal.test.ts
diagnostic-report-dialog.test.tsx
diagnostic-report-evidence.test.ts
diagnostic-report-mask.test.ts
diagnostic-report.test.ts
diff-view-refresh.test.tsx
directory-entry-sort.test.ts
document-review-coordinator.test.ts
document-review-delivery-coordinator.test.ts
document-review-delivery-interaction.test.tsx
document-review-delivery-ipc.test.ts
document-review-delivery.test.ts
document-review-interaction.test.tsx
document-review-model.test.ts
document-review-projections.test.ts
document-review-retention.test.ts
document-review-smoke-driver.test.ts
document-review-smoke-isolation.test.ts
document-review-store.test.ts
document-review-workspace-controller.test.ts
dom-find-target.test.tsx
electron-external-move-picker.test.ts
electron-process-metrics.test.ts
electron-project-reveal.test.ts
electron-project-trash.test.ts
electron-renderer-document-lifecycle.test.ts
electron-renderer-recovery.test.ts
error-boundary-health.test.tsx
external-document-authority.test.ts
external-document-ipc.test.ts
external-document-ssh.test.ts
external-file-copy.test.ts
external-file-grants.test.ts
external-file-move-coordinator.test.ts
external-file-move-renderer.test.tsx
external-file-move.test.ts
file-create-actions.test.tsx
file-manager-reveal-policy.test.ts
file-name.test.ts
file-tree-reveal.test.tsx
file-viewer-controls.test.tsx
filename-enumerator.test.ts
filename-search-coordinator.test.ts
filename-search-policy.test.ts
filename-search.test.tsx
files-interactions.test.tsx
find-control.test.tsx
fixtures
ghostty-render-scheduler.test.ts
ghostty-terminal-events.test.ts
ghostty-terminal-fit.test.ts
ghostty-terminal-hyperlink.test.tsx
ghostty-terminal-keyboard.test.ts
ghostty-terminal-pane-lifecycle.test.tsx
ghostty-terminal-search-identity.test.tsx
ghostty-web-update-candidate-bundle.test.ts
ghostty-web-update-candidate.test.ts
ghostty-web-update-coordinator.test.ts
ghostty-web-update-delivery.test.ts
ghostty-web-update-github-client.test.ts
ghostty-web-update-policy.test.ts
ghostty-web-update-workflow.test.ts
git-capability.test.ts
git-engine.test.ts
git-graph-layout.test.ts
git-ignore-refresh.test.ts
git-mutation-authorization.test.ts
git-mutation-coordinator.test.ts
git-parsers.test.ts
git-rail-controller.test.tsx
git-rail-model.test.ts
git-sync-coordinator.test.ts
git-sync-status.test.ts
git-windowing.test.ts
git-worker-host-router.test.ts
git-workspace.test.tsx
github-contributor-status.test.ts
github-delivery-start-status.test.ts
github-project-client.test.ts
github-project-kind-automation.test.ts
github-project-planning.test.ts
github-project-pr-planning.test.ts
github-token-migration.test.ts
github-workflow-contexts.test.ts
github-workflow-contexts.ts
harness-argument-editor.test.ts
harness-launch-menu-view.test.tsx
harness-launch-menu.test.ts
harness-launch.test.ts
harness-probe.test.ts
harness-profile-draft.test.ts
harness-profile-editor-policy.test.ts
harness-profile-editor.test.tsx
harness-profile-store.test.ts
harness-profiles-settings.test.tsx
harness-provider-ownership.test.ts
harness-provider.test.ts
harness-shell-environment.test.ts
harness-telemetry-adapters.test.ts
harness-telemetry-envelope.test.ts
harness-telemetry-hub.test.ts
harness-usage-artifact.test.ts
harness-usage-demand-controller.test.ts
harness-usage-provider-ssh.test.ts
harness-usage-read-scheduler.test.ts
harness-usage.test.ts
highlight-protocol.test.ts
highlight-request.test.ts
host-path.test.ts
html-preview-protocol.test.ts
html-sandbox.test.ts
initial-host-connection.test.ts
installed-harness-dialog-probe.test.tsx
installed-startup-probe.test.ts
ipc-authority-router.test.ts
ipc-contract-ownership.test.ts
ipc-contract.test.ts
issue-context.test.ts
issue-lifecycle-guidance.test.ts
issue-start-git.test.ts
issue-start.test.ts
keybindings.test.ts
lifecycle-fixtures.test.ts
linux-native-package.test.ts
local-host.test.ts
macos-file-pasteboard.test.ts
macos-native-package.test.ts
macos-ssh-acceptance.test.ts
markdown-highlighting.test.ts
markdown-repository-images.test.tsx
merge-pr-skill.test.ts
modal-keyboard.test.ts
native-command.test.ts
native-icon-assets.test.ts
native-installer.test.ts
native-release-assembly.test.ts
new-worktree-move-badge.test.tsx
packaged-runtime-inspection.test.ts
pane-resizer.test.tsx
path-copy.test.tsx
prepare-release-linux-package.test.ts
private-session-assignment.test.ts
project-coordinator.test.ts
project-entry-deletion.test.ts
project-entry-drag.test.tsx
project-entry-organization.test.ts
project-file-deletion-coordinator.test.ts
project-file-operation-coordinator.test.ts
project-folder-picker-coordinator.test.ts
project-host-catalog.test.ts
project-host-ownership.test.ts
project-kind-cli.test.ts
project-kind-policy.test.ts
project-kind-reconciler.test.ts
project-kind-workflow-security.test.ts
project-planning-cli.test.ts
project-planning-record.test.ts
project-pr-cli.test.ts
project-pr-planning.test.ts
project-pr-relationships.test.ts
project-pr-workflow-security.test.ts
project-registry-migration.test.ts
project-registry.test.ts
project-session-delivery.test.tsx
project-session-model.test.ts
project-token-fields.test.ts
project-watch-interests.test.tsx
project-watch.test.ts
projects-bar.test.tsx
pty-ownership.test.ts
pty-session-identity-lifecycle.test.ts
pty-session-resources.test.ts
pty-start-admission.test.ts
pty-supervisor-identity-divergence.test.ts
pty-supervisor-late-completion.test.ts
pty-supervisor-observation.test.ts
pty-supervisor-renderer-rollover.test.ts
pty-supervisor-usage-observation.test.ts
pty-supervisor-workspace-close.test.ts
pty-supervisor.test.ts
real-host-ssh-contract.test.ts
real-host-ssh-workflow.test.ts
release-changelog.test.ts
release-ci-evidence.test.ts
release-pr-integrity.test.ts
release-workflow-security.test.ts
remote-image-paste.test.ts
rendered-image-refresh.test.tsx
rendered-link.test.ts
rendered-markdown-image-refresh.test.tsx
renderer-authority-smoke.test.ts
renderer-diagnostics-adapter.test.ts
renderer-event-delivery.test.ts
renderer-event-publisher.test.ts
renderer-hardening.test.ts
renderer-presentation-resources.test.ts
renderer-recovery-monitor.test.ts
renderer-resource-scopes.test.ts
renderer-ssh-prompter.test.ts
required-smoke-artifact-workflow.test.ts
retained-viewer-workspace-cache.test.ts
scrollbar-presentation.test.ts
session-dialog.test.tsx
session-token-capture.test.ts
session-token-receipts.test.ts
sessions-ipc.test.ts
sessions-observation-port.test.ts
sessions-overview-model.test.ts
sessions-overview.test.tsx
sessions-projection-coordinator.test.ts
sessions-terminal-detail-controller.test.ts
sessions-terminal-ssh.test.tsx
sessions-title-privacy.test.tsx
sessions-usage-observation-port.test.ts
settings-dialog-focus.test.tsx
settings-draft.test.ts
settings-navigation.test.ts
settings-persistence.test.tsx
shiki-grammar-registry.test.ts
smoke-cleanup.test.ts
smoke-failure-artifact.test.ts
smoke-image-paste-fallback.test.ts
smoke-interruption.test.ts
smoke-ownership.test.ts
smoke-pty-lifecycle.test.ts
smoke-recovery-delivery.test.ts
smoke-repository-fixture.test.ts
smoke-scenario-runner.test.ts
smoke-selection.test.ts
smoke-stress-workflow.test.ts
smoke-viewer-fixtures.test.ts
source-blame.test.tsx
source-coordinate.test.ts
source-view.test.tsx
ssh-config.test.ts
ssh-file-access.test.ts
ssh-host-authentication.test.ts
ssh-host-test-fixture.ts
ssh-host-trust.test.ts
ssh-host.test.ts
ssh-identity-source.test.ts
ssh-transport-pool.test.ts
staging-cleanup.test.ts
structured-data.test.ts
style-ownership.test.ts
terminal-attention-controller.test.tsx
terminal-attention.test.ts
terminal-clipboard-file-paste.test.ts
terminal-clipboard-osc.test.ts
terminal-clipboard-write.test.tsx
terminal-context-menu.test.tsx
terminal-context-meter.test.tsx
terminal-effect-generation.test.ts
terminal-event-router.test.ts
terminal-file-link.test.ts
terminal-fit.test.ts
terminal-fork-launch.test.ts
terminal-fork-policy.test.ts
terminal-fork-runtime.test.tsx
terminal-ipc-launch-probe.test.ts
terminal-ipc-resume.test.ts
terminal-layout-controls.test.tsx
terminal-move-controls.test.tsx
terminal-output-parity.test.tsx
terminal-palette.test.ts
terminal-pane-event-coordinator-clipboard.test.ts
terminal-path-activation.test.ts
terminal-probe-policy.test.ts
terminal-profile-recovery.test.ts
terminal-profiles.test.tsx
terminal-rail-compact.test.tsx
terminal-recovery-controller.test.tsx
terminal-recovery-decision-ipc.test.ts
terminal-recovery-dialog.test.tsx
terminal-recovery-planner.test.ts
terminal-resume-unavailable.test.tsx
terminal-runtime.test.ts
terminal-runtime.test.tsx
terminal-search-controller.test.ts
terminal-search.test.tsx
terminal-semantic-navigation.test.tsx
terminal-semantic-regions.test.ts
terminal-session-commands.test.tsx
terminal-session-registry.test.ts
terminal-session-risk-compatibility.test.ts
terminal-sessions-surface-owner.test.tsx
terminal-surface-attachment.test.ts
terminal-theme-catalog.test.ts
terminal-theme-gallery.test.tsx
terminal-theme-generator.test.ts
terminal-view-fork.test.tsx
terminal-wheel.test.ts
terminal-workspace-collection.test.tsx
terminal-workspace-materialization.test.tsx
terminal-workspace-model.test.ts
terminal-workspace-move-coordinator.test.ts
terminal-workspace-runtime-owner.test.tsx
test-console-output-policy.test.ts
test-console-output-policy.ts
token-migration-plan.test.ts
tree-git-status.test.ts
typography-settings.test.ts
untracked-line-counts.test.ts
use-document-review-workspace.test.tsx
use-file-organization-actions.test.tsx
use-terminal-attention.test.tsx
use-terminal-workspace-runtime.test.tsx
use-viewer-workspace.test.tsx
verified-project-copy.test.ts
verified-project-entry-metadata.test.ts
viewer-command-targets.test.ts
viewer-find.test.ts
viewer-ownership.test.ts
viewer-position-operation.test.ts
viewer-position.test.ts
viewer-tab-close-confirmation.test.tsx
viewer-types.test.ts
viewer-workload-policy.test.ts
viewer-workspace-model.test.ts
viewport-context-menu.test.ts
web-pane-diagnostics.test.ts
web-pane-route-registry.test.ts
web-pane-route.test.ts
web-pane-smoke-boundary.test.ts
web-pane-surface.test.tsx
web-pane-workspace.test.ts
window-health-tracker.test.ts
window-policy.test.ts
workbench-command-listener.test.tsx
workbench-commands.test.ts
workbench-health-control.test.tsx
workbench-health.test.ts
workbench-layout.test.ts
workbench-overlays.test.ts
workbench-runtime.test.ts
worker-host-broker.test.ts
worker-host.typecheck.ts
workspace-activity.test.ts
workspace-attention.test.ts
workspace-coordinator.test.ts
workspace-filter-polling.test.ts
workspace-removal-coordinator.test.ts
workspace-removal-flow.test.ts
```

</details>


---

<sub>33s</sub>

### `create`

**create a new file at /private/var/tmp/ws/bfd176f1/hvir/README.md.**

/private/var/tmp/ws/bfd176f1/hvir/README.md

```
Created file /private/var/tmp/ws/bfd176f1/hvir/README.md with 4216 characters
```


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/bfd176f1/hvir/README.md.**

/private/var/tmp/ws/bfd176f1/hvir/README.md

<details>
<summary>114 lines</summary>

````
# hvir

An Electron-based developer workbench that brings terminals, file browsing, Git, and remote workspaces into a single desktop application.

## Features

- **Terminal workspaces** — Multi-pane terminal sessions powered by [`node-pty`](https://github.com/microsoft/node-pty) and a bundled [ghostty-web](https://github.com/coder/ghostty-web) runtime, with theme support, splits, and session recovery.
- **Project file tree & viewer** — Browse project files, open source files with syntax highlighting (Shiki), view rendered Markdown with Mermaid diagrams, and compare diffs.
- **Git integration** — Stage and review changes, browse history, visualize branch graphs, switch branches, fetch, and pull.
- **Remote workspaces** — Connect to remote hosts over SSH and work with files and terminals on the remote machine.
- **Web panes** — Embed web dashboards alongside your terminal and editor panes.
- **Document review** — Review and comment on documents within the workbench.
- **Workbench layout** — Split, resize, and organize terminal and viewer panes to fit your workflow.
- **Themes & settings** — Customizable terminal themes and application settings.

## Tech stack

- [Electron](https://www.electronjs.org/) with [electron-vite](https://electron-vite.org/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for the renderer build
- [node-pty](https://github.com/microsoft/node-pty) for pseudo-terminal support
- [ghostty-web](https://github.com/coder/ghostty-web) for terminal rendering
- [CodeMirror](https://codemirror.net/) for merge/diff and search
- [Shiki](https://shiki.style/) for syntax highlighting
- [Mermaid](https://mermaid.js.org/) for diagram rendering
- [ssh2](https://github.com/mscdex/ssh2) for SSH transport
- [Vitest](https://vitest.dev/) for testing

## Prerequisites

- [Node.js](https://nodejs.org/) >= 24
- npm (ships with Node.js)
- Python and a C++ toolchain for building native modules (node-pty, optional `@hvir/rename-noreplace`)
  - macOS: Xcode Command Line Tools
  - Linux: `build-essential` or equivalent

## Installation

```bash
npm install
```

`postinstall` rebuilds native modules against Electron's ABI.

## Development

Start the application in development mode:

```bash
npm run dev
```

Run the type checker:

```bash
npm run typecheck
```

Run the linter:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

## Testing

Run the unit and integration test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run mutation tests:

```bash
npm run test:mutation
```

Run smoke tests (builds a smoke-enabled binary first):

```bash
npm run smoke
```

## Building

Build the application for production:

```bash
npm run build
```

Build and package for the current platform:

```bash
npm run build:dir
```

### Platform packages

macOS (Apple Silicon, unsigned `.pkg`):

```bash
npm run pack:mac:arm64
```

Linux (x64 `.deb`):

```bash
npm run pack:linux:x64
```

Linux (arm64 `.deb`):

```bash
npm run pack:linux:arm64
```

## Project structure

```
├── build/                  # Build resources, icons, entitlements, native helpers
├── packages/               # Private workspace packages (e.g. rename-noreplace binding)
├── scripts/                # Build, packaging, smoke, and project-management scripts
├── src/
│   ├── main/               # Electron main process
│   ├── preload/            # Electron preload scripts
│   ├── renderer/           # React renderer application
│   ├── shared/             # Shared types and utilities
│   └── workers/            # Utility-process workers
├── test/                   # Vitest test suite
├── electron-builder.yml    # Production packaging configuration
├── electron.vite.config.ts # electron-vite build configuration
└── vitest.config.ts        # Test configuration
```

## Verification

Run the full verification pipeline:

```bash
npm run verify
```

This runs seam checks, ADR checks, architecture checks, linting, type checking, and tests.

## License

hvir is licensed under the [MIT License](LICENSE).

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party attribution.
````

</details>


---

<sub>36s</sub>

### Copilot

Created `README.md` with an overview of hvir, its features, tech stack, setup instructions, development/test/build commands, project structure, and license info.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
