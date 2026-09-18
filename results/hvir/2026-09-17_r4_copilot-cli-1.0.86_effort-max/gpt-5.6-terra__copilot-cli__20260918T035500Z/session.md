# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `425e22fb-3155-4d09-b817-116132075291`  
> - **Started:** 9/17/2026, 11:55:14 PM  
> - **Duration:** 1m 11s  
> - **Exported:** 9/17/2026, 11:56:26 PM  

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

I’ll identify the project’s purpose, setup, and existing conventions, then write a focused README that matches the codebase.

---

<sub>4s</sub>

### `bash`

**Inspect repository status and files**

$ git status --short && printf '\n-- top level --\n' && find . -maxdepth 2 -type f -not -path './.git/*' | sort | sed -n '1,160p'

<details>
<summary>162 lines</summary>

```
-- top level --
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
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### `glob`

**{package.json,pyproject.toml,go.mod,Cargo.toml,composer.json,Gemfile,Makefile,README*,docker-compose*.yml,Dockerfile}**

"{package.json,pyproject.toml,go.mod,Cargo.toml,composer.json,Gemfile,Makefile,README*,docker-compose*.yml,Dockerfile}"

```
./package.json
./scripts/project-management/package.json
./packages/rename-noreplace/package.json
```


---

<sub>4s</sub>

### `glob`

****/*.{json,yml,yaml,toml,md}**

"**/*.{json,yml,yaml,toml,md}"

<details>
<summary>30 matches</summary>

```
./package.json
./package-lock.json
./.prettierrc.json
./tsconfig.web.json
./THIRD_PARTY_NOTICES.md
./stryker.config.json
./tsconfig.base.json
./test/fixtures/rendered.yml
./test/fixtures/rendered.md
./test/fixtures/rendered-mmd.md
./test/fixtures/highlight.toml
./tsconfig.node.json
./tsconfig.json
./electron-builder.yml
./.github/dependabot.yml
./electron-builder.ssh-acceptance.yml
./.github/workflows/real-host-ssh.yml
./.github/workflows/release.yml
./packages/rename-noreplace/package.json
./.github/workflows/smoke-stress.yml
./.github/workflows/ci.yml
./.github/workflows/release-pr-merged.yml
./.github/workflows/macos-package-release.yml
./.github/workflows/lock-tracker-conversations.yml
./.github/workflows/project-kind.yml
./.github/workflows/codeql.yml
./.github/workflows/ghostty-web-update.yml
./.github/workflows/project-pr-planning.yml
./scripts/architecture-hotspots.json
./scripts/project-management/package.json
```

</details>


---

<sub>7s</sub>

### Copilot

The repository is an Electron/TypeScript desktop app with an established CI and release pipeline; I’m now extracting its supported commands and user-facing scope so the README is accurate rather than generic.

---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/package.json.**

/private/var/tmp/ws/881e1d1f/hvir/package.json

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

**Inspect source and documentation layout**

$ printf '%s\n' '-- source layout --'; find src -maxdepth 3 -type f 2>/dev/null | sort | sed -n '1,220p'; printf '%s\n' '-- docs layout --'; find docs -maxdepth 3 -type f 2>/dev/null | sort | sed -n '1,160p'; printf '%s\n' '-- root docs --'; find . -maxdepth 2 -iname 'CONTRIBUTING*' -o -iname 'CODE_OF_CONDUCT*' -o -iname 'SECURITY*' -o -iname 'CHANGELOG*' | sort

<details>
<summary>224 lines</summary>

```
-- source layout --
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
-- docs layout --
-- root docs --
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/881e1d1f/hvir/.github/workflows/ci.yml

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

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/LICENSE.**

/private/var/tmp/ws/881e1d1f/hvir/LICENSE

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

<sub>10s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/881e1d1f/hvir/electron.vite.config.ts

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

<sub>17s</sub>

### `rg`

**hvir|Hvir**

"hvir|Hvir" in *.{ts,tsx,html,css} (src)

<details>
<summary>24 matches</summary>

```
[grep content: 1133 matches across 230 file(s) under src]

preload/index.ts (7 match(es)):
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
     type HvirApi,
   const api: HvirApi = {
           new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
   contextBridge.exposeInMainWorld('hvir', api)
main/git/mutation-coordinator.ts: /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
main/navigation-policy.ts: /** Only these explicit external schemes may leave hvir for the OS browser. */

main/index.ts (3 match(es)):
             title: 'Choose a folder for hvir',
         createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
           'hvir-git',
main/ipc/deps.ts: /** The application host's clipboard, narrowed to the one write hvir performs. */
main/diagnostics/diagnostic-report-storage.ts: const REPORT_PREFIX = 'hvir-diagnostic-report-'
main/application-runtime-policy.ts: export const SSH_ACCEPTANCE_USER_DATA_DIRECTORY = 'hvir-ssh-acceptance'
main/project-registry.ts:     if (this.projects.length <= 1) throw new Error('hvir must keep one project open')
main/pty/pty-supervisor.ts:           TERM_PROGRAM: 'hvir',
main/web-pane/web-pane-route-registry.ts: export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'
main/pty/pty-contract.ts:   /** hvir's PTY registry id; generated if omitted. */
main/web-pane/loopback-http-proxy.ts:     realm: `hvir-${randomBytes(12).toString('hex')}`,

[omitted 1113 match(es) in 218 file(s); see original output for full results]
```

</details>


---

<sub>17s</sub>

### `rg`

**Claude|Codex|SSH|Remote|Terminal|Git**

"Claude|Codex|SSH|Remote|Terminal|Git" in *.{ts,tsx} (src/renderer/src)

<details>
<summary>146 matches</summary>

```
[grep-paths: 133 path(s) under src/renderer/src; grouped by directory]

src/renderer/src/terminal/ (61 path(s))
  TerminalContextMenu.tsx
  TerminalContextMeter.tsx
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
  TerminalWorkspaceDialogs.tsx
  generated-terminal-theme-catalog.ts
  ghostty-terminal-events.ts
  ghostty-terminal-file-paste.ts
  ghostty-terminal-fit.ts
  ghostty-terminal-pane.ts
  terminal-attention.ts
  terminal-context-menu-position.ts
  terminal-context-menu-target.ts
  terminal-event-router.ts
  terminal-file-link.ts
  terminal-fit.ts
  terminal-fork-policy.ts
  terminal-palette.ts
  terminal-pane-event-coordinator.ts
  terminal-pane-factory.ts
  terminal-pane.ts
  terminal-probe-policy.ts
  terminal-profile-recovery.ts
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
  use-terminal-attention.ts
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

src/renderer/src/git/ (18 path(s))
  GitBranchControls.tsx
  GitChangesView.tsx
  GitGraphLanes.tsx
  GitGraphView.tsx
  GitHistoryView.tsx
  GitPanel.tsx
  commit-detail-client.ts
  commit-file-tree.ts
  commit-message.ts
  git-capability.ts
  git-graph-lane-metrics.ts
  git-graph-layout.ts
  git-rail-model.ts
  git-sync-coordinator.ts
  git-sync-status.ts
  use-git-commit-details.ts
  use-git-rail-controller.ts
  use-git-workspace.ts

src/renderer/src/settings/ (11 path(s))
  ComposerSubmitConsentDialog.tsx
  SettingsActiveSection.tsx
  TerminalThemeGallery.tsx
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/TerminalSettings.tsx
  settings-draft.ts
  settings-model.ts
  settings-navigation.ts
  settings.ts
  typography-settings.ts

src/renderer/src/sessions/ (9 path(s))
  SessionsApplicationDestination.tsx
  SessionsOverview.tsx
  SessionsTerminalDetail.tsx
  sessions-overview-model.ts
  sessions-renderer-observation.ts
  sessions-terminal-detail-controller.ts
  sessions-terminal-overlay.ts
  sessions-terminal-surface.ts
  use-sessions-terminal-detail.ts

src/renderer/src/viewer/ (9 path(s))
  DiffView.tsx
  FileViewer.tsx
  SourceView.tsx
  TabStrip.tsx
  diff-policy.ts
  markdown-extensions.ts
  source-blame-gutter.ts
  use-diff-inputs.ts
  use-source-blame.ts

src/renderer/src/workbench/ (7 path(s))
  TerminalLayoutControls.tsx
  active-terminal-focus.ts
  use-terminal-path-activation.ts
  use-workbench-layout.ts
  workbench-command-router.ts
  workbench-layout-policy.ts
  workspace-pane-state.ts

src/renderer/src/workspaces/ (7 path(s))
  ConnectionStatus.tsx
  ProjectsBar.tsx
  SessionDialog.tsx
  WorkspaceCatalogDialogs.tsx
  project-session.ts
  workspace-attention.ts
  workspace-session-actions.ts

src/renderer/src/dashboards/ (4 path(s))
  WebPane.tsx
  WebPaneStack.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts

src/renderer/src/tree/ (4 path(s))
  DirectoryTree.tsx
  FileTree.tsx
  git-ignore-refresh.ts
  git-status-decoration.ts

src/renderer/src/document-review/ (2 path(s))
  DocumentReviewDeliveryPanel.tsx
  use-document-review-delivery.ts

src/renderer/src/ (1 path(s))
  App.tsx

[extensions: .ts=89, .tsx=44]
```

</details>


---

<sub>17s</sub>

### `bash`

**Inspect project history and renderer files**

$ git --no-pager log --oneline -20 && printf '\n-- tracked root config --\n' && git ls-files | grep -E '(^|/)(README|CONTRIBUTING|SECURITY|CODE_OF_CONDUCT|CHANGELOG)(\.|$)|^src/renderer/' | sed -n '1,220p'

<details>
<summary>223 lines</summary>

```
0ee12b6 Initial commit

-- tracked root config --
src/renderer/index.html
src/renderer/src/App.tsx
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/context-menu/viewport-context-menu.ts
src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/dashboards/WebPaneStack.tsx
src/renderer/src/dashboards/use-web-pane-workspace.ts
src/renderer/src/dashboards/web-pane-diagnostics.ts
src/renderer/src/dashboards/web-pane-surface.ts
src/renderer/src/dashboards/web-pane-url.ts
src/renderer/src/dashboards/web-pane-workspace-policy.ts
src/renderer/src/development/development-performance-fixture.tsx
src/renderer/src/development/development-performance-pump.tsx
src/renderer/src/development/development-renderer-instrumentation.tsx
src/renderer/src/development/performance-measure-budget.ts
src/renderer/src/diagnostics/DiagnosticReportDialog.tsx
src/renderer/src/diagnostics/owned-capture-masks.ts
src/renderer/src/document-review/DocumentReviewControls.tsx
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx
src/renderer/src/document-review/document-review-anchor.ts
src/renderer/src/document-review/document-review-batches.ts
src/renderer/src/document-review/document-review-capture.ts
src/renderer/src/document-review/document-review-delivery-client.ts
src/renderer/src/document-review/document-review-delivery-feedback.ts
src/renderer/src/document-review/document-review-eligibility.ts
src/renderer/src/document-review/document-review-inline.ts
src/renderer/src/document-review/document-review-lifecycle.ts
src/renderer/src/document-review/document-review-model.ts
src/renderer/src/document-review/document-review-rendered.ts
src/renderer/src/document-review/document-review-selectors.ts
src/renderer/src/document-review/document-review-source.ts
src/renderer/src/document-review/document-review-types.ts
src/renderer/src/document-review/document-review-validation.ts
src/renderer/src/document-review/document-review-workspace-controller.ts
src/renderer/src/document-review/document-review-workspace.ts
src/renderer/src/document-review/index.ts
src/renderer/src/document-review/use-document-review-delivery.ts
src/renderer/src/document-review/use-document-review-interaction.ts
src/renderer/src/document-review/use-document-review-workspace.ts
src/renderer/src/git/GitBranchControls.tsx
src/renderer/src/git/GitChangesView.tsx
src/renderer/src/git/GitGraphLanes.tsx
src/renderer/src/git/GitGraphView.tsx
src/renderer/src/git/GitHistoryView.tsx
src/renderer/src/git/GitPanel.tsx
src/renderer/src/git/commit-detail-client.ts
src/renderer/src/git/commit-file-tree.ts
src/renderer/src/git/commit-message.ts
src/renderer/src/git/git-capability.ts
src/renderer/src/git/git-graph-lane-metrics.ts
src/renderer/src/git/git-graph-layout.ts
src/renderer/src/git/git-rail-model.ts
src/renderer/src/git/git-sync-coordinator.ts
src/renderer/src/git/git-sync-status.ts
src/renderer/src/git/use-git-commit-details.ts
src/renderer/src/git/use-git-rail-controller.ts
src/renderer/src/git/use-git-workspace.ts
src/renderer/src/git/virtual-range.ts
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/health/use-diagnostic-evidence.ts
src/renderer/src/health/use-workbench-health.ts
src/renderer/src/hvir.d.ts
src/renderer/src/layout/PaneResizer.tsx
src/renderer/src/layout/split-layout-policy.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/main.tsx
src/renderer/src/path-copy/PathCopyMenu.tsx
src/renderer/src/path-copy/path-copy.ts
src/renderer/src/path-copy/use-path-copy-menu.ts
src/renderer/src/scrollbars/scrollbar-presentation.ts
src/renderer/src/sessions/SessionsApplicationDestination.tsx
src/renderer/src/sessions/SessionsCollectionToolbar.tsx
src/renderer/src/sessions/SessionsOverview.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
src/renderer/src/sessions/SessionsOverviewNotice.tsx
src/renderer/src/sessions/SessionsTerminalDetail.tsx
src/renderer/src/sessions/sessions-overview-model.ts
src/renderer/src/sessions/sessions-projection-coordinator.ts
src/renderer/src/sessions/sessions-renderer-observation.ts
src/renderer/src/sessions/sessions-terminal-detail-controller.ts
src/renderer/src/sessions/sessions-terminal-overlay.ts
src/renderer/src/sessions/sessions-terminal-surface.ts
src/renderer/src/sessions/use-sessions-foreground.ts
src/renderer/src/sessions/use-sessions-terminal-detail.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
src/renderer/src/settings/HarnessProfileCommandFields.tsx
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/HarnessProfileEditor.tsx
src/renderer/src/settings/HarnessProfileOverlays.tsx
src/renderer/src/settings/HarnessProfilesSettings.tsx
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/settings/SettingsSection.tsx
src/renderer/src/settings/SettingsSectionNavigation.tsx
src/renderer/src/settings/TerminalThemeGallery.tsx
src/renderer/src/settings/harness-argument-editor.ts
src/renderer/src/settings/harness-profile-draft.ts
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/settings/harness-profile-request-policy.ts
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/sections/AppearanceSettings.tsx
src/renderer/src/settings/sections/GitSettings.tsx
src/renderer/src/settings/sections/KeybindingsSettings.tsx
src/renderer/src/settings/sections/TerminalSettings.tsx
src/renderer/src/settings/sections/TypographyFontField.tsx
src/renderer/src/settings/settings-draft.ts
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/settings-navigation.ts
src/renderer/src/settings/settings.ts
src/renderer/src/settings/typography-presentation.ts
src/renderer/src/settings/typography-settings.ts
src/renderer/src/settings/use-add-harness-dialog.ts
src/renderer/src/settings/use-harness-binding-authorization.ts
src/renderer/src/settings/use-harness-folder-picker.ts
src/renderer/src/settings/use-harness-profile-editor.ts
src/renderer/src/settings/use-harness-profile-load.ts
src/renderer/src/settings/use-settings-controller.ts
src/renderer/src/styles.css
src/renderer/src/styles/base.css
src/renderer/src/styles/composer-submit.css
src/renderer/src/styles/context-menu.css
src/renderer/src/styles/diagnostic-report.css
src/renderer/src/styles/dialogs.css
src/renderer/src/styles/document-review.css
src/renderer/src/styles/file-operations.css
src/renderer/src/styles/git-controls.css
src/renderer/src/styles/git-graph.css
src/renderer/src/styles/git-history.css
src/renderer/src/styles/git-inspector.css
src/renderer/src/styles/harness-settings.css
src/renderer/src/styles/health.css
src/renderer/src/styles/path-copy.css
src/renderer/src/styles/primitives.css
src/renderer/src/styles/projects.css
src/renderer/src/styles/provider-context.css
src/renderer/src/styles/scrollbars.css
src/renderer/src/styles/sessions-collection.css
src/renderer/src/styles/sessions-overview.css
src/renderer/src/styles/sessions-terminal-detail.css
src/renderer/src/styles/settings.css
src/renderer/src/styles/shell.css
src/renderer/src/styles/terminal-context-menu.css
src/renderer/src/styles/terminal-list.css
src/renderer/src/styles/terminal-move.css
src/renderer/src/styles/terminal-pane.css
src/renderer/src/styles/terminal-search.css
src/renderer/src/styles/terminal-shell.css
src/renderer/src/styles/terminal-theme-gallery.css
src/renderer/src/styles/tree.css
src/renderer/src/styles/viewer-content.css
src/renderer/src/styles/viewer-find.css
src/renderer/src/styles/viewer-tabs.css
src/renderer/src/styles/viewer-workload.css
src/renderer/src/styles/web-pane.css
src/renderer/src/styles/workspace-catalog.css
src/renderer/src/styles/workspace-state.css
src/renderer/src/terminal/TerminalContextMenu.tsx
src/renderer/src/terminal/TerminalContextMeter.tsx
src/renderer/src/terminal/TerminalDeck.tsx
src/renderer/src/terminal/TerminalMoveDialog.tsx
src/renderer/src/terminal/TerminalRail.tsx
src/renderer/src/terminal/TerminalRailCompact.tsx
src/renderer/src/terminal/TerminalRecoveryDialog.tsx
src/renderer/src/terminal/TerminalSearch.tsx
src/renderer/src/terminal/TerminalSessionRuntimes.tsx
src/renderer/src/terminal/TerminalView.tsx
src/renderer/src/terminal/TerminalWorkspace.tsx
src/renderer/src/terminal/TerminalWorkspaceCollection.tsx
src/renderer/src/terminal/TerminalWorkspaceControls.tsx
src/renderer/src/terminal/TerminalWorkspaceDialogs.tsx
src/renderer/src/terminal/effect-generation.ts
src/renderer/src/terminal/generated-terminal-theme-catalog.ts
src/renderer/src/terminal/ghostty-terminal-events.ts
src/renderer/src/terminal/ghostty-terminal-file-paste.ts
src/renderer/src/terminal/ghostty-terminal-fit.ts
src/renderer/src/terminal/ghostty-terminal-keyboard.ts
src/renderer/src/terminal/ghostty-terminal-pane.ts
src/renderer/src/terminal/harness-launch-menu.ts
src/renderer/src/terminal/terminal-attention.ts
src/renderer/src/terminal/terminal-clipboard-osc.ts
src/renderer/src/terminal/terminal-clipboard-write.ts
src/renderer/src/terminal/terminal-clipboard.ts
src/renderer/src/terminal/terminal-color-schema.mts
src/renderer/src/terminal/terminal-context-menu-position.ts
src/renderer/src/terminal/terminal-context-menu-target.ts
src/renderer/src/terminal/terminal-event-router.ts
src/renderer/src/terminal/terminal-file-link.ts
src/renderer/src/terminal/terminal-fit.ts
src/renderer/src/terminal/terminal-fork-policy.ts
src/renderer/src/terminal/terminal-palette.ts
src/renderer/src/terminal/terminal-pane-event-coordinator.ts
src/renderer/src/terminal/terminal-pane-factory.ts
src/renderer/src/terminal/terminal-pane.ts
src/renderer/src/terminal/terminal-probe-policy.ts
src/renderer/src/terminal/terminal-profile-recovery.ts
src/renderer/src/terminal/terminal-recovery-planner.ts
src/renderer/src/terminal/terminal-runtime-interactions.ts
src/renderer/src/terminal/terminal-runtime-launch.ts
src/renderer/src/terminal/terminal-runtime-live-settings.ts
src/renderer/src/terminal/terminal-runtime-options.ts
src/renderer/src/terminal/terminal-runtime-presentation.ts
src/renderer/src/terminal/terminal-runtime-registry.ts
src/renderer/src/terminal/terminal-runtime.ts
src/renderer/src/terminal/terminal-search-controller.ts
src/renderer/src/terminal/terminal-semantic-regions.ts
src/renderer/src/terminal/terminal-sessions-surface-owner.ts
src/renderer/src/terminal/terminal-split-persistence.ts
src/renderer/src/terminal/terminal-surface-attachment.ts
src/renderer/src/terminal/terminal-theme-catalog.ts
src/renderer/src/terminal/terminal-wheel.ts
src/renderer/src/terminal/terminal-workspace-model.ts
src/renderer/src/terminal/terminal-workspace-runtime-owner.ts
src/renderer/src/terminal/use-new-worktree-move-badge.ts
src/renderer/src/terminal/use-terminal-attention-controller.ts
src/renderer/src/terminal/use-terminal-attention.ts
src/renderer/src/terminal/use-terminal-context-menu.ts
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/electron-builder.yml.**

/private/var/tmp/ws/881e1d1f/hvir/electron-builder.yml

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

<sub>17s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/.gitignore.**

/private/var/tmp/ws/881e1d1f/hvir/.gitignore

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

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/index.html.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/index.html

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

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx

<details>
<summary>191 lines</summary>

```
import { forwardRef, useImperativeHandle, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import { HarnessProfileEditor } from './HarnessProfileEditor'
import { HarnessProfileOverlays } from './HarnessProfileOverlays'
import { findProfileProbe, harnessProbeLabel } from './harness-profile-editor-policy'
import { SettingsSection } from './SettingsSection'
import { useHarnessProfileEditor } from './use-harness-profile-editor'

interface HarnessProfilesSettingsProps {
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialAddOpen?: boolean
}

export interface HarnessProfilesSettingsHandle {
  /** Resolves after the user saves, discards, or cancels an outstanding profile draft. */
  readonly confirmSafeToLeave: () => Promise<boolean>
}

export const HarnessProfilesSettings = forwardRef<
  HarnessProfilesSettingsHandle,
  HarnessProfilesSettingsProps
>(function HarnessProfilesSettings(
  { workspaceRoot, projectRoot, initialAddOpen = false },
  ref,
): ReactElement {
  const editor = useHarnessProfileEditor({
    workspaceRoot,
    projectRoot,
    initialAddOpen,
  })
  useImperativeHandle(ref, () => ({ confirmSafeToLeave: editor.confirmSafeToLeave }), [
    editor.confirmSafeToLeave,
  ])
  const actions =
    workspaceRoot && projectRoot ? (
      <div className="settings-harness-actions">
        <button
          type="button"
          disabled={editor.busy || editor.loadState !== 'ready'}
          onClick={() => editor.probeAvailability(editor.profiles, true)}
        >
          Refresh availability
        </button>
        <button
          type="button"
          disabled={editor.busy || editor.loadState !== 'ready' || !editor.shellProvider}
          onClick={() => editor.runAfterDraftGuard(editor.startShellProfile)}
        >
          Add a shell
        </button>
        <button
          type="button"
          disabled={
            editor.busy || editor.loadState !== 'ready' || editor.providers.length === 0
          }
          onClick={() => editor.runAfterDraftGuard(() => editor.setAddOpen(true))}
        >
          Add a harness…
        </button>
      </div>
    ) : null

  return (
    <SettingsSection
      section="harnesses"
      title="Harnesses"
      description="Configure structured launch profiles, availability, and recovery identity."
      actions={actions}
      className="settings-harnesses"
    >
      {!workspaceRoot || !projectRoot ? (
        <div className="settings-section-scroll settings-harness-state">
          <p>Open a project to configure harnesses.</p>
        </div>
      ) : editor.loadState === 'loading' ? (
        <div
          className="settings-section-scroll settings-harness-state"
          aria-live="polite"
        >
          <p>Loading harness providers…</p>
        </div>
      ) : editor.loadState === 'error' ? (
        <div className="settings-section-scroll settings-harness-state" role="alert">
          <p>Harness profiles could not be loaded.</p>
          {editor.error ? <p className="dialog-error">{editor.error}</p> : null}
          <button type="button" onClick={editor.reload}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="settings-harness-layout">
            <nav className="settings-profile-list" aria-label="Harness profiles">
              {editor.profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  className={editor.draft?.id === profile.id ? 'active' : undefined}
                  aria-current={editor.draft?.id === profile.id ? 'true' : undefined}
                  onClick={() => editor.selectProfile(profile)}
                >
                  <strong>{profile.displayName}</strong>
                  <small>
                    {editor.providers.find(
                      (candidate) => candidate.id === profile.providerId,
                    )?.displayName ?? profile.providerId}
                    {' · '}
                    {profile.scope.kind === 'global' ? 'All projects' : 'This project'}
                    {' · '}
                    {editor.pendingProbeIds.has(profile.id)
                      ? 'Checking…'
                      : harnessProbeLabel(
                          findProfileProbe(
                            editor.profileProbes,
                            profile,
                            workspaceRoot.hostId,
                          ),
                        )}
                  </small>
                </button>
              ))}
              {editor.draft && !editor.draft.id ? (
                <button type="button" className="active" aria-current="true">
                  <strong>{editor.draft.input.displayName || 'Untitled profile'}</strong>
                  <small>
                    {editor.provider?.displayName ?? editor.draft.input.providerId}
                    {' · '}
                    {editor.draft.input.scope.kind === 'global'
                      ? 'All projects'
                      : 'This project'}
                    {' · Unsaved'}
                  </small>
                </button>
              ) : null}
            </nav>
            {editor.draft ? (
              <HarnessProfileEditor
                draft={editor.draft}
                providers={editor.providers}
                provider={editor.provider}
                providerProbe={editor.providerProbe}
                previews={editor.previews}
                previewReadiness={editor.previewReadiness}
                previewError={editor.previewError}
                error={editor.error}
                busy={editor.busy}
                dirty={editor.dirty}
                deleteArmed={editor.deleteArmed}
                workspaceRoot={workspaceRoot}
                projectRoot={projectRoot}
                onUpdateInput={editor.updateInput}
                onArguments={editor.setArguments}
                onAuthorizeExecutable={() => void editor.authorizeExecutable()}
                onPickBinding={editor.openPicker}
                onDuplicate={() =>
                  editor.runAfterDraftGuard(() => void editor.duplicate())
                }
                onRemove={() => {
                  if (editor.deleteArmed) {
                    editor.runAfterDraftGuard(() => void editor.remove())
                  } else {
                    void editor.remove()
                  }
                }}
                onSave={() => void editor.save()}
              />
            ) : (
              <div className="settings-harness-empty">
                <strong>No configured harnesses yet</strong>
                <p>
                  Bare Shell remains available whenever you open a terminal. Add a profile
                  here only when you want custom shell or harness settings.
                </p>
                <div>
                  <button
                    type="button"
                    disabled={!editor.shellProvider}
                    onClick={editor.startShellProfile}
                  >
                    Add a shell
                  </button>
                  <button type="button" onClick={() => editor.setAddOpen(true)}>
                    Add a harness…
                  </button>
                </div>
              </div>
            )}
          </div>
          <HarnessProfileOverlays root={workspaceRoot} editor={editor} />
        </>
      )}
    </SettingsSection>
  )
})
```

</details>


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx

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

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/881e1d1f/hvir/src/main/harness/bundled-harness-providers.ts

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

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/881e1d1f/hvir/src/main/project-host/project-host-catalog.ts

<details>
<summary>201 lines</summary>

```
import { homedir } from 'node:os'
import { join } from 'node:path'

import { localPath, type HostPath, type ProjectHostOption } from '../../shared'
import { LocalHost } from './local-host'
import type { Disposer, ProjectHost } from './project-host'
import type { SshAuthPrompter } from './ssh-auth'
import { parseSshConfig, type SshAliasConfig } from './ssh-config'
import { SshHost } from './ssh-host'
import { SshHostTrustStore } from './ssh-host-trust'
import { LocalSshIdentitySource } from './ssh-identity-source'

export interface ProjectHostCatalogOptions {
  readonly prompter: SshAuthPrompter
  readonly trustFile: HostPath
  readonly home?: string
  readonly agentSocket?: string
  readonly trashItem?: (path: HostPath) => Promise<void>
}

/** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
export class ProjectHostCatalog {
  readonly local: LocalHost
  private readonly hosts = new Map<string, ProjectHost>()
  private readonly pendingHosts = new Map<string, Promise<ProjectHost>>()
  private readonly hostStateDisposers = new Map<string, Disposer>()
  private readonly listeners = new Set<() => void>()
  private disposed = false
  private disposal?: Promise<void>

  private constructor(
    local: LocalHost,
    private readonly aliases: readonly SshAliasConfig[],
    private readonly prompter: SshAuthPrompter,
    private readonly trust: SshHostTrustStore,
    private readonly home: string,
    private readonly agentSocket: string | undefined,
  ) {
    this.local = local
    this.hosts.set(local.hostId, local)
  }

  static async create(options: ProjectHostCatalogOptions): Promise<ProjectHostCatalog> {
    const local = new LocalHost({ trashItem: options.trashItem })
    try {
      await local.connect()
      const home = options.home ?? homedir()
      const aliases = await loadSshAliases(local, home)
      const trust = await SshHostTrustStore.load(local, options.trustFile)
      return new ProjectHostCatalog(
        local,
        aliases,
        options.prompter,
        trust,
        home,
        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
      )
    } catch (error) {
      await local.dispose()
      throw error
    }
  }

  onHostStateChange(listener: () => void): Disposer {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  listHosts(): readonly ProjectHostOption[] {
    return [
      hostOption(this.local, 'Local', 'local'),
      ...this.aliases.map((config) => {
        const host = this.hosts.get(config.alias)
        return host
          ? hostOption(host, config.alias, 'ssh')
          : {
              hostId: config.alias,
              label: config.alias,
              kind: 'ssh' as const,
              connectionState: 'disconnected' as const,
              watchTier: 'polling' as const,
            }
      }),
    ]
  }

  hostById(hostId: string): ProjectHost | undefined {
    return this.hosts.get(hostId)
  }

  connectedHosts(): readonly ProjectHost[] {
    return [...this.hosts.values()].filter(
      ({ connectionState }) => connectionState === 'connected',
    )
  }

  materializeHost(hostId: string): Promise<ProjectHost> {
    if (this.disposed)
      return Promise.reject(new Error('Project host catalog is disposed'))
    const existing = this.hosts.get(hostId)
    if (existing) return Promise.resolve(existing)
    const pending = this.pendingHosts.get(hostId)
    if (pending) return pending
    const creation = Promise.resolve()
      .then(() => this.createSshHost(hostId))
      .finally(() => {
        if (this.pendingHosts.get(hostId) === creation) this.pendingHosts.delete(hostId)
      })
    this.pendingHosts.set(hostId, creation)
    return creation
  }

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
    kind,
    connectionState: host.connectionState,
    watchTier: host.watchTier,
  }
}
```

</details>


---

<sub>25s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/main/index.ts.**

/private/var/tmp/ws/881e1d1f/hvir/src/main/index.ts (lines 1-240)

<details>
<summary>240 lines</summary>

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
        return selection.canceled || !selection.filePaths[0]
          ? undefined
          : localPath(selection.filePaths[0])
      },
    )
    if (!registry) return app.quit()
    projectRegistry = runtime.own('project registry', registry, (item) => item.dispose())
    terminalSessionRegistry = runtime.own(
      'terminal session registry',
      await TerminalSessionRegistry.load(
        hostCatalog.local,
        localPath(applicationUserDataPath('terminal-sessions.json')),
        (event) => diagnostics.recordSessionRegistry(event),
      ),
      (sessions) => sessions.flush(),
    )
    harnessProfileStore = runtime.own(
      'harness profile store',
      await HarnessProfileStore.load(
        hostCatalog.local,
        localPath(applicationUserDataPath('harness-profiles.json')),
      ),
      (profiles) => profiles.flush(),
    )
    await harnessProfileStore
      .importLegacyDefaults(terminalSessionRegistry.profileReferences())
      .catch((error) =>
        console.warn('[harness] legacy recovery profile import failed', error),
      )
    echoWorker = runtime.own(
      'echo worker',
      createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
      (worker) => worker.dispose(),
    )
    const gitHostRouter = new GitWorkerHostRouter({
      authority: projectRegistry,
      authorizations: gitMutationAuthorizations,
    })
    gitWorker = runtime.own(
      'Git worker',
      createWorkerClient<GitWorkerProtocol>(
        workerPath('git-worker.js'),
        'hvir-git',
        (call) => gitHostRouter.route(call),
      ),
      (worker) => worker.dispose(),
    )
    const filenameSearch = runtime.own(
      'filename search',
      createFilenameSearchCoordinator(gitWorker),
      (search) => search.dispose(),
    )
    const projectFiles = runtime.own(
      'project file operations',
      createProjectFileOperationCoordinator(registry, hostCatalog, rendererScopes),
      (operations) => operations.dispose(),
    )
    ptySupervisor = runtime.own(
      'PTY supervisor',
      new PtySupervisor({
```

</details>


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/App.tsx (lines 1-260)

<details>
<summary>260 lines</summary>

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
```

</details>


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/App.tsx (lines 261-560)

<details>
<summary>300 lines</summary>

```
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
    <div className="app-shell">
      {projectState ? (
        <ProjectsBar
          state={projectState}
          rollups={terminalAttention.rollups}
          busy={session.busy}
          onAdd={overlays.openProjectPicker}
          onSwitch={(projectId, workspaceId) => {
            setDestination('workspace')
            void session.switchWorkspace(projectId, workspaceId)
          }}
          onRefresh={(projectId) => void session.refreshProject(projectId)}
          onCloseProject={(projectId) => void session.closeProject(projectId)}
          onPrune={(projectId) => void session.pruneWorktrees(projectId)}
          onDismiss={(projectId, workspaceId) =>
            void session.dismissWorkspace(projectId, workspaceId)
          }
          onPlanCloseWorkspace={session.planWorkspaceClose}
          onCloseWorkspace={(projectId, workspaceId, plan, terminateTerminals) =>
            void session.closeWorkspace(projectId, workspaceId, plan, terminateTerminals)
          }
          onReopenWorkspace={(projectId, workspaceId) =>
            void session.reopenWorkspace(projectId, workspaceId)
          }
          watchTier={session.watchTier}
          statusError={session.error}
          onChangeConnection={overlays.openProjectPicker}
          onDisconnect={() => void session.disconnect()}
          onReconnect={() => void session.reconnect()}
          theme={theme}
          onTheme={(nextTheme) => setAppTheme(nextTheme)}
          onSettings={() => overlays.openSettings()}
          sessionsActive={destination === 'sessions'}
          onSessions={() => setDestination('sessions')}
        />
      ) : null}
      <main
        className={`workbench${connectionState === 'connected' ? '' : ' project-stale'}${terminalMode === 'maximized' ? ' terminal-focused' : ''}${terminalMode === 'collapsed' ? ' terminal-collapsed' : ''}${treeCollapsed ? ' tree-collapsed' : ''}${layout.terminalRailCompact ? ' terminal-rail-compact' : ''}${webViewFocused && webViewActive ? ' web-focused' : ''}`}
        ref={workbenchRef}
        hidden={destination === 'sessions'}
      >
        <aside
          className="tree-panel"
          aria-label="Project rail"
          data-diagnostic-capture="project-navigation"
          tabIndex={-1}
        >
          <nav className="rail-nav" aria-label="Project views">
            <button
              type="button"
              className={railMode === 'files' ? 'active' : ''}
              aria-current={railMode === 'files' ? 'page' : undefined}
              onClick={() => setRailMode('files')}
            >
              Files
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

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/main/project-folder-picker/project-folder-picker-coordinator.ts.**

/private/var/tmp/ws/881e1d1f/hvir/src/main/project-folder-picker/project-folder-picker-coordinator.ts

<details>
<summary>205 lines</summary>

```
import { randomUUID } from 'node:crypto'

import {
  hostPathEquals,
  hostPath,
  asHostId,
  isProjectFileEntryName,
  joinHostPath,
  type BrowseHostResponse,
  type HostPath,
  type ProjectFolderPickerLease,
} from '../../shared'
import {
  isProjectPathExistsError,
  type Disposer,
  type ProjectHost,
} from '../project-host'
import type {
  RendererOwner,
  RendererResourceLease,
  RendererResourceScopes,
} from '../renderer-resource-scopes'

export interface ProjectFolderPickerHosts {
  hostById(hostId: string): ProjectHost | undefined
}

export interface ProjectFolderPickerBrowse {
  browseHost(hostId: string, path: string): Promise<BrowseHostResponse>
}

interface PickerRecord {
  readonly id: string
  readonly owner: RendererOwner
  readonly host: ProjectHost
  readonly stopHostState: Disposer
  lease?: RendererResourceLease
  selectionGeneration: number
  selectedParent?: HostPath
  createAbort?: AbortController
  active: boolean
}

/** Owns bounded pre-registration directory authority for the project folder picker. */
export class ProjectFolderPickerCoordinator {
  private readonly activeByOwner = new Map<string, PickerRecord>()

  constructor(
    private readonly hosts: ProjectFolderPickerHosts,
    private readonly folders: ProjectFolderPickerBrowse,
    private readonly resources: RendererResourceScopes,
  ) {}

  async start(owner: RendererOwner, hostId: string): Promise<ProjectFolderPickerLease> {
    this.resources.assertCurrent(owner)
    const host = this.hosts.hostById(hostId)
    if (!host || host.connectionState !== 'connected') {
      throw new Error(`Connect to ${hostId} before choosing a project folder`)
    }
    await this.closeCurrent(owner)
    this.resources.assertCurrent(owner)
    if (this.hosts.hostById(hostId) !== host || host.connectionState !== 'connected') {
      throw stalePickerError()
    }

    let stopHostState: Disposer = () => undefined
    const record: PickerRecord = {
      id: randomUUID(),
      owner,
      host,
      stopHostState: () => stopHostState(),
      selectionGeneration: 0,
      active: true,
    }
    stopHostState = host.onConnectionState((state) => {
      if (state !== 'connected') {
        void record.lease?.dispose().catch(() => undefined)
      }
    })
    try {
      record.lease = this.resources.register(
        owner,
        { lifetime: 'renderer', type: 'project-folder-picker' },
        () => this.revoke(record),
      )
      this.activeByOwner.set(ownerKey(owner), record)
      return { pickerId: record.id }
    } catch (error) {
      await record.stopHostState()
      throw error
    }
  }

  async browse(
    owner: RendererOwner,
    pickerId: string,
    path: string,
  ): Promise<BrowseHostResponse> {
    const record = this.requireCurrent(owner, pickerId)
    if (record.createAbort) throw new Error('A folder is already being created')
    const selectionGeneration = (record.selectionGeneration += 1)
    record.selectedParent = undefined
    const result = await this.folders.browseHost(record.host.hostId, path)
    this.assertStillCurrent(record)
    if (result.path.hostId !== record.host.hostId) throw stalePickerError()
    if (record.selectionGeneration !== selectionGeneration || record.createAbort) {
      throw new Error('Select the destination folder again')
    }
    record.selectedParent = result.path
    return result
  }

  async createDirectory(
    owner: RendererOwner,
    pickerId: string,
    destinationParent: HostPath,
    name: string,
  ): Promise<HostPath> {
    if (!isProjectFileEntryName(name)) throw new Error('Invalid directory name')
    const record = this.requireCurrent(owner, pickerId)
    if (
      !destinationParent ||
      typeof destinationParent.hostId !== 'string' ||
      typeof destinationParent.path !== 'string' ||
      destinationParent.hostId !== record.host.hostId ||
      !destinationParent.path.startsWith('/')
    ) {
      throw new Error('Invalid destination folder')
    }
    const requestedParent = hostPath(
      asHostId(destinationParent.hostId),
      destinationParent.path,
    )
    if (
      !record.selectedParent ||
      !hostPathEquals(record.selectedParent, requestedParent)
    ) {
      throw new Error('Select the destination folder again')
    }
    if (record.createAbort) throw new Error('A folder is already being created')

    const abort = new AbortController()
    record.createAbort = abort
    try {
      const canonicalParent = await record.host.realpath(requestedParent)
      this.assertStillCurrent(record)
      if (!hostPathEquals(canonicalParent, record.selectedParent)) {
        throw new Error('Select the destination folder again')
      }
      const parentStat = await record.host.stat(canonicalParent)
      this.assertStillCurrent(record)
      if (parentStat.type !== 'dir') {
        throw new Error('The selected folder is unavailable')
      }

      const destination = joinHostPath(canonicalParent, name)
      await record.host.createDirectoryExclusive(destination, {
        mode: 0o755,
        signal: abort.signal,
      })
      this.assertStillCurrent(record)
      record.selectedParent = destination
      return destination
    } catch (error) {
      if (isProjectPathExistsError(error)) {
        throw new Error('The destination already exists', { cause: error })
      }
      throw error
    } finally {
      if (record.createAbort === abort) record.createAbort = undefined
    }
  }

  async close(owner: RendererOwner, pickerId: string): Promise<void> {
    const record = this.activeByOwner.get(ownerKey(owner))
    if (!record || record.id !== pickerId) return
    await record.lease?.dispose()
  }

  private requireCurrent(owner: RendererOwner, pickerId: string): PickerRecord {
    this.resources.assertCurrent(owner)
    const record = this.activeByOwner.get(ownerKey(owner))
    if (!record || record.id !== pickerId) throw stalePickerError()
    this.assertStillCurrent(record)
    return record
  }

  private assertStillCurrent(record: PickerRecord): void {
    if (
      !record.active ||
      !this.resources.isCurrent(record.owner) ||
      this.activeByOwner.get(ownerKey(record.owner)) !== record ||
      this.hosts.hostById(record.host.hostId) !== record.host ||
      record.host.connectionState !== 'connected'
    ) {
      throw stalePickerError()
    }
  }

  private closeCurrent(owner: RendererOwner): Promise<void> {
    return this.activeByOwner.get(ownerKey(owner))?.lease?.dispose() ?? Promise.resolve()
  }

  private async revoke(record: PickerRecord): Promise<void> {
    if (!record.active) return
    record.active = false
    record.selectionGeneration += 1
    record.selectedParent = undefined
    record.createAbort?.abort(stalePickerError())
    record.createAbort = undefined
    await record.stopHostState()
    if (this.activeByOwner.get(ownerKey(record.owner)) === record) {
      this.activeByOwner.delete(ownerKey(record.owner))
    }
  }
}

function ownerKey(owner: RendererOwner): string {
  return `${owner.id}:${owner.generation}`
}

function stalePickerError(): Error {
  return new Error('The project folder picker is no longer active')
}
```

</details>


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/881e1d1f/hvir/src/renderer/src/workspaces/SessionDialog.tsx

<details>
<summary>399 lines</summary>

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
        )}
        <div className="dialog-actions">
          {stage === 'folder' ? (
            <button type="button" disabled={busy} onClick={() => void back()}>
              Back
            </button>
          ) : null}
          <button type="button" disabled={busy} onClick={() => void cancel()}>
            Cancel
          </button>
          {stage === 'host' ? (
            <button type="button" disabled={busy} onClick={() => void connect()}>
              {busy
                ? 'Working…'
                : selectedHost?.kind === 'local' ||
                    selectedHost?.connectionState === 'connected'
                  ? 'Choose folder'
                  : 'Connect'}
            </button>
          ) : null}
        </div>
      </section>
    </div>
  )
}

function recentFolders(hostId: string): readonly string[] {
  try {
    const value: unknown = JSON.parse(
      localStorage.getItem(`hvir:recent-folders:${hostId}`) ?? '[]',
    )
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === 'string').slice(0, 5)
      : []
  } catch {
    return []
  }
}

function rememberFolder(hostId: string, path: string): void {
  const next = [path, ...recentFolders(hostId).filter((folder) => folder !== path)].slice(
    0,
    5,
  )
  localStorage.setItem(`hvir:recent-folders:${hostId}`, JSON.stringify(next))
}
```

</details>


---

<sub>31s</sub>

### `rg`

**displayName:|description:|label:|defaultProfile**

"displayName:|description:|label:|defaultProfile" in *.ts (src/main/harness/providers)

<details>
<summary>37 matches</summary>

```
[grep content: 29 matches across 7 file(s) under src/main/harness/providers]

codex.ts (4 match(es)):
       displayName: 'Codex',
       defaultProfile: {
         displayName: 'Codex',
         description: 'Codex with exact rollout discovery and recovery.',

github-copilot.ts (4 match(es)):
       displayName: 'GitHub Copilot CLI',
       defaultProfile: {
         displayName: 'GitHub Copilot CLI',
         description:

shell.ts (5 match(es)):
       displayName: 'Shell',
       defaultProfile: {
         displayName: 'Shell',
         description: 'The default interactive shell on this host.',
       displayName: 'Custom',

gemini.ts (4 match(es)):
       displayName: 'Gemini CLI',
       defaultProfile: {
         displayName: 'Gemini CLI',
         description:

pi.ts (4 match(es)):
       displayName: 'Pi',
       defaultProfile: {
         displayName: 'Pi',
         description:

claude-code.ts (4 match(es)):
       displayName: 'Claude Code',
       defaultProfile: {
         displayName: 'Claude Code',
         description: 'Claude Code with exact hvir-managed session recovery.',

cursor.ts (4 match(es)):
       displayName: 'Cursor CLI',
       defaultProfile: {
         displayName: 'Cursor CLI',
         description:
```

</details>


---

<sub>31s</sub>

### `rg`

**Git|history|branch|worktree|Markdown|Mermaid|CSV|YAML|image|file**

"Git|history|branch|worktree|Markdown|Mermaid|CSV|YAML|image|file" in *.{ts,tsx} (src/renderer/src/viewer)

<details>
<summary>277 matches</summary>

```
[grep content: 250 matches across 32 file(s) under src/renderer/src/viewer]

markdown-renderer.ts (7 match(es)):
   import MarkdownIt, { type Token } from 'markdown-it'
   export async function renderMarkdownDocument(
     // Bare repository filenames such as `design.md` are not web hosts. The
     // main frame; authored Markdown links still render normally.
       enableTaskLists(new MarkdownIt(MARKDOWN_OPTIONS)),
     markdown.validateLink = (url) => url.startsWith('file://') || validateLink(url)
           // One unavailable grammar must not fail the Markdown surface.

FileViewer.tsx (37 match(es)):
     type GitBlameRun,
     const binaryImage = Boolean(tab?.file?.binary && renderedFileType(tab.path) === 'image')
       tab?.file && tab.file.size > SOURCE_INTERACTIVE_BYTE_LIMIT,
       tab?.file && !tab.file.binary
           ? sourcePreview(tab.file.content)
           : tab.file.content
       tab?.file && !tab.file.binary && !tab.externalWorkspaceRoot
             content: tab.file.content,
             {tab.error && tab.file ? (
                     title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
                     {tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:
                     {tab.file?.resolvedPath?.path ?? tab.path.path}
                   <option value="branch-point">Branch point</option>
                       tab.file?.binary && mode !== 'rendered'
                           ? 'No renderer registered for this file type'
                       (tab.file?.binary && mode !== 'rendered') ||
                       (tab.file?.binary && mode !== 'rendered') ||
         {!tab ? <EmptyViewer text="Choose a file from the tree" /> : null}
         {tab?.error && !tab.file ? <EmptyViewer text={tab.error} error /> : null}
         {tab && !tab.loading && tab.file?.binary && !binaryImage ? (
           <BinaryFileView path={tab.path} size={tab.file.size} />
         {tab && !tab.loading && tab.file && (!tab.file.binary || binaryImage) ? (
               file={tab.file}
       <div className="viewer-empty binary-file-summary">
         <strong>{extension ? `${extension} binary file` : 'Binary file'}</strong>
     file,
     readonly file: NonNullable<ViewerTab['file']>
     readonly blame: readonly GitBlameRun[]
             path={file.resolvedPath ?? tab.path}
             content={file.content}
           currentContent={file.content}
           currentSize={file.size}
     if (!canUseInteractiveSource(file.size)) {
           content={file.content}
           size={file.size}
         content={file.content}
         size={file.size}

use-diff-inputs.ts (2 match(es)):
   import type { DiffBase, GitDiffResponse, HostPath } from '../../../shared'
     readonly inputs?: GitDiffResponse
highlight-request.ts:     output.status('large file · highlighting off')

use-viewer-workspace.ts (7 match(es)):
             (file) =>
                 file,
             if (tab.externalWorkspaceRoot || (tab.loading && !tab.file))
         context: FileOpenContext = 'file-tree',
         if (!tab?.file || tab.file.binary || tab.conflict || tab.externalWorkspaceRoot)
         const savedContent = tab.file.content
             ...(tab.file.mtimeMs > 0 ? { expectedMtimeMs: tab.file.mtimeMs } : {}),

RepositoryImageView.tsx (15 match(es)):
     const [image, setImage] = useState<RepositoryImage>()
     const imageRef = useRef<RepositoryImage>(undefined)
               const previous = imageRef.current
               imageRef.current = replacement
               if (requestGeneration.current === generation && !imageRef.current)
             if (requestGeneration.current === generation && !imageRef.current)
         if (imageRef.current) URL.revokeObjectURL(imageRef.current.url)
         imageRef.current = undefined
     if (error && !image)
     if (!image) return <div className="viewer-empty">Loading image…</div>
       <figure className="rendered-scroll image-view">
           src={image.url}
           alt={path.path.split('/').at(-1) ?? 'Repository image'}
           <span>{image.mimeType}</span>
           <span>{formatViewerBytes(image.size)}</span>

markdown.worker.ts (7 match(es)):
     type MarkdownRenderRequest,
     type MarkdownRenderResponse,
   import { renderMarkdownDocument } from './markdown-renderer'
   self.onmessage = (event: MessageEvent<MarkdownRenderRequest>): void => {
   async function render(request: MarkdownRenderRequest): Promise<void> {
         html: await renderMarkdownDocument(request.markdown, request.theme, grammars),
   function post(message: MarkdownRenderResponse): void {

use-source-blame.ts (2 match(es)):
   import type { GitBlameRun, HostPath, ViewMode } from '../../../shared'
     const [blame, setBlame] = useState<readonly GitBlameRun[]>([])
viewer-document-refresh.ts:     (tab) => !tab.externalWorkspaceRoot && (!tab.loading || Boolean(tab.file)),

tab-state.ts (2 match(es)):
     /** Outside-project read-only document origin; never a registered file root. */
     readonly file?: ReadFileResponse

TabStrip.tsx (3 match(es)):
                 title="Repository history graph"
                 <span className="tab-name">Git history</span>
                 aria-label="Close Git history"

viewer-find.ts (9 match(es)):
     tab: Pick<ViewerTab, 'file' | 'loading' | 'mode' | 'path'>,
     if (!tab.file || tab.loading) return 'In-file find is unavailable while the file loads'
     if (tab.file.binary) {
       return renderedFileType(tab.path) === 'image'
         ? 'In-file find is unavailable for images'
         : 'In-file find is unavailable for binary files'
       return 'In-file find is unavailable in live rendered HTML'
     if (type === 'image') return 'In-file find is unavailable for images'
     return 'In-file find is unavailable in this rendered view'
csv-parser.ts:/** RFC:4180- style parsing used only inside the CSV worker and unit tests. */

SourceView.tsx (2 match(es)):
   import type { GitBlameRun, HostPath } from '../../../shared'
     readonly blame: readonly GitBlameRun[]

viewer-workspace-persistence.ts (4 match(es)):
             file:
         const draft = tab.dirty ? tab.file?.content : undefined
           mtimeMs: storedDraft === undefined ? undefined : tab.file?.mtimeMs,
     return value === 'working-tree' || value === 'head' || value === 'branch-point'

viewer-workspace-model.ts (19 match(es)):
         readonly file: ReadFileResponse
         const context = action.request.context ?? 'file-tree'
                 : context === 'file-tree'
           tab.file && !tab.externalWorkspaceRoot
                 file: {
                   ...tab.file,
             loading: !tab.file,
                 file: action.file,
                 externalWorkspaceRoot: action.file.resolvedPath
                   ? action.file.externalWorkspaceRoot
                   (action.file.externalWorkspaceRoot || tab.externalWorkspaceRoot) &&
                   file: {
               : { ...tab, file: undefined, loading: false, error: action.error },
           if (!tab.file) return tab
           const unchangedSinceSave = tab.file.content === action.savedContent
             file: {
               ...tab.file,
               size: unchangedSinceSave ? action.written.size : tab.file.size,
           conflict: tab.conflict || /file changed/i.test(action.error),

LargeFileView.tsx (2 match(es)):
       <div className="large-file-shell">
         <pre ref={container} className="large-file-preview" tabIndex={-1}>

markdown-repository-images.ts (46 match(es)):
   /** Owns repository-backed image dependencies and object URLs for one rendered document. */
   export class MarkdownRepositoryImages {
     /** Stage external markup inertly so the browser cannot fetch images before admission. */
       for (const image of template.content.querySelectorAll<HTMLImageElement>('img[src]')) {
         image.dataset['hvirRepositorySrc'] = image.getAttribute('src')!
         image.removeAttribute('src')
       for (const image of root.querySelectorAll<HTMLImageElement>(
         const dependency = this.dependency(image)
           if (this.workspaceRoot) void this.hydrateImage(image, undefined, false)
         void this.hydrateImage(image, dependency, false)
       for (const image of root.querySelectorAll<HTMLImageElement>('img')) {
         const dependency = this.dependency(image)
           void this.hydrateImage(image, dependency, true)
       for (const image of this.generations.keys()) {
         this.generations.set(image, (this.generations.get(image) ?? 0) + 1)
     private dependency(image: HTMLImageElement): HostPath | undefined {
       const source = image.dataset['hvirRepositorySrc'] ?? image.getAttribute('src')
       if (target.kind !== 'file') return undefined
       image.dataset['hvirRepositorySrc'] = source
       image: HTMLImageElement,
       const generation = (this.generations.get(image) ?? 0) + 1
       this.generations.set(image, generation)
         image.removeAttribute('src')
         image.classList.add('markdown-image-loading')
         if (!path) throw new Error('Image must be a file on the document host')
         if (this.disposed || this.generations.get(image) !== generation) {
         const previous = this.objectUrls.get(image)
         this.objectUrls.set(image, objectUrl)
         image.src = objectUrl
         image.hidden = false
         image.removeAttribute('aria-hidden')
         image.classList.remove('markdown-image-loading')
         this.unavailableMessages.get(image)?.remove()
         this.unavailableMessages.delete(image)
         if (this.disposed || this.generations.get(image) !== generation) {
         if (preserveCurrent && this.objectUrls.has(image)) return
           this.unavailableMessages.get(image) ?? document.createElement('span')
         unavailable.className = 'markdown-image-unavailable'
         unavailable.textContent = image.alt
           ? `[Image unavailable: ${image.alt}]`
           : '[Repository image unavailable]'
         image.hidden = true
         image.setAttribute('aria-hidden', 'true')
         image.classList.remove('markdown-image-loading')
         if (!this.unavailableMessages.has(image)) image.after(unavailable)
         this.unavailableMessages.set(image, unavailable)

MarkdownFragment.tsx (6 match(es)):
   import { renderMarkdown, useMarkdownRendererGeneration } from './markdown-client'
   interface MarkdownFragmentProps {
   export function MarkdownFragment({
   }: MarkdownFragmentProps): ReactElement {
     const renderGeneration = useMarkdownRendererGeneration()
       void renderMarkdown(content, theme).then(
external-document-tabs.ts:   if (tab.file?.binary) return tab.mode

DiffView.tsx (2 match(es)):
       return 'At least one Git input was truncated; an incomplete comparison is not shown.'
     if (base === 'branch-point') return 'Branch point → HEAD'

retained-viewer-workspace-cache.ts (5 match(es)):
           if (!tab.dirty && tab.file) {
             cleanBytes += tab.file.size
             !tab.file ||
           cleanBytes -= tab.file.size
       file: undefined,

diff-policy.ts (3 match(es)):
    * Only live-file comparisons may include an unsaved editor buffer. Historical
    * and branch-point diffs describe immutable Git revisions and must not change
     return dirty && revision === undefined && base !== 'branch-point'

RenderedView.tsx (26 match(es)):
   import { renderMarkdown, resetMarkdownRenderer } from './markdown-client'
   import { MarkdownRepositoryImages } from './markdown-repository-images'
     if (type === 'image') {
         <StandaloneMermaid
         <MarkdownView
     return <div className="viewer-empty">No rendered view for this file type</div>
     if (error) return <div className="viewer-empty error">Invalid CSV: {error}</div>
     if (!table) return <div className="viewer-empty">Parsing CSV…</div>
   function MarkdownView({
     const repositoryImages = useRef<MarkdownRepositoryImages>(undefined)
       void renderMarkdown(content, theme).then(
       const images = new MarkdownRepositoryImages(path, workspaceRoot)
       images.mount(root, html)
       repositoryImages.current = images
       onDependencies(images.hydrate(root))
       void renderMermaidNodes(root, () => cancelled, theme)
         images.dispose()
         if (repositoryImages.current === images) repositoryImages.current = undefined
       // Rebind whenever the image/markup effect above replaces the document nodes,
   function StandaloneMermaid({
       void renderMermaid(content, `mermaid-${++mermaidRequestId}`, theme).then(
   async function renderMermaidNodes(
         node.innerHTML = await renderMermaid(source, `mermaid-${++mermaidRequestId}`, theme)
   async function renderMermaid(
         resetMarkdownRenderer()
         reject(new Error(event.message || 'CSV worker unavailable'))

markdown-client.ts (8 match(es)):
   import type { MarkdownRenderResponse } from './render-protocol'
       (event: MessageEvent<MarkdownRenderResponse>) => {
       const error = new Error('Markdown renderer unavailable')
   export function renderMarkdown(
   export function useMarkdownRendererGeneration(): number {
   export function resetMarkdownRenderer(): void {
     const error = new Error('Markdown renderer reloading')
     import.meta.hot.dispose(resetMarkdownRenderer)

FindControl.tsx (2 match(es)):
           title="Find in file · Ctrl/Cmd+F"
             aria-label="Find in file"
viewer-path-rebind.ts:         file: tab.file ? { ...tab.file, path: rebound.path } : tab.file,

markdown-extensions.ts (8 match(es)):
   import type { MarkdownIt, StateCore, Token } from 'markdown-it'
   export function enableTaskLists(markdown: MarkdownIt): MarkdownIt {
       prepareGitLabTasks,
       renderGitLabTasks,
   export function enableSourceLineAnchors(markdown: MarkdownIt): MarkdownIt {
   /** Custom renderers must retain the source anchor that MarkdownIt attrs normally carry. */
   function prepareGitLabTasks(state: StateCore): void {
   function renderGitLabTasks(state: StateCore): void {

highlight-protocol.ts (13 match(es)):
     bsdmakefile: 'make',
     dockerfile: 'docker',
     gemfile: 'ruby',
     gnumakefile: 'make',
     jenkinsfile: 'groovy',
     justfile: 'just',
     makefile: 'make',
     rakefile: 'ruby',
     vagrantfile: 'ruby',
     ['justfile.', 'just'],
     ['makefile.', 'make'],
     // Dockerfile.* is an explicit association even when its suffix is also a grammar name.
     if (name.startsWith('dockerfile.')) return viewerGrammarName('docker')

source-blame-gutter.ts (5 match(es)):
   import type { GitBlameRun } from '../../../shared'
     constructor(private readonly run: GitBlameRun) {
   export function blameGutter(runs: readonly GitBlameRun[]) {
     runs: readonly GitBlameRun[],
   ): GitBlameRun | undefined {
rendered-link-handler.ts:   if (target.kind === 'file') {

render-protocol.ts (2 match(es)):
   export interface MarkdownRenderRequest {
   export type MarkdownRenderResponse =
```

</details>


---

<sub>31s</sub>

### `bash`

**Inspect remotes and developer checks**

$ git remote -v; printf '\n-- package lock version --\n'; node -p "require('./package-lock.json').lockfileVersion"; printf '\n-- hook --\n'; cat .githooks/pre-push

<details>
<summary>22 lines</summary>

```
-- package lock version --
3

-- hook --
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>55s</sub>

### Copilot

I’ve confirmed the app supports local and SSH project workspaces, integrated terminals and Git, and configurable coding-agent CLI profiles. I’m adding a README with the real setup, packaging, and verification commands from `package.json`.

---

<sub>1m 3s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for software projects and terminal-based coding\n+harnesses. It brings local and SSH-hosted project folders, integrated terminal\n+workspaces, Git tooling, and file review into one Electron application.\n+\n+## Features\n+\n+- Open local project folders or folders on SSH hosts configured in\n+  `~/.ssh/config`.\n+- Launch and organize terminal sessions, including split layouts and session\n+  recovery.\n+- Configure per-project or global launch profiles for Shell, Claude Code,\n+  Codex, Pi, Gemini CLI, GitHub Copilot CLI, Cursor CLI, and custom commands.\n+- Browse, edit, and review project files with syntax highlighting, image\n+  previews, rendered Markdown, Mermaid diagrams, and CSV tables.\n+- Inspect Git changes, diffs, branches, worktrees, history, and commit details;\n+  fetch, pull, and switch branches from the workbench.\n+- Keep work visible through project, workspace, terminal, and supported harness\n+  session views.\n+\n+## Prerequisites\n+\n+- Node.js 24 or later\n+- npm\n+- A native build toolchain for `node-gyp`, which rebuilds the app's native\n+  modules during installation\n+\n+Git is needed for Git features. To use a coding harness, install and\n+authenticate its CLI on the local or remote host where it will run. For remote\n+projects, define an OpenSSH `Host` alias in `~/.ssh/config` and ensure its\n+authentication method is available locally.\n+\n+## Getting started\n+\n+From a checkout of this repository:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` installs Electron and rebuilds the native terminal dependencies for\n+Electron's runtime. On first launch, choose a project folder. To work remotely,\n+open the project picker, connect to an SSH host, and select a folder on that\n+host. Add or customize coding-harness profiles in **Settings → Harnesses**.\n+\n+## Development commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the Electron app in development mode. |\n+| `npm run build` | Type-check and build production bundles. |\n+| `npm run lint` | Run ESLint. |\n+| `npm run typecheck` | Type-check the main/preload and renderer targets. |\n+| `npm test` | Run the Vitest suite. |\n+| `npm run verify` | Run architecture checks, linting, type-checking, and tests. |\n+| `npm run smoke` | Build and exercise the production Electron workflow. |\n+| `npm run hooks:install` | Install the repository's pre-push hook. |\n+\n+On Linux without a display server, `npm run smoke` requires `xvfb-run`; the\n+pre-push hook handles this automatically when it is available.\n+\n+## Packaging\n+\n+Production artifacts are written to `dist/`.\n+\n+```sh\n+# macOS Apple Silicon package\n+npm run pack:mac:arm64\n+\n+# Linux Debian packages\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+## Project structure\n+\n+```text\n+src/main/       Electron main process, project hosts, Git, terminals, and IPC\n+src/preload/    Typed renderer API exposed through Electron's preload bridge\n+src/renderer/   React workbench UI\n+src/shared/     Shared contracts and domain types\n+test/           Unit, integration, and Electron-facing tests\n+scripts/        Build, architecture, release, and smoke-test tooling\n+```\n+\n+## License\n+\n+This project is licensed under the [MIT License](LICENSE).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/881e1d1f/hvir/README.md
```


---

<sub>1m 7s</sub>

### Copilot

The README is in place. I’m checking its formatting and validating that the documented paths match the repository before finishing.

---

<sub>1m 9s</sub>

### `bash`

**Validate README format and documented paths**

$ git diff --check && npx prettier --check README.md && printf '\n-- documented source paths --\n' && for path in src/main src/preload src/renderer src/shared test scripts; do [ -e "$path" ] && printf '%s: present\n' "$path" || printf '%s: missing\n' "$path"; done && printf '\n-- worktree --\n' && git status --short

<details>
<summary>12 lines</summary>

```
Checking formatting...
All matched files use Prettier code style!

-- documented source paths --
src/main: present
src/preload: present
src/renderer: present
src/shared: present
test: present
scripts: present

-- worktree --
?? README.md
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>1m 11s</sub>

### Copilot

**Created `README.md`** with an accurate project overview, feature summary, prerequisites, local/SSH setup, development and packaging commands, repository structure, and MIT license reference.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
