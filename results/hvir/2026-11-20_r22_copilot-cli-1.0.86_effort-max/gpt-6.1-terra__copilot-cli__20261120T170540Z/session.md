# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `8212bc23-aa0e-46d6-9a63-fd106ad64fe8`  
> - **Started:** 11/20/2026, 12:05:56 PM  
> - **Duration:** 5m 48s  
> - **Exported:** 11/20/2026, 12:11:45 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>5s</sub>

### Copilot

I’ll inspect the project’s structure and entry points, then write a README that reflects its actual setup and usage.

---

<sub>13s</sub>

### `bash`

**Inspect repository files and working-tree status**

$ pwd && git status --short && git ls-files && printf '\nTop-level entries:\n' && ls -la

<details>
<summary>20 lines</summary>

```
Output too large to read at once (52.2 KB). Saved to: /private/var/tmp/ws/d493c7da/home/tmp/1795194365580-copilot-tool-output-57177-b68794bd-e6d9-436d-b0ab-a93679879e9c.txt
Consider using tools like rg (for searching), head/tail (for viewing start/end), view with view_range (for specific sections), or jq (for JSON) to examine portions of the output.

Preview (first 500 chars):
/private/var/tmp/ws/d493c7da/hvir
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
.pretti
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### search_code_subagent (Completed)

### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/package.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>130 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/package.json`. Lines 1 to 128 (128 lines total): 
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
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/package-lock.json",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>203 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/package-lock.json`. Lines 1 to 200 (at least 200 lines total): 
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

****/README***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README*"
}
```

</details>

```
No files found matching pattern: **/README*
```


### `file_search`

****/docs***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs*"
}
```

</details>

```
No files found matching pattern: **/docs*
```


### `file_search`

****/examples***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/examples*"
}
```

</details>

```
No files found matching pattern: **/examples*
```


### `file_search`

****/test***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/test*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/d493c7da/hvir/test/test-console-output-policy.test.ts
  /private/var/tmp/ws/d493c7da/hvir/test/test-console-output-policy.ts
```


### `grep_search`

**README|docs|examples|tests**

<details>
<summary>Arguments</summary>

```json
{
  "query": "README|docs|examples|tests",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
278 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/d493c7da/hvir/.prettierignore" line=7>
    # Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/src/main/pty/pty-contract.ts" line=22>
    /** Precomposed profile launch; tests/legacy callers may omit it. */
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/stryker.config.json" line=9>
    "logTests": false,
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/stryker.config.json" line=10>
    "reportTests": false,
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=141>
    "owner": "file creation actions interaction tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=149>
    "owner": "Ghostty terminal pane lifecycle tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=157>
    "owner": "GitEngine public facade contract tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=165>
    "owner": "harness profile settings interaction tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=173>
    "owner": "project file operation coordinator tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=181>
    "owner": "smoke process runner tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=189>
    "owner": "SshHost immediate transport adapter tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=197>
    "owner": "terminal resume IPC authority tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json" line=205>
    "owner": "terminal session registry tests",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/test/harness-usage-demand-controller.test.ts" line=21>
    import { createTestSshHost } from './ssh-host-test-fixture'
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/test/harness-usage-demand-controller.test.ts" line=163>
    const host = createTestSshHost({
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/test/merge-pr-skill.test.ts" line=16>
    new URL('../docs/project-management.md', import.meta.url),
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs" line=9>
    const adrDirectory = join(root, 'docs', 'adr')
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs" line=10>
    const designPath = join(root, 'docs', 'design.md')
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs" line=26>
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs" line=31>
    errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
</match>
```
````

</details>


### `grep_search`

**purpose|architecture|public interface|installation|setup|commands|configuration**

<details>
<summary>Arguments</summary>

```json
{
  "query": "purpose|architecture|public interface|installation|setup|commands|configuration",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
774 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/d493c7da/hvir/package.json" line=45>
    "architecture:report": "node scripts/architecture-hotspots.mjs",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/package.json" line=46>
    "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/package.json" line=57>
    "verify": "npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test",
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/packages/rename-noreplace/LICENSE" line=17>
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=4>
    import type { ModuleReference } from './architecture-module-resolution.mts'
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=5>
    import type { GraphViolation, ModuleGraph } from './architecture-module-graph.mts'
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=10>
    configurationRoot: string,
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=12>
    const eslint = new ESLint({ cwd: configurationRoot })
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=13>
    const linter = new Linter({ cwd: configurationRoot })
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=35>
    policyPaths.add(from.replace(/\.[cm]?[jt]sx?$/, '.architecture-import-policy.ts'))
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=61>
    resolve(configurationRoot, selectedPath),
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=65>
    throw new Error(`Missing dependency rule configuration: ${from}`)
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=92>
    { filename: resolve(configurationRoot, from) },
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts" line=102>
    { filename: resolve(configurationRoot, from) },
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/src/main/ipc/project-commands.ts" line=28>
    /** Adapts project coordinators to IPC commands without putting policy in the root. */
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/src/main/ipc/project-commands.ts" line=29>
    export function createProjectCommands({
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs" line=10>
    // These import bans are how the architecture is enforced mechanically rather
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs" line=460>
    'scripts/architecture-hotspots.mts',
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs" line=461>
    'scripts/architecture-policy.mts',
</match>
<match path="/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs" line=462>
    'scripts/architecture-inventory.mts',
</match>
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs",
  "startLine": 1,
  "endLine": 200
}
```

</details>

<details>
<summary>165 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs`. Lines 1 to 175 (175 lines total): 
```
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
  errors.push('docs/design.md: missing bounded section 4 ADR index')
} else {
  errors.push(...validateAdrLifecycles(recordSources, indexSection[1]))
  const indexed = [
    ...indexSection[1].matchAll(
      /^### \[ADR-(\d{3}) — [^\]]+\]\(adr\/(ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md)\)$/gm,
    ),
  ]
  const indexedFiles = indexed.map((match) => match[2])
  for (const match of indexed) {
    if (match[1] !== match[3]) {
      errors.push(`docs/design.md: ADR-${match[1]} links to ADR-${match[3]}`)
    }
  }
  for (const name of records) {
    const count = indexedFiles.filter((indexedName) => indexedName === name).length
    if (count !== 1) {
      errors.push(`docs/design.md: ${name} must appear exactly once in the ADR index`)
    }
  }
  for (const name of indexedFiles) {
    if (!records.includes(name)) {
      errors.push(`docs/design.md: index points to non-record ${name}`)
    }
  }
  if (
    /^\*\*Decision:\*\*/m.test(indexSection[1]) ||
    /^#### .*addendum/im.test(indexSection[1])
  ) {
    errors.push(
      'docs/design.md: ADR bodies or implementation addenda remain embedded in the index',
    )
  }
}

function markdownFiles(directory) {
  const files = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || ['node_modules', 'out'].includes(entry.name))
      continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...markdownFiles(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function headingHasFragment(path, fragment) {
  const decoded = decodeURIComponent(fragment).toLowerCase()
  const headings = readFileSync(path, 'utf8').match(/^#{1,6}\s+.+$/gm) ?? []
  return headings.some((heading) => {
    const text = heading
      .replace(/^#{1,6}\s+/, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_~]/g, '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s/g, '-')
    return text === decoded
  })
}

for (const sourcePath of markdownFiles(root)) {
  const source = readFileSync(sourcePath, 'utf8')
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const href = match[1].replace(/^<|>$/g, '')
    if (/^(?:[a-z]+:|#)/i.test(href)) continue
    const [withoutFragment, fragment] = href.split('#', 2)
    const localPart = withoutFragment.split('?', 1)[0]
    const targetPath = resolve(dirname(sourcePath), decodeURIComponent(localPart))
    const sourceIsAdrSurface =
      sourcePath === designPath || sourcePath.startsWith(`${adrDirectory}/`)
    const targetIsAdr =
      targetPath.startsWith(`${adrDirectory}/`) || targetPath === adrDirectory
    if (!sourceIsAdrSurface && !targetIsAdr) continue
    if (!existsSync(targetPath)) {
      errors.push(`${relative(root, sourcePath)}: broken local link ${href}`)
    } else if (
      fragment &&
      targetPath.endsWith('.md') &&
      !headingHasFragment(targetPath, fragment)
    ) {
      errors.push(`${relative(root, sourcePath)}: missing heading fragment in ${href}`)
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exitCode = 1
} else {
  console.log(`ADR structure check passed (${records.length} records)`)
}

```
````

</details>


### `file_search`

****/docs/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**"
}
```

</details>

```
No files found matching pattern: **/docs/**
```


### `file_search`

****/architecture-*.mts**

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/architecture-*.mts"
}
```

</details>

<details>
<summary>10 lines</summary>

```
9 files found:
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-github.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-graph.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-wiring.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-policy.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-authorization.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-resolution.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-inventory.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-module-directions.mts
```

</details>


### `file_search`

****/architecture-hotspots.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/architecture-hotspots.*"
}
```

</details>

```
3 files found:
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mjs
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.json
```


### `file_search`

****/architecture-policy.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/architecture-policy.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/d493c7da/hvir/test/architecture-policy.test.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-policy.mts
```


### `file_search`

****/architecture-inventory.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/architecture-inventory.*"
}
```

</details>

```
1 files found:
  /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-inventory.mts
```


### `file_search`

****/project-management/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/project-management/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/kind-policy.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/legacy-token-evidence.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/github-client.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/contributor-token-migration.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/migrate-project-tokens.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/pull-request-planning.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/planning-cli.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/github-pagination.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/canonical-project.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/canonical-project-config.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/audit-canonical-project.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/contributor-status-cli.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/github-session-tokens.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/canonical-project-fields.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/native-issue-worktrees.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/issue-planning.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/read-issue-context.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/github-kind-automation.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/read-planning-record.ts
  /private/var/tmp/ws/d493c7da/hvir/scripts/project-management/sync-pull-request-planning.ts
```

</details>


### `file_search`

****/terminal-theme-catalog.***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/terminal-theme-catalog.*"
}
```

</details>

```
2 files found:
  /private/var/tmp/ws/d493c7da/hvir/test/terminal-theme-catalog.test.ts
  /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/terminal/terminal-theme-catalog.ts
```


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>141 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts`. Lines 1 to 144 (144 lines total): 
```
#!/usr/bin/env node
import console from 'node:console'
import process from 'node:process'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import {
  POLICY_PATH,
  evaluateInventory,
  validatePolicy,
  type ArchitectureRow,
} from './architecture-policy.mts'
import { createArchitectureInventory, fullCommit } from './architecture-inventory.mts'
import {
  authorizeCandidate,
  type ArchitectureContext,
} from './architecture-authorization.mts'
import {
  githubAdapter,
  loadArchitectureIntegration,
  requireCurrentRemovalIssues,
  resolveArchitectureContext,
} from './architecture-github.mts'
import { collectModuleGraph, type ModuleGraph } from './architecture-module-graph.mts'
import { checkModuleDirections } from './architecture-module-directions.mts'

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

export function collectArchitectureHotspots(root = repositoryRoot) {
  const source = createArchitectureInventory(root)
  const policy = validatePolicy(JSON.parse(readFileSync(join(root, POLICY_PATH), 'utf8')))
  const inventory = source.collectInventory(policy)
  const head = fullCommit(root, 'HEAD')
  const rows = evaluateInventory(
    policy,
    inventory,
    source.comparisonCounts(inventory, [head]),
  )
  return {
    policy,
    inventory,
    version: 2,
    mode: 'provisional-report',
    head,
    evidence:
      'No authorization claimed; architecture:check resolves the current target and acceptance evidence.',
    rows,
    violations: rows.filter((row) => row.status === 'over'),
  }
}

export function formatReport(report: {
  mode: string
  rows: ArchitectureRow[]
  violations: ArchitectureRow[]
  context?: ArchitectureContext
  admission?: { kind: string }
  evidence?: string
}): string {
  const lines = [
    `architecture budgets (${report.mode})`,
    `${report.rows.length} maintained source files; every file has one governing rule`,
  ]
  if (report.context)
    lines.push(
      `candidate ${report.context.head}; ${report.context.target} base ${report.context.base}; ${report.admission?.kind ?? 'unavailable'}`,
    )
  if (report.evidence) lines.push(report.evidence)
  for (const row of report.rows.filter(
    (row) => row.aboveComfort || row.exception || row.status === 'over',
  )) {
    lines.push(
      `${row.status === 'over' ? '!' : '·'} ${row.path}: ${row.lines}/${row.effectiveLimit} lines (${row.category}, ${row.governingRule}${row.aboveComfort ? ', above comfort' : ''})`,
    )
  }
  lines.push(`${report.violations.length} budget violation(s)`)
  return lines.join('\n')
}

export async function runArchitectureCommand(root = repositoryRoot): Promise<void> {
  try {
    const enforce = process.argv.includes('--enforce')
    let collected
    if (enforce) {
      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
      const context = await resolveArchitectureContext(root, api)
      collected = await authorizeCandidate({
        root,
        context,
        loadIntegration: (merge, epic) =>
          loadArchitectureIntegration(root, api, merge, epic),
      })
      await requireCurrentRemovalIssues(api, collected.policy)
      const current = await resolveArchitectureContext(root, api)
      if (current.base !== context.base || current.head !== context.head)
        throw new Error('Architecture target changed during verification; reverify')
    } else collected = collectArchitectureHotspots(root)
    const { policy, inventory, ...report } = collected
    const dependencies = collectModuleGraph(root, inventory, policy)
    dependencies.violations.push(...(await checkModuleDirections(dependencies, root)))
    console.log(
      process.argv.includes('--json')
        ? JSON.stringify({ ...report, dependencies }, null, 2)
        : `${formatReport(report)}\n${formatModuleGraph(dependencies)}`,
    )
    if (enforce && (report.violations.length || dependencies.violations.length))
      process.exitCode = 1
  } catch (error) {
    console.error(
      `Architecture verification failed: ${error instanceof Error ? error.message : 'Unknown failure'}`,
    )
    process.exitCode = 1
  }
}

export function formatModuleGraph(graph: ModuleGraph): string {
  return [
    `module graph: ${graph.modules.length} maintained TS/JS modules; ${graph.edges.length} internal edges`,
    `roots: ${graph.scope.roots.join(', ')}; resolution: ${graph.scope.configs.join(', ')}`,
    ...graph.scope.exclusions,
    `${graph.runtimeComponents.length} runtime cycle(s); ${graph.staticComponents.length} static component(s)`,
    ...graph.staticComponents.flatMap((members) => [
      `component: ${members.join(', ')}`,
      ...graph.edges
        .filter((edge) => members.includes(edge.from) && members.includes(edge.to))
        .map(
          (edge) =>
            `  ${edge.from}:${edge.line} --${edge.kind}/${edge.form}--> ${edge.to}`,
        ),
    ]),
    ...graph.loading
      .filter((entry) => entry.disposition !== 'external')
      .map(
        (entry) =>
          `loading: ${entry.from}:${entry.line} ${entry.form} ${entry.disposition}${entry.target ? ` -> ${entry.target}` : ''}`,
      ),
    ...graph.violations.map(
      (issue) =>
        `! ${issue.rule}: ${issue.from ?? ''}${issue.line ? `:${issue.line}` : ''}${issue.to ? ` -> ${issue.to}` : ''}: ${issue.detail}`,
    ),
    `${graph.violations.length} dependency violation(s)`,
  ].join('\n')
}

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mjs",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>7 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mjs`. Lines 1 to 5 (5 lines total): 
```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()

```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-policy.mts",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>258 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-policy.mts`. Lines 1 to 260 (at least 260 lines total): 
```
// Architecture budgets and maintained-source classification share one policy owner.
import { extname, basename } from 'node:path'
import type { Buffer } from 'node:buffer'

export const POLICY_PATH = 'scripts/architecture-hotspots.json'
export const SOURCE_ROOTS = [
  'src',
  'test',
  'scripts',
  'packages',
  'build',
  '.github',
  '.githooks',
  '.agents',
  '.claude',
]
export const SOURCE_EXTENSIONS = [
  '.ts',
  '.tsx',
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

export interface BudgetMetadata {
  path: string
  maxLines: number
  owner: string
  rationale: string
  reconsiderWhen: string
}
export interface ArchitectureBudget extends BudgetMetadata {
  kind: 'stricter' | 'transitional' | 'durable'
  removalIssue?: string
}
export interface GeneratedBudget extends BudgetMetadata {
  generator: string
  inputs: Array<{ path: string; sha256: string }>
  command: string
}
export interface ArchitecturePolicy {
  version: 2
  comfortLines: 500
  defaultMaximum: number
  roots: string[]
  extensions: string[]
  budgets: ArchitectureBudget[]
  generated: GeneratedBudget[]
}
export type ArchitectureRule =
  | ArchitectureBudget
  | (GeneratedBudget & { kind: 'generated' })
  | { kind: 'ordinary'; maxLines: number }
export type SourceInventory = Map<string, Buffer>
export type ComparisonCounts = Map<string, number[]>
export interface ArchitectureRow {
  path: string
  category: 'production' | 'test' | 'smoke' | 'tooling' | 'generated'
  lines: number
  governingRule: ArchitectureRule['kind']
  declaredLimit: number
  effectiveLimit: number
  aboveComfort: boolean
  status: 'ok' | 'over'
  exception?: Exclude<ArchitectureRule, { kind: 'ordinary' }>
}

export function disposableDirectory(path: string): boolean {
  return (
    path.split('/').some((part) => Object.hasOwn(DISPOSABLE_ROLES, part)) ||
    /^packages\/[^/]+\/build(?:\/|$)/.test(path)
  )
}

// Configured source extensions always win. These fixed data dispositions are not a
// caller-configurable exclusion list; ignored or untracked unknown source still fails.
export function sourceDisposition(
  path: string,
  policy: ArchitecturePolicy,
): 'source' | 'data' | 'inspect' {
  const extension = extname(path)
  if (policy.extensions.includes(extension)) return 'source'
  if (
    DATA_EXTENSIONS.has(extension) ||
    ['.log', '.tsbuildinfo'].includes(extension) ||
    /^\.env(?:\.[a-zA-Z0-9_-]+)*$/.test(basename(path))
  )
    return 'data'
  return 'inspect'
}
export function isSource(
  path: string,
  bytes: Buffer,
  policy: ArchitecturePolicy,
): boolean {
  if (sourceDisposition(path, policy) === 'source') return true
  const first = bytes.subarray(0, 200).toString().split('\n')[0] ?? ''
  if (/^#!.*\b(?:sh|bash|zsh)(?:\s|$)/.test(first)) return true
  if (
    first.startsWith('#!') ||
    (extname(path) && sourceDisposition(path, policy) !== 'data')
  ) {
    throw new Error(
      `Unclassified source language: ${path}; add an explicit policy disposition`,
    )
  }
  return false
}
export function inScope(path: string, policy: ArchitecturePolicy): boolean {
  return !path.includes('/') || policy.roots.some((root) => path.startsWith(`${root}/`))
}

export function physicalLines(bytes: Uint8Array): number {
  if (!bytes.length) return 0
  let count = 0
  for (const byte of bytes) if (byte === 10) count++
  return count + (bytes[bytes.length - 1] === 10 ? 0 : 1)
}
function closed(
  value: unknown,
  keys: string[],
  label: string,
): asserts value is Record<string, unknown> {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    Object.keys(value).some((key) => !keys.includes(key))
  )
    throw new Error(`Malformed ${label}: unexpected fields`)
}
function text(value: unknown, label: string): asserts value is string {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`Missing ${label}`)
}
function maximum(value: unknown): asserts value is number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 1)
    throw new Error('Malformed integer maximum')
}
export function repositoryPath(value: unknown): string {
  text(value, 'repository path')
  if (
    value.startsWith('/') ||
    value.includes('\\') ||
    value.split('/').some((p) => !p || p === '..' || p === '.') ||
    /[*?[\]]/.test(value) ||
    [...value].some((c) => c.charCodeAt(0) < 32)
  )
    throw new Error(`Invalid exact repository path: ${value}`)
  return value
}
function uniqueStrings(values: unknown, label: string): asserts values is string[] {
  if (
    !Array.isArray(values) ||
    values.some((v: unknown) => typeof v !== 'string') ||
    new Set(values).size !== values.length
  )
    throw new Error(`Malformed ${label}`)
}
function metadata(entry: Record<string, unknown>): BudgetMetadata {
  maximum(entry.maxLines)
  text(entry.owner, 'owner')
  text(entry.rationale, 'rationale')
  text(entry.reconsiderWhen, 'reconsiderWhen')
  return {
    path: repositoryPath(entry.path),
    maxLines: entry.maxLines,
    owner: entry.owner,
    rationale: entry.rationale,
    reconsiderWhen: entry.reconsiderWhen,
  }
}
export function validatePolicy(value: unknown): ArchitecturePolicy {
  closed(
    value,
    [
      'version',
      'comfortLines',
      'defaultMaximum',
      'roots',
      'extensions',
      'budgets',
      'generated',
    ],
    'policy',
  )
  if (value.version !== 2 || value.comfortLines !== 500)
    throw new Error('Unsupported architecture policy version or comfort target')
  maximum(value.defaultMaximum)
  uniqueStrings(value.roots, 'roots')
  uniqueStrings(value.extensions, 'extensions')
  const roots = value.roots,
    extensions = value.extensions
  if (
    SOURCE_ROOTS.some((root) => !roots.includes(root)) ||
    SOURCE_EXTENSIONS.some((ext) => !extensions.includes(ext))
  )
    throw new Error('Required maintained source roots/extensions cannot be excluded')
  roots.forEach(repositoryPath)
  if (extensions.some((ext) => !/^\.[a-z]+$/.test(ext)))
    throw new Error('Malformed source extension')
  if (!Array.isArray(value.budgets) || !Array.isArray(value.generated))
    throw new Error('Missing classifications')
  const defaultMaximum = value.defaultMaximum
  const budgets = value.budgets.map((entry: unknown): ArchitectureBudget => {
    closed(
      entry,
      [
        'path',
        'kind',
        'maxLines',
        'owner',
        'rationale',
        'reconsiderWhen',
        'removalIssue',
      ],
      'budget',
    )
    const common = metadata(entry)
    if (
      entry.kind !== 'stricter' &&
      entry.kind !== 'transitional' &&
      entry.kind !== 'durable'
    )
      throw new Error(`Unknown budget kind: ${common.path}`)
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-inventory.mts",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>261 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-inventory.mts`. Lines 1 to 260 (at least 260 lines total): 
```
import { execFileSync } from 'node:child_process'
import { lstatSync, readdirSync, readFileSync, realpathSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { createHash } from 'node:crypto'
import { Buffer } from 'node:buffer'
import {
  POLICY_PATH,
  disposableDirectory,
  inScope,
  isSource,
  physicalLines,
  readAcceptedPolicy,
  ruleFor,
  sourceDisposition,
  type ArchitecturePolicy,
  type ComparisonCounts,
  type SourceInventory,
} from './architecture-policy.mts'

export function git(root: string, args: string[]): string {
  return execFileSync('git', args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trimEnd()
}
export function fullCommit(root: string, ref: string): string {
  const sha = git(root, ['rev-parse', '--verify', `${ref}^{commit}`])
  if (!/^[0-9a-f]{40}$/.test(sha))
    throw new Error('Required revision is not a full commit')
  return sha
}
export function requireAncestor(root: string, base: string, head: string): void {
  if (fullCommit(root, base) !== base || fullCommit(root, head) !== head)
    throw new Error('Comparison requires immutable full SHAs')
  try {
    git(root, ['merge-base', '--is-ancestor', base, head])
  } catch {
    throw new Error(
      `Stale comparison base: ${base} is not an ancestor of ${head}; refresh the target and reverify`,
    )
  }
}
interface TreeEntry {
  mode: string
  oid: string
}

// Each evaluation owns its own cache. Returning a report releases all Git object references;
// no process-global cache survives a candidate or a disposed fixture repository.
export function createArchitectureInventory(repositoryRoot: string) {
  const root = realpathSync(repositoryRoot)
  const trees = new Map<string, Map<string, TreeEntry>>()
  const objects = new Map<string, Buffer>()
  function tree(revision: string): Map<string, TreeEntry> {
    let entries = trees.get(revision)
    if (!entries) {
      entries = new Map(
        git(root, ['ls-tree', '-r', '-z', revision])
          .split('\0')
          .filter(Boolean)
          .map((row) => {
            const [metadata, path] = row.split('\t'),
              [mode, , oid] = (metadata ?? '').split(' ')
            if (!mode || !oid || !path) throw new Error('Malformed required Git tree')
            return [path, { mode, oid }]
          }),
      )
      trees.set(revision, entries)
    }
    return entries
  }
  function prefetch(revision: string, paths: Iterable<string>): void {
    const entries = tree(revision)
    const ids = [
      ...new Set(
        [...paths].flatMap((path) => {
          const id = entries.get(path)?.oid
          return id && !objects.has(id) ? [id] : []
        }),
      ),
    ]
    if (!ids.length) return
    const batch = execFileSync('git', ['cat-file', '--batch'], {
      cwd: root,
      input: ids.join('\n') + '\n',
      maxBuffer: 64 * 1024 * 1024,
    })
    let position = 0
    for (const id of ids) {
      const end = batch.indexOf(10, position)
      const [actual, type, sizeText] = batch.subarray(position, end).toString().split(' ')
      const size = Number(sizeText)
      if (
        end < 0 ||
        actual !== id ||
        type !== 'blob' ||
        !Number.isSafeInteger(size) ||
        size < 0 ||
        end + size + 1 >= batch.length
      )
        throw new Error('Unreadable required Git blob')
      objects.set(id, Buffer.from(batch.subarray(end + 1, end + 1 + size)))
      position = end + size + 2
    }
  }
  function blob(revision: string, path: string): Buffer | null {
    const entry = tree(revision).get(path)
    if (!entry) return null
    prefetch(revision, [path])
    const bytes = objects.get(entry.oid)
    if (!bytes) throw new Error('Unreadable required Git blob')
    return bytes
  }
  function collectInventory(
    policy: ArchitecturePolicy,
    revision: string | null = null,
  ): SourceInventory {
    const result: SourceInventory = new Map()
    const tracked = [...tree(revision ?? fullCommit(root, 'HEAD')).keys()]
    function add(path: string, bytes: Buffer): void {
      if (disposableDirectory(path))
        throw new Error(`Tracked maintained path hidden by disposable role: ${path}`)
      if (!isSource(path, bytes, policy)) return
      if (!inScope(path, policy))
        throw new Error(`Source outside declared roots: ${path}`)
      result.set(path, bytes)
    }
    if (revision) {
      const entries = tree(revision)
      for (const path of entries.keys())
        if (disposableDirectory(path))
          throw new Error(`Tracked files hidden by disposable role: ${path}`)
      // Data/binary bodies have no role in line-count or alias proof.
      const required = [...entries].filter(
        ([path, entry]) =>
          entry.mode === '120000' ||
          entry.mode === '100755' ||
          sourceDisposition(path, policy) !== 'data',
      )
      prefetch(
        revision,
        required.map(([path]) => path),
      )
      function resolveAlias(path: string, seen = new Set<string>()): void {
        if (seen.has(path)) throw new Error(`Cyclic source alias: ${path}`)
        seen.add(path)
        const bytes = blob(revision!, path)
        if (!bytes) throw new Error(`Unresolved source alias: ${path}`)
        const target = relative(
          root,
          resolve(root, path, '..', bytes.toString()),
        ).replaceAll('\\', '/')
        if (
          target.startsWith('../') ||
          !target ||
          !tracked.some((p) => p === target || p.startsWith(`${target}/`))
        )
          throw new Error(`Unresolved or escaping source alias: ${path}`)
        if (entries.get(target)?.mode === '120000') resolveAlias(target, seen)
      }
      for (const [path, entry] of required) {
        if (entry.mode === '120000') resolveAlias(path)
        else {
          const bytes = blob(revision, path)
          if (!bytes) throw new Error(`Unreadable source: ${path}`)
          add(path, bytes)
        }
      }
      return result
    }
    const owned = new Set(tracked),
      visited = new Set<string>()
    function walk(path: string): void {
      const absolute = join(root, path),
        info = lstatSync(absolute)
      if (info.isSymbolicLink()) {
        let target: string
        try {
          target = relative(root, realpathSync(absolute)).replaceAll('\\', '/')
        } catch {
          throw new Error(`Unresolved source alias: ${path}`)
        }
        if (
          target.startsWith('../') ||
          !target ||
          !tracked.some((p) => p === target || p.startsWith(`${target}/`))
        )
          throw new Error(`Escaping or unowned source alias: ${path}`)
        walk(target)
        return
      }
      if (visited.has(path)) return
      visited.add(path)
      if (disposableDirectory(path)) {
        if ([...owned].some((p) => p === path || p.startsWith(`${path}/`)))
          throw new Error(`Tracked files hidden by disposable role: ${path}`)
        return
      }
      if (info.isDirectory())
        for (const entry of readdirSync(absolute).sort()) walk(`${path}/${entry}`)
      else if (info.isFile()) {
        if ((info.mode & 0o111) !== 0 || sourceDisposition(path, policy) !== 'data')
          add(path, readFileSync(absolute))
      } else throw new Error(`Unreadable source entry: ${path}`)
    }
    for (const entry of readdirSync(root).sort()) walk(entry)
    return result
  }
  function comparisonCounts(
    inventory: SourceInventory,
    revisions: string[],
  ): ComparisonCounts {
    for (const revision of revisions) prefetch(revision, inventory.keys())
    return new Map(
      [...inventory.keys()].map((path) => [
        path,
        revisions.flatMap((revision) => {
          const bytes = blob(revision, path)
          return bytes === null ? [] : [physicalLines(bytes)]
        }),
      ]),
    )
  }
  function acceptedRatchetCounts(
    policy: ArchitecturePolicy,
    base: string,
    counts: ComparisonCounts,
  ): ComparisonCounts {
    const entries = policy.budgets.filter((e) =>
      ['stricter', 'transitional'].includes(e.kind),
    )
    if (!entries.length) return counts
    const history = git(root, [
      'log',
      '--first-parent',
      '--format=%H',
      base,
      '--',
      POLICY_PATH,
      ...entries.map((e) => e.path),
    ])
      .split('\n')
      .filter(Boolean)
    for (const revision of history) {
      const bytes = blob(revision, POLICY_PATH)
      if (!bytes) continue
      const version: unknown = JSON.parse(bytes.toString())
      if (
        !version ||
        typeof version !== 'object' ||
        !('version' in version) ||
        version.version !== 2
      )
        break
      const accepted = readAcceptedPolicy(bytes)
      const ratchets = entries.filter((entry) =>
        ['stricter', 'transitional'].includes(ruleFor(accepted, entry.path).kind),
      )
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs",
  "startLine": 450,
  "endLine": 520
}
```

</details>

<details>
<summary>50 lines</summary>

````
File: `/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs`. Lines 450 to 500 (500 lines total): 
```
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

****/docs/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/docs/**"
}
```

</details>

```
No files found matching pattern: **/docs/**
```


### `file_search`

****/README***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/README*"
}
```

</details>

```
No files found matching pattern: **/README*
```


### `file_search`

****/examples***

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/examples*"
}
```

</details>

```
No files found matching pattern: **/examples*
```


### Copilot

\<final_answer>
/private/var/tmp/ws/d493c7da/hvir/package.json:1-128
/private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs:1-175
/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts:1-144
/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mjs:1-5
/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-policy.mts:1-260
/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-inventory.mts:1-260
/private/var/tmp/ws/d493c7da/hvir/eslint.config.mjs:450-500
\</final_answer>


---

<sub>19s</sub>

### `bash`

**Inspect project layout and documentation**

$ git status --short && printf '\nTop-level entries:\n' && ls -la && printf '\nDocumentation files:\n' && find docs -maxdepth 2 -type f | sort | head -100 && printf '\nSource directories:\n' && find src -maxdepth 2 -type d | sort | head -100

<details>
<summary>59 lines</summary>

```
Top-level entries:
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Nov 20 12:05 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 12:05 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 12:05 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 12:05 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 12:05 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Nov 20 12:05 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Nov 20 12:05 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Nov 20 12:05 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 12:05 build
-rw-r--r--@   1 air-jarmak  wheel     549 Nov 20 12:05 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Nov 20 12:05 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Nov 20 12:05 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Nov 20 12:05 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Nov 20 12:05 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Nov 20 12:05 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Nov 20 12:05 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Nov 20 12:05 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 12:05 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Nov 20 12:05 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Nov 20 12:05 src
-rw-r--r--@   1 air-jarmak  wheel     537 Nov 20 12:05 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Nov 20 12:05 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Nov 20 12:05 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Nov 20 12:05 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Nov 20 12:05 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Nov 20 12:05 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Nov 20 12:05 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Nov 20 12:05 vitest.config.ts

Documentation files:
find: docs: No such file or directory

Source directories:
src
src/main
src/main/diagnostics
src/main/document-review
src/main/filename-search
src/main/git
src/main/harness
src/main/health
src/main/ipc
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
src/shared
src/shared/ipc
src/workers
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>19s</sub>

### `glob`

**{README*,CONTRIBUTING*,LICENSE*,package*.json,electron-builder*,electron.vite.config*,.nvmrc,.node-version}**

"{README*,CONTRIBUTING*,LICENSE*,package*.json,electron-builder*,electron.vite.config*,.nvmrc,.node-version}"

<details>
<summary>9 matches</summary>

```
./packages/rename-noreplace/package.json
./packages/rename-noreplace/LICENSE
./LICENSE
./electron-builder.yml
./electron.vite.config.ts
./package.json
./electron-builder.ssh-acceptance.yml
./package-lock.json
./scripts/project-management/package.json
```

</details>


---

<sub>19s</sub>

### `glob`

**docs/*.md**

"docs/*.md"

```
No files matched the pattern.
```


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/package.json.**

/private/var/tmp/ws/d493c7da/hvir/package.json

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

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/electron-builder.yml.**

/private/var/tmp/ws/d493c7da/hvir/electron-builder.yml

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

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/d493c7da/hvir/.github/workflows/ci.yml

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

<sub>27s</sub>

### `bash`

**Find application entry points and contributor guidance**

$ printf 'Renderer files:\n' && find src/renderer/src -maxdepth 3 -type f | sort | head -150 && printf '\nMain files:\n' && find src/main -maxdepth 2 -type f | sort | head -100 && printf '\nScripts:\n' && ls scripts | head -100 && printf '\nDocumentation-like files:\n' && find . -path ./node_modules -prune -o -path ./.git -prune -o \( -iname 'readme*' -o -iname 'contributing*' -o -iname '*guide*.md' \) -print | sort | head -100

<details>
<summary>307 lines</summary>

```
Renderer files:
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
src/renderer/src/settings/sections/AppearanceSettings.tsx
src/renderer/src/settings/sections/GitSettings.tsx
src/renderer/src/settings/sections/KeybindingsSettings.tsx
src/renderer/src/settings/sections/TerminalSettings.tsx
src/renderer/src/settings/sections/TypographyFontField.tsx
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

Main files:
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

Scripts:
adr-lifecycle.mts
agent-work-checkpoint-store.mts
architecture-authorization.mts
architecture-github.mts
architecture-hotspots.json
architecture-hotspots.mjs
architecture-hotspots.mts
architecture-inventory.mts
architecture-module-directions.mts
architecture-module-graph.mts
architecture-module-resolution.mts
architecture-policy.mts
architecture-wiring.mts
assemble-native-release.d.mts
assemble-native-release.mjs
capture-contributor-usage.mts
check-adrs.mjs
check-seams.sh
check-terminal-runtime.mts
ci-attempt-evidence.mts
create-smoke-repository.sh
generate-terminal-theme-catalog.mts
ghostty-terminal-capability-profile.mts
ghostty-web-update
inspect-packaged-runtime.mts
install-git-hooks.sh
installed-harness-dialog-probe.mts
installed-startup-probe.mts
native-installer.template.sh
phase8-gauntlet.sh
prepare-release-linux-package.mts
prepare-release-pr.mjs
project-management
real-host-ssh-contract.mts
real-host-ssh.vite.config.mts
record-macos-ssh-identity.sh
release-changelog.d.mts
release-changelog.mjs
release-github-evidence.mts
render-native-installer.d.mts
render-native-installer.mjs
require-release-ci-evidence.mts
run-linux-package-smoke.sh
run-macos-package-smoke.sh
run-macos-ssh-acceptance.sh
run-real-host-ssh-acceptance.mts
run-smoke-interruption.mts
run-smoke-scenarios.mts
run-smoke.sh
smoke-failure-artifact.mts
smoke-import-boundary.mjs
validate-release-pr.mts

Documentation-like files:
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>27s</sub>

### `glob`

**src/**/*{settings,Settings,shortcut,Shortcut,preferences,Preferences}***

"src/**/*{settings,Settings,shortcut,Shortcut,preferences,Preferences}*"

<details>
<summary>21 matches</summary>

```
./src/main/smoke/harness-settings-visual.ts
./src/main/smoke/harness-settings-layout.ts
./src/main/smoke/app-settings.ts
./src/renderer/src/settings/SettingsActiveSection.tsx
./src/renderer/src/settings/settings-navigation.ts
./src/renderer/src/settings/settings-draft.ts
./src/renderer/src/settings/SettingsDialog.tsx
./src/renderer/src/settings/settings-model.ts
./src/renderer/src/settings/use-settings-controller.ts
./src/renderer/src/settings/HarnessProfilesSettings.tsx
./src/renderer/src/settings/typography-settings.ts
./src/renderer/src/settings/settings.ts
./src/renderer/src/settings/SettingsSectionNavigation.tsx
./src/renderer/src/settings/SettingsSection.tsx
./src/renderer/src/settings/sections/GitSettings.tsx
./src/renderer/src/settings/sections/KeybindingsSettings.tsx
./src/renderer/src/settings/sections/AppearanceSettings.tsx
./src/renderer/src/settings/sections/TerminalSettings.tsx
./src/renderer/src/terminal/terminal-runtime-live-settings.ts
./src/renderer/src/styles/settings.css
./src/renderer/src/styles/harness-settings.css
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/App.tsx (lines 1-220)

<details>
<summary>220 lines</summary>

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
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/harness/bundled-harness-providers.ts

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

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/keybindings.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/keybindings.ts

<details>
<summary>20 lines</summary>

```
import {
  matchesKeybinding as matchesSharedKeybinding,
  type KeyboardStroke,
} from '../../../shared'

export {
  DEFAULT_KEYBINDINGS,
  KEYBINDING_ACTIONS,
  keybindingAvailableInContext,
  keybindingOverridesJson,
  parseKeybindingOverrides,
  type KeybindingAction,
  type KeybindingMap,
} from '../../../shared'

export function matchesKeybinding(
  event: KeyboardStroke,
  binding: string,
  mac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform),
): boolean {
  return matchesSharedKeybinding(event, binding, mac)
}
```

</details>


---

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/d493c7da/hvir/scripts/check-terminal-runtime.mts (lines 1-220)

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

<sub>39s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/d493c7da/hvir/.github/workflows/release.yml (lines 1-220)

<details>
<summary>199 lines</summary>

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
```

</details>


---

<sub>39s</sub>

### `bash`

**Inspect repository identity, workspace structure and bundled command**

$ printf 'Git remotes:\n' && git remote -v && printf '\nRenderer workspace files:\n' && find src/renderer/src/workspace -maxdepth 2 -type f | sort | head -100 && printf '\nShared files:\n' && find src/shared -maxdepth 2 -type f | sort | head -100 && printf '\nNative command:\n' && file build/native/hvir-command && head -80 build/native/hvir-command

<details>
<summary>91 lines</summary>

```
Git remotes:

Renderer workspace files:
find: src/renderer/src/workspace: No such file or directory

Shared files:
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

Native command:
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
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>39s</sub>

### `rg`

**(Add project|Open project|Add workspace|New terminal|SSH|Settings|Welcome|Getting started|Get started|New project|Clone)**

"(Add project|Open project|Add workspace|New terminal|SSH|Settings|Welcome|Getting started|Get started|New project|Clone)" in *.tsx (src/renderer/src)

<details>
<summary>186 matches</summary>

```
[grep content: 165 matches across 22 file(s) under src/renderer/src]
dashboards/WebPane.tsx:173:               : 'Browser handoff for SSH panes needs a compatibility route'
sessions/SessionsOverview.tsx:399:                             SSH

settings/SettingsActiveSection.tsx (23 match(es)):
  5:   HarnessProfilesSettings,
  6:   type HarnessProfilesSettingsHandle,
  7: } from './HarnessProfilesSettings'
  8: import type { SettingsDraft, SettingsDraftValidation } from './settings-draft'
  9: import type { SettingsSection } from './settings-navigation'
  10: import { AppearanceSettings } from './sections/AppearanceSettings'
  11: import { GitSettings } from './sections/GitSettings'
  12: import { KeybindingsSettings } from './sections/KeybindingsSettings'
  13: import { TerminalSettings } from './sections/TerminalSettings'
  15: interface SettingsActiveSectionProps {
  16:   readonly activeSection: SettingsSection
  17:   readonly draft: SettingsDraft
  18:   readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  19:   readonly harnessProfiles: RefObject<HarnessProfilesSettingsHandle | null>
  23:   readonly onChange: <K extends keyof SettingsDraft>(
  25:     value: SettingsDraft[K],
  30: export function SettingsActiveSection({
  40: }: SettingsActiveSectionProps): ReactElement {
  43:       return <AppearanceSettings draft={draft} onChange={onChange} />
  46:         <TerminalSettings
  54:       return <GitSettings draft={draft} onChange={onChange} />
  57:         <KeybindingsSettings draft={draft} validation={validation} onChange={onChange} />
  61:         <HarnessProfilesSettings

settings/SettingsDialog.tsx (17 match(es)):
  6: import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
  7: import { SettingsActiveSection } from './SettingsActiveSection'
  8: import { SettingsSectionNavigation } from './SettingsSectionNavigation'
  9: import type { AppSettings } from './settings'
  13:   type SettingsDestination,
  15: import { useSettingsController } from './use-settings-controller'
  17: interface SettingsDialogProps {
  19:   readonly settings: AppSettings
  20:   readonly onSave: (theme: AppTheme, settings: AppSettings) => void
  24:   readonly initialDestination?: SettingsDestination
  27: export function SettingsDialog({
  35: }: SettingsDialogProps): ReactElement {
  37:   const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
  42:   const controller = useSettingsController({
  90:             <h2 id="settings-title">Settings</h2>
  95:           <SettingsSectionNavigation
  100:             <SettingsActiveSection

settings/SettingsSectionNavigation.tsx (7 match(es)):
  3: import { SETTINGS_SECTIONS, type SettingsSection } from './settings-navigation'
  5: export function SettingsSectionNavigation({
  9:   readonly activeSection: SettingsSection
  10:   readonly onSelect: (section: SettingsSection) => void
  14:       <nav className="settings-section-index" aria-label="Settings sections">
  29:         <span>Settings section</span>
  32:           onChange={(event) => onSelect(event.currentTarget.value as SettingsSection)}

settings/HarnessProfilesSettings.tsx (9 match(es)):
  7: import { SettingsSection } from './SettingsSection'
  10: interface HarnessProfilesSettingsProps {
  16: export interface HarnessProfilesSettingsHandle {
  21: export const HarnessProfilesSettings = forwardRef<
  22:   HarnessProfilesSettingsHandle,
  23:   HarnessProfilesSettingsProps
  24: >(function HarnessProfilesSettings(
  66:     <SettingsSection
  194:     </SettingsSection>

main.tsx (2 match(es)):
  8: import { initializeAppSettings } from './settings/settings'
  12: initializeAppSettings(document.documentElement.style)

settings/SettingsSection.tsx (3 match(es)):
  5:   type SettingsSection as SettingsSectionId,
  8: export function SettingsSection({
  16:   readonly section: SettingsSectionId

App.tsx (13 match(es)):
  32: import { SettingsDialog } from './settings/SettingsDialog'
  33: import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
  46:   const settings = useAppSettings()
  432:           onSettings={() => overlays.openSettings()}
  636:           onOpenSettings={() => overlays.openSettings()}
  637:           onOpenTerminalSettings={() => overlays.openSettings('terminal')}
  638:           onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
  639:           onAddHarness={overlays.openAddHarnessSettings}
  663:         <SettingsDialog
  669:           onClose={overlays.closeSettings}
  670:           onSave={(nextTheme, nextSettings) => {
  672:             setAppSettings(nextSettings)
  673:             overlays.closeSettings()

settings/sections/GitSettings.tsx (8 match(es)):
  3: import { SettingsSection } from '../SettingsSection'
  4: import type { SettingsDraft } from '../settings-draft'
  6: export function GitSettings({
  10:   readonly draft: SettingsDraft
  11:   readonly onChange: <K extends keyof SettingsDraft>(
  13:     value: SettingsDraft[K],
  17:     <SettingsSection
  40:     </SettingsSection>

settings/sections/KeybindingsSettings.tsx (9 match(es)):
  3: import { SettingsSection } from '../SettingsSection'
  4: import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'
  6: export function KeybindingsSettings({
  11:   readonly draft: SettingsDraft
  12:   readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  13:   readonly onChange: <K extends keyof SettingsDraft>(
  15:     value: SettingsDraft[K],
  23:     <SettingsSection
  49:     </SettingsSection>

terminal/TerminalWorkspaceControls.tsx (7 match(es)):
  32:   onOpenSettings,
  33:   onOpenHarnessSettings,
  48:   readonly onOpenSettings: () => void
  49:   readonly onOpenHarnessSettings: () => void
  97:         onOpenSettings={onOpenSettings}
  111:         onOpenHarnessSettings={() => {
  113:           onOpenHarnessSettings()

settings/sections/TerminalSettings.tsx (12 match(es)):
  3: import { SettingsSection } from '../SettingsSection'
  4: import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'
  6: export function TerminalSettings({
  12:   readonly draft: SettingsDraft
  13:   readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  14:   readonly onChange: <K extends keyof SettingsDraft>(
  16:     value: SettingsDraft[K],
  22:     <SettingsSection
  38:                   event.currentTarget.value as SettingsDraft['terminalCursorShape'],
  57:                     event.currentTarget.value as SettingsDraft['terminalCursorBlink'],
  140:                 event.currentTarget.value as SettingsDraft['recoveryMode'],
  149:     </SettingsSection>

settings/sections/AppearanceSettings.tsx (9 match(es)):
  4: import { SettingsSection } from '../SettingsSection'
  5: import type { SettingsDraft } from '../settings-draft'
  15: export function AppearanceSettings({
  19:   readonly draft: SettingsDraft
  20:   readonly onChange: <K extends keyof SettingsDraft>(
  22:     value: SettingsDraft[K],
  29:     <SettingsSection
  54:                 event.currentTarget.value as SettingsDraft['terminalTheme'],
  131:     </SettingsSection>

terminal/TerminalContextMenu.tsx (4 match(es)):
  27:   readonly onOpenSettings: () => void
  38:   onOpenSettings,
  272:             onClick={() => runWorkspaceAction(onOpenSettings)}
  274:             Terminal Settings…

terminal/TerminalSessionRuntimes.tsx (3 match(es)):
  58:   readonly onOpenTerminalSettings: () => void
  92:   onOpenTerminalSettings,
  196:             onOpenTerminalSettings={onOpenTerminalSettings}

terminal/TerminalWorkspace.tsx (9 match(es)):
  75:   readonly onOpenSettings: () => void
  76:   readonly onOpenTerminalSettings: () => void
  77:   readonly onOpenHarnessSettings: () => void
  123:   onOpenSettings,
  124:   onOpenTerminalSettings,
  125:   onOpenHarnessSettings,
  367:         onOpenTerminalSettings={onOpenTerminalSettings}
  386:           onOpenSettings={onOpenSettings}
  387:           onOpenHarnessSettings={onOpenHarnessSettings}

terminal/TerminalView.tsx (2 match(es)):
  83:   readonly onOpenTerminalSettings: () => void
  235:         onOpenSettings={props.onOpenTerminalSettings}

terminal/TerminalRail.tsx (9 match(es)):
  44:   onOpenSettings,
  52:   onOpenHarnessSettings,
  74:   readonly onOpenSettings: () => void
  82:   readonly onOpenHarnessSettings: () => void
  186:             title="Settings"
  187:             onClick={onOpenSettings}
  195:               aria-label="New terminal"
  196:               title="New terminal"
  246:                   <button type="button" role="menuitem" onClick={onOpenHarnessSettings}>

terminal/TerminalDeck.tsx (4 match(es)):
  60:   onOpenTerminalSettings,
  103:   readonly onOpenTerminalSettings: () => void
  141:       onOpenTerminalSettings={onOpenTerminalSettings}
  159:               New terminal

terminal/TerminalWorkspaceCollection.tsx (9 match(es)):
  20:   readonly onOpenSettings: WorkspaceProps['onOpenSettings']
  21:   readonly onOpenTerminalSettings: WorkspaceProps['onOpenTerminalSettings']
  22:   readonly onOpenHarnessSettings: WorkspaceProps['onOpenHarnessSettings']
  37:   onOpenSettings,
  38:   onOpenTerminalSettings,
  39:   onOpenHarnessSettings,
  73:                   onOpenSettings={onOpenSettings}
  74:                   onOpenTerminalSettings={onOpenTerminalSettings}
  75:                   onOpenHarnessSettings={onOpenHarnessSettings}

workspaces/ProjectsBar.tsx (4 match(es)):
  56:   readonly onSettings: () => void
  81:   onSettings,
  310:             title="Settings"
  311:             onClick={onSettings}
```

</details>


---

<sub>42s</sub>

### Copilot

The project is an Electron desktop workbench, so I’m focusing the README on both first-use workflows and contributor setup rather than treating it as a library.

---

<sub>49s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-260)

<details>
<summary>245 lines</summary>

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
```

</details>


---

<sub>49s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-340)

<details>
<summary>337 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import {
  displayHostPath,
  type ProjectState,
  type RegisteredProjectState,
  type HostWatchTier,
  type WorkspaceState,
  type WorkspaceClosePlan,
} from '../../../shared'
import { RemoteConnectionBadge } from './ConnectionStatus'
import { connectionStateLabel } from './connection-status'
import type { WorkspaceAttentionRollups } from './project-session-model'
import {
  aggregateActionableWorkspaceAttention,
  aggregateWorkingWorkspaceTerminals,
  workspaceActionableAttention,
} from './workspace-attention'
import type { AppTheme } from '../theme'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
import {
  closeOnMiddleClick,
  guardMiddleClickClosePointerDown,
} from '../workbench/middle-click-close'
import { WorkbenchHealthControl } from '../health/WorkbenchHealthControl'
import { ClosedWorktreesDialog, CloseWorkspaceDialog } from './WorkspaceCatalogDialogs'

interface ProjectsBarProps {
  readonly state: ProjectState
  readonly rollups: WorkspaceAttentionRollups
  readonly busy: boolean
  readonly onAdd: () => void
  readonly onSwitch: (projectId: string, workspaceId: string) => void
  readonly onRefresh: (projectId: string) => void
  readonly onCloseProject: (projectId: string) => void
  readonly onPrune: (projectId: string) => void
  readonly onDismiss: (projectId: string, workspaceId: string) => void
  readonly onPlanCloseWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<WorkspaceClosePlan | undefined>
  readonly onCloseWorkspace: (
    projectId: string,
    workspaceId: string,
    plan: WorkspaceClosePlan,
    terminateTerminals: boolean,
  ) => void
  readonly onReopenWorkspace: (projectId: string, workspaceId: string) => void
  readonly watchTier: HostWatchTier
  readonly statusError?: string
  readonly onChangeConnection: () => void
  readonly onDisconnect: () => void
  readonly onReconnect: () => void
  readonly theme: AppTheme
  readonly onTheme: (theme: AppTheme) => void
  readonly onSettings: () => void
  readonly sessionsActive: boolean
  readonly onSessions: () => void
}

export function ProjectsBar({
  state,
  rollups,
  busy,
  onAdd,
  onSwitch,
  onRefresh,
  onCloseProject,
  onPrune,
  onDismiss,
  onPlanCloseWorkspace,
  onCloseWorkspace,
  onReopenWorkspace,
  watchTier,
  statusError,
  onChangeConnection,
  onDisconnect,
  onReconnect,
  theme,
  onTheme,
  onSettings,
  sessionsActive,
  onSessions,
}: ProjectsBarProps): ReactElement {
  const [pruneProjectId, setPruneProjectId] = useState<string>()
  const [closeProjectId, setCloseProjectId] = useState<string>()
  const [catalogProjectId, setCatalogProjectId] = useState<string>()
  const [planningWorkspaceId, setPlanningWorkspaceId] = useState<string>()
  const [closeWorkspaceRequest, setCloseWorkspaceRequest] = useState<{
    readonly projectId: string
    readonly workspaceId: string
    readonly plan: WorkspaceClosePlan
  }>()
  const [connectionMenu, setConnectionMenu] = useState<{
    readonly projectId: string
    readonly left: number
    readonly top: number
  }>()
  const connectionMenuRef = useRef<HTMLElement>(null)
  const activeProject = state.projects.find(
    (project) => project.id === state.activeProjectId,
  )
  const prunable =
    activeProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const openWorkspaces =
    activeProject?.workspaces.filter((workspace) => !workspace.closed) ?? []
  const closedWorkspaces =
    activeProject?.workspaces.filter((workspace) => workspace.closed) ?? []
  // A single-checkout project has nothing to switch between; reclaim the row.
  // Errors and prune prompts still force the bar because it is their only home.
  const showWorkspacesBar =
    activeProject !== undefined &&
    (openWorkspaces.length > 1 ||
      closedWorkspaces.length > 0 ||
      Boolean(statusError) ||
      prunable.length > 0)
  const pruneProject = state.projects.find((project) => project.id === pruneProjectId)
  const closeProject = state.projects.find((project) => project.id === closeProjectId)
  const catalogProject = state.projects.find((project) => project.id === catalogProjectId)
  const catalogWorkspaces =
    catalogProject?.workspaces.filter((workspace) => workspace.closed) ?? []
  const closeWorkspace = closeWorkspaceRequest
    ? state.projects
        .find((project) => project.id === closeWorkspaceRequest.projectId)
        ?.workspaces.find(
          (workspace) => workspace.id === closeWorkspaceRequest.workspaceId,
        )
    : undefined
  const pruneTargets =
    pruneProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const connectionProject =
    activeProject?.id === connectionMenu?.projectId ? activeProject : undefined
  useEffect(() => {
    setConnectionMenu((current) =>
      current && current.projectId !== state.activeProjectId ? undefined : current,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    setCatalogProjectId((current) =>
      current === state.activeProjectId ? current : undefined,
    )
    setCloseWorkspaceRequest((current) =>
      current?.projectId === state.activeProjectId ? current : undefined,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    if (!connectionMenu) return
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setConnectionMenu(undefined)
    }
    window.addEventListener('keydown', handleKeyDown)
    connectionMenuRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [connectionMenu])
  const canCloseWorkspace = (workspace: WorkspaceState): boolean =>
    !busy &&
    !workspace.missing &&
    workspace.id !== state.activeWorkspaceId &&
    planningWorkspaceId !== workspace.id
  const requestWorkspaceClose = (projectId: string, workspace: WorkspaceState): void => {
    if (!canCloseWorkspace(workspace)) return
    setPlanningWorkspaceId(workspace.id)
    void onPlanCloseWorkspace(projectId, workspace.id)
      .then((plan) => {
        if (!plan) return
        if (plan.terminalCount > 0) {
          setCloseWorkspaceRequest({
            projectId,
            workspaceId: workspace.id,
            plan,
          })
        } else {
          onCloseWorkspace(projectId, workspace.id, plan, false)
        }
      })
      .finally(() => setPlanningWorkspaceId(undefined))
  }
  return (
    <>
      <header className="projects-shell">
        <nav
          className="projects-bar"
          aria-label="Projects"
          data-diagnostic-capture="project-navigation"
        >
          <button
            type="button"
            className={`sessions-destination${sessionsActive ? ' active' : ''}`}
            aria-current={sessionsActive ? 'page' : undefined}
            onClick={onSessions}
          >
            Sessions
          </button>
          {state.projects.map((project) => {
            const active = !sessionsActive && project.id === state.activeProjectId
            const remote = project.registeredRoot.hostId !== 'local'
            const workspaceIds = project.workspaces.map((workspace) => workspace.id)
            const actionable = aggregateActionableWorkspaceAttention(
              workspaceIds,
              rollups,
            )
            const working = aggregateWorkingWorkspaceTerminals(workspaceIds, rollups)
            const showWorking = working > 0 && actionable === 0
            const title = projectTabTitle(project, working)
            const target = activeWorkspace(project)
            return (
              <div
                className={`project-tab${active ? ' active' : ''}`}
                key={project.id}
                title={title}
              >
                <button
                  type="button"
                  className="project-tab-main"
                  aria-current={active ? 'page' : undefined}
                  aria-label={projectTabLabel(project, actionable, working)}
                  disabled={busy || !target}
                  onClick={() => target && onSwitch(project.id, target.id)}
                  title={title}
                >
                  <strong className={showWorking ? 'project-name-working' : undefined}>
                    {project.displayName}
                  </strong>
                  {remote && !active ? (
                    <RemoteConnectionBadge
                      state={project.connectionState}
                      hostLabel={`ssh:${project.registeredRoot.hostId}`}
                      compact
                    />
                  ) : null}
                  {actionable > 0 ? <AttentionCount count={actionable} /> : null}
                </button>
                {remote && active ? (
                  <button
                    type="button"
                    className="project-connection-trigger"
                    disabled={busy}
                    aria-haspopup="dialog"
                    aria-expanded={connectionMenu?.projectId === project.id}
                    aria-label={`Connection controls for ssh:${project.registeredRoot.hostId} · ${connectionStateLabel(project.connectionState)}`}
                    title="Connection controls"
                    onClick={(event) => {
                      if (connectionMenu?.projectId === project.id) {
                        setConnectionMenu(undefined)
                        return
                      }
                      const bounds = event.currentTarget.getBoundingClientRect()
                      setConnectionMenu({
                        projectId: project.id,
                        left: Math.max(8, Math.min(bounds.left, window.innerWidth - 248)),
                        top: bounds.bottom + 4,
                      })
                    }}
                  >
                    <RemoteConnectionBadge
                      state={project.connectionState}
                      hostLabel={`ssh:${project.registeredRoot.hostId}`}
                      compact
                    />
                    <span className="project-connection-chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                ) : null}
                <button
                  type="button"
                  className="project-close"
                  disabled={busy || state.projects.length <= 1}
                  onClick={() => setCloseProjectId(project.id)}
                  aria-label={`Close project ${project.displayName}`}
                  title={
                    state.projects.length <= 1
                      ? 'Register another project before closing this one'
                      : `Close project ${project.displayName}`
                  }
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            )
          })}
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
            title={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          </button>
          <button
            type="button"
            className="settings-toggle"
            aria-label="Open settings"
            title="Settings"
            onClick={onSettings}
          >
            <span aria-hidden="true">⚙</span>
          </button>
          <span className="projects-bar-spacer" />
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
```

</details>


---

<sub>49s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/shared/keybindings.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/shared/keybindings.ts (lines 1-240)

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

<sub>49s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/HarnessProfilesSettings.tsx (lines 55-200)

<details>
<summary>141 lines</summary>

```
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

<sub>49s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/build/linux/after-install.sh.**

/private/var/tmp/ws/d493c7da/hvir/build/linux/after-install.sh

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

<sub>49s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/settings-navigation.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/settings-navigation.ts

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

<sub>49s</sub>

### `bash`

**Inspect installer resources and local prerequisites**

$ printf 'Build resources:\n' && find build -maxdepth 3 -type f | sort && printf '\nProject-host implementation files:\n' && find src/main/project-host -maxdepth 2 -type f | sort | head -100 && printf '\nRuntime versions:\n' && node --version && npm --version && printf '\nInstalled native runtime status:\n' && ls node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node node_modules/node-pty/build/Release/pty.node 2>&1

<details>
<summary>49 lines</summary>

```
Build resources:
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

Project-host implementation files:
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

Runtime versions:
v26.5.0
11.17.0

Installed native runtime status:
node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
node_modules/node-pty/build/Release/pty.node
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>49s</sub>

### `rg`

**(config|known_hosts|ssh-agent|private key|IdentityFile|ProxyJump|SSH_AUTH_SOCK|SSH)**

"(config|known_hosts|ssh-agent|private key|IdentityFile|ProxyJump|SSH_AUTH_SOCK|SSH)" in *.ts (src/main/project-host)

<details>
<summary>127 matches</summary>

```
[grep content: 115 matches across 16 file(s) under src/main/project-host]

ssh-exclusive-create.ts (2 match(es)):
  42:         throw new Error('SSH host did not create the approved empty regular file')
  77:         throw new Error('SSH host did not create the approved empty directory')

ssh-transport-pool.ts (19 match(es)):
  5: export const SSH_MAX_PHYSICAL_TRANSPORTS = 8
  6: export const SSH_MAX_CONTROL_TRANSPORTS = 2
  7: export const SSH_CONTROL_CHANNEL_BUDGET = 6
  8: export const SSH_TERMINAL_CHANNEL_BUDGET = 8
  9: export const SSH_TUNNEL_CHANNEL_BUDGET = 16
  10: export const SSH_MAX_TUNNEL_TRANSPORTS = 2
  11: export const SSH_TRANSPORT_IDLE_GRACE_MS = 5 * 60_000
  13: const SSH_CHANNEL_OPEN_ATTEMPTS = 5
  95:     channelOpenAttempts = SSH_CHANNEL_OPEN_ATTEMPTS,
  181:           ? SSH_CONTROL_CHANNEL_BUDGET
  183:             ? SSH_TUNNEL_CHANNEL_BUDGET
  184:             : SSH_TERMINAL_CHANNEL_BUDGET,
  262:           live.length >= SSH_MAX_PHYSICAL_TRANSPORTS ||
  263:           (role === 'control' && roleCount >= SSH_MAX_CONTROL_TRANSPORTS) ||
  264:           (role === 'tunnel' && roleCount >= SSH_MAX_TUNNEL_TRANSPORTS)
  275:             `SSH ${role} capacity could not grow; existing sessions remain connected: ${asError(error).message}`,
  296:     attempts = SSH_CHANNEL_OPEN_ATTEMPTS,
  369:     }, SSH_TRANSPORT_IDLE_GRACE_MS)
  392:     `SSH ${role} capacity is full (${SSH_MAX_PHYSICAL_TRANSPORTS} transport limit); existing sessions remain connected`,
ssh-auth.ts:12: /** Presentation port for one revocable SSH connection generation. */

project-host-catalog.ts (18 match(es)):
  8: import { parseSshConfig, type SshAliasConfig } from './ssh-config'
  21: /** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
  56:         options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
  74:       ...this.aliases.map((config) => {
  75:         const host = this.hosts.get(config.alias)
  77:           ? hostOption(host, config.alias, 'ssh')
  79:               hostId: config.alias,
  80:               label: config.alias,
  118:     if (!host) throw new Error(`SSH host is not connected: ${hostId}`)
  149:     const config = this.aliases.find((candidate) => candidate.alias === hostId)
  150:     if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
  155:       config,
  158:         identityFileCandidates(config, this.home),
  162:       trust: this.trust.forAlias(config.alias),
  185: /** OpenSSH's conventional identity set applies when no IdentityFile is configured. */
  187:   config: SshAliasConfig,
  190:   if (config.identityFiles.length) return [...new Set(config.identityFiles)]
  200:       await host.readTextFile(localPath(join(home, '.ssh/config'))),

index.ts (10 match(es)):
  34:   SSH_CONTROL_CHANNEL_BUDGET,
  35:   SSH_DEFAULT_MAX_CONCURRENT_EXECS,
  36:   SSH_MAX_CONTROL_TRANSPORTS,
  37:   SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS,
  38:   SSH_MAX_PHYSICAL_TRANSPORTS,
  39:   SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS,
  40:   SSH_TERMINAL_CHANNEL_BUDGET,
  41:   SSH_TRANSPORT_IDLE_GRACE_MS,
  51: export { parseSshConfig } from './ssh-config'
  52: export type { SshAliasConfig } from './ssh-config'
renderer-ssh-prompter.ts:15: /** Renderer presentation adapter; SSH policy and cancellation remain host-owned. */

ssh-client-lifecycle.ts (2 match(es)):
  18:   config: ConnectConfig,
  67:     client.connect(config)

ssh-host-trust.ts (2 match(es)):
  46:     if (!VALID_ALIAS.test(alias)) throw new Error('Invalid SSH host alias')
  55:       return Promise.reject(new Error('Invalid SSH host-key fingerprint'))
ssh-file-access.ts:355:         throw new Error('SSH SFTP session belongs to a stale connection generation')

ssh-host.ts (48 match(es)):
  46:   SSH_CONTROL_CHANNEL_BUDGET,
  47:   SSH_MAX_CONTROL_TRANSPORTS,
  48:   SSH_MAX_PHYSICAL_TRANSPORTS,
  49:   SSH_TERMINAL_CHANNEL_BUDGET,
  50:   SSH_TRANSPORT_IDLE_GRACE_MS,
  54: export const SSH_DEFAULT_MAX_CONCURRENT_EXECS = 4
  55: export const SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS = 4
  56: export const SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS = 5_000
  104:     this.hostId = asHostId(options.config.alias)
  145:     const requestedExecs = options.maxConcurrentExecs ?? SSH_DEFAULT_MAX_CONCURRENT_EXECS
  152:           : SSH_DEFAULT_MAX_CONCURRENT_EXECS,
  197:     this.cancelConnecting?.(new Error('SSH connection cancelled'))
  206:       waiter.reject(new Error('SSH connection cancelled'))
  292:             if (!settled) reject(new Error('SSH exec output exceeded maxBuffer'))
  528:       // Some SSH servers close a PTY channel without sending exit-status.
  538:         if (exited) return Promise.reject(new Error('SSH PTY already exited'))
  555:                 'SSH PTY exited before write completion',
  563:                   'SSH PTY write completion timed out',
  566:             SSH_PTY_WRITE_CONFIRM_TIMEOUT_MS,
  640:     const config = this.connectConfig(
  648:     const authentication = startSshAuthentication(client, config, {
  649:       closedBeforeReadyError: 'SSH connection closed before authentication completed',
  675:       throw new Error('SSH connection was replaced before it became ready')
  709:     const { config, agentSocket, prompter } = this.options
  721:               title: `Additional SSH capacity — ${request.title}`,
  738:       host: config.hostname,
  739:       port: config.port,
  740:       username: config.user,
  765:             ? `Host key changed for ${config.alias}`
  766:             : `Trust ${config.alias}?`,
  800:           // available. Start our configured ladder and narrow it after the
  807:             return { type: 'agent', username: config.user, agent: agentSocket }
  837:               username: config.user,
  846:               username: config.user,
  849:                 if (keyboardInteractiveRounds > SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS) {
  857:                   title: name || `Authenticate to ${config.alias}`,
  876:                 title: `Authenticate to ${config.alias}`,
  877:                 prompts: [{ text: `Password for ${config.user}`, echo: false }],
  882:               return { type: 'password', username: config.user, password }
  981:     const config = this.connectConfig(
  991:       const authentication = startSshAuthentication(client, config, {
  993:           'SSH pool transport closed before authentication completed',
  1006:         throw new Error('SSH pool transport closed before it became available')
  1029:         `SSH ${role} capacity is unavailable after authentication was cancelled or refused`,
  1036:       throw new Error('SSH host is disconnected; reconnect explicitly before retrying')
  1039:     if (!this.client || this.state !== 'connected') throw new Error('SSH disconnected')
  1047:         new Error('SSH host is disconnected; reconnect explicitly before retrying'),
  1080:           waiter.reject(new Error('SSH connection cancelled'))

ssh-host-options.ts (2 match(es)):
  4: import type { SshAliasConfig } from './ssh-config'
  9:   readonly config: SshAliasConfig

project-host.ts (2 match(es)):
  74:    * interests bounded without consuming one SSH channel per directory.
  189:   /** Keep this user-visible file on the SSH polling fast path. */
ssh-text-prefix.ts:70:       if (!ended) finish(new Error('SSH text prefix read closed before completion'))

ssh-config.ts (3 match(es)):
  1: import SSHConfig from 'ssh-config'
  12:   const parsed = SSHConfig.parse(text)
  14:     if (!('param' in line) || !('config' in line)) return []

ssh-abort.ts (2 match(es)):
  32:   const onClose = () => finish(new Error('SSH file write closed before completion'))
  51:         reject(reason instanceof Error ? reason : new Error('SSH file operation failed'))
ssh-identity-source.ts:104:     if (!this.value) throw new Error('SSH identity lease is released')
```

</details>


---

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/project-host/ssh-config.ts

<details>
<summary>46 lines</summary>

```
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
```

</details>


---

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/project-host/project-host-catalog.ts (lines 1-220)

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

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-220)

<details>
<summary>211 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import {
  basenameHostPath,
  canRender,
  renderedFileType,
  type DiffBase,
  type ViewMode,
  type GitBlameRun,
  type HostPath,
} from '../../../shared'
import { DiffView } from './DiffView'
import { FindControl } from './FindControl'
import { GoToLineControl } from './GoToLineControl'
import { RenderedView } from './RenderedView'
import { SourceView } from './SourceView'
import { LargeFileView } from './LargeFileView'
import { useSourceBlame } from './use-source-blame'
import { formatViewerBytes } from './viewer-byte-format'
import type { SourceCoordinate } from './source-coordinate'
import type {
  ViewerDocumentPosition,
  ViewerNavigationPosition,
  ViewerTab,
} from './tab-state'
import type { RegisterViewerCommandTarget } from './viewer-command-targets'
import {
  viewerFindUnavailable,
  type RegisterViewerFindTarget,
  type ViewerFindTarget,
} from './viewer-find'
import type { ViewerPositionCapture } from './viewer-position'
import {
  canUseInteractiveSource,
  sourcePreview,
  SOURCE_INTERACTIVE_BYTE_LIMIT,
} from './viewer-workload-policy'
import {
  DocumentReviewChrome,
  DocumentReviewToolbar,
} from '../document-review/DocumentReviewControls'
import { DocumentReviewInlineProvider } from '../document-review/DocumentReviewInlineSurface'
import {
  useDocumentReviewInteraction,
  type DocumentReviewDocumentProjection,
  type DocumentReviewWorkspaceBinding,
} from '../document-review/use-document-review-interaction'

interface FileViewerProps {
  readonly tab?: ViewerTab
  readonly gitRefreshVersion: number
  readonly onMode: (mode: ViewMode, position?: ViewerDocumentPosition) => void
  readonly onDiffBase: (base: DiffBase) => void
  readonly onContent: (content: string) => void
  readonly onSave: () => void
  readonly onReload: () => void
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly onNavigationHandled: (serial: number) => void
  readonly registerCommands: RegisterViewerCommandTarget
  readonly onOpenPath: (path: HostPath) => void
  readonly onRenderedDependencies: (tabId: string, paths: readonly HostPath[]) => void
  readonly documentReview?: DocumentReviewWorkspaceBinding
}

export function FileViewer({
  tab,
  gitRefreshVersion,
  onMode,
  onDiffBase,
  onContent,
  onSave,
  onReload,
  onPosition,
  onNavigationHandled,
  registerCommands,
  onOpenPath,
  onRenderedDependencies,
  documentReview,
}: FileViewerProps): ReactElement {
  const [showBlame, setShowBlame] = useState(false)
  const [modeControlExpanded, setModeControlExpanded] = useState(false)
  const [manualNavigation, setManualNavigation] = useState<ViewerNavigationPosition>()
  const [findTarget, setFindTarget] = useState<ViewerFindTarget>()
  const [findRequest, setFindRequest] = useState<number>()
  const [goToLineRequest, setGoToLineRequest] = useState<number>()
  const manualNavigationSerial = useRef(0)
  const commandSerial = useRef(0)
  const modeControlRef = useRef<HTMLDivElement>(null)
  const tabId = tab?.id
  const currentPath = tab?.path
  const blameMode = tab?.externalWorkspaceRoot ? undefined : tab?.mode
  const positionCapture = useRef<(() => ViewerDocumentPosition) | undefined>(undefined)
  const binaryImage = Boolean(tab?.file?.binary && renderedFileType(tab.path) === 'image')
  const boundedPreview = Boolean(
    tab?.file && tab.file.size > SOURCE_INTERACTIVE_BYTE_LIMIT,
  )
  const navigationContent =
    tab?.file && !tab.file.binary
      ? boundedPreview
        ? sourcePreview(tab.file.content)
        : tab.file.content
      : undefined
  const documentRefreshVersion = tab?.refresh?.version ?? 0
  const { blame, blameStatus } = useSourceBlame(
    currentPath,
    blameMode,
    showBlame,
    documentRefreshVersion,
    gitRefreshVersion,
  )

  const registerFindTarget: RegisterViewerFindTarget = useCallback((target) => {
    setFindTarget(target)
    let active = true
    return () => {
      if (!active) return
      active = false
      setFindTarget((current) => (current === target ? undefined : current))
    }
  }, [])

  const reportRenderedDependencies = useCallback(
    (paths: readonly HostPath[]): void => {
      if (tabId) onRenderedDependencies(tabId, paths)
    },
    [onRenderedDependencies, tabId],
  )

  const navigate = useCallback(
    (coordinate: SourceCoordinate): void => {
      setManualNavigation({
        ...coordinate,
        serial: (manualNavigationSerial.current -= 1),
        focus: true,
      })
      onMode('source', positionCapture.current?.())
    },
    [onMode],
  )
  const navigateReviewLine = useCallback(
    (line: number): void => navigate({ line }),
    [navigate],
  )
  const reviewInteraction = useDocumentReviewInteraction(
    tab?.file && !tab.file.binary && !tab.externalWorkspaceRoot
      ? {
          path: tab.path,
          content: tab.file.content,
          dirty: tab.dirty,
          mode: tab.mode,
        }
      : undefined,
    documentReview,
    navigateReviewLine,
  )

  const handleNavigation = (serial: number): void => {
    if (manualNavigation?.serial === serial) setManualNavigation(undefined)
    else onNavigationHandled(serial)
  }

  useEffect(() => {
    if (!tabId) return
    return registerCommands(tabId, {
      findInFile: () => setFindRequest((commandSerial.current += 1)),
      goToLine: () => setGoToLineRequest((commandSerial.current += 1)),
    })
  }, [registerCommands, tabId])

  useEffect(() => {
    if (!modeControlExpanded) return
    const collapseOutside = (event: PointerEvent): void => {
      if (
        event.target instanceof Node &&
        !modeControlRef.current?.contains(event.target)
      ) {
        setModeControlExpanded(false)
      }
    }
    document.addEventListener('pointerdown', collapseOutside, true)
    return () => document.removeEventListener('pointerdown', collapseOutside, true)
  }, [modeControlExpanded])

  return (
    <div className="viewer-body">
      {tab ? (
        <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
          {tab.conflict ? (
            <button className="conflict-badge" type="button" onClick={onReload}>
              Changed on disk · reload
            </button>
          ) : null}
          {tab.error && tab.file ? (
            <span className="viewer-operation-error" role="status" title={tab.error}>
              Save failed
            </span>
          ) : null}
          <div className="view-controls">
            {tab.externalWorkspaceRoot ? (
              <span className="external-document-status">
                Read-only · outside project
                <span
                  className="external-document-location"
                  title={`${tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:${tab.file?.resolvedPath?.path ?? tab.path.path}`}
                >
                  {tab.file?.resolvedPath?.hostId ?? tab.path.hostId}:
                  {tab.file?.resolvedPath?.path ?? tab.path.path}
                </span>
              </span>
            ) : null}
            <DocumentReviewToolbar interaction={reviewInteraction} mode={tab.mode} />
            <FindControl
              key={`${tab.id}:${tab.pane}:${tab.mode}`}
              requestSerial={findRequest}
              target={findTarget}
              unavailable={viewerFindUnavailable(tab)}
              boundedPreview={boundedPreview && tab.mode !== 'rendered'}
              onRequestHandled={(serial) =>
                setFindRequest((current) => (current === serial ? undefined : current))
              }
```

</details>


---

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/git/GitPanel.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/git/GitPanel.tsx (lines 1-210)

<details>
<summary>129 lines</summary>

```
import type { ReactElement } from 'react'

import {
  basenameHostPath,
  type DiffBase,
  type GitChanges,
  type HostConnectionState,
  type HostPath,
} from '../../../shared'
import { GitBranchControls } from './GitBranchControls'
import { GitChangesView } from './GitChangesView'
import { GitHistoryView } from './GitHistoryView'
import { useGitCommitDetails } from './use-git-commit-details'
import { useGitRailController } from './use-git-rail-controller'

interface GitPanelProps {
  readonly root: HostPath
  readonly refreshVersion: number
  readonly historyRefreshVersion: number
  readonly onOpenChange: (path: HostPath, base: DiffBase, untracked?: boolean) => void
  readonly onOpenHistory: (path: HostPath, revision: string) => void
  readonly onOpenGraph: (hash?: string) => void
  readonly onChanges: (changes: GitChanges | undefined) => void
  readonly connectionState?: HostConnectionState
  readonly hidden?: boolean
  readonly historyPaused?: boolean
  readonly hasDirtyViewerTabs: boolean
  readonly onSwitchBranch: (branch: string) => Promise<void>
  readonly onFetch: () => Promise<void>
  readonly onPull: () => Promise<void>
  readonly autoFetchIntervalMs: number
}

export function GitPanel({
  root,
  refreshVersion,
  historyRefreshVersion,
  onOpenChange,
  onOpenHistory,
  onOpenGraph,
  onChanges,
  connectionState = 'connected',
  hidden = false,
  historyPaused = false,
  hasDirtyViewerTabs,
  onSwitchBranch,
  onFetch,
  onPull,
  autoFetchIntervalMs,
}: GitPanelProps): ReactElement {
  const controller = useGitRailController({
    root,
    refreshVersion,
    historyRefreshVersion,
    onChanges,
    connectionState,
    hidden,
    historyPaused,
    hasDirtyViewerTabs,
    onSwitchBranch,
    onFetch,
    onPull,
    autoFetchIntervalMs,
  })
  const details = useGitCommitDetails(root)
  const { model } = controller

  return (
    <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
      <header className="panel-header">
        <span className="panel-meta">{basenameHostPath(root)}</span>
      </header>
      <GitBranchControls
        root={root}
        model={model}
        syncState={controller.syncState}
        onSwitchBranch={(branch) => void controller.switchBranch(branch)}
        onFetch={controller.fetch}
        onPull={controller.pull}
      />
      <div className="git-tabs">
        <button
          type="button"
          className={model.view === 'changes' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('changes')}
        >
          Changes {controller.changeCountLabel ? `(${controller.changeCountLabel})` : ''}
        </button>
        <button
          type="button"
          className={model.view === 'history' ? 'active' : ''}
          disabled={connectionState !== 'connected'}
          onClick={() => controller.selectView('history')}
        >
          History
        </button>
      </div>
      <div
        className={`tree-scroll git-scroll${model.view === 'history' ? ' history-active' : ''}`}
      >
        {connectionState !== 'connected' ? (
          <div className="git-empty">Reconnect to inspect Git.</div>
        ) : model.view === 'changes' ? (
          <GitChangesView
            root={root}
            changes={model.changes}
            loading={model.changesLoading}
            error={model.changesError}
            onOpen={onOpenChange}
          />
        ) : (
          <GitHistoryView
            commits={model.commits}
            hasMore={model.hasMore}
            error={model.historyError}
            initialLoading={model.historyInitialLoading}
            repositoryState={model.historyRepositoryState}
            root={root}
            expanded={details.expanded}
            detailStates={details.detailStates}
            collapsedDirectories={details.collapsedDirectories}
            onOpenGraph={onOpenGraph}
            onOpenFile={onOpenHistory}
            onLoadMore={controller.loadMoreHistory}
            onToggleCommit={details.toggleCommit}
            onToggleDirectory={details.toggleDirectory}
          />
        )}
      </div>
    </section>
  )
}
```

</details>


---

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/terminal/TerminalRail.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/terminal/TerminalRail.tsx (lines 170-290)

<details>
<summary>121 lines</summary>

```
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
              key={session.id}
              className={`terminal-list-row${session.id === activeId ? ' active' : ''}${session.dormant ? ' dormant' : ''}`}
              data-terminal-dormant={session.dormant ? 'true' : undefined}
              role="listitem"
            >
              <button
                type="button"
                className="terminal-list-main"
                data-terminal-session={session.id}
                onClick={() => onFocusSession(session.id)}
              >
                <span className="terminal-list-copy">
                  <span className="terminal-list-title">{session.title}</span>
                  <span className="terminal-list-meta">
                    <span className="terminal-list-profile">
                      {profileDisplayName(profiles, session.profileId)}
                    </span>{' '}
                    · {session.status}
                    {identityLabel(session.identityStatus)}
                  </span>
                  {contextPresentation === 'count' ||
                  contextPresentation === 'pressure' ? (
                    <TerminalContextMeter
                      telemetry={session.telemetry}
                      countOnly={contextPresentation === 'count'}
                      pressurePolicy={provider?.capabilities.contextPressure}
                    />
                  ) : null}
                </span>
                {session.attention ? (
```

</details>


---

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/build/pkg-scripts/postinstall.**

/private/var/tmp/ws/d493c7da/hvir/build/pkg-scripts/postinstall

<details>
<summary>126 lines</summary>

```
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
```

</details>


---

<sub>1m 4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/index.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/index.ts (lines 1-220)

<details>
<summary>220 lines</summary>

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
```

</details>


---

<sub>1m 4s</sub>

### `rg`

**(project-root|defaultProject|initialProject|initialRoot|process\.cwd|app\.getPath\('home'\))**

"(project-root|defaultProject|initialProject|initialRoot|process\.cwd|app\.getPath\('home'\))" in *.ts (src/main)

<details>
<summary>13 matches</summary>

```
src/main/index.ts:178:          defaultPath: process.cwd(),
src/main/index.ts:430:    const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
src/main/index.ts:431:    return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
src/main/index.ts:440:          projectRoot: localPath(projectRootArgument() ?? process.cwd()),
src/main/project-registry.ts:92:    initialRoot: HostPath,
src/main/project-registry.ts:98:    const initialProject = projects[0] ?? createProject(initialRoot)
src/main/project-registry.ts:99:    if (projects.length === 0) projects.push(initialProject)
src/main/project-registry.ts:100:    const initialWorkspace = initialProject.workspaces[0]!
src/main/project-registry.ts:104:      projectId: initialProject.id,
src/main/project-registry.ts:111:    initialRoot: HostPath,
src/main/project-registry.ts:117:    initialRoot: HostPath | undefined,
src/main/project-registry.ts:124:    initialRoot: HostPath | undefined,
src/main/project-registry.ts:133:    let canonicalRoot = initialRoot ? await local.realpath(initialRoot) : undefined
```

</details>


---

<sub>1m 4s</sub>

### `rg`

**(displayName:|executable:|command:|id:)**

"(displayName:|executable:|command:|id:)" in *.ts (src/main/harness/providers)

<details>
<summary>38 matches</summary>

```
[grep content: 30 matches across 7 file(s) under src/main/harness/providers]

codex.ts (4 match(es)):
  45:     id: asHarnessProviderId('codex'),
  46:     displayName: 'Codex',
  55:       id: asHarnessProfileId('codex-default'),
  56:       displayName: 'Codex',

github-copilot.ts (4 match(es)):
  6:     id: asHarnessProviderId('github-copilot-cli'),
  7:     displayName: 'GitHub Copilot CLI',
  14:       id: asHarnessProfileId('github-copilot-cli-default'),
  15:       displayName: 'GitHub Copilot CLI',

shell.ts (6 match(es)):
  11:     id: asHarnessProviderId('plain-shell'),
  12:     displayName: 'Shell',
  20:       id: asHarnessProfileId('plain-shell-default'),
  21:       displayName: 'Shell',
  46:     id: asHarnessProviderId('custom'),
  47:     displayName: 'Custom',

gemini.ts (4 match(es)):
  6:     id: asHarnessProviderId('gemini-cli'),
  7:     displayName: 'Gemini CLI',
  14:       id: asHarnessProfileId('gemini-cli-default'),
  15:       displayName: 'Gemini CLI',

pi.ts (4 match(es)):
  6:     id: asHarnessProviderId('pi'),
  7:     displayName: 'Pi',
  14:       id: asHarnessProfileId('pi-default'),
  15:       displayName: 'Pi',

claude-code.ts (4 match(es)):
  30:     id: asHarnessProviderId('claude-code'),
  31:     displayName: 'Claude Code',
  41:       id: asHarnessProfileId('claude-code-default'),
  42:       displayName: 'Claude Code',

cursor.ts (4 match(es)):
  6:     id: asHarnessProviderId('cursor-cli'),
  7:     displayName: 'Cursor CLI',
  14:       id: asHarnessProfileId('cursor-cli-default'),
  15:       displayName: 'Cursor CLI',
```

</details>


---

<sub>1m 4s</sub>

### `bash`

**Check documentation conventions and validation hooks**

$ printf 'Tracked docs and README paths:\n' && git ls-files 'docs/**' '*README*' 'README.md' | head -30 && printf '\nElectron runtime:\n' && node -p "require('electron/package.json').version" && printf '\nREADME-related tests:\n' && rg -l 'README\.md|markdownFiles|broken local link' test scripts --glob '*.{ts,mts,mjs,js}' | head -35

<details>
<summary>6 lines</summary>

```
Tracked docs and README paths:

Electron runtime:
43.4.1

README-related tests:
/bin/bash: rg: command not found
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/application-runtime.ts

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

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/application-runtime-policy.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/application-runtime-policy.ts (lines 1-220)

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

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/project-registry.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/project-registry.ts (lines 105-200)

<details>
<summary>93 lines</summary>

```
      workspaceId: initialWorkspace.id,
    }
    this.stopHostState = hostCatalog.onHostStateChange(() => this.publishState())
  }

  static async create(
    initialRoot: HostPath,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
  ): Promise<ProjectRegistry>
  static async create(
    initialRoot: HostPath | undefined,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
    selectInitialRoot: () => Promise<HostPath | undefined>,
  ): Promise<ProjectRegistry | undefined>
  static async create(
    initialRoot: HostPath | undefined,
    hostCatalog: ProjectRegistryHostCatalog,
    registryFile: string,
    onState: (state: ProjectState) => void,
    selectInitialRoot?: () => Promise<HostPath | undefined>,
  ): Promise<ProjectRegistry | undefined> {
    const local = hostCatalog.local
    const file = localPath(registryFile)
    const stored = await loadProjects(local, file)
    let canonicalRoot = initialRoot ? await local.realpath(initialRoot) : undefined
    if (!canonicalRoot && !stored?.projects.length) {
      const selected = await selectInitialRoot?.()
      if (!selected) return undefined
      canonicalRoot = await local.realpath(selected)
    }
    const projects = stored?.projects.length ? stored.projects : []
    let activeProjectId = stored?.activeProjectId
    if (canonicalRoot) {
      let selectedProject = projects.find(
        (project) =>
          hostPathEquals(project.registeredRoot, canonicalRoot) ||
          project.workspaces.some((workspace) =>
            hostPathEquals(workspace.root, canonicalRoot),
          ),
      )
      if (!selectedProject) {
        if (projects.length >= MAX_PROJECTS) throw new Error('Project registry is full')
        selectedProject = createProject(canonicalRoot)
        projects.push(selectedProject)
      }
      const selectedWorkspace = selectedProject.workspaces.find((workspace) =>
        hostPathEquals(workspace.root, canonicalRoot),
      )
      if (selectedWorkspace && !selectedWorkspace.missing) {
        const selectedIndex = selectedProject.workspaces.indexOf(selectedWorkspace)
        const opened = openWorkspaceRecord(selectedWorkspace)
        selectedProject.workspaces[selectedIndex] = opened
        selectedProject.activeWorkspaceId = opened.id
      }
      activeProjectId = selectedProject.id
    }
    const fallbackRoot = canonicalRoot ?? projects[0]?.registeredRoot
    if (!fallbackRoot || !activeProjectId) return undefined
    const registry = new ProjectRegistry(
      hostCatalog,
      fallbackRoot,
      file,
      projects,
      activeProjectId,
      onState,
    )
    try {
      await registry.restoreActive()
      if (!stored || canonicalRoot) await registry.persist()
      return registry
    } catch (error) {
      await registry.dispose()
      throw error
    }
  }

  get active(): ActiveProject {
    return this.activeProject
  }

  state(): ProjectState {
    const activeHost = this.activeProject.host
    return {
      revision: this.stateRevision,
      root: this.activeProject.root,
      connectionState: activeHost.connectionState,
      watchTier: activeHost.watchTier,
      projects: this.projects.map((project) => this.rendererProject(project)),
      activeProjectId: this.activeProject.projectId,
      activeWorkspaceId: this.activeProject.workspaceId,
    }
  }
```

</details>


---

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/harness/providers/shell.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/harness/providers/shell.ts

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

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/harness/providers/codex.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/harness/providers/codex.ts (lines 1-150)

<details>
<summary>140 lines</summary>

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
```

</details>


---

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx (lines 1-200)

<details>
<summary>135 lines</summary>

```
import type { ReactElement } from 'react'

import type { DocumentReviewDeliveryInteraction } from './use-document-review-delivery'

export function DocumentReviewDeliveryPanel({
  delivery,
}: {
  readonly delivery: DocumentReviewDeliveryInteraction
}): ReactElement | null {
  if (!delivery.open) return null
  const selected = delivery.selectedDestination
  return (
    <section className="document-review-delivery" aria-label="Review handoff preview">
      <header>
        <strong>Review and send</strong>
        <button type="button" onClick={delivery.close}>
          Close preview
        </button>
      </header>
      <label>
        <span>Exact destination</span>
        <select
          aria-label="Review handoff destination"
          value={delivery.selectedTerminalId ?? ''}
          disabled={delivery.loading || delivery.destinations.length === 0}
          onChange={(event) => delivery.selectDestination(event.currentTarget.value)}
        >
          <option value="">Choose a live terminal…</option>
          {delivery.destinations.map((destination) => (
            <option key={destination.terminalId} value={destination.terminalId}>
              {destination.title} · {destination.providerName} ·{' '}
              {destination.capability === 'send-now'
                ? 'Send now supported'
                : destination.capability === 'insert'
                  ? 'Insert supported'
                  : 'Copy only'}
            </option>
          ))}
        </select>
      </label>
      {!delivery.loading && delivery.destinations.length === 0 ? (
        <p className="document-review-guidance" role="status">
          No live terminals are available in this host-qualified workspace. You can still
          copy the exact preview.
        </p>
      ) : null}
      {selected ? (
        <dl className="document-review-destination">
          <div>
            <dt>Terminal</dt>
            <dd>{selected.title}</dd>
          </div>
          <div>
            <dt>Provider</dt>
            <dd>{selected.providerName}</dd>
          </div>
          <div>
            <dt>Lifecycle</dt>
            <dd>
              {selected.lifecycle} · host {selected.connection}
            </dd>
          </div>
          <div>
            <dt>Attention</dt>
            <dd>{selected.attention ?? 'none'}</dd>
          </div>
        </dl>
      ) : null}
      {selected?.attention === 'bell' ? (
        <p className="document-review-warning" role="alert">
          This terminal is requesting attention. Resolve its current prompt or state
          before inserting.
        </p>
      ) : null}
      {delivery.payload ? (
        <>
          <pre
            className="document-review-delivery-payload"
            aria-label="Exact review delivery preview"
          >
            {delivery.payload.body}
          </pre>
          <p className="document-review-delivery-size">
            Exact UTF-8 body · {delivery.payload.byteLength.toLocaleString()} bytes
          </p>
          <div className="document-review-delivery-actions">
            <button type="button" disabled={delivery.loading} onClick={delivery.copy}>
              {delivery.copied ? 'Copied' : 'Copy review'}
            </button>
            <button
              type="button"
              disabled={
                delivery.loading ||
                delivery.inserted ||
                delivery.sent ||
                !delivery.prepared
              }
              title={
                delivery.prepared
                  ? 'Insert one atomic bracketed paste without submitting'
                  : selected?.capability === 'copy-only'
                    ? 'This provider is Copy-only'
                    : 'Choose an Insert-supported terminal'
              }
              onClick={delivery.insert}
            >
              {delivery.inserted ? 'Inserted' : 'Insert review'}
            </button>
            <button
              type="button"
              disabled={
                delivery.loading ||
                delivery.inserted ||
                delivery.sent ||
                delivery.prepared?.destination.capability !== 'send-now'
              }
              title={
                delivery.prepared?.destination.capability === 'send-now'
                  ? `Send this exact preview now to ${delivery.prepared.destination.title}`
                  : 'This provider/launch has no proven submission contract'
              }
              onClick={delivery.sendNow}
            >
              {delivery.sent ? 'Sent' : 'Send review now'}
            </button>
          </div>
        </>
      ) : null}
      {delivery.loading ? <p role="status">Preparing exact review…</p> : null}
      {delivery.error ? (
        <p className="document-review-error" role="alert">
          {delivery.error}
        </p>
      ) : null}
    </section>
  )
}
```

</details>


---

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/scripts/check-seams.sh.**

/private/var/tmp/ws/d493c7da/hvir/scripts/check-seams.sh (lines 1-200)

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

<sub>1m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/LICENSE.**

/private/var/tmp/ws/d493c7da/hvir/LICENSE

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

<sub>1m 32s</sub>

### `rg`

**(github\.com/[^[:space:]'"\)]+hvir|releases/latest|\.deb|installer)**

"(github\.com/[^[:space:]'"\)]+hvir|releases/latest|\.deb|installer)" in *.{yml,mts,mjs,sh} (.github/workflows, scripts)

<details>
<summary>99 matches</summary>

```
[grep content: 89 matches across 10 file(s)]

.github/workflows/release.yml (17 match(es)):
  223:           DEB_ARCH: ${{ matrix.deb_arch }}
  227:           source="dist/hvir_${version}_${DEB_ARCH}.deb"
  228:           target="hvir-${version}-linux-${RELEASE_ARCH}.deb"
  245:             dist/hvir-*-linux-${{ matrix.release_arch }}.deb
  246:             dist/hvir-*-linux-${{ matrix.release_arch }}.deb.sha256
  298:           DEB_ARCH: ${{ matrix.deb_arch }}
  363:           DEB_ARCH: ${{ matrix.deb_arch }}
  446:             "hvir-${VERSION}-linux-arm64.deb" \
  447:             "hvir-${VERSION}-linux-arm64.deb.sha256" \
  448:             "hvir-${VERSION}-linux-x64.deb" \
  449:             "hvir-${VERSION}-linux-x64.deb.sha256" |
  460:               "hvir-${VERSION}-linux-x64.deb.sha256" \
  461:               "hvir-${VERSION}-linux-arm64.deb.sha256" \
  484:       - name: Assemble exact release metadata and installer
  560:             "hvir-${VERSION}-linux-arm64.deb" \
  561:             "hvir-${VERSION}-linux-x64.deb" \
  612:           latest=$(gh api "repos/$GITHUB_REPOSITORY/releases/latest" --jq .tag_name)

scripts/assemble-native-release.d.mts (2 match(es)):
  21:   readonly installer: {
  35:   readonly installerPath: string
scripts/ghostty-terminal-capability-profile.mts:8:     url: 'https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz',

scripts/native-installer.template.sh (9 match(es)):
  37:     */hvir-installer.*) /bin/rm -rf -- "$temporary_directory" ;;
  39:       echo "hvir installer refused to clean unexpected path: $temporary_directory" >&2
  56: hvir $HVIR_VERSION installer
  157:     require_absolute_tool /usr/sbin/installer
  216:     "$temporary_parent/hvir-installer.XXXXXX")
  310:   stage='validating the macOS installer signature'
  323:     echo 'The macOS installer signature has no trusted timestamp.' >&2
  500:   stage='creating a private installer workspace'
  514:       /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /

scripts/architecture-github.mts (2 match(es)):
  109:       'https://github.com/jarmak-personal/hvir.git',
  111:       'https://github.com/jarmak-personal/hvir',

scripts/run-macos-package-smoke.sh (24 match(es)):
  67: old_installer="$invocation_root/install-previous.sh"
  68: current_installer="$invocation_root/install-current.sh"
  154:     echo 'Pull-request package unexpectedly carried an installer signature.' >&2
  196: render_acceptance_installer() {
  202:   local linux_x64_artifact="$asset_directory/hvir-${version}-linux-x64.deb"
  203:   local linux_arm64_artifact="$asset_directory/hvir-${version}-linux-arm64.deb"
  212:   CI=true GITHUB_ACTIONS=true node scripts/render-native-installer.mjs \
  224: assert_installer_output() {
  232:     'hvir-installer\.|/private/var|Processing:|installer:|The validate action worked|source=Notarized|removed [0-9]+ packages' \
  234:     echo 'Successful installer output exposed implementation diagnostics.' >&2
  239: render_acceptance_installer "$old_package" 0.0.0 "$old_installer" true
  241:   render_acceptance_installer \
  244:     "$current_installer" \
  247:   render_acceptance_installer \
  250:     "$current_installer" \
  258:   "$old_installer" | tee "$install_log"
  264: assert_installer_output "$install_log" 0.0.0 installed
  294: sudo /usr/sbin/installer -pkg "$package_path" -target / \
  311:   "$current_installer" | tee "$install_log"
  312: assert_installer_output "$install_log" "$package_version" updated
  463:   "$current_installer" --uninstall
  481:   "$current_installer" >/dev/null
  488:   "$current_installer" --uninstall --purge >/dev/null
  494: echo "Accepted $package_mode macOS arm64 native installer lifecycle."

scripts/run-linux-package-smoke.sh (17 match(es)):
  58: package_path="$source_checkout/dist/hvir_${package_version}_${deb_arch}.deb"
  79: previous_package="$invocation_root/hvir_previous_${deb_arch}.deb"
  80: previous_installer="$invocation_root/install-previous.sh"
  81: current_installer="$invocation_root/install-current.sh"
  154: render_acceptance_installer() {
  166:   CI=true GITHUB_ACTIONS=true node scripts/render-native-installer.mjs \
  178: render_acceptance_installer \
  181:   "$previous_installer"
  182: render_acceptance_installer "$package_path" "$package_version" "$current_installer"
  334:   "$previous_installer" >"$shadowed_install_log" 2>&1; then
  335:   echo 'Native installer accepted a second command shadowing /usr/bin/hvir.' >&2
  352:   "$previous_installer" 2>&1 | tee "$install_log"
  361:   "$current_installer" 2>&1 | tee "$update_log"
  381:   "$current_installer" --uninstall 2>&1 | tee "$remove_log"
  400:   "$current_installer" >/dev/null
  408:   "$current_installer" --uninstall --purge >/dev/null
  414: echo "Verified hvir ${package_version} ${deb_arch} native installer lifecycle."

scripts/prepare-release-linux-package.mts (2 match(es)):
  21: const publicName = `hvir-${metadata.version}-linux-${releaseArch}.deb`
  49:   join('dist', `hvir_${metadata.version}_${debArch}.deb`),

scripts/render-native-installer.mjs (4 match(es)):
  11: const templatePath = resolve(repositoryRoot, 'scripts/native-installer.template.sh')
  81:   if (!options.output) throw new Error('An installer output path is required.')
  83:     ['Linux x64', options.linuxX64Artifact, '.deb'],
  84:     ['Linux arm64', options.linuxArm64Artifact, '.deb'],

scripts/assemble-native-release.mjs (11 match(es)):
  10: import { renderNativeInstaller } from './render-native-installer.mjs'
  28:       name: `hvir-${version}-linux-x64.deb`,
  33:       name: `hvir-${version}-linux-arm64.deb`,
  54:   const installerPath = resolve(assetDirectory, 'install.sh')
  62:     output: installerPath,
  83:   const installer = {
  84:     name: basename(installerPath),
  85:     sha256: await sha256File(installerPath),
  96:     installer,
  106:     installer.name,
  122:     installerPath,
```

</details>


---

<sub>1m 32s</sub>

### `rg`

**(canRender|renderedFileType|markdown|html|image)**

"(canRender|renderedFileType|markdown|html|image)" in viewer-types.ts (src/shared)

<details>
<summary>9 matches</summary>

```
src/shared/viewer-types.ts:57:export function canRender(path: HostPath): boolean {
src/shared/viewer-types.ts:62:  'markdown' | 'mermaid' | 'html' | 'json' | 'yaml' | 'csv' | 'image'
src/shared/viewer-types.ts:64:export function renderedFileType(path: HostPath): RenderedFileType | undefined {
src/shared/viewer-types.ts:67:  if (repositoryImageMimeType(name)) return 'image'
src/shared/viewer-types.ts:68:  if (extension === 'md' || extension === 'mdx' || extension === 'markdown') {
src/shared/viewer-types.ts:69:    return 'markdown'
src/shared/viewer-types.ts:72:  if (extension === 'htm' || extension === 'html') return 'html'
src/shared/viewer-types.ts:81:  'html',
src/shared/viewer-types.ts:85:  'markdown',
```

</details>


---

<sub>1m 32s</sub>

### `glob`

**packages/rename-noreplace/***

"packages/rename-noreplace/*"

```
./packages/rename-noreplace/binding.gyp
./packages/rename-noreplace/LICENSE
./packages/rename-noreplace/rename_noreplace.c
./packages/rename-noreplace/index.js
./packages/rename-noreplace/package.json
```


---

<sub>2m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/d493c7da/hvir/scripts/native-installer.template.sh (lines 1-200)

<details>
<summary>186 lines</summary>

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
```

</details>


---

<sub>2m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/d493c7da/hvir/.github/workflows/release.yml (lines 400-630)

<details>
<summary>204 lines</summary>

```
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

<sub>2m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-github.mts.**

/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-github.mts (lines 75-125)

<details>
<summary>48 lines</summary>

```
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

<sub>2m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/shared/viewer-types.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/shared/viewer-types.ts (lines 1-110)

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

<sub>2m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 230-410)

<details>
<summary>179 lines</summary>

```
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
```

</details>


---

<sub>2m 16s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/sections/KeybindingsSettings.tsx

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

<sub>2m 16s</sub>

### `rg`

**README\.md|markdownFiles|broken local link**

"README\.md|markdownFiles|broken local link" in *.{ts,mts,mjs,js} (test, scripts)

<details>
<summary>31 matches</summary>

```
[grep content: 25 matches across 8 file(s)]

scripts/check-adrs.mjs (5 match(es)):
  26:     (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
  116: function markdownFiles(directory) {
  122:     if (entry.isDirectory()) files.push(...markdownFiles(path))
  144: for (const sourcePath of markdownFiles(root)) {
  158:       errors.push(`${relative(root, sourcePath)}: broken local link ${href}`)
test/viewer-types.test.ts:7:     ['README.md', 'markdown'],
test/release-pr-integrity.test.ts:235:       { changedFiles: ['package.json', 'README.md'] },

test/terminal-file-link.test.ts (6 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',

test/filename-search-policy.test.ts (5 match(es)):
  10:         file('src/my-README.md'),
  12:         file('README.md'),
  19:       '/workspace/README.md',
  20:       '/workspace/src/my-README.md',
  26:       [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],

test/git-ignore-refresh.test.ts (2 match(es)):
  14:           { name: 'README.md', type: 'file' },
  18:           { name: 'README.md', type: 'file' },
test/document-review-delivery.test.ts:70:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

test/commit-file-tree.test.ts (4 match(es)):
  15:       path: localPath('/project/README.md'),
  37:       { kind: 'file', name: 'README.md', depth: 0 },
  44:       { kind: 'file', name: 'README.md', depth: 0 },
  62:     expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')
```

</details>


---

<sub>2m 16s</sub>

### `bash`

**Check repository documentation validation requirements**

$ npm run check-adrs

<details>
<summary>18 lines</summary>

```
> hvir@0.2.3 check-adrs
> node scripts/check-adrs.mjs

node:fs:1884
  const result = binding.readdir(
                         ^

Error: ENOENT: no such file or directory, scandir '/private/var/tmp/ws/d493c7da/hvir/docs/adr'
    at readdirSync (node:fs:1884:26)
    at file:///private/var/tmp/ws/d493c7da/hvir/scripts/check-adrs.mjs:20:26
    at ModuleJob.run (node:internal/modules/esm/module_job:569:25)
    at async node:internal/modules/esm/loader:650:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/d493c7da/hvir/docs/adr'
}

Node.js v26.5.0
<shellId: 6 completed with exit code 1>
```

</details>


---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/scripts/assemble-native-release.mjs.**

/private/var/tmp/ws/d493c7da/hvir/scripts/assemble-native-release.mjs (lines 1-155)

<details>
<summary>143 lines</summary>

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
```

</details>


---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/harness/harness-profile-store.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/harness/harness-profile-store.ts (lines 1-180)

<details>
<summary>169 lines</summary>

```
import { randomUUID } from 'node:crypto'

import {
  asHarnessProfileId,
  hostPathEquals,
  isHarnessBindingName,
  isHarnessEnvironmentName,
  isHarnessProfileId,
  isHarnessProviderId,
  type HarnessArgumentPart,
  type HarnessEnvironmentBinding,
  type HarnessPathBinding,
  type HarnessPathGrant,
  type HarnessProfile,
  type HarnessProfileArgument,
  type HarnessProfileExecutable,
  type HarnessProfileId,
  type HarnessProfileInput,
  type HarnessProfileScope,
  type HostPath,
} from '../../shared'
import type { ProjectHost } from '../project-host'
import { harnessProvider, harnessProviders } from './bundled-harness-providers'
import type { HarnessProvider } from './harness-provider-contract'

const FILE_VERSION = 1
const MAX_PROFILES = 200
const MAX_ARGUMENTS = 128
const MAX_ARGUMENT_PARTS = 32
const MAX_ENVIRONMENT_BINDINGS = 128
const MAX_PATH_BINDINGS = 64
const MAX_TEXT = 4_096
const MAX_NAME = 120
const MAX_PROFILE_BYTES = 256 * 1024
const MAX_PATH_BYTES = 16 * 1024

interface StoredFile {
  readonly version: typeof FILE_VERSION
  readonly profiles: readonly HarnessProfile[]
  readonly pathGrants: readonly HarnessPathGrant[]
}

export interface SaveHarnessProfile {
  readonly id?: HarnessProfileId
  readonly expectedLaunchRevision?: number
  readonly expectedMetadataRevision?: number
  readonly input: HarnessProfileInput
}

export interface HarnessRecoveryProfileReference {
  readonly providerId: HarnessProfile['providerId']
  readonly profileId: HarnessProfileId
  readonly launchRevision: number
}

export interface HarnessProfileStoreContract {
  list(projectRoot?: HostPath): readonly HarnessProfile[]
  get(id: HarnessProfileId): HarnessProfile | undefined
  prepare(request: SaveHarnessProfile): HarnessProfile
  save(request: SaveHarnessProfile): Promise<HarnessProfile>
  materializeTemplates(
    providerIds: readonly HarnessProfile['providerId'][],
  ): Promise<readonly HarnessProfile[]>
  duplicate(id: HarnessProfileId): Promise<HarnessProfile>
  delete(id: HarnessProfileId): Promise<void>
  authorizePath(path: HostPath): Promise<HarnessPathGrant>
  hasPathGrant(id: string, path: HostPath): boolean
  flush(): Promise<void>
}

export class HarnessProfileStore implements HarnessProfileStoreContract {
  private readonly userProfiles = new Map<HarnessProfileId, HarnessProfile>()
  private readonly pathGrants = new Map<string, HostPath>()
  private pendingWrite: Promise<void> = Promise.resolve()

  private constructor(
    private readonly host: ProjectHost,
    private readonly file: HostPath,
    profiles: readonly HarnessProfile[],
    grants: readonly HarnessPathGrant[],
  ) {
    for (const profile of profiles.slice(-MAX_PROFILES)) {
      this.userProfiles.set(profile.id, refreshProviderContract(profile))
    }
    for (const grant of grants.slice(-MAX_PATH_BINDINGS * MAX_PROFILES)) {
      this.pathGrants.set(grant.id, grant.path)
    }
  }

  static async load(host: ProjectHost, file: HostPath): Promise<HarnessProfileStore> {
    let profiles: HarnessProfile[] = []
    let grants: HarnessPathGrant[] = []
    try {
      const value: unknown = JSON.parse(await host.readTextFile(file))
      if (isRecord(value) && value['version'] === FILE_VERSION) {
        const rawProfiles = value['profiles']
        if (Array.isArray(rawProfiles)) {
          profiles = rawProfiles
            .map(parseStoredProfile)
            .filter((profile): profile is HarnessProfile => profile !== undefined)
        }
        const rawGrants = value['pathGrants']
        if (Array.isArray(rawGrants)) {
          grants = rawGrants
            .map(parsePathGrant)
            .filter((grant): grant is HarnessPathGrant => grant !== undefined)
        }
      }
    } catch {
      profiles = []
    }
    const store = new HarnessProfileStore(host, file, profiles, grants)
    if (profiles.some((profile) => store.userProfiles.get(profile.id) !== profile)) {
      await store
        .persist()
        .catch((error) =>
          console.warn(
            '[harness] provider-contract profile migration write failed',
            error,
          ),
        )
    }
    return store
  }

  async importLegacyDefaults(
    references: readonly HarnessRecoveryProfileReference[],
  ): Promise<readonly HarnessProfile[]> {
    const grouped = new Map<
      HarnessProfileId,
      { providerId: HarnessProfile['providerId']; revisions: Set<number> }
    >()
    for (const reference of references) {
      const current = grouped.get(reference.profileId)
      if (current) {
        if (current.providerId !== reference.providerId) current.revisions.add(-1)
        current.revisions.add(reference.launchRevision)
      } else {
        grouped.set(reference.profileId, {
          providerId: reference.providerId,
          revisions: new Set([reference.launchRevision]),
        })
      }
    }

    const imported: HarnessProfile[] = []
    for (const [profileId, reference] of grouped) {
      if (this.get(profileId) || reference.revisions.size !== 1) continue
      const [launchRevision] = reference.revisions
      if (!launchRevision || launchRevision < 1) continue
      let provider: HarnessProvider
      try {
        provider = harnessProvider(reference.providerId)
      } catch {
        continue
      }
      const template = provider.profile.defaultProfile
      if (
        provider.manifest.default ||
        !template ||
        template.id !== profileId ||
        provider.profile.version !== launchRevision ||
        this.userProfiles.size + imported.length >= MAX_PROFILES
      ) {
        continue
      }
      const input = templateInput(provider, nextProfileOrder(this.userProfiles, imported))
      imported.push({
        ...input,
        id: profileId,
        launchRevision,
        metadataRevision: 1,
        providerContractVersion: provider.profile.version,
        builtIn: false,
      })
    }
    if (imported.length === 0) return imported
    for (const profile of imported) this.userProfiles.set(profile.id, profile)
    try {
      await this.persist()
```

</details>


---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workbench/use-workbench-commands.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workbench/use-workbench-commands.ts (lines 1-200)

<details>
<summary>59 lines</summary>

```
import { useEffect, useRef } from 'react'

import type {
  KeybindingAction,
  KeybindingContext,
  KeybindingMap,
  WebPaneCommandAction,
} from '../../../shared'
import { keybindingAvailableInContext } from '../../../shared'
import { matchesKeybinding } from '../settings/keybindings'
import {
  dispatchWorkbenchCommand,
  type WorkbenchCommandPorts,
} from './workbench-command-router'

export function useWorkbenchCommands(
  keybindings: KeybindingMap,
  ports: WorkbenchCommandPorts & { readonly enabled?: boolean },
): void {
  const portsRef = useRef(ports)
  portsRef.current = ports

  useEffect(() => {
    const perform = (
      action: WebPaneCommandAction,
      paneId?: string,
      context?: KeybindingContext,
    ): boolean => {
      if (portsRef.current.enabled === false) return false
      if (document.querySelector('[aria-modal="true"]')) return false
      return dispatchWorkbenchCommand(action, paneId, portsRef.current, context)
    }
    const keydown = (event: KeyboardEvent): void => {
      if (event.defaultPrevented || document.querySelector('[aria-modal="true"]')) return
      const action = (Object.entries(keybindings) as [KeybindingAction, string][]).find(
        ([, binding]) => matchesKeybinding(event, binding),
      )?.[0]
      if (!action) return
      const context: KeybindingContext =
        event.target instanceof Element && event.target.closest('.terminal-panel')
          ? 'terminal'
          : event.target instanceof Element && event.target.closest('.web-pane')
            ? 'web-pane'
            : 'workbench'
      if (!keybindingAvailableInContext(action, context)) return
      if (!perform(action, undefined, context)) return
      event.preventDefault()
      // Ghostty owns a target-level key listener. Once a terminal-scoped
      // workbench command is claimed, keep that same stroke out of the PTY.
      if (context === 'terminal') event.stopPropagation()
    }
    window.hvir.send('web-pane:reserved-bindings', keybindings)
    const disposeCommand = window.hvir.on('web-pane:command', ({ action, paneId }) =>
      perform(action, paneId),
    )
    window.addEventListener('keydown', keydown, true)
    return () => {
      window.removeEventListener('keydown', keydown, true)
      void disposeCommand()
    }
  }, [keybindings])
}
```

</details>


---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/d493c7da/hvir/electron.vite.config.ts (lines 1-160)

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

**view the file at /private/var/tmp/ws/d493c7da/hvir/.prettierrc.json.**

/private/var/tmp/ws/d493c7da/hvir/.prettierrc.json

<details>
<summary>7 lines</summary>

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
```

</details>


---

<sub>2m 32s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/d493c7da/hvir/THIRD_PARTY_NOTICES.md (lines 1-55)

<details>
<summary>39 lines</summary>

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
```

</details>


---

<sub>2m 32s</sub>

### `rg`

**(docs/adr|docs/design\.md|canonical repository|origin|HVIR_REPO_TOKEN|local)**

"(docs/adr|docs/design\.md|canonical repository|origin|HVIR_REPO_TOKEN|local)" in architecture-*.mts (scripts)

<details>
<summary>27 matches</summary>

```
[grep content: 21 matches across 7 file(s) under scripts]

architecture-module-directions.mts (5 match(es)):
  34:       // local-host.mjs is not local-host.ts; preload's directory seam stays intact.
  39:     const origins: typeof refs = []
  55:         origins.push(ref)
  108:         const ref = origins[message.line - 1]!
  125:   // Keep name-sensitive restrictions faithful to the original import/type syntax.

architecture-module-resolution.mts (4 match(es)):
  220:   ): { target?: string; external: boolean; local: boolean } {
  234:     const local =
  244:     if (!found) return { external: false, local }
  252:       local,
architecture-policy.mts:470:     .sort((a, b) => a.path.localeCompare(b.path))

architecture-wiring.mts (2 match(es)):
  114:   if (object(verificationStep(job).env).HVIR_REPO_TOKEN !== '${{ github.token }}')
  145:   equal(newStep.env, { ...oldEnvironment, HVIR_REPO_TOKEN: '${{ github.token }}' })

architecture-module-graph.mts (2 match(es)):
  81:   return components.sort((a, b) => a.join('\0').localeCompare(b.join('\0'), 'en'))
  171:       if (resolved.external || (!target && !resolved.local)) {
architecture-hotspots.mts:85:       const api = githubAdapter(process.env.HVIR_REPO_TOKEN)

architecture-github.mts (6 match(es)):
  47:       'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
  106:   const origin = git(root, ['remote', 'get-url', 'origin'])
  112:     ].includes(origin)
  114:     throw new Error('Architecture evidence requires the canonical repository')
  187:         throw new Error('Wrong local cumulative epic')
  192:         'Unresolved local delivery context; use the issue worktree or exact epic branch',
```

</details>


---

<sub>3m 7s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/dashboards/web-pane-url.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/dashboards/web-pane-url.ts

<details>
<summary>6 lines</summary>

```
/** Build the same normalized target for guest navigation and browser handoff. */
export function webPaneUrlFromInput(origin: string, pathInput: string): string {
  const trimmed = pathInput.trim()
  const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return `${origin}${path}`
}
```

</details>


---

<sub>3m 7s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/dashboards/WebPane.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/dashboards/WebPane.tsx (lines 1-220)

<details>
<summary>212 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import type {
  HostPath,
  WebPaneBlockedNavigation,
  WebPaneDiagnosticEvent,
} from '../../../shared'
import { ElectronWebPaneSurface } from './ElectronWebPaneSurface'
import {
  appendWebPaneDiagnostic,
  redactedWebPaneDiagnosticUrl,
  webPaneDiagnosticReport,
  type WebPaneDiagnosticRow,
} from './web-pane-diagnostics'
import type { WebPaneSurface, WebPaneSurfaceHandle } from './web-pane-surface'
import { webPaneUrlFromInput } from './web-pane-url'

export interface WebViewState {
  readonly id: string
  readonly title: string
  readonly url: string
  readonly origin: string
  readonly partition: string
  readonly workspaceRoot: HostPath
  readonly sourceTerminalId: string
  readonly blockedNavigation?: WebPaneBlockedNavigation
  readonly routeDiagnostic?: {
    readonly revision: number
    readonly event: WebPaneDiagnosticEvent
  }
}

/** Product chrome around the swappable, hostile-content guest surface. */
export function WebPane({
  view,
  focused,
  onToggleFocus,
  onTitle,
  onBlockedNavigation,
  onOpenBrowser,
  onRevealTerminal,
  Surface = ElectronWebPaneSurface,
}: {
  readonly view: WebViewState
  readonly focused: boolean
  readonly onToggleFocus: () => void
  readonly onTitle: (title: string) => void
  readonly onBlockedNavigation: (navigation: WebPaneBlockedNavigation) => void
  readonly onOpenBrowser: (url: string) => void
  readonly onRevealTerminal: () => void
  readonly Surface?: WebPaneSurface
}): ReactElement {
  const surfaceRef = useRef<WebPaneSurfaceHandle>(null)
  const editingRef = useRef(false)
  const [pathInput, setPathInput] = useState(() => pathOf(view.url))
  const [diagnostics, setDiagnostics] = useState<readonly WebPaneDiagnosticRow[]>([])
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false)
  const browserHandoffAvailable = view.workspaceRoot.hostId === 'local'

  useEffect(() => {
    setPathInput(pathOf(view.url))
    surfaceRef.current?.navigate(view.url)
  }, [view.url])

  useEffect(() => {
    if (!view.blockedNavigation) return
    appendDiagnostic(setDiagnostics, {
      kind: 'blocked-navigation',
      message: `Blocked ${view.blockedNavigation.kind} navigation`,
      url: view.blockedNavigation.url,
    })
  }, [view.blockedNavigation])

  useEffect(() => {
    if (view.routeDiagnostic) {
      appendDiagnostic(setDiagnostics, view.routeDiagnostic.event)
    }
  }, [view.routeDiagnostic])

  const navigate = (): void => {
    surfaceRef.current?.navigate(webPaneUrlFromInput(view.origin, pathInput))
  }
  const currentUrl = webPaneUrlFromInput(view.origin, pathInput)

  return (
    <div className="web-pane" data-diagnostic-capture="web-pane">
      <div className="web-pane-toolbar">
        <button
          type="button"
          aria-label="Back"
          title="Back"
          onClick={() => surfaceRef.current?.back()}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Forward"
          title="Forward"
          onClick={() => surfaceRef.current?.forward()}
        >
          →
        </button>
        <span className="web-pane-origin" title={view.origin}>
          {view.origin}
        </span>
        <form
          className="web-pane-path"
          onSubmit={(event) => {
            event.preventDefault()
            editingRef.current = false
            navigate()
          }}
        >
          <input
            aria-label={`Path on ${view.title}`}
            value={pathInput}
            spellCheck={false}
            onFocus={() => {
              editingRef.current = true
            }}
            onBlur={() => {
              editingRef.current = false
            }}
            onChange={(event) => setPathInput(event.target.value)}
            placeholder="/"
          />
        </form>
        <button
          type="button"
          aria-label={`Reload ${view.title}`}
          title="Reload"
          onClick={() => surfaceRef.current?.reload()}
        >
          ⟳
        </button>
        <button
          type="button"
          aria-label="Reveal source terminal"
          title="Back to terminal"
          onClick={onRevealTerminal}
        >
          &gt;_
        </button>
        <button
          type="button"
          aria-label="Web pane diagnostics"
          aria-pressed={diagnosticsOpen}
          title="Diagnostics"
          onClick={() => setDiagnosticsOpen((open) => !open)}
        >
          {diagnostics.length > 0 ? `!${diagnostics.length}` : 'ⓘ'}
        </button>
        <button
          type="button"
          aria-label={
            focused
              ? `Restore the workbench around ${view.title}`
              : `Expand ${view.title} to the full window`
          }
          aria-pressed={focused}
          title={focused ? 'Restore workbench' : 'Full page'}
          onClick={onToggleFocus}
        >
          {focused ? '⇲' : '⛶'}
        </button>
        <button
          type="button"
          aria-label={`Open ${view.title} in the browser`}
          title={
            browserHandoffAvailable
              ? 'Open in browser'
              : 'Browser handoff for SSH panes needs a compatibility route'
          }
          disabled={!browserHandoffAvailable}
          onClick={() => onOpenBrowser(currentUrl)}
        >
          ↗
        </button>
      </div>
      {view.blockedNavigation ? (
        <div className="web-pane-navigation-blocked" role="status">
          <span>
            {view.blockedNavigation.kind === 'external'
              ? `This link leaves hvir for ${hostnameOf(view.blockedNavigation.url)}.`
              : `This link uses another local server (${originOf(view.blockedNavigation.url)}).`}
          </span>
          <button
            type="button"
            onClick={() => onBlockedNavigation(view.blockedNavigation!)}
          >
            {view.blockedNavigation.kind === 'external'
              ? 'Open in system browser'
              : 'Open as web pane'}
          </button>
        </div>
      ) : null}
      {diagnosticsOpen ? (
        <section className="web-pane-diagnostics" aria-label="Web pane diagnostics">
          <div>
            <strong>Recent pane events</strong>
            <button
              type="button"
              disabled={diagnostics.length === 0}
              onClick={() =>
                void navigator.clipboard.writeText(
                  webPaneDiagnosticReport(view, diagnostics),
                )
              }
            >
              Copy report
            </button>
          </div>
          {diagnostics.length === 0 ? (
            <p>No failures or console warnings recorded.</p>
          ) : (
            <ol>
              {diagnostics.map((row, index) => (
                <li key={`${row.at}:${index}`}>
                  <code>{row.kind}</code> {row.message}
```

</details>


---

<sub>3m 7s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx (lines 95-155)

<details>
<summary>57 lines</summary>

```
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
              min="0.5"
              max="60"
              step="0.5"
              value={draft.idleSeconds}
              aria-invalid={idleError}
              aria-describedby={idleError ? 'settings-idle-threshold-error' : undefined}
              onChange={(event) => onChange('idleSeconds', event.currentTarget.value)}
            />
            seconds
          </span>
          {idleError ? (
            <small id="settings-idle-threshold-error" className="dialog-error">
              {validation.message}
            </small>
          ) : null}
        </label>
        <label htmlFor="settings-recovery-mode">
          <span>On app start</span>
          <select
            id="settings-recovery-mode"
            value={draft.recoveryMode}
            onChange={(event) =>
              onChange(
                'recoveryMode',
                event.currentTarget.value as SettingsDraft['recoveryMode'],
              )
            }
          >
            <option value="prompt">Ask which terminals to restore</option>
            <option value="auto">Restore all terminals automatically</option>
          </select>
        </label>
      </div>
    </SettingsSection>
  )
}
```

</details>


---

<sub>3m 7s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/harness/providers/claude-code.ts (lines 20-90)

<details>
<summary>66 lines</summary>

```
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
```

</details>


---

<sub>3m 7s</sub>

### `rg`

**(Split|split|Draft|Review|comment|Send|Insert)**

"(Split|split|Draft|Review|comment|Send|Insert)" in *.tsx (src/renderer/src/document-review)

<details>
<summary>127 matches</summary>

```
[grep content: 123 matches across 3 file(s) under src/renderer/src/document-review]

DocumentReviewInlineSurface.tsx (80 match(es)):
  13:   DocumentReviewInlineHostContext,
  15:   type RegisterDocumentReviewInlineHost,
  17: import type { DocumentReviewComment, ReviewSourceRange } from './document-review-types'
  18: import type { DocumentReviewInteraction } from './use-document-review-interaction'
  20: interface DraftText {
  26:   readonly commentId: string
  30: export function DocumentReviewInlineProvider({
  34:   readonly interaction: DocumentReviewInteraction
  38:   const [draft, setDraft] = useState<DraftText>()
  40:   const registerHost = useCallback<RegisterDocumentReviewInlineHost>((nextHost) => {
  55:     if (!interaction.pendingRange) setDraft(undefined)
  58:     if (edit && !interaction.comments.some((comment) => comment.id === edit.commentId)) {
  61:   }, [edit, interaction.comments])
  64:     <DocumentReviewInlineHostContext.Provider value={registerHost}>
  68:             <DocumentReviewInlineThread
  71:               onDraftBody={(body) => {
  72:                 if (pendingKey) setDraft({ key: pendingKey, body })
  75:               onBeginEdit={(comment) =>
  76:                 setEdit({ commentId: comment.id, body: comment.body })
  82:               onSaveEdit={(commentId, body) => {
  83:                 interaction.edit(commentId, body)
  90:     </DocumentReviewInlineHostContext.Provider>
  94: function DocumentReviewInlineThread({
  97:   onDraftBody,
  104:   readonly interaction: DocumentReviewInteraction
  106:   readonly onDraftBody: (body: string) => void
  108:   readonly onBeginEdit: (comment: DocumentReviewComment) => void
  111:   readonly onSaveEdit: (commentId: string, body: string) => void
  114:   const comments = useMemo(
  117:         ? interaction.comments.filter((comment) =>
  118:             rangesOverlap(range, comment.anchor.range),
  121:     [interaction.comments, range],
  137:         <strong>Review</strong>
  152:           onBody={onDraftBody}
  157:       {comments.length > 0 ? (
  158:         <ol className="document-review-comments">
  159:           {comments.map((comment) => (
  160:             <ReviewCommentCard
  161:               key={comment.id}
  162:               comment={comment}
  163:               edit={edit?.commentId === comment.id ? edit : undefined}
  165:                 interaction.commentNavigation?.id === comment.id
  166:                   ? interaction.commentNavigation.request
  170:               showLocation={!rangesEqual(range, comment.anchor.range)}
  171:               onBeginEdit={() => onBeginEdit(comment)}
  174:               onSaveEdit={(body) => onSaveEdit(comment.id, body)}
  179:         <p className="document-review-empty">No comments at this location.</p>
  192:   readonly range: ReviewSourceRange
  208:       aria-label={`New comment for ${lineRangeLabel(range)}`}
  216:         aria-label="New review comment"
  222:           Add review comment
  232: function ReviewCommentCard({
  233:   comment,
  243:   readonly comment: DocumentReviewComment
  246:   readonly interaction: DocumentReviewInteraction
  259:   const stale = comment.anchor.state.status === 'stale'
  260:   const staleUnreviewed = stale && !comment.anchor.state.reviewed
  265:       aria-label={`Review comment at ${lineRangeLabel(comment.anchor.range)}`}
  266:       data-review-lifecycle={comment.lifecycle}
  267:       className={`document-review-comment review-anchor-${comment.anchor.state.status}`}
  278:             aria-label={`Edit comment at ${lineRangeLabel(comment.anchor.range)}`}
  289:       ) : comment.lifecycle === 'draft' ? (
  292:           className="document-review-comment-body"
  293:           aria-label={`Edit comment at ${lineRangeLabel(comment.anchor.range)}`}
  296:           {comment.body}
  299:         <p>{comment.body}</p>
  302:         <div className="document-review-comment-meta">
  306:               className="document-review-comment-location"
  307:               aria-label={`Go to review comment at ${lineRangeLabel(comment.anchor.range)}`}
  308:               onClick={() => interaction.navigate(comment)}
  310:               {lineRangeLabel(comment.anchor.range)}
  313:           {comment.lifecycle === 'draft' ? null : (
  314:             <span className="document-review-comment-state">{comment.lifecycle}</span>
  316:           <AnchorState comment={comment} />
  317:           {comment.lifecycle === 'draft' && staleUnreviewed ? (
  320:               aria-label={`Acknowledge stale location for comment at ${lineRangeLabel(comment.anchor.range)}`}
  321:               onClick={() => interaction.reviewStale(comment.id)}
  326:           {comment.lifecycle === 'draft' ? (
  329:               className="document-review-comment-delete"
  330:               aria-label={`Delete comment at ${lineRangeLabel(comment.anchor.range)}`}

DocumentReviewDeliveryPanel.tsx (13 match(es)):
  3: import type { DocumentReviewDeliveryInteraction } from './use-document-review-delivery'
  5: export function DocumentReviewDeliveryPanel({
  8:   readonly delivery: DocumentReviewDeliveryInteraction
  13:     <section className="document-review-delivery" aria-label="Review handoff preview">
  15:         <strong>Review and send</strong>
  23:           aria-label="Review handoff destination"
  33:                 ? 'Send now supported'
  35:                   ? 'Insert supported'
  100:                   ? 'Insert one atomic bracketed paste without submitting'
  103:                     : 'Choose an Insert-supported terminal'
  107:               {delivery.inserted ? 'Inserted' : 'Insert review'}
  119:                   ? `Send this exact preview now to ${delivery.prepared.destination.title}`
  124:               {delivery.sent ? 'Sent' : 'Send review now'}

DocumentReviewControls.tsx (30 match(es)):
  4: import { DocumentReviewDeliveryPanel } from './DocumentReviewDeliveryPanel'
  6: import type { DocumentReviewInteraction } from './use-document-review-interaction'
  8: export function DocumentReviewToolbar({
  12:   readonly interaction: DocumentReviewInteraction
  15:   if (!interaction.available && interaction.comments.length === 0) return null
  29:         Review{interaction.comments.length > 0 ? ` ${interaction.comments.length}` : ''}
  34:           aria-label="Add comment for selected source lines"
  40:                 ? `Add comment for ${lineRangeLabel(interaction.sourceRange)}`
  45:           Add comment
  52: export function DocumentReviewChrome({
  55:   readonly interaction: DocumentReviewInteraction
  73:     <aside className="document-review-chrome" aria-label="Document review comments">
  78:               Save or reload to add comments. Existing review stays on the saved version.
  98:               Sending review…
  101:           {interaction.orphanedComments.map((comment) => (
  103:               key={comment.id}
  106:               onClick={() => interaction.navigate(comment)}
  108:               Open unplaced comment · {lineRangeLabel(comment.anchor.range)}
  115:               aria-label={`Send ${interaction.activeBatchCount} review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'} to the top terminal`}
  121:                   ? 'Review and prepare the feedback again before another send'
  122:                   : 'Send to the first visible terminal'
  128:               Send review {interaction.activeBatchCount}
  134:               aria-label={`Discard ${interaction.activeBatchCount} draft review ${interaction.activeBatchCount === 1 ? 'comment' : 'comments'}`}
  142:                   interaction.discardReview()
  152:               aria-label={`Review and send ${interaction.activeBatchCount} comments`}
  157:               Review and send…
  163:               aria-label={`Clear ${interaction.historyCount} sent and resolved review ${interaction.historyCount === 1 ? 'comment' : 'comments'} from this workspace`}
  171:       <DocumentReviewDeliveryPanel delivery={interaction.delivery} />
  186:                 interaction.discardReview()
  194:             {interaction.activeBatchCount === 1 ? 'comment' : 'comments'} from this
```

</details>


---

<sub>3m 7s</sub>

### `rg`

**(git worktree|worktree|workspaces|worktree list)**

"(git worktree|worktree|workspaces|worktree list)" in workspace-coordinator.ts (src/main)

<details>
<summary>7 matches</summary>

```
src/main/workspace-coordinator.ts:183:          ?.workspaces.find((candidate) => candidate.id === active.workspaceId)
src/main/workspace-coordinator.ts:294:        ?.workspaces.filter((workspace) => workspace.missing) ?? []
src/main/workspace-coordinator.ts:311:    const present = refreshed.workspaces.filter((workspace) => !workspace.missing)
src/main/workspace-coordinator.ts:314:      project.workspaces.map((workspace) => [
src/main/workspace-coordinator.ts:365:        project.workspaces.every((workspace) => workspace.repository === false)
src/main/workspace-coordinator.ts:435:    workspaces: readonly { readonly id: string }[],
src/main/workspace-coordinator.ts:438:    for (const workspace of workspaces) {
```

</details>


---

<sub>3m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/project-host/ssh-host.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/project-host/ssh-host.ts (lines 705-890)

<details>
<summary>186 lines</summary>

```
    markPrompt?: () => void,
    isActive: () => boolean = () => !this.disposed,
    promptSignal: AbortSignal = this.lifecycleAbort.signal,
  ): ConnectConfig {
    const { config, agentSocket, prompter } = this.options
    const attempted = new Set<string>()
    let password: string | undefined
    let authenticationCancelled = false
    let keyboardInteractiveRounds = 0
    const prompt = async (request: SshPrompt): Promise<readonly string[] | undefined> => {
      if (purpose === 'primary') this.promptedDuringConnect = true
      markPrompt?.()
      const presentedRequest =
        purpose === 'pool'
          ? {
              ...request,
              title: `Additional SSH capacity — ${request.title}`,
            }
          : request
      const answers = await this.serializedPrompt(() =>
        prompter.prompt(presentedRequest, promptSignal),
      )
      if (!isActive()) {
        authenticationCancelled = true
        return undefined
      }
      if (!answers) {
        authenticationCancelled = true
        if (purpose === 'primary') this.reconnectSuppressed = true
      }
      return answers
    }
    return {
      host: config.hostname,
      port: config.port,
      username: config.user,
      keepaliveInterval: 10_000,
      keepaliveCountMax: 3,
      // Host verification is intentionally interactive; leave enough time to
      // compare a fingerprint without the handshake timing out underneath it.
      readyTimeout: 120_000,
      hostVerifier: (key: Buffer, verify: (valid: boolean) => void) => {
        if (!isActive()) {
          verify(false)
          return
        }
        const fingerprint = `SHA256:${createHash('sha256')
          .update(key)
          .digest('base64')
          .replace(/=+$/, '')}`
        const trustedFingerprint =
          this.acceptedHostFingerprint ?? this.options.trust.trustedHostKey()
        if (trustedFingerprint === fingerprint) {
          verify(true)
          return
        }
        void prompt({
          hostId: this.hostId,
          kind: trustedFingerprint ? 'host-key-changed' : 'host-key',
          title: trustedFingerprint
            ? `Host key changed for ${config.alias}`
            : `Trust ${config.alias}?`,
          instructions: trustedFingerprint
            ? 'The saved host key does not match. This can indicate a machine rebuild or a man-in-the-middle attack. Verify both fingerprints before replacing it.'
            : 'Verify the SHA-256 fingerprint before trusting this host.',
          fingerprint,
          previousFingerprint: trustedFingerprint,
          prompts: [],
        })
          .then(async (a) => {
            const trusted = a?.[0]?.toLowerCase() === 'yes'
            if (!trusted || !isActive()) {
              verify(false)
              return
            }
            await this.options.trust.rememberHostKey(fingerprint)
            if (!isActive()) {
              verify(false)
              return
            }
            this.acceptedHostFingerprint = fingerprint
            verify(true)
          })
          .catch(() => verify(false))
        // This verifier is callback-only: returning a boolean would make
        // `ssh2` decide synchronously before the user can answer.
      },
      authHandler: (methods, _partial, next) => {
        const send = next as unknown as (
          value: import('ssh2').AnyAuthMethod | false,
        ) => void
        void (async (): Promise<import('ssh2').AnyAuthMethod | false> => {
          if (authenticationCancelled || !isActive()) return false
          // `ssh2` passes null before the first authentication attempt. That
          // means the server's methods are not known yet, not that none are
          // available. Start our configured ladder and narrow it after the
          // server returns its actual method list.
          const available = new Set(
            methods ?? ['agent', 'publickey', 'keyboard-interactive', 'password'],
          )
          if (agentSocket && available.has('agent') && !attempted.has('agent')) {
            attempted.add('agent')
            return { type: 'agent', username: config.user, agent: agentSocket }
          }
          const identity = available.has('publickey')
            ? await credentialAttempt.identityGeneration.next()
            : undefined
          if (authenticationCancelled || !isActive()) return false
          if (identity) {
            let passphrase: string | undefined
            const parsed = utils.parseKey(identity.privateKey)
            if (parsed instanceof Error && /encrypted|passphrase/i.test(parsed.message))
              passphrase = this.cachedPassphrases.get(identity.path)
            if (
              parsed instanceof Error &&
              /encrypted|passphrase/i.test(parsed.message) &&
              !passphrase
            ) {
              passphrase = (
                await prompt({
                  hostId: this.hostId,
                  kind: 'passphrase',
                  title: `Unlock ${identity.path}`,
                  prompts: [{ text: 'Passphrase', echo: false }],
                })
              )?.[0]
              if (passphrase) credentialAttempt.passphrases.set(identity.path, passphrase)
            }
            if (authenticationCancelled) return false
            if (!isActive()) return false
            return {
              type: 'publickey',
              username: config.user,
              key: identity.privateKey,
              passphrase,
            }
          }
          if (available.has('keyboard-interactive') && !attempted.has('keyboard')) {
            attempted.add('keyboard')
            return {
              type: 'keyboard-interactive',
              username: config.user,
              prompt: (name, instructions, _lang, prompts, finish) => {
                keyboardInteractiveRounds++
                if (keyboardInteractiveRounds > SSH_MAX_KEYBOARD_INTERACTIVE_ROUNDS) {
                  authenticationCancelled = true
                  finish([])
                  return
                }
                void prompt({
                  hostId: this.hostId,
                  kind: 'keyboard-interactive',
                  title: name || `Authenticate to ${config.alias}`,
                  instructions,
                  prompts: prompts.map((p) => ({
                    text: p.prompt,
                    echo: Boolean(p.echo),
                  })),
                })
                  .then((a) => finish([...(a ?? [])]))
                  .catch(() => finish([]))
              },
            }
          }
          if (available.has('password') && !attempted.has('password')) {
            attempted.add('password')
            password ??= this.cachedPassword
            password ??= (
              await prompt({
                hostId: this.hostId,
                kind: 'password',
                title: `Authenticate to ${config.alias}`,
                prompts: [{ text: `Password for ${config.user}`, echo: false }],
              })
            )?.[0]
            if (password && isActive()) {
              credentialAttempt.password = password
              return { type: 'password', username: config.user, password }
            }
          }
          return false
        })().then(
          (method) => send(isActive() ? method : false),
          () => send(false),
        )
      },
```

</details>


---

<sub>3m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/main/project-host/ssh-host-trust.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/main/project-host/ssh-host-trust.ts (lines 1-200)

<details>
<summary>58 lines</summary>

```
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
  }

  private remember(alias: string, fingerprint: string): Promise<void> {
    if (!VALID_FINGERPRINT.test(fingerprint)) {
      return Promise.reject(new Error('Invalid SSH host-key fingerprint'))
    }
    const write = async (): Promise<void> => {
      const fingerprints = { ...this.fingerprints, [alias]: fingerprint }
      await this.host.writeFile(this.file, JSON.stringify(fingerprints, null, 2))
      this.fingerprints = fingerprints
    }
    const next = this.pendingWrite.then(write, write)
    this.pendingWrite = next.catch(() => undefined)
    return next
  }
}
```

</details>


---

<sub>3m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts.**

/private/var/tmp/ws/d493c7da/hvir/scripts/architecture-hotspots.mts (lines 45-115)

<details>
<summary>68 lines</summary>

```
    evidence:
      'No authorization claimed; architecture:check resolves the current target and acceptance evidence.',
    rows,
    violations: rows.filter((row) => row.status === 'over'),
  }
}

export function formatReport(report: {
  mode: string
  rows: ArchitectureRow[]
  violations: ArchitectureRow[]
  context?: ArchitectureContext
  admission?: { kind: string }
  evidence?: string
}): string {
  const lines = [
    `architecture budgets (${report.mode})`,
    `${report.rows.length} maintained source files; every file has one governing rule`,
  ]
  if (report.context)
    lines.push(
      `candidate ${report.context.head}; ${report.context.target} base ${report.context.base}; ${report.admission?.kind ?? 'unavailable'}`,
    )
  if (report.evidence) lines.push(report.evidence)
  for (const row of report.rows.filter(
    (row) => row.aboveComfort || row.exception || row.status === 'over',
  )) {
    lines.push(
      `${row.status === 'over' ? '!' : '·'} ${row.path}: ${row.lines}/${row.effectiveLimit} lines (${row.category}, ${row.governingRule}${row.aboveComfort ? ', above comfort' : ''})`,
    )
  }
  lines.push(`${report.violations.length} budget violation(s)`)
  return lines.join('\n')
}

export async function runArchitectureCommand(root = repositoryRoot): Promise<void> {
  try {
    const enforce = process.argv.includes('--enforce')
    let collected
    if (enforce) {
      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
      const context = await resolveArchitectureContext(root, api)
      collected = await authorizeCandidate({
        root,
        context,
        loadIntegration: (merge, epic) =>
          loadArchitectureIntegration(root, api, merge, epic),
      })
      await requireCurrentRemovalIssues(api, collected.policy)
      const current = await resolveArchitectureContext(root, api)
      if (current.base !== context.base || current.head !== context.head)
        throw new Error('Architecture target changed during verification; reverify')
    } else collected = collectArchitectureHotspots(root)
    const { policy, inventory, ...report } = collected
    const dependencies = collectModuleGraph(root, inventory, policy)
    dependencies.violations.push(...(await checkModuleDirections(dependencies, root)))
    console.log(
      process.argv.includes('--json')
        ? JSON.stringify({ ...report, dependencies }, null, 2)
        : `${formatReport(report)}\n${formatModuleGraph(dependencies)}`,
    )
    if (enforce && (report.violations.length || dependencies.violations.length))
      process.exitCode = 1
  } catch (error) {
    console.error(
      `Architecture verification failed: ${error instanceof Error ? error.message : 'Unknown failure'}`,
    )
    process.exitCode = 1
  }
}
```

</details>


---

<sub>3m 24s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/project-session.ts.**

/private/var/tmp/ws/d493c7da/hvir/src/renderer/src/workspaces/project-session.ts (lines 1-130)

<details>
<summary>117 lines</summary>

```
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'

import {
  unwrapOperation,
  type BrowseHostResponse,
  type ComposerSubmitMode,
  type ConnectedHost,
  type ProjectHostOption,
  type ProjectState,
  type WatchEvent,
} from '../../../shared'
import { initialHostConnectionTarget } from './initial-host-connection'
import { subscribeProjectSessionEvents } from './project-session-events'
import { ProjectStateDelivery } from './project-state-delivery'
import {
  initialProjectSessionModel,
  projectSessionReducer,
  selectActiveProject,
  selectActiveWorkspace,
  selectRelativeWorkspace,
} from './project-session-model'
import { createWorkspaceSessionActions } from './workspace-session-actions'
import { projectFolderPickerClient } from './project-folder-picker-client'

const WATCH_REFRESH_DELAY_MS = 250

interface ProjectSessionVersions {
  readonly watch: number
  readonly ignored: number
  readonly content: number
  readonly git: number
}

interface UseProjectSessionOptions {
  readonly composerSubmitMode: ComposerSubmitMode
  readonly onProjectState: (state: ProjectState) => void
  readonly onReloadFiles: () => void
  readonly onWatchEvent: (event: WatchEvent) => void
  readonly isIgnoreRulePath: (path: string) => boolean
}

export function useProjectSession(options: UseProjectSessionOptions) {
  const [model, dispatch] = useReducer(projectSessionReducer, initialProjectSessionModel)
  const [hosts, setHosts] = useState<readonly ProjectHostOption[]>([])
  const [rootError, setRootError] = useState<string>()
  const [versions, setVersions] = useState<ProjectSessionVersions>({
    watch: 0,
    ignored: 0,
    content: 0,
    git: 0,
  })
  const callbacks = useRef(options)
  const modelRef = useRef(model)
  const generation = useRef(0)
  const delivery = useRef<ProjectStateDelivery | undefined>(undefined)
  callbacks.current = options
  modelRef.current = model
  delivery.current ??= new ProjectStateDelivery((state) => {
    dispatch({ type: 'project-state', state })
    callbacks.current.onProjectState(state)
  })

  const acceptProjectState = useCallback((state: ProjectState): void => {
    delivery.current?.accept(state)
  }, [])

  const bumpVersions = useCallback((keys: readonly (keyof ProjectSessionVersions)[]) => {
    setVersions((current) => {
      const next = { ...current }
      for (const key of keys) next[key] += 1
      return next
    })
  }, [])

  const refreshWorkspaceContent = useCallback((): void => {
    bumpVersions(['watch', 'ignored', 'content', 'git'])
    callbacks.current.onReloadFiles()
  }, [bumpVersions])

  const refreshGit = useCallback((): void => {
    bumpVersions(['git'])
  }, [bumpVersions])

  const runTransition = useCallback(
    async (operation: () => Promise<ProjectState>): Promise<ProjectState | undefined> => {
      const currentGeneration = (generation.current += 1)
      dispatch({ type: 'transition-started', generation: currentGeneration })
      try {
        const state = await operation()
        if (generation.current !== currentGeneration) return undefined
        acceptProjectState(state)
        return state
      } catch (reason) {
        if (generation.current === currentGeneration) {
          dispatch({
            type: 'transition-failed',
            generation: currentGeneration,
            error: errorMessage(reason),
          })
        }
        return undefined
      } finally {
        dispatch({ type: 'transition-finished', generation: currentGeneration })
      }
    },
    [acceptProjectState],
  )

  const configureComposerSubmit = useCallback(async (hostId: string): Promise<void> => {
    await window.hvir.invoke('harness:configure-composer-submit', {
      scope: 'host',
      hostId,
      mode: callbacks.current.composerSubmitMode,
    })
  }, [])

  const configureComposerSubmitNonfatal = useCallback(
    async (hostId: string): Promise<void> => {
      await configureComposerSubmit(hostId).catch((reason) =>
        dispatch({ type: 'reported-error', error: errorMessage(reason) }),
      )
    },
    [configureComposerSubmit],
  )

  const connectHost = useCallback(
    async (hostId: string): Promise<ConnectedHost> => {
      const connected = unwrapOperation(
        await window.hvir.invoke('project:connect-host', { hostId }),
      )
```

</details>


---

<sub>3m 44s</sub>

### `rg`

**(purge_user|purge|user data|Application Support|\.config|\.cache|legacy)**

"(purge_user|purge|user data|Application Support|\.config|\.cache|legacy)" in native-installer.template.sh (scripts)

<details>
<summary>57 matches</summary>

```
[grep content: 55 matches across 1 file(s) under scripts]

native-installer.template.sh (55 match(es)):
  26: legacy_launcher=''
  27: legacy_npm=''
  28: legacy_cache=''
  30: purge=0
  61:   install.sh --uninstall --purge
  64: --purge additionally removes the current user's documented hvir settings and cache.
  85:     if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
  90:     purge=1
  369: legacy_cache_root() {
  375:     printf '%s/.cache/hvir/native\n' "$HOME"
  379: discover_legacy_launcher() {
  387:   legacy_npm=$(command -v npm 2>/dev/null || true)
  388:   if [[ "$legacy_npm" != /* || ! -x "$legacy_npm" ]]; then
  392:   npm_prefix=$("$legacy_npm" prefix -g)
  393:   npm_root=$("$legacy_npm" root -g)
  395:     echo 'The legacy npm installation reported a non-absolute global prefix.' >&2
  413:   listing=$("$legacy_npm" ls -g --depth=0 --parseable hvir-workbench)
  420:       "The verified legacy launcher occupies $native_command; move hvir-workbench to a user-owned npm prefix before native migration." \
  424:   legacy_launcher=$found
  425:   legacy_cache=$(legacy_cache_root)
  444: safe_remove_legacy_cache() {
  445:   [[ -n "$legacy_cache" ]] || return 0
  446:   case "$legacy_cache" in
  449:     echo "Refusing to remove unexpected legacy cache path: $legacy_cache" >&2
  453:   /bin/rm -rf -- "$legacy_cache"
  456: remove_legacy_launcher() {
  458:   [[ -n "$legacy_launcher" ]] || return 0
  459:   stage='removing the verified legacy hvir-workbench launcher'
  463:     "$legacy_npm" uninstall -g hvir-workbench
  464:   if [[ -e "$legacy_launcher" || -L "$legacy_launcher" ]]; then
  465:     echo "npm retained the legacy launcher: $legacy_launcher" >&2
  469:   safe_remove_legacy_cache
  470:   echo 'Removed the legacy npm installation.'
  498:   stage='checking for a legacy npm installation'
  499:   discover_legacy_launcher
  524:   remove_legacy_launcher
  534:   local inventory='/Library/Application Support/hvir/package-inventory-v1.txt'
  544:     'inventory=/Library/Application Support/hvir/package-inventory-v1.txt' \
  556:     elif [[ "$purge" -eq 0 ]]; then
  568:         '/Library/Application Support/hvir/package-inventory-v1.txt'
  569:       /usr/bin/sudo /bin/rmdir '/Library/Application Support/hvir' 2>/dev/null || true
  571:     elif [[ "$purge" -eq 0 ]]; then
  578: purge_roots() {
  581:     echo "Refusing to purge with unsafe HOME: ${HOME:-unset}" >&2
  587:     echo "Refusing to purge with non-canonical HOME: $HOME" >&2
  593:       "$HOME/Library/Application Support/hvir" \
  600:         echo "Refusing to purge with unsafe XDG_CONFIG_HOME: $XDG_CONFIG_HOME" >&2
  606:       printf '%s/.config/hvir\n' "$HOME"
  612:         echo "Refusing to purge with unsafe XDG_CACHE_HOME: $XDG_CACHE_HOME" >&2
  618:       printf '%s/.cache/hvir\n' "$HOME"
  623: purge_user_state() {
  630:       echo "Refusing to purge unexpected path: $path" >&2
  636:   done < <(purge_roots)
  641:   if [[ "$purge" -eq 1 ]]; then
  642:     purge_user_state
```

</details>


---

<sub>4m 9s</sub>

### Copilot

I’ve identified the supported installers, SSH behavior, and development commands. I’m adding those details along with the project’s existing verification limitations.

---

<sub>4m 29s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for coding projects and terminal-based AI agents. It brings\n+project files, Git, terminals, and local or SSH workspaces together in an Electron app.\n+\n+## Features\n+\n+- Work with multiple projects and Git worktrees on your machine or over SSH.\n+- Run shell and agent sessions in split terminals, and see sessions across workspaces.\n+  Harness integrations include Claude Code, Codex, Gemini CLI, GitHub Copilot CLI,\n+  Cursor CLI, and Pi; custom commands are also supported.\n+- Browse and edit files, view Git diffs, and render formats including Markdown, Mermaid,\n+  HTML, JSON, YAML, CSV, and images.\n+- Inspect Git changes, history, and graphs; switch branches, fetch, and pull.\n+- Add document-review comments and copy or deliver feedback to supported terminals.\n+  Open local development servers in web panes.\n+- Customize appearance, terminal behavior, harness profiles, and keyboard shortcuts.\n+\n+Agent CLIs are separate software: install and authenticate them on the host where the\n+workspace runs. Available capabilities and session recovery depend on the provider.\n+\n+## Install\n+\n+Native releases support **Apple-silicon macOS** and **APT-based Linux** on x64 or arm64\n+with glibc 2.35 or newer. Download `install.sh` from\n+[GitHub Releases](https://github.com/jarmak-personal/hvir/releases), review it, and run:\n+\n+```sh\n+bash ./install.sh\n+```\n+\n+The installer selects and verifies the appropriate package and requests administrator\n+access to install or update it. Releases also contain the individual `.pkg` and `.deb`\n+packages and a `SHA256SUMS` file. The macOS package installs hvir in `/Applications`.\n+\n+Launch hvir from your application menu, or open a local directory with the installed\n+command:\n+\n+```sh\n+hvir .\n+```\n+\n+To remove the application, run `bash ./install.sh --uninstall`. This preserves user\n+settings and cache; adding `--purge` removes the current user's hvir state as well.\n+\n+## Getting started\n+\n+1. On first launch, choose a local project folder. Use **+** in the project bar\n+   (**Register project**) to add more local or SSH projects.\n+2. Use **+** in the terminal area to start a shell. Choose **Add a harness...** or open\n+   **Settings > Harnesses** to configure an agent or custom command.\n+3. Use the file tree and Git panel to inspect your project, and the **Sessions** view to\n+   navigate terminal sessions across projects and workspaces.\n+\n+### SSH projects\n+\n+hvir discovers named `Host` entries from `~/.ssh/config` at startup. For example:\n+\n+```sshconfig\n+Host dev-box\n+  HostName dev.example.com\n+  User developer\n+  Port 22\n+  IdentityFile ~/.ssh/id_ed25519\n+```\n+\n+Restart hvir after changing the file, then register a project and select the host. hvir\n+uses `HostName`, `User`, `Port`, and `IdentityFile`; it does not implement every OpenSSH\n+directive, such as `Include` or `ProxyJump`. It can use the SSH agent through\n+`SSH_AUTH_SOCK`, identity files, or interactive authentication. Host-key trust is stored\n+separately from OpenSSH's `known_hosts`; verify the displayed fingerprint before\n+accepting it.\n+\n+### Keyboard shortcuts\n+\n+`Mod` means Command on macOS and Ctrl on Linux. Shortcuts can be changed in\n+**Settings > Keybindings**.\n+\n+| Action | Default |\n+| --- | --- |\n+| Find a file (outside the terminal) | `Mod+P` |\n+| Find in the viewer | `Mod+F` |\n+| Find in the focused terminal | `Mod+Shift+F` |\n+| Focus the terminal | `Mod+J` |\n+| Toggle terminal focus | `Mod+Shift+J` |\n+| Next / previous workspace | `Mod+Alt+]` / `Mod+Alt+[` |\n+\n+## Development\n+\n+Requirements:\n+\n+- Node.js 24 or newer and npm.\n+- Git, Python 3, `make`, and a C/C++ toolchain for native modules. On macOS, install the\n+  Xcode Command Line Tools.\n+- A graphical desktop session and the system libraries needed by Electron. The Linux\n+  package dependencies are listed in [`electron-builder.yml`](electron-builder.yml).\n+\n+```sh\n+git clone https://github.com/jarmak-personal/hvir.git\n+cd hvir\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` downloads Electron and rebuilds the native terminal and filesystem modules.\n+Do not skip installation scripts. If the terminal runtime does not match the checkout,\n+run `npm ci` again.\n+\n+Build the application with `npm run build`; the output is written to `out/`.\n+`npm run preview` launches the built application. To create native packages in `dist/`,\n+run the appropriate command on the matching platform:\n+\n+```sh\n+npm run pack:mac:arm64\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+### Checks\n+\n+```sh\n+npm test                 # Vitest suite\n+npm run test:watch       # Vitest in watch mode\n+npm run lint             # ESLint\n+npm run typecheck        # Node and renderer TypeScript checks\n+npm run format:check     # Prettier\n+npm run smoke:macos      # Electron smoke scenarios on macOS\n+```\n+\n+On Linux, the Electron smoke suite needs a display; for example, use\n+`xvfb-run -a npm run smoke` in a headless environment.\n+\n+CI uses `npm run verify` for the combined seam, ADR, architecture, lint, type, and test\n+checks. In this checkout its ADR step cannot complete because `docs/adr/` and\n+`docs/design.md` are absent. Architecture enforcement also requires the canonical\n+repository and an `HVIR_REPO_TOKEN` GitHub token.\n+\n+## Project layout\n+\n+- `src/main/` — Electron main process, project hosts, terminals, Git, and application\n+  services.\n+- `src/preload/` — the bridge between the renderer and main process.\n+- `src/renderer/` — the React workbench.\n+- `src/shared/` — shared types and IPC contracts.\n+- `src/workers/` — utility-process workers.\n+- `packages/` — local native packages.\n+- `scripts/`, `test/`, and `build/` — development tooling, tests, and packaging resources.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). See\n+[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for bundled software notices.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/d493c7da/hvir/README.md
```


---

<sub>4m 54s</sub>

### `bash`

**Check README formatting**

$ ./node_modules/.bin/prettier --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 8 completed with exit code 0>
```


---

<sub>4m 54s</sub>

### `bash`

**Validate documented local links and npm script names**

$ node --input-type=module -e 'import { readFileSync, existsSync } from "node:fs"; const text = readFileSync("README.md", "utf8"); const { scripts } = JSON.parse(readFileSync("package.json", "utf8")); const problems = []; for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) { const href = match[1]; if (!/^(?:https?:|#)/.test(href) && !existsSync(href.split("#")[0])) problems.push(`Missing local link: ${href}`); } for (const match of text.matchAll(/\bnpm run ([\w:-]+)/g)) { if (!Object.hasOwn(scripts, match[1])) problems.push(`Missing npm script: ${match[1]}`); } if (problems.length) { console.error(problems.join("\n")); process.exitCode = 1; } else console.log("README local links and npm scripts are valid.");'

```
README local links and npm scripts are valid.
<shellId: 7 completed with exit code 0>
```


---

<sub>4m 54s</sub>

### `bash`

**Check working-tree status and README whitespace**

$ git status --short && git diff --no-index --check /dev/null README.md; status=$?; if [ "$status" -eq 1 ]; then exit 0; else exit "$status"; fi

```
?? README.md
<shellId: 9 completed with exit code 0>
```


---

<sub>4m 54s</sub>

### `bash`

**Verify the documented development runtime prerequisite**

$ npm run predev

```
> hvir@0.2.3 predev
> node scripts/check-terminal-runtime.mts
<shellId: 10 completed with exit code 0>
```


---

<sub>5m 29s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

```json
"*** Begin Patch\n*** Update File: README.md\n@@\n-1. On first launch, choose a local project folder. Use **+** in the project bar\n-   (**Register project**) to add more local or SSH projects.\n+1. On first launch, choose a local project folder if you did not supply one on the\n+   command line. Use **+** in the project bar (**Register project**) to add more local or\n+   SSH projects.\n@@\n `SSH_AUTH_SOCK`, identity files, or interactive authentication. Host-key trust is stored\n separately from OpenSSH's `known_hosts`; verify the displayed fingerprint before\n-accepting it.\n+accepting it. Git operations require Git to be installed on the selected host.\n*** End Patch\n"
```

</details>

```
Modified 1 file(s): /private/var/tmp/ws/d493c7da/hvir/README.md
```


---

<sub>5m 35s</sub>

### `view`

**view the file at /private/var/tmp/ws/d493c7da/hvir/README.md.**

/private/var/tmp/ws/d493c7da/hvir/README.md

<details>
<summary>118 lines</summary>

````
# hvir

hvir is a desktop workbench for coding projects and terminal-based AI agents. It brings
project files, Git, terminals, and local or SSH workspaces together in an Electron app.

## Features

- Work with multiple projects and Git worktrees on your machine or over SSH.
- Run shell and agent sessions in split terminals, and see sessions across workspaces.
  Harness integrations include Claude Code, Codex, Gemini CLI, GitHub Copilot CLI,
  Cursor CLI, and Pi; custom commands are also supported.
- Browse and edit files, view Git diffs, and render formats including Markdown, Mermaid,
  HTML, JSON, YAML, CSV, and images.
- Inspect Git changes, history, and graphs; switch branches, fetch, and pull.
- Add document-review comments and copy or deliver feedback to supported terminals.
  Open local development servers in web panes.
- Customize appearance, terminal behavior, harness profiles, and keyboard shortcuts.

Agent CLIs are separate software: install and authenticate them on the host where the
workspace runs. Available capabilities and session recovery depend on the provider.

## Install

Native releases support **Apple-silicon macOS** and **APT-based Linux** on x64 or arm64
with glibc 2.35 or newer. Download `install.sh` from
[GitHub Releases](https://github.com/jarmak-personal/hvir/releases), review it, and run:

```sh
bash ./install.sh
```

The installer selects and verifies the appropriate package and requests administrator
access to install or update it. Releases also contain the individual `.pkg` and `.deb`
packages and a `SHA256SUMS` file. The macOS package installs hvir in `/Applications`.

Launch hvir from your application menu, or open a local directory with the installed
command:

```sh
hvir .
```

To remove the application, run `bash ./install.sh --uninstall`. This preserves user
settings and cache; adding `--purge` removes the current user's hvir state as well.

## Getting started

1. On first launch, choose a local project folder if you did not supply one on the
   command line. Use **+** in the project bar (**Register project**) to add more local or
   SSH projects.
2. Use **+** in the terminal area to start a shell. Choose **Add a harness...** or open
   **Settings > Harnesses** to configure an agent or custom command.
3. Use the file tree and Git panel to inspect your project, and the **Sessions** view to
   navigate terminal sessions across projects and workspaces.

### SSH projects

hvir discovers named `Host` entries from `~/.ssh/config` at startup. For example:

```sshconfig
Host dev-box
  HostName dev.example.com
  User developer
  Port 22
  IdentityFile ~/.ssh/id_ed25519
```

Restart hvir after changing the file, then register a project and select the host. hvir
uses `HostName`, `User`, `Port`, and `IdentityFile`; it does not implement every OpenSSH
directive, such as `Include` or `ProxyJump`. It can use the SSH agent through
`SSH_AUTH_SOCK`, identity files, or interactive authentication. Host-key trust is stored
separately from OpenSSH's `known_hosts`; verify the displayed fingerprint before
accepting it. Git operations require Git to be installed on the selected host.

### Keyboard shortcuts

`Mod` means Command on macOS and Ctrl on Linux. Shortcuts can be changed in
**Settings > Keybindings**.

| Action | Default |
| --- | --- |
| Find a file (outside the terminal) | `Mod+P` |
| Find in the viewer | `Mod+F` |
| Find in the focused terminal | `Mod+Shift+F` |
| Focus the terminal | `Mod+J` |
| Toggle terminal focus | `Mod+Shift+J` |
| Next / previous workspace | `Mod+Alt+]` / `Mod+Alt+[` |

## Development

Requirements:

- Node.js 24 or newer and npm.
- Git, Python 3, `make`, and a C/C++ toolchain for native modules. On macOS, install the
  Xcode Command Line Tools.
- A graphical desktop session and the system libraries needed by Electron. The Linux
  package dependencies are listed in [`electron-builder.yml`](electron-builder.yml).

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

`npm ci` downloads Electron and rebuilds the native terminal and filesystem modules.
Do not skip installation scripts. If the terminal runtime does not match the checkout,
run `npm ci` again.

Build the application with `npm run build`; the output is written to `out/`.
`npm run preview` launches the built application. To create native packages in `dist/`,
run the appropriate command on the matching platform:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

### Checks

```sh
npm test                 # Vitest suite
npm run test:watch       # Vitest in watch mode
npm run lint             # ESLint
npm run typecheck        # Node and renderer TypeScript checks
npm run format:check     # Prettier
npm run smoke:macos      # Electron smoke scenarios on macOS
```

On Linux, the Electron smoke suite needs a display; for example, use
`xvfb-run -a npm run smoke` in a headless environment.

CI uses `npm run verify` for the combined seam, ADR, architecture, lint, type, and test
checks. In this checkout its ADR step cannot complete because `docs/adr/` and
`docs/design.md` are absent. Architecture enforcement also requires the canonical
repository and an `HVIR_REPO_TOKEN` GitHub token.

## Project layout

- `src/main/` — Electron main process, project hosts, terminals, Git, and application
  services.
- `src/preload/` — the bridge between the renderer and main process.
- `src/renderer/` — the React workbench.
- `src/shared/` — shared types and IPC contracts.
- `src/workers/` — utility-process workers.
- `packages/` — local native packages.
- `scripts/`, `test/`, and `build/` — development tooling, tests, and packaging resources.

## License

hvir is licensed under the [MIT License](LICENSE). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for bundled software notices.
````

</details>


---

<sub>5m 35s</sub>

### `bash`

**Verify the final README and working-tree status**

$ ./node_modules/.bin/prettier --check README.md && git status --short && git diff --no-index --check /dev/null README.md; status=$?; if [ "$status" -eq 1 ]; then exit 0; else exit "$status"; fi

```
Checking formatting...
All matched files use Prettier code style!
?? README.md
<shellId: 11 completed with exit code 0>
```


---

<sub>5m 48s</sub>

### Copilot

Created [README.md](README.md) with installation, first-use, SSH, development, packaging, and project overview guidance.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
