# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `357b83a4-c69e-48bf-bbbe-b4e83890278a`  
> - **Started:** 9/17/2026, 11:29:14 PM  
> - **Duration:** 43s  
> - **Exported:** 9/17/2026, 11:29:57 PM  

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

### `view`

**view the file at /private/var/tmp/ws/ebb56ea0/hvir.**

/private/var/tmp/ws/ebb56ea0/hvir

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

<sub>5s</sub>

### `glob`

****/{package.json,pyproject.toml,Cargo.toml,go.mod,README*,Makefile,docker-compose.yml,*.sln}**

"**/{package.json,pyproject.toml,Cargo.toml,go.mod,README*,Makefile,docker-compose.yml,*.sln}"

```
/private/var/tmp/ws/ebb56ea0/hvir/packages/rename-noreplace/package.json
/private/var/tmp/ws/ebb56ea0/hvir/package.json
/private/var/tmp/ws/ebb56ea0/hvir/scripts/project-management/package.json
```


---

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/ebb56ea0/hvir/package.json.**

/private/var/tmp/ws/ebb56ea0/hvir/package.json (lines 1-220)

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

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/ebb56ea0/hvir/src.**

/private/var/tmp/ws/ebb56ea0/hvir/src

```
main
preload
renderer
shared
workers
```


---

<sub>19s</sub>

### `grep`

**HVIR|hvir|terminal.*workspace|remote.*terminal|workbench**

"HVIR|hvir|terminal.*workspace|remote.*terminal|workbench" (src)

<details>
<summary>44 matches</summary>

```
[grep content: 1589 matches across 295 file(s) under /private/var/tmp/ws/ebb56ea0/hvir/src]

preload/index.ts (5 match(es)):
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
           new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
   contextBridge.exposeInMainWorld('hvir', api)
main/git/mutation-coordinator.ts: /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
main/navigation-policy.ts: /** Only these explicit external schemes may leave hvir for the OS browser. */

main/index.ts (14 match(es)):
   import { TerminalWorkspaceMoveCoordinator } from './terminal/terminal-workspace-move-coordinator'
   import { WorkbenchRuntime } from './workbench-runtime'
       app.isPackaged || __HVIR_SMOKE_BUILD__,
       (state) => rendererEvents.toWindows('workbench-health:state', state),
             title: 'Choose a folder for hvir',
         createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
           'hvir-git',
       return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
         if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
             scenario: process.env['HVIR_SMOKE_SCENARIO'],
         console.error('HVIR_STARTUP_FAIL', error)
       if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
       if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return
           console.error('[shutdown] workbench cleanup failed', error)

main/project-coordinator.ts (2 match(es)):
         terminalCount: new Set(this.options.cleanup.workspaceTerminalIds(workspace.root))
           throw new Error('Confirm terminal termination before closing this workspace')

main/workbench-runtime.ts (3 match(es)):
   /** Owns the idempotent lifecycle of the main-process workbench components. */
         throw new Error(`Cannot register ${label} after workbench shutdown started`)
         failures.push(asError('workbench operations', error))
main/pty/pty-supervisor.ts:           TERM_PROGRAM: 'hvir',
main/ipc/authority-router.ts:     throw new Error('IPC is available only to the workbench main frame')

main/window/window-policy.ts (2 match(es)):
   /** The single security baseline used for every workbench BrowserWindow. */
   export function workbenchWindowOptions(preload: string): WorkbenchWindowOptions {

main/document-review/document-review-delivery-coordinator.ts (4 match(es)):
         throw new Error('The selected review terminal is not live in this workspace')
         terminal.hostId === scope.workspace.root.hostId &&
         hostPathEquals(terminal.workspaceRoot, scope.workspace.root)
         hostPathEquals(presentation.workspaceRoot, terminal.workspaceRoot)
shared/harness-provider.ts:   /** Whether hvir should encode Meta+Enter as Control+Enter in intentional-submit mode. */
main/pty/pty-contract.ts:   /** hvir's PTY registry id; generated if omitted. */

[omitted 1553 match(es) in 283 file(s); see original output for full results]
```

</details>


---

<sub>23s</sub>

### `view`

**view the file at /private/var/tmp/ws/ebb56ea0/hvir/src/main/index.ts.**

/private/var/tmp/ws/ebb56ea0/hvir/src/main/index.ts (lines 1-220)

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

<sub>23s</sub>

### `glob`

**src/renderer/**/*.{tsx,ts,md}**

"src/renderer/**/*.{tsx,ts,md}"

<details>
<summary>328 matches</summary>

```
[glob: 307 path(s) under /private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src; grouped by directory]

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/terminal/ (68 path(s))
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
  effect-generation.ts
  generated-terminal-theme-catalog.ts
  ghostty-terminal-events.ts
  ghostty-terminal-file-paste.ts
  ghostty-terminal-fit.ts
  ghostty-terminal-keyboard.ts
  ghostty-terminal-pane.ts
  harness-launch-menu.ts
  terminal-attention.ts
  terminal-clipboard-osc.ts
  terminal-clipboard-write.ts
  terminal-clipboard.ts
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
  use-new-worktree-move-badge.ts
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

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/viewer/ (59 path(s))
  DiffView.tsx
  FileViewer.tsx
  FindControl.tsx
  GoToLineControl.tsx
  LargeFileView.tsx
  MarkdownFragment.tsx
  RenderedView.tsx
  RepositoryImageView.tsx
  SourceView.tsx
  TabStrip.tsx
  code-scroll-anchor.ts
  codemirror-find-target.ts
  csv-parser.ts
  csv-protocol.ts
  csv.worker.ts
  diff-policy.ts
  dom-find-target.ts
  external-document-context.ts
  external-document-tabs.ts
  highlight-protocol.ts
  highlight-request.ts
  highlight-worker.ts
  highlight.worker.ts
  json-protocol.ts
  json.worker.ts
  markdown-client.ts
  markdown-extensions.ts
  markdown-renderer.ts
  markdown-repository-images.ts
  markdown.worker.ts
  render-protocol.ts
  rendered-link-handler.ts
  rendered-position.ts
  retained-viewer-workspace-cache.ts
  shiki-grammar-registry.ts
  shiki-language-catalog.ts
  shiki-language-names.ts
  source-blame-gutter.ts
  source-coordinate.ts
  source-highlighting.ts
  structured-data.ts
  tab-state.ts
  use-diff-inputs.ts
  use-source-blame.ts
  use-viewer-path-lifecycle.ts
  use-viewer-workspace.ts
  viewer-byte-format.ts
  viewer-command-targets.ts
  viewer-document-refresh.ts
  viewer-find.ts
  viewer-path-rebind.ts
  viewer-path-removal.ts
  viewer-position.ts
  viewer-read-policy.ts
  viewer-workload-policy.ts
  viewer-workspace-model.ts
  viewer-workspace-persistence.ts
  viewer-workspace-selectors.ts
  viewer-workspace-state.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/settings/ (34 path(s))
  ComposerSubmitConsentDialog.tsx
  HarnessProfileAdvancedFields.tsx
  HarnessProfileCommandFields.tsx
  HarnessProfileDialogs.tsx
  HarnessProfileEditor.tsx
  HarnessProfileOverlays.tsx
  HarnessProfilesSettings.tsx
  SettingsActiveSection.tsx
  SettingsDialog.tsx
  SettingsSection.tsx
  SettingsSectionNavigation.tsx
  TerminalThemeGallery.tsx
  harness-argument-editor.ts
  harness-profile-draft.ts
  harness-profile-editor-policy.ts
  harness-profile-request-policy.ts
  keybindings.ts
  sections/AppearanceSettings.tsx
  sections/GitSettings.tsx
  sections/KeybindingsSettings.tsx
  sections/TerminalSettings.tsx
  sections/TypographyFontField.tsx
  settings-draft.ts
  settings-model.ts
  settings-navigation.ts
  settings.ts
  typography-presentation.ts
  typography-settings.ts
  use-add-harness-dialog.ts
  use-harness-binding-authorization.ts
  use-harness-folder-picker.ts
  use-harness-profile-editor.ts
  use-harness-profile-load.ts
  use-settings-controller.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/tree/ (27 path(s))
  DirectoryTree.tsx
  FileCreateOverlays.tsx
  FileDeletionDialog.tsx
  FileExternalMoveDialog.tsx
  FileOrganizationDialog.tsx
  FileTree.tsx
  FilenameSearch.tsx
  directory-entry-sort.ts
  file-action-destination.ts
  file-action-menu.ts
  file-manager-reveal.ts
  file-name.ts
  file-operation-feedback.ts
  git-ignore-refresh.ts
  git-status-decoration.ts
  project-entry-drag.ts
  project-file-entry-name.ts
  project-file-owner-key.ts
  use-external-file-actions.ts
  use-external-file-copy.ts
  use-external-file-move.ts
  use-file-create-actions.ts
  use-file-deletion-actions.ts
  use-file-manager-reveal.ts
  use-file-organization-actions.ts
  use-path-copy-action.ts
  use-project-file-operation.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/document-review/ (23 path(s))
  DocumentReviewControls.tsx
  DocumentReviewDeliveryPanel.tsx
  DocumentReviewInlineSurface.tsx
  document-review-anchor.ts
  document-review-batches.ts
  document-review-capture.ts
  document-review-delivery-client.ts
  document-review-delivery-feedback.ts
  document-review-eligibility.ts
  document-review-inline.ts
  document-review-lifecycle.ts
  document-review-model.ts
  document-review-rendered.ts
  document-review-selectors.ts
  document-review-source.ts
  document-review-types.ts
  document-review-validation.ts
  document-review-workspace-controller.ts
  document-review-workspace.ts
  index.ts
  use-document-review-delivery.ts
  use-document-review-interaction.ts
  use-document-review-workspace.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/git/ (19 path(s))
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
  virtual-range.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/workspaces/ (16 path(s))
  ConnectionStatus.tsx
  MissingWorkspaceNotice.tsx
  ProjectsBar.tsx
  SessionDialog.tsx
  SshPromptDialog.tsx
  WorkspaceCatalogDialogs.tsx
  connection-status.ts
  initial-host-connection.ts
  project-folder-picker-client.ts
  project-session-events.ts
  project-session-model.ts
  project-session.ts
  project-state-delivery.ts
  project-watch-interests.ts
  workspace-attention.ts
  workspace-session-actions.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/workbench/ (15 path(s))
  ConfirmationDialog.tsx
  TerminalLayoutControls.tsx
  active-terminal-focus.ts
  middle-click-close.ts
  modal-keyboard-model.ts
  use-modal-keyboard.ts
  use-renderer-ready.ts
  use-terminal-path-activation.ts
  use-workbench-commands.ts
  use-workbench-layout.ts
  use-workbench-overlays.ts
  workbench-command-router.ts
  workbench-layout-policy.ts
  workbench-overlay-model.ts
  workspace-pane-state.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/sessions/ (14 path(s))
  SessionsApplicationDestination.tsx
  SessionsCollectionToolbar.tsx
  SessionsOverview.tsx
  SessionsOverviewCard.tsx
  SessionsOverviewNotice.tsx
  SessionsTerminalDetail.tsx
  sessions-overview-model.ts
  sessions-projection-coordinator.ts
  sessions-renderer-observation.ts
  sessions-terminal-detail-controller.ts
  sessions-terminal-overlay.ts
  sessions-terminal-surface.ts
  use-sessions-foreground.ts
  use-sessions-terminal-detail.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/dashboards/ (8 path(s))
  ElectronWebPaneSurface.tsx
  WebPane.tsx
  WebPaneStack.tsx
  use-web-pane-workspace.ts
  web-pane-diagnostics.ts
  web-pane-surface.ts
  web-pane-url.ts
  web-pane-workspace-policy.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/ (6 path(s))
  App.tsx
  ErrorBoundary.tsx
  hvir.d.ts
  main.tsx
  theme-model.ts
  theme.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/development/ (4 path(s))
  development-performance-fixture.tsx
  development-performance-pump.tsx
  development-renderer-instrumentation.tsx
  performance-measure-budget.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/health/ (3 path(s))
  WorkbenchHealthControl.tsx
  use-diagnostic-evidence.ts
  use-workbench-health.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/layout/ (3 path(s))
  PaneResizer.tsx
  split-layout-policy.ts
  workspace-layout-persistence.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/path-copy/ (3 path(s))
  PathCopyMenu.tsx
  path-copy.ts
  use-path-copy-menu.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/diagnostics/ (2 path(s))
  DiagnosticReportDialog.tsx
  owned-capture-masks.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/context-menu/ (1 path(s))
  viewport-context-menu.ts

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/harness/ (1 path(s))
  ProviderContextMeter.tsx

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/scrollbars/ (1 path(s))
  scrollbar-presentation.ts

[extensions: .ts=222, .tsx=85]
```

</details>


---

<sub>26s</sub>

### `view`

**view the file at /private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/ebb56ea0/hvir/src/renderer/src/App.tsx (lines 1-220)

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

<sub>36s</sub>

### `create`

**create a new file at /private/var/tmp/ws/ebb56ea0/hvir/README.md.**

/private/var/tmp/ws/ebb56ea0/hvir/README.md

```
Created file /private/var/tmp/ws/ebb56ea0/hvir/README.md with 2611 characters
```


---

<sub>42s</sub>

### Copilot

Created `README.md` at the project root.

It includes:
- project overview and feature summary
- prerequisites and quick start
- common development/build commands
- project structure
- packaging notes
- license information



---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
