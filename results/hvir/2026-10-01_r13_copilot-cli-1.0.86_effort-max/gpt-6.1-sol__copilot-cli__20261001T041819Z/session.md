# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `a0c2f5df-3e62-4d7a-8d92-86b2892ed891`  
> - **Started:** 10/1/2026, 12:18:35 AM  
> - **Duration:** 4m 41s  
> - **Exported:** 10/1/2026, 12:23:16 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>12s</sub>

### Copilot

I’ll inspect the project’s code and setup before writing the README.


---

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir.**

/private/var/tmp/ws/aa87173d/hvir

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

<sub>13s</sub>

### `bash`

**Check for existing worktree changes**

$ git --no-pager status --short

```

<shellId: 0 completed with exit code 0>
```


---

<sub>13s</sub>

### `glob`

****/AGENTS.md**

"**/AGENTS.md"

```
No files matched the pattern.
```


---

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/package.json.**

/private/var/tmp/ws/aa87173d/hvir/package.json

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

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/electron-builder.yml.**

/private/var/tmp/ws/aa87173d/hvir/electron-builder.yml

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

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src.**

/private/var/tmp/ws/aa87173d/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/packages.**

/private/var/tmp/ws/aa87173d/hvir/packages

```
rename-noreplace
```


---

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/scripts.**

/private/var/tmp/ws/aa87173d/hvir/scripts

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

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.github.**

/private/var/tmp/ws/aa87173d/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/LICENSE.**

/private/var/tmp/ws/aa87173d/hvir/LICENSE (lines 1-40)

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

<sub>39s</sub>

### search_code_subagent (Completed)

### `file_search`

****/App/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/App/**"
}
```

</details>

```
No files found matching pattern: **/App/**
```


### `file_search`

****/workbench/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/workbench/**"
}
```

</details>

<details>
<summary>16 lines</summary>

```
15 files found:
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/workbench-layout-policy.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/use-workbench-overlays.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/use-workbench-commands.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/ConfirmationDialog.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/use-modal-keyboard.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/use-workbench-layout.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/active-terminal-focus.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/middle-click-close.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/modal-keyboard-model.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/workspace-pane-state.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/TerminalLayoutControls.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/workbench-overlay-model.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/use-renderer-ready.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/use-terminal-path-activation.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workbench/workbench-command-router.ts
```

</details>


### `file_search`

****/workspace/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/workspace/**"
}
```

</details>

```
No files found matching pattern: **/workspace/**
```


### `file_search`

****/session/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/session/**"
}
```

</details>

```
No files found matching pattern: **/session/**
```


### `file_search`

****/terminal/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/terminal/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/TerminalView.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/ghostty-terminal-file-paste.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-semantic-regions.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-theme-catalog.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-pane-event-coordinator.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/use-terminal-persistence.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-context-menu-target.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-wheel.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/TerminalDeck.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/ghostty-terminal-fit.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/use-terminal-recovery.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/use-new-worktree-move-badge.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/ghostty-terminal-pane.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/use-terminal-workspace-transfer.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-workspace-runtime-owner.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-fork-policy.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/effect-generation.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/use-terminal-attention.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/terminal-context-menu-position.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/TerminalRecoveryDialog.tsx
```

</details>


### `file_search`

****/agent/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/agent/**"
}
```

</details>

```
No files found matching pattern: **/agent/**
```


### `file_search`

****/git/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/git/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
33 files found (showing first 20):
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/commit-message.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/use-git-commit-details.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/git-sync-coordinator.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/git-rail-model.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitChangesView.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/git-capability.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/commit-file-tree.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/git-graph-lane-metrics.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitPanel.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/git-graph-layout.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitGraphView.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/commit-detail-client.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitBranchControls.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/use-git-rail-controller.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitGraphLanes.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/git-sync-status.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/virtual-range.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitHistoryView.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/use-git-workspace.ts
  /private/var/tmp/ws/aa87173d/hvir/src/main/git/git-engine.ts
```

</details>


### `file_search`

****/settings/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/settings/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
34 files found (showing first 20):
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/TypographyFontField.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/AppearanceSettings.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/GitSettings.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/harness-profile-editor-policy.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/SettingsSection.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/use-harness-binding-authorization.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/use-harness-profile-editor.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileDialogs.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/SettingsSectionNavigation.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/harness-argument-editor.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileCommandFields.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/settings.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/use-harness-folder-picker.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/harness-profile-request-policy.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/use-add-harness-dialog.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/typography-presentation.ts
  /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileEditor.tsx
```

</details>


### `grep_search`

**product.*purpose|purpose.*product|shipped.*feature|user.*facing.*feature**

<details>
<summary>Arguments</summary>

```json
{
  "query": "product.*purpose|purpose.*product|shipped.*feature|user.*facing.*feature",
  "isRegexp": true
}
```

</details>

```
No matches found for query: product.*purpose|purpose.*product|shipped.*feature|user.*facing.*feature
```


### `grep_search`

**first.*run|first.*time|initial.*setup|onboarding|workspace.*open|local.*ssh|terminal.*management|agent.*harness**

<details>
<summary>Arguments</summary>

```json
{
  "query": "first.*run|first.*time|initial.*setup|onboarding|workspace.*open|local.*ssh|terminal.*management|agent.*harness",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
152 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/run-real-host-ssh-acceptance.mts" line=24>
    LocalSshIdentitySource,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/run-real-host-ssh-acceptance.mts" line=304>
    return new LocalSshIdentitySource(local, [path])
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/session-dialog.test.tsx" line=186>
    localStorage.setItem('hvir:recent-folders:ssh-dev', JSON.stringify(['/srv/recent']))
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/session-dialog.test.tsx" line=382>
    hosts={[localHost, sshHost]}
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/check-seams.sh" line=72>
    # 9. Host-local collaborators share SshHost's authentication lifecycle. They
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/check-seams.sh" line=90>
    grep -nE "RendererSshPrompter|SshHostTrustStore|LocalSshIdentitySource|parseSshConfig|known-hosts|identityFileCandidates|from ['\"]\./project-host/(ssh-host|ssh-host-trust|ssh-identity-source|renderer-ssh-prompter|project-host-catalog)['\"]" \
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=425>
    .catch((error) => console.error('[workspace] watch reopen failed', error))
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/shared/ipc/project.ts" line=27>
    readonly kind: 'local' | 'ssh'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/shared/ipc/project.ts" line=177>
    'workspace:reopen': invoke<ReopenWorkspaceRequest, OperationResult<ProjectState>>(),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/shared/sessions-projection.ts" line=148>
    readonly kind: 'local' | 'ssh'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/pty-supervisor-late-completion.test.ts" line=14>
    describe.each([LOCAL_HOST_ID, asHostId('deterministic-ssh')])(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/diagnostics/diagnostic-event.ts" line=10>
    export type DiagnosticHostKind = 'local' | 'ssh'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/diagnostics/diagnostic-event.ts" line=383>
    return value === 'local' || value === 'ssh'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/harness/codex-session-discovery.ts" line=153>
    firstMatchAt ??= currentTime
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/project.ts" line=97>
    ipc.handle('workspace:reopen', (req) =>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitGraphView.tsx" line=324>
    <div className={`git-graph-workspace${inspectorOpen ? ' inspector-open' : ''}`}>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/sessions/sessions-open-resolution.ts" line=18>
    readonly workspaceQualifier: SessionsOpenRequest['workspaceQualifier']
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/sessions/sessions-observation-port.ts" line=342>
    kind: host?.kind ?? (workspace.root.hostId === LOCAL_HOST_ID ? 'local' : 'ssh'),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/document-review-store.test.ts" line=39>
    it('restores exact local and SSH workspace identities after restart', async () => {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/diagnostic-journal.test.ts" line=343>
    it('writes local and SSH evidence to one app-local ProjectHost-backed journal', async () => {
</match>
```
````

</details>


### `grep_search`

**product purpose|purpose|shipped features|user facing**

<details>
<summary>Arguments</summary>

```json
{
  "query": "product purpose|purpose|shipped features|user facing",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
81 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/project-file-operation-coordinator.ts" line=209>
    purpose: 'copy',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-operation.ts" line=3>
    type ExternalFileGrantPurpose,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-operation.ts" line=62>
    readonly purpose: ExternalFileGrantPurpose
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-operation.ts" line=95>
    options.purpose,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-operation.ts" line=107>
    options.purpose === 'move'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-move-operation.ts" line=78>
    purpose: 'move',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-move-operation.ts" line=82>
    if (execution.grant.purpose !== 'move') {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/shared/project-file-operations.ts" line=20>
    export type ExternalFileGrantPurpose = 'copy' | 'move'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=10>
    type ExternalFileGrantPurpose,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=48>
    readonly purpose: ExternalFileGrantPurpose
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=56>
    readonly purpose: 'copy'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=60>
    readonly purpose: 'move'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=84>
    readonly purpose: ExternalFileGrantPurpose
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=113>
    purpose: ExternalFileGrantPurpose = 'copy',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=116>
    if (purpose === 'move' && !this.supportsExternalMove) {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=149>
    purpose === 'move'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=157>
    purpose,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=190>
    purpose: 'copy',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=196>
    purpose: 'move',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-file-operations/external-file-grants.ts" line=202>
    purpose: ExternalFileGrantPurpose = 'copy',
</match>
```
````

</details>


### `grep_search`

**first run|first time|initial setup|onboarding|workspace open|local ssh|SSH session|terminal management**

<details>
<summary>Arguments</summary>

```json
{
  "query": "first run|first time|initial setup|onboarding|workspace open|local ssh|SSH session|terminal management",
  "isRegexp": true
}
```

</details>

<details>
<summary>9 lines</summary>

````
2 matches
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/test/settings-dialog-focus.test.tsx" line=375>
    it('consumes the add-harness intent the first time Harnesses mounts', async () => {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-host.test.ts" line=850>
    it('keeps buffered execs within the SSH session budget', async () => {
</match>
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


### `file_search`

****/docs/**/*workflow***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**/*workflow*"
}
```

</details>

```
No files found matching pattern: **/docs/**/*workflow*
```


### `file_search`

****/docs/**/*feature***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**/*feature*"
}
```

</details>

```
No files found matching pattern: **/docs/**/*feature*
```


### `grep_search`

**workspace:reopen|reopen workspace|restore workspace|last used workspace**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workspace:reopen|reopen workspace|restore workspace|last used workspace",
  "isRegexp": true
}
```

</details>

<details>
<summary>21 lines</summary>

````
6 matches
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/project.ts" line=97>
    ipc.handle('workspace:reopen', (req) =>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/shared/ipc/project.ts" line=177>
    'workspace:reopen': invoke<ReopenWorkspaceRequest, OperationResult<ProjectState>>(),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/projects-bar.test.tsx" line=255>
    '[aria-label="Reopen workspace feature"]',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx" line=86>
    aria-label={`Reopen workspace ${workspace.name}`}
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx" line=87>
    title={`Reopen workspace ${workspace.name}`}
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/workspace-session-actions.ts" line=55>
    await window.hvir.invoke('workspace:reopen', { projectId, workspaceId }),
</match>
```
````

</details>


### `grep_search`

**LocalSshIdentitySource|SshHostTrustStore|renderer-ssh-prompter|project-host-catalog|host-local collaborator**

<details>
<summary>Arguments</summary>

```json
{
  "query": "LocalSshIdentitySource|SshHostTrustStore|renderer-ssh-prompter|project-host-catalog|host-local collaborator",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
41 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=10>
    import { SshHostTrustStore } from './ssh-host-trust'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=11>
    import { LocalSshIdentitySource } from './ssh-identity-source'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=35>
    private readonly trust: SshHostTrustStore,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=49>
    const trust = await SshHostTrustStore.load(local, options.trustFile)
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=156>
    identitySource: new LocalSshIdentitySource(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/index.ts" line=47>
    export { ProjectHostCatalog, identityFileCandidates } from './project-host-catalog'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/index.ts" line=48>
    export { RendererSshPrompter } from './renderer-ssh-prompter'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/index.ts" line=49>
    export { SshHostTrustStore } from './ssh-host-trust'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=15>
    export class SshHostTrustStore {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=24>
    static async load(host: TrustMetadataHost, file: HostPath): Promise<SshHostTrustStore> {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=39>
    return new SshHostTrustStore(host, file, fingerprints)
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=41>
    return new SshHostTrustStore(host, file, {})
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/run-real-host-ssh-acceptance.mts" line=24>
    LocalSshIdentitySource,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/run-real-host-ssh-acceptance.mts" line=304>
    return new LocalSshIdentitySource(local, [path])
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/check-seams.sh" line=72>
    # 9. Host-local collaborators share SshHost's authentication lifecycle. They
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/check-seams.sh" line=89>
    | grep -v '^src/main/project-host/project-host-catalog.ts' || true
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/check-seams.sh" line=90>
    grep -nE "RendererSshPrompter|SshHostTrustStore|LocalSshIdentitySource|parseSshConfig|known-hosts|identityFileCandidates|from ['\"]\./project-host/(ssh-host|ssh-host-trust|ssh-identity-source|renderer-ssh-prompter|project-host-catalog)['\"]" \
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/check-seams.sh" line=93>
    src/main/project-host/project-host-catalog.ts src/main/project-host/project-host.ts || true
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-identity-source.ts" line=16>
    export class LocalSshIdentitySource implements SshIdentitySource {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-identity-source.test.ts" line=5>
    LocalSshIdentitySource,
</match>
```
````

</details>


### `grep_search`

**terminal.*harness|agent.*harness|harness.*profile|harness.*command|harness.*argument**

<details>
<summary>Arguments</summary>

```json
{
  "query": "terminal.*harness|agent.*harness|harness.*profile|harness.*command|harness.*argument",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1153 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=16>
    import { HarnessProfileStore } from './harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=98>
    let harnessProfileStore: HarnessProfileStore | null = null
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=197>
    harnessProfileStore = runtime.own(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=198>
    'harness profile store',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=199>
    await HarnessProfileStore.load(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=201>
    localPath(applicationUserDataPath('harness-profiles.json')),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=205>
    await harnessProfileStore
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=208>
    console.warn('[harness] legacy recovery profile import failed', error),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=242>
    registerSessionIdentity: (terminalId, harnessSessionId) =>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=243>
    terminalSessionRegistry!.recordIdentity(terminalId, harnessSessionId),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=264>
    harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=395>
    harnessProfiles: harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=506>
    await harnessProfileStore?.flush()
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/deps.ts" line=17>
    import type { HarnessProfileStoreContract } from '../harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/deps.ts" line=163>
    readonly harnessProfiles: HarnessProfileStoreContract
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/authority-channel-policy.ts" line=99>
    'harness:profiles',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/authority-channel-policy.ts" line=101>
    'harness:probe-profiles',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/authority-channel-policy.ts" line=103>
    'harness:profile-materialize',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/authority-channel-policy.ts" line=104>
    'harness:profile-save',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/harness.ts" line=7>
    import { providerTemplateProfiles } from '../../harness/harness-profile-store'
</match>
```
````

</details>


### `grep_search`

**document pane|web pane|review tool|Git tool|sidebar pane|workspace pane**

<details>
<summary>Arguments</summary>

```json
{
  "query": "document pane|web pane|review tool|Git tool|sidebar pane|workspace pane",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
65 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=41>
    throw new Error('Web pane source terminal is not live in this workspace')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=44>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid source web pane')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=46>
    if (!source) throw new Error('Source web pane is no longer live')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=51>
    throw new Error('Web panes may be opened only from the active workspace')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=79>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=92>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=105>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=115>
    throw new Error('Browser URL is not authorized by this web pane')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=132>
    throw new Error('Invalid full-page web pane')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=91>
    throw new Error('Web pane host does not own its workspace')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=120>
    throw new Error(`Too many live web panes (limit ${MAX_OPEN_WEB_PANES})`)
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=128>
    `Too many live web panes for this host (limit ${MAX_OPEN_WEB_PANES_PER_HOST})`,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=151>
    throw new Error('Web pane was revoked while opening')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=337>
    throw new Error('A web pane is still opening; wait for it to finish before moving')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=346>
    throw new Error('Web pane authority changed; review the move again')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/web-pane-diagnostics.test.ts" line=14>
    describe('web pane diagnostic policy', () => {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=103>
    if (this.listeningPort === undefined) throw new Error('Web pane proxy is not open')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=108>
    if (this.closed) throw new Error('Web pane proxy is closed')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=121>
    throw new Error('Web pane proxy reported no loopback port')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=282>
    throw new ProxyRequestError(403, 'Blocked web pane destination')
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


### `file_search`

****/docs/**/*workflow***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**/*workflow*"
}
```

</details>

```
No files found matching pattern: **/docs/**/*workflow*
```


### `file_search`

****/docs/**/*feature***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**/*feature*"
}
```

</details>

```
No files found matching pattern: **/docs/**/*feature*
```


### `grep_search`

**product purpose|purpose|shipped features|user facing**

<details>
<summary>Arguments</summary>

```json
{
  "query": "product purpose|purpose|shipped features|user facing",
  "isRegexp": true,
  "includePattern": "**/*.{md,mdx,tsx,ts,js,jsx}"
}
```

</details>

<details>
<summary>63 lines</summary>

````
78 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/github-delivery-adapters.ts" line=28>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/github-delivery-adapters.ts" line=47>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/read-contributor-status.ts" line=36>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/read-contributor-status.ts" line=49>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/sync-pull-request-planning.ts" line=33>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/sync-pull-request-planning.ts" line=52>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host.ts" line=704>
    purpose: 'primary' | 'pool' = 'primary',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host.ts" line=715>
    if (purpose === 'primary') this.promptedDuringConnect = true
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host.ts" line=718>
    purpose === 'pool'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host.ts" line=733>
    if (purpose === 'primary') this.reconnectSuppressed = true
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/harness/claude-context-telemetry.ts" line=174>
    context.purpose === 'contributor' ? Infinity : undefined,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/harness/codex-context-telemetry.ts" line=165>
    context.purpose === 'contributor' ? Infinity : undefined,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/harness/harness-provider-contract.ts" line=244>
    readonly purpose?: 'contributor'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/audit-canonical-project.ts" line=34>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/migrate-project-tokens.ts" line=29>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/migrate-project-tokens.ts" line=33>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/migrate-project-tokens.ts" line=55>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/migrate-project-tokens.ts" line=59>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/github-client.ts" line=21>
    purpose: string
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/scripts/project-management/github-client.ts" line=37>
    this.#token = requireToken(options.token, options.purpose)
</match>
```
````

</details>


### `grep_search`

**first run|first time|initial setup|onboarding|workspace open|local ssh|SSH session|terminal management**

<details>
<summary>Arguments</summary>

```json
{
  "query": "first run|first time|initial setup|onboarding|workspace open|local ssh|SSH session|terminal management",
  "isRegexp": true,
  "includePattern": "**/*.{md,mdx,tsx,ts,js,jsx}"
}
```

</details>

<details>
<summary>9 lines</summary>

````
2 matches
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/test/settings-dialog-focus.test.tsx" line=375>
    it('consumes the add-harness intent the first time Harnesses mounts', async () => {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-host.test.ts" line=850>
    it('keeps buffered execs within the SSH session budget', async () => {
</match>
```
````

</details>


### `grep_search`

**workspace:reopen|reopen workspace|restore workspace|last used workspace**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workspace:reopen|reopen workspace|restore workspace|last used workspace",
  "isRegexp": true,
  "includePattern": "**/*.{md,mdx,tsx,ts,js,jsx}"
}
```

</details>

<details>
<summary>21 lines</summary>

````
6 matches
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/project.ts" line=97>
    ipc.handle('workspace:reopen', (req) =>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/projects-bar.test.tsx" line=255>
    '[aria-label="Reopen workspace feature"]',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/workspace-session-actions.ts" line=55>
    await window.hvir.invoke('workspace:reopen', { projectId, workspaceId }),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx" line=86>
    aria-label={`Reopen workspace ${workspace.name}`}
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx" line=87>
    title={`Reopen workspace ${workspace.name}`}
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/shared/ipc/project.ts" line=177>
    'workspace:reopen': invoke<ReopenWorkspaceRequest, OperationResult<ProjectState>>(),
</match>
```
````

</details>


### `grep_search`

**LocalSshIdentitySource|SshHostTrustStore|renderer-ssh-prompter|project-host-catalog|host-local collaborator**

<details>
<summary>Arguments</summary>

```json
{
  "query": "LocalSshIdentitySource|SshHostTrustStore|renderer-ssh-prompter|project-host-catalog|host-local collaborator",
  "isRegexp": true,
  "includePattern": "**/*.{md,mdx,tsx,ts,js,jsx}"
}
```

</details>

<details>
<summary>63 lines</summary>

````
30 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=10>
    import { SshHostTrustStore } from './ssh-host-trust'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=11>
    import { LocalSshIdentitySource } from './ssh-identity-source'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=35>
    private readonly trust: SshHostTrustStore,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=49>
    const trust = await SshHostTrustStore.load(local, options.trustFile)
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts" line=156>
    identitySource: new LocalSshIdentitySource(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/index.ts" line=47>
    export { ProjectHostCatalog, identityFileCandidates } from './project-host-catalog'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/index.ts" line=48>
    export { RendererSshPrompter } from './renderer-ssh-prompter'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/index.ts" line=49>
    export { SshHostTrustStore } from './ssh-host-trust'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=15>
    export class SshHostTrustStore {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=24>
    static async load(host: TrustMetadataHost, file: HostPath): Promise<SshHostTrustStore> {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=39>
    return new SshHostTrustStore(host, file, fingerprints)
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts" line=41>
    return new SshHostTrustStore(host, file, {})
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-identity-source.ts" line=16>
    export class LocalSshIdentitySource implements SshIdentitySource {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-identity-source.test.ts" line=5>
    LocalSshIdentitySource,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-identity-source.test.ts" line=10>
    describe('LocalSshIdentitySource', () => {
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-identity-source.test.ts" line=22>
    const source = new LocalSshIdentitySource(local, ['/home/test/.ssh/work'])
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-identity-source.test.ts" line=59>
    const source = new LocalSshIdentitySource(local, ['/home/test/.ssh/work'])
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-identity-source.test.ts" line=82>
    const source = new LocalSshIdentitySource(local, [
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-host-trust.test.ts" line=4>
    import { SshHostTrustStore, type ProjectHost } from '../src/main/project-host'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/test/ssh-host-trust.test.ts" line=10>
    describe('SshHostTrustStore', () => {
</match>
```
````

</details>


### `grep_search`

**terminal.*harness|agent.*harness|harness.*profile|harness.*command|harness.*argument**

<details>
<summary>Arguments</summary>

```json
{
  "query": "terminal.*harness|agent.*harness|harness.*profile|harness.*command|harness.*argument",
  "isRegexp": true,
  "includePattern": "**/*.{md,mdx,tsx,ts,js,jsx}"
}
```

</details>

<details>
<summary>63 lines</summary>

````
1140 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=16>
    import { HarnessProfileStore } from './harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=98>
    let harnessProfileStore: HarnessProfileStore | null = null
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=197>
    harnessProfileStore = runtime.own(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=198>
    'harness profile store',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=199>
    await HarnessProfileStore.load(
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=201>
    localPath(applicationUserDataPath('harness-profiles.json')),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=205>
    await harnessProfileStore
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=208>
    console.warn('[harness] legacy recovery profile import failed', error),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=242>
    registerSessionIdentity: (terminalId, harnessSessionId) =>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=243>
    terminalSessionRegistry!.recordIdentity(terminalId, harnessSessionId),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=264>
    harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=395>
    harnessProfiles: harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts" line=506>
    await harnessProfileStore?.flush()
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/document-review/document-review-delivery-coordinator.ts" line=22>
    import type { HarnessProfileStoreContract } from '../harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/document-review/document-review-delivery-coordinator.ts" line=69>
    readonly profiles: Pick<HarnessProfileStoreContract, 'get'>
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/pty/pty-supervisor.ts" line=20>
    import { harnessShellCommandArgs } from '../harness/harness-shell-environment'
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/pty/pty-supervisor.ts" line=168>
    args: harnessShellCommandArgs(spec.file, spec.args),
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/pty/pty-supervisor.ts" line=680>
    () => this.options.registerSessionIdentity?.(terminalId, harnessSessionId) ?? true,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/pty/pty-contract.ts" line=4>
    HarnessProfileId,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/pty/pty-contract.ts" line=28>
    readonly profileId?: HarnessProfileId
</match>
```
````

</details>


### `grep_search`

**document pane|web pane|review tool|Git tool|sidebar pane|workspace pane**

<details>
<summary>Arguments</summary>

```json
{
  "query": "document pane|web pane|review tool|Git tool|sidebar pane|workspace pane",
  "isRegexp": true,
  "includePattern": "**/*.{md,mdx,tsx,ts,js,jsx}"
}
```

</details>

<details>
<summary>63 lines</summary>

````
63 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=41>
    throw new Error('Web pane source terminal is not live in this workspace')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=44>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid source web pane')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=46>
    if (!source) throw new Error('Source web pane is no longer live')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=51>
    throw new Error('Web panes may be opened only from the active workspace')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=79>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=92>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=105>
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=115>
    throw new Error('Browser URL is not authorized by this web pane')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts" line=132>
    throw new Error('Invalid full-page web pane')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/terminal/terminal-workspace-move-coordinator.ts" line=124>
    throw new Error('A web pane is still opening; wait for it to finish before moving')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/terminal/terminal-workspace-move-coordinator.ts" line=178>
    'Web pane cleanup and terminal move rollback failed',
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=91>
    throw new Error('Web pane host does not own its workspace')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=120>
    throw new Error(`Too many live web panes (limit ${MAX_OPEN_WEB_PANES})`)
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=128>
    `Too many live web panes for this host (limit ${MAX_OPEN_WEB_PANES_PER_HOST})`,
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=151>
    throw new Error('Web pane was revoked while opening')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=337>
    throw new Error('A web pane is still opening; wait for it to finish before moving')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts" line=346>
    throw new Error('Web pane authority changed; review the move again')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=103>
    if (this.listeningPort === undefined) throw new Error('Web pane proxy is not open')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=108>
    if (this.closed) throw new Error('Web pane proxy is closed')
</match>
<match path="/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/loopback-http-proxy.ts" line=121>
    throw new Error('Web pane proxy reported no loopback port')
</match>
```
````

</details>


### `file_search`

****/docs/**/onboarding***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**/onboarding*"
}
```

</details>

```
No files found matching pattern: **/docs/**/onboarding*
```


### Copilot

\<final_answer>
/private/var/tmp/ws/aa87173d/hvir/src/main/index.ts:16-270
/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/project-host-catalog.ts:1-190
/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-identity-source.ts:1-220
/private/var/tmp/ws/aa87173d/hvir/src/main/project-host/ssh-host-trust.ts:1-220
/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/project.ts:90-160
/private/var/tmp/ws/aa87173d/hvir/src/main/ipc/features/web-pane.ts:40-160
/private/var/tmp/ws/aa87173d/hvir/src/main/web-pane/web-pane-route-registry.ts:80-210
/private/var/tmp/ws/aa87173d/hvir/src/main/document-review/document-review-delivery-coordinator.ts:20-120
/private/var/tmp/ws/aa87173d/hvir/src/main/pty/pty-supervisor.ts:20-210
/private/var/tmp/ws/aa87173d/hvir/src/main/terminal/terminal-workspace-move-coordinator.ts:120-210
/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx:80-160
/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/workspace-session-actions.ts:50-120
/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/TerminalDeck.tsx:80-210
/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitGraphView.tsx:320-380
/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileEditor.tsx:80-220
/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/GitSettings.tsx:80-210
\</final_answer>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.github/workflows.**

/private/var/tmp/ws/aa87173d/hvir/.github/workflows

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

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/build.**

/private/var/tmp/ws/aa87173d/hvir/build

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

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/aa87173d/hvir/electron.vite.config.ts

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

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/aa87173d/hvir/THIRD_PARTY_NOTICES.md (lines 1-100)

<details>
<summary>74 lines</summary>

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
```

</details>


---

<sub>45s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.gitignore.**

/private/var/tmp/ws/aa87173d/hvir/.gitignore

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

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src

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

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/main/harness/harness-provider.ts.**

/private/var/tmp/ws/aa87173d/hvir/src/main/harness/harness-provider.ts (lines 1-220)

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

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/aa87173d/hvir/src/main/application-runtime.ts (lines 1-220)

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

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx (lines 1-260)

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

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileEditor.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileEditor.tsx (lines 1-250)

```
import type { ReactElement } from 'react'

import {
  asHarnessProviderId,
  type HarnessCommandPreview,
  type HarnessProfileInput,
  type HarnessProfileProbe,
  type HarnessProviderDescriptor,
  type HostPath,
} from '../../../shared'
import { harnessCapabilityLabel } from './harness-profile-editor-policy'
import type { HarnessProfileDraft } from './harness-profile-draft'
import {
  HARNESS_ENVIRONMENT_STORAGE_GUIDANCE,
  HarnessProfileAdvancedFields,
} from './HarnessProfileAdvancedFields'
import { HarnessProfileCommandFields } from './HarnessProfileCommandFields'

interface HarnessProfileEditorProps {
  readonly draft: HarnessProfileDraft
  readonly providers: readonly HarnessProviderDescriptor[]
  readonly provider?: HarnessProviderDescriptor
  readonly providerProbe?: HarnessProfileProbe
  readonly previews: readonly HarnessCommandPreview[]
  readonly previewReadiness?: string
  readonly previewError?: string
  readonly error?: string
  readonly busy: boolean
  readonly dirty: boolean
  readonly deleteArmed: boolean
  readonly workspaceRoot: HostPath
  readonly projectRoot: HostPath
  readonly onUpdateInput: (
    update: (input: HarnessProfileInput) => HarnessProfileInput,
  ) => void
  readonly onArguments: (value: string) => void
  readonly onAuthorizeExecutable: () => void
  readonly onPickBinding: (index: number) => void
  readonly onDuplicate: () => void
  readonly onRemove: () => void
  readonly onSave: () => void
}

export function HarnessProfileEditor({
  draft,
  providers,
  provider,
  providerProbe,
  previews,
  previewReadiness,
  previewError,
  error,
  busy,
  dirty,
  deleteArmed,
  workspaceRoot,
  projectRoot,
  onUpdateInput,
  onArguments,
  onAuthorizeExecutable,
  onPickBinding,
  onDuplicate,
  onRemove,
  onSave,
}: HarnessProfileEditorProps): ReactElement {
  return (
    <div className="settings-profile-editor-shell">
      <ProfileActions
        draft={draft}
        busy={busy}
        dirty={dirty}
        deleteArmed={deleteArmed}
        onUpdateInput={onUpdateInput}
        onDuplicate={onDuplicate}
        onRemove={onRemove}
        onSave={onSave}
      />
      <div className="settings-profile-editor">
        <ProfileIdentityFields
          draft={draft}
          providers={providers}
          projectRoot={projectRoot}
          onUpdateInput={onUpdateInput}
        />
        <HarnessProfileCommandFields
          draft={draft}
          provider={provider}
          onArguments={onArguments}
        />
        <details className="settings-profile-disclosure">
          <summary>
            <span>Advanced</span>
            <small>Executable, environment, paths, and capabilities</small>
          </summary>
          <div className="settings-profile-disclosure-body">
            <HarnessProfileAdvancedFields
              input={draft.input}
              hostId={workspaceRoot.hostId}
              onUpdateInput={onUpdateInput}
              onAuthorizeExecutable={onAuthorizeExecutable}
              onPickBinding={onPickBinding}
            />
            <div className="settings-profile-capabilities">
              <strong>Host capabilities</strong>
              <small>{harnessCapabilityLabel(provider, providerProbe)}</small>
            </div>
          </div>
        </details>
        <details className="settings-profile-disclosure settings-profile-preview-disclosure">
          <summary>
            <span>Exact command preview</span>
            <small
              className={previewError ? 'settings-profile-disclosure-error' : undefined}
            >
              {previewError
                ? `Needs attention: ${previewError}`
                : (previewReadiness ??
                  `Fresh launch${provider?.capabilities.exactResume ? ' and resume' : ''}`)}
            </small>
          </summary>
          <div className="settings-profile-disclosure-body">
            <ProfilePreviews
              previews={previews}
              previewReadiness={previewReadiness}
              previewError={previewError}
            />
          </div>
        </details>
        {error ? <p className="dialog-error">{error}</p> : null}
      </div>
    </div>
  )
}

function ProfileIdentityFields({
  draft,
  providers,
  projectRoot,
  onUpdateInput,
}: Pick<
  HarnessProfileEditorProps,
  'draft' | 'providers' | 'projectRoot' | 'onUpdateInput'
>): ReactElement {
  return (
    <div className="settings-profile-grid">
      <label>
        <span>Name</span>
        <input
          value={draft.input.displayName}
          onChange={(event) => {
            const displayName = event.currentTarget.value
            onUpdateInput((input) => ({ ...input, displayName }))
          }}
        />
      </label>
      <label>
        <span>Provider</span>
        <select
          value={draft.input.providerId}
          onChange={(event) => {
            const providerId = asHarnessProviderId(event.currentTarget.value)
            const selectedProvider = providers.find(
              (candidate) => candidate.id === providerId,
            )
            onUpdateInput((input) => ({
              ...input,
              providerId,
              executable: selectedProvider?.profileTemplate
                ? { kind: 'provider-default' }
                : { kind: 'command', command: '' },
            }))
          }}
        >
          {providers.map((candidate) => (
            <option key={candidate.id} value={candidate.id}>
              {candidate.displayName}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Scope</span>
        <select
          value={draft.input.scope.kind}
          onChange={(event) => {
            const scope =
              event.currentTarget.value === 'project'
                ? ({ kind: 'project', projectRoot } as const)
                : ({ kind: 'global' } as const)
            onUpdateInput((input) => ({ ...input, scope }))
          }}
        >
          <option value="global">All projects</option>
          <option value="project">This registered project</option>
        </select>
      </label>
      <label className="settings-profile-description">
        <span>Description</span>
        <input
          value={draft.input.description ?? ''}
          onChange={(event) => {
            const description = event.currentTarget.value || undefined
            onUpdateInput((input) => ({ ...input, description }))
          }}
        />
      </label>
    </div>
  )
}

function ProfilePreviews({
  previews,
  previewReadiness,
  previewError,
}: {
  readonly previews: readonly HarnessCommandPreview[]
  readonly previewReadiness?: string
  readonly previewError?: string
}): ReactElement {
  return (
    <div className="settings-profile-previews">
      {previews.map((preview) => (
        <div key={preview.mode}>
          <strong>{preview.mode === 'fresh' ? 'Fresh launch' : 'Exact resume'}</strong>
          <code>{preview.command}</code>
        </div>
      ))}
      {previewReadiness ? <p>{previewReadiness}</p> : null}
      {previewError ? <p className="dialog-error">{previewError}</p> : null}
      <small>{HARNESS_ENVIRONMENT_STORAGE_GUIDANCE}</small>
    </div>
  )
}

function ProfileActions({
  draft,
  busy,
  dirty,
  deleteArmed,
  onUpdateInput,
  onDuplicate,
  onRemove,
  onSave,
}: Pick<
  HarnessProfileEditorProps,
  | 'draft'
  | 'busy'
  | 'dirty'
  | 'deleteArmed'
  | 'onUpdateInput'
```


---

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/aa87173d/hvir/.github/workflows/ci.yml (lines 1-210)

<details>
<summary>178 lines</summary>

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
```

</details>


---

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/aa87173d/hvir/.github/workflows/release.yml (lines 1-200)

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

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/build/native.**

/private/var/tmp/ws/aa87173d/hvir/build/native

```
hvir-command
```


---

<sub>1m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.prettierrc.json.**

/private/var/tmp/ws/aa87173d/hvir/.prettierrc.json

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

<sub>1m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/App.tsx (lines 1-230)

<details>
<summary>230 lines</summary>

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
```

</details>


---

<sub>1m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/aa87173d/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-210)

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

<sub>1m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/main/application-runtime-policy.ts.**

/private/var/tmp/ws/aa87173d/hvir/src/main/application-runtime-policy.ts (lines 1-220)

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

<sub>1m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/workspace-session-actions.ts.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/workspace-session-actions.ts (lines 1-200)

<details>
<summary>58 lines</summary>

```
import {
  unwrapOperation,
  type ProjectState,
  type WorkspaceClosePlan,
} from '../../../shared'

interface WorkspaceSessionActionsOptions {
  readonly runTransition: (
    operation: () => Promise<ProjectState>,
  ) => Promise<ProjectState | undefined>
  readonly ensureProjectConnected: (projectId: string) => Promise<void>
  readonly reportError: (reason: unknown) => void
}

/** Renderer adapter for the closed-workspace lifecycle IPC owned by main. */
export function createWorkspaceSessionActions(options: WorkspaceSessionActionsOptions) {
  return {
    planWorkspaceClose: async (
      projectId: string,
      workspaceId: string,
    ): Promise<WorkspaceClosePlan | undefined> => {
      try {
        return unwrapOperation(
          await window.hvir.invoke('workspace:plan-close', {
            projectId,
            workspaceId,
          }),
        )
      } catch (reason) {
        options.reportError(reason)
        return undefined
      }
    },
    closeWorkspace: async (
      projectId: string,
      workspaceId: string,
      plan: WorkspaceClosePlan,
      terminateTerminals: boolean,
    ): Promise<void> => {
      await options.runTransition(async () =>
        unwrapOperation(
          await window.hvir.invoke('workspace:close', {
            projectId,
            workspaceId,
            expectedTerminalCount: plan.terminalCount,
            terminateTerminals,
          }),
        ),
      )
    },
    reopenWorkspace: async (projectId: string, workspaceId: string): Promise<void> => {
      await options.runTransition(async () => {
        await options.ensureProjectConnected(projectId)
        return unwrapOperation(
          await window.hvir.invoke('workspace:reopen', { projectId, workspaceId }),
        )
      })
    },
  }
}
```

</details>


---

<sub>1m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/build/native/hvir-command.**

/private/var/tmp/ws/aa87173d/hvir/build/native/hvir-command (lines 1-220)

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

<sub>1m 24s</sub>

### `glob`

**src/renderer/src/{workbench,workspaces,viewer,settings}/**/*.{tsx,ts}**

"src/renderer/src/{workbench,workspaces,viewer,settings}/**/*.{tsx,ts}"

<details>
<summary>130 matches</summary>

```
[glob: 124 path(s) under ./src/renderer/src; grouped by directory]

./src/renderer/src/viewer/ (59 path(s))
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

./src/renderer/src/settings/ (34 path(s))
  ComposerSubmitConsentDialog.tsx
  HarnessProfileAdvancedFields.tsx
  HarnessProfileCommandFields.tsx
  HarnessProfileDialogs.tsx
  HarnessProfileEditor.tsx
  HarnessProfileOverlays.tsx
  HarnessProfilesSettings.tsx
  SettingsActiveSection.tsx
  SettingsDialog.tsx
  SettingsSection.tsx
  SettingsSectionNavigation.tsx
  TerminalThemeGallery.tsx
  harness-argument-editor.ts
  harness-profile-draft.ts
  harness-profile-editor-policy.ts
  harness-profile-request-policy.ts
  keybindings.ts
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/KeybindingsSettings.tsx
  sections/TerminalSettings.tsx
  sections/TypographyFontField.tsx
  settings-draft.ts
  settings-model.ts
  settings-navigation.ts
  settings.ts
  typography-presentation.ts
  typography-settings.ts
  use-add-harness-dialog.ts
  use-harness-binding-authorization.ts
  use-harness-folder-picker.ts
  use-harness-profile-editor.ts
  use-harness-profile-load.ts
  use-settings-controller.ts

./src/renderer/src/workspaces/ (16 path(s))
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

./src/renderer/src/workbench/ (15 path(s))
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

[extensions: .ts=89, .tsx=35]
```

</details>


---

<sub>1m 24s</sub>

### `bash`

**Identify the repository URL for README links**

$ git --no-pager remote -v

```

<shellId: 1 completed with exit code 0>
```


---

<sub>2m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-220)

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

<sub>2m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-260)

<details>
<summary>245 lines</summary>

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
```

</details>


---

<sub>2m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/settings-navigation.ts (lines 1-150)

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

<sub>2m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/aa87173d/hvir/scripts/check-terminal-runtime.mts (lines 1-200)

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

<sub>2m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/scripts/render-native-installer.mjs.**

/private/var/tmp/ws/aa87173d/hvir/scripts/render-native-installer.mjs (lines 1-160)

<details>
<summary>150 lines</summary>

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
```

</details>


---

<sub>2m 5s</sub>

### `rg`

**displayName:**

"displayName:" in *.ts (src/main/harness/providers)

<details>
<summary>15 matches</summary>

```
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
```

</details>


---

<sub>2m 5s</sub>

### `rg`

**Markdown|Mermaid|CSV|JSON|YAML|rendered|stage|commit|blame|label=**

"Markdown|Mermaid|CSV|JSON|YAML|rendered|stage|commit|blame|label=" in *.tsx (src/renderer/src/viewer/RenderedView.tsx, src/renderer/src/git/GitPanel.tsx, src/renderer/src/settings/HarnessProfileAdvancedFields.tsx)

<details>
<summary>48 matches</summary>

```
[grep content: 44 matches across 3 file(s) under src/renderer/src]

settings/HarnessProfileAdvancedFields.tsx (10 match(es)):
  94:           aria-label="Executable command"
  104:             aria-label="Absolute executable path"
  148:             aria-label="Environment name"
  162:             aria-label="Environment operation"
  185:               aria-label="Environment value"
  199:                 aria-label="Reference source"
  214:                 aria-label="Reference name"
  231:             aria-label={`Remove ${binding.name || 'environment row'}`}
  271:             aria-label="Path binding name"
  289:             aria-label={`Remove ${binding.name || 'path row'}`}

viewer/RenderedView.tsx (31 match(es)):
  13:   renderedFileType,
  17: import { renderMarkdown, resetMarkdownRenderer } from './markdown-client'
  19: import { handleRenderedLinkClick } from './rendered-link-handler'
  30: import { captureRenderedPosition, restoreRenderedPosition } from './rendered-position'
  33: import { MarkdownRepositoryImages } from './markdown-repository-images'
  34: import { bindRenderedDocumentReview } from '../document-review/document-review-rendered'
  96:   const type = renderedFileType(path)
  132:       <StandaloneMermaid
  142:       <MarkdownView
  158:   return <div className="viewer-empty">No rendered view for this file type</div>
  201:   if (error) return <div className="viewer-empty error">Invalid CSV: {error}</div>
  202:   if (!table) return <div className="viewer-empty">Parsing CSV…</div>
  218:     <div className="rendered-scroll csv-view" ref={container}>
  300: function MarkdownView({
  320:   const repositoryImages = useRef<MarkdownRepositoryImages>(undefined)
  331:     void renderMarkdown(content, theme).then(
  332:       (rendered) => {
  334:         setHtml(rendered)
  353:     const images = new MarkdownRepositoryImages(path, workspaceRoot)
  357:     void renderMermaidNodes(root, () => cancelled, theme)
  410:       className="rendered-scroll markdown-body"
  417: function StandaloneMermaid({
  434:     void renderMermaid(content, `mermaid-${++mermaidRequestId}`, theme).then(
  452:   return <div className="rendered-scroll mermaid-standalone" ref={ref} />
  455: async function renderMermaidNodes(
  466:       node.innerHTML = await renderMermaid(source, `mermaid-${++mermaidRequestId}`, theme)
  475: async function renderMermaid(
  550:     <div className="rendered-scroll json-tree" ref={container}>
  609:       resetMarkdownRenderer()
  704:   const text = node.kind === 'string' ? JSON.stringify(node.value) : String(node.value)
  744:       reject(new Error(event.message || 'CSV worker unavailable'))

git/GitPanel.tsx (3 match(es)):
  13: import { useGitCommitDetails } from './use-git-commit-details'
  69:     <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
  114:             commits={model.commits}
```

</details>


---

<sub>2m 5s</sub>

### `rg`

**github\.com/[^/]+/hvir|hvir-command|/usr/local/bin/hvir**

"github\.com/[^/]+/hvir|hvir-command|/usr/local/bin/hvir" in * (scripts/native-installer.template.sh, build/linux, build/pkg-scripts)

<details>
<summary>10 matches</summary>

```
scripts/native-installer.template.sh:123:    native_command='/usr/local/bin/hvir'
scripts/native-installer.template.sh:542:  /usr/bin/grep -Fxq 'command=/usr/local/bin/hvir' "$inventory"
scripts/native-installer.template.sh:547:  [[ -f /usr/local/bin/hvir ]] &&
scripts/native-installer.template.sh:548:    /usr/bin/grep -Fq 'hvir-native-package-command-v1' /usr/local/bin/hvir
scripts/native-installer.template.sh:567:        /usr/local/bin/hvir \
build/pkg-scripts/preinstall:17:command="$volume_root/usr/local/bin/hvir"
build/pkg-scripts/postinstall:28:command_source="$application/Contents/Resources/hvir-command"
build/pkg-scripts/postinstall:127:  echo 'command=/usr/local/bin/hvir'
build/linux/after-remove.sh:25:HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
build/linux/after-install.sh:12:HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
```

</details>


---

<sub>2m 23s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-170)

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

<sub>2m 23s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/viewer/RenderedView.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/viewer/RenderedView.tsx (lines 75-160)

<details>
<summary>84 lines</summary>

```
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
```

</details>


---

<sub>2m 23s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx (lines 1-85)

<details>
<summary>81 lines</summary>

```
import type { ReactElement } from 'react'

import {
  hostPath,
  type HarnessEnvironmentBinding,
  type HarnessPathBinding,
  type HarnessProfileExecutable,
  type HarnessProfileInput,
  type HostPath,
} from '../../../shared'
import { replaceHarnessValue } from './harness-profile-editor-policy'

export const HARNESS_ENVIRONMENT_STORAGE_GUIDANCE =
  'Literal values are stored and shown as plaintext. Reference-sourced values alone are redacted.'

export function HarnessProfileAdvancedFields({
  input,
  hostId,
  onUpdateInput,
  onAuthorizeExecutable,
  onPickBinding,
}: {
  readonly input: HarnessProfileInput
  readonly hostId: HostPath['hostId']
  readonly onUpdateInput: (
    update: (input: HarnessProfileInput) => HarnessProfileInput,
  ) => void
  readonly onAuthorizeExecutable: () => void
  readonly onPickBinding: (index: number) => void
}): ReactElement {
  return (
    <>
      <ExecutableEditor
        executable={input.executable}
        hostId={hostId}
        onChange={(executable) =>
          onUpdateInput((current) => ({ ...current, executable }))
        }
        onAuthorize={onAuthorizeExecutable}
      />
      <EnvironmentEditor
        bindings={input.environment}
        onChange={(environment) =>
          onUpdateInput((current) => ({ ...current, environment }))
        }
      />
      <PathBindingsEditor
        bindings={input.pathBindings}
        hostId={hostId}
        onChange={(pathBindings) =>
          onUpdateInput((current) => ({ ...current, pathBindings }))
        }
        onPick={onPickBinding}
      />
    </>
  )
}

function ExecutableEditor({
  executable,
  hostId,
  onChange,
  onAuthorize,
}: {
  readonly executable: HarnessProfileExecutable
  readonly hostId: HostPath['hostId']
  readonly onChange: (value: HarnessProfileExecutable) => void
  readonly onAuthorize: () => void
}): ReactElement {
  return (
    <div className="settings-profile-executable">
      <label>
        <span>Executable</span>
        <select
          value={executable.kind}
          onChange={(event) => {
            const kind = event.currentTarget.value
            onChange(
              kind === 'provider-default'
                ? { kind: 'provider-default' }
                : kind === 'command'
                  ? { kind: 'command', command: '' }
                  : { kind: 'path', path: hostPath(hostId, '/') },
            )
          }}
```

</details>


---

<sub>2m 23s</sub>

### `rg`

**process\.env|TOKEN|gh |Authorization|Missing|required|usage**

"process\.env|TOKEN|gh |Authorization|Missing|required|usage" in *.{mjs,mts} (scripts/check-adrs.mjs, scripts/architecture-authorization.mts, scripts/architecture-github.mts, scripts/architecture-hotspots.mts)

<details>
<summary>16 matches</summary>

```
scripts/check-adrs.mjs:12:const requiredSections = [
scripts/check-adrs.mjs:52:  for (const section of requiredSections) {
scripts/check-adrs.mjs:59:      errors.push(`docs/adr/${name}: required decision sections are out of order`)
scripts/architecture-hotspots.mts:85:      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
scripts/architecture-authorization.mts:85:      'Unaccepted policy relaxation: a separate policy-only PR with unchanged consuming source is required',
scripts/architecture-authorization.mts:208:    if (!epic) throw new Error('Missing cumulative epic identity')
scripts/architecture-authorization.mts:255:      if (!afterBytes) throw new Error('Missing integrated policy')
scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
scripts/architecture-github.mts:63:          Authorization: `******
scripts/architecture-github.mts:95:    throw new Error('Missing or ambiguous exact epic branch')
scripts/architecture-github.mts:102:  environment: NodeJS.ProcessEnv = process.env,
scripts/architecture-github.mts:125:    if (!environment.GITHUB_EVENT_PATH) throw new Error('Missing PR event file')
scripts/architecture-github.mts:160:        throw new Error('Missing exact completing-child relationship')
scripts/architecture-github.mts:196:  const base = reader.requiredString(ref.object?.sha)
scripts/architecture-github.mts:215:      `Missing accepted epic CI evidence: ${merge} (${decision.accepted ? decision.kind : decision.rejection})`,
scripts/architecture-github.mts:218:  if (!pr || !evidence.sourceCommit) throw new Error('Missing accepted PR identities')
```

</details>


---

<sub>2m 23s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/TerminalDeck.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/terminal/TerminalDeck.tsx (lines 1-220)

<details>
<summary>187 lines</summary>

```
import type { CSSProperties, ReactElement, RefObject } from 'react'

import type {
  ComposerSubmitMode,
  HarnessProviderDescriptor,
  HostConnectionState,
  HostPath,
} from '../../../shared'
import { PaneResizer } from '../layout/PaneResizer'
import type { TerminalThemeOverride } from '../settings/settings'
import type {
  TerminalCursorDefaults,
  TerminalLinkActivation,
  TerminalTypography,
} from './terminal-pane'
import type { TerminalSession } from './terminal-workspace-model'
import type { FreshTerminalStart } from './terminal-runtime-options'
import type { TerminalRuntimeRegistry } from './terminal-runtime-registry'
import {
  TerminalSessionRuntimes,
  type TerminalSessionRuntimesProps,
} from './TerminalSessionRuntimes'

export function TerminalDeck({
  deckRef,
  label,
  visible,
  presentationVisible,
  available,
  ready,
  sessions,
  providers,
  activeId,
  primaryActiveId,
  secondaryActiveId,
  split,
  primaryWidth,
  terminalTheme,
  terminalLightThemeId,
  terminalDarkThemeId,
  terminalTypography,
  cursorDefaults,
  ligatures,
  composerSubmitMode,
  workspaceRoot,
  connectionState,
  onCreateDefault,
  onUpdateSession,
  onFreshStarted,
  onForkIdentity,
  onForkStartFailed,
  onExit,
  onInput,
  onOutput,
  onBell,
  onFocus,
  onLink,
  onSplit,
  onFork,
  onOpenTerminalSettings,
  onSetPrimaryWidth,
  onResetPrimaryWidth,
  runtimes,
}: {
  readonly deckRef: RefObject<HTMLDivElement | null>
  readonly label: string
  readonly visible: boolean
  readonly presentationVisible: boolean
  readonly available: boolean
  readonly ready: boolean
  readonly sessions: readonly TerminalSession[]
  readonly providers: readonly HarnessProviderDescriptor[]
  readonly activeId?: string
  readonly primaryActiveId?: string
  readonly secondaryActiveId?: string
  readonly split: boolean
  readonly primaryWidth?: number
  readonly terminalTheme: TerminalThemeOverride
  readonly terminalLightThemeId: string
  readonly terminalDarkThemeId: string
  readonly terminalTypography: TerminalTypography
  readonly cursorDefaults: TerminalCursorDefaults
  readonly ligatures: boolean
  readonly composerSubmitMode: ComposerSubmitMode
  readonly workspaceRoot: HostPath
  readonly connectionState: HostConnectionState
  readonly onCreateDefault?: () => void
  readonly onUpdateSession: (
    id: string,
    update: (session: TerminalSession) => TerminalSession,
  ) => void
  readonly onFreshStarted: (id: string, started: FreshTerminalStart) => void
  readonly onForkIdentity: TerminalSessionRuntimesProps['onForkIdentity']
  readonly onForkStartFailed: TerminalSessionRuntimesProps['onForkStartFailed']
  readonly onExit: TerminalSessionRuntimesProps['onExit']
  readonly onInput: (id: string, data: string) => void
  readonly onOutput: (id: string) => void
  readonly onBell: (id: string) => void
  readonly onFocus: (id: string) => void
  readonly onLink: (session: TerminalSession, activation: TerminalLinkActivation) => void
  readonly onSplit: () => void
  readonly onFork: (id: string) => void
  readonly onOpenTerminalSettings: () => void
  readonly onSetPrimaryWidth: (width: number) => void
  readonly onResetPrimaryWidth: () => void
  readonly runtimes: TerminalRuntimeRegistry
}): ReactElement {
  const style = primaryWidth
    ? ({ '--terminal-primary-track': `${primaryWidth}px` } as CSSProperties)
    : undefined
  const sessionRuntimes = (
    <TerminalSessionRuntimes
      sessions={sessions}
      providers={providers}
      activeId={activeId}
      primaryActiveId={primaryActiveId}
      secondaryActiveId={secondaryActiveId}
      presented={visible}
      presentationVisible={presentationVisible}
      terminalTheme={terminalTheme}
      terminalLightThemeId={terminalLightThemeId}
      terminalDarkThemeId={terminalDarkThemeId}
      terminalTypography={terminalTypography}
      cursorDefaults={cursorDefaults}
      ligatures={ligatures}
      composerSubmitMode={composerSubmitMode}
      workspaceRoot={workspaceRoot}
      connectionState={connectionState}
      onUpdateSession={onUpdateSession}
      onFreshStarted={onFreshStarted}
      onForkIdentity={onForkIdentity}
      onForkStartFailed={onForkStartFailed}
      onExit={onExit}
      onInput={onInput}
      onOutput={onOutput}
      onBell={onBell}
      onFocus={onFocus}
      onLink={onLink}
      onSplit={onSplit}
      onFork={onFork}
      onOpenTerminalSettings={onOpenTerminalSettings}
      runtimes={runtimes}
    />
  )
  if (!visible) return sessionRuntimes
  return (
    <div
      className={`terminal-deck${split ? ' split' : ''}`}
      ref={deckRef}
      style={style}
      aria-label={`${label} terminal workspace`}
      data-diagnostic-capture="terminal"
      hidden={!visible}
    >
      {ready && sessions.length === 0 ? (
        <div className="terminal-empty">
          {available && onCreateDefault ? (
            <button type="button" onClick={onCreateDefault}>
              New terminal
            </button>
          ) : (
            <span>No retained terminals</span>
          )}
        </div>
      ) : null}
      {sessionRuntimes}
      {split ? (
        <PaneResizer
          orientation="vertical"
          className="terminal-split-resizer"
          label="Resize split terminals"
          onDrag={(clientX) => {
            const left = deckRef.current?.getBoundingClientRect().left ?? 0
            onSetPrimaryWidth(clientX - left)
          }}
          onNudge={(delta) => {
            const primary = deckRef.current?.querySelector<HTMLElement>(
              '[data-terminal-slot="primary"].visible',
            )
            if (primary) {
              onSetPrimaryWidth(primary.getBoundingClientRect().width + delta)
            }
          }}
          onReset={onResetPrimaryWidth}
        />
      ) : null}
    </div>
  )
}
```

</details>


---

<sub>2m 23s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/App.tsx (lines 350-510)

<details>
<summary>161 lines</summary>

```
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
```

</details>


---

<sub>2m 42s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/scripts/architecture-hotspots.mts.**

/private/var/tmp/ws/aa87173d/hvir/scripts/architecture-hotspots.mts (lines 1-160)

<details>
<summary>138 lines</summary>

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
    `${graph.violations.length} dependency violation(s)`,
  ].join('\n')
}
```

</details>


---

<sub>2m 42s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/scripts/architecture-github.mts.**

/private/var/tmp/ws/aa87173d/hvir/scripts/architecture-github.mts (lines 1-160)

<details>
<summary>154 lines</summary>

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
```

</details>


---

<sub>2m 42s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/build/linux/after-install.sh.**

/private/var/tmp/ws/aa87173d/hvir/build/linux/after-install.sh (lines 1-90)

<details>
<summary>71 lines</summary>

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
```

</details>


---

<sub>2m 42s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/build/pkg-scripts/postinstall.**

/private/var/tmp/ws/aa87173d/hvir/build/pkg-scripts/postinstall (lines 15-50)

<details>
<summary>33 lines</summary>

```

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
```

</details>


---

<sub>2m 42s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx.**

/private/var/tmp/ws/aa87173d/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx (lines 1-130)

<details>
<summary>49 lines</summary>

```
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
```

</details>


---

<sub>3m 31s</sub>

### Copilot

I’ll cover installation, first-run use, agent configuration, and development commands, including the credentials required for full verification.


---

<sub>3m 59s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: /private/var/tmp/ws/aa87173d/hvir/README.md\n+# hvir\n+\n+hvir is a desktop workbench for software development with terminals and coding agents.\n+Built with Electron, React, and TypeScript, it brings local and SSH-backed projects,\n+agent sessions, file editing, and Git inspection into one workspace.\n+\n+## Features\n+\n+- **Projects and workspaces:** Open local folders or remote projects over SSH, manage\n+  multiple projects, and switch between discovered Git worktrees.\n+- **Coding-agent harnesses:** Built-in providers for Claude Code, Codex, Pi, Gemini CLI,\n+  GitHub Copilot CLI, and Cursor CLI, alongside a plain shell and custom commands.\n+  Configure reusable profiles and browse supported provider histories in the Sessions\n+  view. History, resume, and other capabilities vary by provider.\n+- **Terminals:** Ghostty-powered PTY terminals with split panes, workspace-specific\n+  layouts, configurable typography, and light/dark terminal themes.\n+- **Files and previews:** Browse and edit source files, inspect diffs, and render\n+  Markdown, Mermaid diagrams, HTML, images, CSV, JSON, and YAML.\n+- **Git inspection:** Explore working-tree changes, commit history, blame, and a commit\n+  graph; switch branches, fetch, and pull from the workbench.\n+- **Review and web panes:** Annotate documents for agent feedback and open development\n+  URLs in embedded web panes.\n+\n+## Install\n+\n+Download the appropriate native package from\n+[GitHub Releases](https://github.com/jarmak-personal/hvir/releases).\n+\n+| Platform | Architecture | Package |\n+| --- | --- | --- |\n+| macOS | Apple silicon (arm64) | `.pkg` |\n+| Linux, Debian/Ubuntu-compatible | x64 | `.deb` |\n+| Linux, Debian/Ubuntu-compatible | arm64 | `.deb` |\n+\n+The Linux package requires glibc 2.35 or newer and the `libstdc++6` package at version 12\n+or newer. Other desktop dependencies are declared in the package.\n+\n+Native packages install the desktop application and an `hvir` command. Launch the app\n+from your desktop, or open a local project from a terminal:\n+\n+```sh\n+hvir .\n+```\n+\n+Coding-agent CLIs are **not bundled**. Install and authenticate the agents you want to\n+use on the host where they will run. Git must also be available on that host for Git\n+features.\n+\n+## Run from source\n+\n+### Requirements\n+\n+- macOS or Linux.\n+- Node.js **24 or newer** and npm.\n+- Git.\n+- Python 3 and a native C/C++ build toolchain for the native modules: Xcode Command Line\n+  Tools on macOS, or tools such as `make` and `g++` on Linux.\n+- On Linux, the system libraries needed to run Electron in a desktop session.\n+\n+### Development setup\n+\n+```sh\n+git clone https://github.com/jarmak-personal/hvir.git\n+cd hvir\n+npm ci\n+npm run dev\n+```\n+\n+Run subsequent npm commands from the repository root. Installation downloads Electron,\n+builds the native file-operation binding, and rebuilds `node-pty` for Electron's ABI.\n+Do not skip npm lifecycle scripts.\n+\n+If native modules need rebuilding after a runtime change, run:\n+\n+```sh\n+npm run install:runtime\n+```\n+\n+If startup reports a terminal-runtime capability mismatch, restore the lockfile-pinned\n+dependencies with `npm ci`.\n+\n+## Getting started\n+\n+1. On first launch, choose a local project folder. A folder does not have to be a Git\n+   repository; Git tools are available when it is.\n+2. Use the project bar to add more projects and switch between their workspaces. For\n+   remote projects, define a host alias in `~/.ssh/config`, then select that host in the\n+   project picker and choose a remote folder.\n+3. Open **Settings > Harnesses** to configure agent profiles, commands, arguments, and\n+   project-specific or global defaults. Start a terminal with the desired profile.\n+4. Use **Files** and **Git** to inspect your project alongside its terminals. Open\n+   **Sessions** to browse histories supported by the installed providers.\n+\n+Settings also provides appearance, terminal, Git, and keybinding preferences. Project\n+registrations, harness profiles, and terminal recovery records are stored in Electron's\n+application user-data directory.\n+\n+**Environment values:** Literal values in harness profiles are stored and displayed as\n+plaintext. Use reference-sourced environment bindings rather than literals for secrets;\n+only reference-sourced values are redacted.\n+\n+## Development commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start Electron with the development renderer. |\n+| `npm run build` | Type-check and build the application into `out/`. |\n+| `npm run preview` | Launch the previously built application. |\n+| `npm test` | Run the Vitest suite once. |\n+| `npm run test:watch` | Run Vitest in watch mode. |\n+| `npm run typecheck` | Check main/preload and renderer TypeScript. |\n+| `npm run lint` | Run ESLint. |\n+| `npm run format:check` | Check formatting with Prettier. |\n+| `npm run architecture:report` | Inspect architecture budgets and dependencies offline. |\n+| `npm run verify` | Run seam, ADR, architecture, lint, type, and test checks. |\n+| `npm run smoke` | Build and run the Electron smoke scenarios. |\n+\n+Full `verify` includes GitHub-backed architecture provenance checks. These require the\n+canonical repository origin and Git history, plus an `HVIR_REPO_TOKEN` with access to\n+repository, issue, pull-request, and Actions evidence. Use `architecture:report` for\n+offline architecture inspection.\n+\n+Electron smoke scenarios need a graphical session. On headless Linux with Xvfb installed:\n+\n+```sh\n+xvfb-run -a npm run smoke\n+```\n+\n+For the focused macOS smoke suite, use `npm run smoke:macos`. To run an individual\n+scenario, use `npm run smoke:scenario -- <scenario>`; scenario names are listed in the\n+`smoke` script in [package.json](package.json).\n+\n+## Build native packages\n+\n+Run packaging on the matching operating system and CPU architecture so the native\n+modules match the target.\n+\n+| Command | Output |\n+| --- | --- |\n+| `npm run build:dir` | Unpacked application for the current platform. |\n+| `npm run pack:mac:arm64` | macOS Apple silicon `.pkg`. |\n+| `npm run pack:linux:x64` | Linux x64 `.deb`. |\n+| `npm run pack:linux:arm64` | Linux arm64 `.deb`. |\n+\n+Package artifacts are written to `dist/`. Packaging configuration is in\n+[electron-builder.yml](electron-builder.yml); release and package-acceptance automation\n+is in [.github/workflows](.github/workflows).\n+\n+## Project layout\n+\n+| Path | Responsibility |\n+| --- | --- |\n+| `src/main/` | Electron lifecycle, local/SSH hosts, terminals, harnesses, and application services. |\n+| `src/preload/` | Renderer-to-main IPC bridge. |\n+| `src/renderer/` | React workbench, terminals, viewers, Git tools, and settings. |\n+| `src/shared/` | Shared types, models, and IPC contracts. |\n+| `src/workers/` | Background utility-process workers. |\n+| `packages/rename-noreplace/` | Native atomic no-replace rename binding. |\n+| `test/` | Automated tests. |\n+| `scripts/` | Verification, smoke, maintenance, and release tooling. |\n+| `build/` | Icons, entitlements, and native package resources. |\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). Bundled third-party components retain\n+their own licenses; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/aa87173d/hvir/README.md
```


---

<sub>4m 21s</sub>

### `bash`

**Format and check the new README**

$ ./node_modules/.bin/prettier --write README.md && ./node_modules/.bin/prettier --check README.md && git --no-pager diff --check && git --no-pager status --short

```
Checking formatting...
All matched files use Prettier code style!
?? README.md
<shellId: 2 completed with exit code 0>
```


---

<sub>4m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/README.md.**

/private/var/tmp/ws/aa87173d/hvir/README.md

<details>
<summary>129 lines</summary>

````
# hvir

hvir is a desktop workbench for software development with terminals and coding agents.
Built with Electron, React, and TypeScript, it brings local and SSH-backed projects,
agent sessions, file editing, and Git inspection into one workspace.

## Features

- **Projects and workspaces:** Open local folders or remote projects over SSH, manage
  multiple projects, and switch between discovered Git worktrees.
- **Coding-agent harnesses:** Built-in providers for Claude Code, Codex, Pi, Gemini CLI,
  GitHub Copilot CLI, and Cursor CLI, alongside a plain shell and custom commands.
  Configure reusable profiles and browse supported provider histories in the Sessions
  view. History, resume, and other capabilities vary by provider.
- **Terminals:** Ghostty-powered PTY terminals with split panes, workspace-specific
  layouts, configurable typography, and light/dark terminal themes.
- **Files and previews:** Browse and edit source files, inspect diffs, and render
  Markdown, Mermaid diagrams, HTML, images, CSV, JSON, and YAML.
- **Git inspection:** Explore working-tree changes, commit history, blame, and a commit
  graph; switch branches, fetch, and pull from the workbench.
- **Review and web panes:** Annotate documents for agent feedback and open development
  URLs in embedded web panes.

## Install

Download the appropriate native package from
[GitHub Releases](https://github.com/jarmak-personal/hvir/releases).

| Platform | Architecture | Package |
| --- | --- | --- |
| macOS | Apple silicon (arm64) | `.pkg` |
| Linux, Debian/Ubuntu-compatible | x64 | `.deb` |
| Linux, Debian/Ubuntu-compatible | arm64 | `.deb` |

The Linux package requires glibc 2.35 or newer and the `libstdc++6` package at version 12
or newer. Other desktop dependencies are declared in the package.

Native packages install the desktop application and an `hvir` command. Launch the app
from your desktop, or open a local project from a terminal:

```sh
hvir .
```

Coding-agent CLIs are **not bundled**. Install and authenticate the agents you want to
use on the host where they will run. Git must also be available on that host for Git
features.

## Run from source

### Requirements

- macOS or Linux.
- Node.js **24 or newer** and npm.
- Git.
- Python 3 and a native C/C++ build toolchain for the native modules: Xcode Command Line
  Tools on macOS, or tools such as `make` and `g++` on Linux.
- On Linux, the system libraries needed to run Electron in a desktop session.

### Development setup

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

Run subsequent npm commands from the repository root. Installation downloads Electron,
builds the native file-operation binding, and rebuilds `node-pty` for Electron's ABI.
Do not skip npm lifecycle scripts.

If native modules need rebuilding after a runtime change, run:

```sh
npm run install:runtime
```

If startup reports a terminal-runtime capability mismatch, restore the lockfile-pinned
dependencies with `npm ci`.

## Getting started

1. On first launch, choose a local project folder. A folder does not have to be a Git
   repository; Git tools are available when it is.
2. Use the project bar to add more projects and switch between their workspaces. For
   remote projects, define a host alias in `~/.ssh/config`, then select that host in the
   project picker and choose a remote folder.
3. Open **Settings > Harnesses** to configure agent profiles, commands, arguments, and
   project-specific or global defaults. Start a terminal with the desired profile.
4. Use **Files** and **Git** to inspect your project alongside its terminals. Open
   **Sessions** to browse histories supported by the installed providers.

Settings also provides appearance, terminal, Git, and keybinding preferences. Project
registrations, harness profiles, and terminal recovery records are stored in Electron's
application user-data directory.

**Environment values:** Literal values in harness profiles are stored and displayed as
plaintext. Use reference-sourced environment bindings rather than literals for secrets;
only reference-sourced values are redacted.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Electron with the development renderer. |
| `npm run build` | Type-check and build the application into `out/`. |
| `npm run preview` | Launch the previously built application. |
| `npm test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run typecheck` | Check main/preload and renderer TypeScript. |
| `npm run lint` | Run ESLint. |
| `npm run format:check` | Check formatting with Prettier. |
| `npm run architecture:report` | Inspect architecture budgets and dependencies offline. |
| `npm run verify` | Run seam, ADR, architecture, lint, type, and test checks. |
| `npm run smoke` | Build and run the Electron smoke scenarios. |

Full `verify` includes GitHub-backed architecture provenance checks. These require the
canonical repository origin and Git history, plus an `HVIR_REPO_TOKEN` with access to
repository, issue, pull-request, and Actions evidence. Use `architecture:report` for
offline architecture inspection.

Electron smoke scenarios need a graphical session. On headless Linux with Xvfb installed:

```sh
xvfb-run -a npm run smoke
```

For the focused macOS smoke suite, use `npm run smoke:macos`. To run an individual
scenario, use `npm run smoke:scenario -- <scenario>`; scenario names are listed in the
`smoke` script in [package.json](package.json).

## Build native packages

Run packaging on the matching operating system and CPU architecture so the native
modules match the target.

| Command | Output |
| --- | --- |
| `npm run build:dir` | Unpacked application for the current platform. |
| `npm run pack:mac:arm64` | macOS Apple silicon `.pkg`. |
| `npm run pack:linux:x64` | Linux x64 `.deb`. |
| `npm run pack:linux:arm64` | Linux arm64 `.deb`. |

Package artifacts are written to `dist/`. Packaging configuration is in
[electron-builder.yml](electron-builder.yml); release and package-acceptance automation
is in [.github/workflows](.github/workflows).

## Project layout

| Path | Responsibility |
| --- | --- |
| `src/main/` | Electron lifecycle, local/SSH hosts, terminals, harnesses, and application services. |
| `src/preload/` | Renderer-to-main IPC bridge. |
| `src/renderer/` | React workbench, terminals, viewers, Git tools, and settings. |
| `src/shared/` | Shared types, models, and IPC contracts. |
| `src/workers/` | Background utility-process workers. |
| `packages/rename-noreplace/` | Native atomic no-replace rename binding. |
| `test/` | Automated tests. |
| `scripts/` | Verification, smoke, maintenance, and release tooling. |
| `build/` | Icons, entitlements, and native package resources. |

## License

hvir is licensed under the [MIT License](LICENSE). Bundled third-party components retain
their own licenses; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>4m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/aa87173d/hvir/.prettierignore.**

/private/var/tmp/ws/aa87173d/hvir/.prettierignore

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

<sub>4m 40s</sub>

### Copilot

Created [README.md](README.md) covering features, installation, local/SSH workflows, coding-agent setup, development commands, native packaging, project layout, and licensing.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
