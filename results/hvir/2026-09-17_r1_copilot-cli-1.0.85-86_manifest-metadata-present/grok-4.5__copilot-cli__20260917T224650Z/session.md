# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `1c5bb81c-5628-4780-b87b-13f6422ccc80`  
> - **Started:** 9/17/2026, 6:47:04 PM  
> - **Duration:** 2m 31s  
> - **Exported:** 9/17/2026, 6:49:36 PM  

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

**List project structure and key files**

$ ls -la && find . -maxdepth 3 -type f ! -path './.git/*' | head -80

<details>
<summary>110 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 18:47 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 18:46 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 18:47 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 18:46 .githooks
drwxr-xr-x@   5 air-jarmak  wheel     160 Sep 17 18:46 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 18:46 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 18:46 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 18:46 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 18:46 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 18:46 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 18:46 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 18:46 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 18:46 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 18:46 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 18:46 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 18:46 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    7275 Sep 17 18:46 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 18:46 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 18:46 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 18:46 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 18:46 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 18:46 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 18:46 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 18:46 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 18:46 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 18:46 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 18:46 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 18:46 vitest.config.ts
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
./test/terminal-semantic-regions.test.ts
./test/harness-shell-environment.test.ts
./test/terminal-context-menu.test.tsx
./test/files-interactions.test.tsx
./test/project-coordinator.test.ts
./test/project-pr-workflow-security.test.ts
./test/electron-process-metrics.test.ts
./test/sessions-terminal-ssh.test.tsx
./test/terminal-runtime.test.tsx
./test/verified-project-copy.test.ts
./test/harness-usage-artifact.test.ts
./test/viewer-tab-close-confirmation.test.tsx
./test/terminal-fork-runtime.test.tsx
./test/viewer-workload-policy.test.ts
./test/token-migration-plan.test.ts
./test/terminal-file-link.test.ts
./test/terminal-attention.test.ts
./test/terminal-ipc-launch-probe.test.ts
./test/external-document-ipc.test.ts
./test/terminal-layout-controls.test.tsx
./test/project-token-fields.test.ts
./test/diagnostic-report.test.ts
./test/viewer-position-operation.test.ts
./test/retained-viewer-workspace-cache.test.ts
./test/smoke-image-paste-fallback.test.ts
./test/issue-lifecycle-guidance.test.ts
./test/smoke-recovery-delivery.test.ts
./test/workbench-command-listener.test.tsx
./test/web-pane-workspace.test.ts
./test/workspace-removal-coordinator.test.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### Copilot

Next I’ll read package metadata and source layout to capture purpose, scripts, and stack accurately.

---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/1fbf426b/hvir/package.json.**

/private/var/tmp/ws/1fbf426b/hvir/package.json

<details>
<summary>142 lines</summary>

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
```

</details>


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/1fbf426b/hvir/LICENSE.**

/private/var/tmp/ws/1fbf426b/hvir/LICENSE

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

**Inspect src, packages, scripts structure**

$ ls -la src packages scripts .github 2>/dev/null; ls src; ls packages 2>/dev/null; head -n 50 THIRD_PARTY_NOTICES.md 2>/dev/null

<details>
<summary>121 lines</summary>

```
.github:
total 8
drwxr-xr-x@  5 air-jarmak  wheel   160 Sep 17 18:46 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 17 18:47 ..
-rw-r--r--@  1 air-jarmak  wheel  1785 Sep 17 18:46 dependabot.yml
drwxr-xr-x@  3 air-jarmak  wheel    96 Sep 17 18:46 ISSUE_TEMPLATE
drwxr-xr-x@ 13 air-jarmak  wheel   416 Sep 17 18:46 workflows

packages:
total 0
drwxr-xr-x@  3 air-jarmak  wheel   96 Sep 17 18:46 .
drwxr-xr-x@ 28 air-jarmak  wheel  896 Sep 17 18:47 ..
drwxr-xr-x@  8 air-jarmak  wheel  256 Sep 17 18:46 rename-noreplace

scripts:
total 992
drwxr-xr-x@ 54 air-jarmak  wheel   1728 Sep 17 18:46 .
drwxr-xr-x@ 28 air-jarmak  wheel    896 Sep 17 18:47 ..
-rw-r--r--@  1 air-jarmak  wheel   5645 Sep 17 18:46 adr-lifecycle.mts
-rw-r--r--@  1 air-jarmak  wheel   7237 Sep 17 18:46 agent-work-checkpoint-store.mts
-rw-r--r--@  1 air-jarmak  wheel  10110 Sep 17 18:46 architecture-authorization.mts
-rw-r--r--@  1 air-jarmak  wheel   9985 Sep 17 18:46 architecture-github.mts
-rw-r--r--@  1 air-jarmak  wheel  12147 Sep 17 18:46 architecture-hotspots.json
-rw-r--r--@  1 air-jarmak  wheel    199 Sep 17 18:46 architecture-hotspots.mjs
-rw-r--r--@  1 air-jarmak  wheel   5474 Sep 17 18:46 architecture-hotspots.mts
-rw-r--r--@  1 air-jarmak  wheel  10192 Sep 17 18:46 architecture-inventory.mts
-rw-r--r--@  1 air-jarmak  wheel   6009 Sep 17 18:46 architecture-module-directions.mts
-rw-r--r--@  1 air-jarmak  wheel   9391 Sep 17 18:46 architecture-module-graph.mts
-rw-r--r--@  1 air-jarmak  wheel   9647 Sep 17 18:46 architecture-module-resolution.mts
-rw-r--r--@  1 air-jarmak  wheel  14540 Sep 17 18:46 architecture-policy.mts
-rw-r--r--@  1 air-jarmak  wheel   7680 Sep 17 18:46 architecture-wiring.mts
-rw-r--r--@  1 air-jarmak  wheel   1092 Sep 17 18:46 assemble-native-release.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   7281 Sep 17 18:46 assemble-native-release.mjs
-rw-r--r--@  1 air-jarmak  wheel   1569 Sep 17 18:46 capture-contributor-usage.mts
-rw-r--r--@  1 air-jarmak  wheel   6044 Sep 17 18:46 check-adrs.mjs
-rw-r--r--@  1 air-jarmak  wheel   6565 Sep 17 18:46 check-seams.sh
-rw-r--r--@  1 air-jarmak  wheel   5007 Sep 17 18:46 check-terminal-runtime.mts
-rw-r--r--@  1 air-jarmak  wheel   5650 Sep 17 18:46 ci-attempt-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel   2765 Sep 17 18:46 create-smoke-repository.sh
-rw-r--r--@  1 air-jarmak  wheel   8912 Sep 17 18:46 generate-terminal-theme-catalog.mts
-rw-r--r--@  1 air-jarmak  wheel   2943 Sep 17 18:46 ghostty-terminal-capability-profile.mts
drwxr-xr-x@ 10 air-jarmak  wheel    320 Sep 17 18:46 ghostty-web-update
-rw-r--r--@  1 air-jarmak  wheel   9851 Sep 17 18:46 inspect-packaged-runtime.mts
-rwxr-xr-x@  1 air-jarmak  wheel    634 Sep 17 18:46 install-git-hooks.sh
-rw-r--r--@  1 air-jarmak  wheel  11606 Sep 17 18:46 installed-harness-dialog-probe.mts
-rw-r--r--@  1 air-jarmak  wheel  15300 Sep 17 18:46 installed-startup-probe.mts
-rwxr-xr-x@  1 air-jarmak  wheel  20201 Sep 17 18:46 native-installer.template.sh
-rwxr-xr-x@  1 air-jarmak  wheel    177 Sep 17 18:46 phase8-gauntlet.sh
-rw-r--r--@  1 air-jarmak  wheel   1667 Sep 17 18:46 prepare-release-linux-package.mts
-rw-r--r--@  1 air-jarmak  wheel   8274 Sep 17 18:46 prepare-release-pr.mjs
drwxr-xr-x@ 50 air-jarmak  wheel   1600 Sep 17 18:46 project-management
-rw-r--r--@  1 air-jarmak  wheel   7581 Sep 17 18:46 real-host-ssh-contract.mts
-rw-r--r--@  1 air-jarmak  wheel    349 Sep 17 18:46 real-host-ssh.vite.config.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4022 Sep 17 18:46 record-macos-ssh-identity.sh
-rw-r--r--@  1 air-jarmak  wheel    190 Sep 17 18:46 release-changelog.d.mts
-rw-r--r--@  1 air-jarmak  wheel    767 Sep 17 18:46 release-changelog.mjs
-rw-r--r--@  1 air-jarmak  wheel   1759 Sep 17 18:46 release-github-evidence.mts
-rw-r--r--@  1 air-jarmak  wheel    870 Sep 17 18:46 render-native-installer.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   6841 Sep 17 18:46 render-native-installer.mjs
-rw-r--r--@  1 air-jarmak  wheel  15062 Sep 17 18:46 require-release-ci-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel  13943 Sep 17 18:46 run-linux-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel  18309 Sep 17 18:46 run-macos-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel   1955 Sep 17 18:46 run-macos-ssh-acceptance.sh
-rw-r--r--@  1 air-jarmak  wheel  29461 Sep 17 18:46 run-real-host-ssh-acceptance.mts
-rw-r--r--@  1 air-jarmak  wheel  23458 Sep 17 18:46 run-smoke-interruption.mts
-rw-r--r--@  1 air-jarmak  wheel  18307 Sep 17 18:46 run-smoke-scenarios.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4368 Sep 17 18:46 run-smoke.sh
-rw-r--r--@  1 air-jarmak  wheel  11657 Sep 17 18:46 smoke-failure-artifact.mts
-rw-r--r--@  1 air-jarmak  wheel   2216 Sep 17 18:46 smoke-import-boundary.mjs
-rw-r--r--@  1 air-jarmak  wheel  14010 Sep 17 18:46 validate-release-pr.mts

src:
total 0
drwxr-xr-x@  7 air-jarmak  wheel   224 Sep 17 18:46 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 17 18:47 ..
drwxr-xr-x@ 40 air-jarmak  wheel  1280 Sep 17 18:46 main
drwxr-xr-x@  5 air-jarmak  wheel   160 Sep 17 18:46 preload
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 18:46 renderer
drwxr-xr-x@ 39 air-jarmak  wheel  1248 Sep 17 18:46 shared
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 18:46 workers
main
preload
renderer
shared
workers
rename-noreplace
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

Source: <https://github.com/coder/ghostty-web>

hvir currently consumes a provenance-recorded artifact from its bounded
[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
That artifact retains ghostty-web's upstream license and authorship.

The fork maintains hvir's demand-driven rendering, terminal presentation lifecycle, and
structured terminal-event compatibility in source. Those modifications are maintained by
hvir contributors, not by Coder or the Ghostty project, and hvir consumes the resulting
immutable artifact without modifying it during installation.
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### Copilot

Gathering feature details from source layout and any existing docs so the README stays accurate.

---

<sub>11s</sub>

### `bash`

**Explore modules, workflows, and docs**

$ ls src/main src/renderer src/shared src/preload src/workers 2>/dev/null | head -120; ls .github/workflows; ls build 2>/dev/null | head -30; find . -name 'ADR*' -o -name '*.md' 2>/dev/null | grep -v node_modules | head -40

<details>
<summary>112 lines</summary>

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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>11s</sub>

### `grep`

**description|workbench|agentic|terminal|SSH|git**

"description|workbench|agentic|terminal|SSH|git" in src/renderer/**/*.{ts,tsx,md}

<details>
<summary>163 matches</summary>

```
[grep-paths: 147 path(s) under ./src/renderer/src; grouped by directory]

./src/renderer/src/terminal/ (58 path(s))
  TerminalContextMenu.tsx
  TerminalDeck.tsx
  TerminalMoveDialog.tsx
  TerminalRail.tsx
  TerminalRailCompact.tsx
  TerminalRecoveryDialog.tsx
  TerminalSearch.tsx
  TerminalSessionRuntimes.tsx
  TerminalView.tsx
  TerminalWorkspace.tsx
  TerminalWorkspaceCollection.tsx
  TerminalWorkspaceControls.tsx
  generated-terminal-theme-catalog.ts
  ghostty-terminal-events.ts
  ghostty-terminal-file-paste.ts
  ghostty-terminal-fit.ts
  ghostty-terminal-keyboard.ts
  ghostty-terminal-pane.ts
  terminal-attention.ts
  terminal-clipboard-osc.ts
  terminal-clipboard-write.ts
  terminal-context-menu-target.ts
  terminal-event-router.ts
  terminal-file-link.ts
  terminal-fork-policy.ts
  terminal-palette.ts
  terminal-pane-event-coordinator.ts
  terminal-pane-factory.ts
  terminal-pane.ts
  terminal-probe-policy.ts
  terminal-recovery-planner.ts
  terminal-runtime-interactions.ts
  terminal-runtime-launch.ts
  terminal-runtime-live-settings.ts
  terminal-runtime-options.ts
  terminal-runtime-presentation.ts
  terminal-runtime-registry.ts
  terminal-runtime.ts
  terminal-search-controller.ts
  terminal-semantic-regions.ts
  terminal-sessions-surface-owner.ts
  terminal-split-persistence.ts
  terminal-surface-attachment.ts
  terminal-theme-catalog.ts
  terminal-wheel.ts
  terminal-workspace-model.ts
  terminal-workspace-runtime-owner.ts
  use-terminal-attention-controller.ts
  use-terminal-context-menu.ts
  use-terminal-launch-menu-layout.ts
  use-terminal-pane-controller.ts
  use-terminal-persistence.ts
  use-terminal-profiles.ts
  use-terminal-recovery.ts
  use-terminal-session-commands.ts
  use-terminal-workspace-move.ts
  use-terminal-workspace-runtime.ts
  use-terminal-workspace-transfer.ts

./src/renderer/src/settings/ (17 path(s))
  ComposerSubmitConsentDialog.tsx
  HarnessProfileDialogs.tsx
  HarnessProfileEditor.tsx
  HarnessProfilesSettings.tsx
  SettingsActiveSection.tsx
  SettingsSection.tsx
  TerminalThemeGallery.tsx
  harness-profile-draft.ts
  harness-profile-editor-policy.ts
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/KeybindingsSettings.tsx
  sections/TerminalSettings.tsx
  settings-draft.ts
  settings-model.ts
  settings-navigation.ts
  settings.ts

./src/renderer/src/git/ (14 path(s))
  GitBranchControls.tsx
  GitChangesView.tsx
  GitGraphLanes.tsx
  GitGraphView.tsx
  GitHistoryView.tsx
  GitPanel.tsx
  commit-detail-client.ts
  git-graph-lane-metrics.ts
  git-rail-model.ts
  git-sync-coordinator.ts
  git-sync-status.ts
  use-git-commit-details.ts
  use-git-rail-controller.ts
  use-git-workspace.ts

./src/renderer/src/workbench/ (11 path(s))
  TerminalLayoutControls.tsx
  active-terminal-focus.ts
  use-renderer-ready.ts
  use-terminal-path-activation.ts
  use-workbench-commands.ts
  use-workbench-layout.ts
  use-workbench-overlays.ts
  workbench-command-router.ts
  workbench-layout-policy.ts
  workbench-overlay-model.ts
  workspace-pane-state.ts

./src/renderer/src/viewer/ (10 path(s))
  DiffView.tsx
  FileViewer.tsx
  TabStrip.tsx
  highlight.worker.ts
  markdown-extensions.ts
  markdown-renderer.ts
  shiki-grammar-registry.ts
  use-diff-inputs.ts
  use-source-blame.ts
  viewer-workspace-model.ts

./src/renderer/src/sessions/ (8 path(s))
  SessionsApplicationDestination.tsx
  SessionsOverview.tsx
  SessionsTerminalDetail.tsx
  sessions-overview-model.ts
  sessions-renderer-observation.ts
  sessions-terminal-detail-controller.ts
  sessions-terminal-surface.ts
  use-sessions-terminal-detail.ts

./src/renderer/src/workspaces/ (8 path(s))
  MissingWorkspaceNotice.tsx
  ProjectsBar.tsx
  SessionDialog.tsx
  SshPromptDialog.tsx
  WorkspaceCatalogDialogs.tsx
  project-session-model.ts
  project-session.ts
  workspace-session-actions.ts

./src/renderer/src/document-review/ (5 path(s))
  DocumentReviewControls.tsx
  DocumentReviewDeliveryPanel.tsx
  document-review-delivery-client.ts
  document-review-delivery-feedback.ts
  use-document-review-delivery.ts

./src/renderer/src/tree/ (4 path(s))
  DirectoryTree.tsx
  FileTree.tsx
  FilenameSearch.tsx
  git-ignore-refresh.ts

./src/renderer/src/ (3 path(s))
  App.tsx
  ErrorBoundary.tsx
  theme.ts

./src/renderer/src/dashboards/ (3 path(s))
  WebPane.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts

./src/renderer/src/diagnostics/ (2 path(s))
  DiagnosticReportDialog.tsx
  owned-capture-masks.ts

./src/renderer/src/health/ (2 path(s))
  WorkbenchHealthControl.tsx
  use-workbench-health.ts

./src/renderer/src/layout/ (2 path(s))
  PaneResizer.tsx
  workspace-layout-persistence.ts

[extensions: .ts=95, .tsx=52]
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/1fbf426b/hvir/electron-builder.yml.**

/private/var/tmp/ws/1fbf426b/hvir/electron-builder.yml

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

<sub>2m 14s</sub>

### Copilot

I have enough context—writing a concise README covering purpose, setup, scripts, and packaging.

---

<sub>2m 29s</sub>

### `create`

**create a new file at /private/var/tmp/ws/1fbf426b/hvir/README.md.**

/private/var/tmp/ws/1fbf426b/hvir/README.md

```
Created file /private/var/tmp/ws/1fbf426b/hvir/README.md with 3441 characters
```


---

<sub>2m 30s</sub>

### Copilot

Created `README.md` for **hvir** with:

- Project overview and feature list  
- Requirements and quick start  
- Main npm scripts and layout  
- Packaging, contributing, license, and links

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
