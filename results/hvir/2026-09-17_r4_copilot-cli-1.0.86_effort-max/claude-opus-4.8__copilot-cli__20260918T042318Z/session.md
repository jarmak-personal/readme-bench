# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6c31e66b-a240-442a-b4b7-15bd989279f7`  
> - **Started:** 9/18/2026, 12:23:33 AM  
> - **Duration:** 2m 9s  
> - **Exported:** 9/18/2026, 12:25:43 AM  

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

### Copilot

I'll explore the project structure first to understand what this project is about.

---

<sub>2s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir.**

/private/var/tmp/ws/79ccbe7d/hvir

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

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/package.json.**

/private/var/tmp/ws/79ccbe7d/hvir/package.json

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

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src.**

/private/var/tmp/ws/79ccbe7d/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/packages.**

/private/var/tmp/ws/79ccbe7d/hvir/packages

```
rename-noreplace
```


---

<sub>8s</sub>

### Copilot

This is an Electron app called "hvir". Let me explore deeper to understand its purpose and architecture.

---

<sub>12s</sub>

### `bash`

**List root files and check for existing README/docs**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && ls -la && echo "---GITIGNORE---" && cat .gitignore | head -40 && echo "---LICENSE HEAD---" && head -5 LICENSE

<details>
<summary>51 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 18 00:23 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 18 00:23 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 18 00:23 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 18 00:23 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 18 00:23 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 18 00:23 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 18 00:23 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 18 00:23 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 18 00:23 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 18 00:23 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 18 00:23 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 18 00:23 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 18 00:23 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 18 00:23 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 18 00:23 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 18 00:23 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 18 00:23 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 18 00:23 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 18 00:23 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 18 00:23 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 18 00:23 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 18 00:23 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 18 00:23 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 18 00:23 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 18 00:23 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 18 00:23 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 18 00:23 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 18 00:23 vitest.config.ts
---GITIGNORE---
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
---LICENSE HEAD---
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### `glob`

****/*.md**

"**/*.md"

```
/private/var/tmp/ws/79ccbe7d/hvir/THIRD_PARTY_NOTICES.md
/private/var/tmp/ws/79ccbe7d/hvir/test/fixtures/rendered.md
/private/var/tmp/ws/79ccbe7d/hvir/test/fixtures/rendered-mmd.md
```


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/main.**

/private/var/tmp/ws/79ccbe7d/hvir/src/main

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

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/renderer.**

/private/var/tmp/ws/79ccbe7d/hvir/src/renderer

```
index.html
src
```


---

<sub>16s</sub>

### Copilot

No README exists yet. Let me dig into the app's purpose and architecture by examining key source files and configs.

---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/main/index.ts.**

/private/var/tmp/ws/79ccbe7d/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/electron-builder.yml.**

/private/var/tmp/ws/79ccbe7d/hvir/electron-builder.yml

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

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/79ccbe7d/hvir/electron.vite.config.ts

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

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/renderer/src.**

/private/var/tmp/ws/79ccbe7d/hvir/src/renderer/src

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

<sub>22s</sub>

### Copilot

Let me read the main entry point, the app description in ADRs/scripts, and the renderer App to understand the product.

---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/main/index.ts.**

/private/var/tmp/ws/79ccbe7d/hvir/src/main/index.ts (lines 1-90)

<details>
<summary>90 lines</summary>

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
```

</details>


---

<sub>27s</sub>

### `bash`

**List scripts and inspect ADR checker and github dir**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && ls scripts && echo "---ADR script---" && head -40 scripts/check-adrs.mjs 2>/dev/null; echo "---.github---"; ls -R .github | head -40

<details>
<summary>105 lines</summary>

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
---ADR script---
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
---.github---
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>27s</sub>

### `grep`

**adr|ADR|docs/**

"adr|ADR|docs/" (scripts/check-adrs.mjs)

<details>
<summary>25 matches</summary>

```
[grep content: 23 matches across 1 file(s) under /private/var/tmp/ws/79ccbe7d/hvir/scripts]

check-adrs.mjs (23 match(es)):
  6: import { validateAdrLifecycles } from './adr-lifecycle.mts'
  9: const adrDirectory = join(root, 'docs', 'adr')
  11: const recordName = /^ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
  20: const directoryEntries = readdirSync(adrDirectory).filter((name) =>
  21:   statSync(join(adrDirectory, name)).isFile(),
  31:   errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
  38:   const path = join(adrDirectory, name)
  43:     errors.push(`ADR-${id} is duplicated by ${previous} and ${name}`)
  47:   if (!source.startsWith(`# ADR-${id}: `)) {
  48:     errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
  55:       errors.push(`docs/adr/${name}: expected exactly one ${section}`)
  59:       errors.push(`docs/adr/${name}: required decision sections are out of order`)
  65:     errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
  73:       `docs/adr/${name}: progress, evidence, and rollout sections do not belong in ADRs`,
  81:   errors.push('docs/design.md: missing bounded section 4 ADR index')
  86:       /^### \[ADR-(\d{3}) — [^\]]+\]\(adr\/(ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md)\)$/gm,
  92:       errors.push(`docs/design.md: ADR-${match[1]} links to ADR-${match[3]}`)
  98:       errors.push(`docs/design.md: ${name} must appear exactly once in the ADR index`)
  103:       errors.push(`docs/design.md: index points to non-record ${name}`)
  111:       'docs/design.md: ADR bodies or implementation addenda remain embedded in the index',
  153:       sourcePath === designPath || sourcePath.startsWith(`${adrDirectory}/`)
  155:       targetPath.startsWith(`${adrDirectory}/`) || targetPath === adrDirectory
  173:   console.log(`ADR structure check passed (${records.length} records)`)
```

</details>


---

<sub>36s</sub>

### Copilot

Let me confirm the product's purpose by reading the App shell, harness (agent) domain, and checking for a docs directory.

---

<sub>37s</sub>

### `bash`

**Check docs dir and harness structure**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && ls docs 2>/dev/null && echo "EXISTS" || echo "NO docs dir"; echo "---harness providers---"; ls src/main/harness src/renderer/src/harness 2>/dev/null

<details>
<summary>36 lines</summary>

```
NO docs dir
---harness providers---
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

src/renderer/src/harness:
ProviderContextMeter.tsx
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/79ccbe7d/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>44s</sub>

### `bash`

**Inspect bundled harness providers**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && echo "---providers---" && ls src/main/harness/providers && echo "---bundled providers head---" && sed -n '1,60p' src/main/harness/bundled-harness-providers.ts

<details>
<summary>64 lines</summary>

```
---providers---
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
---bundled providers head---
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>44s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/79ccbe7d/hvir/src/renderer/src/App.tsx (lines 1-70)

<details>
<summary>70 lines</summary>

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
```

</details>


---

<sub>44s</sub>

### `grep`

**displayName|label|'Claude'|'Codex'|productName|tagline**

"displayName|label|'Claude'|'Codex'|productName|tagline" (src/main/harness/providers)

<details>
<summary>15 matches</summary>

```
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
```

</details>


---

<sub>58s</sub>

### Copilot

I now have a clear picture. Let me confirm a few final details: the git remote, Node/Electron versions, and platform targets before writing.

---

<sub>1m 1s</sub>

### `bash`

**Check git remote, README, node version, terminal runtime script**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && echo "---remote---"; git --no-pager remote -v 2>/dev/null; echo "---README exists?---"; ls README* 2>/dev/null || echo "none"; echo "---node engine---"; node -p "require('./package.json').engines.node" 2>/dev/null; echo "---check-terminal-runtime head---"; sed -n '1,30p' scripts/check-terminal-runtime.mts

<details>
<summary>31 lines</summary>

```
---remote---
---README exists?---
none
---node engine---
>=24
---check-terminal-runtime head---
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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>1m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/79ccbe7d/hvir/src/main/harness/providers/claude-code.ts (lines 1-55)

<details>
<summary>52 lines</summary>

```
import {
  asHarnessProviderId,
  asHarnessProfileId,
  type HarnessContextPressurePolicy,
} from '../../../shared'
import type { HarnessProvider, HarnessLaunchSpec } from '../harness-provider-contract'
import { configureClaudeComposerSubmit } from '../claude-keybindings'
import {
  observeClaudeContext,
  observeClaudeUsage,
  snapshotClaudeUsage,
} from '../claude-context-telemetry'
import { claudeResumeAvailability } from '../claude-session-recovery'
import { versionProbe } from '../harness-provider-probes'
import {
  pathImagePasteContract,
  documentReviewInsertContract,
} from '../harness-composer-contracts'

const CLAUDE_CONTEXT_PRESSURE: HarnessContextPressurePolicy = {
  assumedWindowTokens: 1_000_000,
  warningPercent: 20,
  criticalPercent: 40,
}

const claudeCodeReviewInsert = documentReviewInsertContract(() => claudeCodeProvider)

export const claudeCodeProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('claude-code'),
    displayName: 'Claude Code',
    sessionKind: 'agent',
    contextPresentation: 'pressure',
    contextPressure: CLAUDE_CONTEXT_PRESSURE,
    modifiedKeyProtocol: 'modify-other-keys',
    metaEnterAliasesControl: true,
  },
  profile: {
    version: 3,
    defaultProfile: {
      id: asHarnessProfileId('claude-code-default'),
      displayName: 'Claude Code',
      description: 'Claude Code with exact hvir-managed session recovery.',
    },
    reservedArguments: ['--session-id', '--resume', '--continue', '--fork-session'],
    reservedEnvironmentKeys: ['CLAUDE_CONFIG_DIR'],
    artifactEnvironmentKeys: ['CLAUDE_CONFIG_DIR'],
    artifactExecutable: true,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: true,
  sessionIdentity: 'preassigned',
  telemetry: { observe: observeClaudeContext },
  usageTelemetry: { observe: observeClaudeUsage },
```

</details>


---

<sub>1m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/79ccbe7d/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/79ccbe7d/hvir/THIRD_PARTY_NOTICES.md (lines 1-30)

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

<sub>1m 23s</sub>

### Copilot

I have a comprehensive understanding. Let me verify the remaining source directories to describe the structure accurately.

---

<sub>1m 25s</sub>

### `bash`

**Inspect workers, preload, shared, and feature dirs**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && echo "---workers---"; ls src/workers; echo "---preload---"; ls src/preload; echo "---shared (top)---"; ls src/shared | head; echo "---renderer dashboards---"; ls src/renderer/src/dashboards 2>/dev/null; echo "---sessions main---"; ls src/main/sessions 2>/dev/null | head

<details>
<summary>37 lines</summary>

```
---workers---
echo-worker.ts
git-worker.ts
---preload---
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts
---shared (top)---
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
---renderer dashboards---
ElectronWebPaneSurface.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
WebPane.tsx
WebPaneStack.tsx
---sessions main---
sessions-observation-application.ts
sessions-observation-port.ts
sessions-open-resolution.ts
sessions-projection-identities.ts
sessions-projection-values.ts
sessions-telemetry-projection.ts
sessions-usage-observation-port.ts
sessions-usage-projection.ts
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>1m 27s</sub>

### Copilot

I have everything I need. Writing the README now.

---

<sub>1m 58s</sub>

### `create`

**create a new file at /private/var/tmp/ws/79ccbe7d/hvir/README.md.**

/private/var/tmp/ws/79ccbe7d/hvir/README.md

```
Created file /private/var/tmp/ws/79ccbe7d/hvir/README.md with 6173 characters
```


---

<sub>2m 1s</sub>

### Copilot

Let me verify the README conforms to the project's Prettier config.

---

<sub>2m 2s</sub>

### `bash`

**Check prettier config and validate README formatting**

$ cd /private/var/tmp/ws/79ccbe7d/hvir && echo "---prettierrc---"; cat .prettierrc.json; echo; echo "---check---"; npx prettier --check README.md 2>&1 | head

<details>
<summary>12 lines</summary>

```
---prettierrc---
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}

---check---
Checking formatting...
All matched files use Prettier code style!
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>2m 5s</sub>

### Copilot

Created `README.md`, and it passes the project's Prettier check.

The README documents **hvir** — an Electron desktop workbench for running CLI coding agents. It covers:

- **Overview & features** — managed agent sessions (recovery, attention badges, usage telemetry), terminal workspaces (ghostty-web + node-pty), file tree/viewer (Markdown, Shiki, Mermaid, diff), Git panel/graph, document review, web panes, SSH remote workspaces, themes
- **Supported agents** — Shell, Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, Cursor CLI, Pi, Custom
- **Architecture** — main/preload/renderer/workers/shared processes, native modules, ADR-driven governance
- **Getting started** — prerequisites (Node ≥24, toolchain), install, dev, build
- **Packaging** (macOS `.pkg`, Linux `.deb`), **testing/quality**, **project structure**, and **license**

All details were drawn from `package.json`, source layout, harness providers, and build configs — no invented URLs or repos.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
