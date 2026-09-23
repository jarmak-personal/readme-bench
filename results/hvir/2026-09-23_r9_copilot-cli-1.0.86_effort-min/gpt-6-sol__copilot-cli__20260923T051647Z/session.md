# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `9c3933a0-7bf6-4f85-8110-51792cb73d25`  
> - **Started:** 9/23/2026, 1:17:01 AM  
> - **Duration:** 14s  
> - **Exported:** 9/23/2026, 1:17:16 AM  

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

**Inspect project layout and worktree**

$ pwd && ls -la && git status --short && find . -maxdepth 2 -type f | head -80

<details>
<summary>111 lines</summary>

```
/private/var/tmp/ws/b24a14c7/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 23 01:16 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:16 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:16 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:16 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:16 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 23 01:16 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 23 01:16 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 23 01:16 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:16 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 23 01:16 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 23 01:16 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 23 01:16 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 23 01:16 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 23 01:16 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 23 01:16 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 23 01:16 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 23 01:16 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:16 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 23 01:16 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 23 01:16 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 23 01:16 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 23 01:16 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 23 01:16 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 23 01:16 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 23 01:16 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 23 01:16 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 23 01:16 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 23 01:16 vitest.config.ts
./electron.vite.config.ts
./.githooks/pre-push
./tsconfig.node.json
./LICENSE
./test/real-host-ssh-contract.test.ts
./test/project-entry-deletion.test.ts
./test/project-folder-picker-coordinator.test.ts
./test/harness-launch-menu.test.ts
./test/html-sandbox.test.ts
./test/use-document-review-workspace.test.tsx
./test/pty-supervisor-late-completion.test.ts
./test/terminal-fit.test.ts
./test/ghostty-terminal-search-identity.test.tsx
./test/issue-context.test.ts
./test/development-performance-measure-budget.test.ts
./test/native-installer.test.ts
./test/git-workspace.test.tsx
./test/ghostty-web-update-policy.test.ts
./test/terminal-attention-controller.test.tsx
./test/lifecycle-fixtures.test.ts
./test/pty-session-resources.test.ts
./test/diff-view-refresh.test.tsx
./test/claude-session-recovery.test.ts
./test/terminal-workspace-model.test.ts
./test/external-file-move-renderer.test.tsx
./test/pty-ownership.test.ts
./test/session-dialog.test.tsx
./test/capacity-terminal-activity.test.ts
./test/smoke-failure-artifact.test.ts
./test/release-pr-integrity.test.ts
./test/terminal-recovery-planner.test.ts
./test/project-kind-reconciler.test.ts
./test/terminal-workspace-materialization.test.tsx
./test/harness-probe.test.ts
./test/external-file-move.test.ts
./test/ssh-host-trust.test.ts
./test/tree-git-status.test.ts
./test/ssh-file-access.test.ts
./test/harness-profile-editor.test.tsx
./test/ghostty-web-update-coordinator.test.ts
./test/test-console-output-policy.test.ts
./test/electron-project-reveal.test.ts
./test/terminal-workspace-move-coordinator.test.ts
./test/terminal-wheel.test.ts
./test/diagnostic-evidence.test.ts
./test/git-windowing.test.ts
./test/remote-image-paste.test.ts
./test/workbench-layout.test.ts
./test/csv-parser.test.ts
./test/document-review-retention.test.ts
./test/terminal-semantic-regions.test.ts
./test/harness-shell-environment.test.ts
./test/terminal-context-menu.test.tsx
./test/files-interactions.test.tsx
./test/project-coordinator.test.ts
./test/project-pr-workflow-security.test.ts
./test/electron-process-metrics.test.ts
./test/sessions-terminal-ssh.test.tsx
./test/terminal-runtime.test.tsx
./test/verified-project-copy.test.ts
./test/harness-usage-artifact.test.ts
./test/viewer-tab-close-confirmation.test.tsx
./test/terminal-fork-runtime.test.tsx
./test/viewer-workload-policy.test.ts
./test/token-migration-plan.test.ts
./test/terminal-file-link.test.ts
./test/terminal-attention.test.ts
./test/terminal-ipc-launch-probe.test.ts
./test/external-document-ipc.test.ts
./test/terminal-layout-controls.test.tsx
./test/project-token-fields.test.ts
./test/diagnostic-report.test.ts
./test/viewer-position-operation.test.ts
./test/retained-viewer-workspace-cache.test.ts
./test/smoke-image-paste-fallback.test.ts
./test/issue-lifecycle-guidance.test.ts
./test/smoke-recovery-delivery.test.ts
./test/workbench-command-listener.test.tsx
./test/web-pane-workspace.test.ts
./test/workspace-removal-coordinator.test.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>2s</sub>

### `glob`

****/{README*,package.json,pyproject.toml,go.mod,Cargo.toml,Makefile,*.sln,requirements.txt,LICENSE*,AGENTS.md}**

"**/{README*,package.json,pyproject.toml,go.mod,Cargo.toml,Makefile,*.sln,requirements.txt,LICENSE*,AGENTS.md}"

```
./package.json
./LICENSE
./packages/rename-noreplace/package.json
./packages/rename-noreplace/LICENSE
./scripts/project-management/package.json
```


---

<sub>4s</sub>

### `view`

**view the file at /private/var/tmp/ws/b24a14c7/hvir/package.json.**

/private/var/tmp/ws/b24a14c7/hvir/package.json

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

**view the file at /private/var/tmp/ws/b24a14c7/hvir/electron-builder.yml.**

/private/var/tmp/ws/b24a14c7/hvir/electron-builder.yml

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

<sub>4s</sub>

### `bash`

**Inspect source areas, workflows and licensing**

$ find src -maxdepth 3 -type d | head -65; find .github -maxdepth 3 -type f; find build -maxdepth 2 -type f | head -35; cat LICENSE

<details>
<summary>95 lines</summary>

```
src
src/renderer
src/renderer/src
src/renderer/src/tree
src/renderer/src/settings
src/renderer/src/scrollbars
src/renderer/src/path-copy
src/renderer/src/development
src/renderer/src/layout
src/renderer/src/health
src/renderer/src/terminal
src/renderer/src/document-review
src/renderer/src/workspaces
src/renderer/src/context-menu
src/renderer/src/harness
src/renderer/src/styles
src/renderer/src/viewer
src/renderer/src/sessions
src/renderer/src/workbench
src/renderer/src/dashboards
src/renderer/src/diagnostics
src/renderer/src/git
src/shared
src/shared/ipc
src/workers
src/main
src/main/smoke
src/main/web-pane
src/main/pty
src/main/health
src/main/project-file-operations
src/main/terminal
src/main/document-review
src/main/harness
src/main/harness/providers
src/main/viewer
src/main/project-host
src/main/sessions
src/main/project-folder-picker
src/main/filename-search
src/main/window
src/main/diagnostics
src/main/ipc
src/main/ipc/features
src/main/git
src/preload
.github/workflows/real-host-ssh.yml
.github/workflows/release.yml
.github/workflows/ghostty-web-update.yml
.github/workflows/project-pr-planning.yml
.github/workflows/codeql.yml
.github/workflows/lock-tracker-conversations.yml
.github/workflows/project-kind.yml
.github/workflows/macos-package-release.yml
.github/workflows/release-pr-merged.yml
.github/workflows/ci.yml
.github/workflows/smoke-stress.yml
.github/dependabot.yml
build/entitlements.mac.inherit.plist
build/icon-macos.svg
build/icon-macos.icns
build/native/hvir-command
build/entitlements.mac.plist
build/icon-macos.png
build/icons-linux/16x16.png
build/icons-linux/1024x1024.png
build/icons-linux/256x256.png
build/icons-linux/128x128.png
build/icons-linux/32x32.png
build/icons-linux/512x512.png
build/icons-linux/64x64.png
build/linux/after-install.sh
build/linux/after-remove.sh
build/linux/hvir.apparmor
build/pkg-scripts/postinstall
build/pkg-scripts/preinstall
build/icon-linux.svg
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### `rg`

**Hvir|hvir|macOS|Windows|Linux|SSH|Claude|Codex|Copilot**

"Hvir|hvir|macOS|Windows|Linux|SSH|Claude|Codex|Copilot" in src/**/*.{ts,tsx}

<details>
<summary>222 matches</summary>

```
[grep-paths: 216 path(s) under ./src; grouped by directory]

./src/main/ (108 path(s))
  application-runtime-policy.ts
  diagnostics/diagnostic-report-storage.ts
  diagnostics/electron-diagnostic-report-actions.ts
  git/mutation-coordinator.ts
  harness/bundled-harness-providers.ts
  harness/claude-context-telemetry.ts
  harness/claude-keybindings.ts
  harness/claude-session-artifact.ts
  harness/claude-session-recovery.ts
  harness/codex-context-telemetry.ts
  harness/codex-session-discovery.ts
  harness/harness-launch.ts
  harness/harness-provider-contract.ts
  harness/harness-shell-environment.ts
  harness/harness-telemetry-hub.ts
  harness/providers/claude-code.ts
  harness/providers/codex.ts
  harness/providers/gemini.ts
  harness/providers/github-copilot.ts
  harness/remote-image-paste-storage.ts
  harness/remote-image-paste.ts
  index.ts
  ipc/deps.ts
  ipc/features/project.ts
  ipc/features/web-pane.ts
  navigation-policy.ts
  project-file-operations/case-only-project-entry-rename.ts
  project-file-operations/clipboard-file-list.ts
  project-file-operations/electron-external-move-picker.ts
  project-file-operations/staging-cleanup.ts
  project-file-operations/verified-project-copy.ts
  project-host/index.ts
  project-host/local-host.ts
  project-host/project-host-catalog.ts
  project-host/project-host.ts
  project-host/renderer-ssh-prompter.ts
  project-host/ssh-abort.ts
  project-host/ssh-auth.ts
  project-host/ssh-config.ts
  project-host/ssh-exclusive-create.ts
  project-host/ssh-file-access.ts
  project-host/ssh-host-trust.ts
  project-host/ssh-host.ts
  project-host/ssh-identity-source.ts
  project-host/ssh-text-prefix.ts
  project-host/ssh-transport-pool.ts
  project-registry.ts
  pty/pty-contract.ts
  pty/pty-supervisor.ts
  renderer-event-publisher.ts
  smoke/capacity-live-presentation.ts
  smoke/capacity-output-fixtures.ts
  smoke/capacity-terminals.ts
  smoke/capacity.ts
  smoke/development-performance.ts
  smoke/document-review-fixture.ts
  smoke/document-review.ts
  smoke/external-documents.ts
  smoke/external-file-move.ts
  smoke/files-interactions.ts
  smoke/harness-profile-workflow.ts
  smoke/index.ts
  smoke/macos-file-pasteboard.ts
  smoke/native-host-worker.ts
  smoke/native-pty.ts
  smoke/platform-contracts.ts
  smoke/project-entry-deletion.ts
  smoke/project-file-fixture.ts
  smoke/project-file-operations.ts
  smoke/project-state-fixture.ts
  smoke/renderer-isolation.ts
  smoke/renderer-lifecycle.ts
  smoke/renderer-readiness.ts
  smoke/renderer-recovery-delivery.ts
  smoke/renderer-recovery-producer.ts
  smoke/renderer-recovery.ts
  smoke/scrollbar-presentation.ts
  smoke/sessions-projection.ts
  smoke/sessions-visual.ts
  smoke/terminal-context-menu.ts
  smoke/terminal-cursor-presentation.ts
  smoke/terminal-file-paste.ts
  smoke/terminal-hidden-reveal.ts
  smoke/terminal-ligature-presentation.ts
  smoke/terminal-middle-click-close.ts
  smoke/terminal-move.ts
  smoke/terminal-palette-presentation.ts
  smoke/terminal-presentation.ts
  smoke/terminal-project-return.ts
  smoke/terminal-renderer-lifecycle.ts
  smoke/terminal-search.ts
  smoke/terminal-synchronized-output.ts
  smoke/terminal-theme-gallery-presentation.ts
  smoke/viewer-content.ts
  smoke/viewer-find.ts
  smoke/viewer-fixtures.ts
  smoke/viewer-position.ts
  smoke/web-pane.ts
  smoke/workbench-chrome.ts
  smoke/workbench-health.ts
  smoke/workspace-close.ts
  smoke/workspace-remote.ts
  terminal/electron-clipboard-file-paste.ts
  web-pane/loopback-http-proxy.ts
  web-pane/web-pane-route-registry.ts
  window/electron-renderer-recovery.ts
  window/electron-window-manager.ts
  worker-host.ts

./src/renderer/ (100 path(s))
  src/App.tsx
  src/ErrorBoundary.tsx
  src/dashboards/WebPane.tsx
  src/dashboards/use-web-pane-workspace.ts
  src/dashboards/web-pane-diagnostics.ts
  src/development/development-performance-fixture.tsx
  src/development/development-renderer-instrumentation.tsx
  src/development/performance-measure-budget.ts
  src/diagnostics/DiagnosticReportDialog.tsx
  src/document-review/document-review-delivery-client.ts
  src/document-review/document-review-delivery-feedback.ts
  src/document-review/document-review-rendered.ts
  src/document-review/use-document-review-workspace.ts
  src/git/GitGraphView.tsx
  src/git/commit-detail-client.ts
  src/git/use-git-rail-controller.ts
  src/git/use-git-workspace.ts
  src/health/WorkbenchHealthControl.tsx
  src/health/use-diagnostic-evidence.ts
  src/health/use-workbench-health.ts
  src/hvir.d.ts
  src/layout/workspace-layout-persistence.ts
  src/main.tsx
  src/scrollbars/scrollbar-presentation.ts
  src/sessions/SessionsOverview.tsx
  src/sessions/sessions-projection-coordinator.ts
  src/sessions/sessions-terminal-detail-controller.ts
  src/sessions/use-sessions-terminal-detail.ts
  src/settings/ComposerSubmitConsentDialog.tsx
  src/settings/SettingsDialog.tsx
  src/settings/TerminalThemeGallery.tsx
  src/settings/sections/AppearanceSettings.tsx
  src/settings/sections/GitSettings.tsx
  src/settings/sections/KeybindingsSettings.tsx
  src/settings/sections/TerminalSettings.tsx
  src/settings/settings.ts
  src/settings/typography-presentation.ts
  src/settings/use-add-harness-dialog.ts
  src/settings/use-harness-binding-authorization.ts
  src/settings/use-harness-folder-picker.ts
  src/settings/use-harness-profile-editor.ts
  src/settings/use-settings-controller.ts
  src/terminal/TerminalRecoveryDialog.tsx
  src/terminal/ghostty-terminal-file-paste.ts
  src/terminal/ghostty-terminal-fit.ts
  src/terminal/ghostty-terminal-pane.ts
  src/terminal/terminal-clipboard-osc.ts
  src/terminal/terminal-clipboard-write.ts
  src/terminal/terminal-event-router.ts
  src/terminal/terminal-palette.ts
  src/terminal/terminal-pane-event-coordinator.ts
  src/terminal/terminal-runtime-registry.ts
  src/terminal/terminal-runtime.ts
  src/terminal/terminal-split-persistence.ts
  src/terminal/terminal-theme-catalog.ts
  src/terminal/use-terminal-attention.ts
  src/terminal/use-terminal-persistence.ts
  src/terminal/use-terminal-profiles.ts
  src/terminal/use-terminal-recovery.ts
  src/terminal/use-terminal-session-commands.ts
  src/terminal/use-terminal-workspace-move.ts
  src/terminal/use-terminal-workspace-transfer.ts
  src/theme.ts
  src/tree/FileCreateOverlays.tsx
  src/tree/FileExternalMoveDialog.tsx
  src/tree/FileOrganizationDialog.tsx
  src/tree/FileTree.tsx
  src/tree/FilenameSearch.tsx
  src/tree/project-entry-drag.ts
  src/tree/use-external-file-copy.ts
  src/tree/use-external-file-move.ts
  src/tree/use-file-create-actions.ts
  src/tree/use-file-deletion-actions.ts
  src/tree/use-file-manager-reveal.ts
  src/tree/use-file-organization-actions.ts
  src/tree/use-project-file-operation.ts
  src/viewer/DiffView.tsx
  src/viewer/RenderedView.tsx
  src/viewer/RepositoryImageView.tsx
  src/viewer/SourceView.tsx
  src/viewer/TabStrip.tsx
  src/viewer/codemirror-find-target.ts
  src/viewer/dom-find-target.ts
  src/viewer/markdown-extensions.ts
  src/viewer/markdown-repository-images.ts
  src/viewer/use-diff-inputs.ts
  src/viewer/use-source-blame.ts
  src/viewer/use-viewer-workspace.ts
  src/viewer/viewer-workspace-persistence.ts
  src/workbench/use-renderer-ready.ts
  src/workbench/use-terminal-path-activation.ts
  src/workbench/use-workbench-commands.ts
  src/workspaces/ProjectsBar.tsx
  src/workspaces/SessionDialog.tsx
  src/workspaces/WorkspaceCatalogDialogs.tsx
  src/workspaces/project-folder-picker-client.ts
  src/workspaces/project-session-events.ts
  src/workspaces/project-session.ts
  src/workspaces/project-watch-interests.ts
  src/workspaces/workspace-session-actions.ts

./src/shared/ (7 path(s))
  git-types.ts
  harness-profile.ts
  harness-provider.ts
  host-path.ts
  html-preview.ts
  ipc.ts
  sessions-projection.ts

./src/preload/ (1 path(s))
  index.ts

[extensions: .ts=185, .tsx=31]
```

</details>


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/b24a14c7/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/b24a14c7/hvir/src/renderer/src/App.tsx (lines 1-220)

<details>
<summary>220 lines</summary>

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
```

</details>


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/b24a14c7/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/b24a14c7/hvir/src/main/harness/bundled-harness-providers.ts

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

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/b24a14c7/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/b24a14c7/hvir/.github/workflows/ci.yml (lines 1-130)

<details>
<summary>110 lines</summary>

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
```

</details>


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/b24a14c7/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/b24a14c7/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx (lines 1-160)

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

<sub>13s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workspace for working on local and SSH-hosted projects. It brings project files, Git worktrees, terminals, code review, and developer tools into one Electron application.\n+\n+## Features\n+\n+- Browse and edit project files, view rendered Markdown and images, and inspect diffs.\n+- Work with Git changes, branches, and worktrees.\n+- Run multiple terminals, including sessions for supported coding assistants (Claude Code, Codex, Pi, Gemini, GitHub Copilot, and Cursor) or a custom command.\n+- Connect to remote projects over SSH and manage local projects in the same workspace.\n+- Open web panes alongside the editor and terminals.\n+\n+Coding assistants are launched through their own command-line tools; install and configure the tools you want to use separately.\n+\n+## Getting started\n+\n+You need Node.js 24 or newer and npm. Building native dependencies also requires a working C/C++ build toolchain and Python for `node-gyp`. The app is developed for macOS and Linux; package targets are macOS (`.pkg`) and Linux (`.deb`).\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` runs the postinstall step, which builds the native filesystem helper and prepares `node-pty` for Electron. Once the app opens, add a local project folder or configure an SSH host to open a remote project.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run build` | Type-check and build the Electron application |\n+| `npm run build:dir` | Build an unpacked app in `dist/` |\n+| `npm run pack:mac:arm64` | Build a macOS arm64 package |\n+| `npm run pack:linux:x64` | Build a Linux x64 `.deb` |\n+| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb` |\n+| `npm run lint` | Run ESLint |\n+| `npm run typecheck` | Check Node and renderer TypeScript |\n+| `npm test` | Run the Vitest suite |\n+| `npm run verify` | Run policy checks, lint, type checks, and tests |\n+\n+The app uses Electron with a React/TypeScript renderer. Main-process code lives in `src/main`, the UI in `src/renderer`, preload bindings in `src/preload`, and shared contracts in `src/shared`. See `package.json` for additional smoke and acceptance-test commands.\n+\n+## License\n+\n+MIT; see [LICENSE](LICENSE). Third-party attribution is in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/b24a14c7/hvir/README.md
```


---

<sub>13s</sub>

### Copilot

Created `README.md` with a project overview, key features, setup instructions, development commands, repository layout, and license information.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
