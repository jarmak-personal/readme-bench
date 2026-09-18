# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `97030a90-27e9-4480-afbd-d7151aaebdc7`  
> - **Started:** 9/17/2026, 9:17:42 PM  
> - **Duration:** 1m 12s  
> - **Exported:** 9/17/2026, 9:18:55 PM  

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

### Copilot

I'll explore the project structure first to understand what it does.

---

<sub>5s</sub>

### `bash`

**List project files**

$ cd /private/var/tmp/ws/28be2765/hvir && ls -la && git --no-pager log --oneline | head -5 && find . -type f -not -path './.git/*' | head -50

<details>
<summary>81 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 21:17 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 21:17 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 21:17 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 21:17 .githooks
drwxr-xr-x@   5 air-jarmak  wheel     160 Sep 17 21:17 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 21:17 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 21:17 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 21:17 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 21:17 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 21:17 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 21:17 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 21:17 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 21:17 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 21:17 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 21:17 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 21:17 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    7275 Sep 17 21:17 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 21:17 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 21:17 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 21:17 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 21:17 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 21:17 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 21:17 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 21:17 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 21:17 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 21:17 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 21:17 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 21:17 vitest.config.ts
b73877b Initial commit
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
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `bash`

**Read package.json and layout**

$ cd /private/var/tmp/ws/28be2765/hvir && cat package.json && ls src src/* packages packages/* .github .github/* scripts | head -120 && cat electron-builder.yml && cat .githooks/pre-push

<details>
<summary>344 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "description": "A lightweight, view-first workbench for agentic development.",
  "author": {
    "name": "hvir contributors",
    "email": "jarmak-personal@users.noreply.github.com"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "homepage": "https://github.com/jarmak-personal/hvir",
  "repository": {
    "type": "git",
    "url": "https://github.com/jarmak-personal/hvir.git"
  },
  "bugs": "https://github.com/jarmak-personal/hvir/issues",
  "desktopName": "hvir",
  "keywords": [
    "agentic-development",
    "electron",
    "terminal",
    "git",
    "ssh"
  ],
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
.github/dependabot.yml

.github:
dependabot.yml
ISSUE_TEMPLATE
workflows

.github/ISSUE_TEMPLATE:
config.yml

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

packages:
rename-noreplace

packages/rename-noreplace:
binding.gyp
build
index.js
LICENSE
package.json
rename_noreplace.c

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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### Copilot

Now let me understand the app's features from the source layout and any existing docs.

---

<sub>15s</sub>

### `bash`

**Inspect source structure and docs**

$ cd /private/var/tmp/ws/28be2765/hvir && ls src/main src/renderer src/renderer/src 2>/dev/null; ls src/shared | head -40; ls build; find . -name "*.md" -not -path './node_modules/*' -not -path './.git/*' | head; cat scripts/check-terminal-runtime.mts | head -60

<details>
<summary>172 lines</summary>

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

src/renderer:
index.html
src

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
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>21s</sub>

### `bash`

**Check harness/agent concepts and CI**

$ cd /private/var/tmp/ws/28be2765/hvir && ls src/main/harness src/renderer/src/harness src/renderer/src/workbench | head -40; sed -n 1,60p src/shared/harness-provider.ts; sed -n 1,40p src/shared/keybindings.ts; grep -n "name:\|on:" .github/workflows/ci.yml | head; ls build/linux build/native

<details>
<summary>141 lines</summary>

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

src/renderer/src/harness:
ProviderContextMeter.tsx

src/renderer/src/workbench:
active-terminal-focus.ts
ConfirmationDialog.tsx
middle-click-close.ts
modal-keyboard-model.ts
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
1:name: CI
3:on:
18:    name: Release version integrity
26:    runs-on: ubuntu-24.04
33:      - name: Check out trusted release validation
43:      - name: Set up Node.js
46:          node-version: 24
49:      - name: Validate version-only release change
60:    name: Verification (Linux)
63:    runs-on: ubuntu-24.04
build/linux:
after-install.sh
after-remove.sh
hvir.apparmor

build/native:
hvir-command
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>26s</sub>

### `bash`

**Check providers, CI deps, native command**

$ cd /private/var/tmp/ws/28be2765/hvir && ls src/main/harness/providers; grep -rn "displayName:" src/main/harness/providers | head; grep -n "apt\|sudo\|Build-Depends\|install" .github/workflows/ci.yml | head -20; head -30 build/native/hvir-command; ls scripts/ghostty-web-update | head

<details>
<summary>53 lines</summary>

```
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
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
candidate-bundle.mts
cli.mts
coordinator.mts
github-client.mts
github-delivery.mts
github-release-source.mts
policy.mts
repository-candidate.mts
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>31s</sub>

### `bash`

**Check remaining providers, CI setup, viewer features**

$ cd /private/var/tmp/ws/28be2765/hvir && grep -n "displayName" src/main/harness/providers/codex.ts src/main/harness/providers/github-copilot.ts | head -4; sed -n 60,110p .github/workflows/ci.yml; ls src/renderer/src/viewer src/renderer/src/document-review src/main/web-pane | head -40

<details>
<summary>86 lines</summary>

```
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
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
src/main/web-pane:
loopback-http-proxy.ts
web-pane-route-registry.ts

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
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>34s</sub>

### Copilot

I have enough context. Writing the README now.

---

<sub>1m 2s</sub>

### `create`

**create a new file at /private/var/tmp/ws/28be2765/hvir/README.md.**

/private/var/tmp/ws/28be2765/hvir/README.md

```
Created file /private/var/tmp/ws/28be2765/hvir/README.md with 6163 characters
```


---

<sub>1m 6s</sub>

### `bash`

**Format README with Prettier**

$ cd /private/var/tmp/ws/28be2765/hvir && npx prettier --check README.md || (npx prettier --write README.md && echo formatted)

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 6 completed with exit code 0>
```


---

<sub>1m 12s</sub>

### Copilot

Created `README.md` at the repo root. It covers:

- **Overview** – what hvir is (Electron view-first workbench for agentic development)
- **Features** – harness profiles for Claude Code/Codex/Copilot/Gemini/Cursor/Pi, rich viewer (Markdown, Mermaid, CSV, diffs, HTML sandbox), document review, Git workspace, SSH remote projects, web pane, ghostty-web terminal, multiple workspaces
- **Default keybindings** table (from `src/shared/keybindings.ts`)
- **Installation** – macOS `.pkg` / Linux `.deb` releases and the `hvir` CLI launcher
- **Development** – prerequisites (Node ≥24, native toolchain), setup, common scripts, project layout, architecture checks
- **Contributing** and **License** (MIT, third-party notices)

Passes `prettier --check`.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
