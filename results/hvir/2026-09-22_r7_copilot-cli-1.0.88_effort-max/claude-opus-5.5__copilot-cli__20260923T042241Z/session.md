# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `10aecd0f-815d-471f-804c-db0416385c85`  
> - **Started:** 9/23/2026, 12:22:56 AM  
> - **Duration:** 30m 43s  
> - **Exported:** 9/23/2026, 12:53:39 AM  

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

I'll start by exploring the repository to understand the project.

---

<sub>3s</sub>

### `bash`

**Inspect git history and repo root**

$ cd /private/var/tmp/ws/2002dadb/hvir && git --no-pager log --oneline -20 2>/dev/null; echo "---"; git --no-pager status 2>/dev/null | head -20; echo "---"; ls -la

<details>
<summary>35 lines</summary>

```
1e3a148 Initial commit
---
On branch main
nothing to commit, working tree clean
---
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 23 00:22 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 00:22 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 00:22 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 00:22 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 00:22 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 23 00:22 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 23 00:22 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 23 00:22 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 00:22 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 23 00:22 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 23 00:22 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 23 00:22 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 23 00:22 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 23 00:22 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 23 00:22 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 23 00:22 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 23 00:22 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 00:22 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 23 00:22 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 23 00:22 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 23 00:22 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 23 00:22 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 23 00:22 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 23 00:22 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 23 00:22 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 23 00:22 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 23 00:22 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 23 00:22 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>3s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir.**

/private/var/tmp/ws/2002dadb/hvir

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/package.json.**

/private/var/tmp/ws/2002dadb/hvir/package.json

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

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/LICENSE.**

/private/var/tmp/ws/2002dadb/hvir/LICENSE

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/2002dadb/hvir/THIRD_PARTY_NOTICES.md

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/electron-builder.yml.**

/private/var/tmp/ws/2002dadb/hvir/electron-builder.yml

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/electron-builder.ssh-acceptance.yml.**

/private/var/tmp/ws/2002dadb/hvir/electron-builder.ssh-acceptance.yml

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/2002dadb/hvir/electron.vite.config.ts

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

<sub>12s</sub>

### `bash`

**Summarize tracked file layout**

$ cd /private/var/tmp/ws/2002dadb/hvir && git ls-files | grep -v '^test/' | awk -F/ '{ if (NF>3) print $1"/"$2"/"$3"/"; else print $0 }' | sort | uniq -c | sort -k2 | head -300

<details>
<summary>243 lines</summary>

```
1 .githooks/pre-push
   1 .github/dependabot.yml
   1 .github/workflows/ci.yml
   1 .github/workflows/codeql.yml
   1 .github/workflows/ghostty-web-update.yml
   1 .github/workflows/lock-tracker-conversations.yml
   1 .github/workflows/macos-package-release.yml
   1 .github/workflows/project-kind.yml
   1 .github/workflows/project-pr-planning.yml
   1 .github/workflows/real-host-ssh.yml
   1 .github/workflows/release-pr-merged.yml
   1 .github/workflows/release.yml
   1 .github/workflows/smoke-stress.yml
   1 .gitignore
   1 .prettierignore
   1 .prettierrc.json
   1 build/entitlements.mac.inherit.plist
   1 build/entitlements.mac.plist
   1 build/icon-linux.svg
   1 build/icon-macos.icns
   1 build/icon-macos.png
   1 build/icon-macos.svg
   1 build/icons-linux/1024x1024.png
   1 build/icons-linux/128x128.png
   1 build/icons-linux/16x16.png
   1 build/icons-linux/256x256.png
   1 build/icons-linux/32x32.png
   1 build/icons-linux/512x512.png
   1 build/icons-linux/64x64.png
   1 build/linux/after-install.sh
   1 build/linux/after-remove.sh
   1 build/linux/hvir.apparmor
   1 build/native/hvir-command
   1 build/pkg-scripts/postinstall
   1 build/pkg-scripts/preinstall
   1 electron-builder.ssh-acceptance.yml
   1 electron-builder.yml
   1 electron.vite.config.ts
   1 eslint.config.mjs
   1 LICENSE
   1 package-lock.json
   1 package.json
   1 packages/rename-noreplace/binding.gyp
   1 packages/rename-noreplace/index.js
   1 packages/rename-noreplace/LICENSE
   1 packages/rename-noreplace/package.json
   1 packages/rename-noreplace/rename_noreplace.c
   1 scripts/adr-lifecycle.mts
   1 scripts/agent-work-checkpoint-store.mts
   1 scripts/architecture-authorization.mts
   1 scripts/architecture-github.mts
   1 scripts/architecture-hotspots.json
   1 scripts/architecture-hotspots.mjs
   1 scripts/architecture-hotspots.mts
   1 scripts/architecture-inventory.mts
   1 scripts/architecture-module-directions.mts
   1 scripts/architecture-module-graph.mts
   1 scripts/architecture-module-resolution.mts
   1 scripts/architecture-policy.mts
   1 scripts/architecture-wiring.mts
   1 scripts/assemble-native-release.d.mts
   1 scripts/assemble-native-release.mjs
   1 scripts/capture-contributor-usage.mts
   1 scripts/check-adrs.mjs
   1 scripts/check-seams.sh
   1 scripts/check-terminal-runtime.mts
   1 scripts/ci-attempt-evidence.mts
   1 scripts/create-smoke-repository.sh
   1 scripts/generate-terminal-theme-catalog.mts
   1 scripts/ghostty-terminal-capability-profile.mts
   1 scripts/ghostty-web-update/candidate-bundle.mts
   1 scripts/ghostty-web-update/cli.mts
   1 scripts/ghostty-web-update/coordinator.mts
   1 scripts/ghostty-web-update/github-client.mts
   1 scripts/ghostty-web-update/github-delivery.mts
   1 scripts/ghostty-web-update/github-release-source.mts
   1 scripts/ghostty-web-update/policy.mts
   1 scripts/ghostty-web-update/repository-candidate.mts
   1 scripts/inspect-packaged-runtime.mts
   1 scripts/install-git-hooks.sh
   1 scripts/installed-harness-dialog-probe.mts
   1 scripts/installed-startup-probe.mts
   1 scripts/native-installer.template.sh
   1 scripts/phase8-gauntlet.sh
   1 scripts/prepare-release-linux-package.mts
   1 scripts/prepare-release-pr.mjs
   1 scripts/project-management/audit-canonical-project.ts
   1 scripts/project-management/canonical-project-config.ts
   1 scripts/project-management/canonical-project-fields.ts
   1 scripts/project-management/canonical-project-item.ts
   1 scripts/project-management/canonical-project.ts
   1 scripts/project-management/contributor-status-cli.ts
   1 scripts/project-management/contributor-status.ts
   1 scripts/project-management/contributor-token-migration.ts
   1 scripts/project-management/github-client.ts
   1 scripts/project-management/github-contributor-acceptance.ts
   1 scripts/project-management/github-delivery-adapters.ts
   1 scripts/project-management/github-issues.ts
   1 scripts/project-management/github-kind-automation.ts
   1 scripts/project-management/github-pagination.ts
   1 scripts/project-management/github-pull-requests.ts
   1 scripts/project-management/github-session-tokens.ts
   1 scripts/project-management/github-token-migration.ts
   1 scripts/project-management/issue-context-cli.ts
   1 scripts/project-management/issue-context.ts
   1 scripts/project-management/issue-delivery.ts
   1 scripts/project-management/issue-planning.ts
   1 scripts/project-management/issue-start-cli.ts
   1 scripts/project-management/issue-start.ts
   1 scripts/project-management/kind-cli.ts
   1 scripts/project-management/kind-policy.ts
   1 scripts/project-management/kind-reconciler.ts
   1 scripts/project-management/legacy-token-evidence.ts
   1 scripts/project-management/migrate-project-tokens.ts
   1 scripts/project-management/native-issue-worktrees.ts
   1 scripts/project-management/package.json
   1 scripts/project-management/planning-cli.ts
   1 scripts/project-management/planning-fields.ts
   1 scripts/project-management/planning-record.ts
   1 scripts/project-management/project-config.ts
   1 scripts/project-management/project-token-fields.ts
   1 scripts/project-management/pull-request-cli.ts
   1 scripts/project-management/pull-request-planning.ts
   1 scripts/project-management/pull-request-relationships.ts
   1 scripts/project-management/read-contributor-status.ts
   1 scripts/project-management/read-issue-context.ts
   1 scripts/project-management/read-planning-record.ts
   1 scripts/project-management/session-token-allocation.ts
   1 scripts/project-management/session-token-capture.ts
   1 scripts/project-management/session-token-receipts.ts
   1 scripts/project-management/start-issue.ts
   1 scripts/project-management/sync-kind.ts
   1 scripts/project-management/sync-pull-request-planning.ts
   1 scripts/project-management/token-migration-plan.ts
   1 scripts/real-host-ssh-contract.mts
   1 scripts/real-host-ssh.vite.config.mts
   1 scripts/record-macos-ssh-identity.sh
   1 scripts/release-changelog.d.mts
   1 scripts/release-changelog.mjs
   1 scripts/release-github-evidence.mts
   1 scripts/render-native-installer.d.mts
   1 scripts/render-native-installer.mjs
   1 scripts/require-release-ci-evidence.mts
   1 scripts/run-linux-package-smoke.sh
   1 scripts/run-macos-package-smoke.sh
   1 scripts/run-macos-ssh-acceptance.sh
   1 scripts/run-real-host-ssh-acceptance.mts
   1 scripts/run-smoke-interruption.mts
   1 scripts/run-smoke-scenarios.mts
   1 scripts/run-smoke.sh
   1 scripts/smoke-failure-artifact.mts
   1 scripts/smoke-import-boundary.mjs
   1 scripts/validate-release-pr.mts
   1 src/main/application-runtime-policy.ts
   1 src/main/application-runtime.ts
   1 src/main/attention-badge.ts
   1 src/main/build-environment.d.ts
  10 src/main/diagnostics/
  11 src/main/document-review/
   4 src/main/filename-search/
  14 src/main/git/
  36 src/main/harness/
   2 src/main/health/
   1 src/main/html-preview-protocol.ts
   1 src/main/index.ts
   1 src/main/ipc.ts
  21 src/main/ipc/
   1 src/main/navigation-policy.ts
   1 src/main/project-coordinator.ts
  25 src/main/project-file-operations/
   2 src/main/project-folder-picker/
  21 src/main/project-host/
   1 src/main/project-registry.ts
   1 src/main/project-watch.ts
   6 src/main/pty/
   1 src/main/renderer-event-delivery.ts
   1 src/main/renderer-event-publisher.ts
   1 src/main/renderer-presentation-resources.ts
   1 src/main/renderer-resource-scopes.ts
   8 src/main/sessions/
  97 src/main/smoke/
   7 src/main/terminal/
   1 src/main/viewer/
   2 src/main/web-pane/
   6 src/main/window/
   1 src/main/workbench-runtime.ts
   1 src/main/worker-host.ts
   1 src/main/workspace-activity.ts
   1 src/main/workspace-cleanup.ts
   1 src/main/workspace-coordinator.ts
   1 src/main/workspace-removal-coordinator.ts
   1 src/preload/index.ts
   1 src/preload/renderer-diagnostics.ts
   1 src/preload/terminal-clipboard-file-paste.ts
   1 src/renderer/index.html
 348 src/renderer/src/
   1 src/shared/application-build-channel.ts
   1 src/shared/composer-submit.ts
   1 src/shared/diagnostic-evidence.ts
   1 src/shared/diagnostic-report-event.ts
   1 src/shared/diagnostic-report.ts
   1 src/shared/diagnostics.ts
   1 src/shared/disposer.ts
   1 src/shared/document-review.ts
   1 src/shared/file-uri.ts
   1 src/shared/filename-search.ts
   1 src/shared/fs-types.ts
   1 src/shared/git-types.ts
   1 src/shared/harness-profile.ts
   1 src/shared/harness-provider.ts
   1 src/shared/harness-telemetry.ts
   1 src/shared/harness-usage.ts
   1 src/shared/host-path.ts
   1 src/shared/html-preview.ts
   1 src/shared/index.ts
   1 src/shared/ipc-contract.ts
   1 src/shared/ipc.ts
  11 src/shared/ipc/
   1 src/shared/keybindings.ts
   1 src/shared/markdown-it-task-lists.d.ts
   1 src/shared/operation-result.ts
   1 src/shared/project-file-operations.ts
   1 src/shared/rendered-link.ts
   1 src/shared/sessions-projection.ts
   1 src/shared/terminal-attention.ts
   1 src/shared/terminal-clipboard-file-paste.ts
   1 src/shared/terminal-start-admission.ts
   1 src/shared/viewer-types.ts
   1 src/shared/viewer-workload-policy.ts
   1 src/shared/web-pane.ts
   1 src/shared/workbench-health.ts
   1 src/shared/worker-protocol.ts
   1 src/shared/workspace-types.ts
   1 src/workers/echo-worker.ts
   1 src/workers/git-worker.ts
   1 stryker.config.json
   1 THIRD_PARTY_NOTICES.md
   1 tsconfig.base.json
   1 tsconfig.json
   1 tsconfig.node.json
   1 tsconfig.web.json
   1 vitest.config.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### `bash`

**Count files and list markdown docs**

$ cd /private/var/tmp/ws/2002dadb/hvir && git ls-files | wc -l && git ls-files | grep -iE '\.md$' | head -100

```
1256
THIRD_PARTY_NOTICES.md
test/fixtures/rendered-mmd.md
test/fixtures/rendered.md
<shellId: 2 completed with exit code 0>
```


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.gitignore.**

/private/var/tmp/ws/2002dadb/hvir/.gitignore

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

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.prettierignore.**

/private/var/tmp/ws/2002dadb/hvir/.prettierignore

<details>
<summary>7 lines</summary>

```
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/2002dadb/hvir/scripts/check-adrs.mjs

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


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/check-seams.sh.**

/private/var/tmp/ws/2002dadb/hvir/scripts/check-seams.sh

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


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.githooks/pre-push.**

/private/var/tmp/ws/2002dadb/hvir/.githooks/pre-push

<details>
<summary>18 lines</summary>

```
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
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/install-git-hooks.sh.**

/private/var/tmp/ws/2002dadb/hvir/scripts/install-git-hooks.sh

<details>
<summary>12 lines</summary>

```
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
```

</details>


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/ci.yml

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

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml

```
File too large to read at once (20.8 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/macos-package-release.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/macos-package-release.yml

<details>
<summary>175 lines</summary>

```
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
      MACOS_NOTARY_KEY_ID:
        required: false
      MACOS_NOTARY_ISSUER_ID:
        required: false
      MACOS_TEAM_ID:
        required: false
permissions:
  contents: read

concurrency:
  group: signed-macos-package
  cancel-in-progress: false

jobs:
  signed-package:
    name: Sign, notarize, staple, and accept macOS arm64 package
    runs-on: macos-15
    timeout-minutes: 45
    environment: native-release-signing

    steps:
      - name: Require an exact protected merged source
        env:
          ALLOW_MERGED_SOURCE: ${{ inputs.allow_merged_source }}
          REF_TYPE: ${{ github.ref_type }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          if [ "$REF_TYPE" != branch ]; then
            echo "::error::Signed packaging must be dispatched from a protected branch"
            exit 1
          fi
          if [ "$ALLOW_MERGED_SOURCE" != true ]; then
            echo "::error::Signed packaging requires an explicitly selected merged source"
            exit 1
          fi
          if [[ ! "$SOURCE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::source_sha must be a full commit SHA"
            exit 1
          fi

      - name: Check out trusted source
        uses: actions/checkout@v7
        with:
          ref: ${{ inputs.source_sha }}
          fetch-depth: 0

      - name: Confirm the protected branch contains the exact source
        env:
          SOURCE_BRANCH: ${{ github.ref_name }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          git fetch origin "refs/heads/$SOURCE_BRANCH"
          if [ "$(git rev-parse HEAD)" != "$SOURCE_SHA" ]; then
            echo "::error::checkout does not match requested source"
            exit 1
          fi
          branch_sha=$(git rev-parse FETCH_HEAD)
          if ! git merge-base --is-ancestor "$SOURCE_SHA" "$branch_sha"; then
            echo "::error::$SOURCE_SHA is not contained in $SOURCE_BRANCH"
            exit 1
          fi

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Require protected signing credentials
        env:
          MACOS_APPLICATION_CERTIFICATE: ${{ secrets.MACOS_APPLICATION_CERTIFICATE }}
          MACOS_APPLICATION_CERTIFICATE_PASSWORD: ${{ secrets.MACOS_APPLICATION_CERTIFICATE_PASSWORD }}
          MACOS_INSTALLER_CERTIFICATE: ${{ secrets.MACOS_INSTALLER_CERTIFICATE }}
          MACOS_INSTALLER_CERTIFICATE_PASSWORD: ${{ secrets.MACOS_INSTALLER_CERTIFICATE_PASSWORD }}
          MACOS_NOTARY_ISSUER_ID: ${{ secrets.MACOS_NOTARY_ISSUER_ID }}
          MACOS_NOTARY_KEY: ${{ secrets.MACOS_NOTARY_KEY }}
          MACOS_NOTARY_KEY_ID: ${{ secrets.MACOS_NOTARY_KEY_ID }}
          MACOS_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
        run: |
          missing=false
          for name in \
            MACOS_APPLICATION_CERTIFICATE \
            MACOS_APPLICATION_CERTIFICATE_PASSWORD \
            MACOS_INSTALLER_CERTIFICATE \
            MACOS_INSTALLER_CERTIFICATE_PASSWORD \
            MACOS_NOTARY_KEY \
            MACOS_NOTARY_KEY_ID \
            MACOS_NOTARY_ISSUER_ID \
            MACOS_TEAM_ID; do
            if [ -z "${!name}" ]; then
              echo "::error::$name is unavailable in native-release-signing"
              missing=true
            fi
          done
          if [ "$missing" = true ]; then
            exit 1
          fi

      - name: Prepare protected notary credential
        env:
          NOTARY_KEY: ${{ secrets.MACOS_NOTARY_KEY }}
        run: |
          umask 077
          key_path="$RUNNER_TEMP/hvir-notary-key.p8"
          printf '%s' "$NOTARY_KEY" > "$key_path"
          echo "APPLE_API_KEY=$key_path" >> "$GITHUB_ENV"

      - name: Build signed and notarized package
        env:
          CSC_LINK: ${{ secrets.MACOS_APPLICATION_CERTIFICATE }}
          CSC_KEY_PASSWORD: ${{ secrets.MACOS_APPLICATION_CERTIFICATE_PASSWORD }}
          CSC_INSTALLER_LINK: ${{ secrets.MACOS_INSTALLER_CERTIFICATE }}
          CSC_INSTALLER_KEY_PASSWORD: ${{ secrets.MACOS_INSTALLER_CERTIFICATE_PASSWORD }}
          APPLE_API_KEY_ID: ${{ secrets.MACOS_NOTARY_KEY_ID }}
          APPLE_API_ISSUER: ${{ secrets.MACOS_NOTARY_ISSUER_ID }}
        run: npm run pack:mac:arm64:signed

      - name: Staple notarization ticket
        run: |
          package=$(find dist -maxdepth 1 -type f -name 'hvir-*-macos-arm64.pkg' -print)
          if [ -z "$package" ] || [ "$(printf '%s\n' "$package" | wc -l)" -ne 1 ]; then
            echo "::error::Expected exactly one macOS package"
            exit 1
          fi
          xcrun stapler staple "$package"
          xcrun stapler validate "$package"

      - name: Install, update, launch, and remove signed package
        env:
          HVIR_MACOS_PACKAGE_ACCEPTANCE: '1'
          HVIR_MACOS_PACKAGE_MODE: signed
          HVIR_MACOS_EXPECTED_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
        run: npm run smoke:macos:installed

      - name: Remove protected notary credential
        if: always()
        run: rm -f -- "$RUNNER_TEMP/hvir-notary-key.p8"

      - name: Give the accepted artifact its public release name
        run: |
          package_version=$(node -p "require('./package.json').version")
          source="dist/hvir-${package_version}-macos-arm64.pkg"
          target="hvir-${package_version}-darwin-arm64.pkg"
          if [ ! -f "$source" ] || [ -e "dist/$target" ]; then
            echo "::error::Expected exactly one accepted package at $source"
            exit 1
          fi
          mv -- "$source" "dist/$target"
          (
            cd dist
            shasum -a 256 "$target" > "$target.sha256"
            shasum -a 256 --check "$target.sha256"
          )

      - name: Retain accepted package for release assembly
        uses: actions/upload-artifact@v7
        with:
          name: release-macos-arm64
          path: |
            dist/hvir-*-darwin-arm64.pkg
            dist/hvir-*-darwin-arm64.pkg.sha256
          if-no-files-found: error
          retention-days: 1
```

</details>


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/release-pr-merged.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/release-pr-merged.yml

<details>
<summary>61 lines</summary>

```
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
      - name: Check out trusted release validation
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.repository.default_branch }}
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

      - name: Validate merged release PR
        id: validate
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GITHUB_TOKEN: ${{ github.token }}
          RELEASE_PR_HEAD_SHA: ${{ github.event.pull_request.head.sha }}
          RELEASE_PR_MODE: merged
          RELEASE_PR_NUMBER: ${{ github.event.pull_request.number }}
          RELEASE_SOURCE_SHA: ${{ github.event.pull_request.merge_commit_sha }}
        run: node scripts/validate-release-pr.mts

      - name: Dispatch exact merged release
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GH_TOKEN: ${{ github.token }}
          MERGE_SHA: ${{ github.event.pull_request.merge_commit_sha }}
          VERSION: ${{ steps.validate.outputs.version }}
        run: |
          gh workflow run release.yml \
            --repo "$GITHUB_REPOSITORY" \
            --ref "$DEFAULT_BRANCH" \
            -f bump=current \
            -f source_sha="$MERGE_SHA"
          echo "Dispatched hvir $VERSION from $MERGE_SHA" >> "$GITHUB_STEP_SUMMARY"
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml (lines 1-200)

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

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/2002dadb/hvir/scripts/native-installer.template.sh

<details>
<summary>619 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/build/native/hvir-command.**

/private/var/tmp/ws/2002dadb/hvir/build/native/hvir-command

<details>
<summary>37 lines</summary>

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
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml (lines 200-560)

<details>
<summary>331 lines</summary>

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
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/render-native-installer.mjs.**

/private/var/tmp/ws/2002dadb/hvir/scripts/render-native-installer.mjs

<details>
<summary>167 lines</summary>

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
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/assemble-native-release.mjs.**

/private/var/tmp/ws/2002dadb/hvir/scripts/assemble-native-release.mjs

<details>
<summary>211 lines</summary>

```
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
  if (!options.assetDirectory) {
    throw new Error('A release asset directory is required.')
  }
}

async function requireExactInputs(assetDirectory, expectedNames) {
  const entries = await readdir(assetDirectory)
  const allowedGenerated = new Set([
    'install.sh',
    'release-manifest.json',
    'SHA256SUMS',
    'THIRD_PARTY_NOTICES.md',
  ])
  const unexpected = entries.filter(
    (name) => !expectedNames.includes(name) && !allowedGenerated.has(name),
  )
  if (unexpected.length > 0) {
    throw new Error(`Unexpected release inputs: ${unexpected.sort().join(', ')}.`)
  }
  for (const name of expectedNames) {
    const path = resolve(assetDirectory, name)
    let metadata
    try {
      metadata = await stat(path)
    } catch {
      throw new Error(`Missing release input: ${name}.`)
    }
    if (!metadata.isFile()) throw new Error(`Release input is not a file: ${name}.`)
  }
}

async function requireExactOutputs(assetDirectory, expectedNames) {
  const actual = (await readdir(assetDirectory)).sort()
  const expected = [...expectedNames].sort()
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `Release output set is not exact: ${actual.join(', ')}; expected ${expected.join(', ')}.`,
    )
  }
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
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
    '--source-sha',
    '--repository',
    '--macos-team-id',
    '--asset-directory',
  ])
  for (const key of values.keys()) {
    if (!known.has(key)) throw new Error(`Unknown option: ${key}.`)
  }
  return {
    version: values.get('--version'),
    sourceSha: values.get('--source-sha'),
    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
    macosTeamId: values.get('--macos-team-id'),
    assetDirectory: values.get('--asset-directory'),
  }
}

async function main() {
  const result = await assembleNativeRelease(parseArguments(process.argv.slice(2)))
  process.stdout.write(`Assembled ${result.manifest.tag} in ${result.assetDirectory}\n`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
```

</details>


---

<sub>44s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/2002dadb/hvir/.github/workflows/release.yml (lines 560-700)

<details>
<summary>54 lines</summary>

```
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

<sub>44s</sub>

### `bash`

**Find repository references**

$ cd /private/var/tmp/ws/2002dadb/hvir && git remote -v; echo "---"; grep -rn "jarmak-personal" --include='*.ts' --include='*.mts' --include='*.mjs' --include='*.yml' --include='*.json' --include='*.sh' . 2>/dev/null | grep -v node_modules | head -30

<details>
<summary>32 lines</summary>

```
---
./test/issue-context.test.ts:50:      repository: 'jarmak-personal/hvir',
./test/issue-context.test.ts:73:              repository: 'jarmak-personal/hvir',
./test/issue-context.test.ts:84:              repository: 'jarmak-personal/hvir',
./test/issue-context.test.ts:116:              repository: 'jarmak-personal/hvir',
./test/issue-context.test.ts:127:              repository: 'jarmak-personal/hvir',
./test/issue-context.test.ts:198:    repository: 'jarmak-personal/hvir',
./test/native-installer.test.ts:44:      'https://github.com/jarmak-personal/hvir/releases/download/v1.2.3',
./test/native-installer.test.ts:48:      "readonly HVIR_RELEASE_BASE_URL='https://github.com/jarmak-personal/hvir/releases/download/v1.2.3'",
./test/native-installer.test.ts:628:      repository: 'jarmak-personal/hvir',
./test/ghostty-web-update-policy.test.ts:92:      `https://github.com/jarmak-personal/ghostty-web/releases/download/${validated.tag}/${validated.artifactName}`,
./test/ghostty-web-update-policy.test.ts:140:        `https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-15/ghostty-web-0.4.0-hvir-g${SOURCE_COMMIT.slice(0, 12)}.tgz`,
./test/ghostty-web-update-policy.test.ts:145:        'https://github.com/jarmak-personal/ghostty-web/releases/latest',
./test/ghostty-web-update-policy.test.ts:185:      runUrl: 'https://github.com/jarmak-personal/hvir/actions/runs/123',
./test/ghostty-web-update-policy.test.ts:255:      sourceRepository: 'https://github.com/jarmak-personal/ghostty-web.git',
./test/ghostty-web-update-policy.test.ts:283:    url: `https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-15/ghostty-web-0.4.0-hvir-g${SOURCE_COMMIT.slice(0, 12)}.tgz`,
./test/release-pr-integrity.test.ts:58:    repository: 'jarmak-personal/hvir',
./test/release-pr-integrity.test.ts:68:    headRepository: 'jarmak-personal/hvir',
./test/release-pr-integrity.test.ts:128:            repo: { full_name: 'jarmak-personal/hvir' },
./test/release-pr-integrity.test.ts:151:    GITHUB_REPOSITORY: 'jarmak-personal/hvir',
./test/ghostty-web-update-coordinator.test.ts:91:  url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-14/ghostty-web-0.4.0-hvir-gaaaaaaaaaaaa.tgz',
./test/ghostty-web-update-coordinator.test.ts:113:      url: 'https://github.com/jarmak-personal/hvir/pull/52',
./test/ghostty-web-update-coordinator.test.ts:159:    url: `https://github.com/jarmak-personal/ghostty-web/releases/download/${tag}/${artifactName}`,
./test/project-planning-record.test.ts:18:    repository: 'jarmak-personal/hvir',
./test/project-planning-record.test.ts:24:      repository: 'jarmak-personal/hvir',
./test/project-planning-record.test.ts:40:    repository: 'jarmak-personal/hvir',
./test/project-planning-record.test.ts:98:            repository: 'jarmak-personal/hvir',
./test/project-planning-record.test.ts:105:            repository: 'jarmak-personal/hvir',
./test/project-planning-record.test.ts:117:      repository: 'jarmak-personal/hvir',
./test/github-project-planning.test.ts:67:    owner: 'jarmak-personal',
./test/github-project-planning.test.ts:69:    repositoryOwner: 'jarmak-personal',
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>50s</sub>

### `bash`

**List renderer and main module structure**

$ cd /private/var/tmp/ws/2002dadb/hvir && git ls-files src/renderer/src | awk -F/ '{ if (NF>4) print $1"/"$2"/"$3"/"$4"/"; else print $0 }' | sort | uniq -c; echo; git ls-files src/main/harness src/main/project-host src/main/git src/main/document-review src/main/sessions src/main/web-pane src/main/terminal src/main/pty src/main/viewer src/main/window src/main/health src/main/diagnostics src/main/filename-search src/main/project-file-operations src/main/ipc src/main/project-folder-picker

<details>
<summary>204 lines</summary>

```
1 src/renderer/src/App.tsx
   1 src/renderer/src/context-menu/
   8 src/renderer/src/dashboards/
   4 src/renderer/src/development/
   2 src/renderer/src/diagnostics/
  23 src/renderer/src/document-review/
   1 src/renderer/src/ErrorBoundary.tsx
  19 src/renderer/src/git/
   1 src/renderer/src/harness/
   3 src/renderer/src/health/
   1 src/renderer/src/hvir.d.ts
   3 src/renderer/src/layout/
   1 src/renderer/src/main.tsx
   3 src/renderer/src/path-copy/
   1 src/renderer/src/scrollbars/
  14 src/renderer/src/sessions/
  34 src/renderer/src/settings/
   1 src/renderer/src/styles.css
  38 src/renderer/src/styles/
  69 src/renderer/src/terminal/
   1 src/renderer/src/theme-model.ts
   1 src/renderer/src/theme.ts
   1 src/renderer/src/themes.css
  27 src/renderer/src/tree/
  59 src/renderer/src/viewer/
  15 src/renderer/src/workbench/
  16 src/renderer/src/workspaces/

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
src/main/filename-search/filename-enumerator.ts
src/main/filename-search/filename-search-coordinator.ts
src/main/filename-search/filename-search-policy.ts
src/main/filename-search/index.ts
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
src/main/harness/providers/claude-code.ts
src/main/harness/providers/codex.ts
src/main/harness/providers/cursor.ts
src/main/harness/providers/gemini.ts
src/main/harness/providers/github-copilot.ts
src/main/harness/providers/pi.ts
src/main/harness/providers/shell.ts
src/main/harness/remote-image-paste-storage.ts
src/main/harness/remote-image-paste.ts
src/main/health/workbench-health-events.ts
src/main/health/workbench-health.ts
src/main/ipc/authority-channel-policy.ts
src/main/ipc/authority-port.ts
src/main/ipc/authority-router.ts
src/main/ipc/deps.ts
src/main/ipc/features/app.ts
src/main/ipc/features/clipboard.ts
src/main/ipc/features/diagnostic-report.ts
src/main/ipc/features/document-review.ts
src/main/ipc/features/filesystem.ts
src/main/ipc/features/git.ts
src/main/ipc/features/harness.ts
src/main/ipc/features/image-paste.ts
src/main/ipc/features/preview.ts
src/main/ipc/features/project.ts
src/main/ipc/features/sessions.ts
src/main/ipc/features/terminal-file-paste.ts
src/main/ipc/features/terminal.ts
src/main/ipc/features/web-pane.ts
src/main/ipc/host-path-authority.ts
src/main/ipc/operation-result.ts
src/main/ipc/project-commands.ts
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
src/main/project-folder-picker/index.ts
src/main/project-folder-picker/project-folder-picker-coordinator.ts
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
src/main/pty/pty-contract.ts
src/main/pty/pty-launch-admission.ts
src/main/pty/pty-session-lifetime.ts
src/main/pty/pty-session-observation.ts
src/main/pty/pty-stream-attachment.ts
src/main/pty/pty-supervisor.ts
src/main/sessions/sessions-observation-application.ts
src/main/sessions/sessions-observation-port.ts
src/main/sessions/sessions-open-resolution.ts
src/main/sessions/sessions-projection-identities.ts
src/main/sessions/sessions-projection-values.ts
src/main/sessions/sessions-telemetry-projection.ts
src/main/sessions/sessions-usage-observation-port.ts
src/main/sessions/sessions-usage-projection.ts
src/main/terminal/electron-clipboard-file-paste.ts
src/main/terminal/renderer-pty-lifecycle.ts
src/main/terminal/session-registry.ts
src/main/terminal/terminal-identity-publication.ts
src/main/terminal/terminal-launch-admission.ts
src/main/terminal/terminal-start-response.ts
src/main/terminal/terminal-workspace-move-coordinator.ts
src/main/viewer/document-read-authority.ts
src/main/web-pane/loopback-http-proxy.ts
src/main/web-pane/web-pane-route-registry.ts
src/main/window/electron-renderer-document-lifecycle.ts
src/main/window/electron-renderer-recovery.ts
src/main/window/electron-window-manager.ts
src/main/window/renderer-recovery-monitor.ts
src/main/window/window-health-tracker.ts
src/main/window/window-policy.ts
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>1m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/index.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>1m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/harness/bundled-harness-providers.ts

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


---

<sub>1m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/claude-code.ts

<details>
<summary>101 lines</summary>

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
```

</details>


---

<sub>1m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/index.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/index.ts (lines 1-200)

<details>
<summary>200 lines</summary>

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
```

</details>


---

<sub>1m 5s</sub>

### `bash`

**Summarize harness providers**

$ cd /private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers && for f in *.ts; do echo "=== $f"; grep -nE "displayName|id: asHarnessProviderId|file: |description:|sessionKind" "$f"; done

<details>
<summary>75 lines</summary>

```
=== claude-code.ts
30:    id: asHarnessProviderId('claude-code'),
31:    displayName: 'Claude Code',
32:    sessionKind: 'agent',
38:  profile: {
40:    defaultProfile: {
42:      displayName: 'Claude Code',
43:      description: 'Claude Code with exact hvir-managed session recovery.',
69:      file: 'claude',
77:      file: 'claude',
87:      file: 'claude',
=== codex.ts
45:    id: asHarnessProviderId('codex'),
46:    displayName: 'Codex',
47:    sessionKind: 'agent',
52:  profile: {
54:    defaultProfile: {
56:      displayName: 'Codex',
57:      description: 'Codex with exact rollout discovery and recovery.',
95:      file: 'codex',
103:      file: 'codex',
118:      file: 'codex',
167:  _profile: HarnessDocumentReviewInsertLaunch['profile'],
=== cursor.ts
6:    id: asHarnessProviderId('cursor-cli'),
7:    displayName: 'Cursor CLI',
8:    sessionKind: 'agent',
11:  profile: {
13:    defaultProfile: {
15:      displayName: 'Cursor CLI',
16:      description:
29:  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
=== gemini.ts
6:    id: asHarnessProviderId('gemini-cli'),
7:    displayName: 'Gemini CLI',
8:    sessionKind: 'agent',
11:  profile: {
13:    defaultProfile: {
15:      displayName: 'Gemini CLI',
16:      description:
29:  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
=== github-copilot.ts
6:    id: asHarnessProviderId('github-copilot-cli'),
7:    displayName: 'GitHub Copilot CLI',
8:    sessionKind: 'agent',
11:  profile: {
13:    defaultProfile: {
15:      displayName: 'GitHub Copilot CLI',
16:      description:
30:    file: 'copilot',
=== pi.ts
6:    id: asHarnessProviderId('pi'),
7:    displayName: 'Pi',
8:    sessionKind: 'agent',
11:  profile: {
13:    defaultProfile: {
15:      displayName: 'Pi',
16:      description:
32:  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
=== shell.ts
11:    id: asHarnessProviderId('plain-shell'),
12:    displayName: 'Shell',
13:    sessionKind: 'shell',
17:  profile: {
19:    defaultProfile: {
21:      displayName: 'Shell',
22:      description: 'The default interactive shell on this host.',
36:    return { file: ctx.defaultShell, args: ['-l'] }
46:    id: asHarnessProviderId('custom'),
47:    displayName: 'Custom',
48:    sessionKind: 'shell',
51:  profile: {
63:  launch: () => ({ file: 'custom', args: [] }),
64:  resume: () => ({ file: 'custom', args: [] }),
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/index.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/index.ts (lines 200-560)

<details>
<summary>319 lines</summary>

```
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

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/shell.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/shell.ts

<details>
<summary>61 lines</summary>

```
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
```

</details>


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/github-copilot.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/github-copilot.ts

<details>
<summary>51 lines</summary>

```
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
```

</details>


---

<sub>1m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/codex.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers/codex.ts (lines 1-130)

<details>
<summary>121 lines</summary>

```
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
```

</details>


---

<sub>1m 15s</sub>

### `bash`

**View remaining provider definitions**

$ cd /private/var/tmp/ws/2002dadb/hvir/src/main/harness/providers && sed -n '1,40p' cursor.ts; echo ----; sed -n '10,35p' gemini.ts; echo ----; sed -n '10,40p' pi.ts

<details>
<summary>96 lines</summary>

```
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
----
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
----
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
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>1m 15s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/application-runtime.ts

<details>
<summary>15 lines</summary>

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
```

</details>


---

<sub>1m 15s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/application-runtime-policy.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/application-runtime-policy.ts

<details>
<summary>25 lines</summary>

```
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
```

</details>


---

<sub>1m 20s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/shared/keybindings.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/shared/keybindings.ts

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

<sub>1m 20s</sub>

### `bash`

**List renderer feature files**

$ cd /private/var/tmp/ws/2002dadb/hvir && git ls-files src/renderer/src/settings src/renderer/src/workbench src/renderer/src/dashboards src/renderer/src/sessions src/renderer/src/document-review src/renderer/src/workspaces src/renderer/src/viewer src/renderer/src/git src/renderer/src/tree src/renderer/src/layout src/renderer/src/health src/renderer/src/harness src/renderer/src/path-copy src/renderer/src/context-menu | grep -v '\.css$'

<details>
<summary>227 lines</summary>

```
src/renderer/src/context-menu/viewport-context-menu.ts
src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/dashboards/WebPaneStack.tsx
src/renderer/src/dashboards/use-web-pane-workspace.ts
src/renderer/src/dashboards/web-pane-diagnostics.ts
src/renderer/src/dashboards/web-pane-surface.ts
src/renderer/src/dashboards/web-pane-url.ts
src/renderer/src/dashboards/web-pane-workspace-policy.ts
src/renderer/src/document-review/DocumentReviewControls.tsx
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx
src/renderer/src/document-review/document-review-anchor.ts
src/renderer/src/document-review/document-review-batches.ts
src/renderer/src/document-review/document-review-capture.ts
src/renderer/src/document-review/document-review-delivery-client.ts
src/renderer/src/document-review/document-review-delivery-feedback.ts
src/renderer/src/document-review/document-review-eligibility.ts
src/renderer/src/document-review/document-review-inline.ts
src/renderer/src/document-review/document-review-lifecycle.ts
src/renderer/src/document-review/document-review-model.ts
src/renderer/src/document-review/document-review-rendered.ts
src/renderer/src/document-review/document-review-selectors.ts
src/renderer/src/document-review/document-review-source.ts
src/renderer/src/document-review/document-review-types.ts
src/renderer/src/document-review/document-review-validation.ts
src/renderer/src/document-review/document-review-workspace-controller.ts
src/renderer/src/document-review/document-review-workspace.ts
src/renderer/src/document-review/index.ts
src/renderer/src/document-review/use-document-review-delivery.ts
src/renderer/src/document-review/use-document-review-interaction.ts
src/renderer/src/document-review/use-document-review-workspace.ts
src/renderer/src/git/GitBranchControls.tsx
src/renderer/src/git/GitChangesView.tsx
src/renderer/src/git/GitGraphLanes.tsx
src/renderer/src/git/GitGraphView.tsx
src/renderer/src/git/GitHistoryView.tsx
src/renderer/src/git/GitPanel.tsx
src/renderer/src/git/commit-detail-client.ts
src/renderer/src/git/commit-file-tree.ts
src/renderer/src/git/commit-message.ts
src/renderer/src/git/git-capability.ts
src/renderer/src/git/git-graph-lane-metrics.ts
src/renderer/src/git/git-graph-layout.ts
src/renderer/src/git/git-rail-model.ts
src/renderer/src/git/git-sync-coordinator.ts
src/renderer/src/git/git-sync-status.ts
src/renderer/src/git/use-git-commit-details.ts
src/renderer/src/git/use-git-rail-controller.ts
src/renderer/src/git/use-git-workspace.ts
src/renderer/src/git/virtual-range.ts
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/health/use-diagnostic-evidence.ts
src/renderer/src/health/use-workbench-health.ts
src/renderer/src/layout/PaneResizer.tsx
src/renderer/src/layout/split-layout-policy.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/path-copy/PathCopyMenu.tsx
src/renderer/src/path-copy/path-copy.ts
src/renderer/src/path-copy/use-path-copy-menu.ts
src/renderer/src/sessions/SessionsApplicationDestination.tsx
src/renderer/src/sessions/SessionsCollectionToolbar.tsx
src/renderer/src/sessions/SessionsOverview.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
src/renderer/src/sessions/SessionsOverviewNotice.tsx
src/renderer/src/sessions/SessionsTerminalDetail.tsx
src/renderer/src/sessions/sessions-overview-model.ts
src/renderer/src/sessions/sessions-projection-coordinator.ts
src/renderer/src/sessions/sessions-renderer-observation.ts
src/renderer/src/sessions/sessions-terminal-detail-controller.ts
src/renderer/src/sessions/sessions-terminal-overlay.ts
src/renderer/src/sessions/sessions-terminal-surface.ts
src/renderer/src/sessions/use-sessions-foreground.ts
src/renderer/src/sessions/use-sessions-terminal-detail.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
src/renderer/src/settings/HarnessProfileCommandFields.tsx
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/HarnessProfileEditor.tsx
src/renderer/src/settings/HarnessProfileOverlays.tsx
src/renderer/src/settings/HarnessProfilesSettings.tsx
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/settings/SettingsSection.tsx
src/renderer/src/settings/SettingsSectionNavigation.tsx
src/renderer/src/settings/TerminalThemeGallery.tsx
src/renderer/src/settings/harness-argument-editor.ts
src/renderer/src/settings/harness-profile-draft.ts
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/settings/harness-profile-request-policy.ts
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/sections/AppearanceSettings.tsx
src/renderer/src/settings/sections/GitSettings.tsx
src/renderer/src/settings/sections/KeybindingsSettings.tsx
src/renderer/src/settings/sections/TerminalSettings.tsx
src/renderer/src/settings/sections/TypographyFontField.tsx
src/renderer/src/settings/settings-draft.ts
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/settings-navigation.ts
src/renderer/src/settings/settings.ts
src/renderer/src/settings/typography-presentation.ts
src/renderer/src/settings/typography-settings.ts
src/renderer/src/settings/use-add-harness-dialog.ts
src/renderer/src/settings/use-harness-binding-authorization.ts
src/renderer/src/settings/use-harness-folder-picker.ts
src/renderer/src/settings/use-harness-profile-editor.ts
src/renderer/src/settings/use-harness-profile-load.ts
src/renderer/src/settings/use-settings-controller.ts
src/renderer/src/tree/DirectoryTree.tsx
src/renderer/src/tree/FileCreateOverlays.tsx
src/renderer/src/tree/FileDeletionDialog.tsx
src/renderer/src/tree/FileExternalMoveDialog.tsx
src/renderer/src/tree/FileOrganizationDialog.tsx
src/renderer/src/tree/FileTree.tsx
src/renderer/src/tree/FilenameSearch.tsx
src/renderer/src/tree/directory-entry-sort.ts
src/renderer/src/tree/file-action-destination.ts
src/renderer/src/tree/file-action-menu.ts
src/renderer/src/tree/file-manager-reveal.ts
src/renderer/src/tree/file-name.ts
src/renderer/src/tree/file-operation-feedback.ts
src/renderer/src/tree/git-ignore-refresh.ts
src/renderer/src/tree/git-status-decoration.ts
src/renderer/src/tree/project-entry-drag.ts
src/renderer/src/tree/project-file-entry-name.ts
src/renderer/src/tree/project-file-owner-key.ts
src/renderer/src/tree/use-external-file-actions.ts
src/renderer/src/tree/use-external-file-copy.ts
src/renderer/src/tree/use-external-file-move.ts
src/renderer/src/tree/use-file-create-actions.ts
src/renderer/src/tree/use-file-deletion-actions.ts
src/renderer/src/tree/use-file-manager-reveal.ts
src/renderer/src/tree/use-file-organization-actions.ts
src/renderer/src/tree/use-path-copy-action.ts
src/renderer/src/tree/use-project-file-operation.ts
src/renderer/src/viewer/DiffView.tsx
src/renderer/src/viewer/FileViewer.tsx
src/renderer/src/viewer/FindControl.tsx
src/renderer/src/viewer/GoToLineControl.tsx
src/renderer/src/viewer/LargeFileView.tsx
src/renderer/src/viewer/MarkdownFragment.tsx
src/renderer/src/viewer/RenderedView.tsx
src/renderer/src/viewer/RepositoryImageView.tsx
src/renderer/src/viewer/SourceView.tsx
src/renderer/src/viewer/TabStrip.tsx
src/renderer/src/viewer/code-scroll-anchor.ts
src/renderer/src/viewer/codemirror-find-target.ts
src/renderer/src/viewer/csv-parser.ts
src/renderer/src/viewer/csv-protocol.ts
src/renderer/src/viewer/csv.worker.ts
src/renderer/src/viewer/diff-policy.ts
src/renderer/src/viewer/dom-find-target.ts
src/renderer/src/viewer/external-document-context.ts
src/renderer/src/viewer/external-document-tabs.ts
src/renderer/src/viewer/highlight-protocol.ts
src/renderer/src/viewer/highlight-request.ts
src/renderer/src/viewer/highlight-worker.ts
src/renderer/src/viewer/highlight.worker.ts
src/renderer/src/viewer/json-protocol.ts
src/renderer/src/viewer/json.worker.ts
src/renderer/src/viewer/markdown-client.ts
src/renderer/src/viewer/markdown-extensions.ts
src/renderer/src/viewer/markdown-renderer.ts
src/renderer/src/viewer/markdown-repository-images.ts
src/renderer/src/viewer/markdown.worker.ts
src/renderer/src/viewer/render-protocol.ts
src/renderer/src/viewer/rendered-link-handler.ts
src/renderer/src/viewer/rendered-position.ts
src/renderer/src/viewer/retained-viewer-workspace-cache.ts
src/renderer/src/viewer/shiki-grammar-registry.ts
src/renderer/src/viewer/shiki-language-catalog.ts
src/renderer/src/viewer/shiki-language-names.ts
src/renderer/src/viewer/source-blame-gutter.ts
src/renderer/src/viewer/source-coordinate.ts
src/renderer/src/viewer/source-highlighting.ts
src/renderer/src/viewer/structured-data.ts
src/renderer/src/viewer/tab-state.ts
src/renderer/src/viewer/use-diff-inputs.ts
src/renderer/src/viewer/use-source-blame.ts
src/renderer/src/viewer/use-viewer-path-lifecycle.ts
src/renderer/src/viewer/use-viewer-workspace.ts
src/renderer/src/viewer/viewer-byte-format.ts
src/renderer/src/viewer/viewer-command-targets.ts
src/renderer/src/viewer/viewer-document-refresh.ts
src/renderer/src/viewer/viewer-find.ts
src/renderer/src/viewer/viewer-path-rebind.ts
src/renderer/src/viewer/viewer-path-removal.ts
src/renderer/src/viewer/viewer-position.ts
src/renderer/src/viewer/viewer-read-policy.ts
src/renderer/src/viewer/viewer-workload-policy.ts
src/renderer/src/viewer/viewer-workspace-model.ts
src/renderer/src/viewer/viewer-workspace-persistence.ts
src/renderer/src/viewer/viewer-workspace-selectors.ts
src/renderer/src/viewer/viewer-workspace-state.ts
src/renderer/src/workbench/ConfirmationDialog.tsx
src/renderer/src/workbench/TerminalLayoutControls.tsx
src/renderer/src/workbench/active-terminal-focus.ts
src/renderer/src/workbench/middle-click-close.ts
src/renderer/src/workbench/modal-keyboard-model.ts
src/renderer/src/workbench/use-modal-keyboard.ts
src/renderer/src/workbench/use-renderer-ready.ts
src/renderer/src/workbench/use-terminal-path-activation.ts
src/renderer/src/workbench/use-workbench-commands.ts
src/renderer/src/workbench/use-workbench-layout.ts
src/renderer/src/workbench/use-workbench-overlays.ts
src/renderer/src/workbench/workbench-command-router.ts
src/renderer/src/workbench/workbench-layout-policy.ts
src/renderer/src/workbench/workbench-overlay-model.ts
src/renderer/src/workbench/workspace-pane-state.ts
src/renderer/src/workspaces/ConnectionStatus.tsx
src/renderer/src/workspaces/MissingWorkspaceNotice.tsx
src/renderer/src/workspaces/ProjectsBar.tsx
src/renderer/src/workspaces/SessionDialog.tsx
src/renderer/src/workspaces/SshPromptDialog.tsx
src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
src/renderer/src/workspaces/connection-status.ts
src/renderer/src/workspaces/initial-host-connection.ts
src/renderer/src/workspaces/project-folder-picker-client.ts
src/renderer/src/workspaces/project-session-events.ts
src/renderer/src/workspaces/project-session-model.ts
src/renderer/src/workspaces/project-session.ts
src/renderer/src/workspaces/project-state-delivery.ts
src/renderer/src/workspaces/project-watch-interests.ts
src/renderer/src/workspaces/workspace-attention.ts
src/renderer/src/workspaces/workspace-session-actions.ts
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>1m 25s</sub>

### `bash`

**Inspect App.tsx imports and labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && wc -l src/renderer/src/App.tsx && grep -nE "^import|aria-label=|title=\"" src/renderer/src/App.tsx | head -120

<details>
<summary>43 lines</summary>

```
686 src/renderer/src/App.tsx
1:import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
2:import {
9:import { PaneResizer } from './layout/PaneResizer'
10:import type { WebViewState } from './dashboards/WebPane'
11:import { WebPaneStack } from './dashboards/WebPaneStack'
12:import { useWebPaneWorkspace } from './dashboards/use-web-pane-workspace'
13:import { TerminalWorkspaceCollection } from './terminal/TerminalWorkspaceCollection'
14:import { useTerminalWorkspaceRuntime } from './terminal/use-terminal-workspace-runtime'
15:import { useTerminalAttention } from './terminal/use-terminal-attention'
16:import { ProjectsBar } from './workspaces/ProjectsBar'
17:import { MissingWorkspaceNotice } from './workspaces/MissingWorkspaceNotice'
18:import { useProjectSession } from './workspaces/project-session'
19:import { useProjectWatchInterests } from './workspaces/project-watch-interests'
20:import { SessionDialog } from './workspaces/SessionDialog'
21:import { SshPromptDialog } from './workspaces/SshPromptDialog'
22:import { FileTree } from './tree/FileTree'
23:import { isGitIgnoreRulePath } from './tree/git-ignore-refresh'
24:import { GitPanel } from './git/GitPanel'
25:import { workspaceGitEnabled } from './git/git-capability'
26:import { GitGraphView } from './git/GitGraphView'
27:import { useGitWorkspace } from './git/use-git-workspace'
28:import { FileViewer } from './viewer/FileViewer'
29:import { TabStrip } from './viewer/TabStrip'
30:import { useViewerWorkspace } from './viewer/use-viewer-workspace'
31:import { setAppTheme, useAppTheme } from './theme'
32:import { SettingsDialog } from './settings/SettingsDialog'
33:import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
34:import { useWorkbenchCommands } from './workbench/use-workbench-commands'
35:import { focusVisibleActiveTerminalAfterLayout } from './workbench/active-terminal-focus'
36:import { useWorkbenchLayout } from './workbench/use-workbench-layout'
37:import { useWorkbenchOverlays } from './workbench/use-workbench-overlays'
38:import { TerminalLayoutControls } from './workbench/TerminalLayoutControls'
39:import { useRendererReady } from './workbench/use-renderer-ready'
40:import { useTerminalPathActivation } from './workbench/use-terminal-path-activation'
41:import * as review from './document-review/use-document-review-workspace'
42:import { SessionsApplicationDestination } from './sessions/SessionsApplicationDestination'
294:      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
444:          aria-label="Project rail"
448:          <nav className="rail-nav" aria-label="Project views">
542:              aria-label={
562:        <section className="viewer-panel" aria-label="File viewer">
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>1m 27s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/App.tsx (lines 420-686)

<details>
<summary>267 lines</summary>

```
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

<sub>1m 36s</sub>

### `bash`

**Skim shared type docs comments**

$ cd /private/var/tmp/ws/2002dadb/hvir/src/shared && for f in workspace-types.ts web-pane.ts document-review.ts sessions-projection.ts html-preview.ts harness-profile.ts terminal-attention.ts composer-submit.ts viewer-types.ts workbench-health.ts; do echo "=== $f ($(wc -l < $f) lines)"; grep -nE '^\s*(/\*\*|\*|//)' "$f" | head -25; done

<details>
<summary>61 lines</summary>

```
=== workspace-types.ts (      90 lines)
9:  /** Main-owned identity for ordering and deduplicating authoritative state. */
22:/** Bounded result of the existing per-worktree porcelain status invocation. */
32:/** Host-qualified comparison state retained only for a closed workspace. */
41:  /** Omitted when the root is no longer a Git repository. */
45:/** One checkout reported by `git worktree list`, or the root of a plain directory. */
53:  /** Git's porcelain explanation for why its administrative record is stale. */
62:/** Renderer-facing persisted workspace record. Missing records await lifecycle cleanup. */
70:  /** Closed workspaces stay in the catalog but own no renderer workspace runtime. */
73:  /** Present only when Git still lists this missing workspace as prunable. */
77:  /** Successful discovery found this worktree after the project's baseline. */
81:/** A registered project owns discovered worktree workspaces. */
=== web-pane.ts (      67 lines)
9:  /** Normalized browser-visible URL. Unspecified bind addresses become localhost. */
32:/** Parse the complete loopback HTTP authority used by ADR-013. */
=== document-review.ts (     258 lines)
21:  /** Stable registered project/worktree identity, not a path-derived key. */
78:  /** Lowercase hexadecimal digest of the exact on-disk UTF-8 bytes. */
84:  /** Inclusive, one-based line. */
86:  /** Inclusive, one-based line. */
111:      /** Explicit human decision; staleness remains visible and orthogonal. */
115:/** Representation-independent source identity shared by rendered and source capture. */
120:  /** Exact immediately preceding source, including its line delimiter. */
122:  /** Exact immediately following source, including its line delimiter. */
152:  /** Basename only; review state and user-data paths remain private. */
197:  /** Exact LF-normalized human-readable body used by Preview, Copy, and Insert. */
249:      /** Authoritative durable state after delivered drafts were removed. */
253:      /** The prepared terminal authority was consumed to prevent a duplicate send. */
255:      /** Confirmed describes only the PTY boundary, never agent receipt. */
=== sessions-projection.ts (     406 lines)
20:/** Opaque hvir identity. Consumers may compare or route it, but never present it. */
25:/** Opaque identity for one exact live PTY instance. */
30:/** Projection-owned identity with no host or path content. */
35:/** Projection-owned identity with no host or path content. */
40:/** Path-free qualifier for matching one ProjectState workspace revision in the renderer. */
45:/** Renderer workspace owner selected by main; never present this internal routing value. */
71:/** Content-free cumulative usage projected from the provider-owned observer. */
159:/** Main-safe facts before renderer runtime/attention state is joined. */
249:/** Exact read-only resolution for borrowing an existing renderer terminal surface. */
293:  /** Capability baseline; the active Usage lens overlays demanded observations. */
302:  /** Main-owned observation revision used only for exact actions. */
378:/** Keeps exact private routing and path values from crossing a display boundary. */
=== html-preview.ts (      35 lines)
3:/** HTML previews execute only inside an opaque-origin sandboxed frame. */
7:/** Applied as a response header by the custom protocol, before any HTML runs. */
=== harness-profile.ts (     120 lines)
52:  /** Main-issued authorization for paths outside the registered project. */
88:/** Exhaustive provider-owned ways hvir may start a harness conversation. */
=== terminal-attention.ts (       2 lines)
1:/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
=== composer-submit.ts (       1 lines)
=== viewer-types.ts (     100 lines)
12:  /** Omitted for recovered drafts that have no trustworthy disk version. */
25:  /** Commit whose parent/current blobs form a historical diff. */
39:/**
40: * The one extension point for the smart default in ADR-007. Keep inference
41: * deterministic and visible rather than scattering file-type exceptions
42: * through UI components.
43: */
=== workbench-health.ts (     218 lines)
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/shared/viewer-types.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/shared/viewer-types.ts

<details>
<summary>88 lines</summary>

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
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/shared/web-pane.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/shared/web-pane.ts

<details>
<summary>60 lines</summary>

```
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
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/shared/composer-submit.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/shared/composer-submit.ts

```
export type ComposerSubmitMode = 'enter' | 'ctrl-enter'

```


---

<sub>1m 45s</sub>

### `bash`

**Check web pane loopback proxy**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -n "connectLoopback" -r src/main | head; echo ---; sed -n '1,60p' src/main/web-pane/loopback-http-proxy.ts

<details>
<summary>61 lines</summary>

```
src/main/web-pane/loopback-http-proxy.ts:295:        ? this.options.host.connectLoopback(loopback.endpoint)
src/main/project-host/project-host.ts:289:  connectLoopback(endpoint: LoopbackEndpoint): Promise<Duplex>
src/main/project-host/ssh-host.ts:471:  async connectLoopback(
src/main/project-host/local-host.ts:455:  connectLoopback(endpoint: LoopbackEndpoint): Promise<import('node:stream').Duplex> {
---
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
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>1m 45s</sub>

### `bash`

**Inspect SSH configuration handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,80p' src/main/project-host/ssh-config.ts; echo ---; grep -nE "identityFile|IdentityFile|agent|SSH_AUTH_SOCK|known_hosts|ProxyJump|ProxyCommand" src/main/project-host/ssh-*.ts | head -50

<details>
<summary>58 lines</summary>

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
---
src/main/project-host/ssh-client-lifecycle.ts:103:    level === 'agent' ||
src/main/project-host/ssh-config.ts:8:  readonly identityFiles: readonly string[]
src/main/project-host/ssh-config.ts:31:    const identityFiles = (
src/main/project-host/ssh-config.ts:45:      identityFiles,
src/main/project-host/ssh-host-options.ts:11:  readonly agentSocket?: string
src/main/project-host/ssh-host.ts:709:    const { config, agentSocket, prompter } = this.options
src/main/project-host/ssh-host.ts:803:            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
src/main/project-host/ssh-host.ts:805:          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
src/main/project-host/ssh-host.ts:806:            attempted.add('agent')
src/main/project-host/ssh-host.ts:807:            return { type: 'agent', username: config.user, agent: agentSocket }
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>1m 51s</sub>

### `bash`

**Check SSH config sources and trust**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "\.ssh|ssh_config|config'|SSH_AUTH_SOCK|homedir|known" src/main/project-host/project-host-catalog.ts src/main/project-host/ssh-identity-source.ts src/main/project-host/ssh-host-trust.ts | head -40

<details>
<summary>10 lines</summary>

```
src/main/project-host/project-host-catalog.ts:1:import { homedir } from 'node:os'
src/main/project-host/project-host-catalog.ts:8:import { parseSshConfig, type SshAliasConfig } from './ssh-config'
src/main/project-host/project-host-catalog.ts:47:      const home = options.home ?? homedir()
src/main/project-host/project-host-catalog.ts:56:        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
src/main/project-host/project-host-catalog.ts:150:    if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
src/main/project-host/project-host-catalog.ts:188:  home = homedir(),
src/main/project-host/project-host-catalog.ts:191:  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
src/main/project-host/ssh-host-trust.ts:26:      const parsed: unknown = JSON.parse(await host.readTextFile(file))
<shellId: 12 completed with exit code 0>
```

</details>


---

<sub>1m 51s</sub>

### `bash`

**Find persisted state locations**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "localStorage|applicationUserDataPath\('" src --include='*.ts' --include='*.tsx' | grep -v '/smoke/' | head -40

<details>
<summary>19 lines</summary>

```
src/renderer/src/settings/settings.ts:61:    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
src/renderer/src/settings/settings.ts:70:    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
src/renderer/src/settings/settings.ts:74:    const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')
src/renderer/src/layout/workspace-layout-persistence.ts:16:      localStorage.getItem(`hvir:layout:${root.hostId}:${root.path}`),
src/renderer/src/layout/workspace-layout-persistence.ts:28:    localStorage.setItem(
src/renderer/src/terminal/terminal-split-persistence.ts:57:    return decodeTerminalSplitLayout(localStorage.getItem(terminalSplitStorageKey(root)))
src/renderer/src/terminal/terminal-split-persistence.ts:68:    localStorage.setItem(terminalSplitStorageKey(root), JSON.stringify(layout))
src/renderer/src/workspaces/SessionDialog.tsx:400:      localStorage.getItem(`hvir:recent-folders:${hostId}`) ?? '[]',
src/renderer/src/workspaces/SessionDialog.tsx:415:  localStorage.setItem(`hvir:recent-folders:${hostId}`, JSON.stringify(next))
src/renderer/src/viewer/viewer-workspace-persistence.ts:137:    return decodeViewerTabs(root, localStorage.getItem(viewerStorageKey(root)))
src/renderer/src/viewer/viewer-workspace-persistence.ts:150:    localStorage.setItem(
src/renderer/src/theme.ts:20:    localStorage.setItem(STORAGE_KEY, theme)
src/renderer/src/theme.ts:44:    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
src/main/document-review/document-review-application.ts:29:      localPath(applicationUserDataPath('document-review-drafts.json')),
src/main/index.ts:164:        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
src/main/index.ts:173:      applicationUserDataPath('projects.json'),
src/main/index.ts:192:        localPath(applicationUserDataPath('terminal-sessions.json')),
src/main/index.ts:201:        localPath(applicationUserDataPath('harness-profiles.json')),
<shellId: 13 completed with exit code 0>
```

</details>


---

<sub>1m 54s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/project-host/project-host-catalog.ts (lines 30-110)

<details>
<summary>74 lines</summary>

```

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
```

</details>


---

<sub>1m 54s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/settings/settings-model.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/settings/settings-model.ts

<details>
<summary>47 lines</summary>

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
```

</details>


---

<sub>1m 59s</sub>

### `bash`

**List terminal and smoke modules**

$ cd /private/var/tmp/ws/2002dadb/hvir && git ls-files src/renderer/src/terminal | sed 's#src/renderer/src/terminal/##' | tr '\n' ' '; echo; echo; git ls-files src/main/smoke | sed 's#src/main/smoke/##' | tr '\n' ' '

```
TerminalContextMenu.tsx TerminalContextMeter.tsx TerminalDeck.tsx TerminalMoveDialog.tsx TerminalRail.tsx TerminalRailCompact.tsx TerminalRecoveryDialog.tsx TerminalSearch.tsx TerminalSessionRuntimes.tsx TerminalView.tsx TerminalWorkspace.tsx TerminalWorkspaceCollection.tsx TerminalWorkspaceControls.tsx TerminalWorkspaceDialogs.tsx effect-generation.ts generated-terminal-theme-catalog.ts ghostty-terminal-events.ts ghostty-terminal-file-paste.ts ghostty-terminal-fit.ts ghostty-terminal-keyboard.ts ghostty-terminal-pane.ts harness-launch-menu.ts terminal-attention.ts terminal-clipboard-osc.ts terminal-clipboard-write.ts terminal-clipboard.ts terminal-color-schema.mts terminal-context-menu-position.ts terminal-context-menu-target.ts terminal-event-router.ts terminal-file-link.ts terminal-fit.ts terminal-fork-policy.ts terminal-palette.ts terminal-pane-event-coordinator.ts terminal-pane-factory.ts terminal-pane.ts terminal-probe-policy.ts terminal-profile-recovery.ts terminal-recovery-planner.ts terminal-runtime-interactions.ts terminal-runtime-launch.ts terminal-runtime-live-settings.ts terminal-runtime-options.ts terminal-runtime-presentation.ts terminal-runtime-registry.ts terminal-runtime.ts terminal-search-controller.ts terminal-semantic-regions.ts terminal-sessions-surface-owner.ts terminal-split-persistence.ts terminal-surface-attachment.ts terminal-theme-catalog.ts terminal-wheel.ts terminal-workspace-model.ts terminal-workspace-runtime-owner.ts use-new-worktree-move-badge.ts use-terminal-attention-controller.ts use-terminal-attention.ts use-terminal-context-menu.ts use-terminal-launch-menu-layout.ts use-terminal-pane-controller.ts use-terminal-persistence.ts use-terminal-profiles.ts use-terminal-recovery.ts use-terminal-session-commands.ts use-terminal-workspace-move.ts use-terminal-workspace-runtime.ts use-terminal-workspace-transfer.ts 

app-settings.ts bootstrap-contract.ts capacity-live-presentation.ts capacity-output-fixtures.ts capacity-performance.ts capacity-scenario.ts capacity-terminals.ts capacity.ts cleanup.ts development-performance.ts diagnostic-report-restart.ts document-review-driver.ts document-review-evidence.mts document-review-fixture.ts document-review.ts electron-process-metrics.ts external-documents.ts external-file-move.ts failure-evidence.mts filename-search.ts files-interactions.ts git-changes-layout.ts git-diff.ts git-dirty-navigation.ts git-workflow.ts harness-profile-workflow.ts harness-settings-layout.ts harness-settings-visual.ts image-paste-fallback.ts index.ts interruption-checkpoint.ts interruption-identity.mts macos-file-pasteboard.ts native-host-worker.ts native-pty.ts platform-contracts.ts project-entry-deletion.ts project-file-fixture.ts project-file-operations.ts project-fixture-commands.ts project-state-fixture.ts pty-lifecycle.ts renderer-authority.ts renderer-isolation.ts renderer-lifecycle.ts renderer-readiness-observer.ts renderer-readiness.ts renderer-recovery-delivery.ts renderer-recovery-producer.ts renderer-recovery-scenario.ts renderer-recovery.ts scenario-selection.mts scenarios.ts scrollbar-presentation.ts sessions-project-fixture.ts sessions-projection-scenario.ts sessions-projection.ts sessions-usage-provider.ts sessions-visual.ts terminal-chrome.ts terminal-context-menu.ts terminal-cursor-presentation.ts terminal-explicit-launch.ts terminal-file-paste.ts terminal-hidden-reveal.ts terminal-horizon-presentation.ts terminal-keyboard-negotiation.ts terminal-lifecycle-scenario.ts terminal-ligature-presentation.ts terminal-middle-click-close.ts terminal-move.ts terminal-palette-presentation.ts terminal-presentation-scenarios.ts terminal-presentation.ts terminal-project-return.ts terminal-renderer-lifecycle.ts terminal-scenario-ready.ts terminal-search.ts terminal-semantic-navigation.ts terminal-session-store.ts terminal-split.ts terminal-synchronized-output.ts terminal-theme-gallery-presentation.ts viewer-content.ts viewer-find.ts viewer-fixtures.ts viewer-live-reload.ts viewer-position-operation.ts viewer-position.ts web-pane-boundary.ts web-pane.ts workbench-chrome.ts workbench-health-scenario.ts workbench-health.ts workbench-layout.ts workspace-close.ts workspace-remote.ts
<shellId: 14 completed with exit code 0>
```


---

<sub>2m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/2002dadb/hvir/scripts/check-terminal-runtime.mts

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


---

<sub>2m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/vitest.config.ts.**

/private/var/tmp/ws/2002dadb/hvir/vitest.config.ts

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


---

<sub>2m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/stryker.config.json.**

/private/var/tmp/ws/2002dadb/hvir/stryker.config.json

<details>
<summary>21 lines</summary>

```
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
```

</details>


---

<sub>2m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/packages/rename-noreplace/package.json.**

/private/var/tmp/ws/2002dadb/hvir/packages/rename-noreplace/package.json

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


---

<sub>2m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/packages/rename-noreplace/index.js.**

/private/var/tmp/ws/2002dadb/hvir/packages/rename-noreplace/index.js

<details>
<summary>3 lines</summary>

```
'use strict'

/* global module, require */

module.exports = require('./build/Release/rename_noreplace.node')
```

</details>


---

<sub>2m 10s</sub>

### `bash`

**Inspect smoke scenario runner**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,80p' scripts/run-smoke-scenarios.mts; echo ...; grep -nE "process\.env\[?['\"]?HVIR_[A-Z_]+|argv" scripts/run-smoke-scenarios.mts | head -30

<details>
<summary>76 lines</summary>

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
...
482:    process.argv.slice(2),
549:if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
<shellId: 15 completed with exit code 0>
```

</details>


---

<sub>2m 12s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/run-smoke-scenarios.mts.**

/private/var/tmp/ws/2002dadb/hvir/scripts/run-smoke-scenarios.mts (lines 440-560)

<details>
<summary>111 lines</summary>

```
  try {
    return await Promise.race([
      writeArtifact(),
      new Promise<never>((_resolve, reject) => {
        timer = setTimeout(
          () => reject(new Error('Smoke failure artifact retention timed out')),
          timeoutMs,
        )
      }),
    ])
  } finally {
    if (timer) clearTimeout(timer)
  }
}

export function formatSmokeScenarioResults(
  results: readonly SmokeScenarioResult[],
): string {
  const repetitionCount = results[0]?.repetitionCount ?? 0
  return [
    `[smoke:summary] attempts=${results.length} iterations=${repetitionCount}`,
    ...results.map((result) => {
      const detail =
        result.error ??
        (result.signal
          ? `signal ${result.signal}`
          : `exit ${result.exitCode ?? 'unknown'}`)
      const duration =
        result.durationMs === undefined ? '' : ` · ${Math.round(result.durationMs)}ms`
      return `- ${result.scenario} iteration ${result.iteration}/${result.repetitionCount}: ${result.status} (${detail}${duration})${result.status === 'failed' ? ` · ${formatSmokeFailureEvidence(result.failureEvidence ?? null)}` : ''}`
    }),
  ].join('\n')
}

async function main(): Promise<void> {
  const interruption = new AbortController()
  let escalateActiveAttempt: (() => void) | undefined
  const removeSignalHandlers = registerSmokeLauncherSignals(interruption, () =>
    escalateActiveAttempt?.(),
  )
  const scenarios = selectedSmokeScenarios(
    process.env.HVIR_SMOKE_SCENARIO,
    process.argv.slice(2),
  )
  const repetitionCount = parseSmokeRepetitionCount(process.env.HVIR_SMOKE_REPEAT)
  try {
    const results = await runSmokeScenarioGroups(
      scenarios,
      repetitionCount,
      (scenario, iteration, total) =>
        invokeSmokeScenario(scenario, iteration, total, {
          interruptionSignal: interruption.signal,
          registerSignalEscalation: (escalate) => {
            escalateActiveAttempt = escalate
            return () => {
              if (escalateActiveAttempt === escalate) escalateActiveAttempt = undefined
            }
          },
        }),
      interruption.signal,
    )
    console.log(formatSmokeScenarioResults(results))
    try {
      if (process.env.GITHUB_STEP_SUMMARY) {
        const summary = results
          .map(
            (result) =>
              `- ${result.scenario} iteration ${result.iteration}/${result.repetitionCount}: ${result.status}` +
              (result.status === 'failed'
                ? ` · ${formatSmokeFailureEvidence(result.failureEvidence ?? null)}`
                : ''),
          )
          .join('\n')
        await appendFile(
          process.env.GITHUB_STEP_SUMMARY,
          `\nElectron smoke: ${results.length} scheduled results\n\n${summary}\n`,
        )
      }
    } catch {
      console.error('[smoke:summary] failed to write bounded job summary')
    }
    if (results.some((result) => result.status === 'failed')) process.exitCode = 1
  } finally {
    removeSignalHandlers()
  }
}

export function registerSmokeLauncherSignals(
  interruption: AbortController,
  escalate: () => void = () => undefined,
  target: {
    on(signal: NodeJS.Signals, handler: () => void): void
    off(signal: NodeJS.Signals, handler: () => void): void
  } = process,
): () => void {
  const handlers = new Map<NodeJS.Signals, () => void>()
  for (const signal of ['SIGHUP', 'SIGINT', 'SIGTERM'] as const) {
    const handler = (): void => {
      if (interruption.signal.aborted) return escalate()
      interruption.abort(signal)
    }
    handlers.set(signal, handler)
    target.on(signal, handler)
  }
  return () => {
    for (const [signal, handler] of handlers) target.off(signal, handler)
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  void main().catch((error: unknown) => {
    console.error('[smoke:launcher] failed', error)
    process.exitCode = 1
  })
}
```

</details>


---

<sub>2m 17s</sub>

### `bash`

**View smoke scenario selection**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,80p' src/main/smoke/scenario-selection.mts

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
<shellId: 16 completed with exit code 0>
```

</details>


---

<sub>2m 22s</sub>

### `bash`

**Inspect project-management scripts**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat scripts/project-management/package.json; echo; sed -n '1,60p' scripts/project-management/issue-start-cli.ts; echo ...; grep -rnoE "HVIR_[A-Z_]+" scripts/project-management | awk -F: '{print $NF}' | sort | uniq -c

<details>
<summary>73 lines</summary>

```
{
  "private": true,
  "type": "module"
}

import type { IssueStartOperation, IssueStartReport } from './issue-start.ts'

export interface IssueStartCliOptions {
  help: boolean
  issueNumber?: number
  apply: boolean
  json: boolean
}

export const ISSUE_START_HELP = `Usage: npm run issue:start -- --issue <number> [options]

Plan or apply deterministic issue worktree startup.

Options:
  --issue <number>              Issue in the configured repository
  --apply                       Apply the recomputed setup plan
  --json                        Emit a bounded structured result
  --help                        Show this help

Planning always runs git fetch --prune origin. It does not otherwise mutate a local branch,
worktree, dependency tree, or Project value. Apply prepares dependencies with npm ci and a
15-minute timeout.

Environment:
  HVIR_REPO_TOKEN               Token used for repository issue, PR, and branch reads
  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)
  HVIR_PROJECT_NUMBER           Project number (default: 1)
  HVIR_PRIMARY_ROOT             Primary checkout root when it cannot be inferred
`

export function parseIssueStartCliOptions(args: readonly string[]): IssueStartCliOptions {
  let issueNumber: number | undefined
  let apply = false
  let json = false
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (argument === '--help') return { help: true, apply, json }
    if (argument === '--apply') {
      apply = true
      continue
    }
    if (argument === '--json') {
      json = true
      continue
    }
    if (argument === '--issue') {
      issueNumber = positiveInteger(requireValue(args, ++index, '--issue'), '--issue')
      continue
    }
    throw new Error(`Unknown argument: ${argument}`)
  }
  if (issueNumber === undefined) throw new Error('--issue is required.')
  return { help: false, issueNumber, apply, json }
}

export function formatIssueStartReport(report: IssueStartReport): string {
  const lines = [
    `Issue #${report.issue.number} — ${report.outcome} ${report.apply ? 'apply' : 'startup plan'}`,
...
   6 HVIR_APPLY
   4 HVIR_EVENT_ACTION
   2 HVIR_EVENT_LABEL
   2 HVIR_EVENT_UPDATED_AT
   8 HVIR_ISSUE_NUMBER
   4 HVIR_PREVIOUS_PR_BODY
   4 HVIR_PRIMARY_ROOT
  13 HVIR_PROJECT_NUMBER
  12 HVIR_PROJECT_OWNER
  16 HVIR_PROJECT_TOKEN
   4 HVIR_PULL_REQUEST_NUMBER
  13 HVIR_REPO_TOKEN
  13 HVIR_REPOSITORY
   2 HVIR_USAGE_CWD
   2 HVIR_USAGE_SESSION_ID
<shellId: 17 completed with exit code 0>
```

</details>


---

<sub>2m 27s</sub>

### `bash`

**Inspect architecture check env usage**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat scripts/architecture-hotspots.mjs | head -40; echo ...; grep -nE "HVIR_REPO_TOKEN|GITHUB_|process\.env" scripts/architecture-hotspots.mts scripts/architecture-github.mts scripts/architecture-authorization.mts | head -30

<details>
<summary>15 lines</summary>

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()
...
scripts/architecture-hotspots.mts:85:      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
scripts/architecture-github.mts:102:  environment: NodeJS.ProcessEnv = process.env,
scripts/architecture-github.mts:119:  if (environment.GITHUB_ACTIONS === 'true') {
scripts/architecture-github.mts:121:      environment.GITHUB_EVENT_NAME !== 'pull_request' ||
scripts/architecture-github.mts:122:      environment.GITHUB_REPOSITORY !== RELEASE_REPOSITORY
scripts/architecture-github.mts:125:    if (!environment.GITHUB_EVENT_PATH) throw new Error('Missing PR event file')
scripts/architecture-github.mts:127:      readFileSync(environment.GITHUB_EVENT_PATH, 'utf8'),
scripts/architecture-github.mts:144:      tested !== environment.GITHUB_SHA ||
<shellId: 18 completed with exit code 0>
```

</details>


---

<sub>2m 30s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/architecture-hotspots.mts.**

/private/var/tmp/ws/2002dadb/hvir/scripts/architecture-hotspots.mts (lines 1-140)

<details>
<summary>135 lines</summary>

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
```

</details>


---

<sub>2m 30s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/architecture-github.mts.**

/private/var/tmp/ws/2002dadb/hvir/scripts/architecture-github.mts (lines 30-200)

<details>
<summary>167 lines</summary>

```
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
```

</details>


---

<sub>2m 43s</sub>

### `bash`

**Check Node version and doc references**

$ cd /private/var/tmp/ws/2002dadb/hvir && node --version; npm --version; echo ---; node scripts/check-adrs.mjs 2>&1 | head -5; echo "exit=$?"; echo ---; grep -rnlE "docs/(adr|design)|AGENTS\.md|README\.md|CONTRIBUTING" --include='*.ts' --include='*.mts' --include='*.mjs' --include='*.sh' --include='*.yml' --include='*.json' . 2>/dev/null | grep -v node_modules | head -30

<details>
<summary>26 lines</summary>

```
v26.5.0
11.17.0
---
node:fs:1884
  const result = binding.readdir(
                         ^

Error: ENOENT: no such file or directory, scandir '/private/var/tmp/ws/2002dadb/hvir/docs/adr'
exit=0
---
./test/release-pr-integrity.test.ts
./test/terminal-file-link.test.ts
./test/issue-lifecycle-guidance.test.ts
./test/rendered-link.test.ts
./test/git-ignore-refresh.test.ts
./test/commit-file-tree.test.ts
./test/document-review-delivery.test.ts
./test/filename-search-policy.test.ts
./test/smoke-scenario-runner.test.ts
./test/viewer-types.test.ts
./test/merge-pr-skill.test.ts
./scripts/check-adrs.mjs
./scripts/check-seams.sh
./eslint.config.mjs
./src/main/smoke/viewer-content.ts
./src/main/smoke/sessions-visual.ts
<shellId: 19 completed with exit code 0>
```

</details>


---

<sub>2m 49s</sub>

### `bash`

**Check doc references in tests/eslint**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "docs/|AGENTS\.md|README|CONTRIBUTING|\.agents" test/issue-lifecycle-guidance.test.ts test/merge-pr-skill.test.ts test/release-pr-integrity.test.ts eslint.config.mjs | head -40

<details>
<summary>8 lines</summary>

```
test/issue-lifecycle-guidance.test.ts:8:  'CONTRIBUTING.md',
test/merge-pr-skill.test.ts:13:const agents = readFileSync(new URL('../AGENTS.md', import.meta.url), 'utf8')
test/merge-pr-skill.test.ts:14:const contributing = readFileSync(new URL('../CONTRIBUTING.md', import.meta.url), 'utf8')
test/merge-pr-skill.test.ts:16:  new URL('../docs/project-management.md', import.meta.url),
test/merge-pr-skill.test.ts:23:    const codexPath = new URL('../.agents/skills/hvir-merge-pr', import.meta.url)
test/release-pr-integrity.test.ts:235:      { changedFiles: ['package.json', 'README.md'] },
eslint.config.mjs:8:// --- Seam enforcement (AGENTS.md "Respect the seams") ---------------------
<shellId: 20 completed with exit code 0>
```

</details>


---

<sub>2m 51s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/test/issue-lifecycle-guidance.test.ts.**

/private/var/tmp/ws/2002dadb/hvir/test/issue-lifecycle-guidance.test.ts

<details>
<summary>66 lines</summary>

```
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
```

</details>


---

<sub>2m 51s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/test/merge-pr-skill.test.ts.**

/private/var/tmp/ws/2002dadb/hvir/test/merge-pr-skill.test.ts

<details>
<summary>65 lines</summary>

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
```

</details>


---

<sub>2m 58s</sub>

### `bash`

**Check release PR README handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '215,260p' test/release-pr-integrity.test.ts; echo ...; grep -nE "README|changedFiles|package-lock|allowed" scripts/validate-release-pr.mts | head -20; echo ...; grep -nE "README|writeFile|package" scripts/prepare-release-pr.mjs | head -30

<details>
<summary>64 lines</summary>

```
['another base', { baseBranch: 'epic/385-release-trust' }, 'invalid-base-branch'],
    ['a fork head', { headRepository: 'someone/hvir' }, 'invalid-head-repository'],
    ['another head SHA', { expectedHeadSha: baseSha }, 'invalid-head-sha'],
    ['another source SHA', { sourceSha: baseSha }, 'invalid-source-sha'],
    [
      'a merged source SHA that differs from its merge commit',
      {
        mode: 'merged',
        pullRequestState: 'closed',
        merged: true,
        mergeCommitSha: mergeSha,
        sourceSha: headSha,
      },
      'invalid-source-sha',
    ],
    ['a malformed branch', { headBranch: 'release/v01.9.0' }, 'invalid-release-branch'],
    ['another title', { title: 'Release hvir 0.2.0' }, 'invalid-title'],
    ['a missing marker', { body: 'Automated release' }, 'missing-automation-marker'],
    [
      'another file',
      { changedFiles: ['package.json', 'README.md'] },
      'invalid-changed-files',
    ],
  ] satisfies Array<[string, Partial<ReleasePrIntegrityEvidence>, string]>)(
    'rejects %s',
    (_description, overrides, rejection) => {
      expect(evaluateReleasePrIntegrity(evidence(overrides))).toEqual({
        accepted: false,
        rejection,
      })
    },
  )

  it('rejects malformed or internally inconsistent base package evidence', () => {
    expect(evaluateReleasePrIntegrity(evidence({ basePackage: [] }))).toEqual({
      accepted: false,
      rejection: 'invalid-json-shape',
    })
    expect(
      evaluateReleasePrIntegrity(
        evidence({
          baseLockfile: { ...lockfile('0.1.8'), version: '0.1.7' },
        }),
      ),
    ).toEqual({ accepted: false, rejection: 'inconsistent-base-version' })
  })
...
14:export const RELEASE_VERSION_FILES = ['package-lock.json', 'package.json'] as const
36:  changedFiles: readonly string[]
162:  const changedFiles = [...evidence.changedFiles].sort()
163:  if (!isDeepStrictEqual(changedFiles, [...RELEASE_VERSION_FILES])) {
369:    loadFile('package-lock.json', baseSha),
370:    loadFile('package-lock.json', headSha),
372:    loadFile('package-lock.json', sourceSha),
394:    changedFiles: files.map((file) => githubEvidence.requiredString(file.filename)),
...
14:const expectedVersionFiles = ['package-lock.json', 'package.json']
94:    await readFile(join(repositoryRoot, 'package.json'), 'utf8'),
97:    await readFile(join(repositoryRoot, 'package-lock.json'), 'utf8'),
100:    ['package.json', rootPackage.version],
101:    ['package-lock.json', lockfile.version],
102:    ['package-lock.json root package', lockfile.packages?.['']?.version],
200:    `Automated maintenance release from \`${input.baseSha}\`. This PR bumps the repository packages to \`${input.version}\`; its body is the release changelog and intentionally has no governing issue.`,
208:    `The [preparation run](${input.runUrl}) generated and locally validated this version-only change. Approving GitHub's workflow prompt runs one focused package-version integrity check and a coherent merge aggregate without the ordinary product or native-package matrices. After merge, Release requires the exact accepted pull-request, CI attempt, and source-tree relation before continuing with \`current\`.`,
<shellId: 21 completed with exit code 0>
```

</details>


---

<sub>3m 16s</sub>

### `bash`

**View package install scripts**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat build/pkg-scripts/postinstall | head -60; echo ...; cat build/linux/after-install.sh | head -60

<details>
<summary>112 lines</summary>

```
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
...
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
<shellId: 22 completed with exit code 0>
```

</details>


---

<sub>3m 30s</sub>

### `bash`

**Inspect Claude keybindings and settings nav**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,60p' src/main/harness/claude-keybindings.ts; echo ...; cat src/renderer/src/settings/settings-navigation.ts | head -60

<details>
<summary>79 lines</summary>

```
import {
  hostPath,
  joinHostPath,
  type ComposerSubmitMode,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'

const KEYBINDINGS_FILE = 'keybindings.json'
const STATE_FILE = '.hvir-keybindings-state.json'
const MAX_KEYBINDINGS_BYTES = 1024 * 1024
const MAX_STATE_BYTES = 32 * 1024
const KEYBINDINGS_SCHEMA = 'https://www.schemastore.org/claude-code-keybindings.json'
const KEYBINDINGS_DOCS = 'https://code.claude.com/docs/en/keybindings'
const MANAGED_ACTIONS = {
  enter: 'chat:newline',
  'ctrl-enter': 'chat:submit',
  'shift-enter': 'chat:submit',
} as const

type ManagedKey = keyof typeof MANAGED_ACTIONS
const MANAGED_KEYS = ['enter', 'ctrl-enter', 'shift-enter'] as const
const LEGACY_MANAGED_KEYS = ['enter', 'ctrl-enter'] as const
const FILE_KEYS: Readonly<Record<ManagedKey, string>> = {
  enter: 'enter',
  'ctrl-enter': 'ctrl+enter',
  'shift-enter': 'shift+enter',
}
type BindingValue = string | null
type JsonObject = Record<string, unknown>

interface BindingSlot {
  readonly block: JsonObject
  readonly bindings: JsonObject
  readonly key: string
}

interface BindingSnapshot {
  readonly target: ManagedKey
  readonly key: string
  readonly existed: boolean
  readonly value?: BindingValue
}

interface ActiveState {
  readonly version: 1 | 2 | 3
  readonly active: true
  readonly createdChatBlock: boolean
  readonly createdKeybindingsFile: boolean
  readonly snapshots: readonly BindingSnapshot[]
}

interface InactiveState {
  readonly version: 1 | 2 | 3
  readonly active: false
}

type ConfigurationState = ActiveState | InactiveState

interface OptionalFile {
...
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
<shellId: 23 completed with exit code 0>
```

</details>


---

<sub>3m 35s</sub>

### `bash`

**Inspect composer submit consent UI**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "<p>|<h[1-3]|title|label|Claude|Codex|keybindings" src/renderer/src/settings/ComposerSubmitConsentDialog.tsx | head -30; echo ...; grep -nE "composerSubmit|Ctrl\+Enter|Enter" src/renderer/src/settings/sections/TerminalSettings.tsx | head -20

<details>
<summary>18 lines</summary>

```
14:      labelledBy="composer-submit-consent-title"
16:        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
17:        { label: 'Allow this change', kind: 'primary', onSelect: onConfirm },
22:      <h3 id="composer-submit-consent-title">Allow a Claude configuration change?</h3>
23:      <p>
25:        Shift+Enter Chat bindings in Claude&apos;s <code>keybindings.json</code> on every
28:      <p>
29:        Other Claude bindings are preserved. hvir stores the three previous values and
30:        whether the keybindings file already existed in{' '}
31:        <code>.hvir-keybindings-state.json</code> in Claude&apos;s config directory so
35:      <p>
36:        Claude detects the keybinding update live. Shift+Enter submits in supported
37:        terminals outside hvir. Open Codex sessions keep their launch-time behavior until
...
99:                checked={draft.composerSubmitMode === 'ctrl-enter'}
102:              Send messages with Ctrl+Enter or Command+Enter; Enter inserts a new line
105:              Claude updates live; Shift+Enter also submits in supported external
<shellId: 24 completed with exit code 0>
```

</details>


---

<sub>3m 40s</sub>

### `bash`

**Inspect harness probing**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,50p' src/main/harness/harness-probe.ts; echo ...; sed -n '1,40p' src/main/harness/harness-shell-environment.ts

<details>
<summary>82 lines</summary>

```
import {
  type ComposerSubmitMode,
  type HarnessProfile,
  type HarnessProfileProbe,
  type HarnessProviderCapabilities,
  type HarnessProbeStatus,
  type HostPath,
} from '../../shared'
import type { Disposer, ProjectHost } from '../project-host'
import { resolveHarnessLaunch } from './harness-launch'
import type { HarnessProfileStoreContract } from './harness-profile-store'
import { harnessLaunchCapabilities } from './harness-provider-capabilities'
import { harnessProvider } from './bundled-harness-providers'
import {
  harnessShellProbeCommandArgs,
  harnessShellProbeOutput,
  harnessShellProbeArgs,
} from './harness-shell-environment'

const AVAILABLE_TTL_MS = 10 * 60_000
const NEGATIVE_TTL_MS = 2 * 60_000
const PROBE_TIMEOUT_MS = 8_000
const MAX_PROBE_OUTPUT = 32 * 1024
const MAX_PROFILES_PER_REQUEST = 200
const MAX_CONCURRENT_PER_HOST = 2

interface HostProbeState {
  generation: number
  connectionState: ProjectHost['connectionState']
  active: number
  readonly waiters: Array<() => void>
  readonly cache: Map<string, HarnessProfileProbe>
  readonly advisory: Map<string, HarnessProfileProbe>
  readonly pending: Map<string, Promise<HarnessProfileProbe>>
  disposeConnection: Disposer
}

export interface HarnessProfileAvailabilityContext {
  readonly host: ProjectHost
  readonly projectRoot: HostPath
  readonly workspaceRoot: HostPath
  readonly profiles: readonly HarnessProfile[]
}

export interface ProbeHarnessProfilesRequest extends HarnessProfileAvailabilityContext {
  readonly store: HarnessProfileStoreContract
  readonly force?: boolean
}

/** Bounded, host-scoped availability probes. No probe runs during renderer startup. */
...
/**
 * Run harness discovery and launches through the owning host's login-interactive
 * shell environment. GUI-launched desktop processes do not inherit the path a
 * user's login startup establishes (for example Homebrew in ~/.zprofile).
 */
const HARNESS_PROBE_OUTPUT_MARKER = '\x1ehvir-provider-output-v1\x1f'

export function harnessShellProbeArgs(executable: string): readonly string[] {
  return ['-lic', `command -v ${shellQuote(executable)} >/dev/null 2>&1`]
}

export function harnessShellCommandArgs(
  executable: string,
  args: readonly string[],
): readonly string[] {
  const command = [executable, ...args].map(shellQuote).join(' ')
  return ['-lic', `exec ${command}`]
}

/**
 * Bound provider-owned output after login startup, excluding diagnostics and
 * banners emitted before the detached shell reaches the command.
 */
export function harnessShellProbeCommandArgs(
  executable: string,
  args: readonly string[],
): readonly string[] {
  const command = [executable, ...args].map(shellQuote).join(' ')
  return ['-lic', `printf '\\036hvir-provider-output-v1\\037'; exec ${command} 2>&1`]
}

export function harnessShellProbeOutput(output: string): string | undefined {
  const boundary = output.indexOf(HARNESS_PROBE_OUTPUT_MARKER)
  return boundary === -1
    ? undefined
    : output.slice(boundary + HARNESS_PROBE_OUTPUT_MARKER.length)
}

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", `'"'"'`)}'`
<shellId: 25 completed with exit code 0>
```

</details>


---

<sub>3m 49s</sub>

### `bash`

**Check install-electron binary origin**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls -la node_modules/.bin/install-electron 2>&1; readlink node_modules/.bin/install-electron; echo ...; node -e "const p=require('./node_modules/electron/package.json'); console.log(p.version, JSON.stringify(p.bin), JSON.stringify(p.scripts||{}))"; ls node_modules/electron/ | head -20

<details>
<summary>16 lines</summary>

```
lrwxr-xr-x@ 1 air-jarmak  wheel  22 Sep 23 00:22 node_modules/.bin/install-electron -> ../electron/install.js
../electron/install.js
...
43.4.1 {"electron":"cli.js","install-electron":"install.js"} {}
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
README.md
<shellId: 26 completed with exit code 0>
```

</details>


---

<sub>3m 59s</sub>

### `bash`

**Inspect ProjectRegistry startup selection**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -n "static async create" -A 60 src/main/project-registry.ts | head -90

<details>
<summary>75 lines</summary>

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
<shellId: 27 completed with exit code 0>
```

</details>


---

<sub>4m 9s</sub>

### `bash`

**Check electron-vite arg passthrough**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e "console.log(require('./node_modules/electron-vite/package.json').version)"; grep -rn "'--'" node_modules/electron-vite/dist/*.js 2>/dev/null | head -10; grep -rnE "ELECTRON_CLI_ARGS|electronArgs|process\.argv" node_modules/electron-vite/dist/ 2>/dev/null | head -20

<details>
<summary>9 lines</summary>

```
5.0.0
node_modules/electron-vite/dist/cli.js:58:    if (options['--']) {
node_modules/electron-vite/dist/cli.js:59:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/cli.js:105:    if (options['--']) {
node_modules/electron-vite/dist/cli.js:106:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:224:    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
node_modules/electron-vite/dist/cli.js:59:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/cli.js:106:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
<shellId: 28 completed with exit code 0>
```

</details>


---

<sub>4m 17s</sub>

### `bash`

**Find HVIR env var usage in src**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rn "HVIR_PROJECT_ROOT" --include='*.ts' --include='*.mts' --include='*.mjs' --include='*.sh' --include='*.yml' . | grep -v node_modules | head -20; echo ...; grep -rnoE "process\.env(\.|\[')HVIR_[A-Z_]+" src | awk -F'HVIR_' '{print "HVIR_"$2}' | sort | uniq -c

<details>
<summary>12 lines</summary>

```
./scripts/run-smoke.sh:101:    HVIR_PROJECT_ROOT="$project_root" \
./src/main/index.ts:431:    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
...
   2 HVIR_HARNESS_SETTINGS_CAPTURE_DIR
   1 HVIR_PROJECT_ROOT
   2 HVIR_SESSIONS_CAPTURE_DIR
   2 HVIR_SMOKE
   1 HVIR_SMOKE_REQUIRE_PROCESS_SANDBOX
   1 HVIR_SMOKE_SCENARIO
   1 HVIR_SMOKE_SOURCE_COMMIT
   1 HVIR_SMOKE_SOURCE_DIRTY
<shellId: 29 completed with exit code 0>
```

</details>


---

<sub>4m 23s</sub>

### `bash`

**Check app name/userData overrides**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "app\.setName|setPath\(|getPath\('userData'\)|requestSingleInstanceLock" src/main --include='*.ts' | grep -v '/smoke/' | head; echo ...; grep -rn "userData\|user-data" scripts/run-smoke.sh | head

<details>
<summary>8 lines</summary>

```
src/main/application-runtime-policy.ts:14:  setPath(name: 'userData', path: string): void
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
...
scripts/run-smoke.sh:25:user_data_root="$invocation_root/user-data"
scripts/run-smoke.sh:103:    ELECTRON_CLI_ARGS="[\"--user-data-dir=$user_data_root\"]" \
scripts/run-smoke.sh:121:    --user-data-dir="$user_data_root" &
<shellId: 30 completed with exit code 0>
```

</details>


---

<sub>4m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/run-smoke.sh.**

/private/var/tmp/ws/2002dadb/hvir/scripts/run-smoke.sh

<details>
<summary>114 lines</summary>

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
```

</details>


---

<sub>4m 38s</sub>

### `bash`

**Read electron-vite CLI arg handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '30,120p' node_modules/electron-vite/dist/cli.js; sed -n '210,240p' node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js

<details>
<summary>122 lines</summary>

```
.option('--ignoreConfigWarning', `[boolean] ignore config warning`)
    .option('--sourcemap', `[boolean] output source maps for debug (default: false)`)
    .option('--outDir <dir>', `[string] output directory (default: out)`)
    .option('--entry <file>', `[string] specify electron entry file`);
// dev
cli
    .command('[root]', 'start dev server and electron app')
    .alias('serve')
    .alias('dev')
    .option('-w, --watch', `[boolean] rebuilds when main process or preload script modules have changed on disk`)
    .option('--inspect [port]', `[boolean | number] enable V8 inspector on the specified port`)
    .option('--inspectBrk [port]', `[boolean | number] enable V8 inspector on the specified port`)
    .option('--remoteDebuggingPort <port>', `[string] port for remote debugging`)
    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
    .option('--rendererOnly', `[boolean] only dev server for the renderer`)
    .action(async (root, options) => {
    if (options.remoteDebuggingPort) {
        process.env.REMOTE_DEBUGGING_PORT = options.remoteDebuggingPort;
    }
    if (options.inspect) {
        process.env.V8_INSPECTOR_PORT = typeof options.inspect === 'number' ? `${options.inspect}` : '5858';
    }
    if (options.inspectBrk) {
        process.env.V8_INSPECTOR_BRK_PORT = typeof options.inspectBrk === 'number' ? `${options.inspectBrk}` : '5858';
    }
    if (options.noSandbox) {
        process.env.NO_SANDBOX = '1';
    }
    if (options['--']) {
        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
    }
    if (options.entry) {
        process.env.ELECTRON_ENTRY = options.entry;
    }
    const { createServer } = await import('./chunks/lib-7y7CgM8M.js');
    const inlineConfig = createInlineConfig(root, options);
    try {
        await createServer(inlineConfig, { rendererOnly: options.rendererOnly });
    }
    catch (e) {
        const error = e;
        createLogger(options.logLevel).error(colors.red(`error during start dev server and electron app:\n${error.stack}`), { error });
        process.exit(1);
    }
});
// build
cli.command('build [root]', 'build for production').action(async (root, options) => {
    const { build } = await import('./chunks/lib-BkLsMF4i.js');
    const inlineConfig = createInlineConfig(root, options);
    if (options.entry) {
        process.env.ELECTRON_ENTRY = options.entry;
    }
    try {
        await build(inlineConfig);
    }
    catch (e) {
        const error = e;
        createLogger(options.logLevel).error(colors.red(`error during build:\n${error.stack}`), { error });
        process.exit(1);
    }
});
// preview
cli
    .command('preview [root]', 'start electron app to preview production build')
    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
    .option('--skipBuild', `[boolean] skip build`)
    .action(async (root, options) => {
    const { preview } = await import('./chunks/lib-Dvh2Hokw.js');
    const inlineConfig = createInlineConfig(root, options);
    if (options.noSandbox) {
        process.env.NO_SANDBOX = '1';
    }
    if (options.entry) {
        process.env.ELECTRON_ENTRY = options.entry;
    }
    if (options['--']) {
        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
    }
    try {
        await preview(inlineConfig, { skipBuild: options.skipBuild });
    }
    catch (e) {
        const error = e;
        createLogger(options.logLevel).error(colors.red(`error during preview electron app:\n${error.stack}`), { error });
        process.exit(1);
    }
});
cli.help();
cli.version(version);
cli.parse();
        '22': '108'
    };
    if (electronVer && parseInt(electronVer) > 10) {
        let target = chromeVer[electronVer];
        if (!target)
            target = Object.values(chromeVer).reverse()[0];
        return 'chrome' + target;
    }
    return '';
}
function startElectron(root) {
    ensureElectronEntryFile(root);
    const electronPath = getElectronPath();
    const isDev = process.env.NODE_ENV_ELECTRON_VITE === 'development';
    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
    if (!!process.env.REMOTE_DEBUGGING_PORT && isDev) {
        args.push(`--remote-debugging-port=${process.env.REMOTE_DEBUGGING_PORT}`);
    }
    if (!!process.env.V8_INSPECTOR_PORT && isDev) {
        args.push(`--inspect=${process.env.V8_INSPECTOR_PORT}`);
    }
    if (!!process.env.V8_INSPECTOR_BRK_PORT && isDev) {
        args.push(`--inspect-brk=${process.env.V8_INSPECTOR_BRK_PORT}`);
    }
    if (process.env.NO_SANDBOX === '1') {
        args.push('--no-sandbox');
    }
    const entry = process.env.ELECTRON_ENTRY || '.';
    const ps = spawn(electronPath, [entry].concat(args), { stdio: 'inherit' });
    ps.on('close', process.exit);
    return ps;
<shellId: 31 completed with exit code 0>
```

</details>


---

<sub>4m 45s</sub>

### `bash`

**Check localPath absolute requirement**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -n "export function localPath" -A 12 src/shared/host-path.ts

<details>
<summary>14 lines</summary>

```
38:export function localPath(path: string): HostPath {
39-  return hostPath(LOCAL_HOST_ID, path)
40-}
41-
42-export function isLocal(p: HostPath): boolean {
43-  return p.hostId === LOCAL_HOST_ID
44-}
45-
46-export function hostPathEquals(a: HostPath, b: HostPath): boolean {
47-  return a.hostId === b.hostId && a.path === b.path
48-}
49-
50-/** Return whether a host-qualified path is the parent itself or one of its descendants. */
<shellId: 32 completed with exit code 0>
```

</details>


---

<sub>4m 52s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/eslint.config.mjs.**

/private/var/tmp/ws/2002dadb/hvir/eslint.config.mjs (lines 1-80)

<details>
<summary>71 lines</summary>

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
```

</details>


---

<sub>4m 52s</sub>

### `bash`

**Inspect preload bridge**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,40p' src/preload/index.ts; echo ...; grep -c "" src/preload/index.ts

<details>
<summary>38 lines</summary>

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

...
110
<shellId: 33 completed with exit code 0>
```

</details>


---

<sub>4m 56s</sub>

### `bash`

**Inspect SSH acceptance scripts**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,50p' scripts/run-macos-ssh-acceptance.sh; echo ....; grep -nE "HVIR_[A-Z_]+" -o scripts/run-real-host-ssh-acceptance.mts scripts/real-host-ssh-contract.mts | awk -F: '{print $NF}' | sort | uniq -c

<details>
<summary>58 lines</summary>

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
....
   1 HVIR_REAL_HOST_PROVIDER_OBSERVER_OK
   1 HVIR_REAL_HOST_PTY_OK
   1 HVIR_REAL_SSH_ARTIFACT_DIR
   3 HVIR_REAL_SSH_HOST
   3 HVIR_REAL_SSH_HOST_KEY
   4 HVIR_REAL_SSH_IDENTITY_FILE
   4 HVIR_REAL_SSH_PASSPHRASE
   3 HVIR_REAL_SSH_PORT
   6 HVIR_REAL_SSH_PRIVATE_KEY
   3 HVIR_REAL_SSH_ROOT_PARENT
   3 HVIR_REAL_SSH_USER
<shellId: 34 completed with exit code 0>
```

</details>


---

<sub>5m 1s</sub>

### `bash`

**Inspect gauntlet and ghostty update scripts**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,30p' scripts/phase8-gauntlet.sh; echo ....; sed -n '1,30p' scripts/run-smoke-interruption.mts | grep -E "^//|^\s*\*" ; echo ....; sed -n '1,25p' scripts/ghostty-web-update/cli.mts

<details>
<summary>32 lines</summary>

```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi
....
....
#!/usr/bin/env node

import console from 'node:console'
import { appendFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import {
  applyCandidateBundle,
  assertDeliveryStateUnchanged,
  assertValidatedReleaseUnchanged,
  readCandidateBundle,
  writeCandidateBundle,
} from './candidate-bundle.mts'
import { prepareGhosttyWebUpdate } from './coordinator.mts'
import { BoundedGitHubClient } from './github-client.mts'
import { GitHubGhosttyWebDelivery } from './github-delivery.mts'
import { GitHubGhosttyWebReleaseSource } from './github-release-source.mts'
import { selectNewestPublishedRelease } from './policy.mts'
import { RepositoryGhosttyWebCandidate } from './repository-candidate.mts'

const repositoryRoot = resolve(fileURLToPath(new URL('../..', import.meta.url)))

async function main(): Promise<void> {
<shellId: 35 completed with exit code 0>
```

</details>


---

<sub>5m 5s</sub>

### `bash`

**Check installed package smoke guards**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,40p' scripts/run-linux-package-smoke.sh | grep -nE "HVIR_|echo|disposable|refus" ; echo ....; sed -n '1,60p' scripts/run-macos-package-smoke.sh | grep -nE "HVIR_|echo|disposable|refus"

<details>
<summary>19 lines</summary>

```
8:  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
16:  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
21:if [[ "${HVIR_LINUX_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
22:  echo 'Set HVIR_LINUX_PACKAGE_ACCEPTANCE=1 on a disposable compatible Linux host.' >&2
27:  echo 'Run native package acceptance as an unprivileged user with sudo access.' >&2
37:    echo 'Native package acceptance requires active AppArmor enforcement on this host.' >&2
....
7:if [[ "${HVIR_MACOS_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
8:  echo 'Refusing to modify native package state without HVIR_MACOS_PACKAGE_ACCEPTANCE=1.' >&2
12:  echo "Native macOS package acceptance requires macOS arm64, found $(uname -s) $(uname -m)." >&2
16:  echo 'Native macOS package acceptance is restricted to an ephemeral GitHub Actions host.' >&2
19:case "${HVIR_MACOS_PACKAGE_MODE:-}" in
20:structural | signed) package_mode=$HVIR_MACOS_PACKAGE_MODE ;;
22:  echo 'HVIR_MACOS_PACKAGE_MODE must be structural or signed.' >&2
33:expected_team_id=${HVIR_MACOS_EXPECTED_TEAM_ID:-}
40:  echo "Expected exactly one macOS arm64 package, found ${#package_matches[@]}." >&2
47:    echo "Refusing to replace pre-existing acceptance host state: $path" >&2
52:  echo "Refusing to replace pre-existing package receipt: $receipt" >&2
<shellId: 36 completed with exit code 0>
```

</details>


---

<sub>5m 15s</sub>

### `bash`

**Look for product tagline text**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat src/renderer/index.html | head -30; echo ....; grep -rnE "workbench for|hvir is|hvir lets|Welcome to hvir|agent workbench" src --include='*.ts' --include='*.tsx' | grep -v '/smoke/' | head -10

<details>
<summary>30 lines</summary>

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
....
src/renderer/src/sessions/sessions-terminal-detail-controller.ts:148:        'Terminal detail is paused while hvir is not in the foreground.',
src/shared/host-path.ts:4: * Every path in hvir is a `(host, path)` pair — never a bare string, even in
src/main/window/electron-window-manager.ts:375:          title: 'hvir is not responding',
<shellId: 37 completed with exit code 0>
```

</details>


---

<sub>5m 20s</sub>

### `bash`

**Collect UI labels for feature naming**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nhoE "(aria-label|title)=\"[^\"]+\"|>[A-Z][A-Za-z ,.'’-]{6,}<" src/renderer/src/sessions/*.tsx src/renderer/src/workspaces/ProjectsBar.tsx src/renderer/src/terminal/TerminalWorkspaceControls.tsx src/renderer/src/terminal/TerminalRail.tsx src/renderer/src/document-review/*.tsx | sort -u | head -80

<details>
<summary>47 lines</summary>

```
104:>Terminals<
109:aria-label="Collapse terminal rail"
110:title="Collapse terminal rail"
126:title="Move active terminal to another worktree"
13:aria-label="Review handoff preview"
15:>Review and send<
17:aria-label="Document review"
175:aria-label="Split terminal"
176:title="Open a shell in the other terminal split"
179:>No comments at this location.<
185:aria-label="Open settings"
186:title="Settings"
187:aria-label="Projects"
195:aria-label="New terminal"
196:title="New terminal"
21:>Exact destination<
216:aria-label="New review comment"
23:aria-label="Review handoff destination"
245:title="Connection controls"
26:title="Document review mode"
27:aria-label="Session collection controls"
289:aria-label="Register project"
290:title="Register project"
305:title="Updates paused"
309:aria-label="Open settings"
310:title="Loading sessions"
310:title="Settings"
315:title="Close terminal"
315:title="Sessions unavailable"
320:aria-label="Workspaces"
325:title="No hvir sessions"
330:title="No sessions match"
34:aria-label="Add comment for selected source lines"
348:aria-label="Sessions pages"
374:aria-label="hvir sessions"
377:title="Forget removed worktree from hvir"
396:title="Remove Git's stale worktree administrative records"
50:>Terminal<
53:>Project<
54:>Provider<
58:>Lifecycle<
64:>Attention<
65:>Attention and activity<
67:>Workspace<
73:aria-label="Document review comments"
79:aria-label="Exact review delivery preview"
<shellId: 38 completed with exit code 0>
```

</details>


---

<sub>5m 26s</sub>

### `bash`

**Collect more UI labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nhoE "(aria-label|title|placeholder)=\"[^\"]+\"|>[A-Z][A-Za-z ,.'’-]{4,}<" src/renderer/src/dashboards/*.tsx src/renderer/src/viewer/TabStrip.tsx src/renderer/src/viewer/FileViewer.tsx src/renderer/src/git/GitPanel.tsx src/renderer/src/git/GitBranchControls.tsx src/renderer/src/terminal/TerminalRecoveryDialog.tsx src/renderer/src/terminal/TerminalContextMenu.tsx | sort -u | head -80

<details>
<summary>35 lines</summary>

```
103:>Reconnect to inspect Git.<
117:>Restore terminals<
126:placeholder="/"
132:title="Reload"
139:aria-label="Reveal source terminal"
140:title="Back to terminal"
147:aria-label="Web pane diagnostics"
149:title="Diagnostics"
165:title="Repository history graph"
170:>Git history<
175:aria-label="Close Git history"
182:aria-label="Terminal actions"
187:aria-label="Viewer"
199:aria-label="Web pane diagnostics"
201:>Recent pane events<
215:>No failures or console warnings recorded.<
222:aria-label="Split viewer right"
223:title="Split viewer right"
233:aria-label="Close secondary viewer"
234:title="Close secondary viewer"
236:aria-label="Diff base"
240:>Index<
242:>Branch point<
259:aria-label="View mode"
260:>Fork Conversation to New Terminal<
267:>Unsaved changes in this tab will be discarded.<
312:aria-label="View mode"
380:>Source, diff, and review capture are unavailable.<
44:>Branch<
69:aria-label="Git"
90:aria-label="Back"
91:title="Back"
98:aria-label="Forward"
99:title="Forward"
<shellId: 39 completed with exit code 0>
```

</details>


---

<sub>5m 31s</sub>

### `bash`

**Check viewer editing and blame support**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "Mod-s|'s'|writeFile|Save|save\(" src/renderer/src/viewer/SourceView.tsx src/renderer/src/viewer/FileViewer.tsx src/renderer/src/viewer/use-viewer-workspace.ts 2>/dev/null | head -15; echo ....; grep -rn "blame" src/renderer/src/viewer/SourceView.tsx | head -5

<details>
<summary>20 lines</summary>

```
src/renderer/src/viewer/SourceView.tsx:29:  onSave,
src/renderer/src/viewer/SourceView.tsx:45:  readonly onSave: () => void
src/renderer/src/viewer/SourceView.tsx:64:  const callbacks = useRef({ onContent, onSave, onPosition })
src/renderer/src/viewer/SourceView.tsx:70:  callbacks.current = { onContent, onSave, onPosition }
src/renderer/src/viewer/SourceView.tsx:110:              key: 'Mod-s',
src/renderer/src/viewer/SourceView.tsx:113:                if (!readOnly) callbacks.current.onSave()
src/renderer/src/viewer/FileViewer.tsx:55:  readonly onSave: () => void
src/renderer/src/viewer/FileViewer.tsx:71:  onSave,
src/renderer/src/viewer/FileViewer.tsx:195:              Save failed
src/renderer/src/viewer/FileViewer.tsx:347:            onSave={onSave}
src/renderer/src/viewer/FileViewer.tsx:389:  onSave,
src/renderer/src/viewer/FileViewer.tsx:406:  readonly onSave: () => void
src/renderer/src/viewer/FileViewer.tsx:479:      onSave={onSave}
....
src/renderer/src/viewer/SourceView.tsx:18:import { blameGutter } from './source-blame-gutter'
src/renderer/src/viewer/SourceView.tsx:31:  blame,
src/renderer/src/viewer/SourceView.tsx:32:  blameStatus,
src/renderer/src/viewer/SourceView.tsx:47:  readonly blame: readonly GitBlameRun[]
src/renderer/src/viewer/SourceView.tsx:48:  readonly blameStatus: string
<shellId: 40 completed with exit code 0>
```

</details>


---

<sub>5m 36s</sub>

### `bash`

**View configs and test layout**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat .prettierrc.json; echo; cat tsconfig.json; echo; cat tsconfig.node.json; echo; cat tsconfig.web.json; echo; cat .github/dependabot.yml | head -30; ls test | head -5; ls test | wc -l; ls test | grep -v '\.test\.' | head -30

<details>
<summary>88 lines</summary>

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}

{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}

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
adr-lifecycle.test.ts
application-runtime.test.ts
architecture-command.test.ts
architecture-github.test.ts
architecture-history.test.ts
     381
fixtures
github-workflow-contexts.ts
ssh-host-test-fixture.ts
test-console-output-policy.ts
worker-host.typecheck.ts
<shellId: 41 completed with exit code 0>
```

</details>


---

<sub>5m 45s</sub>

### `bash`

**Validate single-test and seam commands**

$ cd /private/var/tmp/ws/2002dadb/hvir && timeout 120 npm test -- test/viewer-types.test.ts 2>&1 | tail -15; echo "exit=${PIPESTATUS[0]}"; timeout 60 npm run check-seams 2>&1 | tail -5

```
/bin/bash: timeout: command not found
exit=127
/bin/bash: timeout: command not found
<shellId: 42 completed with exit code 0>
```


---

<sub>5m 50s</sub>

### `bash`

**Run single test and seam check**

$ cd /private/var/tmp/ws/2002dadb/hvir && npm test -- test/viewer-types.test.ts 2>&1 | tail -12; echo "exit=${PIPESTATUS[0]}"; npm run check-seams 2>&1 | tail -4

<details>
<summary>12 lines</summary>

```
> vitest run test/viewer-types.test.ts


 RUN  v5.0.0 /private/var/tmp/ws/2002dadb/hvir

 ✓ test/viewer-types.test.ts (11 tests) 3ms

 Test Files  1 passed (1)
      Tests  11 passed (11)
   Start at  00:28:45
   Duration  188ms (transform 81%, import 11%, setup 4%, tests 2%, worker 2%)

exit=0
✓ Git commands use the shared command context
✓ Git worker proxy exposes only exact exec, read, and metadata operations

seam check passed
<shellId: 43 completed with exit code 0>
```

</details>


---

<sub>5m 59s</sub>

### `bash`

**Verify offline architecture report**

$ cd /private/var/tmp/ws/2002dadb/hvir && npm run architecture:report 2>&1 | head -12; echo "exit=${PIPESTATUS[0]}"

<details>
<summary>12 lines</summary>

```
> hvir@0.2.3 architecture:report
> node scripts/architecture-hotspots.mjs

architecture budgets (provisional-report)
1196 maintained source files; every file has one governing rule
No authorization claimed; architecture:check resolves the current target and acceptance evidence.
· scripts/native-installer.template.sh: 659/1000 lines (tooling, ordinary, above comfort)
· scripts/project-management/canonical-project.ts: 634/1000 lines (tooling, ordinary, above comfort)
· scripts/project-management/issue-start.ts: 711/1000 lines (tooling, ordinary, above comfort)
· scripts/project-management/pull-request-planning.ts: 738/1000 lines (tooling, ordinary, above comfort)
· scripts/require-release-ci-evidence.mts: 503/1000 lines (tooling, ordinary, above comfort)
exit=0
<shellId: 44 completed with exit code 0>
```

</details>


---

<sub>6m 4s</sub>

### `bash`

**Check architecture inventory scope**

$ cd /private/var/tmp/ws/2002dadb/hvir && head -c 3000 scripts/architecture-hotspots.json; echo; echo ....; grep -nE "\.md|extensions|include|exclude|git ls-files|ls-files" scripts/architecture-inventory.mts scripts/architecture-policy.mts | head -30

<details>
<summary>104 lines</summary>

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
      "rationale": "
....
scripts/architecture-inventory.mts:232:      ['stricter', 'transitional'].includes(e.kind),
scripts/architecture-inventory.mts:259:        ['stricter', 'transitional'].includes(ruleFor(accepted, entry.path).kind),
scripts/architecture-policy.mts:37:  '.md',
scripts/architecture-policy.mts:82:  extensions: string[]
scripts/architecture-policy.mts:111:// Configured source extensions always win. These fixed data dispositions are not a
scripts/architecture-policy.mts:118:  if (policy.extensions.includes(extension)) return 'source'
scripts/architecture-policy.mts:121:    ['.log', '.tsbuildinfo'].includes(extension) ||
scripts/architecture-policy.mts:146:  return !path.includes('/') || policy.roots.some((root) => path.startsWith(`${root}/`))
scripts/architecture-policy.mts:164:    Object.keys(value).some((key) => !keys.includes(key))
scripts/architecture-policy.mts:179:    value.includes('\\') ||
scripts/architecture-policy.mts:216:      'extensions',
scripts/architecture-policy.mts:226:  uniqueStrings(value.extensions, 'extensions')
scripts/architecture-policy.mts:228:    extensions = value.extensions
scripts/architecture-policy.mts:230:    SOURCE_ROOTS.some((root) => !roots.includes(root)) ||
scripts/architecture-policy.mts:231:    SOURCE_EXTENSIONS.some((ext) => !extensions.includes(ext))
scripts/architecture-policy.mts:233:    throw new Error('Required maintained source roots/extensions cannot be excluded')
scripts/architecture-policy.mts:235:  if (extensions.some((ext) => !/^\.[a-z]+$/.test(ext)))
scripts/architecture-policy.mts:319:    extensions,
scripts/architecture-policy.mts:339:  const priorLimit = ['stricter', 'transitional'].includes(before.kind)
scripts/architecture-policy.mts:344:    ['stricter', 'transitional'].includes(before.kind) &&
scripts/architecture-policy.mts:384:    before.roots.some((root) => !after.roots.includes(root)) ||
scripts/architecture-policy.mts:385:    before.extensions.some((ext) => !after.extensions.includes(ext))
scripts/architecture-policy.mts:428:    extensions: SOURCE_EXTENSIONS,
scripts/architecture-policy.mts:445:      const effectiveLimit = ['stricter', 'transitional'].includes(rule.kind)
<shellId: 45 completed with exit code 0>
```

</details>


---

<sub>6m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/scripts/architecture-policy.mts.**

/private/var/tmp/ws/2002dadb/hvir/scripts/architecture-policy.mts (lines 25-150)

<details>
<summary>122 lines</summary>

```
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
```

</details>


---

<sub>6m 19s</sub>

### `bash`

**Check issue worktree conventions**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "agent/issue-|worktree add|\.worktrees|worktreePath|npm ci" scripts/project-management/issue-start.ts scripts/project-management/native-issue-worktrees.ts | head -20

```
scripts/project-management/issue-start.ts:699:      return 'npm ci failed; the selected worktree was retained.'
scripts/project-management/issue-start.ts:701:      return 'npm ci could not be started; the selected worktree was retained.'
scripts/project-management/issue-start.ts:703:      return 'npm ci exceeded the 15-minute timeout; the selected worktree was retained.'
<shellId: 46 completed with exit code 0>
```


---

<sub>6m 22s</sub>

### `bash`

**Find issue branch naming**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "'agent/|\`agent/|issue-\\$|branchName|worktreeRoot|join\(" scripts/project-management/native-issue-worktrees.ts | head -20; grep -rnE "agent/issue" scripts/project-management/*.ts | head -5

<details>
<summary>8 lines</summary>

```
54:        return join(await realpath(candidate), ...suffix.reverse())
62:        if (parent === candidate) return join(candidate, ...suffix.reverse())
89:        const branchName = mergeRef.slice('refs/heads/'.length)
92:            ? `refs/heads/${branchName}`
93:            : `refs/remotes/${remoteName}/${branchName}`
95:          name: `${remoteName}/${branchName}`,
scripts/project-management/issue-context.ts:150:      branch: `agent/issue-${input.issueNumber}`,
<shellId: 47 completed with exit code 0>
```

</details>


---

<sub>6m 43s</sub>

### `bash`

**Verify diff bases, mermaid, review actions**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '225,250p' src/renderer/src/viewer/TabStrip.tsx; echo ....; grep -nE "mermaid" src/renderer/src/viewer/markdown-extensions.ts src/renderer/src/viewer/markdown-renderer.ts | head -8; echo ....; grep -nhoE ">[A-Z][A-Za-z ,.'’-]{2,}<|label: '[^']+'" src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx src/renderer/src/document-review/DocumentReviewControls.tsx | sort -u | head -30

<details>
<summary>39 lines</summary>

```
>
            ◫
          </button>
        ) : null}
        {pane === 'secondary' && onClosePane ? (
          <button
            className="viewer-pane-action"
            type="button"
            aria-label="Close secondary viewer"
            title="Close secondary viewer"
            onClick={onClosePane}
          >
            ×
          </button>
        ) : null}
      </div>
      {pathCopyRoot ? (
        <PathCopyMenu workspaceRoot={pathCopyRoot} controller={pathCopyMenu} />
      ) : null}
      {pendingClose ? (
        <ConfirmationDialog
          labelledBy={`dirty-tab-close-${pane}`}
          actions={[
            {
              label: 'Cancel',
              kind: 'cancel',
....
src/renderer/src/viewer/markdown-renderer.ts:11:const MERMAID_FENCE_LANGUAGES = new Set(['mermaid', 'mmd'])
src/renderer/src/viewer/markdown-renderer.ts:40:        `<div class="mermaid-diagram"><pre>${escapeHtml(token.content)}</pre></div>`,
....
15:>Review and send<
177:label: 'Cancel'
182:label: 'Discard review'
21:>Exact destination<
50:>Terminal<
54:>Provider<
58:>Lifecycle<
64:>Attention<
<shellId: 48 completed with exit code 0>
```

</details>


---

<sub>6m 48s</sub>

### `bash`

**Find review action labels and diff bases**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "'(Insert|Send now|Copy|Preview)[^']*'|>(Insert|Send now|Copy|Preview)[^<]*<" src/renderer/src/document-review/ | head -12; echo ....; grep -rnE "Index|Branch point|HEAD" src/renderer/src/viewer/FileViewer.tsx | head -10

<details>
<summary>11 lines</summary>

```
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:33:                ? 'Send now supported'
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:35:                  ? 'Insert supported'
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:36:                  : 'Copy only'}
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:88:              {delivery.copied ? 'Copied' : 'Copy review'}
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:100:                  ? 'Insert one atomic bracketed paste without submitting'
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:107:              {delivery.inserted ? 'Inserted' : 'Insert review'}
....
src/renderer/src/viewer/FileViewer.tsx:240:                <option value="working-tree">Index</option>
src/renderer/src/viewer/FileViewer.tsx:241:                <option value="head">HEAD</option>
src/renderer/src/viewer/FileViewer.tsx:242:                <option value="branch-point">Branch point</option>
<shellId: 49 completed with exit code 0>
```

</details>


---

<sub>6m 48s</sub>

### `bash`

**Verify SSH host-key trust behavior**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "unknown|mismatch|trust|prompt" src/main/project-host/ssh-host-trust.ts | head -15; echo ....; grep -nE "hostVerifier|hostKey|fingerprint|trust" src/main/project-host/ssh-host.ts | head -20

<details>
<summary>23 lines</summary>

```
7:  readonly trustedHostKey: () => string | undefined
14:/** Owns the alias-keyed local host-trust record, not host-key acceptance policy. */
26:      const parsed: unknown = JSON.parse(await host.readTextFile(file))
48:      trustedHostKey: () => this.fingerprints[alias],
....
744:      // compare a fingerprint without the handshake timing out underneath it.
746:      hostVerifier: (key: Buffer, verify: (valid: boolean) => void) => {
751:        const fingerprint = `SHA256:${createHash('sha256')
755:        const trustedFingerprint =
756:          this.acceptedHostFingerprint ?? this.options.trust.trustedHostKey()
757:        if (trustedFingerprint === fingerprint) {
763:          kind: trustedFingerprint ? 'host-key-changed' : 'host-key',
764:          title: trustedFingerprint
767:          instructions: trustedFingerprint
768:            ? 'The saved host key does not match. This can indicate a machine rebuild or a man-in-the-middle attack. Verify both fingerprints before replacing it.'
769:            : 'Verify the SHA-256 fingerprint before trusting this host.',
770:          fingerprint,
771:          previousFingerprint: trustedFingerprint,
775:            const trusted = a?.[0]?.toLowerCase() === 'yes'
776:            if (!trusted || !isActive()) {
780:            await this.options.trust.rememberHostKey(fingerprint)
785:            this.acceptedHostFingerprint = fingerprint
<shellId: 50 completed with exit code 0>
```

</details>


---

<sub>6m 53s</sub>

### `bash`

**Check paste and file-link semantics**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,30p' src/main/harness/remote-image-paste.ts | grep -E "^\s*(/\*\*|\*|//)"; echo ....; sed -n '1,30p' src/shared/terminal-clipboard-file-paste.ts | grep -E "^\s*(/\*\*|\*|//)"; echo ....; grep -nE "^\s*(/\*\*|\*|//)" src/renderer/src/terminal/terminal-file-link.ts | head -10

<details>
<summary>14 lines</summary>

```
....
/** Validate inert local path text without granting filesystem authority. */
....
33:/** Detect conservative, single-line path candidates without executing or resolving them. */
58:/** Parse file URI/path and optional `:line[:column]` decoration. */
86:/** Keep the terminal host; main separately validates document reads. */
108:// Match both forms so this provider overrides ghostty-web's global window.open
109:// handler for schemed loopback URLs as well as detecting scheme-less output.
120:/** Detect loopback server links in one terminal line. */
128:    // Schemed lookalikes are still claimed so Ghostty's built-in provider
129:    // cannot send malformed or userinfo-bearing loopback URLs to window.open.
130:    // Scheme-less output has no competing provider, so surface it only when
131:    // activation can produce an authorized URL.
<shellId: 51 completed with exit code 0>
```

</details>


---

<sub>6m 57s</sub>

### `bash`

**Inspect remote image paste exports**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "export (class|function|interface|const)|/\*\*" src/main/harness/remote-image-paste.ts | head -15; echo ....; grep -nE "export (class|function|interface|const)|/\*\*" src/main/harness/remote-image-paste-storage.ts | head -10

<details>
<summary>18 lines</summary>

```
27:export const REMOTE_IMAGE_PASTE_MAX_BYTES = 20 * 1024 * 1024
28:export const REMOTE_IMAGE_PASTE_MAX_PIXELS = 32 * 1024 * 1024
29:export const REMOTE_IMAGE_PASTE_MAX_DIMENSION = 8_192
30:export const REMOTE_IMAGE_PASTE_MAX_CONCURRENT = 2
31:export const REMOTE_IMAGE_PASTE_MAX_HOST_ITEMS = 16
32:export const REMOTE_IMAGE_PASTE_MAX_HOST_BYTES = 64 * 1024 * 1024
33:export const REMOTE_IMAGE_PASTE_TRANSFER_TIMEOUT_MS = 15_000
34:export const REMOTE_IMAGE_PASTE_TTL_MS = 24 * 60 * 60_000
37:export interface ClipboardPng {
43:export interface ClipboardPngSource {
50:export interface RemoteImagePasteCoordinatorOptions {
97:/**
101:export class RemoteImagePasteCoordinator {
....
7:export interface RemoteImagePasteStoragePort {
12:/** Private, collision-safe remote materialization behind ProjectHost. */
13:export class RemoteImagePasteStorage implements RemoteImagePasteStoragePort {
<shellId: 52 completed with exit code 0>
```

</details>


---

<sub>6m 59s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/main/harness/remote-image-paste.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/main/harness/remote-image-paste.ts (lines 95-130)

<details>
<summary>33 lines</summary>

```
}

/**
 * Owns explicit local-clipboard to SSH-composer image paste. It never watches
 * the clipboard, parses terminal output, or submits the provider composer.
 */
export class RemoteImagePasteCoordinator {
  private readonly storage: RemoteImagePasteStoragePort
  private readonly setTimer: typeof setTimeout
  private readonly clearTimer: typeof clearTimeout
  private readonly states = new Set<ImagePasteState>()
  private readonly activeTerminals = new Set<string>()
  private readonly pendingCleanup = new Map<ProjectHost, Set<HostPath>>()
  private readonly hostDisposers = new Map<ProjectHost, () => void | Promise<void>>()
  private readonly disposePtyExit: () => void | Promise<void>
  private disposed = false

  constructor(private readonly options: RemoteImagePasteCoordinatorOptions) {
    this.storage = options.storage ?? new RemoteImagePasteStorage()
    this.setTimer = options.setTimer ?? setTimeout
    this.clearTimer = options.clearTimer ?? clearTimeout
    this.disposePtyExit = options.ptys.onExit((info) => this.retireTerminal(info.id))
  }

  async paste(
    terminalId: string,
    owner: RendererOwner,
  ): Promise<RemoteImagePasteOutcome> {
    if (this.disposed || !isTerminalId(terminalId)) {
      return { outcome: 'failed', reason: 'target-changed' }
    }
    const target = this.resolveTarget(terminalId, owner)
    if (target === 'forward-key') return { outcome: 'forward-key' }
    if (!target) return { outcome: 'failed', reason: 'target-changed' }
    if (
      this.activeTerminals.has(terminalId) ||
```

</details>


---

<sub>7m 5s</sub>

### `bash`

**Collect harness settings UI labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nhoE ">[A-Z][A-Za-z0-9 ,.'’()/-]{6,}<|label=\"[^\"]+\"|placeholder=\"[^\"]+\"|aria-label=\"[^\"]+\"" src/renderer/src/settings/HarnessProfile*.tsx src/renderer/src/settings/HarnessProfilesSettings.tsx src/renderer/src/settings/sections/*.tsx | sort -u | head -70

<details>
<summary>71 lines</summary>

```
101:>Add a harness<
102:>Choose installed harnesses to add as editable global profiles.<
104:>Host capabilities<
104:aria-label="Absolute executable path"
109:>Terminal text size<
111:>Exact command preview<
111:>Idle-after-output threshold<
132:>Environment<
133:>On app start<
137:>No bundled harnesses were detected on this host.<
143:>Create an editable shell profile using the host default.<
144:>Ask which terminals to restore<
145:>Restore all terminals automatically<
148:aria-label="Environment name"
150:placeholder="NAME"
151:>Manual profile<
157:>Provider<
162:aria-label="Environment operation"
171:>No configured harnesses yet<
179:>Plaintext value<
180:>Secret reference<
185:aria-label="Environment value"
193:>All projects<
194:>This registered project<
198:>Description<
199:aria-label="Reference source"
210:>Target host<
211:>Forward local<
214:aria-label="Reference name"
24:>Git auto-fetch<
25:placeholder="--add-dir {binding:monorepo}"
258:>Host path bindings<
265:aria-label="Move profile earlier"
271:aria-label="Path binding name"
273:placeholder="monorepo"
274:aria-label="Move profile later"
29:>Presentation<
30:>Keybinding overrides (JSON)<
31:>Cursor shape<
33:>Every minute<
34:>Every 5 minutes<
35:>Every 15 minutes<
36:>App theme<
36:>Every 30 minutes<
42:>Unsaved harness profile<
43:>Hollow block<
45:>Underline<
46:>System default<
47:>Custom installed font<
47:>Terminal colors<
49:>Cursor blinking<
58:>Follow app theme<
59:>Always dark<
60:>Always light<
61:>Terminal-controlled<
62:>Blinking default<
63:>Steady default<
71:label="Interface font"
72:>Font ligatures<
73:>Executable<
75:>Open a project to configure harnesses.<
82:label="Monospace font"
86:>Harness profiles could not be loaded.<
87:>Provider default<
88:>Command on PATH<
89:>Absolute host path<
92:>Advanced<
92:>Interface scale<
93:>Executable, environment, paths, and capabilities<
93:>Message submission<
<shellId: 53 completed with exit code 0>
```

</details>


---

<sub>7m 10s</sub>

### `bash`

**Inspect secret reference env options**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nB3 -A12 "Secret reference" src/renderer/src/settings/HarnessProfileAdvancedFields.tsx | head -60

<details>
<summary>17 lines</summary>

```
177-            }}
178-          >
179-            <option value="literal">Plaintext value</option>
180:            <option value="reference">Secret reference</option>
181-            <option value="unset">Unset</option>
182-          </select>
183-          {binding.kind === 'literal' ? (
184-            <input
185-              aria-label="Environment value"
186-              value={binding.value}
187-              onChange={(event) =>
188-                onChange(
189-                  replaceHarnessValue(bindings, index, {
190-                    ...binding,
191-                    value: event.currentTarget.value,
192-                  }),
<shellId: 54 completed with exit code 0>
```

</details>


---

<sub>7m 13s</sub>

### `bash`

**Inspect env reference sources**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '193,240p' src/renderer/src/settings/HarnessProfileAdvancedFields.tsx; grep -nE "reference|forward|target-host" src/shared/harness-profile.ts | head -20

<details>
<summary>52 lines</summary>

```
)
              }
            />
          ) : binding.kind === 'reference' ? (
            <>
              <select
                aria-label="Reference source"
                value={binding.source}
                onChange={(event) =>
                  onChange(
                    replaceHarnessValue(bindings, index, {
                      ...binding,
                      source: event.currentTarget.value as 'host' | 'local-forward',
                    }),
                  )
                }
              >
                <option value="host">Target host</option>
                <option value="local-forward">Forward local</option>
              </select>
              <input
                aria-label="Reference name"
                value={binding.sourceName}
                onChange={(event) =>
                  onChange(
                    replaceHarnessValue(bindings, index, {
                      ...binding,
                      sourceName: event.currentTarget.value,
                    }),
                  )
                }
              />
            </>
          ) : (
            <span />
          )}
          <button
            type="button"
            aria-label={`Remove ${binding.name || 'environment row'}`}
            onClick={() =>
              onChange(bindings.filter((_, candidate) => candidate !== index))
            }
          >
            ×
          </button>
        </div>
      ))}
    </div>
42:      readonly kind: 'reference'
44:      readonly source: 'host' | 'local-forward'
83:  readonly operation: 'set' | 'reference' | 'unset'
<shellId: 55 completed with exit code 0>
```

</details>


---

<sub>7m 19s</sub>

### `bash`

**Inspect diagnostics report UI/storage**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nhoE ">[A-Z][A-Za-z0-9 ,.'’()/-]{6,}<|title=\"[^\"]+\"|aria-label=\"[^\"]+\"" src/renderer/src/health/WorkbenchHealthControl.tsx | sort -u | head -30; echo ....; grep -nE "applicationUserDataPath|join\(|diagnostic-reports|Downloads|showSaveDialog|showItemInFolder" src/main/diagnostics/diagnostic-report-storage.ts src/main/diagnostics/electron-diagnostic-report-actions.ts src/main/diagnostics/runtime-diagnostics.ts | head -12

<details>
<summary>10 lines</summary>

```
116:>Durable journaling is disabled in this build.<
45:>Workbench health<
53:>No workbench faults observed.<
98:aria-label="Local diagnostic evidence"
99:>Local diagnostic evidence<
....
src/main/diagnostics/electron-diagnostic-report-actions.ts:77:    const selected = await dialog.showSaveDialog(window, {
src/main/diagnostics/runtime-diagnostics.ts:274:    this.location = join(userDataPath, JOURNAL_FILE)
src/main/diagnostics/runtime-diagnostics.ts:277:        join(
<shellId: 56 completed with exit code 0>
```

</details>


---

<sub>7m 22s</sub>

### `bash`

**Find diagnostics file names**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "JOURNAL_FILE\s*=|const .*=\s*'[a-z-]+\.(jsonl|json|log)'" src/main/diagnostics/*.ts | head; sed -n '60,100p' src/main/diagnostics/electron-diagnostic-report-actions.ts

<details>
<summary>38 lines</summary>

```
src/main/diagnostics/runtime-diagnostics.ts:45:const JOURNAL_FILE = 'runtime-diagnostics.jsonl'
      height: size.height,
      bytes: png.byteLength,
      sha256: createHash('sha256').update(png).digest('hex'),
      dataUrl: `data:image/png;base64,${png.toString('base64')}`,
      masked: [...new Set(masks.map(({ surface }) => surface))],
    }
  }

  copy(serialized: string, screenshot?: DiagnosticReportScreenshot): void {
    clipboard.write({
      text: serialized,
      ...(screenshot ? { image: nativeImage.createFromDataURL(screenshot.dataUrl) } : {}),
    })
  }

  async selectSave(owner: RendererOwner): Promise<HostPath | undefined> {
    const window = windowFor(owner)
    const selected = await dialog.showSaveDialog(window, {
      title: 'Save reviewed diagnostic report',
      defaultPath: 'hvir-diagnostic-report.json',
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['createDirectory', 'showOverwriteConfirmation'],
    })
    return selected.canceled || !selected.filePath
      ? undefined
      : localPath(selected.filePath)
  }

  writeSave(path: HostPath, serialized: string): Promise<void> {
    return this.host.writeFile(path, serialized)
  }
}

export class ScreenshotTooLargeError extends Error {}

export function maskDiagnosticBitmap(
  bitmap: Buffer,
  imageWidth: number,
  imageHeight: number,
  viewportWidth: number,
  viewportHeight: number,
<shellId: 57 completed with exit code 0>
```

</details>


---

<sub>7m 26s</sub>

### `bash`

**Summarize workflow triggers**

$ cd /private/var/tmp/ws/2002dadb/hvir/.github/workflows && for f in *.yml; do echo "=== $f: $(grep -m1 '^name:' $f)"; awk '/^on:/{flag=1;print;next} /^[a-z]/{flag=0} flag' "$f" | head -12; done

<details>
<summary>96 lines</summary>

```
=== ci.yml: name: CI
on:
  pull_request:
    branches:
      - main
      - 'epic/**'

=== codeql.yml: name: CodeQL
on:
  schedule:
    - cron: '17 8 * * 1'

=== ghostty-web-update.yml: name: Update ghostty-web compatibility artifact
on:
  schedule:
    - cron: '23 13 * * *'
  workflow_dispatch:

=== lock-tracker-conversations.yml: name: Lock tracker conversations
on:
  issues:
    types: [opened, reopened, unlocked]
  pull_request_target:
    types: [opened, reopened, unlocked]

=== macos-package-release.yml: name: Signed macOS package
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
=== project-kind.yml: name: Reconcile issue planning
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
=== project-pr-planning.yml: name: Reconcile PR planning relationships
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
=== real-host-ssh.yml: name: Real-host SSH acceptance
on:
  workflow_dispatch:
  schedule:
    - cron: '41 7 1 * *'

=== release-pr-merged.yml: name: Dispatch merged release
on:
  pull_request_target:
    types: [closed]

=== release.yml: name: Release
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
=== smoke-stress.yml: name: Electron smoke stress
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
<shellId: 58 completed with exit code 0>
```

</details>


---

<sub>7m 30s</sub>

### `bash`

**Read lock-tracker workflow**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat .github/workflows/lock-tracker-conversations.yml

<details>
<summary>31 lines</summary>

```
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
    steps:
      - name: Lock pull request conversation
        env:
          GH_TOKEN: ${{ github.token }}
          PULL_REQUEST_URL: ${{ github.event.pull_request.html_url }}
        run: gh pr lock "$PULL_REQUEST_URL"
<shellId: 59 completed with exit code 0>
```

</details>


---

<sub>7m 53s</sub>

### `bash`

**Find documented install command**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "curl|install\.sh|releases/latest" scripts/*.mjs scripts/*.mts test/native-installer.test.ts .github/workflows/*.yml | grep -v "^scripts/native-installer.template.sh" | head -30

<details>
<summary>11 lines</summary>

```
scripts/assemble-native-release.mjs:54:  const installerPath = resolve(assetDirectory, 'install.sh')
scripts/assemble-native-release.mjs:149:    'install.sh',
test/native-installer.test.ts:36:    const output = join(fixture.root, 'dist', 'install.sh')
test/native-installer.test.ts:65:    const output = join(fixture.root, 'install.sh')
test/native-installer.test.ts:250:        output: join(fixture.root, 'install.sh'),
test/native-installer.test.ts:259:        output: join(fixture.root, 'install.sh'),
test/native-installer.test.ts:327:  const script = join(fixture.root, 'install.sh')
test/native-installer.test.ts:500:  const script = join(fixture.root, 'install.sh')
.github/workflows/release.yml:562:            install.sh \
.github/workflows/release.yml:612:          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
<shellId: 60 completed with exit code 0>
```

</details>


---

<sub>7m 57s</sub>

### `bash`

**Check changelog/installer test usage**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "Install|install" scripts/release-changelog.mjs scripts/prepare-release-pr.mjs | head -10; echo ....; sed -n '320,360p' test/native-installer.test.ts

<details>
<summary>41 lines</summary>

```
....
    installed?: boolean
    legacy?: boolean
  } = {},
) {
  vi.stubEnv('CI', 'true')
  vi.stubEnv('GITHUB_ACTIONS', 'true')
  const fixture = await createFixture({ acceptance: true, unsignedMacos: false })
  const script = join(fixture.root, 'install.sh')
  await renderNativeInstaller({ ...fixture.options, output: script })

  const toolDirectory = join(fixture.root, 'tools')
  const nativeDirectory = join(fixture.root, 'native-bin')
  const nativeCommand = join(nativeDirectory, 'hvir')
  const packageState = join(fixture.root, 'package-installed')
  await Promise.all([mkdir(toolDirectory), mkdir(nativeDirectory)])

  const tools = {
    installer: join(toolDirectory, 'installer'),
    pkgutil: join(toolDirectory, 'pkgutil'),
    spctl: join(toolDirectory, 'spctl'),
    sudo: join(toolDirectory, 'sudo'),
    uname: join(toolDirectory, 'uname'),
    xcrun: join(toolDirectory, 'xcrun'),
  }
  await Promise.all([
    writeExecutable(
      tools.uname,
      `#!/bin/bash
case "$1" in
-s) echo Darwin ;;
-m) echo arm64 ;;
*) exit 64 ;;
esac
`,
    ),
    writeExecutable(
      tools.pkgutil,
      `#!/bin/bash
case "$1" in
--check-signature)
  echo 'pkgutil raw: Developer ID Installer: Fixture (ABCDE12345)'
<shellId: 61 completed with exit code 0>
```

</details>


---

<sub>8m 12s</sub>

### `bash`

**Inspect icon files**

$ cd /private/var/tmp/ws/2002dadb/hvir && file build/icon-macos.png build/icons-linux/128x128.png build/icon-linux.svg && ls -la build/icon-macos.png build/icons-linux/ build/icon-linux.svg build/icon-macos.svg

<details>
<summary>18 lines</summary>

```
build/icon-macos.png:          PNG image data, 1024 x 1024, 8-bit/color RGBA, non-interlaced
build/icons-linux/128x128.png: PNG image data, 128 x 128, 8-bit/color RGBA, non-interlaced
build/icon-linux.svg:          SVG Scalable Vector Graphics image
-rw-r--r--@ 1 air-jarmak  wheel    2523 Sep 23 00:22 build/icon-linux.svg
-rw-r--r--@ 1 air-jarmak  wheel  552373 Sep 23 00:22 build/icon-macos.png
-rw-r--r--@ 1 air-jarmak  wheel    2593 Sep 23 00:22 build/icon-macos.svg

build/icons-linux/:
total 904
drwxr-xr-x@  9 air-jarmak  wheel     288 Sep 23 00:22 .
drwxr-xr-x@ 12 air-jarmak  wheel     384 Sep 23 00:22 ..
-rw-r--r--@  1 air-jarmak  wheel  341288 Sep 23 00:22 1024x1024.png
-rw-r--r--@  1 air-jarmak  wheel    6483 Sep 23 00:22 128x128.png
-rw-r--r--@  1 air-jarmak  wheel    1123 Sep 23 00:22 16x16.png
-rw-r--r--@  1 air-jarmak  wheel   17378 Sep 23 00:22 256x256.png
-rw-r--r--@  1 air-jarmak  wheel    1780 Sep 23 00:22 32x32.png
-rw-r--r--@  1 air-jarmak  wheel   74958 Sep 23 00:22 512x512.png
-rw-r--r--@  1 air-jarmak  wheel    3187 Sep 23 00:22 64x64.png
<shellId: 62 completed with exit code 0>
```

</details>


---

<sub>8m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/build/icons-linux/128x128.png.**

/private/var/tmp/ws/2002dadb/hvir/build/icons-linux/128x128.png

```
Viewed image file successfully.
```


---

<sub>8m 47s</sub>

### `bash` — Failed

**Verify npm/cac double-dash passthrough**

$ d="${TMPDIR:-/tmp}/npm-args-check"; mkdir -p "$d" && cd "$d" && printf '{"name":"x","version":"1.0.0","scripts":{"dev":"node -e \\"console.log(JSON.stringify(process.argv.slice(1)))\\""}}' > package.json && npm run --silent dev -- -- --user-data-dir=/tmp/x; cd / && rm -rf "$d"; cd /private/var/tmp/ws/2002dadb/hvir && node -e "
const cac = require('./node_modules/cac');
const cli = (cac.cac || cac)('t');
cli.command('[root]','dev').alias('dev').action((root, o) => console.log('root=', root, 'dashdash=', JSON.stringify(o['--'])));
cli.parse(['node','t','dev','--','--user-data-dir=/tmp/x']);
" 2>&1 | head -5

```
Permission denied and could not request permission from user
```


---

<sub>8m 52s</sub>

### `bash`

**Verify cac double-dash parsing**

$ cd /private/var/tmp/ws/2002dadb/hvir && echo "TMPDIR=$TMPDIR"; ls node_modules/cac/package.json >/dev/null 2>&1 && node -e "
const mod = require('./node_modules/cac');
const cac = mod.cac || mod.default || mod;
const cli = cac('t');
cli.command('[root]','dev').alias('dev').alias('serve').action((root, o) => console.log('root=', root, 'dashdash=', JSON.stringify(o['--'])));
cli.parse(['node','t','dev','--','--user-data-dir=/tmp/x']);
" 2>&1 | head -5

```
TMPDIR=/private/var/tmp/ws/2002dadb/home/tmp
root= undefined dashdash= ["--user-data-dir=/tmp/x"]
<shellId: 64 completed with exit code 0>
```


---

<sub>8m 57s</sub>

### `bash`

**Check TMPDIR writability**

$ ls -ld "$TMPDIR" 2>&1; d="$TMPDIR/npm-args-check"; mkdir -p "$d" && echo "mkdir ok"

```
drwxr-xr-x@ 4 air-jarmak  wheel  128 Sep 23 00:28 /private/var/tmp/ws/2002dadb/home/tmp
mkdir ok
<shellId: 65 completed with exit code 0>
```


---

<sub>9m 0s</sub>

### `bash`

**Test npm second double-dash passthrough**

$ cd "$TMPDIR/npm-args-check" && printf '%s' '{"name":"x","version":"1.0.0","scripts":{"dev":"node -e \"console.log(JSON.stringify(process.argv.slice(1)))\""}}' > package.json && npm run --silent dev -- -- --user-data-dir=/tmp/x --project-root=/y

```
["--user-data-dir=/tmp/x","--project-root=/y"]
<shellId: 66 completed with exit code 0>
```


---

<sub>9m 6s</sub>

### `bash`

**Confirm npm forwards literal double-dash**

$ cd "$TMPDIR/npm-args-check" && printf '%s' '{"name":"x","version":"1.0.0","scripts":{"dev":"printf \"[%s]\""}}' > package.json && npm run --silent dev -- -- --user-data-dir=/tmp/x; echo; cd "$TMPDIR" && rm -rf "$TMPDIR/npm-args-check" && echo cleaned

```
[--][--user-data-dir=/tmp/x]
cleaned
<shellId: 67 completed with exit code 0>
```


---

<sub>9m 15s</sub>

### `bash`

**Verify smoke env vars and selection**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "HVIR_SMOKE_ARTIFACT_DIR|HVIR_SMOKE_REPEAT" scripts/*.mts | head -8; grep -n "export function selectedSmokeScenarios" -A 25 scripts/run-smoke-scenarios.mts | head -35

<details>
<summary>33 lines</summary>

```
scripts/run-smoke-interruption.mts:386:  delete environment.HVIR_SMOKE_REPEAT
scripts/run-smoke-scenarios.mts:84:      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
scripts/run-smoke-scenarios.mts:94:      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
scripts/run-smoke-scenarios.mts:165:  delete childEnvironment.HVIR_SMOKE_REPEAT
scripts/run-smoke-scenarios.mts:420:  directory = process.env.HVIR_SMOKE_ARTIFACT_DIR,
scripts/run-smoke-scenarios.mts:484:  const repetitionCount = parseSmokeRepetitionCount(process.env.HVIR_SMOKE_REPEAT)
100:export function selectedSmokeScenarios(
101-  value: string | undefined,
102-  positionalNames: readonly string[] = [],
103-): readonly SmokeScenarioName[] {
104-  if (positionalNames.length > 0) {
105-    if (value !== undefined && value !== '') {
106-      throw new Error(
107-        'Select Electron smoke scenarios with positional names or HVIR_SMOKE_SCENARIO, not both',
108-      )
109-    }
110-    return positionalNames.map((name) => parseElectronSmokeScenario(name))
111-  }
112-  if (value === undefined || value === '') return DEFAULT_SMOKE_SCENARIOS
113-  return [parseElectronSmokeScenario(value)]
114-}
115-
116-export async function runSmokeScenarioGroups(
117-  scenarios: readonly SmokeScenarioName[],
118-  repetitionCount: number,
119-  invoke: InvokeSmokeScenario,
120-  interruptionSignal?: AbortSignal,
121-): Promise<readonly SmokeScenarioResult[]> {
122-  const results: SmokeScenarioResult[] = []
123-  for (let iteration = 1; iteration <= repetitionCount; iteration += 1) {
124-    for (const scenario of scenarios) {
125-      if (interruptionSignal?.aborted) {
<shellId: 68 completed with exit code 0>
```

</details>


---

<sub>9m 27s</sub>

### `bash`

**Check keybinding command behavior**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "toggleTerminalFocus|focusTerminal|cycleViewMode|nextWorkspace|focusTree|focusViewer" -A 4 src/renderer/src/workbench/workbench-command-router.ts | head -60

<details>
<summary>39 lines</summary>

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
--
32:    case 'cycleViewMode':
33:      if (ports.canUseViewerCommands()) ports.cycleViewMode()
34-      return true
35-    case 'findInFile':
36-      if (ports.canUseViewerCommands()) ports.findInFile()
37-      return true
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
61-    case 'previousWorkspace':
62-      ports.switchWorkspace(-1)
<shellId: 69 completed with exit code 0>
```

</details>


---

<sub>9m 30s</sub>

### `bash`

**Check toggleTerminalFocus implementation**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "toggleTerminalFocus" -A 8 src/renderer/src/workbench/use-workbench-commands.ts | head -30

```

<shellId: 70 completed with exit code 0>
```


---

<sub>9m 33s</sub>

### `bash`

**Locate toggleTerminalFocus definition**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "toggleTerminalFocus\s*[:(=]" src/renderer/src | head -5

```
src/renderer/src/workbench/use-workbench-layout.ts:215:  const toggleTerminalFocus = useCallback(
src/renderer/src/workbench/workbench-command-router.ts:12:  readonly toggleTerminalFocus: () => void
src/renderer/src/workbench/workbench-command-router.ts:47:      ports.toggleTerminalFocus()
<shellId: 71 completed with exit code 0>
```


---

<sub>9m 35s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/workbench/use-workbench-layout.ts.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/workbench/use-workbench-layout.ts (lines 205-240)

<details>
<summary>33 lines</summary>

```
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
```

</details>


---

<sub>9m 47s</sub>

### `bash`

**Check Claude config dir and Codex composer args**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "CLAUDE_CONFIG_DIR|\.claude|homeDirectory|home\(" src/main/harness/claude-keybindings.ts | head -10; grep -nE "codex|CODEX|composer" src/main/harness/providers/codex.ts | sed -n '1,40p' | grep -nE "function codexComposerArgs" -A 12

<details>
<summary>15 lines</summary>

```
14:const KEYBINDINGS_DOCS = 'https://code.claude.com/docs/en/keybindings'
392:    'printf "%s" "${CLAUDE_CONFIG_DIR:-${HOME}/.claude}"',
28:131:function codexComposerArgs(ctx: HarnessLaunchContext): readonly string[] {
29-132:  return ctx.composerSubmitMode === 'ctrl-enter'
30-133:    ? ['--config', 'tui.keymap.composer.submit=["ctrl-enter"]']
31-137:function codexDocumentReviewSendNowContract(
32-142:    launch.profile.providerId === codexProvider.manifest.id &&
33-143:    launch.profile.providerContractVersion === codexProvider.profile.version &&
34-155:      const submit = launch.composerSubmitMode === 'ctrl-enter' ? '\x1b[13;5u' : '\r'
35-163: * best-effort composer target. Profile customization can make the attempt fail,
36-173:  const parts = codexVersion(version)
37-179:  const parts = codexVersion(version)
38-185:function codexVersion(
39-188:  const match = /^codex-cli\s+(\d+)\.(\d+)\.(\d+)(?:\b|[-+])/.exec(version ?? '')
<shellId: 72 completed with exit code 0>
```

</details>


---

<sub>9m 47s</sub>

### `bash`

**Inspect codexComposerArgs**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -n "function codexComposerArgs" -A 14 src/main/harness/providers/codex.ts

<details>
<summary>16 lines</summary>

```
131:function codexComposerArgs(ctx: HarnessLaunchContext): readonly string[] {
132-  return ctx.composerSubmitMode === 'ctrl-enter'
133-    ? ['--config', 'tui.keymap.composer.submit=["ctrl-enter"]']
134-    : []
135-}
136-
137-function codexDocumentReviewSendNowContract(
138-  insert: HarnessDocumentReviewInsertContract,
139-): HarnessDocumentReviewSendNowContract {
140-  const revision = 1
141-  const supportsLaunch = (launch: HarnessDocumentReviewSendNowLaunch): boolean =>
142-    launch.profile.providerId === codexProvider.manifest.id &&
143-    launch.profile.providerContractVersion === codexProvider.profile.version &&
144-    launch.profile.executable.kind === 'provider-default' &&
145-    supportsCodexDocumentReviewProfile(launch.profile) &&
<shellId: 73 completed with exit code 0>
```

</details>


---

<sub>9m 58s</sub>

### `bash`

**Check custom harness provider UI**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "custom" src/renderer/src/settings/*.ts* | grep -viE "customFont|custom installed font|'custom' \| 'system'|FontPreference|mode === 'custom'|fontMode" | head -15

```
src/renderer/src/settings/HarnessProfileDialogs.tsx:165:                      : `${provider.displayName} with custom settings`}
src/renderer/src/settings/HarnessProfilesSettings.tsx:174:                  here only when you want custom shell or harness settings.
<shellId: 74 completed with exit code 0>
```


---

<sub>10m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx (lines 160-200)

<details>
<summary>37 lines</summary>

```
                onRemove={() => {
                  if (editor.deleteArmed) {
                    editor.runAfterDraftGuard(() => void editor.remove())
                  } else {
                    void editor.remove()
                  }
                }}
                onSave={() => void editor.save()}
              />
            ) : (
              <div className="settings-harness-empty">
                <strong>No configured harnesses yet</strong>
                <p>
                  Bare Shell remains available whenever you open a terminal. Add a profile
                  here only when you want custom shell or harness settings.
                </p>
                <div>
                  <button
                    type="button"
                    disabled={!editor.shellProvider}
                    onClick={editor.startShellProfile}
                  >
                    Add a shell
                  </button>
                  <button type="button" onClick={() => editor.setAddOpen(true)}>
                    Add a harness…
                  </button>
                </div>
              </div>
            )}
          </div>
          <HarnessProfileOverlays root={workspaceRoot} editor={editor} />
        </>
      )}
    </SettingsSection>
  )
})
```

</details>


---

<sub>10m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/settings/HarnessProfileDialogs.tsx.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/settings/HarnessProfileDialogs.tsx (lines 90-175)

<details>
<summary>86 lines</summary>

```
    <div className="modal-backdrop nested">
      <section
        className="project-dialog add-harness-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-harness-title"
        tabIndex={-1}
      >
        <div className="add-harness-heading">
          <div>
            <h3 id="add-harness-title">Add a harness</h3>
            <p>Choose installed harnesses to add as editable global profiles.</p>
          </div>
          <button type="button" disabled={busy || pending.size > 0} onClick={onRefresh}>
            Refresh
          </button>
        </div>
        <div className="add-harness-candidates" aria-live="polite">
          {detected.map((provider) => {
            const checking = pending.has(provider.id)
            const alreadyConfigured = configuredProviderIds.has(provider.id)
            return (
              <label
                key={provider.id}
                className={alreadyConfigured ? 'configured' : undefined}
              >
                <input
                  type="checkbox"
                  disabled={checking || busy || alreadyConfigured}
                  checked={!alreadyConfigured && selected.has(provider.id)}
                  onChange={(event) => onToggle(provider.id, event.currentTarget.checked)}
                />
                <span>
                  <strong>{provider.profileTemplate?.displayName}</strong>
                  <small>
                    {alreadyConfigured
                      ? 'Already added · use Manual profile for another'
                      : checking
                        ? 'Checking…'
                        : 'Installed on this host'}
                  </small>
                </span>
              </label>
            )
          })}
          {detected.length === 0 && pending.size === 0 ? (
            <p>No bundled harnesses were detected on this host.</p>
          ) : null}
        </div>
        <div className="add-harness-shell">
          <span>
            <strong>Shell</strong>
            <small>Create an editable shell profile using the host default.</small>
          </span>
          <button type="button" disabled={busy || !shellAvailable} onClick={onShell}>
            Add a shell
          </button>
        </div>
        <div className="add-harness-manual">
          <label>
            <span>Manual profile</span>
            <select
              value={manualProviderId ?? ''}
              disabled={busy || !manualProviderId}
              onChange={(event) =>
                onManualProvider(event.currentTarget.value as HarnessProviderId)
              }
            >
              {providers.map((provider) => (
                <option key={provider.id} value={provider.id}>
                  {provider.default
                    ? 'Additional shell'
                    : !provider.profileTemplate
                      ? 'Custom command'
                      : `${provider.displayName} with custom settings`}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            disabled={busy || !manualProviderId}
            onClick={() => {
              if (manualProviderId) onManual(manualProviderId)
            }}
```

</details>


---

<sub>10m 10s</sub>

### `bash`

**Check SSH watch tiers**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "WatchTier|watchTier" src/shared/*.ts | head -5; grep -nE "inotify|fswatch|polling|'native'" src/main/project-host/ssh-watch-service.ts | head -10

<details>
<summary>15 lines</summary>

```
src/shared/fs-types.ts:48:export type HostWatchTier = 'native' | 'inotify' | 'polling'
src/shared/workspace-types.ts:1:import type { HostConnectionState, HostWatchTier } from './fs-types'
src/shared/workspace-types.ts:12:  readonly watchTier: HostWatchTier
src/shared/workspace-types.ts:87:  readonly watchTier: HostWatchTier
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
<shellId: 75 completed with exit code 0>
```

</details>


---

<sub>10m 17s</sub>

### `bash`

**Check remote command requirements**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -noE "exec(Stream)?\('[a-z0-9_-]+'" src/main/project-host/ssh-*.ts | sort | uniq -c | sort -rn | head -20; grep -nE "uname|Linux|Darwin|platform" src/main/project-host/ssh-host.ts | head -10

```
1 src/main/project-host/ssh-watch-service.ts:118:execStream('inotifywait'
   1 src/main/project-host/ssh-host.ts:685:exec('sh'
   1 src/main/project-host/ssh-host.ts:229:exec('sh'
<shellId: 76 completed with exit code 0>
```


---

<sub>10m 20s</sub>

### `bash`

**Inspect SshHost remote shell probes**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '220,240p' src/main/project-host/ssh-host.ts; sed -n '675,700p' src/main/project-host/ssh-host.ts

<details>
<summary>46 lines</summary>

```
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
      throw new Error('SSH connection was replaced before it became ready')
    }
    this.transportPool.registerPrimary(client)
    this.reconnectAttempt = 0
    this.setState('connected')
    const probe = new AbortController()
    const probeTimer = setTimeout(() => probe.abort(), 5_000)
    try {
      this.tier =
        (
          await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
            signal: probe.signal,
            maxBuffer: 64 * 1024,
          })
        ).code === 0
          ? 'inotify'
          : 'polling'
    } catch {
      // Capability detection is an optimization. A healthy authenticated
      // transport remains usable with the portable polling backend.
      this.tier = 'polling'
    } finally {
      clearTimeout(probeTimer)
    }
    if (this.client === client && this.clientGeneration === generation) this.notifyState()
  }
<shellId: 77 completed with exit code 0>
```

</details>


---

<sub>10m 26s</sub>

### `bash`

**Collect project/SSH dialog labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nhoE ">[A-Z][A-Za-z0-9 ,.'’()/…-]{3,}<|title=\"[^\"]+\"|aria-label=\"[^\"]+\"|placeholder=\"[^\"]+\"" src/renderer/src/workspaces/SessionDialog.tsx src/renderer/src/workspaces/ProjectsBar.tsx src/renderer/src/workspaces/SshPromptDialog.tsx | sort -u | head -50

<details>
<summary>16 lines</summary>

```
187:aria-label="Projects"
231:aria-label="Hosts"
245:title="Connection controls"
248:>Local<
268:aria-label="Folder path"
289:aria-label="Register project"
290:title="Register project"
303:aria-label="Folders"
305:>Selected folder<
309:aria-label="Open settings"
310:title="Settings"
320:aria-label="Workspaces"
324:aria-label="New folder name"
377:title="Forget removed worktree from hvir"
396:title="Remove Git's stale worktree administrative records"
<shellId: 78 completed with exit code 0>
```

</details>


---

<sub>11m 1s</sub>

### `bash`

**Check SSH proxy support and git operations**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rniE "proxy(jump|command)|jumphost|sock\b" src/main/project-host/ | head -5; echo "---"; grep -rnE "DEFAULT_IDENTITY_NAMES\s*=" -A 3 src/main/project-host/project-host-catalog.ts; echo ---; grep -rnE "GIT_[A-Z_]+_TYPE\s*=" src/shared/*.ts src/shared/ipc/*.ts | head -30

<details>
<summary>22 lines</summary>

```
src/main/project-host/project-host-catalog.ts:56:        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
---
src/main/project-host/project-host-catalog.ts:175:const DEFAULT_IDENTITY_NAMES = [
src/main/project-host/project-host-catalog.ts-176-  'id_rsa',
src/main/project-host/project-host-catalog.ts-177-  'id_ecdsa',
src/main/project-host/project-host-catalog.ts-178-  'id_ecdsa_sk',
---
src/shared/worker-protocol.ts:120:export const GIT_DIFF_INPUTS_TYPE = 'git:diff-inputs' as const
src/shared/worker-protocol.ts:121:export const GIT_CHANGES_TYPE = 'git:changes' as const
src/shared/worker-protocol.ts:122:export const GIT_HISTORY_TYPE = 'git:history' as const
src/shared/worker-protocol.ts:123:export const GIT_IGNORED_ENTRIES_TYPE = 'git:ignored-entries' as const
src/shared/worker-protocol.ts:124:export const GIT_IGNORED_PATHS_TYPE = 'git:ignored-paths' as const
src/shared/worker-protocol.ts:125:export const GIT_BLAME_TYPE = 'git:blame' as const
src/shared/worker-protocol.ts:126:export const GIT_COMMIT_DETAIL_TYPE = 'git:commit-detail' as const
src/shared/worker-protocol.ts:127:export const GIT_WORKTREES_TYPE = 'git:worktrees' as const
src/shared/worker-protocol.ts:128:export const GIT_PRUNE_WORKTREES_TYPE = 'git:prune-worktrees' as const
src/shared/worker-protocol.ts:129:export const GIT_WORKSPACE_ACTIVITY_TYPE = 'git:workspace-activity' as const
src/shared/worker-protocol.ts:130:export const GIT_BRANCHES_TYPE = 'git:branches' as const
src/shared/worker-protocol.ts:131:export const GIT_FETCH_TYPE = 'git:fetch' as const
src/shared/worker-protocol.ts:132:export const GIT_PULL_TYPE = 'git:pull' as const
src/shared/worker-protocol.ts:133:export const GIT_SWITCH_BRANCH_TYPE = 'git:switch-branch' as const
<shellId: 79 completed with exit code 0>
```

</details>


---

<sub>11m 14s</sub>

### `bash`

**Verify Sessions and New terminal controls**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "Sessions|onSessions" src/renderer/src/workspaces/ProjectsBar.tsx | head -10; grep -nE "New terminal|launch menu|aria-haspopup" src/renderer/src/terminal/TerminalRail.tsx src/renderer/src/terminal/TerminalWorkspaceControls.tsx | head -10

<details>
<summary>9 lines</summary>

```
58:  readonly onSessions: () => void
83:  onSessions,
194:            onClick={onSessions}
196:            Sessions
src/renderer/src/terminal/TerminalRail.tsx:127:              aria-haspopup="menu"
src/renderer/src/terminal/TerminalRail.tsx:195:              aria-label="New terminal"
src/renderer/src/terminal/TerminalRail.tsx:196:              title="New terminal"
src/renderer/src/terminal/TerminalRail.tsx:197:              aria-haspopup="menu"
<shellId: 80 completed with exit code 0>
```

</details>


---

<sub>11m 48s</sub>

### `bash`

**Inspect harness launch menu model**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,80p' src/renderer/src/terminal/harness-launch-menu.ts

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
<shellId: 81 completed with exit code 0>
```

</details>


---

<sub>11m 59s</sub>

### `bash`

**Find Add harness menu entry**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "onAddHarness" src/renderer/src/terminal/*.tsx | head -5; grep -rnE ">Add (a )?harness[^<]*<|'Add (a )?harness[^']*'" src/renderer/src | head -5

<details>
<summary>7 lines</summary>

```
src/renderer/src/terminal/TerminalRail.tsx:50:  onAddHarness,
src/renderer/src/terminal/TerminalRail.tsx:80:  readonly onAddHarness: () => void
src/renderer/src/terminal/TerminalRail.tsx:240:                  <button type="button" role="menuitem" onClick={onAddHarness}>
src/renderer/src/terminal/TerminalWorkspace.tsx:78:  readonly onAddHarness: () => void
src/renderer/src/terminal/TerminalWorkspace.tsx:126:  onAddHarness,
src/renderer/src/settings/HarnessProfileDialogs.tsx:101:            <h3 id="add-harness-title">Add a harness</h3>
<shellId: 82 completed with exit code 0>
```

</details>


---

<sub>12m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/terminal/TerminalRail.tsx.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/terminal/TerminalRail.tsx (lines 190-260)

<details>
<summary>71 lines</summary>

```
          </button>
          <div className="terminal-new-control">
            <button
              type="button"
              className="terminal-icon-button"
              aria-label="New terminal"
              title="New terminal"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              disabled={!recoveryReady || !available}
              onClick={onToggleMenu}
            >
              +
            </button>
            {menuOpen ? (
              <div
                ref={launchMenuRef}
                className="terminal-new-menu"
                role="menu"
                style={launchMenuStyle}
              >
                {launchMenuEntries.map(({ profile, provider, state }) => {
                  const capability = compactHarnessCapabilityLabel(
                    provider?.default === true,
                    state.probe?.capabilities ?? provider?.capabilities,
                  )
                  const details = [
                    provider && provider.displayName !== profile.displayName
                      ? provider.displayName
                      : undefined,
                    capability,
                    profile.builtIn ? undefined : launchAvailabilityLabel(state),
                  ].filter((value): value is string => Boolean(value))
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      role="menuitem"
                      data-harness-availability={state.availability}
                      title={launchMenuDescription(profile, provider, state)}
                      onClick={() => onAddSession(profile)}
                    >
                      <span>
                        <strong>{profile.displayName}</strong>
                      </span>
                      {details.length > 0 ? <small>{details.join(' · ')}</small> : null}
                    </button>
                  )
                })}
                <div className="terminal-new-menu-actions">
                  <button type="button" role="menuitem" onClick={onAddHarness}>
                    Add a harness…
                  </button>
                  <button type="button" role="menuitem" onClick={onRefreshProbes}>
                    Refresh availability
                  </button>
                  <button type="button" role="menuitem" onClick={onOpenHarnessSettings}>
                    Configure harnesses…
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
      <div className="terminal-list" role="list" hidden={compact}>
        {sessions.map((session) => {
          const provider = providerDescriptor(providers, session.providerId)
          const contextPresentation = provider?.capabilities.contextPresentation
          return (
            <div
```

</details>


---

<sub>12m 21s</sub>

### `bash`

**Check theme catalog generator inputs**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,60p' scripts/generate-terminal-theme-catalog.mts | grep -nE "argv|process\.env|https?://|Usage|usage|--" | head -15

```
21:    'https://deps.files.ghostty.org/ghostty-themes-release-20260216-151611-fc73ce3.tgz',
24:  upstreamRepository: 'https://github.com/mbadolato/iTerm2-Color-Schemes',
<shellId: 83 completed with exit code 0>
```


---

<sub>12m 21s</sub>

### ◌ Conversation Compacted

---

<sub>12m 26s</sub>

### `bash`

**List npm scripts**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e 'const p=require("./package.json");for(const [k,v] of Object.entries(p.scripts))console.log(k.padEnd(34),v.slice(0,150))'

<details>
<summary>56 lines</summary>

```
postinstall                        npm run install:runtime
install:runtime                    install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty
prebuild                           node scripts/check-terminal-runtime.mts
predev                             node scripts/check-terminal-runtime.mts
dev                                electron-vite dev
build                              npm run typecheck && electron-vite build
build:smoke                        electron-vite build --mode smoke
build:dir                          npm run build && electron-builder --dir
pack:mac:arm64                     npm run build && electron-builder --mac pkg --arm64 --publish never
pack:mac:arm64:signed              npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true
build:macos:ssh-acceptance         bash scripts/run-macos-ssh-acceptance.sh --build-only
acceptance:ssh:macos               bash scripts/run-macos-ssh-acceptance.sh
acceptance:ssh:macos:identity      bash scripts/record-macos-ssh-identity.sh
pack:linux:x64                     npm run build && electron-builder --linux deb --x64 --publish never
pack:linux:arm64                   npm run build && electron-builder --linux deb --arm64 --publish never
assemble:native-release            node scripts/assemble-native-release.mjs
render:native-installer            node scripts/render-native-installer.mjs
preview                            electron-vite preview
typecheck:node                     tsc --noEmit -p tsconfig.node.json
typecheck:web                      tsc --noEmit -p tsconfig.web.json
typecheck                          npm run typecheck:node && npm run typecheck:web
lint                               eslint .
format                             prettier --write .
format:check                       prettier --check .
hooks:install                      bash scripts/install-git-hooks.sh
test                               vitest run
test:watch                         vitest
test:mutation                      stryker run
check-seams                        bash scripts/check-seams.sh
check-adrs                         node scripts/check-adrs.mjs
architecture:report                node scripts/architecture-hotspots.mjs
architecture:check                 node scripts/architecture-hotspots.mjs --enforce
generate:terminal-themes           node scripts/generate-terminal-theme-catalog.mts
update:ghostty-web                 node scripts/ghostty-web-update/cli.mts
project:kind                       node scripts/project-management/sync-kind.ts
project:audit                      node scripts/project-management/audit-canonical-project.ts
project:record                     node scripts/project-management/read-planning-record.ts
project:pr                         node scripts/project-management/sync-pull-request-planning.ts
project:status                     node scripts/project-management/read-contributor-status.ts
project:migrate-tokens             node scripts/project-management/migrate-project-tokens.ts
issue:context                      node scripts/project-management/read-issue-context.ts
issue:start                        node scripts/project-management/start-issue.ts
verify                             npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test
smoke                              npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-
smoke:macos                        npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-
smoke:macos:ci                     npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-
smoke:scenario                     npm run build:smoke && node scripts/run-smoke-scenarios.mts
smoke:isolation                    npm run build:smoke && node scripts/run-smoke-interruption.mts
acceptance:ssh:real-host           vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs
smoke:linux:installed              bash scripts/run-linux-package-smoke.sh
smoke:macos:installed              bash scripts/run-macos-package-smoke.sh
smoke:capacity                     npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts
smoke:development-performance      node scripts/run-smoke-scenarios.mts development-performance
performance:capacity               npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts
gauntlet                           bash scripts/phase8-gauntlet.sh
<shellId: 84 completed with exit code 0>
```

</details>


---

<sub>12m 31s</sub>

### `bash`

**Show smoke scripts and command wrapper**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e 'const p=require("./package.json");for(const k of ["smoke","smoke:macos","smoke:macos:ci"])console.log(k+":\n  "+p.scripts[k]+"\n")'; cat build/native/hvir-command | head -80

<details>
<summary>44 lines</summary>

```
smoke:
  npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles

smoke:macos:
  npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle

smoke:macos:ci:
  npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review

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
<shellId: 85 completed with exit code 0>
```

</details>


---

<sub>12m 35s</sub>

### `bash`

**Inspect installer options**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "usage|Usage|--uninstall|--purge|--help|--version|--tag|HVIR_[A-Z_]+" scripts/native-installer.template.sh | head -50

<details>
<summary>51 lines</summary>

```
4:readonly HVIR_VERSION=@@HVIR_VERSION@@
5:readonly HVIR_RELEASE_BASE_URL=@@HVIR_RELEASE_BASE_URL@@
6:readonly HVIR_LINUX_X64_ARTIFACT=@@HVIR_LINUX_X64_ARTIFACT@@
7:readonly HVIR_LINUX_X64_SHA256=@@HVIR_LINUX_X64_SHA256@@
8:readonly HVIR_LINUX_ARM64_ARTIFACT=@@HVIR_LINUX_ARM64_ARTIFACT@@
9:readonly HVIR_LINUX_ARM64_SHA256=@@HVIR_LINUX_ARM64_SHA256@@
10:readonly HVIR_MACOS_ARM64_ARTIFACT=@@HVIR_MACOS_ARM64_ARTIFACT@@
11:readonly HVIR_MACOS_ARM64_SHA256=@@HVIR_MACOS_ARM64_SHA256@@
12:readonly HVIR_MACOS_TEAM_ID=@@HVIR_MACOS_TEAM_ID@@
13:readonly HVIR_ACCEPTANCE_ASSET_DIRECTORY=@@HVIR_ACCEPTANCE_ASSET_DIRECTORY@@
14:readonly HVIR_ACCEPTANCE_UNSIGNED_MACOS=@@HVIR_ACCEPTANCE_UNSIGNED_MACOS@@
15:readonly HVIR_LINUX_MINIMUM_GLIBC=2.35
16:readonly HVIR_APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
45:    echo "hvir $HVIR_VERSION failed while $stage (status $status)." >&2
54:usage() {
56:hvir $HVIR_VERSION installer
58:Usage:
60:  install.sh --uninstall
61:  install.sh --uninstall --purge
64:--purge additionally removes the current user's documented hvir settings and cache.
73:    --uninstall) operation='uninstall' ;;
74:    --help | -h)
75:      usage
79:      usage >&2
85:    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
86:      usage >&2
93:    usage >&2
107:    artifact_name=$HVIR_LINUX_X64_ARTIFACT
108:    artifact_sha256=$HVIR_LINUX_X64_SHA256
114:    artifact_name=$HVIR_LINUX_ARM64_ARTIFACT
115:    artifact_sha256=$HVIR_LINUX_ARM64_SHA256
121:    artifact_name=$HVIR_MACOS_ARM64_ARTIFACT
122:    artifact_sha256=$HVIR_MACOS_ARM64_SHA256
143:  if [[ -z "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
176:  [[ -r "$HVIR_APPARMOR_USERNS_RESTRICTION" ]] &&
177:    [[ "$(<"$HVIR_APPARMOR_USERNS_RESTRICTION")" == '1' ]]
184:    echo "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer." >&2
188:  if ! version_at_least "$glibc_version" "$HVIR_LINUX_MINIMUM_GLIBC"; then
190:      "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer; found ${glibc_version:-unknown}." \
232:  if [[ -n "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
233:    /bin/cp -- "$HVIR_ACCEPTANCE_ASSET_DIRECTORY/$artifact_name" "$destination"
243:      "$HVIR_RELEASE_BASE_URL/$artifact_name"
306:  if [[ "$HVIR_ACCEPTANCE_UNSIGNED_MACOS" == '1' ]]; then
315:    "Developer ID Installer: .+ \\($HVIR_MACOS_TEAM_ID\\)" \
318:    echo "The package is not signed by the expected Apple team $HVIR_MACOS_TEAM_ID." >&2
493:    echo "Updating hvir to $HVIR_VERSION for $platform_name."
496:    echo "Installing hvir $HVIR_VERSION for $platform_name."
509:    stage="installing hvir $HVIR_VERSION with the macOS package manager"
517:    stage="installing hvir $HVIR_VERSION with apt"
527:    echo "hvir $HVIR_VERSION is updated. Open a project with: hvir ."
<shellId: 86 completed with exit code 0>
```

</details>


---

<sub>12m 40s</sub>

### `bash`

**Check installer base URL and tags**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '54,66p' scripts/native-installer.template.sh; grep -nE "releases/|github.com|RELEASE_BASE_URL" scripts/render-native-installer.mjs scripts/assemble-native-release.mjs | head -10; grep -nE "tag_name|--tag|gh release (create|edit|upload)|v\\$\{|tag=|TAG" .github/workflows/release.yml | head -20

<details>
<summary>34 lines</summary>

```
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
scripts/render-native-installer.mjs:32:    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
scripts/render-native-installer.mjs:35:    ['HVIR_RELEASE_BASE_URL', shellQuote(releaseBaseUrl)],
102:          tag="v$version"
138:          echo "tag=$tag" >> "$GITHUB_OUTPUT"
160:          TAG: ${{ steps.version.outputs.tag }}
175:          echo "tag=$TAG" >> "$GITHUB_OUTPUT"
506:          TAG: ${{ needs.prepare.outputs.tag }}
508:          remote_tag_sha=$(git ls-remote origin "refs/tags/$TAG^{}" | awk '{print $1}')
510:            remote_tag_sha=$(git ls-remote origin "refs/tags/$TAG" | awk '{print $1}')
513:            echo "::error::$TAG points at $remote_tag_sha, expected $RELEASE_SHA"
522:              -f ref="refs/tags/$TAG" \
527:          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
528:            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
530:              echo "::error::$TAG is already public and cannot be repaired in place"
534:            gh release create "$TAG" \
538:              --title "$TAG" \
545:          TAG: ${{ needs.prepare.outputs.tag }}
548:          gh release upload "$TAG" dist/release/* \
551:          actual=$(gh release view "$TAG" \
574:          TAG: ${{ needs.prepare.outputs.tag }}
576:          gh release edit "$TAG" \
584:          TAG: ${{ needs.prepare.outputs.tag }}
<shellId: 87 completed with exit code 0>
```

</details>


---

<sub>12m 43s</sub>

### `bash`

**Inspect release publish steps**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '570,640p' .github/workflows/release.yml

<details>
<summary>45 lines</summary>

```
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
<shellId: 88 completed with exit code 0>
```

</details>


---

<sub>12m 48s</sub>

### `bash`

**Check installer privilege and stdin use**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "\bread\b|/dev/tty|sudo|EUID|id -u|curl |mktemp" scripts/native-installer.template.sh | head -30

<details>
<summary>13 lines</summary>

```
142:  require_absolute_tool /usr/bin/sudo
215:  temporary_directory=$(umask 077 && /usr/bin/mktemp -d \
235:    /usr/bin/curl \
363:  while IFS= read -r line; do
514:      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
521:      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
555:      /usr/bin/sudo /usr/bin/apt remove -y hvir
565:      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
566:      /usr/bin/sudo /bin/rm -f -- \
569:      /usr/bin/sudo /bin/rmdir '/Library/Application Support/hvir' 2>/dev/null || true
570:      /usr/bin/sudo /usr/sbin/pkgutil --forget dev.hvir.app >/dev/null
626:  while IFS= read -r path; do
<shellId: 89 completed with exit code 0>
```

</details>


---

<sub>12m 51s</sub>

### `bash`

**Inspect installer read loops**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '355,372p;620,640p' scripts/native-installer.template.sh

<details>
<summary>36 lines</summary>

```
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
<shellId: 90 completed with exit code 0>
```

</details>


---

<sub>12m 55s</sub>

### `bash`

**Check how installer is invoked in CI**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "list_contains_exact_line" scripts/native-installer.template.sh; grep -rnE "curl[^|]*\| *(sudo )?bash|install\.sh" .github/workflows/*.yml scripts/*.sh scripts/*.mjs scripts/*.mts 2>/dev/null | grep -v "^scripts/native-installer.template.sh" | head -20

<details>
<summary>6 lines</summary>

```
361:list_contains_exact_line() {
414:  if ! list_contains_exact_line "${npm_root%/}/hvir-workbench" <<<"$listing"; then
.github/workflows/release.yml:562:            install.sh \
scripts/assemble-native-release.mjs:54:  const installerPath = resolve(assetDirectory, 'install.sh')
scripts/assemble-native-release.mjs:149:    'install.sh',
<shellId: 91 completed with exit code 0>
```

</details>


---

<sub>13m 3s</sub>

### `bash`

**Inspect installer entrypoint and args**

$ cd /private/var/tmp/ws/2002dadb/hvir && tail -30 scripts/native-installer.template.sh; sed -n '66,100p' scripts/native-installer.template.sh

<details>
<summary>60 lines</summary>

```
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
<shellId: 92 completed with exit code 0>
```

</details>


---

<sub>13m 11s</sub>

### `bash`

**Inspect installer platform detection**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '100,215p' scripts/native-installer.template.sh

<details>
<summary>110 lines</summary>

```
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
<shellId: 93 completed with exit code 0>
```

</details>


---

<sub>13m 17s</sub>

### `bash`

**Check which git worktree ops exist**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnoE "'worktree', *'(add|remove|prune|list|move|lock)'|\"worktree\", *\"(add|remove|prune|list)\"|worktree (add|remove|prune)" src | sort | uniq | head -20

<details>
<summary>6 lines</summary>

```
src/main/git/git-worktrees.ts:10:'worktree', 'list'
src/main/git/git-worktrees.ts:14:'worktree', 'list'
src/main/git/git-worktrees.ts:38:'worktree', 'prune'
src/main/git/mutation-authorization.ts:72:'worktree', 'prune'
src/main/git/worker-host-broker.ts:69:worktree prune
<shellId: 94 completed with exit code 0>
```

</details>


---

<sub>13m 17s</sub>

### `bash`

**Find workspace UI labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "aria-label=\"[^\"]*[Ww]orkspace[^\"]*\"|title=\"[^\"]*[Ww]orkspace[^\"]*\"|>[^<{]*[Ww]orkspace[^<{]*<" src/renderer/src --include=*.tsx | head -30

<details>
<summary>7 lines</summary>

```
src/renderer/src/tree/FileExternalMoveDialog.tsx:35:              <dt>Workspace</dt>
src/renderer/src/tree/FileCreateOverlays.tsx:199:                  <dt>Workspace</dt>
src/renderer/src/terminal/TerminalMoveDialog.tsx:69:        <dl className="terminal-move-details" aria-label="Terminal workspace move">
src/renderer/src/workspaces/ProjectsBar.tsx:320:            aria-label="Workspaces"
src/renderer/src/workspaces/MissingWorkspaceNotice.tsx:14:      <span>Its terminals remain available. Close the workspace tab when finished.</span>
src/renderer/src/sessions/SessionsCollectionToolbar.tsx:67:            <option value="project">Workspace</option>
<shellId: 95 completed with exit code 0>
```

</details>


---

<sub>13m 22s</sub>

### `bash`

**Locate worktree discovery modules**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls src/main/workspaces 2>/dev/null; grep -rlnE "worktree" src/main --include=*.ts | head -30

<details>
<summary>20 lines</summary>

```
src/main/smoke/sessions-projection.ts
src/main/smoke/terminal-move.ts
src/main/smoke/workspace-close.ts
src/main/smoke/sessions-visual.ts
src/main/smoke/workspace-remote.ts
src/main/project-registry.ts
src/main/terminal/terminal-workspace-move-coordinator.ts
src/main/harness/harness-probe.ts
src/main/ipc/features/git.ts
src/main/ipc/authority-router.ts
src/main/git/git-engine.ts
src/main/git/git-parsers.ts
src/main/git/mutation-authorization.ts
src/main/git/untracked-line-counts.ts
src/main/git/mutation-coordinator.ts
src/main/git/git-worktrees.ts
src/main/git/worker-host-broker.ts
src/main/git/git-branches.ts
src/main/workspace-removal-coordinator.ts
<shellId: 96 completed with exit code 0>
```

</details>


---

<sub>13m 24s</sub>

### `bash`

**Check worktree refresh in project registry**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "worktree|refresh|watch|poll" src/main/project-registry.ts | head -40

<details>
<summary>9 lines</summary>

```
195:      watchTier: activeHost.watchTier,
301:    if (workspace.missing) throw new Error('This worktree is no longer present')
377:    for (const discovered of discovery.worktrees) {
382:        throw new Error('Git reported a worktree on another host')
402:                discovered.prunableReason ?? 'Git reported stale worktree metadata',
533:    if (workspace.missing) throw new Error('This worktree is no longer present')
607:    if (!workspace.missing) throw new Error('Only removed worktrees can be dismissed')
685:      watchTier: host?.watchTier ?? 'polling',
<shellId: 97 completed with exit code 0>
```

</details>


---

<sub>13m 27s</sub>

### `bash`

**Inspect workspace discovery triggers**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '340,420p' src/main/project-registry.ts; grep -rnE "refreshWorkspaces|discoverWorkspaces|rediscover|syncWorkspaces" src/main --include=*.ts | grep -v smoke | head -20

<details>
<summary>84 lines</summary>

```
}

  async acknowledgeWorkspace(
    projectId: string,
    workspaceId: string,
  ): Promise<ProjectState> {
    const project = this.projects.find((candidate) => candidate.id === projectId)
    const workspace = project?.workspaces.find(
      (candidate) => candidate.id === workspaceId,
    )
    if (!project || !workspace) throw new Error('Unknown project workspace')
    if (!workspace.newlyDiscovered) return this.state()
    project.workspaces = project.workspaces.map((candidate) =>
      candidate.id === workspaceId ? { ...candidate, newlyDiscovered: false } : candidate,
    )
    try {
      await this.persist()
    } catch (error) {
      project.workspaces = project.workspaces.map((candidate) =>
        candidate.id === workspaceId
          ? { ...candidate, newlyDiscovered: true }
          : candidate,
      )
      throw error
    }
    return this.publishState()
  }

  async reconcileWorktrees(
    projectId: string,
    discovery: WorktreeDiscovery,
  ): Promise<ProjectState> {
    const project = this.projects.find((candidate) => candidate.id === projectId)
    if (!project) throw new Error('Unknown project')
    const before = workspaceSignature(project.workspaces)
    const baselineEstablished = project.discoveryBaselineEstablished
    const seen = new Set<string>()
    for (const discovered of discovery.worktrees) {
      if (
        discovered.root.hostId !== project.registeredRoot.hostId ||
        !discovered.root.path.startsWith('/')
      ) {
        throw new Error('Git reported a worktree on another host')
      }
      const id = workspaceId(discovered.root)
      seen.add(id)
      const existing = project.workspaces.find((candidate) => candidate.id === id)
      const record: WorkspaceRecord = {
        id,
        root: discovered.root,
        name:
          discovered.branch ?? basenameHostPath(discovered.root) ?? discovered.root.path,
        head: discovered.head,
        branch: discovered.branch,
        main: hostPathEquals(discovered.root, project.registeredRoot),
        closed:
          existing?.closed === true &&
          !(existing.missing && discovered.prunable !== true),
        missing: discovered.prunable === true,
        ...(discovered.prunable === true
          ? {
              prunableReason:
                discovered.prunableReason ?? 'Git reported stale worktree metadata',
            }
          : {}),
        repository: discovery.repository,
        changedFiles: discovery.repository ? (existing?.changedFiles ?? 0) : 0,
        newlyDiscovered:
          existing?.newlyDiscovered ??
          (baselineEstablished && discovered.prunable !== true),
        ...(existing?.closed === true &&
        !(existing.missing && discovered.prunable !== true)
          ? { activityBaseline: existing.activityBaseline }
          : {}),
        ...(!existing?.closed && discovery.repository && existing?.latestActivity
          ? { latestActivity: existing.latestActivity }
          : {}),
      }
      if (existing) project.workspaces[project.workspaces.indexOf(existing)] = record
      else project.workspaces.push(record)
    }
src/main/project-watch.ts:94:  private rediscoverGit = false
src/main/project-watch.ts:190:      this.rediscoverGit = true
src/main/project-watch.ts:217:        if (this.rediscoverGit) {
src/main/project-watch.ts:218:          this.rediscoverGit = false
<shellId: 98 completed with exit code 0>
```

</details>


---

<sub>13m 32s</sub>

### `bash`

**Verify terminal action labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE "Fork [Cc]onversation[^'\"<]*|Split [a-z ]*terminal[^'\"<]*|Move [a-z ]*terminal[^'\"<]*|Restore [a-z ]*terminals?[^'\"<]*" src/renderer/src src/main --include=*.ts --include=*.tsx | sort | uniq -c | sort -rn | head -20

<details>
<summary>19 lines</summary>

```
1 89:Split terminal
   1 70:Restore terminal sequences that ghostty-web 0.4 drops or collapses before
   1 61:Move this live terminal?
   1 581:Restore terminal rail
   1 48:Move terminal here and open
   1 28:Restore terminal rail
   1 271:Move terminal here and open
   1 27:Restore terminal rail
   1 260:Fork Conversation to New Terminal
   1 223:Fork Conversation to New Terminal
   1 175:Split terminal
   1 145:Restore all terminals automatically
   1 126:Move active terminal to another worktree
   1 124:Move terminal to another worktree
   1 123:Move terminal, new worktree available
   1 119:Restore terminal rows now. Only the visible terminal in each split will start;
   1 117:Restore terminals
   1 105:Restore terminal rail
<shellId: 99 completed with exit code 0>
```

</details>


---

<sub>13m 36s</sub>

### `bash`

**Verify projects bar and health labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE "(aria-label|title)=\"[^\"]*\"" src/renderer/src/workspaces/ProjectsBar.tsx | sort -u | head -30; grep -rnohE "Workbench health[^'\"<]*|diagnostic report[^'\"<]*" src/renderer/src --include=*.tsx | sort -u | head -10

<details>
<summary>17 lines</summary>

```
187:aria-label="Projects"
245:title="Connection controls"
289:aria-label="Register project"
290:title="Register project"
309:aria-label="Open settings"
310:title="Settings"
320:aria-label="Workspaces"
377:title="Forget removed worktree from hvir"
396:title="Remove Git's stale worktree administrative records"
177:diagnostic report
18:Workbench health: loading
20:Workbench health: evidence unavailable, ${unresolved.length} unresolved fault${unresolved.length === 1 ? 
22:Workbench health: no unresolved faults
23:Workbench health: ${unresolved.length} unresolved fault${unresolved.length === 1 ? 
45:Workbench health
80:diagnostic report
<shellId: 100 completed with exit code 0>
```

</details>


---

<sub>13m 39s</sub>

### `bash`

**Locate health and sessions UI**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnlE "Workbench health" src/renderer/src | head; grep -rnE "Sessions" src/renderer/src/workspaces/ProjectsBar.tsx | head -5

<details>
<summary>6 lines</summary>

```
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/workspaces/ProjectsBar.tsx:58:  readonly onSessions: () => void
src/renderer/src/workspaces/ProjectsBar.tsx:83:  onSessions,
src/renderer/src/workspaces/ProjectsBar.tsx:194:            onClick={onSessions}
src/renderer/src/workspaces/ProjectsBar.tsx:196:            Sessions
<shellId: 101 completed with exit code 0>
```

</details>


---

<sub>13m 42s</sub>

### `bash`

**Check where health control lives**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "WorkbenchHealthControl" src/renderer/src --include=*.tsx | grep -v "^src/renderer/src/health/WorkbenchHealthControl.tsx" | head -5; sed -n '30,100p' src/renderer/src/health/WorkbenchHealthControl.tsx | grep -nE "aria-label|title|>[A-Z][a-z][^<{]*<" | head -20

<details>
<summary>10 lines</summary>

```
src/renderer/src/workspaces/ProjectsBar.tsx:25:import { WorkbenchHealthControl } from '../health/WorkbenchHealthControl'
src/renderer/src/workspaces/ProjectsBar.tsx:296:          <WorkbenchHealthControl />
1:        aria-label={label}
2:        title={label}
10:          labelledBy="workbench-health-title"
16:              <h2 id="workbench-health-title">Workbench health</h2>
24:            <p className="workbench-health-empty">No workbench faults observed.</p>
69:    <section className="workbench-health-storage" aria-label="Local diagnostic evidence">
70:      <h3>Local diagnostic evidence</h3>
<shellId: 102 completed with exit code 0>
```

</details>


---

<sub>13m 48s</sub>

### `bash`

**Find diagnostic report UI labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE ">[^<{]*[Rr]eport[^<{]*<|'[^']*[Rr]eport[^']*'" src/renderer/src/health src/renderer/src/diagnostics 2>/dev/null | sort -u | head -20; ls src/renderer/src | head -50

<details>
<summary>45 lines</summary>

```
126:'Save cancelled; the temporary report is unchanged.'
147:'diagnostic-report:delete'
177:>Review diagnostic report<
22:'Preparing bounded local report…'
279:'Screenshot capture failed; the structured report is unchanged.'
280:'Report exceeded its fixed local size bound.'
280:'report-too-large'
282:'This report belongs to an earlier renderer generation.'
283:'report-not-found'
283:'The temporary report is no longer available.'
285:'The report request was rejected by its closed schema.'
288:'Local evidence changed while the report was being prepared. Try again.'
30:'diagnostic-report:create'
56:'diagnostic-report:cancel'
66:'diagnostic-report:cancel'
7:'../diagnostics/DiagnosticReportDialog'
83:'diagnostic-report:capture'
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
<shellId: 103 completed with exit code 0>
```

</details>


---

<sub>13m 48s</sub>

### `bash`

**Find diagnostic report labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE ">[^<{]*[Rr]eport[^<{]*<|'[^']*[Rr]eport[^']*'|\"[^\"]*[Rr]eport[^\"]*\"" src/renderer/src/health src/renderer/src/workbench-shell src/renderer/src/App.tsx 2>/dev/null | sort -u | head -20; grep -rnohE "hvir-diagnostic-report[^'\"]*" src | sort -u

```
7:'../diagnostics/DiagnosticReportDialog'
74:"prepare-diagnostic-report"
12:hvir-diagnostic-report-
79:hvir-diagnostic-report.json
<shellId: 104 completed with exit code 0>
```


---

<sub>13m 53s</sub>

### `bash`

**Recheck harness provider capabilities**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls src/main/harness/providers/ && grep -nE "displayName|executable|exactResume|sessionIdentity|contextPresentation|fork|reviewDelivery|submit|usage" src/main/harness/providers/*.ts | grep -vE "^\S+:\s*//" | head -80

<details>
<summary>70 lines</summary>

```
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:33:    contextPresentation: 'pressure',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:45:    reservedArguments: ['--session-id', '--resume', '--continue', '--fork-session'],
src/main/harness/providers/claude-code.ts:53:  sessionIdentity: 'preassigned',
src/main/harness/providers/claude-code.ts:55:  usageTelemetry: { observe: observeClaudeUsage },
src/main/harness/providers/claude-code.ts:56:  usageSnapshots: { snapshot: snapshotClaudeUsage },
src/main/harness/providers/claude-code.ts:83:  fork(ctx): HarnessLaunchSpec {
src/main/harness/providers/claude-code.ts:85:      throw new Error('Claude Code fork requires an exact parent id')
src/main/harness/providers/claude-code.ts:93:        '--fork-session',
src/main/harness/providers/codex.ts:30:  Partial<Record<HarnessLaunchMode, 'resume' | 'fork'>>
src/main/harness/providers/codex.ts:33:  fork: 'fork',
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:48:    contextPresentation: 'pressure',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
src/main/harness/providers/codex.ts:59:    reservedArguments: ['resume', 'fork'],
src/main/harness/providers/codex.ts:78:  sessionIdentity: 'discovered',
src/main/harness/providers/codex.ts:81:  usageTelemetry: { observe: observeCodexUsage },
src/main/harness/providers/codex.ts:82:  usageSnapshots: { snapshot: snapshotCodexUsage },
src/main/harness/providers/codex.ts:115:  fork(ctx): HarnessLaunchSpec {
src/main/harness/providers/codex.ts:116:    if (!ctx.parentSessionId) throw new Error('Codex fork requires an exact parent id')
src/main/harness/providers/codex.ts:123:        'fork',
src/main/harness/providers/codex.ts:133:    ? ['--config', 'tui.keymap.composer.submit=["ctrl-enter"]']
src/main/harness/providers/codex.ts:144:    launch.profile.executable.kind === 'provider-default' &&
src/main/harness/providers/codex.ts:155:      const submit = launch.composerSubmitMode === 'ctrl-enter' ? '\x1b[13;5u' : '\r'
src/main/harness/providers/codex.ts:156:      return `${insert.terminalInput(body)}${submit}`
src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:9:    contextPresentation: 'none',
src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:27:  sessionIdentity: 'none',
src/main/harness/providers/cursor.ts:40:      sessionIdentity: 'none',
src/main/harness/providers/cursor.ts:41:      exactResume: false,
src/main/harness/providers/cursor.ts:42:      contextPresentation: 'none',
src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:9:    contextPresentation: 'none',
src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:27:  sessionIdentity: 'none',
src/main/harness/providers/gemini.ts:40:      sessionIdentity: 'none',
src/main/harness/providers/gemini.ts:41:      exactResume: false,
src/main/harness/providers/gemini.ts:42:      contextPresentation: 'none',
src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:9:    contextPresentation: 'none',
src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:27:  sessionIdentity: 'none',
src/main/harness/providers/github-copilot.ts:44:      sessionIdentity: 'none',
src/main/harness/providers/github-copilot.ts:45:      exactResume: false,
src/main/harness/providers/github-copilot.ts:46:      contextPresentation: 'none',
src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
src/main/harness/providers/pi.ts:9:    contextPresentation: 'none',
src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
src/main/harness/providers/pi.ts:19:    reservedArguments: ['--session', '--fork', '--continue', '-c', '--resume', '-r'],
src/main/harness/providers/pi.ts:30:  sessionIdentity: 'none',
src/main/harness/providers/pi.ts:43:      sessionIdentity: 'none',
src/main/harness/providers/pi.ts:44:      exactResume: false,
src/main/harness/providers/pi.ts:45:      contextPresentation: 'none',
src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
src/main/harness/providers/shell.ts:15:    contextPresentation: 'none',
src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
src/main/harness/providers/shell.ts:32:  sessionIdentity: 'none',
src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
src/main/harness/providers/shell.ts:49:    contextPresentation: 'none',
src/main/harness/providers/shell.ts:61:  sessionIdentity: 'none',
<shellId: 105 completed with exit code 0>
```

</details>


---

<sub>13m 56s</sub>

### `bash`

**View Claude and Codex provider details**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '25,80p' src/main/harness/providers/claude-code.ts; sed -n '40,80p;125,170p' src/main/harness/providers/codex.ts

<details>
<summary>135 lines</summary>

```
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
<shellId: 106 completed with exit code 0>
```

</details>


---

<sub>14m 0s</sub>

### `bash`

**Check per-provider optional contracts**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "remoteImagePaste|composerConfiguration|documentReviewInsert:|documentReviewSendNow" src/main/harness/providers/*.ts

<details>
<summary>7 lines</summary>

```
src/main/harness/providers/claude-code.ts:63:  composerConfiguration: { configure: configureClaudeComposerSubmit },
src/main/harness/providers/claude-code.ts:64:  remoteImagePaste: pathImagePasteContract(),
src/main/harness/providers/claude-code.ts:65:  documentReviewInsert: claudeCodeReviewInsert,
src/main/harness/providers/codex.ts:89:  remoteImagePaste: pathImagePasteContract(),
src/main/harness/providers/codex.ts:90:  documentReviewInsert: codexReviewInsert,
src/main/harness/providers/codex.ts:91:  documentReviewSendNow: codexReviewSendNow,
<shellId: 107 completed with exit code 0>
```

</details>


---

<sub>14m 4s</sub>

### `bash`

**Recheck default keybindings**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "^\s+[a-zA-Z]+: *\{|key:|label|description|'Mod|\"Mod|Ctrl\+" src/shared/keybindings.ts | head -60

<details>
<summary>15 lines</summary>

```
19:  cycleViewMode: 'Mod+Shift+M',
20:  findFile: 'Mod+P',
21:  findInFile: 'Mod+F',
22:  // Keep ordinary PTY Ctrl+F available on every platform. Terminal search uses
24:  findInTerminal: 'Mod+Shift+F',
25:  goToLine: 'Ctrl+G',
26:  focusTerminal: 'Mod+J',
27:  focusViewer: 'Mod+1',
28:  focusTree: 'Mod+0',
29:  toggleTerminalFocus: 'Mod+Shift+J',
30:  nextWorkspace: 'Mod+Alt+]',
31:  previousWorkspace: 'Mod+Alt+[',
49:  readonly key: string
58:  readonly key: string
<shellId: 108 completed with exit code 0>
```

</details>


---

<sub>14m 9s</sub>

### `bash`

**View keybinding parsing rules**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,18p;32,120p' src/shared/keybindings.ts

<details>
<summary>98 lines</summary>

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
<shellId: 109 completed with exit code 0>
```

</details>


---

<sub>14m 9s</sub>

### `bash`

**Find keybinding settings UI**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnlE "keybindingOverrides|KeybindingOverrides|parseKeybindingOverrides|keybindings" src/renderer/src/settings | head; grep -rnE "placeholder=|Keybindings|JSON" src/renderer/src/settings/*.tsx | grep -iE "keybind|json" | head -20

<details>
<summary>11 lines</summary>

```
src/renderer/src/settings/sections/KeybindingsSettings.tsx
src/renderer/src/settings/settings.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/settings-draft.ts
src/renderer/src/settings/settings-navigation.ts
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/SettingsActiveSection.tsx:12:import { KeybindingsSettings } from './sections/KeybindingsSettings'
src/renderer/src/settings/SettingsActiveSection.tsx:57:        <KeybindingsSettings draft={draft} validation={validation} onChange={onChange} />
<shellId: 110 completed with exit code 0>
```

</details>


---

<sub>14m 13s</sub>

### `bash`

**Check settings section labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "label|title|id:" src/renderer/src/settings/settings-navigation.ts | head -30

<details>
<summary>7 lines</summary>

```
2:  { id: 'appearance', label: 'Appearance' },
3:  { id: 'terminal', label: 'Terminal' },
4:  { id: 'git', label: 'Git' },
5:  { id: 'keybindings', label: 'Keybindings' },
6:  { id: 'harnesses', label: 'Harnesses' },
30:  return `settings-${section}-title`
<shellId: 111 completed with exit code 0>
```

</details>


---

<sub>14m 17s</sub>

### `bash`

**Check settings persistence mechanism**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "localStorage|sessionStorage" src/renderer/src/settings/settings.ts | head -5; grep -rnE "STORAGE_KEY|storageKey\s*=|'hvir[.:][a-z.-]+'" src/renderer/src/settings/settings.ts | head -5

<details>
<summary>8 lines</summary>

```
src/renderer/src/settings/settings.ts:61:    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
src/renderer/src/settings/settings.ts:70:    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
src/renderer/src/settings/settings.ts:74:    const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')
src/renderer/src/settings/settings.ts:32:const STORAGE_KEY = 'hvir:settings:v1'
src/renderer/src/settings/settings.ts:61:    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
src/renderer/src/settings/settings.ts:70:    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
src/renderer/src/settings/settings.ts:74:    const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')
<shellId: 112 completed with exit code 0>
```

</details>


---

<sub>14m 21s</sub>

### `bash`

**Recheck persisted state file names**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "'[a-z-]+\.(json|jsonl)'" src/main/index.ts src/main/*.ts src/main/**/*.ts 2>/dev/null | grep -v smoke | head -20

<details>
<summary>13 lines</summary>

```
src/main/index.ts:164:        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
src/main/index.ts:173:      applicationUserDataPath('projects.json'),
src/main/index.ts:192:        localPath(applicationUserDataPath('terminal-sessions.json')),
src/main/index.ts:201:        localPath(applicationUserDataPath('harness-profiles.json')),
src/main/index.ts:164:        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
src/main/index.ts:173:      applicationUserDataPath('projects.json'),
src/main/index.ts:192:        localPath(applicationUserDataPath('terminal-sessions.json')),
src/main/index.ts:201:        localPath(applicationUserDataPath('harness-profiles.json')),
src/main/diagnostics/electron-diagnostic-report-actions.ts:79:      defaultPath: 'hvir-diagnostic-report.json',
src/main/diagnostics/runtime-diagnostics.ts:45:const JOURNAL_FILE = 'runtime-diagnostics.jsonl'
src/main/document-review/document-review-application.ts:29:      localPath(applicationUserDataPath('document-review-drafts.json')),
src/main/harness/claude-keybindings.ts:9:const KEYBINDINGS_FILE = 'keybindings.json'
<shellId: 113 completed with exit code 0>
```

</details>


---

<sub>14m 24s</sub>

### `bash`

**Check diagnostics journal location**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "JOURNAL_FILE|userData|getPath|isPackaged" src/main/diagnostics/runtime-diagnostics.ts | head; grep -rnE "runtimeDiagnostics|RuntimeDiagnostic[A-Za-z]*\(" src/main/index.ts | head -5

<details>
<summary>9 lines</summary>

```
45:const JOURNAL_FILE = 'runtime-diagnostics.jsonl'
63:    userDataPath: string,
78:    const storage = new ProjectHostDiagnosticStorage(localHost, userDataPath)
272:    userDataPath: string,
274:    this.location = join(userDataPath, JOURNAL_FILE)
278:          userDataPath,
279:          index === 0 ? JOURNAL_FILE : `runtime-diagnostics.${index}.jsonl`,
src/main/index.ts:446:          runtimeDiagnostics: diagnostics,
<shellId: 114 completed with exit code 0>
```

</details>


---

<sub>14m 30s</sub>

### `bash`

**Check for telemetry or network calls**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "\bfetch\(|net\.request|https\.request|http\.request|autoUpdater|electron-updater|crashReporter|sentry" src --include=*.ts --include=*.tsx | grep -v "/smoke/" | head -20

<details>
<summary>9 lines</summary>

```
src/workers/git-worker.ts:79:      result = await engine.fetch(root)
src/main/ipc/project-commands.ts:70:    fetchGit: (root) => git.fetch(root),
src/main/git/git-engine.ts:62:  fetch(workspaceRoot: HostPath): Promise<void> {
src/main/git/git-engine.ts:63:    return this.branchCapability.fetch(workspaceRoot)
src/main/git/mutation-coordinator.ts:31:  fetch(root: HostPath): Promise<void>
src/main/git/mutation-coordinator.ts:114:  fetch(root: HostPath): Promise<ProjectState> {
src/main/git/mutation-coordinator.ts:124:        await this.options.worker.fetch(root)
src/main/git/git-branches.ts:85:  async fetch(workspaceRoot: HostPath): Promise<void> {
<shellId: 115 completed with exit code 0>
```

</details>


---

<sub>14m 36s</sub>

### `bash`

**Find external URLs in source**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnoE "https?://[a-zA-Z0-9./_-]+" src --include=*.ts --include=*.tsx --include=*.html --include=*.css | grep -vE "/smoke/|localhost|127\.0\.0\.1|\[::1\]|www\.w3\.org|example\.(com|test|invalid)" | awk -F: '{print $1": "$NF}' | sort -u | head -30

<details>
<summary>6 lines</summary>

```
src/main/harness/claude-keybindings.ts: //code.claude.com/docs/en/keybindings
src/main/harness/claude-keybindings.ts: //www.schemastore.org/claude-code-keybindings.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts: //deps.files.ghostty.org/ghostty-themes-release-20260216-151611-fc73ce3.tgz
src/renderer/src/terminal/generated-terminal-theme-catalog.ts: //github.com/mbadolato/iTerm2-Color-Schemes
src/renderer/src/viewer/markdown-renderer.ts: //design.md
<shellId: 116 completed with exit code 0>
```

</details>


---

<sub>14m 42s</sub>

### `bash`

**Check git history and status**

$ cd /private/var/tmp/ws/2002dadb/hvir && git --no-pager log --oneline -8 && git --no-pager log --format='%ad' --date=short | sed -n '1p;$p' && git --no-pager log --oneline | wc -l && git status --short | head

```
1e3a148 Initial commit
2026-09-23
2026-09-23
       1
<shellId: 117 completed with exit code 0>
```


---

<sub>14m 47s</sub>

### `glob`

**{build,resources}/**/*.{png,svg,icns}**

"{build,resources}/**/*.{png,svg,icns}"

<details>
<summary>11 matches</summary>

```
./build/icon-linux.svg
./build/icons-linux/64x64.png
./build/icons-linux/512x512.png
./build/icons-linux/32x32.png
./build/icons-linux/128x128.png
./build/icons-linux/256x256.png
./build/icons-linux/1024x1024.png
./build/icons-linux/16x16.png
./build/icon-macos.png
./build/icon-macos.icns
./build/icon-macos.svg
```

</details>


---

<sub>14m 49s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/build/icons-linux/256x256.png.**

/private/var/tmp/ws/2002dadb/hvir/build/icons-linux/256x256.png

```
Viewed image file successfully.
```


---

<sub>14m 53s</sub>

### `bash`

**Check package metadata and Node version**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e 'const p=require("./package.json");console.log(JSON.stringify({engines:p.engines,description:p.description,homepage:p.homepage,repository:p.repository,license:p.license,author:p.author,productName:p.productName,main:p.main},null,1))'; grep -nE "node-version|node_version" .github/workflows/ci.yml | head -3; cat .nvmrc .node-version 2>/dev/null

<details>
<summary>14 lines</summary>

```
{
 "engines": {
  "node": ">=24"
 },
 "license": "MIT",
 "author": {
  "name": "hvir contributors"
 },
 "main": "./out/main/index.js"
}
46:          node-version: 24
81:          node-version: 24
106:          node-version: 24
<shellId: 118 completed with exit code 1>
```

</details>


---

<sub>14m 57s</sub>

### `bash`

**Find packaged app description**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls electron-builder* 2>/dev/null; grep -rnE "description|synopsis|productName|category|copyright" electron-builder*.{yml,yaml,json,js,cjs,mjs,ts} 2>/dev/null | head

<details>
<summary>7 lines</summary>

```
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron-builder.ssh-acceptance.yml:3:productName: hvir SSH Acceptance
electron-builder.yml:2:productName: hvir
electron-builder.yml:28:  category: public.app-category.developer-tools
electron-builder.yml:49:  category: Development
<shellId: 119 completed with exit code 0>
```

</details>


---

<sub>15m 0s</sub>

### `bash`

**View electron-builder config**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,120p' electron-builder.yml

<details>
<summary>72 lines</summary>

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
<shellId: 120 completed with exit code 0>
```

</details>


---

<sub>15m 4s</sub>

### `bash`

**Check release asset names**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "artifact|\.pkg|\.deb|macos|darwin|linux-(x64|arm64)|amd64" scripts/assemble-native-release.mjs | head -30

<details>
<summary>25 lines</summary>

```
28:      name: `hvir-${version}-linux-x64.deb`,
33:      name: `hvir-${version}-linux-arm64.deb`,
36:      platform: 'macos',
38:      name: `hvir-${version}-darwin-arm64.pkg`,
48:  const artifacts = await Promise.all(
49:    expectedArtifacts.map(async (artifact) => ({
50:      ...artifact,
51:      sha256: await sha256File(resolve(assetDirectory, artifact.name)),
58:    linuxX64Artifact: resolve(assetDirectory, artifacts[0].name),
59:    linuxArm64Artifact: resolve(assetDirectory, artifacts[1].name),
60:    macosArm64Artifact: resolve(assetDirectory, artifacts[2].name),
61:    macosTeamId: options.macosTeamId,
66:    rendered.artifacts.linuxX64,
67:    rendered.artifacts.linuxArm64,
68:    rendered.artifacts.macosArm64,
71:    const artifact = artifacts[index]
73:      renderedArtifact.name !== artifact.name ||
74:      renderedArtifact.sha256 !== artifact.sha256
76:      throw new Error(`Installer metadata disagrees with ${artifact.name}.`)
98:    artifacts,
105:    ...artifacts.map(({ name }) => name),
138:  if (!teamPattern.test(options.macosTeamId ?? '')) {
203:    '--macos-team-id',
213:    macosTeamId: values.get('--macos-team-id'),
<shellId: 121 completed with exit code 0>
```

</details>


---

<sub>15m 11s</sub>

### `bash`

**Inspect package post-install scripts**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat build/linux/after-install.sh | head -60; ls build/pkg-scripts; sed -n '1,60p' build/pkg-scripts/postinstall 2>/dev/null

<details>
<summary>113 lines</summary>

```
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
postinstall
preinstall
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
<shellId: 122 completed with exit code 0>
```

</details>


---

<sub>15m 18s</sub>

### `bash`

**Check smoke env variable names**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -noE "HVIR_[A-Z_]+" scripts/run-smoke-scenarios.mts scripts/phase8-gauntlet.sh scripts/install-git-hooks.sh .githooks/pre-push 2>/dev/null | sort -t: -k3 -u | head -30

```
scripts/phase8-gauntlet.sh:9:HVIR_SKIP_CAPACITY
scripts/run-smoke-scenarios.mts:420:HVIR_SMOKE_ARTIFACT_DIR
scripts/run-smoke-scenarios.mts:84:HVIR_SMOKE_REPEAT
scripts/run-smoke-scenarios.mts:107:HVIR_SMOKE_SCENARIO
<shellId: 123 completed with exit code 0>
```


---

<sub>15m 21s</sub>

### `bash`

**Inspect smoke runner args and pre-push**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '75,125p' scripts/run-smoke-scenarios.mts; sed -n '410,430p' scripts/run-smoke-scenarios.mts; cat .githooks/pre-push

<details>
<summary>87 lines</summary>

```
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
  } catch (error) {
    const code = (error as { code?: unknown } | undefined)?.code
    if (code !== 'ESRCH') {
      console.error('[smoke:launcher] failed to terminate timed-out process group')
    }
  }
}

async function retainFailureArtifact(
  options: Parameters<typeof createSmokeFailureArtifact>[0],
  directory = process.env.HVIR_SMOKE_ARTIFACT_DIR,
): Promise<void> {
  try {
    const path = await writeSmokeFailureArtifactWithinDeadline(() =>
      writeSmokeFailureArtifact(directory, createSmokeFailureArtifact(options)),
    )
    if (path) console.error('[smoke:artifact] retained bounded failure evidence')
  } catch {
    console.error('[smoke:artifact] failed to retain bounded failure evidence')
  }
}
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
<shellId: 124 completed with exit code 0>
```

</details>


---

<sub>15m 31s</sub>

### `bash`

**Inspect register project dialog**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnlE "Register project" src/renderer/src | head; grep -rnohE ">[^<{]{3,80}<" src/renderer/src/workspaces/RegisterProject*.tsx src/renderer/src/workspaces/*Register*.tsx 2>/dev/null | sort -u | head -40

```
src/renderer/src/workspaces/ProjectsBar.tsx
<shellId: 125 completed with exit code 0>
```


---

<sub>15m 34s</sub>

### `bash`

**Trace register project handler**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '280,300p' src/renderer/src/workspaces/ProjectsBar.tsx; grep -rnE "onRegisterProject|registerProject" src/renderer/src --include=*.tsx | head -10

<details>
<summary>22 lines</summary>

```
>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            )
          })}
          <button
            type="button"
            className="project-add"
            aria-label="Register project"
            title="Register project"
            disabled={busy}
            onClick={onAdd}
          >
            +
          </button>
          <WorkbenchHealthControl />
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
<shellId: 126 completed with exit code 0>
```

</details>


---

<sub>15m 38s</sub>

### `bash`

**Find project add flow components**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "onAdd=\{" src/renderer/src --include=*.tsx | head -5; grep -rnlE "HostPicker|hostPicker|chooseHost|RemoteFolder|remote-folder|FolderBrowser|folder-browser" src/renderer/src | head -10

```
src/renderer/src/App.tsx:407:          onAdd={overlays.openProjectPicker}
src/renderer/src/workspaces/SessionDialog.tsx
src/renderer/src/styles/dialogs.css
<shellId: 127 completed with exit code 0>
```


---

<sub>15m 41s</sub>

### `bash`

**Extract SessionDialog UI strings**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nohE ">[^<{]{3,100}<|(aria-label|title|placeholder)=\"[^\"]+\"|'[A-Z][^']{8,100}'" src/renderer/src/workspaces/SessionDialog.tsx | sort -u | head -60

<details>
<summary>14 lines</summary>

```
226:'Connect to a host'
231:aria-label="Hosts"
248:>Local<
268:aria-label="Folder path"
303:aria-label="Folders"
305:>Selected folder<
306:'Choose a folder from the tree'
324:aria-label="New folder name"
33:> Promise<
34:> Promise<
36:> Promise<
37:> Promise<
387:'Choose folder'
<shellId: 128 completed with exit code 0>
```

</details>


---

<sub>15m 43s</sub>

### `bash`

**Inspect folder picker actions**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '215,400p' src/renderer/src/workspaces/SessionDialog.tsx | grep -nE "<h[1-6]|button|label|Open|Register|Create|folder" | head -40

<details>
<summary>41 lines</summary>

```
7:        aria-labelledby="session-dialog-title"
10:        <h2 id="session-dialog-title">
13:            : `Open folder on ${connected?.host.label ?? hostId}`}
17:          <div className="session-hosts" role="listbox" aria-label="Hosts">
19:              <button
20:                type="button"
31:                      hostLabel={`ssh:${host.label}`}
40:              </button>
46:              className="folder-path-form"
54:                aria-label="Folder path"
64:              <button type="submit" disabled={busy}>
66:              </button>
67:              <button
68:                type="button"
72:                Use this folder
73:              </button>
76:              <div className="recent-folders">
77:                {recentFolders(connected.host.hostId).map((folder) => (
78:                  <button
79:                    type="button"
80:                    key={folder}
82:                    onClick={() => void selectPath(folder)}
84:                    {folder}
85:                  </button>
89:            <div className="folder-browser" aria-label="Folders">
90:              <div className="folder-selection">
91:                <small>Selected folder</small>
92:                <code>{selectedPath ?? 'Choose a folder from the tree'}</code>
94:                  <button
95:                    type="button"
99:                    New folder
100:                  </button>
103:                    className="folder-create-form"
110:                      aria-label="New folder name"
116:                    <button type="submit" disabled={busy || newFolderName.length === 0}>
117:                      Create
118:                    </button>
119:                    <button
120:                      type="button"
125:                    </button>
<shellId: 129 completed with exit code 0>
```

</details>


---

<sub>15m 56s</sub>

### `bash`

**Verify attention and badge features**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "setBadgeCount|dock\.setBadge|setBadge|requestAttention|flashFrame|Notification\(" src/main --include=*.ts | grep -v smoke | head; grep -rnohE "'[^']*idle[^']*'" src/renderer/src/settings/sections/TerminalSettings.tsx 2>/dev/null | head -5; grep -rnohiE ">[^<{]*(idle|attention)[^<{]*<" src/renderer/src/settings | sort -u | head

<details>
<summary>10 lines</summary>

```
src/main/attention-badge.ts:7:  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}
src/main/attention-badge.ts:51:      if (this.setBadgeCount(count) === false) this.failed = true
src/main/sessions/sessions-usage-observation-port.ts:139:    this.queueNotification(lease)
src/main/sessions/sessions-usage-observation-port.ts:163:  private queueNotification(lease: UsageLease): void {
src/main/index.ts:345:        return app.setBadgeCount(count)
20:'settings-idle-threshold'
121:'settings-idle-threshold-error'
122:'idleSeconds'
111:>Idle-after-output threshold<
<shellId: 130 completed with exit code 0>
```

</details>


---

<sub>16m 1s</sub>

### `bash`

**Extract settings section labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls src/renderer/src/settings/sections/; for f in src/renderer/src/settings/sections/{Appearance,Terminal,Git}Settings.tsx; do echo "== $f"; grep -nohE ">[^<{}]{3,80}<|(legend|label|aria-label|title)=\"[^\"]+\"" "$f" | sed 's/^[0-9]*://' | sort -u | head -40; done

<details>
<summary>45 lines</summary>

```
AppearanceSettings.tsx
GitSettings.tsx
KeybindingsSettings.tsx
TerminalSettings.tsx
TypographyFontField.tsx
== src/renderer/src/settings/sections/AppearanceSettings.tsx
>Always dark<
>Always light<
>App theme<
>Dark<
>Follow app theme<
>Interface scale<
>Light<
>Terminal colors<
>Terminal text size<
label="Interface font"
label="Monospace font"
title="Appearance"
== src/renderer/src/settings/sections/TerminalSettings.tsx
>Ask which terminals to restore<
>Bar<
>Blinking default<
>Block<
>Cursor blinking<
>Cursor shape<
>Font ligatures<
>Hollow block<
>Idle-after-output threshold<
>Message submission<
>On app start<
>Presentation<
>Restore all terminals automatically<
>Steady default<
>Terminal-controlled<
>Underline<
title="Terminal"
== src/renderer/src/settings/sections/GitSettings.tsx
>Every 15 minutes<
>Every 30 minutes<
>Every 5 minutes<
>Every minute<
>Git auto-fetch<
>Off<
title="Git"
<shellId: 131 completed with exit code 0>
```

</details>


---

<sub>16m 4s</sub>

### `bash`

**Check message submission options and consent**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "Message submission" -A 40 src/renderer/src/settings/sections/TerminalSettings.tsx | grep -nE "option|label|>[^<{}]{2,}<|Enter" | head -20; grep -nohE ">[^<{}]{3,200}<|'[A-Z][^']{10,200}'" src/renderer/src/settings/ComposerSubmitConsentDialog.tsx | sort -u | head -20

<details>
<summary>14 lines</summary>

```
1:93:          <span>Message submission</span>
10:102-              Send messages with Ctrl+Enter or Command+Enter; Enter inserts a new line
13:105-              Claude updates live; Shift+Enter also submits in supported external
17:109-        </label>
18:110-        <label htmlFor="settings-idle-threshold">
19:111-          <span>Idle-after-output threshold</span>
39:131-        </label>
40:132-        <label htmlFor="settings-recovery-mode">
41:133-          <span>On app start</span>
17:'Allow this change'
22:>Allow a Claude configuration change?<
25:>keybindings.json<
31:>.hvir-keybindings-state.json<
<shellId: 132 completed with exit code 0>
```

</details>


---

<sub>16m 8s</sub>

### `bash`

**View message submission setting text**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '90,110p' src/renderer/src/settings/sections/TerminalSettings.tsx; sed -n '1,80p' src/renderer/src/settings/ComposerSubmitConsentDialog.tsx | grep -vE "^\s*(import|export|const|\}|\)|//)" | sed -n '1,60p'

<details>
<summary>55 lines</summary>

```
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


  onCancel,
  onConfirm,
  readonly onCancel: () => void
  readonly onConfirm: () => void
  return (
    <ConfirmationDialog
      labelledBy="composer-submit-consent-title"
      actions={[
        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
        { label: 'Allow this change', kind: 'primary', onSelect: onConfirm },
      ]}
      nested
      className="composer-submit-consent-dialog"
    >
      <h3 id="composer-submit-consent-title">Allow a Claude configuration change?</h3>
      <p>
        To keep this behavior consistent, hvir needs to update the Enter, Ctrl+Enter, and
        Shift+Enter Chat bindings in Claude&apos;s <code>keybindings.json</code> on every
        machine you connect to hvir, now and later while this setting is enabled.
      </p>
      <p>
        Other Claude bindings are preserved. hvir stores the three previous values and
        whether the keybindings file already existed in{' '}
        <code>.hvir-keybindings-state.json</code> in Claude&apos;s config directory so
        disabling this setting can restore them exactly. Nothing changes until you save
        app settings.
      </p>
      <p>
        Claude detects the keybinding update live. Shift+Enter submits in supported
        terminals outside hvir. Open Codex sessions keep their launch-time behavior until
        you restart them.
      </p>
    </ConfirmationDialog>
<shellId: 133 completed with exit code 0>
```

</details>


---

<sub>16m 12s</sub>

### `bash`

**Check key dependency versions**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e 'const p=require("./package.json");const d={...p.dependencies,...p.devDependencies};for(const k of ["ghostty-web","electron","electron-vite","react","vitest","node-pty","ssh2","typescript","@codemirror/merge","shiki","mermaid","electron-builder","@hvir/rename-noreplace","chokidar","eslint","prettier"])console.log(k.padEnd(26),d[k])'

<details>
<summary>17 lines</summary>

```
ghostty-web                https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz
electron                   ^43.4.1
electron-vite              ^5.0.0
react                      ^19.2.8
vitest                     ^5.0.0
node-pty                   ^1.1.0
ssh2                       ^1.17.0
typescript                 ^6.0.3
@codemirror/merge          ^6.12.2
shiki                      ^4.4.3
mermaid                    ^11.17.2
electron-builder           ^26.0.0
@hvir/rename-noreplace     undefined
chokidar                   ^5.0.0
eslint                     ^10.10.0
prettier                   ^3.9.6
<shellId: 134 completed with exit code 0>
```

</details>


---

<sub>16m 15s</sub>

### `bash`

**Check rename-noreplace dependency wiring**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e 'const p=require("./package.json");for(const s of ["dependencies","devDependencies","optionalDependencies"])for(const [k,v] of Object.entries(p[s]||{}))if(k.includes("rename")||String(v).startsWith("file:"))console.log(s,k,v)'; cat packages/rename-noreplace/package.json | head -30

<details>
<summary>22 lines</summary>

```
optionalDependencies @hvir/rename-noreplace file:packages/rename-noreplace
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
<shellId: 135 completed with exit code 0>
```

</details>


---

<sub>16m 19s</sub>

### `bash`

**Inspect terminal runtime check messages**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "console\.(error|log)|throw new Error|npm ci|process\.exit" scripts/check-terminal-runtime.mts | head -10

<details>
<summary>9 lines</summary>

```
18:const RECOVERY = 'Run `npm ci` in this worktree, then retry the command.'
88:  throw new Error(
100:    throw new Error(
107:  throw new Error(
120:    throw new Error(
128:    throw new Error(
139:    console.error(error instanceof Error ? error.message : error)
140:    process.exitCode = 1
<shellId: 136 completed with exit code 0>
```

</details>


---

<sub>16m 23s</sub>

### `bash`

**Check source layout and build entries**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls src src/workers src/main | head -80; grep -nE "input|entry|rollupOptions" electron.vite.config.ts | head -20

<details>
<summary>55 lines</summary>

```
src:
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

src/workers:
echo-worker.ts
git-worker.ts
61:      rollupOptions: {
62:        input: {
75:      rollupOptions: {
76:        input: {
108:      rollupOptions: {
109:        input: {
<shellId: 137 completed with exit code 0>
```

</details>


---

<sub>16m 25s</sub>

### `bash`

**View build entries and echo worker**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '55,125p' electron.vite.config.ts; head -30 src/workers/echo-worker.ts

<details>
<summary>96 lines</summary>

```
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
/**
 * Trivial echo utility process — the Phase-1 proof that a `src/workers` module
 * runs off-main and round-trips the typed IPC envelope. Later workers (git
 * engine, tokenizer, watcher) follow the same request/response shape.
 */

import {
  ECHO_REQUEST_TYPE,
  type EchoPayload,
  type EchoResult,
  type WorkerRequest,
  type WorkerResponse,
} from '../shared'

/** Minimal view of Electron's utility-process parent port (self-contained so
 *  this file needs no Electron global types). */
interface ParentPort {
  on(event: 'message', listener: (e: { data: WorkerRequest }) => void): void
  postMessage(message: WorkerResponse): void
}

const port = (process as unknown as { parentPort?: ParentPort }).parentPort

if (!port) {
  throw new Error('echo-worker must run as an Electron utility process')
}

port.on('message', ({ data: req }) => {
  if (req.type === ECHO_REQUEST_TYPE) {
    if (!isEchoPayload(req.payload)) {
<shellId: 138 completed with exit code 0>
```

</details>


---

<sub>16m 30s</sub>

### `bash`

**Review check-seams rules**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "^\s*#|echo|check_|allow" scripts/check-seams.sh | head -60

<details>
<summary>33 lines</summary>

```
1:#!/usr/bin/env bash
2:#
3:# Grep-level enforcement of the architectural seams (AGENTS.md "Respect the
4:# seams"). This is a coarse backstop that complements the precise ESLint rules
5:# in eslint.config.mjs — it catches a violation even if lint is skipped, and
6:# documents the invariants in one readable place.
7:#
14:  # $1 = human description, $2 = matching lines (empty = ok)
24:# 1. ipcRenderer only in the preload bridge.
29:# 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
35:# 3. PTY spawning (host.spawnPty call sites) only in the supervisor.
40:# 4. Bundled harness identities stay inside provider-owned main modules. Shared
41:# IPC, persistence, and renderer code treat provider ids as opaque catalog data.
47:# 5. Raw loopback streams are transport for the main-owned pane proxy, never a
48:# renderer, IPC, harness, or feature-level socket API.
53:# 6. ipcMain is a single transport choke point. Feature registrars receive the
54:# narrow IpcRegistrar capability and cannot install handlers directly.
59:# 7. Feature registrars cannot bypass central renderer-owner or canonical-path
60:# authority resolution.
65:# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
66:# consumers continue to depend on ProjectHost and host-qualified paths only.
72:# 9. Host-local collaborators share SshHost's authentication lifecycle. They
73:# receive authenticated clients through narrow ports and never construct one.
78:# 10. The collaborators are private composition details, not parallel
79:# ProjectHost façades exposed to consumers through the package barrel.
84:# 11. The project-host catalog is the only main-process owner allowed to
85:# construct SSH hosts. Project persistence/workflows cannot import concrete host
86:# owners, and the catalog cannot depend on project persistence/workflows.
99:# 12. Git capability modules share one command/cancellation/root policy. No
100:# capability constructs a git invocation against the host directly.
105:# 13. The utility-process proxy implements only Git's exact exec/read/metadata port,
106:# rather than pretending to be a complete ProjectHost with never placeholders.
<shellId: 139 completed with exit code 0>
```

</details>


---

<sub>16m 42s</sub>

### `bash`

**Read terminal move dialog text**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nohE ">[^<{}]{3,300}<|'[A-Z][^']{10,300}'|\`[A-Z][^\`]{10,300}\`" src/renderer/src/terminal/TerminalMoveDialog.tsx | head -20

```
grep: invalid repetition count(s)
<shellId: 140 completed with exit code 0>
```


---

<sub>16m 45s</sub>

### `bash`

**View terminal move dialog body**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '55,110p' src/renderer/src/terminal/TerminalMoveDialog.tsx

<details>
<summary>57 lines</summary>

```
>
      <header className="terminal-move-header">
        <span className="terminal-move-kicker">
          <span className="terminal-move-live-dot" aria-hidden="true" />
          Live terminal transfer
        </span>
        <h2 id="terminal-move-title">Move this live terminal?</h2>
        <p>Rehome the terminal in another worktree without restarting its process.</p>
      </header>
      <div className="terminal-move-body">
        <div className="terminal-move-session">
          <strong>{plan.terminalTitle}</strong>
          <span>running</span>
        </div>
        <dl className="terminal-move-details" aria-label="Terminal workspace move">
          <div className="terminal-move-location terminal-move-location-source">
            <dt>From</dt>
            <dd>
              <strong>{plan.sourceWorkspaceName}</strong>
              <code title={plan.sourceRoot.path}>{plan.sourceRoot.path}</code>
            </dd>
          </div>
          <div className="terminal-move-location terminal-move-location-target">
            <dt>To</dt>
            <dd>
              <strong>{plan.targetWorkspaceName}</strong>
              <code title={plan.targetRoot.path}>{plan.targetRoot.path}</code>
            </dd>
          </div>
        </dl>
        <div className="terminal-move-continuity">
          <span className="terminal-move-continuity-mark" aria-hidden="true">
            ✓
          </span>
          <p>
            <strong>Process and conversation stay live</strong>
            <span>
              The supervised process is not restarted. Its original launch directory does
              not change.
            </span>
          </p>
        </div>
        {plan.webPaneIds.length > 0 ? (
          <div className="terminal-move-warning" role="status">
            <span className="terminal-move-warning-mark" aria-hidden="true">
              !
            </span>
            <p>
              <strong>
                {plan.webPaneIds.length} workspace-authorized web pane
                {plan.webPaneIds.length === 1 ? '' : 's'} will close.
              </strong>
              <span>Browser state is not migrated.</span>
            </p>
          </div>
        ) : null}
<shellId: 141 completed with exit code 0>
```

</details>


---

<sub>16m 51s</sub>

### `bash`

**Verify viewer editing and diff bases**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "'Mod-s'|\"Mod-s\"|key: 'Mod-s'|Mod-S" src/renderer/src --include=*.ts --include=*.tsx | head -5; grep -rnohE "'(Index|HEAD|Branch point)'" src/renderer/src/viewer | sort | uniq -c | head; grep -rnohE "Split viewer right|Edit file|Save file|Discard" src/renderer/src/viewer --include=*.tsx | sort -u | head

```
src/renderer/src/viewer/SourceView.tsx:110:              key: 'Mod-s',
222:Split viewer right
223:Split viewer right
<shellId: 142 completed with exit code 0>
```


---

<sub>16m 54s</sub>

### `bash`

**Verify diff base labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE "(Index|HEAD|Branch point|branch point)" src/renderer/src/viewer/*.tsx src/renderer/src/git/*.tsx 2>/dev/null | sort | uniq -c | head; grep -rnE "DiffBase|diffBase" src/shared/*.ts | head -5

<details>
<summary>14 lines</summary>

```
1 132:Index
   1 145:Index
   1 162:Index
   1 208:Index
   2 21:Index
   1 223:Index
   1 234:Index
   2 235:Index
   2 236:Index
   2 237:Index
src/shared/viewer-types.ts:7:export type DiffBase = 'working-tree' | 'head' | 'branch-point'
src/shared/viewer-types.ts:24:  readonly base: DiffBase
src/shared/viewer-types.ts:31:  readonly base: DiffBase
<shellId: 143 completed with exit code 0>
```

</details>


---

<sub>16m 58s</sub>

### `bash`

**Find diff base UI labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "'working-tree'|'branch-point'|'head'" src/renderer/src/viewer --include=*.tsx --include=*.ts | grep -iE "label|:\s*'[A-Z]" | head -10; grep -rnE "Branch point|branch point|vs HEAD|Working tree" src/renderer/src --include=*.tsx --include=*.ts | head -10

<details>
<summary>9 lines</summary>

```
src/renderer/src/viewer/DiffView.tsx:340:  if (base === 'working-tree') return 'Index → Working tree'
src/renderer/src/viewer/DiffView.tsx:341:  if (base === 'branch-point') return 'Branch point → HEAD'
src/renderer/src/viewer/DiffView.tsx:342:  return 'HEAD → Working tree'
src/renderer/src/viewer/FileViewer.tsx:242:                <option value="branch-point">Branch point</option>
src/renderer/src/git/git-rail-model.ts:254:    title: 'Working tree',
src/renderer/src/git/git-rail-model.ts:270:      title: 'Branch point',
src/renderer/src/git/GitChangesView.tsx:65:          : 'Working tree clean'}
src/renderer/src/git/GitChangesView.tsx:91:          Branch point unavailable
<shellId: 144 completed with exit code 0>
```

</details>


---

<sub>17m 3s</sub>

### `bash`

**Check allowed Git mutations**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '55,100p' src/main/git/mutation-authorization.ts

<details>
<summary>42 lines</summary>

```
readonly expiresAt: number
}

interface DenialRecord {
  readonly reason: 'consumed' | 'expired' | 'revoked'
  readonly recordedAt: number
}

interface WorkerMutation {
  readonly kind: GitMutationKind
  readonly root: HostPath
  readonly target?: string
}

const DEFAULT_GRANT_TTL_MS = 5 * 60_000
const DEFAULT_HISTORY_RETENTION_MS = 10 * 60_000
const MAX_HISTORY = 1_024
const PRUNE_ARGS = ['worktree', 'prune', '--expire', 'now', '--verbose'] as const

/**
 * Owns exact, one-shot Git mutation grants.
 *
 * A grant is consumed before the matching host call is dispatched, even when Git later
 * fails. Callers revoke the handle in `finally` so cancelled or preflight-only worker
 * requests cannot leave ambient permission behind.
 */
export class GitMutationAuthorization {
  private readonly grants = new Map<number, GrantRecord>()
  private readonly grantByKey = new Map<string, number>()
  private readonly history = new Map<string, DenialRecord>()
  private readonly now: () => number
  private readonly grantTtlMs: number
  private readonly historyRetentionMs: number
  private nextId = 1
  private disposed = false

  constructor(options: GitMutationAuthorizationOptions = {}) {
    this.now = options.now ?? Date.now
    this.grantTtlMs = positiveDuration(
      options.grantTtlMs ?? DEFAULT_GRANT_TTL_MS,
      'grant TTL',
    )
    this.historyRetentionMs = positiveDuration(
      options.historyRetentionMs ?? DEFAULT_HISTORY_RETENTION_MS,
      'history retention',
    )
<shellId: 145 completed with exit code 0>
```

</details>


---

<sub>17m 6s</sub>

### `bash`

**List Git mutation kinds**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "GitMutationKind\s*=" -A 8 src/main/git/*.ts src/shared/*.ts | head -15; grep -rnoE "\['(switch|pull|fetch|checkout|merge|rebase|commit|add|push|stash|reset)'" src/main/git/*.ts | sort -u | head

<details>
<summary>12 lines</summary>

```
src/main/git/mutation-authorization.ts:11:export type GitMutationKind = 'worktree-prune' | 'branch-switch' | 'fetch' | 'pull'
src/main/git/mutation-authorization.ts-12-
src/main/git/mutation-authorization.ts-13-export type GitMutationGrantRequest =
src/main/git/mutation-authorization.ts-14-  | {
src/main/git/mutation-authorization.ts-15-      readonly kind: 'branch-switch'
src/main/git/mutation-authorization.ts-16-      readonly projectId: string
src/main/git/mutation-authorization.ts-17-      readonly root: HostPath
src/main/git/mutation-authorization.ts-18-      readonly target: string
src/main/git/mutation-authorization.ts-19-    }
src/main/git/git-branches.ts:124:['switch'
src/main/git/git-branches.ts:16:['fetch'
<shellId: 146 completed with exit code 0>
```

</details>


---

<sub>17m 10s</sub>

### `bash`

**Check pull and switch arguments**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "'pull'|--ff-only|'switch'" -A 3 src/main/git/git-branches.ts | head -20

<details>
<summary>12 lines</summary>

```
18:  'pull',
19-  '--no-rebase',
20:  '--ff-only',
21-  '--no-recurse-submodules',
22-] as const
23-
--
124:    const args = ['switch', '--no-guess', branch] as const
125-    const result = await this.context.mutate(workspaceRoot, args)
126-    if (result.code !== 0) throw gitError(args, result.stderr, result.code)
127-  }
<shellId: 147 completed with exit code 0>
```

</details>


---

<sub>17m 15s</sub>

### `bash`

**Verify document review labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE "Review and send|Copy review|Insert review[^'\"<]*|Send now|Add comment|Comment on [a-z ]+|Start review|Review comments?" src/renderer/src --include=*.tsx | sort | uniq -c | head -20

<details>
<summary>11 lines</summary>

```
1 107:Insert review
   1 15:Review and send
   1 152:Review and send
   1 157:Review and send
   1 265:Review comment
   1 33:Send now
   1 34:Add comment
   1 40:Add comment
   1 45:Add comment
   1 88:Copy review
<shellId: 148 completed with exit code 0>
```

</details>


---

<sub>17m 20s</sub>

### `bash`

**Find web pane UI labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE "(aria-label|title|placeholder)=\"[^\"]*\"|>[^<{}]{3,60}<" src/renderer/src/viewer/WebPane*.tsx src/renderer/src/web-pane/*.tsx 2>/dev/null | sort -u | head -30; ls src/renderer/src/viewer | grep -i web

```

<shellId: 149 completed with exit code 1>
```


---

<sub>17m 23s</sub>

### `bash`

**Locate web pane renderer files**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rlE "web-pane|WebPane" src/renderer/src --include=*.tsx | head -10

<details>
<summary>6 lines</summary>

```
src/renderer/src/App.tsx
src/renderer/src/viewer/TabStrip.tsx
src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/dashboards/WebPaneStack.tsx
<shellId: 150 completed with exit code 0>
```

</details>


---

<sub>17m 26s</sub>

### `bash`

**Extract web pane UI strings**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nohE "(aria-label|title|placeholder)=\"[^\"]*\"|>[^<{}]{3,60}<|'[A-Z][a-z][^']{5,80}'" src/renderer/src/dashboards/WebPane.tsx src/renderer/src/viewer/TabStrip.tsx | sort -u | head -40

<details>
<summary>32 lines</summary>

```
126:placeholder="/"
132:title="Reload"
139:aria-label="Reveal source terminal"
140:title="Back to terminal"
147:aria-label="Web pane diagnostics"
149:title="Diagnostics"
162:'Full page'
162:'Restore workbench'
165:title="Repository history graph"
170:>Git history<
172:'Open in browser'
173:'Browser handoff for SSH panes needs a compatibility route'
175:aria-label="Close Git history"
193:'Open in system browser'
194:'Open as web pane'
199:aria-label="Web pane diagnostics"
201:>Recent pane events<
215:'Drop a tab here'
215:>No failures or console warnings recorded.<
222:aria-label="Split viewer right"
223:title="Split viewer right"
233:aria-label="Close secondary viewer"
234:title="Close secondary viewer"
254:'Close without saving'
267:>Unsaved changes in this tab will be discarded.<
78:'Primary'
78:'Secondary'
90:aria-label="Back"
91:title="Back"
98:aria-label="Forward"
99:title="Forward"
<shellId: 151 completed with exit code 0>
```

</details>


---

<sub>17m 33s</sub>

### `bash`

**Verify file tree operations**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohE "Move to Trash|Move to trash|trashItem|Reveal in [A-Za-z ]+|Copy (relative )?path|New file|New folder|Rename|Delete" src/renderer/src/tree src/main/project-file-operations --include=*.ts --include=*.tsx | sort | uniq -c | sort -rn | head -15

<details>
<summary>16 lines</summary>

```
1 89:Move to Trash
   1 88:Delete
   1 4:Delete
   1 38:Move to Trash
   1 38:Delete
   1 326:Delete
   1 324:Delete
   1 323:Move to Trash
   1 26:Rename
   1 217:Rename
   1 21:Rename
   1 17:Delete
   1 133:Rename
   1 132:Rename
   1 130:Rename
<shellId: 152 completed with exit code 0>
```

</details>


---

<sub>17m 37s</sub>

### `bash`

**Check trash vs delete condition**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "Move to Trash" -B 6 src/renderer/src/tree/*.tsx | grep -nE "trash|remote|local|ssh|\?" | head -12

```
7:src/renderer/src/tree/FileCreateOverlays.tsx:323:      ? 'Move to Trash…'
15:src/renderer/src/tree/FileDeletionDialog.tsx:38:            {permanent ? 'Delete Permanently' : 'Move to Trash'}
20:src/renderer/src/tree/FileDeletionDialog.tsx-86-              ? 'Deleting…'
22:src/renderer/src/tree/FileDeletionDialog.tsx-88-                ? 'Delete Permanently'
<shellId: 153 completed with exit code 0>
```


---

<sub>17m 49s</sub>

### `bash`

**Recheck provider executables**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "file:|args:|SHELL|'-l'|login" src/main/harness/providers/*.ts | head -30

<details>
<summary>31 lines</summary>

```
src/main/harness/providers/claude-code.ts:38:  profile: {
src/main/harness/providers/claude-code.ts:40:    defaultProfile: {
src/main/harness/providers/claude-code.ts:69:      file: 'claude',
src/main/harness/providers/claude-code.ts:70:      args: ['--session-id', ctx.sessionId],
src/main/harness/providers/claude-code.ts:77:      file: 'claude',
src/main/harness/providers/claude-code.ts:78:      args: ['--resume', ctx.sessionId],
src/main/harness/providers/claude-code.ts:87:      file: 'claude',
src/main/harness/providers/claude-code.ts:88:      args: [
src/main/harness/providers/codex.ts:52:  profile: {
src/main/harness/providers/codex.ts:54:    defaultProfile: {
src/main/harness/providers/codex.ts:95:      file: 'codex',
src/main/harness/providers/codex.ts:96:      args: ['--config', CODEX_THREAD_TITLE_CONFIG, ...codexComposerArgs(ctx)],
src/main/harness/providers/codex.ts:103:      file: 'codex',
src/main/harness/providers/codex.ts:104:      args: [
src/main/harness/providers/codex.ts:118:      file: 'codex',
src/main/harness/providers/codex.ts:119:      args: [
src/main/harness/providers/codex.ts:167:  _profile: HarnessDocumentReviewInsertLaunch['profile'],
src/main/harness/providers/cursor.ts:11:  profile: {
src/main/harness/providers/cursor.ts:13:    defaultProfile: {
src/main/harness/providers/cursor.ts:29:  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
src/main/harness/providers/gemini.ts:11:  profile: {
src/main/harness/providers/gemini.ts:13:    defaultProfile: {
src/main/harness/providers/gemini.ts:29:  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
src/main/harness/providers/github-copilot.ts:11:  profile: {
src/main/harness/providers/github-copilot.ts:13:    defaultProfile: {
src/main/harness/providers/github-copilot.ts:30:    file: 'copilot',
src/main/harness/providers/github-copilot.ts:31:    args: [],
src/main/harness/providers/pi.ts:11:  profile: {
src/main/harness/providers/pi.ts:13:    defaultProfile: {
src/main/harness/providers/pi.ts:32:  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
<shellId: 154 completed with exit code 0>
```

</details>


---

<sub>17m 52s</sub>

### `bash`

**Check shell provider launch**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,80p' src/main/harness/providers/shell.ts | grep -nE "launch|file|args|description|login|SHELL" | head -20

<details>
<summary>15 lines</summary>

```
1:import { asHarnessProviderId, asHarnessProfileId } from '../../../shared'
6: * A plain login shell — no session id, no resume. The provider every host
17:  profile: {
19:    defaultProfile: {
20:      id: asHarnessProfileId('plain-shell-default'),
22:      description: 'The default interactive shell on this host.',
29:    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
35:  launch(ctx): HarnessLaunchSpec {
36:    return { file: ctx.defaultShell, args: ['-l'] }
40:    return this.launch(ctx)
51:  profile: {
58:    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
63:  launch: () => ({ file: 'custom', args: [] }),
64:  resume: () => ({ file: 'custom', args: [] }),
<shellId: 155 completed with exit code 0>
```

</details>


---

<sub>17m 57s</sub>

### `bash`

**Check resume support of launch-only providers**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "supportsResume|resume" src/main/harness/providers/{gemini,cursor,pi,github-copilot,shell}.ts

<details>
<summary>19 lines</summary>

```
src/main/harness/providers/gemini.ts:17:        'Gemini CLI. Launch-only; hvir never substitutes latest-session resume.',
src/main/harness/providers/gemini.ts:19:    reservedArguments: ['--resume', '-r'],
src/main/harness/providers/gemini.ts:26:  supportsResume: false,
src/main/harness/providers/gemini.ts:30:  resume(ctx) {
src/main/harness/providers/cursor.ts:19:    reservedArguments: ['--resume', 'resume', 'ls'],
src/main/harness/providers/cursor.ts:26:  supportsResume: false,
src/main/harness/providers/cursor.ts:30:  resume(ctx) {
src/main/harness/providers/pi.ts:19:    reservedArguments: ['--session', '--fork', '--continue', '-c', '--resume', '-r'],
src/main/harness/providers/pi.ts:29:  supportsResume: false,
src/main/harness/providers/pi.ts:33:  resume(ctx) {
src/main/harness/providers/github-copilot.ts:19:    reservedArguments: ['--session-id', '--resume', '-r', '--continue', '--connect'],
src/main/harness/providers/github-copilot.ts:26:  supportsResume: false,
src/main/harness/providers/github-copilot.ts:34:  resume(ctx) {
src/main/harness/providers/shell.ts:6: * A plain login shell — no session id, no resume. The provider every host
src/main/harness/providers/shell.ts:31:  supportsResume: false,
src/main/harness/providers/shell.ts:39:  resume(ctx): HarnessLaunchSpec {
src/main/harness/providers/shell.ts:60:  supportsResume: false,
src/main/harness/providers/shell.ts:64:  resume: () => ({ file: 'custom', args: [] }),
<shellId: 156 completed with exit code 0>
```

</details>


---

<sub>17m 59s</sub>

### `bash`

**View launch-only resume behavior**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '26,40p' src/main/harness/providers/gemini.ts

<details>
<summary>15 lines</summary>

```
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
<shellId: 157 completed with exit code 0>
```

</details>


---

<sub>18m 9s</sub>

### `bash`

**Check gh verify-asset usage**

$ command -v gh && gh release verify-asset --help 2>&1 | head -30

<details>
<summary>23 lines</summary>

```
/opt/homebrew/bin/gh
Verify that a given asset file originated from a specific GitHub Release using cryptographically signed attestations.

An attestation is a claim made by GitHub regarding a release and its assets.

		This command checks that the asset you provide matches a valid attestation for the specified release (or the latest release, if no tag is given).
It ensures the asset's integrity by validating that the asset's digest matches the subject in the attestation and that the attestation is associated with the release.

For more information about output formatting flags, see `gh help formatting`.

USAGE
  gh release verify-asset [<tag>] <file-path> [flags]

FLAGS
      --format string     Output format: {json}
  -q, --jq expression     Filter JSON output using a jq expression
  -t, --template string   Format JSON output using a Go template; see "gh help formatting"

INHERITED FLAGS
      --help                     Show help for command
  -R, --repo [HOST/]OWNER/REPO   Select another repository using the [HOST/]OWNER/REPO format

EXAMPLES
  # Verify an asset from the latest release
  $ gh release verify-asset ./dist/my-asset.zip
  
  # Verify an asset from a specific release tag
  $ gh release verify-asset v1.2.3 ./dist/my-asset.zip
  
  # Verify an asset from a specific release tag and output the attestation in JSON format
  $ gh release verify-asset v1.2.3 ./dist/my-asset.zip --format json
<shellId: 158 completed with exit code 0>
```

</details>


---

<sub>18m 14s</sub>

### `bash`

**Trace project-root argument handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "projectRootArgument|HVIR_PROJECT_ROOT|initialProjectRoot|openInitialProject|registerLaunchProject" src/main/*.ts | head -10

```
src/main/index.ts:169:    const requestedProjectRoot = projectRootArgument()
src/main/index.ts:429:  function projectRootArgument(): string | undefined {
src/main/index.ts:431:    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
src/main/index.ts:440:          projectRoot: localPath(projectRootArgument() ?? process.cwd()),
<shellId: 159 completed with exit code 0>
```


---

<sub>18m 17s</sub>

### `bash`

**Inspect requested project handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '166,186p;425,445p' src/main/index.ts; grep -nE "requestedRoot|initialRoot|openRequested|requested" src/main/project-registry.ts | head -12

<details>
<summary>49 lines</summary>

```
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
92:    initialRoot: HostPath,
98:    const initialProject = projects[0] ?? createProject(initialRoot)
111:    initialRoot: HostPath,
117:    initialRoot: HostPath | undefined,
124:    initialRoot: HostPath | undefined,
133:    let canonicalRoot = initialRoot ? await local.realpath(initialRoot) : undefined
<shellId: 160 completed with exit code 0>
```

</details>


---

<sub>18m 20s</sub>

### `bash`

**View registry creation logic**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '115,175p' src/main/project-registry.ts

<details>
<summary>62 lines</summary>

```
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
<shellId: 161 completed with exit code 0>
```

</details>


---

<sub>18m 27s</sub>

### `bash`

**Review third-party notices headings**

$ cd /private/var/tmp/ws/2002dadb/hvir && head -40 THIRD_PARTY_NOTICES.md; grep -nE "^#+ " THIRD_PARTY_NOTICES.md | head -30

<details>
<summary>35 lines</summary>

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

1:# Third-party notices
8:## Skill Steward rename-noreplace binding
39:## ghostty-web
74:## iTerm2-Color-Schemes theme collection
111:## Ghostty terminal core
<shellId: 162 completed with exit code 0>
```

</details>


---

<sub>18m 36s</sub>

### `bash`

**Check diagnostic report screenshot text**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nohiE ">[^<{}]*screenshot[^<{}]*<|'[^']*screenshot[^']*'|>[^<{}]*(Copy|Save)[^<{}]*<" src/renderer/src/diagnostics/*.tsx | sort -u | head -12

<details>
<summary>8 lines</summary>

```
205:>Optional screenshot<
235:>No screenshot is captured by default.<
239:'Replace screenshot'
240:'Capture masked screenshot'
279:'Screenshot capture failed; the structured report is unchanged.'
76:'Screenshot unavailable: the owned-surface mask inventory exceeded its bound.'
93:'Screenshot included. Inspect the exact image before Copy or Save.'
<shellId: 163 completed with exit code 0>
```

</details>


---

<sub>18m 56s</sub>

### `bash`

**Verify installer checks**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "simulate|--dry-run|apt-get -s|apt-get install -s|-s install|spctl|stapler|pkgutil --check-signature|notar" scripts/native-installer.template.sh | head -12

<details>
<summary>11 lines</summary>

```
158:    require_absolute_tool /usr/sbin/spctl
271:    --simulate \
305:  local artifact=$1 signature_log notarization_log gatekeeper_log
313:    /usr/sbin/pkgutil --check-signature "$artifact"
326:  notarization_log="$temporary_directory/macos-package-notarization.log"
327:  stage='validating the stapled macOS notarization ticket'
329:    "$notarization_log" \
330:    /usr/bin/xcrun stapler validate "$artifact"
335:    /usr/sbin/spctl --assess --type install --verbose=2 "$artifact"
336:  echo 'Apple signature, notarization, and Gatekeeper checks passed.'
<shellId: 164 completed with exit code 0>
```

</details>


---

<sub>18m 59s</sub>

### `bash`

**Inspect installer Linux checks and legacy migration**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '255,300p' scripts/native-installer.template.sh; sed -n '395,470p' scripts/native-installer.template.sh

<details>
<summary>118 lines</summary>

```
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
<shellId: 165 completed with exit code 0>
```

</details>


---

<sub>19m 9s</sub>

### `bash`

**Check projects bar placement**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "className=\"(projects-bar|workbench|app-shell|left-rail|rail)[^\"]*\"" src/renderer/src --include=*.tsx | head -8; grep -rnE "^\.projects-bar\s*\{" -A 12 src/renderer/src/styles/*.css src/renderer/src/*.css 2>/dev/null | head -30

<details>
<summary>22 lines</summary>

```
src/renderer/src/tree/FileTree.tsx:136:    <section className="rail-section files-panel" aria-label="Files" hidden={hidden}>
src/renderer/src/App.tsx:401:    <div className="app-shell">
src/renderer/src/App.tsx:448:          <nav className="rail-nav" aria-label="Project views">
src/renderer/src/App.tsx:468:          <div className="rail-content">
src/renderer/src/health/WorkbenchHealthControl.tsx:41:          className="workbench-health-dialog"
src/renderer/src/health/WorkbenchHealthControl.tsx:43:          <header className="workbench-health-heading">
src/renderer/src/health/WorkbenchHealthControl.tsx:53:            <p className="workbench-health-empty">No workbench faults observed.</p>
src/renderer/src/health/WorkbenchHealthControl.tsx:55:            <ol className="workbench-health-list">
src/renderer/src/styles/projects.css:26:.projects-bar {
src/renderer/src/styles/projects.css-27-  height: 38px;
src/renderer/src/styles/projects.css-28-}
src/renderer/src/styles/projects.css-29-
src/renderer/src/styles/projects.css-30-/* Leading inset that still carries the baseline, like the rail-nav's padding. */
src/renderer/src/styles/projects.css-31-.projects-bar::before {
src/renderer/src/styles/projects.css-32-  content: '';
src/renderer/src/styles/projects.css-33-  flex: 0 0 6px;
src/renderer/src/styles/projects.css-34-  border-bottom: 1px solid var(--border-strong);
src/renderer/src/styles/projects.css-35-}
src/renderer/src/styles/projects.css-36-
src/renderer/src/styles/projects.css-37-.project-tab,
src/renderer/src/styles/projects.css-38-.project-add,
<shellId: 166 completed with exit code 0>
```

</details>


---

<sub>19m 12s</sub>

### `bash`

**View top-level app layout order**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '400,470p' src/renderer/src/App.tsx | grep -nE "<[A-Z][A-Za-z]+|className=" | head -30

<details>
<summary>10 lines</summary>

```
2:    <div className="app-shell">
4:        <ProjectsBar
39:        className={`workbench${connectionState === 'connected' ? '' : ' project-stale'}${terminalMode === 'maximized' ? ' terminal-focused' : ''}${terminalMode === 'collapsed' ? ' terminal-collapsed' : ''}${treeCollapsed ? ' tree-collapsed' : ''}${layout.terminalRailCompact ? ' terminal-rail-compact' : ''}${webViewFocused && webViewActive ? ' web-focused' : ''}`}
44:          className="tree-panel"
49:          <nav className="rail-nav" aria-label="Project views">
52:              className={railMode === 'files' ? 'active' : ''}
61:                className={railMode === 'git' ? 'active' : ''}
69:          <div className="rail-content">
70:            <FileTree
<shellId: 167 completed with exit code 0>
```

</details>


---

<sub>19m 17s</sub>

### `bash`

**Check workbench grid layout**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "grid-template-areas|grid-template-rows|grid-template-columns" -A 4 src/renderer/src/styles/layout.css src/renderer/src/styles.css 2>/dev/null | head -40; ls src/renderer/src/styles

<details>
<summary>39 lines</summary>

```
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
<shellId: 168 completed with exit code 0>
```

</details>


---

<sub>19m 20s</sub>

### `bash`

**Check shell grid areas**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "^\.workbench\s*\{|grid-template|grid-area" src/renderer/src/styles/shell.css | head -20

<details>
<summary>7 lines</summary>

```
1:.workbench {
8:  grid-template-columns: var(--tree-track) 1px minmax(0, 1fr) var(
11:  grid-template-rows: minmax(180px, 4fr) 1px var(--terminal-track);
22:  grid-template-rows: 0 1px minmax(0, 1fr);
32:  grid-template-rows: minmax(0, 1fr) 1px 0;
42:  grid-template-columns: 0 1px minmax(0, 1fr) var(--terminal-rail-current-track);
<shellId: 169 completed with exit code 0>
```

</details>


---

<sub>19m 27s</sub>

### `bash`

**Trace shortcut actions usage**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "toggleTerminalFocus|cycleViewMode" src/renderer/src --include=*.ts --include=*.tsx | grep -v "keybindings.ts" | head -8

<details>
<summary>9 lines</summary>

```
src/renderer/src/App.tsx:183:    toggleTerminalFocus,
src/renderer/src/App.tsx:247:    cycleViewMode: cycleActiveMode,
src/renderer/src/App.tsx:252:    toggleTerminalFocus,
src/renderer/src/workbench/use-workbench-layout.ts:215:  const toggleTerminalFocus = useCallback(
src/renderer/src/workbench/use-workbench-layout.ts:268:    toggleTerminalFocus,
src/renderer/src/workbench/workbench-command-router.ts:7:  readonly cycleViewMode: () => void
src/renderer/src/workbench/workbench-command-router.ts:12:  readonly toggleTerminalFocus: () => void
src/renderer/src/workbench/workbench-command-router.ts:32:    case 'cycleViewMode':
<shellId: 170 completed with exit code 0>
```

</details>


---

<sub>19m 30s</sub>

### `bash`

**Verify terminal focus and mode cycling**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '210,235p' src/renderer/src/workbench/use-workbench-layout.ts; grep -rnE "cycleActiveMode\s*=|function cycleActiveMode|const cycleActiveMode" -A 12 src/renderer/src --include=*.ts --include=*.tsx | head -30

<details>
<summary>39 lines</summary>

```
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
src/renderer/src/viewer/use-viewer-workspace.ts:239:  const cycleActiveMode = useCallback((): void => {
src/renderer/src/viewer/use-viewer-workspace.ts-240-    flushPendingPositions()
src/renderer/src/viewer/use-viewer-workspace.ts-241-    send({ type: 'cycle-active-mode' })
src/renderer/src/viewer/use-viewer-workspace.ts-242-  }, [flushPendingPositions, send])
src/renderer/src/viewer/use-viewer-workspace.ts-243-
src/renderer/src/viewer/use-viewer-workspace.ts-244-  const registerViewerCommandTarget = useCallback(
src/renderer/src/viewer/use-viewer-workspace.ts-245-    (tabId: string, target: ViewerCommandTarget): (() => void) =>
src/renderer/src/viewer/use-viewer-workspace.ts-246-      commandTargets.current.register(tabId, target),
src/renderer/src/viewer/use-viewer-workspace.ts-247-    [],
src/renderer/src/viewer/use-viewer-workspace.ts-248-  )
src/renderer/src/viewer/use-viewer-workspace.ts-249-
src/renderer/src/viewer/use-viewer-workspace.ts-250-  const requestGoToLine = useCallback((): void => {
src/renderer/src/viewer/use-viewer-workspace.ts-251-    commandTargets.current.goToLine(modelRef.current.activeId)
<shellId: 171 completed with exit code 0>
```

</details>


---

<sub>19m 34s</sub>

### `bash`

**Check viewer mode definitions**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "ViewMode\s*=|type ViewerMode|'rendered' \| 'source'|nextMode|cycleMode" src/shared/viewer-types.ts src/renderer/src/viewer/*.ts | head -10

```
src/shared/viewer-types.ts:5:export type ViewMode = 'rendered' | 'source' | 'diff'
<shellId: 172 completed with exit code 0>
```


---

<sub>19m 43s</sub>

### `bash`

**View installer purge roots**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "^purge_roots\(\)" -A 22 scripts/native-installer.template.sh

<details>
<summary>24 lines</summary>

```
578:purge_roots() {
579-  local wrapped
580-  if [[ "$HOME" != /* || "$HOME" == '/' ]]; then
581-    echo "Refusing to purge with unsafe HOME: ${HOME:-unset}" >&2
582-    exit 1
583-  fi
584-  wrapped=/${HOME#/}/
585-  case "$wrapped" in
586-  */../* | */./*)
587-    echo "Refusing to purge with non-canonical HOME: $HOME" >&2
588-    exit 1
589-    ;;
590-  esac
591-  if [[ "$platform" == 'macos' ]]; then
592-    printf '%s\n' \
593-      "$HOME/Library/Application Support/hvir" \
594-      "$HOME/Library/Caches/hvir"
595-  else
596-    if [[ -n "${XDG_CONFIG_HOME:-}" && "$XDG_CONFIG_HOME" == /* ]]; then
597-      wrapped=/${XDG_CONFIG_HOME#/}/
598-      case "$wrapped" in
599-      */../* | */./*)
600-        echo "Refusing to purge with unsafe XDG_CONFIG_HOME: $XDG_CONFIG_HOME" >&2
<shellId: 173 completed with exit code 0>
```

</details>


---

<sub>19m 49s</sub>

### `bash`

**Find remote image paste storage**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "image-paste|imagePaste|pasted-images|hvir-paste|TTL|ttl" src/main/terminal/*.ts src/main/project-host/*.ts 2>/dev/null | grep -iE "dir|path|root|ttl" | head -10

<details>
<summary>11 lines</summary>

```
src/main/project-host/local-host.ts:175:      let settled = false
src/main/project-host/local-host.ts:194:        if (!settled && !terminalError && !truncated) {
src/main/project-host/local-host.ts:201:        if (terminalError || truncated || settled) return
src/main/project-host/local-host.ts:246:        if (!settled) {
src/main/project-host/local-host.ts:247:          settled = true
src/main/project-host/local-host.ts:253:        if (settled) return
src/main/project-host/local-host.ts:254:        settled = true
src/main/project-host/renderer-ssh-prompter.ts:12:  readonly settle: (answers: readonly string[] | undefined) => void
src/main/project-host/renderer-ssh-prompter.ts:69:        settle: (answers) => {
src/main/project-host/renderer-ssh-prompter.ts:80:        pending.settle(undefined)
<shellId: 174 completed with exit code 0>
```

</details>


---

<sub>19m 58s</sub>

### `bash`

**Verify SSH auth order and default keys**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "authHandler|'agent'|'publickey'|'keyboard-interactive'|'password'|id_ed25519|id_rsa|id_ecdsa|SSH_AUTH_SOCK" src/main/project-host/*.ts | head -20

<details>
<summary>21 lines</summary>

```
src/main/project-host/project-host-catalog.ts:56:        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
src/main/project-host/project-host-catalog.ts:176:  'id_rsa',
src/main/project-host/project-host-catalog.ts:177:  'id_ecdsa',
src/main/project-host/project-host-catalog.ts:178:  'id_ecdsa_sk',
src/main/project-host/project-host-catalog.ts:179:  'id_ed25519',
src/main/project-host/project-host-catalog.ts:180:  'id_ed25519_sk',
src/main/project-host/ssh-auth.ts:4:    'password' | 'passphrase' | 'keyboard-interactive' | 'host-key' | 'host-key-changed'
src/main/project-host/ssh-client-lifecycle.ts:103:    level === 'agent' ||
src/main/project-host/ssh-host.ts:792:      authHandler: (methods, _partial, next) => {
src/main/project-host/ssh-host.ts:803:            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
src/main/project-host/ssh-host.ts:805:          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
src/main/project-host/ssh-host.ts:806:            attempted.add('agent')
src/main/project-host/ssh-host.ts:807:            return { type: 'agent', username: config.user, agent: agentSocket }
src/main/project-host/ssh-host.ts:809:          const identity = available.has('publickey')
src/main/project-host/ssh-host.ts:836:              type: 'publickey',
src/main/project-host/ssh-host.ts:842:          if (available.has('keyboard-interactive') && !attempted.has('keyboard')) {
src/main/project-host/ssh-host.ts:845:              type: 'keyboard-interactive',
src/main/project-host/ssh-host.ts:856:                  kind: 'keyboard-interactive',
src/main/project-host/ssh-host.ts:869:          if (available.has('password') && !attempted.has('password')) {
src/main/project-host/ssh-host.ts:870:            attempted.add('password')
<shellId: 175 completed with exit code 0>
```

</details>


---

<sub>20m 2s</sub>

### `bash`

**Verify harness probe shell usage**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "'-lic'|-lic|command -v|'-l', '-i'|login" src/main/harness/harness-probe.ts | head -8

```

<shellId: 176 completed with exit code 0>
```


---

<sub>20m 5s</sub>

### `bash`

**Find login shell probe command**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "command -v|'-lic'|\"-lic\"|-lic" src/main --include=*.ts | grep -v smoke | head -10

<details>
<summary>7 lines</summary>

```
src/main/harness/claude-keybindings.ts:407:  const result = await host.exec('sh', ['-lc', `command -v ${command} >/dev/null 2>&1`])
src/main/harness/harness-shell-environment.ts:9:  return ['-lic', `command -v ${shellQuote(executable)} >/dev/null 2>&1`]
src/main/harness/harness-shell-environment.ts:17:  return ['-lic', `exec ${command}`]
src/main/harness/harness-shell-environment.ts:29:  return ['-lic', `printf '\\036hvir-provider-output-v1\\037'; exec ${command} 2>&1`]
src/main/project-host/ssh-host.ts:231:      'if [ -n "$SHELL" ] && [ -x "$SHELL" ]; then printf "%s\\n" "$SHELL"; elif command -v bash >/dev/null 2>&1; then command -v bash; else printf "/bin/sh\\n"; fi',
src/main/project-host/ssh-host.ts:685:          await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
<shellId: 177 completed with exit code 0>
```

</details>


---

<sub>20m 23s</sub>

### `bash`

**Check user-data-dir usage in repo**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "user-data-dir|userData" scripts/*.mts scripts/*.sh scripts/*.mjs src/main/index.ts src/main/application-runtime*.ts 2>/dev/null | head -15

<details>
<summary>16 lines</summary>

```
scripts/installed-startup-probe.mts:248:  const userDataRoot = join(options.runtimeRoot, 'user-data')
scripts/installed-startup-probe.mts:252:  mkdirSync(userDataRoot)
scripts/installed-startup-probe.mts:280:      `--user-data-dir=${userDataRoot}`,
scripts/installed-startup-probe.mts:372:              readFileSync(join(userDataRoot, 'DevToolsActivePort'), 'utf8'),
scripts/run-smoke.sh:103:    ELECTRON_CLI_ARGS="[\"--user-data-dir=$user_data_root\"]" \
scripts/run-smoke.sh:121:    --user-data-dir="$user_data_root" &
src/main/index.ts:76:    applicationRuntime.userDataRoot,
src/main/application-runtime-policy.ts:9:  readonly userDataRoot: string
src/main/application-runtime-policy.ts:13:  getPath(name: 'appData' | 'userData'): string
src/main/application-runtime-policy.ts:14:  setPath(name: 'userData', path: string): void
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:26:  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
src/main/application-runtime-policy.ts:27:  prepareUserDataRoot(userDataRoot)
src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
src/main/application-runtime-policy.ts:29:  return { buildChannel, userDataRoot }
<shellId: 178 completed with exit code 0>
```

</details>


---

<sub>20m 26s</sub>

### `bash`

**Inspect smoke user-data-dir usage and runtime policy**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '90,125p' scripts/run-smoke.sh; sed -n '1,40p' src/main/application-runtime-policy.ts

<details>
<summary>61 lines</summary>

```
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
<shellId: 179 completed with exit code 0>
```

</details>


---

<sub>20m 33s</sub>

### `bash`

**Check electron-vite ELECTRON_CLI_ARGS handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "ELECTRON_CLI_ARGS" node_modules/electron-vite/dist/*.js node_modules/electron-vite/dist/**/*.js 2>/dev/null | head -10

```
node_modules/electron-vite/dist/cli.js:59:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/cli.js:106:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:224:    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
<shellId: 180 completed with exit code 0>
```


---

<sub>20m 36s</sub>

### `bash`

**View electron-vite CLI arg plumbing**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '50,62p;100,110p' node_modules/electron-vite/dist/cli.js; sed -n '215,240p' node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js

<details>
<summary>51 lines</summary>

```
process.env.V8_INSPECTOR_PORT = typeof options.inspect === 'number' ? `${options.inspect}` : '5858';
    }
    if (options.inspectBrk) {
        process.env.V8_INSPECTOR_BRK_PORT = typeof options.inspectBrk === 'number' ? `${options.inspectBrk}` : '5858';
    }
    if (options.noSandbox) {
        process.env.NO_SANDBOX = '1';
    }
    if (options['--']) {
        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
    }
    if (options.entry) {
        process.env.ELECTRON_ENTRY = options.entry;
        process.env.NO_SANDBOX = '1';
    }
    if (options.entry) {
        process.env.ELECTRON_ENTRY = options.entry;
    }
    if (options['--']) {
        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
    }
    try {
        await preview(inlineConfig, { skipBuild: options.skipBuild });
    }
            target = Object.values(chromeVer).reverse()[0];
        return 'chrome' + target;
    }
    return '';
}
function startElectron(root) {
    ensureElectronEntryFile(root);
    const electronPath = getElectronPath();
    const isDev = process.env.NODE_ENV_ELECTRON_VITE === 'development';
    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
    if (!!process.env.REMOTE_DEBUGGING_PORT && isDev) {
        args.push(`--remote-debugging-port=${process.env.REMOTE_DEBUGGING_PORT}`);
    }
    if (!!process.env.V8_INSPECTOR_PORT && isDev) {
        args.push(`--inspect=${process.env.V8_INSPECTOR_PORT}`);
    }
    if (!!process.env.V8_INSPECTOR_BRK_PORT && isDev) {
        args.push(`--inspect-brk=${process.env.V8_INSPECTOR_BRK_PORT}`);
    }
    if (process.env.NO_SANDBOX === '1') {
        args.push('--no-sandbox');
    }
    const entry = process.env.ELECTRON_ENTRY || '.';
    const ps = spawn(electronPath, [entry].concat(args), { stdio: 'inherit' });
    ps.on('close', process.exit);
    return ps;
<shellId: 181 completed with exit code 0>
```

</details>


---

<sub>20m 47s</sub>

### `bash`

**Check tsconfig include globs**

$ cd /private/var/tmp/ws/2002dadb/hvir && node -e 'for (const f of ["tsconfig.node.json","tsconfig.web.json"]) { const t=require("./"+f); console.log(f, JSON.stringify(t.include), JSON.stringify(t.exclude||[])) }' 2>/dev/null || (head -30 tsconfig.node.json; head -30 tsconfig.web.json)

```
tsconfig.node.json ["src/main/**/*.ts","src/main/**/*.mts","src/preload/**/*.ts","src/workers/**/*.ts","src/shared/**/*.ts","scripts/**/*.mts","scripts/project-management/**/*.ts","test/**/*.ts","electron.vite.config.ts","vitest.config.ts"] []
tsconfig.web.json ["src/renderer/**/*.ts","src/renderer/**/*.tsx","src/renderer/**/*.mts","src/shared/**/*.ts","test/**/*.test.tsx"] []
<shellId: 182 completed with exit code 0>
```


---

<sub>20m 52s</sub>

### `bash`

**Check architecture:check requirements**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "HVIR_REPO_TOKEN|GITHUB_TOKEN|GH_TOKEN|origin|jarmak-personal|throw new Error\(|console\.error\(" scripts/architecture-hotspots.mjs | head -20

```

<shellId: 183 completed with exit code 0>
```


---

<sub>20m 55s</sub>

### `bash`

**Inspect architecture hotspots script**

$ cd /private/var/tmp/ws/2002dadb/hvir && head -40 scripts/architecture-hotspots.mjs; grep -rlnE "HVIR_REPO_TOKEN" scripts | head

<details>
<summary>15 lines</summary>

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()
scripts/architecture-github.mts
scripts/architecture-hotspots.mts
scripts/architecture-wiring.mts
scripts/project-management/migrate-project-tokens.ts
scripts/project-management/planning-cli.ts
scripts/project-management/contributor-status-cli.ts
scripts/project-management/read-planning-record.ts
scripts/project-management/sync-pull-request-planning.ts
scripts/project-management/read-contributor-status.ts
scripts/project-management/issue-start-cli.ts
<shellId: 184 completed with exit code 0>
```

</details>


---

<sub>20m 58s</sub>

### `bash`

**Check enforce mode requirements**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "HVIR_REPO_TOKEN|enforce|throw new Error\(|Error\(\`|Error\('" scripts/architecture-hotspots.mts scripts/architecture-github.mts | head -30

<details>
<summary>31 lines</summary>

```
scripts/architecture-hotspots.mts:82:    const enforce = process.argv.includes('--enforce')
scripts/architecture-hotspots.mts:84:    if (enforce) {
scripts/architecture-hotspots.mts:85:      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
scripts/architecture-hotspots.mts:96:        throw new Error('Architecture target changed during verification; reverify')
scripts/architecture-hotspots.mts:106:    if (enforce && (report.violations.length || dependencies.violations.length))
scripts/architecture-github.mts:46:    throw new Error(
scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
scripts/architecture-github.mts:70:        throw new Error(`Native parent evidence failed (${response.status})`)
scripts/architecture-github.mts:73:        throw new Error('Cross-repository native parent')
scripts/architecture-github.mts:85:    throw new Error('Native epic is closed or nested')
scripts/architecture-github.mts:90:    throw new Error('Native parent is not one valid epic')
scripts/architecture-github.mts:95:    throw new Error('Missing or ambiguous exact epic branch')
scripts/architecture-github.mts:114:    throw new Error('Architecture evidence requires the canonical repository')
scripts/architecture-github.mts:124:      throw new Error('Architecture CI requires the canonical pull_request event')
scripts/architecture-github.mts:125:    if (!environment.GITHUB_EVENT_PATH) throw new Error('Missing PR event file')
scripts/architecture-github.mts:138:      throw new Error(
scripts/architecture-github.mts:151:      throw new Error(
scripts/architecture-github.mts:160:        throw new Error('Missing exact completing-child relationship')
scripts/architecture-github.mts:163:        throw new Error('Wrong native epic target')
scripts/architecture-github.mts:169:        throw new Error('Wrong cumulative epic')
scripts/architecture-github.mts:172:    } else if (target !== 'main') throw new Error('Unsupported architecture target')
scripts/architecture-github.mts:178:      if (child.state !== 'open') throw new Error('Local delivery issue is closed')
scripts/architecture-github.mts:187:        throw new Error('Wrong local cumulative epic')
scripts/architecture-github.mts:191:      throw new Error(
scripts/architecture-github.mts:198:    throw new Error('Live target changed from the tested PR event; refresh and reverify')
scripts/architecture-github.mts:214:    throw new Error(
scripts/architecture-github.mts:218:  if (!pr || !evidence.sourceCommit) throw new Error('Missing accepted PR identities')
scripts/architecture-github.mts:222:    throw new Error('Accepted PR lacks exact completing-child relationship')
scripts/architecture-github.mts:225:    throw new Error('Accepted PR belongs to a different native epic')
scripts/architecture-github.mts:227:    throw new Error('Recorded PR base differs from accepted merge base')
<shellId: 185 completed with exit code 0>
```

</details>


---

<sub>21m 3s</sub>

### `bash`

**View release workflow triggers**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,60p' .github/workflows/release.yml

<details>
<summary>55 lines</summary>

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
<shellId: 186 completed with exit code 0>
```

</details>


---

<sub>21m 8s</sub>

### `bash`

**List workflows and current-release triggers**

$ cd /private/var/tmp/ws/2002dadb/hvir && ls .github/workflows/ && grep -lE "bump=current|bump: current|-f bump=current|'current'" .github/workflows/*.yml

<details>
<summary>14 lines</summary>

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
.github/workflows/release-pr-merged.yml
.github/workflows/release.yml
<shellId: 187 completed with exit code 0>
```

</details>


---

<sub>21m 11s</sub>

### `bash`

**Inspect release PR merge workflow**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,40p' .github/workflows/release-pr-merged.yml; grep -nE "runs-on|name: " .github/workflows/release.yml | sed -n '1,60p'

<details>
<summary>96 lines</summary>

```
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
      - name: Check out trusted release validation
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.repository.default_branch }}
          persist-credentials: false
          sparse-checkout: |-
            scripts/validate-release-pr.mts
            scripts/release-github-evidence.mts
          sparse-checkout-cone-mode: false

      - name: Set up Node.js
        uses: actions/setup-node@v7
1:name: Release
29:    name: Prepare ${{ inputs.bump }} release
30:    runs-on: ubuntu-24.04
43:      - name: Require the default branch
52:      - name: Check out release history
59:      - name: Select trusted release source
82:      - name: Set up Node.js
88:      - name: Select release version
146:      - name: Require exact-source coherent CI evidence
155:      - name: Prepare pull request or native release source
178:    name: Build and accept Linux package (${{ matrix.name }})
181:    runs-on: ${{ matrix.os }}
187:          - name: Linux x64
192:          - name: Linux arm64
201:      - name: Check out exact release source
206:      - name: Set up Node.js
212:      - name: Install dependencies
215:      - name: Build native package
218:      - name: Install, update, launch, and remove native package
221:      - name: Bind the accepted package name and digest
240:      - name: Retain the exact accepted package
243:          name: release-linux-${{ matrix.release_arch }}
252:    name: Accept release package (${{ matrix.name }})
259:    runs-on: ${{ matrix.os }}
265:          - name: Ubuntu 24.04 x64
267:            artifact_name: release-linux-x64
270:          - name: Ubuntu 24.04 arm64
272:            artifact_name: release-linux-arm64
279:      - name: Check out exact release source
284:      - name: Set up Node.js
290:      - name: Download the accepted baseline package
293:          name: ${{ matrix.artifact_name }}
296:      - name: Verify and restore the exact package for acceptance
302:      - name: Install, update, launch, and remove native package
306:    name: Accept release package (${{ matrix.name }})
313:    runs-on: ${{ matrix.os }}
322:          - name: Debian 13 x64
324:            artifact_name: release-linux-x64
327:          - name: Debian 13 arm64
329:            artifact_name: release-linux-arm64
334:      - name: Check out exact release source
339:      - name: Download the accepted baseline package
342:          name: ${{ matrix.artifact_name }}
345:      - name: Prepare the disposable Debian acceptance host
361:      - name: Verify and restore the exact package for acceptance
369:      - name: Install, update, launch, and remove native package
378:    name: Build and accept macOS arm64
388:    name: Assemble, verify, and publish immutable release
401:    runs-on: ubuntu-24.04
408:      - name: Check out exact release source
415:      - name: Set up Node.js
421:      - name: Download accepted Linux x64 package
424:          name: release-linux-x64
427:      - name: Download accepted Linux arm64 package
430:          name: release-linux-arm64
433:      - name: Download protected accepted macOS package
436:          name: release-macos-arm64
439:      - name: Verify the exact accepted native artifact set
466:      - name: Require repository release immutability
484:      - name: Assemble exact release metadata and installer
<shellId: 188 completed with exit code 0>
```

</details>


---

<sub>21m 15s</sub>

### `bash`

**Check Linux build matrix OS**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '183,198p' .github/workflows/release.yml

<details>
<summary>17 lines</summary>

```
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
<shellId: 189 completed with exit code 0>
```

</details>


---

<sub>21m 23s</sub>

### `bash`

**Inspect tracker lock workflow and templates**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat .github/workflows/lock-tracker-conversations.yml | head -50; ls .github; ls .github/ISSUE_TEMPLATE 2>/dev/null; cat .github/pull_request_template.md 2>/dev/null | head -30

<details>
<summary>33 lines</summary>

```
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
    steps:
      - name: Lock pull request conversation
        env:
          GH_TOKEN: ${{ github.token }}
          PULL_REQUEST_URL: ${{ github.event.pull_request.html_url }}
        run: gh pr lock "$PULL_REQUEST_URL"
dependabot.yml
workflows
<shellId: 190 completed with exit code 0>
```

</details>


---

<sub>21m 29s</sub>

### `bash`

**Check CI workflow jobs**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,20p' .github/workflows/ci.yml; grep -nE "^  [a-z-]+:$|name: |run: npm|run: xvfb" .github/workflows/ci.yml | head -40

<details>
<summary>57 lines</summary>

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
1:name: CI
17:  release-version-integrity:
18:    name: Release version integrity
33:      - name: Check out trusted release validation
43:      - name: Set up Node.js
49:      - name: Validate version-only release change
59:  verify:
60:    name: Verification (Linux)
72:      - name: Check out repository
78:      - name: Set up Node.js
84:      - name: Install dependencies
85:        run: npm ci
87:      - name: Run policy, type, and test verification
90:        run: npm run verify
92:  electron-smoke:
93:    name: Electron smoke (Linux)
100:      - name: Check out repository
103:      - name: Set up Node.js
109:      - name: Install dependencies
110:        run: npm ci
112:      - name: Run production Electron workflow
115:        run: xvfb-run -a npm run smoke
117:      - name: Run development renderer Performance Timeline containment
120:        run: xvfb-run -a npm run smoke:development-performance
122:      - name: Prove failure and interruption isolation
123:        run: xvfb-run -a npm run smoke:isolation
125:      - name: Upload bounded Electron failure evidence
129:          name: ci-electron-smoke-failure-${{ github.run_attempt }}
134:  macos-electron-smoke:
137:    name: Electron correctness (macOS arm64; temporary reduced gate)
144:      - name: Check out repository
147:      - name: Set up Node.js
153:      - name: Install dependencies
154:        run: npm ci
156:      - name: Run focused unpackaged Electron scenarios
159:        run: npm run smoke:macos:ci
161:      - name: Upload bounded macOS Electron failure evidence
165:          name: ci-macos-electron-smoke-failure-${{ github.run_attempt }}
170:  codeql:
171:    name: CodeQL analysis
<shellId: 191 completed with exit code 0>
```

</details>


---

<sub>21m 37s</sub>

### `bash`

**Check fork capability gating**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "supportsExactFork|exactFork|forkAvailable|supportsFork" src/main/harness/providers/*.ts src/main/harness/*.ts | head -12

<details>
<summary>10 lines</summary>

```
src/main/harness/providers/claude-code.ts:61:    supportsExactForkVersion: supportsClaudeExactForkVersion,
src/main/harness/providers/codex.ts:87:    supportsExactForkVersion: supportsCodexExactForkVersion,
src/main/harness/harness-launch-selection.ts:27:    if (!provider.fork || effectiveCapabilities.exactFork !== true) {
src/main/harness/harness-launch.ts:161:  if (context.effectiveCapabilities?.exactFork !== true || !provider.fork) {
src/main/harness/harness-provider-capabilities.ts:35:    ...(probed.exactFork === true ? { exactFork: true as const } : {}),
src/main/harness/harness-provider-probes.ts:39:    readonly supportsExactForkVersion?: (version: string | undefined) => boolean
src/main/harness/harness-provider-probes.ts:55:      ...(capabilities.supportsExactForkVersion?.(version)
src/main/harness/harness-provider-probes.ts:56:        ? { exactFork: true as const }
src/main/harness/harness-provider-registry.ts:33:      ...(provider.fork ? { exactForkLaunch: true as const } : {}),
<shellId: 192 completed with exit code 0>
```

</details>


---

<sub>21m 43s</sub>

### `bash`

**Verify paste files as paths feature**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnoiE "paste[a-z ]*(file|path)s?[a-z ]*|clipboard[A-Za-z]*(Files|Paths)" src/renderer/src/terminal src/main/terminal --include=*.ts --include=*.tsx | sort -u | head -10

```
src/main/terminal/electron-clipboard-file-paste.ts:5:PastePath 
src/main/terminal/electron-clipboard-file-paste.ts:80:PastePath
<shellId: 193 completed with exit code 0>
```


---

<sub>21m 46s</sub>

### `bash`

**Inspect clipboard file paste module**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,40p' src/main/terminal/electron-clipboard-file-paste.ts | grep -vE "^import" | head -30

<details>
<summary>24 lines</summary>

```
export const GNOME_COPIED_FILES_FORMAT = 'x-special/gnome-copied-files'
export const URI_LIST_FORMAT = 'text/uri-list'
export const MAX_NATIVE_FILE_CLIPBOARD_BYTES = 64 * 1024

export interface NativeFileClipboardSource {
  availableFormats(): string[]
  readBuffer(format: string): Uint8Array
}

/** Read one local file path from Linux file-manager clipboard formats. */
export class ElectronClipboardFilePaste {
  constructor(
    private readonly source: NativeFileClipboardSource = clipboard,
    private readonly platform: NodeJS.Platform = process.platform,
  ) {}

  read(): string | undefined {
    if (this.platform !== 'linux') return undefined

    const formats = this.source.availableFormats()
    const gnomeFormat = formats.find(
      (format) => format.toLowerCase() === GNOME_COPIED_FILES_FORMAT,
    )
    if (gnomeFormat) {
      const gnomePath = this.readFormat(gnomeFormat, 'gnome')
      if (gnomePath !== undefined) return gnomePath ?? undefined
    }
<shellId: 194 completed with exit code 0>
```

</details>


---

<sub>21m 51s</sub>

### Copilot

Research is complete. Writing the README now.

---

<sub>24m 0s</sub>

### `create`

**create a new file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
Created file /private/var/tmp/ws/2002dadb/hvir/README.md with 24389 characters
```


---

<sub>24m 32s</sub>

### `bash`

**View keybinding parser validation**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '120,175p' src/shared/keybindings.ts

<details>
<summary>21 lines</summary>

```
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
<shellId: 195 completed with exit code 0>
```

</details>


---

<sub>24m 42s</sub>

### `bash`

**Check renderer keybinding validation**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,80p' src/renderer/src/settings/keybindings.ts

<details>
<summary>21 lines</summary>

```
import {
  matchesKeybinding as matchesSharedKeybinding,
  type KeyboardStroke,
} from '../../../shared'

export {
  DEFAULT_KEYBINDINGS,
  KEYBINDING_ACTIONS,
  keybindingAvailableInContext,
  keybindingOverridesJson,
  parseKeybindingOverrides,
  type KeybindingAction,
  type KeybindingMap,
} from '../../../shared'

export function matchesKeybinding(
  event: KeyboardStroke,
  binding: string,
  mac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform),
): boolean {
  return matchesSharedKeybinding(event, binding, mac)
}
<shellId: 196 completed with exit code 0>
```

</details>


---

<sub>24m 48s</sub>

### `bash`

**Validate keybinding override example**

$ cd /private/var/tmp/ws/2002dadb/hvir && head -3 src/shared/keybindings.ts && cat > "$TMPDIR/kb-check.mts" <<'EOF'
import { parseKeybindingOverrides, matchesKeybinding } from '/private/var/tmp/ws/2002dadb/hvir/src/shared/keybindings.ts'
const json = JSON.parse('{ "findFile": "Mod+Shift+P", "focusTerminal": "Ctrl+`" }')
const map = parseKeybindingOverrides(json)
console.log(map.findFile, map.focusTerminal)
console.log('linux ctrl+`', matchesKeybinding({ key: '`', code: 'Backquote', ctrlKey: true, metaKey: false, altKey: false, shiftKey: false }, map.focusTerminal, false))
console.log('mac ctrl+`', matchesKeybinding({ key: '`', code: 'Backquote', ctrlKey: true, metaKey: false, altKey: false, shiftKey: false }, map.focusTerminal, true))
EOF
node "$TMPDIR/kb-check.mts"; rm -f "$TMPDIR/kb-check.mts"

<details>
<summary>11 lines</summary>

```
export const KEYBINDING_ACTIONS = [
  'cycleViewMode',
  'findFile',
(node:81619) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///private/var/tmp/ws/2002dadb/hvir/src/shared/keybindings.ts is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /private/var/tmp/ws/2002dadb/hvir/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Mod+Shift+P Ctrl+`
linux ctrl+` true
mac ctrl+` true
<shellId: 197 completed with exit code 0>
```

</details>


---

<sub>24m 59s</sub>

### `bash`

**Validate README scripts, links, anchors**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat > "$TMPDIR/readme-check.mjs" <<'EOF'
import { readFileSync, existsSync } from 'node:fs'
const md = readFileSync('README.md', 'utf8')
const scripts = JSON.parse(readFileSync('package.json', 'utf8')).scripts
const problems = []
const runs = new Set([...md.matchAll(/npm run ([a-z0-9:_-]+)/gi)].map((m) => m[1]))
for (const name of runs) if (!(name in scripts)) problems.push(`missing script: ${name}`)
const scriptMentions = new Set([...md.matchAll(/`([a-z]+(?::[a-z0-9*-]+)+|check-seams|check-adrs|lint|typecheck)`/g)].map((m) => m[1]))
for (const name of scriptMentions) {
  if (name.includes('*')) {
    const re = new RegExp('^' + name.replace(/\*/g, '[^:]+').replace(/:/g, ':') + '$')
    if (!Object.keys(scripts).some((s) => re.test(s))) problems.push(`no script matches pattern: ${name}`)
  } else if (!(name in scripts)) problems.push(`backticked name not a script: ${name}`)
}
const slug = (h) => h.trim().toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-')
const anchors = new Set([...md.matchAll(/^#{1,6}\s+(.+)$/gm)].map((m) => slug(m[1])))
for (const m of md.matchAll(/\]\(#([^)]+)\)/g)) if (!anchors.has(m[1])) problems.push(`broken anchor: #${m[1]}`)
for (const m of md.matchAll(/\]\((?!https?:|#)([^)]+)\)|src="(?!https?:)([^"]+)"/g)) {
  const target = m[1] ?? m[2]
  if (!existsSync(target)) problems.push(`missing file: ${target}`)
}
const inFence = []
let fence = false
md.split('\n').forEach((line, i) => {
  if (/^```/.test(line)) fence = !fence
  if (!fence && line.length > 92 && !line.startsWith('|')) inFence.push(`${i + 1}: ${line.length}`)
})
console.log('scripts referenced:', [...runs].sort().join(', '))
console.log('backticked script names:', [...scriptMentions].sort().join(', '))
console.log('anchors:', [...anchors].join(', '))
console.log('long prose lines:', inFence.join('; ') || 'none')
console.log(problems.length ? problems.join('\n') : 'NO PROBLEMS')
EOF
node "$TMPDIR/readme-check.mjs"

<details>
<summary>7 lines</summary>

```
scripts referenced: architecture:report, build, build:dir, check-seams, dev, format, format:check, gauntlet, hooks:install, install:runtime, lint, pack:linux:arm64, pack:linux:x64, pack:mac:arm64, pack:mac:arm64:signed, preview, smoke, smoke:capacity, smoke:macos, smoke:scenario, test:mutation, test:watch, typecheck, verify
backticked script names: acceptance:*, architecture:check, check-adrs, check-seams, lint, path:line:column, smoke:*:installed, typecheck
anchors: contents, features, install, supported-platforms, install-with-the-installer-script, update-and-uninstall, install-a-package-manually, getting-started, agent-harnesses, remote-projects-over-ssh, settings-and-keyboard-shortcuts, where-hvir-keeps-data, troubleshooting, development, prerequisites, set-up, run, test-and-check, smoke-tests, build-and-package, architecture, releases, contributing, license
long prose lines: 259: 94
backticked name not a script: path:line:column
no script matches pattern: acceptance:*
<shellId: 198 completed with exit code 0>
```

</details>


---

<sub>25m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md (lines 250-275)

<details>
<summary>23 lines</summary>

```
- **Terminal:** cursor shape and blinking, font ligatures, the idle-after-output
  threshold for attention, which terminals to restore on app start, and message
  submission.
- **Git:** auto-fetch interval (off, or every 1, 5, 15, or 30 minutes).
- **Keybindings:** a JSON object that overrides default shortcuts.
- **Harnesses:** harness profiles (see [Agent harnesses](#agent-harnesses)).

**Message submission.** When you choose to send agent messages with
<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>Enter</kbd> (so <kbd>Enter</kbd> inserts a new line),
hvir asks for consent and then updates the <kbd>Enter</kbd>, <kbd>Ctrl</kbd>+<kbd>Enter</kbd>,
and <kbd>Shift</kbd>+<kbd>Enter</kbd> chat bindings in Claude Code's `keybindings.json` on
each host you use. It saves the previous values in `.hvir-keybindings-state.json` in the
same directory, so turning the setting off restores them. Codex receives the setting as a
launch option, so restart open Codex terminals after you change it.

**Default shortcuts.** `Mod` is <kbd>Cmd</kbd> on macOS and <kbd>Ctrl</kbd> on Linux.

| Action                                   | Action id             | Default         |
| ---------------------------------------- | --------------------- | --------------- |
| Find a file by name                      | `findFile`            | `Mod+P`         |
| Find in the current file                 | `findInFile`          | `Mod+F`         |
| Find in the terminal                     | `findInTerminal`      | `Mod+Shift+F`   |
| Go to line                               | `goToLine`            | `Ctrl+G`        |
| Cycle the view mode (rendered/source/diff) | `cycleViewMode`     | `Mod+Shift+M`   |
| Focus the terminal                       | `focusTerminal`       | `Mod+J`         |
| Maximize or restore the terminal panel   | `toggleTerminalFocus` | `Mod+Shift+J`   |
```

</details>


---

<sub>25m 12s</sub>

### `bash`

**Verify Claude config dir resolution**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "CLAUDE_CONFIG_DIR|\.claude|STATE_FILE|hvir-keybindings-state" src/main/harness/claude-keybindings.ts | head -10

```
10:const STATE_FILE = '.hvir-keybindings-state.json'
14:const KEYBINDINGS_DOCS = 'https://code.claude.com/docs/en/keybindings'
87:  const statePath = joinHostPath(directory, STATE_FILE)
392:    'printf "%s" "${CLAUDE_CONFIG_DIR:-${HOME}/.claude}"',
<shellId: 199 completed with exit code 0>
```


---

<sub>25m 14s</sub>

### Copilot

Now let me fix the long line, table alignment, and the loose `acceptance:*` reference.

---

<sub>25m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>25m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>25m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>25m 31s</sub>

### `bash`

**Check installed-smoke and acceptance guards**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "HVIR_[A-Z_]+|disposable|refus|Refus" scripts/run-linux-package-smoke.sh | head -8; grep -nE "HVIR_[A-Z_]+|disposable" scripts/run-macos-package-smoke.sh | head -6; grep -rnoE "HVIR_REAL_SSH_[A-Z_]+" scripts | sort -u -t: -k3 | head -8; grep -nE "HVIR_[A-Z_]+|disposable|identity" scripts/run-macos-ssh-acceptance.sh | head -8

<details>
<summary>25 lines</summary>

```
21:if [[ "${HVIR_LINUX_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
22:  echo 'Set HVIR_LINUX_PACKAGE_ACCEPTANCE=1 on a disposable compatible Linux host.' >&2
99:    echo "Refusing to clean unexpected package-smoke root: $invocation_root" >&2
135:  'prefix:-g) printf "%s\n" "$HVIR_FAKE_NPM_PREFIX" ;;' \
136:  'root:-g) printf "%s\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
137:  'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
139:  '  /bin/rm -f -- "$HVIR_FAKE_NPM_PREFIX/bin/hvir"' \
140:  '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
7:if [[ "${HVIR_MACOS_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
8:  echo 'Refusing to modify native package state without HVIR_MACOS_PACKAGE_ACCEPTANCE=1.' >&2
19:case "${HVIR_MACOS_PACKAGE_MODE:-}" in
20:structural | signed) package_mode=$HVIR_MACOS_PACKAGE_MODE ;;
22:  echo 'HVIR_MACOS_PACKAGE_MODE must be structural or signed.' >&2
33:expected_team_id=${HVIR_MACOS_EXPECTED_TEAM_ID:-}
scripts/run-real-host-ssh-acceptance.mts:869:HVIR_REAL_SSH_ARTIFACT_DIR
scripts/real-host-ssh-contract.mts:8:HVIR_REAL_SSH_HOST
scripts/real-host-ssh-contract.mts:11:HVIR_REAL_SSH_HOST_KEY
scripts/real-host-ssh-contract.mts:14:HVIR_REAL_SSH_IDENTITY_FILE
scripts/real-host-ssh-contract.mts:15:HVIR_REAL_SSH_PASSPHRASE
scripts/real-host-ssh-contract.mts:9:HVIR_REAL_SSH_PORT
scripts/real-host-ssh-contract.mts:13:HVIR_REAL_SSH_PRIVATE_KEY
scripts/real-host-ssh-contract.mts:12:HVIR_REAL_SSH_ROOT_PARENT
26:    echo "$name is required for the Apple-issued SSH acceptance identity." >&2
54:scripts/record-macos-ssh-identity.sh --acceptance "$application"
<shellId: 200 completed with exit code 0>
```

</details>


---

<sub>25m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>25m 54s</sub>

### `bash`

**Check shellEnvironment usage**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '26,40p' src/main/harness/providers/github-copilot.ts; grep -rnE "shellEnvironment" src/main/harness/*.ts | head -10

<details>
<summary>16 lines</summary>

```
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
src/main/harness/harness-provider-contract.ts:40:  readonly shellEnvironment?: boolean
<shellId: 201 completed with exit code 0>
```

</details>


---

<sub>25m 57s</sub>

### `bash`

**Trace login shell launch usage**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "shellEnvironment|harnessShell(Launch|Probe)Args|-lic" src/main --include=*.ts | grep -v "providers/" | grep -v smoke | head -12; sed -n '1,35p' src/main/harness/harness-shell-environment.ts

<details>
<summary>40 lines</summary>

```
src/main/pty/pty-supervisor.ts:165:      const launch = spec.shellEnvironment
src/main/harness/harness-provider-contract.ts:40:  readonly shellEnvironment?: boolean
src/main/harness/harness-shell-environment.ts:8:export function harnessShellProbeArgs(executable: string): readonly string[] {
src/main/harness/harness-shell-environment.ts:9:  return ['-lic', `command -v ${shellQuote(executable)} >/dev/null 2>&1`]
src/main/harness/harness-shell-environment.ts:17:  return ['-lic', `exec ${command}`]
src/main/harness/harness-shell-environment.ts:29:  return ['-lic', `printf '\\036hvir-provider-output-v1\\037'; exec ${command} 2>&1`]
src/main/harness/harness-probe.ts:17:  harnessShellProbeArgs,
src/main/harness/harness-probe.ts:270:        harnessShellProbeArgs(resolved.spec.file),
/**
 * Run harness discovery and launches through the owning host's login-interactive
 * shell environment. GUI-launched desktop processes do not inherit the path a
 * user's login startup establishes (for example Homebrew in ~/.zprofile).
 */
const HARNESS_PROBE_OUTPUT_MARKER = '\x1ehvir-provider-output-v1\x1f'

export function harnessShellProbeArgs(executable: string): readonly string[] {
  return ['-lic', `command -v ${shellQuote(executable)} >/dev/null 2>&1`]
}

export function harnessShellCommandArgs(
  executable: string,
  args: readonly string[],
): readonly string[] {
  const command = [executable, ...args].map(shellQuote).join(' ')
  return ['-lic', `exec ${command}`]
}

/**
 * Bound provider-owned output after login startup, excluding diagnostics and
 * banners emitted before the detached shell reaches the command.
 */
export function harnessShellProbeCommandArgs(
  executable: string,
  args: readonly string[],
): readonly string[] {
  const command = [executable, ...args].map(shellQuote).join(' ')
  return ['-lic', `printf '\\036hvir-provider-output-v1\\037'; exec ${command} 2>&1`]
}

export function harnessShellProbeOutput(output: string): string | undefined {
  const boundary = output.indexOf(HARNESS_PROBE_OUTPUT_MARKER)
  return boundary === -1
    ? undefined
<shellId: 202 completed with exit code 0>
```

</details>


---

<sub>26m 2s</sub>

### `bash`

**Verify harness profile field labels**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnoE "\{binding:[a-z-]+\}" src/renderer/src src/main src/shared --include=*.ts --include=*.tsx | sort -u | head -5; grep -rnohE "'(All projects|This registered project|Plaintext value|Secret reference|Target host|Forward local|Unset)'|>(All projects|This registered project|Plaintext value|Secret reference|Target host|Forward local|Unset)<" src/renderer/src/settings | sort -u

<details>
<summary>12 lines</summary>

```
src/main/smoke/harness-profile-workflow.ts:191:{binding:workspace}
src/renderer/src/settings/HarnessProfileCommandFields.tsx:25:{binding:monorepo}
110:'All projects'
131:'All projects'
179:>Plaintext value<
180:>Secret reference<
181:>Unset<
193:>All projects<
194:>This registered project<
210:>Target host<
211:>Forward local<
<shellId: 203 completed with exit code 0>
```

</details>


---

<sub>26m 7s</sub>

### `bash`

**Confirm known_hosts is not used**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "known_hosts" src --include=*.ts | grep -v smoke | head -5

```

<shellId: 204 completed with exit code 0>
```


---

<sub>26m 14s</sub>

### `bash`

**Check localStorage persistence users**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rlnE "localStorage" src/renderer/src --include=*.ts --include=*.tsx | head -12

<details>
<summary>7 lines</summary>

```
src/renderer/src/settings/settings.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/terminal/terminal-split-persistence.ts
src/renderer/src/workspaces/SessionDialog.tsx
src/renderer/src/viewer/viewer-workspace-persistence.ts
src/renderer/src/theme.ts
<shellId: 205 completed with exit code 0>
```

</details>


---

<sub>26m 22s</sub>

### `bash`

**Confirm canonical repository slug**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnoE "jarmak-personal/hvir[a-z./-]*" scripts .github src test 2>/dev/null | awk -F: '{print $1": "$NF}' | sort -u | head -10

<details>
<summary>11 lines</summary>

```
scripts/architecture-github.mts: jarmak-personal/hvir
scripts/architecture-github.mts: jarmak-personal/hvir.git
scripts/assemble-native-release.mjs: jarmak-personal/hvir
scripts/project-management/audit-canonical-project.ts: jarmak-personal/hvir
scripts/project-management/canonical-project-config.ts: jarmak-personal/hvir
scripts/project-management/github-delivery-adapters.ts: jarmak-personal/hvir
scripts/project-management/github-token-migration.ts: jarmak-personal/hvir/issues/
scripts/project-management/issue-context-cli.ts: jarmak-personal/hvir
scripts/project-management/issue-start-cli.ts: jarmak-personal/hvir
scripts/project-management/kind-cli.ts: jarmak-personal/hvir
<shellId: 206 completed with exit code 0>
```

</details>


---

<sub>26m 33s</sub>

### `bash`

**Verify smoke repeat bound and gauntlet**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "MAX_SMOKE_REPETITIONS\s*=" scripts/*.mts; cat scripts/phase8-gauntlet.sh | head -40

<details>
<summary>10 lines</summary>

```
scripts/run-smoke-scenarios.mts:51:const MAX_SMOKE_REPETITIONS = 100
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi
<shellId: 207 completed with exit code 0>
```

</details>


---

<sub>26m 43s</sub>

### `bash`

**Check host primitive seam exceptions**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '24,40p' scripts/check-seams.sh; grep -nE "files:|ignores:|node:fs|child_process|chokidar|node-pty" eslint.config.mjs | head -30

<details>
<summary>45 lines</summary>

```
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
18:  'node:fs',
20:  'node:fs/promises',
21:  'child_process',
22:  'node:child_process',
23:  'chokidar',
24:  'node-pty',
28:    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
113:  { ignores: ['out/**', 'dist/**', 'node_modules/**', 'coverage/**'] },
117:    files: ['src/**/*.{ts,tsx,mts,cts}'],
124:    files: ['**/*.{ts,tsx,mts}'],
147:    files: ['src/shared/**/*.{ts,tsx,mts,cts}'],
148:    ignores: ['src/shared/ipc.ts', 'src/shared/index.ts'],
173:    files: ['src/main/harness/**/*.{ts,tsx,mts,cts}'],
174:    ignores: ['src/main/harness/harness-provider.ts'],
178:    files: ['src/main/harness/providers/**/*.{ts,tsx,mts,cts}'],
182:    files: [
199:    files: ['src/main/pty/**/*.{ts,tsx,mts,cts}'],
200:    ignores: ['src/main/pty/pty-supervisor.ts'],
210:    files: [
254:    files: ['src/main/project-host/project-host-catalog.ts'],
274:    files: ['src/renderer/**/*.{ts,tsx}'],
286:    files: ['src/renderer/src/viewer/**/*.{ts,tsx}'],
287:    ignores: ['src/renderer/src/viewer/FileViewer.tsx'],
295:    files: [
308:    files: ['src/renderer/src/viewer/*.worker.ts'],
318:    files: ['src/main/diagnostics/diagnostic-journal.ts'],
325:    files: ['src/main/diagnostics/diagnostic-evidence.ts'],
332:    files: [
342:    files: ['src/main/ipc/authority-router.ts'],
349:    files: [
<shellId: 208 completed with exit code 0>
```

</details>


---

<sub>26m 53s</sub>

### `bash`

**Confirm release asset list**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '95,160p' scripts/assemble-native-release.mjs | grep -nE "'[A-Za-z_.-]+\.(sh|json|md|txt)'|SHA256SUMS|manifest|NOTICES" | head

<details>
<summary>11 lines</summary>

```
6:  const manifestName = 'release-manifest.json'
7:  const manifestPath = resolve(assetDirectory, manifestName)
8:  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
13:    manifestName,
21:  const checksumsPath = resolve(assetDirectory, 'SHA256SUMS')
29:    manifest,
30:    manifestPath,
55:    'install.sh',
56:    'release-manifest.json',
57:    'SHA256SUMS',
<shellId: 209 completed with exit code 0>
```

</details>


---

<sub>26m 56s</sub>

### `bash`

**Check notices in release assets**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '140,160p' scripts/assemble-native-release.mjs; grep -nE "THIRD_PARTY_NOTICES" scripts/assemble-native-release.mjs .github/workflows/release.yml | head

<details>
<summary>25 lines</summary>

```
}
  if (!options.assetDirectory) {
    throw new Error('A release asset directory is required.')
  }
}

async function requireExactInputs(assetDirectory, expectedNames) {
  const entries = await readdir(assetDirectory)
  const allowedGenerated = new Set([
    'install.sh',
    'release-manifest.json',
    'SHA256SUMS',
    'THIRD_PARTY_NOTICES.md',
  ])
  const unexpected = entries.filter(
    (name) => !expectedNames.includes(name) && !allowedGenerated.has(name),
  )
  if (unexpected.length > 0) {
    throw new Error(`Unexpected release inputs: ${unexpected.sort().join(', ')}.`)
  }
  for (const name of expectedNames) {
scripts/assemble-native-release.mjs:13:const noticesSource = resolve(repositoryRoot, 'THIRD_PARTY_NOTICES.md')
scripts/assemble-native-release.mjs:80:  const noticesName = 'THIRD_PARTY_NOTICES.md'
scripts/assemble-native-release.mjs:152:    'THIRD_PARTY_NOTICES.md',
.github/workflows/release.yml:558:            THIRD_PARTY_NOTICES.md \
<shellId: 210 completed with exit code 0>
```

</details>


---

<sub>27m 10s</sub>

### `bash`

**Read notices for ghostty components**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '39,50p;74,82p;111,122p' THIRD_PARTY_NOTICES.md

<details>
<summary>24 lines</summary>

```
## ghostty-web

Source: <https://github.com/coder/ghostty-web>

hvir currently consumes a provenance-recorded artifact from its bounded
[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
That artifact retains ghostty-web's upstream license and authorship.

The fork maintains hvir's demand-driven rendering, terminal presentation lifecycle, and
structured terminal-event compatibility in source. Those modifications are maintained by
hvir contributors, not by Coder or the Ghostty project, and hvir consumes the resulting
immutable artifact without modifying it during installation.
## iTerm2-Color-Schemes theme collection

Source: <https://github.com/mbadolato/iTerm2-Color-Schemes>

Hvir includes a generated, color-only terminal theme catalog from upstream tag
`release-20260216-151611-fc73ce3` at commit
`fc73ce39746540b6d5ec6b91e304785431401d85`. Ghostty core commit
`332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28` pins the corresponding theme archive.
Hvir's runtime consumes only the generated palette data and does not parse or execute the
## Ghostty terminal core

Source: <https://github.com/ghostty-org/ghostty>

ghostty-web includes a WebAssembly build of Ghostty's terminal core, which hvir
redistributes as part of its terminal implementation.

MIT License

Copyright (c) 2024 Mitchell Hashimoto, Ghostty contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
<shellId: 211 completed with exit code 0>
```

</details>


---

<sub>27m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>27m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>27m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>27m 25s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>27m 36s</sub>

### `bash`

**Check document review staleness wording**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnohiE "'[^']*stale[^']*'|>[^<{}]*stale[^<{}]*<|\`[^\`]*stale[^\`]*\`" src/renderer/src/document-review src/main/document-review --include=*.ts --include=*.tsx | sort -u | head -12

<details>
<summary>13 lines</summary>

```
122:'stale-unreviewed'
128:'stale'
133:'stale'
134:'A stale review location must be acknowledged before delivery'
158:'mark-document-stale'
186:'stale'
216:'stale'
241:'stale'
244:'mark-document-stale'
244:'stale'
244:`${comment.lifecycle}, stale (${anchor.reason})`
245:'stale'
<shellId: 212 completed with exit code 0>
```

</details>


---

<sub>27m 40s</sub>

### `bash`

**Find stale anchor reasons**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "reason:\s*'[a-z-]+'|StaleReason|staleReason|type [A-Za-z]*Reason\s*=" src/shared/document-review*.ts src/main/document-review/*.ts 2>/dev/null | head -10; ls src/shared | grep -i review

<details>
<summary>8 lines</summary>

```
src/shared/document-review.ts:95:export type ReviewAnchorStaleReason =
src/shared/document-review.ts:110:      readonly reason: ReviewAnchorStaleReason
src/shared/document-review.ts:189:      readonly reason: 'deleted' | 'host-unavailable' | 'incomplete-read' | 'invalid-text'
src/main/document-review/document-review-store-codec.ts:242:    staleReason(value['reason']) &&
src/main/document-review/document-review-store-codec.ts:319:function staleReason(
document-review.ts
html-preview.ts
<shellId: 213 completed with exit code 0>
```

</details>


---

<sub>27m 42s</sub>

### `bash`

**View stale reason definitions**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '90,115p' src/shared/document-review.ts

<details>
<summary>24 lines</summary>

```
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
<shellId: 214 completed with exit code 0>
```

</details>


---

<sub>27m 47s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>27m 53s</sub>

### `bash`

**Check terminal URL click behavior**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "Open as web pane|openWebPane|openExternal|isLoopback" src/renderer/src/terminal/*.ts src/renderer/src/terminal/*.tsx | head -12

```

<shellId: 215 completed with exit code 0>
```


---

<sub>27m 56s</sub>

### `bash`

**Locate web pane link handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rlnE "Open as web pane" src/renderer/src | head -3; grep -rnE "loopback" src/renderer/src --include=*.ts --include=*.tsx -l | head -10

```
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/terminal/ghostty-terminal-pane.ts
src/renderer/src/terminal/terminal-pane.ts
src/renderer/src/terminal/terminal-file-link.ts
<shellId: 216 completed with exit code 0>
```


---

<sub>27m 58s</sub>

### `bash`

**Inspect terminal loopback link handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "loopback" -B 2 -A 8 src/renderer/src/terminal/terminal-pane.ts | head -40

<details>
<summary>12 lines</summary>

```
187-export type TerminalLinkActivation =
188-  | { readonly kind: 'file'; readonly target: string }
189:  | { readonly kind: 'loopback-http'; readonly target: string }
190-
191-export interface TerminalPaneEvents {
192-  /** User input or parser-owned protocol replies that must be written to the PTY. */
193-  onData(cb: (data: string, source: TerminalPaneDataSource) => void): Disposer
194-  /** Explicit clipboard-paste gesture; policy remains outside the swappable pane. */
195-  onClipboardPaste(cb: (fallbackData: string) => void): Disposer
196-  /** Parser-owned terminal semantics; consumers retain all product authority. */
197-  onEvent(cb: (event: TerminalEvent) => void): Disposer
<shellId: 217 completed with exit code 0>
```

</details>


---

<sub>28m 1s</sub>

### `bash`

**Find loopback link activation consumers**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "'loopback-http'" src/renderer/src --include=*.ts --include=*.tsx | grep -v "terminal-pane.ts:189" | head -8

```
src/renderer/src/terminal/ghostty-terminal-pane.ts:761:          { kind: isFileUri(target) ? 'file' : 'loopback-http', target },
src/renderer/src/terminal/ghostty-terminal-pane.ts:785:          { kind: 'loopback-http', target: candidate.target },
<shellId: 218 completed with exit code 0>
```


---

<sub>28m 5s</sub>

### `bash`

**Trace loopback link consumer**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "onLinkActivate|linkActivation|activation\.kind|kind === 'loopback-http'|case 'loopback-http'" src/renderer/src --include=*.ts --include=*.tsx | head -10

```
src/renderer/src/terminal/TerminalWorkspace.tsx:358:          if (activation.kind === 'file') {
<shellId: 219 completed with exit code 0>
```


---

<sub>28m 8s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/src/renderer/src/terminal/TerminalWorkspace.tsx.**

/private/var/tmp/ws/2002dadb/hvir/src/renderer/src/terminal/TerminalWorkspace.tsx (lines 345-385)

<details>
<summary>41 lines</summary>

```
        workspaceRoot={workspaceRoot}
        connectionState={connectionState}
        onCreateDefault={defaultProfile ? commands.startDefault : undefined}
        onUpdateSession={updateSession}
        onFreshStarted={commands.acceptFreshStart}
        onForkIdentity={commands.acceptForkIdentity}
        onForkStartFailed={commands.failForkStart}
        onExit={commands.handleExit}
        onInput={recordInput}
        onOutput={recordOutput}
        onBell={(id) => raiseAttention(id, 'bell')}
        onFocus={commands.focus}
        onLink={(session, activation) => {
          if (activation.kind === 'file') {
            activateTerminalFileTarget(activation.target, workspaceRoot, onOpenPath)
            return
          }
          const url = normalizeTerminalWebTarget(activation.target)
          if (url) onOpenWebLink({ terminalId: session.id, workspaceRoot, url })
        }}
        onSplit={commands.split}
        onFork={commands.fork}
        onOpenTerminalSettings={onOpenTerminalSettings}
        onSetPrimaryWidth={setTerminalPrimaryWidth}
        onResetPrimaryWidth={resetTerminalPrimaryWidth}
        runtimes={runtimes}
      />
      {visible ? (
        <TerminalWorkspaceControls
          label={label}
          available={available}
          railCompact={railCompact}
          onRailCompact={onRailCompact}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          model={model}
          profileState={profileState}
          recovery={recovery}
          commands={commands}
          moving={moving}
          preferences={preferences}
```

</details>


---

<sub>28m 13s</sub>

### `bash`

**Re-run README validation**

$ cd /private/var/tmp/ws/2002dadb/hvir && node "$TMPDIR/readme-check.mjs" && wc -l README.md

<details>
<summary>7 lines</summary>

```
scripts referenced: architecture:report, build, build:dir, check-seams, dev, format, format:check, gauntlet, hooks:install, install:runtime, lint, pack:linux:arm64, pack:linux:x64, pack:mac:arm64, pack:mac:arm64:signed, preview, smoke, smoke:capacity, smoke:macos, smoke:scenario, test:mutation, test:watch, typecheck, verify
backticked script names: acceptance:ssh:*, architecture:check, check-adrs, check-seams, lint, path:line:column, smoke:linux:installed, smoke:macos:installed, typecheck
anchors: contents, features, install, supported-platforms, install-with-the-installer-script, update-and-uninstall, install-a-package-manually, getting-started, agent-harnesses, remote-projects-over-ssh, settings-and-keyboard-shortcuts, where-hvir-keeps-data, troubleshooting, development, prerequisites, set-up, run, test-and-check, smoke-tests, build-and-package, architecture, releases, contributing, license
long prose lines: none
backticked name not a script: path:line:column
     480 README.md
<shellId: 220 completed with exit code 0>
```

</details>


---

<sub>28m 17s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md (lines 1-120)

<details>
<summary>94 lines</summary>

````
<p align="center">
  <img src="build/icons-linux/256x256.png" width="96" height="96" alt="hvir icon">
</p>

<h1 align="center">hvir</h1>

<p align="center"><strong>A desktop workbench for terminal coding agents.</strong></p>

hvir runs coding agents such as Claude Code and Codex in real terminals, alongside the
things you keep checking while they work: the project's files, its Git changes and
history, a viewer that renders Markdown, diagrams, HTML, and data files, line-anchored
review comments you can hand back to an agent, and a web pane for the dev server the agent
just started. Projects can live on your machine or on any host in your `~/.ssh/config`.

hvir is an Electron app for Apple-silicon Macs and 64-bit Linux. It is pre-1.0 software
under active development.

## Contents

- [Features](#features)
- [Install](#install)
- [Getting started](#getting-started)
- [Agent harnesses](#agent-harnesses)
- [Remote projects over SSH](#remote-projects-over-ssh)
- [Settings and keyboard shortcuts](#settings-and-keyboard-shortcuts)
- [Where hvir keeps data](#where-hvir-keeps-data)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Architecture](#architecture)
- [Releases](#releases)
- [Contributing](#contributing)
- [License](#license)

## Features

**Agent terminals**

- Real PTYs rendered with the Ghostty terminal core (through a fork of ghostty-web), with
  split terminals, terminal search, and a rail that lists every terminal in the workspace.
- Launch Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi, a login
  shell, or your own command. hvir runs the agent CLIs you already have installed; it does
  not install or update them.
- When hvir starts again it can reopen your terminals, either automatically or after
  asking. Claude Code and Codex terminals resume the exact conversation they were running.
- Fork a Claude Code or Codex conversation into a new terminal, and see a context-window
  meter and usage for both (fork requires a CLI version that supports it).
- File paths printed in a terminal, including `path:line:column`, open in the viewer.
  Local `localhost` URLs open in the web pane.
- Paste clipboard images into Claude Code or Codex, even when the agent runs on an SSH
  host.
- Move a live terminal to another worktree without restarting its process.
- Attention markers and an app badge when a terminal goes quiet after producing output,
  plus a **Sessions** overview of every terminal across all projects.

**Projects, files, and viewer**

- Register several projects. Each Git worktree is a workspace you can switch between, and
  worktrees created outside hvir (for example by an agent running `git worktree add`) are
  discovered automatically.
- File tree with Git status, filename search, drag and drop, and create, rename, move, and
  delete (to the Trash where available).
- Viewer tabs with a side-by-side split. Rendered views for Markdown (including Mermaid
  diagrams and task lists), Mermaid files, sandboxed HTML previews, JSON, YAML, CSV, and
  images.
- Source view with syntax highlighting, find, go to line, a Git blame gutter, and editing
  (<kbd>Mod</kbd>+<kbd>S</kbd> saves).
- Diff view with three bases: `Index → Working tree`, `HEAD → Working tree`, and
  `Branch point → HEAD`.

**Git**

- Changes, per-file diffs, a history graph with commit details, and blame.
- Branch switching, fetch, fast-forward-only pull, and optional auto-fetch.
- Staging, committing, and pushing are left to you and your agents.

**Review and preview**

- **Document review:** comment on lines of a rendered or source document. Drafts survive
  restarts, comments follow their text as the document changes, and hvir flags comments it
  can no longer place. When you are done, copy the review, insert it into a Claude Code or
  Codex prompt without submitting it, or send it to Codex directly.
- **Web pane:** browse `localhost`, `127.0.0.1`, and `[::1]` pages from the project's host
  through an authenticated per-pane proxy. For SSH projects the traffic is tunneled to the
  remote host's loopback interface, so you do not need to set up port forwarding.

**Remote hosts and diagnostics**

- Open projects on SSH hosts. Terminals, file operations, Git, and agent detection all run
  on the remote machine.
- A **Workbench health** indicator collects local faults and can produce a bounded
  diagnostic report, with an optional masked screenshot, that you review before copying or
  saving it.

## Install

### Supported platforms

| Platform               | Package | Notes                                              |
| ---------------------- | ------- | -------------------------------------------------- |
| macOS on Apple silicon | `.pkg`  | Signed with a Developer ID and notarized           |
| Linux x64 and arm64    | `.deb`  | apt-based distributions with glibc 2.35 or newer   |

Linux packages are tested on Ubuntu 22.04, Ubuntu 24.04, and Debian 13. Intel Macs and
Windows are not supported.

### Install with the installer script

Download `install.sh` from the latest release and run it:

```sh
curl -fsSLO https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer uses `sudo`. It picks the package for your machine, checks its SHA-256
digest, and installs it with the system package manager:

- **macOS:** verifies the package signature, notarization ticket, and Gatekeeper
  assessment, then installs `/Applications/hvir.app` and the `/usr/local/bin/hvir`
  command.
````

</details>


---

<sub>28m 22s</sub>

### `bash`

**Check rendered file extensions**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "mmd|mermaid|\.html?|csv|ya?ml|json|png|svg|jpe?g|gif|webp|md\b|markdown" src/shared/viewer-types.ts | head -20

<details>
<summary>21 lines</summary>

```
62:  'markdown' | 'mermaid' | 'html' | 'json' | 'yaml' | 'csv' | 'image'
68:  if (extension === 'md' || extension === 'mdx' || extension === 'markdown') {
69:    return 'markdown'
71:  if (extension === 'mmd' || extension === 'mermaid') return 'mermaid'
73:  if (extension === 'json') return 'json'
74:  if (extension === 'yaml' || extension === 'yml') return 'yaml'
75:  if (extension === 'csv') return 'csv'
82:  'json',
83:  'yaml',
84:  'yml',
85:  'markdown',
86:  'md',
88:  'mermaid',
89:  'mmd',
90:  'csv',
93:  'gif',
95:  'jpeg',
96:  'jpg',
97:  'png',
98:  'svg',
<shellId: 221 completed with exit code 0>
```

</details>


---

<sub>28m 26s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>28m 26s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>28m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md (lines 120-300)

<details>
<summary>142 lines</summary>

````
  command.
- **Linux:** checks the glibc version and that apt can resolve the package's
  dependencies, then installs hvir to `/opt/hvir` with the `/usr/bin/hvir` command. On
  hosts that restrict unprivileged user namespaces (such as Ubuntu 24.04), the package
  installs an AppArmor profile so Chromium's sandbox keeps working.

If a legacy `hvir-workbench` npm installation is present, the installer migrates away
from it and removes it.

To confirm that the installer came from an hvir release, verify it with the GitHub CLI
before running it:

```sh
gh release verify-asset install.sh --repo jarmak-personal/hvir
```

### Update and uninstall

To update, download and run the latest `install.sh` again. hvir does not update itself.

```sh
bash install.sh --uninstall           # remove hvir but keep your settings and data
bash install.sh --uninstall --purge   # also remove your hvir settings and cache
```

Uninstalling never touches your project directories.

### Install a package manually

Each [release](https://github.com/jarmak-personal/hvir/releases) also publishes the
packages and a `SHA256SUMS` file. After checking the digest, install the package with your
package manager:

```sh
sudo apt install ./hvir-<version>-linux-x64.deb   # or -linux-arm64.deb
```

On macOS, open `hvir-<version>-darwin-arm64.pkg`. The installer script performs extra
checks that a manual install skips, so prefer the script.

## Getting started

Open a project from your terminal:

```sh
hvir .                # the current directory
hvir ~/src/my-app     # any local directory
```

`hvir <directory>` registers the directory as a project, or selects it if it is already
registered, and opens it. Running `hvir` with no arguments, or starting it from your
application launcher, reopens your registered projects. On first launch it asks you for a
folder. Projects on SSH hosts are added from inside the app (see
[Remote projects over SSH](#remote-projects-over-ssh)).

The window has four areas:

- **Projects bar** (top): your projects, the **Workspaces** (Git worktrees) of the active
  project, **Sessions**, **Workbench health**, and **Settings**. The **+** button
  (**Register project**) adds a local or remote project.
- **Rail** (left): **Files** and **Git**.
- **Viewer** (center): tabs for files and web panes, with each file shown rendered, as
  source, or as a diff. **Split viewer right** opens a second viewer.
- **Terminal panel** (bottom): the workspace's terminals.
  <kbd>Mod</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> maximizes or restores it.

To start an agent, open the **New terminal** (**+**) menu in the terminal panel and pick a
harness. **Add a harness…** lists the agent CLIs that hvir finds on the project's host,
and **Configure harnesses…** opens the harness settings.

## Agent harnesses

A harness is the program that a terminal runs. hvir includes these providers:

| Harness            | Command        | hvir integration                                                                     |
| ------------------ | -------------- | ------------------------------------------------------------------------------------ |
| Shell              | your `$SHELL`  | Default; starts a login shell                                                        |
| Claude Code        | `claude`       | Exact resume and fork, context meter and usage, review insert, SSH image paste       |
| Codex              | `codex`        | Exact resume and fork, context meter and usage, review insert and send, SSH image paste |
| GitHub Copilot CLI | `copilot`      | Launch only                                                                          |
| Gemini CLI         | `gemini`       | Launch only                                                                          |
| Cursor CLI         | `cursor-agent` | Launch only                                                                          |
| Pi                 | `pi`           | Launch only                                                                          |
| Custom             | any command    | Launch only                                                                          |

"Launch only" harnesses start a fresh process when hvir restores them; hvir never guesses
which earlier session to continue.

hvir detects and launches agent CLIs through your login shell (`$SHELL -lic`), so
anything on the `PATH` set up by your shell startup files works, locally and on SSH hosts.
If a CLI is not detected, check that `command -v <cli>` works in a new login shell, choose
**Refresh availability** in the **New terminal** menu, or set an absolute executable path
in the harness profile.

Harness profiles are managed in **Settings → Harnesses**. A profile sets:

- the executable (the provider default, a command on `PATH`, or an absolute path on the
  host),
- extra arguments,
- environment variables (plain values, secret references resolved on the target host or
  forwarded from your local environment, or variables to unset),
- host path bindings, which let arguments refer to host-specific paths, such as
  `--add-dir {binding:monorepo}`, and
- scope: all projects, or one registered project.

## Remote projects over SSH

hvir connects to hosts defined in your `~/.ssh/config`. Every alias from a non-wildcard
`Host` entry appears next to **Local** when you register a project. Pick a host, then
choose or type a folder on it.

- hvir uses the `HostName`, `User`, `Port`, and `IdentityFile` settings of each alias.
  Other options, including `ProxyJump` and `ProxyCommand`, are not applied.
- Authentication tries your SSH agent (`SSH_AUTH_SOCK`), then public keys (the alias's
  `IdentityFile`, or the default `~/.ssh/id_*` keys), then keyboard-interactive and
  password authentication. hvir shows passphrase and password prompts in the app.
- On first connection hvir shows the host key's SHA-256 fingerprint for you to confirm,
  and it warns you if a trusted key changes. hvir keeps its own trust store and does not
  read or modify `~/.ssh/known_hosts`.
- Install `git` and your agent CLIs on the remote host, because terminals, Git, and
  harness detection run there.
- On Linux hosts, install `inotifywait` (the `inotify-tools` package) for efficient file
  watching. Without it, hvir falls back to polling.

## Settings and keyboard shortcuts

Open **Settings** from the projects bar. It has these sections:

- **Appearance:** app theme, terminal colors (a gallery of terminal color schemes),
  interface and monospace fonts, interface scale, and terminal text size.
- **Terminal:** cursor shape and blinking, font ligatures, the idle-after-output
  threshold for attention, which terminals to restore on app start, and message
  submission.
- **Git:** auto-fetch interval (off, or every 1, 5, 15, or 30 minutes).
- **Keybindings:** a JSON object that overrides default shortcuts.
- **Harnesses:** harness profiles (see [Agent harnesses](#agent-harnesses)).

**Message submission.** When you choose to send agent messages with
<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>Enter</kbd> (so <kbd>Enter</kbd> inserts a new line),
hvir asks for consent and then updates the <kbd>Enter</kbd>,
<kbd>Ctrl</kbd>+<kbd>Enter</kbd>, and <kbd>Shift</kbd>+<kbd>Enter</kbd> chat bindings in
Claude Code's `keybindings.json` (in `${CLAUDE_CONFIG_DIR:-~/.claude}`) on each host you
use. It saves the previous values in `.hvir-keybindings-state.json` in the same
directory, so turning the setting off restores them. Codex receives the setting as a
launch option, so restart open Codex terminals after you change it.

**Default shortcuts.** `Mod` is <kbd>Cmd</kbd> on macOS and <kbd>Ctrl</kbd> on Linux.

| Action                                     | Action id             | Default       |
| ------------------------------------------ | --------------------- | ------------- |
| Find a file by name                        | `findFile`            | `Mod+P`       |
| Find in the current file                   | `findInFile`          | `Mod+F`       |
| Find in the terminal                       | `findInTerminal`      | `Mod+Shift+F` |
| Go to line                                 | `goToLine`            | `Ctrl+G`      |
| Cycle the view mode (rendered/source/diff) | `cycleViewMode`       | `Mod+Shift+M` |
| Focus the terminal                         | `focusTerminal`       | `Mod+J`       |
| Maximize or restore the terminal panel     | `toggleTerminalFocus` | `Mod+Shift+J` |
| Focus the viewer                           | `focusViewer`         | `Mod+1`       |
| Focus the file tree                        | `focusTree`           | `Mod+0`       |
| Next workspace                             | `nextWorkspace`       | `Mod+Alt+]`   |
| Previous workspace                         | `previousWorkspace`   | `Mod+Alt+[`   |

To override shortcuts, enter a JSON object keyed by action id in **Settings →
Keybindings**. Bindings combine the modifiers `Mod`, `Ctrl`, `Meta`, `Alt`, and `Shift`
with a key:

```json
{
  "findFile": "Mod+Shift+P",
  "focusTerminal": "Ctrl+`"
}
```

## Where hvir keeps data

| Platform | Application data                             | Cache                               |
| -------- | -------------------------------------------- | ----------------------------------- |
| macOS    | `~/Library/Application Support/hvir`         | `~/Library/Caches/hvir`             |
| Linux    | `${XDG_CONFIG_HOME:-~/.config}/hvir`         | `${XDG_CACHE_HOME:-~/.cache}/hvir`  |

The application data directory contains:
````

</details>


---

<sub>28m 38s</sub>

### `bash`

**Check SSH config parsing rules**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -nE "Include|Match|wildcard|\*|\?|!|toLowerCase\(\) === 'host'|hostname|identityfile" src/main/project-host/ssh-config.ts | head -30

<details>
<summary>16 lines</summary>

```
5:  readonly hostname: string
14:    if (!('param' in line) || !('config' in line)) return []
16:    if (section.param.toLowerCase() !== 'host') return []
19:        ? section.value
21:    return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
26:      Array.isArray(value) ? value[0] : value
27:    const hostname = one(values['hostname']) ?? alias
28:    const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
29:    const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
30:    const rawIdentity = values['identityfile']
32:      Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
35:        .replace(/^~(?=\/|$)/, home)
37:        .replaceAll('%h', hostname)
42:      hostname,
44:      port: Number.isFinite(rawPort) ? rawPort : 22,
<shellId: 222 completed with exit code 0>
```

</details>


---

<sub>28m 41s</sub>

### `bash`

**View SSH config parser**

$ cd /private/var/tmp/ws/2002dadb/hvir && sed -n '1,60p' src/main/project-host/ssh-config.ts

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
<shellId: 223 completed with exit code 0>
```

</details>


---

<sub>28m 47s</sub>

### `bash`

**Check ssh-config Include handling**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "Include|readFile|require\('fs'\)|from 'fs'" node_modules/ssh-config/src/*.js node_modules/ssh-config/dist/*.js 2>/dev/null | head -10; ls node_modules/ssh-config

<details>
<summary>8 lines</summary>

```
node_modules/ssh-config/dist/ssh-config.js:19:const RE_SINGLE_LINE_DIRECTIVE = /^(Include|IdentityFile)$/i;
node_modules/ssh-config/dist/ssh-config.js:347:                // Add an extra newline if a single line directive like Include
dist
lib
LICENSE
package.json
Readme.md
<shellId: 224 completed with exit code 0>
```

</details>


---

<sub>28m 52s</sub>

### `bash`

**Confirm which SSH config file is read**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rnE "'\.ssh'|\.ssh/config|ssh_config|parseSshConfig\(" src/main --include=*.ts | grep -v smoke | head -8

```
src/main/project-host/ssh-config.ts:11:export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
src/main/project-host/project-host-catalog.ts:191:  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
src/main/project-host/project-host-catalog.ts:199:    return parseSshConfig(
src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
<shellId: 225 completed with exit code 0>
```


---

<sub>28m 54s</sub>

### Copilot

Confirmed: only `~/.ssh/config` is read and `Include` isn't followed. Updating the SSH section.

---

<sub>28m 58s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>28m 58s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md (lines 296-482)

<details>
<summary>146 lines</summary>

````
| -------- | -------------------------------------------- | ----------------------------------- |
| macOS    | `~/Library/Application Support/hvir`         | `~/Library/Caches/hvir`             |
| Linux    | `${XDG_CONFIG_HOME:-~/.config}/hvir`         | `${XDG_CACHE_HOME:-~/.cache}/hvir`  |

The application data directory contains:

| File                         | Contents                                                |
| ---------------------------- | ------------------------------------------------------- |
| `projects.json`              | Registered projects and their workspaces                |
| `terminal-sessions.json`     | Terminals to restore, and their conversation identities |
| `harness-profiles.json`      | Harness profiles                                        |
| `known-hosts.json`           | SSH host keys you have trusted                          |
| `document-review-drafts.json`| Document review drafts                                  |
| `runtime-diagnostics*.jsonl` | A bounded local diagnostics journal                     |

Settings, layout, and open tabs are kept in the app's local storage in the same directory.
hvir has no telemetry or auto-updater. Diagnostics stay on your machine unless you copy or
save a diagnostic report.

## Troubleshooting

- **An agent CLI is missing from the New terminal menu.** hvir looks for it with your
  login shell on the project's host. See [Agent harnesses](#agent-harnesses).
- **The SSH connection fails for a host that works in your terminal.** Check whether the
  host depends on `ProxyJump`, `ProxyCommand`, or other options that hvir does not apply.
- **The file tree is slow to notice remote changes.** Install `inotify-tools` on the
  remote Linux host.
- **Something went wrong in the app.** Open **Workbench health** in the projects bar and
  choose **Review diagnostic report**. Review the report, then copy or save it
  (`hvir-diagnostic-report.json`) to attach to a bug report.

## Development

### Prerequisites

- Node.js 24 or newer, and npm
- Git
- Python 3 and a C/C++ toolchain for native modules: the Xcode Command Line Tools on
  macOS, or `build-essential` and `python3` on Debian and Ubuntu
- Network access during installation. npm downloads Electron and hvir's ghostty-web
  fork from GitHub releases.

### Set up

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
```

`npm ci` runs `npm run install:runtime`, which downloads Electron, builds the
`@hvir/rename-noreplace` native addon (in `packages/rename-noreplace`), and rebuilds
`node-pty` for Electron. Run `npm run install:runtime` again if a native module reports an
ABI mismatch.

### Run

```sh
npm run dev                                   # start hvir with hot reload
HVIR_PROJECT_ROOT=/path/to/project npm run dev   # open a specific project
```

A development build shares its data directory with an installed hvir. To keep them
separate, pass Electron a different user data directory:

```sh
npm run dev -- -- --user-data-dir="$HOME/.hvir-dev"
```

`npm run dev` and `npm run build` first check that the installed ghostty-web runtime
matches the one hvir expects. If that check fails, run `npm ci` again.

### Test and check

| Command                       | Purpose                                                              |
| ----------------------------- | -------------------------------------------------------------------- |
| `npm test`                    | Run the Vitest suite (`npm test -- test/viewer-types.test.ts` runs one file) |
| `npm run test:watch`          | Run Vitest in watch mode                                             |
| `npm run lint`                | Run ESLint, including the architecture import rules                  |
| `npm run typecheck`           | Type-check the Node (main, preload, workers) and renderer projects   |
| `npm run format:check`        | Check formatting with Prettier (`npm run format` fixes it)           |
| `npm run check-seams`         | Check the architectural seams (see [Architecture](#architecture))    |
| `npm run architecture:report` | Report architecture hotspots and dependency rules (works offline)    |
| `npm run test:mutation`       | Run Stryker mutation tests for the Git parsers                       |
| `npm run verify`              | Run the full CI verification gate                                    |

`npm run verify` runs `check-seams`, `check-adrs`, `architecture:check`, `lint`,
`typecheck`, and the tests. `architecture:check` validates provenance against the GitHub
repository and needs an `HVIR_REPO_TOKEN`; without one, use `npm run architecture:report`.

### Smoke tests

Smoke tests build hvir and drive the real Electron app through scripted scenarios:

```sh
npm run smoke                                           # the full scenario set
npm run smoke:macos                                     # the set used on macOS
npm run smoke:scenario -- viewer-content git-workflow   # selected scenarios
xvfb-run -a npm run smoke                               # headless Linux
```

Set `HVIR_SMOKE_REPEAT` (1–100) to repeat the selected scenarios, and
`HVIR_SMOKE_ARTIFACT_DIR` to keep bounded failure evidence. `npm run smoke:capacity`
covers capacity, and `npm run gauntlet` runs verification, smoke, and capacity together
(set `HVIR_SKIP_CAPACITY=1` to skip capacity). The `smoke:linux:installed` and
`smoke:macos:installed` scripts install and remove real packages and refuse to run
without an opt-in environment variable, so run them only on disposable machines. The
`acceptance:ssh:*` scripts need a real SSH host and, on macOS, an Apple signing identity.

`npm run hooks:install` adds a `pre-push` hook that runs the type check and the smoke
tests for your platform. Use `git push --no-verify` to skip it.

### Build and package

| Command                       | Output                                        |
| ----------------------------- | --------------------------------------------- |
| `npm run build`               | Type-check and build the app into `out/`      |
| `npm run preview`             | Run the production build                      |
| `npm run build:dir`           | An unpacked app in `dist/`                    |
| `npm run pack:mac:arm64`      | A macOS arm64 `.pkg` in `dist/`               |
| `npm run pack:linux:x64`      | A Linux x64 `.deb` in `dist/`                 |
| `npm run pack:linux:arm64`    | A Linux arm64 `.deb` in `dist/`               |

`npm run pack:mac:arm64:signed` requires code signing. Release builds are produced by CI
(see [Releases](#releases)).

## Architecture

hvir is a TypeScript Electron app built with electron-vite.

| Path                        | Contents                                                              |
| --------------------------- | --------------------------------------------------------------------- |
| `src/main/`                 | Main process: projects, hosts, PTYs, harnesses, Git, web pane proxy   |
| `src/preload/`              | The preload bridge that exposes `window.hvir` to the renderer         |
| `src/renderer/`             | The React user interface                                              |
| `src/workers/`              | Utility processes, such as the Git worker                             |
| `src/shared/`               | Types and IPC contracts shared across processes                       |
| `packages/rename-noreplace/`| A Node-API addon for atomic, no-replace renames                       |
| `build/`                    | Packaging resources: icons, entitlements, package scripts, AppArmor   |
| `scripts/`                  | Build, smoke, release, and maintenance tooling                        |
| `test/`                     | Vitest tests                                                          |

The code is organized around a few seams, enforced by ESLint and
`npm run check-seams`:

- All file system, process, file watching, and PTY access goes through the `ProjectHost`
  interface. `src/main/project-host/local-host.ts` implements it for the local machine,
  and the SSH host modules (the only code that uses `ssh2`) implement it for remote
  hosts.
- Terminals are spawned only by the PTY supervisor (`src/main/pty/pty-supervisor.ts`).
- `ipcRenderer` is used only in `src/preload/`, and `ipcMain` only in
  `src/main/ipc/authority-router.ts`.
- Provider-specific harness code stays in `src/main/harness/`. Everything else treats
  harness providers as opaque catalog entries.
- Loopback network connections are made only by the web pane proxy.
- Git capabilities run commands through one shared command context.

## Releases

Releases are published from GitHub Actions:

1. A maintainer runs the **Release** workflow on `main` with a `patch`, `minor`, or
   `major` bump. The workflow opens a release pull request that changes only the version
   in `package.json` and `package-lock.json`.
2. Merging that pull request starts the release build. CI builds the Linux packages and
   installs, updates, launches, and removes them on Ubuntu 22.04, Ubuntu 24.04, and
   Debian 13. It also builds, signs, notarizes, and tests the macOS package.
3. CI publishes an immutable GitHub release with attestations. The release contains
   `install.sh`, the packages, `SHA256SUMS`, `release-manifest.json`, and
   `THIRD_PARTY_NOTICES.md`.

## Contributing

Report bugs in [GitHub issues](https://github.com/jarmak-personal/hvir/issues).
Conversations on new issues and pull requests are locked automatically, so include all the
context in the description. Before you open a pull request, run `npm run lint`,
`npm run typecheck`, `npm test`, and the smoke tests for your platform. CI runs
`npm run verify` and the Electron smoke tests on Linux, a reduced smoke set on macOS, and
CodeQL analysis.

## License

hvir is released under the [MIT License](LICENSE). It bundles third-party software,
including a fork of ghostty-web that contains a WebAssembly build of the Ghostty terminal
core. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for their notices.
````

</details>


---

<sub>29m 24s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>29m 24s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>29m 24s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>29m 24s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md

```
File /private/var/tmp/ws/2002dadb/hvir/README.md updated with changes.
```


---

<sub>29m 31s</sub>

### `bash`

**Preview prettier markdown formatting diff**

$ cd /private/var/tmp/ws/2002dadb/hvir && cat .prettierignore 2>/dev/null | head; cat .prettierrc* 2>/dev/null | head -20; cp README.md "$TMPDIR/README.check.md" && npx --no-install prettier --no-editorconfig --config .prettierrc* --parser markdown "$TMPDIR/README.check.md" > "$TMPDIR/README.pretty.md" 2>&1; diff "$TMPDIR/README.check.md" "$TMPDIR/README.pretty.md" | head -80

<details>
<summary>15 lines</summary>

```
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
<shellId: 226 completed with exit code 0>
```

</details>


---

<sub>29m 36s</sub>

### `bash`

**Inspect prettier output**

$ cd /private/var/tmp/ws/2002dadb/hvir && wc -c "$TMPDIR/README.check.md" "$TMPDIR/README.pretty.md"; head -5 "$TMPDIR/README.pretty.md"; ls .prettierrc*

<details>
<summary>9 lines</summary>

```
24859 /private/var/tmp/ws/2002dadb/home/tmp/README.check.md
   24859 /private/var/tmp/ws/2002dadb/home/tmp/README.pretty.md
   49718 total
<p align="center">
  <img src="build/icons-linux/256x256.png" width="96" height="96" alt="hvir icon">
</p>

<h1 align="center">hvir</h1>
.prettierrc.json
<shellId: 227 completed with exit code 0>
```

</details>


---

<sub>29m 44s</sub>

### `bash`

**Run prettier on README via stdin**

$ cd /private/var/tmp/ws/2002dadb/hvir && npx --no-install prettier --ignore-path=/dev/null --config .prettierrc.json --parser markdown < README.md > "$TMPDIR/README.pretty.md"; echo "exit $?"; diff README.md "$TMPDIR/README.pretty.md" | head -120

<details>
<summary>76 lines</summary>

```
exit 0
98,101c98,101
< | Platform               | Package | Notes                                              |
< | ---------------------- | ------- | -------------------------------------------------- |
< | macOS on Apple silicon | `.pkg`  | Signed with a Developer ID and notarized           |
< | Linux x64 and arm64    | `.deb`  | apt-based distributions with glibc 2.35 or newer   |
---
> | Platform               | Package | Notes                                            |
> | ---------------------- | ------- | ------------------------------------------------ |
> | macOS on Apple silicon | `.pkg`  | Signed with a Developer ID and notarized         |
> | Linux x64 and arm64    | `.deb`  | apt-based distributions with glibc 2.35 or newer |
194,197c194,197
< | Harness            | Command        | hvir integration                                                                     |
< | ------------------ | -------------- | ------------------------------------------------------------------------------------ |
< | Shell              | your `$SHELL`  | Default; starts a login shell                                                        |
< | Claude Code        | `claude`       | Exact resume and fork, context meter and usage, review insert, SSH image paste       |
---
> | Harness            | Command        | hvir integration                                                                        |
> | ------------------ | -------------- | --------------------------------------------------------------------------------------- |
> | Shell              | your `$SHELL`  | Default; starts a login shell                                                           |
> | Claude Code        | `claude`       | Exact resume and fork, context meter and usage, review insert, SSH image paste          |
199,203c199,203
< | GitHub Copilot CLI | `copilot`      | Launch only                                                                          |
< | Gemini CLI         | `gemini`       | Launch only                                                                          |
< | Cursor CLI         | `cursor-agent` | Launch only                                                                          |
< | Pi                 | `pi`           | Launch only                                                                          |
< | Custom             | any command    | Launch only                                                                          |
---
> | GitHub Copilot CLI | `copilot`      | Launch only                                                                             |
> | Gemini CLI         | `gemini`       | Launch only                                                                             |
> | Cursor CLI         | `cursor-agent` | Launch only                                                                             |
> | Pi                 | `pi`           | Launch only                                                                             |
> | Custom             | any command    | Launch only                                                                             |
417,424c417,424
< | Command                       | Output                                        |
< | ----------------------------- | --------------------------------------------- |
< | `npm run build`               | Type-check and build the app into `out/`      |
< | `npm run preview`             | Run the production build                      |
< | `npm run build:dir`           | An unpacked app in `dist/`                    |
< | `npm run pack:mac:arm64`      | A macOS arm64 `.pkg` in `dist/`               |
< | `npm run pack:linux:x64`      | A Linux x64 `.deb` in `dist/`                 |
< | `npm run pack:linux:arm64`    | A Linux arm64 `.deb` in `dist/`               |
---
> | Command                    | Output                                   |
> | -------------------------- | ---------------------------------------- |
> | `npm run build`            | Type-check and build the app into `out/` |
> | `npm run preview`          | Run the production build                 |
> | `npm run build:dir`        | An unpacked app in `dist/`               |
> | `npm run pack:mac:arm64`   | A macOS arm64 `.pkg` in `dist/`          |
> | `npm run pack:linux:x64`   | A Linux x64 `.deb` in `dist/`            |
> | `npm run pack:linux:arm64` | A Linux arm64 `.deb` in `dist/`          |
433,443c433,443
< | Path                        | Contents                                                              |
< | --------------------------- | --------------------------------------------------------------------- |
< | `src/main/`                 | Main process: projects, hosts, PTYs, harnesses, Git, web pane proxy   |
< | `src/preload/`              | The preload bridge that exposes `window.hvir` to the renderer         |
< | `src/renderer/`             | The React user interface                                              |
< | `src/workers/`              | Utility processes, such as the Git worker                             |
< | `src/shared/`               | Types and IPC contracts shared across processes                       |
< | `packages/rename-noreplace/`| A Node-API addon for atomic, no-replace renames                       |
< | `build/`                    | Packaging resources: icons, entitlements, package scripts, AppArmor   |
< | `scripts/`                  | Build, smoke, release, and maintenance tooling                        |
< | `test/`                     | Vitest tests                                                          |
---
> | Path                         | Contents                                                            |
> | ---------------------------- | ------------------------------------------------------------------- |
> | `src/main/`                  | Main process: projects, hosts, PTYs, harnesses, Git, web pane proxy |
> | `src/preload/`               | The preload bridge that exposes `window.hvir` to the renderer       |
> | `src/renderer/`              | The React user interface                                            |
> | `src/workers/`               | Utility processes, such as the Git worker                           |
> | `src/shared/`                | Types and IPC contracts shared across processes                     |
> | `packages/rename-noreplace/` | A Node-API addon for atomic, no-replace renames                     |
> | `build/`                     | Packaging resources: icons, entitlements, package scripts, AppArmor |
> | `scripts/`                   | Build, smoke, release, and maintenance tooling                      |
> | `test/`                      | Vitest tests                                                        |
<shellId: 228 completed with exit code 0>
```

</details>


---

<sub>29m 49s</sub>

### `bash`

**Apply table formatting and revalidate**

$ cd /private/var/tmp/ws/2002dadb/hvir && cp "$TMPDIR/README.pretty.md" README.md && rm -f "$TMPDIR/README.pretty.md" "$TMPDIR/README.check.md" && node "$TMPDIR/readme-check.mjs" | tail -3 && git status --short

```
anchors: contents, features, install, supported-platforms, install-with-the-installer-script, update-and-uninstall, install-a-package-manually, getting-started, agent-harnesses, remote-projects-over-ssh, settings-and-keyboard-shortcuts, where-hvir-keeps-data, troubleshooting, development, prerequisites, set-up, run, test-and-check, smoke-tests, build-and-package, architecture, releases, contributing, license
long prose lines: none
backticked name not a script: path:line:column
?? README.md
<shellId: 229 completed with exit code 0>
```


---

<sub>29m 55s</sub>

### `bash`

**Check README references in tests and ADR check**

$ cd /private/var/tmp/ws/2002dadb/hvir && grep -rlnE "README" test scripts eslint.config.mjs vitest.config.ts .github 2>/dev/null | head; node scripts/check-adrs.mjs 2>&1 | tail -3

<details>
<summary>11 lines</summary>

```
test/release-pr-integrity.test.ts
test/terminal-file-link.test.ts
test/git-ignore-refresh.test.ts
test/commit-file-tree.test.ts
test/document-review-delivery.test.ts
test/filename-search-policy.test.ts
test/viewer-types.test.ts
scripts/check-adrs.mjs
}

Node.js v26.5.0
<shellId: 230 completed with exit code 0>
```

</details>


---

<sub>29m 58s</sub>

### `bash`

**Inspect README usage in checks**

$ cd /private/var/tmp/ws/2002dadb/hvir && node scripts/check-adrs.mjs 2>&1 | grep -E "Error|ENOENT|path" | head -4; grep -nE "README" scripts/check-adrs.mjs test/release-pr-integrity.test.ts | head -10

<details>
<summary>6 lines</summary>

```
Error: ENOENT: no such file or directory, scandir '/private/var/tmp/ws/2002dadb/hvir/docs/adr'
  code: 'ENOENT',
  path: '/private/var/tmp/ws/2002dadb/hvir/docs/adr'
scripts/check-adrs.mjs:26:    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
test/release-pr-integrity.test.ts:235:      { changedFiles: ['package.json', 'README.md'] },
<shellId: 231 completed with exit code 0>
```

</details>


---

<sub>30m 4s</sub>

### `bash`

**Run tests that mention README**

$ cd /private/var/tmp/ws/2002dadb/hvir && npm test -- test/release-pr-integrity.test.ts test/terminal-file-link.test.ts test/git-ignore-refresh.test.ts test/commit-file-tree.test.ts test/document-review-delivery.test.ts test/filename-search-policy.test.ts test/viewer-types.test.ts 2>&1 | tail -15

<details>
<summary>13 lines</summary>

```
RUN  v5.0.0 /private/var/tmp/ws/2002dadb/hvir

 ✓ test/git-ignore-refresh.test.ts (2 tests) 2ms
 ✓ test/commit-file-tree.test.ts (5 tests) 4ms
 ✓ test/viewer-types.test.ts (11 tests) 5ms
 ✓ test/document-review-delivery.test.ts (4 tests) 9ms
 ✓ test/filename-search-policy.test.ts (5 tests) 12ms
 ✓ test/terminal-file-link.test.ts (19 tests) 8ms
 ✓ test/release-pr-integrity.test.ts (29 tests) 131ms

 Test Files  7 passed (7)
      Tests  75 passed (75)
   Start at  00:53:00
   Duration  306ms (transform 69%, tests 15%, import 9%, setup 4%, worker 2%)
<shellId: 232 completed with exit code 0>
```

</details>


---

<sub>30m 15s</sub>

### `bash`

**Run seams and format checks**

$ cd /private/var/tmp/ws/2002dadb/hvir && npm run --silent check-seams 2>&1 | tail -3; npm run --silent format:check 2>&1 | tail -3

<details>
<summary>6 lines</summary>

```
✓ Git worker proxy exposes only exact exec, read, and metadata operations

seam check passed
[warn] test/terminal-workspace-model.test.ts
[warn] test/viewer-workload-policy.test.ts
[warn] Code style issues found in 52 files. Run Prettier with --write to fix.
<shellId: 233 completed with exit code 0>
```

</details>


---

<sub>30m 26s</sub>

### `bash`

**Confirm README not in prettier warnings**

$ cd /private/var/tmp/ws/2002dadb/hvir && npm run --silent format:check 2>&1 | grep -ciE "readme"; git stash list | head -2; git status --short

```
0
?? README.md
<shellId: 234 completed with exit code 0>
```


---

<sub>30m 31s</sub>

### `view`

**view the file at /private/var/tmp/ws/2002dadb/hvir/README.md.**

/private/var/tmp/ws/2002dadb/hvir/README.md (lines 186-240)

<details>
<summary>45 lines</summary>

```
To start an agent, open the **New terminal** (**+**) menu in the terminal panel and pick a
harness. **Add a harness…** lists the agent CLIs that hvir finds on the project's host,
and **Configure harnesses…** opens the harness settings.

## Agent harnesses

A harness is the program that a terminal runs. hvir includes these providers:

| Harness            | Command        | hvir integration                                                                        |
| ------------------ | -------------- | --------------------------------------------------------------------------------------- |
| Shell              | your `$SHELL`  | Default; starts a login shell                                                           |
| Claude Code        | `claude`       | Exact resume and fork, context meter and usage, review insert, SSH image paste          |
| Codex              | `codex`        | Exact resume and fork, context meter and usage, review insert and send, SSH image paste |
| GitHub Copilot CLI | `copilot`      | Launch only                                                                             |
| Gemini CLI         | `gemini`       | Launch only                                                                             |
| Cursor CLI         | `cursor-agent` | Launch only                                                                             |
| Pi                 | `pi`           | Launch only                                                                             |
| Custom             | any command    | Launch only                                                                             |

"Launch only" harnesses start a fresh process when hvir restores them; hvir never guesses
which earlier session to continue.

hvir detects and launches agent CLIs through your login shell (`$SHELL -lic`), so
anything on the `PATH` set up by your shell startup files works, locally and on SSH hosts.
If a CLI is not detected, check that `command -v <cli>` works in a new login shell, choose
**Refresh availability** in the **New terminal** menu, or set an absolute executable path
in the harness profile.

Harness profiles are managed in **Settings → Harnesses**. A profile sets:

- the executable (the provider default, a command on `PATH`, or an absolute path on the
  host),
- extra arguments,
- environment variables (plain values, secret references resolved on the target host or
  forwarded from your local environment, or variables to unset),
- host path bindings, which let arguments refer to host-specific paths, such as
  `--add-dir {binding:monorepo}`, and
- scope: all projects, or one registered project.

## Remote projects over SSH

hvir connects to hosts defined in your `~/.ssh/config`. Every `Host` alias without
wildcards appears next to **Local** when you register a project. Pick a host, then choose
or type a folder on it.

- hvir uses the `HostName`, `User`, `Port`, and `IdentityFile` settings of each alias.
  Other options, including `ProxyJump` and `ProxyCommand`, are not applied, and files
  pulled in with `Include` are not read.
- Authentication tries your SSH agent (`SSH_AUTH_SOCK`), then public keys (the alias's
  `IdentityFile`, or the default `~/.ssh/id_*` keys), then keyboard-interactive and
  password authentication. hvir shows passphrase and password prompts in the app.
- On first connection hvir shows the host key's SHA-256 fingerprint for you to confirm,
  and it warns you if a trusted key changes. hvir keeps its own trust store and does not
  read or modify `~/.ssh/known_hosts`.
- Install `git` and your agent CLIs on the remote host, because terminals, Git, and
```

</details>


---

<sub>30m 37s</sub>

### `bash`

**Clean up temp files and confirm state**

$ rm -f "$TMPDIR/readme-check.mjs"; ls "$TMPDIR" | head; cd /private/var/tmp/ws/2002dadb/hvir && git status --short && wc -l README.md

<details>
<summary>7 lines</summary>

```
_udkmqGJC0EuAE8C1FmIY
1790138806319-copilot-tool-output-f43d92d297b24bf5a5d63521837e919e.txt
cUL0I5iuJMixKz2w957Ld
node-compile-cache
?? README.md
     487 README.md
<shellId: 235 completed with exit code 0>
```

</details>


---

<sub>30m 43s</sub>

### Copilot

I've written `README.md` at the repo root (about 490 lines). Every claim in it was checked against the source code, installer, packaging config and CI workflows.

It covers features, install, update and uninstall, getting started, the supported agent CLIs, SSH remotes, settings and shortcuts, where data is stored, troubleshooting, development, architecture, releases, contributing and license.

I checked that every `npm run` script it mentions exists, and that all links, anchors and the logo image resolve. The commands I could run locally work, and the tests that mention README files still pass. I couldn't try the installer or packaging commands here.

One problem, already there before this change: `docs/adr` is missing from this checkout, so `npm run check-adrs` fails, which also fails `npm run verify`. The README doesn't link to any of the missing docs.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
