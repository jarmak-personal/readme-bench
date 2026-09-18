# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `f7ef684e-d816-4d41-bac3-baa25cf92b94`  
> - **Started:** 9/17/2026, 7:00:22 PM  
> - **Duration:** 32s  
> - **Exported:** 9/17/2026, 7:00:55 PM  

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

I’ll inspect the project structure and existing metadata, then write a focused README that matches the actual setup and usage.

---

<sub>8s</sub>

### `bash`

**Inspect repository status and files**

$ git --no-pager status --short && printf '\n--- top-level ---\n' && find . -maxdepth 2 -type f -not -path './.git/*' | sort | sed 's#^./##' | head -200

<details>
<summary>202 lines</summary>

```
--- top-level ---
.githooks/pre-push
.github/dependabot.yml
.gitignore
.prettierignore
.prettierrc.json
build/entitlements.mac.inherit.plist
build/entitlements.mac.plist
build/icon-linux.svg
build/icon-macos.icns
build/icon-macos.png
build/icon-macos.svg
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
LICENSE
node_modules/.package-lock.json
package-lock.json
package.json
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
scripts/inspect-packaged-runtime.mts
scripts/install-git-hooks.sh
scripts/installed-harness-dialog-probe.mts
scripts/installed-startup-probe.mts
scripts/native-installer.template.sh
scripts/phase8-gauntlet.sh
scripts/prepare-release-linux-package.mts
scripts/prepare-release-pr.mjs
scripts/real-host-ssh-contract.mts
scripts/real-host-ssh.vite.config.mts
scripts/record-macos-ssh-identity.sh
scripts/release-changelog.d.mts
scripts/release-changelog.mjs
scripts/release-github-evidence.mts
scripts/render-native-installer.d.mts
scripts/render-native-installer.mjs
scripts/require-release-ci-evidence.mts
scripts/run-linux-package-smoke.sh
scripts/run-macos-package-smoke.sh
scripts/run-macos-ssh-acceptance.sh
scripts/run-real-host-ssh-acceptance.mts
scripts/run-smoke-interruption.mts
scripts/run-smoke-scenarios.mts
scripts/run-smoke.sh
scripts/smoke-failure-artifact.mts
scripts/smoke-import-boundary.mjs
scripts/validate-release-pr.mts
stryker.config.json
test/adr-lifecycle.test.ts
test/application-runtime.test.ts
test/architecture-command.test.ts
test/architecture-github.test.ts
test/architecture-history.test.ts
test/architecture-module-directions.test.ts
test/architecture-module-graph.test.ts
test/architecture-policy.test.ts
test/architecture-wiring.test.ts
test/attention-badge.test.ts
test/canonical-project-config.test.ts
test/capacity-live-presentation.test.ts
test/capacity-output-fixtures.test.ts
test/capacity-performance.test.ts
test/capacity-terminal-activity.test.ts
test/ci-attempt-evidence.test.ts
test/ci-workflow.test.ts
test/claude-context-telemetry.test.ts
test/claude-keybindings.test.ts
test/claude-session-artifact.test.ts
test/claude-session-recovery.test.ts
test/clipboard-file-list.test.ts
test/clipboard-ipc.test.ts
test/codemirror-find-target.test.tsx
test/codex-context-telemetry.test.ts
test/codex-session-discovery.test.ts
test/codex-session-recovery-lifecycle.test.ts
test/commit-detail-client.test.ts
test/commit-file-tree.test.ts
test/commit-message.test.ts
test/confirmation-dialog.test.tsx
test/contributor-status-entrypoint.test.ts
test/contributor-status.test.ts
test/csv-parser.test.ts
test/development-performance-measure-budget.test.ts
test/development-renderer-instrumentation.test.tsx
test/diagnostic-evidence.test.ts
test/diagnostic-intake.test.ts
test/diagnostic-journal.test.ts
test/diagnostic-report-dialog.test.tsx
test/diagnostic-report-evidence.test.ts
test/diagnostic-report-mask.test.ts
test/diagnostic-report.test.ts
test/diff-view-refresh.test.tsx
test/directory-entry-sort.test.ts
test/document-review-coordinator.test.ts
test/document-review-delivery-coordinator.test.ts
test/document-review-delivery-interaction.test.tsx
test/document-review-delivery-ipc.test.ts
test/document-review-delivery.test.ts
test/document-review-interaction.test.tsx
test/document-review-model.test.ts
test/document-review-projections.test.ts
test/document-review-retention.test.ts
test/document-review-smoke-driver.test.ts
test/document-review-smoke-isolation.test.ts
test/document-review-store.test.ts
test/document-review-workspace-controller.test.ts
test/dom-find-target.test.tsx
test/electron-external-move-picker.test.ts
test/electron-process-metrics.test.ts
test/electron-project-reveal.test.ts
test/electron-project-trash.test.ts
test/electron-renderer-document-lifecycle.test.ts
test/electron-renderer-recovery.test.ts
test/error-boundary-health.test.tsx
test/external-document-authority.test.ts
test/external-document-ipc.test.ts
test/external-document-ssh.test.ts
test/external-file-copy.test.ts
test/external-file-grants.test.ts
test/external-file-move-coordinator.test.ts
test/external-file-move-renderer.test.tsx
test/external-file-move.test.ts
test/file-create-actions.test.tsx
test/file-manager-reveal-policy.test.ts
test/file-name.test.ts
test/file-tree-reveal.test.tsx
test/file-viewer-controls.test.tsx
test/filename-enumerator.test.ts
test/filename-search-coordinator.test.ts
test/filename-search-policy.test.ts
test/filename-search.test.tsx
test/files-interactions.test.tsx
test/find-control.test.tsx
test/ghostty-render-scheduler.test.ts
test/ghostty-terminal-events.test.ts
test/ghostty-terminal-fit.test.ts
test/ghostty-terminal-hyperlink.test.tsx
test/ghostty-terminal-keyboard.test.ts
test/ghostty-terminal-pane-lifecycle.test.tsx
test/ghostty-terminal-search-identity.test.tsx
test/ghostty-web-update-candidate-bundle.test.ts
test/ghostty-web-update-candidate.test.ts
test/ghostty-web-update-coordinator.test.ts
test/ghostty-web-update-delivery.test.ts
test/ghostty-web-update-github-client.test.ts
test/ghostty-web-update-policy.test.ts
test/ghostty-web-update-workflow.test.ts
test/git-capability.test.ts
test/git-engine.test.ts
test/git-graph-layout.test.ts
test/git-ignore-refresh.test.ts
test/git-mutation-authorization.test.ts
test/git-mutation-coordinator.test.ts
test/git-parsers.test.ts
test/git-rail-controller.test.tsx
test/git-rail-model.test.ts
test/git-sync-coordinator.test.ts
test/git-sync-status.test.ts
test/git-windowing.test.ts
test/git-worker-host-router.test.ts
test/git-workspace.test.tsx
test/github-contributor-status.test.ts
test/github-delivery-start-status.test.ts
test/github-project-client.test.ts
test/github-project-kind-automation.test.ts
test/github-project-planning.test.ts
test/github-project-pr-planning.test.ts
test/github-token-migration.test.ts
test/github-workflow-contexts.test.ts
test/github-workflow-contexts.ts
test/harness-argument-editor.test.ts
test/harness-launch-menu-view.test.tsx
test/harness-launch-menu.test.ts
test/harness-launch.test.ts
test/harness-probe.test.ts
test/harness-profile-draft.test.ts
test/harness-profile-editor-policy.test.ts
test/harness-profile-editor.test.tsx
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### `glob`

**{package.json,pyproject.toml,Cargo.toml,go.mod,README*,LICENSE*,docker-compose*.yml,Dockerfile,Makefile,*.sln}**

"{package.json,pyproject.toml,Cargo.toml,go.mod,README*,LICENSE*,docker-compose*.yml,Dockerfile,Makefile,*.sln}"

```
./package.json
./LICENSE
./packages/rename-noreplace/package.json
./packages/rename-noreplace/LICENSE
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
  "filePath": "/private/var/tmp/ws/6e07c127/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>145 lines</summary>

````
File: `/private/var/tmp/ws/6e07c127/hvir/package.json`. Lines 1 to 143 (143 lines total): 
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
  "filePath": "/private/var/tmp/ws/6e07c127/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/6e07c127/hvir/README.md' does not exist
```


### `file_search`

****/README.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README.md"
}
```

</details>

```
No files found matching pattern: **/README.md
```


### `file_search`

****/package.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/package.json"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/6e07c127/hvir/package.json
  /private/var/tmp/ws/6e07c127/hvir/scripts/project-management/package.json
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/package.json
```


### `grep_search`

**purpose|description|summary**

<details>
<summary>Arguments</summary>

```json
{
  "query": "purpose|description|summary",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
442 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/electron-builder.ssh-acceptance.yml" line=14>
    NSLocalNetworkUsageDescription: >-
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/package.json" line=5>
    "description": "Private hvir Node-API binding for atomic no-replace rename",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/LICENSE" line=17>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/THIRD_PARTY_NOTICES.md" line=33>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/THIRD_PARTY_NOTICES.md" line=68>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/THIRD_PARTY_NOTICES.md" line=101>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/THIRD_PARTY_NOTICES.md" line=134>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/external-file-move.test.ts" line=359>
    purpose: 'move',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/.github/workflows/smoke-stress.yml" line=7>
    description: Focused scenario to repeat
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/.github/workflows/smoke-stress.yml" line=21>
    description: Fixed attempt count (not retries)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/github-token-migration.test.ts" line=50>
    purpose: 'test',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/.github/workflows/release-pr-merged.yml" line=68>
    echo "Dispatched hvir $VERSION from $MERGE_SHA" >> "$GITHUB_STEP_SUMMARY"
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/project-kind-reconciler.test.ts" line=37>
    expect(report.summary).toMatchObject({ total: 1, valid: 1, mutations: 0 })
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/project-kind-reconciler.test.ts" line=92>
    expect(report.summary.missing).toBe(1)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/project-kind-reconciler.test.ts" line=139>
    expect(report.summary).toMatchObject({ total: 3, valid: 1, missing: 1, ambiguous: 1 })
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/project-kind-reconciler.test.ts" line=146>
    expect(report.summary.closed).toBe(1)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/.github/workflows/macos-package-release.yml" line=7>
    description: Full merged release source commit SHA to package.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/.github/workflows/macos-package-release.yml" line=11>
    description: Permit an exact commit contained in the selected branch for release assembly.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/run-macos-package-smoke.sh" line=387>
    executable_description=$(file "$executable")
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/run-macos-package-smoke.sh" line=388>
    if [[ "$executable_description" != *'Mach-O'* ||
</match>
```
````

</details>


### `grep_search`

**install|run|test|command|entry|main**

<details>
<summary>Arguments</summary>

```json
{
  "query": "install|run|test|command|entry|main",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
5360 matches found before output was truncated (more results are available; search output capped at 524288 bytes)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/renderer-diagnostics.ts" line=22>
    /** Preload-owned, domain-specific, droppable transport for render containment. */
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/renderer-diagnostics.ts" line=106>
    // A destroyed renderer or main process cannot be held open by diagnostics.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/renderer-presentation-resources.ts" line=14>
    export function createRendererPresentationInstaller(
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=33>
    !left.statusTruncated &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=34>
    !right.statusTruncated &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=50>
    baseline.statusEntryCount !== current.statusEntryCount ||
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=61>
    (value.head === undefined || /^[0-9a-f]{40,64}$/i.test(value.head)) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=73>
    Number.isSafeInteger(value.statusEntryCount) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=74>
    value.statusEntryCount >= 0 &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=75>
    value.statusEntryCount <= WORKSPACE_ACTIVITY_STATUS_LIMIT &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=76>
    typeof value.statusTruncated === 'boolean' &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/workspace-activity.ts" line=77>
    /^[0-9a-f]{64}$/.test(value.statusDigest)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=28>
    "main": "./out/main/index.js",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=30>
    "postinstall": "npm run install:runtime",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=31>
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=32>
    "prebuild": "node scripts/check-terminal-runtime.mts",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=33>
    "predev": "node scripts/check-terminal-runtime.mts",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=35>
    "build": "npm run typecheck && electron-vite build",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=37>
    "build:dir": "npm run build && electron-builder --dir",
</match>
```
````

</details>


### `file_search`

****/tsconfig.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/tsconfig.json"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/6e07c127/hvir/tsconfig.json
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
  /private/var/tmp/ws/6e07c127/hvir/vitest.config.ts
```


### `file_search`

****/electron*.yml**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/electron*.yml"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/6e07c127/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/6e07c127/hvir/electron-builder.yml
```


### `grep_search`

**technology|framework|tool|stack**

<details>
<summary>Arguments</summary>

```json
{
  "query": "technology|framework|tool|stack",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
203 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/window/electron-renderer-recovery.ts" line=101>
    // navigation out of Electron's process-gone notification stack.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-storage.ts" line=32>
    throw new ReportStorageTooLargeError()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-storage.ts" line=111>
    export class ReportStorageTooLargeError extends Error {}
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/window/electron-window-manager.ts" line=201>
    guest.on('devtools-opened', () => guest.closeDevTools())
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/window/electron-window-manager.ts" line=436>
    webPreferences.devTools = false
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/merge-pr-skill.test.ts" line=70>
    expect(projectManagement).toContain('Repository tooling does not duplicate')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=29>
    ScreenshotTooLargeError,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=34>
    ReportStorageTooLargeError,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=185>
    error instanceof ScreenshotTooLargeError ? 'report-too-large' : 'capture-failed',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-coordinator.ts" line=431>
    return error instanceof ReportStorageTooLargeError
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/terminal-presentation.ts" line=400>
    const stack = getComputedStyle(document.documentElement)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/terminal-presentation.ts" line=405>
    stack.includes('"monospace"') &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/electron-diagnostic-report-actions.ts" line=55>
    throw new ScreenshotTooLargeError()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/electron-diagnostic-report-actions.ts" line=93>
    export class ScreenshotTooLargeError extends Error {}
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/installed-startup-probe.mts" line=372>
    readFileSync(join(userDataRoot, 'DevToolsActivePort'), 'utf8'),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/native-installer.test.ts" line=330>
    const toolDirectory = join(fixture.root, 'tools')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/native-installer.test.ts" line=334>
    await Promise.all([mkdir(toolDirectory), mkdir(nativeDirectory)])
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/native-installer.test.ts" line=336>
    const tools = {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/native-installer.test.ts" line=337>
    installer: join(toolDirectory, 'installer'),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/native-installer.test.ts" line=338>
    pkgutil: join(toolDirectory, 'pkgutil'),
</match>
```
````

</details>


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/6e07c127/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/6e07c127/hvir/README.md' does not exist
```


### `file_search`

****/README.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README.md"
}
```

</details>

```
No files found matching pattern: **/README.md
```


### `grep_search`

**A lightweight, view-first workbench for agentic development.**

<details>
<summary>Arguments</summary>

```json
{
  "query": "A lightweight, view-first workbench for agentic development.",
  "isRegexp": false
}
```

</details>

<details>
<summary>6 lines</summary>

````
1 matches
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=4>
    "description": "A lightweight, view-first workbench for agentic development.",
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
2870 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=3>
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=82>
    new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=89>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=98>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/application-runtime.ts" line=11>
    __HVIR_BUILD_CHANNEL__,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=2>
    "name": "hvir",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=6>
    "name": "hvir contributors",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=14>
    "homepage": "https://github.com/jarmak-personal/hvir",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=17>
    "url": "https://github.com/jarmak-personal/hvir.git"
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=19>
    "bugs": "https://github.com/jarmak-personal/hvir/issues",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=20>
    "desktopName": "hvir",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=31>
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=81>
    "smoke:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=83>
    "performance:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=93>
    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=140>
    "@hvir/rename-noreplace": "file:packages/rename-noreplace"
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/mutation-coordinator.ts" line=60>
    /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
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
  /private/var/tmp/ws/6e07c127/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/6e07c127/hvir/electron-builder.yml
```


### `grep_search`

**install:runtime|install-electron|electron-rebuild|node-pty**

<details>
<summary>Arguments</summary>

```json
{
  "query": "install:runtime|install-electron|electron-rebuild|node-pty",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
36 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=30>
    "postinstall": "npm run install:runtime",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=31>
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=97>
    "node-pty": "^1.1.0",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package-lock.json" line=23>
    "node-pty": "^1.1.0",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package-lock.json" line=1103>
    "electron-rebuild": "lib/cli.js"
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package-lock.json" line=6579>
    "install-electron": "install.js"
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package-lock.json" line=9068>
    "node_modules/node-pty": {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/package-lock.json" line=9070>
    "resolved": "https://registry.npmjs.org/node-pty/-/node-pty-1.1.0.tgz",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=5>
    * native modules chokidar and node-pty (enforced by lint). Everything else in
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=9>
    * node-pty is imported lazily inside `spawnPty` so the native binary is only
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=411>
    const pty = await import('node-pty')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=440>
    // node-pty exposes a synchronous enqueue boundary, not agent/TUI
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts" line=29>
    /** Exercise production-composed harnesses through Electron's native node-pty ABI. */
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts" line=107>
    // lifecycle with shell startup instead of testing node-pty.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts" line=203>
    `[smoke] Custom profile + native node-pty ABI OK (pid ${terminal.pid} · no window)`,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/pty-ownership.test.ts" line=54>
    "import pty from 'node-pty'",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/electron.vite.config.ts" line=54>
    // Three build targets. `externalizeDepsPlugin` keeps `dependencies` (node-pty,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=19>
    '/node_modules/node-pty/build/Release/pty.node',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=20>
    '/node_modules/node-pty/build/Release/spawn-helper',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=143>
    '/node_modules/node-pty/build/Release/pty.node',
</match>
```
````

</details>


### `grep_search`

**electron-vite|electron-builder|electron**

<details>
<summary>Arguments</summary>

```json
{
  "query": "electron-vite|electron-builder|electron",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
638 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/test/renderer-event-publisher.test.ts" line=3>
    const electron = vi.hoisted(() => ({
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/renderer-event-publisher.test.ts" line=18>
    vi.mock('electron', () => ({
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/renderer-event-publisher.test.ts" line=19>
    BrowserWindow: { getAllWindows: () => electron.windows },
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/renderer-event-publisher.test.ts" line=48>
    electron.windows = []
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/renderer-event-publisher.test.ts" line=57>
    electron.windows = [alive, crashed, destroyedContents]
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/renderer-event-publisher.test.ts" line=69>
    electron.windows = [target]
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/release-pr-integrity.test.ts" line=27>
    dependencies: { electron: '1.0.0' },
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/release-pr-integrity.test.ts" line=40>
    dependencies: { electron: '1.0.0' },
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/release-pr-integrity.test.ts" line=42>
    'node_modules/electron': {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/release-pr-integrity.test.ts" line=308>
    dependencies: { electron: '2.0.0' },
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/release-pr-integrity.test.ts" line=318>
    packages['node_modules/electron']!.version = '0.1.9'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=3>
    const electron = vi.hoisted(() => ({
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=8>
    vi.mock('electron', () => ({ protocol: electron }))
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=15>
    electron.handle.mockClear()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=16>
    electron.registerSchemesAsPrivileged.mockClear()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=17>
    electron.unhandle.mockClear()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=23>
    expect(electron.registerSchemesAsPrivileged).toHaveBeenCalledWith([
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/html-preview-protocol.test.ts" line=44>
    const handler = electron.handle.mock.calls[0]?.[1] as (request: Request) => Response
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/tsconfig.node.json" line=17>
    "electron.vite.config.ts",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/.githooks/pre-push" line=9>
    echo "[pre-push] Running hvir's local-platform Electron smoke test..."
</match>
```
````

</details>


### `grep_search`

**vitest|stryker|test**

<details>
<summary>Arguments</summary>

```json
{
  "query": "vitest|stryker|test",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1832 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=321>
    /^[0-9a-f]{7,64}(?:\^)?$/i.test(revision)) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=348>
    /^-n(?:[1-9]\d{0,2})$/.test(args[3] ?? '') &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=376>
    revision === 'HEAD' || /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(revision),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=394>
    (/^(?:refs\/(?:heads|remotes)\/)?[A-Za-z0-9][A-Za-z0-9._/+@-]*$/.test(value) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=423>
    return /^[0-9a-f]{7,64}$/i.test(value)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-command-context.ts" line=122>
    if (/not a git repository/i.test(rootResult.stderr)) return undefined
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-status.ts" line=294>
    if (/not a git repository/i.test(result.stderr)) return { ignoredPaths: [] }
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-parsers.ts" line=49>
    } else if (current && key === 'HEAD' && /^[0-9a-f]{40,64}$/i.test(value)) {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-parsers.ts" line=137>
    if (!/^[0-9a-f]{7,64}$/i.test(revision)) throw new Error('Invalid git revision')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-parsers.ts" line=383>
    typeof hash === 'string' && /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(hash),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=433>
    return code === 'ENOENT' || code === 2 || /no such file|not found/i.test(message)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/harness.ts" line=135>
    /[\0\r\n]/.test(req.hostId)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/harness.ts" line=178>
    !/\s/.test(value) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/terminal.ts" line=483>
    return /\bENOENT\b|command not found|unknown option|unrecognized option|unsupported option/i.test(
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/web-pane.ts" line=139>
    return typeof value === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(value)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/web-pane.ts" line=143>
    return typeof value === 'string' && /^[a-f0-9-]{36}$/.test(value)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=69>
    return value && /^[0-9A-Za-z.+-]{1,64}$/.test(value) ? value : 'unknown'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-intake.ts" line=48>
    interface RateState {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-intake.ts" line=66>
    private readonly rates = new Map<DiagnosticSource, RateState>()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/filename-search/filename-search-coordinator.ts" line=42>
    latestRequestId: number
</match>
```
````

</details>


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
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/6e07c127/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/ghostty-web-update/coordinator.mts
```

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
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/rename_noreplace.c
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/LICENSE
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/binding.gyp
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/index.js
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/package.json
```

</details>


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/6e07c127/hvir/README.md",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/6e07c127/hvir/README.md' does not exist
```


### `file_search`

****/README.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README.md"
}
```

</details>

```
No files found matching pattern: **/README.md
```


### `grep_search`

**A lightweight, view-first workbench for agentic development.**

<details>
<summary>Arguments</summary>

```json
{
  "query": "A lightweight, view-first workbench for agentic development.",
  "isRegexp": false
}
```

</details>

<details>
<summary>6 lines</summary>

````
1 matches
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/package.json" line=4>
    "description": "A lightweight, view-first workbench for agentic development.",
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
2870 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=3>
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=16>
    type HvirApi,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=49>
    const api: HvirApi = {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=82>
    new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=89>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=98>
    throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=110>
    contextBridge.exposeInMainWorld('hvir', api)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/mutation-coordinator.ts" line=60>
    /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/application-runtime.ts" line=11>
    __HVIR_BUILD_CHANNEL__,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/navigation-policy.ts" line=1>
    /** Only these explicit external schemes may leave hvir for the OS browser. */
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/web-pane/web-pane-route-registry.ts" line=15>
    export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=77>
    app.isPackaged || __HVIR_SMOKE_BUILD__,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=177>
    title: 'Choose a folder for hvir',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=212>
    createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=223>
    'hvir-git',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=431>
    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=436>
    if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=439>
    scenario: process.env['HVIR_SMOKE_SCENARIO'],
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=462>
    console.error('HVIR_STARTUP_FAIL', error)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=466>
    if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
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
  /private/var/tmp/ws/6e07c127/hvir/electron-builder.ssh-acceptance.yml
  /private/var/tmp/ws/6e07c127/hvir/electron-builder.yml
```


### `grep_search`

**install:runtime|install-electron|electron-rebuild|node-pty**

<details>
<summary>Arguments</summary>

```json
{
  "query": "install:runtime|install-electron|electron-rebuild|node-pty",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
36 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=5>
    * native modules chokidar and node-pty (enforced by lint). Everything else in
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=9>
    * node-pty is imported lazily inside `spawnPty` so the native binary is only
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=411>
    const pty = await import('node-pty')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts" line=440>
    // node-pty exposes a synchronous enqueue boundary, not agent/TUI
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/eslint.config.mjs" line=24>
    'node-pty',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/eslint.config.mjs" line=28>
    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/electron-builder.yml" line=22>
    # postinstall rebuilds the required node-pty module against Electron's ABI. Keep
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts" line=29>
    /** Exercise production-composed harnesses through Electron's native node-pty ABI. */
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts" line=107>
    // lifecycle with shell startup instead of testing node-pty.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts" line=203>
    `[smoke] Custom profile + native node-pty ABI OK (pid ${terminal.pid} · no window)`,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/check-seams.sh" line=29>
    # 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/check-seams.sh" line=30>
    hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/inspect-packaged-runtime.mts" line=13>
    const PTY_NATIVE_ENTRY = '/node_modules/node-pty/build/Release/pty.node'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/scripts/inspect-packaged-runtime.mts" line=14>
    const PTY_SPAWN_HELPER_ENTRY = '/node_modules/node-pty/build/Release/spawn-helper'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/pty-ownership.test.ts" line=54>
    "import pty from 'node-pty'",
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/electron.vite.config.ts" line=54>
    // Three build targets. `externalizeDepsPlugin` keeps `dependencies` (node-pty,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=19>
    '/node_modules/node-pty/build/Release/pty.node',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=20>
    '/node_modules/node-pty/build/Release/spawn-helper',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=143>
    '/node_modules/node-pty/build/Release/pty.node',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/test/packaged-runtime-inspection.test.ts" line=144>
    '/node_modules/node-pty/build/Release/spawn-helper',
</match>
```
````

</details>


### `grep_search`

**electron-vite|electron-builder|electron**

<details>
<summary>Arguments</summary>

```json
{
  "query": "electron-vite|electron-builder|electron",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
638 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=8>
    import { contextBridge, ipcRenderer, webUtils } from 'electron'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts" line=100>
    const listener = (_event: Electron.IpcRendererEvent, payload: unknown): void => {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=1>
    import { app, BrowserWindow, dialog, shell } from 'electron'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=9>
    import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=11>
    import { electronReveal } from './project-host/electron-project-reveal'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=19>
    import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=29>
    import { createElectronWindowManager } from './window/electron-window-manager'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=110>
    'Electron window manager',
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=111>
    createElectronWindowManager({
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=165>
    trashItem: electronTrash(shell),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=268>
    createElectronRemoteImagePasteCoordinator({
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=374>
    revealLocalEntry: electronReveal(shell),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=437>
    const { runElectronSmokeScenario } = await import('./smoke/scenarios')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts" line=438>
    const code = await runElectronSmokeScenario({
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=1>
    import { ipcMain } from 'electron'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=38>
    readonly sender: Electron.WebContents
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=43>
    readonly sender: Electron.WebContents
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=64>
    listener: (event: Electron.IpcMainInvokeEvent, request: unknown) => unknown,
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=69>
    listener: (event: Electron.IpcMainEvent, payload: unknown) => void,
</match>
```
````

</details>


### `grep_search`

**vitest|stryker|test**

<details>
<summary>Arguments</summary>

```json
{
  "query": "vitest|stryker|test",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1832 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=321>
    /^[0-9a-f]{7,64}(?:\^)?$/i.test(revision)) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=348>
    /^-n(?:[1-9]\d{0,2})$/.test(args[3] ?? '') &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=376>
    revision === 'HEAD' || /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(revision),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=394>
    (/^(?:refs\/(?:heads|remotes)\/)?[A-Za-z0-9][A-Za-z0-9._/+@-]*$/.test(value) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/worker-host-broker.ts" line=423>
    return /^[0-9a-f]{7,64}$/i.test(value)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-command-context.ts" line=122>
    if (/not a git repository/i.test(rootResult.stderr)) return undefined
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-status.ts" line=294>
    if (/not a git repository/i.test(result.stderr)) return { ignoredPaths: [] }
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-parsers.ts" line=49>
    } else if (current && key === 'HEAD' && /^[0-9a-f]{40,64}$/i.test(value)) {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-parsers.ts" line=137>
    if (!/^[0-9a-f]{7,64}$/i.test(revision)) throw new Error('Invalid git revision')
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/git/git-parsers.ts" line=383>
    typeof hash === 'string' && /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(hash),
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/authority-router.ts" line=433>
    return code === 'ENOENT' || code === 2 || /no such file|not found/i.test(message)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/harness.ts" line=135>
    /[\0\r\n]/.test(req.hostId)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/harness.ts" line=178>
    !/\s/.test(value) &&
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/terminal.ts" line=483>
    return /\bENOENT\b|command not found|unknown option|unrecognized option|unsupported option/i.test(
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/web-pane.ts" line=139>
    return typeof value === 'string' && /^[a-zA-Z0-9-]{1,80}$/.test(value)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/ipc/features/web-pane.ts" line=143>
    return typeof value === 'string' && /^[a-f0-9-]{36}$/.test(value)
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-report-builder.ts" line=69>
    return value && /^[0-9A-Za-z.+-]{1,64}$/.test(value) ? value : 'unknown'
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-intake.ts" line=48>
    interface RateState {
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/diagnostics/diagnostic-intake.ts" line=66>
    private readonly rates = new Map<DiagnosticSource, RateState>()
</match>
<match path="/private/var/tmp/ws/6e07c127/hvir/src/main/filename-search/filename-search-coordinator.ts" line=42>
    latestRequestId: number
</match>
```
````

</details>


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
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/6e07c127/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/6e07c127/hvir/scripts/ghostty-web-update/coordinator.mts
```

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
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/rename_noreplace.c
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/LICENSE
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/binding.gyp
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/index.js
  /private/var/tmp/ws/6e07c127/hvir/packages/rename-noreplace/package.json
```

</details>


### Copilot

\<final_answer>
/private/var/tmp/ws/6e07c127/hvir/package.json:1-143
/private/var/tmp/ws/6e07c127/hvir/README.md:1-200
/private/var/tmp/ws/6e07c127/hvir/electron-builder.ssh-acceptance.yml:1-200
/private/var/tmp/ws/6e07c127/hvir/electron-builder.yml:1-200
/private/var/tmp/ws/6e07c127/hvir/electron.vite.config.ts:1-200
/private/var/tmp/ws/6e07c127/hvir/vitest.config.ts:1-200
/private/var/tmp/ws/6e07c127/hvir/scripts/check-seams.sh:1-200
/private/var/tmp/ws/6e07c127/hvir/scripts/inspect-packaged-runtime.mts:1-200
/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts:1-200
/private/var/tmp/ws/6e07c127/hvir/src/main/project-host/local-host.ts:1-200
/private/var/tmp/ws/6e07c127/hvir/src/main/smoke/native-pty.ts:1-200
/private/var/tmp/ws/6e07c127/hvir/src/preload/index.ts:1-200
\</final_answer>


---

<sub>12s</sub>

### `view` — Failed

**view the file at /private/var/tmp/ws/6e07c127/hvir/README.md.**

/private/var/tmp/ws/6e07c127/hvir/README.md (lines 1--1)

```
Path does not exist
```


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e07c127/hvir/package.json.**

/private/var/tmp/ws/6e07c127/hvir/package.json (lines 1-170)

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

<sub>12s</sub>

### `bash`

**Inspect documentation and source layout**

$ printf '%s\n' '--- source directories ---'; find src -maxdepth 3 -type d | sort; printf '%s\n' '--- documentation ---'; find . -maxdepth 3 -type f \( -iname '*.md' -o -iname '*.adoc' \) -not -path './node_modules/*' -not -path './.git/*' | sort; printf '%s\n' '--- git remotes ---'; git remote -v

<details>
<summary>53 lines</summary>

```
--- source directories ---
src
src/main
src/main/diagnostics
src/main/document-review
src/main/filename-search
src/main/git
src/main/harness
src/main/harness/providers
src/main/health
src/main/ipc
src/main/ipc/features
src/main/project-file-operations
src/main/project-folder-picker
src/main/project-host
src/main/pty
src/main/sessions
src/main/smoke
src/main/terminal
src/main/viewer
src/main/web-pane
src/main/window
src/preload
src/renderer
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
src/renderer/src/styles
src/renderer/src/terminal
src/renderer/src/tree
src/renderer/src/viewer
src/renderer/src/workbench
src/renderer/src/workspaces
src/shared
src/shared/ipc
src/workers
--- documentation ---
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
--- git remotes ---
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### `rg`

**(GitHub Projects|SSH|terminal|workbench|workspace|Claude|Codex|document review|Markdown|Git)**

"(GitHub Projects|SSH|terminal|workbench|workspace|Claude|Codex|document review|Markdown|Git)" in *.ts* (src)

<details>
<summary>159 matches</summary>

```
[grep content: 5878 matches across 428 file(s) under src]

preload/terminal-clipboard-file-paste.ts (3 match(es)):
  1: import { terminalClipboardFilePastePath } from '../shared'
  9: export function terminalClipboardFilePasteText(
  13:   return terminalClipboardFilePastePath(readNativePath(file))

preload/index.ts (2 match(es)):
  26: import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
  55:     terminalClipboardFilePasteText(file, (candidate) =>

main/workspace-removal-coordinator.ts (12 match(es)):
  6:   dismissWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
  17:   removeMissingWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
  20: /** Owns the shared resource and catalog lifecycle for a definitively missing workspace. */
  29:     workspaceId: string,
  33:     const workspace = project.workspaces.find((candidate) => candidate.id === workspaceId)
  34:     if (!workspace) return this.registry.state()
  35:     if (!workspace.missing) throw new Error('Only removed worktrees can be dismissed')
  37:     await this.cleanup.forgetWorkspaceSessions(workspace.root)
  38:     const state = await this.registry.dismissWorkspace(projectId, workspaceId)
  40:       this.cleanup.revokeWorkspace(workspace.root),
  41:       this.cleanup.closeWorkspaceWebPanes(workspace.root),
  43:     this.cleanup.releaseHtmlPreviews(workspace.root)

main/git/worker-host-router.ts (10 match(es)):
  3:   GitMutationAuthorization,
  4:   type GitMutationAuthority,
  8: export interface GitWorkerAuthorityPort {
  9:   authorityForPath(hostId: string, path: string): GitMutationAuthority | undefined
  12: export interface GitWorkerHostRouterOptions {
  13:   readonly authority: GitWorkerAuthorityPort
  14:   readonly authorizations: GitMutationAuthorization
  18: /** Routes untrusted worker calls through exact mutation grants, then the Git broker. */
  19: export class GitWorkerHostRouter {
  20:   constructor(private readonly options: GitWorkerHostRouterOptions) {}

main/git/git-branches.ts (30 match(es)):
  3:   type GitBranchModel,
  4:   type GitBranchSync,
  7: import { gitError, shortRef, type GitCommandContext } from './git-command-context'
  14: import type { GitWorktreeCapability } from './git-worktrees'
  24: export class GitBranchCapability {
  26:     private readonly context: GitCommandContext,
  27:     private readonly worktrees: GitWorktreeCapability,
  30:   async branches(workspaceRoot: HostPath): Promise<GitBranchModel> {
  31:     this.context.assertHost(workspaceRoot)
  32:     const context = await this.context.project(workspaceRoot)
  51:         this.worktrees.discover(workspaceRoot),
  85:   async fetch(workspaceRoot: HostPath): Promise<void> {
  86:     this.context.assertHost(workspaceRoot)
  87:     const context = await this.context.project(workspaceRoot)
  88:     if (!context) throw new Error('Not a Git repository')
  90:     if (!remotes.trim()) throw new Error('No Git remote is configured')
  95:   async pullFastForward(workspaceRoot: HostPath): Promise<void> {
  96:     this.context.assertHost(workspaceRoot)
  97:     const model = await this.branches(workspaceRoot)
  98:     if (model.repositoryState === 'not-git') throw new Error('Not a Git repository')
  100:     if (!model.remoteAvailable) throw new Error('No Git remote is configured')
  108:     const context = await this.context.project(workspaceRoot)
  109:     if (!context) throw new Error('Not a Git repository')
  114:   async switchBranch(workspaceRoot: HostPath, branch: string): Promise<void> {
  116:     const model = await this.branches(workspaceRoot)
  117:     if (model.repositoryState === 'not-git') throw new Error('Not a Git repository')
  121:     if (target.worktree && !hostPathEquals(target.worktree, workspaceRoot)) {
  125:     const result = await this.context.mutate(workspaceRoot, args)
  129:   private async branchSync(root: HostPath, statusOutput: string): Promise<GitBranchSync> {
  131:     let base: GitBranchSync['base']

main/git/worker-host-broker.ts (13 match(es)):
  12: import type { GitHostCallPermissions } from './mutation-authorization'
  19: /** Main-side enforcement for the untrusted Git utility-process transport. */
  23:   permissions: GitHostCallPermissions = {},
  67:   validateGitInvocation(call.args)
  80:   if (call.cwd || !isAllowedGitInput(call.args, call.input)) {
  129:       // watcher cannot feed a request back into itself. The bounded workspace
  152: /** Validate the exact command grammar emitted by GitEngine. */
  153: function validateGitInvocation(args: readonly string[]): void {
  155:   if (dashC !== '-C' || !commandRoot || !subcommand) invalidGitInvocation()
  172:     invalidGitInvocation()
  288:   invalidGitInvocation()
  356: function isAllowedGitInput(args: readonly string[], input: string | undefined): boolean {
  442: function invalidGitInvocation(): never {

main/git/git-command-context.ts (15 match(es)):
  19: /** The exact host operations used by the off-thread Git engine. */
  20: export interface GitExecOptions extends ExecOptions {
  21:   /** Permit one exact read-only Git command to persist refreshed index stat data. */
  25: export interface GitHostPort {
  30:     opts?: GitExecOptions,
  37: export interface GitProjectContext {
  43: export interface GitRepositoryContext {
  50: export class GitCommandContext {
  52:     readonly host: GitHostPort,
  58:       throw new Error(`GitEngine received path for host '${path.hostId}'`)
  65:     opts: GitExecOptions = {},
  118:   async project(projectRoot: HostPath): Promise<GitProjectContext | undefined> {
  141:   async repository(path: HostPath): Promise<GitRepositoryContext> {
  146:         throw new Error('Git path escapes the active project')
  149:       if (!context) throw new Error('Not a Git repository')

main/git/git-diff.ts (5 match(es)):
  4:   type GitDiffResponse,
  7: import { shortRef, type GitCommandContext } from './git-command-context'
  10: export class GitDiffCapability {
  11:   constructor(private readonly context: GitCommandContext) {}
  17:   ): Promise<GitDiffResponse> {

main/git/git-history.ts (5 match(es)):
  1: import type { GitHistoryPage, HostPath } from '../../shared'
  2: import { gitError, type GitCommandContext } from './git-command-context'
  12: export class GitHistoryCapability {
  13:   constructor(private readonly context: GitCommandContext) {}
  21:   ): Promise<GitHistoryPage> {

main/git/git-worktrees.ts (3 match(es)):
  2: import { gitError, type GitCommandContext } from './git-command-context'
  5: export class GitWorktreeCapability {
  6:   constructor(private readonly context: GitCommandContext) {}

main/git/mutation-coordinator.ts (41 match(es)):
  8: import type { GitMutationGrant, GitMutationGrantRequest } from './mutation-authorization'
  10: import type { WorkspaceRemovalPort } from '../workspace-removal-coordinator'
  12: export interface GitMutationRegistryPort {
  14:     readonly workspaceId: string
  24: export interface GitMutationWorkerPort {
  35: export interface GitMutationWorkspacePort {
  49: export interface GitMutationCoordinatorOptions {
  50:   readonly registry: GitMutationRegistryPort
  51:   readonly worker: GitMutationWorkerPort
  52:   readonly workspaces: GitMutationWorkspacePort
  54:     grant(request: GitMutationGrantRequest): GitMutationGrant
  60: /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
  ... 17 more match(es) omitted in this file
  138:       await workspaces.settleProject(projectId)
  161:     const targets = project.workspaces.filter(
  162:       (workspace) => workspace.missing && workspace.prunableReason !== undefined,
  164:     if (targets.length === 0) throw new Error('Git reports no prunable worktrees')
  166:       (workspace) => workspace.id === registry.active.workspaceId,
  191:       await this.options.workspaces.stopWatch()
  192:       await this.options.workspaces.replaceWatch(registry.active)
  213:         ?.workspaces.filter((workspace) => !workspace.missing)
  214:         .map((workspace) => workspace.root) ?? []
  241:       return await this.options.workspaces.refresh(projectId)
  243:       this.report(`[git] workspace refresh after ${operation} failed`, error)
  244:       this.options.workspaces.scheduleRefresh(projectId)

main/git/git-status.ts (22 match(es)):
  8:   type GitChanges,
  12: import { gitError, shortRef, type GitCommandContext } from './git-command-context'
  24:   type GitFileStats,
  29: export class GitStatusCapability {
  30:   constructor(private readonly context: GitCommandContext) {}
  32:   async workspaceActivity(
  33:     workspaceRoot: HostPath,
  36:     this.context.assertHost(workspaceRoot)
  38:       isNestedHostPath(candidate, workspaceRoot),
  41:       ? (await this.context.project(workspaceRoot))?.repositoryPrefix
  45:       workspaceRoot,
  51:       workspaceRoot,
  76:   ): Promise<GitChanges> {
  78:     if (!context) return emptyChanges('not-git', 'Not a Git repository')
  167:     let branchStats: GitFileStats = new Map()
  225:     if (names.length > 512) throw new Error('Too many Git ignore entries')
  239:       throw new Error('Invalid Git ignore entry name')
  243:       throw new Error('Git ignore directory escapes the active project')
  265:     if (paths.length > 512) throw new Error('Too many Git ignore paths')
  268:       paths.some((path) => !validGitPath(path))
  270:       throw new Error('Invalid Git ignore path')
  309: function validGitPath(path: string): boolean {

[omitted 5717 match(es) in 416 file(s); see original output for full results]
```

</details>


---

<sub>14s</sub>

### Copilot

The repository has no existing README. I’ve confirmed it is a private Electron/React desktop workbench with native terminal support; I’ll now document its supported workflows, prerequisites, commands, packaging, and contribution checks from the source configuration.

---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e07c127/hvir/src/main/index.ts.**

/private/var/tmp/ws/6e07c127/hvir/src/main/index.ts (lines 1-240)

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

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e07c127/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/6e07c127/hvir/src/renderer/src/App.tsx (lines 1-260)

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

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e07c127/hvir/.githooks/pre-push.**

/private/var/tmp/ws/6e07c127/hvir/.githooks/pre-push (lines 1-160)

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

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e07c127/hvir/LICENSE.**

/private/var/tmp/ws/6e07c127/hvir/LICENSE (lines 1-80)

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

<sub>16s</sub>

### `bash`

**Inspect UI files and development configuration**

$ find src/renderer/src -maxdepth 2 -type f | sort | sed -n '1,180p'; printf '\n--- toolchain versions ---\n'; for f in .nvmrc .node-version .tool-versions; do [ -f "$f" ] && { echo "[$f]"; cat "$f"; }; done; printf '\n--- gitignore ---\n'; sed -n '1,180p' .gitignore

<details>
<summary>199 lines</summary>

```
src/renderer/src/App.tsx
src/renderer/src/context-menu/viewport-context-menu.ts
src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
src/renderer/src/dashboards/use-web-pane-workspace.ts
src/renderer/src/dashboards/web-pane-diagnostics.ts
src/renderer/src/dashboards/web-pane-surface.ts
src/renderer/src/dashboards/web-pane-url.ts
src/renderer/src/dashboards/web-pane-workspace-policy.ts
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/dashboards/WebPaneStack.tsx
src/renderer/src/development/development-performance-fixture.tsx
src/renderer/src/development/development-performance-pump.tsx
src/renderer/src/development/development-renderer-instrumentation.tsx
src/renderer/src/development/performance-measure-budget.ts
src/renderer/src/diagnostics/DiagnosticReportDialog.tsx
src/renderer/src/diagnostics/owned-capture-masks.ts
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
src/renderer/src/document-review/DocumentReviewControls.tsx
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx
src/renderer/src/document-review/index.ts
src/renderer/src/document-review/use-document-review-delivery.ts
src/renderer/src/document-review/use-document-review-interaction.ts
src/renderer/src/document-review/use-document-review-workspace.ts
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/git/commit-detail-client.ts
src/renderer/src/git/commit-file-tree.ts
src/renderer/src/git/commit-message.ts
src/renderer/src/git/git-capability.ts
src/renderer/src/git/git-graph-lane-metrics.ts
src/renderer/src/git/git-graph-layout.ts
src/renderer/src/git/git-rail-model.ts
src/renderer/src/git/git-sync-coordinator.ts
src/renderer/src/git/git-sync-status.ts
src/renderer/src/git/GitBranchControls.tsx
src/renderer/src/git/GitChangesView.tsx
src/renderer/src/git/GitGraphLanes.tsx
src/renderer/src/git/GitGraphView.tsx
src/renderer/src/git/GitHistoryView.tsx
src/renderer/src/git/GitPanel.tsx
src/renderer/src/git/use-git-commit-details.ts
src/renderer/src/git/use-git-rail-controller.ts
src/renderer/src/git/use-git-workspace.ts
src/renderer/src/git/virtual-range.ts
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/health/use-diagnostic-evidence.ts
src/renderer/src/health/use-workbench-health.ts
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/hvir.d.ts
src/renderer/src/layout/PaneResizer.tsx
src/renderer/src/layout/split-layout-policy.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/main.tsx
src/renderer/src/path-copy/path-copy.ts
src/renderer/src/path-copy/PathCopyMenu.tsx
src/renderer/src/path-copy/use-path-copy-menu.ts
src/renderer/src/scrollbars/scrollbar-presentation.ts
src/renderer/src/sessions/sessions-overview-model.ts
src/renderer/src/sessions/sessions-projection-coordinator.ts
src/renderer/src/sessions/sessions-renderer-observation.ts
src/renderer/src/sessions/sessions-terminal-detail-controller.ts
src/renderer/src/sessions/sessions-terminal-overlay.ts
src/renderer/src/sessions/sessions-terminal-surface.ts
src/renderer/src/sessions/SessionsApplicationDestination.tsx
src/renderer/src/sessions/SessionsCollectionToolbar.tsx
src/renderer/src/sessions/SessionsOverview.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
src/renderer/src/sessions/SessionsOverviewNotice.tsx
src/renderer/src/sessions/SessionsTerminalDetail.tsx
src/renderer/src/sessions/use-sessions-foreground.ts
src/renderer/src/sessions/use-sessions-terminal-detail.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/harness-argument-editor.ts
src/renderer/src/settings/harness-profile-draft.ts
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/settings/harness-profile-request-policy.ts
src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
src/renderer/src/settings/HarnessProfileCommandFields.tsx
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/HarnessProfileEditor.tsx
src/renderer/src/settings/HarnessProfileOverlays.tsx
src/renderer/src/settings/HarnessProfilesSettings.tsx
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/settings-draft.ts
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/settings-navigation.ts
src/renderer/src/settings/settings.ts
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/settings/SettingsSection.tsx
src/renderer/src/settings/SettingsSectionNavigation.tsx
src/renderer/src/settings/TerminalThemeGallery.tsx
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

--- toolchain versions ---

--- gitignore ---
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>28s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a lightweight, view-first desktop workbench for agentic development. It\n+keeps project files, Git activity, terminals, agent harnesses, and supporting\n+web views in one Electron application.\n+\n+## Features\n+\n+- Open local projects or connect to projects over SSH.\n+- Browse, edit, preview, and compare files, including Markdown and rendered\n+  diagrams.\n+- Run persistent terminal sessions with configurable terminal themes and split\n+  layouts.\n+- Configure and launch agent harness profiles, with session recovery and a\n+  dedicated sessions view.\n+- Inspect Git status, history, branches, diffs, worktrees, and synchronization\n+  status from the workspace.\n+- Review documents inline and deliver review feedback.\n+- Open project-scoped web panes and capture diagnostic reports when the\n+  workbench needs investigation.\n+\n+## Requirements\n+\n+- Node.js 24 or newer\n+- npm\n+- Git, for the Git workspace features\n+- A supported desktop platform: macOS or Linux\n+- Native build tools required by `node-gyp`, because hvir rebuilds `node-pty`\n+  and its local native module during installation\n+\n+On Linux, Electron also needs its usual desktop runtime libraries. The produced\n+Debian package declares its required runtime dependencies.\n+\n+## Getting started\n+\n+```bash\n+git clone https://github.com/jarmak-personal/hvir.git\n+cd hvir\n+npm install\n+npm run dev\n+```\n+\n+`npm install` downloads Electron and rebuilds the native terminal dependencies\n+for Electron's ABI. When hvir opens, choose a project folder, or supply one\n+when launching the app from a built build.\n+\n+Remote projects use SSH. hvir prompts for connection details as needed and\n+records trusted host information in its application data; use standard SSH\n+configuration and credentials for host access.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start hvir in development mode. |\n+| `npm run build` | Type-check and build the Electron application. |\n+| `npm run preview` | Preview the built application. |\n+| `npm test` | Run the Vitest test suite. |\n+| `npm run lint` | Lint the repository. |\n+| `npm run typecheck` | Type-check the main and renderer processes. |\n+| `npm run verify` | Run architecture checks, linting, type-checking, and tests. |\n+| `npm run smoke` | Build and run the cross-platform Electron smoke scenarios. |\n+| `npm run format:check` | Check Prettier formatting. |\n+\n+Install the repository's pre-push hook with:\n+\n+```bash\n+npm run hooks:install\n+```\n+\n+The hook runs TypeScript checks and platform-appropriate Electron smoke tests.\n+On headless Linux, it requires `xvfb-run` unless a display is already available.\n+\n+## Packaging\n+\n+```bash\n+# macOS Apple Silicon package\n+npm run pack:mac:arm64\n+\n+# Linux Debian packages\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+Build artifacts are written to `dist/`. The macOS packaging commands are\n+intended to run on macOS; the Linux commands produce `.deb` packages.\n+\n+## Architecture\n+\n+hvir uses Electron with a TypeScript main process, React renderer, Electron\n+Vite build pipeline, and native terminal integration through `node-pty`.\n+The source is organized as follows:\n+\n+- `src/main/` contains application runtime, project/SSH access, Git, terminal,\n+  diagnostics, and IPC services.\n+- `src/preload/` exposes the constrained renderer API.\n+- `src/renderer/` contains the React workbench UI.\n+- `src/shared/` contains cross-process contracts and domain types.\n+- `src/workers/` contains utility-process workers.\n+- `test/` contains unit and integration-oriented tests.\n+\n+## License\n+\n+This project is licensed under the [MIT License](LICENSE).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/6e07c127/hvir/README.md
```


---

<sub>31s</sub>

### `bash`

**Validate README formatting and diff**

$ npm exec -- prettier --check README.md && git --no-pager diff --check && git --no-pager diff -- README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 3 completed with exit code 0>
```


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/6e07c127/hvir/README.md.**

/private/var/tmp/ws/6e07c127/hvir/README.md (lines 1--1)

<details>
<summary>80 lines</summary>

````
# hvir

hvir is a lightweight, view-first desktop workbench for agentic development. It
keeps project files, Git activity, terminals, agent harnesses, and supporting
web views in one Electron application.

## Features

- Open local projects or connect to projects over SSH.
- Browse, edit, preview, and compare files, including Markdown and rendered
  diagrams.
- Run persistent terminal sessions with configurable terminal themes and split
  layouts.
- Configure and launch agent harness profiles, with session recovery and a
  dedicated sessions view.
- Inspect Git status, history, branches, diffs, worktrees, and synchronization
  status from the workspace.
- Review documents inline and deliver review feedback.
- Open project-scoped web panes and capture diagnostic reports when the
  workbench needs investigation.

## Requirements

- Node.js 24 or newer
- npm
- Git, for the Git workspace features
- A supported desktop platform: macOS or Linux
- Native build tools required by `node-gyp`, because hvir rebuilds `node-pty`
  and its local native module during installation

On Linux, Electron also needs its usual desktop runtime libraries. The produced
Debian package declares its required runtime dependencies.

## Getting started

```bash
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm install
npm run dev
```

`npm install` downloads Electron and rebuilds the native terminal dependencies
for Electron's ABI. When hvir opens, choose a project folder, or supply one
when launching the app from a built build.

Remote projects use SSH. hvir prompts for connection details as needed and
records trusted host information in its application data; use standard SSH
configuration and credentials for host access.

## Development

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start hvir in development mode. |
| `npm run build` | Type-check and build the Electron application. |
| `npm run preview` | Preview the built application. |
| `npm test` | Run the Vitest test suite. |
| `npm run lint` | Lint the repository. |
| `npm run typecheck` | Type-check the main and renderer processes. |
| `npm run verify` | Run architecture checks, linting, type-checking, and tests. |
| `npm run smoke` | Build and run the cross-platform Electron smoke scenarios. |
| `npm run format:check` | Check Prettier formatting. |

Install the repository's pre-push hook with:

```bash
npm run hooks:install
```

The hook runs TypeScript checks and platform-appropriate Electron smoke tests.
On headless Linux, it requires `xvfb-run` unless a display is already available.

## Packaging

```bash
# macOS Apple Silicon package
npm run pack:mac:arm64

# Linux Debian packages
npm run pack:linux:x64
npm run pack:linux:arm64
```

Build artifacts are written to `dist/`. The macOS packaging commands are
intended to run on macOS; the Linux commands produce `.deb` packages.

## Architecture

hvir uses Electron with a TypeScript main process, React renderer, Electron
Vite build pipeline, and native terminal integration through `node-pty`.
The source is organized as follows:

- `src/main/` contains application runtime, project/SSH access, Git, terminal,
  diagnostics, and IPC services.
- `src/preload/` exposes the constrained renderer API.
- `src/renderer/` contains the React workbench UI.
- `src/shared/` contains cross-process contracts and domain types.
- `src/workers/` contains utility-process workers.
- `test/` contains unit and integration-oriented tests.

## License

This project is licensed under the [MIT License](LICENSE).
````

</details>


---

<sub>32s</sub>

### Copilot

Created a complete `README.md` documenting hvir’s purpose, feature set, system requirements, setup, development commands, packaging workflows, architecture, and MIT license.

Validated the new document with Prettier and `git diff --check`.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
