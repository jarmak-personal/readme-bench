# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `c984d976-9b03-48bf-8a02-b8a3f4718744`  
> - **Started:** 9/23/2026, 1:15:24 AM  
> - **Duration:** 34s  
> - **Exported:** 9/23/2026, 1:15:58 AM  

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

### `bash`

**Inspect project files and worktree**

$ pwd && git status --short && rg --files -g '!node_modules' -g '!vendor' | head -100

```
/private/var/tmp/ws/bb4438d9/hvir
/bin/bash: rg: command not found
<shellId: 0 completed with exit code 0>
```


---

<sub>4s</sub>

### `bash`

**Check worktree and latest commit**

$ git status --short && git branch --show-current && git log -1 --oneline

```
main
47882e3 Initial commit
<shellId: 1 completed with exit code 0>
```


---

<sub>4s</sub>

### `bash`

**List project files**

$ find . -maxdepth 2 -type f -not -path './.git/*' -print | sort | head -150

<details>
<summary>151 lines</summary>

```
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### `bash`

**Inspect repository root**

$ ls -la

<details>
<summary>30 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 23 01:15 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:15 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:15 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:15 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:15 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 23 01:15 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 23 01:15 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 23 01:15 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:15 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 23 01:15 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 23 01:15 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 23 01:15 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 23 01:15 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 23 01:15 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 23 01:15 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 23 01:15 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 23 01:15 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:15 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 23 01:15 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 23 01:15 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 23 01:15 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 23 01:15 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 23 01:15 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 23 01:15 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 23 01:15 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 23 01:15 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 23 01:15 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 23 01:15 vitest.config.ts
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/package.json.**

/private/var/tmp/ws/bb4438d9/hvir/package.json

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

<sub>10s</sub>

### `bash`

**Inspect source and package structure**

$ find src packages -maxdepth 3 -type f -print | sort | head -180

<details>
<summary>181 lines</summary>

```
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/build/binding.Makefile
packages/rename-noreplace/build/config.gypi
packages/rename-noreplace/build/gyp-mac-tool
packages/rename-noreplace/build/Makefile
packages/rename-noreplace/build/rename_noreplace.target.mk
packages/rename-noreplace/index.js
packages/rename-noreplace/LICENSE
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
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
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/electron-builder.yml.**

/private/var/tmp/ws/bb4438d9/hvir/electron-builder.yml

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

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/LICENSE.**

/private/var/tmp/ws/bb4438d9/hvir/LICENSE

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

<sub>13s</sub>

### `bash`

**Inspect renderer and GitHub configuration**

$ find src/renderer -maxdepth 2 -type f -print | sort | head -100 && find .github -maxdepth 3 -type f -print

<details>
<summary>22 lines</summary>

```
src/renderer/index.html
src/renderer/src/App.tsx
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/hvir.d.ts
src/renderer/src/main.tsx
src/renderer/src/styles.css
src/renderer/src/theme-model.ts
src/renderer/src/theme.ts
src/renderer/src/themes.css
.github/workflows/real-host-ssh.yml
.github/workflows/release.yml
.github/workflows/ghostty-web-update.yml
.github/workflows/project-pr-planning.yml
.github/workflows/codeql.yml
.github/workflows/lock-tracker-conversations.yml
.github/workflows/project-kind.yml
.github/workflows/macos-package-release.yml
.github/workflows/release-pr-merged.yml
.github/workflows/ci.yml
.github/workflows/smoke-stress.yml
.github/dependabot.yml
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/src/main/index.ts.**

/private/var/tmp/ws/bb4438d9/hvir/src/main/index.ts (lines 1-180)

<details>
<summary>180 lines</summary>

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
        return installRendererPresentation(transition.owner)
      },
      revokeRenderer: (owner) => {
        diagnostics.closeRenderer(owner)
        void rendererScopes
          .revokeOwner(owner.id)
          .catch((error) => console.error('[renderer] owner cleanup failed', error))
      },
      isRendererCurrent: (owner) => rendererScopes.isCurrent(owner),
      resumeRendererIpc: (owner) => rendererScopes.resumeOwnerIpc(owner),
      setOwnerFocused: (owner, focused) =>
        attentionBadge?.setFocused(owner.id, focused, owner.generation),
      startRendererDiagnostics: (owner) => diagnostics.startRenderer(owner),
      rendererReady: (owner) => diagnostics.rendererReady(owner),
      recordWindowHealth: (event) => diagnostics.recordWindowHealth(event),
      onLastWindowClosed: () => {
        void runtime
          .suspend()
          .catch((error) =>
            console.error('[session] cleanup after window close failed', error),
          )
      },
      isShuttingDown: () => runtime.isShuttingDown,
    }),
    (manager) => manager.dispose(),
  )
  const { routes: webPaneRoutes, createWindow } = windowManager
  async function startup(): Promise<void> {
    htmlPreviews.register()
    const emit = rendererEvents.toWindows
    sshPrompter = runtime.own(
      'SSH prompter',
      new RendererSshPrompter(
        (owner, prompt) => rendererEvents.toRenderer(owner, 'ssh:prompt', prompt),
        (owner, hostId) =>
          rendererEvents.toRenderer(owner, 'ssh:prompt-cancel', { hostId }),
      ),
      (prompter) => prompter.cancelAll(),
    )
    hostCatalog = runtime.own(
      'project host catalog',
      await ProjectHostCatalog.create({
        prompter: sshPrompter,
        trustFile: localPath(applicationUserDataPath('known-hosts.json')),
        trashItem: electronTrash(shell),
      }),
      (catalog) => catalog.dispose(),
    )
    const requestedProjectRoot = projectRootArgument()
    const registry = await ProjectRegistry.create(
      requestedProjectRoot ? localPath(requestedProjectRoot) : undefined,
      hostCatalog,
      applicationUserDataPath('projects.json'),
      (state) => emit('project:state', state),
      async () => {
        const selection = await dialog.showOpenDialog({
          title: 'Choose a folder for hvir',
          defaultPath: process.cwd(),
          properties: ['openDirectory'],
        })
```

</details>


---

<sub>13s</sub>

### `bash`

**List platform packaging resources**

$ find build -maxdepth 3 -type f -print | sort

<details>
<summary>20 lines</summary>

```
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
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>13s</sub>

### `bash`

**Check existing project guidance and docs**

$ find . -maxdepth 3 -iname '*readme*' -o -path './.github/*' -type f

<details>
<summary>485 lines</summary>

```
./node_modules/isbinaryfile/README.md
./node_modules/is-plain-obj/readme.md
./node_modules/plist/README.md
./node_modules/tinyglobby/README.md
./node_modules/d3-format/README.md
./node_modules/zod/README.md
./node_modules/fast-wrap-ansi/README.md
./node_modules/zwitch/readme.md
./node_modules/define-data-property/README.md
./node_modules/weapon-regex/README.md
./node_modules/obug/README.md
./node_modules/responselike/README.md
./node_modules/jsesc/README.md
./node_modules/mutation-testing-report-schema/README.md
./node_modules/hosted-git-info/README.md
./node_modules/mdurl/README.md
./node_modules/d3-contour/README.md
./node_modules/asn1/README.md
./node_modules/d3-shape/README.md
./node_modules/lodash/README.md
./node_modules/quick-lru/readme.md
./node_modules/browserslist/README.md
./node_modules/micromark-util-sanitize-uri/readme.md
./node_modules/process-nextick-args/readme.md
./node_modules/shebang-regex/readme.md
./node_modules/path-is-absolute/readme.md
./node_modules/http-cache-semantics/README.md
./node_modules/es6-error/README.md
./node_modules/duplexer2/README.md
./node_modules/jiti/README.md
./node_modules/has-property-descriptors/README.md
./node_modules/csstype/README.md
./node_modules/ts-api-utils/README.md
./node_modules/stylis/README.md
./node_modules/strip-ansi/readme.md
./node_modules/tmp-promise/README.md
./node_modules/dotenv-expand/README.md
./node_modules/lodash.groupby/README.md
./node_modules/temp/README.md
./node_modules/flatted/README.md
./node_modules/unist-util-stringify-position/readme.md
./node_modules/cacheable/README.md
./node_modules/es-errors/README.md
./node_modules/typed-rest-client/README.md
./node_modules/roughjs/README.md
./node_modules/agent-base/README.md
./node_modules/unist-util-visit-parents/readme.md
./node_modules/chardet/README.md
./node_modules/empathic/readme.md
./node_modules/cacheable-request/README.md
./node_modules/p-cancelable/readme.md
./node_modules/happy-dom/README.md
./node_modules/node-addon-api/README.md
./node_modules/ms/readme.md
./node_modules/strip-final-newline/readme.md
./node_modules/temp-file/readme.md
./node_modules/math-intrinsics/README.md
./node_modules/html-void-elements/readme.md
./node_modules/dagre-d3-es/README.md
./node_modules/lodash-es/README.md
./node_modules/prelude-ls/README.md
./node_modules/node-releases/README.md
./node_modules/dotenv/README.md
./node_modules/dotenv/README-es.md
./node_modules/escape-string-regexp/readme.md
./node_modules/std-env/README.md
./node_modules/has-tostringtag/README.md
./node_modules/qified/README.md
./node_modules/lru-cache/README.md
./node_modules/imurmurhash/README.md
./node_modules/stringify-entities/readme.md
./node_modules/d3-array/README.md
./node_modules/node-pty/README.md
./node_modules/eslint-scope/README.md
./node_modules/chownr/README.md
./node_modules/resedit/README.md
./node_modules/type-fest/readme.md
./node_modules/commander/Readme.md
./node_modules/punycode/README.md
./node_modules/require-directory/README.markdown
./node_modules/stat-mode/README.md
./node_modules/core-util-is/README.md
./node_modules/shiki/README.md
./node_modules/cross-dirname/README.md
./node_modules/abbrev/README.md
./node_modules/regex-recursion/README.md
./node_modules/estree-walker/README.md
./node_modules/ci-info/README.md
./node_modules/rimraf/README.md
./node_modules/property-information/readme.md
./node_modules/escalade/readme.md
./node_modules/chai/README.md
./node_modules/side-channel-list/README.md
./node_modules/electron-builder-squirrel-windows/readme.md
./node_modules/fast-json-stable-stringify/README.md
./node_modules/app-builder-lib/README.md
./node_modules/balanced-match/README.md
./node_modules/path-exists/readme.md
./node_modules/d3-polygon/README.md
./node_modules/progress/Readme.md
./node_modules/bcrypt-pbkdf/README.md
./node_modules/unist-util-position/readme.md
./node_modules/retry/README.md
./node_modules/pkijs/README.md
./node_modules/pvutils/README.md
./node_modules/package-manager-detector/README.md
./node_modules/global-agent/README.md
./node_modules/call-bind-apply-helpers/README.md
./node_modules/crelt/README.md
./node_modules/base64-js/README.md
./node_modules/node-api-version/README.md
./node_modules/aws4/README.md
./node_modules/nanoid/README.md
./node_modules/path-data-parser/README.md
./node_modules/acorn/README.md
./node_modules/tiny-async-pool/README.md
./node_modules/file-entry-cache/README.md
./node_modules/hashery/README.md
./node_modules/micromark-util-types/readme.md
./node_modules/hast-util-whitespace/readme.md
./node_modules/sax/README.md
./node_modules/d3-scale/README.md
./node_modules/d3-scale-chromatic/README.md
./node_modules/hermes-parser/README.md
./node_modules/signal-exit/README.md
./node_modules/wrap-ansi/readme.md
./node_modules/d3-axis/README.md
./node_modules/y18n/README.md
./node_modules/once/README.md
./node_modules/gensync/README.md
./node_modules/prettier/README.md
./node_modules/postject/README.markdown
./node_modules/typescript-eslint/README.md
./node_modules/d3-color/README.md
./node_modules/unist-util-is/readme.md
./node_modules/ghostty-web/README.md
./node_modules/ignore/README.md
./node_modules/normalize-url/readme.md
./node_modules/asn1js/README.md
./node_modules/resolve-alpn/README.md
./node_modules/vitest/README.md
./node_modules/assertion-error/README.md
./node_modules/d3-dispatch/README.md
./node_modules/esrecurse/README.md
./node_modules/string_decoder/README.md
./node_modules/tslib/README.md
./node_modules/magic-string/README.md
./node_modules/hachure-fill/README.md
./node_modules/es-toolkit/README.md
./node_modules/argparse/README.md
./node_modules/nan/README.md
./node_modules/picomatch/README.md
./node_modules/safe-buffer/README.md
./node_modules/dir-compare/README.md
./node_modules/d3-geo/README.md
./node_modules/d3-timer/README.md
./node_modules/lowercase-keys/readme.md
./node_modules/function-bind/README.md
./node_modules/is-glob/README.md
./node_modules/npm-run-path/readme.md
./node_modules/marked/README.md
./node_modules/jake/README.md
./node_modules/source-map-support/README.md
./node_modules/is-fullwidth-code-point/readme.md
./node_modules/env-paths/readme.md
./node_modules/typescript/README.md
./node_modules/truncate-utf8-bytes/README.md
./node_modules/punycode.js/README.md
./node_modules/flat-cache/README.md
./node_modules/yargs-parser/README.md
./node_modules/baseline-browser-mapping/README.md
./node_modules/xmlbuilder/README.md
./node_modules/d3-time-format/README.md
./node_modules/inherits/README.md
./node_modules/cytoscape-fcose/README.md
./node_modules/jsonfile/README.md
./node_modules/cytoscape/README.md
./node_modules/exponential-backoff/README.md
./node_modules/iconv-lite/README.md
./node_modules/color-name/README.md
./node_modules/es-define-property/README.md
./node_modules/cytoscape-cose-bilkent/README.md
./node_modules/async/README.md
./node_modules/d3-interpolate/README.md
./node_modules/chokidar/README.md
./node_modules/postcss/README.md
./node_modules/p-locate/readme.md
./node_modules/d3-zoom/README.md
./node_modules/undici/README.md
./node_modules/get-intrinsic/README.md
./node_modules/ssh2/README.md
./node_modules/keyv/README.md
./node_modules/d3-random/README.md
./node_modules/mute-stream/README.md
./node_modules/oniguruma-parser/README.md
./node_modules/decompress-response/readme.md
./node_modules/qs/README.md
./node_modules/js-yaml/README.md
./node_modules/eslint-visitor-keys/README.md
./node_modules/katex/README.md
./node_modules/call-bound/README.md
./node_modules/w3c-keyname/README.md
./node_modules/scheduler/README.md
./node_modules/eslint-plugin-react-hooks/README.md
./node_modules/import-meta-resolve/readme.md
./node_modules/got/readme.md
./node_modules/err-code/README.md
./node_modules/combined-stream/Readme.md
./node_modules/read-binary-file-arch/README.md
./node_modules/dunder-proto/README.md
./node_modules/d3-time/README.md
./node_modules/hast-util-to-html/readme.md
./node_modules/hasown/README.md
./node_modules/safer-buffer/Readme.md
./node_modules/side-channel-weakmap/README.md
./node_modules/proper-lockfile/README.md
./node_modules/d3-selection/README.md
./node_modules/fast-string-truncated-width/readme.md
./node_modules/ccount/readme.md
./node_modules/p-limit/readme.md
./node_modules/ejs/README.md
./node_modules/mime-types/README.md
./node_modules/undici-types/README.md
./node_modules/json-schema-traverse/README.md
./node_modules/typed-inject/README.md
./node_modules/end-of-stream/README.md
./node_modules/natural-compare/README.md
./node_modules/minimist/README.md
./node_modules/cpu-features/README.md
./node_modules/underscore/README.md
./node_modules/is-stream/readme.md
./node_modules/react-refresh/README.md
./node_modules/universalify/README.md
./node_modules/node-int64/README.md
./node_modules/esutils/README.md
./node_modules/find-up/readme.md
./node_modules/chalk/readme.md
./node_modules/regex/README.md
./node_modules/chromium-pickle-js/README.md
./node_modules/ansi-regex/readme.md
./node_modules/mimic-response/readme.md
./node_modules/angular-html-parser/readme.md
./node_modules/matcher/readme.md
./node_modules/siginfo/README.md
./node_modules/builder-util/readme.md
./node_modules/http2-wrapper/README.md
./node_modules/has-flag/readme.md
./node_modules/supports-color/readme.md
./node_modules/fdir/README.md
./node_modules/delaunator/README.md
./node_modules/fs-extra/README.md
./node_modules/color-convert/README.md
./node_modules/path-key/readme.md
./node_modules/mutation-testing-elements/README.md
./node_modules/tinybench/README.md
./node_modules/readdirp/README.md
./node_modules/utf8-byte-length/README.md
./node_modules/style-mod/README.md
./node_modules/proc-log/README.md
./node_modules/brace-expansion/README.md
./node_modules/json-stable-stringify-without-jsonify/readme.markdown
./node_modules/points-on-curve/README.md
./node_modules/tunnel/README.md
./node_modules/get-caller-file/README.md
./node_modules/react-dom/README.md
./node_modules/util-deprecate/README.md
./node_modules/word-wrap/README.md
./node_modules/webcrypto-core/README.md
./node_modules/has-symbols/README.md
./node_modules/cacheable-lookup/README.md
./node_modules/picocolors/README.md
./node_modules/json-rpc-2.0/README.md
./node_modules/devlop/readme.md
./node_modules/json-buffer/README.md
./node_modules/roarr/README.md
./node_modules/d3-drag/README.md
./node_modules/bluebird/README.md
./node_modules/minizlib/README.md
./node_modules/semver/README.md
./node_modules/at-least-node/README.md
./node_modules/electron-vite/README.md
./node_modules/lazy-val/readme.md
./node_modules/cac/README.md
./node_modules/define-properties/README.md
./node_modules/d3-sankey/README.md
./node_modules/vite/README.md
./node_modules/node-abi/README.md
./node_modules/hermes-estree/README.md
./node_modules/buffer-image-size/Readme.md
./node_modules/d3-delaunay/README.md
./node_modules/minimatch/README.md
./node_modules/robust-predicates/README.md
./node_modules/d3-hierarchy/README.md
./node_modules/d3-fetch/README.md
./node_modules/hookified/README.md
./node_modules/regex-utilities/README.md
./node_modules/estraverse/README.md
./node_modules/ansi-styles/readme.md
./node_modules/eslint-plugin-react-refresh/README.md
./node_modules/fast-uri/README.md
./node_modules/strictdom/README.md
./node_modules/sumchecker/README.md
./node_modules/js-tokens/README.md
./node_modules/markdown-it-task-lists/README.md
./node_modules/defer-to-connect/README.md
./node_modules/zod-validation-error/README.v3.md
./node_modules/zod-validation-error/README.md
./node_modules/acorn-jsx/README.md
./node_modules/markdown-it/README.md
./node_modules/unzipper/README.md
./node_modules/d3/README.md
./node_modules/fs.realpath/README.md
./node_modules/cli-width/README.md
./node_modules/uc.micro/README.md
./node_modules/compare-version/README.md
./node_modules/levn/README.md
./node_modules/simple-update-notifier/README.md
./node_modules/yocto-queue/readme.md
./node_modules/serialize-error/readme.md
./node_modules/figures/readme.md
./node_modules/boolean/README.md
./node_modules/fastdom/README.md
./node_modules/rollup/README.md
./node_modules/space-separated-tokens/readme.md
./node_modules/side-channel/README.md
./node_modules/concat-map/README.markdown
./node_modules/linkify-it/README.md
./node_modules/pump/README.md
./node_modules/json5/README.md
./node_modules/khroma/readme.md
./node_modules/get-stream/readme.md
./node_modules/yoctocolors/readme.md
./node_modules/vfile/readme.md
./node_modules/update-browserslist-db/README.md
./node_modules/des.js/README.md
./node_modules/sprintf-js/README.md
./node_modules/expect-type/README.md
./node_modules/es-module-lexer/README.md
./node_modules/cose-base/README.md
./node_modules/pe-library/README.md
./node_modules/optionator/README.md
./node_modules/convert-source-map/README.md
./node_modules/node-gyp/README.md
./node_modules/uri-js/README.md
./node_modules/async-exit-hook/readme.md
./node_modules/minimalistic-assert/readme.md
./node_modules/cliui/README.md
./node_modules/micromark-util-character/readme.md
./node_modules/parse-ms/readme.md
./node_modules/d3-path/README.md
./node_modules/filelist/README.md
./node_modules/whatwg-mimetype/README.md
./node_modules/get-proto/README.md
./node_modules/form-data/README.md
./node_modules/mutation-server-protocol/README.md
./node_modules/yaml/README.md
./node_modules/d3-transition/README.md
./node_modules/delayed-stream/Readme.md
./node_modules/cross-spawn/README.md
./node_modules/cross-env/README.md
./node_modules/mime/README.md
./node_modules/micromark-util-encode/readme.md
./node_modules/micromark-util-symbol/readme.md
./node_modules/yargs/README.md
./node_modules/clone-response/README.md
./node_modules/eslint-config-prettier/README.md
./node_modules/rxjs/README.md
./node_modules/asynckit/README.md
./node_modules/d3-force/README.md
./node_modules/espree/README.md
./node_modules/comma-separated-tokens/readme.md
./node_modules/mermaid/README.md
./node_modules/mermaid/README.zh-CN.md
./node_modules/vfile-message/readme.md
./node_modules/eslint/README.md
./node_modules/glob/README.md
./node_modules/esquery/README.md
./node_modules/fast-levenshtein/README.md
./node_modules/dayjs/README.md
./node_modules/ssh-config/Readme.md
./node_modules/source-map/README.md
./node_modules/tweetnacl/README.md
./node_modules/fast-string-width/readme.md
./node_modules/electron-winstaller/README.md
./node_modules/d3-chord/README.md
./node_modules/object-keys/README.md
./node_modules/gopd/README.md
./node_modules/is-unicode-supported/readme.md
./node_modules/oniguruma-to-es/README.md
./node_modules/why-is-node-running/README.md
./node_modules/https-proxy-agent/README.md
./node_modules/d3-brush/README.md
./node_modules/promise-retry/README.md
./node_modules/string-width/readme.md
./node_modules/esbuild/README.md
./node_modules/minipass/README.md
./node_modules/trim-lines/readme.md
./node_modules/execa/readme.md
./node_modules/yallist/README.md
./node_modules/unist-util-visit/readme.md
./node_modules/stackback/README.md
./node_modules/mdast-util-to-hast/readme.md
./node_modules/electron-publish/readme.md
./node_modules/isarray/README.md
./node_modules/wrappy/README.md
./node_modules/http-proxy-agent/README.md
./node_modules/electron/README.md
./node_modules/json-stringify-safe/README.md
./node_modules/layout-base/README.md
./node_modules/semver-compare/readme.markdown
./node_modules/d3-dsv/README.md
./node_modules/is-extglob/README.md
./node_modules/uuid/README.md
./node_modules/tinyexec/README.md
./node_modules/diff-match-patch/README.md
./node_modules/dompurify/README.md
./node_modules/tmp/README.md
./node_modules/bplist-parser/README.md
./node_modules/builder-util-runtime/readme.md
./node_modules/mutation-testing-metrics/README.md
./node_modules/tar/README.md
./node_modules/buildcheck/README.md
./node_modules/caniuse-lite/README.md
./node_modules/deep-is/README.markdown
./node_modules/es-set-tostringtag/README.md
./node_modules/globalthis/README.md
./node_modules/dequal/readme.md
./node_modules/react/README.md
./node_modules/d3-ease/README.md
./node_modules/d3-quadtree/README.md
./node_modules/buffer-from/readme.md
./node_modules/sanitize-filename/README.md
./node_modules/character-entities-html4/readme.md
./node_modules/pvtsutils/README.md
./node_modules/points-on-path/README.md
./node_modules/which/README.md
./node_modules/side-channel-map/README.md
./node_modules/ajv/README.md
./node_modules/emoji-regex/README.md
./node_modules/object-inspect/readme.markdown
./node_modules/readable-stream/README.md
./node_modules/detect-node/Readme.md
./node_modules/type-check/README.md
./node_modules/ts-dedent/README.md
./node_modules/locate-path/readme.md
./node_modules/mkdirp/readme.markdown
./node_modules/graceful-fs/README.md
./node_modules/entities/readme.md
./node_modules/dmg-builder/readme.md
./node_modules/human-signals/README.md
./node_modules/fsevents/README.md
./node_modules/ws/README.md
./node_modules/fast-deep-equal/README.md
./node_modules/shebang-command/readme.md
./node_modules/electron-to-chromium/README.md
./node_modules/require-from-string/readme.md
./node_modules/nopt/README.md
./node_modules/bytestreamjs/README.MD
./node_modules/rw/README.md
./node_modules/debug/README.md
./node_modules/glob-parent/README.md
./node_modules/internmap/README.md
./node_modules/source-map-js/README.md
./node_modules/js-md4/README.md
./node_modules/mime-db/README.md
./node_modules/isexe/README.md
./node_modules/unicorn-magic/readme.md
./node_modules/es-object-atoms/README.md
./node_modules/tree-kill/README.md
./node_modules/inflight/README.md
./node_modules/character-entities-legacy/readme.md
./node_modules/pretty-ms/readme.md
./.github/workflows/real-host-ssh.yml
./.github/workflows/release.yml
./.github/workflows/ghostty-web-update.yml
./.github/workflows/project-pr-planning.yml
./.github/workflows/codeql.yml
./.github/workflows/lock-tracker-conversations.yml
./.github/workflows/project-kind.yml
./.github/workflows/macos-package-release.yml
./.github/workflows/release-pr-merged.yml
./.github/workflows/ci.yml
./.github/workflows/smoke-stress.yml
./.github/dependabot.yml
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/bb4438d9/hvir/src/renderer/src/App.tsx (lines 1-200)

<details>
<summary>200 lines</summary>

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
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/src/renderer/index.html.**

/private/var/tmp/ws/bb4438d9/hvir/src/renderer/index.html

<details>
<summary>25 lines</summary>

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-src hvir-preview:; connect-src 'self' data: ws://localhost:* http://localhost:*"
    />
    <title>hvir</title>
    <style>
      html,
      body,
      #root {
        margin: 0;
        height: 100%;
        background: #0b0d10;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>


---

<sub>17s</sub>

### `bash`

**Map renderer feature areas**

$ find src/renderer/src -maxdepth 3 -type d -print | sort && find packages/rename-noreplace -maxdepth 1 -type f -print

<details>
<summary>27 lines</summary>

```
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
src/renderer/src/settings/sections
src/renderer/src/styles
src/renderer/src/terminal
src/renderer/src/tree
src/renderer/src/viewer
src/renderer/src/workbench
src/renderer/src/workspaces
packages/rename-noreplace/rename_noreplace.c
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>17s</sub>

### `bash`

**Find visible UI labels**

$ grep -RhoE "(title|aria-label|placeholder)=\"[^\"]{1,90}" src/renderer/src | head -80

<details>
<summary>81 lines</summary>

```
aria-label="Files
aria-label="Find file
title="Find file
placeholder="Filename
aria-label="Clear filename search
aria-label="Close filename search
title="Close filename search
title="Terminal
title="Appearance
title="Keybindings
title="Git
aria-label="Settings sections
placeholder="--add-dir {binding:monorepo}
aria-label="Move profile earlier
title="Move earlier
aria-label="Move profile later
title="Move later
aria-label="Executable command
placeholder="claude
aria-label="Absolute executable path
aria-label="Environment name
placeholder="NAME
aria-label="Environment operation
aria-label="Environment value
aria-label="Reference source
aria-label="Reference name
aria-label="Path binding name
placeholder="monorepo
placeholder="Search by theme name
title="Harnesses
aria-label="Harness profiles
aria-label="Project rail
aria-label="Project views
aria-label="File viewer
aria-label="Local diagnostic evidence
aria-label="Transcript regions
aria-label="Previous transcript region
title="Previous transcript region
aria-label="Next transcript region
title="Next transcript region
aria-label="Collapse terminal rail
title="Collapse terminal rail
title="Move active terminal to another worktree
aria-label="Split terminal
title="Open a shell in the other terminal split
aria-label="Open settings
title="Settings
aria-label="New terminal
title="New terminal
title="Close terminal
aria-label="Terminal workspace move
aria-label="Restore terminal rail
title="Restore terminal rail
aria-label="Open terminals
aria-label="Search terminal output
aria-label="Find in terminal
placeholder="Find in terminal
aria-label="Previous terminal match
title="Previous match (Shift+Enter)
aria-label="Next terminal match
title="Next match (Enter)
aria-label="Close terminal search
title="Close search (Escape)
title="Copy the current semantic prompt, command, or output block
aria-label="Terminal actions
aria-label="Document review
title="Document review mode
aria-label="Add comment for selected source lines
aria-label="Document review comments
aria-label="Review handoff preview
aria-label="Review handoff destination
aria-label="Exact review delivery preview
aria-label="New review comment
aria-label="Projects
title="Connection controls
aria-label="Register project
title="Register project
aria-label="Open settings
title="Settings
aria-label="Workspaces
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/bb4438d9/hvir/scripts/check-terminal-runtime.mts (lines 1-200)

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/packages/rename-noreplace/package.json.**

/private/var/tmp/ws/bb4438d9/hvir/packages/rename-noreplace/package.json

<details>
<summary>20 lines</summary>

```
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
```

</details>


---

<sub>21s</sub>

### `bash`

**Confirm supported integrations and app modules**

$ grep -RhoE "Claude|Codex|OpenCode|Gemini CLI|Harness profiles|Document review|Git graph|Worktrees" src/renderer/src | sort | uniq -c | sort -nr | head -40 && find src/main -maxdepth 1 -type f -print | sort

<details>
<summary>27 lines</summary>

```
14 Document review
   9 Worktrees
   6 Claude
   3 Harness profiles
   2 Codex
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/html-preview-protocol.ts
src/main/index.ts
src/main/ipc.ts
src/main/navigation-policy.ts
src/main/project-coordinator.ts
src/main/project-registry.ts
src/main/project-watch.ts
src/main/renderer-event-delivery.ts
src/main/renderer-event-publisher.ts
src/main/renderer-presentation-resources.ts
src/main/renderer-resource-scopes.ts
src/main/workbench-runtime.ts
src/main/worker-host.ts
src/main/workspace-activity.ts
src/main/workspace-cleanup.ts
src/main/workspace-coordinator.ts
src/main/workspace-removal-coordinator.ts
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/bb4438d9/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/bb4438d9/hvir/.github/workflows/ci.yml (lines 1-120)

<details>
<summary>102 lines</summary>

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
```

</details>


---

<sub>29s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop development workbench for working with local or SSH-hosted projects. It brings project files, terminals, Git, and coding-agent sessions together in one Electron application.\n+\n+## Features\n+\n+- Browse and edit project files, preview supported documents, and compare changes.\n+- Work with Git status, diffs, history, branches, and worktrees.\n+- Run multiple terminal sessions in resizable and split workspaces.\n+- Connect to remote projects over SSH using your SSH configuration and identities.\n+- Configure and launch supported coding-agent harnesses, including Claude Code and Codex.\n+- Review documents with line-based comments and prepare review handoffs.\n+- Customize the appearance, terminal behavior, and harness profiles.\n+\n+## Requirements\n+\n+- macOS or Linux.\n+- Node.js 24 or newer and npm.\n+- The native build tools required by `node-gyp` and Electron's `node-pty` dependency.\n+- For SSH projects, an SSH client configuration and credentials for the remote host.\n+- For coding-agent sessions, install and authenticate the agent CLI you want to use separately.\n+\n+## Getting started\n+\n+Clone the repository, install dependencies, and start the development app:\n+\n+```sh\n+git clone <repository-url>\n+cd hvir\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` runs the project's post-install setup, including rebuilding native dependencies for Electron. On first launch, choose a project folder or register an SSH-hosted project. Coding-agent CLIs are external tools; configure their executable and any required arguments in hvir's harness settings.\n+\n+## Development\n+\n+Useful commands:\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the app in development mode. |\n+| `npm run build` | Type-check and build the application. |\n+| `npm test` | Run the Vitest test suite. |\n+| `npm run lint` | Run ESLint. |\n+| `npm run verify` | Run architecture/policy checks, lint, type-check, and tests. |\n+| `npm run smoke` | Build and run the Electron smoke scenarios. |\n+\n+Build output is written to `out/`. `npm run build:dir` creates an unpacked app for the current platform. Release package scripts include `npm run pack:mac:arm64`, `npm run pack:linux:x64`, and `npm run pack:linux:arm64`.\n+\n+## Project layout\n+\n+- `src/main/` — Electron main-process services, project and SSH access, Git, terminals, and application coordination.\n+- `src/renderer/` — React-based workbench UI.\n+- `src/shared/` — Types and contracts shared between the main process and renderer.\n+- `scripts/` — Build, release, architecture, and smoke-test tooling.\n+- `test/` — Unit and UI tests.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). Third-party dependency notices are collected in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/bb4438d9/hvir/README.md
```


---

<sub>33s</sub>

### `bash`

**Check README formatting**

$ npm exec prettier -- --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 11 completed with exit code 0>
```


---

<sub>33s</sub>

### `bash`

**Review README change**

$ git diff --check && git status --short && git --no-pager diff -- README.md

```
?? README.md
<shellId: 12 completed with exit code 0>
```


---

<sub>33s</sub>

### Copilot

Created `README.md` with an overview of hvir, its main features, requirements, setup and development commands, project layout, and license information. Prettier and `git diff --check` passed.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
