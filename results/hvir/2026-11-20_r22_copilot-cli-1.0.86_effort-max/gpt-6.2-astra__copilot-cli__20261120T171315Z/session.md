# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `fa09c961-209d-4cfe-94a9-ebe8dc8b3950`  
> - **Started:** 11/20/2026, 12:13:31 PM  
> - **Duration:** 2m 31s  
> - **Exported:** 11/20/2026, 12:16:02 PM  

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

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir.**

/private/var/tmp/ws/a9024228/hvir

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

<sub>3s</sub>

### `bash`

**Check the worktree and current branch**

$ git --no-pager status --short --branch

```
## main
<shellId: 0 completed with exit code 0>
```


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/package.json.**

/private/var/tmp/ws/a9024228/hvir/package.json

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

**view the file at /private/var/tmp/ws/a9024228/hvir/src.**

/private/var/tmp/ws/a9024228/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/packages.**

/private/var/tmp/ws/a9024228/hvir/packages

```
rename-noreplace
```


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/.github.**

/private/var/tmp/ws/a9024228/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/electron-builder.yml.**

/private/var/tmp/ws/a9024228/hvir/electron-builder.yml

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

**view the file at /private/var/tmp/ws/a9024228/hvir/LICENSE.**

/private/var/tmp/ws/a9024228/hvir/LICENSE (lines 1-18)

<details>
<summary>14 lines</summary>

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
```

</details>


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts.**

/private/var/tmp/ws/a9024228/hvir/scripts

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/test.**

/private/var/tmp/ws/a9024228/hvir/test

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

<sub>8s</sub>

### `glob`

****/{AGENTS.md,README*,CONTRIBUTING*,*instructions*.md}**

"**/{AGENTS.md,README*,CONTRIBUTING*,*instructions*.md}" in .github, src, packages, test, scripts, build

```
No files matched the pattern.
```


---

<sub>15s</sub>

### `rg`

**README\.md|readme\.md**

"README\.md|readme\.md" in *.{ts,tsx,mts,mjs,yml,sh} (test, scripts, .github)

<details>
<summary>48 matches</summary>

```
[grep content: 39 matches across 16 file(s)]
scripts/check-adrs.mjs:26:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
test/viewer-types.test.ts:7:     ['README.md', 'markdown'],
test/release-pr-integrity.test.ts:235:       { changedFiles: ['package.json', 'README.md'] },
test/document-review-retention.test.ts:92:     document: localPath('/repo/readme.md'),

test/terminal-file-link.test.ts (6 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',

test/document-review-store.test.ts (6 match(es)):
  75:     const existing = model(target, localPath('/repo/readme.md'), 'legacy draft')
  124:     await store.save(0, model(target, localPath('/repo/readme.md'), 'active draft'))
  157:     await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'kept'))
  172:       store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'no overwrite')),
  179:     await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'saved'))
  253:     const valid = model(localWorkspace, localPath('/repo/readme.md'), 'valid')

test/git-ignore-refresh.test.ts (2 match(es)):
  14:           { name: 'README.md', type: 'file' },
  18:           { name: 'README.md', type: 'file' },
test/rendered-markdown-image-refresh.test.tsx:68:     const documentPath = localPath('/repo/docs/readme.md')
test/project-watch-interests.test.tsx:37:     const documentPath = hostPath(hostId, '/project/docs/readme.md')

test/filename-search-policy.test.ts (7 match(es)):
  10:         file('src/my-README.md'),
  12:         file('README.md'),
  15:       'readme.md',
  19:       '/workspace/README.md',
  20:       '/workspace/src/my-README.md',
  26:       [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],
  27:       'readme.md',

test/markdown-repository-images.test.tsx (2 match(es)):
  36:     const documentPath = localPath('/repo/docs/readme.md')
  87:     const documentPath = localPath('/repo/docs/readme.md')

test/commit-file-tree.test.ts (4 match(es)):
  15:       path: localPath('/project/README.md'),
  37:       { kind: 'file', name: 'README.md', depth: 0 },
  44:       { kind: 'file', name: 'README.md', depth: 0 },
  62:     expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')
test/document-review-delivery.test.ts:70:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

test/viewer-find.test.ts (2 match(es)):
  54:       '/repo/readme.md',
  68:     const path = localPath('/repo/readme.md')
test/use-viewer-workspace.test.tsx:270:     const documentPath = localPath('/project/readme.md')

test/viewer-workspace-model.test.ts (2 match(es)):
  322:     const id = viewerTabId(localPath('/repo/readme.md'))
  327:         let model = reduce(activate('/repo', 1), open('/repo/readme.md', true))
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/build/native/hvir-command.**

/private/var/tmp/ws/a9024228/hvir/build/native/hvir-command (lines 1-200)

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/.github/workflows.**

/private/var/tmp/ws/a9024228/hvir/.github/workflows

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/main.**

/private/var/tmp/ws/a9024228/hvir/src/main

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts/render-native-installer.mjs.**

/private/var/tmp/ws/a9024228/hvir/scripts/render-native-installer.mjs (lines 1-155)

<details>
<summary>145 lines</summary>

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
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/a9024228/hvir/THIRD_PARTY_NOTICES.md (lines 1-45)

<details>
<summary>33 lines</summary>

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
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/a9024228/hvir/scripts/check-terminal-runtime.mts (lines 1-135)

<details>
<summary>120 lines</summary>

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
```

</details>


---

<sub>15s</sub>

### `bash`

**Identify the upstream repository for release links**

$ git remote -v

```

<shellId: 1 completed with exit code 0>
```


---

<sub>25s</sub>

### search_code_subagent (Completed)

### `file_search`

****/README***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README*"
}
```

</details>

```
No files found matching pattern: **/README*
```


### `file_search`

****/docs***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs*"
}
```

</details>

```
No files found matching pattern: **/docs*
```


### `file_search`

****/renderer***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/renderer*"
}
```

</details>

<details>
<summary>21 lines</summary>

```
27 files found (showing first 20):
  /private/var/tmp/ws/a9024228/hvir/test/renderer-resource-scopes.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-authority-smoke.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-recovery-monitor.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-hardening.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-presentation-resources.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-ssh-prompter.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/fixtures/renderer-resource-fixture.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-event-delivery.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-diagnostics-adapter.test.ts
  /private/var/tmp/ws/a9024228/hvir/test/renderer-event-publisher.test.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-isolation.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-recovery-scenario.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-recovery-producer.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-lifecycle.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-authority.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-recovery.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-readiness-observer.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-recovery-delivery.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-readiness.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/renderer-event-delivery.ts
```

</details>


### `file_search`

****/source***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/source*"
}
```

</details>

<details>
<summary>8 lines</summary>

```
7 files found:
  /private/var/tmp/ws/a9024228/hvir/test/source-view.test.tsx
  /private/var/tmp/ws/a9024228/hvir/test/source-blame.test.tsx
  /private/var/tmp/ws/a9024228/hvir/test/source-coordinate.test.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/viewer/source-blame-gutter.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/viewer/source-coordinate.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/viewer/SourceView.tsx
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/viewer/source-highlighting.ts
```

</details>


### `grep_search`

**project|workspace|worktree|session|terminal**

<details>
<summary>Arguments</summary>

```json
{
  "query": "project|workspace|worktree|session|terminal",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5320 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=15>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=41>
    ipcRenderer.on('diagnostics:session', (_event, session: unknown) => {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=42>
    rendererDiagnostics.activate(session)
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=43>
    if (isRendererDiagnosticSession(session)) {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=44>
    readyGeneration = session.ownerGeneration
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=6>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=9>
    type RendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=28>
    private session?: RendererDiagnosticSession
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=39>
    activate(session: unknown): void {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=40>
    if (!isRendererDiagnosticSession(session)) return
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=42>
    this.session &&
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=43>
    (this.session.ownerGeneration !== session.ownerGeneration ||
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=44>
    this.session.sessionId !== session.sessionId)
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=49>
    this.session = session
</match>
```
````

</details>


### `grep_search`

**harness|harnesses|repository.*review|repo.*review**

<details>
<summary>Arguments</summary>

```json
{
  "query": "harness|harnesses|repository.*review|repo.*review",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
4021 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=16>
    import { HarnessProfileStore } from './harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=17>
    import { HarnessProbeManager } from './harness/harness-probe'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=18>
    import { harnessProviders } from './harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=64>
    const harnessProbeManager = runtime.own(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=65>
    'harness probe manager',
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=66>
    new HarnessProbeManager(),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=98>
    let harnessProfileStore: HarnessProfileStore | null = null
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=197>
    harnessProfileStore = runtime.own(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=198>
    'harness profile store',
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=199>
    await HarnessProfileStore.load(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=201>
    localPath(applicationUserDataPath('harness-profiles.json')),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=205>
    await harnessProfileStore
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=208>
    console.warn('[harness] legacy recovery profile import failed', error),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=242>
    registerSessionIdentity: (terminalId, harnessSessionId) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=243>
    terminalSessionRegistry!.recordIdentity(terminalId, harnessSessionId),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=263>
    harnessProviders,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=264>
    harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=395>
    harnessProfiles: harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=396>
    harnessProbes: harnessProbeManager,
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
  /private/var/tmp/ws/a9024228/hvir/package.json
  /private/var/tmp/ws/a9024228/hvir/scripts/project-management/package.json
  /private/var/tmp/ws/a9024228/hvir/packages/rename-noreplace/package.json
```


### `file_search`

****/electron.*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron.*.yml"
}
```

</details>

```
No files found matching pattern: **/electron.*.yml
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/a9024228/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/a9024228/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
  "filePath": "/private/var/tmp/ws/a9024228/hvir/scripts/project-management/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>7 lines</summary>

````
File: `/private/var/tmp/ws/a9024228/hvir/scripts/project-management/package.json`. Lines 1 to 5 (5 lines total): 
```
{
  "private": true,
  "type": "module"
}

```
````

</details>


### `file_search`

****/project-management***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/project-management*"
}
```

</details>

```
No files found matching pattern: **/project-management*
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

****/renderer/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/renderer/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/a9024228/hvir/src/renderer/index.html
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/file-manager-reveal.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-external-file-copy.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-project-file-operation.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-file-create-actions.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/FileTree.tsx
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-external-file-actions.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/file-name.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/DirectoryTree.tsx
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/git-ignore-refresh.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/project-file-entry-name.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/file-action-menu.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-path-copy-action.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/project-entry-drag.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/file-operation-feedback.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/FileDeletionDialog.tsx
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-file-organization-actions.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/git-status-decoration.ts
  /private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/use-file-manager-reveal.ts
```

</details>


### `file_search`

****/source/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/source/**"
}
```

</details>

```
No files found matching pattern: **/source/**
```


### `grep_search`

**README**

<details>
<summary>Arguments</summary>

```json
{
  "query": "README",
  "isRegexp": false
}
```

</details>

<details>
<summary>63 lines</summary>

````
42 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/smoke/sessions-visual.ts" line=173>
    content: 'Synthetic workspace\\A\\A README.md\\A src/\\A docs/';
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-retention.test.ts" line=92>
    document: localPath('/repo/readme.md'),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/release-pr-integrity.test.ts" line=235>
    { changedFiles: ['package.json', 'README.md'] },
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/viewer-types.test.ts" line=7>
    ['README.md', 'markdown'],
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts" line=75>
    const existing = model(target, localPath('/repo/readme.md'), 'legacy draft')
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts" line=124>
    await store.save(0, model(target, localPath('/repo/readme.md'), 'active draft'))
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts" line=157>
    await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'kept'))
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts" line=172>
    store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'no overwrite')),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts" line=179>
    await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'saved'))
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts" line=253>
    const valid = model(localWorkspace, localPath('/repo/readme.md'), 'valid')
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts" line=17>
    expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts" line=19>
    { target: 'README.md', start: 24, end: 32 },
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts" line=25>
    'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts" line=30>
    'README.md',
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts" line=81>
    expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts" line=82>
    '/srv/project/README.md',
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/scripts/check-adrs.mjs" line=26>
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/rendered-markdown-image-refresh.test.tsx" line=68>
    const documentPath = localPath('/repo/docs/readme.md')
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/filename-search-policy.test.ts" line=10>
    file('src/my-README.md'),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/test/filename-search-policy.test.ts" line=11>
    file('docs/readme-guide.md'),
</match>
```
````

</details>


### `grep_search`

**workspace|worktree|session|terminal**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workspace|worktree|session|terminal",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5265 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=15>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=41>
    ipcRenderer.on('diagnostics:session', (_event, session: unknown) => {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=42>
    rendererDiagnostics.activate(session)
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=43>
    if (isRendererDiagnosticSession(session)) {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=44>
    readyGeneration = session.ownerGeneration
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=6>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=9>
    type RendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=28>
    private session?: RendererDiagnosticSession
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=39>
    activate(session: unknown): void {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=40>
    if (!isRendererDiagnosticSession(session)) return
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=42>
    this.session &&
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=43>
    (this.session.ownerGeneration !== session.ownerGeneration ||
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=44>
    this.session.sessionId !== session.sessionId)
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=49>
    this.session = session
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

****/TEMPLATE.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/TEMPLATE.md"
}
```

</details>

```
No files found matching pattern: **/TEMPLATE.md
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

****/project/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/project/**"
}
```

</details>

```
No files found matching pattern: **/project/**
```


### `grep_search`

**workspace|worktree|session|terminal**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workspace|worktree|session|terminal",
  "isRegexp": true,
  "includePattern": "**/*.ts"
}
```

</details>

<details>
<summary>63 lines</summary>

````
5195 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=15>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=41>
    ipcRenderer.on('diagnostics:session', (_event, session: unknown) => {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=42>
    rendererDiagnostics.activate(session)
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=43>
    if (isRendererDiagnosticSession(session)) {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=44>
    readyGeneration = session.ownerGeneration
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=6>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=9>
    type RendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=28>
    private session?: RendererDiagnosticSession
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=39>
    activate(session: unknown): void {
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=40>
    if (!isRendererDiagnosticSession(session)) return
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=42>
    this.session &&
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=43>
    (this.session.ownerGeneration !== session.ownerGeneration ||
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=44>
    this.session.sessionId !== session.sessionId)
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts" line=49>
    this.session = session
</match>
```
````

</details>


### `grep_search`

**harness|harnesses|repository.*review|repo.*review**

<details>
<summary>Arguments</summary>

```json
{
  "query": "harness|harnesses|repository.*review|repo.*review",
  "isRegexp": true,
  "includePattern": "**/*.ts"
}
```

</details>

<details>
<summary>63 lines</summary>

````
3018 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=16>
    import { HarnessProfileStore } from './harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=17>
    import { HarnessProbeManager } from './harness/harness-probe'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=18>
    import { harnessProviders } from './harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=64>
    const harnessProbeManager = runtime.own(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=65>
    'harness probe manager',
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=66>
    new HarnessProbeManager(),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=98>
    let harnessProfileStore: HarnessProfileStore | null = null
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=197>
    harnessProfileStore = runtime.own(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=198>
    'harness profile store',
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=199>
    await HarnessProfileStore.load(
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=201>
    localPath(applicationUserDataPath('harness-profiles.json')),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=205>
    await harnessProfileStore
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=208>
    console.warn('[harness] legacy recovery profile import failed', error),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=242>
    registerSessionIdentity: (terminalId, harnessSessionId) =>
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=243>
    terminalSessionRegistry!.recordIdentity(terminalId, harnessSessionId),
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=263>
    harnessProviders,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=264>
    harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=395>
    harnessProfiles: harnessProfileStore,
</match>
<match path="/private/var/tmp/ws/a9024228/hvir/src/main/index.ts" line=396>
    harnessProbes: harnessProbeManager,
</match>
```
````

</details>


### `file_search`

****/smoke/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/smoke/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/harness-profile-workflow.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/app-settings.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/capacity-terminals.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/document-review-evidence.mts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/project-entry-deletion.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/terminal-scenario-ready.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/external-file-move.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/terminal-horizon-presentation.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/git-workflow.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/project-state-fixture.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/terminal-chrome.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/filename-search.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/platform-contracts.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/renderer-isolation.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/terminal-hidden-reveal.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/capacity-output-fixtures.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/viewer-position-operation.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/terminal-explicit-launch.ts
  /private/var/tmp/ws/a9024228/hvir/src/main/smoke/sessions-projection.ts
```

</details>


### `file_search`

****/acceptance/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/acceptance/**"
}
```

</details>

```
No files found matching pattern: **/acceptance/**
```


### Copilot

\<final_answer>
/private/var/tmp/ws/a9024228/hvir/package.json:1-128
/private/var/tmp/ws/a9024228/hvir/scripts/project-management/package.json:1-5
/private/var/tmp/ws/a9024228/hvir/src/main/index.ts:16-210
/private/var/tmp/ws/a9024228/hvir/src/preload/index.ts:15-80
/private/var/tmp/ws/a9024228/hvir/src/preload/renderer-diagnostics.ts:1-60
/private/var/tmp/ws/a9024228/hvir/src/main/smoke/harness-profile-workflow.ts:1-200
/private/var/tmp/ws/a9024228/hvir/src/main/smoke/sessions-visual.ts:160-210
/private/var/tmp/ws/a9024228/hvir/test/document-review-store.test.ts:70-190
/private/var/tmp/ws/a9024228/hvir/test/terminal-file-link.test.ts:10-40
/private/var/tmp/ws/a9024228/hvir/test/rendered-markdown-image-refresh.test.tsx:60-110
/private/var/tmp/ws/a9024228/hvir/src/renderer/src/tree/FileTree.tsx:1-200
\</final_answer>


---

<sub>30s</sub>

### `rg`

**node-version|apt-get install|xvfb|npm ci|verify**

"node-version|apt-get install|xvfb|npm ci|verify" in *.yml (.github/workflows/ci.yml)

<details>
<summary>13 matches</summary>

```
.github/workflows/ci.yml:46:          node-version: 24
.github/workflows/ci.yml:59:  verify:
.github/workflows/ci.yml:81:          node-version: 24
.github/workflows/ci.yml:85:        run: npm ci
.github/workflows/ci.yml:90:        run: npm run verify
.github/workflows/ci.yml:106:          node-version: 24
.github/workflows/ci.yml:110:        run: npm ci
.github/workflows/ci.yml:115:        run: xvfb-run -a npm run smoke
.github/workflows/ci.yml:120:        run: xvfb-run -a npm run smoke:development-performance
.github/workflows/ci.yml:123:        run: xvfb-run -a npm run smoke:isolation
.github/workflows/ci.yml:150:          node-version: 24
.github/workflows/ci.yml:154:        run: npm ci
.github/workflows/ci.yml:198:      - verify
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/a9024228/hvir/scripts/native-installer.template.sh (lines 1-200)

<details>
<summary>186 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/a9024228/hvir/scripts/check-adrs.mjs (lines 1-110)

<details>
<summary>102 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `rg`

**install\.sh|install\.bash|linux-.*\.deb|macos-.*\.pkg|checksums|release(s/|BaseUrl)**

"install\.sh|install\.bash|linux-.*\.deb|macos-.*\.pkg|checksums|release(s/|BaseUrl)" in *.{mjs,yml} (.github/workflows/release.yml, .github/workflows/macos-package-release.yml, scripts/assemble-native-release.mjs, scripts/release-changelog.mjs)

<details>
<summary>28 matches</summary>

```
[grep content: 24 matches across 3 file(s)]

scripts/assemble-native-release.mjs (9 match(es)):
  28:       name: `hvir-${version}-linux-x64.deb`,
  33:       name: `hvir-${version}-linux-arm64.deb`,
  54:   const installerPath = resolve(assetDirectory, 'install.sh')
  110:   const checksums = await Promise.all(
  115:   const checksumsPath = resolve(assetDirectory, 'SHA256SUMS')
  116:   await writeFile(checksumsPath, `${checksums.join('\n')}\n`)
  118:   await requireExactOutputs(assetDirectory, [...checksumNames, basename(checksumsPath)])
  121:     checksumsPath,
  149:     'install.sh',

.github/workflows/macos-package-release.yml (2 match(es)):
  148:           package=$(find dist -maxdepth 1 -type f -name 'hvir-*-macos-arm64.pkg' -print)
  170:           source="dist/hvir-${package_version}-macos-arm64.pkg"

.github/workflows/release.yml (13 match(es)):
  228:           target="hvir-${version}-linux-${RELEASE_ARCH}.deb"
  245:             dist/hvir-*-linux-${{ matrix.release_arch }}.deb
  246:             dist/hvir-*-linux-${{ matrix.release_arch }}.deb.sha256
  446:             "hvir-${VERSION}-linux-arm64.deb" \
  447:             "hvir-${VERSION}-linux-arm64.deb.sha256" \
  448:             "hvir-${VERSION}-linux-x64.deb" \
  449:             "hvir-${VERSION}-linux-x64.deb.sha256" |
  460:               "hvir-${VERSION}-linux-x64.deb.sha256" \
  461:               "hvir-${VERSION}-linux-arm64.deb.sha256" \
  560:             "hvir-${VERSION}-linux-arm64.deb" \
  561:             "hvir-${VERSION}-linux-x64.deb" \
  562:             install.sh \
  612:           latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/a9024228/hvir/electron.vite.config.ts (lines 1-137)

<details>
<summary>132 lines</summary>

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
```

</details>


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/.prettierrc.json.**

/private/var/tmp/ws/a9024228/hvir/.prettierrc.json

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

<sub>43s</sub>

### `rg`

**(Add|Open|Choose|New|Create|Connect to) (a |an )?(project|folder|local|SSH|workspace|worktree)|SSH (project|host)|[Aa]dd[Ss]sh**

"(Add|Open|Choose|New|Create|Connect to) (a |an )?(project|folder|local|SSH|workspace|worktree)|SSH (project|host)|[Aa]dd[Ss]sh" in *.{tsx,ts} (src/renderer/src/workspaces, src/renderer/src/workbench, src/renderer/src/layout, src/renderer/src/App.tsx)

```
src/renderer/src/workspaces/SessionDialog.tsx:            : `Open folder on ${connected?.host.label ?? hostId}`}
src/renderer/src/workspaces/SessionDialog.tsx:                <code>{selectedPath ?? 'Choose a folder from the tree'}</code>
src/renderer/src/workspaces/SessionDialog.tsx:                    New folder
src/renderer/src/workspaces/SessionDialog.tsx:                      aria-label="New folder name"
src/renderer/src/workspaces/SessionDialog.tsx:                  ? 'Choose folder'
```


---

<sub>43s</sub>

### `glob`

****/*{[Ww]orkspace,[Pp]roject}***

"**/*{[Ww]orkspace,[Pp]roject}*" in src/shared, src/renderer/src/workspaces

<details>
<summary>15 matches</summary>

```
src/renderer/src/workspaces/project-session-events.ts
src/renderer/src/workspaces/project-session.ts
src/renderer/src/workspaces/project-watch-interests.ts
src/renderer/src/workspaces/workspace-attention.ts
src/renderer/src/workspaces/MissingWorkspaceNotice.tsx
src/renderer/src/workspaces/project-state-delivery.ts
src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
src/renderer/src/workspaces/workspace-session-actions.ts
src/renderer/src/workspaces/project-folder-picker-client.ts
src/renderer/src/workspaces/ProjectsBar.tsx
src/renderer/src/workspaces/project-session-model.ts
src/shared/sessions-projection.ts
src/shared/project-file-operations.ts
src/shared/workspace-types.ts
src/shared/ipc/project.ts
```

</details>


---

<sub>43s</sub>

### `rg`

**(claude|codex|shell|gemini|opencode|copilot|harness).*:|name: '**

"(claude|codex|shell|gemini|opencode|copilot|harness).*:|name: '" in *{harness,profile,provider}*.ts (src/shared, src/main/harness)

<details>
<summary>35 matches</summary>

```
[grep content: 28 matches across 9 file(s) under src]

shared/harness-profile.ts (2 match(es)):
   declare const harnessProfileIdBrand: unique symbol
     readonly [harnessProfileIdBrand]: 'HarnessProfileId'
main/harness/harness-launch.ts: function shellQuote(value: string): string {
main/harness/harness-usage.ts: export function harnessUsageSnapshotTelemetry(input: {

shared/ipc/harness.ts (13 match(es)):
     readonly harnessSessionId?: string
       'harness:catalog': invoke<void, readonly HarnessProviderDescriptor[]>(),
       'harness:profiles': invoke<HarnessProfilesRequest, readonly HarnessProfile[]>(),
       'harness:probe-snapshot': invoke<
       'harness:probe-profiles': invoke<
       'harness:probe-templates': invoke<
       'harness:profile-materialize': invoke<
       'harness:profile-save': invoke<SaveHarnessProfileRequest, HarnessProfile>(),
       'harness:profile-duplicate': invoke<HarnessProfileRequest, HarnessProfile>(),
       'harness:profile-delete': invoke<HarnessProfileRequest, void>(),
       'harness:preview': invoke<HarnessPreviewRequest, HarnessCommandPreview>(),
       'harness:authorize-path': invoke<AuthorizeHarnessPathRequest, HarnessPathGrant>(),
       'harness:configure-composer-submit': invoke<ConfigureComposerSubmitRequest, void>(),

shared/harness-provider.ts (2 match(es)):
   declare const harnessProviderIdBrand: unique symbol
     readonly [harnessProviderIdBrand]: 'HarnessProviderId'

main/harness/harness-telemetry-hub.ts (2 match(es)):
               `[harness:${this.options.providerId}] telemetry helper`,
       console.warn(`[harness:${this.options.providerId}] telemetry hub unavailable`, error)
main/harness/harness-provider-contract.ts:   readonly shellEnvironment?: boolean

main/harness/harness-shell-environment.ts (3 match(es)):
   export function harnessShellProbeArgs(executable: string): readonly string[] {
   export function harnessShellProbeOutput(output: string): string | undefined {
   function shellQuote(value: string): string {

main/harness/bundled-harness-providers.ts (3 match(es)):
   export function harnessProvider(id: string): HarnessProvider {
   export function harnessProviderCatalog(): readonly HarnessProviderDescriptor[] {
   export function harnessProviderDiagnostics(): readonly {
```

</details>


---

<sub>43s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/git.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/git

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

<sub>43s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/dashboards.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/dashboards

<details>
<summary>8 lines</summary>

```
ElectronWebPaneSurface.tsx
WebPane.tsx
WebPaneStack.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
```

</details>


---

<sub>43s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/viewer.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/viewer

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

<sub>43s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/main/smoke/harness-profile-workflow.ts.**

/private/var/tmp/ws/a9024228/hvir/src/main/smoke/harness-profile-workflow.ts (lines 1-110)

<details>
<summary>109 lines</summary>

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
```

</details>


---

<sub>43s</sub>

### `rg`

**name: Release |repository: |/releases/latest/download|jarmak-personal/hvir**

"name: Release |repository: |/releases/latest/download|jarmak-personal/hvir" in *.{mjs,mts,ts,yml,sh} (.github/workflows/release.yml, scripts, build)

<details>
<summary>133 matches</summary>

```
[grep content: 111 matches across 40 file(s) under scripts]
ci-attempt-evidence.mts:   repository: string,
agent-work-checkpoint-store.mts:   repository: string

require-release-ci-evidence.mts (12 match(es)):
   export const RELEASE_REPOSITORY = 'jarmak-personal/hvir'
     repository: string
     repository: string
     repository: string
     repository: string,
       repository: githubEvidence.requiredString(value.repo?.full_name),
     repository: string,
     repository: string,
         repository: githubEvidence.requiredString(run.repository?.full_name),
     repository: string,
     repository: string,
     repository: string,

project-management/issue-start.ts (4 match(es)):
     repository: IssueStartRepositoryPort
     repository: IssueStartRepositoryPort,
     repository: IssueStartRepositoryPort,
     repository: IssueStartRepositoryPort,
project-management/github-delivery-adapters.ts:     environment.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
project-management/kind-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
assemble-native-release.d.mts:   readonly repository: string
project-management/pull-request-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)

project-management/pull-request-relationships.ts (2 match(es)):
     repository: string
     repository: string

project-management/github-token-migration.ts (3 match(es)):
     repository: GitHubClient,
     repository: GitHubClient,
           `/repos/jarmak-personal/hvir/issues/${receipt.issue}/comments`,

project-management/issue-context.ts (2 match(es)):
     repository: string
       repository: record.repository,
project-management/issue-context-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
project-management/canonical-project-item.ts:   repository: string
project-management/sync-kind.ts:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
project-management/issue-start-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
project-management/start-issue.ts:         repository: new NativeIssueWorktreeRepository({

project-management/planning-record.ts (3 match(es)):
     repository: string
     repository: string
       repository: issue.repository,

project-management/github-pull-requests.ts (11 match(es)):
     repository: { nameWithOwner: string }
         repository: {
             repository: { nameWithOwner: string }
         repository: pullRequest.repository.nameWithOwner,
           repository: {
                 repository: { nameWithOwner: string }
             repository: pullRequest.repository.nameWithOwner,
           repository: {
         repository: {
           repository: {
       repository: issue.repository.nameWithOwner,

ghostty-web-update/github-delivery.mts (2 match(es)):
     readonly #repository: string
       readonly repository: string
project-management/read-contributor-status.ts:   const repository = process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir'

project-management/github-issues.ts (14 match(es)):
     repository: { nameWithOwner: string }
     repository: { nameWithOwner: string }
           repository: {
           repository: {
         repository: this.repository,
         repository: this.repository,
         repository: {
           repository: {
           repository: {
             repository: pullRequest.repository.nameWithOwner,
       repository: issue.repository.nameWithOwner,
     first: { repository: string; number: number },
     second: { repository: string; number: number },
   function pullRequestKey(pullRequest: { repository: string; number: number }): string {
project-management/contributor-status.ts:       repository: issue.value.repository,

ghostty-web-update/cli.mts (2 match(es)):
     repository: string,
     repository: string,

project-management/github-contributor-acceptance.ts (2 match(es)):
       const data: { repository: { pullRequest: NativePullRequest | null } | null } =
           repository: {
project-management/planning-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)

project-management/sync-pull-request-planning.ts (2 match(es)):
       process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
             repository: `${repositoryOwner}/${repositoryName}`,
project-management/github-session-tokens.ts:         repository: {

project-management/pull-request-planning.ts (9 match(es)):
     repository: string
       repository: string
       repository: string
           repository: issue.repository,
         repository: pullRequest.repository,
       repository: input.repository.toLowerCase(),
       issue: { repository: input.repository, number: input.issueNumber },
     repository: string
     repository: string,
project-management/read-planning-record.ts:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',

project-management/canonical-project-config.ts (2 match(es)):
     repository: string
     repository: 'jarmak-personal/hvir',

assemble-native-release.mjs (3 match(es)):
       repository: options.repository,
       throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
       repository: values.get('--repository') ?? 'jarmak-personal/hvir',

project-management/issue-planning.ts (4 match(es)):
     repository: string
     repository: string
     repository: string
     repository: string

project-management/audit-canonical-project.ts (2 match(es)):
     HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
       process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',

render-native-installer.mjs (2 match(es)):
       throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
       repository: values.get('--repository') ?? 'jarmak-personal/hvir',

project-management/canonical-project.ts (4 match(es)):
         repository: `${this.#repositoryOwner}/${this.#repositoryName}`,
           repository: {
       repository: item.content.repository.nameWithOwner,
   function projectItemKeyFromName(repository: string, issueNumber: number): string {
run-macos-package-smoke.sh:     --repository jarmak-personal/hvir \

validate-release-pr.mts (4 match(es)):
     repository: string
     repository: string
     repository: string,
       repository: requireReleaseEnvironment('GITHUB_REPOSITORY'),
run-linux-package-smoke.sh:     --repository jarmak-personal/hvir \

architecture-github.mts (3 match(es)):
         'https://github.com/jarmak-personal/hvir.git',
         'git@github.com:jarmak-personal/hvir.git',
         'https://github.com/jarmak-personal/hvir',
render-native-installer.d.mts:   readonly repository: string
```

</details>


---

<sub>43s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/.gitignore.**

/private/var/tmp/ws/a9024228/hvir/.gitignore

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

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-220)

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

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 160-345)

<details>
<summary>180 lines</summary>

```
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
                      Create
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => setNewFolderName(undefined)}
                    >
                      Cancel
                    </button>
                  </form>
                )}
              </div>
              {connectedHostId ? (
                <DirectoryTree
                  root={hostPath(asHostId(connectedHostId), '/')}
```

</details>


---

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/a9024228/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-92)

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

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx (lines 1-181)

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

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/shared/workspace-types.ts.**

/private/var/tmp/ws/a9024228/hvir/src/shared/workspace-types.ts (lines 1-210)

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

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/git/GitChangesView.tsx.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/git/GitChangesView.tsx (lines 1-180)

<details>
<summary>172 lines</summary>

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
  title,
  files,
  root,
  base,
  onOpen,
  collapsible = false,
}: {
  readonly title: string
  readonly files: GitChanges['workingTree']
  readonly root: HostPath
  readonly base: DiffBase
  readonly onOpen: (path: HostPath, base: DiffBase, untracked?: boolean) => void
  readonly collapsible?: boolean
}): ReactElement {
  const [expanded, setExpanded] = useState(!collapsible)
  return (
    <div className={`git-group${collapsible ? ' branch-point' : ''}`}>
      <h3>
        {collapsible ? (
          <button
            type="button"
            className="git-group-toggle"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            <span className="git-group-chevron" aria-hidden="true">
              {expanded ? '⌄' : '›'}
            </span>
            <span>{title}</span>
            <span className="git-group-count">{files.length}</span>
          </button>
        ) : (
          <>
            <span>{title}</span>
            <span>{files.length}</span>
          </>
        )}
      </h3>
      {expanded ? (
        <VirtualChangeFiles files={files} root={root} base={base} onOpen={onOpen} />
      ) : null}
    </div>
  )
}

function VirtualChangeFiles({
  files,
  root,
  base,
  onOpen,
}: {
  readonly files: GitChanges['workingTree']
  readonly root: HostPath
  readonly base: DiffBase
  readonly onOpen: (path: HostPath, base: DiffBase, untracked?: boolean) => void
```

</details>


---

<sub>51s</sub>

### `rg`

**^[^/]*(stage|commit|push|fetch|pull|blame)|side.by.side**

"^[^/]*(stage|commit|push|fetch|pull|blame)|side.by.side" in *.tsx (src/renderer/src/git/GitPanel.tsx, src/renderer/src/git/GitBranchControls.tsx)

<details>
<summary>10 matches</summary>

```
src/renderer/src/git/GitPanel.tsx:        onFetch={controller.fetch}
src/renderer/src/git/GitPanel.tsx:        onPull={controller.pull}
src/renderer/src/git/GitPanel.tsx:            commits={model.commits}
src/renderer/src/git/GitBranchControls.tsx:    pullBlockReason,
src/renderer/src/git/GitBranchControls.tsx:    fetchBlockedReason,
src/renderer/src/git/GitBranchControls.tsx:            disabled={Boolean(fetchBlockedReason || syncBusy || branchSwitching)}
src/renderer/src/git/GitBranchControls.tsx:            title={fetchBlockedReason ?? 'Refresh remote branch information'}
src/renderer/src/git/GitBranchControls.tsx:            disabled={Boolean(pullBlockReason || syncBusy || branchSwitching)}
src/renderer/src/git/GitBranchControls.tsx:            title={pullBlockReason ?? 'Fast-forward from the configured upstream'}
src/renderer/src/git/GitBranchControls.tsx:        <small>{syncBusy === 'fetch' ? 'Fetching…' : 'Pulling…'}</small>
```

</details>


---

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/document-review.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/document-review

<details>
<summary>23 lines</summary>

```
DocumentReviewControls.tsx
DocumentReviewDeliveryPanel.tsx
DocumentReviewInlineSurface.tsx
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
index.ts
use-document-review-delivery.ts
use-document-review-interaction.ts
use-document-review-workspace.ts
```

</details>


---

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/main/project-registry.ts.**

/private/var/tmp/ws/a9024228/hvir/src/main/project-registry.ts (lines 1-174)

<details>
<summary>165 lines</summary>

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
```

</details>


---

<sub>51s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/main/project-host.**

/private/var/tmp/ws/a9024228/hvir/src/main/project-host

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

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/a9024228/hvir/.github/workflows/release.yml (lines 414-458)

<details>
<summary>40 lines</summary>

```

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
```

</details>


---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/a9024228/hvir/.github/workflows/release.yml (lines 501-584)

<details>
<summary>80 lines</summary>

```
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
```

</details>


---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 250-335)

<details>
<summary>86 lines</summary>

```
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
```

</details>


---

<sub>1m 0s</sub>

### `rg`

**\.ssh|\.config|Include |HostName|proxy|aliases**

"\.ssh|\.config|Include |HostName|proxy|aliases" in *.ts (src/main/project-host/ssh-config.ts, src/main/project-host/project-host-catalog.ts)

<details>
<summary>9 matches</summary>

```
src/main/project-host/ssh-config.ts:  const aliases = parsed.flatMap((line): string[] => {
src/main/project-host/ssh-config.ts:  return [...new Set(aliases)].map((alias) => {
src/main/project-host/project-host-catalog.ts:    private readonly aliases: readonly SshAliasConfig[],
src/main/project-host/project-host-catalog.ts:      const aliases = await loadSshAliases(local, home)
src/main/project-host/project-host-catalog.ts:        aliases,
src/main/project-host/project-host-catalog.ts:      ...this.aliases.map((config) => {
src/main/project-host/project-host-catalog.ts:    const config = this.aliases.find((candidate) => candidate.alias === hostId)
src/main/project-host/project-host-catalog.ts:  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
src/main/project-host/project-host-catalog.ts:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
```

</details>


---

<sub>1m 0s</sub>

### `rg`

**readOnly|editable|highlight|[Ss]taged|[Uu]nstaged|preview**

"readOnly|editable|highlight|[Ss]taged|[Uu]nstaged|preview" in *.tsx (src/renderer/src/viewer/SourceView.tsx, src/renderer/src/viewer/FileViewer.tsx)

<details>
<summary>16 matches</summary>

```
src/renderer/src/viewer/FileViewer.tsx:      readOnly={Boolean(tab.externalWorkspaceRoot)}
src/renderer/src/viewer/SourceView.tsx:import { highlightSource, resetTokens, tokenDecorations } from './source-highlighting'
src/renderer/src/viewer/SourceView.tsx:  readOnly = false,
src/renderer/src/viewer/SourceView.tsx:  readonly readOnly?: boolean
src/renderer/src/viewer/SourceView.tsx:  const highlightInputs = useRef<
src/renderer/src/viewer/SourceView.tsx:  const [highlightStatus, setHighlightStatus] = useState('')
src/renderer/src/viewer/SourceView.tsx:          EditorState.readOnly.of(readOnly),
src/renderer/src/viewer/SourceView.tsx:          EditorView.editable.of(!readOnly),
src/renderer/src/viewer/SourceView.tsx:                if (!readOnly) callbacks.current.onSave()
src/renderer/src/viewer/SourceView.tsx:            if (update.docChanged && !applyingExternal.current && !readOnly) {
src/renderer/src/viewer/SourceView.tsx:  }, [pathKey, readOnly])
src/renderer/src/viewer/SourceView.tsx:    const previousInputs = highlightInputs.current
src/renderer/src/viewer/SourceView.tsx:    // can change; a new document or theme still needs its own highlight request.
src/renderer/src/viewer/SourceView.tsx:    highlightInputs.current = { pathKey, theme }
src/renderer/src/viewer/SourceView.tsx:    return highlightSource(editor, path, content, size, theme, setHighlightStatus)
src/renderer/src/viewer/SourceView.tsx:        <span>{highlightStatus}</span>
```

</details>


---

<sub>1m 0s</sub>

### `rg`

**[Tt]erminal|[Ss]end|[Cc]omment|[Dd]eliver**

"[Tt]erminal|[Ss]end|[Cc]omment|[Dd]eliver" in *.tsx (src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx, src/renderer/src/document-review/DocumentReviewControls.tsx)

<details>
<summary>57 matches</summary>

```
[grep content: 54 matches across 2 file(s) under src/renderer/src/document-review]

DocumentReviewDeliveryPanel.tsx (27 match(es)):
   import type { DocumentReviewDeliveryInteraction } from './use-document-review-delivery'
   export function DocumentReviewDeliveryPanel({
     delivery,
     readonly delivery: DocumentReviewDeliveryInteraction
     if (!delivery.open) return null
     const selected = delivery.selectedDestination
       <section className="document-review-delivery" aria-label="Review handoff preview">
           <strong>Review and send</strong>
           <button type="button" onClick={delivery.close}>
             value={delivery.selectedTerminalId ?? ''}
             disabled={delivery.loading || delivery.destinations.length === 0}
             onChange={(event) => delivery.selectDestination(event.currentTarget.value)}
             <option value="">Choose a live terminal…</option>
             {delivery.destinations.map((destination) => (
               <option key={destination.terminalId} value={destination.terminalId}>
                 {destination.capability === 'send-now'
                   ? 'Send now supported'
         {!delivery.loading && delivery.destinations.length === 0 ? (
             No live terminals are available in this host-qualified workspace. You can still
               <dt>Terminal</dt>
             This terminal is requesting attention. Resolve its current prompt or state
         {delivery.payload ? (
               className="document-review-delivery-payload"
               aria-label="Exact review delivery preview"
               {delivery.payload.body}
             <p className="document-review-delivery-size">
               Exact UTF-8 body · {delivery.payload.byteLength.toLocaleString()} bytes

DocumentReviewControls.tsx (27 match(es)):
   import { DocumentReviewDeliveryPanel } from './DocumentReviewDeliveryPanel'
     if (!interaction.available && interaction.comments.length === 0) return null
           Review{interaction.comments.length > 0 ? ` ${interaction.comments.length}` : ''}
             aria-label="Add comment for selected source lines"
                   ? `Add comment for ${lineRangeLabel(interaction.sourceRange)}`
             Add comment
       interaction.orphanedComments.length > 0 ||
       interaction.delivery.loading ||
       interaction.delivery.notice ||
       interaction.delivery.error,
       <aside className="document-review-chrome" aria-label="Document review comments">
                 Save or reload to add comments. Existing review stays on the saved version.
             {!interaction.delivery.open && interaction.delivery.error ? (
                 {interaction.delivery.error}
             {interaction.delivery.notice ? (
                 {interaction.delivery.notice}
             {interaction.delivery.loading && !interaction.delivery.open ? (
                 Sending review…
             {interaction.orphanedComments.map((comment) => (
                 key={comment.id}
                 onClick={() => interaction.navigate(comment)}
                 Open unplaced comment · {lineRangeLabel(comment.anchor.range)}
                 aria-label={`Send ${interaction.activeBatchCount} review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'} to the top terminal`}
                   interaction.delivery.loading || interaction.delivery.directHandoffBlocked
                   interaction.delivery.directHandoffBlocked
                     ? 'Review and prepare the feedback again before another send'
                     : 'Send to the first visible terminal'
```

</details>


---

<sub>1m 0s</sub>

### `rg`

**title: '[^']+'|Harness profiles|New terminal|Plain [Ss]hell|New shell**

"title: '[^']+'|Harness profiles|New terminal|Plain [Ss]hell|New shell" in *.{tsx,ts} (src/renderer/src/terminal, src/renderer/src/settings, src/main/harness/providers/shell.ts)

<details>
<summary>8 matches</summary>

```
src/renderer/src/settings/HarnessProfilesSettings.tsx:          <p>Harness profiles could not be loaded.</p>
src/renderer/src/settings/HarnessProfilesSettings.tsx:            <nav className="settings-profile-list" aria-label="Harness profiles">
src/renderer/src/terminal/terminal-runtime-launch.ts:  if (context.reconnect) return `New shell · pid ${result.pid}`
src/renderer/src/settings/harness-argument-editor.ts:    throw new Error('Harness profiles support at most ' + MAX_ARGUMENTS + ' arguments')
src/renderer/src/terminal/TerminalDeck.tsx:              New terminal
src/renderer/src/terminal/TerminalRecoveryDialog.tsx:                        ? 'New shell'
src/renderer/src/terminal/TerminalRail.tsx:              aria-label="New terminal"
src/renderer/src/terminal/TerminalRail.tsx:              title="New terminal"
```

</details>


---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts/assemble-native-release.mjs.**

/private/var/tmp/ws/a9024228/hvir/scripts/assemble-native-release.mjs (lines 16-119)

<details>
<summary>97 lines</summary>

```
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
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/document-review/document-review-eligibility.ts.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/document-review/document-review-eligibility.ts (lines 1-100)

<details>
<summary>61 lines</summary>

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
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/settings/settings-navigation.ts (lines 1-98)

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

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/src/renderer/src/dashboards/web-pane-url.ts.**

/private/var/tmp/ws/a9024228/hvir/src/renderer/src/dashboards/web-pane-url.ts (lines 1-100)

<details>
<summary>6 lines</summary>

```
/** Build the same normalized target for guest navigation and browser handoff. */
export function webPaneUrlFromInput(origin: string, pathInput: string): string {
  const trimmed = pathInput.trim()
  const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return `${origin}${path}`
}
```

</details>


---

<sub>1m 39s</sub>

### `rg`

**'(Working|Needs attention|Running|Sessions|Terminal sessions)'|No sessions|[Aa]ttention**

"'(Working|Needs attention|Running|Sessions|Terminal sessions)'|No sessions|[Aa]ttention" in *.tsx (src/renderer/src/sessions)

```
src/renderer/src/sessions/SessionsOverviewCard.tsx:      className={`session-fact ${fact.tone}${fact.label === 'Status' ? ' status activity' : fact.label === 'Attention' || fact.label === 'Working' ? ' activity' : ''}`}
src/renderer/src/sessions/SessionsCollectionToolbar.tsx:          {(['all', 'harnesses', 'shells', 'attention', 'working'] as const).map(
src/renderer/src/sessions/SessionsCollectionToolbar.tsx:            <option value="priority">Attention and activity</option>
src/renderer/src/sessions/SessionsOverview.tsx:        aria-label={detailActive ? undefined : 'Sessions'}
src/renderer/src/sessions/SessionsOverview.tsx:            title="No sessions match"
```


---

<sub>1m 39s</sub>

### `rg`

**[Ss]plit|[Ll]ayout**

"[Ss]plit|[Ll]ayout" in *.tsx (src/renderer/src/terminal/TerminalDeck.tsx)

<details>
<summary>10 matches</summary>

```
src/renderer/src/terminal/TerminalDeck.tsx:import { PaneResizer } from '../layout/PaneResizer'
src/renderer/src/terminal/TerminalDeck.tsx:  split,
src/renderer/src/terminal/TerminalDeck.tsx:  onSplit,
src/renderer/src/terminal/TerminalDeck.tsx:  readonly split: boolean
src/renderer/src/terminal/TerminalDeck.tsx:  readonly onSplit: () => void
src/renderer/src/terminal/TerminalDeck.tsx:      onSplit={onSplit}
src/renderer/src/terminal/TerminalDeck.tsx:      className={`terminal-deck${split ? ' split' : ''}`}
src/renderer/src/terminal/TerminalDeck.tsx:      {split ? (
src/renderer/src/terminal/TerminalDeck.tsx:          className="terminal-split-resizer"
src/renderer/src/terminal/TerminalDeck.tsx:          label="Resize split terminals"
```

</details>


---

<sub>1m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/a9024228/hvir/scripts/check-seams.sh.**

/private/var/tmp/ws/a9024228/hvir/scripts/check-seams.sh (lines 1-55)

<details>
<summary>47 lines</summary>

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
```

</details>


---

<sub>2m 8s</sub>

### Copilot

I’ll separate the native install instructions from the contributor setup: users can launch hvir without Node.js, while building from source requires Node.js and a native compiler.

---

<sub>2m 21s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for running shells and coding agents alongside the files\n+they change. Each Git worktree gets its own workspace, so you can switch checkouts\n+without losing track of which terminal, diff, or review belongs to which branch.\n+Projects can live on your machine or on an SSH host.\n+\n+## Install and open a project\n+\n+Download `install.sh` from the [latest release](https://github.com/jarmak-personal/hvir/releases/latest).\n+From the download directory, run `bash ./install.sh`. The installer selects the native\n+package for your machine and verifies its SHA-256 checksum. You do not need Node.js to\n+run the packaged app.\n+\n+| Platform | Release package |\n+| --- | --- |\n+| macOS on Apple silicon | `.pkg` |\n+| APT-based Linux on x64 or arm64, with glibc 2.35 or newer | `.deb` |\n+\n+Launch hvir from your desktop, or run `hvir .` in the directory you want to open.\n+On first launch without a path, hvir asks you to choose a folder. A plain folder works\n+as a single workspace; in a Git repository, hvir also discovers linked worktrees.\n+\n+## Working in hvir\n+\n+- **Add a project.** Select **+ (Register project)** and choose **Local** or a host\n+  alias from `~/.ssh/config`, then pick a folder. For an SSH project, terminals and\n+  Git commands run on the remote host.\n+- **Start a terminal.** Use **New terminal** for a plain shell. To launch a coding\n+  CLI such as Claude Code or Codex, install it on the project host and add its profile\n+  under **Settings > Harnesses**. The **Sessions** view shows which terminals are\n+  working and which need attention across projects.\n+- **Review changes.** Open a file from the tree to edit its source or preview rendered\n+  Markdown. Use the Git panel to inspect working-tree diffs and commit history. When\n+  reviewing a saved document, you can attach comments to lines, preview the feedback,\n+  and send it to a terminal in the same workspace.\n+\n+## Develop from source\n+\n+Use Node.js 24 or newer, npm, Git, Python 3, and a native build toolchain (Xcode\n+Command Line Tools on macOS, or `make` and a C++ compiler on Linux). From the\n+repository root:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+Leave npm install scripts enabled: `postinstall` installs Electron, builds the local\n+rename binding, and rebuilds `node-pty` for Electron.\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm test` | Run the Vitest suite. Use `npm run test:watch` while iterating. |\n+| `npm run lint` / `npm run typecheck` | Check lint rules and TypeScript types. |\n+| `npm run smoke` | Exercise the Electron app. On headless Linux, use `xvfb-run -a npm run smoke`. |\n+| `npm run build` | Type-check and build production bundles in `out/`. |\n+| `npm run build:dir` | Build an unpacked desktop app in `dist/`. |\n+\n+The Electron [main process](src/main/) owns host connections and terminals. The\n+[React UI](src/renderer/) calls it through the [preload bridge](src/preload/) using\n+[shared TypeScript contracts](src/shared/). See [package.json](package.json) for the\n+platform-specific packaging scripts.\n+\n+## License\n+\n+hvir is released under the [MIT License](LICENSE). Bundled components retain their\n+own licenses; see [third-party notices](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/a9024228/hvir/README.md
```


---

<sub>2m 26s</sub>

### `bash`

**Format the README and confirm it is the only change**

$ ./node_modules/.bin/prettier --write README.md && git --no-pager status --short

```
?? README.md
<shellId: 2 completed with exit code 0>
```


---

<sub>2m 30s</sub>

### Copilot

Created [README.md](README.md) with instructions for installing hvir on macOS and Linux, opening a project with `hvir .`, and working with Git worktrees, SSH hosts, and coding agents. It also covers prerequisites and commands for developing, building, and testing hvir from source.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
