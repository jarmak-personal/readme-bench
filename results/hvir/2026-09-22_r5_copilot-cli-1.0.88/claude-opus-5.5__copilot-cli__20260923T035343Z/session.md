# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `72b7c682-b988-41ae-89a2-3c78544b1180`  
> - **Started:** 9/22/2026, 11:53:57 PM  
> - **Duration:** 53s  
> - **Exported:** 9/22/2026, 11:54:51 PM  

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

**List project files**

$ git ls-files | head -100; ls -la

<details>
<summary>130 lines</summary>

```
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
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 22 23:53 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:53 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:53 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:53 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:53 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 22 23:53 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 22 23:53 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 22 23:53 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:53 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 22 23:53 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 22 23:53 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 22 23:53 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 22 23:53 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 22 23:53 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 22 23:53 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 22 23:53 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 22 23:53 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:53 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 22 23:53 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 22 23:53 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 22 23:53 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 22 23:53 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 22 23:53 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 22 23:53 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 22 23:53 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 22 23:53 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 22 23:53 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 22 23:53 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>5s</sub>

### `bash`

**Inspect key config**

$ cat package.json electron-builder.yml LICENSE .gitignore; git ls-files src | sed 's|/[^/]*$||' | sort | uniq -c | head -60; git ls-files | grep -iE 'docs?/|adr|\.md$' | head -30; git log --oneline | head -10

<details>
<summary>285 lines</summary>

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
THIRD_PARTY_NOTICES.md
scripts/adr-lifecycle.mts
scripts/check-adrs.mjs
test/adr-lifecycle.test.ts
test/fixtures/rendered-mmd.md
test/fixtures/rendered.md
ec8de40 Initial commit
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `bash`

**Inspect app purpose**

$ ls src/main/harness/providers src/main/project-host src/renderer/src/workbench; cat build/native/hvir-command | head -60; head -60 scripts/native-installer.template.sh; head -40 scripts/check-adrs.mjs; cat .githooks/pre-push; head -80 .github/workflows/release.yml; head -30 THIRD_PARTY_NOTICES.md

<details>
<summary>288 lines</summary>

```
src/main/harness/providers:
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts

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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>13s</sub>

### `bash`

**More context**

$ sed -n 60,140p scripts/native-installer.template.sh; grep -rhoE 'https://github.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+' .github scripts package.json | sort | uniq -c | sort -rn | head; ls src/renderer/src src/main; head -50 src/main/harness/providers/claude-code.ts; cat scripts/check-terminal-runtime.mts | head -40

<details>
<summary>227 lines</summary>

```
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

   3 https://github.com/jarmak-personal/ghostty-web
   1 https://github.com/mbadolato/iTerm2-Color-Schemes
   1 https://github.com/jarmak-personal/hvir.git
   1 https://github.com/jarmak-personal/hvir
   1 https://github.com/jarmak-personal/ghostty-web.git
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
import {
  asHarnessProviderId,
  asHarnessProfileId,
  type HarnessContextPressurePolicy,
} from '../../../shared'
import type { HarnessProvider, HarnessLaunchSpec } from '../harness-provider-contract'
import { configureClaudeComposerSubmit } from '../claude-keybindings'
import {
  observeClaudeContext,
  observeClaudeUsage,
  snapshotClaudeUsage,
} from '../claude-context-telemetry'
import { claudeResumeAvailability } from '../claude-session-recovery'
import { versionProbe } from '../harness-provider-probes'
import {
  pathImagePasteContract,
  documentReviewInsertContract,
} from '../harness-composer-contracts'

const CLAUDE_CONTEXT_PRESSURE: HarnessContextPressurePolicy = {
  assumedWindowTokens: 1_000_000,
  warningPercent: 20,
  criticalPercent: 40,
}

const claudeCodeReviewInsert = documentReviewInsertContract(() => claudeCodeProvider)

export const claudeCodeProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('claude-code'),
    displayName: 'Claude Code',
    sessionKind: 'agent',
    contextPresentation: 'pressure',
    contextPressure: CLAUDE_CONTEXT_PRESSURE,
    modifiedKeyProtocol: 'modify-other-keys',
    metaEnterAliasesControl: true,
  },
  profile: {
    version: 3,
    defaultProfile: {
      id: asHarnessProfileId('claude-code-default'),
      displayName: 'Claude Code',
      description: 'Claude Code with exact hvir-managed session recovery.',
    },
    reservedArguments: ['--session-id', '--resume', '--continue', '--fork-session'],
    reservedEnvironmentKeys: ['CLAUDE_CONFIG_DIR'],
    artifactEnvironmentKeys: ['CLAUDE_CONFIG_DIR'],
    artifactExecutable: true,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>18s</sub>

### `bash`

**Installer details**

$ grep -nE "install\.sh|releases/|installer" scripts/assemble-native-release.mjs .github/workflows/release.yml | head -20; grep -rn "jarmak-personal/hvir" --include=* -r .github scripts package.json 2>/dev/null | grep -v node_modules | head; grep -rhoE "'[a-z-]+'" src/shared/ipc/*.ts | head -0; ls src/renderer/src/dashboards src/renderer/src/viewer | head -40

<details>
<summary>64 lines</summary>

```
scripts/assemble-native-release.mjs:10:import { renderNativeInstaller } from './render-native-installer.mjs'
scripts/assemble-native-release.mjs:54:  const installerPath = resolve(assetDirectory, 'install.sh')
scripts/assemble-native-release.mjs:62:    output: installerPath,
scripts/assemble-native-release.mjs:83:  const installer = {
scripts/assemble-native-release.mjs:84:    name: basename(installerPath),
scripts/assemble-native-release.mjs:85:    sha256: await sha256File(installerPath),
scripts/assemble-native-release.mjs:96:    installer,
scripts/assemble-native-release.mjs:106:    installer.name,
scripts/assemble-native-release.mjs:122:    installerPath,
scripts/assemble-native-release.mjs:149:    'install.sh',
.github/workflows/release.yml:484:      - name: Assemble exact release metadata and installer
.github/workflows/release.yml:562:            install.sh \
.github/workflows/release.yml:612:          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
scripts/run-linux-package-smoke.sh:168:    --repository jarmak-personal/hvir \
scripts/run-macos-package-smoke.sh:214:    --repository jarmak-personal/hvir \
scripts/render-native-installer.mjs:155:    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
scripts/assemble-native-release.mjs:212:    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
scripts/architecture-github.mts:109:      'https://github.com/jarmak-personal/hvir.git',
scripts/architecture-github.mts:110:      'git@github.com:jarmak-personal/hvir.git',
scripts/architecture-github.mts:111:      'https://github.com/jarmak-personal/hvir',
scripts/project-management/planning-cli.ts:27:  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
scripts/project-management/canonical-project-config.ts:21:  repository: 'jarmak-personal/hvir',
scripts/project-management/audit-canonical-project.ts:12:  HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
head: illegal line count -- 0
src/renderer/src/dashboards:
ElectronWebPaneSurface.tsx
use-web-pane-workspace.ts
web-pane-diagnostics.ts
web-pane-surface.ts
web-pane-url.ts
web-pane-workspace-policy.ts
WebPane.tsx
WebPaneStack.tsx

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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>21s</sub>

### `bash`

**Release URL and workspaces**

$ grep -n "releaseBaseUrl\|download" scripts/render-native-installer.mjs | head; grep -n "workspace\b\|worktree" -i src/renderer/src/workspaces/*.ts | head -8; ls src/renderer/src/workspaces src/renderer/src/document-review | head -40

<details>
<summary>52 lines</summary>

```
31:  const releaseBaseUrl =
32:    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
35:    ['HVIR_RELEASE_BASE_URL', shellQuote(releaseBaseUrl)],
68:  return { artifacts, outputPath, releaseBaseUrl }
src/renderer/src/workspaces/project-session-model.ts:19:/** Provider-neutral terminal signal input supplied by terminal workspace owners. */
src/renderer/src/workspaces/project-session-model.ts:116:export function selectActiveWorkspace(model: ProjectSessionModel) {
src/renderer/src/workspaces/project-session-model.ts:120:    (workspace) => workspace.id === state?.activeWorkspaceId,
src/renderer/src/workspaces/project-session-model.ts:124:export function selectRelativeWorkspace(
src/renderer/src/workspaces/project-session-model.ts:131:    project?.workspaces.filter((workspace) => !workspace.missing && !workspace.closed) ??
src/renderer/src/workspaces/project-session-model.ts:135:    (workspace) => workspace.id === state.activeWorkspaceId,
src/renderer/src/workspaces/project-session.ts:19:  selectActiveWorkspace,
src/renderer/src/workspaces/project-session.ts:20:  selectRelativeWorkspace,
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

src/renderer/src/workspaces:
connection-status.ts
ConnectionStatus.tsx
initial-host-connection.ts
MissingWorkspaceNotice.tsx
project-folder-picker-client.ts
project-session-events.ts
project-session-model.ts
project-session.ts
project-state-delivery.ts
project-watch-interests.ts
ProjectsBar.tsx
SessionDialog.tsx
SshPromptDialog.tsx
workspace-attention.ts
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>24s</sub>

### `bash`

**Check worktree support**

$ grep -rli "worktree" src/main | head -5; ls src/main/git src/main/sessions

<details>
<summary>30 lines</summary>

```
src/main/smoke/sessions-projection.ts
src/main/smoke/terminal-move.ts
src/main/smoke/workspace-close.ts
src/main/smoke/sessions-visual.ts
src/main/smoke/project-fixture-commands.ts
src/main/git:
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

src/main/sessions:
sessions-observation-application.ts
sessions-observation-port.ts
sessions-open-resolution.ts
sessions-projection-identities.ts
sessions-projection-values.ts
sessions-telemetry-projection.ts
sessions-usage-observation-port.ts
sessions-usage-projection.ts
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>25s</sub>

### Copilot

Enough context. Writing the README.

---

<sub>41s</sub>

### `create`

**create a new file at /private/var/tmp/ws/8e245424/hvir/README.md.**

/private/var/tmp/ws/8e245424/hvir/README.md

```
Created file /private/var/tmp/ws/8e245424/hvir/README.md with 5283 characters
```


---

<sub>46s</sub>

### `bash`

**Verify claims and format**

$ cat tsconfig.node.json tsconfig.web.json; ls src/workers; npx prettier --write README.md && git diff --stat

<details>
<summary>39 lines</summary>

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
echo-worker.ts
git-worker.ts
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>48s</sub>

### `bash`

**Fix wording, check format**

$ sed -i '' 's/It combines a GPU-backed terminal/It combines a terminal/' README.md && npx prettier --check README.md && head -8 README.md

<details>
<summary>9 lines</summary>

```
Checking formatting...
All matched files use Prettier code style!
# hvir

hvir is a desktop workbench for running terminal-based coding agents next to the
project they work on. It combines a terminal (built on a modified
[ghostty-web](https://github.com/jarmak-personal/ghostty-web)), a project file
tree and viewer, Git tooling, and document review in one Electron app. Projects can
be local directories or remote hosts reached over SSH.
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>53s</sub>

### Copilot

I added `README.md` at the repo root. I wrote it from the code and config, then ran Prettier on it (it passes). I didn't run the install or build commands it describes.

It covers:
- **What hvir is:** an Electron workbench for running terminal-based coding agents next to the project they work on. It supports Claude Code, Codex, Cursor, Gemini, GitHub Copilot, Pi, or a plain shell, and projects can be local or on remote hosts over SSH.
- **Features:** terminals, workspaces and Git worktrees, the file viewer, Git tools, document review, and web panes.
- **Installation:** the release `install.sh` (including uninstall and purge), the supported Linux and macOS targets, and the `hvir <dir>` command.
- **Development:** prerequisites, setup, a table of the main npm scripts, and the project layout.
- **License:** MIT, with a pointer to the third-party notices.

The README tells contributors to run `npm run verify` before opening a pull request. That will probably fail right now: the `check-adrs` step it runs expects `docs/adr/` and `docs/design.md`, and neither is in the repo.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
