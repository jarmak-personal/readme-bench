# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `42aa2d0f-af11-4229-93ff-c649dd3ff56e`  
> - **Started:** 9/17/2026, 10:41:00 PM  
> - **Duration:** 37s  
> - **Exported:** 9/17/2026, 10:41:37 PM  

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
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 22:40 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:40 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:40 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:40 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:40 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 22:40 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 22:40 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 22:40 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:40 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 22:40 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 22:40 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 22:40 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 22:40 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 22:40 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 22:40 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 22:40 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 17 22:40 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:40 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 22:40 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 22:40 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 22:40 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 22:40 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 22:40 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 22:40 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 22:40 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 22:40 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 22:40 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 22:40 vitest.config.ts
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

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/5bc59a59/hvir/package.json.**

/private/var/tmp/ws/5bc59a59/hvir/package.json

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

**view the file at /private/var/tmp/ws/5bc59a59/hvir/LICENSE.**

/private/var/tmp/ws/5bc59a59/hvir/LICENSE

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

**Inspect src, packages, scripts dirs**

$ ls -la src packages scripts .github 2>/dev/null; head -100 THIRD_PARTY_NOTICES.md 2>/dev/null | head -30

<details>
<summary>98 lines</summary>

```
.github:
total 8
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 22:40 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 17 22:40 ..
-rw-r--r--@  1 air-jarmak  wheel  1785 Sep 17 22:40 dependabot.yml
drwxr-xr-x@ 13 air-jarmak  wheel   416 Sep 17 22:40 workflows

packages:
total 0
drwxr-xr-x@  3 air-jarmak  wheel   96 Sep 17 22:40 .
drwxr-xr-x@ 28 air-jarmak  wheel  896 Sep 17 22:40 ..
drwxr-xr-x@  8 air-jarmak  wheel  256 Sep 17 22:40 rename-noreplace

scripts:
total 992
drwxr-xr-x@ 54 air-jarmak  wheel   1728 Sep 17 22:40 .
drwxr-xr-x@ 28 air-jarmak  wheel    896 Sep 17 22:40 ..
-rw-r--r--@  1 air-jarmak  wheel   5645 Sep 17 22:40 adr-lifecycle.mts
-rw-r--r--@  1 air-jarmak  wheel   7237 Sep 17 22:40 agent-work-checkpoint-store.mts
-rw-r--r--@  1 air-jarmak  wheel  10110 Sep 17 22:40 architecture-authorization.mts
-rw-r--r--@  1 air-jarmak  wheel   9985 Sep 17 22:40 architecture-github.mts
-rw-r--r--@  1 air-jarmak  wheel  12147 Sep 17 22:40 architecture-hotspots.json
-rw-r--r--@  1 air-jarmak  wheel    199 Sep 17 22:40 architecture-hotspots.mjs
-rw-r--r--@  1 air-jarmak  wheel   5474 Sep 17 22:40 architecture-hotspots.mts
-rw-r--r--@  1 air-jarmak  wheel  10192 Sep 17 22:40 architecture-inventory.mts
-rw-r--r--@  1 air-jarmak  wheel   6009 Sep 17 22:40 architecture-module-directions.mts
-rw-r--r--@  1 air-jarmak  wheel   9391 Sep 17 22:40 architecture-module-graph.mts
-rw-r--r--@  1 air-jarmak  wheel   9647 Sep 17 22:40 architecture-module-resolution.mts
-rw-r--r--@  1 air-jarmak  wheel  14540 Sep 17 22:40 architecture-policy.mts
-rw-r--r--@  1 air-jarmak  wheel   7680 Sep 17 22:40 architecture-wiring.mts
-rw-r--r--@  1 air-jarmak  wheel   1092 Sep 17 22:40 assemble-native-release.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   7281 Sep 17 22:40 assemble-native-release.mjs
-rw-r--r--@  1 air-jarmak  wheel   1569 Sep 17 22:40 capture-contributor-usage.mts
-rw-r--r--@  1 air-jarmak  wheel   6044 Sep 17 22:40 check-adrs.mjs
-rw-r--r--@  1 air-jarmak  wheel   6565 Sep 17 22:40 check-seams.sh
-rw-r--r--@  1 air-jarmak  wheel   5007 Sep 17 22:40 check-terminal-runtime.mts
-rw-r--r--@  1 air-jarmak  wheel   5650 Sep 17 22:40 ci-attempt-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel   2765 Sep 17 22:40 create-smoke-repository.sh
-rw-r--r--@  1 air-jarmak  wheel   8912 Sep 17 22:40 generate-terminal-theme-catalog.mts
-rw-r--r--@  1 air-jarmak  wheel   2943 Sep 17 22:40 ghostty-terminal-capability-profile.mts
drwxr-xr-x@ 10 air-jarmak  wheel    320 Sep 17 22:40 ghostty-web-update
-rw-r--r--@  1 air-jarmak  wheel   9851 Sep 17 22:40 inspect-packaged-runtime.mts
-rwxr-xr-x@  1 air-jarmak  wheel    634 Sep 17 22:40 install-git-hooks.sh
-rw-r--r--@  1 air-jarmak  wheel  11606 Sep 17 22:40 installed-harness-dialog-probe.mts
-rw-r--r--@  1 air-jarmak  wheel  15300 Sep 17 22:40 installed-startup-probe.mts
-rwxr-xr-x@  1 air-jarmak  wheel  20201 Sep 17 22:40 native-installer.template.sh
-rwxr-xr-x@  1 air-jarmak  wheel    177 Sep 17 22:40 phase8-gauntlet.sh
-rw-r--r--@  1 air-jarmak  wheel   1667 Sep 17 22:40 prepare-release-linux-package.mts
-rw-r--r--@  1 air-jarmak  wheel   8274 Sep 17 22:40 prepare-release-pr.mjs
drwxr-xr-x@ 50 air-jarmak  wheel   1600 Sep 17 22:40 project-management
-rw-r--r--@  1 air-jarmak  wheel   7581 Sep 17 22:40 real-host-ssh-contract.mts
-rw-r--r--@  1 air-jarmak  wheel    349 Sep 17 22:40 real-host-ssh.vite.config.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4022 Sep 17 22:40 record-macos-ssh-identity.sh
-rw-r--r--@  1 air-jarmak  wheel    190 Sep 17 22:40 release-changelog.d.mts
-rw-r--r--@  1 air-jarmak  wheel    767 Sep 17 22:40 release-changelog.mjs
-rw-r--r--@  1 air-jarmak  wheel   1759 Sep 17 22:40 release-github-evidence.mts
-rw-r--r--@  1 air-jarmak  wheel    870 Sep 17 22:40 render-native-installer.d.mts
-rwxr-xr-x@  1 air-jarmak  wheel   6841 Sep 17 22:40 render-native-installer.mjs
-rw-r--r--@  1 air-jarmak  wheel  15062 Sep 17 22:40 require-release-ci-evidence.mts
-rwxr-xr-x@  1 air-jarmak  wheel  13943 Sep 17 22:40 run-linux-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel  18309 Sep 17 22:40 run-macos-package-smoke.sh
-rwxr-xr-x@  1 air-jarmak  wheel   1955 Sep 17 22:40 run-macos-ssh-acceptance.sh
-rw-r--r--@  1 air-jarmak  wheel  29461 Sep 17 22:40 run-real-host-ssh-acceptance.mts
-rw-r--r--@  1 air-jarmak  wheel  23458 Sep 17 22:40 run-smoke-interruption.mts
-rw-r--r--@  1 air-jarmak  wheel  18307 Sep 17 22:40 run-smoke-scenarios.mts
-rwxr-xr-x@  1 air-jarmak  wheel   4368 Sep 17 22:40 run-smoke.sh
-rw-r--r--@  1 air-jarmak  wheel  11657 Sep 17 22:40 smoke-failure-artifact.mts
-rw-r--r--@  1 air-jarmak  wheel   2216 Sep 17 22:40 smoke-import-boundary.mjs
-rw-r--r--@  1 air-jarmak  wheel  14010 Sep 17 22:40 validate-release-pr.mts

src:
total 0
drwxr-xr-x@  7 air-jarmak  wheel   224 Sep 17 22:40 .
drwxr-xr-x@ 28 air-jarmak  wheel   896 Sep 17 22:40 ..
drwxr-xr-x@ 40 air-jarmak  wheel  1280 Sep 17 22:40 main
drwxr-xr-x@  5 air-jarmak  wheel   160 Sep 17 22:40 preload
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 22:40 renderer
drwxr-xr-x@ 39 air-jarmak  wheel  1248 Sep 17 22:40 shared
drwxr-xr-x@  4 air-jarmak  wheel   128 Sep 17 22:40 workers
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

<sub>10s</sub>

### `bash`

**List source dirs and builder config**

$ ls src/main src/renderer src/shared | head -80; ls src/renderer; head -80 electron-builder.yml

<details>
<summary>152 lines</summary>

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
index.html
src
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `grep`

**hvir|description|overview|workbench**

"hvir|description|overview|workbench" in **/*.{md,ts,tsx,mts}

<details>
<summary>471 matches</summary>

```
[grep-paths: 465 path(s) under .; grouped by directory]

./src/ (243 path(s))
  main/application-runtime-policy.ts
  main/diagnostics/diagnostic-event.ts
  main/diagnostics/diagnostic-report-builder.ts
  main/diagnostics/diagnostic-report-storage.ts
  main/diagnostics/electron-diagnostic-report-actions.ts
  main/diagnostics/runtime-diagnostics.ts
  main/document-review/document-review-application.ts
  main/git/mutation-coordinator.ts
  main/harness/claude-keybindings.ts
  main/harness/claude-session-artifact.ts
  main/harness/claude-session-recovery.ts
  main/harness/codex-context-telemetry.ts
  main/harness/codex-session-discovery.ts
  main/harness/harness-launch.ts
  main/harness/harness-profile-store.ts
  main/harness/harness-provider-contract.ts
  main/harness/harness-provider-registry.ts
  main/harness/harness-shell-environment.ts
  main/harness/harness-telemetry-hub.ts
  main/harness/providers/claude-code.ts
  main/harness/providers/codex.ts
  main/harness/providers/cursor.ts
  main/harness/providers/gemini.ts
  main/harness/providers/github-copilot.ts
  main/harness/providers/pi.ts
  main/harness/providers/shell.ts
  main/harness/remote-image-paste-storage.ts
  main/health/workbench-health-events.ts
  main/health/workbench-health.ts
  main/index.ts
  main/ipc/authority-channel-policy.ts
  main/ipc/authority-router.ts
  main/ipc/deps.ts
  main/ipc/features/app.ts
  main/navigation-policy.ts
  main/project-file-operations/case-only-project-entry-rename.ts
  main/project-file-operations/electron-external-move-picker.ts
  main/project-file-operations/staging-cleanup.ts
  main/project-file-operations/verified-project-copy.ts
  main/project-host/local-host.ts
  main/project-host/project-host.ts
  main/project-host/ssh-file-access.ts
  main/project-host/ssh-host.ts
  main/project-registry.ts
  main/pty/pty-contract.ts
  main/pty/pty-supervisor.ts
  main/sessions/sessions-observation-application.ts
  main/smoke/app-settings.ts
  main/smoke/capacity-live-presentation.ts
  main/smoke/capacity-output-fixtures.ts
  main/smoke/capacity-terminals.ts
  main/smoke/capacity.ts
  main/smoke/development-performance.ts
  main/smoke/diagnostic-report-restart.ts
  main/smoke/document-review-evidence.mts
  main/smoke/document-review-fixture.ts
  main/smoke/document-review.ts
  main/smoke/external-documents.ts
  main/smoke/external-file-move.ts
  main/smoke/filename-search.ts
  main/smoke/files-interactions.ts
  main/smoke/harness-profile-workflow.ts
  main/smoke/index.ts
  main/smoke/native-host-worker.ts
  main/smoke/native-pty.ts
  main/smoke/platform-contracts.ts
  main/smoke/project-entry-deletion.ts
  main/smoke/project-file-fixture.ts
  main/smoke/project-file-operations.ts
  main/smoke/project-state-fixture.ts
  main/smoke/renderer-isolation.ts
  main/smoke/renderer-lifecycle.ts
  main/smoke/renderer-readiness.ts
  main/smoke/renderer-recovery-delivery.ts
  main/smoke/renderer-recovery-producer.ts
  main/smoke/renderer-recovery.ts
  main/smoke/scenario-selection.mts
  main/smoke/scrollbar-presentation.ts
  main/smoke/sessions-projection.ts
  main/smoke/sessions-usage-provider.ts
  main/smoke/sessions-visual.ts
  main/smoke/terminal-context-menu.ts
  main/smoke/terminal-cursor-presentation.ts
  main/smoke/terminal-file-paste.ts
  main/smoke/terminal-hidden-reveal.ts
  main/smoke/terminal-horizon-presentation.ts
  main/smoke/terminal-ligature-presentation.ts
  main/smoke/terminal-move.ts
  main/smoke/terminal-palette-presentation.ts
  main/smoke/terminal-presentation-scenarios.ts
  main/smoke/terminal-presentation.ts
  main/smoke/terminal-project-return.ts
  main/smoke/terminal-renderer-lifecycle.ts
  main/smoke/terminal-search.ts
  main/smoke/terminal-synchronized-output.ts
  main/smoke/terminal-theme-gallery-presentation.ts
  main/smoke/viewer-content.ts
  main/smoke/viewer-find.ts
  main/smoke/viewer-fixtures.ts
  main/smoke/viewer-position.ts
  main/smoke/web-pane.ts
  main/smoke/workbench-chrome.ts
  main/smoke/workbench-health-scenario.ts
  main/smoke/workbench-health.ts
  main/smoke/workbench-layout.ts
  main/smoke/workspace-close.ts
  main/smoke/workspace-remote.ts
  main/terminal/terminal-identity-publication.ts
  main/web-pane/loopback-http-proxy.ts
  main/web-pane/web-pane-route-registry.ts
  main/window/electron-renderer-document-lifecycle.ts
  main/window/electron-renderer-recovery.ts
  main/window/electron-window-manager.ts
  main/window/window-health-tracker.ts
  main/window/window-policy.ts
  main/workbench-runtime.ts
  main/worker-host.ts
  preload/index.ts
  renderer/src/App.tsx
  renderer/src/ErrorBoundary.tsx
  renderer/src/dashboards/WebPane.tsx
  renderer/src/dashboards/use-web-pane-workspace.ts
  renderer/src/dashboards/web-pane-diagnostics.ts
  renderer/src/development/development-performance-fixture.tsx
  renderer/src/development/development-renderer-instrumentation.tsx
  renderer/src/development/performance-measure-budget.ts
  renderer/src/diagnostics/DiagnosticReportDialog.tsx
  renderer/src/document-review/DocumentReviewControls.tsx
  renderer/src/document-review/document-review-delivery-client.ts
  renderer/src/document-review/document-review-delivery-feedback.ts
  renderer/src/document-review/document-review-rendered.ts
  renderer/src/document-review/use-document-review-workspace.ts
  renderer/src/git/GitGraphView.tsx
  renderer/src/git/commit-detail-client.ts
  renderer/src/git/use-git-rail-controller.ts
  renderer/src/git/use-git-workspace.ts
  renderer/src/health/WorkbenchHealthControl.tsx
  renderer/src/health/use-diagnostic-evidence.ts
  renderer/src/health/use-workbench-health.ts
  renderer/src/hvir.d.ts
  renderer/src/layout/workspace-layout-persistence.ts
  renderer/src/main.tsx
  renderer/src/scrollbars/scrollbar-presentation.ts
  renderer/src/sessions/SessionsCollectionToolbar.tsx
  renderer/src/sessions/SessionsOverview.tsx
  renderer/src/sessions/SessionsOverviewCard.tsx
  renderer/src/sessions/SessionsTerminalDetail.tsx
  renderer/src/sessions/sessions-terminal-detail-controller.ts
  renderer/src/sessions/use-sessions-terminal-detail.ts
  renderer/src/settings/ComposerSubmitConsentDialog.tsx
  renderer/src/settings/HarnessProfileDialogs.tsx
  renderer/src/settings/HarnessProfileEditor.tsx
  renderer/src/settings/HarnessProfilesSettings.tsx
  renderer/src/settings/SettingsDialog.tsx
  renderer/src/settings/SettingsSection.tsx
  renderer/src/settings/TerminalThemeGallery.tsx
  renderer/src/settings/harness-profile-draft.ts
  renderer/src/settings/sections/AppearanceSettings.tsx
  renderer/src/settings/sections/GitSettings.tsx
  renderer/src/settings/sections/KeybindingsSettings.tsx
  renderer/src/settings/sections/TerminalSettings.tsx
  renderer/src/settings/settings.ts
  renderer/src/settings/typography-presentation.ts
  renderer/src/settings/use-add-harness-dialog.ts
  renderer/src/settings/use-harness-binding-authorization.ts
  renderer/src/settings/use-harness-folder-picker.ts
  renderer/src/settings/use-harness-profile-editor.ts
  renderer/src/settings/use-settings-controller.ts
  renderer/src/terminal/TerminalMoveDialog.tsx
  renderer/src/terminal/TerminalRecoveryDialog.tsx
  renderer/src/terminal/ghostty-terminal-fit.ts
  renderer/src/terminal/ghostty-terminal-pane.ts
  renderer/src/terminal/terminal-clipboard-osc.ts
  renderer/src/terminal/terminal-clipboard-write.ts
  renderer/src/terminal/terminal-event-router.ts
  renderer/src/terminal/terminal-palette.ts
  renderer/src/terminal/terminal-pane-event-coordinator.ts
  renderer/src/terminal/terminal-runtime-registry.ts
  renderer/src/terminal/terminal-runtime.ts
  renderer/src/terminal/terminal-split-persistence.ts
  renderer/src/terminal/terminal-theme-catalog.ts
  renderer/src/terminal/use-terminal-attention.ts
  renderer/src/terminal/use-terminal-persistence.ts
  renderer/src/terminal/use-terminal-profiles.ts
  renderer/src/terminal/use-terminal-recovery.ts
  renderer/src/terminal/use-terminal-session-commands.ts
  renderer/src/terminal/use-terminal-workspace-move.ts
  renderer/src/terminal/use-terminal-workspace-transfer.ts
  renderer/src/theme.ts
  renderer/src/tree/FileCreateOverlays.tsx
  renderer/src/tree/FileExternalMoveDialog.tsx
  renderer/src/tree/FileOrganizationDialog.tsx
  renderer/src/tree/FileTree.tsx
  renderer/src/tree/FilenameSearch.tsx
  renderer/src/tree/project-entry-drag.ts
  renderer/src/tree/use-external-file-copy.ts
  renderer/src/tree/use-external-file-move.ts
  renderer/src/tree/use-file-create-actions.ts
  renderer/src/tree/use-file-deletion-actions.ts
  renderer/src/tree/use-file-manager-reveal.ts
  renderer/src/tree/use-file-organization-actions.ts
  renderer/src/tree/use-project-file-operation.ts
  renderer/src/viewer/DiffView.tsx
  renderer/src/viewer/RenderedView.tsx
  renderer/src/viewer/RepositoryImageView.tsx
  renderer/src/viewer/SourceView.tsx
  renderer/src/viewer/TabStrip.tsx
  renderer/src/viewer/codemirror-find-target.ts
  renderer/src/viewer/dom-find-target.ts
  renderer/src/viewer/markdown-extensions.ts
  renderer/src/viewer/markdown-repository-images.ts
  renderer/src/viewer/use-diff-inputs.ts
  renderer/src/viewer/use-source-blame.ts
  renderer/src/viewer/use-viewer-workspace.ts
  renderer/src/viewer/viewer-workspace-persistence.ts
  renderer/src/workbench/use-renderer-ready.ts
  renderer/src/workbench/use-terminal-path-activation.ts
  renderer/src/workbench/use-workbench-commands.ts
  renderer/src/workbench/use-workbench-layout.ts
  renderer/src/workbench/use-workbench-overlays.ts
  renderer/src/workbench/workbench-command-router.ts
  renderer/src/workbench/workbench-layout-policy.ts
  renderer/src/workbench/workbench-overlay-model.ts
  renderer/src/workspaces/ProjectsBar.tsx
  renderer/src/workspaces/SessionDialog.tsx
  renderer/src/workspaces/SshPromptDialog.tsx
  renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
  renderer/src/workspaces/project-folder-picker-client.ts
  renderer/src/workspaces/project-session.ts
  renderer/src/workspaces/project-watch-interests.ts
  renderer/src/workspaces/workspace-session-actions.ts
  shared/diagnostic-report-event.ts
  shared/diagnostic-report.ts
  shared/git-types.ts
  shared/harness-profile.ts
  shared/harness-provider.ts
  shared/host-path.ts
  shared/html-preview.ts
  shared/index.ts
  shared/ipc.ts
  shared/ipc/diagnostics.ts
  shared/keybindings.ts
  shared/sessions-projection.ts

./test/ (190 path(s))
  application-runtime.test.ts
  architecture-github.test.ts
  attention-badge.test.ts
  canonical-project-config.test.ts
  capacity-live-presentation.test.ts
  ci-attempt-evidence.test.ts
  ci-workflow.test.ts
  claude-context-telemetry.test.ts
  claude-keybindings.test.ts
  claude-session-recovery.test.ts
  codemirror-find-target.test.tsx
  codex-context-telemetry.test.ts
  codex-session-discovery.test.ts
  codex-session-recovery-lifecycle.test.ts
  commit-detail-client.test.ts
  commit-message.test.ts
  confirmation-dialog.test.tsx
  development-renderer-instrumentation.test.tsx
  diagnostic-intake.test.ts
  diagnostic-journal.test.ts
  diagnostic-report-dialog.test.tsx
  diagnostic-report-evidence.test.ts
  diagnostic-report.test.ts
  diff-view-refresh.test.tsx
  document-review-delivery-interaction.test.tsx
  document-review-smoke-isolation.test.ts
  document-review-store.test.ts
  dom-find-target.test.tsx
  electron-renderer-document-lifecycle.test.ts
  electron-renderer-recovery.test.ts
  error-boundary-health.test.tsx
  external-document-authority.test.ts
  external-document-ssh.test.ts
  external-file-copy.test.ts
  external-file-grants.test.ts
  external-file-move-renderer.test.tsx
  external-file-move.test.ts
  file-create-actions.test.tsx
  file-tree-reveal.test.tsx
  file-viewer-controls.test.tsx
  filename-enumerator.test.ts
  filename-search.test.tsx
  files-interactions.test.tsx
  fixtures/architecture/repository.ts
  fixtures/ghostty-lifecycle-runtime-options.ts
  fixtures/harness-profile-fixture.ts
  ghostty-terminal-pane-lifecycle.test.tsx
  ghostty-web-update-candidate-bundle.test.ts
  ghostty-web-update-candidate.test.ts
  ghostty-web-update-coordinator.test.ts
  ghostty-web-update-delivery.test.ts
  ghostty-web-update-policy.test.ts
  git-engine.test.ts
  git-graph-layout.test.ts
  git-rail-controller.test.tsx
  git-workspace.test.tsx
  github-project-kind-automation.test.ts
  github-project-planning.test.ts
  github-project-pr-planning.test.ts
  harness-launch.test.ts
  harness-probe.test.ts
  harness-profile-draft.test.ts
  harness-profile-editor.test.tsx
  harness-profiles-settings.test.tsx
  harness-provider.test.ts
  harness-shell-environment.test.ts
  harness-telemetry-hub.test.ts
  harness-usage-provider-ssh.test.ts
  html-preview-protocol.test.ts
  html-sandbox.test.ts
  installed-startup-probe.test.ts
  ipc-authority-router.test.ts
  issue-context.test.ts
  issue-lifecycle-guidance.test.ts
  issue-start-git.test.ts
  issue-start.test.ts
  keybindings.test.ts
  linux-native-package.test.ts
  local-host.test.ts
  macos-native-package.test.ts
  macos-ssh-acceptance.test.ts
  markdown-repository-images.test.tsx
  merge-pr-skill.test.ts
  modal-keyboard.test.ts
  native-command.test.ts
  native-icon-assets.test.ts
  native-installer.test.ts
  native-release-assembly.test.ts
  packaged-runtime-inspection.test.ts
  prepare-release-linux-package.test.ts
  private-session-assignment.test.ts
  project-coordinator.test.ts
  project-entry-deletion.test.ts
  project-entry-drag.test.tsx
  project-entry-organization.test.ts
  project-file-deletion-coordinator.test.ts
  project-file-operation-coordinator.test.ts
  project-host-catalog.test.ts
  project-host-ownership.test.ts
  project-kind-cli.test.ts
  project-planning-cli.test.ts
  project-planning-record.test.ts
  project-pr-planning.test.ts
  project-registry-migration.test.ts
  project-registry.test.ts
  project-session-delivery.test.tsx
  project-watch-interests.test.tsx
  projects-bar.test.tsx
  pty-supervisor.test.ts
  real-host-ssh-contract.test.ts
  real-host-ssh-workflow.test.ts
  release-ci-evidence.test.ts
  release-pr-integrity.test.ts
  release-workflow-security.test.ts
  remote-image-paste.test.ts
  rendered-image-refresh.test.tsx
  rendered-link.test.ts
  rendered-markdown-image-refresh.test.tsx
  renderer-authority-smoke.test.ts
  renderer-diagnostics-adapter.test.ts
  renderer-event-publisher.test.ts
  renderer-hardening.test.ts
  required-smoke-artifact-workflow.test.ts
  session-dialog.test.tsx
  session-token-capture.test.ts
  sessions-overview-model.test.ts
  sessions-overview.test.tsx
  sessions-terminal-ssh.test.tsx
  sessions-title-privacy.test.tsx
  settings-dialog-focus.test.tsx
  settings-draft.test.ts
  settings-persistence.test.tsx
  smoke-failure-artifact.test.ts
  smoke-interruption.test.ts
  smoke-pty-lifecycle.test.ts
  smoke-recovery-delivery.test.ts
  smoke-repository-fixture.test.ts
  smoke-scenario-runner.test.ts
  smoke-selection.test.ts
  smoke-stress-workflow.test.ts
  smoke-viewer-fixtures.test.ts
  source-blame.test.tsx
  ssh-file-access.test.ts
  ssh-host-authentication.test.ts
  ssh-host.test.ts
  staging-cleanup.test.ts
  structured-data.test.ts
  style-ownership.test.ts
  terminal-clipboard-write.test.tsx
  terminal-fork-launch.test.ts
  terminal-fork-runtime.test.tsx
  terminal-ipc-launch-probe.test.ts
  terminal-layout-controls.test.tsx
  terminal-output-parity.test.tsx
  terminal-path-activation.test.ts
  terminal-profiles.test.tsx
  terminal-recovery-controller.test.tsx
  terminal-recovery-dialog.test.tsx
  terminal-resume-unavailable.test.tsx
  terminal-semantic-navigation.test.tsx
  terminal-session-commands.test.tsx
  terminal-session-registry.test.ts
  terminal-session-risk-compatibility.test.ts
  terminal-sessions-surface-owner.test.tsx
  terminal-theme-catalog.test.ts
  terminal-workspace-collection.test.tsx
  terminal-workspace-materialization.test.tsx
  terminal-workspace-runtime-owner.test.tsx
  token-migration-plan.test.ts
  use-document-review-workspace.test.tsx
  use-file-organization-actions.test.tsx
  use-terminal-attention.test.tsx
  use-terminal-workspace-runtime.test.tsx
  use-viewer-workspace.test.tsx
  verified-project-copy.test.ts
  web-pane-route-registry.test.ts
  web-pane-surface.test.tsx
  web-pane-workspace.test.ts
  window-health-tracker.test.ts
  window-policy.test.ts
  workbench-command-listener.test.tsx
  workbench-commands.test.ts
  workbench-health-control.test.tsx
  workbench-health.test.ts
  workbench-layout.test.ts
  workbench-overlays.test.ts
  workbench-runtime.test.ts
  worker-host-broker.test.ts
  workspace-filter-polling.test.ts
  workspace-removal-flow.test.ts

./scripts/ (31 path(s))
  architecture-github.mts
  ghostty-terminal-capability-profile.mts
  ghostty-web-update/github-client.mts
  ghostty-web-update/github-release-source.mts
  ghostty-web-update/policy.mts
  ghostty-web-update/repository-candidate.mts
  inspect-packaged-runtime.mts
  installed-harness-dialog-probe.mts
  installed-startup-probe.mts
  prepare-release-linux-package.mts
  project-management/audit-canonical-project.ts
  project-management/canonical-project-config.ts
  project-management/contributor-token-migration.ts
  project-management/github-delivery-adapters.ts
  project-management/github-token-migration.ts
  project-management/issue-context-cli.ts
  project-management/issue-start-cli.ts
  project-management/kind-cli.ts
  project-management/legacy-token-evidence.ts
  project-management/planning-cli.ts
  project-management/pull-request-cli.ts
  project-management/read-contributor-status.ts
  project-management/read-planning-record.ts
  project-management/session-token-receipts.ts
  project-management/sync-kind.ts
  project-management/sync-pull-request-planning.ts
  require-release-ci-evidence.mts
  run-real-host-ssh-acceptance.mts
  run-smoke-interruption.mts
  run-smoke-scenarios.mts
  validate-release-pr.mts

./ (1 path(s))
  ./THIRD_PARTY_NOTICES.md

[extensions: .ts=351, .tsx=96, .mts=17, .md=1]
```

</details>


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/5bc59a59/hvir/src/main/index.ts.**

/private/var/tmp/ws/5bc59a59/hvir/src/main/index.ts (lines 1-80)

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

<sub>13s</sub>

### Copilot

Creating a README that covers the workbench features, setup, and common scripts.

---

<sub>35s</sub>

### `create`

**create a new file at /private/var/tmp/ws/5bc59a59/hvir/README.md.**

/private/var/tmp/ws/5bc59a59/hvir/README.md

```
Created file /private/var/tmp/ws/5bc59a59/hvir/README.md with 4592 characters
```


---

<sub>36s</sub>

### Copilot

Created **README.md** for **hvir** (v0.2.3): overview, features (terminal, Git, SSH, harnesses, viewers), Node 24+ setup, script table, repo layout, packaging, contributing, and MIT license.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
