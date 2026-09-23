# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `44e53342-9124-477d-98a3-801430d269d7`  
> - **Started:** 9/22/2026, 11:57:36 PM  
> - **Duration:** 19s  
> - **Exported:** 9/22/2026, 11:57:55 PM  

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

**Inspect repository structure and status**

$ pwd && git --no-pager status --short && ls -la && find . -maxdepth 2 -type f | head -80

<details>
<summary>111 lines</summary>

```
/private/var/tmp/ws/ada70912/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 22 23:57 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:57 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:57 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:57 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:57 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 22 23:57 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 22 23:57 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 22 23:57 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:57 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 22 23:57 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 22 23:57 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 22 23:57 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 22 23:57 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 22 23:57 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 22 23:57 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 22 23:57 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 22 23:57 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:57 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 22 23:57 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 22 23:57 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 22 23:57 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 22 23:57 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 22 23:57 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 22 23:57 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 22 23:57 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 22 23:57 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 22 23:57 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 22 23:57 vitest.config.ts
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

<sub>3s</sub>

### `session_store_sql`

**Find recent project context**

<details>
<summary>Arguments</summary>

```json
{
  "query": "SELECT id, summary, created_at FROM sessions WHERE repository = '/private/var/tmp/ws/ada70912/hvir' AND created_at >= now() - INTERVAL '7 days' ORDER BY created_at DESC LIMIT 5",
  "description": "Find recent project context"
}
```

</details>

```
Query returned 0 rows.
```


---

<sub>5s</sub>

### `view`

**view the file at /private/var/tmp/ws/ada70912/hvir/package.json.**

/private/var/tmp/ws/ada70912/hvir/package.json

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

**view the file at /private/var/tmp/ws/ada70912/hvir/electron-builder.yml.**

/private/var/tmp/ws/ada70912/hvir/electron-builder.yml

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

**view the file at /private/var/tmp/ws/ada70912/hvir/.github.**

/private/var/tmp/ws/ada70912/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>5s</sub>

### `bash`

**Inspect source layout, build scripts, history**

$ find src packages build scripts -maxdepth 2 -type f | head -110; git --no-pager log -5 --format='%s'; cat .gitignore

<details>
<summary>128 lines</summary>

```
src/renderer/index.html
src/shared/file-uri.ts
src/shared/web-pane.ts
src/shared/diagnostic-report-event.ts
src/shared/fs-types.ts
src/shared/filename-search.ts
src/shared/sessions-projection.ts
src/shared/html-preview.ts
src/shared/git-types.ts
src/shared/host-path.ts
src/shared/diagnostic-evidence.ts
src/shared/markdown-it-task-lists.d.ts
src/shared/composer-submit.ts
src/shared/harness-telemetry.ts
src/shared/viewer-types.ts
src/shared/terminal-attention.ts
src/shared/harness-provider.ts
src/shared/application-build-channel.ts
src/shared/project-file-operations.ts
src/shared/terminal-start-admission.ts
src/shared/diagnostics.ts
src/shared/viewer-workload-policy.ts
src/shared/keybindings.ts
src/shared/ipc.ts
src/shared/disposer.ts
src/shared/index.ts
src/shared/operation-result.ts
src/shared/diagnostic-report.ts
src/shared/workbench-health.ts
src/shared/document-review.ts
src/shared/harness-usage.ts
src/shared/workspace-types.ts
src/shared/harness-profile.ts
src/shared/terminal-clipboard-file-paste.ts
src/shared/rendered-link.ts
src/shared/ipc-contract.ts
src/shared/worker-protocol.ts
src/workers/echo-worker.ts
src/workers/git-worker.ts
src/main/renderer-event-delivery.ts
src/main/application-runtime.ts
src/main/html-preview-protocol.ts
src/main/worker-host.ts
src/main/project-registry.ts
src/main/application-runtime-policy.ts
src/main/project-watch.ts
src/main/project-coordinator.ts
src/main/workspace-activity.ts
src/main/attention-badge.ts
src/main/renderer-event-publisher.ts
src/main/build-environment.d.ts
src/main/workbench-runtime.ts
src/main/workspace-cleanup.ts
src/main/ipc.ts
src/main/workspace-coordinator.ts
src/main/index.ts
src/main/renderer-resource-scopes.ts
src/main/navigation-policy.ts
src/main/workspace-removal-coordinator.ts
src/main/renderer-presentation-resources.ts
src/preload/renderer-diagnostics.ts
src/preload/index.ts
src/preload/terminal-clipboard-file-paste.ts
packages/rename-noreplace/rename_noreplace.c
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
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
scripts/run-linux-package-smoke.sh
scripts/render-native-installer.d.mts
scripts/validate-release-pr.mts
scripts/phase8-gauntlet.sh
scripts/run-smoke.sh
scripts/run-smoke-interruption.mts
scripts/run-macos-package-smoke.sh
scripts/render-native-installer.mjs
scripts/assemble-native-release.mjs
scripts/architecture-github.mts
scripts/native-installer.template.sh
scripts/architecture-hotspots.mts
scripts/architecture-module-graph.mts
scripts/architecture-wiring.mts
scripts/installed-harness-dialog-probe.mts
scripts/capture-contributor-usage.mts
scripts/check-terminal-runtime.mts
scripts/ghostty-web-update/policy.mts
scripts/ghostty-web-update/github-release-source.mts
scripts/ghostty-web-update/coordinator.mts
scripts/ghostty-web-update/cli.mts
scripts/ghostty-web-update/repository-candidate.mts
scripts/ghostty-web-update/candidate-bundle.mts
Initial commit
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### `rg`

**hvir|workspace|SSH|Copilot|Claude**

"hvir|workspace|SSH|Copilot|Claude" in **/*.{tsx,ts} (src/renderer)

<details>
<summary>181 matches</summary>

```
[grep-paths: 162 path(s) under src/renderer/src; grouped by directory]

src/renderer/src/terminal/ (40 path(s))
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
  ghostty-terminal-fit.ts
  ghostty-terminal-pane.ts
  terminal-clipboard-osc.ts
  terminal-clipboard-write.ts
  terminal-event-router.ts
  terminal-file-link.ts
  terminal-fork-policy.ts
  terminal-palette.ts
  terminal-pane-event-coordinator.ts
  terminal-recovery-planner.ts
  terminal-runtime-launch.ts
  terminal-runtime-options.ts
  terminal-runtime-registry.ts
  terminal-runtime.ts
  terminal-sessions-surface-owner.ts
  terminal-split-persistence.ts
  terminal-surface-attachment.ts
  terminal-theme-catalog.ts
  terminal-workspace-runtime-owner.ts
  use-new-worktree-move-badge.ts
  use-terminal-attention-controller.ts
  use-terminal-attention.ts
  use-terminal-pane-controller.ts
  use-terminal-persistence.ts
  use-terminal-profiles.ts
  use-terminal-recovery.ts
  use-terminal-session-commands.ts
  use-terminal-workspace-move.ts
  use-terminal-workspace-runtime.ts
  use-terminal-workspace-transfer.ts

src/renderer/src/viewer/ (21 path(s))
  DiffView.tsx
  RenderedView.tsx
  RepositoryImageView.tsx
  SourceView.tsx
  TabStrip.tsx
  codemirror-find-target.ts
  dom-find-target.ts
  external-document-tabs.ts
  markdown-extensions.ts
  markdown-repository-images.ts
  retained-viewer-workspace-cache.ts
  use-diff-inputs.ts
  use-source-blame.ts
  use-viewer-path-lifecycle.ts
  use-viewer-workspace.ts
  viewer-path-rebind.ts
  viewer-path-removal.ts
  viewer-read-policy.ts
  viewer-workspace-model.ts
  viewer-workspace-persistence.ts
  viewer-workspace-selectors.ts

src/renderer/src/settings/ (19 path(s))
  ComposerSubmitConsentDialog.tsx
  HarnessProfileEditor.tsx
  HarnessProfilesSettings.tsx
  SettingsActiveSection.tsx
  SettingsDialog.tsx
  TerminalThemeGallery.tsx
  harness-argument-editor.ts
  harness-profile-request-policy.ts
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/TerminalSettings.tsx
  settings.ts
  typography-presentation.ts
  use-add-harness-dialog.ts
  use-harness-binding-authorization.ts
  use-harness-folder-picker.ts
  use-harness-profile-editor.ts
  use-harness-profile-load.ts
  use-settings-controller.ts

src/renderer/src/document-review/ (16 path(s))
  DocumentReviewControls.tsx
  DocumentReviewDeliveryPanel.tsx
  document-review-batches.ts
  document-review-delivery-client.ts
  document-review-delivery-feedback.ts
  document-review-eligibility.ts
  document-review-model.ts
  document-review-rendered.ts
  document-review-selectors.ts
  document-review-types.ts
  document-review-validation.ts
  document-review-workspace-controller.ts
  document-review-workspace.ts
  use-document-review-delivery.ts
  use-document-review-interaction.ts
  use-document-review-workspace.ts

src/renderer/src/tree/ (15 path(s))
  DirectoryTree.tsx
  FileCreateOverlays.tsx
  FileExternalMoveDialog.tsx
  FileOrganizationDialog.tsx
  FileTree.tsx
  FilenameSearch.tsx
  project-entry-drag.ts
  use-external-file-copy.ts
  use-external-file-move.ts
  use-file-create-actions.ts
  use-file-deletion-actions.ts
  use-file-manager-reveal.ts
  use-file-organization-actions.ts
  use-path-copy-action.ts
  use-project-file-operation.ts

src/renderer/src/sessions/ (10 path(s))
  SessionsApplicationDestination.tsx
  SessionsCollectionToolbar.tsx
  SessionsOverview.tsx
  SessionsTerminalDetail.tsx
  sessions-overview-model.ts
  sessions-projection-coordinator.ts
  sessions-renderer-observation.ts
  sessions-terminal-detail-controller.ts
  sessions-terminal-surface.ts
  use-sessions-terminal-detail.ts

src/renderer/src/workspaces/ (10 path(s))
  MissingWorkspaceNotice.tsx
  ProjectsBar.tsx
  SessionDialog.tsx
  WorkspaceCatalogDialogs.tsx
  project-folder-picker-client.ts
  project-session-model.ts
  project-session.ts
  project-watch-interests.ts
  workspace-attention.ts
  workspace-session-actions.ts

src/renderer/src/workbench/ (6 path(s))
  TerminalLayoutControls.tsx
  use-renderer-ready.ts
  use-terminal-path-activation.ts
  use-workbench-commands.ts
  use-workbench-layout.ts
  workspace-pane-state.ts

src/renderer/src/ (5 path(s))
  App.tsx
  ErrorBoundary.tsx
  hvir.d.ts
  main.tsx
  theme.ts

src/renderer/src/git/ (5 path(s))
  GitGraphView.tsx
  commit-detail-client.ts
  git-capability.ts
  use-git-rail-controller.ts
  use-git-workspace.ts

src/renderer/src/dashboards/ (4 path(s))
  WebPane.tsx
  WebPaneStack.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts

src/renderer/src/development/ (3 path(s))
  development-performance-fixture.tsx
  development-renderer-instrumentation.tsx
  performance-measure-budget.ts

src/renderer/src/health/ (3 path(s))
  WorkbenchHealthControl.tsx
  use-diagnostic-evidence.ts
  use-workbench-health.ts

src/renderer/src/path-copy/ (2 path(s))
  PathCopyMenu.tsx
  path-copy.ts

src/renderer/src/diagnostics/ (1 path(s))
  DiagnosticReportDialog.tsx

src/renderer/src/layout/ (1 path(s))
  workspace-layout-persistence.ts

src/renderer/src/scrollbars/ (1 path(s))
  scrollbar-presentation.ts

[extensions: .ts=110, .tsx=52]
```

</details>


---

<sub>7s</sub>

### `bash`

**Inspect workflows, UI paths and runtime requirements**

$ find .github src/renderer -maxdepth 3 -type f | head -110; head -55 LICENSE; ls -la docs 2>/dev/null || true; sed -n '1,100p' scripts/check-terminal-runtime.mts

<details>
<summary>215 lines</summary>

```
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
src/renderer/index.html
src/renderer/src/tree/file-manager-reveal.ts
src/renderer/src/tree/use-external-file-copy.ts
src/renderer/src/tree/use-project-file-operation.ts
src/renderer/src/tree/use-file-create-actions.ts
src/renderer/src/tree/FileTree.tsx
src/renderer/src/tree/use-external-file-actions.ts
src/renderer/src/tree/file-name.ts
src/renderer/src/tree/FileOrganizationDialog.tsx
src/renderer/src/tree/DirectoryTree.tsx
src/renderer/src/tree/git-ignore-refresh.ts
src/renderer/src/tree/project-file-entry-name.ts
src/renderer/src/tree/file-action-menu.ts
src/renderer/src/tree/use-path-copy-action.ts
src/renderer/src/tree/project-entry-drag.ts
src/renderer/src/tree/file-operation-feedback.ts
src/renderer/src/tree/FileDeletionDialog.tsx
src/renderer/src/tree/use-file-organization-actions.ts
src/renderer/src/tree/git-status-decoration.ts
src/renderer/src/tree/use-file-manager-reveal.ts
src/renderer/src/tree/directory-entry-sort.ts
src/renderer/src/tree/project-file-owner-key.ts
src/renderer/src/tree/FileExternalMoveDialog.tsx
src/renderer/src/tree/use-file-deletion-actions.ts
src/renderer/src/tree/FileCreateOverlays.tsx
src/renderer/src/tree/use-external-file-move.ts
src/renderer/src/tree/file-action-destination.ts
src/renderer/src/tree/FilenameSearch.tsx
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/settings/SettingsSection.tsx
src/renderer/src/settings/use-harness-binding-authorization.ts
src/renderer/src/settings/use-harness-profile-editor.ts
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/SettingsSectionNavigation.tsx
src/renderer/src/settings/harness-argument-editor.ts
src/renderer/src/settings/HarnessProfileCommandFields.tsx
src/renderer/src/settings/settings.ts
src/renderer/src/settings/use-harness-folder-picker.ts
src/renderer/src/settings/harness-profile-request-policy.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/use-add-harness-dialog.ts
src/renderer/src/settings/typography-presentation.ts
src/renderer/src/settings/HarnessProfileEditor.tsx
src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
src/renderer/src/settings/typography-settings.ts
src/renderer/src/settings/use-harness-profile-load.ts
src/renderer/src/settings/TerminalThemeGallery.tsx
src/renderer/src/settings/HarnessProfilesSettings.tsx
src/renderer/src/settings/use-settings-controller.ts
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/settings-draft.ts
src/renderer/src/settings/harness-profile-draft.ts
src/renderer/src/settings/settings-navigation.ts
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/HarnessProfileOverlays.tsx
src/renderer/src/App.tsx
src/renderer/src/main.tsx
src/renderer/src/styles.css
src/renderer/src/scrollbars/scrollbar-presentation.ts
src/renderer/src/path-copy/use-path-copy-menu.ts
src/renderer/src/path-copy/path-copy.ts
src/renderer/src/path-copy/PathCopyMenu.tsx
src/renderer/src/development/development-renderer-instrumentation.tsx
src/renderer/src/development/development-performance-fixture.tsx
src/renderer/src/development/development-performance-pump.tsx
src/renderer/src/development/performance-measure-budget.ts
src/renderer/src/theme-model.ts
src/renderer/src/layout/PaneResizer.tsx
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/layout/split-layout-policy.ts
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/health/use-workbench-health.ts
src/renderer/src/health/use-diagnostic-evidence.ts
src/renderer/src/terminal/TerminalView.tsx
src/renderer/src/terminal/ghostty-terminal-file-paste.ts
src/renderer/src/terminal/terminal-semantic-regions.ts
src/renderer/src/terminal/terminal-theme-catalog.ts
src/renderer/src/terminal/terminal-pane-event-coordinator.ts
src/renderer/src/terminal/use-terminal-persistence.ts
src/renderer/src/terminal/terminal-context-menu-target.ts
src/renderer/src/terminal/terminal-wheel.ts
src/renderer/src/terminal/TerminalDeck.tsx
src/renderer/src/terminal/ghostty-terminal-fit.ts
src/renderer/src/terminal/use-terminal-recovery.ts
src/renderer/src/terminal/use-new-worktree-move-badge.ts
src/renderer/src/terminal/ghostty-terminal-pane.ts
src/renderer/src/terminal/use-terminal-workspace-transfer.ts
src/renderer/src/terminal/terminal-workspace-runtime-owner.ts
src/renderer/src/terminal/terminal-fork-policy.ts
src/renderer/src/terminal/effect-generation.ts
src/renderer/src/terminal/use-terminal-attention.ts
src/renderer/src/terminal/terminal-context-menu-position.ts
src/renderer/src/terminal/TerminalRecoveryDialog.tsx
src/renderer/src/terminal/TerminalRail.tsx
src/renderer/src/terminal/TerminalWorkspace.tsx
src/renderer/src/terminal/use-terminal-launch-menu-layout.ts
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/ada70912/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/ada70912/hvir/src/renderer/src/App.tsx (lines 1-220)

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

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/ada70912/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/ada70912/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-170)

<details>
<summary>160 lines</summary>

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
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/ada70912/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/ada70912/hvir/src/shared/harness-provider.ts

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

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/ada70912/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/ada70912/hvir/.github/workflows/ci.yml (lines 1-145)

<details>
<summary>123 lines</summary>

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
```

</details>


---

<sub>10s</sub>

### `rg`

**Claude|Codex|Copilot|OpenAI|default.*provider**

"Claude|Codex|Copilot|OpenAI|default.*provider" in **/*.{ts,tsx} (src/main)

<details>
<summary>188 matches</summary>

```
[grep content: 176 matches across 14 file(s) under src/main]

harness/claude-session-artifact.ts (8 match(es)):
   /** Claude Code's cwd-qualified transcript location, behind the provider seam. */
   export interface ClaudeSessionArtifactContext {
   export interface ClaudeSessionArtifactLocation {
    * Match Claude Code 2.1.216's project-directory derivation exactly.
   /** Resolve exactly one profile- and cwd-qualified Claude transcript path. */
   export async function resolveClaudeSessionArtifact(
     context: ClaudeSessionArtifactContext,
   ): Promise<ClaudeSessionArtifactLocation | undefined> {

harness/claude-session-recovery.ts (4 match(es)):
   import { resolveClaudeSessionArtifact } from './claude-session-artifact'
    * Claude accepts a caller-supplied UUID before it has persisted any turns.
    * Claude derives from this profile and physical launch cwd.
       const location = await resolveClaudeSessionArtifact(host, context, signal)

harness/codex-session-discovery.ts (12 match(es)):
    * Codex persisted-session identification.
    * Codex can resume an exact session id but does not accept a launch-time id.
   interface CodexSessionSnapshot {
   export interface CodexSessionDiscoveryOptions {
   export function createCodexSessionDiscovery(options: CodexSessionDiscoveryOptions = {}): {
       async snapshot(host, artifact): Promise<CodexSessionSnapshot> {
         const canonicalCwd = await canonicalCodexCwd(host, context.cwd, context.signal)
   export const codexSessionDiscovery = createCodexSessionDiscovery()
   export async function canonicalCodexCwd(
         `Codex session scan failed (${result.code ?? result.signal ?? 'exit'})`,
       throw new Error('Codex session scan did not report the project host clock')
   function isSnapshot(value: unknown): value is CodexSessionSnapshot {
harness/harness-launch.ts:   if (profile.executable.kind === 'provider-default') return providerDefault

harness/harness-provider-registry.ts (3 match(es)):
       const defaults = [...this.providers.values()].filter(
         throw new Error('Harness provider registry requires exactly one default provider')
         default: provider.manifest.default === true,

harness/codex-context-telemetry.ts (45 match(es)):
   /** Structured Codex context usage, isolated behind the harness adapter seam. */
   import { canonicalCodexCwd } from './codex-session-discovery'
   interface CodexSessionData {
   interface CodexUsageEnvelope {
         readonly total_token_usage?: CodexTokenUsage
   interface CodexTokenUsage {
   export async function snapshotCodexUsage(
     const canonicalCwd = await canonicalCodexCwd(host, context.cwd, context.signal)
           const envelope = parseCodexUsageEnvelope(line)
           const normalized = normalizeCodexUsageCounters(
   export async function observeCodexContext(
         const envelope = parseCodexUsageEnvelope(record)
         return parseCodexTokenCount(record)
   export async function observeCodexUsage(
         provenance: 'Codex cumulative usage lifecycle',
         usage: { status: 'pending', reason: 'Waiting for qualified Codex usage' },
             provenance: 'Codex cumulative usage lifecycle',
             snapshotCodexUsage(host, {
                 provenance: 'Codex cumulative usage lifecycle',
                 usage: { status: 'pending', reason: 'Waiting for Codex usage records' },
                 provenance: 'Codex qualified cumulative usage snapshot',
               provenance: 'Codex qualified cumulative usage snapshot',
             const envelope = parseCodexUsageEnvelope(record)
             const counters = normalizeCodexUsageCounters(
                 provenance: 'Codex cumulative usage continuity',
                   reason: 'Codex cumulative counters decreased',
                     provenance: 'Codex rollout cumulative token_count event',
                 provenance: 'Codex rollout cumulative token_count event',
                     provenance: 'Codex cumulative usage lifecycle',
                       reason: 'Waiting for Codex usage source',
                   provenance: 'Codex cumulative usage lifecycle',
                     reason: `Codex usage follower ${health.reason}`,
               provenance: 'Codex cumulative usage lifecycle',
   export function parseCodexTokenCount(value: string): HarnessTelemetry | null {
         provenance: 'Codex rollout token_count event',
     const rolloutPath = (value as Partial<CodexSessionData>).rolloutPath
   function parseCodexUsageEnvelope(value: string): CodexUsageEnvelope | undefined {
   function normalizeCodexUsageCounters(
     value: CodexTokenUsage | undefined,
     parse: parseCodexTokenCount,
         ? 'Waiting for Codex context telemetry'
           ? 'Codex rollout unavailable'
             ? 'Codex context follower unavailable'
             : 'Codex context helper unavailable'
       provenance: 'Codex context telemetry lifecycle',
harness/harness-profile-store.ts:   if (value['kind'] === 'provider-default') return { kind: 'provider-default' }

harness/providers/codex.ts (19 match(es)):
     observeCodexContext,
     observeCodexUsage,
     snapshotCodexUsage,
     supportsCodexDocumentReviewProfile,
       displayName: 'Codex',
         displayName: 'Codex',
         description: 'Codex with exact rollout discovery and recovery.',
     telemetry: { observe: observeCodexContext },
     usageTelemetry: { observe: observeCodexUsage },
     usageSnapshots: { snapshot: snapshotCodexUsage },
       supportsReviewSendNowVersion: supportsCodexReviewSendNowVersion,
       supportsExactForkVersion: supportsCodexExactForkVersion,
       if (!ctx.parentSessionId) throw new Error('Codex fork requires an exact parent id')
       supportsCodexDocumentReviewProfile(launch.profile) &&
           throw new Error('Codex review submission is unavailable for this launch')
    * A live Codex process launched through the provider default remains an explicit
   function supportsCodexDocumentReviewProfile(
   function supportsCodexReviewSendNowVersion(version: string | undefined): boolean {
   function supportsCodexExactForkVersion(version: string | undefined): boolean {

harness/providers/github-copilot.ts (4 match(es)):
   export const githubCopilotProvider: HarnessProvider = {
       displayName: 'GitHub Copilot CLI',
         displayName: 'GitHub Copilot CLI',
           'Copilot CLI. Launch-only across versions without verified --session-id.',

harness/providers/claude-code.ts (14 match(es)):
   import { configureClaudeComposerSubmit } from '../claude-keybindings'
     observeClaudeContext,
     observeClaudeUsage,
     snapshotClaudeUsage,
       displayName: 'Claude Code',
         displayName: 'Claude Code',
         description: 'Claude Code with exact hvir-managed session recovery.',
     telemetry: { observe: observeClaudeContext },
     usageTelemetry: { observe: observeClaudeUsage },
     usageSnapshots: { snapshot: snapshotClaudeUsage },
       supportsExactForkVersion: supportsClaudeExactForkVersion,
     composerConfiguration: { configure: configureClaudeComposerSubmit },
         throw new Error('Claude Code fork requires an exact parent id')
   function supportsClaudeExactForkVersion(version: string | undefined): boolean {

harness/claude-keybindings.ts (16 match(es)):
   export async function configureClaudeComposerSubmit(
         throw new Error('Could not create the Claude config directory')
         throw new Error('Claude config path is not a directory')
       if (!slot) throw new Error('Could not prepare Claude keybindings')
       if (!isObject(blockBindings)) throw new Error('Claude Chat keybindings are invalid')
           throw new Error(`Claude has duplicate ${target} Chat bindings`)
       throw new Error('Claude keybindings contain invalid JSON; hvir left them unchanged')
         'Claude keybindings have an invalid structure; hvir left them unchanged',
       throw new Error('hvir cannot read its Claude keybinding restore state')
       throw new Error('hvir Claude keybinding restore state is invalid')
       throw new Error('hvir Claude keybinding restore state is invalid')
       throw new Error('hvir Claude keybinding restore state is invalid')
       throw new Error('hvir Claude keybinding restore state is invalid')
       throw new Error('Could not resolve the Claude config directory')
     throw new Error('Claude Chat keybindings have an invalid action')
       'Claude submit bindings changed after hvir configured them; hvir left the file untouched',

harness/claude-context-telemetry.ts (45 match(es)):
   /** Structured Claude Code usage, isolated behind the harness adapter seam. */
   import { resolveClaudeSessionArtifact } from './claude-session-artifact'
   import type { ClaudeSessionArtifactLocation } from './claude-session-artifact'
   interface ClaudeUsageEnvelope {
       readonly usage?: ClaudeUsageCounters
   interface ClaudeUsageCounters {
   export async function snapshotClaudeUsage(
     return (await readClaudeUsageObservation(host, context)).snapshot
   interface ClaudeUsageObservation {
   async function readClaudeUsageObservation(
     qualifiedLocation?: ClaudeSessionArtifactLocation,
   ): Promise<ClaudeUsageObservation> {
       (await resolveClaudeSessionArtifact(host, context, context.signal))
           const envelope = parseClaudeUsageEnvelope(line)
           if (!envelope || !isClaudeAssistantUsage(envelope)) return
           const counters = normalizeClaudeUsageCounters(envelope.message?.usage)
           // Claude records are additive, so a skipped record makes the total unknowable.
     const counters = sumClaudeUsageCounters([...records.values()])
   export async function observeClaudeContext(
     const location = await resolveClaudeSessionArtifact(host, context, context.signal)
         const envelope = parseClaudeUsageEnvelope(record)
         if (!envelope || !isClaudeAssistantUsage(envelope)) return null
         return parseClaudeUsage(record)
   export async function observeClaudeUsage(
         provenance: 'Claude Code cumulative usage lifecycle',
         usage: { status: 'pending', reason: 'Waiting for qualified Claude usage' },
             provenance: 'Claude Code cumulative usage lifecycle',
     const location = await waitForClaudeUsageLocation(host, context)
     let current: ClaudeUsageObservation
         readClaudeUsageObservation(host, context, location),
           provenance: 'Claude Code cumulative usage lifecycle',
           usage: { status: 'pending', reason: 'Waiting for Claude usage records' },
           provenance: 'Claude Code qualified cumulative usage snapshot',
     const publishObservation = (next: ClaudeUsageObservation): void => {
             provenance: 'Claude Code cumulative usage continuity',
                 ? 'Claude usage transcript continuity changed'
                 : 'Claude cumulative counters decreased',
               provenance: 'Claude Code cumulative usage lifecycle',
               provenance: 'Claude Code cumulative usage snapshot',
           provenance: 'Claude Code cumulative usage snapshot',
         readClaudeUsageObservation(host, context, location),
         const envelope = parseClaudeUsageEnvelope(record)
         if (!envelope || !isClaudeAssistantUsage(envelope)) return null
             provenance: 'Claude Code cumulative usage snapshot',
         const counters = normalizeClaudeUsageCounters(envelope.message?.usage)

harness/bundled-harness-providers.ts (3 match(es)):
   import { githubCopilotProvider } from './providers/github-copilot'
     githubCopilotProvider,
       defaultProfileId: provider.profile.defaultProfile?.id,
smoke/document-review.ts:     // The capture process is the immediate PTY boundary, not a fake Codex
```

</details>


---

<sub>16s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for working with local and SSH-hosted projects. It brings project files, Git changes, document viewing, and persistent terminal sessions into one Electron window. Terminal profiles can launch supported coding assistants, including Claude Code, Codex, and GitHub Copilot CLI.\n+\n+## Getting started\n+\n+**Requirements:** Node.js 24 or newer, npm, Git, and the native build tools required by `node-gyp` and Electron's native modules. hvir targets macOS and Linux. To use a coding assistant, install and authenticate its CLI separately; remote projects also require an accessible SSH host.\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` runs a postinstall step that builds the native rename helper and rebuilds `node-pty` for Electron. The development command checks the installed terminal runtime before launching Electron. In the app, choose a local or SSH host and open a project folder, then use the project rail to switch workspaces. Configure assistant launch profiles in Settings.\n+\n+## What it offers\n+\n+- Project file browsing, search, source and rendered document viewing, and diff review.\n+- Git working-tree views and history alongside project workspaces.\n+- Persistent, splittable terminal workspaces with assistant launch profiles and session views.\n+- Local and SSH project access, with terminal and file operations on the selected host.\n+- In-app document review and web panes.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the Electron development app |\n+| `npm run build` | Type-check and build the production app |\n+| `npm run verify` | Run repository checks, linting, type checks, and unit tests |\n+| `npm test` | Run Vitest tests |\n+| `npm run smoke` | Build and run Electron smoke scenarios |\n+| `npm run build:dir` | Create an unpacked application in `dist/` |\n+| `npm run pack:mac:arm64` | Package an unsigned macOS arm64 installer |\n+| `npm run pack:linux:x64` | Package a Linux x64 `.deb` |\n+| `npm run pack:linux:arm64` | Package a Linux arm64 `.deb` |\n+\n+The main process and host integrations live in `src/main/`, the preload bridge in `src/preload/`, the React interface in `src/renderer/`, and cross-process types in `src/shared/`. Tests are in `test/`; build and release utilities are in `scripts/`.\n+\n+## License\n+\n+MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/ada70912/hvir/README.md
```


---

<sub>19s</sub>

### Copilot

Created `README.md` with an overview of hvir, setup requirements, getting-started steps, key features, development and packaging commands, project layout, and license information.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
