# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6100320f-0a8c-4a5d-aff6-4b59d10eeade`  
> - **Started:** 10/1/2026, 12:47:43 AM  
> - **Duration:** 54s  
> - **Exported:** 10/1/2026, 12:48:37 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>5s</sub>

### `bash`

**Inspect repository files and working tree**

$ pwd && ls -la && git status --short

<details>
<summary>31 lines</summary>

```
/private/var/tmp/ws/b13d7186/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Oct  1 00:47 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:47 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:47 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:47 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:47 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Oct  1 00:47 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Oct  1 00:47 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Oct  1 00:47 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:47 build
-rw-r--r--@   1 air-jarmak  wheel     549 Oct  1 00:47 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Oct  1 00:47 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Oct  1 00:47 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Oct  1 00:47 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Oct  1 00:47 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Oct  1 00:47 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Oct  1 00:47 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Oct  1 00:47 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:47 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Oct  1 00:47 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Oct  1 00:47 src
-rw-r--r--@   1 air-jarmak  wheel     537 Oct  1 00:47 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Oct  1 00:47 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Oct  1 00:47 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Oct  1 00:47 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Oct  1 00:47 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Oct  1 00:47 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Oct  1 00:47 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Oct  1 00:47 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/b13d7186/hvir/package.json.**

/private/var/tmp/ws/b13d7186/hvir/package.json

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

<sub>12s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/b13d7186/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/b13d7186/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
  "filePath": "/private/var/tmp/ws/b13d7186/hvir/package.json",
  "startLine": 200,
  "endLine": 400
}
```

</details>

````
File: `/private/var/tmp/ws/b13d7186/hvir/package.json`. Lines 200 to 128 (128 lines total): 
```
```
````


### `grep_search`

**name|description|version|author|license**

<details>
<summary>Arguments</summary>

```json
{
  "query": "name|description|version|author|license",
  "isRegexp": true,
  "includePattern": "**/package.json"
}
```

</details>

<details>
<summary>57 lines</summary>

````
18 matches
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=2>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=3>
    "version": "0.2.3",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=4>
    "author": {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=5>
    "name": "hvir contributors"
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=7>
    "license": "MIT",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=12>
    "desktopName": "hvir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=16>
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=58>
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=59>
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=60>
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=125>
    "@hvir/rename-noreplace": "file:packages/rename-noreplace"
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=2>
    "name": "@hvir/rename-noreplace",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=3>
    "version": "0.1.0",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=5>
    "description": "Private hvir Node-API binding for atomic no-replace rename",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=6>
    "license": "MIT",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=10>
    "LICENSE",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=12>
    "rename_noreplace.c",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/packages/rename-noreplace/package.json" line=13>
    "build/Release/rename_noreplace.node"
</match>
```
````

</details>


### `file_search`

****/build/*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/build/*.yml"
}
```

</details>

```
No files found matching pattern: **/build/*.yml
```


### `file_search`

****/electron*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron*.yml"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/b13d7186/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/b13d7186/hvir/electron-builder.yml
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
  /private/var/tmp/ws/b13d7186/hvir/electron.vite.config.ts
```


### `file_search`

****/eslint.config.mjs**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/eslint.config.mjs"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs
```


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
  /private/var/tmp/ws/b13d7186/hvir/vitest.config.ts
```


### `grep_search`

**electron-builder|Electron|Vite|frontend|backend|API**

<details>
<summary>Arguments</summary>

```json
{
  "query": "electron-builder|Electron|Vite|frontend|backend|API",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1565 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=100>
    const listener = (_event: Electron.IpcRendererEvent, payload: unknown): void => {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/smoke-failure-artifact.mts" line=12>
    ELECTRON_SMOKE_SCENARIOS,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/smoke-failure-artifact.mts" line=13>
    type ElectronSmokeScenario,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/smoke-failure-artifact.mts" line=30>
    readonly scenario: ElectronSmokeScenario
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/smoke-failure-artifact.mts" line=102>
    readonly scenario: ElectronSmokeScenario
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/smoke-failure-artifact.mts" line=224>
    !ELECTRON_SMOKE_SCENARIOS.includes(artifact.scenario as never) ||
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.json" line=69>
    "owner": "document review Electron acceptance",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.json" line=77>
    "owner": "Electron smoke composition root",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.json" line=85>
    "owner": "project file operations Electron acceptance",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.json" line=93>
    "owner": "Sessions projection Electron acceptance",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/project-watch.ts" line=87>
    * one shallow backend; noisy Git metadata remains isolated in a second shallow
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/project-watch.ts" line=88>
    * backend so replacing tree interests does not interrupt repository updates.
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts" line=12>
    'Electron smoke (Linux)',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts" line=13>
    'Electron correctness (macOS arm64; temporary reduced gate)',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts" line=122>
    `https://api.github.com/repos/${repository}/actions/runs/${runId}/attempts/${runAttempt}/jobs`,
</match>
```
````

</details>


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
  /private/var/tmp/ws/b13d7186/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/b13d7186/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/b13d7186/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/b13d7186/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/b13d7186/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/b13d7186/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/b13d7186/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/b13d7186/hvir/scripts/ghostty-web-update/coordinator.mts
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
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/index.html
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/file-manager-reveal.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-external-file-copy.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-project-file-operation.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-file-create-actions.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/FileTree.tsx
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-external-file-actions.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/file-name.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/DirectoryTree.tsx
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/git-ignore-refresh.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/project-file-entry-name.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/file-action-menu.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-path-copy-action.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/project-entry-drag.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/file-operation-feedback.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/FileDeletionDialog.tsx
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-file-organization-actions.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/git-status-decoration.ts
  /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/tree/use-file-manager-reveal.ts
```

</details>


### `grep_search`

**README|root README|project purpose|user-facing features|application name**

<details>
<summary>Arguments</summary>

```json
{
  "query": "README|root README|project purpose|user-facing features|application name",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
42 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/test/release-pr-integrity.test.ts" line=235>
    { changedFiles: ['package.json', 'README.md'] },
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/check-adrs.mjs" line=26>
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/viewer-types.test.ts" line=7>
    ['README.md', 'markdown'],
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-store.test.ts" line=75>
    const existing = model(target, localPath('/repo/readme.md'), 'legacy draft')
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-store.test.ts" line=124>
    await store.save(0, model(target, localPath('/repo/readme.md'), 'active draft'))
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-store.test.ts" line=157>
    await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'kept'))
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-store.test.ts" line=172>
    store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'no overwrite')),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-store.test.ts" line=179>
    await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'saved'))
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-store.test.ts" line=253>
    const valid = model(localWorkspace, localPath('/repo/readme.md'), 'valid')
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/document-review-retention.test.ts" line=92>
    document: localPath('/repo/readme.md'),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/rendered-markdown-image-refresh.test.tsx" line=68>
    const documentPath = localPath('/repo/docs/readme.md')
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/terminal-file-link.test.ts" line=17>
    expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/terminal-file-link.test.ts" line=19>
    { target: 'README.md', start: 24, end: 32 },
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/terminal-file-link.test.ts" line=25>
    'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/terminal-file-link.test.ts" line=30>
    'README.md',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/terminal-file-link.test.ts" line=81>
    expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/terminal-file-link.test.ts" line=82>
    '/srv/project/README.md',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/filename-search-policy.test.ts" line=10>
    file('src/my-README.md'),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/filename-search-policy.test.ts" line=11>
    file('docs/readme-guide.md'),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/filename-search-policy.test.ts" line=12>
    file('README.md'),
</match>
```
````

</details>


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
  /private/var/tmp/ws/b13d7186/hvir/stryker.config.json
```


### `grep_search`

**prerequisites|setup|installation|requirements**

<details>
<summary>Arguments</summary>

```json
{
  "query": "prerequisites|setup|installation|requirements",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
81 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/THIRD_PARTY_NOTICES.md" line=50>
    immutable artifact without modifying it during installation.
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.json" line=62>
    "rationale": "The scenario owns one capacity setup, workload, measurement, and cleanup lifetime across real terminals.",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.json" line=71>
    "reconsiderWhen": "Anchor persistence and provider handoff become independently activated review workflows with separate setup and cleanup contracts."
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts" line=80>
    export function evaluateCiAttemptPrerequisites(
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts" line=107>
    const prerequisiteDecision = evaluateCiAttemptPrerequisites(jobs)
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts" line=160>
    const decision = evaluateCiAttemptPrerequisites(
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/smoke-stress.yml" line=63>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml" line=44>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml" line=79>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml" line=104>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml" line=148>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/release-pr-merged.yml" line=40>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/macos-package-release.yml" line=89>
    uses: actions/setup-node@v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/project-kind.yml" line=50>
    uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/project-kind.yml" line=87>
    uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/project-pr-planning.yml" line=51>
    uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/project-pr-planning.yml" line=89>
    uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ghostty-web-update.yml" line=41>
    uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ghostty-web-update.yml" line=99>
    uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/release.yml" line=83>
    uses: actions/setup-node@v7
</match>
```
````

</details>


### `file_search`

****/tsconfig.*.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/tsconfig.*.json"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/b13d7186/hvir/tsconfig.node.json
  /private/var/tmp/ws/b13d7186/hvir/tsconfig.base.json
  /private/var/tmp/ws/b13d7186/hvir/tsconfig.web.json
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/b13d7186/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/b13d7186/hvir/README.md' does not exist
```


### `file_search`

****/docs/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**"
}
```

</details>

```
No files found matching pattern: **/docs/**
```


### `grep_search`

**project purpose|user-facing features|application name|setup prerequisites|architecture**

<details>
<summary>Arguments</summary>

```json
{
  "query": "project purpose|user-facing features|application name|setup prerequisites|architecture",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
329 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/smoke/capacity.ts" line=566>
    architecture: arch(),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=20>
    readonly architecture: DiagnosticReport['application']['architecture']
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=81>
    export function reportArchitecture(
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=82>
    value: NodeJS.Architecture,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=83>
    ): DiagnosticReport['application']['architecture'] {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=22>
    reportArchitecture,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=399>
    architecture: reportArchitecture(process.arch),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=45>
    "architecture:report": "node scripts/architecture-hotspots.mjs",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=46>
    "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=57>
    "verify": "npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts" line=61>
    readonly architecture: 'arm64' | 'x64' | 'other'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts" line=267>
    'architecture',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts" line=275>
    ['arm64', 'x64', 'other'].includes(String(value.architecture)) &&
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml" line=75>
    # Architecture validates the exact event base/head and accepted epic history.
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-module-directions.mts" line=4>
    import type { ModuleReference } from './architecture-module-resolution.mts'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-module-directions.mts" line=5>
    import type { GraphViolation, ModuleGraph } from './architecture-module-graph.mts'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-module-directions.mts" line=35>
    policyPaths.add(from.replace(/\.[cm]?[jt]sx?$/, '.architecture-import-policy.ts'))
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-authorization.mts" line=13>
    type ArchitecturePolicy,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-authorization.mts" line=14>
    type ArchitectureRule,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-authorization.mts" line=16>
    } from './architecture-policy.mts'
</match>
```
````

</details>


### `file_search`

****/docs/*README***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*README*"
}
```

</details>

```
No files found matching pattern: **/docs/*README*
```


### `grep_search`

**hvir**

<details>
<summary>Arguments</summary>

```json
{
  "query": "hvir",
  "isRegexp": false
}
```

</details>

<details>
<summary>63 lines</summary>

````
2860 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=3>
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=82>
    new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=89>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=98>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/application-runtime.ts" line=11>
    __HVIR_BUILD_CHANNEL__,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/build-environment.d.ts" line=1>
    declare const __HVIR_SMOKE_BUILD__: boolean
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/build-environment.d.ts" line=2>
    declare const __HVIR_BUILD_CHANNEL__: import('../shared').ApplicationBuildChannel
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/navigation-policy.ts" line=1>
    /** Only these explicit external schemes may leave hvir for the OS browser. */
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/web-pane/web-pane-route-registry.ts" line=15>
    export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=77>
    app.isPackaged || __HVIR_SMOKE_BUILD__,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=177>
    title: 'Choose a folder for hvir',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=212>
    createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=223>
    'hvir-git',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=431>
    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=436>
    if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=439>
    scenario: process.env['HVIR_SMOKE_SCENARIO'],
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=462>
    console.error('HVIR_STARTUP_FAIL', error)
</match>
```
````

</details>


### `file_search`

****/docs/***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*"
}
```

</details>

```
No files found matching pattern: **/docs/*
```


### `grep_search`

**Electron|electron-builder|Vite|frontend|backend|API**

<details>
<summary>Arguments</summary>

```json
{
  "query": "Electron|electron-builder|Vite|frontend|backend|API",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1565 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=100>
    const listener = (_event: Electron.IpcRendererEvent, payload: unknown): void => {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=1>
    import { app, BrowserWindow, dialog, shell } from 'electron'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=9>
    import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=11>
    import { electronReveal } from './project-host/electron-project-reveal'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=29>
    import { createElectronWindowManager } from './window/electron-window-manager'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=110>
    'Electron window manager',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=111>
    createElectronWindowManager({
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=165>
    trashItem: electronTrash(shell),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=268>
    createElectronRemoteImagePasteCoordinator({
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=374>
    revealLocalEntry: electronReveal(shell),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=437>
    const { runElectronSmokeScenario } = await import('./smoke/scenarios')
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts" line=438>
    const code = await runElectronSmokeScenario({
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/ipc/authority-router.ts" line=1>
    import { ipcMain } from 'electron'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/ipc/authority-router.ts" line=38>
    readonly sender: Electron.WebContents
</match>
```
````

</details>


### `file_search`

****/docs/*smoke***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*smoke*"
}
```

</details>

```
No files found matching pattern: **/docs/*smoke*
```


### `file_search`

****/docs/*architecture***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*architecture*"
}
```

</details>

```
No files found matching pattern: **/docs/*architecture*
```


### `file_search`

****/docs/*prerequisites***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*prerequisites*"
}
```

</details>

```
No files found matching pattern: **/docs/*prerequisites*
```


### `grep_search`

**root README|accurate root README**

<details>
<summary>Arguments</summary>

```json
{
  "query": "root README|accurate root README",
  "isRegexp": true
}
```

</details>

```
No matches found for query: root README|accurate root README
```


### `file_search`

****/docs/*project***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*project*"
}
```

</details>

```
No files found matching pattern: **/docs/*project*
```


### `grep_search`

**desktopName|name": "hvir"**

<details>
<summary>Arguments</summary>

```json
{
  "query": "desktopName|name\": \"hvir\"",
  "isRegexp": true
}
```

</details>

<details>
<summary>18 lines</summary>

````
5 matches
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=2>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=8>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=2>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=12>
    "desktopName": "hvir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/electron-builder.yml" line=48>
    syncDesktopName: true
</match>
```
````

</details>


### `file_search`

****/docs/*setup***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*setup*"
}
```

</details>

```
No files found matching pattern: **/docs/*setup*
```


### `grep_search`

**pack:mac:arm64|pack:linux:x64|electron-builder**

<details>
<summary>Arguments</summary>

```json
{
  "query": "pack:mac:arm64|pack:linux:x64|electron-builder",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
34 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=22>
    "build:dir": "npm run build && electron-builder --dir",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=23>
    "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=24>
    "pack:mac:arm64:signed": "npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=28>
    "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=29>
    "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package.json" line=102>
    "electron-builder": "^26.0.0",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=43>
    "electron-builder": "^26.0.0",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=4877>
    "electron-builder-squirrel-windows": "26.15.3"
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=6585>
    "node_modules/electron-builder": {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=6587>
    "resolved": "https://registry.npmjs.org/electron-builder/-/electron-builder-26.15.3.tgz",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=6604>
    "electron-builder": "cli.js",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=6611>
    "node_modules/electron-builder-squirrel-windows": {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/package-lock.json" line=6613>
    "resolved": "https://registry.npmjs.org/electron-builder-squirrel-windows/-/electron-builder-squirrel-windows-26.15.3.tgz",
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/macos-package-release.yml" line=144>
    run: npm run pack:mac:arm64:signed
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/electron-builder.ssh-acceptance.yml" line=1>
    extends: ./electron-builder.yml
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/release.yml" line=189>
    build: npm run pack:linux:x64
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/run-macos-ssh-acceptance.sh" line=47>
    ./node_modules/.bin/electron-builder \
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/scripts/run-macos-ssh-acceptance.sh" line=51>
    --config electron-builder.ssh-acceptance.yml
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/packaged-runtime-inspection.test.ts" line=86>
    'pack:mac:arm64',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/test/packaged-runtime-inspection.test.ts" line=87>
    'pack:mac:arm64:signed',
</match>
```
````

</details>


### `file_search`

****/docs/*ci***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*ci*"
}
```

</details>

```
No files found matching pattern: **/docs/*ci*
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/b13d7186/hvir/electron-builder.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>74 lines</summary>

````
File: `/private/var/tmp/ws/b13d7186/hvir/electron-builder.yml`. Lines 1 to 72 (72 lines total): 
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
  "filePath": "/private/var/tmp/ws/b13d7186/hvir/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>19 lines</summary>

````
File: `/private/var/tmp/ws/b13d7186/hvir/electron-builder.ssh-acceptance.yml`. Lines 1 to 17 (17 lines total): 
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


### `file_search`

****/docs/*smoke***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*smoke*"
}
```

</details>

```
No files found matching pattern: **/docs/*smoke*
```


### `file_search`

****/docs/*architecture***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*architecture*"
}
```

</details>

```
No files found matching pattern: **/docs/*architecture*
```


### `file_search`

****/docs/*prerequisites***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*prerequisites*"
}
```

</details>

```
No files found matching pattern: **/docs/*prerequisites*
```


### `file_search`

****/docs/*project***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*project*"
}
```

</details>

```
No files found matching pattern: **/docs/*project*
```


### `file_search`

****/docs/*setup***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*setup*"
}
```

</details>

```
No files found matching pattern: **/docs/*setup*
```


### `file_search`

****/docs/*ci***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/*ci*"
}
```

</details>

```
No files found matching pattern: **/docs/*ci*
```


### `grep_search`

**root README**

<details>
<summary>Arguments</summary>

```json
{
  "query": "root README",
  "isRegexp": false
}
```

</details>

```
No matches found for query: root README
```


### `grep_search`

**accurate root README**

<details>
<summary>Arguments</summary>

```json
{
  "query": "accurate root README",
  "isRegexp": false
}
```

</details>

```
No matches found for query: accurate root README
```


### `grep_search`

**project purpose**

<details>
<summary>Arguments</summary>

```json
{
  "query": "project purpose",
  "isRegexp": false
}
```

</details>

```
No matches found for query: project purpose
```


### `grep_search`

**user-facing features**

<details>
<summary>Arguments</summary>

```json
{
  "query": "user-facing features",
  "isRegexp": false
}
```

</details>

```
No matches found for query: user-facing features
```


### `grep_search`

**application name**

<details>
<summary>Arguments</summary>

```json
{
  "query": "application name",
  "isRegexp": false
}
```

</details>

```
No matches found for query: application name
```


### `grep_search`

**setup prerequisites**

<details>
<summary>Arguments</summary>

```json
{
  "query": "setup prerequisites",
  "isRegexp": false
}
```

</details>

```
No matches found for query: setup prerequisites
```


### `grep_search`

**architecture**

<details>
<summary>Arguments</summary>

```json
{
  "query": "architecture",
  "isRegexp": false
}
```

</details>

<details>
<summary>63 lines</summary>

````
329 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=20>
    readonly architecture: DiagnosticReport['application']['architecture']
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=81>
    export function reportArchitecture(
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=82>
    value: NodeJS.Architecture,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=83>
    ): DiagnosticReport['application']['architecture'] {
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=22>
    reportArchitecture,
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=399>
    architecture: reportArchitecture(process.arch),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts" line=61>
    readonly architecture: 'arm64' | 'x64' | 'other'
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts" line=267>
    'architecture',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts" line=275>
    ['arm64', 'x64', 'other'].includes(String(value.architecture)) &&
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/src/main/smoke/capacity.ts" line=566>
    architecture: arch(),
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=10>
    // These import bans are how the architecture is enforced mechanically rather
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=460>
    'scripts/architecture-hotspots.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=461>
    'scripts/architecture-policy.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=462>
    'scripts/architecture-inventory.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=463>
    'scripts/architecture-authorization.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=464>
    'scripts/architecture-github.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=465>
    'scripts/architecture-wiring.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=466>
    'scripts/architecture-module-resolution.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs" line=467>
    'scripts/architecture-module-graph.mts',
</match>
<match path="/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml" line=75>
    # Architecture validates the exact event base/head and accepted epic history.
</match>
```
````

</details>


### `file_search`

****/docs/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**"
}
```

</details>

```
No files found matching pattern: **/docs/**
```


### Copilot

\<final_answer>
/private/var/tmp/ws/b13d7186/hvir/package.json:1-128
/private/var/tmp/ws/b13d7186/hvir/electron-builder.yml:1-72
/private/var/tmp/ws/b13d7186/hvir/electron-builder.ssh-acceptance.yml:1-17
/private/var/tmp/ws/b13d7186/hvir/src/main/index.ts:1-220
/private/var/tmp/ws/b13d7186/hvir/src/preload/index.ts:1-140
/private/var/tmp/ws/b13d7186/hvir/src/main/diagnostics/diagnostic-report-builder.ts:1-140
/private/var/tmp/ws/b13d7186/hvir/src/shared/diagnostic-report.ts:50-120
/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs:1-60
/private/var/tmp/ws/b13d7186/hvir/eslint.config.mjs:450-490
/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-hotspots.mts:1-200
/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-module-graph.mts:1-200
/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-wiring.mts:1-200
/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-policy.mts:1-200
/private/var/tmp/ws/b13d7186/hvir/scripts/architecture-github.mts:1-200
/private/var/tmp/ws/b13d7186/hvir/scripts/ci-attempt-evidence.mts:60-190
/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml:60-180
/private/var/tmp/ws/b13d7186/hvir/.github/workflows/macos-package-release.yml:130-190
\</final_answer>


---

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/b13d7186/hvir/electron-builder.yml.**

/private/var/tmp/ws/b13d7186/hvir/electron-builder.yml

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

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/b13d7186/hvir/LICENSE.**

/private/var/tmp/ws/b13d7186/hvir/LICENSE

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

<sub>21s</sub>

### `glob`

**src/renderer/src/***

"src/renderer/src/*"

<details>
<summary>8 matches</summary>

```
./src/renderer/src/ErrorBoundary.tsx
./src/renderer/src/theme.ts
./src/renderer/src/hvir.d.ts
./src/renderer/src/App.tsx
./src/renderer/src/theme-model.ts
./src/renderer/src/themes.css
./src/renderer/src/main.tsx
./src/renderer/src/styles.css
```

</details>


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/b13d7186/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/b13d7186/hvir/src/renderer/src/App.tsx (lines 1-200)

<details>
<summary>200 lines</summary>

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
  })
  const accept = session.acceptProjectState
  const {
    projectState,
    root,
    activeWorkspace,
    connectionState,
    rootError,
    refreshHosts,
  } = session
  const documentReview = review.useReviewWorkspace(activeWorkspace, reviewWatch)
  const { watch: watchVersion, ignored: ignoredRefreshVersion } = session.versions
  const { content: contentVersion, git: gitVersion } = session.versions
  useRendererReady(Boolean(root))
  const watchInterests = useProjectWatchInterests({
    root,
    connected: connectionState === 'connected',
    missing: activeWorkspace?.missing,
    openPaths: viewer.openWatchPaths,
    reviewPaths: documentReview.watchPaths,
    dependencyPaths: viewer.renderedWatchPaths,
  })
  const gitEnabled = workspaceGitEnabled(activeWorkspace)
  const terminalWorkspaces = useTerminalWorkspaceRuntime({
    projectState,
    acceptProjectState: session.acceptProjectState,
    forgetWebViews: forgetTerminalViews,
    acknowledgeWorkspaces: session.acknowledgeWorkspaces,
    onError: session.reportError,
  })
  const layout = useWorkbenchLayout({
    root,
    gitAvailable: gitEnabled,
    workspaceMissing: Boolean(activeWorkspace?.missing),
  })
  const {
    workbenchRef,
    viewerGroupsRef,
    railMode,
    setRailMode,
    terminalMode,
    setTerminalMode,
    toggleTerminalFocus,
    restoreViewer,
    treeCollapsed,
    setTreeCollapsed,
    setTreeWidth,
    setTerminalHeight,
    setViewerPrimaryWidth,
    resetViewerPrimaryWidth,
    focusTerminal: showTerminal,
  } = layout
  const git = useGitWorkspace({
    root,
    hasDirtyViewerTabs: () => tabs.some((tab) => tab.dirty),
    acceptProjectState: session.acceptProjectState,
    refreshContent: session.refreshWorkspaceContent,
    refreshGit: session.refreshGit,
    activateViewer: () => {
      focusViewerPane('primary')
```

</details>


---

<sub>25s</sub>

### `glob`

**src/renderer/src/components/***

"src/renderer/src/components/*"

```
No files matched the pattern.
```


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/b13d7186/hvir/.github/workflows/ci.yml (lines 1-110)

<details>
<summary>94 lines</summary>

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
```

</details>


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/b13d7186/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/b13d7186/hvir/scripts/check-terminal-runtime.mts (lines 1-100)

<details>
<summary>87 lines</summary>

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
```

</details>


---

<sub>49s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: /private/var/tmp/ws/b13d7186/hvir/README.md\n+# hvir\n+\n+hvir is an Electron-based desktop development workbench that brings terminals,\n+files, Git, and web views into one workspace. It supports local projects and\n+remote workspaces over SSH.\n+\n+## Features\n+\n+- Integrated terminals powered by `node-pty` and `ghostty-web`, with split layouts\n+  and configurable terminal themes.\n+- Project switching, a file tree, tabbed file viewing and editing, and split\n+  viewer panes.\n+- Git change inspection and a Git graph.\n+- Embedded web panes for working with browser content alongside your project.\n+- SSH workspaces, session management, and document review.\n+- Application settings for themes, terminal preferences, and workbench layout.\n+\n+## Getting started\n+\n+### Prerequisites\n+\n+- Node.js **24 or newer** and npm.\n+- Git for repository workflows.\n+- A native build toolchain: Python and Xcode Command Line Tools on macOS, or\n+  Python, `make`, and a C/C++ compiler on Linux.\n+- A graphical desktop environment to run the Electron application.\n+\n+The repository provides packaging targets for macOS Apple Silicon (`.pkg`) and\n+Linux x64/ARM64 (`.deb`). Windows packaging is not configured.\n+\n+### Run from source\n+\n+From the repository root:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+Dependency installation also installs the Electron runtime, builds the local\n+`@hvir/rename-noreplace` native addon, and rebuilds `node-pty` for Electron. Do not\n+skip installation scripts or omit optional dependencies: the local native addon\n+is required by the runtime.\n+\n+If startup reports that the terminal runtime does not match the checkout, run\n+`npm ci` again before retrying. Development and production builds check the\n+installed terminal runtime automatically.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the application in development mode. |\n+| `npm run build` | Type-check and build the application into `out/`. |\n+| `npm run preview` | Launch the previously built application. |\n+| `npm run typecheck` | Check main/preload and renderer TypeScript code. |\n+| `npm run lint` | Run ESLint. |\n+| `npm test` | Run the Vitest suite once. |\n+| `npm run test:watch` | Run tests in watch mode. |\n+| `npm run format:check` | Check formatting with Prettier. |\n+| `npm run format` | Apply Prettier formatting. |\n+| `npm run verify` | Run seam, ADR, architecture, lint, type, and test checks. |\n+| `npm run smoke` | Build and run Electron smoke scenarios. |\n+\n+Electron smoke tests require a display; headless Linux environments need a\n+virtual display. The architecture checks in `verify` also inspect repository and\n+GitHub evidence, so they may require additional repository history and credentials.\n+\n+## Packaging\n+\n+Run packaging commands on the corresponding target platform with its native build\n+toolchain available:\n+\n+```sh\n+# Unpacked application\n+npm run build:dir\n+\n+# macOS Apple Silicon installer\n+npm run pack:mac:arm64\n+\n+# Linux Debian packages\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+Build output goes to `out/`; packaged artifacts go to `dist/`. macOS packages\n+install the application into `/Applications`. Linux packages declare their system\n+library dependencies in [`electron-builder.yml`](electron-builder.yml).\n+\n+For macOS builds that must be signed, use `npm run pack:mac:arm64:signed` with a\n+configured signing identity. That command requires code signing rather than\n+silently producing an unsigned package.\n+\n+## Project structure\n+\n+| Path | Contents |\n+| --- | --- |\n+| `src/main/` | Electron main process and host-side services. |\n+| `src/preload/` | Bridge between the renderer and host functionality. |\n+| `src/renderer/` | React workbench UI. |\n+| `src/shared/` | Shared types and contracts. |\n+| `packages/rename-noreplace/` | Local native filesystem addon. |\n+| `test/` | Automated tests. |\n+| `scripts/` | Build, verification, smoke, and release tooling. |\n+| `build/` | Icons, native resources, and installer configuration. |\n+\n+The application uses TypeScript, React, Electron, and electron-vite. Terminal\n+rendering uses the `ghostty-web` build pinned in `package.json`; native terminal\n+sessions use `node-pty`.\n+\n+## License\n+\n+Licensed under the [MIT License](LICENSE). See\n+[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/b13d7186/hvir/README.md
```


---

<sub>52s</sub>

### `bash`

**Format README and check final working tree**

$ ./node_modules/.bin/prettier --write README.md && git diff --check && git status --short

```
?? README.md
<shellId: 1 completed with exit code 0>
```


---

<sub>53s</sub>

### Copilot

Created **README.md** covering the project's purpose and features, prerequisites, setup, development commands, packaging, project structure, and license.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
