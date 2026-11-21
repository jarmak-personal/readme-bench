# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `c1373721-4a03-4272-9217-6ba6364af979`  
> - **Started:** 11/20/2026, 11:49:04 AM  
> - **Duration:** 49s  
> - **Exported:** 11/20/2026, 11:49:54 AM  

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

I’ll inspect the project’s structure and entry points, then write a README that reflects how it actually works.

---

<sub>4s</sub>

### `bash`

**Inspect repository files and worktree**

$ pwd && ls -la && git status --short && git ls-files | head -100

<details>
<summary>131 lines</summary>

```
/private/var/tmp/ws/41848208/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Nov 20 11:49 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 11:48 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 11:49 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 11:48 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 11:48 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Nov 20 11:48 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Nov 20 11:48 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Nov 20 11:48 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 11:48 build
-rw-r--r--@   1 air-jarmak  wheel     549 Nov 20 11:48 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Nov 20 11:48 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Nov 20 11:48 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Nov 20 11:48 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Nov 20 11:48 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Nov 20 11:48 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Nov 20 11:48 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Nov 20 11:48 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 11:48 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Nov 20 11:48 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Nov 20 11:48 src
-rw-r--r--@   1 air-jarmak  wheel     537 Nov 20 11:48 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Nov 20 11:48 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Nov 20 11:48 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Nov 20 11:48 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Nov 20 11:48 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Nov 20 11:48 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Nov 20 11:48 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Nov 20 11:48 vitest.config.ts
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

****/{package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,README*,*.xcodeproj/project.pbxproj,*.sln,*.csproj}**

"**/{package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,README*,*.xcodeproj/project.pbxproj,*.sln,*.csproj}"

```
./package.json
./packages/rename-noreplace/package.json
./scripts/project-management/package.json
```


---

<sub>4s</sub>

### `glob`

****/{AGENTS.md,CONTRIBUTING*,LICENSE*,Dockerfile,docker-compose.yml,.env.example}**

"**/{AGENTS.md,CONTRIBUTING*,LICENSE*,Dockerfile,docker-compose.yml,.env.example}"

```
./packages/rename-noreplace/LICENSE
./LICENSE
```


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/package.json.**

/private/var/tmp/ws/41848208/hvir/package.json

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

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/electron-builder.yml.**

/private/var/tmp/ws/41848208/hvir/electron-builder.yml

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

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/41848208/hvir/.github/workflows/ci.yml (lines 1-200)

<details>
<summary>169 lines</summary>

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
```

</details>


---

<sub>7s</sub>

### `bash`

**Inspect application structure and runtime requirements**

$ find src -maxdepth 3 -type f | head -100 && printf '\nRoot source directories:\n' && find src -maxdepth 2 -type d && printf '\nNode version hints:\n' && rg -n 'node-version|NODE_VERSION|node-version-file' .github/workflows package.json

<details>
<summary>129 lines</summary>

```
src/renderer/index.html
src/renderer/src/App.tsx
src/renderer/src/main.tsx
src/renderer/src/styles.css
src/renderer/src/theme-model.ts
src/renderer/src/themes.css
src/renderer/src/hvir.d.ts
src/renderer/src/theme.ts
src/renderer/src/ErrorBoundary.tsx
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
src/shared/ipc/web-pane.ts
src/shared/ipc/project.ts
src/shared/ipc/app.ts
src/shared/ipc/filesystem.ts
src/shared/ipc/diagnostics.ts
src/shared/ipc/terminal.ts
src/shared/ipc/document-review.ts
src/shared/ipc/git.ts
src/shared/ipc/harness.ts
src/shared/ipc/sessions.ts
src/shared/ipc/preview.ts
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
src/main/smoke/harness-profile-workflow.ts
src/main/smoke/web-pane.ts
src/main/smoke/app-settings.ts
src/main/smoke/capacity-terminals.ts
src/main/smoke/document-review-evidence.mts
src/main/smoke/project-entry-deletion.ts
src/main/smoke/terminal-scenario-ready.ts
src/main/smoke/external-file-move.ts
src/main/smoke/terminal-horizon-presentation.ts
src/main/smoke/git-workflow.ts
src/main/smoke/project-state-fixture.ts
src/main/smoke/terminal-chrome.ts
src/main/smoke/filename-search.ts
src/main/smoke/platform-contracts.ts
src/main/smoke/renderer-isolation.ts
src/main/smoke/terminal-hidden-reveal.ts
src/main/smoke/capacity-output-fixtures.ts
src/main/smoke/viewer-position-operation.ts
src/main/smoke/terminal-explicit-launch.ts
src/main/smoke/sessions-projection.ts
src/main/smoke/terminal-move.ts
src/main/smoke/workbench-chrome.ts
src/main/smoke/viewer-live-reload.ts
src/main/smoke/terminal-theme-gallery-presentation.ts
src/main/smoke/terminal-search.ts
src/main/smoke/renderer-recovery-scenario.ts
src/main/smoke/native-host-worker.ts
src/main/smoke/viewer-content.ts
src/main/smoke/terminal-palette-presentation.ts
src/main/smoke/harness-settings-layout.ts
src/main/smoke/git-dirty-navigation.ts
src/main/smoke/terminal-context-menu.ts
src/main/smoke/workbench-health-scenario.ts
src/main/smoke/files-interactions.ts
src/main/smoke/scenario-selection.mts
src/main/smoke/document-review-fixture.ts
src/main/smoke/terminal-split.ts
src/main/smoke/electron-process-metrics.ts
src/main/smoke/terminal-session-store.ts
src/main/smoke/macos-file-pasteboard.ts
src/main/smoke/cleanup.ts
src/main/smoke/renderer-recovery-producer.ts

Root source directories:
src
src/renderer
src/renderer/src
src/shared
src/shared/ipc
src/workers
src/main
src/main/smoke
src/main/web-pane
src/main/pty
src/main/health
src/main/project-file-operations
src/main/terminal
src/main/document-review
src/main/harness
src/main/viewer
src/main/project-host
src/main/sessions
src/main/project-folder-picker
src/main/filename-search
src/main/window
src/main/diagnostics
src/main/ipc
src/main/git
src/preload

Node version hints:
/bin/bash: rg: command not found
<shellId: 1 completed with exit code 127>
```

</details>


---

<sub>9s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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


### `file_search`

****/src/**/*.{ts,tsx,js,jsx,html,css,scss,less,md}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**/*.{ts,tsx,js,jsx,html,css,scss,less,md}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/41848208/hvir/src/renderer/index.html
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/file-manager-reveal.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-external-file-copy.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-project-file-operation.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-file-create-actions.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/FileTree.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-external-file-actions.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/file-name.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/DirectoryTree.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/git-ignore-refresh.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/project-file-entry-name.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/file-action-menu.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-path-copy-action.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/project-entry-drag.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/file-operation-feedback.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/FileDeletionDialog.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-file-organization-actions.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/git-status-decoration.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/use-file-manager-reveal.ts
```

</details>


### `grep_search`

**hvir|Hvir**

<details>
<summary>Arguments</summary>

```json
{
  "query": "hvir|Hvir",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
2860 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=3>
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=82>
    new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=89>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=98>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/electron-builder.ssh-acceptance.yml" line=2>
    appId: dev.hvir.ssh-acceptance
</match>
<match path="/private/var/tmp/ws/41848208/hvir/electron-builder.ssh-acceptance.yml" line=3>
    productName: hvir SSH Acceptance
</match>
<match path="/private/var/tmp/ws/41848208/hvir/electron-builder.ssh-acceptance.yml" line=15>
    hvir SSH Acceptance connects to contributor-selected SSH hosts on the local
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=2>
    * Reviewed terminal-engine capability evidence for the immutable artifact hvir consumes.
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=8>
    url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=19>
    termProgram: 'hvir',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=27>
    hvirOutputBuffering: false,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=43>
    clipboardOwner: 'hvir-renderer',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=69>
    baseOwner: 'hvir-terminal-presentation',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=78>
    defaultOwner: 'hvir-terminal-presentation',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts" line=88>
    preferenceOwner: 'hvir-terminal-presentation',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/electron-builder.yml" line=1>
    appId: dev.hvir.app
</match>
<match path="/private/var/tmp/ws/41848208/hvir/electron-builder.yml" line=2>
    productName: hvir
</match>
```
````

</details>


### `file_search`

****/packages/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/packages/**"
}
```

</details>

<details>
<summary>6 lines</summary>

```
5 files found:
  /private/var/tmp/ws/41848208/hvir/packages/rename-noreplace/rename_noreplace.c
  /private/var/tmp/ws/41848208/hvir/packages/rename-noreplace/LICENSE
  /private/var/tmp/ws/41848208/hvir/packages/rename-noreplace/binding.gyp
  /private/var/tmp/ws/41848208/hvir/packages/rename-noreplace/index.js
  /private/var/tmp/ws/41848208/hvir/packages/rename-noreplace/package.json
```

</details>


### `grep_search`

**electron-builder|Electron|main|renderer|UI|interface|user-facing**

<details>
<summary>Arguments</summary>

```json
{
  "query": "electron-builder|Electron|main|renderer|UI|interface|user-facing",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5317 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=2>
    * Preload bridge — the ONLY module permitted to touch `ipcRenderer` (enforced
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=4>
    * the shared IPC contract. The renderer never sees `ipcRenderer` and can only
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=13>
    RENDERER_INVOKE_CHANNELS,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=15>
    isRendererDiagnosticSession,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=19>
    type RendererIpcInvokeChannel,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=25>
    import { RendererDiagnosticsAdapter } from './renderer-diagnostics'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=28>
    const rendererDiagnostics = new RendererDiagnosticsAdapter({
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=29>
    send: (batch) => ipcRenderer.send('diagnostics:render-containment', batch),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=35>
    const signalRendererReady = (): void => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=38>
    ipcRenderer.send('app:renderer-ready', { ownerGeneration: readyGeneration })
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=41>
    ipcRenderer.on('diagnostics:session', (_event, session: unknown) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=42>
    rendererDiagnostics.activate(session)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=43>
    if (isRendererDiagnosticSession(session)) {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=45>
    signalRendererReady()
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=50>
    rendererReady: () => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=52>
    signalRendererReady()
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=61>
    rendererDiagnostics.recordRenderContainment(occurrenceId),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=64>
    acquireDropped: (files) => {
</match>
```
````

</details>


### `grep_search`

**project.*open|open.*project|terminal|remote.*connection|Git.*feature|document.*feature**

<details>
<summary>Arguments</summary>

```json
{
  "query": "project.*open|open.*project|terminal|remote.*connection|Git.*feature|document.*feature",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5061 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/terminal-clipboard-file-paste.ts" line=1>
    import { terminalClipboardFilePastePath } from '../shared'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/terminal-clipboard-file-paste.ts" line=9>
    export function terminalClipboardFilePasteText(
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/terminal-clipboard-file-paste.ts" line=13>
    return terminalClipboardFilePastePath(readNativePath(file))
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=26>
    import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=54>
    resolveTerminalClipboardFilePaste: (file) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/preload/index.ts" line=55>
    terminalClipboardFilePasteText(file, (candidate) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=39>
    readonly sourceTerminalId: string
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=61>
    readonly sourceTerminalId: string
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=80>
    private readonly terminalGenerations = new Map<string, number>()
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=81>
    private readonly pendingTerminalCounts = new Map<string, number>()
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=82>
    private readonly movingTerminals = new Set<string>()
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=94>
    const terminalKey = sourceTerminalKey(
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=97>
    request.sourceTerminalId,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=99>
    if (this.movingTerminals.has(terminalKey)) {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=100>
    throw new Error('Terminal web-pane authority is moving')
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=139>
    const terminalGeneration = this.terminalGeneration(terminalKey)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=148>
    terminalGeneration !== this.terminalGeneration(terminalKey)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=157>
    this.pendingTerminalCounts.set(
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=158>
    terminalKey,
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=159>
    (this.pendingTerminalCounts.get(terminalKey) ?? 0) + 1,
</match>
```
````

</details>


### `file_search`

****/*main.*{ts,js}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*main.*{ts,js}"
}
```

</details>

```
No files found matching pattern: **/*main.*{ts,js}
```


### `file_search`

****/*ui.*{ts,js,tsx,htm}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*ui.*{ts,js,tsx,htm}"
}
```

</details>

```
No files found matching pattern: **/*ui.*{ts,js,tsx,htm}
```


### `file_search`

****/src/**/*main*.{ts,js,tsx,htm}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**/*main*.{ts,js,tsx,htm}"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/main.tsx
```


### `file_search`

****/src/**/*web*.{ts,js,tsx,htm}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**/*web*.{ts,js,tsx,htm}"
}
```

</details>

<details>
<summary>15 lines</summary>

```
14 files found:
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/use-web-pane-workspace.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/web-pane-surface.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/WebPane.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/web-pane-url.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/WebPaneStack.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/web-pane-workspace-policy.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/web-pane-diagnostics.ts
  /private/var/tmp/ws/41848208/hvir/src/shared/web-pane.ts
  /private/var/tmp/ws/41848208/hvir/src/shared/ipc/web-pane.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/web-pane-boundary.ts
  /private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts
  /private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts
```

</details>


### `file_search`

****/src/**/*renderer*.{ts,js,tsx,htm}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**/*renderer*.{ts,js,tsx,htm}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
24 files found (showing first 20):
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/development/development-renderer-instrumentation.tsx
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/viewer/markdown-renderer.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/sessions/sessions-renderer-observation.ts
  /private/var/tmp/ws/41848208/hvir/src/renderer/src/workbench/use-renderer-ready.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-isolation.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-recovery-scenario.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-recovery-producer.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-lifecycle.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/terminal-renderer-lifecycle.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-authority.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-recovery.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-readiness-observer.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-recovery-delivery.ts
  /private/var/tmp/ws/41848208/hvir/src/main/smoke/renderer-readiness.ts
  /private/var/tmp/ws/41848208/hvir/src/main/renderer-event-delivery.ts
  /private/var/tmp/ws/41848208/hvir/src/main/terminal/renderer-pty-lifecycle.ts
  /private/var/tmp/ws/41848208/hvir/src/main/renderer-event-publisher.ts
  /private/var/tmp/ws/41848208/hvir/src/main/project-host/renderer-ssh-prompter.ts
  /private/var/tmp/ws/41848208/hvir/src/main/window/electron-renderer-recovery.ts
  /private/var/tmp/ws/41848208/hvir/src/main/window/electron-renderer-document-lifecycle.ts
```

</details>


### `grep_search`

**workspace-remote|remote.*connection|SSH.*host|git-workflow|document-review|sessions-projection**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workspace-remote|remote.*connection|SSH.*host|git-workflow|document-review|sessions-projection",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
863 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/41848208/hvir/src/main/project-host/ssh-project-file-transfer.ts" line=268>
    throw new Error(`SshHost expected ${this.port.hostId}, got ${path.hostId}`)
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-delivery-coordinator.ts" line=37>
    } from './document-review-coordinator'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-delivery-coordinator.ts" line=38>
    import { prepareDocumentReviewDeliveryPayload } from './document-review-delivery-policy'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-delivery-coordinator.ts" line=43>
    } from './document-review-delivery-terminal'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-delivery-coordinator.ts" line=147>
    type: 'document-review-delivery',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=25>
    } from './document-review-store-codec'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=26>
    import { isDocumentReviewRecord } from './document-review-policy'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=30>
    } from './document-review-retention'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=40>
    /** Specialized durable owner for user-authored document-review state. */
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=179>
    if (!parsed) throw new Error('Invalid bounded document-review model')
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=197>
    throw new Error('The stored document-review workspace limit was reached')
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=310>
    throw new Error('Recover the preserved document-review file before saving')
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-store.ts" line=333>
    throw new Error('The document-review store exceeds its bounded envelope')
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/index.ts" line=1>
    export { DocumentReviewCoordinator } from './document-review-coordinator'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/index.ts" line=2>
    export { DocumentReviewDeliveryCoordinator } from './document-review-delivery-coordinator'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/index.ts" line=6>
    } from './document-review-runtime'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/index.ts" line=7>
    export { DocumentReviewStore } from './document-review-store'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-coordinator.ts" line=21>
    import type { DocumentReviewStore } from './document-review-store'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-coordinator.ts" line=47>
    /** Owns one revocable document-review workspace effect per renderer generation. */
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/document-review/document-review-coordinator.ts" line=80>
    type: 'document-review',
</match>
```
````

</details>


### `grep_search`

**open.*project|project.*open|file-manager-reveal|FileTree|DirectoryTree**

<details>
<summary>Arguments</summary>

```json
{
  "query": "open.*project|project.*open|file-manager-reveal|FileTree|DirectoryTree",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
220 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/project-commands.ts" line=12>
    | 'openProject'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/project-commands.ts" line=46>
    openProject: (hostId, path, owner) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/project-commands.ts" line=47>
    withSshPresentation(owner, () => projects.openProject(hostId, path)),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/project-commands.ts" line=65>
    reopenWorkspace: (projectId, workspaceId) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/project-commands.ts" line=66>
    projects.reopenWorkspace(projectId, workspaceId),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/deps.ts" line=93>
    readonly openProject: (
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/authority-channel-policy.ts" line=19>
    'project:open',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/project-fixture-commands.ts" line=68>
    | 'openProject'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/project-fixture-commands.ts" line=120>
    openProject: (hostId, path) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/sessions-visual.ts" line=176>
    content: '# Session-aware workbench\\A\\A Explore the workspace while tasks continue in the background.\\A\\A Open Sessions whenever attention moves across projects.';
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/workspace-close.ts" line=52>
    reopenWorkspace: (projectId: string, workspaceId: string) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/workspace-close.ts" line=59>
    const project = reopened.projects.find((candidate) => candidate.id === projectId)!
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/workspace-close.ts" line=68>
    projects: reopened.projects.map((candidate) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/workspace-close.ts" line=115>
    reopenWorkspace: (projectId: string, workspaceId: string) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/workspace-close.ts" line=116>
    coordinator.reopenWorkspace(projectId, workspaceId),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/smoke/workspace-close.ts" line=307>
    return reject(new Error('workspace middle-click opened the project-close dialog'));
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts" line=13>
    | 'openProject'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts" line=60>
    ipc.handle('project:open', (req, context) =>
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts" line=61>
    operationResult(() => deps.openProject(req.hostId, req.path, context.owner())),
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts" line=98>
    operationResult(() => deps.reopenWorkspace(req.projectId, req.workspaceId)),
</match>
```
````

</details>


### `grep_search`

**terminal-presentation|web-pane|ghostty-web|pty-native**

<details>
<summary>Arguments</summary>

```json
{
  "query": "terminal-presentation|web-pane|ghostty-web|pty-native",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
621 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/41848208/hvir/src/main/renderer-resource-scopes.ts" line=25>
    | 'web-pane'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/index.ts" line=503>
    .catch((error) => console.error('[web-pane] suspend cleanup failed', error))
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/deps.ts" line=26>
    import type { WebPaneRouteRegistry } from '../web-pane/web-pane-route-registry'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/authority-channel-policy.ts" line=54>
    'web-pane:open',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/authority-channel-policy.ts" line=55>
    'web-pane:close',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/authority-channel-policy.ts" line=56>
    'web-pane:open-external',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/authority-channel-policy.ts" line=57>
    'web-pane:open-browser',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/authority-channel-policy.ts" line=113>
    'web-pane:open',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=15>
    export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=72>
    /** Main-owned capability registry for the complete web-pane lifecycle. */
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts" line=100>
    throw new Error('Terminal web-pane authority is moving')
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=23>
    ipc.handle('web-pane:open', (req, context) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=65>
    { lifetime: 'workspace', type: 'web-pane', root, id: route.paneId },
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=78>
    ipc.handle('web-pane:close', async (req, context) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=83>
    'web-pane',
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=91>
    ipc.handle('web-pane:open-external', async (req, context) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=104>
    ipc.handle('web-pane:open-browser', async (req, context) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=123>
    ipc.handleSend('web-pane:reserved-bindings', (bindings, context) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts" line=126>
    ipc.handleSend('web-pane:full-page', ({ paneId }, context) => {
</match>
<match path="/private/var/tmp/ws/41848208/hvir/src/main/ipc.ts" line=18>
    import { registerWebPaneIpc } from './ipc/features/web-pane'
</match>
```
````

</details>


### `file_search`

****/scripts/**/*terminal*.{ts,js,mts,tsv}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/**/*terminal*.{ts,js,mts,tsv}"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/41848208/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts
  /private/var/tmp/ws/41848208/hvir/scripts/generate-terminal-theme-catalog.mts
```


### `file_search`

****/scripts/**/*project*.{ts,js,mts,tsv}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/scripts/**/*project*.{ts,js,mts,tsv}"
}
```

</details>

<details>
<summary>9 lines</summary>

```
8 files found:
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/migrate-project-tokens.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/canonical-project.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/canonical-project-config.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/audit-canonical-project.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/canonical-project-fields.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/canonical-project-item.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/project-token-fields.ts
  /private/var/tmp/ws/41848208/hvir/scripts/project-management/project-config.ts
```

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>120 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts`. Lines 1 to 120 (120 lines total): 
```
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'

type ProjectIpcDeps = Pick<
  IpcDeps,
  | 'getProjectState'
  | 'listHosts'
  | 'connectHost'
  | 'disconnectHost'
  | 'browseHost'
  | 'projectFolderPicker'
  | 'openProject'
  | 'switchWorkspace'
  | 'refreshProject'
  | 'updateWatchInterests'
  | 'closeProject'
  | 'pruneWorktrees'
  | 'dismissWorkspace'
  | 'planWorkspaceClose'
  | 'closeWorkspace'
  | 'reopenWorkspace'
  | 'acknowledgeWorkspace'
  | 'respondSshPrompt'
>

export function registerProjectIpc(ipc: IpcRegistrar, deps: ProjectIpcDeps): void {
  ipc.handle('project:root', () => deps.getProjectState())
  ipc.handle('project:hosts', () => deps.listHosts())
  ipc.handle('project:connect-host', (req, context) =>
    operationResult(() => deps.connectHost(req.hostId, context.owner())),
  )
  ipc.handle('project:disconnect-host', (req) =>
    operationResult(() => deps.disconnectHost(req.hostId)),
  )
  ipc.handle('project:browse-host', (req, context) =>
    operationResult(() => deps.browseHost(req.hostId, req.path, context.owner())),
  )
  ipc.handle('project:folder-picker-start', (req, context) =>
    operationResult(() => deps.projectFolderPicker.start(context.owner(), req.hostId)),
  )
  ipc.handle('project:folder-picker-browse', (req, context) =>
    operationResult(() =>
      deps.projectFolderPicker.browse(context.owner(), req.pickerId, req.path),
    ),
  )
  ipc.handle('project:folder-picker-create-directory', (req, context) =>
    operationResult(() =>
      deps.projectFolderPicker.createDirectory(
        context.owner(),
        req.pickerId,
        req.destinationParent,
        req.name,
      ),
    ),
  )
  ipc.handle('project:folder-picker-close', (req, context) =>
    operationResult(() => deps.projectFolderPicker.close(context.owner(), req.pickerId)),
  )
  ipc.handle('project:open', (req, context) =>
    operationResult(() => deps.openProject(req.hostId, req.path, context.owner())),
  )
  ipc.handle('project:switch', (req) =>
    operationResult(() => deps.switchWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('project:refresh', (req) =>
    operationResult(() => deps.refreshProject(req.projectId)),
  )
  ipc.handle('project:watch-interests', (req) =>
    operationResult(async () => {
      ipc.authority.assertActiveWorkspace(req.root)
      return deps.updateWatchInterests(req.paths)
    }),
  )
  ipc.handle('project:close', (req) =>
    operationResult(() => deps.closeProject(req.projectId)),
  )
  ipc.handle('workspace:prune', (req) =>
    operationResult(() => deps.pruneWorktrees(req.projectId)),
  )
  ipc.handle('workspace:dismiss', (req) =>
    operationResult(() => deps.dismissWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('workspace:plan-close', (req) =>
    operationResult(() => deps.planWorkspaceClose(req.projectId, req.workspaceId)),
  )
  ipc.handle('workspace:close', (req) =>
    operationResult(() =>
      deps.closeWorkspace(
        req.projectId,
        req.workspaceId,
        req.expectedTerminalCount,
        req.terminateTerminals,
      ),
    ),
  )
  ipc.handle('workspace:reopen', (req) =>
    operationResult(() => deps.reopenWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('workspace:acknowledge', (req) =>
    operationResult(() => deps.acknowledgeWorkspace(req.projectId, req.workspaceId)),
  )
  ipc.handle('ssh:prompt-response', (req, context) => {
    if (!Number.isSafeInteger(req?.id) || req.id <= 0) {
      throw new Error('Invalid SSH prompt id')
    }
    if (
      req.answers !== undefined &&
      (!Array.isArray(req.answers) ||
        req.answers.length > 16 ||
        req.answers.some(
          (answer) => typeof answer !== 'string' || answer.length > 16_384,
        ))
    ) {
      throw new Error('Invalid SSH prompt answers')
    }
    deps.respondSshPrompt(context.owner(), req.id, req.answers)
  })
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>139 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts`. Lines 1 to 145 (145 lines total): 
```
import {
  LOCAL_HOST_ID,
  hostPathEquals,
  parseKeybindingOverrides,
  type HostPath,
} from '../../../shared'
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'
import { operationResult } from '../operation-result'

type WebPaneIpcDeps = Pick<
  IpcDeps,
  | 'getProject'
  | 'ptySupervisor'
  | 'rendererResources'
  | 'webPanes'
  | 'openExternal'
  | 'updateWebPaneBindings'
  | 'updateWebPaneFullPage'
>

export function registerWebPaneIpc(ipc: IpcRegistrar, deps: WebPaneIpcDeps): void {
  ipc.handle('web-pane:open', (req, context) => {
    const owner = context.owner()
    return operationResult(async () => {
      const active = deps.getProject()
      let root: HostPath
      let terminalId: string
      if (req.source === 'terminal') {
        root = ipc.authority.workspaceRoot(req.root)
        terminalId = req.terminalId
        if (!isTerminalId(terminalId)) throw new Error('Invalid source terminal')
        const terminal = deps.ptySupervisor.get(terminalId)
        if (
          !terminal ||
          terminal.ownerId !== owner.id ||
          terminal.ownerGeneration !== owner.generation ||
          terminal.hostId !== root.hostId ||
          !hostPathEquals(terminal.workspaceRoot, root)
        ) {
          throw new Error('Web pane source terminal is not live in this workspace')
        }
      } else {
        if (!isWebPaneId(req.paneId)) throw new Error('Invalid source web pane')
        const source = deps.webPanes.source(req.paneId, owner.id, owner.generation)
        if (!source) throw new Error('Source web pane is no longer live')
        root = ipc.authority.workspaceRoot(source.workspaceRoot)
        terminalId = source.terminalId
      }
      if (!hostPathEquals(root, active.root) || root.hostId !== active.host.hostId) {
        throw new Error('Web panes may be opened only from the active workspace')
      }
      deps.rendererResources.assertCurrent(owner)
      const route = await deps.webPanes.open({
        ownerId: owner.id,
        ownerGeneration: owner.generation,
        sourceTerminalId: terminalId,
        workspaceRoot: root,
        host: active.host,
        url: req.url,
      })
      try {
        deps.rendererResources.register(
          owner,
          { lifetime: 'workspace', type: 'web-pane', root, id: route.paneId },
          () => deps.webPanes.close(route.paneId, owner.id, owner.generation),
          // Reopening the same workspace/origin intentionally returns the same route.
          { duplicate: 'reuse' },
        )
        return route
      } catch (error) {
        await deps.webPanes.close(route.paneId, owner.id, owner.generation)
        throw error
      }
    })
  })

  ipc.handle('web-pane:close', async (req, context) => {
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
    const owner = context.owner()
    const disposed = await deps.rendererResources.disposeResource(
      owner,
      'web-pane',
      req.paneId,
    )
    if (!disposed) {
      await deps.webPanes.close(req.paneId, owner.id, owner.generation)
    }
  })

  ipc.handle('web-pane:open-external', async (req, context) => {
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
    const owner = context.owner()
    const decision = deps.webPanes.navigationForPane(
      req.paneId,
      owner.id,
      req.url,
      owner.generation,
    )
    if (decision.kind !== 'external') throw new Error('External URL is not authorized')
    await deps.openExternal(decision.url)
  })

  ipc.handle('web-pane:open-browser', async (req, context) => {
    if (!isWebPaneId(req.paneId)) throw new Error('Invalid web pane id')
    const owner = context.owner()
    const source = deps.webPanes.source(req.paneId, owner.id, owner.generation)
    const decision = deps.webPanes.navigationForPane(
      req.paneId,
      owner.id,
      req.url,
      owner.generation,
    )
    if (!source || decision.kind !== 'allow') {
      throw new Error('Browser URL is not authorized by this web pane')
    }
    if (source.hostId !== LOCAL_HOST_ID) {
      throw new Error('Open in browser for SSH panes needs a compatibility route')
    }
    await deps.openExternal(decision.url)
  })

  ipc.handleSend('web-pane:reserved-bindings', (bindings, context) => {
    deps.updateWebPaneBindings(context.owner(), parseKeybindingOverrides(bindings))
  })
  ipc.handleSend('web-pane:full-page', ({ paneId }, context) => {
    const owner = context.owner()
    if (
      paneId !== undefined &&
      (!isWebPaneId(paneId) || !deps.webPanes.has(paneId, owner.id, owner.generation))
    ) {
      throw new Error('Invalid full-page web pane')
    }
    deps.updateWebPaneFullPage(owner, paneId)
  })
}

function isTerminalId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(value)
}

function isWebPaneId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-f0-9-]{36}$/.test(value)
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>246 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts`. Lines 1 to 260 (at least 260 lines total): 
```
import { randomUUID } from 'node:crypto'

import {
  hostPathEquals,
  parseLoopbackHttpTarget,
  type HostPath,
  type LoopbackHttpTarget,
  type WebPaneDiagnosticEvent,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import { LoopbackHttpProxy, type ProxyCredentials } from './loopback-http-proxy'

export const MAX_OPEN_WEB_PANES = 16
export const MAX_OPEN_WEB_PANES_PER_HOST = 8
export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'

export interface PrepareWebPaneSessionRequest {
  readonly partition: string
  readonly proxyPort: number
  readonly primaryUrl: string
}

export interface WebPaneRouteRegistryOptions {
  readonly prepareSession: (
    request: PrepareWebPaneSessionRequest,
  ) => Promise<() => Promise<void>>
  readonly destroyGuest: (guestId: number) => void
  readonly emitDiagnostic?: (
    ownerId: number,
    ownerGeneration: number,
    paneId: string,
    event: WebPaneDiagnosticEvent,
  ) => void
}

export interface OpenWebPaneRouteRequest {
  readonly ownerId: number
  readonly ownerGeneration?: number
  readonly sourceTerminalId: string
  readonly workspaceRoot: HostPath
  readonly host: ProjectHost
  readonly url: string
}

export interface OpenWebPaneRoute {
  readonly paneId: string
  readonly partition: string
  readonly url: string
  readonly origin: string
}

export type WebPaneNavigationDecision =
  | { readonly kind: 'allow'; readonly url: string }
  | { readonly kind: 'loopback'; readonly url: string }
  | { readonly kind: 'external'; readonly url: string }
  | { readonly kind: 'block' }

interface WebPaneRouteEntry extends OpenWebPaneRoute {
  readonly ownerId: number
  readonly ownerGeneration: number
  readonly sourceTerminalId: string
  readonly workspaceRoot: HostPath
  readonly hostId: string
  readonly target: LoopbackHttpTarget
  readonly proxy: LoopbackHttpProxy
  readonly disposeSession: () => Promise<void>
  guestId?: number
  attachmentClaimed: boolean
  attachmentUrl: string
}

/** Main-owned capability registry for the complete web-pane lifecycle. */
export class WebPaneRouteRegistry {
  private readonly entries = new Map<string, WebPaneRouteEntry>()
  private readonly pending = new Map<string, Promise<WebPaneRouteEntry>>()
  private readonly pendingHostCounts = new Map<string, number>()
  private readonly ownerAllGenerations = new Map<number, number>()
  private readonly ownerGenerations = new Map<string, number>()
  private readonly workspaceGenerations = new Map<string, number>()
  private readonly terminalGenerations = new Map<string, number>()
  private readonly pendingTerminalCounts = new Map<string, number>()
  private readonly movingTerminals = new Set<string>()
  private globalGeneration = 0

  constructor(private readonly options: WebPaneRouteRegistryOptions) {}

  async open(request: OpenWebPaneRouteRequest): Promise<OpenWebPaneRoute> {
    const target = parseLoopbackHttpTarget(request.url)
    if (!target) throw new Error('Invalid loopback HTTP URL')
    if (request.host.hostId !== request.workspaceRoot.hostId) {
      throw new Error('Web pane host does not own its workspace')
    }
    const ownerGeneration = request.ownerGeneration ?? 0
    const terminalKey = sourceTerminalKey(
      request.ownerId,
      ownerGeneration,
      request.sourceTerminalId,
    )
    if (this.movingTerminals.has(terminalKey)) {
      throw new Error('Terminal web-pane authority is moving')
    }
    const key = routeKey(
      request.ownerId,
      ownerGeneration,
      request.workspaceRoot,
      target.origin,
    )
    const existing = this.entryByKey(key)
    if (existing) {
      if (!existing.attachmentClaimed) existing.attachmentUrl = target.url
      return publicRoute(existing, target.url)
    }
    const pending = this.pending.get(key)
    if (pending) {
      const entry = await pending
      if (!entry.attachmentClaimed) entry.attachmentUrl = target.url
      return publicRoute(entry, target.url)
    }
    if (this.entries.size + this.pending.size >= MAX_OPEN_WEB_PANES) {
      throw new Error(`Too many live web panes (limit ${MAX_OPEN_WEB_PANES})`)
    }
    const pendingHostCount = this.pendingHostCounts.get(request.host.hostId) ?? 0
    const hostCount =
      [...this.entries.values()].filter((entry) => entry.hostId === request.host.hostId)
        .length + pendingHostCount
    if (hostCount >= MAX_OPEN_WEB_PANES_PER_HOST) {
      throw new Error(
        `Too many live web panes for this host (limit ${MAX_OPEN_WEB_PANES_PER_HOST})`,
      )
    }

    const ownerRevocationGeneration = this.ownerGeneration(
      request.ownerId,
      ownerGeneration,
    )
    const ownerAllGeneration = this.ownerAllGeneration(request.ownerId)
    const workspaceKey = hostPathKey(request.workspaceRoot)
    const workspaceGeneration = this.workspaceGeneration(workspaceKey)
    const terminalGeneration = this.terminalGeneration(terminalKey)
    const globalGeneration = this.globalGeneration
    const create = this.createEntry(request, target).then(async (entry) => {
      if (
        globalGeneration !== this.globalGeneration ||
        ownerRevocationGeneration !==
          this.ownerGeneration(request.ownerId, ownerGeneration) ||
        ownerAllGeneration !== this.ownerAllGeneration(request.ownerId) ||
        workspaceGeneration !== this.workspaceGeneration(workspaceKey) ||
        terminalGeneration !== this.terminalGeneration(terminalKey)
      ) {
        await disposeEntry(entry, this.options.destroyGuest)
        throw new Error('Web pane was revoked while opening')
      }
      this.entries.set(entry.paneId, entry)
      return entry
    })
    this.pending.set(key, create)
    this.pendingTerminalCounts.set(
      terminalKey,
      (this.pendingTerminalCounts.get(terminalKey) ?? 0) + 1,
    )
    this.pendingHostCounts.set(request.host.hostId, pendingHostCount + 1)
    try {
      return publicRoute(await create, target.url)
    } finally {
      this.pending.delete(key)
      const terminalPending = (this.pendingTerminalCounts.get(terminalKey) ?? 1) - 1
      if (terminalPending > 0) {
        this.pendingTerminalCounts.set(terminalKey, terminalPending)
      } else {
        this.pendingTerminalCounts.delete(terminalKey)
      }
      const remaining = (this.pendingHostCounts.get(request.host.hostId) ?? 1) - 1
      if (remaining > 0) this.pendingHostCounts.set(request.host.hostId, remaining)
      else this.pendingHostCounts.delete(request.host.hostId)
    }
  }

  claimAttachment(request: {
    readonly ownerId: number
    readonly ownerGeneration?: number
    readonly paneId: string
    readonly partition: string
    readonly initialUrl: string
  }): OpenWebPaneRoute | undefined {
    const entry = this.entries.get(request.paneId)
    const target = parseLoopbackHttpTarget(request.initialUrl)
    if (
      !entry ||
      entry.ownerId !== request.ownerId ||
      (request.ownerGeneration !== undefined &&
        entry.ownerGeneration !== request.ownerGeneration) ||
      entry.partition !== request.partition ||
      entry.attachmentClaimed ||
      !target ||
      target.url !== entry.attachmentUrl
    ) {
      return undefined
    }
    entry.attachmentClaimed = true
    return publicRoute(entry, entry.attachmentUrl)
  }

  bindGuestForPartition(
    ownerId: number,
    partition: string,
    guestId: number,
    ownerGeneration?: number,
  ): string | undefined {
    const entry = [...this.entries.values()].find(
      (candidate) =>
        candidate.ownerId === ownerId &&
        (ownerGeneration === undefined ||
          candidate.ownerGeneration === ownerGeneration) &&
        candidate.partition === partition,
    )
    if (!entry || !entry.attachmentClaimed || entry.guestId !== undefined) {
      return undefined
    }
    entry.guestId = guestId
    return entry.paneId
  }

  proxyCredentials(
    guestId: number,
    challenge: {
      readonly isProxy: boolean
      readonly host: string
      readonly port: number
      readonly realm: string
    },
  ): ProxyCredentials | undefined {
    const entry = this.entryByGuest(guestId)
    if (
      !entry ||
      !challenge.isProxy ||
      challenge.host !== '127.0.0.1' ||
      challenge.port !== entry.proxy.port ||
      challenge.realm !== entry.proxy.credentials.realm
    ) {
      return undefined
    }
    return entry.proxy.credentials
  }

  navigation(guestId: number, rawUrl: string): WebPaneNavigationDecision {
    const entry = this.entryByGuest(guestId)
    return entry ? navigationDecision(entry, rawUrl) : { kind: 'block' }
  }

  navigationForPane(
    paneId: string,
    ownerId: number,
    rawUrl: string,
    ownerGeneration?: number,
  ): WebPaneNavigationDecision {
    const entry = this.entries.get(paneId)
    return entry &&
      entry.ownerId === ownerId &&
      (ownerGeneration === undefined || entry.ownerGeneration === ownerGeneration)
      ? navigationDecision(entry, rawUrl)
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/main/index.ts",
  "startLine": 480,
  "endLine": 560
}
```

</details>

<details>
<summary>42 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/main/index.ts`. Lines 480 to 519 (519 lines total): 
```
      .catch((error) => {
        diagnostics.recordApplication('application-shutdown-failed')
        console.error('[shutdown] workbench cleanup failed', error)
      })
      .finally(async () => {
        await diagnostics.dispose()
        app.quit()
      })
  })
  async function suspendWorkbenchSessions(): Promise<void> {
    await workspaceCoordinator?.stopWatch()
    await workspaceCoordinator?.settle()
    const roots =
      projectRegistry
        ?.state()
        .projects.flatMap((project) =>
          project.workspaces.map((workspace) => workspace.root),
        ) ?? []
    await Promise.all(roots.map((root) => rendererScopes.revokeWorkspace(root)))
    ptySupervisor?.disposeSessions()
    htmlPreviews.clear()
    await webPaneRoutes
      .closeAll()
      .catch((error) => console.error('[web-pane] suspend cleanup failed', error))
    sshPrompter?.cancelAll()
    await terminalSessionRegistry?.flush()
    await harnessProfileStore?.flush()
    await documentReview?.flush()
    await hostCatalog?.disconnectSshHosts()
  }
  async function shutdown(): Promise<void> {
    workspaceCoordinator?.stopPolling()
    await workspaceCoordinator
      ?.stopWatch()
      .catch((error) => console.error('[shutdown] watcher cleanup failed', error))
    await workspaceCoordinator?.settle()
  }
}
createWorkbenchEntry()

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/WebPane.tsx",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>253 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/WebPane.tsx`. Lines 1 to 260 (at least 260 lines total): 
```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import type {
  HostPath,
  WebPaneBlockedNavigation,
  WebPaneDiagnosticEvent,
} from '../../../shared'
import { ElectronWebPaneSurface } from './ElectronWebPaneSurface'
import {
  appendWebPaneDiagnostic,
  redactedWebPaneDiagnosticUrl,
  webPaneDiagnosticReport,
  type WebPaneDiagnosticRow,
} from './web-pane-diagnostics'
import type { WebPaneSurface, WebPaneSurfaceHandle } from './web-pane-surface'
import { webPaneUrlFromInput } from './web-pane-url'

export interface WebViewState {
  readonly id: string
  readonly title: string
  readonly url: string
  readonly origin: string
  readonly partition: string
  readonly workspaceRoot: HostPath
  readonly sourceTerminalId: string
  readonly blockedNavigation?: WebPaneBlockedNavigation
  readonly routeDiagnostic?: {
    readonly revision: number
    readonly event: WebPaneDiagnosticEvent
  }
}

/** Product chrome around the swappable, hostile-content guest surface. */
export function WebPane({
  view,
  focused,
  onToggleFocus,
  onTitle,
  onBlockedNavigation,
  onOpenBrowser,
  onRevealTerminal,
  Surface = ElectronWebPaneSurface,
}: {
  readonly view: WebViewState
  readonly focused: boolean
  readonly onToggleFocus: () => void
  readonly onTitle: (title: string) => void
  readonly onBlockedNavigation: (navigation: WebPaneBlockedNavigation) => void
  readonly onOpenBrowser: (url: string) => void
  readonly onRevealTerminal: () => void
  readonly Surface?: WebPaneSurface
}): ReactElement {
  const surfaceRef = useRef<WebPaneSurfaceHandle>(null)
  const editingRef = useRef(false)
  const [pathInput, setPathInput] = useState(() => pathOf(view.url))
  const [diagnostics, setDiagnostics] = useState<readonly WebPaneDiagnosticRow[]>([])
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false)
  const browserHandoffAvailable = view.workspaceRoot.hostId === 'local'

  useEffect(() => {
    setPathInput(pathOf(view.url))
    surfaceRef.current?.navigate(view.url)
  }, [view.url])

  useEffect(() => {
    if (!view.blockedNavigation) return
    appendDiagnostic(setDiagnostics, {
      kind: 'blocked-navigation',
      message: `Blocked ${view.blockedNavigation.kind} navigation`,
      url: view.blockedNavigation.url,
    })
  }, [view.blockedNavigation])

  useEffect(() => {
    if (view.routeDiagnostic) {
      appendDiagnostic(setDiagnostics, view.routeDiagnostic.event)
    }
  }, [view.routeDiagnostic])

  const navigate = (): void => {
    surfaceRef.current?.navigate(webPaneUrlFromInput(view.origin, pathInput))
  }
  const currentUrl = webPaneUrlFromInput(view.origin, pathInput)

  return (
    <div className="web-pane" data-diagnostic-capture="web-pane">
      <div className="web-pane-toolbar">
        <button
          type="button"
          aria-label="Back"
          title="Back"
          onClick={() => surfaceRef.current?.back()}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Forward"
          title="Forward"
          onClick={() => surfaceRef.current?.forward()}
        >
          →
        </button>
        <span className="web-pane-origin" title={view.origin}>
          {view.origin}
        </span>
        <form
          className="web-pane-path"
          onSubmit={(event) => {
            event.preventDefault()
            editingRef.current = false
            navigate()
          }}
        >
          <input
            aria-label={`Path on ${view.title}`}
            value={pathInput}
            spellCheck={false}
            onFocus={() => {
              editingRef.current = true
            }}
            onBlur={() => {
              editingRef.current = false
            }}
            onChange={(event) => setPathInput(event.target.value)}
            placeholder="/"
          />
        </form>
        <button
          type="button"
          aria-label={`Reload ${view.title}`}
          title="Reload"
          onClick={() => surfaceRef.current?.reload()}
        >
          ⟳
        </button>
        <button
          type="button"
          aria-label="Reveal source terminal"
          title="Back to terminal"
          onClick={onRevealTerminal}
        >
          &gt;_
        </button>
        <button
          type="button"
          aria-label="Web pane diagnostics"
          aria-pressed={diagnosticsOpen}
          title="Diagnostics"
          onClick={() => setDiagnosticsOpen((open) => !open)}
        >
          {diagnostics.length > 0 ? `!${diagnostics.length}` : 'ⓘ'}
        </button>
        <button
          type="button"
          aria-label={
            focused
              ? `Restore the workbench around ${view.title}`
              : `Expand ${view.title} to the full window`
          }
          aria-pressed={focused}
          title={focused ? 'Restore workbench' : 'Full page'}
          onClick={onToggleFocus}
        >
          {focused ? '⇲' : '⛶'}
        </button>
        <button
          type="button"
          aria-label={`Open ${view.title} in the browser`}
          title={
            browserHandoffAvailable
              ? 'Open in browser'
              : 'Browser handoff for SSH panes needs a compatibility route'
          }
          disabled={!browserHandoffAvailable}
          onClick={() => onOpenBrowser(currentUrl)}
        >
          ↗
        </button>
      </div>
      {view.blockedNavigation ? (
        <div className="web-pane-navigation-blocked" role="status">
          <span>
            {view.blockedNavigation.kind === 'external'
              ? `This link leaves hvir for ${hostnameOf(view.blockedNavigation.url)}.`
              : `This link uses another local server (${originOf(view.blockedNavigation.url)}).`}
          </span>
          <button
            type="button"
            onClick={() => onBlockedNavigation(view.blockedNavigation!)}
          >
            {view.blockedNavigation.kind === 'external'
              ? 'Open in system browser'
              : 'Open as web pane'}
          </button>
        </div>
      ) : null}
      {diagnosticsOpen ? (
        <section className="web-pane-diagnostics" aria-label="Web pane diagnostics">
          <div>
            <strong>Recent pane events</strong>
            <button
              type="button"
              disabled={diagnostics.length === 0}
              onClick={() =>
                void navigator.clipboard.writeText(
                  webPaneDiagnosticReport(view, diagnostics),
                )
              }
            >
              Copy report
            </button>
          </div>
          {diagnostics.length === 0 ? (
            <p>No failures or console warnings recorded.</p>
          ) : (
            <ol>
              {diagnostics.map((row, index) => (
                <li key={`${row.at}:${index}`}>
                  <code>{row.kind}</code> {row.message}
                  {row.url ? ` — ${redactedWebPaneDiagnosticUrl(row.url)}` : ''}
                </li>
              ))}
            </ol>
          )}
        </section>
      ) : null}
      <Surface
        ref={surfaceRef}
        paneId={view.id}
        partition={view.partition}
        initialUrl={view.url}
        onNavigate={(url) => {
          try {
            const parsed = new URL(url)
            if (parsed.origin === view.origin && !editingRef.current) {
              setPathInput(parsed.pathname + parsed.search + parsed.hash)
            }
          } catch {
            // Main blocks invalid top-level targets before they reach this seam.
          }
        }}
        onTitle={onTitle}
        onDiagnostic={(event) => appendDiagnostic(setDiagnostics, event)}
      />
    </div>
  )
}

function appendDiagnostic(
  update: (
    value: (current: readonly WebPaneDiagnosticRow[]) => readonly WebPaneDiagnosticRow[],
  ) => void,
  event: WebPaneDiagnosticEvent | Omit<WebPaneDiagnosticRow, 'at'>,
): void {
  update((current) => appendWebPaneDiagnostic(current, event))
}

function pathOf(url: string): string {
  try {
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/FileTree.tsx",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>257 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/FileTree.tsx`. Lines 1 to 260 (at least 260 lines total): 
```
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
} from 'react'

import {
  basenameHostPath,
  containsHostPath,
  GIT_CHANGE_DISPLAY_LIMIT,
  MAX_PROJECT_WATCH_INTERESTS,
  unwrapOperation,
  hostPath,
  type FileType,
  type GitChangedFile,
  type FileOpenContext,
  type HostPath,
} from '../../../shared'
import { DirectoryTree, type DirectoryTreeRevealRequest } from './DirectoryTree'
import { MissingWorkspaceNotice } from '../workspaces/MissingWorkspaceNotice'
import { buildTreeGitDecorations } from './git-status-decoration'
import { FilenameSearch } from './FilenameSearch'
import { FileCreateOverlays } from './FileCreateOverlays'
import { fileActionDestination } from './file-action-destination'
import {
  canDragProjectEntry,
  isProjectEntryDrag,
  PROJECT_ENTRY_DRAG_TYPE,
  projectEntryDropRequest,
  type ProjectEntryDragSource,
} from './project-entry-drag'
import { useFileCreateActions } from './use-file-create-actions'
import type { ViewerPathRebindCapability } from '../viewer/viewer-path-rebind'
import type { ViewerPathRemovalCapability } from '../viewer/viewer-path-removal'

const NO_CHANGED_FILES: readonly GitChangedFile[] = []

interface FileDropTarget {
  readonly path: HostPath
  readonly effect: 'copy' | 'move'
}

interface FileTreeProps {
  readonly root: HostPath
  readonly refreshVersion: number
  readonly searchRefreshVersion: number
  readonly ignoredRefreshVersion: number
  readonly changedFiles?: readonly GitChangedFile[]
  readonly gitChangesLimited?: boolean
  readonly selected?: HostPath
  readonly revealRequest?: DirectoryTreeRevealRequest
  readonly onOpen: (path: HostPath, pinned: boolean, context?: FileOpenContext) => void
  readonly onPointerActivate?: () => void
  readonly viewerPathRebind: ViewerPathRebindCapability & ViewerPathRemovalCapability
  readonly onWorkspaceContentChanged: () => void
  readonly connected?: boolean
  readonly missing?: boolean
  readonly hidden?: boolean
  readonly gitEnabled?: boolean
  readonly watchInterestsLimited?: boolean
  readonly onExpandedChange?: (path: HostPath, expanded: boolean) => void
}

export function FileTree({
  root,
  refreshVersion,
  searchRefreshVersion,
  ignoredRefreshVersion,
  changedFiles = NO_CHANGED_FILES,
  gitChangesLimited = false,
  selected,
  revealRequest,
  onOpen,
  onPointerActivate,
  viewerPathRebind,
  onWorkspaceContentChanged,
  connected = true,
  missing = false,
  hidden = false,
  gitEnabled = true,
  watchInterestsLimited = false,
  onExpandedChange,
}: FileTreeProps): ReactElement {
  const [searchActive, setSearchActive] = useState(false)
  const [dropTarget, setDropTarget] = useState<FileDropTarget>()
  const projectDrag = useRef<ProjectEntryDragSource | undefined>(undefined)
  const fileCreate = useFileCreateActions({
    root,
    onCreatedFile: onOpen,
    canRebindPath: viewerPathRebind.canRebindPath,
    onRebindPath: viewerPathRebind.rebindPath,
    reviewPathRemoval: viewerPathRebind.reviewPathRemoval,
    closeCleanPath: viewerPathRebind.closeCleanPath,
    onWorkspaceContentChanged,
  })
  useEffect(() => {
    projectDrag.current = undefined
    setDropTarget(undefined)
  }, [connected, root.hostId, root.path])
  const gitDecorations = useMemo(
    () =>
      buildTreeGitDecorations(
        root,
        gitEnabled ? changedFiles : NO_CHANGED_FILES,
        gitEnabled && !gitChangesLimited,
      ),
    [changedFiles, gitChangesLimited, gitEnabled, root],
  )
  const loadIgnoredEntries = useCallback(
    async (
      directory: HostPath,
      names: readonly string[],
    ): Promise<ReadonlySet<string>> => {
      const ignored = new Set<string>()
      try {
        for (let index = 0; index < names.length; index += 512) {
          const result = await window.hvir.invoke('git:ignored-entries', {
            root,
            directory,
            names: names.slice(index, index + 512),
          })
          for (const name of result.ignoredNames) ignored.add(name)
        }
      } catch {
        // Git decoration is optional; filesystem browsing remains available.
      }
      return ignored
    },
    [root],
  )

  return (
    <section className="rail-section files-panel" aria-label="Files" hidden={hidden}>
      {missing ? (
        <MissingWorkspaceNotice root={root} />
      ) : (
        <>
          <FilenameSearch
            root={root}
            connected={connected}
            gitIgnoreAvailable={gitEnabled}
            refreshVersion={searchRefreshVersion + fileCreate.refreshVersion}
            onActiveChange={setSearchActive}
            onOpen={onOpen}
          />
          <div
            className={`tree-scroll${dropTarget ? ' file-drop-active' : ''}`}
            hidden={searchActive}
            onContextMenu={(event) => fileCreate.openRootFromPointer(event)}
            onKeyDown={(event) => {
              if (!isPasteShortcut(event) || isEditableTarget(event.target)) return
              const target = fileTarget(event.target, root)
              if (!target) return
              event.preventDefault()
              event.stopPropagation()
              fileCreate.pasteFiles(target.path, target.type)
            }}
            onDragStart={(event) => {
              const source = fileTarget(event.target, root)
              if (
                !connected ||
                fileCreate.pending ||
                !source ||
                !source.projectOperationAvailable ||
                !canDragProjectEntry(root, source.path, source.type)
              ) {
                event.preventDefault()
                projectDrag.current = undefined
                setDropTarget(undefined)
                return
              }
              projectDrag.current = {
                source: source.path,
                sourceType: source.type,
              }
              event.dataTransfer.effectAllowed = 'move'
              event.dataTransfer.setData(PROJECT_ENTRY_DRAG_TYPE, '1')
            }}
            onDragOver={(event) => {
              const target = fileTarget(event.target, root) ?? {
                path: root,
                type: 'dir',
                projectOperationAvailable: true,
              }
              if (isProjectEntryDrag([...event.dataTransfer.types])) {
                const request = projectDrag.current
                  ? projectEntryDropRequest(
                      root,
                      projectDrag.current,
                      target.path,
                      target.type,
                    )
                  : undefined
                if (
                  !connected ||
                  fileCreate.pending ||
                  !target.projectOperationAvailable ||
                  !request ||
                  !fileCreate.organization.canMove(
                    request.source,
                    request.destinationDirectory,
                  )
                ) {
                  event.dataTransfer.dropEffect = 'none'
                  setDropTarget(undefined)
                  return
                }
                event.preventDefault()
                event.dataTransfer.dropEffect = 'move'
                setDropTarget({ path: request.destinationDirectory, effect: 'move' })
                return
              }
              if (!event.dataTransfer.types.includes('Files')) return
              event.preventDefault()
              event.dataTransfer.dropEffect = 'copy'
              setDropTarget({
                path: fileActionDestination(root, target.path, target.type),
                effect: 'copy',
              })
            }}
            onDragLeave={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setDropTarget(undefined)
              }
            }}
            onDrop={(event) => {
              const target = fileTarget(event.target, root) ?? {
                path: root,
                type: 'dir',
                projectOperationAvailable: true,
              }
              if (isProjectEntryDrag([...event.dataTransfer.types])) {
                event.preventDefault()
                const request = projectDrag.current
                  ? projectEntryDropRequest(
                      root,
                      projectDrag.current,
                      target.path,
                      target.type,
                    )
                  : undefined
                projectDrag.current = undefined
                setDropTarget(undefined)
                if (
                  connected &&
                  !fileCreate.pending &&
                  target.projectOperationAvailable &&
                  request &&
                  fileCreate.organization.canMove(
                    request.source,
                    request.destinationDirectory,
                  )
                ) {
                  fileCreate.organization.move(
                    request.source,
                    request.destinationDirectory,
                  )
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/src/renderer/src/main.tsx",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>38 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/src/renderer/src/main.tsx`. Lines 1 to 40 (40 lines total): 
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ErrorBoundary } from './ErrorBoundary'
import './styles.css'
import './themes.css'
import { installScrollbarPresentation } from './scrollbars/scrollbar-presentation'
import { initializeAppSettings } from './settings/settings'
import { initializeAppTheme } from './theme'

initializeAppTheme()
initializeAppSettings(document.documentElement.style)

const container = document.getElementById('root')
if (!container) throw new Error('hvir: #root element not found')
const disposeScrollbarPresentation = installScrollbarPresentation(container)
window.addEventListener('beforeunload', disposeScrollbarPresentation, { once: true })

const root = createRoot(container)
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

if (import.meta.env.DEV) {
  void import('./development/development-renderer-instrumentation').then(
    ({ installDevelopmentRendererInstrumentation }) => {
      installDevelopmentRendererInstrumentation()
    },
    (error: unknown) =>
      console.error(
        '[development-performance] renderer instrumentation failed to load',
        error,
      ),
  )
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts",
  "startLine": 1,
  "endLine": 160
}
```

</details>

<details>
<summary>97 lines</summary>

````
File: `/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts`. Lines 1 to 95 (95 lines total): 
```
/**
 * Reviewed terminal-engine capability evidence for the immutable artifact hvir consumes.
 * This records conformance; it never changes TERM, TERM_PROGRAM, or terminfo.
 */
export const GHOSTTY_TERMINAL_CAPABILITY_PROFILE = {
  schemaVersion: 1,
  artifact: {
    url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
    // Release-recorded digest; package installation is pinned by npm's SHA-512 lock integrity.
    sha256: 'b035ac2b60b0c359be51e90d3a490ac1691ea5e925e020b8ec7c37c4139041e2',
    npmIntegrity:
      'sha512-agjdDVQsRH6nlxKxjstazJJRx47nBfsU1Sd0x6Z2G7a9sJ4DYP2bRiApT+F/3FPF9MoqAl+D2xFm3rV8nrKeaw==',
    sourceCommit: '30b96a57de4c776ee564ec1d04771c19940c1b1c',
    ghosttyCommit: '332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28',
    wasmBytes: 528_150,
  },
  identity: {
    term: 'xterm-256color',
    termProgram: 'hvir',
    terminfo: 'unchanged',
  },
  synchronizedOutput: {
    decPrivateMode: 2026,
    parserOwner: 'ghostty-core',
    presentationOwner: 'ghostty-web-canvas',
    recoveryTimeoutMs: 1_000,
    hvirOutputBuffering: false,
    terminalMethods: [
      'requestRender',
      'setRenderPaused',
      'resetCursorBlink',
      'getRenderStats',
      'resolveEventProvenance',
    ],
    parserMethods: [
      'isSynchronizedOutput',
      'getSynchronizedOutputGeneration',
      'resetSynchronizedOutput',
    ],
  },
  hostOwnedContextMenu: {
    browserMenuDisabled: true,
    clipboardOwner: 'hvir-renderer',
    imagePasteOwner: 'adr-026-main-coordinator',
    terminalMethods: [
      'hasSelection',
      'getSelection',
      'paste',
      'selectAll',
      'clear',
      'reset',
    ],
  },
  retainedBuffer: {
    owner: 'ghostty-web-native-snapshot',
    scrollbackBytes: 10_000_000,
    maxQueryBytes: 64 * 1024,
    maxExtractionBytes: 4 * 1024 * 1024,
    terminalMethods: [
      'searchRetainedBuffer',
      'cancelRetainedBufferSearch',
      'extractRetainedBufferRange',
      'cancelRetainedBufferExtraction',
      'captureRetainedBufferBoundary',
      'getScrollbackByteLimit',
    ],
  },
  palette: {
    baseOwner: 'hvir-terminal-presentation',
    effectiveOwner: 'ghostty-terminal-state',
    presentationOwner: 'ghostty-web-canvas',
    ansiColors: 16,
    liveBaseUpdates: true,
    rawOutputReparsed: false,
  },
  cursor: {
    effectiveOwner: 'ghostty-render-state',
    defaultOwner: 'hvir-terminal-presentation',
    presentationOwner: 'ghostty-web-canvas',
    shapes: ['block', 'block_hollow', 'bar', 'underline'],
    blinkPolicies: ['terminal', true, false],
    liveDefaults: true,
    rawOutputReparsed: false,
  },
  shaping: {
    cellGridOwner: 'ghostty-core',
    lineRunOwner: 'ghostty-web-canvas',
    preferenceOwner: 'hvir-terminal-presentation',
    option: 'fontLigatures',
    defaultEnabled: true,
    liveUpdates: true,
    rawOutputReparsed: false,
  },
} as const

```
````

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/41848208/hvir/package.json:1-128
/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/project.ts:1-120
/private/var/tmp/ws/41848208/hvir/src/main/ipc/features/web-pane.ts:1-145
/private/var/tmp/ws/41848208/hvir/src/main/web-pane/web-pane-route-registry.ts:1-260
/private/var/tmp/ws/41848208/hvir/src/main/index.ts:480-519
/private/var/tmp/ws/41848208/hvir/src/renderer/src/dashboards/WebPane.tsx:1-260
/private/var/tmp/ws/41848208/hvir/src/renderer/src/tree/FileTree.tsx:1-260
/private/var/tmp/ws/41848208/hvir/src/renderer/src/main.tsx:1-40
/private/var/tmp/ws/41848208/hvir/scripts/ghostty-terminal-capability-profile.mts:1-95
\</final_answer>


---

<sub>23s</sub>

### `glob`

**src/renderer/src/**/*{Welcome,Project,Workspace,Harness,Git,Settings}***

"src/renderer/src/**/*{Welcome,Project,Workspace,Harness,Git,Settings}*"

<details>
<summary>27 matches</summary>

```
./src/renderer/src/git/GitHistoryView.tsx
./src/renderer/src/git/GitGraphLanes.tsx
./src/renderer/src/git/GitBranchControls.tsx
./src/renderer/src/git/GitGraphView.tsx
./src/renderer/src/git/GitPanel.tsx
./src/renderer/src/git/GitChangesView.tsx
./src/renderer/src/workspaces/MissingWorkspaceNotice.tsx
./src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
./src/renderer/src/workspaces/ProjectsBar.tsx
./src/renderer/src/settings/HarnessProfileOverlays.tsx
./src/renderer/src/settings/SettingsActiveSection.tsx
./src/renderer/src/settings/SettingsDialog.tsx
./src/renderer/src/settings/HarnessProfilesSettings.tsx
./src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
./src/renderer/src/settings/HarnessProfileEditor.tsx
./src/renderer/src/settings/HarnessProfileCommandFields.tsx
./src/renderer/src/settings/SettingsSectionNavigation.tsx
./src/renderer/src/settings/HarnessProfileDialogs.tsx
./src/renderer/src/settings/SettingsSection.tsx
./src/renderer/src/settings/sections/GitSettings.tsx
./src/renderer/src/settings/sections/KeybindingsSettings.tsx
./src/renderer/src/settings/sections/AppearanceSettings.tsx
./src/renderer/src/settings/sections/TerminalSettings.tsx
./src/renderer/src/terminal/TerminalWorkspaceControls.tsx
./src/renderer/src/terminal/TerminalWorkspaceCollection.tsx
./src/renderer/src/terminal/TerminalWorkspaceDialogs.tsx
./src/renderer/src/terminal/TerminalWorkspace.tsx
```

</details>


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/41848208/hvir/src/renderer/src/App.tsx (lines 1-220)

<details>
<summary>220 lines</summary>

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
```

</details>


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/build/native/hvir-command.**

/private/var/tmp/ws/41848208/hvir/build/native/hvir-command

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

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/41848208/hvir/.github/workflows/release.yml (lines 1-180)

<details>
<summary>165 lines</summary>

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
          GITHUB_TOKEN: ${{ github.token }}
          RELEASE_SOURCE_SHA: ${{ steps.version.outputs.sha }}
        run: node scripts/require-release-ci-evidence.mts

      - name: Prepare pull request or native release source
        id: release
        env:
          BUMP: ${{ inputs.bump }}
          VERSION: ${{ steps.version.outputs.version }}
          TAG: ${{ steps.version.outputs.tag }}
          GH_TOKEN: ${{ github.token }}
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          RELEASE_SOURCE_SHA: ${{ steps.version.outputs.sha }}
        run: |
          if [ "$BUMP" != current ]; then
            node scripts/prepare-release-pr.mjs "$VERSION"
            echo "ready=false" >> "$GITHUB_OUTPUT"
          else
            echo "ready=true" >> "$GITHUB_OUTPUT"
            echo "sha=$RELEASE_SOURCE_SHA" >> "$GITHUB_OUTPUT"
            echo "Release source: $RELEASE_SOURCE_SHA" >> "$GITHUB_STEP_SUMMARY"
          fi

          echo "version=$VERSION" >> "$GITHUB_OUTPUT"
          echo "tag=$TAG" >> "$GITHUB_OUTPUT"

  build-linux:
    name: Build and accept Linux package (${{ matrix.name }})
    needs: prepare
    if: needs.prepare.outputs.ready == 'true'
```

</details>


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/LICENSE.**

/private/var/tmp/ws/41848208/hvir/LICENSE

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/41848208/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-220)

<details>
<summary>205 lines</summary>

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
```

</details>


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/41848208/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-180)

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

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/src/shared/harness-profile.ts.**

/private/var/tmp/ws/41848208/hvir/src/shared/harness-profile.ts (lines 1-150)

<details>
<summary>101 lines</summary>

```
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
  | {
      readonly kind: 'reference'
      readonly name: string
      readonly source: 'host' | 'local-forward'
      readonly sourceName: string
    }
  | { readonly kind: 'unset'; readonly name: string }

export interface HarnessPathBinding {
  readonly name: string
  readonly path: HostPath
  /** Main-issued authorization for paths outside the registered project. */
  readonly grantId?: string
}

export interface HarnessPathGrant {
  readonly id: string
  readonly path: HostPath
}

export interface HarnessProfileInput {
  readonly displayName: string
  readonly description?: string
  readonly providerId: HarnessProviderId
  readonly scope: HarnessProfileScope
  readonly executable: HarnessProfileExecutable
  readonly args: readonly HarnessProfileArgument[]
  readonly environment: readonly HarnessEnvironmentBinding[]
  readonly pathBindings: readonly HarnessPathBinding[]
  readonly order: number
}

export interface HarnessProfile extends HarnessProfileInput {
  readonly id: HarnessProfileId
  readonly launchRevision: number
  readonly metadataRevision: number
  readonly providerContractVersion: number
  readonly builtIn: boolean
}

export interface HarnessCommandPreviewEnvironment {
  readonly name: string
  readonly operation: 'set' | 'reference' | 'unset'
  readonly displayValue?: string
  readonly redacted: boolean
}

/** Exhaustive provider-owned ways hvir may start a harness conversation. */
export type HarnessLaunchMode = 'fresh' | 'resume' | 'fork'

export interface HarnessCommandPreview {
  readonly profileId: HarnessProfileId
  readonly launchRevision: number
  readonly providerId: HarnessProviderId
  readonly mode: HarnessLaunchMode
  readonly executable: string
  readonly args: readonly string[]
  readonly environment: readonly HarnessCommandPreviewEnvironment[]
  readonly command: string
  readonly artifactIdentity: string
}

export function isHarnessProfileId(value: unknown): value is HarnessProfileId {
  return typeof value === 'string' && PROFILE_ID.test(value)
}

export function asHarnessProfileId(value: string): HarnessProfileId {
  if (!isHarnessProfileId(value)) {
    throw new Error(`Invalid harness profile id '${value}'`)
  }
  return value
}

export function isHarnessBindingName(value: unknown): value is string {
  return typeof value === 'string' && BINDING_NAME.test(value)
}

export function isHarnessEnvironmentName(value: unknown): value is string {
  return typeof value === 'string' && ENVIRONMENT_NAME.test(value)
}
```

</details>


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx.**

/private/var/tmp/ws/41848208/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx (lines 1-140)

<details>
<summary>41 lines</summary>

```
import type { ReactElement } from 'react'

import type {
  ProjectState,
  SessionsLivePtyQualifier,
  SessionsTerminalHandle,
  SessionsWorkspaceQualifier,
} from '../../../shared'
import type { SessionsRendererObservationPort } from './sessions-renderer-observation'
import type { SessionsTerminalSurfacePort } from './sessions-terminal-surface'
import { SessionsOverview } from './SessionsOverview'

interface SessionsDestinationRuntime {
  readonly sessionsObservation: SessionsRendererObservationPort
  readonly sessionsSurface: SessionsTerminalSurfacePort
  readonly focusProjectedSession: (
    handle: SessionsTerminalHandle,
    workspaceQualifier: SessionsWorkspaceQualifier,
    livePty: SessionsLivePtyQualifier,
  ) => Promise<boolean>
}

export function SessionsApplicationDestination({
  active,
  runtime,
  onOpened,
  onError,
}: {
  readonly active: boolean
  readonly runtime: SessionsDestinationRuntime
  readonly onOpened: (state: ProjectState) => void
  readonly onError: (message: string) => void
}): ReactElement | null {
  if (!active) return null
  return (
    <SessionsOverview
      observation={runtime.sessionsObservation}
      surface={runtime.sessionsSurface}
      onOpened={onOpened}
      onFocusOpened={runtime.focusProjectedSession}
      onOpenFailed={onError}
    />
  )
}
```

</details>


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/build/linux/after-install.sh.**

/private/var/tmp/ws/41848208/hvir/build/linux/after-install.sh

<details>
<summary>71 lines</summary>

```
#!/bin/bash
set -e

stage='configuring the hvir command'
report_failure() {
  status=$?
  echo "hvir package configuration failed while $stage" >&2
  exit "$status"
}
trap report_failure ERR

HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
chown root:root "$HVIR_COMMAND"
chmod 0755 "$HVIR_COMMAND"
if command -v update-alternatives >/dev/null 2>&1; then
  if [ -L '/usr/bin/${executable}' ] &&
    [ -e '/usr/bin/${executable}' ] &&
    [ "$(readlink '/usr/bin/${executable}')" != '/etc/alternatives/${executable}' ]; then
    rm -f '/usr/bin/${executable}'
  fi
  update-alternatives \
    --install '/usr/bin/${executable}' '${executable}' \
    "$HVIR_COMMAND" 100
else
  ln -sf "$HVIR_COMMAND" '/usr/bin/${executable}'
fi

stage='configuring the Chromium sandbox helper'
chown root:root '/opt/${sanitizedProductName}/chrome-sandbox'
if command -v runuser >/dev/null 2>&1 &&
  runuser -u nobody -- unshare --user true >/dev/null 2>&1; then
  chmod 0755 '/opt/${sanitizedProductName}/chrome-sandbox'
else
  chmod 4755 '/opt/${sanitizedProductName}/chrome-sandbox'
fi

stage='refreshing desktop metadata'
if command -v update-mime-database >/dev/null 2>&1; then
  update-mime-database /usr/share/mime
fi
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database /usr/share/applications
fi

stage='installing the AppArmor profile'
APPARMOR_PROFILE_SOURCE='/opt/${sanitizedProductName}/resources/apparmor-profile'
APPARMOR_PROFILE_TARGET='/etc/apparmor.d/${executable}'
APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
if [ -r "$APPARMOR_USERNS_RESTRICTION" ] &&
  [ "$(cat "$APPARMOR_USERNS_RESTRICTION")" = '1' ]; then
  if ! command -v apparmor_parser >/dev/null 2>&1 ||
    ! command -v apparmor_status >/dev/null 2>&1 ||
    ! apparmor_status --enabled >/dev/null 2>&1; then
    echo 'hvir requires active AppArmor tooling for this host user-namespace policy' >&2
    false
  fi
  apparmor_parser --skip-kernel-load --debug "$APPARMOR_PROFILE_SOURCE" >/dev/null
  install -o root -g root -m 0644 "$APPARMOR_PROFILE_SOURCE" "$APPARMOR_PROFILE_TARGET"

  if ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; }; then
    apparmor_parser \
      --replace \
      --write-cache \
      --skip-read-cache \
      "$APPARMOR_PROFILE_TARGET"
  fi
elif [ -f "$APPARMOR_PROFILE_TARGET" ]; then
  if command -v apparmor_status >/dev/null 2>&1 &&
    apparmor_status --enabled >/dev/null 2>&1 &&
    ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; } &&
    command -v apparmor_parser >/dev/null 2>&1; then
    apparmor_parser --remove "$APPARMOR_PROFILE_TARGET"
  fi
  rm -f "$APPARMOR_PROFILE_TARGET"
fi

stage='finalizing package configuration'
trap - ERR
```

</details>


---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/build/pkg-scripts/postinstall.**

/private/var/tmp/ws/41848208/hvir/build/pkg-scripts/postinstall

<details>
<summary>126 lines</summary>

```
#!/bin/sh
set -eu

package_id='dev.hvir.app'
command_marker='hvir-native-package-command-v1'
inventory_marker='hvir-native-package-inventory-v1'
target_volume=${3:-/}
stage='validating target volume'
transaction=''
command_had_previous=0
inventory_had_previous=0
committed=0
inventory_dir_created=0
command_dir_created=0

case "$target_volume" in
/*) ;;
*)
  echo "hvir package configuration failed while $stage: invalid target '$target_volume'" >&2
  exit 1
  ;;
esac

volume_root=${target_volume%/}
application="$volume_root/Applications/hvir.app"
executable="$application/Contents/MacOS/hvir"
notices="$application/Contents/Resources/THIRD_PARTY_NOTICES.md"
command_source="$application/Contents/Resources/hvir-command"
framework="$application/Contents/Frameworks/Electron Framework.framework"
command_dir="$volume_root/usr/local/bin"
command="$command_dir/hvir"
inventory_dir="$volume_root/Library/Application Support/hvir"
inventory="$inventory_dir/package-inventory-v1.txt"

cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  if [ "$committed" -ne 1 ] && [ -n "$transaction" ]; then
    if [ -f "$command" ] && /usr/bin/grep -Fq "$command_marker" "$command"; then
      /bin/rm -f -- "$command"
    fi
    if [ "$command_had_previous" -eq 1 ] && [ -e "$transaction/command.previous" ]; then
      /bin/mv -f -- "$transaction/command.previous" "$command"
    fi
    if [ -f "$inventory" ] && /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
      /bin/rm -f -- "$inventory"
    fi
    if [ "$inventory_had_previous" -eq 1 ] &&
      [ -e "$transaction/inventory.previous" ]; then
      /bin/mv -f -- "$transaction/inventory.previous" "$inventory"
    fi
  fi
  if [ -n "$transaction" ]; then
    case "$transaction" in
    "$inventory_dir"/.package-install.*) /bin/rm -rf -- "$transaction" ;;
    *) status=1 ;;
    esac
  fi
  if [ "$committed" -ne 1 ]; then
    if [ "$inventory_dir_created" -eq 1 ]; then /bin/rmdir "$inventory_dir" 2>/dev/null || true; fi
    if [ "$command_dir_created" -eq 1 ]; then /bin/rmdir "$command_dir" 2>/dev/null || true; fi
  fi
  if [ "$status" -ne 0 ]; then
    echo "hvir package configuration failed while $stage" >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

stage='validating installed application'
test -x "$executable"
/usr/bin/file "$executable" | /usr/bin/grep -Fq 'arm64'
test -L "$framework/Versions/Current"
test -f "$notices"
test -f "$command_source"
/usr/bin/grep -Fq "$command_marker" "$command_source"
if /usr/bin/codesign -dvv "$application" 2>&1 |
  /usr/bin/grep -q '^Authority='; then
  /usr/bin/codesign --verify --deep --strict --verbose=2 "$application"
fi

stage='preparing package-owned command transaction'
if [ ! -d "$command_dir" ]; then
  /bin/mkdir -p "$command_dir"
  command_dir_created=1
fi
if [ ! -d "$inventory_dir" ]; then
  /bin/mkdir -p "$inventory_dir"
  inventory_dir_created=1
fi
/usr/sbin/chown root:wheel "$command_dir" "$inventory_dir"
/bin/chmod 0755 "$command_dir" "$inventory_dir"
transaction=$(/usr/bin/mktemp -d "$inventory_dir/.package-install.XXXXXX")

if [ -e "$command" ] || [ -L "$command" ]; then
  if [ ! -f "$command" ] || ! /usr/bin/grep -Fq "$command_marker" "$command"; then
    stage='refusing to replace an unowned hvir command'
    false
  fi
  /bin/mv -- "$command" "$transaction/command.previous"
  command_had_previous=1
fi

if [ -e "$inventory" ] || [ -L "$inventory" ]; then
  if [ ! -f "$inventory" ] || ! /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
    stage='refusing to replace an unowned hvir inventory'
    false
  fi
  /bin/mv -- "$inventory" "$transaction/inventory.previous"
  inventory_had_previous=1
fi

stage='writing package-owned command'
/bin/cp -- "$command_source" "$transaction/hvir"
/usr/sbin/chown root:wheel "$transaction/hvir"
/bin/chmod 0755 "$transaction/hvir"
/bin/mv -- "$transaction/hvir" "$command"

stage='writing deterministic package inventory'
{
  echo "$inventory_marker"
  echo "package-id=$package_id"
  echo 'application=/Applications/hvir.app'
  echo 'command=/usr/local/bin/hvir'
  echo 'inventory=/Library/Application Support/hvir/package-inventory-v1.txt'
  echo "receipt=$package_id"
} >"$transaction/inventory"
/usr/sbin/chown root:wheel "$transaction/inventory"
/bin/chmod 0644 "$transaction/inventory"
/bin/mv -- "$transaction/inventory" "$inventory"

stage='committing package-owned command transaction'
committed=1
/bin/rm -f -- "$transaction/command.previous" "$transaction/inventory.previous"
```

</details>


---

<sub>32s</sub>

### `rg`

**Open (Project|Folder)|New Project|SSH|Open project|Add project**

"Open (Project|Folder)|New Project|SSH|Open project|Add project" (src/renderer/src/workspaces)

```
No matches found.
```


---

<sub>32s</sub>

### `view`

**view the file at /private/var/tmp/ws/41848208/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/41848208/hvir/src/shared/harness-provider.ts (lines 1-120)

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

<sub>32s</sub>

### `rg`

**ssh/config|known_hosts|HostName**

"ssh/config|known_hosts|HostName" in *.ts (src/main/project-host)

```
src/main/project-host/project-host-catalog.ts:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
```


---

<sub>32s</sub>

### `rg`

**document review|Document Review|review**

"document review|Document Review|review" in *.tsx (src/renderer/src/document-review)

<details>
<summary>49 matches</summary>

```
[grep content: 45 matches across 3 file(s) under src/renderer/src/document-review]

DocumentReviewInlineSurface.tsx (15 match(es)):
   } from './document-review-inline'
   import type { DocumentReviewComment, ReviewSourceRange } from './document-review-types'
   import type { DocumentReviewInteraction } from './use-document-review-interaction'
         className="document-review-inline"
         aria-label={`Document review at ${lineRangeLabel(range)}`}
             className="document-review-close"
             aria-label={`Close review at ${lineRangeLabel(range)}`}
           <ol className="document-review-comments">
           <p className="document-review-empty">No comments at this location.</p>
         className="document-review-compose"
           aria-label="New review comment"
             Add review comment
     const staleUnreviewed = stale && !comment.anchor.state.reviewed
         data-review-lifecycle={comment.lifecycle}
         className={`document-review-comment review-anchor-${comment.anchor.state.status}`}

DocumentReviewDeliveryPanel.tsx (15 match(es)):
   import type { DocumentReviewDeliveryInteraction } from './use-document-review-delivery'
       <section className="document-review-delivery" aria-label="Review handoff preview">
             Close preview
           <p className="document-review-guidance" role="status">
             copy the exact preview.
           <dl className="document-review-destination">
           <p className="document-review-warning" role="alert">
               className="document-review-delivery-payload"
               aria-label="Exact review delivery preview"
             <p className="document-review-delivery-size">
             <div className="document-review-delivery-actions">
                 {delivery.copied ? 'Copied' : 'Copy review'}
                 {delivery.inserted ? 'Inserted' : 'Insert review'}
                     ? `Send this exact preview now to ${delivery.prepared.destination.title}`
                 {delivery.sent ? 'Sent' : 'Send review now'}

DocumentReviewControls.tsx (15 match(es)):
   import { lineRangeLabel } from './document-review-inline'
   import type { DocumentReviewInteraction } from './use-document-review-interaction'
       <div className="document-review-toolbar" role="group" aria-label="Document review">
             interaction.active ? 'Exit Document review mode' : 'Enter Document review mode'
           title="Document review mode"
       <aside className="document-review-chrome" aria-label="Document review comments">
           <div className="document-review-tray">
               <span className="document-review-guidance" role="status">
                 Save or reload to add comments. Existing review stays on the saved version.
               <span className="document-review-error" role="alert">
               <span className="document-review-error" role="alert">
               <span className="document-review-notice" role="status">
               <span className="document-review-notice" role="status">
                 Sending review…
                 className="document-review-orphan"
```

</details>


---

<sub>34s</sub>

### Copilot

The project is an Electron desktop workbench with local and SSH workspaces. I’ll document its user-facing features, development setup, and the package targets supported by the repository.

---

<sub>47s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for working with projects, terminals, and coding\n+sessions. It brings local and SSH-hosted projects, files, Git, and terminal\n+workflows together in one Electron application.\n+\n+## Features\n+\n+- Open local projects or connect to an SSH host and browse for a project folder.\n+  SSH host entries are read from `~/.ssh/config`.\n+- Work across project workspaces and Git worktrees with split terminal and file\n+  viewer layouts.\n+- Browse and edit files, inspect Git changes and history, switch branches, fetch,\n+  and pull.\n+- Open web panes from terminal links and review documents with inline comments.\n+- Configure coding harness profiles and view terminal sessions across workspaces.\n+\n+## Getting started\n+\n+The native packages target macOS arm64 (`.pkg`) and Linux x64 and arm64 (`.deb`).\n+After installing a package, launch hvir from your applications menu and choose a\n+local or SSH host and a project folder. The installed `hvir` command can also\n+open a local project:\n+\n+```sh\n+hvir /path/to/project\n+```\n+\n+## Development\n+\n+Requirements:\n+\n+- Node.js 24 or newer and npm.\n+- Git for repository workflows.\n+- A native build toolchain for Node.js addons (including Python and a C/C++\n+  compiler). On macOS, install the Xcode command line tools.\n+\n+Install dependencies and start the development app:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+Installation downloads Electron and rebuilds native modules for its runtime.\n+The application uses Electron, React, TypeScript, and electron-vite.\n+\n+### Build and package\n+\n+```sh\n+npm run build              # Type-check and build the application\n+npm run preview            # Run the built application\n+npm run build:dir          # Create an unpacked application in dist/\n+npm run pack:mac:arm64     # Build a macOS arm64 .pkg\n+npm run pack:linux:x64     # Build a Linux x64 .deb\n+npm run pack:linux:arm64   # Build a Linux arm64 .deb\n+```\n+\n+Packaging requires the appropriate platform-specific build tools. Signed macOS\n+packages additionally require a configured signing identity; the\n+`pack:mac:arm64:signed` script enforces code signing.\n+\n+### Checks\n+\n+```sh\n+npm test                   # Vitest suite\n+npm run typecheck          # Node and renderer TypeScript checks\n+npm run lint               # ESLint\n+npm run verify             # Repository policy, lint, type-check, and tests\n+npm run smoke              # Electron smoke scenarios\n+```\n+\n+Electron smoke tests require a graphical session; CI uses `xvfb-run -a npm run\n+smoke` on Linux. See `package.json` for focused smoke scenarios and other\n+development scripts.\n+\n+## Project layout\n+\n+- `src/main/` — Electron main process, project hosts, terminals, Git, and IPC.\n+- `src/preload/` — the bridge between the renderer and main process.\n+- `src/renderer/` — React workbench UI.\n+- `src/shared/` — shared types and contracts.\n+- `src/workers/` — worker processes.\n+- `test/` — automated tests; `scripts/` contains build and verification tools.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). See\n+[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/41848208/hvir/README.md
```


---

<sub>48s</sub>

### Copilot

Created `README.md` covering hvir’s features, getting started, development setup, packaging, checks, project layout, and license.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
