# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `2199d875-c4a9-486f-8ea9-d438843f54d0`  
> - **Started:** 10/1/2026, 12:11:05 AM  
> - **Duration:** 1m 28s  
> - **Exported:** 10/1/2026, 12:12:33 AM  

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

### `bash`

**Inspect repository files and worktree status**

$ pwd && git status --short && ls -la

<details>
<summary>31 lines</summary>

```
/private/var/tmp/ws/3ebe456d/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Oct  1 00:11 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:10 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:11 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:10 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:10 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Oct  1 00:10 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Oct  1 00:10 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Oct  1 00:10 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:10 build
-rw-r--r--@   1 air-jarmak  wheel     549 Oct  1 00:10 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Oct  1 00:10 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Oct  1 00:10 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Oct  1 00:10 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Oct  1 00:10 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Oct  1 00:10 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Oct  1 00:10 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Oct  1 00:10 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:10 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Oct  1 00:10 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Oct  1 00:10 src
-rw-r--r--@   1 air-jarmak  wheel     537 Oct  1 00:10 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Oct  1 00:10 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Oct  1 00:10 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Oct  1 00:10 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Oct  1 00:10 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Oct  1 00:10 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Oct  1 00:10 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Oct  1 00:10 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/package.json.**

/private/var/tmp/ws/3ebe456d/hvir/package.json

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

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml.**

/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml

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

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/LICENSE.**

/private/var/tmp/ws/3ebe456d/hvir/LICENSE

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

<sub>9s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation termin... (truncated)
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review ter... (truncated)
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review"... (truncated)
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
````

</details>


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/3ebe456d/hvir/README.md' does not exist
```


### `file_search`

****/electron-builder*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron-builder*.yml"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml
```


### `file_search`

****/electron.vite.config.ts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron.vite.config.ts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/electron.vite.config.ts
```


### `file_search`

****/stryker.config.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/stryker.config.json"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/stryker.config.json
```


### `grep_search`

**SSH|ssh-acceptance|ssh acceptance**

<details>
<summary>Arguments</summary>

```json
{
  "query": "SSH|ssh-acceptance|ssh acceptance",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1418 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=25>
    "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=26>
    "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=27>
    "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=63>
    "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=85>
    "ssh-config": "^5.2.1",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=86>
    "ssh2": "^1.17.0",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=98>
    "@types/ssh2": "^1.15.6",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=3>
    import type { RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=10>
    readonly sshPrompter: () => RendererSshPrompter | null
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=23>
    { lifetime: 'renderer', type: 'ssh-prompt-presentation' },
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=24>
    () => resources.sshPrompter()?.revokeOwner(owner),
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=23>
    # packaging from also rebuilding ssh2's optional cpu-features acceleration module;
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=24>
    # ssh2 has a supported JavaScript fallback when that optional module is absent.
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=2>
    appId: dev.hvir.ssh-acceptance
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=3>
    productName: hvir SSH Acceptance
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=5>
    output: dist/ssh-acceptance
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=15>
    hvir SSH Acceptance connects to contributor-selected SSH hosts on the local
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package-lock.json" line=26>
    "ssh-config": "^5.2.1",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package-lock.json" line=27>
    "ssh2": "^1.17.0",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package-lock.json" line=39>
    "@types/ssh2": "^1.15.6",
</match>
```
````

</details>


### `grep_search`

**terminal|workspace|terminal/workspace**

<details>
<summary>Arguments</summary>

```json
{
  "query": "terminal|workspace|terminal/workspace",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5242 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=17>
    "prebuild": "node scripts/check-terminal-runtime.mts",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=18>
    "predev": "node scripts/check-terminal-runtime.mts",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=47>
    "generate:terminal-themes": "node scripts/generate-terminal-theme-catalog.mts",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=58>
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=59>
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=60>
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=360>
    'src/renderer/src/viewer/viewer-workspace-state.ts',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=365>
    'src/renderer/src/viewer/viewer-workspace-selectors.ts',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=368>
    '(^|/)(main|preload|workers)(/|$)|(^|/)viewer-workspace-model(\\.[cm]?[jt]sx?)?$|' +
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=370>
    'Viewer state and policy depend inward, never on the workspace reducer, presentation, or effects.',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=395>
    'Review workspace contracts and delivery cannot depend on interaction orchestration.',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=399>
    files: ['src/renderer/src/document-review/document-review-workspace.ts'],
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=401>
    '(^|/)main/harness(/|$)|(^|/)(use-[^/]+|document-review-workspace-controller)(\\.[cm]?[jt]sx?)?$|^react(/|$)',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/eslint.config.mjs" line=402>
    'Review workspace contracts cannot depend on effect hooks or the concrete workspace controller.',
</match>
```
````

</details>


### `file_search`

****/vitest.config.ts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/vitest.config.ts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/vitest.config.ts
```


### `file_search`

****/scripts/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/3ebe456d/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


### `grep_search`

**build|test|dev|start|workspace**

<details>
<summary>Arguments</summary>

```json
{
  "query": "build|test|dev|start|workspace",
  "isRegexp": true,
  "includePattern": "**/*.yml"
}
```

</details>

<details>
<summary>63 lines</summary>

````
58 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=1>
    appId: dev.hvir.app
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=5>
    buildResources: build
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=13>
    - node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=17>
    - from: build/native/hvir-command
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=22>
    # postinstall rebuilds the required node-pty module against Electron's ABI. Keep
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=23>
    # packaging from also rebuilding ssh2's optional cpu-features acceleration module;
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=25>
    npmRebuild: false
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=27>
    icon: build/icon-macos.icns
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=28>
    category: public.app-category.developer-tools
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=32>
    entitlements: build/entitlements.mac.plist
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=33>
    entitlementsInherit: build/entitlements.mac.inherit.plist
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=46>
    icon: build/icons-linux
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=49>
    category: Development
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=53>
    packageCategory: devel
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=54>
    appArmorProfile: build/linux/hvir.apparmor
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=55>
    afterInstall: build/linux/after-install.sh
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml" line=56>
    afterRemove: build/linux/after-remove.sh
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=1>
    extends: ./electron-builder.yml
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=2>
    appId: dev.hvir.ssh-acceptance
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml" line=6>
    buildResources: build
</match>
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>74 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml`. Lines 1 to 72 (72 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>19 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml`. Lines 1 to 17 (17 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/package.json",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation termin... (truncated)
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review ter... (truncated)
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review"... (truncated)
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
````

</details>


### `file_search`

****/scripts/run-macos-ssh-acceptance.sh**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/run-macos-ssh-acceptance.sh"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-ssh-acceptance.sh
```


### `file_search`

****/scripts/record-macos-ssh-identity.sh**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/record-macos-ssh-identity.sh"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/scripts/record-macos-ssh-identity.sh
```


### `file_search`

****/scripts/run-smoke-scenarios.mts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/run-smoke-scenarios.mts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-scenarios.mts
```


### `file_search`

****/scripts/real-host-ssh.vite.config.mts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/real-host-ssh.vite.config.mts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts
```


### `file_search`

****/src/main/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/main/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/harness-profile-workflow.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/app-settings.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/capacity-terminals.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/document-review-evidence.mts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/project-entry-deletion.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-scenario-ready.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/external-file-move.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-horizon-presentation.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/git-workflow.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/project-state-fixture.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-chrome.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/filename-search.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/platform-contracts.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/renderer-isolation.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-hidden-reveal.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/capacity-output-fixtures.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/viewer-position-operation.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-explicit-launch.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/sessions-projection.ts
```

</details>


### `file_search`

****/src/preload/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/preload/**"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/3ebe456d/hvir/src/preload/renderer-diagnostics.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts
```


### `file_search`

****/scripts/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/3ebe456d/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-ssh-acceptance.sh",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>64 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-ssh-acceptance.sh`. Lines 1 to 70 (70 lines total): 
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

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/scripts/record-macos-ssh-identity.sh",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>118 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/scripts/record-macos-ssh-identity.sh`. Lines 1 to 124 (124 lines total): 
```
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
    }
    release_app=$2
    shift 2
    ;;
  *)
    echo "Unknown macOS SSH identity argument: $1" >&2
    exit 1
    ;;
  esac
done
if [[ -z "$acceptance_app" ]]; then
  echo 'macOS SSH identity evidence requires --acceptance <application>.' >&2
  exit 1
fi

temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
evidence_root=$(mktemp -d "$temporary_parent/hvir-ssh-identity.XXXXXX")
cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  case "$evidence_root" in
  "$temporary_parent"/hvir-ssh-identity.*) /bin/rm -rf -- "$evidence_root" ;;
  *)
    echo "Refusing to clean unexpected identity-evidence root: $evidence_root" >&2
    status=1
    ;;
  esac
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

inspect_application() {
  local label=$1
  local application=$2
  local expected_identifier=$3
  local plist="$application/Contents/Info.plist"
  local signature_log="$evidence_root/$label-signature.log"
  local requirement_log="$evidence_root/$label-requirement.log"
  local identifier executable_name executable team_id authority requirement uuids usage

  if [[ ! -d "$application" || ! -f "$plist" ]]; then
    echo "$label application bundle is unavailable." >&2
    exit 1
  fi
  identifier=$(plutil -extract CFBundleIdentifier raw "$plist")
  executable_name=$(plutil -extract CFBundleExecutable raw "$plist")
  executable="$application/Contents/MacOS/$executable_name"
  if [[ "$identifier" != "$expected_identifier" || ! -x "$executable" ]]; then
    echo "$label application identity is not the expected hvir bundle." >&2
    exit 1
  fi
  if ! codesign --verify --deep --strict --verbose=2 "$application" \
    >"$signature_log" 2>&1; then
    echo "$label application failed strict code-signature verification." >&2
    exit 1
  fi
  codesign -dvvv "$application" >"$signature_log" 2>&1
  team_id=$(sed -n 's/^TeamIdentifier=//p' "$signature_log" | head -n 1)
  authority=$(sed -n 's/^Authority=//p' "$signature_log" | head -n 1)
  if [[ "$team_id" != "$MACOS_TEAM_ID" ||
    "$authority" != 'Developer ID Application:'* ]]; then
    echo "$label application does not carry the required Apple-issued Developer ID identity." >&2
    exit 1
  fi
  codesign -d -r- "$application" >"$requirement_log" 2>&1
  requirement=$(sed -n 's/^designated => //p' "$requirement_log" | head -n 1)
  uuids=$(dwarfdump --uuid "$executable" | awk '{print $2}' | paste -sd, -)
  if [[ -z "$requirement" || ! "$uuids" =~ ^[0-9A-Fa-f,-]+$ ]]; then
    echo "$label application identity evidence is incomplete." >&2
    exit 1
  fi
  usage=$(plutil -extract NSLocalNetworkUsageDescription raw "$plist" 2>/dev/null || true)
  if [[ "$label" == acceptance && -z "$usage" ]]; then
    echo 'acceptance application has no Local Network usage description.' >&2
    exit 1
  fi

  printf '%s\n' \
    "$label bundle ID: $identifier" \
    "$label signing class: Developer ID Application" \
    "$label Team ID: $team_id" \
    "$label designated requirement: $requirement" \
    "$label main-executable UUID: $uuids" \
    "$label Local Network usage description: ${usage:-unavailable}"
}

if [[ -n "$release_app" ]]; then
  inspect_application release "$release_app" dev.hvir.app
fi
inspect_application acceptance "$acceptance_app" dev.hvir.ssh-acceptance

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-scenarios.mts",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>250 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-scenarios.mts`. Lines 1 to 260 (at least 260 lines total): 
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
        })
      } catch (reason) {
        results.push({
          scenario,
          iteration,
          repetitionCount,
          status: 'failed',
          error: reason instanceof Error ? reason.message : String(reason),
        })
      }
      if (interruptionSignal?.aborted) return results
    }
  }
  return results
}

export function smokeScenarioEnvironment(
  environment: NodeJS.ProcessEnv,
  scenario: SmokeScenarioName,
): NodeJS.ProcessEnv {
  const childEnvironment: NodeJS.ProcessEnv = {
    ...environment,
    HVIR_SMOKE_SCENARIO: scenario,
  }
  delete childEnvironment.HVIR_SMOKE_REPEAT
  return childEnvironment
}

export function classifySmokeAttempt(options: {
  readonly exitCode: number | null
  readonly signal: NodeJS.Signals | null
  readonly successSentinel: boolean
  readonly disposedFrameDeliveryFailure?: boolean
  readonly durationMs: number
}): Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'> {
  const status =
    options.exitCode === 0 &&
    options.successSentinel &&
    options.disposedFrameDeliveryFailure !== true
      ? 'passed'
      : 'failed'
  return {
    status,
    ...(options.exitCode === null ? {} : { exitCode: options.exitCode }),
    ...(options.signal === null ? {} : { signal: options.signal }),
    ...(options.disposedFrameDeliveryFailure
      ? { error: 'disposed renderer frame delivery reached standard error' }
      : !options.successSentinel && options.exitCode === 0
        ? { error: 'missing success sentinel' }
        : {}),
    durationMs: options.durationMs,
  }
}

export function invokeSmokeScenario(
  scenario: SmokeScenarioName,
  iteration: number,
  repetitionCount: number,
  options: SmokeScenarioInvocationOptions = {},
): Promise<Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'>> {
  if (options.interruptionSignal?.aborted) {
    return Promise.resolve({ status: 'failed', error: 'launcher interrupted' })
  }
  const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
  console.log(
    `[smoke:group] ${scenario} iteration ${iteration}/${repetitionCount} starting`,
  )
  const startedAt = performance.now()
  return new Promise((resolveResult) => {
    const collector = new SmokeAttemptEvidenceCollector()
    const child = spawn(
      options.command ?? 'bash',
      [...(options.args ?? [join(repositoryRoot, 'scripts/run-smoke.sh')])],
      {
        cwd: options.cwd ?? repositoryRoot,
        detached: process.platform !== 'win32',
        env: smokeScenarioEnvironment(options.environment ?? process.env, scenario),
        stdio: ['inherit', 'pipe', 'pipe'],
      },
    )
    child.stdout.setEncoding('utf8')
    child.stderr.setEncoding('utf8')
    let settled = false
    let disposedFrameDeliveryFailure = false
    let stderrMarkerSuffix = ''
    const timers: {
      attempt?: ReturnType<typeof setTimeout>
      termination?: ReturnType<typeof setTimeout>
      forcedSettle?: ReturnType<typeof setTimeout>
    } = {}
    let forcedOutcome:
      | {
          readonly outcome: 'attempt-contained' | 'launcher-interrupted'
          readonly error: string
        }
      | undefined
    const clearTimers = (): void => {
      if (timers.attempt) clearTimeout(timers.attempt)
      if (timers.termination) clearTimeout(timers.termination)
      if (timers.forcedSettle) clearTimeout(timers.forcedSettle)
    }
    let unregisterSignalEscalation: (() => void) | undefined
    const releaseInterruptionOwnership = (): void => {
      options.interruptionSignal?.removeEventListener('abort', interrupt)
      unregisterSignalEscalation?.()
      unregisterSignalEscalation = undefined
    }
    const settleForcedAttempt = (
      exitCode: number | null,
      signal: NodeJS.Signals | null,
    ): void => {
      if (settled || !forcedOutcome) return
      settled = true
      clearTimers()
      releaseInterruptionOwnership()
      child.stdout.destroy()
      child.stderr.destroy()
      collector.finish()
      const durationMs = performance.now() - startedAt
      const result = {
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>18 lines</summary>

````
File: `/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts`. Lines 1 to 17 (17 lines total): 
```
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    ssr: 'scripts/run-real-host-ssh-acceptance.mts',
    target: 'node24',
    outDir: 'out/real-host-ssh',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'cjs',
        entryFileNames: 'real-host-ssh-acceptance.cjs',
      },
    },
  },
})

```
````

</details>


### `file_search`

****/src/main/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/main/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/harness-profile-workflow.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/app-settings.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/capacity-terminals.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/document-review-evidence.mts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/project-entry-deletion.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-scenario-ready.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/external-file-move.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-horizon-presentation.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/git-workflow.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/project-state-fixture.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-chrome.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/filename-search.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/platform-contracts.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/renderer-isolation.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-hidden-reveal.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/capacity-output-fixtures.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/viewer-position-operation.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/terminal-explicit-launch.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/main/smoke/sessions-projection.ts
```

</details>


### `file_search`

****/src/preload/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/preload/**"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/3ebe456d/hvir/src/preload/renderer-diagnostics.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts
  /private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts
```


### `file_search`

****/scripts/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/3ebe456d/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/3ebe456d/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


### `grep_search`

**SSH|ssh-acceptance|SSH Acceptance**

<details>
<summary>Arguments</summary>

```json
{
  "query": "SSH|ssh-acceptance|SSH Acceptance",
  "isRegexp": true,
  "includePattern": "**/*.{sh,mjs,mts,ts,js,yml,yaml,config.*}"
}
```

</details>

<details>
<summary>63 lines</summary>

````
1271 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=3>
    import type { RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=10>
    readonly sshPrompter: () => RendererSshPrompter | null
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=23>
    { lifetime: 'renderer', type: 'ssh-prompt-presentation' },
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts" line=24>
    () => resources.sshPrompter()?.revokeOwner(owner),
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-resource-scopes.ts" line=13>
    | 'ssh-prompt-presentation'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron.vite.config.ts" line=122>
    : mode === 'ssh-acceptance'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/electron.vite.config.ts" line=123>
    ? 'ssh-acceptance'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=9>
    import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=95>
    let sshPrompter: RendererSshPrompter | null = null
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=107>
    sshPrompter: () => sshPrompter,
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=143>
    isShuttingDown: () => runtime.isShuttingDown,
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=151>
    sshPrompter = runtime.own(
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=152>
    'SSH prompter',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=153>
    new RendererSshPrompter(
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=154>
    (owner, prompt) => rendererEvents.toRenderer(owner, 'ssh:prompt', prompt),
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=156>
    rendererEvents.toRenderer(owner, 'ssh:prompt-cancel', { hostId }),
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=163>
    prompter: sshPrompter,
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=299>
    !runtime.isShuttingDown && BrowserWindow.getAllWindows().length > 0,
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=350>
    const withSshPresentation = <T>(owner: RendererOwner, operation: () => T): T => {
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts" line=351>
    if (!sshPrompter) throw new Error('SSH prompting is unavailable')
</match>
```
````

</details>


### `grep_search`

**terminal|workspace|terminal/workspace|pty-native**

<details>
<summary>Arguments</summary>

```json
{
  "query": "terminal|workspace|terminal/workspace|pty-native",
  "isRegexp": true,
  "includePattern": "**/*.{sh,mjs,mts,ts,js,yml,yaml,config.*}"
}
```

</details>

<details>
<summary>63 lines</summary>

````
5194 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=3>
    export interface WorkspaceRemovalRegistryPort {
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=6>
    dismissWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=9>
    export interface WorkspaceRemovalCleanupPort {
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=10>
    forgetWorkspaceSessions(root: HostPath): Promise<void>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=11>
    revokeWorkspace(root: HostPath): Promise<void>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=12>
    closeWorkspaceWebPanes(root: HostPath): Promise<void>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=16>
    export interface WorkspaceRemovalPort {
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=17>
    removeMissingWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=20>
    /** Owns the shared resource and catalog lifecycle for a definitively missing workspace. */
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=21>
    export class WorkspaceRemovalCoordinator implements WorkspaceRemovalPort {
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=23>
    private readonly registry: WorkspaceRemovalRegistryPort,
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=24>
    private readonly cleanup: WorkspaceRemovalCleanupPort,
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=27>
    async removeMissingWorkspace(
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/src/main/workspace-removal-coordinator.ts" line=29>
    workspaceId: string,
</match>
```
````

</details>


### `grep_search`

**build:macos:ssh-acceptance|acceptance:ssh:macos|record-macos-ssh-identity|real-host-ssh**

<details>
<summary>Arguments</summary>

```json
{
  "query": "build:macos:ssh-acceptance|acceptance:ssh:macos|record-macos-ssh-identity|real-host-ssh",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
29 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=25>
    "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=26>
    "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=27>
    "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/package.json" line=63>
    "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts" line=5>
    ssr: 'scripts/run-real-host-ssh-acceptance.mts',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts" line=7>
    outDir: 'out/real-host-ssh',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts" line=12>
    entryFileNames: 'real-host-ssh-acceptance.cjs',
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml" line=12>
    group: real-host-ssh-acceptance
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml" line=19>
    environment: real-host-ssh
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml" line=65>
    environment: real-host-ssh
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml" line=91>
    HVIR_REAL_SSH_ARTIFACT_DIR: ${{ runner.temp }}/hvir-real-host-ssh
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml" line=98>
    name: real-host-ssh-failure-${{ github.run_attempt }}
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml" line=99>
    path: ${{ runner.temp }}/hvir-real-host-ssh
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/scripts/run-real-host-ssh-acceptance.mts" line=38>
    } from './real-host-ssh-contract.mts'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-ssh-acceptance.sh" line=54>
    scripts/record-macos-ssh-identity.sh --acceptance "$application"
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh-contract.mts" line=196>
    await writeFile(join(directory, 'real-host-ssh-failure.json'), contents, 'utf8')
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/test/real-host-ssh-contract.test.ts" line=13>
    } from '../scripts/real-host-ssh-contract.mts'
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/test/real-host-ssh-contract.test.ts" line=113>
    const contents = await readFile(join(directory, 'real-host-ssh-failure.json'), 'utf8')
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/test/real-host-ssh-workflow.test.ts" line=7>
    new URL('../.github/workflows/real-host-ssh.yml', import.meta.url),
</match>
<match path="/private/var/tmp/ws/3ebe456d/hvir/test/real-host-ssh-workflow.test.ts" line=41>
    expect(parsed.jobs.configuration?.environment).toBe('real-host-ssh')
</match>
```
````

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/3ebe456d/hvir/package.json:1-128
/private/var/tmp/ws/3ebe456d/hvir/electron-builder.yml:1-72
/private/var/tmp/ws/3ebe456d/hvir/electron-builder.ssh-acceptance.yml:1-17
/private/var/tmp/ws/3ebe456d/hvir/scripts/run-macos-ssh-acceptance.sh:1-70
/private/var/tmp/ws/3ebe456d/hvir/scripts/record-macos-ssh-identity.sh:1-124
/private/var/tmp/ws/3ebe456d/hvir/scripts/run-smoke-scenarios.mts:1-260
/private/var/tmp/ws/3ebe456d/hvir/scripts/real-host-ssh.vite.config.mts:1-17
/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts:1-210
/private/var/tmp/ws/3ebe456d/hvir/src/main/renderer-presentation-resources.ts:1-60
/private/var/tmp/ws/3ebe456d/hvir/src/preload/index.ts:1-80
/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/real-host-ssh.yml:1-120
\</final_answer>


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src.**

/private/var/tmp/ws/3ebe456d/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/main/index.ts (lines 1-240)

<details>
<summary>240 lines</summary>

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
```

</details>


---

<sub>23s</sub>

### `glob`

**.github/**/***

".github/**/*"

<details>
<summary>12 matches</summary>

```
./.github/dependabot.yml
./.github/workflows/smoke-stress.yml
./.github/workflows/ci.yml
./.github/workflows/release-pr-merged.yml
./.github/workflows/macos-package-release.yml
./.github/workflows/project-kind.yml
./.github/workflows/lock-tracker-conversations.yml
./.github/workflows/codeql.yml
./.github/workflows/project-pr-planning.yml
./.github/workflows/ghostty-web-update.yml
./.github/workflows/release.yml
./.github/workflows/real-host-ssh.yml
```

</details>


---

<sub>23s</sub>

### `rg`

**workspace|SSH|Markdown|settings|split**

"workspace|SSH|Markdown|settings|split" in *.tsx (src/renderer)

<details>
<summary>68 matches</summary>

```
[grep-paths: 54 path(s) under src/renderer/src; grouped by directory]

src/renderer/src/settings/ (16 path(s))
  ComposerSubmitConsentDialog.tsx
  HarnessProfileAdvancedFields.tsx
  HarnessProfileCommandFields.tsx
  HarnessProfileDialogs.tsx
  HarnessProfileEditor.tsx
  HarnessProfilesSettings.tsx
  SettingsActiveSection.tsx
  SettingsDialog.tsx
  SettingsSection.tsx
  SettingsSectionNavigation.tsx
  TerminalThemeGallery.tsx
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/KeybindingsSettings.tsx
  sections/TerminalSettings.tsx
  sections/TypographyFontField.tsx

src/renderer/src/terminal/ (10 path(s))
  TerminalDeck.tsx
  TerminalMoveDialog.tsx
  TerminalRail.tsx
  TerminalRailCompact.tsx
  TerminalRecoveryDialog.tsx
  TerminalSessionRuntimes.tsx
  TerminalView.tsx
  TerminalWorkspace.tsx
  TerminalWorkspaceCollection.tsx
  TerminalWorkspaceControls.tsx

src/renderer/src/tree/ (6 path(s))
  DirectoryTree.tsx
  FileCreateOverlays.tsx
  FileExternalMoveDialog.tsx
  FileOrganizationDialog.tsx
  FileTree.tsx
  FilenameSearch.tsx

src/renderer/src/viewer/ (5 path(s))
  FileViewer.tsx
  MarkdownFragment.tsx
  RenderedView.tsx
  RepositoryImageView.tsx
  TabStrip.tsx

src/renderer/src/sessions/ (4 path(s))
  SessionsApplicationDestination.tsx
  SessionsCollectionToolbar.tsx
  SessionsOverview.tsx
  SessionsTerminalDetail.tsx

src/renderer/src/workspaces/ (3 path(s))
  MissingWorkspaceNotice.tsx
  ProjectsBar.tsx
  WorkspaceCatalogDialogs.tsx

src/renderer/src/ (2 path(s))
  App.tsx
  main.tsx

src/renderer/src/dashboards/ (2 path(s))
  WebPane.tsx
  WebPaneStack.tsx

src/renderer/src/document-review/ (2 path(s))
  DocumentReviewControls.tsx
  DocumentReviewDeliveryPanel.tsx

src/renderer/src/git/ (2 path(s))
  GitChangesView.tsx
  GitGraphView.tsx

src/renderer/src/path-copy/ (1 path(s))
  PathCopyMenu.tsx

src/renderer/src/workbench/ (1 path(s))
  TerminalLayoutControls.tsx

[extensions: .tsx=54]
```

</details>


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/3ebe456d/hvir/electron.vite.config.ts

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

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/3ebe456d/hvir/scripts/check-terminal-runtime.mts (lines 1-160)

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

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/3ebe456d/hvir/.github/workflows/ci.yml (lines 1-190)

<details>
<summary>160 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/main/application-runtime.ts

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

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx (lines 1-180)

<details>
<summary>115 lines</summary>

```
import type { ReactElement } from 'react'

import {
  displayHostPath,
  type RegisteredProjectState,
  type WorkspaceClosePlan,
  type WorkspaceState,
} from '../../../shared'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'

export function CloseWorkspaceDialog({
  workspace,
  plan,
  busy,
  onCancel,
  onConfirm,
}: {
  readonly workspace: WorkspaceState
  readonly plan: WorkspaceClosePlan
  readonly busy: boolean
  readonly onCancel: () => void
  readonly onConfirm: () => void
}): ReactElement {
  const count = plan.terminalCount
  return (
    <ConfirmationDialog
      labelledBy="close-workspace-title"
      actions={[
        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
        { label: 'Close workspace', kind: 'destructive', onSelect: onConfirm },
      ]}
      busy={busy}
      className="close-workspace-dialog"
    >
      <h2 id="close-workspace-title">Close {workspace.name}?</h2>
      <p>
        {count} hvir terminal{count === 1 ? '' : 's'} will be terminated. hvir will forget{' '}
        {count === 1 ? 'its' : 'their'} recovery records.
      </p>
      <code>{displayHostPath(workspace.root)}</code>
      <p className="dialog-note">
        Files, Git state, viewer tabs, layouts, and provider-owned conversations are not
        changed.
      </p>
    </ConfirmationDialog>
  )
}

export function ClosedWorktreesDialog({
  project,
  workspaces,
  busy,
  onCancel,
  onReopen,
  onDismiss,
}: {
  readonly project: RegisteredProjectState
  readonly workspaces: readonly WorkspaceState[]
  readonly busy: boolean
  readonly onCancel: () => void
  readonly onReopen: (workspaceId: string) => void
  readonly onDismiss: (workspaceId: string) => void
}): ReactElement {
  return (
    <ConfirmationDialog
      labelledBy="closed-worktrees-title"
      actions={[{ label: 'Close', kind: 'cancel', onSelect: onCancel }]}
      busy={busy}
      className="closed-worktrees-dialog"
    >
      <h2 id="closed-worktrees-title">Closed worktrees in {project.displayName}</h2>
      <p>Reopen a present worktree or manage a worktree that Git no longer finds.</p>
      <div className="closed-worktrees-list">
        {workspaces.map((workspace) => (
          <div className="closed-worktree-row" key={workspace.id}>
            <span>
              <strong>{workspace.name}</strong>
              <code>{displayHostPath(workspace.root)}</code>
              <small>{closedWorktreeState(workspace)}</small>
            </span>
            {!workspace.missing ? (
              <button
                type="button"
                disabled={busy}
                onClick={() => onReopen(workspace.id)}
                aria-label={`Reopen workspace ${workspace.name}`}
                title={`Reopen workspace ${workspace.name}`}
              >
                Reopen
              </button>
            ) : !workspace.prunableReason ? (
              <button
                type="button"
                className="destructive"
                disabled={busy}
                onClick={() => onDismiss(workspace.id)}
                aria-label={`Dismiss removed workspace ${workspace.name}`}
                title="Forget removed worktree from hvir"
              >
                Dismiss
              </button>
            ) : null}
          </div>
        ))}
      </div>
      {workspaces.some((workspace) => workspace.prunableReason) ? (
        <p className="dialog-note">
          Use the existing Prune action to remove Git's stale administrative records.
        </p>
      ) : null}
    </ConfirmationDialog>
  )
}

function closedWorktreeState(workspace: WorkspaceState): string {
  if (workspace.prunableReason) return `Prunable · ${workspace.prunableReason}`
  if (workspace.missing) return 'Missing from the last successful Git discovery'
  return 'Present'
}
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/settings/SettingsSectionNavigation.tsx.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/settings/SettingsSectionNavigation.tsx

<details>
<summary>41 lines</summary>

```
import type { ReactElement } from 'react'

import { SETTINGS_SECTIONS, type SettingsSection } from './settings-navigation'

export function SettingsSectionNavigation({
  activeSection,
  onSelect,
}: {
  readonly activeSection: SettingsSection
  readonly onSelect: (section: SettingsSection) => void
}): ReactElement {
  return (
    <>
      <nav className="settings-section-index" aria-label="Settings sections">
        {SETTINGS_SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            className={activeSection === section.id ? 'active' : undefined}
            aria-current={activeSection === section.id ? 'page' : undefined}
            aria-controls={`settings-${section.id}-title`}
            onClick={() => onSelect(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
      <label className="settings-section-selector">
        <span>Settings section</span>
        <select
          value={activeSection}
          onChange={(event) => onSelect(event.currentTarget.value as SettingsSection)}
        >
          {SETTINGS_SECTIONS.map((section) => (
            <option key={section.id} value={section.id}>
              {section.label}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-130)

<details>
<summary>125 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `rg`

**--project|projectRootArgument|hvir-command|clang|gcc|make|python**

"--project|projectRootArgument|hvir-command|clang|gcc|make|python" in *.{ts,yml,c,sh} (src/main/index.ts, .github/workflows, build/native)

```
src/main/index.ts:    const requestedProjectRoot = projectRootArgument()
src/main/index.ts:  function projectRootArgument(): string | undefined {
src/main/index.ts:    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
src/main/index.ts:    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
src/main/index.ts:          projectRoot: localPath(projectRootArgument() ?? process.cwd()),
```


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/main/application-runtime-policy.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/main/application-runtime-policy.ts (lines 1-220)

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

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/main/harness/harness-provider.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/main/harness/harness-provider.ts (lines 1-150)

<details>
<summary>47 lines</summary>

```
/**
 * Compatibility facade for the main-owned harness-provider seam (ADR-006/012).
 * Internal policy and observers import their named contracts, never this assembly surface.
 */

export type {
  HarnessLaunchContext,
  HarnessLaunchSpec,
  HarnessComposerConfiguration,
  HarnessRemoteImagePasteContract,
  HarnessDocumentReviewInsertContract,
  HarnessDocumentReviewInsertLaunch,
  HarnessDocumentReviewSendNowLaunch,
  HarnessDocumentReviewSendNowContract,
  HarnessSessionDiscoveryResult,
  HarnessSessionDiscoveryContext,
  HarnessArtifactContext,
  HarnessSessionDiscovery,
  HarnessTelemetryContext,
  HarnessTelemetryObserver,
  HarnessResumeAvailability,
  HarnessResumeValidationContext,
  HarnessResumeValidation,
  HarnessManifest,
  HarnessDefaultProfile,
  HarnessProfileContract,
  HarnessProbeContract,
  HarnessProvider,
} from './harness-provider-contract'
export { HarnessProviderRegistry } from './harness-provider-registry'
export {
  harnessProviderCapabilities,
  harnessLaunchCapabilities,
} from './harness-provider-capabilities'
export {
  selectHarnessLaunch,
  type HarnessLaunchDecision,
} from './harness-launch-selection'
export { plainShellProvider, customCommandProvider } from './providers/shell'
export { claudeCodeProvider } from './providers/claude-code'
export { codexProvider } from './providers/codex'
export {
  harnessProviders,
  harnessProvider,
  harnessProviderCatalog,
  configureHarnessComposerSubmit,
  harnessProviderDiagnostics,
} from './bundled-harness-providers'
```

</details>


---

<sub>37s</sub>

### `glob`

**src/main/project-host/*ssh***

"src/main/project-host/*ssh*"

<details>
<summary>15 matches</summary>

```
./src/main/project-host/ssh-project-file-transfer.ts
./src/main/project-host/ssh-exclusive-create.ts
./src/main/project-host/ssh-transport-pool.ts
./src/main/project-host/ssh-auth.ts
./src/main/project-host/renderer-ssh-prompter.ts
./src/main/project-host/ssh-client-lifecycle.ts
./src/main/project-host/ssh-host-trust.ts
./src/main/project-host/ssh-file-access.ts
./src/main/project-host/ssh-host.ts
./src/main/project-host/ssh-host-options.ts
./src/main/project-host/ssh-text-prefix.ts
./src/main/project-host/ssh-config.ts
./src/main/project-host/ssh-abort.ts
./src/main/project-host/ssh-identity-source.ts
./src/main/project-host/ssh-watch-service.ts
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/viewer/RenderedView.tsx.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/viewer/RenderedView.tsx (lines 1-125)

<details>
<summary>118 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type RefObject,
} from 'react'

import {
  HTML_SANDBOX,
  renderedFileType,
  type CreateHtmlPreviewResponse,
  type HostPath,
} from '../../../shared'
import { renderMarkdown, resetMarkdownRenderer } from './markdown-client'
import { DomFindTarget } from './dom-find-target'
import { handleRenderedLinkClick } from './rendered-link-handler'
import type {
  JsonNodeDescriptor,
  JsonWorkerRequestInput,
  JsonWorkerResponse,
} from './json-protocol'
import { useAppTheme } from '../theme'
import type { CsvTableData } from './csv-parser'
import type { CsvWorkerResponse } from './csv-protocol'
import type { ViewerDocumentPosition, ViewerDocumentRefresh } from './tab-state'
import type { RegisterViewerFindTarget } from './viewer-find'
import { captureRenderedPosition, restoreRenderedPosition } from './rendered-position'
import { documentLineCount, type ViewerPositionCapture } from './viewer-position'
import { RepositoryImageView } from './RepositoryImageView'
import { MarkdownRepositoryImages } from './markdown-repository-images'
import { bindRenderedDocumentReview } from '../document-review/document-review-rendered'
import { useDocumentReviewInlineHostRegistration } from '../document-review/document-review-inline'
import type { DocumentReviewDocumentProjection } from '../document-review/use-document-review-interaction'

let jsonWorker: Worker | undefined
let jsonRequestId = 0
let jsonDocumentId = 0
let mermaidRequestId = 0
let mermaidPromise: Promise<typeof import('mermaid').default> | undefined
let csvWorker: Worker | undefined
let csvRequestId = 0

function getJsonWorker(): Worker {
  jsonWorker ??= new Worker(new URL('./json.worker.ts', import.meta.url), {
    type: 'module',
  })
  return jsonWorker
}

function getCsvWorker(): Worker {
  csvWorker ??= new Worker(new URL('./csv.worker.ts', import.meta.url), {
    type: 'module',
  })
  return csvWorker
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    jsonWorker?.terminate()
    jsonWorker = undefined
    csvWorker?.terminate()
    csvWorker = undefined
  })
}

interface RenderedViewProps {
  readonly path: HostPath
  readonly content: string
  readonly position: ViewerDocumentPosition
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly positionCapture: ViewerPositionCapture
  readonly onOpenPath: (path: HostPath) => void
  readonly refresh?: ViewerDocumentRefresh
  readonly onDependencies: (paths: readonly HostPath[]) => void
  readonly registerFindTarget: RegisterViewerFindTarget
  readonly documentReview?: DocumentReviewDocumentProjection
}

export function RenderedView({
  path,
  content,
  position,
  onPosition,
  positionCapture,
  onOpenPath,
  refresh,
  onDependencies,
  registerFindTarget,
  documentReview,
}: RenderedViewProps): ReactElement {
  const renderGeneration = useDevRendererGeneration()
  const theme = useAppTheme()
  const type = renderedFileType(path)
  if (type === 'image') {
    return <RepositoryImageView path={path} refreshVersion={refresh?.version ?? 0} />
  }
  if (type === 'csv') {
    return (
      <CsvView
        content={content}
        position={position}
        onPosition={onPosition}
        positionCapture={positionCapture}
        renderGeneration={renderGeneration}
        registerFindTarget={registerFindTarget}
      />
    )
  }
  if (type === 'html') {
    return (
      <HtmlPreview path={path} content={content} renderGeneration={renderGeneration} />
    )
  }
  if (type === 'json' || type === 'yaml') {
    return (
      <StructuredDataView
        content={content}
        format={type}
        renderGeneration={renderGeneration}
        position={position}
        onPosition={onPosition}
        positionCapture={positionCapture}
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/git/GitChangesView.tsx.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/git/GitChangesView.tsx (lines 1-125)

<details>
<summary>118 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import {
  basenameHostPath,
  type DiffBase,
  type GitChangedFile,
  type GitChanges,
  type HostPath,
} from '../../../shared'
import { splitFileName } from '../tree/file-name'
import { displayGitParentPath } from './commit-file-tree'
import { gitChangeGroups } from './git-rail-model'
import { virtualRange } from './virtual-range'

const DETAIL_ROW_HEIGHT = 28

interface GitChangesViewProps {
  readonly root: HostPath
  readonly changes?: GitChanges
  readonly loading: boolean
  readonly error?: string
  readonly onOpen: (path: HostPath, base: DiffBase, untracked?: boolean) => void
}

export function GitChangesView({
  root,
  changes,
  loading,
  error,
  onOpen,
}: GitChangesViewProps): ReactElement {
  if (!changes) {
    return (
      <>
        {error ? <div className="tree-error">Changes unavailable: {error}</div> : null}
        {loading ? <div className="git-empty">Loading changes…</div> : null}
      </>
    )
  }
  let content: ReactElement
  if (changes.repositoryState === 'not-git') {
    content = <div className="git-empty">Not a Git repository</div>
  } else if (changes.workingTreeLimited) {
    content = (
      <>
        <GitChangeLimitNotice changes={changes} />
        {gitChangeGroups(changes).map((group) => (
          <ChangeGroup
            key={group.key}
            title={group.title}
            files={group.files}
            root={root}
            base={group.base}
            onOpen={onOpen}
            collapsible={group.collapsible}
          />
        ))}
      </>
    )
  } else if (changes.workingTree.length === 0 && changes.branchPoint.length === 0) {
    content = (
      <div className="git-empty">
        {changes.repositoryState === 'unborn'
          ? 'No commits yet · working tree clean'
          : 'Working tree clean'}
      </div>
    )
  } else {
    content = (
      <>
      {gitChangeGroups(changes).map((group) => (
        <ChangeGroup
          key={
            group.key === 'branch-point'
              ? `${root.hostId}:${root.path}:branch-point`
              : group.key
          }
          title={group.title}
          files={group.files}
          root={root}
          base={group.base}
          onOpen={onOpen}
          collapsible={group.collapsible}
        />
      ))}
      {!changes.branchPointAvailable ? (
        <div
          className="git-empty git-branch-unavailable"
          title={changes.branchPointUnavailableReason}
        >
          Branch point unavailable
        </div>
      ) : null}
      </>
    )
  }

  return (
    <div className="git-changes">
      {error ? <div className="tree-error">Changes unavailable: {error}</div> : null}
      {content}
    </div>
  )
}

function GitChangeLimitNotice({ changes }: { readonly changes: GitChanges }): ReactElement {
  return (
    <div className="git-limit-notice" role="status">
      {changes.workingTree.length >= (changes.workingTreeLimit ?? 2_000) ? (
        <>
          More than {changes.workingTreeLimit?.toLocaleString() ?? '2,000'} changes;
          showing the first {changes.workingTreeLimit?.toLocaleString() ?? '2,000'}.
        </>
      ) : (
        <>
          Git status exceeded the bounded output scan; showing{' '}
          {changes.workingTree.length.toLocaleString()} complete change records.
        </>
      )}{' '}
      Per-file statistics and branch-point detail are paused.
    </div>
  )
}

function ChangeGroup({
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/settings/settings-navigation.ts

<details>
<summary>25 lines</summary>

```
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
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/3ebe456d/hvir/scripts/check-adrs.mjs (lines 1-85)

<details>
<summary>77 lines</summary>

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
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/.prettierrc.json.**

/private/var/tmp/ws/3ebe456d/hvir/.prettierrc.json

<details>
<summary>7 lines</summary>

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/main/project-host/ssh-config.ts (lines 1-115)

<details>
<summary>46 lines</summary>

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
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/main/project-host/ssh-auth.ts.**

/private/var/tmp/ws/3ebe456d/hvir/src/main/project-host/ssh-auth.ts (lines 1-115)

<details>
<summary>14 lines</summary>

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
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/build/native.**

/private/var/tmp/ws/3ebe456d/hvir/build/native

```
hvir-command
```


---

<sub>45s</sub>

### `rg`

**git|python|bash|uname|command -v**

"git|python|bash|uname|command -v" in *.ts (src/main/project-host)

```
src/main/project-host/ssh-watch-service.ts:      const gitMetadataDirectory =
src/main/project-host/ssh-watch-service.ts:          (gitMetadataDirectory && GIT_PRIORITY_FILES.has(entry.filename))
src/main/project-host/local-host.ts:        (process.platform === 'win32' ? 'powershell.exe' : '/bin/bash'),
src/main/project-host/ssh-host.ts:      'if [ -n "$SHELL" ] && [ -x "$SHELL" ]; then printf "%s\\n" "$SHELL"; elif command -v bash >/dev/null 2>&1; then command -v bash; else printf "/bin/sh\\n"; fi',
src/main/project-host/ssh-host.ts:          await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
```


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/3ebe456d/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-125)

<details>
<summary>122 lines</summary>

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
```

</details>


---

<sub>49s</sub>

### Copilot

I’ll document the implemented workbench features, local setup, and packaging commands, including the native dependency and macOS SSH requirements.


---

<sub>1m 20s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: /private/var/tmp/ws/3ebe456d/hvir/README.md\n+# hvir\n+\n+hvir is a terminal-first desktop workbench for local and SSH projects. It brings\n+terminals, Git worktrees, file editing and previews, and coding-agent sessions into\n+one application.\n+\n+Built with Electron, React, and TypeScript, hvir uses Ghostty's web terminal runtime\n+and native pseudo-terminals through `node-pty`.\n+\n+## Features\n+\n+- **Projects and workspaces:** open local folders or SSH projects, switch between\n+  Git worktrees, and manage closed or missing workspaces.\n+- **Terminals:** run shells and custom commands, split the terminal layout, move\n+  terminals between workspaces, and manage session recovery.\n+- **Coding-agent harnesses:** configure launch profiles for Claude Code, Codex,\n+  plain shells, and custom commands; inspect sessions and send document-review\n+  feedback to supported harnesses. Agent tools must be installed separately.\n+- **Files and previews:** browse and search files, edit source, inspect diffs and\n+  blame, and preview Markdown with Mermaid diagrams, HTML, images, JSON, YAML,\n+  and CSV.\n+- **Git and web panes:** inspect changes and commit history, work with branches\n+  and worktrees, and open web content alongside the project.\n+- **Customization:** adjust appearance, terminal themes, typography, Git settings,\n+  and keybindings.\n+\n+## Platforms\n+\n+The repository provides native packaging commands for:\n+\n+| Platform | Architecture | Package |\n+| --- | --- | --- |\n+| macOS | Apple Silicon (`arm64`) | `.pkg` |\n+| Linux | `x64`, `arm64` | `.deb` |\n+\n+Linux packages require glibc 2.35 or newer and the desktop libraries declared in\n+[`electron-builder.yml`](electron-builder.yml). CI uses Ubuntu 24.04 and macOS 15.\n+There is no Windows packaging command in this checkout.\n+\n+## Run from source\n+\n+### Prerequisites\n+\n+- Node.js **24 or newer** and npm.\n+- Git for repository and worktree features.\n+- Python and a native C/C++ build toolchain for the native modules: Xcode Command\n+  Line Tools on macOS, or `make` and a C/C++ compiler on Linux.\n+- A graphical desktop environment and Electron's system libraries on Linux.\n+\n+From the repository root:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+Installation downloads Electron, builds the local `@hvir/rename-noreplace` addon,\n+and rebuilds `node-pty` for Electron's ABI. Keep install scripts enabled.\n+Development and production builds check that the installed Ghostty runtime matches\n+the capabilities required by this checkout.\n+\n+On first launch, choose a project folder. To start with a specific local project,\n+set `HVIR_PROJECT_ROOT`:\n+\n+```sh\n+HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev\n+```\n+\n+Use the project controls to add projects and switch workspaces, and Settings to\n+configure terminals, keybindings, and harness profiles.\n+\n+### SSH projects\n+\n+hvir reads host aliases from SSH configuration and presents authentication and\n+host-key trust prompts in the application. Do not assume every OpenSSH directive\n+is supported; the configuration reader resolves aliases, hostnames, users, ports,\n+and identity files.\n+\n+For macOS SSH acceptance testing, use the signed acceptance application rather\n+than treating the development Electron process as equivalent to an installed app:\n+\n+```sh\n+npm run acceptance:ssh:macos\n+```\n+\n+This command requires macOS `arm64` and the environment variables\n+`MACOS_APPLICATION_CERTIFICATE`, `MACOS_APPLICATION_CERTIFICATE_PASSWORD`, and\n+`MACOS_TEAM_ID` for an Apple-issued Developer ID Application identity. It builds\n+and launches a separate `hvir SSH Acceptance.app` with isolated application data.\n+Use `npm run build:macos:ssh-acceptance` to build without launching.\n+\n+## Development commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start Electron with the Vite development server |\n+| `npm run build` | Type-check and build into `out/` |\n+| `npm run preview` | Launch the built application |\n+| `npm run typecheck` | Check main/preload and renderer TypeScript |\n+| `npm run lint` | Run ESLint |\n+| `npm test` | Run the Vitest suite |\n+| `npm run test:watch` | Run Vitest in watch mode |\n+| `npm run format:check` | Check formatting with Prettier |\n+| `npm run smoke` | Build and run Electron smoke scenarios |\n+| `npm run smoke:macos` | Run the focused macOS smoke scenarios |\n+| `npm run verify` | Run architecture and ADR checks, lint, types, and tests |\n+\n+Electron smoke tests need a display. On a headless Linux host with Xvfb installed,\n+run `xvfb-run -a npm run smoke`, as CI does.\n+\n+The aggregate `verify` command also expects architecture documentation under\n+`docs/`, including `docs/adr/` and `docs/design.md`. Those files are not present in\n+this checkout; the individual lint, type-check, and test commands are available\n+independently.\n+\n+## Build packages\n+\n+Run the command matching the target platform and architecture:\n+\n+```sh\n+npm run pack:mac:arm64\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+Package artifacts are written to `dist/`. For an unpacked application directory,\n+use `npm run build:dir`. The signed macOS packaging command is\n+`npm run pack:mac:arm64:signed`; signing requires the appropriate credentials.\n+Packaging configuration and system dependencies live in\n+[`electron-builder.yml`](electron-builder.yml).\n+\n+## Project layout\n+\n+| Path | Responsibility |\n+| --- | --- |\n+| `src/main/` | Electron lifecycle, project hosts, SSH, terminal supervision, and application services |\n+| `src/preload/` | Renderer-facing bridge to main-process services |\n+| `src/renderer/` | React workbench UI, terminal presentation, file viewers, and settings |\n+| `src/shared/` | Shared types and protocols |\n+| `src/workers/` | Utility-process workers |\n+| `packages/rename-noreplace/` | Local native addon |\n+| `test/` | Automated tests |\n+| `scripts/` | Verification, smoke, packaging, and maintenance tooling |\n+| `build/` | Icons, installer resources, and platform integration |\n+\n+Application-owned state is stored under Electron's `userData` directory, including\n+`projects.json`, `terminal-sessions.json`, `harness-profiles.json`, and\n+`known-hosts.json`. The signed SSH acceptance build uses the separate\n+`hvir-ssh-acceptance` directory under the platform's application-data location.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). See\n+[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices and licenses.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/3ebe456d/hvir/README.md
```


---

<sub>1m 23s</sub>

### `bash`

**Format README and check final worktree changes**

$ ./node_modules/.bin/prettier --write README.md && git diff --check && git status --short

```
?? README.md
<shellId: 1 completed with exit code 0>
```


---

<sub>1m 25s</sub>

### `view`

**view the file at /private/var/tmp/ws/3ebe456d/hvir/README.md.**

/private/var/tmp/ws/3ebe456d/hvir/README.md (lines 1-180)

<details>
<summary>119 lines</summary>

````
# hvir

hvir is a terminal-first desktop workbench for local and SSH projects. It brings
terminals, Git worktrees, file editing and previews, and coding-agent sessions into
one application.

Built with Electron, React, and TypeScript, hvir uses Ghostty's web terminal runtime
and native pseudo-terminals through `node-pty`.

## Features

- **Projects and workspaces:** open local folders or SSH projects, switch between
  Git worktrees, and manage closed or missing workspaces.
- **Terminals:** run shells and custom commands, split the terminal layout, move
  terminals between workspaces, and manage session recovery.
- **Coding-agent harnesses:** configure launch profiles for Claude Code, Codex,
  plain shells, and custom commands; inspect sessions and send document-review
  feedback to supported harnesses. Agent tools must be installed separately.
- **Files and previews:** browse and search files, edit source, inspect diffs and
  blame, and preview Markdown with Mermaid diagrams, HTML, images, JSON, YAML,
  and CSV.
- **Git and web panes:** inspect changes and commit history, work with branches
  and worktrees, and open web content alongside the project.
- **Customization:** adjust appearance, terminal themes, typography, Git settings,
  and keybindings.

## Platforms

The repository provides native packaging commands for:

| Platform | Architecture | Package |
| --- | --- | --- |
| macOS | Apple Silicon (`arm64`) | `.pkg` |
| Linux | `x64`, `arm64` | `.deb` |

Linux packages require glibc 2.35 or newer and the desktop libraries declared in
[`electron-builder.yml`](electron-builder.yml). CI uses Ubuntu 24.04 and macOS 15.
There is no Windows packaging command in this checkout.

## Run from source

### Prerequisites

- Node.js **24 or newer** and npm.
- Git for repository and worktree features.
- Python and a native C/C++ build toolchain for the native modules: Xcode Command
  Line Tools on macOS, or `make` and a C/C++ compiler on Linux.
- A graphical desktop environment and Electron's system libraries on Linux.

From the repository root:

```sh
npm ci
npm run dev
```

Installation downloads Electron, builds the local `@hvir/rename-noreplace` addon,
and rebuilds `node-pty` for Electron's ABI. Keep install scripts enabled.
Development and production builds check that the installed Ghostty runtime matches
the capabilities required by this checkout.

On first launch, choose a project folder. To start with a specific local project,
set `HVIR_PROJECT_ROOT`:

```sh
HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev
```

Use the project controls to add projects and switch workspaces, and Settings to
configure terminals, keybindings, and harness profiles.

### SSH projects

hvir reads host aliases from SSH configuration and presents authentication and
host-key trust prompts in the application. Do not assume every OpenSSH directive
is supported; the configuration reader resolves aliases, hostnames, users, ports,
and identity files.

For macOS SSH acceptance testing, use the signed acceptance application rather
than treating the development Electron process as equivalent to an installed app:

```sh
npm run acceptance:ssh:macos
```

This command requires macOS `arm64` and the environment variables
`MACOS_APPLICATION_CERTIFICATE`, `MACOS_APPLICATION_CERTIFICATE_PASSWORD`, and
`MACOS_TEAM_ID` for an Apple-issued Developer ID Application identity. It builds
and launches a separate `hvir SSH Acceptance.app` with isolated application data.
Use `npm run build:macos:ssh-acceptance` to build without launching.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Electron with the Vite development server |
| `npm run build` | Type-check and build into `out/` |
| `npm run preview` | Launch the built application |
| `npm run typecheck` | Check main/preload and renderer TypeScript |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run format:check` | Check formatting with Prettier |
| `npm run smoke` | Build and run Electron smoke scenarios |
| `npm run smoke:macos` | Run the focused macOS smoke scenarios |
| `npm run verify` | Run architecture and ADR checks, lint, types, and tests |

Electron smoke tests need a display. On a headless Linux host with Xvfb installed,
run `xvfb-run -a npm run smoke`, as CI does.

The aggregate `verify` command also expects architecture documentation under
`docs/`, including `docs/adr/` and `docs/design.md`. Those files are not present in
this checkout; the individual lint, type-check, and test commands are available
independently.

## Build packages

Run the command matching the target platform and architecture:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Package artifacts are written to `dist/`. For an unpacked application directory,
use `npm run build:dir`. The signed macOS packaging command is
`npm run pack:mac:arm64:signed`; signing requires the appropriate credentials.
Packaging configuration and system dependencies live in
[`electron-builder.yml`](electron-builder.yml).

## Project layout

| Path | Responsibility |
| --- | --- |
| `src/main/` | Electron lifecycle, project hosts, SSH, terminal supervision, and application services |
| `src/preload/` | Renderer-facing bridge to main-process services |
| `src/renderer/` | React workbench UI, terminal presentation, file viewers, and settings |
| `src/shared/` | Shared types and protocols |
| `src/workers/` | Utility-process workers |
| `packages/rename-noreplace/` | Local native addon |
| `test/` | Automated tests |
| `scripts/` | Verification, smoke, packaging, and maintenance tooling |
| `build/` | Icons, installer resources, and platform integration |

Application-owned state is stored under Electron's `userData` directory, including
`projects.json`, `terminal-sessions.json`, `harness-profiles.json`, and
`known-hosts.json`. The signed SSH acceptance build uses the separate
`hvir-ssh-acceptance` directory under the platform's application-data location.

## License

hvir is licensed under the [MIT License](LICENSE). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices and licenses.
````

</details>


---

<sub>1m 27s</sub>

### Copilot

Created [README.md](README.md) covering project features, supported platforms, prerequisites, local setup, SSH requirements, development commands, packaging, project structure, and licensing.

It also notes the missing architecture documentation required by `npm run verify`.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
