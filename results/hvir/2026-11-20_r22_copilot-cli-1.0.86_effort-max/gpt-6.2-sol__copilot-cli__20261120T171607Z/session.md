# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `b40a59f3-88db-481c-93cd-e3fceeb2de47`  
> - **Started:** 11/20/2026, 12:16:24 PM  
> - **Duration:** 3m 15s  
> - **Exported:** 11/20/2026, 12:19:39 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>10s</sub>

### `bash`

**Check worktree status and list tracked files**

$ git --no-pager status --short --branch && git --no-pager ls-files | head -90

<details>
<summary>92 lines</summary>

```
## main
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
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir.**

/private/var/tmp/ws/eed8955d/hvir

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

<sub>10s</sub>

### `glob`

**{**/AGENTS.md,**/copilot-instructions.md,**/[Rr][Ee][Aa][Dd][Mm][Ee]*,**/[Ll][Ii][Cc][Ee][Nn][Ss][Ee]*}**

"{**/AGENTS.md,**/copilot-instructions.md,**/[Rr][Ee][Aa][Dd][Mm][Ee]*,**/[Ll][Ii][Cc][Ee][Nn][Ss][Ee]*}"

```
./LICENSE
./packages/rename-noreplace/LICENSE
```


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/package.json.**

/private/var/tmp/ws/eed8955d/hvir/package.json

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/eed8955d/hvir/.github/workflows/ci.yml (lines 1-220)

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/electron-builder.yml.**

/private/var/tmp/ws/eed8955d/hvir/electron-builder.yml

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/eed8955d/hvir/.github/workflows/release.yml (lines 1-200)

<details>
<summary>184 lines</summary>

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
    runs-on: ${{ matrix.os }}
    timeout-minutes: 25
    strategy:
      fail-fast: false
      matrix:
        include:
          - name: Linux x64
            os: ubuntu-22.04
            build: npm run pack:linux:x64
            deb_arch: amd64
            release_arch: x64
          - name: Linux arm64
            os: ubuntu-22.04-arm
            build: npm run pack:linux:arm64
            deb_arch: arm64
            release_arch: arm64
    env:
      HVIR_LINUX_PACKAGE_ACCEPTANCE: '1'

    steps:
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/LICENSE.**

/private/var/tmp/ws/eed8955d/hvir/LICENSE (lines 1-30)

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

<sub>14s</sub>

### `bash`

**Find project documentation and source areas**

$ git --no-pager log -10 --format='%h %s' && git --no-pager ls-files '*.md' && git --no-pager ls-files src | awk -F/ 'NF >= 3 {print $1 "/" $2 "/" $3}' | sort -u | head -110

<details>
<summary>87 lines</summary>

```
36b1400 Initial commit
THIRD_PARTY_NOTICES.md
test/fixtures/rendered-mmd.md
test/fixtures/rendered.md
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/diagnostics
src/main/document-review
src/main/filename-search
src/main/git
src/main/harness
src/main/health
src/main/html-preview-protocol.ts
src/main/index.ts
src/main/ipc
src/main/ipc.ts
src/main/navigation-policy.ts
src/main/project-coordinator.ts
src/main/project-file-operations
src/main/project-folder-picker
src/main/project-host
src/main/project-registry.ts
src/main/project-watch.ts
src/main/pty
src/main/renderer-event-delivery.ts
src/main/renderer-event-publisher.ts
src/main/renderer-presentation-resources.ts
src/main/renderer-resource-scopes.ts
src/main/sessions
src/main/smoke
src/main/terminal
src/main/viewer
src/main/web-pane
src/main/window
src/main/workbench-runtime.ts
src/main/worker-host.ts
src/main/workspace-activity.ts
src/main/workspace-cleanup.ts
src/main/workspace-coordinator.ts
src/main/workspace-removal-coordinator.ts
src/preload/index.ts
src/preload/renderer-diagnostics.ts
src/preload/terminal-clipboard-file-paste.ts
src/renderer/index.html
src/renderer/src
src/shared/application-build-channel.ts
src/shared/composer-submit.ts
src/shared/diagnostic-evidence.ts
src/shared/diagnostic-report-event.ts
src/shared/diagnostic-report.ts
src/shared/diagnostics.ts
src/shared/disposer.ts
src/shared/document-review.ts
src/shared/file-uri.ts
src/shared/filename-search.ts
src/shared/fs-types.ts
src/shared/git-types.ts
src/shared/harness-profile.ts
src/shared/harness-provider.ts
src/shared/harness-telemetry.ts
src/shared/harness-usage.ts
src/shared/host-path.ts
src/shared/html-preview.ts
src/shared/index.ts
src/shared/ipc
src/shared/ipc-contract.ts
src/shared/ipc.ts
src/shared/keybindings.ts
src/shared/markdown-it-task-lists.d.ts
src/shared/operation-result.ts
src/shared/project-file-operations.ts
src/shared/rendered-link.ts
src/shared/sessions-projection.ts
src/shared/terminal-attention.ts
src/shared/terminal-clipboard-file-paste.ts
src/shared/terminal-start-admission.ts
src/shared/viewer-types.ts
src/shared/viewer-workload-policy.ts
src/shared/web-pane.ts
src/shared/workbench-health.ts
src/shared/worker-protocol.ts
src/shared/workspace-types.ts
src/workers/echo-worker.ts
src/workers/git-worker.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>27s</sub>

### `rg`

**https://(github\.com/[^[:space:]"']*/hvir(/|[[:space:]"')]|$)|[^[:space:]"']*hvir\.dev)|jarmak-personal/hvir**

"https://(github\.com/[^[:space:]"']*/hvir(/|[[:space:]"')]|$)|[^[:space:]"']*hvir\.dev)|jarmak-personal/hvir" in !**/icons-linux/** (scripts, .github, build, package.json, THIRD_PARTY_NOTICES.md)

<details>
<summary>25 matches</summary>

```
[grep content: 22 matches across 19 file(s) under scripts]
require-release-ci-evidence.mts:18: export const RELEASE_REPOSITORY = 'jarmak-personal/hvir'
assemble-native-release.mjs:212:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',
render-native-installer.mjs:155:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',
run-macos-package-smoke.sh:214:     --repository jarmak-personal/hvir \
run-linux-package-smoke.sh:168:     --repository jarmak-personal/hvir \

architecture-github.mts (3 match(es)):
  109:       'https://github.com/jarmak-personal/hvir.git',
  110:       'git@github.com:jarmak-personal/hvir.git',
  111:       'https://github.com/jarmak-personal/hvir',
project-management/github-delivery-adapters.ts:24:     environment.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
project-management/kind-cli.ts:32:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
project-management/pull-request-cli.ts:32:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
project-management/github-token-migration.ts:216:         `/repos/jarmak-personal/hvir/issues/${receipt.issue}/comments`,
project-management/issue-context-cli.ts:24:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
project-management/sync-kind.ts:19:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
project-management/issue-start-cli.ts:27:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
project-management/read-contributor-status.ts:32:   const repository = process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir'
project-management/sync-pull-request-planning.ts:26:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
project-management/read-planning-record.ts:22:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',

project-management/audit-canonical-project.ts (2 match(es)):
  12:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
  25:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
project-management/canonical-project-config.ts:21:   repository: 'jarmak-personal/hvir',
project-management/planning-cli.ts:27:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
```

</details>


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/eed8955d/hvir/scripts/native-installer.template.sh (lines 1-180)

<details>
<summary>167 lines</summary>

```
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
      ;;
    esac
  fi
  if [[ "$status" -ne 0 ]]; then
    echo "hvir $HVIR_VERSION failed while $stage (status $status)." >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

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

parse_arguments() {
  case "$#" in
  0) ;;
  1)
    case "$1" in
    --uninstall) operation='uninstall' ;;
    --help | -h)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 64
      ;;
    esac
    ;;
  2)
    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
      usage >&2
      exit 64
    fi
    operation='uninstall'
    purge=1
    ;;
  *)
    usage >&2
    exit 64
    ;;
  esac
}

detect_target() {
  local kernel machine
  kernel=$(/usr/bin/uname -s)
  machine=$(/usr/bin/uname -m)
  case "$kernel:$machine" in
  Linux:x86_64)
    platform='linux'
    platform_name='Linux (x64)'
    artifact_name=$HVIR_LINUX_X64_ARTIFACT
    artifact_sha256=$HVIR_LINUX_X64_SHA256
    native_command='/usr/bin/hvir'
    ;;
  Linux:aarch64 | Linux:arm64)
    platform='linux'
    platform_name='Linux (Arm64)'
    artifact_name=$HVIR_LINUX_ARM64_ARTIFACT
    artifact_sha256=$HVIR_LINUX_ARM64_SHA256
    native_command='/usr/bin/hvir'
    ;;
  Darwin:arm64)
    platform='macos'
    platform_name='macOS (Apple silicon)'
    artifact_name=$HVIR_MACOS_ARM64_ARTIFACT
    artifact_sha256=$HVIR_MACOS_ARM64_SHA256
    native_command='/usr/local/bin/hvir'
    ;;
  *)
    echo \
      "hvir does not support $kernel $machine. Supported targets are compatible Linux x64/arm64 hosts and Apple-silicon macOS." \
      >&2
    exit 69
    ;;
  esac
}

require_absolute_tool() {
  [[ -x "$1" ]] || {
    echo "hvir requires $1." >&2
    exit 69
  }
}

require_install_tools() {
  require_absolute_tool /usr/bin/sudo
  if [[ -z "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
    require_absolute_tool /usr/bin/curl
  fi
  if [[ "$platform" == 'linux' ]]; then
    require_absolute_tool /usr/bin/apt
    require_absolute_tool /usr/bin/apt-get
    require_absolute_tool /usr/bin/dpkg-deb
    require_absolute_tool /usr/bin/dpkg-query
    require_absolute_tool /usr/bin/getconf
    require_absolute_tool /usr/bin/sha256sum
    require_absolute_tool /usr/bin/unshare
  else
    require_absolute_tool /usr/bin/shasum
    require_absolute_tool /usr/sbin/pkgutil
    require_absolute_tool /usr/sbin/installer
    require_absolute_tool /usr/sbin/spctl
    require_absolute_tool /usr/bin/xcrun
  fi
}

version_at_least() {
  local actual=$1 minimum=$2 actual_major actual_minor minimum_major minimum_minor
  [[ "$actual" =~ ^([0-9]+)\.([0-9]+)$ ]] || return 1
  actual_major=${BASH_REMATCH[1]}
  actual_minor=${BASH_REMATCH[2]}
  [[ "$minimum" =~ ^([0-9]+)\.([0-9]+)$ ]] || return 1
  minimum_major=${BASH_REMATCH[1]}
  minimum_minor=${BASH_REMATCH[2]}
  ((actual_major > minimum_major)) ||
    ((actual_major == minimum_major && actual_minor >= minimum_minor))
}

linux_requires_apparmor_profile() {
  [[ -r "$HVIR_APPARMOR_USERNS_RESTRICTION" ]] &&
    [[ "$(<"$HVIR_APPARMOR_USERNS_RESTRICTION")" == '1' ]]
}

verify_linux_host_capabilities() {
```

</details>


---

<sub>27s</sub>

### `rg`

**Open Folder|Add Project|New Workspace|Connect via SSH|SSH host|New Terminal|harness profile|Git worktree|Start Page|Welcome to hvir**

"Open Folder|Add Project|New Workspace|Connect via SSH|SSH host|New Terminal|harness profile|Git worktree|Start Page|Welcome to hvir" in *.{tsx,ts} (src/renderer/src, src/shared)

<details>
<summary>7 matches</summary>

```
src/shared/harness-profile.ts:109:    throw new Error(`Invalid harness profile id '${value}'`)
src/renderer/src/settings/harness-profile-draft.ts:78:  if (draft.builtIn) throw new Error('Built-in harness profiles are immutable')
src/renderer/src/terminal/TerminalContextMenu.tsx:260:            <span>Fork Conversation to New Terminal</span>
src/renderer/src/settings/HarnessProfileEditor.tsx:292:        Save harness profile
src/renderer/src/settings/HarnessProfileDialogs.tsx:33:          label: 'Save harness profile',
src/renderer/src/settings/HarnessProfileDialogs.tsx:42:      <h3 id="unsaved-harness-title">Unsaved harness profile</h3>
src/renderer/src/settings/HarnessProfileDialogs.tsx:44:        <strong>{profileName}</strong> has unsaved changes. Save this harness profile
```

</details>


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/eed8955d/hvir/src/shared/harness-provider.ts (lines 1-150)

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

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/eed8955d/hvir/electron.vite.config.ts (lines 1-180)

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

<sub>27s</sub>

### `rg`

**RELEASE_NOTES|install\.sh|brew|pkgutil|dpkg|SHA256SUMS|checksums|supported|npm ci**

"RELEASE_NOTES|install\.sh|brew|pkgutil|dpkg|SHA256SUMS|checksums|supported|npm ci" (.github/workflows/release.yml, .github/workflows/macos-package-release.yml, scripts/assemble-native-release.mjs, scripts/render-native-installer.mjs, scripts/run-linux-package-smoke.sh, scripts/run-macos-package-smoke.sh)

<details>
<summary>36 matches</summary>

```
[grep content: 31 matches across 5 file(s)]
.github/workflows/macos-package-release.yml:95:         run: npm ci

scripts/assemble-native-release.mjs (8 match(es)):
  54:   const installerPath = resolve(assetDirectory, 'install.sh')
  110:   const checksums = await Promise.all(
  115:   const checksumsPath = resolve(assetDirectory, 'SHA256SUMS')
  116:   await writeFile(checksumsPath, `${checksums.join('\n')}\n`)
  118:   await requireExactOutputs(assetDirectory, [...checksumNames, basename(checksumsPath)])
  121:     checksumsPath,
  149:     'install.sh',
  151:     'SHA256SUMS',

.github/workflows/release.yml (5 match(es)):
  213:         run: npm ci
  498:             sha256sum --check SHA256SUMS
  557:             SHA256SUMS \
  562:             install.sh \
  607:             sha256sum --check SHA256SUMS

scripts/run-linux-package-smoke.sh (7 match(es)):
  52:   echo "Unsupported Linux package acceptance architecture: $(uname -m)" >&2
  63: if dpkg-query -W -f='${Status}' hvir 2>/dev/null | grep -Fq 'install ok installed'; then
  91:     dpkg-query -W -f='${Status}' hvir 2>/dev/null | grep -Fq 'install ok installed'; then
  148: dpkg-deb --raw-extract "$package_path" "$previous_package_root"
  152: dpkg-deb --root-owner-group --build "$previous_package_root" "$previous_package" >/dev/null
  215:   installed_version=$(dpkg-query -W -f='${Version}' hvir)
  218:     "$(dpkg-query -W -f='${Architecture}' hvir)" \

scripts/run-macos-package-smoke.sh (10 match(es)):
  51: if pkgutil --pkg-info "$receipt" >/dev/null 2>&1; then
  79:   sudo pkgutil --forget "$receipt" >/dev/null 2>&1 || true
  141:   pkgutil --check-signature "$package_path" | tee "$signature_log"
  148:   pkgutil --check-signature "$package_path" >"$signature_log" 2>&1
  160: pkgutil --expand-full "$package_path" "$expanded_package"
  265: [[ "$(pkgutil --pkg-info-plist "$receipt" | plutil -extract pkg-version raw -)" == '0.0.0' ]]
  304: [[ "$(pkgutil --pkg-info-plist "$receipt" | plutil -extract pkg-version raw -)" == '0.0.0' ]]
  313: receipt_version=$(pkgutil --pkg-info-plist "$receipt" |
  381: if ! pkgutil --files "$receipt" |
  471: if pkgutil --pkg-info "$receipt" >/dev/null 2>&1; then
```

</details>


---

<sub>37s</sub>

### `glob`

**src/main/harness/**/*{provider,profile}*.ts**

"src/main/harness/**/*{provider,profile}*.ts"

<details>
<summary>7 matches</summary>

```
./src/main/harness/harness-provider-registry.ts
./src/main/harness/harness-provider-capabilities.ts
./src/main/harness/harness-provider.ts
./src/main/harness/harness-provider-probes.ts
./src/main/harness/bundled-harness-providers.ts
./src/main/harness/harness-provider-contract.ts
./src/main/harness/harness-profile-store.ts
```

</details>


---

<sub>37s</sub>

### `rg`

**Add (Local |Remote )?(Folder|Project)|Open (Local |Remote )?(Folder|Project)|Add (SSH |Remote |Local )?Host|Create Workspace|New (Workspace|Shell|Terminal)|Open a (folder|project)|Welcome|Quick Start**

"Add (Local |Remote )?(Folder|Project)|Open (Local |Remote )?(Folder|Project)|Add (SSH |Remote |Local )?Host|Create Workspace|New (Workspace|Shell|Terminal)|Open a (folder|project)|Welcome|Quick Start" in *.{tsx,ts} (src/renderer/src)

```
src/renderer/src/settings/HarnessProfilesSettings.tsx:75:          <p>Open a project to configure harnesses.</p>
src/renderer/src/terminal/TerminalContextMenu.tsx:260:            <span>Fork Conversation to New Terminal</span>
```


---

<sub>37s</sub>

### `rg`

**worktree|Stage All|Commit|Preview Markdown|Markdown Preview|Web Pane|File Search|Open Web**

"worktree|Stage All|Commit|Preview Markdown|Markdown Preview|Web Pane|File Search|Open Web" in *.tsx (src/renderer/src)

<details>
<summary>107 matches</summary>

```
[grep content: 98 matches across 11 file(s) under src/renderer/src]

git/GitHistoryView.tsx (25 match(es)):
  11:   GitCommitDetail,
  12:   GitCommitSummary,
  18:   flattenCommitFiles,
  19:   sumCommitFileChanges,
  20:   type CommitChangeTotals,
  21:   type CommitTreeEntry,
  26: import type { RailCommitDetailState } from './use-git-commit-details'
  34:   readonly commits: readonly GitCommitSummary[]
  41:   readonly detailStates: ReadonlyMap<string, RailCommitDetailState>
  46:   readonly onToggleCommit: (hash: string, expanded?: boolean) => void
  73:       {commits.length > 0 ? <HistoryCommitList {...props} /> : null}
  91:       readonly detail: GitCommitDetail
  92:       readonly totals: CommitChangeTotals
  109:       readonly entry: CommitTreeEntry
  112: function HistoryCommitList({
  122:   onToggleCommit,
  204:         totals: sumCommitFileChanges(detail.files),
  207:       for (const entry of flattenCommitFiles(detail.files, root, collapsed)) {
  234:   const handleCommitKey = (
  243:       onToggleCommit(hash, true)
  246:       onToggleCommit(hash, false)
  254:       aria-label="Commit history"
  270:         aria-label="Commit history"
  298:                       onToggleCommit(commit.hash)
  308:                   onKeyDown={(event) => handleCommitKey(event, commit.hash)}

git/GitBranchControls.tsx (3 match(es)):
  71:             branch.worktree &&
  72:             (branch.worktree.hostId !== root.hostId || branch.worktree.path !== root.path)
  82:               {occupiedElsewhere ? ` — in ${branch.worktree?.path}` : ''}

git/GitGraphView.tsx (36 match(es)):
  15:   type GitCommitDetail,
  16:   type GitCommitSummary,
  26:   flattenCommitFiles,
  27:   sumCommitFileChanges,
  29: import { loadCommitDetail } from './commit-detail-client'
  54:   const [commits, setCommits] = useState<readonly GitCommitSummary[]>([])
  62:   const [detail, setDetail] = useState<GitCommitDetail>()
  70:   const commitsValue = useRef<readonly GitCommitSummary[]>([])
  106:           setCommits(page.commits)
  133:     setCommits([])
  168:           setCommits((current) => {
  233:     void loadCommitDetail(root, selectedHash).then(
  260:   const selectedCommit = selectedIndex < 0 ? undefined : commits[selectedIndex]
  262:   const selectCommit = (hash: string, open = true): void => {
  297:     selectCommit(commit.hash, inspectorOpen)
  330:               <span>Commit</span>
  388:                         selectCommit(row.commit.hash)
  409:                             {formatCommitDate(row.commit.authoredAt)}
  426:             <CommitInspector
  428:               refs={selectedCommit?.refs}
  459: function CommitInspector({
  468:   readonly detail?: GitCommitDetail
  478:     <aside className="git-commit-inspector" aria-label="Commit details">
  480:         <strong>Commit details</strong>
  486:       {error ? <GraphEmpty text={`Commit unavailable: ${error}`} error /> : null}
  499:                 <dd>{formatCommitDate(detail.authoredAt, true)}</dd>
  502:                 <dt>Commit</dt>
  508:             <CommitMessage
  514:           <CommitFileTree detail={detail} root={root} onOpen={onOpen} />
  521: function CommitMessage({
  557:         aria-label="Commit message"
  579: function CommitFileTree({
  584:   readonly detail: GitCommitDetail
  609:     () => flattenCommitFiles(detail.files, root, collapsed),
  617:   const totals = useMemo(() => sumCommitFileChanges(detail.files), [detail.files])
  705: function formatCommitDate(value: string, long = false): string {

git/GitPanel.tsx (3 match(es)):
  13: import { useGitCommitDetails } from './use-git-commit-details'
  65:   const details = useGitCommitDetails(root)
  126:             onToggleCommit={details.toggleCommit}
sessions/SessionsCollectionToolbar.tsx:52:             <option value="workspace">Project → worktree</option>
sessions/SessionsOverview.tsx:407:                           <h3 className="sessions-worktree-heading">

development/development-performance-pump.tsx (4 match(es)):
  15:   const [commit, setCommit] = useState(0)
  22:         flushSync(() => setCommit((value) => value + 1))
  34:         <MeasuredCommit key={index} value={commit} />
  40: function MeasuredCommit({ value }: { readonly value: number }) {
terminal/TerminalMoveDialog.tsx:62:         <p>Rehome the terminal in another worktree without restarting its process.</p>

workspaces/WorkspaceCatalogDialogs.tsx (7 match(es)):
  66:       labelledBy="closed-worktrees-title"
  69:       className="closed-worktrees-dialog"
  71:       <h2 id="closed-worktrees-title">Closed worktrees in {project.displayName}</h2>
  72:       <p>Reopen a present worktree or manage a worktree that Git no longer finds.</p>
  73:       <div className="closed-worktrees-list">
  75:           <div className="closed-worktree-row" key={workspace.id}>
  98:                 title="Forget removed worktree from hvir"

terminal/TerminalRail.tsx (5 match(es)):
  123:                   ? 'Move terminal, new worktree available'
  124:                   : 'Move terminal to another worktree'
  126:               title="Move active terminal to another worktree"
  136:                 <span className="terminal-new-worktree-badge">new</span>
  165:                       Dismiss new-worktree indicator

workspaces/ProjectsBar.tsx (12 match(es)):
  377:                     title="Forget removed worktree from hvir"
  396:                   title="Remove Git's stale worktree administrative records"
  572:         branches, and worktrees are not changed.
  643:       labelledBy="worktree-prune-title"
  653:       className="worktree-prune-dialog"
  655:       <h2 id="worktree-prune-title">
  656:         Prune {workspaces.length} stale worktree
  661:         not delete existing worktree directories.
  663:       <div className="worktree-prune-list">
  674:       <p className="worktree-prune-warning">
  684:     return `${workspace.root.path}\nGit reports this worktree as prunable: ${workspace.prunableReason}`
  687:     return `${workspace.root.path}\nThis worktree was absent from Git's last successful discovery.`
```

</details>


---

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/build/native/hvir-command.**

/private/var/tmp/ws/eed8955d/hvir/build/native/hvir-command (lines 1-160)

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

<sub>37s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/scripts/assemble-native-release.mjs.**

/private/var/tmp/ws/eed8955d/hvir/scripts/assemble-native-release.mjs (lines 26-155)

<details>
<summary>122 lines</summary>

```
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
  }
  const notices = {
    name: noticesName,
    sha256: await sha256File(noticesPath),
  }
  const manifest = {
    schemaVersion: 1,
    version,
    tag,
    sourceCommit: options.sourceSha,
    installer,
    notices,
    artifacts,
  }
  const manifestName = 'release-manifest.json'
  const manifestPath = resolve(assetDirectory, manifestName)
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

  const checksumNames = [
    ...artifacts.map(({ name }) => name),
    installer.name,
    manifestName,
    notices.name,
  ]
  const checksums = await Promise.all(
    checksumNames.map(
      async (name) => `${await sha256File(resolve(assetDirectory, name))}  ${name}`,
    ),
  )
  const checksumsPath = resolve(assetDirectory, 'SHA256SUMS')
  await writeFile(checksumsPath, `${checksums.join('\n')}\n`)

  await requireExactOutputs(assetDirectory, [...checksumNames, basename(checksumsPath)])
  return {
    assetDirectory,
    checksumsPath,
    installerPath,
    manifest,
    manifestPath,
  }
}

function validateOptions(options) {
  if (!versionPattern.test(options.version ?? '')) {
    throw new Error(`Invalid hvir version: ${options.version ?? 'missing'}.`)
  }
  if (!sourceCommitPattern.test(options.sourceSha ?? '')) {
    throw new Error('The release source must be one full lowercase commit SHA.')
  }
  if (!repositoryPattern.test(options.repository ?? '')) {
    throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
  }
  if (!teamPattern.test(options.macosTeamId ?? '')) {
    throw new Error('The macOS Apple team ID must contain 10 uppercase letters/digits.')
  }
  if (!options.assetDirectory) {
    throw new Error('A release asset directory is required.')
  }
}

async function requireExactInputs(assetDirectory, expectedNames) {
  const entries = await readdir(assetDirectory)
  const allowedGenerated = new Set([
    'install.sh',
    'release-manifest.json',
    'SHA256SUMS',
    'THIRD_PARTY_NOTICES.md',
  ])
  const unexpected = entries.filter(
    (name) => !expectedNames.includes(name) && !allowedGenerated.has(name),
```

</details>


---

<sub>37s</sub>

### `rg`

**git --version|resolve.*[Gg]it|requires [Gg]it|[Gg]it is not installed|which git|default shell**

"git --version|resolve.*[Gg]it|requires [Gg]it|[Gg]it is not installed|which git|default shell" in *.{mts,ts,sh} (src/main, scripts)

```
src/main/project-watch.ts:135:      Promise.resolve(gitStop?.()),
```


---

<sub>56s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/eed8955d/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-210)

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

<sub>56s</sub>

### `rg`

**(add|open|connect) (a |an |to |another |local |remote )*(project|folder|host|ssh)|new (shell|terminal|workspace|worktree)|pick.*(folder|project)|local or remote**

"(add|open|connect) (a |an |to |another |local |remote )*(project|folder|host|ssh)|new (shell|terminal|workspace|worktree)|pick.*(folder|project)|local or remote" in *.tsx (src/renderer/src/workspaces, src/renderer/src/terminal, src/renderer/src/settings)

<details>
<summary>13 matches</summary>

```
src/renderer/src/settings/HarnessProfileOverlays.tsx:10:import { useHarnessFolderPicker } from './use-harness-folder-picker'
src/renderer/src/workspaces/SessionDialog.tsx:15:import type { ProjectFolderPickerPort } from './project-folder-picker-client'
src/renderer/src/workspaces/SessionDialog.tsx:35:  readonly folderPicker: ProjectFolderPickerPort
src/renderer/src/workspaces/SessionDialog.tsx:168:    if (!pickerId || !selectedPath || newFolderName === undefined || !connectedHostId)
src/renderer/src/workspaces/SessionDialog.tsx:226:            ? 'Connect to a host'
src/renderer/src/workspaces/SessionDialog.tsx:227:            : `Open folder on ${connected?.host.label ?? hostId}`}
src/renderer/src/terminal/TerminalContextMenu.tsx:260:            <span>Fork Conversation to New Terminal</span>
src/renderer/src/settings/HarnessProfilesSettings.tsx:75:          <p>Open a project to configure harnesses.</p>
src/renderer/src/terminal/TerminalDeck.tsx:159:              New terminal
src/renderer/src/terminal/TerminalRail.tsx:123:                  ? 'Move terminal, new worktree available'
src/renderer/src/terminal/TerminalRail.tsx:195:              aria-label="New terminal"
src/renderer/src/terminal/TerminalRail.tsx:196:              title="New terminal"
src/renderer/src/terminal/TerminalRecoveryDialog.tsx:171:                        ? 'New shell'
```

</details>


---

<sub>56s</sub>

### `rg`

**(^|[^[:alnum:]])(README\.md|format:check)|['"]git['"]|OpenSSH config|~/.ssh/config|SFTP subsystem**

"(^|[^[:alnum:]])(README\.md|format:check)|['"]git['"]|OpenSSH config|~/.ssh/config|SFTP subsystem" in *.{mjs,ts,sh,yml} (.github/workflows, src/main/git, src/main/project-host, scripts/check-adrs.mjs, scripts/check-seams.sh)

<details>
<summary>7 matches</summary>

```
scripts/check-seams.sh:101:hits=$(grep -rnF ".exec('git'" src/main/git --include='*.ts' --include='*.mts' \
scripts/check-adrs.mjs:26:    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
src/main/git/worker-host-broker.ts:42:  if (call.command !== 'git') throw new Error('git worker may execute only git')
src/main/git/worker-host-broker.ts:126:    host.exec('git', [...SAFE_GIT_CONFIG, ...call.args], {
src/main/git/git-command-context.ts:69:    return this.host.exec('git', ['-C', root.path, ...args], {
src/main/git/git-command-context.ts:83:    return this.host.exec('git', ['-C', root.path, ...args], opts)
src/main/git/mutation-authorization.ts:205:    call.command !== 'git' ||
```

</details>


---

<sub>56s</sub>

### `rg`

**aria-label=|title=**

"aria-label=|title=" in *.tsx (src/renderer/src/workspaces/ProjectsBar.tsx, src/renderer/src/terminal/TerminalRail.tsx)

<details>
<summary>46 matches</summary>

```
[grep content: 43 matches across 2 file(s) under src/renderer/src]

terminal/TerminalRail.tsx (18 match(es)):
  98:       aria-label={`Open terminals in ${label}`}
  109:             aria-label="Collapse terminal rail"
  110:             title="Collapse terminal rail"
  121:               aria-label={
  126:               title="Move active terminal to another worktree"
  175:             aria-label="Split terminal"
  176:             title="Open a shell in the other terminal split"
  185:             aria-label="Open settings"
  186:             title="Settings"
  195:               aria-label="New terminal"
  196:               title="New terminal"
  229:                       title={launchMenuDescription(profile, provider, state)}
  293:                     aria-label={terminalAttentionLabel(session.attention)}
  294:                     title={terminalAttentionLabel(session.attention)}
  304:                   aria-label={`Move ${session.title} to ${session.pane === 'primary' ? 'right' : 'left'} split`}
  305:                   title={`Move to ${session.pane === 'primary' ? 'right' : 'left'} split`}
  314:                 aria-label={`Close ${session.title}`}
  315:                 title="Close terminal"

workspaces/ProjectsBar.tsx (25 match(es)):
  187:           aria-label="Projects"
  214:                 title={title}
  220:                   aria-label={projectTabLabel(project, actionable, working)}
  223:                   title={title}
  244:                     aria-label={`Connection controls for ssh:${project.registeredRoot.hostId} · ${connectionStateLabel(project.connectionState)}`}
  245:                     title="Connection controls"
  274:                   aria-label={`Close project ${project.displayName}`}
  275:                   title={
  289:             aria-label="Register project"
  290:             title="Register project"
  300:             aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
  301:             title={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
  309:             aria-label="Open settings"
  310:             title="Settings"
  320:             aria-label="Workspaces"
  327:                 title={workspaceStatusTitle(workspace)}
  344:                   title={workspaceStatusTitle(workspace)}
  361:                     aria-label={`Close workspace ${workspace.name}`}
  362:                     title={
  376:                     aria-label={`Dismiss removed workspace ${workspace.name}`}
  377:                     title="Forget removed worktree from hvir"
  386:                 <span className="workspace-status-error" title={statusError}>
  396:                   title="Remove Git's stale worktree administrative records"
  435:             aria-label={`Connection controls for ssh:${connectionProject.registeredRoot.hostId}`}
  586:     <span className="terminal-attention-count" aria-label={label} title={label}>
```

</details>


---

<sub>56s</sub>

### `rg`

**name:|uses:|run:**

"name:|uses:|run:" (.github/workflows/macos-package-release.yml)

<details>
<summary>31 matches</summary>

```
[grep content: 29 matches across 1 file(s) under .github/workflows]

macos-package-release.yml (29 match(es)):
  1: name: Signed macOS package
  41:     name: Sign, notarize, staple, and accept macOS arm64 package
  47:       - name: Require an exact protected merged source
  52:         run: |
  66:       - name: Check out trusted source
  67:         uses: actions/checkout@v7
  72:       - name: Confirm the protected branch contains the exact source
  76:         run: |
  88:       - name: Set up Node.js
  89:         uses: actions/setup-node@v7
  94:       - name: Install dependencies
  95:         run: npm ci
  97:       - name: Require protected signing credentials
  107:         run: |
  127:       - name: Prepare protected notary credential
  130:         run: |
  136:       - name: Build signed and notarized package
  144:         run: npm run pack:mac:arm64:signed
  146:       - name: Staple notarization ticket
  147:         run: |
  156:       - name: Install, update, launch, and remove signed package
  161:         run: npm run smoke:macos:installed
  163:       - name: Remove protected notary credential
  165:         run: rm -f -- "$RUNNER_TEMP/hvir-notary-key.p8"
  167:       - name: Give the accepted artifact its public release name
  168:         run: |
  183:       - name: Retain accepted package for release assembly
  184:         uses: actions/upload-artifact@v7
  186:           name: release-macos-arm64
```

</details>


---

<sub>1m 8s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/eed8955d/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 210-330)

<details>
<summary>120 lines</summary>

```
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
```

</details>


---

<sub>1m 8s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/eed8955d/hvir/scripts/check-adrs.mjs (lines 1-85)

<details>
<summary>77 lines</summary>

```
import console from 'node:console'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { validateAdrLifecycles } from './adr-lifecycle.mts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const adrDirectory = join(root, 'docs', 'adr')
const designPath = join(root, 'docs', 'design.md')
const recordName = /^ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const requiredSections = [
  '## Context',
  '## Decision',
  '## Consequences',
  '## Rejected alternatives',
]
const errors = []

const directoryEntries = readdirSync(adrDirectory).filter((name) =>
  statSync(join(adrDirectory, name)).isFile(),
)
const records = directoryEntries.filter((name) => recordName.test(name)).sort()
const unexpected = directoryEntries
  .filter(
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
  )
  .sort()

for (const name of unexpected) {
  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
}

const recordIds = new Map()
const recordSources = new Map()
for (const name of records) {
  const id = recordName.exec(name)[1]
  const path = join(adrDirectory, name)
  const source = readFileSync(path, 'utf8')
  recordSources.set(name, source)
  const previous = recordIds.get(id)
  if (previous) {
    errors.push(`ADR-${id} is duplicated by ${previous} and ${name}`)
  }
  recordIds.set(id, name)

  if (!source.startsWith(`# ADR-${id}: `)) {
    errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
  }

  let previousOffset = -1
  for (const section of requiredSections) {
    const matches = [...source.matchAll(new RegExp(`^${section}$`, 'gm'))]
    if (matches.length !== 1) {
      errors.push(`docs/adr/${name}: expected exactly one ${section}`)
      continue
    }
    if (matches[0].index < previousOffset) {
      errors.push(`docs/adr/${name}: required decision sections are out of order`)
    }
    previousOffset = matches[0].index
  }

  if (/^\s*[-*]\s+\[[ xX]\]/m.test(source)) {
    errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
  }
  if (
    /^#{2,}\s+(?:status|implementation|progress|acceptance|verification|test(?: run)? evidence|retrospective|research queue|delivery sequence|rollout plan)\b/im.test(
      source,
    )
  ) {
    errors.push(
      `docs/adr/${name}: progress, evidence, and rollout sections do not belong in ADRs`,
    )
  }
}

const design = readFileSync(designPath, 'utf8')
const indexSection = design.match(/## 4\. Key decisions\n([\s\S]*?)\n## 5\. Architecture/)
if (!indexSection) {
  errors.push('docs/design.md: missing bounded section 4 ADR index')
} else {
  errors.push(...validateAdrLifecycles(recordSources, indexSection[1]))
  const indexed = [
    ...indexSection[1].matchAll(
```

</details>


---

<sub>1m 8s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/src/main/project-coordinator.ts.**

/private/var/tmp/ws/eed8955d/hvir/src/main/project-coordinator.ts (lines 1-155)

<details>
<summary>142 lines</summary>

```
import { homedir } from 'node:os'

import {
  LOCAL_HOST_ID,
  asHostId,
  hostPath,
  type BrowseHostResponse,
  type ConnectedHost,
  type HostPath,
  type ProjectHostOption,
  type ProjectState,
  type RegisteredProjectState,
  type WorkspaceClosePlan,
} from '../shared'
import type { ProjectHost } from './project-host/project-host'
import type { ProjectWatchTarget } from './project-watch'
import type { WorkspaceRemovalPort } from './workspace-removal-coordinator'

export interface ProjectRegistryPort {
  readonly active: ProjectWatchTarget & { readonly workspaceId: string }
  state(): ProjectState
  projectById(projectId: string): RegisteredProjectState | undefined
  open(hostId: string, path: string): Promise<ProjectState>
  activate(projectId: string, workspaceId: string): Promise<ProjectState>
  closeProject(projectId: string): Promise<ProjectState>
  closeWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
  restoreWorkspaceAfterFailedClose(
    projectId: string,
    workspaceId: string,
  ): Promise<ProjectState>
  reopenWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
  acknowledgeWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
}

/** Host control is independent of registered project state and persistence. */
export interface ProjectHostControlPort {
  materializeHost(hostId: string): Promise<ProjectHost>
  hostById(hostId: string): ProjectHost | undefined
  listHosts(): readonly ProjectHostOption[]
  disconnectHost(hostId: string): Promise<ProjectHostOption>
}

export interface ProjectWorkspacePort {
  serialize<T>(operation: () => Promise<T>): Promise<T>
  refresh(projectId: string): Promise<ProjectState>
  replaceWatch(target?: ProjectWatchTarget): Promise<void>
  invalidateProject(projectId: string): void
  settleProject(projectId: string, obsoleteRefresh?: 'wait' | 'skip'): Promise<void>
}

export interface ProjectCleanupPort {
  revokeWorkspace(root: HostPath): Promise<void>
  closeWorkspaceWebPanes(root: HostPath): Promise<void>
  workspaceTerminalIds(root: HostPath): readonly string[]
  closeWorkspaceTerminals(root: HostPath): void
  forgetWorkspaceSessions(root: HostPath): Promise<void>
}

export interface ProjectHostControlDiagnostic {
  readonly operation: 'connect' | 'disconnect'
  readonly hostKind: 'local' | 'ssh'
}

export interface ProjectCoordinatorOptions {
  readonly registry: ProjectRegistryPort
  readonly hosts: ProjectHostControlPort
  readonly workspaces: ProjectWorkspacePort
  readonly cleanup: ProjectCleanupPort
  readonly removal: WorkspaceRemovalPort
  readonly onError?: (message: string, error: unknown) => void
  readonly onHostControlDiagnostic?: (event: ProjectHostControlDiagnostic) => void
}

interface Transition {
  readonly generation: number
  readonly projects: readonly string[]
}

/** Coordinates project transitions while ProjectRegistry remains the state authority. */
export class ProjectCoordinator {
  private transitionGeneration = 0

  constructor(private readonly options: ProjectCoordinatorOptions) {}

  connectHost(hostId: string): Promise<ConnectedHost> {
    const transition = this.beginTransition()
    return this.options.workspaces.serialize(async () => {
      this.assertCurrent(transition)
      await this.settleTransition(transition)
      this.assertCurrent(transition)
      const connected = await this.controlHost('connect', hostId, () =>
        this.connectAndSuggestPath(hostId),
      )
      this.assertCurrent(transition)
      if (this.options.registry.active.host.hostId === hostId) {
        await this.options.workspaces.replaceWatch(this.options.registry.active)
      }
      this.assertCurrent(transition)
      for (const project of this.options.registry.state().projects) {
        if (project.registeredRoot.hostId !== hostId) continue
        void this.options.workspaces
          .refresh(project.id)
          .catch((error) =>
            this.report(
              `[workspace] refresh after connect failed for ${project.id}`,
              error,
            ),
          )
      }
      return connected
    })
  }

  disconnectHost(hostId: string): Promise<ProjectHostOption> {
    const transition = this.beginTransition()
    return this.options.workspaces.serialize(async () => {
      this.assertCurrent(transition)
      await this.settleTransition(transition)
      this.assertCurrent(transition)
      const activeHost = this.options.registry.active.host.hostId === hostId
      const roots = this.options.registry
        .state()
        .projects.filter((project) => project.registeredRoot.hostId === hostId)
        .flatMap((project) => project.workspaces.map((workspace) => workspace.root))
      if (activeHost) await this.options.workspaces.replaceWatch()
      try {
        await Promise.all(roots.map((root) => this.options.cleanup.revokeWorkspace(root)))
        this.assertCurrent(transition)
        const disconnected = await this.controlHost('disconnect', hostId, () =>
          this.options.hosts.disconnectHost(hostId),
        )
        this.assertCurrent(transition)
        return disconnected
      } finally {
        if (
          activeHost &&
          this.isCurrent(transition) &&
          this.options.registry.active.host.connectionState === 'connected'
        ) {
          await this.options.workspaces.replaceWatch(this.options.registry.active)
        }
      }
    })
  }

  async browseHost(hostId: string, rawPath: string): Promise<BrowseHostResponse> {
    const generation = this.transitionGeneration
    const host = this.options.hosts.hostById(hostId)
    if (!host || host.connectionState !== 'connected') {
      throw new Error(`Connect to ${hostId} before browsing folders`)
    }
    if (!rawPath.startsWith('/')) throw new Error('Folder path must be absolute')
    try {
      const path = await host.realpath(hostPath(asHostId(hostId), rawPath))
      const stat = await host.stat(path)
```

</details>


---

<sub>1m 8s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/.prettierrc.json.**

/private/var/tmp/ws/eed8955d/hvir/.prettierrc.json

<details>
<summary>7 lines</summary>

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
```

</details>


---

<sub>1m 33s</sub>

### Copilot

I’ll document both ways to get started: installing a native release and running hvir from source.

---

<sub>1m 49s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a terminal-first desktop workbench for software development. Open local or\n+SSH projects and keep your shells, Git worktrees, file previews, and coding-agent\n+sessions in one window.\n+\n+- Run shells in split terminal panes powered by [Ghostty Web](https://github.com/coder/ghostty-web).\n+- Switch between Git worktrees, inspect changes, and browse commit history.\n+- Browse project files, preview Markdown, and open web pages alongside your work.\n+- Use harness profiles to launch tools such as Claude Code and Codex. Install and\n+  authenticate the tool separately on the host where it will run.\n+\n+## Install\n+\n+Download a package or `install.sh` from the [latest GitHub release](https://github.com/jarmak-personal/hvir/releases/latest):\n+\n+| Platform                  | Release package                          |\n+| ------------------------- | ---------------------------------------- |\n+| macOS (Apple silicon)     | `hvir-<version>-darwin-arm64.pkg`         |\n+| Linux x64 (APT-based)     | `hvir-<version>-linux-x64.deb`            |\n+| Linux arm64 (APT-based)   | `hvir-<version>-linux-arm64.deb`          |\n+\n+Linux packages require glibc 2.35 or later. Open the `.pkg` on macOS or install the\n+matching `.deb` with APT on Linux. Alternatively, download and review the release's\n+`install.sh`, then run `bash install.sh` to let it select and verify the package for\n+your platform.\n+\n+## Open a project\n+\n+Launch hvir and select **Register project**. Choose **Local** or an SSH host, then\n+select a folder. Select a workspace and use **New terminal** to start a shell or\n+launch a configured harness. Git features require `git` on the project's host.\n+\n+If you installed a release package, you can also open the current local directory\n+from your shell with `hvir .`.\n+\n+## Develop from source\n+\n+You need Git, Node.js 24 or later, npm, and Python 3 for native module builds. On macOS,\n+install the Xcode Command Line Tools. On Linux, install `make` and a C/C++ toolchain\n+(for example, `build-essential` on Ubuntu).\n+\n+```sh\n+git clone https://github.com/jarmak-personal/hvir.git\n+cd hvir\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` downloads Electron and builds the native modules, including rebuilding\n+`node-pty` for Electron.\n+\n+| Command                         | Purpose                                    |\n+| ------------------------------- | ------------------------------------------ |\n+| `npm run lint`                  | Run ESLint.                                |\n+| `npm run typecheck`             | Type-check the Node and renderer code.     |\n+| `npm test`                      | Run the Vitest suite.                      |\n+| `npm run build`                 | Build the production app to `out/`.        |\n+| `npm run smoke:macos`           | Run Electron smoke tests on macOS.         |\n+| `xvfb-run -a npm run smoke`     | Run Electron smoke tests on headless Linux. |\n+\n+To create a native package on the matching host, run `npm run pack:mac:arm64`,\n+`npm run pack:linux:x64`, or `npm run pack:linux:arm64`. Packages are written to `dist/`.\n+\n+## Repository layout\n+\n+| Path                                  | Role                                             |\n+| ------------------------------------- | ------------------------------------------------ |\n+| [`src/main/`](src/main/)               | Electron main process, terminals, Git, and hosts |\n+| [`src/preload/`](src/preload/)         | Bridge between Electron and the renderer         |\n+| [`src/renderer/`](src/renderer/)       | React workbench UI                               |\n+| [`src/shared/`](src/shared/)           | Shared types and IPC contracts                   |\n+| [`test/`](test/)                       | Test suites and fixtures                         |\n+| [`scripts/`](scripts/)                 | Build, verification, and release tools           |\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). See\n+[Third-Party Notices](THIRD_PARTY_NOTICES.md) for bundled components.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/eed8955d/hvir/README.md
```


---

<sub>2m 5s</sub>

### `rg`

**ghostty-web|Ghostty Web**

"ghostty-web|Ghostty Web" (THIRD_PARTY_NOTICES.md)

```
THIRD_PARTY_NOTICES.md:39:## ghostty-web
THIRD_PARTY_NOTICES.md:41:Source: <https://github.com/coder/ghostty-web>
THIRD_PARTY_NOTICES.md:44:[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
THIRD_PARTY_NOTICES.md:45:That artifact retains ghostty-web's upstream license and authorship.
THIRD_PARTY_NOTICES.md:115:ghostty-web includes a WebAssembly build of Ghostty's terminal core, which hvir
```


---

<sub>2m 5s</sub>

### `rg`

**(\.ssh/config|join\([^\n]*'\.ssh', 'config'|SSH_CONFIG|ssh-config)**

"(\.ssh/config|join\([^\n]*'\.ssh', 'config'|SSH_CONFIG|ssh-config)" in *.ts (src/main/project-host, src/main/workbench-runtime.ts)

<details>
<summary>6 matches</summary>

```
src/main/project-host/project-host-catalog.ts:8:import { parseSshConfig, type SshAliasConfig } from './ssh-config'
src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
src/main/project-host/index.ts:51:export { parseSshConfig } from './ssh-config'
src/main/project-host/index.ts:52:export type { SshAliasConfig } from './ssh-config'
src/main/project-host/ssh-host-options.ts:4:import type { SshAliasConfig } from './ssh-config'
src/main/project-host/ssh-config.ts:1:import SSHConfig from 'ssh-config'
```

</details>


---

<sub>2m 5s</sub>

### `bash`

**Confirm README is the only change and find the local formatter**

$ git --no-pager status --short && if command -v node > /dev/null && test -f node_modules/prettier/bin/prettier.cjs; then printf '%s\n' 'Local Prettier is available.'; fi

```
?? README.md
Local Prettier is available.
<shellId: 2 completed with exit code 0>
```


---

<sub>2m 20s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

```json
"*** Begin Patch\n*** Update File: README.md\n@@\n-Launch hvir and select **Register project**. Choose **Local** or an SSH host, then\n-select a folder. Select a workspace and use **New terminal** to start a shell or\n-launch a configured harness. Git features require `git` on the project's host.\n+Launch hvir and select **Register project**. Choose **Local** or an SSH host from\n+`~/.ssh/config`, then select a folder. In the workspace, use **New terminal** to\n+start a shell or launch a configured harness. Git features require `git` on the\n+project's host.\n@@\n-`npm ci` downloads Electron and builds the native modules, including rebuilding\n-`node-pty` for Electron.\n+`npm ci` downloads Electron and compiles native dependencies, including `node-pty`\n+for Electron's ABI.\n@@\n-| `npm run build`                 | Build the production app to `out/`.        |\n+| `npm run build`                 | Build production bundles into `out/`.      |\n*** End Patch\n"
```

</details>

```
Modified 1 file(s): /private/var/tmp/ws/eed8955d/hvir/README.md
```


---

<sub>2m 24s</sub>

### `bash`

**Format the README and confirm it is the only changed file**

$ node node_modules/prettier/bin/prettier.cjs --write README.md && git --no-pager status --short

```
?? README.md
<shellId: 3 completed with exit code 0>
```


---

<sub>2m 28s</sub>

### `view`

**view the file at /private/var/tmp/ws/eed8955d/hvir/README.md.**

/private/var/tmp/ws/eed8955d/hvir/README.md

<details>
<summary>61 lines</summary>

````
# hvir

hvir is a terminal-first desktop workbench for software development. Open local or
SSH projects and keep your shells, Git worktrees, file previews, and coding-agent
sessions in one window.

- Run shells in split terminal panes powered by [Ghostty Web](https://github.com/coder/ghostty-web).
- Switch between Git worktrees, inspect changes, and browse commit history.
- Browse project files, preview Markdown, and open web pages alongside your work.
- Use harness profiles to launch tools such as Claude Code and Codex. Install and
  authenticate the tool separately on the host where it will run.

## Install

Download a package or `install.sh` from the [latest GitHub release](https://github.com/jarmak-personal/hvir/releases/latest):

| Platform                  | Release package                          |
| ------------------------- | ---------------------------------------- |
| macOS (Apple silicon)     | `hvir-<version>-darwin-arm64.pkg`         |
| Linux x64 (APT-based)     | `hvir-<version>-linux-x64.deb`            |
| Linux arm64 (APT-based)   | `hvir-<version>-linux-arm64.deb`          |

Linux packages require glibc 2.35 or later. Open the `.pkg` on macOS or install the
matching `.deb` with APT on Linux. Alternatively, download and review the release's
`install.sh`, then run `bash install.sh` to let it select and verify the package for
your platform.

## Open a project

Launch hvir and select **Register project**. Choose **Local** or an SSH host from
`~/.ssh/config`, then select a folder. In the workspace, use **New terminal** to
start a shell or launch a configured harness. Git features require `git` on the
project's host.

If you installed a release package, you can also open the current local directory
from your shell with `hvir .`.

## Develop from source

You need Git, Node.js 24 or later, npm, and Python 3 for native module builds. On macOS,
install the Xcode Command Line Tools. On Linux, install `make` and a C/C++ toolchain
(for example, `build-essential` on Ubuntu).

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

`npm ci` downloads Electron and compiles native dependencies, including `node-pty`
for Electron's ABI.

| Command                         | Purpose                                    |
| ------------------------------- | ------------------------------------------ |
| `npm run lint`                  | Run ESLint.                                |
| `npm run typecheck`             | Type-check the Node and renderer code.     |
| `npm test`                      | Run the Vitest suite.                      |
| `npm run build`                 | Build production bundles into `out/`.      |
| `npm run smoke:macos`           | Run Electron smoke tests on macOS.         |
| `xvfb-run -a npm run smoke`     | Run Electron smoke tests on headless Linux. |

To create a native package on the matching host, run `npm run pack:mac:arm64`,
`npm run pack:linux:x64`, or `npm run pack:linux:arm64`. Packages are written to `dist/`.

## Repository layout

| Path                                  | Role                                             |
| ------------------------------------- | ------------------------------------------------ |
| [`src/main/`](src/main/)               | Electron main process, terminals, Git, and hosts |
| [`src/preload/`](src/preload/)         | Bridge between Electron and the renderer         |
| [`src/renderer/`](src/renderer/)       | React workbench UI                               |
| [`src/shared/`](src/shared/)           | Shared types and IPC contracts                   |
| [`test/`](test/)                       | Test suites and fixtures                         |
| [`scripts/`](scripts/)                 | Build, verification, and release tools           |

## License

hvir is licensed under the [MIT License](LICENSE). See
[Third-Party Notices](THIRD_PARTY_NOTICES.md) for bundled components.
````

</details>


---

<sub>2m 50s</sub>

### `bash`

**Calculate consistent Markdown table alignment**

$ awk -F '|' '
function trim(value) { sub(/^ +/, "", value); sub(/ +$/, "", value); return value }
function dashes(width, text) { while (length(text) < width) text = text "-"; return text }
function flush(   i) {
  for (i = 1; i <= count; i++) {
    if (i == 2) { left[i] = dashes(a); right[i] = dashes(b) }
    printf "| %-*s | %-*s |\n", a, left[i], b, right[i]
  }
  if (count) print ""
  count = a = b = 0
}
/^\|/ {
  count++
  if (count == 2) next
  left[count] = trim($2); right[count] = trim($3)
  if (length(left[count]) > a) a = length(left[count])
  if (length(right[count]) > b) b = length(right[count])
  next
}
count { flush() }
END { flush() }
' README.md

<details>
<summary>22 lines</summary>

```
| Platform                | Release package                   |
| ----------------------- | --------------------------------- |
| macOS (Apple silicon)   | `hvir-<version>-darwin-arm64.pkg` |
| Linux x64 (APT-based)   | `hvir-<version>-linux-x64.deb`    |
| Linux arm64 (APT-based) | `hvir-<version>-linux-arm64.deb`  |

| Command                     | Purpose                                     |
| --------------------------- | ------------------------------------------- |
| `npm run lint`              | Run ESLint.                                 |
| `npm run typecheck`         | Type-check the Node and renderer code.      |
| `npm test`                  | Run the Vitest suite.                       |
| `npm run build`             | Build production bundles into `out/`.       |
| `npm run smoke:macos`       | Run Electron smoke tests on macOS.          |
| `xvfb-run -a npm run smoke` | Run Electron smoke tests on headless Linux. |

| Path                             | Role                                             |
| -------------------------------- | ------------------------------------------------ |
| [`src/main/`](src/main/)         | Electron main process, terminals, Git, and hosts |
| [`src/preload/`](src/preload/)   | Bridge between Electron and the renderer         |
| [`src/renderer/`](src/renderer/) | React workbench UI                               |
| [`src/shared/`](src/shared/)     | Shared types and IPC contracts                   |
| [`test/`](test/)                 | Test suites and fixtures                         |
| [`scripts/`](scripts/)           | Build, verification, and release tools           |
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>3m 11s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

```json
"*** Begin Patch\n*** Update File: README.md\n@@\n-| Platform                  | Release package                          |\n-| ------------------------- | ---------------------------------------- |\n-| macOS (Apple silicon)     | `hvir-<version>-darwin-arm64.pkg`         |\n-| Linux x64 (APT-based)     | `hvir-<version>-linux-x64.deb`            |\n-| Linux arm64 (APT-based)   | `hvir-<version>-linux-arm64.deb`          |\n+| Platform                | Release package                   |\n+| ----------------------- | --------------------------------- |\n+| macOS (Apple silicon)   | `hvir-<version>-darwin-arm64.pkg` |\n+| Linux x64 (APT-based)   | `hvir-<version>-linux-x64.deb`    |\n+| Linux arm64 (APT-based) | `hvir-<version>-linux-arm64.deb`  |\n@@\n-| Command                         | Purpose                                    |\n-| ------------------------------- | ------------------------------------------ |\n-| `npm run lint`                  | Run ESLint.                                |\n-| `npm run typecheck`             | Type-check the Node and renderer code.     |\n-| `npm test`                      | Run the Vitest suite.                      |\n-| `npm run build`                 | Build production bundles into `out/`.      |\n-| `npm run smoke:macos`           | Run Electron smoke tests on macOS.         |\n-| `xvfb-run -a npm run smoke`     | Run Electron smoke tests on headless Linux. |\n+| Command                     | Purpose                                     |\n+| --------------------------- | ------------------------------------------- |\n+| `npm run lint`              | Run ESLint.                                 |\n+| `npm run typecheck`         | Type-check the Node and renderer code.      |\n+| `npm test`                  | Run the Vitest suite.                       |\n+| `npm run build`             | Build production bundles into `out/`.       |\n+| `npm run smoke:macos`       | Run Electron smoke tests on macOS.          |\n+| `xvfb-run -a npm run smoke` | Run Electron smoke tests on headless Linux. |\n@@\n-| Path                                  | Role                                             |\n-| ------------------------------------- | ------------------------------------------------ |\n-| [`src/main/`](src/main/)               | Electron main process, terminals, Git, and hosts |\n-| [`src/preload/`](src/preload/)         | Bridge between Electron and the renderer         |\n-| [`src/renderer/`](src/renderer/)       | React workbench UI                               |\n-| [`src/shared/`](src/shared/)           | Shared types and IPC contracts                   |\n-| [`test/`](test/)                       | Test suites and fixtures                         |\n-| [`scripts/`](scripts/)                 | Build, verification, and release tools           |\n+| Path                             | Role                                             |\n+| -------------------------------- | ------------------------------------------------ |\n+| [`src/main/`](src/main/)         | Electron main process, terminals, Git, and hosts |\n+| [`src/preload/`](src/preload/)   | Bridge between Electron and the renderer         |\n+| [`src/renderer/`](src/renderer/) | React workbench UI                               |\n+| [`src/shared/`](src/shared/)     | Shared types and IPC contracts                   |\n+| [`test/`](test/)                 | Test suites and fixtures                         |\n+| [`scripts/`](scripts/)           | Build, verification, and release tools           |\n*** End Patch\n"
```

</details>

```
Modified 1 file(s): /private/var/tmp/ws/eed8955d/hvir/README.md
```


---

<sub>3m 15s</sub>

### Copilot

Created [README.md](README.md) with an overview of hvir, installation instructions for macOS and Linux, and a quickstart for opening local and SSH projects. It also documents development, testing, and packaging commands, plus the repository layout and license.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
