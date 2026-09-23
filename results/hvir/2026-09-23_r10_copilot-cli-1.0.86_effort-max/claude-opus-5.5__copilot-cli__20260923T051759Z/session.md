# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `6a2dbe88-59db-4744-91dc-cde470ec84b8`  
> - **Started:** 9/23/2026, 1:18:13 AM  
> - **Duration:** 22m 54s  
> - **Exported:** 9/23/2026, 1:41:07 AM  

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

I'll start by exploring the repository to understand the project.

---

<sub>3s</sub>

### `bash`

**Inspect repo history, status, files**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && git --no-pager log --oneline -20 2>/dev/null; echo "---STATUS---"; git --no-pager status 2>/dev/null | head -20; echo "---FILES---"; git ls-files 2>/dev/null | head -200; echo "---ALL---"; ls -la

<details>
<summary>236 lines</summary>

```
b60c01b Initial commit
---STATUS---
On branch main
nothing to commit, working tree clean
---FILES---
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
scripts/project-management/github-pagination.ts
scripts/project-management/github-pull-requests.ts
scripts/project-management/github-session-tokens.ts
scripts/project-management/github-token-migration.ts
scripts/project-management/issue-context-cli.ts
scripts/project-management/issue-context.ts
scripts/project-management/issue-delivery.ts
scripts/project-management/issue-planning.ts
scripts/project-management/issue-start-cli.ts
scripts/project-management/issue-start.ts
scripts/project-management/kind-cli.ts
scripts/project-management/kind-policy.ts
scripts/project-management/kind-reconciler.ts
scripts/project-management/legacy-token-evidence.ts
scripts/project-management/migrate-project-tokens.ts
scripts/project-management/native-issue-worktrees.ts
scripts/project-management/package.json
scripts/project-management/planning-cli.ts
scripts/project-management/planning-fields.ts
scripts/project-management/planning-record.ts
scripts/project-management/project-config.ts
scripts/project-management/project-token-fields.ts
scripts/project-management/pull-request-cli.ts
scripts/project-management/pull-request-planning.ts
scripts/project-management/pull-request-relationships.ts
scripts/project-management/read-contributor-status.ts
scripts/project-management/read-issue-context.ts
scripts/project-management/read-planning-record.ts
scripts/project-management/session-token-allocation.ts
scripts/project-management/session-token-capture.ts
scripts/project-management/session-token-receipts.ts
scripts/project-management/start-issue.ts
scripts/project-management/sync-kind.ts
scripts/project-management/sync-pull-request-planning.ts
scripts/project-management/token-migration-plan.ts
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
---ALL---
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 23 01:18 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:17 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:18 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:17 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 23 01:17 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 23 01:17 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 23 01:17 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 23 01:17 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 23 01:17 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 23 01:17 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 23 01:17 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 23 01:17 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 23 01:17 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 23 01:17 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 23 01:18 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 23 01:17 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 23 01:17 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 23 01:17 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 23 01:17 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 23 01:17 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 23 01:17 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 23 01:17 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 23 01:17 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 23 01:17 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 23 01:17 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 23 01:17 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 23 01:17 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 23 01:17 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### Copilot

This is a sizable Electron project. Let me read the key configuration and metadata files.

---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/package.json.**

/private/var/tmp/ws/ffb55c2b/hvir/package.json

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/LICENSE.**

/private/var/tmp/ws/ffb55c2b/hvir/LICENSE

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/ffb55c2b/hvir/THIRD_PARTY_NOTICES.md

<details>
<summary>102 lines</summary>

```
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

MIT License

Copyright (c) 2025 Coder

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

## iTerm2-Color-Schemes theme collection

Source: <https://github.com/mbadolato/iTerm2-Color-Schemes>

Hvir includes a generated, color-only terminal theme catalog from upstream tag
`release-20260216-151611-fc73ce3` at commit
`fc73ce39746540b6d5ec6b91e304785431401d85`. Ghostty core commit
`332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28` pins the corresponding theme archive.
Hvir's runtime consumes only the generated palette data and does not parse or execute the
upstream theme files.

MIT License

Copyright (c) 2011 to Present Mark Badolato

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

This license covers the iTerm-Color-Schemes repository collection of themes.

The copyright/license for each individual theme belongs to the author of that theme.

## Ghostty terminal core

Source: <https://github.com/ghostty-org/ghostty>

ghostty-web includes a WebAssembly build of Ghostty's terminal core, which hvir
redistributes as part of its terminal implementation.

MIT License

Copyright (c) 2024 Mitchell Hashimoto, Ghostty contributors

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

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/electron-builder.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/electron-builder.yml

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

<sub>8s</sub>

### `bash`

**List remaining tracked non-test files**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && git ls-files | wc -l && echo "---" && git ls-files | sed -n '200,2000p' | grep -v '^test/' | head -400

<details>
<summary>403 lines</summary>

```
1256
---
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
src/main/harness/providers/claude-code.ts
src/main/harness/providers/codex.ts
src/main/harness/providers/cursor.ts
src/main/harness/providers/gemini.ts
src/main/harness/providers/github-copilot.ts
src/main/harness/providers/pi.ts
src/main/harness/providers/shell.ts
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
src/main/ipc/features/app.ts
src/main/ipc/features/clipboard.ts
src/main/ipc/features/diagnostic-report.ts
src/main/ipc/features/document-review.ts
src/main/ipc/features/filesystem.ts
src/main/ipc/features/git.ts
src/main/ipc/features/harness.ts
src/main/ipc/features/image-paste.ts
src/main/ipc/features/preview.ts
src/main/ipc/features/project.ts
src/main/ipc/features/sessions.ts
src/main/ipc/features/terminal-file-paste.ts
src/main/ipc/features/terminal.ts
src/main/ipc/features/web-pane.ts
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
src/main/smoke/terminal-keyboard-negotiation.ts
src/main/smoke/terminal-lifecycle-scenario.ts
src/main/smoke/terminal-ligature-presentation.ts
src/main/smoke/terminal-middle-click-close.ts
src/main/smoke/terminal-move.ts
src/main/smoke/terminal-palette-presentation.ts
src/main/smoke/terminal-presentation-scenarios.ts
src/main/smoke/terminal-presentation.ts
src/main/smoke/terminal-project-return.ts
src/main/smoke/terminal-renderer-lifecycle.ts
src/main/smoke/terminal-scenario-ready.ts
src/main/smoke/terminal-search.ts
src/main/smoke/terminal-semantic-navigation.ts
src/main/smoke/terminal-session-store.ts
src/main/smoke/terminal-split.ts
src/main/smoke/terminal-synchronized-output.ts
src/main/smoke/terminal-theme-gallery-presentation.ts
src/main/smoke/viewer-content.ts
src/main/smoke/viewer-find.ts
src/main/smoke/viewer-fixtures.ts
src/main/smoke/viewer-live-reload.ts
src/main/smoke/viewer-position-operation.ts
src/main/smoke/viewer-position.ts
src/main/smoke/web-pane-boundary.ts
src/main/smoke/web-pane.ts
src/main/smoke/workbench-chrome.ts
src/main/smoke/workbench-health-scenario.ts
src/main/smoke/workbench-health.ts
src/main/smoke/workbench-layout.ts
src/main/smoke/workspace-close.ts
src/main/smoke/workspace-remote.ts
src/main/terminal/electron-clipboard-file-paste.ts
src/main/terminal/renderer-pty-lifecycle.ts
src/main/terminal/session-registry.ts
src/main/terminal/terminal-identity-publication.ts
src/main/terminal/terminal-launch-admission.ts
src/main/terminal/terminal-start-response.ts
src/main/terminal/terminal-workspace-move-coordinator.ts
src/main/viewer/document-read-authority.ts
src/main/web-pane/loopback-http-proxy.ts
src/main/web-pane/web-pane-route-registry.ts
src/main/window/electron-renderer-document-lifecycle.ts
src/main/window/electron-renderer-recovery.ts
src/main/window/electron-window-manager.ts
src/main/window/renderer-recovery-monitor.ts
src/main/window/window-health-tracker.ts
src/main/window/window-policy.ts
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
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `bash`

**List remaining files and test structure**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && git ls-files | grep -v '^test/' | sed -n '600,2000p'; echo "---TEST DIR SUMMARY---"; git ls-files test | awk -F/ '{print $1"/"$2}' | sort | uniq -c | sort -rn | head -40; echo "---NON-TS in repo---"; git ls-files | grep -Ev '\.(ts|tsx|mts|mjs|css|png|js)$' | grep -v '^test/'

<details>
<summary>354 lines</summary>

```
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
src/renderer/src/terminal/use-terminal-launch-menu-layout.ts
src/renderer/src/terminal/use-terminal-pane-controller.ts
src/renderer/src/terminal/use-terminal-persistence.ts
src/renderer/src/terminal/use-terminal-profiles.ts
src/renderer/src/terminal/use-terminal-recovery.ts
src/renderer/src/terminal/use-terminal-session-commands.ts
src/renderer/src/terminal/use-terminal-workspace-move.ts
src/renderer/src/terminal/use-terminal-workspace-runtime.ts
src/renderer/src/terminal/use-terminal-workspace-transfer.ts
src/renderer/src/theme-model.ts
src/renderer/src/theme.ts
src/renderer/src/themes.css
src/renderer/src/tree/DirectoryTree.tsx
src/renderer/src/tree/FileCreateOverlays.tsx
src/renderer/src/tree/FileDeletionDialog.tsx
src/renderer/src/tree/FileExternalMoveDialog.tsx
src/renderer/src/tree/FileOrganizationDialog.tsx
src/renderer/src/tree/FileTree.tsx
src/renderer/src/tree/FilenameSearch.tsx
src/renderer/src/tree/directory-entry-sort.ts
src/renderer/src/tree/file-action-destination.ts
src/renderer/src/tree/file-action-menu.ts
src/renderer/src/tree/file-manager-reveal.ts
src/renderer/src/tree/file-name.ts
src/renderer/src/tree/file-operation-feedback.ts
src/renderer/src/tree/git-ignore-refresh.ts
src/renderer/src/tree/git-status-decoration.ts
src/renderer/src/tree/project-entry-drag.ts
src/renderer/src/tree/project-file-entry-name.ts
src/renderer/src/tree/project-file-owner-key.ts
src/renderer/src/tree/use-external-file-actions.ts
src/renderer/src/tree/use-external-file-copy.ts
src/renderer/src/tree/use-external-file-move.ts
src/renderer/src/tree/use-file-create-actions.ts
src/renderer/src/tree/use-file-deletion-actions.ts
src/renderer/src/tree/use-file-manager-reveal.ts
src/renderer/src/tree/use-file-organization-actions.ts
src/renderer/src/tree/use-path-copy-action.ts
src/renderer/src/tree/use-project-file-operation.ts
src/renderer/src/viewer/DiffView.tsx
src/renderer/src/viewer/FileViewer.tsx
src/renderer/src/viewer/FindControl.tsx
src/renderer/src/viewer/GoToLineControl.tsx
src/renderer/src/viewer/LargeFileView.tsx
src/renderer/src/viewer/MarkdownFragment.tsx
src/renderer/src/viewer/RenderedView.tsx
src/renderer/src/viewer/RepositoryImageView.tsx
src/renderer/src/viewer/SourceView.tsx
src/renderer/src/viewer/TabStrip.tsx
src/renderer/src/viewer/code-scroll-anchor.ts
src/renderer/src/viewer/codemirror-find-target.ts
src/renderer/src/viewer/csv-parser.ts
src/renderer/src/viewer/csv-protocol.ts
src/renderer/src/viewer/csv.worker.ts
src/renderer/src/viewer/diff-policy.ts
src/renderer/src/viewer/dom-find-target.ts
src/renderer/src/viewer/external-document-context.ts
src/renderer/src/viewer/external-document-tabs.ts
src/renderer/src/viewer/highlight-protocol.ts
src/renderer/src/viewer/highlight-request.ts
src/renderer/src/viewer/highlight-worker.ts
src/renderer/src/viewer/highlight.worker.ts
src/renderer/src/viewer/json-protocol.ts
src/renderer/src/viewer/json.worker.ts
src/renderer/src/viewer/markdown-client.ts
src/renderer/src/viewer/markdown-extensions.ts
src/renderer/src/viewer/markdown-renderer.ts
src/renderer/src/viewer/markdown-repository-images.ts
src/renderer/src/viewer/markdown.worker.ts
src/renderer/src/viewer/render-protocol.ts
src/renderer/src/viewer/rendered-link-handler.ts
src/renderer/src/viewer/rendered-position.ts
src/renderer/src/viewer/retained-viewer-workspace-cache.ts
src/renderer/src/viewer/shiki-grammar-registry.ts
src/renderer/src/viewer/shiki-language-catalog.ts
src/renderer/src/viewer/shiki-language-names.ts
src/renderer/src/viewer/source-blame-gutter.ts
src/renderer/src/viewer/source-coordinate.ts
src/renderer/src/viewer/source-highlighting.ts
src/renderer/src/viewer/structured-data.ts
src/renderer/src/viewer/tab-state.ts
src/renderer/src/viewer/use-diff-inputs.ts
src/renderer/src/viewer/use-source-blame.ts
src/renderer/src/viewer/use-viewer-path-lifecycle.ts
src/renderer/src/viewer/use-viewer-workspace.ts
src/renderer/src/viewer/viewer-byte-format.ts
src/renderer/src/viewer/viewer-command-targets.ts
src/renderer/src/viewer/viewer-document-refresh.ts
src/renderer/src/viewer/viewer-find.ts
src/renderer/src/viewer/viewer-path-rebind.ts
src/renderer/src/viewer/viewer-path-removal.ts
src/renderer/src/viewer/viewer-position.ts
src/renderer/src/viewer/viewer-read-policy.ts
src/renderer/src/viewer/viewer-workload-policy.ts
src/renderer/src/viewer/viewer-workspace-model.ts
src/renderer/src/viewer/viewer-workspace-persistence.ts
src/renderer/src/viewer/viewer-workspace-selectors.ts
src/renderer/src/viewer/viewer-workspace-state.ts
src/renderer/src/workbench/ConfirmationDialog.tsx
src/renderer/src/workbench/TerminalLayoutControls.tsx
src/renderer/src/workbench/active-terminal-focus.ts
src/renderer/src/workbench/middle-click-close.ts
src/renderer/src/workbench/modal-keyboard-model.ts
src/renderer/src/workbench/use-modal-keyboard.ts
src/renderer/src/workbench/use-renderer-ready.ts
src/renderer/src/workbench/use-terminal-path-activation.ts
src/renderer/src/workbench/use-workbench-commands.ts
src/renderer/src/workbench/use-workbench-layout.ts
src/renderer/src/workbench/use-workbench-overlays.ts
src/renderer/src/workbench/workbench-command-router.ts
src/renderer/src/workbench/workbench-layout-policy.ts
src/renderer/src/workbench/workbench-overlay-model.ts
src/renderer/src/workbench/workspace-pane-state.ts
src/renderer/src/workspaces/ConnectionStatus.tsx
src/renderer/src/workspaces/MissingWorkspaceNotice.tsx
src/renderer/src/workspaces/ProjectsBar.tsx
src/renderer/src/workspaces/SessionDialog.tsx
src/renderer/src/workspaces/SshPromptDialog.tsx
src/renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
src/renderer/src/workspaces/connection-status.ts
src/renderer/src/workspaces/initial-host-connection.ts
src/renderer/src/workspaces/project-folder-picker-client.ts
src/renderer/src/workspaces/project-session-events.ts
src/renderer/src/workspaces/project-session-model.ts
src/renderer/src/workspaces/project-session.ts
src/renderer/src/workspaces/project-state-delivery.ts
src/renderer/src/workspaces/project-watch-interests.ts
src/renderer/src/workspaces/workspace-attention.ts
src/renderer/src/workspaces/workspace-session-actions.ts
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
src/shared/ipc-contract.ts
src/shared/ipc.ts
src/shared/ipc/app.ts
src/shared/ipc/diagnostics.ts
src/shared/ipc/document-review.ts
src/shared/ipc/filesystem.ts
src/shared/ipc/git.ts
src/shared/ipc/harness.ts
src/shared/ipc/preview.ts
src/shared/ipc/project.ts
src/shared/ipc/sessions.ts
src/shared/ipc/terminal.ts
src/shared/ipc/web-pane.ts
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
stryker.config.json
tsconfig.base.json
tsconfig.json
tsconfig.node.json
tsconfig.web.json
vitest.config.ts
---TEST DIR SUMMARY---
  21 test/fixtures
   1 test/workspace-removal-flow.test.ts
   1 test/workspace-removal-coordinator.test.ts
   1 test/workspace-filter-polling.test.ts
   1 test/workspace-coordinator.test.ts
   1 test/workspace-attention.test.ts
   1 test/workspace-activity.test.ts
   1 test/worker-host.typecheck.ts
   1 test/worker-host-broker.test.ts
   1 test/workbench-runtime.test.ts
   1 test/workbench-overlays.test.ts
   1 test/workbench-layout.test.ts
   1 test/workbench-health.test.ts
   1 test/workbench-health-control.test.tsx
   1 test/workbench-commands.test.ts
   1 test/workbench-command-listener.test.tsx
   1 test/window-policy.test.ts
   1 test/window-health-tracker.test.ts
   1 test/web-pane-workspace.test.ts
   1 test/web-pane-surface.test.tsx
   1 test/web-pane-smoke-boundary.test.ts
   1 test/web-pane-route.test.ts
   1 test/web-pane-route-registry.test.ts
   1 test/web-pane-diagnostics.test.ts
   1 test/viewport-context-menu.test.ts
   1 test/viewer-workspace-model.test.ts
   1 test/viewer-workload-policy.test.ts
   1 test/viewer-types.test.ts
   1 test/viewer-tab-close-confirmation.test.tsx
   1 test/viewer-position.test.ts
   1 test/viewer-position-operation.test.ts
   1 test/viewer-ownership.test.ts
   1 test/viewer-find.test.ts
   1 test/viewer-command-targets.test.ts
   1 test/verified-project-entry-metadata.test.ts
   1 test/verified-project-copy.test.ts
   1 test/use-viewer-workspace.test.tsx
   1 test/use-terminal-workspace-runtime.test.tsx
   1 test/use-terminal-attention.test.tsx
   1 test/use-file-organization-actions.test.tsx
---NON-TS in repo---
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
build/icon-macos.svg
build/linux/after-install.sh
build/linux/after-remove.sh
build/linux/hvir.apparmor
build/native/hvir-command
build/pkg-scripts/postinstall
build/pkg-scripts/preinstall
electron-builder.ssh-acceptance.yml
electron-builder.yml
package-lock.json
package.json
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
scripts/architecture-hotspots.json
scripts/check-seams.sh
scripts/create-smoke-repository.sh
scripts/install-git-hooks.sh
scripts/native-installer.template.sh
scripts/phase8-gauntlet.sh
scripts/project-management/package.json
scripts/record-macos-ssh-identity.sh
scripts/run-linux-package-smoke.sh
scripts/run-macos-package-smoke.sh
scripts/run-macos-ssh-acceptance.sh
scripts/run-smoke.sh
src/renderer/index.html
stryker.config.json
tsconfig.base.json
tsconfig.json
tsconfig.node.json
tsconfig.web.json
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>18s</sub>

### Copilot

No `docs/` directory is tracked. I'll check the CI, release workflows, installer, and helper scripts to see how the project is built and distributed.

---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/ci.yml

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

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml

```
File too large to read at once (20.8 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh

<details>
<summary>619 lines</summary>

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
  local glibc_output glibc_version
  stage='checking the Linux runtime ABI'
  glibc_output=$(/usr/bin/getconf GNU_LIBC_VERSION 2>/dev/null) || {
    echo "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer." >&2
    exit 69
  }
  glibc_version=${glibc_output#glibc }
  if ! version_at_least "$glibc_version" "$HVIR_LINUX_MINIMUM_GLIBC"; then
    echo \
      "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer; found ${glibc_version:-unknown}." \
      >&2
    exit 69
  fi

  stage='checking the Linux Chromium sandbox capability'
  if /usr/bin/unshare --user true >/dev/null 2>&1; then
    return
  fi
  if linux_requires_apparmor_profile; then
    require_absolute_tool /usr/sbin/apparmor_parser
    require_absolute_tool /usr/sbin/apparmor_status
    if ! /usr/sbin/apparmor_status --enabled >/dev/null 2>&1; then
      echo \
        'This host restricts unprivileged user namespaces, but AppArmor enforcement is unavailable.' \
        >&2
      exit 69
    fi
  fi
  # Otherwise the root-owned package supplies Chromium's setuid sandbox helper.
}

create_private_temporary_directory() {
  local temporary_parent
  temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
  temporary_directory=$(umask 077 && /usr/bin/mktemp -d \
    "$temporary_parent/hvir-installer.XXXXXX")
}

run_with_failure_diagnostics() {
  local log=$1 status
  shift
  "$@" >"$log" 2>&1 || {
    status=$?
    /bin/cat -- "$log" >&2
    return "$status"
  }
}

download_artifact() {
  local destination=$1
  stage="downloading $artifact_name"
  if [[ -n "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
    /bin/cp -- "$HVIR_ACCEPTANCE_ASSET_DIRECTORY/$artifact_name" "$destination"
  else
    /usr/bin/curl \
      --fail \
      --silent \
      --show-error \
      --location \
      --proto '=https' \
      --tlsv1.2 \
      --output "$destination" \
      "$HVIR_RELEASE_BASE_URL/$artifact_name"
  fi
}

verify_digest() {
  local artifact=$1 digest_output actual_digest
  stage="verifying the SHA-256 digest for $artifact_name"
  if [[ "$platform" == 'linux' ]]; then
    digest_output=$(/usr/bin/sha256sum "$artifact")
  else
    digest_output=$(/usr/bin/shasum -a 256 "$artifact")
  fi
  actual_digest=${digest_output%%[[:space:]]*}
  if [[ "$actual_digest" != "$artifact_sha256" ]]; then
    echo "Digest mismatch for $artifact_name." >&2
    echo "Expected: $artifact_sha256" >&2
    echo "Actual:   $actual_digest" >&2
    exit 1
  fi
}

verify_linux_package_capabilities() {
  local artifact=$1 dependency_log package_root profile profile_log
  dependency_log="$temporary_directory/linux-package-dependencies.log"
  stage='checking Linux package dependencies'
  if ! run_with_failure_diagnostics \
    "$dependency_log" \
    /usr/bin/apt-get \
    --simulate \
    --no-install-recommends \
    install \
    "$artifact"; then
    echo \
      "The hvir package dependencies are not available from this host's configured apt repositories." \
      >&2
    exit 69
  fi

  if ! linux_requires_apparmor_profile; then
    return
  fi
  package_root="$temporary_directory/linux-package"
  profile="$package_root/opt/hvir/resources/apparmor-profile"
  profile_log="$temporary_directory/apparmor-profile.log"
  stage='checking the required AppArmor integration'
  /usr/bin/dpkg-deb --extract "$artifact" "$package_root"
  if [[ ! -f "$profile" ]]; then
    echo 'The verified hvir package does not contain its required AppArmor profile.' >&2
    exit 1
  fi
  if ! run_with_failure_diagnostics \
    "$profile_log" \
    /usr/sbin/apparmor_parser \
    --skip-kernel-load \
    --debug \
    "$profile"; then
    echo "This host cannot parse hvir's required AppArmor user-namespace profile." >&2
    exit 69
  fi
}

verify_macos_package() {
  local artifact=$1 signature_log notarization_log gatekeeper_log
  if [[ "$HVIR_ACCEPTANCE_UNSIGNED_MACOS" == '1' ]]; then
    return
  fi
  signature_log="$temporary_directory/macos-package-signature.log"
  stage='validating the macOS installer signature'
  run_with_failure_diagnostics \
    "$signature_log" \
    /usr/sbin/pkgutil --check-signature "$artifact"
  if ! /usr/bin/grep -Eq \
    "Developer ID Installer: .+ \\($HVIR_MACOS_TEAM_ID\\)" \
    "$signature_log"; then
    /bin/cat -- "$signature_log" >&2
    echo "The package is not signed by the expected Apple team $HVIR_MACOS_TEAM_ID." >&2
    exit 1
  fi
  if ! /usr/bin/grep -Fq 'Signed with a trusted timestamp' "$signature_log"; then
    /bin/cat -- "$signature_log" >&2
    echo 'The macOS installer signature has no trusted timestamp.' >&2
    exit 1
  fi
  notarization_log="$temporary_directory/macos-package-notarization.log"
  stage='validating the stapled macOS notarization ticket'
  run_with_failure_diagnostics \
    "$notarization_log" \
    /usr/bin/xcrun stapler validate "$artifact"
  gatekeeper_log="$temporary_directory/macos-package-gatekeeper.log"
  stage='assessing the macOS package with Gatekeeper'
  run_with_failure_diagnostics \
    "$gatekeeper_log" \
    /usr/sbin/spctl --assess --type install --verbose=2 "$artifact"
  echo 'Apple signature, notarization, and Gatekeeper checks passed.'
}

native_install_present() {
  if [[ "$platform" == 'linux' ]]; then
    /usr/bin/dpkg-query -W -f='${Status}' hvir 2>/dev/null |
      /usr/bin/grep -Fq 'install ok installed'
  else
    /usr/sbin/pkgutil --pkg-info dev.hvir.app >/dev/null 2>&1 &&
      [[ -f "$native_command" ]] &&
      /usr/bin/grep -Fq 'hvir-native-package-command-v1' "$native_command"
  fi
}

resolve_link_target() {
  local link=$1 target parent
  target=$(/usr/bin/readlink "$link")
  case "$target" in
  /*) ;;
  *) target=$(/usr/bin/dirname "$link")/$target ;;
  esac
  parent=$(cd "$(/usr/bin/dirname "$target")" && pwd -P)
  printf '%s/%s\n' "$parent" "$(/usr/bin/basename "$target")"
}

list_contains_exact_line() {
  local expected=$1 line
  while IFS= read -r line; do
    [[ "$line" == "$expected" ]] && return 0
  done
  return 1
}

legacy_cache_root() {
  if [[ "$platform" == 'macos' ]]; then
    printf '%s/Library/Caches/hvir/native\n' "$HOME"
  elif [[ -n "${XDG_CACHE_HOME:-}" && "$XDG_CACHE_HOME" == /* ]]; then
    printf '%s/hvir/native\n' "${XDG_CACHE_HOME%/}"
  else
    printf '%s/.cache/hvir/native\n' "$HOME"
  fi
}

discover_legacy_launcher() {
  local found npm_prefix npm_root expected_launcher expected_target actual_target listing
  found=$(command -v hvir 2>/dev/null || true)
  [[ -n "$found" ]] || return 0
  if native_install_present && [[ "$found" == "$native_command" ]]; then
    return
  fi

  legacy_npm=$(command -v npm 2>/dev/null || true)
  if [[ "$legacy_npm" != /* || ! -x "$legacy_npm" ]]; then
    echo "An existing hvir command is not package-owned and cannot be verified: $found" >&2
    exit 1
  fi
  npm_prefix=$("$legacy_npm" prefix -g)
  npm_root=$("$legacy_npm" root -g)
  [[ "$npm_prefix" == /* && "$npm_root" == /* ]] || {
    echo 'The legacy npm installation reported a non-absolute global prefix.' >&2
    exit 1
  }
  expected_launcher=${npm_prefix%/}/bin/hvir
  expected_target=${npm_root%/}/hvir-workbench/bin/hvir.mjs
  if [[ "$found" != "$expected_launcher" || ! -L "$found" ||
    ! -f "$expected_target" ]]; then
    echo "An existing hvir command has ambiguous ownership and was not changed: $found" >&2
    exit 1
  fi
  actual_target=$(resolve_link_target "$found")
  expected_target=$(cd "$(/usr/bin/dirname "$expected_target")" && pwd -P)/$(
    /usr/bin/basename "$expected_target"
  )
  if [[ "$actual_target" != "$expected_target" ]]; then
    echo "The existing hvir launcher does not target hvir-workbench: $found" >&2
    exit 1
  fi
  listing=$("$legacy_npm" ls -g --depth=0 --parseable hvir-workbench)
  if ! list_contains_exact_line "${npm_root%/}/hvir-workbench" <<<"$listing"; then
    echo 'npm did not confirm ownership of the existing hvir-workbench launcher.' >&2
    exit 1
  fi
  if [[ "$found" == "$native_command" ]]; then
    echo \
      "The verified legacy launcher occupies $native_command; move hvir-workbench to a user-owned npm prefix before native migration." \
      >&2
    exit 1
  fi
  legacy_launcher=$found
  legacy_cache=$(legacy_cache_root)
}

verify_native_command() {
  stage='verifying the installed native command'
  [[ -x "$native_command" ]] || {
    echo "The native package did not install $native_command." >&2
    exit 1
  }
  /usr/bin/grep -Fq 'hvir-native-package-command-v1' "$native_command" || {
    echo "The installed command is not owned by the hvir native package: $native_command" >&2
    exit 1
  }
  native_install_present || {
    echo 'The native package manager does not report hvir as installed.' >&2
    exit 1
  }
}

safe_remove_legacy_cache() {
  [[ -n "$legacy_cache" ]] || return 0
  case "$legacy_cache" in
  /*/hvir/native) ;;
  *)
    echo "Refusing to remove unexpected legacy cache path: $legacy_cache" >&2
    exit 1
    ;;
  esac
  /bin/rm -rf -- "$legacy_cache"
}

remove_legacy_launcher() {
  local migration_log
  [[ -n "$legacy_launcher" ]] || return 0
  stage='removing the verified legacy hvir-workbench launcher'
  migration_log="$temporary_directory/npm-migration.log"
  run_with_failure_diagnostics \
    "$migration_log" \
    "$legacy_npm" uninstall -g hvir-workbench
  if [[ -e "$legacy_launcher" || -L "$legacy_launcher" ]]; then
    echo "npm retained the legacy launcher: $legacy_launcher" >&2
    exit 1
  fi
  stage='removing the derived ADR-018 native cache'
  safe_remove_legacy_cache
  echo 'Removed the legacy npm installation.'
}

verify_native_command_resolution() {
  local found
  stage='verifying public hvir command resolution'
  hash -r
  found=$(command -v hvir 2>/dev/null || true)
  if [[ -z "$found" || ! "$found" -ef "$native_command" ]]; then
    echo \
      "Another hvir command shadows the installed native command: ${found:-not found}" \
      >&2
    exit 1
  fi
}

install_or_update() {
  local artifact package_log
  if [[ "$platform" == 'linux' ]]; then
    verify_linux_host_capabilities
  fi
  if native_install_present; then
    install_action='update'
    echo "Updating hvir to $HVIR_VERSION for $platform_name."
  else
    install_action='install'
    echo "Installing hvir $HVIR_VERSION for $platform_name."
  fi
  stage='checking for a legacy npm installation'
  discover_legacy_launcher
  stage='creating a private installer workspace'
  create_private_temporary_directory
  artifact="$temporary_directory/$artifact_name"
  echo 'Downloading the native package...'
  download_artifact "$artifact"
  verify_digest "$artifact"
  echo 'Download integrity verified.'
  if [[ "$platform" == 'macos' ]]; then
    verify_macos_package "$artifact"
    stage="installing hvir $HVIR_VERSION with the macOS package manager"
    package_log="$temporary_directory/native-package-manager.log"
    echo 'macOS will request your local administrator password; typed characters will not appear.'
    run_with_failure_diagnostics \
      "$package_log" \
      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
  else
    verify_linux_package_capabilities "$artifact"
    stage="installing hvir $HVIR_VERSION with apt"
    package_log="$temporary_directory/native-package-manager.log"
    run_with_failure_diagnostics \
      "$package_log" \
      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
  fi
  verify_native_command
  remove_legacy_launcher
  verify_native_command_resolution
  if [[ "$install_action" == 'update' ]]; then
    echo "hvir $HVIR_VERSION is updated. Open a project with: hvir ."
  else
    echo "hvir $HVIR_VERSION is installed. Open a project with: hvir ."
  fi
}

validate_macos_inventory() {
  local inventory='/Library/Application Support/hvir/package-inventory-v1.txt'
  [[ -f "$inventory" ]] || {
    echo "The hvir package inventory is missing: $inventory" >&2
    exit 1
  }
  /usr/bin/grep -Fxq 'hvir-native-package-inventory-v1' "$inventory"
  /usr/bin/grep -Fxq 'package-id=dev.hvir.app' "$inventory"
  /usr/bin/grep -Fxq 'application=/Applications/hvir.app' "$inventory"
  /usr/bin/grep -Fxq 'command=/usr/local/bin/hvir' "$inventory"
  /usr/bin/grep -Fxq \
    'inventory=/Library/Application Support/hvir/package-inventory-v1.txt' \
    "$inventory"
  /usr/bin/grep -Fxq 'receipt=dev.hvir.app' "$inventory"
  [[ -f /usr/local/bin/hvir ]] &&
    /usr/bin/grep -Fq 'hvir-native-package-command-v1' /usr/local/bin/hvir
}

remove_native_package() {
  if [[ "$platform" == 'linux' ]]; then
    if native_install_present; then
      stage='removing the hvir native package with apt'
      /usr/bin/sudo /usr/bin/apt remove -y hvir
    elif [[ "$purge" -eq 0 ]]; then
      echo 'The hvir native package is not installed.' >&2
      exit 1
    fi
  else
    if /usr/sbin/pkgutil --pkg-info dev.hvir.app >/dev/null 2>&1; then
      stage='validating package-owned macOS removal state'
      validate_macos_inventory
      stage='removing package-owned macOS application state'
      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
      /usr/bin/sudo /bin/rm -f -- \
        /usr/local/bin/hvir \
        '/Library/Application Support/hvir/package-inventory-v1.txt'
      /usr/bin/sudo /bin/rmdir '/Library/Application Support/hvir' 2>/dev/null || true
      /usr/bin/sudo /usr/sbin/pkgutil --forget dev.hvir.app >/dev/null
    elif [[ "$purge" -eq 0 ]]; then
      echo 'The hvir native package is not installed.' >&2
      exit 1
    fi
  fi
}

purge_roots() {
  local wrapped
  if [[ "$HOME" != /* || "$HOME" == '/' ]]; then
    echo "Refusing to purge with unsafe HOME: ${HOME:-unset}" >&2
    exit 1
  fi
  wrapped=/${HOME#/}/
  case "$wrapped" in
  */../* | */./*)
    echo "Refusing to purge with non-canonical HOME: $HOME" >&2
    exit 1
    ;;
  esac
  if [[ "$platform" == 'macos' ]]; then
    printf '%s\n' \
      "$HOME/Library/Application Support/hvir" \
      "$HOME/Library/Caches/hvir"
  else
    if [[ -n "${XDG_CONFIG_HOME:-}" && "$XDG_CONFIG_HOME" == /* ]]; then
      wrapped=/${XDG_CONFIG_HOME#/}/
      case "$wrapped" in
      */../* | */./*)
        echo "Refusing to purge with unsafe XDG_CONFIG_HOME: $XDG_CONFIG_HOME" >&2
        exit 1
        ;;
      esac
      printf '%s/hvir\n' "${XDG_CONFIG_HOME%/}"
    else
      printf '%s/.config/hvir\n' "$HOME"
    fi
    if [[ -n "${XDG_CACHE_HOME:-}" && "$XDG_CACHE_HOME" == /* ]]; then
      wrapped=/${XDG_CACHE_HOME#/}/
      case "$wrapped" in
      */../* | */./*)
        echo "Refusing to purge with unsafe XDG_CACHE_HOME: $XDG_CACHE_HOME" >&2
        exit 1
        ;;
      esac
      printf '%s/hvir\n' "${XDG_CACHE_HOME%/}"
    else
      printf '%s/.cache/hvir\n' "$HOME"
    fi
  fi
}

purge_user_state() {
  local path
  stage='purging the current user hvir settings and cache'
  while IFS= read -r path; do
    case "$path" in
    /*/hvir) ;;
    *)
      echo "Refusing to purge unexpected path: $path" >&2
      exit 1
      ;;
    esac
    echo "Purging current-user hvir state: $path"
    /bin/rm -rf -- "$path"
  done < <(purge_roots)
}

uninstall_hvir() {
  remove_native_package
  if [[ "$purge" -eq 1 ]]; then
    purge_user_state
  fi
  echo "Uninstalled hvir $HVIR_VERSION; project directories were preserved."
}

parse_arguments "$@"
stage='detecting the supported platform'
detect_target
require_install_tools

if [[ "$operation" == 'install' ]]; then
  install_or_update
else
  echo "Uninstalling hvir $HVIR_VERSION from $platform_name."
  uninstall_hvir
fi

stage='completed successfully'
```

</details>


---

<sub>21s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/build/native/hvir-command.**

/private/var/tmp/ws/ffb55c2b/hvir/build/native/hvir-command

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

<sub>21s</sub>

### `bash`

**Read ignore files, hooks, ADR checker**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && echo "---gitignore---" && cat .gitignore && echo "---prettierignore---" && cat .prettierignore && echo "---prettierrc---" && cat .prettierrc.json && echo "---githooks/pre-push---" && cat .githooks/pre-push && echo "---install-git-hooks---" && cat scripts/install-git-hooks.sh && echo "---check-adrs (head)---" && head -80 scripts/check-adrs.mjs

<details>
<summary>139 lines</summary>

```
---gitignore---
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
---prettierignore---
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
---prettierrc---
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
---githooks/pre-push---
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
---install-git-hooks---
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
---check-adrs (head)---
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>27s</sub>

### Copilot

Notably, `check-adrs.mjs` expects `docs/adr/` and `docs/design.md`, and neither exists in this checkout. Next I'll read the release workflow and the other workflows.

---

<sub>28s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml (lines 1-200)

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

<sub>28s</sub>

### `bash`

**Skim other workflows**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && for f in .github/workflows/release-pr-merged.yml .github/workflows/macos-package-release.yml .github/workflows/smoke-stress.yml .github/workflows/real-host-ssh.yml .github/workflows/ghostty-web-update.yml .github/workflows/project-kind.yml .github/workflows/project-pr-planning.yml .github/workflows/lock-tracker-conversations.yml .github/workflows/codeql.yml .github/dependabot.yml; do echo "=== $f ==="; head -60 "$f"; done

<details>
<summary>505 lines</summary>

```
=== .github/workflows/release-pr-merged.yml ===
name: Dispatch merged release

on:
  pull_request_target:
    types: [closed]

permissions:
  contents: read

concurrency:
  group: release-pr-${{ github.event.pull_request.number }}
  cancel-in-progress: false

jobs:
  dispatch:
    if: >-
      github.event.pull_request.merged == true &&
      github.event.pull_request.base.ref == github.event.repository.default_branch &&
      github.event.pull_request.head.repo.full_name == github.repository &&
      github.event.pull_request.user.login == 'github-actions[bot]' &&
      startsWith(github.event.pull_request.head.ref, 'release/v')
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    permissions:
      actions: write
      contents: read
      pull-requests: read
    steps:
      - name: Check out trusted release validation
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.repository.default_branch }}
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

      - name: Validate merged release PR
        id: validate
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GITHUB_TOKEN: ${{ github.token }}
          RELEASE_PR_HEAD_SHA: ${{ github.event.pull_request.head.sha }}
          RELEASE_PR_MODE: merged
          RELEASE_PR_NUMBER: ${{ github.event.pull_request.number }}
          RELEASE_SOURCE_SHA: ${{ github.event.pull_request.merge_commit_sha }}
        run: node scripts/validate-release-pr.mts

      - name: Dispatch exact merged release
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GH_TOKEN: ${{ github.token }}
          MERGE_SHA: ${{ github.event.pull_request.merge_commit_sha }}
=== .github/workflows/macos-package-release.yml ===
name: Signed macOS package

on:
  workflow_call:
    inputs:
      source_sha:
        description: Full merged release source commit SHA to package.
        required: true
        type: string
      allow_merged_source:
        description: Permit an exact commit contained in the selected branch for release assembly.
        required: false
        default: false
        type: boolean
    secrets:
      MACOS_APPLICATION_CERTIFICATE:
        required: false
      MACOS_APPLICATION_CERTIFICATE_PASSWORD:
        required: false
      MACOS_INSTALLER_CERTIFICATE:
        required: false
      MACOS_INSTALLER_CERTIFICATE_PASSWORD:
        required: false
      MACOS_NOTARY_KEY:
        required: false
      MACOS_NOTARY_KEY_ID:
        required: false
      MACOS_NOTARY_ISSUER_ID:
        required: false
      MACOS_TEAM_ID:
        required: false
permissions:
  contents: read

concurrency:
  group: signed-macos-package
  cancel-in-progress: false

jobs:
  signed-package:
    name: Sign, notarize, staple, and accept macOS arm64 package
    runs-on: macos-15
    timeout-minutes: 45
    environment: native-release-signing

    steps:
      - name: Require an exact protected merged source
        env:
          ALLOW_MERGED_SOURCE: ${{ inputs.allow_merged_source }}
          REF_TYPE: ${{ github.ref_type }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          if [ "$REF_TYPE" != branch ]; then
            echo "::error::Signed packaging must be dispatched from a protected branch"
            exit 1
          fi
          if [ "$ALLOW_MERGED_SOURCE" != true ]; then
            echo "::error::Signed packaging requires an explicitly selected merged source"
            exit 1
          fi
=== .github/workflows/smoke-stress.yml ===
name: Electron smoke stress

on:
  workflow_dispatch:
    inputs:
      scenario:
        description: Focused scenario to repeat
        required: true
        default: pty-native
        type: choice
        options:
          - pty-native
          - document-review
          - viewer-content
          - viewer-position
          - git-workflow
          - renderer-recovery
          - renderer-authority
          - web-pane
      repeat:
        description: Fixed attempt count (not retries)
        required: true
        default: '20'
        type: choice
        options:
          - '5'
          - '10'
          - '20'
          - '50'

permissions:
  contents: read

concurrency:
  group: smoke-stress-${{ github.ref }}
  cancel-in-progress: false

jobs:
  stress:
    name: ${{ matrix.name }} · ${{ inputs.scenario }} × ${{ inputs.repeat }}
    runs-on: ${{ matrix.os }}
    timeout-minutes: 90
    strategy:
      fail-fast: false
      matrix:
        os:
          - ubuntu-24.04
          - macos-15
        include:
          - os: ubuntu-24.04
            name: Linux x64
          - os: macos-15
            name: macOS ARM64
    env:
      HVIR_SMOKE_SCENARIO: ${{ inputs.scenario }}
      HVIR_SMOKE_REPEAT: ${{ inputs.repeat }}

    steps:
      - name: Check out repository
        uses: actions/checkout@v7
=== .github/workflows/real-host-ssh.yml ===
name: Real-host SSH acceptance

on:
  workflow_dispatch:
  schedule:
    - cron: '41 7 1 * *'

permissions:
  contents: read

concurrency:
  group: real-host-ssh-acceptance
  cancel-in-progress: false

jobs:
  configuration:
    name: Real-host target availability
    runs-on: ubuntu-24.04
    environment: real-host-ssh
    outputs:
      configured: ${{ steps.configuration.outputs.configured }}
    steps:
      - name: Classify explicit target configuration
        id: configuration
        env:
          REAL_HOST: ${{ secrets.HVIR_REAL_SSH_HOST }}
          REAL_PORT: ${{ secrets.HVIR_REAL_SSH_PORT }}
          REAL_USER: ${{ secrets.HVIR_REAL_SSH_USER }}
          REAL_HOST_KEY: ${{ secrets.HVIR_REAL_SSH_HOST_KEY }}
          REAL_ROOT_PARENT: ${{ secrets.HVIR_REAL_SSH_ROOT_PARENT }}
          REAL_PRIVATE_KEY: ${{ secrets.HVIR_REAL_SSH_PRIVATE_KEY }}
        run: |
          set +x
          present=0
          missing=0
          for value in \
            "$REAL_HOST" \
            "$REAL_PORT" \
            "$REAL_USER" \
            "$REAL_HOST_KEY" \
            "$REAL_ROOT_PARENT" \
            "$REAL_PRIVATE_KEY"
          do
            if [ -n "$value" ]; then
              present=$((present + 1))
            else
              missing=$((missing + 1))
            fi
          done
          if [ "$present" -eq 0 ]; then
            echo 'configured=false' >> "$GITHUB_OUTPUT"
            echo '::notice::Real-host SSH infrastructure is unavailable; acceptance is skipped.'
          elif [ "$missing" -ne 0 ]; then
            echo '::error::Real-host SSH infrastructure is partially configured.'
            exit 1
          else
            echo 'configured=true' >> "$GITHUB_OUTPUT"
          fi

  acceptance:
=== .github/workflows/ghostty-web-update.yml ===
name: Update ghostty-web compatibility artifact

on:
  schedule:
    - cron: '23 13 * * *'
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: ghostty-web-update
  cancel-in-progress: false

jobs:
  prepare:
    name: Discover and validate candidate
    runs-on: ubuntu-24.04
    timeout-minutes: 30
    outputs:
      outcome: ${{ steps.prepare.outputs.outcome }}

    steps:
      - name: Require the default branch
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
        run: |
          if [ "$GITHUB_REF" != "refs/heads/$DEFAULT_BRANCH" ]; then
            echo "::error::Run ghostty-web updates from $DEFAULT_BRANCH, not $GITHUB_REF_NAME"
            exit 1
          fi

      - name: Check out trusted default-branch automation without credentials
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7
        with:
          ref: ${{ github.sha }}
          fetch-depth: 0
          persist-credentials: false

      - name: Set up Node.js
        uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Discover and validate the candidate without mutation authority
        id: prepare
        env:
          HVIR_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          HVIR_REPOSITORY: ${{ github.repository }}
        run: node scripts/ghostty-web-update/cli.mts prepare "$RUNNER_TEMP/ghostty-web-update"

      - name: Retain the fixed candidate bundle
        if: steps.prepare.outputs.outcome == 'prepared'
        uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7.0.1
        with:
          name: ghostty-web-update-candidate
          path: ${{ runner.temp }}/ghostty-web-update
          if-no-files-found: error
          retention-days: 1
=== .github/workflows/project-kind.yml ===
name: Reconcile issue planning

on:
  issues:
    types: [opened, reopened, closed, labeled, unlabeled]
  workflow_dispatch:
    inputs:
      issue_number:
        description: Issue number; leave empty to reconcile every open issue
        required: false
        type: string
      apply:
        description: Apply deterministic label and Project mutations
        required: true
        default: false
        type: boolean

permissions:
  contents: read

concurrency:
  group: project-kind-${{ github.event.issue.number || inputs.issue_number || github.run_id }}
  cancel-in-progress: false

jobs:
  issue-event:
    if: >-
      github.event_name == 'issues' &&
      (github.event.action == 'opened' ||
       github.event.action == 'reopened' ||
       github.event.action == 'closed' ||
       github.event.action == 'labeled' ||
       github.event.action == 'unlabeled')
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    environment:
      name: project-automation
      deployment: false
    permissions:
      contents: read
      issues: write
    steps:
      - name: Check out repository automation
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7
        with:
          ref: main
          persist-credentials: false

      - name: Set up Node.js
        uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Reconcile the affected issue
        env:
          HVIR_REPO_TOKEN: ${{ github.token }}
          HVIR_PROJECT_TOKEN: ${{ secrets.HVIR_PROJECT_TOKEN }}
          HVIR_REPOSITORY: ${{ github.repository }}
          HVIR_ISSUE_NUMBER: ${{ github.event.issue.number }}
=== .github/workflows/project-pr-planning.yml ===
name: Reconcile PR planning relationships

on:
  pull_request_target:
    types: [opened, reopened, converted_to_draft, ready_for_review, edited, closed]
  issues:
    types: [reopened]
  workflow_dispatch:
    inputs:
      pull_request_number:
        description: Pull request number to reconcile from current GitHub state
        required: true
        type: string
      apply:
        description: Apply eligible planning convergence and child closure
        required: true
        default: false
        type: boolean

permissions:
  contents: read

concurrency:
  group: project-pr-planning
  cancel-in-progress: false

jobs:
  relationship-event:
    if: >-
      (github.event_name == 'pull_request_target' &&
       (github.event.pull_request.base.ref == 'main' ||
        startsWith(github.event.pull_request.base.ref, 'epic/'))) ||
      (github.event_name == 'issues' && github.event.action == 'reopened')
    runs-on: ubuntu-24.04
    timeout-minutes: 10
    environment:
      name: project-automation
      deployment: false
    permissions:
      contents: read
      issues: write
      pull-requests: read
    steps:
      - name: Check out trusted repository automation
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7
        with:
          ref: main
          persist-credentials: false

      - name: Set up Node.js
        uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Reconcile linked issue planning state
        env:
          HVIR_REPO_TOKEN: ${{ github.token }}
          HVIR_PROJECT_TOKEN: ${{ secrets.HVIR_PROJECT_TOKEN }}
          HVIR_REPOSITORY: ${{ github.repository }}
=== .github/workflows/lock-tracker-conversations.yml ===
name: Lock tracker conversations

on:
  issues:
    types: [opened, reopened, unlocked]
  pull_request_target:
    types: [opened, reopened, unlocked]

permissions: {}

jobs:
  lock-issue:
    if: github.event_name == 'issues'
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Lock issue conversation
        env:
          GH_TOKEN: ${{ github.token }}
          ISSUE_URL: ${{ github.event.issue.html_url }}
        run: gh issue lock "$ISSUE_URL"

  lock-pull-request:
    if: github.event_name == 'pull_request_target'
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
    steps:
      - name: Lock pull request conversation
        env:
          GH_TOKEN: ${{ github.token }}
          PULL_REQUEST_URL: ${{ github.event.pull_request.html_url }}
        run: gh pr lock "$PULL_REQUEST_URL"
=== .github/workflows/codeql.yml ===
name: CodeQL

on:
  schedule:
    - cron: '17 8 * * 1'

permissions:
  contents: read

concurrency:
  group: codeql-${{ github.ref }}
  cancel-in-progress: true

jobs:
  analyze:
    name: Analyze JavaScript and TypeScript
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
=== .github/dependabot.yml ===
version: 2

updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: daily
      time: '09:00'
      timezone: America/New_York
    open-pull-requests-limit: 10
    commit-message:
      prefix: deps
    ignore:
      # A dedicated provenance-validating workflow owns this immutable release artifact.
      - dependency-name: 'ghostty-web'
      # Keep Node types aligned with the Node major embedded by Electron.
      - dependency-name: '@types/node'
        update-types:
          - version-update:semver-major
      # Keep plist on its CommonJS-compatible v3 line while main dependencies are externalized.
      - dependency-name: plist
        update-types:
          - version-update:semver-major
      # Revisit these when their named upstream tool supports the next major.
      - dependency-name: typescript
        update-types:
          - version-update:semver-major
      - dependency-name: vite
        update-types:
          - version-update:semver-major
      - dependency-name: '@vitejs/plugin-react'
        update-types:
          - version-update:semver-major
    groups:
      npm-minor-and-patch-updates:
        applies-to: version-updates
        patterns:
          - '*'
        update-types:
          - minor
          - patch
      npm-security-updates:
        applies-to: security-updates
        patterns:
          - '*'

  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: daily
      time: '09:00'
      timezone: America/New_York
    open-pull-requests-limit: 10
    commit-message:
      prefix: deps
    groups:
      github-actions-minor-and-patch-updates:
        applies-to: version-updates
        patterns:
          - '*'
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>32s</sub>

### Copilot

I'll read the rest of the release workflow and search for how the installer is published.

---

<sub>34s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml (lines 200-560)

<details>
<summary>331 lines</summary>

```
    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Build native package
        run: ${{ matrix.build }}

      - name: Install, update, launch, and remove native package
        run: xvfb-run -a npm run smoke:linux:installed

      - name: Bind the accepted package name and digest
        env:
          DEB_ARCH: ${{ matrix.deb_arch }}
          RELEASE_ARCH: ${{ matrix.release_arch }}
        run: |
          version=$(node -p "require('./package.json').version")
          source="dist/hvir_${version}_${DEB_ARCH}.deb"
          target="hvir-${version}-linux-${RELEASE_ARCH}.deb"
          if [ ! -f "$source" ] || [ -e "dist/$target" ]; then
            echo "::error::Expected exactly one accepted package at $source"
            exit 1
          fi
          mv -- "$source" "dist/$target"
          (
            cd dist
            sha256sum "$target" > "$target.sha256"
            sha256sum --check --strict "$target.sha256"
          )

      - name: Retain the exact accepted package
        uses: actions/upload-artifact@v7
        with:
          name: release-linux-${{ matrix.release_arch }}
          path: |
            dist/hvir-*-linux-${{ matrix.release_arch }}.deb
            dist/hvir-*-linux-${{ matrix.release_arch }}.deb.sha256
          if-no-files-found: error
          compression-level: 0
          retention-days: 1

  accept-linux-ubuntu-24:
    name: Accept release package (${{ matrix.name }})
    needs:
      - prepare
      - build-linux
    if: >-
      needs.prepare.outputs.ready == 'true' &&
      needs.build-linux.result == 'success'
    runs-on: ${{ matrix.os }}
    timeout-minutes: 20
    strategy:
      fail-fast: false
      matrix:
        include:
          - name: Ubuntu 24.04 x64
            os: ubuntu-24.04
            artifact_name: release-linux-x64
            deb_arch: amd64
            release_arch: x64
          - name: Ubuntu 24.04 arm64
            os: ubuntu-24.04-arm
            artifact_name: release-linux-arm64
            deb_arch: arm64
            release_arch: arm64
    env:
      HVIR_LINUX_PACKAGE_ACCEPTANCE: '1'

    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Download the accepted baseline package
        uses: actions/download-artifact@v8
        with:
          name: ${{ matrix.artifact_name }}
          path: dist

      - name: Verify and restore the exact package for acceptance
        env:
          DEB_ARCH: ${{ matrix.deb_arch }}
          RELEASE_ARCH: ${{ matrix.release_arch }}
        run: node scripts/prepare-release-linux-package.mts "$RELEASE_ARCH" "$DEB_ARCH"

      - name: Install, update, launch, and remove native package
        run: xvfb-run -a npm run smoke:linux:installed

  accept-linux-debian:
    name: Accept release package (${{ matrix.name }})
    needs:
      - prepare
      - build-linux
    if: >-
      needs.prepare.outputs.ready == 'true' &&
      needs.build-linux.result == 'success'
    runs-on: ${{ matrix.os }}
    container:
      image: node:24-trixie
      options: --security-opt seccomp=unconfined
    timeout-minutes: 20
    strategy:
      fail-fast: false
      matrix:
        include:
          - name: Debian 13 x64
            os: ubuntu-22.04
            artifact_name: release-linux-x64
            deb_arch: amd64
            release_arch: x64
          - name: Debian 13 arm64
            os: ubuntu-22.04-arm
            artifact_name: release-linux-arm64
            deb_arch: arm64
            release_arch: arm64

    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}

      - name: Download the accepted baseline package
        uses: actions/download-artifact@v8
        with:
          name: ${{ matrix.artifact_name }}
          path: dist

      - name: Prepare the disposable Debian acceptance host
        run: |
          apt-get update
          DEBIAN_FRONTEND=noninteractive apt-get install \
            --no-install-recommends \
            -y \
            file \
            git \
            sudo \
            xauth \
            xvfb
          useradd --create-home --shell /bin/bash hvir-acceptance
          printf 'hvir-acceptance ALL=(ALL) NOPASSWD: ALL\n' \
            >/etc/sudoers.d/hvir-acceptance
          chmod 0440 /etc/sudoers.d/hvir-acceptance

      - name: Verify and restore the exact package for acceptance
        env:
          DEB_ARCH: ${{ matrix.deb_arch }}
          RELEASE_ARCH: ${{ matrix.release_arch }}
        run: |
          node scripts/prepare-release-linux-package.mts "$RELEASE_ARCH" "$DEB_ARCH"
          chown -R hvir-acceptance:hvir-acceptance "$GITHUB_WORKSPACE"

      - name: Install, update, launch, and remove native package
        run: |
          sudo -u hvir-acceptance env \
            HOME=/home/hvir-acceptance \
            HVIR_LINUX_PACKAGE_ACCEPTANCE=1 \
            PATH=/usr/local/bin:/usr/bin:/bin \
            xvfb-run -a npm run smoke:linux:installed -- --software-rendering

  build-macos:
    name: Build and accept macOS arm64
    needs: prepare
    if: needs.prepare.outputs.ready == 'true'
    uses: ./.github/workflows/macos-package-release.yml
    with:
      source_sha: ${{ needs.prepare.outputs.sha }}
      allow_merged_source: true
    secrets: inherit

  publish-native-release:
    name: Assemble, verify, and publish immutable release
    needs:
      - prepare
      - build-linux
      - accept-linux-ubuntu-24
      - accept-linux-debian
      - build-macos
    if: >-
      needs.prepare.outputs.ready == 'true' &&
      needs.build-linux.result == 'success' &&
      needs.accept-linux-ubuntu-24.result == 'success' &&
      needs.accept-linux-debian.result == 'success' &&
      needs.build-macos.result == 'success'
    runs-on: ubuntu-24.04
    timeout-minutes: 20
    environment: native-release-signing
    permissions:
      actions: read
      contents: write
    steps:
      - name: Check out exact release source
        uses: actions/checkout@v7
        with:
          ref: ${{ needs.prepare.outputs.sha }}
          fetch-depth: 0
          fetch-tags: true

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Download accepted Linux x64 package
        uses: actions/download-artifact@v8
        with:
          name: release-linux-x64
          path: dist/release

      - name: Download accepted Linux arm64 package
        uses: actions/download-artifact@v8
        with:
          name: release-linux-arm64
          path: dist/release

      - name: Download protected accepted macOS package
        uses: actions/download-artifact@v8
        with:
          name: release-macos-arm64
          path: dist/release

      - name: Verify the exact accepted native artifact set
        env:
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          expected=$(printf '%s\n' \
            "hvir-${VERSION}-darwin-arm64.pkg" \
            "hvir-${VERSION}-darwin-arm64.pkg.sha256" \
            "hvir-${VERSION}-linux-arm64.deb" \
            "hvir-${VERSION}-linux-arm64.deb.sha256" \
            "hvir-${VERSION}-linux-x64.deb" \
            "hvir-${VERSION}-linux-x64.deb.sha256" |
            sort)
          actual=$(find dist/release -maxdepth 1 -type f -printf '%f\n' | sort)
          if [ "$actual" != "$expected" ]; then
            echo "::error::Accepted native artifact set is incomplete or unexpected"
            diff -u <(printf '%s\n' "$expected") <(printf '%s\n' "$actual") || true
            exit 1
          fi
          (
            cd dist/release
            sha256sum --check --strict \
              "hvir-${VERSION}-linux-x64.deb.sha256" \
              "hvir-${VERSION}-linux-arm64.deb.sha256" \
              "hvir-${VERSION}-darwin-arm64.pkg.sha256"
            rm -- ./*.sha256
          )

      - name: Require repository release immutability
        env:
          GH_TOKEN: ${{ secrets.IMMUTABLE_RELEASES_READ_TOKEN }}
        run: |
          if [ -z "$GH_TOKEN" ]; then
            echo "::error::IMMUTABLE_RELEASES_READ_TOKEN is unavailable in native-release-signing"
            exit 1
          fi
          enabled=$(gh api \
            -H 'Accept: application/vnd.github+json' \
            -H 'X-GitHub-Api-Version: 2026-03-10' \
            "repos/$GITHUB_REPOSITORY/immutable-releases" \
            --jq .enabled)
          if [ "$enabled" != true ]; then
            echo "::error::Enable immutable releases before native release cutover"
            exit 1
          fi

      - name: Assemble exact release metadata and installer
        env:
          MACOS_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
          RELEASE_SHA: ${{ needs.prepare.outputs.sha }}
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          npm run assemble:native-release -- \
            --version "$VERSION" \
            --source-sha "$RELEASE_SHA" \
            --repository "$GITHUB_REPOSITORY" \
            --macos-team-id "$MACOS_TEAM_ID" \
            --asset-directory dist/release
          (
            cd dist/release
            sha256sum --check SHA256SUMS
          )

      - name: Create or repair a private draft
        env:
          GH_TOKEN: ${{ github.token }}
          RELEASE_REF_WRITE_TOKEN: ${{ secrets.IMMUTABLE_RELEASES_READ_TOKEN }}
          RELEASE_SHA: ${{ needs.prepare.outputs.sha }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          remote_tag_sha=$(git ls-remote origin "refs/tags/$TAG^{}" | awk '{print $1}')
          if [ -z "$remote_tag_sha" ]; then
            remote_tag_sha=$(git ls-remote origin "refs/tags/$TAG" | awk '{print $1}')
          fi
          if [ -n "$remote_tag_sha" ] && [ "$remote_tag_sha" != "$RELEASE_SHA" ]; then
            echo "::error::$TAG points at $remote_tag_sha, expected $RELEASE_SHA"
            exit 1
          fi
          if [ -z "$remote_tag_sha" ]; then
            GH_TOKEN="$RELEASE_REF_WRITE_TOKEN" gh api \
              --method POST \
              -H 'Accept: application/vnd.github+json' \
              -H 'X-GitHub-Api-Version: 2026-03-10' \
              "repos/$GITHUB_REPOSITORY/git/refs" \
              -f ref="refs/tags/$TAG" \
              -f sha="$RELEASE_SHA" \
              >/dev/null
          fi

          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
            if [ "$is_draft" != true ]; then
              echo "::error::$TAG is already public and cannot be repaired in place"
              exit 1
            fi
          else
            gh release create "$TAG" \
              --repo "$GITHUB_REPOSITORY" \
              --verify-tag \
              --draft \
              --title "$TAG" \
              --generate-notes
          fi

      - name: Upload and validate the complete draft asset set
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          gh release upload "$TAG" dist/release/* \
            --repo "$GITHUB_REPOSITORY" \
            --clobber
          actual=$(gh release view "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --json assets \
            --jq '.assets[].name' |
            sort)
          expected=$(printf '%s\n' \
            SHA256SUMS \
            THIRD_PARTY_NOTICES.md \
            "hvir-${VERSION}-darwin-arm64.pkg" \
            "hvir-${VERSION}-linux-arm64.deb" \
```

</details>


---

<sub>34s</sub>

### `grep`

**install\.sh|releases/latest|releases/download|github\.com/[A-Za-z0-9_-]+/hvir**

"install\.sh|releases/latest|releases/download|github\.com/[A-Za-z0-9_-]+/hvir" (scripts, src, .github, build)

<details>
<summary>12 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:562:            install.sh \
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:612:          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts:109:      'https://github.com/jarmak-personal/hvir.git',
/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts:111:      'https://github.com/jarmak-personal/hvir',
/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh:59:  install.sh
/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh:60:  install.sh --uninstall
/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh:61:  install.sh --uninstall --purge
/private/var/tmp/ws/ffb55c2b/hvir/scripts/ghostty-terminal-capability-profile.mts:8:    url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',
/private/var/tmp/ws/ffb55c2b/hvir/scripts/ghostty-web-update/policy.mts:9:  'https://github.com/jarmak-personal/ghostty-web/releases/download/'
/private/var/tmp/ws/ffb55c2b/hvir/scripts/assemble-native-release.mjs:54:  const installerPath = resolve(assetDirectory, 'install.sh')
/private/var/tmp/ws/ffb55c2b/hvir/scripts/assemble-native-release.mjs:149:    'install.sh',
/private/var/tmp/ws/ffb55c2b/hvir/scripts/render-native-installer.mjs:32:    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml (lines 556-680)

<details>
<summary>58 lines</summary>

```
          expected=$(printf '%s\n' \
            SHA256SUMS \
            THIRD_PARTY_NOTICES.md \
            "hvir-${VERSION}-darwin-arm64.pkg" \
            "hvir-${VERSION}-linux-arm64.deb" \
            "hvir-${VERSION}-linux-x64.deb" \
            install.sh \
            release-manifest.json |
            sort)
          if [ "$actual" != "$expected" ]; then
            echo "::error::Draft release asset set is incomplete or unexpected"
            diff -u <(printf '%s\n' "$expected") <(printf '%s\n' "$actual") || true
            exit 1
          fi

      - name: Publish the complete immutable release
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          gh release edit "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --draft=false \
            --latest

      - name: Verify published release attestation and downloaded assets
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          verified=false
          for attempt in {1..12}; do
            if gh release verify "$TAG" --repo "$GITHUB_REPOSITORY"; then
              verified=true
              break
            fi
            echo "Release attestation is not ready (attempt $attempt/12)"
            sleep 5
          done
          if [ "$verified" != true ]; then
            echo "::error::GitHub did not verify immutable release $TAG"
            exit 1
          fi

          verify_directory="$RUNNER_TEMP/hvir-release-verification"
          mkdir "$verify_directory"
          gh release download "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --dir "$verify_directory"
          (
            cd "$verify_directory"
            sha256sum --check SHA256SUMS
          )
          for asset in "$verify_directory"/*; do
            gh release verify-asset "$TAG" "$asset" --repo "$GITHUB_REPOSITORY"
          done
          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
          if [ "$latest" != "$TAG" ]; then
            echo "::error::Latest release is $latest, expected $TAG"
            exit 1
          fi
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts (lines 95-125)

<details>
<summary>30 lines</summary>

```
    throw new Error('Missing or ambiguous exact epic branch')
  return branches[0]!.ref.replace('refs/heads/', '')
}

export async function resolveArchitectureContext(
  root: string,
  api: ArchitectureGitHub,
  environment: NodeJS.ProcessEnv = process.env,
): Promise<ArchitectureContext> {
  const tested = fullCommit(root, 'HEAD')
  let head = tested
  const origin = git(root, ['remote', 'get-url', 'origin'])
  if (
    ![
      'https://github.com/jarmak-personal/hvir.git',
      'git@github.com:jarmak-personal/hvir.git',
      'https://github.com/jarmak-personal/hvir',
    ].includes(origin)
  )
    throw new Error('Architecture evidence requires the canonical repository')
  let target = 'main'
  let epic: string | null = null
  let kind: ArchitectureContext['kind'] = 'ordinary'
  let eventBase: string | null = null
  if (environment.GITHUB_ACTIONS === 'true') {
    if (
      environment.GITHUB_EVENT_NAME !== 'pull_request' ||
      environment.GITHUB_REPOSITORY !== RELEASE_REPOSITORY
    )
      throw new Error('Architecture CI requires the canonical pull_request event')
    if (!environment.GITHUB_EVENT_PATH) throw new Error('Missing PR event file')
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/assemble-native-release.mjs.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/assemble-native-release.mjs

<details>
<summary>211 lines</summary>

```
#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { copyFile, mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import { basename, dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { renderNativeInstaller } from './render-native-installer.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const noticesSource = resolve(repositoryRoot, 'THIRD_PARTY_NOTICES.md')
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/
const sourceCommitPattern = /^[0-9a-f]{40}$/
const repositoryPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/
const teamPattern = /^[A-Z0-9]{10}$/

export async function assembleNativeRelease(options) {
  validateOptions(options)
  const version = options.version
  const tag = `v${version}`
  const assetDirectory = resolve(options.assetDirectory)
  const expectedArtifacts = [
    {
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
  )
  if (unexpected.length > 0) {
    throw new Error(`Unexpected release inputs: ${unexpected.sort().join(', ')}.`)
  }
  for (const name of expectedNames) {
    const path = resolve(assetDirectory, name)
    let metadata
    try {
      metadata = await stat(path)
    } catch {
      throw new Error(`Missing release input: ${name}.`)
    }
    if (!metadata.isFile()) throw new Error(`Release input is not a file: ${name}.`)
  }
}

async function requireExactOutputs(assetDirectory, expectedNames) {
  const actual = (await readdir(assetDirectory)).sort()
  const expected = [...expectedNames].sort()
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `Release output set is not exact: ${actual.join(', ')}; expected ${expected.join(', ')}.`,
    )
  }
}

async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

function parseArguments(args) {
  const values = new Map()
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index]
    const value = args[index + 1]
    if (!key?.startsWith('--') || value === undefined) {
      throw new Error(`Expected --name value pairs; stopped at ${key ?? 'end'}.`)
    }
    if (values.has(key)) throw new Error(`Duplicate option: ${key}.`)
    values.set(key, value)
  }
  const known = new Set([
    '--version',
    '--source-sha',
    '--repository',
    '--macos-team-id',
    '--asset-directory',
  ])
  for (const key of values.keys()) {
    if (!known.has(key)) throw new Error(`Unknown option: ${key}.`)
  }
  return {
    version: values.get('--version'),
    sourceSha: values.get('--source-sha'),
    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
    macosTeamId: values.get('--macos-team-id'),
    assetDirectory: values.get('--asset-directory'),
  }
}

async function main() {
  const result = await assembleNativeRelease(parseArguments(process.argv.slice(2)))
  process.stdout.write(`Assembled ${result.manifest.tag} in ${result.assetDirectory}\n`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/render-native-installer.mjs.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/render-native-installer.mjs

<details>
<summary>167 lines</summary>

```
#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { chmod, mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, dirname, isAbsolute, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = resolve(repositoryRoot, 'scripts/native-installer.template.sh')
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/
const repositoryPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/
const artifactPattern = /^[A-Za-z0-9][A-Za-z0-9._-]*$/
const teamPattern = /^[A-Z0-9]{10}$/

export async function renderNativeInstaller(options) {
  validateOptions(options)
  const artifacts = {
    linuxX64: await artifactRecord(options.linuxX64Artifact),
    linuxArm64: await artifactRecord(options.linuxArm64Artifact),
    macosArm64: await artifactRecord(options.macosArm64Artifact),
  }
  if (
    !options.acceptanceAssetDirectory &&
    new Set(Object.values(artifacts).map(({ name }) => name)).size !== 3
  ) {
    throw new Error('Release artifact names must be distinct.')
  }

  const releaseBaseUrl =
    `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
  const replacements = new Map([
    ['HVIR_VERSION', shellQuote(options.version)],
    ['HVIR_RELEASE_BASE_URL', shellQuote(releaseBaseUrl)],
    ['HVIR_LINUX_X64_ARTIFACT', shellQuote(artifacts.linuxX64.name)],
    ['HVIR_LINUX_X64_SHA256', shellQuote(artifacts.linuxX64.sha256)],
    ['HVIR_LINUX_ARM64_ARTIFACT', shellQuote(artifacts.linuxArm64.name)],
    ['HVIR_LINUX_ARM64_SHA256', shellQuote(artifacts.linuxArm64.sha256)],
    ['HVIR_MACOS_ARM64_ARTIFACT', shellQuote(artifacts.macosArm64.name)],
    ['HVIR_MACOS_ARM64_SHA256', shellQuote(artifacts.macosArm64.sha256)],
    ['HVIR_MACOS_TEAM_ID', shellQuote(options.macosTeamId)],
    [
      'HVIR_ACCEPTANCE_ASSET_DIRECTORY',
      shellQuote(options.acceptanceAssetDirectory ?? ''),
    ],
    [
      'HVIR_ACCEPTANCE_UNSIGNED_MACOS',
      shellQuote(options.acceptanceUnsignedMacos ? '1' : '0'),
    ],
  ])

  let output = await readFile(templatePath, 'utf8')
  for (const [name, value] of replacements) {
    const token = `@@${name}@@`
    if (!output.includes(token)) throw new Error(`Installer template lacks ${token}.`)
    output = output.replaceAll(token, value)
  }
  const unresolved = output.match(/@@[A-Z0-9_]+@@/)
  if (unresolved) {
    throw new Error(`Installer template retained ${unresolved[0]}.`)
  }

  const outputPath = resolve(options.output)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, output, { encoding: 'utf8', mode: 0o755 })
  await chmod(outputPath, 0o755)
  return { artifacts, outputPath, releaseBaseUrl }
}

function validateOptions(options) {
  if (!versionPattern.test(options.version ?? '')) {
    throw new Error(`Invalid hvir version: ${options.version ?? 'missing'}.`)
  }
  if (!repositoryPattern.test(options.repository ?? '')) {
    throw new Error(`Invalid GitHub repository: ${options.repository ?? 'missing'}.`)
  }
  if (!teamPattern.test(options.macosTeamId ?? '')) {
    throw new Error('The macOS Apple team ID must contain 10 uppercase letters/digits.')
  }
  if (!options.output) throw new Error('An installer output path is required.')
  for (const [target, path, extension] of [
    ['Linux x64', options.linuxX64Artifact, '.deb'],
    ['Linux arm64', options.linuxArm64Artifact, '.deb'],
    ['macOS arm64', options.macosArm64Artifact, '.pkg'],
  ]) {
    if (!path || !basename(path).endsWith(extension)) {
      throw new Error(`${target} requires one ${extension} artifact.`)
    }
  }
  if (options.acceptanceAssetDirectory) {
    if (
      process.env.CI !== 'true' ||
      process.env.GITHUB_ACTIONS !== 'true' ||
      !isAbsolute(options.acceptanceAssetDirectory)
    ) {
      throw new Error(
        'Local acceptance assets require an absolute path on GitHub Actions.',
      )
    }
  } else if (options.acceptanceUnsignedMacos) {
    throw new Error('Unsigned macOS mode is valid only for local CI acceptance assets.')
  }
}

async function artifactRecord(path) {
  if (!path) throw new Error('All three native artifact paths are required.')
  const name = basename(path)
  if (!artifactPattern.test(name)) {
    throw new Error(`Unsafe native artifact name: ${name}.`)
  }
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(resolve(path))) hash.update(chunk)
  return {
    name,
    sha256: hash.digest('hex'),
  }
}

function shellQuote(value) {
  return `'${String(value).replaceAll("'", "'\"'\"'")}'`
}

function parseArguments(args) {
  const values = new Map()
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index]
    const value = args[index + 1]
    if (!key?.startsWith('--') || value === undefined) {
      throw new Error(`Expected --name value pairs; stopped at ${key ?? 'end'}.`)
    }
    if (values.has(key)) throw new Error(`Duplicate option: ${key}.`)
    values.set(key, value)
  }
  const known = new Set([
    '--version',
    '--repository',
    '--linux-x64-artifact',
    '--linux-arm64-artifact',
    '--macos-arm64-artifact',
    '--macos-team-id',
    '--output',
    '--acceptance-asset-directory',
    '--acceptance-unsigned-macos',
  ])
  for (const key of values.keys()) {
    if (!known.has(key)) throw new Error(`Unknown option: ${key}.`)
  }
  const unsigned = values.get('--acceptance-unsigned-macos')
  if (unsigned !== undefined && unsigned !== 'true' && unsigned !== 'false') {
    throw new Error('--acceptance-unsigned-macos must be true or false.')
  }
  return {
    version: values.get('--version'),
    repository: values.get('--repository') ?? 'jarmak-personal/hvir',
    linuxX64Artifact: values.get('--linux-x64-artifact'),
    linuxArm64Artifact: values.get('--linux-arm64-artifact'),
    macosArm64Artifact: values.get('--macos-arm64-artifact'),
    macosTeamId: values.get('--macos-team-id'),
    output: values.get('--output'),
    acceptanceAssetDirectory: values.get('--acceptance-asset-directory'),
    acceptanceUnsignedMacos: unsigned === 'true',
  }
}

async function main() {
  const result = await renderNativeInstaller(parseArguments(process.argv.slice(2)))
  process.stdout.write(`Rendered ${result.outputPath}\n`)
  for (const [target, artifact] of Object.entries(result.artifacts)) {
    process.stdout.write(`${target}: ${artifact.name} ${artifact.sha256}\n`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
```

</details>


---

<sub>51s</sub>

### Copilot

The canonical repository is `jarmak-personal/hvir`, and releases ship an `install.sh` asset. Next I'll look at the app entry points to understand what the product does.

---

<sub>52s</sub>

### `bash`

**Line counts of key source files**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && wc -l src/main/index.ts src/renderer/src/App.tsx src/main/application-runtime.ts src/main/application-runtime-policy.ts src/shared/keybindings.ts src/main/harness/bundled-harness-providers.ts src/main/harness/providers/*.ts src/shared/harness-provider.ts src/shared/harness-profile.ts src/renderer/src/settings/settings-model.ts src/renderer/src/settings/settings.ts src/main/project-host/ssh-config.ts src/main/project-host/ssh-host.ts src/main/web-pane/*.ts src/shared/web-pane.ts src/main/document-review/document-review-application.ts src/shared/document-review.ts

<details>
<summary>26 lines</summary>

```
518 src/main/index.ts
     686 src/renderer/src/App.tsx
      18 src/main/application-runtime.ts
      30 src/main/application-runtime-policy.ts
     139 src/shared/keybindings.ts
      71 src/main/harness/bundled-harness-providers.ts
     108 src/main/harness/providers/claude-code.ts
     190 src/main/harness/providers/codex.ts
      50 src/main/harness/providers/cursor.ts
      56 src/main/harness/providers/gemini.ts
      54 src/main/harness/providers/github-copilot.ts
      53 src/main/harness/providers/pi.ts
      65 src/main/harness/providers/shell.ts
      98 src/shared/harness-provider.ts
     120 src/shared/harness-profile.ts
      52 src/renderer/src/settings/settings-model.ts
     172 src/renderer/src/settings/settings.ts
      48 src/main/project-host/ssh-config.ts
    1171 src/main/project-host/ssh-host.ts
     407 src/main/web-pane/loopback-http-proxy.ts
     570 src/main/web-pane/web-pane-route-registry.ts
      67 src/shared/web-pane.ts
      35 src/main/document-review/document-review-application.ts
     258 src/shared/document-review.ts
    5036 total
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>52s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>55s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts (lines 1-260)

<details>
<summary>260 lines</summary>

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
        onDiagnostic: (event) => diagnostics.recordPty(event),
        registerSessionIdentity: (terminalId, harnessSessionId) =>
          terminalSessionRegistry!.recordIdentity(terminalId, harnessSessionId),
        cancelSessionIdentityRegistration: (terminalId) =>
          terminalSessionRegistry!.cancelIdentityRegistration(terminalId),
      }),
      (supervisor) => supervisor.disposeAllAndWait(),
    )
    const sessionsPorts = installApplicationSessionsObservation(
      runtime,
      projectRegistry,
      hostCatalog,
      terminalSessionRegistry,
      ptySupervisor,
      rendererEvents,
    )
    documentReview = await installApplicationDocumentReviewRuntime(
      runtime,
      hostCatalog.local,
      rendererScopes,
```

</details>


---

<sub>55s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts (lines 260-518)

<details>
<summary>259 lines</summary>

```
      rendererScopes,
      ptySupervisor,
      terminalSessionRegistry,
      harnessProviders,
      harnessProfileStore,
    )
    const remoteImagePaste = runtime.own(
      'remote image paste coordinator',
      createElectronRemoteImagePasteCoordinator({
        ptys: ptySupervisor,
        resources: rendererScopes,
        getHost: (hostId) => hostCatalog?.hostById(hostId),
      }),
      (coordinator) => coordinator.dispose(),
    )
    const workspaceCleanup = createWorkspaceCleanup({
      ptys: ptySupervisor,
      resources: rendererScopes,
      sessions: terminalSessionRegistry,
      webPanes: webPaneRoutes,
      releaseHtmlPreviews: (root) => htmlPreviews.releaseWorkspace(root),
    })
    const removal = new WorkspaceRemovalCoordinator(projectRegistry, workspaceCleanup)
    workspaceCoordinator = runtime.own(
      'workspace coordinator',
      new WorkspaceCoordinator({
        registry: projectRegistry,
        discovery: {
          discover: (root) => gitWorker!.request(GIT_WORKTREES_TYPE, { root }),
          workspaceActivity: (root, relatedWorktreeRoots) =>
            gitWorker!.request(GIT_WORKSPACE_ACTIVITY_TYPE, {
              root,
              relatedWorktreeRoots,
            }),
        },
        removal,
        emitWatch: (event) => emit('project:watch', event),
        createWatch: (target, callbacks) => new ProjectWatchController(target, callbacks),
        shouldPoll: () =>
          !runtime.isShuttingDown && BrowserWindow.getAllWindows().length > 0,
        onError: (message, error) => console.error(message, error),
      }),
      (coordinator) => coordinator.dispose(),
    )
    const projects = new ProjectCoordinator({
      registry: projectRegistry,
      hosts: hostCatalog,
      workspaces: workspaceCoordinator,
      cleanup: workspaceCleanup,
      removal,
      onError: (message, error) => console.error(message, error),
      onHostControlDiagnostic: (event) => diagnostics.recordHostControl(event),
    })
    const gitMutations = new GitMutationCoordinator({
      registry: projectRegistry,
      worker: {
        pruneWorktrees: (root) => gitWorker!.request(GIT_PRUNE_WORKTREES_TYPE, { root }),
        switchBranch: (root, branch, relatedWorktreeRoots) =>
          gitWorker!.request(GIT_SWITCH_BRANCH_TYPE, {
            root,
            branch,
            relatedWorktreeRoots,
          }),
        fetch: (root) => gitWorker!.request(GIT_FETCH_TYPE, { root }),
        pull: (root, relatedWorktreeRoots) =>
          gitWorker!.request(GIT_PULL_TYPE, { root, relatedWorktreeRoots }),
      },
      workspaces: workspaceCoordinator,
      authorizations: gitMutationAuthorizations,
      removal,
      onError: (message, error) => console.error(message, error),
    })
    const terminalMoves = new TerminalWorkspaceMoveCoordinator({
      projects: projectRegistry,
      workspaces: workspaceCoordinator,
      sessions: terminalSessionRegistry,
      ptys: ptySupervisor,
      resources: rendererScopes,
      webPanes: webPaneRoutes,
      onError: (message, error) => console.error(message, error),
    })
    attentionBadge = runtime.own(
      'attention badge',
      new AttentionBadge((count) => {
        if (process.platform !== 'darwin' && process.platform !== 'linux') return false
        return app.setBadgeCount(count)
      }),
      (badge) => badge.clear(),
    )
    installTerminalIdentityPublication(runtime, ptySupervisor, rendererEvents)
    const withSshPresentation = <T>(owner: RendererOwner, operation: () => T): T => {
      if (!sshPrompter) throw new Error('SSH prompting is unavailable')
      return sshPrompter.runForOwner(owner, operation)
    }
    const projectCommands = createProjectCommands({
      projects,
      workspaces: workspaceCoordinator,
      git: gitMutations,
      withSshPresentation,
    })
    runtime.own(
      'IPC authority router',
      registerIpcHandlers({
        echoWorker,
        gitWorker,
        filenameSearch,
        projectFiles,
        projectFolderPicker: new FolderPicker(hostCatalog, projects, rendererScopes),
        documentReview: documentReview.coordinator,
        documentReviewDelivery: documentReview.delivery,
        getProject: () => registry.active,
        getHost: (hostId) => hostCatalog?.hostById(hostId),
        connectedHosts: () => hostCatalog?.connectedHosts() ?? [],
        getRegisteredWorkspaceRoot: (root) => registry.registeredWorkspaceRoot(root),
        revealLocalEntry: electronReveal(shell),
        getProjectState: () => registry.state(),
        listHosts: () => hostCatalog?.listHosts() ?? [],
        ...projectCommands,
        respondSshPrompt: (owner, id, answers) =>
          sshPrompter?.respond(owner, id, answers),
        rendererResources: rendererScopes,
        rendererReady: (owner, reportedGeneration) =>
          windowManager.rendererReady(owner, reportedGeneration) &&
          sshPrompter?.activateOwner(owner),
        getWorkbenchHealth: () => diagnostics.healthSnapshot(),
        acknowledgeWorkbenchHealth: (id) => diagnostics.acknowledgeHealth(id),
        diagnostics: diagnosticIpc,
        recordIpcContractDiagnostic: (event) => diagnostics.recordIpcContract(event),
        recordRenderContainment: (owner, batch) =>
          diagnostics.recordRenderContainment(owner, batch),
        ptySupervisor,
        terminalSessions: terminalSessionRegistry,
        sessionsObservation: sessionsPorts.observation,
        sessionsUsage: sessionsPorts.usage,
        terminalMoves,
        harnessProfiles: harnessProfileStore,
        harnessProbes: harnessProbeManager,
        remoteImagePaste,
        updateAttention: (owner, count) =>
          attentionBadge?.update(owner.id, count, owner.generation),
        updateWebPaneBindings: (owner, bindings) =>
          windowManager.updateWebPaneBindings(owner.id, bindings),
        updateWebPaneFullPage: (owner, paneId) =>
          windowManager.updateWebPaneFullPage(owner.id, paneId),
        htmlPreviews,
        webPanes: webPaneRoutes,
        openExternal: (url) => shell.openExternal(url),
        emit,
      }),
      (router) => router.dispose(),
    )
    createWindow() // Paint before background watch and Git discovery touches a slow directory.
    if (projectRegistry.active.host.connectionState === 'connected') {
      void workspaceCoordinator
        .replaceWatch(projectRegistry.active)
        .then(() => workspaceCoordinator?.refresh(projectRegistry!.active.projectId))
        .catch((error) => console.error('[workspace] initial discovery failed', error))
    }
    workspaceCoordinator.startPolling()
  }
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
  })
  app.on('before-quit', (event) => {
    if (runtime.isShutdown) return
    event.preventDefault()
    if (runtime.isShuttingDown) return
    diagnostics.recordApplication('application-shutdown-starting')
    void runtime
      .shutdown()
      .then(() => diagnostics.recordApplication('application-shutdown-completed'))
      .catch((error) => {
        diagnostics.recordApplication('application-shutdown-failed')
        console.error('[shutdown] workbench cleanup failed', error)
      })
      .finally(async () => {
        await diagnostics.dispose()
        app.quit()
      })
  })
  async function suspendWorkbenchSessions(): Promise<void> {
    await workspaceCoordinator?.stopWatch()
    await workspaceCoordinator?.settle()
    const roots =
      projectRegistry
        ?.state()
        .projects.flatMap((project) =>
          project.workspaces.map((workspace) => workspace.root),
        ) ?? []
    await Promise.all(roots.map((root) => rendererScopes.revokeWorkspace(root)))
    ptySupervisor?.disposeSessions()
    htmlPreviews.clear()
    await webPaneRoutes
      .closeAll()
      .catch((error) => console.error('[web-pane] suspend cleanup failed', error))
    sshPrompter?.cancelAll()
    await terminalSessionRegistry?.flush()
    await harnessProfileStore?.flush()
    await documentReview?.flush()
    await hostCatalog?.disconnectSshHosts()
  }
  async function shutdown(): Promise<void> {
    workspaceCoordinator?.stopPolling()
    await workspaceCoordinator
      ?.stopWatch()
      .catch((error) => console.error('[shutdown] watcher cleanup failed', error))
    await workspaceCoordinator?.settle()
  }
}
createWorkbenchEntry()
```

</details>


---

<sub>58s</sub>

### Copilot

Next, the runtime paths, harness providers, and keybindings.

---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime.ts

<details>
<summary>15 lines</summary>

```
import { join } from 'node:path'
import { app } from 'electron'

import { localPath } from '../shared'
import { configureApplicationRuntime } from './application-runtime-policy'
import { LocalHost } from './project-host/local-host'

/** The compiled application identity and storage authority, selected during module load. */
export const applicationRuntime = configureApplicationRuntime(
  app,
  __HVIR_BUILD_CHANNEL__,
  (path) => LocalHost.ensureBootstrapDirectory(localPath(path)),
)

/** Resolves one application-owned state file beneath the selected runtime root. */
export function applicationUserDataPath(name: string): string {
  return join(applicationRuntime.userDataRoot, name)
}
```

</details>


---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime-policy.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime-policy.ts

<details>
<summary>25 lines</summary>

```
import { join } from 'node:path'

import type { ApplicationBuildChannel } from '../shared'

export const SSH_ACCEPTANCE_USER_DATA_DIRECTORY = 'hvir-ssh-acceptance'

export interface ApplicationRuntime {
  readonly buildChannel: ApplicationBuildChannel
  readonly userDataRoot: string
}

interface ElectronApplicationPaths {
  getPath(name: 'appData' | 'userData'): string
  setPath(name: 'userData', path: string): void
}

/** Selects the one application-state authority before any storage owner is built. */
export function configureApplicationRuntime(
  paths: ElectronApplicationPaths,
  buildChannel: ApplicationBuildChannel,
  prepareUserDataRoot: (path: string) => void,
): ApplicationRuntime {
  if (buildChannel !== 'ssh-acceptance') {
    return { buildChannel, userDataRoot: paths.getPath('userData') }
  }
  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
  prepareUserDataRoot(userDataRoot)
  paths.setPath('userData', userDataRoot)
  return { buildChannel, userDataRoot }
}
```

</details>


---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/bundled-harness-providers.ts

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

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/keybindings.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/keybindings.ts

<details>
<summary>129 lines</summary>

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

</details>


---

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/harness-provider.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/harness-provider.ts

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

<sub>1m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/application-build-channel.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/application-build-channel.ts

<details>
<summary>13 lines</summary>

```
/** Closed build identities that may appear in local application evidence. */
export const APPLICATION_BUILD_CHANNELS = [
  'release',
  'development',
  'ssh-acceptance',
  'smoke',
] as const

export type ApplicationBuildChannel = (typeof APPLICATION_BUILD_CHANNELS)[number]

export function isApplicationBuildChannel(
  value: unknown,
): value is ApplicationBuildChannel {
  return APPLICATION_BUILD_CHANNELS.includes(value as ApplicationBuildChannel)
}
```

</details>


---

<sub>1m 3s</sub>

### Copilot

Now the provider definitions, to get display names and capabilities.

---

<sub>1m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/claude-code.ts

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

<sub>1m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/codex.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/codex.ts

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

<sub>1m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts

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

<sub>1m 5s</sub>

### `bash`

**Read remaining provider definitions**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers && for f in cursor.ts gemini.ts github-copilot.ts pi.ts; do echo "=== $f ==="; cat "$f"; done

<details>
<summary>206 lines</summary>

```
=== cursor.ts ===
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const cursorProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('cursor-cli'),
    displayName: 'Cursor CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    defaultProfile: {
      id: asHarnessProfileId('cursor-cli-default'),
      displayName: 'Cursor CLI',
      description:
        'Cursor Agent CLI. Launch-only while its beta session listing evolves.',
    },
    reservedArguments: ['--resume', 'resume', 'ls'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
=== gemini.ts ===
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const geminiProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('gemini-cli'),
    displayName: 'Gemini CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('gemini-cli-default'),
      displayName: 'Gemini CLI',
      description:
        'Gemini CLI. Launch-only; hvir never substitutes latest-session resume.',
    },
    reservedArguments: ['--resume', '-r'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(
      (line) => line && !line.startsWith('(node:') && !line.startsWith('(Use `node'),
    )
  const line = lines.at(-1)
  return line && line.length <= 160 ? line : undefined
}
=== github-copilot.ts ===
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const githubCopilotProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('github-copilot-cli'),
    displayName: 'GitHub Copilot CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('github-copilot-cli-default'),
      displayName: 'GitHub Copilot CLI',
      description:
        'Copilot CLI. Launch-only across versions without verified --session-id.',
    },
    reservedArguments: ['--session-id', '--resume', '-r', '--continue', '--connect'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({
    file: 'copilot',
    args: [],
    shellEnvironment: true,
  }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
=== pi.ts ===
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const piProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('pi'),
    displayName: 'Pi',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 1,
    defaultProfile: {
      id: asHarnessProfileId('pi-default'),
      displayName: 'Pi',
      description:
        'Pi coding agent. Launch-only until exact new-session identity is proven.',
    },
    reservedArguments: ['--session', '--fork', '--continue', '-c', '--resume', '-r'],
    // Pi remains launch-only, so do not claim artifact relocation semantics for
    // undocumented environment variables. Add these only alongside a verified
    // discovery or telemetry observer.
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>1m 11s</sub>

### Copilot

Next, the renderer shell (`App.tsx`) to understand the UI layout.

---

<sub>1m 12s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx (lines 1-140)

<details>
<summary>140 lines</summary>

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
```

</details>


---

<sub>1m 12s</sub>

### `bash`

**Find UI labels in App.tsx**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && grep -n "aria-label=\|title=\|<h[1-6]\|label:" src/renderer/src/App.tsx | head -80

<details>
<summary>7 lines</summary>

```
294:      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
444:          aria-label="Project rail"
448:          <nav className="rail-nav" aria-label="Project views">
542:              aria-label={
546:              title={treeCollapsed ? 'Restore file explorer' : 'Collapse file explorer'}
562:        <section className="viewer-panel" aria-label="File viewer">
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx (lines 420-686)

<details>
<summary>267 lines</summary>

```
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
        />
        <section className="viewer-panel" aria-label="File viewer">
          <div
            className={`viewer-groups${viewerSplit ? ' split' : ''}`}
            ref={viewerGroupsRef}
          >
            {renderViewerPane('primary', primaryTabs, primaryActiveTab, true)}
            {viewerSplit ? (
              <>
                <PaneResizer
                  orientation="vertical"
                  className="viewer-split-resizer"
                  label="Resize split viewers"
                  onDrag={(clientX) => {
                    const left =
                      viewerGroupsRef.current?.getBoundingClientRect().left ?? 0
                    setViewerPrimaryWidth(clientX - left)
                  }}
                  onNudge={(delta) => {
                    const current = viewerGroupsRef.current?.querySelector<HTMLElement>(
                      '.viewer-group-primary',
                    )
                    if (current) {
                      setViewerPrimaryWidth(current.getBoundingClientRect().width + delta)
                    }
                  }}
                  onReset={resetViewerPrimaryWidth}
                />
                {renderViewerPane('secondary', secondaryTabs, secondaryActiveTab, false)}
              </>
            ) : null}
          </div>
        </section>
        <PaneResizer
          orientation="horizontal"
          className="terminal-resizer"
          label="Resize terminal"
          onDragStart={() => {
            if (terminalMode !== 'restored') setTerminalMode('restored')
          }}
          onDrag={(clientY) => {
            const bottom = workbenchRef.current?.getBoundingClientRect().bottom ?? 0
            setTerminalHeight(bottom - clientY)
          }}
          onNudge={(delta) => {
            if (terminalMode !== 'restored') {
              if (
                (terminalMode === 'maximized' && delta < 0) ||
                (terminalMode === 'collapsed' && delta > 0)
              ) {
                setTerminalMode('restored')
              }
              return
            }
            const current =
              workbenchRef.current?.querySelector<HTMLElement>('.terminal-panel')
            if (current) setTerminalHeight(current.getBoundingClientRect().height + delta)
          }}
          onReset={layout.resetTerminalHeight}
          action={<TerminalLayoutControls mode={terminalMode} onMode={setTerminalMode} />}
        />
        <TerminalWorkspaceCollection
          state={projectState}
          runtime={terminalWorkspaces}
          terminalPresented={
            destination === 'workspace' &&
            terminalMode !== 'collapsed' &&
            !(webViewFocused && webViewActive)
          }
          railCompact={layout.terminalRailCompact}
          onRailCompact={layout.setTerminalRailCompact}
          onRollup={terminalAttention.updateRollup}
          onOpenPath={terminalPathActivation.activate}
          onOpenWebLink={openWebLink}
          preferences={terminalPreferences(settings)}
          onOpenSettings={() => overlays.openSettings()}
          onOpenTerminalSettings={() => overlays.openSettings('terminal')}
          onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
          onAddHarness={overlays.openAddHarnessSettings}
        />
      </main>
      <SessionsApplicationDestination
        active={destination === 'sessions'}
        runtime={terminalWorkspaces}
        onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
        onError={session.reportError}
      />
      {overlays.projectPickerOpen ? (
        <SessionDialog
          hosts={session.hosts}
          currentRoot={root}
          suspended={session.prompts.length > 0}
          onCancel={overlays.closeProjectPicker}
          onConnect={session.connectHost}
          onBrowse={session.browseHost}
          folderPicker={session.folderPicker}
          onDisconnect={session.disconnectHost}
          onOpen={session.openHost}
          onOpened={() => (setDestination('workspace'), overlays.closeProjectPicker())}
        />
      ) : null}
      {overlays.settingsOpen ? (
        <SettingsDialog
          theme={theme}
          settings={settings}
          workspaceRoot={root}
          projectRoot={session.activeProject?.registeredRoot}
          initialDestination={overlays.settingsDestination}
          onClose={overlays.closeSettings}
          onSave={(nextTheme, nextSettings) => {
            setAppTheme(nextTheme)
            setAppSettings(nextSettings)
            overlays.closeSettings()
          }}
        />
      ) : null}
      {session.prompts[0] ? (
        <SshPromptDialog
          key={session.prompts[0].id}
          prompt={session.prompts[0]}
          onAnswer={session.answerPrompt}
        />
      ) : null}
    </div>
  )
}
```

</details>


---

<sub>1m 28s</sub>

### Copilot

The UI has a projects bar, a Files/Git rail, split file viewers, a terminal panel, and a separate "Sessions" view. Next I'll look at web panes, document review, viewer modes, and settings.

---

<sub>1m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/web-pane.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/web-pane.ts

<details>
<summary>60 lines</summary>

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

</details>


---

<sub>1m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/document-review.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/document-review.ts (lines 1-120)

<details>
<summary>106 lines</summary>

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
```

</details>


---

<sub>1m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/viewer-types.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/viewer-types.ts

<details>
<summary>88 lines</summary>

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

</details>


---

<sub>1m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings-model.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings-model.ts

<details>
<summary>47 lines</summary>

```
import type { ComposerSubmitMode, KeybindingMap } from '../../../shared'
import type {
  TerminalCursorBlinkPolicy,
  TerminalCursorShape,
} from '../terminal/terminal-pane'

export type TerminalThemeOverride = 'app' | 'dark' | 'light'
export type TerminalRecoveryMode = 'prompt' | 'auto'
export type FontPreferenceMode = 'system' | 'custom'

export interface FontPreference {
  readonly mode: FontPreferenceMode
  readonly family: string
}

export interface TextTypography {
  readonly fontFamily: string
  readonly fontSize: number
}

export interface AppSettings {
  readonly idleThresholdMs: number
  readonly gitAutoFetchIntervalMs: number
  readonly terminalRecoveryMode: TerminalRecoveryMode
  readonly terminalTheme: TerminalThemeOverride
  readonly terminalLightThemeId: string
  readonly terminalDarkThemeId: string
  readonly terminalCursorShape: TerminalCursorShape
  readonly terminalCursorBlink: TerminalCursorBlinkPolicy
  readonly terminalLigatures: boolean
  readonly interfaceFont: FontPreference
  readonly monospaceFont: FontPreference
  readonly interfaceScale: number
  readonly terminalTextSize: number
  readonly composerSubmitMode: ComposerSubmitMode
  readonly keybindings: KeybindingMap
}

export interface TerminalPreferences {
  readonly idleThresholdMs: number
  readonly terminalRecoveryMode: TerminalRecoveryMode
  readonly terminalTheme: TerminalThemeOverride
  readonly terminalLightThemeId: string
  readonly terminalDarkThemeId: string
  readonly terminalCursorDefaults: {
    readonly shape: TerminalCursorShape
    readonly blink: TerminalCursorBlinkPolicy
  }
  readonly terminalLigatures: boolean
  readonly terminalTypography: TextTypography
  readonly composerSubmitMode: ComposerSubmitMode
}
```

</details>


---

<sub>1m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings.ts

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

<sub>1m 37s</sub>

### Copilot

Next I'll pull UI strings from the settings, sessions, document review, and web pane components.

---

<sub>1m 40s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings-navigation.ts

<details>
<summary>25 lines</summary>

```
export const SETTINGS_SECTIONS = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'git', label: 'Git' },
  { id: 'keybindings', label: 'Keybindings' },
  { id: 'harnesses', label: 'Harnesses' },
] as const

export type SettingsSection = (typeof SETTINGS_SECTIONS)[number]['id']

export type SettingsDestination =
  | { readonly section: SettingsSection; readonly intent?: undefined }
  | { readonly section: 'harnesses'; readonly intent: 'add-harness' }

export const DEFAULT_SETTINGS_DESTINATION: SettingsDestination = {
  section: 'appearance',
}

export function settingsDestination(
  section: SettingsSection = 'appearance',
): SettingsDestination {
  return { section }
}

export function addHarnessSettingsDestination(): SettingsDestination {
  return { section: 'harnesses', intent: 'add-harness' }
}

export function settingsSectionHeadingId(section: SettingsSection): string {
  return `settings-${section}-title`
}
```

</details>


---

<sub>1m 40s</sub>

### `bash`

**Extract document review UI strings**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src && echo "=== DocumentReview strings ===" && grep -ohE ">[^<>{}]{3,80}<|(aria-label|title|placeholder)=\"[^\"]{3,100}\"|'[A-Z][a-z][^']{6,100}'" document-review/DocumentReviewControls.tsx document-review/DocumentReviewDeliveryPanel.tsx document-review/DocumentReviewInlineSurface.tsx | sort -u | head -70

<details>
<summary>40 lines</summary>

```
=== DocumentReview strings ===
'Choose a source line or range first'
'Choose an Insert-supported terminal'
'Copy only'
'Copy review'
'Discard review'
'Enter Document review mode'
'Exit Document review mode'
'Insert one atomic bracketed paste without submitting'
'Insert review'
'Insert supported'
'Inserted'
'Review and prepare the feedback again before another send'
'Save or reload before capturing a source range'
'Send now supported'
'Send review now'
'Send to the first visible terminal'
'This provider is Copy-only'
'This provider/launch has no proven submission contract'
> Promise<
>Attention<
>Choose a live terminal…<
>Discard this review?<
>Exact destination<
>Lifecycle<
>No comments at this location.<
>Preparing exact review…<
>Provider<
>Review and send<
>Review<
>Terminal<
aria-label="Add comment for selected source lines"
aria-label="Document review comments"
aria-label="Document review"
aria-label="Exact review delivery preview"
aria-label="New review comment"
aria-label="Review handoff destination"
aria-label="Review handoff preview"
title="Document review mode"
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>1m 40s</sub>

### `bash`

**Extract sessions and web pane UI strings**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src && echo "=== Sessions strings ===" && grep -ohE ">[^<>{}]{3,80}<|(aria-label|title|placeholder)=\"[^\"]{3,100}\"|'[A-Z][a-z][^']{6,100}'" sessions/*.tsx | sort -u | head -60; echo "=== WebPane strings ===" && grep -ohE ">[^<>{}]{3,80}<|(aria-label|title|placeholder)=\"[^\"]{3,100}\"|'[A-Z][a-z][^']{6,100}'" dashboards/*.tsx | sort -u | head -40

<details>
<summary>49 lines</summary>

```
=== Sessions strings ===
'ArrowDown'
'Attaching the exact live terminal…'
'Attention'
'Opening exact terminal…'
'Opening…'
'Sessions changed. Review the refreshed row before opening it.'
'Sessions'
'The exact terminal changed before it could receive focus'
'The exact terminal could not be opened'
'The host is disconnected. Reconnect from the workspace before opening it.'
'The owning workspace is not available.'
'This session does not have the same live terminal anymore.'
'This session is no longer available.'
> Promise<
>Attention and activity<
>Filter<
>None<
>Project → worktree<
>Project<
>Title<
>Workspace<
aria-label="hvir sessions"
aria-label="Session collection controls"
aria-label="Sessions pages"
title="Loading sessions"
title="No hvir sessions"
title="No sessions match"
title="Sessions unavailable"
title="Updates paused"
=== WebPane strings ===
'Browser handoff for SSH panes needs a compatibility route'
'Full page'
'Open as web pane'
'Open in browser'
'Open in system browser'
'Restore workbench'
>No failures or console warnings recorded.<
>Recent pane events<
aria-label="Back"
aria-label="Forward"
aria-label="Reveal source terminal"
aria-label="Web pane diagnostics"
title="Back to terminal"
title="Back"
title="Diagnostics"
title="Forward"
title="Reload"
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>1m 44s</sub>

### Copilot

Now the web pane proxy, the SSH host implementation, and the terminal launch menu.

---

<sub>1m 46s</sub>

### `bash`

**Read web pane proxy headers**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main && echo "=== loopback-http-proxy head ===" && sed -n '1,60p' web-pane/loopback-http-proxy.ts && echo "=== web-pane-route-registry head ===" && sed -n '1,80p' web-pane/web-pane-route-registry.ts

<details>
<summary>129 lines</summary>

```
=== loopback-http-proxy head ===
import { randomBytes, timingSafeEqual } from 'node:crypto'
import { lookup } from 'node:dns/promises'
import { BlockList, connect as connectSocket, type Socket } from 'node:net'
import {
  Agent,
  createServer,
  request as requestHttp,
  type IncomingHttpHeaders,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from 'node:http'
import type { Duplex } from 'node:stream'

import {
  loopbackEndpointEquals,
  parseLoopbackHttpTarget,
  type LoopbackEndpoint,
  type WebPaneDiagnosticEvent,
} from '../../shared'
import type { ProjectHost } from '../project-host'

const MAX_PROXY_CONNECTIONS = 32
const MAX_PROXY_HEADER_BYTES = 16 * 1024
const PROXY_CONNECT_TIMEOUT_MS = 15_000
const blockedDirectAddresses = new BlockList()
for (const [network, prefix, family] of [
  ['0.0.0.0', 8, 'ipv4'],
  ['10.0.0.0', 8, 'ipv4'],
  ['100.64.0.0', 10, 'ipv4'],
  ['127.0.0.0', 8, 'ipv4'],
  ['169.254.0.0', 16, 'ipv4'],
  ['172.16.0.0', 12, 'ipv4'],
  ['192.168.0.0', 16, 'ipv4'],
  ['224.0.0.0', 3, 'ipv4'],
  ['::', 128, 'ipv6'],
  ['::1', 128, 'ipv6'],
  ['::ffff:0:0', 96, 'ipv6'],
  ['fc00::', 7, 'ipv6'],
  ['fe80::', 10, 'ipv6'],
  ['ff00::', 8, 'ipv6'],
] as const) {
  blockedDirectAddresses.addSubnet(network, prefix, family)
}

export interface ProxyCredentials {
  readonly username: string
  readonly password: string
  readonly realm: string
}

export interface LoopbackHttpProxyOptions {
  readonly host: ProjectHost
  readonly endpoint: LoopbackEndpoint
  readonly onDiagnostic?: (event: WebPaneDiagnosticEvent) => void
}

/**
 * An authenticated, pane-scoped HTTP proxy. It preserves the browser-visible
 * localhost origin while routing only the authorized loopback endpoint through
=== web-pane-route-registry head ===
import { randomUUID } from 'node:crypto'

import {
  hostPathEquals,
  parseLoopbackHttpTarget,
  type HostPath,
  type LoopbackHttpTarget,
  type WebPaneDiagnosticEvent,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import { LoopbackHttpProxy, type ProxyCredentials } from './loopback-http-proxy'

export const MAX_OPEN_WEB_PANES = 16
export const MAX_OPEN_WEB_PANES_PER_HOST = 8
export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'

export interface PrepareWebPaneSessionRequest {
  readonly partition: string
  readonly proxyPort: number
  readonly primaryUrl: string
}

export interface WebPaneRouteRegistryOptions {
  readonly prepareSession: (
    request: PrepareWebPaneSessionRequest,
  ) => Promise<() => Promise<void>>
  readonly destroyGuest: (guestId: number) => void
  readonly emitDiagnostic?: (
    ownerId: number,
    ownerGeneration: number,
    paneId: string,
    event: WebPaneDiagnosticEvent,
  ) => void
}

export interface OpenWebPaneRouteRequest {
  readonly ownerId: number
  readonly ownerGeneration?: number
  readonly sourceTerminalId: string
  readonly workspaceRoot: HostPath
  readonly host: ProjectHost
  readonly url: string
}

export interface OpenWebPaneRoute {
  readonly paneId: string
  readonly partition: string
  readonly url: string
  readonly origin: string
}

export type WebPaneNavigationDecision =
  | { readonly kind: 'allow'; readonly url: string }
  | { readonly kind: 'loopback'; readonly url: string }
  | { readonly kind: 'external'; readonly url: string }
  | { readonly kind: 'block' }

interface WebPaneRouteEntry extends OpenWebPaneRoute {
  readonly ownerId: number
  readonly ownerGeneration: number
  readonly sourceTerminalId: string
  readonly workspaceRoot: HostPath
  readonly hostId: string
  readonly target: LoopbackHttpTarget
  readonly proxy: LoopbackHttpProxy
  readonly disposeSession: () => Promise<void>
  guestId?: number
  attachmentClaimed: boolean
  attachmentUrl: string
}

/** Main-owned capability registry for the complete web-pane lifecycle. */
export class WebPaneRouteRegistry {
  private readonly entries = new Map<string, WebPaneRouteEntry>()
  private readonly pending = new Map<string, Promise<WebPaneRouteEntry>>()
  private readonly pendingHostCounts = new Map<string, number>()
  private readonly ownerAllGenerations = new Map<number, number>()
  private readonly ownerGenerations = new Map<string, number>()
  private readonly workspaceGenerations = new Map<string, number>()
  private readonly terminalGenerations = new Map<string, number>()
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>1m 46s</sub>

### `bash`

**Read SSH config, auth, trust**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host && echo "=== ssh-config ===" && cat ssh-config.ts && echo "=== ssh-auth head ===" && sed -n '1,80p' ssh-auth.ts && echo "=== ssh-host-trust head ===" && sed -n '1,50p' ssh-host-trust.ts

<details>
<summary>107 lines</summary>

```
=== ssh-config ===
import SSHConfig from 'ssh-config'

export interface SshAliasConfig {
  readonly alias: string
  readonly hostname: string
  readonly user: string
  readonly port: number
  readonly identityFiles: readonly string[]
}

export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
  const parsed = SSHConfig.parse(text)
  const aliases = parsed.flatMap((line): string[] => {
    if (!('param' in line) || !('config' in line)) return []
    const section = line
    if (section.param.toLowerCase() !== 'host') return []
    const value =
      typeof section.value === 'string'
        ? section.value
        : section.value.map((part) => part.val).join(' ')
    return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
  })
  return [...new Set(aliases)].map((alias) => {
    const values = parsed.compute(alias, { ignoreCase: true, matchExec: false })
    const one = (value: string | string[] | undefined): string | undefined =>
      Array.isArray(value) ? value[0] : value
    const hostname = one(values['hostname']) ?? alias
    const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
    const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
    const rawIdentity = values['identityfile']
    const identityFiles = (
      Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
    ).map((path) =>
      path
        .replace(/^~(?=\/|$)/, home)
        .replaceAll('%d', home)
        .replaceAll('%h', hostname)
        .replaceAll('%r', user),
    )
    return {
      alias,
      hostname,
      user,
      port: Number.isFinite(rawPort) ? rawPort : 22,
      identityFiles,
    }
  })
}
=== ssh-auth head ===
export interface SshPrompt {
  readonly hostId: string
  readonly kind:
    'password' | 'passphrase' | 'keyboard-interactive' | 'host-key' | 'host-key-changed'
  readonly title: string
  readonly instructions?: string
  readonly fingerprint?: string
  readonly previousFingerprint?: string
  readonly prompts: readonly { readonly text: string; readonly echo: boolean }[]
}

/** Presentation port for one revocable SSH connection generation. */
export interface SshAuthPrompter {
  prompt(request: SshPrompt, signal: AbortSignal): Promise<readonly string[] | undefined>
}
=== ssh-host-trust head ===
import type { HostPath } from '../../shared'
import type { ProjectHost } from './project-host'

type TrustMetadataHost = Pick<ProjectHost, 'readTextFile' | 'writeFile'>

export interface SshHostTrust {
  readonly trustedHostKey: () => string | undefined
  readonly rememberHostKey: (fingerprint: string) => Promise<void>
}

const VALID_ALIAS = /^[^\s]{1,255}$/
const VALID_FINGERPRINT = /^SHA256:[A-Za-z0-9+/]{20,}$/

/** Owns the alias-keyed local host-trust record, not host-key acceptance policy. */
export class SshHostTrustStore {
  private pendingWrite: Promise<void> = Promise.resolve()

  private constructor(
    private readonly host: TrustMetadataHost,
    private readonly file: HostPath,
    private fingerprints: Record<string, string>,
  ) {}

  static async load(host: TrustMetadataHost, file: HostPath): Promise<SshHostTrustStore> {
    try {
      const parsed: unknown = JSON.parse(await host.readTextFile(file))
      const fingerprints: Record<string, string> = {}
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        for (const [alias, fingerprint] of Object.entries(parsed)) {
          if (
            VALID_ALIAS.test(alias) &&
            typeof fingerprint === 'string' &&
            VALID_FINGERPRINT.test(fingerprint)
          ) {
            fingerprints[alias] = fingerprint
          }
        }
      }
      return new SshHostTrustStore(host, file, fingerprints)
    } catch {
      return new SshHostTrustStore(host, file, {})
    }
  }

  forAlias(alias: string): SshHostTrust {
    if (!VALID_ALIAS.test(alias)) throw new Error('Invalid SSH host alias')
    return {
      trustedHostKey: () => this.fingerprints[alias],
      rememberHostKey: (fingerprint) => this.remember(alias, fingerprint),
    }
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>1m 51s</sub>

### `bash` — Failed

**Check SSH config source and agent**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host && grep -n "\.ssh\|SSH_AUTH_SOCK\|agent\|config'" project-host-catalog.ts ssh-identity-source.ts ssh-host-options.ts ssh-host.ts | head -40; echo "=== loopback proxy doc ==="; sed -n '56,80p' ../web-pane/loopback-http-proxy.ts

```
Permission denied and could not request permission from user
```


---

<sub>1m 54s</sub>

### Copilot

That bash call was denied, so I'll switch to the built-in grep tool.

---

<sub>1m 56s</sub>

### `grep`

**\.ssh|SSH_AUTH_SOCK|agent:|'config'**

"\.ssh|SSH_AUTH_SOCK|agent:|'config'" (src/main/project-host)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-config.ts:14:    if (!('param' in line) || !('config' in line)) return []
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:56:        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:191:  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:807:            return { type: 'agent', username: config.user, agent: agentSocket }
```


---

<sub>1m 56s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/web-pane/loopback-http-proxy.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/web-pane/loopback-http-proxy.ts (lines 56-80)

<details>
<summary>22 lines</summary>

```
}

/**
 * An authenticated, pane-scoped HTTP proxy. It preserves the browser-visible
 * localhost origin while routing only the authorized loopback endpoint through
 * ProjectHost. Public HTTP resources use ordinary local networking.
 */
export class LoopbackHttpProxy {
  readonly credentials: ProxyCredentials = {
    username: randomBytes(24).toString('base64url'),
    password: randomBytes(32).toString('base64url'),
    realm: `hvir-${randomBytes(12).toString('hex')}`,
  }

  private readonly server: Server
  private readonly clients = new Set<Socket>()
  private readonly upstreams = new Set<Duplex>()
  private listeningPort: number | undefined
  private closed = false

  constructor(private readonly options: LoopbackHttpProxyOptions) {
    this.server = createServer(
      { maxHeaderSize: MAX_PROXY_HEADER_BYTES },
      (request, response) => {
        void this.proxyRequest(request, response)
```

</details>


---

<sub>2m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts (lines 30-80)

<details>
<summary>47 lines</summary>

```

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
```

</details>


---

<sub>2m 1s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts (lines 175-215)

<details>
<summary>38 lines</summary>

```
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
```

</details>


---

<sub>2m 7s</sub>

### Copilot

Next I'll check what a remote SSH host needs (watch service, exec commands).

---

<sub>2m 9s</sub>

### `bash`

**Read SSH watch service header**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host && sed -n '1,60p' ssh-watch-service.ts

<details>
<summary>56 lines</summary>

```
import {
  hostPath,
  type HostConnectionState,
  type HostId,
  type HostPath,
  type HostWatchTier,
  type WatchEvent,
  type WatchEventType,
} from '../../shared'
import type { Disposer, ExecStreamHandle, WatchOptions } from './project-host'
import {
  fileType,
  metadataStamp,
  remoteChild,
  sftpLstat,
  sftpReaddir,
  type SshFileAccess,
} from './ssh-file-access'

const GIT_PRIORITY_FILES = new Set(['HEAD', 'index', 'packed-refs'])

export interface SshWatchOptions {
  readonly pollIntervalMs?: number
  readonly watchdogIntervalMs?: number
  readonly refreshPulseIntervalMs?: number
  readonly slowScanIntervalMs?: number
  readonly maxSlowScanIntervalMs?: number
  readonly pollDirectoryBatchSize?: number
}

export interface SshWatchOwner {
  readonly hostId: HostId
  connectionState(): HostConnectionState
  watchTier(): HostWatchTier
  setWatchTier(tier: HostWatchTier): void
  onConnectionState(cb: (state: HostConnectionState) => void): Disposer
  execStream(command: string, args: readonly string[]): ExecStreamHandle
}

/** Connection-aware inotify/polling orchestration for one logical SshHost. */
export class SshWatchService {
  constructor(
    private readonly owner: SshWatchOwner,
    private readonly files: SshFileAccess,
    private readonly options: SshWatchOptions,
  ) {}

  watch(
    path: HostPath,
    onEvent: (event: WatchEvent) => void,
    opts: WatchOptions = {},
  ): Disposer {
    this.files.assertPath(path)
    if ((opts.additionalPaths?.length ?? 0) > 256) {
      throw new Error('Too many additional watch paths')
    }
    for (const candidate of opts.additionalPaths ?? []) this.files.assertPath(candidate)
    const watchedPaths = [path, ...(opts.additionalPaths ?? [])].filter(
      (candidate, index, values) =>
        values.findIndex((value) => value.path === candidate.path) === index,
<shellId: 13 completed with exit code 0>
```

</details>


---

<sub>2m 9s</sub>

### `grep`

**inotify|fswatch|sftp|exec\(|/bin/sh|command -v|python|poll**

"inotify|fswatch|sftp|exec\(|/bin/sh|command -v|python|poll" (src/main/project-host/ssh-host.ts)

<details>
<summary>14 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:71:  private tier: HostWatchTier = 'polling'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:229:    const result = await this.exec('sh', [
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:231:      'if [ -n "$SHELL" ] && [ -x "$SHELL" ]; then printf "%s\\n" "$SHELL"; elif command -v bash >/dev/null 2>&1; then command -v bash; else printf "/bin/sh\\n"; fi',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:235:      result.code === 0 && candidate?.startsWith('/') ? candidate : '/bin/sh'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:239:  async exec(
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:245:    // Connecting performs its own short capability probe through exec(). Do
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:254:              client.exec(
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:685:          await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:690:          ? 'inotify'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:691:          : 'polling'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:694:      // transport remains usable with the portable polling backend.
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:695:      this.tier = 'polling'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:904:            client.exec(remoteCommand(command, args, opts), (error, stream) =>
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:922:            client.exec(
```

</details>


---

<sub>2m 16s</sub>

### Copilot

Remote watching uses `inotifywait` when available and falls back to polling. Now the git engine, terminal recovery, and attention.

---

<sub>2m 17s</sub>

### `bash`

**Read git engine header**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/git && sed -n '1,50p' git-engine.ts

<details>
<summary>45 lines</summary>

```
import type {
  DiffBase,
  GitBlameRun,
  GitBranchModel,
  GitChanges,
  GitCommitDetail,
  GitDiffResponse,
  GitHistoryPage,
  HostPath,
  WorktreeDiscovery,
  WorkspaceActivityResult,
} from '../../shared'
import { GitBranchCapability } from './git-branches'
import { GitCommandContext, type GitHostPort } from './git-command-context'
import { GitDetailCapability } from './git-detail'
import { GitDiffCapability } from './git-diff'
import { GitHistoryCapability } from './git-history'
import { GitStatusCapability } from './git-status'
import { GitWorktreeCapability } from './git-worktrees'

export { GIT_FETCH_ARGS, GIT_PULL_ARGS } from './git-branches'
export { parseLocalBranches, parseWorktreeList } from './git-parsers'

/** Stable worker-facing façade over cohesive, host-local Git capabilities. */
export class GitEngine {
  private readonly worktreeCapability: GitWorktreeCapability
  private readonly statusCapability: GitStatusCapability
  private readonly branchCapability: GitBranchCapability
  private readonly diffCapability: GitDiffCapability
  private readonly historyCapability: GitHistoryCapability
  private readonly detailCapability: GitDetailCapability

  constructor(host: GitHostPort, projectRoot?: HostPath) {
    const context = new GitCommandContext(host, projectRoot)
    this.worktreeCapability = new GitWorktreeCapability(context)
    this.statusCapability = new GitStatusCapability(context)
    this.branchCapability = new GitBranchCapability(context, this.worktreeCapability)
    this.diffCapability = new GitDiffCapability(context)
    this.historyCapability = new GitHistoryCapability(context)
    this.detailCapability = new GitDetailCapability(context)
  }

  worktrees(projectRoot: HostPath): Promise<WorktreeDiscovery> {
    return this.worktreeCapability.discover(projectRoot)
  }

  pruneWorktrees(projectRoot: HostPath): Promise<WorktreeDiscovery> {
    return this.worktreeCapability.prune(projectRoot)
  }
<shellId: 14 completed with exit code 0>
```

</details>


---

<sub>2m 17s</sub>

### `grep`

**'(Restore|Resume|Fork|Split|Move|New terminal|Recover|Close)[^']{0,80}'**

"'(Restore|Resume|Fork|Split|Move|New terminal|Recover|Close)[^']{0,80}'" (src/renderer/src/terminal)

<details>
<summary>7 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/terminal-runtime-presentation.ts:42:        status: 'Resume unavailable · session data is missing',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/terminal-runtime-presentation.ts:46:      return { status: 'Fork unavailable · source conversation data is missing' }
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/terminal-workspace-model.ts:193:    status: 'Forking conversation…',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalMoveDialog.tsx:48:          label: 'Move terminal here and open',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRecoveryDialog.tsx:256:  return action === 'resume' ? 'Resume' : 'New session'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx:123:                  ? 'Move terminal, new worktree available'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx:124:                  : 'Move terminal to another worktree'
```

</details>


---

<sub>2m 21s</sub>

### `bash`

**Extract terminal UI labels**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal && grep -ohE "(label|title|aria-label)[:=] ?['\"][^'\"]{3,90}['\"]" TerminalContextMenu.tsx TerminalRail.tsx TerminalWorkspaceControls.tsx TerminalWorkspaceDialogs.tsx TerminalRecoveryDialog.tsx TerminalContextMeter.tsx harness-launch-menu.ts TerminalSearch.tsx TerminalDeck.tsx | sort -u | head -80

<details>
<summary>22 lines</summary>

```
aria-label="Close terminal search"
aria-label="Collapse terminal rail"
aria-label="Find in terminal"
aria-label="New terminal"
aria-label="Next terminal match"
aria-label="Open settings"
aria-label="Previous terminal match"
aria-label="Search terminal output"
aria-label="Split terminal"
aria-label="Terminal actions"
label="Resize split terminals"
title="Close search (Escape)"
title="Close terminal"
title="Collapse terminal rail"
title="Copy the current semantic prompt, command, or output block"
title="Move active terminal to another worktree"
title="New terminal"
title="Next match (Enter)"
title="Open a shell in the other terminal split"
title="Previous match (Shift+Enter)"
title="Settings"
<shellId: 15 completed with exit code 0>
```

</details>


---

<sub>2m 25s</sub>

### `bash`

**Extract terminal JSX text and menu items**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal && grep -ohE ">[A-Z][^<>{}]{2,60}<" TerminalContextMenu.tsx TerminalRail.tsx TerminalWorkspaceControls.tsx TerminalWorkspaceDialogs.tsx TerminalRecoveryDialog.tsx TerminalContextMeter.tsx TerminalDeck.tsx TerminalMoveDialog.tsx | sort -u | head -60; echo "=== context menu items ==="; grep -nE "label: '" TerminalContextMenu.tsx use-terminal-context-menu.ts terminal-context-menu-target.ts harness-launch-menu.ts 2>/dev/null | head -40

<details>
<summary>11 lines</summary>

```
>Browser state is not migrated.<
>Fork Conversation to New Terminal<
>From<
>Move this live terminal?<
>New<
>No retained terminals<
>Process and conversation stay live<
>Restore terminals<
>Terminals<
=== context menu items ===
<shellId: 16 completed with exit code 0>
```

</details>


---

<sub>2m 32s</sub>

### Copilot

Now the development side: the runtime check script, the electron-vite config, and the vitest config.

---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/check-terminal-runtime.mts

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

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/electron.vite.config.ts

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

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/vitest.config.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/vitest.config.ts

<details>
<summary>12 lines</summary>

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

</details>


---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/check-seams.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/check-seams.sh

<details>
<summary>99 lines</summary>

```
#!/usr/bin/env bash
#
# Grep-level enforcement of the architectural seams (AGENTS.md "Respect the
# seams"). This is a coarse backstop that complements the precise ESLint rules
# in eslint.config.mjs — it catches a violation even if lint is skipped, and
# documents the invariants in one readable place.
#
set -uo pipefail

fail=0
SRC="src"

report() {
  # $1 = human description, $2 = matching lines (empty = ok)
  if [[ -n "$2" ]]; then
    printf '\033[31m✗ %s\033[0m\n' "$1"
    printf '%s\n' "$2" | sed 's/^/    /'
    fail=1
  else
    printf '\033[32m✓ %s\033[0m\n' "$1"
  fi
}

# 1. ipcRenderer only in the preload bridge.
hits=$(grep -rnw 'ipcRenderer' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/preload/' || true)
report "ipcRenderer used only in src/preload/" "$hits"

# 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/project-host/local-host.ts' || true)
report "host primitives imported only in local-host.ts" "$hits"

# 3. PTY spawning (host.spawnPty call sites) only in the supervisor.
hits=$(grep -rnE '\.spawnPty\(' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/pty/pty-supervisor.ts' || true)
report "host.spawnPty() called only in pty-supervisor.ts" "$hits"

# 4. Bundled harness identities stay inside provider-owned main modules. Shared
# IPC, persistence, and renderer code treat provider ids as opaque catalog data.
hits=$(grep -rnE "['\"](plain-shell|claude-code|codex)['\"]" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/harness/' || true)
report "bundled harness ids used only in src/main/harness/" "$hits"

# 5. Raw loopback streams are transport for the main-owned pane proxy, never a
# renderer, IPC, harness, or feature-level socket API.
hits=$(grep -rnE '\.connectLoopback\(' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/web-pane/loopback-http-proxy.ts' || true)
report "host.connectLoopback() called only in the web-pane proxy" "$hits"

# 6. ipcMain is a single transport choke point. Feature registrars receive the
# narrow IpcRegistrar capability and cannot install handlers directly.
hits=$(grep -rnw 'ipcMain' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/ipc/authority-router.ts' || true)
report "ipcMain used only in the IPC authority router" "$hits"

# 7. Feature registrars cannot bypass central renderer-owner or canonical-path
# authority resolution.
hits=$(grep -rnE '\.currentOwner\(|\.realpath\(|getRegisteredWorkspaceRoot|\basHostId\b|\bdirnameHostPath\b' \
  'src/main/ipc/features' --include='*.ts' --include='*.tsx' --include='*.mts' || true)
report "IPC features use central owner/path authority" "$hits"

# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
# consumers continue to depend on ProjectHost and host-qualified paths only.
hits=$(grep -rnE "from ['\"]ssh2['\"]|import\(['\"]ssh2['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -vE '^src/main/project-host/ssh-(client-lifecycle|host|host-options|file-access|exclusive-create|project-file-transfer|abort|transport-pool|watch-service)\.ts' || true)
report "ssh2 details stay inside the SshHost adapter" "$hits"

# 9. Host-local collaborators share SshHost's authentication lifecycle. They
# receive authenticated clients through narrow ports and never construct one.
hits=$(grep -rnE '\bnew Client\(|clientFactory' \
  src/main/project-host/ssh-{client-lifecycle,file-access,exclusive-create,project-file-transfer,transport-pool,watch-service}.ts || true)
report "SSH collaborators do not create independent clients" "$hits"

# 10. The collaborators are private composition details, not parallel
# ProjectHost façades exposed to consumers through the package barrel.
hits=$(grep -nE 'Ssh(FileAccess|TransportPool|WatchService|AuthenticationLifecycle)|startSshAuthentication' \
  src/main/project-host/index.ts || true)
report "only SshHost is exported as the remote host façade" "$hits"

# 11. The project-host catalog is the only main-process owner allowed to
# construct SSH hosts. Project persistence/workflows cannot import concrete host
# owners, and the catalog cannot depend on project persistence/workflows.
hits=$({
  grep -rnE '\bnew SshHost\(' src/main --include='*.ts' --include='*.mts' \
    | grep -v '^src/main/project-host/project-host-catalog.ts' || true
  grep -nE "RendererSshPrompter|SshHostTrustStore|LocalSshIdentitySource|parseSshConfig|known-hosts|identityFileCandidates|from ['\"]\./project-host/(ssh-host|ssh-host-trust|ssh-identity-source|renderer-ssh-prompter|project-host-catalog)['\"]" \
    src/main/project-registry.ts src/main/project-coordinator.ts || true
  grep -nE "from ['\"][^'\"]*(project-registry|project-coordinator)['\"]" \
    src/main/project-host/project-host-catalog.ts src/main/project-host/project-host.ts || true
  sed -n '/^export class ProjectRegistry/,$p' src/main/project-registry.ts \
    | grep -nE '^  (public )?(async )?(listHosts|hostById|connectedHosts|connectHost|disconnectHost|disconnectSshHosts|browseHost)[(:=]' || true
})
report "SSH construction and implementation owners stay in the host catalog" "$hits"

# 12. Git capability modules share one command/cancellation/root policy. No
# capability constructs a git invocation against the host directly.
hits=$(grep -rnF ".exec('git'" src/main/git --include='*.ts' --include='*.mts' \
  | grep -vE '^src/main/git/(git-command-context|worker-host-broker)\.ts' || true)
report "Git commands use the shared command context" "$hits"

# 13. The utility-process proxy implements only Git's exact exec/read/metadata port,
# rather than pretending to be a complete ProjectHost with never placeholders.
hits=$(grep -nE 'implements ProjectHost|execStream\(\): never|spawnPty\(\): never|connectLoopback\(\): never|readFile\(\): never|writeFile\(\): never|readdir\(\): never|stat\(\): never|realpath\(\): never|watch\(\): never' \
  src/workers/git-worker.ts || true)
report "Git worker proxy exposes only exact exec, read, and metadata operations" "$hits"

if [[ "$fail" -ne 0 ]]; then
  printf '\n\033[31mseam check failed\033[0m\n'
  exit 1
fi
printf '\nseam check passed\n'
```

</details>


---

<sub>2m 39s</sub>

### Copilot

`check-seams.sh` refers to an `AGENTS.md` that isn't in this checkout either. I'll check the local toolchain and run the cheap checks to see which developer commands actually work here.

---

<sub>2m 41s</sub>

### `bash`

**Check toolchain and installed deps**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node --version; npm --version; git remote -v; echo "---"; ls node_modules/.bin | grep -E "^(electron|electron-vite|vitest|tsc|eslint|install-electron|electron-builder|stryker)$"; echo "--- ghostty ---"; ls node_modules/ghostty-web 2>/dev/null | head; echo "--- electron dist ---"; ls node_modules/electron/ 2>/dev/null | head -20

<details>
<summary>30 lines</summary>

```
v26.5.0
11.17.0
---
electron
electron-builder
electron-vite
eslint
install-electron
stryker
tsc
vitest
--- ghostty ---
dist
ghostty-vt.wasm
LICENSE
package.json
README.md
--- electron dist ---
abi_version
checksums.json
cli.js
dist
electron.d.ts
index.js
install.js
LICENSE
package.json
path.txt
README.md
<shellId: 17 completed with exit code 0>
```

</details>


---

<sub>2m 46s</sub>

### `bash`

**Run seam, ADR, and runtime checks**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && echo "=== check-seams ===" && (npm run --silent check-seams 2>&1 | tail -20); echo "exit=$?"; echo "=== check-adrs ===" && (npm run --silent check-adrs 2>&1 | tail -8); echo "=== terminal runtime ===" && (node scripts/check-terminal-runtime.mts 2>&1 | tail -5; echo "exit=$?")

<details>
<summary>27 lines</summary>

```
=== check-seams ===
✓ ipcRenderer used only in src/preload/
✓ host primitives imported only in local-host.ts
✓ host.spawnPty() called only in pty-supervisor.ts
✓ bundled harness ids used only in src/main/harness/
✓ host.connectLoopback() called only in the web-pane proxy
✓ ipcMain used only in the IPC authority router
✓ IPC features use central owner/path authority
✓ ssh2 details stay inside the SshHost adapter
✓ SSH collaborators do not create independent clients
✓ only SshHost is exported as the remote host façade
✓ SSH construction and implementation owners stay in the host catalog
✓ Git commands use the shared command context
✓ Git worker proxy exposes only exact exec, read, and metadata operations

seam check passed
exit=0
=== check-adrs ===
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/ffb55c2b/hvir/docs/adr'
}

Node.js v26.5.0
=== terminal runtime ===
exit=0
<shellId: 18 completed with exit code 0>
```

</details>


---

<sub>2m 55s</sub>

### Copilot

`check-seams` passes, but `check-adrs` fails with ENOENT because `docs/adr/` is missing, so `npm run verify` can't pass in this checkout. Next I'll look at the architecture check and the typecheck.

---

<sub>2m 55s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-hotspots.mjs.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-hotspots.mjs

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()

```


---

<sub>2m 55s</sub>

### `bash`

**Run architecture report locally**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && (timeout 120 npm run --silent architecture:report 2>&1 | tail -15); echo "exit=${PIPESTATUS[0]}"

```
/bin/bash: timeout: command not found
exit=0
<shellId: 19 completed with exit code 0>
```


---

<sub>3m 4s</sub>

### `bash`

**Run architecture report locally**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npm run --silent architecture:report 2>&1 | tail -15; echo "exit=${PIPESTATUS[0]}"

<details>
<summary>17 lines</summary>

```
src/shared/harness-provider.ts:78 --type-only/import-type--> src/shared/harness-profile.ts
loading: packages/rename-noreplace/index.js:5 require native-build-output -> packages/rename-noreplace/build/Release/rename_noreplace.node
loading: scripts/inspect-packaged-runtime.mts:298 require nonliteral
loading: scripts/project-management/read-contributor-status.ts:123 module-runner discovery -> scripts/capture-contributor-usage.mts
loading: src/main/project-host/local-host.ts:947 require nonliteral
loading: src/main/project-host/local-host.ts:959 require nonliteral
loading: src/main/worker-host.ts:51 utility-process nonliteral
loading: src/renderer/src/main.tsx:5 import asset -> src/renderer/src/styles.css
loading: src/renderer/src/main.tsx:6 import asset -> src/renderer/src/themes.css
loading: src/renderer/src/viewer/RenderedView.tsx:47 worker process-entry -> src/renderer/src/viewer/json.worker.ts
loading: src/renderer/src/viewer/RenderedView.tsx:54 worker process-entry -> src/renderer/src/viewer/csv.worker.ts
loading: src/renderer/src/viewer/highlight-worker.ts:4 worker process-entry -> src/renderer/src/viewer/highlight.worker.ts
loading: src/renderer/src/viewer/markdown-client.ts:16 worker process-entry -> src/renderer/src/viewer/markdown.worker.ts
loading: test/local-host.test.ts:173 discovery discovery
0 dependency violation(s)
exit=0
<shellId: 20 completed with exit code 0>
```

</details>


---

<sub>3m 10s</sub>

### Copilot

`architecture:report` works locally. I'll read how `--enforce` behaves before describing it.

---

<sub>3m 10s</sub>

### `grep`

**export async function runArchitectureCommand**

"export async function runArchitectureCommand" (scripts/architecture-hotspots.mts)

<details>
<summary>33 matches</summary>

```
[grep content: 1 matches across 1 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/scripts]

architecture-hotspots.mts (1 match(es)):
  80: export async function runArchitectureCommand(root = repositoryRoot): Promise<void> {
  81-   try {
  82-     const enforce = process.argv.includes('--enforce')
  83-     let collected
  84-     if (enforce) {
  85-       const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
  86-       const context = await resolveArchitectureContext(root, api)
  87-       collected = await authorizeCandidate({
  88-         root,
  89-         context,
  90-         loadIntegration: (merge, epic) =>
  91-           loadArchitectureIntegration(root, api, merge, epic),
  92-       })
  93-       await requireCurrentRemovalIssues(api, collected.policy)
  94-       const current = await resolveArchitectureContext(root, api)
  95-       if (current.base !== context.base || current.head !== context.head)
  96-         throw new Error('Architecture target changed during verification; reverify')
  97-     } else collected = collectArchitectureHotspots(root)
  98-     const { policy, inventory, ...report } = collected
  99-     const dependencies = collectModuleGraph(root, inventory, policy)
  100-     dependencies.violations.push(...(await checkModuleDirections(dependencies, root)))
  101-     console.log(
  102-       process.argv.includes('--json')
  103-         ? JSON.stringify({ ...report, dependencies }, null, 2)
  104-         : `${formatReport(report)}\n${formatModuleGraph(dependencies)}`,
  105-     )
  106-     if (enforce && (report.violations.length || dependencies.violations.length))
  107-       process.exitCode = 1
  108-   } catch (error) {
  109-     console.error(
  110-       `Architecture verification failed: ${error instanceof Error ? error.message : 'Unknown failure'}`,
```

</details>


---

<sub>3m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-hotspots.json.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-hotspots.json (lines 1-40)

<details>
<summary>40 lines</summary>

```
{
  "version": 2,
  "comfortLines": 500,
  "defaultMaximum": 1000,
  "roots": [
    "src",
    "test",
    "scripts",
    "packages",
    "build",
    ".github",
    ".githooks",
    ".agents",
    ".claude"
  ],
  "extensions": [
    ".ts",
    ".tsx",
    ".mts",
    ".cts",
    ".js",
    ".jsx",
    ".mjs",
    ".cjs",
    ".css",
    ".sh",
    ".bash",
    ".zsh",
    ".c",
    ".h"
  ],
  "budgets": [
    {
      "path": "src/main/git/git-engine.ts",
      "kind": "stricter",
      "maxLines": 128,
      "owner": "GitEngine facade",
      "rationale": "GitEngine is the stable facade over capability modules and the shared command context; its lower named cap prevents the facade from reabsorbing capability implementations.",
      "reconsiderWhen": "The facade starts executing Git capability policy rather than delegating through its shared command context."
    },
```

</details>


---

<sub>3m 16s</sub>

### Copilot

`architecture:check` needs the canonical GitHub repo and a token, so it's a CI gate. I'll run typecheck and the unit tests in the background while I keep exploring.

---

<sub>3m 17s</sub>

### `bash`

**Run TypeScript typecheck**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npm run typecheck 2>&1 | tail -15; echo "typecheck exit=${PIPESTATUS[0]}"

```
<command started in background with shellId: typecheck>
```


---

<sub>3m 17s</sub>

### `bash`

**Run vitest unit tests**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npm test 2>&1 | tail -30; echo "test exit=${PIPESTATUS[0]}"

```
<command started in background with shellId: unittests>
```


---

<sub>3m 25s</sub>

### Copilot

While those run, I'll look at harness profiles, the composer-submit behavior, and diagnostics.

---

<sub>3m 26s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/harness-profile.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/harness-profile.ts

<details>
<summary>101 lines</summary>

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

</details>


---

<sub>3m 26s</sub>

### `bash`

**Read Claude keybindings configurator**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness && sed -n '1,60p' claude-keybindings.ts

<details>
<summary>53 lines</summary>

```
import {
  hostPath,
  joinHostPath,
  type ComposerSubmitMode,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'

const KEYBINDINGS_FILE = 'keybindings.json'
const STATE_FILE = '.hvir-keybindings-state.json'
const MAX_KEYBINDINGS_BYTES = 1024 * 1024
const MAX_STATE_BYTES = 32 * 1024
const KEYBINDINGS_SCHEMA = 'https://www.schemastore.org/claude-code-keybindings.json'
const KEYBINDINGS_DOCS = 'https://code.claude.com/docs/en/keybindings'
const MANAGED_ACTIONS = {
  enter: 'chat:newline',
  'ctrl-enter': 'chat:submit',
  'shift-enter': 'chat:submit',
} as const

type ManagedKey = keyof typeof MANAGED_ACTIONS
const MANAGED_KEYS = ['enter', 'ctrl-enter', 'shift-enter'] as const
const LEGACY_MANAGED_KEYS = ['enter', 'ctrl-enter'] as const
const FILE_KEYS: Readonly<Record<ManagedKey, string>> = {
  enter: 'enter',
  'ctrl-enter': 'ctrl+enter',
  'shift-enter': 'shift+enter',
}
type BindingValue = string | null
type JsonObject = Record<string, unknown>

interface BindingSlot {
  readonly block: JsonObject
  readonly bindings: JsonObject
  readonly key: string
}

interface BindingSnapshot {
  readonly target: ManagedKey
  readonly key: string
  readonly existed: boolean
  readonly value?: BindingValue
}

interface ActiveState {
  readonly version: 1 | 2 | 3
  readonly active: true
  readonly createdChatBlock: boolean
  readonly createdKeybindingsFile: boolean
  readonly snapshots: readonly BindingSnapshot[]
}

interface InactiveState {
  readonly version: 1 | 2 | 3
  readonly active: false
}

type ConfigurationState = ActiveState | InactiveState

interface OptionalFile {
<shellId: 21 completed with exit code 0>
```

</details>


---

<sub>3m 26s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/composer-submit.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/composer-submit.ts

```
export type ComposerSubmitMode = 'enter' | 'ctrl-enter'

```


---

<sub>3m 32s</sub>

### `bash`

**Read composer submit consent dialog text**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings && sed -n '1,200p' ComposerSubmitConsentDialog.tsx | grep -vE "^\s*(import|export type|//)" | grep -E "[A-Za-z]{4,} [a-z]{2,}" | head -40

<details>
<summary>16 lines</summary>

```
export function ComposerSubmitConsentDialog({
  readonly onCancel: () => void
  readonly onConfirm: () => void
        { label: 'Allow this change', kind: 'primary', onSelect: onConfirm },
      <h3 id="composer-submit-consent-title">Allow a Claude configuration change?</h3>
        To keep this behavior consistent, hvir needs to update the Enter, Ctrl+Enter, and
        Shift+Enter Chat bindings in Claude&apos;s <code>keybindings.json</code> on every
        machine you connect to hvir, now and later while this setting is enabled.
        Other Claude bindings are preserved. hvir stores the three previous values and
        whether the keybindings file already existed in{' '}
        <code>.hvir-keybindings-state.json</code> in Claude&apos;s config directory so
        disabling this setting can restore them exactly. Nothing changes until you save
        Claude detects the keybinding update live. Shift+Enter submits in supported
        terminals outside hvir. Open Codex sessions keep their launch-time behavior until
        you restart them.
<shellId: 22 completed with exit code 0>
```

</details>


---

<sub>3m 32s</sub>

### `bash`

**Extract settings section UI text**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections && grep -ohE ">[^<>{}]{4,140}<|(label|title|aria-label|description|hint)[:=] ?['\"][^'\"]{4,140}['\"]" TerminalSettings.tsx GitSettings.tsx AppearanceSettings.tsx KeybindingsSettings.tsx | sort -u | head -70

<details>
<summary>40 lines</summary>

```
>Always dark<
>Always light<
>App theme<
>Ask which terminals to restore<
>Blinking default<
>Block<
>Cursor blinking<
>Cursor shape<
>Dark<
>Every 15 minutes<
>Every 30 minutes<
>Every 5 minutes<
>Every minute<
>Follow app theme<
>Font ligatures<
>Git auto-fetch<
>Hollow block<
>Idle-after-output threshold<
>Interface scale<
>Keybinding overrides (JSON)<
>Light<
>Message submission<
>On app start<
>Presentation<
>Restore all terminals automatically<
>Steady default<
>Terminal colors<
>Terminal text size<
>Terminal-controlled<
>Underline<
description="Choose how often hvir refreshes remote repository information."
description="Choose how the workbench and its terminals present your workspace."
description="Control message submission, attention timing, and startup recovery."
description="Override workbench commands with explicit, portable keyboard strokes."
label="Interface font"
label="Monospace font"
title="Appearance"
title="Keybindings"
title="Terminal"
<shellId: 23 completed with exit code 0>
```

</details>


---

<sub>3m 35s</sub>

### Copilot

Next, the Sessions overview and usage telemetry.

---

<sub>3m 36s</sub>

### `bash`

**Read sessions projection types**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src && sed -n '1,80p' shared/sessions-projection.ts

<details>
<summary>70 lines</summary>

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
<shellId: 24 completed with exit code 0>
```

</details>


---

<sub>3m 36s</sub>

### `bash`

**Read harness usage types**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src && sed -n '1,60p' shared/harness-usage.ts

<details>
<summary>31 lines</summary>

```
/** Provider-neutral cumulative token-usage vocabulary. */

export const HARNESS_USAGE_TOKEN_COUNTER_NAMES = [
  'freshInputTokens',
  'cacheReadInputTokens',
  'cacheWriteInputTokens',
  'outputTokens',
  'reasoningTokens',
] as const

export type HarnessUsageCounterName = (typeof HARNESS_USAGE_TOKEN_COUNTER_NAMES)[number]

export const HARNESS_USAGE_ADDITIVE_TOKEN_COUNTER_NAMES = [
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[0],
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[1],
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[2],
  HARNESS_USAGE_TOKEN_COUNTER_NAMES[3],
] as const

export type HarnessUsageCounters = Readonly<
  Partial<Record<HarnessUsageCounterName, number>>
>

export interface HarnessUsageValue extends HarnessUsageCounters {
  /** Present only when every additive category has an exact safe-integer value. */
  readonly normalizedTokenTotal?: number
}
export const HARNESS_USAGE_UNAVAILABLE_REASONS = [
  'invalid-session-identity',
  'artifact-unavailable',
  'artifact-too-large',
  'usage-unavailable',
] as const
export type HarnessUsageUnavailableReason =
  (typeof HARNESS_USAGE_UNAVAILABLE_REASONS)[number]
<shellId: 25 completed with exit code 0>
```

</details>


---

<sub>3m 36s</sub>

### Notification

Shell "Run TypeScript typecheck" completed

---

<sub>3m 38s</sub>

### `read_bash`

**Waiting up to 1 second for command output**

<details>
<summary>Arguments</summary>

```json
{
  "shellId": "typecheck",
  "delay": 1
}
```

</details>

<details>
<summary>8 lines</summary>

```
> hvir@0.2.3 typecheck
> npm run typecheck:node && npm run typecheck:web


> hvir@0.2.3 typecheck:node
> tsc --noEmit -p tsconfig.node.json


> hvir@0.2.3 typecheck:web
> tsc --noEmit -p tsconfig.web.json

typecheck exit=0
<shellId: typecheck completed with exit code 0>
```

</details>


---

<sub>3m 42s</sub>

### Copilot

Typecheck passes. While the tests run, I'll check diagnostics reports (to confirm they're local-only), terminal recovery, and attention.

---

<sub>3m 44s</sub>

### `bash`

**Inspect diagnostic report storage and dialog**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src && sed -n '1,40p' main/diagnostics/diagnostic-report-storage.ts; echo "=== dialog text ==="; grep -ohE ">[^<>{}]{6,160}<|'[A-Z][^']{10,140}'" renderer/src/diagnostics/DiagnosticReportDialog.tsx | sort -u | head -30

<details>
<summary>68 lines</summary>

```
import {
  DIAGNOSTIC_REPORT_RETENTION_HOURS,
  MAX_DIAGNOSTIC_REPORT_BYTES,
  isDiagnosticOpaqueId,
  joinHostPath,
  type DiagnosticReportArtifact,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import { serializeDiagnosticReportArtifact } from '../../shared'

const REPORT_PREFIX = 'hvir-diagnostic-report-'
const REPORT_SUFFIX = '.json'
const MAX_TEMPORARY_REPORTS = 16

/** App-local bounded temporary report storage; paths never enter report content. */
export class DiagnosticReportStorage {
  private mutation = Promise.resolve()

  constructor(
    private readonly host: Pick<
      ProjectHost,
      'readdir' | 'stat' | 'writeFile' | 'removeFile'
    >,
    private readonly root: HostPath,
    private readonly now: () => number = Date.now,
  ) {}

  async write(reportId: string, artifact: DiagnosticReportArtifact): Promise<void> {
    const serialized = serializeDiagnosticReportArtifact(artifact)
    if (Buffer.byteLength(serialized, 'utf8') > MAX_DIAGNOSTIC_REPORT_BYTES) {
      throw new ReportStorageTooLargeError()
    }
    const path = this.file(reportId)
    await this.mutate(async () => {
      await this.host.writeFile(path, serialized)
      try {
        await this.cleanupUnlocked(path)
      } catch (error) {
        await this.removeUnlocked(path).catch(() => undefined)
=== dialog text ===
'Capture masked screenshot'
'Capturing once and masking owned content surfaces…'
'Choose an explicit local destination…'
'Exact reviewed artifact copied.'
'Exact reviewed artifact saved.'
'Local diagnostic storage is unavailable.'
'Local evidence changed while the report was being prepared. Try again.'
'Preparing bounded local report…'
'Replace screenshot'
'Report exceeded its fixed local size bound.'
'Review every structured field before Copy or Save.'
'Save cancelled; the temporary report is unchanged.'
'Screenshot capture failed; the structured report is unchanged.'
'Screenshot included. Inspect the exact image before Copy or Save.'
'Screenshot unavailable: the owned-surface mask inventory exceeded its bound.'
'The report request was rejected by its closed schema.'
'The requested local action is unavailable.'
'The temporary report is no longer available.'
'This report belongs to an earlier renderer generation.'
'Writing the reviewed artifact to the clipboard…'
>Current lifetime<
>Dimensions<
>Exact structured fields<
>Local, bounded, and never sent to a harness automatically.<
>Masked surfaces<
>Media type<
>No screenshot is captured by default.<
>Optional screenshot<
>Preceding lifetime<
>Review diagnostic report<
<shellId: 26 completed with exit code 0>
```

</details>


---

<sub>3m 44s</sub>

### `bash`

**Extract recovery and health UI text**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src && grep -ohE ">[^<>{}]{6,160}<|'[A-Z][^']{10,140}'" terminal/TerminalRecoveryDialog.tsx health/WorkbenchHealthControl.tsx | sort -u | head -40

<details>
<summary>32 lines</summary>

```
'Authentication needed'
'Bounded local evidence'
'Cannot restore'
'Capability unavailable'
'Delete local evidence'
'Deleting evidence…'
'Durable evidence unavailable'
'Executable missing'
'Host disconnected'
'Memory-only evidence'
'New session'
'Probe failed'
'Probe timed out'
'React error boundary'
'Render failure contained'
'Renderer became unresponsive'
'Renderer exited unexpectedly'
'Version incompatible'
'Version unknown'
'Window manager'
'Workbench document failed to load'
'Workbench health: loading'
'Workbench health: no unresolved faults'
> Promise<
>): Promise<
>Durable journaling is disabled in this build.<
>Loading local evidence details…<
>Local diagnostic evidence<
>No workbench faults observed.<
>Restore terminals<
>Workbench health<
<shellId: 27 completed with exit code 0>
```

</details>


---

<sub>3m 50s</sub>

### Copilot

Next, terminal file links, image paste, and the HTML preview.

---

<sub>3m 50s</sub>

### `bash`

**Read file link, image paste, HTML preview**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src && sed -n '1,30p' renderer/src/terminal/terminal-file-link.ts; echo "=== remote-image-paste ==="; sed -n '1,40p' main/harness/remote-image-paste.ts | grep -E "^\s*(/\*\*|\*|//)" ; echo "=== html preview ==="; sed -n '1,40p' main/html-preview-protocol.ts | grep -E "^\s*(/\*\*|\*|//)|scheme|Scheme"

<details>
<summary>37 lines</summary>

```
import { fileUriPath } from '../../../shared/file-uri'
import {
  hostPath,
  joinHostPath,
  parseLoopbackHttpTarget,
  type HostPath,
} from '../../../shared'

export interface TerminalFileLink {
  readonly target: string
  readonly start: number
  readonly end: number
}

export interface ParsedTerminalFileTarget {
  readonly path: string
  readonly line?: number
  readonly column?: number
}

export interface ResolvedTerminalFileTarget {
  readonly path: HostPath
  readonly line?: number
  readonly column?: number
}

const TOKEN = /[^\s<>"'`|]+/g
const TRAILING_PUNCTUATION = /[.),;:!?}\]]+$/
const LEADING_PUNCTUATION = /^[([{]+/
const LINE_POSITION = /:(\d+)(?::(\d+))?$/
=== remote-image-paste ===
=== html preview ===
/**
 * Serves untrusted HTML from a dedicated origin with a response-header CSP.
 * The iframe still omits allow-same-origin, so each document receives an
 * opaque origin even though the scheme itself is registered as standard.
 */
  static registerScheme(): void {
    protocol.registerSchemesAsPrivileged([
        scheme: HTML_PREVIEW_SCHEME,
<shellId: 28 completed with exit code 0>
```

</details>


---

<sub>3m 50s</sub>

### Notification

Shell "Run vitest unit tests" completed

---

<sub>3m 52s</sub>

### `read_bash`

**Waiting up to 1 second for command output**

<details>
<summary>Arguments</summary>

```json
{
  "delay": 1,
  "shellId": "unittests"
}
```

</details>

<details>
<summary>23 lines</summary>

```
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/26]⎯

 FAIL  test/worker-host-broker.test.ts > Git worker host broker > persists clean-filter stat refreshes instead of filtering the same file again
AssertionError: expected 2 to be 1 // Object.is equality

- Expected
+ Received

- 1
+ 2

 ❯ test/worker-host-broker.test.ts:575:54
    573|     })
    574|
    575|     expect((await readFile(counter, 'utf8')).length).toBe(afterFirst)
       |                                                      ^
    576|     await actual.dispose()
    577|   })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/26]⎯


 Test Files  10 failed | 366 passed (376)
      Tests  23 failed | 2877 passed | 2 skipped (2902)
   Start at  01:21:31
   Duration  29.60s (tests 70%, import 11%, transform 8%, environment 8%, setup 2%, worker 1%)

    Isolate  376 workers spawned · ~124ms startup each (spawn + environment, per file)
             at least ~6.55s faster with isolate: false — reuses workers across files instead of one per file

test exit=1
<shellId: unittests completed with exit code 0>
```

</details>


---

<sub>3m 58s</sub>

### Copilot

Typecheck passes, and the unit suite has 23 failures out of 2,902 tests. I'll list the failing files to see whether they're caused by this sandbox.

---

<sub>4m 24s</sub>

### `bash`

**List failing test files**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npx vitest run 2>&1 | grep -E "^ (FAIL|×)| FAIL " | sed -E 's/\x1b\[[0-9;]*m//g' | awk '{print $2}' | sort | uniq -c | sort -rn | head -30

<details>
<summary>11 lines</summary>

```
13 test/web-pane-route-registry.test.ts
   5 test/web-pane-route.test.ts
   1 test/worker-host-broker.test.ts
   1 test/web-pane-smoke-boundary.test.ts
   1 test/smoke-scenario-runner.test.ts
   1 test/project-pr-relationships.test.ts
   1 test/merge-pr-skill.test.ts
   1 test/local-host.test.ts
   1 test/issue-lifecycle-guidance.test.ts
   1 test/external-document-authority.test.ts
<shellId: 29 completed with exit code 0>
```

</details>


---

<sub>4m 33s</sub>

### `bash`

**Inspect error causes of failing tests**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npx vitest run test/merge-pr-skill.test.ts test/issue-lifecycle-guidance.test.ts test/project-pr-relationships.test.ts test/web-pane-route.test.ts test/local-host.test.ts test/external-document-authority.test.ts 2>&1 | sed -E 's/\x1b\[[0-9;]*m//g' | grep -E "Error|ENOENT|EPERM|EACCES|listen|no such file|expected" | sort | uniq -c | sort -rn | head -30

<details>
<summary>8 lines</summary>

```
1 Error: listen EPERM: operation not permitted 127.0.0.1
   1 Error: EPERM: operation not permitted, mkdtemp '/tmp/hvir-document-authority-lY0hhv'
   1 Error: ENOENT: no such file or directory, open 'CONTRIBUTING.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/ffb55c2b/hvir/.github/pull_request_template.md'
   1 Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/ffb55c2b/hvir/.claude/skills/hvir-merge-pr/SKILL.md'
   1 AssertionError: expected +0 to be 93318 // Object.is equality
   1      ✓ surfaces remote channel refusal without creating a local listener 1ms
<shellId: 30 completed with exit code 0>
```

</details>


---

<sub>4m 43s</sub>

### `grep`

**README**

"README" (test, scripts, .github, src, build, electron-builder.yml, package.json, eslint.config.mjs)

<details>
<summary>28 matches</summary>

```
[grep content: 23 matches across 10 file(s) under /private/var/tmp/ws/ffb55c2b/hvir]
build/linux/hvir.apparmor:7:   # Site-specific additions and overrides. See local/README for details.
test/viewer-types.test.ts:7:     ['README.md', 'markdown'],

test/filename-search-policy.test.ts (5 match(es)):
  10:         file('src/my-README.md'),
  12:         file('README.md'),
  19:       '/workspace/README.md',
  20:       '/workspace/src/my-README.md',
  26:       [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],
scripts/check-adrs.mjs:26:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
test/release-pr-integrity.test.ts:235:       { changedFiles: ['package.json', 'README.md'] },

test/terminal-file-link.test.ts (6 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',
test/document-review-delivery.test.ts:70:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

test/commit-file-tree.test.ts (4 match(es)):
  15:       path: localPath('/project/README.md'),
  37:       { kind: 'file', name: 'README.md', depth: 0 },
  44:       { kind: 'file', name: 'README.md', depth: 0 },
  62:     expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')

test/git-ignore-refresh.test.ts (2 match(es)):
  14:           { name: 'README.md', type: 'file' },
  18:           { name: 'README.md', type: 'file' },
src/main/smoke/sessions-visual.ts:173:           content: 'Synthetic workspace\\A\\A README.md\\A src/\\A docs/';
```

</details>


---

<sub>4m 43s</sub>

### `grep`

**CONTRIBUTING**

"CONTRIBUTING" (test)

<details>
<summary>25 matches</summary>

```
[grep content: 3 matches across 3 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/test]

issue-lifecycle-guidance.test.ts (1 match(es)):
  5- 
  6- const markdown = new MarkdownIt()
  7- const documents = [
  8:   'CONTRIBUTING.md',
  9-   '.claude/skills/hvir-create-issue/SKILL.md',
  10-   '.claude/skills/hvir-review-issue/SKILL.md',
  11-   '.claude/skills/hvir-implement-issue/SKILL.md',

merge-pr-skill.test.ts (1 match(es)):
  11-   'utf8',
  12- )
  13- const agents = readFileSync(new URL('../AGENTS.md', import.meta.url), 'utf8')
  14: const contributing = readFileSync(new URL('../CONTRIBUTING.md', import.meta.url), 'utf8')
  15- const projectManagement = readFileSync(
  16-   new URL('../docs/project-management.md', import.meta.url),
  17-   'utf8',

smoke-scenario-runner.test.ts (1 match(es)):
  608-     'utf8',
  609-   )
  610-   const contributing = readFileSync(
  611:     new URL('../CONTRIBUTING.md', import.meta.url),
  612-     'utf8',
  613-   )
  614-   const smokeWorkflow = readFileSync(
```

</details>


---

<sub>4m 48s</sub>

### Copilot

A release-PR test mentions `README.md`, so I'll check it along with what the missing contributor docs are expected to say.

---

<sub>4m 49s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/test/release-pr-integrity.test.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/test/release-pr-integrity.test.ts (lines 220-250)

<details>
<summary>30 lines</summary>

```
      'a merged source SHA that differs from its merge commit',
      {
        mode: 'merged',
        pullRequestState: 'closed',
        merged: true,
        mergeCommitSha: mergeSha,
        sourceSha: headSha,
      },
      'invalid-source-sha',
    ],
    ['a malformed branch', { headBranch: 'release/v01.9.0' }, 'invalid-release-branch'],
    ['another title', { title: 'Release hvir 0.2.0' }, 'invalid-title'],
    ['a missing marker', { body: 'Automated release' }, 'missing-automation-marker'],
    [
      'another file',
      { changedFiles: ['package.json', 'README.md'] },
      'invalid-changed-files',
    ],
  ] satisfies Array<[string, Partial<ReleasePrIntegrityEvidence>, string]>)(
    'rejects %s',
    (_description, overrides, rejection) => {
      expect(evaluateReleasePrIntegrity(evidence(overrides))).toEqual({
        accepted: false,
        rejection,
      })
    },
  )

  it('rejects malformed or internally inconsistent base package evidence', () => {
    expect(evaluateReleasePrIntegrity(evidence({ basePackage: [] }))).toEqual({
      accepted: false,
```

</details>


---

<sub>4m 49s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/test/smoke-scenario-runner.test.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/test/smoke-scenario-runner.test.ts (lines 596-680)

<details>
<summary>85 lines</summary>

```
    'utf8',
  )
  const interruptionScript = readFileSync(
    new URL('../scripts/run-smoke-interruption.mts', import.meta.url),
    'utf8',
  )
  const gauntletScript = readFileSync(
    new URL('../scripts/phase8-gauntlet.sh', import.meta.url),
    'utf8',
  )
  const prePushHook = readFileSync(
    new URL('../.githooks/pre-push', import.meta.url),
    'utf8',
  )
  const contributing = readFileSync(
    new URL('../CONTRIBUTING.md', import.meta.url),
    'utf8',
  )
  const smokeWorkflow = readFileSync(
    new URL('../src/main/smoke/index.ts', import.meta.url),
    'utf8',
  )
  const capacityScenario = readFileSync(
    new URL('../src/main/smoke/capacity.ts', import.meta.url),
    'utf8',
  )
  const capacityPerformancePolicy = readFileSync(
    new URL('../src/main/smoke/capacity-performance.ts', import.meta.url),
    'utf8',
  )
  const capacityTerminalScenario = readFileSync(
    new URL('../src/main/smoke/capacity-terminals.ts', import.meta.url),
    'utf8',
  )
  const viewerPositionScenario = readFileSync(
    new URL('../src/main/smoke/viewer-position.ts', import.meta.url),
    'utf8',
  )
  const viewerFindScenario = readFileSync(
    new URL('../src/main/smoke/viewer-find.ts', import.meta.url),
    'utf8',
  )
  const viewerContentScenario = readFileSync(
    new URL('../src/main/smoke/viewer-content.ts', import.meta.url),
    'utf8',
  )
  const gitWorkflowScenario = readFileSync(
    new URL('../src/main/smoke/git-workflow.ts', import.meta.url),
    'utf8',
  )
  const workspaceRemoteScenario = readFileSync(
    new URL('../src/main/smoke/workspace-remote.ts', import.meta.url),
    'utf8',
  )
  const projectFileOperationsScenario = readFileSync(
    new URL('../src/main/smoke/project-file-operations.ts', import.meta.url),
    'utf8',
  )
  const filesInteractionsScenario = readFileSync(
    new URL('../src/main/smoke/files-interactions.ts', import.meta.url),
    'utf8',
  )
  const failureEvidenceScenario = readFileSync(
    new URL('../src/main/smoke/failure-evidence.mts', import.meta.url),
    'utf8',
  )
  const externalFileMoveScenario = readFileSync(
    new URL('../src/main/smoke/external-file-move.ts', import.meta.url),
    'utf8',
  )
  const webPaneScenario = readFileSync(
    new URL('../src/main/smoke/web-pane.ts', import.meta.url),
    'utf8',
  )
  const rendererAuthorityScenario = readFileSync(
    new URL('../src/main/smoke/renderer-authority.ts', import.meta.url),
    'utf8',
  )
  const documentReviewScenario = readFileSync(
    new URL('../src/main/smoke/document-review.ts', import.meta.url),
    'utf8',
  )
  const terminalPresentationScenario = readFileSync(
    new URL('../src/main/smoke/terminal-presentation.ts', import.meta.url),
    'utf8',
```

</details>


---

<sub>4m 49s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/test/issue-lifecycle-guidance.test.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/test/issue-lifecycle-guidance.test.ts

<details>
<summary>66 lines</summary>

```
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'

const markdown = new MarkdownIt()
const documents = [
  'CONTRIBUTING.md',
  '.claude/skills/hvir-create-issue/SKILL.md',
  '.claude/skills/hvir-review-issue/SKILL.md',
  '.claude/skills/hvir-implement-issue/SKILL.md',
]

// Derive GitHub-style heading fragments from rendered inline text, including duplicate headings.
function headingFragments(source: string): Set<string> {
  const tokens = markdown.parse(source, {})
  const fragments = new Set<string>()
  for (const [index, token] of tokens.entries()) {
    if (token.type !== 'heading_open') continue
    const text = (tokens[index + 1]?.children ?? [])
      .filter((child) => ['text', 'code_inline', 'image'].includes(child.type))
      .map((child) => child.content)
      .join('')
    const slug = text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}_\-\s]/gu, '')
      .replace(/\s/g, '-')
    let fragment = slug
    for (let suffix = 1; fragments.has(fragment); suffix++) fragment = `${slug}-${suffix}`
    fragments.add(fragment)
  }
  return fragments
}

describe.each(documents)('issue lifecycle guidance: %s', (document) => {
  const source = readFileSync(document, 'utf8')

  it('resolves its local links and heading fragments', () => {
    const tokens = markdown.parse(source, {}).flatMap((token) => token.children ?? [])
    for (const token of tokens) {
      if (token.type !== 'link_open') continue
      const href = token.attrGet('href')
      if (typeof href !== 'string') throw new Error(`${document}: link has no href`)
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue
      const [local = '', fragment] = href.split('#', 2)
      const relative = decodeURIComponent(local.split('?', 1)[0]!)
      const target = relative ? resolve(dirname(document), relative) : resolve(document)
      expect(existsSync(target), `${document}: ${href}`).toBe(true)
      if (fragment) {
        expect(
          headingFragments(readFileSync(target, 'utf8')),
          `${document}: ${href}`,
        ).toContain(decodeURIComponent(fragment))
      }
    }
  })

  it('references existing npm scripts', () => {
    const { scripts } = JSON.parse(readFileSync('package.json', 'utf8')) as {
      scripts: Record<string, string>
    }
    for (const match of source.matchAll(
      /npm run\s+(?:--silent\s+)?([a-z][a-z0-9:-]*)/g,
    )) {
      const command = match[1]!
      expect(Object.hasOwn(scripts, command), `${document}: npm run ${command}`).toBe(
        true,
      )
    }
  })
})
```

</details>


---

<sub>4m 49s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/test/merge-pr-skill.test.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/test/merge-pr-skill.test.ts

<details>
<summary>65 lines</summary>

```
import { lstatSync, readFileSync, readlinkSync } from 'node:fs'

import { describe, expect, it } from 'vitest'

const skill = readFileSync(
  new URL('../.claude/skills/hvir-merge-pr/SKILL.md', import.meta.url),
  'utf8',
)
const epicSkill = readFileSync(
  new URL('../.claude/skills/hvir-implement-epic/SKILL.md', import.meta.url),
  'utf8',
)
const agents = readFileSync(new URL('../AGENTS.md', import.meta.url), 'utf8')
const contributing = readFileSync(new URL('../CONTRIBUTING.md', import.meta.url), 'utf8')
const projectManagement = readFileSync(
  new URL('../docs/project-management.md', import.meta.url),
  'utf8',
)
const packageJson = readFileSync(new URL('../package.json', import.meta.url), 'utf8')

describe('hvir pull-request merge skill', () => {
  it('is exposed through Claude and Codex-compatible skill paths', () => {
    const codexPath = new URL('../.agents/skills/hvir-merge-pr', import.meta.url)
    expect(lstatSync(codexPath).isSymbolicLink()).toBe(true)
    expect(readlinkSync(codexPath)).toBe('../../.claude/skills/hvir-merge-pr')
    expect(skill).toContain('name: hvir-merge-pr')
  })

  it('resolves explicit or one handed-off pull request without repository discovery', () => {
    expect(skill).toContain('Use the number supplied by the maintainer')
    expect(skill).toContain('latest verified lifecycle handoff in the active interaction')
    expect(skill).toContain('Ask for one pull-request number')
    expect(skill).toContain('Never search branches, issues, the Project')
    expect(skill).toContain('do not request a separate issue number or candidate SHA')
  })

  it('uses GitHub protected auto-merge without a second classifier', () => {
    expect(skill).toContain('gh pr view <pr> --json baseRefName')
    expect(skill).toContain('delivery-route guard')
    expect(skill).toContain('gh pr merge <pr> --merge --auto')
    expect(skill).toContain('Never use `--admin`')
    expect(skill).toContain('repository ruleset')
    expect(skill).toContain('Monitor the accepted pull request')
    expect(skill).not.toContain('npm run issue:merge')
    expect(skill).not.toContain('repository-owned read-only classifier')
  })

  it('reconciles only focused Project owners after GitHub records the merge', () => {
    expect(skill).toContain('native closing relationships')
    expect(skill).toContain('npm run project:record -- --issue <issue>')
    expect(skill).toContain('project:status -- --issue <issue> --pr <pr>')
    expect(skill).not.toContain('project:measure')
    expect(skill).toContain('granted by this invocation separately from GitHub')
    expect(skill).toContain('cleanup is not merge admission')
  })

  it('keeps epic-child integration and optional cleanup with the epic owner', () => {
    expect(skill).toContain('pull requests remain integrated only by')
    expect(epicSkill).toContain('pull-request acceptance remains the small')
    expect(epicSkill).toContain('Resume bounded post-merge cleanup')
    expect(epicSkill).toContain('Cleanup is not part of merge admission')
    expect(epicSkill).toContain('run performs no merge')
    expect(epicSkill).not.toContain('internal `$hvir-merge-pr` transfer')
  })

  it('documents and enforces removal of the bespoke merge coordinator', () => {
    expect(agents).toContain('explicit `hvir-merge-pr` invocation is the approval')
    expect(contributing).toContain('gh pr merge <pr> --merge --auto')
    expect(contributing).toContain('Auto-merge allows a candidate')
    expect(projectManagement).toContain('Repository tooling does not duplicate')
    expect(packageJson).not.toContain('"issue:merge"')
  })
})
```

</details>


---

<sub>5m 0s</sub>

### `grep`

**package-lock\.json|changedFiles|allowed.*[Ff]iles**

"package-lock\.json|changedFiles|allowed.*[Ff]iles" (scripts/prepare-release-pr.mjs, scripts/validate-release-pr.mts)

<details>
<summary>15 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:14:const expectedVersionFiles = ['package-lock.json', 'package.json']
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:97:    await readFile(join(repositoryRoot, 'package-lock.json'), 'utf8'),
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:101:    ['package-lock.json', lockfile.version],
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:102:    ['package-lock.json root package', lockfile.packages?.['']?.version],
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:112:  const changedFiles = (await git('diff', '--name-only'))
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:116:  if (JSON.stringify(changedFiles) !== JSON.stringify(expectedVersionFiles)) {
/private/var/tmp/ws/ffb55c2b/hvir/scripts/prepare-release-pr.mjs:118:      `A release bump may change only ${expectedVersionFiles.join(', ')}; observed ${changedFiles.join(', ') || 'no changes'}.`,
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:14:export const RELEASE_VERSION_FILES = ['package-lock.json', 'package.json'] as const
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:36:  changedFiles: readonly string[]
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:162:  const changedFiles = [...evidence.changedFiles].sort()
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:163:  if (!isDeepStrictEqual(changedFiles, [...RELEASE_VERSION_FILES])) {
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:369:    loadFile('package-lock.json', baseSha),
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:370:    loadFile('package-lock.json', headSha),
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:372:    loadFile('package-lock.json', sourceSha),
/private/var/tmp/ws/ffb55c2b/hvir/scripts/validate-release-pr.mts:394:    changedFiles: files.map((file) => githubEvidence.requiredString(file.filename)),
```

</details>


---

<sub>5m 10s</sub>

### Copilot

Release bumps touch only `package.json` and `package-lock.json`, so the README should not hardcode the hvir version. Next I'll check the package install scripts for the command locations.

---

<sub>5m 10s</sub>

### `bash`

**Read package install hooks**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/build && echo "=== pkg preinstall ===" && cat pkg-scripts/preinstall && echo "=== pkg postinstall ===" && cat pkg-scripts/postinstall && echo "=== linux after-install ===" && cat linux/after-install.sh && echo "=== linux after-remove ===" && cat linux/after-remove.sh

<details>
<summary>270 lines</summary>

```
=== pkg preinstall ===
#!/bin/sh
set -eu

command_marker='hvir-native-package-command-v1'
inventory_marker='hvir-native-package-inventory-v1'
target_volume=${3:-/}

case "$target_volume" in
/*) ;;
*)
  echo "hvir package preflight failed: invalid target '$target_volume'" >&2
  exit 1
  ;;
esac

volume_root=${target_volume%/}
command="$volume_root/usr/local/bin/hvir"
inventory="$volume_root/Library/Application Support/hvir/package-inventory-v1.txt"

if [ -e "$command" ] || [ -L "$command" ]; then
  if [ ! -f "$command" ] || ! /usr/bin/grep -Fq "$command_marker" "$command"; then
    echo "hvir package preflight refused unowned command: $command" >&2
    exit 1
  fi
fi

if [ -e "$inventory" ] || [ -L "$inventory" ]; then
  if [ ! -f "$inventory" ] ||
    ! /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
    echo "hvir package preflight refused unowned inventory: $inventory" >&2
    exit 1
  fi
fi
=== pkg postinstall ===
#!/bin/sh
set -eu

package_id='dev.hvir.app'
command_marker='hvir-native-package-command-v1'
inventory_marker='hvir-native-package-inventory-v1'
target_volume=${3:-/}
stage='validating target volume'
transaction=''
command_had_previous=0
inventory_had_previous=0
committed=0
inventory_dir_created=0
command_dir_created=0

case "$target_volume" in
/*) ;;
*)
  echo "hvir package configuration failed while $stage: invalid target '$target_volume'" >&2
  exit 1
  ;;
esac

volume_root=${target_volume%/}
application="$volume_root/Applications/hvir.app"
executable="$application/Contents/MacOS/hvir"
notices="$application/Contents/Resources/THIRD_PARTY_NOTICES.md"
command_source="$application/Contents/Resources/hvir-command"
framework="$application/Contents/Frameworks/Electron Framework.framework"
command_dir="$volume_root/usr/local/bin"
command="$command_dir/hvir"
inventory_dir="$volume_root/Library/Application Support/hvir"
inventory="$inventory_dir/package-inventory-v1.txt"

cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  if [ "$committed" -ne 1 ] && [ -n "$transaction" ]; then
    if [ -f "$command" ] && /usr/bin/grep -Fq "$command_marker" "$command"; then
      /bin/rm -f -- "$command"
    fi
    if [ "$command_had_previous" -eq 1 ] && [ -e "$transaction/command.previous" ]; then
      /bin/mv -f -- "$transaction/command.previous" "$command"
    fi
    if [ -f "$inventory" ] && /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
      /bin/rm -f -- "$inventory"
    fi
    if [ "$inventory_had_previous" -eq 1 ] &&
      [ -e "$transaction/inventory.previous" ]; then
      /bin/mv -f -- "$transaction/inventory.previous" "$inventory"
    fi
  fi
  if [ -n "$transaction" ]; then
    case "$transaction" in
    "$inventory_dir"/.package-install.*) /bin/rm -rf -- "$transaction" ;;
    *) status=1 ;;
    esac
  fi
  if [ "$committed" -ne 1 ]; then
    if [ "$inventory_dir_created" -eq 1 ]; then /bin/rmdir "$inventory_dir" 2>/dev/null || true; fi
    if [ "$command_dir_created" -eq 1 ]; then /bin/rmdir "$command_dir" 2>/dev/null || true; fi
  fi
  if [ "$status" -ne 0 ]; then
    echo "hvir package configuration failed while $stage" >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

stage='validating installed application'
test -x "$executable"
/usr/bin/file "$executable" | /usr/bin/grep -Fq 'arm64'
test -L "$framework/Versions/Current"
test -f "$notices"
test -f "$command_source"
/usr/bin/grep -Fq "$command_marker" "$command_source"
if /usr/bin/codesign -dvv "$application" 2>&1 |
  /usr/bin/grep -q '^Authority='; then
  /usr/bin/codesign --verify --deep --strict --verbose=2 "$application"
fi

stage='preparing package-owned command transaction'
if [ ! -d "$command_dir" ]; then
  /bin/mkdir -p "$command_dir"
  command_dir_created=1
fi
if [ ! -d "$inventory_dir" ]; then
  /bin/mkdir -p "$inventory_dir"
  inventory_dir_created=1
fi
/usr/sbin/chown root:wheel "$command_dir" "$inventory_dir"
/bin/chmod 0755 "$command_dir" "$inventory_dir"
transaction=$(/usr/bin/mktemp -d "$inventory_dir/.package-install.XXXXXX")

if [ -e "$command" ] || [ -L "$command" ]; then
  if [ ! -f "$command" ] || ! /usr/bin/grep -Fq "$command_marker" "$command"; then
    stage='refusing to replace an unowned hvir command'
    false
  fi
  /bin/mv -- "$command" "$transaction/command.previous"
  command_had_previous=1
fi

if [ -e "$inventory" ] || [ -L "$inventory" ]; then
  if [ ! -f "$inventory" ] || ! /usr/bin/grep -Fq "$inventory_marker" "$inventory"; then
    stage='refusing to replace an unowned hvir inventory'
    false
  fi
  /bin/mv -- "$inventory" "$transaction/inventory.previous"
  inventory_had_previous=1
fi

stage='writing package-owned command'
/bin/cp -- "$command_source" "$transaction/hvir"
/usr/sbin/chown root:wheel "$transaction/hvir"
/bin/chmod 0755 "$transaction/hvir"
/bin/mv -- "$transaction/hvir" "$command"

stage='writing deterministic package inventory'
{
  echo "$inventory_marker"
  echo "package-id=$package_id"
  echo 'application=/Applications/hvir.app'
  echo 'command=/usr/local/bin/hvir'
  echo 'inventory=/Library/Application Support/hvir/package-inventory-v1.txt'
  echo "receipt=$package_id"
} >"$transaction/inventory"
/usr/sbin/chown root:wheel "$transaction/inventory"
/bin/chmod 0644 "$transaction/inventory"
/bin/mv -- "$transaction/inventory" "$inventory"

stage='committing package-owned command transaction'
committed=1
/bin/rm -f -- "$transaction/command.previous" "$transaction/inventory.previous"
=== linux after-install ===
#!/bin/bash
set -e

stage='configuring the hvir command'
report_failure() {
  status=$?
  echo "hvir package configuration failed while $stage" >&2
  exit "$status"
}
trap report_failure ERR

HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
chown root:root "$HVIR_COMMAND"
chmod 0755 "$HVIR_COMMAND"
if command -v update-alternatives >/dev/null 2>&1; then
  if [ -L '/usr/bin/${executable}' ] &&
    [ -e '/usr/bin/${executable}' ] &&
    [ "$(readlink '/usr/bin/${executable}')" != '/etc/alternatives/${executable}' ]; then
    rm -f '/usr/bin/${executable}'
  fi
  update-alternatives \
    --install '/usr/bin/${executable}' '${executable}' \
    "$HVIR_COMMAND" 100
else
  ln -sf "$HVIR_COMMAND" '/usr/bin/${executable}'
fi

stage='configuring the Chromium sandbox helper'
chown root:root '/opt/${sanitizedProductName}/chrome-sandbox'
if command -v runuser >/dev/null 2>&1 &&
  runuser -u nobody -- unshare --user true >/dev/null 2>&1; then
  chmod 0755 '/opt/${sanitizedProductName}/chrome-sandbox'
else
  chmod 4755 '/opt/${sanitizedProductName}/chrome-sandbox'
fi

stage='refreshing desktop metadata'
if command -v update-mime-database >/dev/null 2>&1; then
  update-mime-database /usr/share/mime
fi
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database /usr/share/applications
fi

stage='installing the AppArmor profile'
APPARMOR_PROFILE_SOURCE='/opt/${sanitizedProductName}/resources/apparmor-profile'
APPARMOR_PROFILE_TARGET='/etc/apparmor.d/${executable}'
APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
if [ -r "$APPARMOR_USERNS_RESTRICTION" ] &&
  [ "$(cat "$APPARMOR_USERNS_RESTRICTION")" = '1' ]; then
  if ! command -v apparmor_parser >/dev/null 2>&1 ||
    ! command -v apparmor_status >/dev/null 2>&1 ||
    ! apparmor_status --enabled >/dev/null 2>&1; then
    echo 'hvir requires active AppArmor tooling for this host user-namespace policy' >&2
    false
  fi
  apparmor_parser --skip-kernel-load --debug "$APPARMOR_PROFILE_SOURCE" >/dev/null
  install -o root -g root -m 0644 "$APPARMOR_PROFILE_SOURCE" "$APPARMOR_PROFILE_TARGET"

  if ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; }; then
    apparmor_parser \
      --replace \
      --write-cache \
      --skip-read-cache \
      "$APPARMOR_PROFILE_TARGET"
  fi
elif [ -f "$APPARMOR_PROFILE_TARGET" ]; then
  if command -v apparmor_status >/dev/null 2>&1 &&
    apparmor_status --enabled >/dev/null 2>&1 &&
    ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; } &&
    command -v apparmor_parser >/dev/null 2>&1; then
    apparmor_parser --remove "$APPARMOR_PROFILE_TARGET"
  fi
  rm -f "$APPARMOR_PROFILE_TARGET"
fi

stage='finalizing package configuration'
trap - ERR
=== linux after-remove ===
#!/bin/bash
set -e

case "$1" in
upgrade | failed-upgrade | abort-install | abort-upgrade | disappear)
  # The replacement package owns the command and profile during an update.
  exit 0
  ;;
remove | purge)
  ;;
*)
  echo "hvir package removal received an unknown lifecycle action: $1" >&2
  exit 1
  ;;
esac

stage='removing the hvir command'
report_failure() {
  status=$?
  echo "hvir package removal failed while $stage" >&2
  exit "$status"
}
trap report_failure ERR

HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
if command -v update-alternatives >/dev/null 2>&1; then
  update-alternatives \
    --remove '${executable}' "$HVIR_COMMAND"
else
  rm -f '/usr/bin/${executable}'
fi

stage='unloading the AppArmor profile'
APPARMOR_PROFILE_TARGET='/etc/apparmor.d/${executable}'
if [ -f "$APPARMOR_PROFILE_TARGET" ]; then
  if apparmor_status --enabled >/dev/null 2>&1 &&
    ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; } &&
    command -v apparmor_parser >/dev/null 2>&1; then
    apparmor_parser --remove "$APPARMOR_PROFILE_TARGET"
  fi
  rm -f "$APPARMOR_PROFILE_TARGET"
fi

stage='finalizing package removal'
trap - ERR
<shellId: 31 completed with exit code 0>
```

</details>


---

<sub>5m 16s</sub>

### Copilot

I have the install layout. I'll check that the documented installer URL resolves on GitHub (a public HEAD request).

---

<sub>5m 17s</sub>

### `bash`

**Check public release installer URL**

$ curl -sS -o /dev/null -w "%{http_code} %{url_effective}\n" -I -L --max-time 20 https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh 2>&1; curl -sS -o /dev/null -w "%{http_code} %{url_effective}\n" -I --max-time 20 https://github.com/jarmak-personal/hvir 2>&1

<details>
<summary>6 lines</summary>

```
curl: (6) Could not resolve host: github.com
000 https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
curl: (6) Could not resolve host: github.com
000 https://github.com/jarmak-personal/hvir
<shellId: 32 completed with exit code 6>
<sandbox is active and network access is currently restricted by policy. Do not attempt workarounds. If this command needs outbound access, ask the user to allow it in their sandbox policy, naming the host it blocked; a blocked loopback or local address cannot be granted by policy on Windows at all, and needs the sandbox bypassed or turned off.>
```

</details>


---

<sub>5m 26s</sub>

### `grep`

**hvir is |hvir-workbench|agent workbench|coding agents?|<title>|"description"**

"hvir is |hvir-workbench|agent workbench|coding agents?|<title>|"description"" (src, scripts, build, packages)

<details>
<summary>35 matches</summary>

```
[grep content: 31 matches across 12 file(s) under /private/var/tmp/ws/ffb55c2b/hvir]
build/icon-linux.svg:11:   <desc id="description">
build/icon-macos.svg:11:   <desc id="description">

scripts/native-installer.template.sh (8 match(es)):
  399:   expected_target=${npm_root%/}/hvir-workbench/bin/hvir.mjs
  410:     echo "The existing hvir launcher does not target hvir-workbench: $found" >&2
  413:   listing=$("$legacy_npm" ls -g --depth=0 --parseable hvir-workbench)
  414:   if ! list_contains_exact_line "${npm_root%/}/hvir-workbench" <<<"$listing"; then
  415:     echo 'npm did not confirm ownership of the existing hvir-workbench launcher.' >&2
  420:       "The verified legacy launcher occupies $native_command; move hvir-workbench to a user-owned npm prefix before native migration." \
  459:   stage='removing the verified legacy hvir-workbench launcher'
  463:     "$legacy_npm" uninstall -g hvir-workbench

scripts/run-macos-package-smoke.sh (7 match(es)):
  106:   "$legacy_root/hvir-workbench/bin" \
  113:   >"$legacy_root/hvir-workbench/bin/hvir.mjs"
  114: chmod 0755 "$legacy_root/hvir-workbench/bin/hvir.mjs"
  115: ln -s '../lib/node_modules/hvir-workbench/bin/hvir.mjs' "$legacy_launcher"
  121:   'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  124:   '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
  261: test ! -e "$legacy_root/hvir-workbench"

scripts/run-linux-package-smoke.sh (7 match(es)):
  115:   "$legacy_root/hvir-workbench/bin" \
  127:   >"$legacy_root/hvir-workbench/bin/hvir.mjs"
  128: chmod 0755 "$legacy_root/hvir-workbench/bin/hvir.mjs"
  129: ln -s '../lib/node_modules/hvir-workbench/bin/hvir.mjs' "$legacy_launcher"
  137:   'ls:-g) printf "%s/hvir-workbench\n" "$HVIR_FAKE_NPM_ROOT" ;;' \
  140:   '  /bin/rm -rf -- "$HVIR_FAKE_NPM_ROOT/hvir-workbench"' \
  344: test ! -e "$legacy_root/hvir-workbench"
packages/rename-noreplace/package.json:5:   "description": "Private hvir Node-API binding for atomic no-replace rename",
src/main/window/electron-window-manager.ts:375:           title: 'hvir is not responding',
src/main/smoke/web-pane.ts:78:         `<!doctype html><title>smoke dashboard</title><input aria-label="dashboard input"><script>document.body.dataset.isolated=String(typeof require==='undefined'&&typeof window.hvir==='undefined');onbeforeunload=()=>"stay";navigator.serviceWorker.register('/sw.js').then(()=>navigator.serviceWorker.ready).then((registration)=>{const channel=new MessageChannel();channel.port1.onmessage=(event)=>document.body.dataset.serviceWorker=event.data;registration.active.postMessage('probe',[channel.port2])})</script>smoke-dashboard-ok`,
src/main/harness/providers/pi.ts:17:         'Pi coding agent. Launch-only until exact new-session identity is proven.',
src/shared/host-path.ts:4:  * Every path in hvir is a `(host, path)` pair — never a bare string, even in
src/renderer/index.html:10:     <title>hvir</title>
src/renderer/src/sessions/sessions-terminal-detail-controller.ts:148:         'Terminal detail is paused while hvir is not in the foreground.',
```

</details>


---

<sub>5m 26s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/index.html.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/index.html

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

<sub>5m 26s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/packages/rename-noreplace/package.json.**

/private/var/tmp/ws/ffb55c2b/hvir/packages/rename-noreplace/package.json

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

<sub>5m 29s</sub>

### Copilot

The icon SVGs have a description element. I'll check whether it describes the product.

---

<sub>5m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/build/icon-macos.svg.**

/private/var/tmp/ws/ffb55c2b/hvir/build/icon-macos.svg (lines 1-20)

<details>
<summary>19 lines</summary>

```
<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1024"
  height="1024"
  viewBox="0 0 1024 1024"
  role="img"
  aria-labelledby="title description"
>
  <title id="title">hvir macOS application icon</title>
  <desc id="description">
    The hvir mark on a rounded dark tile with transparent outer framing.
  </desc>

  <defs>
    <radialGradient id="tile" cx="48%" cy="43%" r="76%">
      <stop offset="0" stop-color="#171d2b" />
      <stop offset="0.7" stop-color="#0d111b" />
      <stop offset="1" stop-color="#080b12" />
    </radialGradient>
```

</details>


---

<sub>5m 29s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/build/icons-linux/256x256.png.**

/private/var/tmp/ws/ffb55c2b/hvir/build/icons-linux/256x256.png

```
Viewed image file successfully.
```


---

<sub>5m 42s</sub>

### Copilot

The icon is a clean "h" mark that would work in the README header. Next I'll confirm whether the viewer supports editing and whether Git supports commits.

---

<sub>5m 43s</sub>

### `grep`

**export const GIT_[A-Z_]+_TYPE|'git:[a-z-]+'**

"export const GIT_[A-Z_]+_TYPE|'git:[a-z-]+'" (src/shared/ipc/git.ts)

<details>
<summary>10 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:24:    'git:diff-inputs': invoke<GitDiffRequest, GitDiffResponse>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:25:    'git:changes': invoke<GitChangesRequest, GitChanges>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:26:    'git:history': invoke<GitHistoryRequest, GitHistoryPage>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:27:    'git:ignored-entries': invoke<GitIgnoredEntriesRequest, GitIgnoredEntriesResponse>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:28:    'git:commit-detail': invoke<GitCommitDetailRequest, GitCommitDetail>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:29:    'git:blame': invoke<GitBlameRequest, readonly GitBlameRun[]>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:30:    'git:branches': invoke<GitChangesRequest, GitBranchModel>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:31:    'git:fetch': invoke<GitFetchRequest, OperationResult<ProjectState>>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:32:    'git:pull': invoke<GitPullRequest, OperationResult<ProjectState>>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/ipc/git.ts:33:    'git:switch-branch': invoke<GitSwitchBranchRequest, OperationResult<ProjectState>>(),
```

</details>


---

<sub>5m 43s</sub>

### `grep`

**editable|readOnly|onSave|save**

"editable|readOnly|onSave|save" (src/renderer/src/viewer/SourceView.tsx)

<details>
<summary>11 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:23:  readOnly = false,
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:29:  onSave,
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:39:  readonly readOnly?: boolean
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:45:  readonly onSave: () => void
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:64:  const callbacks = useRef({ onContent, onSave, onPosition })
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:70:  callbacks.current = { onContent, onSave, onPosition }
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:83:          EditorState.readOnly.of(readOnly),
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:84:          EditorView.editable.of(!readOnly),
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:113:                if (!readOnly) callbacks.current.onSave()
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:120:            if (update.docChanged && !applyingExternal.current && !readOnly) {
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/SourceView.tsx:159:  }, [pathKey, readOnly])
```

</details>


---

<sub>5m 43s</sub>

### `grep`

**GIT_[A-Z_]+_TYPE\s*=**

"GIT_[A-Z_]+_TYPE\s*=" (src/shared)

<details>
<summary>14 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:120:export const GIT_DIFF_INPUTS_TYPE = 'git:diff-inputs' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:121:export const GIT_CHANGES_TYPE = 'git:changes' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:122:export const GIT_HISTORY_TYPE = 'git:history' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:123:export const GIT_IGNORED_ENTRIES_TYPE = 'git:ignored-entries' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:124:export const GIT_IGNORED_PATHS_TYPE = 'git:ignored-paths' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:125:export const GIT_BLAME_TYPE = 'git:blame' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:126:export const GIT_COMMIT_DETAIL_TYPE = 'git:commit-detail' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:127:export const GIT_WORKTREES_TYPE = 'git:worktrees' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:128:export const GIT_PRUNE_WORKTREES_TYPE = 'git:prune-worktrees' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:129:export const GIT_WORKSPACE_ACTIVITY_TYPE = 'git:workspace-activity' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:130:export const GIT_BRANCHES_TYPE = 'git:branches' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:131:export const GIT_FETCH_TYPE = 'git:fetch' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:132:export const GIT_PULL_TYPE = 'git:pull' as const
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/worker-protocol.ts:133:export const GIT_SWITCH_BRANCH_TYPE = 'git:switch-branch' as const
```

</details>


---

<sub>5m 49s</sub>

### Copilot

Git is read-mostly: changes, history/graph, commit detail, blame, plus branch switch, fetch, and pull. There's no staging or commit UI. I'll check the fetch and pull arguments.

---

<sub>5m 50s</sub>

### `grep`

**GIT_(FETCH|PULL)_ARGS|'switch'|'checkout'**

"GIT_(FETCH|PULL)_ARGS|'switch'|'checkout'" (src/main/git/git-branches.ts)

<details>
<summary>22 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:16:export const GIT_FETCH_ARGS = ['fetch', '--prune', '--no-recurse-submodules'] as const
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:17:export const GIT_PULL_ARGS = [
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-18-  'pull',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-19-  '--no-rebase',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-20-  '--ff-only',
--
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:91:    const result = await this.context.mutate(context.commandRoot, GIT_FETCH_ARGS)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:92:    if (result.code !== 0) throw gitError(GIT_FETCH_ARGS, result.stderr, result.code)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-93-  }
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-94-
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-95-  async pullFastForward(workspaceRoot: HostPath): Promise<void> {
--
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:110:    const result = await this.context.mutate(context.commandRoot, GIT_PULL_ARGS)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:111:    if (result.code !== 0) throw gitError(GIT_PULL_ARGS, result.stderr, result.code)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-112-  }
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-113-
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-114-  async switchBranch(workspaceRoot: HostPath, branch: string): Promise<void> {
--
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts:124:    const args = ['switch', '--no-guess', branch] as const
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-125-    const result = await this.context.mutate(workspaceRoot, args)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-126-    if (result.code !== 0) throw gitError(args, result.stderr, result.code)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/git/git-branches.ts-127-  }
```

</details>


---

<sub>5m 56s</sub>

### Copilot

Pull is fast-forward only, fetch prunes, and branch switch uses `git switch --no-guess`. Next, the attention model and the size of the terminal theme catalog.

---

<sub>5m 56s</sub>

### `bash`

**Read attention model and theme catalog count**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src && sed -n '1,40p' shared/terminal-attention.ts; echo "=== theme count ==="; grep -cE "^\s+id: '" renderer/src/terminal/generated-terminal-theme-catalog.ts; grep -nE "DEFAULT_TERMINAL_THEME_IDS" -A4 renderer/src/terminal/terminal-theme-catalog.ts | head -8

<details>
<summary>13 lines</summary>

```
/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
export type TerminalAttentionState = 'working' | 'bell' | 'idle'
=== theme count ===
0
12:export const DEFAULT_TERMINAL_THEME_IDS = {
13-  dark: 'hvir-default-dark',
14-  light: 'hvir-default-light',
15-} as const
16-
--
34:    id: DEFAULT_TERMINAL_THEME_IDS.dark,
35-    name: 'Hvir Dark',
<shellId: 33 completed with exit code 0>
```

</details>


---

<sub>5m 59s</sub>

### `bash`

**Inspect generated theme catalog format**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal && head -c 1500 generated-terminal-theme-catalog.ts; echo; echo "=== counts ==="; grep -oE '"name": ?"[^"]+"|name: ?"[^"]+"|name: ?'"'"'[^'"'"']+'"'" generated-terminal-theme-catalog.ts | wc -l

<details>
<summary>9 lines</summary>

```
/* This file is generated by scripts/generate-terminal-theme-catalog.mts. */
/* Do not edit it by hand or parse upstream theme files at runtime. */
export const GENERATED_TERMINAL_THEME_CATALOG_PROVENANCE = {"ghosttyCommit":"332b2aefc6e72d363aa93ab6ecfc86eeeeb5ed28","ghosttyThemeArchive":"https://deps.files.ghostty.org/ghostty-themes-release-20260216-151611-fc73ce3.tgz","ghosttyThemeArchiveSha256":"14200bb86a0c814ab69609d500b280b396b6d2eb835edf0676de4a789c0aa8fd","upstreamRepository":"https://github.com/mbadolato/iTerm2-Color-Schemes","upstreamTag":"release-20260216-151611-fc73ce3","upstreamCommit":"fc73ce39746540b6d5ec6b91e304785431401d85","sourceTreeSha256":"70b7ed943f4d3a409425677f3d375782840a51f1ac1c8613f0ac669c2dc3078b","expectedThemeCount":463,"maximumThemeCount":512,"maximumThemeBytes":4096} as const

export const GENERATED_TERMINAL_THEME_CATALOG = [
  {"id":"ghostty-0x96f-e9951c7c","name":"0x96f","palette":{"background":"#262427","foreground":"#fcfcfa","cursor":"#fcfcfa","cursorText":"#000000","selectionBackground":"#fcfcfa","selectionForeground":"#262427","black":"#262427","red":"#ff666d","green":"#b3e03a","yellow":"#ffc739","blue":"#00cde8","magenta":"#a392e8","cyan":"#9deaf6","white":"#fcfcfa","brightBlack":"#545452","brightRed":"#ff7e83","brightGreen":"#bee55e","brightYellow":"#ffd05e","brightBlue":"#1bd5eb","brightMagenta":"#b0a3eb","brightCyan":"#acedf8","brightWhite":"#fcfcfa"}},
  {"id":"ghostty-12-bit-rainbow-d78dca2b","name":"12-bit Rainbow","palette":{"back
=== counts ===
     463
<shellId: 34 completed with exit code 0>
```

</details>


---

<sub>6m 7s</sub>

### Copilot

The catalog holds 463 iTerm2-Color-Schemes themes. Next I'll confirm how terminal attention works.

---

<sub>6m 7s</sub>

### `bash`

**Read renderer terminal attention logic**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal && sed -n '1,60p' terminal-attention.ts | grep -vE "^import"

<details>
<summary>51 lines</summary>

```
export type TerminalAttention = TerminalAttentionState
export type TerminalIdleAttentionState = 'initial' | 'armed' | 'settled'

export interface TerminalOutputAttentionDecision {
  readonly notify: boolean
  readonly scheduleIdle: boolean
}

const attentionPriority: Record<TerminalAttention, number> = {
  working: 1,
  bell: 2,
  idle: 3,
}

export function nextTerminalAttention(
  current: TerminalAttention | undefined,
  incoming: TerminalAttention,
  focused: boolean,
): TerminalAttention | undefined {
  if (focused) return undefined
  if (current && attentionPriority[current] >= attentionPriority[incoming]) {
    return current
  }
  return incoming
}

/**
 * Idle-after-burst represents a completed terminal turn, not terminal startup,
 * resize repaint, or an arbitrary control-sequence write. Enter is the one
 * engine- and harness-independent boundary available at the TerminalPane seam.
 */
export function terminalInputArmsIdleAttention(data: string): boolean {
  return data.includes('\r') || data.includes('\n')
}

export function terminalIdleAttentionAfterInput(
  state: TerminalIdleAttentionState,
  data: string,
): TerminalIdleAttentionState {
  return terminalInputArmsIdleAttention(data) ? 'armed' : state
}

export function terminalOutputAttentionDecision(
  state: TerminalIdleAttentionState,
): TerminalOutputAttentionDecision {
  return {
    notify: state !== 'initial',
    scheduleIdle: state === 'armed',
  }
}

export function terminalAttentionLabel(attention: TerminalAttention): string {
  if (attention === 'idle') return 'Ready'
  if (attention === 'bell') return 'Bell'
  return 'Working'
}

export function terminalAttentionBadgeText(attention: TerminalAttention): string {
<shellId: 35 completed with exit code 0>
```

</details>


---

<sub>6m 13s</sub>

### Copilot

Attention states are Working, Bell, and Ready, and they roll up into a dock or launcher badge. Next I'll check the smoke-test runner and its scenario list.

---

<sub>6m 13s</sub>

### `bash`

**Read smoke scenario selection and runner**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && sed -n '1,60p' src/main/smoke/scenario-selection.mts; echo "=== run-smoke-scenarios head ==="; sed -n '1,50p' scripts/run-smoke-scenarios.mts

<details>
<summary>94 lines</summary>

```
export const ELECTRON_SMOKE_SCENARIOS = [
  'pty-native',
  'viewer-position',
  'viewer-content',
  'git-workflow',
  'workspace-remote',
  'web-pane',
  'renderer-authority',
  'platform-contracts',
  'diagnostic-report-restart',
  'renderer-recovery',
  'sessions-projection',
  'document-review',
  'development-performance',
  'terminal-presentation',
  'terminal-lifecycle',
  'native-host-worker',
  'workbench-health',
  'terminal-theme',
  'terminal-move',
  'workbench-layout',
  'terminal-split',
  'harness-profiles',
  'app-settings',
  'capacity',
] as const

export type ElectronSmokeScenario = (typeof ELECTRON_SMOKE_SCENARIOS)[number]
export type ElectronSmokeMode = Exclude<
  ElectronSmokeScenario,
  'pty-native' | 'diagnostic-report-restart'
>

/** A single Electron process must name the behavior it is proving. */
export function parseElectronSmokeScenario(
  value: string | undefined,
): ElectronSmokeScenario {
  if (value === undefined || value === '') {
    throw new Error(
      'Select one Electron smoke scenario with HVIR_SMOKE_SCENARIO; use npm run smoke for the aggregate suite',
    )
  }
  if (ELECTRON_SMOKE_SCENARIOS.includes(value as ElectronSmokeScenario)) {
    return value as ElectronSmokeScenario
  }
  throw new Error(
    `Unknown Electron smoke scenario '${value}'. Expected one of: ${ELECTRON_SMOKE_SCENARIOS.join(', ')}`,
  )
}
=== run-smoke-scenarios head ===
import { appendFile } from 'node:fs/promises'
import type { SmokeFailureEvidence } from '../src/main/smoke/failure-evidence.mts'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import {
  SmokeAttemptEvidenceCollector,
  formatSmokeFailureEvidence,
  createSmokeFailureArtifact,
  writeSmokeFailureArtifact,
} from './smoke-failure-artifact.mts'
import {
  parseElectronSmokeScenario,
  type ElectronSmokeScenario,
} from '../src/main/smoke/scenario-selection.mts'

export const DEFAULT_SMOKE_SCENARIOS = [
  'pty-native',
  'viewer-position',
  'native-host-worker',
  'workbench-health',
  'platform-contracts',
  'terminal-theme',
  'terminal-move',
  'workbench-layout',
  'terminal-split',
  'app-settings',
  'harness-profiles',
] as const satisfies readonly ElectronSmokeScenario[]

export type SmokeScenarioName = ElectronSmokeScenario

export interface SmokeScenarioResult {
  readonly scenario: SmokeScenarioName
  readonly iteration: number
  readonly repetitionCount: number
  readonly status: 'passed' | 'failed'
  readonly exitCode?: number
  readonly signal?: NodeJS.Signals
  readonly error?: string
  readonly failureEvidence?: SmokeFailureEvidence | null
  readonly durationMs?: number
}

type InvokeSmokeScenario = (
  scenario: SmokeScenarioName,
  iteration: number,
  repetitionCount: number,
) => Promise<Omit<SmokeScenarioResult, 'scenario' | 'iteration' | 'repetitionCount'>>
<shellId: 36 completed with exit code 0>
```

</details>


---

<sub>6m 18s</sub>

### `grep`

**process\.argv|HVIR_SMOKE_[A-Z_]+|DEFAULT_SMOKE_SCENARIOS\b**

"process\.argv|HVIR_SMOKE_[A-Z_]+|DEFAULT_SMOKE_SCENARIOS\b" (scripts/run-smoke-scenarios.mts)

<details>
<summary>12 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:17:export const DEFAULT_SMOKE_SCENARIOS = [
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:84:      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:94:      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:107:        'Select Electron smoke scenarios with positional names or HVIR_SMOKE_SCENARIO, not both',
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:112:  if (value === undefined || value === '') return DEFAULT_SMOKE_SCENARIOS
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:163:    HVIR_SMOKE_SCENARIO: scenario,
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:165:  delete childEnvironment.HVIR_SMOKE_REPEAT
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:420:  directory = process.env.HVIR_SMOKE_ARTIFACT_DIR,
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:481:    process.env.HVIR_SMOKE_SCENARIO,
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:482:    process.argv.slice(2),
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:484:  const repetitionCount = parseSmokeRepetitionCount(process.env.HVIR_SMOKE_REPEAT)
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:549:if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
```

</details>


---

<sub>6m 25s</sub>

### Copilot

`npm run smoke:scenario -- <name>` runs one scenario. Next I'll check how the app picks its project when launched with no argument.

---

<sub>6m 25s</sub>

### `grep`

**static async create**

"static async create" (src/main/project-registry.ts)

<details>
<summary>56 matches</summary>

```
[grep content: 3 matches across 1 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/main]

project-registry.ts (3 match(es)):
  110:   static async create(
  111-     initialRoot: HostPath,
  112-     hostCatalog: ProjectRegistryHostCatalog,
  113-     registryFile: string,
  114-     onState: (state: ProjectState) => void,
  115-   ): Promise<ProjectRegistry>
  116:   static async create(
  117-     initialRoot: HostPath | undefined,
  118-     hostCatalog: ProjectRegistryHostCatalog,
  119-     registryFile: string,
  120-     onState: (state: ProjectState) => void,
  121-     selectInitialRoot: () => Promise<HostPath | undefined>,
  122-   ): Promise<ProjectRegistry | undefined>
  123:   static async create(
  124-     initialRoot: HostPath | undefined,
  125-     hostCatalog: ProjectRegistryHostCatalog,
  126-     registryFile: string,
  127-     onState: (state: ProjectState) => void,
  128-     selectInitialRoot?: () => Promise<HostPath | undefined>,
  129-   ): Promise<ProjectRegistry | undefined> {
  130-     const local = hostCatalog.local
  131-     const file = localPath(registryFile)
  132-     const stored = await loadProjects(local, file)
  133-     let canonicalRoot = initialRoot ? await local.realpath(initialRoot) : undefined
  134-     if (!canonicalRoot && !stored?.projects.length) {
  135-       const selected = await selectInitialRoot?.()
  136-       if (!selected) return undefined
  137-       canonicalRoot = await local.realpath(selected)
  138-     }
  139-     const projects = stored?.projects.length ? stored.projects : []
  140-     let activeProjectId = stored?.activeProjectId
  141-     if (canonicalRoot) {
  142-       let selectedProject = projects.find(
  143-         (project) =>
  144-           hostPathEquals(project.registeredRoot, canonicalRoot) ||
  145-           project.workspaces.some((workspace) =>
  146-             hostPathEquals(workspace.root, canonicalRoot),
  147-           ),
  148-       )
  149-       if (!selectedProject) {
  150-         if (projects.length >= MAX_PROJECTS) throw new Error('Project registry is full')
  151-         selectedProject = createProject(canonicalRoot)
  152-         projects.push(selectedProject)
  153-       }
  154-       const selectedWorkspace = selectedProject.workspaces.find((workspace) =>
  155-         hostPathEquals(workspace.root, canonicalRoot),
  156-       )
  157-       if (selectedWorkspace && !selectedWorkspace.missing) {
  158-         const selectedIndex = selectedProject.workspaces.indexOf(selectedWorkspace)
  159-         const opened = openWorkspaceRecord(selectedWorkspace)
  160-         selectedProject.workspaces[selectedIndex] = opened
  161-         selectedProject.activeWorkspaceId = opened.id
  162-       }
  163-       activeProjectId = selectedProject.id
```

</details>


---

<sub>6m 36s</sub>

### `grep`

**requestSingleInstanceLock|second-instance|setName\(|app\.name**

"requestSingleInstanceLock|second-instance|setName\(|app\.name" (src)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx:23:    setName(dialog?.action === 'rename' ? basenameHostPath(dialog.source) : '')
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx:88:                onChange={(event) => setName(event.currentTarget.value)}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/tree/FileCreateOverlays.tsx:34:  useEffect(() => setName(''), [dialog?.id])
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/tree/FileCreateOverlays.tsx:218:                  onChange={(event) => setName(event.currentTarget.value)}
```


---

<sub>6m 43s</sub>

### Copilot

There's no single-instance lock, and only the SSH-acceptance build gets its own data directory. Next, the gauntlet and smoke helper scripts.

---

<sub>6m 44s</sub>

### `bash`

**Read gauntlet and run-smoke scripts**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/scripts && sed -n '1,40p' phase8-gauntlet.sh; echo "=== run-smoke.sh ==="; sed -n '1,30p' run-smoke.sh

<details>
<summary>35 lines</summary>

```
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi
=== run-smoke.sh ===
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
source_checkout=$PWD

: "${HVIR_SMOKE_SCENARIO:?Select one Electron smoke scenario with HVIR_SMOKE_SCENARIO; use npm run smoke for the aggregate suite}"

# A smoke launched by a Git hook must not inherit the invoking repository as
# implicit authority. Every Git process below must discover the temp project.
while IFS= read -r variable; do
  if [[ -n "$variable" ]]; then unset "$variable"; fi
done < <(git -C "$source_checkout" rev-parse --local-env-vars)
# A built smoke must never attach to an unrelated renderer development server.
unset ELECTRON_RENDERER_URL

source_commit=$(git -C "$source_checkout" rev-parse HEAD)
source_dirty=0
if [[ -n "$(git -C "$source_checkout" status --porcelain --untracked-files=normal)" ]]; then
  source_dirty=1
fi
temporary_parent=$(cd "${TMPDIR:-/tmp}" && pwd -P)
invocation_root=$(mktemp -d "$temporary_parent/hvir-smoke.XXXXXX")
project_root="$invocation_root/repository"
user_data_root="$invocation_root/user-data"
ownership_marker="$invocation_root/.hvir-smoke-owner"
ownership_marker_value='hvir-smoke-owned-root-v1'
smoke_pid=''

if ! printf '%s\n' "$ownership_marker_value" > "$ownership_marker"; then
<shellId: 37 completed with exit code 0>
```

</details>


---

<sub>6m 49s</sub>

### Copilot

Smoke runs use a throwaway project and user-data directory. I'll look at the SSH acceptance tooling so I can describe it accurately.

---

<sub>6m 50s</sub>

### `bash`

**Read SSH acceptance tooling**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && cat electron-builder.ssh-acceptance.yml; echo "=== run-macos-ssh-acceptance head ==="; sed -n '1,40p' scripts/run-macos-ssh-acceptance.sh | grep -E "^#|usage|Usage|echo" | head -30; echo "=== real host contract head ==="; sed -n '1,30p' scripts/real-host-ssh-contract.mts | grep -E "HVIR_[A-Z_]+" | head

<details>
<summary>34 lines</summary>

```
extends: ./electron-builder.yml
appId: dev.hvir.ssh-acceptance
productName: hvir SSH Acceptance
directories:
  output: dist/ssh-acceptance
  buildResources: build
forceCodeSigning: true
mac:
  # Clear the inherited release pkg target. The guarded command supplies only `dir`.
  target: null
  # Contributor acceptance bundles must never consume ambient release notarization state.
  notarize: false
  extendInfo:
    NSLocalNetworkUsageDescription: >-
      hvir SSH Acceptance connects to contributor-selected SSH hosts on the local
      network.
=== run-macos-ssh-acceptance head ===
#!/usr/bin/env bash
  echo 'Usage: scripts/run-macos-ssh-acceptance.sh [--build-only]' >&2
  echo 'Usage: scripts/run-macos-ssh-acceptance.sh [--build-only]' >&2
    echo "$name is required for the Apple-issued SSH acceptance identity." >&2
  echo 'Refusing to build or launch an ad-hoc or raw Electron SSH acceptance app.' >&2
  echo 'MACOS_TEAM_ID must be a ten-character Apple Developer Team ID.' >&2
  echo "Signed macOS SSH acceptance requires macOS arm64, found $(uname -s) $(uname -m)." >&2
=== real host contract head ===
  'HVIR_REAL_SSH_HOST',
  'HVIR_REAL_SSH_PORT',
  'HVIR_REAL_SSH_USER',
  'HVIR_REAL_SSH_HOST_KEY',
  'HVIR_REAL_SSH_ROOT_PARENT',
  'HVIR_REAL_SSH_PRIVATE_KEY',
  'HVIR_REAL_SSH_IDENTITY_FILE',
  'HVIR_REAL_SSH_PASSPHRASE',
<shellId: 38 completed with exit code 0>
```

</details>


---

<sub>7m 4s</sub>

### Copilot

The SSH acceptance build is signed maintainer tooling. Next I'll check what the `install-electron` binary used by `postinstall` is.

---

<sub>7m 5s</sub>

### `bash`

**Inspect electron install-electron bin**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e "const p=require('./node_modules/electron/package.json'); console.log(p.version, JSON.stringify(p.bin), JSON.stringify(p.scripts||{}))"; ls -la node_modules/.bin/install-electron; head -30 node_modules/electron/install.js 2>/dev/null | head -30

<details>
<summary>26 lines</summary>

```
43.4.1 {"electron":"cli.js","install-electron":"install.js"} {}
lrwxr-xr-x@ 1 air-jarmak  wheel  22 Sep 23 01:18 node_modules/.bin/install-electron -> ../electron/install.js
#!/usr/bin/env node

const { downloadArtifact } = require('@electron/get');

const childProcess = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { version } = require('./package');

const platformPath = getPlatformPath();

if (isInstalled()) {
  process.exit(0);
}

const platform = process.env.ELECTRON_INSTALL_PLATFORM || process.env.npm_config_platform || process.platform;
let arch = process.env.ELECTRON_INSTALL_ARCH || process.env.npm_config_arch || process.arch;

if (
  platform === 'darwin' &&
  process.platform === 'darwin' &&
  arch === 'x64' &&
  process.env.npm_config_arch === undefined
) {
  // When downloading for macOS ON macOS and we think we need x64 we should
  // check if we're running under rosetta and download the arm64 version if appropriate
  try {
    const output = childProcess.execSync('sysctl -in sysctl.proc_translated');
<shellId: 39 completed with exit code 0>
```

</details>


---

<sub>7m 14s</sub>

### Copilot

`install-electron` downloads the Electron binary. Next, the project picker strings for the SSH flow.

---

<sub>7m 14s</sub>

### `bash`

**Extract project picker/projects bar UI text**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces && grep -ohE ">[^<>{}]{3,120}<|(aria-label|title|placeholder)=\"[^\"]{3,120}\"|'[A-Z][^']{8,120}'" SessionDialog.tsx ProjectsBar.tsx WorkspaceCatalogDialogs.tsx MissingWorkspaceNotice.tsx ConnectionStatus.tsx | sort -u | head -70

<details>
<summary>37 lines</summary>

```
'Choose a folder from the tree'
'Choose folder'
'Close project'
'Close workspace'
'Connect to a host'
'Disconnect'
'File watching: inotify'
'File watching: native'
'File watching: polling'
'Missing from the last successful Git discovery'
'Prune stale records'
'Reconnect'
'Register another project before closing this one'
'Select another workspace before closing this one'
> 0 ? <
> Promise<
>Its terminals remain available. Close the workspace tab when finished.<
>Local<
>project root<
>prunable<
>Reopen a present worktree or manage a worktree that Git no longer finds.<
>Selected folder<
>Worktree no longer exists<
aria-label="Folder path"
aria-label="Folders"
aria-label="Hosts"
aria-label="New folder name"
aria-label="Open settings"
aria-label="Projects"
aria-label="Register project"
aria-label="Workspaces"
title="Connection controls"
title="Forget removed worktree from hvir"
title="Register project"
title="Remove Git's stale worktree administrative records"
title="Settings"
<shellId: 40 completed with exit code 0>
```

</details>


---

<sub>7m 38s</sub>

### Copilot

I now understand the main features. I'll confirm what a few keybindings actually do.

---

<sub>7m 39s</sub>

### `bash`

**Find keybinding action handlers**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src && grep -nE "toggleTerminalFocus|focusTerminal|cycleViewMode|nextWorkspace|focusTree|focusViewer" workbench/workbench-command-router.ts workbench/use-workbench-commands.ts | head -30

<details>
<summary>17 lines</summary>

```
workbench/workbench-command-router.ts:7:  readonly cycleViewMode: () => void
workbench/workbench-command-router.ts:12:  readonly toggleTerminalFocus: () => void
workbench/workbench-command-router.ts:13:  readonly focusTerminal: () => void
workbench/workbench-command-router.ts:14:  readonly focusViewer: () => void
workbench/workbench-command-router.ts:15:  readonly focusTree: () => void
workbench/workbench-command-router.ts:32:    case 'cycleViewMode':
workbench/workbench-command-router.ts:33:      if (ports.canUseViewerCommands()) ports.cycleViewMode()
workbench/workbench-command-router.ts:46:    case 'toggleTerminalFocus':
workbench/workbench-command-router.ts:47:      ports.toggleTerminalFocus()
workbench/workbench-command-router.ts:49:    case 'focusTerminal':
workbench/workbench-command-router.ts:50:      ports.focusTerminal()
workbench/workbench-command-router.ts:52:    case 'focusViewer':
workbench/workbench-command-router.ts:53:      ports.focusViewer()
workbench/workbench-command-router.ts:55:    case 'focusTree':
workbench/workbench-command-router.ts:56:      ports.focusTree()
workbench/workbench-command-router.ts:58:    case 'nextWorkspace':
<shellId: 41 completed with exit code 0>
```

</details>


---

<sub>7m 39s</sub>

### `bash`

**Find keybinding labels in settings**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings && grep -nE "cycleViewMode|findFile|findInFile|findInTerminal|goToLine|focusTerminal|focusViewer|focusTree|toggleTerminalFocus|nextWorkspace|previousWorkspace" keybindings.ts sections/KeybindingsSettings.tsx | head -30

```

<shellId: 42 completed with exit code 0>
```


---

<sub>7m 44s</sub>

### `grep`

**toggleTerminalFocus: \(\) =>|toggleTerminalFocus\(\) \{|toggleTerminalFocus =**

"toggleTerminalFocus: \(\) =>|toggleTerminalFocus\(\) \{|toggleTerminalFocus =" (src/renderer/src)

<details>
<summary>25 matches</summary>

```
[grep content: 2 matches across 2 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench]

workbench-command-router.ts (1 match(es)):
  10-   readonly findInTerminal: () => boolean
  11-   readonly goToLine: () => void
  12:   readonly toggleTerminalFocus: () => void
  13-   readonly focusTerminal: () => void
  14-   readonly focusViewer: () => void
  15-   readonly focusTree: () => void
  16-   readonly switchWorkspace: (direction: -1 | 1) => void
  17- }
  18- 
  19- export function dispatchWorkbenchCommand(
  20-   action: WebPaneCommandAction,

use-workbench-layout.ts (1 match(es)):
  213-   }, [])
  214- 
  215:   const toggleTerminalFocus = useCallback(
  216-     () => setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : 'maximized')),
  217-     [setTerminalMode],
  218-   )
  219-   const focusTerminal = useCallback((): void => {
  220-     setTerminalMode((mode) => (mode === 'collapsed' ? 'restored' : mode))
  221-     focusActiveTerminalAfterLayout()
  222-   }, [setTerminalMode])
  223-   const focusViewer = useCallback(
```

</details>


---

<sub>7m 44s</sub>

### `bash`

**Read keybindings settings section**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings && sed -n '1,80p' sections/KeybindingsSettings.tsx | grep -vE "^import" | head -60

<details>
<summary>47 lines</summary>

```
export function KeybindingsSettings({
  draft,
  validation,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  const keybindingError = validation?.fieldId === 'settings-keybindings-json'
  const describedBy = keybindingError
    ? 'settings-keybindings-help settings-keybindings-error'
    : 'settings-keybindings-help'
  return (
    <SettingsSection
      section="keybindings"
      title="Keybindings"
      description="Override workbench commands with explicit, portable keyboard strokes."
    >
      <div className="settings-section-scroll settings-fields">
        <label className="settings-keybindings" htmlFor="settings-keybindings-json">
          <span>Keybinding overrides (JSON)</span>
          <textarea
            id="settings-keybindings-json"
            spellCheck={false}
            value={draft.keybindingsJson}
            aria-invalid={keybindingError}
            aria-describedby={describedBy}
            onChange={(event) => onChange('keybindingsJson', event.currentTarget.value)}
          />
          <small id="settings-keybindings-help">
            Use Mod for Command on macOS and Ctrl on Linux. Changes apply after Save.
          </small>
          {keybindingError ? (
            <small id="settings-keybindings-error" className="dialog-error">
              {validation.message}
            </small>
          ) : null}
        </label>
      </div>
    </SettingsSection>
  )
}
<shellId: 43 completed with exit code 0>
```

</details>


---

<sub>7m 50s</sub>

### Copilot

`Mod` means Command on macOS and Ctrl on Linux, and `toggleTerminalFocus` maximizes or restores the terminal panel. Next, the Stryker config and ESLint scope.

---

<sub>7m 50s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/stryker.config.json.**

/private/var/tmp/ws/ffb55c2b/hvir/stryker.config.json

<details>
<summary>21 lines</summary>

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

</details>


---

<sub>7m 50s</sub>

### `bash`

**Read tsconfig files**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && cat tsconfig.json tsconfig.node.json tsconfig.web.json tsconfig.base.json

<details>
<summary>63 lines</summary>

```
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}
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
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "noEmit": true
  }
}
<shellId: 44 completed with exit code 0>
```

</details>


---

<sub>8m 8s</sub>

### `grep`

**no-sandbox|apparmor_restrict_unprivileged_userns|chrome-sandbox|software-rendering**

"no-sandbox|apparmor_restrict_unprivileged_userns|chrome-sandbox|software-rendering" (scripts, src/main, .github)

<details>
<summary>10 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:375:            xvfb-run -a npm run smoke:linux:installed -- --software-rendering
/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh:16:readonly HVIR_APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke.sh:120:    --no-sandbox \
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-linux-package-smoke.sh:8:  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-linux-package-smoke.sh:14:--software-rendering) software_rendering=1 ;;
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-linux-package-smoke.sh:16:  echo 'Usage: run-linux-package-smoke.sh [--software-rendering]' >&2
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-linux-package-smoke.sh:31:apparmor_userns_restriction=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-linux-package-smoke.sh:291:  sandbox_owner_mode=$(stat -c '%U:%G:%a' /opt/hvir/chrome-sandbox)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/smoke/platform-contracts.ts:249:  if (process.argv.includes('--no-sandbox')) {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/smoke/platform-contracts.ts:250:    throw new Error('required Chromium process sandbox was disabled by --no-sandbox')
```

</details>


---

<sub>8m 10s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke.sh (lines 95-140)

<details>
<summary>31 lines</summary>

```
  cd "$source_checkout"
  development_smoke_log="$user_data_root/development-performance.log"
  HVIR_SMOKE=1 \
    HVIR_SMOKE_SOURCE_COMMIT="$source_commit" \
    HVIR_SMOKE_SOURCE_DIRTY="$source_dirty" \
    HVIR_SMOKE_SCENARIO=development-performance \
    HVIR_PROJECT_ROOT="$project_root" \
    ELECTRON_ENTRY="$source_checkout" \
    ELECTRON_CLI_ARGS="[\"--user-data-dir=$user_data_root\"]" \
    "$source_checkout/node_modules/.bin/electron-vite" \
    "$source_checkout" \
    --mode smoke \
    --noSandbox \
    --clearScreen false | tee "$development_smoke_log"
  if ! grep -qx 'HVIR_SMOKE_OK' "$development_smoke_log"; then
    echo 'Development Performance Timeline smoke ended without its success sentinel' >&2
    exit 1
  fi
else
  HVIR_SMOKE=1 \
    HVIR_SMOKE_SOURCE_COMMIT="$source_commit" \
    HVIR_SMOKE_SOURCE_DIRTY="$source_dirty" \
    HVIR_SMOKE_SCENARIO="${HVIR_SMOKE_SCENARIO}" \
    "$source_checkout/node_modules/.bin/electron" "$source_checkout" \
    --project-root="$project_root" \
    --no-sandbox \
    --user-data-dir="$user_data_root" &
  smoke_pid=$!
  wait "$smoke_pid"
  smoke_pid=''
fi
```

</details>


---

<sub>8m 18s</sub>

### Copilot

Smoke runs launch unpackaged Electron with `--no-sandbox`. Before suggesting `npm run dev -- --noSandbox` as a Linux troubleshooting tip, I'll confirm electron-vite supports that flag.

---

<sub>8m 19s</sub>

### `bash`

**Verify electron-vite --noSandbox support**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e "console.log(require('./node_modules/electron-vite/package.json').version)"; ls node_modules/electron-vite/dist/ | head; grep -rhoE "noSandbox[^,;]{0,80}" node_modules/electron-vite/dist/*.js 2>/dev/null | sort -u | head -10

<details>
<summary>8 lines</summary>

```
5.0.0
chunks
cli.js
index.d.ts
index.js
noSandbox'
noSandbox) {
<shellId: 45 completed with exit code 0>
```

</details>


---

<sub>8m 23s</sub>

### `bash`

**Show electron-vite noSandbox usage**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && grep -rnE "noSandbox" node_modules/electron-vite/dist/cli.js node_modules/electron-vite/dist/chunks/*.js 2>/dev/null | head -10

```
node_modules/electron-vite/dist/cli.js:43:    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
node_modules/electron-vite/dist/cli.js:55:    if (options.noSandbox) {
node_modules/electron-vite/dist/cli.js:94:    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
node_modules/electron-vite/dist/cli.js:99:    if (options.noSandbox) {
<shellId: 46 completed with exit code 0>
```


---

<sub>8m 25s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/node_modules/electron-vite/dist/cli.js.**

/private/var/tmp/ws/ffb55c2b/hvir/node_modules/electron-vite/dist/cli.js (lines 36-70)

<details>
<summary>35 lines</summary>

```
    .command('[root]', 'start dev server and electron app')
    .alias('serve')
    .alias('dev')
    .option('-w, --watch', `[boolean] rebuilds when main process or preload script modules have changed on disk`)
    .option('--inspect [port]', `[boolean | number] enable V8 inspector on the specified port`)
    .option('--inspectBrk [port]', `[boolean | number] enable V8 inspector on the specified port`)
    .option('--remoteDebuggingPort <port>', `[string] port for remote debugging`)
    .option('--noSandbox', `[boolean] forces renderer process to run un-sandboxed`)
    .option('--rendererOnly', `[boolean] only dev server for the renderer`)
    .action(async (root, options) => {
    if (options.remoteDebuggingPort) {
        process.env.REMOTE_DEBUGGING_PORT = options.remoteDebuggingPort;
    }
    if (options.inspect) {
        process.env.V8_INSPECTOR_PORT = typeof options.inspect === 'number' ? `${options.inspect}` : '5858';
    }
    if (options.inspectBrk) {
        process.env.V8_INSPECTOR_BRK_PORT = typeof options.inspectBrk === 'number' ? `${options.inspectBrk}` : '5858';
    }
    if (options.noSandbox) {
        process.env.NO_SANDBOX = '1';
    }
    if (options['--']) {
        process.env.ELECTRON_CLI_ARGS = JSON.stringify(options['--']);
    }
    if (options.entry) {
        process.env.ELECTRON_ENTRY = options.entry;
    }
    const { createServer } = await import('./chunks/lib-7y7CgM8M.js');
    const inlineConfig = createInlineConfig(root, options);
    try {
        await createServer(inlineConfig, { rendererOnly: options.rendererOnly });
    }
    catch (e) {
        const error = e;
```

</details>


---

<sub>8m 59s</sub>

### Copilot

electron-vite's `dev` command does support `--noSandbox`. Next I'll check what the `local-forward` environment binding in harness profiles means.

---

<sub>8m 59s</sub>

### `grep`

**local-forward**

"local-forward" (src/main/harness, src/renderer/src/settings)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx:205:                      source: event.currentTarget.value as 'host' | 'local-forward',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx:211:                <option value="local-forward">Forward local</option>
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/harness-profile-store.ts:751:    (value['source'] === 'host' || value['source'] === 'local-forward') &&
```


---

<sub>9m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx (lines 150-240)

<details>
<summary>91 lines</summary>

```
            placeholder="NAME"
            onChange={(event) =>
              onChange(
                replaceHarnessValue(bindings, index, {
                  ...binding,
                  name: event.currentTarget.value,
                }),
              )
            }
          />
          <select
            value={binding.kind}
            aria-label="Environment operation"
            onChange={(event) => {
              const kind = event.currentTarget.value
              const next: HarnessEnvironmentBinding =
                kind === 'unset'
                  ? { kind: 'unset', name: binding.name }
                  : kind === 'literal'
                    ? { kind: 'literal', name: binding.name, value: '' }
                    : {
                        kind: 'reference',
                        name: binding.name,
                        source: 'host',
                        sourceName: binding.name,
                      }
              onChange(replaceHarnessValue(bindings, index, next))
            }}
          >
            <option value="literal">Plaintext value</option>
            <option value="reference">Secret reference</option>
            <option value="unset">Unset</option>
          </select>
          {binding.kind === 'literal' ? (
            <input
              aria-label="Environment value"
              value={binding.value}
              onChange={(event) =>
                onChange(
                  replaceHarnessValue(bindings, index, {
                    ...binding,
                    value: event.currentTarget.value,
                  }),
                )
              }
            />
          ) : binding.kind === 'reference' ? (
            <>
              <select
                aria-label="Reference source"
                value={binding.source}
                onChange={(event) =>
                  onChange(
                    replaceHarnessValue(bindings, index, {
                      ...binding,
                      source: event.currentTarget.value as 'host' | 'local-forward',
                    }),
                  )
                }
              >
                <option value="host">Target host</option>
                <option value="local-forward">Forward local</option>
              </select>
              <input
                aria-label="Reference name"
                value={binding.sourceName}
                onChange={(event) =>
                  onChange(
                    replaceHarnessValue(bindings, index, {
                      ...binding,
                      sourceName: event.currentTarget.value,
                    }),
                  )
                }
              />
            </>
          ) : (
            <span />
          )}
          <button
            type="button"
            aria-label={`Remove ${binding.name || 'environment row'}`}
            onClick={() =>
              onChange(bindings.filter((_, candidate) => candidate !== index))
            }
          >
            ×
          </button>
        </div>
      ))}
    </div>
```

</details>


---

<sub>9m 8s</sub>

### Copilot

Environment bindings can be a plaintext value, a secret reference (from the target host or forwarded from local), or unset. I'll check the image paste behavior.

---

<sub>9m 8s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/remote-image-paste.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/remote-image-paste.ts (lines 1-70)

<details>
<summary>62 lines</summary>

```
import { randomUUID } from 'node:crypto'

import {
  hostPathEquals,
  LOCAL_HOST_ID,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import type { ManagedPty, PtySupervisor } from '../pty/pty-supervisor'
import type {
  RendererOwner,
  RendererResourceLease,
  RendererResourceScopes,
} from '../renderer-resource-scopes'
import { harnessProvider } from './bundled-harness-providers'
import type { HarnessRemoteImagePasteContract } from './harness-provider-contract'
import {
  RemoteImagePasteStorage,
  type RemoteImagePasteStoragePort,
} from './remote-image-paste-storage'

export {
  RemoteImagePasteStorage,
  type RemoteImagePasteStoragePort,
} from './remote-image-paste-storage'

export const REMOTE_IMAGE_PASTE_MAX_BYTES = 20 * 1024 * 1024
export const REMOTE_IMAGE_PASTE_MAX_PIXELS = 32 * 1024 * 1024
export const REMOTE_IMAGE_PASTE_MAX_DIMENSION = 8_192
export const REMOTE_IMAGE_PASTE_MAX_CONCURRENT = 2
export const REMOTE_IMAGE_PASTE_MAX_HOST_ITEMS = 16
export const REMOTE_IMAGE_PASTE_MAX_HOST_BYTES = 64 * 1024 * 1024
export const REMOTE_IMAGE_PASTE_TRANSFER_TIMEOUT_MS = 15_000
export const REMOTE_IMAGE_PASTE_TTL_MS = 24 * 60 * 60_000
const REMOTE_IMAGE_PASTE_SHUTDOWN_TIMEOUT_MS = 2_000

export interface ClipboardPng {
  readonly width: number
  readonly height: number
  readonly bytes: Uint8Array
}

export interface ClipboardPngSource {
  read(): ClipboardPng | 'too-large' | undefined
}

type ImagePastePtys = Pick<PtySupervisor, 'get' | 'isOwnedBy' | 'write' | 'onExit'>
type ImagePasteResources = Pick<RendererResourceScopes, 'assertCurrent' | 'register'>

export interface RemoteImagePasteCoordinatorOptions {
  readonly clipboard: ClipboardPngSource
  readonly ptys: ImagePastePtys
  readonly resources: ImagePasteResources
  readonly getHost: (hostId: string) => ProjectHost | undefined
  readonly storage?: RemoteImagePasteStoragePort
  readonly setTimer?: typeof setTimeout
  readonly clearTimer?: typeof clearTimeout
}

export type RemoteImagePasteOutcome =
  | { readonly outcome: 'forward-key' }
  | { readonly outcome: 'path-inserted' }
  | {
      readonly outcome: 'failed'
      readonly reason:
        | 'busy'
        | 'image-too-large'
        | 'target-changed'
        | 'transfer-failed'
    }
```

</details>


---

<sub>9m 28s</sub>

### Copilot

Image paste is confirmed: on SSH hosts hvir uploads the clipboard PNG and inserts its path. Next, the diff-base labels and how remote PTYs are spawned.

---

<sub>9m 29s</sub>

### `grep`

**'working-tree'|'branch-point'|'head'**

"'working-tree'|'branch-point'|'head'" (src/renderer/src/viewer)

<details>
<summary>7 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/use-viewer-workspace.ts:172:      diffBase: DiffBase = 'head',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/viewer-workspace-persistence.ts:176:  return value === 'working-tree' || value === 'head' || value === 'branch-point'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/viewer-workspace-model.ts:151:              context === 'git' ? (action.request.diffBase ?? 'head') : tab.diffBase,
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/viewer-workspace-model.ts:164:            diffBase: action.request.diffBase ?? 'head',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/DiffView.tsx:340:  if (base === 'working-tree') return 'Index → Working tree'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/DiffView.tsx:341:  if (base === 'branch-point') return 'Branch point → HEAD'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/diff-policy.ts:13:  return dirty && revision === undefined && base !== 'branch-point'
```

</details>


---

<sub>9m 29s</sub>

### `grep`

**spawnPty\(**

"spawnPty\(" (src/main/project-host/ssh-host.ts)

<details>
<summary>13 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:501:  async spawnPty(opts: SpawnPtyOptions): Promise<PtyProcess> {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-502-    const channel = await this.openTerminalPtyChannel(opts)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-503-    const data = new Set<(v: string) => void>(),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-504-      exits = new Set<(v: { exitCode: number; signal: number | undefined }) => void>()
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-505-    const decoder = new StringDecoder('utf8')
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-506-    let exited = false
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-507-    const reportExit = (exitCode: number): void => {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-508-      if (exited) return
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-509-      exited = true
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-510-      for (const cb of exits) cb({ exitCode, signal: undefined })
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-511-    }
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-512-    const transportFailure = (): void => reportExit(255)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts-513-    const stopTransportFailure = this.transportPool.onChannelTransportFailure(
```

</details>


---

<sub>9m 33s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/DiffView.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/viewer/DiffView.tsx (lines 330-346)

<details>
<summary>15 lines</summary>

```
    return 'At least one Git input was truncated; an incomplete comparison is not shown.'
  }
  if (reason === 'line-limit') {
    return 'The complete inputs exceed the interactive diff line budget.'
  }
  return 'The complete inputs exceed the interactive diff byte budget.'
}

function requestedComparison(base: DiffBase, revision?: string): string {
  if (revision) return `${revision.slice(0, 8)}^ → ${revision.slice(0, 8)}`
  if (base === 'working-tree') return 'Index → Working tree'
  if (base === 'branch-point') return 'Branch point → HEAD'
  return 'HEAD → Working tree'
}

const diffTheme = EditorView.theme({
  '&': { height: '100%', backgroundColor: 'var(--viewer-bg)', color: 'var(--text)' },
```

</details>


---

<sub>9m 42s</sub>

### `grep`

**known_hosts|ProxyJump|proxyjump|ProxyCommand|proxycommand**

"known_hosts|ProxyJump|proxyjump|ProxyCommand|proxycommand" (src/main)

```
No matches found.
```


---

<sub>9m 48s</sub>

### `bash`

**Read SSH host options**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host && sed -n '1,60p' ssh-host-options.ts | grep -vE "^import"

<details>
<summary>30 lines</summary>

```
export interface SshHostOptions {
  readonly config: SshAliasConfig
  readonly identitySource?: SshIdentitySource
  readonly agentSocket?: string
  readonly prompter: SshAuthPrompter
  readonly trust: SshHostTrust
  readonly pollIntervalMs?: number
  /** Slower snapshot safety net when inotify stays alive but emits no usable events. */
  readonly watchdogIntervalMs?: number
  /** Lightweight cache/tree refresh cadence, independent of recursive snapshots. */
  readonly refreshPulseIntervalMs?: number
  /** Idle delay between bounded recursive safety-scan cycles. */
  readonly slowScanIntervalMs?: number
  /** Maximum adaptive idle delay between unchanged safety-scan cycles. */
  readonly maxSlowScanIntervalMs?: number
  /** Maximum directories enumerated in one polling tick. */
  readonly pollDirectoryBatchSize?: number
  /** Local window for catching multiple writes hidden by SFTP's second-level mtime. */
  readonly fingerprintObservationWindowMs?: number
  /**
   * Maximum short-lived buffered exec channels. Long-lived PTY, watcher, and
   * telemetry channels plus SFTP share the control transport budget. The
   * default admits bounded parallel Git/filesystem reads while pool admission
   * still protects every transport's reserved capacity.
   */
  readonly maxConcurrentExecs?: number
  /** Test seam for transport lifecycle races; production always constructs ssh2.Client. */
  readonly clientFactory?: () => Client
}
<shellId: 47 completed with exit code 0>
```

</details>


---

<sub>10m 17s</sub>

### Copilot

Only `HostName`, `User`, `Port`, and `IdentityFile` are applied, and host keys are trusted in hvir's own store rather than `~/.ssh/known_hosts`. I'll confirm how smoke failure evidence is written.

---

<sub>10m 17s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts (lines 60-130)

<details>
<summary>66 lines</summary>

```

export interface SmokeScenarioInvocationOptions {
  readonly command?: string
  readonly args?: readonly string[]
  readonly cwd?: string
  readonly environment?: NodeJS.ProcessEnv
  readonly timeoutMs?: number
  readonly terminationGraceMs?: number
  readonly forceKillSettleMs?: number
  readonly artifactDirectory?: string
  readonly interruptionSignal?: AbortSignal
  readonly registerSignalEscalation?: (escalate: () => void) => () => void
}

export function smokeAttemptTimeoutMs(scenario: SmokeScenarioName): number {
  return scenario === 'capacity'
    ? CAPACITY_SMOKE_ATTEMPT_TIMEOUT_MS
    : DEFAULT_SMOKE_ATTEMPT_TIMEOUT_MS
}

export function parseSmokeRepetitionCount(value: string | undefined): number {
  if (value === undefined) return 1
  if (!/^[0-9]+$/.test(value)) {
    throw new Error(
      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
    )
  }
  const repetitionCount = Number(value)
  if (
    !Number.isSafeInteger(repetitionCount) ||
    repetitionCount < 1 ||
    repetitionCount > MAX_SMOKE_REPETITIONS
  ) {
    throw new Error(
      `HVIR_SMOKE_REPEAT must be an ASCII decimal integer from 1 through ${MAX_SMOKE_REPETITIONS}; received ${JSON.stringify(value)}`,
    )
  }
  return repetitionCount
}

export function selectedSmokeScenarios(
  value: string | undefined,
  positionalNames: readonly string[] = [],
): readonly SmokeScenarioName[] {
  if (positionalNames.length > 0) {
    if (value !== undefined && value !== '') {
      throw new Error(
        'Select Electron smoke scenarios with positional names or HVIR_SMOKE_SCENARIO, not both',
      )
    }
    return positionalNames.map((name) => parseElectronSmokeScenario(name))
  }
  if (value === undefined || value === '') return DEFAULT_SMOKE_SCENARIOS
  return [parseElectronSmokeScenario(value)]
}

export async function runSmokeScenarioGroups(
  scenarios: readonly SmokeScenarioName[],
  repetitionCount: number,
  invoke: InvokeSmokeScenario,
  interruptionSignal?: AbortSignal,
): Promise<readonly SmokeScenarioResult[]> {
  const results: SmokeScenarioResult[] = []
  for (let iteration = 1; iteration <= repetitionCount; iteration += 1) {
    for (const scenario of scenarios) {
      if (interruptionSignal?.aborted) {
        results.push({
          scenario,
          iteration,
          repetitionCount,
          status: 'failed',
```

</details>


---

<sub>10m 17s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts (lines 410-440)

<details>
<summary>29 lines</summary>

```
  } catch (error) {
    const code = (error as { code?: unknown } | undefined)?.code
    if (code !== 'ESRCH') {
      console.error('[smoke:launcher] failed to terminate timed-out process group')
    }
  }
}

async function retainFailureArtifact(
  options: Parameters<typeof createSmokeFailureArtifact>[0],
  directory = process.env.HVIR_SMOKE_ARTIFACT_DIR,
): Promise<void> {
  try {
    const path = await writeSmokeFailureArtifactWithinDeadline(() =>
      writeSmokeFailureArtifact(directory, createSmokeFailureArtifact(options)),
    )
    if (path) console.error('[smoke:artifact] retained bounded failure evidence')
  } catch {
    console.error('[smoke:artifact] failed to retain bounded failure evidence')
  }
}

export async function writeSmokeFailureArtifactWithinDeadline(
  writeArtifact: () => Promise<string | undefined>,
  timeoutMs = FAILURE_ARTIFACT_TIMEOUT_MS,
): Promise<string | undefined> {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error('Smoke failure artifact deadline was invalid')
  }
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
```

</details>


---

<sub>10m 23s</sub>

### `grep`

**MAX_SMOKE_REPETITIONS =|DEFAULT_SMOKE_ATTEMPT_TIMEOUT_MS =**

"MAX_SMOKE_REPETITIONS =|DEFAULT_SMOKE_ATTEMPT_TIMEOUT_MS =" (scripts/run-smoke-scenarios.mts)

```
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:51:const MAX_SMOKE_REPETITIONS = 100
/private/var/tmp/ws/ffb55c2b/hvir/scripts/run-smoke-scenarios.mts:52:const DEFAULT_SMOKE_ATTEMPT_TIMEOUT_MS = 180_000
```


---

<sub>10m 45s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts (lines 1-95)

<details>
<summary>90 lines</summary>

```
import { readFileSync } from 'node:fs'
import process from 'node:process'
import { URL } from 'node:url'
import { ReleaseGitHubEvidenceReader } from './release-github-evidence.mts'
import {
  evaluateReleaseCiEvidence,
  loadReleaseCiEvidence,
  RELEASE_REPOSITORY,
} from './require-release-ci-evidence.mts'
import { parseCompletingChildTrailer } from './project-management/pull-request-relationships.ts'
import { fullCommit, git, requireAncestor } from './architecture-inventory.mts'

import type { ArchitecturePolicy } from './architecture-policy.mts'
import type {
  ArchitectureContext,
  ArchitectureIntegration,
} from './architecture-authorization.mts'

interface GitHubIssue {
  number: number
  state: string
  repository_url?: string
  labels?: Array<{ name: string }>
  parent?: GitHubIssue | null
  pull_request?: unknown
}
interface GitHubRef {
  ref: string
  sha: string
  repo?: { full_name: string } | null
}
interface GitHubPullRequest {
  number: number
  body?: string | null
  base: GitHubRef
  head: GitHubRef
}
interface PullRequestEvent {
  number: number
  pull_request: GitHubPullRequest
}

const reader = new ReleaseGitHubEvidenceReader('Architecture GitHub evidence')
export function githubAdapter(token: string | undefined) {
  if (!token)
    throw new Error(
      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
    )
  const request = <T,>(path: string): Promise<T> =>
    reader.requestJson<T>(
      new URL(`https://api.github.com/repos/${RELEASE_REPOSITORY}/${path}`),
      token,
    )
  async function issue(number: string | number): Promise<GitHubIssue> {
    // Native parent is read from the documented issue relationship endpoint, never PR prose.
    const record = await request<GitHubIssue>(`issues/${number}`)
    let parent: GitHubIssue | null = null
    const response = await globalThis.fetch(
      `https://api.github.com/repos/${RELEASE_REPOSITORY}/issues/${number}/parent`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `******
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )
    if (response.status !== 404) {
      if (!response.ok)
        throw new Error(`Native parent evidence failed (${response.status})`)
      parent = (await response.json()) as GitHubIssue
      if (parent.repository_url !== `https://api.github.com/repos/${RELEASE_REPOSITORY}`)
        throw new Error('Cross-repository native parent')
    }
    return { ...record, parent }
  }
  return { request, issue, token }
}

type ArchitectureGitHub = ReturnType<typeof githubAdapter>

async function epicBranch(api: ArchitectureGitHub, issue: GitHubIssue): Promise<string> {
  const record = Object.hasOwn(issue, 'parent') ? issue : await api.issue(issue.number)
  if (record.state !== 'open' || record.parent)
    throw new Error('Native epic is closed or nested')
  if (
    !record.labels?.some((label) => label.name === 'kind:epic') ||
    record.labels.filter((label) => label.name.startsWith('kind:')).length !== 1
  )
    throw new Error('Native parent is not one valid epic')
  const branches = await api.request<Array<{ ref: string }>>(
    `git/matching-refs/heads/epic/${issue.number}-`,
  )
  if (!Array.isArray(branches) || branches.length !== 1)
    throw new Error('Missing or ambiguous exact epic branch')
```

</details>


---

<sub>10m 45s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-github.mts (lines 125-200)

<details>
<summary>76 lines</summary>

```
    if (!environment.GITHUB_EVENT_PATH) throw new Error('Missing PR event file')
    const event = JSON.parse(
      readFileSync(environment.GITHUB_EVENT_PATH, 'utf8'),
    ) as PullRequestEvent
    const pr = await api.request<GitHubPullRequest>(`pulls/${event.number}`)
    head = event.pull_request?.head.sha
    if (
      pr.head.repo?.full_name !== RELEASE_REPOSITORY ||
      pr.base.repo?.full_name !== RELEASE_REPOSITORY ||
      pr.head.sha !== head ||
      pr.base.sha !== event.pull_request?.base.sha ||
      pr.base.ref !== event.pull_request?.base.ref
    ) {
      throw new Error(
        'CI candidate/base differs from the current PR event; refresh and reverify',
      )
    }
    const testedParents = git(root, ['show', '-s', '--format=%P', tested]).split(' ')
    if (
      tested !== environment.GITHUB_SHA ||
      testedParents.length !== 2 ||
      testedParents[0] !== pr.base.sha ||
      testedParents[1] !== head ||
      git(root, ['rev-parse', `${tested}^{tree}`]) !==
        git(root, ['rev-parse', `${head}^{tree}`])
    ) {
      throw new Error(
        'CI merge ref does not preserve the exact current base/head candidate tree',
      )
    }
    target = pr.base.ref
    eventBase = pr.base.sha
    if (target.startsWith('epic/')) {
      const trailer = parseCompletingChildTrailer(pr.body ?? '', pr.number)
      if (!trailer.issueNumber || trailer.errors.length)
        throw new Error('Missing exact completing-child relationship')
      const child = await api.issue(trailer.issueNumber)
      if (!child.parent || (await epicBranch(api, child.parent)) !== target)
        throw new Error('Wrong native epic target')
      epic = target
      kind = 'epic-child'
    } else if (target === 'main' && pr.head.ref.startsWith('epic/')) {
      const number = /^epic\/([1-9]\d*)-/.exec(pr.head.ref)?.[1]
      if (!number || (await epicBranch(api, await api.issue(number))) !== pr.head.ref)
        throw new Error('Wrong cumulative epic')
      epic = pr.head.ref
      kind = 'cumulative'
    } else if (target !== 'main') throw new Error('Unsupported architecture target')
  } else {
    const branch = git(root, ['branch', '--show-current'])
    const match = /^agent\/issue-([1-9]\d*)$/.exec(branch)
    if (match) {
      const child = await api.issue(match[1]!)
      if (child.state !== 'open') throw new Error('Local delivery issue is closed')
      if (child.parent) {
        target = await epicBranch(api, child.parent)
        epic = target
        kind = 'epic-child'
      }
    } else if (branch.startsWith('epic/')) {
      const number = /^epic\/([1-9]\d*)-/.exec(branch)?.[1]
      if (!number || (await epicBranch(api, await api.issue(number))) !== branch)
        throw new Error('Wrong local cumulative epic')
      epic = branch
      kind = 'cumulative'
    } else if (branch !== 'main')
      throw new Error(
        'Unresolved local delivery context; use the issue worktree or exact epic branch',
      )
  }
  const ref = await api.request<{ object?: { sha?: string } }>(`git/ref/heads/${target}`)
  const base = reader.requiredString(ref.object?.sha)
  if (eventBase && base !== eventBase)
    throw new Error('Live target changed from the tested PR event; refresh and reverify')
  requireAncestor(root, base, head)
  return { kind, target, epic, base, head, tested }
```

</details>


---

<sub>10m 53s</sub>

### `bash`

**Run ESLint and Prettier check**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npm run --silent lint 2>&1 | tail -8; echo "lint exit=${PIPESTATUS[0]}"; npm run --silent format:check 2>&1 | tail -5; echo "format exit=${PIPESTATUS[0]}"

```
<command started in background with shellId: lintfmt>
```


---

<sub>11m 14s</sub>

### Copilot

While lint runs, I'll check what moving a terminal to another worktree actually does, so the README describes it accurately.

---

<sub>11m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalMoveDialog.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalMoveDialog.tsx

<details>
<summary>113 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import type { TerminalMovePlan } from '../../../shared'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'

export function TerminalMoveDialog({
  plan,
  onCancel,
  onMove,
}: {
  readonly plan: TerminalMovePlan
  readonly onCancel: () => void
  readonly onMove: () => Promise<void>
}): ReactElement {
  const busyRef = useRef(false)
  const mountedRef = useRef(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const move = (): void => {
    if (busyRef.current) return
    busyRef.current = true
    setBusy(true)
    setError(undefined)
    void onMove()
      .catch((reason: unknown) => {
        if (mountedRef.current) setError(errorMessage(reason))
      })
      .finally(() => {
        busyRef.current = false
        if (mountedRef.current) setBusy(false)
      })
  }

  return (
    <ConfirmationDialog
      labelledBy="terminal-move-title"
      actions={[
        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
        {
          label: 'Move terminal here and open',
          kind: 'primary',
          onSelect: move,
        },
      ]}
      busy={busy}
      className="terminal-move-dialog"
    >
      <header className="terminal-move-header">
        <span className="terminal-move-kicker">
          <span className="terminal-move-live-dot" aria-hidden="true" />
          Live terminal transfer
        </span>
        <h2 id="terminal-move-title">Move this live terminal?</h2>
        <p>Rehome the terminal in another worktree without restarting its process.</p>
      </header>
      <div className="terminal-move-body">
        <div className="terminal-move-session">
          <strong>{plan.terminalTitle}</strong>
          <span>running</span>
        </div>
        <dl className="terminal-move-details" aria-label="Terminal workspace move">
          <div className="terminal-move-location terminal-move-location-source">
            <dt>From</dt>
            <dd>
              <strong>{plan.sourceWorkspaceName}</strong>
              <code title={plan.sourceRoot.path}>{plan.sourceRoot.path}</code>
            </dd>
          </div>
          <div className="terminal-move-location terminal-move-location-target">
            <dt>To</dt>
            <dd>
              <strong>{plan.targetWorkspaceName}</strong>
              <code title={plan.targetRoot.path}>{plan.targetRoot.path}</code>
            </dd>
          </div>
        </dl>
        <div className="terminal-move-continuity">
          <span className="terminal-move-continuity-mark" aria-hidden="true">
            ✓
          </span>
          <p>
            <strong>Process and conversation stay live</strong>
            <span>
              The supervised process is not restarted. Its original launch directory does
              not change.
            </span>
          </p>
        </div>
        {plan.webPaneIds.length > 0 ? (
          <div className="terminal-move-warning" role="status">
            <span className="terminal-move-warning-mark" aria-hidden="true">
              !
            </span>
            <p>
              <strong>
                {plan.webPaneIds.length} workspace-authorized web pane
                {plan.webPaneIds.length === 1 ? '' : 's'} will close.
              </strong>
              <span>Browser state is not migrated.</span>
            </p>
          </div>
        ) : null}
        {error ? <p className="dialog-error">{error}</p> : null}
      </div>
    </ConfirmationDialog>
  )
}

function errorMessage(reason: unknown): string {
  return reason instanceof Error ? reason.message : String(reason)
}
```

</details>


---

<sub>11m 21s</sub>

### Copilot

Moving rehomes a live terminal in another worktree without restarting it, and its original launch directory stays the same. Next I'll check which documents are eligible for document review.

---

<sub>11m 21s</sub>

### `bash`

**Read document review eligibility**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/document-review && sed -n '1,60p' document-review-eligibility.ts | grep -vE "^import"

<details>
<summary>55 lines</summary>

```
DOCUMENT_REVIEW_LIMITS,
  type DocumentReviewComment,
  type DocumentReviewModel,
  type ReviewDeliveryEligibility,
  type ReviewPolicyError,
} from './document-review-types'
  isValidReviewId,
  reviewPolicyError,
  reviewWorkspaceEquals,
  validateReviewCommentBody,
  validateReviewDocument,
} from './document-review-validation'

export function reviewCommentDeliveryEligibility(
  model: DocumentReviewModel,
  comment: DocumentReviewComment,
): ReviewDeliveryEligibility {
  if (validateDocumentReviewCommentRecord(model, comment)) {
    return { eligible: false, reason: 'invalid-record' }
  }
  if (comment.lifecycle === 'sent') return { eligible: false, reason: 'sent' }
  if (comment.lifecycle === 'resolved') return { eligible: false, reason: 'resolved' }
  if (comment.anchor.state.status === 'stale' && !comment.anchor.state.reviewed) {
    return { eligible: false, reason: 'stale-unreviewed' }
  }
  return { eligible: true }
}

export function validateDocumentReviewCommentRecord(
  model: DocumentReviewModel,
  comment: DocumentReviewComment,
): ReviewPolicyError | undefined {
  if (
    !reviewWorkspaceEquals(model.workspace, comment.workspace) ||
    validateReviewDocument(model.workspace, comment.document) ||
    !isValidReviewId(comment.id, DOCUMENT_REVIEW_LIMITS.idBytes) ||
    validateReviewCommentBody(comment.body) ||
    validateDocumentReviewAnchor(comment.anchor) ||
    (comment.lifecycle !== 'draft' &&
      comment.lifecycle !== 'sent' &&
      comment.lifecycle !== 'resolved')
  ) {
    return reviewPolicyError('invalid-comment', 'The review comment record is invalid')
  }
  return undefined
}

/** Admission for new batch membership; existing members may later become ineligible. */
export function validateReviewBatchCandidate(
  model: DocumentReviewModel,
  comment: DocumentReviewComment,
): ReviewPolicyError | undefined {
  const eligibility = reviewCommentDeliveryEligibility(model, comment)
  if (eligibility.eligible) return undefined
  return reviewPolicyError(
    eligibility.reason === 'sent' || eligibility.reason === 'resolved'
      ? 'comment-not-draft'
<shellId: 48 completed with exit code 0>
```

</details>


---

<sub>11m 27s</sub>

### `grep`

**markdown|renderedFileType|viewMode|mode === '(source|rendered)'**

"markdown|renderedFileType|viewMode|mode === '(source|rendered)'" (src/renderer/src/document-review)

<details>
<summary>99 matches</summary>

```
[grep content: 86 matches across 13 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/document-review]

document-review-workspace.ts (2 match(es)):
  11:   DocumentReviewModel,
  20:   readonly model?: DocumentReviewModel
DocumentReviewControls.tsx:31:       {interaction.active && mode === 'source' ? (

document-review-lifecycle.ts (16 match(es)):
  3:   type DocumentReviewModel,
  14:   model: DocumentReviewModel,
  17: ): ReviewPolicyResult<DocumentReviewModel> {
  29:   model: DocumentReviewModel,
  31: ): ReviewPolicyResult<DocumentReviewModel> {
  41:   model: DocumentReviewModel,
  43: ): ReviewPolicyResult<DocumentReviewModel> {
  58:   model: DocumentReviewModel,
  60: ): ReviewPolicyResult<DocumentReviewModel> {
  81:   model: DocumentReviewModel,
  83: ): ReviewPolicyResult<DocumentReviewModel> {
  97:   model: DocumentReviewModel,
  104:   model: DocumentReviewModel,
  107: ): DocumentReviewModel {
  117:   model: DocumentReviewModel,
  119: ): DocumentReviewModel {

document-review-workspace-controller.ts (9 match(es)):
  11:   createDocumentReviewModel,
  16:   DocumentReviewModel,
  26:     readonly model: DocumentReviewModel
  67:     const empty = createDocumentReviewModel(workspace)
  283:     model: DocumentReviewModel,
  391:   readonly model: DocumentReviewModel
  400: export function documentReviewPaths(model?: DocumentReviewModel): readonly HostPath[] {
  409: function reviewedDocument(model: DocumentReviewModel, document: HostPath): boolean {
  413: function emptyModel(workspace: ReviewWorkspaceIdentity): DocumentReviewModel {

index.ts (2 match(es)):
  3:   createDocumentReviewModel,
  15:   type DocumentReviewModel,

document-review-eligibility.ts (4 match(es)):
  5:   type DocumentReviewModel,
  18:   model: DocumentReviewModel,
  33:   model: DocumentReviewModel,
  53:   model: DocumentReviewModel,

document-review-model.ts (20 match(es)):
  23:   type DocumentReviewModel,
  41: export function createDocumentReviewModel(
  43: ): ReviewPolicyResult<DocumentReviewModel> {
  51:   model: DocumentReviewModel,
  116:   model: DocumentReviewModel,
  150:   const candidate: DocumentReviewModel = {
  176:   model: DocumentReviewModel,
  178: ): DocumentReviewModel {
  200:   model: DocumentReviewModel,
  219:   model: DocumentReviewModel,
  236:   model: DocumentReviewModel,
  261:   current: DocumentReviewModel,
  262:   candidate: DocumentReviewModel,
  275:   current: DocumentReviewModel,
  276:   result: ReviewPolicyResult<DocumentReviewModel>,
  284:   current: DocumentReviewModel,
  285:   result: ReviewPolicyResult<DocumentReviewModel>,
  290: function accepted(model: DocumentReviewModel): DocumentReviewActionResult {
  295:   model: DocumentReviewModel,
  303:   model: DocumentReviewModel,

document-review-rendered.ts (2 match(es)):
  230:         ? `Markdown review block, ${lineRangeLabel(range)}. Save or reload before adding a comment; use arrow keys for adjacent blocks.`
  231:         : `Markdown review block, ${lineRangeLabel(range)}. Press Enter to add a comment; use arrow keys for adjacent blocks.`,

use-document-review-delivery.ts (12 match(es)):
  81:   const previewModel = useRef<unknown>(undefined)
  86:     previewModel.current = undefined
  97:       previewModel.current = undefined
  117:           previewModel.current = current.current?.state.model
  140:           previewModel.current = current.current?.state.model
  157:           previewModel.current = current.current?.state.model
  243:         previewModel.current = current.current?.state.model
  332:           previewModel.current = result.snapshot.model
  364:       previewModel.current = undefined
  435:     if (!state.payload || previewModel.current === binding?.state.model) return
  437:     previewModel.current = undefined
  455:       previewModel.current = undefined

use-document-review-interaction.ts (3 match(es)):
  6:   renderedFileType,
  98:     (document.mode === 'source' ||
  99:       (document.mode === 'rendered' && renderedFileType(document.path) === 'markdown')) &&

document-review-batches.ts (10 match(es)):
  4:   type DocumentReviewModel,
  16:   model: DocumentReviewModel,
  19: ): ReviewPolicyResult<DocumentReviewModel> {
  38:   model: DocumentReviewModel,
  41: ): ReviewPolicyResult<DocumentReviewModel> {
  63:   model: DocumentReviewModel,
  66: ): ReviewPolicyResult<DocumentReviewModel> {
  87:   model: DocumentReviewModel,
  108:   model: DocumentReviewModel,
  111: ): DocumentReviewModel {

document-review-selectors.ts (2 match(es)):
  4:   type DocumentReviewModel,
  10:   model: DocumentReviewModel,

document-review-types.ts (3 match(es)):
  2:   DocumentReviewModel,
  114:   | { readonly ok: true; readonly model: DocumentReviewModel }
  117:       readonly model: DocumentReviewModel
```

</details>


---

<sub>11m 30s</sub>

### Copilot

Review works on source lines of any text file, or on blocks of rendered Markdown. I'll check the lint and format results.

---

<sub>11m 30s</sub>

### `read_bash`

**Waiting up to 30 seconds for command output**

<details>
<summary>Arguments</summary>

```json
{
  "delay": 30,
  "shellId": "lintfmt"
}
```

</details>

<details>
<summary>8 lines</summary>

```
lint exit=0
[warn] test/terminal-recovery-planner.test.ts
[warn] test/terminal-view-fork.test.tsx
[warn] test/terminal-workspace-model.test.ts
[warn] test/viewer-workload-policy.test.ts
[warn] Code style issues found in 52 files. Run Prettier with --write to fix.
format exit=1
<shellId: lintfmt completed with exit code 0>
```

</details>


---

<sub>12m 2s</sub>

### Copilot

Lint passes. `format:check` flags 52 existing source files, which predate my change, and `*.md` is excluded from Prettier anyway. I'll confirm what the "Register project" button opens.

---

<sub>12m 3s</sub>

### `grep`

**aria-label="Register project"**

"aria-label="Register project"" (src/renderer/src/workspaces/ProjectsBar.tsx)

<details>
<summary>9 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-281-                  <span aria-hidden="true">×</span>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-282-                </button>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-283-              </div>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-284-            )
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-285-          })}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-286-          <button
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-287-            type="button"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx-288-            className="project-add"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:289:            aria-label="Register project"
```

</details>


---

<sub>12m 3s</sub>

### ◌ Conversation Compacted

---

<sub>12m 7s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 286-300)

<details>
<summary>15 lines</summary>

```
          <button
            type="button"
            className="project-add"
            aria-label="Register project"
            title="Register project"
            disabled={busy}
            onClick={onAdd}
          >
            +
          </button>
          <WorkbenchHealthControl />
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
```

</details>


---

<sub>12m 7s</sub>

### `grep` — Failed

**(<h2|<h1|aria-label=")[^{]***

"(<h2|<h1|aria-label=")[^{]*" (src/renderer/src/session)

```
Search paths do not exist: /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/session
```


---

<sub>12m 10s</sub>

### `grep`

**(<h2|<h1|aria-label="|<button)[^{]***

"(<h2|<h1|aria-label="|<button)[^{]*" in **/SessionDialog*.tsx (src/renderer/src)

<details>
<summary>15 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:224:        <h2 id="session-dialog-title">
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:231:          <div className="session-hosts" role="listbox" aria-label="Hosts">
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:233:              <button
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:268:                aria-label="Folder path"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:278:              <button type="submit" disabled={busy}>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:281:              <button
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:292:                  <button
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:303:            <div className="folder-browser" aria-label="Folders">
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:308:                  <button
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:324:                      aria-label="New folder name"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:330:                    <button type="submit" disabled={busy || newFolderName.length === 0}>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:333:                    <button
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:374:            <button type="button" disabled={busy} onClick={() => void back()}>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:378:          <button type="button" disabled={busy} onClick={() => void cancel()}>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx:382:            <button type="button" disabled={busy} onClick={() => void connect()}>
```

</details>


---

<sub>12m 12s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 220-395)

<details>
<summary>176 lines</summary>

```
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
```

</details>


---

<sub>12m 17s</sub>

### Copilot

The **+** button in the projects bar opens a two-step flow: pick a host (Local or an SSH alias), then choose or create a folder. Next I'll check how users start an agent terminal.

---

<sub>12m 18s</sub>

### `grep`

**(aria-label|title)="(New|Launch|Start|Split|Add)[^"]*"**

"(aria-label|title)="(New|Launch|Start|Split|Add)[^"]*"" in **/*.tsx (src/renderer/src/terminal)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx:175:            aria-label="Split terminal"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx:195:              aria-label="New terminal"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx:196:              title="New terminal"
```


---

<sub>12m 20s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalRail.tsx (lines 160-260)

<details>
<summary>101 lines</summary>

```
                  </button>
                ))}
                {moveTargets.some((target) => target.newlyDiscovered) ? (
                  <div className="terminal-move-menu-actions">
                    <button type="button" role="menuitem" onClick={onDismissNewTargets}>
                      Dismiss new-worktree indicator
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            className="terminal-icon-button terminal-split-button"
            aria-label="Split terminal"
            title="Open a shell in the other terminal split"
            disabled={!recoveryReady || !available}
            onClick={onSplit}
          >
            ◫
          </button>
          <button
            type="button"
            className="terminal-icon-button terminal-settings-button"
            aria-label="Open settings"
            title="Settings"
            onClick={onOpenSettings}
          >
            ⚙
          </button>
          <div className="terminal-new-control">
            <button
              type="button"
              className="terminal-icon-button"
              aria-label="New terminal"
              title="New terminal"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              disabled={!recoveryReady || !available}
              onClick={onToggleMenu}
            >
              +
            </button>
            {menuOpen ? (
              <div
                ref={launchMenuRef}
                className="terminal-new-menu"
                role="menu"
                style={launchMenuStyle}
              >
                {launchMenuEntries.map(({ profile, provider, state }) => {
                  const capability = compactHarnessCapabilityLabel(
                    provider?.default === true,
                    state.probe?.capabilities ?? provider?.capabilities,
                  )
                  const details = [
                    provider && provider.displayName !== profile.displayName
                      ? provider.displayName
                      : undefined,
                    capability,
                    profile.builtIn ? undefined : launchAvailabilityLabel(state),
                  ].filter((value): value is string => Boolean(value))
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      role="menuitem"
                      data-harness-availability={state.availability}
                      title={launchMenuDescription(profile, provider, state)}
                      onClick={() => onAddSession(profile)}
                    >
                      <span>
                        <strong>{profile.displayName}</strong>
                      </span>
                      {details.length > 0 ? <small>{details.join(' · ')}</small> : null}
                    </button>
                  )
                })}
                <div className="terminal-new-menu-actions">
                  <button type="button" role="menuitem" onClick={onAddHarness}>
                    Add a harness…
                  </button>
                  <button type="button" role="menuitem" onClick={onRefreshProbes}>
                    Refresh availability
                  </button>
                  <button type="button" role="menuitem" onClick={onOpenHarnessSettings}>
                    Configure harnesses…
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
      <div className="terminal-list" role="list" hidden={compact}>
        {sessions.map((session) => {
          const provider = providerDescriptor(providers, session.providerId)
          const contextPresentation = provider?.capabilities.contextPresentation
          return (
            <div
```

</details>


---

<sub>12m 25s</sub>

### Copilot

The terminal panel's **+** menu lists harness profiles and offers "Add a harness…" and "Configure harnesses…". Next I'll check how the Sessions overview and view modes are reached.

---

<sub>12m 25s</sub>

### `grep`

**type (WorkbenchViewMode|ViewMode|WorkbenchMode|LayoutMode) =|VIEW_MODES|viewModeLabel|'Sessions'**

"type (WorkbenchViewMode|ViewMode|WorkbenchMode|LayoutMode) =|VIEW_MODES|viewModeLabel|'Sessions'" in **/*.{ts,tsx} (src/renderer/src)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:287:        aria-label={detailActive ? undefined : 'Sessions'}
```


---

<sub>12m 28s</sub>

### `grep`

**cycleViewMode|SessionsOverview[ (]|openSessions|showSessions**

"cycleViewMode|SessionsOverview[ (]|openSessions|showSessions" in **/*.{ts,tsx} (src/renderer/src)

<details>
<summary>6 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/workbench-command-router.ts:7:  readonly cycleViewMode: () => void
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/workbench-command-router.ts:32:    case 'cycleViewMode':
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/workbench-command-router.ts:33:      if (ports.canUseViewerCommands()) ports.cycleViewMode()
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:247:    cycleViewMode: cycleActiveMode,
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx:11:import { SessionsOverview } from './SessionsOverview'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:62:export function SessionsOverview({
```

</details>


---

<sub>12m 32s</sub>

### Copilot

`Mod+Shift+M` cycles the active document's viewer mode. Sessions is an "application destination", so I'll check how users get to it.

---

<sub>12m 33s</sub>

### `grep`

**(aria-label|title)=["{][^}]*[Ss]essions**

"(aria-label|title)=["{][^}]*[Ss]essions" in **/*.{ts,tsx} (src/renderer/src)

<details>
<summary>7 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:287:        aria-label={detailActive ? undefined : 'Sessions'}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:310:            title="Loading sessions"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:315:            title="Sessions unavailable"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:325:            title="No hvir sessions"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:330:            title="No sessions match"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:348:            <nav className="sessions-pagination" aria-label="Sessions pages">
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsOverview.tsx:374:            <div className="sessions-groups" role="list" aria-label="hvir sessions">
```

</details>


---

<sub>12m 36s</sub>

### `grep`

**ApplicationDestination|application-destination**

"ApplicationDestination|application-destination" in **/*.{ts,tsx} (src/renderer/src)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx:23:export function SessionsApplicationDestination({
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:42:import { SessionsApplicationDestination } from './sessions/SessionsApplicationDestination'
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:642:      <SessionsApplicationDestination
```


---

<sub>12m 38s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx (lines 560-660)

<details>
<summary>101 lines</summary>

```
          }
        />
        <section className="viewer-panel" aria-label="File viewer">
          <div
            className={`viewer-groups${viewerSplit ? ' split' : ''}`}
            ref={viewerGroupsRef}
          >
            {renderViewerPane('primary', primaryTabs, primaryActiveTab, true)}
            {viewerSplit ? (
              <>
                <PaneResizer
                  orientation="vertical"
                  className="viewer-split-resizer"
                  label="Resize split viewers"
                  onDrag={(clientX) => {
                    const left =
                      viewerGroupsRef.current?.getBoundingClientRect().left ?? 0
                    setViewerPrimaryWidth(clientX - left)
                  }}
                  onNudge={(delta) => {
                    const current = viewerGroupsRef.current?.querySelector<HTMLElement>(
                      '.viewer-group-primary',
                    )
                    if (current) {
                      setViewerPrimaryWidth(current.getBoundingClientRect().width + delta)
                    }
                  }}
                  onReset={resetViewerPrimaryWidth}
                />
                {renderViewerPane('secondary', secondaryTabs, secondaryActiveTab, false)}
              </>
            ) : null}
          </div>
        </section>
        <PaneResizer
          orientation="horizontal"
          className="terminal-resizer"
          label="Resize terminal"
          onDragStart={() => {
            if (terminalMode !== 'restored') setTerminalMode('restored')
          }}
          onDrag={(clientY) => {
            const bottom = workbenchRef.current?.getBoundingClientRect().bottom ?? 0
            setTerminalHeight(bottom - clientY)
          }}
          onNudge={(delta) => {
            if (terminalMode !== 'restored') {
              if (
                (terminalMode === 'maximized' && delta < 0) ||
                (terminalMode === 'collapsed' && delta > 0)
              ) {
                setTerminalMode('restored')
              }
              return
            }
            const current =
              workbenchRef.current?.querySelector<HTMLElement>('.terminal-panel')
            if (current) setTerminalHeight(current.getBoundingClientRect().height + delta)
          }}
          onReset={layout.resetTerminalHeight}
          action={<TerminalLayoutControls mode={terminalMode} onMode={setTerminalMode} />}
        />
        <TerminalWorkspaceCollection
          state={projectState}
          runtime={terminalWorkspaces}
          terminalPresented={
            destination === 'workspace' &&
            terminalMode !== 'collapsed' &&
            !(webViewFocused && webViewActive)
          }
          railCompact={layout.terminalRailCompact}
          onRailCompact={layout.setTerminalRailCompact}
          onRollup={terminalAttention.updateRollup}
          onOpenPath={terminalPathActivation.activate}
          onOpenWebLink={openWebLink}
          preferences={terminalPreferences(settings)}
          onOpenSettings={() => overlays.openSettings()}
          onOpenTerminalSettings={() => overlays.openSettings('terminal')}
          onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
          onAddHarness={overlays.openAddHarnessSettings}
        />
      </main>
      <SessionsApplicationDestination
        active={destination === 'sessions'}
        runtime={terminalWorkspaces}
        onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
        onError={session.reportError}
      />
      {overlays.projectPickerOpen ? (
        <SessionDialog
          hosts={session.hosts}
          currentRoot={root}
          suspended={session.prompts.length > 0}
          onCancel={overlays.closeProjectPicker}
          onConnect={session.connectHost}
          onBrowse={session.browseHost}
          folderPicker={session.folderPicker}
          onDisconnect={session.disconnectHost}
          onOpen={session.openHost}
          onOpened={() => (setDestination('workspace'), overlays.closeProjectPicker())}
        />
```

</details>


---

<sub>12m 40s</sub>

### `grep`

**setDestination\(**

"setDestination\(" (src/renderer/src/App.tsx)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:257:      setDestination('workspace')
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:409:            setDestination('workspace')
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:434:          onSessions={() => setDestination('sessions')}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:645:        onOpened={(state) => (showTerminal(), accept(state), setDestination('workspace'))}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/App.tsx:659:          onOpened={() => (setDestination('workspace'), overlays.closeProjectPicker())}
```


---

<sub>12m 43s</sub>

### `grep`

**onSessions**

"onSessions" (src/renderer/src/workspaces/ProjectsBar.tsx)

<details>
<summary>23 matches</summary>

```
[grep content: 3 matches across 1 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces]

ProjectsBar.tsx (3 match(es)):
  58:   readonly onSessions: () => void
  59- }
  60- 
  61- export function ProjectsBar({
  62-   state,
  63-   rollups,
  64-   busy,
  83:   onSessions,
  84- }: ProjectsBarProps): ReactElement {
  85-   const [pruneProjectId, setPruneProjectId] = useState<string>()
  86-   const [closeProjectId, setCloseProjectId] = useState<string>()
  87-   const [catalogProjectId, setCatalogProjectId] = useState<string>()
  88-   const [planningWorkspaceId, setPlanningWorkspaceId] = useState<string>()
  89-   const [closeWorkspaceRequest, setCloseWorkspaceRequest] = useState<{
  194:             onClick={onSessions}
  195-           >
  196-             Sessions
  197-           </button>
  198-           {state.projects.map((project) => {
  199-             const active = !sessionsActive && project.id === state.activeProjectId
  200-             const remote = project.registeredRoot.hostId !== 'local'
```

</details>


---

<sub>12m 48s</sub>

### Copilot

There's a **Sessions** button at the start of the projects bar. ProjectsBar also has catalog, planning, and close-workspace state, so I'll check what worktree actions it offers.

---

<sub>12m 48s</sub>

### `grep`

**(aria-label|title)=\{?[`"][^`"]*[`"]|>[A-Z][a-z]+( [a-z]+)*…?<**

"(aria-label|title)=\{?[`"][^`"]*[`"]|>[A-Z][a-z]+( [a-z]+)*…?<" (src/renderer/src/workspaces/ProjectsBar.tsx)

<details>
<summary>16 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:187:          aria-label="Projects"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:244:                    aria-label={`Connection controls for ssh:${project.registeredRoot.hostId} · ${connectionStateLabel(project.connectionState)}`}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:245:                    title="Connection controls"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:274:                  aria-label={`Close project ${project.displayName}`}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:289:            aria-label="Register project"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:290:            title="Register project"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:300:            aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:301:            title={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:309:            aria-label="Open settings"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:310:            title="Settings"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:320:            aria-label="Workspaces"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:361:                    aria-label={`Close workspace ${workspace.name}`}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:376:                    aria-label={`Dismiss removed workspace ${workspace.name}`}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:377:                    title="Forget removed worktree from hvir"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:396:                  title="Remove Git's stale worktree administrative records"
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx:435:            aria-label={`Connection controls for ssh:${connectionProject.registeredRoot.hostId}`}
```

</details>


---

<sub>12m 50s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 316-430)

<details>
<summary>115 lines</summary>

```
        </nav>
        {activeProject && showWorkspacesBar && !sessionsActive ? (
          <nav
            className="workspaces-bar"
            aria-label="Workspaces"
            data-diagnostic-capture="project-navigation"
          >
            {openWorkspaces.map((workspace) => (
              <div
                className={`workspace-tab${!sessionsActive && workspace.id === state.activeWorkspaceId ? ' active' : ''}${workspace.missing ? ' missing' : ''}`}
                key={workspace.id}
                title={workspaceStatusTitle(workspace)}
                onMouseDown={(event) => {
                  if (canCloseWorkspace(workspace)) {
                    guardMiddleClickClosePointerDown(event)
                  }
                }}
                onAuxClick={(event) => {
                  if (!canCloseWorkspace(workspace)) return
                  closeOnMiddleClick(event, () =>
                    requestWorkspaceClose(activeProject.id, workspace),
                  )
                }}
              >
                <button
                  type="button"
                  disabled={busy || workspace.missing}
                  onClick={() => onSwitch(activeProject.id, workspace.id)}
                  title={workspaceStatusTitle(workspace)}
                >
                  <span>{workspace.name}</span>
                  {workspace.main ? <small>project root</small> : null}
                  {workspace.prunableReason ? <small>prunable</small> : null}
                  {workspaceActionableAttention(workspace.id, rollups) > 0 ? (
                    <AttentionCount
                      count={workspaceActionableAttention(workspace.id, rollups)}
                    />
                  ) : null}
                </button>
                {!workspace.missing ? (
                  <button
                    type="button"
                    className="workspace-close"
                    disabled={!canCloseWorkspace(workspace)}
                    onClick={() => requestWorkspaceClose(activeProject.id, workspace)}
                    aria-label={`Close workspace ${workspace.name}`}
                    title={
                      workspace.id === state.activeWorkspaceId
                        ? 'Select another workspace before closing this one'
                        : `Close workspace ${workspace.name}`
                    }
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                ) : !workspace.prunableReason ? (
                  <button
                    type="button"
                    className="workspace-dismiss"
                    disabled={busy}
                    onClick={() => onDismiss(activeProject.id, workspace.id)}
                    aria-label={`Dismiss removed workspace ${workspace.name}`}
                    title="Forget removed worktree from hvir"
                  >
                    ×
                  </button>
                ) : null}
              </div>
            ))}
            <div className="workspaces-actions">
              {statusError ? (
                <span className="workspace-status-error" title={statusError}>
                  {statusError}
                </span>
              ) : null}
              {prunable.length > 0 ? (
                <button
                  type="button"
                  className="workspaces-prune"
                  disabled={busy || activeProject.connectionState !== 'connected'}
                  onClick={() => setPruneProjectId(activeProject.id)}
                  title="Remove Git's stale worktree administrative records"
                >
                  Prune {prunable.length}
                </button>
              ) : null}
              {closedWorkspaces.length > 0 ? (
                <button
                  type="button"
                  className="workspaces-catalog"
                  disabled={busy}
                  onClick={() => setCatalogProjectId(activeProject.id)}
                >
                  Worktrees {closedWorkspaces.length}
                </button>
              ) : null}
              <button
                type="button"
                className="workspaces-refresh"
                disabled={busy || activeProject.connectionState !== 'connected'}
                onClick={() => onRefresh(activeProject.id)}
              >
                Refresh
              </button>
            </div>
          </nav>
        ) : null}
      </header>
      {connectionProject ? (
        <>
          <div
            className="project-connection-backdrop"
            aria-hidden="true"
            onMouseDown={() => setConnectionMenu(undefined)}
          />
          <section
```

</details>


---

<sub>13m 0s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/keybindings.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/keybindings.ts (lines 1-120)

<details>
<summary>110 lines</summary>

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
```

</details>


---

<sub>13m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/shared/keybindings.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/shared/keybindings.ts (lines 120-160)

<details>
<summary>20 lines</summary>

```
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

</details>


---

<sub>13m 7s</sub>

### Copilot

Keybindings are strings like `Mod+Shift+P` with at least one modifier from `Mod`, `Ctrl`, `Meta`, `Alt`, or `Shift`. I'll confirm the hook files and the paths I plan to link.

---

<sub>13m 8s</sub>

### `bash`

**Confirm files referenced by README exist**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && git ls-files .githooks scripts/check-seams.sh src/main/smoke/scenario-selection.mts src/main/harness/bundled-harness-providers.ts src/main/ipc/authority-router.ts src/main/project-host/local-host.ts src/main/pty/pty-supervisor.ts LICENSE THIRD_PARTY_NOTICES.md build/icons-linux/128x128.png electron-builder.yml electron.vite.config.ts eslint.config.mjs scripts/native-installer.template.sh && sed -n '1,40p' .githooks/pre-push

<details>
<summary>33 lines</summary>

```
.githooks/pre-push
LICENSE
THIRD_PARTY_NOTICES.md
build/icons-linux/128x128.png
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
scripts/check-seams.sh
scripts/native-installer.template.sh
src/main/harness/bundled-harness-providers.ts
src/main/ipc/authority-router.ts
src/main/project-host/local-host.ts
src/main/pty/pty-supervisor.ts
src/main/smoke/scenario-selection.mts
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
<shellId: 49 completed with exit code 0>
```

</details>


---

<sub>13m 12s</sub>

### Copilot

All the files I plan to link exist. I'll confirm the Node engine constraint and any version-manager files.

---

<sub>13m 12s</sub>

### `bash`

**Check engines and node version files**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e 'const p=require("./package.json");console.log(JSON.stringify({engines:p.engines,packageManager:p.packageManager,private:p.private,description:p.description,homepage:p.homepage,repository:p.repository,bin:p.bin},null,1))' && git ls-files | grep -E '^\.(nvmrc|node-version|tool-versions)$|^\.npmrc$' ; grep -nE "node-version" .github/workflows/ci.yml | head -5

<details>
<summary>11 lines</summary>

```
{
 "engines": {
  "node": ">=24"
 },
 "private": true
}
46:          node-version: 24
81:          node-version: 24
106:          node-version: 24
150:          node-version: 24
<shellId: 50 completed with exit code 0>
```

</details>


---

<sub>13m 16s</sub>

### Copilot

CI uses Node 24 and `engines` requires `>=24`. I'll check the install-time scripts so the prerequisites section is accurate.

---

<sub>13m 18s</sub>

### `bash`

**Print relevant npm scripts**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e 'const s=require("./package.json").scripts;for (const k of ["postinstall","install:runtime","predev","dev","prebuild","build","preview","build:dir","pack:mac:arm64","pack:mac:arm64:signed","pack:linux:x64","pack:linux:arm64","test","test:watch","verify","gauntlet","smoke","smoke:macos","smoke:scenario","hooks:install","lint","format","format:check","typecheck","check-seams","check-adrs","architecture:report","architecture:check","test:mutation"]) console.log(k.padEnd(24), s[k] ?? "<MISSING>")'

<details>
<summary>30 lines</summary>

```
postinstall              npm run install:runtime
install:runtime          install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty
predev                   node scripts/check-terminal-runtime.mts
dev                      electron-vite dev
prebuild                 node scripts/check-terminal-runtime.mts
build                    npm run typecheck && electron-vite build
preview                  electron-vite preview
build:dir                npm run build && electron-builder --dir
pack:mac:arm64           npm run build && electron-builder --mac pkg --arm64 --publish never
pack:mac:arm64:signed    npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true
pack:linux:x64           npm run build && electron-builder --linux deb --x64 --publish never
pack:linux:arm64         npm run build && electron-builder --linux deb --arm64 --publish never
test                     vitest run
test:watch               vitest
verify                   npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test
gauntlet                 bash scripts/phase8-gauntlet.sh
smoke                    npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles
smoke:macos              npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle
smoke:scenario           npm run build:smoke && node scripts/run-smoke-scenarios.mts
hooks:install            bash scripts/install-git-hooks.sh
lint                     eslint .
format                   prettier --write .
format:check             prettier --check .
typecheck                npm run typecheck:node && npm run typecheck:web
check-seams              bash scripts/check-seams.sh
check-adrs               node scripts/check-adrs.mjs
architecture:report      node scripts/architecture-hotspots.mjs
architecture:check       node scripts/architecture-hotspots.mjs --enforce
test:mutation            stryker run
<shellId: 51 completed with exit code 0>
```

</details>


---

<sub>13m 32s</sub>

### Copilot

`smoke:scenario` takes scenario names as positional arguments. I'll check what "launch-only" means for providers like Gemini, and whether the Custom harness can resume, before writing the table.

---

<sub>13m 32s</sub>

### `bash`

**Inspect Gemini provider capabilities**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers && ls && sed -n '1,80p' gemini.ts 2>/dev/null | grep -vE '^import' | head -70

<details>
<summary>59 lines</summary>

```
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts

export const geminiProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('gemini-cli'),
    displayName: 'Gemini CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('gemini-cli-default'),
      displayName: 'Gemini CLI',
      description:
        'Gemini CLI. Launch-only; hvir never substitutes latest-session resume.',
    },
    reservedArguments: ['--resume', '-r'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(
      (line) => line && !line.startsWith('(node:') && !line.startsWith('(Use `node'),
    )
  const line = lines.at(-1)
  return line && line.length <= 160 ? line : undefined
}
<shellId: 52 completed with exit code 0>
```

</details>


---

<sub>13m 38s</sub>

### Copilot

Launch-only harnesses are relaunched fresh, and hvir never substitutes "resume latest". Next I'll look at how custom harnesses are defined.

---

<sub>13m 38s</sub>

### `grep`

**custom**

"custom" in **/*.ts (src/main/harness)

<details>
<summary>11 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/harness-provider.ts:39:export { plainShellProvider, customCommandProvider } from './providers/shell'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/bundled-harness-providers.ts:12:import { plainShellProvider, customCommandProvider } from './providers/shell'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/bundled-harness-providers.ts:28:  customCommandProvider,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/codex.ts:163: * best-effort composer target. Profile customization can make the attempt fail,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts:44:export const customCommandProvider: HarnessProvider = {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts:46:    id: asHarnessProviderId('custom'),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts:63:  launch: () => ({ file: 'custom', args: [] }),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts:64:  resume: () => ({ file: 'custom', args: [] }),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/harness-profile-store.ts:547:  if (provider.manifest.id === 'custom' && input.executable.kind === 'provider-default') {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/harness-profile-store.ts:548:    throw new Error('Custom profiles require an executable')
```

</details>


---

<sub>13m 40s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/harness/providers/shell.ts

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

<sub>13m 47s</sub>

### Copilot

The Custom provider has no default profile; you supply the executable. I'll confirm where the ghostty-web dependency comes from before linking it.

---

<sub>13m 48s</sub>

### `bash`

**Check key dependency specs**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e 'const p=require("./package.json");const all={...p.dependencies,...p.devDependencies};for (const k of ["ghostty-web","electron","react","typescript","electron-vite","vite","vitest","node-pty","ssh2","@hvir/rename-noreplace","shiki","mermaid","markdown-it","@codemirror/merge","chokidar","electron-builder"]) console.log(k.padEnd(26), all[k] ?? "<none>")'

<details>
<summary>17 lines</summary>

```
ghostty-web                https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz
electron                   ^43.4.1
react                      ^19.2.8
typescript                 ^6.0.3
electron-vite              ^5.0.0
vite                       ^7.3.0
vitest                     ^5.0.0
node-pty                   ^1.1.0
ssh2                       ^1.17.0
@hvir/rename-noreplace     <none>
shiki                      ^4.4.3
mermaid                    ^11.17.2
markdown-it                ^15.0.1
@codemirror/merge          ^6.12.2
chokidar                   ^5.0.0
electron-builder           ^26.0.0
<shellId: 53 completed with exit code 0>
```

</details>


---

<sub>13m 52s</sub>

### Copilot

`@hvir/rename-noreplace` isn't a regular dependency, so I'll check whether it's wired in through workspaces or another dependency field.

---

<sub>13m 53s</sub>

### `bash`

**Locate rename-noreplace wiring**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e 'const p=require("./package.json");console.log("workspaces:",JSON.stringify(p.workspaces));for (const f of ["dependencies","devDependencies","optionalDependencies","bundleDependencies"]) { const d=p[f]||{}; for (const [k,v] of Object.entries(d)) if (/rename|hvir/.test(k)||/file:|link:/.test(String(v))) console.log(f,k,v) }' && ls packages/rename-noreplace && sed -n '1,30p' packages/rename-noreplace/package.json

<details>
<summary>29 lines</summary>

```
workspaces: undefined
optionalDependencies @hvir/rename-noreplace file:packages/rename-noreplace
binding.gyp
build
index.js
LICENSE
package.json
rename_noreplace.c
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
<shellId: 54 completed with exit code 0>
```

</details>


---

<sub>14m 3s</sub>

### `grep`

**[Uu]sage|--uninstall|--purge|--help|Updating|Installing|already installed|spctl|pkgutil|stapler|apt-get|apt |GLIBC|glibc|arm64|x86_64|aarch64|Darwin|Intel**

"[Uu]sage|--uninstall|--purge|--help|Updating|Installing|already installed|spctl|pkgutil|stapler|apt-get|apt |GLIBC|glibc|arm64|x86_64|aarch64|Darwin|Intel" (scripts/native-installer.template.sh)

<details>
<summary>40 matches</summary>

```
[grep content: 38 matches across 1 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/scripts]

native-installer.template.sh (38 match(es)):
  15: readonly HVIR_LINUX_MINIMUM_GLIBC=2.35
  54: usage() {
  58: Usage:
  60:   install.sh --uninstall
  61:   install.sh --uninstall --purge
  64: --purge additionally removes the current user's documented hvir settings and cache.
  73:     --uninstall) operation='uninstall' ;;
  74:     --help | -h)
  75:       usage
  79:       usage >&2
  85:     if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
  86:       usage >&2
  93:     usage >&2
  104:   Linux:x86_64)
  111:   Linux:aarch64 | Linux:arm64)
  118:   Darwin:arm64)
  127:       "hvir does not support $kernel $machine. Supported targets are compatible Linux x64/arm64 hosts and Apple-silicon macOS." \
  148:     require_absolute_tool /usr/bin/apt-get
  156:     require_absolute_tool /usr/sbin/pkgutil
  158:     require_absolute_tool /usr/sbin/spctl
  181:   local glibc_output glibc_version
  183:   glibc_output=$(/usr/bin/getconf GNU_LIBC_VERSION 2>/dev/null) || {
  184:     echo "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer." >&2
  187:   glibc_version=${glibc_output#glibc }
  188:   if ! version_at_least "$glibc_version" "$HVIR_LINUX_MINIMUM_GLIBC"; then
  190:       "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer; found ${glibc_version:-unknown}." \
  270:     /usr/bin/apt-get \
  276:       "The hvir package dependencies are not available from this host's configured apt repositories." \
  313:     /usr/sbin/pkgutil --check-signature "$artifact"
  330:     /usr/bin/xcrun stapler validate "$artifact"
  335:     /usr/sbin/spctl --assess --type install --verbose=2 "$artifact"
  344:     /usr/sbin/pkgutil --pkg-info dev.hvir.app >/dev/null 2>&1 &&
  493:     echo "Updating hvir to $HVIR_VERSION for $platform_name."
  496:     echo "Installing hvir $HVIR_VERSION for $platform_name."
  521:       /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
  555:       /usr/bin/sudo /usr/bin/apt remove -y hvir
  561:     if /usr/sbin/pkgutil --pkg-info dev.hvir.app >/dev/null 2>&1; then
  570:       /usr/bin/sudo /usr/sbin/pkgutil --forget dev.hvir.app >/dev/null
```

</details>


---

<sub>14m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh (lines 50-70)

<details>
<summary>17 lines</summary>

```
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
```

</details>


---

<sub>14m 5s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/native-installer.template.sh (lines 470-530)

<details>
<summary>59 lines</summary>

```
  echo 'Removed the legacy npm installation.'
}

verify_native_command_resolution() {
  local found
  stage='verifying public hvir command resolution'
  hash -r
  found=$(command -v hvir 2>/dev/null || true)
  if [[ -z "$found" || ! "$found" -ef "$native_command" ]]; then
    echo \
      "Another hvir command shadows the installed native command: ${found:-not found}" \
      >&2
    exit 1
  fi
}

install_or_update() {
  local artifact package_log
  if [[ "$platform" == 'linux' ]]; then
    verify_linux_host_capabilities
  fi
  if native_install_present; then
    install_action='update'
    echo "Updating hvir to $HVIR_VERSION for $platform_name."
  else
    install_action='install'
    echo "Installing hvir $HVIR_VERSION for $platform_name."
  fi
  stage='checking for a legacy npm installation'
  discover_legacy_launcher
  stage='creating a private installer workspace'
  create_private_temporary_directory
  artifact="$temporary_directory/$artifact_name"
  echo 'Downloading the native package...'
  download_artifact "$artifact"
  verify_digest "$artifact"
  echo 'Download integrity verified.'
  if [[ "$platform" == 'macos' ]]; then
    verify_macos_package "$artifact"
    stage="installing hvir $HVIR_VERSION with the macOS package manager"
    package_log="$temporary_directory/native-package-manager.log"
    echo 'macOS will request your local administrator password; typed characters will not appear.'
    run_with_failure_diagnostics \
      "$package_log" \
      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
  else
    verify_linux_package_capabilities "$artifact"
    stage="installing hvir $HVIR_VERSION with apt"
    package_log="$temporary_directory/native-package-manager.log"
    run_with_failure_diagnostics \
      "$package_log" \
      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
  fi
  verify_native_command
  remove_legacy_launcher
  verify_native_command_resolution
  if [[ "$install_action" == 'update' ]]; then
    echo "hvir $HVIR_VERSION is updated. Open a project with: hvir ."
  else
    echo "hvir $HVIR_VERSION is installed. Open a project with: hvir ."
  fi
```

</details>


---

<sub>14m 9s</sub>

### Copilot

The installer handles both install and update, and ends with "Open a project with: hvir .". I'll look for the project's own recommended install command in release notes or scripts.

---

<sub>14m 10s</sub>

### `grep`

**curl -[a-zA-Z]*|releases/latest|download/install\.sh|bash install\.sh|\| *bash**

"curl -[a-zA-Z]*|releases/latest|download/install\.sh|bash install\.sh|\| *bash" (scripts, .github, build)

```
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:612:          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-policy.mts:134:  if (/^#!.*\b(?:sh|bash|zsh)(?:\s|$)/.test(first)) return true
```


---

<sub>14m 14s</sub>

### Copilot

No curl one-liner exists in the repo. I'll check what the release workflow writes into release notes.

---

<sub>14m 14s</sub>

### `grep`

**notes|gh release (create|upload|edit)|install\.sh**

"notes|gh release (create|upload|edit)|install\.sh" (.github/workflows/release.yml)

```
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:534:            gh release create "$TAG" \
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:539:              --generate-notes
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:548:          gh release upload "$TAG" dist/release/* \
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:562:            install.sh \
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:576:          gh release edit "$TAG" \
```


---

<sub>14m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml (lines 525-625)

<details>
<summary>87 lines</summary>

```
          fi

          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
            if [ "$is_draft" != true ]; then
              echo "::error::$TAG is already public and cannot be repaired in place"
              exit 1
            fi
          else
            gh release create "$TAG" \
              --repo "$GITHUB_REPOSITORY" \
              --verify-tag \
              --draft \
              --title "$TAG" \
              --generate-notes
          fi

      - name: Upload and validate the complete draft asset set
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          gh release upload "$TAG" dist/release/* \
            --repo "$GITHUB_REPOSITORY" \
            --clobber
          actual=$(gh release view "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --json assets \
            --jq '.assets[].name' |
            sort)
          expected=$(printf '%s\n' \
            SHA256SUMS \
            THIRD_PARTY_NOTICES.md \
            "hvir-${VERSION}-darwin-arm64.pkg" \
            "hvir-${VERSION}-linux-arm64.deb" \
            "hvir-${VERSION}-linux-x64.deb" \
            install.sh \
            release-manifest.json |
            sort)
          if [ "$actual" != "$expected" ]; then
            echo "::error::Draft release asset set is incomplete or unexpected"
            diff -u <(printf '%s\n' "$expected") <(printf '%s\n' "$actual") || true
            exit 1
          fi

      - name: Publish the complete immutable release
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          gh release edit "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --draft=false \
            --latest

      - name: Verify published release attestation and downloaded assets
        env:
          GH_TOKEN: ${{ github.token }}
          TAG: ${{ needs.prepare.outputs.tag }}
        run: |
          verified=false
          for attempt in {1..12}; do
            if gh release verify "$TAG" --repo "$GITHUB_REPOSITORY"; then
              verified=true
              break
            fi
            echo "Release attestation is not ready (attempt $attempt/12)"
            sleep 5
          done
          if [ "$verified" != true ]; then
            echo "::error::GitHub did not verify immutable release $TAG"
            exit 1
          fi

          verify_directory="$RUNNER_TEMP/hvir-release-verification"
          mkdir "$verify_directory"
          gh release download "$TAG" \
            --repo "$GITHUB_REPOSITORY" \
            --dir "$verify_directory"
          (
            cd "$verify_directory"
            sha256sum --check SHA256SUMS
          )
          for asset in "$verify_directory"/*; do
            gh release verify-asset "$TAG" "$asset" --repo "$GITHUB_REPOSITORY"
          done
          latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)
          if [ "$latest" != "$TAG" ]; then
            echo "::error::Latest release is $latest, expected $TAG"
            exit 1
          fi
```

</details>


---

<sub>14m 20s</sub>

### Copilot

Releases are published with `--latest`, so `releases/latest/download/install.sh` resolves correctly. I'll confirm the tag format.

---

<sub>14m 20s</sub>

### `grep`

**tag=|TAG=|"tag=|echo "tag**

"tag=|TAG=|"tag=|echo "tag" (.github/workflows/release.yml)

```
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:102:          tag="v$version"
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:138:          echo "tag=$tag" >> "$GITHUB_OUTPUT"
/private/var/tmp/ws/ffb55c2b/hvir/.github/workflows/release.yml:175:          echo "tag=$TAG" >> "$GITHUB_OUTPUT"
```


---

<sub>14m 43s</sub>

### Copilot

Tags use the form `v<version>`. Before describing diagnostics, I'll check what the Workbench health control shows.

---

<sub>14m 44s</sub>

### `bash`

**Inspect workbench health UI strings**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src && ls diagnostics 2>/dev/null | head -30; grep -rn -E "(aria-label|title)=\"[^\"]+\"|<h2[^>]*>[^<]+|<strong>[^<{]+" --include=WorkbenchHealth*.tsx . | head -30

```
DiagnosticReportDialog.tsx
owned-capture-masks.ts
./health/WorkbenchHealthControl.tsx:45:              <h2 id="workbench-health-title">Workbench health</h2>
./health/WorkbenchHealthControl.tsx:98:    <section className="workbench-health-storage" aria-label="Local diagnostic evidence">
<shellId: 55 completed with exit code 0>
```


---

<sub>14m 46s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/health/WorkbenchHealthControl.tsx

<details>
<summary>197 lines</summary>

```
import { useState, type ReactElement } from 'react'

import type { WorkbenchHealthItem } from '../../../shared'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
import { useWorkbenchHealth } from './use-workbench-health'
import { useDiagnosticEvidence } from './use-diagnostic-evidence'
import { DiagnosticReportDialog } from '../diagnostics/DiagnosticReportDialog'

export function WorkbenchHealthControl(): ReactElement {
  const [open, setOpen] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)
  const health = useWorkbenchHealth()
  const evidence = useDiagnosticEvidence()
  const unresolved = health.snapshot.items.filter((item) => item.state !== 'resolved')
  const newCount = unresolved.filter((item) => item.state === 'open').length
  const critical = unresolved.some((item) => item.severity === 'critical')
  const label = !health.ready
    ? 'Workbench health: loading'
    : health.snapshot.evidence === 'unavailable'
      ? `Workbench health: evidence unavailable, ${unresolved.length} unresolved fault${unresolved.length === 1 ? '' : 's'}`
      : unresolved.length === 0
        ? 'Workbench health: no unresolved faults'
        : `Workbench health: ${unresolved.length} unresolved fault${unresolved.length === 1 ? '' : 's'}, ${newCount} open`

  return (
    <>
      <button
        type="button"
        className={`workbench-health-toggle${critical ? ' critical' : ''}${newCount > 0 ? ' new' : ''}${health.snapshot.evidence === 'unavailable' ? ' unavailable' : ''}`}
        aria-label={label}
        title={label}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">◇</span>
        {unresolved.length > 0 ? <b>{unresolved.length}</b> : null}
      </button>
      {open ? (
        <ConfirmationDialog
          labelledBy="workbench-health-title"
          actions={[{ label: 'Close', kind: 'cancel', onSelect: () => setOpen(false) }]}
          className="workbench-health-dialog"
        >
          <header className="workbench-health-heading">
            <div>
              <h2 id="workbench-health-title">Workbench health</h2>
              <p>
                Application faults observed by hvir, separate from terminal attention.
              </p>
            </div>
            <EvidenceState evidence={health.snapshot.evidence} />
          </header>
          {health.snapshot.items.length === 0 ? (
            <p className="workbench-health-empty">No workbench faults observed.</p>
          ) : (
            <ol className="workbench-health-list">
              {health.snapshot.items.map((item) => (
                <HealthItem
                  item={item}
                  key={`${item.kind}:${item.occurrenceId}`}
                  onAcknowledge={() => health.acknowledge(item.occurrenceId)}
                />
              ))}
            </ol>
          )}
          {health.snapshot.dropped > 0 ? (
            <p className="workbench-health-dropped">
              {health.snapshot.dropped} older health item
              {health.snapshot.dropped === 1 ? '' : 's'} omitted by the local bound.
            </p>
          ) : null}
          <DiagnosticEvidenceDetails evidence={evidence} />
          <button
            type="button"
            className="prepare-diagnostic-report"
            onClick={() => {
              setOpen(false)
              setReportOpen(true)
            }}
          >
            Prepare diagnostic report
          </button>
        </ConfirmationDialog>
      ) : null}
      {reportOpen ? (
        <DiagnosticReportDialog onClose={() => setReportOpen(false)} />
      ) : null}
    </>
  )
}

function DiagnosticEvidenceDetails({
  evidence,
}: {
  readonly evidence: ReturnType<typeof useDiagnosticEvidence>
}): ReactElement {
  const state = evidence.state
  return (
    <section className="workbench-health-storage" aria-label="Local diagnostic evidence">
      <h3>Local diagnostic evidence</h3>
      {state ? (
        <>
          <p>
            Recent memory is bounded to {state.recent.maxEvents} events /{' '}
            {formatBytes(state.recent.maxBytes)}.
          </p>
          {state.journal ? (
            <>
              <p>
                Journal bound: {state.journal.maxSegments} ×{' '}
                {formatBytes(state.journal.maxSegmentBytes)}, retained for{' '}
                {state.journal.retentionHours / 24} days.
              </p>
              <code>{state.journal.location}</code>
            </>
          ) : (
            <p>Durable journaling is disabled in this build.</p>
          )}
        </>
      ) : (
        <p>Loading local evidence details…</p>
      )}
      <button
        type="button"
        disabled={evidence.deleting || !state}
        onClick={evidence.deleteEvidence}
      >
        {evidence.deleting ? 'Deleting evidence…' : 'Delete local evidence'}
      </button>
      {evidence.message ? <p role="status">{evidence.message}</p> : null}
    </section>
  )
}

function HealthItem({
  item,
  onAcknowledge,
}: {
  readonly item: WorkbenchHealthItem
  readonly onAcknowledge: () => void
}): ReactElement {
  return (
    <li className={`workbench-health-item ${item.severity} ${item.state}`}>
      <div className="workbench-health-item-title">
        <strong>{healthKindLabel(item.kind)}</strong>
        <span>
          {item.severity} · {item.state}
        </span>
      </div>
      <p>
        {item.owner === 'window-manager' ? 'Window manager' : 'React error boundary'} ·
        renderer {item.ownerId}, generation {item.ownerGeneration} · {item.count}{' '}
        occurrence
        {item.count === 1 ? '' : 's'}
      </p>
      <p>Classification: {item.classification.replaceAll('-', ' ')}</p>
      <p>
        First {formatTime(item.firstObservedAt)} · last {formatTime(item.lastObservedAt)}
      </p>
      {item.recoveryOutcome ? (
        <p>Recovery: {recoveryLabel(item.recoveryOutcome)}</p>
      ) : null}
      <code>{item.correlation}</code>
      {item.state === 'open' ? (
        <button type="button" onClick={onAcknowledge}>
          Acknowledge
        </button>
      ) : null}
    </li>
  )
}

function EvidenceState({
  evidence,
}: {
  readonly evidence: 'durable' | 'memory-only' | 'unavailable'
}): ReactElement {
  const label =
    evidence === 'durable'
      ? 'Bounded local evidence'
      : evidence === 'memory-only'
        ? 'Memory-only evidence'
        : 'Durable evidence unavailable'
  return <span className={`workbench-health-evidence ${evidence}`}>{label}</span>
}

function healthKindLabel(kind: WorkbenchHealthItem['kind']): string {
  if (kind === 'react-render-contained') return 'Render failure contained'
  if (kind === 'main-document-load-failed') return 'Workbench document failed to load'
  if (kind === 'renderer-process-exited') return 'Renderer exited unexpectedly'
  return 'Renderer became unresponsive'
}

function recoveryLabel(
  outcome: NonNullable<WorkbenchHealthItem['recoveryOutcome']>,
): string {
  return outcome.replaceAll('-', ' ')
}

function formatTime(value: string): string {
  return new Date(value).toLocaleString()
}

function formatBytes(value: number): string {
  return value >= 1024 * 1024
    ? `${value / (1024 * 1024)} MiB`
    : `${Math.round(value / 1024)} KiB`
}
```

</details>


---

<sub>14m 59s</sub>

### `grep`

**ctrl-enter|Ctrl\+Enter|Ctrl-Enter**

"ctrl-enter|Ctrl\+Enter|Ctrl-Enter" in **/*.{ts,tsx} (src/renderer/src)

<details>
<summary>6 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings.ts:129:      candidate.composerSubmitMode === 'ctrl-enter' ? 'ctrl-enter' : 'enter',
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/use-settings-controller.ts:133:    updateDraft('composerSubmitMode', 'ctrl-enter')
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:24:        To keep this behavior consistent, hvir needs to update the Enter, Ctrl+Enter, and
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/ghostty-terminal-keyboard.ts:79:    options.composerSubmitMode === 'ctrl-enter' &&
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx:99:                checked={draft.composerSubmitMode === 'ctrl-enter'}
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx:102:              Send messages with Ctrl+Enter or Command+Enter; Enter inserts a new line
```

</details>


---

<sub>15m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/ComposerSubmitConsentDialog.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/ComposerSubmitConsentDialog.tsx

<details>
<summary>40 lines</summary>

```
import type { ReactElement } from 'react'

import { ConfirmationDialog } from '../workbench/ConfirmationDialog'

export function ComposerSubmitConsentDialog({
  onCancel,
  onConfirm,
}: {
  readonly onCancel: () => void
  readonly onConfirm: () => void
}): ReactElement {
  return (
    <ConfirmationDialog
      labelledBy="composer-submit-consent-title"
      actions={[
        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
        { label: 'Allow this change', kind: 'primary', onSelect: onConfirm },
      ]}
      nested
      className="composer-submit-consent-dialog"
    >
      <h3 id="composer-submit-consent-title">Allow a Claude configuration change?</h3>
      <p>
        To keep this behavior consistent, hvir needs to update the Enter, Ctrl+Enter, and
        Shift+Enter Chat bindings in Claude&apos;s <code>keybindings.json</code> on every
        machine you connect to hvir, now and later while this setting is enabled.
      </p>
      <p>
        Other Claude bindings are preserved. hvir stores the three previous values and
        whether the keybindings file already existed in{' '}
        <code>.hvir-keybindings-state.json</code> in Claude&apos;s config directory so
        disabling this setting can restore them exactly. Nothing changes until you save
        app settings.
      </p>
      <p>
        Claude detects the keybinding update live. Shift+Enter submits in supported
        terminals outside hvir. Open Codex sessions keep their launch-time behavior until
        you restart them.
      </p>
    </ConfirmationDialog>
  )
}
```

</details>


---

<sub>15m 2s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx (lines 80-115)

<details>
<summary>36 lines</summary>

```
                    onChange('terminalLigatures', event.currentTarget.checked)
                  }
                />
                Enable compatible terminal line shaping
              </span>
              <small>
                Shape compatible terminal cells as line runs. Cell positions, selection,
                and copying remain unchanged.
              </small>
            </span>
          </label>
        </fieldset>
        <label className="settings-checkbox">
          <span>Message submission</span>
          <span className="settings-checkbox-copy">
            <span className="settings-checkbox-control">
              <input
                id="settings-composer-submit"
                type="checkbox"
                checked={draft.composerSubmitMode === 'ctrl-enter'}
                onChange={(event) => onComposerSubmitMode(event.currentTarget.checked)}
              />
              Send messages with Ctrl+Enter or Command+Enter; Enter inserts a new line
            </span>
            <small>
              Claude updates live; Shift+Enter also submits in supported external
              terminals. Restart open Codex sessions after changing this setting.
            </small>
          </span>
        </label>
        <label htmlFor="settings-idle-threshold">
          <span>Idle-after-output threshold</span>
          <span className="settings-number">
            <input
              id="settings-idle-threshold"
              type="number"
```

</details>


---

<sub>15m 9s</sub>

### `bash`

**List settings section labels**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings && ls sections && grep -hoE "<span>[A-Z][^<{]{2,60}</span>|<legend>[^<]+</legend>|<h3[^>]*>[^<]+</h3>" sections/*.tsx | sort -u | head -60

<details>
<summary>19 lines</summary>

```
AppearanceSettings.tsx
GitSettings.tsx
KeybindingsSettings.tsx
TerminalSettings.tsx
TypographyFontField.tsx
<legend>Presentation</legend>
<span>App theme</span>
<span>Cursor blinking</span>
<span>Cursor shape</span>
<span>Font ligatures</span>
<span>Git auto-fetch</span>
<span>Idle-after-output threshold</span>
<span>Interface scale</span>
<span>Keybinding overrides (JSON)</span>
<span>Message submission</span>
<span>On app start</span>
<span>Terminal colors</span>
<span>Terminal text size</span>
<shellId: 56 completed with exit code 0>
```

</details>


---

<sub>15m 13s</sub>

### `bash`

**Inspect appearance setting options**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings && grep -nE "<option|label=|'(system|light|dark)'" sections/AppearanceSettings.tsx | head -30; grep -nE "fontFamily|Font|font" sections/AppearanceSettings.tsx | head -10; grep -nE "appTheme|themeMode|theme:" settings.ts | head -10

<details>
<summary>18 lines</summary>

```
42:            <option value="dark">Dark</option>
43:            <option value="light">Light</option>
58:            <option value="app">Follow app theme</option>
59:            <option value="dark">Always dark</option>
60:            <option value="light">Always light</option>
71:          label="Interface font"
82:          label="Monospace font"
12:import { TypographyFontField } from './TypographyFontField'
69:        <TypographyFontField
70:          id="settings-interface-font"
71:          label="Interface font"
73:          mode={draft.interfaceFontMode}
74:          family={draft.interfaceFontFamily}
77:          onMode={(mode) => onChange('interfaceFontMode', mode)}
78:          onFamily={(family) => onChange('interfaceFontFamily', family)}
80:        <TypographyFontField
81:          id="settings-monospace-font"
<shellId: 57 completed with exit code 0>
```

</details>


---

<sub>15m 19s</sub>

### `bash`

**Locate terminal color and startup settings**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings && grep -ln "Terminal colors" sections/*.tsx; grep -nE "Presentation|Light theme|Dark theme|light theme|dark theme|TerminalThemePicker|ThemePicker" sections/TerminalSettings.tsx | head -10; grep -nE "On app start" -A 12 sections/TerminalSettings.tsx | grep -E "option|label" | head

```
sections/AppearanceSettings.tsx
29:          <legend>Presentation</legend>
144-            <option value="prompt">Ask which terminals to restore</option>
145-            <option value="auto">Restore all terminals automatically</option>
<shellId: 58 completed with exit code 0>
```


---

<sub>15m 22s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx (lines 1-60)

<details>
<summary>58 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'

export function TerminalSettings({
  draft,
  validation,
  onChange,
  onComposerSubmitMode,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
  readonly onComposerSubmitMode: (enabled: boolean) => void
}): ReactElement {
  const idleError = validation?.fieldId === 'settings-idle-threshold'
  return (
    <SettingsSection
      section="terminal"
      title="Terminal"
      description="Control message submission, attention timing, and startup recovery."
    >
      <div className="settings-section-scroll settings-fields">
        <fieldset className="settings-fieldset">
          <legend>Presentation</legend>
          <label htmlFor="settings-terminal-cursor-shape">
            <span>Cursor shape</span>
            <select
              id="settings-terminal-cursor-shape"
              value={draft.terminalCursorShape}
              onChange={(event) =>
                onChange(
                  'terminalCursorShape',
                  event.currentTarget.value as SettingsDraft['terminalCursorShape'],
                )
              }
            >
              <option value="block">Block</option>
              <option value="hollow-block">Hollow block</option>
              <option value="bar">Bar</option>
              <option value="underline">Underline</option>
            </select>
          </label>
          <label htmlFor="settings-terminal-cursor-blink">
            <span>Cursor blinking</span>
            <span className="settings-checkbox-copy">
              <select
                id="settings-terminal-cursor-blink"
                value={draft.terminalCursorBlink}
                onChange={(event) =>
                  onChange(
                    'terminalCursorBlink',
                    event.currentTarget.value as SettingsDraft['terminalCursorBlink'],
                  )
                }
              >
```

</details>


---

<sub>15m 25s</sub>

### Copilot

The Terminal section covers cursor, ligatures, message submission, idle threshold, and startup recovery. I'll find where the terminal color-scheme picker lives.

---

<sub>15m 26s</sub>

### `grep`

**(aria-label|title|label)=["{`][^"}`]*(color scheme|Color scheme|terminal theme|Terminal theme|[Tt]heme)[^"}`]***

"(aria-label|title|label)=["{`][^"}`]*(color scheme|Color scheme|terminal theme|Terminal theme|[Tt]heme)[^"}`]*" in **/*.tsx (src/renderer/src)

```
No matches found.
```


---

<sub>15m 29s</sub>

### `grep`

**terminalTheme(Dark|Light)|darkTerminalTheme|lightTerminalTheme|TerminalThemeSelect|terminal-theme**

"terminalTheme(Dark|Light)|darkTerminalTheme|lightTerminalTheme|TerminalThemeSelect|terminal-theme" in **/*.tsx (src/renderer/src)

```
[grep content: 25 matches across 4 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src]
terminal/TerminalRail.tsx:99:       data-terminal-theme={terminalTheme}

settings/TerminalThemeGallery.tsx (20 match(es)):
  9: } from '../terminal/terminal-theme-catalog'
  34:     <details className="terminal-theme-gallery">
  36:         <span className="terminal-theme-summary-copy">
  37:           <strong id="terminal-theme-gallery-title">Ghostty themes</strong>
  43:         <span className="terminal-theme-summary-values">
  48:       <div className="terminal-theme-gallery-body">
  49:         <fieldset className="terminal-theme-target">
  55:                 name="terminal-theme-target"
  65:         <div className="terminal-theme-current">
  70:         <label className="terminal-theme-search" htmlFor="settings-terminal-theme-search">
  73:             id="settings-terminal-theme-search"
  81:         <p className="terminal-theme-result-status" role="status">
  88:         <div className="terminal-theme-results">
  94:               data-terminal-theme-id={theme.id}
  118:     <span className="terminal-theme-preview">
  119:       <span className="terminal-theme-preview-heading">
  129:         className="terminal-theme-preview-screen"
  146:         <span className="terminal-theme-preview-selection">ready for review</span>
  147:         <span className="terminal-theme-preview-cursor">_</span>
  149:       <span className="terminal-theme-swatches" aria-hidden="true">

settings/sections/AppearanceSettings.tsx (2 match(es)):
  46:         <label htmlFor="settings-terminal-theme">
  49:             id="settings-terminal-theme"

terminal/TerminalView.tsx (2 match(es)):
  17: import { terminalThemePalette } from './terminal-theme-catalog'
  214:         data-terminal-theme={effectiveTheme}
```


---

<sub>15m 41s</sub>

### Copilot

The terminal theme gallery ("Ghostty themes") is under Appearance and has separate light and dark picks. For the SSH section, I'll check whether `Include` directives in `~/.ssh/config` are followed.

---

<sub>15m 41s</sub>

### `grep`

**include|match|proxyjump|proxycommand|hostname|identityfile|port|user|wildcard|\*|\?|!**

"include|match|proxyjump|proxycommand|hostname|identityfile|port|user|wildcard|\*|\?|!" (src/main/project-host/ssh-config.ts)

<details>
<summary>28 matches</summary>

```
[grep content: 26 matches across 1 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host]

ssh-config.ts (26 match(es)):
  1: import SSHConfig from 'ssh-config'
  3: export interface SshAliasConfig {
  5:   readonly hostname: string
  6:   readonly user: string
  7:   readonly port: number
  8:   readonly identityFiles: readonly string[]
  11: export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
  14:     if (!('param' in line) || !('config' in line)) return []
  16:     if (section.param.toLowerCase() !== 'host') return []
  19:         ? section.value
  21:     return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
  24:     const values = parsed.compute(alias, { ignoreCase: true, matchExec: false })
  26:       Array.isArray(value) ? value[0] : value
  27:     const hostname = one(values['hostname']) ?? alias
  28:     const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
  29:     const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
  30:     const rawIdentity = values['identityfile']
  31:     const identityFiles = (
  32:       Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
  35:         .replace(/^~(?=\/|$)/, home)
  37:         .replaceAll('%h', hostname)
  38:         .replaceAll('%r', user),
  42:       hostname,
  43:       user,
  44:       port: Number.isFinite(rawPort) ? rawPort : 22,
  45:       identityFiles,
```

</details>


---

<sub>15m 48s</sub>

### Copilot

hvir reads the non-wildcard `Host` aliases from `~/.ssh/config` and applies only `HostName`, `User`, `Port`, and `IdentityFile`. I have what I need, so I'll write the README.

---

<sub>17m 45s</sub>

### `create`

**create a new file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
Created file /private/var/tmp/ws/ffb55c2b/hvir/README.md with 19227 characters
```


---

<sub>18m 50s</sub>

### `bash`

**Inspect Linux packaging scripts and gauntlet**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && ls build/linux 2>/dev/null; git ls-files build | grep -iE 'apparmor|postinst|prerm|postrm|after|before' ; echo ---; cat scripts/phase8-gauntlet.sh | head -40

<details>
<summary>17 lines</summary>

```
after-install.sh
after-remove.sh
hvir.apparmor
build/linux/after-install.sh
build/linux/after-remove.sh
build/linux/hvir.apparmor
build/pkg-scripts/postinstall
---
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run verify
npm run smoke

if [[ "${HVIR_SKIP_CAPACITY:-0}" != "1" ]]; then
  npm run performance:capacity
fi
<shellId: 59 completed with exit code 0>
```

</details>


---

<sub>18m 53s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/build/linux/after-install.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/build/linux/after-install.sh

<details>
<summary>71 lines</summary>

```
#!/bin/bash
set -e

stage='configuring the hvir command'
report_failure() {
  status=$?
  echo "hvir package configuration failed while $stage" >&2
  exit "$status"
}
trap report_failure ERR

HVIR_COMMAND='/opt/${sanitizedProductName}/resources/hvir-command'
chown root:root "$HVIR_COMMAND"
chmod 0755 "$HVIR_COMMAND"
if command -v update-alternatives >/dev/null 2>&1; then
  if [ -L '/usr/bin/${executable}' ] &&
    [ -e '/usr/bin/${executable}' ] &&
    [ "$(readlink '/usr/bin/${executable}')" != '/etc/alternatives/${executable}' ]; then
    rm -f '/usr/bin/${executable}'
  fi
  update-alternatives \
    --install '/usr/bin/${executable}' '${executable}' \
    "$HVIR_COMMAND" 100
else
  ln -sf "$HVIR_COMMAND" '/usr/bin/${executable}'
fi

stage='configuring the Chromium sandbox helper'
chown root:root '/opt/${sanitizedProductName}/chrome-sandbox'
if command -v runuser >/dev/null 2>&1 &&
  runuser -u nobody -- unshare --user true >/dev/null 2>&1; then
  chmod 0755 '/opt/${sanitizedProductName}/chrome-sandbox'
else
  chmod 4755 '/opt/${sanitizedProductName}/chrome-sandbox'
fi

stage='refreshing desktop metadata'
if command -v update-mime-database >/dev/null 2>&1; then
  update-mime-database /usr/share/mime
fi
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database /usr/share/applications
fi

stage='installing the AppArmor profile'
APPARMOR_PROFILE_SOURCE='/opt/${sanitizedProductName}/resources/apparmor-profile'
APPARMOR_PROFILE_TARGET='/etc/apparmor.d/${executable}'
APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns
if [ -r "$APPARMOR_USERNS_RESTRICTION" ] &&
  [ "$(cat "$APPARMOR_USERNS_RESTRICTION")" = '1' ]; then
  if ! command -v apparmor_parser >/dev/null 2>&1 ||
    ! command -v apparmor_status >/dev/null 2>&1 ||
    ! apparmor_status --enabled >/dev/null 2>&1; then
    echo 'hvir requires active AppArmor tooling for this host user-namespace policy' >&2
    false
  fi
  apparmor_parser --skip-kernel-load --debug "$APPARMOR_PROFILE_SOURCE" >/dev/null
  install -o root -g root -m 0644 "$APPARMOR_PROFILE_SOURCE" "$APPARMOR_PROFILE_TARGET"

  if ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; }; then
    apparmor_parser \
      --replace \
      --write-cache \
      --skip-read-cache \
      "$APPARMOR_PROFILE_TARGET"
  fi
elif [ -f "$APPARMOR_PROFILE_TARGET" ]; then
  if command -v apparmor_status >/dev/null 2>&1 &&
    apparmor_status --enabled >/dev/null 2>&1 &&
    ! { [ -x /usr/bin/ischroot ] && /usr/bin/ischroot; } &&
    command -v apparmor_parser >/dev/null 2>&1; then
    apparmor_parser --remove "$APPARMOR_PROFILE_TARGET"
  fi
  rm -f "$APPARMOR_PROFILE_TARGET"
fi

stage='finalizing package configuration'
trap - ERR
```

</details>


---

<sub>18m 53s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/check-seams.sh.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/check-seams.sh

<details>
<summary>99 lines</summary>

```
#!/usr/bin/env bash
#
# Grep-level enforcement of the architectural seams (AGENTS.md "Respect the
# seams"). This is a coarse backstop that complements the precise ESLint rules
# in eslint.config.mjs — it catches a violation even if lint is skipped, and
# documents the invariants in one readable place.
#
set -uo pipefail

fail=0
SRC="src"

report() {
  # $1 = human description, $2 = matching lines (empty = ok)
  if [[ -n "$2" ]]; then
    printf '\033[31m✗ %s\033[0m\n' "$1"
    printf '%s\n' "$2" | sed 's/^/    /'
    fail=1
  else
    printf '\033[32m✓ %s\033[0m\n' "$1"
  fi
}

# 1. ipcRenderer only in the preload bridge.
hits=$(grep -rnw 'ipcRenderer' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/preload/' || true)
report "ipcRenderer used only in src/preload/" "$hits"

# 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/project-host/local-host.ts' || true)
report "host primitives imported only in local-host.ts" "$hits"

# 3. PTY spawning (host.spawnPty call sites) only in the supervisor.
hits=$(grep -rnE '\.spawnPty\(' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/pty/pty-supervisor.ts' || true)
report "host.spawnPty() called only in pty-supervisor.ts" "$hits"

# 4. Bundled harness identities stay inside provider-owned main modules. Shared
# IPC, persistence, and renderer code treat provider ids as opaque catalog data.
hits=$(grep -rnE "['\"](plain-shell|claude-code|codex)['\"]" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/harness/' || true)
report "bundled harness ids used only in src/main/harness/" "$hits"

# 5. Raw loopback streams are transport for the main-owned pane proxy, never a
# renderer, IPC, harness, or feature-level socket API.
hits=$(grep -rnE '\.connectLoopback\(' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/web-pane/loopback-http-proxy.ts' || true)
report "host.connectLoopback() called only in the web-pane proxy" "$hits"

# 6. ipcMain is a single transport choke point. Feature registrars receive the
# narrow IpcRegistrar capability and cannot install handlers directly.
hits=$(grep -rnw 'ipcMain' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/main/ipc/authority-router.ts' || true)
report "ipcMain used only in the IPC authority router" "$hits"

# 7. Feature registrars cannot bypass central renderer-owner or canonical-path
# authority resolution.
hits=$(grep -rnE '\.currentOwner\(|\.realpath\(|getRegisteredWorkspaceRoot|\basHostId\b|\bdirnameHostPath\b' \
  'src/main/ipc/features' --include='*.ts' --include='*.tsx' --include='*.mts' || true)
report "IPC features use central owner/path authority" "$hits"

# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
# consumers continue to depend on ProjectHost and host-qualified paths only.
hits=$(grep -rnE "from ['\"]ssh2['\"]|import\(['\"]ssh2['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -vE '^src/main/project-host/ssh-(client-lifecycle|host|host-options|file-access|exclusive-create|project-file-transfer|abort|transport-pool|watch-service)\.ts' || true)
report "ssh2 details stay inside the SshHost adapter" "$hits"

# 9. Host-local collaborators share SshHost's authentication lifecycle. They
# receive authenticated clients through narrow ports and never construct one.
hits=$(grep -rnE '\bnew Client\(|clientFactory' \
  src/main/project-host/ssh-{client-lifecycle,file-access,exclusive-create,project-file-transfer,transport-pool,watch-service}.ts || true)
report "SSH collaborators do not create independent clients" "$hits"

# 10. The collaborators are private composition details, not parallel
# ProjectHost façades exposed to consumers through the package barrel.
hits=$(grep -nE 'Ssh(FileAccess|TransportPool|WatchService|AuthenticationLifecycle)|startSshAuthentication' \
  src/main/project-host/index.ts || true)
report "only SshHost is exported as the remote host façade" "$hits"

# 11. The project-host catalog is the only main-process owner allowed to
# construct SSH hosts. Project persistence/workflows cannot import concrete host
# owners, and the catalog cannot depend on project persistence/workflows.
hits=$({
  grep -rnE '\bnew SshHost\(' src/main --include='*.ts' --include='*.mts' \
    | grep -v '^src/main/project-host/project-host-catalog.ts' || true
  grep -nE "RendererSshPrompter|SshHostTrustStore|LocalSshIdentitySource|parseSshConfig|known-hosts|identityFileCandidates|from ['\"]\./project-host/(ssh-host|ssh-host-trust|ssh-identity-source|renderer-ssh-prompter|project-host-catalog)['\"]" \
    src/main/project-registry.ts src/main/project-coordinator.ts || true
  grep -nE "from ['\"][^'\"]*(project-registry|project-coordinator)['\"]" \
    src/main/project-host/project-host-catalog.ts src/main/project-host/project-host.ts || true
  sed -n '/^export class ProjectRegistry/,$p' src/main/project-registry.ts \
    | grep -nE '^  (public )?(async )?(listHosts|hostById|connectedHosts|connectHost|disconnectHost|disconnectSshHosts|browseHost)[(:=]' || true
})
report "SSH construction and implementation owners stay in the host catalog" "$hits"

# 12. Git capability modules share one command/cancellation/root policy. No
# capability constructs a git invocation against the host directly.
hits=$(grep -rnF ".exec('git'" src/main/git --include='*.ts' --include='*.mts' \
  | grep -vE '^src/main/git/(git-command-context|worker-host-broker)\.ts' || true)
report "Git commands use the shared command context" "$hits"

# 13. The utility-process proxy implements only Git's exact exec/read/metadata port,
# rather than pretending to be a complete ProjectHost with never placeholders.
hits=$(grep -nE 'implements ProjectHost|execStream\(\): never|spawnPty\(\): never|connectLoopback\(\): never|readFile\(\): never|writeFile\(\): never|readdir\(\): never|stat\(\): never|realpath\(\): never|watch\(\): never' \
  src/workers/git-worker.ts || true)
report "Git worker proxy exposes only exact exec, read, and metadata operations" "$hits"

if [[ "$fail" -ne 0 ]]; then
  printf '\n\033[31mseam check failed\033[0m\n'
  exit 1
fi
printf '\nseam check passed\n'
```

</details>


---

<sub>19m 6s</sub>

### `grep`

**id_ed25519|id_rsa|id_ecdsa|identityFileCandidates\s*[=(]**

"id_ed25519|id_rsa|id_ecdsa|identityFileCandidates\s*[=(]" in **/*.ts (src/main/project-host)

<details>
<summary>7 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:158:        identityFileCandidates(config, this.home),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:176:  'id_rsa',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:177:  'id_ecdsa',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:178:  'id_ecdsa_sk',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:179:  'id_ed25519',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:180:  'id_ed25519_sk',
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:186:export function identityFileCandidates(
```

</details>


---

<sub>19m 6s</sub>

### `grep`

**\.cache/hvir|~/\.hvir|\.hvir/|hvir-remote|remote helper|install.*helper|trash**

"\.cache/hvir|~/\.hvir|\.hvir/|hvir-remote|remote helper|install.*helper|trash" in **/*.ts (src/main/project-host)

<details>
<summary>17 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:18:  readonly trashItem?: (path: HostPath) => Promise<void>
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host-catalog.ts:44:    const local = new LocalHost({ trashItem: options.trashItem })
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/electron-project-trash.ts:5:export function electronTrash(
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/electron-project-trash.ts:6:  electronShell: Pick<Shell, 'trashItem'>,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/electron-project-trash.ts:8:  return (path) => electronShell.trashItem(path.path)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/index.ts:31:export { electronTrash } from './electron-project-trash'
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:56:  ProjectFileTrashOptions,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:116:      readonly trashItem?: (path: HostPath) => Promise<void>
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:119:    this.fileDeletion = options.trashItem
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:122:          trashEntry: (path, trashOptions) => this.trashEntry(path, trashOptions),
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:734:  private async trashEntry(
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:736:    opts: ProjectFileTrashOptions = {},
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/local-host.ts:741:    await this.options.trashItem!(path)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts:114:export interface ProjectFileTrashOptions extends ProjectFileStreamOptions {
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts:115:  /** The immediate recoverable-trash primitive has been submitted. */
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts:123:      trashEntry(path: HostPath, opts?: ProjectFileTrashOptions): Promise<void>
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts:256:  /** Exact recovery guarantee and immediate top-level trash mechanic, when available. */
```

</details>


---

<sub>19m 10s</sub>

### Copilot

Trash is implemented for local hosts through Electron's `shell.trashItem`. I'll check what deletion does on SSH hosts.

---

<sub>19m 12s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts (lines 100-135)

<details>
<summary>31 lines</summary>

```
  /** Exact destination ownership begins immediately after exclusive creation. */
  readonly onCreated?: () => void
}

export interface ProjectFileMetadataOptions extends ProjectFileStreamOptions {
  readonly mode: ProjectFileMode
  readonly mtimeSeconds: number
}

export interface ProjectFileRenameOptions extends ProjectFileStreamOptions {
  /** The immediate no-replace primitive has been submitted and must finish truthfully. */
  readonly onSubmitted?: () => void
}

export interface ProjectFileTrashOptions extends ProjectFileStreamOptions {
  /** The immediate recoverable-trash primitive has been submitted. */
  readonly onSubmitted?: () => void
}

/** Truthful immediate deletion mechanics; recursive policy remains coordinator-owned. */
export type ProjectFileDeletionPort =
  | {
      readonly capability: 'recoverable'
      trashEntry(path: HostPath, opts?: ProjectFileTrashOptions): Promise<void>
    }
  | {
      readonly capability: 'permanent'
    }
  | {
      readonly capability: 'unavailable'
    }

/** Immediate transfer mechanics. Recursive policy remains coordinator-owned. */
export interface ProjectFileTransferPort {
  readFileChunks(
    path: HostPath,
```

</details>


---

<sub>19m 12s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/project-host.ts (lines 245-270)

<details>
<summary>22 lines</summary>

```
  ) {
    throw new Error('Invalid loopback endpoint')
  }
}

export interface ProjectHost {
  readonly hostId: HostId
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  /** Present when this host can participate in verified project-file transfers. */
  readonly fileTransfer?: ProjectFileTransferPort
  /** Exact recovery guarantee and immediate top-level trash mechanic, when available. */
  readonly fileDeletion: ProjectFileDeletionPort

  /** Establish the connection (a no-op for LocalHost). */
  connect(): Promise<void>
  /** Tear down the connection and all resources it owns. */
  dispose(): Promise<void>
  onConnectionState(cb: (state: HostConnectionState) => void): Disposer

  /** Resolve the interactive shell on this host (never inherit it from another host). */
  defaultShell(): Promise<string>

  /** Buffered command execution. */
  exec(command: string, args: readonly string[], opts?: ExecOptions): Promise<ExecResult>
  /** Streaming command execution. */
```

</details>


---

<sub>19m 12s</sub>

### `grep`

**fileDeletion|deleteEntry|permanent|'delete'|kind: '(trash|delete|permanent)**

"fileDeletion|deleteEntry|permanent|'delete'|kind: '(trash|delete|permanent)" in **/ssh-*.ts (src/main/project-host)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/project-host/ssh-host.ts:68:  readonly fileDeletion = { capability: 'permanent' } as const
```


---

<sub>19m 22s</sub>

### Copilot

Deletion on SSH hosts is permanent (`fileDeletion: 'permanent'`), so the file-tree bullet needs correcting. I found no remote helper that hvir installs. Applying the corrections now.

---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 36s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>19m 43s</sub>

### Copilot

I'll verify the remaining UI claims: badge count, attention state names, copy-block actions, fork labels, and the environment-variable secret options.

---

<sub>19m 45s</sub>

### `grep`

**setBadgeCount|'Target host'|'Forward local'|>Target host<|>Forward local<|Copy (command|output|prompt)[^a-z]|label: 'Fork|>Fork[^a-z]|'Fork conversation|Fork (this|conversation|session)**

"setBadgeCount|'Target host'|'Forward local'|>Target host<|>Forward local<|Copy (command|output|prompt)[^a-z]|label: 'Fork|>Fork[^a-z]|'Fork conversation|Fork (this|conversation|session)" in **/*.{ts,tsx} (src)

<details>
<summary>6 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/index.ts:345:        return app.setBadgeCount(count)
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx:210:                <option value="host">Target host</option>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx:211:                <option value="local-forward">Forward local</option>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalContextMenu.tsx:260:            <span>Fork Conversation to New Terminal</span>
/private/var/tmp/ws/ffb55c2b/hvir/src/main/attention-badge.ts:7:  constructor(private readonly setBadgeCount: (count: number) => boolean | void) {}
/private/var/tmp/ws/ffb55c2b/hvir/src/main/attention-badge.ts:51:      if (this.setBadgeCount(count) === false) this.failed = true
```

</details>


---

<sub>19m 48s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/HarnessProfileAdvancedFields.tsx (lines 170-240)

<details>
<summary>71 lines</summary>

```
                    : {
                        kind: 'reference',
                        name: binding.name,
                        source: 'host',
                        sourceName: binding.name,
                      }
              onChange(replaceHarnessValue(bindings, index, next))
            }}
          >
            <option value="literal">Plaintext value</option>
            <option value="reference">Secret reference</option>
            <option value="unset">Unset</option>
          </select>
          {binding.kind === 'literal' ? (
            <input
              aria-label="Environment value"
              value={binding.value}
              onChange={(event) =>
                onChange(
                  replaceHarnessValue(bindings, index, {
                    ...binding,
                    value: event.currentTarget.value,
                  }),
                )
              }
            />
          ) : binding.kind === 'reference' ? (
            <>
              <select
                aria-label="Reference source"
                value={binding.source}
                onChange={(event) =>
                  onChange(
                    replaceHarnessValue(bindings, index, {
                      ...binding,
                      source: event.currentTarget.value as 'host' | 'local-forward',
                    }),
                  )
                }
              >
                <option value="host">Target host</option>
                <option value="local-forward">Forward local</option>
              </select>
              <input
                aria-label="Reference name"
                value={binding.sourceName}
                onChange={(event) =>
                  onChange(
                    replaceHarnessValue(bindings, index, {
                      ...binding,
                      sourceName: event.currentTarget.value,
                    }),
                  )
                }
              />
            </>
          ) : (
            <span />
          )}
          <button
            type="button"
            aria-label={`Remove ${binding.name || 'environment row'}`}
            onClick={() =>
              onChange(bindings.filter((_, candidate) => candidate !== index))
            }
          >
            ×
          </button>
        </div>
      ))}
    </div>
```

</details>


---

<sub>19m 48s</sub>

### `bash` — Failed

**List terminal context menu labels**

$ cd /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal && grep -nE "<span>[^<{]+</span>" TerminalContextMenu.tsx | head -30; grep -rnE "'(working|bell|ready)'" ../../../shared/*.ts 2>/dev/null | head -5

```
Permission denied and could not request permission from user
```


---

<sub>19m 55s</sub>

### `grep`

**<span>[^<{]+</span>**

"<span>[^<{]+</span>" (src/renderer/src/terminal/TerminalContextMenu.tsx)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalContextMenu.tsx:260:            <span>Fork Conversation to New Terminal</span>
```


---

<sub>19m 55s</sub>

### `grep`

**'working' \| |'bell' \||'ready' \|**

"'working' \| |'bell' \||'ready' \|" in **/*.ts (src/shared)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/git-types.ts:29:export type GitRepositoryState = 'ready' | 'unborn' | 'not-git'
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/terminal-attention.ts:2:export type TerminalAttentionState = 'working' | 'bell' | 'idle'
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/harness-telemetry.ts:42:  readonly state: 'working' | 'waiting-for-user' | 'waiting-for-approval' | 'idle'
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/sessions-projection.ts:113:  readonly state: 'working' | 'waiting-for-user' | 'waiting-for-approval' | 'idle'
/private/var/tmp/ws/ffb55c2b/hvir/src/shared/sessions-projection.ts:287:  readonly attention: SessionsFact<'none' | 'ready' | 'bell'>
```


---

<sub>19m 58s</sub>

### Copilot

The shared attention type uses `'idle'`, so I'll confirm the UI actually labels it "Ready", and find the copy-block menu labels.

---

<sub>20m 0s</sub>

### `grep`

**'Ready'|'Working'|'Bell'|>Ready<|Copy (Command|Output|Prompt)|copy(Command|Output|Prompt)Block|semantic**

"'Ready'|'Working'|'Bell'|>Ready<|Copy (Command|Output|Prompt)|copy(Command|Output|Prompt)Block|semantic" in **/*.{ts,tsx} (src/renderer/src)

<details>
<summary>45 matches</summary>

```
[grep content: 38 matches across 12 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src]
sessions/SessionsOverviewCard.tsx:67:       className={`session-fact ${fact.tone}${fact.label === 'Status' ? ' status activity' : fact.label === 'Attention' || fact.label === 'Working' ? ' activity' : ''}`}

terminal/terminal-pane.ts (5 match(es)):
  165:       readonly type: 'semantic'
  196:   /** Parser-owned terminal semantics; consumers retain all product authority. */
  227:   /** Resolve retained semantic provenance, or fail closed after eviction/reset. */
  244:   /** Extract exact plain text for one authenticated half-open semantic range. */
  250:   /** Cancel the current exact semantic-range extraction. */

sessions/sessions-overview-model.ts (3 match(es)):
  115:       'Working',
  117:       () => 'Working',
  292:       return 'Working'
settings/HarnessProfileCommandFields.tsx:37:           to own those semantics.
settings/harness-argument-editor.ts:8:  * Expansion, substitution, operators, and comments have no shell semantics.

terminal/TerminalView.tsx (8 match(es)):
  117:     semanticRegionsAvailable,
  118:     semanticRegion,
  182:       {visible && active && semanticRegionsAvailable ? (
  184:           className="terminal-semantic-navigation"
  197:           <span className="terminal-semantic-region" role="status" aria-live="polite">
  198:             {semanticRegion
  199:               ? `${regionLabel(semanticRegion.kind)} ${semanticRegion.index} of ${semanticRegion.total}`
  227:         canCopyRegion={semanticRegionsAvailable}

terminal/terminal-pane-event-coordinator.ts (11 match(es)):
  7: } from './terminal-semantic-regions'
  10:   readonly semanticRegionsAvailable: boolean
  11:   readonly semanticRegion?: TerminalSemanticRegionSummary
  24:     semanticRegionsAvailable: false,
  71:     if (event.type !== 'semantic') return undefined
  94:     if (!range) return Promise.reject(new Error('No semantic terminal region is available'))
  107:   private publish(semanticRegion?: TerminalSemanticRegionSummary): void {
  108:     const semanticRegionsAvailable = this.regions.size > 0
  110:       this.currentSnapshot.semanticRegionsAvailable === semanticRegionsAvailable &&
  111:       regionEquals(this.currentSnapshot.semanticRegion, semanticRegion)
  115:     this.currentSnapshot = { semanticRegionsAvailable, semanticRegion }
terminal/terminal-runtime-interactions.ts:5: import type { TerminalSemanticRegionDirection } from './terminal-semantic-regions'

terminal/terminal-attention.ts (3 match(es)):
  55:   if (attention === 'idle') return 'Ready'
  56:   if (attention === 'bell') return 'Bell'
  57:   return 'Working'
terminal/terminal-semantic-regions.ts:57:  * Per-pane semantic transcript state. It stores terminal-owned provenance only;
terminal/TerminalSearch.tsx:158:             title="Copy the current semantic prompt, command, or output block"

terminal/ghostty-terminal-events.ts (2 match(es)):
  41:     case 'semantic':
  43:         type: 'semantic',
```

</details>


---

<sub>20m 4s</sub>

### Copilot

`'idle'` is displayed as "Ready", and copying the current prompt, command, or output block is confirmed. TerminalView also has semantic-region navigation, so I'll check it.

---

<sub>20m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalView.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/terminal/TerminalView.tsx (lines 178-232)

<details>
<summary>55 lines</summary>

```
            {canRecoverHarness ? 'Retry recovery' : 'Restart'}
          </button>
        </div>
      ) : null}
      {visible && active && semanticRegionsAvailable ? (
        <div
          className="terminal-semantic-navigation"
          role="group"
          aria-label="Transcript regions"
          onMouseDown={(event) => event.preventDefault()}
        >
          <button
            type="button"
            aria-label="Previous transcript region"
            title="Previous transcript region"
            onClick={previousSemanticRegion}
          >
            ↑
          </button>
          <span className="terminal-semantic-region" role="status" aria-live="polite">
            {semanticRegion
              ? `${regionLabel(semanticRegion.kind)} ${semanticRegion.index} of ${semanticRegion.total}`
              : 'Transcript regions'}
          </span>
          <button
            type="button"
            aria-label="Next transcript region"
            title="Next transcript region"
            onClick={nextSemanticRegion}
          >
            ↓
          </button>
        </div>
      ) : null}
      <div
        className="terminal-container"
        data-terminal-theme={effectiveTheme}
        style={{ backgroundColor: terminalTheme.background }}
        ref={containerRef}
        tabIndex={-1}
        onFocus={(event) => {
          if (event.target === event.currentTarget) focus()
        }}
        onMouseDown={focus}
        onContextMenu={contextMenu.openFromPointer}
        onKeyDownCapture={contextMenu.openFromKeyboard}
      />
      <TerminalSearch
        controller={searchController}
        canCopyRegion={semanticRegionsAvailable}
      />
      <TerminalContextMenu
        controller={contextMenu}
        onSearch={openSearch}
        onSplit={props.onSplit}
```

</details>


---

<sub>20m 8s</sub>

### Copilot

The terminal also lets you step through prompt, command, and output regions. I'll update the terminal and harness-profile bullets to match.

---

<sub>20m 12s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>20m 12s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>20m 23s</sub>

### Copilot

Next I'll re-read the whole README to proofread it.

---

<sub>20m 23s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

<details>
<summary>205 lines</summary>

````
<p align="center">
  <img src="build/icons-linux/128x128.png" alt="hvir logo" width="96" height="96">
</p>

<h1 align="center">hvir</h1>

<p align="center">
  <strong>A desktop workbench for terminal-based AI coding agents.</strong>
</p>

hvir runs coding agents such as Claude Code and Codex in real terminals, right next to the project they are working on: a file tree, a viewer for source, rendered documents, and diffs, a Git panel, and embedded previews of the dev servers your agents start. A project can be a folder on your machine or on any host in your `~/.ssh/config`, and it works the same way in both places. Every Git worktree gets its own workspace, so several agents can work on one repository side by side.

hvir is an Electron app written in TypeScript and React. Its terminals use [Ghostty](https://ghostty.org)'s terminal core, compiled to WebAssembly through a [ghostty-web](https://github.com/jarmak-personal/ghostty-web) fork, on native PTYs.

- [Features](#features)
- [Supported agents](#supported-agents)
- [Installation](#installation)
- [Usage](#usage)
- [Remote projects over SSH](#remote-projects-over-ssh)
- [Development](#development)
- [Releases](#releases)
- [License](#license)

## Features

### Agents and terminals

- **Launch agents from the terminal panel.** hvir includes harnesses for Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, Cursor CLI, and Pi, plus a plain login shell and custom commands. It probes each harness on the host where the project lives and shows whether it is available before you launch it.
- **Harness profiles.** Change the executable, arguments, and environment of any harness, globally or for a single project. Arguments can reference the project or workspace root. Environment variables can be plain values, references to a variable on the target host or in your local environment, or unset. A preview shows the exact command before anything runs.
- **Exact resume and fork.** hvir records the session identity of Claude Code and Codex conversations. After a restart it resumes *that* conversation rather than whichever one is newest, and you can fork a conversation into a new terminal.
- **Terminal recovery.** When the app starts, hvir can ask which terminals to restore or restore all of them automatically.
- **Attention tracking.** Terminals you are not looking at are marked *Working*, *Bell*, or *Ready* (output has settled after you submitted input). Workspace tabs count the terminals that need you, and the total appears as an app badge where the desktop supports it.
- **A full-featured terminal.** Split the terminal panel and search scrollback. When the shell marks its prompts, you can step through prompts, commands, and output and copy any of them as a block. Click `path:line:col` references to open them in the viewer, or open `localhost` URLs in a web pane. The theme gallery offers hundreds of Ghostty color schemes, with separate picks for light and dark mode.
- **Move live terminals between worktrees.** When an agent creates a new worktree, you can rehome its terminal there without restarting the process.
- **Message submission.** Optionally send messages with Ctrl+Enter or Cmd+Enter so that Enter inserts a new line in Claude Code and Codex. For Claude Code, hvir asks before editing Claude's `keybindings.json`, and it restores the previous bindings exactly when you turn the setting off.
- **Image paste on remote hosts.** Pasting an image into Claude Code or Codex in an SSH project uploads the image to the host and inserts its path.

### Files, viewer, and Git

- **File tree** with Git status decorations and filename search. You can create, rename, move, and drag and drop files, copy paths, and reveal files in the system file manager. Deleting moves files to the trash in local projects; on SSH hosts, deletion is permanent.
- **Viewer** with tabs, pinning, and a two-pane split. Files open in one of three modes:
  - **Rendered:** Markdown (with task lists, Mermaid diagrams, and repository images), Mermaid files, HTML in a sandboxed preview, JSON, YAML, CSV, and images.
  - **Source:** syntax highlighting, editing and saving, find, go to line, and a blame gutter.
  - **Diff:** `HEAD → Working tree`, `Index → Working tree`, `Branch point → HEAD`, or any historical commit.

  Open files reload when they change on disk, for example when an agent edits them.
- **Git panel** with working-tree changes, commit history and graph, commit details, and blame. You can also switch branches, fetch (on demand or on a timer), and pull (fast-forward only). hvir does not stage or commit; that stays with you and your agents.
- **Worktree workspaces.** Each project shows its Git worktrees as workspace tabs. hvir discovers worktrees that you or your agents create and can prune stale worktree records. Folders that aren't Git repositories work too; they just have no Git panel.

### Review, sessions, and previews

- **Document review.** Comment on source lines of any text file or on blocks of rendered Markdown. Each comment is anchored to the exact file contents, so hvir can tell whether it is still current, has moved, or has gone stale as the agent edits the file. When you're ready, hvir shows the exact feedback and delivers it to a live terminal: **Copy** works with every agent, **Insert** pastes it into Claude Code or Codex without submitting, and **Send now** submits it to Codex.
- **Sessions overview.** One view of every hvir terminal across all projects and worktrees, showing attention state, activity, harness, and token usage (Claude Code and Codex). Filter it, group it by project and worktree, and jump straight to any live terminal.
- **Web panes.** Open loopback URLs such as `http://localhost:5173` from a terminal in an embedded browser pane. An authenticated per-pane proxy routes the traffic through the project's host, so a dev server running on an SSH host works without manual port forwarding.
- **Workbench health.** hvir records application faults, such as a renderer crash or hang, in bounded local storage that you can review or delete. From the health control you can prepare a diagnostic report, optionally with a masked screenshot, and copy or save it. Reports are never handed to an agent automatically.

## Supported agents

Install the agent CLIs you want on the machine where your project lives: your computer for local projects, or the SSH host for remote ones.

| Harness | Command | After a restart | Fork | Context & usage | Review delivery |
| --- | --- | --- | --- | --- | --- |
| Shell (default) | your login shell | starts a new shell | — | — | Copy |
| Claude Code | `claude` | resumes the exact conversation | 2.1.258+ | ✓ | Copy, Insert |
| Codex | `codex` | resumes the exact conversation | 0.151.0+ | ✓ | Copy, Insert, Send now (0.146.0+) |
| Gemini CLI | `gemini` | starts a new session | — | — | Copy |
| GitHub Copilot CLI | `copilot` | starts a new session | — | — | Copy |
| Cursor CLI | `cursor-agent` | starts a new session | — | — | Copy |
| Pi | `pi` | starts a new session | — | — | Copy |
| Custom | a command you choose | starts it again | — | — | Copy |

Harnesses that can't resume the exact conversation start fresh after a restart; hvir never replaces an exact resume with "resume the latest session". Add or edit harnesses under **Settings → Harnesses**, or from the **+** menu in the terminal panel.

## Installation

hvir runs on:

- **macOS** on Apple silicon.
- **Linux** x64 or arm64 with `apt` and glibc 2.35 or newer. Releases are tested on Ubuntu 22.04, Ubuntu 24.04, and Debian 13.

Intel Macs and Windows are not supported. For the Git features, `git` must be installed wherever your projects live.

### Install or update with the installer

Each [GitHub release](https://github.com/jarmak-personal/hvir/releases) includes an `install.sh` that installs the native package for that release:

```sh
curl -fsSLO https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer detects your platform, downloads the matching package from the same release, and checks it against a SHA-256 digest built into the installer. On macOS it also checks the package's Developer ID signature, notarization, and Gatekeeper assessment. On Linux it confirms that `apt` can satisfy the package's dependencies. Then it installs the package with `sudo`. Run the latest installer again to update. If you still have the older npm package (`hvir-workbench`), the installer replaces it.

| | macOS | Linux |
| --- | --- | --- |
| Application | `/Applications/hvir.app` | `/opt/hvir` |
| Command | `/usr/local/bin/hvir` | `/usr/bin/hvir` |

On Linux hosts that restrict unprivileged user namespaces (such as Ubuntu 24.04), the package installs an AppArmor profile so that Chromium's sandbox keeps working.

### Install a package manually

You can also download a package from the release and install it yourself:

```sh
# Linux (use the -linux-arm64.deb on arm64)
sudo apt install ./hvir-<version>-linux-x64.deb

# macOS
sudo installer -pkg hvir-<version>-darwin-arm64.pkg -target /
```

Releases are immutable and include a `SHA256SUMS` file and GitHub release attestations. To verify a download with the [GitHub CLI](https://cli.github.com), run `gh release verify-asset v<version> <file> --repo jarmak-personal/hvir`.

### Uninstall

```sh
bash install.sh --uninstall           # remove hvir and keep your settings
bash install.sh --uninstall --purge   # also remove your hvir settings and cache
```

Uninstalling never touches your project directories.

## Usage

### Open a project

```sh
hvir .              # open the current directory
hvir ~/src/my-app   # open another local directory
hvir                # reopen your saved projects
```

On the first launch without a path, hvir asks you to choose a folder. Projects appear in the projects bar at the top of the window. Use **+** there to add another project, either a local folder or a folder on an SSH host. The **Sessions** button opens the overview of all your terminals.

To start an agent, open the **+** menu in the terminal panel and pick a harness.

### Keyboard shortcuts

`Mod` is Cmd on macOS and Ctrl on Linux.

| Shortcut | Action |
| --- | --- |
| `Mod+P` | Find a file by name |
| `Mod+F` | Find in the current file |
| `Mod+Shift+F` | Find in the terminal |
| `Ctrl+G` | Go to line |
| `Mod+Shift+M` | Cycle the viewer mode (rendered, source, diff) |
| `Mod+J` | Focus the terminal |
| `Mod+Shift+J` | Maximize or restore the terminal panel |
| `Mod+1` | Focus the viewer |
| `Mod+0` | Focus the file tree |
| `Mod+Alt+]` / `Mod+Alt+[` | Next / previous workspace |

Override any of these under **Settings → Keybindings** with a JSON object that maps action names to shortcuts, for example `{ "findFile": "Mod+Shift+P" }`. Shortcuts combine one or more of `Mod`, `Ctrl`, `Meta`, `Alt`, and `Shift` with a key.

### Settings

| Section | What it controls |
| --- | --- |
| Appearance | App theme, terminal colors and the Ghostty theme gallery, interface and monospace fonts, interface scale, and terminal text size |
| Terminal | Cursor shape and blinking, ligatures, message submission, the idle threshold that marks a terminal *Ready*, and terminal restore on app start |
| Git | Automatic fetch interval (off, 1, 5, 15, or 30 minutes; the default is 5) |
| Keybindings | Shortcut overrides |
| Harnesses | Harness profiles: executables, arguments, and environment |

### Where hvir keeps its data

hvir stores its settings, project list, saved terminals, harness profiles, and trusted SSH host keys in:

| Platform | Settings and state | Cache |
| --- | --- | --- |
| macOS | `~/Library/Application Support/hvir` | `~/Library/Caches/hvir` |
| Linux | `${XDG_CONFIG_HOME:-~/.config}/hvir` | `${XDG_CACHE_HOME:-~/.cache}/hvir` |

## Remote projects over SSH

hvir connects to SSH hosts itself. Apart from the tools listed below, you don't need to install anything on the remote host.

- **Hosts.** Every non-wildcard `Host` alias in `~/.ssh/config` appears as a host. hvir uses its `HostName`, `User`, `Port`, and `IdentityFile` settings. Other options, including `ProxyJump` and `ProxyCommand`, are not applied.
- **Authentication.** hvir uses your SSH agent (`SSH_AUTH_SOCK`) and your identity files: the ones configured for the host, or the OpenSSH defaults such as `~/.ssh/id_ed25519`. Prompts for passphrases, passwords, and keyboard-interactive authentication appear in the app.
- **Host keys.** The first time you connect, hvir asks you to confirm the host key, then stores it in its own `known-hosts.json` rather than in `~/.ssh/known_hosts`. If a host's key changes later, hvir warns you before connecting.
- **On the remote host** you need SFTP, a POSIX `sh`, `git` for the Git features, and the agent CLIs you want to run. If `inotifywait` (from `inotify-tools`) is installed, hvir uses it to watch files; otherwise it falls back to polling.

## Development

### Prerequisites

- Node.js 24 or newer, and npm
- Git
- A toolchain for native Node modules (node-gyp): Python 3 and a C/C++ compiler, such as the Xcode Command Line Tools on macOS or `build-essential` on Debian and Ubuntu

### Get started

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

`npm ci` also downloads Electron, builds the `rename-noreplace` Node-API addon in [`packages/rename-noreplace`](packages/rename-noreplace), and rebuilds `node-pty` for Electron. Before `dev` and `build`, a check confirms that the installed `ghostty-web` is the build hvir pins. If the check fails, run `npm ci` again.

To open a specific project in a development build, set `HVIR_PROJECT_ROOT`:

```sh
HVIR_PROJECT_ROOT=/path/to/project npm run dev
```

Development builds use the same data directory as an installed hvir, so they see and can change the same projects and settings.

> [!TIP]
> On Linux hosts that restrict unprivileged user namespaces (such as Ubuntu 24.04), the unpackaged Electron binary may fail to start its sandbox. For local development you can run `npm run dev -- --noSandbox`.

### Build and package

| Command | Result |
| --- | --- |
| `npm run build` | Type-check and build the app into `out/` |
| `npm run preview` | Run the built app |
| `npm run build:dir` | Build an unpacked application in `dist/` |
| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build a `.deb` package in `dist/` |
| `npm run pack:mac:arm64` | Build a macOS `.pkg` in `dist/` (`npm run pack:mac:arm64:signed` fails instead of skipping code signing) |

Packaging is configured in [`electron-builder.yml`](electron-builder.yml). Packaging resources live in [`build/`](build): icons, macOS entitlements and package scripts, the Linux AppArmor profile and package maintainer scripts, and the `hvir` command launcher.

### Checks and tests

| Command | What it does |
| --- | --- |
| `npm test` | Run the Vitest unit tests (`npm run test:watch` for watch mode) |
| `npm run typecheck` | Type-check the main, preload, and renderer code |
| `npm run lint` | Run ESLint, including the architecture import rules |
| `npm run format` / `npm run format:check` | Format with Prettier, or check formatting |
| `npm run check-seams` | Check the architecture seams described below |
| `npm run architecture:report` | Report on architecture hotspots, offline |
| `npm run test:mutation` | Run Stryker mutation tests |

`npm run verify` is the full CI gate: `check-seams`, `check-adrs`, `architecture:check`, `lint`, `typecheck`, and `test`. `architecture:check` enforces the architecture policy against GitHub issue and branch data, so it needs `HVIR_REPO_TOKEN` and a clone of the canonical repository. Offline, use `architecture:report` instead.

### Smoke tests

The smoke suite drives the real Electron app through end-to-end scenarios, each against a disposable repository and user-data directory:

```sh
npm run smoke                                    # full suite
npm run smoke:macos                              # macOS suite
npm run smoke:scenario -- git-workflow web-pane  # selected scenarios
```

On Linux without a display, run the suite under Xvfb: `xvfb-run -a npm run smoke`. Scenario names are listed in [`src/main/smoke/scenario-selection.mts`](src/main/smoke/scenario-selection.mts). You can also select scenarios with `HVIR_SMOKE_SCENARIO` (not together with arguments), repeat a run with `HVIR_SMOKE_REPEAT=<n>`, and keep failure evidence by setting `HVIR_SMOKE_ARTIFACT_DIR`. `npm run gauntlet` runs `verify`, the smoke suite, and the capacity benchmark (set `HVIR_SKIP_CAPACITY=1` to skip the benchmark).

`npm run hooks:install` sets up a [pre-push hook](.githooks/pre-push) that runs `typecheck` and the smoke suite for your platform. Skip it with `git push --no-verify`.

### Project layout

```text
src/
  main/       Electron main process: project hosts (local and SSH), PTY supervisor,
              harness providers, Git, web-pane proxy, sessions, and diagnostics
  preload/    The bridge between the renderer and the main process
  renderer/   React UI: workbench, terminals, file tree, viewer, Git, sessions, settings
  shared/     Types and IPC contracts shared by all processes
  workers/    Utility processes, including the Git worker
packages/     rename-noreplace, a private Node-API addon for atomic no-replace renames
build/        Packaging resources: icons, entitlements, AppArmor profile, installer scripts
scripts/      Build, smoke, release, and architecture tooling
test/         Vitest unit tests
```

### Architecture seams

[`scripts/check-seams.sh`](scripts/check-seams.sh) and ESLint keep a few boundaries in place:

- **Every path belongs to a host.** Features work with host-qualified paths through a `ProjectHost`. Only the local host adapter ([`src/main/project-host/local-host.ts`](src/main/project-host/local-host.ts)) imports `fs`, `child_process`, `chokidar`, or `node-pty`, and only the SSH host adapter imports `ssh2`. This is why local and remote projects behave the same.
- **One IPC authority.** The renderer has no Node.js access. Only `src/preload` uses `ipcRenderer`, and only [`src/main/ipc/authority-router.ts`](src/main/ipc/authority-router.ts) uses `ipcMain`.
- **One PTY owner.** Only the PTY supervisor ([`src/main/pty/pty-supervisor.ts`](src/main/pty/pty-supervisor.ts)) spawns terminals.
- **Harness details stay in providers.** Only `src/main/harness/` refers to specific harnesses; everything else treats harness IDs as opaque data. Each provider in `src/main/harness/providers/` is registered in [`bundled-harness-providers.ts`](src/main/harness/bundled-harness-providers.ts).
- **Shared Git and loopback paths.** Git commands run through a shared command context, and only the web-pane proxy opens loopback connections.

## Releases

Maintainers cut releases with the **Release** GitHub Actions workflow. Choosing a `patch`, `minor`, or `major` bump opens a version-only pull request, and merging it starts the release for that exact commit. The workflow builds the Linux packages and tests them on Ubuntu 22.04, Ubuntu 24.04, and Debian 13; builds, signs, and notarizes the macOS package; and publishes an immutable GitHub release with `install.sh`, `SHA256SUMS`, and a release manifest.

## License

hvir is released under the [MIT License](LICENSE). Third-party components and their licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>20m 43s</sub>

### `grep`

**nodeIntegration|contextIsolation|sandbox: (true|false)|setPath\('userData'|setPath\("userData"**

"nodeIntegration|contextIsolation|sandbox: (true|false)|setPath\('userData'|setPath\("userData"" in **/*.ts (src/main)

<details>
<summary>8 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/window-policy.ts:13:    readonly contextIsolation: boolean
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/window-policy.ts:14:    readonly nodeIntegration: boolean
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/window-policy.ts:48:      sandbox: true,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/window-policy.ts:49:      contextIsolation: true,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/window-policy.ts:50:      nodeIntegration: false,
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/electron-window-manager.ts:432:      webPreferences.nodeIntegration = false
/private/var/tmp/ws/ffb55c2b/hvir/src/main/window/electron-window-manager.ts:433:      webPreferences.contextIsolation = true
```

</details>


---

<sub>20m 43s</sub>

### `bash`

**Check tsconfig includes, outDir, entitlements**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node -e 'for (const f of ["tsconfig.node.json","tsconfig.web.json"]) { const j=JSON.parse(require("fs").readFileSync(f,"utf8").replace(/\/\/.*$/mg,"")); console.log(f, JSON.stringify(j.include)) }' ; grep -nE "outDir|out/" electron.vite.config.ts | head; git ls-files build | grep -iE "entitlement" 

```
tsconfig.node.json ["src/main/**/*.ts","src/main/**/*.mts","src/preload/**/*.ts","src/workers/**/*.ts","src/shared/**/*.ts","scripts/**/*.mts","scripts/project-management/**/*.ts","test/**/*.ts","electron.vite.config.ts","vitest.config.ts"]
tsconfig.web.json ["src/renderer/**/*.ts","src/renderer/**/*.tsx","src/renderer/**/*.mts","src/shared/**/*.ts","test/**/*.test.tsx"]
build/entitlements.mac.inherit.plist
build/entitlements.mac.plist
<shellId: 61 completed with exit code 0>
```


---

<sub>20m 49s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime-policy.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/main/application-runtime-policy.ts

<details>
<summary>25 lines</summary>

```
import { join } from 'node:path'

import type { ApplicationBuildChannel } from '../shared'

export const SSH_ACCEPTANCE_USER_DATA_DIRECTORY = 'hvir-ssh-acceptance'

export interface ApplicationRuntime {
  readonly buildChannel: ApplicationBuildChannel
  readonly userDataRoot: string
}

interface ElectronApplicationPaths {
  getPath(name: 'appData' | 'userData'): string
  setPath(name: 'userData', path: string): void
}

/** Selects the one application-state authority before any storage owner is built. */
export function configureApplicationRuntime(
  paths: ElectronApplicationPaths,
  buildChannel: ApplicationBuildChannel,
  prepareUserDataRoot: (path: string) => void,
): ApplicationRuntime {
  if (buildChannel !== 'ssh-acceptance') {
    return { buildChannel, userDataRoot: paths.getPath('userData') }
  }
  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
  prepareUserDataRoot(userDataRoot)
  paths.setPath('userData', userDataRoot)
  return { buildChannel, userDataRoot }
}
```

</details>


---

<sub>20m 54s</sub>

### Copilot

Confirmed: only the `ssh-acceptance` channel gets a separate directory, and dev builds use the default `userData` path. I'll fix the typecheck row and the first-launch wording.

---

<sub>20m 56s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>20m 56s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>21m 5s</sub>

### `bash`

**Check temp directory is writable**

$ echo "TMPDIR=${TMPDIR:-<unset>}"; ls -d "${TMPDIR:-/tmp}" && touch "${TMPDIR:-/tmp}/hvir-readme-probe" && echo writable && rm "${TMPDIR:-/tmp}/hvir-readme-probe"

```
TMPDIR=/private/var/tmp/ws/ffb55c2b/home/tmp
/private/var/tmp/ws/ffb55c2b/home/tmp
writable
<shellId: 62 completed with exit code 0>
```


---

<sub>21m 20s</sub>

### `create`

**create a new file at /private/var/tmp/ws/ffb55c2b/home/tmp/validate-readme.mjs.**

/private/var/tmp/ws/ffb55c2b/home/tmp/validate-readme.mjs

```
Created file /private/var/tmp/ws/ffb55c2b/home/tmp/validate-readme.mjs with 3873 characters
```


---

<sub>21m 23s</sub>

### `bash`

**Validate README links, scripts, env vars**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node "$TMPDIR/validate-readme.mjs" "$PWD"

```
links checked: 25; anchors: 25; npm run refs: 25; env vars: HVIR_PROJECT_ROOT, HVIR_REPO_TOKEN, HVIR_SMOKE_SCENARIO, HVIR_SMOKE_REPEAT, HVIR_SMOKE_ARTIFACT_DIR, HVIR_SKIP_CAPACITY
README validation passed
<shellId: 63 completed with exit code 0>
```


---

<sub>21m 34s</sub>

### `grep`

**README|\*\.md|\.md['"]**

"README|\*\.md|\.md['"]" (test, scripts, .github, electron-builder.yml, .prettierignore, eslint.config.mjs)

<details>
<summary>50 matches</summary>

```
[grep content: 299 matches across 59 file(s) under /private/var/tmp/ws/ffb55c2b/hvir]

scripts/check-adrs.mjs (4 match(es)):
  10: const designPath = join(root, 'docs', 'design.md')
  26:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
  123:     else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  161:       targetPath.endsWith('.md') &&
.prettierignore:8: *.md
scripts/run-macos-package-smoke.sh:418: notices="$application/Contents/Resources/THIRD_PARTY_NOTICES.md"
scripts/architecture-policy.mts:37:   '.md',
scripts/architecture-wiring.mts:37:     path === 'docs/architecture-budgets.md' ||

scripts/assemble-native-release.mjs (3 match(es)):
  13: const noticesSource = resolve(repositoryRoot, 'THIRD_PARTY_NOTICES.md')
  80:   const noticesName = 'THIRD_PARTY_NOTICES.md'
  152:     'THIRD_PARTY_NOTICES.md',

scripts/ghostty-web-update/candidate-bundle.mts (3 match(es)):
  29:   'THIRD_PARTY_NOTICES.md': 512 * 1024,
  158:     'THIRD_PARTY_NOTICES.md': updateThirdPartyNotice(
  159:       base['THIRD_PARTY_NOTICES.md'],

scripts/ghostty-web-update/repository-candidate.mts (5 match(es)):
  13:   'THIRD_PARTY_NOTICES.md',
  40:       this.#read('THIRD_PARTY_NOTICES.md'),
  101:         this.#read('THIRD_PARTY_NOTICES.md'),
  116:     const noticesPath = join(this.#root, 'THIRD_PARTY_NOTICES.md')
  139:       this.#assertFile('THIRD_PARTY_NOTICES.md', expectedNotices),

test/terminal-file-link.test.ts (13 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',
  158:   '/tmp-lookalike/plan.md',
  161:   '/scratch/plan.md',
  165: it.each(['file:///scratch/report.md', 'file://localhost/scratch/report.md'])(
  169:       hostPath(root.hostId, '/scratch/report.md'),
  173: it.each(['file://other/scratch/report.md', 'file://127.0.0.1/scratch/report.md'])(
  186:     detectTerminalFileLinks('file://other/scratch/report.md')
  188:     activateTerminalFileTarget('file://other/scratch/report.md', root, open)
test/use-document-review-workspace.test.tsx:23: const documentA = localPath('/a/review.md')

test/diff-view-refresh.test.tsx (6 match(es)):
  47:     const path = localPath('/repo/design.md')
  85:     const path = localPath('/repo/design.md')
  116:       hostPath(asHostId('ssh-context'), '/repo/design.md'),
  120:     ['diff base', localPath('/repo/design.md'), 'branch-point' as const, undefined],
  121:     ['revision', localPath('/repo/design.md'), 'head' as const, 'remote-revision'],
  125:       const local = localPath('/repo/design.md')

test/external-file-move-renderer.test.tsx (2 match(es)):
  24:       { name: 'existing.md', type: 'file' },
  273:     (row) => row.dataset.filePath === '/repo/existing.md',

[omitted 258 match(es) in 47 file(s); see original output for full results]
```

</details>


---

<sub>21m 39s</sub>

### Copilot

`.prettierignore` excludes `*.md`. `architecture-policy.mts` also lists `.md`, so I'll check whether adding a Markdown file affects the architecture report.

---

<sub>21m 39s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-policy.mts.**

/private/var/tmp/ws/ffb55c2b/hvir/scripts/architecture-policy.mts (lines 20-60)

<details>
<summary>40 lines</summary>

```
  '.mts',
  '.cts',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.css',
  '.sh',
  '.bash',
  '.zsh',
  '.c',
  '.h',
]
const DATA_EXTENSIONS = new Set([
  '.json',
  '.yaml',
  '.yml',
  '.md',
  '.txt',
  '.html',
  '.svg',
  '.png',
  '.gif',
  '.icns',
  '.plist',
  '.toml',
  '.csv',
  '.gyp',
  '.apparmor',
  '.dev',
  '.gitignore',
  '.prettierignore',
])
const DISPOSABLE_ROLES: Readonly<Record<string, string>> = {
  node_modules: 'installed dependencies',
  '.git': 'Git internals',
  out: 'disposable build output',
  dist: 'disposable distribution output',
  coverage: 'disposable test coverage',
}
```

</details>


---

<sub>21m 43s</sub>

### Copilot

`.md` counts as a data file, so it doesn't count toward code budgets. I'll re-run the architecture report and seam check to confirm README.md doesn't trip anything.

---

<sub>21m 50s</sub>

### `bash`

**Run architecture report and seam check**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && npm run --silent architecture:report 2>&1 | tail -6; echo "arch exit=${PIPESTATUS[0]}"; npm run --silent check-seams 2>&1 | tail -2; echo "seams exit=${PIPESTATUS[0]}"

<details>
<summary>10 lines</summary>

```
loading: src/renderer/src/viewer/RenderedView.tsx:47 worker process-entry -> src/renderer/src/viewer/json.worker.ts
loading: src/renderer/src/viewer/RenderedView.tsx:54 worker process-entry -> src/renderer/src/viewer/csv.worker.ts
loading: src/renderer/src/viewer/highlight-worker.ts:4 worker process-entry -> src/renderer/src/viewer/highlight.worker.ts
loading: src/renderer/src/viewer/markdown-client.ts:16 worker process-entry -> src/renderer/src/viewer/markdown.worker.ts
loading: test/local-host.test.ts:173 discovery discovery
0 dependency violation(s)
arch exit=0

seam check passed
seams exit=0
<shellId: 64 completed with exit code 0>
```

</details>


---

<sub>21m 57s</sub>

### Copilot

Both pass. One formatting issue: the indented "Open files reload…" paragraph turns the whole Files list into a loose list with extra spacing, so I'll fold it into the Viewer line.

---

<sub>22m 0s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>22m 5s</sub>

### Copilot

I'll re-run the validator after the edit and check the rendered structure: list tightness, tables, and code fences.

---

<sub>22m 7s</sub>

### `bash`

**Revalidate and inspect rendered structure**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node "$TMPDIR/validate-readme.mjs" "$PWD" && node -e '
const MarkdownIt=require("markdown-it"); const md=new MarkdownIt({html:true});
const html=md.render(require("fs").readFileSync("README.md","utf8"));
const count=(re)=>(html.match(re)||[]).length;
console.log("tables:",count(/<table>/g),"code blocks:",count(/<pre>/g),"h2:",count(/<h2>/g),"h3:",count(/<h3>/g),"loose list paragraphs:",count(/<li>\s*<p>/g));
' && wc -l README.md

```
links checked: 25; anchors: 25; npm run refs: 25; env vars: HVIR_PROJECT_ROOT, HVIR_REPO_TOKEN, HVIR_SMOKE_SCENARIO, HVIR_SMOKE_REPEAT, HVIR_SMOKE_ARTIFACT_DIR, HVIR_SKIP_CAPACITY
README validation passed
tables: 7 code blocks: 8 h2: 8 h3: 17 loose list paragraphs: 0
     285 README.md
<shellId: 65 completed with exit code 0>
```


---

<sub>22m 19s</sub>

### Copilot

Structure looks right: 7 tables, 8 code blocks, and no loose lists. The Keybindings sentence assumes users can find action names, so I'll check what the Keybindings settings page shows.

---

<sub>22m 19s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx

<details>
<summary>49 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'

export function KeybindingsSettings({
  draft,
  validation,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  const keybindingError = validation?.fieldId === 'settings-keybindings-json'
  const describedBy = keybindingError
    ? 'settings-keybindings-help settings-keybindings-error'
    : 'settings-keybindings-help'
  return (
    <SettingsSection
      section="keybindings"
      title="Keybindings"
      description="Override workbench commands with explicit, portable keyboard strokes."
    >
      <div className="settings-section-scroll settings-fields">
        <label className="settings-keybindings" htmlFor="settings-keybindings-json">
          <span>Keybinding overrides (JSON)</span>
          <textarea
            id="settings-keybindings-json"
            spellCheck={false}
            value={draft.keybindingsJson}
            aria-invalid={keybindingError}
            aria-describedby={describedBy}
            onChange={(event) => onChange('keybindingsJson', event.currentTarget.value)}
          />
          <small id="settings-keybindings-help">
            Use Mod for Command on macOS and Ctrl on Linux. Changes apply after Save.
          </small>
          {keybindingError ? (
            <small id="settings-keybindings-error" className="dialog-error">
              {validation.message}
            </small>
          ) : null}
        </label>
      </div>
    </SettingsSection>
  )
}
```

</details>


---

<sub>22m 25s</sub>

### Copilot

The textarea edits `draft.keybindingsJson`. I'll confirm it starts with the full binding map, so users can see every action name.

---

<sub>22m 25s</sub>

### `grep`

**keybindingsJson:**

"keybindingsJson:" in **/*.ts (src/renderer/src/settings)

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings-draft.ts:31:  readonly keybindingsJson: string
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/settings/settings-draft.ts:69:    keybindingsJson: keybindingOverridesJson(settings.keybindings),
```


---

<sub>22m 29s</sub>

### Copilot

It does, so users see every action there. I'll update the Keybindings sentence and make the intro sentence easier to read.

---

<sub>22m 32s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>22m 32s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/ffb55c2b/hvir/README.md.**

/private/var/tmp/ws/ffb55c2b/hvir/README.md

```
File /private/var/tmp/ws/ffb55c2b/hvir/README.md updated with changes.
```


---

<sub>22m 35s</sub>

### Copilot

I'll double-check what `toggleTerminalFocus` (`Mod+Shift+J`) actually does in the command router.

---

<sub>22m 35s</sub>

### `view`

**view the file at /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/workbench-command-router.ts.**

/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/workbench-command-router.ts

<details>
<summary>63 lines</summary>

```
import type { WebPaneCommandAction } from '../../../shared'

export interface WorkbenchCommandPorts {
  readonly closeWebPane: (paneId: string) => void
  readonly escapeWebPaneFocus: () => void
  readonly canUseViewerCommands: () => boolean
  readonly cycleViewMode: () => void
  readonly findFile: () => void
  readonly findInFile: () => void
  readonly findInTerminal: () => boolean
  readonly goToLine: () => void
  readonly toggleTerminalFocus: () => void
  readonly focusTerminal: () => void
  readonly focusViewer: () => void
  readonly focusTree: () => void
  readonly switchWorkspace: (direction: -1 | 1) => void
}

export function dispatchWorkbenchCommand(
  action: WebPaneCommandAction,
  paneId: string | undefined,
  ports: WorkbenchCommandPorts,
  context: 'terminal' | 'web-pane' | 'workbench' = 'workbench',
): boolean {
  switch (action) {
    case 'closeWebPane':
      if (paneId) ports.closeWebPane(paneId)
      return true
    case 'escapeWebPaneFocus':
      ports.escapeWebPaneFocus()
      return true
    case 'cycleViewMode':
      if (ports.canUseViewerCommands()) ports.cycleViewMode()
      return true
    case 'findInFile':
      if (ports.canUseViewerCommands()) ports.findInFile()
      return true
    case 'findInTerminal':
      return context === 'terminal' && ports.findInTerminal()
    case 'findFile':
      ports.findFile()
      return true
    case 'goToLine':
      if (ports.canUseViewerCommands()) ports.goToLine()
      return true
    case 'toggleTerminalFocus':
      ports.toggleTerminalFocus()
      return true
    case 'focusTerminal':
      ports.focusTerminal()
      return true
    case 'focusViewer':
      ports.focusViewer()
      return true
    case 'focusTree':
      ports.focusTree()
      return true
    case 'nextWorkspace':
      ports.switchWorkspace(1)
      return true
    case 'previousWorkspace':
      ports.switchWorkspace(-1)
      return true
  }
}
```

</details>


---

<sub>22m 38s</sub>

### `grep`

**toggleTerminalFocus**

"toggleTerminalFocus" (src/renderer/src/App.tsx)

<details>
<summary>28 matches</summary>

```
[grep content: 2 matches across 1 file(s) under /private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src]

App.tsx (2 match(es)):
  183:     toggleTerminalFocus,
  184-     restoreViewer,
  185-     treeCollapsed,
  186-     setTreeCollapsed,
  187-     setTreeWidth,
  188-     setTerminalHeight,
  189-     setViewerPrimaryWidth,
  190-     resetViewerPrimaryWidth,
  191-     focusTerminal: showTerminal,
  192-   } = layout
  193-   const git = useGitWorkspace({
  194-     root,
  195-     hasDirtyViewerTabs: () => tabs.some((tab) => tab.dirty),
  252:     toggleTerminalFocus,
  253-     focusTerminal: layout.focusTerminal,
  254-     focusViewer: () => layout.focusViewer(getActivePane()),
  255-     focusTree: layout.focusTree,
  256-     switchWorkspace: (direction) => {
  257-       setDestination('workspace')
  258-       workspaceSwitchRef.current(direction)
  259-     },
  260-   })
  261-   const revealSourceTerminal = async (view: WebViewState): Promise<void> => {
  262-     const target = projectState?.projects
  263-       .flatMap((project) =>
  264-         project.workspaces.map((workspace) => ({ project, workspace })),
```

</details>


---

<sub>22m 41s</sub>

### `grep`

**const toggleTerminalFocus|toggleTerminalFocus = |function toggleTerminalFocus**

"const toggleTerminalFocus|toggleTerminalFocus = |function toggleTerminalFocus" in **/*layout*.ts (src/renderer/src)

<details>
<summary>15 matches</summary>

```
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts:215:  const toggleTerminalFocus = useCallback(
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-216-    () => setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : 'maximized')),
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-217-    [setTerminalMode],
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-218-  )
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-219-  const focusTerminal = useCallback((): void => {
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-220-    setTerminalMode((mode) => (mode === 'collapsed' ? 'restored' : mode))
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-221-    focusActiveTerminalAfterLayout()
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-222-  }, [setTerminalMode])
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-223-  const focusViewer = useCallback(
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-224-    (pane: ViewerPaneId): void => {
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-225-      setTerminalMode((mode) => (mode === 'maximized' ? 'restored' : mode))
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-226-      requestAnimationFrame(() =>
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-227-        document.querySelector<HTMLElement>(`[data-viewer-pane="${pane}"]`)?.focus(),
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-228-      )
/private/var/tmp/ws/ffb55c2b/hvir/src/renderer/src/workbench/use-workbench-layout.ts-229-    },
```

</details>


---

<sub>22m 45s</sub>

### Copilot

Confirmed: `Mod+Shift+J` toggles the terminal panel between maximized and restored. I'll run the validator one last time, delete the temp script, and check that README.md is the only change.

---

<sub>22m 46s</sub>

### `bash`

**Final validation, cleanup, and status check**

$ cd /private/var/tmp/ws/ffb55c2b/hvir && node "$TMPDIR/validate-readme.mjs" "$PWD" && rm -f "$TMPDIR/validate-readme.mjs" && git status --short && git --no-pager diff --stat --no-index /dev/null README.md | tail -1

```
links checked: 25; anchors: 25; npm run refs: 25; env vars: HVIR_PROJECT_ROOT, HVIR_REPO_TOKEN, HVIR_SMOKE_SCENARIO, HVIR_SMOKE_REPEAT, HVIR_SMOKE_ARTIFACT_DIR, HVIR_SKIP_CAPACITY
README validation passed
?? README.md
 1 file changed, 285 insertions(+)
<shellId: 66 completed with exit code 0>
```


---

<sub>22m 54s</sub>

### Copilot

I've created `README.md` at the repo root; it's untracked and not committed. It covers features, a table of supported agents, installing and uninstalling, usage (the `hvir` command, shortcuts, settings, where data is stored), SSH projects, development setup, tests and smoke tests, project layout and architecture rules, releases, and the license.

A temporary script confirmed that every local link and heading anchor resolves, every `npm run` command exists in `package.json`, and each environment variable and smoke scenario name appears in the code.

Things to know:
- **Installer URL unverified:** the sandbox blocked github.com, so I couldn't test the `releases/latest` `install.sh` link.
- **`npm run verify` fails in this checkout:** `docs/` is missing here, and its `architecture:check` step needs `HVIR_REPO_TOKEN`. The README says so and points to the offline `architecture:report`.
- **No links to missing files:** `CONTRIBUTING.md`, `AGENTS.md` and `docs/` aren't in this checkout, so there's no Contributing section.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
