# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6df05e07-8374-44c6-84ed-1841bb797845`  
> - **Started:** 9/23/2026, 1:14:31 AM  
> - **Duration:** 32s  
> - **Exported:** 9/23/2026, 1:15:03 AM  

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

### Copilot

I’ll inspect the project’s structure and entry points, then write a README that matches how it actually runs.

---

<sub>4s</sub>

### `bash`

**Inspect repository files and worktree**

$ pwd && ls -la && git --no-pager status --short && git --no-pager ls-files | head -100

<details>
<summary>131 lines</summary>

```
/private/var/tmp/ws/c2e08ea5/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 23 01:14 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:14 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:14 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:14 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:14 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 23 01:14 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 23 01:14 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 23 01:14 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:14 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 23 01:14 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 23 01:14 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 23 01:14 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 23 01:14 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 23 01:14 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 23 01:14 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 23 01:14 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 23 01:14 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:14 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 23 01:14 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 23 01:14 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 23 01:14 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 23 01:14 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 23 01:14 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 23 01:14 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 23 01:14 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 23 01:14 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 23 01:14 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 23 01:14 vitest.config.ts
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

<sub>4s</sub>

### `glob`

****/{README*,package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,requirements*.txt,Dockerfile,*.md}**

"**/{README*,package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,requirements*.txt,Dockerfile,*.md}"

<details>
<summary>6 matches</summary>

```
./package.json
./THIRD_PARTY_NOTICES.md
./scripts/project-management/package.json
./packages/rename-noreplace/package.json
./test/fixtures/rendered.md
./test/fixtures/rendered-mmd.md
```

</details>


---

<sub>4s</sub>

### `session_store_sql`

**Recent repository context**

<details>
<summary>Arguments</summary>

```json
{
  "description": "Recent repository context",
  "query": "SELECT id, summary, created_at FROM sessions WHERE cwd = '/private/var/tmp/ws/c2e08ea5/hvir' AND created_at >= now() - INTERVAL '7 days' ORDER BY created_at DESC LIMIT 5"
}
```

</details>

```
Query returned 0 rows.
```


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/package.json.**

/private/var/tmp/ws/c2e08ea5/hvir/package.json

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

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/electron-builder.yml.**

/private/var/tmp/ws/c2e08ea5/hvir/electron-builder.yml

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

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/c2e08ea5/hvir/.github/workflows/ci.yml

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

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/LICENSE.**

/private/var/tmp/ws/c2e08ea5/hvir/LICENSE

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

<sub>6s</sub>

### `bash`

**Map app source and project documentation**

$ find src -maxdepth 3 -type d | sort; find src -maxdepth 2 -type f | head -90; find .github -maxdepth 2 -type f | sort

<details>
<summary>122 lines</summary>

```
src
src/main
src/main/diagnostics
src/main/document-review
src/main/filename-search
src/main/git
src/main/harness
src/main/harness/providers
src/main/health
src/main/ipc
src/main/ipc/features
src/main/project-file-operations
src/main/project-folder-picker
src/main/project-host
src/main/pty
src/main/sessions
src/main/smoke
src/main/terminal
src/main/viewer
src/main/web-pane
src/main/window
src/preload
src/renderer
src/renderer/src
src/renderer/src/context-menu
src/renderer/src/dashboards
src/renderer/src/development
src/renderer/src/diagnostics
src/renderer/src/document-review
src/renderer/src/git
src/renderer/src/harness
src/renderer/src/health
src/renderer/src/layout
src/renderer/src/path-copy
src/renderer/src/scrollbars
src/renderer/src/sessions
src/renderer/src/settings
src/renderer/src/styles
src/renderer/src/terminal
src/renderer/src/tree
src/renderer/src/viewer
src/renderer/src/workbench
src/renderer/src/workspaces
src/shared
src/shared/ipc
src/workers
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `glob`

**src/renderer/src/{App*,**/*Welcome*,**/*Workspace*,**/*Settings*}**

"src/renderer/src/{App*,**/*Welcome*,**/*Workspace*,**/*Settings*}"

<details>
<summary>16 matches</summary>

```
./src/renderer/src/App.tsx
./src/renderer/src/settings/SettingsActiveSection.tsx
./src/renderer/src/settings/SettingsDialog.tsx
./src/renderer/src/settings/HarnessProfilesSettings.tsx
./src/renderer/src/settings/SettingsSectionNavigation.tsx
./src/renderer/src/settings/SettingsSection.tsx
./src/renderer/src/workspaces/MissingWorkspaceNotice.tsx
./src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
./src/renderer/src/settings/sections/GitSettings.tsx
./src/renderer/src/settings/sections/KeybindingsSettings.tsx
./src/renderer/src/settings/sections/AppearanceSettings.tsx
./src/renderer/src/settings/sections/TerminalSettings.tsx
./src/renderer/src/terminal/TerminalWorkspaceDialogs.tsx
./src/renderer/src/terminal/TerminalWorkspace.tsx
./src/renderer/src/terminal/TerminalWorkspaceCollection.tsx
./src/renderer/src/terminal/TerminalWorkspaceControls.tsx
```

</details>


---

<sub>9s</sub>

### `rg`

**hvir|terminal|workspace|Git|SSH**

"hvir|terminal|workspace|Git|SSH" in App.tsx (src/renderer/src)

<details>
<summary>92 matches</summary>

```
[grep content: 90 matches across 1 file(s) under src/renderer/src]

App.tsx (90 match(es)):
     type GitChanges,
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
   import { isGitIgnoreRulePath } from './tree/git-ignore-refresh'
   import { GitPanel } from './git/GitPanel'
   import { workspaceGitEnabled } from './git/git-capability'
   import { GitGraphView } from './git/GitGraphView'
   import { useGitWorkspace } from './git/use-git-workspace'
   import { useViewerWorkspace } from './viewer/use-viewer-workspace'
   import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
   import { focusVisibleActiveTerminalAfterLayout } from './workbench/active-terminal-focus'
   import { useTerminalPathActivation } from './workbench/use-terminal-path-activation'
   import * as review from './document-review/use-document-review-workspace'
     const [destination, setDestination] = useState<'workspace' | 'sessions'>('workspace')
     const workspaceSwitchRef = useRef<(direction: -1 | 1) => void>(() => undefined)
     const resetGitGraphRef = useRef<() => void>(() => undefined)
     const deactivateGitGraphRef = useRef<() => void>(() => undefined)
     const [gitChanges, setGitChanges] = useState<GitChanges>()
     const terminalAttention = useTerminalAttention()
         deactivateGitGraphRef.current()
         deactivateGitGraphRef.current()
         resetGitGraphRef.current()
         setGitChanges(undefined)
       isIgnoreRulePath: isGitIgnoreRulePath,
     const gitEnabled = workspaceGitEnabled(activeWorkspace)
     const terminalWorkspaces = useTerminalWorkspaceRuntime({
       workspaceMissing: Boolean(activeWorkspace?.missing),
       terminalMode,
     const git = useGitWorkspace({
       refreshGit: session.refreshGit,
       openGraph: openGitGraph,
       activateGraph: activateGitGraph,
       closeGraph: closeGitGraph,
       resetGraph: resetGitGraph,
       deactivateGraph: deactivateGitGraph,
       switchBranch: switchGitBranch,
       fetch: fetchGit,
       pull: pullGit,
     const terminalPathActivation = useTerminalPathActivation({
     workspaceSwitchRef.current = session.switchRelativeWorkspace
     resetGitGraphRef.current = resetGitGraph
     deactivateGitGraphRef.current = deactivateGitGraph
       if (activeWorkspace?.missing) resetGitGraph()
     }, [activeWorkspace?.missing, resetGitGraph])
       enabled: destination === 'workspace',
       findInTerminal: terminalWorkspaces.openTerminalSearch,
         setDestination('workspace')
         workspaceSwitchRef.current(direction)
           project.workspaces.map((workspace) => ({ project, workspace })),
         .find(({ workspace }) => hostPathEquals(workspace.root, view.workspaceRoot))
         session.reportError('The source workspace is no longer registered')
       if (!rootRef.current || !hostPathEquals(rootRef.current, view.workspaceRoot)) {
         await session.switchWorkspace(target.project.id, target.workspace.id)
           ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
         ].find((element) => element.dataset['terminalSession'] === view.sourceTerminalId)
         if (!source) session.reportError('The source terminal has closed')
     if (!root) return <div className="startup-loading">Starting hvir…</div>
     const rootWebViews = webViews.filter((view) => hostPathEquals(view.workspaceRoot, root))
           onActivateGraph={activateGitGraph}
           onCloseGraph={closeGitGraph}
           <div className="workspace-view" hidden={!gitGraphActive}>
             <GitGraphView
           className="workspace-view"
             rollups={terminalAttention.rollups}
             onSwitch={(projectId, workspaceId) => {
               setDestination('workspace')
               void session.switchWorkspace(projectId, workspaceId)
             onDismiss={(projectId, workspaceId) =>
               void session.dismissWorkspace(projectId, workspaceId)
             onCloseWorkspace={(projectId, workspaceId, plan, terminateTerminals) =>
               void session.closeWorkspace(projectId, workspaceId, plan, terminateTerminals)
             onReopenWorkspace={(projectId, workspaceId) =>
               void session.reopenWorkspace(projectId, workspaceId)
           className={`workbench${connectionState === 'connected' ? '' : ' project-stale'}${terminalMode === 'maximized' ? ' terminal-focused' : ''}${terminalMode === 'collapsed' ? ' terminal-collapsed' : ''}${treeCollapsed ? ' tree-collapsed' : ''}${layout.terminalRailCompact ? ' terminal-rail-compact' : ''}${webViewFocused && webViewActive ? ' web-focused' : ''}`}
                   Git{changedCount > 0 ? ` ${changedCountLabel}` : ''}
                 selected={terminalPathActivation.revealRequest?.path ?? activeTab?.path}
                 revealRequest={terminalPathActivation.revealRequest}
                 <GitPanel
                   onChanges={setGitChanges}
                   onOpenGraph={openGitGraph}
                   onSwitchBranch={switchGitBranch}
                   onFetch={fetchGit}
```

</details>


---

<sub>9s</sub>

### `rg`

**darwin|linux|win32|unsupported|macOS|Ubuntu**

"darwin|linux|win32|unsupported|macOS|Ubuntu" in *.mts (src/main, scripts)

<details>
<summary>19 matches</summary>

```
scripts/ci-attempt-evidence.mts:  'Electron correctness (macOS arm64; temporary reduced gate)',
scripts/prepare-release-linux-package.mts:const publicName = `hvir-${metadata.version}-linux-${releaseArch}.deb`
scripts/generate-terminal-theme-catalog.mts:      throw themeError(name, index + 1, 'blank or whitespace-only lines are unsupported')
scripts/generate-terminal-theme-catalog.mts:        `unsupported directive ${JSON.stringify(directive)}`,
scripts/installed-startup-probe.mts:    ...(process.platform === 'linux'
scripts/assemble-native-release.d.mts:  readonly platform: 'linux' | 'macos'
scripts/capture-contributor-usage.mts:  if (!provider.usageSnapshots) return { unavailable: 'unsupported-telemetry' }
scripts/run-smoke-scenarios.mts:        detached: process.platform !== 'win32',
scripts/run-smoke-scenarios.mts:    if (process.platform === 'win32') process.kill(pid, signal)
scripts/inspect-packaged-runtime.mts:export type NativePlatform = 'darwin' | 'linux'
scripts/inspect-packaged-runtime.mts:  return platform === 'darwin'
scripts/inspect-packaged-runtime.mts:  if (platform !== 'darwin' && platform !== 'linux') {
scripts/inspect-packaged-runtime.mts:    throw new Error('--native-platform must be darwin or linux')
scripts/render-native-installer.d.mts:  readonly linuxX64Artifact: string
scripts/render-native-installer.d.mts:  readonly linuxArm64Artifact: string
scripts/render-native-installer.d.mts:    readonly linuxX64: NativeInstallerArtifact
scripts/render-native-installer.d.mts:    readonly linuxArm64: NativeInstallerArtifact
scripts/run-smoke-interruption.mts:  if (process.platform === 'win32') {
scripts/ghostty-web-update/candidate-bundle.mts:    throw new Error('Ghostty-web candidate manifest schema is unsupported.')
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/c2e08ea5/hvir/scripts/check-terminal-runtime.mts

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

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/.gitignore.**

/private/var/tmp/ws/c2e08ea5/hvir/.gitignore

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

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-220)

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

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx (lines 1-220)

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

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/settings/SettingsSectionNavigation.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/settings/SettingsSectionNavigation.tsx

<details>
<summary>41 lines</summary>

```
import type { ReactElement } from 'react'

import { SETTINGS_SECTIONS, type SettingsSection } from './settings-navigation'

export function SettingsSectionNavigation({
  activeSection,
  onSelect,
}: {
  readonly activeSection: SettingsSection
  readonly onSelect: (section: SettingsSection) => void
}): ReactElement {
  return (
    <>
      <nav className="settings-section-index" aria-label="Settings sections">
        {SETTINGS_SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            className={activeSection === section.id ? 'active' : undefined}
            aria-current={activeSection === section.id ? 'page' : undefined}
            aria-controls={`settings-${section.id}-title`}
            onClick={() => onSelect(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
      <label className="settings-section-selector">
        <span>Settings section</span>
        <select
          value={activeSection}
          onChange={(event) => onSelect(event.currentTarget.value as SettingsSection)}
        >
          {SETTINGS_SECTIONS.map((section) => (
            <option key={section.id} value={section.id}>
              {section.label}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/App.tsx (lines 610-850)

<details>
<summary>77 lines</summary>

```
              ) {
                setTerminalMode('restored')
              }
              return
            }
            const current =
              workbenchRef.current?.querySelector<HTMLElement>('.terminal-panel')
            if (current) setTerminalHeight(current.getBoundingClientRect().height + delta)
          }}
          onReset={layout.resetTerminalHeight}
          action={<TerminalLayoutControls mode={terminalMode} onMode={setTerminalMode} />}
        />
        <TerminalWorkspaceCollection
          state={projectState}
          runtime={terminalWorkspaces}
          terminalPresented={
            destination === 'workspace' &&
            terminalMode !== 'collapsed' &&
            !(webViewFocused && webViewActive)
          }
          railCompact={layout.terminalRailCompact}
          onRailCompact={layout.setTerminalRailCompact}
          onRollup={terminalAttention.updateRollup}
          onOpenPath={terminalPathActivation.activate}
          onOpenWebLink={openWebLink}
          preferences={terminalPreferences(settings)}
          onOpenSettings={() => overlays.openSettings()}
          onOpenTerminalSettings={() => overlays.openSettings('terminal')}
          onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
          onAddHarness={overlays.openAddHarnessSettings}
        />
      </main>
      <SessionsApplicationDestination
        active={destination === 'sessions'}
        runtime={terminalWorkspaces}
        onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
        onError={session.reportError}
      />
      {overlays.projectPickerOpen ? (
        <SessionDialog
          hosts={session.hosts}
          currentRoot={root}
          suspended={session.prompts.length > 0}
          onCancel={overlays.closeProjectPicker}
          onConnect={session.connectHost}
          onBrowse={session.browseHost}
          folderPicker={session.folderPicker}
          onDisconnect={session.disconnectHost}
          onOpen={session.openHost}
          onOpened={() => (setDestination('workspace'), overlays.closeProjectPicker())}
        />
      ) : null}
      {overlays.settingsOpen ? (
        <SettingsDialog
          theme={theme}
          settings={settings}
          workspaceRoot={root}
          projectRoot={session.activeProject?.registeredRoot}
          initialDestination={overlays.settingsDestination}
          onClose={overlays.closeSettings}
          onSave={(nextTheme, nextSettings) => {
            setAppTheme(nextTheme)
            setAppSettings(nextSettings)
            overlays.closeSettings()
          }}
        />
      ) : null}
      {session.prompts[0] ? (
        <SshPromptDialog
          key={session.prompts[0].id}
          prompt={session.prompts[0]}
          onAnswer={session.answerPrompt}
        />
      ) : null}
    </div>
  )
}
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/c2e08ea5/hvir/.github/workflows/release.yml (lines 1-150)

<details>
<summary>138 lines</summary>

```
name: Release

on:
  workflow_dispatch:
    inputs:
      bump:
        description: current releases package.json; patch/minor/major open a validated release PR.
        required: true
        type: choice
        options:
          - current
          - patch
          - minor
          - major
      source_sha:
        description: Exact merged release source; automation only, normally left blank.
        required: false
        type: string

permissions:
  contents: read

concurrency:
  group: release
  cancel-in-progress: false

jobs:
  prepare:
    name: Prepare ${{ inputs.bump }} release
    runs-on: ubuntu-24.04
    timeout-minutes: 15
    permissions:
      actions: read
      contents: write
      issues: read
      pull-requests: write
    outputs:
      ready: ${{ steps.release.outputs.ready }}
      version: ${{ steps.release.outputs.version }}
      tag: ${{ steps.release.outputs.tag }}
      sha: ${{ steps.release.outputs.sha }}
    steps:
      - name: Require the default branch
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
        run: |
          if [ "$GITHUB_REF" != "refs/heads/$DEFAULT_BRANCH" ]; then
            echo "::error::Run releases from $DEFAULT_BRANCH, not $GITHUB_REF_NAME"
            exit 1
          fi

      - name: Check out release history
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.repository.default_branch }}
          fetch-depth: 0
          fetch-tags: true

      - name: Select trusted release source
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          if [ -z "$SOURCE_SHA" ]; then
            exit 0
          fi
          if [[ ! "$SOURCE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::Release source must be a full commit SHA"
            exit 1
          fi
          if ! git cat-file -e "$SOURCE_SHA^{commit}"; then
            echo "::error::Release source $SOURCE_SHA is not available"
            exit 1
          fi
          default_sha=$(git rev-parse "origin/$DEFAULT_BRANCH")
          if ! git merge-base --is-ancestor "$SOURCE_SHA" "$default_sha"; then
            echo "::error::Release source $SOURCE_SHA is not merged into $DEFAULT_BRANCH"
            exit 1
          fi
          git checkout --detach "$SOURCE_SHA"

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Select release version
        id: version
        env:
          BUMP: ${{ inputs.bump }}
          GH_TOKEN: ${{ github.token }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          current=$(node -p "require('./package.json').version")
          if [ "$BUMP" = current ]; then
            version=$current
          else
            npm version "$BUMP" --no-git-tag-version --ignore-scripts
            version=$(node -p "require('./package.json').version")
          fi
          tag="v$version"

          remote_tag_sha=$(git ls-remote origin "refs/tags/$tag^{}" | awk '{print $1}')
          if [ -z "$remote_tag_sha" ]; then
            remote_tag_sha=$(git ls-remote origin "refs/tags/$tag" | awk '{print $1}')
          fi

          if [ "$BUMP" = current ] && [ -n "$remote_tag_sha" ]; then
            if [ -n "$SOURCE_SHA" ] && [ "$remote_tag_sha" != "$SOURCE_SHA" ]; then
              echo "::error::$tag points at $remote_tag_sha, expected release source $SOURCE_SHA"
              exit 1
            fi
            git checkout --detach "$remote_tag_sha"
            tagged_version=$(node -p "require('./package.json').version")
            if [ "$tagged_version" != "$version" ]; then
              echo "::error::$tag contains package version $tagged_version, expected $version"
              exit 1
            fi
            if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
              if [ "$is_draft" != true ]; then
                echo "::error::$tag is already published; immutable releases require a new version"
                exit 1
              fi
            fi
            echo "Repairing or completing draft $tag at $remote_tag_sha"
          elif [ -n "$remote_tag_sha" ]; then
            echo "::error::$tag already exists; rerun with bump=current"
            exit 1
          elif gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            echo "::error::$tag has a release without the expected source tag"
            exit 1
          fi

          echo "current=$current" >> "$GITHUB_OUTPUT"
          echo "version=$version" >> "$GITHUB_OUTPUT"
          echo "tag=$tag" >> "$GITHUB_OUTPUT"
          echo "sha=$(git rev-parse HEAD)" >> "$GITHUB_OUTPUT"
          {
            echo "### hvir $version"
            echo
            echo "Version: $current -> $version ($BUMP)"
          } >> "$GITHUB_STEP_SUMMARY"

      - name: Require exact-source coherent CI evidence
        if: inputs.bump == 'current'
        timeout-minutes: 5
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
```

</details>


---

<sub>12s</sub>

### `bash`

**Find onboarding components and local runtime versions**

$ find src/renderer/src -maxdepth 2 -type f | grep -E '(Session|Welcome|New|Project|Dialog|Dashboard)' | head -70; node --version; npm --version

<details>
<summary>25 lines</summary>

```
src/renderer/src/tree/FileOrganizationDialog.tsx
src/renderer/src/tree/FileDeletionDialog.tsx
src/renderer/src/tree/FileExternalMoveDialog.tsx
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/terminal/TerminalRecoveryDialog.tsx
src/renderer/src/terminal/TerminalWorkspaceDialogs.tsx
src/renderer/src/terminal/TerminalMoveDialog.tsx
src/renderer/src/terminal/TerminalSessionRuntimes.tsx
src/renderer/src/workspaces/ProjectsBar.tsx
src/renderer/src/workspaces/SshPromptDialog.tsx
src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
src/renderer/src/workspaces/SessionDialog.tsx
src/renderer/src/sessions/SessionsOverview.tsx
src/renderer/src/sessions/SessionsCollectionToolbar.tsx
src/renderer/src/sessions/SessionsApplicationDestination.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
src/renderer/src/sessions/SessionsTerminalDetail.tsx
src/renderer/src/sessions/SessionsOverviewNotice.tsx
src/renderer/src/workbench/ConfirmationDialog.tsx
src/renderer/src/diagnostics/DiagnosticReportDialog.tsx
v26.5.0
11.17.0
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-270)

<details>
<summary>255 lines</summary>

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
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/settings/settings-navigation.ts

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/c2e08ea5/hvir/src/shared/harness-provider.ts (lines 1-170)

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

<sub>15s</sub>

### `rg`

**ssh|SSH|remote**

"ssh|SSH|remote" in *.ts (src/main/project-host)

<details>
<summary>183 matches</summary>

```
[grep content: 168 matches across 18 file(s) under src/main/project-host]

ssh-project-file-transfer.ts (6 match(es)):
   import type { SFTPWrapper } from 'ssh2'
           throw remoteCrossDeviceError(reason)
           session.ext_openssh_statvfs(path.path, (error, value: unknown) =>
     /** Check before submission, then await the remote callback without abort-racing it. */
   function remoteCrossDeviceError(cause: unknown): Error & { readonly code: 'EXDEV' } {
       new Error('The remote source and destination are on different filesystems', {

ssh-exclusive-create.ts (4 match(es)):
   import type { SFTPWrapper } from 'ssh2'
           throw new Error('SSH host did not create the approved empty regular file')
           throw new Error('SSH host did not create the approved empty directory')
         await this.perform<import('ssh2').Stats>((session, done) =>

ssh-transport-pool.ts (23 match(es)):
   import { type Client, type ClientChannel, type SFTPWrapper } from 'ssh2'
   export const SSH_MAX_PHYSICAL_TRANSPORTS = 8
   export const SSH_MAX_CONTROL_TRANSPORTS = 2
   export const SSH_CONTROL_CHANNEL_BUDGET = 6
   export const SSH_TERMINAL_CHANNEL_BUDGET = 8
   export const SSH_TUNNEL_CHANNEL_BUDGET = 16
   export const SSH_MAX_TUNNEL_TRANSPORTS = 2
   export const SSH_TRANSPORT_IDLE_GRACE_MS = 5 * 60_000
   const SSH_CHANNEL_OPEN_ATTEMPTS = 5
       channelOpenAttempts = SSH_CHANNEL_OPEN_ATTEMPTS,
             ? SSH_CONTROL_CHANNEL_BUDGET
               ? SSH_TUNNEL_CHANNEL_BUDGET
               : SSH_TERMINAL_CHANNEL_BUDGET,
             live.length >= SSH_MAX_PHYSICAL_TRANSPORTS ||
             (role === 'control' && roleCount >= SSH_MAX_CONTROL_TRANSPORTS) ||
             (role === 'tunnel' && roleCount >= SSH_MAX_TUNNEL_TRANSPORTS)
             throw sshCapacityError(role)
               `SSH ${role} capacity could not grow; existing sessions remain connected: ${asError(error).message}`,
       attempts = SSH_CHANNEL_OPEN_ATTEMPTS,
       throw sshCapacityError(role)
       }, SSH_TRANSPORT_IDLE_GRACE_MS)
   function sshCapacityError(role: SshTransportRole): Error {
       `SSH ${role} capacity is full (${SSH_MAX_PHYSICAL_TRANSPORTS} transport limit); existing sessions remain connected`,
ssh-auth.ts: /** Presentation port for one revocable SSH connection generation. */

project-host-catalog.ts (16 match(es)):
   import type { SshAuthPrompter } from './ssh-auth'
   import { parseSshConfig, type SshAliasConfig } from './ssh-config'
   import { SshHost } from './ssh-host'
   import { SshHostTrustStore } from './ssh-host-trust'
   import { LocalSshIdentitySource } from './ssh-identity-source'
   /** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
           options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
             ? hostOption(host, config.alias, 'ssh')
                 kind: 'ssh' as const,
       if (!host) throw new Error(`SSH host is not connected: ${hostId}`)
       return hostOption(host, hostId, 'ssh')
       if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
   /** OpenSSH's conventional identity set applies when no IdentityFile is configured. */
     return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
         await host.readTextFile(localPath(join(home, '.ssh/config'))),
     kind: 'local' | 'ssh',

ssh-host-options.ts (6 match(es)):
   import type { Client } from 'ssh2'
   import type { SshAuthPrompter } from './ssh-auth'
   import type { SshAliasConfig } from './ssh-config'
   import type { SshHostTrust } from './ssh-host-trust'
   import type { SshIdentitySource } from './ssh-identity-source'
     /** Test seam for transport lifecycle races; production always constructs ssh2.Client. */

ssh-config.ts (2 match(es)):
   import SSHConfig from 'ssh-config'
     const parsed = SSHConfig.parse(text)

index.ts (19 match(es)):
   export { SshHost } from './ssh-host'
     SSH_CONTROL_CHANNEL_BUDGET,
     SSH_DEFAULT_MAX_CONCURRENT_EXECS,
     SSH_MAX_CONTROL_TRANSPORTS,
     SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS,
     SSH_MAX_PHYSICAL_TRANSPORTS,
     SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS,
     SSH_TERMINAL_CHANNEL_BUDGET,
     SSH_TRANSPORT_IDLE_GRACE_MS,
   } from './ssh-host'
   export type { SshTransportDiagnostic } from './ssh-host'
   export type { SshAuthPrompter, SshPrompt } from './ssh-auth'
   export type { SshHostOptions } from './ssh-host-options'
   export type { SshIdentitySource } from './ssh-identity-source'
   export { RendererSshPrompter } from './renderer-ssh-prompter'
   export { SshHostTrustStore } from './ssh-host-trust'
   export type { SshHostTrust } from './ssh-host-trust'
   export { parseSshConfig } from './ssh-config'
   export type { SshAliasConfig } from './ssh-config'
ssh-text-prefix.ts:       if (!ended) finish(new Error('SSH text prefix read closed before completion'))
ssh-identity-source.ts:     if (!this.value) throw new Error('SSH identity lease is released')

ssh-abort.ts (3 match(es)):
   import type { SFTPWrapper } from 'ssh2'
     const onClose = () => finish(new Error('SSH file write closed before completion'))
           reject(reason instanceof Error ? reason : new Error('SSH file operation failed'))

renderer-ssh-prompter.ts (2 match(es)):
   import type { SshAuthPrompter, SshPrompt } from './ssh-auth'
   /** Renderer presentation adapter; SSH policy and cancellation remain host-owned. */

project-host.ts (5 match(es)):
    * will implement the same interface over ssh2. Nothing above this seam knows or
    * cares whether a project is local or remote — remoteness is transport, not a
      * interests bounded without consuming one SSH channel per directory.
     /** Keep this user-visible file on the SSH polling fast path. */
      * Async so remote hosts (SshHost) and lazy native-module loading fit the same

ssh-host-trust.ts (2 match(es)):
       if (!VALID_ALIAS.test(alias)) throw new Error('Invalid SSH host alias')
         return Promise.reject(new Error('Invalid SSH host-key fingerprint'))

ssh-file-access.ts (23 match(es)):
   import type { SFTPWrapper } from 'ssh2'
   import { readSshTextPrefix } from './ssh-text-prefix'
   import { SshExclusiveCreate } from './ssh-exclusive-create'
   import { SshProjectFileTransfer } from './ssh-project-file-transfer'
   import { abortError, withAbort, writeSftpFile } from './ssh-abort'
     /** Last content actually delivered to a reader, for optimistic remote saves. */
       const parent = remoteParent(path.path)
         const attrs = await this.sftp<import('ssh2').Stats>(
           const currentAttrs = await this.sftp<import('ssh2').Stats>(
             (s, done) => s.ext_openssh_rename(temporary, path.path, done),
         const current = await this.sftp<import('ssh2').Stats>((s, done) =>
       const raw = await this.sftp<import('ssh2').FileEntry[]>((s, done) =>
       const attrs = await this.sftp<import('ssh2').Stats>((s, done) =>
       attrs: import('ssh2').Attributes,
           throw new Error('SSH SFTP session belongs to a stale connection generation')
       let parent = remoteParent(normalized)
         parent = remoteParent(parent)
   export function remoteParent(path: string): string {
   export function remoteChild(parent: string, name: string): string {
   export function metadataStamp(attrs: import('ssh2').Attributes): string {
   ): Promise<import('ssh2').Stats> {
   ): Promise<import('ssh2').FileEntry[]> {
       'File changed on the remote host since it was opened; reload before saving',

ssh-watch-service.ts (5 match(es)):
     remoteChild,
   } from './ssh-file-access'
         let rootAttrs: import('ssh2').Attributes
           const child = remoteChild(watchedRoot.path, entry.filename)
           const child = remoteChild(directory, entry.filename)
ssh-client-lifecycle.ts: import type { Client, ConnectConfig } from 'ssh2'

ssh-host.ts (48 match(es)):
   import { Client, utils, type ClientChannel, type ConnectConfig } from 'ssh2'
   import type { SshPrompt } from './ssh-auth'
   import { closeSshClient, startSshAuthentication } from './ssh-client-lifecycle'
   import { SshFileAccess } from './ssh-file-access'
   import type { SshHostOptions } from './ssh-host-options'
   import { SshIdentityGeneration } from './ssh-identity-source'
   } from './ssh-transport-pool'
   import { SshWatchService } from './ssh-watch-service'
     SSH_CONTROL_CHANNEL_BUDGET,
     SSH_MAX_CONTROL_TRANSPORTS,
     SSH_MAX_PHYSICAL_TRANSPORTS,
     SSH_TERMINAL_CHANNEL_BUDGET,
     SSH_TRANSPORT_IDLE_GRACE_MS,
   } from './ssh-transport-pool'
   export const SSH_DEFAULT_MAX_CONCURRENT_EXECS = 4
   export const SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS = 4
   export const SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS = 5_000
       const requestedExecs = options.maxConcurrentExecs ?? SSH_DEFAULT_MAX_CONCURRENT_EXECS
             : SSH_DEFAULT_MAX_CONCURRENT_EXECS,
       this.cancelConnecting?.(new Error('SSH connection cancelled'))
         waiter.reject(new Error('SSH connection cancelled'))
                   remoteBufferedCommand(command, args, opts, statusMarker),
               if (!settled) reject(new Error('SSH exec output exceeded maxBuffer'))
         // Some SSH servers close a PTY channel without sending exit-status.
           if (exited) return Promise.reject(new Error('SSH PTY already exited'))
                   'SSH PTY exited before write completion',
                     'SSH PTY write completion timed out',
               SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS,
         closedBeforeReadyError: 'SSH connection closed before authentication completed',
         throw new Error('SSH connection was replaced before it became ready')
                 title: `Additional SSH capacity — ${request.title}`,
           // `ssh2` decide synchronously before the user can answer.
             value: import('ssh2').AnyAuthMethod | false,
           void (async (): Promise<import('ssh2').AnyAuthMethod | false> => {
             // `ssh2` passes null before the first authentication attempt. That
                   if (keyboardInteractiveRounds > SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS) {
               client.exec(remoteCommand(command, args, opts), (error, stream) =>
                 remoteCommand(opts.file, opts.args ?? [], {
             'SSH pool transport closed before authentication completed',
           throw new Error('SSH pool transport closed before it became available')
           `SSH ${role} capacity is unavailable after authentication was cancelled or refused`,
         throw new Error('SSH host is disconnected; reconnect explicitly before retrying')
       if (!this.client || this.state !== 'connected') throw new Error('SSH disconnected')
           new Error('SSH host is disconnected; reconnect explicitly before retrying'),
             waiter.reject(new Error('SSH connection cancelled'))
   function remoteCommand(
   function remoteBufferedCommand(
     const invocation = remoteCommand(command, args, opts)
```

</details>


---

<sub>15s</sub>

### `bash`

**Check upstream link and viewer capabilities**

$ git --no-pager remote -v; rg -n 'https://github.com/|github.com/' .github/workflows/release.yml | head -25; find src/renderer/src/viewer -maxdepth 1 -type f | head -35

<details>
<summary>37 lines</summary>

```
/bin/bash: rg: command not found
src/renderer/src/viewer/rendered-link-handler.ts
src/renderer/src/viewer/render-protocol.ts
src/renderer/src/viewer/source-blame-gutter.ts
src/renderer/src/viewer/highlight-worker.ts
src/renderer/src/viewer/markdown-extensions.ts
src/renderer/src/viewer/json.worker.ts
src/renderer/src/viewer/FindControl.tsx
src/renderer/src/viewer/RenderedView.tsx
src/renderer/src/viewer/codemirror-find-target.ts
src/renderer/src/viewer/retained-viewer-workspace-cache.ts
src/renderer/src/viewer/external-document-tabs.ts
src/renderer/src/viewer/MarkdownFragment.tsx
src/renderer/src/viewer/viewer-workspace-selectors.ts
src/renderer/src/viewer/highlight-protocol.ts
src/renderer/src/viewer/viewer-path-rebind.ts
src/renderer/src/viewer/markdown-client.ts
src/renderer/src/viewer/viewer-workspace-state.ts
src/renderer/src/viewer/source-coordinate.ts
src/renderer/src/viewer/diff-policy.ts
src/renderer/src/viewer/rendered-position.ts
src/renderer/src/viewer/structured-data.ts
src/renderer/src/viewer/DiffView.tsx
src/renderer/src/viewer/json-protocol.ts
src/renderer/src/viewer/markdown-repository-images.ts
src/renderer/src/viewer/LargeFileView.tsx
src/renderer/src/viewer/viewer-workspace-model.ts
src/renderer/src/viewer/shiki-language-names.ts
src/renderer/src/viewer/viewer-workspace-persistence.ts
src/renderer/src/viewer/SourceView.tsx
src/renderer/src/viewer/csv-parser.ts
src/renderer/src/viewer/viewer-find.ts
src/renderer/src/viewer/TabStrip.tsx
src/renderer/src/viewer/tab-state.ts
src/renderer/src/viewer/use-viewer-path-lifecycle.ts
src/renderer/src/viewer/shiki-language-catalog.ts
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>18s</sub>

### `glob`

**src/main/harness/providers/*.ts**

"src/main/harness/providers/*.ts"

<details>
<summary>7 matches</summary>

```
./src/main/harness/providers/codex.ts
./src/main/harness/providers/github-copilot.ts
./src/main/harness/providers/shell.ts
./src/main/harness/providers/gemini.ts
./src/main/harness/providers/pi.ts
./src/main/harness/providers/claude-code.ts
./src/main/harness/providers/cursor.ts
```

</details>


---

<sub>18s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/c2e08ea5/hvir/src/main/project-host/project-host-catalog.ts (lines 115-215)

<details>
<summary>93 lines</summary>

```
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
```

</details>


---

<sub>18s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 265-370)

<details>
<summary>106 lines</summary>

```
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
                  rootLabel="/"
                  loadEntries={loadPickerEntries}
                  refreshVersion={treeRefreshVersion}
                  selected={
                    selectedPath
                      ? hostPath(asHostId(connectedHostId), selectedPath)
                      : undefined
                  }
                  revealRequest={
                    revealRequest
                      ? {
                          path: hostPath(asHostId(connectedHostId), revealRequest.path),
                          token: revealRequest.token,
                        }
                      : undefined
                  }
                  showFiles={false}
                  onSelectDirectory={(directory) => {
                    if (busy) return
                    void selectPath(directory.path)
                  }}
                />
              ) : null}
            </div>
          </>
```

</details>


---

<sub>18s</sub>

### `rg`

**Open folder|Add project|New project|New terminal|Add terminal|Settings**

"Open folder|Add project|New project|New terminal|Add terminal|Settings" (src/renderer/src/workspaces/ProjectsBar.tsx)

```
src/renderer/src/workspaces/ProjectsBar.tsx:  readonly onSettings: () => void
src/renderer/src/workspaces/ProjectsBar.tsx:  onSettings,
src/renderer/src/workspaces/ProjectsBar.tsx:            title="Settings"
src/renderer/src/workspaces/ProjectsBar.tsx:            onClick={onSettings}
```


---

<sub>21s</sub>

### Copilot

This is a desktop Electron workbench with local and SSH project support. I’ll document its main workflows, development commands, and supported package targets.

---

<sub>27s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for working across local and SSH-hosted projects. It brings terminals, project files, Git worktrees, and development sessions into one Electron app.\n+\n+## What it does\n+\n+- Open a folder on your machine or on a host configured in `~/.ssh/config`, then switch between projects and their Git worktrees.\n+- Run terminals in a workspace and view session activity across projects.\n+- Browse and edit files, inspect diffs, and render Markdown alongside source.\n+- Work with Git changes and history from the workbench.\n+- Configure terminal appearance, keybindings, and profiles for supported command-line harnesses. Harness executables are separate from hvir and must be installed and configured on the host where they run.\n+\n+## Getting started\n+\n+Development requires **Node.js 24 or newer**, npm, and the native build tools needed by `node-gyp` and Electron's native modules.\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+In the app, use the project **+** control to choose a local host or an SSH host, then select a folder. SSH hosts are discovered from your local `~/.ssh/config`; configure access to the remote host before connecting. A folder does not have to be a Git repository to use the workbench.\n+\n+The `npm ci` postinstall step builds the native modules for Electron. If the terminal runtime check reports a dependency mismatch, run `npm ci` again in this checkout.\n+\n+## Development commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the Electron development app |\n+| `npm run build` | Type-check and build the app |\n+| `npm run verify` | Run architecture checks, lint, type checks, and unit tests |\n+| `npm test` | Run the Vitest suite |\n+| `npm run smoke` | Build and run Electron smoke scenarios |\n+| `npm run build:dir` | Build an unpacked application |\n+| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg` |\n+| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build Linux `.deb` packages |\n+\n+Package output is written to `dist/`. The packaging commands are intended to run on their respective target platforms; macOS signing and distribution require additional credentials. Linux Electron smoke runs need a display server (CI uses `xvfb-run -a npm run smoke`).\n+\n+## Project layout\n+\n+- `src/main/`: Electron main process, project hosts, terminals, Git, and IPC.\n+- `src/preload/`: bridge between the main process and the renderer.\n+- `src/renderer/`: React workbench UI.\n+- `src/shared/`: types and contracts shared across processes.\n+- `src/workers/`: background workers.\n+- `test/`: automated tests; `scripts/`: build, smoke, and maintenance tooling.\n+\n+## License\n+\n+MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/c2e08ea5/hvir/README.md
```


---

<sub>29s</sub>

### `view`

**view the file at /private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/c2e08ea5/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 205-295)

<details>
<summary>91 lines</summary>

```
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
                  disabled={busy || !target}
                  onClick={() => target && onSwitch(project.id, target.id)}
                  title={title}
                >
                  <strong className={showWorking ? 'project-name-working' : undefined}>
                    {project.displayName}
                  </strong>
                  {remote && !active ? (
                    <RemoteConnectionBadge
                      state={project.connectionState}
                      hostLabel={`ssh:${project.registeredRoot.hostId}`}
                      compact
                    />
                  ) : null}
                  {actionable > 0 ? <AttentionCount count={actionable} /> : null}
                </button>
                {remote && active ? (
                  <button
                    type="button"
                    className="project-connection-trigger"
                    disabled={busy}
                    aria-haspopup="dialog"
                    aria-expanded={connectionMenu?.projectId === project.id}
                    aria-label={`Connection controls for ssh:${project.registeredRoot.hostId} · ${connectionStateLabel(project.connectionState)}`}
                    title="Connection controls"
                    onClick={(event) => {
                      if (connectionMenu?.projectId === project.id) {
                        setConnectionMenu(undefined)
                        return
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
```

</details>


---

<sub>29s</sub>

### `bash`

**Check README formatting and repository status**

$ git --no-pager diff --check && git --no-pager status --short && git --no-pager diff --no-index /dev/null README.md | head -100; test "$(node -p 'require("./package.json").engines.node')" = '>=24'

<details>
<summary>60 lines</summary>

````diff
?? README.md
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..ff3cf04
--- /dev/null
+++ b/README.md
@@ -0,0 +1,52 @@
+# hvir
+
+hvir is a desktop workbench for working across local and SSH-hosted projects. It brings terminals, project files, Git worktrees, and development sessions into one Electron app.
+
+## What it does
+
+- Open a folder on your machine or on a host configured in `~/.ssh/config`, then switch between projects and their Git worktrees.
+- Run terminals in a workspace and view session activity across projects.
+- Browse and edit files, inspect diffs, and render Markdown alongside source.
+- Work with Git changes and history from the workbench.
+- Configure terminal appearance, keybindings, and profiles for supported command-line harnesses. Harness executables are separate from hvir and must be installed and configured on the host where they run.
+
+## Getting started
+
+Development requires **Node.js 24 or newer**, npm, and the native build tools needed by `node-gyp` and Electron's native modules.
+
+```sh
+npm ci
+npm run dev
+```
+
+In the app, use the project **+** control to choose a local host or an SSH host, then select a folder. SSH hosts are discovered from your local `~/.ssh/config`; configure access to the remote host before connecting. A folder does not have to be a Git repository to use the workbench.
+
+The `npm ci` postinstall step builds the native modules for Electron. If the terminal runtime check reports a dependency mismatch, run `npm ci` again in this checkout.
+
+## Development commands
+
+| Command | Purpose |
+| --- | --- |
+| `npm run dev` | Start the Electron development app |
+| `npm run build` | Type-check and build the app |
+| `npm run verify` | Run architecture checks, lint, type checks, and unit tests |
+| `npm test` | Run the Vitest suite |
+| `npm run smoke` | Build and run Electron smoke scenarios |
+| `npm run build:dir` | Build an unpacked application |
+| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg` |
+| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build Linux `.deb` packages |
+
+Package output is written to `dist/`. The packaging commands are intended to run on their respective target platforms; macOS signing and distribution require additional credentials. Linux Electron smoke runs need a display server (CI uses `xvfb-run -a npm run smoke`).
+
+## Project layout
+
+- `src/main/`: Electron main process, project hosts, terminals, Git, and IPC.
+- `src/preload/`: bridge between the main process and the renderer.
+- `src/renderer/`: React workbench UI.
+- `src/shared/`: types and contracts shared across processes.
+- `src/workers/`: background workers.
+- `test/`: automated tests; `scripts/`: build, smoke, and maintenance tooling.
+
+## License
+
+MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).
<shellId: 4 completed with exit code 0>
````

</details>


---

<sub>32s</sub>

### Copilot

Created `README.md` with an overview of hvir, its local and SSH workflows, setup steps, development and packaging commands, project layout, and license links.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
