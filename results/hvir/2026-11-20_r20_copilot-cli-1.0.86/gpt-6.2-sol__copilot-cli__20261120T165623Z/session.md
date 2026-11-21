# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `0ca31443-6d65-4c0e-ab14-d84c0254e02e`  
> - **Started:** 11/20/2026, 11:56:39 AM  
> - **Duration:** 37s  
> - **Exported:** 11/20/2026, 11:57:17 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>1s</sub>

### Copilot

I’ll inspect the repository so the README reflects what the project does and how to get started.

---

<sub>3s</sub>

### `bash`

**Inspect repository layout and status**

$ git status --short && git ls-files | head -80 && ls -a

<details>
<summary>109 lines</summary>

```
.githooks/pre-push
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
.gitignore
.prettierignore
.prettierrc.json
LICENSE
THIRD_PARTY_NOTICES.md
build/entitlements.mac.inherit.plist
build/entitlements.mac.plist
build/icon-linux.svg
build/icon-macos.icns
build/icon-macos.png
build/icon-macos.svg
build/icons-linux/1024x1024.png
build/icons-linux/128x128.png
build/icons-linux/16x16.png
build/icons-linux/256x256.png
build/icons-linux/32x32.png
build/icons-linux/512x512.png
build/icons-linux/64x64.png
build/linux/after-install.sh
build/linux/after-remove.sh
build/linux/hvir.apparmor
build/native/hvir-command
build/pkg-scripts/postinstall
build/pkg-scripts/preinstall
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
package-lock.json
package.json
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
scripts/adr-lifecycle.mts
scripts/agent-work-checkpoint-store.mts
scripts/architecture-authorization.mts
scripts/architecture-github.mts
scripts/architecture-hotspots.json
scripts/architecture-hotspots.mjs
scripts/architecture-hotspots.mts
scripts/architecture-inventory.mts
scripts/architecture-module-directions.mts
scripts/architecture-module-graph.mts
scripts/architecture-module-resolution.mts
scripts/architecture-policy.mts
scripts/architecture-wiring.mts
scripts/assemble-native-release.d.mts
scripts/assemble-native-release.mjs
scripts/capture-contributor-usage.mts
scripts/check-adrs.mjs
scripts/check-seams.sh
scripts/check-terminal-runtime.mts
scripts/ci-attempt-evidence.mts
scripts/create-smoke-repository.sh
scripts/generate-terminal-theme-catalog.mts
scripts/ghostty-terminal-capability-profile.mts
scripts/ghostty-web-update/candidate-bundle.mts
scripts/ghostty-web-update/cli.mts
scripts/ghostty-web-update/coordinator.mts
scripts/ghostty-web-update/github-client.mts
scripts/ghostty-web-update/github-delivery.mts
scripts/ghostty-web-update/github-release-source.mts
scripts/ghostty-web-update/policy.mts
scripts/ghostty-web-update/repository-candidate.mts
scripts/inspect-packaged-runtime.mts
.
..
.git
.githooks
.github
.gitignore
.prettierignore
.prettierrc.json
build
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
LICENSE
node_modules
package-lock.json
package.json
packages
scripts
src
stryker.config.json
test
THIRD_PARTY_NOTICES.md
tsconfig.base.json
tsconfig.json
tsconfig.node.json
tsconfig.web.json
vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/0c9cb540/hvir/package.json.**

/private/var/tmp/ws/0c9cb540/hvir/package.json

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

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/0c9cb540/hvir/electron-builder.yml.**

/private/var/tmp/ws/0c9cb540/hvir/electron-builder.yml

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

<sub>6s</sub>

### `bash`

**Find existing docs and app entry points**

$ git ls-files '*.md' && git remote -v && ls src && ls src/renderer/src && ls test

<details>
<summary>417 lines</summary>

```
THIRD_PARTY_NOTICES.md
test/fixtures/rendered-mmd.md
test/fixtures/rendered.md
main
preload
renderer
shared
workers
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### `rg`

**node-version|go-version|npm ci|apt-get install**

"node-version|go-version|npm ci|apt-get install" (.github/workflows/ci.yml)

<details>
<summary>7 matches</summary>

```
.github/workflows/ci.yml:          node-version: 24
.github/workflows/ci.yml:          node-version: 24
.github/workflows/ci.yml:        run: npm ci
.github/workflows/ci.yml:          node-version: 24
.github/workflows/ci.yml:        run: npm ci
.github/workflows/ci.yml:          node-version: 24
.github/workflows/ci.yml:        run: npm ci
```

</details>


---

<sub>11s</sub>

### `rg`

**hvir.dev|github.com/[^ /]+/hvir|ubuntu-[0-9]|macos-[0-9]**

"hvir.dev|github.com/[^ /]+/hvir|ubuntu-[0-9]|macos-[0-9]" (.github/workflows/release.yml, scripts/render-native-installer.mjs, .github/workflows/ci.yml)

<details>
<summary>17 matches</summary>

```
.github/workflows/ci.yml:    runs-on: ubuntu-24.04
.github/workflows/ci.yml:    runs-on: ubuntu-24.04
.github/workflows/ci.yml:    runs-on: ubuntu-24.04
.github/workflows/ci.yml:    runs-on: macos-15
.github/workflows/ci.yml:    runs-on: ubuntu-24.04
.github/workflows/ci.yml:    runs-on: ubuntu-24.04
.github/workflows/release.yml:    runs-on: ubuntu-24.04
.github/workflows/release.yml:            os: ubuntu-22.04
.github/workflows/release.yml:            os: ubuntu-22.04-arm
.github/workflows/release.yml:  accept-linux-ubuntu-24:
.github/workflows/release.yml:            os: ubuntu-24.04
.github/workflows/release.yml:            os: ubuntu-24.04-arm
.github/workflows/release.yml:            os: ubuntu-22.04
.github/workflows/release.yml:            os: ubuntu-22.04-arm
.github/workflows/release.yml:      - accept-linux-ubuntu-24
.github/workflows/release.yml:      needs.accept-linux-ubuntu-24.result == 'success' &&
.github/workflows/release.yml:    runs-on: ubuntu-24.04
```

</details>


---

<sub>11s</sub>

### `rg`

**Add (Project|Folder|Host)|Open (Folder|Project)|SSH Host|Claude Code|Codex**

"Add (Project|Folder|Host)|Open (Folder|Project)|SSH Host|Claude Code|Codex" (src/renderer/src/workspaces, src/renderer/src/harness, src/renderer/src/App.tsx)

```
No matches found.
```


---

<sub>11s</sub>

### `bash`

**Check architecture and README conventions**

$ ls src/main src/workers && head -5 LICENSE && rg -n 'README' test scripts --glob '!*.json' | head -25

<details>
<summary>47 lines</summary>

```
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
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
/bin/bash: rg: command not found
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `rg`

**Add (Project|Folder|Host)|Open (Folder|Project)|SSH Host|Claude Code|Codex**

"Add (Project|Folder|Host)|Open (Folder|Project)|SSH Host|Claude Code|Codex" (src/renderer/src)

```
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:        terminals outside hvir. Open Codex sessions keep their launch-time behavior until
src/renderer/src/settings/sections/TerminalSettings.tsx:              terminals. Restart open Codex sessions after changing this setting.
```


---

<sub>14s</sub>

### `rg`

**jarmak-personal/hvir|gh release create|install\.sh|actions/setup-python|build-essential**

"jarmak-personal/hvir|gh release create|install\.sh|actions/setup-python|build-essential" (.github, scripts)

<details>
<summary>35 matches</summary>

```
[grep content: 29 matches across 21 file(s)]

.github/workflows/release.yml (2 match(es)):
               gh release create "$TAG" \
               install.sh \
scripts/project-management/canonical-project-config.ts:   repository: 'jarmak-personal/hvir',
scripts/run-macos-package-smoke.sh:     --repository jarmak-personal/hvir \
scripts/project-management/planning-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)

scripts/native-installer.template.sh (3 match(es)):
     install.sh
     install.sh --uninstall
     install.sh --uninstall --purge

scripts/architecture-github.mts (3 match(es)):
         'https://github.com/jarmak-personal/hvir.git',
         'git@github.com:jarmak-personal/hvir.git',
         'https://github.com/jarmak-personal/hvir',
scripts/run-linux-package-smoke.sh:     --repository jarmak-personal/hvir \

scripts/assemble-native-release.mjs (3 match(es)):
     const installerPath = resolve(assetDirectory, 'install.sh')
       'install.sh',
       repository: values.get('--repository') ?? 'jarmak-personal/hvir',
scripts/render-native-installer.mjs:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',
scripts/project-management/read-planning-record.ts:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
scripts/require-release-ci-evidence.mts: export const RELEASE_REPOSITORY = 'jarmak-personal/hvir'
scripts/project-management/github-delivery-adapters.ts:     environment.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
scripts/project-management/kind-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
scripts/project-management/issue-context-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)

scripts/project-management/audit-canonical-project.ts (2 match(es)):
     HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
       process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
scripts/project-management/read-contributor-status.ts:   const repository = process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir'
scripts/project-management/github-token-migration.ts:         `/repos/jarmak-personal/hvir/issues/${receipt.issue}/comments`,
scripts/project-management/pull-request-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
scripts/project-management/sync-pull-request-planning.ts:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
scripts/project-management/issue-start-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
scripts/project-management/sync-kind.ts:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
```

</details>


---

<sub>17s</sub>

### `rg`

**Open Folder|Add Project|Add project|Open local|Connect to|Add SSH|Open Project|Open project**

"Open Folder|Add Project|Add project|Open local|Connect to|Add SSH|Open Project|Open project" (src)

```
src/main/git/mutation-coordinator.ts:      throw new Error('Connect to the project host before pruning worktrees')
src/main/project-coordinator.ts:      throw new Error(`Connect to ${hostId} before browsing folders`)
src/main/project-folder-picker/project-folder-picker-coordinator.ts:      throw new Error(`Connect to ${hostId} before choosing a project folder`)
src/renderer/src/workspaces/SessionDialog.tsx:            ? 'Connect to a host'
src/main/project-registry.ts:      throw new Error(`Connect to ${host.hostId} before opening this workspace`)
```


---

<sub>17s</sub>

### `rg`

**artifactName|hvir_.*\.deb|hvir-.*\.pkg**

"artifactName|hvir_.*\.deb|hvir-.*\.pkg" (scripts/assemble-native-release.mjs, .github/workflows/release.yml)

<details>
<summary>6 matches</summary>

```
.github/workflows/release.yml:          source="dist/hvir_${version}_${DEB_ARCH}.deb"
.github/workflows/release.yml:            "hvir-${VERSION}-darwin-arm64.pkg" \
.github/workflows/release.yml:            "hvir-${VERSION}-darwin-arm64.pkg.sha256" \
.github/workflows/release.yml:              "hvir-${VERSION}-darwin-arm64.pkg.sha256"
.github/workflows/release.yml:            "hvir-${VERSION}-darwin-arm64.pkg" \
scripts/assemble-native-release.mjs:      name: `hvir-${version}-darwin-arm64.pkg`,
```

</details>


---

<sub>17s</sub>

### `rg`

**README\.md**

"README\.md" (test, scripts)

<details>
<summary>26 matches</summary>

```
[grep content: 21 matches across 9 file(s)]
scripts/check-adrs.mjs:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
test/viewer-types.test.ts:     ['README.md', 'markdown'],
test/terminal-file-link.test.ts:    expect(detectTerminalFileLinks('at src/main.ts:12: 4 and README.md.')).toEqual([

test/terminal-file-link.test.ts (5 match(es)):
         { target: 'README.md', start: 24, end: 32 },
         'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
         'README.md',
       expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
         '/srv/project/README.md',
test/release-pr-integrity.test.ts:       { changedFiles: ['package.json', 'README.md'] },

test/git-ignore-refresh.test.ts (2 match(es)):
             { name: 'README.md', type: 'file' },
             { name: 'README.md', type: 'file' },

test/filename-search-policy.test.ts (5 match(es)):
           file('src/my-README.md'),
           file('README.md'),
         '/workspace/README.md',
         '/workspace/src/my-README.md',
         [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],
test/document-review-delivery.test.ts:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

test/commit-file-tree.test.ts (4 match(es)):
         path: localPath('/project/README.md'),
         { kind: 'file', name: 'README.md', depth: 0 },
         { kind: 'file', name: 'README.md', depth: 0 },
       expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')
```

</details>


---

<sub>20s</sub>

### `view`

**view the file at /private/var/tmp/ws/0c9cb540/hvir/scripts/assemble-native-release.mjs.**

/private/var/tmp/ws/0c9cb540/hvir/scripts/assemble-native-release.mjs (lines 15-85)

<details>
<summary>66 lines</summary>

```
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
```

</details>


---

<sub>20s</sub>

### `rg`

**Choose a|Browse|Connect to a host|New project|Add**

"Choose a|Browse|Connect to a host|New project|Add" in *SessionDialog.tsx (src/renderer/src/workspaces)

<details>
<summary>7 matches</summary>

```
src/renderer/src/workspaces/SessionDialog.tsx:  type BrowseHostResponse,
src/renderer/src/workspaces/SessionDialog.tsx:  onBrowse,
src/renderer/src/workspaces/SessionDialog.tsx:  readonly onBrowse: (hostId: string, path: string) => Promise<BrowseHostResponse>
src/renderer/src/workspaces/SessionDialog.tsx:      return (await onBrowse(connectedHostId, directory.path)).directories
src/renderer/src/workspaces/SessionDialog.tsx:    [connectedHostId, onBrowse],
src/renderer/src/workspaces/SessionDialog.tsx:            ? 'Connect to a host'
src/renderer/src/workspaces/SessionDialog.tsx:                <code>{selectedPath ?? 'Choose a folder from the tree'}</code>
```

</details>


---

<sub>33s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for software development on your machine or over SSH. It brings terminals, project files, and Git into the same window so you can inspect changes without leaving your shell or coding-agent session.\n+\n+- **Workspaces:** Open local or remote project folders and keep terminals and files organized by project.\n+- **Terminals:** Split and search Ghostty-powered terminal panes, or launch installed tools such as Claude Code and Codex with configurable profiles.\n+- **Git:** Inspect working-tree changes, diffs, and commit history, and manage Git worktrees.\n+- **File review:** Browse source files, preview rendered Markdown, and leave review comments on documents.\n+\n+## Install\n+\n+Download the package for your platform from [GitHub Releases](https://github.com/jarmak-personal/hvir/releases):\n+\n+| Platform | Release asset |\n+| --- | --- |\n+| macOS (Apple silicon) | `hvir-<version>-darwin-arm64.pkg` |\n+| Debian-based Linux (x86-64) | `hvir-<version>-linux-x64.deb` |\n+| Debian-based Linux (ARM64) | `hvir-<version>-linux-arm64.deb` |\n+\n+Open the `.pkg` on macOS, or install the `.deb` with your Linux package manager. Then launch hvir and choose a local project folder, or connect to an SSH host and choose a folder there.\n+\n+## Run from source\n+\n+You’ll need Git, Node.js 24 or newer, and native build tools for the terminal and filesystem modules: Python 3 and the Xcode Command Line Tools on macOS, or Python 3, Make, and a C/C++ toolchain on Linux. Run these commands from the repository root:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+| Command | What it does |\n+| --- | --- |\n+| `npm test` | Run the Vitest suite. |\n+| `npm run verify` | Run architecture checks, linting, type checks, and tests. |\n+| `npm run build` | Type-check and build the Electron app into `out/`. |\n+| `npm run pack:mac:arm64` | Build an Apple silicon `.pkg` in `dist/`. |\n+| `npm run pack:linux:x64` or `npm run pack:linux:arm64` | Build the corresponding `.deb` in `dist/`. |\n+\n+## Project layout\n+\n+hvir is built with Electron, React, and TypeScript. [`src/main`](src/main) owns desktop services such as SSH, Git, and terminal processes. [`src/preload`](src/preload) exposes the app API to the React workbench in [`src/renderer`](src/renderer). Shared contracts live in [`src/shared`](src/shared), and tests live in [`test`](test).\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). See [Third-Party Notices](THIRD_PARTY_NOTICES.md) for bundled components.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/0c9cb540/hvir/README.md
```


---

<sub>35s</sub>

### `bash`

**Confirm and format the new README**

$ git status --short && if command -v node >/dev/null && test -f node_modules/prettier/bin/prettier.cjs; then node node_modules/prettier/bin/prettier.cjs --write README.md; fi

```
?? README.md
<shellId: 3 completed with exit code 0>
```


---

<sub>36s</sub>

### Copilot

Created [README.md](README.md) with an overview of hvir’s local and SSH workspaces, installation instructions for macOS and Linux, and commands for running, testing, and packaging the app from source. It also explains the repository layout and links to the license and third-party notices.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
