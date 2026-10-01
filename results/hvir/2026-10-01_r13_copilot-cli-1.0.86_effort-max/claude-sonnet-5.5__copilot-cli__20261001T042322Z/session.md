# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `717898c8-fedd-4d23-9f01-d687a5035397`  
> - **Started:** 10/1/2026, 12:23:38 AM  
> - **Duration:** 22m 46s  
> - **Exported:** 10/1/2026, 12:46:24 AM  

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

I'll start by exploring the project structure to understand what it does.

---

<sub>2s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir.**

/private/var/tmp/ws/c9859428/hvir

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

<sub>2s</sub>

### `bash`

**Show git history, status and top-level listing**

$ cd /private/var/tmp/ws/c9859428/hvir && git --no-pager log --oneline -n 20 2>&1 | head -30; echo "---STATUS---"; git --no-pager status --short 2>&1 | head -20; echo "---LS---"; ls -la

<details>
<summary>33 lines</summary>

```
f182c43 Initial commit
---STATUS---
---LS---
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Oct  1 00:23 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:23 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:23 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:23 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:23 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Oct  1 00:23 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Oct  1 00:23 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Oct  1 00:23 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:23 build
-rw-r--r--@   1 air-jarmak  wheel     549 Oct  1 00:23 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Oct  1 00:23 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Oct  1 00:23 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Oct  1 00:23 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Oct  1 00:23 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Oct  1 00:23 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Oct  1 00:23 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Oct  1 00:23 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:23 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Oct  1 00:23 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Oct  1 00:23 src
-rw-r--r--@   1 air-jarmak  wheel     537 Oct  1 00:23 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Oct  1 00:23 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Oct  1 00:23 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Oct  1 00:23 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Oct  1 00:23 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Oct  1 00:23 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Oct  1 00:23 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Oct  1 00:23 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/package.json.**

/private/var/tmp/ws/c9859428/hvir/package.json

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

**view the file at /private/var/tmp/ws/c9859428/hvir/LICENSE.**

/private/var/tmp/ws/c9859428/hvir/LICENSE

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

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/c9859428/hvir/THIRD_PARTY_NOTICES.md

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

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/electron-builder.yml.**

/private/var/tmp/ws/c9859428/hvir/electron-builder.yml

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

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/electron-builder.ssh-acceptance.yml.**

/private/var/tmp/ws/c9859428/hvir/electron-builder.ssh-acceptance.yml

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

### Copilot

This is an Electron app. Let me dig into the source, docs, hooks, and CI configuration.

---

<sub>10s</sub>

### `bash`

**List src directory tree to depth 3**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== src (depth 3) ===" && find src -maxdepth 3 -not -path '*/node_modules/*' | sort | head -150

<details>
<summary>152 lines</summary>

```
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `bash`

**List .github, .githooks, build, packages**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== .github ===" && find .github -type f | sort && echo "=== .githooks ===" && find .githooks -type f | sort && echo "=== build ===" && find build -maxdepth 2 | sort | head -60 && echo "=== packages ===" && find packages -not -path '*/node_modules/*' -not -path '*/build/*' | sort | head -40

<details>
<summary>50 lines</summary>

```
=== .github ===
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
=== .githooks ===
.githooks/pre-push
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
packages/rename-noreplace/index.js
packages/rename-noreplace/LICENSE
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `bash`

**List scripts and test directories**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== scripts ===" && ls scripts | head -100 && echo "=== test (top) ===" && ls test | head -80 && echo "test dir count:" && ls test | wc -l

<details>
<summary>137 lines</summary>

```
=== scripts ===
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
=== test (top) ===
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
test dir count:
     381
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>13s</sub>

### Copilot

The project is substantial. Let me look at the rest of `src` at a coarser level and check for any existing documentation (ADRs, docs, CONTRIBUTING).

---

<sub>15s</sub>

### `bash`

**List each src subdirectory top level**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== src top ===" && ls src && for d in src/*/; do echo "--- $d ---"; ls "$d" | head -80; done

<details>
<summary>94 lines</summary>

```
=== src top ===
main
preload
renderer
shared
workers
--- src/main/ ---
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
--- src/preload/ ---
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts
--- src/renderer/ ---
index.html
src
--- src/shared/ ---
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
--- src/workers/ ---
echo-worker.ts
git-worker.ts
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>15s</sub>

### `bash`

**Find markdown docs, ADRs; show ignore/prettier configs**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== all md files (excluding node_modules) ===" && find . -name '*.md' -not -path './node_modules/*' -not -path './.git/*' | sort; echo; echo "=== docs/adr dirs ==="; find . -maxdepth 3 -type d \( -iname 'adr*' -o -iname 'docs' -o -iname 'doc' \) -not -path './node_modules/*' | head; echo "=== .gitignore ==="; cat .gitignore; echo "=== .prettierignore ==="; cat .prettierignore; echo "=== .prettierrc.json ==="; cat .prettierrc.json

<details>
<summary>39 lines</summary>

```
=== all md files (excluding node_modules) ===
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md

=== docs/adr dirs ===
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
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>19s</sub>

### Copilot

No docs/ADR directories exist in this snapshot (though `check-adrs` is referenced). Let me read the CI, hook, and config files to understand the workflows accurately.

---

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/c9859428/hvir/.github/workflows/ci.yml

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

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/.githooks/pre-push.**

/private/var/tmp/ws/c9859428/hvir/.githooks/pre-push

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

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/c9859428/hvir/electron.vite.config.ts

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

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/scripts/install-git-hooks.sh.**

/private/var/tmp/ws/c9859428/hvir/scripts/install-git-hooks.sh

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

<sub>21s</sub>

### Copilot

Now let me understand what the app actually does — the renderer structure and the main entry point.

---

<sub>22s</sub>

### `bash`

**List renderer source subdirectories**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== renderer/src top ===" && ls src/renderer/src && echo && for d in src/renderer/src/*/; do echo "--- $d ($(ls "$d" | wc -l) entries) ---"; ls "$d" | head -25; done

<details>
<summary>286 lines</summary>

```
=== renderer/src top ===
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

--- src/renderer/src/context-menu/ (       1 entries) ---
viewport-context-menu.ts
--- src/renderer/src/dashboards/ (       8 entries) ---
ElectronWebPaneSurface.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
WebPane.tsx
WebPaneStack.tsx
--- src/renderer/src/development/ (       4 entries) ---
development-performance-fixture.tsx
development-performance-pump.tsx
development-renderer-instrumentation.tsx
performance-measure-budget.ts
--- src/renderer/src/diagnostics/ (       2 entries) ---
DiagnosticReportDialog.tsx
owned-capture-masks.ts
--- src/renderer/src/document-review/ (      23 entries) ---
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
--- src/renderer/src/git/ (      19 entries) ---
commit-detail-client.ts
commit-file-tree.ts
commit-message.ts
git-capability.ts
git-graph-lane-metrics.ts
git-graph-layout.ts
git-rail-model.ts
git-sync-coordinator.ts
git-sync-status.ts
GitBranchControls.tsx
GitChangesView.tsx
GitGraphLanes.tsx
GitGraphView.tsx
GitHistoryView.tsx
GitPanel.tsx
use-git-commit-details.ts
use-git-rail-controller.ts
use-git-workspace.ts
virtual-range.ts
--- src/renderer/src/harness/ (       1 entries) ---
ProviderContextMeter.tsx
--- src/renderer/src/health/ (       3 entries) ---
use-diagnostic-evidence.ts
use-workbench-health.ts
WorkbenchHealthControl.tsx
--- src/renderer/src/layout/ (       3 entries) ---
PaneResizer.tsx
split-layout-policy.ts
workspace-layout-persistence.ts
--- src/renderer/src/path-copy/ (       3 entries) ---
path-copy.ts
PathCopyMenu.tsx
use-path-copy-menu.ts
--- src/renderer/src/scrollbars/ (       1 entries) ---
scrollbar-presentation.ts
--- src/renderer/src/sessions/ (      14 entries) ---
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
--- src/renderer/src/settings/ (      30 entries) ---
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
--- src/renderer/src/styles/ (      38 entries) ---
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
--- src/renderer/src/terminal/ (      69 entries) ---
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
--- src/renderer/src/tree/ (      27 entries) ---
directory-entry-sort.ts
DirectoryTree.tsx
file-action-destination.ts
file-action-menu.ts
file-manager-reveal.ts
file-name.ts
file-operation-feedback.ts
FileCreateOverlays.tsx
FileDeletionDialog.tsx
FileExternalMoveDialog.tsx
FilenameSearch.tsx
FileOrganizationDialog.tsx
FileTree.tsx
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
--- src/renderer/src/viewer/ (      59 entries) ---
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
highlight-worker.ts
highlight.worker.ts
json-protocol.ts
json.worker.ts
LargeFileView.tsx
markdown-client.ts
markdown-extensions.ts
markdown-renderer.ts
markdown-repository-images.ts
markdown.worker.ts
--- src/renderer/src/workbench/ (      15 entries) ---
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
--- src/renderer/src/workspaces/ (      16 entries) ---
connection-status.ts
ConnectionStatus.tsx
initial-host-connection.ts
MissingWorkspaceNotice.tsx
project-folder-picker-client.ts
project-session-events.ts
project-session-model.ts
project-session.ts
project-state-delivery.ts
project-watch-interests.ts
ProjectsBar.tsx
SessionDialog.tsx
SshPromptDialog.tsx
workspace-attention.ts
workspace-session-actions.ts
WorkspaceCatalogDialogs.tsx
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>22s</sub>

### `bash`

**List main-process subsystem directories**

$ cd /private/var/tmp/ws/c9859428/hvir && for d in src/main/pty src/main/sessions src/main/terminal src/main/viewer src/main/web-pane src/main/window src/main/smoke src/main/harness/providers src/main/ipc/features; do echo "--- $d ---"; ls "$d" | head -40; done

<details>
<summary>101 lines</summary>

```
--- src/main/pty ---
pty-contract.ts
pty-launch-admission.ts
pty-session-lifetime.ts
pty-session-observation.ts
pty-stream-attachment.ts
pty-supervisor.ts
--- src/main/sessions ---
sessions-observation-application.ts
sessions-observation-port.ts
sessions-open-resolution.ts
sessions-projection-identities.ts
sessions-projection-values.ts
sessions-telemetry-projection.ts
sessions-usage-observation-port.ts
sessions-usage-projection.ts
--- src/main/terminal ---
electron-clipboard-file-paste.ts
renderer-pty-lifecycle.ts
session-registry.ts
terminal-identity-publication.ts
terminal-launch-admission.ts
terminal-start-response.ts
terminal-workspace-move-coordinator.ts
--- src/main/viewer ---
document-read-authority.ts
--- src/main/web-pane ---
loopback-http-proxy.ts
web-pane-route-registry.ts
--- src/main/window ---
electron-renderer-document-lifecycle.ts
electron-renderer-recovery.ts
electron-window-manager.ts
renderer-recovery-monitor.ts
window-health-tracker.ts
window-policy.ts
--- src/main/smoke ---
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
--- src/main/harness/providers ---
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
--- src/main/ipc/features ---
app.ts
clipboard.ts
diagnostic-report.ts
document-review.ts
filesystem.ts
git.ts
harness.ts
image-paste.ts
preview.ts
project.ts
sessions.ts
terminal-file-paste.ts
terminal.ts
web-pane.ts
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>28s</sub>

### Copilot

Let me read the key entry points and harness providers to describe the product accurately.

---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/src/main/index.ts.**

/private/var/tmp/ws/c9859428/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/c9859428/hvir/src/main/harness/bundled-harness-providers.ts

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/c9859428/hvir/src/shared/harness-provider.ts

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

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/src/main/index.ts.**

/private/var/tmp/ws/c9859428/hvir/src/main/index.ts (lines 1-140)

<details>
<summary>140 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `bash`

**Read the first part of each harness provider**

$ cd /private/var/tmp/ws/c9859428/hvir/src/main/harness/providers && for f in claude-code codex cursor gemini github-copilot pi shell; do echo "=============== $f.ts ($(wc -l < $f.ts) lines) ==============="; sed -n '1,70p' $f.ts; done 2>&1 | head -400

<details>
<summary>377 lines</summary>

```
=============== claude-code.ts (     108 lines) ===============
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
=============== codex.ts (     190 lines) ===============
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
=============== cursor.ts (      50 lines) ===============
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
=============== gemini.ts (      56 lines) ===============
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
=============== github-copilot.ts (      54 lines) ===============
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
=============== pi.ts (      53 lines) ===============
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
=============== shell.ts (      65 lines) ===============
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
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>34s</sub>

### Copilot

Let me confirm the remaining details: the custom-command provider, Codex launch binary, and the CLI helper (`hvir-command`).

---

<sub>35s</sub>

### `bash`

**Read custom provider, launch files, hvir-command**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '60,110p' src/main/harness/providers/shell.ts; echo ======CODEX launch======; grep -n "file:" src/main/harness/providers/codex.ts src/main/harness/providers/claude-code.ts; echo ======hvir-command======; cat build/native/hvir-command

<details>
<summary>57 lines</summary>

```
supportsResume: false,
  sessionIdentity: 'none',
  probe: staticProbe('none', false, 'none'),
  launch: () => ({ file: 'custom', args: [] }),
  resume: () => ({ file: 'custom', args: [] }),
}
======CODEX launch======
src/main/harness/providers/codex.ts:52:  profile: {
src/main/harness/providers/codex.ts:54:    defaultProfile: {
src/main/harness/providers/codex.ts:95:      file: 'codex',
src/main/harness/providers/codex.ts:103:      file: 'codex',
src/main/harness/providers/codex.ts:118:      file: 'codex',
src/main/harness/providers/codex.ts:167:  _profile: HarnessDocumentReviewInsertLaunch['profile'],
src/main/harness/providers/claude-code.ts:38:  profile: {
src/main/harness/providers/claude-code.ts:40:    defaultProfile: {
src/main/harness/providers/claude-code.ts:69:      file: 'claude',
src/main/harness/providers/claude-code.ts:77:      file: 'claude',
src/main/harness/providers/claude-code.ts:87:      file: 'claude',
======hvir-command======
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
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>35s</sub>

### `bash`

**Read terminal-runtime check and seams check scripts**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== check-terminal-runtime ===" && cat scripts/check-terminal-runtime.mts && echo && echo "=== check-seams.sh ===" && cat scripts/check-seams.sh

<details>
<summary>229 lines</summary>

```
=== check-terminal-runtime ===
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
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>40s</sub>

### Copilot

`check-seams.sh` references an `AGENTS.md` that doesn't exist in this snapshot — I need to be careful not to link to missing docs. Let me verify, and read the ADR check and other scripts.

---

<sub>40s</sub>

### `bash`

**Verify absence of AGENTS.md/docs; read check-adrs**

$ cd /private/var/tmp/ws/c9859428/hvir && ls -la | grep -iE "agents|claude|contributing|code_of_conduct|security|changelog|docs" ; echo "(none above means those files are absent)"; git ls-files | grep -iE "(^|/)(AGENTS|CLAUDE|CONTRIBUTING|SECURITY|CHANGELOG|CODE_OF_CONDUCT|README)" ; echo "--- ls-files for docs/ ---"; git ls-files | grep -E "^docs/" | head; echo "--- check-adrs.mjs ---"; cat scripts/check-adrs.mjs

<details>
<summary>175 lines</summary>

```
(none above means those files are absent)
src/main/harness/claude-context-telemetry.ts
src/main/harness/claude-keybindings.ts
src/main/harness/claude-session-artifact.ts
src/main/harness/claude-session-recovery.ts
src/main/harness/providers/claude-code.ts
test/claude-context-telemetry.test.ts
test/claude-keybindings.test.ts
test/claude-session-artifact.test.ts
test/claude-session-recovery.test.ts
--- ls-files for docs/ ---
--- check-adrs.mjs ---
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
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>40s</sub>

### `bash`

**Read the ADR lifecycle script head**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' scripts/adr-lifecycle.mts

<details>
<summary>79 lines</summary>

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
<shellId: 12 completed with exit code 0>
```

</details>


---

<sub>48s</sub>

### `bash`

**Check Node version and run check-adrs**

$ cd /private/var/tmp/ws/c9859428/hvir && node --version && npm --version && echo "--- check-adrs ---" && (npm run check-adrs 2>&1 | tail -15); echo "exit: $?"

<details>
<summary>18 lines</summary>

```
v26.5.0
11.17.0
--- check-adrs ---
                         ^

Error: ENOENT: no such file or directory, scandir '/private/var/tmp/ws/c9859428/hvir/docs/adr'
    at readdirSync (node:fs:1884:26)
    at file:///private/var/tmp/ws/c9859428/hvir/scripts/check-adrs.mjs:20:26
    at ModuleJob.run (node:internal/modules/esm/module_job:569:25)
    at async node:internal/modules/esm/loader:650:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/c9859428/hvir/docs/adr'
}

Node.js v26.5.0
exit: 0
<shellId: 13 completed with exit code 0>
```

</details>


---

<sub>48s</sub>

### `bash`

**Run the seam check script**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "--- check-seams ---" && (npm run check-seams 2>&1 | tail -25)

<details>
<summary>18 lines</summary>

```
--- check-seams ---

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
<shellId: 14 completed with exit code 0>
```

</details>


---

<sub>53s</sub>

### Copilot

Confirmed. Now let me kick off the other validation commands in the background (typecheck, lint, tests) while I keep reading, so I only document commands that actually work.

---

<sub>55s</sub>

### `bash`

**Run typecheck and capture result**

$ cd /private/var/tmp/ws/c9859428/hvir && (time npm run typecheck) > "$TMPDIR/hvir-typecheck.log" 2>&1; echo "typecheck exit: $?" >> "$TMPDIR/hvir-typecheck.log"; tail -15 "$TMPDIR/hvir-typecheck.log"

```
<command started in background with shellId: typecheck>
```


---

<sub>55s</sub>

### `bash`

**Run eslint and capture result**

$ cd /private/var/tmp/ws/c9859428/hvir && (time npm run lint) > "$TMPDIR/hvir-lint.log" 2>&1; echo "lint exit: $?" >> "$TMPDIR/hvir-lint.log"; tail -15 "$TMPDIR/hvir-lint.log"

```
<command started in background with shellId: lint>
```


---

<sub>55s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/vitest.config.ts.**

/private/var/tmp/ws/c9859428/hvir/vitest.config.ts

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

<sub>55s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/stryker.config.json.**

/private/var/tmp/ws/c9859428/hvir/stryker.config.json

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

<sub>58s</sub>

### Copilot

Now let me learn the user-facing features in more depth — keybindings, settings, SSH hosts, document review, and the Sessions view.

---

<sub>59s</sub>

### `bash`

**Read the shared keybindings definitions**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l src/shared/keybindings.ts && sed -n '1,200p' src/shared/keybindings.ts

<details>
<summary>131 lines</summary>

```
139 src/shared/keybindings.ts
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
<shellId: 15 completed with exit code 0>
```

</details>


---

<sub>59s</sub>

### `bash`

**List settings sections, terminal and viewer files**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/renderer/src/settings/sections && echo "---" && ls src/renderer/src/terminal | sed -n '25,80p' && echo "--- viewer ---" && ls src/renderer/src/viewer | sed -n '25,70p'

<details>
<summary>88 lines</summary>

```
AppearanceSettings.tsx
GitSettings.tsx
KeybindingsSettings.tsx
TerminalSettings.tsx
TypographyFontField.tsx
---
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
--- viewer ---
markdown.worker.ts
MarkdownFragment.tsx
render-protocol.ts
rendered-link-handler.ts
rendered-position.ts
RenderedView.tsx
RepositoryImageView.tsx
retained-viewer-workspace-cache.ts
shiki-grammar-registry.ts
shiki-language-catalog.ts
shiki-language-names.ts
source-blame-gutter.ts
source-coordinate.ts
source-highlighting.ts
SourceView.tsx
structured-data.ts
tab-state.ts
TabStrip.tsx
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
<shellId: 16 completed with exit code 0>
```

</details>


---

<sub>1m 2s</sub>

### Copilot

Let me read several shared type files — they're a compact way to understand viewer modes, document review, sessions, web panes, and workspaces.

---

<sub>1m 3s</sub>

### `bash`

**Read viewer-types**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== viewer-types.ts ===" && sed -n '1,120p' src/shared/viewer-types.ts

<details>
<summary>90 lines</summary>

```
=== viewer-types.ts ===
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
<shellId: 17 completed with exit code 0>
```

</details>


---

<sub>1m 3s</sub>

### `bash`

**Read web-pane and sessions-projection types**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== web-pane.ts ===" && sed -n '1,80p' src/shared/web-pane.ts && echo && echo "=== sessions-projection.ts ===" && sed -n '1,100p' src/shared/sessions-projection.ts

<details>
<summary>150 lines</summary>

```
=== web-pane.ts ===
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

=== sessions-projection.ts ===
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
<shellId: 18 completed with exit code 0>
```

</details>


---

<sub>1m 6s</sub>

### Copilot

Let me check `App.tsx` for the overall UI composition and the document-review shared types.

---

<sub>1m 6s</sub>

### `bash`

**Scan App.tsx imports and top-level components**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l src/renderer/src/App.tsx && grep -nE "^import|<[A-Z][A-Za-z]+" src/renderer/src/App.tsx | head -120

<details>
<summary>61 lines</summary>

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
47:  const rootRef = useRef<HostPath | undefined>(undefined)
54:  const [gitChanges, setGitChanges] = useState<GitChanges>()
276:        ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
311:      <TabStrip
343:          <GitGraphView
354:        <WebPaneStack
372:          <MissingWorkspaceNotice root={root} />
374:          <FileViewer
403:        <ProjectsBar
469:            <FileTree
491:              <GitPanel
516:        <PaneResizer
533:              workbenchRef.current?.querySelector<HTMLElement>('.tree-panel')
570:                <PaneResizer
580:                    const current = viewerGroupsRef.current?.querySelector<HTMLElement>(
594:        <PaneResizer
616:              workbenchRef.current?.querySelector<HTMLElement>('.terminal-panel')
620:          action={<TerminalLayoutControls mode={terminalMode} onMode={setTerminalMode} />}
622:        <TerminalWorkspaceCollection
642:      <SessionsApplicationDestination
649:        <SessionDialog
663:        <SettingsDialog
678:        <SshPromptDialog
<shellId: 19 completed with exit code 0>
```

</details>


---

<sub>1m 6s</sub>

### `bash`

**Read the document review shared types**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l src/shared/document-review.ts && sed -n '1,120p' src/shared/document-review.ts

<details>
<summary>108 lines</summary>

```
258 src/shared/document-review.ts
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
<shellId: 20 completed with exit code 0>
```

</details>


---

<sub>1m 10s</sub>

### Copilot

Let me check the document-review delivery modes and the git feature set (worktrees, branches, graph) so I describe them correctly.

---

<sub>1m 10s</sub>

### `bash`

**Find document review delivery modes**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '120,258p' src/shared/document-review.ts | grep -nE "Delivery|delivery|insert|send|copy|Copy|Insert" | head -30; echo "--- DocumentReviewDeliveryPanel ---"; grep -nE "Insert|Send|Copy|button|aria-label|title=" src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx | head -40

<details>
<summary>44 lines</summary>

```
73:export type DocumentReviewDeliverySelection =
77:export interface DocumentReviewDeliveryPayload {
78:  /** Exact LF-normalized human-readable body used by Preview, Copy, and Insert. */
84:export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'
86:export interface DocumentReviewDeliveryDestination {
93:  readonly capability: DocumentReviewDeliveryCapability
96:export interface DocumentReviewDeliveryScopeRequest {
101:export interface DocumentReviewPreviewRequest extends DocumentReviewDeliveryScopeRequest {
102:  readonly selection: DocumentReviewDeliverySelection
109:export interface PreparedDocumentReviewDelivery {
111:  readonly destination: DocumentReviewDeliveryDestination
112:  readonly payload: DocumentReviewDeliveryPayload
115:export interface DocumentReviewInsertRequest {
119:export interface DocumentReviewInsertResult {
120:  readonly outcome: 'inserted'
134:      /** The prepared terminal authority was consumed to prevent a duplicate send. */
135:      readonly outcome: 'send-authority-consumed'
--- DocumentReviewDeliveryPanel ---
13:    <section className="document-review-delivery" aria-label="Review handoff preview">
16:        <button type="button" onClick={delivery.close}>
18:        </button>
23:          aria-label="Review handoff destination"
33:                ? 'Send now supported'
35:                  ? 'Insert supported'
36:                  : 'Copy only'}
79:            aria-label="Exact review delivery preview"
87:            <button type="button" disabled={delivery.loading} onClick={delivery.copy}>
88:              {delivery.copied ? 'Copied' : 'Copy review'}
89:            </button>
90:            <button
91:              type="button"
98:              title={
100:                  ? 'Insert one atomic bracketed paste without submitting'
102:                    ? 'This provider is Copy-only'
103:                    : 'Choose an Insert-supported terminal'
107:              {delivery.inserted ? 'Inserted' : 'Insert review'}
108:            </button>
109:            <button
110:              type="button"
117:              title={
119:                  ? `Send this exact preview now to ${delivery.prepared.destination.title}`
124:              {delivery.sent ? 'Sent' : 'Send review now'}
125:            </button>
<shellId: 21 completed with exit code 0>
```

</details>


---

<sub>1m 10s</sub>

### `bash`

**Read the shared git types**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,140p' src/shared/git-types.ts

<details>
<summary>123 lines</summary>

```
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
<shellId: 22 completed with exit code 0>
```

</details>


---

<sub>1m 10s</sub>

### Notification

Shell "Run typecheck and capture result" completed

---

<sub>1m 17s</sub>

### `read_bash`

**Waiting up to 5 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "shellId": "typecheck",
  "delay": 5
}
```

</details>

<details>
<summary>10 lines</summary>

```
> npm run typecheck:node && npm run typecheck:web


> hvir@0.2.3 typecheck:node
> tsc --noEmit -p tsconfig.node.json


> hvir@0.2.3 typecheck:web
> tsc --noEmit -p tsconfig.web.json


real	0m13.950s
user	0m19.651s
sys	0m1.942s
typecheck exit: 0
<shellId: typecheck completed with exit code 0>
```

</details>


---

<sub>1m 17s</sub>

### `read_bash`

**Waiting up to 5 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "shellId": "lint",
  "delay": 5
}
```

</details>

```
<command with shellId: lint is still running after 5 seconds. The command is still running but hasn't produced output yet. Use read_bash to continue waiting, or stop_bash to stop it.>
```


---

<sub>1m 20s</sub>

### Copilot

Typecheck passes. While lint finishes, let me look at the release/install flow (pkg scripts, deb scripts, native installer) to document installation accurately.

---

<sub>1m 21s</sub>

### `bash`

**Read package install/uninstall scripts**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "=== pkg postinstall ===" && cat build/pkg-scripts/postinstall && echo && echo "=== pkg preinstall ===" && cat build/pkg-scripts/preinstall && echo && echo "=== linux after-install ===" && cat build/linux/after-install.sh && echo && echo "=== linux after-remove ===" && cat build/linux/after-remove.sh

<details>
<summary>270 lines</summary>

```
=== pkg postinstall ===
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

=== pkg preinstall ===
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

=== linux after-install ===
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

=== linux after-remove ===
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
<shellId: 23 completed with exit code 0>
```

</details>


---

<sub>1m 21s</sub>

### `bash`

**Read native installer template head**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l scripts/native-installer.template.sh && sed -n '1,120p' scripts/native-installer.template.sh

<details>
<summary>114 lines</summary>

```
659 scripts/native-installer.template.sh
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
<shellId: 24 completed with exit code 0>
```

</details>


---

<sub>1m 27s</sub>

### Copilot

Let me see how the installer is published (release URL/asset names) so install instructions are accurate, and read the rest of the installer's user-facing behavior.

---

<sub>1m 27s</sub>

### `bash`

**Read the middle of the native installer template**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '120,330p' scripts/native-installer.template.sh

<details>
<summary>199 lines</summary>

```
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
<shellId: 25 completed with exit code 0>
```

</details>


---

<sub>1m 27s</sub>

### `bash`

**Read render-native-installer script**

$ cd /private/var/tmp/ws/c9859428/hvir && cat scripts/render-native-installer.mjs | head -150

<details>
<summary>141 lines</summary>

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
<shellId: 26 completed with exit code 0>
```

</details>


---

<sub>1m 30s</sub>

### Copilot

Let me read the rest of the installer (uninstall/purge — shows where user state lives) and the release workflow (installer asset name).

---

<sub>1m 31s</sub>

### `bash`

**Read the rest of the installer template**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '330,659p' scripts/native-installer.template.sh

<details>
<summary>312 lines</summary>

```
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
<shellId: 27 completed with exit code 0>
```

</details>


---

<sub>1m 31s</sub>

### `bash`

**Search release workflow for installer asset naming**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "install\.sh|render-native-installer|gh release|releases/download|github.repository|name: " .github/workflows/release.yml | head -80

<details>
<summary>73 lines</summary>

```
1:name: Release
29:    name: Prepare ${{ inputs.bump }} release
43:      - name: Require the default branch
52:      - name: Check out release history
59:      - name: Select trusted release source
82:      - name: Set up Node.js
88:      - name: Select release version
120:            if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
121:              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
131:          elif gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
146:      - name: Require exact-source coherent CI evidence
155:      - name: Prepare pull request or native release source
178:    name: Build and accept Linux package (${{ matrix.name }})
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
501:      - name: Create or repair a private draft
527:          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
528:            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
534:            gh release create "$TAG" \
542:      - name: Upload and validate the complete draft asset set
548:          gh release upload "$TAG" dist/release/* \
551:          actual=$(gh release view "$TAG" \
562:            install.sh \
571:      - name: Publish the complete immutable release
576:          gh release edit "$TAG" \
581:      - name: Verify published release attestation and downloaded assets
588:            if gh release verify "$TAG" --repo "$GITHUB_REPOSITORY"; then
602:          gh release download "$TAG" \
610:            gh release verify-asset "$TAG" "$asset" --repo "$GITHUB_REPOSITORY"
<shellId: 28 completed with exit code 0>
```

</details>


---

<sub>1m 34s</sub>

### Copilot

The installer is published as `install.sh` on each GitHub Release. Let me determine the GitHub repository slug (for accurate release links), and check the lint result.

---

<sub>1m 40s</sub>

### `bash`

**Find the GitHub repository slug**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "--- git remotes ---"; git remote -v; echo "--- jarmak-personal references (excluding node_modules, package-lock) ---"; grep -rnI "jarmak-personal" --exclude-dir=node_modules --exclude-dir=.git --exclude=package-lock.json . | grep -v "^./test/" | head -30; echo "--- 'github.com/' refs in scripts/workflows/package ---"; grep -rnIE "github\.com/[A-Za-z0-9_.-]+/hvir" --exclude-dir=node_modules --exclude-dir=.git --exclude=package-lock.json . | head -20

<details>
<summary>46 lines</summary>

```
--- git remotes ---
--- jarmak-personal references (excluding node_modules, package-lock) ---
./THIRD_PARTY_NOTICES.md:44:[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
./package.json:78:    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
./scripts/run-linux-package-smoke.sh:168:    --repository jarmak-personal/hvir \
./scripts/run-macos-package-smoke.sh:214:    --repository jarmak-personal/hvir \
./scripts/render-native-installer.mjs:155:    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
./scripts/assemble-native-release.mjs:212:    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
./scripts/architecture-github.mts:109:      'https://github.com/jarmak-personal/hvir.git',
./scripts/architecture-github.mts:110:      'git@github.com:jarmak-personal/hvir.git',
./scripts/architecture-github.mts:111:      'https://github.com/jarmak-personal/hvir',
./scripts/ghostty-web-update/policy.mts:6:const SOURCE_REPOSITORY = 'https://github.com/jarmak-personal/ghostty-web.git'
./scripts/ghostty-web-update/policy.mts:9:  'https://github.com/jarmak-personal/ghostty-web/releases/download/'
./scripts/ghostty-web-update/github-release-source.mts:19:const SOURCE_REPOSITORY = 'jarmak-personal/ghostty-web'
./scripts/ghostty-web-update/repository-candidate.mts:289:    /(?<=\[ghostty-web compatibility fork\]\(https:\/\/github\.com\/jarmak-personal\/ghostty-web\/releases\/tag\/)hvir-v[^)]+(?=\)\.)/g
./scripts/ghostty-web-update/repository-candidate.mts:346:    /(?<=\[ghostty-web compatibility fork\]\(https:\/\/github\.com\/jarmak-personal\/ghostty-web\/releases\/tag\/)hvir-v[^)]+(?=\)\.)/g,
./scripts/project-management/planning-cli.ts:27:  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
./scripts/project-management/planning-cli.ts:28:  HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)
./scripts/project-management/canonical-project-config.ts:21:  repository: 'jarmak-personal/hvir',
./scripts/project-management/canonical-project-config.ts:22:  owner: 'jarmak-personal',
./scripts/project-management/audit-canonical-project.ts:12:  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
./scripts/project-management/audit-canonical-project.ts:13:  HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)
./scripts/project-management/audit-canonical-project.ts:25:    process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
./scripts/project-management/audit-canonical-project.ts:28:    owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',
./scripts/project-management/read-planning-record.ts:22:    process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
./scripts/project-management/read-planning-record.ts:36:    owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',
./scripts/project-management/sync-pull-request-planning.ts:26:    process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
./scripts/project-management/sync-pull-request-planning.ts:46:    owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',
./scripts/project-management/read-contributor-status.ts:32:  const repository = process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir'
./scripts/project-management/read-contributor-status.ts:43:        owner: process.env.HVIR_PROJECT_OWNER ?? 'jarmak-personal',
./scripts/project-management/issue-start-cli.ts:27:  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
./scripts/project-management/issue-start-cli.ts:28:  HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)
--- 'github.com/' refs in scripts/workflows/package ---
./test/native-installer.test.ts:44:      'https://github.com/jarmak-personal/hvir/releases/download/v1.2.3',
./test/native-installer.test.ts:48:      "readonly HVIR_RELEASE_BASE_URL='https://github.com/jarmak-personal/hvir/releases/download/v1.2.3'",
./test/ghostty-web-update-policy.test.ts:185:      runUrl: 'https://github.com/jarmak-personal/hvir/actions/runs/123',
./test/ghostty-web-update-coordinator.test.ts:113:      url: 'https://github.com/jarmak-personal/hvir/pull/52',
./test/ghostty-web-update-delivery.test.ts:33:          html_url: 'https://github.com/jarmak-personal/hvir/pull/41',
./test/ghostty-web-update-delivery.test.ts:69:      runUrl: 'https://github.com/jarmak-personal/hvir/actions/runs/123',
./test/ghostty-web-update-delivery.test.ts:78:      url: 'https://github.com/jarmak-personal/hvir/pull/41',
./test/ghostty-web-update-delivery.test.ts:118:      runUrl: 'https://github.com/jarmak-personal/hvir/actions/runs/123',
./test/ghostty-web-update-delivery.test.ts:134:      runUrl: 'https://github.com/jarmak-personal/hvir/actions/runs/122',
./test/architecture-github.test.ts:16:  r.git('remote', 'add', 'origin', 'https://github.com/jarmak-personal/hvir.git')
./scripts/architecture-github.mts:109:      'https://github.com/jarmak-personal/hvir.git',
./scripts/architecture-github.mts:111:      'https://github.com/jarmak-personal/hvir',
<shellId: 29 completed with exit code 0>
```

</details>


---

<sub>1m 40s</sub>

### `read_bash`

**Waiting up to 20 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "delay": 20,
  "shellId": "lint"
}
```

</details>

<details>
<summary>7 lines</summary>

```
> hvir@0.2.3 lint
> eslint .


real	0m45.632s
user	0m56.920s
sys	0m16.402s
lint exit: 0
<shellId: lint completed with exit code 0>
```

</details>


---

<sub>1m 47s</sub>

### Copilot

Lint passes, and the GitHub slug is `jarmak-personal/hvir`. Importantly, I should check whether any tests or tooling reference a README (so my file doesn't break a policy check).

---

<sub>1m 47s</sub>

### `grep`

**README**

"README" in !{node_modules,.git}/**

<details>
<summary>28 matches</summary>

```
[grep content: 23 matches across 10 file(s) under /private/var/tmp/ws/c9859428/hvir]
build/linux/hvir.apparmor:7:   # Site-specific additions and overrides. See local/README for details.
scripts/check-adrs.mjs:26:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
test/viewer-types.test.ts:7:     ['README.md', 'markdown'],

test/filename-search-policy.test.ts (5 match(es)):
  10:         file('src/my-README.md'),
  12:         file('README.md'),
  19:       '/workspace/README.md',
  20:       '/workspace/src/my-README.md',
  26:       [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],
test/release-pr-integrity.test.ts:235:       { changedFiles: ['package.json', 'README.md'] },

test/terminal-file-link.test.ts (6 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',
test/document-review-delivery.test.ts:70:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

test/commit-file-tree.test.ts (4 match(es)):
  15:       path: localPath('/project/README.md'),
  37:       { kind: 'file', name: 'README.md', depth: 0 },
  44:       { kind: 'file', name: 'README.md', depth: 0 },
  62:     expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')

test/git-ignore-refresh.test.ts (2 match(es)):
  14:           { name: 'README.md', type: 'file' },
  18:           { name: 'README.md', type: 'file' },
src/main/smoke/sessions-visual.ts:173:           content: 'Synthetic workspace\\A\\A README.md\\A src/\\A docs/';
```

</details>


---

<sub>1m 47s</sub>

### `bash`

**Confirm install.sh is in release assets**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '536,580p' .github/workflows/release.yml

<details>
<summary>43 lines</summary>

```
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
<shellId: 30 completed with exit code 0>
```

</details>


---

<sub>1m 55s</sub>

### `bash`

**Check release PR integrity policy for README**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '215,260p' test/release-pr-integrity.test.ts; echo "--- version-only allowed files in validator ---"; grep -nE "package\.json|package-lock|allowed|changedFiles" scripts/validate-release-pr.mts | head -20

<details>
<summary>58 lines</summary>

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
--- version-only allowed files in validator ---
14:export const RELEASE_VERSION_FILES = ['package-lock.json', 'package.json'] as const
36:  changedFiles: readonly string[]
162:  const changedFiles = [...evidence.changedFiles].sort()
163:  if (!isDeepStrictEqual(changedFiles, [...RELEASE_VERSION_FILES])) {
367:    loadFile('package.json', baseSha),
368:    loadFile('package.json', headSha),
369:    loadFile('package-lock.json', baseSha),
370:    loadFile('package-lock.json', headSha),
371:    loadFile('package.json', sourceSha),
372:    loadFile('package-lock.json', sourceSha),
394:    changedFiles: files.map((file) => githubEvidence.requiredString(file.filename)),
<shellId: 31 completed with exit code 0>
```

</details>


---

<sub>1m 55s</sub>

### `bash`

**Read gauntlet and run-smoke scripts**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' scripts/phase8-gauntlet.sh; echo "-----run-smoke.sh-----"; sed -n '1,60p' scripts/run-smoke.sh

<details>
<summary>63 lines</summary>

```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi
-----run-smoke.sh-----
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
<shellId: 32 completed with exit code 0>
```

</details>


---

<sub>2m 2s</sub>

### `bash`

**Run the full vitest suite with dot reporter**

$ cd /private/var/tmp/ws/c9859428/hvir && (time npx vitest run --reporter=dot) > "$TMPDIR/hvir-vitest.log" 2>&1; echo "vitest exit: $?" >> "$TMPDIR/hvir-vitest.log"; tail -40 "$TMPDIR/hvir-vitest.log"

```
<command started in background with shellId: vitest>
```


---

<sub>2m 2s</sub>

### `bash`

**List project-management scripts and read planning CLI**

$ cd /private/var/tmp/ws/c9859428/hvir && ls scripts/project-management scripts/ghostty-web-update && echo "--- planning-cli usage ---" && sed -n '1,60p' scripts/project-management/planning-cli.ts

<details>
<summary>113 lines</summary>

```
scripts/ghostty-web-update:
candidate-bundle.mts
cli.mts
coordinator.mts
github-client.mts
github-delivery.mts
github-release-source.mts
policy.mts
repository-candidate.mts

scripts/project-management:
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
--- planning-cli usage ---
import { PROJECT_STATUS_OPTIONS, type ProjectStatus } from './planning-fields.ts'
import { parseProjectNumber, parseProjectRepository } from './project-config.ts'

export interface ProjectPlanningCliOptions {
  help: boolean
  issueNumber?: number
  ensureProject: boolean
  status?: ProjectStatus
  apply: boolean
}

export const PROJECT_PLANNING_HELP = `Usage: npm run project:record -- --issue <number> [options]

Read one normalized issue and canonical Project planning record.
Mutations are explicit and dry-run by default.

Options:
  --issue <number>              Issue in the configured repository (required)
  --ensure-project              Add or restore an eligible open issue when needed
  --status <name>               Set Status to Todo, In Progress, or Done
  --apply                       Apply the planned Project mutations
  --help                        Show this help

Environment:
  HVIR_REPO_TOKEN               Token used for repository issue reads
  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  HVIR_PROJECT_OWNER            Project owner (default: jarmak-personal)
  HVIR_PROJECT_NUMBER           Project number (default: 1)
`

export function parseProjectPlanningCliOptions(
  args: readonly string[],
): ProjectPlanningCliOptions {
  let issueNumber: number | undefined
  let ensureProject = false
  let status: ProjectStatus | undefined
  let apply = false

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (argument === '--help') {
      return { help: true, ensureProject, apply }
    }
    if (argument === '--apply') {
      apply = true
      continue
    }
    if (argument === '--ensure-project') {
      ensureProject = true
      continue
    }
    if (argument === '--issue') {
      issueNumber = parsePositiveInteger(requireValue(args, ++index, '--issue'))
      continue
    }
    if (argument === '--status') {
      status = parseStatus(requireValue(args, ++index, '--status'))
      continue
    }
<shellId: 33 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### Copilot

Let me understand the "projects / workspaces / hosts" model (local vs SSH) and the settings, since these are core concepts a README should explain correctly.

---

<sub>2m 7s</sub>

### `bash`

**Read workspace types**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l src/shared/workspace-types.ts && sed -n '1,140p' src/shared/workspace-types.ts

<details>
<summary>82 lines</summary>

```
90 src/shared/workspace-types.ts
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
<shellId: 34 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### `bash`

**Scan fs-types for host/ssh concepts**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l src/shared/fs-types.ts && grep -nE "ssh|Ssh|SSH|HostConnection|interface|export type" src/shared/fs-types.ts | head -60

<details>
<summary>11 lines</summary>

```
48 src/shared/fs-types.ts
4: * interface that produces them lives main-side. No `node:*` types here so the
10:export type FileType = 'file' | 'dir' | 'symlink' | 'other'
12:export interface DirEntry {
17:export interface Stat {
25:export type WatchEventType = 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir'
27:export interface WatchEvent {
34:export interface ExecResult {
45:export type HostConnectionState =
48:export type HostWatchTier = 'native' | 'inotify' | 'polling'
<shellId: 35 completed with exit code 0>
```

</details>


---

<sub>2m 13s</sub>

### Copilot

Let me look at how SSH hosts are configured/authenticated, and where user data and settings are stored — both matter for an accurate README.

---

<sub>2m 14s</sub>

### `bash`

**Read SSH config and auth module heads**

$ cd /private/var/tmp/ws/c9859428/hvir/src/main/project-host && sed -n '1,60p' ssh-config.ts; echo "=========== ssh-auth.ts (head) ==========="; sed -n '1,60p' ssh-auth.ts

<details>
<summary>62 lines</summary>

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
=========== ssh-auth.ts (head) ===========
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
<shellId: 36 completed with exit code 0>
```

</details>


---

<sub>2m 14s</sub>

### `bash`

**Read SSH identity source and host trust heads**

$ cd /private/var/tmp/ws/c9859428/hvir/src/main/project-host && sed -n '1,70p' ssh-identity-source.ts; echo "=========== ssh-host-trust.ts (head) ==========="; sed -n '1,50p' ssh-host-trust.ts

<details>
<summary>106 lines</summary>

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
=========== ssh-host-trust.ts (head) ===========
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
<shellId: 37 completed with exit code 0>
```

</details>


---

<sub>2m 20s</sub>

### `bash`

**Find SSH config path and agent usage**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "\.ssh|known_hosts|ssh-config|ssh_config|SSH_AUTH_SOCK|agent" src/main/project-host/project-host-catalog.ts src/main/project-host/ssh-host.ts src/main/project-host/ssh-host-options.ts | head -30

<details>
<summary>15 lines</summary>

```
src/main/project-host/project-host-catalog.ts:8:import { parseSshConfig, type SshAliasConfig } from './ssh-config'
src/main/project-host/project-host-catalog.ts:17:  readonly agentSocket?: string
src/main/project-host/project-host-catalog.ts:37:    private readonly agentSocket: string | undefined,
src/main/project-host/project-host-catalog.ts:56:        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
src/main/project-host/project-host-catalog.ts:160:      agentSocket: this.agentSocket,
src/main/project-host/project-host-catalog.ts:191:  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
src/main/project-host/ssh-host.ts:709:    const { config, agentSocket, prompter } = this.options
src/main/project-host/ssh-host.ts:803:            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
src/main/project-host/ssh-host.ts:805:          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
src/main/project-host/ssh-host.ts:806:            attempted.add('agent')
src/main/project-host/ssh-host.ts:807:            return { type: 'agent', username: config.user, agent: agentSocket }
src/main/project-host/ssh-host-options.ts:4:import type { SshAliasConfig } from './ssh-config'
src/main/project-host/ssh-host-options.ts:11:  readonly agentSocket?: string
<shellId: 38 completed with exit code 0>
```

</details>


---

<sub>2m 20s</sub>

### `bash`

**Scan SessionDialog UI strings**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "label|placeholder|title|Host|ssh|SSH" src/renderer/src/workspaces/SessionDialog.tsx | head -50

<details>
<summary>42 lines</summary>

```
4:  asHostId,
6:  type BrowseHostResponse,
7:  type ConnectedHost,
8:  type HostPath,
9:  type ProjectHostOption,
29:  readonly hosts: readonly ProjectHostOption[]
30:  readonly currentRoot: HostPath
33:  readonly onConnect: (hostId: string) => Promise<ConnectedHost>
34:  readonly onBrowse: (hostId: string, path: string) => Promise<BrowseHostResponse>
36:  readonly onDisconnect: (hostId: string) => Promise<ProjectHostOption>
44:  const [hostId, setHostId] = useState(
49:  const [connected, setConnected] = useState<ConnectedHost>()
61:  const selectedHost = hosts.find((host) => host.hostId === hostId)
63:  const releaseUnopenedHost = async (): Promise<void> => {
64:    if (connected?.host.kind === 'ssh' && connected.host.hostId !== currentRoot.hostId) {
79:      await releaseUnopenedHost()
90:      await releaseUnopenedHost()
168:    if (!pickerId || !selectedPath || newFolderName === undefined || !connectedHostId)
175:        hostPath(asHostId(connectedHostId), selectedPath),
190:  const connectedHostId = connected?.host.hostId
192:    async (directory: HostPath) => {
193:      if (!connectedHostId) return []
194:      return (await onBrowse(connectedHostId, directory.path)).directories
196:    [connectedHostId, onBrowse],
221:        aria-labelledby="session-dialog-title"
224:        <h2 id="session-dialog-title">
227:            : `Open folder on ${connected?.host.label ?? hostId}`}
231:          <div className="session-hosts" role="listbox" aria-label="Hosts">
239:                onClick={() => setHostId(host.hostId)}
242:                  {host.kind === 'ssh' ? (
245:                      hostLabel={`ssh:${host.label}`}
251:                    {host.kind === 'ssh' ? host.connectionState : 'this machine'}
268:                aria-label="Folder path"
303:            <div className="folder-browser" aria-label="Folders">
324:                      aria-label="New folder name"
343:              {connectedHostId ? (
345:                  root={hostPath(asHostId(connectedHostId), '/')}
351:                      ? hostPath(asHostId(connectedHostId), selectedPath)
357:                          path: hostPath(asHostId(connectedHostId), revealRequest.path),
385:                : selectedHost?.kind === 'local' ||
386:                    selectedHost?.connectionState === 'connected'
<shellId: 39 completed with exit code 0>
```

</details>


---

<sub>2m 26s</sub>

### Copilot

Let me verify that terminals/agents truly run on the remote host over SSH (vs. only file browsing), which is a headline capability I want to state accurately.

---

<sub>2m 26s</sub>

### `bash`

**Check SSH host capabilities in ProjectHost**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "spawnPty|\.shell\(|execStream|connectLoopback|watch\(" src/main/project-host/ssh-host.ts | head -20; echo "--- project-host.ts interface ---"; grep -nE "^\s+(readonly )?[a-zA-Z]+\(|interface|kind" src/main/project-host/project-host.ts | head -50

<details>
<summary>58 lines</summary>

```
140:        execStream: (command, args) => this.execStream(command, args),
338:  execStream(
471:  async connectLoopback(
501:  async spawnPty(opts: SpawnPtyOptions): Promise<PtyProcess> {
611:  watch(
616:    return this.watches.watch(path, onEvent, opts)
--- project-host.ts interface ---
6: * will implement the same interface over ssh2. Nothing above this seam knows or
32:export interface ExecOptions {
56:export interface ExecStreamHandle {
57:  onStdout(cb: (chunk: string) => void): Disposer
58:  onStderr(cb: (chunk: string) => void): Disposer
59:  onError(cb: (error: Error) => void): Disposer
60:  onExit(cb: (result: { code: number | null; signal: string | null }) => void): Disposer
62:  write(data: string): Promise<void>
64:  end(data?: string): Promise<void>
65:  kill(signal?: string): void
66:  dispose(): void
69:export interface WatchOptions {
83:export interface WriteFileOptions {
94:export interface ProjectFileStreamOptions {
98:export interface ProjectFileWriteStreamOptions extends ProjectFileStreamOptions {
104:export interface ProjectFileMetadataOptions extends ProjectFileStreamOptions {
109:export interface ProjectFileRenameOptions extends ProjectFileStreamOptions {
114:export interface ProjectFileTrashOptions extends ProjectFileStreamOptions {
123:      trashEntry(path: HostPath, opts?: ProjectFileTrashOptions): Promise<void>
133:export interface ProjectFileTransferPort {
134:  readFileChunks(
138:  writeFileChunksExclusive(
143:  setMetadata(path: HostPath, opts: ProjectFileMetadataOptions): Promise<void>
144:  renameNoReplace(
149:  removeDirectory(
155:export interface ExclusiveCreateOptions {
166:  constructor() {
167:    super('The destination already exists')
181:export interface RemoveFileOptions {
188:export interface ReadFileOptions {
195:export interface SpawnPtyOptions {
208:export interface PtyExit {
225:export interface PtyProcess {
227:  onData(cb: (data: string) => void): Disposer
228:  onExit(cb: (e: PtyExit) => void): Disposer
229:  write(data: string): void
234:  writeConfirmed(data: string): Promise<void>
235:  resize(cols: number, rows: number): void
236:  kill(signal?: string): void
250:export interface ProjectHost {
260:  connect(): Promise<void>
262:  dispose(): Promise<void>
263:  onConnectionState(cb: (state: HostConnectionState) => void): Disposer
266:  defaultShell(): Promise<string>
269:  exec(command: string, args: readonly string[], opts?: ExecOptions): Promise<ExecResult>
271:  execStream(
286:  spawnPty(opts: SpawnPtyOptions): Promise<PtyProcess>
289:  connectLoopback(endpoint: LoopbackEndpoint): Promise<Duplex>
291:  readFile(path: HostPath, opts?: ReadFileOptions): Promise<Buffer>
292:  readTextFile(
<shellId: 40 completed with exit code 0>
```

</details>


---

<sub>2m 26s</sub>

### `bash`

**List remaining smoke files and scenario registry**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/main/smoke | sed -n '40,100p'; echo "--- smoke scenarios named in run-smoke-scenarios ---"; grep -nE "^\s+'?[a-z-]+'?:\s*\{|scenario" scripts/run-smoke-scenarios.mts | head -50

<details>
<summary>91 lines</summary>

```
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
--- smoke scenarios named in run-smoke-scenarios ---
15:} from '../src/main/smoke/scenario-selection.mts'
34:  readonly scenario: SmokeScenarioName
46:  scenario: SmokeScenarioName,
49:) => Promise<Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'>>
74:export function smokeAttemptTimeoutMs(scenario: SmokeScenarioName): number {
75:  return scenario === 'capacity'
107:        'Select Electron smoke scenarios with positional names or HVIR_SMOKE_SCENARIO, not both',
117:  scenarios: readonly SmokeScenarioName[],
124:    for (const scenario of scenarios) {
127:          scenario,
137:          scenario,
140:          ...(await invoke(scenario, iteration, repetitionCount)),
144:          scenario,
159:  scenario: SmokeScenarioName,
163:    HVIR_SMOKE_SCENARIO: scenario,
175:}): Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'> {
196:  scenario: SmokeScenarioName,
200:): Promise<Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'>> {
206:    `[smoke:group] ${scenario} iteration ${iteration}/${repetitionCount} starting`,
217:        env: smokeScenarioEnvironment(options.environment ?? process.env, scenario),
270:          scenario,
328:      options.timeoutMs ?? smokeAttemptTimeoutMs(scenario),
340:          scenario,
385:          scenario,
469:      return `- ${result.scenario} iteration ${result.iteration}/${result.repetitionCount}: ${result.status} (${detail}${duration})${result.status === 'failed' ? ` · ${formatSmokeFailureEvidence(result.failureEvidence ?? null)}` : ''}`
480:  const scenarios = selectedSmokeScenarios(
487:      scenarios,
489:      (scenario, iteration, total) =>
490:        invokeSmokeScenario(scenario, iteration, total, {
507:              `- ${result.scenario} iteration ${result.iteration}/${result.repetitionCount}: ${result.status}` +
530:  target: {
<shellId: 41 completed with exit code 0>
```

</details>


---

<sub>2m 34s</sub>

### `bash`

**Read settings model**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' src/renderer/src/settings/settings-model.ts

<details>
<summary>48 lines</summary>

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
<shellId: 42 completed with exit code 0>
```

</details>


---

<sub>2m 34s</sub>

### `bash`

**Extract UI strings from the Sessions views**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -hoE ">[A-Z][A-Za-z ,'/-]{6,60}<|aria-label=\"[^\"]+\"|title=\"[^\"]+\"" src/renderer/src/sessions/SessionsOverview.tsx src/renderer/src/sessions/SessionsOverviewCard.tsx src/renderer/src/sessions/SessionsCollectionToolbar.tsx src/renderer/src/sessions/SessionsApplicationDestination.tsx | sort -u | head -50

<details>
<summary>12 lines</summary>

```
>Attention and activity<
>Project<
>Workspace<
aria-label="hvir sessions"
aria-label="Session collection controls"
aria-label="Sessions pages"
title="Loading sessions"
title="No hvir sessions"
title="No sessions match"
title="Sessions unavailable"
title="Updates paused"
<shellId: 43 completed with exit code 0>
```

</details>


---

<sub>2m 38s</sub>

### `bash`

**Read the Sessions overview card component**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,140p' src/renderer/src/sessions/SessionsOverviewCard.tsx

<details>
<summary>71 lines</summary>

```
import type { ReactElement } from 'react'

import type { SessionsProjectionRow } from '../../../shared'
import { ProviderContextMeter } from '../harness/ProviderContextMeter'
import {
  sessionsOverviewCardFacts,
  sessionsOverviewCardIdentity,
  type SessionsOverviewGroup,
  type SessionsOverviewCardFact,
} from './sessions-overview-model'

export function SessionsOverviewCard({
  row,
  group,
  opening,
  onOpen,
  onInteract,
}: {
  readonly row: SessionsProjectionRow
  readonly group: SessionsOverviewGroup
  readonly opening: boolean
  readonly onOpen?: () => void
  readonly onInteract?: () => void
}): ReactElement {
  const presentation = sessionsOverviewCardFacts(row)
  const identity = sessionsOverviewCardIdentity(row, group)
  return (
    <>
      <header>
        <div className="session-card-identity">
          <span className={`session-kind ${row.provider.kind}`}>{identity.label}</span>
          <h3>{identity.title}</h3>
        </div>
      </header>
      {row.context.status === 'available' || row.context.status === 'stale' ? (
        <ProviderContextMeter
          contextFacet={row.context}
          pressurePolicy={row.provider.contextPressure}
        />
      ) : null}
      <footer className="session-card-footer">
        <dl className="session-facts">
          {presentation.facts.map((fact) => (
            <Fact key={fact.label} fact={fact} />
          ))}
        </dl>
        <div className="session-card-actions">
          {onInteract ? (
            <button type="button" onClick={onInteract}>
              Interact
            </button>
          ) : null}
          {onOpen ? (
            <button type="button" disabled={opening} onClick={onOpen}>
              {opening ? 'Opening…' : 'Open'}
            </button>
          ) : null}
        </div>
      </footer>
    </>
  )
}

function Fact({ fact }: { readonly fact: SessionsOverviewCardFact }): ReactElement {
  return (
    <div
      className={`session-fact ${fact.tone}${fact.label === 'Status' ? ' status activity' : fact.label === 'Attention' || fact.label === 'Working' ? ' activity' : ''}`}
    >
      <dt>{fact.label}</dt>
      <dd>{fact.value}</dd>
    </div>
  )
}
<shellId: 44 completed with exit code 0>
```

</details>


---

<sub>2m 38s</sub>

### Notification

Shell "Run the full vitest suite with dot reporter" completed

---

<sub>2m 39s</sub>

### `read_bash`

**Waiting up to 5 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "delay": 5,
  "shellId": "vitest"
}
```

</details>

<details>
<summary>30 lines</summary>

```
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
   Start at  00:25:41
   Duration  31.93s (tests 68%, import 12%, environment 9%, transform 8%, setup 2%, worker 1%)

    Isolate  376 workers spawned · ~141ms startup each (spawn + environment, per file)
             at least ~7.44s faster with isolate: false — reuses workers across files instead of one per file


real	0m33.184s
user	2m1.997s
sys	0m39.587s
vitest exit: 1
<shellId: vitest completed with exit code 0>
```

</details>


---

<sub>2m 46s</sub>

### `bash`

**Summarize failing test files from vitest log**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -E "^ (FAIL|❯) " "$TMPDIR/hvir-vitest.log" | sed -E 's/ > .*//' | sort | uniq -c | sort -rn | head -30; echo; echo "=== FAIL lines (full) ==="; grep -E "^ FAIL " "$TMPDIR/hvir-vitest.log" | head -40

<details>
<summary>48 lines</summary>

```
13  FAIL  test/web-pane-route-registry.test.ts
   5  FAIL  test/web-pane-route.test.ts
   1  FAIL  test/worker-host-broker.test.ts
   1  FAIL  test/web-pane-smoke-boundary.test.ts
   1  FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
   1  FAIL  test/project-pr-relationships.test.ts
   1  FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
   1  FAIL  test/local-host.test.ts
   1  FAIL  test/issue-lifecycle-guidance.test.ts [ test/issue-lifecycle-guidance.test.ts ]
   1  FAIL  test/external-document-authority.test.ts
   1  ❯ test/worker-host-broker.test.ts:575:54
   1  ❯ test/web-pane-route-registry.test.ts:319:25
   1  ❯ test/web-pane-route-registry.test.ts:237:25
   1  ❯ test/web-pane-route-registry.test.ts:217:25
   1  ❯ test/smoke-scenario-runner.test.ts:610:24
   1  ❯ test/project-pr-relationships.test.ts:85:22
   1  ❯ test/merge-pr-skill.test.ts:5:15
   1  ❯ test/local-host.test.ts:286:28
   1  ❯ test/issue-lifecycle-guidance.test.ts:36:18
   1  ❯ test/external-document-authority.test.ts:223:23

=== FAIL lines (full) ===
 FAIL  test/issue-lifecycle-guidance.test.ts [ test/issue-lifecycle-guidance.test.ts ]
 FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
 FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
 FAIL  test/external-document-authority.test.ts > outside-project document authority > uses real LocalHost resolution for symlinks, assets, and missing files
 FAIL  test/local-host.test.ts > LocalHost > isolates each buffered command from the app process group
 FAIL  test/project-pr-relationships.test.ts > pull request contribution trailers > does not interpret the PR template guidance as a relationship
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > deduplicates an origin while retaining the newly activated path
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > coalesces rapid activation without authorizing the stale attachment URL
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > keeps host aliases and renderer owners isolated
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > isolates reused webContents ids by document generation
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > gates attachment once and binds the resulting guest by its partition
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > classifies the three navigation outcomes without opening anything
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > tears down every route for one owner without touching another owner
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > lists and closes only the routes sourced by one terminal generation
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > blocks new routes behind an exact terminal-move authority lease
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > refuses host capacity without silently evicting an existing pane
 FAIL  test/web-pane-route.test.ts > ProjectHost loopback streams > opens a direct local socket through the same seam
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > rejects unauthenticated local clients and strips credentials upstream
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > never falls through an authorized remote endpoint to the local service
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > blocks an authenticated request to another loopback endpoint
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > authenticates CONNECT and carries WebSocket-style duplex traffic
 FAIL  test/web-pane-smoke-boundary.test.ts > web-pane smoke boundaries > force-closes a lingering dashboard connection during teardown
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its workspace closes
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its renderer owner closes
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its source terminal begins moving
 FAIL  test/worker-host-broker.test.ts > Git worker host broker > persists clean-filter stat refreshes instead of filtering the same file again
<shellId: 45 completed with exit code 0>
```

</details>


---

<sub>2m 52s</sub>

### Copilot

Let me examine the root causes of the failures to categorize them (missing files in this snapshot vs. sandbox restrictions).

---

<sub>2m 52s</sub>

### `bash`

**Group error signatures in the vitest log**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "ENOENT|EPERM|EACCES|EADDRINUSE|listen|Error:" "$TMPDIR/hvir-vitest.log" | sed -E 's/^[0-9]+://' | sort | uniq -c | sort -rn | head -30

<details>
<summary>11 lines</summary>

```
3 Received: "listen EPERM: operation not permitted 127.0.0.1"
   3 AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
   1 Error: listen EPERM: operation not permitted 127.0.0.1
   1 Error: EPERM: operation not permitted, mkdtemp '/tmp/hvir-document-authority-Cr988B'
   1 Error: ENOENT: no such file or directory, open 'CONTRIBUTING.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/CONTRIBUTING.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/.github/pull_request_template.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/.claude/skills/hvir-merge-pr/SKILL.md'
   1 AssertionError: expected 2 to be 1 // Object.is equality
   1 AssertionError: expected +0 to be 30981 // Object.is equality
<shellId: 46 completed with exit code 0>
```

</details>


---

<sub>2m 52s</sub>

### `bash`

**Show details for the file-level failing tests**

$ cd /private/var/tmp/ws/c9859428/hvir && for t in issue-lifecycle-guidance merge-pr-skill smoke-scenario-runner project-pr-relationships; do echo "=============== $t ==============="; grep -n -A14 "FAIL  test/$t.test.ts" "$TMPDIR/hvir-vitest.log" | head -24; done

<details>
<summary>65 lines</summary>

```
=============== issue-lifecycle-guidance ===============
130: FAIL  test/issue-lifecycle-guidance.test.ts [ test/issue-lifecycle-guidance.test.ts ]
131-Error: ENOENT: no such file or directory, open 'CONTRIBUTING.md'
132- ❯ test/issue-lifecycle-guidance.test.ts:36:18
133-     34|
134-     35| describe.each(documents)('issue lifecycle guidance: %s', (document) =>…
135-     36|   const source = readFileSync(document, 'utf8')
136-       |                  ^
137-     37|
138-     38|   it('resolves its local links and heading fragments', () => {
139-
140-⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/26]⎯
141-
142- FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
143-Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/.claude/skills/hvir-merge-pr/SKILL.md'
144- ❯ test/merge-pr-skill.test.ts:5:15
=============== merge-pr-skill ===============
142: FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
143-Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/.claude/skills/hvir-merge-pr/SKILL.md'
144- ❯ test/merge-pr-skill.test.ts:5:15
145-      3| import { describe, expect, it } from 'vitest'
146-      4|
147-      5| const skill = readFileSync(
148-       |               ^
149-      6|   new URL('../.claude/skills/hvir-merge-pr/SKILL.md', import.meta.url),
150-      7|   'utf8',
151-
152-⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/26]⎯
153-
154- FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
155-Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/CONTRIBUTING.md'
156- ❯ test/smoke-scenario-runner.test.ts:610:24
=============== smoke-scenario-runner ===============
154: FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
155-Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/CONTRIBUTING.md'
156- ❯ test/smoke-scenario-runner.test.ts:610:24
157-    608|     'utf8',
158-    609|   )
159-    610|   const contributing = readFileSync(
160-       |                        ^
161-    611|     new URL('../CONTRIBUTING.md', import.meta.url),
162-    612|     'utf8',
163-
164-⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/26]⎯
165-
166-
167-⎯⎯⎯⎯⎯⎯ Failed Tests 23 ⎯⎯⎯⎯⎯⎯⎯
168-
=============== project-pr-relationships ===============
200: FAIL  test/project-pr-relationships.test.ts > pull request contribution trailers > does not interpret the PR template guidance as a relationship
201-Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/c9859428/hvir/.github/pull_request_template.md'
202- ❯ test/project-pr-relationships.test.ts:85:22
203-     83|
204-     84|   it('does not interpret the PR template guidance as a relationship', …
205-     85|     const template = readFileSync(
206-       |                      ^
207-     86|       new URL('../.github/pull_request_template.md', import.meta.url),
208-     87|       'utf8',
209-
210-⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/26]⎯
211-
212- FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > deduplicates an origin while retaining the newly activated path
213- FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > coalesces rapid activation without authorizing the stale attachment URL
214- FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > keeps host aliases and renderer owners isolated
<shellId: 47 completed with exit code 0>
```

</details>


---

<sub>3m 7s</sub>

### `bash`

**Read the CONTRIBUTING-related smoke runner test**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '590,700p' test/smoke-scenario-runner.test.ts

<details>
<summary>111 lines</summary>

```
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
  )
  const externalFileMoveScenario = readFileSync(
    new URL('../src/main/smoke/external-file-move.ts', import.meta.url),
    'utf8',
  )
  const webPaneScenario = readFileSync(
    new URL('../src/main/smoke/web-pane.ts', import.meta.url),
    'utf8',
  )
  const rendererAuthorityScenario = readFileSync(
    new URL('../src/main/smoke/renderer-authority.ts', import.meta.url),
    'utf8',
  )
  const documentReviewScenario = readFileSync(
    new URL('../src/main/smoke/document-review.ts', import.meta.url),
    'utf8',
  )
  const terminalPresentationScenario = readFileSync(
    new URL('../src/main/smoke/terminal-presentation.ts', import.meta.url),
    'utf8',
  )
  const terminalExplicitLaunchScenario = readFileSync(
    new URL('../src/main/smoke/terminal-explicit-launch.ts', import.meta.url),
    'utf8',
  )
  const terminalRendererLifecycleScenario = readFileSync(
    new URL('../src/main/smoke/terminal-renderer-lifecycle.ts', import.meta.url),
    'utf8',
  )
  const rendererLifecycleScenario = readFileSync(
    new URL('../src/main/smoke/renderer-lifecycle.ts', import.meta.url),
    'utf8',
  )

  it('separates correctness, hosted evidence, and controlled performance commands', () => {
    expect(packageJson.scripts.smoke).toContain('node scripts/run-smoke-scenarios.mts')
    expect(packageJson.scripts.smoke).toContain(
      'viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles',
    )
    expect(packageJson.scripts['smoke:macos']).toContain(
<shellId: 48 completed with exit code 0>
```

</details>


---

<sub>3m 7s</sub>

### `bash`

**Read issue-lifecycle-guidance test**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' test/issue-lifecycle-guidance.test.ts

<details>
<summary>67 lines</summary>

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
<shellId: 49 completed with exit code 0>
```

</details>


---

<sub>3m 14s</sub>

### `bash`

**Find assertions about CONTRIBUTING in smoke test**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -n "contributing" test/smoke-scenario-runner.test.ts | head -40

<details>
<summary>6 lines</summary>

```
610:  const contributing = readFileSync(
728:    expect(contributing).toContain('machine-dependent capacity evidence')
729:    expect(contributing).toContain('controlled-machine release gate')
1081:      expect(contributing).toContain(`\`${scenario}\``)
1083:    expect(contributing).toMatch(/reports a result for\s+every scheduled group/)
<shellId: 50 completed with exit code 0>
```

</details>


---

<sub>3m 15s</sub>

### `bash`

**Read contract assertions about smoke/capacity commands**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '700,760p' test/smoke-scenario-runner.test.ts; echo ......; sed -n '1060,1095p' test/smoke-scenario-runner.test.ts

<details>
<summary>84 lines</summary>

```
expect(packageJson.scripts['smoke:macos']).toContain(
      'node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle',
    )
    expect(packageJson.scripts['smoke:macos:ci']).toContain(
      'node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review',
    )
    expect(packageJson.scripts['smoke:macos:ci']).not.toContain('terminal-presentation')
    expect(packageJson.scripts['smoke:macos:ci']).not.toContain('terminal-lifecycle')
    expect(packageJson.scripts['smoke:scenario']).toBe(
      'npm run build:smoke && node scripts/run-smoke-scenarios.mts',
    )
    expect(packageJson.scripts['build:smoke']).toBe('electron-vite build --mode smoke')
    expect(packageJson.scripts['smoke:macos']).not.toMatch(
      /terminal-presentation capacity/,
    )
    expect(packageJson.scripts['smoke:capacity']).toContain(
      'HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts',
    )
    expect(packageJson.scripts['smoke:capacity']).not.toContain(
      'HVIR_CAPACITY_PERFORMANCE_GATE',
    )
    expect(packageJson.scripts['performance:capacity']).toContain(
      'HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled',
    )
    expect(gauntletScript).toContain('npm run performance:capacity')
    expect(prePushHook).toContain('if [[ "$(uname -s)" == "Darwin" ]]')
    expect(prePushHook).toMatch(/^\s*exec npm run smoke:macos$/m)
    expect(prePushHook).not.toContain('smoke:macos:ci')
    expect(contributing).toContain('machine-dependent capacity evidence')
    expect(contributing).toContain('controlled-machine release gate')
  })

  it('passes one selected name into each hermetic unpackaged invocation', () => {
    expect(invocationScript).toContain('HVIR_SMOKE_SCENARIO="${HVIR_SMOKE_SCENARIO}"')
    expect(invocationScript).toContain('HVIR_SMOKE_SOURCE_COMMIT="$source_commit"')
    expect(invocationScript).toContain('HVIR_SMOKE_SOURCE_DIRTY="$source_dirty"')
    expect(invocationScript).toContain('create-smoke-repository.sh')
    expect(invocationScript).toContain('unset ELECTRON_RENDERER_URL')
    expect(invocationScript).toContain('--mode smoke')
  })

  it('includes bounded attempt duration in real aggregate results', () => {
    expect(
      formatSmokeScenarioResults([
        {
          scenario: 'pty-native',
          iteration: 1,
          repetitionCount: 1,
          status: 'failed',
          exitCode: 1,
          durationMs: 1234.6,
        },
      ]),
    ).toContain('failed (exit 1 · 1235ms)')
  })

  it('proves failed and interrupted predecessors cannot affect clean successors', () => {
    expect(packageJson.scripts['smoke:isolation']).toContain(
      'node scripts/run-smoke-interruption.mts',
    )
    expect(invocationScript).toContain(
......
      rendererAuthorityScenario.indexOf('win.destroy()'),
    )
  })

  it('enters platform contracts with bounded semantic snapshots', () => {
    const branch = smokeWorkflow.indexOf("mode === 'platform-contracts'")
    const platformScenario = readFileSync(
      new URL('../src/main/smoke/platform-contracts.ts', import.meta.url),
      'utf8',
    )
    expect(branch).toBeGreaterThan(-1)
    expect(smokeWorkflow).not.toContain('const profileSmoke')
    expect(platformScenario).toContain('JSON.stringify(lastSnapshot)')
    expect(platformScenario).toContain('protocol.isProtocolHandled')
    expect(platformScenario).toContain('net.fetch(preview.url)')
    expect(platformScenario).toContain('supervisor.list()')
    expect(platformScenario).not.toContain('requestAnimationFrame')
  })

  it('documents every selectable group and the aggregate result behavior', () => {
    for (const scenario of ELECTRON_SMOKE_SCENARIOS) {
      expect(contributing).toContain(`\`${scenario}\``)
    }
    expect(contributing).toMatch(/reports a result for\s+every scheduled group/)
  })
})
<shellId: 51 completed with exit code 0>
```

</details>


---

<sub>3m 29s</sub>

### Copilot

Let me check how the app resolves its user-data location and CLI arguments (so the README's "usage" and "data location" statements are accurate).

---

<sub>3m 29s</sub>

### `bash`

**Read application runtime (user data paths)**

$ cd /private/var/tmp/ws/c9859428/hvir && wc -l src/main/application-runtime.ts src/main/application-runtime-policy.ts && sed -n '1,140p' src/main/application-runtime.ts

<details>
<summary>19 lines</summary>

```
18 src/main/application-runtime.ts
      30 src/main/application-runtime-policy.ts
      48 total
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
<shellId: 52 completed with exit code 0>
```

</details>


---

<sub>3m 29s</sub>

### `bash`

**Read application runtime policy**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,120p' src/main/application-runtime-policy.ts

<details>
<summary>26 lines</summary>

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
<shellId: 53 completed with exit code 0>
```

</details>


---

<sub>3m 33s</sub>

### `grep`

**project-root|HVIR_[A-Z_]+**

"project-root|HVIR_[A-Z_]+" in *.{ts,mts} (src/main)

<details>
<summary>107 matches</summary>

```
[grep content: 92 matches across 22 file(s) under /private/var/tmp/ws/c9859428/hvir/src/main]

index.ts (8 match(es)):
  77:     app.isPackaged || __HVIR_SMOKE_BUILD__,
  430:     const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
  431:     return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  436:       if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
  439:           scenario: process.env['HVIR_SMOKE_SCENARIO'],
  462:       console.error('HVIR_STARTUP_FAIL', error)
  466:     if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
  469:     if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return

build-environment.d.ts (2 match(es)):
  1: declare const __HVIR_SMOKE_BUILD__: boolean
  2: declare const __HVIR_BUILD_CHANNEL__: import('../shared').ApplicationBuildChannel
application-runtime.ts:11:   __HVIR_BUILD_CHANNEL__,

smoke/terminal-context-menu.ts (6 match(es)):
  5: const READY = '__HVIR_MENU_READY__'
  6: const ACTIONS_READY = '__HVIR_MENU_ACTIONS_READY__'
  7: const LEAK = '__HVIR_MENU_LEAK__'
  8: const INPUT = '__HVIR_MENU_INPUT__:hvir-context-menu-paste:END'
  33:       "stty -echo -icanon min 0 time 50; printf '\\033[?1000h\\033[?1006h\n__HVIR_MENU_READY__\n'; hvir_menu_leak=$(dd bs=1 count=1 2>/dev/null | od -An -tx1 | tr -d ' \\n'); printf '\\033[?1000l\\033[?1006l'; stty icanon min 1 time 0; if [ -n \"$hvir_menu_leak\" ]; then printf '\n__HVIR_MENU_LEAK__:%s\n' \"$hvir_menu_leak\"; fi; printf '\n__HVIR_MENU_ACTIONS_READY__\n'; IFS= read -r hvir_menu_input; printf '\n__HVIR_MENU_INPUT__:%s:END\n' \"$hvir_menu_input\"; stty echo\n",
  288:     if (output.includes('__HVIR_MENU_INPUT__:')) {
smoke/platform-contracts.ts:63:     process.env['HVIR_SMOKE_REQUIRE_PROCESS_SANDBOX'] === '1'

smoke/terminal-presentation.ts (2 match(es)):
  281:       "printf '\n__HVIR_TYPO_STTY__:'; stty size; printf ':__HVIR_TYPO_END__\n'\n",
  294:           /[\r\n]__HVIR_TYPO_STTY__:[^\d]*(\d+)\s+(\d+)\s*:__HVIR_TYPO_END__/g,

smoke/harness-profile-workflow.ts (4 match(es)):
  48:               { kind: 'literal', name: 'HVIR_PROFILE_SMOKE', value: 'structured' }
  116:     !profileSmoke.preview.command.includes("HVIR_PROFILE_SMOKE='structured'")
  319:     process.env.HVIR_HARNESS_SETTINGS_CAPTURE_DIR
  320:       ? localPath(process.env.HVIR_HARNESS_SETTINGS_CAPTURE_DIR)
smoke/viewer-content.ts:634:     console.log('HVIR_SMOKE_OK')

smoke/terminal-search.ts (2 match(es)):
  5: const READY = '__HVIR_SEARCH_READY__'
  34:       `hvir_search_ready='__HVIR_SEARCH_''READY__'; ` +

smoke/capacity.ts (2 match(es)):
  597:   const commit = process.env['HVIR_SMOKE_SOURCE_COMMIT']
  598:   const dirty = process.env['HVIR_SMOKE_SOURCE_DIRTY']
smoke/capacity-output-fixtures.ts:6: const STOP_MARKER_PREFIX = '__HVIR_CAPACITY_OUTPUT_STOPPED_'
smoke/scenario-selection.mts:40:       'Select one Electron smoke scenario with HVIR_SMOKE_SCENARIO; use npm run smoke for the aggregate suite',
smoke/capacity-performance.ts:1: export const CAPACITY_PERFORMANCE_GATE_ENV = 'HVIR_CAPACITY_PERFORMANCE_GATE'

smoke/terminal-file-paste.ts (4 match(es)):
  11: const READY_MARKER = '__HVIR_FILE_PASTE_READY__'
  12: const SUCCESS_MARKER = '__HVIR_FILE_PASTE_OK__'
  13: const FAILURE_PREFIX = '__HVIR_FILE_PASTE_FAIL__:'
  14: const CLOSED_PREFIX = '__HVIR_FILE_PASTE_CLOSED__:'
smoke/development-performance.ts:44:   console.log('HVIR_SMOKE_OK')

smoke/terminal-middle-click-close.ts (9 match(es)):
  6: const SELECTION_TEXT = '__HVIR_PRIMARY_SELECTION_INPUT__'
  7: const READY_MARKER = '__HVIR_MIDDLE_CLICK_READY__'
  8: const PASTE_MARKER = '__HVIR_MIDDLE_CLICK_PASTE_OK__'
  9: const GUARDED_MARKER = '__HVIR_MIDDLE_CLICK_GUARD_OK__'
  10: const GUARD_COMPLETE_INPUT = '__HVIR_MIDDLE_CLICK_GUARD_COMPLETE__'
  11: const FAILURE_MARKER = '__HVIR_MIDDLE_CLICK_FAIL__'
  12: const CLOSED_MARKER = '__HVIR_MIDDLE_CLICK_CLOSED__'
  13: const SHELL_READY_MARKER = '__HVIR_MIDDLE_CLICK_SHELL_READY__'
  170:   return `node -e "eval(Buffer.from(process.argv[1],'base64').toString())" '${source}' '${expected}' '${mode}' '${guardComplete}'; printf '\n%s%s\n' '__HVIR_MIDDLE_CLICK_' 'SHELL_READY__'\n`
smoke/document-review.ts:368:     const readyMarker = `__HVIR_DOCUMENT_REVIEW_CAPTURE_READY_${id}__`

smoke/native-pty.ts (8 match(es)):
  109:                   'read trigger; printf hvir-profile-smoke:; printenv HVIR_PROFILE_SMOKE; read hold',
  115:           { kind: 'literal', name: 'HVIR_PROFILE_SMOKE', value: 'structured' },
  208:     console.log('HVIR_SMOKE_OK')
  213:     console.error('HVIR_SMOKE_FAIL', error)
  231:       console.error('HVIR_SMOKE_CLEANUP_FAIL', cleanupError)
  254:       'export HVIR_LOGIN_STARTUP="${HVIR_LOGIN_STARTUP:+$HVIR_LOGIN_STARTUP,}login"\n',
  258:     'export HVIR_INTERACTIVE_STARTUP="${HVIR_INTERACTIVE_STARTUP:+$HVIR_INTERACTIVE_STARTUP,}interactive"\n',
  296:         `printf 'hvir-login-shell:%s|%s|' "$HVIR_LOGIN_STARTUP" "$HVIR_INTERACTIVE_STARTUP"; hvir-login-path; printf '|%s|%s\\n' "$options[login]" "$options[interactive]"; exit\n`,

smoke/index.ts (20 match(es)):
  90: /** Production-composed Electron acceptance workflow selected by `HVIR_SMOKE=1`. */
  500:       console.log('HVIR_SMOKE_OK')
  524:         captureDirectory: process.env.HVIR_SESSIONS_CAPTURE_DIR
  525:           ? localPath(process.env.HVIR_SESSIONS_CAPTURE_DIR)
  529:       console.log('HVIR_SMOKE_OK')
  536:       console.log('HVIR_SMOKE_OK')
  586:       console.log('HVIR_SMOKE_OK')
  605:       console.log('HVIR_SMOKE_OK')
  615:       console.log('HVIR_SMOKE_OK')
  636:       console.log('HVIR_SMOKE_OK')
  653:       console.log('HVIR_SMOKE_OK')
  678:       console.log('HVIR_SMOKE_OK')
  689:       console.log('HVIR_SMOKE_OK')
  704:       console.log('HVIR_SMOKE_OK')
  716:       console.log('HVIR_SMOKE_OK')
  721:       console.log('HVIR_SMOKE_OK')
  731:       console.log('HVIR_SMOKE_OK')
  751:       console.log('HVIR_SMOKE_OK')
  767:     console.error('HVIR_SMOKE_FAIL', err)
  784:       console.error('HVIR_SMOKE_CLEANUP_FAIL', cleanupError)

smoke/terminal-keyboard-negotiation.ts (9 match(es)):
  104: const READY_PREFIX = '__HVIR_KEYBOARD_READY__:'
  105: const CLIENT_STARTED_MARKER = '__HVIR_KEYBOARD_CLIENT_STARTED__'
  106: const SUCCESS_PREFIX = '__HVIR_KEYBOARD_OK__:'
  107: const FAILURE_PREFIX = '__HVIR_KEYBOARD_FAIL__:'
  108: const CLOSED_PREFIX = '__HVIR_KEYBOARD_CLOSED__:'
  115: const PROBE_SOURCE_VARIABLE = 'HVIR_KEYBOARD_PROBE_B64'
  222:   (_, index) => `__HVIR_KEYBOARD_DELIVERY_${index}__`,
  371:       `${assignment}; printf '%s\\n' '__HVIR_KEYBOARD_DELIVERY_''${index}__'\n`,
  376:   return `printf '%s\\n' '__HVIR_KEYBOARD_CLIENT_''STARTED__'; node -e "eval(Buffer.from(process.argv[1],'base64').toString())" "$${PROBE_SOURCE_VARIABLE}"; unset ${PROBE_SOURCE_VARIABLE}\n`

smoke/diagnostic-report-restart.ts (3 match(es)):
  6: const PHASE_VARIABLE = 'HVIR_SMOKE_DIAGNOSTIC_REPORT_PHASE'
  37:     console.log('HVIR_SMOKE_OK')
  140:   console.log('HVIR_SMOKE_OK')

smoke/interruption-checkpoint.ts (5 match(es)):
  3: const CHECKPOINT_VARIABLE = 'HVIR_SMOKE_ISOLATION_CHECKPOINT'
  4: const ACTION_VARIABLE = 'HVIR_SMOKE_ISOLATION_ACTION'
  5: const RUN_TOKEN_VARIABLE = 'HVIR_SMOKE_ISOLATION_RUN'
  6: const PREDECESSOR_TOKEN_VARIABLE = 'HVIR_SMOKE_ISOLATION_PREDECESSOR'
  7: const PREDECESSOR_PANE_VARIABLE = 'HVIR_SMOKE_ISOLATION_PREDECESSOR_PANE'
```

</details>


---

<sub>3m 35s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/src/main/index.ts.**

/private/var/tmp/ws/c9859428/hvir/src/main/index.ts (lines 395-520)

<details>
<summary>124 lines</summary>

```
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

<sub>3m 39s</sub>

### `bash`

**Locate project-root selection logic at startup**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -n "projectRootArgument\|process.cwd\|initialRoot\|restoreProjects\|ProjectRegistry\." src/main/index.ts | head -20; echo ---; sed -n '230,300p' src/main/index.ts

<details>
<summary>78 lines</summary>

```
169:    const requestedProjectRoot = projectRootArgument()
170:    const registry = await ProjectRegistry.create(
178:          defaultPath: process.cwd(),
429:  function projectRootArgument(): string | undefined {
440:          projectRoot: localPath(projectRootArgument() ?? process.cwd()),
---
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
<shellId: 54 completed with exit code 0>
```

</details>


---

<sub>3m 41s</sub>

### `bash`

**Read project registry creation at startup**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '160,200p' src/main/index.ts

<details>
<summary>42 lines</summary>

```
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
<shellId: 55 completed with exit code 0>
```

</details>


---

<sub>3m 41s</sub>

### `bash`

**Read ProjectRegistry.create to see restore behavior**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -n "static async create" -A45 src/main/project-registry.ts | head -90

<details>
<summary>60 lines</summary>

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
<shellId: 56 completed with exit code 0>
```

</details>


---

<sub>3m 51s</sub>

### Copilot

Let me check how `electron-vite dev` forwards arguments, so the dev-time "open a specific project" instructions are accurate.

---

<sub>3m 51s</sub>

### `bash`

**Check electron-vite passthrough args handling**

$ cd /private/var/tmp/ws/c9859428/hvir && ls node_modules/electron-vite/dist 2>/dev/null | head; echo ---; grep -rnE "'--'\]|\[\"--\"\]|options\['--'\]|options\[\"--\"\]|ELECTRON_RENDERER_URL" node_modules/electron-vite/dist --include=*.js --include=*.mjs --include=*.cjs 2>/dev/null | head -12

<details>
<summary>11 lines</summary>

```
chunks
cli.js
index.d.ts
index.js
---
node_modules/electron-vite/dist/chunks/lib-7y7CgM8M.js:67:            process.env.ELECTRON_RENDERER_URL = `${protocol}//${host}:${port}`;
node_modules/electron-vite/dist/cli.js:58:    if (options['--']) {
node_modules/electron-vite/dist/cli.js:59:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/cli.js:105:    if (options['--']) {
node_modules/electron-vite/dist/cli.js:106:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
<shellId: 57 completed with exit code 0>
```

</details>


---

<sub>3m 51s</sub>

### `bash`

**Find electron-vite startElectron implementation**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "version|\"node\"" node_modules/electron-vite/package.json | head -5; grep -rnE "startElectron" node_modules/electron-vite/dist/*.js node_modules/electron-vite/dist/chunks/*.js 2>/dev/null | head -5

<details>
<summary>8 lines</summary>

```
3:  "version": "5.0.0",
24:    "node": "^20.19.0 || >=22.12.0"
node_modules/electron-vite/dist/chunks/lib-7y7CgM8M.js:3:import { r as resolveConfig, c as resolveHostname, s as startElectron } from './lib-q6ns0vZr.js';
node_modules/electron-vite/dist/chunks/lib-7y7CgM8M.js:32:                    ps = startElectron(inlineConfig.root);
node_modules/electron-vite/dist/chunks/lib-7y7CgM8M.js:74:        ps = startElectron(inlineConfig.root);
node_modules/electron-vite/dist/chunks/lib-Dvh2Hokw.js:3:import { s as startElectron } from './lib-q6ns0vZr.js';
node_modules/electron-vite/dist/chunks/lib-Dvh2Hokw.js:21:    startElectron(inlineConfig.root);
<shellId: 58 completed with exit code 0>
```

</details>


---

<sub>3m 53s</sub>

### `bash`

**Confirm ELECTRON_CLI_ARGS forwarded to Electron**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -n "ELECTRON_CLI_ARGS" -B3 -A8 node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js | head -60

<details>
<summary>13 lines</summary>

```
221-    ensureElectronEntryFile(root);
222-    const electronPath = getElectronPath();
223-    const isDev = process.env.NODE_ENV_ELECTRON_VITE === 'development';
224:    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
225-    if (!!process.env.REMOTE_DEBUGGING_PORT && isDev) {
226-        args.push(`--remote-debugging-port=${process.env.REMOTE_DEBUGGING_PORT}`);
227-    }
228-    if (!!process.env.V8_INSPECTOR_PORT && isDev) {
229-        args.push(`--inspect=${process.env.V8_INSPECTOR_PORT}`);
230-    }
231-    if (!!process.env.V8_INSPECTOR_BRK_PORT && isDev) {
232-        args.push(`--inspect-brk=${process.env.V8_INSPECTOR_BRK_PORT}`);
<shellId: 59 completed with exit code 0>
```

</details>


---

<sub>3m 59s</sub>

### `bash`

**Confirm spawn env inheritance in electron-vite**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '232,262p' node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js

<details>
<summary>31 lines</summary>

```
args.push(`--inspect-brk=${process.env.V8_INSPECTOR_BRK_PORT}`);
    }
    if (process.env.NO_SANDBOX === '1') {
        args.push('--no-sandbox');
    }
    const entry = process.env.ELECTRON_ENTRY || '.';
    const ps = spawn(electronPath, [entry].concat(args), { stdio: 'inherit' });
    ps.on('close', process.exit);
    return ps;
}

function findLibEntry(root, scope) {
    for (const name of ['index', scope]) {
        for (const ext of ['js', 'ts', 'mjs', 'cjs']) {
            const entryFile = path.resolve(root, 'src', scope, `${name}.${ext}`);
            if (fs.existsSync(entryFile)) {
                return entryFile;
            }
        }
    }
    return undefined;
}
function findInput(root, scope = 'renderer') {
    const rendererDir = path.resolve(root, 'src', scope, 'index.html');
    if (fs.existsSync(rendererDir)) {
        return rendererDir;
    }
    return '';
}
function processEnvDefine() {
    return {
<shellId: 60 completed with exit code 0>
```

</details>


---

<sub>3m 59s</sub>

### `bash`

**Read tsconfig files and eslint config comments**

$ cd /private/var/tmp/ws/c9859428/hvir && cat tsconfig.json tsconfig.base.json tsconfig.node.json tsconfig.web.json; echo "--- eslint config headings ---"; grep -nE "^\s*//|files:|name:" eslint.config.mjs | head -80

<details>
<summary>124 lines</summary>

```
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}
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
--- eslint config headings ---
8:// --- Seam enforcement (AGENTS.md "Respect the seams") ---------------------
9://
10:// These import bans are how the architecture is enforced mechanically rather
11:// than by convention. Native/host primitives may only be touched inside the
12:// `LocalHost` module; `ipcRenderer` only inside the preload bridge; and
13:// `.spawnPty()` may only be *called* by the PTY supervisor.
39:  name: 'electron',
55:// Both erased and runtime contract dependencies point inward. The two barrels
56:// are compatibility/composition surfaces, never domain dependencies.
92:          // Viewer component names are case-sensitive. Preserve the inherited
93:          // renderer harness ban with its original case-insensitive semantics.
117:    files: ['src/**/*.{ts,tsx,mts,cts}'],
122:  // Type-aware linting for all TypeScript source.
124:    files: ['**/*.{ts,tsx,mts}'],
147:    files: ['src/shared/**/*.{ts,tsx,mts,cts}'],
171:  // The facade is for application compatibility, not an internal contract owner.
173:    files: ['src/main/harness/**/*.{ts,tsx,mts,cts}'],
178:    files: ['src/main/harness/providers/**/*.{ts,tsx,mts,cts}'],
182:    files: [
197:  // PTY internals depend on leaf contracts, never their facade or sibling owners.
199:    files: ['src/main/pty/**/*.{ts,tsx,mts,cts}'],
208:  // Project state and workflows consume the host contract, never concrete host owners.
210:    files: [
223:              name: './project-host',
251:  // Concrete catalogs implement host capabilities without project persistence/workflows.
252:  // The ProjectHost contract cannot depend on any concrete owner it describes.
254:    files: ['src/main/project-host/project-host-catalog.ts'],
272:  // Renderer: React-specific rules.
274:    files: ['src/renderer/**/*.{ts,tsx}'],
284:  // Viewer presentation and effects depend inward, including erased imports.
286:    files: ['src/renderer/src/viewer/**/*.{ts,tsx}'],
295:    files: [
308:    files: ['src/renderer/src/viewer/*.worker.ts'],
316:  // Contracts extracted from concrete consumers remain inward across all import forms.
318:    files: ['src/main/diagnostics/diagnostic-journal.ts'],
325:    files: ['src/main/diagnostics/diagnostic-evidence.ts'],
332:    files: [
342:    files: ['src/main/ipc/authority-router.ts'],
349:    files: [
359:    files: [
375:    files: [
385:    files: ['src/renderer/src/tree/file-action-menu.ts'],
392:    files: ['src/renderer/src/document-review/use-document-review-delivery.ts'],
399:    files: ['src/renderer/src/document-review/document-review-workspace.ts'],
406:    files: ['scripts/project-management/project-token-fields.ts'],
413:    files: ['scripts/project-management/canonical-project-item.ts'],
420:  // Seam exemption: LocalHost owns the host primitives (but still not ipcRenderer).
422:    files: ['src/main/project-host/local-host.ts'],
429:  // Seam exemption: the preload bridge owns ipcRenderer (but still not host primitives).
431:    files: ['src/preload/**/*.ts'],
437:  // Seam exemption: only the supervisor may call host.spawnPty().
439:    files: ['src/main/pty/pty-supervisor.ts'],
445:  // Tests may reach for node builtins directly to arrange fixtures — they are
446:  // not production seams.
448:    files: ['test/**/*.ts'],
455:  // Contributor process launchers may use Node host primitives directly; the
456:  // ProjectHost boundary governs application source under src/.
458:    files: [
492:  // Config / plain-JS files: no type-aware linting.
494:    files: ['**/*.{js,mjs,cjs}'],
<shellId: 61 completed with exit code 0>
```

</details>


---

<sub>4m 8s</sub>

### `bash`

**Run production build to verify it works**

$ cd /private/var/tmp/ws/c9859428/hvir && (time npm run build) > "$TMPDIR/hvir-build.log" 2>&1; echo "build exit: $?" >> "$TMPDIR/hvir-build.log"; tail -40 "$TMPDIR/hvir-build.log"

```
<command started in background with shellId: build>
```


---

<sub>4m 8s</sub>

### `bash`

**Read architecture hotspots script head**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' scripts/architecture-hotspots.mts

<details>
<summary>77 lines</summary>

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
<shellId: 62 completed with exit code 0>
```

</details>


---

<sub>4m 21s</sub>

### `bash`

**Run the architecture budgets report**

$ cd /private/var/tmp/ws/c9859428/hvir && (npm run architecture:report 2>&1 | tail -25)

<details>
<summary>26 lines</summary>

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
<shellId: 63 completed with exit code 0>
```

</details>


---

<sub>4m 21s</sub>

### `bash`

**Read architecture command enforcement path**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '80,200p' scripts/architecture-hotspots.mts

<details>
<summary>64 lines</summary>

```
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
<shellId: 64 completed with exit code 0>
```

</details>


---

<sub>4m 40s</sub>

### `bash`

**Look for tagline wording in HTML and UI**

$ cd /private/var/tmp/ws/c9859428/hvir && cat src/renderer/index.html; echo "--- window title / about ---"; grep -rnE "title:|setAboutPanelOptions|applicationName|aboutPanel" src/main/window/*.ts src/main/index.ts | head -10; echo "--- 'workbench' in user-facing strings ---"; grep -rnoE "[^\"'\`]{0,40}[Ww]orkbench[^\"'\`]{0,40}" src/renderer/src --include=*.tsx | head -12

<details>
<summary>43 lines</summary>

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
--- window title / about ---
src/main/window/electron-renderer-recovery.ts:233:      title: 'hvir recovery failed',
src/main/window/electron-window-manager.ts:375:          title: 'hvir is not responding',
src/main/index.ts:177:          title: 'Choose a folder for hvir',
--- 'workbench' in user-facing strings ---
src/renderer/src/settings/sections/AppearanceSettings.tsx:32:Choose how the workbench and its terminals present your workspac
src/renderer/src/settings/sections/KeybindingsSettings.tsx:26:Override workbench commands with explicit, portable keyboa
src/renderer/src/settings/HarnessProfileDialogs.tsx:9:../workbench/ConfirmationDialog
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:3:../workbench/ConfirmationDialog
src/renderer/src/settings/SettingsDialog.tsx:89:            <span>Workbench preferences</span>
src/renderer/src/App.tsx:34:import { useWorkbenchCommands } from 
src/renderer/src/App.tsx:34:./workbench/use-workbench-commands
src/renderer/src/App.tsx:35:./workbench/active-terminal-focus
src/renderer/src/App.tsx:36:import { useWorkbenchLayout } from 
src/renderer/src/App.tsx:36:./workbench/use-workbench-layout
src/renderer/src/App.tsx:37:import { useWorkbenchOverlays } from 
src/renderer/src/App.tsx:37:./workbench/use-workbench-overlays
<shellId: 65 completed with exit code 0>
```

</details>


---

<sub>4m 40s</sub>

### `bash`

**Inspect the app icon SVG for branding**

$ cd /private/var/tmp/ws/c9859428/hvir && cat build/icon-macos.svg | head -30; echo; ls build/icons-linux

<details>
<summary>37 lines</summary>

```
<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1024"
  height="1024"
  viewBox="0 0 1024 1024"
  role="img"
  aria-labelledby="title description"
>
  <title id="title">hvir macOS application icon</title>
  <desc id="description">
    The hvir mark on a rounded dark tile with transparent outer framing.
  </desc>

  <defs>
    <radialGradient id="tile" cx="48%" cy="43%" r="76%">
      <stop offset="0" stop-color="#171d2b" />
      <stop offset="0.7" stop-color="#0d111b" />
      <stop offset="1" stop-color="#080b12" />
    </radialGradient>
    <linearGradient id="mark-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7795c5" />
      <stop offset="1" stop-color="#6684b6" />
    </linearGradient>
    <linearGradient id="mark-ivory" x1="0" y1="0" x2="0.85" y2="1">
      <stop offset="0" stop-color="#fbf7f2" />
      <stop offset="1" stop-color="#f1e9e2" />
    </linearGradient>
    <filter id="tile-shadow" x="-18%" y="-16%" width="136%" height="140%">
      <feDropShadow

1024x1024.png
128x128.png
16x16.png
256x256.png
32x32.png
512x512.png
64x64.png
<shellId: 66 completed with exit code 0>
```

</details>


---

<sub>4m 40s</sub>

### Notification

Shell "Run production build to verify it works" completed

---

<sub>4m 42s</sub>

### `read_bash`

**Waiting up to 5 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "delay": 5,
  "shellId": "build"
}
```

</details>

<details>
<summary>40 lines</summary>

```
../../out/renderer/assets/stateDiagram-D77RDMKH-C_eJhic5.js            19.03 kB
../../out/renderer/assets/diagram-VSXAHHWV-F_Q3sDd_.js                 21.57 kB
../../out/renderer/assets/dagre-GXQ25YYZ-dBRlY4G-.js                   23.29 kB
../../out/renderer/assets/chunk-SVP7TREG-CYeoXqZi.js                   30.85 kB
../../out/renderer/assets/diagram-VX7I27RA-CUyRpSfu.js                 32.35 kB
../../out/renderer/assets/ishikawaDiagram-5VMMS53U-CqcjOdtI.js         35.07 kB
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
✓ built in 7.00s

real	0m18.430s
user	0m30.483s
sys	0m3.388s
build exit: 0
<shellId: build completed with exit code 0>
```

</details>


---

<sub>4m 59s</sub>

### `bash`

**Read the harness profile shared types**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,120p' src/shared/harness-profile.ts

<details>
<summary>102 lines</summary>

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
<shellId: 67 completed with exit code 0>
```

</details>


---

<sub>4m 59s</sub>

### `bash`

**Check for outbound network use and editing**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "--- outbound network primitives in src (excluding smoke) ---"; grep -rnE "net\.fetch|\bfetch\(|https?\.request|XMLHttpRequest|autoUpdater|electron-updater|crashReporter|net\.request|new WebSocket" src --include=*.ts --include=*.tsx | grep -v "src/main/smoke/" | head -20; echo "--- editable viewer? ---"; grep -rnE "EditorView\.editable|readOnly|saveFile|writeFile" src/renderer/src/viewer/SourceView.tsx src/renderer/src/viewer/FileViewer.tsx | head -12

<details>
<summary>19 lines</summary>

```
--- outbound network primitives in src (excluding smoke) ---
src/workers/git-worker.ts:79:      result = await engine.fetch(root)
src/main/ipc/project-commands.ts:70:    fetchGit: (root) => git.fetch(root),
src/main/git/git-engine.ts:62:  fetch(workspaceRoot: HostPath): Promise<void> {
src/main/git/git-engine.ts:63:    return this.branchCapability.fetch(workspaceRoot)
src/main/git/mutation-coordinator.ts:31:  fetch(root: HostPath): Promise<void>
src/main/git/mutation-coordinator.ts:114:  fetch(root: HostPath): Promise<ProjectState> {
src/main/git/mutation-coordinator.ts:124:        await this.options.worker.fetch(root)
src/main/git/git-branches.ts:85:  async fetch(workspaceRoot: HostPath): Promise<void> {
--- editable viewer? ---
src/renderer/src/viewer/SourceView.tsx:23:  readOnly = false,
src/renderer/src/viewer/SourceView.tsx:39:  readonly readOnly?: boolean
src/renderer/src/viewer/SourceView.tsx:83:          EditorState.readOnly.of(readOnly),
src/renderer/src/viewer/SourceView.tsx:84:          EditorView.editable.of(!readOnly),
src/renderer/src/viewer/SourceView.tsx:113:                if (!readOnly) callbacks.current.onSave()
src/renderer/src/viewer/SourceView.tsx:120:            if (update.docChanged && !applyingExternal.current && !readOnly) {
src/renderer/src/viewer/SourceView.tsx:159:  }, [pathKey, readOnly])
src/renderer/src/viewer/FileViewer.tsx:473:      readOnly={Boolean(tab.externalWorkspaceRoot)}
<shellId: 68 completed with exit code 0>
```

</details>


---

<sub>5m 8s</sub>

### `bash`

**Read diagnostic report dialog user-facing text**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE ">[A-Z][^<>{}]{12,160}<|\`[A-Z][^\`]{12,160}\`|'[A-Z][^']{20,160}'" src/renderer/src/diagnostics/DiagnosticReportDialog.tsx | head -30

<details>
<summary>28 lines</summary>

```
22:  const [message, setMessage] = useState('Preparing bounded local report…')
40:        setMessage('Review every structured field before Copy or Save.')
76:        'Screenshot unavailable: the owned-surface mask inventory exceeded its bound.',
81:    setMessage('Capturing once and masking owned content surfaces…')
93:        setMessage('Screenshot included. Inspect the exact image before Copy or Save.')
111:        ? 'Writing the reviewed artifact to the clipboard…'
112:        : 'Choose an explicit local destination…',
126:            ? 'Save cancelled; the temporary report is unchanged.'
128:              ? 'Exact reviewed artifact copied.'
129:              : 'Exact reviewed artifact saved.',
177:        <h2 id="diagnostic-report-title">Review diagnostic report</h2>
178:        <p>Local, bounded, and never sent to a harness automatically.</p>
186:            <h3 id="diagnostic-report-structured-title">Exact structured fields</h3>
188:              <dt>Current lifetime</dt>
192:              <dt>Preceding lifetime</dt>
205:            <h3 id="diagnostic-report-image-title">Optional screenshot</h3>
230:                  <dt>Masked surfaces</dt>
235:              <p>No screenshot is captured by default.</p>
240:                : 'Capture masked screenshot'}
279:    return 'Screenshot capture failed; the structured report is unchanged.'
280:  if (reason === 'report-too-large') return 'Report exceeded its fixed local size bound.'
282:    return 'This report belongs to an earlier renderer generation.'
283:  if (reason === 'report-not-found') return 'The temporary report is no longer available.'
285:    return 'The report request was rejected by its closed schema.'
286:  if (reason === 'action-unavailable') return 'The requested local action is unavailable.'
288:    return 'Local evidence changed while the report was being prepared. Try again.'
289:  return 'Local diagnostic storage is unavailable.'
<shellId: 69 completed with exit code 0>
```

</details>


---

<sub>5m 8s</sub>

### `bash`

**Read diagnostic report storage and actions**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/main/diagnostics/diagnostic-report-storage.ts; echo ----; sed -n '1,50p' src/main/diagnostics/electron-diagnostic-report-actions.ts

<details>
<summary>100 lines</summary>

```
import {
  DIAGNOSTIC_REPORT_RETENTION_HOURS,
  MAX_DIAGNOSTIC_REPORT_BYTES,
  isDiagnosticOpaqueId,
  joinHostPath,
  type DiagnosticReportArtifact,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import { serializeDiagnosticReportArtifact } from '../../shared'

const REPORT_PREFIX = 'hvir-diagnostic-report-'
const REPORT_SUFFIX = '.json'
const MAX_TEMPORARY_REPORTS = 16

/** App-local bounded temporary report storage; paths never enter report content. */
export class DiagnosticReportStorage {
  private mutation = Promise.resolve()

  constructor(
    private readonly host: Pick<
      ProjectHost,
      'readdir' | 'stat' | 'writeFile' | 'removeFile'
    >,
    private readonly root: HostPath,
    private readonly now: () => number = Date.now,
  ) {}

  async write(reportId: string, artifact: DiagnosticReportArtifact): Promise<void> {
    const serialized = serializeDiagnosticReportArtifact(artifact)
    if (Buffer.byteLength(serialized, 'utf8') > MAX_DIAGNOSTIC_REPORT_BYTES) {
      throw new ReportStorageTooLargeError()
    }
    const path = this.file(reportId)
    await this.mutate(async () => {
      await this.host.writeFile(path, serialized)
      try {
        await this.cleanupUnlocked(path)
      } catch (error) {
        await this.removeUnlocked(path).catch(() => undefined)
        throw error
      }
    })
  }

  async remove(reportId: string): Promise<void> {
    await this.mutate(() => this.removeUnlocked(this.file(reportId)))
  }

  async cleanup(): Promise<void> {
    await this.mutate(() => this.cleanupUnlocked())
  }

  private async cleanupUnlocked(protectedPath?: HostPath): Promise<void> {
    const cutoff = this.now() - DIAGNOSTIC_REPORT_RETENTION_HOURS * 60 * 60 * 1_000
    const entries = (await this.host.readdir(this.root))
      .filter((entry) => entry.type === 'file' && isReportFilename(entry.name))
      .map((entry) => ({ name: entry.name, path: joinHostPath(this.root, entry.name) }))
    const inspected = await Promise.all(
      entries.map(async (entry) => {
----
import { createHash } from 'node:crypto'

import { BrowserWindow, clipboard, dialog, nativeImage } from 'electron'

import {
  MAX_DIAGNOSTIC_REPORT_SCREENSHOT_BYTES,
  localPath,
  type DiagnosticCaptureMask,
  type DiagnosticReportScreenshot,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import type { RendererOwner } from '../renderer-resource-scopes'

export interface DiagnosticReportActions {
  capture(
    owner: RendererOwner,
    masks: readonly DiagnosticCaptureMask[],
  ): Promise<DiagnosticReportScreenshot>
  copy(serialized: string, screenshot?: DiagnosticReportScreenshot): void
  selectSave(owner: RendererOwner): Promise<HostPath | undefined>
  writeSave(path: HostPath, serialized: string): Promise<void>
}

/** Electron-only screenshot, clipboard, and explicit local-save edge. */
export class ElectronDiagnosticReportActions implements DiagnosticReportActions {
  constructor(private readonly host: Pick<ProjectHost, 'writeFile'>) {}

  async capture(
    owner: RendererOwner,
    masks: readonly DiagnosticCaptureMask[],
  ): Promise<DiagnosticReportScreenshot> {
    const window = windowFor(owner)
    const image = await window.webContents.capturePage()
    const size = image.getSize(1)
    if (size.width < 1 || size.height < 1) throw new Error('Empty capture')
    const bitmap = image.toBitmap({ scaleFactor: 1 })
    const viewport = window.getContentBounds()
    const masked = maskDiagnosticBitmap(
      bitmap,
      size.width,
      size.height,
      viewport.width,
      viewport.height,
      masks,
    )
    const png = nativeImage
      .createFromBitmap(masked, {
        width: size.width,
        height: size.height,
<shellId: 70 completed with exit code 0>
```

</details>


---

<sub>5m 13s</sub>

### Copilot

Now let me verify terminal-level features (recovery, fork, split, move, attention, semantic navigation) by reading the relevant UI text.

---

<sub>5m 15s</sub>

### `bash`

**Read terminal recovery and settings UI text**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -hnE ">[A-Z][^<>{}]{10,200}<|'[A-Z][^']{18,200}'" src/renderer/src/terminal/TerminalRecoveryDialog.tsx src/renderer/src/settings/sections/TerminalSettings.tsx | head -40

<details>
<summary>18 lines</summary>

```
117:        <h2 id="terminal-recovery-title">Restore terminals</h2>
267:      return 'Version incompatible'
269:      return 'Capability unavailable'
271:      return 'Authentication needed'
29:          <legend>Presentation</legend>
31:            <span>Cursor shape</span>
43:              <option value="hollow-block">Hollow block</option>
49:            <span>Cursor blinking</span>
61:                <option value="terminal">Terminal-controlled</option>
62:                <option value="blinking">Blinking default</option>
63:                <option value="steady">Steady default</option>
72:            <span>Font ligatures</span>
93:          <span>Message submission</span>
111:          <span>Idle-after-output threshold</span>
133:          <span>On app start</span>
144:            <option value="prompt">Ask which terminals to restore</option>
145:            <option value="auto">Restore all terminals automatically</option>
<shellId: 71 completed with exit code 0>
```

</details>


---

<sub>5m 15s</sub>

### `bash`

**Extract terminal menu action labels**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -hnoE "label: '[^']+'|title: '[^']+'|'(Fork|Resume|Split|Move|Search|Copy|Paste|Rename|Close|Restart|Open)[^']{0,60}'" src/renderer/src/terminal/TerminalContextMenu.tsx src/renderer/src/terminal/harness-launch-menu.ts src/renderer/src/terminal/TerminalWorkspaceControls.tsx src/renderer/src/terminal/TerminalRail.tsx 2>/dev/null | sort -u | head -40

```
123:'Move terminal, new worktree available'
124:'Move terminal to another worktree'
<shellId: 72 completed with exit code 0>
```


---

<sub>5m 18s</sub>

### `bash`

**Check fork UI and composer submit mode**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "Fork|fork" src/renderer/src/terminal/*.tsx src/renderer/src/terminal/harness-launch-menu.ts src/renderer/src/terminal/terminal-fork-policy.ts | head -14; echo "--- composer submit mode ---"; sed -n '1,40p' src/shared/composer-submit.ts

<details>
<summary>17 lines</summary>

```
src/renderer/src/terminal/TerminalContextMenu.tsx:17:import type { TerminalForkAvailability } from './terminal-fork-policy'
src/renderer/src/terminal/TerminalContextMenu.tsx:24:  readonly onFork: () => void
src/renderer/src/terminal/TerminalContextMenu.tsx:25:  readonly forkAvailability: TerminalForkAvailability
src/renderer/src/terminal/TerminalContextMenu.tsx:35:  onFork,
src/renderer/src/terminal/TerminalContextMenu.tsx:36:  forkAvailability,
src/renderer/src/terminal/TerminalContextMenu.tsx:255:            disabled={!forkAvailability.available || pending !== undefined}
src/renderer/src/terminal/TerminalContextMenu.tsx:256:            title={forkAvailability.available ? undefined : forkAvailability.reason}
src/renderer/src/terminal/TerminalContextMenu.tsx:258:            onClick={() => runWorkspaceAction(onFork)}
src/renderer/src/terminal/TerminalContextMenu.tsx:260:            <span>Fork Conversation to New Terminal</span>
src/renderer/src/terminal/TerminalContextMenu.tsx:261:            {!forkAvailability.available ? (
src/renderer/src/terminal/TerminalContextMenu.tsx:263:                {forkAvailability.reason}
src/renderer/src/terminal/TerminalDeck.tsx:50:  onForkIdentity,
src/renderer/src/terminal/TerminalDeck.tsx:51:  onForkStartFailed,
src/renderer/src/terminal/TerminalDeck.tsx:59:  onFork,
--- composer submit mode ---
export type ComposerSubmitMode = 'enter' | 'ctrl-enter'
<shellId: 73 completed with exit code 0>
```

</details>


---

<sub>5m 18s</sub>

### `bash`

**Read terminal settings message submission section**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '85,130p' src/renderer/src/settings/sections/TerminalSettings.tsx

<details>
<summary>47 lines</summary>

```
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
<shellId: 74 completed with exit code 0>
```

</details>


---

<sub>5m 23s</sub>

### `bash`

**List Git worker operation types**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "export const GIT_[A-Z_]+_TYPE" src/shared/*.ts | head -30

<details>
<summary>15 lines</summary>

```
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
<shellId: 75 completed with exit code 0>
```

</details>


---

<sub>5m 23s</sub>

### `bash`

**List Git mutation operations and worktree commands**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "^\s+(async )?[a-zA-Z]+\(" src/main/git/mutation-coordinator.ts | head -30; echo ---; grep -rnE "worktree (add|remove)|'worktree'" src/main/git/*.ts | head -10

<details>
<summary>29 lines</summary>

```
16:  state(): ProjectState
17:  projectById(projectId: string): RegisteredProjectState | undefined
18:  reconcileWorktrees(
25:  pruneWorktrees(root: HostPath): Promise<WorktreeDiscovery>
26:  switchBranch(
31:  fetch(root: HostPath): Promise<void>
32:  pull(root: HostPath, relatedWorktreeRoots: readonly HostPath[]): Promise<void>
37:  refresh(projectId: string): Promise<ProjectState>
38:  scheduleRefresh(projectId: string): void
39:  coalesceProjectOperation(
43:  invalidateProject(projectId: string): void
44:  settleProject(projectId: string): Promise<void>
45:  stopWatch(): Promise<void>
46:  replaceWatch(target?: ProjectWatchTarget): Promise<void>
54:    grant(request: GitMutationGrantRequest): GitMutationGrant
62:  constructor(private readonly options: GitMutationCoordinatorOptions) {}
64:  pruneWorktrees(projectId: string): Promise<ProjectState> {
74:  switchBranch(root: HostPath, branch: string): Promise<ProjectState> {
114:  fetch(root: HostPath): Promise<ProjectState> {
132:  pull(root: HostPath): Promise<ProjectState> {
---
src/main/git/git-parsers.ts:45:    if (key === 'worktree') {
src/main/git/git-worktrees.ts:10:    const args = ['worktree', 'list', '--porcelain', '-z'] as const
src/main/git/git-worktrees.ts:14:        const legacyArgs = ['worktree', 'list', '--porcelain'] as const
src/main/git/git-worktrees.ts:38:    const args = ['worktree', 'prune', '--expire', 'now', '--verbose'] as const
src/main/git/mutation-authorization.ts:72:const PRUNE_ARGS = ['worktree', 'prune', '--expire', 'now', '--verbose'] as const
src/main/git/worker-host-broker.ts:56:    'worktree',
src/main/git/worker-host-broker.ts:265:    case 'worktree':
<shellId: 76 completed with exit code 0>
```

</details>


---

<sub>5m 29s</sub>

### Copilot

Git support is read-heavy with a narrow mutation set (switch branch, fetch, pull, prune worktrees). Let me double check that there's no stage/commit UI so I don't over-claim.

---

<sub>5m 29s</sub>

### `bash`

**Verify absence of stage/commit/push Git operations**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "'(add|commit|stash|reset|checkout|push|merge|rebase|restore)'" src/main/git src/workers src/main/ipc --include=*.ts | head -10; echo "(empty above = no stage/commit/push operations in the Git engine)"; echo "--- authorization allowlist ---"; sed -n '55,120p' src/main/git/mutation-authorization.ts

<details>
<summary>65 lines</summary>

```
src/main/git/git-history.ts:69:      if (objectType === 'commit') tips.push(objectName)
src/main/git/git-history.ts:70:      else if (peeledType === 'commit') tips.push(peeledName)
(empty above = no stage/commit/push operations in the Git engine)
--- authorization allowlist ---
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
  }

  grant(request: GitMutationGrantRequest): GitMutationGrant {
    if (this.disposed) throw new Error('Git mutation authorization is disposed')
    validateGrantRequest(request)
    this.purge()
    const key = grantKey(request)
    if (this.grantByKey.has(key)) {
      throw new Error(`Git ${request.kind} denied: an exact grant is already active`)
    }
    const id = this.nextId++
    const record = {
      id,
      key,
      request,
      expiresAt: this.now() + this.grantTtlMs,
    }
    this.grants.set(id, record)
    this.grantByKey.set(key, id)
    this.history.delete(key)
<shellId: 77 completed with exit code 0>
```

</details>


---

<sub>5m 35s</sub>

### Copilot

Let me confirm which Linux distributions the release pipeline actually accepts, and whether Windows is handled anywhere.

---

<sub>5m 37s</sub>

### `bash`

**Read release workflow Linux/macOS matrices**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '176,200p;250,282p;304,335p;376,392p' .github/workflows/release.yml

<details>
<summary>100 lines</summary>

```
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
<shellId: 78 completed with exit code 0>
```

</details>


---

<sub>5m 37s</sub>

### `bash`

**Search for Windows handling and platform branches**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "win32|'windows'|Windows" src --include=*.ts --include=*.tsx | grep -v "src/main/smoke/" | head -10; echo "--- platform branches ---"; grep -rnoE "process\.platform ?[!=]==? ?'[a-z0-9]+'|platform === '[a-z0-9]+'" src --include=*.ts --include=*.tsx | grep -v "src/main/smoke/" | sort | uniq -c | sort -rn | head -12

<details>
<summary>24 lines</summary>

```
src/shared/diagnostic-report.ts:60:    readonly platform: 'linux' | 'macos' | 'windows' | 'other'
src/shared/diagnostic-report.ts:274:    ['linux', 'macos', 'windows', 'other'].includes(String(value.platform)) &&
src/main/renderer-event-publisher.ts:11:  readonly toWindows = <E extends IpcEventChannel>(
src/main/renderer-event-publisher.ts:15:    for (const window of BrowserWindow.getAllWindows()) {
src/main/renderer-event-publisher.ts:26:    const window = BrowserWindow.getAllWindows().find(
src/main/project-host/local-host.ts:147:        (process.platform === 'win32' ? 'powershell.exe' : '/bin/bash'),
src/main/project-host/local-host.ts:168:        detached: process.platform !== 'win32',
src/main/project-host/local-host.ts:928:  if (process.platform === 'win32' || child.pid === undefined) {
src/main/window/electron-window-manager.ts:398:        BrowserWindow.getAllWindows().length === 0 &&
src/main/diagnostics/electron-diagnostic-report-actions.ts:134:  const window = BrowserWindow.getAllWindows().find(
--- platform branches ---
   1 src/main/window/electron-window-manager.ts:397:process.platform === 'darwin'
   1 src/main/window/electron-window-manager.ts:230:process.platform === 'darwin'
   1 src/main/window/electron-window-manager.ts:205:process.platform === 'darwin'
   1 src/main/project-host/local-host.ts:944:process.platform !== 'linux'
   1 src/main/project-host/local-host.ts:944:process.platform !== 'darwin'
   1 src/main/project-host/local-host.ts:928:process.platform === 'win32'
   1 src/main/project-host/local-host.ts:168:process.platform !== 'win32'
   1 src/main/project-host/local-host.ts:147:process.platform === 'win32'
   1 src/main/project-file-operations/electron-external-move-picker.ts:24:platform === 'darwin'
   1 src/main/project-file-operations/clipboard-file-list.ts:27:platform === 'linux'
   1 src/main/project-file-operations/clipboard-file-list.ts:25:platform === 'darwin'
   1 src/main/index.ts:466:process.platform !== 'darwin'
<shellId: 79 completed with exit code 0>
```

</details>


---

<sub>5m 48s</sub>

### Copilot

Let me verify how HTML preview is isolated and how large files / other formats are handled in the viewer, so my descriptions of them are precise.

---

<sub>5m 50s</sub>

### `bash`

**Check HTML preview isolation and large-file policy**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "sandbox|iframe|hvir-preview" src/renderer/src/viewer/*.tsx src/main/html-preview-protocol.ts | head -14; echo "--- large file policy ---"; sed -n '1,60p' src/shared/viewer-workload-policy.ts

<details>
<summary>60 lines</summary>

```
src/renderer/src/viewer/RenderedView.tsx:290:    <iframe
src/renderer/src/viewer/RenderedView.tsx:293:      sandbox={HTML_SANDBOX}
src/main/html-preview-protocol.ts:18: * The iframe still omits allow-same-origin, so each document receives an
--- large file policy ---
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
<shellId: 80 completed with exit code 0>
```

</details>


---

<sub>5m 50s</sub>

### `bash`

**Find plist usage and extra viewer kinds**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "plist|bplist" src --include=*.ts --include=*.tsx -l | head; echo "--- binary / other viewer kinds ---"; grep -rnE "kind: '(binary|large|image|plist|notebook|pdf)" src/renderer/src/viewer src/shared --include=*.ts --include=*.tsx | head -10

```
src/main/project-file-operations/clipboard-file-list.ts
--- binary / other viewer kinds ---
<shellId: 81 completed with exit code 0>
```


---

<sub>6m 4s</sub>

### Copilot

Let me read the main layout portion of `App.tsx` to describe the workbench layout correctly (panel arrangement, terminal modes).

---

<sub>6m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/c9859428/hvir/src/renderer/src/App.tsx (lines 296-420)

<details>
<summary>125 lines</summary>

```
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
        onClose={closeTab}
        onPin={pinTab}
        onReorder={reorderViewerTabs}
        onMoveToPane={moveTabToPane}
        split={viewerSplit}
        onSplit={openViewerSplit}
        onClosePane={pane === 'secondary' ? closeViewerSplit : undefined}
        graphOpen={graphPane && gitGraphOpen}
        graphActive={graphPane && gitGraphActive}
        onActivateGraph={activateGitGraph}
        onCloseGraph={closeGitGraph}
        webTabs={
          pane === 'primary'
            ? rootWebViews.map((view) => ({ id: view.id, title: view.title }))
            : undefined
        }
        activeWebId={pane === 'primary' && webViewActive ? activeWebViewId : undefined}
        onActivateWeb={activateWebView}
        onCloseWeb={closeWebView}
      />
      {graphPane && gitGraphOpen ? (
        <div className="workspace-view" hidden={!gitGraphActive}>
          <GitGraphView
            root={root}
            refreshVersion={gitVersion}
            connectionState={connectionState}
            requestedHash={gitGraphRequest.hash}
            requestSerial={gitGraphRequest.serial}
            onOpen={(path, base, revision) => openFile(path, true, 'git', base, revision)}
          />
        </div>
      ) : null}
      {pane === 'primary' ? (
        <WebPaneStack
          views={webViews}
          root={root}
          active={webViewActive}
          activeId={activeWebViewId}
          focused={webViewFocused}
          onToggleFocus={() => setWebViewFocused((focused) => !focused)}
          onTitle={setWebViewTitle}
          onBlockedNavigation={followBlockedNavigation}
          onOpenBrowser={openWebViewInBrowser}
          onRevealTerminal={(view) => void revealSourceTerminal(view)}
        />
      ) : null}
      <div
        className="workspace-view"
        hidden={(graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)}
      >
        {activeWorkspace?.missing ? (
          <MissingWorkspaceNotice root={root} />
        ) : (
          <FileViewer
            key={`${pane}:${paneTab?.id ?? 'empty'}`}
            tab={paneTab}
            gitRefreshVersion={gitVersion}
            onMode={(mode, at) => paneTab && setViewerMode(paneTab.id, mode, at)}
            onDiffBase={(diffBase) => paneTab && setViewerDiffBase(paneTab.id, diffBase)}
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
```

</details>


---

<sub>6m 4s</sub>

### `bash`

**Read terminal layout controls and layout policy**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/renderer/src/workbench/TerminalLayoutControls.tsx; echo ----; sed -n '1,70p' src/renderer/src/workbench/workbench-layout-policy.ts

<details>
<summary>71 lines</summary>

```
import type { ReactElement } from 'react'

import { focusActiveTerminalAfterLayout } from './active-terminal-focus'
import type { TerminalLayoutMode } from './workspace-pane-state'

interface TerminalLayoutControlsProps {
  readonly mode: TerminalLayoutMode
  readonly onMode: (mode: TerminalLayoutMode) => void
}

export function TerminalLayoutControls({
  mode,
  onMode,
}: TerminalLayoutControlsProps): ReactElement {
  const terminalLabel = mode === 'maximized' ? 'Restore split view' : 'Maximize terminal'
  const viewerLabel =
    mode === 'collapsed' ? 'Restore split view' : 'Maximize viewer and minimize terminal'
  const applyMode = (next: TerminalLayoutMode): void => {
    onMode(next)
    if (next !== 'collapsed') focusActiveTerminalAfterLayout()
  }

  return (
    <div className="terminal-mode-controls" role="group" aria-label="Terminal layout">
      <button
        type="button"
        className="terminal-focus-toggle"
        data-resizer-action
        aria-label={terminalLabel}
        aria-pressed={mode === 'maximized'}
        title={terminalLabel}
        onDoubleClick={(event) => event.stopPropagation()}
        onClick={() => applyMode(mode === 'maximized' ? 'restored' : 'maximized')}
      >
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path
            d={
              mode === 'maximized'
                ? 'M3 5.5 8 10l5-4.5'
                : 'M3 11.5 8 7l5 4.5M3 7.5 8 3l5 4.5'
            }
          />
        </svg>
      </button>
      <button
        type="button"
        className="terminal-collapse-toggle"
        data-resizer-action
        aria-label={viewerLabel}
        aria-pressed={mode === 'collapsed'}
        title={viewerLabel}
        onDoubleClick={(event) => event.stopPropagation()}
        onClick={() => applyMode(mode === 'collapsed' ? 'restored' : 'collapsed')}
      >
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path
            d={
              mode === 'collapsed'
                ? 'M3 10.5 8 6l5 4.5'
                : 'M3 4.5 8 9l5-4.5M3 8.5 8 13l5-4.5'
----
import { PANE_DIVIDER_SIZE } from '../layout/split-layout-policy'

const VIEWER_MIN_HEIGHT = 180
const TERMINAL_MIN_HEIGHT = 160

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function fitTerminalHeight(height: number, workbenchHeight: number): number {
  const max = Math.max(
    TERMINAL_MIN_HEIGHT,
    workbenchHeight - PANE_DIVIDER_SIZE - VIEWER_MIN_HEIGHT,
  )
  return clamp(height, TERMINAL_MIN_HEIGHT, max)
}
<shellId: 82 completed with exit code 0>
```

</details>


---

<sub>6m 11s</sub>

### Copilot

Let me verify what "attention" means in the product (idle detection, bell/notification), since it's a user-visible feature I want to describe correctly.

---

<sub>6m 12s</sub>

### `bash`

**Read terminal attention model and badge**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,70p' src/shared/terminal-attention.ts; echo ----; sed -n '1,50p' src/main/attention-badge.ts

<details>
<summary>48 lines</summary>

```
/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
export type TerminalAttentionState = 'working' | 'bell' | 'idle'
----
/** Quiet OS-level aggregation for actionable terminal attention. */
export class AttentionBadge {
  private readonly owners = new Map<string, { count: number; focused: boolean }>()
  private lastRendered = -1
  private failed = false

  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}

  update(ownerId: number, count: number, ownerGeneration = 0): void {
    const key = ownerKey(ownerId, ownerGeneration)
    const current = this.owners.get(key) ?? { count: 0, focused: false }
    this.owners.set(key, { ...current, count: cleanCount(count) })
    this.render()
  }

  setFocused(ownerId: number, focused: boolean, ownerGeneration = 0): void {
    const key = ownerKey(ownerId, ownerGeneration)
    const current = this.owners.get(key) ?? { count: 0, focused: false }
    this.owners.set(key, { ...current, focused })
    this.render()
  }

  remove(ownerId: number, ownerGeneration?: number): void {
    if (ownerGeneration === undefined) {
      for (const key of this.owners.keys()) {
        if (key.startsWith(`${ownerId}:`)) this.owners.delete(key)
      }
    } else {
      this.owners.delete(ownerKey(ownerId, ownerGeneration))
    }
    this.render()
  }

  clear(): void {
    this.owners.clear()
    this.render()
  }

  private render(): void {
    const focused = [...this.owners.values()].some((owner) => owner.focused)
    const count = focused
      ? 0
      : Math.min(
          99,
          [...this.owners.values()].reduce((total, owner) => total + owner.count, 0),
        )
    if (count === this.lastRendered) return
    this.lastRendered = count
    if (this.failed) return
    try {
<shellId: 83 completed with exit code 0>
```

</details>


---

<sub>6m 12s</sub>

### `bash`

**Read renderer terminal attention logic**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/renderer/src/terminal/terminal-attention.ts

<details>
<summary>52 lines</summary>

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
<shellId: 84 completed with exit code 0>
```

</details>


---

<sub>6m 18s</sub>

### Copilot

Let me read the headers of the SSH acceptance scripts and package-smoke scripts so the scripts table describes them accurately.

---

<sub>6m 19s</sub>

### `bash`

**Read headers of acceptance/package smoke scripts**

$ cd /private/var/tmp/ws/c9859428/hvir && for f in scripts/run-macos-ssh-acceptance.sh scripts/record-macos-ssh-identity.sh scripts/run-linux-package-smoke.sh scripts/run-macos-package-smoke.sh; do echo "=========== $f ==========="; sed -n '1,30p' "$f"; done

<details>
<summary>112 lines</summary>

```
=========== scripts/run-macos-ssh-acceptance.sh ===========
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
=========== scripts/record-macos-ssh-identity.sh ===========
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ "$(uname -s):$(uname -m)" != 'Darwin:arm64' ]]; then
  echo "macOS SSH identity evidence requires macOS arm64, found $(uname -s) $(uname -m)." >&2
  exit 1
fi
if [[ ! "${MACOS_TEAM_ID:-}" =~ ^[A-Z0-9]{10}$ ]]; then
  echo 'macOS SSH identity evidence requires a ten-character MACOS_TEAM_ID.' >&2
  exit 1
fi

acceptance_app=
release_app=
while [[ $# -gt 0 ]]; do
  case "$1" in
  --acceptance)
    [[ $# -ge 2 ]] || {
      echo '--acceptance requires an application bundle path.' >&2
      exit 1
    }
    acceptance_app=$2
    shift 2
    ;;
  --release)
    [[ $# -ge 2 ]] || {
      echo '--release requires an application bundle path.' >&2
      exit 1
=========== scripts/run-linux-package-smoke.sh ===========
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
source_checkout=$PWD

if [[ "$#" -gt 1 ]]; then
  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
  exit 2
fi
software_rendering=0
case "${1:-}" in
'') ;;
--software-rendering) software_rendering=1 ;;
*)
  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
  exit 2
  ;;
esac

if [[ "${HVIR_LINUX_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
  echo 'Set HVIR_LINUX_PACKAGE_ACCEPTANCE=1 on a disposable compatible Linux host.' >&2
  exit 2
fi

if [[ "$(id -u)" -eq 0 ]]; then
  echo 'Run native package acceptance as an unprivileged user with sudo access.' >&2
  exit 2
fi
apparmor_integration_required=0
=========== scripts/run-macos-package-smoke.sh ===========
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
source_checkout=$PWD

if [[ "${HVIR_MACOS_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
  echo 'Refusing to modify native package state without HVIR_MACOS_PACKAGE_ACCEPTANCE=1.' >&2
  exit 1
fi
if [[ "$(uname -s):$(uname -m)" != 'Darwin:arm64' ]]; then
  echo "Native macOS package acceptance requires macOS arm64, found $(uname -s) $(uname -m)." >&2
  exit 1
fi
if [[ "${CI:-}" != 'true' || "${GITHUB_ACTIONS:-}" != 'true' ]]; then
  echo 'Native macOS package acceptance is restricted to an ephemeral GitHub Actions host.' >&2
  exit 1
fi
case "${HVIR_MACOS_PACKAGE_MODE:-}" in
structural | signed) package_mode=$HVIR_MACOS_PACKAGE_MODE ;;
*)
  echo 'HVIR_MACOS_PACKAGE_MODE must be structural or signed.' >&2
  exit 1
  ;;
esac

package_id='dev.hvir.app'
application='/Applications/hvir.app'
executable="$application/Contents/MacOS/hvir"
command='/usr/local/bin/hvir'
<shellId: 85 completed with exit code 0>
```

</details>


---

<sub>6m 19s</sub>

### `bash`

**Read real-host SSH acceptance script and workflow**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' scripts/run-real-host-ssh-acceptance.mts; echo ----; sed -n '1,40p' .github/workflows/real-host-ssh.yml

<details>
<summary>95 lines</summary>

```
import { randomUUID } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import type { Duplex } from 'node:stream'

import {
  asHarnessProviderId,
  contextStatusHarnessSnapshot,
  hostPath,
  joinHostPath,
  type Disposer,
  type HostPath,
} from '../src/shared/index.ts'
import {
  plainShellProvider,
  type HarnessProvider,
  type HarnessTelemetryContext,
} from '../src/main/harness/harness-provider.ts'
import type {
  ExecStreamHandle,
  ProjectHost,
} from '../src/main/project-host/project-host.ts'
import { SshHost } from '../src/main/project-host/ssh-host.ts'
import {
  LocalSshIdentitySource,
  type SshIdentitySource,
} from '../src/main/project-host/ssh-identity-source.ts'
import { PtySupervisor } from '../src/main/pty/pty-supervisor.ts'
import {
  REAL_HOST_SSH_PHASES,
  createRealHostSshFailureEvidence,
  readRealHostSshConfiguration,
  writeRealHostSshFailureEvidence,
  type RealHostSshConfiguration,
  type RealHostSshFailureEvidence,
  type RealHostSshFailureReason,
  type RealHostSshPhase,
  type RealHostSshResourceEvidence,
} from './real-host-ssh-contract.mts'

const OPERATION_TIMEOUT_MS = 15_000
const OWNER_ID = 1
const PTY_MARKER = 'HVIR_REAL_HOST_PTY_OK'
const PROVIDER_MARKER = 'HVIR_REAL_HOST_PROVIDER_OBSERVER_OK'
const HTTP_STATUS = 'HTTP/1.1 204 No Content'
const LOOPBACK_SERVER = String.raw`
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind(("127.0.0.1", 0))
server.listen(1)
server.settimeout(15)
print("PORT %d" % server.getsockname()[1], flush=True)
try:
    connection, _ = server.accept()
    connection.settimeout(5)
    connection.recv(4096)
    connection.sendall(b"HTTP/1.1 204 No Content\r\nConnection: close\r\nContent-Length: 0\r\n\r\n")
    connection.close()
finally:
----
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
          REAL_HOST_KEY: ${{ secrets.HVIR_REAL_SSH_HOST_KEY }}
          REAL_ROOT_PARENT: ${{ secrets.HVIR_REAL_SSH_ROOT_PARENT }}
          REAL_PRIVATE_KEY: ${{ secrets.HVIR_REAL_SSH_PRIVATE_KEY }}
        run: |
          set +x
          present=0
          missing=0
          for value in \
            "$REAL_HOST" \
            "$REAL_PORT" \
            "$REAL_USER" \
            "$REAL_HOST_KEY" \
<shellId: 86 completed with exit code 0>
```

</details>


---

<sub>6m 24s</sub>

### Copilot

Let me skim the remaining workflows' triggers so the CI/release section is accurate.

---

<sub>6m 24s</sub>

### `bash`

**Skim workflow names and triggers**

$ cd /private/var/tmp/ws/c9859428/hvir && for f in .github/workflows/*.yml; do echo "=========== $f ==========="; sed -n '1,22p' "$f" | grep -vE "^\s*#" ; done 2>&1 | head -230

<details>
<summary>197 lines</summary>

```
=========== .github/workflows/ci.yml ===========
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
=========== .github/workflows/codeql.yml ===========
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
=========== .github/workflows/ghostty-web-update.yml ===========
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

=========== .github/workflows/lock-tracker-conversations.yml ===========
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
=========== .github/workflows/macos-package-release.yml ===========
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
=========== .github/workflows/project-kind.yml ===========
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
=========== .github/workflows/project-pr-planning.yml ===========
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

=========== .github/workflows/real-host-ssh.yml ===========
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
=========== .github/workflows/release-pr-merged.yml ===========
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
=========== .github/workflows/release.yml ===========
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
<shellId: 87 completed with exit code 0>
```

</details>


---

<sub>6m 24s</sub>

### `bash`

**Read dependabot config and release workflow inputs**

$ cd /private/var/tmp/ws/c9859428/hvir && cat .github/dependabot.yml; sed -n '1,28p' .github/workflows/release.yml

<details>
<summary>86 lines</summary>

```
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
<shellId: 88 completed with exit code 0>
```

</details>


---

<sub>6m 39s</sub>

### Copilot

Let me understand the `postinstall` toolchain requirement (`install-electron --no`, node-gyp, electron-rebuild) so the "Build from source" prerequisites are right.

---

<sub>6m 40s</sub>

### `bash`

**Inspect electron install script and flags**

$ cd /private/var/tmp/ws/c9859428/hvir && cat node_modules/electron/package.json | grep -nE '"version"|"bin"|install-electron|"postinstall"|"node"' ; echo ----; sed -n '1,60p' node_modules/electron/install.js

<details>
<summary>57 lines</summary>

```
3:  "version": "43.4.1",
13:  "bin": {
15:    "install-electron": "install.js"
28:    "node": ">= 22.12.0"
----
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
<shellId: 89 completed with exit code 0>
```

</details>


---

<sub>6m 40s</sub>

### `bash`

**Read the native package manifest and bin tools**

$ cd /private/var/tmp/ws/c9859428/hvir && cat packages/rename-noreplace/package.json packages/rename-noreplace/binding.gyp; sed -n '1,40p' packages/rename-noreplace/index.js; ls node_modules/.bin | grep -E "^(electron|install-electron|electron-rebuild|electron-vite|node-gyp|vitest|stryker|eslint|prettier|tsc)$"

<details>
<summary>42 lines</summary>

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
{
  "targets": [
    {
      "target_name": "rename_noreplace",
      "sources": ["rename_noreplace.c"]
    }
  ]
}
'use strict'

/* global module, require */

module.exports = require('./build/Release/rename_noreplace.node')
electron
electron-rebuild
electron-vite
eslint
install-electron
node-gyp
prettier
stryker
tsc
vitest
<shellId: 90 completed with exit code 0>
```

</details>


---

<sub>6m 45s</sub>

### `bash`

**Check install-electron argument handling**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "argv|--no|ignore-scripts|skip" node_modules/electron/install.js | head; echo "--- electron README on install-electron ---"; grep -rnE "install-electron" node_modules/electron/README.md node_modules/electron/package.json 2>/dev/null | head -5; echo "--- electron dist present? ---"; ls node_modules/electron/dist 2>/dev/null | head -3

<details>
<summary>7 lines</summary>

```
--- electron README on install-electron ---
node_modules/electron/package.json:15:    "install-electron": "install.js"
--- electron dist present? ---
Electron.app
LICENSE
LICENSES.chromium.html
<shellId: 91 completed with exit code 0>
```

</details>


---

<sub>6m 51s</sub>

### Copilot

Let me read the smoke-scenario selection to document `smoke:scenario` usage accurately.

---

<sub>6m 51s</sub>

### `bash`

**Read smoke scenario selection module**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' src/main/smoke/scenario-selection.mts

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

<sub>6m 51s</sub>

### `bash`

**Read smoke repository creation and run-smoke body**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' scripts/create-smoke-repository.sh; echo ----; sed -n '60,140p' scripts/run-smoke.sh

<details>
<summary>115 lines</summary>

```
#!/usr/bin/env bash
set -euo pipefail

if [[ "$#" -ne 2 ]]; then
  echo 'Usage: create-smoke-repository.sh <source-checkout> <repository>' >&2
  exit 2
fi

source_checkout=$1
repository=$2

case "$source_checkout" in
/*) ;;
*)
  echo "Smoke source checkout must be absolute: $source_checkout" >&2
  exit 2
  ;;
esac

case "$repository" in
/*) ;;
*)
  echo "Smoke repository must be absolute: $repository" >&2
  exit 2
  ;;
esac

# Git exports repository-local variables while running hooks. They must not
# redirect this constructor's explicit source and destination repositories.
while IFS= read -r variable; do
  if [[ -n "$variable" ]]; then unset "$variable"; fi
done < <(git -C "$source_checkout" rev-parse --local-env-vars)

source_commit=$(git -C "$source_checkout" rev-parse --verify HEAD^{commit})

if [[ -e "$repository" ]]; then
  if [[ ! -d "$repository" ]]; then
    echo "Smoke repository path is not a directory: $repository" >&2
    exit 2
  fi
  if [[ -n "$(find "$repository" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
    echo "Smoke repository must start empty: $repository" >&2
    exit 2
  fi
else
  mkdir -p "$repository"
fi

# The source checkout is an immutable construction input. `git archive` excludes
# its worktree changes, ignored output, Git metadata, and neighboring worktrees.
git -C "$source_checkout" archive "$source_commit" | tar -x -C "$repository"

git -C "$repository" init --quiet --initial-branch=main
git -C "$repository" config user.name 'hvir smoke'
git -C "$repository" config user.email 'hvir-smoke@invalid.example'
git -C "$repository" config commit.gpgsign false
# The fixture is short-lived and deleted as soon as its scenario/test finishes.
# Keep Git from launching detached maintenance that can still be writing under
# .git while the owner removes that temporary directory.
git -C "$repository" config maintenance.auto false
----
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
<shellId: 93 completed with exit code 0>
```

</details>


---

<sub>7m 4s</sub>

### Copilot

Let me list the state files hvir stores in its user-data directory (for a "Where hvir keeps its data" note).

---

<sub>7m 4s</sub>

### `bash`

**List user-data file usages in main process**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "applicationUserDataPath\(|userDataRoot" src/main --include=*.ts | grep -v "smoke/" | head -30

<details>
<summary>16 lines</summary>

```
src/main/application-runtime.ts:16:export function applicationUserDataPath(name: string): string {
src/main/application-runtime.ts:17:  return join(applicationRuntime.userDataRoot, name)
src/main/application-runtime-policy.ts:9:  readonly userDataRoot: string
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:26:  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
src/main/application-runtime-policy.ts:27:  prepareUserDataRoot(userDataRoot)
src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
src/main/application-runtime-policy.ts:29:  return { buildChannel, userDataRoot }
src/main/document-review/document-review-application.ts:29:      localPath(applicationUserDataPath('document-review-drafts.json')),
src/main/diagnostics/diagnostic-report-coordinator.ts:403:    new DiagnosticReportStorage(host, localPath(applicationRuntime.userDataRoot)),
src/main/index.ts:76:    applicationRuntime.userDataRoot,
src/main/index.ts:164:        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
src/main/index.ts:173:      applicationUserDataPath('projects.json'),
src/main/index.ts:192:        localPath(applicationUserDataPath('terminal-sessions.json')),
src/main/index.ts:201:        localPath(applicationUserDataPath('harness-profiles.json')),
<shellId: 94 completed with exit code 0>
```

</details>


---

<sub>7m 4s</sub>

### `bash`

**Find where app settings are persisted**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "localStorage|sessionStorage|app-settings|settings\.json" src/renderer/src/settings/settings.ts src/main/ipc/features/app.ts | head -12

```
src/renderer/src/settings/settings.ts:61:    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
src/renderer/src/settings/settings.ts:70:    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
src/renderer/src/settings/settings.ts:74:    const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')
<shellId: 95 completed with exit code 0>
```


---

<sub>7m 23s</sub>

### Copilot

Let me read the host catalog to verify exactly how SSH hosts are discovered and which auth methods/identity files are used.

---

<sub>7m 23s</sub>

### `bash`

**Read host catalog SSH discovery code**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,70p;150,240p' src/main/project-host/project-host-catalog.ts

<details>
<summary>131 lines</summary>

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
<shellId: 96 completed with exit code 0>
```

</details>


---

<sub>7m 23s</sub>

### `bash`

**Read SSH authentication method sequence**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '780,860p' src/main/project-host/ssh-host.ts

<details>
<summary>82 lines</summary>

```
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
          if (identity) {
            let passphrase: string | undefined
            const parsed = utils.parseKey(identity.privateKey)
            if (parsed instanceof Error && /encrypted|passphrase/i.test(parsed.message))
              passphrase = this.cachedPassphrases.get(identity.path)
            if (
              parsed instanceof Error &&
              /encrypted|passphrase/i.test(parsed.message) &&
              !passphrase
            ) {
              passphrase = (
                await prompt({
                  hostId: this.hostId,
                  kind: 'passphrase',
                  title: `Unlock ${identity.path}`,
                  prompts: [{ text: 'Passphrase', echo: false }],
                })
              )?.[0]
              if (passphrase) credentialAttempt.passphrases.set(identity.path, passphrase)
            }
            if (authenticationCancelled) return false
            if (!isActive()) return false
            return {
              type: 'publickey',
              username: config.user,
              key: identity.privateKey,
              passphrase,
            }
          }
          if (available.has('keyboard-interactive') && !attempted.has('keyboard')) {
            attempted.add('keyboard')
            return {
              type: 'keyboard-interactive',
              username: config.user,
              prompt: (name, instructions, _lang, prompts, finish) => {
                keyboardInteractiveRounds++
                if (keyboardInteractiveRounds > SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS) {
                  authenticationCancelled = true
                  finish([])
                  return
                }
                void prompt({
                  hostId: this.hostId,
                  kind: 'keyboard-interactive',
                  title: name || `Authenticate to ${config.alias}`,
                  instructions,
                  prompts: prompts.map((p) => ({
                    text: p.prompt,
<shellId: 97 completed with exit code 0>
```

</details>


---

<sub>7m 29s</sub>

### `bash` — Failed

**Check remote-host tool requirements for SSH**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "inotifywait|'find'|\"find\"|fswatch|polling|'stat'|python|perl|/bin/sh|'sh'|bash" src/main/project-host/ssh-watch-service.ts src/main/project-host/ssh-host.ts src/main/project-host/ssh-file-access.ts | head -30

```
Permission denied and could not request permission from user
```


---

<sub>7m 29s</sub>

### `bash`

**Read SSH watch service header**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/main/project-host/ssh-watch-service.ts

<details>
<summary>56 lines</summary>

```
import {
  hostPath,
  type HostConnectionState,
  type HostId,
  type HostPath,
  type HostWatchTier,
  type WatchEvent,
  type WatchEventType,
} from '../../shared'
import type { Disposer, ExecStreamHandle, WatchOptions } from './project-host'
import {
  fileType,
  metadataStamp,
  remoteChild,
  sftpLstat,
  sftpReaddir,
  type SshFileAccess,
} from './ssh-file-access'

const GIT_PRIORITY_FILES = new Set(['HEAD', 'index', 'packed-refs'])

export interface SshWatchOptions {
  readonly pollIntervalMs?: number
  readonly watchdogIntervalMs?: number
  readonly refreshPulseIntervalMs?: number
  readonly slowScanIntervalMs?: number
  readonly maxSlowScanIntervalMs?: number
  readonly pollDirectoryBatchSize?: number
}

export interface SshWatchOwner {
  readonly hostId: HostId
  connectionState(): HostConnectionState
  watchTier(): HostWatchTier
  setWatchTier(tier: HostWatchTier): void
  onConnectionState(cb: (state: HostConnectionState) => void): Disposer
  execStream(command: string, args: readonly string[]): ExecStreamHandle
}

/** Connection-aware inotify/polling orchestration for one logical SshHost. */
export class SshWatchService {
  constructor(
    private readonly owner: SshWatchOwner,
    private readonly files: SshFileAccess,
    private readonly options: SshWatchOptions,
  ) {}

  watch(
    path: HostPath,
    onEvent: (event: WatchEvent) => void,
    opts: WatchOptions = {},
  ): Disposer {
    this.files.assertPath(path)
    if ((opts.additionalPaths?.length ?? 0) > 256) {
      throw new Error('Too many additional watch paths')
    }
    for (const candidate of opts.additionalPaths ?? []) this.files.assertPath(candidate)
    const watchedPaths = [path, ...(opts.additionalPaths ?? [])].filter(
      (candidate, index, values) =>
        values.findIndex((value) => value.path === candidate.path) === index,
<shellId: 99 completed with exit code 0>
```

</details>


---

<sub>7m 35s</sub>

### `grep`

**inotifywait|watchTier|'polling'|'inotify'**

"inotifywait|watchTier|'polling'|'inotify'" (src/main/project-host/ssh-watch-service.ts)

```
/private/var/tmp/ws/c9859428/hvir/src/main/project-host/ssh-watch-service.ts:34:  watchTier(): HostWatchTier
/private/var/tmp/ws/c9859428/hvir/src/main/project-host/ssh-watch-service.ts:67:        this.owner.watchTier() === 'inotify'
/private/var/tmp/ws/c9859428/hvir/src/main/project-host/ssh-watch-service.ts:118:    const handle = this.owner.execStream('inotifywait', args)
/private/var/tmp/ws/c9859428/hvir/src/main/project-host/ssh-watch-service.ts:152:      this.owner.setWatchTier('polling')
/private/var/tmp/ws/c9859428/hvir/src/main/project-host/ssh-watch-service.ts:158:      if (!stopped) fallback(new Error(`inotifywait exited (${String(code)})`))
```


---

<sub>7m 40s</sub>

### `bash`

**Read SSH watch tier selection and fallback**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '60,175p' src/main/project-host/ssh-watch-service.ts

<details>
<summary>115 lines</summary>

```
values.findIndex((value) => value.path === candidate.path) === index,
    )
    let stopped = false
    let stopBackend: Disposer | undefined
    const start = (): void => {
      if (stopped || stopBackend || this.owner.connectionState() !== 'connected') return
      const stopWatch =
        this.owner.watchTier() === 'inotify'
          ? this.watchInotify(path, onEvent, opts)
          : this.watchPolling(path, onEvent, opts)
      const pulseIntervalMs =
        this.options.refreshPulseIntervalMs ?? this.options.pollIntervalMs ?? 2_000
      let pulseTimer: ReturnType<typeof setTimeout> | undefined
      const pulse = (): void => {
        if (stopped || this.owner.connectionState() !== 'connected') return
        for (const watchedPath of watchedPaths) {
          this.files.invalidate(watchedPath.path)
          onEvent({ type: 'change', path: watchedPath, synthetic: 'refresh' })
        }
        pulseTimer = setTimeout(pulse, pulseIntervalMs)
      }
      pulseTimer = setTimeout(pulse, pulseIntervalMs)
      stopBackend = () => {
        if (pulseTimer) clearTimeout(pulseTimer)
        return stopWatch()
      }
    }
    const stopState = this.owner.onConnectionState((state) => {
      if (state === 'connected') start()
      else {
        void stopBackend?.()
        stopBackend = undefined
      }
    })
    return () => {
      stopped = true
      void stopState()
      void stopBackend?.()
      stopBackend = undefined
    }
  }

  private watchInotify(
    path: HostPath,
    onEvent: (event: WatchEvent) => void,
    opts: WatchOptions,
  ): Disposer {
    let stopped = false
    const args = ['-m', '-e', 'modify,create,delete,move', '--format', '%e|%w%f']
    if (opts.recursive !== false) args.push('-r')
    if (opts.excludeDirectoryNames?.length) {
      const names = opts.excludeDirectoryNames.map(escapeRegex).join('|')
      args.push('--exclude', `(^|/)(${names})(/|$)`)
    }
    args.push(
      path.path,
      ...(opts.additionalPaths ?? []).map((candidate) => candidate.path),
    )
    const handle = this.owner.execStream('inotifywait', args)
    let pending = ''
    handle.onStdout((chunk) => {
      pending += chunk
      const lines = pending.split('\n')
      pending = lines.pop() ?? ''
      for (const line of lines) {
        const at = line.indexOf('|')
        if (at < 0) continue
        const flags = line.slice(0, at)
        const changed = line.slice(at + 1)
        this.files.invalidate(changed)
        onEvent({
          type: inotifyEventType(flags),
          path: hostPath(this.owner.hostId, changed),
        })
      }
    })
    let pollingStop: Disposer | undefined
    let watchdogStop: Disposer | undefined = this.watchPolling(
      path,
      onEvent,
      opts,
      this.options.watchdogIntervalMs ??
        Math.max(10_000, this.options.pollIntervalMs ?? 2_000),
    )
    let fallingBack = false
    const fallback = (error?: Error): void => {
      if (stopped || pollingStop || fallingBack) return
      fallingBack = true
      if (error) opts.onError?.(error)
      void handle.dispose()
      void watchdogStop?.()
      watchdogStop = undefined
      this.owner.setWatchTier('polling')
      pollingStop = this.watchPolling(path, onEvent, opts)
      fallingBack = false
    }
    handle.onError((error) => fallback(error))
    handle.onExit(({ code }) => {
      if (!stopped) fallback(new Error(`inotifywait exited (${String(code)})`))
    })
    return () => {
      stopped = true
      void handle.dispose()
      void watchdogStop?.()
      void pollingStop?.()
    }
  }

  private watchPolling(
    path: HostPath,
    onEvent: (event: WatchEvent) => void,
    opts: WatchOptions,
    requestedIntervalMs?: number,
  ): Disposer {
    let stopped = false
    let priorityInitialized = false
<shellId: 100 completed with exit code 0>
```

</details>


---

<sub>7m 45s</sub>

### `grep`

**command -v|hasInotify|setWatchTier|watchTier =**

"command -v|hasInotify|setWatchTier|watchTier =" (src/main/project-host/ssh-host.ts)

<details>
<summary>23 matches</summary>

```
[grep content: 3 matches across 1 file(s) under /private/var/tmp/ws/c9859428/hvir/src/main/project-host]

ssh-host.ts (3 match(es)):
  132-         hostId: this.hostId,
  133-         connectionState: () => this.state,
  134-         watchTier: () => this.tier,
  135:         setWatchTier: (tier) => {
  136-           this.tier = tier
  137-           this.notifyState()
  138-         },
  228-     if (this.resolvedShell) return this.resolvedShell
  229-     const result = await this.exec('sh', [
  230-       '-lc',
  231:       'if [ -n "$SHELL" ] && [ -x "$SHELL" ]; then printf "%s\\n" "$SHELL"; elif command -v bash >/dev/null 2>&1; then command -v bash; else printf "/bin/sh\\n"; fi',
  232-     ])
  233-     const candidate = result.stdout.trim().split(/\r?\n/).at(-1)
  234-     this.resolvedShell =
  682-     try {
  683-       this.tier =
  684-         (
  685:           await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
  686-             signal: probe.signal,
  687-             maxBuffer: 64 * 1024,
  688-           })
```

</details>


---

<sub>7m 51s</sub>

### Copilot

I now have a verified picture of the project. Let me check the working tree is still clean of side effects (only gitignored `out/` from my build check).

---

<sub>7m 52s</sub>

### `bash`

**Check git status including ignored files**

$ cd /private/var/tmp/ws/c9859428/hvir && git status --short --ignored | grep -v "^!! node_modules/$" | head -20

```
!! out/
!! packages/rename-noreplace/build/
<shellId: 101 completed with exit code 0>
```


---

<sub>9m 0s</sub>

### Copilot

Interesting: there's a workflow that locks tracker conversations. Let me read it fully, since it affects how the README should talk about contributing.

---

<sub>9m 0s</sub>

### `bash`

**Read the lock-tracker-conversations workflow**

$ cd /private/var/tmp/ws/c9859428/hvir && cat .github/workflows/lock-tracker-conversations.yml

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
<shellId: 102 completed with exit code 0>
```

</details>


---

<sub>9m 0s</sub>

### `bash`

**Read contributor-status module head**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' scripts/project-management/contributor-status.ts

<details>
<summary>77 lines</summary>

```
import { sumTokenTotals, type TokenPhase } from './session-token-allocation.ts'
import type { PlanningIssueSnapshot } from './issue-planning.ts'
import {
  normalizePlanningRecord,
  type NormalizedPlanningRecord,
} from './planning-record.ts'
import { resolveIssueDelivery } from './issue-delivery.ts'
import {
  parseCompletingChildTrailer,
  type PullRequestSnapshot,
} from './pull-request-relationships.ts'
import {
  TOKEN_SCOPE,
  totalTokenReceipts,
  migratedTokenHistory,
  type TokenReceiptPort,
} from './session-token-receipts.ts'

export interface PullRequestStatus {
  number: number
  state: 'OPEN' | 'CLOSED' | 'MERGED'
  base: string
  head: string
  draft: boolean
  mergeRequest: boolean
  review: string
  mergeability: string
  checks: { name: string; bucket: 'pass' | 'fail' | 'pending' | 'skipping' | 'cancel' }[]
  checksAvailable: boolean
  stale: boolean
}

export interface ContributorStatusPorts {
  issue: (number: number) => Promise<PlanningIssueSnapshot>
  project: (number: number) => Promise<NormalizedPlanningRecord['project']>
  pullRequest: (number: number) => Promise<PullRequestStatus>
  relatedPullRequest: (issue: number, pr: number) => Promise<'final' | 'child' | null>
  tokens: TokenReceiptPort
}

export interface TokenSummary {
  planning: number | null
  implementation: number | null
  tokens: number | null
  contributions: number
  participants: number[]
  legacy: boolean
  scope: string
  diagnostics: string[]
}

/** Exact native relationships and the owned child trailer, never prose/status inference. */
export async function contributorPullRequestRelationship(
  ports: Pick<ContributorStatusPorts, 'issue'> & {
    pullRequest: (number: number) => Promise<PullRequestSnapshot>
    listEpicBranches: (parent: number) => Promise<string[]>
  },
  issueNumber: number,
  prNumber: number,
): Promise<'final' | 'child' | null> {
  const [issue, pr] = await Promise.all([
    ports.issue(issueNumber),
    ports.pullRequest(prNumber),
  ])
  if (pr.repository !== issue.repository) return null
  if (pr.baseRefName === 'main')
    return pr.closingIssues.length === 1 &&
      pr.closingIssues[0]?.number === issue.number &&
      pr.closingIssues[0].repository === issue.repository
      ? 'final'
      : null
  const delivery = await resolveIssueDelivery(
    {
      inspectIssue: async (number) => ({
        apply: false,
        applied: false,
        operations: [],
        record: normalizePlanningRecord(
          number === issue.number ? issue : await ports.issue(number),
          undefined,
<shellId: 103 completed with exit code 0>
```

</details>


---

<sub>9m 9s</sub>

### Copilot

Let me verify the last few feature details I plan to mention: the custom-command provider, usage telemetry contents, Markdown/Mermaid fences, web-pane triggers, and appearance settings.

---

<sub>9m 10s</sub>

### `bash`

**Read custom provider manifest and usage types**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '44,66p' src/main/harness/providers/shell.ts; echo "=== harness-usage ==="; sed -n '1,60p' src/shared/harness-usage.ts

<details>
<summary>54 lines</summary>

```
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
=== harness-usage ===
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
<shellId: 104 completed with exit code 0>
```

</details>


---

<sub>9m 10s</sub>

### `bash`

**Check markdown extensions and appearance settings**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "mermaid|katex|math|task|footnote|anchor|highlight" src/renderer/src/viewer/markdown-extensions.ts src/renderer/src/viewer/markdown-renderer.ts | head -20; echo "=== appearance ==="; grep -nE "<option|<legend|<span>[A-Z]" src/renderer/src/settings/sections/AppearanceSettings.tsx | head -30

<details>
<summary>27 lines</summary>

```
src/renderer/src/viewer/markdown-extensions.ts:2:import taskLists from 'markdown-it-task-lists'
src/renderer/src/viewer/markdown-extensions.ts:4:/** GFM task lists are display-only in hvir; source mode owns all mutation. */
src/renderer/src/viewer/markdown-extensions.ts:6:  markdown.use(taskLists, { enabled: false, label: false })
src/renderer/src/viewer/markdown-extensions.ts:8:    'github-task-lists',
src/renderer/src/viewer/markdown-extensions.ts:9:    'gitlab-inapplicable-task-input',
src/renderer/src/viewer/markdown-extensions.ts:13:    'github-task-lists',
src/renderer/src/viewer/markdown-extensions.ts:14:    'gitlab-inapplicable-task-output',
src/renderer/src/viewer/markdown-extensions.ts:25:  markdown.core.ruler.after('block', 'hvir-source-line-anchors', (state) => {
src/renderer/src/viewer/markdown-extensions.ts:38:/** Custom renderers must retain the source anchor that MarkdownIt attrs normally carry. */
src/renderer/src/viewer/markdown-extensions.ts:57:const TASK_STATE_ATTRIBUTE = 'data-hvir-task-state'
src/renderer/src/viewer/markdown-extensions.ts:89:        child.type === 'html_inline' && child.content.includes('task-list-item-checkbox'),
src/renderer/src/viewer/markdown-extensions.ts:93:      'class="task-list-item-checkbox"',
src/renderer/src/viewer/markdown-extensions.ts:94:      'class="task-list-item-checkbox inapplicable" aria-checked="mixed"',
src/renderer/src/viewer/markdown-renderer.ts:11:const MERMAID_FENCE_LANGUAGES = new Set(['mermaid', 'mmd'])
src/renderer/src/viewer/markdown-renderer.ts:40:        `<div class="mermaid-diagram"><pre>${escapeHtml(token.content)}</pre></div>`,
src/renderer/src/viewer/markdown-renderer.ts:48:        grammar.highlighter.codeToHtml(token.content, {
=== appearance ===
36:          <span>App theme</span>
42:            <option value="dark">Dark</option>
43:            <option value="light">Light</option>
47:          <span>Terminal colors</span>
58:            <option value="app">Follow app theme</option>
59:            <option value="dark">Always dark</option>
60:            <option value="light">Always light</option>
92:          <span>Interface scale</span>
109:          <span>Terminal text size</span>
<shellId: 105 completed with exit code 0>
```

</details>


---

<sub>9m 17s</sub>

### `bash`

**Check whether Sessions UI displays token usage**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "usage|Usage|tokens|Tokens" src/renderer/src/sessions/sessions-overview-model.ts | head -20

```

<shellId: 106 completed with exit code 0>
```


---

<sub>9m 17s</sub>

### `bash`

**List Sessions card fact labels**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "label: '[^']+'" src/renderer/src/sessions/sessions-overview-model.ts | head -30

```
152:  return { label: 'Status', value, tone: 'available' }
<shellId: 107 completed with exit code 0>
```


---

<sub>9m 22s</sub>

### `bash`

**Find renderer usage presentation and card facts**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rlnE "usage" src/renderer/src --include=*.tsx --include=*.ts | head -10; echo "--- facts shown on session cards ---"; sed -n '100,200p' src/renderer/src/sessions/sessions-overview-model.ts

<details>
<summary>101 lines</summary>

```
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/sessions/sessions-projection-coordinator.ts
--- facts shown on session cards ---
  )
}

export function sessionsOverviewCardFacts(
  row: SessionsProjectionRow,
): SessionsOverviewCardFacts {
  const activity = [
    fact(
      'Attention',
      row.attention,
      sentenceCase,
      (value) => value !== 'none',
      (value) => value !== 'none',
    ),
    fact(
      'Working',
      row.working,
      () => 'Working',
      () => false,
      Boolean,
    ),
  ].filter((candidate): candidate is SessionsOverviewCardFact => candidate !== undefined)
  const candidates = [
    ...(activity.length === 0 ||
    row.lifecycle !== 'live' ||
    row.connectionState !== 'connected'
      ? [sessionLifecycleFact(row)]
      : []),
    ...activity,
    fact(
      'Provider turn',
      row.turn,
      (value) => sentenceCase(value.state),
      (value) =>
        value.state === 'waiting-for-user' || value.state === 'waiting-for-approval',
      (value) => value.state !== 'idle',
    ),
    fact('Model', row.model, (value) => value.displayName ?? value.id),
  ].filter((candidate): candidate is SessionsOverviewCardFact => candidate !== undefined)
  return { facts: candidates }
}

/** Neutral presence/availability is not actionable attention or provider readiness. */
function sessionLifecycleFact(row: SessionsProjectionRow): SessionsOverviewCardFact {
  const value =
    row.connectionState !== 'connected'
      ? row.connectionState === 'failed'
        ? 'Connection failed'
        : sentenceCase(row.connectionState)
      : row.lifecycle === 'retained'
        ? 'Inactive'
        : sentenceCase(row.lifecycle)
  return { label: 'Status', value, tone: 'available' }
}

function fact<T>(
  label: string,
  projected: SessionsFact<T>,
  available: (value: T) => string,
  actionable: (value: T) => boolean = () => false,
  visible: (value: T) => boolean = () => true,
): SessionsOverviewCardFact | undefined {
  switch (projected.status) {
    case 'available': {
      if (!visible(projected.value)) return undefined
      return {
        label,
        value: available(projected.value),
        tone: actionable(projected.value) ? 'actionable' : 'available',
      }
    }
    case 'stale':
      return {
        label,
        value: `Stale · ${available(projected.value)}`,
        tone: 'stale',
      }
    case 'pending':
    case 'unavailable':
    case 'unsupported':
      return undefined
  }
}

function sentenceCase(value: string): string {
  const spaced = value.replaceAll('-', ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

export function sessionsOverviewGroups(
  rows: readonly SessionsProjectionRow[],
  policy: SessionsOverviewPolicy,
): readonly SessionsOverviewGroupModel[] {
  const ordered = rows
    .filter((row) => sessionsOverviewMatchesFilter(row, policy.filter))
    .sort(sorter(policy.sort))
  if (policy.group === 'none') return [{ key: 'all', rows: ordered }]
  const groups = new Map<string, SessionsOverviewGroupModel>()
  for (const row of ordered) {
    const key = `project:${row.project.id}`
    const current = groups.get(key)
<shellId: 108 completed with exit code 0>
```

</details>


---

<sub>9m 29s</sub>

### `bash`

**Find provider-turn telemetry producers**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rlE "waiting-for-approval" src/main src/shared | head; echo "--- sessions overview groups/sorts/filters ---"; grep -nE "'(none|project|workspace|attention|activity|recent|name)'" src/renderer/src/sessions/sessions-overview-model.ts | head -12

<details>
<summary>17 lines</summary>

```
src/main/sessions/sessions-telemetry-projection.ts
src/shared/sessions-projection.ts
src/shared/harness-telemetry.ts
--- sessions overview groups/sorts/filters ---
8:  'all' | 'harnesses' | 'shells' | 'attention' | 'working'
9:export type SessionsOverviewGroup = 'project' | 'workspace' | 'none'
10:export type SessionsOverviewSort = 'priority' | 'title' | 'project'
57:  group: 'workspace',
69:    group === 'workspace'
71:      : group === 'project'
111:      (value) => value !== 'none',
112:      (value) => value !== 'none',
196:  if (policy.group === 'none') return [{ key: 'all', rows: ordered }]
212:    policy.group === 'workspace'
289:    case 'attention':
298:    case 'project':
<shellId: 109 completed with exit code 0>
```

</details>


---

<sub>9m 35s</sub>

### `bash`

**Read web-pane workspace policy and activation hook**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/renderer/src/dashboards/web-pane-workspace-policy.ts; echo ----; grep -nE "openWebView|loopback|parseLoopback|onOpenUrl|activate" src/renderer/src/workbench/use-terminal-path-activation.ts | head -12

<details>
<summary>17 lines</summary>

```
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
----
44:  async activate(target: ResolvedTerminalFileTarget): Promise<void> {
104:  readonly activate: (target: ResolvedTerminalFileTarget) => void
142:  const activate = useCallback((target: ResolvedTerminalFileTarget): void => {
143:    void coordinator.current?.activate(target)
152:  return { activate, revealRequest }
<shellId: 110 completed with exit code 0>
```

</details>


---

<sub>9m 37s</sub>

### `bash`

**Find where loopback URLs become web panes**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "parseLoopbackHttpTarget" src --include=*.ts --include=*.tsx | grep -v "src/shared/web-pane.ts" | head -8; echo ----; sed -n '1,70p' src/renderer/src/terminal/ghostty-terminal-events.ts | head -80

<details>
<summary>76 lines</summary>

```
src/renderer/src/terminal/terminal-file-link.ts:5:  parseLoopbackHttpTarget,
src/renderer/src/terminal/terminal-file-link.ts:148:  return parseLoopbackHttpTarget(url)?.url
src/main/web-pane/loopback-http-proxy.ts:17:  parseLoopbackHttpTarget,
src/main/web-pane/loopback-http-proxy.ts:284:    const loopback = parseLoopbackHttpTarget(target.href)
src/main/web-pane/loopback-http-proxy.ts:292:    const loopback = parseLoopbackHttpTarget(target.href)
src/main/web-pane/web-pane-route-registry.ts:5:  parseLoopbackHttpTarget,
src/main/web-pane/web-pane-route-registry.ts:88:    const target = parseLoopbackHttpTarget(request.url)
src/main/web-pane/web-pane-route-registry.ts:186:    const target = parseLoopbackHttpTarget(request.initialUrl)
----
import type {
  TerminalEvent as GhosttyTerminalEvent,
  TerminalEventProvenance as GhosttyTerminalEventProvenance,
  TerminalPaletteRequest as GhosttyTerminalPaletteRequest,
  TerminalPaletteTarget as GhosttyTerminalPaletteTarget,
} from 'ghostty-web'

import type {
  TerminalEvent,
  TerminalEventProvenance,
  TerminalPaletteRequest,
  TerminalPaletteTarget,
} from './terminal-pane'

/** Translate the closed Ghostty event union without leaking its types past the pane. */
export function translateGhosttyTerminalEvent(
  event: GhosttyTerminalEvent,
  retainProvenance: (
    provenance: GhosttyTerminalEventProvenance,
  ) => TerminalEventProvenance,
): TerminalEvent | undefined {
  switch (event.type) {
    case 'title':
      return { type: 'title', title: event.title }
    case 'working-directory':
      return { type: 'working-directory', uri: event.uri }
    case 'bell':
      return { type: 'bell' }
    case 'notification':
      if (event.source !== 'osc-9' && event.source !== 'osc-777') return undefined
      return {
        type: 'notification',
        source: event.source,
        title: event.title,
        body: event.body,
      }
    case 'progress':
      return event.progress === undefined
        ? { type: 'progress', state: event.state }
        : { type: 'progress', state: event.state, progress: event.progress }
    case 'semantic':
      return {
        type: 'semantic',
        action: event.action,
        options: event.options,
        provenance: retainProvenance(event.provenance),
      }
    case 'palette': {
      const request = translatePaletteRequest(event.request)
      if (!request) return undefined
      return {
        type: 'palette',
        operation: event.operation,
        request,
      }
    }
    case 'clipboard':
      return event.operation === 'read'
        ? { type: 'clipboard', operation: 'read', selection: event.selection }
        : {
            type: 'clipboard',
            operation: 'write',
            selection: event.selection,
            data: event.data,
          }
  }

  return undefined
}
<shellId: 111 completed with exit code 0>
```

</details>


---

<sub>9m 42s</sub>

### `bash`

**Read terminal link detection and activation modifiers**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/renderer/src/terminal/terminal-file-link.ts; grep -rnE "metaKey|ctrlKey|modifier|Cmd|Ctrl" src/renderer/src/terminal/ghostty-terminal-pane.ts | head -10

<details>
<summary>56 lines</summary>

```
import { fileUriPath } from '../../../shared/file-uri'
import {
  hostPath,
  joinHostPath,
  parseLoopbackHttpTarget,
  type HostPath,
} from '../../../shared'

export interface TerminalFileLink {
  readonly target: string
  readonly start: number
  readonly end: number
}

export interface ParsedTerminalFileTarget {
  readonly path: string
  readonly line?: number
  readonly column?: number
}

export interface ResolvedTerminalFileTarget {
  readonly path: HostPath
  readonly line?: number
  readonly column?: number
}

const TOKEN = /[^\s<>"'`|]+/g
const TRAILING_PUNCTUATION = /[.),;:!?}\]]+$/
const LEADING_PUNCTUATION = /^[([{]+/
const LINE_POSITION = /:(\d+)(?::(\d+))?$/
const FILE_NAME = /(?:^|\/)[^/]+\.[a-z0-9][a-z0-9._-]*$/i

/** Detect conservative, single-line path candidates without executing or resolving them. */
export function detectTerminalFileLinks(text: string): readonly TerminalFileLink[] {
  const links: TerminalFileLink[] = []
  TOKEN.lastIndex = 0
  let match = TOKEN.exec(text)
  while (match) {
    const original = match[0]
    const leading = original.match(LEADING_PUNCTUATION)?.[0].length ?? 0
    const withoutLeading = original.slice(leading)
    const trailing = withoutLeading.match(TRAILING_PUNCTUATION)?.[0].length ?? 0
    const target = withoutLeading.slice(0, withoutLeading.length - trailing)
    if (isTerminalWebTarget(target)) {
      match = TOKEN.exec(text)
      continue
    }
    const parsed = parseTerminalFileTarget(target)
    if (isFileUri(target) || (parsed && isPlainPathCandidate(parsed.path))) {
      const start = match.index + leading
      links.push({ target, start, end: start + target.length - 1 })
    }
    match = TOKEN.exec(text)
  }
  return links
}

/** Parse file URI/path and optional `:line[:column]` decoration. */
export function parseTerminalFileTarget(
  rawTarget: string,
src/renderer/src/terminal/ghostty-terminal-pane.ts:805:        if (event.ctrlKey || event.metaKey) this.activateTarget(activation)
<shellId: 112 completed with exit code 0>
```

</details>


---

<sub>9m 48s</sub>

### `bash`

**Trace terminal web-link activation to web pane**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "isTerminalWebTarget|terminalWebTarget|onWebTarget|openWebTarget|activateWeb" src/renderer/src --include=*.ts --include=*.tsx | head -12

<details>
<summary>13 lines</summary>

```
src/renderer/src/App.tsx:53:  const deactivateWebPaneRef = useRef<() => void>(() => undefined)
src/renderer/src/App.tsx:60:      deactivateWebPaneRef.current()
src/renderer/src/App.tsx:115:    activateView: activateWebView,
src/renderer/src/App.tsx:203:    deactivateWebPane: () => setWebViewActive(false),
src/renderer/src/App.tsx:232:  deactivateWebPaneRef.current = () => setWebViewActive(false)
src/renderer/src/App.tsx:338:        onActivateWeb={activateWebView}
src/renderer/src/terminal/ghostty-terminal-pane.ts:43:  isTerminalWebTarget,
src/renderer/src/terminal/ghostty-terminal-pane.ts:739:      if (!target || (!isFileUri(target) && !isTerminalWebTarget(target))) continue
src/renderer/src/terminal/terminal-file-link.ts:44:    if (isTerminalWebTarget(target)) {
src/renderer/src/terminal/terminal-file-link.ts:152:export function isTerminalWebTarget(rawTarget: string): boolean {
src/renderer/src/git/use-git-workspace.ts:12:  readonly deactivateWebPane: () => void
src/renderer/src/git/use-git-workspace.ts:31:    portsRef.current.deactivateWebPane()
<shellId: 113 completed with exit code 0>
```

</details>


---

<sub>9m 50s</sub>

### `bash`

**Read web target handling and web pane route registry**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '725,760p' src/renderer/src/terminal/ghostty-terminal-pane.ts; echo ----; sed -n '140,170p' src/renderer/src/terminal/terminal-file-link.ts; echo ---- ; sed -n '1,80p' src/main/web-pane/web-pane-route-registry.ts | head -100

<details>
<summary>138 lines</summary>

```
const viewportRow = y - scrollbackLength
    const hyperlinkTargetAt = (column: number): string | null => {
      if (!wasmTerm) return null
      return viewportRow < 0
        ? wasmTerm.getScrollbackHyperlinkUri(y, column)
        : wasmTerm.getHyperlinkUri(viewportRow, column)
    }
    for (let x = 0; x < line.length; x += 1) {
      const cell = line.getCell(x)
      const codepoint = cell?.getCodepoint() ?? 0
      text.push(codepoint < 32 ? ' ' : String.fromCodePoint(codepoint))
      const id = cell?.getHyperlinkId() ?? 0
      if (id <= 0 || visitedHyperlinkColumns.has(x)) continue
      const target = hyperlinkTargetAt(x)
      if (!target || (!isFileUri(target) && !isTerminalWebTarget(target))) continue
      let start = x
      let end = x
      while (
        start > 0 &&
        (line.getCell(start - 1)?.getHyperlinkId() ?? 0) > 0 &&
        hyperlinkTargetAt(start - 1) === target
      ) {
        start -= 1
      }
      while (
        end + 1 < line.length &&
        (line.getCell(end + 1)?.getHyperlinkId() ?? 0) > 0 &&
        hyperlinkTargetAt(end + 1) === target
      ) {
        end += 1
      }
      for (let column = start; column <= end; column += 1) {
        visitedHyperlinkColumns.add(column)
      }
      links.push(
        this.link(
----
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
----
import { randomUUID } from 'node:crypto'

import {
  hostPathEquals,
  parseLoopbackHttpTarget,
  type HostPath,
  type LoopbackHttpTarget,
  type WebPaneDiagnosticEvent,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import { LoopbackHttpProxy, type ProxyCredentials } from './loopback-http-proxy'

export const MAX_OPEN_WEB_PANES = 16
export const MAX_OPEN_WEB_PANES_PER_HOST = 8
export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'

export interface PrepareWebPaneSessionRequest {
  readonly partition: string
  readonly proxyPort: number
  readonly primaryUrl: string
}

export interface WebPaneRouteRegistryOptions {
  readonly prepareSession: (
    request: PrepareWebPaneSessionRequest,
  ) => Promise<() => Promise<void>>
  readonly destroyGuest: (guestId: number) => void
  readonly emitDiagnostic?: (
    ownerId: number,
    ownerGeneration: number,
    paneId: string,
    event: WebPaneDiagnosticEvent,
  ) => void
}

export interface OpenWebPaneRouteRequest {
  readonly ownerId: number
  readonly ownerGeneration?: number
  readonly sourceTerminalId: string
  readonly workspaceRoot: HostPath
  readonly host: ProjectHost
  readonly url: string
}

export interface OpenWebPaneRoute {
  readonly paneId: string
  readonly partition: string
  readonly url: string
  readonly origin: string
}

export type WebPaneNavigationDecision =
  | { readonly kind: 'allow'; readonly url: string }
  | { readonly kind: 'loopback'; readonly url: string }
  | { readonly kind: 'external'; readonly url: string }
  | { readonly kind: 'block' }

interface WebPaneRouteEntry extends OpenWebPaneRoute {
  readonly ownerId: number
  readonly ownerGeneration: number
  readonly sourceTerminalId: string
  readonly workspaceRoot: HostPath
  readonly hostId: string
  readonly target: LoopbackHttpTarget
  readonly proxy: LoopbackHttpProxy
  readonly disposeSession: () => Promise<void>
  guestId?: number
  attachmentClaimed: boolean
  attachmentUrl: string
}

/** Main-owned capability registry for the complete web-pane lifecycle. */
export class WebPaneRouteRegistry {
  private readonly entries = new Map<string, WebPaneRouteEntry>()
  private readonly pending = new Map<string, Promise<WebPaneRouteEntry>>()
  private readonly pendingHostCounts = new Map<string, number>()
  private readonly ownerAllGenerations = new Map<number, number>()
  private readonly ownerGenerations = new Map<string, number>()
  private readonly workspaceGenerations = new Map<string, number>()
  private readonly terminalGenerations = new Map<string, number>()
<shellId: 114 completed with exit code 0>
```

</details>


---

<sub>9m 56s</sub>

### `bash`

**Check renderer test environment and counts**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -l "happy-dom" test/*.tsx | wc -l; grep -h "vitest-environment" test/*.tsx | sort | uniq -c | head -3; ls test | grep -c "\.test\.tsx$"; ls test | grep -c "\.test\.ts$"; ls test/fixtures | head -10

<details>
<summary>15 lines</summary>

```
71
  71 // @vitest-environment happy-dom
75
301
architecture
clipboard-file-list
Dockerfile.dev
ghostty-lifecycle-runtime-options.ts
ghostty-terminal-pane-mock.ts
harness-profile-fixture.ts
highlight.toml
html-sandbox-attack.html
pty-supervisor-fixture.ts
rendered-image.svg
<shellId: 115 completed with exit code 0>
```

</details>


---

<sub>10m 0s</sub>

### `bash`

**Inspect Dockerfile.dev fixture and remaining fixtures**

$ cd /private/var/tmp/ws/c9859428/hvir && cat test/fixtures/Dockerfile.dev; ls test/fixtures | sed -n '10,60p'

<details>
<summary>13 lines</summary>

```
FROM node:24 AS build
WORKDIR /workspace
COPY package.json ./
RUN npm install
rendered-image.svg
rendered-mmd.md
rendered.csv
rendered.md
rendered.yml
renderer-resource-fixture.ts
viewer-find-collapsed.txt
viewer-highlight-worker.ts
<shellId: 116 completed with exit code 0>
```

</details>


---

<sub>10m 0s</sub>

### ◌ Conversation Compacted

---

<sub>10m 8s</sub>

### `bash`

**Re-check installer shebang, flags and sudo usage**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,40p' scripts/native-installer.template.sh; grep -nE "sudo|--uninstall|--purge|--help|usage\(|Usage" scripts/native-installer.template.sh | head -40

<details>
<summary>54 lines</summary>

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
54:usage() {
58:Usage:
60:  install.sh --uninstall
61:  install.sh --uninstall --purge
64:--purge additionally removes the current user's documented hvir settings and cache.
73:    --uninstall) operation='uninstall' ;;
74:    --help | -h)
85:    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
142:  require_absolute_tool /usr/bin/sudo
514:      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
521:      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
555:      /usr/bin/sudo /usr/bin/apt remove -y hvir
565:      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
566:      /usr/bin/sudo /bin/rm -f -- \
569:      /usr/bin/sudo /bin/rmdir '/Library/Application Support/hvir' 2>/dev/null || true
570:      /usr/bin/sudo /usr/sbin/pkgutil --forget dev.hvir.app >/dev/null
<shellId: 117 completed with exit code 0>
```

</details>


---

<sub>10m 10s</sub>

### `bash`

**Read installer usage text and release URL derivation**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '54,100p' scripts/native-installer.template.sh; grep -nE "release-manifest|latest/download|HVIR_RELEASE_BASE_URL" scripts/*.sh scripts/*.mts .github/workflows/release.yml 2>/dev/null | head -12

<details>
<summary>47 lines</summary>

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
scripts/native-installer.template.sh:5:readonly HVIR_RELEASE_BASE_URL=@@HVIR_RELEASE_BASE_URL@@
scripts/native-installer.template.sh:243:      "$HVIR_RELEASE_BASE_URL/$artifact_name"
.github/workflows/release.yml:563:            release-manifest.json |
<shellId: 118 completed with exit code 0>
```

</details>


---

<sub>10m 17s</sub>

### `bash`

**Find repository and release URL references**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "releases/download|releases/latest|jarmak-personal" --include=*.ts --include=*.mts --include=*.yml --include=*.sh --include=*.json --include=*.md . 2>/dev/null | grep -v node_modules | grep -v "^./out/" | head -20

<details>
<summary>21 lines</summary>

```
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
<shellId: 119 completed with exit code 0>
```

</details>


---

<sub>10m 26s</sub>

### `bash`

**Check macOS minimum version and installer prerequisites**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "minimumSystemVersion|sw_vers|MACOSX_DEPLOYMENT|LSMinimumSystemVersion|macOS 1|macOS 2" electron-builder*.yml scripts/native-installer.template.sh scripts/*.mts scripts/*.sh .github/workflows/release.yml 2>/dev/null | head; echo ---; sed -n '100,160p' scripts/native-installer.template.sh

<details>
<summary>61 lines</summary>

```
---
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
<shellId: 120 completed with exit code 0>
```

</details>


---

<sub>10m 43s</sub>

### `bash`

**Verify provider display names and Mod key semantics**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rhE "displayName: '" src/main/harness/providers/*.ts; echo "--- Mod semantics ---"; grep -nE "Mod|metaKey|ctrlKey|platform" src/shared/keybindings.ts | head -20

<details>
<summary>35 lines</summary>

```
displayName: 'Claude Code',
      displayName: 'Claude Code',
    displayName: 'Codex',
      displayName: 'Codex',
    displayName: 'Cursor CLI',
      displayName: 'Cursor CLI',
    displayName: 'Gemini CLI',
      displayName: 'Gemini CLI',
    displayName: 'GitHub Copilot CLI',
      displayName: 'GitHub Copilot CLI',
    displayName: 'Pi',
      displayName: 'Pi',
    displayName: 'Shell',
      displayName: 'Shell',
    displayName: 'Custom',
--- Mod semantics ---
2:  'cycleViewMode',
19:  cycleViewMode: 'Mod+Shift+M',
20:  findFile: 'Mod+P',
21:  findInFile: 'Mod+F',
22:  // Keep ordinary PTY Ctrl+F available on every platform. Terminal search uses
24:  findInTerminal: 'Mod+Shift+F',
26:  focusTerminal: 'Mod+J',
27:  focusViewer: 'Mod+1',
28:  focusTree: 'Mod+0',
29:  toggleTerminalFocus: 'Mod+Shift+J',
30:  nextWorkspace: 'Mod+Alt+]',
31:  previousWorkspace: 'Mod+Alt+[',
44:  if (action === 'cycleViewMode') return context !== 'terminal'
51:  readonly ctrlKey: boolean
52:  readonly metaKey: boolean
98:  const modDown = mac ? event.metaKey : event.ctrlKey
108:    event.ctrlKey === (parsed.ctrl || (parsed.mod && !mac)) &&
109:    event.metaKey === (parsed.meta || (parsed.mod && mac)) &&
<shellId: 121 completed with exit code 0>
```

</details>


---

<sub>10m 43s</sub>

### `bash`

**Check terminal paste/image support files**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/renderer/src/terminal | grep -iE "paste|image|clipboard|drop"; sed -n '1,30p' src/renderer/src/terminal/remote-image-paste.ts 2>/dev/null | head -40

```
ghostty-terminal-file-paste.ts
terminal-clipboard-osc.ts
terminal-clipboard-write.ts
terminal-clipboard.ts
<shellId: 122 completed with exit code 0>
```


---

<sub>10m 46s</sub>

### `bash`

**Read terminal file paste implementation head**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,50p' src/renderer/src/terminal/ghostty-terminal-file-paste.ts; grep -rnE "cycleViewMode|context !== 'terminal'" src/shared/keybindings.ts | head -3; sed -n '40,48p' src/shared/keybindings.ts

<details>
<summary>23 lines</summary>

```
import type { HvirApi } from '../../../shared'

type GhosttyFilePasteApi = Pick<HvirApi, 'invoke' | 'resolveTerminalClipboardFilePaste'>

/** Select the browser File fallback or the owner-scoped native clipboard edge. */
export function resolveGhosttyTerminalFilePaste(
  api: GhosttyFilePasteApi,
  file: File | undefined,
): string | undefined | Promise<string | undefined> {
  return file
    ? api.resolveTerminalClipboardFilePaste(file)
    : api.invoke('terminal:resolve-file-clipboard', {})
}
src/shared/keybindings.ts:2:  'cycleViewMode',
src/shared/keybindings.ts:19:  cycleViewMode: 'Mod+Shift+M',
src/shared/keybindings.ts:40:  if (action === 'findFile') return context !== 'terminal'
  if (action === 'findFile') return context !== 'terminal'
  if (action === 'findInFile') return context === 'workbench'
  if (action === 'findInTerminal') return context === 'terminal'
  if (action === 'goToLine') return context === 'workbench'
  if (action === 'cycleViewMode') return context !== 'terminal'
  return true
}

export interface KeyboardStroke {
<shellId: 123 completed with exit code 0>
```

</details>


---

<sub>10m 50s</sub>

### `bash`

**Locate main-side clipboard file paste handling**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "resolve-file-clipboard|resolveTerminalClipboardFilePaste" src/main src/preload src/shared --include=*.ts -l | head; ls src/main/terminal 2>/dev/null | head -30

<details>
<summary>13 lines</summary>

```
src/main/ipc/features/terminal-file-paste.ts
src/main/ipc/authority-channel-policy.ts
src/preload/index.ts
src/shared/ipc.ts
src/shared/ipc/terminal.ts
electron-clipboard-file-paste.ts
renderer-pty-lifecycle.ts
session-registry.ts
terminal-identity-publication.ts
terminal-launch-admission.ts
terminal-start-response.ts
terminal-workspace-move-coordinator.ts
<shellId: 124 completed with exit code 0>
```

</details>


---

<sub>10m 52s</sub>

### `bash`

**Read terminal file paste IPC feature**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' src/main/ipc/features/terminal-file-paste.ts

<details>
<summary>13 lines</summary>

```
import type { ElectronClipboardFilePaste } from '../../terminal/electron-clipboard-file-paste'
import type { IpcRegistrar } from '../authority-router'

type TerminalFileClipboard = Pick<ElectronClipboardFilePaste, 'read'>

export function registerTerminalFilePasteIpc(
  ipc: IpcRegistrar,
  terminalFileClipboard: TerminalFileClipboard,
): void {
  ipc.handle('terminal:resolve-file-clipboard', (_request, context) => {
    context.owner()
    return terminalFileClipboard.read()
  })
}
<shellId: 125 completed with exit code 0>
```

</details>


---

<sub>11m 4s</sub>

### `bash`

**Map tracked top-level layout and src subdirectories**

$ cd /private/var/tmp/ws/c9859428/hvir && git ls-files | awk -F/ '{print $1}' | sort | uniq -c | sort -rn | head -30; echo ---; git ls-files src | awk -F/ '{print $1"/"$2}' | sort | uniq -c; echo ---; ls build build/native 2>/dev/null; ls src/renderer/src | head -40

<details>
<summary>72 lines</summary>

```
695 src
 401 test
 106 scripts
  19 build
  12 .github
   5 packages
   1 vitest.config.ts
   1 tsconfig.web.json
   1 tsconfig.node.json
   1 tsconfig.json
   1 tsconfig.base.json
   1 THIRD_PARTY_NOTICES.md
   1 stryker.config.json
   1 package.json
   1 package-lock.json
   1 LICENSE
   1 eslint.config.mjs
   1 electron.vite.config.ts
   1 electron-builder.yml
   1 electron-builder.ssh-acceptance.yml
   1 .prettierrc.json
   1 .prettierignore
   1 .gitignore
   1 .githooks
---
 294 src/main
   3 src/preload
 349 src/renderer
  47 src/shared
   2 src/workers
---
build:
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

build/native:
hvir-command
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
<shellId: 126 completed with exit code 0>
```

</details>


---

<sub>11m 8s</sub>

### `bash`

**Print the full npm scripts table**

$ cd /private/var/tmp/ws/c9859428/hvir && node -e "const p=require('./package.json');for(const [k,v] of Object.entries(p.scripts)) console.log(k.padEnd(34), v.length>110? v.slice(0,107)+'...':v)"

<details>
<summary>56 lines</summary>

```
postinstall                        npm run install:runtime
install:runtime                    install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebui...
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
verify                             npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typechec...
smoke                              npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-w...
smoke:macos                        npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-w...
smoke:macos:ci                     npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-w...
smoke:scenario                     npm run build:smoke && node scripts/run-smoke-scenarios.mts
smoke:isolation                    npm run build:smoke && node scripts/run-smoke-interruption.mts
acceptance:ssh:real-host           vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptanc...
smoke:linux:installed              bash scripts/run-linux-package-smoke.sh
smoke:macos:installed              bash scripts/run-macos-package-smoke.sh
smoke:capacity                     npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts
smoke:development-performance      node scripts/run-smoke-scenarios.mts development-performance
performance:capacity               npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled nod...
gauntlet                           bash scripts/phase8-gauntlet.sh
<shellId: 127 completed with exit code 0>
```

</details>


---

<sub>11m 17s</sub>

### `bash`

**Confirm packaging output dir and gitignore entries**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,40p' electron-builder.yml; cat .gitignore | head -30

<details>
<summary>57 lines</summary>

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
<shellId: 128 completed with exit code 0>
```

</details>


---

<sub>11m 28s</sub>

### `bash`

**Get third-party URLs and license header**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "https?://|^#" THIRD_PARTY_NOTICES.md | head -30; sed -n '1,12p' LICENSE

<details>
<summary>20 lines</summary>

```
1:# Third-party notices
8:## Skill Steward rename-noreplace binding
10:Source: <https://github.com/CongBao/skill-steward>
39:## ghostty-web
41:Source: <https://github.com/coder/ghostty-web>
44:[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
74:## iTerm2-Color-Schemes theme collection
76:Source: <https://github.com/mbadolato/iTerm2-Color-Schemes>
111:## Ghostty terminal core
113:Source: <https://github.com/ghostty-org/ghostty>
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
<shellId: 129 completed with exit code 0>
```

</details>


---

<sub>11m 37s</sub>

### `bash`

**Verify badge count behavior and list main modules**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rn "setBadgeCount" src --include=*.ts | head -5; grep -rnE "BADGE|badge" src/main/attention/*.ts 2>/dev/null | head -12; ls src/main | head -60

<details>
<summary>42 lines</summary>

```
src/main/attention-badge.ts:7:  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}
src/main/attention-badge.ts:51:      if (this.setBadgeCount(count) === false) this.failed = true
src/main/index.ts:345:        return app.setBadgeCount(count)
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
<shellId: 130 completed with exit code 0>
```

</details>


---

<sub>11m 38s</sub>

### `bash`

**Read attention badge implementation**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,70p' src/main/attention-badge.ts

<details>
<summary>59 lines</summary>

```
/** Quiet OS-level aggregation for actionable terminal attention. */
export class AttentionBadge {
  private readonly owners = new Map<string, { count: number; focused: boolean }>()
  private lastRendered = -1
  private failed = false

  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}

  update(ownerId: number, count: number, ownerGeneration = 0): void {
    const key = ownerKey(ownerId, ownerGeneration)
    const current = this.owners.get(key) ?? { count: 0, focused: false }
    this.owners.set(key, { ...current, count: cleanCount(count) })
    this.render()
  }

  setFocused(ownerId: number, focused: boolean, ownerGeneration = 0): void {
    const key = ownerKey(ownerId, ownerGeneration)
    const current = this.owners.get(key) ?? { count: 0, focused: false }
    this.owners.set(key, { ...current, focused })
    this.render()
  }

  remove(ownerId: number, ownerGeneration?: number): void {
    if (ownerGeneration === undefined) {
      for (const key of this.owners.keys()) {
        if (key.startsWith(`${ownerId}:`)) this.owners.delete(key)
      }
    } else {
      this.owners.delete(ownerKey(ownerId, ownerGeneration))
    }
    this.render()
  }

  clear(): void {
    this.owners.clear()
    this.render()
  }

  private render(): void {
    const focused = [...this.owners.values()].some((owner) => owner.focused)
    const count = focused
      ? 0
      : Math.min(
          99,
          [...this.owners.values()].reduce((total, owner) => total + owner.count, 0),
        )
    if (count === this.lastRendered) return
    this.lastRendered = count
    if (this.failed) return
    try {
      if (this.setBadgeCount(count) === false) this.failed = true
    } catch (error) {
      this.failed = true
      console.warn('[attention] OS badge unavailable', error)
    }
  }
}

function ownerKey(ownerId: number, ownerGeneration: number): string {
  return `${ownerId}:${ownerGeneration}`
}

function cleanCount(value: number): number {
  if (!Number.isSafeInteger(value)) return 0
  return Math.max(0, Math.min(99, value))
}
<shellId: 131 completed with exit code 0>
```

</details>


---

<sub>11m 46s</sub>

### `bash`

**Check how Git runs for remote hosts**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "runGit|execGit|spawnCommand|execCommand|exec\(|git" src/main/project-host/project-host.ts | head -20; ls src/main/project-host src/main/git | head -60

<details>
<summary>40 lines</summary>

```
43:   * until EOF cannot hang. Buffered `exec()` always ignores this option and
269:  exec(command: string, args: readonly string[], opts?: ExecOptions): Promise<ExecResult>
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
<shellId: 132 completed with exit code 0>
```

</details>


---

<sub>11m 48s</sub>

### `bash`

**Read Git command context to confirm host execution**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/main/git/git-command-context.ts

<details>
<summary>54 lines</summary>

```
import {
  basenameHostPath,
  boundTextWorkload,
  dirnameHostPath,
  hostPath,
  GIT_CHANGE_DISPLAY_LIMIT,
  measureTextWorkload,
  type ExecResult,
  type HostId,
  type HostPath,
  type Stat,
  type TextWorkload,
} from '../../shared'
import type { ExecOptions } from '../project-host'

const GIT_STATUS_MAX_BUFFER = 20 * 1024 * 1024
const GIT_STATUS_MAX_RECORDS = (GIT_CHANGE_DISPLAY_LIMIT + 1) * 2

/** The exact host operations used by the off-thread Git engine. */
export interface GitExecOptions extends ExecOptions {
  /** Permit one exact read-only Git command to persist refreshed index stat data. */
  readonly allowIndexRefresh?: true
}

export interface GitHostPort {
  readonly hostId: HostId
  exec(
    command: string,
    args: readonly string[],
    opts?: GitExecOptions,
  ): Promise<ExecResult>
  readTextFile(path: HostPath): Promise<string>
  readTextFilePrefix(path: HostPath, maxBytes: number): Promise<TextWorkload>
  stat(path: HostPath): Promise<Stat>
}

export interface GitProjectContext {
  readonly repositoryRoot: HostPath
  readonly commandRoot: HostPath
  readonly repositoryPrefix: string
}

export interface GitRepositoryContext {
  readonly repositoryRoot: HostPath
  readonly commandRoot: HostPath
  readonly relativePath: string
}

/** Shared command, cancellation, root-validation, and error policy. */
export class GitCommandContext {
  constructor(
    readonly host: GitHostPort,
    private readonly projectRoot?: HostPath,
  ) {}

  assertHost(path: HostPath): void {
    if (path.hostId !== this.host.hostId) {
      throw new Error(`GitEngine received path for host '${path.hostId}'`)
    }
  }
<shellId: 133 completed with exit code 0>
```

</details>


---

<sub>12m 5s</sub>

### `bash`

**Verify Sessions overview actions and title**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "Interact|>Open<|'Open'" src/renderer/src/sessions/*.tsx | head -10; grep -rn "hvir sessions" src/renderer/src --include=*.tsx | head -3

<details>
<summary>10 lines</summary>

```
src/renderer/src/sessions/SessionsOverview.tsx:461:                                  onInteract={
src/renderer/src/sessions/SessionsOverviewCard.tsx:17:  onInteract,
src/renderer/src/sessions/SessionsOverviewCard.tsx:23:  readonly onInteract?: () => void
src/renderer/src/sessions/SessionsOverviewCard.tsx:48:          {onInteract ? (
src/renderer/src/sessions/SessionsOverviewCard.tsx:49:            <button type="button" onClick={onInteract}>
src/renderer/src/sessions/SessionsOverviewCard.tsx:50:              Interact
src/renderer/src/sessions/SessionsOverviewCard.tsx:55:              {opening ? 'Opening…' : 'Open'}
src/renderer/src/sessions/SessionsOverview.tsx:325:            title="No hvir sessions"
src/renderer/src/sessions/SessionsOverview.tsx:374:            <div className="sessions-groups" role="list" aria-label="hvir sessions">
<shellId: 134 completed with exit code 0>
```

</details>


---

<sub>12m 7s</sub>

### `bash`

**Read Interact action wiring in Sessions overview**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '440,490p' src/renderer/src/sessions/SessionsOverview.tsx; grep -nE "interact|Interact" src/renderer/src/sessions/*.ts | head -10

<details>
<summary>54 lines</summary>

```
else rowElements.current.delete(row.handle)
                                }}
                                onFocus={() => setSelected(row.handle)}
                                onClick={() => setSelected(row.handle)}
                                onKeyDown={(event) => {
                                  if (
                                    event.key === 'Enter' &&
                                    event.target === event.currentTarget
                                  ) {
                                    event.preventDefault()
                                    if (liveTerminal) void open(row)
                                    return
                                  }
                                  moveFocus(event, row)
                                }}
                              >
                                <SessionsOverviewCard
                                  row={row}
                                  group={policy.group}
                                  opening={opening === row.handle}
                                  onOpen={liveTerminal ? () => void open(row) : undefined}
                                  onInteract={
                                    liveTerminal
                                      ? () => {
                                          detailOrigin.current =
                                            sessionsTerminalOverlayOrigin(
                                              rowElements.current.get(row.handle),
                                            )
                                          detail.open(row, source.snapshot(), foreground)
                                        }
                                      : undefined
                                  }
                                />
                              </article>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </section>
                )
              })}
            </div>
          </>
        )}
      </main>
      {detailState.status !== 'inactive' ? (
        <SessionsTerminalDetail
          controller={detail}
          state={detailState}
          origin={detailOrigin.current}
src/renderer/src/sessions/sessions-terminal-surface.ts:68:      return 'This terminal surface is not ready for interaction.'
src/renderer/src/sessions/sessions-terminal-surface.ts:70:      return 'The live terminal changed before interaction began.'
<shellId: 135 completed with exit code 0>
```

</details>


---

<sub>12m 13s</sub>

### `bash`

**Read terminal link activation handler**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '770,830p' src/renderer/src/terminal/ghostty-terminal-pane.ts

<details>
<summary>40 lines</summary>

```
for (const candidate of detectTerminalFileLinks(lineText)) {
      links.push(
        this.link(
          { kind: 'file', target: candidate.target },
          y,
          candidate.start,
          candidate.end,
        ),
      )
    }
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
<shellId: 136 completed with exit code 0>
```

</details>


---

<sub>12m 20s</sub>

### `bash`

**Find keybinding settings UI**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/renderer/src/settings src/renderer/src/settings/sections 2>/dev/null; grep -rn "keybinding" -i src/renderer/src/settings/sections/*.tsx | head -12

<details>
<summary>50 lines</summary>

```
src/renderer/src/settings:
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

src/renderer/src/settings/sections:
AppearanceSettings.tsx
GitSettings.tsx
KeybindingsSettings.tsx
TerminalSettings.tsx
TypographyFontField.tsx
src/renderer/src/settings/sections/KeybindingsSettings.tsx:6:export function KeybindingsSettings({
src/renderer/src/settings/sections/KeybindingsSettings.tsx:18:  const keybindingError = validation?.fieldId === 'settings-keybindings-json'
src/renderer/src/settings/sections/KeybindingsSettings.tsx:19:  const describedBy = keybindingError
src/renderer/src/settings/sections/KeybindingsSettings.tsx:20:    ? 'settings-keybindings-help settings-keybindings-error'
src/renderer/src/settings/sections/KeybindingsSettings.tsx:21:    : 'settings-keybindings-help'
src/renderer/src/settings/sections/KeybindingsSettings.tsx:24:      section="keybindings"
src/renderer/src/settings/sections/KeybindingsSettings.tsx:25:      title="Keybindings"
src/renderer/src/settings/sections/KeybindingsSettings.tsx:29:        <label className="settings-keybindings" htmlFor="settings-keybindings-json">
src/renderer/src/settings/sections/KeybindingsSettings.tsx:30:          <span>Keybinding overrides (JSON)</span>
src/renderer/src/settings/sections/KeybindingsSettings.tsx:32:            id="settings-keybindings-json"
src/renderer/src/settings/sections/KeybindingsSettings.tsx:34:            value={draft.keybindingsJson}
src/renderer/src/settings/sections/KeybindingsSettings.tsx:35:            aria-invalid={keybindingError}
<shellId: 137 completed with exit code 0>
```

</details>


---

<sub>12m 22s</sub>

### `bash`

**Read keybinding and terminal settings labels**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '20,70p' src/renderer/src/settings/sections/KeybindingsSettings.tsx; grep -nE "title=|<span>" src/renderer/src/settings/sections/TerminalSettings.tsx src/renderer/src/settings/sections/GitSettings.tsx | head -30

<details>
<summary>42 lines</summary>

```
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
src/renderer/src/settings/sections/TerminalSettings.tsx:24:      title="Terminal"
src/renderer/src/settings/sections/TerminalSettings.tsx:31:            <span>Cursor shape</span>
src/renderer/src/settings/sections/TerminalSettings.tsx:49:            <span>Cursor blinking</span>
src/renderer/src/settings/sections/TerminalSettings.tsx:72:            <span>Font ligatures</span>
src/renderer/src/settings/sections/TerminalSettings.tsx:93:          <span>Message submission</span>
src/renderer/src/settings/sections/TerminalSettings.tsx:111:          <span>Idle-after-output threshold</span>
src/renderer/src/settings/sections/TerminalSettings.tsx:133:          <span>On app start</span>
src/renderer/src/settings/sections/GitSettings.tsx:19:      title="Git"
src/renderer/src/settings/sections/GitSettings.tsx:24:          <span>Git auto-fetch</span>
<shellId: 138 completed with exit code 0>
```

</details>


---

<sub>12m 26s</sub>

### `bash`

**Read keybinding override format**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/renderer/src/settings/keybindings.ts; sed -n '1,18p' src/shared/keybindings.ts

<details>
<summary>37 lines</summary>

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
<shellId: 139 completed with exit code 0>
```

</details>


---

<sub>12m 29s</sub>

### `bash`

**Read parseKeybindingOverrides to document format**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -n "export function parseKeybindingOverrides" -A 45 src/shared/keybindings.ts | head -80

<details>
<summary>47 lines</summary>

```
66:export function parseKeybindingOverrides(value: unknown): KeybindingMap {
67-  if (!value || typeof value !== 'object' || Array.isArray(value)) {
68-    throw new Error('Keybindings must be a JSON object')
69-  }
70-  const overrides = value as Record<string, unknown>
71-  const unknown = Object.keys(overrides).find(
72-    (key) => !KEYBINDING_ACTIONS.includes(key as KeybindingAction),
73-  )
74-  if (unknown) throw new Error(`Unknown keybinding action: ${unknown}`)
75-  const bindings = { ...DEFAULT_KEYBINDINGS }
76-  for (const action of KEYBINDING_ACTIONS) {
77-    const candidate = overrides[action]
78-    if (candidate === undefined) continue
79-    if (typeof candidate !== 'string') {
80-      throw new Error(`${action} must be a keybinding string`)
81-    }
82-    parseKeybinding(candidate)
83-    bindings[action] = candidate
84-  }
85-  return bindings
86-}
87-
88-export function keybindingOverridesJson(bindings: KeybindingMap): string {
89-  return JSON.stringify(bindings, null, 2)
90-}
91-
92-export function matchesKeybinding(
93-  event: KeyboardStroke,
94-  binding: string,
95-  mac: boolean,
96-): boolean {
97-  const parsed = parseKeybinding(binding)
98-  const modDown = mac ? event.metaKey : event.ctrlKey
99-  const bracketCode =
100-    parsed.key === '[' ? 'BracketLeft' : parsed.key === ']' ? 'BracketRight' : undefined
101-  const keyMatches = bracketCode
102-    ? event.code === bracketCode || event.key === parsed.key
103-    : event.key.toLowerCase() === parsed.key.toLowerCase()
104-  return (
105-    keyMatches &&
106-    event.altKey === parsed.alt &&
107-    event.shiftKey === parsed.shift &&
108-    event.ctrlKey === (parsed.ctrl || (parsed.mod && !mac)) &&
109-    event.metaKey === (parsed.meta || (parsed.mod && mac)) &&
110-    (!parsed.mod || modDown)
111-  )
<shellId: 140 completed with exit code 0>
```

</details>


---

<sub>12m 34s</sub>

### `bash`

**Re-read SSH config parser for exact supported keys**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,120p' src/main/project-host/ssh-config.ts

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
<shellId: 141 completed with exit code 0>
```

</details>


---

<sub>12m 40s</sub>

### `bash`

**Verify host-key store and SSH auth ladder**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "known_hosts|known-hosts" src --include=*.ts --include=*.tsx | head -8; echo ---; grep -nE "agent|keyboard-interactive|password|publickey|SSH_AUTH_SOCK" src/main/project-host/ssh-auth.ts | head -30

```
src/main/index.ts:164:        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
---
4:    'password' | 'passphrase' | 'keyboard-interactive' | 'host-key' | 'host-key-changed'
<shellId: 142 completed with exit code 0>
```


---

<sub>12m 42s</sub>

### `bash`

**Locate SSH auth ladder implementation**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "SSH_AUTH_SOCK|keyboard-interactive|'agent'|authHandler|identity" src/main/project-host/ssh-host.ts src/main/project-host/ssh-identity-source.ts src/main/project-host/ssh-client-lifecycle.ts | head -30

<details>
<summary>25 lines</summary>

```
src/main/project-host/ssh-host.ts:37:import { SshIdentityGeneration } from './ssh-identity-source'
src/main/project-host/ssh-host.ts:61:  readonly identityGeneration: SshIdentityGeneration
src/main/project-host/ssh-host.ts:223:    for (const attempt of this.credentialAttempts) attempt.identityGeneration.release()
src/main/project-host/ssh-host.ts:792:      authHandler: (methods, _partial, next) => {
src/main/project-host/ssh-host.ts:803:            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
src/main/project-host/ssh-host.ts:805:          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
src/main/project-host/ssh-host.ts:806:            attempted.add('agent')
src/main/project-host/ssh-host.ts:807:            return { type: 'agent', username: config.user, agent: agentSocket }
src/main/project-host/ssh-host.ts:809:          const identity = available.has('publickey')
src/main/project-host/ssh-host.ts:810:            ? await credentialAttempt.identityGeneration.next()
src/main/project-host/ssh-host.ts:813:          if (identity) {
src/main/project-host/ssh-host.ts:815:            const parsed = utils.parseKey(identity.privateKey)
src/main/project-host/ssh-host.ts:817:              passphrase = this.cachedPassphrases.get(identity.path)
src/main/project-host/ssh-host.ts:827:                  title: `Unlock ${identity.path}`,
src/main/project-host/ssh-host.ts:831:              if (passphrase) credentialAttempt.passphrases.set(identity.path, passphrase)
src/main/project-host/ssh-host.ts:838:              key: identity.privateKey,
src/main/project-host/ssh-host.ts:842:          if (available.has('keyboard-interactive') && !attempted.has('keyboard')) {
src/main/project-host/ssh-host.ts:845:              type: 'keyboard-interactive',
src/main/project-host/ssh-host.ts:856:                  kind: 'keyboard-interactive',
src/main/project-host/ssh-host.ts:956:      identityGeneration: new SshIdentityGeneration(this.options.identitySource),
src/main/project-host/ssh-host.ts:963:    attempt.identityGeneration.release()
src/main/project-host/ssh-identity-source.ts:15:/** Reads current local identity material and owns every mutable buffer until release. */
src/main/project-host/ssh-identity-source.ts:104:    if (!this.value) throw new Error('SSH identity lease is released')
src/main/project-host/ssh-client-lifecycle.ts:103:    level === 'agent' ||
<shellId: 143 completed with exit code 0>
```

</details>


---

<sub>12m 49s</sub>

### `bash`

**Re-verify project root launch argument and env var**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "HVIR_PROJECT_ROOT|--project-root|project-root" src/main --include=*.ts | grep -v "smoke" | head -10

```
src/main/index.ts:430:    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
src/main/index.ts:431:    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
<shellId: 144 completed with exit code 0>
```


---

<sub>12m 55s</sub>

### `bash`

**List smoke scenario names and default smoke command**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "^\s+'[a-z0-9-]+'," src/main/smoke/scenario-selection.mts | head -40; node -e "const p=require('./package.json').scripts;console.log(p.smoke)"

<details>
<summary>26 lines</summary>

```
2:  'pty-native',
3:  'viewer-position',
4:  'viewer-content',
5:  'git-workflow',
6:  'workspace-remote',
7:  'web-pane',
8:  'renderer-authority',
9:  'platform-contracts',
10:  'diagnostic-report-restart',
11:  'renderer-recovery',
12:  'sessions-projection',
13:  'document-review',
14:  'development-performance',
15:  'terminal-presentation',
16:  'terminal-lifecycle',
17:  'native-host-worker',
18:  'workbench-health',
19:  'terminal-theme',
20:  'terminal-move',
21:  'workbench-layout',
22:  'terminal-split',
23:  'harness-profiles',
24:  'app-settings',
25:  'capacity',
npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles
<shellId: 145 completed with exit code 0>
```

</details>


---

<sub>12m 59s</sub>

### `bash`

**Re-check release workflow stages and wording**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "immutable|acceptance|--latest|workflow_dispatch|bump|runs-on|name: " .github/workflows/release.yml | head -60

<details>
<summary>61 lines</summary>

```
1:name: Release
4:  workflow_dispatch:
6:      bump:
29:    name: Prepare ${{ inputs.bump }} release
30:    runs-on: ubuntu-24.04
43:      - name: Require the default branch
52:      - name: Check out release history
59:      - name: Select trusted release source
82:      - name: Set up Node.js
88:      - name: Select release version
91:          BUMP: ${{ inputs.bump }}
123:                echo "::error::$tag is already published; immutable releases require a new version"
129:            echo "::error::$tag already exists; rerun with bump=current"
146:      - name: Require exact-source coherent CI evidence
147:        if: inputs.bump == 'current'
155:      - name: Prepare pull request or native release source
158:          BUMP: ${{ inputs.bump }}
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
356:          useradd --create-home --shell /bin/bash hvir-acceptance
357:          printf 'hvir-acceptance ALL=(ALL) NOPASSWD: ALL\n' \
358:            >/etc/sudoers.d/hvir-acceptance
359:          chmod 0440 /etc/sudoers.d/hvir-acceptance
361:      - name: Verify and restore the exact package for acceptance
367:          chown -R hvir-acceptance:hvir-acceptance "$GITHUB_WORKSPACE"
369:      - name: Install, update, launch, and remove native package
371:          sudo -u hvir-acceptance env \
372:            HOME=/home/hvir-acceptance \
<shellId: 146 completed with exit code 0>
```

</details>


---

<sub>13m 8s</sub>

### `bash`

**Verify legacy npm cleanup and macOS verification steps**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "hvir-workbench|legacy" scripts/native-installer.template.sh | head -20; grep -nE "stapler|check-signature|spctl|assess" scripts/native-installer.template.sh | head

<details>
<summary>26 lines</summary>

```
26:legacy_launcher=''
27:legacy_npm=''
28:legacy_cache=''
369:legacy_cache_root() {
379:discover_legacy_launcher() {
387:  legacy_npm=$(command -v npm 2>/dev/null || true)
388:  if [[ "$legacy_npm" != /* || ! -x "$legacy_npm" ]]; then
392:  npm_prefix=$("$legacy_npm" prefix -g)
393:  npm_root=$("$legacy_npm" root -g)
395:    echo 'The legacy npm installation reported a non-absolute global prefix.' >&2
399:  expected_target=${npm_root%/}/hvir-workbench/bin/hvir.mjs
410:    echo "The existing hvir launcher does not target hvir-workbench: $found" >&2
413:  listing=$("$legacy_npm" ls -g --depth=0 --parseable hvir-workbench)
414:  if ! list_contains_exact_line "${npm_root%/}/hvir-workbench" <<<"$listing"; then
415:    echo 'npm did not confirm ownership of the existing hvir-workbench launcher.' >&2
420:      "The verified legacy launcher occupies $native_command; move hvir-workbench to a user-owned npm prefix before native migration." \
424:  legacy_launcher=$found
425:  legacy_cache=$(legacy_cache_root)
444:safe_remove_legacy_cache() {
445:  [[ -n "$legacy_cache" ]] || return 0
158:    require_absolute_tool /usr/sbin/spctl
313:    /usr/sbin/pkgutil --check-signature "$artifact"
330:    /usr/bin/xcrun stapler validate "$artifact"
332:  stage='assessing the macOS package with Gatekeeper'
335:    /usr/sbin/spctl --assess --type install --verbose=2 "$artifact"
<shellId: 147 completed with exit code 0>
```

</details>


---

<sub>13m 18s</sub>

### `bash`

**Check for other outbound network APIs in src**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "from 'node:https?'|require\('https?'\)|from 'https?'|node:net'|from 'net'|WebSocket\(|XMLHttpRequest|navigator\.sendBeacon|dns\." src --include=*.ts --include=*.tsx --include=*.mts | grep -v "src/main/smoke" | head -20

```
src/main/web-pane/loopback-http-proxy.ts:3:import { BlockList, connect as connectSocket, type Socket } from 'node:net'
src/main/web-pane/loopback-http-proxy.ts:12:} from 'node:http'
src/main/project-host/local-host.ts:20:import { connect } from 'node:net'
<shellId: 148 completed with exit code 0>
```


---

<sub>13m 28s</sub>

### `bash`

**Confirm Linux/macOS runner versions in release workflow**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '176,200p' .github/workflows/release.yml; grep -nE "runs-on|os:|macos" .github/workflows/release.yml | sed -n '1,40p'

<details>
<summary>41 lines</summary>

```
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
30:    runs-on: ubuntu-24.04
181:    runs-on: ${{ matrix.os }}
188:            os: ubuntu-22.04
193:            os: ubuntu-22.04-arm
259:    runs-on: ${{ matrix.os }}
266:            os: ubuntu-24.04
271:            os: ubuntu-24.04-arm
313:    runs-on: ${{ matrix.os }}
323:            os: ubuntu-22.04
328:            os: ubuntu-22.04-arm
377:  build-macos:
381:    uses: ./.github/workflows/macos-package-release.yml
394:      - build-macos
400:      needs.build-macos.result == 'success'
401:    runs-on: ubuntu-24.04
436:          name: release-macos-arm64
494:            --macos-team-id "$MACOS_TEAM_ID" \
<shellId: 149 completed with exit code 0>
```

</details>


---

<sub>13m 40s</sub>

### `bash`

**Locate terminal attention model sources**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/shared | head -60; grep -rln "idleThreshold\|idle-after-output\|IdleAfterOutput" src --include=*.ts --include=*.tsx | head

<details>
<summary>43 lines</summary>

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
src/renderer/src/settings/settings.ts
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/settings-draft.ts
src/renderer/src/terminal/TerminalWorkspace.tsx
src/renderer/src/terminal/use-terminal-attention-controller.ts
<shellId: 150 completed with exit code 0>
```

</details>


---

<sub>13m 42s</sub>

### `bash`

**Read terminal attention state definitions**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,80p' src/shared/terminal-attention.ts

```
/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
export type TerminalAttentionState = 'working' | 'bell' | 'idle'
<shellId: 151 completed with exit code 0>
```


---

<sub>13m 43s</sub>

### `bash`

**Read attention controller for state semantics**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,120p' src/renderer/src/terminal/use-terminal-attention-controller.ts

<details>
<summary>111 lines</summary>

```
import { useCallback, useEffect, useRef } from 'react'

import {
  nextTerminalAttention,
  terminalActionableAttentionCount,
  terminalIdleAttentionAfterInput,
  terminalOutputAttentionDecision,
  terminalWorkingCount,
  type TerminalAttention,
  type TerminalIdleAttentionState,
} from './terminal-attention'
import type { TerminalSession } from './terminal-workspace-model'

export function useTerminalAttentionController({
  idleThresholdMs,
  onUpdateSession,
}: {
  readonly idleThresholdMs: number
  readonly onUpdateSession: (
    id: string,
    update: (session: TerminalSession) => TerminalSession,
  ) => void
}) {
  const updateRef = useRef(onUpdateSession)
  const idleThresholdRef = useRef(idleThresholdMs)
  const appFocused = useRef(document.hasFocus())
  const focusedTerminal = useRef<string | undefined>(undefined)
  const idleTimers = useRef(new Map<string, number>())
  const idleStates = useRef(new Map<string, TerminalIdleAttentionState>())
  updateRef.current = onUpdateSession
  idleThresholdRef.current = idleThresholdMs

  const clearTimer = useCallback((id: string): void => {
    const timer = idleTimers.current.get(id)
    if (timer !== undefined) window.clearTimeout(timer)
    idleTimers.current.delete(id)
  }, [])

  const reset = useCallback((): void => {
    for (const timer of idleTimers.current.values()) window.clearTimeout(timer)
    idleTimers.current.clear()
    idleStates.current.clear()
    focusedTerminal.current = undefined
  }, [])

  useEffect(() => {
    const focused = (): void => {
      appFocused.current = true
      focusedTerminal.current =
        document.activeElement instanceof Element
          ? document.activeElement.closest<HTMLElement>('[data-terminal-session]')
              ?.dataset['terminalSession']
          : undefined
    }
    const blurred = (): void => {
      appFocused.current = false
      focusedTerminal.current = undefined
    }
    const trackFocus = (event: FocusEvent): void => {
      const terminal =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('[data-terminal-session]')
          : null
      focusedTerminal.current = terminal?.dataset['terminalSession']
    }
    const trackPointer = (event: PointerEvent): void => {
      if (
        event.target instanceof Element &&
        !event.target.closest('[data-terminal-session]')
      ) {
        focusedTerminal.current = undefined
      }
    }
    window.addEventListener('focus', focused)
    window.addEventListener('blur', blurred)
    window.addEventListener('focusin', trackFocus)
    window.addEventListener('pointerdown', trackPointer, true)
    return () => {
      window.removeEventListener('focus', focused)
      window.removeEventListener('blur', blurred)
      window.removeEventListener('focusin', trackFocus)
      window.removeEventListener('pointerdown', trackPointer, true)
      reset()
    }
  }, [reset])

  const focusSession = useCallback(
    (id: string): void => {
      clearTimer(id)
      focusedTerminal.current = id
    },
    [clearTimer],
  )

  const forgetSession = useCallback(
    (id: string): void => {
      clearTimer(id)
      idleStates.current.delete(id)
      if (focusedTerminal.current === id) focusedTerminal.current = undefined
    },
    [clearTimer],
  )

  const raiseAttention = useCallback((id: string, attention: TerminalAttention): void => {
    const focused = focusedTerminal.current === id && appFocused.current
    updateRef.current(id, (session) => {
      const nextAttention = nextTerminalAttention(session.attention, attention, focused)
      return nextAttention === session.attention
        ? session
        : { ...session, attention: nextAttention }
    })
  }, [])

  const recordInput = useCallback((id: string, data: string): void => {
    const current = idleStates.current.get(id) ?? 'initial'
    idleStates.current.set(id, terminalIdleAttentionAfterInput(current, data))
  }, [])

  const recordOutput = useCallback(
    (id: string): void => {
<shellId: 152 completed with exit code 0>
```

</details>


---

<sub>13m 51s</sub>

### `bash`

**Check projects bar add-project UI labels**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/renderer/src/workspaces | head -30; grep -rnE "Add project|Add Project|Open project|Open Folder|Add host|Remote|aria-label=\"Add" src/renderer/src/workspaces/*.tsx | head -12

<details>
<summary>23 lines</summary>

```
connection-status.ts
ConnectionStatus.tsx
initial-host-connection.ts
MissingWorkspaceNotice.tsx
project-folder-picker-client.ts
project-session-events.ts
project-session-model.ts
project-session.ts
project-state-delivery.ts
project-watch-interests.ts
ProjectsBar.tsx
SessionDialog.tsx
SshPromptDialog.tsx
workspace-attention.ts
workspace-session-actions.ts
WorkspaceCatalogDialogs.tsx
src/renderer/src/workspaces/ConnectionStatus.tsx:6:export function RemoteConnectionBadge({
src/renderer/src/workspaces/ProjectsBar.tsx:11:import { RemoteConnectionBadge } from './ConnectionStatus'
src/renderer/src/workspaces/ProjectsBar.tsx:229:                    <RemoteConnectionBadge
src/renderer/src/workspaces/ProjectsBar.tsx:259:                    <RemoteConnectionBadge
src/renderer/src/workspaces/SessionDialog.tsx:14:import { RemoteConnectionBadge } from './ConnectionStatus'
src/renderer/src/workspaces/SessionDialog.tsx:243:                    <RemoteConnectionBadge
<shellId: 153 completed with exit code 0>
```

</details>


---

<sub>13m 53s</sub>

### `bash`

**List ProjectsBar visible labels**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "aria-label|title=|>[A-Z][A-Za-z ]+<|label=" src/renderer/src/workspaces/ProjectsBar.tsx | head -40

<details>
<summary>26 lines</summary>

```
187:          aria-label="Projects"
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
<shellId: 154 completed with exit code 0>
```

</details>


---

<sub>13m 58s</sub>

### `bash`

**Read register-project dialog labels**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "<legend|<label|<span>|<h2|<p>|title=\"|placeholder=" src/renderer/src/workspaces/SessionDialog.tsx | head -30

```
224:        <h2 id="session-dialog-title">
<shellId: 155 completed with exit code 0>
```


---

<sub>13m 59s</sub>

### `bash`

**Read SessionDialog markup for host/directory flow**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '195,330p' src/renderer/src/workspaces/SessionDialog.tsx

<details>
<summary>133 lines</summary>

```
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
              onSubmit={(event) => {
                event.preventDefault()
                void selectPath(pathInput)
              }}
            >
              <input
                ref={pathInputRef}
                aria-label="Folder path"
                autoFocus
                disabled={busy}
                value={pathInput}
                onChange={(event) => {
                  setPathInput(event.target.value)
                  setSelectedPath(undefined)
                  setRevealRequest(undefined)
                }}
              />
              <button type="submit" disabled={busy}>
                Show in tree
              </button>
              <button
                type="button"
                disabled={busy || !selectedPath}
                onClick={() => void open()}
              >
                Use this folder
              </button>
            </form>
            {connected ? (
              <div className="recent-folders">
                {recentFolders(connected.host.hostId).map((folder) => (
                  <button
                    type="button"
                    key={folder}
                    disabled={busy}
                    onClick={() => void selectPath(folder)}
                  >
                    {folder}
                  </button>
                ))}
              </div>
            ) : null}
            <div className="folder-browser" aria-label="Folders">
              <div className="folder-selection">
                <small>Selected folder</small>
                <code>{selectedPath ?? 'Choose a folder from the tree'}</code>
                {newFolderName === undefined ? (
                  <button
                    type="button"
                    disabled={busy || !selectedPath}
                    onClick={() => setNewFolderName('')}
                  >
                    New folder
                  </button>
                ) : (
                  <form
                    className="folder-create-form"
                    onSubmit={(event) => {
                      event.preventDefault()
                      void createDirectory()
                    }}
                  >
                    <input
                      aria-label="New folder name"
                      autoFocus
                      disabled={busy}
                      value={newFolderName}
                      onChange={(event) => setNewFolderName(event.target.value)}
                    />
                    <button type="submit" disabled={busy || newFolderName.length === 0}>
<shellId: 156 completed with exit code 0>
```

</details>


---

<sub>14m 7s</sub>

### `bash`

**Find toggleTerminalFocus handler**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rn "toggleTerminalFocus" src/renderer/src --include=*.ts --include=*.tsx | head -6

<details>
<summary>7 lines</summary>

```
src/renderer/src/App.tsx:183:    toggleTerminalFocus,
src/renderer/src/App.tsx:252:    toggleTerminalFocus,
src/renderer/src/workbench/use-workbench-layout.ts:215:  const toggleTerminalFocus = useCallback(
src/renderer/src/workbench/use-workbench-layout.ts:268:    toggleTerminalFocus,
src/renderer/src/workbench/workbench-command-router.ts:12:  readonly toggleTerminalFocus: () => void
src/renderer/src/workbench/workbench-command-router.ts:46:    case 'toggleTerminalFocus':
<shellId: 157 completed with exit code 0>
```

</details>


---

<sub>14m 9s</sub>

### `bash`

**Read focus/toggle commands in workbench layout**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '180,262p' src/renderer/src/workbench/use-workbench-layout.ts

<details>
<summary>76 lines</summary>

```
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
    viewerGroupsRef,
    railMode,
<shellId: 158 completed with exit code 0>
```

</details>


---

<sub>14m 19s</sub>

### `bash`

**Check what echo-worker is and where it is used**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/workers; sed -n '1,30p' src/workers/echo-worker.ts 2>/dev/null; grep -rn "echo-worker" src electron.vite.config.ts --include=*.ts --include=*.mts | head -8

<details>
<summary>32 lines</summary>

```
echo-worker.ts
git-worker.ts
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
src/workers/echo-worker.ts:25:  throw new Error('echo-worker must run as an Electron utility process')
src/main/smoke/index.ts:171:          workerPath('echo-worker.js'),
src/main/index.ts:212:      createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
electron.vite.config.ts:66:          'echo-worker': resolve('src/workers/echo-worker.ts'),
<shellId: 159 completed with exit code 0>
```

</details>


---

<sub>14m 25s</sub>

### `bash`

**Confirm renderer isolation settings**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "contextIsolation|nodeIntegration|sandbox:" src/main --include=*.ts | grep -v smoke | head -10

<details>
<summary>9 lines</summary>

```
src/main/window/electron-window-manager.ts:432:      webPreferences.nodeIntegration = false
src/main/window/electron-window-manager.ts:433:      webPreferences.contextIsolation = true
src/main/window/window-policy.ts:12:    readonly sandbox: boolean
src/main/window/window-policy.ts:13:    readonly contextIsolation: boolean
src/main/window/window-policy.ts:14:    readonly nodeIntegration: boolean
src/main/window/window-policy.ts:48:      sandbox: true,
src/main/window/window-policy.ts:49:      contextIsolation: true,
src/main/window/window-policy.ts:50:      nodeIntegration: false,
<shellId: 160 completed with exit code 0>
```

</details>


---

<sub>14m 34s</sub>

### `bash`

**Read terminal move coordinator to describe it accurately**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/main/terminal/terminal-workspace-move-coordinator.ts

<details>
<summary>56 lines</summary>

```
import {
  hostPathEquals,
  type MoveTerminalRequest,
  type MoveTerminalResponse,
  type PlanTerminalMoveRequest,
  type ProjectState,
  type RegisteredProjectState,
  type HostPath,
  type TerminalMovePlan,
} from '../../shared'
import type { RendererOwner } from '../renderer-resource-scopes'
import type { TerminalMoveSessionStore } from './session-registry'

export interface TerminalMoveProjectPort {
  readonly active: {
    readonly projectId: string
    readonly workspaceId: string
  }
  state(): ProjectState
  projectById(projectId: string): RegisteredProjectState | undefined
  activate(
    projectId: string,
    workspaceId: string,
    options?: { readonly emit?: boolean; readonly acknowledge?: boolean },
  ): Promise<ProjectState>
}

export interface TerminalMoveWorkspacePort {
  serialize<T>(operation: () => Promise<T>): Promise<T>
  replaceWatch(): Promise<void>
}

export interface TerminalMovePtyPort {
  get(id: string):
    | {
        readonly ownerId: number
        readonly ownerGeneration: number
        readonly workspaceRoot: HostPath
      }
    | undefined
  reassignWorkspace(
    id: string,
    ownerId: number,
    sourceRoot: HostPath,
    targetRoot: HostPath,
    ownerGeneration?: number,
  ): unknown
}

export interface TerminalMoveResourcePort {
  reassignWorkspaceResource(
    owner: RendererOwner,
    type: 'pty-session',
    id: string,
    sourceRoot: HostPath,
    targetRoot: HostPath,
  ): void
  disposeResource(owner: RendererOwner, type: 'web-pane', id: string): Promise<boolean>
}
<shellId: 161 completed with exit code 0>
```

</details>


---

<sub>14m 44s</sub>

### `bash`

**Check diff base definitions**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "DiffBase|diffBase|'working-tree'|'branch-point'|'head'" src/shared/viewer-types.ts src/shared/git-types.ts | head -20

```
src/shared/viewer-types.ts:7:export type DiffBase = 'working-tree' | 'head' | 'branch-point'
src/shared/viewer-types.ts:24:  readonly base: DiffBase
src/shared/viewer-types.ts:31:  readonly base: DiffBase
<shellId: 162 completed with exit code 0>
```


---

<sub>14m 46s</sub>

### `bash`

**Read diff base semantics and UI labels**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '1,60p' src/shared/viewer-types.ts; grep -rnE "working-tree" src/renderer/src/viewer/*.tsx src/renderer/src/git/*.tsx 2>/dev/null | head -8

<details>
<summary>53 lines</summary>

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

src/renderer/src/viewer/DiffView.tsx:340:  if (base === 'working-tree') return 'Index → Working tree'
src/renderer/src/viewer/FileViewer.tsx:240:                <option value="working-tree">Index</option>
<shellId: 163 completed with exit code 0>
```

</details>


---

<sub>14m 59s</sub>

### `bash`

**Read message submission and restore settings text**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '88,160p' src/renderer/src/settings/sections/TerminalSettings.tsx

<details>
<summary>65 lines</summary>

```
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
<shellId: 164 completed with exit code 0>
```

</details>


---

<sub>15m 13s</sub>

### `bash`

**Re-verify architecture:check token requirement**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "HVIR_REPO_TOKEN|GITHUB_TOKEN|enforce|process\.env" scripts/architecture-hotspots.mjs | head -20; grep -n "architecture" .github/workflows/ci.yml | head

```

<shellId: 165 completed with exit code 0>
```


---

<sub>15m 15s</sub>

### `bash`

**Inspect architecture hotspots script**

$ cd /private/var/tmp/ws/c9859428/hvir && ls scripts | head -80; grep -rn "enforce" scripts/architecture-hotspots.mjs | head -5; head -40 scripts/architecture-hotspots.mjs

<details>
<summary>57 lines</summary>

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
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()
<shellId: 166 completed with exit code 0>
```

</details>


---

<sub>15m 17s</sub>

### `bash`

**Find enforce-mode token requirement**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "HVIR_REPO_TOKEN|GITHUB_TOKEN|--enforce|enforce" scripts/architecture-hotspots.mts scripts/architecture-github.mts scripts/architecture-policy.mts | head -20

<details>
<summary>6 lines</summary>

```
scripts/architecture-hotspots.mts:82:    const enforce = process.argv.includes('--enforce')
scripts/architecture-hotspots.mts:84:    if (enforce) {
scripts/architecture-hotspots.mts:85:      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
scripts/architecture-hotspots.mts:106:    if (enforce && (report.violations.length || dependencies.violations.length))
scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
<shellId: 167 completed with exit code 0>
```

</details>


---

<sub>15m 29s</sub>

### `bash`

**Confirm release package asset names**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "darwin-arm64|macos-arm64|linux-x64|linux-arm64" scripts/assemble-native-release.mjs scripts/render-native-installer.mjs electron-builder.yml | head -12; sed -n '40,80p' electron-builder.yml

<details>
<summary>42 lines</summary>

```
scripts/assemble-native-release.mjs:28:      name: `hvir-${version}-linux-x64.deb`,
scripts/assemble-native-release.mjs:33:      name: `hvir-${version}-linux-arm64.deb`,
scripts/assemble-native-release.mjs:38:      name: `hvir-${version}-darwin-arm64.pkg`,
scripts/render-native-installer.mjs:138:    '--linux-x64-artifact',
scripts/render-native-installer.mjs:139:    '--linux-arm64-artifact',
scripts/render-native-installer.mjs:140:    '--macos-arm64-artifact',
scripts/render-native-installer.mjs:156:    linuxX64Artifact: values.get('--linux-x64-artifact'),
scripts/render-native-installer.mjs:157:    linuxArm64Artifact: values.get('--linux-arm64-artifact'),
scripts/render-native-installer.mjs:158:    macosArm64Artifact: values.get('--macos-arm64-artifact'),
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
<shellId: 168 completed with exit code 0>
```

</details>


---

<sub>16m 0s</sub>

### `bash`

**Check userData path handling for dev vs packaged**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "setPath\(|app\.setName|userData|user-data-dir|applicationUserDataPath" src/main --include=*.ts | grep -v smoke | head -12; grep -rn "ELECTRON_CLI_ARGS" scripts/run-smoke.sh | head -3

<details>
<summary>14 lines</summary>

```
src/main/application-runtime.ts:16:export function applicationUserDataPath(name: string): string {
src/main/application-runtime.ts:17:  return join(applicationRuntime.userDataRoot, name)
src/main/application-runtime-policy.ts:9:  readonly userDataRoot: string
src/main/application-runtime-policy.ts:13:  getPath(name: 'appData' | 'userData'): string
src/main/application-runtime-policy.ts:14:  setPath(name: 'userData', path: string): void
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:26:  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
src/main/application-runtime-policy.ts:27:  prepareUserDataRoot(userDataRoot)
src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
src/main/application-runtime-policy.ts:29:  return { buildChannel, userDataRoot }
src/main/document-review/document-review-application.ts:2:import { applicationUserDataPath } from '../application-runtime'
src/main/document-review/document-review-application.ts:29:      localPath(applicationUserDataPath('document-review-drafts.json')),
scripts/run-smoke.sh:103:    ELECTRON_CLI_ARGS="[\"--user-data-dir=$user_data_root\"]" \
<shellId: 169 completed with exit code 0>
```

</details>


---

<sub>16m 4s</sub>

### `bash`

**Read package name, productName and metadata**

$ cd /private/var/tmp/ws/c9859428/hvir && node -e "const p=require('./package.json');console.log(p.name,p.productName,p.version,p.private,JSON.stringify(p.engines),p.main,p.homepage,p.author,p.repository)"

```
hvir undefined 0.2.3 true {"node":">=24"} ./out/main/index.js undefined { name: 'hvir contributors' } undefined
<shellId: 170 completed with exit code 0>
```


---

<sub>16m 14s</sub>

### `bash`

**Verify ELECTRON_CLI_ARGS handling by electron-vite**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '85,125p' scripts/run-smoke.sh; grep -rn "ELECTRON_CLI_ARGS" --include=*.ts --include=*.mts --include=*.mjs --include=*.sh . 2>/dev/null | grep -v node_modules | head -5; grep -rn "ELECTRON_CLI_ARGS" node_modules/electron-vite/dist/*.js 2>/dev/null | head -3

<details>
<summary>43 lines</summary>

```
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
./scripts/run-smoke.sh:103:    ELECTRON_CLI_ARGS="[\"--user-data-dir=$user_data_root\"]" \
node_modules/electron-vite/dist/cli.js:59:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
node_modules/electron-vite/dist/cli.js:106:        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
<shellId: 171 completed with exit code 0>
```

</details>


---

<sub>16m 21s</sub>

### `bash`

**Read electron-vite handling of ELECTRON_CLI_ARGS**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '50,64p' node_modules/electron-vite/dist/cli.js; grep -rn "ELECTRON_CLI_ARGS" node_modules/electron-vite/dist/chunks/*.js | head -5

<details>
<summary>17 lines</summary>

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
    }
    const { createServer } = await import('./chunks/lib-7y7CgM8M.js');
node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:224:    const args = process.env.ELECTRON_CLI_ARGS ? JSON.parse(process.env.ELECTRON_CLI_ARGS) : [];
<shellId: 172 completed with exit code 0>
```

</details>


---

<sub>16m 36s</sub>

### `bash`

**List seam rules enforced by check-seams**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "^# |^echo|check_|seam" scripts/check-seams.sh | head -60

<details>
<summary>31 lines</summary>

```
3:# Grep-level enforcement of the architectural seams (AGENTS.md "Respect the
4:# seams"). This is a coarse backstop that complements the precise ESLint rules
5:# in eslint.config.mjs — it catches a violation even if lint is skipped, and
6:# documents the invariants in one readable place.
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
112:  printf '\n\033[31mseam check failed\033[0m\n'
115:printf '\nseam check passed\n'
<shellId: 173 completed with exit code 0>
```

</details>


---

<sub>16m 46s</sub>

### `bash`

**Inspect rename-noreplace package contents**

$ cd /private/var/tmp/ws/c9859428/hvir && git ls-files packages; sed -n '1,30p' packages/rename-noreplace/README.md 2>/dev/null | head -30; cat packages/rename-noreplace/package.json

<details>
<summary>26 lines</summary>

```
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
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
<shellId: 174 completed with exit code 0>
```

</details>


---

<sub>16m 58s</sub>

### `bash`

**Verify document review UI labels and entry points**

$ cd /private/var/tmp/ws/c9859428/hvir && ls src/renderer/src/document-review | head -30; grep -rnE "Add comment|Comment|Copy review|Insert review|Send review" src/renderer/src/document-review/*.tsx | head -12

<details>
<summary>36 lines</summary>

```
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
src/renderer/src/document-review/DocumentReviewControls.tsx:34:          aria-label="Add comment for selected source lines"
src/renderer/src/document-review/DocumentReviewControls.tsx:40:                ? `Add comment for ${lineRangeLabel(interaction.sourceRange)}`
src/renderer/src/document-review/DocumentReviewControls.tsx:45:          Add comment
src/renderer/src/document-review/DocumentReviewControls.tsx:66:    interaction.orphanedComments.length > 0 ||
src/renderer/src/document-review/DocumentReviewControls.tsx:101:          {interaction.orphanedComments.map((comment) => (
src/renderer/src/document-review/DocumentReviewControls.tsx:128:              Send review {interaction.activeBatchCount}
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:88:              {delivery.copied ? 'Copied' : 'Copy review'}
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:107:              {delivery.inserted ? 'Inserted' : 'Insert review'}
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx:124:              {delivery.sent ? 'Sent' : 'Send review now'}
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx:17:import type { DocumentReviewComment, ReviewSourceRange } from './document-review-types'
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx:108:  readonly onBeginEdit: (comment: DocumentReviewComment) => void
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx:149:        <NewCommentForm
<shellId: 175 completed with exit code 0>
```

</details>


---

<sub>17m 20s</sub>

### `bash`

**Compare smoke script scenario sets and pre-push hook**

$ cd /private/var/tmp/ws/c9859428/hvir && node -e "
const s=require('./package.json').scripts;
const names=c=>c.split('run-smoke-scenarios.mts')[1].trim().split(/\s+/);
const a=names(s.smoke), b=names(s['smoke:macos']), c=names(s['smoke:macos:ci']);
console.log('smoke:',a.length,' macos:',b.length,' macos:ci:',c.length);
console.log('in macos not smoke:',b.filter(x=>!a.includes(x)));
console.log('in smoke not macos:',a.filter(x=>!b.includes(x)));
console.log('in macos not macos:ci:',b.filter(x=>!c.includes(x)));
console.log(s['smoke:macos']);
"; cat .githooks/pre-push | head -60

<details>
<summary>33 lines</summary>

```
smoke: 21  macos: 13  macos:ci: 11
in macos not smoke: []
in smoke not macos: [
  'native-host-worker',
  'workbench-health',
  'terminal-theme',
  'terminal-move',
  'workbench-layout',
  'terminal-split',
  'app-settings',
  'harness-profiles'
]
in macos not macos:ci: [ 'terminal-presentation', 'terminal-lifecycle' ]
npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle
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
<shellId: 176 completed with exit code 0>
```

</details>


---

<sub>17m 28s</sub>

### `bash`

**Confirm Mermaid diagrams are actually rendered**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rnE "mermaid-diagram|mermaid\.(render|initialize)|from 'mermaid'|import\('mermaid'\)" src/renderer/src --include=*.ts --include=*.tsx | head -8

<details>
<summary>7 lines</summary>

```
src/renderer/src/viewer/RenderedView.tsx:42:let mermaidPromise: Promise<typeof import('mermaid').default> | undefined
src/renderer/src/viewer/RenderedView.tsx:460:  const nodes = [...root.querySelectorAll<HTMLElement>('.mermaid-diagram')]
src/renderer/src/viewer/RenderedView.tsx:480:  mermaidPromise ??= import('mermaid').then(({ default: mermaid }) => mermaid)
src/renderer/src/viewer/RenderedView.tsx:482:  mermaid.initialize({
src/renderer/src/viewer/RenderedView.tsx:488:  const { svg } = await mermaid.render(id, source)
src/renderer/src/viewer/markdown-renderer.ts:40:        `<div class="mermaid-diagram"><pre>${escapeHtml(token.content)}</pre></div>`,
<shellId: 177 completed with exit code 0>
```

</details>


---

<sub>17m 33s</sub>

### `bash`

**Verify context meter appears on session cards**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -rn "ContextMeter\|contextMeter" src/renderer/src --include=*.tsx -l | head; grep -n "Meter" src/renderer/src/sessions/SessionsOverviewCard.tsx | head -5

<details>
<summary>7 lines</summary>

```
src/renderer/src/terminal/TerminalRail.tsx
src/renderer/src/terminal/TerminalContextMeter.tsx
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
4:import { ProviderContextMeter } from '../harness/ProviderContextMeter'
36:        <ProviderContextMeter
<shellId: 178 completed with exit code 0>
```

</details>


---

<sub>17m 37s</sub>

### Copilot

Verification is complete. Writing the README now.

---

<sub>19m 15s</sub>

### `create`

**create a new file at /private/var/tmp/ws/c9859428/hvir/README.md.**

/private/var/tmp/ws/c9859428/hvir/README.md

```
Created file /private/var/tmp/ws/c9859428/hvir/README.md with 21604 characters
```


---

<sub>19m 48s</sub>

### `bash`

**Validate npm script references in README**

$ cd /private/var/tmp/ws/c9859428/hvir && cat .prettierrc.json .prettierignore; echo ---; python3 - <<'EOF'
import re, json
readme = open('README.md', encoding='utf-8').read()
pkg = json.load(open('package.json'))
scripts = set(pkg['scripts'])

# 1. npm run references
refs = set(re.findall(r'npm run ([A-Za-z0-9:_-]+)', readme))
print('npm run refs:', len(refs))
missing = sorted(r for r in refs if r not in scripts)
print('missing scripts:', missing)
# bare "npm test" is valid
print('npm test defined:', 'test' in scripts)

# script names used as bare words in the table, e.g. `pack:mac:arm64:signed`, `verify`
for name in ['pack:mac:arm64:signed', 'verify']:
    print(name, name in scripts)
EOF

<details>
<summary>21 lines</summary>

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
---
npm run refs: 23
missing scripts: []
npm test defined: True
pack:mac:arm64:signed True
verify True
<shellId: 179 completed with exit code 0>
```

</details>


---

<sub>19m 54s</sub>

### `bash`

**Preview Prettier's markdown normalization of README**

$ cd /private/var/tmp/ws/c9859428/hvir && cp README.md "$TMPDIR/README.before.md" && npx prettier --ignore-path /dev/null --stdin-filepath README.md < README.md > "$TMPDIR/README.prettier.md"; diff "$TMPDIR/README.before.md" "$TMPDIR/README.prettier.md" | head -150

<details>
<summary>81 lines</summary>

```
179,190c179,190
< | Action                                       | Shortcut                       |
< | -------------------------------------------- | ------------------------------ |
< | Find a file by name                          | `Mod+P`                        |
< | Find in the open file                        | `Mod+F`                        |
< | Go to line                                   | `Ctrl+G`                       |
< | Find in the terminal                         | `Mod+Shift+F`                  |
< | Cycle viewer mode (rendered, source, diff)   | `Mod+Shift+M`                  |
< | Focus the terminal                           | `Mod+J`                        |
< | Focus the viewer                             | `Mod+1`                        |
< | Focus the file tree                          | `Mod+0`                        |
< | Maximize or restore the terminal panel       | `Mod+Shift+J`                  |
< | Next or previous workspace                   | `Mod+Alt+]` and `Mod+Alt+[`    |
---
> | Action                                     | Shortcut                    |
> | ------------------------------------------ | --------------------------- |
> | Find a file by name                        | `Mod+P`                     |
> | Find in the open file                      | `Mod+F`                     |
> | Go to line                                 | `Ctrl+G`                    |
> | Find in the terminal                       | `Mod+Shift+F`               |
> | Cycle viewer mode (rendered, source, diff) | `Mod+Shift+M`               |
> | Focus the terminal                         | `Mod+J`                     |
> | Focus the viewer                           | `Mod+1`                     |
> | Focus the file tree                        | `Mod+0`                     |
> | Maximize or restore the terminal panel     | `Mod+Shift+J`               |
> | Next or previous workspace                 | `Mod+Alt+]` and `Mod+Alt+[` |
233,234c233,234
< | What                                                                        | macOS                             | Linux                              |
< | --------------------------------------------------------------------------- | --------------------------------- | ---------------------------------- |
---
> | What                                                                          | macOS                                | Linux                                |
> | ----------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------ |
236c236
< | Cache                                                                       | `~/Library/Caches/hvir`           | `${XDG_CACHE_HOME:-~/.cache}/hvir` |
---
> | Cache                                                                         | `~/Library/Caches/hvir`              | `${XDG_CACHE_HOME:-~/.cache}/hvir`   |
272,292c272,292
< | Command                                                         | What it does                                                                                      |
< | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
< | `npm run dev`                                                   | Start hvir with hot reload                                                                        |
< | `npm run build`                                                 | Type-check, then build the production bundles into `out/`                                         |
< | `npm run preview`                                               | Preview the production build (run `npm run build` first)                                          |
< | `npm run build:dir`                                             | Build, then write an unpacked app into `dist/`                                                    |
< | `npm run pack:mac:arm64`                                        | Build the macOS Apple-silicon `.pkg` into `dist/` (`pack:mac:arm64:signed` forces code signing)   |
< | `npm run pack:linux:x64` / `npm run pack:linux:arm64`           | Build the Linux `.deb` for that architecture into `dist/`                                         |
< | `npm run typecheck`                                             | Type-check the main-process and renderer projects                                                 |
< | `npm run lint`                                                  | ESLint, including the architecture-seam rules                                                     |
< | `npm run format` / `npm run format:check`                       | Format with Prettier, or check formatting                                                         |
< | `npm run check-seams`                                           | Grep-level backstop for the architecture seams                                                    |
< | `npm run architecture:report`                                   | Offline architecture hotspot report                                                               |
< | `npm run verify`                                                | The static and unit gate CI runs: seams, ADRs, architecture, lint, type-check, unit tests         |
< | `npm test` / `npm run test:watch`                               | Vitest unit tests, once or in watch mode                                                          |
< | `npm run test:mutation`                                         | Stryker mutation tests for the Git output parsers                                                 |
< | `npm run smoke` / `npm run smoke:macos`                         | Electron smoke tests for Linux or macOS                                                           |
< | `npm run smoke:scenario -- <name>...`                           | Run chosen smoke scenarios                                                                        |
< | `npm run gauntlet`                                              | `verify`, then the smoke tests, then the capacity performance gate                                |
< | `npm run hooks:install`                                         | Install the repository's git hooks                                                                |
< | `npm run generate:terminal-themes`                              | Regenerate the terminal theme catalog                                                             |
---
> | Command                                               | What it does                                                                                    |
> | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
> | `npm run dev`                                         | Start hvir with hot reload                                                                      |
> | `npm run build`                                       | Type-check, then build the production bundles into `out/`                                       |
> | `npm run preview`                                     | Preview the production build (run `npm run build` first)                                        |
> | `npm run build:dir`                                   | Build, then write an unpacked app into `dist/`                                                  |
> | `npm run pack:mac:arm64`                              | Build the macOS Apple-silicon `.pkg` into `dist/` (`pack:mac:arm64:signed` forces code signing) |
> | `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build the Linux `.deb` for that architecture into `dist/`                                       |
> | `npm run typecheck`                                   | Type-check the main-process and renderer projects                                               |
> | `npm run lint`                                        | ESLint, including the architecture-seam rules                                                   |
> | `npm run format` / `npm run format:check`             | Format with Prettier, or check formatting                                                       |
> | `npm run check-seams`                                 | Grep-level backstop for the architecture seams                                                  |
> | `npm run architecture:report`                         | Offline architecture hotspot report                                                             |
> | `npm run verify`                                      | The static and unit gate CI runs: seams, ADRs, architecture, lint, type-check, unit tests       |
> | `npm test` / `npm run test:watch`                     | Vitest unit tests, once or in watch mode                                                        |
> | `npm run test:mutation`                               | Stryker mutation tests for the Git output parsers                                               |
> | `npm run smoke` / `npm run smoke:macos`               | Electron smoke tests for Linux or macOS                                                         |
> | `npm run smoke:scenario -- <name>...`                 | Run chosen smoke scenarios                                                                      |
> | `npm run gauntlet`                                    | `verify`, then the smoke tests, then the capacity performance gate                              |
> | `npm run hooks:install`                               | Install the repository's git hooks                                                              |
> | `npm run generate:terminal-themes`                    | Regenerate the terminal theme catalog                                                           |
<shellId: 180 completed with exit code 0>
```

</details>


---

<sub>20m 12s</sub>

### `bash`

**Re-verify published release asset list**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '540,600p' .github/workflows/release.yml

<details>
<summary>58 lines</summary>

```
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
<shellId: 181 completed with exit code 0>
```

</details>


---

<sub>20m 17s</sub>

### Copilot

Prettier only reformats table padding. I'll restructure the three over-wide tables into a more readable form and tidy a few phrases.

---

<sub>20m 25s</sub>

### `bash`

**Restructure wide tables and tidy wording, then normalize with Prettier**

$ cd /private/var/tmp/ws/c9859428/hvir && python3 - <<'EOF'
import re
p = 'README.md'
s = open(p, encoding='utf-8').read()

# 1. Data table -> short table + prose
old_start = s.index('hvir keeps its state under Electron')
old_end = s.index("hvir's own code opens no network connections")
new_data = """hvir keeps its state (settings, projects, terminal-session records, trusted SSH host
keys, harness profiles and review drafts) in Electron's per-user data directory, and its
cache in the platform cache directory:

|       | macOS                                | Linux                                |
| ----- | ------------------------------------ | ------------------------------------ |
| State | `~/Library/Application Support/hvir` | `${XDG_CONFIG_HOME:-~/.config}/hvir` |
| Cache | `~/Library/Caches/hvir`              | `${XDG_CACHE_HOME:-~/.cache}/hvir`   |

"""
s = s[:old_start] + new_data + s[old_end:]

# 2. Scripts table -> grouped lists
t_start = s.index('| Command ')
t_end = s.index('`npm run architecture:check`, which `verify` runs')
new_scripts = """Run and package:

- `npm run dev`: start hvir with hot reload.
- `npm run build`: type-check, then build the production bundles into `out/`.
- `npm run preview`: preview the production build (run `npm run build` first).
- `npm run build:dir`: build, then write an unpacked app into `dist/`.
- `npm run pack:mac:arm64`: build the macOS Apple-silicon `.pkg` into `dist/`.
  `pack:mac:arm64:signed` forces code signing.
- `npm run pack:linux:x64` and `npm run pack:linux:arm64`: build the Linux `.deb` for that
  architecture into `dist/`.
- `npm run generate:terminal-themes`: regenerate the terminal theme catalog.

Check and test:

- `npm run typecheck`: type-check the main-process and renderer projects.
- `npm run lint`: ESLint, including the architecture-seam rules.
- `npm run format` and `npm run format:check`: format with Prettier, or check formatting.
- `npm run check-seams`: grep-level backstop for the architecture seams.
- `npm run architecture:report`: offline architecture hotspot report.
- `npm test` and `npm run test:watch`: Vitest unit tests, once or in watch mode.
- `npm run test:mutation`: Stryker mutation tests for the Git output parsers.
- `npm run smoke` and `npm run smoke:macos`: Electron smoke tests for Linux or macOS.
- `npm run smoke:scenario -- <name>...`: run chosen smoke scenarios.
- `npm run verify`: the static and unit gate that CI runs (seams, ADRs, architecture,
  lint, type-check and unit tests).
- `npm run gauntlet`: `verify`, then the smoke tests, then the capacity performance gate.
- `npm run hooks:install`: install the repository's git hooks.

"""
s = s[:t_start] + new_scripts + s[t_end:]

# 3. Directory table: shorter cells
d_start = s.index('| Path ')
d_end = s.index('The renderer is sandboxed')
new_dirs = """| Path                         | Contents                                                |
| ---------------------------- | ------------------------------------------------------- |
| `src/main/`                  | Main process: IPC, projects, hosts, PTYs, Git, agents   |
| `src/preload/`               | Context-isolated bridge; the only `ipcRenderer` user    |
| `src/renderer/`              | React UI: workbench, viewer, terminals, Git, settings   |
| `src/shared/`                | Serializable IPC contracts and pure shared helpers      |
| `src/workers/`               | Utility-process entry points (the Git worker)           |
| `packages/rename-noreplace/` | Private addon: atomic no-replace rename                 |
| `build/`                     | Packaging resources, including the `hvir` command       |
| `scripts/`                   | Build, packaging, installer, smoke-test and repo scripts |
| `test/`                      | Vitest unit tests and fixtures                          |

"""
s = s[:d_start] + new_dirs + s[d_end:]

# 4. Wording tweaks
s = s.replace("""  previewable types, diff when opened from the Git panel, source otherwise. Switch with
  one key, work in tabs, split the viewer into two panes, and open the Git graph as a tab.""",
"""  previewable types, diff when opened from the Git panel, source otherwise. Cycle modes
  with `Mod+Shift+M`, work in tabs, split the viewer into two panes, and open the Git
  graph as a tab.""")
s = s.replace("""Open a dev server from a terminal in a pane inside the workbench. Only loopback HTTP
(`localhost`, `127.0.0.1` and `::1`) is supported. The pane is served through an
authenticated proxy owned by the main process, and for a remote project the page is
reached through the SSH connection.""",
"""View a dev server that you started in a terminal without leaving the workbench (see
[Terminal links](#terminal-links)). Only loopback HTTP (`localhost`, `127.0.0.1` and
`::1`) is supported. The pane is served through an authenticated proxy owned by the main
process, and for a remote project the page is reached through the SSH connection.""")
open(p, 'w', encoding='utf-8').write(s)
EOF
npx prettier --ignore-path /dev/null --write README.md >/dev/null && git diff --stat -- README.md; git status --short

```
?? README.md
<shellId: 182 completed with exit code 0>
```


---

<sub>20m 26s</sub>

### Copilot

Now a thorough self-check: links/anchors, line widths, diagram alignment, and script/path references.

---

<sub>20m 32s</sub>

### `bash`

**Validate widths, anchors, links, scripts and paths**

$ cd /private/var/tmp/ws/c9859428/hvir && python3 - <<'EOF'
import re, json, os, unicodedata
readme = open('README.md', encoding='utf-8').read()
lines = readme.split('\n')
pkg = json.load(open('package.json'))
scripts = set(pkg['scripts'])

# --- fenced code-block tracking
in_code = False
prose_over = []
code_over = []
for i, line in enumerate(lines, 1):
    if line.startswith('```'):
        in_code = not in_code
        continue
    if in_code:
        if len(line) > 90: code_over.append((i, len(line)))
        continue
    if line.startswith('|'):
        if len(line) > 90: prose_over.append((i, len(line), 'table'))
        continue
    if len(line) > 90 and 'http' not in line:
        prose_over.append((i, len(line), 'prose'))
print('prose/table lines > 90 cols:', prose_over)
print('code lines > 90 cols:', code_over)

# --- heading anchors (GitHub slug)
def slug(h):
    h = h.strip().lower()
    h = re.sub(r'[^\w\- ]', '', h)
    return h.replace(' ', '-')
heads = [re.match(r'#+\s+(.*)', l).group(1) for l in lines if re.match(r'#{1,6}\s', l)]
anchors = {slug(h) for h in heads}
used = re.findall(r'\]\(#([^)]+)\)', readme)
print('anchors used:', sorted(set(used)))
print('broken anchors:', sorted(a for a in set(used) if a not in anchors))

# --- relative links
rel = [l for l in re.findall(r'\]\(([^)#]+)\)', readme) if not l.startswith('http')]
print('relative links:', rel, 'broken:', [l for l in rel if not os.path.exists(l)])

# --- reference-style link defs
print('ref defs:', re.findall(r'^\[([^\]]+)\]:\s*(\S+)', readme, re.M))
print('ref usages:', re.findall(r'\]\[([^\]]+)\]', readme))

# --- npm run refs & backticked script names
refs = set(re.findall(r'npm run ([A-Za-z0-9:_-]+)', readme))
print('npm run refs missing:', sorted(r for r in refs if r not in scripts))
for m in re.findall(r'`(pack:mac:arm64:signed|verify)`', readme):
    print(m, 'ok' if m in scripts else 'MISSING')

# --- backticked repo paths exist
paths = set(re.findall(r'`((?:src|packages|build|scripts|test|\.githooks|\.github)[^`\s]*)`', readme))
for p in sorted(paths):
    q = p.rstrip('/')
    print(('ok     ' if os.path.exists(q) else 'MISSING'), p)
EOF

<details>
<summary>23 lines</summary>

```
prose/table lines > 90 cols: [(346, 91, 'table'), (347, 91, 'table'), (348, 91, 'table'), (349, 91, 'table'), (350, 91, 'table'), (351, 91, 'table'), (352, 91, 'table'), (353, 91, 'table'), (354, 91, 'table'), (355, 91, 'table'), (356, 91, 'table')]
code lines > 90 cols: [(136, 100), (397, 91)]
anchors used: ['architecture', 'ci-and-releases', 'contributing', 'development', 'features', 'install', 'license', 'remote-hosts-over-ssh', 'terminal-links', 'using-hvir']
broken anchors: []
relative links: ['LICENSE', 'THIRD_PARTY_NOTICES.md'] broken: []
ref defs: [('ghostty-web', 'https://github.com/coder/ghostty-web')]
ref usages: ['ghostty-web']
npm run refs missing: []
pack:mac:arm64:signed ok
verify ok
verify ok
ok      .githooks
ok      build/
ok      packages/rename-noreplace/
ok      scripts/
ok      src/main/
ok      src/main/harness/
ok      src/preload/
ok      src/renderer/
ok      src/shared/
ok      src/workers/
ok      test/
<shellId: 183 completed with exit code 0>
```

</details>


---

<sub>20m 37s</sub>

### `bash`

**Shorten the two over-wide lines and re-normalize**

$ cd /private/var/tmp/ws/c9859428/hvir && python3 - <<'EOF'
p = 'README.md'
s = open(p, encoding='utf-8').read()
s = s.replace("Build, packaging, installer, smoke-test and repo scripts", "Build, packaging, installer, smoke and repo scripts")
s = s.replace("npm run smoke:scenario -- <scenario>   # when you change Electron, terminal or Git behavior",
              "npm run smoke:scenario -- <scenario>   # if you change Electron, terminal or Git code")
open(p, 'w', encoding='utf-8').write(s)
EOF
npx prettier --ignore-path /dev/null --write README.md >/dev/null; awk 'length($0)>90 {print FILENAME": "FNR": "length($0)}' README.md

```
README.md: 136: 100
README.md: 193: 91
<shellId: 184 completed with exit code 0>
```


---

<sub>20m 37s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/README.md.**

/private/var/tmp/ws/c9859428/hvir/README.md (lines 1-130)

<details>
<summary>102 lines</summary>

```
# hvir

A desktop workbench for running terminal AI coding agents next to the files and Git state
they change, on your own machine or on a remote host over SSH.

hvir puts a project's file tree, a multi-format viewer, Git panels and real terminals in
one window. Each terminal runs a plain login shell or an agent CLI such as Claude Code,
Codex or GitHub Copilot CLI, and hvir tracks every session across projects, worktrees and
hosts, so you can see which agents are working, which are waiting for you, and what they
have changed.

hvir does not bundle or replace any agent. It launches the CLIs you have already
installed and authenticated.

## Contents

- [Features](#features)
- [Install](#install)
- [Using hvir](#using-hvir)
- [Development](#development)
- [Architecture](#architecture)
- [CI and releases](#ci-and-releases)
- [Contributing](#contributing)
- [License](#license)

## Features

### Terminals and agents

- **Real terminals.** PTY-backed terminals rendered by [ghostty-web][ghostty-web],
  Ghostty's terminal core compiled to WebAssembly, with split panes, in-terminal search,
  a built-in color-theme gallery, and cursor and ligature settings.
- **Agent providers.** Start a terminal as a login shell, Claude Code, Codex, Pi, Gemini
  CLI, GitHub Copilot CLI, Cursor CLI, or any custom command.
- **Harness profiles.** For each provider, choose the executable (the provider default, a
  command name or a path), extra arguments and environment bindings (literal values,
  references or unsets). hvir previews the resulting command and probes the provider,
  reporting a missing executable, an unsupported version or required authentication.
- **Attention tracking.** Each terminal is marked as working, as having rung the bell, or
  as ready once it goes idle after you submitted input. States roll up per workspace and
  per project, and the app icon shows a badge count while hvir is not focused.
- **Restore, resume and fork.** hvir restores your terminals on start, either after asking
  which ones or all at once. Claude Code and Codex sessions resume the exact conversation,
  can be forked into a new terminal, and show a context-window meter. The other providers
  start fresh.
- **Move terminals.** Move a running terminal to another worktree.

### Projects, worktrees and hosts

- **Projects and worktrees.** Register any directory as a project. For a Git repository,
  hvir discovers every worktree and shows each one as a workspace in the projects bar with
  its changed-file count, highlights newly discovered worktrees, and can prune missing
  ones. A directory that is not a Git repository is a single workspace.
- **Local and SSH hosts.** A project can live on this machine or on any concrete `Host`
  alias from `~/.ssh/config`. Remote projects get the same workbench: terminals in a
  remote PTY, files over SFTP, Git on the remote host, and web panes through an SSH
  tunnel. See [Remote hosts over SSH](#remote-hosts-over-ssh).

### Files and viewer

- **File tree.** Git status decorations, filename search, create, rename, move and delete
  (to the system trash), reveal in your file manager, and path-copy menus.
- **Rendered, source and diff modes.** Files open in the mode that fits: rendered for
  previewable types, diff when opened from the Git panel, source otherwise. Cycle modes
  with `Mod+Shift+M`, work in tabs, split the viewer into two panes, and open the Git
  graph as a tab.
- **Rendered previews.** Markdown (with task lists and Mermaid diagrams), standalone
  Mermaid files, HTML in a sandboxed preview, JSON, YAML, CSV, and images including SVG.
- **Source editing.** A CodeMirror 6 editor with Shiki syntax highlighting, a Git blame
  gutter, find and go-to-line, and saving that detects when the file changed on disk.
- **Diffs.** Compare a file's working copy against the index, `HEAD` or the branch point,
  or view the diff a commit introduced.

### Git

hvir's Git support is deliberately read-heavy.

- **Inspect.** Working-tree changes and changes since the branch point with added and
  removed line counts, commit history, a graph of all refs, commit details, blame, and
  branches with upstream and base ahead/behind counts.
- **Change.** Switch branches, fetch (manually or on an auto-fetch interval), pull, and
  prune stale worktree records. hvir has no UI for staging, committing or pushing; leave
  those to your agent or a terminal.

### Document review

Select source lines, add a comment, and hand the review to an agent. Comments are anchored
to line ranges and a content hash, so hvir can tell when a comment has moved or gone stale
as the file changes. The handoff panel can copy the review as text, insert it into the
agent's prompt as a single bracketed paste without submitting it, or send it right away.
Insert and send are available for Claude Code and Codex; other terminals get copy only.
Drafts are stored locally.

### Sessions overview

A cross-project dashboard of every terminal session. Each card shows the session's status,
whether it needs attention or is working, the agent's turn state and model where the
provider reports them, and a context-window meter. Filter by harnesses, shells, attention
or working; group by project or workspace. **Open** jumps to the terminal, and
**Interact** opens it in an overlay without leaving the dashboard.

### Web panes

View a dev server that you started in a terminal without leaving the workbench (see
[Terminal links](#terminal-links)). Only loopback HTTP (`localhost`, `127.0.0.1` and
`::1`) is supported. The pane is served through an authenticated proxy owned by the main
process, and for a remote project the page is reached through the SSH connection.

### Diagnostics and settings

- **Diagnostics.** A workbench health indicator flags problems. "Review diagnostic
  report" shows a local, size-bounded report, with an optional masked screenshot, before
  anything leaves the app; it is shared only if you copy or save it yourself.
- **Settings.** App theme, terminal colors and theme gallery, fonts, text size and
  interface scale; cursor shape, blinking and ligatures; how agent messages are submitted
  (Enter, or Ctrl/Cmd+Enter); the idle-after-output threshold; whether terminals are
  restored automatically on start; the Git auto-fetch interval; keybinding overrides; and
  harness profiles.

## Install

hvir ships as a native package:

- **macOS** on Apple silicon: a Developer ID signed and notarized `.pkg`.
- **Linux** on x64 and arm64: a `.deb` for Debian-based distributions with `apt` and glibc
  2.35 or newer. Packages are built on Ubuntu 22.04 and tested on Ubuntu 22.04 and 24.04
  and on Debian 13.

Intel Macs and Windows are not supported.
```

</details>


---

<sub>20m 43s</sub>

### `view`

**view the file at /private/var/tmp/ws/c9859428/hvir/README.md.**

/private/var/tmp/ws/c9859428/hvir/README.md (lines 128-420)

<details>
<summary>218 lines</summary>

````

Intel Macs and Windows are not supported.

Download the installer script from the latest
[release](https://github.com/jarmak-personal/hvir/releases), read it if you like, and run
it:

```sh
curl -fsSL -o install.sh https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer detects your platform, downloads the matching package from the same release,
verifies its SHA-256 checksum, and installs it with `sudo` through `apt` on Linux or
`installer` on macOS. On macOS it also checks the package signature, notarization and
Gatekeeper assessment.

hvir has no auto-updater. To update, download the newest `install.sh` and run it again.
To remove hvir:

```sh
bash install.sh --uninstall          # keeps your settings and cache
bash install.sh --uninstall --purge  # also deletes your hvir settings and cache
```

Each release also publishes `SHA256SUMS`, `release-manifest.json` and
`THIRD_PARTY_NOTICES.md` next to the packages.

## Using hvir

### Open a project

```sh
hvir                  # reopen your previous projects, or choose a folder on first run
hvir .                # open the current directory
hvir ~/code/my-app    # open a specific directory
```

You can also start hvir from your desktop's application launcher. To add more projects,
use **Register project** in the projects bar: pick a host (this machine or an SSH host),
then a folder on it.

### Terminal links

Ctrl+click or Cmd+click a file path in terminal output, with an optional line and column,
to open it in the viewer. The same gesture on a `localhost`, `127.0.0.1` or `[::1]` URL
opens it in a web pane.

### Keyboard shortcuts

`Mod` is Command on macOS and Ctrl elsewhere.

| Action                                     | Shortcut                    |
| ------------------------------------------ | --------------------------- |
| Find a file by name                        | `Mod+P`                     |
| Find in the open file                      | `Mod+F`                     |
| Go to line                                 | `Ctrl+G`                    |
| Find in the terminal                       | `Mod+Shift+F`               |
| Cycle viewer mode (rendered, source, diff) | `Mod+Shift+M`               |
| Focus the terminal                         | `Mod+J`                     |
| Focus the viewer                           | `Mod+1`                     |
| Focus the file tree                        | `Mod+0`                     |
| Maximize or restore the terminal panel     | `Mod+Shift+J`               |
| Next or previous workspace                 | `Mod+Alt+]` and `Mod+Alt+[` |

Override any of them in **Settings → Keybindings** with a JSON object that maps an action
to a stroke. Actions you leave out keep their defaults:

```json
{ "findFile": "Mod+K", "focusTerminal": "Mod+Shift+T" }
```

The action names are `cycleViewMode`, `findFile`, `findInFile`, `findInTerminal`,
`goToLine`, `focusTerminal`, `focusViewer`, `focusTree`, `toggleTerminalFocus`,
`nextWorkspace` and `previousWorkspace`.

### Remote hosts over SSH

1. Add the host to `~/.ssh/config`. hvir lists every `Host` alias that has no wildcard
   and reads only `HostName`, `User`, `Port` and `IdentityFile`; other options, such as
   `ProxyJump`, are ignored.

   ```sshconfig
   Host devbox
     HostName devbox.example.com
     User me
     IdentityFile ~/.ssh/id_ed25519
   ```

2. Choose **Register project**, pick the host, then pick a folder on it.
3. On the first connection hvir shows the server's host-key fingerprint for you to
   accept. Accepted keys are kept in hvir's own `known-hosts.json`, not in
   `~/.ssh/known_hosts`.

Authentication is tried in this order: ssh-agent (`SSH_AUTH_SOCK`), public keys (the
`IdentityFile` entries, otherwise the default `~/.ssh/id_*` keys, with a prompt for
passphrases), keyboard-interactive, then password.

On the remote machine, terminals use `$SHELL` (falling back to `bash`, then `/bin/sh`)
and Git commands run there, so `git` must be installed. Install `inotify-tools` on the
remote host to get push-based change detection; without `inotifywait`, hvir polls.

### Data and privacy

hvir keeps its state (settings, projects, terminal-session records, trusted SSH host
keys, harness profiles and review drafts) in Electron's per-user data directory, and its
cache in the platform cache directory:

|       | macOS                                | Linux                                |
| ----- | ------------------------------------ | ------------------------------------ |
| State | `~/Library/Application Support/hvir` | `${XDG_CONFIG_HOME:-~/.config}/hvir` |
| Cache | `~/Library/Caches/hvir`              | `${XDG_CACHE_HOME:-~/.cache}/hvir`   |

hvir's own code opens no network connections other than the SSH sessions you start and
loopback connections for web panes: there is no telemetry, crash reporting or
auto-update. The tools you run in terminals, and Git operations such as fetch and pull,
use the network as they normally would.

## Development

You need:

- Node.js 24 or newer, and `git`.
- A C/C++ toolchain and Python 3. `npm ci` compiles the native `node-pty` module and the
  private `@hvir/rename-noreplace` addon against Electron.
- Network access during install, to download Electron and the ghostty-web build.
- `xvfb` on Linux, if you run the Electron smoke tests without a display.

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

Do not install with `--ignore-scripts`: the `postinstall` step downloads Electron and
rebuilds the native modules. `npm run dev` and `npm run build` first check that the
installed ghostty-web matches the expected build and tell you to run `npm ci` if not.

To open a specific project in development, set `HVIR_PROJECT_ROOT`:

```sh
HVIR_PROJECT_ROOT=/path/to/project npm run dev
```

### Scripts

Run and package:

- `npm run dev`: start hvir with hot reload.
- `npm run build`: type-check, then build the production bundles into `out/`.
- `npm run preview`: preview the production build (run `npm run build` first).
- `npm run build:dir`: build, then write an unpacked app into `dist/`.
- `npm run pack:mac:arm64`: build the macOS Apple-silicon `.pkg` into `dist/`.
  `pack:mac:arm64:signed` forces code signing.
- `npm run pack:linux:x64` and `npm run pack:linux:arm64`: build the Linux `.deb` for that
  architecture into `dist/`.
- `npm run generate:terminal-themes`: regenerate the terminal theme catalog.

Check and test:

- `npm run typecheck`: type-check the main-process and renderer projects.
- `npm run lint`: ESLint, including the architecture-seam rules.
- `npm run format` and `npm run format:check`: format with Prettier, or check formatting.
- `npm run check-seams`: grep-level backstop for the architecture seams.
- `npm run architecture:report`: offline architecture hotspot report.
- `npm test` and `npm run test:watch`: Vitest unit tests, once or in watch mode.
- `npm run test:mutation`: Stryker mutation tests for the Git output parsers.
- `npm run smoke` and `npm run smoke:macos`: Electron smoke tests for Linux or macOS.
- `npm run smoke:scenario -- <name>...`: run chosen smoke scenarios.
- `npm run verify`: the static and unit gate that CI runs (seams, ADRs, architecture,
  lint, type-check and unit tests).
- `npm run gauntlet`: `verify`, then the smoke tests, then the capacity performance gate.
- `npm run hooks:install`: install the repository's git hooks.

`npm run architecture:check`, which `verify` runs, queries GitHub and needs an
`HVIR_REPO_TOKEN`; `npm run architecture:report` is the offline equivalent.

### Testing

Unit tests live in `test/` and run on Vitest in Node. Renderer component tests run in
happy-dom.

Smoke tests build the app with `--mode smoke`, then launch the real Electron app against
a throwaway repository created from `git archive HEAD`, with an isolated user-data
directory. A build plugin keeps smoke code out of production bundles. Run a subset by
name:

```sh
npm run smoke:scenario -- viewer-content git-workflow
```

On a Linux machine without a display, wrap the command in `xvfb-run -a`.

`npm run hooks:install` points `core.hooksPath` at `.githooks`. The pre-push hook then
runs the type check and the smoke tests for your platform; bypass it with
`git push --no-verify`.

## Architecture

```text
 Renderer (React 19)                      Utility process
 file tree, viewer, terminals,            Git worker: runs the Git engine off
 Git panels, settings, sessions           the main thread
 + web workers for Markdown,                      ^
   highlighting, JSON and CSV                     |
        ^                                         |
        | typed IPC through the preload bridge    |
        v                                         v
 Main process
 IPC authority router, project and workspace registry, PTY supervisor,
 harness providers, sessions, diagnostics, document review, web-pane proxy

            ProjectHost seam
            +-- LocalHost  fs, child_process, node-pty
            +-- SshHost    ssh2: remote PTY, SFTP, tunnels
```

| Path                         | Contents                                              |
| ---------------------------- | ----------------------------------------------------- |
| `src/main/`                  | Main process: IPC, projects, hosts, PTYs, Git, agents |
| `src/preload/`               | Context-isolated bridge; the only `ipcRenderer` user  |
| `src/renderer/`              | React UI: workbench, viewer, terminals, Git, settings |
| `src/shared/`                | Serializable IPC contracts and pure shared helpers    |
| `src/workers/`               | Utility-process entry points (the Git worker)         |
| `packages/rename-noreplace/` | Private addon: atomic no-replace rename               |
| `build/`                     | Packaging resources, including the `hvir` command     |
| `scripts/`                   | Build, packaging, installer, smoke and repo scripts   |
| `test/`                      | Vitest unit tests and fixtures                        |

The renderer is sandboxed and context-isolated, with no Node.js access. The main process
reaches files, processes and terminals only through the `ProjectHost` interface, so local
and SSH projects share one code path, and paths are always qualified by host. ESLint
rules and `npm run check-seams` enforce the boundaries that keep this true:

- `ipcRenderer` is used only in the preload bridge, and `ipcMain` handlers are registered
  only through the central authority router, which resolves the calling window and
  canonical paths.
- `fs`, `child_process`, `chokidar` and `node-pty` are used only in `LocalHost`, and
  `ssh2` only in the SSH host adapter. Everything else depends on `ProjectHost`.
- Terminals are spawned only by the PTY supervisor, and every Git command goes through
  one shared command, cancellation and root-validation context.
- Agent provider identities stay inside `src/main/harness/`, and raw loopback sockets are
  used only by the web-pane proxy.

## CI and releases

Pull requests to `main` and `epic/**` branches run `npm run verify` on Linux, the Electron
smoke tests on Linux (under Xvfb) and on macOS arm64 (a reduced set), CodeQL analysis, and
a merge-acceptance gate. Dependabot and a daily ghostty-web update workflow keep
dependencies current.

Releases are cut by the manual **Release** workflow, whose `bump` input is `current`,
`patch`, `minor` or `major`. It builds the Linux x64 and arm64 packages and the macOS
arm64 package, installs, updates, launches and removes them on clean hosts, and then
publishes an immutable GitHub Release containing the packages, `install.sh`,
`SHA256SUMS`, `release-manifest.json` and `THIRD_PARTY_NOTICES.md`.

## Contributing

Changes land through pull requests that target `main` (or an `epic/**` branch). CI runs
the full verification and smoke suites on every pull request, so run the checks that
cover your change first:

```sh
npm run typecheck
npm run lint
npm test
npm run check-seams
npm run smoke:scenario -- <scenario>   # if you change Electron, terminal or Git code
```

Keep code inside the architecture seams described above, and run `npm run hooks:install`
to get the pre-push checks locally.

## License

hvir is released under the [MIT License](LICENSE). Third-party components, including
ghostty-web, the iTerm2 Color Schemes collection and the Ghostty terminal core, are listed
with their licenses in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

[ghostty-web]: https://github.com/coder/ghostty-web
````

</details>


---

<sub>20m 54s</sub>

### `bash`

**Check keybinding context semantics**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '32,48p' src/shared/keybindings.ts; grep -rn "KeybindingContext" src/shared/keybindings.ts | head -3; grep -rn "keybindingAvailableInContext" src/renderer/src --include=*.ts --include=*.tsx | head -5

<details>
<summary>20 lines</summary>

```
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
src/shared/keybindings.ts:34:export type KeybindingContext = 'workbench' | 'terminal' | 'web-pane'
src/shared/keybindings.ts:38:  context: KeybindingContext,
src/renderer/src/settings/keybindings.ts:9:  keybindingAvailableInContext,
src/renderer/src/workbench/use-workbench-commands.ts:9:import { keybindingAvailableInContext } from '../../../shared'
src/renderer/src/workbench/use-workbench-commands.ts:45:      if (!keybindingAvailableInContext(action, context)) return
<shellId: 185 completed with exit code 0>
```

</details>


---

<sub>21m 3s</sub>

### `bash`

**Re-verify CI jobs and automation files**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "^name:|^on:|^  pull_request|branches|^  [a-z-]+:$|^    name:|runs-on|run: npm|xvfb" .github/workflows/ci.yml | head -50; ls .github/workflows; cat .github/dependabot.yml 2>/dev/null | head -30

<details>
<summary>71 lines</summary>

```
1:name: CI
3:on:
4:  pull_request:
5:    branches:
17:  release-version-integrity:
18:    name: Release version integrity
26:    runs-on: ubuntu-24.04
59:  verify:
60:    name: Verification (Linux)
63:    runs-on: ubuntu-24.04
85:        run: npm ci
90:        run: npm run verify
92:  electron-smoke:
93:    name: Electron smoke (Linux)
96:    runs-on: ubuntu-24.04
110:        run: npm ci
115:        run: xvfb-run -a npm run smoke
120:        run: xvfb-run -a npm run smoke:development-performance
123:        run: xvfb-run -a npm run smoke:isolation
134:  macos-electron-smoke:
137:    name: Electron correctness (macOS arm64; temporary reduced gate)
140:    runs-on: macos-15
154:        run: npm ci
159:        run: npm run smoke:macos:ci
170:  codeql:
171:    name: CodeQL analysis
174:    runs-on: ubuntu-24.04
194:  merge-acceptance:
195:    name: Merge acceptance
203:    runs-on: ubuntu-24.04
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
<shellId: 186 completed with exit code 0>
```

</details>


---

<sub>21m 29s</sub>

### `bash`

**Replace diagram with aligned boxes; add badge and shortcut notes**

$ cd /private/var/tmp/ws/c9859428/hvir && python3 - <<'EOF'
p = 'README.md'
s = open(p, encoding='utf-8').read()

W = 74  # inner width of each box
def box(lines):
    out = ['+' + '-' * W + '+']
    for t in lines:
        assert len(t) <= W - 2, (len(t), t)
        out.append('| ' + t.ljust(W - 2) + ' |')
    out.append('+' + '-' * W + '+')
    return out

def link(label):
    col = 8
    pad = ' ' * col
    return [pad + '^', pad + '|  ' + label, pad + 'v']

diagram = []
diagram += box([
    'Renderer (React 19; sandboxed, no Node.js access)',
    'File tree, viewer, terminals, Git panels, settings, sessions overview',
    'Web workers: Markdown, syntax highlighting, JSON, CSV',
])
diagram += link('typed IPC through the preload bridge')
diagram += box([
    'Main process',
    'IPC authority router, project and workspace registry, PTY supervisor,',
    'harness providers, sessions, diagnostics, document review, web-pane proxy',
    '',
    'ProjectHost seam',
    '  +-- LocalHost   fs, child_process, node-pty',
    '  +-- SshHost     ssh2: remote PTY, SFTP, tunnels',
])
diagram += link('Git requests; host exec / read / stat port')
diagram += box([
    'Git worker (utility process): runs the Git engine off the main thread',
])
block = '```text\n' + '\n'.join(diagram) + '\n```'

start = s.index('```text\n Renderer (React 19)')
end = s.index('```', start + 10) + 3
s = s[:start] + block + s[end:]

# badge caveat
s = s.replace("per project, and the app icon shows a badge count while hvir is not focused.",
              "per project, and the app icon shows a badge count while hvir is not focused (where\n  the desktop supports badges).")

# shortcut context note
s = s.replace("""Override any of them in **Settings → Keybindings**""",
"""While a terminal has focus, `Mod+P`, `Mod+F`, `Ctrl+G` and `Mod+Shift+M` are left to the
program running in it, and `Mod+Shift+F` searches the terminal.

Override any of them in **Settings → Keybindings**""")
open(p, 'w', encoding='utf-8').write(s)
EOF
npx prettier --ignore-path /dev/null --write README.md >/dev/null; awk 'length($0)>90 {print FILENAME": "FNR": "length($0)": "$0}' README.md; sed -n '/^## Architecture/,/^| Path/p' README.md

<details>
<summary>25 lines</summary>

````
Traceback (most recent call last):
  File "<stdin>", line 25, in <module>
  File "<stdin>", line 8, in box
AssertionError: (73, 'harness providers, sessions, diagnostics, document review, web-pane proxy')
README.md: 136: 100: curl -fsSL -o install.sh https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
README.md: 193: 91: Override any of them in **Settings → Keybindings** with a JSON object that maps an action
## Architecture

```text
 Renderer (React 19)                      Utility process
 file tree, viewer, terminals,            Git worker: runs the Git engine off
 Git panels, settings, sessions           the main thread
 + web workers for Markdown,                      ^
   highlighting, JSON and CSV                     |
        ^                                         |
        | typed IPC through the preload bridge    |
        v                                         v
 Main process
 IPC authority router, project and workspace registry, PTY supervisor,
 harness providers, sessions, diagnostics, document review, web-pane proxy

            ProjectHost seam
            +-- LocalHost  fs, child_process, node-pty
            +-- SshHost    ssh2: remote PTY, SFTP, tunnels
```

| Path                         | Contents                                              |
<shellId: 187 completed with exit code 0>
````

</details>


---

<sub>21m 37s</sub>

### `bash`

**Rebuild diagram with wider boxes and apply notes**

$ cd /private/var/tmp/ws/c9859428/hvir && python3 - <<'EOF'
p = 'README.md'
s = open(p, encoding='utf-8').read()

W = 76  # inner width of each box
def box(lines):
    out = ['+' + '-' * W + '+']
    for t in lines:
        assert len(t) <= W - 2, (len(t), t)
        out.append('| ' + t.ljust(W - 2) + ' |')
    out.append('+' + '-' * W + '+')
    return out

def link(label):
    pad = ' ' * 8
    return [pad + '^', pad + '|  ' + label, pad + 'v']

diagram = []
diagram += box([
    'Renderer (React 19; sandboxed, no Node.js access)',
    'File tree, viewer, terminals, Git panels, settings, sessions overview',
    'Web workers: Markdown, syntax highlighting, JSON, CSV',
])
diagram += link('typed IPC through the preload bridge')
diagram += box([
    'Main process',
    'IPC authority router, project and workspace registry, PTY supervisor,',
    'harness providers, sessions, diagnostics, document review, web-pane proxy',
    '',
    'ProjectHost seam',
    '  +-- LocalHost   fs, child_process, node-pty',
    '  +-- SshHost     ssh2: remote PTY, SFTP, tunnels',
])
diagram += link('Git requests; host exec / read / stat port')
diagram += box([
    'Git worker (utility process): runs the Git engine off the main thread',
])
block = '```text\n' + '\n'.join(diagram) + '\n```'

start = s.index('```text\n Renderer (React 19)')
end = s.index('```', start + 10) + 3
s = s[:start] + block + s[end:]

old = "per project, and the app icon shows a badge count while hvir is not focused."
assert old in s
s = s.replace(old, "per project, and the app icon shows a badge count while hvir is not focused (where\n  the desktop supports badges).")

old = "Override any of them in **Settings → Keybindings**"
assert old in s
s = s.replace(old, """While a terminal has focus, `Mod+P`, `Mod+F`, `Ctrl+G` and `Mod+Shift+M` are left to the
program running in it, and `Mod+Shift+F` searches the terminal.

Override any of them in **Settings → Keybindings**""")
open(p, 'w', encoding='utf-8').write(s)
EOF
npx prettier --ignore-path /dev/null --write README.md >/dev/null; python3 - <<'EOF'
for i, l in enumerate(open('/private/var/tmp/ws/c9859428/hvir/README.md', encoding='utf-8').read().split('\n'), 1):
    if len(l) > 90: print(i, len(l), l[:60])
EOF
sed -n '/^## Architecture/,/^| Path/p' README.md

<details>
<summary>29 lines</summary>

````
137 100 curl -fsSL -o install.sh https://github.com/jarmak-personal/
## Architecture

```text
+----------------------------------------------------------------------------+
| Renderer (React 19; sandboxed, no Node.js access)                          |
| File tree, viewer, terminals, Git panels, settings, sessions overview      |
| Web workers: Markdown, syntax highlighting, JSON, CSV                      |
+----------------------------------------------------------------------------+
        ^
        |  typed IPC through the preload bridge
        v
+----------------------------------------------------------------------------+
| Main process                                                               |
| IPC authority router, project and workspace registry, PTY supervisor,      |
| harness providers, sessions, diagnostics, document review, web-pane proxy  |
|                                                                            |
| ProjectHost seam                                                           |
|   +-- LocalHost   fs, child_process, node-pty                              |
|   +-- SshHost     ssh2: remote PTY, SFTP, tunnels                          |
+----------------------------------------------------------------------------+
        ^
        |  Git requests; host exec / read / stat port
        v
+----------------------------------------------------------------------------+
| Git worker (utility process): runs the Git engine off the main thread      |
+----------------------------------------------------------------------------+
```

| Path                         | Contents                                              |
<shellId: 188 completed with exit code 0>
````

</details>


---

<sub>21m 54s</sub>

### `bash`

**Check macOS release workflow acceptance steps**

$ cd /private/var/tmp/ws/c9859428/hvir && grep -nE "name:|runs-on|notar|accept|install" .github/workflows/macos-package-release.yml | head -40

<details>
<summary>22 lines</summary>

```
1:name: Signed macOS package
41:    name: Sign, notarize, staple, and accept macOS arm64 package
42:    runs-on: macos-15
47:      - name: Require an exact protected merged source
66:      - name: Check out trusted source
72:      - name: Confirm the protected branch contains the exact source
88:      - name: Set up Node.js
94:      - name: Install dependencies
97:      - name: Require protected signing credentials
127:      - name: Prepare protected notary credential
132:          key_path="$RUNNER_TEMP/hvir-notary-key.p8"
136:      - name: Build signed and notarized package
146:      - name: Staple notarization ticket
156:      - name: Install, update, launch, and remove signed package
161:        run: npm run smoke:macos:installed
163:      - name: Remove protected notary credential
165:        run: rm -f -- "$RUNNER_TEMP/hvir-notary-key.p8"
167:      - name: Give the accepted artifact its public release name
173:            echo "::error::Expected exactly one accepted package at $source"
183:      - name: Retain accepted package for release assembly
186:          name: release-macos-arm64
<shellId: 189 completed with exit code 0>
```

</details>


---

<sub>22m 3s</sub>

### `bash`

**Apply accuracy wording fixes and confirm Prettier cleanliness**

$ cd /private/var/tmp/ws/c9859428/hvir && python3 - <<'EOF'
p = 'README.md'
s = open(p, encoding='utf-8').read()

def sub(old, new):
    global s
    assert old in s, old
    s = s.replace(old, new)

sub("""- A C/C++ toolchain and Python 3. `npm ci` compiles the native `node-pty` module and the
  private `@hvir/rename-noreplace` addon against Electron.""",
"""- A C/C++ toolchain and Python 3. `npm ci` builds the private `@hvir/rename-noreplace`
  addon and compiles the native `node-pty` module against Electron.""")

sub("""The renderer is sandboxed and context-isolated, with no Node.js access. The main process
reaches files, processes and terminals only through the `ProjectHost` interface, so local
and SSH projects share one code path, and paths are always qualified by host. ESLint
rules and `npm run check-seams` enforce the boundaries that keep this true:""",
"""The renderer is sandboxed and context-isolated, with no Node.js access. The main process
reaches project files, processes and terminals through the `ProjectHost` interface, so
local and SSH projects share one code path, and paths are always qualified by host. ESLint
rules and `npm run check-seams` enforce the boundaries that keep this true:""")

sub("""Releases are cut by the manual **Release** workflow, whose `bump` input is `current`,
`patch`, `minor` or `major`. It builds the Linux x64 and arm64 packages and the macOS
arm64 package, installs, updates, launches and removes them on clean hosts, and then
publishes an immutable GitHub Release containing the packages, `install.sh`,
`SHA256SUMS`, `release-manifest.json` and `THIRD_PARTY_NOTICES.md`.""",
"""Releases are cut by the manual **Release** workflow, whose `bump` input is `current`,
`patch`, `minor` or `major`. It builds the Linux x64 and arm64 packages, signs and
notarizes the macOS arm64 package, runs an install, update, launch and removal acceptance
check on each package, and then publishes an immutable GitHub Release containing the
packages, `install.sh`, `SHA256SUMS`, `release-manifest.json` and
`THIRD_PARTY_NOTICES.md`.""")
open(p, 'w', encoding='utf-8').write(s)
EOF
npx prettier --ignore-path /dev/null --check README.md; git status --short

```
Checking formatting...
All matched files use Prettier code style!
?? README.md
<shellId: 190 completed with exit code 0>
```


---

<sub>22m 8s</sub>

### `bash`

**Spot-check remaining feature claims**

$ cd /private/var/tmp/ws/c9859428/hvir && echo "--- new worktree flag ---"; grep -rniE "newly|discovered" src/renderer/src/workspaces/*.ts* src/shared/workspace-types.ts | head -5; echo "--- git graph tab ---"; grep -rniE "git-graph|GitGraph" src/renderer/src --include=*.tsx -l | head -4; echo "--- blame ---"; grep -rnE "blame" src/renderer/src/viewer/*.tsx -il | head -3; echo "--- viewer tabs ---"; grep -rnE "role=\"tab\"" src/renderer/src/viewer/*.tsx | head -3

<details>
<summary>18 lines</summary>

```
--- new worktree flag ---
src/shared/workspace-types.ts:46:export interface DiscoveredWorktree {
src/shared/workspace-types.ts:59:  readonly worktrees: readonly DiscoveredWorktree[]
src/shared/workspace-types.ts:78:  readonly newlyDiscovered?: boolean
src/shared/workspace-types.ts:81:/** A registered project owns discovered worktree workspaces. */
--- git graph tab ---
src/renderer/src/App.tsx
src/renderer/src/viewer/TabStrip.tsx
src/renderer/src/git/GitGraphView.tsx
src/renderer/src/git/GitGraphLanes.tsx
--- blame ---
src/renderer/src/viewer/FileViewer.tsx
src/renderer/src/viewer/SourceView.tsx
--- viewer tabs ---
src/renderer/src/viewer/TabStrip.tsx:91:            role="tab"
src/renderer/src/viewer/TabStrip.tsx:156:            role="tab"
src/renderer/src/viewer/TabStrip.tsx:186:            role="tab"
<shellId: 191 completed with exit code 0>
```

</details>


---

<sub>22m 21s</sub>

### `bash`

**Clean temp artifacts and confirm repo state**

$ cd /private/var/tmp/ws/c9859428/hvir && rm -rf out && rm -f "$TMPDIR"/hvir-typecheck.log "$TMPDIR"/hvir-lint.log "$TMPDIR"/hvir-vitest.log "$TMPDIR"/hvir-build.log "$TMPDIR/README.before.md" "$TMPDIR/README.prettier.md"; ls "$TMPDIR" | grep -i hvir; ls -d out dist 2>&1 | head -2; git status --short --ignored | grep -vE "node_modules" | head; npm run format:check 2>&1 | tail -3

<details>
<summary>8 lines</summary>

```
ls: dist: No such file or directory
ls: out: No such file or directory
?? README.md
!! packages/rename-noreplace/build/
[warn] test/terminal-workspace-model.test.ts
[warn] test/viewer-workload-policy.test.ts
[warn] Code style issues found in 52 files. Run Prettier with --write to fix.
<shellId: 192 completed with exit code 0>
```

</details>


---

<sub>22m 32s</sub>

### `bash`

**Confirm README is not flagged and tree is otherwise clean**

$ cd /private/var/tmp/ws/c9859428/hvir && npm run format:check 2>&1 | grep -ciE "README" ; git status --short; git stash list | head -2; wc -l README.md

```
0
?? README.md
     422 README.md
<shellId: 193 completed with exit code 0>
```


---

<sub>22m 35s</sub>

### `bash`

**Proofread edited README regions**

$ cd /private/var/tmp/ws/c9859428/hvir && sed -n '28,48p;170,215p' README.md

<details>
<summary>54 lines</summary>

````
### Terminals and agents

- **Real terminals.** PTY-backed terminals rendered by [ghostty-web][ghostty-web],
  Ghostty's terminal core compiled to WebAssembly, with split panes, in-terminal search,
  a built-in color-theme gallery, and cursor and ligature settings.
- **Agent providers.** Start a terminal as a login shell, Claude Code, Codex, Pi, Gemini
  CLI, GitHub Copilot CLI, Cursor CLI, or any custom command.
- **Harness profiles.** For each provider, choose the executable (the provider default, a
  command name or a path), extra arguments and environment bindings (literal values,
  references or unsets). hvir previews the resulting command and probes the provider,
  reporting a missing executable, an unsupported version or required authentication.
- **Attention tracking.** Each terminal is marked as working, as having rung the bell, or
  as ready once it goes idle after you submitted input. States roll up per workspace and
  per project, and the app icon shows a badge count while hvir is not focused (where
  the desktop supports badges).
- **Restore, resume and fork.** hvir restores your terminals on start, either after asking
  which ones or all at once. Claude Code and Codex sessions resume the exact conversation,
  can be forked into a new terminal, and show a context-window meter. The other providers
  start fresh.
- **Move terminals.** Move a running terminal to another worktree.


### Terminal links

Ctrl+click or Cmd+click a file path in terminal output, with an optional line and column,
to open it in the viewer. The same gesture on a `localhost`, `127.0.0.1` or `[::1]` URL
opens it in a web pane.

### Keyboard shortcuts

`Mod` is Command on macOS and Ctrl elsewhere.

| Action                                     | Shortcut                    |
| ------------------------------------------ | --------------------------- |
| Find a file by name                        | `Mod+P`                     |
| Find in the open file                      | `Mod+F`                     |
| Go to line                                 | `Ctrl+G`                    |
| Find in the terminal                       | `Mod+Shift+F`               |
| Cycle viewer mode (rendered, source, diff) | `Mod+Shift+M`               |
| Focus the terminal                         | `Mod+J`                     |
| Focus the viewer                           | `Mod+1`                     |
| Focus the file tree                        | `Mod+0`                     |
| Maximize or restore the terminal panel     | `Mod+Shift+J`               |
| Next or previous workspace                 | `Mod+Alt+]` and `Mod+Alt+[` |

While a terminal has focus, `Mod+P`, `Mod+F`, `Ctrl+G` and `Mod+Shift+M` are left to the
program running in it, and `Mod+Shift+F` searches the terminal.

Override any of them in **Settings → Keybindings** with a JSON object that maps an action
to a stroke. Actions you leave out keep their defaults:

```json
{ "findFile": "Mod+K", "focusTerminal": "Mod+Shift+T" }
```

The action names are `cycleViewMode`, `findFile`, `findInFile`, `findInTerminal`,
`goToLine`, `focusTerminal`, `focusViewer`, `focusTree`, `toggleTerminalFocus`,
`nextWorkspace` and `previousWorkspace`.

### Remote hosts over SSH

1. Add the host to `~/.ssh/config`. hvir lists every `Host` alias that has no wildcard
   and reads only `HostName`, `User`, `Port` and `IdentityFile`; other options, such as
   `ProxyJump`, are ignored.

   ```sshconfig
   Host devbox
<shellId: 194 completed with exit code 0>
````

</details>


---

<sub>22m 40s</sub>

### `bash`

**Validate README keybinding example against the parser**

$ cd /private/var/tmp/ws/c9859428/hvir && node --input-type=module -e "
import { parseKeybindingOverrides } from './src/shared/keybindings.ts'
const r = parseKeybindingOverrides({ findFile: 'Mod+K', focusTerminal: 'Mod+Shift+T' })
console.log(r.findFile, r.focusTerminal, r.goToLine)
" 2>&1 | tail -3

```
To eliminate this warning, add "type": "module" to /private/var/tmp/ws/c9859428/hvir/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Mod+K Mod+Shift+T Ctrl+G
<shellId: 195 completed with exit code 0>
```


---

<sub>22m 45s</sub>

### Copilot

I created `README.md` at the repo root (about 420 lines). I wrote it only after reading the code, CI, installer and scripts. Several non-default behaviours are covered as well, such as the Ctrl/Cmd+click terminal links and the SSH `~/.ssh/config` handling.

It covers what hvir is, features, install, usage, development, architecture, CI and releases, contributing, and license. Every `npm run` it names exists in `package.json`, its relative links and anchors resolve, and the keybinding JSON example parses with the real parser.

- **Not verified:** I couldn't check over the network that the repo or release URLs resolve. The release workflow does mark each release latest and publishes `install.sh`. I also never launched the Electron GUI.
- **Links to missing docs:** I left out `AGENTS.md`, `CONTRIBUTING.md` and `docs/`, which source comments and tests mention but this snapshot doesn't have.
- **Pre-existing failures I didn't touch:**
  - `npm run check-adrs` fails because `docs/adr` is absent.
  - `npm run architecture:check` needs `HVIR_REPO_TOKEN`.
  - 23 unit tests fail, 2877 pass. Most read files this snapshot lacks (`CONTRIBUTING.md`, the PR template, the `.claude` skill); the rest hit sandbox socket or temp-directory limits.
  - `npm run format:check` already warns on 52 tracked files.
  
  The README notes the token requirement and doesn't promise a fully passing `verify`.

I deleted the `out/` build output and temp logs from my checks. `git status` shows only the new `README.md`.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
