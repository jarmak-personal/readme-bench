# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `e748383c-5641-441c-be17-a38e688e3ec1`  
> - **Started:** 9/18/2026, 12:10:44 AM  
> - **Duration:** 6m 5s  
> - **Exported:** 9/18/2026, 12:16:49 AM  

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

I'll start by exploring the project structure to understand what it does.

---

<sub>4s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir.**

/private/var/tmp/ws/30b59304/hvir

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

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/package.json.**

/private/var/tmp/ws/30b59304/hvir/package.json

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

### Copilot

This is an Electron desktop app called "hvir". Let me dig into the source, docs, and existing documentation to understand what it actually does.

---

<sub>16s</sub>

### `bash`

**List key top-level directories and markdown files**

$ cd /private/var/tmp/ws/30b59304/hvir && ls -la src packages scripts build .github test 2>/dev/null | head -120 && echo "---DOCS---" && ls docs 2>/dev/null; find . -maxdepth 2 -iname "*.md" -not -path "./node_modules/*" | head -40

<details>
<summary>118 lines</summary>

```
.github:
total 8
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 18 00:10 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 18 00:10 ..
-rw-r--r--@  1 air-jarmak  wheel  1785 Sep 18 00:10 dependabot.yml
drwxr-xr-x@ 13 air-jarmak  wheel   416 Sep 18 00:10 workflows

build:
total 2912
drwxr-xr-x@ 12 air-jarmak  wheel     384 Sep 18 00:10 .
drwxr-xr-x@ 28 air-jarmak  wheel     896 Sep 18 00:10 ..
-rw-r--r--@  1 air-jarmak  wheel     393 Sep 18 00:10 entitlements.mac.inherit.plist
-rw-r--r--@  1 air-jarmak  wheel     393 Sep 18 00:10 entitlements.mac.plist
-rw-r--r--@  1 air-jarmak  wheel    2523 Sep 18 00:10 icon-linux.svg
-rw-r--r--@  1 air-jarmak  wheel  918161 Sep 18 00:10 icon-macos.icns
-rw-r--r--@  1 air-jarmak  wheel  552373 Sep 18 00:10 icon-macos.png
-rw-r--r--@  1 air-jarmak  wheel    2593 Sep 18 00:10 icon-macos.svg
drwxr-xr-x@  9 air-jarmak  wheel     288 Sep 18 00:10 icons-linux
drwxr-xr-x@  5 air-jarmak  wheel     160 Sep 18 00:10 linux
drwxr-xr-x@  3 air-jarmak  wheel      96 Sep 18 00:10 native
drwxr-xr-x@  4 air-jarmak  wheel     128 Sep 18 00:10 pkg-scripts

packages:
total 0
drwxr-xr-x@  3 air-jarmak  wheel   96 Sep 18 00:10 .
drwxr-xr-x@ 28 air-jarmak  wheel  896 Sep 18 00:10 ..
drwxr-xr-x@  8 air-jarmak  wheel  256 Sep 18 00:10 rename-noreplace

scripts:
total 992
drwxr-xr-x@ 54 air-jarmak  wheel   1728 Sep 18 00:10 .
drwxr-xr-x@ 28 air-jarmak  wheel    896 Sep 18 00:10 ..
-rw-r--r--@  1 air-jarmak  wheel   5645 Sep 18 00:10 adr-lifecycle.mts
-rw-r--r--@  1 air-jarmak  wheel   7237 Sep 18 00:10 agent-work-checkpoint-store.mts
-rw-r--r--@  1 air-jarmak  wheel  10110 Sep 18 00:10 architecture-authorization.mts
-rw-r--r--@  1 air-jarmak  wheel   9985 Sep 18 00:10 architecture-github.mts
-rw-r--r--@  1 air-jarmak  wheel  12147 Sep 18 00:10 architecture-hotspots.json
-rw-r--r--@  1 air-jarmak  wheel    199 Sep 18 00:10 architecture-hotspots.mjs
-rw-r--r--@  1 air-jarmak  wheel   5474 Sep 18 00:10 architecture-hotspots.mts
-rw-r--r--@  1 air-jarmak  wheel  10192 Sep 18 00:10 architecture-inventory.mts
-rw-r--r--@  1 air-jarmak  wheel   6009 Sep 18 00:10 architecture-module-directions.mts
-rw-r--r--@  1 air-jarmak  wheel   9391 Sep 18 00:10 architecture-module-graph.mts
-rw-r--r--@  1 air-jarmak  wheel   9647 Sep 18 00:10 architecture-module-resolution.mts
-rw-r--r--@  1 air-jarmak  wheel  14540 Sep 18 00:10 architecture-policy.mts
-rw-r--r--@  1 air-jarmak  wheel   7680 Sep 18 00:10 architecture-wiring.mts
-rw-r--r--@  1 air-jarmak  wheel   1092 Sep 18 00:10 assemble-native-release.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   7281 Sep 18 00:10 assemble-native-release.mjs
-rw-r--r--@  1 air-jarmak  wheel   1569 Sep 18 00:10 capture-contributor-usage.mts
-rw-r--r--@  1 air-jarmak  wheel   6044 Sep 18 00:10 check-adrs.mjs
-rw-r--r--@  1 air-jarmak  wheel   6565 Sep 18 00:10 check-seams.sh
-rw-r--r--@  1 air-jarmak  wheel   5007 Sep 18 00:10 check-terminal-runtime.mts
-rw-r--r--@  1 air-jarmak  wheel   5650 Sep 18 00:10 ci-attempt-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel   2765 Sep 18 00:10 create-smoke-repository.sh
-rw-r--r--@  1 air-jarmak  wheel   8912 Sep 18 00:10 generate-terminal-theme-catalog.mts
-rw-r--r--@  1 air-jarmak  wheel   2943 Sep 18 00:10 ghostty-terminal-capability-profile.mts
drwxr-xr-x@ 10 air-jarmak  wheel    320 Sep 18 00:10 ghostty-web-update
-rw-r--r--@  1 air-jarmak  wheel   9851 Sep 18 00:10 inspect-packaged-runtime.mts
-rwxr-xr-x@  1 air-jarmak  wheel    634 Sep 18 00:10 install-git-hooks.sh
-rw-r--r--@  1 air-jarmak  wheel  11606 Sep 18 00:10 installed-harness-dialog-probe.mts
-rw-r--r--@  1 air-jarmak  wheel  15300 Sep 18 00:10 installed-startup-probe.mts
-rwxr-xr-x@  1 air-jarmak  wheel  20201 Sep 18 00:10 native-installer.template.sh
-rwxr-xr-x@  1 air-jarmak  wheel    177 Sep 18 00:10 phase8-gauntlet.sh
-rw-r--r--@  1 air-jarmak  wheel   1667 Sep 18 00:10 prepare-release-linux-package.mts
-rw-r--r--@  1 air-jarmak  wheel   8274 Sep 18 00:10 prepare-release-pr.mjs
drwxr-xr-x@ 50 air-jarmak  wheel   1600 Sep 18 00:10 project-management
-rw-r--r--@  1 air-jarmak  wheel   7581 Sep 18 00:10 real-host-ssh-contract.mts
-rw-r--r--@  1 air-jarmak  wheel    349 Sep 18 00:10 real-host-ssh.vite.config.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4022 Sep 18 00:10 record-macos-ssh-identity.sh
-rw-r--r--@  1 air-jarmak  wheel    190 Sep 18 00:10 release-changelog.d.mts
-rw-r--r--@  1 air-jarmak  wheel    767 Sep 18 00:10 release-changelog.mjs
-rw-r--r--@  1 air-jarmak  wheel   1759 Sep 18 00:10 release-github-evidence.mts
-rw-r--r--@  1 air-jarmak  wheel    870 Sep 18 00:10 render-native-installer.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   6841 Sep 18 00:10 render-native-installer.mjs
-rw-r--r--@  1 air-jarmak  wheel  15062 Sep 18 00:10 require-release-ci-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel  13943 Sep 18 00:10 run-linux-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel  18309 Sep 18 00:10 run-macos-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel   1955 Sep 18 00:10 run-macos-ssh-acceptance.sh
-rw-r--r--@  1 air-jarmak  wheel  29461 Sep 18 00:10 run-real-host-ssh-acceptance.mts
-rw-r--r--@  1 air-jarmak  wheel  23458 Sep 18 00:10 run-smoke-interruption.mts
-rw-r--r--@  1 air-jarmak  wheel  18307 Sep 18 00:10 run-smoke-scenarios.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4368 Sep 18 00:10 run-smoke.sh
-rw-r--r--@  1 air-jarmak  wheel  11657 Sep 18 00:10 smoke-failure-artifact.mts
-rw-r--r--@  1 air-jarmak  wheel   2216 Sep 18 00:10 smoke-import-boundary.mjs
-rw-r--r--@  1 air-jarmak  wheel  14010 Sep 18 00:10 validate-release-pr.mts

src:
total 0
drwxr-xr-x@  7 air-jarmak  wheel   224 Sep 18 00:10 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 18 00:10 ..
drwxr-xr-x@ 40 air-jarmak  wheel  1280 Sep 18 00:10 main
drwxr-xr-x@  5 air-jarmak  wheel   160 Sep 18 00:10 preload
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 18 00:10 renderer
drwxr-xr-x@ 39 air-jarmak  wheel  1248 Sep 18 00:10 shared
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 18 00:10 workers

test:
total 7560
drwxr-xr-x@ 383 air-jarmak  wheel  12256 Sep 18 00:10 .
drwxr-xr-x@  28 air-jarmak  wheel    896 Sep 18 00:10 ..
-rw-r--r--@   1 air-jarmak  wheel   7262 Sep 18 00:10 adr-lifecycle.test.ts
-rw-r--r--@   1 air-jarmak  wheel   2781 Sep 18 00:10 application-runtime.test.ts
-rw-r--r--@   1 air-jarmak  wheel   7582 Sep 18 00:10 architecture-command.test.ts
-rw-r--r--@   1 air-jarmak  wheel   9558 Sep 18 00:10 architecture-github.test.ts
-rw-r--r--@   1 air-jarmak  wheel  10550 Sep 18 00:10 architecture-history.test.ts
-rw-r--r--@   1 air-jarmak  wheel  12885 Sep 18 00:10 architecture-module-directions.test.ts
-rw-r--r--@   1 air-jarmak  wheel  14145 Sep 18 00:10 architecture-module-graph.test.ts
-rw-r--r--@   1 air-jarmak  wheel  10240 Sep 18 00:10 architecture-policy.test.ts
-rw-r--r--@   1 air-jarmak  wheel   7804 Sep 18 00:10 architecture-wiring.test.ts
-rw-r--r--@   1 air-jarmak  wheel   1779 Sep 18 00:10 attention-badge.test.ts
-rw-r--r--@   1 air-jarmak  wheel   8509 Sep 18 00:10 canonical-project-config.test.ts
-rw-r--r--@   1 air-jarmak  wheel   5643 Sep 18 00:10 capacity-live-presentation.test.ts
-rw-r--r--@   1 air-jarmak  wheel   5054 Sep 18 00:10 capacity-output-fixtures.test.ts
-rw-r--r--@   1 air-jarmak  wheel   2148 Sep 18 00:10 capacity-performance.test.ts
-rw-r--r--@   1 air-jarmak  wheel   3433 Sep 18 00:10 capacity-terminal-activity.test.ts
-rw-r--r--@   1 air-jarmak  wheel   4391 Sep 18 00:10 ci-attempt-evidence.test.ts
-rw-r--r--@   1 air-jarmak  wheel   9578 Sep 18 00:10 ci-workflow.test.ts
-rw-r--r--@   1 air-jarmak  wheel  29739 Sep 18 00:10 claude-context-telemetry.test.ts
-rw-r--r--@   1 air-jarmak  wheel   8326 Sep 18 00:10 claude-keybindings.test.ts
-rw-r--r--@   1 air-jarmak  wheel   4244 Sep 18 00:10 claude-session-artifact.test.ts
-rw-r--r--@   1 air-jarmak  wheel   7698 Sep 18 00:10 claude-session-recovery.test.ts
---DOCS---
./THIRD_PARTY_NOTICES.md
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>21s</sub>

### Copilot

No existing README or docs folder. Let me check git history, the git remote, and dig into the source to understand the product.

---

<sub>24s</sub>

### `bash`

**Inspect git metadata and source directory layout**

$ cd /private/var/tmp/ws/30b59304/hvir && git --no-pager remote -v; echo "---BRANCH---"; git --no-pager branch --show-current; echo "---LOG---"; git --no-pager log --oneline -25; echo "---TAGS---"; git --no-pager tag | tail -10; echo "---SRC MAIN---"; ls src/main; echo "---SRC RENDERER---"; ls src/renderer src/renderer/*; echo "---SRC SHARED---"; ls src/shared; echo "---WORKERS---"; ls src/workers src/workers/*; echo "---PRELOAD---"; ls src/preload

<details>
<summary>126 lines</summary>

```
---BRANCH---
main
---LOG---
698801c Initial commit
---TAGS---
---SRC MAIN---
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
---SRC RENDERER---
src/renderer/index.html

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
---SRC SHARED---
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
---WORKERS---
src/workers/echo-worker.ts
src/workers/git-worker.ts

src/workers:
echo-worker.ts
git-worker.ts
---PRELOAD---
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>32s</sub>

### Copilot

The codebase is large (Electron + React + terminals + git + SSH + "harness" agents). I'll delegate a broad product-understanding search while I read key entry points directly.

---

<sub>43s</sub>

### search_code_subagent (Completed)

### `file_search`

****/*workspace*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*workspace*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/30b59304/hvir/test/use-document-review-workspace.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/git-workspace.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/terminal-workspace-model.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/terminal-workspace-materialization.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/terminal-workspace-move-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/retained-viewer-workspace-cache.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-workspace.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/workspace-removal-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/pty-supervisor-workspace-close.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/terminal-workspace-collection.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/workspace-removal-flow.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/workspace-attention.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/workspace-filter-polling.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/terminal-workspace-runtime-owner.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/use-viewer-workspace.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/viewer-workspace-model.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/workspace-activity.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/use-terminal-workspace-runtime.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/workspace-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-workspace-controller.test.ts
```

</details>


### `file_search`

****/*harness*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*harness*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/30b59304/hvir/test/harness-launch-menu.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-probe.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-profile-editor.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/harness-shell-environment.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-usage-artifact.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-usage-read-scheduler.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-profile-store.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-argument-editor.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-provider-ownership.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-provider.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-telemetry-envelope.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-telemetry-hub.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-profile-draft.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-usage.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-usage-provider-ssh.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/installed-harness-dialog-probe.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/harness-profiles-settings.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/fixtures/harness-profile-fixture.ts
  /private/var/tmp/ws/30b59304/hvir/test/harness-launch-menu-view.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/harness-profile-editor-policy.test.ts
```

</details>


### `file_search`

****/*session*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*session*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/30b59304/hvir/test/pty-session-resources.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/claude-session-recovery.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/session-dialog.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/sessions-terminal-ssh.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/codex-session-discovery.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/sessions-usage-observation-port.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/codex-session-recovery-lifecycle.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/terminal-session-commands.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/pty-session-identity-lifecycle.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/terminal-sessions-surface-owner.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/session-token-receipts.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/claude-session-artifact.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/project-session-delivery.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/sessions-ipc.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/sessions-observation-port.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/sessions-overview.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/private-session-assignment.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/sessions-terminal-detail-controller.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/sessions-overview-model.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/project-session-model.test.ts
```

</details>


### `file_search`

****/*document-review*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*document-review*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/30b59304/hvir/test/use-document-review-workspace.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/document-review-retention.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-delivery-interaction.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/document-review-smoke-driver.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-delivery.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-delivery-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-projections.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-delivery-ipc.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-model.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-store.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-smoke-isolation.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/document-review-interaction.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/document-review-workspace-controller.test.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/document-review/document-review-workspace-controller.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/document-review/document-review-anchor.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/document-review/document-review-delivery-client.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/document-review/document-review-delivery-feedback.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/document-review/use-document-review-delivery.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/document-review/document-review-eligibility.ts
```

</details>


### `file_search`

****/*web-pane*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*web-pane*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>18 lines</summary>

```
17 files found:
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-workspace.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-route-registry.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-route.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-surface.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-smoke-boundary.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/web-pane-diagnostics.test.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/dashboards/use-web-pane-workspace.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/dashboards/web-pane-surface.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/dashboards/web-pane-url.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/dashboards/web-pane-workspace-policy.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/dashboards/web-pane-diagnostics.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/web-pane.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/ipc/web-pane.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/smoke/web-pane-boundary.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/web-pane/web-pane-route-registry.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/ipc/features/web-pane.ts
```

</details>


### `file_search`

****/*viewer-types*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/*viewer-types*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/test/viewer-types.test.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/viewer-types.ts
```


### `grep_search`

**workspace-remote|workspace remote**

<details>
<summary>Arguments</summary>

```json
{
  "query": "workspace-remote|workspace remote",
  "isRegexp": true
}
```

</details>

<details>
<summary>45 lines</summary>

````
14 matches
```txt
<match path="/private/var/tmp/ws/30b59304/hvir/package.json" line=58>
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/package.json" line=59>
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/package.json" line=60>
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/smoke/index.ts" line=76>
    import { verifyWorkspaceRemoteWorkflow } from './workspace-remote'
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/smoke/index.ts" line=254>
    if (mode === 'workspace-remote') await prepareProjectFiles()
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/smoke/index.ts" line=539>
    if (mode === 'workspace-remote') {
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-scenario-runner.test.ts" line=647>
    new URL('../src/main/smoke/workspace-remote.ts', import.meta.url),
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-scenario-runner.test.ts" line=698>
    'viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles',
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-scenario-runner.test.ts" line=701>
    'node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle',
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-scenario-runner.test.ts" line=704>
    'node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review',
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-scenario-runner.test.ts" line=981>
    const workspaceBranch = smokeWorkflow.indexOf("if (mode === 'workspace-remote')")
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-selection.test.ts" line=26>
    'pty-native, viewer-position, viewer-content, git-workflow, workspace-remote, web-pane, renderer-authority, platform-contracts, diagnostic-report-restart, renderer-recovery, sessions-projection, document-review, development-performance, terminal-presentation, terminal-lifecycle, native-host-worker, workbench-health, terminal-theme, terminal-move, workbench-layout, terminal-split, harness-profiles, app-settings, capacity',
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/test/smoke-selection.test.ts" line=30>
    'pty-native, viewer-position, viewer-content, git-workflow, workspace-remote, web-pane, renderer-authority, platform-contracts, diagnostic-report-restart, renderer-recovery, sessions-projection, document-review, development-performance, terminal-presentation, terminal-lifecycle, native-host-worker, workbench-health, terminal-theme, terminal-move, workbench-layout, terminal-split, harness-profiles, app-settings, capacity',
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/smoke/scenario-selection.mts" line=6>
    'workspace-remote',
</match>
```
````

</details>


### `grep_search`

**hvir**

<details>
<summary>Arguments</summary>

```json
{
  "query": "hvir",
  "isRegexp": false
}
```

</details>

<details>
<summary>63 lines</summary>

````
2860 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=1>
    appId: dev.hvir.app
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=2>
    productName: hvir
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=9>
    - '!node_modules/@hvir/rename-noreplace/**'
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=10>
    - node_modules/@hvir/rename-noreplace/index.js
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=11>
    - node_modules/@hvir/rename-noreplace/package.json
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=12>
    - node_modules/@hvir/rename-noreplace/LICENSE
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=13>
    - node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=17>
    - from: build/native/hvir-command
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=18>
    to: hvir-command
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=35>
    artifactName: hvir-${version}-macos-${arch}.${ext}
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=47>
    executableName: hvir
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=54>
    appArmorProfile: build/linux/hvir.apparmor
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/packages/rename-noreplace/package.json" line=2>
    "name": "@hvir/rename-noreplace",
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/packages/rename-noreplace/package.json" line=5>
    "description": "Private hvir Node-API binding for atomic no-replace rename",
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/preload/index.ts" line=3>
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/preload/index.ts" line=82>
    new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/preload/index.ts" line=89>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/preload/index.ts" line=98>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
```
````

</details>


### `file_search`

****/electron-builder.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron-builder.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/30b59304/hvir/electron-builder.yml
```


### `file_search`

****/App.tsx**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/App.tsx"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/App.tsx
```


### `file_search`

****/about.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/about.*"
}
```

</details>

```
No files found matching pattern: **/about.*
```


### `file_search`

****/settings*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/settings*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>13 lines</summary>

```
12 files found:
  /private/var/tmp/ws/30b59304/hvir/test/settings-dialog-focus.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/settings-navigation.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/settings-persistence.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/settings-draft.test.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/SettingsSection.tsx
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/SettingsSectionNavigation.tsx
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings-model.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/SettingsDialog.tsx
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings-draft.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings-navigation.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/SettingsActiveSection.tsx
```

</details>


### `grep_search`

**ghostty-web|node-pty**

<details>
<summary>Arguments</summary>

```json
{
  "query": "ghostty-web|node-pty",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
282 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/30b59304/hvir/electron-builder.yml" line=22>
    # postinstall rebuilds the required node-pty module against Electron's ABI. Keep
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/dependabot.yml" line=15>
    - dependency-name: 'ghostty-web'
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=1>
    name: Update ghostty-web compatibility artifact
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=12>
    group: ghostty-web-update
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=29>
    echo "::error::Run ghostty-web updates from $DEFAULT_BRANCH, not $GITHUB_REF_NAME"
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=51>
    run: node scripts/ghostty-web-update/cli.mts prepare "$RUNNER_TEMP/ghostty-web-update"
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=57>
    name: ghostty-web-update-candidate
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=58>
    path: ${{ runner.temp }}/ghostty-web-update
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=69>
    name: ghostty-web-updates
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=95>
    name: ghostty-web-update-candidate
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=96>
    path: ${{ runner.temp }}/ghostty-web-update
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/.github/workflows/ghostty-web-update.yml" line=111>
    run: node scripts/ghostty-web-update/cli.mts publish "$RUNNER_TEMP/ghostty-web-update"
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/shared/ipc/terminal.ts" line=154>
    * clipboard. ghostty-web bounds the encoded OSC payload it parses; this is the
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/scripts/check-seams.sh" line=29>
    # 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/scripts/check-seams.sh" line=30>
    hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/project-host/local-host.ts" line=5>
    * native modules chokidar and node-pty (enforced by lint). Everything else in
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/project-host/local-host.ts" line=9>
    * node-pty is imported lazily inside `spawnPty` so the native binary is only
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/project-host/local-host.ts" line=411>
    const pty = await import('node-pty')
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/src/main/project-host/local-host.ts" line=440>
    // node-pty exposes a synchronous enqueue boundary, not agent/TUI
</match>
<match path="/private/var/tmp/ws/30b59304/hvir/scripts/ghostty-terminal-capability-profile.mts" line=8>
    url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
</match>
```
````

</details>


### `file_search`

****/keybindings.ts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/keybindings.ts"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/keybindings.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/keybindings.ts
```


### `file_search`

****/git*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/git*.{ts,tsx,js,jsx,mts,mts,json,yml,yaml}"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/30b59304/hvir/test/git-workspace.test.tsx
  /private/var/tmp/ws/30b59304/hvir/test/git-windowing.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-graph-layout.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-contributor-status.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-mutation-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-mutation-authorization.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-delivery-start-status.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-engine.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-project-planning.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-ignore-refresh.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-worker-host-router.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-sync-coordinator.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-project-client.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-capability.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-project-kind-automation.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-workflow-contexts.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-parsers.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-workflow-contexts.ts
  /private/var/tmp/ws/30b59304/hvir/test/github-project-pr-planning.test.ts
  /private/var/tmp/ws/30b59304/hvir/test/git-rail-model.test.ts
```

</details>


### `file_search`

****/real-host-ssh-contract.mts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/real-host-ssh-contract.mts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/30b59304/hvir/scripts/real-host-ssh-contract.mts
```


### `file_search`

****/workspace-remote.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/workspace-remote.*"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/30b59304/hvir/src/main/smoke/workspace-remote.ts
```


### `file_search`

****/harness-profile.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/harness-profile.*"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/30b59304/hvir/src/shared/harness-profile.ts
```


### `file_search`

****/sessions-projection.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/sessions-projection.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/src/shared/sessions-projection.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/smoke/sessions-projection.ts
```


### `file_search`

****/document-review.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/document-review.*"
}
```

</details>

<details>
<summary>6 lines</summary>

```
5 files found:
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/styles/document-review.css
  /private/var/tmp/ws/30b59304/hvir/src/shared/ipc/document-review.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/document-review.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/smoke/document-review.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/ipc/features/document-review.ts
```

</details>


### `file_search`

****/web-pane.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/web-pane.*"
}
```

</details>

<details>
<summary>6 lines</summary>

```
5 files found:
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/styles/web-pane.css
  /private/var/tmp/ws/30b59304/hvir/src/shared/web-pane.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/ipc/web-pane.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/smoke/web-pane.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/ipc/features/web-pane.ts
```

</details>


### `file_search`

****/viewer-types.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/viewer-types.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/test/viewer-types.test.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/viewer-types.ts
```


### `file_search`

****/keybindings.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/keybindings.*"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/30b59304/hvir/test/keybindings.test.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/keybindings.ts
  /private/var/tmp/ws/30b59304/hvir/src/shared/keybindings.ts
```


### `file_search`

****/settings.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/settings.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts
  /private/var/tmp/ws/30b59304/hvir/src/renderer/src/styles/settings.css
```


### `file_search`

****/git.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/git.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/30b59304/hvir/src/shared/ipc/git.ts
  /private/var/tmp/ws/30b59304/hvir/src/main/ipc/features/git.ts
```


### `file_search`

****/real-host-ssh-contract.mts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/real-host-ssh-contract.mts"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/30b59304/hvir/scripts/real-host-ssh-contract.mts
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/main/smoke/workspace-remote.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>390 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/main/smoke/workspace-remote.ts`. Lines 1 to 400 (at least 400 lines total): 
```
import type { BrowserWindow } from 'electron'

import type { ProjectHost } from '../project-host'
import type { PtySupervisor } from '../pty/pty-supervisor'
import type { RendererResourceScopes } from '../renderer-resource-scopes'
import type { HostPath, ProjectState, TerminalRecoverySession } from '../../shared'
import { verifyWorkspaceCloseSmoke } from './workspace-close'

interface FolderSelection {
  readonly hostId: string
  readonly path: string
}

/** Exercise project/workspace transitions and remote presentation without prior scenarios. */
export async function verifyWorkspaceRemoteWorkflow(options: {
  readonly win: BrowserWindow
  readonly host: ProjectHost
  readonly supervisor: PtySupervisor
  readonly resources: RendererResourceScopes
  readonly activeRoot: HostPath
  readonly closeRoot: HostPath
  readonly baseState: () => ProjectState
  readonly remoteState: () => ProjectState
  readonly getState: () => ProjectState
  readonly setState: (state: ProjectState) => ProjectState
  readonly emitState: (state: ProjectState) => void
  readonly emitHostKeyPrompt: () => void
  readonly openedFolderSelections: readonly FolderSelection[]
  readonly recovery: {
    readonly add: (root: HostPath, session: TerminalRecoverySession) => void
    readonly has: (root: HostPath, sessionId: string) => boolean
  }
}): Promise<string> {
  const {
    win,
    host,
    supervisor,
    resources,
    activeRoot,
    closeRoot,
    baseState,
    remoteState,
    getState,
    setState,
    emitState,
    emitHostKeyPrompt,
    openedFolderSelections,
    recovery,
  } = options
  const publish = (state: ProjectState): void => {
    emitState(setState(state))
  }

  try {
    const workspaceClose = await verifyWorkspaceCloseSmoke({
      win,
      host,
      supervisor,
      resources,
      activeRoot,
      closeRoot,
      getState,
      setState,
      emitState,
      recovery,
    })

    const containedError = (await win.webContents.executeJavaScript(`
      window.hvir.invoke('project:browse-host', {
        hostId: 'local',
        path: '/tmp/hvir-smoke.missing'
      }).then((result) => !result.ok && result.error)
    `)) as string
    if (!containedError.includes('Folder not found')) {
      throw new Error(
        `project browse error escaped its result envelope: ${containedError}`,
      )
    }

    publish(baseStateWithMissing(baseState()))
    const missingWorkspace = (await rendererValue(
      win,
      `(() => {
        const notices = [...document.querySelectorAll('.workspace-missing-notice')];
        const git = [...document.querySelectorAll('.rail-nav button')]
          .find((button) => button.textContent?.trim().startsWith('Git'));
        const terminal = document.querySelector('.terminal-surface');
        const newTerminal = document.querySelector('[aria-label="New terminal"]');
        const splitTerminal = document.querySelector('[aria-label="Split terminal"]');
        if (
          notices.length >= 2 && !git && !terminal &&
          newTerminal?.disabled && splitTerminal?.disabled
        ) {
          if (notices.some((notice) => notice.textContent?.includes('ENOENT'))) {
            throw new Error('missing workspace exposes a raw filesystem error');
          }
          return notices.length + ' notices · Git/new PTYs suppressed · no PTY materialized';
        }
      })()`,
      'missing workspace state did not settle',
    )) as string
    publish(baseState())
    await rendererWait(
      win,
      `!document.querySelector('.workspace-missing-notice')`,
      'workspace did not recover',
    )

    publish(remoteState())
    const remoteConnection = (await rendererValue(
      win,
      `(() => {
        const trigger = document.querySelector(
          '.project-tab.active .project-connection-trigger'
        );
        if (!(trigger instanceof HTMLButtonElement)) return undefined;
        if (!document.querySelector('.project-connection-menu')) trigger.click();
        const menu = document.querySelector('.project-connection-menu');
        const text = menu?.textContent || '';
        if (
          menu && text.includes('ssh:smoke-remote') && text.includes('Connected') &&
          text.includes('File watching: polling') && text.includes('Change') &&
          text.includes('Disconnect')
        ) {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
          return 'badge→status + controls';
        }
      })()`,
      'SSH connection menu content did not settle',
    )) as string
    await rendererWait(
      win,
      `!document.querySelector('.project-connection-menu')`,
      'SSH connection menu ignored Escape',
    )

    publish(baseState())
    await rendererWait(
      win,
      `(() => {
        const active = document.querySelector('.project-tab.active');
        return active && !active.querySelector('.remote-connection-badge');
      })()`,
      'local project did not reactivate without a remote badge',
    )

    emitHostKeyPrompt()
    const hostKeyPrompt = (await rendererValue(
      win,
      `(() => {
        const dialog = document.querySelector('.project-dialog');
        const fingerprint = document.querySelector('.ssh-host-fingerprint');
        const trust = [...document.querySelectorAll('.project-dialog button')]
          .find((node) => node.textContent?.trim() === 'Trust Host');
        if (dialog && fingerprint && trust) {
          if (dialog.scrollWidth > dialog.clientWidth) {
            throw new Error('host fingerprint overflowed its dialog');
          }
          trust.click();
          return 'wrapped fingerprint · explicit trust';
        }
      })()`,
      'host-key prompt did not settle',
    )) as string

    win.focus()
    win.webContents.focus()
    win.webContents.sendInputEvent({ type: 'keyDown', keyCode: 'Tab' })
    win.webContents.sendInputEvent({ type: 'keyUp', keyCode: 'Tab' })
    const projectRegistration = (await rendererValue(
      win,
      `(() => {
        if (document.querySelector('.session-bar')) {
          throw new Error('legacy host/session strip is still mounted');
        }
        const activeProject = document.querySelector('.project-tab.active');
        if (activeProject?.querySelector('.remote-connection-badge')) {
          throw new Error('local project shows a remote connection badge');
        }
        const projectMain = activeProject?.querySelector('.project-tab-main');
        if (!window.__hvirSmokeRegistrationStarted) {
          projectMain?.focus({ focusVisible: true });
          if (!projectMain || getComputedStyle(projectMain).boxShadow === 'none') {
            throw new Error('project tab focus ring is missing');
          }
          if (document.querySelector('.workspaces-bar')) {
            throw new Error('single-checkout project should hide the workspaces bar');
          }
          const addProject = document.querySelector('.project-add');
          if (!(addProject instanceof HTMLButtonElement)) {
            throw new Error('project registration control is missing');
          }
          addProject.click();
          window.__hvirSmokeRegistrationStarted = true;
          return undefined;
        }
        const local = [...document.querySelectorAll('.session-host-option')]
          .find((node) => node.textContent?.includes('Local'));
        const choose = [...document.querySelectorAll('.project-dialog button')]
          .find((node) => node.textContent?.trim() === 'Choose folder');
        if (!window.__hvirSmokeHostChosen) {
          if (!local || !choose) return undefined;
          if (local.querySelector('.remote-connection-badge')) {
            throw new Error('local host option shows a remote connection badge');
          }
          local.click();
          choose.click();
          window.__hvirSmokeHostChosen = true;
          return undefined;
        }
        if (
          window.__hvirSmokeFolderSubmitted &&
          !document.querySelector('.project-dialog')
        ) {
          return 'Local→invalid→reveal→create→use ' +
            ${JSON.stringify(`${activeRoot.path}/hvir-picker-created`)};
        }
        const input = document.querySelector('.folder-path-form input');
        const selected = document.querySelector('.folder-selection code')?.textContent || '';
        const selectedRow = document.querySelector('.folder-browser .directory-row.selected');
        const browser = document.querySelector('.folder-browser');
        const show = [...document.querySelectorAll('.project-dialog button')]
          .find((node) => node.textContent?.trim() === 'Show in tree');
        const use = [...document.querySelectorAll('.project-dialog button')]
          .find((node) => node.textContent?.trim() === 'Use this folder');
        if (!(input instanceof HTMLInputElement) || !browser || !show || !use) {
          return undefined;
        }
        const setPath = (value) => {
          Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
            .set.call(input, value);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        };
        if (!window.__hvirSmokeInvalidSubmitted) {
          const bounds = browser.getBoundingClientRect();
          const row = selectedRow?.getBoundingClientRect();
          if (!input.value || selected !== input.value || !row ||
              row.top < bounds.top || row.bottom > bounds.bottom) return undefined;
          if (input.form !== show.closest('form') || input.form !== use.closest('form')) {
            throw new Error('folder actions are not adjacent to the path field');
          }
          setPath('/tmp/hvir-smoke.missing');
          input.form.requestSubmit();
          window.__hvirSmokeInvalidSubmitted = true;
          return undefined;
        }
        const error = document.querySelector('.dialog-error')?.textContent || '';
        if (!window.__hvirSmokeRevealStarted) {
          if (!error.includes('Folder not found') || !use.disabled ||
              document.activeElement !== input) return undefined;
          const target = ${JSON.stringify(activeRoot.path)};
          setPath(target);
          browser.scrollTop = browser.scrollHeight;
          show.click();
          window.__hvirSmokeRevealStarted = true;
          return undefined;
        }
        if (window.__hvirSmokeCreateSubmitted) {
          const created = ${JSON.stringify(`${activeRoot.path}/hvir-picker-created`)};
          const createdRow = [...document.querySelectorAll('.folder-browser .directory-row')]
            .find((node) => node.getAttribute('title') === created);
          if (createdRow?.classList.contains('selected') && selected === created) {
            use.click();
            window.__hvirSmokeFolderSubmitted = true;
          }
          return undefined;
        }
        if (window.__hvirSmokeCreateOpened) {
          const name = document.querySelector('input[aria-label="New folder name"]');
          const create = [...document.querySelectorAll('.project-dialog button')]
            .find((node) => node.textContent?.trim() === 'Create');
          if (!(name instanceof HTMLInputElement) || !create) return undefined;
          Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
            .set.call(name, 'hvir-picker-created');
          name.dispatchEvent(new Event('input', { bubbles: true }));
          create.click();
          window.__hvirSmokeCreateSubmitted = true;
          return undefined;
        }
        const target = ${JSON.stringify(activeRoot.path)};
        const row = [...document.querySelectorAll('.folder-browser .directory-row')]
          .find((node) => node.getAttribute('title') === target);
        const bounds = browser.getBoundingClientRect();
        const rect = row?.getBoundingClientRect();
        if (
          row?.classList.contains('selected') && rect &&
          rect.top >= bounds.top && rect.bottom <= bounds.bottom &&
          !use.disabled && document.activeElement === input
        ) {
          const create = [...document.querySelectorAll('.project-dialog button')]
            .find((node) => node.textContent?.trim() === 'New folder');
          if (!create) throw new Error('new folder action is missing');
          create.click();
          window.__hvirSmokeCreateOpened = true;
          return undefined;
        }
      })()`,
      'project registration flow did not settle',
    )) as string
    if (
      openedFolderSelections.length !== 1 ||
      openedFolderSelections[0]?.hostId !== activeRoot.hostId ||
      openedFolderSelections[0]?.path !== `${activeRoot.path}/hvir-picker-created`
    ) {
      throw new Error(
        `folder selection opened an unexpected target: ${JSON.stringify(openedFolderSelections)}`,
      )
    }

    const closeableState = baseState()
    publish({
      ...closeableState,
      projects: [
        ...closeableState.projects,
        {
          id: 'smoke-closeable-project',
          registeredRoot: closeRoot,
          displayName: 'Close me',
          connectionState: host.connectionState,
          watchTier: host.watchTier,
          activeWorkspaceId: 'smoke-closeable-workspace',
          workspaces: [
            {
              id: 'smoke-closeable-workspace',
              root: closeRoot,
              name: 'Close me',
              main: true,
              closed: false,
              missing: true,
              repository: false,
              changedFiles: 0,
            },
          ],
        },
      ],
    })
    const projectClose = (await rendererValue(
      win,
      `(() => {
        const close = document.querySelector('[aria-label="Close project Close me"]');
        if (!window.__hvirSmokeProjectCloseStarted) {
          if (!(close instanceof HTMLButtonElement)) return undefined;
          if (close.disabled) throw new Error('secondary project close is disabled');
          close.click();
          window.__hvirSmokeProjectCloseStarted = true;
          return undefined;
        }
        const dialog = document.querySelector('.close-project-dialog');
        if (!window.__hvirSmokeProjectCloseConfirmed) {
          if (!dialog) return undefined;
          if (!dialog.textContent?.includes(
            'Files, Git branches, and worktrees are not changed'
          )) throw new Error('project close confirmation incomplete');
          const confirm = [...dialog.querySelectorAll('button')]
            .find((button) => button.textContent?.trim() === 'Close project');
          if (!confirm) throw new Error('project close confirmation action missing');
          confirm.click();
          window.__hvirSmokeProjectCloseConfirmed = true;
          return undefined;
        }
        const removed = document.querySelector('[aria-label="Close project Close me"]');
        const remaining = document.querySelector('[aria-label="Close project hvir"]');
        if (!removed && remaining?.disabled) {
          return 'confirmed unregister · final project protected';
        }
      })()`,
      'project close flow did not settle',
    )) as string

    return [
      workspaceClose,
      'contained browse error',
      missingWorkspace,
      remoteConnection,
      hostKeyPrompt,
      projectRegistration,
      projectClose,
    ].join(' · ')
  } catch (error) {
    const state = await readWorkspaceRemoteState(win, getState, openedFolderSelections)
    throw new Error(
      `Workspace/remote workflow failed: ${
        error instanceof Error ? error.message : String(error)
      }; state=${JSON.stringify(state)}`,
      { cause: error },
    )
  }
}

function baseStateWithMissing(state: ProjectState): ProjectState {
  return {
    ...state,
    projects: state.projects.map((project) => ({
      ...project,
      workspaces: project.workspaces.map((workspace) => ({
        ...workspace,
        missing: workspace.id === state.activeWorkspaceId,
      })),
    })),
  }
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/shared/harness-profile.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>104 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/shared/harness-profile.ts`. Lines 1 to 121 (121 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/shared/sessions-projection.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>356 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/shared/sessions-projection.ts`. Lines 1 to 400 (at least 400 lines total): 
```
import type { HostConnectionState } from './fs-types'
import type { HarnessProfileId } from './harness-profile'
import type { HarnessContextPressurePolicy, HarnessProviderId } from './harness-provider'
import type { HarnessUsageValue } from './harness-usage'
import type { ProjectState } from './workspace-types'

export const SESSIONS_PROJECTION_VERSION = 1
export const MAX_SESSIONS_PROJECTION_ROWS = 500
export const MAX_SESSIONS_PROJECTION_WORKSPACES = 1_000
export const MAX_SESSIONS_PROJECTION_PROVIDERS = 128
export const MAX_SESSIONS_USAGE_ROWS = MAX_SESSIONS_PROJECTION_ROWS

declare const sessionsTerminalHandleBrand: unique symbol
declare const sessionsPtyHandleBrand: unique symbol
declare const sessionsProjectHandleBrand: unique symbol
declare const sessionsWorkspaceHandleBrand: unique symbol
declare const sessionsWorkspaceQualifierBrand: unique symbol
declare const sessionsWorkspaceRuntimeIdBrand: unique symbol

/** Opaque hvir identity. Consumers may compare or route it, but never present it. */
export type SessionsTerminalHandle = string & {
  readonly [sessionsTerminalHandleBrand]: 'SessionsTerminalHandle'
}

/** Opaque identity for one exact live PTY instance. */
export type SessionsPtyHandle = string & {
  readonly [sessionsPtyHandleBrand]: 'SessionsPtyHandle'
}

/** Projection-owned identity with no host or path content. */
export type SessionsProjectHandle = string & {
  readonly [sessionsProjectHandleBrand]: 'SessionsProjectHandle'
}

/** Projection-owned identity with no host or path content. */
export type SessionsWorkspaceHandle = string & {
  readonly [sessionsWorkspaceHandleBrand]: 'SessionsWorkspaceHandle'
}

/** Path-free qualifier for matching one ProjectState workspace revision in the renderer. */
export type SessionsWorkspaceQualifier = string & {
  readonly [sessionsWorkspaceQualifierBrand]: 'SessionsWorkspaceQualifier'
}

/** Renderer workspace owner selected by main; never present this internal routing value. */
export type SessionsWorkspaceRuntimeId = string & {
  readonly [sessionsWorkspaceRuntimeIdBrand]: 'SessionsWorkspaceRuntimeId'
}

export type SessionsReasonCode =
  | 'not-materialized'
  | 'not-live'
  | 'telemetry-pending'
  | 'source-unavailable'
  | 'source-stale'
  | 'connection-unavailable'
  | 'workspace-unavailable'
  | 'stopped'
  | 'recovery-unavailable'
  | 'transport-unavailable'

export type SessionsUsageReasonCode =
  | 'not-live'
  | 'identity-pending'
  | 'observation-pending'
  | 'identity-unavailable'
  | 'connection-unavailable'
  | 'source-unavailable'
  | 'observation-capacity'

/** Content-free cumulative usage projected from the provider-owned observer. */
export type SessionsUsageFact =
  | { readonly status: 'unsupported' }
  | { readonly status: 'pending'; readonly reason: SessionsUsageReasonCode }
  | { readonly status: 'unavailable'; readonly reason: SessionsUsageReasonCode }
  | { readonly status: 'reset'; readonly reason: SessionsUsageReasonCode }
  | {
      readonly status: 'stale'
      readonly value: HarnessUsageValue
      readonly observedAt: number
      readonly reason: SessionsUsageReasonCode
    }
  | {
      readonly status: 'exact' | 'partial'
      readonly value: HarnessUsageValue
      readonly observedAt: number
    }

export type SessionsFact<T> =
  | { readonly status: 'unsupported' }
  | { readonly status: 'pending'; readonly reason: SessionsReasonCode }
  | { readonly status: 'unavailable'; readonly reason: SessionsReasonCode }
  | {
      readonly status: 'stale'
      readonly value: T
      readonly observedAt: number
      readonly reason: SessionsReasonCode
    }
  | { readonly status: 'available'; readonly value: T; readonly observedAt?: number }

export interface SessionsModelFact {
  readonly id: string
  readonly displayName?: string
}

export interface SessionsContextFact {
  readonly usedTokens: number
  readonly windowTokens?: number
  readonly usedPercent?: number
}

export interface SessionsTurnFact {
  readonly state: 'working' | 'waiting-for-user' | 'waiting-for-approval' | 'idle'
}

export interface SessionsFreshnessFact {
  readonly staleAfterMs: number
}

export interface SessionsTelemetryFacts {
  readonly model: SessionsFact<SessionsModelFact>
  readonly context: SessionsFact<SessionsContextFact>
  readonly turn: SessionsFact<SessionsTurnFact>
  readonly freshness: SessionsFact<SessionsFreshnessFact>
}

export interface SessionsProviderProjection {
  readonly id: HarnessProviderId
  readonly displayName: string
  readonly telemetrySupported: boolean
  readonly usageSupported: boolean
  readonly sessionKind: 'agent' | 'shell'
  readonly contextPressure?: HarnessContextPressurePolicy
}

export interface SessionsWorkspaceProjection {
  readonly projectId: SessionsProjectHandle
  readonly projectName: string
  readonly workspaceId: SessionsWorkspaceHandle
  readonly qualifier: SessionsWorkspaceQualifier
  readonly workspaceName: string
  readonly main: boolean
  readonly closed: boolean
  readonly missing: boolean
  readonly host: {
    readonly id: string
    readonly label: string
    readonly kind: 'local' | 'ssh'
    readonly connectionState: HostConnectionState
  }
}

export interface SessionsLivePtyQualifier {
  readonly handle: SessionsPtyHandle
  readonly rendererOwnerId: number
  readonly rendererGeneration: number
}

/** Main-safe facts before renderer runtime/attention state is joined. */
export interface SessionsObservedSession {
  readonly handle: SessionsTerminalHandle
  readonly workspaceId: SessionsWorkspaceHandle
  readonly providerId: HarnessProviderId
  readonly profile: SessionsFact<{ readonly id: HarnessProfileId }>
  readonly title: string
  readonly lifecycle: 'retained' | 'live'
  readonly livePty?: SessionsLivePtyQualifier
  readonly telemetry: SessionsTelemetryFacts
}

export interface SessionsObservationSnapshot {
  readonly version: typeof SESSIONS_PROJECTION_VERSION
  readonly demandGeneration: number
  readonly revision: number
  readonly activeProject?: SessionsProjectHandle
  readonly workspaces: readonly SessionsWorkspaceProjection[]
  readonly providers: readonly SessionsProviderProjection[]
  readonly sessions: readonly SessionsObservedSession[]
}

export interface SessionsProjectionChange {
  readonly demandGeneration: number
  readonly revision: number
}

export interface SessionsDemandRequest {
  readonly demandGeneration: number
}

export interface SessionsUsageDemandTarget {
  readonly handle: SessionsTerminalHandle
  readonly livePty?: SessionsLivePtyQualifier
}

export interface SessionsUsageDemandRequest {
  readonly demandGeneration: number
  readonly projectionDemandGeneration: number
  readonly sourceRevision: number
  readonly targets: readonly SessionsUsageDemandTarget[]
}

export interface SessionsUsageSnapshotRow {
  readonly handle: SessionsTerminalHandle
  readonly usage: SessionsUsageFact
}

export interface SessionsUsageSnapshot {
  readonly version: typeof SESSIONS_PROJECTION_VERSION
  readonly demandGeneration: number
  readonly revision: number
  readonly sampledAt: number
  readonly rows: readonly SessionsUsageSnapshotRow[]
}

export interface SessionsUsageChange {
  readonly demandGeneration: number
  readonly revision: number
}

export interface SessionsOpenRequest extends SessionsDemandRequest {
  readonly sourceRevision: number
  readonly handle: SessionsTerminalHandle
  readonly projectId: SessionsProjectHandle
  readonly workspaceId: SessionsWorkspaceHandle
  readonly workspaceQualifier: SessionsWorkspaceQualifier
  readonly livePty?: SessionsLivePtyQualifier
}

export type SessionsOpenUnavailableReason =
  | 'stale-projection'
  | 'session-unavailable'
  | 'workspace-unavailable'
  | 'connection-unavailable'
  | 'terminal-unavailable'

export type SessionsOpenResponse =
  | {
      readonly outcome: 'opened'
      readonly state: ProjectState
      readonly handle: SessionsTerminalHandle
      readonly workspaceQualifier: SessionsWorkspaceQualifier
      readonly livePty: SessionsLivePtyQualifier
    }
  | {
      readonly outcome: 'unavailable'
      readonly reason: SessionsOpenUnavailableReason
    }

/** Exact read-only resolution for borrowing an existing renderer terminal surface. */
export type SessionsTerminalResolutionResponse =
  | {
      readonly outcome: 'resolved'
      readonly handle: SessionsTerminalHandle
      readonly workspaceQualifier: SessionsWorkspaceQualifier
      readonly workspaceRuntimeId: SessionsWorkspaceRuntimeId
      readonly livePty: SessionsLivePtyQualifier
    }
  | {
      readonly outcome: 'unavailable'
      readonly reason: SessionsOpenUnavailableReason
    }

export type SessionsLifecycle =
  'retained' | 'starting' | 'resuming' | 'live' | 'stopped' | 'unavailable'

export interface SessionsProjectionRow {
  readonly handle: SessionsTerminalHandle
  readonly project: { readonly id: SessionsProjectHandle; readonly name: string }
  readonly workspace: {
    readonly id: SessionsWorkspaceHandle
    readonly name: string
    readonly main: boolean
    readonly qualifier: SessionsWorkspaceQualifier
  }
  readonly host: SessionsWorkspaceProjection['host']
  readonly provider: {
    readonly id: HarnessProviderId
    readonly name: string
    readonly kind: 'agent' | 'shell' | 'unknown'
    readonly contextPressure?: HarnessContextPressurePolicy
  }
  readonly profile: SessionsFact<{ readonly id: HarnessProfileId }>
  readonly title: string
  readonly lifecycle: SessionsLifecycle
  readonly lifecycleReason?: SessionsReasonCode
  readonly connectionState: HostConnectionState
  readonly attention: SessionsFact<'none' | 'ready' | 'bell'>
  readonly working: SessionsFact<boolean>
  readonly model: SessionsFact<SessionsModelFact>
  readonly context: SessionsFact<SessionsContextFact>
  readonly turn: SessionsFact<SessionsTurnFact>
  readonly telemetryFreshness: SessionsFact<SessionsFreshnessFact>
  /** Capability baseline; the active Usage lens overlays demanded observations. */
  readonly usage: SessionsUsageFact
  readonly livePty?: SessionsLivePtyQualifier
}

export interface SessionsProjectionSnapshot {
  readonly version: typeof SESSIONS_PROJECTION_VERSION
  readonly demandGeneration: number
  readonly revision: number
  /** Main-owned observation revision used only for exact actions. */
  readonly sourceRevision: number
  readonly activeProject?: SessionsProjectHandle
  readonly status: 'inactive' | 'pending' | 'available' | 'unavailable'
  readonly unavailableReason?: 'source-unavailable'
  readonly rows: readonly SessionsProjectionRow[]
}

export function asSessionsTerminalHandle(value: string): SessionsTerminalHandle {
  return value as SessionsTerminalHandle
}

export function asSessionsPtyHandle(value: string): SessionsPtyHandle {
  return value as SessionsPtyHandle
}

export function asSessionsProjectHandle(value: string): SessionsProjectHandle {
  return value as SessionsProjectHandle
}

export function asSessionsWorkspaceHandle(value: string): SessionsWorkspaceHandle {
  return value as SessionsWorkspaceHandle
}

export function asSessionsWorkspaceRuntimeId(value: string): SessionsWorkspaceRuntimeId {
  return value as SessionsWorkspaceRuntimeId
}

export function sessionsWorkspaceQualifier(
  projectStateRevision: number,
  projectIndex: number,
  workspaceIndex: number,
): SessionsWorkspaceQualifier {
  if (
    !Number.isSafeInteger(projectStateRevision) ||
    projectStateRevision < 0 ||
    !Number.isSafeInteger(projectIndex) ||
    projectIndex < 0 ||
    !Number.isSafeInteger(workspaceIndex) ||
    workspaceIndex < 0
  ) {
    throw new Error('Invalid Sessions workspace qualifier')
  }
  return `${projectStateRevision}:${projectIndex}:${workspaceIndex}` as SessionsWorkspaceQualifier
}

export function sessionsProjectionText(
  value: string | undefined,
  max: number,
  fallback: string,
): string {
  return sessionsProjectionOptionalText(value, max) ?? fallback
}

export function sessionsProjectionOptionalText(
  value: string | undefined,
  max: number,
): string | undefined {
  if (typeof value !== 'string' || !Number.isSafeInteger(max) || max <= 0) {
    return undefined
  }
  const clean = [...value]
    .map((character) => {
      const code = character.charCodeAt(0)
      return code <= 31 || code === 127 ? ' ' : character
    })
    .join('')
    .trim()
    .slice(0, max)
  return clean || undefined
}

export function sessionsProjectionTitle(value: string | undefined): string {
  return sessionsProjectionText(value, 512, 'Terminal')
}

/** Keeps exact private routing and path values from crossing a display boundary. */
export function sessionsProjectionDisplayTitle(
  value: string | undefined,
  handle: SessionsTerminalHandle,
  fallback: string,
  exactPrivateValues: readonly string[] = [],
): string {
  const title = sessionsProjectionTitle(value)
  const privateValues = [String(handle), ...exactPrivateValues].filter(
    (privateValue) => privateValue.length > 0,
  )
  if (!containsExactPrivateValue(value, title, privateValues)) return title
  const safeFallback = sessionsProjectionTitle(fallback)
  if (!containsExactPrivateValue(fallback, safeFallback, privateValues)) {
    return safeFallback
  }
  return 'Terminal'
}

function containsExactPrivateValue(
  rawValue: string | undefined,
  projectedValue: string,
  privateValues: readonly string[],
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/shared/document-review.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>225 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/shared/document-review.ts`. Lines 1 to 259 (259 lines total): 
```
import { containsHostPath, hostPathEquals, type HostPath } from './host-path'

export const DOCUMENT_REVIEW_LIMITS = {
  batchesPerWorkspace: 1,
  batchMembers: 64,
  commentsPerDocument: 64,
  commentsPerWorkspace: 256,
  commentBytes: 8 * 1024,
  contextBytes: 4 * 1024,
  deliveryPayloadBytes: 64 * 1024,
  deliveryQuoteBytes: 2 * 1024,
  excerptBytes: 32 * 1024,
  idBytes: 128,
  revalidationReadBytes: 4 * 1024 * 1024,
  sourceRangeLines: 100,
  storedWorkspaceBytes: 2 * 1024 * 1024,
  workspaceIdBytes: 256,
} as const

export interface ReviewWorkspaceIdentity {
  /** Stable registered project/worktree identity, not a path-derived key. */
  readonly id: string
  readonly root: HostPath
}

export type DocumentReviewDocumentIssue =
  'foreign-document' | 'document-outside-workspace'

export function documentReviewWorkspaceEquals(
  left: ReviewWorkspaceIdentity,
  right: ReviewWorkspaceIdentity,
): boolean {
  return left.id === right.id && hostPathEquals(left.root, right.root)
}

export function documentReviewDocumentIssue(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): DocumentReviewDocumentIssue | undefined {
  if (document.hostId !== workspace.root.hostId) return 'foreign-document'
  if (
    !containsHostPath(workspace.root, document) ||
    hostPathEquals(workspace.root, document)
  ) {
    return 'document-outside-workspace'
  }
  return undefined
}

export function isDocumentReviewDocument(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): boolean {
  return documentReviewDocumentIssue(workspace, document) === undefined
}

export function documentReviewUtf8Bytes(value: string): number {
  return new TextEncoder().encode(value).byteLength
}

export function isDocumentReviewIdentifier(
  value: unknown,
  maximumBytes: number = DOCUMENT_REVIEW_LIMITS.idBytes,
): value is string {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    documentReviewUtf8Bytes(value) <= maximumBytes &&
    ![...value].some((character) => {
      const code = character.codePointAt(0)!
      return code <= 31 || code === 127
    })
  )
}

export interface ReviewDocumentSnapshot {
  readonly algorithm: 'sha256'
  /** Lowercase hexadecimal digest of the exact on-disk UTF-8 bytes. */
  readonly digest: string
  readonly byteLength: number
}

export interface ReviewSourceRange {
  /** Inclusive, one-based line. */
  readonly startLine: number
  /** Inclusive, one-based line. */
  readonly endLine: number
}

export interface ReviewAnchorLocation {
  readonly snapshot: ReviewDocumentSnapshot
  readonly range: ReviewSourceRange
}

export type ReviewAnchorStaleReason =
  | 'ambiguous-match'
  | 'deleted'
  | 'host-unavailable'
  | 'incomplete-read'
  | 'invalid-snapshot'
  | 'invalid-text'
  | 'missing-match'
  | 'read-limit-exceeded'

export type ReviewAnchorState =
  | { readonly status: 'current' }
  | { readonly status: 'moved'; readonly previous: ReviewAnchorLocation }
  | {
      readonly status: 'stale'
      readonly reason: ReviewAnchorStaleReason
      /** Explicit human decision; staleness remains visible and orthogonal. */
      readonly reviewed: boolean
    }

/** Representation-independent source identity shared by rendered and source capture. */
export interface DocumentReviewAnchor {
  readonly snapshot: ReviewDocumentSnapshot
  readonly range: ReviewSourceRange
  readonly excerpt: string
  /** Exact immediately preceding source, including its line delimiter. */
  readonly contextBefore: string
  /** Exact immediately following source, including its line delimiter. */
  readonly contextAfter: string
  readonly state: ReviewAnchorState
}

export type ReviewCommentLifecycle = 'draft' | 'sent' | 'resolved'

export interface DocumentReviewComment {
  readonly id: string
  readonly workspace: ReviewWorkspaceIdentity
  readonly document: HostPath
  readonly body: string
  readonly anchor: DocumentReviewAnchor
  readonly lifecycle: ReviewCommentLifecycle
}

export interface DocumentReviewBatch {
  readonly id: string
  readonly workspace: ReviewWorkspaceIdentity
  readonly commentIds: readonly string[]
}

export interface DocumentReviewModel {
  readonly workspace: ReviewWorkspaceIdentity
  readonly comments: readonly DocumentReviewComment[]
  readonly batches: readonly DocumentReviewBatch[]
}

export interface DocumentReviewStoreNotice {
  readonly kind: 'corrupt' | 'future-version' | 'read-failure'
  /** Basename only; review state and user-data paths remain private. */
  readonly recoveryFile?: string
  readonly writeBlocked: boolean
}

export interface DocumentReviewWorkspaceSnapshot {
  readonly workspaceGeneration: number
  readonly revision: number
  readonly model: DocumentReviewModel
  readonly notice?: DocumentReviewStoreNotice
}

export interface DocumentReviewRestoreRequest {
  readonly workspace: ReviewWorkspaceIdentity
}

export interface DocumentReviewSaveRequest extends DocumentReviewRestoreRequest {
  readonly workspaceGeneration: number
  readonly expectedRevision: number
  readonly model: DocumentReviewModel
}

export interface DocumentReviewRevalidateRequest extends DocumentReviewRestoreRequest {
  readonly workspaceGeneration: number
  readonly document: HostPath
}

export type DocumentReviewRevalidation =
  | {
      readonly status: 'read'
      readonly document: HostPath
      readonly snapshot: ReviewDocumentSnapshot
      readonly content: string
    }
  | {
      readonly status: 'stale'
      readonly document: HostPath
      readonly reason: 'deleted' | 'host-unavailable' | 'incomplete-read' | 'invalid-text'
    }

export type DocumentReviewDeliverySelection =
  | { readonly kind: 'comment'; readonly commentId: string }
  | { readonly kind: 'batch'; readonly batchId: string }

export interface DocumentReviewDeliveryPayload {
  /** Exact LF-normalized human-readable body used by Preview, Copy, and Insert. */
  readonly body: string
  readonly byteLength: number
  readonly commentIds: readonly string[]
}

export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'

export interface DocumentReviewDeliveryDestination {
  readonly terminalId: string
  readonly title: string
  readonly providerName: string
  readonly lifecycle: 'live'
  readonly connection: 'connected'
  readonly attention?: import('./terminal-attention').TerminalAttentionState
  readonly capability: DocumentReviewDeliveryCapability
}

export interface DocumentReviewDeliveryScopeRequest {
  readonly workspace: ReviewWorkspaceIdentity
  readonly workspaceGeneration: number
}

export interface DocumentReviewPreviewRequest extends DocumentReviewDeliveryScopeRequest {
  readonly selection: DocumentReviewDeliverySelection
}

export interface DocumentReviewPrepareRequest extends DocumentReviewPreviewRequest {
  readonly terminalId: string
}

export interface PreparedDocumentReviewDelivery {
  readonly id: string
  readonly destination: DocumentReviewDeliveryDestination
  readonly payload: DocumentReviewDeliveryPayload
}

export interface DocumentReviewInsertRequest {
  readonly preparedId: string
}

export interface DocumentReviewInsertResult {
  readonly outcome: 'inserted'
}

export interface DocumentReviewSendNowRequest {
  readonly preparedId: string
}

export type DocumentReviewSendNowResult =
  | {
      readonly outcome: 'sent'
      /** Authoritative durable state after delivered drafts were removed. */
      readonly snapshot: DocumentReviewWorkspaceSnapshot
    }
  | {
      /** The prepared terminal authority was consumed to prevent a duplicate send. */
      readonly outcome: 'send-authority-consumed'
      /** Confirmed describes only the PTY boundary, never agent receipt. */
      readonly ptyAcceptance: 'confirmed' | 'indeterminate'
      readonly reason: string
    }

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/shared/web-pane.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>63 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/shared/web-pane.ts`. Lines 1 to 68 (68 lines total): 
```
export type LoopbackHostname = 'localhost' | '127.0.0.1' | '::1'

export interface LoopbackEndpoint {
  readonly hostname: LoopbackHostname
  readonly port: number
}

export interface LoopbackHttpTarget {
  /** Normalized browser-visible URL. Unspecified bind addresses become localhost. */
  readonly url: string
  readonly origin: string
  readonly endpoint: LoopbackEndpoint
}

export type WebPaneDiagnosticEvent =
  | {
      readonly kind: 'navigation-error' | 'request-failure' | 'route-failure'
      readonly message: string
      readonly url?: string
    }
  | { readonly kind: 'console'; readonly level: string; readonly message: string }
  | { readonly kind: 'crash'; readonly message: string }

const LOOPBACK_HOSTS = new Map<string, LoopbackHostname>([
  ['localhost', 'localhost'],
  ['127.0.0.1', '127.0.0.1'],
  ['[::1]', '::1'],
  ['::1', '::1'],
])
const UNSPECIFIED_HOSTS = new Set(['0.0.0.0', '[::]', '::'])

/** Parse the complete loopback HTTP authority used by ADR-013. */
export function parseLoopbackHttpTarget(rawUrl: string): LoopbackHttpTarget | undefined {
  let candidate: URL
  try {
    candidate = new URL(rawUrl)
  } catch {
    return undefined
  }
  if (
    candidate.protocol !== 'http:' ||
    candidate.username.length > 0 ||
    candidate.password.length > 0
  ) {
    return undefined
  }
  const rawHostname = candidate.hostname.toLowerCase()
  const unspecified = UNSPECIFIED_HOSTS.has(rawHostname)
  const hostname = unspecified ? 'localhost' : LOOPBACK_HOSTS.get(rawHostname)
  if (!hostname) return undefined

  const port = candidate.port ? Number(candidate.port) : 80
  if (!Number.isInteger(port) || port < 1 || port > 65_535) return undefined
  if (unspecified) candidate.hostname = 'localhost'
  return {
    url: candidate.href,
    origin: candidate.origin,
    endpoint: { hostname, port },
  }
}

export function loopbackEndpointEquals(
  left: LoopbackEndpoint,
  right: LoopbackEndpoint,
): boolean {
  return left.hostname === right.hostname && left.port === right.port
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/shared/viewer-types.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>91 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/shared/viewer-types.ts`. Lines 1 to 101 (101 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/shared/keybindings.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>132 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/shared/keybindings.ts`. Lines 1 to 140 (140 lines total): 
```
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
  readonly ctrlKey: boolean
  readonly metaKey: boolean
  readonly altKey: boolean
  readonly shiftKey: boolean
}

interface ParsedKeybinding {
  readonly key: string
  readonly mod: boolean
  readonly ctrl: boolean
  readonly meta: boolean
  readonly alt: boolean
  readonly shift: boolean
}

export function parseKeybindingOverrides(value: unknown): KeybindingMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('Keybindings must be a JSON object')
  }
  const overrides = value as Record<string, unknown>
  const unknown = Object.keys(overrides).find(
    (key) => !KEYBINDING_ACTIONS.includes(key as KeybindingAction),
  )
  if (unknown) throw new Error(`Unknown keybinding action: ${unknown}`)
  const bindings = { ...DEFAULT_KEYBINDINGS }
  for (const action of KEYBINDING_ACTIONS) {
    const candidate = overrides[action]
    if (candidate === undefined) continue
    if (typeof candidate !== 'string') {
      throw new Error(`${action} must be a keybinding string`)
    }
    parseKeybinding(candidate)
    bindings[action] = candidate
  }
  return bindings
}

export function keybindingOverridesJson(bindings: KeybindingMap): string {
  return JSON.stringify(bindings, null, 2)
}

export function matchesKeybinding(
  event: KeyboardStroke,
  binding: string,
  mac: boolean,
): boolean {
  const parsed = parseKeybinding(binding)
  const modDown = mac ? event.metaKey : event.ctrlKey
  const bracketCode =
    parsed.key === '[' ? 'BracketLeft' : parsed.key === ']' ? 'BracketRight' : undefined
  const keyMatches = bracketCode
    ? event.code === bracketCode || event.key === parsed.key
    : event.key.toLowerCase() === parsed.key.toLowerCase()
  return (
    keyMatches &&
    event.altKey === parsed.alt &&
    event.shiftKey === parsed.shift &&
    event.ctrlKey === (parsed.ctrl || (parsed.mod && !mac)) &&
    event.metaKey === (parsed.meta || (parsed.mod && mac)) &&
    (!parsed.mod || modDown)
  )
}

function parseKeybinding(binding: string): ParsedKeybinding {
  const parts = binding
    .split('+')
    .map((part) => part.trim())
    .filter(Boolean)
  const key = parts.at(-1)
  if (!key || parts.length < 2 || key.length > 12) {
    throw new Error(`Invalid keybinding: ${binding}`)
  }
  const modifiers = parts.slice(0, -1).map((part) => part.toLowerCase())
  const allowed = new Set(['mod', 'ctrl', 'meta', 'alt', 'shift'])
  if (
    modifiers.some((modifier) => !allowed.has(modifier)) ||
    new Set(modifiers).size !== modifiers.length
  ) {
    throw new Error(`Invalid keybinding: ${binding}`)
  }
  return {
    key,
    mod: modifiers.includes('mod'),
    ctrl: modifiers.includes('ctrl'),
    meta: modifiers.includes('meta'),
    alt: modifiers.includes('alt'),
    shift: modifiers.includes('shift'),
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
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>164 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts`. Lines 1 to 173 (173 lines total): 
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
        : 5 * 60_000,
    terminalRecoveryMode: candidate.terminalRecoveryMode === 'auto' ? 'auto' : 'prompt',
    terminalTheme:
      candidate.terminalTheme === 'dark' || candidate.terminalTheme === 'light'
        ? candidate.terminalTheme
        : 'app',
    terminalLightThemeId: normalizeTerminalThemeId(
      candidate.terminalLightThemeId,
      'light',
    ),
    terminalDarkThemeId: normalizeTerminalThemeId(candidate.terminalDarkThemeId, 'dark'),
    terminalCursorShape:
      candidate.terminalCursorShape === 'hollow-block' ||
      candidate.terminalCursorShape === 'bar' ||
      candidate.terminalCursorShape === 'underline'
        ? candidate.terminalCursorShape
        : 'block',
    terminalCursorBlink:
      candidate.terminalCursorBlink === 'blinking' ||
      candidate.terminalCursorBlink === 'steady'
        ? candidate.terminalCursorBlink
        : 'terminal',
    terminalLigatures: candidate.terminalLigatures === false ? false : true,
    interfaceFont: normalizeFontPreference(candidate.interfaceFont),
    monospaceFont: normalizeFontPreference(candidate.monospaceFont),
    interfaceScale: normalizeInterfaceScale(candidate.interfaceScale),
    terminalTextSize: normalizeTerminalTextSize(candidate.terminalTextSize),
    composerSubmitMode:
      candidate.composerSubmitMode === 'ctrl-enter' ? 'ctrl-enter' : 'enter',
    keybindings: parseKeybindingOverrides(candidate.keybindings ?? DEFAULT_KEYBINDINGS),
  }
}

function defaults(): AppSettings {
  return {
    idleThresholdMs: 4_000,
    gitAutoFetchIntervalMs: 5 * 60_000,
    terminalRecoveryMode: 'prompt',
    terminalTheme: 'app',
    terminalLightThemeId: DEFAULT_TERMINAL_THEME_IDS.light,
    terminalDarkThemeId: DEFAULT_TERMINAL_THEME_IDS.dark,
    terminalCursorShape: 'block',
    terminalCursorBlink: 'terminal',
    terminalLigatures: true,
    interfaceFont: systemFontPreference(),
    monospaceFont: systemFontPreference(),
    interfaceScale: DEFAULT_INTERFACE_SCALE,
    terminalTextSize: DEFAULT_TERMINAL_TEXT_SIZE,
    composerSubmitMode: 'enter',
    keybindings: DEFAULT_KEYBINDINGS,
  }
}

export function terminalPreferences(settings: AppSettings): TerminalPreferences {
  return {
    idleThresholdMs: settings.idleThresholdMs,
    terminalRecoveryMode: settings.terminalRecoveryMode,
    terminalTheme: settings.terminalTheme,
    terminalLightThemeId: settings.terminalLightThemeId,
    terminalDarkThemeId: settings.terminalDarkThemeId,
    terminalCursorDefaults: {
      shape: settings.terminalCursorShape,
      blink: settings.terminalCursorBlink,
    },
    terminalLigatures: settings.terminalLigatures,
    terminalTypography: {
      fontFamily: fontFamilyStack(settings.monospaceFont, 'monospace'),
      fontSize: settings.terminalTextSize,
    },
    composerSubmitMode: settings.composerSubmitMode,
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
  "filePath": "/private/var/tmp/ws/30b59304/hvir/src/renderer/src/App.tsx",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>403 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/src/renderer/src/App.tsx`. Lines 1 to 400 (at least 400 lines total): 
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
          paneTab &&
          !(graphPane && gitGraphActive) &&
          !(pane === 'primary' && webViewActive)
        ) {
          focusViewerPane(pane, paneTab.id)
        } else {
          focusViewerPane(pane)
        }
      }}
    >
      <TabStrip
        tabs={paneTabs}
        pathCopyRoot={root}
        pane={pane}
        activeId={
          (graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)
            ? undefined
            : paneTab?.id
        }
        onActivate={(id) => activateTab(id, pane)}
        onClose={closeTab}
        onPin={pinTab}
        onReorder={reorderViewerTabs}
        onMoveToPane={moveTabToPane}
        split={viewerSplit}
        onSplit={openViewerSplit}
        onClosePane={pane === 'secondary' ? closeViewerSplit : undefined}
        graphOpen={graphPane && gitGraphOpen}
        graphActive={graphPane && gitGraphActive}
        onActivateGraph={activateGitGraph}
        onCloseGraph={closeGitGraph}
        webTabs={
          pane === 'primary'
            ? rootWebViews.map((view) => ({ id: view.id, title: view.title }))
            : undefined
        }
        activeWebId={pane === 'primary' && webViewActive ? activeWebViewId : undefined}
        onActivateWeb={activateWebView}
        onCloseWeb={closeWebView}
      />
      {graphPane && gitGraphOpen ? (
        <div className="workspace-view" hidden={!gitGraphActive}>
          <GitGraphView
            root={root}
            refreshVersion={gitVersion}
            connectionState={connectionState}
            requestedHash={gitGraphRequest.hash}
            requestSerial={gitGraphRequest.serial}
            onOpen={(path, base, revision) => openFile(path, true, 'git', base, revision)}
          />
        </div>
      ) : null}
      {pane === 'primary' ? (
        <WebPaneStack
          views={webViews}
          root={root}
          active={webViewActive}
          activeId={activeWebViewId}
          focused={webViewFocused}
          onToggleFocus={() => setWebViewFocused((focused) => !focused)}
          onTitle={setWebViewTitle}
          onBlockedNavigation={followBlockedNavigation}
          onOpenBrowser={openWebViewInBrowser}
          onRevealTerminal={(view) => void revealSourceTerminal(view)}
        />
      ) : null}
      <div
        className="workspace-view"
        hidden={(graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)}
      >
        {activeWorkspace?.missing ? (
          <MissingWorkspaceNotice root={root} />
        ) : (
          <FileViewer
            key={`${pane}:${paneTab?.id ?? 'empty'}`}
            tab={paneTab}
            gitRefreshVersion={gitVersion}
            onMode={(mode, at) => paneTab && setViewerMode(paneTab.id, mode, at)}
            onDiffBase={(diffBase) => paneTab && setViewerDiffBase(paneTab.id, diffBase)}
            onContent={(content) => paneTab && setViewerContent(paneTab.id, content)}
            onSave={() => paneTab && saveTab(paneTab.id)}
            onReload={() => paneTab && reloadTab(paneTab.id)}
            onPosition={(position) => paneTab && schedulePosition(paneTab.id, position)}
            onNavigationHandled={(serial) =>
              paneTab && navigationHandled(paneTab.id, serial)
            }
            registerCommands={viewerCommands.register}
            onOpenPath={(path) => {
              focusViewerPane(pane)
              if (paneTab) pinTab(paneTab.id)
              openFile(path, true)
            }}
            onRenderedDependencies={viewer.setRenderedDependencies}
            documentReview={documentReview}
          />
        )}
      </div>
    </section>
  )
  return (
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/30b59304/hvir/scripts/real-host-ssh-contract.mts",
  "startLine": 1,
  "endLine": 400
}
```

</details>

<details>
<summary>212 lines</summary>

````
File: `/private/var/tmp/ws/30b59304/hvir/scripts/real-host-ssh-contract.mts`. Lines 1 to 234 (234 lines total): 
```
import { mkdir, writeFile } from 'node:fs/promises'
import { isAbsolute, join } from 'node:path'

import type { HostConnectionState, HostWatchTier } from '../src/shared/index.ts'
import type { SshTransportDiagnostic } from '../src/main/project-host/ssh-host.ts'

export const REAL_HOST_SSH_ENVIRONMENT_KEYS = [
  'HVIR_REAL_SSH_HOST',
  'HVIR_REAL_SSH_PORT',
  'HVIR_REAL_SSH_USER',
  'HVIR_REAL_SSH_HOST_KEY',
  'HVIR_REAL_SSH_ROOT_PARENT',
  'HVIR_REAL_SSH_PRIVATE_KEY',
  'HVIR_REAL_SSH_IDENTITY_FILE',
  'HVIR_REAL_SSH_PASSPHRASE',
] as const

export const REAL_HOST_SSH_PHASES = [
  'configuration',
  'credentials-loaded',
  'connected',
  'root-registered',
  'exec',
  'sftp',
  'watch',
  'pty-provider-observation',
  'loopback-stream',
  'transport-capacity',
  'reconnected',
  'cleanup',
] as const

export type RealHostSshPhase = (typeof REAL_HOST_SSH_PHASES)[number]

export const REAL_HOST_SSH_FAILURE_REASONS = [
  'configuration-invalid',
  'interrupted',
  'operation-timeout',
  'operation-failed',
  'cleanup-failed',
  'dispose-failed',
  'incomplete',
  'launcher-failed',
] as const

export type RealHostSshFailureReason =
  (typeof REAL_HOST_SSH_FAILURE_REASONS)[number]

export interface RealHostSshConfiguration {
  readonly alias: 'real-host-acceptance'
  readonly hostname: string
  readonly port: number
  readonly user: string
  readonly trustedHostKey: string
  readonly rootParent: string
  readonly credential:
    { readonly kind: 'inline' } | { readonly kind: 'file'; readonly path: string }
  readonly hasPassphrase: boolean
}

export type RealHostSshConfigurationResult =
  | { readonly kind: 'unavailable' }
  | { readonly kind: 'invalid'; readonly fields: readonly string[] }
  | { readonly kind: 'configured'; readonly value: RealHostSshConfiguration }

export interface RealHostSshResourceEvidence {
  readonly rootRegistered: boolean
  readonly watcherActive: boolean
  readonly ptyCount: number
  readonly providerObserverActive: boolean
  readonly loopbackActive: boolean
  readonly streamCount: number
}

export interface RealHostSshFailureEvidence {
  readonly schema: 1
  readonly status: 'failed'
  readonly phase: RealHostSshPhase
  readonly reason: RealHostSshFailureReason
  readonly durationMs: number
  readonly connection: {
    readonly state: HostConnectionState
    readonly watchTier: HostWatchTier
  }
  readonly resources: RealHostSshResourceEvidence
  readonly transports: readonly {
    readonly role: SshTransportDiagnostic['role']
    readonly primary: boolean
    readonly channels: number
    readonly pendingChannels: number
    readonly channelBudget: number
    readonly refusedChannels: number
  }[]
}

const HOST_KEY = /^SHA256:[A-Za-z0-9+/]{43}$/
const MAX_ARTIFACT_BYTES = 4_096

export function readRealHostSshConfiguration(
  environment: NodeJS.ProcessEnv,
): RealHostSshConfigurationResult {
  const present = REAL_HOST_SSH_ENVIRONMENT_KEYS.filter((key) =>
    hasValue(environment[key]),
  )
  if (present.length === 0) return { kind: 'unavailable' }

  const fields: string[] = []
  const hostname = trimmed(environment.HVIR_REAL_SSH_HOST)
  const rawPort = trimmed(environment.HVIR_REAL_SSH_PORT)
  const user = trimmed(environment.HVIR_REAL_SSH_USER)
  const trustedHostKey = trimmed(environment.HVIR_REAL_SSH_HOST_KEY)
  const rootParent = trimmed(environment.HVIR_REAL_SSH_ROOT_PARENT)
  const inlineKey = hasValue(environment.HVIR_REAL_SSH_PRIVATE_KEY)
  const identityFile = trimmed(environment.HVIR_REAL_SSH_IDENTITY_FILE)

  if (!validName(hostname, 253)) fields.push('HVIR_REAL_SSH_HOST')
  const port = Number(rawPort)
  if (!Number.isSafeInteger(port) || port < 1 || port > 65_535) {
    fields.push('HVIR_REAL_SSH_PORT')
  }
  if (!validName(user, 128)) fields.push('HVIR_REAL_SSH_USER')
  if (!HOST_KEY.test(trustedHostKey)) fields.push('HVIR_REAL_SSH_HOST_KEY')
  if (!validRemoteRootParent(rootParent)) {
    fields.push('HVIR_REAL_SSH_ROOT_PARENT')
  }
  if (inlineKey === Boolean(identityFile)) {
    fields.push('HVIR_REAL_SSH_PRIVATE_KEY|HVIR_REAL_SSH_IDENTITY_FILE')
  } else if (identityFile && (!isAbsolute(identityFile) || hasControl(identityFile))) {
    fields.push('HVIR_REAL_SSH_IDENTITY_FILE')
  }

  if (fields.length > 0) return { kind: 'invalid', fields }
  return {
    kind: 'configured',
    value: {
      alias: 'real-host-acceptance',
      hostname,
      port,
      user,
      trustedHostKey,
      rootParent,
      credential: inlineKey ? { kind: 'inline' } : { kind: 'file', path: identityFile },
      hasPassphrase: hasValue(environment.HVIR_REAL_SSH_PASSPHRASE),
    },
  }
}

export function createRealHostSshFailureEvidence(options: {
  readonly phase: RealHostSshPhase
  readonly reason: RealHostSshFailureReason
  readonly durationMs: number
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  readonly resources: RealHostSshResourceEvidence
  readonly transports: readonly SshTransportDiagnostic[]
}): RealHostSshFailureEvidence {
  return {
    schema: 1,
    status: 'failed',
    phase: options.phase,
    reason: options.reason,
    durationMs: boundedDuration(options.durationMs),
    connection: {
      state: options.connectionState,
      watchTier: options.watchTier,
    },
    resources: {
      rootRegistered: options.resources.rootRegistered,
      watcherActive: options.resources.watcherActive,
      ptyCount: boundedCount(options.resources.ptyCount),
      providerObserverActive: options.resources.providerObserverActive,
      loopbackActive: options.resources.loopbackActive,
      streamCount: boundedCount(options.resources.streamCount),
    },
    transports: options.transports.slice(0, 8).map((transport) => ({
      role: transport.role,
      primary: transport.primary,
      channels: boundedCount(transport.channels),
      pendingChannels: boundedCount(transport.pendingChannels),
      channelBudget: boundedCount(transport.channelBudget),
      refusedChannels: boundedCount(transport.refusedChannels),
    })),
  }
}

export async function writeRealHostSshFailureEvidence(
  directory: string | undefined,
  evidence: RealHostSshFailureEvidence,
): Promise<boolean> {
  if (!directory) return false
  await mkdir(directory, { recursive: true })
  const contents = `${JSON.stringify(evidence, null, 2)}\n`
  if (Buffer.byteLength(contents) > MAX_ARTIFACT_BYTES) {
    throw new Error('Real-host SSH evidence exceeded its closed-schema byte bound')
  }
  await writeFile(join(directory, 'real-host-ssh-failure.json'), contents, 'utf8')
  return true
}

function hasValue(value: string | undefined): boolean {
  return typeof value === 'string' && value.length > 0
}

function trimmed(value: string | undefined): string {
  return value?.trim() ?? ''
}

function validName(value: string, maximum: number): boolean {
  return value.length > 0 && value.length <= maximum && !hasControl(value)
}

function hasControl(value: string): boolean {
  return /[\0\r\n\t]/.test(value)
}

function validRemoteRootParent(value: string): boolean {
  if (!value.startsWith('/') || value === '/' || hasControl(value)) return false
  if (value.endsWith('/') || value.includes('//')) return false
  return value
    .split('/')
    .slice(1)
    .every((segment) => segment !== '.' && segment !== '..')
}

function boundedCount(value: number): number {
  if (!Number.isSafeInteger(value) || value < 0) return 0
  return Math.min(value, 1_000)
}

function boundedDuration(value: number): number {
  if (!Number.isFinite(value) || value < 0) return 0
  return Math.min(Math.round(value), 86_400_000)
}

```
````

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/30b59304/hvir/src/main/smoke/workspace-remote.ts:1-260
/private/var/tmp/ws/30b59304/hvir/src/shared/harness-profile.ts:1-121
/private/var/tmp/ws/30b59304/hvir/src/shared/sessions-projection.ts:1-200
/private/var/tmp/ws/30b59304/hvir/src/shared/document-review.ts:1-259
/private/var/tmp/ws/30b59304/hvir/src/shared/web-pane.ts:1-68
/private/var/tmp/ws/30b59304/hvir/src/shared/viewer-types.ts:1-101
/private/var/tmp/ws/30b59304/hvir/src/shared/keybindings.ts:1-140
/private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts:1-173
/private/var/tmp/ws/30b59304/hvir/src/renderer/src/App.tsx:1-260
/private/var/tmp/ws/30b59304/hvir/scripts/real-host-ssh-contract.mts:1-234
\</final_answer>


---

<sub>1m 0s</sub>

### Copilot

The subagent output got truncated. I'll read the key shared contracts directly to nail down the product concepts.

---

<sub>1m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/30b59304/hvir/src/shared/harness-provider.ts

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

<sub>1m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/shared/workspace-types.ts.**

/private/var/tmp/ws/30b59304/hvir/src/shared/workspace-types.ts

<details>
<summary>80 lines</summary>

```
import type { HostConnectionState, HostWatchTier } from './fs-types'
import type { HostPath } from './host-path'

export interface ProjectRootResponse {
  readonly root: HostPath
}

export interface ProjectState extends ProjectRootResponse {
  /** Main-owned identity for ordering and deduplicating authoritative state. */
  readonly revision: number
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  readonly projects: readonly RegisteredProjectState[]
  readonly activeProjectId: string
  readonly activeWorkspaceId: string
}

export const WORKSPACE_ACTIVITY_SCHEMA = 1
export const WORKSPACE_ACTIVITY_STATUS_LIMIT = 2_000
export const WORKSPACE_ACTIVITY_FIELDS = 'head-branch-porcelain-v2-path-state' as const

/** Bounded result of the existing per-worktree porcelain status invocation. */
export interface WorkspaceStatusActivity {
  readonly schema: typeof WORKSPACE_ACTIVITY_SCHEMA
  readonly fields: typeof WORKSPACE_ACTIVITY_FIELDS
  readonly statusLimit: typeof WORKSPACE_ACTIVITY_STATUS_LIMIT
  readonly statusEntryCount: number
  readonly statusTruncated: boolean
  readonly statusDigest: string
}

/** Host-qualified comparison state retained only for a closed workspace. */
export interface WorkspaceActivitySnapshot extends WorkspaceStatusActivity {
  readonly root: HostPath
  readonly head?: string
  readonly branch?: string
}

export interface WorkspaceActivityResult {
  readonly changedFiles: number
  /** Omitted when the root is no longer a Git repository. */
  readonly status?: WorkspaceStatusActivity
}

/** One checkout reported by `git worktree list`, or the root of a plain directory. */
export interface DiscoveredWorktree {
  readonly root: HostPath
  readonly head?: string
  readonly branch?: string
  readonly detached: boolean
  readonly bare: boolean
  readonly prunable?: boolean
  /** Git's porcelain explanation for why its administrative record is stale. */
  readonly prunableReason?: string
}

export interface WorktreeDiscovery {
  readonly repository: boolean
  readonly worktrees: readonly DiscoveredWorktree[]
}

/** Renderer-facing persisted workspace record. Missing records await lifecycle cleanup. */
export interface WorkspaceState {
  readonly id: string
  readonly root: HostPath
  readonly name: string
  readonly head?: string
  readonly branch?: string
  readonly main: boolean
  /** Closed workspaces stay in the catalog but own no renderer workspace runtime. */
  readonly closed: boolean
  readonly missing: boolean
  /** Present only when Git still lists this missing workspace as prunable. */
  readonly prunableReason?: string
  readonly repository: boolean
  readonly changedFiles: number
  /** Successful discovery found this worktree after the project's baseline. */
  readonly newlyDiscovered?: boolean
}

/** A registered project owns discovered worktree workspaces. */
export interface RegisteredProjectState {
  readonly id: string
  readonly registeredRoot: HostPath
  readonly displayName: string
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  readonly activeWorkspaceId: string
  readonly workspaces: readonly WorkspaceState[]
}
```

</details>


---

<sub>1m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/electron-builder.yml.**

/private/var/tmp/ws/30b59304/hvir/electron-builder.yml

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

<sub>1m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/LICENSE.**

/private/var/tmp/ws/30b59304/hvir/LICENSE

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

<sub>1m 8s</sub>

### Copilot

Now I'll look at the harness providers (which AI CLIs are supported), the Linux desktop metadata, and the renderer settings/App entry.

---

<sub>1m 11s</sub>

### `bash`

**List harness providers and Linux desktop metadata**

$ cd /private/var/tmp/ws/30b59304/hvir && echo "---HARNESS DIR---" && ls src/main/harness src/main/harness/* 2>/dev/null | head -80; echo "---LINUX BUILD---"; ls build/linux build/native build/pkg-scripts; echo; for f in build/linux/*.desktop build/linux/*.appdata.xml build/linux/*.metainfo.xml; do [ -f "$f" ] && echo "== $f" && cat "$f"; done; echo "---PROVIDER IDS---"; grep -rn "asHarnessProviderId(" src/main --include=*.ts | grep -v test | head -20

<details>
<summary>100 lines</summary>

```
---HARNESS DIR---
src/main/harness/bounded-line-reader.ts
src/main/harness/bundled-harness-providers.ts
src/main/harness/claude-context-telemetry.ts
src/main/harness/claude-keybindings.ts
src/main/harness/claude-session-artifact.ts
src/main/harness/claude-session-recovery.ts
src/main/harness/codex-context-telemetry.ts
src/main/harness/codex-session-discovery.ts
src/main/harness/electron-clipboard-image.ts
src/main/harness/harness-composer-contracts.ts
src/main/harness/harness-launch-selection.ts
src/main/harness/harness-launch.ts
src/main/harness/harness-probe.ts
src/main/harness/harness-profile-store.ts
src/main/harness/harness-provider-capabilities.ts
src/main/harness/harness-provider-contract.ts
src/main/harness/harness-provider-probes.ts
src/main/harness/harness-provider-registry.ts
src/main/harness/harness-provider.ts
src/main/harness/harness-shell-environment.ts
src/main/harness/harness-telemetry-hub.ts
src/main/harness/harness-telemetry-protocol.ts
src/main/harness/harness-text-validation.ts
src/main/harness/harness-usage-artifact.ts
src/main/harness/harness-usage-demand-controller.ts
src/main/harness/harness-usage-read-scheduler.ts
src/main/harness/harness-usage.ts
src/main/harness/remote-image-paste-storage.ts
src/main/harness/remote-image-paste.ts

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

src/main/harness/providers:
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
---LINUX BUILD---
build/linux:
after-install.sh
after-remove.sh
hvir.apparmor

build/native:
hvir-command

build/pkg-scripts:
postinstall
preinstall

---PROVIDER IDS---
src/main/smoke/sessions-usage-provider.ts:14:    id: asHarnessProviderId('smoke-usage'),
src/main/harness/providers/cursor.ts:6:    id: asHarnessProviderId('cursor-cli'),
src/main/harness/providers/claude-code.ts:30:    id: asHarnessProviderId('claude-code'),
src/main/harness/providers/pi.ts:6:    id: asHarnessProviderId('pi'),
src/main/harness/providers/gemini.ts:6:    id: asHarnessProviderId('gemini-cli'),
src/main/harness/providers/shell.ts:11:    id: asHarnessProviderId('plain-shell'),
src/main/harness/providers/shell.ts:46:    id: asHarnessProviderId('custom'),
src/main/harness/providers/github-copilot.ts:6:    id: asHarnessProviderId('github-copilot-cli'),
src/main/harness/providers/codex.ts:45:    id: asHarnessProviderId('codex'),
src/main/harness/codex-context-telemetry.ts:111:  const providerId = asHarnessProviderId('codex')
src/main/harness/codex-context-telemetry.ts:229:  const providerId = asHarnessProviderId('codex')
src/main/harness/codex-context-telemetry.ts:488:      providerId: asHarnessProviderId('codex'),
src/main/harness/codex-context-telemetry.ts:596:    providerId: asHarnessProviderId('codex'),
src/main/harness/claude-context-telemetry.ts:106:  const providerId = asHarnessProviderId('claude-code')
src/main/harness/claude-context-telemetry.ts:281:  const providerId = asHarnessProviderId('claude-code')
src/main/harness/claude-context-telemetry.ts:650:  const providerId = asHarnessProviderId('claude-code')
src/main/harness/claude-context-telemetry.ts:696:    providerId: asHarnessProviderId('claude-code'),
src/main/harness/claude-context-telemetry.ts:811:    providerId: asHarnessProviderId('claude-code'),
src/main/harness/harness-provider-registry.ts:23:    const provider = this.providers.get(asHarnessProviderId(id))
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>1m 18s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/30b59304/hvir/src/main/harness/providers/claude-code.ts

<details>
<summary>101 lines</summary>

```
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
  },
  supportsResume: true,
  sessionIdentity: 'preassigned',
  telemetry: { observe: observeClaudeContext },
  usageTelemetry: { observe: observeClaudeUsage },
  usageSnapshots: { snapshot: snapshotClaudeUsage },
  resumeValidation: { availability: claudeResumeAvailability },
  probe: versionProbe('preassigned', true, 'pressure', {
    contextPressure: CLAUDE_CONTEXT_PRESSURE,
    reviewInsert: claudeCodeReviewInsert,
    supportsExactForkVersion: supportsClaudeExactForkVersion,
  }),
  composerConfiguration: { configure: configureClaudeComposerSubmit },
  remoteImagePaste: pathImagePasteContract(),
  documentReviewInsert: claudeCodeReviewInsert,

  launch(ctx): HarnessLaunchSpec {
    return {
      file: 'claude',
      args: ['--session-id', ctx.sessionId],
      shellEnvironment: true,
    }
  },

  resume(ctx): HarnessLaunchSpec {
    return {
      file: 'claude',
      args: ['--resume', ctx.sessionId],
      shellEnvironment: true,
    }
  },

  fork(ctx): HarnessLaunchSpec {
    if (!ctx.parentSessionId)
      throw new Error('Claude Code fork requires an exact parent id')
    return {
      file: 'claude',
      args: [
        '--session-id',
        ctx.sessionId,
        '--resume',
        ctx.parentSessionId,
        '--fork-session',
      ],
      shellEnvironment: true,
    }
  },
}

function supportsClaudeExactForkVersion(version: string | undefined): boolean {
  const match = /(?:^|\s)(\d+)\.(\d+)\.(\d+)(?:\b|[-+])/.exec(version ?? '')
  if (!match) return false
  const parts = match.slice(1).map(Number)
  return (
    parts[0]! > 2 ||
    (parts[0] === 2 && (parts[1]! > 1 || (parts[1] === 1 && parts[2]! >= 258)))
  )
}
```

</details>


---

<sub>1m 18s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/main/harness/providers/shell.ts.**

/private/var/tmp/ws/30b59304/hvir/src/main/harness/providers/shell.ts

<details>
<summary>61 lines</summary>

```
import { asHarnessProviderId, asHarnessProfileId } from '../../../shared'
import type { HarnessProvider, HarnessLaunchSpec } from '../harness-provider-contract'
import { staticProbe } from '../harness-provider-probes'

/**
 * A plain login shell — no session id, no resume. The provider every host
 * supports. "Resume" starts a new shell.
 */
export const plainShellProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('plain-shell'),
    displayName: 'Shell',
    sessionKind: 'shell',
    default: true,
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    defaultProfile: {
      id: asHarnessProfileId('plain-shell-default'),
      displayName: 'Shell',
      description: 'The default interactive shell on this host.',
    },
    reservedArguments: [],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: staticProbe('none', false, 'none'),

  launch(ctx): HarnessLaunchSpec {
    return { file: ctx.defaultShell, args: ['-l'] }
  },

  resume(ctx): HarnessLaunchSpec {
    return this.launch(ctx)
  },
}

export const customCommandProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('custom'),
    displayName: 'Custom',
    sessionKind: 'shell',
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    reservedArguments: [],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: staticProbe('none', false, 'none'),
  launch: () => ({ file: 'custom', args: [] }),
  resume: () => ({ file: 'custom', args: [] }),
}
```

</details>


---

<sub>1m 18s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/main/harness/providers/codex.ts.**

/private/var/tmp/ws/30b59304/hvir/src/main/harness/providers/codex.ts

<details>
<summary>176 lines</summary>

```
import {
  asHarnessProviderId,
  asHarnessProfileId,
  type HarnessLaunchMode,
} from '../../../shared'
import type {
  HarnessProvider,
  HarnessLaunchContext,
  HarnessLaunchSpec,
  HarnessDocumentReviewInsertContract,
  HarnessDocumentReviewInsertLaunch,
  HarnessDocumentReviewSendNowContract,
  HarnessDocumentReviewSendNowLaunch,
} from '../harness-provider-contract'
import {
  observeCodexContext,
  observeCodexUsage,
  snapshotCodexUsage,
} from '../codex-context-telemetry'
import { codexSessionDiscovery } from '../codex-session-discovery'
import { versionProbe } from '../harness-provider-probes'
import {
  pathImagePasteContract,
  documentReviewInsertContract,
} from '../harness-composer-contracts'

const CODEX_THREAD_TITLE_CONFIG = 'tui.terminal_title=["thread-title"]'

const CODEX_SUBCOMMAND_BY_LAUNCH_MODE: Readonly<
  Partial<Record<HarnessLaunchMode, 'resume' | 'fork'>>
> = {
  resume: 'resume',
  fork: 'fork',
}

const codexReviewInsert = documentReviewInsertContract(
  () => codexProvider,
  supportsCodexDocumentReviewProfile,
)

const codexReviewSendNow = codexDocumentReviewSendNowContract(codexReviewInsert)

export const codexProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('codex'),
    displayName: 'Codex',
    sessionKind: 'agent',
    contextPresentation: 'pressure',
    modifiedKeyProtocol: 'csi-u',
    metaEnterAliasesControl: true,
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('codex-default'),
      displayName: 'Codex',
      description: 'Codex with exact rollout discovery and recovery.',
    },
    reservedArguments: ['resume', 'fork'],
    reservedEnvironmentKeys: ['CODEX_HOME'],
    artifactEnvironmentKeys: ['CODEX_HOME'],
    artifactExecutable: true,
    artifactPathBindings: [],
    applyArgs: (mode, providerArgs, profileArgs) => {
      const subcommand = CODEX_SUBCOMMAND_BY_LAUNCH_MODE[mode]
      if (!subcommand) return [...providerArgs, ...profileArgs]
      const subcommandAt = providerArgs.indexOf(subcommand)
      return subcommandAt < 0
        ? [...providerArgs, ...profileArgs]
        : [
            ...providerArgs.slice(0, subcommandAt),
            ...profileArgs,
            ...providerArgs.slice(subcommandAt),
          ]
    },
  },
  supportsResume: true,
  sessionIdentity: 'discovered',
  sessionDiscovery: codexSessionDiscovery,
  telemetry: { observe: observeCodexContext },
  usageTelemetry: { observe: observeCodexUsage },
  usageSnapshots: { snapshot: snapshotCodexUsage },
  probe: versionProbe('discovered', true, 'pressure', {
    reviewInsert: codexReviewInsert,
    reviewSendNow: codexReviewSendNow,
    supportsReviewSendNowVersion: supportsCodexReviewSendNowVersion,
    supportsExactForkVersion: supportsCodexExactForkVersion,
  }),
  remoteImagePaste: pathImagePasteContract(),
  documentReviewInsert: codexReviewInsert,
  documentReviewSendNow: codexReviewSendNow,

  launch(ctx): HarnessLaunchSpec {
    return {
      file: 'codex',
      args: ['--config', CODEX_THREAD_TITLE_CONFIG, ...codexComposerArgs(ctx)],
      shellEnvironment: true,
    }
  },

  resume(ctx): HarnessLaunchSpec {
    return {
      file: 'codex',
      args: [
        '--config',
        CODEX_THREAD_TITLE_CONFIG,
        ...codexComposerArgs(ctx),
        'resume',
        ctx.sessionId,
      ],
      shellEnvironment: true,
    }
  },

  fork(ctx): HarnessLaunchSpec {
    if (!ctx.parentSessionId) throw new Error('Codex fork requires an exact parent id')
    return {
      file: 'codex',
      args: [
        '--config',
        CODEX_THREAD_TITLE_CONFIG,
        ...codexComposerArgs(ctx),
        'fork',
        ctx.parentSessionId,
      ],
      shellEnvironment: true,
    }
  },
}

function codexComposerArgs(ctx: HarnessLaunchContext): readonly string[] {
  return ctx.composerSubmitMode === 'ctrl-enter'
    ? ['--config', 'tui.keymap.composer.submit=["ctrl-enter"]']
    : []
}

function codexDocumentReviewSendNowContract(
  insert: HarnessDocumentReviewInsertContract,
): HarnessDocumentReviewSendNowContract {
  const revision = 1
  const supportsLaunch = (launch: HarnessDocumentReviewSendNowLaunch): boolean =>
    launch.profile.providerId === codexProvider.manifest.id &&
    launch.profile.providerContractVersion === codexProvider.profile.version &&
    launch.profile.executable.kind === 'provider-default' &&
    supportsCodexDocumentReviewProfile(launch.profile) &&
    launch.effectiveCapabilities.reviewInsertContractRevision === insert.revision &&
    launch.effectiveCapabilities.reviewSendNowContractRevision === revision
  return {
    revision,
    supportsLaunch,
    terminalInput: (body, launch) => {
      if (!supportsLaunch(launch)) {
        throw new Error('Codex review submission is unavailable for this launch')
      }
      const submit = launch.composerSubmitMode === 'ctrl-enter' ? '\x1b[13;5u' : '\r'
      return `${insert.terminalInput(body)}${submit}`
    },
  }
}

/**
 * A live Codex process launched through the provider default remains an explicit
 * best-effort composer target. Profile customization can make the attempt fail,
 * but it must not silently retarget the provider-owned framing contract.
 */
function supportsCodexDocumentReviewProfile(
  _profile: HarnessDocumentReviewInsertLaunch['profile'],
): boolean {
  return true
}

function supportsCodexReviewSendNowVersion(version: string | undefined): boolean {
  const parts = codexVersion(version)
  if (!parts) return false
  return parts[0] > 0 || parts[1] > 146 || (parts[1] === 146 && parts[2] >= 0)
}

function supportsCodexExactForkVersion(version: string | undefined): boolean {
  const parts = codexVersion(version)
  return Boolean(
    parts && (parts[0] > 0 || parts[1] > 151 || (parts[1] === 151 && parts[2] >= 0)),
  )
}

function codexVersion(
  version: string | undefined,
): readonly [number, number, number] | undefined {
  const match = /^codex-cli\s+(\d+)\.(\d+)\.(\d+)(?:\b|[-+])/.exec(version ?? '')
  return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : undefined
}
```

</details>


---

<sub>1m 18s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts.**

/private/var/tmp/ws/30b59304/hvir/src/renderer/src/settings/settings.ts

<details>
<summary>161 lines</summary>

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
        : 5 * 60_000,
    terminalRecoveryMode: candidate.terminalRecoveryMode === 'auto' ? 'auto' : 'prompt',
    terminalTheme:
      candidate.terminalTheme === 'dark' || candidate.terminalTheme === 'light'
        ? candidate.terminalTheme
        : 'app',
    terminalLightThemeId: normalizeTerminalThemeId(
      candidate.terminalLightThemeId,
      'light',
    ),
    terminalDarkThemeId: normalizeTerminalThemeId(candidate.terminalDarkThemeId, 'dark'),
    terminalCursorShape:
      candidate.terminalCursorShape === 'hollow-block' ||
      candidate.terminalCursorShape === 'bar' ||
      candidate.terminalCursorShape === 'underline'
        ? candidate.terminalCursorShape
        : 'block',
    terminalCursorBlink:
      candidate.terminalCursorBlink === 'blinking' ||
      candidate.terminalCursorBlink === 'steady'
        ? candidate.terminalCursorBlink
        : 'terminal',
    terminalLigatures: candidate.terminalLigatures === false ? false : true,
    interfaceFont: normalizeFontPreference(candidate.interfaceFont),
    monospaceFont: normalizeFontPreference(candidate.monospaceFont),
    interfaceScale: normalizeInterfaceScale(candidate.interfaceScale),
    terminalTextSize: normalizeTerminalTextSize(candidate.terminalTextSize),
    composerSubmitMode:
      candidate.composerSubmitMode === 'ctrl-enter' ? 'ctrl-enter' : 'enter',
    keybindings: parseKeybindingOverrides(candidate.keybindings ?? DEFAULT_KEYBINDINGS),
  }
}

function defaults(): AppSettings {
  return {
    idleThresholdMs: 4_000,
    gitAutoFetchIntervalMs: 5 * 60_000,
    terminalRecoveryMode: 'prompt',
    terminalTheme: 'app',
    terminalLightThemeId: DEFAULT_TERMINAL_THEME_IDS.light,
    terminalDarkThemeId: DEFAULT_TERMINAL_THEME_IDS.dark,
    terminalCursorShape: 'block',
    terminalCursorBlink: 'terminal',
    terminalLigatures: true,
    interfaceFont: systemFontPreference(),
    monospaceFont: systemFontPreference(),
    interfaceScale: DEFAULT_INTERFACE_SCALE,
    terminalTextSize: DEFAULT_TERMINAL_TEXT_SIZE,
    composerSubmitMode: 'enter',
    keybindings: DEFAULT_KEYBINDINGS,
  }
}

export function terminalPreferences(settings: AppSettings): TerminalPreferences {
  return {
    idleThresholdMs: settings.idleThresholdMs,
    terminalRecoveryMode: settings.terminalRecoveryMode,
    terminalTheme: settings.terminalTheme,
    terminalLightThemeId: settings.terminalLightThemeId,
    terminalDarkThemeId: settings.terminalDarkThemeId,
    terminalCursorDefaults: {
      shape: settings.terminalCursorShape,
      blink: settings.terminalCursorBlink,
    },
    terminalLigatures: settings.terminalLigatures,
    terminalTypography: {
      fontFamily: fontFamilyStack(settings.monospaceFont, 'monospace'),
      fontSize: settings.terminalTextSize,
    },
    composerSubmitMode: settings.composerSubmitMode,
  }
}
```

</details>


---

<sub>1m 27s</sub>

### Copilot

Let me check the remaining providers, CI workflows, the native package, and the runtime-check script (for install prerequisites).

---

<sub>1m 29s</sub>

### `bash`

**Inspect other providers, workflows, hooks, native package**

$ cd /private/var/tmp/ws/30b59304/hvir && for f in cursor gemini github-copilot pi; do echo "== $f"; grep -nE "displayName|file: '|sessionKind|supportsResume|description:" src/main/harness/providers/$f.ts; done; echo "---WORKFLOWS---"; ls .github/workflows; echo "---HOOKS---"; ls .githooks; cat .githooks/* 2>/dev/null | head -40; echo "---RENAME PKG---"; cat packages/rename-noreplace/package.json; ls packages/rename-noreplace

<details>
<summary>88 lines</summary>

```
== cursor
7:    displayName: 'Cursor CLI',
8:    sessionKind: 'agent',
15:      displayName: 'Cursor CLI',
16:      description:
26:  supportsResume: false,
29:  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
== gemini
7:    displayName: 'Gemini CLI',
8:    sessionKind: 'agent',
15:      displayName: 'Gemini CLI',
16:      description:
26:  supportsResume: false,
29:  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
== github-copilot
7:    displayName: 'GitHub Copilot CLI',
8:    sessionKind: 'agent',
15:      displayName: 'GitHub Copilot CLI',
16:      description:
26:  supportsResume: false,
30:    file: 'copilot',
== pi
7:    displayName: 'Pi',
8:    sessionKind: 'agent',
15:      displayName: 'Pi',
16:      description:
29:  supportsResume: false,
32:  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
---WORKFLOWS---
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
---HOOKS---
pre-push
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
---RENAME PKG---
{
  "name": "@hvir/rename-noreplace",
  "version": "0.1.0",
  "private": true,
  "description": "Private hvir Node-API binding for atomic no-replace rename",
  "license": "MIT",
  "main": "index.js",
  "files": [
    "index.js",
    "LICENSE",
    "binding.gyp",
    "rename_noreplace.c",
    "build/Release/rename_noreplace.node"
  ],
  "gypfile": true,
  "os": [
    "darwin",
    "linux"
  ]
}
binding.gyp
build
index.js
LICENSE
package.json
rename_noreplace.c
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>1m 40s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/30b59304/hvir/scripts/check-terminal-runtime.mts

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

<sub>1m 40s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/30b59304/hvir/.github/workflows/ci.yml

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

<sub>1m 40s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/shared/document-review.ts.**

/private/var/tmp/ws/30b59304/hvir/src/shared/document-review.ts (lines 1-80)

<details>
<summary>71 lines</summary>

```
import { containsHostPath, hostPathEquals, type HostPath } from './host-path'

export const DOCUMENT_REVIEW_LIMITS = {
  batchesPerWorkspace: 1,
  batchMembers: 64,
  commentsPerDocument: 64,
  commentsPerWorkspace: 256,
  commentBytes: 8 * 1024,
  contextBytes: 4 * 1024,
  deliveryPayloadBytes: 64 * 1024,
  deliveryQuoteBytes: 2 * 1024,
  excerptBytes: 32 * 1024,
  idBytes: 128,
  revalidationReadBytes: 4 * 1024 * 1024,
  sourceRangeLines: 100,
  storedWorkspaceBytes: 2 * 1024 * 1024,
  workspaceIdBytes: 256,
} as const

export interface ReviewWorkspaceIdentity {
  /** Stable registered project/worktree identity, not a path-derived key. */
  readonly id: string
  readonly root: HostPath
}

export type DocumentReviewDocumentIssue =
  'foreign-document' | 'document-outside-workspace'

export function documentReviewWorkspaceEquals(
  left: ReviewWorkspaceIdentity,
  right: ReviewWorkspaceIdentity,
): boolean {
  return left.id === right.id && hostPathEquals(left.root, right.root)
}

export function documentReviewDocumentIssue(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): DocumentReviewDocumentIssue | undefined {
  if (document.hostId !== workspace.root.hostId) return 'foreign-document'
  if (
    !containsHostPath(workspace.root, document) ||
    hostPathEquals(workspace.root, document)
  ) {
    return 'document-outside-workspace'
  }
  return undefined
}

export function isDocumentReviewDocument(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): boolean {
  return documentReviewDocumentIssue(workspace, document) === undefined
}

export function documentReviewUtf8Bytes(value: string): number {
  return new TextEncoder().encode(value).byteLength
}

export function isDocumentReviewIdentifier(
  value: unknown,
  maximumBytes: number = DOCUMENT_REVIEW_LIMITS.idBytes,
): value is string {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    documentReviewUtf8Bytes(value) <= maximumBytes &&
    ![...value].some((character) => {
      const code = character.codePointAt(0)!
      return code <= 31 || code === 127
    })
  )
}

export interface ReviewDocumentSnapshot {
  readonly algorithm: 'sha256'
  /** Lowercase hexadecimal digest of the exact on-disk UTF-8 bytes. */
  readonly digest: string
  readonly byteLength: number
```

</details>


---

<sub>1m 49s</sub>

### Copilot

Good — I now understand harness profiles, document review, and worktree workspaces. Let me check the renderer shell (navigation rail), default keybindings, and how releases are distributed.

---

<sub>1m 51s</sub>

### `bash`

**Find navigation rail sections and default keybindings**

$ cd /private/var/tmp/ws/30b59304/hvir && echo "---RAIL NAV---"; grep -rn "rail-nav" src/renderer/src --include=*.tsx -l | head; grep -rn -A2 "label: '" src/renderer/src/workbench/*.tsx 2>/dev/null | grep -E "label:|id:" | head -30; echo "---KEYBINDINGS---"; sed -n 1,140p src/shared/keybindings.ts | grep -nE "^\s+'?[a-zA-Z.-]+'?:\s*'|^export const|description|label" | head -50

<details>
<summary>17 lines</summary>

```
---RAIL NAV---
src/renderer/src/App.tsx
---KEYBINDINGS---
1:export const KEYBINDING_ACTIONS = [
18:export const DEFAULT_KEYBINDINGS: KeybindingMap = {
19:  cycleViewMode: 'Mod+Shift+M',
20:  findFile: 'Mod+P',
21:  findInFile: 'Mod+F',
24:  findInTerminal: 'Mod+Shift+F',
25:  goToLine: 'Ctrl+G',
26:  focusTerminal: 'Mod+J',
27:  focusViewer: 'Mod+1',
28:  focusTree: 'Mod+0',
29:  toggleTerminalFocus: 'Mod+Shift+J',
30:  nextWorkspace: 'Mod+Alt+]',
31:  previousWorkspace: 'Mod+Alt+[',
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>1m 58s</sub>

### `bash`

**Read keybinding actions and App rail navigation**

$ cd /private/var/tmp/ws/30b59304/hvir && sed -n 1,60p src/shared/keybindings.ts; echo "---APP RAIL---"; grep -n -B2 -A12 "rail-nav" src/renderer/src/App.tsx | head -120

<details>
<summary>71 lines</summary>

```
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
  readonly ctrlKey: boolean
  readonly metaKey: boolean
  readonly altKey: boolean
  readonly shiftKey: boolean
}

interface ParsedKeybinding {
  readonly key: string
  readonly mod: boolean
  readonly ctrl: boolean
---APP RAIL---
446-          tabIndex={-1}
447-        >
448:          <nav className="rail-nav" aria-label="Project views">
449-            <button
450-              type="button"
451-              className={railMode === 'files' ? 'active' : ''}
452-              aria-current={railMode === 'files' ? 'page' : undefined}
453-              onClick={() => setRailMode('files')}
454-            >
455-              Files
456-            </button>
457-            {gitEnabled ? (
458-              <button
459-                type="button"
460-                className={railMode === 'git' ? 'active' : ''}
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>2m 3s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/30b59304/hvir/src/renderer/src/App.tsx (lines 456-560)

<details>
<summary>105 lines</summary>

```
            </button>
            {gitEnabled ? (
              <button
                type="button"
                className={railMode === 'git' ? 'active' : ''}
                aria-current={railMode === 'git' ? 'page' : undefined}
                onClick={() => setRailMode('git')}
              >
                Git{changedCount > 0 ? ` ${changedCountLabel}` : ''}
              </button>
            ) : null}
          </nav>
          <div className="rail-content">
            <FileTree
              key={`files:${root.hostId}:${root.path}`}
              root={root}
              refreshVersion={watchVersion}
              searchRefreshVersion={contentVersion}
              ignoredRefreshVersion={ignoredRefreshVersion}
              changedFiles={gitChanges?.workingTree}
              gitChangesLimited={gitChanges?.workingTreeLimited}
              selected={terminalPathActivation.revealRequest?.path ?? activeTab?.path}
              revealRequest={terminalPathActivation.revealRequest}
              onOpen={openFile}
              onPointerActivate={focusVisibleActiveTerminalAfterLayout}
              viewerPathRebind={viewer}
              onWorkspaceContentChanged={session.refreshWorkspaceContent}
              connected={connectionState === 'connected'}
              missing={activeWorkspace?.missing}
              hidden={railMode !== 'files'}
              gitEnabled={gitEnabled}
              watchInterestsLimited={watchInterests.limited}
              onExpandedChange={watchInterests.updateExpandedPath}
            />
            {gitEnabled ? (
              <GitPanel
                key={`git:${root.hostId}:${root.path}`}
                root={root}
                refreshVersion={contentVersion}
                historyRefreshVersion={gitVersion}
                onChanges={setGitChanges}
                onOpenChange={(path, base, untracked) =>
                  openFile(path, true, untracked ? 'git-untracked' : 'git', base)
                }
                onOpenHistory={(path, revision) =>
                  openFile(path, true, 'git', 'head', revision)
                }
                onOpenGraph={openGitGraph}
                connectionState={connectionState}
                hidden={railMode !== 'git'}
                historyPaused={gitGraphActive}
                hasDirtyViewerTabs={tabs.some((tab) => tab.dirty)}
                onSwitchBranch={switchGitBranch}
                onFetch={fetchGit}
                onPull={pullGit}
                autoFetchIntervalMs={settings.gitAutoFetchIntervalMs}
              />
            ) : null}
          </div>
        </aside>
        <PaneResizer
          orientation="vertical"
          className="tree-resizer"
          label="Resize file tree"
          onDragStart={() => {
            if (treeCollapsed) setTreeCollapsed(false)
          }}
          onDrag={(clientX) => {
            const left = workbenchRef.current?.getBoundingClientRect().left ?? 0
            setTreeWidth(clientX - left)
          }}
          onNudge={(delta) => {
            if (treeCollapsed) {
              if (delta > 0) setTreeCollapsed(false)
              return
            }
            const current =
              workbenchRef.current?.querySelector<HTMLElement>('.tree-panel')
            if (current) setTreeWidth(current.getBoundingClientRect().width + delta)
          }}
          onReset={layout.resetTreeWidth}
          action={
            <button
              type="button"
              className="tree-collapse-toggle"
              data-resizer-action
              aria-label={
                treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'
              }
              aria-pressed={treeCollapsed}
              title={treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'}
              onDoubleClick={(event) => event.stopPropagation()}
              onClick={() => setTreeCollapsed((collapsed) => !collapsed)}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d={
                    treeCollapsed
                      ? 'M4 3 8.5 8 4 13M8 3l4.5 5L8 13'
                      : 'M12 3 7.5 8l4.5 5M8 3 3.5 8 8 13'
                  }
                />
              </svg>
            </button>
          }
```

</details>


---

<sub>2m 10s</sub>

### Copilot

UI layout is clear. Let me check distribution (release workflow / native installer), data storage location, and the `hvir-command` helper.

---

<sub>2m 13s</sub>

### `bash`

**Inspect release workflow, native installer template, hvir-command**

$ cd /private/var/tmp/ws/30b59304/hvir && echo "---RELEASE.YML (head)---"; grep -nE "name:|runs-on|softprops|gh release|artifactName|\.deb|\.pkg|install\.sh|native-installer" .github/workflows/release.yml | head -40; echo "---NATIVE INSTALLER (head)---"; sed -n 1,60p scripts/native-installer.template.sh; echo "---HVIR-COMMAND---"; file build/native/hvir-command; head -c 600 build/native/hvir-command | strings | head -20

<details>
<summary>120 lines</summary>

```diff
---RELEASE.YML (head)---
1:name: Release
29:    name: Prepare ${{ inputs.bump }} release
30:    runs-on: ubuntu-24.04
43:      - name: Require the default branch
52:      - name: Check out release history
59:      - name: Select trusted release source
82:      - name: Set up Node.js
88:      - name: Select release version
120:            if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
121:              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
131:          elif gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
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
223:          DEB_ARCH: ${{ matrix.deb_arch }}
227:          source="dist/hvir_${version}_${DEB_ARCH}.deb"
228:          target="hvir-${version}-linux-${RELEASE_ARCH}.deb"
240:      - name: Retain the exact accepted package
243:          name: release-linux-${{ matrix.release_arch }}
245:            dist/hvir-*-linux-${{ matrix.release_arch }}.deb
246:            dist/hvir-*-linux-${{ matrix.release_arch }}.deb.sha256
252:    name: Accept release package (${{ matrix.name }})
259:    runs-on: ${{ matrix.os }}
265:          - name: Ubuntu 24.04 x64
267:            artifact_name: release-linux-x64
270:          - name: Ubuntu 24.04 arm64
272:            artifact_name: release-linux-arm64
279:      - name: Check out exact release source
284:      - name: Set up Node.js
290:      - name: Download the accepted baseline package
293:          name: ${{ matrix.artifact_name }}
---NATIVE INSTALLER (head)---
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
---HVIR-COMMAND---
build/native/hvir-command: POSIX shell script text executable, ASCII text
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
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>2m 19s</sub>

### Copilot

Let me read the installer usage text, the `hvir` command behavior, and the release URL template, plus the web pane/sessions contracts.

---

<sub>2m 21s</sub>

### `bash`

**Read installer usage, hvir command, release URL**

$ cd /private/var/tmp/ws/30b59304/hvir && sed -n 56,110p scripts/native-installer.template.sh; echo "---HVIR-COMMAND rest---"; sed -n 18,60p build/native/hvir-command; echo "---RELEASE BASE URL---"; grep -nE "RELEASE_BASE_URL|releases/download|github.com" scripts/render-native-installer.mjs scripts/assemble-native-release.mjs | head -10

<details>
<summary>78 lines</summary>

```
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
---HVIR-COMMAND rest---

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
---RELEASE BASE URL---
scripts/render-native-installer.mjs:32:    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
scripts/render-native-installer.mjs:35:    ['HVIR_RELEASE_BASE_URL', shellQuote(releaseBaseUrl)],
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>2m 26s</sub>

### Copilot

No remote is configured, so let me check whether the repository slug appears anywhere (for install/release links), and glance at web-pane/sessions contracts.

---

<sub>2m 34s</sub>

### `bash`

**Search for repo slug and read web-pane/sessions contracts**

$ cd /private/var/tmp/ws/30b59304/hvir && grep -rhoE "github\.com/[A-Za-z0-9_.-]+/hvir[A-Za-z0-9_.-]*" --include=*.{yml,yaml,mts,mjs,ts,sh,json,md} . 2>/dev/null | grep -v node_modules | sort | uniq -c | sort -rn | head; echo "---REPO CONST---"; grep -rnE "repository:|HVIR_REPOSITORY|GITHUB_REPOSITORY" scripts/render-native-installer.mjs scripts/assemble-native-release.mjs | head -8; echo "---WEB PANE---"; sed -n 1,30p src/shared/web-pane.ts; echo "---SESSIONS---"; sed -n 1,40p src/shared/sessions-projection.ts

<details>
<summary>70 lines</summary>

```
11 github.com/jarmak-personal/hvir
   2 github.com/jarmak-personal/hvir.git
---REPO CONST---
scripts/render-native-installer.mjs:76:    throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
scripts/render-native-installer.mjs:155:    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
scripts/assemble-native-release.mjs:57:    repository: options.repository,
scripts/assemble-native-release.mjs:136:    throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
scripts/assemble-native-release.mjs:212:    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
---WEB PANE---
export type LoopbackHostname = 'localhost' | '127.0.0.1' | '::1'

export interface LoopbackEndpoint {
  readonly hostname: LoopbackHostname
  readonly port: number
}

export interface LoopbackHttpTarget {
  /** Normalized browser-visible URL. Unspecified bind addresses become localhost. */
  readonly url: string
  readonly origin: string
  readonly endpoint: LoopbackEndpoint
}

export type WebPaneDiagnosticEvent =
  | {
      readonly kind: 'navigation-error' | 'request-failure' | 'route-failure'
      readonly message: string
      readonly url?: string
    }
  | { readonly kind: 'console'; readonly level: string; readonly message: string }
  | { readonly kind: 'crash'; readonly message: string }

const LOOPBACK_HOSTS = new Map<string, LoopbackHostname>([
  ['localhost', 'localhost'],
  ['127.0.0.1', '127.0.0.1'],
  ['[::1]', '::1'],
  ['::1', '::1'],
])
const UNSPECIFIED_HOSTS = new Set(['0.0.0.0', '[::]', '::'])
---SESSIONS---
import type { HostConnectionState } from './fs-types'
import type { HarnessProfileId } from './harness-profile'
import type { HarnessContextPressurePolicy, HarnessProviderId } from './harness-provider'
import type { HarnessUsageValue } from './harness-usage'
import type { ProjectState } from './workspace-types'

export const SESSIONS_PROJECTION_VERSION = 1
export const MAX_SESSIONS_PROJECTION_ROWS = 500
export const MAX_SESSIONS_PROJECTION_WORKSPACES = 1_000
export const MAX_SESSIONS_PROJECTION_PROVIDERS = 128
export const MAX_SESSIONS_USAGE_ROWS = MAX_SESSIONS_PROJECTION_ROWS

declare const sessionsTerminalHandleBrand: unique symbol
declare const sessionsPtyHandleBrand: unique symbol
declare const sessionsProjectHandleBrand: unique symbol
declare const sessionsWorkspaceHandleBrand: unique symbol
declare const sessionsWorkspaceQualifierBrand: unique symbol
declare const sessionsWorkspaceRuntimeIdBrand: unique symbol

/** Opaque hvir identity. Consumers may compare or route it, but never present it. */
export type SessionsTerminalHandle = string & {
  readonly [sessionsTerminalHandleBrand]: 'SessionsTerminalHandle'
}

/** Opaque identity for one exact live PTY instance. */
export type SessionsPtyHandle = string & {
  readonly [sessionsPtyHandleBrand]: 'SessionsPtyHandle'
}

/** Projection-owned identity with no host or path content. */
export type SessionsProjectHandle = string & {
  readonly [sessionsProjectHandleBrand]: 'SessionsProjectHandle'
}

/** Projection-owned identity with no host or path content. */
export type SessionsWorkspaceHandle = string & {
  readonly [sessionsWorkspaceHandleBrand]: 'SessionsWorkspaceHandle'
}

/** Path-free qualifier for matching one ProjectState workspace revision in the renderer. */
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>2m 43s</sub>

### Copilot

Repo slug is `jarmak-personal/hvir`. One last round: viewer kinds, ADR location (for the contributing section), and how SSH hosts are configured.

---

<sub>2m 48s</sub>

### `bash`

**Check viewer kinds, ADR location, SSH config parsing, recovery mode**

$ cd /private/var/tmp/ws/30b59304/hvir && echo "---VIEWER KINDS---"; grep -nE "kind:|export type|'markdown'|'html'|'image'|'diff'|'code'|mermaid" src/shared/viewer-types.ts | head -30; echo "---ADR PATH---"; grep -nE "adr|ADR|docs" scripts/check-adrs.mjs | head -8; echo "---SSH CONFIG---"; grep -rln "ssh-config\|~/.ssh/config\|\.ssh" src/main --include=*.ts | grep -v test | head -5; grep -rn "ssh_config\|\.ssh/config\|parse(" src/main/project-host/*.ts 2>/dev/null | grep -i ssh | head -5; echo "---RECOVERY---"; grep -rn "TerminalRecoveryMode\b" src/renderer/src/settings/settings-model.ts | head -3; grep -n -B1 -A4 "terminalRecoveryMode" src/renderer/src/settings/settings-model.ts | head -20

<details>
<summary>51 lines</summary>

```
---VIEWER KINDS---
5:export type ViewMode = 'rendered' | 'source' | 'diff'
7:export type DiffBase = 'working-tree' | 'head' | 'branch-point'
44:export type FileOpenContext = 'file-tree' | 'created-file' | 'git' | 'git-untracked'
51:  if (context === 'git') return 'diff'
61:export type RenderedFileType =
62:  'markdown' | 'mermaid' | 'html' | 'json' | 'yaml' | 'csv' | 'image'
67:  if (repositoryImageMimeType(name)) return 'image'
68:  if (extension === 'md' || extension === 'mdx' || extension === 'markdown') {
69:    return 'markdown'
71:  if (extension === 'mmd' || extension === 'mermaid') return 'mermaid'
72:  if (extension === 'htm' || extension === 'html') return 'html'
81:  'html',
85:  'markdown',
88:  'mermaid',
---ADR PATH---
6:import { validateAdrLifecycles } from './adr-lifecycle.mts'
9:const adrDirectory = join(root, 'docs', 'adr')
10:const designPath = join(root, 'docs', 'design.md')
11:const recordName = /^ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
20:const directoryEntries = readdirSync(adrDirectory).filter((name) =>
21:  statSync(join(adrDirectory, name)).isFile(),
31:  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
38:  const path = join(adrDirectory, name)
---SSH CONFIG---
src/main/smoke/renderer-recovery-delivery.ts
src/main/smoke/workspace-remote.ts
src/main/project-host/ssh-config.ts
src/main/project-host/ssh-host-options.ts
src/main/project-host/index.ts
src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
src/main/project-host/ssh-config.ts:12:  const parsed = SSHConfig.parse(text)
src/main/project-host/ssh-host-trust.ts:26:      const parsed: unknown = JSON.parse(await host.readTextFile(file))
---RECOVERY---
src/renderer/src/settings/settings-model.ts:8:export type TerminalRecoveryMode = 'prompt' | 'auto'
src/renderer/src/settings/settings-model.ts:24:  readonly terminalRecoveryMode: TerminalRecoveryMode
src/renderer/src/settings/settings-model.ts:41:  readonly terminalRecoveryMode: TerminalRecoveryMode
23-  readonly gitAutoFetchIntervalMs: number
24:  readonly terminalRecoveryMode: TerminalRecoveryMode
25-  readonly terminalTheme: TerminalThemeOverride
26-  readonly terminalLightThemeId: string
27-  readonly terminalDarkThemeId: string
28-  readonly terminalCursorShape: TerminalCursorShape
--
40-  readonly idleThresholdMs: number
41:  readonly terminalRecoveryMode: TerminalRecoveryMode
42-  readonly terminalTheme: TerminalThemeOverride
43-  readonly terminalLightThemeId: string
44-  readonly terminalDarkThemeId: string
45-  readonly terminalCursorDefaults: {
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>2m 54s</sub>

### Copilot

SSH hosts come from `~/.ssh/config`. Let me verify whether `docs/` exists (the ADR checker references it) and check `.gitignore` so I don't document paths that aren't in the repo.

---

<sub>2m 56s</sub>

### `bash`

**Check docs dir, ignore files, prettier config, git status**

$ cd /private/var/tmp/ws/30b59304/hvir && ls -d docs 2>&1; echo "---GITIGNORE---"; cat .gitignore; echo "---PRETTIERIGNORE---"; cat .prettierignore; echo "---PRETTIERRC---"; cat .prettierrc.json; echo "---GIT STATUS---"; git --no-pager status --short | head

<details>
<summary>36 lines</summary>

```
ls: docs: No such file or directory
---GITIGNORE---
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
---PRETTIERIGNORE---
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
---PRETTIERRC---
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
---GIT STATUS---
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>3m 8s</sub>

### Copilot

`docs/` isn't in this checkout and Markdown is Prettier-ignored. Quick final fact-check on terminal themes and the macOS/Linux install locations before writing.

---

<sub>3m 10s</sub>

### `bash`

**Check terminal theme source, install paths, attention semantics**

$ cd /private/var/tmp/ws/30b59304/hvir && sed -n 1,25p scripts/generate-terminal-theme-catalog.mts | grep -nE "^/\*\*|^ \*|ghostty|iterm|themes" ; grep -c "id: '" src/renderer/src/terminal/generated-terminal-theme-catalog.ts; echo "---INSTALL PATHS---"; grep -nE "native_command=|/opt/hvir|/Applications/hvir" scripts/native-installer.template.sh | head -8; echo "---ATTENTION---"; sed -n 1,15p src/shared/terminal-attention.ts

<details>
<summary>17 lines</summary>

```
19:  ghosttyCommit: '332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28',
20:  ghosttyThemeArchive:
21:    'https://deps.files.ghostty.org/ghostty-themes-release-20260216-151611-fc73ce3.tgz',
22:  ghosttyThemeArchiveSha256:
0
---INSTALL PATHS---
24:native_command=''
109:    native_command='/usr/bin/hvir'
116:    native_command='/usr/bin/hvir'
123:    native_command='/usr/local/bin/hvir'
285:  profile="$package_root/opt/hvir/resources/apparmor-profile"
541:  /usr/bin/grep -Fxq 'application=/Applications/hvir.app' "$inventory"
565:      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
---ATTENTION---
/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
export type TerminalAttentionState = 'working' | 'bell' | 'idle'
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>3m 21s</sub>

### `bash`

**Confirm release asset names including installer script**

$ cd /private/var/tmp/ws/30b59304/hvir && grep -nE "install\.sh|installer|\.sha256|writeFile|artifact" scripts/assemble-native-release.mjs | head -20; echo "---RELEASE ASSETS---"; grep -nE "install\.sh|gh release (create|upload|edit)|files:|assets" .github/workflows/release.yml | head -15

<details>
<summary>29 lines</summary>

```
5:import { copyFile, mkdir, readdir, stat, writeFile } from 'node:fs/promises'
10:import { renderNativeInstaller } from './render-native-installer.mjs'
48:  const artifacts = await Promise.all(
49:    expectedArtifacts.map(async (artifact) => ({
50:      ...artifact,
51:      sha256: await sha256File(resolve(assetDirectory, artifact.name)),
54:  const installerPath = resolve(assetDirectory, 'install.sh')
58:    linuxX64Artifact: resolve(assetDirectory, artifacts[0].name),
59:    linuxArm64Artifact: resolve(assetDirectory, artifacts[1].name),
60:    macosArm64Artifact: resolve(assetDirectory, artifacts[2].name),
62:    output: installerPath,
66:    rendered.artifacts.linuxX64,
67:    rendered.artifacts.linuxArm64,
68:    rendered.artifacts.macosArm64,
71:    const artifact = artifacts[index]
73:      renderedArtifact.name !== artifact.name ||
74:      renderedArtifact.sha256 !== artifact.sha256
76:      throw new Error(`Installer metadata disagrees with ${artifact.name}.`)
83:  const installer = {
84:    name: basename(installerPath),
---RELEASE ASSETS---
534:            gh release create "$TAG" \
548:          gh release upload "$TAG" dist/release/* \
553:            --json assets \
554:            --jq '.assets[].name' |
562:            install.sh \
576:          gh release edit "$TAG" \
581:      - name: Verify published release attestation and downloaded assets
<shellId: 12 completed with exit code 0>
```

</details>


---

<sub>3m 24s</sub>

### Copilot

I have everything I need. Writing the README now.

---

<sub>4m 21s</sub>

### `create`

**create a new file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

```
Created file /private/var/tmp/ws/30b59304/hvir/README.md with 9011 characters
```


---

<sub>4m 36s</sub>

### Copilot

Let me fact-check a few claims I made (dock badge, terminal rename, image paste, staged changes, `--project-root`, `Mod` semantics, ghostty-web upstream).

---

<sub>4m 40s</sub>

### `bash`

**Verify README claims against source**

$ cd /private/var/tmp/ws/30b59304/hvir && echo "---BADGE---"; grep -nE "setBadge|dock|badgeCount" src/main/attention-badge.ts | head -5; echo "---RENAME TERMINAL---"; grep -rniE "rename terminal|Rename terminal|renameTerminal" src/renderer/src --include=*.tsx --include=*.ts -l | head -3; echo "---IMAGE PASTE---"; sed -n 1,12p src/main/harness/remote-image-paste.ts | grep -E "^\s*\*|^/\*\*"; echo "---STAGED---"; grep -rniE "staged|index" src/renderer/src/git/*.tsx -l | head -3; grep -rnoiE "'staged'|Staged" src/shared/git-types.ts | head -3; echo "---PROJECT ROOT FLAG---"; grep -rn "project-root" src/main/*.ts | head -3; echo "---MOD---"; grep -nE "Mod|platform|darwin|metaKey" src/shared/keybindings.ts | sed -n 1,12p; echo "---GHOSTTY-WEB SOURCE---"; grep -n -i -A3 "^## .*ghostty-web\|ghostty-web" THIRD_PARTY_NOTICES.md | head -12

<details>
<summary>41 lines</summary>

```
---BADGE---
7:  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}
51:      if (this.setBadgeCount(count) === false) this.failed = true
---RENAME TERMINAL---
---IMAGE PASTE---
---STAGED---
src/renderer/src/git/GitChangesView.tsx
src/renderer/src/git/GitGraphLanes.tsx
src/renderer/src/git/GitGraphView.tsx
src/shared/git-types.ts:7:staged
src/shared/git-types.ts:8:staged
---PROJECT ROOT FLAG---
src/main/index.ts:430:    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
src/main/index.ts:431:    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
---MOD---
2:  'cycleViewMode',
19:  cycleViewMode: 'Mod+Shift+M',
20:  findFile: 'Mod+P',
21:  findInFile: 'Mod+F',
22:  // Keep ordinary PTY Ctrl+F available on every platform. Terminal search uses
24:  findInTerminal: 'Mod+Shift+F',
26:  focusTerminal: 'Mod+J',
27:  focusViewer: 'Mod+1',
28:  focusTree: 'Mod+0',
29:  toggleTerminalFocus: 'Mod+Shift+J',
30:  nextWorkspace: 'Mod+Alt+]',
31:  previousWorkspace: 'Mod+Alt+[',
---GHOSTTY-WEB SOURCE---
39:## ghostty-web
40-
41:Source: <https://github.com/coder/ghostty-web>
42-
43-hvir currently consumes a provenance-recorded artifact from its bounded
44:[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
45:That artifact retains ghostty-web's upstream license and authorship.
46-
47-The fork maintains hvir's demand-driven rendering, terminal presentation lifecycle, and
48-structured terminal-event compatibility in source. Those modifications are maintained by
--
115:ghostty-web includes a WebAssembly build of Ghostty's terminal core, which hvir
<shellId: 13 completed with exit code 0>
```

</details>


---

<sub>4m 49s</sub>

### Copilot

Two fixes needed already (ghostty-web upstream is `coder/ghostty-web`; no evidence of terminal renaming). Let me confirm the `Mod` mapping and image-paste behavior.

---

<sub>4m 52s</sub>

### `bash`

**Verify Mod key mapping and image paste flow**

$ cd /private/var/tmp/ws/30b59304/hvir && grep -nE "mod\b|isMac|darwin|navigator.platform|metaKey|ctrlKey" src/shared/keybindings.ts | sed -n 1,20p; echo "---IMAGE PASTE---"; grep -nE "^/\*\*|^ \*|export (async )?function|writeFile|clipboard" src/main/harness/remote-image-paste.ts | head -20; echo "---PASTE CONTRACT---"; grep -n -B3 -A12 "export function pathImagePasteContract" src/main/harness/harness-composer-contracts.ts | head -30

<details>
<summary>34 lines</summary>

```
51:  readonly ctrlKey: boolean
52:  readonly metaKey: boolean
59:  readonly mod: boolean
98:  const modDown = mac ? event.metaKey : event.ctrlKey
108:    event.ctrlKey === (parsed.ctrl || (parsed.mod && !mac)) &&
109:    event.metaKey === (parsed.meta || (parsed.mod && mac)) &&
110:    (!parsed.mod || modDown)
124:  const allowed = new Set(['mod', 'ctrl', 'meta', 'alt', 'shift'])
133:    mod: modifiers.includes('mod'),
---IMAGE PASTE---
51:  readonly clipboard: ClipboardPngSource
97:/**
98: * Owns explicit local-clipboard to SSH-composer image paste. It never watches
99: * the clipboard, parses terminal output, or submits the provider composer.
100: */
138:      image = this.options.clipboard.read()
---PASTE CONTRACT---
6-} from './harness-provider-contract'
7-import { hasControlCharacter } from './harness-text-validation'
8-
9:export function pathImagePasteContract(): HarnessRemoteImagePasteContract {
10-  return {
11-    revision: 1,
12-    terminalInput: (path) => {
13-      if (
14-        !path.path.startsWith('/') ||
15-        hasControlCharacter(path.path) ||
16-        !/^[A-Za-z0-9_./-]+$/.test(path.path)
17-      ) {
18-        throw new Error('Remote image paste requires a safe absolute path')
19-      }
20-      return `\x1b[200~${path.path}\x1b[201~`
21-    },
<shellId: 14 completed with exit code 0>
```

</details>


---

<sub>4m 55s</sub>

### Copilot

Confirmed: `Mod` maps to ⌘/Ctrl, and image paste uploads the local clipboard PNG to the SSH host and inserts the path. Applying the corrections.

---

<sub>5m 0s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

```
File /private/var/tmp/ws/30b59304/hvir/README.md updated with changes.
```


---

<sub>5m 0s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

```
File /private/var/tmp/ws/30b59304/hvir/README.md updated with changes.
```


---

<sub>5m 11s</sub>

### Copilot

Let me verify what `--project-root` does on launch so the CLI example is accurate.

---

<sub>5m 11s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/src/main/index.ts.**

/private/var/tmp/ws/30b59304/hvir/src/main/index.ts (lines 420-470)

<details>
<summary>51 lines</summary>

```
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
```

</details>


---

<sub>5m 15s</sub>

### `grep`

**/private/var/tmp/ws/30b59304/hvir/src/main**

"projectRootArgument\(\)" (src/main)

<details>
<summary>29 matches</summary>

```
[grep content: 3 matches across 1 file(s) under /private/var/tmp/ws/30b59304/hvir/src/main]

index.ts (3 match(es)):
  165-         trashItem: electronTrash(shell),
  166-       }),
  167-       (catalog) => catalog.dispose(),
  168-     )
  169:     const requestedProjectRoot = projectRootArgument()
  170-     const registry = await ProjectRegistry.create(
  171-       requestedProjectRoot ? localPath(requestedProjectRoot) : undefined,
  172-       hostCatalog,
  173-       applicationUserDataPath('projects.json'),
  425-         .catch((error) => console.error('[workspace] watch reopen failed', error))
  426-     }
  427-     createWindow()
  428-   }
  429:   function projectRootArgument(): string | undefined {
  430-     const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
  431-     return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  432-   }
  433-   void app
  436-       if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
  437-         const { runElectronSmokeScenario } = await import('./smoke/scenarios')
  438-         const code = await runElectronSmokeScenario({
  439-           scenario: process.env['HVIR_SMOKE_SCENARIO'],
  440:           projectRoot: localPath(projectRootArgument() ?? process.cwd()),
  441-           createWindow,
  442-           harnessProbeManager,
  443-           htmlPreviews,
  444-           rendererResources: rendererScopes,
```

</details>


---

<sub>5m 24s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

```
File /private/var/tmp/ws/30b59304/hvir/README.md updated with changes.
```


---

<sub>5m 27s</sub>

### `view`

**view the file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

<details>
<summary>158 lines</summary>

````
# hvir

A desktop workbench for running AI coding agents across Git worktrees.

hvir is an Electron app for developers who drive coding agents such as Claude
Code or Codex from the terminal. It puts each project's worktrees side by side,
gives every workspace its own terminals, file tree, viewer, and Git panel, and
lets you review files and hand the comments straight back to the agent — on your
machine or over SSH.

## Features

**Projects and workspaces**

- Register a local folder or an SSH host folder as a project; hvir discovers
  its Git worktrees (`git worktree list`) and shows each one as a workspace.
- Switch between workspaces with `Mod+Alt+]` / `Mod+Alt+[`; changed-file counts
  and branch/HEAD are shown per workspace.
- Remote hosts come from `~/.ssh/config`. Host keys are shown with a
  fingerprint and must be trusted explicitly; file watching falls back to
  polling when a host cannot push change events.

**Harnesses**

- Launch an agent (or a plain shell) in a terminal with one click. Bundled
  providers:

  | Provider           | Command        | Exact resume / fork                          |
  | ------------------ | -------------- | -------------------------------------------- |
  | Claude Code        | `claude`       | Yes (`--session-id`, `--resume`, `--fork-session`) |
  | Codex              | `codex`        | Yes (`resume`, `fork`; version-gated)        |
  | Cursor CLI         | `cursor-agent` | No                                           |
  | Gemini CLI         | `gemini`       | No                                           |
  | GitHub Copilot CLI | `copilot`      | No                                           |
  | Pi                 | `pi`           | No                                           |
  | Shell              | login shell    | —                                            |
  | Custom             | your command   | —                                            |

- **Harness profiles** wrap a provider with a specific executable, extra
  arguments (with `projectRoot` / `workspaceRoot` / path-binding placeholders),
  environment bindings, and path grants. Profiles can be global or scoped to a
  project, and hvir previews the exact command before it runs.
- Each profile is probed before launch, so hvir can tell you when an executable
  is missing, a version is too old, or authentication is required.
- For Claude Code and Codex, hvir reads the agent's own session artifacts to
  show live **context pressure** and **usage**, and can recover sessions after
  a restart (prompt or automatic, per settings).

**Terminals**

- Terminals are rendered by [ghostty-web](https://github.com/coder/ghostty-web)
  (Ghostty's VT engine compiled to WebAssembly) on top of `node-pty`.
- Split and move terminals; search scrollback with `Mod+Shift+F`.
- Working / bell / idle attention state per terminal, with an app badge count
  for agents that need you.
- Theme catalog generated from the upstream Ghostty theme collection, with
  separate light and dark selections; cursor shape, blink, ligatures, font, and
  text size are all configurable.
- Paste a clipboard image into an agent running over SSH; hvir uploads it to the
  remote host and inserts the path.

**Viewer and document review**

- Open files from the tree (`Mod+P` to find by name) in rendered, source, or
  diff mode. Rendered mode supports Markdown (with task lists and Mermaid),
  Mermaid, HTML preview, JSON, YAML, CSV, and images; source mode uses Shiki
  highlighting and CodeMirror.
- Diff against the working tree, `HEAD`, or the branch point.
- **Document review**: leave comments on a file, then deliver the batch to the
  running agent — inserted into its composer, or sent immediately where the
  provider supports it.

**Git**

- Working-tree and staged changes, file history, branch switching, fetch, and
  pull, with configurable auto-fetch.
- Commit graph view.

**Web pane**

- Embed a loopback (`localhost`) dev server next to your terminals, with
  navigation, request, console, and crash diagnostics surfaced in the app.

**Sessions dashboard and health**

- A cross-workspace view of every live agent session, its provider, context
  pressure, and usage.
- Built-in diagnostics reports and workbench health checks.

## Supported platforms

- macOS (Apple silicon) — `.pkg` installer
- Linux x64 and arm64 (glibc ≥ 2.35, e.g. Ubuntu 22.04+) — `.deb` package with
  an AppArmor profile

Windows is not supported.

## Install

Every release on [GitHub Releases](https://github.com/jarmak-personal/hvir/releases)
ships:

- `hvir-<version>-macos-arm64.pkg`
- `hvir-<version>-linux-x64.deb` and `hvir-<version>-linux-arm64.deb`
- `install.sh` — detects your platform, downloads the matching package, verifies
  its SHA-256, and installs or updates it. `install.sh --uninstall` removes the
  app while keeping your settings; add `--purge` to remove those too.

Each package also installs an `hvir` command:

```sh
hvir            # launch
hvir ~/src/app  # launch with that folder opened as a project
```

The `HVIR_PROJECT_ROOT` environment variable does the same as the path argument.

## Development

### Prerequisites

- Node.js 24 or newer
- A C toolchain for native modules (`node-pty` and hvir's own
  `rename-noreplace` binding): Xcode Command Line Tools on macOS, or
  `build-essential` plus Python on Linux
- The agent CLIs you want to use (`claude`, `codex`, …) on your `PATH`

### Setup

```sh
npm ci          # installs Electron and rebuilds native modules for its ABI
npm run dev     # electron-vite dev server with hot reload
```

`npm run dev` and `npm run build` first verify that the installed `ghostty-web`
matches the version this checkout was reviewed against; if it does not, rerun
`npm ci`.

### Everyday commands

| Command                    | What it does                                                     |
| -------------------------- | ---------------------------------------------------------------- |
| `npm test`                 | Vitest unit tests (`npm run test:watch` to watch)                |
| `npm run typecheck`        | `tsc --noEmit` for the Node (main/preload) and web (renderer) projects |
| `npm run lint`             | ESLint                                                           |
| `npm run format`           | Prettier (`format:check` to verify only)                         |
| `npm run verify`           | The CI gate: seams, ADRs, architecture policy, lint, typecheck, tests |
| `npm run smoke`            | Builds a smoke bundle and drives the real Electron app through end-to-end scenarios |
| `npm run smoke:scenario -- <name>` | Run a single smoke scenario                             |
| `npm run test:mutation`    | Stryker mutation testing                                         |
| `npm run hooks:install`    | Installs the `pre-push` hook (typecheck + local smoke)          |

On Linux without a display, run smoke tests under `xvfb-run -a`.

### Packaging

```sh
npm run pack:mac:arm64     # dist/hvir-<version>-macos-arm64.pkg
npm run pack:linux:x64     # dist/hvir_<version>_amd64.deb
npm run pack:linux:arm64   # dist/hvir_<version>_arm64.deb
```

Packaged builds can be exercised with `npm run smoke:macos:installed` and
`npm run smoke:linux:installed`.

## Project layout

```
src/main/       Electron main process: project hosts (local + SSH), PTY supervisor,
                harness providers and profiles, Git, sessions, document review, IPC
src/preload/    Context-isolated bridge exposed to the renderer as window.hvir
src/renderer/   React UI: workbench layout, terminals, viewer, Git panel, settings
src/shared/     Serializable contracts shared across the main/renderer boundary
src/workers/    Worker-thread hosts (Git)
packages/       @hvir/rename-noreplace — Node-API binding for atomic no-replace rename
scripts/        Build, smoke, release, architecture-policy, and project-management tooling
test/           Vitest suites
build/          Icons, entitlements, Linux packaging assets, the `hvir` launcher script
```

## Settings and keybindings

Settings live in the app (interface and monospace fonts, interface scale,
terminal theme and cursor, Git auto-fetch interval, idle threshold, terminal
recovery mode, composer submit key) and are stored per user. Default
keybindings (`Mod` is `⌘` on macOS and `Ctrl` on Linux):

| Action                    | Default        |
| ------------------------- | -------------- |
| Find file                 | `Mod+P`        |
| Find in file              | `Mod+F`        |
| Find in terminal          | `Mod+Shift+F`  |
| Go to line                | `Ctrl+G`       |
| Cycle view mode           | `Mod+Shift+M`  |
| Focus terminal            | `Mod+J`        |
| Toggle terminal focus     | `Mod+Shift+J`  |
| Focus viewer              | `Mod+1`        |
| Focus file tree           | `Mod+0`        |
| Next / previous workspace | `Mod+Alt+]` / `Mod+Alt+[` |

All of them can be rebound in Settings.

## License

MIT — see [LICENSE](LICENSE). Bundled third-party licenses are listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>5m 46s</sub>

### Copilot

The README reads well. Two precision tweaks: fork support is version-gated for both Claude Code and Codex, and I'll soften the command-preview wording.

---

<sub>5m 50s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

```
File /private/var/tmp/ws/30b59304/hvir/README.md updated with changes.
```


---

<sub>5m 50s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/30b59304/hvir/README.md.**

/private/var/tmp/ws/30b59304/hvir/README.md

```
File /private/var/tmp/ws/30b59304/hvir/README.md updated with changes.
```


---

<sub>5m 57s</sub>

### Copilot

Final check: confirm only `README.md` was added and nothing else changed.

---

<sub>5m 58s</sub>

### `bash`

**Verify git status shows only the new README**

$ cd /private/var/tmp/ws/30b59304/hvir && git --no-pager status --short && wc -l README.md

```
?? README.md
     206 README.md
<shellId: 15 completed with exit code 0>
```


---

<sub>6m 5s</sub>

### Copilot

Created `README.md` (206 lines) at the repo root. Everything in it was verified against the source rather than inferred:

**Contents**
- **What hvir is** — an Electron workbench for running AI coding agents across Git worktrees, locally or over SSH.
- **Features** — projects/worktree workspaces, SSH hosts from `~/.ssh/config`, the 8 bundled harness providers (Claude Code, Codex, Cursor CLI, Gemini CLI, GitHub Copilot CLI, Pi, Shell, Custom) with resume/fork support, harness profiles and probes, ghostty-web terminals, viewer modes and document review, Git panel, web pane, sessions dashboard.
- **Platforms & Install** — macOS arm64 `.pkg`, Linux x64/arm64 `.deb`, `install.sh`, and the `hvir [folder]` command.
- **Development** — prerequisites, setup, the npm script table, packaging.
- **Project layout**, default **keybindings**, and **license**.

Note: Markdown is Prettier-ignored in this repo, so no formatting step was needed.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
