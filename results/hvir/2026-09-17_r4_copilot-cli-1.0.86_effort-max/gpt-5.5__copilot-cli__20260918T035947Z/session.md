# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `1d7b762c-d761-4cda-82ed-892e1fc46273`  
> - **Started:** 9/18/2026, 12:00:02 AM  
> - **Duration:** 2m 31s  
> - **Exported:** 9/18/2026, 12:02:34 AM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>11s</sub>

### Copilot

I’ll inspect the repository structure and manifests, then add a README that matches the project’s actual setup.

---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir.**

/private/var/tmp/ws/8c3908e7/hvir

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

<sub>15s</sub>

### `glob`

****/{package.json,pyproject.toml,Cargo.toml,go.mod,requirements.txt,setup.py,composer.json,pom.xml,build.gradle,Makefile,Dockerfile,*.sln,*.csproj}**

"**/{package.json,pyproject.toml,Cargo.toml,go.mod,requirements.txt,setup.py,composer.json,pom.xml,build.gradle,Makefile,Dockerfile,*.sln,*.csproj}"

```
/private/var/tmp/ws/8c3908e7/hvir/packages/rename-noreplace/package.json
/private/var/tmp/ws/8c3908e7/hvir/package.json
/private/var/tmp/ws/8c3908e7/hvir/scripts/project-management/package.json
```


---

<sub>15s</sub>

### `rg`

**^#|description|name|scripts|Usage|Installation|Getting Started**

"^#|description|name|scripts|Usage|Installation|Getting Started" in {README*,*.md,package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,Dockerfile}

<details>
<summary>59 matches</summary>

```
[grep content: 54 matches across 5 file(s) under /private/var/tmp/ws/8c3908e7/hvir]

THIRD_PARTY_NOTICES.md (8 match(es)):
  1: # Third-party notices
  5: runtime that hvir modifies and redistributes. The names below identify the upstream
  8: ## Skill Steward rename-noreplace binding
  12: hvir's private `@hvir/rename-noreplace` Node-API package derives its basename
  15: descriptors for atomic cross-directory no-replace rename.
  39: ## ghostty-web
  74: ## iTerm2-Color-Schemes theme collection
  111: ## Ghostty terminal core

packages/rename-noreplace/package.json (4 match(es)):
  2:   "name": "@hvir/rename-noreplace",
  5:   "description": "Private hvir Node-API binding for atomic no-replace rename",
  12:     "rename_noreplace.c",
  13:     "build/Release/rename_noreplace.node"

package.json (39 match(es)):
  2:   "name": "hvir",
  5:     "name": "hvir contributors"
  14:   "scripts": {
  16:     "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
  17:     "prebuild": "node scripts/check-terminal-runtime.mts",
  18:     "predev": "node scripts/check-terminal-runtime.mts",
  25:     "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
  26:     "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
  27:     "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
  30:     "assemble:native-release": "node scripts/assemble-native-release.mjs",
  31:     "render:native-installer": "node scripts/render-native-installer.mjs",
  39:     "hooks:install": "bash scripts/install-git-hooks.sh",
  43:     "check-seams": "bash scripts/check-seams.sh",
  44:     "check-adrs": "node scripts/check-adrs.mjs",
  45:     "architecture:report": "node scripts/architecture-hotspots.mjs",
  46:     "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
  47:     "generate:terminal-themes": "node scripts/generate-terminal-theme-catalog.mts",
  48:     "update:ghostty-web": "node scripts/ghostty-web-update/cli.mts",
  49:     "project:kind": "node scripts/project-management/sync-kind.ts",
  50:     "project:audit": "node scripts/project-management/audit-canonical-project.ts",
  51:     "project:record": "node scripts/project-management/read-planning-record.ts",
  52:     "project:pr": "node scripts/project-management/sync-pull-request-planning.ts",
  53:     "project:status": "node scripts/project-management/read-contributor-status.ts",
  54:     "project:migrate-tokens": "node scripts/project-management/migrate-project-tokens.ts",
  55:     "issue:context": "node scripts/project-management/read-issue-context.ts",
  56:     "issue:start": "node scripts/project-management/start-issue.ts",
  58:     "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
  59:     "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
  60:     "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
  61:     "smoke:scenario": "npm run build:smoke && node scripts/run-smoke-scenarios.mts",
  62:     "smoke:isolation": "npm run build:smoke && node scripts/run-smoke-interruption.mts",
  63:     "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
  64:     "smoke:linux:installed": "bash scripts/run-linux-package-smoke.sh",
  65:     "smoke:macos:installed": "bash scripts/run-macos-package-smoke.sh",
  66:     "smoke:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts",
  67:     "smoke:development-performance": "node scripts/run-smoke-scenarios.mts development-performance",
  68:     "performance:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts",
  69:     "gauntlet": "bash scripts/phase8-gauntlet.sh"
  125:     "@hvir/rename-noreplace": "file:packages/rename-noreplace"

test/fixtures/rendered.md (2 match(es)):
  1: # Rendered fixture
  23: Bare filenames such as design.md are prose, not internet hosts.
test/fixtures/rendered-mmd.md:1: # Mermaid alias fixture
```

</details>


---

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/package.json.**

/private/var/tmp/ws/8c3908e7/hvir/package.json

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

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src.**

/private/var/tmp/ws/8c3908e7/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/packages.**

/private/var/tmp/ws/8c3908e7/hvir/packages

```
rename-noreplace
```


---

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/.github.**

/private/var/tmp/ws/8c3908e7/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/LICENSE.**

/private/var/tmp/ws/8c3908e7/hvir/LICENSE (lines 1-40)

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

<sub>30s</sub>

### `glob`

****/*.md**

"**/*.md"

```
/private/var/tmp/ws/8c3908e7/hvir/THIRD_PARTY_NOTICES.md
/private/var/tmp/ws/8c3908e7/hvir/test/fixtures/rendered.md
/private/var/tmp/ws/8c3908e7/hvir/test/fixtures/rendered-mmd.md
```


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/main.**

/private/var/tmp/ws/8c3908e7/hvir/src/main

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

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer

```
index.html
src
```


---

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/shared.**

/private/var/tmp/ws/8c3908e7/hvir/src/shared

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

<sub>30s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/scripts.**

/private/var/tmp/ws/8c3908e7/hvir/scripts (lines 1-200)

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

<sub>41s</sub>

### `glob`

**src/renderer/src/**/*.{ts,tsx,css}**

"src/renderer/src/**/*.{ts,tsx,css}"

<details>
<summary>369 matches</summary>

```
[glob: 347 path(s) under /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src; grouped by directory]

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/terminal/ (68 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/viewer/ (59 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/styles/ (38 path(s))
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
  terminal-move.css
  terminal-pane.css
  terminal-search.css
  terminal-shell.css
  terminal-theme-gallery.css
  tree.css
  viewer-content.css
  viewer-find.css
  viewer-tabs.css
  viewer-workload.css
  web-pane.css
  workspace-catalog.css
  workspace-state.css

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/ (34 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/tree/ (27 path(s))
  DirectoryTree.tsx
  FileCreateOverlays.tsx
  FileDeletionDialog.tsx
  FileExternalMoveDialog.tsx
  FileOrganizationDialog.tsx
  FileTree.tsx
  FilenameSearch.tsx
  directory-entry-sort.ts
  file-action-destination.ts
  file-action-menu.ts
  file-manager-reveal.ts
  file-name.ts
  file-operation-feedback.ts
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
  use-path-copy-action.ts
  use-project-file-operation.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/document-review/ (23 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/git/ (19 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/workspaces/ (16 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/workbench/ (15 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/sessions/ (14 path(s))
  SessionsApplicationDestination.tsx
  SessionsCollectionToolbar.tsx
  SessionsOverview.tsx
  SessionsOverviewCard.tsx
  SessionsOverviewNotice.tsx
  SessionsTerminalDetail.tsx
  sessions-overview-model.ts
  sessions-projection-coordinator.ts
  sessions-renderer-observation.ts
  sessions-terminal-detail-controller.ts
  sessions-terminal-overlay.ts
  sessions-terminal-surface.ts
  use-sessions-foreground.ts
  use-sessions-terminal-detail.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/ (8 path(s))
  App.tsx
  ErrorBoundary.tsx
  hvir.d.ts
  main.tsx
  styles.css
  theme-model.ts
  theme.ts
  themes.css

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/dashboards/ (8 path(s))
  ElectronWebPaneSurface.tsx
  WebPane.tsx
  WebPaneStack.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts
  web-pane-surface.ts
  web-pane-url.ts
  web-pane-workspace-policy.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/development/ (4 path(s))
  development-performance-fixture.tsx
  development-performance-pump.tsx
  development-renderer-instrumentation.tsx
  performance-measure-budget.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/health/ (3 path(s))
  WorkbenchHealthControl.tsx
  use-diagnostic-evidence.ts
  use-workbench-health.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/layout/ (3 path(s))
  PaneResizer.tsx
  split-layout-policy.ts
  workspace-layout-persistence.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/path-copy/ (3 path(s))
  PathCopyMenu.tsx
  path-copy.ts
  use-path-copy-menu.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/diagnostics/ (2 path(s))
  DiagnosticReportDialog.tsx
  owned-capture-masks.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/context-menu/ (1 path(s))
  viewport-context-menu.ts

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/harness/ (1 path(s))
  ProviderContextMeter.tsx

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/scrollbars/ (1 path(s))
  scrollbar-presentation.ts

[extensions: .ts=222, .tsx=85, .css=40]
```

</details>


---

<sub>41s</sub>

### `glob`

**src/main/**/*.{ts,tsx,mts}**

"src/main/**/*.{ts,tsx,mts}"

<details>
<summary>314 matches</summary>

```
[glob: 294 path(s) under /private/var/tmp/ws/8c3908e7/hvir/src/main; grouped by directory]

/private/var/tmp/ws/8c3908e7/hvir/src/main/smoke/ (97 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/main/harness/ (36 path(s))
  bounded-line-reader.ts
  bundled-harness-providers.ts
  claude-context-telemetry.ts
  claude-keybindings.ts
  claude-session-artifact.ts
  claude-session-recovery.ts
  codex-context-telemetry.ts
  codex-session-discovery.ts
  electron-clipboard-image.ts
  harness-composer-contracts.ts
  harness-launch-selection.ts
  harness-launch.ts
  harness-probe.ts
  harness-profile-store.ts
  harness-provider-capabilities.ts
  harness-provider-contract.ts
  harness-provider-probes.ts
  harness-provider-registry.ts
  harness-provider.ts
  harness-shell-environment.ts
  harness-telemetry-hub.ts
  harness-telemetry-protocol.ts
  harness-text-validation.ts
  harness-usage-artifact.ts
  harness-usage-demand-controller.ts
  harness-usage-read-scheduler.ts
  harness-usage.ts
  providers/claude-code.ts
  providers/codex.ts
  providers/cursor.ts
  providers/gemini.ts
  providers/github-copilot.ts
  providers/pi.ts
  providers/shell.ts
  remote-image-paste-storage.ts
  remote-image-paste.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/project-file-operations/ (25 path(s))
  case-only-project-entry-rename.ts
  clipboard-file-list.ts
  create-project-entry.ts
  delete-project-entry.ts
  electron-clipboard-files.ts
  electron-external-move-picker.ts
  external-file-copy.ts
  external-file-grants.ts
  external-file-move-operation.ts
  external-file-move.ts
  external-file-operation.ts
  index.ts
  project-entry-deletion-operation.ts
  project-entry-operation-results.ts
  project-entry-organization.ts
  project-entry-removal.ts
  project-file-confinement.ts
  project-file-copy-limits.ts
  project-file-operation-coordinator.ts
  project-file-operation-runtime.ts
  project-file-path-errors.ts
  staging-cleanup.ts
  verified-project-copy-manifest.ts
  verified-project-copy.ts
  verified-project-entry-metadata.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/ (21 path(s))
  application-runtime-policy.ts
  application-runtime.ts
  attention-badge.ts
  build-environment.d.ts
  html-preview-protocol.ts
  index.ts
  ipc.ts
  navigation-policy.ts
  project-coordinator.ts
  project-registry.ts
  project-watch.ts
  renderer-event-delivery.ts
  renderer-event-publisher.ts
  renderer-presentation-resources.ts
  renderer-resource-scopes.ts
  workbench-runtime.ts
  worker-host.ts
  workspace-activity.ts
  workspace-cleanup.ts
  workspace-coordinator.ts
  workspace-removal-coordinator.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/ipc/ (21 path(s))
  authority-channel-policy.ts
  authority-port.ts
  authority-router.ts
  deps.ts
  features/app.ts
  features/clipboard.ts
  features/diagnostic-report.ts
  features/document-review.ts
  features/filesystem.ts
  features/git.ts
  features/harness.ts
  features/image-paste.ts
  features/preview.ts
  features/project.ts
  features/sessions.ts
  features/terminal-file-paste.ts
  features/terminal.ts
  features/web-pane.ts
  host-path-authority.ts
  operation-result.ts
  project-commands.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/project-host/ (21 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/main/git/ (14 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/src/main/document-review/ (11 path(s))
  document-review-application.ts
  document-review-coordinator.ts
  document-review-delivery-coordinator.ts
  document-review-delivery-policy.ts
  document-review-delivery-terminal.ts
  document-review-policy.ts
  document-review-retention.ts
  document-review-runtime.ts
  document-review-store-codec.ts
  document-review-store.ts
  index.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/diagnostics/ (10 path(s))
  diagnostic-event.ts
  diagnostic-evidence.ts
  diagnostic-intake.ts
  diagnostic-journal.ts
  diagnostic-report-builder.ts
  diagnostic-report-coordinator.ts
  diagnostic-report-evidence.ts
  diagnostic-report-storage.ts
  electron-diagnostic-report-actions.ts
  runtime-diagnostics.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/sessions/ (8 path(s))
  sessions-observation-application.ts
  sessions-observation-port.ts
  sessions-open-resolution.ts
  sessions-projection-identities.ts
  sessions-projection-values.ts
  sessions-telemetry-projection.ts
  sessions-usage-observation-port.ts
  sessions-usage-projection.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/terminal/ (7 path(s))
  electron-clipboard-file-paste.ts
  renderer-pty-lifecycle.ts
  session-registry.ts
  terminal-identity-publication.ts
  terminal-launch-admission.ts
  terminal-start-response.ts
  terminal-workspace-move-coordinator.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/pty/ (6 path(s))
  pty-contract.ts
  pty-launch-admission.ts
  pty-session-lifetime.ts
  pty-session-observation.ts
  pty-stream-attachment.ts
  pty-supervisor.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/window/ (6 path(s))
  electron-renderer-document-lifecycle.ts
  electron-renderer-recovery.ts
  electron-window-manager.ts
  renderer-recovery-monitor.ts
  window-health-tracker.ts
  window-policy.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/filename-search/ (4 path(s))
  filename-enumerator.ts
  filename-search-coordinator.ts
  filename-search-policy.ts
  index.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/health/ (2 path(s))
  workbench-health-events.ts
  workbench-health.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/project-folder-picker/ (2 path(s))
  index.ts
  project-folder-picker-coordinator.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/web-pane/ (2 path(s))
  loopback-http-proxy.ts
  web-pane-route-registry.ts

/private/var/tmp/ws/8c3908e7/hvir/src/main/viewer/ (1 path(s))
  document-read-authority.ts

[extensions: .ts=290, .mts=4]
```

</details>


---

<sub>41s</sub>

### `glob`

**test/**/*.{ts,tsx,mts,js}**

"test/**/*.{ts,tsx,mts,js}"

<details>
<summary>391 matches</summary>

```
[glob: 387 path(s) under /private/var/tmp/ws/8c3908e7/hvir/test; grouped by directory]

/private/var/tmp/ws/8c3908e7/hvir/test/ (380 path(s))
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

/private/var/tmp/ws/8c3908e7/hvir/test/fixtures/ (7 path(s))
  architecture/repository.ts
  ghostty-lifecycle-runtime-options.ts
  ghostty-terminal-pane-mock.ts
  harness-profile-fixture.ts
  pty-supervisor-fixture.ts
  renderer-resource-fixture.ts
  viewer-highlight-worker.ts

[extensions: .ts=312, .tsx=75]
```

</details>


---

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src

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

<sub>50s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/App.tsx (lines 1-240)

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

<sub>50s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/main/index.ts.**

/private/var/tmp/ws/8c3908e7/hvir/src/main/index.ts (lines 1-220)

<details>
<summary>220 lines</summary>

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
```

</details>


---

<sub>50s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/electron-builder.yml.**

/private/var/tmp/ws/8c3908e7/hvir/electron-builder.yml

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

<sub>50s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/vitest.config.ts.**

/private/var/tmp/ws/8c3908e7/hvir/vitest.config.ts (lines 1-220)

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

<sub>50s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/8c3908e7/hvir/electron.vite.config.ts (lines 1-220)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/8c3908e7/hvir/scripts/check-terminal-runtime.mts (lines 1-220)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/packages/rename-noreplace/package.json.**

/private/var/tmp/ws/8c3908e7/hvir/packages/rename-noreplace/package.json

<details>
<summary>20 lines</summary>

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
```

</details>


---

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/8c3908e7/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-220)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/main/harness/harness-provider.ts.**

/private/var/tmp/ws/8c3908e7/hvir/src/main/harness/harness-provider.ts (lines 1-220)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx (lines 1-180)

<details>
<summary>149 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'

export function TerminalSettings({
  draft,
  validation,
  onChange,
  onComposerSubmitMode,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
  readonly onComposerSubmitMode: (enabled: boolean) => void
}): ReactElement {
  const idleError = validation?.fieldId === 'settings-idle-threshold'
  return (
    <SettingsSection
      section="terminal"
      title="Terminal"
      description="Control message submission, attention timing, and startup recovery."
    >
      <div className="settings-section-scroll settings-fields">
        <fieldset className="settings-fieldset">
          <legend>Presentation</legend>
          <label htmlFor="settings-terminal-cursor-shape">
            <span>Cursor shape</span>
            <select
              id="settings-terminal-cursor-shape"
              value={draft.terminalCursorShape}
              onChange={(event) =>
                onChange(
                  'terminalCursorShape',
                  event.currentTarget.value as SettingsDraft['terminalCursorShape'],
                )
              }
            >
              <option value="block">Block</option>
              <option value="hollow-block">Hollow block</option>
              <option value="bar">Bar</option>
              <option value="underline">Underline</option>
            </select>
          </label>
          <label htmlFor="settings-terminal-cursor-blink">
            <span>Cursor blinking</span>
            <span className="settings-checkbox-copy">
              <select
                id="settings-terminal-cursor-blink"
                value={draft.terminalCursorBlink}
                onChange={(event) =>
                  onChange(
                    'terminalCursorBlink',
                    event.currentTarget.value as SettingsDraft['terminalCursorBlink'],
                  )
                }
              >
                <option value="terminal">Terminal-controlled</option>
                <option value="blinking">Blinking default</option>
                <option value="steady">Steady default</option>
              </select>
              <small>
                Applications can still request their own cursor. Terminal-controlled also
                follows the terminal's DEC blinking mode; explicit defaults do not.
              </small>
            </span>
          </label>
          <label htmlFor="settings-terminal-ligatures">
            <span>Font ligatures</span>
            <span className="settings-checkbox-copy">
              <span className="settings-checkbox-control">
                <input
                  id="settings-terminal-ligatures"
                  type="checkbox"
                  checked={draft.terminalLigatures}
                  onChange={(event) =>
                    onChange('terminalLigatures', event.currentTarget.checked)
                  }
                />
                Enable compatible terminal line shaping
              </span>
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
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/.github/workflows.**

/private/var/tmp/ws/8c3908e7/hvir/.github/workflows

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

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/scripts/run-smoke-scenarios.mts.**

/private/var/tmp/ws/8c3908e7/hvir/scripts/run-smoke-scenarios.mts (lines 1-120)

<details>
<summary>110 lines</summary>

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
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/AppearanceSettings.tsx.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/AppearanceSettings.tsx (lines 1-180)

<details>
<summary>131 lines</summary>

```
import type { ReactElement } from 'react'

import type { AppTheme } from '../../theme'
import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft } from '../settings-draft'
import {
  MAX_INTERFACE_SCALE,
  MAX_TERMINAL_TEXT_SIZE,
  MIN_INTERFACE_SCALE,
  MIN_TERMINAL_TEXT_SIZE,
} from '../typography-settings'
import { TypographyFontField } from './TypographyFontField'
import { TerminalThemeGallery } from '../TerminalThemeGallery'

export function AppearanceSettings({
  draft,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  const previewScale = Number(draft.interfaceScale)
  const interfacePreviewScale = Number.isFinite(previewScale) ? previewScale : 1
  const previewTerminalTextSize = Number(draft.terminalTextSize)
  return (
    <SettingsSection
      section="appearance"
      title="Appearance"
      description="Choose how the workbench and its terminals present your workspace."
    >
      <div className="settings-section-scroll settings-fields">
        <label htmlFor="settings-app-theme">
          <span>App theme</span>
          <select
            id="settings-app-theme"
            value={draft.theme}
            onChange={(event) => onChange('theme', event.currentTarget.value as AppTheme)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <label htmlFor="settings-terminal-theme">
          <span>Terminal colors</span>
          <select
            id="settings-terminal-theme"
            value={draft.terminalTheme}
            onChange={(event) =>
              onChange(
                'terminalTheme',
                event.currentTarget.value as SettingsDraft['terminalTheme'],
              )
            }
          >
            <option value="app">Follow app theme</option>
            <option value="dark">Always dark</option>
            <option value="light">Always light</option>
          </select>
        </label>
        <TerminalThemeGallery
          lightThemeId={draft.terminalLightThemeId}
          darkThemeId={draft.terminalDarkThemeId}
          onLightTheme={(id) => onChange('terminalLightThemeId', id)}
          onDarkTheme={(id) => onChange('terminalDarkThemeId', id)}
        />
        <TypographyFontField
          id="settings-interface-font"
          label="Interface font"
          kind="interface"
          mode={draft.interfaceFontMode}
          family={draft.interfaceFontFamily}
          previewText="Harness · View · Interact · Respond"
          previewSize={`calc(14px * ${interfacePreviewScale})`}
          onMode={(mode) => onChange('interfaceFontMode', mode)}
          onFamily={(family) => onChange('interfaceFontFamily', family)}
        />
        <TypographyFontField
          id="settings-monospace-font"
          label="Monospace font"
          kind="monospace"
          mode={draft.monospaceFontMode}
          family={draft.monospaceFontFamily}
          previewText="const hvir = ['view', 'terminal', 'git']"
          previewSize={`${Number.isFinite(previewTerminalTextSize) ? previewTerminalTextSize : 13}px`}
          onMode={(mode) => onChange('monospaceFontMode', mode)}
          onFamily={(family) => onChange('monospaceFontFamily', family)}
        />
        <label htmlFor="settings-interface-scale">
          <span>Interface scale</span>
          <span className="settings-slider">
            <input
              id="settings-interface-scale"
              type="range"
              min={MIN_INTERFACE_SCALE}
              max={MAX_INTERFACE_SCALE}
              step="0.05"
              value={draft.interfaceScale}
              onChange={(event) => onChange('interfaceScale', event.currentTarget.value)}
            />
            <output htmlFor="settings-interface-scale">
              {Math.round(interfacePreviewScale * 100)}%
            </output>
          </span>
        </label>
        <label htmlFor="settings-terminal-text-size">
          <span>Terminal text size</span>
          <span className="settings-slider">
            <input
              id="settings-terminal-text-size"
              type="range"
              min={MIN_TERMINAL_TEXT_SIZE}
              max={MAX_TERMINAL_TEXT_SIZE}
              step="1"
              value={draft.terminalTextSize}
              onChange={(event) =>
                onChange('terminalTextSize', event.currentTarget.value)
              }
            />
            <output htmlFor="settings-terminal-text-size">
              {Number.isFinite(previewTerminalTextSize)
                ? Math.round(previewTerminalTextSize)
                : 13}
              px
            </output>
          </span>
        </label>
      </div>
    </SettingsSection>
  )
}
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/GitSettings.tsx.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/GitSettings.tsx (lines 1-180)

<details>
<summary>40 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft } from '../settings-draft'

export function GitSettings({
  draft,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  return (
    <SettingsSection
      section="git"
      title="Git"
      description="Choose how often hvir refreshes remote repository information."
    >
      <div className="settings-section-scroll settings-fields">
        <label htmlFor="settings-git-auto-fetch">
          <span>Git auto-fetch</span>
          <select
            id="settings-git-auto-fetch"
            value={draft.gitAutoFetchIntervalMs}
            onChange={(event) =>
              onChange('gitAutoFetchIntervalMs', event.currentTarget.value)
            }
          >
            <option value="0">Off</option>
            <option value={String(60_000)}>Every minute</option>
            <option value={String(5 * 60_000)}>Every 5 minutes</option>
            <option value={String(15 * 60_000)}>Every 15 minutes</option>
            <option value={String(30 * 60_000)}>Every 30 minutes</option>
          </select>
        </label>
      </div>
    </SettingsSection>
  )
}
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx.**

/private/var/tmp/ws/8c3908e7/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx (lines 1-140)

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

<sub>1m 16s</sub>

### `rg`

**function projectRootArgument|projectRootArgument|process\.argv|--help**

"function projectRootArgument|projectRootArgument|process\.argv|--help" in **/*.ts (src/main)

<details>
<summary>72 matches</summary>

```
[grep content: 12 matches across 5 file(s) under /private/var/tmp/ws/8c3908e7/hvir/src/main]

index.ts (4 match(es)):
  166-       }),
  167-       (catalog) => catalog.dispose(),
  168-     )
  169:     const requestedProjectRoot = projectRootArgument()
  170-     const registry = await ProjectRegistry.create(
  171-       requestedProjectRoot ? localPath(requestedProjectRoot) : undefined,
  172-       hostCatalog,
  426-     }
  427-     createWindow()
  428-   }
  429:   function projectRootArgument(): string | undefined {
  430:     const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
  431-     return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  432-   }
  433-   void app
  437-         const { runElectronSmokeScenario } = await import('./smoke/scenarios')
  438-         const code = await runElectronSmokeScenario({
  439-           scenario: process.env['HVIR_SMOKE_SCENARIO'],
  440:           projectRoot: localPath(projectRootArgument() ?? process.cwd()),
  441-           createWindow,
  442-           harnessProbeManager,
  443-           htmlPreviews,

smoke/platform-contracts.ts (1 match(es)):
  246- }
  247- 
  248- async function verifyRequiredProcessSandbox(win: BrowserWindow): Promise<string> {
  249:   if (process.argv.includes('--no-sandbox')) {
  250-     throw new Error('required Chromium process sandbox was disabled by --no-sandbox')
  251-   }
  252-   const rendererSandboxed = (await win.webContents.executeJavaScript(`

smoke/terminal-keyboard-negotiation.ts (1 match(es)):
  373- }
  374- 
  375- function keyboardProbeLaunchCommand(): string {
  376:   return `printf '%s\\n' '__HVIR_KEYBOARD_CLIENT_''STARTED__'; node -e "eval(Buffer.from(process.argv[1],'base64').toString())" "$${PROBE_SOURCE_VARIABLE}"; unset ${PROBE_SOURCE_VARIABLE}\n`
  377- }
  378- 
  379- class KeyboardProbeObservation {

smoke/terminal-file-paste.ts (2 match(es)):
  15- const CLOSED_SUCCESS_MARKER = `${CLOSED_PREFIX}0`
  16- 
  17- const FILE_PASTE_PROBE_SOURCE = `
  18: const expected = Buffer.from(process.argv[2], 'base64');
  19- const ready = '${READY_MARKER}';
  20- const success = '${SUCCESS_MARKER}';
  21- const failure = '${FAILURE_PREFIX}';
  154- function filePasteProbeLaunchCommand(expectedPath: string): string {
  155-   const source = Buffer.from(FILE_PASTE_PROBE_SOURCE).toString('base64')
  156-   const expected = Buffer.from(expectedPath).toString('base64')
  157:   return `node -e "eval(Buffer.from(process.argv[1],'base64').toString())" '${source}' '${expected}'\n`
  158- }
  159- 
  160- async function dispatchNativeLinuxFilePaste(

smoke/terminal-middle-click-close.ts (4 match(es)):
  13- const SHELL_READY_MARKER = '__HVIR_MIDDLE_CLICK_SHELL_READY__'
  14- 
  15- const PRIMARY_SELECTION_PROBE_SOURCE = `
  16: const expected = Buffer.from(process.argv[2], 'base64');
  17: const mode = process.argv[3];
  18: const guardComplete = Buffer.from(process.argv[4], 'base64');
  19- let buffered = Buffer.alloc(0);
  20- let finished = false;
  21- const finish = (marker) => {
  167-   const source = Buffer.from(PRIMARY_SELECTION_PROBE_SOURCE).toString('base64')
  168-   const expected = Buffer.from(SELECTION_TEXT).toString('base64')
  169-   const guardComplete = Buffer.from(GUARD_COMPLETE_INPUT).toString('base64')
  170:   return `node -e "eval(Buffer.from(process.argv[1],'base64').toString())" '${source}' '${expected}' '${mode}' '${guardComplete}'; printf '\n%s%s\n' '__HVIR_MIDDLE_CLICK_' 'SHELL_READY__'\n`
  171- }
  172- 
  173- function captureSelectionRestore(): () => void {
```

</details>


---

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/.gitignore.**

/private/var/tmp/ws/8c3908e7/hvir/.gitignore

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

**view the file at /private/var/tmp/ws/8c3908e7/hvir/tsconfig.json.**

/private/var/tmp/ws/8c3908e7/hvir/tsconfig.json (lines 1-200)

```
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}

```


---

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/8c3908e7/hvir/.github/workflows/ci.yml (lines 1-220)

<details>
<summary>187 lines</summary>

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
```

</details>


---

<sub>1m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/build.**

/private/var/tmp/ws/8c3908e7/hvir/build

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

<sub>1m 22s</sub>

### `bash`

**Check working tree status**

$ git --no-pager status --short

```

<shellId: 0 completed with exit code 0>
```


---

<sub>1m 40s</sub>

### Copilot

I found an Electron + React + TypeScript developer workbench with native terminal, Git, file viewing, SSH/project, and harness integrations, so I’m adding README coverage for setup, daily commands, packaging, and repository layout.

---

<sub>2m 6s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is an Electron workbench for working inside local and remote development projects. It combines a project file tree, Ghostty-backed terminal sessions, source and rendered document viewers, Git workflows, web panes, and configurable command/agent harnesses in one desktop app.\n+\n+## Features\n+\n+- **Project workbench**: open local folders or SSH-backed project hosts, browse files, create/move/delete entries, and keep views synchronized with filesystem changes.\n+- **Terminal workspace**: run persistent `node-pty` terminal sessions with Ghostty rendering, splits, session recovery, search, file links, clipboard/file paste, and theme controls.\n+- **Viewer workspace**: inspect source, diffs, Markdown, Mermaid, images, JSON, CSV, and large files with tabbed/split navigation.\n+- **Git tools**: review changes, inspect history and graph views, fetch, pull, switch branches, and coordinate mutation authorization.\n+- **Harness integrations**: launch shell, custom command, Claude Code, Codex, Gemini, GitHub Copilot, Cursor, and pi providers through configurable profiles.\n+- **Operational surfaces**: sessions overview, diagnostics reports, workbench health, web panes, smoke scenarios, and architecture-policy checks.\n+\n+## Requirements\n+\n+- Node.js **24 or newer**\n+- npm\n+- A native build toolchain compatible with `node-gyp` for rebuilding native modules (`node-pty` and `@hvir/rename-noreplace`)\n+- macOS or Linux for development and packaging targets\n+\n+## Getting started\n+\n+```bash\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` installs the Electron runtime, verifies the pinned `ghostty-web` terminal runtime, and rebuilds native modules for the local Electron ABI.\n+\n+To start hvir against a specific project without using the folder picker:\n+\n+```bash\n+HVIR_PROJECT_ROOT=/path/to/project npm run dev\n+```\n+\n+## Common commands\n+\n+| Command | Description |\n+| --- | --- |\n+| `npm run dev` | Start the Electron app in development mode. |\n+| `npm run build` | Type-check Node and web targets, then build the Electron bundles. |\n+| `npm run build:dir` | Build and create an unpacked Electron app in `dist/`. |\n+| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg`. |\n+| `npm run pack:linux:x64` | Build a Linux x64 `.deb`. |\n+| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb`. |\n+| `npm run lint` | Run ESLint across the repository. |\n+| `npm run typecheck` | Run TypeScript checks for Node and renderer projects. |\n+| `npm test` | Run the Vitest unit and component test suite. |\n+| `npm run verify` | Run seam, ADR, architecture, lint, type, and unit-test gates. |\n+| `npm run smoke` | Build the smoke app and run the default Electron smoke scenarios. |\n+| `npm run smoke:scenario -- <name>` | Run one or more named Electron smoke scenarios. |\n+\n+On Linux, Electron smoke runs usually need a display server; CI runs them with `xvfb-run`.\n+\n+## Repository layout\n+\n+```text\n+build/                    Packaging resources, icons, entitlements, and native install assets\n+packages/rename-noreplace Private Node-API helper for atomic no-replace rename operations\n+scripts/                  Release, architecture, smoke, project-management, and maintenance tools\n+src/main/                 Electron main process, project hosts, PTY, Git, IPC, diagnostics, smoke runtime\n+src/preload/              Electron preload bridge\n+src/renderer/             React renderer, workbench UI, terminal/viewer/Git/settings surfaces\n+src/shared/               Shared contracts, types, IPC payloads, and policies\n+src/workers/              Utility-process workers used by the main process\n+test/                     Vitest unit, integration-seam, and renderer component tests\n+```\n+\n+## Architecture and quality gates\n+\n+The project keeps main, preload, renderer, shared contracts, and workers separated through explicit seams. The `verify` script is the standard pre-merge gate:\n+\n+```bash\n+npm run verify\n+```\n+\n+For focused checks while developing, use `npm run lint`, `npm run typecheck`, or `npm test`. Architecture reports and enforcement are available through `npm run architecture:report` and `npm run architecture:check`.\n+\n+## Packaging and releases\n+\n+Electron Builder configuration lives in `electron-builder.yml`. Release-oriented scripts are in `scripts/`, including native release assembly, installer rendering, release changelog generation, package smoke tests, and release PR validation.\n+\n+Generated outputs are intentionally ignored:\n+\n+- `out/` for Electron/Vite build output\n+- `dist/` for packaged artifacts\n+- `packages/*/build` for native package build products\n+- `coverage/` for test coverage\n+\n+## License\n+\n+hvir is licensed under the MIT License. See [LICENSE](LICENSE) for details and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for bundled third-party notices.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/8c3908e7/hvir/README.md
```


---

<sub>2m 21s</sub>

### `view`

**view the file at /private/var/tmp/ws/8c3908e7/hvir/README.md.**

/private/var/tmp/ws/8c3908e7/hvir/README.md

<details>
<summary>67 lines</summary>

````
# hvir

hvir is an Electron workbench for working inside local and remote development projects. It combines a project file tree, Ghostty-backed terminal sessions, source and rendered document viewers, Git workflows, web panes, and configurable command/agent harnesses in one desktop app.

## Features

- **Project workbench**: open local folders or SSH-backed project hosts, browse files, create/move/delete entries, and keep views synchronized with filesystem changes.
- **Terminal workspace**: run persistent `node-pty` terminal sessions with Ghostty rendering, splits, session recovery, search, file links, clipboard/file paste, and theme controls.
- **Viewer workspace**: inspect source, diffs, Markdown, Mermaid, images, JSON, CSV, and large files with tabbed/split navigation.
- **Git tools**: review changes, inspect history and graph views, fetch, pull, switch branches, and coordinate mutation authorization.
- **Harness integrations**: launch shell, custom command, Claude Code, Codex, Gemini, GitHub Copilot, Cursor, and pi providers through configurable profiles.
- **Operational surfaces**: sessions overview, diagnostics reports, workbench health, web panes, smoke scenarios, and architecture-policy checks.

## Requirements

- Node.js **24 or newer**
- npm
- A native build toolchain compatible with `node-gyp` for rebuilding native modules (`node-pty` and `@hvir/rename-noreplace`)
- macOS or Linux for development and packaging targets

## Getting started

```bash
npm ci
npm run dev
```

`npm ci` installs the Electron runtime, verifies the pinned `ghostty-web` terminal runtime, and rebuilds native modules for the local Electron ABI.

To start hvir against a specific project without using the folder picker:

```bash
HVIR_PROJECT_ROOT=/path/to/project npm run dev
```

## Common commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Electron app in development mode. |
| `npm run build` | Type-check Node and web targets, then build the Electron bundles. |
| `npm run build:dir` | Build and create an unpacked Electron app in `dist/`. |
| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg`. |
| `npm run pack:linux:x64` | Build a Linux x64 `.deb`. |
| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb`. |
| `npm run lint` | Run ESLint across the repository. |
| `npm run typecheck` | Run TypeScript checks for Node and renderer projects. |
| `npm test` | Run the Vitest unit and component test suite. |
| `npm run verify` | Run seam, ADR, architecture, lint, type, and unit-test gates. |
| `npm run smoke` | Build the smoke app and run the default Electron smoke scenarios. |
| `npm run smoke:scenario -- <name>` | Run one or more named Electron smoke scenarios. |

On Linux, Electron smoke runs usually need a display server; CI runs them with `xvfb-run`.

## Repository layout

```text
build/                    Packaging resources, icons, entitlements, and native install assets
packages/rename-noreplace Private Node-API helper for atomic no-replace rename operations
scripts/                  Release, architecture, smoke, project-management, and maintenance tools
src/main/                 Electron main process, project hosts, PTY, Git, IPC, diagnostics, smoke runtime
src/preload/              Electron preload bridge
src/renderer/             React renderer, workbench UI, terminal/viewer/Git/settings surfaces
src/shared/               Shared contracts, types, IPC payloads, and policies
src/workers/              Utility-process workers used by the main process
test/                     Vitest unit, integration-seam, and renderer component tests
```

## Architecture and quality gates

The project keeps main, preload, renderer, shared contracts, and workers separated through explicit seams. The `verify` script is the standard pre-merge gate:

```bash
npm run verify
```

For focused checks while developing, use `npm run lint`, `npm run typecheck`, or `npm test`. Architecture reports and enforcement are available through `npm run architecture:report` and `npm run architecture:check`.

## Packaging and releases

Electron Builder configuration lives in `electron-builder.yml`. Release-oriented scripts are in `scripts/`, including native release assembly, installer rendering, release changelog generation, package smoke tests, and release PR validation.

Generated outputs are intentionally ignored:

- `out/` for Electron/Vite build output
- `dist/` for packaged artifacts
- `packages/*/build` for native package build products
- `coverage/` for test coverage

## License

hvir is licensed under the MIT License. See [LICENSE](LICENSE) for details and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for bundled third-party notices.
````

</details>


---

<sub>2m 21s</sub>

### `bash`

**Check README formatting**

$ npx prettier --check README.md --log-level warn

```

<shellId: 1 completed with exit code 0>
```


---

<sub>2m 21s</sub>

### `bash`

**Show README diff stat**

$ git --no-pager diff --stat -- README.md

```

<shellId: 2 completed with exit code 0>
```


---

<sub>2m 27s</sub>

### `bash`

**Inspect README status and diff**

$ git --no-pager status --short README.md && git --no-pager diff --no-index -- /dev/null README.md | sed -n '1,160p'

<details>
<summary>100 lines</summary>

````diff
?? README.md
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..5b37727
--- /dev/null
+++ b/README.md
@@ -0,0 +1,92 @@
+# hvir
+
+hvir is an Electron workbench for working inside local and remote development projects. It combines a project file tree, Ghostty-backed terminal sessions, source and rendered document viewers, Git workflows, web panes, and configurable command/agent harnesses in one desktop app.
+
+## Features
+
+- **Project workbench**: open local folders or SSH-backed project hosts, browse files, create/move/delete entries, and keep views synchronized with filesystem changes.
+- **Terminal workspace**: run persistent `node-pty` terminal sessions with Ghostty rendering, splits, session recovery, search, file links, clipboard/file paste, and theme controls.
+- **Viewer workspace**: inspect source, diffs, Markdown, Mermaid, images, JSON, CSV, and large files with tabbed/split navigation.
+- **Git tools**: review changes, inspect history and graph views, fetch, pull, switch branches, and coordinate mutation authorization.
+- **Harness integrations**: launch shell, custom command, Claude Code, Codex, Gemini, GitHub Copilot, Cursor, and pi providers through configurable profiles.
+- **Operational surfaces**: sessions overview, diagnostics reports, workbench health, web panes, smoke scenarios, and architecture-policy checks.
+
+## Requirements
+
+- Node.js **24 or newer**
+- npm
+- A native build toolchain compatible with `node-gyp` for rebuilding native modules (`node-pty` and `@hvir/rename-noreplace`)
+- macOS or Linux for development and packaging targets
+
+## Getting started
+
+```bash
+npm ci
+npm run dev
+```
+
+`npm ci` installs the Electron runtime, verifies the pinned `ghostty-web` terminal runtime, and rebuilds native modules for the local Electron ABI.
+
+To start hvir against a specific project without using the folder picker:
+
+```bash
+HVIR_PROJECT_ROOT=/path/to/project npm run dev
+```
+
+## Common commands
+
+| Command | Description |
+| --- | --- |
+| `npm run dev` | Start the Electron app in development mode. |
+| `npm run build` | Type-check Node and web targets, then build the Electron bundles. |
+| `npm run build:dir` | Build and create an unpacked Electron app in `dist/`. |
+| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg`. |
+| `npm run pack:linux:x64` | Build a Linux x64 `.deb`. |
+| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb`. |
+| `npm run lint` | Run ESLint across the repository. |
+| `npm run typecheck` | Run TypeScript checks for Node and renderer projects. |
+| `npm test` | Run the Vitest unit and component test suite. |
+| `npm run verify` | Run seam, ADR, architecture, lint, type, and unit-test gates. |
+| `npm run smoke` | Build the smoke app and run the default Electron smoke scenarios. |
+| `npm run smoke:scenario -- <name>` | Run one or more named Electron smoke scenarios. |
+
+On Linux, Electron smoke runs usually need a display server; CI runs them with `xvfb-run`.
+
+## Repository layout
+
+```text
+build/                    Packaging resources, icons, entitlements, and native install assets
+packages/rename-noreplace Private Node-API helper for atomic no-replace rename operations
+scripts/                  Release, architecture, smoke, project-management, and maintenance tools
+src/main/                 Electron main process, project hosts, PTY, Git, IPC, diagnostics, smoke runtime
+src/preload/              Electron preload bridge
+src/renderer/             React renderer, workbench UI, terminal/viewer/Git/settings surfaces
+src/shared/               Shared contracts, types, IPC payloads, and policies
+src/workers/              Utility-process workers used by the main process
+test/                     Vitest unit, integration-seam, and renderer component tests
+```
+
+## Architecture and quality gates
+
+The project keeps main, preload, renderer, shared contracts, and workers separated through explicit seams. The `verify` script is the standard pre-merge gate:
+
+```bash
+npm run verify
+```
+
+For focused checks while developing, use `npm run lint`, `npm run typecheck`, or `npm test`. Architecture reports and enforcement are available through `npm run architecture:report` and `npm run architecture:check`.
+
+## Packaging and releases
+
+Electron Builder configuration lives in `electron-builder.yml`. Release-oriented scripts are in `scripts/`, including native release assembly, installer rendering, release changelog generation, package smoke tests, and release PR validation.
+
+Generated outputs are intentionally ignored:
+
+- `out/` for Electron/Vite build output
+- `dist/` for packaged artifacts
+- `packages/*/build` for native package build products
+- `coverage/` for test coverage
+
+## License
+
+hvir is licensed under the MIT License. See [LICENSE](LICENSE) for details and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for bundled third-party notices.
<shellId: 3 completed with exit code 0>
````

</details>


---

<sub>2m 30s</sub>

### Copilot

**Created `README.md`** for the project, covering hvir’s purpose, main features, requirements, setup, common npm commands, repository layout, architecture/quality gates, packaging outputs, and license/third-party notices.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
