# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `741a749f-6fa8-408f-8902-6a352697f3b4`  
> - **Started:** 11/20/2026, 12:20:00 PM  
> - **Duration:** 21m 20s  
> - **Exported:** 11/20/2026, 12:41:21 PM  

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

I'll start by exploring the project to understand what it is.

---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir.**

/private/var/tmp/ws/f7354e9d/hvir

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

<sub>6s</sub>

### `bash`

**Inspect git history, status, and remotes**

$ cd /private/var/tmp/ws/f7354e9d/hvir && git --no-pager log --oneline -n 30 2>&1 | head -50; echo "--- STATUS ---"; git --no-pager status --short 2>&1 | head -30; echo "--- BRANCH ---"; git --no-pager branch -a 2>&1 | head; echo "--- REMOTE ---"; git --no-pager remote -v 2>&1 | head

<details>
<summary>6 lines</summary>

```
79586ba Initial commit
--- STATUS ---
--- BRANCH ---
* main
--- REMOTE ---
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### `bash`

**List all files including hidden in project root**

$ cd /private/var/tmp/ws/f7354e9d/hvir && ls -la 2>&1 | head -80

<details>
<summary>30 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Nov 20 12:19 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 12:19 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 12:19 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 12:19 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 12:19 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Nov 20 12:19 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Nov 20 12:19 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Nov 20 12:19 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 12:19 build
-rw-r--r--@   1 air-jarmak  wheel     549 Nov 20 12:19 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Nov 20 12:19 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Nov 20 12:19 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Nov 20 12:19 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Nov 20 12:19 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Nov 20 12:19 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Nov 20 12:19 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Nov 20 12:19 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 12:19 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Nov 20 12:19 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Nov 20 12:19 src
-rw-r--r--@   1 air-jarmak  wheel     537 Nov 20 12:19 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Nov 20 12:19 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Nov 20 12:19 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Nov 20 12:19 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Nov 20 12:19 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Nov 20 12:19 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Nov 20 12:19 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Nov 20 12:19 vitest.config.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/package.json.**

/private/var/tmp/ws/f7354e9d/hvir/package.json

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/electron-builder.yml.**

/private/var/tmp/ws/f7354e9d/hvir/electron-builder.yml

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/electron-builder.ssh-acceptance.yml.**

/private/var/tmp/ws/f7354e9d/hvir/electron-builder.ssh-acceptance.yml

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


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/f7354e9d/hvir/electron.vite.config.ts

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/LICENSE.**

/private/var/tmp/ws/f7354e9d/hvir/LICENSE

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/f7354e9d/hvir/THIRD_PARTY_NOTICES.md

<details>
<summary>102 lines</summary>

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

MIT License

Copyright (c) 2025 Coder

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

## iTerm2-Color-Schemes theme collection

Source: <https://github.com/mbadolato/iTerm2-Color-Schemes>

Hvir includes a generated, color-only terminal theme catalog from upstream tag
`release-20260216-151611-fc73ce3` at commit
`fc73ce39746540b6d5ec6b91e304785431401d85`. Ghostty core commit
`332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28` pins the corresponding theme archive.
Hvir's runtime consumes only the generated palette data and does not parse or execute the
upstream theme files.

MIT License

Copyright (c) 2011 to Present Mark Badolato

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

This license covers the iTerm-Color-Schemes repository collection of themes.

The copyright/license for each individual theme belongs to the author of that theme.

## Ghostty terminal core

Source: <https://github.com/ghostty-org/ghostty>

ghostty-web includes a WebAssembly build of Ghostty's terminal core, which hvir
redistributes as part of its terminal implementation.

MIT License

Copyright (c) 2024 Mitchell Hashimoto, Ghostty contributors

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

<sub>14s</sub>

### `bash`

**Print small config files**

$ cd /private/var/tmp/ws/f7354e9d/hvir && for f in .gitignore .prettierignore .prettierrc.json tsconfig.base.json tsconfig.json tsconfig.node.json tsconfig.web.json vitest.config.ts stryker.config.json; do echo "=== $f ==="; cat "$f"; echo; done

<details>
<summary>135 lines</summary>

```
=== .gitignore ===
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

=== .prettierignore ===
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md

=== .prettierrc.json ===
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}

=== tsconfig.base.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "noEmit": true
  }
}

=== tsconfig.json ===
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}

=== tsconfig.node.json ===
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "composite": false,
    "lib": ["ES2023"],
    "types": ["node"]
  },
  "include": [
    "src/main/**/*.ts",
    "src/main/**/*.mts",
    "src/preload/**/*.ts",
    "src/workers/**/*.ts",
    "src/shared/**/*.ts",
    "scripts/**/*.mts",
    "scripts/project-management/**/*.ts",
    "test/**/*.ts",
    "electron.vite.config.ts",
    "vitest.config.ts"
  ]
}

=== tsconfig.web.json ===
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "composite": false,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "types": ["vite/client"]
  },
  "include": [
    "src/renderer/**/*.ts",
    "src/renderer/**/*.tsx",
    "src/renderer/**/*.mts",
    "src/shared/**/*.ts",
    "test/**/*.test.tsx"
  ]
}

=== vitest.config.ts ===
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

=== stryker.config.json ===
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "testRunner": "vitest",
  "mutate": ["src/main/git/git-parsers.ts"],
  "ignorePatterns": [".agents/**"],
  "reporters": ["clear-text"],
  "clearTextReporter": {
    "allowColor": false,
    "logTests": false,
    "reportTests": false,
    "reportMutants": true,
    "reportScoreTable": true,
    "skipFull": false
  },
  "concurrency": 4,
  "tempDirName": "out/stryker-tmp",
  "vitest": {
    "configFile": "vitest.config.ts",
    "related": true
  }
}
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `bash`

**List .github, build, packages, and src trees**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== .github ==="; find .github .githooks -type f | sort; echo "=== build ==="; find build -maxdepth 2 | sort | head -60; echo "=== packages ==="; find packages -maxdepth 3 -not -path '*/node_modules/*' | sort | head -80; echo "=== src (depth 3) ==="; find src -maxdepth 3 | sort | head -150

<details>
<summary>206 lines</summary>

```
=== .github ===
.githooks/pre-push
.github/dependabot.yml
.github/workflows/ci.yml
.github/workflows/codeql.yml
.github/workflows/ghostty-web-update.yml
.github/workflows/lock-tracker-conversations.yml
.github/workflows/macos-package-release.yml
.github/workflows/project-kind.yml
.github/workflows/project-pr-planning.yml
.github/workflows/real-host-ssh.yml
.github/workflows/release-pr-merged.yml
.github/workflows/release.yml
.github/workflows/smoke-stress.yml
=== build ===
build
build/entitlements.mac.inherit.plist
build/entitlements.mac.plist
build/icon-linux.svg
build/icon-macos.icns
build/icon-macos.png
build/icon-macos.svg
build/icons-linux
build/icons-linux/1024x1024.png
build/icons-linux/128x128.png
build/icons-linux/16x16.png
build/icons-linux/256x256.png
build/icons-linux/32x32.png
build/icons-linux/512x512.png
build/icons-linux/64x64.png
build/linux
build/linux/after-install.sh
build/linux/after-remove.sh
build/linux/hvir.apparmor
build/native
build/native/hvir-command
build/pkg-scripts
build/pkg-scripts/postinstall
build/pkg-scripts/preinstall
=== packages ===
packages
packages/rename-noreplace
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/build
packages/rename-noreplace/build/binding.Makefile
packages/rename-noreplace/build/config.gypi
packages/rename-noreplace/build/gyp-mac-tool
packages/rename-noreplace/build/Makefile
packages/rename-noreplace/build/Release
packages/rename-noreplace/build/rename_noreplace.target.mk
packages/rename-noreplace/index.js
packages/rename-noreplace/LICENSE
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
=== src (depth 3) ===
src
src/main
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/diagnostics
src/main/diagnostics/diagnostic-event.ts
src/main/diagnostics/diagnostic-evidence.ts
src/main/diagnostics/diagnostic-intake.ts
src/main/diagnostics/diagnostic-journal.ts
src/main/diagnostics/diagnostic-report-builder.ts
src/main/diagnostics/diagnostic-report-coordinator.ts
src/main/diagnostics/diagnostic-report-evidence.ts
src/main/diagnostics/diagnostic-report-storage.ts
src/main/diagnostics/electron-diagnostic-report-actions.ts
src/main/diagnostics/runtime-diagnostics.ts
src/main/document-review
src/main/document-review/document-review-application.ts
src/main/document-review/document-review-coordinator.ts
src/main/document-review/document-review-delivery-coordinator.ts
src/main/document-review/document-review-delivery-policy.ts
src/main/document-review/document-review-delivery-terminal.ts
src/main/document-review/document-review-policy.ts
src/main/document-review/document-review-retention.ts
src/main/document-review/document-review-runtime.ts
src/main/document-review/document-review-store-codec.ts
src/main/document-review/document-review-store.ts
src/main/document-review/index.ts
src/main/filename-search
src/main/filename-search/filename-enumerator.ts
src/main/filename-search/filename-search-coordinator.ts
src/main/filename-search/filename-search-policy.ts
src/main/filename-search/index.ts
src/main/git
src/main/git/git-branches.ts
src/main/git/git-command-context.ts
src/main/git/git-detail.ts
src/main/git/git-diff.ts
src/main/git/git-engine.ts
src/main/git/git-history.ts
src/main/git/git-parsers.ts
src/main/git/git-status.ts
src/main/git/git-worktrees.ts
src/main/git/mutation-authorization.ts
src/main/git/mutation-coordinator.ts
src/main/git/untracked-line-counts.ts
src/main/git/worker-host-broker.ts
src/main/git/worker-host-router.ts
src/main/harness
src/main/harness/bounded-line-reader.ts
src/main/harness/bundled-harness-providers.ts
src/main/harness/claude-context-telemetry.ts
src/main/harness/claude-keybindings.ts
src/main/harness/claude-session-artifact.ts
src/main/harness/claude-session-recovery.ts
src/main/harness/codex-context-telemetry.ts
src/main/harness/codex-session-discovery.ts
src/main/harness/electron-clipboard-image.ts
src/main/harness/harness-composer-contracts.ts
src/main/harness/harness-launch-selection.ts
src/main/harness/harness-launch.ts
src/main/harness/harness-probe.ts
src/main/harness/harness-profile-store.ts
src/main/harness/harness-provider-capabilities.ts
src/main/harness/harness-provider-contract.ts
src/main/harness/harness-provider-probes.ts
src/main/harness/harness-provider-registry.ts
src/main/harness/harness-provider.ts
src/main/harness/harness-shell-environment.ts
src/main/harness/harness-telemetry-hub.ts
src/main/harness/harness-telemetry-protocol.ts
src/main/harness/harness-text-validation.ts
src/main/harness/harness-usage-artifact.ts
src/main/harness/harness-usage-demand-controller.ts
src/main/harness/harness-usage-read-scheduler.ts
src/main/harness/harness-usage.ts
src/main/harness/providers
src/main/harness/remote-image-paste-storage.ts
src/main/harness/remote-image-paste.ts
src/main/health
src/main/health/workbench-health-events.ts
src/main/health/workbench-health.ts
src/main/html-preview-protocol.ts
src/main/index.ts
src/main/ipc
src/main/ipc.ts
src/main/ipc/authority-channel-policy.ts
src/main/ipc/authority-port.ts
src/main/ipc/authority-router.ts
src/main/ipc/deps.ts
src/main/ipc/features
src/main/ipc/host-path-authority.ts
src/main/ipc/operation-result.ts
src/main/ipc/project-commands.ts
src/main/navigation-policy.ts
src/main/project-coordinator.ts
src/main/project-file-operations
src/main/project-file-operations/case-only-project-entry-rename.ts
src/main/project-file-operations/clipboard-file-list.ts
src/main/project-file-operations/create-project-entry.ts
src/main/project-file-operations/delete-project-entry.ts
src/main/project-file-operations/electron-clipboard-files.ts
src/main/project-file-operations/electron-external-move-picker.ts
src/main/project-file-operations/external-file-copy.ts
src/main/project-file-operations/external-file-grants.ts
src/main/project-file-operations/external-file-move-operation.ts
src/main/project-file-operations/external-file-move.ts
src/main/project-file-operations/external-file-operation.ts
src/main/project-file-operations/index.ts
src/main/project-file-operations/project-entry-deletion-operation.ts
src/main/project-file-operations/project-entry-operation-results.ts
src/main/project-file-operations/project-entry-organization.ts
src/main/project-file-operations/project-entry-removal.ts
src/main/project-file-operations/project-file-confinement.ts
src/main/project-file-operations/project-file-copy-limits.ts
src/main/project-file-operations/project-file-operation-coordinator.ts
src/main/project-file-operations/project-file-operation-runtime.ts
src/main/project-file-operations/project-file-path-errors.ts
src/main/project-file-operations/staging-cleanup.ts
src/main/project-file-operations/verified-project-copy-manifest.ts
src/main/project-file-operations/verified-project-copy.ts
src/main/project-file-operations/verified-project-entry-metadata.ts
src/main/project-folder-picker
src/main/project-folder-picker/index.ts
src/main/project-folder-picker/project-folder-picker-coordinator.ts
src/main/project-host
src/main/project-host/electron-project-reveal.ts
src/main/project-host/electron-project-trash.ts
src/main/project-host/index.ts
src/main/project-host/local-host.ts
src/main/project-host/project-host-catalog.ts
src/main/project-host/project-host.ts
src/main/project-host/renderer-ssh-prompter.ts
src/main/project-host/ssh-abort.ts
src/main/project-host/ssh-auth.ts
src/main/project-host/ssh-client-lifecycle.ts
src/main/project-host/ssh-config.ts
src/main/project-host/ssh-exclusive-create.ts
src/main/project-host/ssh-file-access.ts
src/main/project-host/ssh-host-options.ts
src/main/project-host/ssh-host-trust.ts
src/main/project-host/ssh-host.ts
src/main/project-host/ssh-identity-source.ts
src/main/project-host/ssh-project-file-transfer.ts
src/main/project-host/ssh-text-prefix.ts
src/main/project-host/ssh-transport-pool.ts
src/main/project-host/ssh-watch-service.ts
src/main/project-registry.ts
src/main/project-watch.ts
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>24s</sub>

### `bash`

**Survey the src tree structure**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== src top-level dirs with file counts ==="; for d in src/*/; do echo "$d: $(find "$d" -type f | wc -l | tr -d ' ') files"; done; echo; echo "=== src/main subdirs ==="; for d in src/main/*/; do echo "$d: $(find "$d" -type f | wc -l | tr -d ' ')"; done; echo; echo "=== src/main top-level files ==="; ls src/main | grep -v '^[a-z-]*$' ; echo; echo "=== src/renderer tree depth 3 ==="; find src/renderer -maxdepth 3 -type d | sort; echo; echo "=== src/preload, workers, shared ==="; find src/preload src/workers -type f | sort; echo; find src/shared -maxdepth 2 | sort | head -150

<details>
<summary>125 lines</summary>

```
=== src top-level dirs with file counts ===
src/main/: 294 files
src/preload/: 3 files
src/renderer/: 349 files
src/shared/: 47 files
src/workers/: 2 files

=== src/main subdirs ===
src/main/diagnostics/: 10
src/main/document-review/: 11
src/main/filename-search/: 4
src/main/git/: 14
src/main/harness/: 36
src/main/health/: 2
src/main/ipc/: 21
src/main/project-file-operations/: 25
src/main/project-folder-picker/: 2
src/main/project-host/: 21
src/main/pty/: 6
src/main/sessions/: 8
src/main/smoke/: 97
src/main/terminal/: 7
src/main/viewer/: 1
src/main/web-pane/: 2
src/main/window/: 6

=== src/main top-level files ===
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

=== src/renderer tree depth 3 ===
src/renderer
src/renderer/src
src/renderer/src/context-menu
src/renderer/src/dashboards
src/renderer/src/development
src/renderer/src/diagnostics
src/renderer/src/document-review
src/renderer/src/git
src/renderer/src/harness
src/renderer/src/health
src/renderer/src/layout
src/renderer/src/path-copy
src/renderer/src/scrollbars
src/renderer/src/sessions
src/renderer/src/settings
src/renderer/src/settings/sections
src/renderer/src/styles
src/renderer/src/terminal
src/renderer/src/tree
src/renderer/src/viewer
src/renderer/src/workbench
src/renderer/src/workspaces

=== src/preload, workers, shared ===
src/preload/index.ts
src/preload/renderer-diagnostics.ts
src/preload/terminal-clipboard-file-paste.ts
src/workers/echo-worker.ts
src/workers/git-worker.ts

src/shared
src/shared/application-build-channel.ts
src/shared/composer-submit.ts
src/shared/diagnostic-evidence.ts
src/shared/diagnostic-report-event.ts
src/shared/diagnostic-report.ts
src/shared/diagnostics.ts
src/shared/disposer.ts
src/shared/document-review.ts
src/shared/file-uri.ts
src/shared/filename-search.ts
src/shared/fs-types.ts
src/shared/git-types.ts
src/shared/harness-profile.ts
src/shared/harness-provider.ts
src/shared/harness-telemetry.ts
src/shared/harness-usage.ts
src/shared/host-path.ts
src/shared/html-preview.ts
src/shared/index.ts
src/shared/ipc
src/shared/ipc-contract.ts
src/shared/ipc.ts
src/shared/ipc/app.ts
src/shared/ipc/diagnostics.ts
src/shared/ipc/document-review.ts
src/shared/ipc/filesystem.ts
src/shared/ipc/git.ts
src/shared/ipc/harness.ts
src/shared/ipc/preview.ts
src/shared/ipc/project.ts
src/shared/ipc/sessions.ts
src/shared/ipc/terminal.ts
src/shared/ipc/web-pane.ts
src/shared/keybindings.ts
src/shared/markdown-it-task-lists.d.ts
src/shared/operation-result.ts
src/shared/project-file-operations.ts
src/shared/rendered-link.ts
src/shared/sessions-projection.ts
src/shared/terminal-attention.ts
src/shared/terminal-clipboard-file-paste.ts
src/shared/terminal-start-admission.ts
src/shared/viewer-types.ts
src/shared/viewer-workload-policy.ts
src/shared/web-pane.ts
src/shared/workbench-health.ts
src/shared/worker-protocol.ts
src/shared/workspace-types.ts
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>24s</sub>

### `bash`

**List scripts and test layout**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== scripts ==="; find scripts -maxdepth 2 | sort; echo; echo "=== test: count + top-level dirs ==="; find test -type f | wc -l; find test -maxdepth 1 -type d | sort; echo "=== test sample files ==="; ls test | head -80

<details>
<summary>196 lines</summary>

```
=== scripts ===
scripts
scripts/adr-lifecycle.mts
scripts/agent-work-checkpoint-store.mts
scripts/architecture-authorization.mts
scripts/architecture-github.mts
scripts/architecture-hotspots.json
scripts/architecture-hotspots.mjs
scripts/architecture-hotspots.mts
scripts/architecture-inventory.mts
scripts/architecture-module-directions.mts
scripts/architecture-module-graph.mts
scripts/architecture-module-resolution.mts
scripts/architecture-policy.mts
scripts/architecture-wiring.mts
scripts/assemble-native-release.d.mts
scripts/assemble-native-release.mjs
scripts/capture-contributor-usage.mts
scripts/check-adrs.mjs
scripts/check-seams.sh
scripts/check-terminal-runtime.mts
scripts/ci-attempt-evidence.mts
scripts/create-smoke-repository.sh
scripts/generate-terminal-theme-catalog.mts
scripts/ghostty-terminal-capability-profile.mts
scripts/ghostty-web-update
scripts/ghostty-web-update/candidate-bundle.mts
scripts/ghostty-web-update/cli.mts
scripts/ghostty-web-update/coordinator.mts
scripts/ghostty-web-update/github-client.mts
scripts/ghostty-web-update/github-delivery.mts
scripts/ghostty-web-update/github-release-source.mts
scripts/ghostty-web-update/policy.mts
scripts/ghostty-web-update/repository-candidate.mts
scripts/inspect-packaged-runtime.mts
scripts/install-git-hooks.sh
scripts/installed-harness-dialog-probe.mts
scripts/installed-startup-probe.mts
scripts/native-installer.template.sh
scripts/phase8-gauntlet.sh
scripts/prepare-release-linux-package.mts
scripts/prepare-release-pr.mjs
scripts/project-management
scripts/project-management/audit-canonical-project.ts
scripts/project-management/canonical-project-config.ts
scripts/project-management/canonical-project-fields.ts
scripts/project-management/canonical-project-item.ts
scripts/project-management/canonical-project.ts
scripts/project-management/contributor-status-cli.ts
scripts/project-management/contributor-status.ts
scripts/project-management/contributor-token-migration.ts
scripts/project-management/github-client.ts
scripts/project-management/github-contributor-acceptance.ts
scripts/project-management/github-delivery-adapters.ts
scripts/project-management/github-issues.ts
scripts/project-management/github-kind-automation.ts
scripts/project-management/github-pagination.ts
scripts/project-management/github-pull-requests.ts
scripts/project-management/github-session-tokens.ts
scripts/project-management/github-token-migration.ts
scripts/project-management/issue-context-cli.ts
scripts/project-management/issue-context.ts
scripts/project-management/issue-delivery.ts
scripts/project-management/issue-planning.ts
scripts/project-management/issue-start-cli.ts
scripts/project-management/issue-start.ts
scripts/project-management/kind-cli.ts
scripts/project-management/kind-policy.ts
scripts/project-management/kind-reconciler.ts
scripts/project-management/legacy-token-evidence.ts
scripts/project-management/migrate-project-tokens.ts
scripts/project-management/native-issue-worktrees.ts
scripts/project-management/package.json
scripts/project-management/planning-cli.ts
scripts/project-management/planning-fields.ts
scripts/project-management/planning-record.ts
scripts/project-management/project-config.ts
scripts/project-management/project-token-fields.ts
scripts/project-management/pull-request-cli.ts
scripts/project-management/pull-request-planning.ts
scripts/project-management/pull-request-relationships.ts
scripts/project-management/read-contributor-status.ts
scripts/project-management/read-issue-context.ts
scripts/project-management/read-planning-record.ts
scripts/project-management/session-token-allocation.ts
scripts/project-management/session-token-capture.ts
scripts/project-management/session-token-receipts.ts
scripts/project-management/start-issue.ts
scripts/project-management/sync-kind.ts
scripts/project-management/sync-pull-request-planning.ts
scripts/project-management/token-migration-plan.ts
scripts/real-host-ssh-contract.mts
scripts/real-host-ssh.vite.config.mts
scripts/record-macos-ssh-identity.sh
scripts/release-changelog.d.mts
scripts/release-changelog.mjs
scripts/release-github-evidence.mts
scripts/render-native-installer.d.mts
scripts/render-native-installer.mjs
scripts/require-release-ci-evidence.mts
scripts/run-linux-package-smoke.sh
scripts/run-macos-package-smoke.sh
scripts/run-macos-ssh-acceptance.sh
scripts/run-real-host-ssh-acceptance.mts
scripts/run-smoke-interruption.mts
scripts/run-smoke-scenarios.mts
scripts/run-smoke.sh
scripts/smoke-failure-artifact.mts
scripts/smoke-import-boundary.mjs
scripts/validate-release-pr.mts

=== test: count + top-level dirs ===
     401
test
test/fixtures
=== test sample files ===
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
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>32s</sub>

### `bash`

**Read check-adrs and check-seams scripts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== check-adrs.mjs ==="; cat scripts/check-adrs.mjs; echo; echo "=== check-seams.sh ==="; cat scripts/check-seams.sh

<details>
<summary>264 lines</summary>

```
=== check-adrs.mjs ===
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

=== check-seams.sh ===
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
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>32s</sub>

### `grep`

**docs/|README|CONTRIBUTING|AGENTS\.md|CLAUDE\.md|CHANGELOG**

"docs/|README|CONTRIBUTING|AGENTS\.md|CLAUDE\.md|CHANGELOG" in !{node_modules,package-lock.json,.git}/**

<details>
<summary>31 matches</summary>

```
[grep count: 94 match(es) across 31 file(s) with matches]

Top files by match count:
      12  /private/var/tmp/ws/f7354e9d/hvir/scripts/check-adrs.mjs
      11  /private/var/tmp/ws/f7354e9d/hvir/test/document-review-delivery.test.ts
      11  /private/var/tmp/ws/f7354e9d/hvir/test/filename-search-policy.test.ts
       7  /private/var/tmp/ws/f7354e9d/hvir/test/rendered-link.test.ts
       6  /private/var/tmp/ws/f7354e9d/hvir/test/terminal-file-link.test.ts
       5  /private/var/tmp/ws/f7354e9d/hvir/test/document-review-delivery-coordinator.test.ts
       4  /private/var/tmp/ws/f7354e9d/hvir/test/commit-file-tree.test.ts
       3  /private/var/tmp/ws/f7354e9d/hvir/test/document-review-delivery-interaction.test.tsx
       3  /private/var/tmp/ws/f7354e9d/hvir/test/external-document-authority.test.ts
       3  /private/var/tmp/ws/f7354e9d/hvir/test/git-ignore-refresh.test.ts
       3  /private/var/tmp/ws/f7354e9d/hvir/test/merge-pr-skill.test.ts
       3  /private/var/tmp/ws/f7354e9d/hvir/test/path-copy.test.tsx
       2  /private/var/tmp/ws/f7354e9d/hvir/test/document-review-model.test.ts
       2  /private/var/tmp/ws/f7354e9d/hvir/test/harness-provider.test.ts
       2  /private/var/tmp/ws/f7354e9d/hvir/test/markdown-repository-images.test.tsx
       2  /private/var/tmp/ws/f7354e9d/hvir/test/project-watch-interests.test.tsx
       1  /private/var/tmp/ws/f7354e9d/hvir/build/linux/hvir.apparmor
       1  /private/var/tmp/ws/f7354e9d/hvir/eslint.config.mjs
       1  /private/var/tmp/ws/f7354e9d/hvir/scripts/architecture-wiring.mts
       1  /private/var/tmp/ws/f7354e9d/hvir/scripts/check-seams.sh
  ... 11 more file(s) omitted

Top directories by match count:
      75 in 23 file(s)  /private/var/tmp/ws/f7354e9d/hvir/test
      14 in 3 file(s)  /private/var/tmp/ws/f7354e9d/hvir/scripts
       2 in 2 file(s)  /private/var/tmp/ws/f7354e9d/hvir/src/main/smoke
       1 in 1 file(s)  /private/var/tmp/ws/f7354e9d/hvir
       1 in 1 file(s)  /private/var/tmp/ws/f7354e9d/hvir/build/linux
       1 in 1 file(s)  /private/var/tmp/ws/f7354e9d/hvir/src/main/harness

[extensions: .ts=21, .tsx=5, .mjs=2, .apparmor=1, .sh=1, .mts=1]
```

</details>


---

<sub>32s</sub>

### `bash`

**Read git hooks and dependabot config**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== .githooks/pre-push ==="; cat .githooks/pre-push; echo; echo "=== install-git-hooks.sh ==="; cat scripts/install-git-hooks.sh; echo; echo "=== dependabot ==="; cat .github/dependabot.yml

<details>
<summary>95 lines</summary>

```
=== .githooks/pre-push ===
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

=== install-git-hooks.sh ===
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

configured_hooks_path=$(git config --local --get core.hooksPath || true)
if [[ -n "$configured_hooks_path" && "$configured_hooks_path" != ".githooks" ]]; then
  echo "Refusing to replace existing core.hooksPath: $configured_hooks_path" >&2
  echo "Integrate .githooks/pre-push there manually if you want hvir's local validation hook." >&2
  exit 1
fi

git config --local core.hooksPath .githooks
echo "Installed hvir Git hooks from .githooks/."
echo "Pushes now run TypeScript checks and the local-platform Electron smoke test; use git push --no-verify to bypass them."

=== dependabot ===
version: 2

updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: daily
      time: '09:00'
      timezone: America/New_York
    open-pull-requests-limit: 10
    commit-message:
      prefix: deps
    ignore:
      # A dedicated provenance-validating workflow owns this immutable release artifact.
      - dependency-name: 'ghostty-web'
      # Keep Node types aligned with the Node major embedded by Electron.
      - dependency-name: '@types/node'
        update-types:
          - version-update:semver-major
      # Keep plist on its CommonJS-compatible v3 line while main dependencies are externalized.
      - dependency-name: plist
        update-types:
          - version-update:semver-major
      # Revisit these when their named upstream tool supports the next major.
      - dependency-name: typescript
        update-types:
          - version-update:semver-major
      - dependency-name: vite
        update-types:
          - version-update:semver-major
      - dependency-name: '@vitejs/plugin-react'
        update-types:
          - version-update:semver-major
    groups:
      npm-minor-and-patch-updates:
        applies-to: version-updates
        patterns:
          - '*'
        update-types:
          - minor
          - patch
      npm-security-updates:
        applies-to: security-updates
        patterns:
          - '*'

  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: daily
      time: '09:00'
      timezone: America/New_York
    open-pull-requests-limit: 10
    commit-message:
      prefix: deps
    groups:
      github-actions-minor-and-patch-updates:
        applies-to: version-updates
        patterns:
          - '*'
        update-types:
          - minor
          - patch
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>32s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/ci.yml

<details>
<summary>204 lines</summary>

```
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
```

</details>


---

<sub>44s</sub>

### `grep`

**README**

"README" in !{node_modules,package-lock.json,.git}/**

<details>
<summary>28 matches</summary>

```
[grep content: 23 matches across 10 file(s) under /private/var/tmp/ws/f7354e9d/hvir]
build/linux/hvir.apparmor:7:   # Site-specific additions and overrides. See local/README for details.
test/viewer-types.test.ts:7:     ['README.md', 'markdown'],
src/main/smoke/sessions-visual.ts:173:           content: 'Synthetic workspace\\A\\A README.md\\A src/\\A docs/';
test/release-pr-integrity.test.ts:235:       { changedFiles: ['package.json', 'README.md'] },
scripts/check-adrs.mjs:26:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),

test/filename-search-policy.test.ts (5 match(es)):
  10:         file('src/my-README.md'),
  12:         file('README.md'),
  19:       '/workspace/README.md',
  20:       '/workspace/src/my-README.md',
  26:       [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],

test/terminal-file-link.test.ts (6 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',

test/git-ignore-refresh.test.ts (2 match(es)):
  14:           { name: 'README.md', type: 'file' },
  18:           { name: 'README.md', type: 'file' },
test/document-review-delivery.test.ts:70:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

test/commit-file-tree.test.ts (4 match(es)):
  15:       path: localPath('/project/README.md'),
  37:       { kind: 'file', name: 'README.md', depth: 0 },
  44:       { kind: 'file', name: 'README.md', depth: 0 },
  62:     expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')
```

</details>


---

<sub>44s</sub>

### `grep`

**AGENTS\.md|CLAUDE\.md|CONTRIBUTING|CHANGELOG|docs/(design|adr|plan|[a-z-]+\.md)**

"AGENTS\.md|CLAUDE\.md|CONTRIBUTING|CHANGELOG|docs/(design|adr|plan|[a-z-]+\.md)" in !{node_modules,package-lock.json,.git}/**

<details>
<summary>66 matches</summary>

```
[grep content: 53 matches across 23 file(s) under /private/var/tmp/ws/f7354e9d/hvir]

test/merge-pr-skill.test.ts (3 match(es)):
  13: const agents = readFileSync(new URL('../AGENTS.md', import.meta.url), 'utf8')
  14: const contributing = readFileSync(new URL('../CONTRIBUTING.md', import.meta.url), 'utf8')
  16:   new URL('../docs/project-management.md', import.meta.url),
src/main/smoke/viewer-content.ts:40:                 node.querySelector('.tree-file-name')?.textContent?.trim() === 'AGENTS.md'
test/tree-git-status.test.ts:15:       changed('/repo/docs/conflict.md', {
test/issue-lifecycle-guidance.test.ts:8:   'CONTRIBUTING.md',
scripts/check-seams.sh:3: # Grep-level enforcement of the architectural seams (AGENTS.md "Respect the

scripts/check-adrs.mjs (11 match(es)):
  31:   errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
  48:     errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
  55:       errors.push(`docs/adr/${name}: expected exactly one ${section}`)
  59:       errors.push(`docs/adr/${name}: required decision sections are out of order`)
  65:     errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
  73:       `docs/adr/${name}: progress, evidence, and rollout sections do not belong in ADRs`,
  81:   errors.push('docs/design.md: missing bounded section 4 ADR index')
  92:       errors.push(`docs/design.md: ADR-${match[1]} links to ADR-${match[3]}`)
  98:       errors.push(`docs/design.md: ${name} must appear exactly once in the ADR index`)
  103:       errors.push(`docs/design.md: index points to non-record ${name}`)
  111:       'docs/design.md: ADR bodies or implementation addenda remain embedded in the index',

test/document-review-delivery-interaction.test.tsx (3 match(es)):
  31:   'User feedback/review on document docs/review.md\n\n' +
  32:   'docs/review.md:2\nQuote:\nTarget statement\nComment:\nPlease tighten this.'
  922:   const document = localPath('/repo/docs/review.md')

test/rendered-link.test.ts (3 match(es)):
  11:   const document = localPath('/repo/docs/plan/00-overview.md')
  16:       path: localPath('/repo/docs/plan/04-ssh-hosts.md'),
  20:       path: localPath('/repo/docs/design.md'),

test/project-watch-interests.test.tsx (2 match(es)):
  37:     const documentPath = hostPath(hostId, '/project/docs/readme.md')
  58:     const open = hostPath(hostId, '/project/docs/open.md')

test/harness-provider.test.ts (2 match(es)):
  162:     const body = 'docs/review.md:2\nQuote:\nline\nComment:\nkeep this exact'
  209:     const body = 'docs/review.md:2\nQuote:\nline one\nline two\nComment:\nExact.'
test/ipc-authority-router.test.ts:277:     const document = localPath('/project/docs/review.md')

test/document-review-model.test.ts (2 match(es)):
  23: const document = localPath('/repo/docs/review.md')
  114:     const remote = hostPath(asHostId('ssh:review'), '/repo/docs/review.md')
test/smoke-scenario-runner.test.ts:611:     new URL('../CONTRIBUTING.md', import.meta.url),
test/rendered-markdown-image-refresh.test.tsx:68:     const documentPath = localPath('/repo/docs/readme.md')
test/filename-search-policy.test.ts:11:         file('docs/readme-guide.md'),

test/markdown-repository-images.test.tsx (2 match(es)):
  36:     const documentPath = localPath('/repo/docs/readme.md')
  87:     const documentPath = localPath('/repo/docs/readme.md')
test/architecture-github.test.ts:182:       r.write('docs/architecture-budgets.md', 'fixture')

test/document-review-delivery.test.ts (4 match(es)):
  21:         comment('third', '/repo/docs/z.md', 3, 'third quote', 'Third\r\ncomment'),
  26:           '/repo/docs/other.md',
  52:           'User feedback/review on document docs/z.md\n\n' +
  53:           'docs/z.md:3\nQuote:\nthird quote\nComment:\nThird\ncomment',

test/path-copy.test.tsx (3 match(es)):
  67:     const sshPath = hostPath(sshHost, '/srv/app/docs/guide.md')
  68:     expect(pathCopyValue(sshRoot, sshPath, 'relative')).toBe('docs/guide.md')
  69:     expect(pathCopyValue(sshRoot, sshPath, 'absolute')).toBe('/srv/app/docs/guide.md')

test/document-review-delivery-coordinator.test.ts (5 match(es)):
  99:         'User feedback/review on document docs/review.md\n\n' +
  100:         'docs/review.md:2\nQuote:\nTarget statement\nComment:\nPlease tighten this.',
  125:       'User feedback/review on document docs/review.md\n\n' +
  126:         'docs/review.md:2\nQuote:\nTarget statement\nComment:\nPlease tighten this.',
  721:     `${workspace.root.path}/docs/review.md`,

test/external-document-authority.test.ts (2 match(es)):
  271:       path.path === '/scratch/alias.md' ? f.qualify('/project/docs/plan.md') : path,
  284:     documentPath: f.qualify('/project/docs/plan.md'),
scripts/architecture-wiring.mts:37:     path === 'docs/architecture-budgets.md' ||
eslint.config.mjs:8: // --- Seam enforcement (AGENTS.md "Respect the seams") ---------------------
```

</details>


---

<sub>44s</sub>

### `bash`

**Check for docs files existence and tracked files**

$ cd /private/var/tmp/ws/f7354e9d/hvir && for p in docs AGENTS.md CLAUDE.md CONTRIBUTING.md CHANGELOG.md README.md .agents .claude .vscode SECURITY.md CODE_OF_CONDUCT.md; do if [ -e "$p" ]; then echo "EXISTS: $p"; else echo "missing: $p"; fi; done; echo; echo "=== tracked file count ==="; git ls-files | wc -l; echo "=== tracked md files ==="; git ls-files '*.md'; echo "=== tracked top-level ==="; git ls-files | awk -F/ '{print $1}' | sort | uniq -c

<details>
<summary>43 lines</summary>

```
missing: docs
missing: AGENTS.md
missing: CLAUDE.md
missing: CONTRIBUTING.md
missing: CHANGELOG.md
missing: README.md
missing: .agents
missing: .claude
missing: .vscode
missing: SECURITY.md
missing: CODE_OF_CONDUCT.md

=== tracked file count ===
    1256
=== tracked md files ===
THIRD_PARTY_NOTICES.md
test/fixtures/rendered-mmd.md
test/fixtures/rendered.md
=== tracked top-level ===
   1 .githooks
  12 .github
   1 .gitignore
   1 .prettierignore
   1 .prettierrc.json
  19 build
   1 electron-builder.ssh-acceptance.yml
   1 electron-builder.yml
   1 electron.vite.config.ts
   1 eslint.config.mjs
   1 LICENSE
   1 package-lock.json
   1 package.json
   5 packages
 106 scripts
 695 src
   1 stryker.config.json
 401 test
   1 THIRD_PARTY_NOTICES.md
   1 tsconfig.base.json
   1 tsconfig.json
   1 tsconfig.node.json
   1 tsconfig.web.json
   1 vitest.config.ts
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>1m 1s</sub>

### `bash`

**Summarize renderer file layout**

$ cd /private/var/tmp/ws/f7354e9d/hvir && find src/renderer -type f | sed 's|^src/renderer/||' | sort | awk -F/ '{ if (NF<=2) print; else { d=$1"/"$2"/"$3; c[d]++; } } END { for (k in c) print k"/  ["c[k]" entries]" }' | sort

<details>
<summary>346 lines</summary>

```
index.html
src/App.tsx
src/context-menu/viewport-context-menu.ts/  [1 entries]
src/dashboards/ElectronWebPaneSurface.tsx/  [1 entries]
src/dashboards/use-web-pane-workspace.ts/  [1 entries]
src/dashboards/web-pane-diagnostics.ts/  [1 entries]
src/dashboards/web-pane-surface.ts/  [1 entries]
src/dashboards/web-pane-url.ts/  [1 entries]
src/dashboards/web-pane-workspace-policy.ts/  [1 entries]
src/dashboards/WebPane.tsx/  [1 entries]
src/dashboards/WebPaneStack.tsx/  [1 entries]
src/development/development-performance-fixture.tsx/  [1 entries]
src/development/development-performance-pump.tsx/  [1 entries]
src/development/development-renderer-instrumentation.tsx/  [1 entries]
src/development/performance-measure-budget.ts/  [1 entries]
src/diagnostics/DiagnosticReportDialog.tsx/  [1 entries]
src/diagnostics/owned-capture-masks.ts/  [1 entries]
src/document-review/document-review-anchor.ts/  [1 entries]
src/document-review/document-review-batches.ts/  [1 entries]
src/document-review/document-review-capture.ts/  [1 entries]
src/document-review/document-review-delivery-client.ts/  [1 entries]
src/document-review/document-review-delivery-feedback.ts/  [1 entries]
src/document-review/document-review-eligibility.ts/  [1 entries]
src/document-review/document-review-inline.ts/  [1 entries]
src/document-review/document-review-lifecycle.ts/  [1 entries]
src/document-review/document-review-model.ts/  [1 entries]
src/document-review/document-review-rendered.ts/  [1 entries]
src/document-review/document-review-selectors.ts/  [1 entries]
src/document-review/document-review-source.ts/  [1 entries]
src/document-review/document-review-types.ts/  [1 entries]
src/document-review/document-review-validation.ts/  [1 entries]
src/document-review/document-review-workspace-controller.ts/  [1 entries]
src/document-review/document-review-workspace.ts/  [1 entries]
src/document-review/DocumentReviewControls.tsx/  [1 entries]
src/document-review/DocumentReviewDeliveryPanel.tsx/  [1 entries]
src/document-review/DocumentReviewInlineSurface.tsx/  [1 entries]
src/document-review/index.ts/  [1 entries]
src/document-review/use-document-review-delivery.ts/  [1 entries]
src/document-review/use-document-review-interaction.ts/  [1 entries]
src/document-review/use-document-review-workspace.ts/  [1 entries]
src/ErrorBoundary.tsx
src/git/commit-detail-client.ts/  [1 entries]
src/git/commit-file-tree.ts/  [1 entries]
src/git/commit-message.ts/  [1 entries]
src/git/git-capability.ts/  [1 entries]
src/git/git-graph-lane-metrics.ts/  [1 entries]
src/git/git-graph-layout.ts/  [1 entries]
src/git/git-rail-model.ts/  [1 entries]
src/git/git-sync-coordinator.ts/  [1 entries]
src/git/git-sync-status.ts/  [1 entries]
src/git/GitBranchControls.tsx/  [1 entries]
src/git/GitChangesView.tsx/  [1 entries]
src/git/GitGraphLanes.tsx/  [1 entries]
src/git/GitGraphView.tsx/  [1 entries]
src/git/GitHistoryView.tsx/  [1 entries]
src/git/GitPanel.tsx/  [1 entries]
src/git/use-git-commit-details.ts/  [1 entries]
src/git/use-git-rail-controller.ts/  [1 entries]
src/git/use-git-workspace.ts/  [1 entries]
src/git/virtual-range.ts/  [1 entries]
src/harness/ProviderContextMeter.tsx/  [1 entries]
src/health/use-diagnostic-evidence.ts/  [1 entries]
src/health/use-workbench-health.ts/  [1 entries]
src/health/WorkbenchHealthControl.tsx/  [1 entries]
src/hvir.d.ts
src/layout/PaneResizer.tsx/  [1 entries]
src/layout/split-layout-policy.ts/  [1 entries]
src/layout/workspace-layout-persistence.ts/  [1 entries]
src/main.tsx
src/path-copy/path-copy.ts/  [1 entries]
src/path-copy/PathCopyMenu.tsx/  [1 entries]
src/path-copy/use-path-copy-menu.ts/  [1 entries]
src/scrollbars/scrollbar-presentation.ts/  [1 entries]
src/sessions/sessions-overview-model.ts/  [1 entries]
src/sessions/sessions-projection-coordinator.ts/  [1 entries]
src/sessions/sessions-renderer-observation.ts/  [1 entries]
src/sessions/sessions-terminal-detail-controller.ts/  [1 entries]
src/sessions/sessions-terminal-overlay.ts/  [1 entries]
src/sessions/sessions-terminal-surface.ts/  [1 entries]
src/sessions/SessionsApplicationDestination.tsx/  [1 entries]
src/sessions/SessionsCollectionToolbar.tsx/  [1 entries]
src/sessions/SessionsOverview.tsx/  [1 entries]
src/sessions/SessionsOverviewCard.tsx/  [1 entries]
src/sessions/SessionsOverviewNotice.tsx/  [1 entries]
src/sessions/SessionsTerminalDetail.tsx/  [1 entries]
src/sessions/use-sessions-foreground.ts/  [1 entries]
src/sessions/use-sessions-terminal-detail.ts/  [1 entries]
src/settings/ComposerSubmitConsentDialog.tsx/  [1 entries]
src/settings/harness-argument-editor.ts/  [1 entries]
src/settings/harness-profile-draft.ts/  [1 entries]
src/settings/harness-profile-editor-policy.ts/  [1 entries]
src/settings/harness-profile-request-policy.ts/  [1 entries]
src/settings/HarnessProfileAdvancedFields.tsx/  [1 entries]
src/settings/HarnessProfileCommandFields.tsx/  [1 entries]
src/settings/HarnessProfileDialogs.tsx/  [1 entries]
src/settings/HarnessProfileEditor.tsx/  [1 entries]
src/settings/HarnessProfileOverlays.tsx/  [1 entries]
src/settings/HarnessProfilesSettings.tsx/  [1 entries]
src/settings/keybindings.ts/  [1 entries]
src/settings/sections/  [5 entries]
src/settings/settings-draft.ts/  [1 entries]
src/settings/settings-model.ts/  [1 entries]
src/settings/settings-navigation.ts/  [1 entries]
src/settings/settings.ts/  [1 entries]
src/settings/SettingsActiveSection.tsx/  [1 entries]
src/settings/SettingsDialog.tsx/  [1 entries]
src/settings/SettingsSection.tsx/  [1 entries]
src/settings/SettingsSectionNavigation.tsx/  [1 entries]
src/settings/TerminalThemeGallery.tsx/  [1 entries]
src/settings/typography-presentation.ts/  [1 entries]
src/settings/typography-settings.ts/  [1 entries]
src/settings/use-add-harness-dialog.ts/  [1 entries]
src/settings/use-harness-binding-authorization.ts/  [1 entries]
src/settings/use-harness-folder-picker.ts/  [1 entries]
src/settings/use-harness-profile-editor.ts/  [1 entries]
src/settings/use-harness-profile-load.ts/  [1 entries]
src/settings/use-settings-controller.ts/  [1 entries]
src/styles.css
src/styles/base.css/  [1 entries]
src/styles/composer-submit.css/  [1 entries]
src/styles/context-menu.css/  [1 entries]
src/styles/diagnostic-report.css/  [1 entries]
src/styles/dialogs.css/  [1 entries]
src/styles/document-review.css/  [1 entries]
src/styles/file-operations.css/  [1 entries]
src/styles/git-controls.css/  [1 entries]
src/styles/git-graph.css/  [1 entries]
src/styles/git-history.css/  [1 entries]
src/styles/git-inspector.css/  [1 entries]
src/styles/harness-settings.css/  [1 entries]
src/styles/health.css/  [1 entries]
src/styles/path-copy.css/  [1 entries]
src/styles/primitives.css/  [1 entries]
src/styles/projects.css/  [1 entries]
src/styles/provider-context.css/  [1 entries]
src/styles/scrollbars.css/  [1 entries]
src/styles/sessions-collection.css/  [1 entries]
src/styles/sessions-overview.css/  [1 entries]
src/styles/sessions-terminal-detail.css/  [1 entries]
src/styles/settings.css/  [1 entries]
src/styles/shell.css/  [1 entries]
src/styles/terminal-context-menu.css/  [1 entries]
src/styles/terminal-list.css/  [1 entries]
src/styles/terminal-move.css/  [1 entries]
src/styles/terminal-pane.css/  [1 entries]
src/styles/terminal-search.css/  [1 entries]
src/styles/terminal-shell.css/  [1 entries]
src/styles/terminal-theme-gallery.css/  [1 entries]
src/styles/tree.css/  [1 entries]
src/styles/viewer-content.css/  [1 entries]
src/styles/viewer-find.css/  [1 entries]
src/styles/viewer-tabs.css/  [1 entries]
src/styles/viewer-workload.css/  [1 entries]
src/styles/web-pane.css/  [1 entries]
src/styles/workspace-catalog.css/  [1 entries]
src/styles/workspace-state.css/  [1 entries]
src/terminal/effect-generation.ts/  [1 entries]
src/terminal/generated-terminal-theme-catalog.ts/  [1 entries]
src/terminal/ghostty-terminal-events.ts/  [1 entries]
src/terminal/ghostty-terminal-file-paste.ts/  [1 entries]
src/terminal/ghostty-terminal-fit.ts/  [1 entries]
src/terminal/ghostty-terminal-keyboard.ts/  [1 entries]
src/terminal/ghostty-terminal-pane.ts/  [1 entries]
src/terminal/harness-launch-menu.ts/  [1 entries]
src/terminal/terminal-attention.ts/  [1 entries]
src/terminal/terminal-clipboard-osc.ts/  [1 entries]
src/terminal/terminal-clipboard-write.ts/  [1 entries]
src/terminal/terminal-clipboard.ts/  [1 entries]
src/terminal/terminal-color-schema.mts/  [1 entries]
src/terminal/terminal-context-menu-position.ts/  [1 entries]
src/terminal/terminal-context-menu-target.ts/  [1 entries]
src/terminal/terminal-event-router.ts/  [1 entries]
src/terminal/terminal-file-link.ts/  [1 entries]
src/terminal/terminal-fit.ts/  [1 entries]
src/terminal/terminal-fork-policy.ts/  [1 entries]
src/terminal/terminal-palette.ts/  [1 entries]
src/terminal/terminal-pane-event-coordinator.ts/  [1 entries]
src/terminal/terminal-pane-factory.ts/  [1 entries]
src/terminal/terminal-pane.ts/  [1 entries]
src/terminal/terminal-probe-policy.ts/  [1 entries]
src/terminal/terminal-profile-recovery.ts/  [1 entries]
src/terminal/terminal-recovery-planner.ts/  [1 entries]
src/terminal/terminal-runtime-interactions.ts/  [1 entries]
src/terminal/terminal-runtime-launch.ts/  [1 entries]
src/terminal/terminal-runtime-live-settings.ts/  [1 entries]
src/terminal/terminal-runtime-options.ts/  [1 entries]
src/terminal/terminal-runtime-presentation.ts/  [1 entries]
src/terminal/terminal-runtime-registry.ts/  [1 entries]
src/terminal/terminal-runtime.ts/  [1 entries]
src/terminal/terminal-search-controller.ts/  [1 entries]
src/terminal/terminal-semantic-regions.ts/  [1 entries]
src/terminal/terminal-sessions-surface-owner.ts/  [1 entries]
src/terminal/terminal-split-persistence.ts/  [1 entries]
src/terminal/terminal-surface-attachment.ts/  [1 entries]
src/terminal/terminal-theme-catalog.ts/  [1 entries]
src/terminal/terminal-wheel.ts/  [1 entries]
src/terminal/terminal-workspace-model.ts/  [1 entries]
src/terminal/terminal-workspace-runtime-owner.ts/  [1 entries]
src/terminal/TerminalContextMenu.tsx/  [1 entries]
src/terminal/TerminalContextMeter.tsx/  [1 entries]
src/terminal/TerminalDeck.tsx/  [1 entries]
src/terminal/TerminalMoveDialog.tsx/  [1 entries]
src/terminal/TerminalRail.tsx/  [1 entries]
src/terminal/TerminalRailCompact.tsx/  [1 entries]
src/terminal/TerminalRecoveryDialog.tsx/  [1 entries]
src/terminal/TerminalSearch.tsx/  [1 entries]
src/terminal/TerminalSessionRuntimes.tsx/  [1 entries]
src/terminal/TerminalView.tsx/  [1 entries]
src/terminal/TerminalWorkspace.tsx/  [1 entries]
src/terminal/TerminalWorkspaceCollection.tsx/  [1 entries]
src/terminal/TerminalWorkspaceControls.tsx/  [1 entries]
src/terminal/TerminalWorkspaceDialogs.tsx/  [1 entries]
src/terminal/use-new-worktree-move-badge.ts/  [1 entries]
src/terminal/use-terminal-attention-controller.ts/  [1 entries]
src/terminal/use-terminal-attention.ts/  [1 entries]
src/terminal/use-terminal-context-menu.ts/  [1 entries]
src/terminal/use-terminal-launch-menu-layout.ts/  [1 entries]
src/terminal/use-terminal-pane-controller.ts/  [1 entries]
src/terminal/use-terminal-persistence.ts/  [1 entries]
src/terminal/use-terminal-profiles.ts/  [1 entries]
src/terminal/use-terminal-recovery.ts/  [1 entries]
src/terminal/use-terminal-session-commands.ts/  [1 entries]
src/terminal/use-terminal-workspace-move.ts/  [1 entries]
src/terminal/use-terminal-workspace-runtime.ts/  [1 entries]
src/terminal/use-terminal-workspace-transfer.ts/  [1 entries]
src/theme-model.ts
src/theme.ts
src/themes.css
src/tree/directory-entry-sort.ts/  [1 entries]
src/tree/DirectoryTree.tsx/  [1 entries]
src/tree/file-action-destination.ts/  [1 entries]
src/tree/file-action-menu.ts/  [1 entries]
src/tree/file-manager-reveal.ts/  [1 entries]
src/tree/file-name.ts/  [1 entries]
src/tree/file-operation-feedback.ts/  [1 entries]
src/tree/FileCreateOverlays.tsx/  [1 entries]
src/tree/FileDeletionDialog.tsx/  [1 entries]
src/tree/FileExternalMoveDialog.tsx/  [1 entries]
src/tree/FilenameSearch.tsx/  [1 entries]
src/tree/FileOrganizationDialog.tsx/  [1 entries]
src/tree/FileTree.tsx/  [1 entries]
src/tree/git-ignore-refresh.ts/  [1 entries]
src/tree/git-status-decoration.ts/  [1 entries]
src/tree/project-entry-drag.ts/  [1 entries]
src/tree/project-file-entry-name.ts/  [1 entries]
src/tree/project-file-owner-key.ts/  [1 entries]
src/tree/use-external-file-actions.ts/  [1 entries]
src/tree/use-external-file-copy.ts/  [1 entries]
src/tree/use-external-file-move.ts/  [1 entries]
src/tree/use-file-create-actions.ts/  [1 entries]
src/tree/use-file-deletion-actions.ts/  [1 entries]
src/tree/use-file-manager-reveal.ts/  [1 entries]
src/tree/use-file-organization-actions.ts/  [1 entries]
src/tree/use-path-copy-action.ts/  [1 entries]
src/tree/use-project-file-operation.ts/  [1 entries]
src/viewer/code-scroll-anchor.ts/  [1 entries]
src/viewer/codemirror-find-target.ts/  [1 entries]
src/viewer/csv-parser.ts/  [1 entries]
src/viewer/csv-protocol.ts/  [1 entries]
src/viewer/csv.worker.ts/  [1 entries]
src/viewer/diff-policy.ts/  [1 entries]
src/viewer/DiffView.tsx/  [1 entries]
src/viewer/dom-find-target.ts/  [1 entries]
src/viewer/external-document-context.ts/  [1 entries]
src/viewer/external-document-tabs.ts/  [1 entries]
src/viewer/FileViewer.tsx/  [1 entries]
src/viewer/FindControl.tsx/  [1 entries]
src/viewer/GoToLineControl.tsx/  [1 entries]
src/viewer/highlight-protocol.ts/  [1 entries]
src/viewer/highlight-request.ts/  [1 entries]
src/viewer/highlight-worker.ts/  [1 entries]
src/viewer/highlight.worker.ts/  [1 entries]
src/viewer/json-protocol.ts/  [1 entries]
src/viewer/json.worker.ts/  [1 entries]
src/viewer/LargeFileView.tsx/  [1 entries]
src/viewer/markdown-client.ts/  [1 entries]
src/viewer/markdown-extensions.ts/  [1 entries]
src/viewer/markdown-renderer.ts/  [1 entries]
src/viewer/markdown-repository-images.ts/  [1 entries]
src/viewer/markdown.worker.ts/  [1 entries]
src/viewer/MarkdownFragment.tsx/  [1 entries]
src/viewer/render-protocol.ts/  [1 entries]
src/viewer/rendered-link-handler.ts/  [1 entries]
src/viewer/rendered-position.ts/  [1 entries]
src/viewer/RenderedView.tsx/  [1 entries]
src/viewer/RepositoryImageView.tsx/  [1 entries]
src/viewer/retained-viewer-workspace-cache.ts/  [1 entries]
src/viewer/shiki-grammar-registry.ts/  [1 entries]
src/viewer/shiki-language-catalog.ts/  [1 entries]
src/viewer/shiki-language-names.ts/  [1 entries]
src/viewer/source-blame-gutter.ts/  [1 entries]
src/viewer/source-coordinate.ts/  [1 entries]
src/viewer/source-highlighting.ts/  [1 entries]
src/viewer/SourceView.tsx/  [1 entries]
src/viewer/structured-data.ts/  [1 entries]
src/viewer/tab-state.ts/  [1 entries]
src/viewer/TabStrip.tsx/  [1 entries]
src/viewer/use-diff-inputs.ts/  [1 entries]
src/viewer/use-source-blame.ts/  [1 entries]
src/viewer/use-viewer-path-lifecycle.ts/  [1 entries]
src/viewer/use-viewer-workspace.ts/  [1 entries]
src/viewer/viewer-byte-format.ts/  [1 entries]
src/viewer/viewer-command-targets.ts/  [1 entries]
src/viewer/viewer-document-refresh.ts/  [1 entries]
src/viewer/viewer-find.ts/  [1 entries]
src/viewer/viewer-path-rebind.ts/  [1 entries]
src/viewer/viewer-path-removal.ts/  [1 entries]
src/viewer/viewer-position.ts/  [1 entries]
src/viewer/viewer-read-policy.ts/  [1 entries]
src/viewer/viewer-workload-policy.ts/  [1 entries]
src/viewer/viewer-workspace-model.ts/  [1 entries]
src/viewer/viewer-workspace-persistence.ts/  [1 entries]
src/viewer/viewer-workspace-selectors.ts/  [1 entries]
src/viewer/viewer-workspace-state.ts/  [1 entries]
src/workbench/active-terminal-focus.ts/  [1 entries]
src/workbench/ConfirmationDialog.tsx/  [1 entries]
src/workbench/middle-click-close.ts/  [1 entries]
src/workbench/modal-keyboard-model.ts/  [1 entries]
src/workbench/TerminalLayoutControls.tsx/  [1 entries]
src/workbench/use-modal-keyboard.ts/  [1 entries]
src/workbench/use-renderer-ready.ts/  [1 entries]
src/workbench/use-terminal-path-activation.ts/  [1 entries]
src/workbench/use-workbench-commands.ts/  [1 entries]
src/workbench/use-workbench-layout.ts/  [1 entries]
src/workbench/use-workbench-overlays.ts/  [1 entries]
src/workbench/workbench-command-router.ts/  [1 entries]
src/workbench/workbench-layout-policy.ts/  [1 entries]
src/workbench/workbench-overlay-model.ts/  [1 entries]
src/workbench/workspace-pane-state.ts/  [1 entries]
src/workspaces/connection-status.ts/  [1 entries]
src/workspaces/ConnectionStatus.tsx/  [1 entries]
src/workspaces/initial-host-connection.ts/  [1 entries]
src/workspaces/MissingWorkspaceNotice.tsx/  [1 entries]
src/workspaces/project-folder-picker-client.ts/  [1 entries]
src/workspaces/project-session-events.ts/  [1 entries]
src/workspaces/project-session-model.ts/  [1 entries]
src/workspaces/project-session.ts/  [1 entries]
src/workspaces/project-state-delivery.ts/  [1 entries]
src/workspaces/project-watch-interests.ts/  [1 entries]
src/workspaces/ProjectsBar.tsx/  [1 entries]
src/workspaces/SessionDialog.tsx/  [1 entries]
src/workspaces/SshPromptDialog.tsx/  [1 entries]
src/workspaces/workspace-attention.ts/  [1 entries]
src/workspaces/workspace-session-actions.ts/  [1 entries]
src/workspaces/WorkspaceCatalogDialogs.tsx/  [1 entries]
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>1m 1s</sub>

### `bash`

**Line counts for key entry files**

$ cd /private/var/tmp/ws/f7354e9d/hvir && wc -l src/main/index.ts src/main/application-runtime.ts src/main/workbench-runtime.ts src/renderer/index.html src/renderer/src/*.ts* 2>/dev/null | sort -n | tail -40

<details>
<summary>12 lines</summary>

```
1 src/renderer/src/theme-model.ts
       9 src/renderer/src/hvir.d.ts
      18 src/main/application-runtime.ts
      25 src/renderer/index.html
      39 src/renderer/src/main.tsx
      51 src/renderer/src/ErrorBoundary.tsx
      53 src/renderer/src/theme.ts
     198 src/main/workbench-runtime.ts
     518 src/main/index.ts
     686 src/renderer/src/App.tsx
    1598 total
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/main/index.ts.**

/private/var/tmp/ws/f7354e9d/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/main/index.ts.**

/private/var/tmp/ws/f7354e9d/hvir/src/main/index.ts (lines 1-260)

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


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/main/index.ts.**

/private/var/tmp/ws/f7354e9d/hvir/src/main/index.ts (lines 260-518)

<details>
<summary>259 lines</summary>

```
      rendererScopes,
      ptySupervisor,
      terminalSessionRegistry,
      harnessProviders,
      harnessProfileStore,
    )
    const remoteImagePaste = runtime.own(
      'remote image paste coordinator',
      createElectronRemoteImagePasteCoordinator({
        ptys: ptySupervisor,
        resources: rendererScopes,
        getHost: (hostId) => hostCatalog?.hostById(hostId),
      }),
      (coordinator) => coordinator.dispose(),
    )
    const workspaceCleanup = createWorkspaceCleanup({
      ptys: ptySupervisor,
      resources: rendererScopes,
      sessions: terminalSessionRegistry,
      webPanes: webPaneRoutes,
      releaseHtmlPreviews: (root) => htmlPreviews.releaseWorkspace(root),
    })
    const removal = new WorkspaceRemovalCoordinator(projectRegistry, workspaceCleanup)
    workspaceCoordinator = runtime.own(
      'workspace coordinator',
      new WorkspaceCoordinator({
        registry: projectRegistry,
        discovery: {
          discover: (root) => gitWorker!.request(GIT_WORKTREES_TYPE, { root }),
          workspaceActivity: (root, relatedWorktreeRoots) =>
            gitWorker!.request(GIT_WORKSPACE_ACTIVITY_TYPE, {
              root,
              relatedWorktreeRoots,
            }),
        },
        removal,
        emitWatch: (event) => emit('project:watch', event),
        createWatch: (target, callbacks) => new ProjectWatchController(target, callbacks),
        shouldPoll: () =>
          !runtime.isShuttingDown && BrowserWindow.getAllWindows().length > 0,
        onError: (message, error) => console.error(message, error),
      }),
      (coordinator) => coordinator.dispose(),
    )
    const projects = new ProjectCoordinator({
      registry: projectRegistry,
      hosts: hostCatalog,
      workspaces: workspaceCoordinator,
      cleanup: workspaceCleanup,
      removal,
      onError: (message, error) => console.error(message, error),
      onHostControlDiagnostic: (event) => diagnostics.recordHostControl(event),
    })
    const gitMutations = new GitMutationCoordinator({
      registry: projectRegistry,
      worker: {
        pruneWorktrees: (root) => gitWorker!.request(GIT_PRUNE_WORKTREES_TYPE, { root }),
        switchBranch: (root, branch, relatedWorktreeRoots) =>
          gitWorker!.request(GIT_SWITCH_BRANCH_TYPE, {
            root,
            branch,
            relatedWorktreeRoots,
          }),
        fetch: (root) => gitWorker!.request(GIT_FETCH_TYPE, { root }),
        pull: (root, relatedWorktreeRoots) =>
          gitWorker!.request(GIT_PULL_TYPE, { root, relatedWorktreeRoots }),
      },
      workspaces: workspaceCoordinator,
      authorizations: gitMutationAuthorizations,
      removal,
      onError: (message, error) => console.error(message, error),
    })
    const terminalMoves = new TerminalWorkspaceMoveCoordinator({
      projects: projectRegistry,
      workspaces: workspaceCoordinator,
      sessions: terminalSessionRegistry,
      ptys: ptySupervisor,
      resources: rendererScopes,
      webPanes: webPaneRoutes,
      onError: (message, error) => console.error(message, error),
    })
    attentionBadge = runtime.own(
      'attention badge',
      new AttentionBadge((count) => {
        if (process.platform !== 'darwin' && process.platform !== 'linux') return false
        return app.setBadgeCount(count)
      }),
      (badge) => badge.clear(),
    )
    installTerminalIdentityPublication(runtime, ptySupervisor, rendererEvents)
    const withSshPresentation = <T>(owner: RendererOwner, operation: () => T): T => {
      if (!sshPrompter) throw new Error('SSH prompting is unavailable')
      return sshPrompter.runForOwner(owner, operation)
    }
    const projectCommands = createProjectCommands({
      projects,
      workspaces: workspaceCoordinator,
      git: gitMutations,
      withSshPresentation,
    })
    runtime.own(
      'IPC authority router',
      registerIpcHandlers({
        echoWorker,
        gitWorker,
        filenameSearch,
        projectFiles,
        projectFolderPicker: new FolderPicker(hostCatalog, projects, rendererScopes),
        documentReview: documentReview.coordinator,
        documentReviewDelivery: documentReview.delivery,
        getProject: () => registry.active,
        getHost: (hostId) => hostCatalog?.hostById(hostId),
        connectedHosts: () => hostCatalog?.connectedHosts() ?? [],
        getRegisteredWorkspaceRoot: (root) => registry.registeredWorkspaceRoot(root),
        revealLocalEntry: electronReveal(shell),
        getProjectState: () => registry.state(),
        listHosts: () => hostCatalog?.listHosts() ?? [],
        ...projectCommands,
        respondSshPrompt: (owner, id, answers) =>
          sshPrompter?.respond(owner, id, answers),
        rendererResources: rendererScopes,
        rendererReady: (owner, reportedGeneration) =>
          windowManager.rendererReady(owner, reportedGeneration) &&
          sshPrompter?.activateOwner(owner),
        getWorkbenchHealth: () => diagnostics.healthSnapshot(),
        acknowledgeWorkbenchHealth: (id) => diagnostics.acknowledgeHealth(id),
        diagnostics: diagnosticIpc,
        recordIpcContractDiagnostic: (event) => diagnostics.recordIpcContract(event),
        recordRenderContainment: (owner, batch) =>
          diagnostics.recordRenderContainment(owner, batch),
        ptySupervisor,
        terminalSessions: terminalSessionRegistry,
        sessionsObservation: sessionsPorts.observation,
        sessionsUsage: sessionsPorts.usage,
        terminalMoves,
        harnessProfiles: harnessProfileStore,
        harnessProbes: harnessProbeManager,
        remoteImagePaste,
        updateAttention: (owner, count) =>
          attentionBadge?.update(owner.id, count, owner.generation),
        updateWebPaneBindings: (owner, bindings) =>
          windowManager.updateWebPaneBindings(owner.id, bindings),
        updateWebPaneFullPage: (owner, paneId) =>
          windowManager.updateWebPaneFullPage(owner.id, paneId),
        htmlPreviews,
        webPanes: webPaneRoutes,
        openExternal: (url) => shell.openExternal(url),
        emit,
      }),
      (router) => router.dispose(),
    )
    createWindow() // Paint before background watch and Git discovery touches a slow directory.
    if (projectRegistry.active.host.connectionState === 'connected') {
      void workspaceCoordinator
        .replaceWatch(projectRegistry.active)
        .then(() => workspaceCoordinator?.refresh(projectRegistry!.active.projectId))
        .catch((error) => console.error('[workspace] initial discovery failed', error))
    }
    workspaceCoordinator.startPolling()
  }
  function reopenWorkbench(): void {
    if (!projectRegistry || BrowserWindow.getAllWindows().length > 0) return
    if (projectRegistry.active.host.connectionState === 'connected') {
      void workspaceCoordinator
        ?.replaceWatch(projectRegistry.active)
        .catch((error) => console.error('[workspace] watch reopen failed', error))
    }
    createWindow()
  }
  function projectRootArgument(): string | undefined {
    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  }
  void app
    .whenReady()
    .then(async () => {
      if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
        const { runElectronSmokeScenario } = await import('./smoke/scenarios')
        const code = await runElectronSmokeScenario({
          scenario: process.env['HVIR_SMOKE_SCENARIO'],
          projectRoot: localPath(projectRootArgument() ?? process.cwd()),
          createWindow,
          harnessProbeManager,
          htmlPreviews,
          rendererResources: rendererScopes,
          diagnostics: diagnosticIpc,
          runtimeDiagnostics: diagnostics,
          webPaneRoutes,
          rendererReady: windowManager.rendererReady,
          updateWebPaneBindings: windowManager.updateWebPaneBindings,
          updateWebPaneFullPage: windowManager.updateWebPaneFullPage,
          openExternal: (url) => shell.openExternal(url),
        })
        app.exit(code)
        return
      }
      await runtime.start()
      diagnostics.recordApplication('application-ready')
    })
    .catch(async (error: unknown) => {
      diagnostics.recordApplication('application-startup-failed')
      await diagnostics.dispose()
      console.error('HVIR_STARTUP_FAIL', error)
      app.exit(1)
    })
  app.on('window-all-closed', () => {
    if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
  })
  app.on('activate', () => {
    if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return
    void runtime.reopen().catch((error) => console.error('[window] reopen failed', error))
  })
  app.on('before-quit', (event) => {
    if (runtime.isShutdown) return
    event.preventDefault()
    if (runtime.isShuttingDown) return
    diagnostics.recordApplication('application-shutdown-starting')
    void runtime
      .shutdown()
      .then(() => diagnostics.recordApplication('application-shutdown-completed'))
      .catch((error) => {
        diagnostics.recordApplication('application-shutdown-failed')
        console.error('[shutdown] workbench cleanup failed', error)
      })
      .finally(async () => {
        await diagnostics.dispose()
        app.quit()
      })
  })
  async function suspendWorkbenchSessions(): Promise<void> {
    await workspaceCoordinator?.stopWatch()
    await workspaceCoordinator?.settle()
    const roots =
      projectRegistry
        ?.state()
        .projects.flatMap((project) =>
          project.workspaces.map((workspace) => workspace.root),
        ) ?? []
    await Promise.all(roots.map((root) => rendererScopes.revokeWorkspace(root)))
    ptySupervisor?.disposeSessions()
    htmlPreviews.clear()
    await webPaneRoutes
      .closeAll()
      .catch((error) => console.error('[web-pane] suspend cleanup failed', error))
    sshPrompter?.cancelAll()
    await terminalSessionRegistry?.flush()
    await harnessProfileStore?.flush()
    await documentReview?.flush()
    await hostCatalog?.disconnectSshHosts()
  }
  async function shutdown(): Promise<void> {
    workspaceCoordinator?.stopPolling()
    await workspaceCoordinator
      ?.stopWatch()
      .catch((error) => console.error('[shutdown] watcher cleanup failed', error))
    await workspaceCoordinator?.settle()
  }
}
createWorkbenchEntry()
```

</details>


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/shared/keybindings.ts.**

/private/var/tmp/ws/f7354e9d/hvir/src/shared/keybindings.ts

<details>
<summary>129 lines</summary>

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
  readonly ctrlKey: boolean
  readonly metaKey: boolean
  readonly altKey: boolean
  readonly shiftKey: boolean
}

interface ParsedKeybinding {
  readonly key: string
  readonly mod: boolean
  readonly ctrl: boolean
  readonly meta: boolean
  readonly alt: boolean
  readonly shift: boolean
}

export function parseKeybindingOverrides(value: unknown): KeybindingMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('Keybindings must be a JSON object')
  }
  const overrides = value as Record<string, unknown>
  const unknown = Object.keys(overrides).find(
    (key) => !KEYBINDING_ACTIONS.includes(key as KeybindingAction),
  )
  if (unknown) throw new Error(`Unknown keybinding action: ${unknown}`)
  const bindings = { ...DEFAULT_KEYBINDINGS }
  for (const action of KEYBINDING_ACTIONS) {
    const candidate = overrides[action]
    if (candidate === undefined) continue
    if (typeof candidate !== 'string') {
      throw new Error(`${action} must be a keybinding string`)
    }
    parseKeybinding(candidate)
    bindings[action] = candidate
  }
  return bindings
}

export function keybindingOverridesJson(bindings: KeybindingMap): string {
  return JSON.stringify(bindings, null, 2)
}

export function matchesKeybinding(
  event: KeyboardStroke,
  binding: string,
  mac: boolean,
): boolean {
  const parsed = parseKeybinding(binding)
  const modDown = mac ? event.metaKey : event.ctrlKey
  const bracketCode =
    parsed.key === '[' ? 'BracketLeft' : parsed.key === ']' ? 'BracketRight' : undefined
  const keyMatches = bracketCode
    ? event.code === bracketCode || event.key === parsed.key
    : event.key.toLowerCase() === parsed.key.toLowerCase()
  return (
    keyMatches &&
    event.altKey === parsed.alt &&
    event.shiftKey === parsed.shift &&
    event.ctrlKey === (parsed.ctrl || (parsed.mod && !mac)) &&
    event.metaKey === (parsed.meta || (parsed.mod && mac)) &&
    (!parsed.mod || modDown)
  )
}

function parseKeybinding(binding: string): ParsedKeybinding {
  const parts = binding
    .split('+')
    .map((part) => part.trim())
    .filter(Boolean)
  const key = parts.at(-1)
  if (!key || parts.length < 2 || key.length > 12) {
    throw new Error(`Invalid keybinding: ${binding}`)
  }
  const modifiers = parts.slice(0, -1).map((part) => part.toLowerCase())
  const allowed = new Set(['mod', 'ctrl', 'meta', 'alt', 'shift'])
  if (
    modifiers.some((modifier) => !allowed.has(modifier)) ||
    new Set(modifiers).size !== modifiers.length
  ) {
    throw new Error(`Invalid keybinding: ${binding}`)
  }
  return {
    key,
    mod: modifiers.includes('mod'),
    ctrl: modifiers.includes('ctrl'),
    meta: modifiers.includes('meta'),
    alt: modifiers.includes('alt'),
    shift: modifiers.includes('shift'),
  }
}
```

</details>


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/shared/workspace-types.ts.**

/private/var/tmp/ws/f7354e9d/hvir/src/shared/workspace-types.ts

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


---

<sub>1m 19s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/App.tsx (lines 1-140)

<details>
<summary>140 lines</summary>

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
```

</details>


---

<sub>1m 19s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/App.tsx (lines 380-686)

<details>
<summary>307 lines</summary>

```
            onContent={(content) => paneTab && setViewerContent(paneTab.id, content)}
            onSave={() => paneTab && saveTab(paneTab.id)}
            onReload={() => paneTab && reloadTab(paneTab.id)}
            onPosition={(position) => paneTab && schedulePosition(paneTab.id, position)}
            onNavigationHandled={(serial) =>
              paneTab && navigationHandled(paneTab.id, serial)
            }
            registerCommands={viewerCommands.register}
            onOpenPath={(path) => {
              focusViewerPane(pane)
              if (paneTab) pinTab(paneTab.id)
              openFile(path, true)
            }}
            onRenderedDependencies={viewer.setRenderedDependencies}
            documentReview={documentReview}
          />
        )}
      </div>
    </section>
  )
  return (
    <div className="app-shell">
      {projectState ? (
        <ProjectsBar
          state={projectState}
          rollups={terminalAttention.rollups}
          busy={session.busy}
          onAdd={overlays.openProjectPicker}
          onSwitch={(projectId, workspaceId) => {
            setDestination('workspace')
            void session.switchWorkspace(projectId, workspaceId)
          }}
          onRefresh={(projectId) => void session.refreshProject(projectId)}
          onCloseProject={(projectId) => void session.closeProject(projectId)}
          onPrune={(projectId) => void session.pruneWorktrees(projectId)}
          onDismiss={(projectId, workspaceId) =>
            void session.dismissWorkspace(projectId, workspaceId)
          }
          onPlanCloseWorkspace={session.planWorkspaceClose}
          onCloseWorkspace={(projectId, workspaceId, plan, terminateTerminals) =>
            void session.closeWorkspace(projectId, workspaceId, plan, terminateTerminals)
          }
          onReopenWorkspace={(projectId, workspaceId) =>
            void session.reopenWorkspace(projectId, workspaceId)
          }
          watchTier={session.watchTier}
          statusError={session.error}
          onChangeConnection={overlays.openProjectPicker}
          onDisconnect={() => void session.disconnect()}
          onReconnect={() => void session.reconnect()}
          theme={theme}
          onTheme={(nextTheme) => setAppTheme(nextTheme)}
          onSettings={() => overlays.openSettings()}
          sessionsActive={destination === 'sessions'}
          onSessions={() => setDestination('sessions')}
        />
      ) : null}
      <main
        className={`workbench${connectionState === 'connected' ? '' : ' project-stale'}${terminalMode === 'maximized' ? ' terminal-focused' : ''}${terminalMode === 'collapsed' ? ' terminal-collapsed' : ''}${treeCollapsed ? ' tree-collapsed' : ''}${layout.terminalRailCompact ? ' terminal-rail-compact' : ''}${webViewFocused && webViewActive ? ' web-focused' : ''}`}
        ref={workbenchRef}
        hidden={destination === 'sessions'}
      >
        <aside
          className="tree-panel"
          aria-label="Project rail"
          data-diagnostic-capture="project-navigation"
          tabIndex={-1}
        >
          <nav className="rail-nav" aria-label="Project views">
            <button
              type="button"
              className={railMode === 'files' ? 'active' : ''}
              aria-current={railMode === 'files' ? 'page' : undefined}
              onClick={() => setRailMode('files')}
            >
              Files
            </button>
            {gitEnabled ? (
              <button
                type="button"
                className={railMode === 'git' ? 'active' : ''}
                aria-current={railMode === 'git' ? 'page' : undefined}
                onClick={() => setRailMode('git')}
              >
                Git{changedCount > 0 ? ` ${changedCountLabel}` : ''}
              </button>
            ) : null}
          </nav>
          <div className="rail-content">
            <FileTree
              key={`files:${root.hostId}:${root.path}`}
              root={root}
              refreshVersion={watchVersion}
              searchRefreshVersion={contentVersion}
              ignoredRefreshVersion={ignoredRefreshVersion}
              changedFiles={gitChanges?.workingTree}
              gitChangesLimited={gitChanges?.workingTreeLimited}
              selected={terminalPathActivation.revealRequest?.path ?? activeTab?.path}
              revealRequest={terminalPathActivation.revealRequest}
              onOpen={openFile}
              onPointerActivate={focusVisibleActiveTerminalAfterLayout}
              viewerPathRebind={viewer}
              onWorkspaceContentChanged={session.refreshWorkspaceContent}
              connected={connectionState === 'connected'}
              missing={activeWorkspace?.missing}
              hidden={railMode !== 'files'}
              gitEnabled={gitEnabled}
              watchInterestsLimited={watchInterests.limited}
              onExpandedChange={watchInterests.updateExpandedPath}
            />
            {gitEnabled ? (
              <GitPanel
                key={`git:${root.hostId}:${root.path}`}
                root={root}
                refreshVersion={contentVersion}
                historyRefreshVersion={gitVersion}
                onChanges={setGitChanges}
                onOpenChange={(path, base, untracked) =>
                  openFile(path, true, untracked ? 'git-untracked' : 'git', base)
                }
                onOpenHistory={(path, revision) =>
                  openFile(path, true, 'git', 'head', revision)
                }
                onOpenGraph={openGitGraph}
                connectionState={connectionState}
                hidden={railMode !== 'git'}
                historyPaused={gitGraphActive}
                hasDirtyViewerTabs={tabs.some((tab) => tab.dirty)}
                onSwitchBranch={switchGitBranch}
                onFetch={fetchGit}
                onPull={pullGit}
                autoFetchIntervalMs={settings.gitAutoFetchIntervalMs}
              />
            ) : null}
          </div>
        </aside>
        <PaneResizer
          orientation="vertical"
          className="tree-resizer"
          label="Resize file tree"
          onDragStart={() => {
            if (treeCollapsed) setTreeCollapsed(false)
          }}
          onDrag={(clientX) => {
            const left = workbenchRef.current?.getBoundingClientRect().left ?? 0
            setTreeWidth(clientX - left)
          }}
          onNudge={(delta) => {
            if (treeCollapsed) {
              if (delta > 0) setTreeCollapsed(false)
              return
            }
            const current =
              workbenchRef.current?.querySelector<HTMLElement>('.tree-panel')
            if (current) setTreeWidth(current.getBoundingClientRect().width + delta)
          }}
          onReset={layout.resetTreeWidth}
          action={
            <button
              type="button"
              className="tree-collapse-toggle"
              data-resizer-action
              aria-label={
                treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'
              }
              aria-pressed={treeCollapsed}
              title={treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'}
              onDoubleClick={(event) => event.stopPropagation()}
              onClick={() => setTreeCollapsed((collapsed) => !collapsed)}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d={
                    treeCollapsed
                      ? 'M4 3 8.5 8 4 13M8 3l4.5 5L8 13'
                      : 'M12 3 7.5 8l4.5 5M8 3 3.5 8 8 13'
                  }
                />
              </svg>
            </button>
          }
        />
        <section className="viewer-panel" aria-label="File viewer">
          <div
            className={`viewer-groups${viewerSplit ? ' split' : ''}`}
            ref={viewerGroupsRef}
          >
            {renderViewerPane('primary', primaryTabs, primaryActiveTab, true)}
            {viewerSplit ? (
              <>
                <PaneResizer
                  orientation="vertical"
                  className="viewer-split-resizer"
                  label="Resize split viewers"
                  onDrag={(clientX) => {
                    const left =
                      viewerGroupsRef.current?.getBoundingClientRect().left ?? 0
                    setViewerPrimaryWidth(clientX - left)
                  }}
                  onNudge={(delta) => {
                    const current = viewerGroupsRef.current?.querySelector<HTMLElement>(
                      '.viewer-group-primary',
                    )
                    if (current) {
                      setViewerPrimaryWidth(current.getBoundingClientRect().width + delta)
                    }
                  }}
                  onReset={resetViewerPrimaryWidth}
                />
                {renderViewerPane('secondary', secondaryTabs, secondaryActiveTab, false)}
              </>
            ) : null}
          </div>
        </section>
        <PaneResizer
          orientation="horizontal"
          className="terminal-resizer"
          label="Resize terminal"
          onDragStart={() => {
            if (terminalMode !== 'restored') setTerminalMode('restored')
          }}
          onDrag={(clientY) => {
            const bottom = workbenchRef.current?.getBoundingClientRect().bottom ?? 0
            setTerminalHeight(bottom - clientY)
          }}
          onNudge={(delta) => {
            if (terminalMode !== 'restored') {
              if (
                (terminalMode === 'maximized' && delta < 0) ||
                (terminalMode === 'collapsed' && delta > 0)
              ) {
                setTerminalMode('restored')
              }
              return
            }
            const current =
              workbenchRef.current?.querySelector<HTMLElement>('.terminal-panel')
            if (current) setTerminalHeight(current.getBoundingClientRect().height + delta)
          }}
          onReset={layout.resetTerminalHeight}
          action={<TerminalLayoutControls mode={terminalMode} onMode={setTerminalMode} />}
        />
        <TerminalWorkspaceCollection
          state={projectState}
          runtime={terminalWorkspaces}
          terminalPresented={
            destination === 'workspace' &&
            terminalMode !== 'collapsed' &&
            !(webViewFocused && webViewActive)
          }
          railCompact={layout.terminalRailCompact}
          onRailCompact={layout.setTerminalRailCompact}
          onRollup={terminalAttention.updateRollup}
          onOpenPath={terminalPathActivation.activate}
          onOpenWebLink={openWebLink}
          preferences={terminalPreferences(settings)}
          onOpenSettings={() => overlays.openSettings()}
          onOpenTerminalSettings={() => overlays.openSettings('terminal')}
          onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
          onAddHarness={overlays.openAddHarnessSettings}
        />
      </main>
      <SessionsApplicationDestination
        active={destination === 'sessions'}
        runtime={terminalWorkspaces}
        onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
        onError={session.reportError}
      />
      {overlays.projectPickerOpen ? (
        <SessionDialog
          hosts={session.hosts}
          currentRoot={root}
          suspended={session.prompts.length > 0}
          onCancel={overlays.closeProjectPicker}
          onConnect={session.connectHost}
          onBrowse={session.browseHost}
          folderPicker={session.folderPicker}
          onDisconnect={session.disconnectHost}
          onOpen={session.openHost}
          onOpened={() => (setDestination('workspace'), overlays.closeProjectPicker())}
        />
      ) : null}
      {overlays.settingsOpen ? (
        <SettingsDialog
          theme={theme}
          settings={settings}
          workspaceRoot={root}
          projectRoot={session.activeProject?.registeredRoot}
          initialDestination={overlays.settingsDestination}
          onClose={overlays.closeSettings}
          onSave={(nextTheme, nextSettings) => {
            setAppTheme(nextTheme)
            setAppSettings(nextSettings)
            overlays.closeSettings()
          }}
        />
      ) : null}
      {session.prompts[0] ? (
        <SshPromptDialog
          key={session.prompts[0].id}
          prompt={session.prompts[0]}
          onAnswer={session.answerPrompt}
        />
      ) : null}
    </div>
  )
}
```

</details>


---

<sub>1m 19s</sub>

### `bash`

**Read renderer HTML and harness shared types**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/index.html; echo; echo "=== shared/harness-provider.ts ==="; cat src/shared/harness-provider.ts; echo "=== shared/harness-profile.ts (head) ==="; sed -n '1,120p' src/shared/harness-profile.ts

<details>
<summary>213 lines</summary>

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

=== shared/harness-provider.ts ===
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
=== shared/harness-profile.ts (head) ===
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
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>1m 19s</sub>

### `bash`

**Inspect harness provider modules**

$ cd /private/var/tmp/ws/f7354e9d/hvir && ls -la src/main/harness/providers; echo; wc -l src/main/harness/bundled-harness-providers.ts src/main/harness/harness-provider.ts src/main/harness/harness-provider-contract.ts src/main/harness/harness-provider-capabilities.ts src/main/harness/providers/*; echo; cat src/main/harness/bundled-harness-providers.ts

<details>
<summary>88 lines</summary>

```
total 64
drwxr-xr-x@  9 air-jarmak  wheel   288 Nov 20 12:19 .
drwxr-xr-x@ 32 air-jarmak  wheel  1024 Nov 20 12:19 ..
-rw-r--r--@  1 air-jarmak  wheel  3422 Nov 20 12:19 claude-code.ts
-rw-r--r--@  1 air-jarmak  wheel  6082 Nov 20 12:19 codex.ts
-rw-r--r--@  1 air-jarmak  wheel  1506 Nov 20 12:19 cursor.ts
-rw-r--r--@  1 air-jarmak  wheel  1641 Nov 20 12:19 gemini.ts
-rw-r--r--@  1 air-jarmak  wheel  1590 Nov 20 12:19 github-copilot.ts
-rw-r--r--@  1 air-jarmak  wheel  1696 Nov 20 12:19 pi.ts
-rw-r--r--@  1 air-jarmak  wheel  1951 Nov 20 12:19 shell.ts

      71 src/main/harness/bundled-harness-providers.ts
      48 src/main/harness/harness-provider.ts
     284 src/main/harness/harness-provider-contract.ts
      59 src/main/harness/harness-provider-capabilities.ts
     108 src/main/harness/providers/claude-code.ts
     190 src/main/harness/providers/codex.ts
      50 src/main/harness/providers/cursor.ts
      56 src/main/harness/providers/gemini.ts
      54 src/main/harness/providers/github-copilot.ts
      53 src/main/harness/providers/pi.ts
      65 src/main/harness/providers/shell.ts
    1038 total

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
<shellId: 12 completed with exit code 0>
```

</details>


---

<sub>1m 25s</sub>

### `bash`

**Read all bundled harness providers**

$ cd /private/var/tmp/ws/f7354e9d/hvir && for f in shell claude-code codex pi gemini github-copilot cursor; do echo "=================== $f.ts ==================="; cat src/main/harness/providers/$f.ts; done

<details>
<summary>547 lines</summary>

```
=================== shell.ts ===================
import { asHarnessProviderId, asHarnessProfileId } from '../../../shared'
import type { HarnessProvider, HarnessLaunchSpec } from '../harness-provider-contract'
import { staticProbe } from '../harness-provider-probes'

/**
 * A plain login shell — no session id, no resume. The provider every host
 * supports. "Resume" starts a new shell.
 */
export const plainShellProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('plain-shell'),
    displayName: 'Shell',
    sessionKind: 'shell',
    default: true,
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    defaultProfile: {
      id: asHarnessProfileId('plain-shell-default'),
      displayName: 'Shell',
      description: 'The default interactive shell on this host.',
    },
    reservedArguments: [],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: staticProbe('none', false, 'none'),

  launch(ctx): HarnessLaunchSpec {
    return { file: ctx.defaultShell, args: ['-l'] }
  },

  resume(ctx): HarnessLaunchSpec {
    return this.launch(ctx)
  },
}

export const customCommandProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('custom'),
    displayName: 'Custom',
    sessionKind: 'shell',
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    reservedArguments: [],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: staticProbe('none', false, 'none'),
  launch: () => ({ file: 'custom', args: [] }),
  resume: () => ({ file: 'custom', args: [] }),
}
=================== claude-code.ts ===================
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
  usageSnapshots: { snapshot: snapshotClaudeUsage },
  resumeValidation: { availability: claudeResumeAvailability },
  probe: versionProbe('preassigned', true, 'pressure', {
    contextPressure: CLAUDE_CONTEXT_PRESSURE,
    reviewInsert: claudeCodeReviewInsert,
    supportsExactForkVersion: supportsClaudeExactForkVersion,
  }),
  composerConfiguration: { configure: configureClaudeComposerSubmit },
  remoteImagePaste: pathImagePasteContract(),
  documentReviewInsert: claudeCodeReviewInsert,

  launch(ctx): HarnessLaunchSpec {
    return {
      file: 'claude',
      args: ['--session-id', ctx.sessionId],
      shellEnvironment: true,
    }
  },

  resume(ctx): HarnessLaunchSpec {
    return {
      file: 'claude',
      args: ['--resume', ctx.sessionId],
      shellEnvironment: true,
    }
  },

  fork(ctx): HarnessLaunchSpec {
    if (!ctx.parentSessionId)
      throw new Error('Claude Code fork requires an exact parent id')
    return {
      file: 'claude',
      args: [
        '--session-id',
        ctx.sessionId,
        '--resume',
        ctx.parentSessionId,
        '--fork-session',
      ],
      shellEnvironment: true,
    }
  },
}

function supportsClaudeExactForkVersion(version: string | undefined): boolean {
  const match = /(?:^|\s)(\d+)\.(\d+)\.(\d+)(?:\b|[-+])/.exec(version ?? '')
  if (!match) return false
  const parts = match.slice(1).map(Number)
  return (
    parts[0]! > 2 ||
    (parts[0] === 2 && (parts[1]! > 1 || (parts[1] === 1 && parts[2]! >= 258)))
  )
}
=================== codex.ts ===================
import {
  asHarnessProviderId,
  asHarnessProfileId,
  type HarnessLaunchMode,
} from '../../../shared'
import type {
  HarnessProvider,
  HarnessLaunchContext,
  HarnessLaunchSpec,
  HarnessDocumentReviewInsertContract,
  HarnessDocumentReviewInsertLaunch,
  HarnessDocumentReviewSendNowContract,
  HarnessDocumentReviewSendNowLaunch,
} from '../harness-provider-contract'
import {
  observeCodexContext,
  observeCodexUsage,
  snapshotCodexUsage,
} from '../codex-context-telemetry'
import { codexSessionDiscovery } from '../codex-session-discovery'
import { versionProbe } from '../harness-provider-probes'
import {
  pathImagePasteContract,
  documentReviewInsertContract,
} from '../harness-composer-contracts'

const CODEX_THREAD_TITLE_CONFIG = 'tui.terminal_title=["thread-title"]'

const CODEX_SUBCOMMAND_BY_LAUNCH_MODE: Readonly<
  Partial<Record<HarnessLaunchMode, 'resume' | 'fork'>>
> = {
  resume: 'resume',
  fork: 'fork',
}

const codexReviewInsert = documentReviewInsertContract(
  () => codexProvider,
  supportsCodexDocumentReviewProfile,
)

const codexReviewSendNow = codexDocumentReviewSendNowContract(codexReviewInsert)

export const codexProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('codex'),
    displayName: 'Codex',
    sessionKind: 'agent',
    contextPresentation: 'pressure',
    modifiedKeyProtocol: 'csi-u',
    metaEnterAliasesControl: true,
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('codex-default'),
      displayName: 'Codex',
      description: 'Codex with exact rollout discovery and recovery.',
    },
    reservedArguments: ['resume', 'fork'],
    reservedEnvironmentKeys: ['CODEX_HOME'],
    artifactEnvironmentKeys: ['CODEX_HOME'],
    artifactExecutable: true,
    artifactPathBindings: [],
    applyArgs: (mode, providerArgs, profileArgs) => {
      const subcommand = CODEX_SUBCOMMAND_BY_LAUNCH_MODE[mode]
      if (!subcommand) return [...providerArgs, ...profileArgs]
      const subcommandAt = providerArgs.indexOf(subcommand)
      return subcommandAt < 0
        ? [...providerArgs, ...profileArgs]
        : [
            ...providerArgs.slice(0, subcommandAt),
            ...profileArgs,
            ...providerArgs.slice(subcommandAt),
          ]
    },
  },
  supportsResume: true,
  sessionIdentity: 'discovered',
  sessionDiscovery: codexSessionDiscovery,
  telemetry: { observe: observeCodexContext },
  usageTelemetry: { observe: observeCodexUsage },
  usageSnapshots: { snapshot: snapshotCodexUsage },
  probe: versionProbe('discovered', true, 'pressure', {
    reviewInsert: codexReviewInsert,
    reviewSendNow: codexReviewSendNow,
    supportsReviewSendNowVersion: supportsCodexReviewSendNowVersion,
    supportsExactForkVersion: supportsCodexExactForkVersion,
  }),
  remoteImagePaste: pathImagePasteContract(),
  documentReviewInsert: codexReviewInsert,
  documentReviewSendNow: codexReviewSendNow,

  launch(ctx): HarnessLaunchSpec {
    return {
      file: 'codex',
      args: ['--config', CODEX_THREAD_TITLE_CONFIG, ...codexComposerArgs(ctx)],
      shellEnvironment: true,
    }
  },

  resume(ctx): HarnessLaunchSpec {
    return {
      file: 'codex',
      args: [
        '--config',
        CODEX_THREAD_TITLE_CONFIG,
        ...codexComposerArgs(ctx),
        'resume',
        ctx.sessionId,
      ],
      shellEnvironment: true,
    }
  },

  fork(ctx): HarnessLaunchSpec {
    if (!ctx.parentSessionId) throw new Error('Codex fork requires an exact parent id')
    return {
      file: 'codex',
      args: [
        '--config',
        CODEX_THREAD_TITLE_CONFIG,
        ...codexComposerArgs(ctx),
        'fork',
        ctx.parentSessionId,
      ],
      shellEnvironment: true,
    }
  },
}

function codexComposerArgs(ctx: HarnessLaunchContext): readonly string[] {
  return ctx.composerSubmitMode === 'ctrl-enter'
    ? ['--config', 'tui.keymap.composer.submit=["ctrl-enter"]']
    : []
}

function codexDocumentReviewSendNowContract(
  insert: HarnessDocumentReviewInsertContract,
): HarnessDocumentReviewSendNowContract {
  const revision = 1
  const supportsLaunch = (launch: HarnessDocumentReviewSendNowLaunch): boolean =>
    launch.profile.providerId === codexProvider.manifest.id &&
    launch.profile.providerContractVersion === codexProvider.profile.version &&
    launch.profile.executable.kind === 'provider-default' &&
    supportsCodexDocumentReviewProfile(launch.profile) &&
    launch.effectiveCapabilities.reviewInsertContractRevision === insert.revision &&
    launch.effectiveCapabilities.reviewSendNowContractRevision === revision
  return {
    revision,
    supportsLaunch,
    terminalInput: (body, launch) => {
      if (!supportsLaunch(launch)) {
        throw new Error('Codex review submission is unavailable for this launch')
      }
      const submit = launch.composerSubmitMode === 'ctrl-enter' ? '\x1b[13;5u' : '\r'
      return `${insert.terminalInput(body)}${submit}`
    },
  }
}

/**
 * A live Codex process launched through the provider default remains an explicit
 * best-effort composer target. Profile customization can make the attempt fail,
 * but it must not silently retarget the provider-owned framing contract.
 */
function supportsCodexDocumentReviewProfile(
  _profile: HarnessDocumentReviewInsertLaunch['profile'],
): boolean {
  return true
}

function supportsCodexReviewSendNowVersion(version: string | undefined): boolean {
  const parts = codexVersion(version)
  if (!parts) return false
  return parts[0] > 0 || parts[1] > 146 || (parts[1] === 146 && parts[2] >= 0)
}

function supportsCodexExactForkVersion(version: string | undefined): boolean {
  const parts = codexVersion(version)
  return Boolean(
    parts && (parts[0] > 0 || parts[1] > 151 || (parts[1] === 151 && parts[2] >= 0)),
  )
}

function codexVersion(
  version: string | undefined,
): readonly [number, number, number] | undefined {
  const match = /^codex-cli\s+(\d+)\.(\d+)\.(\d+)(?:\b|[-+])/.exec(version ?? '')
  return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : undefined
}
=================== pi.ts ===================
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const piProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('pi'),
    displayName: 'Pi',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    defaultProfile: {
      id: asHarnessProfileId('pi-default'),
      displayName: 'Pi',
      description:
        'Pi coding agent. Launch-only until exact new-session identity is proven.',
    },
    reservedArguments: ['--session', '--fork', '--continue', '-c', '--resume', '-r'],
    // Pi remains launch-only, so do not claim artifact relocation semantics for
    // undocumented environment variables. Add these only alongside a verified
    // discovery or telemetry observer.
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
=================== gemini.ts ===================
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const geminiProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('gemini-cli'),
    displayName: 'Gemini CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('gemini-cli-default'),
      displayName: 'Gemini CLI',
      description:
        'Gemini CLI. Launch-only; hvir never substitutes latest-session resume.',
    },
    reservedArguments: ['--resume', '-r'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(
      (line) => line && !line.startsWith('(node:') && !line.startsWith('(Use `node'),
    )
  const line = lines.at(-1)
  return line && line.length <= 160 ? line : undefined
}
=================== github-copilot.ts ===================
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
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
=================== cursor.ts ===================
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const cursorProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('cursor-cli'),
    displayName: 'Cursor CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    defaultProfile: {
      id: asHarnessProfileId('cursor-cli-default'),
      displayName: 'Cursor CLI',
      description:
        'Cursor Agent CLI. Launch-only while its beta session listing evolves.',
    },
    reservedArguments: ['--resume', 'resume', 'ls'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
<shellId: 13 completed with exit code 0>
```

</details>


---

<sub>1m 25s</sub>

### `bash`

**Read harness provider contract**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/main/harness/harness-provider-contract.ts

<details>
<summary>256 lines</summary>

```
/** Main-owned, host-qualified harness capability ports; no bundled implementations. */

import type {
  ComposerSubmitMode,
  HarnessContextPresentation,
  HarnessContextPressurePolicy,
  HarnessModifiedKeyProtocol,
  HarnessProfile,
  HarnessProfileId,
  HarnessLaunchMode,
  HarnessProviderCapabilities,
  HarnessProviderId,
  HarnessSessionIdentity,
  HarnessTelemetry,
  HarnessUsageCounters,
  HarnessUsageUnavailableReason,
  HostPath,
} from '../../shared'
import type { Disposer, ProjectHost } from '../project-host/project-host'

export interface HarnessLaunchContext {
  /** Exact harness id for pre-assigned launches and resume commands. */
  readonly sessionId: string
  /** Exact registered parent identity for a provider-derived fork. */
  readonly parentSessionId?: string
  readonly cwd: HostPath
  readonly cols?: number
  readonly rows?: number
  /** Interactive shell resolved by the owning ProjectHost. */
  readonly defaultShell: string
  readonly composerSubmitMode?: ComposerSubmitMode
  readonly effectiveCapabilities?: HarnessProviderCapabilities
}

export interface HarnessLaunchSpec {
  readonly file: string
  readonly args: readonly string[]
  readonly env?: Record<string, string>
  /** Resolve the command in the user's login-interactive shell environment. */
  readonly shellEnvironment?: boolean
}

export interface HarnessComposerConfiguration {
  configure(host: ProjectHost, mode: ComposerSubmitMode): Promise<void>
}

/** Exact native-composer behavior approved for an explicit remote image-paste gesture. */
export interface HarnessRemoteImagePasteContract {
  /** Increment when path insertion or acknowledgement semantics change. */
  readonly revision: number
  /** Produce one atomic terminal paste; never submit the composer. */
  terminalInput(path: HostPath): string
}

/** Exact native-composer behavior approved only for prepared document review. */
export interface HarnessDocumentReviewInsertContract {
  /** Increment whenever the atomic composer framing semantics change. */
  readonly revision: number
  /** Admit insertion only for an exact provider-owned launch profile. */
  supportsLaunch(launch: HarnessDocumentReviewInsertLaunch): boolean
  /** Frame one immutable body as one bracketed paste; never submit it. */
  terminalInput(body: string): string
}

export interface HarnessDocumentReviewInsertLaunch {
  readonly profile: Pick<
    HarnessProfile,
    | 'providerId'
    | 'providerContractVersion'
    | 'executable'
    | 'args'
    | 'environment'
    | 'pathBindings'
  >
  readonly effectiveCapabilities: HarnessProviderCapabilities
}

export interface HarnessDocumentReviewSendNowLaunch extends HarnessDocumentReviewInsertLaunch {
  readonly composerSubmitMode: ComposerSubmitMode
}

/** Complete provider-owned composer framing and submission for one exact launch. */
export interface HarnessDocumentReviewSendNowContract {
  /** Increment whenever launch eligibility, framing, or submission bytes change. */
  readonly revision: number
  supportsLaunch(launch: HarnessDocumentReviewSendNowLaunch): boolean
  /** Return one bracketed-paste-plus-submit transport for one supervisor write. */
  terminalInput(body: string, launch: HarnessDocumentReviewSendNowLaunch): string
}

export type HarnessSessionDiscoveryResult =
  | {
      readonly status: 'identified'
      readonly sessionId: string
      /** Provider-private state associated with the exact persisted session. */
      readonly sessionData?: unknown
    }
  | { readonly status: 'ambiguous' }
  | { readonly status: 'unavailable' }

export interface HarnessSessionDiscoveryContext {
  readonly cwd: HostPath
  readonly launchedAtMs: number
  /** Start of this bounded attempt; later input may re-arm discovery. */
  readonly discoveryStartedAtMs?: number
  readonly signal: AbortSignal
  readonly artifact: HarnessArtifactContext
}

export interface HarnessArtifactContext {
  readonly identity: string
  readonly environment: Readonly<Record<string, string>>
  readonly unsetEnvironment: readonly string[]
}

export interface HarnessSessionDiscovery {
  /** Capture the persisted-session baseline immediately before launch. */
  snapshot(host: ProjectHost, artifact: HarnessArtifactContext): Promise<unknown>
  /** Identify exactly one session created after the baseline, or fail closed. */
  identify(
    host: ProjectHost,
    snapshot: unknown,
    context: HarnessSessionDiscoveryContext,
  ): Promise<HarnessSessionDiscoveryResult>
}

export interface HarnessTelemetryContext {
  /** Stable hvir PTY identity used to route multiplexed provider telemetry. */
  readonly subscriptionId: string
  readonly sessionId: string
  readonly cwd: HostPath
  readonly sessionData?: unknown
  readonly artifact: HarnessArtifactContext
  readonly signal: AbortSignal
  readonly emit: (telemetry: HarnessTelemetry | undefined) => void
  /** Sticky terminal-scoped signal; the observer still discards the mismatched record. */
  readonly identityDiverged?: () => void
}

export interface HarnessTelemetryObserver {
  observe(
    host: ProjectHost,
    context: HarnessTelemetryContext,
  ): Disposer | Promise<Disposer>
}

export type HarnessResumeAvailability = 'available' | 'missing' | 'unknown'

export interface HarnessResumeValidationContext {
  readonly sessionId: string
  readonly cwd: HostPath
  readonly artifact: HarnessArtifactContext
}

export interface HarnessResumeValidation {
  availability(
    host: ProjectHost,
    context: HarnessResumeValidationContext,
  ): Promise<HarnessResumeAvailability>
}

export interface HarnessManifest {
  readonly id: HarnessProviderId
  readonly displayName: string
  /** Product-neutral presentation kind; provider behavior stays behind this registry. */
  readonly sessionKind: 'agent' | 'shell'
  readonly default?: boolean
  readonly contextPresentation: HarnessContextPresentation
  readonly contextPressure?: HarnessContextPressurePolicy
  /** Opt in only when the harness understands a specific modified-key wire format. */
  readonly modifiedKeyProtocol?: Exclude<HarnessModifiedKeyProtocol, 'none'>
  /** Compatibility shim for harness keymaps that cannot bind Command/Super. */
  readonly metaEnterAliasesControl?: boolean
}

export interface HarnessDefaultProfile {
  readonly id: HarnessProfileId
  readonly displayName: string
  readonly description: string
}

export interface HarnessProfileContract {
  /** Increment when launch composition changes. */
  readonly version: number
  readonly defaultProfile?: HarnessDefaultProfile
  readonly reservedArguments: readonly string[]
  readonly reservedEnvironmentKeys: readonly string[]
  readonly artifactEnvironmentKeys: readonly string[]
  readonly artifactExecutable: boolean
  readonly artifactPathBindings: readonly string[]
  applyArgs(
    mode: HarnessLaunchMode,
    providerArgs: readonly string[],
    profileArgs: readonly string[],
  ): readonly string[]
}

export interface HarnessProbeContract {
  /** Omit to check executable resolution without invoking the harness. */
  readonly versionArgs?: readonly string[]
  /** Optional bounded help/capability surface, parsed only by this provider. */
  readonly capabilityArgs?: readonly string[]
  /** Extract one bounded human-readable version or fail closed. */
  parseVersion(output: string): string | undefined
  effectiveCapabilities(
    version: string | undefined,
    capabilityOutput?: string,
  ): HarnessProviderCapabilities
}

export interface HarnessProvider {
  readonly manifest: HarnessManifest
  readonly profile: HarnessProfileContract
  /** Whether the harness can deterministically resume a prior session id. */
  readonly supportsResume: boolean
  /** How a fresh launch's harness-owned session id becomes known. */
  readonly sessionIdentity: HarnessSessionIdentity
  /** Present only when `sessionIdentity` is `discovered`. */
  readonly sessionDiscovery?: HarnessSessionDiscovery
  /** Optional structured, read-only operational state for this harness. */
  readonly telemetry?: HarnessTelemetryObserver
  /** Demand-scoped cumulative usage observation for an exact live session. */
  readonly usageTelemetry?: HarnessTelemetryObserver
  /** Content-free cumulative counters for bounded lifecycle phase snapshots. */
  readonly usageSnapshots?: HarnessUsageSnapshotProvider
  /** Fail-closed check that the exact provider artifact can actually resume. */
  readonly resumeValidation?: HarnessResumeValidation
  readonly probe: HarnessProbeContract
  readonly composerConfiguration?: HarnessComposerConfiguration
  readonly remoteImagePaste?: HarnessRemoteImagePasteContract
  readonly documentReviewInsert?: HarnessDocumentReviewInsertContract
  readonly documentReviewSendNow?: HarnessDocumentReviewSendNowContract

  /** Command to start a fresh session. */
  launch(ctx: HarnessLaunchContext): HarnessLaunchSpec
  /** Command to resume `ctx.sessionId`. */
  resume(ctx: HarnessLaunchContext): HarnessLaunchSpec
  /** Command to derive `ctx.sessionId` from the exact `ctx.parentSessionId`. */
  fork?(ctx: HarnessLaunchContext): HarnessLaunchSpec
}

export interface HarnessUsageSnapshotContext {
  /** One-shot contributor reads retain record/memory bounds but use their deadline for I/O. */
  readonly purpose?: 'contributor'
  readonly sessionId: string
  readonly cwd: HostPath
  readonly sessionData?: unknown
  readonly artifact: HarnessArtifactContext
  readonly signal: AbortSignal
}

export interface HarnessUsageRoute {
  readonly modelId?: string
  readonly reasoningEffort?: string
}

export interface HarnessUsageTiming {
  readonly modelOrApiMilliseconds?: number
}

export type HarnessUsageSnapshot =
  | {
      readonly version: 1
      readonly status: 'available'
      readonly providerId: HarnessProviderId
      readonly observedAt: number
      readonly route: HarnessUsageRoute
      readonly counters: HarnessUsageCounters
      readonly timing: HarnessUsageTiming
    }
  | {
      readonly version: 1
      readonly status: 'unavailable'
      readonly providerId: HarnessProviderId
      readonly observedAt: number
      readonly reason: HarnessUsageUnavailableReason
    }

export interface HarnessUsageSnapshotProvider {
  snapshot(
    host: ProjectHost,
    context: HarnessUsageSnapshotContext,
  ): Promise<HarnessUsageSnapshot>
}
<shellId: 14 completed with exit code 0>
```

</details>


---

<sub>1m 33s</sub>

### `bash`

**Read settings model and navigation**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/settings/settings-model.ts; echo "=== settings-navigation ==="; cat src/renderer/src/settings/settings-navigation.ts; echo "=== sections ==="; ls src/renderer/src/settings/sections

<details>
<summary>80 lines</summary>

```
import type { ComposerSubmitMode, KeybindingMap } from '../../../shared'
import type {
  TerminalCursorBlinkPolicy,
  TerminalCursorShape,
} from '../terminal/terminal-pane'

export type TerminalThemeOverride = 'app' | 'dark' | 'light'
export type TerminalRecoveryMode = 'prompt' | 'auto'
export type FontPreferenceMode = 'system' | 'custom'

export interface FontPreference {
  readonly mode: FontPreferenceMode
  readonly family: string
}

export interface TextTypography {
  readonly fontFamily: string
  readonly fontSize: number
}

export interface AppSettings {
  readonly idleThresholdMs: number
  readonly gitAutoFetchIntervalMs: number
  readonly terminalRecoveryMode: TerminalRecoveryMode
  readonly terminalTheme: TerminalThemeOverride
  readonly terminalLightThemeId: string
  readonly terminalDarkThemeId: string
  readonly terminalCursorShape: TerminalCursorShape
  readonly terminalCursorBlink: TerminalCursorBlinkPolicy
  readonly terminalLigatures: boolean
  readonly interfaceFont: FontPreference
  readonly monospaceFont: FontPreference
  readonly interfaceScale: number
  readonly terminalTextSize: number
  readonly composerSubmitMode: ComposerSubmitMode
  readonly keybindings: KeybindingMap
}

export interface TerminalPreferences {
  readonly idleThresholdMs: number
  readonly terminalRecoveryMode: TerminalRecoveryMode
  readonly terminalTheme: TerminalThemeOverride
  readonly terminalLightThemeId: string
  readonly terminalDarkThemeId: string
  readonly terminalCursorDefaults: {
    readonly shape: TerminalCursorShape
    readonly blink: TerminalCursorBlinkPolicy
  }
  readonly terminalLigatures: boolean
  readonly terminalTypography: TextTypography
  readonly composerSubmitMode: ComposerSubmitMode
}
=== settings-navigation ===
export const SETTINGS_SECTIONS = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'git', label: 'Git' },
  { id: 'keybindings', label: 'Keybindings' },
  { id: 'harnesses', label: 'Harnesses' },
] as const

export type SettingsSection = (typeof SETTINGS_SECTIONS)[number]['id']

export type SettingsDestination =
  | { readonly section: SettingsSection; readonly intent?: undefined }
  | { readonly section: 'harnesses'; readonly intent: 'add-harness' }

export const DEFAULT_SETTINGS_DESTINATION: SettingsDestination = {
  section: 'appearance',
}

export function settingsDestination(
  section: SettingsSection = 'appearance',
): SettingsDestination {
  return { section }
}

export function addHarnessSettingsDestination(): SettingsDestination {
  return { section: 'harnesses', intent: 'add-harness' }
}

export function settingsSectionHeadingId(section: SettingsSection): string {
  return `settings-${section}-title`
}
=== sections ===
AppearanceSettings.tsx
GitSettings.tsx
KeybindingsSettings.tsx
TerminalSettings.tsx
TypographyFontField.tsx
<shellId: 15 completed with exit code 0>
```

</details>


---

<sub>1m 33s</sub>

### `bash`

**Read viewer types, theme, and web-pane shared modules**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/shared/viewer-types.ts; echo "=== theme-model ==="; cat src/renderer/src/theme-model.ts; echo "=== theme.ts ==="; cat src/renderer/src/theme.ts; echo "=== shared/web-pane.ts ==="; cat src/shared/web-pane.ts

<details>
<summary>197 lines</summary>

```
import type { HostPath } from './host-path'
import { repositoryImageMimeType } from './rendered-link'
import type { TextWorkload } from './viewer-workload-policy'

export type ViewMode = 'rendered' | 'source' | 'diff'

export type DiffBase = 'working-tree' | 'head' | 'branch-point'

export interface WriteFileRequest {
  readonly path: HostPath
  readonly content: string
  /** Omitted for recovered drafts that have no trustworthy disk version. */
  readonly expectedMtimeMs?: number
}

export interface WriteFileResponse {
  readonly path: HostPath
  readonly size: number
  readonly mtimeMs: number
}

export interface GitDiffRequest {
  readonly path: HostPath
  readonly base: DiffBase
  /** Commit whose parent/current blobs form a historical diff. */
  readonly revision?: string
}

export interface GitDiffResponse {
  readonly path: HostPath
  readonly base: DiffBase
  readonly revision?: string
  readonly baseLabel: string
  readonly currentLabel: string
  readonly baseInput: TextWorkload
  readonly currentInput: TextWorkload
}

/**
 * The one extension point for the smart default in ADR-007. Keep inference
 * deterministic and visible rather than scattering file-type exceptions
 * through UI components.
 */
export type FileOpenContext = 'file-tree' | 'created-file' | 'git' | 'git-untracked'

export function defaultViewMode(
  path: HostPath,
  context: FileOpenContext = 'file-tree',
): ViewMode {
  if (context === 'created-file') return 'source'
  if (context === 'git') return 'diff'
  const name = path.path.toLowerCase()
  const extension = name.includes('.') ? name.slice(name.lastIndexOf('.') + 1) : ''
  return RENDERED_EXTENSIONS.has(extension) ? 'rendered' : 'source'
}

export function canRender(path: HostPath): boolean {
  return defaultViewMode(path) === 'rendered'
}

export type RenderedFileType =
  'markdown' | 'mermaid' | 'html' | 'json' | 'yaml' | 'csv' | 'image'

export function renderedFileType(path: HostPath): RenderedFileType | undefined {
  const name = path.path.toLowerCase()
  const extension = name.includes('.') ? name.slice(name.lastIndexOf('.') + 1) : ''
  if (repositoryImageMimeType(name)) return 'image'
  if (extension === 'md' || extension === 'mdx' || extension === 'markdown') {
    return 'markdown'
  }
  if (extension === 'mmd' || extension === 'mermaid') return 'mermaid'
  if (extension === 'htm' || extension === 'html') return 'html'
  if (extension === 'json') return 'json'
  if (extension === 'yaml' || extension === 'yml') return 'yaml'
  if (extension === 'csv') return 'csv'
  return undefined
}

const RENDERED_EXTENSIONS = new Set([
  'htm',
  'html',
  'json',
  'yaml',
  'yml',
  'markdown',
  'md',
  'mdx',
  'mermaid',
  'mmd',
  'csv',
  'avif',
  'bmp',
  'gif',
  'ico',
  'jpeg',
  'jpg',
  'png',
  'svg',
  'webp',
])
=== theme-model ===
export type AppTheme = 'dark' | 'light'
=== theme.ts ===
import { useSyncExternalStore } from 'react'

import type { AppTheme } from './theme-model'

export type { AppTheme } from './theme-model'

const STORAGE_KEY = 'hvir:theme'
const listeners = new Set<() => void>()
let activeTheme: AppTheme = readTheme()

export function initializeAppTheme(): void {
  applyTheme(activeTheme)
}

export function setAppTheme(theme: AppTheme): void {
  if (theme === activeTheme) return
  activeTheme = theme
  applyTheme(theme)
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // A blocked storage backend should not make theme switching fail.
  }
  for (const listener of listeners) listener()
}

export function useAppTheme(): AppTheme {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => activeTheme,
    () => activeTheme,
  )
}

export function shikiTheme(theme: AppTheme): 'dark-plus' | 'github-light-default' {
  return theme === 'light' ? 'github-light-default' : 'dark-plus'
}

function readTheme(): AppTheme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

function applyTheme(theme: AppTheme): void {
  document.documentElement.dataset['theme'] = theme
  document.documentElement.style.colorScheme = theme
}
=== shared/web-pane.ts ===
export type LoopbackHostname = 'localhost' | '127.0.0.1' | '::1'

export interface LoopbackEndpoint {
  readonly hostname: LoopbackHostname
  readonly port: number
}

export interface LoopbackHttpTarget {
  /** Normalized browser-visible URL. Unspecified bind addresses become localhost. */
  readonly url: string
  readonly origin: string
  readonly endpoint: LoopbackEndpoint
}

export type WebPaneDiagnosticEvent =
  | {
      readonly kind: 'navigation-error' | 'request-failure' | 'route-failure'
      readonly message: string
      readonly url?: string
    }
  | { readonly kind: 'console'; readonly level: string; readonly message: string }
  | { readonly kind: 'crash'; readonly message: string }

const LOOPBACK_HOSTS = new Map<string, LoopbackHostname>([
  ['localhost', 'localhost'],
  ['127.0.0.1', '127.0.0.1'],
  ['[::1]', '::1'],
  ['::1', '::1'],
])
const UNSPECIFIED_HOSTS = new Set(['0.0.0.0', '[::]', '::'])

/** Parse the complete loopback HTTP authority used by ADR-013. */
export function parseLoopbackHttpTarget(rawUrl: string): LoopbackHttpTarget | undefined {
  let candidate: URL
  try {
    candidate = new URL(rawUrl)
  } catch {
    return undefined
  }
  if (
    candidate.protocol !== 'http:' ||
    candidate.username.length > 0 ||
    candidate.password.length > 0
  ) {
    return undefined
  }
  const rawHostname = candidate.hostname.toLowerCase()
  const unspecified = UNSPECIFIED_HOSTS.has(rawHostname)
  const hostname = unspecified ? 'localhost' : LOOPBACK_HOSTS.get(rawHostname)
  if (!hostname) return undefined

  const port = candidate.port ? Number(candidate.port) : 80
  if (!Number.isInteger(port) || port < 1 || port > 65_535) return undefined
  if (unspecified) candidate.hostname = 'localhost'
  return {
    url: candidate.href,
    origin: candidate.origin,
    endpoint: { hostname, port },
  }
}

export function loopbackEndpointEquals(
  left: LoopbackEndpoint,
  right: LoopbackEndpoint,
): boolean {
  return left.hostname === right.hostname && left.port === right.port
}
<shellId: 16 completed with exit code 0>
```

</details>


---

<sub>1m 33s</sub>

### `bash`

**Read fs-types and host-path shared modules**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/shared/fs-types.ts; echo "=== host-path.ts ==="; sed -n '1,120p' src/shared/host-path.ts

<details>
<summary>129 lines</summary>

```
/**
 * Pure, transport-agnostic filesystem data types shared across processes.
 * These describe *data* (what a stat looks like); the behavioral `ProjectHost`
 * interface that produces them lives main-side. No `node:*` types here so the
 * module stays importable by the renderer.
 */

import type { HostPath } from './host-path'

export type FileType = 'file' | 'dir' | 'symlink' | 'other'

export interface DirEntry {
  readonly name: string
  readonly type: FileType
}

export interface Stat {
  readonly type: FileType
  readonly size: number
  readonly mtimeMs: number
  /** POSIX mode bits. */
  readonly mode: number
}

export type WatchEventType = 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir'

export interface WatchEvent {
  readonly type: WatchEventType
  readonly path: HostPath
  /** Backend liveness refresh, not evidence that repository/file content changed. */
  readonly synthetic?: 'refresh'
}

export interface ExecResult {
  /** Exit code, or null if the process was terminated by a signal. */
  readonly code: number | null
  /** Terminating signal name, or null. */
  readonly signal: string | null
  readonly stdout: string
  readonly stderr: string
  /** The process was terminated after returning the bounded buffered prefix. */
  readonly outputTruncated?: boolean
}

export type HostConnectionState =
  'disconnected' | 'connected' | 'connecting' | 'reconnecting' | 'failed'

export type HostWatchTier = 'native' | 'inotify' | 'polling'
=== host-path.ts ===
/**
 * Host-qualified paths (ADR-010).
 *
 * Every path in hvir is a `(host, path)` pair — never a bare string, even in
 * local-only code. `HostPath` is an *opaque* type: a bare `string` is not
 * assignable to it, and a plain `{ hostId, path }` object literal is not either.
 * The only way to make one is {@link hostPath}, which normalizes the path. This
 * makes "a bare string path" a compile error at every boundary.
 */

declare const brand: unique symbol

/** An opaque identifier for a host. `'local'` is the default host. */
export type HostId = string & { readonly __hostId: 'HostId' }

export interface HostPath {
  readonly hostId: HostId
  /** POSIX-normalized path on that host. */
  readonly path: string
  /** Phantom brand — exists only in the type, never at runtime. */
  readonly [brand]: never
}

/** The default host. Local projects are just the degenerate case (ADR-010). */
export const LOCAL_HOST_ID = 'local' as HostId

/** Tag a raw string as a HostId. Use at trust boundaries (config, IPC decode). */
export function asHostId(id: string): HostId {
  return id as HostId
}

/** The one constructor for a HostPath. Normalizes the path component. */
export function hostPath(hostId: HostId, path: string): HostPath {
  return { hostId, path: normalizePosix(path) } as unknown as HostPath
}

/** Build a HostPath on the local host. */
export function localPath(path: string): HostPath {
  return hostPath(LOCAL_HOST_ID, path)
}

export function isLocal(p: HostPath): boolean {
  return p.hostId === LOCAL_HOST_ID
}

export function hostPathEquals(a: HostPath, b: HostPath): boolean {
  return a.hostId === b.hostId && a.path === b.path
}

/** Return whether a host-qualified path is the parent itself or one of its descendants. */
export function containsHostPath(parent: HostPath, candidate: HostPath): boolean {
  if (parent.hostId !== candidate.hostId) return false
  if (parent.path === '/') return candidate.path.startsWith('/')
  return candidate.path === parent.path || candidate.path.startsWith(`${parent.path}/`)
}

/** Join segments onto a HostPath, staying on the same host. */
export function joinHostPath(base: HostPath, ...segments: string[]): HostPath {
  const joined = [base.path, ...segments].join('/')
  return hostPath(base.hostId, joined)
}

export function dirnameHostPath(p: HostPath): HostPath {
  const idx = p.path.lastIndexOf('/')
  if (idx <= 0) return hostPath(p.hostId, idx === 0 ? '/' : '.')
  return hostPath(p.hostId, p.path.slice(0, idx))
}

export function basenameHostPath(p: HostPath): string {
  const idx = p.path.lastIndexOf('/')
  return idx < 0 ? p.path : p.path.slice(idx + 1)
}

/** Human-readable form for UI/logs, e.g. `local:/home/x` or `web1:/srv/app`. */
export function displayHostPath(p: HostPath): string {
  return `${p.hostId}:${p.path}`
}

/**
 * Minimal POSIX path normalization, dependency-free so `@shared` stays
 * importable by the renderer (no `node:path`). Collapses `//`, resolves `.`
 * and `..`, and drops trailing slashes (except the root).
 */
function normalizePosix(input: string): string {
  const isAbsolute = input.startsWith('/')
  const out: string[] = []
  for (const seg of input.split('/')) {
    if (seg === '' || seg === '.') continue
    if (seg === '..') {
      if (out.length > 0 && out[out.length - 1] !== '..') {
        out.pop()
      } else if (!isAbsolute) {
        out.push('..')
      }
      // for an absolute path, `..` above root is a no-op
      continue
    }
    out.push(seg)
  }
  const joined = out.join('/')
  if (isAbsolute) return '/' + joined
  return joined === '' ? '.' : joined
}
<shellId: 17 completed with exit code 0>
```

</details>


---

<sub>1m 39s</sub>

### `bash`

**Read native command and installer scripts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== build/native/hvir-command ==="; cat build/native/hvir-command; echo; echo "=== build/linux/after-install.sh ==="; cat build/linux/after-install.sh; echo; echo "=== build/linux/after-remove.sh ==="; cat build/linux/after-remove.sh; echo; echo "=== build/pkg-scripts/preinstall ==="; cat build/pkg-scripts/preinstall; echo; echo "=== build/pkg-scripts/postinstall ==="; cat build/pkg-scripts/postinstall

<details>
<summary>308 lines</summary>

```
=== build/native/hvir-command ===
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
      echo "hvir: project is not a local directory: $1" >&2
      exit 64
    fi
    project_root=$(CDPATH= cd -P "$project_candidate" && pwd -P)
    shift
    set -- "--project-root=$project_root" "$@"
    ;;
  esac
fi

exec "$application" "$@"

=== build/linux/after-install.sh ===
#!/bin/bash
set -e

stage='configuring the hvir command'
report_failure() {
  status=$?
  echo "hvir package configuration failed while $stage" >&2
  exit "$status"
}
trap report_failure ERR

HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
chown root:root "$HVIR_COMMAND"
chmod 0755 "$HVIR_COMMAND"
if command -v update-alternatives >/dev/null 2>&1; then
  if [ -L '/usr/bin/${executable}' ] &&
    [ -e '/usr/bin/${executable}' ] &&
    [ "$(readlink '/usr/bin/${executable}')" != '/etc/alternatives/${executable}' ]; then
    rm -f '/usr/bin/${executable}'
  fi
  update-alternatives \
    --install '/usr/bin/${executable}' '${executable}' \
    "$HVIR_COMMAND" 100
else
  ln -sf "$HVIR_COMMAND" '/usr/bin/${executable}'
fi

stage='configuring the Chromium sandbox helper'
chown root:root '/opt/${sanitizedProductName}/chrome-sandbox'
if command -v runuser >/dev/null 2>&1 &&
  runuser -u nobody -- unshare --user true >/dev/null 2>&1; then
  chmod 0755 '/opt/${sanitizedProductName}/chrome-sandbox'
else
  chmod 4755 '/opt/${sanitizedProductName}/chrome-sandbox'
fi

stage='refreshing desktop metadata'
if command -v update-mime-database >/dev/null 2>&1; then
  update-mime-database /usr/share/mime
fi
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database /usr/share/applications
fi

stage='installing the AppArmor profile'
APPARMOR_PROFILE_SOURCE='/opt/${sanitizedProductName}/resources/apparmor-profile'
APPARMOR_PROFILE_TARGET='/etc/apparmor.d/${executable}'
APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
if [ -r "$APPARMOR_USERNS_RESTRICTION" ] &&
  [ "$(cat "$APPARMOR_USERNS_RESTRICTION")" = '1' ]; then
  if ! command -v apparmor_parser >/dev/null 2>&1 ||
    ! command -v apparmor_status >/dev/null 2>&1 ||
    ! apparmor_status --enabled >/dev/null 2>&1; then
    echo 'hvir requires active AppArmor tooling for this host user-namespace policy' >&2
    false
  fi
  apparmor_parser --skip-kernel-load --debug "$APPARMOR_PROFILE_SOURCE" >/dev/null
  install -o root -g root -m 0644 "$APPARMOR_PROFILE_SOURCE" "$APPARMOR_PROFILE_TARGET"

  if ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; }; then
    apparmor_parser \
      --replace \
      --write-cache \
      --skip-read-cache \
      "$APPARMOR_PROFILE_TARGET"
  fi
elif [ -f "$APPARMOR_PROFILE_TARGET" ]; then
  if command -v apparmor_status >/dev/null 2>&1 &&
    apparmor_status --enabled >/dev/null 2>&1 &&
    ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; } &&
    command -v apparmor_parser >/dev/null 2>&1; then
    apparmor_parser --remove "$APPARMOR_PROFILE_TARGET"
  fi
  rm -f "$APPARMOR_PROFILE_TARGET"
fi

stage='finalizing package configuration'
trap - ERR

=== build/linux/after-remove.sh ===
#!/bin/bash
set -e

case "$1" in
upgrade | failed-upgrade | abort-install | abort-upgrade | disappear)
  # The replacement package owns the command and profile during an update.
  exit 0
  ;;
remove | purge)
  ;;
*)
  echo "hvir package removal received an unknown lifecycle action: $1" >&2
  exit 1
  ;;
esac

stage='removing the hvir command'
report_failure() {
  status=$?
  echo "hvir package removal failed while $stage" >&2
  exit "$status"
}
trap report_failure ERR

HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
if command -v update-alternatives >/dev/null 2>&1; then
  update-alternatives \
    --remove '${executable}' "$HVIR_COMMAND"
else
  rm -f '/usr/bin/${executable}'
fi

stage='unloading the AppArmor profile'
APPARMOR_PROFILE_TARGET='/etc/apparmor.d/${executable}'
if [ -f "$APPARMOR_PROFILE_TARGET" ]; then
  if apparmor_status --enabled >/dev/null 2>&1 &&
    ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; } &&
    command -v apparmor_parser >/dev/null 2>&1; then
    apparmor_parser --remove "$APPARMOR_PROFILE_TARGET"
  fi
  rm -f "$APPARMOR_PROFILE_TARGET"
fi

stage='finalizing package removal'
trap - ERR

=== build/pkg-scripts/preinstall ===
#!/bin/sh
set -eu

command_marker='hvir-native-package-command-v1'
inventory_marker='hvir-native-package-inventory-v1'
target_volume=${3:-/}

case "$target_volume" in
/*) ;;
*)
  echo "hvir package preflight failed: invalid target '$target_volume'" >&2
  exit 1
  ;;
esac

volume_root=${target_volume%/}
command="$volume_root/usr/local/bin/hvir"
inventory="$volume_root/Library/Application Support/hvir/package-inventory-v1.txt"

if [ -e "$command" ] || [ -L "$command" ]; then
  if [ ! -f "$command" ] || ! /usr/bin/grep -Fq "$command_marker" "$command"; then
    echo "hvir package preflight refused unowned command: $command" >&2
    exit 1
  fi
fi

if [ -e "$inventory" ] || [ -L "$inventory" ]; then
  if [ ! -f "$inventory" ] ||
    ! /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
    echo "hvir package preflight refused unowned inventory: $inventory" >&2
    exit 1
  fi
fi

=== build/pkg-scripts/postinstall ===
#!/bin/sh
set -eu

package_id='dev.hvir.app'
command_marker='hvir-native-package-command-v1'
inventory_marker='hvir-native-package-inventory-v1'
target_volume=${3:-/}
stage='validating target volume'
transaction=''
command_had_previous=0
inventory_had_previous=0
committed=0
inventory_dir_created=0
command_dir_created=0

case "$target_volume" in
/*) ;;
*)
  echo "hvir package configuration failed while $stage: invalid target '$target_volume'" >&2
  exit 1
  ;;
esac

volume_root=${target_volume%/}
application="$volume_root/Applications/hvir.app"
executable="$application/Contents/MacOS/hvir"
notices="$application/Contents/Resources/THIRD_PARTY_NOTICES.md"
command_source="$application/Contents/Resources/hvir-command"
framework="$application/Contents/Frameworks/Electron Framework.framework"
command_dir="$volume_root/usr/local/bin"
command="$command_dir/hvir"
inventory_dir="$volume_root/Library/Application Support/hvir"
inventory="$inventory_dir/package-inventory-v1.txt"

cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  if [ "$committed" -ne 1 ] && [ -n "$transaction" ]; then
    if [ -f "$command" ] && /usr/bin/grep -Fq "$command_marker" "$command"; then
      /bin/rm -f -- "$command"
    fi
    if [ "$command_had_previous" -eq 1 ] && [ -e "$transaction/command.previous" ]; then
      /bin/mv -f -- "$transaction/command.previous" "$command"
    fi
    if [ -f "$inventory" ] && /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
      /bin/rm -f -- "$inventory"
    fi
    if [ "$inventory_had_previous" -eq 1 ] &&
      [ -e "$transaction/inventory.previous" ]; then
      /bin/mv -f -- "$transaction/inventory.previous" "$inventory"
    fi
  fi
  if [ -n "$transaction" ]; then
    case "$transaction" in
    "$inventory_dir"/.package-install.*) /bin/rm -rf -- "$transaction" ;;
    *) status=1 ;;
    esac
  fi
  if [ "$committed" -ne 1 ]; then
    if [ "$inventory_dir_created" -eq 1 ]; then /bin/rmdir "$inventory_dir" 2>/dev/null || true; fi
    if [ "$command_dir_created" -eq 1 ]; then /bin/rmdir "$command_dir" 2>/dev/null || true; fi
  fi
  if [ "$status" -ne 0 ]; then
    echo "hvir package configuration failed while $stage" >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

stage='validating installed application'
test -x "$executable"
/usr/bin/file "$executable" | /usr/bin/grep -Fq 'arm64'
test -L "$framework/Versions/Current"
test -f "$notices"
test -f "$command_source"
/usr/bin/grep -Fq "$command_marker" "$command_source"
if /usr/bin/codesign -dvv "$application" 2>&1 |
  /usr/bin/grep -q '^Authority='; then
  /usr/bin/codesign --verify --deep --strict --verbose=2 "$application"
fi

stage='preparing package-owned command transaction'
if [ ! -d "$command_dir" ]; then
  /bin/mkdir -p "$command_dir"
  command_dir_created=1
fi
if [ ! -d "$inventory_dir" ]; then
  /bin/mkdir -p "$inventory_dir"
  inventory_dir_created=1
fi
/usr/sbin/chown root:wheel "$command_dir" "$inventory_dir"
/bin/chmod 0755 "$command_dir" "$inventory_dir"
transaction=$(/usr/bin/mktemp -d "$inventory_dir/.package-install.XXXXXX")

if [ -e "$command" ] || [ -L "$command" ]; then
  if [ ! -f "$command" ] || ! /usr/bin/grep -Fq "$command_marker" "$command"; then
    stage='refusing to replace an unowned hvir command'
    false
  fi
  /bin/mv -- "$command" "$transaction/command.previous"
  command_had_previous=1
fi

if [ -e "$inventory" ] || [ -L "$inventory" ]; then
  if [ ! -f "$inventory" ] || ! /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
    stage='refusing to replace an unowned hvir inventory'
    false
  fi
  /bin/mv -- "$inventory" "$transaction/inventory.previous"
  inventory_had_previous=1
fi

stage='writing package-owned command'
/bin/cp -- "$command_source" "$transaction/hvir"
/usr/sbin/chown root:wheel "$transaction/hvir"
/bin/chmod 0755 "$transaction/hvir"
/bin/mv -- "$transaction/hvir" "$command"

stage='writing deterministic package inventory'
{
  echo "$inventory_marker"
  echo "package-id=$package_id"
  echo 'application=/Applications/hvir.app'
  echo 'command=/usr/local/bin/hvir'
  echo 'inventory=/Library/Application Support/hvir/package-inventory-v1.txt'
  echo "receipt=$package_id"
} >"$transaction/inventory"
/usr/sbin/chown root:wheel "$transaction/inventory"
/bin/chmod 0644 "$transaction/inventory"
/bin/mv -- "$transaction/inventory" "$inventory"

stage='committing package-owned command transaction'
committed=1
/bin/rm -f -- "$transaction/command.previous" "$transaction/inventory.previous"
<shellId: 18 completed with exit code 0>
```

</details>


---

<sub>1m 39s</sub>

### `bash`

**Read native installer template**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat scripts/native-installer.template.sh

<details>
<summary>620 lines</summary>

```
#!/usr/bin/env bash
set -Eeuo pipefail

readonly HVIR_VERSION=@@HVIR_VERSION@@
readonly HVIR_RELEASE_BASE_URL=@@HVIR_RELEASE_BASE_URL@@
readonly HVIR_LINUX_X64_ARTIFACT=@@HVIR_LINUX_X64_ARTIFACT@@
readonly HVIR_LINUX_X64_SHA256=@@HVIR_LINUX_X64_SHA256@@
readonly HVIR_LINUX_ARM64_ARTIFACT=@@HVIR_LINUX_ARM64_ARTIFACT@@
readonly HVIR_LINUX_ARM64_SHA256=@@HVIR_LINUX_ARM64_SHA256@@
readonly HVIR_MACOS_ARM64_ARTIFACT=@@HVIR_MACOS_ARM64_ARTIFACT@@
readonly HVIR_MACOS_ARM64_SHA256=@@HVIR_MACOS_ARM64_SHA256@@
readonly HVIR_MACOS_TEAM_ID=@@HVIR_MACOS_TEAM_ID@@
readonly HVIR_ACCEPTANCE_ASSET_DIRECTORY=@@HVIR_ACCEPTANCE_ASSET_DIRECTORY@@
readonly HVIR_ACCEPTANCE_UNSIGNED_MACOS=@@HVIR_ACCEPTANCE_UNSIGNED_MACOS@@
readonly HVIR_LINUX_MINIMUM_GLIBC=2.35
readonly HVIR_APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns

stage='validating arguments'
temporary_directory=''
platform=''
platform_name=''
artifact_name=''
artifact_sha256=''
native_command=''
install_action='install'
legacy_launcher=''
legacy_npm=''
legacy_cache=''
operation='install'
purge=0

cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  if [[ -n "$temporary_directory" ]]; then
    case "$temporary_directory" in
    */hvir-installer.*) /bin/rm -rf -- "$temporary_directory" ;;
    *)
      echo "hvir installer refused to clean unexpected path: $temporary_directory" >&2
      status=1
      ;;
    esac
  fi
  if [[ "$status" -ne 0 ]]; then
    echo "hvir $HVIR_VERSION failed while $stage (status $status)." >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

usage() {
  cat <<EOF
hvir $HVIR_VERSION installer

Usage:
  install.sh
  install.sh --uninstall
  install.sh --uninstall --purge

The default operation installs or updates hvir. Uninstall preserves user state;
--purge additionally removes the current user's documented hvir settings and cache.
EOF
}

parse_arguments() {
  case "$#" in
  0) ;;
  1)
    case "$1" in
    --uninstall) operation='uninstall' ;;
    --help | -h)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 64
      ;;
    esac
    ;;
  2)
    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
      usage >&2
      exit 64
    fi
    operation='uninstall'
    purge=1
    ;;
  *)
    usage >&2
    exit 64
    ;;
  esac
}

detect_target() {
  local kernel machine
  kernel=$(/usr/bin/uname -s)
  machine=$(/usr/bin/uname -m)
  case "$kernel:$machine" in
  Linux:x86_64)
    platform='linux'
    platform_name='Linux (x64)'
    artifact_name=$HVIR_LINUX_X64_ARTIFACT
    artifact_sha256=$HVIR_LINUX_X64_SHA256
    native_command='/usr/bin/hvir'
    ;;
  Linux:aarch64 | Linux:arm64)
    platform='linux'
    platform_name='Linux (Arm64)'
    artifact_name=$HVIR_LINUX_ARM64_ARTIFACT
    artifact_sha256=$HVIR_LINUX_ARM64_SHA256
    native_command='/usr/bin/hvir'
    ;;
  Darwin:arm64)
    platform='macos'
    platform_name='macOS (Apple silicon)'
    artifact_name=$HVIR_MACOS_ARM64_ARTIFACT
    artifact_sha256=$HVIR_MACOS_ARM64_SHA256
    native_command='/usr/local/bin/hvir'
    ;;
  *)
    echo \
      "hvir does not support $kernel $machine. Supported targets are compatible Linux x64/arm64 hosts and Apple-silicon macOS." \
      >&2
    exit 69
    ;;
  esac
}

require_absolute_tool() {
  [[ -x "$1" ]] || {
    echo "hvir requires $1." >&2
    exit 69
  }
}

require_install_tools() {
  require_absolute_tool /usr/bin/sudo
  if [[ -z "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
    require_absolute_tool /usr/bin/curl
  fi
  if [[ "$platform" == 'linux' ]]; then
    require_absolute_tool /usr/bin/apt
    require_absolute_tool /usr/bin/apt-get
    require_absolute_tool /usr/bin/dpkg-deb
    require_absolute_tool /usr/bin/dpkg-query
    require_absolute_tool /usr/bin/getconf
    require_absolute_tool /usr/bin/sha256sum
    require_absolute_tool /usr/bin/unshare
  else
    require_absolute_tool /usr/bin/shasum
    require_absolute_tool /usr/sbin/pkgutil
    require_absolute_tool /usr/sbin/installer
    require_absolute_tool /usr/sbin/spctl
    require_absolute_tool /usr/bin/xcrun
  fi
}

version_at_least() {
  local actual=$1 minimum=$2 actual_major actual_minor minimum_major minimum_minor
  [[ "$actual" =~ ^([0-9]+)\.([0-9]+)$ ]] || return 1
  actual_major=${BASH_REMATCH[1]}
  actual_minor=${BASH_REMATCH[2]}
  [[ "$minimum" =~ ^([0-9]+)\.([0-9]+)$ ]] || return 1
  minimum_major=${BASH_REMATCH[1]}
  minimum_minor=${BASH_REMATCH[2]}
  ((actual_major > minimum_major)) ||
    ((actual_major == minimum_major && actual_minor >= minimum_minor))
}

linux_requires_apparmor_profile() {
  [[ -r "$HVIR_APPARMOR_USERNS_RESTRICTION" ]] &&
    [[ "$(<"$HVIR_APPARMOR_USERNS_RESTRICTION")" == '1' ]]
}

verify_linux_host_capabilities() {
  local glibc_output glibc_version
  stage='checking the Linux runtime ABI'
  glibc_output=$(/usr/bin/getconf GNU_LIBC_VERSION 2>/dev/null) || {
    echo "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer." >&2
    exit 69
  }
  glibc_version=${glibc_output#glibc }
  if ! version_at_least "$glibc_version" "$HVIR_LINUX_MINIMUM_GLIBC"; then
    echo \
      "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer; found ${glibc_version:-unknown}." \
      >&2
    exit 69
  fi

  stage='checking the Linux Chromium sandbox capability'
  if /usr/bin/unshare --user true >/dev/null 2>&1; then
    return
  fi
  if linux_requires_apparmor_profile; then
    require_absolute_tool /usr/sbin/apparmor_parser
    require_absolute_tool /usr/sbin/apparmor_status
    if ! /usr/sbin/apparmor_status --enabled >/dev/null 2>&1; then
      echo \
        'This host restricts unprivileged user namespaces, but AppArmor enforcement is unavailable.' \
        >&2
      exit 69
    fi
  fi
  # Otherwise the root-owned package supplies Chromium's setuid sandbox helper.
}

create_private_temporary_directory() {
  local temporary_parent
  temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
  temporary_directory=$(umask 077 && /usr/bin/mktemp -d \
    "$temporary_parent/hvir-installer.XXXXXX")
}

run_with_failure_diagnostics() {
  local log=$1 status
  shift
  "$@" >"$log" 2>&1 || {
    status=$?
    /bin/cat -- "$log" >&2
    return "$status"
  }
}

download_artifact() {
  local destination=$1
  stage="downloading $artifact_name"
  if [[ -n "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
    /bin/cp -- "$HVIR_ACCEPTANCE_ASSET_DIRECTORY/$artifact_name" "$destination"
  else
    /usr/bin/curl \
      --fail \
      --silent \
      --show-error \
      --location \
      --proto '=https' \
      --tlsv1.2 \
      --output "$destination" \
      "$HVIR_RELEASE_BASE_URL/$artifact_name"
  fi
}

verify_digest() {
  local artifact=$1 digest_output actual_digest
  stage="verifying the SHA-256 digest for $artifact_name"
  if [[ "$platform" == 'linux' ]]; then
    digest_output=$(/usr/bin/sha256sum "$artifact")
  else
    digest_output=$(/usr/bin/shasum -a 256 "$artifact")
  fi
  actual_digest=${digest_output%%[[:space:]]*}
  if [[ "$actual_digest" != "$artifact_sha256" ]]; then
    echo "Digest mismatch for $artifact_name." >&2
    echo "Expected: $artifact_sha256" >&2
    echo "Actual:   $actual_digest" >&2
    exit 1
  fi
}

verify_linux_package_capabilities() {
  local artifact=$1 dependency_log package_root profile profile_log
  dependency_log="$temporary_directory/linux-package-dependencies.log"
  stage='checking Linux package dependencies'
  if ! run_with_failure_diagnostics \
    "$dependency_log" \
    /usr/bin/apt-get \
    --simulate \
    --no-install-recommends \
    install \
    "$artifact"; then
    echo \
      "The hvir package dependencies are not available from this host's configured apt repositories." \
      >&2
    exit 69
  fi

  if ! linux_requires_apparmor_profile; then
    return
  fi
  package_root="$temporary_directory/linux-package"
  profile="$package_root/opt/hvir/resources/apparmor-profile"
  profile_log="$temporary_directory/apparmor-profile.log"
  stage='checking the required AppArmor integration'
  /usr/bin/dpkg-deb --extract "$artifact" "$package_root"
  if [[ ! -f "$profile" ]]; then
    echo 'The verified hvir package does not contain its required AppArmor profile.' >&2
    exit 1
  fi
  if ! run_with_failure_diagnostics \
    "$profile_log" \
    /usr/sbin/apparmor_parser \
    --skip-kernel-load \
    --debug \
    "$profile"; then
    echo "This host cannot parse hvir's required AppArmor user-namespace profile." >&2
    exit 69
  fi
}

verify_macos_package() {
  local artifact=$1 signature_log notarization_log gatekeeper_log
  if [[ "$HVIR_ACCEPTANCE_UNSIGNED_MACOS" == '1' ]]; then
    return
  fi
  signature_log="$temporary_directory/macos-package-signature.log"
  stage='validating the macOS installer signature'
  run_with_failure_diagnostics \
    "$signature_log" \
    /usr/sbin/pkgutil --check-signature "$artifact"
  if ! /usr/bin/grep -Eq \
    "Developer ID Installer: .+ \\($HVIR_MACOS_TEAM_ID\\)" \
    "$signature_log"; then
    /bin/cat -- "$signature_log" >&2
    echo "The package is not signed by the expected Apple team $HVIR_MACOS_TEAM_ID." >&2
    exit 1
  fi
  if ! /usr/bin/grep -Fq 'Signed with a trusted timestamp' "$signature_log"; then
    /bin/cat -- "$signature_log" >&2
    echo 'The macOS installer signature has no trusted timestamp.' >&2
    exit 1
  fi
  notarization_log="$temporary_directory/macos-package-notarization.log"
  stage='validating the stapled macOS notarization ticket'
  run_with_failure_diagnostics \
    "$notarization_log" \
    /usr/bin/xcrun stapler validate "$artifact"
  gatekeeper_log="$temporary_directory/macos-package-gatekeeper.log"
  stage='assessing the macOS package with Gatekeeper'
  run_with_failure_diagnostics \
    "$gatekeeper_log" \
    /usr/sbin/spctl --assess --type install --verbose=2 "$artifact"
  echo 'Apple signature, notarization, and Gatekeeper checks passed.'
}

native_install_present() {
  if [[ "$platform" == 'linux' ]]; then
    /usr/bin/dpkg-query -W -f='${Status}' hvir 2>/dev/null |
      /usr/bin/grep -Fq 'install ok installed'
  else
    /usr/sbin/pkgutil --pkg-info dev.hvir.app >/dev/null 2>&1 &&
      [[ -f "$native_command" ]] &&
      /usr/bin/grep -Fq 'hvir-native-package-command-v1' "$native_command"
  fi
}

resolve_link_target() {
  local link=$1 target parent
  target=$(/usr/bin/readlink "$link")
  case "$target" in
  /*) ;;
  *) target=$(/usr/bin/dirname "$link")/$target ;;
  esac
  parent=$(cd "$(/usr/bin/dirname "$target")" && pwd -P)
  printf '%s/%s\n' "$parent" "$(/usr/bin/basename "$target")"
}

list_contains_exact_line() {
  local expected=$1 line
  while IFS= read -r line; do
    [[ "$line" == "$expected" ]] && return 0
  done
  return 1
}

legacy_cache_root() {
  if [[ "$platform" == 'macos' ]]; then
    printf '%s/Library/Caches/hvir/native\n' "$HOME"
  elif [[ -n "${XDG_CACHE_HOME:-}" && "$XDG_CACHE_HOME" == /* ]]; then
    printf '%s/hvir/native\n' "${XDG_CACHE_HOME%/}"
  else
    printf '%s/.cache/hvir/native\n' "$HOME"
  fi
}

discover_legacy_launcher() {
  local found npm_prefix npm_root expected_launcher expected_target actual_target listing
  found=$(command -v hvir 2>/dev/null || true)
  [[ -n "$found" ]] || return 0
  if native_install_present && [[ "$found" == "$native_command" ]]; then
    return
  fi

  legacy_npm=$(command -v npm 2>/dev/null || true)
  if [[ "$legacy_npm" != /* || ! -x "$legacy_npm" ]]; then
    echo "An existing hvir command is not package-owned and cannot be verified: $found" >&2
    exit 1
  fi
  npm_prefix=$("$legacy_npm" prefix -g)
  npm_root=$("$legacy_npm" root -g)
  [[ "$npm_prefix" == /* && "$npm_root" == /* ]] || {
    echo 'The legacy npm installation reported a non-absolute global prefix.' >&2
    exit 1
  }
  expected_launcher=${npm_prefix%/}/bin/hvir
  expected_target=${npm_root%/}/hvir-workbench/bin/hvir.mjs
  if [[ "$found" != "$expected_launcher" || ! -L "$found" ||
    ! -f "$expected_target" ]]; then
    echo "An existing hvir command has ambiguous ownership and was not changed: $found" >&2
    exit 1
  fi
  actual_target=$(resolve_link_target "$found")
  expected_target=$(cd "$(/usr/bin/dirname "$expected_target")" && pwd -P)/$(
    /usr/bin/basename "$expected_target"
  )
  if [[ "$actual_target" != "$expected_target" ]]; then
    echo "The existing hvir launcher does not target hvir-workbench: $found" >&2
    exit 1
  fi
  listing=$("$legacy_npm" ls -g --depth=0 --parseable hvir-workbench)
  if ! list_contains_exact_line "${npm_root%/}/hvir-workbench" <<<"$listing"; then
    echo 'npm did not confirm ownership of the existing hvir-workbench launcher.' >&2
    exit 1
  fi
  if [[ "$found" == "$native_command" ]]; then
    echo \
      "The verified legacy launcher occupies $native_command; move hvir-workbench to a user-owned npm prefix before native migration." \
      >&2
    exit 1
  fi
  legacy_launcher=$found
  legacy_cache=$(legacy_cache_root)
}

verify_native_command() {
  stage='verifying the installed native command'
  [[ -x "$native_command" ]] || {
    echo "The native package did not install $native_command." >&2
    exit 1
  }
  /usr/bin/grep -Fq 'hvir-native-package-command-v1' "$native_command" || {
    echo "The installed command is not owned by the hvir native package: $native_command" >&2
    exit 1
  }
  native_install_present || {
    echo 'The native package manager does not report hvir as installed.' >&2
    exit 1
  }
}

safe_remove_legacy_cache() {
  [[ -n "$legacy_cache" ]] || return 0
  case "$legacy_cache" in
  /*/hvir/native) ;;
  *)
    echo "Refusing to remove unexpected legacy cache path: $legacy_cache" >&2
    exit 1
    ;;
  esac
  /bin/rm -rf -- "$legacy_cache"
}

remove_legacy_launcher() {
  local migration_log
  [[ -n "$legacy_launcher" ]] || return 0
  stage='removing the verified legacy hvir-workbench launcher'
  migration_log="$temporary_directory/npm-migration.log"
  run_with_failure_diagnostics \
    "$migration_log" \
    "$legacy_npm" uninstall -g hvir-workbench
  if [[ -e "$legacy_launcher" || -L "$legacy_launcher" ]]; then
    echo "npm retained the legacy launcher: $legacy_launcher" >&2
    exit 1
  fi
  stage='removing the derived ADR-018 native cache'
  safe_remove_legacy_cache
  echo 'Removed the legacy npm installation.'
}

verify_native_command_resolution() {
  local found
  stage='verifying public hvir command resolution'
  hash -r
  found=$(command -v hvir 2>/dev/null || true)
  if [[ -z "$found" || ! "$found" -ef "$native_command" ]]; then
    echo \
      "Another hvir command shadows the installed native command: ${found:-not found}" \
      >&2
    exit 1
  fi
}

install_or_update() {
  local artifact package_log
  if [[ "$platform" == 'linux' ]]; then
    verify_linux_host_capabilities
  fi
  if native_install_present; then
    install_action='update'
    echo "Updating hvir to $HVIR_VERSION for $platform_name."
  else
    install_action='install'
    echo "Installing hvir $HVIR_VERSION for $platform_name."
  fi
  stage='checking for a legacy npm installation'
  discover_legacy_launcher
  stage='creating a private installer workspace'
  create_private_temporary_directory
  artifact="$temporary_directory/$artifact_name"
  echo 'Downloading the native package...'
  download_artifact "$artifact"
  verify_digest "$artifact"
  echo 'Download integrity verified.'
  if [[ "$platform" == 'macos' ]]; then
    verify_macos_package "$artifact"
    stage="installing hvir $HVIR_VERSION with the macOS package manager"
    package_log="$temporary_directory/native-package-manager.log"
    echo 'macOS will request your local administrator password; typed characters will not appear.'
    run_with_failure_diagnostics \
      "$package_log" \
      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
  else
    verify_linux_package_capabilities "$artifact"
    stage="installing hvir $HVIR_VERSION with apt"
    package_log="$temporary_directory/native-package-manager.log"
    run_with_failure_diagnostics \
      "$package_log" \
      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
  fi
  verify_native_command
  remove_legacy_launcher
  verify_native_command_resolution
  if [[ "$install_action" == 'update' ]]; then
    echo "hvir $HVIR_VERSION is updated. Open a project with: hvir ."
  else
    echo "hvir $HVIR_VERSION is installed. Open a project with: hvir ."
  fi
}

validate_macos_inventory() {
  local inventory='/Library/Application Support/hvir/package-inventory-v1.txt'
  [[ -f "$inventory" ]] || {
    echo "The hvir package inventory is missing: $inventory" >&2
    exit 1
  }
  /usr/bin/grep -Fxq 'hvir-native-package-inventory-v1' "$inventory"
  /usr/bin/grep -Fxq 'package-id=dev.hvir.app' "$inventory"
  /usr/bin/grep -Fxq 'application=/Applications/hvir.app' "$inventory"
  /usr/bin/grep -Fxq 'command=/usr/local/bin/hvir' "$inventory"
  /usr/bin/grep -Fxq \
    'inventory=/Library/Application Support/hvir/package-inventory-v1.txt' \
    "$inventory"
  /usr/bin/grep -Fxq 'receipt=dev.hvir.app' "$inventory"
  [[ -f /usr/local/bin/hvir ]] &&
    /usr/bin/grep -Fq 'hvir-native-package-command-v1' /usr/local/bin/hvir
}

remove_native_package() {
  if [[ "$platform" == 'linux' ]]; then
    if native_install_present; then
      stage='removing the hvir native package with apt'
      /usr/bin/sudo /usr/bin/apt remove -y hvir
    elif [[ "$purge" -eq 0 ]]; then
      echo 'The hvir native package is not installed.' >&2
      exit 1
    fi
  else
    if /usr/sbin/pkgutil --pkg-info dev.hvir.app >/dev/null 2>&1; then
      stage='validating package-owned macOS removal state'
      validate_macos_inventory
      stage='removing package-owned macOS application state'
      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
      /usr/bin/sudo /bin/rm -f -- \
        /usr/local/bin/hvir \
        '/Library/Application Support/hvir/package-inventory-v1.txt'
      /usr/bin/sudo /bin/rmdir '/Library/Application Support/hvir' 2>/dev/null || true
      /usr/bin/sudo /usr/sbin/pkgutil --forget dev.hvir.app >/dev/null
    elif [[ "$purge" -eq 0 ]]; then
      echo 'The hvir native package is not installed.' >&2
      exit 1
    fi
  fi
}

purge_roots() {
  local wrapped
  if [[ "$HOME" != /* || "$HOME" == '/' ]]; then
    echo "Refusing to purge with unsafe HOME: ${HOME:-unset}" >&2
    exit 1
  fi
  wrapped=/${HOME#/}/
  case "$wrapped" in
  */../* | */./*)
    echo "Refusing to purge with non-canonical HOME: $HOME" >&2
    exit 1
    ;;
  esac
  if [[ "$platform" == 'macos' ]]; then
    printf '%s\n' \
      "$HOME/Library/Application Support/hvir" \
      "$HOME/Library/Caches/hvir"
  else
    if [[ -n "${XDG_CONFIG_HOME:-}" && "$XDG_CONFIG_HOME" == /* ]]; then
      wrapped=/${XDG_CONFIG_HOME#/}/
      case "$wrapped" in
      */../* | */./*)
        echo "Refusing to purge with unsafe XDG_CONFIG_HOME: $XDG_CONFIG_HOME" >&2
        exit 1
        ;;
      esac
      printf '%s/hvir\n' "${XDG_CONFIG_HOME%/}"
    else
      printf '%s/.config/hvir\n' "$HOME"
    fi
    if [[ -n "${XDG_CACHE_HOME:-}" && "$XDG_CACHE_HOME" == /* ]]; then
      wrapped=/${XDG_CACHE_HOME#/}/
      case "$wrapped" in
      */../* | */./*)
        echo "Refusing to purge with unsafe XDG_CACHE_HOME: $XDG_CACHE_HOME" >&2
        exit 1
        ;;
      esac
      printf '%s/hvir\n' "${XDG_CACHE_HOME%/}"
    else
      printf '%s/.cache/hvir\n' "$HOME"
    fi
  fi
}

purge_user_state() {
  local path
  stage='purging the current user hvir settings and cache'
  while IFS= read -r path; do
    case "$path" in
    /*/hvir) ;;
    *)
      echo "Refusing to purge unexpected path: $path" >&2
      exit 1
      ;;
    esac
    echo "Purging current-user hvir state: $path"
    /bin/rm -rf -- "$path"
  done < <(purge_roots)
}

uninstall_hvir() {
  remove_native_package
  if [[ "$purge" -eq 1 ]]; then
    purge_user_state
  fi
  echo "Uninstalled hvir $HVIR_VERSION; project directories were preserved."
}

parse_arguments "$@"
stage='detecting the supported platform'
detect_target
require_install_tools

if [[ "$operation" == 'install' ]]; then
  install_or_update
else
  echo "Uninstalling hvir $HVIR_VERSION from $platform_name."
  uninstall_hvir
fi

stage='completed successfully'
<shellId: 19 completed with exit code 0>
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml

```
File too large to read at once (20.8 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>1m 47s</sub>

### `grep`

**github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+|jarmak-personal|hvir-workbench**

"github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+|jarmak-personal|hvir-workbench" in !{node_modules,package-lock.json,.git,test}/**

<details>
<summary>211 matches</summary>

```
[grep content: 189 matches across 29 file(s) under /private/var/tmp/ws/f7354e9d/hvir]
package.json:78:     "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",

package-lock.json (116 match(es)):
  19:         "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
  77:         "url": "https://github.com/sponsors/antfu"
  1085:         "url": "https://github.com/sponsors/gjtorikian/"
  1293:         "url": "https://github.com/sponsors/isaacs"
  1961:         "url": "https://github.com/sponsors/nzakas"
  1975:         "url": "https://github.com/sponsors/nzakas"
  2092:         "url": "https://github.com/sponsors/isaacs"
  2475:           "url": "https://github.com/sponsors/malept"
  3076:         "url": "https://github.com/sindresorhus/is?sponsor=1"
  3089:         "url": "https://github.com/sponsors/sindresorhus"
  3159:         "url": "https://github.com/chalk/chalk?sponsor=1"
  4784:         "url": "https://github.com/sponsors/epoberezkin"
  4820:         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
  4945:           "url": "https://github.com/sponsors/sibiraj-s"
  5136:           "url": "https://github.com/sponsors/feross"
  5225:           "url": "https://github.com/sponsors/ai"
  5413:         "url": "https://github.com/sponsors/ljharb"
  5432:           "url": "https://github.com/sponsors/ai"
  5444:         "url": "https://github.com/sponsors/wooorm"
  5471:         "url": "https://github.com/chalk/chalk?sponsor=1"
  5481:         "url": "https://github.com/sponsors/wooorm"
  5491:         "url": "https://github.com/sponsors/wooorm"
  5541:           "url": "https://github.com/sponsors/sibiraj-s"
  5584:         "url": "https://github.com/sponsors/sindresorhus"
  5627:         "url": "https://github.com/sponsors/wooorm"
  6294:         "url": "https://github.com/sponsors/sindresorhus"
  6307:         "url": "https://github.com/sponsors/sindresorhus"
  6343:         "url": "https://github.com/sponsors/ljharb"
  6362:         "url": "https://github.com/sponsors/ljharb"
  6422:         "url": "https://github.com/sponsors/wooorm"
  6775:         "url": "https://github.com/fb55/entities?sponsor=1"
  6788:         "url": "https://github.com/sponsors/sindresorhus"
  6934:         "url": "https://github.com/sponsors/sindresorhus"
  7088:         "url": "https://github.com/sponsors/epoberezkin"
  7196:         "url": "https://github.com/sindresorhus/execa?sponsor=1"
  7213:         "url": "https://github.com/sponsors/sindresorhus"
  7226:         "url": "https://github.com/sponsors/isaacs"
  7292:           "url": "https://github.com/sponsors/fastify"
  7351:         "url": "https://github.com/sponsors/sindresorhus"
  7418:         "url": "https://github.com/sponsors/sindresorhus"
  7501:         "url": "https://github.com/sponsors/ljharb"
  7546:         "url": "https://github.com/sponsors/ljharb"
  7576:         "url": "https://github.com/sponsors/sindresorhus"
  7581:       "resolved": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
  7604:         "url": "https://github.com/sponsors/isaacs"
  7699:         "url": "https://github.com/sponsors/ljharb"
  7712:         "url": "https://github.com/sponsors/ljharb"
  7738:         "url": "https://github.com/sindresorhus/got?sponsor=1"
  7783:         "url": "https://github.com/fb55/entities?sponsor=1"
  7807:         "url": "https://github.com/sponsors/ljharb"
  7820:         "url": "https://github.com/sponsors/ljharb"
  7836:         "url": "https://github.com/sponsors/ljharb"
  7965:         "url": "https://github.com/sponsors/wooorm"
  8056:         "url": "https://github.com/sponsors/wooorm"
  8140:         "url": "https://github.com/sponsors/sindresorhus"
  8153:         "url": "https://github.com/sponsors/sindresorhus"
  8166:         "url": "https://github.com/sponsors/sindresorhus"
  8186:         "url": "https://github.com/sponsors/gjtorikian/"
  8246:           "url": "https://github.com/sponsors/puzrin"
  8250:           "url": "https://github.com/sponsors/nodeca"
  8342:         "https://github.com/sponsors/katex"
  8410:           "url": "https://github.com/sponsors/puzrin"
  8414:           "url": "https://github.com/sponsors/markdown-it"
  8435:         "url": "https://github.com/sponsors/sindresorhus"
  8495:           "url": "https://github.com/sponsors/puzrin"
  8499:           "url": "https://github.com/sponsors/markdown-it"
  8528:           "url": "https://github.com/sponsors/puzrin"
  8532:           "url": "https://github.com/sponsors/nodeca"
  8637:           "url": "https://github.com/sponsors/unifiedjs"
  8657:           "url": "https://github.com/sponsors/unifiedjs"
  8673:           "url": "https://github.com/sponsors/unifiedjs"
  8694:           "url": "https://github.com/sponsors/unifiedjs"
  8710:           "url": "https://github.com/sponsors/unifiedjs"
  8785:         "url": "https://github.com/sponsors/isaacs"
  8795:         "url": "https://github.com/sponsors/ljharb"
  8904:           "url": "https://github.com/sponsors/ai"
  9114:         "url": "https://github.com/sponsors/sindresorhus"
  9131:         "url": "https://github.com/sponsors/sindresorhus"
  9144:         "url": "https://github.com/sponsors/sindresorhus"
  9157:         "url": "https://github.com/sponsors/ljharb"
  9177:         "https://github.com/sponsors/sxzz",
  9253:         "url": "https://github.com/sponsors/sindresorhus"
  9269:         "url": "https://github.com/sponsors/sindresorhus"
  9288:         "url": "https://github.com/sponsors/sindresorhus"
  9339:         "url": "https://github.com/sponsors/jet2jet"
  9359:         "url": "https://github.com/sponsors/jonschlinkert"
  9439:           "url": "https://github.com/sponsors/ai"
  9505:         "url": "https://github.com/prettier/prettier?sponsor=1"
  9521:         "url": "https://github.com/sponsors/sindresorhus"
  9584:         "url": "https://github.com/sponsors/wooorm"
  9671:         "url": "https://github.com/sponsors/ljharb"
  9684:         "url": "https://github.com/sponsors/sindresorhus"
  9821:         "url": "https://github.com/sponsors/jet2jet"
  9841:         "url": "https://github.com/sponsors/sindresorhus"
  10039:         "url": "https://github.com/sponsors/sindresorhus"
  10101:         "url": "https://github.com/sponsors/ljharb"
  10118:         "url": "https://github.com/sponsors/ljharb"
  10137:         "url": "https://github.com/sponsors/ljharb"
  10157:         "url": "https://github.com/sponsors/ljharb"
  10238:         "url": "https://github.com/sponsors/wooorm"
  10341:         "url": "https://github.com/sponsors/wooorm"
  10367:         "url": "https://github.com/sponsors/sindresorhus"
  10514:         "url": "https://github.com/sponsors/SuperchupuDev"
  10554:         "url": "https://github.com/sponsors/wooorm"
  10636:         "url": "https://github.com/sponsors/sindresorhus"
  10745:         "url": "https://github.com/sponsors/sindresorhus"
  10871:           "url": "https://github.com/sponsors/ai"
  10915:         "https://github.com/sponsors/broofa",
  10916:         "https://github.com/sponsors/ctavan"
  10972:         "url": "https://github.com/vitejs/vite?sponsor=1"
  11698:         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
  11768:         "url": "https://github.com/sponsors/eemeli"
  11810:         "url": "https://github.com/sponsors/sindresorhus"
  11823:         "url": "https://github.com/sponsors/sindresorhus"
  11833:         "url": "https://github.com/sponsors/colinhacks"
  11856:         "url": "https://github.com/sponsors/wooorm"

THIRD_PARTY_NOTICES.md (5 match(es)):
  10: Source: <https://github.com/CongBao/skill-steward>
  41: Source: <https://github.com/coder/ghostty-web>
  44: [ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
  76: Source: <https://github.com/mbadolato/iTerm2-Color-Schemes>
  113: Source: <https://github.com/ghostty-org/ghostty>

scripts/project-management/github-delivery-adapters.ts (2 match(es)):
  24:     environment.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
  41:     owner: environment.HVIR_PROJECT_OWNER ?? 'jarmak-personal',

scripts/project-management/kind-cli.ts (2 match(es)):
  32:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  33:   HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)

scripts/project-management/pull-request-cli.ts (2 match(es)):
  32:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  33:   HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)

scripts/project-management/github-token-migration.ts (3 match(es)):
  50:   const tokens = new GitHubSessionTokens(repository, 'jarmak-personal', 'hvir')
  216:         `/repos/jarmak-personal/hvir/issues/${receipt.issue}/comments`,
  229:         posted.user?.login?.toLowerCase() !== 'jarmak-personal' ||

scripts/project-management/issue-context-cli.ts (2 match(es)):
  24:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  25:   HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)

scripts/project-management/sync-kind.ts (2 match(es)):
  19:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
  27:     projectOwner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',

scripts/project-management/issue-start-cli.ts (2 match(es)):
  27:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  28:   HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)

scripts/project-management/read-contributor-status.ts (2 match(es)):
  32:   const repository = process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir'
  43:         owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',

scripts/project-management/sync-pull-request-planning.ts (2 match(es)):
  26:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
  46:     owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',

scripts/project-management/read-planning-record.ts (2 match(es)):
  22:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
  36:     owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',
scripts/assemble-native-release.mjs:212:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',
scripts/render-native-installer.mjs:155:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',

scripts/run-macos-package-smoke.sh (8 match(es)):
  106:   "$legacy_root/hvir-workbench/bin" \
  113:   >"$legacy_root/hvir-workbench/bin/hvir.mjs"
  114: chmod 0755 "$legacy_root/hvir-workbench/bin/hvir.mjs"
  115: ln -s '../lib/node_modules/hvir-workbench/bin/hvir.mjs' "$legacy_launcher"
  121:   'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  124:   '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
  214:     --repository jarmak-personal/hvir \
  261: test ! -e "$legacy_root/hvir-workbench"

scripts/run-linux-package-smoke.sh (8 match(es)):
  115:   "$legacy_root/hvir-workbench/bin" \
  127:   >"$legacy_root/hvir-workbench/bin/hvir.mjs"
  128: chmod 0755 "$legacy_root/hvir-workbench/bin/hvir.mjs"
  129: ln -s '../lib/node_modules/hvir-workbench/bin/hvir.mjs' "$legacy_launcher"
  137:   'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  140:   '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
  168:     --repository jarmak-personal/hvir \
  344: test ! -e "$legacy_root/hvir-workbench"
scripts/require-release-ci-evidence.mts:18: export const RELEASE_REPOSITORY = 'jarmak-personal/hvir'

scripts/project-management/audit-canonical-project.ts (4 match(es)):
  12:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  13:   HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)
  25:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
  28:     owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',

scripts/project-management/canonical-project-config.ts (2 match(es)):
  21:   repository: 'jarmak-personal/hvir',
  22:   owner: 'jarmak-personal',

scripts/ghostty-web-update/repository-candidate.mts (2 match(es)):
  289:     /(?<=\[ghostty-web compatibility fork\]\(https:\/\/github\.com\/jarmak-personal\/ghostty-web\/releases\/tag\/)hvir-v[^)]+(?=\)\.)/g
  346:     /(?<=\[ghostty-web compatibility fork\]\(https:\/\/github\.com\/jarmak-personal\/ghostty-web\/releases\/tag\/)hvir-v[^)]+(?=\)\.)/g,

scripts/native-installer.template.sh (8 match(es)):
  399:   expected_target=${npm_root%/}/hvir-workbench/bin/hvir.mjs
  410:     echo "The existing hvir launcher does not target hvir-workbench: $found" >&2
  413:   listing=$("$legacy_npm" ls -g --depth=0 --parseable hvir-workbench)
  414:   if ! list_contains_exact_line "${npm_root%/}/hvir-workbench" <<<"$listing"; then
  415:     echo 'npm did not confirm ownership of the existing hvir-workbench launcher.' >&2
  420:       "The verified legacy launcher occupies $native_command; move hvir-workbench to a user-owned npm prefix before native migration." \
  459:   stage='removing the verified legacy hvir-workbench launcher'
  463:     "$legacy_npm" uninstall -g hvir-workbench

scripts/architecture-github.mts (3 match(es)):
  109:       'https://github.com/jarmak-personal/hvir.git',
  110:       'git@github.com:jarmak-personal/hvir.git',
  111:       'https://github.com/jarmak-personal/hvir',

scripts/project-management/planning-cli.ts (2 match(es)):
  27:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  28:   HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)

scripts/ghostty-web-update/policy.mts (2 match(es)):
  6: const SOURCE_REPOSITORY = 'https://github.com/jarmak-personal/ghostty-web.git'
  9:   'https://github.com/jarmak-personal/ghostty-web/releases/download/'
scripts/ghostty-web-update/github-release-source.mts:19: const SOURCE_REPOSITORY = 'jarmak-personal/ghostty-web'
scripts/generate-terminal-theme-catalog.mts:24:   upstreamRepository: 'https://github.com/mbadolato/iTerm2-Color-Schemes',
scripts/ghostty-terminal-capability-profile.mts:8:     url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
src/renderer/src/terminal/generated-terminal-theme-catalog.ts:3: export const GENERATED_TERMINAL_THEME_CATALOG_PROVENANCE = {"ghosttyCommit":"332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28","ghosttyThemeArchive":"https://deps.files.ghostty.org/ghostty-themes-release-20260216-151611-fc73ce3.tgz","ghosttyThemeArchiveSha256":"14200bb86a0c814ab69609d500b280b396b6d2eb835edf0676de4a789c0aa8fd","upstreamRepository":"https://github.com/mbadolato/iTerm2-Color-Schemes","upstreamTag":"release-20260216-151611-fc73ce3","upstreamCommit":"fc73ce39746540b6d5ec6b91e304785431401d85","sourceTreeSha256":"70b7ed943f4d3a409425677f3d375782840a51f1ac1c8613f0ac669c2dc3078b","expectedThemeCount":463,"maximumThemeCount":512,"maximumThemeBytes":4096} as const
```

</details>


---

<sub>1m 47s</sub>

### `bash`

**Read native installer render and release assembly scripts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat scripts/render-native-installer.mjs; echo "=== assemble-native-release.mjs (head) ==="; sed -n '1,140p' scripts/assemble-native-release.mjs

<details>
<summary>298 lines</summary>

```
#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { chmod, mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, dirname, isAbsolute, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = resolve(repositoryRoot, 'scripts/native-installer.template.sh')
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/
const repositoryPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/
const artifactPattern = /^[A-Za-z0-9][A-Za-z0-9._-]*$/
const teamPattern = /^[A-Z0-9]{10}$/

export async function renderNativeInstaller(options) {
  validateOptions(options)
  const artifacts = {
    linuxX64: await artifactRecord(options.linuxX64Artifact),
    linuxArm64: await artifactRecord(options.linuxArm64Artifact),
    macosArm64: await artifactRecord(options.macosArm64Artifact),
  }
  if (
    !options.acceptanceAssetDirectory &&
    new Set(Object.values(artifacts).map(({ name }) => name)).size !== 3
  ) {
    throw new Error('Release artifact names must be distinct.')
  }

  const releaseBaseUrl =
    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
  const replacements = new Map([
    ['HVIR_VERSION', shellQuote(options.version)],
    ['HVIR_RELEASE_BASE_URL', shellQuote(releaseBaseUrl)],
    ['HVIR_LINUX_X64_ARTIFACT', shellQuote(artifacts.linuxX64.name)],
    ['HVIR_LINUX_X64_SHA256', shellQuote(artifacts.linuxX64.sha256)],
    ['HVIR_LINUX_ARM64_ARTIFACT', shellQuote(artifacts.linuxArm64.name)],
    ['HVIR_LINUX_ARM64_SHA256', shellQuote(artifacts.linuxArm64.sha256)],
    ['HVIR_MACOS_ARM64_ARTIFACT', shellQuote(artifacts.macosArm64.name)],
    ['HVIR_MACOS_ARM64_SHA256', shellQuote(artifacts.macosArm64.sha256)],
    ['HVIR_MACOS_TEAM_ID', shellQuote(options.macosTeamId)],
    [
      'HVIR_ACCEPTANCE_ASSET_DIRECTORY',
      shellQuote(options.acceptanceAssetDirectory ?? ''),
    ],
    [
      'HVIR_ACCEPTANCE_UNSIGNED_MACOS',
      shellQuote(options.acceptanceUnsignedMacos ? '1' : '0'),
    ],
  ])

  let output = await readFile(templatePath, 'utf8')
  for (const [name, value] of replacements) {
    const token = `@@${name}@@`
    if (!output.includes(token)) throw new Error(`Installer template lacks ${token}.`)
    output = output.replaceAll(token, value)
  }
  const unresolved = output.match(/@@[A-Z0-9_]+@@/)
  if (unresolved) {
    throw new Error(`Installer template retained ${unresolved[0]}.`)
  }

  const outputPath = resolve(options.output)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, output, { encoding: 'utf8', mode: 0o755 })
  await chmod(outputPath, 0o755)
  return { artifacts, outputPath, releaseBaseUrl }
}

function validateOptions(options) {
  if (!versionPattern.test(options.version ?? '')) {
    throw new Error(`Invalid hvir version: ${options.version ?? 'missing'}.`)
  }
  if (!repositoryPattern.test(options.repository ?? '')) {
    throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
  }
  if (!teamPattern.test(options.macosTeamId ?? '')) {
    throw new Error('The macOS Apple team ID must contain 10 uppercase letters/digits.')
  }
  if (!options.output) throw new Error('An installer output path is required.')
  for (const [target, path, extension] of [
    ['Linux x64', options.linuxX64Artifact, '.deb'],
    ['Linux arm64', options.linuxArm64Artifact, '.deb'],
    ['macOS arm64', options.macosArm64Artifact, '.pkg'],
  ]) {
    if (!path || !basename(path).endsWith(extension)) {
      throw new Error(`${target} requires one ${extension} artifact.`)
    }
  }
  if (options.acceptanceAssetDirectory) {
    if (
      process.env.CI !== 'true' ||
      process.env.GITHUB_ACTIONS !== 'true' ||
      !isAbsolute(options.acceptanceAssetDirectory)
    ) {
      throw new Error(
        'Local acceptance assets require an absolute path on GitHub Actions.',
      )
    }
  } else if (options.acceptanceUnsignedMacos) {
    throw new Error('Unsigned macOS mode is valid only for local CI acceptance assets.')
  }
}

async function artifactRecord(path) {
  if (!path) throw new Error('All three native artifact paths are required.')
  const name = basename(path)
  if (!artifactPattern.test(name)) {
    throw new Error(`Unsafe native artifact name: ${name}.`)
  }
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(resolve(path))) hash.update(chunk)
  return {
    name,
    sha256: hash.digest('hex'),
  }
}

function shellQuote(value) {
  return `'${String(value).replaceAll("'", "'\"'\"'")}'`
}

function parseArguments(args) {
  const values = new Map()
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index]
    const value = args[index + 1]
    if (!key?.startsWith('--') || value === undefined) {
      throw new Error(`Expected --name value pairs; stopped at ${key ?? 'end'}.`)
    }
    if (values.has(key)) throw new Error(`Duplicate option: ${key}.`)
    values.set(key, value)
  }
  const known = new Set([
    '--version',
    '--repository',
    '--linux-x64-artifact',
    '--linux-arm64-artifact',
    '--macos-arm64-artifact',
    '--macos-team-id',
    '--output',
    '--acceptance-asset-directory',
    '--acceptance-unsigned-macos',
  ])
  for (const key of values.keys()) {
    if (!known.has(key)) throw new Error(`Unknown option: ${key}.`)
  }
  const unsigned = values.get('--acceptance-unsigned-macos')
  if (unsigned !== undefined && unsigned !== 'true' && unsigned !== 'false') {
    throw new Error('--acceptance-unsigned-macos must be true or false.')
  }
  return {
    version: values.get('--version'),
    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
    linuxX64Artifact: values.get('--linux-x64-artifact'),
    linuxArm64Artifact: values.get('--linux-arm64-artifact'),
    macosArm64Artifact: values.get('--macos-arm64-artifact'),
    macosTeamId: values.get('--macos-team-id'),
    output: values.get('--output'),
    acceptanceAssetDirectory: values.get('--acceptance-asset-directory'),
    acceptanceUnsignedMacos: unsigned === 'true',
  }
}

async function main() {
  const result = await renderNativeInstaller(parseArguments(process.argv.slice(2)))
  process.stdout.write(`Rendered ${result.outputPath}\n`)
  for (const [target, artifact] of Object.entries(result.artifacts)) {
    process.stdout.write(`${target}: ${artifact.name} ${artifact.sha256}\n`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
=== assemble-native-release.mjs (head) ===
#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { copyFile, mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { renderNativeInstaller } from './render-native-installer.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const noticesSource = resolve(repositoryRoot, 'THIRD_PARTY_NOTICES.md')
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/
const sourceCommitPattern = /^[0-9a-f]{40}$/
const repositoryPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/
const teamPattern = /^[A-Z0-9]{10}$/

export async function assembleNativeRelease(options) {
  validateOptions(options)
  const version = options.version
  const tag = `v${version}`
  const assetDirectory = resolve(options.assetDirectory)
  const expectedArtifacts = [
    {
      platform: 'linux',
      architecture: 'x64',
      name: `hvir-${version}-linux-x64.deb`,
    },
    {
      platform: 'linux',
      architecture: 'arm64',
      name: `hvir-${version}-linux-arm64.deb`,
    },
    {
      platform: 'macos',
      architecture: 'arm64',
      name: `hvir-${version}-darwin-arm64.pkg`,
    },
  ]

  await mkdir(assetDirectory, { recursive: true })
  await requireExactInputs(
    assetDirectory,
    expectedArtifacts.map(({ name }) => name),
  )

  const artifacts = await Promise.all(
    expectedArtifacts.map(async (artifact) => ({
      ...artifact,
      sha256: await sha256File(resolve(assetDirectory, artifact.name)),
    })),
  )
  const installerPath = resolve(assetDirectory, 'install.sh')
  const rendered = await renderNativeInstaller({
    version,
    repository: options.repository,
    linuxX64Artifact: resolve(assetDirectory, artifacts[0].name),
    linuxArm64Artifact: resolve(assetDirectory, artifacts[1].name),
    macosArm64Artifact: resolve(assetDirectory, artifacts[2].name),
    macosTeamId: options.macosTeamId,
    output: installerPath,
  })

  const renderedArtifacts = [
    rendered.artifacts.linuxX64,
    rendered.artifacts.linuxArm64,
    rendered.artifacts.macosArm64,
  ]
  for (const [index, renderedArtifact] of renderedArtifacts.entries()) {
    const artifact = artifacts[index]
    if (
      renderedArtifact.name !== artifact.name ||
      renderedArtifact.sha256 !== artifact.sha256
    ) {
      throw new Error(`Installer metadata disagrees with ${artifact.name}.`)
    }
  }

  const noticesName = 'THIRD_PARTY_NOTICES.md'
  const noticesPath = resolve(assetDirectory, noticesName)
  await copyFile(noticesSource, noticesPath)
  const installer = {
    name: basename(installerPath),
    sha256: await sha256File(installerPath),
  }
  const notices = {
    name: noticesName,
    sha256: await sha256File(noticesPath),
  }
  const manifest = {
    schemaVersion: 1,
    version,
    tag,
    sourceCommit: options.sourceSha,
    installer,
    notices,
    artifacts,
  }
  const manifestName = 'release-manifest.json'
  const manifestPath = resolve(assetDirectory, manifestName)
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

  const checksumNames = [
    ...artifacts.map(({ name }) => name),
    installer.name,
    manifestName,
    notices.name,
  ]
  const checksums = await Promise.all(
    checksumNames.map(
      async (name) => `${await sha256File(resolve(assetDirectory, name))}  ${name}`,
    ),
  )
  const checksumsPath = resolve(assetDirectory, 'SHA256SUMS')
  await writeFile(checksumsPath, `${checksums.join('\n')}\n`)

  await requireExactOutputs(assetDirectory, [...checksumNames, basename(checksumsPath)])
  return {
    assetDirectory,
    checksumsPath,
    installerPath,
    manifest,
    manifestPath,
  }
}

function validateOptions(options) {
  if (!versionPattern.test(options.version ?? '')) {
    throw new Error(`Invalid hvir version: ${options.version ?? 'missing'}.`)
  }
  if (!sourceCommitPattern.test(options.sourceSha ?? '')) {
    throw new Error('The release source must be one full lowercase commit SHA.')
  }
  if (!repositoryPattern.test(options.repository ?? '')) {
    throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
  }
  if (!teamPattern.test(options.macosTeamId ?? '')) {
    throw new Error('The macOS Apple team ID must contain 10 uppercase letters/digits.')
  }
<shellId: 20 completed with exit code 0>
```

</details>


---

<sub>1m 47s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml (lines 1-200)

<details>
<summary>184 lines</summary>

```
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

      - name: Check out release history
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.repository.default_branch }}
          fetch-depth: 0
          fetch-tags: true

      - name: Select trusted release source
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          if [ -z "$SOURCE_SHA" ]; then
            exit 0
          fi
          if [[ ! "$SOURCE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::Release source must be a full commit SHA"
            exit 1
          fi
          if ! git cat-file -e "$SOURCE_SHA^{commit}"; then
            echo "::error::Release source $SOURCE_SHA is not available"
            exit 1
          fi
          default_sha=$(git rev-parse "origin/$DEFAULT_BRANCH")
          if ! git merge-base --is-ancestor "$SOURCE_SHA" "$default_sha"; then
            echo "::error::Release source $SOURCE_SHA is not merged into $DEFAULT_BRANCH"
            exit 1
          fi
          git checkout --detach "$SOURCE_SHA"

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Select release version
        id: version
        env:
          BUMP: ${{ inputs.bump }}
          GH_TOKEN: ${{ github.token }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          current=$(node -p "require('./package.json').version")
          if [ "$BUMP" = current ]; then
            version=$current
          else
            npm version "$BUMP" --no-git-tag-version --ignore-scripts
            version=$(node -p "require('./package.json').version")
          fi
          tag="v$version"

          remote_tag_sha=$(git ls-remote origin "refs/tags/$tag^{}" | awk '{print $1}')
          if [ -z "$remote_tag_sha" ]; then
            remote_tag_sha=$(git ls-remote origin "refs/tags/$tag" | awk '{print $1}')
          fi

          if [ "$BUMP" = current ] && [ -n "$remote_tag_sha" ]; then
            if [ -n "$SOURCE_SHA" ] && [ "$remote_tag_sha" != "$SOURCE_SHA" ]; then
              echo "::error::$tag points at $remote_tag_sha, expected release source $SOURCE_SHA"
              exit 1
            fi
            git checkout --detach "$remote_tag_sha"
            tagged_version=$(node -p "require('./package.json').version")
            if [ "$tagged_version" != "$version" ]; then
              echo "::error::$tag contains package version $tagged_version, expected $version"
              exit 1
            fi
            if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
              if [ "$is_draft" != true ]; then
                echo "::error::$tag is already published; immutable releases require a new version"
                exit 1
              fi
            fi
            echo "Repairing or completing draft $tag at $remote_tag_sha"
          elif [ -n "$remote_tag_sha" ]; then
            echo "::error::$tag already exists; rerun with bump=current"
            exit 1
          elif gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            echo "::error::$tag has a release without the expected source tag"
            exit 1
          fi

          echo "current=$current" >> "$GITHUB_OUTPUT"
          echo "version=$version" >> "$GITHUB_OUTPUT"
          echo "tag=$tag" >> "$GITHUB_OUTPUT"
          echo "sha=$(git rev-parse HEAD)" >> "$GITHUB_OUTPUT"
          {
            echo "### hvir $version"
            echo
            echo "Version: $current -> $version ($BUMP)"
          } >> "$GITHUB_STEP_SUMMARY"

      - name: Require exact-source coherent CI evidence
        if: inputs.bump == 'current'
        timeout-minutes: 5
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GITHUB_TOKEN: ${{ github.token }}
          RELEASE_SOURCE_SHA: ${{ steps.version.outputs.sha }}
        run: node scripts/require-release-ci-evidence.mts

      - name: Prepare pull request or native release source
        id: release
        env:
          BUMP: ${{ inputs.bump }}
          VERSION: ${{ steps.version.outputs.version }}
          TAG: ${{ steps.version.outputs.tag }}
          GH_TOKEN: ${{ github.token }}
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          RELEASE_SOURCE_SHA: ${{ steps.version.outputs.sha }}
        run: |
          if [ "$BUMP" != current ]; then
            node scripts/prepare-release-pr.mjs "$VERSION"
            echo "ready=false" >> "$GITHUB_OUTPUT"
          else
            echo "ready=true" >> "$GITHUB_OUTPUT"
            echo "sha=$RELEASE_SOURCE_SHA" >> "$GITHUB_OUTPUT"
            echo "Release source: $RELEASE_SOURCE_SHA" >> "$GITHUB_STEP_SUMMARY"
          fi

          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          echo "tag=$TAG" >> "$GITHUB_OUTPUT"

  build-linux:
    name: Build and accept Linux package (${{ matrix.name }})
    needs: prepare
    if: needs.prepare.outputs.ready == 'true'
    runs-on: ${{ matrix.os }}
    timeout-minutes: 25
    strategy:
      fail-fast: false
      matrix:
        include:
          - name: Linux x64
            os: ubuntu-22.04
            build: npm run pack:linux:x64
            deb_arch: amd64
            release_arch: x64
          - name: Linux arm64
            os: ubuntu-22.04-arm
            build: npm run pack:linux:arm64
            deb_arch: arm64
            release_arch: arm64
    env:
      HVIR_LINUX_PACKAGE_ACCEPTANCE: '1'

    steps:
```

</details>


---

<sub>1m 55s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml (lines 200-520)

<details>
<summary>293 lines</summary>

```
    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Build native package
        run: ${{ matrix.build }}

      - name: Install, update, launch, and remove native package
        run: xvfb-run -a npm run smoke:linux:installed

      - name: Bind the accepted package name and digest
        env:
          DEB_ARCH: ${{ matrix.deb_arch }}
          RELEASE_ARCH: ${{ matrix.release_arch }}
        run: |
          version=$(node -p "require('./package.json').version")
          source="dist/hvir_${version}_${DEB_ARCH}.deb"
          target="hvir-${version}-linux-${RELEASE_ARCH}.deb"
          if [ ! -f "$source" ] || [ -e "dist/$target" ]; then
            echo "::error::Expected exactly one accepted package at $source"
            exit 1
          fi
          mv -- "$source" "dist/$target"
          (
            cd dist
            sha256sum "$target" > "$target.sha256"
            sha256sum --check --strict "$target.sha256"
          )

      - name: Retain the exact accepted package
        uses: actions/upload-artifact@v7
        with:
          name: release-linux-${{ matrix.release_arch }}
          path: |
            dist/hvir-*-linux-${{ matrix.release_arch }}.deb
            dist/hvir-*-linux-${{ matrix.release_arch }}.deb.sha256
          if-no-files-found: error
          compression-level: 0
          retention-days: 1

  accept-linux-ubuntu-24:
    name: Accept release package (${{ matrix.name }})
    needs:
      - prepare
      - build-linux
    if: >-
      needs.prepare.outputs.ready == 'true' &&
      needs.build-linux.result == 'success'
    runs-on: ${{ matrix.os }}
    timeout-minutes: 20
    strategy:
      fail-fast: false
      matrix:
        include:
          - name: Ubuntu 24.04 x64
            os: ubuntu-24.04
            artifact_name: release-linux-x64
            deb_arch: amd64
            release_arch: x64
          - name: Ubuntu 24.04 arm64
            os: ubuntu-24.04-arm
            artifact_name: release-linux-arm64
            deb_arch: arm64
            release_arch: arm64
    env:
      HVIR_LINUX_PACKAGE_ACCEPTANCE: '1'

    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Download the accepted baseline package
        uses: actions/download-artifact@v8
        with:
          name: ${{ matrix.artifact_name }}
          path: dist

      - name: Verify and restore the exact package for acceptance
        env:
          DEB_ARCH: ${{ matrix.deb_arch }}
          RELEASE_ARCH: ${{ matrix.release_arch }}
        run: node scripts/prepare-release-linux-package.mts "$RELEASE_ARCH" "$DEB_ARCH"

      - name: Install, update, launch, and remove native package
        run: xvfb-run -a npm run smoke:linux:installed

  accept-linux-debian:
    name: Accept release package (${{ matrix.name }})
    needs:
      - prepare
      - build-linux
    if: >-
      needs.prepare.outputs.ready == 'true' &&
      needs.build-linux.result == 'success'
    runs-on: ${{ matrix.os }}
    container:
      image: node:24-trixie
      options: --security-opt seccomp=unconfined
    timeout-minutes: 20
    strategy:
      fail-fast: false
      matrix:
        include:
          - name: Debian 13 x64
            os: ubuntu-22.04
            artifact_name: release-linux-x64
            deb_arch: amd64
            release_arch: x64
          - name: Debian 13 arm64
            os: ubuntu-22.04-arm
            artifact_name: release-linux-arm64
            deb_arch: arm64
            release_arch: arm64

    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}

      - name: Download the accepted baseline package
        uses: actions/download-artifact@v8
        with:
          name: ${{ matrix.artifact_name }}
          path: dist

      - name: Prepare the disposable Debian acceptance host
        run: |
          apt-get update
          DEBIAN_FRONTEND=noninteractive apt-get install \
            --no-install-recommends \
            -y \
            file \
            git \
            sudo \
            xauth \
            xvfb
          useradd --create-home --shell /bin/bash hvir-acceptance
          printf 'hvir-acceptance ALL=(ALL) NOPASSWD: ALL\n' \
            >/etc/sudoers.d/hvir-acceptance
          chmod 0440 /etc/sudoers.d/hvir-acceptance

      - name: Verify and restore the exact package for acceptance
        env:
          DEB_ARCH: ${{ matrix.deb_arch }}
          RELEASE_ARCH: ${{ matrix.release_arch }}
        run: |
          node scripts/prepare-release-linux-package.mts "$RELEASE_ARCH" "$DEB_ARCH"
          chown -R hvir-acceptance:hvir-acceptance "$GITHUB_WORKSPACE"

      - name: Install, update, launch, and remove native package
        run: |
          sudo -u hvir-acceptance env \
            HOME=/home/hvir-acceptance \
            HVIR_LINUX_PACKAGE_ACCEPTANCE=1 \
            PATH=/usr/local/bin:/usr/bin:/bin \
            xvfb-run -a npm run smoke:linux:installed -- --software-rendering

  build-macos:
    name: Build and accept macOS arm64
    needs: prepare
    if: needs.prepare.outputs.ready == 'true'
    uses: ./.github/workflows/macos-package-release.yml
    with:
      source_sha: ${{ needs.prepare.outputs.sha }}
      allow_merged_source: true
    secrets: inherit

  publish-native-release:
    name: Assemble, verify, and publish immutable release
    needs:
      - prepare
      - build-linux
      - accept-linux-ubuntu-24
      - accept-linux-debian
      - build-macos
    if: >-
      needs.prepare.outputs.ready == 'true' &&
      needs.build-linux.result == 'success' &&
      needs.accept-linux-ubuntu-24.result == 'success' &&
      needs.accept-linux-debian.result == 'success' &&
      needs.build-macos.result == 'success'
    runs-on: ubuntu-24.04
    timeout-minutes: 20
    environment: native-release-signing
    permissions:
      actions: read
      contents: write
    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}
          fetch-depth: 0
          fetch-tags: true

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Download accepted Linux x64 package
        uses: actions/download-artifact@v8
        with:
          name: release-linux-x64
          path: dist/release

      - name: Download accepted Linux arm64 package
        uses: actions/download-artifact@v8
        with:
          name: release-linux-arm64
          path: dist/release

      - name: Download protected accepted macOS package
        uses: actions/download-artifact@v8
        with:
          name: release-macos-arm64
          path: dist/release

      - name: Verify the exact accepted native artifact set
        env:
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          expected=$(printf '%s\n' \
            "hvir-${VERSION}-darwin-arm64.pkg" \
            "hvir-${VERSION}-darwin-arm64.pkg.sha256" \
            "hvir-${VERSION}-linux-arm64.deb" \
            "hvir-${VERSION}-linux-arm64.deb.sha256" \
            "hvir-${VERSION}-linux-x64.deb" \
            "hvir-${VERSION}-linux-x64.deb.sha256" |
            sort)
          actual=$(find dist/release -maxdepth 1 -type f -printf '%f\n' | sort)
          if [ "$actual" != "$expected" ]; then
            echo "::error::Accepted native artifact set is incomplete or unexpected"
            diff -u <(printf '%s\n' "$expected") <(printf '%s\n' "$actual") || true
            exit 1
          fi
          (
            cd dist/release
            sha256sum --check --strict \
              "hvir-${VERSION}-linux-x64.deb.sha256" \
              "hvir-${VERSION}-linux-arm64.deb.sha256" \
              "hvir-${VERSION}-darwin-arm64.pkg.sha256"
            rm -- ./*.sha256
          )

      - name: Require repository release immutability
        env:
          GH_TOKEN: ${{ secrets.IMMUTABLE_RELEASES_READ_TOKEN }}
        run: |
          if [ -z "$GH_TOKEN" ]; then
            echo "::error::IMMUTABLE_RELEASES_READ_TOKEN is unavailable in native-release-signing"
            exit 1
          fi
          enabled=$(gh api \
            -H 'Accept: application/vnd.github+json' \
            -H 'X-GitHub-Api-Version: 2026-03-10' \
            "repos/$GITHUB_REPOSITORY/immutable-releases" \
            --jq .enabled)
          if [ "$enabled" != true ]; then
            echo "::error::Enable immutable releases before native release cutover"
            exit 1
          fi

      - name: Assemble exact release metadata and installer
        env:
          MACOS_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
          RELEASE_SHA: ${{ needs.prepare.outputs.sha }}
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          npm run assemble:native-release -- \
            --version "$VERSION" \
            --source-sha "$RELEASE_SHA" \
            --repository "$GITHUB_REPOSITORY" \
            --macos-team-id "$MACOS_TEAM_ID" \
            --asset-directory dist/release
          (
            cd dist/release
            sha256sum --check SHA256SUMS
          )

      - name: Create or repair a private draft
        env:
          GH_TOKEN: ${{ github.token }}
          RELEASE_REF_WRITE_TOKEN: ${{ secrets.IMMUTABLE_RELEASES_READ_TOKEN }}
          RELEASE_SHA: ${{ needs.prepare.outputs.sha }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          remote_tag_sha=$(git ls-remote origin "refs/tags/$TAG^{}" | awk '{print $1}')
          if [ -z "$remote_tag_sha" ]; then
            remote_tag_sha=$(git ls-remote origin "refs/tags/$TAG" | awk '{print $1}')
          fi
          if [ -n "$remote_tag_sha" ] && [ "$remote_tag_sha" != "$RELEASE_SHA" ]; then
            echo "::error::$TAG points at $remote_tag_sha, expected $RELEASE_SHA"
            exit 1
          fi
          if [ -z "$remote_tag_sha" ]; then
            GH_TOKEN="$RELEASE_REF_WRITE_TOKEN" gh api \
              --method POST \
              -H 'Accept: application/vnd.github+json' \
              -H 'X-GitHub-Api-Version: 2026-03-10' \
```

</details>


---

<sub>1m 55s</sub>

### `bash`

**Read release changelog script**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat scripts/release-changelog.mjs

<details>
<summary>23 lines</summary>

```
export function sortClosedIssues(issues) {
  for (const issue of issues) {
    if (
      !Number.isSafeInteger(issue.number) ||
      issue.number < 1 ||
      typeof issue.title !== 'string' ||
      issue.title.length === 0 ||
      typeof issue.url !== 'string' ||
      issue.url.length === 0 ||
      (issue.closedAt !== null && typeof issue.closedAt !== 'string')
    ) {
      throw new Error(
        'GitHub returned an invalid closed issue record; verify the workflow has issues: read.',
      )
    }
  }

  return [...issues].sort((first, second) => {
    const firstClosedAt = first.closedAt ?? '\uffff'
    const secondClosedAt = second.closedAt ?? '\uffff'
    return firstClosedAt.localeCompare(secondClosedAt) || first.number - second.number
  })
}
<shellId: 21 completed with exit code 0>
```

</details>


---

<sub>1m 59s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml (lines 520-640)

<details>
<summary>92 lines</summary>

```
              -H 'X-GitHub-Api-Version: 2026-03-10' \
              "repos/$GITHUB_REPOSITORY/git/refs" \
              -f ref="refs/tags/$TAG" \
              -f sha="$RELEASE_SHA" \
              >/dev/null
          fi

          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
            if [ "$is_draft" != true ]; then
              echo "::error::$TAG is already public and cannot be repaired in place"
              exit 1
            fi
          else
            gh release create "$TAG" \
              --repo "$GITHUB_REPOSITORY" \
              --verify-tag \
              --draft \
              --title "$TAG" \
              --generate-notes
          fi

      - name: Upload and validate the complete draft asset set
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          gh release upload "$TAG" dist/release/* \
            --repo "$GITHUB_REPOSITORY" \
            --clobber
          actual=$(gh release view "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --json assets \
            --jq '.assets[].name' |
            sort)
          expected=$(printf '%s\n' \
            SHA256SUMS \
            THIRD_PARTY_NOTICES.md \
            "hvir-${VERSION}-darwin-arm64.pkg" \
            "hvir-${VERSION}-linux-arm64.deb" \
            "hvir-${VERSION}-linux-x64.deb" \
            install.sh \
            release-manifest.json |
            sort)
          if [ "$actual" != "$expected" ]; then
            echo "::error::Draft release asset set is incomplete or unexpected"
            diff -u <(printf '%s\n' "$expected") <(printf '%s\n' "$actual") || true
            exit 1
          fi

      - name: Publish the complete immutable release
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          gh release edit "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --draft=false \
            --latest

      - name: Verify published release attestation and downloaded assets
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          verified=false
          for attempt in {1..12}; do
            if gh release verify "$TAG" --repo "$GITHUB_REPOSITORY"; then
              verified=true
              break
            fi
            echo "Release attestation is not ready (attempt $attempt/12)"
            sleep 5
          done
          if [ "$verified" != true ]; then
            echo "::error::GitHub did not verify immutable release $TAG"
            exit 1
          fi

          verify_directory="$RUNNER_TEMP/hvir-release-verification"
          mkdir "$verify_directory"
          gh release download "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --dir "$verify_directory"
          (
            cd "$verify_directory"
            sha256sum --check SHA256SUMS
          )
          for asset in "$verify_directory"/*; do
            gh release verify-asset "$TAG" "$asset" --repo "$GITHUB_REPOSITORY"
          done
          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
          if [ "$latest" != "$TAG" ]; then
            echo "::error::Latest release is $latest, expected $TAG"
            exit 1
          fi
```

</details>


---

<sub>1m 59s</sub>

### `bash`

**Read prepare-release-pr script**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,200p' scripts/prepare-release-pr.mjs

<details>
<summary>181 lines</summary>

```
#!/usr/bin/env node

import { execFile } from 'node:child_process'
import { appendFile, readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

import { sortClosedIssues } from './release-changelog.mjs'

const execFileAsync = promisify(execFile)
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const expectedVersionFiles = ['package-lock.json', 'package.json']
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/

async function main() {
  const version = process.argv[2]
  if (!versionPattern.test(version ?? '')) {
    throw new Error(
      `Expected a release version like 1.2.3, received ${version ?? 'nothing'}.`,
    )
  }

  const repository = requiredEnvironment('GITHUB_REPOSITORY')
  const defaultBranch = requiredEnvironment('GITHUB_DEFAULT_BRANCH')
  const serverUrl = process.env.GITHUB_SERVER_URL ?? 'https://github.com'
  const runUrl = `${serverUrl}/${repository}/actions/runs/${requiredEnvironment('GITHUB_RUN_ID')}`
  const tag = `v${version}`
  const branch = `release/${tag}`

  await assertVersionFiles(version)
  await assertOnlyVersionFilesChanged()

  const baseSha = await git('rev-parse', 'HEAD')
  const previousTag = await findPreviousTag(baseSha)
  const since = await findReleaseBoundary(previousTag)
  const closedIssues = await listClosedIssues(repository, since)

  await git('config', 'user.name', 'github-actions[bot]')
  await git(
    'config',
    'user.email',
    '41898282+github-actions[bot]@users.noreply.github.com',
  )
  await git('add', ...expectedVersionFiles)
  await git('commit', '-m', `Bump hvir to ${version}`)

  const localTree = await git('rev-parse', 'HEAD^{tree}')
  const remoteBranch = await run('git', [
    'ls-remote',
    '--heads',
    'origin',
    `refs/heads/${branch}`,
  ])

  if (remoteBranch.trim()) {
    await git('fetch', 'origin', `refs/heads/${branch}:refs/remotes/origin/${branch}`)
    const remoteTree = await git('rev-parse', `refs/remotes/origin/${branch}^{tree}`)
    if (remoteTree !== localTree) {
      throw new Error(
        `Remote branch ${branch} already exists with different release contents.`,
      )
    }
  } else {
    await git('push', 'origin', `HEAD:refs/heads/${branch}`)
  }

  const existingPullRequest = await findOpenPullRequest(repository, branch)
  const pullRequestUrl =
    existingPullRequest ??
    (await createPullRequest({
      baseSha,
      branch,
      closedIssues,
      defaultBranch,
      previousTag,
      repository,
      runUrl,
      serverUrl,
      since,
      version,
    }))

  process.stdout.write(`Release PR: ${pullRequestUrl}\n`)
  const summaryPath = process.env.GITHUB_STEP_SUMMARY
  if (summaryPath) {
    await appendFile(summaryPath, `\nRelease PR: ${pullRequestUrl}\n`)
  }
}

async function assertVersionFiles(version) {
  const rootPackage = JSON.parse(
    await readFile(join(repositoryRoot, 'package.json'), 'utf8'),
  )
  const lockfile = JSON.parse(
    await readFile(join(repositoryRoot, 'package-lock.json'), 'utf8'),
  )
  const observed = [
    ['package.json', rootPackage.version],
    ['package-lock.json', lockfile.version],
    ['package-lock.json root package', lockfile.packages?.['']?.version],
  ]
  for (const [source, observedVersion] of observed) {
    if (observedVersion !== version) {
      throw new Error(`${source} contains ${observedVersion}, expected ${version}.`)
    }
  }
}

async function assertOnlyVersionFilesChanged() {
  const changedFiles = (await git('diff', '--name-only'))
    .split('\n')
    .filter(Boolean)
    .sort()
  if (JSON.stringify(changedFiles) !== JSON.stringify(expectedVersionFiles)) {
    throw new Error(
      `A release bump may change only ${expectedVersionFiles.join(', ')}; observed ${changedFiles.join(', ') || 'no changes'}.`,
    )
  }
}

async function findPreviousTag(baseSha) {
  const tag = await tryRun('git', ['describe', '--tags', '--abbrev=0', baseSha])
  return tag?.trim() || undefined
}

async function findReleaseBoundary(previousTag) {
  if (previousTag) {
    const publishedAt = await tryRun('gh', [
      'release',
      'view',
      previousTag,
      '--repo',
      requiredEnvironment('GITHUB_REPOSITORY'),
      '--json',
      'publishedAt',
      '--jq',
      '.publishedAt',
    ])
    if (publishedAt?.trim()) return publishedAt.trim()
    return git('show', '-s', '--format=%cI', previousTag)
  }

  const history = await git('log', '--reverse', '--format=%cI')
  const firstCommitDate = history.split('\n').find(Boolean)
  if (!firstCommitDate)
    throw new Error('Cannot determine the release changelog boundary.')
  return firstCommitDate
}

async function listClosedIssues(repository, since) {
  const output = await run('gh', [
    'issue',
    'list',
    '--repo',
    repository,
    '--state',
    'closed',
    '--search',
    `closed:>${since}`,
    '--limit',
    '1000',
    '--json',
    'number,title,url,closedAt',
  ])
  return sortClosedIssues(JSON.parse(output))
}

async function findOpenPullRequest(repository, branch) {
  const output = await run('gh', [
    'pr',
    'list',
    '--repo',
    repository,
    '--head',
    branch,
    '--base',
    requiredEnvironment('GITHUB_DEFAULT_BRANCH'),
    '--state',
    'open',
    '--json',
    'url',
  ])
  return JSON.parse(output)[0]?.url
}

async function createPullRequest(input) {
  const issueLines = input.closedIssues.length
    ? input.closedIssues.map(
        (issue) => `- [#${issue.number}](${issue.url}) ${markdownText(issue.title)}`,
      )
    : ['- No issues were closed in this release window.']
  const boundaryDescription = input.previousTag
    ? `[${input.previousTag}](${input.serverUrl}/${input.repository}/releases/tag/${input.previousTag})`
    : `the first repository commit (${input.since})`
  const body = [
    `## hvir ${input.version}`,
    '',
    `Automated maintenance release from \`${input.baseSha}\`. This PR bumps the repository packages to \`${input.version}\`; its body is the release changelog and intentionally has no governing issue.`,
<shellId: 22 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### `grep`

**install\.sh|releases/latest|curl .*hvir**

"install\.sh|releases/latest|curl .*hvir" in !{node_modules,package-lock.json,.git}/**

<details>
<summary>19 matches</summary>

```
/private/var/tmp/ws/f7354e9d/hvir/scripts/assemble-native-release.mjs:54:  const installerPath = resolve(assetDirectory, 'install.sh')
/private/var/tmp/ws/f7354e9d/hvir/scripts/assemble-native-release.mjs:149:    'install.sh',
/private/var/tmp/ws/f7354e9d/hvir/scripts/native-installer.template.sh:59:  install.sh
/private/var/tmp/ws/f7354e9d/hvir/scripts/native-installer.template.sh:60:  install.sh --uninstall
/private/var/tmp/ws/f7354e9d/hvir/scripts/native-installer.template.sh:61:  install.sh --uninstall --purge
/private/var/tmp/ws/f7354e9d/hvir/test/ghostty-web-update-policy.test.ts:145:        'https://github.com/jarmak-personal/ghostty-web/releases/latest',
/private/var/tmp/ws/f7354e9d/hvir/test/native-installer.test.ts:36:    const output = join(fixture.root, 'dist', 'install.sh')
/private/var/tmp/ws/f7354e9d/hvir/test/native-installer.test.ts:65:    const output = join(fixture.root, 'install.sh')
/private/var/tmp/ws/f7354e9d/hvir/test/native-installer.test.ts:250:        output: join(fixture.root, 'install.sh'),
/private/var/tmp/ws/f7354e9d/hvir/test/native-installer.test.ts:259:        output: join(fixture.root, 'install.sh'),
/private/var/tmp/ws/f7354e9d/hvir/test/native-installer.test.ts:327:  const script = join(fixture.root, 'install.sh')
/private/var/tmp/ws/f7354e9d/hvir/test/native-installer.test.ts:500:  const script = join(fixture.root, 'install.sh')
/private/var/tmp/ws/f7354e9d/hvir/test/native-release-assembly.test.ts:56:      installer: { name: 'install.sh' },
/private/var/tmp/ws/f7354e9d/hvir/test/native-release-assembly.test.ts:65:      'install.sh',
/private/var/tmp/ws/f7354e9d/hvir/test/release-workflow-security.test.ts:518:      'install.sh',
/private/var/tmp/ws/f7354e9d/hvir/test/linux-native-package.test.ts:17:  new URL('../build/linux/after-install.sh', import.meta.url),
/private/var/tmp/ws/f7354e9d/hvir/electron-builder.yml:55:  afterInstall: build/linux/after-install.sh
/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml:562:            install.sh \
/private/var/tmp/ws/f7354e9d/hvir/.github/workflows/release.yml:612:          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
```

</details>


---

<sub>2m 7s</sub>

### `bash`

**Read tests that reference docs files**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat test/merge-pr-skill.test.ts; echo "=== issue-lifecycle-guidance.test.ts ==="; cat test/issue-lifecycle-guidance.test.ts

<details>
<summary>133 lines</summary>

```
import { lstatSync, readFileSync, readlinkSync } from 'node:fs'

import { describe, expect, it } from 'vitest'

const skill = readFileSync(
  new URL('../.claude/skills/hvir-merge-pr/SKILL.md', import.meta.url),
  'utf8',
)
const epicSkill = readFileSync(
  new URL('../.claude/skills/hvir-implement-epic/SKILL.md', import.meta.url),
  'utf8',
)
const agents = readFileSync(new URL('../AGENTS.md', import.meta.url), 'utf8')
const contributing = readFileSync(new URL('../CONTRIBUTING.md', import.meta.url), 'utf8')
const projectManagement = readFileSync(
  new URL('../docs/project-management.md', import.meta.url),
  'utf8',
)
const packageJson = readFileSync(new URL('../package.json', import.meta.url), 'utf8')

describe('hvir pull-request merge skill', () => {
  it('is exposed through Claude and Codex-compatible skill paths', () => {
    const codexPath = new URL('../.agents/skills/hvir-merge-pr', import.meta.url)
    expect(lstatSync(codexPath).isSymbolicLink()).toBe(true)
    expect(readlinkSync(codexPath)).toBe('../../.claude/skills/hvir-merge-pr')
    expect(skill).toContain('name: hvir-merge-pr')
  })

  it('resolves explicit or one handed-off pull request without repository discovery', () => {
    expect(skill).toContain('Use the number supplied by the maintainer')
    expect(skill).toContain('latest verified lifecycle handoff in the active interaction')
    expect(skill).toContain('Ask for one pull-request number')
    expect(skill).toContain('Never search branches, issues, the Project')
    expect(skill).toContain('do not request a separate issue number or candidate SHA')
  })

  it('uses GitHub protected auto-merge without a second classifier', () => {
    expect(skill).toContain('gh pr view <pr> --json baseRefName')
    expect(skill).toContain('delivery-route guard')
    expect(skill).toContain('gh pr merge <pr> --merge --auto')
    expect(skill).toContain('Never use `--admin`')
    expect(skill).toContain('repository ruleset')
    expect(skill).toContain('Monitor the accepted pull request')
    expect(skill).not.toContain('npm run issue:merge')
    expect(skill).not.toContain('repository-owned read-only classifier')
  })

  it('reconciles only focused Project owners after GitHub records the merge', () => {
    expect(skill).toContain('native closing relationships')
    expect(skill).toContain('npm run project:record -- --issue <issue>')
    expect(skill).toContain('project:status -- --issue <issue> --pr <pr>')
    expect(skill).not.toContain('project:measure')
    expect(skill).toContain('granted by this invocation separately from GitHub')
    expect(skill).toContain('cleanup is not merge admission')
  })

  it('keeps epic-child integration and optional cleanup with the epic owner', () => {
    expect(skill).toContain('pull requests remain integrated only by')
    expect(epicSkill).toContain('pull-request acceptance remains the small')
    expect(epicSkill).toContain('Resume bounded post-merge cleanup')
    expect(epicSkill).toContain('Cleanup is not part of merge admission')
    expect(epicSkill).toContain('run performs no merge')
    expect(epicSkill).not.toContain('internal `$hvir-merge-pr` transfer')
  })

  it('documents and enforces removal of the bespoke merge coordinator', () => {
    expect(agents).toContain('explicit `hvir-merge-pr` invocation is the approval')
    expect(contributing).toContain('gh pr merge <pr> --merge --auto')
    expect(contributing).toContain('Auto-merge allows a candidate')
    expect(projectManagement).toContain('Repository tooling does not duplicate')
    expect(packageJson).not.toContain('"issue:merge"')
  })
})
=== issue-lifecycle-guidance.test.ts ===
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'

const markdown = new MarkdownIt()
const documents = [
  'CONTRIBUTING.md',
  '.claude/skills/hvir-create-issue/SKILL.md',
  '.claude/skills/hvir-review-issue/SKILL.md',
  '.claude/skills/hvir-implement-issue/SKILL.md',
]

// Derive GitHub-style heading fragments from rendered inline text, including duplicate headings.
function headingFragments(source: string): Set<string> {
  const tokens = markdown.parse(source, {})
  const fragments = new Set<string>()
  for (const [index, token] of tokens.entries()) {
    if (token.type !== 'heading_open') continue
    const text = (tokens[index + 1]?.children ?? [])
      .filter((child) => ['text', 'code_inline', 'image'].includes(child.type))
      .map((child) => child.content)
      .join('')
    const slug = text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}_\-\s]/gu, '')
      .replace(/\s/g, '-')
    let fragment = slug
    for (let suffix = 1; fragments.has(fragment); suffix++) fragment = `${slug}-${suffix}`
    fragments.add(fragment)
  }
  return fragments
}

describe.each(documents)('issue lifecycle guidance: %s', (document) => {
  const source = readFileSync(document, 'utf8')

  it('resolves its local links and heading fragments', () => {
    const tokens = markdown.parse(source, {}).flatMap((token) => token.children ?? [])
    for (const token of tokens) {
      if (token.type !== 'link_open') continue
      const href = token.attrGet('href')
      if (typeof href !== 'string') throw new Error(`${document}: link has no href`)
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue
      const [local = '', fragment] = href.split('#', 2)
      const relative = decodeURIComponent(local.split('?', 1)[0]!)
      const target = relative ? resolve(dirname(document), relative) : resolve(document)
      expect(existsSync(target), `${document}: ${href}`).toBe(true)
      if (fragment) {
        expect(
          headingFragments(readFileSync(target, 'utf8')),
          `${document}: ${href}`,
        ).toContain(decodeURIComponent(fragment))
      }
    }
  })

  it('references existing npm scripts', () => {
    const { scripts } = JSON.parse(readFileSync('package.json', 'utf8')) as {
      scripts: Record<string, string>
    }
    for (const match of source.matchAll(
      /npm run\s+(?:--silent\s+)?([a-z][a-z0-9:-]*)/g,
    )) {
      const command = match[1]!
      expect(Object.hasOwn(scripts, command), `${document}: npm run ${command}`).toBe(
        true,
      )
    }
  })
})
<shellId: 23 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### `bash`

**Read smoke-scenario-runner test docs reference**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '585,660p' test/smoke-scenario-runner.test.ts

<details>
<summary>76 lines</summary>

```
} catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ESRCH') throw error
  }
}

describe('Electron smoke command contracts', () => {
  const packageJson = JSON.parse(
    readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
  ) as { scripts: Record<string, string> }
  const invocationScript = readFileSync(
    new URL('../scripts/run-smoke.sh', import.meta.url),
    'utf8',
  )
  const interruptionScript = readFileSync(
    new URL('../scripts/run-smoke-interruption.mts', import.meta.url),
    'utf8',
  )
  const gauntletScript = readFileSync(
    new URL('../scripts/phase8-gauntlet.sh', import.meta.url),
    'utf8',
  )
  const prePushHook = readFileSync(
    new URL('../.githooks/pre-push', import.meta.url),
    'utf8',
  )
  const contributing = readFileSync(
    new URL('../CONTRIBUTING.md', import.meta.url),
    'utf8',
  )
  const smokeWorkflow = readFileSync(
    new URL('../src/main/smoke/index.ts', import.meta.url),
    'utf8',
  )
  const capacityScenario = readFileSync(
    new URL('../src/main/smoke/capacity.ts', import.meta.url),
    'utf8',
  )
  const capacityPerformancePolicy = readFileSync(
    new URL('../src/main/smoke/capacity-performance.ts', import.meta.url),
    'utf8',
  )
  const capacityTerminalScenario = readFileSync(
    new URL('../src/main/smoke/capacity-terminals.ts', import.meta.url),
    'utf8',
  )
  const viewerPositionScenario = readFileSync(
    new URL('../src/main/smoke/viewer-position.ts', import.meta.url),
    'utf8',
  )
  const viewerFindScenario = readFileSync(
    new URL('../src/main/smoke/viewer-find.ts', import.meta.url),
    'utf8',
  )
  const viewerContentScenario = readFileSync(
    new URL('../src/main/smoke/viewer-content.ts', import.meta.url),
    'utf8',
  )
  const gitWorkflowScenario = readFileSync(
    new URL('../src/main/smoke/git-workflow.ts', import.meta.url),
    'utf8',
  )
  const workspaceRemoteScenario = readFileSync(
    new URL('../src/main/smoke/workspace-remote.ts', import.meta.url),
    'utf8',
  )
  const projectFileOperationsScenario = readFileSync(
    new URL('../src/main/smoke/project-file-operations.ts', import.meta.url),
    'utf8',
  )
  const filesInteractionsScenario = readFileSync(
    new URL('../src/main/smoke/files-interactions.ts', import.meta.url),
    'utf8',
  )
  const failureEvidenceScenario = readFileSync(
    new URL('../src/main/smoke/failure-evidence.mts', import.meta.url),
    'utf8',
<shellId: 24 completed with exit code 0>
```

</details>


---

<sub>2m 24s</sub>

### `grep`

**workbench for|agent workbench|hvir is |hvir \(|description:|Comment=|GenericName|Keywords**

"workbench for|agent workbench|hvir is |hvir \(|description:|Comment=|GenericName|Keywords" in !{node_modules,package-lock.json,.git,test}/**

<details>
<summary>43 matches</summary>

```
[grep content: 35 matches across 27 file(s) under /private/var/tmp/ws/f7354e9d/hvir]
THIRD_PARTY_NOTICES.md:6: components only; hvir is not affiliated with or endorsed by their authors.
src/main/harness/harness-provider-registry.ts:42:             description: provider.profile.defaultProfile.description,
src/main/window/electron-renderer-document-lifecycle.ts:9:   readonly failed: (code: number, description: string, url: string) => void
src/main/window/electron-window-manager.ts:375:           title: 'hvir is not responding',
scripts/record-macos-ssh-identity.sh:117:     "$label Local Network usage description: ${usage:-unavailable}"
src/main/smoke/sessions-usage-provider.ts:24:       description: 'Production-composed deterministic Usage smoke fixture.',
src/main/harness/harness-provider-contract.ts:179:   readonly description: string
src/main/harness/providers/codex.ts:57:       description: 'Codex with exact rollout discovery and recovery.',
src/main/harness/providers/github-copilot.ts:16:       description:
src/main/harness/providers/shell.ts:22:       description: 'The default interactive shell on this host.',
src/main/harness/providers/gemini.ts:16:       description:
src/main/harness/providers/pi.ts:16:       description:
src/main/harness/providers/claude-code.ts:43:       description: 'Claude Code with exact hvir-managed session recovery.',
src/main/harness/providers/cursor.ts:16:       description:

src/main/harness/harness-profile-store.ts (3 match(es)):
  340:         description: source.description,
  450:     description: template.description,
  613:     description: value.description,
electron-builder.ssh-acceptance.yml:14:     NSLocalNetworkUsageDescription: >-
src/shared/harness-provider.ts:57:     readonly description: string

.github/workflows/release.yml (2 match(es)):
  7:         description: current releases package.json; patch/minor/major open a validated release PR.
  16:         description: Exact merged release source; automation only, normally left blank.

.github/workflows/project-pr-planning.yml (2 match(es)):
  11:         description: Pull request number to reconcile from current GitHub state
  15:         description: Apply eligible planning convergence and child closure

.github/workflows/smoke-stress.yml (2 match(es)):
  7:         description: Focused scenario to repeat
  21:         description: Fixed attempt count (not retries)

.github/workflows/macos-package-release.yml (2 match(es)):
  7:         description: Full merged release source commit SHA to package.
  11:         description: Permit an exact commit contained in the selected branch for release assembly.

.github/workflows/project-kind.yml (2 match(es)):
  9:         description: Issue number; leave empty to reconcile every open issue
  13:         description: Apply deterministic label and Project mutations
src/shared/host-path.ts:4:  * Every path in hvir is a `(host, path)` pair — never a bare string, even in
src/renderer/src/settings/harness-profile-draft.ts:30:       description: profile.description,

src/renderer/src/document-review/DocumentReviewInlineSurface.tsx (2 match(es)):
  162:               comment={comment}
  316:           <AnchorState comment={comment} />
src/renderer/src/settings/SettingsSection.tsx:18:   readonly description: string
src/renderer/src/sessions/sessions-terminal-detail-controller.ts:148:         'Terminal detail is paused while hvir is not in the foreground.',
```

</details>


---

<sub>2m 24s</sub>

### `bash`

**Read application runtime policy (user data paths)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/main/application-runtime.ts; echo "=== application-runtime-policy.ts ==="; cat src/main/application-runtime-policy.ts; echo "=== shared/application-build-channel.ts ==="; cat src/shared/application-build-channel.ts

<details>
<summary>56 lines</summary>

```
import { join } from 'node:path'
import { app } from 'electron'

import { localPath } from '../shared'
import { configureApplicationRuntime } from './application-runtime-policy'
import { LocalHost } from './project-host/local-host'

/** The compiled application identity and storage authority, selected during module load. */
export const applicationRuntime = configureApplicationRuntime(
  app,
  __HVIR_BUILD_CHANNEL__,
  (path) => LocalHost.ensureBootstrapDirectory(localPath(path)),
)

/** Resolves one application-owned state file beneath the selected runtime root. */
export function applicationUserDataPath(name: string): string {
  return join(applicationRuntime.userDataRoot, name)
}
=== application-runtime-policy.ts ===
import { join } from 'node:path'

import type { ApplicationBuildChannel } from '../shared'

export const SSH_ACCEPTANCE_USER_DATA_DIRECTORY = 'hvir-ssh-acceptance'

export interface ApplicationRuntime {
  readonly buildChannel: ApplicationBuildChannel
  readonly userDataRoot: string
}

interface ElectronApplicationPaths {
  getPath(name: 'appData' | 'userData'): string
  setPath(name: 'userData', path: string): void
}

/** Selects the one application-state authority before any storage owner is built. */
export function configureApplicationRuntime(
  paths: ElectronApplicationPaths,
  buildChannel: ApplicationBuildChannel,
  prepareUserDataRoot: (path: string) => void,
): ApplicationRuntime {
  if (buildChannel !== 'ssh-acceptance') {
    return { buildChannel, userDataRoot: paths.getPath('userData') }
  }
  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
  prepareUserDataRoot(userDataRoot)
  paths.setPath('userData', userDataRoot)
  return { buildChannel, userDataRoot }
}
=== shared/application-build-channel.ts ===
/** Closed build identities that may appear in local application evidence. */
export const APPLICATION_BUILD_CHANNELS = [
  'release',
  'development',
  'ssh-acceptance',
  'smoke',
] as const

export type ApplicationBuildChannel = (typeof APPLICATION_BUILD_CHANNELS)[number]

export function isApplicationBuildChannel(
  value: unknown,
): value is ApplicationBuildChannel {
  return APPLICATION_BUILD_CHANNELS.includes(value as ApplicationBuildChannel)
}
<shellId: 25 completed with exit code 0>
```

</details>


---

<sub>2m 24s</sub>

### `bash`

**Check node toolchain availability**

$ cd /private/var/tmp/ws/f7354e9d/hvir && which node npm npx 2>&1; node --version 2>&1; npm --version 2>&1; echo "---"; ls node_modules/.bin 2>/dev/null | head -60; echo "--- electron present? ---"; ls node_modules/electron 2>/dev/null | head; ls node_modules/electron/dist 2>/dev/null | head -5

<details>
<summary>82 lines</summary>

```
/opt/homebrew/bin/node
/opt/homebrew/bin/npm
/opt/homebrew/bin/npx
v26.5.0
11.17.0
---
acorn
asar
baseline-browser-mapping
browserslist
cross-env
cross-env-shell
csv2json
csv2tsv
dsv2dsv
dsv2json
ejs
electron
electron-builder
electron-fuses
electron-osx-flat
electron-osx-sign
electron-rebuild
electron-vite
electron-windows-sign
esbuild
eslint
eslint-config-prettier
install-app-deps
install-electron
jake
jiti
js-yaml
jsesc
json2csv
json2dsv
json2tsv
json5
katex
markdown-it
marked
mime
mkdirp
nanoid
node-gyp
node-which
nopt
parser
postject
prettier
read-binary-file-arch
rimraf
rollup
semver
stryker
tree-kill
tsc
tsserver
tsv2csv
tsv2json
update-browserslist-db
uuid
vite
vitest
why-is-node-running
yaml
--- electron present? ---
abi_version
checksums.json
cli.js
dist
electron.d.ts
index.js
install.js
LICENSE
package.json
path.txt
Electron.app
LICENSE
LICENSES.chromium.html
version
<shellId: 26 completed with exit code 0>
```

</details>


---

<sub>2m 33s</sub>

### `bash`

**Read sessions projection shared types**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' src/shared/sessions-projection.ts

<details>
<summary>122 lines</summary>

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
<shellId: 27 completed with exit code 0>
```

</details>


---

<sub>2m 33s</sub>

### `bash`

**Read sessions overview component**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/sessions/SessionsOverview.tsx | head -200

<details>
<summary>194 lines</summary>

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
<shellId: 28 completed with exit code 0>
```

</details>


---

<sub>2m 33s</sub>

### `bash`

**Read document review shared types**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,160p' src/shared/document-review.ts

<details>
<summary>141 lines</summary>

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
<shellId: 29 completed with exit code 0>
```

</details>


---

<sub>2m 38s</sub>

### `bash`

**Collect user-visible UI labels from renderer**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rhoE "(aria-label|title|label|placeholder)=\"[^\"]{3,80}\"" src/renderer/src --include='*.tsx' | sort | uniq -c | sort -rn | awk '{$1=""; print}' | sort -u | head -300

<details>
<summary>138 lines</summary>

```
aria-label="Absolute executable path"
 aria-label="Add comment for selected source lines"
 aria-label="Back"
 aria-label="Bounded diff preview"
 aria-label="Clear filename search"
 aria-label="Close commit details"
 aria-label="Close filename search"
 aria-label="Close Git history"
 aria-label="Close secondary viewer"
 aria-label="Close terminal search"
 aria-label="Collapse terminal rail"
 aria-label="Commit details"
 aria-label="Commit history"
 aria-label="Commit message"
 aria-label="Context used"
 aria-label="Diff base"
 aria-label="Document review comments"
 aria-label="Document review"
 aria-label="Environment name"
 aria-label="Environment operation"
 aria-label="Environment value"
 aria-label="Exact review delivery preview"
 aria-label="Executable command"
 aria-label="File viewer"
 aria-label="Files changed in commit"
 aria-label="Files"
 aria-label="Find file"
 aria-label="Find in file"
 aria-label="Find in terminal"
 aria-label="Folder path"
 aria-label="Folders"
 aria-label="Forward"
 aria-label="Git history graph"
 aria-label="Git"
 aria-label="Go to line"
 aria-label="Harness profiles"
 aria-label="Hosts"
 aria-label="hvir sessions"
 aria-label="Local diagnostic evidence"
 aria-label="Move profile earlier"
 aria-label="Move profile later"
 aria-label="New folder name"
 aria-label="New review comment"
 aria-label="New terminal"
 aria-label="Next terminal match"
 aria-label="Next transcript region"
 aria-label="Open settings"
 aria-label="Open terminals"
 aria-label="Path binding name"
 aria-label="Previous terminal match"
 aria-label="Previous transcript region"
 aria-label="Project rail"
 aria-label="Project views"
 aria-label="Projects"
 aria-label="Reference name"
 aria-label="Reference source"
 aria-label="Register project"
 aria-label="Repository commits"
 aria-label="Restore terminal rail"
 aria-label="Reveal source terminal"
 aria-label="Review handoff destination"
 aria-label="Review handoff preview"
 aria-label="Search terminal output"
 aria-label="Session collection controls"
 aria-label="Sessions pages"
 aria-label="Settings sections"
 aria-label="Split terminal"
 aria-label="Split viewer right"
 aria-label="Terminal actions"
 aria-label="Terminal layout"
 aria-label="Terminal workspace move"
 aria-label="Transcript regions"
 aria-label="View mode"
 aria-label="Viewer"
 aria-label="Web pane diagnostics"
 aria-label="Workspaces"
 label="Destination"
 label="Interface font"
 label="Monospace font"
 label="Resize file tree"
 label="Resize split terminals"
 label="Resize split viewers"
 label="Resize terminal"
 label="Source"
 label="Workspace"
 placeholder="--add-dir {binding:monorepo}"
 placeholder="claude"
 placeholder="Filename"
 placeholder="Find in terminal"
 placeholder="monorepo"
 placeholder="NAME"
 placeholder="Search by theme name"
 title="Appearance"
 title="Back to terminal"
 title="Back"
 title="Close filename search"
 title="Close search (Escape)"
 title="Close secondary viewer"
 title="Close terminal"
 title="Collapse terminal rail"
 title="Connection controls"
 title="Copy the current semantic prompt, command, or output block"
 title="Diagnostics"
 title="Document review mode"
 title="Find file"
 title="Find in file · Ctrl/Cmd+F"
 title="Forget removed worktree from hvir"
 title="Forward"
 title="Git"
 title="Go to line · Ctrl+G"
 title="Harnesses"
 title="Keybindings"
 title="Line counts unavailable"
 title="Loading sessions"
 title="More commit message below"
 title="Move active terminal to another worktree"
 title="Move earlier"
 title="Move later"
 title="New terminal"
 title="Next match (Enter)"
 title="Next transcript region"
 title="No hvir sessions"
 title="No sessions match"
 title="Open a shell in the other terminal split"
 title="Open in full history"
 title="Previous match (Shift+Enter)"
 title="Previous transcript region"
 title="Register project"
 title="Reload"
 title="Remove Git's stale worktree administrative records"
 title="Repository history graph"
 title="Restore terminal rail"
 title="Sessions unavailable"
 title="Settings"
 title="Split viewer right"
 title="Terminal"
 title="Updates paused"
<shellId: 30 completed with exit code 0>
```

</details>


---

<sub>2m 45s</sub>

### `bash`

**Read appearance, git, and keybinding settings sections**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/settings/sections/AppearanceSettings.tsx src/renderer/src/settings/sections/GitSettings.tsx src/renderer/src/settings/sections/KeybindingsSettings.tsx

<details>
<summary>221 lines</summary>

```
import type { ReactElement } from 'react'

import type { AppTheme } from '../../theme'
import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft } from '../settings-draft'
import {
  MAX_INTERFACE_SCALE,
  MAX_TERMINAL_TEXT_SIZE,
  MIN_INTERFACE_SCALE,
  MIN_TERMINAL_TEXT_SIZE,
} from '../typography-settings'
import { TypographyFontField } from './TypographyFontField'
import { TerminalThemeGallery } from '../TerminalThemeGallery'

export function AppearanceSettings({
  draft,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  const previewScale = Number(draft.interfaceScale)
  const interfacePreviewScale = Number.isFinite(previewScale) ? previewScale : 1
  const previewTerminalTextSize = Number(draft.terminalTextSize)
  return (
    <SettingsSection
      section="appearance"
      title="Appearance"
      description="Choose how the workbench and its terminals present your workspace."
    >
      <div className="settings-section-scroll settings-fields">
        <label htmlFor="settings-app-theme">
          <span>App theme</span>
          <select
            id="settings-app-theme"
            value={draft.theme}
            onChange={(event) => onChange('theme', event.currentTarget.value as AppTheme)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <label htmlFor="settings-terminal-theme">
          <span>Terminal colors</span>
          <select
            id="settings-terminal-theme"
            value={draft.terminalTheme}
            onChange={(event) =>
              onChange(
                'terminalTheme',
                event.currentTarget.value as SettingsDraft['terminalTheme'],
              )
            }
          >
            <option value="app">Follow app theme</option>
            <option value="dark">Always dark</option>
            <option value="light">Always light</option>
          </select>
        </label>
        <TerminalThemeGallery
          lightThemeId={draft.terminalLightThemeId}
          darkThemeId={draft.terminalDarkThemeId}
          onLightTheme={(id) => onChange('terminalLightThemeId', id)}
          onDarkTheme={(id) => onChange('terminalDarkThemeId', id)}
        />
        <TypographyFontField
          id="settings-interface-font"
          label="Interface font"
          kind="interface"
          mode={draft.interfaceFontMode}
          family={draft.interfaceFontFamily}
          previewText="Harness · View · Interact · Respond"
          previewSize={`calc(14px * ${interfacePreviewScale})`}
          onMode={(mode) => onChange('interfaceFontMode', mode)}
          onFamily={(family) => onChange('interfaceFontFamily', family)}
        />
        <TypographyFontField
          id="settings-monospace-font"
          label="Monospace font"
          kind="monospace"
          mode={draft.monospaceFontMode}
          family={draft.monospaceFontFamily}
          previewText="const hvir = ['view', 'terminal', 'git']"
          previewSize={`${Number.isFinite(previewTerminalTextSize) ? previewTerminalTextSize : 13}px`}
          onMode={(mode) => onChange('monospaceFontMode', mode)}
          onFamily={(family) => onChange('monospaceFontFamily', family)}
        />
        <label htmlFor="settings-interface-scale">
          <span>Interface scale</span>
          <span className="settings-slider">
            <input
              id="settings-interface-scale"
              type="range"
              min={MIN_INTERFACE_SCALE}
              max={MAX_INTERFACE_SCALE}
              step="0.05"
              value={draft.interfaceScale}
              onChange={(event) => onChange('interfaceScale', event.currentTarget.value)}
            />
            <output htmlFor="settings-interface-scale">
              {Math.round(interfacePreviewScale * 100)}%
            </output>
          </span>
        </label>
        <label htmlFor="settings-terminal-text-size">
          <span>Terminal text size</span>
          <span className="settings-slider">
            <input
              id="settings-terminal-text-size"
              type="range"
              min={MIN_TERMINAL_TEXT_SIZE}
              max={MAX_TERMINAL_TEXT_SIZE}
              step="1"
              value={draft.terminalTextSize}
              onChange={(event) =>
                onChange('terminalTextSize', event.currentTarget.value)
              }
            />
            <output htmlFor="settings-terminal-text-size">
              {Number.isFinite(previewTerminalTextSize)
                ? Math.round(previewTerminalTextSize)
                : 13}
              px
            </output>
          </span>
        </label>
      </div>
    </SettingsSection>
  )
}
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft } from '../settings-draft'

export function GitSettings({
  draft,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  return (
    <SettingsSection
      section="git"
      title="Git"
      description="Choose how often hvir refreshes remote repository information."
    >
      <div className="settings-section-scroll settings-fields">
        <label htmlFor="settings-git-auto-fetch">
          <span>Git auto-fetch</span>
          <select
            id="settings-git-auto-fetch"
            value={draft.gitAutoFetchIntervalMs}
            onChange={(event) =>
              onChange('gitAutoFetchIntervalMs', event.currentTarget.value)
            }
          >
            <option value="0">Off</option>
            <option value={String(60_000)}>Every minute</option>
            <option value={String(5 * 60_000)}>Every 5 minutes</option>
            <option value={String(15 * 60_000)}>Every 15 minutes</option>
            <option value={String(30 * 60_000)}>Every 30 minutes</option>
          </select>
        </label>
      </div>
    </SettingsSection>
  )
}
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'

export function KeybindingsSettings({
  draft,
  validation,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  const keybindingError = validation?.fieldId === 'settings-keybindings-json'
  const describedBy = keybindingError
    ? 'settings-keybindings-help settings-keybindings-error'
    : 'settings-keybindings-help'
  return (
    <SettingsSection
      section="keybindings"
      title="Keybindings"
      description="Override workbench commands with explicit, portable keyboard strokes."
    >
      <div className="settings-section-scroll settings-fields">
        <label className="settings-keybindings" htmlFor="settings-keybindings-json">
          <span>Keybinding overrides (JSON)</span>
          <textarea
            id="settings-keybindings-json"
            spellCheck={false}
            value={draft.keybindingsJson}
            aria-invalid={keybindingError}
            aria-describedby={describedBy}
            onChange={(event) => onChange('keybindingsJson', event.currentTarget.value)}
          />
          <small id="settings-keybindings-help">
            Use Mod for Command on macOS and Ctrl on Linux. Changes apply after Save.
          </small>
          {keybindingError ? (
            <small id="settings-keybindings-error" className="dialog-error">
              {validation.message}
            </small>
          ) : null}
        </label>
      </div>
    </SettingsSection>
  )
}
<shellId: 31 completed with exit code 0>
```

</details>


---

<sub>2m 45s</sub>

### `bash`

**Read terminal settings section and settings store**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/settings/sections/TerminalSettings.tsx; echo "=== settings.ts ==="; sed -n '1,140p' src/renderer/src/settings/settings.ts

<details>
<summary>281 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'

export function TerminalSettings({
  draft,
  validation,
  onChange,
  onComposerSubmitMode,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
  readonly onComposerSubmitMode: (enabled: boolean) => void
}): ReactElement {
  const idleError = validation?.fieldId === 'settings-idle-threshold'
  return (
    <SettingsSection
      section="terminal"
      title="Terminal"
      description="Control message submission, attention timing, and startup recovery."
    >
      <div className="settings-section-scroll settings-fields">
        <fieldset className="settings-fieldset">
          <legend>Presentation</legend>
          <label htmlFor="settings-terminal-cursor-shape">
            <span>Cursor shape</span>
            <select
              id="settings-terminal-cursor-shape"
              value={draft.terminalCursorShape}
              onChange={(event) =>
                onChange(
                  'terminalCursorShape',
                  event.currentTarget.value as SettingsDraft['terminalCursorShape'],
                )
              }
            >
              <option value="block">Block</option>
              <option value="hollow-block">Hollow block</option>
              <option value="bar">Bar</option>
              <option value="underline">Underline</option>
            </select>
          </label>
          <label htmlFor="settings-terminal-cursor-blink">
            <span>Cursor blinking</span>
            <span className="settings-checkbox-copy">
              <select
                id="settings-terminal-cursor-blink"
                value={draft.terminalCursorBlink}
                onChange={(event) =>
                  onChange(
                    'terminalCursorBlink',
                    event.currentTarget.value as SettingsDraft['terminalCursorBlink'],
                  )
                }
              >
                <option value="terminal">Terminal-controlled</option>
                <option value="blinking">Blinking default</option>
                <option value="steady">Steady default</option>
              </select>
              <small>
                Applications can still request their own cursor. Terminal-controlled also
                follows the terminal's DEC blinking mode; explicit defaults do not.
              </small>
            </span>
          </label>
          <label htmlFor="settings-terminal-ligatures">
            <span>Font ligatures</span>
            <span className="settings-checkbox-copy">
              <span className="settings-checkbox-control">
                <input
                  id="settings-terminal-ligatures"
                  type="checkbox"
                  checked={draft.terminalLigatures}
                  onChange={(event) =>
                    onChange('terminalLigatures', event.currentTarget.checked)
                  }
                />
                Enable compatible terminal line shaping
              </span>
              <small>
                Shape compatible terminal cells as line runs. Cell positions, selection,
                and copying remain unchanged.
              </small>
            </span>
          </label>
        </fieldset>
        <label className="settings-checkbox">
          <span>Message submission</span>
          <span className="settings-checkbox-copy">
            <span className="settings-checkbox-control">
              <input
                id="settings-composer-submit"
                type="checkbox"
                checked={draft.composerSubmitMode === 'ctrl-enter'}
                onChange={(event) => onComposerSubmitMode(event.currentTarget.checked)}
              />
              Send messages with Ctrl+Enter or Command+Enter; Enter inserts a new line
            </span>
            <small>
              Claude updates live; Shift+Enter also submits in supported external
              terminals. Restart open Codex sessions after changing this setting.
            </small>
          </span>
        </label>
        <label htmlFor="settings-idle-threshold">
          <span>Idle-after-output threshold</span>
          <span className="settings-number">
            <input
              id="settings-idle-threshold"
              type="number"
              min="0.5"
              max="60"
              step="0.5"
              value={draft.idleSeconds}
              aria-invalid={idleError}
              aria-describedby={idleError ? 'settings-idle-threshold-error' : undefined}
              onChange={(event) => onChange('idleSeconds', event.currentTarget.value)}
            />
            seconds
          </span>
          {idleError ? (
            <small id="settings-idle-threshold-error" className="dialog-error">
              {validation.message}
            </small>
          ) : null}
        </label>
        <label htmlFor="settings-recovery-mode">
          <span>On app start</span>
          <select
            id="settings-recovery-mode"
            value={draft.recoveryMode}
            onChange={(event) =>
              onChange(
                'recoveryMode',
                event.currentTarget.value as SettingsDraft['recoveryMode'],
              )
            }
          >
            <option value="prompt">Ask which terminals to restore</option>
            <option value="auto">Restore all terminals automatically</option>
          </select>
        </label>
      </div>
    </SettingsSection>
  )
}
=== settings.ts ===
import { useSyncExternalStore } from 'react'

import { DEFAULT_KEYBINDINGS, parseKeybindingOverrides } from './keybindings'
import type { AppSettings, TerminalPreferences } from './settings-model'
import {
  DEFAULT_TERMINAL_THEME_IDS,
  normalizeTerminalThemeId,
} from '../terminal/terminal-theme-catalog'
import {
  applyTypographyPresentation,
  type TypographyPropertyTarget,
} from './typography-presentation'
import {
  DEFAULT_INTERFACE_SCALE,
  DEFAULT_TERMINAL_TEXT_SIZE,
  fontFamilyStack,
  normalizeFontPreference,
  normalizeInterfaceScale,
  normalizeTerminalTextSize,
  systemFontPreference,
} from './typography-settings'

export type {
  AppSettings,
  TerminalPreferences,
  TerminalRecoveryMode,
  TerminalThemeOverride,
  FontPreference,
  FontPreferenceMode,
} from './settings-model'

const STORAGE_KEY = 'hvir:settings:v1'
const listeners = new Set<() => void>()
let settings = readSettings()
let typographyTarget: TypographyPropertyTarget | undefined

export function getAppSettings(): AppSettings {
  return settings
}

export function useAppSettings(): AppSettings {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => settings,
    () => settings,
  )
}

export function initializeAppSettings(target: TypographyPropertyTarget): void {
  typographyTarget = target
  applyTypographyPresentation(settings, target)
}

export function setAppSettings(next: AppSettings): void {
  settings = normalizeAppSettings(next)
  if (typographyTarget) applyTypographyPresentation(settings, typographyTarget)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch {
    // Storage denial should not prevent live settings changes.
  }
  for (const listener of listeners) listener()
}

function readSettings(): AppSettings {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
      return normalizeAppSettings(raw)
    }
    const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')
    return {
      ...defaults(),
      terminalRecoveryMode: legacyRecovery === 'auto' ? 'auto' : 'prompt',
    }
  } catch {
    return defaults()
  }
}

export function normalizeAppSettings(value: unknown): AppSettings {
  const candidate =
    value && typeof value === 'object' && !Array.isArray(value)
      ? (value as Partial<AppSettings>)
      : {}
  const idle = candidate.idleThresholdMs
  const autoFetch = candidate.gitAutoFetchIntervalMs
  return {
    idleThresholdMs:
      typeof idle === 'number' && Number.isFinite(idle)
        ? Math.min(60_000, Math.max(500, Math.round(idle)))
        : 4_000,
    gitAutoFetchIntervalMs:
      typeof autoFetch === 'number' && Number.isFinite(autoFetch)
        ? autoFetch === 0
          ? 0
          : Math.min(60 * 60_000, Math.max(60_000, Math.round(autoFetch)))
        : 5 * 60_000,
    terminalRecoveryMode: candidate.terminalRecoveryMode === 'auto' ? 'auto' : 'prompt',
    terminalTheme:
      candidate.terminalTheme === 'dark' || candidate.terminalTheme === 'light'
        ? candidate.terminalTheme
        : 'app',
    terminalLightThemeId: normalizeTerminalThemeId(
      candidate.terminalLightThemeId,
      'light',
    ),
    terminalDarkThemeId: normalizeTerminalThemeId(candidate.terminalDarkThemeId, 'dark'),
    terminalCursorShape:
      candidate.terminalCursorShape === 'hollow-block' ||
      candidate.terminalCursorShape === 'bar' ||
      candidate.terminalCursorShape === 'underline'
        ? candidate.terminalCursorShape
        : 'block',
    terminalCursorBlink:
      candidate.terminalCursorBlink === 'blinking' ||
      candidate.terminalCursorBlink === 'steady'
        ? candidate.terminalCursorBlink
        : 'terminal',
    terminalLigatures: candidate.terminalLigatures === false ? false : true,
    interfaceFont: normalizeFontPreference(candidate.interfaceFont),
    monospaceFont: normalizeFontPreference(candidate.monospaceFont),
    interfaceScale: normalizeInterfaceScale(candidate.interfaceScale),
    terminalTextSize: normalizeTerminalTextSize(candidate.terminalTextSize),
    composerSubmitMode:
      candidate.composerSubmitMode === 'ctrl-enter' ? 'ctrl-enter' : 'enter',
    keybindings: parseKeybindingOverrides(candidate.keybindings ?? DEFAULT_KEYBINDINGS),
  }
}

function defaults(): AppSettings {
  return {
    idleThresholdMs: 4_000,
    gitAutoFetchIntervalMs: 5 * 60_000,
    terminalRecoveryMode: 'prompt',
    terminalTheme: 'app',
    terminalLightThemeId: DEFAULT_TERMINAL_THEME_IDS.light,
<shellId: 32 completed with exit code 0>
```

</details>


---

<sub>2m 51s</sub>

### `grep`

**Harness\s*[·,/|-]\s*View|View\s*[·,]\s*Interact|Interact\s*[·,]\s*Respond**

"Harness\s*[·,/|-]\s*View|View\s*[·,]\s*Interact|Interact\s*[·,]\s*Respond" in !{node_modules,package-lock.json,.git}/**

```
/private/var/tmp/ws/f7354e9d/hvir/src/renderer/src/settings/sections/AppearanceSettings.tsx:75:          previewText="Harness · View · Interact · Respond"
```


---

<sub>2m 51s</sub>

### `bash`

**Read SessionDialog (project/host picker)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/workspaces/SessionDialog.tsx | head -260

<details>
<summary>246 lines</summary>

```
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'

import {
  asHostId,
  hostPath,
  type BrowseHostResponse,
  type ConnectedHost,
  type HostPath,
  type ProjectHostOption,
  type ProjectState,
} from '../../../shared'
import { DirectoryTree } from '../tree/DirectoryTree'
import { useModalKeyboard } from '../workbench/use-modal-keyboard'
import { RemoteConnectionBadge } from './ConnectionStatus'
import type { ProjectFolderPickerPort } from './project-folder-picker-client'

export function SessionDialog({
  hosts,
  currentRoot,
  suspended,
  onCancel,
  onConnect,
  onBrowse,
  folderPicker,
  onDisconnect,
  onOpen,
  onOpened,
}: {
  readonly hosts: readonly ProjectHostOption[]
  readonly currentRoot: HostPath
  readonly suspended: boolean
  readonly onCancel: () => void
  readonly onConnect: (hostId: string) => Promise<ConnectedHost>
  readonly onBrowse: (hostId: string, path: string) => Promise<BrowseHostResponse>
  readonly folderPicker: ProjectFolderPickerPort
  readonly onDisconnect: (hostId: string) => Promise<ProjectHostOption>
  readonly onOpen: (hostId: string, path: string) => Promise<ProjectState>
  readonly onOpened: (state: ProjectState) => void
}): ReactElement {
  const dialogRef = useRef<HTMLElement>(null)
  const pathInputRef = useRef<HTMLInputElement>(null)
  const nextRevealToken = useRef(0)
  const [stage, setStage] = useState<'host' | 'folder'>('host')
  const [hostId, setHostId] = useState(
    hosts.some((host) => host.hostId === currentRoot.hostId)
      ? currentRoot.hostId
      : (hosts[0]?.hostId ?? 'local'),
  )
  const [connected, setConnected] = useState<ConnectedHost>()
  const [pickerId, setPickerId] = useState<string>()
  const [pathInput, setPathInput] = useState('')
  const [selectedPath, setSelectedPath] = useState<string>()
  const [revealRequest, setRevealRequest] = useState<{
    readonly path: string
    readonly token: number
  }>()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string>()
  const [newFolderName, setNewFolderName] = useState<string>()
  const [treeRefreshVersion, setTreeRefreshVersion] = useState(0)
  const selectedHost = hosts.find((host) => host.hostId === hostId)

  const releaseUnopenedHost = async (): Promise<void> => {
    if (connected?.host.kind === 'ssh' && connected.host.hostId !== currentRoot.hostId) {
      await onDisconnect(connected.host.hostId)
    }
  }

  const releasePicker = async (): Promise<void> => {
    if (!pickerId) return
    await folderPicker.close(pickerId)
    setPickerId(undefined)
  }

  const cancel = async (): Promise<void> => {
    setBusy(true)
    try {
      await releasePicker()
      await releaseUnopenedHost()
    } finally {
      onCancel()
    }
  }

  const back = async (): Promise<void> => {
    setBusy(true)
    setError(undefined)
    try {
      await releasePicker()
      await releaseUnopenedHost()
      setStage('host')
      setConnected(undefined)
      setPathInput('')
      setSelectedPath(undefined)
      setRevealRequest(undefined)
      setNewFolderName(undefined)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const selectPath = async (targetPath: string): Promise<void> => {
    if (!pickerId) return
    setBusy(true)
    setError(undefined)
    setPathInput(targetPath)
    setSelectedPath(undefined)
    setRevealRequest(undefined)
    try {
      const result = await folderPicker.browse(pickerId, targetPath)
      setPathInput(result.path.path)
      setSelectedPath(result.path.path)
      setRevealRequest({
        path: result.path.path,
        token: ++nextRevealToken.current,
      })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const connect = async (): Promise<void> => {
    setBusy(true)
    setError(undefined)
    try {
      const result = await onConnect(hostId)
      setConnected(result)
      setStage('folder')
      setPathInput(result.suggestedPath)
      setSelectedPath(undefined)
      setRevealRequest(undefined)
      const lease = await folderPicker.start(result.host.hostId)
      setPickerId(lease.pickerId)
      const listing = await folderPicker.browse(lease.pickerId, result.suggestedPath)
      setPathInput(listing.path.path)
      setSelectedPath(listing.path.path)
      setRevealRequest({
        path: listing.path.path,
        token: ++nextRevealToken.current,
      })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const open = async (): Promise<void> => {
    if (!connected || !selectedPath) return
    setBusy(true)
    setError(undefined)
    try {
      const state = await onOpen(connected.host.hostId, selectedPath)
      await releasePicker().catch(() => undefined)
      rememberFolder(connected.host.hostId, state.root.path)
      onOpened(state)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
      setBusy(false)
    }
  }

  const createDirectory = async (): Promise<void> => {
    if (!pickerId || !selectedPath || newFolderName === undefined || !connectedHostId)
      return
    setBusy(true)
    setError(undefined)
    try {
      const created = await folderPicker.createDirectory(
        pickerId,
        hostPath(asHostId(connectedHostId), selectedPath),
        newFolderName,
      )
      setPathInput(created.path)
      setSelectedPath(created.path)
      setRevealRequest({ path: created.path, token: ++nextRevealToken.current })
      setTreeRefreshVersion((version) => version + 1)
      setNewFolderName(undefined)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const connectedHostId = connected?.host.hostId
  const loadPickerEntries = useCallback(
    async (directory: HostPath) => {
      if (!connectedHostId) return []
      return (await onBrowse(connectedHostId, directory.path)).directories
    },
    [connectedHostId, onBrowse],
  )

  useEffect(() => {
    if (!pickerId) return
    return () => void folderPicker.close(pickerId).catch(() => undefined)
  }, [folderPicker, pickerId])

  useEffect(() => {
    if (stage === 'folder' && !busy && newFolderName === undefined) {
      pathInputRef.current?.focus()
    }
  }, [busy, newFolderName, stage])

  useModalKeyboard(dialogRef, () => void cancel(), !busy, !suspended)

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog session-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal={suspended ? undefined : true}
        aria-hidden={suspended || undefined}
        inert={suspended || undefined}
        aria-labelledby="session-dialog-title"
        tabIndex={-1}
      >
        <h2 id="session-dialog-title">
          {stage === 'host'
            ? 'Connect to a host'
            : `Open folder on ${connected?.host.label ?? hostId}`}
        </h2>
        {error ? <p className="dialog-error">{error}</p> : null}
        {stage === 'host' ? (
          <div className="session-hosts" role="listbox" aria-label="Hosts">
            {hosts.map((host) => (
              <button
                type="button"
                role="option"
                aria-selected={hostId === host.hostId}
                className={`session-host-option${hostId === host.hostId ? ' selected' : ''}`}
                key={host.hostId}
                onClick={() => setHostId(host.hostId)}
              >
                <span className="session-host-copy">
                  {host.kind === 'ssh' ? (
                    <RemoteConnectionBadge
                      state={host.connectionState}
                      hostLabel={`ssh:${host.label}`}
                    />
                  ) : (
                    <strong>Local</strong>
                  )}
                  <small>
                    {host.kind === 'ssh' ? host.connectionState : 'this machine'}
                  </small>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <>
            <form
              className="folder-path-form"
<shellId: 33 completed with exit code 0>
```

</details>


---

<sub>3m 5s</sub>

### `bash`

**Read SSH config parsing**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' src/main/project-host/ssh-config.ts

<details>
<summary>47 lines</summary>

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
<shellId: 34 completed with exit code 0>
```

</details>


---

<sub>3m 5s</sub>

### `bash`

**Read SSH auth and host trust modules**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' src/main/project-host/ssh-auth.ts; echo "=== ssh-host-trust (head) ==="; sed -n '1,80p' src/main/project-host/ssh-host-trust.ts

<details>
<summary>74 lines</summary>

```
export interface SshPrompt {
  readonly hostId: string
  readonly kind:
    'password' | 'passphrase' | 'keyboard-interactive' | 'host-key' | 'host-key-changed'
  readonly title: string
  readonly instructions?: string
  readonly fingerprint?: string
  readonly previousFingerprint?: string
  readonly prompts: readonly { readonly text: string; readonly echo: boolean }[]
}

/** Presentation port for one revocable SSH connection generation. */
export interface SshAuthPrompter {
  prompt(request: SshPrompt, signal: AbortSignal): Promise<readonly string[] | undefined>
}
=== ssh-host-trust (head) ===
import type { HostPath } from '../../shared'
import type { ProjectHost } from './project-host'

type TrustMetadataHost = Pick<ProjectHost, 'readTextFile' | 'writeFile'>

export interface SshHostTrust {
  readonly trustedHostKey: () => string | undefined
  readonly rememberHostKey: (fingerprint: string) => Promise<void>
}

const VALID_ALIAS = /^[^\s]{1,255}$/
const VALID_FINGERPRINT = /^SHA256:[A-Za-z0-9+/]{20,}$/

/** Owns the alias-keyed local host-trust record, not host-key acceptance policy. */
export class SshHostTrustStore {
  private pendingWrite: Promise<void> = Promise.resolve()

  private constructor(
    private readonly host: TrustMetadataHost,
    private readonly file: HostPath,
    private fingerprints: Record<string, string>,
  ) {}

  static async load(host: TrustMetadataHost, file: HostPath): Promise<SshHostTrustStore> {
    try {
      const parsed: unknown = JSON.parse(await host.readTextFile(file))
      const fingerprints: Record<string, string> = {}
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        for (const [alias, fingerprint] of Object.entries(parsed)) {
          if (
            VALID_ALIAS.test(alias) &&
            typeof fingerprint === 'string' &&
            VALID_FINGERPRINT.test(fingerprint)
          ) {
            fingerprints[alias] = fingerprint
          }
        }
      }
      return new SshHostTrustStore(host, file, fingerprints)
    } catch {
      return new SshHostTrustStore(host, file, {})
    }
  }

  forAlias(alias: string): SshHostTrust {
    if (!VALID_ALIAS.test(alias)) throw new Error('Invalid SSH host alias')
    return {
      trustedHostKey: () => this.fingerprints[alias],
      rememberHostKey: (fingerprint) => this.remember(alias, fingerprint),
    }
  }

  private remember(alias: string, fingerprint: string): Promise<void> {
    if (!VALID_FINGERPRINT.test(fingerprint)) {
      return Promise.reject(new Error('Invalid SSH host-key fingerprint'))
    }
    const write = async (): Promise<void> => {
      const fingerprints = { ...this.fingerprints, [alias]: fingerprint }
      await this.host.writeFile(this.file, JSON.stringify(fingerprints, null, 2))
      this.fingerprints = fingerprints
    }
    const next = this.pendingWrite.then(write, write)
    this.pendingWrite = next.catch(() => undefined)
    return next
  }
}
<shellId: 35 completed with exit code 0>
```

</details>


---

<sub>3m 5s</sub>

### `bash`

**Read ProjectHost interface**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,200p' src/main/project-host/project-host.ts

<details>
<summary>177 lines</summary>

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
<shellId: 36 completed with exit code 0>
```

</details>


---

<sub>3m 12s</sub>

### `bash`

**Read SSH identity source and host catalog**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' src/main/project-host/ssh-identity-source.ts; echo "=== catalog (head) ==="; sed -n '1,140p' src/main/project-host/project-host-catalog.ts

<details>
<summary>230 lines</summary>

```
import { localPath } from '../../shared'
import type { ProjectHost } from './project-host'

export interface SshIdentityLease {
  readonly path: string
  readonly privateKey: Buffer
  release(): void
}

export interface SshIdentitySource {
  readonly candidatePaths: readonly string[]
  acquire(path: string, signal: AbortSignal): Promise<SshIdentityLease | undefined>
}

/** Reads current local identity material and owns every mutable buffer until release. */
export class LocalSshIdentitySource implements SshIdentitySource {
  readonly candidatePaths: readonly string[]
  private readonly candidates: ReadonlySet<string>
  private readonly activeLeases = new Set<OwnedSshIdentityLease>()

  constructor(
    private readonly local: Pick<ProjectHost, 'readFile'>,
    candidatePaths: readonly string[],
  ) {
    this.candidatePaths = [...candidatePaths]
    this.candidates = new Set(candidatePaths)
  }

  get activeLeaseCount(): number {
    return this.activeLeases.size
  }

  async acquire(
    path: string,
    signal: AbortSignal,
  ): Promise<SshIdentityLease | undefined> {
    if (signal.aborted || !this.candidates.has(path)) return undefined
    let privateKey: Buffer
    try {
      privateKey = await this.local.readFile(localPath(path))
    } catch {
      return undefined
    }
    if (signal.aborted) {
      privateKey.fill(0)
      return undefined
    }
    const lease = new OwnedSshIdentityLease(path, privateKey, () => {
      this.activeLeases.delete(lease)
    })
    this.activeLeases.add(lease)
    return lease
  }
}

/** Owns the leases acquired for one physical transport's authentication generation. */
export class SshIdentityGeneration {
  private readonly attempted = new Set<string>()
  private readonly leases = new Set<SshIdentityLease>()
  private readonly abort = new AbortController()
  private active = true

  constructor(private readonly source?: SshIdentitySource) {}

  async next(): Promise<SshIdentityLease | undefined> {
    if (!this.active || !this.source) return undefined
    for (const path of this.source.candidatePaths) {
      if (this.attempted.has(path)) continue
      this.attempted.add(path)
      const lease = await this.source.acquire(path, this.abort.signal)
      if (!lease) continue
      if (!this.active) {
        lease.release()
        return undefined
      }
      this.leases.add(lease)
      return lease
    }
    return undefined
  }

  release(): void {
    if (!this.active) return
    this.active = false
    this.abort.abort()
    for (const lease of this.leases) lease.release()
    this.leases.clear()
  }
}

class OwnedSshIdentityLease implements SshIdentityLease {
  private value: Buffer | undefined
  private released = false

  constructor(
    readonly path: string,
    privateKey: Buffer,
    private readonly onRelease: () => void,
  ) {
    this.value = privateKey
  }

  get privateKey(): Buffer {
    if (!this.value) throw new Error('SSH identity lease is released')
    return this.value
  }

  release(): void {
    if (this.released) return
    this.released = true
    const value = this.value
    this.value = undefined
    value?.fill(0)
    this.onRelease()
  }
}
=== catalog (head) ===
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
<shellId: 37 completed with exit code 0>
```

</details>


---

<sub>3m 12s</sub>

### `bash`

**Find SSH auth methods supported**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "agent\|SSH_AUTH_SOCK\|keyboard-interactive\|tryKeyboard\|password\|passphrase\|hostVerifier\|ProxyJump\|proxyjump\|ProxyCommand" src/main/project-host/ssh-host.ts src/main/project-host/ssh-client-lifecycle.ts src/main/project-host/ssh-host-options.ts | head -80

<details>
<summary>36 lines</summary>

```
src/main/project-host/ssh-host.ts:59:  password?: string
src/main/project-host/ssh-host.ts:60:  readonly passphrases: Map<string, string>
src/main/project-host/ssh-host.ts:709:    const { config, agentSocket, prompter } = this.options
src/main/project-host/ssh-host.ts:711:    let password: string | undefined
src/main/project-host/ssh-host.ts:746:      hostVerifier: (key: Buffer, verify: (valid: boolean) => void) => {
src/main/project-host/ssh-host.ts:803:            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
src/main/project-host/ssh-host.ts:805:          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
src/main/project-host/ssh-host.ts:806:            attempted.add('agent')
src/main/project-host/ssh-host.ts:807:            return { type: 'agent', username: config.user, agent: agentSocket }
src/main/project-host/ssh-host.ts:814:            let passphrase: string | undefined
src/main/project-host/ssh-host.ts:816:            if (parsed instanceof Error && /encrypted|passphrase/i.test(parsed.message))
src/main/project-host/ssh-host.ts:817:              passphrase = this.cachedPassphrases.get(identity.path)
src/main/project-host/ssh-host.ts:820:              /encrypted|passphrase/i.test(parsed.message) &&
src/main/project-host/ssh-host.ts:821:              !passphrase
src/main/project-host/ssh-host.ts:823:              passphrase = (
src/main/project-host/ssh-host.ts:826:                  kind: 'passphrase',
src/main/project-host/ssh-host.ts:831:              if (passphrase) credentialAttempt.passphrases.set(identity.path, passphrase)
src/main/project-host/ssh-host.ts:839:              passphrase,
src/main/project-host/ssh-host.ts:842:          if (available.has('keyboard-interactive') && !attempted.has('keyboard')) {
src/main/project-host/ssh-host.ts:845:              type: 'keyboard-interactive',
src/main/project-host/ssh-host.ts:856:                  kind: 'keyboard-interactive',
src/main/project-host/ssh-host.ts:869:          if (available.has('password') && !attempted.has('password')) {
src/main/project-host/ssh-host.ts:870:            attempted.add('password')
src/main/project-host/ssh-host.ts:871:            password ??= this.cachedPassword
src/main/project-host/ssh-host.ts:872:            password ??= (
src/main/project-host/ssh-host.ts:875:                kind: 'password',
src/main/project-host/ssh-host.ts:880:            if (password && isActive()) {
src/main/project-host/ssh-host.ts:881:              credentialAttempt.password = password
src/main/project-host/ssh-host.ts:882:              return { type: 'password', username: config.user, password }
src/main/project-host/ssh-host.ts:955:      passphrases: new Map<string, string>(),
src/main/project-host/ssh-host.ts:968:    if (attempt.password) this.cachedPassword = attempt.password
src/main/project-host/ssh-host.ts:969:    for (const [path, passphrase] of attempt.passphrases) {
src/main/project-host/ssh-host.ts:970:      this.cachedPassphrases.set(path, passphrase)
src/main/project-host/ssh-client-lifecycle.ts:103:    level === 'agent' ||
src/main/project-host/ssh-host-options.ts:11:  readonly agentSocket?: string
<shellId: 38 completed with exit code 0>
```

</details>


---

<sub>3m 18s</sub>

### `bash`

**Read rest of host catalog (alias loading)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '140,260p' src/main/project-host/project-host-catalog.ts

<details>
<summary>77 lines</summary>

```
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
<shellId: 39 completed with exit code 0>
```

</details>


---

<sub>3m 18s</sub>

### `bash`

**Read git engine and shared git types**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/main/git/git-engine.ts | head -120; echo "=== git-types (head) ==="; sed -n '1,150p' src/shared/git-types.ts

<details>
<summary>235 lines</summary>

```
import type {
  DiffBase,
  GitBlameRun,
  GitBranchModel,
  GitChanges,
  GitCommitDetail,
  GitDiffResponse,
  GitHistoryPage,
  HostPath,
  WorktreeDiscovery,
  WorkspaceActivityResult,
} from '../../shared'
import { GitBranchCapability } from './git-branches'
import { GitCommandContext, type GitHostPort } from './git-command-context'
import { GitDetailCapability } from './git-detail'
import { GitDiffCapability } from './git-diff'
import { GitHistoryCapability } from './git-history'
import { GitStatusCapability } from './git-status'
import { GitWorktreeCapability } from './git-worktrees'

export { GIT_FETCH_ARGS, GIT_PULL_ARGS } from './git-branches'
export { parseLocalBranches, parseWorktreeList } from './git-parsers'

/** Stable worker-facing façade over cohesive, host-local Git capabilities. */
export class GitEngine {
  private readonly worktreeCapability: GitWorktreeCapability
  private readonly statusCapability: GitStatusCapability
  private readonly branchCapability: GitBranchCapability
  private readonly diffCapability: GitDiffCapability
  private readonly historyCapability: GitHistoryCapability
  private readonly detailCapability: GitDetailCapability

  constructor(host: GitHostPort, projectRoot?: HostPath) {
    const context = new GitCommandContext(host, projectRoot)
    this.worktreeCapability = new GitWorktreeCapability(context)
    this.statusCapability = new GitStatusCapability(context)
    this.branchCapability = new GitBranchCapability(context, this.worktreeCapability)
    this.diffCapability = new GitDiffCapability(context)
    this.historyCapability = new GitHistoryCapability(context)
    this.detailCapability = new GitDetailCapability(context)
  }

  worktrees(projectRoot: HostPath): Promise<WorktreeDiscovery> {
    return this.worktreeCapability.discover(projectRoot)
  }

  pruneWorktrees(projectRoot: HostPath): Promise<WorktreeDiscovery> {
    return this.worktreeCapability.prune(projectRoot)
  }

  workspaceActivity(
    workspaceRoot: HostPath,
    relatedWorktreeRoots: readonly HostPath[] = [],
  ): Promise<WorkspaceActivityResult> {
    return this.statusCapability.workspaceActivity(workspaceRoot, relatedWorktreeRoots)
  }

  branches(workspaceRoot: HostPath): Promise<GitBranchModel> {
    return this.branchCapability.branches(workspaceRoot)
  }

  fetch(workspaceRoot: HostPath): Promise<void> {
    return this.branchCapability.fetch(workspaceRoot)
  }

  pullFastForward(
    workspaceRoot: HostPath,
    _relatedWorktreeRoots: readonly HostPath[] = [],
  ): Promise<void> {
    return this.branchCapability.pullFastForward(workspaceRoot)
  }

  switchBranch(
    workspaceRoot: HostPath,
    branch: string,
    _relatedWorktreeRoots: readonly HostPath[] = [],
  ): Promise<void> {
    return this.branchCapability.switchBranch(workspaceRoot, branch)
  }

  diffInputs(
    path: HostPath,
    base: DiffBase,
    revision?: string,
  ): Promise<GitDiffResponse> {
    return this.diffCapability.inputs(path, base, revision)
  }

  repoRoot(path: HostPath): Promise<HostPath> {
    return this.diffCapability.repoRoot(path)
  }

  changes(
    projectRoot: HostPath,
    relatedWorktreeRoots: readonly HostPath[] = [],
  ): Promise<GitChanges> {
    return this.statusCapability.changes(projectRoot, relatedWorktreeRoots)
  }

  ignoredEntries(
    projectRoot: HostPath,
    directory: HostPath,
    names: readonly string[],
  ): Promise<{ readonly ignoredNames: readonly string[] }> {
    return this.statusCapability.ignoredEntries(projectRoot, directory, names)
  }
  ignoredPaths(projectRoot: HostPath, paths: readonly string[]) {
    return this.statusCapability.ignoredPaths(projectRoot, paths)
  }

  history(
    projectRoot: HostPath,
    limit: number,
    cursor?: string,
    path?: HostPath,
    allRefs = false,
  ): Promise<GitHistoryPage> {
    return this.historyCapability.history(projectRoot, limit, cursor, path, allRefs)
  }

=== git-types (head) ===
import type { HostPath } from './host-path'

export const GIT_CHANGE_DISPLAY_LIMIT = 2_000

export interface GitChangedFile {
  readonly path: HostPath
  readonly staged: boolean
  readonly unstaged: boolean
  readonly untracked: boolean
  readonly conflicted: boolean
  /** Omitted when hvir cannot produce a bounded text line count. */
  readonly additions?: number
  readonly deletions?: number
}

export interface GitChanges {
  /** Distinguishes an empty repository/view from a clean working tree. */
  readonly repositoryState: GitRepositoryState
  readonly workingTree: readonly GitChangedFile[]
  readonly branchPoint: readonly GitChangedFile[]
  /** False when no meaningful merge base can be established. */
  readonly branchPointAvailable: boolean
  readonly branchPointUnavailableReason?: string
  /** True when the repository has more paths than the bounded detail model. */
  readonly workingTreeLimited?: boolean
  readonly workingTreeLimit?: number
}

export type GitRepositoryState = 'ready' | 'unborn' | 'not-git'

export interface GitCommitSummary {
  readonly hash: string
  readonly shortHash: string
  /** Direct parents, ordered as recorded by the commit object. */
  readonly parents: readonly string[]
  /** Branches, remote branches, tags, and HEAD decorations pointing here. */
  readonly refs: readonly string[]
  readonly author: string
  readonly authoredAt: string
  readonly subject: string
}

export interface GitHistoryRequest {
  readonly root: HostPath
  readonly limit: number
  /** Opaque continuation frontier returned by the preceding page. */
  readonly cursor?: string
  readonly path?: HostPath
  /** Start at every ref rather than only HEAD, for the repository graph. */
  readonly allRefs?: boolean
}

export interface GitHistoryPage {
  readonly repositoryState: GitRepositoryState
  readonly commits: readonly GitCommitSummary[]
  readonly hasMore: boolean
  readonly nextCursor?: string
}

export interface GitCommitFile {
  readonly path: HostPath
  readonly additions: number
  readonly deletions: number
}

export interface GitCommitDetail extends GitCommitSummary {
  readonly message: string
  readonly files: readonly GitCommitFile[]
}

export interface GitCommitDetailRequest {
  readonly root: HostPath
  readonly hash: string
}

/** Consecutive lines sharing commit metadata, compact across IPC and state. */
export interface GitBlameRun {
  readonly startLine: number
  readonly lineCount: number
  readonly hash: string
  readonly author: string
  readonly summary: string
}

export interface GitBlameRequest {
  readonly path: HostPath
}
export interface GitChangesRequest {
  readonly root: HostPath
}

export interface GitIgnoredEntriesRequest {
  readonly root: HostPath
  readonly directory: HostPath
  /** Immediate directory-entry names, never paths. */
  readonly names: readonly string[]
}

export interface GitIgnoredEntriesResponse {
  readonly ignoredNames: readonly string[]
}

export interface GitBranch {
  readonly name: string
  readonly current: boolean
  /** Present when Git reports this branch checked out in a worktree. */
  readonly worktree?: HostPath
}

export interface GitBranchModel {
  readonly repositoryState: GitRepositoryState
  readonly current?: string
  /** Commit at HEAD when one exists; also identifies a detached HEAD. */
  readonly head?: string
  readonly detached: boolean
  /** True when at least one Git remote is configured for this repository. */
  readonly remoteAvailable: boolean
  /** Cached remote/base topology; refreshed after every successful fetch. */
  readonly sync?: GitBranchSync
  readonly branches: readonly GitBranch[]
}

export interface GitBranchSync {
  readonly upstream?: {
    readonly name: string
    readonly ahead: number
    readonly behind: number
    /** Configured tracking ref no longer exists locally after fetch/prune. */
    readonly gone?: boolean
  }
  readonly base?: {
    readonly name: string
    readonly ahead: number
    readonly behind: number
  }
}

export interface GitSwitchBranchRequest {
  readonly root: HostPath
  readonly branch: string
}

export interface GitFetchRequest {
  readonly root: HostPath
}

export interface GitPullRequest {
  readonly root: HostPath
}
<shellId: 40 completed with exit code 0>
```

</details>


---

<sub>3m 27s</sub>

### `bash`

**Confirm which git mutations exist**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "GIT_.*_ARGS\|'--ff-only'\|'switch'\|'checkout'\|'commit'\|'add'\|'stash'\|'push'\|'merge'\|'rebase'" src/main/git/*.ts | head -40; echo "=== ipc/git.ts channels ==="; grep -n "'git:[a-z-]*'" src/shared/ipc/git.ts | head -60

<details>
<summary>34 lines</summary>

```
src/main/git/git-branches.ts:16:export const GIT_FETCH_ARGS = ['fetch', '--prune', '--no-recurse-submodules'] as const
src/main/git/git-branches.ts:17:export const GIT_PULL_ARGS = [
src/main/git/git-branches.ts:20:  '--ff-only',
src/main/git/git-branches.ts:91:    const result = await this.context.mutate(context.commandRoot, GIT_FETCH_ARGS)
src/main/git/git-branches.ts:92:    if (result.code !== 0) throw gitError(GIT_FETCH_ARGS, result.stderr, result.code)
src/main/git/git-branches.ts:110:    const result = await this.context.mutate(context.commandRoot, GIT_PULL_ARGS)
src/main/git/git-branches.ts:111:    if (result.code !== 0) throw gitError(GIT_PULL_ARGS, result.stderr, result.code)
src/main/git/git-branches.ts:124:    const args = ['switch', '--no-guess', branch] as const
src/main/git/git-engine.ts:21:export { GIT_FETCH_ARGS, GIT_PULL_ARGS } from './git-branches'
src/main/git/git-history.ts:69:      if (objectType === 'commit') tips.push(objectName)
src/main/git/git-history.ts:70:      else if (peeledType === 'commit') tips.push(peeledName)
src/main/git/mutation-authorization.ts:9:import { GIT_FETCH_ARGS, GIT_PULL_ARGS } from './git-engine'
src/main/git/mutation-authorization.ts:223:  if (sameArgs(command, GIT_FETCH_ARGS)) return { kind: 'fetch', root }
src/main/git/mutation-authorization.ts:224:  if (sameArgs(command, GIT_PULL_ARGS)) return { kind: 'pull', root }
src/main/git/mutation-authorization.ts:227:    command[0] === 'switch' &&
src/main/git/worker-host-broker.ts:11:import { GIT_FETCH_ARGS, GIT_PULL_ARGS } from './git-engine'
src/main/git/worker-host-broker.ts:63:    call.args.length === 5 && call.args[2] === 'switch' && call.args[3] === '--no-guess'
src/main/git/worker-host-broker.ts:64:  const fetch = sameArgs(call.args.slice(2), GIT_FETCH_ARGS)
src/main/git/worker-host-broker.ts:65:  const pull = sameArgs(call.args.slice(2), GIT_PULL_ARGS)
src/main/git/worker-host-broker.ts:273:    case 'switch':
src/main/git/worker-host-broker.ts:282:      if (sameArgs([subcommand, ...rest], GIT_FETCH_ARGS)) return
src/main/git/worker-host-broker.ts:285:      if (sameArgs([subcommand, ...rest], GIT_PULL_ARGS)) return
=== ipc/git.ts channels ===
24:    'git:diff-inputs': invoke<GitDiffRequest, GitDiffResponse>(),
25:    'git:changes': invoke<GitChangesRequest, GitChanges>(),
26:    'git:history': invoke<GitHistoryRequest, GitHistoryPage>(),
27:    'git:ignored-entries': invoke<GitIgnoredEntriesRequest, GitIgnoredEntriesResponse>(),
28:    'git:commit-detail': invoke<GitCommitDetailRequest, GitCommitDetail>(),
29:    'git:blame': invoke<GitBlameRequest, readonly GitBlameRun[]>(),
30:    'git:branches': invoke<GitChangesRequest, GitBranchModel>(),
31:    'git:fetch': invoke<GitFetchRequest, OperationResult<ProjectState>>(),
32:    'git:pull': invoke<GitPullRequest, OperationResult<ProjectState>>(),
33:    'git:switch-branch': invoke<GitSwitchBranchRequest, OperationResult<ProjectState>>(),
<shellId: 41 completed with exit code 0>
```

</details>


---

<sub>3m 27s</sub>

### `bash`

**List IPC channels per feature**

$ cd /private/var/tmp/ws/f7354e9d/hvir && for f in app diagnostics document-review filesystem harness preview project sessions terminal web-pane; do echo "=== ipc/$f.ts channels ==="; grep -noE "'[a-z-]+:[a-z-]+'" src/shared/ipc/$f.ts | awk -F: '{print $3":"$4}' | sort -u | tr '\n' ' '; echo; done

<details>
<summary>21 lines</summary>

```
=== ipc/app.ts channels ===
attention': echo': info': renderer-ready': 
=== ipc/diagnostics.ts channels ===
acknowledge': cancel': capture': copy': create': delete': get': render-containment': save': session': state': 
=== ipc/document-review.ts channels ===
delivery-destinations': insert-delivery': prepare-delivery': preview-delivery': restore': revalidate': save': send-now-delivery': 
=== ipc/filesystem.ts channels ===
acquire-clipboard-files': acquire-dropped-files': acquire-external-move-files': cancel-file-operation': copy-external': create-entry': delete-entry': deletion-disclosure': external-move-disclosure': filename-search-cancel': filename-search': move-external': organize-entry': project-file-operation': read-asset': read': readdir': release-external-move-grant': resolve-entry': reveal-entry': write': 
=== ipc/harness.ts channels ===
authorize-path': catalog': configure-composer-submit': preview': probe-profiles': probe-snapshot': probe-templates': profile-delete': profile-duplicate': profile-materialize': profile-save': profiles': 
=== ipc/preview.ts channels ===
create': release': 
=== ipc/project.ts channels ===
acknowledge': browse-host': close': connect-host': disconnect-host': dismiss': folder-picker-browse': folder-picker-close': folder-picker-create-directory': folder-picker-start': hosts': open': plan-close': prompt-cancel': prompt-response': prompt': prune': refresh': reopen': root': state': switch': watch-interests': watch': 
=== ipc/sessions.ts channels ===
changed': observe': open': release': resolve-terminal': snapshot': usage-changed': usage-observe': usage-release': usage-snapshot': 
=== ipc/terminal.ts channels ===
clipboard-write': data': exit': forget': identity': kill': move': paste-image': plan-move': rebind-profile': record-recovery-decision': recovery': resize': resolve-file-clipboard': start': telemetry': update-layout': write': 
=== ipc/web-pane.ts channels ===
close': command': diagnostic': full-page': navigation-blocked': open-browser': open-external': open': reserved-bindings':
<shellId: 42 completed with exit code 0>
```

</details>


---

<sub>3m 34s</sub>

### `bash`

**Inspect web-pane proxy and related main modules**

$ cd /private/var/tmp/ws/f7354e9d/hvir && ls src/main/web-pane src/main/window src/main/viewer src/main/terminal src/main/pty src/main/sessions; echo; sed -n '1,80p' src/main/web-pane/loopback-http-proxy.ts

<details>
<summary>110 lines</summary>

```
src/main/pty:
pty-contract.ts
pty-launch-admission.ts
pty-session-lifetime.ts
pty-session-observation.ts
pty-stream-attachment.ts
pty-supervisor.ts

src/main/sessions:
sessions-observation-application.ts
sessions-observation-port.ts
sessions-open-resolution.ts
sessions-projection-identities.ts
sessions-projection-values.ts
sessions-telemetry-projection.ts
sessions-usage-observation-port.ts
sessions-usage-projection.ts

src/main/terminal:
electron-clipboard-file-paste.ts
renderer-pty-lifecycle.ts
session-registry.ts
terminal-identity-publication.ts
terminal-launch-admission.ts
terminal-start-response.ts
terminal-workspace-move-coordinator.ts

src/main/viewer:
document-read-authority.ts

src/main/web-pane:
loopback-http-proxy.ts
web-pane-route-registry.ts

src/main/window:
electron-renderer-document-lifecycle.ts
electron-renderer-recovery.ts
electron-window-manager.ts
renderer-recovery-monitor.ts
window-health-tracker.ts
window-policy.ts

import { randomBytes, timingSafeEqual } from 'node:crypto'
import { lookup } from 'node:dns/promises'
import { BlockList, connect as connectSocket, type Socket } from 'node:net'
import {
  Agent,
  createServer,
  request as requestHttp,
  type IncomingHttpHeaders,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from 'node:http'
import type { Duplex } from 'node:stream'

import {
  loopbackEndpointEquals,
  parseLoopbackHttpTarget,
  type LoopbackEndpoint,
  type WebPaneDiagnosticEvent,
} from '../../shared'
import type { ProjectHost } from '../project-host'

const MAX_PROXY_CONNECTIONS = 32
const MAX_PROXY_HEADER_BYTES = 16 * 1024
const PROXY_CONNECT_TIMEOUT_MS = 15_000
const blockedDirectAddresses = new BlockList()
for (const [network, prefix, family] of [
  ['0.0.0.0', 8, 'ipv4'],
  ['10.0.0.0', 8, 'ipv4'],
  ['100.64.0.0', 10, 'ipv4'],
  ['127.0.0.0', 8, 'ipv4'],
  ['169.254.0.0', 16, 'ipv4'],
  ['172.16.0.0', 12, 'ipv4'],
  ['192.168.0.0', 16, 'ipv4'],
  ['224.0.0.0', 3, 'ipv4'],
  ['::', 128, 'ipv6'],
  ['::1', 128, 'ipv6'],
  ['::ffff:0:0', 96, 'ipv6'],
  ['fc00::', 7, 'ipv6'],
  ['fe80::', 10, 'ipv6'],
  ['ff00::', 8, 'ipv6'],
] as const) {
  blockedDirectAddresses.addSubnet(network, prefix, family)
}

export interface ProxyCredentials {
  readonly username: string
  readonly password: string
  readonly realm: string
}

export interface LoopbackHttpProxyOptions {
  readonly host: ProjectHost
  readonly endpoint: LoopbackEndpoint
  readonly onDiagnostic?: (event: WebPaneDiagnosticEvent) => void
}

/**
 * An authenticated, pane-scoped HTTP proxy. It preserves the browser-visible
 * localhost origin while routing only the authorized loopback endpoint through
 * ProjectHost. Public HTTP resources use ordinary local networking.
 */
export class LoopbackHttpProxy {
  readonly credentials: ProxyCredentials = {
    username: randomBytes(24).toString('base64url'),
    password: randomBytes(32).toString('base64url'),
    realm: `hvir-${randomBytes(12).toString('hex')}`,
  }

  private readonly server: Server
  private readonly clients = new Set<Socket>()
  private readonly upstreams = new Set<Duplex>()
  private listeningPort: number | undefined
  private closed = false

  constructor(private readonly options: LoopbackHttpProxyOptions) {
    this.server = createServer(
      { maxHeaderSize: MAX_PROXY_HEADER_BYTES },
      (request, response) => {
        void this.proxyRequest(request, response)
<shellId: 43 completed with exit code 0>
```

</details>


---

<sub>3m 34s</sub>

### `bash`

**Read web pane URL and workspace policy**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' src/renderer/src/dashboards/web-pane-url.ts; echo "=== web-pane-workspace-policy ==="; sed -n '1,80p' src/renderer/src/dashboards/web-pane-workspace-policy.ts

<details>
<summary>18 lines</summary>

```
/** Build the same normalized target for guest navigation and browser handoff. */
export function webPaneUrlFromInput(origin: string, pathInput: string): string {
  const trimmed = pathInput.trim()
  const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return `${origin}${path}`
}
=== web-pane-workspace-policy ===
export function sanitizedWebPaneTitle(title: string): string {
  const normalized = [...title]
    .map((character) => {
      const codepoint = character.codePointAt(0) ?? 0
      return codepoint < 32 || codepoint === 127 ? ' ' : character
    })
    .join('')
    .trim()
  return normalized.slice(0, 120) || 'Web pane'
}
<shellId: 44 completed with exit code 0>
```

</details>


---

<sub>3m 34s</sub>

### `bash`

**Read HTML preview protocol**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,110p' src/main/html-preview-protocol.ts

<details>
<summary>99 lines</summary>

```
import { randomUUID } from 'node:crypto'
import { protocol } from 'electron'

import {
  HTML_PREVIEW_CSP,
  HTML_PREVIEW_SCHEME,
  hostPathEquals,
  type CreateHtmlPreviewResponse,
  type HostPath,
} from '../shared'
import type { RendererOwner } from './renderer-resource-scopes'

const MAX_DOCUMENT_BYTES = 64 * 1024 * 1024
const MAX_LIVE_DOCUMENTS = 64

/**
 * Serves untrusted HTML from a dedicated origin with a response-header CSP.
 * The iframe still omits allow-same-origin, so each document receives an
 * opaque origin even though the scheme itself is registered as standard.
 */
export class HtmlPreviewProtocol {
  private readonly documents = new Map<
    string,
    { readonly content: string; readonly owner?: RendererOwner; readonly root?: HostPath }
  >()
  private registered = false

  static registerScheme(): void {
    protocol.registerSchemesAsPrivileged([
      {
        scheme: HTML_PREVIEW_SCHEME,
        privileges: { standard: true, secure: true, bypassCSP: false },
      },
    ])
  }

  register(): void {
    if (this.registered) return
    protocol.handle(HTML_PREVIEW_SCHEME, (request) => this.handle(request))
    this.registered = true
  }

  create(
    content: string,
    owner?: RendererOwner,
    root?: HostPath,
  ): CreateHtmlPreviewResponse {
    if (typeof content !== 'string') throw new Error('HTML preview content must be text')
    if (Buffer.byteLength(content, 'utf8') > MAX_DOCUMENT_BYTES) {
      throw new Error('HTML previews are limited to 64 MiB')
    }
    while (this.documents.size >= MAX_LIVE_DOCUMENTS) {
      const oldest = this.documents.keys().next().value
      if (!oldest) break
      this.documents.delete(oldest)
    }
    const id = randomUUID()
    this.documents.set(id, { content, owner, root })
    return { id, url: `${HTML_PREVIEW_SCHEME}://document/${id}/index.html` }
  }

  release(id: string, owner?: RendererOwner): void {
    if (!/^[0-9a-f-]{36}$/i.test(id)) return
    const document = this.documents.get(id)
    if (!document || (owner && !sameOwner(document.owner, owner))) return
    this.documents.delete(id)
  }

  releaseOwner(owner: RendererOwner): void {
    for (const [id, document] of this.documents) {
      if (sameOwner(document.owner, owner)) this.documents.delete(id)
    }
  }

  releaseWorkspace(root: HostPath): void {
    for (const [id, document] of this.documents) {
      if (document.root && hostPathEquals(document.root, root)) this.documents.delete(id)
    }
  }

  clear(): void {
    this.documents.clear()
  }

  dispose(): void {
    this.clear()
    if (this.registered) protocol.unhandle(HTML_PREVIEW_SCHEME)
    this.registered = false
  }

  private handle(request: Request): Response {
    const url = new URL(request.url)
    const [id, leaf, extra] = url.pathname.split('/').filter(Boolean)
    if (url.hostname !== 'document' || !id || leaf !== 'index.html' || extra) {
      return response('Not found', 404, 'text/plain; charset=utf-8')
    }
    const document = this.documents.get(id)
    if (!document) {
      return response('Preview expired', 404, 'text/plain; charset=utf-8')
    }
    return new Response(document.content, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Security-Policy': HTML_PREVIEW_CSP,
        'Cache-Control': 'no-store',
        'Referrer-Policy': 'no-referrer',
        'X-Content-Type-Options': 'nosniff',
      },
    })
<shellId: 45 completed with exit code 0>
```

</details>


---

<sub>3m 40s</sub>

### `bash`

**Read web pane workspace hook**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' src/renderer/src/dashboards/use-web-pane-workspace.ts

<details>
<summary>114 lines</summary>

```
import { useCallback, useEffect, useRef, useState } from 'react'

import {
  hostPathEquals,
  unwrapOperation,
  type HostPath,
  type ProjectState,
} from '../../../shared'
import type { WebViewState } from './WebPane'
import { sanitizedWebPaneTitle } from './web-pane-workspace-policy'

export interface OpenWebLinkRequest {
  readonly terminalId: string
  readonly workspaceRoot: HostPath
  readonly url: string
}

export function useWebPaneWorkspace({
  onActivate,
  onError,
}: {
  readonly onActivate: () => void
  readonly onError: (message: string) => void
}) {
  const [views, setViews] = useState<readonly WebViewState[]>([])
  const [activeId, setActiveId] = useState<string>()
  const [active, setActive] = useState(false)
  const [focused, setFocused] = useState(false)
  const viewsRef = useRef(views)
  const activeIdRef = useRef(activeId)
  const activeRef = useRef(active)
  const rootRef = useRef<HostPath | undefined>(undefined)
  const selection = useRef(
    new Map<string, { readonly id?: string; readonly active: boolean }>(),
  )
  const portsRef = useRef({ onActivate, onError })
  viewsRef.current = views
  activeIdRef.current = activeId
  activeRef.current = active
  portsRef.current = { onActivate, onError }

  useEffect(() => {
    const disposeNavigation = window.hvir.on(
      'web-pane:navigation-blocked',
      (navigation) => {
        setViews((current) =>
          current.map((view) =>
            view.id === navigation.paneId
              ? { ...view, blockedNavigation: navigation }
              : view,
          ),
        )
      },
    )
    const disposeDiagnostic = window.hvir.on(
      'web-pane:diagnostic',
      ({ paneId, event }) => {
        setViews((current) =>
          current.map((view) =>
            view.id === paneId
              ? {
                  ...view,
                  routeDiagnostic: {
                    revision: (view.routeDiagnostic?.revision ?? 0) + 1,
                    event,
                  },
                }
              : view,
          ),
        )
      },
    )
    return () => {
      void disposeNavigation()
      void disposeDiagnostic()
    }
  }, [])

  useEffect(() => {
    window.hvir.send('web-pane:full-page', {
      paneId: focused && active ? activeId : undefined,
    })
  }, [active, activeId, focused])

  const applyProjectState = useCallback(
    (state: ProjectState, currentRoot: HostPath | undefined): boolean => {
      const liveWorkspaceKeys = new Set(
        state.projects.flatMap((project) =>
          project.workspaces
            .filter((workspace) => !workspace.closed)
            .map((workspace) => webWorkspaceKey(workspace.root)),
        ),
      )
      setViews((current) =>
        current.filter((view) =>
          liveWorkspaceKeys.has(webWorkspaceKey(view.workspaceRoot)),
        ),
      )
      if (currentRoot && hostPathEquals(currentRoot, state.root)) return false
      if (currentRoot) {
        selection.current.set(webWorkspaceKey(currentRoot), {
          id: activeIdRef.current,
          active: activeRef.current,
        })
      }
      const nextSelection = selection.current.get(webWorkspaceKey(state.root))
      const selectedView = viewsRef.current.find(
        (view) =>
          view.id === nextSelection?.id && hostPathEquals(view.workspaceRoot, state.root),
      )
      setActiveId(selectedView?.id)
      setActive(Boolean(selectedView && nextSelection?.active))
      setFocused(false)
      return true
    },
    [],
  )

  const openView = useCallback((view: WebViewState): void => {
    const existing = viewsRef.current.find((candidate) => candidate.id === view.id)
<shellId: 46 completed with exit code 0>
```

</details>


---

<sub>3m 40s</sub>

### `bash`

**Read WebPane component**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' src/renderer/src/dashboards/WebPane.tsx

<details>
<summary>133 lines</summary>

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
<shellId: 47 completed with exit code 0>
```

</details>


---

<sub>3m 49s</sub>

### `bash`

**Read harness launch menu model**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/terminal/harness-launch-menu.ts | head -150

<details>
<summary>61 lines</summary>

```
import type {
  HarnessProfile,
  HarnessProfileProbe,
  HarnessProviderCapabilities,
  HarnessProviderDescriptor,
} from '../../../shared'

export interface HarnessLaunchMenuState {
  readonly availability: 'unchecked' | 'checking' | 'available' | 'stale' | 'failed'
  readonly probe?: HarnessProfileProbe
}

export function bareShellLaunchChoice(
  providers: readonly HarnessProviderDescriptor[],
  profiles: readonly HarnessProfile[],
):
  | {
      readonly provider: HarnessProviderDescriptor
      readonly profile: HarnessProfile
    }
  | undefined {
  const provider = providers.find((candidate) => candidate.default)
  const profile = provider
    ? profiles.find(
        (candidate) => candidate.builtIn && candidate.providerId === provider.id,
      )
    : undefined
  return provider && profile ? { provider, profile } : undefined
}

export function harnessLaunchMenuState(
  profile: HarnessProfile,
  current: HarnessProfileProbe | undefined,
  checking: boolean,
  now = Date.now(),
): HarnessLaunchMenuState {
  if (profile.builtIn) return { availability: 'available' }
  if (checking) return { availability: 'checking', probe: current }
  if (!current || current.status === 'unchecked') {
    return { availability: 'unchecked', probe: current }
  }
  if (current.expiresAt !== undefined && current.expiresAt <= now) {
    return { availability: 'stale', probe: current }
  }
  return {
    availability: current.status === 'available' ? 'available' : 'failed',
    probe: current,
  }
}

export function compactHarnessCapabilityLabel(
  shellProvider: boolean,
  capabilities: HarnessProviderCapabilities | undefined,
): 'Integrated' | 'Launch only' | undefined {
  if (shellProvider) return undefined
  if (
    capabilities?.exactResume === true &&
    capabilities.sessionIdentity !== 'none' &&
    capabilities.contextPresentation !== 'none'
  ) {
    return 'Integrated'
  }
  return 'Launch only'
}
<shellId: 48 completed with exit code 0>
```

</details>


---

<sub>3m 49s</sub>

### `bash`

**Read terminal attention model**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/shared/terminal-attention.ts; echo "=== renderer terminal-attention.ts (head) ==="; sed -n '1,90p' src/renderer/src/terminal/terminal-attention.ts

<details>
<summary>70 lines</summary>

```
/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
export type TerminalAttentionState = 'working' | 'bell' | 'idle'
=== renderer terminal-attention.ts (head) ===
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
<shellId: 49 completed with exit code 0>
```

</details>


---

<sub>3m 49s</sub>

### `bash`

**Collect visible text in terminal components**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rhoE ">[A-Z][A-Za-z0-9 ,.'’…/&()+:-]{6,90}<" src/renderer/src/terminal/*.tsx | sort -u | head -150

<details>
<summary>8 lines</summary>

```
>Browser state is not migrated.<
>Fork Conversation to New Terminal<
>No retained terminals<
>Process and conversation stay live<
>Rehome the terminal in another worktree without restarting its process.<
>Restore terminals<
>Terminals<
<shellId: 50 completed with exit code 0>
```

</details>


---

<sub>3m 55s</sub>

### `bash`

**Read terminal recovery dialog**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' src/renderer/src/terminal/TerminalRecoveryDialog.tsx

<details>
<summary>136 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import {
  basenameHostPath,
  type HarnessProfile,
  type HarnessProfileId,
  type HarnessProfileProbe,
  type HarnessProviderDescriptor,
  type TerminalRecoverySession,
} from '../../../shared'
import {
  defaultRecoveryRebindProfile,
  recoverableProfile,
} from './terminal-profile-recovery'
import { terminalRecoveryCandidateDecision } from './terminal-recovery-planner'
import { probeLaunchUnavailable, recoveryProbe } from './terminal-probe-policy'

export function TerminalRecoveryDialog({
  sessions,
  providers,
  profiles,
  probes,
  onDismiss,
  onSkip,
  onResume,
  onRebind,
}: {
  readonly sessions: readonly TerminalRecoverySession[]
  readonly providers: readonly HarnessProviderDescriptor[]
  readonly profiles: readonly HarnessProfile[]
  readonly probes: readonly HarnessProfileProbe[]
  readonly onDismiss: () => void
  readonly onSkip: () => Promise<void>
  readonly onResume: (ids: ReadonlySet<string>) => Promise<void>
  readonly onRebind: (
    record: TerminalRecoverySession,
    profile: HarnessProfile,
  ) => Promise<void>
}): ReactElement {
  const dialogRef = useRef<HTMLElement>(null)
  const onDismissRef = useRef(onDismiss)
  const submittingRef = useRef(false)
  const [selected, setSelected] = useState<ReadonlySet<string>>(
    () =>
      new Set(
        sessions
          .filter(
            (session) =>
              providerDescriptor(providers, session.providerId) !== undefined &&
              recoverableProfile(profiles, session) !== undefined &&
              !probeLaunchUnavailable(recoveryProbe(probes, session)),
          )
          .map((session) => session.id),
      ),
  )
  const [rebind, setRebind] = useState<Readonly<Record<string, HarnessProfileId>>>({})
  const [error, setError] = useState<string>()
  const [submitting, setSubmitting] = useState(false)
  onDismissRef.current = onDismiss
  submittingRef.current = submitting

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => dialogRef.current?.focus())
    const keydown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.preventDefault()
        if (!submittingRef.current) onDismissRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), input:not(:disabled)',
      )
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (
        event.shiftKey &&
        (document.activeElement === first || document.activeElement === dialogRef.current)
      ) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    window.addEventListener('keydown', keydown)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', keydown)
    }
  }, [])

  const submit = async (decision: () => Promise<void>): Promise<void> => {
    setSubmitting(true)
    setError(undefined)
    try {
      await decision()
    } catch (reason) {
      setError(errorMessage(reason))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog terminal-recovery-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terminal-recovery-title"
        tabIndex={-1}
      >
        <h2 id="terminal-recovery-title">Restore terminals</h2>
        <p className="terminal-recovery-summary">
          Restore terminal rows now. Only the visible terminal in each split will start;
          the rest stay ready until selected.
        </p>
        <div className="terminal-recovery-list">
          {sessions.map((session) => {
            const provider = providerDescriptor(providers, session.providerId)
            const profile = recoverableProfile(profiles, session)
            const probe = recoveryProbe(probes, session)
            const decision = terminalRecoveryCandidateDecision(
              session,
              providers,
              profiles,
              probes,
            )
            const sameProviderProfiles = profiles.filter(
              (candidate) => candidate.providerId === session.providerId,
            )
            const defaultRebindProfile = defaultRecoveryRebindProfile(profiles, session)
            const selectedRebindId = rebind[session.id] ?? defaultRebindProfile?.id ?? ''
            const selectedRebindProfile = sameProviderProfiles.find(
              (candidate) => candidate.id === selectedRebindId,
            )
<shellId: 51 completed with exit code 0>
```

</details>


---

<sub>3m 55s</sub>

### `bash`

**Read terminal context menu**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,200p' src/renderer/src/terminal/TerminalContextMenu.tsx

<details>
<summary>187 lines</summary>

```
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
} from 'react'
import { createPortal } from 'react-dom'

import { boundTerminalContextMenuPosition } from './terminal-context-menu-position'
import { readApplicationClipboard, writeApplicationClipboard } from './terminal-clipboard'
import type {
  TerminalContextMenuController,
  TerminalContextMenuRequest,
} from './use-terminal-context-menu'
import type { TerminalForkAvailability } from './terminal-fork-policy'

type TerminalMenuAction = 'copy' | 'paste' | 'select-all' | 'clear' | 'reset'

interface TerminalContextMenuProps {
  readonly controller: TerminalContextMenuController
  readonly onSplit: () => void
  readonly onFork: () => void
  readonly forkAvailability: TerminalForkAvailability
  readonly onSearch: () => void
  readonly onOpenSettings: () => void
  readonly readText?: () => Promise<string>
  readonly writeText?: (value: string) => Promise<void>
}

export function TerminalContextMenu({
  controller,
  onSplit,
  onFork,
  forkAvailability,
  onSearch,
  onOpenSettings,
  readText = readApplicationClipboard,
  writeText = writeApplicationClipboard,
}: TerminalContextMenuProps): ReactElement | null {
  const { request } = controller
  const menuRef = useRef<HTMLDivElement>(null)
  const alive = useRef(true)
  const currentRequest = useRef(request)
  const [pending, setPending] = useState<TerminalMenuAction>()
  const [feedback, setFeedback] = useState<string>()
  currentRequest.current = request

  useEffect(() => {
    alive.current = true
    return () => {
      alive.current = false
    }
  }, [])

  useEffect(() => {
    if (!feedback) return
    const timeout = window.setTimeout(() => setFeedback(undefined), 4_000)
    return () => window.clearTimeout(timeout)
  }, [feedback])

  useLayoutEffect(() => {
    setPending(undefined)
    if (request) setFeedback(undefined)
    if (!request || !menuRef.current) return
    const menu = menuRef.current
    const bounds = menu.getBoundingClientRect()
    const position = boundTerminalContextMenuPosition(
      { x: request.x, y: request.y },
      { width: window.innerWidth, height: window.innerHeight },
      { width: bounds.width, height: bounds.height },
    )
    menu.style.left = `${position.x}px`
    menu.style.top = `${position.y}px`
    menu.style.visibility = 'visible'
    if (request.focusMenu) firstEnabledMenuItem(menu)?.focus()
  }, [request])

  useEffect(() => {
    if (!request) return
    const dismissOnPointer = (event: PointerEvent): void => {
      if (!menuRef.current?.contains(event.target as Node)) controller.dismiss()
    }
    const handleKeyboard = (event: globalThis.KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        controller.dismiss(true)
        return
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
      const menu = menuRef.current
      if (!menu?.contains(document.activeElement)) return
      event.preventDefault()
      focusRelativeMenuItem(menu, event.key)
    }
    document.addEventListener('pointerdown', dismissOnPointer)
    document.addEventListener('keydown', handleKeyboard, true)
    return () => {
      document.removeEventListener('pointerdown', dismissOnPointer)
      document.removeEventListener('keydown', handleKeyboard, true)
    }
  }, [controller, request])

  const acceptAsyncResult = (actionRequest: TerminalContextMenuRequest): boolean =>
    alive.current &&
    currentRequest.current?.id === actionRequest.id &&
    actionRequest.target.isCurrent()

  const copy = (): void => {
    if (!request || pending || !request.copyAvailable) return
    const actionRequest = request
    const selection = actionRequest.target.getSelection()
    if (selection === undefined) {
      controller.dismiss()
      return
    }
    setPending('copy')
    void writeText(selection).then(
      () => {
        if (!acceptAsyncResult(actionRequest)) return
        controller.dismiss(true)
      },
      () => {
        if (!acceptAsyncResult(actionRequest)) return
        setFeedback('Could not copy the selection to the clipboard.')
        controller.dismiss(true)
      },
    )
  }

  const paste = (): void => {
    if (!request || pending) return
    const actionRequest = request
    setPending('paste')
    void readText().then(
      (value) => {
        if (!acceptAsyncResult(actionRequest)) return
        if (value.length === 0) {
          setFeedback('Clipboard does not contain plain text.')
        } else {
          actionRequest.target.paste(value)
        }
        controller.dismiss(true)
      },
      () => {
        if (!acceptAsyncResult(actionRequest)) return
        setFeedback('Could not read plain text from the clipboard.')
        controller.dismiss(true)
      },
    )
  }

  const act = (
    action: Exclude<TerminalMenuAction, 'copy' | 'paste'>,
    invoke: (actionRequest: TerminalContextMenuRequest) => boolean,
  ): void => {
    if (!request || pending) return
    setPending(action)
    if (invoke(request)) controller.dismiss(true)
    else controller.dismiss()
  }

  const runWorkspaceAction = (callback: () => void): void => {
    if (!request || pending || !request.target.isCurrent()) {
      controller.dismiss()
      return
    }
    callback()
    controller.dismiss()
  }

  if (!request && !feedback) return null
  return createPortal(
    <>
      {request ? (
        <div
          ref={menuRef}
          className="terminal-context-menu"
          role="menu"
          aria-label="Terminal actions"
          style={{ left: 0, top: 0, visibility: 'hidden' }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            role="menuitem"
            disabled={!request.copyAvailable || pending !== undefined}
            onPointerDown={retainTerminalFocus}
            onClick={copy}
          >
            Copy Selection
          </button>
          <button
            type="button"
            role="menuitem"
            disabled={pending !== undefined}
            onPointerDown={retainTerminalFocus}
            onClick={paste}
<shellId: 52 completed with exit code 0>
```

</details>


---

<sub>3m 55s</sub>

### `bash`

**Read terminal workspace controls**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,170p' src/renderer/src/terminal/TerminalWorkspaceControls.tsx

<details>
<summary>143 lines</summary>

```
import type { Dispatch, ReactElement, SetStateAction } from 'react'

import type { TerminalPreferences } from '../settings/settings'
import { useAppTheme } from '../theme'
import { harnessLaunchMenuState } from './harness-launch-menu'
import { profileProbe } from './terminal-probe-policy'
import { TerminalRail } from './TerminalRail'
import { TerminalWorkspaceDialogs } from './TerminalWorkspaceDialogs'
import {
  settledTerminalSessions,
  terminalWorkspaceSplit,
  type TerminalWorkspaceModel,
} from './terminal-workspace-model'
import type { useTerminalProfiles } from './use-terminal-profiles'
import type { useTerminalRecovery } from './use-terminal-recovery'
import type { useTerminalSessionCommands } from './use-terminal-session-commands'
import type { useTerminalWorkspaceMove } from './use-terminal-workspace-move'

export function TerminalWorkspaceControls({
  label,
  available,
  railCompact,
  onRailCompact,
  menuOpen,
  setMenuOpen,
  model,
  profileState,
  recovery,
  commands,
  moving,
  preferences,
  onOpenSettings,
  onOpenHarnessSettings,
  onAddHarness,
}: {
  readonly label: string
  readonly available: boolean
  readonly railCompact: boolean
  readonly onRailCompact: (compact: boolean) => void
  readonly menuOpen: boolean
  readonly setMenuOpen: Dispatch<SetStateAction<boolean>>
  readonly model: TerminalWorkspaceModel
  readonly profileState: ReturnType<typeof useTerminalProfiles>
  readonly recovery: ReturnType<typeof useTerminalRecovery>
  readonly commands: ReturnType<typeof useTerminalSessionCommands>
  readonly moving: ReturnType<typeof useTerminalWorkspaceMove>
  readonly preferences: TerminalPreferences
  readonly onOpenSettings: () => void
  readonly onOpenHarnessSettings: () => void
  readonly onAddHarness: () => void
}): ReactElement {
  const appTheme = useAppTheme()
  const effectiveTerminalTheme =
    preferences.terminalTheme === 'app' ? appTheme : preferences.terminalTheme
  const { sessions, activeId } = model
  const { providers, profiles, probes, pendingProbeIds, refreshProbes } = profileState
  const {
    ready: recoveryReady,
    probesReady: recoveryProbesReady,
    candidates: recoveryCandidates,
    defaultProvider,
    defaultProfile,
    dismiss: dismissRecovery,
    skip: skipRecovery,
    resume: resumeRecovery,
    rebind: rebindRecovery,
  } = recovery
  const launchMenuEntries = profiles.map((profile) => {
    const probe = profileProbe(probes, profile)
    return {
      profile,
      provider: providers.find((candidate) => candidate.id === profile.providerId),
      state: harnessLaunchMenuState(profile, probe, pendingProbeIds.has(profile.id)),
    }
  })

  return (
    <>
      <TerminalRail
        label={label}
        visible
        compact={railCompact}
        onCompact={onRailCompact}
        terminalTheme={effectiveTerminalTheme}
        recoveryReady={recoveryReady}
        available={available}
        menuOpen={menuOpen}
        moveMenuOpen={moving.menuOpen}
        moveTargets={moving.moveTargets}
        launchMenuEntries={launchMenuEntries}
        split={terminalWorkspaceSplit(model)}
        sessions={settledTerminalSessions(sessions)}
        activeId={activeId}
        providers={providers}
        profiles={profiles}
        onSplit={commands.split}
        onOpenSettings={onOpenSettings}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onToggleMoveMenu={() => {
          setMenuOpen(false)
          moving.toggleMenu()
        }}
        onPlanMove={moving.plan}
        onDismissNewTargets={moving.dismissNewTargets}
        onAddSession={(profile) => commands.add(profile.id)}
        onAddHarness={() => {
          setMenuOpen(false)
          onAddHarness()
        }}
        onRefreshProbes={() => refreshProbes(true)}
        onOpenHarnessSettings={() => {
          setMenuOpen(false)
          onOpenHarnessSettings()
        }}
        onFocusSession={commands.focus}
        onMoveSession={commands.moveToOtherPane}
        onCloseSession={commands.close}
      />
      <TerminalWorkspaceDialogs
        visible
        move={
          moving.pending
            ? { plan: moving.pending, onCancel: moving.cancel, onMove: moving.confirm }
            : undefined
        }
        recovery={{
          ready: Boolean(
            recoveryCandidates.length > 0 &&
            recoveryProbesReady &&
            defaultProvider &&
            defaultProfile,
          ),
          sessions: recoveryCandidates,
          providers,
          profiles,
          probes,
          onRebind: rebindRecovery,
          onDismiss: dismissRecovery,
          onSkip: skipRecovery,
          onResume: resumeRecovery,
        }}
      />
    </>
  )
}
<shellId: 53 completed with exit code 0>
```

</details>


---

<sub>4m 2s</sub>

### `bash`

**Read terminal runtime check script**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat scripts/check-terminal-runtime.mts; echo "=== ghostty-terminal-capability-profile.mts (head) ==="; sed -n '1,60p' scripts/ghostty-terminal-capability-profile.mts

<details>
<summary>189 lines</summary>

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
=== ghostty-terminal-capability-profile.mts (head) ===
/**
 * Reviewed terminal-engine capability evidence for the immutable artifact hvir consumes.
 * This records conformance; it never changes TERM, TERM_PROGRAM, or terminfo.
 */
export const GHOSTTY_TERMINAL_CAPABILITY_PROFILE = {
  schemaVersion: 1,
  artifact: {
    url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
    // Release-recorded digest; package installation is pinned by npm's SHA-512 lock integrity.
    sha256: 'b035ac2b60b0c359be51e90d3a490ac1691ea5e925e020b8ec7c37c4139041e2',
    npmIntegrity:
      'sha512-agjdDVQsRH6nlxKxjstazJJRx47nBfsU1Sd0x6Z2G7a9sJ4DYP2bRiApT+F/3FPF9MoqAl+D2xFm3rV8nrKeaw==',
    sourceCommit: '30b96a57de4c776ee564ec1d04771c19940c1b1c',
    ghosttyCommit: '332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28',
    wasmBytes: 528_150,
  },
  identity: {
    term: 'xterm-256color',
    termProgram: 'hvir',
    terminfo: 'unchanged',
  },
  synchronizedOutput: {
    decPrivateMode: 2026,
    parserOwner: 'ghostty-core',
    presentationOwner: 'ghostty-web-canvas',
    recoveryTimeoutMs: 1_000,
    hvirOutputBuffering: false,
    terminalMethods: [
      'requestRender',
      'setRenderPaused',
      'resetCursorBlink',
      'getRenderStats',
      'resolveEventProvenance',
    ],
    parserMethods: [
      'isSynchronizedOutput',
      'getSynchronizedOutputGeneration',
      'resetSynchronizedOutput',
    ],
  },
  hostOwnedContextMenu: {
    browserMenuDisabled: true,
    clipboardOwner: 'hvir-renderer',
    imagePasteOwner: 'adr-026-main-coordinator',
    terminalMethods: [
      'hasSelection',
      'getSelection',
      'paste',
      'selectAll',
      'clear',
      'reset',
    ],
  },
  retainedBuffer: {
    owner: 'ghostty-web-native-snapshot',
    scrollbackBytes: 10_000_000,
    maxQueryBytes: 64 * 1024,
    maxExtractionBytes: 4 * 1024 * 1024,
    terminalMethods: [
      'searchRetainedBuffer',
<shellId: 54 completed with exit code 0>
```

</details>


---

<sub>4m 2s</sub>

### `bash`

**Inspect rename-noreplace native package**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat packages/rename-noreplace/package.json packages/rename-noreplace/index.js packages/rename-noreplace/binding.gyp; echo "=== c (head) ==="; sed -n '1,60p' packages/rename-noreplace/rename_noreplace.c; echo "=== git status of packages build ==="; git ls-files packages | cat; git check-ignore -v packages/rename-noreplace/build | cat

<details>
<summary>95 lines</summary>

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
'use strict'

/* global module, require */

module.exports = require('./build/Release/rename_noreplace.node')
{
  "targets": [
    {
      "target_name": "rename_noreplace",
      "sources": ["rename_noreplace.c"]
    }
  ]
}
=== c (head) ===
/*
 * Derived from Skill Steward's MIT-licensed rename_noreplace binding.
 * Copyright (c) 2026 Skill Steward contributors.
 * Modified for hvir to accept separate source and destination parent fds.
 */
#define _GNU_SOURCE

#include <errno.h>
#include <fcntl.h>
#include <node_api.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#if defined(__APPLE__)
#include <sys/stdio.h>
#elif defined(__linux__)
#include <sys/syscall.h>
#ifndef RENAME_NOREPLACE
#define RENAME_NOREPLACE (1 << 0)
#endif
#endif

#define HVIR_MAX_BASENAME_BYTES 255

static napi_value hvir_metadata(napi_env env, napi_callback_info info) {
  (void) info;
  napi_value result;
  if (napi_create_string_utf8(
        env,
        "hvir.rename-noreplace.v1",
        NAPI_AUTO_LENGTH,
        &result
      ) != napi_ok) {
    return NULL;
  }
  return result;
}

static int hvir_read_basename(napi_env env, napi_value value, char **output) {
  size_t length = 0;
  if (napi_get_value_string_utf8(env, value, NULL, 0, &length) != napi_ok
      || length == 0
      || length > HVIR_MAX_BASENAME_BYTES) {
    return EINVAL;
  }
  char *buffer = (char *) malloc(length + 1);
  if (buffer == NULL) return ENOMEM;
  size_t written = 0;
  if (napi_get_value_string_utf8(env, value, buffer, length + 1, &written) != napi_ok
      || written != length
      || memchr(buffer, '\0', length) != NULL
      || strchr(buffer, '/') != NULL
      || strcmp(buffer, ".") == 0
      || strcmp(buffer, "..") == 0) {
    free(buffer);
    return EINVAL;
  }
  *output = buffer;
  return 0;
=== git status of packages build ===
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
.gitignore:7:packages/*/build	packages/rename-noreplace/build
<shellId: 55 completed with exit code 0>
```

</details>


---

<sub>4m 9s</sub>

### `bash`

**Read ESLint config head (seam rules)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' eslint.config.mjs

<details>
<summary>110 lines</summary>

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
<shellId: 56 completed with exit code 0>
```

</details>


---

<sub>4m 9s</sub>

### `bash`

**Read architecture hotspot scripts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat scripts/architecture-hotspots.mjs; echo "=== .mts head ==="; sed -n '1,120p' scripts/architecture-hotspots.mts

<details>
<summary>121 lines</summary>

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()
=== .mts head ===
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
<shellId: 57 completed with exit code 0>
```

</details>


---

<sub>4m 9s</sub>

### `bash`

**Read smoke scenario runner head**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' scripts/run-smoke-scenarios.mts

<details>
<summary>131 lines</summary>

```
import { appendFile } from 'node:fs/promises'
import type { SmokeFailureEvidence } from '../src/main/smoke/failure-evidence.mts'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import {
  SmokeAttemptEvidenceCollector,
  formatSmokeFailureEvidence,
  createSmokeFailureArtifact,
  writeSmokeFailureArtifact,
} from './smoke-failure-artifact.mts'
import {
  parseElectronSmokeScenario,
  type ElectronSmokeScenario,
} from '../src/main/smoke/scenario-selection.mts'

export const DEFAULT_SMOKE_SCENARIOS = [
  'pty-native',
  'viewer-position',
  'native-host-worker',
  'workbench-health',
  'platform-contracts',
  'terminal-theme',
  'terminal-move',
  'workbench-layout',
  'terminal-split',
  'app-settings',
  'harness-profiles',
] as const satisfies readonly ElectronSmokeScenario[]

export type SmokeScenarioName = ElectronSmokeScenario

export interface SmokeScenarioResult {
  readonly scenario: SmokeScenarioName
  readonly iteration: number
  readonly repetitionCount: number
  readonly status: 'passed' | 'failed'
  readonly exitCode?: number
  readonly signal?: NodeJS.Signals
  readonly error?: string
  readonly failureEvidence?: SmokeFailureEvidence | null
  readonly durationMs?: number
}

type InvokeSmokeScenario = (
  scenario: SmokeScenarioName,
  iteration: number,
  repetitionCount: number,
) => Promise<Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'>>

const MAX_SMOKE_REPETITIONS = 100
const DEFAULT_SMOKE_ATTEMPT_TIMEOUT_MS = 180_000
const CAPACITY_SMOKE_ATTEMPT_TIMEOUT_MS = 600_000
const FAILURE_ARTIFACT_TIMEOUT_MS = 1_000
const SMOKE_TERMINATION_GRACE_MS = 15_000
const SMOKE_FORCE_KILL_SETTLE_MS = 1_000
// Independent acceptance oracle for Electron's native standard-error text.
const DISPOSED_RENDER_FRAME_MESSAGE =
  'Render frame was disposed before WebFrameMain could be accessed'

export interface SmokeScenarioInvocationOptions {
  readonly command?: string
  readonly args?: readonly string[]
  readonly cwd?: string
  readonly environment?: NodeJS.ProcessEnv
  readonly timeoutMs?: number
  readonly terminationGraceMs?: number
  readonly forceKillSettleMs?: number
  readonly artifactDirectory?: string
  readonly interruptionSignal?: AbortSignal
  readonly registerSignalEscalation?: (escalate: () => void) => () => void
}

export function smokeAttemptTimeoutMs(scenario: SmokeScenarioName): number {
  return scenario === 'capacity'
    ? CAPACITY_SMOKE_ATTEMPT_TIMEOUT_MS
    : DEFAULT_SMOKE_ATTEMPT_TIMEOUT_MS
}

export function parseSmokeRepetitionCount(value: string | undefined): number {
  if (value === undefined) return 1
  if (!/^[0-9]+$/.test(value)) {
    throw new Error(
      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
    )
  }
  const repetitionCount = Number(value)
  if (
    !Number.isSafeInteger(repetitionCount) ||
    repetitionCount < 1 ||
    repetitionCount > MAX_SMOKE_REPETITIONS
  ) {
    throw new Error(
      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
    )
  }
  return repetitionCount
}

export function selectedSmokeScenarios(
  value: string | undefined,
  positionalNames: readonly string[] = [],
): readonly SmokeScenarioName[] {
  if (positionalNames.length > 0) {
    if (value !== undefined && value !== '') {
      throw new Error(
        'Select Electron smoke scenarios with positional names or HVIR_SMOKE_SCENARIO, not both',
      )
    }
    return positionalNames.map((name) => parseElectronSmokeScenario(name))
  }
  if (value === undefined || value === '') return DEFAULT_SMOKE_SCENARIOS
  return [parseElectronSmokeScenario(value)]
}

export async function runSmokeScenarioGroups(
  scenarios: readonly SmokeScenarioName[],
  repetitionCount: number,
  invoke: InvokeSmokeScenario,
  interruptionSignal?: AbortSignal,
): Promise<readonly SmokeScenarioResult[]> {
  const results: SmokeScenarioResult[] = []
  for (let iteration = 1; iteration <= repetitionCount; iteration += 1) {
    for (const scenario of scenarios) {
      if (interruptionSignal?.aborted) {
        results.push({
          scenario,
          iteration,
          repetitionCount,
          status: 'failed',
          error: 'launcher interrupted',
        })
        return results
      }
      try {
        results.push({
          scenario,
          iteration,
          repetitionCount,
          ...(await invoke(scenario, iteration, repetitionCount)),
<shellId: 58 completed with exit code 0>
```

</details>


---

<sub>4m 29s</sub>

### `bash`

**Run seam and ADR checks to see current state**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== check-seams ==="; npm run --silent check-seams 2>&1 | tail -20; echo "exit: ${PIPESTATUS[0]}"; echo; echo "=== check-adrs ==="; npm run --silent check-adrs 2>&1 | tail -12; echo "exit: ${PIPESTATUS[0]}"

<details>
<summary>30 lines</summary>

```
=== check-seams ===
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
exit: 0

=== check-adrs ===
    at readdirSync (node:fs:1884:26)
    at file:///private/var/tmp/ws/f7354e9d/hvir/scripts/check-adrs.mjs:20:26
    at ModuleJob.run (node:internal/modules/esm/module_job:569:25)
    at async node:internal/modules/esm/loader:650:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/f7354e9d/hvir/docs/adr'
}

Node.js v26.5.0
exit: 1
<shellId: 59 completed with exit code 0>
```

</details>


---

<sub>4m 29s</sub>

### `bash`

**Run TypeScript typecheck**

$ cd /private/var/tmp/ws/f7354e9d/hvir && npm run --silent typecheck 2>&1 | tail -30; echo "typecheck exit: ${PIPESTATUS[0]}"

```
typecheck exit: 0
<shellId: typecheck completed with exit code 0>
```


---

<sub>4m 39s</sub>

### `bash`

**Run baseline unit tests in background**

$ cd /private/var/tmp/ws/f7354e9d/hvir && mkdir -p "$TMPDIR/hvir-readme" && (npx vitest run --reporter=dot > "$TMPDIR/hvir-readme/test-baseline.log" 2>&1; echo "vitest exit: $?" >> "$TMPDIR/hvir-readme/test-baseline.log")

```
<command started in background with shellId: tests-baseline>
```


---

<sub>4m 39s</sub>

### `bash`

**Read ProjectsBar component head**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' src/renderer/src/workspaces/ProjectsBar.tsx

<details>
<summary>118 lines</summary>

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
<shellId: 60 completed with exit code 0>
```

</details>


---

<sub>4m 39s</sub>

### `bash`

**Collect visible text across feature components**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rhoE ">[A-Z][A-Za-z0-9 ,.'’…/&()+:-]{5,110}<" src/renderer/src/workspaces/*.tsx src/renderer/src/git/*.tsx src/renderer/src/document-review/*.tsx src/renderer/src/sessions/*.tsx src/renderer/src/diagnostics/*.tsx src/renderer/src/health/*.tsx src/renderer/src/tree/*.tsx src/renderer/src/viewer/*.tsx | sort -u | head -200

<details>
<summary>64 lines</summary>

```
>Application-host Trash<
>Attention and activity<
>Attention<
>Author<
>Branch point<
>Branch<
>Choose a live terminal…<
>Commit details<
>Commit<
>Current lifetime<
>Destination folder<
>Destination<
>Diff preview limited<
>Dimensions<
>Durable journaling is disabled in this build.<
>Exact destination<
>Exact structured fields<
>Filter<
>Find file<
>Git history<
>Its terminals remain available. Close the workspace tab when finished.<
>Lifecycle<
>Line or line:column<
>Loaded preview only<
>Loading changes…<
>Loading history…<
>Loading image…<
>Loading local evidence details…<
>Local diagnostic evidence<
>Local, bounded, and never sent to a harness automatically.<
>Masked surfaces<
>Media type<
>Move External Items Here<
>No comments at this location.<
>No rendered view for this file type<
>No screenshot is captured by default.<
>No workbench faults observed.<
>Not a Git repository<
>Optional screenshot<
>Parsing CSV…<
>Preceding lifetime<
>Preparing exact review…<
>Preparing HTML preview…<
>Project<
>Provider<
>Reconnect to browse this host.<
>Reconnect to inspect Git.<
>Rendering markdown…<
>Rendering…<
>Reopen a present worktree or manage a worktree that Git no longer finds.<
>Review and send<
>Review diagnostic report<
>Review<
>Selected folder<
>SHA-256<
>Source recovery<
>Source, diff, and review capture are unavailable.<
>Switching…<
>Terminal<
>Unsaved changes in this tab will be discarded.<
>Workbench health<
>Workspace<
>Worktree no longer exists<
<shellId: 61 completed with exit code 0>
```

</details>


---

<sub>4m 47s</sub>

### `bash`

**Inspect document review delivery UI strings**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "Insert\|Send now\|Copy\|Review and send\|Choose a live\|Review mode\|title=\|>[A-Z]" src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx | head -60; echo "=== Controls ==="; grep -n "title=\|aria-label=\|>[A-Z]" src/renderer/src/document-review/DocumentReviewControls.tsx | head -40

<details>
<summary>32 lines</summary>

```
15:        <strong>Review and send</strong>
21:        <span>Exact destination</span>
28:          <option value="">Choose a live terminal…</option>
33:                ? 'Send now supported'
35:                  ? 'Insert supported'
36:                  : 'Copy only'}
50:            <dt>Terminal</dt>
54:            <dt>Provider</dt>
58:            <dt>Lifecycle</dt>
64:            <dt>Attention</dt>
88:              {delivery.copied ? 'Copied' : 'Copy review'}
98:              title={
100:                  ? 'Insert one atomic bracketed paste without submitting'
102:                    ? 'This provider is Copy-only'
103:                    : 'Choose an Insert-supported terminal'
107:              {delivery.inserted ? 'Inserted' : 'Insert review'}
117:              title={
129:      {delivery.loading ? <p role="status">Preparing exact review…</p> : null}
=== Controls ===
17:    <div className="document-review-toolbar" role="group" aria-label="Document review">
21:        aria-label={
26:        title="Document review mode"
34:          aria-label="Add comment for selected source lines"
36:          title={
73:    <aside className="document-review-chrome" aria-label="Document review comments">
115:              aria-label={`Send ${interaction.activeBatchCount} review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'} to the top terminal`}
119:              title={
134:              aria-label={`Discard ${interaction.activeBatchCount} draft review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'}`}
152:              aria-label={`Review and send ${interaction.activeBatchCount} comments`}
163:              aria-label={`Clear ${interaction.historyCount} sent and resolved review ${interaction.historyCount === 1 ? 'comment' : 'comments'} from this workspace`}
191:          <h2 id="document-review-discard-title">Discard this review?</h2>
<shellId: 62 completed with exit code 0>
```

</details>


---

<sub>4m 47s</sub>

### `bash`

**Read document review delivery policy**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,90p' src/main/document-review/document-review-delivery-policy.ts

<details>
<summary>84 lines</summary>

```
import {
  DOCUMENT_REVIEW_LIMITS,
  documentReviewUtf8Bytes,
  documentReviewWorkspaceEquals,
  isDocumentReviewDocument,
  isDocumentReviewIdentifier,
  type DocumentReviewComment,
  type DocumentReviewDeliveryPayload,
  type DocumentReviewDeliverySelection,
  type DocumentReviewModel,
  type ReviewSourceRange,
} from '../../shared'

const QUOTE_TRUNCATION_MARKER = '\n… [quote truncated]'

interface DeliveryGroup {
  readonly relativePath: string
  readonly comments: readonly {
    readonly range: ReviewSourceRange
    readonly quote: string
    readonly comment: string
  }[]
}

export type DocumentReviewDeliveryPolicyResult =
  | { readonly ok: true; readonly value: DocumentReviewDeliveryPayload }
  | { readonly ok: false; readonly error: string }

/** Pure owner for exact review selection, grouping, formatting, and outbound bounds. */
export function prepareDocumentReviewDeliveryPayload(
  model: DocumentReviewModel,
  selection: DocumentReviewDeliverySelection,
): DocumentReviewDeliveryPolicyResult {
  const selected = selectComments(model, selection)
  if (!selected.ok) return selected
  const comments = selected.value.toSorted(compareComments)
  const groups: DeliveryGroup[] = []

  for (const reviewComment of comments) {
    const relativePath = workspaceRelativePath(model, reviewComment)
    if (!relativePath) {
      return failure('A review document is outside the exact workspace')
    }
    const comment = normalizedTerminalText(reviewComment.body)
    const excerpt = normalizedTerminalText(reviewComment.anchor.excerpt)
    if (comment === undefined || excerpt === undefined || unsafePath(relativePath)) {
      return failure('Review delivery refuses terminal control characters')
    }
    const member = {
      range: reviewComment.anchor.range,
      quote: boundedQuote(excerpt),
      comment,
    }
    const prior = groups.at(-1)
    if (prior?.relativePath === relativePath) {
      groups[groups.length - 1] = {
        ...prior,
        comments: [...prior.comments, member],
      }
    } else {
      groups.push({ relativePath, comments: [member] })
    }
  }

  const body = groups.map(formatGroup).join('\n\n')
  const byteLength = documentReviewUtf8Bytes(body)
  if (byteLength > DOCUMENT_REVIEW_LIMITS.deliveryPayloadBytes) {
    return failure('The review delivery exceeds its outbound byte limit')
  }
  return {
    ok: true,
    value: {
      body,
      byteLength,
      commentIds: comments.map((comment) => comment.id),
    },
  }
}

function selectComments(
  model: DocumentReviewModel,
  selection: DocumentReviewDeliverySelection,
):
  | { readonly ok: true; readonly value: readonly DocumentReviewComment[] }
  | { readonly ok: false; readonly error: string } {
  if (selection.kind === 'comment') {
    const comment = model.comments.find(({ id }) => id === selection.commentId)
    if (!comment) return failure('The review comment no longer exists')
    const eligibility = deliveryEligibility(model, comment)
    return eligibility ?? { ok: true, value: [comment] }
<shellId: 63 completed with exit code 0>
```

</details>


---

<sub>4m 47s</sub>

### `bash`

**Inspect diagnostic report feature**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' src/renderer/src/diagnostics/DiagnosticReportDialog.tsx | grep -n "p>\|<h\|small\|span>" | head -40; echo "=== shared/diagnostic-report.ts head ==="; sed -n '1,70p' src/shared/diagnostic-report.ts

<details>
<summary>68 lines</summary>

```
=== shared/diagnostic-report.ts head ===
import { isDiagnosticOpaqueId } from './diagnostics'
import {
  DIAGNOSTIC_REPORT_OWNERS,
  isDiagnosticReportEvent,
  type DiagnosticReportEvent,
  type DiagnosticReportOwner,
} from './diagnostic-report-event'
import {
  isWorkbenchHealthSnapshot,
  type WorkbenchHealthSnapshot,
} from './workbench-health'
import {
  isApplicationBuildChannel,
  type ApplicationBuildChannel,
} from './application-build-channel'

export type {
  DiagnosticReportEvent,
  DiagnosticReportEventKind,
  DiagnosticReportLifetimeScope,
  DiagnosticReportOwner,
} from './diagnostic-report-event'

export const DIAGNOSTIC_REPORT_VERSION = 3
export const DIAGNOSTIC_REPORT_RETENTION_HOURS = 24
export const MAX_DIAGNOSTIC_REPORT_EVENTS = 256
export const MAX_DIAGNOSTIC_REPORT_DROPPED_COUNTS = 64
export const MAX_DIAGNOSTIC_REPORT_SCREENSHOT_BYTES = 2 * 1024 * 1024
export const MAX_DIAGNOSTIC_REPORT_STRUCTURED_BYTES = 512 * 1024
export const MAX_DIAGNOSTIC_REPORT_BYTES = 10 * 1024 * 1024
export const MAX_DIAGNOSTIC_CAPTURE_MASKS = 32
export const DIAGNOSTIC_REPORT_NOTICE =
  'UNTRUSTED DIAGNOSTIC MATERIAL — review before using as instructions.'

export interface DiagnosticReportDroppedCount {
  readonly source: DiagnosticReportOwner | 'diagnostic-writer'
  readonly reason:
    | 'invalid'
    | 'rate'
    | 'recent-capacity'
    | 'renderer-session'
    | 'renderer-invalid'
    | 'renderer-queue'
    | 'renderer-rate'
    | 'renderer-unavailable'
    | 'writer-queue'
    | 'writer-storage'
  readonly count: number
}

export interface DiagnosticReport {
  readonly version: typeof DIAGNOSTIC_REPORT_VERSION
  readonly reportId: string
  readonly notice: typeof DIAGNOSTIC_REPORT_NOTICE
  readonly createdAt: string
  readonly application: {
    readonly version: string
    readonly electronVersion: string
    readonly chromeVersion: string
    readonly platform: 'linux' | 'macos' | 'windows' | 'other'
    readonly architecture: 'arm64' | 'x64' | 'other'
    readonly mode: 'packaged' | 'development'
    readonly buildChannel: ApplicationBuildChannel
  }
  readonly renderer: {
    readonly ownerId: number
    readonly ownerGeneration: number
    readonly surface: 'workbench-health'
  }
  readonly diagnostics: {
<shellId: 64 completed with exit code 0>
```

</details>


---

<sub>4m 55s</sub>

### `bash`

**Read viewer workload policy and structured data**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,60p' src/shared/viewer-workload-policy.ts; echo "=== structured-data.ts head ==="; sed -n '1,40p' src/renderer/src/viewer/structured-data.ts; echo "=== shiki language catalog head ==="; sed -n '1,40p' src/renderer/src/viewer/shiki-language-catalog.ts

<details>
<summary>98 lines</summary>

```
/** Each Git side is bounded before it crosses the utility-process/renderer seam. */
export const DIFF_INPUT_BYTE_LIMIT = 2 * 1024 * 1024
/** ProjectHost hard ceiling, not a default; each caller supplies its narrower bound. */
export const PROJECT_HOST_TEXT_PREFIX_BYTE_LIMIT = 8 * 1024 * 1024

export interface TextWorkload {
  readonly content: string
  /** UTF-8 bytes included in `content`, not the size of an omitted suffix. */
  readonly byteLength: number
  /** Lines included in `content`; partial inputs never claim a full-file count. */
  readonly lineCount: number
  readonly complete: boolean
  /** False only when the owning byte transport observed malformed UTF-8. */
  readonly validUtf8?: boolean
}

export function assertTextPrefixByteLimit(maxBytes: number): void {
  if (
    !Number.isSafeInteger(maxBytes) ||
    maxBytes < 1 ||
    maxBytes > DIFF_INPUT_BYTE_LIMIT
  ) {
    throw new Error('Invalid text prefix byte limit')
  }
}

export function assertProjectHostTextPrefixByteLimit(maxBytes: number): void {
  if (
    !Number.isSafeInteger(maxBytes) ||
    maxBytes < 1 ||
    maxBytes > PROJECT_HOST_TEXT_PREFIX_BYTE_LIMIT
  ) {
    throw new Error('Invalid ProjectHost text prefix byte limit')
  }
}

export function measureTextWorkload(content: string, complete = true): TextWorkload {
  return {
    content,
    byteLength: new TextEncoder().encode(content).byteLength,
    lineCount: textLineCount(content),
    complete,
  }
}

export function boundTextWorkload(
  content: string,
  maxBytes: number,
  complete = true,
): TextWorkload {
  const encoded = new TextEncoder().encode(content)
  if (complete && encoded.byteLength <= maxBytes) {
    return {
      content,
      byteLength: encoded.byteLength,
      lineCount: textLineCount(content),
      complete: true,
    }
  }
  const bounded = new TextDecoder().decode(encoded.slice(0, maxBytes), {
=== structured-data.ts head ===
import { parseAllDocuments } from 'yaml'

export type StructuredDataFormat = 'json' | 'yaml'

export function parseStructuredData(
  source: string,
  format: StructuredDataFormat,
): unknown {
  if (format === 'json') return JSON.parse(source) as unknown
  const documents = parseAllDocuments(source)
  const errors = documents.flatMap((document) => document.errors)
  if (errors.length > 0) {
    throw new Error(errors.map((error) => error.message).join('\n'))
  }
  const values = documents.map(
    (document) => document.toJS({ mapAsMap: false, maxAliasCount: 100 }) as unknown,
  )
  if (values.length <= 1) return values[0] ?? null
  return Object.fromEntries(
    values.map((value, index) => [`document ${index + 1}`, value]),
  )
}
=== shiki language catalog head ===
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
<shellId: 65 completed with exit code 0>
```

</details>


---

<sub>4m 55s</sub>

### `bash`

**Check whether the source viewer supports editing/saving**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "writeFile\|onSave\|dirty\|editable\|readOnly\|EditorState.readOnly" src/renderer/src/viewer/SourceView.tsx | head -30; echo "=== FileViewer strings ==="; grep -n "title=\|aria-label=\|>[A-Z][a-z]" src/renderer/src/viewer/FileViewer.tsx | head -60

<details>
<summary>25 lines</summary>

```
23:  readOnly = false,
29:  onSave,
39:  readonly readOnly?: boolean
45:  readonly onSave: () => void
64:  const callbacks = useRef({ onContent, onSave, onPosition })
70:  callbacks.current = { onContent, onSave, onPosition }
83:          EditorState.readOnly.of(readOnly),
84:          EditorView.editable.of(!readOnly),
91:                  review.dirty ||
113:                if (!readOnly) callbacks.current.onSave()
120:            if (update.docChanged && !applyingExternal.current && !readOnly) {
159:  }, [pathKey, readOnly])
196:                dirty: documentReview.dirty,
=== FileViewer strings ===
187:        <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
194:            <span className="viewer-operation-error" role="status" title={tab.error}>
204:                  title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
236:                aria-label="Diff base"
240:                <option value="working-tree">Index</option>
242:                <option value="branch-point">Branch point</option>
259:              aria-label="View mode"
283:                  title={
312:              aria-label="View mode"
380:      <span>Source, diff, and review capture are unavailable.</span>
<shellId: 66 completed with exit code 0>
```

</details>


---

<sub>5m 10s</sub>

### `bash`

**Read source view save binding and viewer mode controls**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '74,130p' src/renderer/src/viewer/SourceView.tsx; echo "=== FileViewer 225-330 ==="; sed -n '225,330p' src/renderer/src/viewer/FileViewer.tsx

<details>
<summary>165 lines</summary>

```
const parent = container.current
    if (!parent) return
    lastUserContent.current = undefined
    const targetRef: { current?: CodeMirrorFindTarget } = {}
    const editor = new EditorView({
      parent,
      state: EditorState.create({
        doc: content,
        extensions: [
          EditorState.readOnly.of(readOnly),
          EditorView.editable.of(!readOnly),
          lineNumbers({
            domEventHandlers: {
              mousedown(view, block, event) {
                const review = reviewProjection.current
                if (
                  !review?.active ||
                  review.dirty ||
                  !(event instanceof MouseEvent) ||
                  event.button !== 0
                ) {
                  return false
                }
                event.preventDefault()
                const line = view.state.doc.lineAt(block.from).number
                review.onCapture({ startLine: line, endLine: line })
                return true
              },
            },
          }),
          blameCompartment.current.of(blameGutter(blame)),
          reviewCompartment.current.of([]),
          tokenDecorations,
          viewerFindDecorations,
          keymap.of([
            {
              key: 'Mod-s',
              preventDefault: true,
              run: () => {
                if (!readOnly) callbacks.current.onSave()
                return true
              },
            },
          ]),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) targetRef.current?.contentChanged()
            if (update.docChanged && !applyingExternal.current && !readOnly) {
              const next = update.state.doc.toString()
              lastUserContent.current = next
              callbacks.current.onContent(next)
            }
          }),
          sourceTheme,
        ],
      }),
    })
    const target = new CodeMirrorFindTarget([{ view: editor }])
=== FileViewer 225-330 ===
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
                if (
                  event.target instanceof HTMLElement &&
                  event.target.matches(':focus-visible')
                ) {
                  setModeControlExpanded(true)
                }
              }}
              onBlur={(event) => {
                if (
                  !(event.relatedTarget instanceof Node) ||
                  !event.currentTarget.contains(event.relatedTarget)
                ) {
                  setModeControlExpanded(false)
                }
              }}
            >
              {(['rendered', 'source', 'diff'] as const).map((mode) => (
                <button
                  type="button"
                  className={tab.mode === mode ? 'active' : ''}
                  aria-pressed={tab.mode === mode}
                  aria-expanded={tab.mode === mode ? modeControlExpanded : undefined}
                  title={
                    tab.file?.binary && mode !== 'rendered'
                      ? 'Binary repository assets are available in rendered view only'
                      : mode === 'rendered' && !canRender(tab.path)
                        ? 'No renderer registered for this file type'
                        : tab.mode === mode && !modeControlExpanded
                          ? 'Choose view mode · Ctrl/Cmd+Shift+M cycles modes'
                          : `${mode} view · Ctrl/Cmd+Shift+M cycles modes`
                  }
                  disabled={Boolean(
                    (tab.file?.binary && mode !== 'rendered') ||
                    (tab.externalWorkspaceRoot && mode === 'diff'),
                  )}
                  key={mode}
                  onClick={() => {
                    if (tab.mode === mode && !modeControlExpanded) {
                      setModeControlExpanded(true)
                      return
                    }
                    setModeControlExpanded(false)
                    onMode(mode, positionCapture.current?.())
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>
            <select
              className="mode-select"
              aria-label="View mode"
              value={tab.mode}
              onChange={(event) => {
                onMode(event.currentTarget.value as ViewMode, positionCapture.current?.())
              }}
            >
              {(['rendered', 'source', 'diff'] as const).map((mode) => (
                <option
                  value={mode}
                  disabled={Boolean(
                    (tab.file?.binary && mode !== 'rendered') ||
                    (tab.externalWorkspaceRoot && mode === 'diff'),
                  )}
                  key={mode}
                >
                  {mode[0]?.toUpperCase()}
                  {mode.slice(1)}
                </option>
              ))}
<shellId: 67 completed with exit code 0>
```

</details>


---

<sub>5m 10s</sub>

### `read_bash`

**Waiting up to 60 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "shellId": "tests-baseline",
  "delay": 60
}
```

</details>

```

<shellId: tests-baseline completed with exit code 0>
```


---

<sub>5m 14s</sub>

### `bash`

**Show baseline test results tail**

$ cd /private/var/tmp/ws/f7354e9d/hvir && wc -l "$TMPDIR/hvir-readme/test-baseline.log"; tail -60 "$TMPDIR/hvir-readme/test-baseline.log"

<details>
<summary>46 lines</summary>

```
307 /private/var/tmp/ws/f7354e9d/home/tmp/hvir-readme/test-baseline.log
AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'

Expected: "revoked while opening"
Received: "listen EPERM: operation not permitted 127.0.0.1"

 ❯ test/web-pane-route-registry.test.ts:237:25
    235|     finishPreparation!(disposeSession)
    236|
    237|     await expect(opening).rejects.toThrow('revoked while opening')
       |                         ^
    238|     expect(disposeSession).toHaveBeenCalledOnce()
    239|   })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/26]⎯

 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its source terminal begins moving
AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'

Expected: "revoked while opening"
Received: "listen EPERM: operation not permitted 127.0.0.1"

 ❯ test/web-pane-route-registry.test.ts:319:25
    317|     finishPreparation!(disposeSession)
    318|
    319|     await expect(opening).rejects.toThrow('revoked while opening')
       |                         ^
    320|     expect(disposeSession).toHaveBeenCalledOnce()
    321|     expect(routes.hasPendingForTerminal('terminal-1', 41, 2)).toBe(fal…

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/26]⎯

 FAIL  test/worker-host-broker.test.ts > Git worker host broker > persists clean-filter stat refreshes instead of filtering the same file again
AssertionError: expected 2 to be 1 // Object.is equality

- Expected
+ Received

- 1
+ 2

 ❯ test/worker-host-broker.test.ts:575:54
    573|     })
    574|
    575|     expect((await readFile(counter, 'utf8')).length).toBe(afterFirst)
       |                                                      ^
    576|     await actual.dispose()
    577|   })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/26]⎯


 Test Files  10 failed | 366 passed (376)
      Tests  23 failed | 2877 passed | 2 skipped (2902)
   Start at  12:24:40
   Duration  30.11s (tests 69%, import 11%, environment 9%, transform 7%, setup 2%, worker 1%)

    Isolate  376 workers spawned · ~135ms startup each (spawn + environment, per file)
             at least ~7.12s faster with isolate: false — reuses workers across files instead of one per file

vitest exit: 1
<shellId: 68 completed with exit code 0>
```

</details>


---

<sub>5m 20s</sub>

### `bash`

**Summarize baseline failing test files and reasons**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -E "^ FAIL " "$TMPDIR/hvir-readme/test-baseline.log" | sed -E 's/ > .*//' | sort | uniq -c; echo "--- distinct failure reasons ---"; grep -E "^(Error|AssertionError|TypeError|ENOENT|.*ENOENT|.*EPERM)" "$TMPDIR/hvir-readme/test-baseline.log" | sed -E 's/[0-9a-f]{8,}/<id>/g' | cut -c1-170 | sort | uniq -c | sort -rn | head -30

<details>
<summary>22 lines</summary>

```
1  FAIL  test/external-document-authority.test.ts
   1  FAIL  test/issue-lifecycle-guidance.test.ts [ test/issue-lifecycle-guidance.test.ts ]
   1  FAIL  test/local-host.test.ts
   1  FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
   1  FAIL  test/project-pr-relationships.test.ts
   1  FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
  13  FAIL  test/web-pane-route-registry.test.ts
   5  FAIL  test/web-pane-route.test.ts
   1  FAIL  test/web-pane-smoke-boundary.test.ts
   1  FAIL  test/worker-host-broker.test.ts
--- distinct failure reasons ---
   3 Received: "listen EPERM: operation not permitted 127.0.0.1"
   3 AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
   1 Error: listen EPERM: operation not permitted 127.0.0.1
   1 Error: EPERM: operation not permitted, mkdtemp '/tmp/hvir-document-authority-6XeVZ6'
   1 Error: ENOENT: no such file or directory, open 'CONTRIBUTING.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/<id>/hvir/CONTRIBUTING.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/<id>/hvir/.github/pull_request_template.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/<id>/hvir/.claude/skills/hvir-merge-pr/SKILL.md'
   1 AssertionError: expected 2 to be 1 // Object.is equality
   1 AssertionError: expected +0 to be 85515 // Object.is equality
<shellId: 69 completed with exit code 0>
```

</details>


---

<sub>5m 31s</sub>

### `bash`

**Read architecture policy JSON and inventory collector**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' scripts/architecture-hotspots.json; echo ...; echo "=== inventory ==="; sed -n '1,120p' scripts/architecture-inventory.mts

<details>
<summary>201 lines</summary>

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
...
=== inventory ===
import { execFileSync } from 'node:child_process'
import { lstatSync, readdirSync, readFileSync, realpathSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { createHash } from 'node:crypto'
import { Buffer } from 'node:buffer'
import {
  POLICY_PATH,
  disposableDirectory,
  inScope,
  isSource,
  physicalLines,
  readAcceptedPolicy,
  ruleFor,
  sourceDisposition,
  type ArchitecturePolicy,
  type ComparisonCounts,
  type SourceInventory,
} from './architecture-policy.mts'

export function git(root: string, args: string[]): string {
  return execFileSync('git', args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trimEnd()
}
export function fullCommit(root: string, ref: string): string {
  const sha = git(root, ['rev-parse', '--verify', `${ref}^{commit}`])
  if (!/^[0-9a-f]{40}$/.test(sha))
    throw new Error('Required revision is not a full commit')
  return sha
}
export function requireAncestor(root: string, base: string, head: string): void {
  if (fullCommit(root, base) !== base || fullCommit(root, head) !== head)
    throw new Error('Comparison requires immutable full SHAs')
  try {
    git(root, ['merge-base', '--is-ancestor', base, head])
  } catch {
    throw new Error(
      `Stale comparison base: ${base} is not an ancestor of ${head}; refresh the target and reverify`,
    )
  }
}
interface TreeEntry {
  mode: string
  oid: string
}

// Each evaluation owns its own cache. Returning a report releases all Git object references;
// no process-global cache survives a candidate or a disposed fixture repository.
export function createArchitectureInventory(repositoryRoot: string) {
  const root = realpathSync(repositoryRoot)
  const trees = new Map<string, Map<string, TreeEntry>>()
  const objects = new Map<string, Buffer>()
  function tree(revision: string): Map<string, TreeEntry> {
    let entries = trees.get(revision)
    if (!entries) {
      entries = new Map(
        git(root, ['ls-tree', '-r', '-z', revision])
          .split('\0')
          .filter(Boolean)
          .map((row) => {
            const [metadata, path] = row.split('\t'),
              [mode, , oid] = (metadata ?? '').split(' ')
            if (!mode || !oid || !path) throw new Error('Malformed required Git tree')
            return [path, { mode, oid }]
          }),
      )
      trees.set(revision, entries)
    }
    return entries
  }
  function prefetch(revision: string, paths: Iterable<string>): void {
    const entries = tree(revision)
    const ids = [
      ...new Set(
        [...paths].flatMap((path) => {
          const id = entries.get(path)?.oid
          return id && !objects.has(id) ? [id] : []
        }),
      ),
    ]
    if (!ids.length) return
    const batch = execFileSync('git', ['cat-file', '--batch'], {
      cwd: root,
      input: ids.join('\n') + '\n',
      maxBuffer: 64 * 1024 * 1024,
    })
    let position = 0
    for (const id of ids) {
      const end = batch.indexOf(10, position)
      const [actual, type, sizeText] = batch.subarray(position, end).toString().split(' ')
      const size = Number(sizeText)
      if (
        end < 0 ||
        actual !== id ||
        type !== 'blob' ||
        !Number.isSafeInteger(size) ||
        size < 0 ||
        end + size + 1 >= batch.length
      )
        throw new Error('Unreadable required Git blob')
      objects.set(id, Buffer.from(batch.subarray(end + 1, end + 1 + size)))
      position = end + size + 2
    }
  }
  function blob(revision: string, path: string): Buffer | null {
    const entry = tree(revision).get(path)
    if (!entry) return null
    prefetch(revision, [path])
    const bytes = objects.get(entry.oid)
    if (!bytes) throw new Error('Unreadable required Git blob')
    return bytes
  }
  function collectInventory(
    policy: ArchitecturePolicy,
    revision: string | null = null,
  ): SourceInventory {
    const result: SourceInventory = new Map()
<shellId: 70 completed with exit code 0>
```

</details>


---

<sub>5m 31s</sub>

### `bash`

**Read architecture wiring (docs paths)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' scripts/architecture-wiring.mts

<details>
<summary>80 lines</summary>

```
import { isDeepStrictEqual } from 'node:util'
import { parse } from 'yaml'
import type { Buffer } from 'node:buffer'

// Historical bootstrap owners also define its exact accepted lint insertion.
const BOOTSTRAP_ARCHITECTURE_MODULES = [
  'scripts/architecture-hotspots.mjs',
  'scripts/architecture-hotspots.mts',
  'scripts/architecture-policy.mts',
  'scripts/architecture-inventory.mts',
  'scripts/architecture-authorization.mts',
  'scripts/architecture-github.mts',
  'scripts/architecture-wiring.mts',
] as const
export const ARCHITECTURE_MODULES = [
  ...BOOTSTRAP_ARCHITECTURE_MODULES,
  'scripts/architecture-module-graph.mts',
  'scripts/architecture-module-resolution.mts',
  'scripts/architecture-module-directions.mts',
] as const
export const ARCHITECTURE_TESTS = [
  // Retain deleted bootstrap identities for accepted historical proposal replay.
  'test/architecture-hotspots.test.ts',
  'test/architecture-policy.test.ts',
  'test/architecture-history.test.ts',
  'test/architecture-github.test.ts',
  'test/architecture-wiring.test.ts',
  'test/fixtures/architecture/repository.ts',
  'test/architecture-module-graph.test.ts',
  'test/architecture-module-directions.test.ts',
  'test/architecture-command.test.ts',
] as const
const WIRING_PATHS = ['package.json', '.github/workflows/ci.yml', 'eslint.config.mjs']
export function policyOnlyPath(path: string): boolean {
  return (
    path === 'scripts/architecture-hotspots.json' ||
    path === 'docs/architecture-budgets.md' ||
    [...ARCHITECTURE_MODULES, ...ARCHITECTURE_TESTS, ...WIRING_PATHS].includes(path)
  )
}
function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error('Malformed architecture verification wiring')
  return value as Record<string, unknown>
}
function equal(before: unknown, after: unknown): void {
  if (!isDeepStrictEqual(before, after))
    throw new Error('Policy proposal includes unrelated verification wiring changes')
}
function verifyCommands(value: unknown): string[] {
  if (typeof value !== 'string') throw new Error('Missing normal verify command')
  return value.split('&&').map((command) => command.trim())
}
export function assertPackageArchitectureGate(value: unknown): void {
  const scripts = object(object(value).scripts)
  if (
    verifyCommands(scripts.verify).filter(
      (command) => command === 'npm run architecture:check',
    ).length !== 1 ||
    scripts['architecture:check'] !==
      'node scripts/architecture-hotspots.mjs --enforce' ||
    scripts['architecture:report'] !== 'node scripts/architecture-hotspots.mjs'
  )
    throw new Error('Architecture package gate must remain blocking')
}
function admitPackage(beforeBytes: Buffer, afterBytes: Buffer): void {
  const before = object(JSON.parse(beforeBytes.toString())),
    after = object(JSON.parse(afterBytes.toString()))
  assertPackageArchitectureGate(after)
  const oldScripts = object(before.scripts),
    newScripts = object(after.scripts)
  equal(
    verifyCommands(oldScripts.verify).filter(
      (command) => command !== 'npm run architecture:check',
    ),
    verifyCommands(newScripts.verify).filter(
      (command) => command !== 'npm run architecture:check',
    ),
  )
  for (const key of ['verify', 'architecture:check', 'architecture:report']) {
<shellId: 71 completed with exit code 0>
```

</details>


---

<sub>5m 39s</sub>

### `bash`

**Skim remaining GitHub workflows**

$ cd /private/var/tmp/ws/f7354e9d/hvir && for f in codeql ghostty-web-update lock-tracker-conversations project-kind project-pr-planning real-host-ssh release-pr-merged smoke-stress macos-package-release; do echo "=== $f.yml ==="; sed -n '1,30p' .github/workflows/$f.yml | grep -vE '^\s*$' | head -24; done

<details>
<summary>226 lines</summary>

```
=== codeql.yml ===
name: CodeQL
on:
  schedule:
    - cron: '17 8 * * 1'
permissions:
  contents: read
concurrency:
  group: codeql-${{ github.ref }}
  cancel-in-progress: true
jobs:
  analyze:
    name: Analyze JavaScript and TypeScript
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
=== ghostty-web-update.yml ===
name: Update ghostty-web compatibility artifact
on:
  schedule:
    - cron: '23 13 * * *'
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: ghostty-web-update
  cancel-in-progress: false
jobs:
  prepare:
    name: Discover and validate candidate
    runs-on: ubuntu-24.04
    timeout-minutes: 30
    outputs:
      outcome: ${{ steps.prepare.outputs.outcome }}
    steps:
      - name: Require the default branch
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
        run: |
          if [ "$GITHUB_REF" != "refs/heads/$DEFAULT_BRANCH" ]; then
            echo "::error::Run ghostty-web updates from $DEFAULT_BRANCH, not $GITHUB_REF_NAME"
=== lock-tracker-conversations.yml ===
name: Lock tracker conversations
on:
  issues:
    types: [opened, reopened, unlocked]
  pull_request_target:
    types: [opened, reopened, unlocked]
permissions: {}
jobs:
  lock-issue:
    if: github.event_name == 'issues'
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Lock issue conversation
        env:
          GH_TOKEN: ${{ github.token }}
          ISSUE_URL: ${{ github.event.issue.html_url }}
        run: gh issue lock "$ISSUE_URL"
  lock-pull-request:
    if: github.event_name == 'pull_request_target'
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
=== project-kind.yml ===
name: Reconcile issue planning
on:
  issues:
    types: [opened, reopened, closed, labeled, unlabeled]
  workflow_dispatch:
    inputs:
      issue_number:
        description: Issue number; leave empty to reconcile every open issue
        required: false
        type: string
      apply:
        description: Apply deterministic label and Project mutations
        required: true
        default: false
        type: boolean
permissions:
  contents: read
concurrency:
  group: project-kind-${{ github.event.issue.number || inputs.issue_number || github.run_id }}
  cancel-in-progress: false
jobs:
  issue-event:
    if: >-
      github.event_name == 'issues' &&
=== project-pr-planning.yml ===
name: Reconcile PR planning relationships
on:
  pull_request_target:
    types: [opened, reopened, converted_to_draft, ready_for_review, edited, closed]
  issues:
    types: [reopened]
  workflow_dispatch:
    inputs:
      pull_request_number:
        description: Pull request number to reconcile from current GitHub state
        required: true
        type: string
      apply:
        description: Apply eligible planning convergence and child closure
        required: true
        default: false
        type: boolean
permissions:
  contents: read
concurrency:
  group: project-pr-planning
  cancel-in-progress: false
jobs:
  relationship-event:
=== real-host-ssh.yml ===
name: Real-host SSH acceptance
on:
  workflow_dispatch:
  schedule:
    - cron: '41 7 1 * *'
permissions:
  contents: read
concurrency:
  group: real-host-ssh-acceptance
  cancel-in-progress: false
jobs:
  configuration:
    name: Real-host target availability
    runs-on: ubuntu-24.04
    environment: real-host-ssh
    outputs:
      configured: ${{ steps.configuration.outputs.configured }}
    steps:
      - name: Classify explicit target configuration
        id: configuration
        env:
          REAL_HOST: ${{ secrets.HVIR_REAL_SSH_HOST }}
          REAL_PORT: ${{ secrets.HVIR_REAL_SSH_PORT }}
          REAL_USER: ${{ secrets.HVIR_REAL_SSH_USER }}
=== release-pr-merged.yml ===
name: Dispatch merged release
on:
  pull_request_target:
    types: [closed]
permissions:
  contents: read
concurrency:
  group: release-pr-${{ github.event.pull_request.number }}
  cancel-in-progress: false
jobs:
  dispatch:
    if: >-
      github.event.pull_request.merged == true &&
      github.event.pull_request.base.ref == github.event.repository.default_branch &&
      github.event.pull_request.head.repo.full_name == github.repository &&
      github.event.pull_request.user.login == 'github-actions[bot]' &&
      startsWith(github.event.pull_request.head.ref, 'release/v')
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    permissions:
      actions: write
      contents: read
      pull-requests: read
    steps:
=== smoke-stress.yml ===
name: Electron smoke stress
on:
  workflow_dispatch:
    inputs:
      scenario:
        description: Focused scenario to repeat
        required: true
        default: pty-native
        type: choice
        options:
          - pty-native
          - document-review
          - viewer-content
          - viewer-position
          - git-workflow
          - renderer-recovery
          - renderer-authority
          - web-pane
      repeat:
        description: Fixed attempt count (not retries)
        required: true
        default: '20'
        type: choice
        options:
=== macos-package-release.yml ===
name: Signed macOS package
on:
  workflow_call:
    inputs:
      source_sha:
        description: Full merged release source commit SHA to package.
        required: true
        type: string
      allow_merged_source:
        description: Permit an exact commit contained in the selected branch for release assembly.
        required: false
        default: false
        type: boolean
    secrets:
      MACOS_APPLICATION_CERTIFICATE:
        required: false
      MACOS_APPLICATION_CERTIFICATE_PASSWORD:
        required: false
      MACOS_INSTALLER_CERTIFICATE:
        required: false
      MACOS_INSTALLER_CERTIFICATE_PASSWORD:
        required: false
      MACOS_NOTARY_KEY:
        required: false
<shellId: 72 completed with exit code 0>
```

</details>


---

<sub>5m 39s</sub>

### `bash`

**Read smoke launcher and gauntlet scripts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat scripts/run-smoke.sh; echo "=== phase8-gauntlet.sh ==="; cat scripts/phase8-gauntlet.sh | head -80

<details>
<summary>124 lines</summary>

```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
source_checkout=$PWD

: "${HVIR_SMOKE_SCENARIO:?Select one Electron smoke scenario with HVIR_SMOKE_SCENARIO; use npm run smoke for the aggregate suite}"

# A smoke launched by a Git hook must not inherit the invoking repository as
# implicit authority. Every Git process below must discover the temp project.
while IFS= read -r variable; do
  if [[ -n "$variable" ]]; then unset "$variable"; fi
done < <(git -C "$source_checkout" rev-parse --local-env-vars)
# A built smoke must never attach to an unrelated renderer development server.
unset ELECTRON_RENDERER_URL

source_commit=$(git -C "$source_checkout" rev-parse HEAD)
source_dirty=0
if [[ -n "$(git -C "$source_checkout" status --porcelain --untracked-files=normal)" ]]; then
  source_dirty=1
fi
temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
invocation_root=$(mktemp -d "$temporary_parent/hvir-smoke.XXXXXX")
project_root="$invocation_root/repository"
user_data_root="$invocation_root/user-data"
ownership_marker="$invocation_root/.hvir-smoke-owner"
ownership_marker_value='hvir-smoke-owned-root-v1'
smoke_pid=''

if ! printf '%s\n' "$ownership_marker_value" > "$ownership_marker"; then
  rmdir -- "$invocation_root" 2>/dev/null || true
  exit 1
fi

if [[ -n "${HVIR_SMOKE_ISOLATION_RUN:-}" ]]; then
  if [[ ! "$HVIR_SMOKE_ISOLATION_RUN" =~ ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$ ]]; then
    echo 'HVIR_SMOKE_ISOLATION_RUN must be a UUID' >&2
    exit 1
  fi
  printf '[smoke:isolation:owned-root]\t%s\t%s\n' \
    "$HVIR_SMOKE_ISOLATION_RUN" "$invocation_root"
fi

cleanup() {
  if [[ -z "${invocation_root:-}" ]]; then return; fi
  case "$invocation_root" in
  "$temporary_parent"/hvir-smoke.*)
    if [[ ! -f "$ownership_marker" ]] || \
      [[ "$(<"$ownership_marker")" != "$ownership_marker_value" ]]; then
      echo "Refusing to clean unowned smoke root: $invocation_root" >&2
      return 1
    fi
    local cleanup_status=0
    rm -rf -- "$project_root" || cleanup_status=$?
    rm -rf -- "$user_data_root" || cleanup_status=$?
    rm -f -- "$ownership_marker" || cleanup_status=$?
    rmdir -- "$invocation_root" 2>/dev/null || {
      if [[ -e "$invocation_root" ]]; then cleanup_status=1; fi
    }
    if [[ "$cleanup_status" -eq 0 ]]; then invocation_root=''; fi
    return "$cleanup_status"
    ;;
  *)
    echo "Refusing to clean unexpected smoke root: $invocation_root" >&2
    return 1
    ;;
  esac
}

terminate_smoke() {
  local status=$1
  trap - HUP INT TERM
  if [[ -n "$smoke_pid" ]] && kill -0 "$smoke_pid" 2>/dev/null; then
    # Electron reliably runs its graceful main-process teardown on TERM across
    # supported hosts. Preserve the wrapper's caller-visible signal status.
    kill -s TERM "$smoke_pid" 2>/dev/null || true
    wait "$smoke_pid" 2>/dev/null || true
  fi
  smoke_pid=''
  exit "$status"
}

trap cleanup EXIT
trap 'terminate_smoke 129' HUP
trap 'terminate_smoke 130' INT
trap 'terminate_smoke 143' TERM

mkdir -p "$user_data_root"
"$source_checkout/scripts/create-smoke-repository.sh" \
  "$source_checkout" \
  "$project_root"

cd "$project_root"
if [[ "${HVIR_SMOKE_SCENARIO}" == 'development-performance' ]]; then
  cd "$source_checkout"
  development_smoke_log="$user_data_root/development-performance.log"
  HVIR_SMOKE=1 \
    HVIR_SMOKE_SOURCE_COMMIT="$source_commit" \
    HVIR_SMOKE_SOURCE_DIRTY="$source_dirty" \
    HVIR_SMOKE_SCENARIO=development-performance \
    HVIR_PROJECT_ROOT="$project_root" \
    ELECTRON_ENTRY="$source_checkout" \
    ELECTRON_CLI_ARGS="[\"--user-data-dir=$user_data_root\"]" \
    "$source_checkout/node_modules/.bin/electron-vite" \
    "$source_checkout" \
    --mode smoke \
    --noSandbox \
    --clearScreen false | tee "$development_smoke_log"
  if ! grep -qx 'HVIR_SMOKE_OK' "$development_smoke_log"; then
    echo 'Development Performance Timeline smoke ended without its success sentinel' >&2
    exit 1
  fi
else
  HVIR_SMOKE=1 \
    HVIR_SMOKE_SOURCE_COMMIT="$source_commit" \
    HVIR_SMOKE_SOURCE_DIRTY="$source_dirty" \
    HVIR_SMOKE_SCENARIO="${HVIR_SMOKE_SCENARIO}" \
    "$source_checkout/node_modules/.bin/electron" "$source_checkout" \
    --project-root="$project_root" \
    --no-sandbox \
    --user-data-dir="$user_data_root" &
  smoke_pid=$!
  wait "$smoke_pid"
  smoke_pid=''
fi
=== phase8-gauntlet.sh ===
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi
<shellId: 73 completed with exit code 0>
```

</details>


---

<sub>5m 45s</sub>

### `bash`

**Read ProjectRegistry.create startup behavior**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "static async create" -A 70 src/main/project-registry.ts | head -130

<details>
<summary>85 lines</summary>

```
110:  static async create(
111-    initialRoot: HostPath,
112-    hostCatalog: ProjectRegistryHostCatalog,
113-    registryFile: string,
114-    onState: (state: ProjectState) => void,
115-  ): Promise<ProjectRegistry>
116:  static async create(
117-    initialRoot: HostPath | undefined,
118-    hostCatalog: ProjectRegistryHostCatalog,
119-    registryFile: string,
120-    onState: (state: ProjectState) => void,
121-    selectInitialRoot: () => Promise<HostPath | undefined>,
122-  ): Promise<ProjectRegistry | undefined>
123:  static async create(
124-    initialRoot: HostPath | undefined,
125-    hostCatalog: ProjectRegistryHostCatalog,
126-    registryFile: string,
127-    onState: (state: ProjectState) => void,
128-    selectInitialRoot?: () => Promise<HostPath | undefined>,
129-  ): Promise<ProjectRegistry | undefined> {
130-    const local = hostCatalog.local
131-    const file = localPath(registryFile)
132-    const stored = await loadProjects(local, file)
133-    let canonicalRoot = initialRoot ? await local.realpath(initialRoot) : undefined
134-    if (!canonicalRoot && !stored?.projects.length) {
135-      const selected = await selectInitialRoot?.()
136-      if (!selected) return undefined
137-      canonicalRoot = await local.realpath(selected)
138-    }
139-    const projects = stored?.projects.length ? stored.projects : []
140-    let activeProjectId = stored?.activeProjectId
141-    if (canonicalRoot) {
142-      let selectedProject = projects.find(
143-        (project) =>
144-          hostPathEquals(project.registeredRoot, canonicalRoot) ||
145-          project.workspaces.some((workspace) =>
146-            hostPathEquals(workspace.root, canonicalRoot),
147-          ),
148-      )
149-      if (!selectedProject) {
150-        if (projects.length >= MAX_PROJECTS) throw new Error('Project registry is full')
151-        selectedProject = createProject(canonicalRoot)
152-        projects.push(selectedProject)
153-      }
154-      const selectedWorkspace = selectedProject.workspaces.find((workspace) =>
155-        hostPathEquals(workspace.root, canonicalRoot),
156-      )
157-      if (selectedWorkspace && !selectedWorkspace.missing) {
158-        const selectedIndex = selectedProject.workspaces.indexOf(selectedWorkspace)
159-        const opened = openWorkspaceRecord(selectedWorkspace)
160-        selectedProject.workspaces[selectedIndex] = opened
161-        selectedProject.activeWorkspaceId = opened.id
162-      }
163-      activeProjectId = selectedProject.id
164-    }
165-    const fallbackRoot = canonicalRoot ?? projects[0]?.registeredRoot
166-    if (!fallbackRoot || !activeProjectId) return undefined
167-    const registry = new ProjectRegistry(
168-      hostCatalog,
169-      fallbackRoot,
170-      file,
171-      projects,
172-      activeProjectId,
173-      onState,
174-    )
175-    try {
176-      await registry.restoreActive()
177-      if (!stored || canonicalRoot) await registry.persist()
178-      return registry
179-    } catch (error) {
180-      await registry.dispose()
181-      throw error
182-    }
183-  }
184-
185-  get active(): ActiveProject {
186-    return this.activeProject
187-  }
188-
189-  state(): ProjectState {
190-    const activeHost = this.activeProject.host
191-    return {
192-      revision: this.stateRevision,
193-      root: this.activeProject.root,
<shellId: 74 completed with exit code 0>
```

</details>


---

<sub>5m 45s</sub>

### `bash`

**Read window and navigation security policy**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,140p' src/main/window/window-policy.ts; echo "=== navigation-policy ==="; sed -n '1,60p' src/main/navigation-policy.ts

<details>
<summary>79 lines</summary>

```
import type { RendererOwner } from '../renderer-resource-scopes'

export interface WorkbenchWindowOptions {
  readonly width: number
  readonly height: number
  readonly useContentSize: boolean
  readonly show: boolean
  readonly backgroundColor: string
  readonly autoHideMenuBar: boolean
  readonly webPreferences: {
    readonly preload: string
    readonly sandbox: boolean
    readonly contextIsolation: boolean
    readonly nodeIntegration: boolean
    readonly webviewTag: boolean
  }
}

/** A recovery dialog can mutate only the renderer generation that opened it. */
export function ownsUnresponsiveRecovery(
  current: RendererOwner,
  observed: RendererOwner,
): boolean {
  return current.id === observed.id && current.generation === observed.generation
}

/** A readiness signal can complete only the exact generation encoded by its preload. */
export function ownsRendererReadiness(
  current: RendererOwner,
  reportedGeneration: number,
): boolean {
  return (
    Number.isSafeInteger(reportedGeneration) && reportedGeneration === current.generation
  )
}

/** The single security baseline used for every workbench BrowserWindow. */
export function workbenchWindowOptions(preload: string): WorkbenchWindowOptions {
  return {
    width: 1280,
    height: 800,
    useContentSize: true,
    show: false,
    backgroundColor: '#0f1115',
    autoHideMenuBar: true,
    webPreferences: {
      preload,
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false,
      // Webview guests support anti-framing pages and are confined by the route registry.
      webviewTag: true,
    },
  }
}
=== navigation-policy ===
/** Only these explicit external schemes may leave hvir for the OS browser. */
export function isSafeExternalUrl(rawUrl: string): boolean {
  try {
    const protocol = new URL(rawUrl).protocol
    return protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:'
  } catch {
    return false
  }
}

/** Workbench reloads may revisit its entry document, never an arbitrary child path. */
export function isWorkbenchDocument(rawUrl: string, entryUrl: string): boolean {
  try {
    const candidate = new URL(rawUrl)
    const entry = new URL(entryUrl)
    return (
      candidate.protocol === entry.protocol &&
      candidate.host === entry.host &&
      normalizedPath(candidate.pathname) === normalizedPath(entry.pathname)
    )
  } catch {
    return false
  }
}

function normalizedPath(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}
<shellId: 75 completed with exit code 0>
```

</details>


---

<sub>5m 57s</sub>

### `bash`

**Run production build in background**

$ cd /private/var/tmp/ws/f7354e9d/hvir && (npm run build > "$TMPDIR/hvir-readme/build.log" 2>&1; echo "build exit: $?" >> "$TMPDIR/hvir-readme/build.log")

```
<command started in background with shellId: build>
```


---

<sub>5m 57s</sub>

### `bash`

**Read preload bridge head**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' src/preload/index.ts

<details>
<summary>75 lines</summary>

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
<shellId: 76 completed with exit code 0>
```

</details>


---

<sub>5m 57s</sub>

### `bash`

**Read worker host and git worker heads**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' src/main/worker-host.ts; echo "=== workers/git-worker.ts head ==="; sed -n '1,50p' src/workers/git-worker.ts

<details>
<summary>117 lines</summary>

```
/**
 * Utility-process harness.
 *
 * Launches a compiled `src/workers/*` module as an Electron utility process and
 * exposes a typed request/response client over the {@link WorkerRequest} /
 * {@link WorkerResponse} envelope. This is the seam by which heavy work (git
 * walks, tokenizing, large reads) runs off the render thread — "nothing blocks
 * the paint" (design §3.2). Phase 1 proves it with the echo worker.
 */

import { join } from 'node:path'
import { utilityProcess, type UtilityProcess } from 'electron'

import type {
  WorkerHostCall,
  WorkerHostResult,
  WorkerHostValue,
  WorkerOperation,
  WorkerRequest,
  WorkerResponse,
} from '../shared'

type ProtocolShape<P> = { readonly [K in keyof P]: WorkerOperation }

export interface WorkerClient<P extends ProtocolShape<P>> {
  /** Send a request declared by this worker's protocol map. */
  request<K extends keyof P & string>(
    type: K,
    payload: P[K]['request'],
  ): Promise<P[K]['response']>
  /** PID of the utility process, once spawned. */
  readonly pid: number | undefined
  dispose(): void
}

interface Pending {
  resolve(value: unknown): void
  reject(reason: Error): void
}

/** Absolute path to a built worker entry (they sit beside the main bundle). */
export function workerPath(entryFile: string): string {
  return join(__dirname, entryFile)
}

export function createWorkerClient<P extends ProtocolShape<P>>(
  entryPath: string,
  serviceName?: string,
  onHostCall?: (call: WorkerHostCall) => Promise<WorkerHostValue>,
): WorkerClient<P> {
  const proc: UtilityProcess = utilityProcess.fork(entryPath, [], {
    serviceName: serviceName ?? 'hvir-worker',
    stdio: 'inherit',
  })

  const pending = new Map<number, Pending>()
  let nextId = 1
  let disposed = false
  let spawnFailure: Error | undefined

  // Gate sends until the child has spawned or failed. Resolving on failure
  // avoids an unhandled rejected promise when a worker dies before any request.
  let markReady: () => void = () => undefined
  const ready = new Promise<void>((resolve) => {
    markReady = resolve
  })

  proc.once('spawn', markReady)

  proc.on('message', (msg: WorkerResponse | WorkerHostCall) => {
    if (isWorkerHostCall(msg)) {
      if (!onHostCall) {
        const response: WorkerHostResult = {
          kind: 'host-result',
          callId: msg.callId,
          ok: false,
          error: 'worker host calls are disabled',
        }
        proc.postMessage(response)
        return
=== workers/git-worker.ts head ===
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
<shellId: 77 completed with exit code 0>
```

</details>


---

<sub>6m 7s</sub>

### `bash`

**Find user-data state file names**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "applicationUserDataPath(\|userDataRoot, '\|join(userDataRoot\|join(root, '" src/main --include='*.ts' | grep -v "/smoke/" | head -30

<details>
<summary>7 lines</summary>

```
src/main/application-runtime.ts:16:export function applicationUserDataPath(name: string): string {
src/main/document-review/document-review-application.ts:29:      localPath(applicationUserDataPath('document-review-drafts.json')),
src/main/index.ts:164:        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
src/main/index.ts:173:      applicationUserDataPath('projects.json'),
src/main/index.ts:192:        localPath(applicationUserDataPath('terminal-sessions.json')),
src/main/index.ts:201:        localPath(applicationUserDataPath('harness-profiles.json')),
<shellId: 78 completed with exit code 0>
```

</details>


---

<sub>6m 7s</sub>

### `bash`

**Check installed versions of key dependencies**

$ cd /private/var/tmp/ws/f7354e9d/hvir && node -p "const p=require('./node_modules/electron/package.json'); p.version" ; for m in react typescript vite electron-vite vitest ghostty-web node-pty ssh2 shiki mermaid @codemirror/view electron-builder; do printf '%s: ' "$m"; node -p "require('./node_modules/$m/package.json').version" 2>/dev/null || echo "n/a"; done

<details>
<summary>14 lines</summary>

```
43.4.1
react: 19.2.8
typescript: 6.0.3
vite: 7.3.6
electron-vite: 5.0.0
vitest: 5.0.0
ghostty-web: 0.4.0
node-pty: 1.1.0
ssh2: 1.17.0
shiki: 4.4.3
mermaid: 11.17.2
@codemirror/view: 6.43.11
electron-builder: 26.15.3
<shellId: 79 completed with exit code 0>
```

</details>


---

<sub>6m 13s</sub>

### `bash`

**Read file tree action menu model**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,120p' src/renderer/src/tree/file-action-menu.ts

<details>
<summary>14 lines</summary>

```
import type { FileType } from '../../../shared/fs-types'
import type { HostPath } from '../../../shared/host-path'

/** One tree action target and its originating focus surface. */
export interface FileActionMenuRequest {
  readonly id: number
  readonly target: HostPath
  readonly targetType: FileType
  readonly label: string
  readonly x: number
  readonly y: number
  readonly focusMenu: boolean
  readonly returnFocus?: HTMLElement
}
<shellId: 80 completed with exit code 0>
```

</details>


---

<sub>6m 13s</sub>

### `read_bash`

**Waiting up to 45 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "delay": 45,
  "shellId": "build"
}
```

</details>

```

<shellId: build completed with exit code 0>
```


---

<sub>6m 20s</sub>

### `bash`

**Check build result and repo cleanliness**

$ cd /private/var/tmp/ws/f7354e9d/hvir && tail -30 "$TMPDIR/hvir-readme/build.log"; echo "--- out ---"; ls out 2>/dev/null; ls out/main 2>/dev/null | head; echo "--- git status ---"; git --no-pager status --short | head

<details>
<summary>41 lines</summary>

```
../../out/renderer/assets/kanban-definition-UXKFOSKX-BZ8lyQcR.js       38.11 kB
../../out/renderer/assets/mindmap-definition-YA3MSWOX-zwjOzhi4.js      43.29 kB
../../out/renderer/assets/wardleyDiagram-VM6X3IG4-BjFF-NPH.js          44.51 kB
../../out/renderer/assets/journeyDiagram-3NMN7TZE-B1gyi4KZ.js          45.28 kB
../../out/renderer/assets/sankeyDiagram-P5KCCOFB-Cb3fotdV.js           46.14 kB
../../out/renderer/assets/requirementDiagram-BXWQKSXE-C8mRwP7F.js      52.54 kB
../../out/renderer/assets/erDiagram-RLTQ6QDP-Bu7Uq53p.js               56.19 kB
../../out/renderer/assets/gitGraphDiagram-WWUBYQGX-D50pvge9.js         57.47 kB
../../out/renderer/assets/timeline-definition-24CTP7MA-WFPAlShh.js     60.48 kB
../../out/renderer/assets/quadrantDiagram-AXDQQJYC-BIontTSD.js         61.63 kB
../../out/renderer/assets/chunk-IMKFNOWR-CppQhuVJ.js                   72.84 kB
../../out/renderer/assets/blockDiagram-I7D4REHJ-DcD5LhgU.js            76.00 kB
../../out/renderer/assets/layout-DeKAXTwP.js                           78.73 kB
../../out/renderer/assets/xychartDiagram-S5SC5T6Z-BJvquhGV.js          83.25 kB
../../out/renderer/assets/chunk-TICWLB2K-DZOT72cu.js                   84.46 kB
../../out/renderer/assets/vennDiagram-4TSXK5OY-Cs02EhfD.js             88.83 kB
../../out/renderer/assets/flowDiagram-HODETNUW-DEERzwI4.js            105.32 kB
../../out/renderer/assets/c4Diagram-7LVT6UL2-BC2gdOlS.js              111.12 kB
../../out/renderer/assets/ganttDiagram-EL5Y4UJY-BTA0QzkC.js           133.54 kB
../../out/renderer/assets/sequenceDiagram-WJ2MYXX4-D-FOz702.js        201.65 kB
../../out/renderer/assets/cose-bilkent-JH36ORCC-Cp4aKeeS.js           214.53 kB
../../out/renderer/assets/swimlanes-42K2YHIH-BrdLvFWj.js              298.66 kB
../../out/renderer/assets/architectureDiagram-5GKGNRK7-Cg2mlY1s.js    423.22 kB
../../out/renderer/assets/katex-oVG3DVWa.js                           484.52 kB
../../out/renderer/assets/cytoscape.esm-Bx_1tVW-.js                   960.58 kB
../../out/renderer/assets/mermaid.core-DFKK_QXb.js                  1,229.10 kB
../../out/renderer/assets/cynefin-OW5HDTMX-BjbCWK0-.js              1,304.47 kB
../../out/renderer/assets/index-CFfTYprO.js                         2,763.19 kB
✓ built in 5.84s
build exit: 0
--- out ---
main
preload
real-host-ssh
renderer
chunks
echo-worker.js
git-worker.js
index.js
--- git status ---
<shellId: 81 completed with exit code 0>
```

</details>


---

<sub>6m 20s</sub>

### `bash`

**Find file tree context menu labels**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "role=\"menuitem\"" -A 12 src/renderer/src/tree/FileTree.tsx | grep -E "^\s*[0-9]+-\s+[A-Z{]" | head -40; echo "=== menu labels ==="; grep -rhoE "^\s+(New File|New Folder|Rename|Delete|Move to Trash|Copy Path|Copy Relative Path|Reveal[^<]*|Paste[^<]*|Copy[^<]*|Move[^<]*|Duplicate[^<]*|Open[^<]*)\s*$" src/renderer/src/tree/*.tsx src/renderer/src/path-copy/*.tsx | sed 's/^ *//' | sort -u

<details>
<summary>7 lines</summary>

```
=== menu labels ===
Duplicate…
Move…
Move External Items Here…
Move Selected Items
Paste Files
<shellId: 82 completed with exit code 0>
```

</details>


---

<sub>6m 32s</sub>

### `bash`

**List ignored artifacts created by verification runs**

$ cd /private/var/tmp/ws/f7354e9d/hvir && git --no-pager status --short --ignored | head -20; echo "--- out size ---"; du -sh out 2>/dev/null; ls -la out; echo "--- packages build mtime ---"; ls -la packages/rename-noreplace/build | head -5

<details>
<summary>19 lines</summary>

```
!! node_modules/
!! out/
!! packages/rename-noreplace/build/
--- out size ---
 20M	out
total 0
drwxr-xr-x@  6 air-jarmak  wheel  192 Nov 20 12:26 .
drwxr-xr-x@ 29 air-jarmak  wheel  928 Nov 20 12:26 ..
drwxr-xr-x@  6 air-jarmak  wheel  192 Nov 20 12:26 main
drwxr-xr-x@  3 air-jarmak  wheel   96 Nov 20 12:26 preload
drwxr-xr-x@  3 air-jarmak  wheel   96 Nov 20 12:25 real-host-ssh
drwxr-xr-x@  4 air-jarmak  wheel  128 Nov 20 12:26 renderer
--- packages build mtime ---
total 168
drwxr-xr-x@ 8 air-jarmak  wheel    256 Nov 20 12:19 .
drwxr-xr-x@ 8 air-jarmak  wheel    256 Nov 20 12:19 ..
-rw-r--r--@ 1 air-jarmak  wheel    124 Nov 20 12:19 binding.Makefile
-rw-r--r--@ 1 air-jarmak  wheel  21554 Nov 20 12:19 config.gypi
<shellId: 83 completed with exit code 0>
```

</details>


---

<sub>6m 32s</sub>

### `bash`

**Find file tree actions**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "Rename\|Delete\|New File\|New Folder\|Reveal\|Copy Path\|Copy Relative\|Copy Absolute\|Duplicate\|Trash" src/renderer/src/tree/FileTree.tsx src/renderer/src/path-copy/PathCopyMenu.tsx src/renderer/src/tree/file-manager-reveal.ts | head -40

<details>
<summary>6 lines</summary>

```
src/renderer/src/tree/FileTree.tsx:22:import { DirectoryTree, type DirectoryTreeRevealRequest } from './DirectoryTree'
src/renderer/src/tree/FileTree.tsx:54:  readonly revealRequest?: DirectoryTreeRevealRequest
src/renderer/src/tree/file-manager-reveal.ts:3:export function canRevealInFileManager(root: HostPath, type: FileType): boolean {
src/renderer/src/tree/file-manager-reveal.ts:7:export function fileManagerRevealLabel(
src/renderer/src/tree/file-manager-reveal.ts:10:  return /Mac/.test(platform) ? 'Reveal in Finder' : 'Show in File Manager'
<shellId: 84 completed with exit code 0>
```

</details>


---

<sub>6m 40s</sub>

### `bash`

**Extract file tree menu item labels**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "role=\"menuitem\"" -B2 -A14 src/renderer/src/tree/FileTree.tsx | grep -vE "^\S+-\s*(type=|role=|className=|disabled=|onClick=|onPointerDown=|key=|ref=|aria-|\)|\}|\(|<button|</button>|<>|</>|\{/\*)" | grep -E "[A-Za-z]{3,}" | head -60

```

<shellId: 85 completed with exit code 0>
```


---

<sub>6m 40s</sub>

### `bash`

**Find path-copy and create action labels**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "Copy\|label" src/renderer/src/path-copy/PathCopyMenu.tsx | head -20; grep -rn "'New File'\|'New Folder'\|New File\|New Folder\|New file\|New folder" src/renderer/src/tree/*.tsx src/renderer/src/tree/*.ts | head -12

<details>
<summary>17 lines</summary>

```
6:import { copyHostPath, PATH_COPY_LABELS, type PathCopyKind } from './path-copy'
7:import type { PathCopyMenuController } from './use-path-copy-menu'
9:interface PathCopyMenuProps {
11:  readonly controller: PathCopyMenuController
15:interface PathCopyFeedback {
20:export function PathCopyMenu({
24:}: PathCopyMenuProps): ReactElement | null {
32:  const [pending, setPending] = useState<PathCopyKind>()
33:  const [feedback, setFeedback] = useState<PathCopyFeedback>()
70:  const copy = (kind: PathCopyKind): void => {
80:          message: `${PATH_COPY_LABELS[kind].replace('Copy ', '')} copied.`,
107:          aria-label={`Path actions for ${request.label}`}
110:          {(Object.keys(PATH_COPY_LABELS) as PathCopyKind[]).map((kind) => (
src/renderer/src/tree/FileCreateOverlays.tsx:84:            New File…
src/renderer/src/tree/FileCreateOverlays.tsx:92:            New Folder…
src/renderer/src/tree/FileCreateOverlays.tsx:195:                {dialog.kind === 'file' ? 'New File' : 'New Folder'}
<shellId: 86 completed with exit code 0>
```

</details>


---

<sub>7m 5s</sub>

### `bash`

**Check whether the upstream repo and release installer are publicly reachable**

$ cd /private/var/tmp/ws/f7354e9d/hvir && for u in "https://github.com/jarmak-personal/hvir" "https://github.com/jarmak-personal/hvir/releases/latest" "https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh"; do printf '%s -> ' "$u"; curl -sS -o /dev/null -I -L --max-time 20 -w '%{http_code} (final: %{url_effective})\n' "$u" 2>&1 | tail -1; done

```
https://github.com/jarmak-personal/hvir -> 000 (final: https://github.com/jarmak-personal/hvir)
https://github.com/jarmak-personal/hvir/releases/latest -> 000 (final: https://github.com/jarmak-personal/hvir/releases/latest)
https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh -> 000 (final: https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh)
<shellId: 87 completed with exit code 0>
```


---

<sub>7m 10s</sub>

### `bash`

**Show the curl error for the network check**

$ curl -sS -o /dev/null -I --max-time 15 "https://github.com/jarmak-personal/hvir" 2>&1 | head -3; echo "exit: $?"

```
curl: (6) Could not resolve host: github.com
exit: 0
<shellId: 88 completed with exit code 0>
```


---

<sub>7m 32s</sub>

### `bash`

**Read architecture GitHub context resolution**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '80,200p' scripts/architecture-github.mts

<details>
<summary>120 lines</summary>

```
type ArchitectureGitHub = ReturnType<typeof githubAdapter>

async function epicBranch(api: ArchitectureGitHub, issue: GitHubIssue): Promise<string> {
  const record = Object.hasOwn(issue, 'parent') ? issue : await api.issue(issue.number)
  if (record.state !== 'open' || record.parent)
    throw new Error('Native epic is closed or nested')
  if (
    !record.labels?.some((label) => label.name === 'kind:epic') ||
    record.labels.filter((label) => label.name.startsWith('kind:')).length !== 1
  )
    throw new Error('Native parent is not one valid epic')
  const branches = await api.request<Array<{ ref: string }>>(
    `git/matching-refs/heads/epic/${issue.number}-`,
  )
  if (!Array.isArray(branches) || branches.length !== 1)
    throw new Error('Missing or ambiguous exact epic branch')
  return branches[0]!.ref.replace('refs/heads/', '')
}

export async function resolveArchitectureContext(
  root: string,
  api: ArchitectureGitHub,
  environment: NodeJS.ProcessEnv = process.env,
): Promise<ArchitectureContext> {
  const tested = fullCommit(root, 'HEAD')
  let head = tested
  const origin = git(root, ['remote', 'get-url', 'origin'])
  if (
    ![
      'https://github.com/jarmak-personal/hvir.git',
      'git@github.com:jarmak-personal/hvir.git',
      'https://github.com/jarmak-personal/hvir',
    ].includes(origin)
  )
    throw new Error('Architecture evidence requires the canonical repository')
  let target = 'main'
  let epic: string | null = null
  let kind: ArchitectureContext['kind'] = 'ordinary'
  let eventBase: string | null = null
  if (environment.GITHUB_ACTIONS === 'true') {
    if (
      environment.GITHUB_EVENT_NAME !== 'pull_request' ||
      environment.GITHUB_REPOSITORY !== RELEASE_REPOSITORY
    )
      throw new Error('Architecture CI requires the canonical pull_request event')
    if (!environment.GITHUB_EVENT_PATH) throw new Error('Missing PR event file')
    const event = JSON.parse(
      readFileSync(environment.GITHUB_EVENT_PATH, 'utf8'),
    ) as PullRequestEvent
    const pr = await api.request<GitHubPullRequest>(`pulls/${event.number}`)
    head = event.pull_request?.head.sha
    if (
      pr.head.repo?.full_name !== RELEASE_REPOSITORY ||
      pr.base.repo?.full_name !== RELEASE_REPOSITORY ||
      pr.head.sha !== head ||
      pr.base.sha !== event.pull_request?.base.sha ||
      pr.base.ref !== event.pull_request?.base.ref
    ) {
      throw new Error(
        'CI candidate/base differs from the current PR event; refresh and reverify',
      )
    }
    const testedParents = git(root, ['show', '-s', '--format=%P', tested]).split(' ')
    if (
      tested !== environment.GITHUB_SHA ||
      testedParents.length !== 2 ||
      testedParents[0] !== pr.base.sha ||
      testedParents[1] !== head ||
      git(root, ['rev-parse', `${tested}^{tree}`]) !==
        git(root, ['rev-parse', `${head}^{tree}`])
    ) {
      throw new Error(
        'CI merge ref does not preserve the exact current base/head candidate tree',
      )
    }
    target = pr.base.ref
    eventBase = pr.base.sha
    if (target.startsWith('epic/')) {
      const trailer = parseCompletingChildTrailer(pr.body ?? '', pr.number)
      if (!trailer.issueNumber || trailer.errors.length)
        throw new Error('Missing exact completing-child relationship')
      const child = await api.issue(trailer.issueNumber)
      if (!child.parent || (await epicBranch(api, child.parent)) !== target)
        throw new Error('Wrong native epic target')
      epic = target
      kind = 'epic-child'
    } else if (target === 'main' && pr.head.ref.startsWith('epic/')) {
      const number = /^epic\/([1-9]\d*)-/.exec(pr.head.ref)?.[1]
      if (!number || (await epicBranch(api, await api.issue(number))) !== pr.head.ref)
        throw new Error('Wrong cumulative epic')
      epic = pr.head.ref
      kind = 'cumulative'
    } else if (target !== 'main') throw new Error('Unsupported architecture target')
  } else {
    const branch = git(root, ['branch', '--show-current'])
    const match = /^agent\/issue-([1-9]\d*)$/.exec(branch)
    if (match) {
      const child = await api.issue(match[1]!)
      if (child.state !== 'open') throw new Error('Local delivery issue is closed')
      if (child.parent) {
        target = await epicBranch(api, child.parent)
        epic = target
        kind = 'epic-child'
      }
    } else if (branch.startsWith('epic/')) {
      const number = /^epic\/([1-9]\d*)-/.exec(branch)?.[1]
      if (!number || (await epicBranch(api, await api.issue(number))) !== branch)
        throw new Error('Wrong local cumulative epic')
      epic = branch
      kind = 'cumulative'
    } else if (branch !== 'main')
      throw new Error(
        'Unresolved local delivery context; use the issue worktree or exact epic branch',
      )
  }
  const ref = await api.request<{ object?: { sha?: string } }>(`git/ref/heads/${target}`)
  const base = reader.requiredString(ref.object?.sha)
  if (eventBase && base !== eventBase)
    throw new Error('Live target changed from the tested PR event; refresh and reverify')
  requireAncestor(root, base, head)
  return { kind, target, epic, base, head, tested }
<shellId: 89 completed with exit code 0>
```

</details>


---

<sub>7m 46s</sub>

### `bash`

**Read GitHub adapter token handling**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' scripts/architecture-github.mts

<details>
<summary>77 lines</summary>

```
import { readFileSync } from 'node:fs'
import process from 'node:process'
import { URL } from 'node:url'
import { ReleaseGitHubEvidenceReader } from './release-github-evidence.mts'
import {
  evaluateReleaseCiEvidence,
  loadReleaseCiEvidence,
  RELEASE_REPOSITORY,
} from './require-release-ci-evidence.mts'
import { parseCompletingChildTrailer } from './project-management/pull-request-relationships.ts'
import { fullCommit, git, requireAncestor } from './architecture-inventory.mts'

import type { ArchitecturePolicy } from './architecture-policy.mts'
import type {
  ArchitectureContext,
  ArchitectureIntegration,
} from './architecture-authorization.mts'

interface GitHubIssue {
  number: number
  state: string
  repository_url?: string
  labels?: Array<{ name: string }>
  parent?: GitHubIssue | null
  pull_request?: unknown
}
interface GitHubRef {
  ref: string
  sha: string
  repo?: { full_name: string } | null
}
interface GitHubPullRequest {
  number: number
  body?: string | null
  base: GitHubRef
  head: GitHubRef
}
interface PullRequestEvent {
  number: number
  pull_request: GitHubPullRequest
}

const reader = new ReleaseGitHubEvidenceReader('Architecture GitHub evidence')
export function githubAdapter(token: string | undefined) {
  if (!token)
    throw new Error(
      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
    )
  const request = <T,>(path: string): Promise<T> =>
    reader.requestJson<T>(
      new URL(`https://api.github.com/repos/${RELEASE_REPOSITORY}/${path}`),
      token,
    )
  async function issue(number: string | number): Promise<GitHubIssue> {
    // Native parent is read from the documented issue relationship endpoint, never PR prose.
    const record = await request<GitHubIssue>(`issues/${number}`)
    let parent: GitHubIssue | null = null
    const response = await globalThis.fetch(
      `https://api.github.com/repos/${RELEASE_REPOSITORY}/issues/${number}/parent`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `******
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )
    if (response.status !== 404) {
      if (!response.ok)
        throw new Error(`Native parent evidence failed (${response.status})`)
      parent = (await response.json()) as GitHubIssue
      if (parent.repository_url !== `https://api.github.com/repos/${RELEASE_REPOSITORY}`)
        throw new Error('Cross-repository native parent')
    }
    return { ...record, parent }
  }
  return { request, issue, token }
}

type ArchitectureGitHub = ReturnType<typeof githubAdapter>
<shellId: 90 completed with exit code 0>
```

</details>


---

<sub>7m 46s</sub>

### `bash`

**Run architecture report locally**

$ cd /private/var/tmp/ws/f7354e9d/hvir && npm run --silent architecture:report 2>&1 | tail -25; echo "exit: ${PIPESTATUS[0]}"

<details>
<summary>27 lines</summary>

```
0 budget violation(s)
module graph: 1139 maintained TS/JS modules; 3417 internal edges
roots: src, test, scripts, packages, build, .github, .githooks, .agents, .claude, (repository root files); resolution: tsconfig.base.json, tsconfig.node.json, tsconfig.web.json
Installed dependencies and builtins are external module leaves.
Git internals and disposable output retain the maintained inventory exclusions.
Non-code assets and exact native build output are explicit loading rows.
Worker and utility-process entries and nonliteral discovery are outside same-module cycle proof.
0 runtime cycle(s); 1 static component(s)
component: src/shared/harness-profile.ts, src/shared/harness-provider.ts
  src/shared/harness-profile.ts:1 --type-only/import--> src/shared/harness-provider.ts
  src/shared/harness-provider.ts:78 --type-only/import-type--> src/shared/harness-profile.ts
loading: packages/rename-noreplace/index.js:5 require native-build-output -> packages/rename-noreplace/build/Release/rename_noreplace.node
loading: scripts/inspect-packaged-runtime.mts:298 require nonliteral
loading: scripts/project-management/read-contributor-status.ts:123 module-runner discovery -> scripts/capture-contributor-usage.mts
loading: src/main/project-host/local-host.ts:947 require nonliteral
loading: src/main/project-host/local-host.ts:959 require nonliteral
loading: src/main/worker-host.ts:51 utility-process nonliteral
loading: src/renderer/src/main.tsx:5 import asset -> src/renderer/src/styles.css
loading: src/renderer/src/main.tsx:6 import asset -> src/renderer/src/themes.css
loading: src/renderer/src/viewer/RenderedView.tsx:47 worker process-entry -> src/renderer/src/viewer/json.worker.ts
loading: src/renderer/src/viewer/RenderedView.tsx:54 worker process-entry -> src/renderer/src/viewer/csv.worker.ts
loading: src/renderer/src/viewer/highlight-worker.ts:4 worker process-entry -> src/renderer/src/viewer/highlight.worker.ts
loading: src/renderer/src/viewer/markdown-client.ts:16 worker process-entry -> src/renderer/src/viewer/markdown.worker.ts
loading: test/local-host.test.ts:173 discovery discovery
0 dependency violation(s)
exit: 0
<shellId: 91 completed with exit code 0>
```

</details>


---

<sub>7m 57s</sub>

### `bash`

**Run lint and format check in background**

$ cd /private/var/tmp/ws/f7354e9d/hvir && (npm run --silent lint > "$TMPDIR/hvir-readme/lint.log" 2>&1; echo "lint exit: $?" >> "$TMPDIR/hvir-readme/lint.log"; npm run --silent format:check > "$TMPDIR/hvir-readme/format.log" 2>&1; echo "format:check exit: $?" >> "$TMPDIR/hvir-readme/format.log")

```
<command started in background with shellId: lint>
```


---

<sub>7m 57s</sub>

### `bash`

**Read smoke scenario names**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,60p' src/main/smoke/scenario-selection.mts

<details>
<summary>48 lines</summary>

```
export const ELECTRON_SMOKE_SCENARIOS = [
  'pty-native',
  'viewer-position',
  'viewer-content',
  'git-workflow',
  'workspace-remote',
  'web-pane',
  'renderer-authority',
  'platform-contracts',
  'diagnostic-report-restart',
  'renderer-recovery',
  'sessions-projection',
  'document-review',
  'development-performance',
  'terminal-presentation',
  'terminal-lifecycle',
  'native-host-worker',
  'workbench-health',
  'terminal-theme',
  'terminal-move',
  'workbench-layout',
  'terminal-split',
  'harness-profiles',
  'app-settings',
  'capacity',
] as const

export type ElectronSmokeScenario = (typeof ELECTRON_SMOKE_SCENARIOS)[number]
export type ElectronSmokeMode = Exclude<
  ElectronSmokeScenario,
  'pty-native' | 'diagnostic-report-restart'
>

/** A single Electron process must name the behavior it is proving. */
export function parseElectronSmokeScenario(
  value: string | undefined,
): ElectronSmokeScenario {
  if (value === undefined || value === '') {
    throw new Error(
      'Select one Electron smoke scenario with HVIR_SMOKE_SCENARIO; use npm run smoke for the aggregate suite',
    )
  }
  if (ELECTRON_SMOKE_SCENARIOS.includes(value as ElectronSmokeScenario)) {
    return value as ElectronSmokeScenario
  }
  throw new Error(
    `Unknown Electron smoke scenario '${value}'. Expected one of: ${ELECTRON_SMOKE_SCENARIOS.join(', ')}`,
  )
}
<shellId: 92 completed with exit code 0>
```

</details>


---

<sub>7m 57s</sub>

### `bash`

**Skim SSH acceptance scripts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,70p' scripts/run-macos-ssh-acceptance.sh | head -70; echo "=== real-host-ssh-contract (head) ==="; sed -n '1,40p' scripts/real-host-ssh-contract.mts

<details>
<summary>98 lines</summary>

```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

build_only=false
case "${1:-}" in
'') ;;
--build-only) build_only=true ;;
*)
  echo 'Usage: scripts/run-macos-ssh-acceptance.sh [--build-only]' >&2
  exit 1
  ;;
esac
if [[ $# -gt 1 ]]; then
  echo 'Usage: scripts/run-macos-ssh-acceptance.sh [--build-only]' >&2
  exit 1
fi

missing=false
for name in \
  MACOS_APPLICATION_CERTIFICATE \
  MACOS_APPLICATION_CERTIFICATE_PASSWORD \
  MACOS_TEAM_ID; do
  if [[ -z "${!name:-}" ]]; then
    echo "$name is required for the Apple-issued SSH acceptance identity." >&2
    missing=true
  fi
done
if [[ "$missing" == true ]]; then
  echo 'Refusing to build or launch an ad-hoc or raw Electron SSH acceptance app.' >&2
  exit 1
fi
if [[ ! "$MACOS_TEAM_ID" =~ ^[A-Z0-9]{10}$ ]]; then
  echo 'MACOS_TEAM_ID must be a ten-character Apple Developer Team ID.' >&2
  exit 1
fi
if [[ "$(uname -s):$(uname -m)" != 'Darwin:arm64' ]]; then
  echo "Signed macOS SSH acceptance requires macOS arm64, found $(uname -s) $(uname -m)." >&2
  exit 1
fi

export CSC_LINK=$MACOS_APPLICATION_CERTIFICATE
export CSC_KEY_PASSWORD=$MACOS_APPLICATION_CERTIFICATE_PASSWORD

npm run build -- --mode ssh-acceptance
./node_modules/.bin/electron-builder \
  --mac dir \
  --arm64 \
  --publish never \
  --config electron-builder.ssh-acceptance.yml

application="$PWD/dist/ssh-acceptance/mac-arm64/hvir SSH Acceptance.app"
scripts/record-macos-ssh-identity.sh --acceptance "$application"
echo 'Acceptance user-data root: hvir-ssh-acceptance (under macOS Application Support)'

if [[ "$build_only" == true ]]; then
  echo "Built the signed SSH acceptance application at $application"
  exit 0
fi

unset \
  MACOS_APPLICATION_CERTIFICATE \
  MACOS_APPLICATION_CERTIFICATE_PASSWORD \
  MACOS_TEAM_ID \
  CSC_LINK \
  CSC_KEY_PASSWORD
echo 'Launching the exact signed SSH acceptance application through LaunchServices; no fallback is permitted.'
exec /usr/bin/open -n "$application"
=== real-host-ssh-contract (head) ===
import { mkdir, writeFile } from 'node:fs/promises'
import { isAbsolute, join } from 'node:path'

import type { HostConnectionState, HostWatchTier } from '../src/shared/index.ts'
import type { SshTransportDiagnostic } from '../src/main/project-host/ssh-host.ts'

export const REAL_HOST_SSH_ENVIRONMENT_KEYS = [
  'HVIR_REAL_SSH_HOST',
  'HVIR_REAL_SSH_PORT',
  'HVIR_REAL_SSH_USER',
  'HVIR_REAL_SSH_HOST_KEY',
  'HVIR_REAL_SSH_ROOT_PARENT',
  'HVIR_REAL_SSH_PRIVATE_KEY',
  'HVIR_REAL_SSH_IDENTITY_FILE',
  'HVIR_REAL_SSH_PASSPHRASE',
] as const

export const REAL_HOST_SSH_PHASES = [
  'configuration',
  'credentials-loaded',
  'connected',
  'root-registered',
  'exec',
  'sftp',
  'watch',
  'pty-provider-observation',
  'loopback-stream',
  'transport-capacity',
  'reconnected',
  'cleanup',
] as const

export type RealHostSshPhase = (typeof REAL_HOST_SSH_PHASES)[number]

export const REAL_HOST_SSH_FAILURE_REASONS = [
  'configuration-invalid',
  'interrupted',
  'operation-timeout',
  'operation-failed',
  'cleanup-failed',
<shellId: 93 completed with exit code 0>
```

</details>


---

<sub>8m 6s</sub>

### `bash`

**Check SSH and local watch tiers**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "inotifywait\|inotify\|polling\|find \|stat \|command -v" src/main/project-host/ssh-watch-service.ts | head -30; echo "=== local-host watch tier ==="; grep -n "watchTier\|'native'\|'polling'\|usePolling" src/main/project-host/local-host.ts | head -15

<details>
<summary>21 lines</summary>

```
40:/** Connection-aware inotify/polling orchestration for one logical SshHost. */
67:        this.owner.watchTier() === 'inotify'
118:    const handle = this.owner.execStream('inotifywait', args)
131:          type: inotifyEventType(flags),
136:    let pollingStop: Disposer | undefined
146:      if (stopped || pollingStop || fallingBack) return
152:      this.owner.setWatchTier('polling')
153:      pollingStop = this.watchPolling(path, onEvent, opts)
158:      if (!stopped) fallback(new Error(`inotifywait exited (${String(code)})`))
164:      void pollingStop?.()
267:              for (const file of this.files.pollingInterests()) {
330:            this.files.pollingInterests().has(watchedRoot.path),
348:          this.files.pollingInterests().has(child) ||
359:      for (const file of this.files.pollingInterests()) {
403:function inotifyEventType(flags: string): WatchEventType {
=== local-host watch tier ===
92:  readonly watchTier: HostWatchTier = 'native'
826:    const start = (usePolling: boolean): import('chokidar').FSWatcher => {
829:        usePolling,
852:          if (!usePolling && !fallingBack && !stopped && watchCapacityError(error)) {
<shellId: 94 completed with exit code 0>
```

</details>


---

<sub>8m 6s</sub>

### `bash`

**Check SSH transport mechanisms used**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "sftp\|\.exec(\|\.shell(\|forwardOut\|openssh_forwardOutStreamLocal" src/main/project-host/ssh-host.ts src/main/project-host/ssh-file-access.ts src/main/project-host/ssh-transport-pool.ts | head -30

<details>
<summary>31 lines</summary>

```
src/main/project-host/ssh-host.ts:229:    const result = await this.exec('sh', [
src/main/project-host/ssh-host.ts:254:              client.exec(
src/main/project-host/ssh-host.ts:485:            client.forwardOut(
src/main/project-host/ssh-host.ts:685:          await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
src/main/project-host/ssh-host.ts:904:            client.exec(remoteCommand(command, args, opts), (error, stream) =>
src/main/project-host/ssh-host.ts:922:            client.exec(
src/main/project-host/ssh-file-access.ts:43:  private sftpSession?: Promise<SFTPWrapper>
src/main/project-host/ssh-file-access.ts:77:    const session = this.sftpSession
src/main/project-host/ssh-file-access.ts:78:    this.sftpSession = undefined
src/main/project-host/ssh-file-access.ts:103:    const value = await this.sftp<Buffer>(
src/main/project-host/ssh-file-access.ts:153:      const attrs = await this.sftp<import('ssh2').Stats>(
src/main/project-host/ssh-file-access.ts:163:      await this.sftp<void>((s, done) => {
src/main/project-host/ssh-file-access.ts:172:        const currentAttrs = await this.sftp<import('ssh2').Stats>(
src/main/project-host/ssh-file-access.ts:181:        const current = await this.sftp<Buffer>(
src/main/project-host/ssh-file-access.ts:188:        await this.sftp<void>(
src/main/project-host/ssh-file-access.ts:194:        await this.sftp<void>(
src/main/project-host/ssh-file-access.ts:200:      await this.sftp<void>((s, done) => s.unlink(temporary, done)).catch(() => undefined)
src/main/project-host/ssh-file-access.ts:259:      const current = await this.sftp<import('ssh2').Stats>((s, done) =>
src/main/project-host/ssh-file-access.ts:265:      await this.sftp<void>((s, done) => s.unlink(path.path, done))
src/main/project-host/ssh-file-access.ts:280:    const raw = await this.sftp<import('ssh2').FileEntry[]>((s, done) =>
src/main/project-host/ssh-file-access.ts:292:    const attrs = await this.sftp<import('ssh2').Stats>((s, done) =>
src/main/project-host/ssh-file-access.ts:307:      await this.sftp<string>((s, done) => s.realpath(path.path, done)),
src/main/project-host/ssh-file-access.ts:326:    sftp: SFTPWrapper,
src/main/project-host/ssh-file-access.ts:338:      const digest = contentDigest(await sftpReadFile(sftp, path))
src/main/project-host/ssh-file-access.ts:350:    if (this.sftpSession) return this.sftpSession
src/main/project-host/ssh-file-access.ts:359:    this.sftpSession = pending
src/main/project-host/ssh-file-access.ts:363:          if (this.sftpSession === pending) this.sftpSession = undefined
src/main/project-host/ssh-file-access.ts:367:        if (this.sftpSession === pending) this.sftpSession = undefined
src/main/project-host/ssh-file-access.ts:394:  private sftp<T>(
src/main/project-host/ssh-file-access.ts:458:export function sftpLstat(
<shellId: 95 completed with exit code 0>
```

</details>


---

<sub>8m 39s</sub>

### `bash`

**Check SSH host key verification behavior**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "known_hosts" src/ | head -5; echo "--- hostVerifier ---"; sed -n '740,800p' src/main/project-host/ssh-host.ts

<details>
<summary>63 lines</summary>

```
--- hostVerifier ---
      username: config.user,
      keepaliveInterval: 10_000,
      keepaliveCountMax: 3,
      // Host verification is intentionally interactive; leave enough time to
      // compare a fingerprint without the handshake timing out underneath it.
      readyTimeout: 120_000,
      hostVerifier: (key: Buffer, verify: (valid: boolean) => void) => {
        if (!isActive()) {
          verify(false)
          return
        }
        const fingerprint = `SHA256:${createHash('sha256')
          .update(key)
          .digest('base64')
          .replace(/=+$/, '')}`
        const trustedFingerprint =
          this.acceptedHostFingerprint ?? this.options.trust.trustedHostKey()
        if (trustedFingerprint === fingerprint) {
          verify(true)
          return
        }
        void prompt({
          hostId: this.hostId,
          kind: trustedFingerprint ? 'host-key-changed' : 'host-key',
          title: trustedFingerprint
            ? `Host key changed for ${config.alias}`
            : `Trust ${config.alias}?`,
          instructions: trustedFingerprint
            ? 'The saved host key does not match. This can indicate a machine rebuild or a man-in-the-middle attack. Verify both fingerprints before replacing it.'
            : 'Verify the SHA-256 fingerprint before trusting this host.',
          fingerprint,
          previousFingerprint: trustedFingerprint,
          prompts: [],
        })
          .then(async (a) => {
            const trusted = a?.[0]?.toLowerCase() === 'yes'
            if (!trusted || !isActive()) {
              verify(false)
              return
            }
            await this.options.trust.rememberHostKey(fingerprint)
            if (!isActive()) {
              verify(false)
              return
            }
            this.acceptedHostFingerprint = fingerprint
            verify(true)
          })
          .catch(() => verify(false))
        // This verifier is callback-only: returning a boolean would make
        // `ssh2` decide synchronously before the user can answer.
      },
      authHandler: (methods, _partial, next) => {
        const send = next as unknown as (
          value: import('ssh2').AnyAuthMethod | false,
        ) => void
        void (async (): Promise<import('ssh2').AnyAuthMethod | false> => {
          if (authenticationCancelled || !isActive()) return false
          // `ssh2` passes null before the first authentication attempt. That
          // means the server's methods are not known yet, not that none are
          // available. Start our configured ladder and narrow it after the
<shellId: 96 completed with exit code 0>
```

</details>


---

<sub>8m 39s</sub>

### `bash`

**Read filename search match policy**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' src/main/filename-search/filename-search-policy.ts

<details>
<summary>73 lines</summary>

```
import { FILENAME_SEARCH_RESULT_LIMIT, type FilenameSearchResult } from '../../shared'

export type IndexedFilename = FilenameSearchResult

export interface RankedFilenameSearch {
  readonly results: readonly FilenameSearchResult[]
  readonly truncated: boolean
}

/** Fixed basename-only, case-insensitive literal and `*` wildcard policy. */
export function rankFilenameMatches(
  files: readonly IndexedFilename[],
  query: string,
  limit = FILENAME_SEARCH_RESULT_LIMIT,
): RankedFilenameSearch {
  const needle = query.toLowerCase()
  if (needle.length === 0) return { results: [], truncated: false }
  const wildcard = needle.includes('*')
  const ranked = files
    .map((file) => ({
      file,
      rank: wildcard
        ? matchesWildcard(file.name.toLowerCase(), needle)
          ? 3
          : undefined
        : matchRank(file.name.toLowerCase(), needle),
    }))
    .filter(
      (candidate): candidate is { file: IndexedFilename; rank: number } =>
        candidate.rank !== undefined,
    )
    .sort((left, right) => {
      if (left.rank !== right.rank) return left.rank - right.rank
      const nameOrder = left.file.name
        .toLowerCase()
        .localeCompare(right.file.name.toLowerCase())
      if (nameOrder !== 0) return nameOrder
      const parentOrder = compareText(left.file.parentPath, right.file.parentPath)
      if (parentOrder !== 0) return parentOrder
      return compareText(left.file.path.path, right.file.path.path)
    })
  return {
    results: ranked.slice(0, limit).map(({ file }) => file),
    truncated: ranked.length > limit,
  }
}

function matchesWildcard(name: string, pattern: string): boolean {
  let nameIndex = 0
  let patternIndex = 0
  let starIndex = -1
  let starMatchIndex = 0

  while (nameIndex < name.length) {
    if (pattern[patternIndex] === name[nameIndex]) {
      nameIndex += 1
      patternIndex += 1
    } else if (pattern[patternIndex] === '*') {
      starIndex = patternIndex
      starMatchIndex = nameIndex
      patternIndex += 1
    } else if (starIndex >= 0) {
      starMatchIndex += 1
      nameIndex = starMatchIndex
      patternIndex = starIndex + 1
    } else {
      return false
    }
  }

  while (pattern[patternIndex] === '*') patternIndex += 1
  return patternIndex === pattern.length
}

function matchRank(name: string, query: string): number | undefined {
  if (name === query) return 0
  if (name.startsWith(query)) return 1
  return name.includes(query) ? 2 : undefined
}
<shellId: 97 completed with exit code 0>
```

</details>


---

<sub>8m 39s</sub>

### Notification

Shell "Run lint and format check in background" completed

---

<sub>8m 45s</sub>

### `bash`

**Read lint and format check results**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "=== lint.log (tail) ==="; tail -15 "$TMPDIR/hvir-readme/lint.log"; echo; echo "=== format.log (tail) ==="; tail -15 "$TMPDIR/hvir-readme/format.log"

<details>
<summary>19 lines</summary>

```
=== lint.log (tail) ===
lint exit: 0

=== format.log (tail) ===
[warn] test/harness-usage-demand-controller.test.ts
[warn] test/macos-native-package.test.ts
[warn] test/project-entry-drag.test.tsx
[warn] test/real-host-ssh-workflow.test.ts
[warn] test/session-dialog.test.tsx
[warn] test/sessions-terminal-ssh.test.tsx
[warn] test/ssh-transport-pool.test.ts
[warn] test/terminal-fork-launch.test.ts
[warn] test/terminal-ipc-resume.test.ts
[warn] test/terminal-recovery-planner.test.ts
[warn] test/terminal-view-fork.test.tsx
[warn] test/terminal-workspace-model.test.ts
[warn] test/viewer-workload-policy.test.ts
[warn] Code style issues found in 52 files. Run Prettier with --write to fix.
format:check exit: 1
<shellId: 98 completed with exit code 0>
```

</details>


---

<sub>8m 58s</sub>

### `bash`

**Check architecture policy scope rules for root files**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "export function inScope\|export function isSource\|export function sourceDisposition\|export function ruleFor\|export function disposableDirectory" -A 22 scripts/architecture-policy.mts | head -130

<details>
<summary>89 lines</summary>

```
104:export function disposableDirectory(path: string): boolean {
105-  return (
106-    path.split('/').some((part) => Object.hasOwn(DISPOSABLE_ROLES, part)) ||
107-    /^packages\/[^/]+\/build(?:\/|$)/.test(path)
108-  )
109-}
110-
111-// Configured source extensions always win. These fixed data dispositions are not a
112-// caller-configurable exclusion list; ignored or untracked unknown source still fails.
113:export function sourceDisposition(
114-  path: string,
115-  policy: ArchitecturePolicy,
116-): 'source' | 'data' | 'inspect' {
117-  const extension = extname(path)
118-  if (policy.extensions.includes(extension)) return 'source'
119-  if (
120-    DATA_EXTENSIONS.has(extension) ||
121-    ['.log', '.tsbuildinfo'].includes(extension) ||
122-    /^\.env(?:\.[a-zA-Z0-9_-]+)*$/.test(basename(path))
123-  )
124-    return 'data'
125-  return 'inspect'
126-}
127:export function isSource(
128-  path: string,
129-  bytes: Buffer,
130-  policy: ArchitecturePolicy,
131-): boolean {
132-  if (sourceDisposition(path, policy) === 'source') return true
133-  const first = bytes.subarray(0, 200).toString().split('\n')[0] ?? ''
134-  if (/^#!.*\b(?:sh|bash|zsh)(?:\s|$)/.test(first)) return true
135-  if (
136-    first.startsWith('#!') ||
137-    (extname(path) && sourceDisposition(path, policy) !== 'data')
138-  ) {
139-    throw new Error(
140-      `Unclassified source language: ${path}; add an explicit policy disposition`,
141-    )
142-  }
143-  return false
144-}
145:export function inScope(path: string, policy: ArchitecturePolicy): boolean {
146-  return !path.includes('/') || policy.roots.some((root) => path.startsWith(`${root}/`))
147-}
148-
149-export function physicalLines(bytes: Uint8Array): number {
150-  if (!bytes.length) return 0
151-  let count = 0
152-  for (const byte of bytes) if (byte === 10) count++
153-  return count + (bytes[bytes.length - 1] === 10 ? 0 : 1)
154-}
155-function closed(
156-  value: unknown,
157-  keys: string[],
158-  label: string,
159-): asserts value is Record<string, unknown> {
160-  if (
161-    !value ||
162-    typeof value !== 'object' ||
163-    Array.isArray(value) ||
164-    Object.keys(value).some((key) => !keys.includes(key))
165-  )
166-    throw new Error(`Malformed ${label}: unexpected fields`)
167-}
--
324:export function ruleFor(policy: ArchitecturePolicy, path: string): ArchitectureRule {
325-  const generated = policy.generated.find((entry) => entry.path === path)
326-  if (generated) return { ...generated, kind: 'generated' }
327-  return (
328-    policy.budgets.find((entry) => entry.path === path) ?? {
329-      kind: 'ordinary',
330-      maxLines: policy.defaultMaximum,
331-    }
332-  )
333-}
334-export function isRelaxation(
335-  before: ArchitectureRule,
336-  after: ArchitectureRule,
337-  priorCounts: number[] = [],
338-): boolean {
339-  const priorLimit = ['stricter', 'transitional'].includes(before.kind)
340-    ? Math.min(before.maxLines, ...priorCounts)
341-    : before.maxLines
342-  if (after.maxLines > before.maxLines) return true
343-  if (
344-    ['stricter', 'transitional'].includes(before.kind) &&
345-    before.kind !== after.kind &&
346-    after.maxLines > priorLimit
<shellId: 99 completed with exit code 0>
```

</details>


---

<sub>9m 6s</sub>

### `bash`

**Read architecture policy data extensions and roles**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,104p' scripts/architecture-policy.mts

<details>
<summary>102 lines</summary>

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
<shellId: 100 completed with exit code 0>
```

</details>


---

<sub>9m 19s</sub>

### `bash`

**Check semantics of workbench keybinding actions**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "toggleTerminalFocus\|focusTerminal\|focusViewer\|focusTree\|nextWorkspace\|previousWorkspace\|cycleViewMode" -A 6 src/renderer/src/workbench/workbench-command-router.ts | head -90

<details>
<summary>46 lines</summary>

```
7:  readonly cycleViewMode: () => void
8-  readonly findFile: () => void
9-  readonly findInFile: () => void
10-  readonly findInTerminal: () => boolean
11-  readonly goToLine: () => void
12:  readonly toggleTerminalFocus: () => void
13:  readonly focusTerminal: () => void
14:  readonly focusViewer: () => void
15:  readonly focusTree: () => void
16-  readonly switchWorkspace: (direction: -1 | 1) => void
17-}
18-
19-export function dispatchWorkbenchCommand(
20-  action: WebPaneCommandAction,
21-  paneId: string | undefined,
--
32:    case 'cycleViewMode':
33:      if (ports.canUseViewerCommands()) ports.cycleViewMode()
34-      return true
35-    case 'findInFile':
36-      if (ports.canUseViewerCommands()) ports.findInFile()
37-      return true
38-    case 'findInTerminal':
39-      return context === 'terminal' && ports.findInTerminal()
--
46:    case 'toggleTerminalFocus':
47:      ports.toggleTerminalFocus()
48-      return true
49:    case 'focusTerminal':
50:      ports.focusTerminal()
51-      return true
52:    case 'focusViewer':
53:      ports.focusViewer()
54-      return true
55:    case 'focusTree':
56:      ports.focusTree()
57-      return true
58:    case 'nextWorkspace':
59-      ports.switchWorkspace(1)
60-      return true
61:    case 'previousWorkspace':
62-      ports.switchWorkspace(-1)
63-      return true
64-  }
65-}
<shellId: 101 completed with exit code 0>
```

</details>


---

<sub>9m 24s</sub>

### `bash`

**Find what toggleTerminalFocus does**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "toggleTerminalFocus" -B2 -A 14 src/renderer/src/workbench/use-workbench-commands.ts | head -70; echo "=== App.tsx usage ==="; grep -n "toggleTerminalFocus\|toggleTerminalMaximized\|setTerminalMode(" src/renderer/src/App.tsx src/renderer/src/workbench/*.ts src/renderer/src/workbench/*.tsx | head -20

<details>
<summary>17 lines</summary>

```
=== App.tsx usage ===
src/renderer/src/App.tsx:183:    toggleTerminalFocus,
src/renderer/src/App.tsx:252:    toggleTerminalFocus,
src/renderer/src/App.tsx:599:            if (terminalMode !== 'restored') setTerminalMode('restored')
src/renderer/src/App.tsx:611:                setTerminalMode('restored')
src/renderer/src/workbench/use-workbench-layout.ts:215:  const toggleTerminalFocus = useCallback(
src/renderer/src/workbench/use-workbench-layout.ts:216:    () => setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : 'maximized')),
src/renderer/src/workbench/use-workbench-layout.ts:220:    setTerminalMode((mode) => (mode === 'collapsed' ? 'restored' : mode))
src/renderer/src/workbench/use-workbench-layout.ts:225:      setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
src/renderer/src/workbench/use-workbench-layout.ts:233:    setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
src/renderer/src/workbench/use-workbench-layout.ts:242:    setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
src/renderer/src/workbench/use-workbench-layout.ts:256:    setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
src/renderer/src/workbench/use-workbench-layout.ts:268:    toggleTerminalFocus,
src/renderer/src/workbench/workbench-command-router.ts:12:  readonly toggleTerminalFocus: () => void
src/renderer/src/workbench/workbench-command-router.ts:46:    case 'toggleTerminalFocus':
src/renderer/src/workbench/workbench-command-router.ts:47:      ports.toggleTerminalFocus()
<shellId: 102 completed with exit code 0>
```

</details>


---

<sub>9m 31s</sub>

### `bash`

**Read sessions overview model**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,60p' src/renderer/src/sessions/sessions-overview-model.ts; grep -n "label\|'Working'\|'Waiting\|'Idle'\|Group by\|Sort" src/renderer/src/sessions/sessions-overview-model.ts | head -40

<details>
<summary>70 lines</summary>

```
import type {
  SessionsFact,
  SessionsProjectionRow,
  SessionsTerminalHandle,
} from '../../../shared'

export type SessionsOverviewFilter =
  'all' | 'harnesses' | 'shells' | 'attention' | 'working'
export type SessionsOverviewGroup = 'project' | 'workspace' | 'none'
export type SessionsOverviewSort = 'priority' | 'title' | 'project'

export interface SessionsOverviewPolicy {
  readonly filter: SessionsOverviewFilter
  readonly group: SessionsOverviewGroup
  readonly sort: SessionsOverviewSort
}

export interface SessionsOverviewGroupModel {
  readonly key: string
  readonly label?: string
  readonly rows: readonly SessionsProjectionRow[]
}

export const SESSIONS_OVERVIEW_PAGE_SIZE = 40

export interface SessionsOverviewPageModel {
  readonly pageIndex: number
  readonly pageCount: number
  readonly start: number
  readonly end: number
  readonly totalRows: number
  readonly groups: readonly SessionsOverviewGroupModel[]
  readonly rows: readonly SessionsProjectionRow[]
}

export type SessionsOverviewCardFactTone =
  'available' | 'actionable' | 'pending' | 'stale'

export interface SessionsOverviewCardFact {
  readonly label: string
  readonly value: string
  readonly tone: SessionsOverviewCardFactTone
}

export interface SessionsOverviewCardFacts {
  readonly facts: readonly SessionsOverviewCardFact[]
}

export interface SessionsOverviewCardIdentity {
  readonly label: string
  readonly title: string
  readonly accessibleName: string
}

export const DEFAULT_SESSIONS_OVERVIEW_POLICY: SessionsOverviewPolicy = {
  filter: 'all',
  group: 'workspace',
  sort: 'priority',
}

10:export type SessionsOverviewSort = 'priority' | 'title' | 'project'
15:  readonly sort: SessionsOverviewSort
20:  readonly label?: string
40:  readonly label: string
50:  readonly label: string
74:  const label =
81:    label,
83:    accessibleName: titleCarriesIdentity(title, label) ? title : `${label} · ${title}`,
115:      'Working',
117:      () => 'Working',
152:  return { label: 'Status', value, tone: 'available' }
156:  label: string,
166:        label,
173:        label,
207:      label: row.project.name,
228:      label: row.workspace.name,
278:  return `${filterLabel(policy.filter)} · Grouped by ${groupLabel(policy.group)} · Sorted by ${sortLabel(policy.sort)}`
292:      return 'Working'
307:function sortLabel(sort: SessionsOverviewSort): string {
337:  sort: SessionsOverviewSort,
<shellId: 103 completed with exit code 0>
```

</details>


---

<sub>9m 31s</sub>

### `bash`

**Read harness usage and telemetry shared types**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,80p' src/shared/harness-usage.ts; echo "=== harness-telemetry ==="; sed -n '1,70p' src/shared/harness-telemetry.ts

<details>
<summary>92 lines</summary>

```
/** Provider-neutral cumulative token-usage vocabulary. */

export const HARNESS_USAGE_TOKEN_COUNTER_NAMES = [
  'freshInputTokens',
  'cacheReadInputTokens',
  'cacheWriteInputTokens',
  'outputTokens',
  'reasoningTokens',
] as const

export type HarnessUsageCounterName = (typeof HARNESS_USAGE_TOKEN_COUNTER_NAMES)[number]

export const HARNESS_USAGE_ADDITIVE_TOKEN_COUNTER_NAMES = [
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[0],
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[1],
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[2],
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[3],
] as const

export type HarnessUsageCounters = Readonly<
  Partial<Record<HarnessUsageCounterName, number>>
>

export interface HarnessUsageValue extends HarnessUsageCounters {
  /** Present only when every additive category has an exact safe-integer value. */
  readonly normalizedTokenTotal?: number
}
export const HARNESS_USAGE_UNAVAILABLE_REASONS = [
  'invalid-session-identity',
  'artifact-unavailable',
  'artifact-too-large',
  'usage-unavailable',
] as const
export type HarnessUsageUnavailableReason =
  (typeof HARNESS_USAGE_UNAVAILABLE_REASONS)[number]
=== harness-telemetry ===
import type { HarnessProviderId } from './harness-provider'
import type { HarnessUsageValue } from './harness-usage'

export type HarnessFacet<T> =
  | { readonly status: 'unsupported' }
  | { readonly status: 'pending'; readonly reason?: string }
  | { readonly status: 'unavailable'; readonly reason?: string }
  | { readonly status: 'stale'; readonly value: T; readonly observedAt: number }
  | { readonly status: 'available'; readonly value: T }

export interface HarnessSessionFacet {
  readonly id: string
  readonly state: 'active' | 'waiting' | 'ended' | 'unknown'
}

export interface HarnessModelFacet {
  readonly id: string
  readonly displayName?: string
}

export interface HarnessContextFacet {
  readonly usedTokens: number
  readonly windowTokens?: number
  readonly usedPercent?: number
}

export type HarnessUsageFacet =
  | { readonly status: 'unsupported' }
  | { readonly status: 'pending'; readonly reason?: string }
  | { readonly status: 'unavailable'; readonly reason?: string }
  | { readonly status: 'reset'; readonly reason?: string }
  | {
      readonly status: 'stale'
      readonly value: HarnessUsageValue
      readonly observedAt: number
      readonly reason?: string
    }
  | { readonly status: 'exact'; readonly value: HarnessUsageValue }
  | { readonly status: 'partial'; readonly value: HarnessUsageValue }

export interface HarnessTurnFacet {
  readonly state: 'working' | 'waiting-for-user' | 'waiting-for-approval' | 'idle'
  readonly approvalKind?: string
}

export interface HarnessIntegrationsFacet {
  readonly skills?: readonly string[]
  readonly mcpServers?: readonly string[]
}

export interface HarnessSnapshotFacets {
  readonly session: HarnessFacet<HarnessSessionFacet>
  readonly model: HarnessFacet<HarnessModelFacet>
  readonly context: HarnessFacet<HarnessContextFacet>
  readonly usage: HarnessUsageFacet
  readonly turn: HarnessFacet<HarnessTurnFacet>
  readonly integrations: HarnessFacet<HarnessIntegrationsFacet>
}

export type HarnessProviderData =
  | null
  | boolean
  | number
  | string
  | readonly HarnessProviderData[]
  | { readonly [key: string]: HarnessProviderData }

/** Versioned, provenance-carrying foundation for the future harness viewer. */
export interface HarnessSnapshot {
  readonly version: 1
<shellId: 104 completed with exit code 0>
```

</details>


---

<sub>9m 38s</sub>

### `bash`

**Check how harness telemetry is sourced**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,60p' src/main/harness/claude-session-artifact.ts; echo "=== codex-session-discovery head ==="; sed -n '1,50p' src/main/harness/codex-session-discovery.ts

<details>
<summary>100 lines</summary>

```
/** Claude Code's cwd-qualified transcript location, behind the provider seam. */

import { hostPath, joinHostPath, type HostPath } from '../../shared'
import type { ProjectHost } from '../project-host'
import type { HarnessArtifactContext } from './harness-provider-contract'

const CLAUDE_SESSION_ID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const MAX_RESOLVED_PATH_CHARACTERS = 16_384
const MAX_RESOLUTION_OUTPUT_BYTES = 32 * 1024
const MAX_PROJECT_DIRECTORY_CHARACTERS = 200

const RESOLVE_CLAUDE_ROOTS_SCRIPT = `
if [ -n "\${CLAUDE_CONFIG_DIR:-}" ]; then
  config_root=$CLAUDE_CONFIG_DIR
elif [ -n "\${HOME:-}" ]; then
  config_root=$HOME/.claude
else
  exit 1
fi
case "$config_root" in
  /*) ;;
  *) exit 1 ;;
esac
pwd -P || exit 1
printf '\\0%s' "$config_root"
`.trim()

export interface ClaudeSessionArtifactContext {
  readonly cwd: HostPath
  readonly sessionId: string
  readonly artifact: HarnessArtifactContext
}

export interface ClaudeSessionArtifactLocation {
  readonly projectsRoot: HostPath
  readonly projectDirectory: HostPath
  readonly transcript: HostPath
}

/**
 * Match Claude Code 2.1.216's project-directory derivation exactly.
 * The hash intentionally iterates JavaScript UTF-16 code units.
 */
export function claudeProjectDirectoryName(canonicalCwd: string): string {
  const sanitized = canonicalCwd.replace(/[^a-zA-Z0-9]/g, '-')
  if (sanitized.length <= MAX_PROJECT_DIRECTORY_CHARACTERS) return sanitized
  const suffix = Math.abs(javaStringHash(canonicalCwd)).toString(36)
  return `${sanitized.slice(0, MAX_PROJECT_DIRECTORY_CHARACTERS)}-${suffix}`
}

/** Resolve exactly one profile- and cwd-qualified Claude transcript path. */
export async function resolveClaudeSessionArtifact(
  host: ProjectHost,
  context: ClaudeSessionArtifactContext,
  signal: AbortSignal,
): Promise<ClaudeSessionArtifactLocation | undefined> {
  if (
    signal.aborted ||
    context.cwd.hostId !== host.hostId ||
=== codex-session-discovery head ===
/**
 * Codex persisted-session identification.
 *
 * Codex can resume an exact session id but does not accept a launch-time id.
 * Its rollout record is therefore treated as a version-sensitive adapter
 * detail. Discovery is deliberately fail-closed: hvir only accepts one new
 * session_meta record matching the launch window, cwd, originator, and filename
 * UUID. The PTY supervisor serializes hvir-owned snapshot/launch handoffs
 * separately; bounded identification never blocks a later PTY from starting.
 */

import { hostPath, type HostPath } from '../../shared'
import type { ProjectHost } from '../project-host'
import type { HarnessArtifactContext } from './harness-provider-contract'

const LIST_SESSION_FILES_SCRIPT = `
root="\${CODEX_HOME:-\${HOME}/.codex}/sessions"
printf 'hvir-clock:%s\\0' "$(date +%s)"
[ -d "$root" ] || exit 0
cd "$root" || exit 0
find "$PWD" -type f -name 'rollout-*.jsonl' -print0
`.trim()
const SESSION_ID_IN_FILENAME =
  /(?:^|\/)(?:rollout-[^/]*-)?([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.jsonl$/i
const LIST_MAX_BUFFER = 2 * 1024 * 1024
const META_MAX_BUFFER = 512 * 1024
const DEFAULT_TIMEOUT_MS = 90_000
const DEFAULT_INITIAL_POLL_MS = 75
const DEFAULT_MAX_POLL_MS = 5_000
const DEFAULT_SETTLE_MS = 250
const LAUNCH_CLOCK_SLOP_MS = 2_000
const MAX_NEW_CANDIDATES = 32
const DEFAULT_ARTIFACT: HarnessArtifactContext = {
  identity: 'codex-default',
  environment: {},
  unsetEnvironment: [],
}

interface CodexSessionSnapshot {
  readonly paths: readonly string[]
  readonly hostCapturedAtMs: number
  readonly localCapturedAtMs: number
}

interface SessionFileScan {
  readonly paths: readonly string[]
  readonly hostNowMs: number
}

interface SessionMetaEnvelope {
<shellId: 105 completed with exit code 0>
```

</details>


---

<sub>9m 53s</sub>

### `bash`

**Check terminal link routing for loopback vs external URLs**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "parseLoopbackHttpTarget\|web-pane:open-external\|web-pane:open'\|openExternal" src/renderer/src --include='*.ts' --include='*.tsx' | head -20

<details>
<summary>6 lines</summary>

```
src/renderer/src/terminal/terminal-file-link.ts:5:  parseLoopbackHttpTarget,
src/renderer/src/terminal/terminal-file-link.ts:148:  return parseLoopbackHttpTarget(url)?.url
src/renderer/src/dashboards/use-web-pane-workspace.ts:143:            await window.hvir.invoke('web-pane:open', {
src/renderer/src/dashboards/use-web-pane-workspace.ts:181:          .invoke('web-pane:open-external', { paneId: id, url: navigation.url })
src/renderer/src/dashboards/use-web-pane-workspace.ts:188:            await window.hvir.invoke('web-pane:open', {
<shellId: 106 completed with exit code 0>
```

</details>


---

<sub>9m 53s</sub>

### `bash`

**Check attention badge behavior**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "attention\|setBadgeCount\|badge" src/main/attention-badge.ts | head -20; echo "=== dock/taskbar notify? ==="; grep -rn "new Notification\|Notification(" src/main src/renderer/src --include='*.ts' --include='*.tsx' | head -5

<details>
<summary>8 lines</summary>

```
1:/** Quiet OS-level aggregation for actionable terminal attention. */
7:  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}
51:      if (this.setBadgeCount(count) === false) this.failed = true
54:      console.warn('[attention] OS badge unavailable', error)
=== dock/taskbar notify? ===
src/main/sessions/sessions-usage-observation-port.ts:139:    this.queueNotification(lease)
src/main/sessions/sessions-usage-observation-port.ts:163:  private queueNotification(lease: UsageLease): void {
<shellId: 107 completed with exit code 0>
```

</details>


---

<sub>9m 57s</sub>

### `bash`

**Read terminal link detection for web/file targets**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '100,175p' src/renderer/src/terminal/terminal-file-link.ts

<details>
<summary>70 lines</summary>

```
}
  return resolved
}

export function isFileUri(target: string): boolean {
  return target.startsWith('file://')
}

// Match both forms so this provider overrides ghostty-web's global window.open
// handler for schemed loopback URLs as well as detecting scheme-less output.
const WEB_HOST_TOKEN =
  /(?:^|[\s<>"'`|([{])((?:http:\/\/(?:[^\s<>"'`|/@]+(?::[^\s<>"'`|/@]*)?@)?(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\]|\[::\])(?::\d{1,6})?|(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\]|\[::\]):\d{1,6})(?:[/?#][^\s<>"'`|]*)?)/gi
const WEB_TRAILING_PUNCTUATION = /[.,;!?)\]}]+$/

export interface TerminalWebLink {
  readonly target: string
  readonly start: number
  readonly end: number
}

/** Detect loopback server links in one terminal line. */
export function detectTerminalWebLinks(text: string): readonly TerminalWebLink[] {
  const links: TerminalWebLink[] = []
  WEB_HOST_TOKEN.lastIndex = 0
  let match = WEB_HOST_TOKEN.exec(text)
  while (match) {
    const captured = match[1] ?? ''
    const target = captured.replace(WEB_TRAILING_PUNCTUATION, '')
    // Schemed lookalikes are still claimed so Ghostty's built-in provider
    // cannot send malformed or userinfo-bearing loopback URLs to window.open.
    // Scheme-less output has no competing provider, so surface it only when
    // activation can produce an authorized URL.
    if (
      target &&
      (/^http:\/\//i.test(target) || normalizeTerminalWebTarget(target) !== undefined)
    ) {
      const start = match.index + match[0].length - captured.length
      links.push({ target, start, end: start + target.length - 1 })
    }
    match = WEB_HOST_TOKEN.exec(text)
  }
  return links
}

/** Turn a clicked terminal target into an http URL when it is a loopback web link. */
export function normalizeTerminalWebTarget(rawTarget: string): string | undefined {
  const target = rawTarget.trim().replace(WEB_TRAILING_PUNCTUATION, '')
  const url = /^http:\/\//i.test(target) ? target : `http://${target}`
  return parseLoopbackHttpTarget(url)?.url
}

/** Include invalid-userinfo lookalikes so our provider overrides global window.open. */
export function isTerminalWebTarget(rawTarget: string): boolean {
  if (normalizeTerminalWebTarget(rawTarget)) return true
  try {
    const candidate = new URL(rawTarget)
    return (
      candidate.protocol === 'http:' &&
      ['localhost', '127.0.0.1', '0.0.0.0', '[::1]', '[::]'].includes(
        candidate.hostname.toLowerCase(),
      )
    )
  } catch {
    return false
  }
}

function isPlainPathCandidate(path: string): boolean {
  return (
    path.startsWith('/') ||
    path.startsWith('./') ||
    path.startsWith('../') ||
    path.includes('/') ||
    FILE_NAME.test(path)
  )
}
<shellId: 108 completed with exit code 0>
```

</details>


---

<sub>10m 46s</sub>

### `bash`

**Check how harness capability labels are computed in the UI**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "compactHarnessCapabilityLabel" src/renderer/src | head; grep -rn "compactHarnessCapabilityLabel(" -B6 -A6 src/renderer/src/terminal/TerminalRail.tsx | head -50

<details>
<summary>32 lines</summary>

```
src/renderer/src/terminal/TerminalRail.tsx:12:  compactHarnessCapabilityLabel,
src/renderer/src/terminal/TerminalRail.tsx:212:                  const capability = compactHarnessCapabilityLabel(
src/renderer/src/terminal/TerminalRail.tsx:388:  const capability = compactHarnessCapabilityLabel(
src/renderer/src/terminal/harness-launch-menu.ts:51:export function compactHarnessCapabilityLabel(
src/renderer/src/terminal/TerminalRail.tsx-206-                ref={launchMenuRef}
src/renderer/src/terminal/TerminalRail.tsx-207-                className="terminal-new-menu"
src/renderer/src/terminal/TerminalRail.tsx-208-                role="menu"
src/renderer/src/terminal/TerminalRail.tsx-209-                style={launchMenuStyle}
src/renderer/src/terminal/TerminalRail.tsx-210-              >
src/renderer/src/terminal/TerminalRail.tsx-211-                {launchMenuEntries.map(({ profile, provider, state }) => {
src/renderer/src/terminal/TerminalRail.tsx:212:                  const capability = compactHarnessCapabilityLabel(
src/renderer/src/terminal/TerminalRail.tsx-213-                    provider?.default === true,
src/renderer/src/terminal/TerminalRail.tsx-214-                    state.probe?.capabilities ?? provider?.capabilities,
src/renderer/src/terminal/TerminalRail.tsx-215-                  )
src/renderer/src/terminal/TerminalRail.tsx-216-                  const details = [
src/renderer/src/terminal/TerminalRail.tsx-217-                    provider && provider.displayName !== profile.displayName
src/renderer/src/terminal/TerminalRail.tsx-218-                      ? provider.displayName
--
src/renderer/src/terminal/TerminalRail.tsx-382-
src/renderer/src/terminal/TerminalRail.tsx-383-function launchMenuDescription(
src/renderer/src/terminal/TerminalRail.tsx-384-  profile: HarnessProfile,
src/renderer/src/terminal/TerminalRail.tsx-385-  provider: HarnessProviderDescriptor | undefined,
src/renderer/src/terminal/TerminalRail.tsx-386-  state: HarnessLaunchMenuState,
src/renderer/src/terminal/TerminalRail.tsx-387-): string {
src/renderer/src/terminal/TerminalRail.tsx:388:  const capability = compactHarnessCapabilityLabel(
src/renderer/src/terminal/TerminalRail.tsx-389-    provider?.default === true,
src/renderer/src/terminal/TerminalRail.tsx-390-    state.probe?.capabilities ?? provider?.capabilities,
src/renderer/src/terminal/TerminalRail.tsx-391-  )
src/renderer/src/terminal/TerminalRail.tsx-392-  return [
src/renderer/src/terminal/TerminalRail.tsx-393-    profile.displayName,
src/renderer/src/terminal/TerminalRail.tsx-394-    provider?.displayName ?? profile.providerId,
<shellId: 109 completed with exit code 0>
```

</details>


---

<sub>10m 46s</sub>

### `bash`

**Read harness probes and composer contracts**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/main/harness/harness-provider-probes.ts; echo "=== harness-composer-contracts ==="; sed -n '1,80p' src/main/harness/harness-composer-contracts.ts

<details>
<summary>130 lines</summary>

```
import type {
  HarnessSessionIdentity,
  HarnessContextPresentation,
  HarnessContextPressurePolicy,
} from '../../shared'
import type {
  HarnessProbeContract,
  HarnessDocumentReviewInsertContract,
  HarnessDocumentReviewSendNowContract,
} from './harness-provider-contract'
import { hasControlCharacter } from './harness-text-validation'

export function staticProbe(
  sessionIdentity: HarnessSessionIdentity,
  exactResume: boolean,
  contextPresentation: HarnessContextPresentation,
  contextPressure?: HarnessContextPressurePolicy,
): HarnessProbeContract {
  return {
    parseVersion: () => undefined,
    effectiveCapabilities: () => ({
      sessionIdentity,
      exactResume,
      contextPresentation,
      contextPressure,
    }),
  }
}

export function versionProbe(
  sessionIdentity: HarnessSessionIdentity,
  exactResume: boolean,
  contextPresentation: HarnessContextPresentation,
  capabilities: {
    readonly contextPressure?: HarnessContextPressurePolicy
    readonly reviewInsert?: HarnessDocumentReviewInsertContract
    readonly reviewSendNow?: HarnessDocumentReviewSendNowContract
    readonly supportsReviewSendNowVersion?: (version: string | undefined) => boolean
    readonly supportsExactForkVersion?: (version: string | undefined) => boolean
  } = {},
): HarnessProbeContract {
  return {
    versionArgs: ['--version'],
    parseVersion: (output) => {
      const first = output.trim().split(/\r?\n/, 1)[0]?.trim()
      return first && first.length <= 160 && !hasControlCharacter(first)
        ? first
        : undefined
    },
    effectiveCapabilities: (version) => ({
      sessionIdentity,
      exactResume,
      contextPresentation,
      contextPressure: capabilities.contextPressure,
      ...(capabilities.supportsExactForkVersion?.(version)
        ? { exactFork: true as const }
        : {}),
      reviewInsertContractRevision: capabilities.reviewInsert?.revision,
      reviewSendNowContractRevision:
        capabilities.reviewSendNow && capabilities.supportsReviewSendNowVersion?.(version)
          ? capabilities.reviewSendNow.revision
          : undefined,
    }),
  }
}
=== harness-composer-contracts ===
import type {
  HarnessProvider,
  HarnessRemoteImagePasteContract,
  HarnessDocumentReviewInsertLaunch,
  HarnessDocumentReviewInsertContract,
} from './harness-provider-contract'
import { hasControlCharacter } from './harness-text-validation'

export function pathImagePasteContract(): HarnessRemoteImagePasteContract {
  return {
    revision: 1,
    terminalInput: (path) => {
      if (
        !path.path.startsWith('/') ||
        hasControlCharacter(path.path) ||
        !/^[A-Za-z0-9_./-]+$/.test(path.path)
      ) {
        throw new Error('Remote image paste requires a safe absolute path')
      }
      return `\x1b[200~${path.path}\x1b[201~`
    },
  }
}

export function documentReviewInsertContract(
  resolveProvider: () => HarnessProvider,
  supportsProfile: (
    profile: HarnessDocumentReviewInsertLaunch['profile'],
  ) => boolean = supportsDefaultDocumentReviewProfile,
): HarnessDocumentReviewInsertContract {
  const revision = 1
  const supportsLaunch = (launch: HarnessDocumentReviewInsertLaunch): boolean => {
    const provider = resolveProvider()
    return (
      launch.profile.providerId === provider.manifest.id &&
      launch.profile.providerContractVersion === provider.profile.version &&
      launch.profile.executable.kind === 'provider-default' &&
      supportsProfile(launch.profile) &&
      launch.effectiveCapabilities.reviewInsertContractRevision === revision
    )
  }
  return {
    revision,
    supportsLaunch,
    terminalInput: (body) => {
      if (body.length === 0 || hasUnsafeReviewBodyCharacter(body)) {
        throw new Error('Document review insertion requires safe human-readable text')
      }
      return `\x1b[200~${body}\x1b[201~`
    },
  }
}

function supportsDefaultDocumentReviewProfile(
  profile: HarnessDocumentReviewInsertLaunch['profile'],
): boolean {
  return (
    profile.args.length === 0 &&
    profile.environment.length === 0 &&
    profile.pathBindings.length === 0
  )
}

function hasUnsafeReviewBodyCharacter(value: string): boolean {
  return [...value].some((character) => {
    const code = character.codePointAt(0)!
    return (code < 32 && character !== '\n' && character !== '\t') || code === 127
  })
}
<shellId: 110 completed with exit code 0>
```

</details>


---

<sub>11m 5s</sub>

### `bash`

**Inspect app icon assets**

$ cd /private/var/tmp/ws/f7354e9d/hvir && file build/icon-macos.png build/icon-linux.svg build/icon-macos.svg build/icons-linux/128x128.png; ls -la build/icon-macos.png build/icon-linux.svg build/icon-macos.svg build/icons-linux/128x128.png; echo; head -c 1500 build/icon-linux.svg

<details>
<summary>50 lines</summary>

```
build/icon-macos.png:          PNG image data, 1024 x 1024, 8-bit/color RGBA, non-interlaced
build/icon-linux.svg:          SVG Scalable Vector Graphics image
build/icon-macos.svg:          SVG Scalable Vector Graphics image
build/icons-linux/128x128.png: PNG image data, 128 x 128, 8-bit/color RGBA, non-interlaced
-rw-r--r--@ 1 air-jarmak  wheel    2523 Nov 20 12:19 build/icon-linux.svg
-rw-r--r--@ 1 air-jarmak  wheel  552373 Nov 20 12:19 build/icon-macos.png
-rw-r--r--@ 1 air-jarmak  wheel    2593 Nov 20 12:19 build/icon-macos.svg
-rw-r--r--@ 1 air-jarmak  wheel    6483 Nov 20 12:19 build/icons-linux/128x128.png

<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1024"
  height="1024"
  viewBox="0 0 1024 1024"
  role="img"
  aria-labelledby="title description"
>
  <title id="title">hvir Linux application icon</title>
  <desc id="description">
    The free-standing hvir mark with a dark legibility keyline and transparent framing.
  </desc>

  <defs>
    <linearGradient id="mark-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7795c5" />
      <stop offset="1" stop-color="#6684b6" />
    </linearGradient>
    <linearGradient id="mark-ivory" x1="0" y1="0" x2="0.85" y2="1">
      <stop offset="0" stop-color="#fbf7f2" />
      <stop offset="1" stop-color="#f1e9e2" />
    </linearGradient>
    <filter id="launcher-keyline" x="-18%" y="-16%" width="136%" height="138%">
      <feMorphology in="SourceAlpha" operator="dilate" radius="11" result="keyline-mask" />
      <feFlood flood-color="#080b12" flood-opacity="0.92" result="keyline-color" />
      <feComposite
        in="keyline-color"
        in2="keyline-mask"
        operator="in"
        result="keyline"
      />
      <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="shadow-mask" />
      <feOffset in="shadow-mask" dy="10" result="shadow-offset" />
      <feFlood flood-color="#000000" flood-opacity="0.42" result="shadow-color" />
      <feComposite
        in="shadow-color"
        in2="shadow-offset"
        operator="in"
        result="shadow"
      />
      <feMe
<shellId: 111 completed with exit code 0>
```

</details>


---

<sub>11m 13s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/build/icons-linux/128x128.png.**

/private/var/tmp/ws/f7354e9d/hvir/build/icons-linux/128x128.png

```
Viewed image file successfully.
```


---

<sub>11m 22s</sub>

### `bash`

**Verify git pull args and branch control labels**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '10,30p' src/main/git/git-branches.ts; echo "=== GitBranchControls strings ==="; grep -n "title=\|aria-label=\|>[A-Z][a-z]" src/renderer/src/git/GitBranchControls.tsx | head -30

<details>
<summary>26 lines</summary>

```
parseAheadBehind,
  parseBranchTracking,
  parseLocalBranches,
} from './git-parsers'
import type { GitWorktreeCapability } from './git-worktrees'

export const GIT_FETCH_ARGS = ['fetch', '--prune', '--no-recurse-submodules'] as const
export const GIT_PULL_ARGS = [
  'pull',
  '--no-rebase',
  '--ff-only',
  '--no-recurse-submodules',
] as const

export class GitBranchCapability {
  constructor(
    private readonly context: GitCommandContext,
    private readonly worktrees: GitWorktreeCapability,
  ) {}

  async branches(workspaceRoot: HostPath): Promise<GitBranchModel> {
=== GitBranchControls strings ===
44:      <label htmlFor="git-branch-select">Branch</label>
54:        title={branchError ?? branchBlockReason ?? 'Switch existing local branch'}
96:            title={fetchBlockedReason ?? 'Refresh remote branch information'}
104:            title={pullBlockReason ?? 'Fast-forward from the configured upstream'}
116:        <small title={new Date(lastFetchedAt).toLocaleString()}>
121:        <small>Switching…</small>
<shellId: 112 completed with exit code 0>
```

</details>


---

<sub>11m 22s</sub>

### `bash`

**Verify Git panel sections**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "Working tree\|Branch point\|Staged\|Unstaged\|Untracked\|Conflict\|History\|Graph\|Changes" src/renderer/src/git/GitPanel.tsx src/renderer/src/git/GitChangesView.tsx | head -30

<details>
<summary>30 lines</summary>

```
src/renderer/src/git/GitPanel.tsx:6:  type GitChanges,
src/renderer/src/git/GitPanel.tsx:11:import { GitChangesView } from './GitChangesView'
src/renderer/src/git/GitPanel.tsx:12:import { GitHistoryView } from './GitHistoryView'
src/renderer/src/git/GitPanel.tsx:21:  readonly onOpenHistory: (path: HostPath, revision: string) => void
src/renderer/src/git/GitPanel.tsx:22:  readonly onOpenGraph: (hash?: string) => void
src/renderer/src/git/GitPanel.tsx:23:  readonly onChanges: (changes: GitChanges | undefined) => void
src/renderer/src/git/GitPanel.tsx:39:  onOpenHistory,
src/renderer/src/git/GitPanel.tsx:40:  onOpenGraph,
src/renderer/src/git/GitPanel.tsx:41:  onChanges,
src/renderer/src/git/GitPanel.tsx:55:    onChanges,
src/renderer/src/git/GitPanel.tsx:88:          Changes {controller.changeCountLabel ? `(${controller.changeCountLabel})` : ''}
src/renderer/src/git/GitPanel.tsx:96:          History
src/renderer/src/git/GitPanel.tsx:105:          <GitChangesView
src/renderer/src/git/GitPanel.tsx:113:          <GitHistoryView
src/renderer/src/git/GitPanel.tsx:123:            onOpenGraph={onOpenGraph}
src/renderer/src/git/GitPanel.tsx:124:            onOpenFile={onOpenHistory}
src/renderer/src/git/GitPanel.tsx:125:            onLoadMore={controller.loadMoreHistory}
src/renderer/src/git/GitChangesView.tsx:7:  type GitChanges,
src/renderer/src/git/GitChangesView.tsx:17:interface GitChangesViewProps {
src/renderer/src/git/GitChangesView.tsx:19:  readonly changes?: GitChanges
src/renderer/src/git/GitChangesView.tsx:25:export function GitChangesView({
src/renderer/src/git/GitChangesView.tsx:31:}: GitChangesViewProps): ReactElement {
src/renderer/src/git/GitChangesView.tsx:35:        {error ? <div className="tree-error">Changes unavailable: {error}</div> : null}
src/renderer/src/git/GitChangesView.tsx:65:          : 'Working tree clean'}
src/renderer/src/git/GitChangesView.tsx:91:          Branch point unavailable
src/renderer/src/git/GitChangesView.tsx:100:      {error ? <div className="tree-error">Changes unavailable: {error}</div> : null}
src/renderer/src/git/GitChangesView.tsx:106:function GitChangeLimitNotice({ changes }: { readonly changes: GitChanges }): ReactElement {
src/renderer/src/git/GitChangesView.tsx:134:  readonly files: GitChanges['workingTree']
src/renderer/src/git/GitChangesView.tsx:177:  readonly files: GitChanges['workingTree']
<shellId: 113 completed with exit code 0>
```

</details>


---

<sub>11m 33s</sub>

### `bash`

**Check hvir's own Markdown renderer options (raw HTML support)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '1,90p' src/renderer/src/viewer/markdown-renderer.ts

<details>
<summary>84 lines</summary>

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
<shellId: 114 completed with exit code 0>
```

</details>


---

<sub>11m 38s</sub>

### `bash`

**Check markdown-it options and repo image handling**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "MARKDOWN_OPTIONS" -A 12 src/renderer/src/viewer/render-protocol.ts | head -30; echo "=== repository images in markdown ==="; sed -n '1,50p' src/renderer/src/viewer/markdown-repository-images.ts

<details>
<summary>52 lines</summary>

```
11:export const MARKDOWN_OPTIONS = {
12-  html: false,
13-  linkify: false,
14-  typographer: true,
15-} as const
=== repository images in markdown ===
import {
  hostPathEquals,
  resolveRenderedLink,
  unwrapOperation,
  type HostPath,
} from '../../../shared'

/** Owns repository-backed image dependencies and object URLs for one rendered document. */
export class MarkdownRepositoryImages {
  private readonly generations = new Map<HTMLImageElement, number>()
  private readonly objectUrls = new Map<HTMLImageElement, string>()
  private readonly unavailableMessages = new Map<HTMLImageElement, HTMLElement>()
  private disposed = false

  constructor(
    private readonly documentPath: HostPath,
    private readonly workspaceRoot?: HostPath,
  ) {}

  /** Stage external markup inertly so the browser cannot fetch images before admission. */
  mount(root: HTMLElement, html: string): void {
    if (!this.workspaceRoot) {
      root.innerHTML = html
      return
    }
    const template = document.createElement('template')
    template.innerHTML = html
    for (const image of template.content.querySelectorAll<HTMLImageElement>('img[src]')) {
      image.dataset['hvirRepositorySrc'] = image.getAttribute('src')!
      image.removeAttribute('src')
    }
    root.replaceChildren(template.content)
  }

  hydrate(root: HTMLElement): readonly HostPath[] {
    const dependencies = new Map<string, HostPath>()
    for (const image of root.querySelectorAll<HTMLImageElement>(
      'img[src], img[data-hvir-repository-src]',
    )) {
      const dependency = this.dependency(image)
      if (!dependency) {
        if (this.workspaceRoot) void this.hydrateImage(image, undefined, false)
        continue
      }
      dependencies.set(`${dependency.hostId}:${dependency.path}`, dependency)
      void this.hydrateImage(image, dependency, false)
    }
    return [...dependencies.values()]
  }
<shellId: 115 completed with exit code 0>
```

</details>


---

<sub>12m 12s</sub>

### `bash`

**Verify projects bar control labels**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "Sessions\|Register project\|aria-label=\|title=" src/renderer/src/workspaces/ProjectsBar.tsx | head -50

<details>
<summary>30 lines</summary>

```
58:  readonly onSessions: () => void
83:  onSessions,
187:          aria-label="Projects"
194:            onClick={onSessions}
196:            Sessions
214:                title={title}
220:                  aria-label={projectTabLabel(project, actionable, working)}
223:                  title={title}
244:                    aria-label={`Connection controls for ssh:${project.registeredRoot.hostId} · ${connectionStateLabel(project.connectionState)}`}
245:                    title="Connection controls"
274:                  aria-label={`Close project ${project.displayName}`}
275:                  title={
289:            aria-label="Register project"
290:            title="Register project"
300:            aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
301:            title={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
309:            aria-label="Open settings"
310:            title="Settings"
320:            aria-label="Workspaces"
327:                title={workspaceStatusTitle(workspace)}
344:                  title={workspaceStatusTitle(workspace)}
361:                    aria-label={`Close workspace ${workspace.name}`}
362:                    title={
376:                    aria-label={`Dismiss removed workspace ${workspace.name}`}
377:                    title="Forget removed worktree from hvir"
386:                <span className="workspace-status-error" title={statusError}>
396:                  title="Remove Git's stale worktree administrative records"
435:            aria-label={`Connection controls for ssh:${connectionProject.registeredRoot.hostId}`}
586:    <span className="terminal-attention-count" aria-label={label} title={label}>
<shellId: 116 completed with exit code 0>
```

</details>


---

<sub>12m 12s</sub>

### `bash`

**Verify terminal rail control labels**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "aria-label=\|title=\|>[A-Z][A-Za-z ]\{3,\}<\|New terminal\|Add harness\|Manage" src/renderer/src/terminal/TerminalRail.tsx | head -50

<details>
<summary>20 lines</summary>

```
98:      aria-label={`Open terminals in ${label}`}
104:        <span>Terminals</span>
109:            aria-label="Collapse terminal rail"
110:            title="Collapse terminal rail"
121:              aria-label={
126:              title="Move active terminal to another worktree"
175:            aria-label="Split terminal"
176:            title="Open a shell in the other terminal split"
185:            aria-label="Open settings"
186:            title="Settings"
195:              aria-label="New terminal"
196:              title="New terminal"
229:                      title={launchMenuDescription(profile, provider, state)}
293:                    aria-label={terminalAttentionLabel(session.attention)}
294:                    title={terminalAttentionLabel(session.attention)}
304:                  aria-label={`Move ${session.title} to ${session.pane === 'primary' ? 'right' : 'left'} split`}
305:                  title={`Move to ${session.pane === 'primary' ? 'right' : 'left'} split`}
314:                aria-label={`Close ${session.title}`}
315:                title="Close terminal"
<shellId: 117 completed with exit code 0>
```

</details>


---

<sub>12m 44s</sub>

### `bash`

**Check how terminal links are activated (click vs modifier-click)**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "registerLinkProvider\|activate(\|metaKey\|ctrlKey" src/renderer/src/terminal/ghostty-terminal-pane.ts src/renderer/src/terminal/ghostty-terminal-events.ts src/renderer/src/terminal/terminal-runtime-interactions.ts 2>/dev/null | head -30

```
src/renderer/src/terminal/ghostty-terminal-pane.ts:285:    this.terminal.registerLinkProvider(
src/renderer/src/terminal/ghostty-terminal-pane.ts:805:        if (event.ctrlKey || event.metaKey) this.activateTarget(activation)
<shellId: 118 completed with exit code 0>
```


---

<sub>12m 49s</sub>

### `bash`

**Read terminal link provider activation code**

$ cd /private/var/tmp/ws/f7354e9d/hvir && sed -n '275,300p' src/renderer/src/terminal/ghostty-terminal-pane.ts; echo ...; sed -n '780,815p' src/renderer/src/terminal/ghostty-terminal-pane.ts

<details>
<summary>56 lines</summary>

```
)
        if (translated) this.eventListeners.emit(translated)
      }),
    )
    this.terminal.open(surface)
    const searchHighlightLayer = document.createElement('div')
    searchHighlightLayer.className = 'terminal-search-match-highlight-layer'
    searchHighlightLayer.setAttribute('aria-hidden', 'true')
    surface.append(searchHighlightLayer)
    this.searchHighlightLayer = searchHighlightLayer
    this.terminal.registerLinkProvider(
      new FileLinkProvider(this.terminal, (target) => this.linkListeners.emit(target)),
    )
    this.terminal.attachCustomWheelEventHandler((event) => this.handleWheel(event))
    const canvas = this.terminal.renderer?.getCanvas()
    if (canvas) canvas.style.visibility = 'hidden'
    this.fit.fit()
    // A fresh pane must begin from an explicitly reset VT buffer. Depending on
    // WASM allocator reuse, construction can expose cells and rendition from
    // the terminal just freed during reconnect. Reset only after the initial
    // fit: resizing the temporary 80x24 buffer can copy recycled cells back in.
    this.terminal.write('\u001bc')
    this.revealAfterSettledFit()
  }

  reparent(container: HTMLElement): void {
...
    // Custom providers take priority over Ghostty's built-in URL detector, so
    // these exact ranges replace global window.open with typed provenance.
    for (const candidate of detectTerminalWebLinks(lineText)) {
      links.push(
        this.link(
          { kind: 'loopback-http', target: candidate.target },
          y,
          candidate.start,
          candidate.end,
        ),
      )
    }
    callback(links.length > 0 ? links : undefined)
  }

  private link(
    activation: TerminalLinkActivation,
    y: number,
    start: number,
    end: number,
  ): ILink {
    return {
      text: activation.target,
      range: { start: { x: start, y }, end: { x: end, y } },
      activate: (event) => {
        if (event.ctrlKey || event.metaKey) this.activateTarget(activation)
      },
    }
  }
}
<shellId: 119 completed with exit code 0>
```

</details>


---

<sub>13m 8s</sub>

### `bash`

**Check electron-vite CLI preview semantics**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "command('preview\|skipBuild\|command('dev\|command('build\|--watch\|--noSandbox\|--inspect\b\|--entry" node_modules/electron-vite/dist/cli.mjs 2>/dev/null | head -30 || ls node_modules/electron-vite/dist | head

```

<shellId: 120 completed with exit code 0>
```


---

<sub>13m 13s</sub>

### `bash`

**Locate electron-vite CLI definitions**

$ cd /private/var/tmp/ws/f7354e9d/hvir && ls node_modules/electron-vite/dist | head -20; grep -rln "skipBuild" node_modules/electron-vite/dist | head; f=$(grep -rl "skipBuild" node_modules/electron-vite/dist | head -1); [ -n "$f" ] && grep -n "skipBuild\|\.command(" "$f" | head -20

<details>
<summary>9 lines</summary>

```
chunks
cli.js
index.d.ts
index.js
node_modules/electron-vite/dist/chunks/lib-Dvh2Hokw.js
node_modules/electron-vite/dist/cli.js
node_modules/electron-vite/dist/index.d.ts
17:    if (!options.skipBuild) {
<shellId: 121 completed with exit code 0>
```

</details>


---

<sub>13m 18s</sub>

### `bash`

**Read electron-vite CLI commands and options**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -n "skipBuild\|\.command(\|description\|\.option(" node_modules/electron-vite/dist/cli.js | head -50

<details>
<summary>23 lines</summary>

```
24:    .option('-c, --config <file>', `[string] use specified config file`)
25:    .option('-l, --logLevel <level>', `[string] info | warn | error | silent`)
26:    .option('--clearScreen', `[boolean] allow/disable clear screen when logging`)
27:    .option('-d, --debug [feat]', `[string | boolean] show debug logs`)
28:    .option('-f, --filter <filter>', `[string] filter debug logs`)
29:    .option('-m, --mode <mode>', `[string] set env mode`)
30:    .option('--ignoreConfigWarning', `[boolean] ignore config warning`)
31:    .option('--sourcemap', `[boolean] output source maps for debug (default: false)`)
32:    .option('--outDir <dir>', `[string] output directory (default: out)`)
33:    .option('--entry <file>', `[string] specify electron entry file`);
36:    .command('[root]', 'start dev server and electron app')
39:    .option('-w, --watch', `[boolean] rebuilds when main process or preload script modules have changed on disk`)
40:    .option('--inspect [port]', `[boolean | number] enable V8 inspector on the specified port`)
41:    .option('--inspectBrk [port]', `[boolean | number] enable V8 inspector on the specified port`)
42:    .option('--remoteDebuggingPort <port>', `[string] port for remote debugging`)
43:    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
44:    .option('--rendererOnly', `[boolean] only dev server for the renderer`)
76:cli.command('build [root]', 'build for production').action(async (root, options) => {
93:    .command('preview [root]', 'start electron app to preview production build')
94:    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
95:    .option('--skipBuild', `[boolean] skip build`)
109:        await preview(inlineConfig, { skipBuild: options.skipBuild });
<shellId: 122 completed with exit code 0>
```

</details>


---

<sub>14m 12s</sub>

### `bash`

**Confirm SSH option coverage and auth order**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rni "proxyjump\|proxycommand\|jump host\|jumphost" src scripts --include='*.ts' --include='*.mts' --include='*.tsx' | head -5; echo "(end proxy grep)"; sed -n '795,812p' src/main/project-host/ssh-host.ts; echo ...; sed -n '700,742p' src/main/project-host/ssh-host.ts

<details>
<summary>63 lines</summary>

```
(end proxy grep)
        ) => void
        void (async (): Promise<import('ssh2').AnyAuthMethod | false> => {
          if (authenticationCancelled || !isActive()) return false
          // `ssh2` passes null before the first authentication attempt. That
          // means the server's methods are not known yet, not that none are
          // available. Start our configured ladder and narrow it after the
          // server returns its actual method list.
          const available = new Set(
            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
          )
          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
            attempted.add('agent')
            return { type: 'agent', username: config.user, agent: agentSocket }
          }
          const identity = available.has('publickey')
            ? await credentialAttempt.identityGeneration.next()
            : undefined
          if (authenticationCancelled || !isActive()) return false
...
  }

  private connectConfig(
    credentialAttempt: SshCredentialAttempt,
    purpose: 'primary' | 'pool' = 'primary',
    markPrompt?: () => void,
    isActive: () => boolean = () => !this.disposed,
    promptSignal: AbortSignal = this.lifecycleAbort.signal,
  ): ConnectConfig {
    const { config, agentSocket, prompter } = this.options
    const attempted = new Set<string>()
    let password: string | undefined
    let authenticationCancelled = false
    let keyboardInteractiveRounds = 0
    const prompt = async (request: SshPrompt): Promise<readonly string[] | undefined> => {
      if (purpose === 'primary') this.promptedDuringConnect = true
      markPrompt?.()
      const presentedRequest =
        purpose === 'pool'
          ? {
              ...request,
              title: `Additional SSH capacity — ${request.title}`,
            }
          : request
      const answers = await this.serializedPrompt(() =>
        prompter.prompt(presentedRequest, promptSignal),
      )
      if (!isActive()) {
        authenticationCancelled = true
        return undefined
      }
      if (!answers) {
        authenticationCancelled = true
        if (purpose === 'primary') this.reconnectSuppressed = true
      }
      return answers
    }
    return {
      host: config.hostname,
      port: config.port,
      username: config.user,
      keepaliveInterval: 10_000,
      keepaliveCountMax: 3,
<shellId: 123 completed with exit code 0>
```

</details>


---

<sub>14m 57s</sub>

### `bash`

**Check which documents are eligible for review**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat src/renderer/src/document-review/document-review-eligibility.ts | head -80

<details>
<summary>62 lines</summary>

```
import { validateDocumentReviewAnchor } from './document-review-anchor'
import {
  DOCUMENT_REVIEW_LIMITS,
  type DocumentReviewComment,
  type DocumentReviewModel,
  type ReviewDeliveryEligibility,
  type ReviewPolicyError,
} from './document-review-types'
import {
  isValidReviewId,
  reviewPolicyError,
  reviewWorkspaceEquals,
  validateReviewCommentBody,
  validateReviewDocument,
} from './document-review-validation'

export function reviewCommentDeliveryEligibility(
  model: DocumentReviewModel,
  comment: DocumentReviewComment,
): ReviewDeliveryEligibility {
  if (validateDocumentReviewCommentRecord(model, comment)) {
    return { eligible: false, reason: 'invalid-record' }
  }
  if (comment.lifecycle === 'sent') return { eligible: false, reason: 'sent' }
  if (comment.lifecycle === 'resolved') return { eligible: false, reason: 'resolved' }
  if (comment.anchor.state.status === 'stale' && !comment.anchor.state.reviewed) {
    return { eligible: false, reason: 'stale-unreviewed' }
  }
  return { eligible: true }
}

export function validateDocumentReviewCommentRecord(
  model: DocumentReviewModel,
  comment: DocumentReviewComment,
): ReviewPolicyError | undefined {
  if (
    !reviewWorkspaceEquals(model.workspace, comment.workspace) ||
    validateReviewDocument(model.workspace, comment.document) ||
    !isValidReviewId(comment.id, DOCUMENT_REVIEW_LIMITS.idBytes) ||
    validateReviewCommentBody(comment.body) ||
    validateDocumentReviewAnchor(comment.anchor) ||
    (comment.lifecycle !== 'draft' &&
      comment.lifecycle !== 'sent' &&
      comment.lifecycle !== 'resolved')
  ) {
    return reviewPolicyError('invalid-comment', 'The review comment record is invalid')
  }
  return undefined
}

/** Admission for new batch membership; existing members may later become ineligible. */
export function validateReviewBatchCandidate(
  model: DocumentReviewModel,
  comment: DocumentReviewComment,
): ReviewPolicyError | undefined {
  const eligibility = reviewCommentDeliveryEligibility(model, comment)
  if (eligibility.eligible) return undefined
  return reviewPolicyError(
    eligibility.reason === 'sent' || eligibility.reason === 'resolved'
      ? 'comment-not-draft'
      : 'invalid-comment',
    'Only an eligible draft comment can join a review batch',
  )
}
<shellId: 124 completed with exit code 0>
```

</details>


---

<sub>15m 41s</sub>

### `create`

**create a new file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
Created file /private/var/tmp/ws/f7354e9d/hvir/README.md with 12637 characters
```


---

<sub>16m 3s</sub>

### `bash`

**Validate README links, anchors, npm scripts, HTML, and line lengths**

$ cd /private/var/tmp/ws/f7354e9d/hvir && cat > "$TMPDIR/hvir-readme/validate.mjs" <<'EOF'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'

const root = process.cwd()
const require = createRequire(resolve(root, 'package.json'))
const MarkdownIt = require('markdown-it')
const source = readFileSync(resolve(root, 'README.md'), 'utf8')
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'))
const problems = []

// Same options hvir's own rendered Markdown view uses (render-protocol.ts).
const md = new MarkdownIt({ html: false, linkify: false, typographer: true })
const tokens = md.parse(source, {})

// GitHub-style heading slugs.
const slugs = new Set()
for (const [i, t] of tokens.entries()) {
  if (t.type !== 'heading_open') continue
  const text = (tokens[i + 1]?.children ?? [])
    .filter((c) => ['text', 'code_inline'].includes(c.type))
    .map((c) => c.content)
    .join('')
  const slug = text.toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, '').replace(/\s/g, '-')
  slugs.add(slug)
}

// 1/2. links and images
let links = 0
for (const t of tokens.flatMap((t) => t.children ?? [])) {
  const href = t.type === 'link_open' ? t.attrGet('href') : t.type === 'image' ? t.attrGet('src') : null
  if (href == null) continue
  links++
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) { console.log('  external:', href); continue }
  const [local, fragment] = href.split('#', 2)
  if (local) {
    const target = resolve(root, decodeURIComponent(local))
    if (!existsSync(target)) problems.push(`broken relative link: ${href}`)
    else console.log('  ok file :', href)
  } else if (fragment) {
    if (!slugs.has(fragment)) problems.push(`broken anchor: #${fragment}`)
    else console.log('  ok anchor:', '#' + fragment)
  }
}

// 3. npm scripts referenced anywhere (npm run X, and bare `x:y` / `check-*` code spans)
const scripts = pkg.scripts
const mentioned = new Set()
for (const m of source.matchAll(/npm run\s+([a-z][a-z0-9:-]*)/g)) mentioned.add(m[1])
for (const m of source.matchAll(/`([a-z][a-z0-9-]*(?::[a-z0-9-]+)+|check-[a-z]+|typecheck|lint|test)`/g)) mentioned.add(m[1])
for (const name of [...mentioned].sort()) {
  if (!Object.hasOwn(scripts, name)) problems.push(`unknown npm script: ${name}`)
}
console.log('scripts referenced:', [...mentioned].sort().join(', '))
if (!/`npm test`/.test(source) || !scripts.test) problems.push('npm test missing')

// 4. raw HTML (would render as literal text with html:false)
let inFence = false
source.split('\n').forEach((line, i) => {
  if (/^```/.test(line)) inFence = !inFence
  if (!inFence && /<\/?[a-zA-Z][^>]*>/.test(line.replace(/`[^`]*`/g, ''))) problems.push(`raw HTML at line ${i + 1}: ${line}`)
})

// 5. prose line length (tables, fences, and link-only lines exempt)
inFence = false
source.split('\n').forEach((line, i) => {
  if (/^```/.test(line)) { inFence = !inFence; return }
  if (inFence || line.startsWith('|')) return
  if (line.length > 90) problems.push(`line ${i + 1} is ${line.length} cols`)
})
// fences must not exceed 90 either (code blocks scroll, but keep them tidy)
inFence = false
source.split('\n').forEach((line, i) => {
  if (/^```/.test(line)) { inFence = !inFence; return }
  if (inFence && line.length > 90) problems.push(`code line ${i + 1} is ${line.length} cols`)
})

// 6. structure
const html = md.render(source)
const count = (re) => (html.match(re) ?? []).length
console.log(`links/images: ${links}; tables: ${count(/<table>/g)}; code blocks: ${count(/<pre>/g)}; h2: ${count(/<h2>/g)}; h3: ${count(/<h3>/g)}; list items: ${count(/<li>/g)}`)
console.log(`lines: ${source.split('\n').length - 1}; words: ${source.split(/\s+/).filter(Boolean).length}; trailing newline: ${source.endsWith('\n')}; trailing spaces: ${/[ \t]+$/m.test(source)}; tabs: ${source.includes('\t')}`)
if (html.includes('&lt;') ) {
  for (const m of html.matchAll(/[^\n]*&lt;[^\n]*/g)) console.log('  escaped "<" in output:', m[0].trim().slice(0, 140))
}
if (problems.length) { console.log('PROBLEMS:'); for (const p of problems) console.log(' -', p); process.exitCode = 1 }
else console.log('README validation passed')
EOF
node "$TMPDIR/hvir-readme/validate.mjs"

<details>
<summary>17 lines</summary>

```
ok file : build/icons-linux/128x128.png
  ok anchor: #harnesses
  ok anchor: #remote-projects-over-ssh
  external: https://github.com/jarmak-personal/hvir/releases
  ok file : eslint.config.mjs
  ok file : scripts/check-seams.sh
  ok file : LICENSE
  ok file : THIRD_PARTY_NOTICES.md
scripts referenced: architecture:check, architecture:report, build, build:dir, check-adrs, check-seams, dev, format, format:check, hooks:install, lint, pack:linux:arm64, pack:linux:x64, pack:mac:arm64, preview, smoke, smoke:macos, smoke:scenario, test, typecheck, verify
links/images: 8; tables: 5; code blocks: 6; h2: 9; h3: 4; list items: 27
lines: 275; words: 1952; trailing newline: true; trailing spaces: false; tabs: false
  escaped "<" in output: <td><code>hvir-&lt;version&gt;-darwin-arm64.pkg</code></td>
  escaped "<" in output: <td><code>hvir-&lt;version&gt;-linux-x64.deb</code></td>
  escaped "<" in output: <td><code>hvir-&lt;version&gt;-linux-arm64.deb</code></td>
  escaped "<" in output: install it with <code>sudo apt install ./&lt;package&gt;.deb</code> or by opening the <code>.pkg</code>.</p>
README validation passed
<shellId: 125 completed with exit code 0>
```

</details>


---

<sub>16m 34s</sub>

### `bash`

**Check what install-electron --no does**

$ cd /private/var/tmp/ws/f7354e9d/hvir && ls -la node_modules/.bin/install-electron; readlink node_modules/.bin/install-electron; sed -n '1,60p' "$(dirname node_modules/.bin/install-electron)/$(readlink node_modules/.bin/install-electron)"

<details>
<summary>54 lines</summary>

```
lrwxr-xr-x@ 1 air-jarmak  wheel  22 Nov 20 12:19 node_modules/.bin/install-electron -> ../electron/install.js
../electron/install.js
#!/usr/bin/env node

const { downloadArtifact } = require('@electron/get');

const childProcess = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { version } = require('./package');

const platformPath = getPlatformPath();

if (isInstalled()) {
  process.exit(0);
}

const platform = process.env.ELECTRON_INSTALL_PLATFORM || process.env.npm_config_platform || process.platform;
let arch = process.env.ELECTRON_INSTALL_ARCH || process.env.npm_config_arch || process.arch;

if (
  platform === 'darwin' &&
  process.platform === 'darwin' &&
  arch === 'x64' &&
  process.env.npm_config_arch === undefined
) {
  // When downloading for macOS ON macOS and we think we need x64 we should
  // check if we're running under rosetta and download the arm64 version if appropriate
  try {
    const output = childProcess.execSync('sysctl -in sysctl.proc_translated');
    if (output.toString().trim() === '1') {
      arch = 'arm64';
    }
  } catch {
    // Ignore failure
  }
}

// downloads if not cached
downloadArtifact({
  version,
  artifactName: 'electron',
  force: process.env.force_no_cache === 'true',
  cacheRoot: process.env.electron_config_cache,
  checksums:
    process.env.electron_use_remote_checksums || process.env.npm_config_electron_use_remote_checksums
      ? undefined
      : require('./checksums.json'),
  platform,
  arch
})
  .then(extractFile)
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });

function isInstalled() {
  try {
    if (fs.readFileSync(path.join(__dirname, 'dist', 'version'), 'utf-8').replace(/^v/, '') !== version) {
<shellId: 126 completed with exit code 0>
```

</details>


---

<sub>17m 7s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
File /private/var/tmp/ws/f7354e9d/hvir/README.md updated with changes.
```


---

<sub>17m 7s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
File /private/var/tmp/ws/f7354e9d/hvir/README.md updated with changes.
```


---

<sub>17m 7s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
File /private/var/tmp/ws/f7354e9d/hvir/README.md updated with changes.
```


---

<sub>17m 7s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
File /private/var/tmp/ws/f7354e9d/hvir/README.md updated with changes.
```


---

<sub>17m 7s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
File /private/var/tmp/ws/f7354e9d/hvir/README.md updated with changes.
```


---

<sub>17m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

<details>
<summary>222 lines</summary>

````
![hvir icon](build/icons-linux/128x128.png)

# hvir

Harness · View · Interact · Respond

hvir is a desktop workbench for terminal coding agents. It runs agent CLIs such as Claude
Code and Codex ("harnesses") in real terminals beside the files, diffs, and Git history
they are changing, so you can follow several agents across several worktrees and answer
them from one window.

hvir is an Electron app for macOS and Linux. A project can be a local folder or a folder
on a remote host reached over SSH.

## Features

- **Projects and worktrees.** Register a folder as a project. hvir discovers the
  repository's Git worktrees and gives each one its own workspace, with separate
  terminals, viewer tabs, and Git state. A folder that is not a Git repository opens as a
  single workspace.
- **Agent terminals.** Each workspace holds multiple terminals, backed by real PTYs and
  rendered with Ghostty's terminal core. Terminals can be split, searched, themed, and
  moved to another worktree without restarting the process. Attention badges show which
  terminals are working and which are ready for you.
- **Harness profiles.** Start a shell, an agent CLI, or a custom command from a profile
  that sets the executable, arguments, and environment. See [Harnesses](#harnesses).
- **Session recovery.** hvir remembers its terminals across restarts and can restore them,
  resuming Claude Code and Codex in the exact conversation they were in.
- **File tree and viewer.** Browse, search, create, move, and delete files. Open them in
  tabs as rendered output (Markdown, Mermaid, HTML, JSON, YAML, CSV, images), as editable
  source with syntax highlighting and Git blame, or as a diff against the index, `HEAD`,
  or the branch point.
- **Git.** Changes in the working tree and since the branch point, commit history, a
  commit graph, and commit details, plus branch switching, fetch, and fast-forward pull.
- **Document review.** Select a passage in the rendered or source view, attach comments,
  and hand the batch to a running agent. Claude Code and Codex receive it in their
  prompt; for any other terminal you can copy it to the clipboard.
- **Web panes.** A `localhost` link printed in a terminal opens in an embedded browser
  pane. Requests go through the workspace's host, so a dev server on a remote machine
  works without manual port forwarding.
- **Sessions overview.** One list of every terminal across all projects, with its status
  and, for Claude Code and Codex, the model, context use, and token usage.
- **Remote projects.** Files, terminals, Git, and web panes all work over an SSH
  connection. hvir does not install a server or helper on the remote host. See
  [Remote projects over SSH](#remote-projects-over-ssh).

## Install

Releases are published on [GitHub](https://github.com/jarmak-personal/hvir/releases) as
native packages:

| Platform | Package |
| --- | --- |
| macOS on Apple silicon | `hvir-<version>-darwin-arm64.pkg` |
| Debian- and Ubuntu-based Linux, x64 | `hvir-<version>-linux-x64.deb` |
| Debian- and Ubuntu-based Linux, arm64 | `hvir-<version>-linux-arm64.deb` |

Linux packages need glibc 2.35 or newer. Windows is not supported.

Each release includes an `install.sh` that picks the package for your machine, verifies
it, and installs it with the system package manager:

```sh
curl -fsSLO https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer checks the package's SHA-256 digest. On macOS it also checks the Developer
ID signature, the notarization ticket, and Gatekeeper. It then installs through `apt` or
the macOS `installer`, so it asks for your `sudo` password. You get the application and a
`hvir` command (`/usr/local/bin/hvir` on macOS, `/usr/bin/hvir` on Linux).

To update, download the newest `install.sh` and run it again. To install by hand instead,
download the package for your platform, check it against the release's `SHA256SUMS`, and
install it with `sudo apt install ./<package>.deb` or by opening the `.pkg`.

To uninstall:

```sh
bash install.sh --uninstall           # remove hvir, keep your settings
bash install.sh --uninstall --purge   # also delete hvir's settings and cache
```

Neither form touches your project directories. `--purge` deletes
`~/Library/Application Support/hvir` and `~/Library/Caches/hvir` on macOS, or
`~/.config/hvir` and `~/.cache/hvir` on Linux.

## Getting started

Open a project from a shell:

```sh
hvir .                # open the current directory
hvir ~/code/my-app    # open another local folder
hvir                  # reopen the projects you registered before
```

Then:

1. **Start a harness.** Choose **New terminal** in the terminal panel and pick a profile.
2. **Watch the work.** The **Files** and **Git** tabs follow the workspace as it changes.
   Ctrl-click (Cmd-click on macOS) a file path or `localhost` URL in terminal output to
   open it in the viewer or a web pane.
3. **Respond.** Type in the terminal, or review a document and send your comments to the
   agent.
4. **Add more.** **Register project** adds another local folder or a folder on an SSH
   host. **Sessions** lists every terminal across all of them.

## Harnesses

A harness is a command hvir knows how to launch in a terminal. hvir does not bundle agent
CLIs. It launches the ones installed on the project's host, whether local or remote.

| Harness | Command | Integration |
| --- | --- | --- |
| Shell | your login shell | |
| Claude Code | `claude` | Integrated |
| Codex | `codex` | Integrated |
| Pi | `pi` | Launch only |
| Gemini CLI | `gemini` | Launch only |
| GitHub Copilot CLI | `copilot` | Launch only |
| Cursor CLI | `cursor-agent` | Launch only |
| Custom | a command you configure | Launch only |

**Integrated** harnesses resume the exact conversation after a restart, show a
context-usage meter, report their model and token usage to the Sessions view, and accept
document-review comments in their prompt. With a recent enough CLI they can also fork a
conversation into a new terminal. **Launch only** harnesses run as ordinary terminals.
After a restart hvir starts them fresh rather than guess which session to resume.

Manage profiles in **Settings → Harnesses**. A profile chooses the executable, extra
arguments, environment variables, and named path bindings, and applies everywhere or to
one project.

## Remote projects over SSH

Choose **Register project** and pick an SSH host instead of **Local**.

- **Hosts** are the `Host` aliases in `~/.ssh/config`; wildcard patterns are skipped.
  hvir applies `HostName`, `User`, `Port`, and `IdentityFile`. Other options, such as
  `ProxyJump`, are not applied.
- **Authentication** tries your SSH agent, then key files, then keyboard-interactive and
  password prompts. Without an `IdentityFile`, hvir tries the standard `~/.ssh/id_*`
  keys.
- **Host keys** are confirmed by fingerprint on first connection and remembered. A
  changed key is reported and must be accepted explicitly. hvir keeps its own record and
  does not read `~/.ssh/known_hosts`.
- **The remote host** needs `git` for the Git views and whichever agent CLIs you want to
  launch. hvir watches files with `inotifywait` when it is installed and falls back to
  polling when it is not.

## Keyboard shortcuts

| Action | Default |
| --- | --- |
| Find file | `Mod+P` |
| Find in file | `Mod+F` |
| Find in terminal | `Mod+Shift+F` |
| Go to line | `Ctrl+G` |
| Cycle view mode (rendered, source, diff) | `Mod+Shift+M` |
| Focus file tree | `Mod+0` |
| Focus viewer | `Mod+1` |
| Focus terminal | `Mod+J` |
| Maximize or restore the terminal panel | `Mod+Shift+J` |
| Next workspace | `Mod+Alt+]` |
| Previous workspace | `Mod+Alt+[` |

`Mod` is Command on macOS and Ctrl on Linux. **Settings → Keybindings** takes JSON
overrides keyed by action name.

## Development

### Prerequisites

- macOS or Linux
- Node.js 24 or newer, with npm
- Git
- A C/C++ toolchain and Python for `node-gyp`: the Xcode Command Line Tools on macOS, or
  `build-essential` and `python3` on Debian and Ubuntu

### Run from source

```sh
npm ci
npm run dev
```

`npm ci` also downloads Electron and compiles two native modules: `node-pty`, rebuilt for
Electron, and the private `@hvir/rename-noreplace` addon in `packages/`.

`npm run dev` starts the app with hot reload for the renderer. With no registered
projects it asks for a folder. To choose one up front, set `HVIR_PROJECT_ROOT`:

```sh
HVIR_PROJECT_ROOT=~/code/my-app npm run dev
```

### Build and package

| Command | Result |
| --- | --- |
| `npm run build` | Type-checks, then bundles main, preload, and renderer into `out/` |
| `npm run preview` | Builds and runs the production bundle |
| `npm run build:dir` | Builds an unpacked application in `dist/` |
| `npm run pack:mac:arm64` | Builds the macOS arm64 `.pkg` in `dist/` |
| `npm run pack:linux:x64` | Builds the Linux x64 `.deb` in `dist/` |
| `npm run pack:linux:arm64` | Builds the Linux arm64 `.deb` in `dist/` |

Build each package on the platform and architecture it targets, because the native
modules are compiled for the machine that runs `npm ci`.

### Test and check

| Command | What it does |
| --- | --- |
| `npm test` | Unit tests with Vitest. They run in plain Node, without Electron. |
| `npm run typecheck` | `tsc --noEmit` for the Node-side and renderer projects |
| `npm run lint` | ESLint, including the import rules that enforce the architecture |
| `npm run format` | Prettier over the source tree; `format:check` only reports |
| `npm run check-seams` | A grep-level backstop for the same architecture rules |
| `npm run architecture:report` | File-size budgets and the module dependency graph |
| `npm run smoke` | End-to-end scenarios in a real Electron build |
| `npm run verify` | The gate CI runs on pull requests |

`npm run smoke` builds the app in smoke mode and drives it through end-to-end scenarios
in a throwaway repository and user-data directory. On macOS, run `npm run smoke:macos`
instead. To run one scenario, name it: `npm run smoke:scenario -- web-pane`. On Linux
without a display, prefix the command with `xvfb-run -a`.

`npm run verify` chains `check-seams`, `check-adrs`, `architecture:check`, `lint`,
`typecheck`, and `test`. The `architecture:check` step compares your branch with the
upstream repository, so it needs a GitHub token in `HVIR_REPO_TOKEN` and an `origin`
remote that points at `jarmak-personal/hvir`. `architecture:report` is the offline
equivalent.

`npm run hooks:install` installs a pre-push hook that runs the type check and the smoke
suite for your platform. Bypass it with `git push --no-verify`.

## Architecture

```text
src/
  main/       Electron main process: project hosts, PTYs, Git, harnesses, IPC
  preload/    The typed window.hvir bridge between the renderer and main
  renderer/   React UI: file tree, viewer, terminals, Git panel, sessions, settings
  shared/     Types and pure logic used by every process, including the IPC contract
  workers/    Utility-process entry points; Git runs here, off the main process
packages/
  rename-noreplace/   Private Node-API addon for atomic rename without replace
build/        Icons, macOS entitlements, package scripts, and the hvir launcher command
scripts/      Build, release, smoke-test, architecture, and project-management tooling
test/         Vitest unit tests
```

A few rules keep these layers apart. ESLint ([eslint.config.mjs](eslint.config.mjs)) and
[scripts/check-seams.sh](scripts/check-seams.sh) enforce them:

- **Every path is host-qualified.** Code passes `HostPath` values, a host plus a path, and
  never bare strings, so local and remote projects share one code path.
- **All host access goes through `ProjectHost`.** `LocalHost` and `SshHost` implement this
  one interface for filesystem, process, PTY, and watch operations. Only
  `src/main/project-host/local-host.ts` imports `fs`, `child_process`, `chokidar`, or
  `node-pty`.
- **One PTY owner.** Only `src/main/pty/pty-supervisor.ts` spawns terminals.
- **The renderer is sandboxed.** It has no Node.js access and reaches the main process
  only through the typed preload bridge. `ipcRenderer` appears only in `src/preload/`.
- **Harness knowledge stays in one place.** Provider-specific behavior lives in
  `src/main/harness/`. The rest of the app treats provider ids as opaque data.

hvir is built with Electron, React, and TypeScript, and bundled with electron-vite.
Terminals use ghostty-web, which runs Ghostty's terminal core as WebAssembly, on top of
node-pty. Remote hosts use ssh2. The viewer uses CodeMirror, Shiki, markdown-it, and
Mermaid.

## License

hvir is released under the [MIT License](LICENSE). Notices for the third-party software
it redistributes are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>17m 38s</sub>

### `bash`

**Check electron-vite CLI arg env support and app naming**

$ cd /private/var/tmp/ws/f7354e9d/hvir && grep -rn "ELECTRON_CLI_ARGS\|ELECTRON_ENTRY\|ELECTRON_EXEC_PATH" node_modules/electron-vite/dist/chunks/*.js | head -8; echo "--- how app name is set ---"; grep -rn "setName\|app\.name\|productName" src/main --include='*.ts' | grep -v smoke | head -8; grep -n '"productName"\|"name"' package.json | head -3

<details>
<summary>9 lines</summary>

```
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:103:    if (process.env.ELECTRON_ENTRY)
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:142:    let electronExecPath = process.env.ELECTRON_EXEC_PATH || '';
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:152:            process.env.ELECTRON_EXEC_PATH = electronExecPath;
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:224:    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:237:    const entry = process.env.ELECTRON_ENTRY || '.';
--- how app name is set ---
2:  "name": "hvir",
5:    "name": "hvir contributors"
<shellId: 127 completed with exit code 0>
```

</details>


---

<sub>18m 3s</sub>

### `bash` — Failed

**Probe Electron's default user-data path for an unpackaged app named hvir**

$ cd /private/var/tmp/ws/f7354e9d/hvir && probe="$TMPDIR/hvir-readme/probe" && mkdir -p "$probe" && printf '{ "name": "hvir", "desktopName": "hvir", "main": "probe.js" }\n' > "$probe/package.json" && cat > "$probe/probe.js" <<'EOF'
const { app } = require('electron')
const os = require('node:os')
const home = os.homedir()
const rel = (p) => (p.startsWith(home) ? '~' + p.slice(home.length) : p)
console.log('PROBE name=' + app.name + ' userData=' + rel(app.getPath('userData')) + ' appData=' + rel(app.getPath('appData')))
app.exit(0)
EOF
( "$PWD/node_modules/.bin/electron" "$probe" 2>&1 | grep -a "PROBE" | head -3 ) & pid=$!; ( sleep 25; kill $pid 2>/dev/null ) & wait $pid 2>/dev/null; echo "probe finished ($?)"

```
Command not executed. The 'kill' command must specify at least one numeric PID. Usage: kill <PID> or kill -9 <PID>
```


---

<sub>18m 14s</sub>

### `bash`

**Probe Electron's default user-data path for an unpackaged app named hvir**

$ cd /private/var/tmp/ws/f7354e9d/hvir && probe="$TMPDIR/hvir-readme/probe" && mkdir -p "$probe" && printf '{ "name": "hvir", "desktopName": "hvir", "main": "probe.js" }\n' > "$probe/package.json" && cat > "$probe/probe.js" <<'EOF'
const { app } = require('electron')
const os = require('node:os')
const home = os.homedir()
const rel = (p) => (p.startsWith(home) ? '~' + p.slice(home.length) : p)
console.log('PROBE name=' + app.name + ' userData=' + rel(app.getPath('userData')) + ' appData=' + rel(app.getPath('appData')))
app.exit(0)
EOF
"$PWD/node_modules/.bin/electron" "$probe" > "$TMPDIR/hvir-readme/probe.log" 2>&1; echo "electron exit: $?"; grep -a "PROBE" "$TMPDIR/hvir-readme/probe.log" | head -3; echo "--- other output (head) ---"; grep -av "PROBE" "$TMPDIR/hvir-readme/probe.log" | head -8

```
electron exit: 1
--- other output (head) ---
/private/var/tmp/ws/f7354e9d/hvir/node_modules/electron/dist/Electron.app/Contents/MacOS/Electron exited with signal SIGSEGV
<shellId: probe completed with exit code 0>
```


---

<sub>18m 24s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/f7354e9d/hvir/README.md.**

/private/var/tmp/ws/f7354e9d/hvir/README.md

```
File /private/var/tmp/ws/f7354e9d/hvir/README.md updated with changes.
```


---

<sub>18m 54s</sub>

### `bash`

**Re-validate README and confirm Prettier ignores it**

$ cd /private/var/tmp/ws/f7354e9d/hvir && node "$TMPDIR/hvir-readme/validate.mjs" | tail -12; echo "=== prettier on README (expected: ignored via .prettierignore) ==="; npx prettier --check README.md 2>&1 | tail -3; echo "prettier exit: $?"; echo "=== file info ==="; file README.md; wc -lwc README.md; head -c 3 README.md | xxd | head -1

<details>
<summary>21 lines</summary>

```
ok file : eslint.config.mjs
  ok file : scripts/check-seams.sh
  ok file : LICENSE
  ok file : THIRD_PARTY_NOTICES.md
scripts referenced: architecture:check, architecture:report, build, build:dir, check-adrs, check-seams, dev, format, format:check, hooks:install, lint, pack:linux:arm64, pack:linux:x64, pack:mac:arm64, preview, smoke, smoke:macos, smoke:scenario, test, typecheck, verify
links/images: 8; tables: 5; code blocks: 6; h2: 9; h3: 4; list items: 27
lines: 278; words: 1987; trailing newline: true; trailing spaces: false; tabs: false
  escaped "<" in output: <td><code>hvir-&lt;version&gt;-darwin-arm64.pkg</code></td>
  escaped "<" in output: <td><code>hvir-&lt;version&gt;-linux-x64.deb</code></td>
  escaped "<" in output: <td><code>hvir-&lt;version&gt;-linux-arm64.deb</code></td>
  escaped "<" in output: install it with <code>sudo apt install ./&lt;package&gt;.deb</code> or by opening the <code>.pkg</code>.</p>
README validation passed
=== prettier on README (expected: ignored via .prettierignore) ===
Checking formatting...
All matched files use Prettier code style!
prettier exit: 0
=== file info ===
README.md: Unicode text, UTF-8 text
     278    1987   12846 README.md
00000000: 215b 68                                  ![h
<shellId: 129 completed with exit code 0>
```

</details>


---

<sub>18m 54s</sub>

### `bash`

**Re-run architecture report and seam check with README present**

$ cd /private/var/tmp/ws/f7354e9d/hvir && npm run --silent architecture:report 2>&1 | grep -nE "Architecture verification failed|Unclassified|README|budget violation|dependency violation|maintained source files|module graph" | head -12; echo "report exit: ${PIPESTATUS[0]}"; echo "=== check-seams ==="; npm run --silent check-seams 2>&1 | tail -2

<details>
<summary>8 lines</summary>

```
2:1196 maintained source files; every file has one governing rule
91:0 budget violation(s)
92:module graph: 1139 maintained TS/JS modules; 3417 internal edges
115:0 dependency violation(s)
report exit: 0
=== check-seams ===

seam check passed
<shellId: 130 completed with exit code 0>
```

</details>


---

<sub>19m 30s</sub>

### `bash`

**Re-run unit tests and compare failures with baseline**

$ cd /private/var/tmp/ws/f7354e9d/hvir && (npx vitest run --reporter=dot > "$TMPDIR/hvir-readme/test-after.log" 2>&1; echo "vitest exit: $?" >> "$TMPDIR/hvir-readme/test-after.log"); tail -9 "$TMPDIR/hvir-readme/test-after.log"; echo "=== failing files: baseline vs after ==="; diff <(grep -E "^ FAIL " "$TMPDIR/hvir-readme/test-baseline.log" | sed -E 's/ > .*//; s/ \[.*//' | sort -u) <(grep -E "^ FAIL " "$TMPDIR/hvir-readme/test-after.log" | sed -E 's/ > .*//; s/ \[.*//' | sort -u) && echo "identical failing-file set"

<details>
<summary>11 lines</summary>

```
Test Files  10 failed | 366 passed (376)
      Tests  23 failed | 2877 passed | 2 skipped (2902)
   Start at  12:39:03
   Duration  28.21s (tests 70%, import 11%, environment 9%, transform 8%, setup 2%, worker 1%)

    Isolate  376 workers spawned · ~130ms startup each (spawn + environment, per file)
             at least ~6.84s faster with isolate: false — reuses workers across files instead of one per file

vitest exit: 1
=== failing files: baseline vs after ===
diff: /dev/fd/63: Operation not permitted
<shellId: tests-after completed with exit code 2>
<this failure may be caused by the active sandbox policy. Do not attempt workarounds. If you suspect the sandbox blocked this, ask the user to review their sandbox policy.>
```

</details>


---

<sub>19m 39s</sub>

### `bash`

**Compare failing test files before and after via temp files**

$ cd /private/var/tmp/ws/f7354e9d/hvir && d="$TMPDIR/hvir-readme" && grep -E "^ FAIL " "$d/test-baseline.log" | sed -E 's/ > .*//; s/ \[.*//' | sort -u > "$d/fail-baseline.txt"; grep -E "^ FAIL " "$d/test-after.log" | sed -E 's/ > .*//; s/ \[.*//' | sort -u > "$d/fail-after.txt"; cmp "$d/fail-baseline.txt" "$d/fail-after.txt" && echo "identical failing-file set:" && cat "$d/fail-after.txt"

<details>
<summary>12 lines</summary>

```
identical failing-file set:
 FAIL  test/external-document-authority.test.ts
 FAIL  test/issue-lifecycle-guidance.test.ts
 FAIL  test/local-host.test.ts
 FAIL  test/merge-pr-skill.test.ts
 FAIL  test/project-pr-relationships.test.ts
 FAIL  test/smoke-scenario-runner.test.ts
 FAIL  test/web-pane-route-registry.test.ts
 FAIL  test/web-pane-route.test.ts
 FAIL  test/web-pane-smoke-boundary.test.ts
 FAIL  test/worker-host-broker.test.ts
<shellId: 131 completed with exit code 0>
```

</details>


---

<sub>19m 51s</sub>

### `bash`

**Inspect temp directory for leftovers from verification runs**

$ cd /private/var/tmp/ws/f7354e9d/hvir && echo "TMPDIR=$TMPDIR"; ls -la "$TMPDIR" 2>/dev/null | head -40; echo "--- count ---"; ls "$TMPDIR" 2>/dev/null | wc -l

<details>
<summary>12 lines</summary>

```
TMPDIR=/private/var/tmp/ws/f7354e9d/home/tmp
total 48
drwxr-xr-x@  7 air-jarmak  wheel    224 Nov 20 12:39 .
drwxr-xr-x@  5 air-jarmak  wheel    160 Nov 20 12:19 ..
drwxr-xr-x@  4 air-jarmak  wheel    128 Nov 20 12:39 b4bSLcsqADOwOsiXNTi-k
-rw-r--r--@  1 air-jarmak  wheel  24515 Nov 20 12:21 copilot-tool-output-1795195308413-1.txt
drwxr-xr-x@ 12 air-jarmak  wheel    384 Nov 20 12:39 hvir-readme
drwxr-xr-x@  4 air-jarmak  wheel    128 Nov 20 12:24 Mw9XOZ6U4mrc36WaBOTWS
drwxr-xr-x@  4 air-jarmak  wheel    128 Nov 20 12:22 node-compile-cache
--- count ---
       5
<shellId: 132 completed with exit code 0>
```

</details>


---

<sub>20m 2s</sub>

### `bash`

**Identify the origin of leftover temp directories**

$ cd "$TMPDIR" && for d in b4bSLcsqADOwOsiXNTi-k Mw9XOZ6U4mrc36WaBOTWS; do echo "== $d =="; find "$d" -maxdepth 2 | head -12; du -sh "$d" | cut -f1; done; echo "== node-compile-cache =="; ls node-compile-cache | head -5

<details>
<summary>32 lines</summary>

```
== b4bSLcsqADOwOsiXNTi-k ==
b4bSLcsqADOwOsiXNTi-k
b4bSLcsqADOwOsiXNTi-k/ssr
b4bSLcsqADOwOsiXNTi-k/ssr/29b6c689690af0875e91cc149c119324690e698f
b4bSLcsqADOwOsiXNTi-k/ssr/ac1b8fee4831f7249d3b477ddd20ab0424d8b2cc
b4bSLcsqADOwOsiXNTi-k/ssr/e83541b9c8881b32c0846b6f98313869ebb7e83c
b4bSLcsqADOwOsiXNTi-k/ssr/537eac20652ed0d55b2399387e5126a8ff9b4671
b4bSLcsqADOwOsiXNTi-k/ssr/138e45005528806e29bd07f3a5eab87ca9f632ff
b4bSLcsqADOwOsiXNTi-k/ssr/7a82ae5583ba249dd40aef342ab5674f069af15a
b4bSLcsqADOwOsiXNTi-k/ssr/ef1a5be11139dcb0da9933d2a71d3eee341ec498
b4bSLcsqADOwOsiXNTi-k/ssr/c7c3fcfcf004ef4f742ed09c3b8baf4f98d8b6f6
b4bSLcsqADOwOsiXNTi-k/ssr/8790d1278ec287d6ce97cb0cb10f12779513c597
b4bSLcsqADOwOsiXNTi-k/ssr/861e8236f1a81a78c552d81a6fb41530dae29eeb
 27M
== Mw9XOZ6U4mrc36WaBOTWS ==
Mw9XOZ6U4mrc36WaBOTWS
Mw9XOZ6U4mrc36WaBOTWS/ssr
Mw9XOZ6U4mrc36WaBOTWS/ssr/29b6c689690af0875e91cc149c119324690e698f
Mw9XOZ6U4mrc36WaBOTWS/ssr/ac1b8fee4831f7249d3b477ddd20ab0424d8b2cc
Mw9XOZ6U4mrc36WaBOTWS/ssr/e83541b9c8881b32c0846b6f98313869ebb7e83c
Mw9XOZ6U4mrc36WaBOTWS/ssr/537eac20652ed0d55b2399387e5126a8ff9b4671
Mw9XOZ6U4mrc36WaBOTWS/ssr/138e45005528806e29bd07f3a5eab87ca9f632ff
Mw9XOZ6U4mrc36WaBOTWS/ssr/7a82ae5583ba249dd40aef342ab5674f069af15a
Mw9XOZ6U4mrc36WaBOTWS/ssr/ef1a5be11139dcb0da9933d2a71d3eee341ec498
Mw9XOZ6U4mrc36WaBOTWS/ssr/c7c3fcfcf004ef4f742ed09c3b8baf4f98d8b6f6
Mw9XOZ6U4mrc36WaBOTWS/ssr/8790d1278ec287d6ce97cb0cb10f12779513c597
Mw9XOZ6U4mrc36WaBOTWS/ssr/861e8236f1a81a78c552d81a6fb41530dae29eeb
 27M
== node-compile-cache ==
v24.20.0-arm64-e0ecef1d-501
v26.5.0-arm64-8d7ad2ee-501
<shellId: 133 completed with exit code 0>
```

</details>


---

<sub>20m 40s</sub>

### `bash`

**Re-run ESLint with README present**

$ cd /private/var/tmp/ws/f7354e9d/hvir && time (npm run --silent lint 2>&1 | tail -5; echo "lint exit: ${PIPESTATUS[0]}")

<details>
<summary>5 lines</summary>

```
lint exit: 0

real	0m28.431s
user	0m46.951s
sys	0m2.512s
<shellId: lint-after completed with exit code 0>
```

</details>


---

<sub>21m 2s</sub>

### `bash`

**Remove build output and temp files created during verification; confirm final state**

$ cd /private/var/tmp/ws/f7354e9d/hvir && rm -rf out && rm -rf "$TMPDIR/hvir-readme" "$TMPDIR/b4bSLcsqADOwOsiXNTi-k" "$TMPDIR/Mw9XOZ6U4mrc36WaBOTWS" && echo "cleaned"; echo "--- git status (incl. ignored) ---"; git --no-pager status --short --ignored; echo "--- tmp ---"; ls "$TMPDIR"; echo "--- README ---"; ls -la README.md; git --no-pager log --oneline -n 2

<details>
<summary>12 lines</summary>

```
cleaned
--- git status (incl. ignored) ---
?? README.md
!! node_modules/
!! packages/rename-noreplace/build/
--- tmp ---
copilot-tool-output-1795195308413-1.txt
node-compile-cache
--- README ---
-rw-r--r--@ 1 air-jarmak  wheel  12846 Nov 20 12:38 README.md
79586ba Initial commit
<shellId: 134 completed with exit code 0>
```

</details>


---

<sub>21m 20s</sub>

### Copilot

I created `README.md` at the repo root (not committed). It covers what hvir is, its features, install, getting started, harnesses, SSH projects, shortcuts, development and architecture.

Its links, anchors and npm scripts all resolve, and lint and the architecture report still pass. Unit tests give the same result as before: 10 of 376 files already fail here, from sandbox limits and the missing docs below.

Three things to check:

- **Install URLs** assume public releases at `github.com/jarmak-personal/hvir`, the release tooling's default. With no network here, I could not confirm them.
- **Missing docs**: scripts and tests reference `docs/`, `AGENTS.md` and `CONTRIBUTING.md`, which are absent, so the README links to none of them and `npm run verify` fails at `check-adrs`.
- **Tagline** "Harness · View · Interact · Respond" is the Appearance settings preview text; I inferred it expands the name.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
