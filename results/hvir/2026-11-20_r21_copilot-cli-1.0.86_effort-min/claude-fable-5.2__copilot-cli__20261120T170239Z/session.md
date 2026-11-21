# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `f80e3523-9c86-4e43-9438-50b4f7bddc54`  
> - **Started:** 11/20/2026, 12:02:56 PM  
> - **Duration:** 41s  
> - **Exported:** 11/20/2026, 12:03:37 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>4s</sub>

### `bash`

**Inspect project layout and manifests**

$ ls -la; git --no-pager log --oneline | head -10; cat package.json pyproject.toml Cargo.toml go.mod Makefile 2>/dev/null | head -80

<details>
<summary>111 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Nov 20 12:02 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 12:02 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 12:02 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 12:02 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 12:02 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Nov 20 12:02 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Nov 20 12:02 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Nov 20 12:02 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 12:02 build
-rw-r--r--@   1 air-jarmak  wheel     549 Nov 20 12:02 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Nov 20 12:02 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Nov 20 12:02 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Nov 20 12:02 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Nov 20 12:02 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Nov 20 12:02 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Nov 20 12:02 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Nov 20 12:02 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 12:02 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Nov 20 12:02 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Nov 20 12:02 src
-rw-r--r--@   1 air-jarmak  wheel     537 Nov 20 12:02 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Nov 20 12:02 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Nov 20 12:02 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Nov 20 12:02 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Nov 20 12:02 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Nov 20 12:02 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Nov 20 12:02 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Nov 20 12:02 vitest.config.ts
1d54b8f Initial commit
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
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `bash`

**Explore source structure and docs**

$ ls src src/* packages packages/* .github .github/* .githooks build | head -150; cat electron-builder.yml; sed -n 80,200p package.json; cat .gitignore; ls scripts | head -60; find . -name "*.md" -not -path "./node_modules/*" | head -40

<details>
<summary>322 lines</summary>

```
.github/dependabot.yml

.githooks:
pre-push

.github:
dependabot.yml
workflows

.github/workflows:
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

build:
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

packages:
rename-noreplace

packages/rename-noreplace:
binding.gyp
build
index.js
LICENSE
package.json
rename_noreplace.c

src:
main
preload
renderer
shared
workers

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
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `bash`

**Read runtime check, hooks, notices**

$ cat scripts/check-terminal-runtime.mts | head -60; cat scripts/install-git-hooks.sh; cat .githooks/*; head -40 THIRD_PARTY_NOTICES.md

<details>
<summary>111 lines</summary>

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
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

configured_hooks_path=$(git config --local --get core.hooksPath || true)
if [[ -n "$configured_hooks_path" && "$configured_hooks_path" != ".githooks" ]]; then
  echo "Refusing to replace existing core.hooksPath: $configured_hooks_path" >&2
  echo "Integrate .githooks/pre-push there manually if you want hvir's local validation hook." >&2
  exit 1
fi

git config --local core.hooksPath .githooks
echo "Installed hvir Git hooks from .githooks/."
echo "Pushes now run TypeScript checks and the local-platform Electron smoke test; use git push --no-verify to bypass them."
#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

echo "[pre-push] Running TypeScript checks..."
npm run typecheck

echo "[pre-push] Running hvir's local-platform Electron smoke test..."

if [[ "$(uname -s)" == "Linux" && -z "${DISPLAY:-}" ]]; then
  if ! command -v xvfb-run >/dev/null 2>&1; then
    echo "[pre-push] Linux has no DISPLAY and xvfb-run is unavailable." >&2
    echo "[pre-push] Install Xvfb, provide DISPLAY, or use git push --no-verify." >&2
    exit 1
  fi
  exec xvfb-run -a npm run smoke
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  exec npm run smoke:macos
fi

exec npm run smoke
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `bash`

**Inspect product features**

$ ls src/renderer/src src/renderer/src/* | head -120; ls src/main/harness src/main/project-host src/main/sessions src/main/web-pane src/main/document-review; sed -n 1,60p src/shared/harness-provider.ts; sed -n 1,50p src/shared/keybindings.ts; cat build/native/hvir-command | head -40; grep -n "title" src/renderer/index.html

<details>
<summary>319 lines</summary>

```
src/renderer/src/App.tsx
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/hvir.d.ts
src/renderer/src/main.tsx
src/renderer/src/styles.css
src/renderer/src/theme-model.ts
src/renderer/src/theme.ts
src/renderer/src/themes.css

src/renderer/src:
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

src/renderer/src/context-menu:
viewport-context-menu.ts

src/renderer/src/dashboards:
ElectronWebPaneSurface.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
WebPane.tsx
WebPaneStack.tsx

src/renderer/src/development:
development-performance-fixture.tsx
development-performance-pump.tsx
development-renderer-instrumentation.tsx
performance-measure-budget.ts

src/renderer/src/diagnostics:
DiagnosticReportDialog.tsx
owned-capture-masks.ts

src/renderer/src/document-review:
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
DocumentReviewControls.tsx
DocumentReviewDeliveryPanel.tsx
DocumentReviewInlineSurface.tsx
index.ts
use-document-review-delivery.ts
use-document-review-interaction.ts
use-document-review-workspace.ts

src/renderer/src/git:
commit-detail-client.ts
commit-file-tree.ts
commit-message.ts
git-capability.ts
git-graph-lane-metrics.ts
git-graph-layout.ts
git-rail-model.ts
git-sync-coordinator.ts
git-sync-status.ts
GitBranchControls.tsx
GitChangesView.tsx
GitGraphLanes.tsx
GitGraphView.tsx
GitHistoryView.tsx
GitPanel.tsx
use-git-commit-details.ts
use-git-rail-controller.ts
use-git-workspace.ts
virtual-range.ts

src/renderer/src/harness:
ProviderContextMeter.tsx

src/renderer/src/health:
use-diagnostic-evidence.ts
use-workbench-health.ts
WorkbenchHealthControl.tsx

src/renderer/src/layout:
PaneResizer.tsx
split-layout-policy.ts
workspace-layout-persistence.ts

src/main/document-review:
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

src/main/project-host:
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

src/main/sessions:
sessions-observation-application.ts
sessions-observation-port.ts
sessions-open-resolution.ts
sessions-projection-identities.ts
sessions-projection-values.ts
sessions-telemetry-projection.ts
sessions-usage-observation-port.ts
sessions-usage-projection.ts

src/main/web-pane:
loopback-http-proxy.ts
web-pane-route-registry.ts
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
export const KEYBINDING_ACTIONS = [
  'cycleViewMode',
  'findFile',
  'findInFile',
  'findInTerminal',
  'goToLine',
  'focusTerminal',
  'focusViewer',
  'focusTree',
  'toggleTerminalFocus',
  'nextWorkspace',
  'previousWorkspace',
] as const

export type KeybindingAction = (typeof KEYBINDING_ACTIONS)[number]
export type KeybindingMap = Readonly<Record<KeybindingAction, string>>

export const DEFAULT_KEYBINDINGS: KeybindingMap = {
  cycleViewMode: 'Mod+Shift+M',
  findFile: 'Mod+P',
  findInFile: 'Mod+F',
  // Keep ordinary PTY Ctrl+F available on every platform. Terminal search uses
  // the existing workbench Shift variant instead of borrowing viewer search.
  findInTerminal: 'Mod+Shift+F',
  goToLine: 'Ctrl+G',
  focusTerminal: 'Mod+J',
  focusViewer: 'Mod+1',
  focusTree: 'Mod+0',
  toggleTerminalFocus: 'Mod+Shift+J',
  nextWorkspace: 'Mod+Alt+]',
  previousWorkspace: 'Mod+Alt+[',
}

export type KeybindingContext = 'workbench' | 'terminal' | 'web-pane'

export function keybindingAvailableInContext(
  action: KeybindingAction,
  context: KeybindingContext,
): boolean {
  if (action === 'findFile') return context !== 'terminal'
  if (action === 'findInFile') return context === 'workbench'
  if (action === 'findInTerminal') return context === 'terminal'
  if (action === 'goToLine') return context === 'workbench'
  if (action === 'cycleViewMode') return context !== 'terminal'
  return true
}

export interface KeyboardStroke {
  readonly key: string
  readonly code?: string
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

10:    <title>hvir</title>
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `bash`

**Check CI platforms and install flow**

$ sed -n 1,80p .github/workflows/ci.yml; grep -n "runs-on\|name:" .github/workflows/release.yml | head -30; sed -n 1,40p scripts/native-installer.template.sh; git remote -v

<details>
<summary>138 lines</summary>

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
1:name: Release
29:    name: Prepare ${{ inputs.bump }} release
30:    runs-on: ubuntu-24.04
43:      - name: Require the default branch
52:      - name: Check out release history
59:      - name: Select trusted release source
82:      - name: Set up Node.js
88:      - name: Select release version
146:      - name: Require exact-source coherent CI evidence
155:      - name: Prepare pull request or native release source
178:    name: Build and accept Linux package (${{ matrix.name }})
181:    runs-on: ${{ matrix.os }}
187:          - name: Linux x64
192:          - name: Linux arm64
201:      - name: Check out exact release source
206:      - name: Set up Node.js
212:      - name: Install dependencies
215:      - name: Build native package
218:      - name: Install, update, launch, and remove native package
221:      - name: Bind the accepted package name and digest
240:      - name: Retain the exact accepted package
243:          name: release-linux-${{ matrix.release_arch }}
252:    name: Accept release package (${{ matrix.name }})
259:    runs-on: ${{ matrix.os }}
265:          - name: Ubuntu 24.04 x64
267:            artifact_name: release-linux-x64
270:          - name: Ubuntu 24.04 arm64
272:            artifact_name: release-linux-arm64
279:      - name: Check out exact release source
284:      - name: Set up Node.js
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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>19s</sub>

### `bash`

**Check providers and viewer features**

$ ls src/main/harness/providers src/renderer/src/viewer src/renderer/src/settings | head -60; grep -n "displayName" src/main/harness/bundled-harness-providers.ts src/main/harness/providers/* | head

<details>
<summary>69 lines</summary>

```
src/main/harness/providers:
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts

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

src/renderer/src/viewer:
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
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>36s</sub>

### `create`

**create a new file at /private/var/tmp/ws/90b7a1f1/hvir/README.md.**

/private/var/tmp/ws/90b7a1f1/hvir/README.md

```
Created file /private/var/tmp/ws/90b7a1f1/hvir/README.md with 4889 characters
```


---

<sub>36s</sub>

### `bash`

**Verify ghostty-web link and format README**

$ grep -n "Source:" THIRD_PARTY_NOTICES.md; npx prettier --write README.md && git status --short

<details>
<summary>6 lines</summary>

```
10:Source: <https://github.com/CongBao/skill-steward>
41:Source: <https://github.com/coder/ghostty-web>
76:Source: <https://github.com/mbadolato/iTerm2-Color-Schemes>
113:Source: <https://github.com/ghostty-org/ghostty>
?? README.md
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>41s</sub>

### Copilot

I created `README.md` at the repo root, formatted with the project's Prettier config and left uncommitted.

It covers:
- what hvir is: an Electron desktop workbench for running terminal coding agents alongside a project
- features
- requirements
- getting started (`npm ci`, `npm run dev`)
- common scripts
- packaging
- project layout
- license

The content comes from `package.json`, the build config and the source tree; I did not run the app or any of the documented commands. The feature descriptions are inferred from module and file names, so check them for accuracy.

There are no download or install instructions for released builds, because the repo has no git remote to point to.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
