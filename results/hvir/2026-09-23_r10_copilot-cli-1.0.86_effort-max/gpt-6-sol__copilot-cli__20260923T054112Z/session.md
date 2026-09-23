# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `9530dfe4-6068-47ed-a697-d5578a2a5b30`  
> - **Started:** 9/23/2026, 1:41:27 AM  
> - **Duration:** 2m 9s  
> - **Exported:** 9/23/2026, 1:43:37 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>6s</sub>

### Copilot

I’ll inspect the project layout and its build/test entry points, then write a README based on the repository’s actual usage.

---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir.**

/private/var/tmp/ws/e01ee073/hvir

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

### `bash`

**Check working tree and latest commit**

$ git status --short --branch && git --no-pager log -1 --format='%h %s'

```
## main
aa2879e Initial commit
<shellId: 0 completed with exit code 0>
```


---

<sub>8s</sub>

### `session_store_sql`

**Find recent project sessions**

<details>
<summary>Arguments</summary>

```json
{
  "description": "Find recent project sessions",
  "query": "SELECT id, summary, created_at FROM sessions WHERE created_at >= now() - INTERVAL '7 days' AND cwd = '/private/var/tmp/ws/e01ee073/hvir' ORDER BY created_at DESC LIMIT 10"
}
```

</details>

```
Query returned 0 rows.
```


---

<sub>16s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
  /private/var/tmp/ws/e01ee073/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/e01ee073/hvir/electron-builder.yml
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
  /private/var/tmp/ws/e01ee073/hvir/electron.vite.config.ts
```


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
  /private/var/tmp/ws/e01ee073/hvir/tsconfig.node.json
  /private/var/tmp/ws/e01ee073/hvir/tsconfig.base.json
  /private/var/tmp/ws/e01ee073/hvir/tsconfig.web.json
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/e01ee073/hvir/README.md' does not exist
```


### `grep_search`

**app\b.*name|displayName|productName|title**

<details>
<summary>Arguments</summary>

```json
{
  "query": "app\\b.*name|displayName|productName|title",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1119 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/e01ee073/hvir/electron-builder.ssh-acceptance.yml" line=3>
    productName: hvir SSH Acceptance
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml" line=2>
    productName: hvir
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml" line=32>
    entitlements: build/entitlements.mac.plist
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml" line=33>
    entitlementsInherit: build/entitlements.mac.inherit.plist
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitHistoryView.tsx" line=100>
    readonly title?: string
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitHistoryView.tsx" line=181>
    title: detailState.error,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitHistoryView.tsx" line=292>
    title={commit.subject || '(no subject)'}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitHistoryView.tsx" line=330>
    title="Open in full history"
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitHistoryView.tsx" line=380>
    <span className="git-rail-history-state" title={item.title}>
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitHistoryView.tsx" line=416>
    title={entry.file.path.path}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx" line=31>
    title={label}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx" line=39>
    labelledBy="workbench-health-title"
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx" line=45>
    <h2 id="workbench-health-title">Workbench health</h2>
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx" line=143>
    <div className="workbench-health-item-title">
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx" line=119>
    setTitle: setWebViewTitle,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx" line=334>
    ? rootWebViews.map((view) => ({ id: view.id, title: view.title }))
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx" line=361>
    onTitle={setWebViewTitle}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx" line=546>
    title={treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/layout/PaneResizer.tsx" line=173>
    title={`${label}. Double-click to reset.`}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/HarnessProfileOverlays.tsx" line=66>
    profileName={editor.draft.input.displayName || 'Untitled profile'}
</match>
```
````

</details>


### `grep_search`

**electron.*builder|Electron|main.*process|renderer.*process**

<details>
<summary>Arguments</summary>

```json
{
  "query": "electron.*builder|Electron|main.*process|renderer.*process",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
711 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=100>
    const listener = (_event: Electron.IpcRendererEvent, payload: unknown): void => {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/renderer-diagnostics.ts" line=106>
    // A destroyed renderer or main process cannot be held open by diagnostics.
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/git/worker-host-broker.ts" line=19>
    /** Main-side enforcement for the untrusted Git utility-process transport. */
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/html-preview-protocol.ts" line=2>
    import { protocol } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/application-runtime.ts" line=2>
    import { app } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/renderer-event-delivery.ts" line=1>
    import type { WebFrameMain } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/renderer-event-delivery.ts" line=15>
    /** Deliver one typed event while treating only Electron's disposed-frame race as stale. */
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/renderer-event-delivery.ts" line=32>
    /** Pure target-state policy applied before entering Electron's frame delivery edge. */
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/renderer-event-delivery.ts" line=39>
    /** Pure classification for the one Electron delivery failure that means the target is gone. */
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/renderer-event-delivery.ts" line=54>
    // WebFrameMain.send logs every native failure inside Electron. postMessage keeps
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=1>
    import { app, BrowserWindow, dialog, shell } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=9>
    import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=11>
    import { electronReveal } from './project-host/electron-project-reveal'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=29>
    import { createElectronWindowManager } from './window/electron-window-manager'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=110>
    'Electron window manager',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=111>
    createElectronWindowManager({
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=165>
    trashItem: electronTrash(shell),
</match>
```
````

</details>


### `grep_search`

**operating.*system|platform.*support|runtime.*prerequisite|configuration**

<details>
<summary>Arguments</summary>

```json
{
  "query": "operating.*system|platform.*support|runtime.*prerequisite|configuration",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
175 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/e01ee073/hvir/test/github-token-migration.test.ts" line=5>
    CANONICAL_PROJECT_CONFIGURATION,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/github-token-migration.test.ts" line=104>
    nameWithOwner: CANONICAL_PROJECT_CONFIGURATION.repository,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/harness/harness-launch.ts" line=50>
    throw new Error('Harness profile launch configuration changed; review it again')
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/features/terminal.ts" line=109>
    throw new Error('Harness profile launch configuration changed')
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/features/terminal.ts" line=158>
    throw new Error('Harness profile launch configuration changed')
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/harness/harness-provider.ts" line=9>
    HarnessComposerConfiguration,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/harness/bundled-harness-providers.ts" line=44>
    await provider.composerConfiguration?.configure(host, mode)
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/real-host-ssh-contract.test.ts" line=11>
    readRealHostSshConfiguration,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/real-host-ssh-contract.test.ts" line=36>
    'unavailable: explicit target configuration is absent',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/real-host-ssh-contract.test.ts" line=41>
    it('fails closed on partial configuration without retaining supplied secret material', () => {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/real-host-ssh-contract.test.ts" line=42>
    const result = readRealHostSshConfiguration({
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/real-host-ssh-contract.test.ts" line=56>
    const result = readRealHostSshConfiguration({
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=46>
    interface SmokeInterruptionConfiguration {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=65>
    private readonly configuration: SmokeInterruptionConfiguration | undefined,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=68>
    if (configuration?.action !== 'pause') return
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=80>
    return new SmokeInterruptionCheckpoint(parseConfiguration(environment), output)
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=84>
    return this.configuration !== undefined
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=88>
    return this.configuration?.runToken
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=92>
    return this.configuration?.predecessorToken
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/interruption-checkpoint.ts" line=96>
    return this.configuration?.predecessorPaneId
</match>
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>74 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml`. Lines 1 to 72 (72 lines total): 
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
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>19 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/electron-builder.ssh-acceptance.yml`. Lines 1 to 17 (17 lines total): 
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
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=3>
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=82>
    new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=89>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=98>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=55>
    HVIR_SMOKE_SCENARIO: ${{ inputs.scenario }}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=56>
    HVIR_SMOKE_REPEAT: ${{ inputs.repeat }}
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=74>
    HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=80>
    HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=88>
    path: ${{ runner.temp }}/hvir-smoke-artifacts
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=2>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=8>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=19>
    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=64>
    "@hvir/rename-noreplace": "file:packages/rename-noreplace"
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=1978>
    "node_modules/@hvir/rename-noreplace": {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=7581>
    "resolved": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package-lock.json" line=11860>
    "name": "@hvir/rename-noreplace",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml" line=1>
    appId: dev.hvir.app
</match>
```
````

</details>


### `grep_search`

**Electron**

<details>
<summary>Arguments</summary>

```json
{
  "query": "Electron",
  "isRegexp": false
}
```

</details>

<details>
<summary>63 lines</summary>

````
637 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/preload/index.ts" line=100>
    const listener = (_event: Electron.IpcRendererEvent, payload: unknown): void => {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=1>
    import { app, BrowserWindow, dialog, shell } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=9>
    import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=11>
    import { electronReveal } from './project-host/electron-project-reveal'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=29>
    import { createElectronWindowManager } from './window/electron-window-manager'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=110>
    'Electron window manager',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=111>
    createElectronWindowManager({
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=165>
    trashItem: electronTrash(shell),
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=268>
    createElectronRemoteImagePasteCoordinator({
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=374>
    revealLocalEntry: electronReveal(shell),
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=437>
    const { runElectronSmokeScenario } = await import('./smoke/scenarios')
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts" line=438>
    const code = await runElectronSmokeScenario({
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/authority-router.ts" line=1>
    import { ipcMain } from 'electron'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/authority-router.ts" line=38>
    readonly sender: Electron.WebContents
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/authority-router.ts" line=43>
    readonly sender: Electron.WebContents
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/authority-router.ts" line=64>
    listener: (event: Electron.IpcMainInvokeEvent, request: unknown) => unknown,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/ipc/authority-router.ts" line=69>
    listener: (event: Electron.IpcMainEvent, payload: unknown) => void,
</match>
```
````

</details>


### `grep_search`

**runtime prerequisite|runtime requirement|terminal runtime|pty-native**

<details>
<summary>Arguments</summary>

```json
{
  "query": "runtime prerequisite|runtime requirement|terminal runtime|pty-native",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
43 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=9>
    default: pty-native
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/.github/workflows/smoke-stress.yml" line=12>
    - pty-native
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package.json" line=58>
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package.json" line=59>
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/package.json" line=60>
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-hotspots.json" line=125>
    "owner": "terminal runtime",
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenarios.ts" line=25>
    if (scenario === 'pty-native') {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenarios.ts" line=44>
    scenario: Exclude<ElectronSmokeScenario, 'pty-native'>,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/run-smoke-scenarios.mts" line=18>
    'pty-native',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/installed-startup-probe.mts" line=262>
    HVIR_SMOKE_SCENARIO: 'pty-native',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenario-selection.mts" line=2>
    'pty-native',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenario-selection.mts" line=31>
    'pty-native' | 'diagnostic-report-restart'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/check-terminal-runtime.mts" line=89>
    `Installed dependencies do not match this checkout: ghostty-web is missing required terminal runtime capabilities (${missing.join(', ')}). ${RECOVERY}`,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/run-smoke-interruption.mts" line=19>
    type IsolationScenario = 'pty-native' | 'git-workflow' | 'web-pane'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/run-smoke-interruption.mts" line=181>
    scenario: 'pty-native',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/scripts/run-smoke-interruption.mts" line=205>
    scenario: 'pty-native',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal/terminal-runtime-registry.ts" line=24>
    throw new Error('Terminal runtime identity changed while it was not registered')
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal/terminal-runtime-registry.ts" line=28>
    throw new Error(`Terminal runtime '${nextId}' is already registered`)
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/smoke-failure-artifact.test.ts" line=243>
    scenario: 'pty-native',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/test/smoke-failure-artifact.test.ts" line=255>
    expect(path).toBe(join(directory, 'pty-native-iteration-1-of-5.json'))
</match>
```
````

</details>


### `grep_search`

**supported operating system|operating system support|platform**

<details>
<summary>Arguments</summary>

```json
{
  "query": "supported operating system|operating system support|platform",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
198 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/e01ee073/hvir/THIRD_PARTY_NOTICES.md" line=13>
    validation and platform syscall wrapper from Skill Steward's binding. hvir modifies
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts" line=147>
    (process.platform === 'win32' ? 'powershell.exe' : '/bin/bash'),
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts" line=168>
    detached: process.platform !== 'win32',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts" line=928>
    if (process.platform === 'win32' || child.pid === undefined) {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts" line=944>
    if (process.platform !== 'darwin' && process.platform !== 'linux') {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts" line=945>
    throw new Error('Atomic no-replace publication is unavailable on this platform')
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts" line=977>
    // Preserve a closed error when the platform reports an unknown errno.
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=19>
    readonly platform: DiagnosticReport['application']['platform']
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=72>
    export function reportPlatform(
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=73>
    value: NodeJS.Platform,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=74>
    ): DiagnosticReport['application']['platform'] {
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=23>
    reportPlatform,
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=398>
    platform: reportPlatform(process.platform),
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenarios.ts" line=46>
    return scenario === 'diagnostic-report-restart' ? 'platform-contracts' : scenario
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/viewer-position.ts" line=357>
    const mac = /Mac/.test(navigator.platform);
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity.ts" line=1>
    import { arch, cpus, platform, release, totalmem } from 'node:os'
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity.ts" line=565>
    platform: platform(),
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/window/electron-window-manager.ts" line=205>
    const primaryModifier = process.platform === 'darwin' ? input.meta : input.control
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/window/electron-window-manager.ts" line=230>
    process.platform === 'darwin',
</match>
<match path="/private/var/tmp/ws/e01ee073/hvir/src/main/window/electron-window-manager.ts" line=397>
    process.platform === 'darwin' &&
</match>
```
````

</details>


### `file_search`

****/smoke/*.ts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/smoke/*.ts"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/harness-profile-workflow.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/app-settings.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity-terminals.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/project-entry-deletion.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/terminal-scenario-ready.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/external-file-move.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/terminal-horizon-presentation.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/git-workflow.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/project-state-fixture.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/terminal-chrome.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/filename-search.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/platform-contracts.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/renderer-isolation.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/terminal-hidden-reveal.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity-output-fixtures.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/viewer-position-operation.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/terminal-explicit-launch.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/sessions-projection.ts
  /private/var/tmp/ws/e01ee073/hvir/src/main/smoke/terminal-move.ts
```

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>83 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts`. Lines 1 to 86 (86 lines total): 
```
import {
  DIAGNOSTIC_REPORT_NOTICE,
  DIAGNOSTIC_REPORT_VERSION,
  MAX_DIAGNOSTIC_REPORT_DROPPED_COUNTS,
  MAX_DIAGNOSTIC_REPORT_EVENTS,
  isDiagnosticReport,
  type DiagnosticReport,
  type DiagnosticReportDroppedCount,
  type DiagnosticReportEvent,
  type WorkbenchHealthSnapshot,
} from '../../shared'
import type { RendererOwner } from '../renderer-resource-scopes'
import type { DiagnosticReportEvidenceSnapshot } from './diagnostic-report-evidence'

export interface DiagnosticReportApplicationFacts {
  readonly version: string
  readonly electronVersion: string
  readonly chromeVersion: string
  readonly platform: DiagnosticReport['application']['platform']
  readonly architecture: DiagnosticReport['application']['architecture']
  readonly mode: DiagnosticReport['application']['mode']
  readonly buildChannel: DiagnosticReport['application']['buildChannel']
}

/** Builds the closed report envelope from already-sanitized snapshot ports. */
export function buildDiagnosticReport(input: {
  readonly reportId: string
  readonly createdAt: string
  readonly application: DiagnosticReportApplicationFacts
  readonly owner: RendererOwner
  readonly diagnostics: DiagnosticReportEvidenceSnapshot
  readonly health: WorkbenchHealthSnapshot
}): DiagnosticReport | undefined {
  const report: DiagnosticReport = {
    version: DIAGNOSTIC_REPORT_VERSION,
    reportId: input.reportId,
    notice: DIAGNOSTIC_REPORT_NOTICE,
    createdAt: input.createdAt,
    application: input.application,
    renderer: {
      ownerId: input.owner.id,
      ownerGeneration: input.owner.generation,
      surface: 'workbench-health',
    },
    diagnostics: {
      schemaVersion: 2,
      scopes: input.diagnostics.scopes,
      events: input.diagnostics.events
        .slice(-MAX_DIAGNOSTIC_REPORT_EVENTS)
        .map(({ event, scope }): DiagnosticReportEvent => ({
          scope,
          kind: event.kind,
          owner: event.owner,
          ownerGeneration: event.ownerGeneration,
          severity: event.severity,
          occurredAt: event.occurredAt,
          correlation: event.correlation,
        })),
      dropped: input.diagnostics.dropped
        .slice(-MAX_DIAGNOSTIC_REPORT_DROPPED_COUNTS)
        .map((entry): DiagnosticReportDroppedCount => ({ ...entry })),
    },
    health: input.health,
  }
  return isDiagnosticReport(report) ? report : undefined
}

export function safeVersion(value: string | undefined): string {
  return value && /^[0-9A-Za-z.+-]{1,64}$/.test(value) ? value : 'unknown'
}

export function reportPlatform(
  value: NodeJS.Platform,
): DiagnosticReport['application']['platform'] {
  if (value === 'darwin') return 'macos'
  if (value === 'linux') return 'linux'
  if (value === 'win32') return 'windows'
  return 'other'
}

export function reportArchitecture(
  value: NodeJS.Architecture,
): DiagnosticReport['application']['architecture'] {
  return value === 'arm64' || value === 'x64' ? value : 'other'
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>194 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts`. Lines 1 to 200 (at least 200 lines total): 
```
import { app } from 'electron'

import {
  DIAGNOSTIC_REPORT_RETENTION_HOURS,
  isDiagnosticOpaqueId,
  isDiagnosticReportArtifact,
  localPath,
  serializeDiagnosticReportArtifact,
  type DiagnosticCaptureMask,
  type DiagnosticReportActionResult,
  type DiagnosticReportArtifact,
  type DiagnosticReportFailure,
  type DiagnosticReportState,
  type DiagnosticReportStateResult,
  type HostPath,
} from '../../shared'
import type { ApplicationRuntime } from '../application-runtime-policy'
import { LocalHost } from '../project-host/local-host'
import type { RendererOwner } from '../renderer-resource-scopes'
import {
  buildDiagnosticReport,
  reportArchitecture,
  reportPlatform,
  safeVersion,
  type DiagnosticReportApplicationFacts,
} from './diagnostic-report-builder'
import {
  ElectronDiagnosticReportActions,
  ScreenshotTooLargeError,
  type DiagnosticReportActions,
} from './electron-diagnostic-report-actions'
import {
  DiagnosticReportStorage,
  ReportStorageTooLargeError,
} from './diagnostic-report-storage'
import type { DiagnosticReportEvidenceSnapshot } from './diagnostic-report-evidence'
import type { WorkbenchHealthSnapshot } from '../../shared'

export interface DiagnosticReportSnapshotPorts {
  readonly prepare: () => Promise<
    | {
        readonly revision: number
        readonly diagnostics: DiagnosticReportEvidenceSnapshot
        readonly health: WorkbenchHealthSnapshot
      }
    | undefined
  >
  readonly isCurrent: (revision: number) => boolean
}

interface ReportRecord {
  readonly owner: RendererOwner
  readonly reportId: string
  revision: number
  commit: Promise<void>
  cancelExpiry?: () => void
  artifact?: DiagnosticReportArtifact
}

/** Coordinates one reviewed temporary report per exact renderer generation. */
export class DiagnosticReportCoordinator {
  private readonly records = new Map<string, ReportRecord>()
  private readonly activeByOwner = new Map<string, ReportRecord>()
  private readonly deletedByOwner = new Map<string, Set<string>>()
  private disposed = false

  constructor(
    private readonly snapshots: DiagnosticReportSnapshotPorts,
    private readonly application: DiagnosticReportApplicationFacts,
    private readonly storage: DiagnosticReportStorage,
    private readonly actions: DiagnosticReportActions,
    private readonly isRendererCurrent: (owner: RendererOwner) => boolean,
    private readonly disposeStorage: () => void | Promise<void> = () => undefined,
    private readonly now: () => number = Date.now,
    private readonly scheduleExpiry: (
      callback: () => void,
      delayMs: number,
    ) => () => void = defaultScheduleExpiry,
  ) {}

  async start(): Promise<void> {
    try {
      await this.storage.cleanup()
    } catch {
      // Temporary report cleanup cannot interfere with startup.
    }
  }

  async create(
    owner: RendererOwner,
    reportId: string,
  ): Promise<DiagnosticReportStateResult> {
    if (
      !this.accepts(owner) ||
      !isDiagnosticOpaqueId(reportId) ||
      this.records.has(reportId)
    )
      return failure('invalid-request')
    try {
      await this.replaceActive(owner)
    } catch {
      return failure('storage-unavailable')
    }
    if (!this.accepts(owner) || this.records.has(reportId)) {
      return failure('stale-renderer')
    }
    const record: ReportRecord = {
      owner,
      reportId,
      revision: 0,
      commit: Promise.resolve(),
    }
    this.records.set(reportId, record)
    this.activeByOwner.set(ownerKey(owner), record)
    const snapshot = await this.snapshots.prepare()
    if (!snapshot || !this.matches(record, 0)) {
      this.forget(record)
      return failure(snapshot ? 'stale-renderer' : 'evidence-changed')
    }
    if (!this.snapshots.isCurrent(snapshot.revision)) {
      this.forget(record)
      return failure('evidence-changed')
    }
    let report: DiagnosticReportArtifact['report'] | undefined
    try {
      report = buildDiagnosticReport({
        reportId,
        createdAt: new Date(this.now()).toISOString(),
        application: this.application,
        owner,
        diagnostics: snapshot.diagnostics,
        health: snapshot.health,
      })
    } catch {
      this.forget(record)
      return failure('storage-unavailable')
    }
    if (!report) {
      this.forget(record)
      return failure('report-too-large')
    }
    if (!this.snapshots.isCurrent(snapshot.revision)) {
      this.forget(record)
      return failure('evidence-changed')
    }
    const artifact: DiagnosticReportArtifact = { report }
    try {
      await this.storage.write(reportId, artifact)
    } catch (error) {
      this.forget(record)
      return failure(storageFailure(error))
    }
    if (!this.matches(record, 0) || !this.snapshots.isCurrent(snapshot.revision)) {
      this.forget(record)
      await this.storage.remove(reportId).catch(() => undefined)
      return failure(
        this.accepts(owner) && !this.snapshots.isCurrent(snapshot.revision)
          ? 'evidence-changed'
          : 'stale-renderer',
      )
    }
    record.artifact = artifact
    record.cancelExpiry = this.scheduleExpiry(
      () => this.expire(record),
      DIAGNOSTIC_REPORT_RETENTION_HOURS * 60 * 60 * 1_000,
    )
    return success(artifact)
  }

  async capture(
    owner: RendererOwner,
    reportId: string,
    masks: readonly DiagnosticCaptureMask[],
  ): Promise<DiagnosticReportStateResult> {
    const record = this.current(owner, reportId)
    if (!record?.artifact)
      return failure(this.accepts(owner) ? 'report-not-found' : 'stale-renderer')
    const revision = ++record.revision
    const previous = record.artifact
    let screenshot: Awaited<ReturnType<DiagnosticReportActions['capture']>>
    try {
      screenshot = await this.actions.capture(owner, masks)
    } catch (error) {
      return failure(
        error instanceof ScreenshotTooLargeError ? 'report-too-large' : 'capture-failed',
      )
    }
    const artifact: DiagnosticReportArtifact = { report: previous.report, screenshot }
    if (!isDiagnosticReportArtifact(artifact)) return failure('report-too-large')
    if (!this.matches(record, revision)) return failure('stale-renderer')
    return this.commitCapture(record, revision, previous, artifact)
  }

  copy(owner: RendererOwner, reportId: string): DiagnosticReportActionResult {
    const record = this.current(owner, reportId)
    if (!record?.artifact)
      return failure(this.accepts(owner) ? 'report-not-found' : 'stale-renderer')
    try {
      this.actions.copy(
        serializeDiagnosticReportArtifact(record.artifact),
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts",
  "startLine": 930,
  "endLine": 1010
}
```

</details>

<details>
<summary>60 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts`. Lines 930 to 991 (991 lines total): 
```
    return
  }
  try {
    process.kill(-child.pid, 'SIGKILL')
  } catch (reason) {
    if ((reason as NodeJS.ErrnoException).code !== 'ESRCH') throw reason
  }
}

function fileChangedError(): Error {
  return new Error('File changed since it was opened; reload before saving')
}

function loadAtomicRenameBinding(): AtomicRenameBinding {
  if (process.platform !== 'darwin' && process.platform !== 'linux') {
    throw new Error('Atomic no-replace publication is unavailable on this platform')
  }
  const manifest = atomicRenameRequire(
    `${ATOMIC_RENAME_HELPER_PACKAGE}/package.json`,
  ) as {
    name?: unknown
    version?: unknown
  }
  if (
    manifest.name !== ATOMIC_RENAME_HELPER_PACKAGE ||
    manifest.version !== ATOMIC_RENAME_HELPER_VERSION
  ) {
    throw new Error('Atomic no-replace helper metadata does not match hvir')
  }
  const candidate = atomicRenameRequire(
    ATOMIC_RENAME_HELPER_PACKAGE,
  ) as Partial<AtomicRenameBinding>
  if (
    typeof candidate.metadata !== 'function' ||
    typeof candidate.renameNoReplace !== 'function' ||
    candidate.metadata() !== 'hvir.rename-noreplace.v1'
  ) {
    throw new Error('Atomic no-replace helper exports do not match hvir')
  }
  return candidate as AtomicRenameBinding
}

function atomicRenameError(errno: number): Error {
  let code = 'UNKNOWN'
  try {
    code = getSystemErrorName(-errno)
  } catch {
    // Preserve a closed error when the platform reports an unknown errno.
  }
  if (code === 'EEXIST' || code === 'ENOTEMPTY') {
    return new ProjectPathExistsError()
  }
  return Object.assign(new Error(`Atomic no-replace publication failed with ${code}`), {
    code,
  })
}

function watchCapacityError(error: Error): boolean {
  const code = (error as NodeJS.ErrnoException).code
  return code === 'EMFILE' || code === 'ENOSPC'
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/window/electron-window-manager.ts",
  "startLine": 200,
  "endLine": 280
}
```

</details>

<details>
<summary>81 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/window/electron-window-manager.ts`. Lines 200 to 280 (at least 280 lines total): 
```
    guest.on('will-prevent-unload', (event) => event.preventDefault())
    guest.on('devtools-opened', () => guest.closeDevTools())
    guest.on('before-input-event', (event, input) => {
      if (input.type !== 'keyDown' || input.isAutoRepeat) return
      const bindings = webPaneBindings.get(ownerId) ?? DEFAULT_KEYBINDINGS
      const primaryModifier = process.platform === 'darwin' ? input.meta : input.control
      let action: WebPaneCommandAction | undefined
      if (
        input.key.toLowerCase() === 'w' &&
        primaryModifier &&
        !input.alt &&
        !input.shift
      ) {
        action = 'closeWebPane'
      } else if (input.key === 'Escape' && fullPageWebPanes.get(ownerId) === paneId) {
        action = 'escapeWebPaneFocus'
      } else {
        action = (Object.entries(bindings) as [KeybindingAction, string][]).find(
          ([candidate, binding]) =>
            keybindingAvailableInContext(candidate, 'web-pane') &&
            matchesKeybinding(
              {
                key: input.key,
                code: input.code,
                ctrlKey: input.control,
                metaKey: input.meta,
                altKey: input.alt,
                shiftKey: input.shift,
              },
              binding,
              process.platform === 'darwin',
            ),
        )?.[0]
      }
      if (!action) return
      event.preventDefault()
      if (!dependencies.isRendererCurrent(rendererOwner)) return
      const owner = webContents.fromId(ownerId)
      if (owner && !owner.isDestroyed()) {
        sendRendererEvent(owner, 'web-pane:command', { paneId, action })
      }
    })
  }

  function createWindow(
    // Electron smoke injects an observer for resources outside the production scopes.
    discardExternalResources: (ownerId: number) => void = () => undefined,
  ): BrowserWindow {
    const win = new BrowserWindow(
      workbenchWindowOptions(join(__dirname, '../preload/index.js')),
    )
    const rendererUrl = process.env['ELECTRON_RENDERER_URL']
    const packagedEntry = join(__dirname, '../renderer/index.html')
    const entryUrl = rendererUrl ?? pathToFileURL(packagedEntry).href
    const ownerId = win.webContents.id
    let rendererOwner = dependencies.activateRenderer(ownerId)
    let rendererRevoked = false
    let committedDocument = false
    let hadUsableDocument = false
    const windowHealth = new WindowHealthTracker(dependencies.recordWindowHealth)

    win.on('focus', () => dependencies.setOwnerFocused(rendererOwner, true))
    win.on('blur', () => dependencies.setOwnerFocused(rendererOwner, false))

    win.on('ready-to-show', () => win.show())
    const rolloverRendererResources = (
      expectedOwner: RendererOwner,
    ): RendererOwner | undefined => {
      if (rendererRevoked || !dependencies.isRendererCurrent(expectedOwner)) {
        return undefined
      }
      discardExternalResources(ownerId)
      htmlPreviews.releaseOwner(expectedOwner)
      webPaneBindings.delete(ownerId)
      fullPageWebPanes.delete(ownerId)
      void webPaneRoutes
        .closeOwner(expectedOwner.id, expectedOwner.generation)
        .catch((error) => console.error('[web-pane] renderer cleanup failed', error))
      rendererOwner = dependencies.rolloverRenderer(expectedOwner)
      committedDocument = false
      return rendererOwner
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenarios.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>46 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenarios.ts`. Lines 1 to 48 (48 lines total): 
```
import { runSmoke } from '.'
import type { ElectronSmokeDependencies } from './bootstrap-contract'
import { runNativePtySmoke } from './native-pty'
import { SmokeInterruptionCheckpoint } from './interruption-checkpoint'
import {
  parseElectronSmokeScenario,
  type ElectronSmokeMode,
  type ElectronSmokeScenario,
} from './scenario-selection.mts'

export type ElectronSmokeScenarioDependencies = Omit<
  ElectronSmokeDependencies,
  'mode' | 'interruptionCheckpoint'
> & {
  readonly scenario: string | undefined
}

export async function runElectronSmokeScenario(
  dependencies: ElectronSmokeScenarioDependencies,
): Promise<number> {
  const { scenario: requestedScenario, ...rendererDependencies } = dependencies
  const scenario = parseElectronSmokeScenario(requestedScenario)
  const interruptionCheckpoint = SmokeInterruptionCheckpoint.fromEnvironment()
  try {
    if (scenario === 'pty-native') {
      return await runNativePtySmoke(
        rendererDependencies.projectRoot,
        interruptionCheckpoint,
      )
    }

    rendererDependencies.htmlPreviews.register()
    return await runSmoke({
      ...rendererDependencies,
      interruptionCheckpoint,
      mode: rendererMode(scenario),
    })
  } finally {
    interruptionCheckpoint.dispose()
  }
}

function rendererMode(
  scenario: Exclude<ElectronSmokeScenario, 'pty-native'>,
): ElectronSmokeMode {
  return scenario === 'diagnostic-report-restart' ? 'platform-contracts' : scenario
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenario-selection.mts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>50 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenario-selection.mts`. Lines 1 to 50 (50 lines total): 
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

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>193 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity.ts`. Lines 1 to 200 (at least 200 lines total): 
```
import { arch, cpus, platform, release, totalmem } from 'node:os'

import type { BrowserWindow } from 'electron'

import {
  asHarnessProfileId,
  type HarnessProviderId,
  type HostPath,
  type TerminalRecoverySession,
} from '../../shared'
import { LocalHost } from '../project-host'
import type { PtySupervisor } from '../pty/pty-supervisor'
import { startCapacityOutputFixtures } from './capacity-output-fixtures'
import { verifyCapacityLivePresentationUpdate } from './capacity-live-presentation'
import {
  activateCapacityTerminal,
  addCapacityTerminals,
  measureAdditionalTerminalReadiness,
  readTerminalPresentation,
  verifyHiddenPresentationSettles,
  verifyCapacityTerminalSearch,
  verifyCapacitySessionsTerminalDetail,
  verifyCapacityPaletteUpdate,
  verifyTerminalActivity,
  type TerminalActivityReport,
  type TerminalReadinessSampleReport,
} from './capacity-terminals'
import {
  median,
  sampleElectronProcessMetrics,
  type ElectronProcessMetricReport,
} from './electron-process-metrics'
import {
  CAPACITY_PERFORMANCE_BUDGETS,
  CAPACITY_PERFORMANCE_GATE_ENV,
  capacityPerformanceViolations,
  formatCapacityPerformanceViolation,
  parseCapacityPerformanceMode,
  type CapacityPerformanceMeasurements,
  type CapacityPerformanceMode,
} from './capacity-performance'

const CPU_SAMPLE_DURATION_MS = 30_000
const CPU_SAMPLE_COUNT = 3
const TERMINAL_READINESS_SAMPLE_COUNT = 10

interface CapacityCpuComparison {
  readonly baseline: readonly ElectronProcessMetricReport[]
  readonly twelveTerminals: readonly ElectronProcessMetricReport[]
  readonly baselineMedianRendererPlusGpu: number
  readonly twelveTerminalMedianRendererPlusGpu: number
  readonly ratio: number
}

interface CapacityTerminalReadinessComparison {
  readonly baseline: TerminalReadinessSampleReport
  readonly loaded: TerminalReadinessSampleReport
  readonly ratio: number
}

interface CapacitySmokeReport {
  readonly durationMs: number
  readonly frameGapsMs: readonly number[]
  readonly clickLatenciesMs: readonly number[]
  readonly p99Ms: number
  readonly maxMs: number
  readonly memoryStartKiB?: number
  readonly memoryEndKiB?: number
  readonly memoryPeakKiB?: number
  readonly memoryGrowthKiB?: number
  readonly processMetrics?: ElectronProcessMetricReport
  readonly idleCpu?: CapacityCpuComparison
  readonly terminalReadiness?: CapacityTerminalReadinessComparison
  readonly terminalActivity?: TerminalActivityReport
}

interface CapacitySourceEvidence {
  readonly commit: string
  readonly dirty: boolean | 'unknown'
}

export function capacityRecoverySessions(
  supervisor: PtySupervisor,
  providerId: HarnessProviderId,
): readonly TerminalRecoverySession[] {
  const template = supervisor.list()[0]
  if (!template) throw new Error('capacity recovery requires a terminal template')
  return Array.from({ length: 20 }, (_, position) => ({
    id: `capacity-recovery-${position}`,
    providerId,
    profileId: asHarnessProfileId('plain-shell-default'),
    launchRevision: 1,
    recoverySkipCount: 0,
    hostId: template.hostId,
    cwd: template.cwd,
    title: `Recovered capacity shell ${position + 1}`,
    position,
    active: position === 0,
    updatedAt: Date.now(),
  }))
}

export async function runCapacityRecoverySmoke(
  win: BrowserWindow,
  supervisor: PtySupervisor,
): Promise<void> {
  await win.webContents.executeJavaScript(
    `localStorage.setItem('hvir:terminal-recovery-mode', 'prompt')`,
  )
  const loaded = new Promise<void>((resolve) =>
    win.webContents.once('did-finish-load', () => resolve()),
  )
  win.webContents.reload()
  await withTimeout(loaded, 'capacity recovery reload timed out')
  const restored = (await withTimeout(
    win.webContents.executeJavaScript(`
      new Promise((resolve, reject) => {
        const deadline = Date.now() + 20000;
        const snapshot = () => {
          const rows = [...document.querySelectorAll('.terminal-list-row')];
          const surfaces = [...document.querySelectorAll('.terminal-surface')];
          return {
            dialog: Boolean(document.querySelector('.terminal-recovery-dialog')),
            rows: rows.length,
            surfaces: surfaces.length,
            dormant: document.querySelectorAll(
              '.terminal-list-row[data-terminal-dormant="true"]'
            ).length,
            activeStatus: document.querySelector('.terminal-surface.active')
              ?.getAttribute('data-terminal-status') || ''
          };
        };
        const fail = (message) => reject(
          new Error(message + ': ' + JSON.stringify(snapshot()))
        );
        const waitForDialog = () => {
          const dialog = document.querySelector('.terminal-recovery-dialog');
          const restore = [...(dialog?.querySelectorAll('button') || [])]
            .find((node) => node.textContent?.trim() === 'Restore selected');
          if (restore) {
            restore.click();
            return waitForTerminals();
          }
          if (Date.now() > deadline) return fail('capacity recovery dialog missing');
          setTimeout(waitForDialog, 25);
        };
        const waitForTerminals = () => {
          const current = snapshot();
          if (
            current.rows === 20 &&
            current.surfaces === 1 &&
            current.dormant === 19 &&
            current.activeStatus.startsWith('pid ')
          ) {
            return resolve(
              '20 restored rows · 1 activated PTY · 19 dormant'
            );
          }
          if (Date.now() > deadline) return fail('capacity terminals did not restore');
          setTimeout(waitForTerminals, 25);
        };
        waitForDialog();
      })
    `),
    'capacity recovery interaction timed out',
    25_000,
  )) as string
  await waitForSupervisorCount(supervisor, 1, 'lazy capacity recovery')

  const activated = (await withTimeout(
    win.webContents.executeJavaScript(`
      new Promise((resolve, reject) => {
        const deadline = Date.now() + 10000;
        const row = [...document.querySelectorAll(
          '.terminal-list-row[data-terminal-dormant="true"]'
        )].at(-1);
        const terminalId = row?.querySelector('.terminal-list-main')
          ?.getAttribute('data-terminal-session');
        if (!row || !terminalId) return reject(new Error('dormant recovery row missing'));
        row.querySelector('.terminal-list-main')?.click();
        document.querySelector('.rail-nav button:nth-child(2)')?.click();
        const snapshot = () => ({
          rowDormant: row.hasAttribute('data-terminal-dormant'),
          dormant: document.querySelectorAll(
            '.terminal-list-row[data-terminal-dormant="true"]'
          ).length,
          surfaces: document.querySelectorAll('.terminal-surface').length,
          surfaceStatus: document.querySelector(
            '.terminal-surface[data-terminal-session="' + CSS.escape(terminalId) + '"]'
          )?.getAttribute('data-terminal-status') || '',
          changesReady: [...document.querySelectorAll('.git-tabs button')]
            .some((node) => /^Changes \\(\\d+\\)$/.test(node.textContent?.trim() || '')),
          resumeAll: Boolean(document.querySelector('.terminal-resume-all-button'))
        });
        const poll = () => {
          const current = snapshot();
          if (
            !current.rowDormant &&
            current.dormant === 18 &&
            current.surfaces === 2 &&
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/harness-profile-workflow.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>200 lines</summary>

````
File: `/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/harness-profile-workflow.ts`. Lines 1 to 200 (at least 200 lines total): 
```
import type { BrowserWindow } from 'electron'
import { localPath, type HostPath } from '../../shared'
import type { ProjectHost } from '../project-host'
import {
  verifyCompactHarnessSettings,
  verifyHarnessManualProfilePointerActivation,
} from './harness-settings-layout'
import { captureHarnessSettingsVisuals } from './harness-settings-visual'

export async function verifyStructuredProfiles(
  win: BrowserWindow,
  smokeRoot: HostPath,
): Promise<void> {
  const profileSmoke = (await win.webContents.executeJavaScript(`
      (async () => {
        const root = ${JSON.stringify(smokeRoot)};
        const defaults = await window.hvir.invoke('harness:profiles', { root });
        const catalog = await window.hvir.invoke('harness:catalog', undefined);
        const requestedProviderIds = catalog
          .filter((provider) => provider.profileTemplate && !provider.default)
          .slice(0, 2)
          .map((provider) => provider.id);
        const customProviderId = catalog.find(
          (provider) => !provider.profileTemplate
        )?.id;
        if (!customProviderId) throw new Error('Custom provider was missing');
        const materialized = await window.hvir.invoke('harness:profile-materialize', {
          root,
          providerIds: [...requestedProviderIds].reverse()
        });
        const grant = await window.hvir.invoke('harness:authorize-path', {
          root,
          path: root
        });
        const profile = await window.hvir.invoke('harness:profile-save', {
          root,
          input: {
            displayName: 'Smoke custom harness',
            providerId: customProviderId,
            scope: { kind: 'project', projectRoot: root },
            executable: { kind: 'command', command: 'sh' },
            args: [
              { parts: [{ kind: 'literal', value: '-c' }] },
              { parts: [{ kind: 'literal', value: 'printf hvir-profile-smoke; exec /bin/sh' }] },
              { parts: [{ kind: 'path', source: 'binding', binding: 'workspace' }] }
            ],
            environment: [
              { kind: 'literal', name: 'HVIR_PROFILE_SMOKE', value: 'structured' }
            ],
            pathBindings: [
              { name: 'workspace', path: grant.path, grantId: grant.id }
            ],
            order: 20
          }
        });
        const preview = await window.hvir.invoke('harness:preview', {
          root,
          cwd: root,
          mode: 'fresh',
          profileId: profile.id,
          launchRevision: profile.launchRevision
        });
        return {
          defaultIds: defaults.map((candidate) => candidate.id),
          requestedProviderIds,
          materialized: materialized.map((candidate) => ({
            id: candidate.id,
            providerId: candidate.providerId,
            builtIn: candidate.builtIn,
            scope: candidate.scope.kind
          })),
          profile,
          preview,
          obsoleteRiskState:
            'risk' in profile ||
            'riskAcknowledgedRevision' in profile ||
            'risk' in preview
        };
      })()
    `)) as {
    defaultIds: readonly string[]
    requestedProviderIds: readonly string[]
    materialized: readonly {
      id: string
      providerId: string
      builtIn: boolean
      scope: string
    }[]
    profile: {
      id: string
      launchRevision: number
    }
    preview: { args: readonly string[]; command: string }
    obsoleteRiskState: boolean
  }
  if (
    profileSmoke.defaultIds.join(',') !== 'plain-shell-default' ||
    profileSmoke.materialized.map(({ providerId }) => providerId).join(',') !==
      profileSmoke.requestedProviderIds.join(',') ||
    profileSmoke.materialized.some(
      ({ id, builtIn, scope }) =>
        id.endsWith('-default') || builtIn || scope !== 'global',
    )
  ) {
    throw new Error(
      `opt-in harness profile materialization was incorrect (${JSON.stringify({
        defaultIds: profileSmoke.defaultIds,
        requestedProviderIds: profileSmoke.requestedProviderIds,
        materialized: profileSmoke.materialized,
      })})`,
    )
  }
  if (
    profileSmoke.obsoleteRiskState ||
    !profileSmoke.preview.args.includes(smokeRoot.path) ||
    !profileSmoke.preview.command.includes("HVIR_PROFILE_SMOKE='structured'")
  ) {
    throw new Error('structured Custom profile did not preserve preview semantics')
  }
  console.log('[smoke] structured profile catalog + preview OK')
}

export async function verifyHarnessProfileEditor(
  win: BrowserWindow,
  host: ProjectHost,
): Promise<void> {
  const manualProfileStatus = await verifyHarnessManualProfilePointerActivation(win)
  console.log(`[smoke] manual harness profile OK (${manualProfileStatus})`)

  const harnessRenameStatus = (await win.webContents.executeJavaScript(`
      new Promise((resolve, reject) => {
        document.querySelector(
          '.terminal-icon-button[aria-label="New terminal"]'
        )?.click();
        const waitForProfile = () => {
          const rows = [...document.querySelectorAll('.settings-profile-list button')];
          const source = rows.find((row) =>
            row.querySelector('strong')?.textContent?.trim() === 'Smoke custom harness'
          );
          if (!source) {
            return setTimeout(waitForProfile, 50);
          }
          if (rows.some((row) =>
            row.querySelector('strong')?.textContent?.trim() === 'Shell'
          )) return reject(new Error('Bare Shell remained in the management list'));
          const sourceDetail = source.querySelector('small')?.textContent || '';
          if (!sourceDetail.includes('This project')) {
            return reject(new Error('configured profile row omitted scope metadata'));
          }
          const dialog = document.querySelector('.settings-dialog');
          const heading = document.querySelector('#settings-harnesses-title');
          const active = dialog?.querySelector('[aria-current="page"]')?.textContent?.trim();
          const profileEditor = dialog?.querySelector('.settings-profile-editor');
          if (!dialog || !heading || active !== 'Harnesses')
            return reject(new Error('configure harnesses did not target its section'));
          if (!profileEditor || profileEditor.scrollHeight > profileEditor.clientHeight + 1)
            return reject(new Error('default harness profile requires scrolling'));
          const disclosures = [...profileEditor.querySelectorAll(
            '.settings-profile-disclosure'
          )];
          if (disclosures.length !== 2 || disclosures.some((details) => details.open)) {
            return reject(new Error('harness common/advanced/preview hierarchy is unclear'));
          }
          const beginProfileEdit = () => {
            source.click();
            requestAnimationFrame(() => {
            const before = document.querySelectorAll('.settings-profile-list button').length;
            const duplicate = [...document.querySelectorAll('.settings-profile-actions button')]
              .find((button) => button.textContent?.trim() === 'Duplicate');
            if (!duplicate) return reject(new Error('harness duplicate action missing'));
            duplicate.click();
            const waitForDuplicate = () => {
              const name = document.querySelector(
                '.settings-profile-grid label:first-child input'
              );
              const count = document.querySelectorAll('.settings-profile-list button').length;
              if (count > before && name?.value === 'Smoke custom harness copy') {
                Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
                  ?.set?.call(name, 'Smoke renamed harness');
                name.dispatchEvent(new Event('input', { bubbles: true }));
                return requestAnimationFrame(() => {
                  if (document.querySelector('.fatal-error')) {
                    return reject(new Error('harness rename escaped to the error boundary'));
                  }
                  if (name.value !== 'Smoke renamed harness') {
                    return reject(new Error('harness profile rename did not update'));
                  }
                  const argv = document.querySelector('.settings-profile-argv textarea');
                  if (!argv) return reject(new Error('harness argument editor missing'));
                  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')
                    ?.set?.call(argv, '--add-dir {binding:workspace}');
                  argv.dispatchEvent(new Event('input', { bubbles: true }));
                  const waitForArgumentPreview = () => {
                    const help = document.querySelector('#harness-arguments-help')
                      ?.textContent || '';
                    const previewDisclosure = document.querySelector(
                      '.settings-profile-preview-disclosure'
                    );
                    previewDisclosure.open = true;
                    const previews = [...document.querySelectorAll(
```
````

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/e01ee073/hvir/package.json:1-128
/private/var/tmp/ws/e01ee073/hvir/electron-builder.yml:1-72
/private/var/tmp/ws/e01ee073/hvir/electron-builder.ssh-acceptance.yml:1-17
/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-builder.ts:1-86
/private/var/tmp/ws/e01ee073/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts:1-200
/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/local-host.ts:930-991
/private/var/tmp/ws/e01ee073/hvir/src/main/window/electron-window-manager.ts:200-280
/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenarios.ts:1-48
/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/scenario-selection.mts:1-50
/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/capacity.ts:1-200
/private/var/tmp/ws/e01ee073/hvir/src/main/smoke/harness-profile-workflow.ts:1-200
\</final_answer>


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/package.json.**

/private/var/tmp/ws/e01ee073/hvir/package.json

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src.**

/private/var/tmp/ws/e01ee073/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/packages.**

/private/var/tmp/ws/e01ee073/hvir/packages

```
rename-noreplace
```


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/scripts.**

/private/var/tmp/ws/e01ee073/hvir/scripts

<details>
<summary>52 lines</summary>

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
```

</details>


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/test.**

/private/var/tmp/ws/e01ee073/hvir/test

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.github.**

/private/var/tmp/ws/e01ee073/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/LICENSE.**

/private/var/tmp/ws/e01ee073/hvir/LICENSE (lines 1-35)

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer

```
index.html
src
```


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main.**

/private/var/tmp/ws/e01ee073/hvir/src/main

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/shared.**

/private/var/tmp/ws/e01ee073/hvir/src/shared

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.github/workflows.**

/private/var/tmp/ws/e01ee073/hvir/.github/workflows

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/e01ee073/hvir/scripts/check-terminal-runtime.mts

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/build.**

/private/var/tmp/ws/e01ee073/hvir/build

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

<sub>28s</sub>

### `glob`

***.md**

"*.md"

```
./THIRD_PARTY_NOTICES.md
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
```


---

<sub>28s</sub>

### `glob`

****/*.md**

"**/*.md" in .github

```
No files matched the pattern.
```


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src

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

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/index.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts (lines 1-200)

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

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/e01ee073/hvir/.github/workflows/ci.yml (lines 1-180)

<details>
<summary>153 lines</summary>

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
```

</details>


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/e01ee073/hvir/.github/workflows/release.yml (lines 1-170)

<details>
<summary>157 lines</summary>

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
```

</details>


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/project-coordinator.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/project-coordinator.ts (lines 1-190)

<details>
<summary>176 lines</summary>

```
import { homedir } from 'node:os'

import {
  LOCAL_HOST_ID,
  asHostId,
  hostPath,
  type BrowseHostResponse,
  type ConnectedHost,
  type HostPath,
  type ProjectHostOption,
  type ProjectState,
  type RegisteredProjectState,
  type WorkspaceClosePlan,
} from '../shared'
import type { ProjectHost } from './project-host/project-host'
import type { ProjectWatchTarget } from './project-watch'
import type { WorkspaceRemovalPort } from './workspace-removal-coordinator'

export interface ProjectRegistryPort {
  readonly active: ProjectWatchTarget & { readonly workspaceId: string }
  state(): ProjectState
  projectById(projectId: string): RegisteredProjectState | undefined
  open(hostId: string, path: string): Promise<ProjectState>
  activate(projectId: string, workspaceId: string): Promise<ProjectState>
  closeProject(projectId: string): Promise<ProjectState>
  closeWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
  restoreWorkspaceAfterFailedClose(
    projectId: string,
    workspaceId: string,
  ): Promise<ProjectState>
  reopenWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
  acknowledgeWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
}

/** Host control is independent of registered project state and persistence. */
export interface ProjectHostControlPort {
  materializeHost(hostId: string): Promise<ProjectHost>
  hostById(hostId: string): ProjectHost | undefined
  listHosts(): readonly ProjectHostOption[]
  disconnectHost(hostId: string): Promise<ProjectHostOption>
}

export interface ProjectWorkspacePort {
  serialize<T>(operation: () => Promise<T>): Promise<T>
  refresh(projectId: string): Promise<ProjectState>
  replaceWatch(target?: ProjectWatchTarget): Promise<void>
  invalidateProject(projectId: string): void
  settleProject(projectId: string, obsoleteRefresh?: 'wait' | 'skip'): Promise<void>
}

export interface ProjectCleanupPort {
  revokeWorkspace(root: HostPath): Promise<void>
  closeWorkspaceWebPanes(root: HostPath): Promise<void>
  workspaceTerminalIds(root: HostPath): readonly string[]
  closeWorkspaceTerminals(root: HostPath): void
  forgetWorkspaceSessions(root: HostPath): Promise<void>
}

export interface ProjectHostControlDiagnostic {
  readonly operation: 'connect' | 'disconnect'
  readonly hostKind: 'local' | 'ssh'
}

export interface ProjectCoordinatorOptions {
  readonly registry: ProjectRegistryPort
  readonly hosts: ProjectHostControlPort
  readonly workspaces: ProjectWorkspacePort
  readonly cleanup: ProjectCleanupPort
  readonly removal: WorkspaceRemovalPort
  readonly onError?: (message: string, error: unknown) => void
  readonly onHostControlDiagnostic?: (event: ProjectHostControlDiagnostic) => void
}

interface Transition {
  readonly generation: number
  readonly projects: readonly string[]
}

/** Coordinates project transitions while ProjectRegistry remains the state authority. */
export class ProjectCoordinator {
  private transitionGeneration = 0

  constructor(private readonly options: ProjectCoordinatorOptions) {}

  connectHost(hostId: string): Promise<ConnectedHost> {
    const transition = this.beginTransition()
    return this.options.workspaces.serialize(async () => {
      this.assertCurrent(transition)
      await this.settleTransition(transition)
      this.assertCurrent(transition)
      const connected = await this.controlHost('connect', hostId, () =>
        this.connectAndSuggestPath(hostId),
      )
      this.assertCurrent(transition)
      if (this.options.registry.active.host.hostId === hostId) {
        await this.options.workspaces.replaceWatch(this.options.registry.active)
      }
      this.assertCurrent(transition)
      for (const project of this.options.registry.state().projects) {
        if (project.registeredRoot.hostId !== hostId) continue
        void this.options.workspaces
          .refresh(project.id)
          .catch((error) =>
            this.report(
              `[workspace] refresh after connect failed for ${project.id}`,
              error,
            ),
          )
      }
      return connected
    })
  }

  disconnectHost(hostId: string): Promise<ProjectHostOption> {
    const transition = this.beginTransition()
    return this.options.workspaces.serialize(async () => {
      this.assertCurrent(transition)
      await this.settleTransition(transition)
      this.assertCurrent(transition)
      const activeHost = this.options.registry.active.host.hostId === hostId
      const roots = this.options.registry
        .state()
        .projects.filter((project) => project.registeredRoot.hostId === hostId)
        .flatMap((project) => project.workspaces.map((workspace) => workspace.root))
      if (activeHost) await this.options.workspaces.replaceWatch()
      try {
        await Promise.all(roots.map((root) => this.options.cleanup.revokeWorkspace(root)))
        this.assertCurrent(transition)
        const disconnected = await this.controlHost('disconnect', hostId, () =>
          this.options.hosts.disconnectHost(hostId),
        )
        this.assertCurrent(transition)
        return disconnected
      } finally {
        if (
          activeHost &&
          this.isCurrent(transition) &&
          this.options.registry.active.host.connectionState === 'connected'
        ) {
          await this.options.workspaces.replaceWatch(this.options.registry.active)
        }
      }
    })
  }

  async browseHost(hostId: string, rawPath: string): Promise<BrowseHostResponse> {
    const generation = this.transitionGeneration
    const host = this.options.hosts.hostById(hostId)
    if (!host || host.connectionState !== 'connected') {
      throw new Error(`Connect to ${hostId} before browsing folders`)
    }
    if (!rawPath.startsWith('/')) throw new Error('Folder path must be absolute')
    try {
      const path = await host.realpath(hostPath(asHostId(hostId), rawPath))
      const stat = await host.stat(path)
      if (stat.type !== 'dir') throw new Error(`Not a directory: ${rawPath}`)
      const directories = (await host.readdir(path))
        .filter((entry) => entry.type === 'dir')
        .sort((left, right) => left.name.localeCompare(right.name))
      if (generation !== this.transitionGeneration) throw staleTransitionError()
      return { path, directories }
    } catch (reason) {
      const code = (reason as { code?: unknown } | undefined)?.code
      if (code === 2 || code === 'ENOENT')
        throw new Error(`Folder not found: ${rawPath}`, { cause: reason })
      if (code === 3 || code === 'EACCES')
        throw new Error(`Cannot access folder: ${rawPath}`, { cause: reason })
      throw reason
    }
  }

  openProject(hostId: string, path: string): Promise<ProjectState> {
    const transition = this.beginTransition()
    return this.options.workspaces.serialize(async () => {
      this.assertCurrent(transition)
      await this.settleTransition(transition)
      this.assertCurrent(transition)
      await this.options.registry.open(hostId, path)
      this.assertCurrent(transition)
      await this.options.workspaces.replaceWatch()
      const projectId = this.options.registry.active.projectId
      this.options.workspaces.invalidateProject(projectId)
      await this.options.workspaces.settleProject(projectId)
      const state = await this.options.workspaces.refresh(projectId).catch((error) => {
        this.report('[workspace] discovery after registration failed', error)
        return this.options.registry.state()
      })
      this.assertCurrent(transition)
      await this.options.workspaces.replaceWatch(this.options.registry.active)
      return state
```

</details>


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/project-host.**

/private/var/tmp/ws/e01ee073/hvir/src/main/project-host

<details>
<summary>21 lines</summary>

```
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
```

</details>


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx (lines 1-240)

<details>
<summary>240 lines</summary>

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
      restoreViewer()
    },
    deactivateWebPane: () => setWebViewActive(false),
  })
  const {
    graphOpen: gitGraphOpen,
    graphActive: gitGraphActive,
    graphActiveRef: gitGraphActiveRef,
    graphRequest: gitGraphRequest,
    openGraph: openGitGraph,
    activateGraph: activateGitGraph,
    closeGraph: closeGitGraph,
    resetGraph: resetGitGraph,
    deactivateGraph: deactivateGitGraph,
    switchBranch: switchGitBranch,
    fetch: fetchGit,
    pull: pullGit,
  } = git
  const terminalPathActivation = useTerminalPathActivation({
    root,
    selectedFile: activeTab?.path,
    openFile: (path, position) =>
      openFile(path, true, 'file-tree', 'head', undefined, position),
    revealDirectory: layout.focusTree,
  })
  rootRef.current = root
  sessionErrorRef.current = session.reportError
  workspaceSwitchRef.current = session.switchRelativeWorkspace
  restoreViewerRef.current = restoreViewer
  resetGitGraphRef.current = resetGitGraph
  deactivateGitGraphRef.current = deactivateGitGraph
  deactivateWebPaneRef.current = () => setWebViewActive(false)
  useEffect(() => {
    if (overlays.projectPickerOpen) void refreshHosts()
  }, [overlays.projectPickerOpen, refreshHosts])
  useEffect(() => {
    if (root) setWebWorkspaceRoot(root)
  }, [root, setWebWorkspaceRoot])
  useEffect(() => {
    if (activeWorkspace?.missing) resetGitGraph()
```

</details>


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workbench.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workbench

<details>
<summary>15 lines</summary>

```
ConfirmationDialog.tsx
TerminalLayoutControls.tsx
active-terminal-focus.ts
middle-click-close.ts
modal-keyboard-model.ts
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
```

</details>


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces

<details>
<summary>16 lines</summary>

```
ConnectionStatus.tsx
MissingWorkspaceNotice.tsx
ProjectsBar.tsx
SessionDialog.tsx
SshPromptDialog.tsx
WorkspaceCatalogDialogs.tsx
connection-status.ts
initial-host-connection.ts
project-folder-picker-client.ts
project-session-events.ts
project-session-model.ts
project-session.ts
project-state-delivery.ts
project-watch-interests.ts
workspace-attention.ts
workspace-session-actions.ts
```

</details>


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git

<details>
<summary>19 lines</summary>

```
GitBranchControls.tsx
GitChangesView.tsx
GitGraphLanes.tsx
GitGraphView.tsx
GitHistoryView.tsx
GitPanel.tsx
commit-detail-client.ts
commit-file-tree.ts
commit-message.ts
git-capability.ts
git-graph-lane-metrics.ts
git-graph-layout.ts
git-rail-model.ts
git-sync-coordinator.ts
git-sync-status.ts
use-git-commit-details.ts
use-git-rail-controller.ts
use-git-workspace.ts
virtual-range.ts
```

</details>


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/harness.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/harness

```
ProviderContextMeter.tsx
```


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/viewer.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/viewer

<details>
<summary>59 lines</summary>

```
DiffView.tsx
FileViewer.tsx
FindControl.tsx
GoToLineControl.tsx
LargeFileView.tsx
MarkdownFragment.tsx
RenderedView.tsx
RepositoryImageView.tsx
SourceView.tsx
TabStrip.tsx
code-scroll-anchor.ts
codemirror-find-target.ts
csv-parser.ts
csv-protocol.ts
csv.worker.ts
diff-policy.ts
dom-find-target.ts
external-document-context.ts
external-document-tabs.ts
highlight-protocol.ts
highlight-request.ts
highlight-worker.ts
highlight.worker.ts
json-protocol.ts
json.worker.ts
markdown-client.ts
markdown-extensions.ts
markdown-renderer.ts
markdown-repository-images.ts
markdown.worker.ts
render-protocol.ts
rendered-link-handler.ts
rendered-position.ts
retained-viewer-workspace-cache.ts
shiki-grammar-registry.ts
shiki-language-catalog.ts
shiki-language-names.ts
source-blame-gutter.ts
source-coordinate.ts
source-highlighting.ts
structured-data.ts
tab-state.ts
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
```

</details>


---

<sub>36s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal

<details>
<summary>69 lines</summary>

```
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
```

</details>


---

<sub>36s</sub>

### `rg`

**function projectRootArgument|function createWorkbenchEntry|--help|process\.argv|showOpenDialog**

"function projectRootArgument|function createWorkbenchEntry|--help|process\.argv|showOpenDialog" (src/main/index.ts)

```
/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts:52:function createWorkbenchEntry(): void {
/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts:176:        const selection = await dialog.showOpenDialog({
/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts:429:  function projectRootArgument(): string | undefined {
/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts:430:    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
```


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/index.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/index.ts (lines 365-490)

<details>
<summary>126 lines</summary>

```
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
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/project-registry.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/project-registry.ts (lines 1-240)

<details>
<summary>225 lines</summary>

```
import {
  asHostId,
  basenameHostPath,
  hostPathEquals,
  hostPath,
  localPath,
  type HostPath,
  type ProjectState,
  type RegisteredProjectState,
  type WorktreeDiscovery,
  type WorkspaceActivityResult,
  type WorkspaceActivitySnapshot,
  type WorkspaceState,
} from '../shared'
import type { Disposer, ProjectHost } from './project-host/project-host'
import {
  comparableWorkspaceActivity,
  validActivitySnapshot,
  workspaceActivityChanged,
  workspaceActivitySnapshot,
} from './workspace-activity'

export interface ActiveProject {
  readonly host: ProjectHost
  readonly root: HostPath
  readonly projectId: string
  readonly workspaceId: string
}

/** ProjectRegistry's consumer-owned view of the live host catalog. */
export interface ProjectRegistryHostCatalog {
  readonly local: ProjectHost
  hostById(hostId: string): ProjectHost | undefined
  materializeHost(hostId: string): Promise<ProjectHost>
  onHostStateChange(listener: () => void): Disposer
}

type WorkspaceRecord = WorkspaceState & {
  readonly activityBaseline?: WorkspaceActivitySnapshot
  readonly latestActivity?: WorkspaceActivitySnapshot
}

interface ProjectRecord {
  readonly id: string
  readonly registeredRoot: HostPath
  readonly displayName: string
  activeWorkspaceId: string
  discoveryBaselineEstablished: boolean
  workspaces: WorkspaceRecord[]
}

interface StoredProjectRegistry {
  readonly version: 3
  readonly activeProjectId: string
  readonly projects: readonly {
    readonly hostId: string
    readonly path: string
    readonly displayName: string
    readonly activeWorkspacePath: string
    readonly discoveryBaselineEstablished: boolean
    readonly workspaces: readonly {
      readonly path: string
      readonly head?: string
      readonly branch?: string
      readonly main: boolean
      readonly closed: boolean
      readonly missing: boolean
      readonly prunableReason?: string
      readonly repository: boolean
      readonly changedFiles: number
      readonly newlyDiscovered?: boolean
      readonly activityBaseline?: Omit<WorkspaceActivitySnapshot, 'root'>
    }[]
  }[]
}

const PROJECT_REGISTRY_VERSION = 3
const PREVIOUS_PROJECT_REGISTRY_VERSION = 2
const LEGACY_PROJECT_REGISTRY_VERSION = 1
const MAX_PROJECTS = 100
const MAX_WORKSPACES = 1_000

export class ProjectRegistry {
  private activeProject: ActiveProject
  private pendingWrite: Promise<void> = Promise.resolve()
  private stateRevision = 0
  private readonly stopHostState: Disposer
  private readonly stateListeners = new Set<() => void>()

  private constructor(
    private readonly hostCatalog: ProjectRegistryHostCatalog,
    initialRoot: HostPath,
    private readonly file: HostPath,
    private readonly projects: ProjectRecord[],
    private activeProjectId: string,
    private readonly onState: (state: ProjectState) => void,
  ) {
    const initialProject = projects[0] ?? createProject(initialRoot)
    if (projects.length === 0) projects.push(initialProject)
    const initialWorkspace = initialProject.workspaces[0]!
    this.activeProject = {
      host: hostCatalog.local,
      root: initialWorkspace.root,
      projectId: initialProject.id,
      workspaceId: initialWorkspace.id,
    }
    this.stopHostState = hostCatalog.onHostStateChange(() => this.publishState())
  }

  static async create(
    initialRoot: HostPath,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
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
      await registry.restoreActive()
      if (!stored || canonicalRoot) await registry.persist()
      return registry
    } catch (error) {
      await registry.dispose()
      throw error
    }
  }

  get active(): ActiveProject {
    return this.activeProject
  }

  state(): ProjectState {
    const activeHost = this.activeProject.host
    return {
      revision: this.stateRevision,
      root: this.activeProject.root,
      connectionState: activeHost.connectionState,
      watchTier: activeHost.watchTier,
      projects: this.projects.map((project) => this.rendererProject(project)),
      activeProjectId: this.activeProject.projectId,
      activeWorkspaceId: this.activeProject.workspaceId,
    }
  }

  projectById(projectId: string): RegisteredProjectState | undefined {
    const project = this.projects.find((candidate) => candidate.id === projectId)
    return project ? this.rendererProject(project) : undefined
  }

  observe(listener: () => void): Disposer {
    this.stateListeners.add(listener)
    return () => {
      this.stateListeners.delete(listener)
    }
  }

  /** Resolve only exact persisted workspace roots; no live host is required. */
  registeredWorkspaceRoot(candidate: HostPath): HostPath | undefined {
    return this.projects
      .flatMap((project) => project.workspaces)
      .find((workspace) => !workspace.closed && hostPathEquals(workspace.root, candidate))
      ?.root
  }

  authorityForPath(hostId: string, path: string): ActiveProject | undefined {
    const candidates = this.projects.flatMap((project) =>
      [
        { project, workspace: undefined, root: project.registeredRoot },
        ...project.workspaces.map((workspace) => ({
          project,
          workspace,
          root: workspace.root,
        })),
      ].filter(({ root }) =>
        root.hostId === hostId ? isInsidePath(path, root.path) : false,
      ),
    )
    const match = candidates.sort(
      (left, right) => right.root.path.length - left.root.path.length,
    )[0]
    if (!match) return undefined
    const host = this.hostCatalog.hostById(hostId)
    if (!host) return undefined
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/App.tsx (lines 240-520)

<details>
<summary>281 lines</summary>

```
    if (activeWorkspace?.missing) resetGitGraph()
  }, [activeWorkspace?.missing, resetGitGraph])
  useWorkbenchCommands(settings.keybindings, {
    enabled: destination === 'workspace',
    closeWebPane: closeWebView,
    escapeWebPaneFocus: () => setWebViewFocused(false),
    canUseViewerCommands: () => !gitGraphActiveRef.current && !webViewActiveRef.current,
    cycleViewMode: cycleActiveMode,
    findFile: layout.focusFilenameSearch,
    findInFile: viewerCommands.findInFile,
    findInTerminal: terminalWorkspaces.openTerminalSearch,
    goToLine: viewerCommands.goToLine,
    toggleTerminalFocus,
    focusTerminal: layout.focusTerminal,
    focusViewer: () => layout.focusViewer(getActivePane()),
    focusTree: layout.focusTree,
    switchWorkspace: (direction) => {
      setDestination('workspace')
      workspaceSwitchRef.current(direction)
    },
  })
  const revealSourceTerminal = async (view: WebViewState): Promise<void> => {
    const target = projectState?.projects
      .flatMap((project) =>
        project.workspaces.map((workspace) => ({ project, workspace })),
      )
      .find(({ workspace }) => hostPathEquals(workspace.root, view.workspaceRoot))
    if (!target) {
      session.reportError('The source workspace is no longer registered')
      return
    }
    if (!rootRef.current || !hostPathEquals(rootRef.current, view.workspaceRoot)) {
      await session.switchWorkspace(target.project.id, target.workspace.id)
    }
    window.requestAnimationFrame(() => {
      const source = [
        ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
      ].find((element) => element.dataset['terminalSession'] === view.sourceTerminalId)
      source?.click()
      source?.focus()
      if (!source) session.reportError('The source terminal has closed')
    })
  }
  if (rootError) return <div className="startup-error">{rootError}</div>
  if (!root) return <div className="startup-loading">Starting hvir…</div>
  const rootWebViews = webViews.filter((view) => hostPathEquals(view.workspaceRoot, root))
  const renderViewerPane = (
    pane: 'primary' | 'secondary',
    paneTabs: typeof primaryTabs,
    paneTab: typeof primaryActiveTab,
    graphPane: boolean,
  ): ReactElement => (
    <section
      className={`viewer-group viewer-group-${pane}`}
      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
      data-diagnostic-capture="viewer"
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
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-220)

<details>
<summary>217 lines</summary>

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
    if (!connectionMenu) return
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setConnectionMenu(undefined)
    }
    window.addEventListener('keydown', handleKeyDown)
    connectionMenuRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [connectionMenu])
  const canCloseWorkspace = (workspace: WorkspaceState): boolean =>
    !busy &&
    !workspace.missing &&
    workspace.id !== state.activeWorkspaceId &&
    planningWorkspaceId !== workspace.id
  const requestWorkspaceClose = (projectId: string, workspace: WorkspaceState): void => {
    if (!canCloseWorkspace(workspace)) return
    setPlanningWorkspaceId(workspace.id)
    void onPlanCloseWorkspace(projectId, workspace.id)
      .then((plan) => {
        if (!plan) return
        if (plan.terminalCount > 0) {
          setCloseWorkspaceRequest({
            projectId,
            workspaceId: workspace.id,
            plan,
          })
        } else {
          onCloseWorkspace(projectId, workspace.id, plan, false)
        }
      })
      .finally(() => setPlanningWorkspaceId(undefined))
  }
  return (
    <>
      <header className="projects-shell">
        <nav
          className="projects-bar"
          aria-label="Projects"
          data-diagnostic-capture="project-navigation"
        >
          <button
            type="button"
            className={`sessions-destination${sessionsActive ? ' active' : ''}`}
            aria-current={sessionsActive ? 'page' : undefined}
            onClick={onSessions}
          >
            Sessions
          </button>
          {state.projects.map((project) => {
            const active = !sessionsActive && project.id === state.activeProjectId
            const remote = project.registeredRoot.hostId !== 'local'
            const workspaceIds = project.workspaces.map((workspace) => workspace.id)
            const actionable = aggregateActionableWorkspaceAttention(
              workspaceIds,
              rollups,
            )
            const working = aggregateWorkingWorkspaceTerminals(workspaceIds, rollups)
            const showWorking = working > 0 && actionable === 0
            const title = projectTabTitle(project, working)
            const target = activeWorkspace(project)
            return (
              <div
                className={`project-tab${active ? ' active' : ''}`}
                key={project.id}
                title={title}
              >
                <button
                  type="button"
                  className="project-tab-main"
                  aria-current={active ? 'page' : undefined}
                  aria-label={projectTabLabel(project, actionable, working)}
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-220)

<details>
<summary>129 lines</summary>

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
  onChanges,
  connectionState = 'connected',
  hidden = false,
  historyPaused = false,
  hasDirtyViewerTabs,
  onSwitchBranch,
  onFetch,
  onPull,
  autoFetchIntervalMs,
}: GitPanelProps): ReactElement {
  const controller = useGitRailController({
    root,
    refreshVersion,
    historyRefreshVersion,
    onChanges,
    connectionState,
    hidden,
    historyPaused,
    hasDirtyViewerTabs,
    onSwitchBranch,
    onFetch,
    onPull,
    autoFetchIntervalMs,
  })
  const details = useGitCommitDetails(root)
  const { model } = controller

  return (
    <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
      <header className="panel-header">
        <span className="panel-meta">{basenameHostPath(root)}</span>
      </header>
      <GitBranchControls
        root={root}
        model={model}
        syncState={controller.syncState}
        onSwitchBranch={(branch) => void controller.switchBranch(branch)}
        onFetch={controller.fetch}
        onPull={controller.pull}
      />
      <div className="git-tabs">
        <button
          type="button"
          className={model.view === 'changes' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('changes')}
        >
          Changes {controller.changeCountLabel ? `(${controller.changeCountLabel})` : ''}
        </button>
        <button
          type="button"
          className={model.view === 'history' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('history')}
        >
          History
        </button>
      </div>
      <div
        className={`tree-scroll git-scroll${model.view === 'history' ? ' history-active' : ''}`}
      >
        {connectionState !== 'connected' ? (
          <div className="git-empty">Reconnect to inspect Git.</div>
        ) : model.view === 'changes' ? (
          <GitChangesView
            root={root}
            changes={model.changes}
            loading={model.changesLoading}
            error={model.changesError}
            onOpen={onOpenChange}
          />
        ) : (
          <GitHistoryView
            commits={model.commits}
            hasMore={model.hasMore}
            error={model.historyError}
            initialLoading={model.historyInitialLoading}
            repositoryState={model.historyRepositoryState}
            root={root}
            expanded={details.expanded}
            detailStates={details.detailStates}
            collapsedDirectories={details.collapsedDirectories}
            onOpenGraph={onOpenGraph}
            onOpenFile={onOpenHistory}
            onLoadMore={controller.loadMoreHistory}
            onToggleCommit={details.toggleCommit}
            onToggleDirectory={details.toggleDirectory}
          />
        )}
      </div>
    </section>
  )
}
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx (lines 1-220)

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

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/e01ee073/hvir/.github/workflows/release.yml (lines 171-390)

<details>
<summary>197 lines</summary>

```
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
```

</details>


---

<sub>45s</sub>

### `bash`

**Check origin and documentation paths**

$ git remote -v && git ls-files 'docs/**' 'README*' 'CONTRIBUTING*'

```

<shellId: 1 completed with exit code 0>
```


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/harness/harness-provider.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/harness/harness-provider.ts (lines 1-200)

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

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal/TerminalWorkspaceControls.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal/TerminalWorkspaceControls.tsx (lines 1-210)

<details>
<summary>142 lines</summary>

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
```

</details>


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-210)

<details>
<summary>201 lines</summary>

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
      setManualNavigation({
        ...coordinate,
        serial: (manualNavigationSerial.current -= 1),
        focus: true,
      })
      onMode('source', positionCapture.current?.())
    },
    [onMode],
  )
  const navigateReviewLine = useCallback(
    (line: number): void => navigate({ line }),
    [navigate],
  )
  const reviewInteraction = useDocumentReviewInteraction(
    tab?.file && !tab.file.binary && !tab.externalWorkspaceRoot
      ? {
          path: tab.path,
          content: tab.file.content,
          dirty: tab.dirty,
          mode: tab.mode,
        }
      : undefined,
    documentReview,
    navigateReviewLine,
  )

  const handleNavigation = (serial: number): void => {
    if (manualNavigation?.serial === serial) setManualNavigation(undefined)
    else onNavigationHandled(serial)
  }

  useEffect(() => {
    if (!tabId) return
    return registerCommands(tabId, {
      findInFile: () => setFindRequest((commandSerial.current += 1)),
      goToLine: () => setGoToLineRequest((commandSerial.current += 1)),
    })
  }, [registerCommands, tabId])

  useEffect(() => {
    if (!modeControlExpanded) return
    const collapseOutside = (event: PointerEvent): void => {
      if (
        event.target instanceof Node &&
        !modeControlRef.current?.contains(event.target)
      ) {
        setModeControlExpanded(false)
      }
    }
    document.addEventListener('pointerdown', collapseOutside, true)
    return () => document.removeEventListener('pointerdown', collapseOutside, true)
  }, [modeControlExpanded])

  return (
    <div className="viewer-body">
      {tab ? (
        <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
          {tab.conflict ? (
            <button className="conflict-badge" type="button" onClick={onReload}>
              Changed on disk · reload
            </button>
          ) : null}
          {tab.error && tab.file ? (
            <span className="viewer-operation-error" role="status" title={tab.error}>
              Save failed
            </span>
          ) : null}
          <div className="view-controls">
            {tab.externalWorkspaceRoot ? (
              <span className="external-document-status">
                Read-only · outside project
                <span
                  className="external-document-location"
                  title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
                >
                  {tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:
                  {tab.file?.resolvedPath?.path ?? tab.path.path}
                </span>
              </span>
            ) : null}
```

</details>


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-220)

<details>
<summary>205 lines</summary>

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
```

</details>


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/project-session.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/project-session.ts (lines 1-155)

<details>
<summary>139 lines</summary>

```
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'

import {
  unwrapOperation,
  type BrowseHostResponse,
  type ComposerSubmitMode,
  type ConnectedHost,
  type ProjectHostOption,
  type ProjectState,
  type WatchEvent,
} from '../../../shared'
import { initialHostConnectionTarget } from './initial-host-connection'
import { subscribeProjectSessionEvents } from './project-session-events'
import { ProjectStateDelivery } from './project-state-delivery'
import {
  initialProjectSessionModel,
  projectSessionReducer,
  selectActiveProject,
  selectActiveWorkspace,
  selectRelativeWorkspace,
} from './project-session-model'
import { createWorkspaceSessionActions } from './workspace-session-actions'
import { projectFolderPickerClient } from './project-folder-picker-client'

const WATCH_REFRESH_DELAY_MS = 250

interface ProjectSessionVersions {
  readonly watch: number
  readonly ignored: number
  readonly content: number
  readonly git: number
}

interface UseProjectSessionOptions {
  readonly composerSubmitMode: ComposerSubmitMode
  readonly onProjectState: (state: ProjectState) => void
  readonly onReloadFiles: () => void
  readonly onWatchEvent: (event: WatchEvent) => void
  readonly isIgnoreRulePath: (path: string) => boolean
}

export function useProjectSession(options: UseProjectSessionOptions) {
  const [model, dispatch] = useReducer(projectSessionReducer, initialProjectSessionModel)
  const [hosts, setHosts] = useState<readonly ProjectHostOption[]>([])
  const [rootError, setRootError] = useState<string>()
  const [versions, setVersions] = useState<ProjectSessionVersions>({
    watch: 0,
    ignored: 0,
    content: 0,
    git: 0,
  })
  const callbacks = useRef(options)
  const modelRef = useRef(model)
  const generation = useRef(0)
  const delivery = useRef<ProjectStateDelivery | undefined>(undefined)
  callbacks.current = options
  modelRef.current = model
  delivery.current ??= new ProjectStateDelivery((state) => {
    dispatch({ type: 'project-state', state })
    callbacks.current.onProjectState(state)
  })

  const acceptProjectState = useCallback((state: ProjectState): void => {
    delivery.current?.accept(state)
  }, [])

  const bumpVersions = useCallback((keys: readonly (keyof ProjectSessionVersions)[]) => {
    setVersions((current) => {
      const next = { ...current }
      for (const key of keys) next[key] += 1
      return next
    })
  }, [])

  const refreshWorkspaceContent = useCallback((): void => {
    bumpVersions(['watch', 'ignored', 'content', 'git'])
    callbacks.current.onReloadFiles()
  }, [bumpVersions])

  const refreshGit = useCallback((): void => {
    bumpVersions(['git'])
  }, [bumpVersions])

  const runTransition = useCallback(
    async (operation: () => Promise<ProjectState>): Promise<ProjectState | undefined> => {
      const currentGeneration = (generation.current += 1)
      dispatch({ type: 'transition-started', generation: currentGeneration })
      try {
        const state = await operation()
        if (generation.current !== currentGeneration) return undefined
        acceptProjectState(state)
        return state
      } catch (reason) {
        if (generation.current === currentGeneration) {
          dispatch({
            type: 'transition-failed',
            generation: currentGeneration,
            error: errorMessage(reason),
          })
        }
        return undefined
      } finally {
        dispatch({ type: 'transition-finished', generation: currentGeneration })
      }
    },
    [acceptProjectState],
  )

  const configureComposerSubmit = useCallback(async (hostId: string): Promise<void> => {
    await window.hvir.invoke('harness:configure-composer-submit', {
      scope: 'host',
      hostId,
      mode: callbacks.current.composerSubmitMode,
    })
  }, [])

  const configureComposerSubmitNonfatal = useCallback(
    async (hostId: string): Promise<void> => {
      await configureComposerSubmit(hostId).catch((reason) =>
        dispatch({ type: 'reported-error', error: errorMessage(reason) }),
      )
    },
    [configureComposerSubmit],
  )

  const connectHost = useCallback(
    async (hostId: string): Promise<ConnectedHost> => {
      const connected = unwrapOperation(
        await window.hvir.invoke('project:connect-host', { hostId }),
      )
      await configureComposerSubmitNonfatal(hostId)
      return connected
    },
    [configureComposerSubmitNonfatal],
  )

  const browseHost = useCallback(
    async (hostId: string, path: string): Promise<BrowseHostResponse> => {
      return unwrapOperation(
        await window.hvir.invoke('project:browse-host', { hostId, path }),
      )
    },
    [],
  )

  const disconnectHost = useCallback(
    async (hostId: string): Promise<ProjectHostOption> => {
      return unwrapOperation(
        await window.hvir.invoke('project:disconnect-host', { hostId }),
      )
    },
    [],
  )

  const openHost = useCallback(
```

</details>


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/SettingsDialog.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/SettingsDialog.tsx (lines 1-180)

<details>
<summary>134 lines</summary>

```
import { useCallback, useEffect, useRef, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import type { AppTheme } from '../theme'
import { ComposerSubmitConsentDialog } from './ComposerSubmitConsentDialog'
import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
import { SettingsActiveSection } from './SettingsActiveSection'
import { SettingsSectionNavigation } from './SettingsSectionNavigation'
import type { AppSettings } from './settings'
import {
  DEFAULT_SETTINGS_DESTINATION,
  settingsSectionHeadingId,
  type SettingsDestination,
} from './settings-navigation'
import { useSettingsController } from './use-settings-controller'

interface SettingsDialogProps {
  readonly theme: AppTheme
  readonly settings: AppSettings
  readonly onSave: (theme: AppTheme, settings: AppSettings) => void
  readonly onClose: () => void
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialDestination?: SettingsDestination
}

export function SettingsDialog({
  theme,
  settings,
  onSave,
  onClose,
  workspaceRoot,
  projectRoot,
  initialDestination = DEFAULT_SETTINGS_DESTINATION,
}: SettingsDialogProps): ReactElement {
  const dialog = useRef<HTMLElement>(null)
  const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
  const confirmSafeToLeaveHarnesses = useCallback(
    () => harnessProfiles.current?.confirmSafeToLeave() ?? Promise.resolve(true),
    [],
  )
  const controller = useSettingsController({
    theme,
    settings,
    initialDestination,
    confirmSafeToLeaveHarnesses,
    onSave,
    onClose,
  })
  const requestClose = controller.requestClose

  useEffect(() => {
    if (initialDestination.intent === 'add-harness') return
    const frame = window.requestAnimationFrame(() => {
      if (initialDestination.section === 'appearance') dialog.current?.focus()
      else
        document
          .getElementById(settingsSectionHeadingId(initialDestination.section))
          ?.focus()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [initialDestination])

  useEffect(() => {
    const keydown = (event: KeyboardEvent): void => {
      if (dialog.current?.querySelector('.modal-backdrop.nested')) return
      if (event.key === 'Escape' && !(event.target instanceof HTMLTextAreaElement)) {
        requestClose()
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [requestClose])

  const statusMessage = controller.validation?.message ?? controller.saveError

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog settings-dialog"
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        tabIndex={-1}
      >
        <header className="settings-shell-heading">
          <div>
            <span>Workbench preferences</span>
            <h2 id="settings-title">Settings</h2>
          </div>
          <p>Keep hvir focused, legible, and tuned to the way you work.</p>
        </header>
        <div className="settings-shell-body">
          <SettingsSectionNavigation
            activeSection={controller.activeSection}
            onSelect={controller.requestSection}
          />
          <div className="settings-content">
            <SettingsActiveSection
              activeSection={controller.activeSection}
              draft={controller.draft}
              validation={controller.validation}
              harnessProfiles={harnessProfiles}
              workspaceRoot={workspaceRoot}
              projectRoot={projectRoot}
              initialAddOpen={controller.initialAddOpen}
              onChange={controller.updateDraft}
              onComposerSubmitMode={controller.requestComposerSubmitMode}
            />
          </div>
        </div>
        <footer className="settings-footer">
          <div className="settings-footer-status" aria-live="polite">
            {statusMessage ? (
              <p className="dialog-error" role="alert">
                {statusMessage}
              </p>
            ) : (
              <span>App preferences apply together when saved.</span>
            )}
          </div>
          <div className="dialog-actions">
            <button type="button" onClick={controller.requestClose}>
              Close settings
            </button>
            <button type="button" onClick={() => void controller.save()}>
              Save app settings
            </button>
          </div>
        </footer>
      </section>
      {controller.composerConsentOpen ? (
        <ComposerSubmitConsentDialog
          onCancel={controller.cancelComposerConsent}
          onConfirm={controller.confirmComposerConsent}
        />
      ) : null}
    </div>
  )
}
```

</details>


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/build/native.**

/private/var/tmp/ws/e01ee073/hvir/build/native

```
hvir-command
```


---

<sub>57s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.prettierignore.**

/private/var/tmp/ws/e01ee073/hvir/.prettierignore

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

<sub>1m 9s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-200)

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

<sub>1m 9s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/harness/providers/claude-code.ts (lines 1-130)

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

<sub>1m 9s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/harness/providers/codex.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/harness/providers/codex.ts (lines 1-125)

<details>
<summary>117 lines</summary>

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
```

</details>


---

<sub>1m 9s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx (lines 1-140)

<details>
<summary>135 lines</summary>

```
import { forwardRef, useImperativeHandle, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import { HarnessProfileEditor } from './HarnessProfileEditor'
import { HarnessProfileOverlays } from './HarnessProfileOverlays'
import { findProfileProbe, harnessProbeLabel } from './harness-profile-editor-policy'
import { SettingsSection } from './SettingsSection'
import { useHarnessProfileEditor } from './use-harness-profile-editor'

interface HarnessProfilesSettingsProps {
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialAddOpen?: boolean
}

export interface HarnessProfilesSettingsHandle {
  /** Resolves after the user saves, discards, or cancels an outstanding profile draft. */
  readonly confirmSafeToLeave: () => Promise<boolean>
}

export const HarnessProfilesSettings = forwardRef<
  HarnessProfilesSettingsHandle,
  HarnessProfilesSettingsProps
>(function HarnessProfilesSettings(
  { workspaceRoot, projectRoot, initialAddOpen = false },
  ref,
): ReactElement {
  const editor = useHarnessProfileEditor({
    workspaceRoot,
    projectRoot,
    initialAddOpen,
  })
  useImperativeHandle(ref, () => ({ confirmSafeToLeave: editor.confirmSafeToLeave }), [
    editor.confirmSafeToLeave,
  ])
  const actions =
    workspaceRoot && projectRoot ? (
      <div className="settings-harness-actions">
        <button
          type="button"
          disabled={editor.busy || editor.loadState !== 'ready'}
          onClick={() => editor.probeAvailability(editor.profiles, true)}
        >
          Refresh availability
        </button>
        <button
          type="button"
          disabled={editor.busy || editor.loadState !== 'ready' || !editor.shellProvider}
          onClick={() => editor.runAfterDraftGuard(editor.startShellProfile)}
        >
          Add a shell
        </button>
        <button
          type="button"
          disabled={
            editor.busy || editor.loadState !== 'ready' || editor.providers.length === 0
          }
          onClick={() => editor.runAfterDraftGuard(() => editor.setAddOpen(true))}
        >
          Add a harness…
        </button>
      </div>
    ) : null

  return (
    <SettingsSection
      section="harnesses"
      title="Harnesses"
      description="Configure structured launch profiles, availability, and recovery identity."
      actions={actions}
      className="settings-harnesses"
    >
      {!workspaceRoot || !projectRoot ? (
        <div className="settings-section-scroll settings-harness-state">
          <p>Open a project to configure harnesses.</p>
        </div>
      ) : editor.loadState === 'loading' ? (
        <div
          className="settings-section-scroll settings-harness-state"
          aria-live="polite"
        >
          <p>Loading harness providers…</p>
        </div>
      ) : editor.loadState === 'error' ? (
        <div className="settings-section-scroll settings-harness-state" role="alert">
          <p>Harness profiles could not be loaded.</p>
          {editor.error ? <p className="dialog-error">{editor.error}</p> : null}
          <button type="button" onClick={editor.reload}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="settings-harness-layout">
            <nav className="settings-profile-list" aria-label="Harness profiles">
              {editor.profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  className={editor.draft?.id === profile.id ? 'active' : undefined}
                  aria-current={editor.draft?.id === profile.id ? 'true' : undefined}
                  onClick={() => editor.selectProfile(profile)}
                >
                  <strong>{profile.displayName}</strong>
                  <small>
                    {editor.providers.find(
                      (candidate) => candidate.id === profile.providerId,
                    )?.displayName ?? profile.providerId}
                    {' · '}
                    {profile.scope.kind === 'global' ? 'All projects' : 'This project'}
                    {' · '}
                    {editor.pendingProbeIds.has(profile.id)
                      ? 'Checking…'
                      : harnessProbeLabel(
                          findProfileProbe(
                            editor.profileProbes,
                            profile,
                            workspaceRoot.hostId,
                          ),
                        )}
                  </small>
                </button>
              ))}
              {editor.draft && !editor.draft.id ? (
                <button type="button" className="active" aria-current="true">
                  <strong>{editor.draft.input.displayName || 'Untitled profile'}</strong>
                  <small>
                    {editor.provider?.displayName ?? editor.draft.input.providerId}
                    {' · '}
                    {editor.draft.input.scope.kind === 'global'
                      ? 'All projects'
                      : 'This project'}
                    {' · Unsaved'}
                  </small>
                </button>
              ) : null}
            </nav>
            {editor.draft ? (
              <HarnessProfileEditor
                draft={editor.draft}
```

</details>


---

<sub>1m 9s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/viewer/RenderedView.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/viewer/RenderedView.tsx (lines 1-170)

<details>
<summary>162 lines</summary>

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
        registerFindTarget={registerFindTarget}
      />
    )
  }
  if (type === 'mermaid') {
    return (
      <StandaloneMermaid
        content={content}
        renderGeneration={renderGeneration}
        theme={theme}
        registerFindTarget={registerFindTarget}
      />
    )
  }
  if (type === 'markdown') {
    return (
      <MarkdownView
        path={path}
        content={content}
        position={position}
        onPosition={onPosition}
        positionCapture={positionCapture}
        onOpenPath={onOpenPath}
        renderGeneration={renderGeneration}
        refresh={refresh}
        onDependencies={onDependencies}
        theme={theme}
        registerFindTarget={registerFindTarget}
        documentReview={documentReview}
      />
    )
  }
  return <div className="viewer-empty">No rendered view for this file type</div>
}

function CsvView({
  content,
  position,
  onPosition,
  positionCapture,
  renderGeneration,
  registerFindTarget,
}: {
  readonly content: string
  readonly position: ViewerDocumentPosition
```

</details>


---

<sub>1m 9s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/project-host-catalog.ts (lines 1-180)

<details>
<summary>164 lines</summary>

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
```

</details>


---

<sub>1m 9s</sub>

### `rg`

**git|node|npm|python|Xcode|build-essential**

"git|node|npm|python|Xcode|build-essential" (.github/workflows/ci.yml)

<details>
<summary>37 matches</summary>

```
[grep content: 35 matches across 1 file(s) under /private/var/tmp/ws/e01ee073/hvir/.github/workflows]

ci.yml (35 match(es)):
  13:   group: ci-${{ github.event.pull_request.number || github.ref }}
  20:       github.event_name == 'pull_request' &&
  21:       github.actor == 'github-actions[bot]' &&
  22:       github.event.pull_request.user.login == 'github-actions[bot]' &&
  23:       github.event.pull_request.base.ref == github.event.repository.default_branch &&
  24:       github.event.pull_request.head.repo.full_name == github.repository &&
  25:       startsWith(github.event.pull_request.head.ref, 'release/v')
  36:           ref: ${{ github.event.pull_request.base.sha }}
  40:             scripts/release-github-evidence.mts
  44:         uses: actions/setup-node@v7
  46:           node-version: 24
  51:           GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
  52:           GITHUB_TOKEN: ${{ github.token }}
  53:           RELEASE_PR_HEAD_SHA: ${{ github.event.pull_request.head.sha }}
  55:           RELEASE_PR_NUMBER: ${{ github.event.pull_request.number }}
  56:           RELEASE_SOURCE_SHA: ${{ github.event.pull_request.head.sha }}
  57:         run: node scripts/validate-release-pr.mts
  79:         uses: actions/setup-node@v7
  81:           node-version: 24
  85:         run: npm ci
  89:           HVIR_REPO_TOKEN: ${{ github.token }}
  90:         run: npm run verify
  104:         uses: actions/setup-node@v7
  106:           node-version: 24
  110:         run: npm ci
  115:         run: xvfb-run -a npm run smoke
  120:         run: xvfb-run -a npm run smoke:development-performance
  123:         run: xvfb-run -a npm run smoke:isolation
  129:           name: ci-electron-smoke-failure-${{ github.run_attempt }}
  148:         uses: actions/setup-node@v7
  150:           node-version: 24
  154:         run: npm ci
  159:         run: npm run smoke:macos:ci
  165:           name: ci-macos-electron-smoke-failure-${{ github.run_attempt }}
  187:         uses: github/codeql-action/init@v4.37.9
```

</details>


---

<sub>1m 16s</sub>

### `rg`

**HVIR_REPO_TOKEN|GITHUB_TOKEN|no git|origin|remote|token**

"HVIR_REPO_TOKEN|GITHUB_TOKEN|no git|origin|remote|token" (scripts/architecture-github.mts)

<details>
<summary>9 matches</summary>

```
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:44:export function githubAdapter(token: string | undefined) {
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:45:  if (!token)
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:52:      token,
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:63:          Authorization: `******
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:77:  return { request, issue, token }
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:106:  const origin = git(root, ['remote', 'get-url', 'origin'])
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:112:    ].includes(origin)
/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-github.mts:209:  const evidence = await loadReleaseCiEvidence(RELEASE_REPOSITORY, epic, merge, api.token)
```

</details>


---

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/scripts/architecture-hotspots.mjs.**

/private/var/tmp/ws/e01ee073/hvir/scripts/architecture-hotspots.mjs (lines 1-140)

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()

```


---

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/e01ee073/hvir/scripts/check-adrs.mjs (lines 1-100)

<details>
<summary>92 lines</summary>

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
```

</details>


---

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/.gitignore.**

/private/var/tmp/ws/e01ee073/hvir/.gitignore (lines 1-115)

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

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/ssh-config.ts (lines 1-155)

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

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx (lines 1-135)

<details>
<summary>41 lines</summary>

```
import type { ReactElement } from 'react'

import type {
  ProjectState,
  SessionsLivePtyQualifier,
  SessionsTerminalHandle,
  SessionsWorkspaceQualifier,
} from '../../../shared'
import type { SessionsRendererObservationPort } from './sessions-renderer-observation'
import type { SessionsTerminalSurfacePort } from './sessions-terminal-surface'
import { SessionsOverview } from './SessionsOverview'

interface SessionsDestinationRuntime {
  readonly sessionsObservation: SessionsRendererObservationPort
  readonly sessionsSurface: SessionsTerminalSurfacePort
  readonly focusProjectedSession: (
    handle: SessionsTerminalHandle,
    workspaceQualifier: SessionsWorkspaceQualifier,
    livePty: SessionsLivePtyQualifier,
  ) => Promise<boolean>
}

export function SessionsApplicationDestination({
  active,
  runtime,
  onOpened,
  onError,
}: {
  readonly active: boolean
  readonly runtime: SessionsDestinationRuntime
  readonly onOpened: (state: ProjectState) => void
  readonly onError: (message: string) => void
}): ReactElement | null {
  if (!active) return null
  return (
    <SessionsOverview
      observation={runtime.sessionsObservation}
      surface={runtime.sessionsSurface}
      onOpened={onOpened}
      onFocusOpened={runtime.focusProjectedSession}
      onOpenFailed={onError}
    />
  )
}
```

</details>


---

<sub>1m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 215-390)

<details>
<summary>176 lines</summary>

```
              >
                <button
                  type="button"
                  className="project-tab-main"
                  aria-current={active ? 'page' : undefined}
                  aria-label={projectTabLabel(project, actionable, working)}
                  disabled={busy || !target}
                  onClick={() => target && onSwitch(project.id, target.id)}
                  title={title}
                >
                  <strong className={showWorking ? 'project-name-working' : undefined}>
                    {project.displayName}
                  </strong>
                  {remote && !active ? (
                    <RemoteConnectionBadge
                      state={project.connectionState}
                      hostLabel={`ssh:${project.registeredRoot.hostId}`}
                      compact
                    />
                  ) : null}
                  {actionable > 0 ? <AttentionCount count={actionable} /> : null}
                </button>
                {remote && active ? (
                  <button
                    type="button"
                    className="project-connection-trigger"
                    disabled={busy}
                    aria-haspopup="dialog"
                    aria-expanded={connectionMenu?.projectId === project.id}
                    aria-label={`Connection controls for ssh:${project.registeredRoot.hostId} · ${connectionStateLabel(project.connectionState)}`}
                    title="Connection controls"
                    onClick={(event) => {
                      if (connectionMenu?.projectId === project.id) {
                        setConnectionMenu(undefined)
                        return
                      }
                      const bounds = event.currentTarget.getBoundingClientRect()
                      setConnectionMenu({
                        projectId: project.id,
                        left: Math.max(8, Math.min(bounds.left, window.innerWidth - 248)),
                        top: bounds.bottom + 4,
                      })
                    }}
                  >
                    <RemoteConnectionBadge
                      state={project.connectionState}
                      hostLabel={`ssh:${project.registeredRoot.hostId}`}
                      compact
                    />
                    <span className="project-connection-chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                ) : null}
                <button
                  type="button"
                  className="project-close"
                  disabled={busy || state.projects.length <= 1}
                  onClick={() => setCloseProjectId(project.id)}
                  aria-label={`Close project ${project.displayName}`}
                  title={
                    state.projects.length <= 1
                      ? 'Register another project before closing this one'
                      : `Close project ${project.displayName}`
                  }
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
            title={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          </button>
          <button
            type="button"
            className="settings-toggle"
            aria-label="Open settings"
            title="Settings"
            onClick={onSettings}
          >
            <span aria-hidden="true">⚙</span>
          </button>
          <span className="projects-bar-spacer" />
        </nav>
        {activeProject && showWorkspacesBar && !sessionsActive ? (
          <nav
            className="workspaces-bar"
            aria-label="Workspaces"
            data-diagnostic-capture="project-navigation"
          >
            {openWorkspaces.map((workspace) => (
              <div
                className={`workspace-tab${!sessionsActive && workspace.id === state.activeWorkspaceId ? ' active' : ''}${workspace.missing ? ' missing' : ''}`}
                key={workspace.id}
                title={workspaceStatusTitle(workspace)}
                onMouseDown={(event) => {
                  if (canCloseWorkspace(workspace)) {
                    guardMiddleClickClosePointerDown(event)
                  }
                }}
                onAuxClick={(event) => {
                  if (!canCloseWorkspace(workspace)) return
                  closeOnMiddleClick(event, () =>
                    requestWorkspaceClose(activeProject.id, workspace),
                  )
                }}
              >
                <button
                  type="button"
                  disabled={busy || workspace.missing}
                  onClick={() => onSwitch(activeProject.id, workspace.id)}
                  title={workspaceStatusTitle(workspace)}
                >
                  <span>{workspace.name}</span>
                  {workspace.main ? <small>project root</small> : null}
                  {workspace.prunableReason ? <small>prunable</small> : null}
                  {workspaceActionableAttention(workspace.id, rollups) > 0 ? (
                    <AttentionCount
                      count={workspaceActionableAttention(workspace.id, rollups)}
                    />
                  ) : null}
                </button>
                {!workspace.missing ? (
                  <button
                    type="button"
                    className="workspace-close"
                    disabled={!canCloseWorkspace(workspace)}
                    onClick={() => requestWorkspaceClose(activeProject.id, workspace)}
                    aria-label={`Close workspace ${workspace.name}`}
                    title={
                      workspace.id === state.activeWorkspaceId
                        ? 'Select another workspace before closing this one'
                        : `Close workspace ${workspace.name}`
                    }
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                ) : !workspace.prunableReason ? (
                  <button
                    type="button"
                    className="workspace-dismiss"
                    disabled={busy}
                    onClick={() => onDismiss(activeProject.id, workspace.id)}
                    aria-label={`Dismiss removed workspace ${workspace.name}`}
                    title="Forget removed worktree from hvir"
                  >
                    ×
                  </button>
                ) : null}
              </div>
            ))}
            <div className="workspaces-actions">
              {statusError ? (
                <span className="workspace-status-error" title={statusError}>
                  {statusError}
                </span>
              ) : null}
              {prunable.length > 0 ? (
```

</details>


---

<sub>1m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal/TerminalRail.tsx.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/terminal/TerminalRail.tsx (lines 1-210)

<details>
<summary>206 lines</summary>

```
import type { ReactElement } from 'react'

import type {
  HarnessProfile,
  HarnessProfileProbe,
  HarnessProviderDescriptor,
  HarnessProviderId,
  WorkspaceState,
} from '../../../shared'
import { terminalAttentionBadgeText, terminalAttentionLabel } from './terminal-attention'
import {
  compactHarnessCapabilityLabel,
  type HarnessLaunchMenuState,
} from './harness-launch-menu'
import { TerminalContextMeter } from './TerminalContextMeter'
import { TerminalRailCompact } from './TerminalRailCompact'
import type { TerminalSession } from './terminal-workspace-model'
import { useTerminalLaunchMenuLayout } from './use-terminal-launch-menu-layout'

export interface TerminalLaunchMenuEntry {
  readonly profile: HarnessProfile
  readonly provider?: HarnessProviderDescriptor
  readonly state: HarnessLaunchMenuState
}

export function TerminalRail({
  label,
  visible,
  compact,
  onCompact,
  terminalTheme,
  recoveryReady,
  available,
  menuOpen,
  moveMenuOpen,
  moveTargets,
  launchMenuEntries,
  split,
  sessions,
  activeId,
  providers,
  profiles,
  onSplit,
  onOpenSettings,
  onToggleMenu,
  onToggleMoveMenu,
  onPlanMove,
  onDismissNewTargets,
  onAddSession,
  onAddHarness,
  onRefreshProbes,
  onOpenHarnessSettings,
  onFocusSession,
  onMoveSession,
  onCloseSession,
}: {
  readonly label: string
  readonly visible: boolean
  readonly compact: boolean
  readonly onCompact: (compact: boolean) => void
  readonly terminalTheme: string
  readonly recoveryReady: boolean
  readonly available: boolean
  readonly menuOpen: boolean
  readonly moveMenuOpen: boolean
  readonly moveTargets: readonly WorkspaceState[]
  readonly launchMenuEntries: readonly TerminalLaunchMenuEntry[]
  readonly split: boolean
  readonly sessions: readonly TerminalSession[]
  readonly activeId?: string
  readonly providers: readonly HarnessProviderDescriptor[]
  readonly profiles: readonly HarnessProfile[]
  readonly onSplit: () => void
  readonly onOpenSettings: () => void
  readonly onToggleMenu: () => void
  readonly onToggleMoveMenu: () => void
  readonly onPlanMove: (target: WorkspaceState) => void
  readonly onDismissNewTargets: () => void
  readonly onAddSession: (profile: HarnessProfile) => void
  readonly onAddHarness: () => void
  readonly onRefreshProbes: () => void
  readonly onOpenHarnessSettings: () => void
  readonly onFocusSession: (id: string) => void
  readonly onMoveSession: (id: string) => void
  readonly onCloseSession: (id: string) => void
}): ReactElement {
  const { menuRef: launchMenuRef, menuStyle: launchMenuStyle } =
    useTerminalLaunchMenuLayout(menuOpen)
  const applyCompact = (next: boolean): void => {
    if (next && menuOpen) onToggleMenu()
    if (next && moveMenuOpen) onToggleMoveMenu()
    onCompact(next)
  }

  return (
    <aside
      className="terminal-rail"
      aria-label={`Open terminals in ${label}`}
      data-terminal-theme={terminalTheme}
      data-diagnostic-capture="terminal"
      hidden={!visible}
    >
      <header className="terminal-rail-header" hidden={compact}>
        <span>Terminals</span>
        <div className="terminal-header-actions">
          <button
            type="button"
            className="terminal-icon-button terminal-rail-collapse"
            aria-label="Collapse terminal rail"
            title="Collapse terminal rail"
            onClick={() => applyCompact(true)}
          >
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="M4.5 3 9 8l-4.5 5M8.5 3 13 8l-4.5 5" />
            </svg>
          </button>
          <div className="terminal-move-control">
            <button
              type="button"
              className={`terminal-icon-button terminal-workspace-move-button${moveTargets.some((target) => target.newlyDiscovered) ? ' has-new-target' : ''}`}
              aria-label={
                moveTargets.some((target) => target.newlyDiscovered)
                  ? 'Move terminal, new worktree available'
                  : 'Move terminal to another worktree'
              }
              title="Move active terminal to another worktree"
              aria-haspopup="menu"
              aria-expanded={moveMenuOpen}
              disabled={
                !recoveryReady || !available || !activeId || moveTargets.length === 0
              }
              onClick={onToggleMoveMenu}
            >
              ⇱
              {moveTargets.some((target) => target.newlyDiscovered) ? (
                <span className="terminal-new-worktree-badge">new</span>
              ) : null}
            </button>
            {moveMenuOpen && activeId ? (
              <div className="terminal-move-menu" role="menu">
                <p>
                  Move{' '}
                  <strong>
                    {sessions.find((session) => session.id === activeId)?.title}
                  </strong>{' '}
                  from {label}
                </p>
                {moveTargets.map((target) => (
                  <button
                    key={target.id}
                    type="button"
                    role="menuitem"
                    onClick={() => onPlanMove(target)}
                  >
                    <span>
                      <strong>{target.name}</strong>
                      {target.newlyDiscovered ? <em>New</em> : null}
                    </span>
                    <small>{target.root.path}</small>
                  </button>
                ))}
                {moveTargets.some((target) => target.newlyDiscovered) ? (
                  <div className="terminal-move-menu-actions">
                    <button type="button" role="menuitem" onClick={onDismissNewTargets}>
                      Dismiss new-worktree indicator
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            className="terminal-icon-button terminal-split-button"
            aria-label="Split terminal"
            title="Open a shell in the other terminal split"
            disabled={!recoveryReady || !available}
            onClick={onSplit}
          >
            ◫
          </button>
          <button
            type="button"
            className="terminal-icon-button terminal-settings-button"
            aria-label="Open settings"
            title="Settings"
            onClick={onOpenSettings}
          >
            ⚙
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
```

</details>


---

<sub>1m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/project-host/project-host-catalog.ts (lines 180-255)

<details>
<summary>38 lines</summary>

```
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
```

</details>


---

<sub>1m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/renderer/src/settings/settings-navigation.ts (lines 1-155)

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

<sub>1m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/e01ee073/hvir/src/main/application-runtime.ts (lines 1-120)

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

<sub>1m 37s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/src/workers.**

/private/var/tmp/ws/e01ee073/hvir/src/workers

```
echo-worker.ts
git-worker.ts
```


---

<sub>1m 51s</sub>

### Copilot

The app supports local and SSH projects, Git worktrees, file viewing, and terminal-based workflows. I’ll document those features alongside the source setup and the installer targets defined in the build scripts.

---

<sub>1m 57s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for local and SSH-hosted projects and Git worktrees. It\n+brings file browsing, Git, and terminal-based workflows together in one Electron app.\n+\n+## Features\n+\n+- Register local folders or SSH projects using aliases from `~/.ssh/config`, and\n+  switch between projects and discovered Git worktrees.\n+- Browse and edit files, inspect source and diffs, and preview Markdown, Mermaid,\n+  images, HTML, JSON, YAML, and CSV.\n+- Inspect Git changes, history, and the commit graph; switch branches, fetch, and\n+  pull.\n+- Run split shell terminals or configured CLI harnesses, with a Sessions view and\n+  recovery for supported agent sessions.\n+\n+## Requirements\n+\n+- macOS or Linux, Node.js 24 or later, and npm.\n+- Python 3 and native build tools for the Electron addons (`node-pty` and\n+  `@hvir/rename-noreplace`): Xcode Command Line Tools on macOS, or a C/C++\n+  compiler and `make` on Linux.\n+- Git for repository features. SSH projects need a reachable host configured in\n+  `~/.ssh/config`. CLI harnesses require their executables to be installed on the\n+  selected host; hvir does not bundle them.\n+\n+## Run from source\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` installs the pinned terminal runtime and rebuilds native addons for\n+Electron; do not skip install scripts. On first launch, choose a local project\n+folder. hvir restores registered projects on subsequent launches. Use the `+`\n+button in the Projects bar to register another local folder or an SSH project,\n+and **Settings → Harnesses** to configure terminal launch profiles.\n+\n+To open a particular local folder at startup, set an absolute path:\n+\n+```sh\n+HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev\n+```\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run build` | Type-check and bundle the Electron app. |\n+| `npm run typecheck` | Check main/preload and renderer TypeScript. |\n+| `npm run lint` | Run ESLint. |\n+| `npm test` | Run the Vitest suite. |\n+| `npm run smoke` | Build and run Electron smoke scenarios; requires a graphical display (`xvfb-run -a npm run smoke` on headless Linux). |\n+| `npm run build:dir` | Build an unpacked desktop app in `dist/`. |\n+\n+To build native installers on the corresponding platform:\n+\n+```sh\n+npm run pack:mac:arm64   # macOS arm64 .pkg\n+npm run pack:linux:x64   # Linux x64 .deb\n+npm run pack:linux:arm64 # Linux arm64 .deb\n+```\n+\n+Packages are written to `dist/`. Distribution signing/notarization requires\n+separate platform-specific credentials.\n+\n+## Repository layout\n+\n+- `src/main/` — Electron lifecycle, project hosts, terminals, Git, and IPC.\n+- `src/preload/` — the renderer's IPC bridge.\n+- `src/renderer/src/` — React workbench UI.\n+- `src/shared/` — shared types and IPC contracts.\n+- `src/workers/` — background Git and echo workers.\n+- `test/` and `scripts/` — tests, smoke scenarios, and build/release tooling.\n+- `packages/rename-noreplace/` — native filesystem addon.\n+\n+## License\n+\n+[MIT](LICENSE). See [third-party notices](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/e01ee073/hvir/README.md
```


---

<sub>2m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/e01ee073/hvir/README.md.**

/private/var/tmp/ws/e01ee073/hvir/README.md

<details>
<summary>61 lines</summary>

````
# hvir

hvir is a desktop workbench for local and SSH-hosted projects and Git worktrees. It
brings file browsing, Git, and terminal-based workflows together in one Electron app.

## Features

- Register local folders or SSH projects using aliases from `~/.ssh/config`, and
  switch between projects and discovered Git worktrees.
- Browse and edit files, inspect source and diffs, and preview Markdown, Mermaid,
  images, HTML, JSON, YAML, and CSV.
- Inspect Git changes, history, and the commit graph; switch branches, fetch, and
  pull.
- Run split shell terminals or configured CLI harnesses, with a Sessions view and
  recovery for supported agent sessions.

## Requirements

- macOS or Linux, Node.js 24 or later, and npm.
- Python 3 and native build tools for the Electron addons (`node-pty` and
  `@hvir/rename-noreplace`): Xcode Command Line Tools on macOS, or a C/C++
  compiler and `make` on Linux.
- Git for repository features. SSH projects need a reachable host configured in
  `~/.ssh/config`. CLI harnesses require their executables to be installed on the
  selected host; hvir does not bundle them.

## Run from source

```sh
npm ci
npm run dev
```

`npm ci` installs the pinned terminal runtime and rebuilds native addons for
Electron; do not skip install scripts. On first launch, choose a local project
folder. hvir restores registered projects on subsequent launches. Use the `+`
button in the Projects bar to register another local folder or an SSH project,
and **Settings → Harnesses** to configure terminal launch profiles.

To open a particular local folder at startup, set an absolute path:

```sh
HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev
```

## Development

| Command | Purpose |
| --- | --- |
| `npm run build` | Type-check and bundle the Electron app. |
| `npm run typecheck` | Check main/preload and renderer TypeScript. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the Vitest suite. |
| `npm run smoke` | Build and run Electron smoke scenarios; requires a graphical display (`xvfb-run -a npm run smoke` on headless Linux). |
| `npm run build:dir` | Build an unpacked desktop app in `dist/`. |

To build native installers on the corresponding platform:

```sh
npm run pack:mac:arm64   # macOS arm64 .pkg
npm run pack:linux:x64   # Linux x64 .deb
npm run pack:linux:arm64 # Linux arm64 .deb
```

Packages are written to `dist/`. Distribution signing/notarization requires
separate platform-specific credentials.

## Repository layout

- `src/main/` — Electron lifecycle, project hosts, terminals, Git, and IPC.
- `src/preload/` — the renderer's IPC bridge.
- `src/renderer/src/` — React workbench UI.
- `src/shared/` — shared types and IPC contracts.
- `src/workers/` — background Git and echo workers.
- `test/` and `scripts/` — tests, smoke scenarios, and build/release tooling.
- `packages/rename-noreplace/` — native filesystem addon.

## License

[MIT](LICENSE). See [third-party notices](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>2m 6s</sub>

### `bash`

**Verify README exists, links resolve, and content has no whitespace errors**

$ git status --short && git --no-pager diff --no-index --check /dev/null README.md; test -f LICENSE && test -f THIRD_PARTY_NOTICES.md && test -d src/main && test -d src/renderer/src && test -d packages/rename-noreplace

```
?? README.md
<shellId: 2 completed with exit code 0>
```


---

<sub>2m 8s</sub>

### Copilot

Created `README.md` with an overview of hvir, its main features, prerequisites, steps to run from source, development and packaging commands, repository layout, and license information.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
