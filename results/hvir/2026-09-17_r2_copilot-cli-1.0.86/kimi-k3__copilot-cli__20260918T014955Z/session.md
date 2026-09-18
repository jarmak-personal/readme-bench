# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `8a4cffe8-99a8-4e04-bee6-8f336e921604`  
> - **Started:** 9/17/2026, 9:50:10 PM  
> - **Duration:** 1m 33s  
> - **Exported:** 9/17/2026, 9:51:43 PM  

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

**view the file at /private/var/tmp/ws/6fdf6e51/hvir.**

/private/var/tmp/ws/6fdf6e51/hvir

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

### `view`

**view the file at /private/var/tmp/ws/6fdf6e51/hvir/package.json.**

/private/var/tmp/ws/6fdf6e51/hvir/package.json

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

**view the file at /private/var/tmp/ws/6fdf6e51/hvir/src.**

/private/var/tmp/ws/6fdf6e51/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>15s</sub>

### `glob`

***.md**

"*.md"

```
./THIRD_PARTY_NOTICES.md
./test/fixtures/rendered.md
./test/fixtures/rendered-mmd.md
```


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/6fdf6e51/hvir/.github.**

/private/var/tmp/ws/6fdf6e51/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>15s</sub>

### `bash`

**List source and script directories**

$ ls /private/var/tmp/ws/6fdf6e51/hvir/src/main /private/var/tmp/ws/6fdf6e51/hvir/src/renderer /private/var/tmp/ws/6fdf6e51/hvir/packages /private/var/tmp/ws/6fdf6e51/hvir/scripts 2>/dev/null | head -80

<details>
<summary>79 lines</summary>

```
/private/var/tmp/ws/6fdf6e51/hvir/packages:
rename-noreplace

/private/var/tmp/ws/6fdf6e51/hvir/scripts:
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

/private/var/tmp/ws/6fdf6e51/hvir/src/main:
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
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>20s</sub>

### `bash`

**List remaining source directories and workflows**

$ ls /private/var/tmp/ws/6fdf6e51/hvir/src/main /private/var/tmp/ws/6fdf6e51/hvir/src/renderer /private/var/tmp/ws/6fdf6e51/hvir/src/shared 2>/dev/null | tail -60; ls /private/var/tmp/ws/6fdf6e51/hvir/.github/workflows

<details>
<summary>70 lines</summary>

```
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

/private/var/tmp/ws/6fdf6e51/hvir/src/renderer:
index.html
src

/private/var/tmp/ws/6fdf6e51/hvir/src/shared:
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>26s</sub>

### `glob`

**docs/**/*.md**

"docs/**/*.md"

```
No files matched the pattern.
```


---

<sub>26s</sub>

### `bash`

**Inspect renderer structure and CI workflow**

$ ls /private/var/tmp/ws/6fdf6e51/hvir/src/renderer/src; head -50 /private/var/tmp/ws/6fdf6e51/hvir/.github/workflows/ci.yml

<details>
<summary>71 lines</summary>

```
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>35s</sub>

### `bash`

**Check git remote and renderer feature folders**

$ git -C /private/var/tmp/ws/6fdf6e51/hvir remote -v; git -C /private/var/tmp/ws/6fdf6e51/hvir log -1 --format='%s'; ls /private/var/tmp/ws/6fdf6e51/hvir/src/renderer/src/harness /private/var/tmp/ws/6fdf6e51/hvir/src/renderer/src/workspaces /private/var/tmp/ws/6fdf6e51/hvir/src/renderer/src/viewer | head -60

<details>
<summary>61 lines</summary>

```
Initial commit
/private/var/tmp/ws/6fdf6e51/hvir/src/renderer/src/harness:
ProviderContextMeter.tsx

/private/var/tmp/ws/6fdf6e51/hvir/src/renderer/src/viewer:
code-scroll-anchor.ts
codemirror-find-target.ts
csv-parser.ts
csv-protocol.ts
csv.worker.ts
diff-policy.ts
DiffView.tsx
dom-find-target.ts
external-document-context.ts
external-document-tabs.ts
FileViewer.tsx
FindControl.tsx
GoToLineControl.tsx
highlight-protocol.ts
highlight-request.ts
highlight-worker.ts
highlight.worker.ts
json-protocol.ts
json.worker.ts
LargeFileView.tsx
markdown-client.ts
markdown-extensions.ts
markdown-renderer.ts
markdown-repository-images.ts
markdown.worker.ts
MarkdownFragment.tsx
render-protocol.ts
rendered-link-handler.ts
rendered-position.ts
RenderedView.tsx
RepositoryImageView.tsx
retained-viewer-workspace-cache.ts
shiki-grammar-registry.ts
shiki-language-catalog.ts
shiki-language-names.ts
source-blame-gutter.ts
source-coordinate.ts
source-highlighting.ts
SourceView.tsx
structured-data.ts
tab-state.ts
TabStrip.tsx
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>45s</sub>

### `bash`

**Peek at entry point and harness profile for app description**

$ head -40 /private/var/tmp/ws/6fdf6e51/hvir/src/main/index.ts; echo ---; head -40 /private/var/tmp/ws/6fdf6e51/hvir/src/shared/harness-profile.ts; echo ---; grep -ri "hvir" /private/var/tmp/ws/6fdf6e51/hvir/src/renderer/index.html | head -5

<details>
<summary>77 lines</summary>

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
---
import type { HarnessProviderId } from './harness-provider'
import type { HostPath } from './host-path'

const PROFILE_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/
const BINDING_NAME = /^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/
const ENVIRONMENT_NAME = /^[a-zA-Z_][a-zA-Z0-9_]{0,127}$/

declare const harnessProfileIdBrand: unique symbol

export type HarnessProfileId = string & {
  readonly [harnessProfileIdBrand]: 'HarnessProfileId'
}

export type HarnessProfileScope =
  | { readonly kind: 'global' }
  | { readonly kind: 'project'; readonly projectRoot: HostPath }

export type HarnessProfileExecutable =
  | { readonly kind: 'provider-default' }
  | { readonly kind: 'command'; readonly command: string }
  | { readonly kind: 'path'; readonly path: HostPath; readonly grantId?: string }

export type HarnessArgumentPart =
  | { readonly kind: 'literal'; readonly value: string }
  | {
      readonly kind: 'path'
      readonly source: 'projectRoot' | 'workspaceRoot' | 'binding'
      readonly binding?: string
    }

export interface HarnessProfileArgument {
  readonly parts: readonly HarnessArgumentPart[]
}

export type HarnessEnvironmentBinding =
  | {
      readonly kind: 'literal'
      readonly name: string
      readonly value: string
    }
---
/private/var/tmp/ws/6fdf6e51/hvir/src/renderer/index.html:      content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-src hvir-preview:; connect-src 'self' data: ws://localhost:* http://localhost:*"
/private/var/tmp/ws/6fdf6e51/hvir/src/renderer/index.html:    <title>hvir</title>
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>51s</sub>

### Copilot

I have a good picture of the project now. Let me create the README.

---

<sub>1m 20s</sub>

### `create`

**create a new file at /private/var/tmp/ws/6fdf6e51/hvir/README.md.**

/private/var/tmp/ws/6fdf6e51/hvir/README.md

```
Created file /private/var/tmp/ws/6fdf6e51/hvir/README.md with 5084 characters
```


---

<sub>1m 27s</sub>

### `bash`

**Verify README passes Prettier formatting check**

$ cd /private/var/tmp/ws/6fdf6e51/hvir && npx prettier --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 5 completed with exit code 0>
```


---

<sub>1m 29s</sub>

### Copilot

Created `README.md` for the hvir project, covering:

- **Overview**: an Electron desktop workbench for projects and agentic CLI harnesses
- **Features**: terminals (node-pty + ghostty-web), harness profiles, file viewer (Shiki/Markdown/Mermaid/CSV/diffs), workspaces, SSH remote support, git integration, sessions, diagnostics
- **Tech stack, requirements** (Node ≥ 24, native toolchain), and getting started
- **Script reference tables** (dev, smoke/acceptance, packaging, hygiene) drawn from `package.json`
- **Project structure** and development workflow notes

Verified the file passes the repo's Prettier check.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
