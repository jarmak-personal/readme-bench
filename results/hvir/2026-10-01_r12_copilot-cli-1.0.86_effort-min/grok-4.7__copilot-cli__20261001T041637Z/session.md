# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `73008a0a-4cad-456a-82d5-7a0071a72b76`  
> - **Started:** 10/1/2026, 12:16:53 AM  
> - **Duration:** 1m 1s  
> - **Exported:** 10/1/2026, 12:17:54 AM  

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

I'll inspect the project structure and key files so the README matches what this repo actually does.

---

<sub>2s</sub>

### `bash`

**List project structure**

$ ls -la && find . -maxdepth 3 -type d -not -path '*/.*' | head -80

<details>
<summary>110 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Oct  1 00:16 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:16 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:16 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:16 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct  1 00:16 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Oct  1 00:16 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Oct  1 00:16 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Oct  1 00:16 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct  1 00:16 build
-rw-r--r--@   1 air-jarmak  wheel     549 Oct  1 00:16 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Oct  1 00:16 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Oct  1 00:16 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Oct  1 00:16 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Oct  1 00:16 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Oct  1 00:16 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Oct  1 00:16 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Oct  1 00:16 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct  1 00:16 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Oct  1 00:16 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Oct  1 00:16 src
-rw-r--r--@   1 air-jarmak  wheel     537 Oct  1 00:16 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Oct  1 00:16 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Oct  1 00:16 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Oct  1 00:16 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Oct  1 00:16 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Oct  1 00:16 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Oct  1 00:16 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Oct  1 00:16 vitest.config.ts
.
./test
./test/fixtures
./test/fixtures/architecture
./test/fixtures/clipboard-file-list
./node_modules
./node_modules/isbinaryfile
./node_modules/isbinaryfile/lib
./node_modules/is-plain-obj
./node_modules/plist
./node_modules/plist/dist
./node_modules/plist/examples
./node_modules/plist/lib
./node_modules/tinyglobby
./node_modules/tinyglobby/dist
./node_modules/d3-format
./node_modules/d3-format/locale
./node_modules/d3-format/dist
./node_modules/d3-format/src
./node_modules/zod
./node_modules/zod/v4-mini
./node_modules/zod/locales
./node_modules/zod/mini
./node_modules/zod/v4
./node_modules/zod/v3
./node_modules/zod/src
./node_modules/fast-wrap-ansi
./node_modules/fast-wrap-ansi/lib
./node_modules/zwitch
./node_modules/define-data-property
./node_modules/define-data-property/test
./node_modules/weapon-regex
./node_modules/obug
./node_modules/obug/dist
./node_modules/responselike
./node_modules/responselike/src
./node_modules/jsesc
./node_modules/jsesc/man
./node_modules/jsesc/bin
./node_modules/mutation-testing-report-schema
./node_modules/mutation-testing-report-schema/src-generated
./node_modules/mutation-testing-report-schema/dist
./node_modules/mutation-testing-report-schema/src
./node_modules/hosted-git-info
./node_modules/hosted-git-info/node_modules
./node_modules/mdurl
./node_modules/mdurl/lib
./node_modules/mdurl/build
./node_modules/d3-contour
./node_modules/d3-contour/dist
./node_modules/d3-contour/src
./node_modules/asn1
./node_modules/asn1/lib
./node_modules/@types
./node_modules/@types/plist
./node_modules/@types/d3-format
./node_modules/@types/responselike
./node_modules/@types/jsesc
./node_modules/@types/d3-contour
./node_modules/@types/d3-shape
./node_modules/@types/geojson
./node_modules/@types/http-cache-semantics
./node_modules/@types/cacheable-request
./node_modules/@types/ms
./node_modules/@types/d3-array
./node_modules/@types/chai
./node_modules/@types/hast
./node_modules/@types/d3-polygon
./node_modules/@types/d3-scale
./node_modules/@types/d3-scale-chromatic
./node_modules/@types/d3-axis
./node_modules/@types/gensync
./node_modules/@types/d3-color
./node_modules/@types/d3-dispatch
./node_modules/@types/esrecurse
./node_modules/@types/d3-geo
./node_modules/@types/babel__template
./node_modules/@types/d3-timer
./node_modules/@types/d3-time-format
./node_modules/@types/d3-interpolate
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d38f75d1/hvir/package.json.**

/private/var/tmp/ws/d38f75d1/hvir/package.json

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

### `bash`

**List source, scripts, github dirs**

$ ls src packages scripts .github .githooks && head -80 LICENSE

<details>
<summary>84 lines</summary>

```
.githooks:
pre-push

.github:
dependabot.yml
workflows

packages:
rename-noreplace

scripts:
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

src:
main
preload
renderer
shared
workers
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

<sub>7s</sub>

### `bash`

**Explore source and existing docs**

$ ls src/main src/renderer src/shared src/preload src/workers | head -200; echo '---'; ls src/renderer; echo '---docs---'; find . -name '*.md' -not -path './node_modules/*' -not -path './.git/*' | head -40

<details>
<summary>95 lines</summary>

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

src/preload:
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts

src/renderer:
index.html
src

src/shared:
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

src/workers:
echo-worker.ts
git-worker.ts
---
index.html
src
---docs---
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/d38f75d1/hvir/electron-builder.yml.**

/private/var/tmp/ws/d38f75d1/hvir/electron-builder.yml (lines 1-80)

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

<sub>20s</sub>

### `view`

**view the file at /private/var/tmp/ws/d38f75d1/hvir/src/main/index.ts.**

/private/var/tmp/ws/d38f75d1/hvir/src/main/index.ts (lines 1-80)

<details>
<summary>80 lines</summary>

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
```

</details>


---

<sub>20s</sub>

### `grep`

**hvir is|product description|workbench**

"hvir is|product description|workbench" in *.{ts,mts,md,html}

<details>
<summary>88 matches</summary>

```
[grep-paths: 82 path(s) under .; grouped by directory]

./src/ (55 path(s))
  main/diagnostics/diagnostic-event.ts
  main/diagnostics/diagnostic-report-builder.ts
  main/diagnostics/runtime-diagnostics.ts
  main/document-review/document-review-application.ts
  main/health/workbench-health-events.ts
  main/health/workbench-health.ts
  main/index.ts
  main/ipc/authority-channel-policy.ts
  main/ipc/authority-router.ts
  main/ipc/features/app.ts
  main/sessions/sessions-observation-application.ts
  main/smoke/app-settings.ts
  main/smoke/diagnostic-report-restart.ts
  main/smoke/document-review-evidence.mts
  main/smoke/document-review.ts
  main/smoke/external-documents.ts
  main/smoke/filename-search.ts
  main/smoke/index.ts
  main/smoke/platform-contracts.ts
  main/smoke/renderer-recovery-delivery.ts
  main/smoke/renderer-recovery.ts
  main/smoke/scenario-selection.mts
  main/smoke/sessions-projection.ts
  main/smoke/sessions-visual.ts
  main/smoke/terminal-hidden-reveal.ts
  main/smoke/terminal-horizon-presentation.ts
  main/smoke/terminal-presentation-scenarios.ts
  main/smoke/terminal-presentation.ts
  main/smoke/web-pane.ts
  main/smoke/workbench-health-scenario.ts
  main/smoke/workbench-health.ts
  main/smoke/workbench-layout.ts
  main/terminal/terminal-identity-publication.ts
  main/window/electron-renderer-recovery.ts
  main/window/electron-window-manager.ts
  main/window/window-health-tracker.ts
  main/window/window-policy.ts
  main/workbench-runtime.ts
  renderer/src/health/use-workbench-health.ts
  renderer/src/layout/workspace-layout-persistence.ts
  renderer/src/sessions/sessions-terminal-detail-controller.ts
  renderer/src/workbench/use-renderer-ready.ts
  renderer/src/workbench/use-workbench-commands.ts
  renderer/src/workbench/use-workbench-layout.ts
  renderer/src/workbench/use-workbench-overlays.ts
  renderer/src/workbench/workbench-command-router.ts
  renderer/src/workbench/workbench-layout-policy.ts
  renderer/src/workbench/workbench-overlay-model.ts
  shared/diagnostic-report-event.ts
  shared/diagnostic-report.ts
  shared/host-path.ts
  shared/index.ts
  shared/ipc.ts
  shared/ipc/diagnostics.ts
  shared/keybindings.ts

./test/ (25 path(s))
  attention-badge.test.ts
  diagnostic-journal.test.ts
  diagnostic-report-evidence.test.ts
  electron-renderer-document-lifecycle.test.ts
  electron-renderer-recovery.test.ts
  external-document-ssh.test.ts
  html-sandbox.test.ts
  ipc-authority-router.test.ts
  keybindings.test.ts
  modal-keyboard.test.ts
  native-installer.test.ts
  rendered-link.test.ts
  renderer-event-publisher.test.ts
  smoke-recovery-delivery.test.ts
  smoke-scenario-runner.test.ts
  smoke-selection.test.ts
  terminal-path-activation.test.ts
  web-pane-workspace.test.ts
  window-health-tracker.test.ts
  window-policy.test.ts
  workbench-commands.test.ts
  workbench-health.test.ts
  workbench-layout.test.ts
  workbench-overlays.test.ts
  workbench-runtime.test.ts

./ (1 path(s))
  ./THIRD_PARTY_NOTICES.md

./scripts/ (1 path(s))
  run-smoke-scenarios.mts

[extensions: .ts=78, .mts=3, .md=1]
```

</details>


---

<sub>20s</sub>

### `bash`

**List renderer and workflows**

$ ls src/renderer/src | head -60; echo '---'; ls .github/workflows

<details>
<summary>40 lines</summary>

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
---
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>24s</sub>

### `view`

**view the file at /private/var/tmp/ws/d38f75d1/hvir/src/renderer/index.html.**

/private/var/tmp/ws/d38f75d1/hvir/src/renderer/index.html (lines 1-40)

<details>
<summary>25 lines</summary>

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-src hvir-preview:; connect-src 'self' data: ws://localhost:* http://localhost:*"
    />
    <title>hvir</title>
    <style>
      html,
      body,
      #root {
        margin: 0;
        height: 100%;
        background: #0b0d10;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>


---

<sub>24s</sub>

### `grep`

**description:**

"description:" in src/renderer/src/settings/**/*.{ts,tsx}

```
./src/renderer/src/settings/SettingsSection.tsx
./src/renderer/src/settings/harness-profile-draft.ts
```


---

<sub>24s</sub>

### `bash`

**List settings and harness modules**

$ ls src/renderer/src/settings src/renderer/src/workbench src/main/harness | head -80

<details>
<summary>79 lines</summary>

```
src/main/harness:
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
providers
remote-image-paste-storage.ts
remote-image-paste.ts

src/renderer/src/settings:
ComposerSubmitConsentDialog.tsx
harness-argument-editor.ts
harness-profile-draft.ts
harness-profile-editor-policy.ts
harness-profile-request-policy.ts
HarnessProfileAdvancedFields.tsx
HarnessProfileCommandFields.tsx
HarnessProfileDialogs.tsx
HarnessProfileEditor.tsx
HarnessProfileOverlays.tsx
HarnessProfilesSettings.tsx
keybindings.ts
sections
settings-draft.ts
settings-model.ts
settings-navigation.ts
settings.ts
SettingsActiveSection.tsx
SettingsDialog.tsx
SettingsSection.tsx
SettingsSectionNavigation.tsx
TerminalThemeGallery.tsx
typography-presentation.ts
typography-settings.ts
use-add-harness-dialog.ts
use-harness-binding-authorization.ts
use-harness-folder-picker.ts
use-harness-profile-editor.ts
use-harness-profile-load.ts
use-settings-controller.ts

src/renderer/src/workbench:
active-terminal-focus.ts
ConfirmationDialog.tsx
middle-click-close.ts
modal-keyboard-model.ts
TerminalLayoutControls.tsx
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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/d38f75d1/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/d38f75d1/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-80)

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/d38f75d1/hvir/src/renderer/src/settings/settings.ts.**

/private/var/tmp/ws/d38f75d1/hvir/src/renderer/src/settings/settings.ts (lines 1-100)

<details>
<summary>91 lines</summary>

```
import { useSyncExternalStore } from 'react'

import { DEFAULT_KEYBINDINGS, parseKeybindingOverrides } from './keybindings'
import type { AppSettings, TerminalPreferences } from './settings-model'
import {
  DEFAULT_TERMINAL_THEME_IDS,
  normalizeTerminalThemeId,
} from '../terminal/terminal-theme-catalog'
import {
  applyTypographyPresentation,
  type TypographyPropertyTarget,
} from './typography-presentation'
import {
  DEFAULT_INTERFACE_SCALE,
  DEFAULT_TERMINAL_TEXT_SIZE,
  fontFamilyStack,
  normalizeFontPreference,
  normalizeInterfaceScale,
  normalizeTerminalTextSize,
  systemFontPreference,
} from './typography-settings'

export type {
  AppSettings,
  TerminalPreferences,
  TerminalRecoveryMode,
  TerminalThemeOverride,
  FontPreference,
  FontPreferenceMode,
} from './settings-model'

const STORAGE_KEY = 'hvir:settings:v1'
const listeners = new Set<() => void>()
let settings = readSettings()
let typographyTarget: TypographyPropertyTarget | undefined

export function getAppSettings(): AppSettings {
  return settings
}

export function useAppSettings(): AppSettings {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => settings,
    () => settings,
  )
}

export function initializeAppSettings(target: TypographyPropertyTarget): void {
  typographyTarget = target
  applyTypographyPresentation(settings, target)
}

export function setAppSettings(next: AppSettings): void {
  settings = normalizeAppSettings(next)
  if (typographyTarget) applyTypographyPresentation(settings, typographyTarget)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch {
    // Storage denial should not prevent live settings changes.
  }
  for (const listener of listeners) listener()
}

function readSettings(): AppSettings {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
      return normalizeAppSettings(raw)
    }
    const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')
    return {
      ...defaults(),
      terminalRecoveryMode: legacyRecovery === 'auto' ? 'auto' : 'prompt',
    }
  } catch {
    return defaults()
  }
}

export function normalizeAppSettings(value: unknown): AppSettings {
  const candidate =
    value && typeof value === 'object' && !Array.isArray(value)
      ? (value as Partial<AppSettings>)
      : {}
  const idle = candidate.idleThresholdMs
  const autoFetch = candidate.gitAutoFetchIntervalMs
  return {
    idleThresholdMs:
      typeof idle === 'number' && Number.isFinite(idle)
        ? Math.min(60_000, Math.max(500, Math.round(idle)))
        : 4_000,
    gitAutoFetchIntervalMs:
      typeof autoFetch === 'number' && Number.isFinite(autoFetch)
        ? autoFetch === 0
          ? 0
          : Math.min(60 * 60_000, Math.max(60_000, Math.round(autoFetch)))
```

</details>


---

<sub>28s</sub>

### `grep`

**productName|developer-tools|local and remote**

"productName|developer-tools|local and remote" in src/**/*.{ts,tsx}

```
No matches found.
```


---

<sub>50s</sub>

### Copilot

I have enough of the product surface to write a concise README covering setup, development, and packaging.

---

<sub>59s</sub>

### `create`

**create a new file at /private/var/tmp/ws/d38f75d1/hvir/README.md.**

/private/var/tmp/ws/d38f75d1/hvir/README.md

```
Created file /private/var/tmp/ws/d38f75d1/hvir/README.md with 2366 characters
```


---

<sub>1m 0s</sub>

### Copilot

Created `README.md` for hvir. It covers the Electron workbench, Node 24 setup, `npm run dev`, tests and smoke commands, the source layout, and macOS and Linux packaging.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
