# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `77add833-c67d-4fab-a9d4-b798ee9a030b`  
> - **Started:** 9/17/2026, 10:48:06 PM  
> - **Duration:** 30s  
> - **Exported:** 9/17/2026, 10:48:37 PM  

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

I’ll inspect the project structure and existing metadata to write a README that matches its actual setup and usage.

---

<sub>7s</sub>

### `bash`

**Inspect project files and git state**

$ git status --short && printf '\n--- root ---\n' && find . -maxdepth 2 -type f -not -path './.git/*' | sort | sed -n '1,200p'

<details>
<summary>202 lines</summary>

```
--- root ---
./.githooks/pre-push
./.github/dependabot.yml
./.gitignore
./.prettierignore
./.prettierrc.json
./build/entitlements.mac.inherit.plist
./build/entitlements.mac.plist
./build/icon-linux.svg
./build/icon-macos.icns
./build/icon-macos.png
./build/icon-macos.svg
./electron-builder.ssh-acceptance.yml
./electron-builder.yml
./electron.vite.config.ts
./eslint.config.mjs
./LICENSE
./node_modules/.package-lock.json
./package-lock.json
./package.json
./scripts/adr-lifecycle.mts
./scripts/agent-work-checkpoint-store.mts
./scripts/architecture-authorization.mts
./scripts/architecture-github.mts
./scripts/architecture-hotspots.json
./scripts/architecture-hotspots.mjs
./scripts/architecture-hotspots.mts
./scripts/architecture-inventory.mts
./scripts/architecture-module-directions.mts
./scripts/architecture-module-graph.mts
./scripts/architecture-module-resolution.mts
./scripts/architecture-policy.mts
./scripts/architecture-wiring.mts
./scripts/assemble-native-release.d.mts
./scripts/assemble-native-release.mjs
./scripts/capture-contributor-usage.mts
./scripts/check-adrs.mjs
./scripts/check-seams.sh
./scripts/check-terminal-runtime.mts
./scripts/ci-attempt-evidence.mts
./scripts/create-smoke-repository.sh
./scripts/generate-terminal-theme-catalog.mts
./scripts/ghostty-terminal-capability-profile.mts
./scripts/inspect-packaged-runtime.mts
./scripts/install-git-hooks.sh
./scripts/installed-harness-dialog-probe.mts
./scripts/installed-startup-probe.mts
./scripts/native-installer.template.sh
./scripts/phase8-gauntlet.sh
./scripts/prepare-release-linux-package.mts
./scripts/prepare-release-pr.mjs
./scripts/real-host-ssh-contract.mts
./scripts/real-host-ssh.vite.config.mts
./scripts/record-macos-ssh-identity.sh
./scripts/release-changelog.d.mts
./scripts/release-changelog.mjs
./scripts/release-github-evidence.mts
./scripts/render-native-installer.d.mts
./scripts/render-native-installer.mjs
./scripts/require-release-ci-evidence.mts
./scripts/run-linux-package-smoke.sh
./scripts/run-macos-package-smoke.sh
./scripts/run-macos-ssh-acceptance.sh
./scripts/run-real-host-ssh-acceptance.mts
./scripts/run-smoke-interruption.mts
./scripts/run-smoke-scenarios.mts
./scripts/run-smoke.sh
./scripts/smoke-failure-artifact.mts
./scripts/smoke-import-boundary.mjs
./scripts/validate-release-pr.mts
./stryker.config.json
./test/adr-lifecycle.test.ts
./test/application-runtime.test.ts
./test/architecture-command.test.ts
./test/architecture-github.test.ts
./test/architecture-history.test.ts
./test/architecture-module-directions.test.ts
./test/architecture-module-graph.test.ts
./test/architecture-policy.test.ts
./test/architecture-wiring.test.ts
./test/attention-badge.test.ts
./test/canonical-project-config.test.ts
./test/capacity-live-presentation.test.ts
./test/capacity-output-fixtures.test.ts
./test/capacity-performance.test.ts
./test/capacity-terminal-activity.test.ts
./test/ci-attempt-evidence.test.ts
./test/ci-workflow.test.ts
./test/claude-context-telemetry.test.ts
./test/claude-keybindings.test.ts
./test/claude-session-artifact.test.ts
./test/claude-session-recovery.test.ts
./test/clipboard-file-list.test.ts
./test/clipboard-ipc.test.ts
./test/codemirror-find-target.test.tsx
./test/codex-context-telemetry.test.ts
./test/codex-session-discovery.test.ts
./test/codex-session-recovery-lifecycle.test.ts
./test/commit-detail-client.test.ts
./test/commit-file-tree.test.ts
./test/commit-message.test.ts
./test/confirmation-dialog.test.tsx
./test/contributor-status-entrypoint.test.ts
./test/contributor-status.test.ts
./test/csv-parser.test.ts
./test/development-performance-measure-budget.test.ts
./test/development-renderer-instrumentation.test.tsx
./test/diagnostic-evidence.test.ts
./test/diagnostic-intake.test.ts
./test/diagnostic-journal.test.ts
./test/diagnostic-report-dialog.test.tsx
./test/diagnostic-report-evidence.test.ts
./test/diagnostic-report-mask.test.ts
./test/diagnostic-report.test.ts
./test/diff-view-refresh.test.tsx
./test/directory-entry-sort.test.ts
./test/document-review-coordinator.test.ts
./test/document-review-delivery-coordinator.test.ts
./test/document-review-delivery-interaction.test.tsx
./test/document-review-delivery-ipc.test.ts
./test/document-review-delivery.test.ts
./test/document-review-interaction.test.tsx
./test/document-review-model.test.ts
./test/document-review-projections.test.ts
./test/document-review-retention.test.ts
./test/document-review-smoke-driver.test.ts
./test/document-review-smoke-isolation.test.ts
./test/document-review-store.test.ts
./test/document-review-workspace-controller.test.ts
./test/dom-find-target.test.tsx
./test/electron-external-move-picker.test.ts
./test/electron-process-metrics.test.ts
./test/electron-project-reveal.test.ts
./test/electron-project-trash.test.ts
./test/electron-renderer-document-lifecycle.test.ts
./test/electron-renderer-recovery.test.ts
./test/error-boundary-health.test.tsx
./test/external-document-authority.test.ts
./test/external-document-ipc.test.ts
./test/external-document-ssh.test.ts
./test/external-file-copy.test.ts
./test/external-file-grants.test.ts
./test/external-file-move-coordinator.test.ts
./test/external-file-move-renderer.test.tsx
./test/external-file-move.test.ts
./test/file-create-actions.test.tsx
./test/file-manager-reveal-policy.test.ts
./test/file-name.test.ts
./test/file-tree-reveal.test.tsx
./test/file-viewer-controls.test.tsx
./test/filename-enumerator.test.ts
./test/filename-search-coordinator.test.ts
./test/filename-search-policy.test.ts
./test/filename-search.test.tsx
./test/files-interactions.test.tsx
./test/find-control.test.tsx
./test/ghostty-render-scheduler.test.ts
./test/ghostty-terminal-events.test.ts
./test/ghostty-terminal-fit.test.ts
./test/ghostty-terminal-hyperlink.test.tsx
./test/ghostty-terminal-keyboard.test.ts
./test/ghostty-terminal-pane-lifecycle.test.tsx
./test/ghostty-terminal-search-identity.test.tsx
./test/ghostty-web-update-candidate-bundle.test.ts
./test/ghostty-web-update-candidate.test.ts
./test/ghostty-web-update-coordinator.test.ts
./test/ghostty-web-update-delivery.test.ts
./test/ghostty-web-update-github-client.test.ts
./test/ghostty-web-update-policy.test.ts
./test/ghostty-web-update-workflow.test.ts
./test/git-capability.test.ts
./test/git-engine.test.ts
./test/git-graph-layout.test.ts
./test/git-ignore-refresh.test.ts
./test/git-mutation-authorization.test.ts
./test/git-mutation-coordinator.test.ts
./test/git-parsers.test.ts
./test/git-rail-controller.test.tsx
./test/git-rail-model.test.ts
./test/git-sync-coordinator.test.ts
./test/git-sync-status.test.ts
./test/git-windowing.test.ts
./test/git-worker-host-router.test.ts
./test/git-workspace.test.tsx
./test/github-contributor-status.test.ts
./test/github-delivery-start-status.test.ts
./test/github-project-client.test.ts
./test/github-project-kind-automation.test.ts
./test/github-project-planning.test.ts
./test/github-project-pr-planning.test.ts
./test/github-token-migration.test.ts
./test/github-workflow-contexts.test.ts
./test/github-workflow-contexts.ts
./test/harness-argument-editor.test.ts
./test/harness-launch-menu-view.test.tsx
./test/harness-launch-menu.test.ts
./test/harness-launch.test.ts
./test/harness-probe.test.ts
./test/harness-profile-draft.test.ts
./test/harness-profile-editor-policy.test.ts
./test/harness-profile-editor.test.tsx
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### `glob`

**{package.json,pyproject.toml,README*,Cargo.toml,go.mod,composer.json,Gemfile,Makefile,Dockerfile,docker-compose*.yml}**

"{package.json,pyproject.toml,README*,Cargo.toml,go.mod,composer.json,Gemfile,Makefile,Dockerfile,docker-compose*.yml}"

```
./packages/rename-noreplace/package.json
./package.json
./scripts/project-management/package.json
```


---

<sub>3s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/5e9effac/hvir/README.md' does not exist
```


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
  /private/var/tmp/ws/5e9effac/hvir/electron.vite.config.ts
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
  /private/var/tmp/ws/5e9effac/hvir/vitest.config.ts
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
  /private/var/tmp/ws/5e9effac/hvir/stryker.config.json
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
  /private/var/tmp/ws/5e9effac/hvir/eslint.config.mjs
```


### `file_search`

****/build/*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/build/*.yml"
}
```

</details>

```
No files found matching pattern: **/build/*.yml
```


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
  /private/var/tmp/ws/5e9effac/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/5e9effac/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/5e9effac/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/5e9effac/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/5e9effac/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/5e9effac/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/5e9effac/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/5e9effac/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/5e9effac/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


### `grep_search`

**purpose|purpose\:**

<details>
<summary>Arguments</summary>

```json
{
  "query": "purpose|purpose\\:",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
81 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/5e9effac/hvir/LICENSE" line=17>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/THIRD_PARTY_NOTICES.md" line=33>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/THIRD_PARTY_NOTICES.md" line=68>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/THIRD_PARTY_NOTICES.md" line=101>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/THIRD_PARTY_NOTICES.md" line=134>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/test/github-token-migration.test.ts" line=50>
    purpose: 'test',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/src/main/project-host/ssh-host.ts" line=704>
    purpose: 'primary' | 'pool' = 'primary',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/src/main/project-host/ssh-host.ts" line=715>
    if (purpose === 'primary') this.promptedDuringConnect = true
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/src/main/project-host/ssh-host.ts" line=718>
    purpose === 'pool'
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/src/main/project-host/ssh-host.ts" line=733>
    if (purpose === 'primary') this.reconnectSuppressed = true
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/test/external-file-move.test.ts" line=359>
    purpose: 'move',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/packages/rename-noreplace/LICENSE" line=17>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/capture-contributor-usage.mts" line=23>
    purpose: 'contributor',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/github-delivery-adapters.ts" line=28>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/github-delivery-adapters.ts" line=47>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/sync-pull-request-planning.ts" line=33>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/sync-pull-request-planning.ts" line=52>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/read-planning-record.ts" line=32>
    purpose: 'repository',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/read-planning-record.ts" line=42>
    purpose: 'Project',
</match>
<match path="/private/var/tmp/ws/5e9effac/hvir/scripts/project-management/github-kind-automation.ts" line=33>
    purpose: 'repository',
</match>
```
````

</details>


### `grep_search`

**technology|technology\:**

<details>
<summary>Arguments</summary>

```json
{
  "query": "technology|technology\\:",
  "isRegexp": true
}
```

</details>

```
No matches found for query: technology|technology\:
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/electron.vite.config.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>140 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/electron.vite.config.ts`. Lines 1 to 143 (143 lines total): 
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
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/vitest.config.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>15 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/vitest.config.ts`. Lines 1 to 14 (14 lines total): 
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
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/stryker.config.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>24 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/stryker.config.json`. Lines 1 to 22 (22 lines total): 
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


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/eslint.config.mjs",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>188 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/eslint.config.mjs`. Lines 1 to 200 (at least 200 lines total): 
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


### `file_search`

****/build/*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/build/*.yml"
}
```

</details>

```
No files found matching pattern: **/build/*.yml
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/scripts/run-linux-package-smoke.sh",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>188 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/scripts/run-linux-package-smoke.sh`. Lines 1 to 200 (at least 200 lines total): 
```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
source_checkout=$PWD

if [[ "$#" -gt 1 ]]; then
  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
  exit 2
fi
software_rendering=0
case "${1:-}" in
'') ;;
--software-rendering) software_rendering=1 ;;
*)
  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
  exit 2
  ;;
esac

if [[ "${HVIR_LINUX_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
  echo 'Set HVIR_LINUX_PACKAGE_ACCEPTANCE=1 on a disposable compatible Linux host.' >&2
  exit 2
fi

if [[ "$(id -u)" -eq 0 ]]; then
  echo 'Run native package acceptance as an unprivileged user with sudo access.' >&2
  exit 2
fi
apparmor_integration_required=0
apparmor_userns_restriction=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
if [[ -r "$apparmor_userns_restriction" ]] &&
  [[ "$(<"$apparmor_userns_restriction")" == '1' ]]; then
  apparmor_integration_required=1
  if ! command -v apparmor_status >/dev/null 2>&1 ||
    ! apparmor_status --enabled >/dev/null 2>&1; then
    echo 'Native package acceptance requires active AppArmor enforcement on this host.' >&2
    exit 2
  fi
fi

case "$(uname -m)" in
x86_64)
  deb_arch='amd64'
  binary_arch='x86-64'
  ;;
aarch64 | arm64)
  deb_arch='arm64'
  binary_arch='ARM aarch64'
  ;;
*)
  echo "Unsupported Linux package acceptance architecture: $(uname -m)" >&2
  exit 2
  ;;
esac

package_version=$(node -p "require('./package.json').version")
package_path="$source_checkout/dist/hvir_${package_version}_${deb_arch}.deb"
if [[ ! -f "$package_path" ]]; then
  echo "Native hvir package is missing: $package_path" >&2
  exit 1
fi
if dpkg-query -W -f='${Status}' hvir 2>/dev/null | grep -Fq 'install ok installed'; then
  echo 'Native package acceptance requires a host without hvir already installed.' >&2
  exit 2
fi

temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
invocation_root=$(mktemp -d "$temporary_parent/hvir-linux-package-smoke.XXXXXX")
project_root="$invocation_root/repository"
home_root="$invocation_root/home"
config_root="$invocation_root/config"
user_state_root="$config_root/hvir"
blocked_tools_root="$invocation_root/blocked-tools"
legacy_prefix="$invocation_root/legacy-npm"
legacy_root="$legacy_prefix/lib/node_modules"
legacy_launcher="$legacy_prefix/bin/hvir"
previous_package_root="$invocation_root/previous-package"
previous_package="$invocation_root/hvir_previous_${deb_arch}.deb"
previous_installer="$invocation_root/install-previous.sh"
current_installer="$invocation_root/install-current.sh"
install_log="$invocation_root/install.log"
shadowed_install_log="$invocation_root/shadowed-install.log"
update_log="$invocation_root/update.log"
remove_log="$invocation_root/remove.log"
package_installed=0

cleanup() {
  cleanup_status=0
  if [[ "$package_installed" -eq 1 ]] ||
    dpkg-query -W -f='${Status}' hvir 2>/dev/null | grep -Fq 'install ok installed'; then
    sudo /usr/bin/apt remove -y hvir >/dev/null 2>&1 || cleanup_status=$?
  fi
  case "$invocation_root" in
  "$temporary_parent"/hvir-linux-package-smoke.*)
    rm -rf -- "$invocation_root" || cleanup_status=$?
    ;;
  *)
    echo "Refusing to clean unexpected package-smoke root: $invocation_root" >&2
    cleanup_status=1
    ;;
  esac
  return "$cleanup_status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

mkdir -p \
  "$home_root" \
  "$user_state_root" \
  "$blocked_tools_root" \
  "$legacy_prefix/bin" \
  "$legacy_root/hvir-workbench/bin" \
  "$invocation_root/cache/hvir/native"
"$source_checkout/scripts/create-smoke-repository.sh" \
  "$source_checkout" \
  "$project_root"
printf 'preserve hvir settings\n' >"$user_state_root/settings-smoke-marker"
printf 'preserve registered projects\n' >"$user_state_root/projects-smoke-marker"
for blocked_tool in node npm npx; do
  printf '#!/bin/sh\nexit 97\n' >"$blocked_tools_root/$blocked_tool"
  chmod 0755 "$blocked_tools_root/$blocked_tool"
done
printf '#!/bin/sh\nexit 97\n' \
  >"$legacy_root/hvir-workbench/bin/hvir.mjs"
chmod 0755 "$legacy_root/hvir-workbench/bin/hvir.mjs"
ln -s '../lib/node_modules/hvir-workbench/bin/hvir.mjs' "$legacy_launcher"
printf '#!/bin/sh\nexit 95\n' >"$blocked_tools_root/hvir"
chmod 0755 "$blocked_tools_root/hvir"
printf '%s\n' \
  '#!/bin/sh' \
  'case "$1:$2" in' \
  'prefix:-g) printf "%s\n" "$HVIR_FAKE_NPM_PREFIX" ;;' \
  'root:-g) printf "%s\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  'uninstall:-g)' \
  '  /bin/rm -f -- "$HVIR_FAKE_NPM_PREFIX/bin/hvir"' \
  '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
  '  ;;' \
  '*) exit 96 ;;' \
  'esac' \
  >"$legacy_prefix/bin/npm"
chmod 0755 "$legacy_prefix/bin/npm"
printf 'derived npm cache\n' >"$invocation_root/cache/hvir/native/cache-smoke-marker"

dpkg-deb --raw-extract "$package_path" "$previous_package_root"
previous_version='0.0.0'
sed -i "s/^Version:.*/Version: $previous_version/" \
  "$previous_package_root/DEBIAN/control"
dpkg-deb --root-owner-group --build "$previous_package_root" "$previous_package" >/dev/null

render_acceptance_installer() {
  local package=$1
  local version=$2
  local output=$3
  local asset_directory="${output%.sh}-assets"
  local linux_artifact="$asset_directory/$(basename "$package")"
  local macos_artifact="$asset_directory/hvir-${version}-macos-arm64.pkg"

  mkdir "$asset_directory"
  ln -s "$package" "$linux_artifact"
  printf '%s\n' 'acceptance-only macOS arm64 artifact placeholder' \
    >"$macos_artifact"
  CI=true GITHUB_ACTIONS=true node scripts/render-native-installer.mjs \
    --version "$version" \
    --repository jarmak-personal/hvir \
    --linux-x64-artifact "$linux_artifact" \
    --linux-arm64-artifact "$linux_artifact" \
    --macos-arm64-artifact "$macos_artifact" \
    --macos-team-id AAAAAAAAAA \
    --output "$output" \
    --acceptance-asset-directory "$asset_directory" \
    --acceptance-unsigned-macos true
}

render_acceptance_installer \
  "$previous_package" \
  "$previous_version" \
  "$previous_installer"
render_acceptance_installer "$package_path" "$package_version" "$current_installer"

require_equal() {
  actual=$1
  expected=$2
  label=$3
  if [[ "$actual" != "$expected" ]]; then
    echo "Native package contract failed for $label: $actual != $expected" >&2
    exit 1
  fi
}

require_file() {
  path=$1
  label=$2
  if [[ ! -f "$path" ]]; then
    echo "Native package contract failed for $label: missing $path" >&2
    exit 1
  fi
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/scripts/run-macos-package-smoke.sh",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>190 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/scripts/run-macos-package-smoke.sh`. Lines 1 to 200 (at least 200 lines total): 
```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
source_checkout=$PWD

if [[ "${HVIR_MACOS_PACKAGE_ACCEPTANCE:-}" != '1' ]]; then
  echo 'Refusing to modify native package state without HVIR_MACOS_PACKAGE_ACCEPTANCE=1.' >&2
  exit 1
fi
if [[ "$(uname -s):$(uname -m)" != 'Darwin:arm64' ]]; then
  echo "Native macOS package acceptance requires macOS arm64, found $(uname -s) $(uname -m)." >&2
  exit 1
fi
if [[ "${CI:-}" != 'true' || "${GITHUB_ACTIONS:-}" != 'true' ]]; then
  echo 'Native macOS package acceptance is restricted to an ephemeral GitHub Actions host.' >&2
  exit 1
fi
case "${HVIR_MACOS_PACKAGE_MODE:-}" in
structural | signed) package_mode=$HVIR_MACOS_PACKAGE_MODE ;;
*)
  echo 'HVIR_MACOS_PACKAGE_MODE must be structural or signed.' >&2
  exit 1
  ;;
esac

package_id='dev.hvir.app'
application='/Applications/hvir.app'
executable="$application/Contents/MacOS/hvir"
command='/usr/local/bin/hvir'
inventory='/Library/Application Support/hvir/package-inventory-v1.txt'
receipt="$package_id"
expected_team_id=${HVIR_MACOS_EXPECTED_TEAM_ID:-}
package_version=$(node -p "require('./package.json').version")

shopt -s nullglob
package_matches=(dist/hvir-*-macos-arm64.pkg)
shopt -u nullglob
if [[ ${#package_matches[@]} -ne 1 ]]; then
  echo "Expected exactly one macOS arm64 package, found ${#package_matches[@]}." >&2
  exit 1
fi
package_path="$source_checkout/${package_matches[0]}"

for path in "$application" "$command" "$inventory"; do
  if [[ -e "$path" || -L "$path" ]]; then
    echo "Refusing to replace pre-existing acceptance host state: $path" >&2
    exit 1
  fi
done
if pkgutil --pkg-info "$receipt" >/dev/null 2>&1; then
  echo "Refusing to replace pre-existing package receipt: $receipt" >&2
  exit 1
fi
sudo -n true

temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
invocation_root=$(mktemp -d "$temporary_parent/hvir-macos-package-smoke.XXXXXX")
project_root="$invocation_root/repository"
home_root="$invocation_root/home"
legacy_prefix="$invocation_root/legacy-npm"
legacy_root="$legacy_prefix/lib/node_modules"
legacy_launcher="$legacy_prefix/bin/hvir"
old_root="$invocation_root/old-root"
old_package="$invocation_root/hvir-previous.pkg"
old_component_plist="$invocation_root/old-component.plist"
old_installer="$invocation_root/install-previous.sh"
current_installer="$invocation_root/install-current.sh"
previous_command="$invocation_root/hvir-previous-command"
unowned_command="$invocation_root/hvir-unowned-command"
signature_log="$invocation_root/package-signature.log"
install_log="$invocation_root/install.log"
installed_by_smoke=0

remove_package_state() {
  sudo /bin/rm -rf -- "$application"
  sudo /bin/rm -f -- "$command" "$inventory"
  sudo /bin/rmdir '/Library/Application Support/hvir' 2>/dev/null || true
  sudo pkgutil --forget "$receipt" >/dev/null 2>&1 || true
}

cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  if [[ "$installed_by_smoke" -eq 1 ]]; then remove_package_state; fi
  case "$invocation_root" in
  "$temporary_parent"/hvir-macos-package-smoke.*)
    /bin/rm -rf -- "$invocation_root"
    ;;
  *)
    echo "Refusing to clean unexpected macOS package smoke root: $invocation_root" >&2
    status=1
    ;;
  esac
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

mkdir -p \
  "$home_root/Library/Application Support/hvir" \
  "$home_root/Library/Caches/hvir/native" \
  "$legacy_prefix/bin" \
  "$legacy_root/hvir-workbench/bin" \
  "$old_root"
printf '%s\n' 'settings-preserved' \
  >"$home_root/Library/Application Support/hvir/settings-smoke.json"
printf '%s\n' 'registered-project-preserved' \
  >"$home_root/Library/Application Support/hvir/registered-projects-smoke.json"
printf '#!/bin/sh\nexit 97\n' \
  >"$legacy_root/hvir-workbench/bin/hvir.mjs"
chmod 0755 "$legacy_root/hvir-workbench/bin/hvir.mjs"
ln -s '../lib/node_modules/hvir-workbench/bin/hvir.mjs' "$legacy_launcher"
printf '%s\n' \
  '#!/bin/sh' \
  'case "$1:$2" in' \
  'prefix:-g) printf "%s\n" "$HVIR_FAKE_NPM_PREFIX" ;;' \
  'root:-g) printf "%s\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  'uninstall:-g)' \
  '  /bin/rm -f -- "$HVIR_FAKE_NPM_PREFIX/bin/hvir"' \
  '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
  '  ;;' \
  '*) exit 96 ;;' \
  'esac' \
  >"$legacy_prefix/bin/npm"
chmod 0755 "$legacy_prefix/bin/npm"
printf '%s\n' 'derived npm cache' \
  >"$home_root/Library/Caches/hvir/native/cache-smoke-marker"
"$source_checkout/scripts/create-smoke-repository.sh" \
  "$source_checkout" \
  "$project_root"

if [[ "$package_mode" == 'signed' ]]; then
  if [[ -z "$expected_team_id" ]]; then
    echo 'Signed acceptance requires HVIR_MACOS_EXPECTED_TEAM_ID.' >&2
    exit 1
  fi
  pkgutil --check-signature "$package_path" | tee "$signature_log"
  grep -Eq "Developer ID Installer: .+ \\($expected_team_id\\)" "$signature_log"
  grep -Fq 'Signed with a trusted timestamp' "$signature_log"
  xcrun stapler validate "$package_path"
  spctl --assess --type install --verbose=2 "$package_path"
else
  set +e
  pkgutil --check-signature "$package_path" >"$signature_log" 2>&1
  signature_status=$?
  set -e
  cat "$signature_log"
  if [[ "$signature_status" -eq 0 ]] ||
    ! grep -Fq 'Status: no signature' "$signature_log"; then
    echo 'Pull-request package unexpectedly carried an installer signature.' >&2
    exit 1
  fi
fi

expanded_package="$invocation_root/expanded"
pkgutil --expand-full "$package_path" "$expanded_package"
grep -Fq 'hostArchitectures="arm64"' "$expanded_package/Distribution"
grep -Fq 'enable_anywhere="false"' "$expanded_package/Distribution"
grep -Fq 'enable_currentUserHome="false"' "$expanded_package/Distribution"
grep -Fq 'enable_localSystem="true"' "$expanded_package/Distribution"
component_info="$expanded_package/dev.hvir.app.pkg/PackageInfo"
grep -Fq '<upgrade-bundle>' "$component_info"
grep -Fq '<strict-identifier>' "$component_info"
grep -Fq '<preinstall ' "$component_info"
grep -Fq '<postinstall ' "$component_info"

ditto 'dist/mac-arm64/hvir.app' "$old_root/hvir.app"
printf '%s\n' 'remove-during-package-upgrade' \
  >"$old_root/hvir.app/Contents/Resources/hvir-previous-only.txt"
codesign \
  --force \
  --deep \
  --sign - \
  --options runtime \
  --entitlements build/entitlements.mac.plist \
  "$old_root/hvir.app"
codesign --verify --deep --strict --verbose=2 "$old_root/hvir.app"
pkgbuild --analyze --root "$old_root" "$old_component_plist"
plutil -replace '0.BundleIsRelocatable' -bool false "$old_component_plist"
plutil -replace '0.BundleIsVersionChecked' -bool true "$old_component_plist"
plutil -replace '0.BundleHasStrictIdentifier' -bool true "$old_component_plist"
plutil -replace '0.BundleOverwriteAction' -string upgrade "$old_component_plist"
pkgbuild \
  --root "$old_root" \
  --identifier "$package_id" \
  --component-plist "$old_component_plist" \
  --scripts build/pkg-scripts \
  --install-location /Applications \
  --version 0.0.0 \
  "$old_package"

render_acceptance_installer() {
  local package=$1
  local version=$2
  local output=$3
  local unsigned=$4
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/5e9effac/hvir/scripts/phase8-gauntlet.sh",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>11 lines</summary>

````
File: `/private/var/tmp/ws/5e9effac/hvir/scripts/phase8-gauntlet.sh`. Lines 1 to 12 (12 lines total): 
```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi

```
````

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/5e9effac/hvir/package.json:1-128
/private/var/tmp/ws/5e9effac/hvir/electron.vite.config.ts:1-143
/private/var/tmp/ws/5e9effac/hvir/vitest.config.ts:1-14
/private/var/tmp/ws/5e9effac/hvir/stryker.config.json:1-22
/private/var/tmp/ws/5e9effac/hvir/eslint.config.mjs:1-200
/private/var/tmp/ws/5e9effac/hvir/scripts/run-linux-package-smoke.sh:1-200
/private/var/tmp/ws/5e9effac/hvir/scripts/run-macos-package-smoke.sh:1-200
/private/var/tmp/ws/5e9effac/hvir/scripts/phase8-gauntlet.sh:1-12
\</final_answer>


---

<sub>8s</sub>

### Copilot

The project is an Electron/React desktop app with native terminal support. I’ll now inspect its source entry points, packaging metadata, and contribution conventions to make the README specific rather than generic.

---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/5e9effac/hvir/package.json.**

/private/var/tmp/ws/5e9effac/hvir/package.json

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

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/5e9effac/hvir/electron-builder.yml.**

/private/var/tmp/ws/5e9effac/hvir/electron-builder.yml

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

<sub>11s</sub>

### `bash`

**List app entrypoints and repository guidance**

$ find src -maxdepth 3 -type f | sort | sed -n '1,220p'; printf '\n--- github ---\n'; find .github -maxdepth 3 -type f | sort | sed -n '1,120p'; printf '\n--- root docs/config ---\n'; find . -maxdepth 2 -type f \( -iname '*contribut*' -o -iname '*code_of_conduct*' -o -iname '*security*' -o -iname '*license*' \) -print | sort

<details>
<summary>243 lines</summary>

```
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/diagnostics/diagnostic-event.ts
src/main/diagnostics/diagnostic-evidence.ts
src/main/diagnostics/diagnostic-intake.ts
src/main/diagnostics/diagnostic-journal.ts
src/main/diagnostics/diagnostic-report-builder.ts
src/main/diagnostics/diagnostic-report-coordinator.ts
src/main/diagnostics/diagnostic-report-evidence.ts
src/main/diagnostics/diagnostic-report-storage.ts
src/main/diagnostics/electron-diagnostic-report-actions.ts
src/main/diagnostics/runtime-diagnostics.ts
src/main/document-review/document-review-application.ts
src/main/document-review/document-review-coordinator.ts
src/main/document-review/document-review-delivery-coordinator.ts
src/main/document-review/document-review-delivery-policy.ts
src/main/document-review/document-review-delivery-terminal.ts
src/main/document-review/document-review-policy.ts
src/main/document-review/document-review-retention.ts
src/main/document-review/document-review-runtime.ts
src/main/document-review/document-review-store-codec.ts
src/main/document-review/document-review-store.ts
src/main/document-review/index.ts
src/main/filename-search/filename-enumerator.ts
src/main/filename-search/filename-search-coordinator.ts
src/main/filename-search/filename-search-policy.ts
src/main/filename-search/index.ts
src/main/git/git-branches.ts
src/main/git/git-command-context.ts
src/main/git/git-detail.ts
src/main/git/git-diff.ts
src/main/git/git-engine.ts
src/main/git/git-history.ts
src/main/git/git-parsers.ts
src/main/git/git-status.ts
src/main/git/git-worktrees.ts
src/main/git/mutation-authorization.ts
src/main/git/mutation-coordinator.ts
src/main/git/untracked-line-counts.ts
src/main/git/worker-host-broker.ts
src/main/git/worker-host-router.ts
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
src/main/health/workbench-health-events.ts
src/main/health/workbench-health.ts
src/main/html-preview-protocol.ts
src/main/index.ts
src/main/ipc.ts
src/main/ipc/authority-channel-policy.ts
src/main/ipc/authority-port.ts
src/main/ipc/authority-router.ts
src/main/ipc/deps.ts
src/main/ipc/host-path-authority.ts
src/main/ipc/operation-result.ts
src/main/ipc/project-commands.ts
src/main/navigation-policy.ts
src/main/project-coordinator.ts
src/main/project-file-operations/case-only-project-entry-rename.ts
src/main/project-file-operations/clipboard-file-list.ts
src/main/project-file-operations/create-project-entry.ts
src/main/project-file-operations/delete-project-entry.ts
src/main/project-file-operations/electron-clipboard-files.ts
src/main/project-file-operations/electron-external-move-picker.ts
src/main/project-file-operations/external-file-copy.ts
src/main/project-file-operations/external-file-grants.ts
src/main/project-file-operations/external-file-move-operation.ts
src/main/project-file-operations/external-file-move.ts
src/main/project-file-operations/external-file-operation.ts
src/main/project-file-operations/index.ts
src/main/project-file-operations/project-entry-deletion-operation.ts
src/main/project-file-operations/project-entry-operation-results.ts
src/main/project-file-operations/project-entry-organization.ts
src/main/project-file-operations/project-entry-removal.ts
src/main/project-file-operations/project-file-confinement.ts
src/main/project-file-operations/project-file-copy-limits.ts
src/main/project-file-operations/project-file-operation-coordinator.ts
src/main/project-file-operations/project-file-operation-runtime.ts
src/main/project-file-operations/project-file-path-errors.ts
src/main/project-file-operations/staging-cleanup.ts
src/main/project-file-operations/verified-project-copy-manifest.ts
src/main/project-file-operations/verified-project-copy.ts
src/main/project-file-operations/verified-project-entry-metadata.ts
src/main/project-folder-picker/index.ts
src/main/project-folder-picker/project-folder-picker-coordinator.ts
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
src/main/pty/pty-contract.ts
src/main/pty/pty-launch-admission.ts
src/main/pty/pty-session-lifetime.ts
src/main/pty/pty-session-observation.ts
src/main/pty/pty-stream-attachment.ts
src/main/pty/pty-supervisor.ts
src/main/renderer-event-delivery.ts
src/main/renderer-event-publisher.ts
src/main/renderer-presentation-resources.ts
src/main/renderer-resource-scopes.ts
src/main/sessions/sessions-observation-application.ts
src/main/sessions/sessions-observation-port.ts
src/main/sessions/sessions-open-resolution.ts
src/main/sessions/sessions-projection-identities.ts
src/main/sessions/sessions-projection-values.ts
src/main/sessions/sessions-telemetry-projection.ts
src/main/sessions/sessions-usage-observation-port.ts
src/main/sessions/sessions-usage-projection.ts
src/main/smoke/app-settings.ts
src/main/smoke/bootstrap-contract.ts
src/main/smoke/capacity-live-presentation.ts
src/main/smoke/capacity-output-fixtures.ts
src/main/smoke/capacity-performance.ts
src/main/smoke/capacity-scenario.ts
src/main/smoke/capacity-terminals.ts
src/main/smoke/capacity.ts
src/main/smoke/cleanup.ts
src/main/smoke/development-performance.ts
src/main/smoke/diagnostic-report-restart.ts
src/main/smoke/document-review-driver.ts
src/main/smoke/document-review-evidence.mts
src/main/smoke/document-review-fixture.ts
src/main/smoke/document-review.ts
src/main/smoke/electron-process-metrics.ts
src/main/smoke/external-documents.ts
src/main/smoke/external-file-move.ts
src/main/smoke/failure-evidence.mts
src/main/smoke/filename-search.ts
src/main/smoke/files-interactions.ts
src/main/smoke/git-changes-layout.ts
src/main/smoke/git-diff.ts
src/main/smoke/git-dirty-navigation.ts
src/main/smoke/git-workflow.ts
src/main/smoke/harness-profile-workflow.ts
src/main/smoke/harness-settings-layout.ts
src/main/smoke/harness-settings-visual.ts
src/main/smoke/image-paste-fallback.ts
src/main/smoke/index.ts
src/main/smoke/interruption-checkpoint.ts
src/main/smoke/interruption-identity.mts
src/main/smoke/macos-file-pasteboard.ts
src/main/smoke/native-host-worker.ts
src/main/smoke/native-pty.ts
src/main/smoke/platform-contracts.ts
src/main/smoke/project-entry-deletion.ts
src/main/smoke/project-file-fixture.ts
src/main/smoke/project-file-operations.ts
src/main/smoke/project-fixture-commands.ts
src/main/smoke/project-state-fixture.ts
src/main/smoke/pty-lifecycle.ts
src/main/smoke/renderer-authority.ts
src/main/smoke/renderer-isolation.ts
src/main/smoke/renderer-lifecycle.ts
src/main/smoke/renderer-readiness-observer.ts
src/main/smoke/renderer-readiness.ts
src/main/smoke/renderer-recovery-delivery.ts
src/main/smoke/renderer-recovery-producer.ts
src/main/smoke/renderer-recovery-scenario.ts
src/main/smoke/renderer-recovery.ts
src/main/smoke/scenario-selection.mts
src/main/smoke/scenarios.ts
src/main/smoke/scrollbar-presentation.ts
src/main/smoke/sessions-project-fixture.ts
src/main/smoke/sessions-projection-scenario.ts
src/main/smoke/sessions-projection.ts
src/main/smoke/sessions-usage-provider.ts
src/main/smoke/sessions-visual.ts
src/main/smoke/terminal-chrome.ts
src/main/smoke/terminal-context-menu.ts
src/main/smoke/terminal-cursor-presentation.ts
src/main/smoke/terminal-explicit-launch.ts
src/main/smoke/terminal-file-paste.ts
src/main/smoke/terminal-hidden-reveal.ts
src/main/smoke/terminal-horizon-presentation.ts

--- github ---
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

--- root docs/config ---
./LICENSE
./scripts/capture-contributor-usage.mts
./test/contributor-status-entrypoint.test.ts
./test/contributor-status.test.ts
./test/github-contributor-status.test.ts
./test/project-kind-workflow-security.test.ts
./test/project-pr-workflow-security.test.ts
./test/release-workflow-security.test.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>11s</sub>

### `rg`

**hvir|HVIR|terminal|workspace|GitHub|Claude|Codex**

"hvir|HVIR|terminal|workspace|GitHub|Claude|Codex" in *.{ts,tsx,html} (src)

<details>
<summary>111 matches</summary>

```
[grep content: 5463 matches across 403 file(s) under src]

preload/terminal-clipboard-file-paste.ts (3 match(es)):
   import { terminalClipboardFilePastePath } from '../shared'
   export function terminalClipboardFilePasteText(
     return terminalClipboardFilePastePath(readNativePath(file))

preload/index.ts (7 match(es)):
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
   import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
       terminalClipboardFilePasteText(file, (candidate) =>
           new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
   contextBridge.exposeInMainWorld('hvir', api)

main/workspace-removal-coordinator.ts (12 match(es)):
     dismissWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
     removeMissingWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
   /** Owns the shared resource and catalog lifecycle for a definitively missing workspace. */
       workspaceId: string,
       const workspace = project.workspaces.find((candidate) => candidate.id === workspaceId)
       if (!workspace) return this.registry.state()
       if (!workspace.missing) throw new Error('Only removed worktrees can be dismissed')
       await this.cleanup.forgetWorkspaceSessions(workspace.root)
       const state = await this.registry.dismissWorkspace(projectId, workspaceId)
         this.cleanup.revokeWorkspace(workspace.root),
         this.cleanup.closeWorkspaceWebPanes(workspace.root),
       this.cleanup.releaseHtmlPreviews(workspace.root)

main/git/git-branches.ts (15 match(es)):
     async branches(workspaceRoot: HostPath): Promise<GitBranchModel> {
       this.context.assertHost(workspaceRoot)
       const context = await this.context.project(workspaceRoot)
           this.worktrees.discover(workspaceRoot),
     async fetch(workspaceRoot: HostPath): Promise<void> {
       this.context.assertHost(workspaceRoot)
       const context = await this.context.project(workspaceRoot)
     async pullFastForward(workspaceRoot: HostPath): Promise<void> {
       this.context.assertHost(workspaceRoot)
       const model = await this.branches(workspaceRoot)
       const context = await this.context.project(workspaceRoot)
     async switchBranch(workspaceRoot: HostPath, branch: string): Promise<void> {
       const model = await this.branches(workspaceRoot)
       if (target.worktree && !hostPathEquals(target.worktree, workspaceRoot)) {
       const result = await this.context.mutate(workspaceRoot, args)
main/git/worker-host-broker.ts:       // watcher cannot feed a request back into itself. The bounded workspace

main/git/mutation-coordinator.ts (30 match(es)):
   import type { WorkspaceRemovalPort } from '../workspace-removal-coordinator'
       readonly workspaceId: string
     readonly workspaces: GitMutationWorkspacePort
   /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
       const { workspaces } = this.options
       workspaces.invalidateProject(projectId)
       const settled = workspaces.settleProject(projectId)
       return workspaces.coalesceProjectOperation(projectId, async () => {
       return this.options.workspaces.serialize(async () => {
         const { registry, workspaces } = this.options
           'Branch switch belongs to another workspace',
         workspaces.invalidateProject(projectId)
         await workspaces.settleProject(projectId)
       return this.options.workspaces.serialize(async () => {
         this.assertActive(root, 'Git fetching belongs to another workspace', 'fetching')
       return this.options.workspaces.serialize(async () => {
         const { registry, workspaces } = this.options
         this.assertActive(root, 'Git pulling belongs to another workspace', 'pulling')
         workspaces.invalidateProject(projectId)
         await workspaces.settleProject(projectId)
       const targets = project.workspaces.filter(
         (workspace) => workspace.missing && workspace.prunableReason !== undefined,
         (workspace) => workspace.id === registry.active.workspaceId,
         await this.options.workspaces.stopWatch()
         await this.options.workspaces.replaceWatch(registry.active)
           ?.workspaces.filter((workspace) => !workspace.missing)
           .map((workspace) => workspace.root) ?? []
         return await this.options.workspaces.refresh(projectId)
         this.report(`[git] workspace refresh after ${operation} failed`, error)
         this.options.workspaces.scheduleRefresh(projectId)

main/git/git-status.ts (7 match(es)):
     async workspaceActivity(
       workspaceRoot: HostPath,
       this.context.assertHost(workspaceRoot)
         isNestedHostPath(candidate, workspaceRoot),
         ? (await this.context.project(workspaceRoot))?.repositoryPrefix
         workspaceRoot,
         workspaceRoot,
main/git/mutation-authorization.ts:         `Git ${mutation.kind} denied: command root is not an exact workspace`,

main/git/git-parsers.ts (4 match(es)):
     workspaceRoot: HostPath,
     const workspacePrefix = workspaceRoot.path === '/' ? '/' : `${workspaceRoot.path}/`
       if (!isNestedHostPath(candidate, workspaceRoot)) return []
       const relative = candidate.path.slice(workspacePrefix.length).replace(/\/$/, '')

main/git/git-engine.ts (11 match(es)):
     workspaceActivity(
       workspaceRoot: HostPath,
       return this.statusCapability.workspaceActivity(workspaceRoot, relatedWorktreeRoots)
     branches(workspaceRoot: HostPath): Promise<GitBranchModel> {
       return this.branchCapability.branches(workspaceRoot)
     fetch(workspaceRoot: HostPath): Promise<void> {
       return this.branchCapability.fetch(workspaceRoot)
       workspaceRoot: HostPath,
       return this.branchCapability.pullFastForward(workspaceRoot)
       workspaceRoot: HostPath,
       return this.branchCapability.switchBranch(workspaceRoot, branch)
main/navigation-policy.ts: /** Only these explicit external schemes may leave hvir for the OS browser. */

main/renderer-resource-scopes.ts (8 match(es)):
         readonly lifetime: 'workspace'
             (record.qualifier.lifetime === 'workspace' && record.qualifier.id === id)),
       type: Extract<RendererResourceQualifier, { lifetime: 'workspace' }>['type'],
         lifetime: 'workspace',
         throw new Error(`Renderer ${type} resource is not owned by the source workspace`)
         lifetime: 'workspace',
           `Renderer ${type} resource is already registered in the target workspace`,
               record.qualifier.lifetime === 'workspace' &&

[omitted 5363 match(es) in 391 file(s); see original output for full results]
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/5e9effac/hvir/LICENSE.**

/private/var/tmp/ws/5e9effac/hvir/LICENSE

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

<sub>11s</sub>

### Copilot

I have the supported commands and core capabilities. I’ll verify the visible UI labels and CI expectations, then add the README with development, validation, packaging, and licensing guidance.

---

<sub>14s</sub>

### `rg`

**<h1|hvir|Terminal|Projects|Workspaces|Sessions|Git|Settings**

"<h1|hvir|Terminal|Projects|Workspaces|Sessions|Git|Settings" in *.tsx (src/renderer)

<details>
<summary>160 matches</summary>

```
[grep content: 874 matches across 64 file(s) under src/renderer/src]

ErrorBoundary.tsx (2 match(es)):
           window.hvir.diagnostics.recordRenderContainment(this.state.occurrenceId)
           <h1>hvir hit a rendering problem</h1>

App.tsx (94 match(es)):
     type GitChanges,
   import { TerminalWorkspaceCollection } from './terminal/TerminalWorkspaceCollection'
   import { useTerminalWorkspaceRuntime } from './terminal/use-terminal-workspace-runtime'
   import { useTerminalAttention } from './terminal/use-terminal-attention'
   import { ProjectsBar } from './workspaces/ProjectsBar'
   import { isGitIgnoreRulePath } from './tree/git-ignore-refresh'
   import { GitPanel } from './git/GitPanel'
   import { workspaceGitEnabled } from './git/git-capability'
   import { GitGraphView } from './git/GitGraphView'
   import { useGitWorkspace } from './git/use-git-workspace'
   import { SettingsDialog } from './settings/SettingsDialog'
   import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
  ... 70 more match(es) omitted in this file
             onOpenSettings={() => overlays.openSettings()}
             onOpenTerminalSettings={() => overlays.openSettings('terminal')}
             onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
             onAddHarness={overlays.openAddHarnessSettings}
         <SessionsApplicationDestination
           runtime={terminalWorkspaces}
           onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
           <SettingsDialog
             onClose={overlays.closeSettings}
             onSave={(nextTheme, nextSettings) => {
               setAppSettings(nextSettings)
               overlays.closeSettings()

development/development-performance-fixture.tsx (3 match(es)):
     'hvir:development-performance-measure-fixture'
       container.dataset.hvirDevelopmentPerformanceFixture = 'running'
             container.dataset.hvirDevelopmentPerformanceFixture = 'complete'

main.tsx (3 match(es)):
   import { initializeAppSettings } from './settings/settings'
   initializeAppSettings(document.documentElement.style)
   if (!container) throw new Error('hvir: #root element not found')

development/development-renderer-instrumentation.tsx (7 match(es)):
   const ACTIVE_INSTRUMENTATION_KEY = '__hvirDevelopmentRendererInstrumentation'
     document.documentElement.dataset.hvirDevelopmentPerformanceMeasureBudget = String(
     document.documentElement.dataset.hvirDevelopmentPerformanceMeasureInterval = String(
     document.documentElement.dataset.hvirDevelopmentPerformanceMeasurePolicy =
         delete document.documentElement.dataset.hvirDevelopmentPerformanceMeasureBudget
         delete document.documentElement.dataset.hvirDevelopmentPerformanceMeasureInterval
         delete document.documentElement.dataset.hvirDevelopmentPerformanceMeasurePolicy

git/GitHistoryView.tsx (19 match(es)):
     GitCommitDetail,
     GitCommitSummary,
     GitRepositoryState,
   import { buildGitGraphLayout, type GitGraphRow } from './git-graph-layout'
   import { GitGraphCell, GitGraphContinuation } from './GitGraphLanes'
   interface GitHistoryViewProps {
     readonly commits: readonly GitCommitSummary[]
     readonly repositoryState?: GitRepositoryState
   export function GitHistoryView(props: GitHistoryViewProps): ReactElement {
           <div className="git-empty">Not a Git repository</div>
         readonly graphRow: GitGraphRow
         readonly graphRow: GitGraphRow
         readonly detail: GitCommitDetail
         readonly graphRow: GitGraphRow
         readonly graphRow: GitGraphRow
   }: GitHistoryViewProps): ReactElement {
     const layout = useMemo(() => buildGitGraphLayout(commits), [commits])
                     <GitGraphCell
                 <GitGraphContinuation

git/GitGraphLanes.tsx (9 match(es)):
   import type { GitGraphRow } from './git-graph-layout'
   import type { GitGraphLaneMetrics } from './git-graph-lane-metrics'
   export function GitGraphCell({
     readonly row: GitGraphRow
     readonly metrics: GitGraphLaneMetrics
   export function GitGraphContinuation({
     readonly row: GitGraphRow
     readonly metrics: GitGraphLaneMetrics
     row: GitGraphRow,

settings/SettingsActiveSection.tsx (23 match(es)):
     HarnessProfilesSettings,
     type HarnessProfilesSettingsHandle,
   } from './HarnessProfilesSettings'
   import type { SettingsDraft, SettingsDraftValidation } from './settings-draft'
   import type { SettingsSection } from './settings-navigation'
   import { AppearanceSettings } from './sections/AppearanceSettings'
   import { GitSettings } from './sections/GitSettings'
   import { KeybindingsSettings } from './sections/KeybindingsSettings'
   import { TerminalSettings } from './sections/TerminalSettings'
   interface SettingsActiveSectionProps {
     readonly activeSection: SettingsSection
     readonly draft: SettingsDraft
     readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
     readonly harnessProfiles: RefObject<HarnessProfilesSettingsHandle | null>
     readonly onChange: <K extends keyof SettingsDraft>(
       value: SettingsDraft[K],
   export function SettingsActiveSection({
   }: SettingsActiveSectionProps): ReactElement {
         return <AppearanceSettings draft={draft} onChange={onChange} />
           <TerminalSettings
         return <GitSettings draft={draft} onChange={onChange} />
           <KeybindingsSettings draft={draft} validation={validation} onChange={onChange} />
           <HarnessProfilesSettings

git/GitBranchControls.tsx (5 match(es)):
   import type { GitRailModel } from './git-rail-model'
   interface GitBranchControlsProps {
     readonly model: GitRailModel
   export function GitBranchControls({
   }: GitBranchControlsProps): ReactElement | null {

settings/SettingsDialog.tsx (18 match(es)):
   import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
   import { SettingsActiveSection } from './SettingsActiveSection'
   import { SettingsSectionNavigation } from './SettingsSectionNavigation'
   import type { AppSettings } from './settings'
     type SettingsDestination,
   import { useSettingsController } from './use-settings-controller'
   interface SettingsDialogProps {
     readonly settings: AppSettings
     readonly onSave: (theme: AppTheme, settings: AppSettings) => void
     readonly initialDestination?: SettingsDestination
   export function SettingsDialog({
   }: SettingsDialogProps): ReactElement {
     const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
     const controller = useSettingsController({
               <h2 id="settings-title">Settings</h2>
             <p>Keep hvir focused, legible, and tuned to the way you work.</p>
             <SettingsSectionNavigation
               <SettingsActiveSection

git/GitGraphView.tsx (23 match(es)):
     type GitCommitDetail,
     type GitCommitSummary,
     type GitRepositoryState,
   import { buildGitGraphLayout } from './git-graph-layout'
   import { GitGraphCell } from './GitGraphLanes'
   interface GitGraphViewProps {
   export function GitGraphView({
   }: GitGraphViewProps): ReactElement {
     const [commits, setCommits] = useState<readonly GitCommitSummary[]>([])
     const [repositoryState, setRepositoryState] = useState<GitRepositoryState>()
     const [detail, setDetail] = useState<GitCommitDetail>()
     const commitsValue = useRef<readonly GitCommitSummary[]>([])
             const page = await window.hvir.invoke('git:history', {
       void window.hvir
     const layout = useMemo(() => buildGitGraphLayout(commits), [commits])
       <section className="git-graph-view" aria-label="Git history graph">
             <strong>Git history</strong>
           <GraphEmpty text="Reconnect to inspect Git history." />
           <GraphEmpty text="Not a Git repository" />
                         <GitGraphCell
     readonly detail?: GitCommitDetail
                 path={joinHostPath(root, '.hvir-commit-message.md')}
     readonly detail: GitCommitDetail

settings/HarnessProfilesSettings.tsx (9 match(es)):
   import { SettingsSection } from './SettingsSection'
   interface HarnessProfilesSettingsProps {
   export interface HarnessProfilesSettingsHandle {
   export const HarnessProfilesSettings = forwardRef<
     HarnessProfilesSettingsHandle,
     HarnessProfilesSettingsProps
   >(function HarnessProfilesSettings(
       <SettingsSection
       </SettingsSection>

[omitted 659 match(es) in 52 file(s); see original output for full results]
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/5e9effac/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/5e9effac/hvir/.github/workflows/ci.yml

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/5e9effac/hvir/.githooks/pre-push.**

/private/var/tmp/ws/5e9effac/hvir/.githooks/pre-push

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/5e9effac/hvir/scripts/install-git-hooks.sh.**

/private/var/tmp/ws/5e9effac/hvir/scripts/install-git-hooks.sh

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

<sub>14s</sub>

### `rg`

**applications?|desktop|developer|terminal|workspace|hvir**

"applications?|desktop|developer|terminal|workspace|hvir" in *.test.{ts,tsx} (test)

<details>
<summary>126 matches</summary>

```
[grep content: 4125 matches across 288 file(s) under test]

terminal-clipboard-write.test.tsx (4 match(es)):
   import { MAX_CLIPBOARD_OSC_PAYLOAD } from '../src/renderer/src/terminal/terminal-clipboard-osc'
   import { writeClipboardFromOsc } from '../src/renderer/src/terminal/terminal-clipboard-write'
     vi.stubGlobal('window', { hvir: { send } })
       expect(send).toHaveBeenCalledExactlyOnceWith('terminal:clipboard-write', { text })

diagnostic-intake.test.ts (5 match(es)):
   const SENSITIVE = '/secret/project TOKEN=hvir-private terminal prompt'
       intake.record({ kind: 'application-startup-failed' })
         intake.record({ kind: 'application-ready' })
         source: 'application',
       intake.record({ kind: 'application-ready' })

terminal-recovery-decision-ipc.test.ts (18 match(es)):
   import { registerTerminalIpc } from '../src/main/ipc/features/terminal'
   describe('terminal recovery decision IPC', () => {
       const { handler, workspaceRoot } = fixture(authorizedRoot, recordRecoveryDecision)
         restoredIds: ['terminal-1'],
         skippedIds: ['terminal-2'],
       expect(workspaceRoot).toHaveBeenCalledWith(requestedRoot)
         restoredIds: ['terminal-1'],
         skippedIds: ['terminal-2'],
         restoredIds: ['terminal-1', 'terminal-1'],
         restoredIds: ['terminal-1'],
         skippedIds: ['terminal-1'],
         skippedIds: ['invalid terminal id'],
         'Invalid terminal recovery decision',
     const workspaceRoot = vi.fn(() => authorizedRoot)
         workspaceRoot,
       terminalSessions: { recordRecoveryDecision },
     const handler = handlers.get('terminal:record-recovery-decision')
       workspaceRoot,

merge-pr-skill.test.ts (8 match(es)):
     new URL('../.claude/skills/hvir-merge-pr/SKILL.md', import.meta.url),
     new URL('../.claude/skills/hvir-implement-epic/SKILL.md', import.meta.url),
   describe('hvir pull-request merge skill', () => {
       const codexPath = new URL('../.agents/skills/hvir-merge-pr', import.meta.url)
       expect(readlinkSync(codexPath)).toBe('../../.claude/skills/hvir-merge-pr')
       expect(skill).toContain('name: hvir-merge-pr')
       expect(epicSkill).not.toContain('internal `$hvir-merge-pr` transfer')
       expect(agents).toContain('explicit `hvir-merge-pr` invocation is the approval')

html-preview-protocol.test.ts (2 match(es)):
           scheme: 'hvir-preview',
     it('isolates release by renderer generation and workspace', () => {

attention-badge.test.ts (2 match(es)):
     it('aggregates distinct actionable terminals only while hvir is unfocused', () => {
     it('stops quietly when the desktop has no badge implementation', () => {

document-review-workspace-controller.test.ts (67 match(es)):
   } from '../src/renderer/src/document-review/document-review-workspace-controller'
   const workspaceA: ReviewWorkspaceIdentity = { id: 'a', root: localPath('/a') }
   const workspaceB: ReviewWorkspaceIdentity = { id: 'b', root: localPath('/b') }
   describe('document review workspace controller', () => {
         restore: vi.fn((workspace: ReviewWorkspaceIdentity) =>
           workspace.id === 'a' ? restoreA.promise : restoreB.promise,
       fixture.controller.activate(workspaceA)
       restoreA.resolve(stored(workspaceA, 1, modelWithComment(workspaceA, documentA)))
       fixture.controller.activate(workspaceA)
       fixture.controller.activate(workspaceB)
       restoreB.resolve(stored(workspaceB, 2, emptyModel(workspaceB)))
         workspace: workspaceB,
  ... 43 more match(es) omitted in this file
           stored(request.workspace, request.expectedRevision + 1, request.model),
     _workspace: ReviewWorkspaceIdentity,
     return { workspaceGeneration: 7, revision, model }
   function emptyModel(workspace: ReviewWorkspaceIdentity): DocumentReviewModel {
     return { workspace, comments: [], batches: [] }
     workspace: ReviewWorkspaceIdentity,
       workspace,
           workspace,
     const draft = modelWithComment(workspaceA, documentA).comments[0]!
       workspace: workspaceA,
           workspace: workspaceA,
       workspace: workspaceA,

web-pane-diagnostics.test.ts (2 match(es)):
           workspaceRoot: localPath('/repo'),
           sourceTerminalId: 'terminal-1',

ci-attempt-evidence.test.ts (4 match(es)):
       headers: { 'Content-Type': 'application/json' },
       vi.stubEnv('GITHUB_REPOSITORY', 'jarmak-personal/hvir')
         '/repos/jarmak-personal/hvir/actions/runs/42/attempts/2/jobs',
       const jobs = await loadCiAttemptJobs('jarmak-personal/hvir', 42, 3, 'test-token')
workbench-health-control.test.tsx:     Object.defineProperty(window, 'hvir', { configurable: true, value: api })

terminal-palette.test.ts (22 match(es)):
     terminalColorThemeEquals,
     terminalThemeForAppearance,
   } from '../src/renderer/src/terminal/terminal-palette'
   describe('terminal palette policy', () => {
       expect(terminalThemeForAppearance('dark')).toEqual({
       expect(terminalThemeForAppearance('light')).toEqual({
       expect(Object.isFrozen(terminalThemeForAppearance('dark'))).toBe(true)
       expect(Object.isFrozen(terminalThemeForAppearance('light'))).toBe(true)
         ...terminalThemeForAppearance('dark'),
       expect(normalized).toEqual(terminalThemeForAppearance('dark'))
       expect(normalized).not.toBe(terminalThemeForAppearance('dark'))
       { ...terminalThemeForAppearance('dark'), red: '#fff' },
       { ...terminalThemeForAppearance('dark'), red: 'rgb(255, 0, 0)' },
       { ...terminalThemeForAppearance('dark'), red: '#ff000080' },
       { ...terminalThemeForAppearance('dark'), red: 0xff0000 },
       { ...terminalThemeForAppearance('dark'), opacity: '#000000' },
           terminalThemeForAppearance('light'),
       const dark = terminalThemeForAppearance('dark')
       expect(terminalColorThemeEquals(dark, { ...dark })).toBe(true)
       expect(terminalColorThemeEquals(dark, { ...dark, background: '#000000' })).toBe(false)
     it('keeps terminal Canvas presentation free of post-render color filters', () => {
       expect(themesCss).not.toMatch(/terminal[^}]*filter\s*:/s)

style-ownership.test.ts (20 match(es)):
     'sessions-terminal-detail.css',
     'terminal-shell.css',
     'terminal-move.css',
     'terminal-theme-gallery.css',
     'terminal-list.css',
     'workspace-state.css',
     'workspace-catalog.css',
     'terminal-context-menu.css',
     'terminal-pane.css',
     'terminal-search.css',
         'body:has(.hvir-scrollbar-obscuring) > .hvir-scrollbar.hvir-scrollbar',
         join(process.cwd(), 'src/renderer/src/styles/sessions-terminal-detail.css'),
         /\.sessions-detail-terminal > \.sessions-detail-terminal-container \{\n[ ]{2}position: absolute;\n[ ]{2}inset: 0;/u,
         /\.sessions-detail-terminal \{[\s\S]*?min-width: 0;\n[ ]{2}min-height: 0;/u,
         /@media \(prefers-reduced-motion: reduce\) \{[\s\S]*?\.sessions-detail-backdrop,[\s\S]*?\.sessions-terminal-detail \{[\s\S]*?animation: none;/u,
       expect(base).toContain('font-family: var(--hvir-interface-font)')
       expect(sourceView).toContain("fontFamily: 'var(--hvir-monospace-font)'")
       expect(sourceView).toContain('var(--hvir-interface-scale)')
       expect(diffView).toContain("fontFamily: 'var(--hvir-monospace-font)'")
       expect(diffView).toContain('var(--hvir-interface-scale)')

[omitted 3970 match(es) in 276 file(s); see original output for full results]
```

</details>


---

<sub>21s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workspace for working with local and SSH-hosted projects. It combines project browsing, Git workflows, file editing and previews, and native terminal sessions in one Electron application.\n+\n+## Features\n+\n+- Open and manage local or SSH-hosted project workspaces.\n+- Work with multiple native terminal sessions, including configurable terminal themes and layouts.\n+- Browse, search, create, move, copy, rename, and delete project files.\n+- Inspect Git status, branches, diffs, history, and worktrees, and perform supported Git operations.\n+- View Markdown, rendered HTML, syntax-highlighted source, diffs, and document-review content.\n+- Configure harness profiles and surface compatible Claude and Codex session information.\n+\n+## Requirements\n+\n+- Node.js 24 or later\n+- npm\n+- Build tools required by native Node modules (`node-gyp`) on your platform\n+- Git for repository features\n+\n+On Linux, Electron smoke tests without a display require Xvfb (`xvfb-run`).\n+\n+## Development\n+\n+Install dependencies. The install step downloads Electron and rebuilds the native terminal dependencies for Electron's ABI.\n+\n+```bash\n+npm ci\n+```\n+\n+Start the application in development mode:\n+\n+```bash\n+npm run dev\n+```\n+\n+Build the production application:\n+\n+```bash\n+npm run build\n+```\n+\n+## Validation\n+\n+Run the focused checks as needed:\n+\n+```bash\n+npm run lint\n+npm run typecheck\n+npm test\n+```\n+\n+Run the repository's complete non-Electron verification suite:\n+\n+```bash\n+npm run verify\n+```\n+\n+Run Electron smoke coverage:\n+\n+```bash\n+npm run smoke\n+```\n+\n+On headless Linux:\n+\n+```bash\n+xvfb-run -a npm run smoke\n+```\n+\n+Install the repository's pre-push hook to run TypeScript checks and the local-platform smoke suite before pushing:\n+\n+```bash\n+npm run hooks:install\n+```\n+\n+## Packaging\n+\n+Create platform packages with:\n+\n+```bash\n+npm run pack:mac:arm64\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+Build outputs are written to `dist/`. macOS packaging produces a `.pkg`; Linux packaging produces a `.deb`.\n+\n+## Project layout\n+\n+| Path | Purpose |\n+| --- | --- |\n+| `src/main` | Electron main process, host integration, Git, SSH, terminals, and application services |\n+| `src/preload` | Typed, restricted bridge between the renderer and main process |\n+| `src/renderer` | React user interface |\n+| `src/shared` | Shared contracts and domain types |\n+| `src/workers` | Utility-process workers |\n+| `test` | Vitest unit and integration tests |\n+| `scripts` | Build, smoke-test, release, and repository automation |\n+\n+## License\n+\n+[MIT](LICENSE) © 2026 hvir contributors\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/5e9effac/hvir/README.md
```


---

<sub>22s</sub>

### Copilot

The README now documents the app’s real capabilities, Node/native-module requirements, development and verification commands, packaging targets, and source layout. I’ll run the repository’s formatting check and inspect the final diff.

---

<sub>29s</sub>

### `bash`

**Check README formatting**

$ npm run format:check -- README.md

<details>
<summary>57 lines</summary>

```
> hvir@0.2.3 format:check
> prettier --check . README.md

Checking formatting...
[warn] scripts/installed-harness-dialog-probe.mts
[warn] scripts/real-host-ssh-contract.mts
[warn] src/main/harness/harness-probe.ts
[warn] src/main/harness/harness-telemetry-hub.ts
[warn] src/main/harness/remote-image-paste.ts
[warn] src/main/ipc/features/terminal.ts
[warn] src/main/project-host/ssh-host.ts
[warn] src/main/smoke/interruption-checkpoint.ts
[warn] src/main/smoke/sessions-projection.ts
[warn] src/main/smoke/terminal-middle-click-close.ts
[warn] src/main/smoke/terminal-presentation.ts
[warn] src/main/window/electron-renderer-recovery.ts
[warn] src/renderer/src/git/git-rail-model.ts
[warn] src/renderer/src/git/git-sync-coordinator.ts
[warn] src/renderer/src/git/GitBranchControls.tsx
[warn] src/renderer/src/git/GitChangesView.tsx
[warn] src/renderer/src/git/GitHistoryView.tsx
[warn] src/renderer/src/settings/use-add-harness-dialog.ts
[warn] src/renderer/src/styles/primitives.css
[warn] src/renderer/src/terminal/ghostty-terminal-pane.ts
[warn] src/renderer/src/terminal/terminal-pane-event-coordinator.ts
[warn] src/renderer/src/terminal/terminal-recovery-planner.ts
[warn] src/renderer/src/terminal/terminal-runtime-presentation.ts
[warn] src/renderer/src/terminal/terminal-runtime.ts
[warn] src/renderer/src/terminal/terminal-semantic-regions.ts
[warn] src/renderer/src/terminal/terminal-split-persistence.ts
[warn] src/renderer/src/terminal/use-terminal-launch-menu-layout.ts
[warn] src/renderer/src/terminal/use-terminal-persistence.ts
[warn] src/renderer/src/terminal/use-terminal-workspace-transfer.ts
[warn] src/renderer/src/tree/DirectoryTree.tsx
[warn] src/renderer/src/tree/project-entry-drag.ts
[warn] src/renderer/src/viewer/source-coordinate.ts
[warn] src/shared/terminal-start-admission.ts
[warn] test/document-review-delivery-ipc.test.ts
[warn] test/ghostty-terminal-events.test.ts
[warn] test/github-workflow-contexts.ts
[warn] test/harness-launch.test.ts
[warn] test/harness-profile-editor.test.tsx
[warn] test/harness-usage-artifact.test.ts
[warn] test/harness-usage-demand-controller.test.ts
[warn] test/macos-native-package.test.ts
[warn] test/project-entry-drag.test.tsx
[warn] test/real-host-ssh-workflow.test.ts
[warn] test/session-dialog.test.tsx
[warn] test/sessions-terminal-ssh.test.tsx
[warn] test/ssh-transport-pool.test.ts
[warn] test/terminal-fork-launch.test.ts
[warn] test/terminal-ipc-resume.test.ts
[warn] test/terminal-recovery-planner.test.ts
[warn] test/terminal-view-fork.test.tsx
[warn] test/terminal-workspace-model.test.ts
[warn] test/viewer-workload-policy.test.ts
[warn] Code style issues found in 52 files. Run Prettier with --write to fix.
<shellId: 2 completed with exit code 1>
```

</details>


---

<sub>29s</sub>

### `bash`

**Review README diff and status**

$ git --no-pager diff --check && git --no-pager diff -- README.md && git status --short

```
?? README.md
<shellId: 3 completed with exit code 0>
```


---

<sub>30s</sub>

### Copilot

**Created `README.md`** with an accurate project overview, feature list, requirements, development and validation commands, packaging instructions, project layout, and MIT license reference.

`npm run format:check -- README.md` also checked the repository and reported 52 pre-existing formatting issues outside the new README; the README itself is formatted correctly.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
