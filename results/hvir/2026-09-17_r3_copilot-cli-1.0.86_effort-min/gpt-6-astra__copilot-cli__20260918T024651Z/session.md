# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `d653a254-7f8a-4c1c-a6ec-6de744599c65`  
> - **Started:** 9/17/2026, 10:47:08 PM  
> - **Duration:** 38s  
> - **Exported:** 9/17/2026, 10:47:47 PM  

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

### `bash`

**Inspect project files and worktree**

$ pwd && ls -la && git status --short

<details>
<summary>31 lines</summary>

```
/private/var/tmp/ws/6e0d1f9b/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 22:47 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:46 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:47 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:46 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:46 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 22:46 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 22:46 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 22:46 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:46 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 22:46 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 22:46 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 22:46 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 22:46 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 22:46 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 22:47 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 22:46 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 17 22:46 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:46 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 22:46 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 22:46 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 22:46 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 22:46 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 22:46 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 22:46 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 22:46 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 22:46 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 22:46 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 22:46 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/package.json.**

/private/var/tmp/ws/6e0d1f9b/hvir/package.json

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

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml.**

/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml

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

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/src.**

/private/var/tmp/ws/6e0d1f9b/hvir/src

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

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/.github.**

/private/var/tmp/ws/6e0d1f9b/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/LICENSE.**

/private/var/tmp/ws/6e0d1f9b/hvir/LICENSE

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

<sub>7s</sub>

### search_code_subagent (Completed)

### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/6e0db/hvir/README.md",
  "startLine": 1,
  "endLine": 400
}
```

</details>

```
Error: File path cannot traverse outside the working directory
```


### `file_search`

****/README.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README.md"
}
```

</details>

```
No files found matching pattern: **/README.md
```


### `grep_search`

**hvir|Home|Vir**

<details>
<summary>Arguments</summary>

```json
{
  "query": "hvir|Home|Vir",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
3736 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/package.json" line=2>
    "name": "@hvir/rename-noreplace",
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/package.json" line=5>
    "description": "Private hvir Node-API binding for atomic no-replace rename",
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/vitest.config.ts" line=7>
    environment: 'node',
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=4>
    * Modified for hvir to accept separate source and destination parent fds.
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=24>
    #define HVIR_MAX_BASENAME_BYTES 255
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=26>
    static napi_value hvir_metadata(napi_env env, napi_callback_info info) {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=31>
    "hvir.rename-noreplace.v1",
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=40>
    static int hvir_read_basename(napi_env env, napi_value value, char **output) {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=44>
    || length > HVIR_MAX_BASENAME_BYTES) {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=63>
    static napi_value hvir_rename_no_replace(napi_env env, napi_callback_info info) {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=84>
    if (error == 0) error = hvir_read_basename(env, argv[1], &source);
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=92>
    if (error == 0) error = hvir_read_basename(env, argv[3], &destination);
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=128>
    static napi_value hvir_initialize(napi_env env, napi_value exports) {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=130>
    { "metadata", NULL, hvir_metadata, NULL, NULL, NULL, napi_default, NULL },
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=134>
    hvir_rename_no_replace,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/rename_noreplace.c" line=153>
    NAPI_MODULE(NODE_GYP_MODULE_NAME, hvir_initialize)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml" line=1>
    appId: dev.hvir.app
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml" line=2>
    productName: hvir
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml" line=9>
    - '!node_modules/@hvir/rename-noreplace/**'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml" line=10>
    - node_modules/@hvir/rename-noreplace/index.js
</match>
```
````

</details>


### `file_search`

****/package.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/package.json"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/6e0d1f9b/hvir/package.json
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/project-management/package.json
  /private/var/tmp/ws/6e0d1f9b/hvir/packages/rename-noreplace/package.json
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
  /private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml
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
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


### `file_search`

****/src/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/index.html
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/file-manager-reveal.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-external-file-copy.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-project-file-operation.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-file-create-actions.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/FileTree.tsx
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-external-file-actions.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/file-name.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/DirectoryTree.tsx
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/git-ignore-refresh.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/project-file-entry-name.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/file-action-menu.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-path-copy-action.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/project-entry-drag.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/file-operation-feedback.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/FileDeletionDialog.tsx
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-file-organization-actions.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/git-status-decoration.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/tree/use-file-manager-reveal.ts
```

</details>


### `grep_search`

**first-run|first run|on-first-run|initial-setup**

<details>
<summary>Arguments</summary>

```json
{
  "query": "first-run|first run|on-first-run|initial-setup",
  "isRegexp": true
}
```

</details>

<details>
<summary>6 lines</summary>

````
1 matches
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/project-registry.test.ts" line=86>
    it('cancels first-run selection without inventing a cwd project', async () => {
</match>
```
````

</details>


### `grep_search`

**supported.*platform|platform.*support|macOS|Windows|Linux**

<details>
<summary>Arguments</summary>

```json
{
  "query": "supported.*platform|platform.*support|macOS|Windows|Linux",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
806 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=78>
    (state) => rendererEvents.toWindows('workbench-health:state', state),
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=150>
    const emit = rendererEvents.toWindows
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=299>
    !runtime.isShuttingDown && BrowserWindow.getAllWindows().length > 0,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=344>
    if (process.platform !== 'darwin' && process.platform !== 'linux') return false
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=421>
    if (!projectRegistry || BrowserWindow.getAllWindows().length > 0) return
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/project-host/local-host.ts" line=944>
    if (process.platform !== 'darwin' && process.platform !== 'linux') {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=75>
    if (value === 'darwin') return 'macos'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=76>
    if (value === 'linux') return 'linux'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=77>
    if (value === 'win32') return 'windows'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/electron-diagnostic-report-actions.ts" line=134>
    const window = BrowserWindow.getAllWindows().find(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/window/electron-window-manager.ts" line=398>
    BrowserWindow.getAllWindows().length === 0 &&
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=25>
    const MACOS_LOGIN_SHELL = '/bin/zsh'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=26>
    const MACOS_LOGIN_SHELL_OUTPUT =
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=45>
    windowCount: BrowserWindow.getAllWindows().length,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=70>
    windowCount: BrowserWindow.getAllWindows().length,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=79>
    assertNoWindows('before native PTY launch')
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=194>
    ? await runMacosLoginShellSmoke(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=201>
    assertNoWindows('after native PTY exit')
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=222>
    windowCount: BrowserWindow.getAllWindows().length,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=241>
    async function runMacosLoginShellSmoke(
</match>
```
````

</details>


### `grep_search`

**development.*prerequisite|dev.*requirement|install.*prereq**

<details>
<summary>Arguments</summary>

```json
{
  "query": "development.*prerequisite|dev.*requirement|install.*prereq",
  "isRegexp": true
}
```

</details>

```
No matches found for query: development.*prerequisite|dev.*requirement|install.*prereq
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/6e0d1f9b/hvir/package.json",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/6e0d1f9b/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>74 lines</summary>

````
File: `/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml`. Lines 1 to 72 (72 lines total): 
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
  "filePath": "/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>19 lines</summary>

````
File: `/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.ssh-acceptance.yml`. Lines 1 to 17 (17 lines total): 
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
  "filePath": "/private/var/tmp/ws/6e0d1f9b/hvir/scripts/project-management/package.json",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>7 lines</summary>

````
File: `/private/var/tmp/ws/6e0d1f9b/hvir/scripts/project-management/package.json`. Lines 1 to 5 (5 lines total): 
```
{
  "private": true,
  "type": "module"
}

```
````

</details>


### `grep_search`

**first-run|initial-setup|on-first-run|setup-project**

<details>
<summary>Arguments</summary>

```json
{
  "query": "first-run|initial-setup|on-first-run|setup-project",
  "isRegexp": true
}
```

</details>

<details>
<summary>6 lines</summary>

````
1 matches
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/project-registry.test.ts" line=86>
    it('cancels first-run selection without inventing a cwd project', async () => {
</match>
```
````

</details>


### `grep_search`

**supported.*platform|platform.*support|macOS|Windows|Linux**

<details>
<summary>Arguments</summary>

```json
{
  "query": "supported.*platform|platform.*support|macOS|Windows|Linux",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
806 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=78>
    (state) => rendererEvents.toWindows('workbench-health:state', state),
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=150>
    const emit = rendererEvents.toWindows
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=299>
    !runtime.isShuttingDown && BrowserWindow.getAllWindows().length > 0,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=344>
    if (process.platform !== 'darwin' && process.platform !== 'linux') return false
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=421>
    if (!projectRegistry || BrowserWindow.getAllWindows().length > 0) return
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=75>
    if (value === 'darwin') return 'macos'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=76>
    if (value === 'linux') return 'linux'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=77>
    if (value === 'win32') return 'windows'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/diagnostics/electron-diagnostic-report-actions.ts" line=134>
    const window = BrowserWindow.getAllWindows().find(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=25>
    const MACOS_LOGIN_SHELL = '/bin/zsh'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=26>
    const MACOS_LOGIN_SHELL_OUTPUT =
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=45>
    windowCount: BrowserWindow.getAllWindows().length,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=70>
    windowCount: BrowserWindow.getAllWindows().length,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=79>
    assertNoWindows('before native PTY launch')
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=194>
    ? await runMacosLoginShellSmoke(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=201>
    assertNoWindows('after native PTY exit')
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=222>
    windowCount: BrowserWindow.getAllWindows().length,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=241>
    async function runMacosLoginShellSmoke(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=268>
    defaultShell: MACOS_LOGIN_SHELL,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/native-pty.ts" line=290>
    expected: MACOS_LOGIN_SHELL_OUTPUT,
</match>
```
````

</details>


### `grep_search`

**development.*prerequisite|dev.*requirement|install.*prereq|prerequisites**

<details>
<summary>Arguments</summary>

```json
{
  "query": "development.*prerequisite|dev.*requirement|install.*prereq|prerequisites",
  "isRegexp": true
}
```

</details>

<details>
<summary>36 lines</summary>

````
11 matches
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=4>
    evaluateCiAttemptPrerequisites,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=50>
    expect(evaluateCiAttemptPrerequisites(successfulJobs())).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=54>
    expect(evaluateCiAttemptPrerequisites(successfulJobs('version-only'))).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=62>
    expect(evaluateCiAttemptPrerequisites(partial)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=69>
    expect(evaluateCiAttemptPrerequisites(duplicate)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=81>
    expect(evaluateCiAttemptPrerequisites(jobs)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=137>
    expect(evaluateCiAttemptPrerequisites(jobs)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts" line=80>
    export function evaluateCiAttemptPrerequisites(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts" line=107>
    const prerequisiteDecision = evaluateCiAttemptPrerequisites(jobs)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts" line=160>
    const decision = evaluateCiAttemptPrerequisites(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-smoke-interruption.mts" line=236>
    // The renderer is acquired after its IPC/watch prerequisites. Destruction
</match>
```
````

</details>


### `file_search`

****/README.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README.*"
}
```

</details>

```
No files found matching pattern: **/README.*
```


### `grep_search`

**first-run|initial-setup|on-first-run|setup-project|project registry**

<details>
<summary>Arguments</summary>

```json
{
  "query": "first-run|initial-setup|on-first-run|setup-project|project registry",
  "isRegexp": true
}
```

</details>

<details>
<summary>15 lines</summary>

````
4 matches
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=187>
    projectRegistry = runtime.own('project registry', registry, (item) => item.dispose())
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/project-registry.ts" line=150>
    if (projects.length >= MAX_PROJECTS) throw new Error('Project registry is full')
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/project-registry.ts" line=267>
    throw new Error('Project registry is full')
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/project-registry.test.ts" line=86>
    it('cancels first-run selection without inventing a cwd project', async () => {
</match>
```
````

</details>


### `grep_search`

**user-facing|user interface|UI|renderer|electron**

<details>
<summary>Arguments</summary>

```json
{
  "query": "user-facing|user interface|UI|renderer|electron",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5064 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=2>
    * Preload bridge — the ONLY module permitted to touch `ipcRenderer` (enforced
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=4>
    * the shared IPC contract. The renderer never sees `ipcRenderer` and can only
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=13>
    RENDERER_INVOKE_CHANNELS,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=15>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=19>
    type RendererIpcInvokeChannel,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=25>
    import { RendererDiagnosticsAdapter } from './renderer-diagnostics'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=28>
    const rendererDiagnostics = new RendererDiagnosticsAdapter({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=29>
    send: (batch) => ipcRenderer.send('diagnostics:render-containment', batch),
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=35>
    const signalRendererReady = (): void => {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=38>
    ipcRenderer.send('app:renderer-ready', { ownerGeneration: readyGeneration })
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=41>
    ipcRenderer.on('diagnostics:session', (_event, session: unknown) => {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=42>
    rendererDiagnostics.activate(session)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=43>
    if (isRendererDiagnosticSession(session)) {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=45>
    signalRendererReady()
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=50>
    rendererReady: () => {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=52>
    signalRendererReady()
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=61>
    rendererDiagnostics.recordRenderContainment(occurrenceId),
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=64>
    acquireDropped: (files) => {
</match>
```
````

</details>


### `grep_search`

**development prerequisite|dev prerequisite|install prerequisite|prerequisites**

<details>
<summary>Arguments</summary>

```json
{
  "query": "development prerequisite|dev prerequisite|install prerequisite|prerequisites",
  "isRegexp": true
}
```

</details>

<details>
<summary>36 lines</summary>

````
11 matches
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts" line=80>
    export function evaluateCiAttemptPrerequisites(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts" line=107>
    const prerequisiteDecision = evaluateCiAttemptPrerequisites(jobs)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts" line=160>
    const decision = evaluateCiAttemptPrerequisites(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-smoke-interruption.mts" line=236>
    // The renderer is acquired after its IPC/watch prerequisites. Destruction
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=4>
    evaluateCiAttemptPrerequisites,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=50>
    expect(evaluateCiAttemptPrerequisites(successfulJobs())).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=54>
    expect(evaluateCiAttemptPrerequisites(successfulJobs('version-only'))).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=62>
    expect(evaluateCiAttemptPrerequisites(partial)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=69>
    expect(evaluateCiAttemptPrerequisites(duplicate)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=81>
    expect(evaluateCiAttemptPrerequisites(jobs)).toEqual({
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts" line=137>
    expect(evaluateCiAttemptPrerequisites(jobs)).toEqual({
</match>
```
````

</details>


### `grep_search`

**release installation|install release|CLI|command line|hvir-command**

<details>
<summary>Arguments</summary>

```json
{
  "query": "release installation|install release|CLI|command line|hvir-command",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
2942 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=8>
    import { createWorkerClient, workerPath, type WorkerClient } from './worker-host'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=92>
    let echoWorker: WorkerClient<EchoWorkerProtocol> | null = null
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=93>
    let gitWorker: WorkerClient<GitWorkerProtocol> | null = null
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=212>
    createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=221>
    createWorkerClient<GitWorkerProtocol>(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=27>
    import type { WorkerClient } from '../worker-host'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=46>
    /** The application host's clipboard, narrowed to the one write hvir performs. */
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=47>
    export interface SystemClipboardPort {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=52>
    readonly echoWorker: WorkerClient<EchoWorkerProtocol>
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=53>
    readonly gitWorker: WorkerClient<GitWorkerProtocol>
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=58>
    | 'acquireClipboard'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=166>
    /** Defaults to the Electron clipboard; scenarios override it to stay inert. */
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/ipc/deps.ts" line=167>
    readonly systemClipboard?: SystemClipboardPort
</match>
```
````

</details>


### `file_search`

****/*smoke*release*.sh**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*smoke*release*.sh"
}
```

</details>

```
No files found matching pattern: **/*smoke*release*.sh
```


### `file_search`

****/*native-release***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*native-release*"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/6e0d1f9b/hvir/test/native-release-assembly.test.ts
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/6e0d1f9b/hvir/scripts/assemble-native-release.d.mts
```


### `file_search`

****/*hvir-command***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*hvir-command*"
}
```

</details>

```
No files found matching pattern: **/*hvir-command*
```


### `grep_search`

**workbench-health:state|projectRegistry|first-run selection**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workbench-health:state|projectRegistry|first-run selection",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
76 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=12>
    import { ProjectRegistry } from './project-registry'
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=78>
    (state) => rendererEvents.toWindows('workbench-health:state', state),
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=94>
    let projectRegistry: ProjectRegistry | null = null
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=170>
    const registry = await ProjectRegistry.create(
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=187>
    projectRegistry = runtime.own('project registry', registry, (item) => item.dispose())
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=216>
    authority: projectRegistry,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=251>
    projectRegistry,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=282>
    const removal = new WorkspaceRemovalCoordinator(projectRegistry, workspaceCleanup)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=286>
    registry: projectRegistry,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=305>
    registry: projectRegistry,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=314>
    registry: projectRegistry,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=333>
    projects: projectRegistry,
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=412>
    if (projectRegistry.active.host.connectionState === 'connected') {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=414>
    .replaceWatch(projectRegistry.active)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=415>
    .then(() => workspaceCoordinator?.refresh(projectRegistry!.active.projectId))
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=421>
    if (!projectRegistry || BrowserWindow.getAllWindows().length > 0) return
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=422>
    if (projectRegistry.active.host.connectionState === 'connected') {
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=424>
    ?.replaceWatch(projectRegistry.active)
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts" line=493>
    projectRegistry
</match>
<match path="/private/var/tmp/ws/6e0d1f9b/hvir/src/main/smoke/renderer-recovery-delivery.ts" line=40>
    window.hvir.on('workbench-health:state', ({ items }) => {
</match>
```
````

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/6e0d1f9b/hvir/package.json:1-128
/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.yml:1-72
/private/var/tmp/ws/6e0d1f9b/hvir/electron-builder.ssh-acceptance.yml:1-17
/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts:1-210
/private/var/tmp/ws/6e0d1f9b/hvir/src/main/index.ts:211-430
/private/var/tmp/ws/6e0d1f9b/hvir/src/main/project-registry.ts:140-280
/private/var/tmp/ws/6e0d1f9b/hvir/test/project-registry.test.ts:80-140
/private/var/tmp/ws/6e0d1f9b/hvir/scripts/ci-attempt-evidence.mts:80-210
/private/var/tmp/ws/6e0d1f9b/hvir/test/ci-attempt-evidence.test.ts:1-160
/private/var/tmp/ws/6e0d1f9b/hvir/scripts/assemble-native-release.mjs:1-260
/private/var/tmp/ws/6e0d1f9b/hvir/scripts/render-native-installer.mjs:1-260
/private/var/tmp/ws/6e0d1f9b/hvir/scripts/run-smoke-scenarios.mts:1-260
\</final_answer>


---

<sub>14s</sub>

### `glob`

**{src/renderer/src/**,src/renderer/**,.github/workflows/*,build/native/*}**

"{src/renderer/src/**,src/renderer/**,.github/workflows/*,build/native/*}"

<details>
<summary>366 matches</summary>

```
[glob: 361 path(s) under .; grouped by directory]

./src/ (349 path(s))
  renderer/index.html
  renderer/src/App.tsx
  renderer/src/ErrorBoundary.tsx
  renderer/src/context-menu/viewport-context-menu.ts
  renderer/src/dashboards/ElectronWebPaneSurface.tsx
  renderer/src/dashboards/WebPane.tsx
  renderer/src/dashboards/WebPaneStack.tsx
  renderer/src/dashboards/use-web-pane-workspace.ts
  renderer/src/dashboards/web-pane-diagnostics.ts
  renderer/src/dashboards/web-pane-surface.ts
  renderer/src/dashboards/web-pane-url.ts
  renderer/src/dashboards/web-pane-workspace-policy.ts
  renderer/src/development/development-performance-fixture.tsx
  renderer/src/development/development-performance-pump.tsx
  renderer/src/development/development-renderer-instrumentation.tsx
  renderer/src/development/performance-measure-budget.ts
  renderer/src/diagnostics/DiagnosticReportDialog.tsx
  renderer/src/diagnostics/owned-capture-masks.ts
  renderer/src/document-review/DocumentReviewControls.tsx
  renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
  renderer/src/document-review/DocumentReviewInlineSurface.tsx
  renderer/src/document-review/document-review-anchor.ts
  renderer/src/document-review/document-review-batches.ts
  renderer/src/document-review/document-review-capture.ts
  renderer/src/document-review/document-review-delivery-client.ts
  renderer/src/document-review/document-review-delivery-feedback.ts
  renderer/src/document-review/document-review-eligibility.ts
  renderer/src/document-review/document-review-inline.ts
  renderer/src/document-review/document-review-lifecycle.ts
  renderer/src/document-review/document-review-model.ts
  renderer/src/document-review/document-review-rendered.ts
  renderer/src/document-review/document-review-selectors.ts
  renderer/src/document-review/document-review-source.ts
  renderer/src/document-review/document-review-types.ts
  renderer/src/document-review/document-review-validation.ts
  renderer/src/document-review/document-review-workspace-controller.ts
  renderer/src/document-review/document-review-workspace.ts
  renderer/src/document-review/index.ts
  renderer/src/document-review/use-document-review-delivery.ts
  renderer/src/document-review/use-document-review-interaction.ts
  renderer/src/document-review/use-document-review-workspace.ts
  renderer/src/git/GitBranchControls.tsx
  renderer/src/git/GitChangesView.tsx
  renderer/src/git/GitGraphLanes.tsx
  renderer/src/git/GitGraphView.tsx
  renderer/src/git/GitHistoryView.tsx
  renderer/src/git/GitPanel.tsx
  renderer/src/git/commit-detail-client.ts
  renderer/src/git/commit-file-tree.ts
  renderer/src/git/commit-message.ts
  renderer/src/git/git-capability.ts
  renderer/src/git/git-graph-lane-metrics.ts
  renderer/src/git/git-graph-layout.ts
  renderer/src/git/git-rail-model.ts
  renderer/src/git/git-sync-coordinator.ts
  renderer/src/git/git-sync-status.ts
  renderer/src/git/use-git-commit-details.ts
  renderer/src/git/use-git-rail-controller.ts
  renderer/src/git/use-git-workspace.ts
  renderer/src/git/virtual-range.ts
  renderer/src/harness/ProviderContextMeter.tsx
  renderer/src/health/WorkbenchHealthControl.tsx
  renderer/src/health/use-diagnostic-evidence.ts
  renderer/src/health/use-workbench-health.ts
  renderer/src/hvir.d.ts
  renderer/src/layout/PaneResizer.tsx
  renderer/src/layout/split-layout-policy.ts
  renderer/src/layout/workspace-layout-persistence.ts
  renderer/src/main.tsx
  renderer/src/path-copy/PathCopyMenu.tsx
  renderer/src/path-copy/path-copy.ts
  renderer/src/path-copy/use-path-copy-menu.ts
  renderer/src/scrollbars/scrollbar-presentation.ts
  renderer/src/sessions/SessionsApplicationDestination.tsx
  renderer/src/sessions/SessionsCollectionToolbar.tsx
  renderer/src/sessions/SessionsOverview.tsx
  renderer/src/sessions/SessionsOverviewCard.tsx
  renderer/src/sessions/SessionsOverviewNotice.tsx
  renderer/src/sessions/SessionsTerminalDetail.tsx
  renderer/src/sessions/sessions-overview-model.ts
  renderer/src/sessions/sessions-projection-coordinator.ts
  renderer/src/sessions/sessions-renderer-observation.ts
  renderer/src/sessions/sessions-terminal-detail-controller.ts
  renderer/src/sessions/sessions-terminal-overlay.ts
  renderer/src/sessions/sessions-terminal-surface.ts
  renderer/src/sessions/use-sessions-foreground.ts
  renderer/src/sessions/use-sessions-terminal-detail.ts
  renderer/src/settings/ComposerSubmitConsentDialog.tsx
  renderer/src/settings/HarnessProfileAdvancedFields.tsx
  renderer/src/settings/HarnessProfileCommandFields.tsx
  renderer/src/settings/HarnessProfileDialogs.tsx
  renderer/src/settings/HarnessProfileEditor.tsx
  renderer/src/settings/HarnessProfileOverlays.tsx
  renderer/src/settings/HarnessProfilesSettings.tsx
  renderer/src/settings/SettingsActiveSection.tsx
  renderer/src/settings/SettingsDialog.tsx
  renderer/src/settings/SettingsSection.tsx
  renderer/src/settings/SettingsSectionNavigation.tsx
  renderer/src/settings/TerminalThemeGallery.tsx
  renderer/src/settings/harness-argument-editor.ts
  renderer/src/settings/harness-profile-draft.ts
  renderer/src/settings/harness-profile-editor-policy.ts
  renderer/src/settings/harness-profile-request-policy.ts
  renderer/src/settings/keybindings.ts
  renderer/src/settings/sections/AppearanceSettings.tsx
  renderer/src/settings/sections/GitSettings.tsx
  renderer/src/settings/sections/KeybindingsSettings.tsx
  renderer/src/settings/sections/TerminalSettings.tsx
  renderer/src/settings/sections/TypographyFontField.tsx
  renderer/src/settings/settings-draft.ts
  renderer/src/settings/settings-model.ts
  renderer/src/settings/settings-navigation.ts
  renderer/src/settings/settings.ts
  renderer/src/settings/typography-presentation.ts
  renderer/src/settings/typography-settings.ts
  renderer/src/settings/use-add-harness-dialog.ts
  renderer/src/settings/use-harness-binding-authorization.ts
  renderer/src/settings/use-harness-folder-picker.ts
  renderer/src/settings/use-harness-profile-editor.ts
  renderer/src/settings/use-harness-profile-load.ts
  renderer/src/settings/use-settings-controller.ts
  renderer/src/styles.css
  renderer/src/styles/base.css
  renderer/src/styles/composer-submit.css
  renderer/src/styles/context-menu.css
  renderer/src/styles/diagnostic-report.css
  renderer/src/styles/dialogs.css
  renderer/src/styles/document-review.css
  renderer/src/styles/file-operations.css
  renderer/src/styles/git-controls.css
  renderer/src/styles/git-graph.css
  renderer/src/styles/git-history.css
  renderer/src/styles/git-inspector.css
  renderer/src/styles/harness-settings.css
  renderer/src/styles/health.css
  renderer/src/styles/path-copy.css
  renderer/src/styles/primitives.css
  renderer/src/styles/projects.css
  renderer/src/styles/provider-context.css
  renderer/src/styles/scrollbars.css
  renderer/src/styles/sessions-collection.css
  renderer/src/styles/sessions-overview.css
  renderer/src/styles/sessions-terminal-detail.css
  renderer/src/styles/settings.css
  renderer/src/styles/shell.css
  renderer/src/styles/terminal-context-menu.css
  renderer/src/styles/terminal-list.css
  renderer/src/styles/terminal-move.css
  renderer/src/styles/terminal-pane.css
  renderer/src/styles/terminal-search.css
  renderer/src/styles/terminal-shell.css
  renderer/src/styles/terminal-theme-gallery.css
  renderer/src/styles/tree.css
  renderer/src/styles/viewer-content.css
  renderer/src/styles/viewer-find.css
  renderer/src/styles/viewer-tabs.css
  renderer/src/styles/viewer-workload.css
  renderer/src/styles/web-pane.css
  renderer/src/styles/workspace-catalog.css
  renderer/src/styles/workspace-state.css
  renderer/src/terminal/TerminalContextMenu.tsx
  renderer/src/terminal/TerminalContextMeter.tsx
  renderer/src/terminal/TerminalDeck.tsx
  renderer/src/terminal/TerminalMoveDialog.tsx
  renderer/src/terminal/TerminalRail.tsx
  renderer/src/terminal/TerminalRailCompact.tsx
  renderer/src/terminal/TerminalRecoveryDialog.tsx
  renderer/src/terminal/TerminalSearch.tsx
  renderer/src/terminal/TerminalSessionRuntimes.tsx
  renderer/src/terminal/TerminalView.tsx
  renderer/src/terminal/TerminalWorkspace.tsx
  renderer/src/terminal/TerminalWorkspaceCollection.tsx
  renderer/src/terminal/TerminalWorkspaceControls.tsx
  renderer/src/terminal/TerminalWorkspaceDialogs.tsx
  renderer/src/terminal/effect-generation.ts
  renderer/src/terminal/generated-terminal-theme-catalog.ts
  renderer/src/terminal/ghostty-terminal-events.ts
  renderer/src/terminal/ghostty-terminal-file-paste.ts
  renderer/src/terminal/ghostty-terminal-fit.ts
  renderer/src/terminal/ghostty-terminal-keyboard.ts
  renderer/src/terminal/ghostty-terminal-pane.ts
  renderer/src/terminal/harness-launch-menu.ts
  renderer/src/terminal/terminal-attention.ts
  renderer/src/terminal/terminal-clipboard-osc.ts
  renderer/src/terminal/terminal-clipboard-write.ts
  renderer/src/terminal/terminal-clipboard.ts
  renderer/src/terminal/terminal-color-schema.mts
  renderer/src/terminal/terminal-context-menu-position.ts
  renderer/src/terminal/terminal-context-menu-target.ts
  renderer/src/terminal/terminal-event-router.ts
  renderer/src/terminal/terminal-file-link.ts
  renderer/src/terminal/terminal-fit.ts
  renderer/src/terminal/terminal-fork-policy.ts
  renderer/src/terminal/terminal-palette.ts
  renderer/src/terminal/terminal-pane-event-coordinator.ts
  renderer/src/terminal/terminal-pane-factory.ts
  renderer/src/terminal/terminal-pane.ts
  renderer/src/terminal/terminal-probe-policy.ts
  renderer/src/terminal/terminal-profile-recovery.ts
  renderer/src/terminal/terminal-recovery-planner.ts
  renderer/src/terminal/terminal-runtime-interactions.ts
  renderer/src/terminal/terminal-runtime-launch.ts
  renderer/src/terminal/terminal-runtime-live-settings.ts
  renderer/src/terminal/terminal-runtime-options.ts
  renderer/src/terminal/terminal-runtime-presentation.ts
  renderer/src/terminal/terminal-runtime-registry.ts
  renderer/src/terminal/terminal-runtime.ts
  renderer/src/terminal/terminal-search-controller.ts
  renderer/src/terminal/terminal-semantic-regions.ts
  renderer/src/terminal/terminal-sessions-surface-owner.ts
  renderer/src/terminal/terminal-split-persistence.ts
  renderer/src/terminal/terminal-surface-attachment.ts
  renderer/src/terminal/terminal-theme-catalog.ts
  renderer/src/terminal/terminal-wheel.ts
  renderer/src/terminal/terminal-workspace-model.ts
  renderer/src/terminal/terminal-workspace-runtime-owner.ts
  renderer/src/terminal/use-new-worktree-move-badge.ts
  renderer/src/terminal/use-terminal-attention-controller.ts
  renderer/src/terminal/use-terminal-attention.ts
  renderer/src/terminal/use-terminal-context-menu.ts
  renderer/src/terminal/use-terminal-launch-menu-layout.ts
  renderer/src/terminal/use-terminal-pane-controller.ts
  renderer/src/terminal/use-terminal-persistence.ts
  renderer/src/terminal/use-terminal-profiles.ts
  renderer/src/terminal/use-terminal-recovery.ts
  renderer/src/terminal/use-terminal-session-commands.ts
  renderer/src/terminal/use-terminal-workspace-move.ts
  renderer/src/terminal/use-terminal-workspace-runtime.ts
  renderer/src/terminal/use-terminal-workspace-transfer.ts
  renderer/src/theme-model.ts
  renderer/src/theme.ts
  renderer/src/themes.css
  renderer/src/tree/DirectoryTree.tsx
  renderer/src/tree/FileCreateOverlays.tsx
  renderer/src/tree/FileDeletionDialog.tsx
  renderer/src/tree/FileExternalMoveDialog.tsx
  renderer/src/tree/FileOrganizationDialog.tsx
  renderer/src/tree/FileTree.tsx
  renderer/src/tree/FilenameSearch.tsx
  renderer/src/tree/directory-entry-sort.ts
  renderer/src/tree/file-action-destination.ts
  renderer/src/tree/file-action-menu.ts
  renderer/src/tree/file-manager-reveal.ts
  renderer/src/tree/file-name.ts
  renderer/src/tree/file-operation-feedback.ts
  renderer/src/tree/git-ignore-refresh.ts
  renderer/src/tree/git-status-decoration.ts
  renderer/src/tree/project-entry-drag.ts
  renderer/src/tree/project-file-entry-name.ts
  renderer/src/tree/project-file-owner-key.ts
  renderer/src/tree/use-external-file-actions.ts
  renderer/src/tree/use-external-file-copy.ts
  renderer/src/tree/use-external-file-move.ts
  renderer/src/tree/use-file-create-actions.ts
  renderer/src/tree/use-file-deletion-actions.ts
  renderer/src/tree/use-file-manager-reveal.ts
  renderer/src/tree/use-file-organization-actions.ts
  renderer/src/tree/use-path-copy-action.ts
  renderer/src/tree/use-project-file-operation.ts
  renderer/src/viewer/DiffView.tsx
  renderer/src/viewer/FileViewer.tsx
  renderer/src/viewer/FindControl.tsx
  renderer/src/viewer/GoToLineControl.tsx
  renderer/src/viewer/LargeFileView.tsx
  renderer/src/viewer/MarkdownFragment.tsx
  renderer/src/viewer/RenderedView.tsx
  renderer/src/viewer/RepositoryImageView.tsx
  renderer/src/viewer/SourceView.tsx
  renderer/src/viewer/TabStrip.tsx
  renderer/src/viewer/code-scroll-anchor.ts
  renderer/src/viewer/codemirror-find-target.ts
  renderer/src/viewer/csv-parser.ts
  renderer/src/viewer/csv-protocol.ts
  renderer/src/viewer/csv.worker.ts
  renderer/src/viewer/diff-policy.ts
  renderer/src/viewer/dom-find-target.ts
  renderer/src/viewer/external-document-context.ts
  renderer/src/viewer/external-document-tabs.ts
  renderer/src/viewer/highlight-protocol.ts
  renderer/src/viewer/highlight-request.ts
  renderer/src/viewer/highlight-worker.ts
  renderer/src/viewer/highlight.worker.ts
  renderer/src/viewer/json-protocol.ts
  renderer/src/viewer/json.worker.ts
  renderer/src/viewer/markdown-client.ts
  renderer/src/viewer/markdown-extensions.ts
  renderer/src/viewer/markdown-renderer.ts
  renderer/src/viewer/markdown-repository-images.ts
  renderer/src/viewer/markdown.worker.ts
  renderer/src/viewer/render-protocol.ts
  renderer/src/viewer/rendered-link-handler.ts
  renderer/src/viewer/rendered-position.ts
  renderer/src/viewer/retained-viewer-workspace-cache.ts
  renderer/src/viewer/shiki-grammar-registry.ts
  renderer/src/viewer/shiki-language-catalog.ts
  renderer/src/viewer/shiki-language-names.ts
  renderer/src/viewer/source-blame-gutter.ts
  renderer/src/viewer/source-coordinate.ts
  renderer/src/viewer/source-highlighting.ts
  renderer/src/viewer/structured-data.ts
  renderer/src/viewer/tab-state.ts
  renderer/src/viewer/use-diff-inputs.ts
  renderer/src/viewer/use-source-blame.ts
  renderer/src/viewer/use-viewer-path-lifecycle.ts
  renderer/src/viewer/use-viewer-workspace.ts
  renderer/src/viewer/viewer-byte-format.ts
  renderer/src/viewer/viewer-command-targets.ts
  renderer/src/viewer/viewer-document-refresh.ts
  renderer/src/viewer/viewer-find.ts
  renderer/src/viewer/viewer-path-rebind.ts
  renderer/src/viewer/viewer-path-removal.ts
  renderer/src/viewer/viewer-position.ts
  renderer/src/viewer/viewer-read-policy.ts
  renderer/src/viewer/viewer-workload-policy.ts
  renderer/src/viewer/viewer-workspace-model.ts
  renderer/src/viewer/viewer-workspace-persistence.ts
  renderer/src/viewer/viewer-workspace-selectors.ts
  renderer/src/viewer/viewer-workspace-state.ts
  renderer/src/workbench/ConfirmationDialog.tsx
  renderer/src/workbench/TerminalLayoutControls.tsx
  renderer/src/workbench/active-terminal-focus.ts
  renderer/src/workbench/middle-click-close.ts
  renderer/src/workbench/modal-keyboard-model.ts
  renderer/src/workbench/use-modal-keyboard.ts
  renderer/src/workbench/use-renderer-ready.ts
  renderer/src/workbench/use-terminal-path-activation.ts
  renderer/src/workbench/use-workbench-commands.ts
  renderer/src/workbench/use-workbench-layout.ts
  renderer/src/workbench/use-workbench-overlays.ts
  renderer/src/workbench/workbench-command-router.ts
  renderer/src/workbench/workbench-layout-policy.ts
  renderer/src/workbench/workbench-overlay-model.ts
  renderer/src/workbench/workspace-pane-state.ts
  renderer/src/workspaces/ConnectionStatus.tsx
  renderer/src/workspaces/MissingWorkspaceNotice.tsx
  renderer/src/workspaces/ProjectsBar.tsx
  renderer/src/workspaces/SessionDialog.tsx
  renderer/src/workspaces/SshPromptDialog.tsx
  renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
  renderer/src/workspaces/connection-status.ts
  renderer/src/workspaces/initial-host-connection.ts
  renderer/src/workspaces/project-folder-picker-client.ts
  renderer/src/workspaces/project-session-events.ts
  renderer/src/workspaces/project-session-model.ts
  renderer/src/workspaces/project-session.ts
  renderer/src/workspaces/project-state-delivery.ts
  renderer/src/workspaces/project-watch-interests.ts
  renderer/src/workspaces/workspace-attention.ts
  renderer/src/workspaces/workspace-session-actions.ts

./.github/ (11 path(s))
  workflows/ci.yml
  workflows/codeql.yml
  workflows/ghostty-web-update.yml
  workflows/lock-tracker-conversations.yml
  workflows/macos-package-release.yml
  workflows/project-kind.yml
  workflows/project-pr-planning.yml
  workflows/real-host-ssh.yml
  workflows/release-pr-merged.yml
  workflows/release.yml
  workflows/smoke-stress.yml

./build/ (1 path(s))
  native/hvir-command

[extensions: .ts=222, .tsx=85, .css=40, .yml=11, .html=1, [no extension]=1, .mts=1]
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-190)

<details>
<summary>179 lines</summary>

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
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/build/native/hvir-command.**

/private/var/tmp/ws/6e0d1f9b/hvir/build/native/hvir-command (lines 1-150)

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

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/6e0d1f9b/hvir/.github/workflows/ci.yml (lines 1-150)

<details>
<summary>127 lines</summary>

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
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/6e0d1f9b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-150)

<details>
<summary>147 lines</summary>

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
        .find((project) => project.id === closeWorkspaceRequest.projectId)
        ?.workspaces.find(
          (workspace) => workspace.id === closeWorkspaceRequest.workspaceId,
        )
    : undefined
  const pruneTargets =
    pruneProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const connectionProject =
    activeProject?.id === connectionMenu?.projectId ? activeProject : undefined
  useEffect(() => {
    setConnectionMenu((current) =>
      current && current.projectId !== state.activeProjectId ? undefined : current,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    setCatalogProjectId((current) =>
      current === state.activeProjectId ? current : undefined,
    )
    setCloseWorkspaceRequest((current) =>
      current?.projectId === state.activeProjectId ? current : undefined,
    )
  }, [state.activeProjectId])
  useEffect(() => {
```

</details>


---

<sub>35s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: /private/var/tmp/ws/6e0d1f9b/hvir/README.md\n+# hvir\n+\n+hvir is a desktop development workbench that brings terminals, project files, Git workflows, and web panes into one workspace. Built with Electron, React, and TypeScript, it supports local projects and remote projects over SSH.\n+\n+## Features\n+\n+- **Project and worktree management:** switch between projects and Git worktrees, with workspace-specific layouts.\n+- **Integrated terminals:** native PTY sessions rendered with Ghostty Web, split layouts, search, themes, and configurable harness launch profiles.\n+- **File browsing and review:** a file tree, syntax-highlighted source, diffs, rendered Markdown, images, and structured-data views.\n+- **Git tools:** inspect changes, branches, commit history, and the commit graph.\n+- **Remote workspaces:** connect to SSH hosts and browse their project folders.\n+- **Web panes and session overview:** keep web content alongside your work and inspect terminal sessions across workspaces.\n+\n+## Platforms\n+\n+The repository includes native packaging for:\n+\n+| Platform | Architecture | Package |\n+| --- | --- | --- |\n+| macOS | Apple Silicon (arm64) | `.pkg` |\n+| Linux | x64 and arm64 | `.deb` |\n+\n+Linux packages require glibc 2.35 or newer and the desktop libraries listed in [electron-builder.yml](electron-builder.yml). Windows packaging is not configured.\n+\n+The native packages install an `hvir` command. To open a local project after installation:\n+\n+```sh\n+hvir .\n+# Or specify a project directory:\n+hvir /path/to/project\n+```\n+\n+Within the app, use the project controls to select a host and open a folder, then switch between its workspaces, terminals, files, and Git views.\n+\n+## Development\n+\n+### Prerequisites\n+\n+- Node.js **24 or newer** and npm.\n+- Git.\n+- Python and a native C/C++ build toolchain for the Node native modules:\n+  - macOS: Xcode Command Line Tools.\n+  - Linux: a compiler, `make`, and the libraries needed to run Electron.\n+- A graphical desktop session to run the application. Headless Linux smoke tests use Xvfb.\n+\n+### Run locally\n+\n+From the repository root:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+Installation downloads Electron, builds the local `@hvir/rename-noreplace` addon, and rebuilds `node-pty` for Electron. Do not skip install scripts for a working desktop environment.\n+\n+If the terminal runtime check reports missing or incompatible native modules, rebuild them:\n+\n+```sh\n+npm run install:runtime\n+```\n+\n+### Common commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the development application |\n+| `npm run build` | Type-check and build into `out/` |\n+| `npm run preview` | Preview the built application |\n+| `npm run typecheck` | Check main-process and renderer TypeScript |\n+| `npm run lint` | Run ESLint |\n+| `npm run format:check` | Check formatting with Prettier |\n+| `npm test` | Run the Vitest suite |\n+| `npm run test:watch` | Run tests in watch mode |\n+| `npm run verify` | Run architecture and policy checks, lint, type checks, and tests |\n+| `npm run smoke` | Build and run Electron smoke scenarios |\n+\n+For headless Linux smoke testing, use `xvfb-run -a npm run smoke`. The full `verify` command also includes repository-policy checks; CI runs it with Git history and a repository token.\n+\n+### Build native packages\n+\n+Run the appropriate command on the target platform with a compatible native build environment:\n+\n+```sh\n+# Unpacked application\n+npm run build:dir\n+\n+# macOS Apple Silicon installer\n+npm run pack:mac:arm64\n+\n+# Linux Debian packages\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+Packaging writes artifacts to `dist/`. A separate `pack:mac:arm64:signed` script requires macOS code-signing credentials.\n+\n+## Project layout\n+\n+```text\n+src/main/       Electron main process and host integrations\n+src/preload/    Bridge between Electron and the renderer\n+src/renderer/   React interface, terminals, viewers, and workspace controls\n+src/shared/     Shared types and contracts\n+src/workers/    Background workers\n+packages/       Local native addon\n+scripts/        Development, verification, smoke, and release tooling\n+test/           Automated tests\n+build/          Packaging resources and native launcher\n+```\n+\n+See [package.json](package.json) for the complete command list and [.github/workflows](.github/workflows) for CI and release workflows.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). Third-party attribution is documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/6e0d1f9b/hvir/README.md
```


---

<sub>37s</sub>

### `bash`

**Format README and check change scope**

$ ./node_modules/.bin/prettier --write README.md && git diff --check && git status --short

```
?? README.md
<shellId: 1 completed with exit code 0>
```


---

<sub>38s</sub>

### Copilot

Created **README.md** covering project features, supported platforms, prerequisites, local setup, development commands, native packaging, project structure, and licensing.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
