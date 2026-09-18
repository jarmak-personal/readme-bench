# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `84b05ae6-8cdd-4d05-8c85-05e0a8be393b`  
> - **Started:** 9/17/2026, 9:54:26 PM  
> - **Duration:** 35s  
> - **Exported:** 9/17/2026, 9:55:01 PM  

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

**List project structure and files**

$ ls -la && find . -maxdepth 3 -type f ! -path './.git/*' | head -80

<details>
<summary>110 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 21:54 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 21:54 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 21:54 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 21:54 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 21:54 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 21:54 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 21:54 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 21:54 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 21:54 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 21:54 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 21:54 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 21:54 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 21:54 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 21:54 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 21:54 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 21:54 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 17 21:54 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 21:54 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 21:54 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 21:54 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 21:54 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 21:54 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 21:54 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 21:54 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 21:54 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 21:54 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 21:54 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 21:54 vitest.config.ts
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

Next I’ll read package metadata and source layout to draft an accurate README.

---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/db743e3d/hvir/package.json.**

/private/var/tmp/ws/db743e3d/hvir/package.json

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

**view the file at /private/var/tmp/ws/db743e3d/hvir/LICENSE.**

/private/var/tmp/ws/db743e3d/hvir/LICENSE

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

$ ls -la src packages scripts .github 2>/dev/null; ls src; ls packages 2>/dev/null; head -100 THIRD_PARTY_NOTICES.md 2>/dev/null | head -30

<details>
<summary>104 lines</summary>

```
.github:
total 8
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 21:54 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 17 21:54 ..
-rw-r--r--@  1 air-jarmak  wheel  1785 Sep 17 21:54 dependabot.yml
drwxr-xr-x@ 13 air-jarmak  wheel   416 Sep 17 21:54 workflows

packages:
total 0
drwxr-xr-x@  3 air-jarmak  wheel   96 Sep 17 21:54 .
drwxr-xr-x@ 28 air-jarmak  wheel  896 Sep 17 21:54 ..
drwxr-xr-x@  8 air-jarmak  wheel  256 Sep 17 21:54 rename-noreplace

scripts:
total 992
drwxr-xr-x@ 54 air-jarmak  wheel   1728 Sep 17 21:54 .
drwxr-xr-x@ 28 air-jarmak  wheel    896 Sep 17 21:54 ..
-rw-r--r--@  1 air-jarmak  wheel   5645 Sep 17 21:54 adr-lifecycle.mts
-rw-r--r--@  1 air-jarmak  wheel   7237 Sep 17 21:54 agent-work-checkpoint-store.mts
-rw-r--r--@  1 air-jarmak  wheel  10110 Sep 17 21:54 architecture-authorization.mts
-rw-r--r--@  1 air-jarmak  wheel   9985 Sep 17 21:54 architecture-github.mts
-rw-r--r--@  1 air-jarmak  wheel  12147 Sep 17 21:54 architecture-hotspots.json
-rw-r--r--@  1 air-jarmak  wheel    199 Sep 17 21:54 architecture-hotspots.mjs
-rw-r--r--@  1 air-jarmak  wheel   5474 Sep 17 21:54 architecture-hotspots.mts
-rw-r--r--@  1 air-jarmak  wheel  10192 Sep 17 21:54 architecture-inventory.mts
-rw-r--r--@  1 air-jarmak  wheel   6009 Sep 17 21:54 architecture-module-directions.mts
-rw-r--r--@  1 air-jarmak  wheel   9391 Sep 17 21:54 architecture-module-graph.mts
-rw-r--r--@  1 air-jarmak  wheel   9647 Sep 17 21:54 architecture-module-resolution.mts
-rw-r--r--@  1 air-jarmak  wheel  14540 Sep 17 21:54 architecture-policy.mts
-rw-r--r--@  1 air-jarmak  wheel   7680 Sep 17 21:54 architecture-wiring.mts
-rw-r--r--@  1 air-jarmak  wheel   1092 Sep 17 21:54 assemble-native-release.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   7281 Sep 17 21:54 assemble-native-release.mjs
-rw-r--r--@  1 air-jarmak  wheel   1569 Sep 17 21:54 capture-contributor-usage.mts
-rw-r--r--@  1 air-jarmak  wheel   6044 Sep 17 21:54 check-adrs.mjs
-rw-r--r--@  1 air-jarmak  wheel   6565 Sep 17 21:54 check-seams.sh
-rw-r--r--@  1 air-jarmak  wheel   5007 Sep 17 21:54 check-terminal-runtime.mts
-rw-r--r--@  1 air-jarmak  wheel   5650 Sep 17 21:54 ci-attempt-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel   2765 Sep 17 21:54 create-smoke-repository.sh
-rw-r--r--@  1 air-jarmak  wheel   8912 Sep 17 21:54 generate-terminal-theme-catalog.mts
-rw-r--r--@  1 air-jarmak  wheel   2943 Sep 17 21:54 ghostty-terminal-capability-profile.mts
drwxr-xr-x@ 10 air-jarmak  wheel    320 Sep 17 21:54 ghostty-web-update
-rw-r--r--@  1 air-jarmak  wheel   9851 Sep 17 21:54 inspect-packaged-runtime.mts
-rwxr-xr-x@  1 air-jarmak  wheel    634 Sep 17 21:54 install-git-hooks.sh
-rw-r--r--@  1 air-jarmak  wheel  11606 Sep 17 21:54 installed-harness-dialog-probe.mts
-rw-r--r--@  1 air-jarmak  wheel  15300 Sep 17 21:54 installed-startup-probe.mts
-rwxr-xr-x@  1 air-jarmak  wheel  20201 Sep 17 21:54 native-installer.template.sh
-rwxr-xr-x@  1 air-jarmak  wheel    177 Sep 17 21:54 phase8-gauntlet.sh
-rw-r--r--@  1 air-jarmak  wheel   1667 Sep 17 21:54 prepare-release-linux-package.mts
-rw-r--r--@  1 air-jarmak  wheel   8274 Sep 17 21:54 prepare-release-pr.mjs
drwxr-xr-x@ 50 air-jarmak  wheel   1600 Sep 17 21:54 project-management
-rw-r--r--@  1 air-jarmak  wheel   7581 Sep 17 21:54 real-host-ssh-contract.mts
-rw-r--r--@  1 air-jarmak  wheel    349 Sep 17 21:54 real-host-ssh.vite.config.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4022 Sep 17 21:54 record-macos-ssh-identity.sh
-rw-r--r--@  1 air-jarmak  wheel    190 Sep 17 21:54 release-changelog.d.mts
-rw-r--r--@  1 air-jarmak  wheel    767 Sep 17 21:54 release-changelog.mjs
-rw-r--r--@  1 air-jarmak  wheel   1759 Sep 17 21:54 release-github-evidence.mts
-rw-r--r--@  1 air-jarmak  wheel    870 Sep 17 21:54 render-native-installer.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   6841 Sep 17 21:54 render-native-installer.mjs
-rw-r--r--@  1 air-jarmak  wheel  15062 Sep 17 21:54 require-release-ci-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel  13943 Sep 17 21:54 run-linux-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel  18309 Sep 17 21:54 run-macos-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel   1955 Sep 17 21:54 run-macos-ssh-acceptance.sh
-rw-r--r--@  1 air-jarmak  wheel  29461 Sep 17 21:54 run-real-host-ssh-acceptance.mts
-rw-r--r--@  1 air-jarmak  wheel  23458 Sep 17 21:54 run-smoke-interruption.mts
-rw-r--r--@  1 air-jarmak  wheel  18307 Sep 17 21:54 run-smoke-scenarios.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4368 Sep 17 21:54 run-smoke.sh
-rw-r--r--@  1 air-jarmak  wheel  11657 Sep 17 21:54 smoke-failure-artifact.mts
-rw-r--r--@  1 air-jarmak  wheel   2216 Sep 17 21:54 smoke-import-boundary.mjs
-rw-r--r--@  1 air-jarmak  wheel  14010 Sep 17 21:54 validate-release-pr.mts

src:
total 0
drwxr-xr-x@  7 air-jarmak  wheel   224 Sep 17 21:54 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 17 21:54 ..
drwxr-xr-x@ 40 air-jarmak  wheel  1280 Sep 17 21:54 main
drwxr-xr-x@  5 air-jarmak  wheel   160 Sep 17 21:54 preload
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 21:54 renderer
drwxr-xr-x@ 39 air-jarmak  wheel  1248 Sep 17 21:54 shared
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 21:54 workers
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### Copilot

Gathering feature details from the app source and config next.

---

<sub>10s</sub>

### `bash`

**List source directories**

$ ls src/main src/renderer src/shared src/preload src/workers 2>/dev/null; ls src/renderer 2>/dev/null; find src -maxdepth 3 -type d | head -80

<details>
<summary>136 lines</summary>

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
index.html
src
src
src/renderer
src/renderer/src
src/renderer/src/tree
src/renderer/src/settings
src/renderer/src/scrollbars
src/renderer/src/path-copy
src/renderer/src/development
src/renderer/src/layout
src/renderer/src/health
src/renderer/src/terminal
src/renderer/src/document-review
src/renderer/src/workspaces
src/renderer/src/context-menu
src/renderer/src/harness
src/renderer/src/styles
src/renderer/src/viewer
src/renderer/src/sessions
src/renderer/src/workbench
src/renderer/src/dashboards
src/renderer/src/diagnostics
src/renderer/src/git
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
src/main/harness/providers
src/main/viewer
src/main/project-host
src/main/sessions
src/main/project-folder-picker
src/main/filename-search
src/main/window
src/main/diagnostics
src/main/ipc
src/main/ipc/features
src/main/git
src/preload
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `grep`

**hvir|description|overview|workbench**

"hvir|description|overview|workbench" in **/*.{md,ts,tsx,mts,mjs} (src)

<details>
<summary>249 matches</summary>

```
[grep-paths: 243 path(s) under /private/var/tmp/ws/db743e3d/hvir/src; grouped by directory]

/private/var/tmp/ws/db743e3d/hvir/src/main/ (117 path(s))
  application-runtime-policy.ts
  diagnostics/diagnostic-event.ts
  diagnostics/diagnostic-report-builder.ts
  diagnostics/diagnostic-report-storage.ts
  diagnostics/electron-diagnostic-report-actions.ts
  diagnostics/runtime-diagnostics.ts
  document-review/document-review-application.ts
  git/mutation-coordinator.ts
  harness/claude-keybindings.ts
  harness/claude-session-artifact.ts
  harness/claude-session-recovery.ts
  harness/codex-context-telemetry.ts
  harness/codex-session-discovery.ts
  harness/harness-launch.ts
  harness/harness-profile-store.ts
  harness/harness-provider-contract.ts
  harness/harness-provider-registry.ts
  harness/harness-shell-environment.ts
  harness/harness-telemetry-hub.ts
  harness/providers/claude-code.ts
  harness/providers/codex.ts
  harness/providers/cursor.ts
  harness/providers/gemini.ts
  harness/providers/github-copilot.ts
  harness/providers/pi.ts
  harness/providers/shell.ts
  harness/remote-image-paste-storage.ts
  health/workbench-health-events.ts
  health/workbench-health.ts
  index.ts
  ipc/authority-channel-policy.ts
  ipc/authority-router.ts
  ipc/deps.ts
  ipc/features/app.ts
  navigation-policy.ts
  project-file-operations/case-only-project-entry-rename.ts
  project-file-operations/electron-external-move-picker.ts
  project-file-operations/staging-cleanup.ts
  project-file-operations/verified-project-copy.ts
  project-host/local-host.ts
  project-host/project-host.ts
  project-host/ssh-file-access.ts
  project-host/ssh-host.ts
  project-registry.ts
  pty/pty-contract.ts
  pty/pty-supervisor.ts
  sessions/sessions-observation-application.ts
  smoke/app-settings.ts
  smoke/capacity-live-presentation.ts
  smoke/capacity-output-fixtures.ts
  smoke/capacity-terminals.ts
  smoke/capacity.ts
  smoke/development-performance.ts
  smoke/diagnostic-report-restart.ts
  smoke/document-review-evidence.mts
  smoke/document-review-fixture.ts
  smoke/document-review.ts
  smoke/external-documents.ts
  smoke/external-file-move.ts
  smoke/filename-search.ts
  smoke/files-interactions.ts
  smoke/harness-profile-workflow.ts
  smoke/index.ts
  smoke/native-host-worker.ts
  smoke/native-pty.ts
  smoke/platform-contracts.ts
  smoke/project-entry-deletion.ts
  smoke/project-file-fixture.ts
  smoke/project-file-operations.ts
  smoke/project-state-fixture.ts
  smoke/renderer-isolation.ts
  smoke/renderer-lifecycle.ts
  smoke/renderer-readiness.ts
  smoke/renderer-recovery-delivery.ts
  smoke/renderer-recovery-producer.ts
  smoke/renderer-recovery.ts
  smoke/scenario-selection.mts
  smoke/scrollbar-presentation.ts
  smoke/sessions-projection.ts
  smoke/sessions-usage-provider.ts
  smoke/sessions-visual.ts
  smoke/terminal-context-menu.ts
  smoke/terminal-cursor-presentation.ts
  smoke/terminal-file-paste.ts
  smoke/terminal-hidden-reveal.ts
  smoke/terminal-horizon-presentation.ts
  smoke/terminal-ligature-presentation.ts
  smoke/terminal-move.ts
  smoke/terminal-palette-presentation.ts
  smoke/terminal-presentation-scenarios.ts
  smoke/terminal-presentation.ts
  smoke/terminal-project-return.ts
  smoke/terminal-renderer-lifecycle.ts
  smoke/terminal-search.ts
  smoke/terminal-synchronized-output.ts
  smoke/terminal-theme-gallery-presentation.ts
  smoke/viewer-content.ts
  smoke/viewer-find.ts
  smoke/viewer-fixtures.ts
  smoke/viewer-position.ts
  smoke/web-pane.ts
  smoke/workbench-chrome.ts
  smoke/workbench-health-scenario.ts
  smoke/workbench-health.ts
  smoke/workbench-layout.ts
  smoke/workspace-close.ts
  smoke/workspace-remote.ts
  terminal/terminal-identity-publication.ts
  web-pane/loopback-http-proxy.ts
  web-pane/web-pane-route-registry.ts
  window/electron-renderer-document-lifecycle.ts
  window/electron-renderer-recovery.ts
  window/electron-window-manager.ts
  window/window-health-tracker.ts
  window/window-policy.ts
  workbench-runtime.ts
  worker-host.ts

/private/var/tmp/ws/db743e3d/hvir/src/renderer/ (113 path(s))
  src/App.tsx
  src/ErrorBoundary.tsx
  src/dashboards/WebPane.tsx
  src/dashboards/use-web-pane-workspace.ts
  src/dashboards/web-pane-diagnostics.ts
  src/development/development-performance-fixture.tsx
  src/development/development-renderer-instrumentation.tsx
  src/development/performance-measure-budget.ts
  src/diagnostics/DiagnosticReportDialog.tsx
  src/document-review/DocumentReviewControls.tsx
  src/document-review/document-review-delivery-client.ts
  src/document-review/document-review-delivery-feedback.ts
  src/document-review/document-review-rendered.ts
  src/document-review/use-document-review-workspace.ts
  src/git/GitGraphView.tsx
  src/git/commit-detail-client.ts
  src/git/use-git-rail-controller.ts
  src/git/use-git-workspace.ts
  src/health/WorkbenchHealthControl.tsx
  src/health/use-diagnostic-evidence.ts
  src/health/use-workbench-health.ts
  src/hvir.d.ts
  src/layout/workspace-layout-persistence.ts
  src/main.tsx
  src/scrollbars/scrollbar-presentation.ts
  src/sessions/SessionsCollectionToolbar.tsx
  src/sessions/SessionsOverview.tsx
  src/sessions/SessionsOverviewCard.tsx
  src/sessions/SessionsTerminalDetail.tsx
  src/sessions/sessions-terminal-detail-controller.ts
  src/sessions/use-sessions-terminal-detail.ts
  src/settings/ComposerSubmitConsentDialog.tsx
  src/settings/HarnessProfileDialogs.tsx
  src/settings/HarnessProfileEditor.tsx
  src/settings/HarnessProfilesSettings.tsx
  src/settings/SettingsDialog.tsx
  src/settings/SettingsSection.tsx
  src/settings/TerminalThemeGallery.tsx
  src/settings/harness-profile-draft.ts
  src/settings/sections/AppearanceSettings.tsx
  src/settings/sections/GitSettings.tsx
  src/settings/sections/KeybindingsSettings.tsx
  src/settings/sections/TerminalSettings.tsx
  src/settings/settings.ts
  src/settings/typography-presentation.ts
  src/settings/use-add-harness-dialog.ts
  src/settings/use-harness-binding-authorization.ts
  src/settings/use-harness-folder-picker.ts
  src/settings/use-harness-profile-editor.ts
  src/settings/use-settings-controller.ts
  src/terminal/TerminalMoveDialog.tsx
  src/terminal/TerminalRecoveryDialog.tsx
  src/terminal/ghostty-terminal-fit.ts
  src/terminal/ghostty-terminal-pane.ts
  src/terminal/terminal-clipboard-osc.ts
  src/terminal/terminal-clipboard-write.ts
  src/terminal/terminal-event-router.ts
  src/terminal/terminal-palette.ts
  src/terminal/terminal-pane-event-coordinator.ts
  src/terminal/terminal-runtime-registry.ts
  src/terminal/terminal-runtime.ts
  src/terminal/terminal-split-persistence.ts
  src/terminal/terminal-theme-catalog.ts
  src/terminal/use-terminal-attention.ts
  src/terminal/use-terminal-persistence.ts
  src/terminal/use-terminal-profiles.ts
  src/terminal/use-terminal-recovery.ts
  src/terminal/use-terminal-session-commands.ts
  src/terminal/use-terminal-workspace-move.ts
  src/terminal/use-terminal-workspace-transfer.ts
  src/theme.ts
  src/tree/FileCreateOverlays.tsx
  src/tree/FileExternalMoveDialog.tsx
  src/tree/FileOrganizationDialog.tsx
  src/tree/FileTree.tsx
  src/tree/FilenameSearch.tsx
  src/tree/project-entry-drag.ts
  src/tree/use-external-file-copy.ts
  src/tree/use-external-file-move.ts
  src/tree/use-file-create-actions.ts
  src/tree/use-file-deletion-actions.ts
  src/tree/use-file-manager-reveal.ts
  src/tree/use-file-organization-actions.ts
  src/tree/use-project-file-operation.ts
  src/viewer/DiffView.tsx
  src/viewer/RenderedView.tsx
  src/viewer/RepositoryImageView.tsx
  src/viewer/SourceView.tsx
  src/viewer/TabStrip.tsx
  src/viewer/codemirror-find-target.ts
  src/viewer/dom-find-target.ts
  src/viewer/markdown-extensions.ts
  src/viewer/markdown-repository-images.ts
  src/viewer/use-diff-inputs.ts
  src/viewer/use-source-blame.ts
  src/viewer/use-viewer-workspace.ts
  src/viewer/viewer-workspace-persistence.ts
  src/workbench/use-renderer-ready.ts
  src/workbench/use-terminal-path-activation.ts
  src/workbench/use-workbench-commands.ts
  src/workbench/use-workbench-layout.ts
  src/workbench/use-workbench-overlays.ts
  src/workbench/workbench-command-router.ts
  src/workbench/workbench-layout-policy.ts
  src/workbench/workbench-overlay-model.ts
  src/workspaces/ProjectsBar.tsx
  src/workspaces/SessionDialog.tsx
  src/workspaces/SshPromptDialog.tsx
  src/workspaces/WorkspaceCatalogDialogs.tsx
  src/workspaces/project-folder-picker-client.ts
  src/workspaces/project-session.ts
  src/workspaces/project-watch-interests.ts
  src/workspaces/workspace-session-actions.ts

/private/var/tmp/ws/db743e3d/hvir/src/shared/ (12 path(s))
  diagnostic-report-event.ts
  diagnostic-report.ts
  git-types.ts
  harness-profile.ts
  harness-provider.ts
  host-path.ts
  html-preview.ts
  index.ts
  ipc.ts
  ipc/diagnostics.ts
  keybindings.ts
  sessions-projection.ts

/private/var/tmp/ws/db743e3d/hvir/src/preload/ (1 path(s))
  index.ts

[extensions: .ts=200, .tsx=41, .mts=2]
```

</details>


---

<sub>10s</sub>

### `glob`

****/*.md**

"**/*.md"

```
./THIRD_PARTY_NOTICES.md
./test/fixtures/rendered.md
./test/fixtures/rendered-mmd.md
```


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/db743e3d/hvir/electron-builder.yml.**

/private/var/tmp/ws/db743e3d/hvir/electron-builder.yml

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/db743e3d/hvir/src/main/index.ts.**

/private/var/tmp/ws/db743e3d/hvir/src/main/index.ts (lines 1-80)

<details>
<summary>80 lines</summary>

```
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
import { RuntimeDiagnostics } from './diagnostics/runtime-diagnostics'
import { createDiagnosticReportCoordinator } from './diagnostics/diagnostic-report-coordinator'
import { RendererEventPublisher } from './renderer-event-publisher'
import { createFilenameSearchCoordinator } from './filename-search'
import { createProjectFileOperationCoordinator } from './project-file-operations'
import type { DocumentReviewRuntime } from './document-review'
import { installApplicationDocumentReviewRuntime } from './document-review/document-review-application'
import { installApplicationSessionsObservation } from './sessions/sessions-observation-application'
import { applicationRuntime, applicationUserDataPath } from './application-runtime'
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
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/db743e3d/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/db743e3d/hvir/src/shared/harness-provider.ts (lines 1-80)

<details>
<summary>68 lines</summary>

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
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/db743e3d/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/db743e3d/hvir/src/renderer/src/App.tsx (lines 1-100)

<details>
<summary>100 lines</summary>

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
```

</details>


---

<sub>15s</sub>

### `bash`

**Check workflows and desktop metadata**

$ ls .github/workflows; head -40 build/linux/hvir.desktop 2>/dev/null; cat build/*.desktop 2>/dev/null | head -40; ls build | head -30

<details>
<summary>22 lines</summary>

```
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>18s</sub>

### Copilot

Creating README.md from the project metadata and structure.

---

<sub>33s</sub>

### `create`

**create a new file at /private/var/tmp/ws/db743e3d/hvir/README.md.**

/private/var/tmp/ws/db743e3d/hvir/README.md

```
Created file /private/var/tmp/ws/db743e3d/hvir/README.md with 3731 characters
```


---

<sub>34s</sub>

### Copilot

Created `README.md` covering:

- What **hvir** is (Electron developer workbench)
- Features (terminals, SSH, Git, harnesses, viewer, etc.)
- Requirements and quick start
- Common npm scripts
- Source layout
- License / third-party notices

Say if you want badges, screenshots, or deeper contributor docs.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
