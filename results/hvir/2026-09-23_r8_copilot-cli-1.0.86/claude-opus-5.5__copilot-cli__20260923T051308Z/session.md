# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `26677931-9c20-425a-bb7b-1fe839577e19`  
> - **Started:** 9/23/2026, 1:13:23 AM  
> - **Duration:** 48s  
> - **Exported:** 9/23/2026, 1:14:11 AM  

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

**Explore repo**

$ cd /private/var/tmp/ws/103e73f2/hvir && git --no-pager log --oneline | head -5; ls -la; git ls-files | head -100

<details>
<summary>131 lines</summary>

```
a3e288e Initial commit
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 23 01:13 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:13 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:13 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:13 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:13 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 23 01:13 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 23 01:13 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 23 01:13 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:13 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 23 01:13 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 23 01:13 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 23 01:13 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 23 01:13 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 23 01:13 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 23 01:13 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 23 01:13 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 23 01:13 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:13 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 23 01:13 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 23 01:13 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 23 01:13 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 23 01:13 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 23 01:13 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 23 01:13 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 23 01:13 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 23 01:13 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 23 01:13 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 23 01:13 vitest.config.ts
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
scripts/install-git-hooks.sh
scripts/installed-harness-dialog-probe.mts
scripts/installed-startup-probe.mts
scripts/native-installer.template.sh
scripts/phase8-gauntlet.sh
scripts/prepare-release-linux-package.mts
scripts/prepare-release-pr.mjs
scripts/project-management/audit-canonical-project.ts
scripts/project-management/canonical-project-config.ts
scripts/project-management/canonical-project-fields.ts
scripts/project-management/canonical-project-item.ts
scripts/project-management/canonical-project.ts
scripts/project-management/contributor-status-cli.ts
scripts/project-management/contributor-status.ts
scripts/project-management/contributor-token-migration.ts
scripts/project-management/github-client.ts
scripts/project-management/github-contributor-acceptance.ts
scripts/project-management/github-delivery-adapters.ts
scripts/project-management/github-issues.ts
scripts/project-management/github-kind-automation.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### `bash`

**Read key files**

$ cd /private/var/tmp/ws/103e73f2/hvir && cat package.json electron-builder.yml LICENSE .gitignore; git ls-files src | sed 's|/[^/]*$||' | sort | uniq -c | head -60; ls docs 2>/dev/null; cat .githooks/pre-push; head -80 .github/workflows/ci.yml

<details>
<summary>366 lines</summary>

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
  21 src/main
  10 src/main/diagnostics
  11 src/main/document-review
   4 src/main/filename-search
  14 src/main/git
  29 src/main/harness
   7 src/main/harness/providers
   2 src/main/health
   7 src/main/ipc
  14 src/main/ipc/features
  25 src/main/project-file-operations
   2 src/main/project-folder-picker
  21 src/main/project-host
   6 src/main/pty
   8 src/main/sessions
  97 src/main/smoke
   7 src/main/terminal
   1 src/main/viewer
   2 src/main/web-pane
   6 src/main/window
   3 src/preload
   1 src/renderer
   8 src/renderer/src
   1 src/renderer/src/context-menu
   8 src/renderer/src/dashboards
   4 src/renderer/src/development
   2 src/renderer/src/diagnostics
  23 src/renderer/src/document-review
  19 src/renderer/src/git
   1 src/renderer/src/harness
   3 src/renderer/src/health
   3 src/renderer/src/layout
   3 src/renderer/src/path-copy
   1 src/renderer/src/scrollbars
  14 src/renderer/src/sessions
  29 src/renderer/src/settings
   5 src/renderer/src/settings/sections
  38 src/renderer/src/styles
  69 src/renderer/src/terminal
  27 src/renderer/src/tree
  59 src/renderer/src/viewer
  15 src/renderer/src/workbench
  16 src/renderer/src/workspaces
  36 src/shared
  11 src/shared/ipc
   2 src/workers
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### `bash`

**Understand product**

$ cd /private/var/tmp/ws/103e73f2/hvir && git ls-files src/main/harness/providers src/main/*.ts src/renderer/src/*.tsx src/renderer/src/workbench src/main/project-host | head -60; cat build/native/hvir-command | head -40; head -40 scripts/native-installer.template.sh; grep -n "adr\|docs/" scripts/check-adrs.mjs | head; grep -rn "harness" src/shared/*.ts | head -20; cat scripts/check-terminal-runtime.mts | head -40

<details>
<summary>195 lines</summary>

```
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/harness/providers/claude-code.ts
src/main/harness/providers/codex.ts
src/main/harness/providers/cursor.ts
src/main/harness/providers/gemini.ts
src/main/harness/providers/github-copilot.ts
src/main/harness/providers/pi.ts
src/main/harness/providers/shell.ts
src/main/html-preview-protocol.ts
src/main/index.ts
src/main/ipc.ts
src/main/navigation-policy.ts
src/main/project-coordinator.ts
src/main/project-host/electron-project-reveal.ts
src/main/project-host/electron-project-trash.ts
src/main/project-host/index.ts
src/main/project-host/local-host.ts
src/main/project-host/project-host-catalog.ts
src/main/project-host/project-host.ts
src/main/project-host/renderer-ssh-prompter.ts
src/main/project-host/ssh-abort.ts
src/main/project-host/ssh-auth.ts
src/main/project-host/ssh-client-lifecycle.ts
src/main/project-host/ssh-config.ts
src/main/project-host/ssh-exclusive-create.ts
src/main/project-host/ssh-file-access.ts
src/main/project-host/ssh-host-options.ts
src/main/project-host/ssh-host-trust.ts
src/main/project-host/ssh-host.ts
src/main/project-host/ssh-identity-source.ts
src/main/project-host/ssh-project-file-transfer.ts
src/main/project-host/ssh-text-prefix.ts
src/main/project-host/ssh-transport-pool.ts
src/main/project-host/ssh-watch-service.ts
src/main/project-registry.ts
src/main/project-watch.ts
src/main/renderer-event-delivery.ts
src/main/renderer-event-publisher.ts
src/main/renderer-presentation-resources.ts
src/main/renderer-resource-scopes.ts
src/main/workbench-runtime.ts
src/main/worker-host.ts
src/main/workspace-activity.ts
src/main/workspace-cleanup.ts
src/main/workspace-coordinator.ts
src/main/workspace-removal-coordinator.ts
src/renderer/src/App.tsx
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/main.tsx
src/renderer/src/workbench/ConfirmationDialog.tsx
src/renderer/src/workbench/TerminalLayoutControls.tsx
src/renderer/src/workbench/active-terminal-focus.ts
src/renderer/src/workbench/middle-click-close.ts
src/renderer/src/workbench/modal-keyboard-model.ts
src/renderer/src/workbench/use-modal-keyboard.ts
src/renderer/src/workbench/use-renderer-ready.ts
src/renderer/src/workbench/use-terminal-path-activation.ts
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
6:import { validateAdrLifecycles } from './adr-lifecycle.mts'
9:const adrDirectory = join(root, 'docs', 'adr')
20:const directoryEntries = readdirSync(adrDirectory).filter((name) =>
21:  statSync(join(adrDirectory, name)).isFile(),
31:  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
38:  const path = join(adrDirectory, name)
48:    errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
55:      errors.push(`docs/adr/${name}: expected exactly one ${section}`)
59:      errors.push(`docs/adr/${name}: required decision sections are out of order`)
65:    errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
src/shared/harness-profile.ts:1:import type { HarnessProviderId } from './harness-provider'
src/shared/harness-profile.ts:8:declare const harnessProfileIdBrand: unique symbol
src/shared/harness-profile.ts:11:  readonly [harnessProfileIdBrand]: 'HarnessProfileId'
src/shared/harness-profile.ts:88:/** Exhaustive provider-owned ways hvir may start a harness conversation. */
src/shared/harness-profile.ts:109:    throw new Error(`Invalid harness profile id '${value}'`)
src/shared/harness-provider.ts:1:/** Serializable harness-provider vocabulary shared across the main/renderer boundary. */
src/shared/harness-provider.ts:5:declare const harnessProviderIdBrand: unique symbol
src/shared/harness-provider.ts:9:  readonly [harnessProviderIdBrand]: 'HarnessProviderId'
src/shared/harness-provider.ts:78:  readonly profileId: import('./harness-profile').HarnessProfileId
src/shared/harness-provider.ts:95:    throw new Error(`Invalid harness provider id '${value}'`)
src/shared/harness-telemetry.ts:1:import type { HarnessProviderId } from './harness-provider'
src/shared/harness-telemetry.ts:2:import type { HarnessUsageValue } from './harness-usage'
src/shared/harness-telemetry.ts:68:/** Versioned, provenance-carrying foundation for the future harness viewer. */
src/shared/index.ts:13:export * from './harness-telemetry'
src/shared/index.ts:14:export * from './harness-usage'
src/shared/index.ts:15:export * from './harness-provider'
src/shared/index.ts:18:export * from './harness-profile'
src/shared/ipc.ts:19:import { harnessIpc } from './ipc/harness'
src/shared/ipc.ts:75:} from './ipc/harness'
src/shared/ipc.ts:113:  harnessIpc,
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>16s</sub>

### `bash`

**More details**

$ cd /private/var/tmp/ws/103e73f2/hvir && ls docs 2>&1; grep -rhoE "github\.com/[A-Za-z0-9_-]+/hvir[^ \"')]*" scripts .github src 2>/dev/null | sort | uniq -c | head; grep -n "usage\|--uninstall\|--purge\|curl" scripts/native-installer.template.sh | head -30; grep -n "harness\|label\|displayName" src/main/harness/providers/claude-code.ts | head -10; head -30 src/main/index.ts

<details>
<summary>51 lines</summary>

```
ls: docs: No such file or directory
   1 github.com/jarmak-personal/hvir
   1 github.com/jarmak-personal/hvir.git
54:usage() {
60:  install.sh --uninstall
61:  install.sh --uninstall --purge
64:--purge additionally removes the current user's documented hvir settings and cache.
73:    --uninstall) operation='uninstall' ;;
75:      usage
79:      usage >&2
85:    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
86:      usage >&2
93:    usage >&2
144:    require_absolute_tool /usr/bin/curl
235:    /usr/bin/curl \
6:import type { HarnessProvider, HarnessLaunchSpec } from '../harness-provider-contract'
14:import { versionProbe } from '../harness-provider-probes'
18:} from '../harness-composer-contracts'
31:    displayName: 'Claude Code',
42:      displayName: 'Claude Code',
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>22s</sub>

### `bash`

**Installer and features**

$ cd /private/var/tmp/ws/103e73f2/hvir && sed -n 54,66p scripts/native-installer.template.sh; grep -rn "install.sh\|releases/" scripts/render-native-installer.mjs scripts/assemble-native-release.mjs .github/workflows/release.yml 2>/dev/null | head -10; grep -rln "worktree" src/main | head -5; ls src/renderer/src/dashboards src/renderer/src/document-review | head -30

<details>
<summary>51 lines</summary>

```
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
scripts/render-native-installer.mjs:32:    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
scripts/assemble-native-release.mjs:54:  const installerPath = resolve(assetDirectory, 'install.sh')
scripts/assemble-native-release.mjs:149:    'install.sh',
.github/workflows/release.yml:562:            install.sh \
.github/workflows/release.yml:612:          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
src/main/smoke/sessions-projection.ts
src/main/smoke/terminal-move.ts
src/main/smoke/workspace-close.ts
src/main/smoke/sessions-visual.ts
src/main/smoke/workspace-remote.ts
src/renderer/src/dashboards:
ElectronWebPaneSurface.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
WebPane.tsx
WebPaneStack.tsx

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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>40s</sub>

### `create`

**create a new file at /private/var/tmp/ws/103e73f2/hvir/README.md.**

/private/var/tmp/ws/103e73f2/hvir/README.md

```
Created file /private/var/tmp/ws/103e73f2/hvir/README.md with 4907 characters
```


---

<sub>43s</sub>

### `bash`

**Format README**

$ cd /private/var/tmp/ws/103e73f2/hvir && npx prettier --write README.md && npx prettier --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 5 completed with exit code 0>
```


---

<sub>48s</sub>

### Copilot

I've added `README.md` at the repository root. It covers:

- **What hvir is:** an Electron desktop workbench for running AI coding agents (Claude Code, Codex, Cursor, Gemini, GitHub Copilot, Pi, or a plain shell) in terminals next to your project, on macOS and Linux.
- **Features:** local and SSH projects, file tree and viewer, Git tools, document review, web panes and settings.
- **Installation:** the release `install.sh` and its uninstall options, plus the `hvir` command-line launcher.
- **Development:** requirements (Node.js 24+), setup, a table of the npm scripts, and packaging commands.
- **Also:** an overview of the source folders, and links to the license and third-party notices.

It passes the Prettier check. I wrote the feature list from the source folder and file names, not from running the app, so it's worth a quick read for accuracy.

One thing to know: the README lists `npm run verify`, but that command will probably fail right now. It includes an ADR check that reads `docs/adr/`, and that folder isn't in the repository.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
