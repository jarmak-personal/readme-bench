# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6213d97c-bf30-4337-9e4f-2f39ad3f1480`  
> - **Started:** 9/17/2026, 11:56:44 PM  
> - **Duration:** 1m 37s  
> - **Exported:** 9/17/2026, 11:58:22 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>6s</sub>

### Copilot

I’ll inspect the project structure and its build/runtime entry points, then write a README grounded in the repository’s actual usage.

---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir.**

/private/var/tmp/ws/39e7ce18/hvir

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

<sub>7s</sub>

### `glob`

**/private/var/tmp/ws/39e7ce18/hvir**

"**/{package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,Dockerfile,compose.yml,docker-compose.yml,README*,LICENSE*,.env.example}"

```
/private/var/tmp/ws/39e7ce18/hvir/package.json
/private/var/tmp/ws/39e7ce18/hvir/LICENSE
/private/var/tmp/ws/39e7ce18/hvir/packages/rename-noreplace/package.json
/private/var/tmp/ws/39e7ce18/hvir/packages/rename-noreplace/LICENSE
/private/var/tmp/ws/39e7ce18/hvir/scripts/project-management/package.json
```


---

<sub>7s</sub>

### `bash`

**Inspect repository status and tracked files**

$ git --no-pager status --short && printf '\n--- tracked root files ---\n' && git --no-pager ls-files | sed -n '1,160p'

<details>
<summary>162 lines</summary>

```
--- tracked root files ---
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
scripts/project-management/github-pagination.ts
scripts/project-management/github-pull-requests.ts
scripts/project-management/github-session-tokens.ts
scripts/project-management/github-token-migration.ts
scripts/project-management/issue-context-cli.ts
scripts/project-management/issue-context.ts
scripts/project-management/issue-delivery.ts
scripts/project-management/issue-planning.ts
scripts/project-management/issue-start-cli.ts
scripts/project-management/issue-start.ts
scripts/project-management/kind-cli.ts
scripts/project-management/kind-policy.ts
scripts/project-management/kind-reconciler.ts
scripts/project-management/legacy-token-evidence.ts
scripts/project-management/migrate-project-tokens.ts
scripts/project-management/native-issue-worktrees.ts
scripts/project-management/package.json
scripts/project-management/planning-cli.ts
scripts/project-management/planning-fields.ts
scripts/project-management/planning-record.ts
scripts/project-management/project-config.ts
scripts/project-management/project-token-fields.ts
scripts/project-management/pull-request-cli.ts
scripts/project-management/pull-request-planning.ts
scripts/project-management/pull-request-relationships.ts
scripts/project-management/read-contributor-status.ts
scripts/project-management/read-issue-context.ts
scripts/project-management/read-planning-record.ts
scripts/project-management/session-token-allocation.ts
scripts/project-management/session-token-capture.ts
scripts/project-management/session-token-receipts.ts
scripts/project-management/start-issue.ts
scripts/project-management/sync-kind.ts
scripts/project-management/sync-pull-request-planning.ts
scripts/project-management/token-migration-plan.ts
scripts/real-host-ssh-contract.mts
scripts/real-host-ssh.vite.config.mts
scripts/record-macos-ssh-identity.sh
scripts/release-changelog.d.mts
scripts/release-changelog.mjs
scripts/release-github-evidence.mts
scripts/render-native-installer.d.mts
scripts/render-native-installer.mjs
scripts/require-release-ci-evidence.mts
scripts/run-linux-package-smoke.sh
scripts/run-macos-package-smoke.sh
scripts/run-macos-ssh-acceptance.sh
scripts/run-real-host-ssh-acceptance.mts
scripts/run-smoke-interruption.mts
scripts/run-smoke-scenarios.mts
scripts/run-smoke.sh
scripts/smoke-failure-artifact.mts
scripts/smoke-import-boundary.mjs
scripts/validate-release-pr.mts
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/diagnostics/diagnostic-event.ts
src/main/diagnostics/diagnostic-evidence.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>13s</sub>

### Copilot

The repository is an Electron/TypeScript application with substantial release and integration tooling. I’m narrowing the README to the supported platforms, core workflows, and canonical npm commands rather than documenting internal scripts indiscriminately.

---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/package.json.**

/private/var/tmp/ws/39e7ce18/hvir/package.json

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/electron-builder.yml.**

/private/var/tmp/ws/39e7ce18/hvir/electron-builder.yml

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src.**

/private/var/tmp/ws/39e7ce18/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/LICENSE.**

/private/var/tmp/ws/39e7ce18/hvir/LICENSE (lines 1-80)

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/39e7ce18/hvir/.github/workflows/ci.yml (lines 1-240)

<details>
<summary>204 lines</summary>

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

      - name: Require exact candidate ancestry
        env:
          BASE_SHA: ${{ github.event.pull_request.base.sha }}
          HEAD_SHA: ${{ github.event.pull_request.head.sha }}
        run: |
          if [[ ! "$BASE_SHA" =~ ^[0-9a-f]{40}$ || ! "$HEAD_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::Pull request base and head must be full commit SHAs"
            exit 1
          fi
          if [ "$(git rev-parse HEAD)" != "$HEAD_SHA" ]; then
            echo "::error::Merge acceptance did not check out the exact pull request head"
            exit 1
          fi
          if ! git merge-base --is-ancestor "$BASE_SHA" "$HEAD_SHA"; then
            echo "::error::The tested pull request base is not an ancestor of its head"
            exit 1
          fi
```

</details>


---

<sub>21s</sub>

### `bash`

**Inspect repository identity and recent history**

$ git remote -v | sed -n '1,4p' && printf '\n--- latest commits ---\n' && git --no-pager log -5 --pretty=format:'%h %s'

```
--- latest commits ---
7d4de09 Initial commit
<shellId: 1 completed with exit code 0>
```


---

<sub>15s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/package.json",
  "startLine": 200,
  "endLine": 400
}
```

</details>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/package.json`. Lines 200 to 128 (128 lines total): 
```
```
````


### `file_search`

****/electron.vite.config.ts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron.vite.config.ts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/39e7ce18/hvir/electron.vite.config.ts
```


### `file_search`

****/vitest.config.ts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/vitest.config.ts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/39e7ce18/hvir/vitest.config.ts
```


### `file_search`

****/stryker.config.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/stryker.config.json"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/39e7ce18/hvir/stryker.config.json
```


### `file_search`

****/electron-builder*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron-builder*.yml"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/39e7ce18/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/39e7ce18/hvir/electron-builder.yml
```


### `file_search`

****/eslint.config.mjs**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/eslint.config.mjs"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/39e7ce18/hvir/eslint.config.mjs
```


### `file_search`

****/tsconfig.*.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/tsconfig.*.json"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/39e7ce18/hvir/tsconfig.node.json
  /private/var/tmp/ws/39e7ce18/hvir/tsconfig.base.json
  /private/var/tmp/ws/39e7ce18/hvir/tsconfig.web.json
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.yml' does not exist
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.ssh-acceptance.yml' does not exist
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/electron.vite.config.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>140 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/electron.vite.config.ts`. Lines 1 to 143 (143 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/vitest.config.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>15 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/vitest.config.ts`. Lines 1 to 14 (14 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/stryker.config.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>24 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/stryker.config.json`. Lines 1 to 22 (22 lines total): 
```
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "testRunner": "vitest",
  "mutate": ["src/main/git/git-parsers.ts"],
  "ignorePatterns": [".agents/**"],
  "reporters": ["clear-text"],
  "clearTextReporter": {
    "allowColor": false,
    "logTests": false,
    "reportTests": false,
    "reportMutants": true,
    "reportScoreTable": true,
    "skipFull": false
  },
  "concurrency": 4,
  "tempDirName": "out/stryker-tmp",
  "vitest": {
    "configFile": "vitest.config.ts",
    "related": true
  }
}

```
````

</details>


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.yml' does not exist
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.ssh-acceptance.yml' does not exist
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/eslint.config.mjs",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>188 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/eslint.config.mjs`. Lines 1 to 200 (at least 200 lines total): 
```
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'
import { smokeImportBoundary } from './scripts/smoke-import-boundary.mjs'

// --- Seam enforcement (AGENTS.md "Respect the seams") ---------------------
//
// These import bans are how the architecture is enforced mechanically rather
// than by convention. Native/host primitives may only be touched inside the
// `LocalHost` module; `ipcRenderer` only inside the preload bridge; and
// `.spawnPty()` may only be *called* by the PTY supervisor.

/** node builtins + native modules — confined to the LocalHost implementation. */
const HOST_PRIMITIVE_BANS = [
  'fs',
  'node:fs',
  'fs/promises',
  'node:fs/promises',
  'child_process',
  'node:child_process',
  'chokidar',
  'node-pty',
].map((name) => ({
  name,
  message:
    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
    'src/main/project-host/local-host.ts. Go through the ProjectHost seam (ADR-010).',
}))

const DYNAMIC_HOST_IMPORT_BANS = HOST_PRIMITIVE_BANS.map(({ name, message }) => ({
  selector: `ImportExpression[source.value='${name}']`,
  message,
}))

/** `ipcRenderer` — confined to the preload bridge. */
const IPC_RENDERER_BAN = {
  name: 'electron',
  importNames: ['ipcRenderer'],
  message:
    'ipcRenderer may only be used in src/preload. The renderer talks to main ' +
    'through the typed bridge (window.hvir), never ipcRenderer directly.',
}

const SPAWN_PTY_BAN = {
  selector:
    "MemberExpression[property.name='spawnPty'], " +
    "MemberExpression[computed=true][property.value='spawnPty']",
  message:
    'Every PTY must be spawned through the PTY supervisor (ADR-006). Do not access ' +
    'host.spawnPty outside src/main/pty/pty-supervisor.ts.',
}

// Both erased and runtime contract dependencies point inward. The two barrels
// are compatibility/composition surfaces, never domain dependencies.
const SHARED_CONTRACT_IMPORT_BAN =
  '(^|/)(ipc|index|shared)(\\.[cm]?[jt]sx?)?$|(^|/)(main|preload|renderer|workers)(/|$)|^\\.\\.?$|^electron$'
const SHARED_CONTRACT_MESSAGE =
  'Shared capability contracts import named shared leaves, not the IPC aggregate, barrels, or process implementations.'
const SHARED_CONTRACT_EXPRESSION_SELECTOR = SHARED_CONTRACT_IMPORT_BAN.replaceAll(
  '/',
  '\\/',
)

const HARNESS_FACADE_IMPORT_BAN = '(^|/)(?<!shared/)harness-provider(\\.[cm]?[jt]sx?)?$'
const HARNESS_ASSEMBLY_IMPORT_BAN =
  '(^|/)(?<!shared/)(bundled-harness-providers|harness-provider)(\\.[cm]?[jt]sx?)?$'
const HARNESS_IMPLEMENTATION_IMPORT_BAN =
  HARNESS_ASSEMBLY_IMPORT_BAN + '|(^|/)providers(/|$)|(^|/)(claude|codex)-'
const HARNESS_DIRECTION_MESSAGE =
  'Harness contracts and neutral policy depend inward, never on bundled assembly, concrete providers, or their observation implementations.'

const VIEWER_PRESENTATION_IMPORT_BAN =
  '(^|/)[A-Z][^/]*$|(^|/)(highlight-worker|highlight-request|source-highlighting|source-blame-gutter|use-[^/]+)(\\.[cm]?[jt]sx?)?$|^react(/|$)|^electron$'

function dependencyDirectionRules(
  pattern,
  message = HARNESS_DIRECTION_MESSAGE,
  caseSensitive = false,
) {
  const selector = (
    caseSensitive ? '(^|/)main/harness(/|$)|' + pattern : pattern
  ).replaceAll('/', '\\/')
  return {
    'no-restricted-imports': [
      'error',
      {
        paths: [...HOST_PRIMITIVE_BANS, IPC_RENDERER_BAN],
        patterns: [
          { regex: pattern, message, caseSensitive },
          // Viewer component names are case-sensitive. Preserve the inherited
          // renderer harness ban with its original case-insensitive semantics.
          ...(caseSensitive
            ? [{ regex: '(^|/)main/harness(/|$)', message: HARNESS_DIRECTION_MESSAGE }]
            : []),
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      SPAWN_PTY_BAN,
      ...DYNAMIC_HOST_IMPORT_BANS,
      {
        selector: `ImportExpression[source.value=/${selector}/], TSImportType[source.value=/${selector}/], CallExpression[callee.name='require'] > Literal.arguments[value=/${selector}/]`,
        message,
      },
    ],
  }
}

export default tseslint.config(
  { ignores: ['out/**', 'dist/**', 'node_modules/**', 'coverage/**'] },

  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx,mts,cts}'],
    plugins: { 'smoke-ownership': { rules: { inward: smokeImportBoundary } } },
    rules: { 'smoke-ownership/inward': 'error' },
  },

  // Type-aware linting for all TypeScript source.
  {
    files: ['**/*.{ts,tsx,mts}'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-restricted-imports': [
        'error',
        { paths: [...HOST_PRIMITIVE_BANS, IPC_RENDERER_BAN] },
      ],
      'no-restricted-syntax': ['error', SPAWN_PTY_BAN, ...DYNAMIC_HOST_IMPORT_BANS],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  {
    files: ['src/shared/**/*.{ts,tsx,mts,cts}'],
    ignores: ['src/shared/ipc.ts', 'src/shared/index.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [...HOST_PRIMITIVE_BANS],
          patterns: [
            { regex: SHARED_CONTRACT_IMPORT_BAN, message: SHARED_CONTRACT_MESSAGE },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        SPAWN_PTY_BAN,
        ...DYNAMIC_HOST_IMPORT_BANS,
        {
          selector: `ImportExpression[source.value=/${SHARED_CONTRACT_EXPRESSION_SELECTOR}/], TSImportType[source.value=/${SHARED_CONTRACT_EXPRESSION_SELECTOR}/], CallExpression[callee.name='require'] > Literal.arguments[value=/${SHARED_CONTRACT_EXPRESSION... (truncated)
          message: SHARED_CONTRACT_MESSAGE,
        },
      ],
    },
  },

  // The facade is for application compatibility, not an internal contract owner.
  {
    files: ['src/main/harness/**/*.{ts,tsx,mts,cts}'],
    ignores: ['src/main/harness/harness-provider.ts'],
    rules: dependencyDirectionRules(HARNESS_FACADE_IMPORT_BAN),
  },
  {
    files: ['src/main/harness/providers/**/*.{ts,tsx,mts,cts}'],
    rules: dependencyDirectionRules(HARNESS_ASSEMBLY_IMPORT_BAN),
  },
  {
    files: [
      'src/main/harness/harness-provider-contract.ts',
      'src/main/harness/harness-provider-registry.ts',
      'src/main/harness/harness-provider-capabilities.ts',
      'src/main/harness/harness-provider-probes.ts',
      'src/main/harness/harness-launch-selection.ts',
      'src/main/harness/harness-composer-contracts.ts',
      'src/main/harness/harness-text-validation.ts',
      'src/main/harness/harness-usage*.ts',
      'src/main/harness/harness-telemetry*.ts',
      'src/main/harness/bounded-line-reader.ts',
    ],
    rules: dependencyDirectionRules(HARNESS_IMPLEMENTATION_IMPORT_BAN),
  },

  // PTY internals depend on leaf contracts, never their facade or sibling owners.
  {
    files: ['src/main/pty/**/*.{ts,tsx,mts,cts}'],
    ignores: ['src/main/pty/pty-supervisor.ts'],
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/tsconfig.node.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>23 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/tsconfig.node.json`. Lines 1 to 21 (21 lines total): 
```
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "composite": false,
    "lib": ["ES2023"],
    "types": ["node"]
  },
  "include": [
    "src/main/**/*.ts",
    "src/main/**/*.mts",
    "src/preload/**/*.ts",
    "src/workers/**/*.ts",
    "src/shared/**/*.ts",
    "scripts/**/*.mts",
    "scripts/project-management/**/*.ts",
    "test/**/*.ts",
    "electron.vite.config.ts",
    "vitest.config.ts"
  ]
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/39e7ce18/hvir/tsconfig.web.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>19 lines</summary>

````
File: `/private/var/tmp/ws/39e7ce18/hvir/tsconfig.web.json`. Lines 1 to 17 (17 lines total): 
```
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "composite": false,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "types": ["vite/client"]
  },
  "include": [
    "src/renderer/**/*.ts",
    "src/renderer/**/*.tsx",
    "src/renderer/**/*.mts",
    "src/shared/**/*.ts",
    "test/**/*.test.tsx"
  ]
}

```
````

</details>


### `file_search`

****/scripts/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/39e7ce18/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/39e7ce18/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/39e7ce18/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/39e7ce18/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/39e7ce18/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/39e7ce18/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/39e7ce18/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/39e7ce18/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/39e7ce18/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


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


### Copilot

\<final_answer>
/private/var/tmp/ws/39e7ce18/hvir/package.json:1-128
/private/var/tmp/ws/39e7ce18/hvir/electron.vite.config.ts:1-143
/private/var/tmp/ws/39e7ce18/hvir/vitest.config.ts:1-14
/private/var/tmp/ws/39e7ce18/hvir/stryker.config.json:1-22
/private/var/tmp/ws/39e7ce18/hvir/eslint.config.mjs:1-200
/private/var/tmp/ws/39e7ce18/hvir/tsconfig.node.json:1-21
/private/var/tmp/ws/39e7ce18/hvir/tsconfig.web.json:1-17
/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.yml:1-200
/private/var/tmp/ws/39e7ce18/hvir/build/electron-builder.ssh-acceptance.yml:1-200
/private/var/tmp/ws/39e7ce18/hvir/scripts/check-terminal-runtime.mts:1-200
/private/var/tmp/ws/39e7ce18/hvir/scripts/run-smoke-scenarios.mts:1-200
/private/var/tmp/ws/39e7ce18/hvir/scripts/run-macos-ssh-acceptance.sh:1-200
/private/var/tmp/ws/39e7ce18/hvir/scripts/record-macos-ssh-identity.sh:1-200
/private/var/tmp/ws/39e7ce18/hvir/scripts/architecture-hotspots.mjs:1-200
\</final_answer>


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main.**

/private/var/tmp/ws/39e7ce18/hvir/src/main

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

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer

```
index.html
src
```


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/shared.**

/private/var/tmp/ws/39e7ce18/hvir/src/shared

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

<sub>25s</sub>

### `glob`

**/private/var/tmp/ws/39e7ce18/hvir/src/renderer**

"**/*.{tsx,ts,css,html}" in src/renderer

<details>
<summary>352 matches</summary>

```
[glob: 348 path(s) under /private/var/tmp/ws/39e7ce18/hvir/src/renderer; grouped by directory]

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/ (347 path(s))
  App.tsx
  ErrorBoundary.tsx
  context-menu/viewport-context-menu.ts
  dashboards/ElectronWebPaneSurface.tsx
  dashboards/WebPane.tsx
  dashboards/WebPaneStack.tsx
  dashboards/use-web-pane-workspace.ts
  dashboards/web-pane-diagnostics.ts
  dashboards/web-pane-surface.ts
  dashboards/web-pane-url.ts
  dashboards/web-pane-workspace-policy.ts
  development/development-performance-fixture.tsx
  development/development-performance-pump.tsx
  development/development-renderer-instrumentation.tsx
  development/performance-measure-budget.ts
  diagnostics/DiagnosticReportDialog.tsx
  diagnostics/owned-capture-masks.ts
  document-review/DocumentReviewControls.tsx
  document-review/DocumentReviewDeliveryPanel.tsx
  document-review/DocumentReviewInlineSurface.tsx
  document-review/document-review-anchor.ts
  document-review/document-review-batches.ts
  document-review/document-review-capture.ts
  document-review/document-review-delivery-client.ts
  document-review/document-review-delivery-feedback.ts
  document-review/document-review-eligibility.ts
  document-review/document-review-inline.ts
  document-review/document-review-lifecycle.ts
  document-review/document-review-model.ts
  document-review/document-review-rendered.ts
  document-review/document-review-selectors.ts
  document-review/document-review-source.ts
  document-review/document-review-types.ts
  document-review/document-review-validation.ts
  document-review/document-review-workspace-controller.ts
  document-review/document-review-workspace.ts
  document-review/index.ts
  document-review/use-document-review-delivery.ts
  document-review/use-document-review-interaction.ts
  document-review/use-document-review-workspace.ts
  git/GitBranchControls.tsx
  git/GitChangesView.tsx
  git/GitGraphLanes.tsx
  git/GitGraphView.tsx
  git/GitHistoryView.tsx
  git/GitPanel.tsx
  git/commit-detail-client.ts
  git/commit-file-tree.ts
  git/commit-message.ts
  git/git-capability.ts
  git/git-graph-lane-metrics.ts
  git/git-graph-layout.ts
  git/git-rail-model.ts
  git/git-sync-coordinator.ts
  git/git-sync-status.ts
  git/use-git-commit-details.ts
  git/use-git-rail-controller.ts
  git/use-git-workspace.ts
  git/virtual-range.ts
  harness/ProviderContextMeter.tsx
  health/WorkbenchHealthControl.tsx
  health/use-diagnostic-evidence.ts
  health/use-workbench-health.ts
  hvir.d.ts
  layout/PaneResizer.tsx
  layout/split-layout-policy.ts
  layout/workspace-layout-persistence.ts
  main.tsx
  path-copy/PathCopyMenu.tsx
  path-copy/path-copy.ts
  path-copy/use-path-copy-menu.ts
  scrollbars/scrollbar-presentation.ts
  sessions/SessionsApplicationDestination.tsx
  sessions/SessionsCollectionToolbar.tsx
  sessions/SessionsOverview.tsx
  sessions/SessionsOverviewCard.tsx
  sessions/SessionsOverviewNotice.tsx
  sessions/SessionsTerminalDetail.tsx
  sessions/sessions-overview-model.ts
  sessions/sessions-projection-coordinator.ts
  sessions/sessions-renderer-observation.ts
  sessions/sessions-terminal-detail-controller.ts
  sessions/sessions-terminal-overlay.ts
  sessions/sessions-terminal-surface.ts
  sessions/use-sessions-foreground.ts
  sessions/use-sessions-terminal-detail.ts
  settings/ComposerSubmitConsentDialog.tsx
  settings/HarnessProfileAdvancedFields.tsx
  settings/HarnessProfileCommandFields.tsx
  settings/HarnessProfileDialogs.tsx
  settings/HarnessProfileEditor.tsx
  settings/HarnessProfileOverlays.tsx
  settings/HarnessProfilesSettings.tsx
  settings/SettingsActiveSection.tsx
  settings/SettingsDialog.tsx
  settings/SettingsSection.tsx
  settings/SettingsSectionNavigation.tsx
  settings/TerminalThemeGallery.tsx
  settings/harness-argument-editor.ts
  settings/harness-profile-draft.ts
  settings/harness-profile-editor-policy.ts
  settings/harness-profile-request-policy.ts
  settings/keybindings.ts
  settings/sections/AppearanceSettings.tsx
  settings/sections/GitSettings.tsx
  settings/sections/KeybindingsSettings.tsx
  settings/sections/TerminalSettings.tsx
  settings/sections/TypographyFontField.tsx
  settings/settings-draft.ts
  settings/settings-model.ts
  settings/settings-navigation.ts
  settings/settings.ts
  settings/typography-presentation.ts
  settings/typography-settings.ts
  settings/use-add-harness-dialog.ts
  settings/use-harness-binding-authorization.ts
  settings/use-harness-folder-picker.ts
  settings/use-harness-profile-editor.ts
  settings/use-harness-profile-load.ts
  settings/use-settings-controller.ts
  styles.css
  styles/base.css
  styles/composer-submit.css
  styles/context-menu.css
  styles/diagnostic-report.css
  styles/dialogs.css
  styles/document-review.css
  styles/file-operations.css
  styles/git-controls.css
  styles/git-graph.css
  styles/git-history.css
  styles/git-inspector.css
  styles/harness-settings.css
  styles/health.css
  styles/path-copy.css
  styles/primitives.css
  styles/projects.css
  styles/provider-context.css
  styles/scrollbars.css
  styles/sessions-collection.css
  styles/sessions-overview.css
  styles/sessions-terminal-detail.css
  styles/settings.css
  styles/shell.css
  styles/terminal-context-menu.css
  styles/terminal-list.css
  styles/terminal-move.css
  styles/terminal-pane.css
  styles/terminal-search.css
  styles/terminal-shell.css
  styles/terminal-theme-gallery.css
  styles/tree.css
  styles/viewer-content.css
  styles/viewer-find.css
  styles/viewer-tabs.css
  styles/viewer-workload.css
  styles/web-pane.css
  styles/workspace-catalog.css
  styles/workspace-state.css
  terminal/TerminalContextMenu.tsx
  terminal/TerminalContextMeter.tsx
  terminal/TerminalDeck.tsx
  terminal/TerminalMoveDialog.tsx
  terminal/TerminalRail.tsx
  terminal/TerminalRailCompact.tsx
  terminal/TerminalRecoveryDialog.tsx
  terminal/TerminalSearch.tsx
  terminal/TerminalSessionRuntimes.tsx
  terminal/TerminalView.tsx
  terminal/TerminalWorkspace.tsx
  terminal/TerminalWorkspaceCollection.tsx
  terminal/TerminalWorkspaceControls.tsx
  terminal/TerminalWorkspaceDialogs.tsx
  terminal/effect-generation.ts
  terminal/generated-terminal-theme-catalog.ts
  terminal/ghostty-terminal-events.ts
  terminal/ghostty-terminal-file-paste.ts
  terminal/ghostty-terminal-fit.ts
  terminal/ghostty-terminal-keyboard.ts
  terminal/ghostty-terminal-pane.ts
  terminal/harness-launch-menu.ts
  terminal/terminal-attention.ts
  terminal/terminal-clipboard-osc.ts
  terminal/terminal-clipboard-write.ts
  terminal/terminal-clipboard.ts
  terminal/terminal-context-menu-position.ts
  terminal/terminal-context-menu-target.ts
  terminal/terminal-event-router.ts
  terminal/terminal-file-link.ts
  terminal/terminal-fit.ts
  terminal/terminal-fork-policy.ts
  terminal/terminal-palette.ts
  terminal/terminal-pane-event-coordinator.ts
  terminal/terminal-pane-factory.ts
  terminal/terminal-pane.ts
  terminal/terminal-probe-policy.ts
  terminal/terminal-profile-recovery.ts
  terminal/terminal-recovery-planner.ts
  terminal/terminal-runtime-interactions.ts
  terminal/terminal-runtime-launch.ts
  terminal/terminal-runtime-live-settings.ts
  terminal/terminal-runtime-options.ts
  terminal/terminal-runtime-presentation.ts
  terminal/terminal-runtime-registry.ts
  terminal/terminal-runtime.ts
  terminal/terminal-search-controller.ts
  terminal/terminal-semantic-regions.ts
  terminal/terminal-sessions-surface-owner.ts
  terminal/terminal-split-persistence.ts
  terminal/terminal-surface-attachment.ts
  terminal/terminal-theme-catalog.ts
  terminal/terminal-wheel.ts
  terminal/terminal-workspace-model.ts
  terminal/terminal-workspace-runtime-owner.ts
  terminal/use-new-worktree-move-badge.ts
  terminal/use-terminal-attention-controller.ts
  terminal/use-terminal-attention.ts
  terminal/use-terminal-context-menu.ts
  terminal/use-terminal-launch-menu-layout.ts
  terminal/use-terminal-pane-controller.ts
  terminal/use-terminal-persistence.ts
  terminal/use-terminal-profiles.ts
  terminal/use-terminal-recovery.ts
  terminal/use-terminal-session-commands.ts
  terminal/use-terminal-workspace-move.ts
  terminal/use-terminal-workspace-runtime.ts
  terminal/use-terminal-workspace-transfer.ts
  theme-model.ts
  theme.ts
  themes.css
  tree/DirectoryTree.tsx
  tree/FileCreateOverlays.tsx
  tree/FileDeletionDialog.tsx
  tree/FileExternalMoveDialog.tsx
  tree/FileOrganizationDialog.tsx
  tree/FileTree.tsx
  tree/FilenameSearch.tsx
  tree/directory-entry-sort.ts
  tree/file-action-destination.ts
  tree/file-action-menu.ts
  tree/file-manager-reveal.ts
  tree/file-name.ts
  tree/file-operation-feedback.ts
  tree/git-ignore-refresh.ts
  tree/git-status-decoration.ts
  tree/project-entry-drag.ts
  tree/project-file-entry-name.ts
  tree/project-file-owner-key.ts
  tree/use-external-file-actions.ts
  tree/use-external-file-copy.ts
  tree/use-external-file-move.ts
  tree/use-file-create-actions.ts
  tree/use-file-deletion-actions.ts
  tree/use-file-manager-reveal.ts
  tree/use-file-organization-actions.ts
  tree/use-path-copy-action.ts
  tree/use-project-file-operation.ts
  viewer/DiffView.tsx
  viewer/FileViewer.tsx
  viewer/FindControl.tsx
  viewer/GoToLineControl.tsx
  viewer/LargeFileView.tsx
  viewer/MarkdownFragment.tsx
  viewer/RenderedView.tsx
  viewer/RepositoryImageView.tsx
  viewer/SourceView.tsx
  viewer/TabStrip.tsx
  viewer/code-scroll-anchor.ts
  viewer/codemirror-find-target.ts
  viewer/csv-parser.ts
  viewer/csv-protocol.ts
  viewer/csv.worker.ts
  viewer/diff-policy.ts
  viewer/dom-find-target.ts
  viewer/external-document-context.ts
  viewer/external-document-tabs.ts
  viewer/highlight-protocol.ts
  viewer/highlight-request.ts
  viewer/highlight-worker.ts
  viewer/highlight.worker.ts
  viewer/json-protocol.ts
  viewer/json.worker.ts
  viewer/markdown-client.ts
  viewer/markdown-extensions.ts
  viewer/markdown-renderer.ts
  viewer/markdown-repository-images.ts
  viewer/markdown.worker.ts
  viewer/render-protocol.ts
  viewer/rendered-link-handler.ts
  viewer/rendered-position.ts
  viewer/retained-viewer-workspace-cache.ts
  viewer/shiki-grammar-registry.ts
  viewer/shiki-language-catalog.ts
  viewer/shiki-language-names.ts
  viewer/source-blame-gutter.ts
  viewer/source-coordinate.ts
  viewer/source-highlighting.ts
  viewer/structured-data.ts
  viewer/tab-state.ts
  viewer/use-diff-inputs.ts
  viewer/use-source-blame.ts
  viewer/use-viewer-path-lifecycle.ts
  viewer/use-viewer-workspace.ts
  viewer/viewer-byte-format.ts
  viewer/viewer-command-targets.ts
  viewer/viewer-document-refresh.ts
  viewer/viewer-find.ts
  viewer/viewer-path-rebind.ts
  viewer/viewer-path-removal.ts
  viewer/viewer-position.ts
  viewer/viewer-read-policy.ts
  viewer/viewer-workload-policy.ts
  viewer/viewer-workspace-model.ts
  viewer/viewer-workspace-persistence.ts
  viewer/viewer-workspace-selectors.ts
  viewer/viewer-workspace-state.ts
  workbench/ConfirmationDialog.tsx
  workbench/TerminalLayoutControls.tsx
  workbench/active-terminal-focus.ts
  workbench/middle-click-close.ts
  workbench/modal-keyboard-model.ts
  workbench/use-modal-keyboard.ts
  workbench/use-renderer-ready.ts
  workbench/use-terminal-path-activation.ts
  workbench/use-workbench-commands.ts
  workbench/use-workbench-layout.ts
  workbench/use-workbench-overlays.ts
  workbench/workbench-command-router.ts
  workbench/workbench-layout-policy.ts
  workbench/workbench-overlay-model.ts
  workbench/workspace-pane-state.ts
  workspaces/ConnectionStatus.tsx
  workspaces/MissingWorkspaceNotice.tsx
  workspaces/ProjectsBar.tsx
  workspaces/SessionDialog.tsx
  workspaces/SshPromptDialog.tsx
  workspaces/WorkspaceCatalogDialogs.tsx
  workspaces/connection-status.ts
  workspaces/initial-host-connection.ts
  workspaces/project-folder-picker-client.ts
  workspaces/project-session-events.ts
  workspaces/project-session-model.ts
  workspaces/project-session.ts
  workspaces/project-state-delivery.ts
  workspaces/project-watch-interests.ts
  workspaces/workspace-attention.ts
  workspaces/workspace-session-actions.ts

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/ (1 path(s))
  index.html

[extensions: .ts=222, .tsx=85, .css=40, .html=1]
```

</details>


---

<sub>25s</sub>

### `glob`

**/private/var/tmp/ws/39e7ce18/hvir/src/main**

"**/*.ts" in src/main

<details>
<summary>310 matches</summary>

```
[glob: 290 path(s) under /private/var/tmp/ws/39e7ce18/hvir/src/main; grouped by directory]

/private/var/tmp/ws/39e7ce18/hvir/src/main/smoke/ (93 path(s))
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
  document-review-fixture.ts
  document-review.ts
  electron-process-metrics.ts
  external-documents.ts
  external-file-move.ts
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/harness/ (36 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/project-file-operations/ (25 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/ (21 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/ipc/ (21 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/project-host/ (21 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/git/ (14 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/document-review/ (11 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/diagnostics/ (10 path(s))
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

/private/var/tmp/ws/39e7ce18/hvir/src/main/sessions/ (8 path(s))
  sessions-observation-application.ts
  sessions-observation-port.ts
  sessions-open-resolution.ts
  sessions-projection-identities.ts
  sessions-projection-values.ts
  sessions-telemetry-projection.ts
  sessions-usage-observation-port.ts
  sessions-usage-projection.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/terminal/ (7 path(s))
  electron-clipboard-file-paste.ts
  renderer-pty-lifecycle.ts
  session-registry.ts
  terminal-identity-publication.ts
  terminal-launch-admission.ts
  terminal-start-response.ts
  terminal-workspace-move-coordinator.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/pty/ (6 path(s))
  pty-contract.ts
  pty-launch-admission.ts
  pty-session-lifetime.ts
  pty-session-observation.ts
  pty-stream-attachment.ts
  pty-supervisor.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/window/ (6 path(s))
  electron-renderer-document-lifecycle.ts
  electron-renderer-recovery.ts
  electron-window-manager.ts
  renderer-recovery-monitor.ts
  window-health-tracker.ts
  window-policy.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/filename-search/ (4 path(s))
  filename-enumerator.ts
  filename-search-coordinator.ts
  filename-search-policy.ts
  index.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/health/ (2 path(s))
  workbench-health-events.ts
  workbench-health.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/project-folder-picker/ (2 path(s))
  index.ts
  project-folder-picker-coordinator.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/web-pane/ (2 path(s))
  loopback-http-proxy.ts
  web-pane-route-registry.ts

/private/var/tmp/ws/39e7ce18/hvir/src/main/viewer/ (1 path(s))
  document-read-authority.ts

[extensions: .ts=290]
```

</details>


---

<sub>25s</sub>

### `rg`

**hvir|workspace|terminal|SSH|remote|repository|session|viewer|markdown|Mermaid**

"hvir|workspace|terminal|SSH|remote|repository|session|viewer|markdown|Mermaid" in *.tsx (src/renderer)

<details>
<summary>88 matches</summary>

```
[grep content: 1891 matches across 71 file(s) under /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src]

ErrorBoundary.tsx (2 match(es)):
  26:         window.hvir.diagnostics.recordRenderContainment(this.state.occurrenceId)
  38:         <h1>hvir hit a rendering problem</h1>

git/GitHistoryView.tsx (6 match(es)):
  13:   GitRepositoryState,
  38:   readonly repositoryState?: GitRepositoryState
  55:     repositoryState,
  66:       ) : !error && repositoryState === 'not-git' ? (
  67:         <div className="git-empty">Not a Git repository</div>
  70:           {repositoryState === 'unborn' ? 'No commits yet' : 'No history'}

git/GitBranchControls.tsx (3 match(es)):
  40:   if (branchModel?.repositoryState === 'not-git' && !branchError) return null
  96:             title={fetchBlockedReason ?? 'Refresh remote branch information'}
  117:           Remote checked just now
main.tsx:15: if (!container) throw new Error('hvir: #root element not found')

git/GitGraphView.tsx (16 match(es)):
  17:   type GitRepositoryState,
  32: import { MarkdownFragment } from '../viewer/MarkdownFragment'
  57:   const [repositoryState, setRepositoryState] = useState<GitRepositoryState>()
  93:           const page = await window.hvir.invoke('git:history', {
  109:           setRepositoryState(page.repositoryState)
  136:     setRepositoryState(undefined)
  158:     void window.hvir
  177:           setRepositoryState(page.repositoryState)
  316:         <GraphEmpty text="Loading repository graph…" />
  319:       ) : repositoryState === 'not-git' ? (
  320:         <GraphEmpty text="Not a Git repository" />
  321:       ) : repositoryState === 'unborn' || commits.length === 0 ? (
  324:         <div className={`git-graph-workspace${inspectorOpen ? ' inspector-open' : ''}`}>
  347:               aria-label="Repository commits"
  509:               path={joinHostPath(root, '.hvir-commit-message.md')}
  562:           <MarkdownFragment

workspaces/ConnectionStatus.tsx (4 match(es)):
  6: export function RemoteConnectionBadge({
  18:       className={`remote-connection-badge ${state}`}
  22:       <span className="remote-connection-mark" aria-hidden="true">
  25:       <span className="remote-connection-host">{compact ? 'ssh' : hostLabel}</span>

settings/SettingsActiveSection.tsx (6 match(es)):
  13: import { TerminalSettings } from './sections/TerminalSettings'
  20:   readonly workspaceRoot?: HostPath
  35:   workspaceRoot,
  44:     case 'terminal':
  46:         <TerminalSettings
  63:           workspaceRoot={workspaceRoot}
health/WorkbenchHealthControl.tsx:47:                 Application faults observed by hvir, separate from terminal attention.

sessions/SessionsOverviewNotice.tsx (2 match(es)):
  3: export function SessionsOverviewNotice({
  13:     <section className="sessions-notice">

git/GitPanel.tsx (4 match(es)):
  27:   readonly hasDirtyViewerTabs: boolean
  45:   hasDirtyViewerTabs,
  59:     hasDirtyViewerTabs,
  118:             repositoryState={model.historyRepositoryState}

workspaces/MissingWorkspaceNotice.tsx (4 match(es)):
  5: export function MissingWorkspaceNotice({
  11:     <div className="workspace-missing-notice" role="status">
  13:       <span className="workspace-missing-path">{root.path}</span>
  14:       <span>Its terminals remain available. Close the workspace tab when finished.</span>

sessions/SessionsTerminalDetail.tsx (27 match(es)):
  5:   SessionsTerminalDetailController,
  6:   SessionsTerminalDetailState,
  7: } from './sessions-terminal-detail-controller'
  9: export function SessionsTerminalDetail({
  14:   onOpenWorkspace,
  16:   readonly controller: SessionsTerminalDetailController
  17:   readonly state: Exclude<SessionsTerminalDetailState, { readonly status: 'inactive' }>
  25:   readonly onOpenWorkspace: () => void
  36:         '--sessions-detail-origin-top': `${origin.top}px`,
  37:         '--sessions-detail-origin-right': `calc(100vw - ${origin.right}px)`,
  38:         '--sessions-detail-origin-bottom': `calc(100vh - ${origin.bottom}px)`,
  39:         '--sessions-detail-origin-left': `${origin.left}px`,
  43:     <div className="sessions-detail-backdrop" style={originStyle}>
  46:         className="sessions-terminal-detail"
  50:         aria-labelledby="sessions-detail-title"
  52:         <header className="sessions-detail-header">
  54:             <h1 id="sessions-detail-title">{state.context.title}</h1>
  57:               {state.context.workspaceName} · {state.context.hostLabel} ·{' '}
  61:           <div className="sessions-detail-actions">
  65:             <button type="button" onClick={onOpenWorkspace}>
  66:               Go to workspace
  70:         <p className="sessions-detail-status" role="status">
  72:             (state.status === 'resolving' ? 'Attaching the exact live terminal…' : '')}
  75:           className={`sessions-detail-terminal${ready ? ' ready' : ''}`}
  76:           aria-label={`${state.context.title} terminal`}
  79:             className="terminal-container sessions-detail-terminal-container"
  85:             <div className="sessions-detail-terminal-placeholder" aria-hidden="true" />

[omitted 1815 match(es) in 59 file(s); see original output for full results]
```

</details>


---

<sub>32s</sub>

### Copilot

The source confirms hvir is a desktop coding workbench, not just a terminal wrapper: it combines local/SSH workspaces, multi-pane terminals and agent harnesses, repository browsing/review, and Git tooling. I’m checking the user-visible labels and persistence behavior before drafting setup and architecture sections.

---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/App.tsx (lines 1-300)

<details>
<summary>300 lines</summary>

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
  }, [activeWorkspace?.missing, resetGitGraph])
  useWorkbenchCommands(settings.keybindings, {
    enabled: destination === 'workspace',
    closeWebPane: closeWebView,
    escapeWebPaneFocus: () => setWebViewFocused(false),
    canUseViewerCommands: () => !gitGraphActiveRef.current && !webViewActiveRef.current,
    cycleViewMode: cycleActiveMode,
    findFile: layout.focusFilenameSearch,
    findInFile: viewerCommands.findInFile,
    findInTerminal: terminalWorkspaces.openTerminalSearch,
    goToLine: viewerCommands.goToLine,
    toggleTerminalFocus,
    focusTerminal: layout.focusTerminal,
    focusViewer: () => layout.focusViewer(getActivePane()),
    focusTree: layout.focusTree,
    switchWorkspace: (direction) => {
      setDestination('workspace')
      workspaceSwitchRef.current(direction)
    },
  })
  const revealSourceTerminal = async (view: WebViewState): Promise<void> => {
    const target = projectState?.projects
      .flatMap((project) =>
        project.workspaces.map((workspace) => ({ project, workspace })),
      )
      .find(({ workspace }) => hostPathEquals(workspace.root, view.workspaceRoot))
    if (!target) {
      session.reportError('The source workspace is no longer registered')
      return
    }
    if (!rootRef.current || !hostPathEquals(rootRef.current, view.workspaceRoot)) {
      await session.switchWorkspace(target.project.id, target.workspace.id)
    }
    window.requestAnimationFrame(() => {
      const source = [
        ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
      ].find((element) => element.dataset['terminalSession'] === view.sourceTerminalId)
      source?.click()
      source?.focus()
      if (!source) session.reportError('The source terminal has closed')
    })
  }
  if (rootError) return <div className="startup-error">{rootError}</div>
  if (!root) return <div className="startup-loading">Starting hvir…</div>
  const rootWebViews = webViews.filter((view) => hostPathEquals(view.workspaceRoot, root))
  const renderViewerPane = (
    pane: 'primary' | 'secondary',
    paneTabs: typeof primaryTabs,
    paneTab: typeof primaryActiveTab,
    graphPane: boolean,
  ): ReactElement => (
    <section
      className={`viewer-group viewer-group-${pane}`}
      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
      data-diagnostic-capture="viewer"
      data-viewer-pane={pane}
      tabIndex={-1}
      onPointerDownCapture={(event) => {
        if (event.button !== 0) return
        if (
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-280)

<details>
<summary>265 lines</summary>

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
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-260)

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

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/settings/SettingsDialog.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/settings/SettingsDialog.tsx (lines 1-260)

<details>
<summary>134 lines</summary>

```
import { useCallback, useEffect, useRef, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import type { AppTheme } from '../theme'
import { ComposerSubmitConsentDialog } from './ComposerSubmitConsentDialog'
import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
import { SettingsActiveSection } from './SettingsActiveSection'
import { SettingsSectionNavigation } from './SettingsSectionNavigation'
import type { AppSettings } from './settings'
import {
  DEFAULT_SETTINGS_DESTINATION,
  settingsSectionHeadingId,
  type SettingsDestination,
} from './settings-navigation'
import { useSettingsController } from './use-settings-controller'

interface SettingsDialogProps {
  readonly theme: AppTheme
  readonly settings: AppSettings
  readonly onSave: (theme: AppTheme, settings: AppSettings) => void
  readonly onClose: () => void
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialDestination?: SettingsDestination
}

export function SettingsDialog({
  theme,
  settings,
  onSave,
  onClose,
  workspaceRoot,
  projectRoot,
  initialDestination = DEFAULT_SETTINGS_DESTINATION,
}: SettingsDialogProps): ReactElement {
  const dialog = useRef<HTMLElement>(null)
  const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
  const confirmSafeToLeaveHarnesses = useCallback(
    () => harnessProfiles.current?.confirmSafeToLeave() ?? Promise.resolve(true),
    [],
  )
  const controller = useSettingsController({
    theme,
    settings,
    initialDestination,
    confirmSafeToLeaveHarnesses,
    onSave,
    onClose,
  })
  const requestClose = controller.requestClose

  useEffect(() => {
    if (initialDestination.intent === 'add-harness') return
    const frame = window.requestAnimationFrame(() => {
      if (initialDestination.section === 'appearance') dialog.current?.focus()
      else
        document
          .getElementById(settingsSectionHeadingId(initialDestination.section))
          ?.focus()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [initialDestination])

  useEffect(() => {
    const keydown = (event: KeyboardEvent): void => {
      if (dialog.current?.querySelector('.modal-backdrop.nested')) return
      if (event.key === 'Escape' && !(event.target instanceof HTMLTextAreaElement)) {
        requestClose()
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [requestClose])

  const statusMessage = controller.validation?.message ?? controller.saveError

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog settings-dialog"
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        tabIndex={-1}
      >
        <header className="settings-shell-heading">
          <div>
            <span>Workbench preferences</span>
            <h2 id="settings-title">Settings</h2>
          </div>
          <p>Keep hvir focused, legible, and tuned to the way you work.</p>
        </header>
        <div className="settings-shell-body">
          <SettingsSectionNavigation
            activeSection={controller.activeSection}
            onSelect={controller.requestSection}
          />
          <div className="settings-content">
            <SettingsActiveSection
              activeSection={controller.activeSection}
              draft={controller.draft}
              validation={controller.validation}
              harnessProfiles={harnessProfiles}
              workspaceRoot={workspaceRoot}
              projectRoot={projectRoot}
              initialAddOpen={controller.initialAddOpen}
              onChange={controller.updateDraft}
              onComposerSubmitMode={controller.requestComposerSubmitMode}
            />
          </div>
        </div>
        <footer className="settings-footer">
          <div className="settings-footer-status" aria-live="polite">
            {statusMessage ? (
              <p className="dialog-error" role="alert">
                {statusMessage}
              </p>
            ) : (
              <span>App preferences apply together when saved.</span>
            )}
          </div>
          <div className="dialog-actions">
            <button type="button" onClick={controller.requestClose}>
              Close settings
            </button>
            <button type="button" onClick={() => void controller.save()}>
              Save app settings
            </button>
          </div>
        </footer>
      </section>
      {controller.composerConsentOpen ? (
        <ComposerSubmitConsentDialog
          onCancel={controller.cancelComposerConsent}
          onConfirm={controller.confirmComposerConsent}
        />
      ) : null}
    </div>
  )
}
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/project-registry.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/project-registry.ts (lines 1-260)

<details>
<summary>244 lines</summary>

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
    try {
      await registry.restoreActive()
      if (!stored || canonicalRoot) await registry.persist()
      return registry
    } catch (error) {
      await registry.dispose()
      throw error
    }
  }

  get active(): ActiveProject {
    return this.activeProject
  }

  state(): ProjectState {
    const activeHost = this.activeProject.host
    return {
      revision: this.stateRevision,
      root: this.activeProject.root,
      connectionState: activeHost.connectionState,
      watchTier: activeHost.watchTier,
      projects: this.projects.map((project) => this.rendererProject(project)),
      activeProjectId: this.activeProject.projectId,
      activeWorkspaceId: this.activeProject.workspaceId,
    }
  }

  projectById(projectId: string): RegisteredProjectState | undefined {
    const project = this.projects.find((candidate) => candidate.id === projectId)
    return project ? this.rendererProject(project) : undefined
  }

  observe(listener: () => void): Disposer {
    this.stateListeners.add(listener)
    return () => {
      this.stateListeners.delete(listener)
    }
  }

  /** Resolve only exact persisted workspace roots; no live host is required. */
  registeredWorkspaceRoot(candidate: HostPath): HostPath | undefined {
    return this.projects
      .flatMap((project) => project.workspaces)
      .find((workspace) => !workspace.closed && hostPathEquals(workspace.root, candidate))
      ?.root
  }

  authorityForPath(hostId: string, path: string): ActiveProject | undefined {
    const candidates = this.projects.flatMap((project) =>
      [
        { project, workspace: undefined, root: project.registeredRoot },
        ...project.workspaces.map((workspace) => ({
          project,
          workspace,
          root: workspace.root,
        })),
      ].filter(({ root }) =>
        root.hostId === hostId ? isInsidePath(path, root.path) : false,
      ),
    )
    const match = candidates.sort(
      (left, right) => right.root.path.length - left.root.path.length,
    )[0]
    if (!match) return undefined
    const host = this.hostCatalog.hostById(hostId)
    if (!host) return undefined
    const workspace =
      match.workspace ??
      match.project.workspaces.find((candidate) =>
        hostPathEquals(candidate.root, match.root),
      ) ??
      match.project.workspaces[0]
    if (!workspace) return undefined
    return {
      host,
      root: match.root,
      projectId: match.project.id,
      workspaceId: workspace.id,
    }
  }

  async open(hostId: string, path: string): Promise<ProjectState> {
    const host = await this.host(hostId)
    await host.connect()
    const root = await host.realpath(hostPath(asHostId(hostId), path))
    const stat = await host.stat(root)
```

</details>


---

<sub>35s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-220)

<details>
<summary>129 lines</summary>

```
import type { ReactElement } from 'react'

import {
  basenameHostPath,
  type DiffBase,
  type GitChanges,
  type HostConnectionState,
  type HostPath,
} from '../../../shared'
import { GitBranchControls } from './GitBranchControls'
import { GitChangesView } from './GitChangesView'
import { GitHistoryView } from './GitHistoryView'
import { useGitCommitDetails } from './use-git-commit-details'
import { useGitRailController } from './use-git-rail-controller'

interface GitPanelProps {
  readonly root: HostPath
  readonly refreshVersion: number
  readonly historyRefreshVersion: number
  readonly onOpenChange: (path: HostPath, base: DiffBase, untracked?: boolean) => void
  readonly onOpenHistory: (path: HostPath, revision: string) => void
  readonly onOpenGraph: (hash?: string) => void
  readonly onChanges: (changes: GitChanges | undefined) => void
  readonly connectionState?: HostConnectionState
  readonly hidden?: boolean
  readonly historyPaused?: boolean
  readonly hasDirtyViewerTabs: boolean
  readonly onSwitchBranch: (branch: string) => Promise<void>
  readonly onFetch: () => Promise<void>
  readonly onPull: () => Promise<void>
  readonly autoFetchIntervalMs: number
}

export function GitPanel({
  root,
  refreshVersion,
  historyRefreshVersion,
  onOpenChange,
  onOpenHistory,
  onOpenGraph,
  onChanges,
  connectionState = 'connected',
  hidden = false,
  historyPaused = false,
  hasDirtyViewerTabs,
  onSwitchBranch,
  onFetch,
  onPull,
  autoFetchIntervalMs,
}: GitPanelProps): ReactElement {
  const controller = useGitRailController({
    root,
    refreshVersion,
    historyRefreshVersion,
    onChanges,
    connectionState,
    hidden,
    historyPaused,
    hasDirtyViewerTabs,
    onSwitchBranch,
    onFetch,
    onPull,
    autoFetchIntervalMs,
  })
  const details = useGitCommitDetails(root)
  const { model } = controller

  return (
    <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
      <header className="panel-header">
        <span className="panel-meta">{basenameHostPath(root)}</span>
      </header>
      <GitBranchControls
        root={root}
        model={model}
        syncState={controller.syncState}
        onSwitchBranch={(branch) => void controller.switchBranch(branch)}
        onFetch={controller.fetch}
        onPull={controller.pull}
      />
      <div className="git-tabs">
        <button
          type="button"
          className={model.view === 'changes' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('changes')}
        >
          Changes {controller.changeCountLabel ? `(${controller.changeCountLabel})` : ''}
        </button>
        <button
          type="button"
          className={model.view === 'history' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('history')}
        >
          History
        </button>
      </div>
      <div
        className={`tree-scroll git-scroll${model.view === 'history' ? ' history-active' : ''}`}
      >
        {connectionState !== 'connected' ? (
          <div className="git-empty">Reconnect to inspect Git.</div>
        ) : model.view === 'changes' ? (
          <GitChangesView
            root={root}
            changes={model.changes}
            loading={model.changesLoading}
            error={model.changesError}
            onOpen={onOpenChange}
          />
        ) : (
          <GitHistoryView
            commits={model.commits}
            hasMore={model.hasMore}
            error={model.historyError}
            initialLoading={model.historyInitialLoading}
            repositoryState={model.historyRepositoryState}
            root={root}
            expanded={details.expanded}
            detailStates={details.detailStates}
            collapsedDirectories={details.collapsedDirectories}
            onOpenGraph={onOpenGraph}
            onOpenFile={onOpenHistory}
            onLoadMore={controller.loadMoreHistory}
            onToggleCommit={details.toggleCommit}
            onToggleDirectory={details.toggleDirectory}
          />
        )}
      </div>
    </section>
  )
}
```

</details>


---

<sub>35s</sub>

### `rg`

**app\.getPath|userData|\.hvir|HVIR_|process\.platform|darwin|linux|win32**

"app\.getPath|userData|\.hvir|HVIR_|process\.platform|darwin|linux|win32" in *.ts (src/main, src/shared)

<details>
<summary>281 matches</summary>

```
[grep content: 239 matches across 54 file(s) under /private/var/tmp/ws/39e7ce18/hvir/src]

shared/diagnostic-report.ts (2 match(es)):
  60:     readonly platform: 'linux' | 'macos' | 'windows' | 'other'
  274:     ['linux', 'macos', 'windows', 'other'].includes(String(value.platform)) &&
shared/ipc.ts:143:  * The surface exposed to the renderer as `window.hvir` (via the preload
main/harness/claude-keybindings.ts:10: const STATE_FILE = '.hvir-keybindings-state.json'

main/diagnostics/diagnostic-report-builder.ts (3 match(es)):
  75:   if (value === 'darwin') return 'macos'
  76:   if (value === 'linux') return 'linux'
  77:   if (value === 'win32') return 'windows'

main/diagnostics/diagnostic-report-coordinator.ts (2 match(es)):
  398:       platform: reportPlatform(process.platform),
  403:     new DiagnosticReportStorage(host, localPath(applicationRuntime.userDataRoot)),

main/index.ts (9 match(es)):
  76:     applicationRuntime.userDataRoot,
  77:     app.isPackaged || __HVIR_SMOKE_BUILD__,
  344:         if (process.platform !== 'darwin' && process.platform !== 'linux') return false
  431:     return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  436:       if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
  439:           scenario: process.env['HVIR_SMOKE_SCENARIO'],
  462:       console.error('HVIR_STARTUP_FAIL', error)
  466:     if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
  469:     if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return

main/build-environment.d.ts (2 match(es)):
  1: declare const __HVIR_SMOKE_BUILD__: boolean
  2: declare const __HVIR_BUILD_CHANNEL__: import('../shared').ApplicationBuildChannel

main/diagnostics/runtime-diagnostics.ts (5 match(es)):
  63:     userDataPath: string,
  78:     const storage = new ProjectHostDiagnosticStorage(localHost, userDataPath)
  272:     userDataPath: string,
  274:     this.location = join(userDataPath, JOURNAL_FILE)
  278:           userDataPath,
main/ipc/features/app.ts:24:     platform: process.platform,

main/window/electron-window-manager.ts (3 match(es)):
  205:       const primaryModifier = process.platform === 'darwin' ? input.meta : input.control
  230:               process.platform === 'darwin',
  397:         process.platform === 'darwin' &&
main/project-file-operations/staging-cleanup.ts:166:     !basenameHostPath(path).startsWith('.hvir-import-')

main/project-file-operations/electron-external-move-picker.ts (2 match(es)):
  22:   platform: NodeJS.Platform = process.platform,
  24:   const combined = platform === 'darwin'

main/application-runtime.ts (2 match(es)):
  11:   __HVIR_BUILD_CHANNEL__,
  17:   return join(applicationRuntime.userDataRoot, name)
main/project-file-operations/verified-project-copy.ts:130:     `.hvir-import-${options.createStagingId?.() ?? randomUUID()}`,

main/project-file-operations/clipboard-file-list.ts (4 match(es)):
  21:   platform: NodeJS.Platform = process.platform,
  25:     platform === 'darwin'
  27:       : platform === 'linux'
  35:     if (platform !== 'darwin' && !available.has(format)) continue
main/project-file-operations/case-only-project-entry-rename.ts:33:     const name = `.hvir-rename-${options.createTemporaryId?.() ?? randomUUID()}`

main/terminal/electron-clipboard-file-paste.ts (2 match(es)):
  20:     private readonly platform: NodeJS.Platform = process.platform,
  24:     if (this.platform !== 'linux') return undefined

main/application-runtime-policy.ts (8 match(es)):
  9:   readonly userDataRoot: string
  13:   getPath(name: 'appData' | 'userData'): string
  14:   setPath(name: 'userData', path: string): void
  24:     return { buildChannel, userDataRoot: paths.getPath('userData') }
  26:   const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
  27:   prepareUserDataRoot(userDataRoot)
  28:   paths.setPath('userData', userDataRoot)
  29:   return { buildChannel, userDataRoot }
main/smoke/workspace-remote.ts:69:       window.hvir.invoke('project:browse-host', {

main/smoke/terminal-context-menu.ts (6 match(es)):
  5: const READY = '__HVIR_MENU_READY__'
  6: const ACTIONS_READY = '__HVIR_MENU_ACTIONS_READY__'
  7: const LEAK = '__HVIR_MENU_LEAK__'
  8: const INPUT = '__HVIR_MENU_INPUT__:hvir-context-menu-paste:END'
  33:       "stty -echo -icanon min 0 time 50; printf '\\033[?1000h\\033[?1006h\n__HVIR_MENU_READY__\n'; hvir_menu_leak=$(dd bs=1 count=1 2>/dev/null | od -An -tx1 | tr -d ' \\n'); printf '\\033[?1000l\\033[?1006l'; stty icanon min 1 time 0; if [ -n \"$hvir_menu_leak\" ]; then printf '\n__HVIR_MENU_LEAK__:%s\n' \"$hvir_menu_leak\"; fi; printf '\n__HVIR_MENU_ACTIONS_READY__\n'; IFS= read -r hvir_menu_input; printf '\n__HVIR_MENU_INPUT__:%s:END\n' \"$hvir_menu_input\"; stty echo\n",
  288:     if (output.includes('__HVIR_MENU_INPUT__:')) {

main/smoke/external-file-move.ts (7 match(es)):
  22:   const mixed = process.platform === 'darwin'
  84:   const localName = '.hvir-smoke-moved-external-local.txt'
  85:   const remoteName = '.hvir-smoke-moved-external-remote'
  86:   const retainedName = '.hvir-smoke-copied-external-retained.txt'
  119:     control.assertSelection(process.platform === 'darwin' ? 'mixed' : 'files')
  147:     control.assertSelection(process.platform === 'darwin' ? 'mixed' : 'directory')
  198:     process.platform === 'darwin'

main/smoke/external-documents.ts (2 match(es)):
  25:     `${home.stdout}/.hvir-${randomBytes(8).toString('hex')}`,
  112:           if (typeof require !== 'undefined' || typeof window.hvir !== 'undefined') return reject(new Error('External preview acquired workbench authority'));

main/smoke/web-pane.ts (3 match(es)):
  78:         `<!doctype html><title>smoke dashboard</title><input aria-label="dashboard input"><script>document.body.dataset.isolated=String(typeof require==='undefined'&&typeof window.hvir==='undefined');onbeforeunload=()=>"stay";navigator.serviceWorker.register('/sw.js').then(()=>navigator.serviceWorker.ready).then((registration)=>{const channel=new MessageChannel();channel.port1.onmessage=(event)=>document.body.dataset.serviceWorker=event.data;registration.active.postMessage('probe',[channel.port2])})</script>smoke-dashboard-ok`,
  303:     const closeModifier = process.platform === 'darwin' ? 'meta' : 'control'
  325:       `window.hvir.send('pty:kill', { id: ${JSON.stringify(sourceTerminal.id)} })`,

main/smoke/renderer-readiness.ts (2 match(es)):
  8:         window.hvir.invoke('app:info', undefined),
  9:         window.hvir.invoke('demo:echo', { text: 'renderer-ping' })

main/smoke/harness-profile-workflow.ts (10 match(es)):
  17:         const defaults = await window.hvir.invoke('harness:profiles', { root });
  18:         const catalog = await window.hvir.invoke('harness:catalog', undefined);
  27:         const materialized = await window.hvir.invoke('harness:profile-materialize', {
  31:         const grant = await window.hvir.invoke('harness:authorize-path', {
  35:         const profile = await window.hvir.invoke('harness:profile-save', {
  48:               { kind: 'literal', name: 'HVIR_PROFILE_SMOKE', value: 'structured' }
  56:         const preview = await window.hvir.invoke('harness:preview', {
  116:     !profileSmoke.preview.command.includes("HVIR_PROFILE_SMOKE='structured'")
  319:     process.env.HVIR_HARNESS_SETTINGS_CAPTURE_DIR
  320:       ? localPath(process.env.HVIR_HARNESS_SETTINGS_CAPTURE_DIR)

main/smoke/platform-contracts.ts (3 match(es)):
  63:     process.env['HVIR_SMOKE_REQUIRE_PROCESS_SANDBOX'] === '1'
  88:     `${process.platform} ${process.arch} · ${snapshot.viewport.width}×${snapshot.viewport.height} ` +
  253:     window.hvir?.diagnostics?.processSandboxed === true

main/smoke/terminal-presentation.ts (6 match(es)):
  68:       ? joinHostPath(launchMenuOverflowRoot, '.hvir-smoke-oversized-diff.txt')
  281:       "printf '\n__HVIR_TYPO_STTY__:'; stty size; printf ':__HVIR_TYPO_END__\n'\n",
  294:           /[\r\n]__HVIR_TYPO_STTY__:[^\d]*(\d+)\s+(\d+)\s*:__HVIR_TYPO_END__/g,
  815:         const profiles = await window.hvir.invoke('harness:profiles', { root });
  820:             window.hvir.invoke('harness:profile-duplicate', { id: shell.id })
  878:             '.hvir-scrollbar[data-axis="vertical"][data-visible="true"]'

main/smoke/native-pty.ts (11 match(es)):
  37:   const profileStorePath = joinHostPath(projectRoot, '.hvir-smoke-native-profile.json')
  38:   const loginShellFixtureRoot = joinHostPath(projectRoot, '.hvir-smoke-login-shell')
  109:                   'read trigger; printf hvir-profile-smoke:; printenv HVIR_PROFILE_SMOKE; read hold',
  115:           { kind: 'literal', name: 'HVIR_PROFILE_SMOKE', value: 'structured' },
  193:       process.platform === 'darwin'
  208:     console.log('HVIR_SMOKE_OK')
  213:     console.error('HVIR_SMOKE_FAIL', error)
  231:       console.error('HVIR_SMOKE_CLEANUP_FAIL', cleanupError)
  254:       'export HVIR_LOGIN_STARTUP="${HVIR_LOGIN_STARTUP:+$HVIR_LOGIN_STARTUP,}login"\n',
  258:     'export HVIR_INTERACTIVE_STARTUP="${HVIR_INTERACTIVE_STARTUP:+$HVIR_INTERACTIVE_STARTUP,}interactive"\n',
  296:         `printf 'hvir-login-shell:%s|%s|' "$HVIR_LOGIN_STARTUP" "$HVIR_INTERACTIVE_STARTUP"; hvir-login-path; printf '|%s|%s\\n' "$options[login]" "$options[interactive]"; exit\n`,
main/smoke/viewer-position.ts:48:           joinHostPath(root, '.hvir-smoke-large.txt'),

main/smoke/viewer-content.ts (4 match(es)):
  238:             openWhenReady('/build/icons-linux', () =>
  239:               openWhenReady('/build/icons-linux/64x64.png', () => {
  600:     const saveModifier = process.platform === 'darwin' ? 'meta' : 'control'
  634:     console.log('HVIR_SMOKE_OK')

main/smoke/renderer-recovery-delivery.ts (3 match(es)):
  24:       window.hvir.on('pty:data', ({ id, data }) => {
  32:       window.hvir.on('project:watch', ({ path }) => {
  40:       window.hvir.on('workbench-health:state', ({ items }) => {

main/smoke/terminal-search.ts (2 match(es)):
  5: const READY = '__HVIR_SEARCH_READY__'
  34:       `hvir_search_ready='__HVIR_SEARCH_''READY__'; ` +

main/smoke/sessions-projection.ts (14 match(es)):
  70:     window.__hvirSessionsStop = window.hvir.on('sessions:changed', () => {
  73:     window.hvir.invoke('sessions:observe', { demandGeneration: 1 });
  107:       `window.hvir.invoke('sessions:snapshot', { demandGeneration: 1 })`,
  118:     window.hvir.invoke('sessions:usage-observe', ${JSON.stringify({
  141:     window.hvir.invoke('sessions:usage-snapshot', { demandGeneration: 11 }).then(
  167:     window.hvir.invoke('sessions:snapshot', { demandGeneration: 1 }).then(
  179:     window.__hvirSessionsStop = window.hvir.on('sessions:changed', () => {
  182:     window.hvir.invoke('sessions:observe', { demandGeneration: 2 });
  194:     window.hvir.invoke('sessions:open', ${JSON.stringify({
  208:     `window.hvir.invoke('sessions:release', { demandGeneration: 2 })`,
  214:       window.hvir.invoke('sessions:snapshot', { demandGeneration: 2 }).then(
  261:         window.hvir.invoke('sessions:snapshot', { demandGeneration: 1 }).then(
  403:           return window.hvir.invoke('sessions:snapshot', { demandGeneration: 1 }).then(
  1077:       `window.hvir.invoke('sessions:usage-snapshot', { demandGeneration: ${demandGeneration} })`,

main/smoke/terminal-middle-click-close.ts (10 match(es)):
  6: const SELECTION_TEXT = '__HVIR_PRIMARY_SELECTION_INPUT__'
  7: const READY_MARKER = '__HVIR_MIDDLE_CLICK_READY__'
  8: const PASTE_MARKER = '__HVIR_MIDDLE_CLICK_PASTE_OK__'
  9: const GUARDED_MARKER = '__HVIR_MIDDLE_CLICK_GUARD_OK__'
  10: const GUARD_COMPLETE_INPUT = '__HVIR_MIDDLE_CLICK_GUARD_COMPLETE__'
  11: const FAILURE_MARKER = '__HVIR_MIDDLE_CLICK_FAIL__'
  12: const CLOSED_MARKER = '__HVIR_MIDDLE_CLICK_CLOSED__'
  13: const SHELL_READY_MARKER = '__HVIR_MIDDLE_CLICK_SHELL_READY__'
  60:   if (process.platform !== 'linux') return undefined
  170:   return `node -e "eval(Buffer.from(process.argv[1],'base64').toString())" '${source}' '${expected}' '${mode}' '${guardComplete}'; printf '\n%s%s\n' '__HVIR_MIDDLE_CLICK_' 'SHELL_READY__'\n`
main/smoke/capacity-output-fixtures.ts:6: const STOP_MARKER_PREFIX = '__HVIR_CAPACITY_OUTPUT_STOPPED_'

main/smoke/project-file-operations.ts (14 match(es)):
  135:   const pointerName = '.hvir-smoke-created-pointer.txt'
  136:   const renamedName = '.hvir-smoke-renamed-pointer.txt'
  137:   const keyboardName = '.hvir-smoke-created-keyboard'
  138:   const organizationDirectoryName = '.hvir-smoke-organization-target'
  139:   const duplicatedName = '.hvir-smoke-duplicated-pointer.txt'
  140:   const snapshotName = '.hvir-smoke-created-snapshot.txt'
  141:   const clipboardName = '.hvir-smoke-copied-clipboard.txt'
  142:   const droppedName = '.hvir-smoke-copied-drop.txt'
  316:       process.platform === 'darwin' ? 'public.file-url' : 'text/uri-list'
  317:     if (process.platform === 'darwin') {
  325:     if (process.platform === 'darwin') {
  846:           metaKey: ${process.platform === 'darwin'},
  847:           ctrlKey: ${process.platform !== 'darwin'}
  968:         const tracks = [...document.querySelectorAll('.hvir-scrollbar')];

main/smoke/capacity.ts (2 match(es)):
  597:   const commit = process.env['HVIR_SMOKE_SOURCE_COMMIT']
  598:   const dirty = process.env['HVIR_SMOKE_SOURCE_DIRTY']
main/project-host/ssh-file-access.ts:150:     const temporary = `${parent === '/' ? '' : parent}/.${basename}.hvir-${randomUUID()}.tmp`

main/project-host/local-host.ts (5 match(es)):
  147:         (process.platform === 'win32' ? 'powershell.exe' : '/bin/bash'),
  168:         detached: process.platform !== 'win32',
  532:       `.${basename(destination)}.hvir-${randomUUID()}.tmp`,
  928:   if (process.platform === 'win32' || child.pid === undefined) {
  944:   if (process.platform !== 'darwin' && process.platform !== 'linux') {

main/smoke/viewer-fixtures.ts (5 match(es)):
  19:   const liveReloadPath = joinHostPath(smokeRoot, '.hvir-smoke-live.txt')
  20:   const viewerPositionPath = joinHostPath(smokeRoot, '.hvir-smoke-position.md')
  21:   const largeJsonPath = joinHostPath(smokeRoot, '.hvir-smoke-large.json')
  22:   const largeTextPath = joinHostPath(smokeRoot, '.hvir-smoke-large.txt')
  23:   const oversizedDiffPath = joinHostPath(smokeRoot, '.hvir-smoke-oversized-diff.txt')

main/smoke/terminal-file-paste.ts (5 match(es)):
  11: const READY_MARKER = '__HVIR_FILE_PASTE_READY__'
  12: const SUCCESS_MARKER = '__HVIR_FILE_PASTE_OK__'
  13: const FAILURE_PREFIX = '__HVIR_FILE_PASTE_FAIL__:'
  14: const CLOSED_PREFIX = '__HVIR_FILE_PASTE_CLOSED__:'
  104:     if (process.platform === 'linux') {

main/smoke/document-review.ts (2 match(es)):
  169:       `window.hvir && document.querySelector('.workbench')`,
  368:     const readyMarker = `__HVIR_DOCUMENT_REVIEW_CAPTURE_READY_${id}__`
main/smoke/renderer-recovery.ts:197:       `window.hvir.invoke('app:info', undefined).then((info) => info.electronVersion)`,

main/smoke/sessions-visual.ts (2 match(es)):
  124:       document.documentElement.dataset.hvirSessionsCapture = 'true';
  299:       delete document.documentElement.dataset.hvirSessionsCapture;

main/smoke/terminal-keyboard-negotiation.ts (14 match(es)):
  104: const READY_PREFIX = '__HVIR_KEYBOARD_READY__:'
  105: const CLIENT_STARTED_MARKER = '__HVIR_KEYBOARD_CLIENT_STARTED__'
  106: const SUCCESS_PREFIX = '__HVIR_KEYBOARD_OK__:'
  107: const FAILURE_PREFIX = '__HVIR_KEYBOARD_FAIL__:'
  108: const CLOSED_PREFIX = '__HVIR_KEYBOARD_CLOSED__:'
  115: const PROBE_SOURCE_VARIABLE = 'HVIR_KEYBOARD_PROBE_B64'
  120: const readyPrefix = '__HVIR_' + 'KEYBOARD_READY__:';
  121: const successPrefix = '__HVIR_' + 'KEYBOARD_OK__:';
  122: const failurePrefix = '__HVIR_' + 'KEYBOARD_FAIL__:';
  123: const abortedMarker = '__HVIR_' + 'KEYBOARD_ABORTED__';
  124: const closedPrefix = '__HVIR_' + 'KEYBOARD_CLOSED__:';
  222:   (_, index) => `__HVIR_KEYBOARD_DELIVERY_${index}__`,
  371:       `${assignment}; printf '%s\\n' '__HVIR_KEYBOARD_DELIVERY_''${index}__'\n`,
  376:   return `printf '%s\\n' '__HVIR_KEYBOARD_CLIENT_''STARTED__'; node -e "eval(Buffer.from(process.argv[1],'base64').toString())" "$${PROBE_SOURCE_VARIABLE}"; unset ${PROBE_SOURCE_VARIABLE}\n`

main/smoke/document-review-fixture.ts (3 match(es)):
  21:     '.hvir-smoke-document-review.md',
  25:     '.hvir-smoke-document-review-a.bin',
  29:     '.hvir-smoke-document-review-b.bin',
main/smoke/capacity-performance.ts:1: export const CAPACITY_PERFORMANCE_GATE_ENV = 'HVIR_CAPACITY_PERFORMANCE_GATE'
main/smoke/files-interactions.ts:13:     process.platform === 'darwin' ? 'Reveal in Finder' : 'Show in File Manager'

main/smoke/diagnostic-report-restart.ts (3 match(es)):
  6: const PHASE_VARIABLE = 'HVIR_SMOKE_DIAGNOSTIC_REPORT_PHASE'
  37:     console.log('HVIR_SMOKE_OK')
  140:   console.log('HVIR_SMOKE_OK')

main/smoke/scrollbar-presentation.ts (4 match(es)):
  149:         const tracks = [...document.querySelectorAll('.hvir-scrollbar')].map((track) => {
  420:           document.querySelector('.hvir-scrollbar[data-axis="vertical"]')?.dataset.visible === 'true',
  422:           document.querySelector('.hvir-scrollbar[data-axis="horizontal"]')?.dataset.visible === 'true'
  480:         const overlay = document.querySelector('.hvir-scrollbar');

main/smoke/project-file-fixture.ts (6 match(es)):
  13:     `.hvir-smoke-trash-recovery-${process.pid}-${basenameHostPath(smokeRoot)}`,
  40:   const createdPointerPath = joinHostPath(smokeRoot, '.hvir-smoke-created-pointer.txt')
  41:   const renamedPointerPath = joinHostPath(smokeRoot, '.hvir-smoke-renamed-pointer.txt')
  42:   const createdKeyboardPath = joinHostPath(smokeRoot, '.hvir-smoke-created-keyboard')
  45:     '.hvir-smoke-organization-target',
  47:   const createdSnapshotPath = joinHostPath(smokeRoot, '.hvir-smoke-created-snapshot.txt')

main/smoke/development-performance.ts (6 match(es)):
  14:               if (document.documentElement.dataset.hvirDevelopmentPerformanceMeasurePolicy) {
  31:         `Boolean(document.documentElement.dataset.hvirDevelopmentPerformanceMeasurePolicy)`,
  44:   console.log('HVIR_SMOKE_OK')
  53:         const budget = Number(root.dataset.hvirDevelopmentPerformanceMeasureBudget);
  54:         const intervalMs = Number(root.dataset.hvirDevelopmentPerformanceMeasureInterval);
  55:         const policy = root.dataset.hvirDevelopmentPerformanceMeasurePolicy;

main/smoke/interruption-checkpoint.ts (5 match(es)):
  3: const CHECKPOINT_VARIABLE = 'HVIR_SMOKE_ISOLATION_CHECKPOINT'
  4: const ACTION_VARIABLE = 'HVIR_SMOKE_ISOLATION_ACTION'
  5: const RUN_TOKEN_VARIABLE = 'HVIR_SMOKE_ISOLATION_RUN'
  6: const PREDECESSOR_TOKEN_VARIABLE = 'HVIR_SMOKE_ISOLATION_PREDECESSOR'
  7: const PREDECESSOR_PANE_VARIABLE = 'HVIR_SMOKE_ISOLATION_PREDECESSOR_PANE'

main/smoke/index.ts (23 match(es)):
  90: /** Production-composed Electron acceptance workflow selected by `HVIR_SMOKE=1`. */
  194:     const smokeCloseableRoot = joinHostPath(smokeRoot, '.hvir-smoke-closed-project')
  198:       '.hvir-smoke-harness-profiles.json',
  226:       '.hvir-smoke-document-review-drafts.json',
  500:       console.log('HVIR_SMOKE_OK')
  524:         captureDirectory: process.env.HVIR_SESSIONS_CAPTURE_DIR
  525:           ? localPath(process.env.HVIR_SESSIONS_CAPTURE_DIR)
  529:       console.log('HVIR_SMOKE_OK')
  536:       console.log('HVIR_SMOKE_OK')
  586:       console.log('HVIR_SMOKE_OK')
  605:       console.log('HVIR_SMOKE_OK')
  615:       console.log('HVIR_SMOKE_OK')
  636:       console.log('HVIR_SMOKE_OK')
  653:       console.log('HVIR_SMOKE_OK')
  678:       console.log('HVIR_SMOKE_OK')
  689:       console.log('HVIR_SMOKE_OK')
  704:       console.log('HVIR_SMOKE_OK')
  716:       console.log('HVIR_SMOKE_OK')
  721:       console.log('HVIR_SMOKE_OK')
  731:       console.log('HVIR_SMOKE_OK')
  751:       console.log('HVIR_SMOKE_OK')
  767:     console.error('HVIR_SMOKE_FAIL', err)
  784:       console.error('HVIR_SMOKE_CLEANUP_FAIL', cleanupError)
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/index.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/index.ts (lines 40-120)

<details>
<summary>81 lines</summary>

```
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
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/index.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/index.ts (lines 320-480)

<details>
<summary>161 lines</summary>

```
            branch,
            relatedWorktreeRoots,
          }),
        fetch: (root) => gitWorker!.request(GIT_FETCH_TYPE, { root }),
        pull: (root, relatedWorktreeRoots) =>
          gitWorker!.request(GIT_PULL_TYPE, { root, relatedWorktreeRoots }),
      },
      workspaces: workspaceCoordinator,
      authorizations: gitMutationAuthorizations,
      removal,
      onError: (message, error) => console.error(message, error),
    })
    const terminalMoves = new TerminalWorkspaceMoveCoordinator({
      projects: projectRegistry,
      workspaces: workspaceCoordinator,
      sessions: terminalSessionRegistry,
      ptys: ptySupervisor,
      resources: rendererScopes,
      webPanes: webPaneRoutes,
      onError: (message, error) => console.error(message, error),
    })
    attentionBadge = runtime.own(
      'attention badge',
      new AttentionBadge((count) => {
        if (process.platform !== 'darwin' && process.platform !== 'linux') return false
        return app.setBadgeCount(count)
      }),
      (badge) => badge.clear(),
    )
    installTerminalIdentityPublication(runtime, ptySupervisor, rendererEvents)
    const withSshPresentation = <T>(owner: RendererOwner, operation: () => T): T => {
      if (!sshPrompter) throw new Error('SSH prompting is unavailable')
      return sshPrompter.runForOwner(owner, operation)
    }
    const projectCommands = createProjectCommands({
      projects,
      workspaces: workspaceCoordinator,
      git: gitMutations,
      withSshPresentation,
    })
    runtime.own(
      'IPC authority router',
      registerIpcHandlers({
        echoWorker,
        gitWorker,
        filenameSearch,
        projectFiles,
        projectFolderPicker: new FolderPicker(hostCatalog, projects, rendererScopes),
        documentReview: documentReview.coordinator,
        documentReviewDelivery: documentReview.delivery,
        getProject: () => registry.active,
        getHost: (hostId) => hostCatalog?.hostById(hostId),
        connectedHosts: () => hostCatalog?.connectedHosts() ?? [],
        getRegisteredWorkspaceRoot: (root) => registry.registeredWorkspaceRoot(root),
        revealLocalEntry: electronReveal(shell),
        getProjectState: () => registry.state(),
        listHosts: () => hostCatalog?.listHosts() ?? [],
        ...projectCommands,
        respondSshPrompt: (owner, id, answers) =>
          sshPrompter?.respond(owner, id, answers),
        rendererResources: rendererScopes,
        rendererReady: (owner, reportedGeneration) =>
          windowManager.rendererReady(owner, reportedGeneration) &&
          sshPrompter?.activateOwner(owner),
        getWorkbenchHealth: () => diagnostics.healthSnapshot(),
        acknowledgeWorkbenchHealth: (id) => diagnostics.acknowledgeHealth(id),
        diagnostics: diagnosticIpc,
        recordIpcContractDiagnostic: (event) => diagnostics.recordIpcContract(event),
        recordRenderContainment: (owner, batch) =>
          diagnostics.recordRenderContainment(owner, batch),
        ptySupervisor,
        terminalSessions: terminalSessionRegistry,
        sessionsObservation: sessionsPorts.observation,
        sessionsUsage: sessionsPorts.usage,
        terminalMoves,
        harnessProfiles: harnessProfileStore,
        harnessProbes: harnessProbeManager,
        remoteImagePaste,
        updateAttention: (owner, count) =>
          attentionBadge?.update(owner.id, count, owner.generation),
        updateWebPaneBindings: (owner, bindings) =>
          windowManager.updateWebPaneBindings(owner.id, bindings),
        updateWebPaneFullPage: (owner, paneId) =>
          windowManager.updateWebPaneFullPage(owner.id, paneId),
        htmlPreviews,
        webPanes: webPaneRoutes,
        openExternal: (url) => shell.openExternal(url),
        emit,
      }),
      (router) => router.dispose(),
    )
    createWindow() // Paint before background watch and Git discovery touches a slow directory.
    if (projectRegistry.active.host.connectionState === 'connected') {
      void workspaceCoordinator
        .replaceWatch(projectRegistry.active)
        .then(() => workspaceCoordinator?.refresh(projectRegistry!.active.projectId))
        .catch((error) => console.error('[workspace] initial discovery failed', error))
    }
    workspaceCoordinator.startPolling()
  }
  function reopenWorkbench(): void {
    if (!projectRegistry || BrowserWindow.getAllWindows().length > 0) return
    if (projectRegistry.active.host.connectionState === 'connected') {
      void workspaceCoordinator
        ?.replaceWatch(projectRegistry.active)
        .catch((error) => console.error('[workspace] watch reopen failed', error))
    }
    createWindow()
  }
  function projectRootArgument(): string | undefined {
    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  }
  void app
    .whenReady()
    .then(async () => {
      if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
        const { runElectronSmokeScenario } = await import('./smoke/scenarios')
        const code = await runElectronSmokeScenario({
          scenario: process.env['HVIR_SMOKE_SCENARIO'],
          projectRoot: localPath(projectRootArgument() ?? process.cwd()),
          createWindow,
          harnessProbeManager,
          htmlPreviews,
          rendererResources: rendererScopes,
          diagnostics: diagnosticIpc,
          runtimeDiagnostics: diagnostics,
          webPaneRoutes,
          rendererReady: windowManager.rendererReady,
          updateWebPaneBindings: windowManager.updateWebPaneBindings,
          updateWebPaneFullPage: windowManager.updateWebPaneFullPage,
          openExternal: (url) => shell.openExternal(url),
        })
        app.exit(code)
        return
      }
      await runtime.start()
      diagnostics.recordApplication('application-ready')
    })
    .catch(async (error: unknown) => {
      diagnostics.recordApplication('application-startup-failed')
      await diagnostics.dispose()
      console.error('HVIR_STARTUP_FAIL', error)
      app.exit(1)
    })
  app.on('window-all-closed', () => {
    if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
  })
  app.on('activate', () => {
    if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return
    void runtime.reopen().catch((error) => console.error('[window] reopen failed', error))
  })
  app.on('before-quit', (event) => {
    if (runtime.isShutdown) return
    event.preventDefault()
    if (runtime.isShuttingDown) return
    diagnostics.recordApplication('application-shutdown-starting')
    void runtime
      .shutdown()
      .then(() => diagnostics.recordApplication('application-shutdown-completed'))
      .catch((error) => {
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/settings/settings-navigation.ts (lines 1-220)

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

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-280)

<details>
<summary>271 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import {
  basenameHostPath,
  canRender,
  renderedFileType,
  type DiffBase,
  type ViewMode,
  type GitBlameRun,
  type HostPath,
} from '../../../shared'
import { DiffView } from './DiffView'
import { FindControl } from './FindControl'
import { GoToLineControl } from './GoToLineControl'
import { RenderedView } from './RenderedView'
import { SourceView } from './SourceView'
import { LargeFileView } from './LargeFileView'
import { useSourceBlame } from './use-source-blame'
import { formatViewerBytes } from './viewer-byte-format'
import type { SourceCoordinate } from './source-coordinate'
import type {
  ViewerDocumentPosition,
  ViewerNavigationPosition,
  ViewerTab,
} from './tab-state'
import type { RegisterViewerCommandTarget } from './viewer-command-targets'
import {
  viewerFindUnavailable,
  type RegisterViewerFindTarget,
  type ViewerFindTarget,
} from './viewer-find'
import type { ViewerPositionCapture } from './viewer-position'
import {
  canUseInteractiveSource,
  sourcePreview,
  SOURCE_INTERACTIVE_BYTE_LIMIT,
} from './viewer-workload-policy'
import {
  DocumentReviewChrome,
  DocumentReviewToolbar,
} from '../document-review/DocumentReviewControls'
import { DocumentReviewInlineProvider } from '../document-review/DocumentReviewInlineSurface'
import {
  useDocumentReviewInteraction,
  type DocumentReviewDocumentProjection,
  type DocumentReviewWorkspaceBinding,
} from '../document-review/use-document-review-interaction'

interface FileViewerProps {
  readonly tab?: ViewerTab
  readonly gitRefreshVersion: number
  readonly onMode: (mode: ViewMode, position?: ViewerDocumentPosition) => void
  readonly onDiffBase: (base: DiffBase) => void
  readonly onContent: (content: string) => void
  readonly onSave: () => void
  readonly onReload: () => void
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly onNavigationHandled: (serial: number) => void
  readonly registerCommands: RegisterViewerCommandTarget
  readonly onOpenPath: (path: HostPath) => void
  readonly onRenderedDependencies: (tabId: string, paths: readonly HostPath[]) => void
  readonly documentReview?: DocumentReviewWorkspaceBinding
}

export function FileViewer({
  tab,
  gitRefreshVersion,
  onMode,
  onDiffBase,
  onContent,
  onSave,
  onReload,
  onPosition,
  onNavigationHandled,
  registerCommands,
  onOpenPath,
  onRenderedDependencies,
  documentReview,
}: FileViewerProps): ReactElement {
  const [showBlame, setShowBlame] = useState(false)
  const [modeControlExpanded, setModeControlExpanded] = useState(false)
  const [manualNavigation, setManualNavigation] = useState<ViewerNavigationPosition>()
  const [findTarget, setFindTarget] = useState<ViewerFindTarget>()
  const [findRequest, setFindRequest] = useState<number>()
  const [goToLineRequest, setGoToLineRequest] = useState<number>()
  const manualNavigationSerial = useRef(0)
  const commandSerial = useRef(0)
  const modeControlRef = useRef<HTMLDivElement>(null)
  const tabId = tab?.id
  const currentPath = tab?.path
  const blameMode = tab?.externalWorkspaceRoot ? undefined : tab?.mode
  const positionCapture = useRef<(() => ViewerDocumentPosition) | undefined>(undefined)
  const binaryImage = Boolean(tab?.file?.binary && renderedFileType(tab.path) === 'image')
  const boundedPreview = Boolean(
    tab?.file && tab.file.size > SOURCE_INTERACTIVE_BYTE_LIMIT,
  )
  const navigationContent =
    tab?.file && !tab.file.binary
      ? boundedPreview
        ? sourcePreview(tab.file.content)
        : tab.file.content
      : undefined
  const documentRefreshVersion = tab?.refresh?.version ?? 0
  const { blame, blameStatus } = useSourceBlame(
    currentPath,
    blameMode,
    showBlame,
    documentRefreshVersion,
    gitRefreshVersion,
  )

  const registerFindTarget: RegisterViewerFindTarget = useCallback((target) => {
    setFindTarget(target)
    let active = true
    return () => {
      if (!active) return
      active = false
      setFindTarget((current) => (current === target ? undefined : current))
    }
  }, [])

  const reportRenderedDependencies = useCallback(
    (paths: readonly HostPath[]): void => {
      if (tabId) onRenderedDependencies(tabId, paths)
    },
    [onRenderedDependencies, tabId],
  )

  const navigate = useCallback(
    (coordinate: SourceCoordinate): void => {
      setManualNavigation({
        ...coordinate,
        serial: (manualNavigationSerial.current -= 1),
        focus: true,
      })
      onMode('source', positionCapture.current?.())
    },
    [onMode],
  )
  const navigateReviewLine = useCallback(
    (line: number): void => navigate({ line }),
    [navigate],
  )
  const reviewInteraction = useDocumentReviewInteraction(
    tab?.file && !tab.file.binary && !tab.externalWorkspaceRoot
      ? {
          path: tab.path,
          content: tab.file.content,
          dirty: tab.dirty,
          mode: tab.mode,
        }
      : undefined,
    documentReview,
    navigateReviewLine,
  )

  const handleNavigation = (serial: number): void => {
    if (manualNavigation?.serial === serial) setManualNavigation(undefined)
    else onNavigationHandled(serial)
  }

  useEffect(() => {
    if (!tabId) return
    return registerCommands(tabId, {
      findInFile: () => setFindRequest((commandSerial.current += 1)),
      goToLine: () => setGoToLineRequest((commandSerial.current += 1)),
    })
  }, [registerCommands, tabId])

  useEffect(() => {
    if (!modeControlExpanded) return
    const collapseOutside = (event: PointerEvent): void => {
      if (
        event.target instanceof Node &&
        !modeControlRef.current?.contains(event.target)
      ) {
        setModeControlExpanded(false)
      }
    }
    document.addEventListener('pointerdown', collapseOutside, true)
    return () => document.removeEventListener('pointerdown', collapseOutside, true)
  }, [modeControlExpanded])

  return (
    <div className="viewer-body">
      {tab ? (
        <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
          {tab.conflict ? (
            <button className="conflict-badge" type="button" onClick={onReload}>
              Changed on disk · reload
            </button>
          ) : null}
          {tab.error && tab.file ? (
            <span className="viewer-operation-error" role="status" title={tab.error}>
              Save failed
            </span>
          ) : null}
          <div className="view-controls">
            {tab.externalWorkspaceRoot ? (
              <span className="external-document-status">
                Read-only · outside project
                <span
                  className="external-document-location"
                  title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
                >
                  {tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:
                  {tab.file?.resolvedPath?.path ?? tab.path.path}
                </span>
              </span>
            ) : null}
            <DocumentReviewToolbar interaction={reviewInteraction} mode={tab.mode} />
            <FindControl
              key={`${tab.id}:${tab.pane}:${tab.mode}`}
              requestSerial={findRequest}
              target={findTarget}
              unavailable={viewerFindUnavailable(tab)}
              boundedPreview={boundedPreview && tab.mode !== 'rendered'}
              onRequestHandled={(serial) =>
                setFindRequest((current) => (current === serial ? undefined : current))
              }
            />
            <GoToLineControl
              requestSerial={goToLineRequest}
              content={navigationContent}
              boundedPreview={boundedPreview}
              onRequestHandled={(serial) =>
                setGoToLineRequest((current) =>
                  current === serial ? undefined : current,
                )
              }
              onNavigate={navigate}
            />
            {tab.mode === 'diff' && !tab.diffRevision ? (
              <select
                className="diff-base-select"
                aria-label="Diff base"
                value={tab.diffBase}
                onChange={(event) => onDiffBase(event.currentTarget.value as DiffBase)}
              >
                <option value="working-tree">Index</option>
                <option value="head">HEAD</option>
                <option value="branch-point">Branch point</option>
              </select>
            ) : null}
            {tab.mode === 'source' && !tab.externalWorkspaceRoot ? (
              <button
                type="button"
                className={`blame-toggle${showBlame ? ' active' : ''}`}
                aria-pressed={showBlame}
                onClick={() => setShowBlame((shown) => !shown)}
              >
                Blame
              </button>
            ) : null}
            <div
              ref={modeControlRef}
              className={`mode-control${modeControlExpanded ? ' expanded' : ''}`}
              role="group"
              aria-label="View mode"
              onFocus={(event) => {
                if (
                  event.target instanceof HTMLElement &&
                  event.target.matches(':focus-visible')
                ) {
                  setModeControlExpanded(true)
                }
              }}
              onBlur={(event) => {
                if (
                  !(event.relatedTarget instanceof Node) ||
                  !event.currentTarget.contains(event.relatedTarget)
                ) {
                  setModeControlExpanded(false)
                }
              }}
            >
              {(['rendered', 'source', 'diff'] as const).map((mode) => (
                <button
                  type="button"
                  className={tab.mode === mode ? 'active' : ''}
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/project-host/ssh-config.ts (lines 1-280)

<details>
<summary>46 lines</summary>

```
import SSHConfig from 'ssh-config'

export interface SshAliasConfig {
  readonly alias: string
  readonly hostname: string
  readonly user: string
  readonly port: number
  readonly identityFiles: readonly string[]
}

export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
  const parsed = SSHConfig.parse(text)
  const aliases = parsed.flatMap((line): string[] => {
    if (!('param' in line) || !('config' in line)) return []
    const section = line
    if (section.param.toLowerCase() !== 'host') return []
    const value =
      typeof section.value === 'string'
        ? section.value
        : section.value.map((part) => part.val).join(' ')
    return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
  })
  return [...new Set(aliases)].map((alias) => {
    const values = parsed.compute(alias, { ignoreCase: true, matchExec: false })
    const one = (value: string | string[] | undefined): string | undefined =>
      Array.isArray(value) ? value[0] : value
    const hostname = one(values['hostname']) ?? alias
    const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
    const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
    const rawIdentity = values['identityfile']
    const identityFiles = (
      Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
    ).map((path) =>
      path
        .replace(/^~(?=\/|$)/, home)
        .replaceAll('%d', home)
        .replaceAll('%h', hostname)
        .replaceAll('%r', user),
    )
    return {
      alias,
      hostname,
      user,
      port: Number.isFinite(rawPort) ? rawPort : 22,
      identityFiles,
    }
  })
}
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/sessions/SessionsOverview.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/sessions/SessionsOverview.tsx (lines 1-240)

<details>
<summary>232 lines</summary>

```
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactElement,
} from 'react'

import type {
  ProjectState,
  SessionsLivePtyQualifier,
  SessionsOpenUnavailableReason,
  SessionsProjectionRow,
  SessionsTerminalHandle,
  SessionsWorkspaceQualifier,
} from '../../../shared'
import { SessionsOverviewCard } from './SessionsOverviewCard'
import { SessionsOverviewNotice } from './SessionsOverviewNotice'
import { SessionsCollectionToolbar } from './SessionsCollectionToolbar'
import { SessionsTerminalDetail } from './SessionsTerminalDetail'
import {
  SessionsProjectionCoordinator,
  createSessionsMainObservationPort,
} from './sessions-projection-coordinator'
import type { SessionsRendererObservationPort } from './sessions-renderer-observation'
import { sessionsTerminalOverlayOrigin } from './sessions-terminal-overlay'
import {
  sessionsTerminalSurfaceEligible,
  type SessionsTerminalSurfacePort,
} from './sessions-terminal-surface'
import { useSessionsForeground } from './use-sessions-foreground'
import { useSessionsTerminalDetail } from './use-sessions-terminal-detail'
import {
  DEFAULT_SESSIONS_OVERVIEW_POLICY,
  SESSIONS_OVERVIEW_PAGE_SIZE,
  sessionsOverviewFocusFallback,
  sessionsOverviewCardIdentity,
  sessionsOverviewGroups,
  sessionsOverviewPage,
  sessionsOverviewPolicyLabel,
  sessionsOverviewRows,
  sessionsOverviewWorkspaces,
  type SessionsOverviewPolicy,
} from './sessions-overview-model'

interface SessionsOverviewProps {
  readonly observation: SessionsRendererObservationPort
  readonly surface: SessionsTerminalSurfacePort
  readonly onOpened: (state: ProjectState) => void
  readonly onFocusOpened: (
    handle: SessionsTerminalHandle,
    workspaceQualifier: SessionsWorkspaceQualifier,
    livePty: SessionsLivePtyQualifier,
  ) => Promise<boolean>
  readonly onOpenFailed: (message: string) => void
}

export function SessionsOverview({
  observation,
  surface,
  onOpened,
  onFocusOpened,
  onOpenFailed,
}: SessionsOverviewProps): ReactElement {
  const coordinator = useRef<SessionsProjectionCoordinator | undefined>(undefined)
  coordinator.current ??= new SessionsProjectionCoordinator(
    createSessionsMainObservationPort(window.hvir),
    observation,
  )
  const source = coordinator.current
  const foreground = useSessionsForeground()
  const snapshot = useSyncExternalStore(
    source.subscribe,
    source.snapshot,
    source.snapshot,
  )
  const { controller: detail, state: detailState } = useSessionsTerminalDetail({
    surface,
    snapshot,
    foreground,
  })
  const [policy, setPolicy] = useState<SessionsOverviewPolicy>(
    DEFAULT_SESSIONS_OVERVIEW_POLICY,
  )
  const [selected, setSelected] = useState<SessionsTerminalHandle>()
  const [feedback, setFeedback] = useState<string>()
  const [opening, setOpening] = useState<SessionsTerminalHandle>()
  const detailOrigin = useRef<ReturnType<typeof sessionsTerminalOverlayOrigin>>(undefined)
  const [pageIndex, setPageIndex] = useState(0)
  const previousOrder = useRef<readonly SessionsTerminalHandle[]>([])
  const pendingFocus = useRef<SessionsTerminalHandle | undefined>(undefined)
  const rowElements = useRef(new Map<SessionsTerminalHandle, HTMLElement>())
  const collectionControl = useRef<HTMLButtonElement>(null)
  const openGeneration = useRef(0)

  useEffect(() => {
    if (!foreground) return
    const release = source.acquire()
    return release
  }, [foreground, source])
  useEffect(() => {
    if (foreground) return
    openGeneration.current += 1
    rowElements.current.clear()
    setOpening(undefined)
    detailOrigin.current = undefined
    setFeedback(undefined)
    pendingFocus.current = undefined
  }, [foreground])
  useEffect(
    () => () => {
      openGeneration.current += 1
    },
    [],
  )

  const allGroups = useMemo(
    () => sessionsOverviewGroups(snapshot.rows, policy),
    [policy, snapshot.rows],
  )
  const rows = useMemo(() => sessionsOverviewRows(allGroups), [allGroups])
  const handles = useMemo(() => rows.map((row) => row.handle), [rows])
  const page = useMemo(
    () => sessionsOverviewPage(allGroups, pageIndex),
    [allGroups, pageIndex],
  )
  useEffect(() => {
    if (!foreground || snapshot.status !== 'available') return
    if (page.pageIndex !== pageIndex) setPageIndex(page.pageIndex)
  }, [foreground, page.pageIndex, pageIndex, snapshot.status])
  useEffect(() => {
    if (!foreground || snapshot.status !== 'available') return
    const selectedDisappeared = selected !== undefined && !handles.includes(selected)
    const next = sessionsOverviewFocusFallback(previousOrder.current, handles, selected)
    previousOrder.current = handles
    const nextIndex = next ? handles.indexOf(next) : -1
    if (nextIndex >= 0) {
      const nextPage = Math.floor(nextIndex / SESSIONS_OVERVIEW_PAGE_SIZE)
      if (nextPage !== pageIndex) setPageIndex(nextPage)
    }
    if (next !== selected) {
      setSelected(next)
    }
    if (selectedDisappeared && document.activeElement === document.body) {
      if (next) pendingFocus.current = next
      else collectionControl.current?.focus()
    }
  }, [foreground, handles, pageIndex, selected, snapshot.status])
  useEffect(() => {
    const handle = pendingFocus.current
    if (!handle || !page.rows.some((row) => row.handle === handle)) return
    pendingFocus.current = undefined
    rowElements.current.get(handle)?.focus()
  }, [page.rows])
  useLayoutEffect(() => {
    if (detailState.status !== 'inactive') return
    const handle = pendingFocus.current
    if (!handle) return
    pendingFocus.current = undefined
    const row = rowElements.current.get(handle)
    if (row) row.focus()
    else collectionControl.current?.focus()
  }, [detailState.status])

  const updatePolicy = <K extends keyof SessionsOverviewPolicy>(
    key: K,
    value: SessionsOverviewPolicy[K],
  ): void => {
    setPolicy((current) => ({ ...current, [key]: value }))
    setSelected(undefined)
    setPageIndex(0)
    setFeedback(undefined)
  }

  const open = useCallback(
    async (row: SessionsProjectionRow): Promise<void> => {
      if (opening) return
      const captured = source.snapshot()
      const generation = (openGeneration.current += 1)
      setOpening(row.handle)
      setFeedback('Opening exact terminal…')
      try {
        const result = await window.hvir.invoke('sessions:open', {
          demandGeneration: captured.demandGeneration,
          sourceRevision: captured.sourceRevision,
          handle: row.handle,
          projectId: row.project.id,
          workspaceId: row.workspace.id,
          workspaceQualifier: row.workspace.qualifier,
          livePty: row.livePty,
        })
        if (generation !== openGeneration.current) return
        if (result.outcome === 'unavailable') {
          setFeedback(
            openUnavailableMessage(
              source.snapshot().revision !== captured.revision
                ? 'stale-projection'
                : result.reason,
            ),
          )
          return
        }
        onOpened(result.state)
        const focused = await onFocusOpened(
          result.handle,
          result.workspaceQualifier,
          result.livePty,
        )
        if (!focused)
          onOpenFailed('The exact terminal changed before it could receive focus')
      } catch {
        if (generation === openGeneration.current) {
          setFeedback('The exact terminal could not be opened')
        }
      } finally {
        if (generation === openGeneration.current) setOpening(undefined)
      }
    },
    [onFocusOpened, onOpenFailed, onOpened, opening, source],
  )

  const openDetailWorkspace = useCallback((): void => {
    const handle = detail.selectedHandle()
    if (handle) pendingFocus.current = handle
    detail.close()
    detailOrigin.current = undefined
    if (!handle) {
      setFeedback(openUnavailableMessage('session-unavailable'))
      return
    }
    const row = source.snapshot().rows.find((candidate) => candidate.handle === handle)
    if (!row) {
      setFeedback(openUnavailableMessage('session-unavailable'))
      return
    }
    void open(row)
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/scripts/install-git-hooks.sh.**

/private/var/tmp/ws/39e7ce18/hvir/scripts/install-git-hooks.sh (lines 1-180)

<details>
<summary>12 lines</summary>

```
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
```

</details>


---

<sub>42s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/.githooks/pre-push.**

/private/var/tmp/ws/39e7ce18/hvir/.githooks/pre-push (lines 1-160)

<details>
<summary>18 lines</summary>

```
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
```

</details>


---

<sub>54s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/project-host/project-host-catalog.ts (lines 1-260)

<details>
<summary>201 lines</summary>

```
import { homedir } from 'node:os'
import { join } from 'node:path'

import { localPath, type HostPath, type ProjectHostOption } from '../../shared'
import { LocalHost } from './local-host'
import type { Disposer, ProjectHost } from './project-host'
import type { SshAuthPrompter } from './ssh-auth'
import { parseSshConfig, type SshAliasConfig } from './ssh-config'
import { SshHost } from './ssh-host'
import { SshHostTrustStore } from './ssh-host-trust'
import { LocalSshIdentitySource } from './ssh-identity-source'

export interface ProjectHostCatalogOptions {
  readonly prompter: SshAuthPrompter
  readonly trustFile: HostPath
  readonly home?: string
  readonly agentSocket?: string
  readonly trashItem?: (path: HostPath) => Promise<void>
}

/** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
export class ProjectHostCatalog {
  readonly local: LocalHost
  private readonly hosts = new Map<string, ProjectHost>()
  private readonly pendingHosts = new Map<string, Promise<ProjectHost>>()
  private readonly hostStateDisposers = new Map<string, Disposer>()
  private readonly listeners = new Set<() => void>()
  private disposed = false
  private disposal?: Promise<void>

  private constructor(
    local: LocalHost,
    private readonly aliases: readonly SshAliasConfig[],
    private readonly prompter: SshAuthPrompter,
    private readonly trust: SshHostTrustStore,
    private readonly home: string,
    private readonly agentSocket: string | undefined,
  ) {
    this.local = local
    this.hosts.set(local.hostId, local)
  }

  static async create(options: ProjectHostCatalogOptions): Promise<ProjectHostCatalog> {
    const local = new LocalHost({ trashItem: options.trashItem })
    try {
      await local.connect()
      const home = options.home ?? homedir()
      const aliases = await loadSshAliases(local, home)
      const trust = await SshHostTrustStore.load(local, options.trustFile)
      return new ProjectHostCatalog(
        local,
        aliases,
        options.prompter,
        trust,
        home,
        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
      )
    } catch (error) {
      await local.dispose()
      throw error
    }
  }

  onHostStateChange(listener: () => void): Disposer {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  listHosts(): readonly ProjectHostOption[] {
    return [
      hostOption(this.local, 'Local', 'local'),
      ...this.aliases.map((config) => {
        const host = this.hosts.get(config.alias)
        return host
          ? hostOption(host, config.alias, 'ssh')
          : {
              hostId: config.alias,
              label: config.alias,
              kind: 'ssh' as const,
              connectionState: 'disconnected' as const,
              watchTier: 'polling' as const,
            }
      }),
    ]
  }

  hostById(hostId: string): ProjectHost | undefined {
    return this.hosts.get(hostId)
  }

  connectedHosts(): readonly ProjectHost[] {
    return [...this.hosts.values()].filter(
      ({ connectionState }) => connectionState === 'connected',
    )
  }

  materializeHost(hostId: string): Promise<ProjectHost> {
    if (this.disposed)
      return Promise.reject(new Error('Project host catalog is disposed'))
    const existing = this.hosts.get(hostId)
    if (existing) return Promise.resolve(existing)
    const pending = this.pendingHosts.get(hostId)
    if (pending) return pending
    const creation = Promise.resolve()
      .then(() => this.createSshHost(hostId))
      .finally(() => {
        if (this.pendingHosts.get(hostId) === creation) this.pendingHosts.delete(hostId)
      })
    this.pendingHosts.set(hostId, creation)
    return creation
  }

  async disconnectHost(hostId: string): Promise<ProjectHostOption> {
    if (hostId === this.local.hostId) throw new Error('The local host cannot disconnect')
    const host = this.hosts.get(hostId)
    if (!host) throw new Error(`SSH host is not connected: ${hostId}`)
    await host.dispose()
    return hostOption(host, hostId, 'ssh')
  }

  async disconnectSshHosts(): Promise<void> {
    await Promise.all(
      [...this.hosts.values()]
        .filter((host) => host.hostId !== this.local.hostId)
        .map((host) => host.dispose()),
    )
  }

  dispose(): Promise<void> {
    if (this.disposal) return this.disposal
    this.disposed = true
    this.disposal = this.disposeOwnedHosts()
    return this.disposal
  }

  private async disposeOwnedHosts(): Promise<void> {
    await Promise.all(
      [...this.pendingHosts.values()].map((pending) => pending.catch(() => undefined)),
    )
    for (const dispose of this.hostStateDisposers.values()) await dispose()
    this.hostStateDisposers.clear()
    await Promise.all([...this.hosts.values()].map((host) => host.dispose()))
    this.listeners.clear()
  }

  private createSshHost(hostId: string): ProjectHost {
    const config = this.aliases.find((candidate) => candidate.alias === hostId)
    if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
    if (this.disposed) throw new Error('Project host catalog is disposed')
    const existing = this.hosts.get(hostId)
    if (existing) return existing
    const host = new SshHost({
      config,
      identitySource: new LocalSshIdentitySource(
        this.local,
        identityFileCandidates(config, this.home),
      ),
      agentSocket: this.agentSocket,
      prompter: this.prompter,
      trust: this.trust.forAlias(config.alias),
    })
    this.hosts.set(hostId, host)
    this.hostStateDisposers.set(
      hostId,
      host.onConnectionState(() => {
        for (const listener of this.listeners) listener()
      }),
    )
    return host
  }
}

const DEFAULT_IDENTITY_NAMES = [
  'id_rsa',
  'id_ecdsa',
  'id_ecdsa_sk',
  'id_ed25519',
  'id_ed25519_sk',
  'id_xmss',
  'id_dsa',
] as const

/** OpenSSH's conventional identity set applies when no IdentityFile is configured. */
export function identityFileCandidates(
  config: SshAliasConfig,
  home = homedir(),
): readonly string[] {
  if (config.identityFiles.length) return [...new Set(config.identityFiles)]
  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
}

async function loadSshAliases(
  host: LocalHost,
  home: string,
): Promise<readonly SshAliasConfig[]> {
  try {
    return parseSshConfig(
      await host.readTextFile(localPath(join(home, '.ssh/config'))),
      home,
    )
  } catch {
    return []
  }
}

function hostOption(
  host: ProjectHost,
  label: string,
  kind: 'local' | 'ssh',
): ProjectHostOption {
  return {
    hostId: host.hostId,
    label,
    kind,
    connectionState: host.connectionState,
    watchTier: host.watchTier,
  }
}
```

</details>


---

<sub>54s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/shared/viewer-types.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/shared/viewer-types.ts (lines 1-260)

<details>
<summary>88 lines</summary>

```
import type { HostPath } from './host-path'
import { repositoryImageMimeType } from './rendered-link'
import type { TextWorkload } from './viewer-workload-policy'

export type ViewMode = 'rendered' | 'source' | 'diff'

export type DiffBase = 'working-tree' | 'head' | 'branch-point'

export interface WriteFileRequest {
  readonly path: HostPath
  readonly content: string
  /** Omitted for recovered drafts that have no trustworthy disk version. */
  readonly expectedMtimeMs?: number
}

export interface WriteFileResponse {
  readonly path: HostPath
  readonly size: number
  readonly mtimeMs: number
}

export interface GitDiffRequest {
  readonly path: HostPath
  readonly base: DiffBase
  /** Commit whose parent/current blobs form a historical diff. */
  readonly revision?: string
}

export interface GitDiffResponse {
  readonly path: HostPath
  readonly base: DiffBase
  readonly revision?: string
  readonly baseLabel: string
  readonly currentLabel: string
  readonly baseInput: TextWorkload
  readonly currentInput: TextWorkload
}

/**
 * The one extension point for the smart default in ADR-007. Keep inference
 * deterministic and visible rather than scattering file-type exceptions
 * through UI components.
 */
export type FileOpenContext = 'file-tree' | 'created-file' | 'git' | 'git-untracked'

export function defaultViewMode(
  path: HostPath,
  context: FileOpenContext = 'file-tree',
): ViewMode {
  if (context === 'created-file') return 'source'
  if (context === 'git') return 'diff'
  const name = path.path.toLowerCase()
  const extension = name.includes('.') ? name.slice(name.lastIndexOf('.') + 1) : ''
  return RENDERED_EXTENSIONS.has(extension) ? 'rendered' : 'source'
}

export function canRender(path: HostPath): boolean {
  return defaultViewMode(path) === 'rendered'
}

export type RenderedFileType =
  'markdown' | 'mermaid' | 'html' | 'json' | 'yaml' | 'csv' | 'image'

export function renderedFileType(path: HostPath): RenderedFileType | undefined {
  const name = path.path.toLowerCase()
  const extension = name.includes('.') ? name.slice(name.lastIndexOf('.') + 1) : ''
  if (repositoryImageMimeType(name)) return 'image'
  if (extension === 'md' || extension === 'mdx' || extension === 'markdown') {
    return 'markdown'
  }
  if (extension === 'mmd' || extension === 'mermaid') return 'mermaid'
  if (extension === 'htm' || extension === 'html') return 'html'
  if (extension === 'json') return 'json'
  if (extension === 'yaml' || extension === 'yml') return 'yaml'
  if (extension === 'csv') return 'csv'
  return undefined
}

const RENDERED_EXTENSIONS = new Set([
  'htm',
  'html',
  'json',
  'yaml',
  'yml',
  'markdown',
  'md',
  'mdx',
  'mermaid',
  'mmd',
  'csv',
  'avif',
  'bmp',
  'gif',
  'ico',
  'jpeg',
  'jpg',
  'png',
  'svg',
  'webp',
])
```

</details>


---

<sub>54s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/viewer/RenderedView.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/viewer/RenderedView.tsx (lines 1-260)

<details>
<summary>248 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type RefObject,
} from 'react'

import {
  HTML_SANDBOX,
  renderedFileType,
  type CreateHtmlPreviewResponse,
  type HostPath,
} from '../../../shared'
import { renderMarkdown, resetMarkdownRenderer } from './markdown-client'
import { DomFindTarget } from './dom-find-target'
import { handleRenderedLinkClick } from './rendered-link-handler'
import type {
  JsonNodeDescriptor,
  JsonWorkerRequestInput,
  JsonWorkerResponse,
} from './json-protocol'
import { useAppTheme } from '../theme'
import type { CsvTableData } from './csv-parser'
import type { CsvWorkerResponse } from './csv-protocol'
import type { ViewerDocumentPosition, ViewerDocumentRefresh } from './tab-state'
import type { RegisterViewerFindTarget } from './viewer-find'
import { captureRenderedPosition, restoreRenderedPosition } from './rendered-position'
import { documentLineCount, type ViewerPositionCapture } from './viewer-position'
import { RepositoryImageView } from './RepositoryImageView'
import { MarkdownRepositoryImages } from './markdown-repository-images'
import { bindRenderedDocumentReview } from '../document-review/document-review-rendered'
import { useDocumentReviewInlineHostRegistration } from '../document-review/document-review-inline'
import type { DocumentReviewDocumentProjection } from '../document-review/use-document-review-interaction'

let jsonWorker: Worker | undefined
let jsonRequestId = 0
let jsonDocumentId = 0
let mermaidRequestId = 0
let mermaidPromise: Promise<typeof import('mermaid').default> | undefined
let csvWorker: Worker | undefined
let csvRequestId = 0

function getJsonWorker(): Worker {
  jsonWorker ??= new Worker(new URL('./json.worker.ts', import.meta.url), {
    type: 'module',
  })
  return jsonWorker
}

function getCsvWorker(): Worker {
  csvWorker ??= new Worker(new URL('./csv.worker.ts', import.meta.url), {
    type: 'module',
  })
  return csvWorker
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    jsonWorker?.terminate()
    jsonWorker = undefined
    csvWorker?.terminate()
    csvWorker = undefined
  })
}

interface RenderedViewProps {
  readonly path: HostPath
  readonly content: string
  readonly position: ViewerDocumentPosition
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly positionCapture: ViewerPositionCapture
  readonly onOpenPath: (path: HostPath) => void
  readonly refresh?: ViewerDocumentRefresh
  readonly onDependencies: (paths: readonly HostPath[]) => void
  readonly registerFindTarget: RegisterViewerFindTarget
  readonly documentReview?: DocumentReviewDocumentProjection
}

export function RenderedView({
  path,
  content,
  position,
  onPosition,
  positionCapture,
  onOpenPath,
  refresh,
  onDependencies,
  registerFindTarget,
  documentReview,
}: RenderedViewProps): ReactElement {
  const renderGeneration = useDevRendererGeneration()
  const theme = useAppTheme()
  const type = renderedFileType(path)
  if (type === 'image') {
    return <RepositoryImageView path={path} refreshVersion={refresh?.version ?? 0} />
  }
  if (type === 'csv') {
    return (
      <CsvView
        content={content}
        position={position}
        onPosition={onPosition}
        positionCapture={positionCapture}
        renderGeneration={renderGeneration}
        registerFindTarget={registerFindTarget}
      />
    )
  }
  if (type === 'html') {
    return (
      <HtmlPreview path={path} content={content} renderGeneration={renderGeneration} />
    )
  }
  if (type === 'json' || type === 'yaml') {
    return (
      <StructuredDataView
        content={content}
        format={type}
        renderGeneration={renderGeneration}
        position={position}
        onPosition={onPosition}
        positionCapture={positionCapture}
        registerFindTarget={registerFindTarget}
      />
    )
  }
  if (type === 'mermaid') {
    return (
      <StandaloneMermaid
        content={content}
        renderGeneration={renderGeneration}
        theme={theme}
        registerFindTarget={registerFindTarget}
      />
    )
  }
  if (type === 'markdown') {
    return (
      <MarkdownView
        path={path}
        content={content}
        position={position}
        onPosition={onPosition}
        positionCapture={positionCapture}
        onOpenPath={onOpenPath}
        renderGeneration={renderGeneration}
        refresh={refresh}
        onDependencies={onDependencies}
        theme={theme}
        registerFindTarget={registerFindTarget}
        documentReview={documentReview}
      />
    )
  }
  return <div className="viewer-empty">No rendered view for this file type</div>
}

function CsvView({
  content,
  position,
  onPosition,
  positionCapture,
  renderGeneration,
  registerFindTarget,
}: {
  readonly content: string
  readonly position: ViewerDocumentPosition
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly positionCapture: ViewerPositionCapture
  readonly renderGeneration: number
  readonly registerFindTarget: RegisterViewerFindTarget
}): ReactElement {
  const container = useRef<HTMLDivElement>(null)
  const [table, setTable] = useState<CsvTableData>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    let cancelled = false
    setTable(undefined)
    setError(undefined)
    void requestCsv(content).then(
      (parsed) => {
        if (!cancelled) setTable(parsed)
      },
      (reason: unknown) => {
        if (!cancelled)
          setError(reason instanceof Error ? reason.message : String(reason))
      },
    )
    return () => {
      cancelled = true
    }
  }, [content, renderGeneration])

  useRenderedPosition(container, content, position, onPosition, positionCapture, table)
  useRenderedFindTarget(container, table, registerFindTarget)

  if (error) return <div className="viewer-empty error">Invalid CSV: {error}</div>
  if (!table) return <div className="viewer-empty">Parsing CSV…</div>
  const [headings = [], ...rows] = table.rows
  const visibleColumns = table.rows.reduce(
    (maximum, row) => Math.max(maximum, row.length),
    0,
  )
  const columnIndexes = Array.from({ length: visibleColumns }, (_, index) => index)
  const notes = [
    table.truncated
      ? `Showing ${table.rows.length.toLocaleString()} of ${table.totalRows.toLocaleString()} rows`
      : undefined,
    table.columnsTruncated
      ? `first ${visibleColumns.toLocaleString()} of ${table.totalColumns.toLocaleString()} columns`
      : undefined,
  ].filter((note): note is string => Boolean(note))
  return (
    <div className="rendered-scroll csv-view" ref={container}>
      {notes.length > 0 ? <div className="csv-note">{notes.join(' · ')}</div> : null}
      <table>
        <thead>
          <tr data-source-line="1">
            {columnIndexes.map((index) => {
              const heading = headings[index] ?? ''
              return (
                <th key={index} title={heading}>
                  {heading || `Column ${index + 1}`}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} data-source-line={rowIndex + 2}>
              {columnIndexes.map((columnIndex) => (
                <td key={columnIndex} title={row[columnIndex] ?? ''}>
                  {row[columnIndex] ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function HtmlPreview({
  path,
  content,
  renderGeneration,
}: {
  readonly path: HostPath
  readonly content: string
  readonly renderGeneration: number
}): ReactElement {
  const workspaceRoot = useContext(ExternalDocumentWorkspace)
  const [preview, setPreview] = useState<CreateHtmlPreviewResponse>()
  const [error, setError] = useState<string>()
```

</details>


---

<sub>54s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/terminal/harness-launch-menu.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/terminal/harness-launch-menu.ts (lines 1-260)

<details>
<summary>60 lines</summary>

```
import type {
  HarnessProfile,
  HarnessProfileProbe,
  HarnessProviderCapabilities,
  HarnessProviderDescriptor,
} from '../../../shared'

export interface HarnessLaunchMenuState {
  readonly availability: 'unchecked' | 'checking' | 'available' | 'stale' | 'failed'
  readonly probe?: HarnessProfileProbe
}

export function bareShellLaunchChoice(
  providers: readonly HarnessProviderDescriptor[],
  profiles: readonly HarnessProfile[],
):
  | {
      readonly provider: HarnessProviderDescriptor
      readonly profile: HarnessProfile
    }
  | undefined {
  const provider = providers.find((candidate) => candidate.default)
  const profile = provider
    ? profiles.find(
        (candidate) => candidate.builtIn && candidate.providerId === provider.id,
      )
    : undefined
  return provider && profile ? { provider, profile } : undefined
}

export function harnessLaunchMenuState(
  profile: HarnessProfile,
  current: HarnessProfileProbe | undefined,
  checking: boolean,
  now = Date.now(),
): HarnessLaunchMenuState {
  if (profile.builtIn) return { availability: 'available' }
  if (checking) return { availability: 'checking', probe: current }
  if (!current || current.status === 'unchecked') {
    return { availability: 'unchecked', probe: current }
  }
  if (current.expiresAt !== undefined && current.expiresAt <= now) {
    return { availability: 'stale', probe: current }
  }
  return {
    availability: current.status === 'available' ? 'available' : 'failed',
    probe: current,
  }
}

export function compactHarnessCapabilityLabel(
  shellProvider: boolean,
  capabilities: HarnessProviderCapabilities | undefined,
): 'Integrated' | 'Launch only' | undefined {
  if (shellProvider) return undefined
  if (
    capabilities?.exactResume === true &&
    capabilities.sessionIdentity !== 'none' &&
    capabilities.contextPresentation !== 'none'
  ) {
    return 'Integrated'
  }
  return 'Launch only'
}
```

</details>


---

<sub>54s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx.**

/private/var/tmp/ws/39e7ce18/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx (lines 1-260)

<details>
<summary>191 lines</summary>

```
import { forwardRef, useImperativeHandle, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import { HarnessProfileEditor } from './HarnessProfileEditor'
import { HarnessProfileOverlays } from './HarnessProfileOverlays'
import { findProfileProbe, harnessProbeLabel } from './harness-profile-editor-policy'
import { SettingsSection } from './SettingsSection'
import { useHarnessProfileEditor } from './use-harness-profile-editor'

interface HarnessProfilesSettingsProps {
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialAddOpen?: boolean
}

export interface HarnessProfilesSettingsHandle {
  /** Resolves after the user saves, discards, or cancels an outstanding profile draft. */
  readonly confirmSafeToLeave: () => Promise<boolean>
}

export const HarnessProfilesSettings = forwardRef<
  HarnessProfilesSettingsHandle,
  HarnessProfilesSettingsProps
>(function HarnessProfilesSettings(
  { workspaceRoot, projectRoot, initialAddOpen = false },
  ref,
): ReactElement {
  const editor = useHarnessProfileEditor({
    workspaceRoot,
    projectRoot,
    initialAddOpen,
  })
  useImperativeHandle(ref, () => ({ confirmSafeToLeave: editor.confirmSafeToLeave }), [
    editor.confirmSafeToLeave,
  ])
  const actions =
    workspaceRoot && projectRoot ? (
      <div className="settings-harness-actions">
        <button
          type="button"
          disabled={editor.busy || editor.loadState !== 'ready'}
          onClick={() => editor.probeAvailability(editor.profiles, true)}
        >
          Refresh availability
        </button>
        <button
          type="button"
          disabled={editor.busy || editor.loadState !== 'ready' || !editor.shellProvider}
          onClick={() => editor.runAfterDraftGuard(editor.startShellProfile)}
        >
          Add a shell
        </button>
        <button
          type="button"
          disabled={
            editor.busy || editor.loadState !== 'ready' || editor.providers.length === 0
          }
          onClick={() => editor.runAfterDraftGuard(() => editor.setAddOpen(true))}
        >
          Add a harness…
        </button>
      </div>
    ) : null

  return (
    <SettingsSection
      section="harnesses"
      title="Harnesses"
      description="Configure structured launch profiles, availability, and recovery identity."
      actions={actions}
      className="settings-harnesses"
    >
      {!workspaceRoot || !projectRoot ? (
        <div className="settings-section-scroll settings-harness-state">
          <p>Open a project to configure harnesses.</p>
        </div>
      ) : editor.loadState === 'loading' ? (
        <div
          className="settings-section-scroll settings-harness-state"
          aria-live="polite"
        >
          <p>Loading harness providers…</p>
        </div>
      ) : editor.loadState === 'error' ? (
        <div className="settings-section-scroll settings-harness-state" role="alert">
          <p>Harness profiles could not be loaded.</p>
          {editor.error ? <p className="dialog-error">{editor.error}</p> : null}
          <button type="button" onClick={editor.reload}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="settings-harness-layout">
            <nav className="settings-profile-list" aria-label="Harness profiles">
              {editor.profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  className={editor.draft?.id === profile.id ? 'active' : undefined}
                  aria-current={editor.draft?.id === profile.id ? 'true' : undefined}
                  onClick={() => editor.selectProfile(profile)}
                >
                  <strong>{profile.displayName}</strong>
                  <small>
                    {editor.providers.find(
                      (candidate) => candidate.id === profile.providerId,
                    )?.displayName ?? profile.providerId}
                    {' · '}
                    {profile.scope.kind === 'global' ? 'All projects' : 'This project'}
                    {' · '}
                    {editor.pendingProbeIds.has(profile.id)
                      ? 'Checking…'
                      : harnessProbeLabel(
                          findProfileProbe(
                            editor.profileProbes,
                            profile,
                            workspaceRoot.hostId,
                          ),
                        )}
                  </small>
                </button>
              ))}
              {editor.draft && !editor.draft.id ? (
                <button type="button" className="active" aria-current="true">
                  <strong>{editor.draft.input.displayName || 'Untitled profile'}</strong>
                  <small>
                    {editor.provider?.displayName ?? editor.draft.input.providerId}
                    {' · '}
                    {editor.draft.input.scope.kind === 'global'
                      ? 'All projects'
                      : 'This project'}
                    {' · Unsaved'}
                  </small>
                </button>
              ) : null}
            </nav>
            {editor.draft ? (
              <HarnessProfileEditor
                draft={editor.draft}
                providers={editor.providers}
                provider={editor.provider}
                providerProbe={editor.providerProbe}
                previews={editor.previews}
                previewReadiness={editor.previewReadiness}
                previewError={editor.previewError}
                error={editor.error}
                busy={editor.busy}
                dirty={editor.dirty}
                deleteArmed={editor.deleteArmed}
                workspaceRoot={workspaceRoot}
                projectRoot={projectRoot}
                onUpdateInput={editor.updateInput}
                onArguments={editor.setArguments}
                onAuthorizeExecutable={() => void editor.authorizeExecutable()}
                onPickBinding={editor.openPicker}
                onDuplicate={() =>
                  editor.runAfterDraftGuard(() => void editor.duplicate())
                }
                onRemove={() => {
                  if (editor.deleteArmed) {
                    editor.runAfterDraftGuard(() => void editor.remove())
                  } else {
                    void editor.remove()
                  }
                }}
                onSave={() => void editor.save()}
              />
            ) : (
              <div className="settings-harness-empty">
                <strong>No configured harnesses yet</strong>
                <p>
                  Bare Shell remains available whenever you open a terminal. Add a profile
                  here only when you want custom shell or harness settings.
                </p>
                <div>
                  <button
                    type="button"
                    disabled={!editor.shellProvider}
                    onClick={editor.startShellProfile}
                  >
                    Add a shell
                  </button>
                  <button type="button" onClick={() => editor.setAddOpen(true)}>
                    Add a harness…
                  </button>
                </div>
              </div>
            )}
          </div>
          <HarnessProfileOverlays root={workspaceRoot} editor={editor} />
        </>
      )}
    </SettingsSection>
  )
})
```

</details>


---

<sub>54s</sub>

### `rg`

**label:|displayName:|description:|id: '**

"label:|displayName:|description:|id: '" in *.ts (src/main/harness/providers)

<details>
<summary>30 matches</summary>

```
[grep content: 22 matches across 7 file(s) under /private/var/tmp/ws/39e7ce18/hvir/src/main/harness/providers]

codex.ts (3 match(es)):
  46:     displayName: 'Codex',
  56:       displayName: 'Codex',
  57:       description: 'Codex with exact rollout discovery and recovery.',

github-copilot.ts (3 match(es)):
  7:     displayName: 'GitHub Copilot CLI',
  15:       displayName: 'GitHub Copilot CLI',
  16:       description:

shell.ts (4 match(es)):
  12:     displayName: 'Shell',
  21:       displayName: 'Shell',
  22:       description: 'The default interactive shell on this host.',
  47:     displayName: 'Custom',

gemini.ts (3 match(es)):
  7:     displayName: 'Gemini CLI',
  15:       displayName: 'Gemini CLI',
  16:       description:

pi.ts (3 match(es)):
  7:     displayName: 'Pi',
  15:       displayName: 'Pi',
  16:       description:

claude-code.ts (3 match(es)):
  31:     displayName: 'Claude Code',
  42:       displayName: 'Claude Code',
  43:       description: 'Claude Code with exact hvir-managed session recovery.',

cursor.ts (3 match(es)):
  7:     displayName: 'Cursor CLI',
  15:       displayName: 'Cursor CLI',
  16:       description:
```

</details>


---

<sub>54s</sub>

### `rg`

**README|documentation|contribut|Node.js|npm ci|build tools|Python|Xvfb|Ubuntu|macOS|Linux**

"README|documentation|contribut|Node.js|npm ci|build tools|Python|Xvfb|Ubuntu|macOS|Linux" in *.{yml,yaml,sh,mts,mjs,ts} (.github, scripts)

<details>
<summary>106 matches</summary>

```
[grep content: 538 matches across 46 file(s) under /private/var/tmp/ws/39e7ce18/hvir]

.github/workflows/smoke-stress.yml (13 match(es)):
  47:           - ubuntu-24.04
  48:           - macos-15
  50:           - os: ubuntu-24.04
  51:             name: Linux x64
  52:           - os: macos-15
  53:             name: macOS ARM64
  62:       - name: Set up Node.js
  69:         run: npm ci
  71:       - name: Run Linux stress attempts
  72:         if: runner.os == 'Linux'
  75:         run: xvfb-run -a npm run smoke:scenario
  77:       - name: Run macOS ARM64 stress attempts
  78:         if: runner.os == 'macOS'

.github/workflows/ci.yml (26 match(es)):
  26:     runs-on: ubuntu-24.04
  43:       - name: Set up Node.js
  60:     name: Verification (Linux)
  63:     runs-on: ubuntu-24.04
  78:       - name: Set up Node.js
  85:         run: npm ci
  93:     name: Electron smoke (Linux)
  96:     runs-on: ubuntu-24.04
  103:       - name: Set up Node.js
  110:         run: npm ci
  115:         run: xvfb-run -a npm run smoke
  120:         run: xvfb-run -a npm run smoke:development-performance
  123:         run: xvfb-run -a npm run smoke:isolation
  134:   macos-electron-smoke:
  136:     # remain available through local commands while their macOS flakes are hardened.
  137:     name: Electron correctness (macOS arm64; temporary reduced gate)
  140:     runs-on: macos-15
  147:       - name: Set up Node.js
  154:         run: npm ci
  158:           HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/macos-ci
  159:         run: npm run smoke:macos:ci
  161:       - name: Upload bounded macOS Electron failure evidence
  165:           name: ci-macos-electron-smoke-failure-${{ github.run_attempt }}
  174:     runs-on: ubuntu-24.04
  200:       - macos-electron-smoke
  203:     runs-on: ubuntu-24.04

scripts/ci-attempt-evidence.mts (3 match(es)):
  11:   'Verification (Linux)',
  12:   'Electron smoke (Linux)',
  13:   'Electron correctness (macOS arm64; temporary reduced gate)',

.github/workflows/release-pr-merged.yml (2 match(es)):
  22:     runs-on: ubuntu-24.04
  39:       - name: Set up Node.js

.github/workflows/macos-package-release.yml (45 match(es)):
  1: name: Signed macOS package
  16:       MACOS_APPLICATION_CERTIFICATE:
  18:       MACOS_APPLICATION_CERTIFICATE_PASSWORD:
  20:       MACOS_INSTALLER_CERTIFICATE:
  22:       MACOS_INSTALLER_CERTIFICATE_PASSWORD:
  24:       MACOS_NOTARY_KEY:
  26:       MACOS_NOTARY_KEY_ID:
  28:       MACOS_NOTARY_ISSUER_ID:
  30:       MACOS_TEAM_ID:
  36:   group: signed-macos-package
  41:     name: Sign, notarize, staple, and accept macOS arm64 package
  42:     runs-on: macos-15
  ... 21 more match(es) omitted in this file
  140:           CSC_INSTALLER_LINK: ${{ secrets.MACOS_INSTALLER_CERTIFICATE }}
  141:           CSC_INSTALLER_KEY_PASSWORD: ${{ secrets.MACOS_INSTALLER_CERTIFICATE_PASSWORD }}
  142:           APPLE_API_KEY_ID: ${{ secrets.MACOS_NOTARY_KEY_ID }}
  143:           APPLE_API_ISSUER: ${{ secrets.MACOS_NOTARY_ISSUER_ID }}
  148:           package=$(find dist -maxdepth 1 -type f -name 'hvir-*-macos-arm64.pkg' -print)
  150:             echo "::error::Expected exactly one macOS package"
  158:           HVIR_MACOS_PACKAGE_ACCEPTANCE: '1'
  159:           HVIR_MACOS_PACKAGE_MODE: signed
  160:           HVIR_MACOS_EXPECTED_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
  161:         run: npm run smoke:macos:installed
  170:           source="dist/hvir-${package_version}-macos-arm64.pkg"
  186:           name: release-macos-arm64

scripts/assemble-native-release.d.mts (2 match(es)):
  5:   readonly macosTeamId: string
  10:   readonly platform: 'linux' | 'macos'

.github/workflows/project-pr-planning.yml (4 match(es)):
  34:     runs-on: ubuntu-24.04
  50:       - name: Set up Node.js
  72:     runs-on: ubuntu-24.04
  88:       - name: Set up Node.js
scripts/installed-startup-probe.mts:263:     ...(process.platform === 'linux'

.github/workflows/project-kind.yml (4 match(es)):
  34:     runs-on: ubuntu-24.04
  49:       - name: Set up Node.js
  71:     runs-on: ubuntu-24.04
  86:       - name: Set up Node.js

.github/workflows/ghostty-web-update.yml (4 match(es)):
  18:     runs-on: ubuntu-24.04
  40:       - name: Set up Node.js
  66:     runs-on: ubuntu-24.04
  98:       - name: Set up Node.js

.github/workflows/lock-tracker-conversations.yml (2 match(es)):
  14:     runs-on: ubuntu-latest
  26:     runs-on: ubuntu-latest

scripts/record-macos-ssh-identity.sh (7 match(es)):
  7:   echo "macOS SSH identity evidence requires macOS arm64, found $(uname -s) $(uname -m)." >&2
  10: if [[ ! "${MACOS_TEAM_ID:-}" =~ ^[A-Z0-9]{10}$ ]]; then
  11:   echo 'macOS SSH identity evidence requires a ten-character MACOS_TEAM_ID.' >&2
  36:     echo "Unknown macOS SSH identity argument: $1" >&2
  42:   echo 'macOS SSH identity evidence requires --acceptance <application>.' >&2
  80:   executable="$application/Contents/MacOS/$executable_name"
  93:   if [[ "$team_id" != "$MACOS_TEAM_ID" ||

[omitted 425 match(es) in 34 file(s); see original output for full results]
```

</details>


---

<sub>1m 6s</sub>

### `rg`

**runtimePath\(|ProjectRegistry\.create|HarnessProfileStore|DocumentReviewRuntime|trustFile|projects\.json|settings**

"runtimePath\(|ProjectRegistry\.create|HarnessProfileStore|DocumentReviewRuntime|trustFile|projects\.json|settings" (src/main/index.ts)

<details>
<summary>67 matches</summary>

```
[grep content: 10 matches across 1 file(s) under /private/var/tmp/ws/39e7ce18/hvir/src/main]

index.ts (10 match(es)):
  12- import { ProjectRegistry } from './project-registry'
  13- import { ProjectCoordinator } from './project-coordinator'
  14- import { PtySupervisor } from './pty/pty-supervisor'
  15- import { AttentionBadge } from './attention-badge'
  16: import { HarnessProfileStore } from './harness/harness-profile-store'
  17- import { HarnessProbeManager } from './harness/harness-probe'
  18- import { harnessProviders } from './harness/harness-provider'
  19- import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
  20- import { ProjectWatchController } from './project-watch'
  32- import { createDiagnosticReportCoordinator } from './diagnostics/diagnostic-report-coordinator'
  33- import { RendererEventPublisher } from './renderer-event-publisher'
  34- import { createFilenameSearchCoordinator } from './filename-search'
  35- import { createProjectFileOperationCoordinator } from './project-file-operations'
  36: import type { DocumentReviewRuntime } from './document-review'
  37: import { installApplicationDocumentReviewRuntime } from './document-review/document-review-application'
  38- import { installApplicationSessionsObservation } from './sessions/sessions-observation-application'
  39- import { applicationRuntime, applicationUserDataPath } from './application-runtime'
  40- import {
  41-   GIT_WORKSPACE_ACTIVITY_TYPE,
  94-   let projectRegistry: ProjectRegistry | null = null
  95-   let sshPrompter: RendererSshPrompter | null = null
  96-   let ptySupervisor: PtySupervisor | null = null
  97-   let terminalSessionRegistry: TerminalSessionRegistry | null = null
  98:   let harnessProfileStore: HarnessProfileStore | null = null
  99:   let documentReview: DocumentReviewRuntime | null = null
  100-   let attentionBadge: AttentionBadge | null = null
  101-   let workspaceCoordinator: WorkspaceCoordinator | null = null
  102-   let hostCatalog: ProjectHostCatalog | null = null
  103-   const installRendererPresentation = createRendererPresentationInstaller({
  160-     hostCatalog = runtime.own(
  161-       'project host catalog',
  162-       await ProjectHostCatalog.create({
  163-         prompter: sshPrompter,
  164:         trustFile: localPath(applicationUserDataPath('known-hosts.json')),
  165-         trashItem: electronTrash(shell),
  166-       }),
  167-       (catalog) => catalog.dispose(),
  168-     )
  169-     const requestedProjectRoot = projectRootArgument()
  170:     const registry = await ProjectRegistry.create(
  171-       requestedProjectRoot ? localPath(requestedProjectRoot) : undefined,
  172-       hostCatalog,
  173:       applicationUserDataPath('projects.json'),
  174-       (state) => emit('project:state', state),
  175-       async () => {
  176-         const selection = await dialog.showOpenDialog({
  177-           title: 'Choose a folder for hvir',
  195-       (sessions) => sessions.flush(),
  196-     )
  197-     harnessProfileStore = runtime.own(
  198-       'harness profile store',
  199:       await HarnessProfileStore.load(
  200-         hostCatalog.local,
  201-         localPath(applicationUserDataPath('harness-profiles.json')),
  202-       ),
  203-       (profiles) => profiles.flush(),
  253-       terminalSessionRegistry,
  254-       ptySupervisor,
  255-       rendererEvents,
  256-     )
  257:     documentReview = await installApplicationDocumentReviewRuntime(
  258-       runtime,
  259-       hostCatalog.local,
  260-       rendererScopes,
  261-       ptySupervisor,
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/39e7ce18/hvir/src/main/application-runtime.ts (lines 1-120)

<details>
<summary>15 lines</summary>

```
import { join } from 'node:path'
import { app } from 'electron'

import { localPath } from '../shared'
import { configureApplicationRuntime } from './application-runtime-policy'
import { LocalHost } from './project-host/local-host'

/** The compiled application identity and storage authority, selected during module load. */
export const applicationRuntime = configureApplicationRuntime(
  app,
  __HVIR_BUILD_CHANNEL__,
  (path) => LocalHost.ensureBootstrapDirectory(localPath(path)),
)

/** Resolves one application-owned state file beneath the selected runtime root. */
export function applicationUserDataPath(name: string): string {
  return join(applicationRuntime.userDataRoot, name)
}
```

</details>


---

<sub>1m 6s</sub>

### `rg`

**localStorage|sessionStorage|hvir\.|storage**

"localStorage|sessionStorage|hvir\.|storage" in *.ts (src/renderer/src)

<details>
<summary>117 matches</summary>

```
[grep content: 96 matches across 35 file(s) under /private/var/tmp/ws/39e7ce18/hvir/src/renderer/src]

git/use-git-workspace.ts (3 match(es)):
  61:         await window.hvir.invoke('git:switch-branch', {
  76:       unwrapOperation(await window.hvir.invoke('git:fetch', { root: current.root })),
  89:         unwrapOperation(await window.hvir.invoke('git:pull', { root: current.root })),

git/use-git-rail-controller.ts (3 match(es)):
  76:           const changes = await window.hvir.invoke('git:changes', { root: requestRoot })
  120:             const branchModel = await window.hvir.invoke('git:branches', {
  223:             const page = await window.hvir.invoke('git:history', {
git/commit-detail-client.ts:21:   const request = rendererWindow.hvir.invoke('git:commit-detail', { root, hash })

theme.ts (3 match(es)):
  20:     localStorage.setItem(STORAGE_KEY, theme)
  22:     // A blocked storage backend should not make theme switching fail.
  44:     return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
settings/use-harness-binding-authorization.ts:27:         const grant = await window.hvir.invoke('harness:authorize-path', { root, path })

settings/settings.ts (3 match(es)):
  61:     localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  70:     const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
  74:     const legacyRecovery = localStorage.getItem('hvir:terminal-recovery-mode')

dashboards/use-web-pane-workspace.ts (6 match(es)):
  43:     const disposeNavigation = window.hvir.on(
  55:     const disposeDiagnostic = window.hvir.on(
  80:     window.hvir.send('web-pane:full-page', {
  143:             await window.hvir.invoke('web-pane:open', {
  188:             await window.hvir.invoke('web-pane:open', {
  218:     void window.hvir.invoke('web-pane:close', { paneId: id }).catch(() => undefined)
settings/use-settings-controller.ts:112:         await window.hvir.invoke('harness:configure-composer-submit', {

settings/use-harness-profile-editor.ts (8 match(es)):
  124:           window.hvir.invoke('harness:catalog', undefined),
  125:           window.hvir.invoke('harness:profiles', { root: current.workspaceRoot }),
  126:           window.hvir.invoke('harness:probe-snapshot', {
  229:         window.hvir.invoke('harness:preview', {
  299:       const profile = await window.hvir.invoke(
  331:       const profile = await window.hvir.invoke('harness:profile-duplicate', { id })
  354:       await window.hvir.invoke('harness:profile-delete', { id: current.id })
  400:       const grant = await window.hvir.invoke('harness:authorize-path', {
settings/use-add-harness-dialog.ts:111:       const created = await window.hvir.invoke('harness:profile-materialize', {

tree/use-file-deletion-actions.ts (2 match(es)):
  127:           window.hvir.invoke('fs:deletion-disclosure', {
  190:           window.hvir.invoke('fs:delete-entry', {

terminal/terminal-split-persistence.ts (2 match(es)):
  57:     return decodeTerminalSplitLayout(localStorage.getItem(terminalSplitStorageKey(root)))
  68:     localStorage.setItem(terminalSplitStorageKey(root), JSON.stringify(layout))
workbench/use-renderer-ready.ts:7:     const frame = window.requestAnimationFrame(() => window.hvir.rendererReady())

health/use-diagnostic-evidence.ts (2 match(es)):
  49:             : 'Local evidence could not be deleted. Retry when storage is available.',
  54:           'Local evidence could not be deleted. Retry when storage is available.',
health/use-workbench-health.ts:28:     const unsubscribe = window.hvir.on('workbench-health:state', (candidate) => {
tree/use-file-organization-actions.ts:131:         () => window.hvir.invoke('fs:organize-entry', request),
terminal/use-terminal-workspace-move.ts:116:         await window.hvir.invoke('terminal:move', {
tree/use-project-file-operation.ts:83:     const dispose = window.hvir.on('fs:project-file-operation', acceptEvent)
viewer/use-diff-inputs.ts:68:             const inputs = await window.hvir.invoke('git:diff-inputs', {

tree/use-external-file-copy.ts (4 match(es)):
  26:     acquire: () => ReturnType<typeof window.hvir.externalFiles.acquireDropped>,
  32:         return window.hvir.invoke('fs:copy-external', {
  48:         window.hvir.invoke('fs:acquire-clipboard-files', undefined),
  51:       copy(destinationDirectory, () => window.hvir.externalFiles.acquireDropped(files)),
terminal/terminal-clipboard-write.ts:13:   window.hvir.send('terminal:clipboard-write', { text: decision.text })

layout/workspace-layout-persistence.ts (2 match(es)):
  16:       localStorage.getItem(`hvir:layout:${root.hostId}:${root.path}`),
  28:     localStorage.setItem(

terminal/use-terminal-attention.ts (2 match(es)):
  31:     window.hvir.send('app:attention', { count: actionable })
  33:   useEffect(() => () => window.hvir.send('app:attention', { count: 0 }), [])

workbench/use-workbench-commands.ts (2 match(es)):
  52:     window.hvir.send('web-pane:reserved-bindings', keybindings)
  53:     const disposeCommand = window.hvir.on('web-pane:command', ({ action, paneId }) =>

terminal/use-terminal-recovery.ts (6 match(es)):
  106:       window.hvir.invoke('harness:catalog', undefined),
  107:       window.hvir.invoke('harness:profiles', { root }),
  145:     void window.hvir.invoke('harness:probe-profiles', { root, profileIds }).then(
  214:     await window.hvir.invoke('terminal:record-recovery-decision', {
  233:     await window.hvir.invoke('terminal:record-recovery-decision', {
  267:       const rebound = await window.hvir.invoke('terminal:rebind-profile', {
terminal/ghostty-terminal-pane.ts:706: /** Registered with custom-provider priority so file:// OSC 8 links stay inside hvir. */

terminal/terminal-runtime.ts (7 match(es)):
  337:       const result = await window.hvir.invoke(
  350:           window.hvir.send('pty:kill', { id: result.id })
  372:         window.hvir.send('pty:write', {
  427:           window.hvir.send('pty:write', { id: this.activePtyId, data })
  434:           window.hvir.send('terminal:paste-image', {
  460:           window.hvir.send('pty:resize', {
  541:       window.hvir.send('pty:kill', {
viewer/use-source-blame.ts:18:     void window.hvir.invoke('git:blame', { path: currentPath }).then(

workspaces/project-session.ts (14 match(es)):
  110:     await window.hvir.invoke('harness:configure-composer-submit', {
  129:         await window.hvir.invoke('project:connect-host', { hostId }),
  140:         await window.hvir.invoke('project:browse-host', { hostId, path }),
  149:         await window.hvir.invoke('project:disconnect-host', { hostId }),
  158:         await window.hvir.invoke('project:open', { hostId, path }),
  195:           await window.hvir.invoke('project:switch', { projectId, workspaceId }),
  213:         unwrapOperation(await window.hvir.invoke('project:refresh', { projectId })),
  222:         unwrapOperation(await window.hvir.invoke('project:close', { projectId })),
  231:         unwrapOperation(await window.hvir.invoke('workspace:prune', { projectId })),
  241:           await window.hvir.invoke('workspace:dismiss', { projectId, workspaceId }),
  266:             await window.hvir.invoke('workspace:acknowledge', {
  334:     void window.hvir.invoke('ssh:prompt-response', { id: prompt.id, answers })
  344:       setHosts(await window.hvir.invoke('project:hosts', undefined))
  363:     void window.hvir.invoke('project:root', undefined).then(
viewer/markdown-repository-images.ts:97:         await window.hvir.invoke('fs:read-asset', {

viewer/viewer-workspace-persistence.ts (2 match(es)):
  137:     return decodeViewerTabs(root, localStorage.getItem(viewerStorageKey(root)))
  150:     localStorage.setItem(

workspaces/workspace-session-actions.ts (3 match(es)):
  24:           await window.hvir.invoke('workspace:plan-close', {
  42:           await window.hvir.invoke('workspace:close', {
  55:           await window.hvir.invoke('workspace:reopen', { projectId, workspaceId }),

document-review/use-document-review-workspace.ts (3 match(es)):
  41:             await hvir.invoke('document-review:restore', { workspace: target }),
  44:           unwrapOperation(await hvir.invoke('document-review:save', request)),
  46:           unwrapOperation(await hvir.invoke('document-review:revalidate', request)),

workspaces/project-folder-picker-client.ts (4 match(es)):
  22:       await window.hvir.invoke('project:folder-picker-start', { hostId }),
  27:       await window.hvir.invoke('project:folder-picker-browse', { pickerId, path }),
  32:       await window.hvir.invoke('project:folder-picker-create-directory', {
  40:     unwrapOperation(await window.hvir.invoke('project:folder-picker-close', { pickerId }))
document-review/document-review-delivery-client.ts:89:     await window.hvir.invoke('document-review:send-now-delivery', { preparedId }),
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/electron-builder.ssh-acceptance.yml.**

/private/var/tmp/ws/39e7ce18/hvir/electron-builder.ssh-acceptance.yml (lines 1-80)

<details>
<summary>16 lines</summary>

```
extends: ./electron-builder.yml
appId: dev.hvir.ssh-acceptance
productName: hvir SSH Acceptance
directories:
  output: dist/ssh-acceptance
  buildResources: build
forceCodeSigning: true
mac:
  # Clear the inherited release pkg target. The guarded command supplies only `dir`.
  target: null
  # Contributor acceptance bundles must never consume ambient release notarization state.
  notarize: false
  extendInfo:
    NSLocalNetworkUsageDescription: >-
      hvir SSH Acceptance connects to contributor-selected SSH hosts on the local
      network.
```

</details>


---

<sub>1m 6s</sub>

### `view`

**view the file at /private/var/tmp/ws/39e7ce18/hvir/.gitignore.**

/private/var/tmp/ws/39e7ce18/hvir/.gitignore (lines 1-200)

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

<sub>1m 6s</sub>

### `bash`

**Check local development tool versions**

$ node --version && npm --version && git --version

```
v26.5.0
11.17.0
git version 2.46.2
<shellId: 2 completed with exit code 0>
```


---

<sub>1m 18s</sub>

### Copilot

I have enough verified detail to write the root documentation. The README will focus on source setup, supported targets, core workbench capabilities, contributor checks, and the repository’s process boundaries.

---

<sub>1m 27s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for software projects and terminal-based coding\n+agents. It keeps local or SSH-hosted workspaces, terminals, source review, and\n+Git context together in one Electron application.\n+\n+## Features\n+\n+- **Local and remote workspaces** — open folders on the local machine or connect\n+  through aliases in `~/.ssh/config`. hvir remembers projects, discovers Git\n+  worktrees, and restores workspace state.\n+- **Terminal workbench** — run native PTYs in tabs and split layouts with search,\n+  configurable themes, attention indicators, and session recovery.\n+- **Coding-agent harnesses** — create launch profiles for Claude Code, Codex,\n+  Cursor CLI, Gemini CLI, GitHub Copilot CLI, Pi, a plain shell, or a custom\n+  command. Profiles can be global or project-specific.\n+- **Repository browser and viewer** — manage files and inspect them in source,\n+  rendered, or diff modes. Rendered previews support Markdown, Mermaid, HTML,\n+  JSON, YAML, CSV, and common image formats.\n+- **Review workflow** — edit files, inspect blame and diffs, and capture inline\n+  document-review feedback without leaving the workbench.\n+- **Integrated Git tools** — browse changes, history, and the commit graph;\n+  switch branches; fetch and pull; and move between related worktrees.\n+- **Session overview** — monitor live terminal sessions across workspaces and\n+  return directly to an exact session.\n+- **Embedded web panes** — open loopback development services alongside the\n+  terminal and source viewer.\n+\n+## Requirements\n+\n+- macOS or Linux\n+- [Node.js](https://nodejs.org/) 24 or newer\n+- npm and Git\n+- Python and a C/C++ build toolchain supported by\n+  [`node-gyp`](https://github.com/nodejs/node-gyp)\n+\n+The selected local or remote host must also contain any shell, Git installation,\n+or coding-agent CLI that you want to use there.\n+\n+CI currently exercises Ubuntu 24.04 and macOS 15 on Apple silicon. Packaging is\n+configured for macOS arm64 (`.pkg`) and Linux x64/arm64 (`.deb`); the repository\n+does not currently define a Windows package target.\n+\n+## Getting started\n+\n+Install dependencies and start the development build:\n+\n+```bash\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` downloads Electron and rebuilds the native terminal dependencies for\n+Electron's ABI. On first launch, hvir asks you to choose a project folder.\n+\n+To select a local project at startup:\n+\n+```bash\n+HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev\n+```\n+\n+For a remote project, add a concrete host alias to `~/.ssh/config`, restart hvir,\n+and choose that host from **Connect to a host**. hvir uses configured identity\n+files or `SSH_AUTH_SOCK` and prompts for authentication or host trust when\n+needed.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start Electron with Vite hot reload |\n+| `npm run build` | Type-check and create a production build |\n+| `npm run build:dir` | Create an unpacked application in `dist/` |\n+| `npm test` | Run the Vitest unit suite |\n+| `npm run test:watch` | Run Vitest in watch mode |\n+| `npm run lint` | Run ESLint |\n+| `npm run format:check` | Check formatting with Prettier |\n+| `npm run verify` | Run architecture checks, linting, type checks, and unit tests |\n+| `npm run smoke` | Build and run the full Electron smoke suite |\n+| `npm run smoke:macos` | Run the macOS-focused Electron smoke suite |\n+\n+Electron smoke tests need a graphical session. In a headless Linux environment,\n+run them through Xvfb:\n+\n+```bash\n+xvfb-run -a npm run smoke\n+```\n+\n+Optional repository hooks run type checks and the platform-appropriate Electron\n+smoke suite before each push:\n+\n+```bash\n+npm run hooks:install\n+```\n+\n+## Packaging\n+\n+Package artifacts are written to `dist/`:\n+\n+```bash\n+# macOS arm64 installer\n+npm run pack:mac:arm64\n+\n+# Debian packages\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+The signed macOS workflow requires the release signing and notarization\n+credentials used by the project maintainers.\n+\n+## Architecture\n+\n+hvir separates privileged host operations from its web UI:\n+\n+```text\n+src/\n+├── main/       Electron main process: projects, SSH, PTYs, Git, persistence\n+├── preload/    Typed, constrained IPC bridge exposed to the renderer\n+├── renderer/   React workbench, terminals, viewers, Git, and settings\n+├── shared/     Cross-process contracts, types, and policies\n+└── workers/    Utility-process workers for isolated background work\n+```\n+\n+Renderer workers handle expensive presentation tasks such as syntax\n+highlighting and structured-data parsing. Main-process utility workers keep Git\n+and other host operations away from the UI thread. Tests live in `test/`, while\n+release, architecture, and smoke-test automation lives in `scripts/`.\n+\n+## License\n+\n+hvir is available under the [MIT License](LICENSE). Third-party attributions are\n+listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/39e7ce18/hvir/README.md
```


---

<sub>1m 32s</sub>

### Copilot

The README is drafted. I’m doing a final formatting and diff-integrity check so the new documentation matches the repository’s existing Prettier rules and contains no patch artifacts.

---

<sub>1m 33s</sub>

### `bash`

**Validate README formatting and inspect diff**

$ npx prettier --check README.md && git --no-pager diff --check && git --no-pager status --short && git --no-pager diff -- README.md

```
Checking formatting...
All matched files use Prettier code style!
?? README.md
<shellId: 3 completed with exit code 0>
```


---

<sub>1m 37s</sub>

### Copilot

Created `README.md` with:

- Project overview and core features
- Platform and development prerequisites
- Local and SSH workspace setup
- Development, verification, and packaging commands
- High-level architecture and repository layout
- License and third-party attribution links

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
