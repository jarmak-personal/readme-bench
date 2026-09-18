# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `4ef92fc7-5a16-4cbd-8a81-209155f4f593`  
> - **Started:** 9/17/2026, 11:50:41 PM  
> - **Duration:** 4m 15s  
> - **Exported:** 9/17/2026, 11:54:56 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>8s</sub>

### Copilot

I’ll check the project’s structure and setup so the README reflects how it actually works.


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir.**

/private/var/tmp/ws/85a82fb4/hvir

<details>
<summary>26 lines</summary>

```
.git
.githooks
.github
.gitignore
.prettierignore
.prettierrc.json
LICENSE
THIRD_PARTY_NOTICES.md
build
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
node_modules
package-lock.json
package.json
packages
scripts
src
stryker.config.json
test
tsconfig.base.json
tsconfig.json
tsconfig.node.json
tsconfig.web.json
vitest.config.ts
```

</details>


---

<sub>8s</sub>

### `glob`

****/AGENTS.md**

"**/AGENTS.md"

```
No files matched the pattern.
```


---

<sub>8s</sub>

### `bash`

**Check for existing worktree changes**

$ git --no-pager status --short

```

<shellId: 0 completed with exit code 0>
```


---

<sub>24s</sub>

### search_code_subagent (Completed)

### `file_search`

****/src/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/index.html
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-manager-reveal.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-external-file-copy.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-project-file-operation.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-file-create-actions.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/FileTree.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-external-file-actions.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-name.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/DirectoryTree.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/git-ignore-refresh.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/project-file-entry-name.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-action-menu.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-path-copy-action.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/project-entry-drag.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-operation-feedback.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/FileDeletionDialog.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-file-organization-actions.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/git-status-decoration.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-file-manager-reveal.ts
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
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/rename_noreplace.c
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/LICENSE
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/binding.gyp
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/index.js
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/package.json
```

</details>


### `grep_search`

**user-facing|user-facing.*purpose|user.*flow|primary.*flow**

<details>
<summary>Arguments</summary>

```json
{
  "query": "user-facing|user-facing.*purpose|user.*flow|primary.*flow",
  "isRegexp": true
}
```

</details>

<details>
<summary>6 lines</summary>

````
1 matches
```txt
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.json" line=167>
    "reconsiderWhen": "Profile editing and launch-profile selection become separate user workflows with independent controller and persistence lifetimes."
</match>
```
````

</details>


### `grep_search`

**runtime.*requirement|runtime.*requirement|environment.*variable|config.*file|settings**

<details>
<summary>Arguments</summary>

```json
{
  "query": "runtime.*requirement|runtime.*requirement|environment.*variable|config.*file|settings",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
1166 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/styles.css" line=17>
    @import './styles/settings.css';
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/styles.css" line=19>
    @import './styles/harness-settings.css';
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/main.tsx" line=8>
    import { initializeAppSettings } from './settings/settings'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/main.tsx" line=12>
    initializeAppSettings(document.documentElement.style)
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=32>
    import { SettingsDialog } from './settings/SettingsDialog'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=33>
    import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=46>
    const settings = useAppSettings()
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=136>
    composerSubmitMode: settings.composerSubmitMode,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=242>
    useWorkbenchCommands(settings.keybindings, {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=432>
    onSettings={() => overlays.openSettings()}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=511>
    autoFetchIntervalMs={settings.gitAutoFetchIntervalMs}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=635>
    preferences={terminalPreferences(settings)}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=636>
    onOpenSettings={() => overlays.openSettings()}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=637>
    onOpenTerminalSettings={() => overlays.openSettings('terminal')}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=638>
    onOpenHarnessSettings={() => overlays.openSettings('harnesses')}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=639>
    onAddHarness={overlays.openAddHarnessSettings}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=662>
    {overlays.settingsOpen ? (
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=663>
    <SettingsDialog
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=665>
    settings={settings}
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx" line=668>
    initialDestination={overlays.settingsDestination}
</match>
```
````

</details>


### `grep_search`

**feature|implemented.*feature|functionality|capability**

<details>
<summary>Arguments</summary>

```json
{
  "query": "feature|implemented.*feature|functionality|capability",
  "isRegexp": true,
  "includePattern": "**/src/**"
}
```

</details>

<details>
<summary>63 lines</summary>

````
203 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/preload/terminal-clipboard-file-paste.ts" line=6>
    * Keep Electron's native File-path capability inside preload and return only
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/web-pane/web-pane-route-registry.ts" line=72>
    /** Main-owned capability registry for the complete web-pane lifecycle. */
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-branches.ts" line=14>
    import type { GitWorktreeCapability } from './git-worktrees'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-branches.ts" line=24>
    export class GitBranchCapability {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-branches.ts" line=27>
    private readonly worktrees: GitWorktreeCapability,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/sessions/sessions-observation-application.ts" line=20>
    /** Feature-owned application composition for demand-scoped Sessions observation. */
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-diff.ts" line=10>
    export class GitDiffCapability {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-history.ts" line=12>
    export class GitHistoryCapability {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-worktrees.ts" line=5>
    export class GitWorktreeCapability {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/authority-router.ts" line=55>
    /** Narrow capability given to feature registrars; transport and lifecycle stay private. */
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-status.ts" line=29>
    export class GitStatusCapability {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-detail.ts" line=5>
    export class GitDetailCapability {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/authority-port.ts" line=13>
    /** Authority consumes registered project scope; it does not depend on feature IPC deps. */
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=13>
    import { GitBranchCapability } from './git-branches'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=15>
    import { GitDetailCapability } from './git-detail'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=16>
    import { GitDiffCapability } from './git-diff'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=17>
    import { GitHistoryCapability } from './git-history'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=18>
    import { GitStatusCapability } from './git-status'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=19>
    import { GitWorktreeCapability } from './git-worktrees'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/git/git-engine.ts" line=26>
    private readonly worktreeCapability: GitWorktreeCapability
</match>
```
````

</details>


### `grep_search`

**provider|backend|service|external.*tool|integration**

<details>
<summary>Arguments</summary>

```json
{
  "query": "provider|backend|service|external.*tool|integration",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
2586 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/index.ts" line=18>
    import { harnessProviders } from './harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/index.ts" line=263>
    harnessProviders,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.json" line=71>
    "reconsiderWhen": "Anchor persistence and provider handoff become independently activated review workflows with separate setup and cleanup contracts."
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.json" line=166>
    "rationale": "The suite proves the settings feature's user interaction and state lifecycle using one renderer environment and provider catalog.",
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.json" line=199>
    "reconsiderWhen": "Resume authorization leaves the terminal IPC registrar or provider artifact qualification gains a separate public authority boundary."
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=5>
    harnessProviderCatalog,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=6>
    } from '../../harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=7>
    import { providerTemplateProfiles } from '../../harness/harness-profile-store'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=17>
    ipc.handle('harness:catalog', () => harnessProviderCatalog())
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=55>
    const requested = new Set(req.providerIds ?? [])
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=57>
    const profiles = providerTemplateProfiles().filter(
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=58>
    (profile) => requested.size === 0 || requested.has(profile.providerId),
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=71>
    if (req.providerIds.length > 200) throw new Error('Too many harness templates')
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=72>
    return deps.harnessProfiles.materializeTemplates(req.providerIds)
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/agent-work-checkpoint-store.mts" line=1>
    /** Local-only identity: never publish the filename, provider identity, or lookup digest. */
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/agent-work-checkpoint-store.mts" line=21>
    provider: string
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/agent-work-checkpoint-store.mts" line=47>
    .update(JSON.stringify([input.repository, input.provider, input.session]))
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/agent-work-checkpoint-store.mts" line=180>
    throw new Error('Provider counters decreased; allocation unavailable.')
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/terminal.ts" line=3>
    import { harnessProvider, selectHarnessLaunch } from '../../harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/terminal.ts" line=119>
    providerId: profile.providerId,
</match>
```
````

</details>


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "packages/**",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File 'packages/**' does not exist
```


### `read_file` — Failed

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "src/**",
  "startLine": 1,
  "endLine": 200
}
```

</details>

```
Error: File 'src/**' does not exist
```


### `file_search`

****/src/****

<details>
<summary>Arguments</summary>

```json
{
  "query": "**/src/**"
}
```

</details>

<details>
<summary>21 lines</summary>

```
40+ files found (showing first 20; more results are available):
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/index.html
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-manager-reveal.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-external-file-copy.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-project-file-operation.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-file-create-actions.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/FileTree.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-external-file-actions.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-name.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/FileOrganizationDialog.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/DirectoryTree.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/git-ignore-refresh.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/project-file-entry-name.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-action-menu.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-path-copy-action.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/project-entry-drag.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/file-operation-feedback.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/FileDeletionDialog.tsx
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-file-organization-actions.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/git-status-decoration.ts
  /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/tree/use-file-manager-reveal.ts
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
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/rename_noreplace.c
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/LICENSE
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/binding.gyp
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/index.js
  /private/var/tmp/ws/85a82fb4/hvir/packages/rename-noreplace/package.json
```

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "scripts/architecture-hotspots.json",
  "startLine": 1,
  "endLine": 260
}
```

</details>

<details>
<summary>234 lines</summary>

````
File: `/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.json`. Lines 1 to 232 (232 lines total): 
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
    {
      "path": "src/main/index.ts",
      "kind": "stricter",
      "maxLines": 520,
      "owner": "main composition root",
      "rationale": "The composition root wires runtime owners, window presentation, coordinators, worker adapters, and IPC; this strict cap prevents product workflows from returning.",
      "reconsiderWhen": "An application workflow or resource lifecycle moves into the bootstrap instead of a constructed capability owner."
    },
    {
      "path": "src/main/project-host/ssh-host.ts",
      "kind": "durable",
      "maxLines": 1171,
      "owner": "SshHost connection and authentication adapter",
      "rationale": "One public host adapter owns authentication, connection state, cached capabilities, and capacity admission while private collaborators own file, watch, and pool mechanics.",
      "reconsiderWhen": "Authentication/reconnect or transport capacity moves into an independently owned coordinator shared by multiple ProjectHost adapters."
    },
    {
      "path": "src/main/smoke/capacity-terminals.ts",
      "kind": "durable",
      "maxLines": 1137,
      "owner": "terminal capacity acceptance scenario",
      "rationale": "The scenario owns one capacity setup, workload, measurement, and cleanup lifetime across real terminals.",
      "reconsiderWhen": "Terminal workload creation and capacity measurement require independent scenario lifetimes, or the scenario starts measuring non-terminal capacity owners."
    },
    {
      "path": "src/main/smoke/document-review.ts",
      "kind": "durable",
      "maxLines": 1111,
      "owner": "document review Electron acceptance",
      "rationale": "One production-composed review workflow proves anchors, explicit handoff, persistence, and cleanup in its real renderer environment.",
      "reconsiderWhen": "Anchor persistence and provider handoff become independently activated review workflows with separate setup and cleanup contracts."
    },
    {
      "path": "src/main/smoke/index.ts",
      "kind": "stricter",
      "maxLines": 850,
      "owner": "Electron smoke composition root",
      "rationale": "The root constructs production resources, wires narrow project ports and named scenario calls, and reports and disposes the selected lifetime. Scenario assertions and fixture policy remain in their named owners.",
      "reconsiderWhen": "The root reabsorbs scenario assertions or feature fixture policy instead of wiring the owning modules."
    },
    {
      "path": "src/main/smoke/project-file-operations.ts",
      "kind": "durable",
      "maxLines": 1173,
      "owner": "project file operations Electron acceptance",
      "rationale": "One scenario owns disposable source and destination roots and the cross-process operation lifecycle through production authority.",
      "reconsiderWhen": "Source grants and destination execution acquire independent operation lifetimes that can be verified through separate production-composed scenarios."
    },
    {
      "path": "src/main/smoke/sessions-projection.ts",
      "kind": "durable",
      "maxLines": 1198,
      "owner": "Sessions projection Electron acceptance",
      "rationale": "The scenario follows one live session surface lease across workspace and global projections, preserving a shared real-process lifetime.",
      "reconsiderWhen": "The global Sessions projection no longer shares the workspace terminal surface lease, allowing independent lease and projection acceptance scenarios."
    },
    {
      "path": "src/renderer/src/App.tsx",
      "kind": "stricter",
      "maxLines": 686,
      "owner": "renderer composition shell",
      "rationale": "The renderer root is now a composition shell for feature-owned models and views; this strict cap prevents it from reabsorbing feature state and policy.",
      "reconsiderWhen": "Feature state, effects, or navigation policy return to the renderer composition shell."
    },
    {
      "path": "src/renderer/src/settings/HarnessProfilesSettings.tsx",
      "kind": "stricter",
      "maxLines": 220,
      "owner": "harness profile settings composition view",
      "rationale": "HarnessProfilesSettings composes extracted profile policy, controller, fields, and dialogs; the named cap prevents those responsibilities from moving back into the view.",
      "reconsiderWhen": "Profile validation, persistence, or dialog lifecycle is reintroduced into the composition view."
    },
    {
      "path": "src/renderer/src/styles.css",
      "kind": "stricter",
      "maxLines": 100,
      "owner": "stylesheet import manifest",
      "rationale": "The root stylesheet is an explicit ordered import manifest; its lower named cap prevents feature rules from returning to the global composition surface.",
      "reconsiderWhen": "The ordered import manifest begins owning feature selectors or feature-specific cascade rules."
    },
    {
      "path": "src/renderer/src/terminal/terminal-runtime.ts",
      "kind": "stricter",
      "maxLines": 600,
      "owner": "terminal runtime",
      "rationale": "The runtime intentionally owns pane listener wiring and live PTY lifecycle authority. Terminal event effects may evolve inside that owner without forcing false extraction seams, while the named cap remains a blocking non-growth ratchet.... (truncated)
      "reconsiderWhen": "PTY admission or durable session recovery becomes independently owned from pane listener and live terminal teardown."
    },
    {
      "path": "src/renderer/src/terminal/TerminalWorkspace.tsx",
      "kind": "stricter",
      "maxLines": 422,
      "owner": "terminal workspace composition view",
      "rationale": "TerminalWorkspace is now the feature composition view over extracted policy, effects, persistence, recovery, and presentation modules; the named cap preserves that boundary.",
      "reconsiderWhen": "Session recovery, split persistence, or terminal lifecycle policy returns to the workspace composition view."
    },
    {
      "path": "test/file-create-actions.test.tsx",
      "kind": "durable",
      "maxLines": 1154,
      "owner": "file creation actions interaction tests",
      "rationale": "The suite covers one creation workflow's targeting, collision, and user confirmation semantics through narrow file-operation ports.",
      "reconsiderWhen": "Target selection and file creation confirmation become independently activated actions with separate operation authority."
    },
    {
      "path": "test/ghostty-terminal-pane-lifecycle.test.tsx",
      "kind": "durable",
      "maxLines": 1195,
      "owner": "Ghostty terminal pane lifecycle tests",
      "rationale": "The suite exercises the pane's single listener and resource lifetime through its immediate runtime boundary.",
      "reconsiderWhen": "Canvas materialization and listener/disposal ownership split into independent production lifetimes with distinct runtime ports."
    },
    {
      "path": "test/git-engine.test.ts",
      "kind": "durable",
      "maxLines": 1172,
      "owner": "GitEngine public facade contract tests",
      "rationale": "The suite preserves public Git facade behavior over its immediate command boundary while capability parsing policy is tested separately.",
      "reconsiderWhen": "The GitEngine public facade stops owning a tested command contract because that contract moves to another independently callable capability."
    },
    {
      "path": "test/harness-profiles-settings.test.tsx",
      "kind": "durable",
      "maxLines": 1160,
      "owner": "harness profile settings interaction tests",
      "rationale": "The suite proves the settings feature's user interaction and state lifecycle using one renderer environment and provider catalog.",
      "reconsiderWhen": "Profile editing and launch-profile selection become separate user workflows with independent controller and persistence lifetimes."
    },
    {
      "path": "test/project-file-operation-coordinator.test.ts",
      "kind": "durable",
      "maxLines": 1107,
      "owner": "project file operation coordinator tests",
      "rationale": "The suite proves one operation-scoped authority and cleanup lifecycle across host-qualified source and destination ports.",
      "reconsiderWhen": "External-source grants and host-to-host execution move into independently owned coordinators with separate revocation lifetimes."
    },
    {
      "path": "test/smoke-scenario-runner.test.ts",
      "kind": "durable",
      "maxLines": 1159,
      "owner": "smoke process runner tests",
      "rationale": "The suite proves process ownership, interruption, and cleanup through the launcher's immediate child-process boundary.",
      "reconsiderWhen": "Process launch supervision and interruption/cleanup become distinct production owners with separate externally observable contracts."
    },
    {
      "path": "test/ssh-host.test.ts",
      "kind": "durable",
      "maxLines": 1621,
      "owner": "SshHost immediate transport adapter tests",
      "rationale": "The suite characterizes the single public host adapter using its immediate SSH boundary; authentication, reconnect, and teardown assertions share the adapter's lifecycle fixture.",
      "reconsiderWhen": "Authentication, reconnect, or transport capacity moves out of the public adapter into a separate production owner with its own immediate boundary."
    },
    {
      "path": "test/terminal-ipc-resume.test.ts",
      "kind": "durable",
      "maxLines": 1182,
      "owner": "terminal resume IPC authority tests",
      "rationale": "The suite checks one transport authority boundary for exact resume, missing artifacts, and late lifecycle completion.",
      "reconsiderWhen": "Resume authorization leaves the terminal IPC registrar or provider artifact qualification gains a separate public authority boundary."
    },
    {
      "path": "test/terminal-session-registry.test.ts",
      "kind": "durable",
      "maxLines": 1192,
      "owner": "terminal session registry tests",
      "rationale": "The suite owns deterministic registry transitions, retained identity, and lifecycle invariants over the same narrow ports.",
      "reconsiderWhen": "Retained recovery identity and live session transitions cease sharing one registry authority and acquire separate production owners."
    }
  ],
  "generated": [
    {
      "path": "src/renderer/src/terminal/generated-terminal-theme-catalog.ts",
      "maxLines": 5000,
      "owner": "terminal theme catalog generator",
      "rationale": "The deterministic catalog is emitted from the pinned Ghostty/iTerm2 theme source tree; theme data is not manually maintained.",
      "reconsiderWhen": "The output format, pinned theme input, or reproducible generator changes.",
      "generator": "scripts/generate-terminal-theme-catalog.mts",
      "inputs": [
        {
          "path": "scripts/generate-terminal-theme-catalog.mts",
          "sha256": "a7721aa27836926b452ab3756322614b0771518ed2e3171d8e43d0ff387c109e"
        },
        {
          "path": "src/renderer/src/terminal/terminal-color-schema.mts",
          "sha256": "94919f83b1b4876ff99f2d6957f27ddb6701a3ecfc399adb7d0cbe464d6483fe"
        }
      ],
      "command": "npm run generate:terminal-themes -- --source <verified-ghostty-theme-tree>"
    }
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
  "filePath": "src/main/index.ts",
  "startLine": 1,
  "endLine": 220
}
```

</details>

<details>
<summary>223 lines</summary>

````
File: `/private/var/tmp/ws/85a82fb4/hvir/src/main/index.ts`. Lines 1 to 220 (at least 220 lines total): 
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
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "src/renderer/src/App.tsx",
  "startLine": 1,
  "endLine": 320
}
```

</details>

<details>
<summary>323 lines</summary>

````
File: `/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx`. Lines 1 to 320 (at least 320 lines total): 
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
```
````

</details>


### `read_file`

<details>
<summary>Arguments</summary>

```json
{
  "filePath": "src/main/ipc/features/harness.ts",
  "startLine": 1,
  "endLine": 120
}
```

</details>

<details>
<summary>121 lines</summary>

````
File: `/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts`. Lines 1 to 120 (at least 120 lines total): 
```
import { hostPathEquals } from '../../../shared'
import { commandPreview, resolveHarnessLaunch } from '../../harness/harness-launch'
import {
  configureHarnessComposerSubmit,
  harnessProviderCatalog,
} from '../../harness/harness-provider'
import { providerTemplateProfiles } from '../../harness/harness-profile-store'
import type { IpcRegistrar } from '../authority-router'
import type { IpcDeps } from '../deps'

type HarnessIpcDeps = Pick<
  IpcDeps,
  'getProject' | 'getHost' | 'connectedHosts' | 'harnessProfiles' | 'harnessProbes'
>

export function registerHarnessIpc(ipc: IpcRegistrar, deps: HarnessIpcDeps): void {
  ipc.handle('harness:catalog', () => harnessProviderCatalog())
  ipc.handle('harness:profiles', (req) => {
    const workspaceRoot = ipc.authority.workspaceRoot(req.root)
    return deps.harnessProfiles.list(ipc.authority.projectRoot(workspaceRoot))
  })
  ipc.handle('harness:probe-snapshot', (req) => {
    const workspaceRoot = ipc.authority.workspaceRoot(req.root)
    const projectRoot = ipc.authority.projectRoot(workspaceRoot)
    const { host } = deps.getProject()
    return deps.harnessProbes.snapshotProfiles({
      host,
      projectRoot,
      workspaceRoot,
      profiles: deps.harnessProfiles.list(projectRoot),
    })
  })
  ipc.handle('harness:probe-profiles', async (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    const projectRoot = ipc.authority.projectRoot(root)
    const { host } = deps.getProject()
    const requested = new Set(req.profileIds ?? [])
    if (requested.size > 200) throw new Error('Too many harness profiles to probe')
    const profiles = deps.harnessProfiles
      .list(projectRoot)
      .filter((profile) => requested.size === 0 || requested.has(profile.id))
    return deps.harnessProbes.probeProfiles({
      host,
      projectRoot,
      workspaceRoot: root,
      profiles,
      store: deps.harnessProfiles,
      force: req.force === true,
    })
  })
  ipc.handle('harness:probe-templates', async (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    const projectRoot = ipc.authority.projectRoot(root)
    const { host } = deps.getProject()
    const requested = new Set(req.providerIds ?? [])
    if (requested.size > 200) throw new Error('Too many harness templates to probe')
    const profiles = providerTemplateProfiles().filter(
      (profile) => requested.size === 0 || requested.has(profile.providerId),
    )
    return deps.harnessProbes.probeProfiles({
      host,
      projectRoot,
      workspaceRoot: root,
      profiles,
      store: deps.harnessProfiles,
      force: req.force === true,
    })
  })
  ipc.handle('harness:profile-materialize', (req) => {
    ipc.authority.workspaceRoot(req.root)
    if (req.providerIds.length > 200) throw new Error('Too many harness templates')
    return deps.harnessProfiles.materializeTemplates(req.providerIds)
  })
  ipc.handle('harness:profile-save', (req) => {
    const workspaceRoot = ipc.authority.workspaceRoot(req.root)
    const projectRoot = ipc.authority.projectRoot(workspaceRoot)
    if (
      req.input.scope.kind === 'project' &&
      !hostPathEquals(req.input.scope.projectRoot, projectRoot)
    ) {
      throw new Error('Harness profile scope must match the active registered project')
    }
    return deps.harnessProfiles.save({
      id: req.id,
      expectedLaunchRevision: req.expectedLaunchRevision,
      expectedMetadataRevision: req.expectedMetadataRevision,
      input: req.input,
    })
  })
  ipc.handle('harness:profile-duplicate', (req) => deps.harnessProfiles.duplicate(req.id))
  ipc.handle('harness:profile-delete', (req) => deps.harnessProfiles.delete(req.id))
  ipc.handle('harness:preview', async (req) => {
    const root = ipc.authority.workspaceRoot(req.root)
    const projectRoot = ipc.authority.projectRoot(root)
    const { host } = deps.getProject()
    const cwd = await ipc.authority.projectPath(req.cwd, root, host)
    const profile = req.input
      ? deps.harnessProfiles.prepare({ id: req.profileId, input: req.input })
      : deps.harnessProfiles.get(req.profileId)
    if (!profile) throw new Error(`Unknown harness profile '${req.profileId}'`)
    const sessionId = isHarnessSessionId(req.harnessSessionId)
      ? req.harnessSessionId
      : '00000000-0000-4000-8000-000000000000'
    const resolved = await resolveHarnessLaunch({
      profile,
      expectedLaunchRevision: profile.launchRevision,
      projectRoot,
      workspaceRoot: cwd,
      host,
      store: deps.harnessProfiles,
      mode: req.mode,
      context: {
        sessionId,
        cwd,
        defaultShell: await host.defaultShell(),
      },
    })
    return commandPreview(resolved, req.mode)
  })
  ipc.handle('harness:authorize-path', async (req) => {
```
````

</details>


### `grep_search`

**user-facing|user.*flow|primary.*flow|settings|preferences|configuration**

<details>
<summary>Arguments</summary>

```json
{
  "query": "user-facing|user.*flow|primary.*flow|settings|preferences|configuration",
  "isRegexp": true,
  "includePattern": "**/src/**"
}
```

</details>

<details>
<summary>63 lines</summary>

````
877 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/window-policy.ts" line=10>
    readonly webPreferences: {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/window-policy.ts" line=46>
    webPreferences: {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=411>
    // A one-use main-owned route controls each guest and its security preferences.
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=412>
    win.webContents.on('will-attach-webview', (event, webPreferences, params) => {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=431>
    delete webPreferences.preload
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=432>
    webPreferences.nodeIntegration = false
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=433>
    webPreferences.contextIsolation = true
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=434>
    webPreferences.sandbox = true
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=435>
    webPreferences.webSecurity = true
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=436>
    webPreferences.devTools = false
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=437>
    webPreferences.safeDialogs = true
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/window/electron-window-manager.ts" line=438>
    webPreferences.safeDialogsMessage =
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=342>
    const settingsButton = document.querySelector('.settings-toggle');
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=346>
    !(settingsButton instanceof HTMLButtonElement) ||
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=351>
    settingsButton.click();
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=352>
    const waitForSettings = () => {
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=355>
    const mode = document.querySelector('#settings-monospace-font-mode');
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=356>
    const size = document.querySelector('#settings-terminal-text-size');
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=374>
    const family = document.querySelector('#settings-monospace-font');
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/terminal-presentation.ts" line=382>
    (candidate) => candidate.textContent?.trim() === 'Save app settings'
</match>
```
````

</details>


### `grep_search`

**runtime.*requirement|environment.*variable|ipc.*feature|provider.*catalog|harness.*provider**

<details>
<summary>Arguments</summary>

```json
{
  "query": "runtime.*requirement|environment.*variable|ipc.*feature|provider.*catalog|harness.*provider",
  "isRegexp": true
}
```

</details>

<details>
<summary>63 lines</summary>

````
907 matches (more results are available)
```txt
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/sessions/sessions-usage-projection.ts" line=16>
    expectedProviderId: HarnessTelemetry['source']['providerId'],
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/index.ts" line=18>
    import { harnessProviders } from './harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/index.ts" line=263>
    harnessProviders,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/sessions/sessions-observation-application.ts" line=1>
    import { harnessProviders } from '../harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/sessions/sessions-observation-application.ts" line=35>
    harnessProviders.all().map((provider) => ({
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/sessions/sessions-observation-application.ts" line=52>
    new HarnessUsageDemandController(harnessProviders),
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/capacity-scenario.ts" line=2>
    import type { HostPath, HarnessProviderId } from '../../shared'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/capacity-scenario.ts" line=17>
    providerId: HarnessProviderId,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.json" line=166>
    "rationale": "The suite proves the settings feature's user interaction and state lifecycle using one renderer environment and provider catalog.",
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=5>
    harnessProviderCatalog,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=6>
    } from '../../harness/harness-provider'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=17>
    ipc.handle('harness:catalog', () => harnessProviderCatalog())
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/ipc/features/harness.ts" line=72>
    return deps.harnessProfiles.materializeTemplates(req.providerIds)
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/capacity.ts" line=7>
    type HarnessProviderId,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/capacity.ts" line=84>
    providerId: HarnessProviderId,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/harness-profile-workflow.ts" line=19>
    const requestedProviderIds = catalog
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/harness-profile-workflow.ts" line=23>
    const customProviderId = catalog.find(
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/sessions-projection.ts" line=5>
    type HarnessProviderId,
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/sessions-projection.ts" line=13>
    import type { HarnessProvider } from '../harness/harness-provider-contract'
</match>
<match path="/private/var/tmp/ws/85a82fb4/hvir/src/main/smoke/sessions-projection.ts" line=31>
    readonly providerId: HarnessProviderId
</match>
```
````

</details>


### Copilot

\<final_answer>
/src/main/index.ts:1-220
/src/renderer/src/App.tsx:1-260
/src/main/ipc/features/harness.ts:1-120
/scripts/architecture-hotspots.json:1-232
\</final_answer>


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/package.json.**

/private/var/tmp/ws/85a82fb4/hvir/package.json

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

**view the file at /private/var/tmp/ws/85a82fb4/hvir/LICENSE.**

/private/var/tmp/ws/85a82fb4/hvir/LICENSE (lines 1-60)

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

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.github.**

/private/var/tmp/ws/85a82fb4/hvir/.github

```
dependabot.yml
workflows
```


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/scripts.**

/private/var/tmp/ws/85a82fb4/hvir/scripts

<details>
<summary>52 lines</summary>

```
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
```

</details>


---

<sub>27s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/electron-builder.yml.**

/private/var/tmp/ws/85a82fb4/hvir/electron-builder.yml

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

**view the file at /private/var/tmp/ws/85a82fb4/hvir/THIRD_PARTY_NOTICES.md.**

/private/var/tmp/ws/85a82fb4/hvir/THIRD_PARTY_NOTICES.md (lines 1-100)

<details>
<summary>74 lines</summary>

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
```

</details>


---

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/App.tsx (lines 1-260)

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

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/main/harness/harness-provider.ts.**

/private/var/tmp/ws/85a82fb4/hvir/src/main/harness/harness-provider.ts (lines 1-240)

<details>
<summary>47 lines</summary>

```
/**
 * Compatibility facade for the main-owned harness-provider seam (ADR-006/012).
 * Internal policy and observers import their named contracts, never this assembly surface.
 */

export type {
  HarnessLaunchContext,
  HarnessLaunchSpec,
  HarnessComposerConfiguration,
  HarnessRemoteImagePasteContract,
  HarnessDocumentReviewInsertContract,
  HarnessDocumentReviewInsertLaunch,
  HarnessDocumentReviewSendNowLaunch,
  HarnessDocumentReviewSendNowContract,
  HarnessSessionDiscoveryResult,
  HarnessSessionDiscoveryContext,
  HarnessArtifactContext,
  HarnessSessionDiscovery,
  HarnessTelemetryContext,
  HarnessTelemetryObserver,
  HarnessResumeAvailability,
  HarnessResumeValidationContext,
  HarnessResumeValidation,
  HarnessManifest,
  HarnessDefaultProfile,
  HarnessProfileContract,
  HarnessProbeContract,
  HarnessProvider,
} from './harness-provider-contract'
export { HarnessProviderRegistry } from './harness-provider-registry'
export {
  harnessProviderCapabilities,
  harnessLaunchCapabilities,
} from './harness-provider-capabilities'
export {
  selectHarnessLaunch,
  type HarnessLaunchDecision,
} from './harness-launch-selection'
export { plainShellProvider, customCommandProvider } from './providers/shell'
export { claudeCodeProvider } from './providers/claude-code'
export { codexProvider } from './providers/codex'
export {
  harnessProviders,
  harnessProvider,
  harnessProviderCatalog,
  configureHarnessComposerSubmit,
  harnessProviderDiagnostics,
} from './bundled-harness-providers'
```

</details>


---

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.github/workflows.**

/private/var/tmp/ws/85a82fb4/hvir/.github/workflows

<details>
<summary>11 lines</summary>

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
```

</details>


---

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/85a82fb4/hvir/electron.vite.config.ts (lines 1-240)

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

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.prettierrc.json.**

/private/var/tmp/ws/85a82fb4/hvir/.prettierrc.json

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

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.prettierignore.**

/private/var/tmp/ws/85a82fb4/hvir/.prettierignore

<details>
<summary>7 lines</summary>

```
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
```

</details>


---

<sub>41s</sub>

### `rg`

**README|readme|documentation**

"README|readme|documentation" in **/*.{ts,mts} (test)

<details>
<summary>11 matches</summary>

```
test/viewer-types.test.ts
test/document-review-store.test.ts
test/terminal-file-link.test.ts
test/git-ignore-refresh.test.ts
test/document-review-retention.test.ts
test/release-pr-integrity.test.ts
test/filename-search-policy.test.ts
test/document-review-delivery.test.ts
test/commit-file-tree.test.ts
test/viewer-find.test.ts
test/viewer-workspace-model.test.ts
```

</details>


---

<sub>41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/85a82fb4/hvir/scripts/check-terminal-runtime.mts (lines 1-180)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/85a82fb4/hvir/.github/workflows/ci.yml (lines 1-260)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/85a82fb4/hvir/.github/workflows/release.yml (lines 1-260)

<details>
<summary>237 lines</summary>

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
```

</details>


---

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/85a82fb4/hvir/src/main/harness/bundled-harness-providers.ts (lines 1-180)

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

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-230)

<details>
<summary>215 lines</summary>

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
```

</details>


---

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-200)

<details>
<summary>197 lines</summary>

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
```

</details>


---

<sub>58s</sub>

### `rg`

**defaultProfiles|displayName|executable:|command:|label:|title:|description:|defaultProfile**

"defaultProfiles|displayName|executable:|command:|label:|title:|description:|defaultProfile" in *.ts (src/main/harness/providers)

<details>
<summary>104 matches</summary>

```
[grep content: 29 matches across 7 file(s) under src/main/harness/providers]

codex.ts (4 match(es)):
  44-   manifest: {
  45-     id: asHarnessProviderId('codex'),
  46:     displayName: 'Codex',
  47-     sessionKind: 'agent',
  48-     contextPresentation: 'pressure',
  52-   profile: {
  53-     version: 2,
  54:     defaultProfile: {
  55-       id: asHarnessProfileId('codex-default'),
  56:       displayName: 'Codex',
  57:       description: 'Codex with exact rollout discovery and recovery.',
  58-     },
  59-     reservedArguments: ['resume', 'fork'],

github-copilot.ts (4 match(es)):
  5-   manifest: {
  6-     id: asHarnessProviderId('github-copilot-cli'),
  7:     displayName: 'GitHub Copilot CLI',
  8-     sessionKind: 'agent',
  9-     contextPresentation: 'none',
  11-   profile: {
  12-     version: 2,
  13:     defaultProfile: {
  14-       id: asHarnessProfileId('github-copilot-cli-default'),
  15:       displayName: 'GitHub Copilot CLI',
  16:       description:
  17-         'Copilot CLI. Launch-only across versions without verified --session-id.',
  18-     },

shell.ts (5 match(es)):
  10-   manifest: {
  11-     id: asHarnessProviderId('plain-shell'),
  12:     displayName: 'Shell',
  13-     sessionKind: 'shell',
  14-     default: true,
  17-   profile: {
  18-     version: 1,
  19:     defaultProfile: {
  20-       id: asHarnessProfileId('plain-shell-default'),
  21:       displayName: 'Shell',
  22:       description: 'The default interactive shell on this host.',
  23-     },
  24-     reservedArguments: [],
  45-   manifest: {
  46-     id: asHarnessProviderId('custom'),
  47:     displayName: 'Custom',
  48-     sessionKind: 'shell',
  49-     contextPresentation: 'none',

gemini.ts (4 match(es)):
  5-   manifest: {
  6-     id: asHarnessProviderId('gemini-cli'),
  7:     displayName: 'Gemini CLI',
  8-     sessionKind: 'agent',
  9-     contextPresentation: 'none',
  11-   profile: {
  12-     version: 2,
  13:     defaultProfile: {
  14-       id: asHarnessProfileId('gemini-cli-default'),
  15:       displayName: 'Gemini CLI',
  16:       description:
  17-         'Gemini CLI. Launch-only; hvir never substitutes latest-session resume.',
  18-     },

pi.ts (4 match(es)):
  5-   manifest: {
  6-     id: asHarnessProviderId('pi'),
  7:     displayName: 'Pi',
  8-     sessionKind: 'agent',
  9-     contextPresentation: 'none',
  11-   profile: {
  12-     version: 1,
  13:     defaultProfile: {
  14-       id: asHarnessProfileId('pi-default'),
  15:       displayName: 'Pi',
  16:       description:
  17-         'Pi coding agent. Launch-only until exact new-session identity is proven.',
  18-     },

claude-code.ts (4 match(es)):
  29-   manifest: {
  30-     id: asHarnessProviderId('claude-code'),
  31:     displayName: 'Claude Code',
  32-     sessionKind: 'agent',
  33-     contextPresentation: 'pressure',
  38-   profile: {
  39-     version: 3,
  40:     defaultProfile: {
  41-       id: asHarnessProfileId('claude-code-default'),
  42:       displayName: 'Claude Code',
  43:       description: 'Claude Code with exact hvir-managed session recovery.',
  44-     },
  45-     reservedArguments: ['--session-id', '--resume', '--continue', '--fork-session'],

cursor.ts (4 match(es)):
  5-   manifest: {
  6-     id: asHarnessProviderId('cursor-cli'),
  7:     displayName: 'Cursor CLI',
  8-     sessionKind: 'agent',
  9-     contextPresentation: 'none',
  11-   profile: {
  12-     version: 1,
  13:     defaultProfile: {
  14-       id: asHarnessProfileId('cursor-cli-default'),
  15:       displayName: 'Cursor CLI',
  16:       description:
  17-         'Cursor Agent CLI. Launch-only while its beta session listing evolves.',
  18-     },
```

</details>


---

<sub>58s</sub>

### `rg`

**README|readme|documentation**

"README|readme|documentation" in **/*.{ts,mts} (test)

<details>
<summary>42 matches</summary>

```
[grep content: 34 matches across 11 file(s) under test]
viewer-types.test.ts:7:     ['README.md', 'markdown'],

document-review-store.test.ts (6 match(es)):
  75:     const existing = model(target, localPath('/repo/readme.md'), 'legacy draft')
  124:     await store.save(0, model(target, localPath('/repo/readme.md'), 'active draft'))
  157:     await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'kept'))
  172:       store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'no overwrite')),
  179:     await store.save(0, model(localWorkspace, localPath('/repo/readme.md'), 'saved'))
  253:     const valid = model(localWorkspace, localPath('/repo/readme.md'), 'valid')

terminal-file-link.test.ts (6 match(es)):
  17:     expect(detectTerminalFileLinks('at src/main.ts:12:4 and README.md.')).toEqual([
  19:       { target: 'README.md', start: 24, end: 32 },
  25:       'open /srv/project/icon.svg: and README.md: plus (/srv/project/nested/file.ts):'
  30:       'README.md',
  81:     expect(resolveTerminalFileTarget('/srv/project/README.md', root)?.path.path).toBe(
  82:       '/srv/project/README.md',
document-review-retention.test.ts:92:     document: localPath('/repo/readme.md'),
release-pr-integrity.test.ts:235:       { changedFiles: ['package.json', 'README.md'] },

filename-search-policy.test.ts (8 match(es)):
  10:         file('src/my-README.md'),
  11:         file('docs/readme-guide.md'),
  12:         file('README.md'),
  15:       'readme.md',
  19:       '/workspace/README.md',
  20:       '/workspace/src/my-README.md',
  26:       [file('z/readme.md'), file('a/README.md'), file('b/readme.md-notes')],
  27:       'readme.md',

git-ignore-refresh.test.ts (2 match(es)):
  14:           { name: 'README.md', type: 'file' },
  18:           { name: 'README.md', type: 'file' },
document-review-delivery.test.ts:70:     const review = comment('one', '/repo/README.md', 4, source, 'Keep this exact')

commit-file-tree.test.ts (4 match(es)):
  15:       path: localPath('/project/README.md'),
  37:       { kind: 'file', name: 'README.md', depth: 0 },
  44:       { kind: 'file', name: 'README.md', depth: 0 },
  62:     expect(displayGitParentPath(localPath('/project/README.md'), root)).toBe('')

viewer-find.test.ts (2 match(es)):
  54:       '/repo/readme.md',
  68:     const path = localPath('/repo/readme.md')

viewer-workspace-model.test.ts (2 match(es)):
  322:     const id = viewerTabId(localPath('/repo/readme.md'))
  327:         let model = reduce(activate('/repo', 1), open('/repo/readme.md', true))
```

</details>


---

<sub>58s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/build.**

/private/var/tmp/ws/85a82fb4/hvir/build

<details>
<summary>10 lines</summary>

```
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
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/scripts/native-installer.template.sh.**

/private/var/tmp/ws/85a82fb4/hvir/scripts/native-installer.template.sh (lines 1-130)

<details>
<summary>122 lines</summary>

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
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/.github/workflows/macos-package-release.yml.**

/private/var/tmp/ws/85a82fb4/hvir/.github/workflows/macos-package-release.yml (lines 1-140)

<details>
<summary>129 lines</summary>

```
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
          if [[ ! "$SOURCE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::source_sha must be a full commit SHA"
            exit 1
          fi

      - name: Check out trusted source
        uses: actions/checkout@v7
        with:
          ref: ${{ inputs.source_sha }}
          fetch-depth: 0

      - name: Confirm the protected branch contains the exact source
        env:
          SOURCE_BRANCH: ${{ github.ref_name }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          git fetch origin "refs/heads/$SOURCE_BRANCH"
          if [ "$(git rev-parse HEAD)" != "$SOURCE_SHA" ]; then
            echo "::error::checkout does not match requested source"
            exit 1
          fi
          branch_sha=$(git rev-parse FETCH_HEAD)
          if ! git merge-base --is-ancestor "$SOURCE_SHA" "$branch_sha"; then
            echo "::error::$SOURCE_SHA is not contained in $SOURCE_BRANCH"
            exit 1
          fi

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Require protected signing credentials
        env:
          MACOS_APPLICATION_CERTIFICATE: ${{ secrets.MACOS_APPLICATION_CERTIFICATE }}
          MACOS_APPLICATION_CERTIFICATE_PASSWORD: ${{ secrets.MACOS_APPLICATION_CERTIFICATE_PASSWORD }}
          MACOS_INSTALLER_CERTIFICATE: ${{ secrets.MACOS_INSTALLER_CERTIFICATE }}
          MACOS_INSTALLER_CERTIFICATE_PASSWORD: ${{ secrets.MACOS_INSTALLER_CERTIFICATE_PASSWORD }}
          MACOS_NOTARY_ISSUER_ID: ${{ secrets.MACOS_NOTARY_ISSUER_ID }}
          MACOS_NOTARY_KEY: ${{ secrets.MACOS_NOTARY_KEY }}
          MACOS_NOTARY_KEY_ID: ${{ secrets.MACOS_NOTARY_KEY_ID }}
          MACOS_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
        run: |
          missing=false
          for name in \
            MACOS_APPLICATION_CERTIFICATE \
            MACOS_APPLICATION_CERTIFICATE_PASSWORD \
            MACOS_INSTALLER_CERTIFICATE \
            MACOS_INSTALLER_CERTIFICATE_PASSWORD \
            MACOS_NOTARY_KEY \
            MACOS_NOTARY_KEY_ID \
            MACOS_NOTARY_ISSUER_ID \
            MACOS_TEAM_ID; do
            if [ -z "${!name}" ]; then
              echo "::error::$name is unavailable in native-release-signing"
              missing=true
            fi
          done
          if [ "$missing" = true ]; then
            exit 1
          fi

      - name: Prepare protected notary credential
        env:
          NOTARY_KEY: ${{ secrets.MACOS_NOTARY_KEY }}
        run: |
          umask 077
          key_path="$RUNNER_TEMP/hvir-notary-key.p8"
          printf '%s' "$NOTARY_KEY" > "$key_path"
          echo "APPLE_API_KEY=$key_path" >> "$GITHUB_ENV"

      - name: Build signed and notarized package
        env:
          CSC_LINK: ${{ secrets.MACOS_APPLICATION_CERTIFICATE }}
          CSC_KEY_PASSWORD: ${{ secrets.MACOS_APPLICATION_CERTIFICATE_PASSWORD }}
          CSC_INSTALLER_LINK: ${{ secrets.MACOS_INSTALLER_CERTIFICATE }}
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/85a82fb4/hvir/scripts/check-adrs.mjs (lines 1-150)

<details>
<summary>139 lines</summary>

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
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.mjs.**

/private/var/tmp/ws/85a82fb4/hvir/scripts/architecture-hotspots.mjs (lines 1-130)

```
#!/usr/bin/env node
// Retain the public npm/CLI entry point; substantive behavior is typechecked.
import { runArchitectureCommand } from './architecture-hotspots.mts'
await runArchitectureCommand()

```


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/build/native.**

/private/var/tmp/ws/85a82fb4/hvir/build/native

```
hvir-command
```


---

<sub>1m 14s</sub>

### `glob`

**src/main/project-host/***

"src/main/project-host/*"

<details>
<summary>21 matches</summary>

```
./src/main/project-host/ssh-project-file-transfer.ts
./src/main/project-host/ssh-exclusive-create.ts
./src/main/project-host/ssh-transport-pool.ts
./src/main/project-host/ssh-auth.ts
./src/main/project-host/project-host-catalog.ts
./src/main/project-host/electron-project-trash.ts
./src/main/project-host/index.ts
./src/main/project-host/renderer-ssh-prompter.ts
./src/main/project-host/ssh-client-lifecycle.ts
./src/main/project-host/local-host.ts
./src/main/project-host/ssh-host-trust.ts
./src/main/project-host/ssh-file-access.ts
./src/main/project-host/ssh-host.ts
./src/main/project-host/ssh-host-options.ts
./src/main/project-host/project-host.ts
./src/main/project-host/ssh-text-prefix.ts
./src/main/project-host/electron-project-reveal.ts
./src/main/project-host/ssh-config.ts
./src/main/project-host/ssh-abort.ts
./src/main/project-host/ssh-identity-source.ts
./src/main/project-host/ssh-watch-service.ts
```

</details>


---

<sub>1m 14s</sub>

### `rg`

**function projectRootArgument|process\.argv|HVIR_PROJECT|HVIR_USER_DATA|userDataRoot|userData**

"function projectRootArgument|process\.argv|HVIR_PROJECT|HVIR_USER_DATA|userDataRoot|userData" in *.ts (src/main/index.ts, src/main/application-runtime.ts)

<details>
<summary>29 matches</summary>

```
[grep content: 5 matches across 2 file(s) under src/main]

application-runtime.ts (1 match(es)):
  13- )
  14- 
  15- /** Resolves one application-owned state file beneath the selected runtime root. */
  16- export function applicationUserDataPath(name: string): string {
  17:   return join(applicationRuntime.userDataRoot, name)
  18- }

index.ts (4 match(es)):
  72-     (scopes) => scopes.dispose(),
  73-   )
  74-   const rendererEvents = new RendererEventPublisher(rendererScopes)
  75-   const diagnostics = RuntimeDiagnostics.create(
  76:     applicationRuntime.userDataRoot,
  77-     app.isPackaged || __HVIR_SMOKE_BUILD__,
  78-     (state) => rendererEvents.toWindows('workbench-health:state', state),
  79-   )
  80-   const diagnosticReports = runtime.own(
  425-         .catch((error) => console.error('[workspace] watch reopen failed', error))
  426-     }
  427-     createWindow()
  428-   }
  429:   function projectRootArgument(): string | undefined {
  430:     const fromFlag = process.argv.find((arg) => arg.startsWith('--project-root='))
  431:     return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
  432-   }
  433-   void app
  434-     .whenReady()
  435-     .then(async () => {
```

</details>


---

<sub>1m 14s</sub>

### `rg`

**aria-label=|title=|>Stage|>Commit|>Fetch|>Pull|>Push|>Discard**

"aria-label=|title=|>Stage|>Commit|>Fetch|>Pull|>Push|>Discard" in *.tsx (src/renderer/src/git)

<details>
<summary>36 matches</summary>

```
[grep content: 31 matches across 5 file(s) under src/renderer/src/git]

GitHistoryView.tsx (7 match(es)):
  254:       aria-label="Commit history"
  270:         aria-label="Commit history"
  292:                   title={commit.subject || '(no subject)'}
  329:                   aria-label={`Open ${commit.shortHash} in full history`}
  330:                   title="Open in full history"
  380:       <span className="git-rail-history-state" title={item.title}>
  416:       title={entry.file.path.path}

GitBranchControls.tsx (4 match(es)):
  54:         title={branchError ?? branchBlockReason ?? 'Switch existing local branch'}
  96:             title={fetchBlockedReason ?? 'Refresh remote branch information'}
  104:             title={pullBlockReason ?? 'Fast-forward from the configured upstream'}
  116:         <small title={new Date(lastFetchedAt).toLocaleString()}>

GitGraphView.tsx (14 match(es)):
  302:     <section className="git-graph-view" aria-label="Git history graph">
  330:               <span>Commit</span>
  347:               aria-label="Repository commits"
  408:                           <time title={row.commit.authoredAt}>
  450:           title={ref}
  478:     <aside className="git-commit-inspector" aria-label="Commit details">
  480:         <strong>Commit details</strong>
  481:         <button type="button" aria-label="Close commit details" onClick={onClose}>
  502:                 <dt>Commit</dt>
  503:                 <dd title={detail.hash}>{detail.shortHash}</dd>
  557:         aria-label="Commit message"
  571:         <span className="git-commit-message-more" title="More commit message below">
  633:         aria-label="Files changed in commit"
  674:                 title={entry.file.path.path}
GitPanel.tsx:69:     <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>

GitChangesView.tsx (5 match(es)):
  50:             title={group.title}
  78:           title={group.title}
  89:           title={changes.branchPointUnavailableReason}
  230:               title={file.path.path}
  256:                   <span className="git-count-omitted" title="Line counts unavailable">
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/settings/SettingsDialog.tsx.**

/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/settings/SettingsDialog.tsx (lines 1-130)

<details>
<summary>123 lines</summary>

```
import { useCallback, useEffect, useRef, type ReactElement } from 'react'

import type { HostPath } from '../../../shared'
import type { AppTheme } from '../theme'
import { ComposerSubmitConsentDialog } from './ComposerSubmitConsentDialog'
import type { HarnessProfilesSettingsHandle } from './HarnessProfilesSettings'
import { SettingsActiveSection } from './SettingsActiveSection'
import { SettingsSectionNavigation } from './SettingsSectionNavigation'
import type { AppSettings } from './settings'
import {
  DEFAULT_SETTINGS_DESTINATION,
  settingsSectionHeadingId,
  type SettingsDestination,
} from './settings-navigation'
import { useSettingsController } from './use-settings-controller'

interface SettingsDialogProps {
  readonly theme: AppTheme
  readonly settings: AppSettings
  readonly onSave: (theme: AppTheme, settings: AppSettings) => void
  readonly onClose: () => void
  readonly workspaceRoot?: HostPath
  readonly projectRoot?: HostPath
  readonly initialDestination?: SettingsDestination
}

export function SettingsDialog({
  theme,
  settings,
  onSave,
  onClose,
  workspaceRoot,
  projectRoot,
  initialDestination = DEFAULT_SETTINGS_DESTINATION,
}: SettingsDialogProps): ReactElement {
  const dialog = useRef<HTMLElement>(null)
  const harnessProfiles = useRef<HarnessProfilesSettingsHandle>(null)
  const confirmSafeToLeaveHarnesses = useCallback(
    () => harnessProfiles.current?.confirmSafeToLeave() ?? Promise.resolve(true),
    [],
  )
  const controller = useSettingsController({
    theme,
    settings,
    initialDestination,
    confirmSafeToLeaveHarnesses,
    onSave,
    onClose,
  })
  const requestClose = controller.requestClose

  useEffect(() => {
    if (initialDestination.intent === 'add-harness') return
    const frame = window.requestAnimationFrame(() => {
      if (initialDestination.section === 'appearance') dialog.current?.focus()
      else
        document
          .getElementById(settingsSectionHeadingId(initialDestination.section))
          ?.focus()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [initialDestination])

  useEffect(() => {
    const keydown = (event: KeyboardEvent): void => {
      if (dialog.current?.querySelector('.modal-backdrop.nested')) return
      if (event.key === 'Escape' && !(event.target instanceof HTMLTextAreaElement)) {
        requestClose()
      }
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [requestClose])

  const statusMessage = controller.validation?.message ?? controller.saveError

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog settings-dialog"
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        tabIndex={-1}
      >
        <header className="settings-shell-heading">
          <div>
            <span>Workbench preferences</span>
            <h2 id="settings-title">Settings</h2>
          </div>
          <p>Keep hvir focused, legible, and tuned to the way you work.</p>
        </header>
        <div className="settings-shell-body">
          <SettingsSectionNavigation
            activeSection={controller.activeSection}
            onSelect={controller.requestSection}
          />
          <div className="settings-content">
            <SettingsActiveSection
              activeSection={controller.activeSection}
              draft={controller.draft}
              validation={controller.validation}
              harnessProfiles={harnessProfiles}
              workspaceRoot={workspaceRoot}
              projectRoot={projectRoot}
              initialAddOpen={controller.initialAddOpen}
              onChange={controller.updateDraft}
              onComposerSubmitMode={controller.requestComposerSubmitMode}
            />
          </div>
        </div>
        <footer className="settings-footer">
          <div className="settings-footer-status" aria-live="polite">
            {statusMessage ? (
              <p className="dialog-error" role="alert">
                {statusMessage}
              </p>
            ) : (
              <span>App preferences apply together when saved.</span>
            )}
          </div>
          <div className="dialog-actions">
            <button type="button" onClick={controller.requestClose}>
              Close settings
            </button>
            <button type="button" onClick={() => void controller.save()}>
              Save app settings
            </button>
          </div>
```

</details>


---

<sub>1m 14s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx.**

/private/var/tmp/ws/85a82fb4/hvir/src/renderer/src/sessions/SessionsApplicationDestination.tsx (lines 1-170)

<details>
<summary>41 lines</summary>

```
import type { ReactElement } from 'react'

import type {
  ProjectState,
  SessionsLivePtyQualifier,
  SessionsTerminalHandle,
  SessionsWorkspaceQualifier,
} from '../../../shared'
import type { SessionsRendererObservationPort } from './sessions-renderer-observation'
import type { SessionsTerminalSurfacePort } from './sessions-terminal-surface'
import { SessionsOverview } from './SessionsOverview'

interface SessionsDestinationRuntime {
  readonly sessionsObservation: SessionsRendererObservationPort
  readonly sessionsSurface: SessionsTerminalSurfacePort
  readonly focusProjectedSession: (
    handle: SessionsTerminalHandle,
    workspaceQualifier: SessionsWorkspaceQualifier,
    livePty: SessionsLivePtyQualifier,
  ) => Promise<boolean>
}

export function SessionsApplicationDestination({
  active,
  runtime,
  onOpened,
  onError,
}: {
  readonly active: boolean
  readonly runtime: SessionsDestinationRuntime
  readonly onOpened: (state: ProjectState) => void
  readonly onError: (message: string) => void
}): ReactElement | null {
  if (!active) return null
  return (
    <SessionsOverview
      observation={runtime.sessionsObservation}
      surface={runtime.sessionsSurface}
      onOpened={onOpened}
      onFocusOpened={runtime.focusProjectedSession}
      onOpenFailed={onError}
    />
  )
}
```

</details>


---

<sub>1m 41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/build/native/hvir-command.**

/private/var/tmp/ws/85a82fb4/hvir/build/native/hvir-command (lines 1-210)

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

<sub>1m 41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/85a82fb4/hvir/src/main/project-host/ssh-config.ts (lines 1-220)

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

<sub>1m 41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/main/project-host/ssh-host-options.ts.**

/private/var/tmp/ws/85a82fb4/hvir/src/main/project-host/ssh-host-options.ts (lines 1-200)

<details>
<summary>34 lines</summary>

```
import type { Client } from 'ssh2'

import type { SshAuthPrompter } from './ssh-auth'
import type { SshAliasConfig } from './ssh-config'
import type { SshHostTrust } from './ssh-host-trust'
import type { SshIdentitySource } from './ssh-identity-source'

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
```

</details>


---

<sub>1m 41s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/src/main/application-runtime.ts.**

/private/var/tmp/ws/85a82fb4/hvir/src/main/application-runtime.ts

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

<sub>1m 41s</sub>

### `rg`

**github\.com/[^/]+/hvir|jarmak-personal/hvir|install\.sh|releaseBaseUrl**

"github\.com/[^/]+/hvir|jarmak-personal/hvir|install\.sh|releaseBaseUrl" in *.{mjs,yml} (scripts/render-native-installer.mjs, scripts/assemble-native-release.mjs, scripts/release-changelog.mjs, .github/workflows/release.yml)

<details>
<summary>43 matches</summary>

```
[grep content: 8 matches across 3 file(s)]

scripts/render-native-installer.mjs (4 match(es)):
  29-   }
  30- 
  31:   const releaseBaseUrl =
  32-     `https://github.com/${options.repository}/releases/download/` + `v${options.version}`
  33-   const replacements = new Map([
  34-     ['HVIR_VERSION', shellQuote(options.version)],
  35:     ['HVIR_RELEASE_BASE_URL', shellQuote(releaseBaseUrl)],
  36-     ['HVIR_LINUX_X64_ARTIFACT', shellQuote(artifacts.linuxX64.name)],
  37-     ['HVIR_LINUX_X64_SHA256', shellQuote(artifacts.linuxX64.sha256)],
  66-   await writeFile(outputPath, output, { encoding: 'utf8', mode: 0o755 })
  67-   await chmod(outputPath, 0o755)
  68:   return { artifacts, outputPath, releaseBaseUrl }
  69- }
  70- 
  153-   return {
  154-     version: values.get('--version'),
  155:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',
  156-     linuxX64Artifact: values.get('--linux-x64-artifact'),
  157-     linuxArm64Artifact: values.get('--linux-arm64-artifact'),

scripts/assemble-native-release.mjs (3 match(es)):
  52-     })),
  53-   )
  54:   const installerPath = resolve(assetDirectory, 'install.sh')
  55-   const rendered = await renderNativeInstaller({
  56-     version,
  147-   const entries = await readdir(assetDirectory)
  148-   const allowedGenerated = new Set([
  149:     'install.sh',
  150-     'release-manifest.json',
  151-     'SHA256SUMS',
  210-     version: values.get('--version'),
  211-     sourceSha: values.get('--source-sha'),
  212:     repository: values.get('--repository') ?? 'jarmak-personal/hvir',
  213-     macosTeamId: values.get('--macos-team-id'),
  214-     assetDirectory: values.get('--asset-directory'),

.github/workflows/release.yml (1 match(es)):
  560-             "hvir-${VERSION}-linux-arm64.deb" \
  561-             "hvir-${VERSION}-linux-x64.deb" \
  562:             install.sh \
  563-             release-manifest.json |
  564-             sort)
```

</details>


---

<sub>1m 41s</sub>

### `rg`

**HVIR_REPO_TOKEN|GITHUB_TOKEN|gh auth|process\.env|docs/**

"HVIR_REPO_TOKEN|GITHUB_TOKEN|gh auth|process\.env|docs/" in *.{mts,sh} (scripts/architecture-github.mts, scripts/architecture-hotspots.mts, scripts/check-seams.sh)

<details>
<summary>17 matches</summary>

```
scripts/architecture-hotspots.mts-83-    let collected
scripts/architecture-hotspots.mts-84-    if (enforce) {
scripts/architecture-hotspots.mts:85:      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
scripts/architecture-hotspots.mts-86-      const context = await resolveArchitectureContext(root, api)
scripts/architecture-hotspots.mts-87-      collected = await authorizeCandidate({
--
scripts/architecture-github.mts-45-  if (!token)
scripts/architecture-github.mts-46-    throw new Error(
scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
scripts/architecture-github.mts-48-    )
scripts/architecture-github.mts-49-  const request = <T,>(path: string): Promise<T> =>
--
scripts/architecture-github.mts-100-  root: string,
scripts/architecture-github.mts-101-  api: ArchitectureGitHub,
scripts/architecture-github.mts:102:  environment: NodeJS.ProcessEnv = process.env,
scripts/architecture-github.mts-103-): Promise<ArchitectureContext> {
scripts/architecture-github.mts-104-  const tested = fullCommit(root, 'HEAD')
```

</details>


---

<sub>1m 41s</sub>

### `rg`

**label:|Harnesses|New terminal|New agent|Add project|Open project|Open folder**

"label:|Harnesses|New terminal|New agent|Add project|Open project|Open folder" in *.{ts,tsx} (src/renderer/src/settings/settings-navigation.ts, src/renderer/src/workspaces/ProjectsBar.tsx, src/renderer/src/terminal)

<details>
<summary>18 matches</summary>

```
src/renderer/src/workspaces/ProjectsBar.tsx:559:        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
src/renderer/src/workspaces/ProjectsBar.tsx:561:          label: 'Close project',
src/renderer/src/workspaces/ProjectsBar.tsx:645:        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
src/renderer/src/workspaces/ProjectsBar.tsx:647:          label: 'Prune stale records',
src/renderer/src/settings/settings-navigation.ts:2:  { id: 'appearance', label: 'Appearance' },
src/renderer/src/settings/settings-navigation.ts:3:  { id: 'terminal', label: 'Terminal' },
src/renderer/src/settings/settings-navigation.ts:4:  { id: 'git', label: 'Git' },
src/renderer/src/settings/settings-navigation.ts:5:  { id: 'keybindings', label: 'Keybindings' },
src/renderer/src/settings/settings-navigation.ts:6:  { id: 'harnesses', label: 'Harnesses' },
src/renderer/src/terminal/TerminalWorkspaceControls.tsx:36:  readonly label: string
src/renderer/src/terminal/TerminalMoveDialog.tsx:46:        { label: 'Cancel', kind: 'cancel', onSelect: onCancel },
src/renderer/src/terminal/TerminalMoveDialog.tsx:48:          label: 'Move terminal here and open',
src/renderer/src/terminal/TerminalWorkspace.tsx:66:  readonly label: string
src/renderer/src/terminal/TerminalDeck.tsx:66:  readonly label: string
src/renderer/src/terminal/TerminalDeck.tsx:159:              New terminal
src/renderer/src/terminal/TerminalRail.tsx:57:  readonly label: string
src/renderer/src/terminal/TerminalRail.tsx:195:              aria-label="New terminal"
src/renderer/src/terminal/TerminalRail.tsx:196:              title="New terminal"
```

</details>


---

<sub>1m 41s</sub>

### `rg`

**python3|command -v|uname|Node\.js|node --|requires|SFTP|POSIX**

"python3|command -v|uname|Node\.js|node --|requires|SFTP|POSIX" in *.ts (src/main/project-host)

<details>
<summary>164 matches</summary>

```
[grep content: 34 matches across 10 file(s) under src/main/project-host]

ssh-project-file-transfer.ts (7 match(es)):
  1: import type { SFTPWrapper } from 'ssh2'
  2- 
  3- import {
  19- export interface SshProjectFileTransferPort {
  20-   readonly hostId: HostId
  21:   getSftp(): Promise<SFTPWrapper>
  22-   stat(path: HostPath): Promise<Stat>
  23-   invalidate(path: string): void
  24- }
  25- 
  26: /** Immediate SFTP transfer mechanics with truthful post-submission cancellation. */
  27- export class SshProjectFileTransfer {
  28-   constructor(private readonly port: SshProjectFileTransferPort) {}
  243-   private async request<T>(
  244-     operation: (
  245:       session: SFTPWrapper,
  246-       done: (error: Error | null | undefined, value: T) => void,
  247-     ) => void,
  257-   private async perform<T>(
  258-     operation: (
  259:       session: SFTPWrapper,
  260-       done: (error: Error | null | undefined, value: T) => void,
  261-     ) => void,
  272- 
  273- function callbackRequest<T>(
  274:   session: SFTPWrapper,
  275-   operation: (
  276:     session: SFTPWrapper,
  277-     done: (error: Error | null | undefined, value: T) => void,
  278-   ) => void,

ssh-exclusive-create.ts (4 match(es)):
  1: import type { SFTPWrapper } from 'ssh2'
  2- 
  3- import type { HostId, HostPath, Stat } from '../../shared'
  10- interface SshExclusiveCreatePort {
  11-   readonly hostId: HostId
  12:   getSftp(): Promise<SFTPWrapper>
  13-   stat(path: HostPath): Promise<Stat>
  14-   invalidate(path: string): void
  15- }
  16- 
  17: /** Immediate exclusive SFTP mechanics; recursive workflow policy stays above ProjectHost. */
  18- export class SshExclusiveCreate {
  19-   constructor(private readonly port: SshExclusiveCreatePort) {}
  101-   private perform<T>(
  102-     operation: (
  103:       session: SFTPWrapper,
  104-       done: (error: Error | null | undefined, value: T) => void,
  105-     ) => void,

ssh-transport-pool.ts (3 match(es)):
  1: import { type Client, type ClientChannel, type SFTPWrapper } from 'ssh2'
  2- 
  3- import type { Disposer } from './project-host'
  105-   }
  106- 
  107:   async openSftp(): Promise<SFTPWrapper> {
  108-     const { value: session, reservation } = await this.openWithChannelRetry(
  109-       'control',
  110-       (transport) =>
  111:         new Promise<SFTPWrapper>((resolve, reject) => {
  112-           try {
  113-             transport.client.sftp((error, value) =>

local-host.ts (1 match(es)):
  163-         cwd: opts.cwd ? this.resolve(opts.cwd) : undefined,
  164-         env: environment,
  165:         // Buffered commands never own a terminal. Give each POSIX command its
  166-         // own session so login-interactive shells and terminal job-control
  167-         // signals cannot stop Electron's process group with them.

ssh-file-access.ts (11 match(es)):
  1- import { createHash, randomUUID } from 'node:crypto'
  2- 
  3: import type { SFTPWrapper } from 'ssh2'
  4- 
  5- import {
  33- export interface SshFileAccessOwner {
  34-   readonly hostId: HostId
  35:   openSftp(): Promise<SFTPWrapper>
  36- }
  37- 
  38: /** Transport-scoped SFTP/cache state plus content-scoped optimistic save authority. */
  39- export class SshFileAccess {
  40-   private readonly exclusiveCreate: SshExclusiveCreate
  41-   private readonly projectTransfer: SshProjectFileTransfer
  42-   private generation = 0
  43:   private sftpSession?: Promise<SFTPWrapper>
  44-   private readonly cache = new Map<
  45-     string,
  324- 
  325-   async pollStamp(
  326:     sftp: SFTPWrapper,
  327-     path: string,
  328-     attrs: import('ssh2').Attributes,
  347-   }
  348- 
  349:   async getSftp(): Promise<SFTPWrapper> {
  350-     if (this.sftpSession) return this.sftpSession
  351-     const generation = this.generation
  353-       if (generation !== this.generation) {
  354-         session.end()
  355:         throw new Error('SSH SFTP session belongs to a stale connection generation')
  356-       }
  357-       return session
  393- 
  394-   private sftp<T>(
  395:     op: (s: SFTPWrapper, done: (e: Error | null | undefined, value: T) => void) => void,
  396-     signal?: AbortSignal,
  397-   ): Promise<T> {
  457- 
  458- export function sftpLstat(
  459:   sftp: SFTPWrapper,
  460-   path: string,
  461- ): Promise<import('ssh2').Stats> {
  466- 
  467- export function sftpReaddir(
  468:   sftp: SFTPWrapper,
  469-   path: string,
  470- ): Promise<import('ssh2').FileEntry[]> {
  474- }
  475- 
  476: function sftpReadFile(sftp: SFTPWrapper, path: string): Promise<Buffer> {
  477-   return new Promise((resolve, reject) =>
  478-     sftp.readFile(path, (error, value) => (error ? reject(error) : resolve(value))),

ssh-host.ts (2 match(es)):
  229-     const result = await this.exec('sh', [
  230-       '-lc',
  231:       'if [ -n "$SHELL" ] && [ -x "$SHELL" ]; then printf "%s\\n" "$SHELL"; elif command -v bash >/dev/null 2>&1; then command -v bash; else printf "/bin/sh\\n"; fi',
  232-     ])
  233-     const candidate = result.stdout.trim().split(/\r?\n/).at(-1)
  683-       this.tier =
  684-         (
  685:           await this.exec('sh', ['-lc', 'command -v inotifywait >/dev/null'], {
  686-             signal: probe.signal,
  687-             maxBuffer: 64 * 1024,

ssh-host-options.ts (2 match(es)):
  23-   /** Maximum directories enumerated in one polling tick. */
  24-   readonly pollDirectoryBatchSize?: number
  25:   /** Local window for catching multiple writes hidden by SFTP's second-level mtime. */
  26-   readonly fingerprintObservationWindowMs?: number
  27-   /**
  28-    * Maximum short-lived buffered exec channels. Long-lived PTY, watcher, and
  29:    * telemetry channels plus SFTP share the control transport budget. The
  30-    * default admits bounded parallel Git/filesystem reads while pool admission
  31-    * still protects every transport's reserved capacity.

project-host.ts (1 match(es)):
  313-   removeFile(path: HostPath, opts?: RemoveFileOptions): Promise<void>
  314-   readdir(path: HostPath): Promise<DirEntry[]>
  315:   /** Inspect the entry itself without following symbolic links (local/SFTP lstat). */
  316-   stat(path: HostPath): Promise<Stat>
  317-   /** Canonicalize through symlinks on the project host. */

ssh-text-prefix.ts (1 match(es)):
  25- }
  26- 
  27: /** One bounded SFTP read whose promise settles on every stream lifecycle exit. */
  28- export async function readSshTextPrefix(
  29-   session: SshTextPrefixSession,

ssh-abort.ts (2 match(es)):
  1: import type { SFTPWrapper } from 'ssh2'
  2- 
  3- export function writeSftpFile(
  4:   session: SFTPWrapper,
  5-   path: string,
  6-   data: Buffer,
```

</details>


---

<sub>3m 9s</sub>

### Copilot

I’m writing the README around the implemented workflows, with separate instructions for installing the desktop app and developing it from source.


---

<sub>3m 33s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: /private/var/tmp/ws/85a82fb4/hvir/README.md\n+# hvir\n+\n+hvir is a desktop workbench for terminal-based development and AI coding agents.\n+It brings projects, Git worktrees, terminals, files, diffs, and web panes into one\n+Electron application, whether your code lives locally or on an SSH host.\n+\n+## Features\n+\n+- **Project and worktree navigation:** switch between projects and Git worktrees\n+  with workspace-specific terminals and file views.\n+- **Integrated terminals:** native PTY sessions rendered with `ghostty-web`, with\n+  split layouts, terminal search, and configurable presentation.\n+- **Coding-agent profiles:** launch Claude Code, Codex, Pi, Gemini CLI, GitHub\n+  Copilot CLI, Cursor CLI, a plain shell, or a custom command.\n+- **Files and Git in context:** browse and edit files, inspect rendered previews\n+  and diffs, review Git changes and commit history, switch branches, fetch, and pull.\n+- **Session overview:** observe sessions across workspaces and return to their\n+  terminals from the Sessions view.\n+- **Local and remote work:** use local folders or connect to SSH hosts, with\n+  embedded web panes, themes, and configurable keyboard shortcuts.\n+\n+## Install\n+\n+Download a native package from\n+[GitHub Releases](https://github.com/jarmak-personal/hvir/releases).\n+\n+| Platform | Architecture | Package |\n+| --- | --- | --- |\n+| macOS | Apple silicon / arm64 | `.pkg` |\n+| Debian/Ubuntu-compatible Linux | x64 or arm64 | `.deb` |\n+\n+Install the package with your operating system's package installer. Linux packages\n+require glibc 2.35 or newer and `libstdc++6` version 12 or newer; desktop-library\n+dependencies are declared in [electron-builder.yml](electron-builder.yml).\n+Windows and Intel macOS are not current native release targets.\n+\n+Releases also include an `install.sh` helper. Download and inspect it before\n+running `bash install.sh`. It selects the platform package, verifies its pinned\n+SHA-256 digest, and invokes the native installer. Installation may require\n+administrator privileges. Node.js is not required to use the packaged app.\n+\n+Launch hvir from your desktop, or open a local project with the installed command:\n+\n+```sh\n+hvir .\n+```\n+\n+You can also pass another directory, such as `hvir /path/to/project`.\n+\n+## Getting started\n+\n+1. Open a project folder. Use the project picker to add another local project or\n+   connect to an SSH host.\n+2. Open a **New terminal** and choose a shell or coding-agent profile.\n+3. Use the file and Git views alongside the terminal to inspect your work.\n+4. Switch projects or worktrees from the workspace navigation, or use **Sessions**\n+   to find a running session.\n+5. Open **Settings** to adjust appearance, terminal preferences, Git preferences,\n+   keybindings, and **Harnesses** (agent launch profiles).\n+\n+hvir launches agent CLIs; it does not bundle those tools or their accounts.\n+Install and authenticate the agents you want to use on the host where your project\n+runs. Session discovery and recovery capabilities are provider-specific; several\n+integrations are launch-only.\n+\n+### SSH projects\n+\n+hvir discovers concrete host aliases from `~/.ssh/config`. For example:\n+\n+```sshconfig\n+Host devbox\n+    HostName dev.example.com\n+    User developer\n+    IdentityFile ~/.ssh/id_ed25519\n+```\n+\n+Choose the host in the project picker, complete any trust or authentication prompts,\n+and select a remote folder. Check the host-key fingerprint before trusting a new\n+host. Remote terminals and Git commands run on that host, so Git and any desired\n+agent CLIs must be available there.\n+\n+## Develop from source\n+\n+### Prerequisites\n+\n+- Node.js **24 or newer** and npm. CI uses Node.js 24.\n+- Git.\n+- Python 3 and a native C/C++ build toolchain for the native modules. On macOS,\n+  use the Xcode Command Line Tools; on Linux, provide `make` and a C/C++ compiler.\n+- A graphical desktop session for running Electron.\n+\n+```sh\n+git clone https://github.com/jarmak-personal/hvir.git\n+cd hvir\n+npm ci\n+npm run dev\n+```\n+\n+Do not skip npm's lifecycle scripts. The postinstall step installs Electron,\n+builds the private `@hvir/rename-noreplace` addon, and rebuilds `node-pty` against\n+Electron's ABI.\n+\n+To open a particular local project during development:\n+\n+```sh\n+HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev\n+```\n+\n+The development and production-build commands check that the installed\n+`ghostty-web` runtime matches this checkout. If that check reports a mismatch,\n+run `npm ci` again before retrying. The project uses a pinned compatibility-fork\n+artifact; see [Third-party notices](THIRD_PARTY_NOTICES.md).\n+\n+### Common commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Start the Electron/Vite development app. |\n+| `npm run build` | Type-check and build the app into `out/`. |\n+| `npm run preview` | Run the previously built app. |\n+| `npm run lint` | Run ESLint. |\n+| `npm run typecheck` | Check the Node and renderer TypeScript projects. |\n+| `npm test` | Run the Vitest suite once. |\n+| `npm run test:watch` | Run Vitest in watch mode. |\n+| `npm run smoke` | Build the smoke runtime and run Electron workflow scenarios. |\n+| `npm run build:dir` | Build an unpacked application under `dist/`. |\n+\n+Smoke tests launch Electron and require a display. On headless Linux, CI runs:\n+\n+```sh\n+xvfb-run -a npm run smoke\n+```\n+\n+`npm run smoke:macos` runs a focused macOS scenario set. Additional commands for\n+mutation testing, SSH acceptance, architecture checks, and release tooling are\n+listed in [package.json](package.json).\n+\n+### Native packages\n+\n+Build on the matching operating system and architecture so the native modules\n+match the package target:\n+\n+| Target | Command |\n+| --- | --- |\n+| macOS arm64 | `npm run pack:mac:arm64` |\n+| Linux x64 | `npm run pack:linux:x64` |\n+| Linux arm64 | `npm run pack:linux:arm64` |\n+\n+Artifacts are written to `dist/`. Signed macOS releases also require signing and\n+notarization credentials; the\n+[macOS package workflow](.github/workflows/macos-package-release.yml) implements\n+that release process.\n+\n+## Project layout\n+\n+```text\n+src/main/                 Electron lifecycle, IPC, projects, PTYs, SSH, and sessions\n+src/preload/              Renderer-to-main bridge\n+src/renderer/             React workbench UI\n+src/shared/               Shared types and protocol contracts\n+src/workers/              Utility-process workers, including Git operations\n+packages/rename-noreplace/ Native no-overwrite rename addon\n+test/                     Vitest tests\n+scripts/                  Repository checks, smoke tests, and release tooling\n+build/                    Icons, platform integration, and installer resources\n+```\n+\n+The app is built with Electron, React, TypeScript, and electron-vite. Native host\n+operations live outside the renderer, which accesses them through the preload\n+bridge and typed IPC contracts.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). Bundled dependencies retain\n+their own licenses; additional attribution is in\n+[Third-party notices](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/85a82fb4/hvir/README.md
```


---

<sub>3m 47s</sub>

### `bash`

**Run existing Markdown and ADR checks**

$ npm run check-adrs

<details>
<summary>18 lines</summary>

```
> hvir@0.2.3 check-adrs
> node scripts/check-adrs.mjs

node:fs:1884
  const result = binding.readdir(
                         ^

Error: ENOENT: no such file or directory, scandir '/private/var/tmp/ws/85a82fb4/hvir/docs/adr'
    at readdirSync (node:fs:1884:26)
    at file:///private/var/tmp/ws/85a82fb4/hvir/scripts/check-adrs.mjs:20:26
    at ModuleJob.run (node:internal/modules/esm/module_job:569:25)
    at async node:internal/modules/esm/loader:650:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/85a82fb4/hvir/docs/adr'
}

Node.js v26.5.0
<shellId: 1 completed with exit code 1>
```

</details>


---

<sub>3m 47s</sub>

### `bash`

**Check README whitespace and final worktree scope**

$ git --no-pager diff --no-index --check /dev/null README.md && git --no-pager status --short

```

<shellId: 2 completed with exit code 1>
```


---

<sub>3m 47s</sub>

### `view`

**view the file at /private/var/tmp/ws/85a82fb4/hvir/README.md.**

/private/var/tmp/ws/85a82fb4/hvir/README.md (lines 1-220)

<details>
<summary>136 lines</summary>

````
# hvir

hvir is a desktop workbench for terminal-based development and AI coding agents.
It brings projects, Git worktrees, terminals, files, diffs, and web panes into one
Electron application, whether your code lives locally or on an SSH host.

## Features

- **Project and worktree navigation:** switch between projects and Git worktrees
  with workspace-specific terminals and file views.
- **Integrated terminals:** native PTY sessions rendered with `ghostty-web`, with
  split layouts, terminal search, and configurable presentation.
- **Coding-agent profiles:** launch Claude Code, Codex, Pi, Gemini CLI, GitHub
  Copilot CLI, Cursor CLI, a plain shell, or a custom command.
- **Files and Git in context:** browse and edit files, inspect rendered previews
  and diffs, review Git changes and commit history, switch branches, fetch, and pull.
- **Session overview:** observe sessions across workspaces and return to their
  terminals from the Sessions view.
- **Local and remote work:** use local folders or connect to SSH hosts, with
  embedded web panes, themes, and configurable keyboard shortcuts.

## Install

Download a native package from
[GitHub Releases](https://github.com/jarmak-personal/hvir/releases).

| Platform | Architecture | Package |
| --- | --- | --- |
| macOS | Apple silicon / arm64 | `.pkg` |
| Debian/Ubuntu-compatible Linux | x64 or arm64 | `.deb` |

Install the package with your operating system's package installer. Linux packages
require glibc 2.35 or newer and `libstdc++6` version 12 or newer; desktop-library
dependencies are declared in [electron-builder.yml](electron-builder.yml).
Windows and Intel macOS are not current native release targets.

Releases also include an `install.sh` helper. Download and inspect it before
running `bash install.sh`. It selects the platform package, verifies its pinned
SHA-256 digest, and invokes the native installer. Installation may require
administrator privileges. Node.js is not required to use the packaged app.

Launch hvir from your desktop, or open a local project with the installed command:

```sh
hvir .
```

You can also pass another directory, such as `hvir /path/to/project`.

## Getting started

1. Open a project folder. Use the project picker to add another local project or
   connect to an SSH host.
2. Open a **New terminal** and choose a shell or coding-agent profile.
3. Use the file and Git views alongside the terminal to inspect your work.
4. Switch projects or worktrees from the workspace navigation, or use **Sessions**
   to find a running session.
5. Open **Settings** to adjust appearance, terminal preferences, Git preferences,
   keybindings, and **Harnesses** (agent launch profiles).

hvir launches agent CLIs; it does not bundle those tools or their accounts.
Install and authenticate the agents you want to use on the host where your project
runs. Session discovery and recovery capabilities are provider-specific; several
integrations are launch-only.

### SSH projects

hvir discovers concrete host aliases from `~/.ssh/config`. For example:

```sshconfig
Host devbox
    HostName dev.example.com
    User developer
    IdentityFile ~/.ssh/id_ed25519
```

Choose the host in the project picker, complete any trust or authentication prompts,
and select a remote folder. Check the host-key fingerprint before trusting a new
host. Remote terminals and Git commands run on that host, so Git and any desired
agent CLIs must be available there.

## Develop from source

### Prerequisites

- Node.js **24 or newer** and npm. CI uses Node.js 24.
- Git.
- Python 3 and a native C/C++ build toolchain for the native modules. On macOS,
  use the Xcode Command Line Tools; on Linux, provide `make` and a C/C++ compiler.
- A graphical desktop session for running Electron.

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

Do not skip npm's lifecycle scripts. The postinstall step installs Electron,
builds the private `@hvir/rename-noreplace` addon, and rebuilds `node-pty` against
Electron's ABI.

To open a particular local project during development:

```sh
HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev
```

The development and production-build commands check that the installed
`ghostty-web` runtime matches this checkout. If that check reports a mismatch,
run `npm ci` again before retrying. The project uses a pinned compatibility-fork
artifact; see [Third-party notices](THIRD_PARTY_NOTICES.md).

### Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron/Vite development app. |
| `npm run build` | Type-check and build the app into `out/`. |
| `npm run preview` | Run the previously built app. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Check the Node and renderer TypeScript projects. |
| `npm test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run smoke` | Build the smoke runtime and run Electron workflow scenarios. |
| `npm run build:dir` | Build an unpacked application under `dist/`. |

Smoke tests launch Electron and require a display. On headless Linux, CI runs:

```sh
xvfb-run -a npm run smoke
```

`npm run smoke:macos` runs a focused macOS scenario set. Additional commands for
mutation testing, SSH acceptance, architecture checks, and release tooling are
listed in [package.json](package.json).

### Native packages

Build on the matching operating system and architecture so the native modules
match the package target:

| Target | Command |
| --- | --- |
| macOS arm64 | `npm run pack:mac:arm64` |
| Linux x64 | `npm run pack:linux:x64` |
| Linux arm64 | `npm run pack:linux:arm64` |

Artifacts are written to `dist/`. Signed macOS releases also require signing and
notarization credentials; the
[macOS package workflow](.github/workflows/macos-package-release.yml) implements
that release process.

## Project layout

```text
src/main/                 Electron lifecycle, IPC, projects, PTYs, SSH, and sessions
src/preload/              Renderer-to-main bridge
src/renderer/             React workbench UI
src/shared/               Shared types and protocol contracts
src/workers/              Utility-process workers, including Git operations
packages/rename-noreplace/ Native no-overwrite rename addon
test/                     Vitest tests
scripts/                  Repository checks, smoke tests, and release tooling
build/                    Icons, platform integration, and installer resources
```

The app is built with Electron, React, TypeScript, and electron-vite. Native host
operations live outside the renderer, which accesses them through the preload
bridge and typed IPC contracts.

## License

hvir is licensed under the [MIT License](LICENSE). Bundled dependencies retain
their own licenses; additional attribution is in
[Third-party notices](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>4m 8s</sub>

### `bash`

**Verify README references and confirm only README was added**

$ node --input-type=module <<'NODE' && git --no-pager status --short
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const readme = readFileSync('README.md', 'utf8')
const { scripts } = JSON.parse(readFileSync('package.json', 'utf8'))
for (const [, target] of readme.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
  if (!/^https?:\/\//.test(target)) {
    assert.ok(existsSync(target), `Missing README link: ${target}`)
  }
}
for (const [, script] of readme.matchAll(/npm run ([\w:-]+)/g)) {
  assert.ok(Object.hasOwn(scripts, script), `Unknown npm script: ${script}`)
}
for (const [, path] of readme.matchAll(/^((?:src|packages|test|scripts|build)\/\S*) +/gm)) {
  assert.ok(existsSync(path), `Missing project path: ${path}`)
}
assert.equal((readme.match(/^```/gm) ?? []).length % 2, 0, 'Unclosed code fence')
assert.ok(!/[\t ]+$/m.test(readme), 'Trailing whitespace')
assert.ok(readme.endsWith('\n'), 'Missing final newline')
console.log('README links, npm scripts, project paths, and whitespace verified.')
NODE

```
README links, npm scripts, project paths, and whitespace verified.
?? README.md
<shellId: 3 completed with exit code 0>
```


---

<sub>4m 14s</sub>

### Copilot

Created [README.md](README.md) covering features, native installation, local and SSH workflows, development setup, build commands, project structure, and licensing.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
