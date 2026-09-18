# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `23f7c8d0-46ca-4b59-b52d-ccd576bcd56e`  
> - **Started:** 9/17/2026, 10:11:05 PM  
> - **Duration:** 35s  
> - **Exported:** 9/17/2026, 10:11:41 PM  

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

I’ll inspect the project structure and existing metadata, then write a focused README that matches the codebase.

---

<sub>8s</sub>

### `bash`

**Inspect repository files and status**

$ git status --short && printf '\n--- root ---\n' && find . -maxdepth 2 -type f -not -path './.git/*' | sort | sed -n '1,160p'

<details>
<summary>162 lines</summary>

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
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### `glob`

**{package.json,pyproject.toml,go.mod,Cargo.toml,composer.json,Makefile,docker-compose.yml,README*}**

"{package.json,pyproject.toml,go.mod,Cargo.toml,composer.json,Makefile,docker-compose.yml,README*}"

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
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/package-lock.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>203 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/package-lock.json`. Lines 1 to 200 (at least 200 lines total): 
```
{
  "name": "hvir",
  "version": "0.2.3",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "hvir",
      "version": "0.2.3",
      "hasInstallScript": true,
      "license": "MIT",
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
      "engines": {
        "node": ">=24"
      },
      "optionalDependencies": {
        "@hvir/rename-noreplace": "file:packages/rename-noreplace"
      }
    },
    "node_modules/@antfu/install-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@antfu/install-pkg/-/install-pkg-1.1.0.tgz",
      "integrity": "sha512-MGQsmw10ZyI+EJo45CdSER4zEb+p31LpDAFp2Z3gkSd1yqVZGi0Ebx++YTEMonJy4oChEMLsxZ64j8FH6sSqtQ==",
      "license": "MIT",
      "dependencies": {
        "package-manager-detector": "^1.3.0",
        "tinyexec": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.7.tgz",
      "integrity": "sha512-DkXD5OJQaAQIdZ1bt3UZdEnHAn9Imd3IVBdX03UFe+ony9Ojw5pzr9YVKGDY1jt+Gcn/FnGkNf8r+Vj5NOJWtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-8.0.0.tgz",
      "integrity": "sha512-NSpMkMsvvZqzThJ0p1B02cbtA2ObEyfBvq950bmNkyxsxvcxwhvvCB036rKhlEnuBBo30bOrk13u3FzlKSoRrw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^8.0.0"
      },
      "engines": {
        "node": "^22.18.0 || >=24.11.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure/node_modules/@babel/helper-string-parser": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-8.0.0.tgz",
      "integrity": "sha512-6mJgmFFFIIO82vvoLt9XtRC7/TkzXfts1t/SpRX4IHSzMgqoPYCWesVu1udUPUWioAE/2fcG6WuI8zrkE1gwrg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^22.18.0 || >=24.11.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure/node_modules/@babel/helper-validator-identifier": {
      "version": "8.0.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-8.0.4.tgz",
      "integrity": "sha512-4wFaiLd0bVo4cIoTXI3zKI038NIWE/cr3jvBjejOVYVxV/m8Ltav1USiGzG1fmS5J2RhgEOgXNNK46cRPnRsrg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^22.18.0 || >=24.11.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure/node_modules/@babel/types": {
      "version": "8.0.4",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-8.0.4.tgz",
      "integrity": "sha512-eY+Yn3dCqTGmyiq2QRU66lA5FL8lqqqvecHt0fF3uHONIa7ToYsaCiWV8lOKqAs0Rb2SjixiKFROngnulPtt2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^8.0.0",
        "@babel/helper-validator-identifier": "^8.0.4"
      },
      "engines": {
        "node": "^22.18.0 || >=24.11.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
```
````

</details>


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
  /private/var/tmp/ws/9f68e1cc/hvir/electron.vite.config.ts
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
  /private/var/tmp/ws/9f68e1cc/hvir/vitest.config.ts
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
  /private/var/tmp/ws/9f68e1cc/hvir/stryker.config.json
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
  /private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs
```


### `file_search`

****/tsconfig.*.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/tsconfig.*.json"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/9f68e1cc/hvir/tsconfig.node.json
  /private/var/tmp/ws/9f68e1cc/hvir/tsconfig.base.json
  /private/var/tmp/ws/9f68e1cc/hvir/tsconfig.web.json
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
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/run-linux-package-smoke.sh
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/render-native-installer.d.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/validate-release-pr.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/phase8-gauntlet.sh
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/run-smoke.sh
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/run-smoke-interruption.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/run-macos-package-smoke.sh
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/render-native-installer.mjs
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/assemble-native-release.mjs
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/native-installer.template.sh
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/installed-harness-dialog-probe.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/capture-contributor-usage.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/check-terminal-runtime.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/ghostty-web-update/policy.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/ghostty-web-update/github-release-source.mts
  /private/var/tmp/ws/9f68e1cc/hvir/scripts/ghostty-web-update/coordinator.mts
```

</details>


### `file_search`

****/test/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/test/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/9f68e1cc/hvir/test/real-host-ssh-contract.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/project-entry-deletion.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/project-folder-picker-coordinator.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/harness-launch-menu.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/html-sandbox.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/use-document-review-workspace.test.tsx
  /private/var/tmp/ws/9f68e1cc/hvir/test/pty-supervisor-late-completion.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/terminal-fit.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/ghostty-terminal-search-identity.test.tsx
  /private/var/tmp/ws/9f68e1cc/hvir/test/issue-context.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/development-performance-measure-budget.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/native-installer.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/git-workspace.test.tsx
  /private/var/tmp/ws/9f68e1cc/hvir/test/ghostty-web-update-policy.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/terminal-attention-controller.test.tsx
  /private/var/tmp/ws/9f68e1cc/hvir/test/lifecycle-fixtures.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/pty-session-resources.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/diff-view-refresh.test.tsx
  /private/var/tmp/ws/9f68e1cc/hvir/test/claude-session-recovery.test.ts
  /private/var/tmp/ws/9f68e1cc/hvir/test/terminal-workspace-model.test.ts
```

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/electron.vite.config.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>140 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/electron.vite.config.ts`. Lines 1 to 143 (143 lines total): 
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
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/vitest.config.ts",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>15 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/vitest.config.ts`. Lines 1 to 14 (14 lines total): 
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
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/stryker.config.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>24 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/stryker.config.json`. Lines 1 to 22 (22 lines total): 
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
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>188 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs`. Lines 1 to 200 (at least 200 lines total): 
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


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/tsconfig.node.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>23 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/tsconfig.node.json`. Lines 1 to 21 (21 lines total): 
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

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/tsconfig.web.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>19 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/tsconfig.web.json`. Lines 1 to 17 (17 lines total): 
```
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

```
````

</details>


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/build/electron-builder.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/9f68e1cc/hvir/build/electron-builder.yml' does not exist
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/build/electron-builder.ssh-acceptance.yml",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File '/private/var/tmp/ws/9f68e1cc/hvir/build/electron-builder.ssh-acceptance.yml' does not exist
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs",
  "startLine": 200,
  "endLine": 400
}
```

</details>

<details>
<summary>200 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs`. Lines 200 to 400 (at least 400 lines total): 
```
    ignores: ['src/main/pty/pty-supervisor.ts'],
    rules: dependencyDirectionRules(
      HARNESS_IMPLEMENTATION_IMPORT_BAN +
        '|(^|/)pty-supervisor(\\.[cm]?[jt]sx?)?$|(^|/)pty-(launch-admission|session-lifetime|session-observation|stream-attachment)(\\.[cm]?[jt]sx?)?$',
      'PTY internal owners import leaf contracts, never the supervisor, sibling owners, or concrete harness implementations.',
    ),
  },

  // Project state and workflows consume the host contract, never concrete host owners.
  {
    files: [
      'src/main/project-registry.ts',
      'src/main/project-coordinator.ts',
      'src/main/project-host/project-host.ts',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            ...HOST_PRIMITIVE_BANS,
            IPC_RENDERER_BAN,
            {
              name: './project-host',
              message:
                'Import the ProjectHost contract directly, not concrete catalog exports.',
            },
          ],
          patterns: [
            {
              group: [
                '**/project-registry',
                '**/project-coordinator',
                '**/project-host/index',
                '**/project-host/ssh-*',
                '**/project-host/renderer-ssh-prompter',
                '**/project-host/project-host-catalog',
                '**/project-host/local-host',
                './ssh-*',
                './renderer-ssh-prompter',
                './project-host-catalog',
                './local-host',
              ],
              message:
                'Project state and workflows depend only on the ProjectHost contract and consumer-owned ports.',
            },
          ],
        },
      ],
    },
  },
  // Concrete catalogs implement host capabilities without project persistence/workflows.
  // The ProjectHost contract cannot depend on any concrete owner it describes.
  {
    files: ['src/main/project-host/project-host-catalog.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [...HOST_PRIMITIVE_BANS, IPC_RENDERER_BAN],
          patterns: [
            {
              group: ['**/project-registry', '**/project-coordinator'],
              message:
                'Host capabilities cannot depend on project persistence or project workflows.',
            },
          ],
        },
      ],
    },
  },

  // Renderer: React-specific rules.
  {
    files: ['src/renderer/**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...dependencyDirectionRules('(^|/)main/harness(/|$)'),
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // Viewer presentation and effects depend inward, including erased imports.
  {
    files: ['src/renderer/src/viewer/**/*.{ts,tsx}'],
    ignores: ['src/renderer/src/viewer/FileViewer.tsx'],
    rules: dependencyDirectionRules(
      '(^|/)FileViewer(\\.[cm]?[jt]sx?)?$',
      'Viewer presentation and effect owners cannot depend on FileViewer orchestration or harness implementation.',
      true,
    ),
  },
  {
    files: [
      'src/renderer/src/viewer/highlight-protocol.ts',
      'src/renderer/src/viewer/viewer-workload-policy.ts',
      'src/renderer/src/viewer/source-coordinate.ts',
      'src/renderer/src/viewer/viewer-position.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(main|preload|workers)(/|$)|' + VIEWER_PRESENTATION_IMPORT_BAN,
      'Pure viewer policy and highlight contracts cannot import presentation, effect, or process implementations.',
      true,
    ),
  },
  {
    files: ['src/renderer/src/viewer/*.worker.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(main|preload)(/|$)|' + VIEWER_PRESENTATION_IMPORT_BAN,
      'Viewer workers consume policy and protocols, never renderer components or their effects.',
      true,
    ),
  },

  // Contracts extracted from concrete consumers remain inward across all import forms.
  {
    files: ['src/main/diagnostics/diagnostic-journal.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(diagnostic-intake|diagnostic-report[^/]*|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'The journal consumes closed evidence contracts rather than report preparation or runtime consumers.',
    ),
  },
  {
    files: ['src/main/diagnostics/diagnostic-evidence.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(diagnostic-intake|diagnostic-journal|diagnostic-report[^/]*|runtime-diagnostics|authority-router|deps)(\\.[cm]?[jt]sx?)?$',
      'Closed diagnostic evidence and writer contracts cannot depend on their concrete consumers.',
    ),
  },
  {
    files: [
      'src/main/diagnostics/diagnostic-intake.ts',
      'src/main/diagnostics/diagnostic-report-evidence.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(diagnostic-intake|diagnostic-journal|diagnostic-report-coordinator|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'Diagnostic admission and evidence policy consume closed evidence contracts, never concrete consumers.',
    ),
  },
  {
    files: ['src/main/ipc/authority-router.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(deps|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'IPC authority consumes its own narrow port, never the feature dependency aggregate or diagnostic runtime.',
    ),
  },
  {
    files: [
      'src/main/ipc/authority-port.ts',
      'src/main/diagnostics/runtime-diagnostics.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(authority-router|deps|runtime-diagnostics)(\\.[cm]?[jt]sx?)?$',
      'IPC diagnostic consumers use the closed authority port rather than the concrete router.',
    ),
  },
  {
    files: [
      'src/renderer/src/viewer/viewer-workspace-state.ts',
      'src/renderer/src/viewer/external-document-tabs.ts',
      'src/renderer/src/viewer/viewer-read-policy.ts',
      'src/renderer/src/viewer/viewer-path-rebind.ts',
      'src/renderer/src/viewer/viewer-path-removal.ts',
      'src/renderer/src/viewer/viewer-workspace-selectors.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)(main|preload|workers)(/|$)|(^|/)viewer-workspace-model(\\.[cm]?[jt]sx?)?$|' +
        VIEWER_PRESENTATION_IMPORT_BAN,
      'Viewer state and policy depend inward, never on the workspace reducer, presentation, or effects.',
      true,
    ),
  },
  {
    files: [
      'src/renderer/src/tree/use-file-manager-reveal.ts',
      'src/renderer/src/tree/use-path-copy-action.ts',
    ],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)use-file-create-actions(\\.[cm]?[jt]sx?)?$',
      'Tree action contracts and effects cannot depend on creation orchestration.',
    ),
  },
  {
    files: ['src/renderer/src/tree/file-action-menu.ts'],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)(use-[^/]+|DirectoryTree)(\\.[cm]?[jt]sx?)?$|^react(/|$)',
      'The tree action request contract cannot depend on its concrete hooks or views.',
    ),
  },
  {
    files: ['src/renderer/src/document-review/use-document-review-delivery.ts'],
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)use-document-review-interaction(\\.[cm]?[jt]sx?)?$',
      'Review workspace contracts and delivery cannot depend on interaction orchestration.',
    ),
  },
  {
    files: ['src/renderer/src/document-review/document-review-workspace.ts'],
    rules: dependencyDirectionRules(
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs",
  "startLine": 400,
  "endLine": 600
}
```

</details>

<details>
<summary>96 lines</summary>

````
File: `/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs`. Lines 400 to 500 (500 lines total): 
```
    rules: dependencyDirectionRules(
      '(^|/)main/harness(/|$)|(^|/)(use-[^/]+|document-review-workspace-controller)(\\.[cm]?[jt]sx?)?$|^react(/|$)',
      'Review workspace contracts cannot depend on effect hooks or the concrete workspace controller.',
    ),
  },
  {
    files: ['scripts/project-management/project-token-fields.ts'],
    rules: dependencyDirectionRules(
      '(^|/)canonical-project(\\.[cm]?[jt]sx?)?$',
      'Canonical Project item contracts and field adapters cannot depend on the concrete Project client.',
    ),
  },
  {
    files: ['scripts/project-management/canonical-project-item.ts'],
    rules: dependencyDirectionRules(
      '(^|/)(canonical-project|project-token-fields)(\\.[cm]?[jt]sx?)?$',
      'The canonical Project item contract cannot depend on its concrete client or field adapter.',
    ),
  },

  // Seam exemption: LocalHost owns the host primitives (but still not ipcRenderer).
  {
    files: ['src/main/project-host/local-host.ts'],
    rules: {
      'no-restricted-imports': ['error', { paths: [IPC_RENDERER_BAN] }],
      'no-restricted-syntax': ['error', SPAWN_PTY_BAN],
    },
  },

  // Seam exemption: the preload bridge owns ipcRenderer (but still not host primitives).
  {
    files: ['src/preload/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', { paths: [...HOST_PRIMITIVE_BANS] }],
    },
  },

  // Seam exemption: only the supervisor may call host.spawnPty().
  {
    files: ['src/main/pty/pty-supervisor.ts'],
    rules: {
      'no-restricted-syntax': ['error', ...DYNAMIC_HOST_IMPORT_BANS],
    },
  },

  // Tests may reach for node builtins directly to arrange fixtures — they are
  // not production seams.
  {
    files: ['test/**/*.ts'],
    rules: {
      'no-restricted-imports': 'off',
      'no-restricted-syntax': ['error', SPAWN_PTY_BAN],
    },
  },

  // Contributor process launchers may use Node host primitives directly; the
  // ProjectHost boundary governs application source under src/.
  {
    files: [
      'scripts/run-smoke-scenarios.mts',
      'scripts/architecture-hotspots.mts',
      'scripts/architecture-policy.mts',
      'scripts/architecture-inventory.mts',
      'scripts/architecture-authorization.mts',
      'scripts/architecture-github.mts',
      'scripts/architecture-wiring.mts',
      'scripts/architecture-module-resolution.mts',
      'scripts/architecture-module-graph.mts',
      'scripts/run-smoke-interruption.mts',
      'scripts/smoke-failure-artifact.mts',
      'scripts/inspect-packaged-runtime.mts',
      'scripts/installed-startup-probe.mts',
      'scripts/real-host-ssh-contract.mts',
      'scripts/run-real-host-ssh-acceptance.mts',
      'scripts/require-release-ci-evidence.mts',
      'scripts/prepare-release-linux-package.mts',
      'scripts/validate-release-pr.mts',
      'scripts/generate-terminal-theme-catalog.mts',
      'scripts/check-terminal-runtime.mts',
      'scripts/agent-work-checkpoint-store.mts',
      'scripts/ghostty-web-update/candidate-bundle.mts',
      'scripts/ghostty-web-update/cli.mts',
      'scripts/ghostty-web-update/github-delivery.mts',
      'scripts/ghostty-web-update/github-release-source.mts',
      'scripts/ghostty-web-update/repository-candidate.mts',
      'scripts/project-management/native-issue-worktrees.ts',
    ],
    rules: {
      'no-restricted-imports': 'off',
    },
  },

  // Config / plain-JS files: no type-aware linting.
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  prettier,
)

```
````

</details>


### `file_search`

****/tsconfig.base.json**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/tsconfig.base.json"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/9f68e1cc/hvir/tsconfig.base.json
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

****/CHANGELOG.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/CHANGELOG.md"
}
```

</details>

```
No files found matching pattern: **/CHANGELOG.md
```


### `file_search`

****/CONTRIBUTING.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/CONTRIBUTING.md"
}
```

</details>

```
No files found matching pattern: **/CONTRIBUTING.md
```


### `file_search`

****/AGENTS.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/AGENTS.md"
}
```

</details>

```
No files found matching pattern: **/AGENTS.md
```


### `file_search`

****/ADR-*.md**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/ADR-*.md"
}
```

</details>

```
No files found matching pattern: **/ADR-*.md
```


### Copilot

\<final_answer>
/private/var/tmp/ws/9f68e1cc/hvir/package.json:1-128
/private/var/tmp/ws/9f68e1cc/hvir/package-lock.json:1-200
/private/var/tmp/ws/9f68e1cc/hvir/electron.vite.config.ts:1-143
/private/var/tmp/ws/9f68e1cc/hvir/vitest.config.ts:1-14
/private/var/tmp/ws/9f68e1cc/hvir/stryker.config.json:1-22
/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs:1-260
/private/var/tmp/ws/9f68e1cc/hvir/eslint.config.mjs:200-500
/private/var/tmp/ws/9f68e1cc/hvir/tsconfig.node.json:1-21
/private/var/tmp/ws/9f68e1cc/hvir/tsconfig.web.json:1-17
/private/var/tmp/ws/9f68e1cc/hvir/build/electron-builder.yml:1-200
/private/var/tmp/ws/9f68e1cc/hvir/build/electron-builder.ssh-acceptance.yml:1-200
\</final_answer>


---

<sub>10s</sub>

### Copilot

The repository is a Node 24 Electron desktop application with native terminal dependencies. I’m gathering its user-facing capabilities and supported packaging targets so the README is accurate rather than a generic scaffold.

---

<sub>12s</sub>

### `bash`

**Inspect source layout and project history**

$ printf '%s\n' '--- source directories ---' && find src -maxdepth 3 -type f 2>/dev/null | sort | sed -n '1,220p' && printf '%s\n' '--- documentation ---' && find . -maxdepth 3 -type f \( -iname '*.md' -o -iname '*.mdx' \) -not -path './node_modules/*' -not -path './.git/*' | sort && printf '%s\n' '--- recent commits ---' && git --no-pager log -5 --oneline

<details>
<summary>228 lines</summary>

```
--- source directories ---
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
--- documentation ---
./test/fixtures/rendered-mmd.md
./test/fixtures/rendered.md
./THIRD_PARTY_NOTICES.md
--- recent commits ---
aeaf26f Initial commit
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/package.json.**

/private/var/tmp/ws/9f68e1cc/hvir/package.json

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

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/electron-builder.yml.**

/private/var/tmp/ws/9f68e1cc/hvir/electron-builder.yml

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

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/LICENSE.**

/private/var/tmp/ws/9f68e1cc/hvir/LICENSE

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

<sub>12s</sub>

### `rg`

**app\.getName|desktopName|Hvir|HVIR|hvir**

"app\.getName|desktopName|Hvir|HVIR|hvir" in *.{ts,tsx} (src)

<details>
<summary>39 matches</summary>

```
[grep content: 903 matches across 198 file(s) under src]

preload/index.ts (7 match(es)):
  3:  * by lint). It exposes a single typed surface, `window.hvir`, validated against
  16:   type HvirApi,
  49: const api: HvirApi = {
  82:         new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
  89:       throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
  98:       throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
  110: contextBridge.exposeInMainWorld('hvir', api)
main/git/mutation-coordinator.ts:60: /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
main/navigation-policy.ts:1: /** Only these explicit external schemes may leave hvir for the OS browser. */

main/index.ts (10 match(es)):
  77:     app.isPackaged || __HVIR_SMOKE_BUILD__,
  177:           title: 'Choose a folder for hvir',
  212:       createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
  223:         'hvir-git',
  431:     return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  436:       if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
  439:           scenario: process.env['HVIR_SMOKE_SCENARIO'],
  462:       console.error('HVIR_STARTUP_FAIL', error)
  466:     if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
  469:     if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return
main/ipc/deps.ts:46: /** The application host's clipboard, narrowed to the one write hvir performs. */
main/application-runtime.ts:11:   __HVIR_BUILD_CHANNEL__,
main/diagnostics/diagnostic-report-storage.ts:12: const REPORT_PREFIX = 'hvir-diagnostic-report-'

main/window/electron-renderer-recovery.ts (4 match(es)):
  233:       title: 'hvir recovery failed',
  234:       message: 'hvir could not restore its window.',
  236:       buttons: ['Retry', 'Quit hvir'],
  260:     return 'hvir could not start the replacement workbench.'
main/web-pane/web-pane-route-registry.ts:15: export const WEB_PANE_PARTITION_PREFIX = 'hvir-web-pane-'

main/window/electron-window-manager.ts (4 match(es)):
  375:           title: 'hvir is not responding',
  376:           message: 'The hvir window stopped responding.',
  379:           buttons: ['Wait', 'Reload hvir'],
  439:         'hvir stopped this page from opening additional dialogs.'
main/web-pane/loopback-http-proxy.ts:67:     realm: `hvir-${randomBytes(12).toString('hex')}`,
main/harness/claude-session-artifact.ts:70:       ['-c', RESOLVE_CLAUDE_ROOTS_SCRIPT, 'hvir-claude-artifact-location'],

[omitted 870 match(es) in 186 file(s); see original output for full results]
```

</details>


---

<sub>14s</sub>

### Copilot

The app includes project browsing and editing, Git workflows, local and SSH workspaces, terminals, document review, and Claude/Codex session integration. I’m checking the main UI composition and native-runtime setup before documenting the workflow and contribution commands.

---

<sub>16s</sub>

### `bash`

**Inspect UI modules and CI workflows**

$ printf '%s\n' '--- renderer top-level ---' && find src/renderer -maxdepth 2 -type f 2>/dev/null | sort | sed -n '1,260p' && printf '%s\n' '--- automation workflows ---' && find .github -maxdepth 3 -type f -not -path './.git/*' -print | sort | xargs -r -n1 sh -c 'echo --- $0; sed -n "1,180p" "$0"'

<details>
<summary>25 lines</summary>

```
Output too large to read at once (39.7 KB). Saved to: /private/var/tmp/ws/9f68e1cc/home/tmp/1789697481932-copilot-tool-output-69813-945dffbe-33bf-4d6c-a9d3-253f46578774.txt
Consider using tools like rg (for searching), head/tail (for viewing start/end), view with view_range (for specific sections), or jq (for JSON) to examine portions of the output.

Preview (first 500 chars):
--- renderer top-level ---
src/renderer/index.html
src/renderer/src/App.tsx
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/hvir.d.ts
src/renderer/src/main.tsx
src/renderer/src/styles.css
src/renderer/src/theme-model.ts
src/renderer/src/theme.ts
src/renderer/src/themes.css
--- automation workflows ---
--- .github/dependabot.yml
version: 2

updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: daily
      time: '09:00'
      timezone: America/New_York
    open-pul
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/9f68e1cc/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/9f68e1cc/hvir/scripts/check-terminal-runtime.mts

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

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/9f68e1cc/hvir/electron.vite.config.ts

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

### Copilot

The README will describe development from source and macOS ARM64/Linux Debian packaging, without claiming an unrevealed release channel. I’m extracting the visible workbench features and checking the project’s actual setup hooks before writing it.

---

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/9f68e1cc/hvir/src/renderer/src/App.tsx (lines 1-260)

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

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/9f68e1cc/hvir/src/renderer/src/App.tsx (lines 261-540)

<details>
<summary>280 lines</summary>

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
```

</details>


---

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/.githooks/pre-push.**

/private/var/tmp/ws/9f68e1cc/hvir/.githooks/pre-push

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

<sub>19s</sub>

### `view`

**view the file at /private/var/tmp/ws/9f68e1cc/hvir/scripts/install-git-hooks.sh.**

/private/var/tmp/ws/9f68e1cc/hvir/scripts/install-git-hooks.sh

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

<sub>19s</sub>

### `rg`

**<h[1-6]|aria-label=|title=|label:|placeholder=|>[^<{]{3,}<**

"<h[1-6]|aria-label=|title=|label:|placeholder=|>[^<{]{3,}<" in *.tsx (src/renderer/src)

<details>
<summary>115 matches</summary>

```
[grep content: 545 matches across 71 file(s) under src/renderer/src]
ErrorBoundary.tsx:38:         <h1>hvir hit a rendering problem</h1>

git/GitHistoryView.tsx (10 match(es)):
  65:         <div className="git-empty">Loading history…</div>
  67:         <div className="git-empty">Not a Git repository</div>
  73:       {commits.length > 0 ? <HistoryCommitList {...props} /> : null}
  254:       aria-label="Commit history"
  270:         aria-label="Commit history"
  292:                   title={commit.subject || '(no subject)'}
  329:                   aria-label={`Open ${commit.shortHash} in full history`}
  330:                   title="Open in full history"
  380:       <span className="git-rail-history-state" title={item.title}>
  416:       title={entry.file.path.path}

git/GitBranchControls.tsx (6 match(es)):
  44:       <label htmlFor="git-branch-select">Branch</label>
  54:         title={branchError ?? branchBlockReason ?? 'Switch existing local branch'}
  96:             title={fetchBlockedReason ?? 'Refresh remote branch information'}
  104:             title={pullBlockReason ?? 'Fast-forward from the configured upstream'}
  116:         <small title={new Date(lastFetchedAt).toLocaleString()}>
  121:         <small>Switching…</small>

git/GitGraphView.tsx (21 match(es)):
  302:     <section className="git-graph-view" aria-label="Git history graph">
  305:           <strong>Git history</strong>
  330:               <span>Commit</span>
  333:                   <span>Author</span>
  334:                   <span>Date</span>
  335:                   <span>Hash</span>
  347:               aria-label="Repository commits"
  408:                           <time title={row.commit.authoredAt}>
  450:           title={ref}
  478:     <aside className="git-commit-inspector" aria-label="Commit details">
  480:         <strong>Commit details</strong>
  481:         <button type="button" aria-label="Close commit details" onClick={onClose}>
  490:             <h2>{detail.subject || '(no subject)'}</h2>
  494:                 <dt>Author</dt>
  498:                 <dt>Date</dt>
  502:                 <dt>Commit</dt>
  503:                 <dd title={detail.hash}>{detail.shortHash}</dd>
  557:         aria-label="Commit message"
  571:         <span className="git-commit-message-more" title="More commit message below">
  633:         aria-label="Files changed in commit"
  674:                 title={entry.file.path.path}

git/GitPanel.tsx (5 match(es)):
  28:   readonly onSwitchBranch: (branch: string) => Promise<void>
  29:   readonly onFetch: () => Promise<void>
  30:   readonly onPull: () => Promise<void>
  69:     <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
  103:           <div className="git-empty">Reconnect to inspect Git.</div>

git/GitChangesView.tsx (8 match(es)):
  36:         {loading ? <div className="git-empty">Loading changes…</div> : null}
  42:     content = <div className="git-empty">Not a Git repository</div>
  50:             title={group.title}
  78:           title={group.title}
  89:           title={changes.branchPointUnavailableReason}
  143:       <h3>
  230:               title={file.path.path}
  256:                   <span className="git-count-omitted" title="Line counts unavailable">

diagnostics/DiagnosticReportDialog.tsx (13 match(es)):
  173:       actions={[{ label: 'Close', kind: 'cancel', onSelect: close }]}
  177:         <h2 id="diagnostic-report-title">Review diagnostic report</h2>
  178:         <p>Local, bounded, and never sent to a harness automatically.</p>
  186:             <h3 id="diagnostic-report-structured-title">Exact structured fields</h3>
  188:               <dt>Current lifetime</dt>
  192:               <dt>Preceding lifetime</dt>
  205:             <h3 id="diagnostic-report-image-title">Optional screenshot</h3>
  218:                   <dt>Media type</dt>
  220:                   <dt>Dimensions</dt>
  224:                   <dt>Bytes</dt>
  226:                   <dt>SHA-256</dt>
  230:                   <dt>Masked surfaces</dt>
  235:               <p>No screenshot is captured by default.</p>

dashboards/WebPane.tsx (20 match(es)):
  90:           aria-label="Back"
  91:           title="Back"
  98:           aria-label="Forward"
  99:           title="Forward"
  104:         <span className="web-pane-origin" title={view.origin}>
  116:             aria-label={`Path on ${view.title}`}
  126:             placeholder="/"
  131:           aria-label={`Reload ${view.title}`}
  132:           title="Reload"
  139:           aria-label="Reveal source terminal"
  140:           title="Back to terminal"
  147:           aria-label="Web pane diagnostics"
  149:           title="Diagnostics"
  156:           aria-label={
  162:           title={focused ? 'Restore workbench' : 'Full page'}
  169:           aria-label={`Open ${view.title} in the browser`}
  170:           title={
  199:         <section className="web-pane-diagnostics" aria-label="Web pane diagnostics">
  201:             <strong>Recent pane events</strong>
  215:             <p>No failures or console warnings recorded.</p>

workbench/TerminalLayoutControls.tsx (5 match(es)):
  24:     <div className="terminal-mode-controls" role="group" aria-label="Terminal layout">
  29:         aria-label={terminalLabel}
  31:         title={terminalLabel}
  49:         aria-label={viewerLabel}
  51:         title={viewerLabel}
workbench/ConfirmationDialog.tsx:8:   readonly label: string

harness/ProviderContextMeter.tsx (3 match(es)):
  72:       title={label}
  73:       aria-label={context === undefined ? label : undefined}
  82:             aria-label="Context used"

health/WorkbenchHealthControl.tsx (10 match(es)):
  30:         aria-label={label}
  31:         title={label}
  35:         {unresolved.length > 0 ? <b>{unresolved.length}</b> : null}
  40:           actions={[{ label: 'Close', kind: 'cancel', onSelect: () => setOpen(false) }]}
  45:               <h2 id="workbench-health-title">Workbench health</h2>
  53:             <p className="workbench-health-empty">No workbench faults observed.</p>
  98:     <section className="workbench-health-storage" aria-label="Local diagnostic evidence">
  99:       <h3>Local diagnostic evidence</h3>
  116:             <p>Durable journaling is disabled in this build.</p>
  120:         <p>Loading local evidence details…</p>

[omitted 442 match(es) in 59 file(s); see original output for full results]
```

</details>


---

<sub>22s</sub>

### Copilot

I have enough project-specific detail to document the actual workflows: source installation rebuilds Electron-native modules, development is launched with Electron Vite, and validation spans linting, type checking, unit tests, architecture checks, and platform smoke tests.

---

<sub>30s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is an Electron workbench for working with local and SSH-hosted projects. It combines a project file tree and editor with Git status and history, a terminal workspace, browser panes, document review, and integrations for Claude and Codex sessions.\n+\n+## Features\n+\n+- Open, browse, edit, and organize local or SSH-hosted project workspaces.\n+- Work with multiple terminal sessions, split terminal layouts, terminal search, and terminal-rendered web panes.\n+- Inspect Git changes, diffs, commit history, branches, fetch/pull state, and the commit graph.\n+- Preview Markdown, Mermaid diagrams, syntax-highlighted source, and document-review changes.\n+- Track Claude and Codex session context and usage from supported local harness artifacts.\n+- Use configurable themes, terminal settings, keybindings, workspace tabs, and diagnostics.\n+\n+## Requirements\n+\n+- Node.js 24 or later\n+- npm\n+- A native build toolchain compatible with `node-gyp`, required for `node-pty` and the local `@hvir/rename-noreplace` module\n+\n+On Linux, Electron also requires the system libraries declared in [`electron-builder.yml`](electron-builder.yml). Release packages target macOS on Apple Silicon and Debian-based Linux on x64 or ARM64.\n+\n+## Getting started\n+\n+```bash\n+git clone <repository-url>\n+cd hvir\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` runs the project's post-install step, which installs Electron and rebuilds the native runtime modules for Electron's ABI. The development application opens through Electron Vite; use the project picker to choose a local folder or configured SSH workspace.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the Electron development environment. |\n+| `npm run build` | Type-check and build the application into `out/`. |\n+| `npm run preview` | Preview a built application. |\n+| `npm run lint` | Run ESLint. |\n+| `npm run typecheck` | Type-check main/preload and renderer code. |\n+| `npm test` | Run the Vitest test suite. |\n+| `npm run verify` | Run seam, ADR, architecture, lint, type, and unit-test checks. |\n+| `npm run smoke` | Build the smoke target and run the cross-platform Electron smoke scenarios. |\n+| `npm run smoke:macos` | Run the macOS-specific smoke scenario set. |\n+\n+Install the repository's pre-push hook to run type checks and the local-platform smoke suite before pushing:\n+\n+```bash\n+npm run hooks:install\n+```\n+\n+## Packaging\n+\n+Build distributable packages on their target platform:\n+\n+```bash\n+# macOS Apple Silicon installer\n+npm run pack:mac:arm64\n+\n+# Debian package for x64 Linux\n+npm run pack:linux:x64\n+\n+# Debian package for ARM64 Linux\n+npm run pack:linux:arm64\n+```\n+\n+Artifacts are written to `dist/`. Use `npm run build:dir` to create an unpacked application directory instead.\n+\n+## Project layout\n+\n+- `src/main/` — Electron main process, project hosts, Git, PTY, diagnostics, and application services.\n+- `src/preload/` — typed and restricted renderer-to-main bridge.\n+- `src/renderer/` — React workbench UI.\n+- `src/shared/` — shared contracts and domain types.\n+- `src/workers/` — Electron utility-process workers.\n+- `test/` — Vitest unit and integration tests.\n+- `scripts/` — release, architecture, smoke, and project-maintenance tooling.\n+- `build/` — application icons, entitlements, installer configuration, and native packaging assets.\n+\n+## License\n+\n+[MIT](LICENSE) © 2026 hvir contributors.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/9f68e1cc/hvir/README.md
```


---

<sub>32s</sub>

### Copilot

The new README is in place with project-specific setup, operating prerequisites, commands, packaging targets, layout, and licensing. I’m validating its formatting and reviewing the final diff.

---

<sub>34s</sub>

### `bash`

**Check README formatting**

$ npx prettier --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 3 completed with exit code 0>
```


---

<sub>34s</sub>

### `bash`

**Review README diff and status**

$ git --no-pager diff --check && git --no-pager diff -- README.md && git status --short

```
?? README.md
<shellId: 4 completed with exit code 0>
```


---

<sub>35s</sub>

### Copilot

Created **`README.md`** with an accurate project overview, feature list, Node/native-build prerequisites, source setup, development and validation commands, macOS/Linux packaging instructions, project layout, and MIT license reference.

Validated with `npx prettier --check README.md` and `git diff --check`.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
