# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `295cd489-5ffb-4e10-a245-3bb5c44f34fe`  
> - **Started:** 9/17/2026, 10:36:00 PM  
> - **Duration:** 22s  
> - **Exported:** 9/17/2026, 10:36:22 PM  

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

### `bash`

**Inspect repo root and project manifests**

$ cd /private/var/tmp/ws/50db6e65/hvir && pwd && ls -la && find . -maxdepth 2 -type f \( -name 'package.json' -o -name 'pyproject.toml' -o -name 'Cargo.toml' -o -name 'go.mod' -o -name '*.md' -o -name 'Makefile' -o -name 'Dockerfile' \) | sed 's#^./##' | sort | head -200

<details>
<summary>33 lines</summary>

```
/private/var/tmp/ws/50db6e65/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 17 22:35 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:35 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:35 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:35 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 17 22:35 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 17 22:35 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 17 22:35 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 17 22:35 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 17 22:35 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 17 22:35 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 17 22:35 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 17 22:35 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 17 22:35 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 17 22:35 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 17 22:35 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 17 22:35 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 17 22:35 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 17 22:35 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 17 22:35 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 17 22:35 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 17 22:35 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 17 22:35 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 17 22:35 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 17 22:35 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 17 22:35 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 17 22:35 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 17 22:35 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 17 22:35 vitest.config.ts
package.json
THIRD_PARTY_NOTICES.md
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/50db6e65/hvir/package.json.**

/private/var/tmp/ws/50db6e65/hvir/package.json (lines 1-220)

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

<sub>7s</sub>

### `view`

**view the file at /private/var/tmp/ws/50db6e65/hvir/src.**

/private/var/tmp/ws/50db6e65/hvir/src (lines 1-200)

```
main
preload
renderer
shared
workers
```


---

<sub>12s</sub>

### `grep`

**hvir|terminal|workspace|ssh**

"hvir|terminal|workspace|ssh" in **/*.{ts,tsx,js,mjs,md,json} (src, scripts, build)

<details>
<summary>66 matches</summary>

````
[grep content: 5260 matches across 432 file(s)]

src/preload/terminal-clipboard-file-paste.ts (3 match(es)):
   import { terminalClipboardFilePastePath } from '../shared'
   export function terminalClipboardFilePasteText(
     return terminalClipboardFilePastePath(readNativePath(file))

scripts/architecture-hotspots.json (27 match(es)):
         "path": "src/main/project-host/ssh-host.ts",
         "path": "src/main/smoke/capacity-terminals.ts",
         "owner": "terminal capacity acceptance scenario",
         "rationale": "The scenario owns one capacity setup, workload, measurement, and cleanup lifetime across real terminals.",
         "reconsiderWhen": "Terminal workload creation and capacity measurement require independent scenario lifetimes, or the scenario starts measuring non-terminal capacity owners."
         "rationale": "The scenario follows one live session surface lease across workspace and global projections, preserving a shared real-process lifetime.",
         "reconsiderWhen": "The global Sessions projection no longer shares the workspace terminal surface lease, allowing independent lease and projection acceptance scenarios."
         "path": "src/renderer/src/terminal/terminal-runtime.ts",
         "owner": "terminal runtime",
         "reconsiderWhen": "PTY admission or durable session recovery becomes independently owned from pane listener and live terminal teardown."
         "path": "src/renderer/src/terminal/TerminalWorkspace.tsx",
         "owner": "terminal workspace composition view",
         "reconsiderWhen": "Session recovery, split persistence, or terminal lifecycle policy returns to the workspace composition view."
         "path": "test/ghostty-terminal-pane-lifecycle.test.tsx",
         "owner": "Ghostty terminal pane lifecycle tests",
         "path": "test/ssh-host.test.ts",
         "path": "test/terminal-ipc-resume.test.ts",
         "owner": "terminal resume IPC authority tests",
         "reconsiderWhen": "Resume authorization leaves the terminal IPC registrar or provider artifact qualification gains a separate public authority boundary."
         "path": "test/terminal-session-registry.test.ts",
         "owner": "terminal session registry tests",
         "path": "src/renderer/src/terminal/generated-terminal-theme-catalog.ts",
         "owner": "terminal theme catalog generator",
         "generator": "scripts/generate-terminal-theme-catalog.mts",
             "path": "scripts/generate-terminal-theme-catalog.mts",
             "path": "src/renderer/src/terminal/terminal-color-schema.mts",
         "command": "npm run generate:terminal-themes -- --source <verified-ghostty-theme-tree>"

src/preload/index.ts (7 match(es)):
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
   import { terminalClipboardFilePasteText } from './terminal-clipboard-file-paste'
       terminalClipboardFilePasteText(file, (candidate) =>
           new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
   contextBridge.exposeInMainWorld('hvir', api)

scripts/prepare-release-pr.mjs (4 match(es)):
     await git('commit', '-m', `Bump hvir to ${version}`)
       `## hvir ${input.version}`,
       '<!-- hvir-release-pr:v1 -->',
         `Release hvir ${input.version}`,
scripts/project-management/github-delivery-adapters.ts:     environment.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
src/main/attention-badge.ts: /** Quiet OS-level aggregation for actionable terminal attention. */

src/main/renderer-presentation-resources.ts (3 match(es)):
     readonly sshPrompter: () => RendererSshPrompter | null
         { lifetime: 'renderer', type: 'ssh-prompt-presentation' },
         () => resources.sshPrompter()?.revokeOwner(owner),

src/main/workspace-activity.ts (2 match(es)):
   export function workspaceActivitySnapshot(
   export function workspaceActivityChanged(

scripts/project-management/session-token-receipts.ts (6 match(es)):
   export const SESSION_TOKEN_MARKER = '<!-- hvir-session-tokens:v2 -->'
   export const LEGACY_TOKEN_MARKER = '<!-- hvir-agent-work-measurement:v1 -->'
     return `${receipt.schema === 2 ? SESSION_TOKEN_MARKER : '<!-- hvir-session-tokens:v3 -->'}\n\n\`\`\`json\n${JSON.stringify(receipt)}\n\`\`\``
         !comment.body.startsWith('<!-- hvir-session-tokens:v3 -->')
       const match = /^<!-- hvir-session-tokens:v[23] -->\n\n```json\n([^\n]+)\n```$/.exec(
           !comment.body.startsWith(`<!-- hvir-session-tokens:v${value.schema} -->`)
scripts/project-management/kind-cli.ts:   HVIR_REPOSITORY               owner/name (default: jarmak-personal/hvir)
scripts/project-management/sync-pull-request-planning.ts:     process.env.HVIR_REPOSITORY ?? 'jarmak-personal/hvir',
scripts/project-management/legacy-token-evidence.ts:     /^<!-- hvir-agent-work-measurement:v1 -->\n\n```json\n([\s\S]+)\n```$/.exec(body)

[omitted 5203 match(es) in 420 file(s); see original output for full results]
````

</details>


---

<sub>12s</sub>

### `glob`

****/*.md**

"**/*.md"

```
/private/var/tmp/ws/50db6e65/hvir/THIRD_PARTY_NOTICES.md
/private/var/tmp/ws/50db6e65/hvir/test/fixtures/rendered.md
/private/var/tmp/ws/50db6e65/hvir/test/fixtures/rendered-mmd.md
```


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/50db6e65/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/50db6e65/hvir/src/renderer/src/App.tsx (lines 1-220)

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

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/50db6e65/hvir/src/main/index.ts.**

/private/var/tmp/ws/50db6e65/hvir/src/main/index.ts (lines 1-220)

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

<sub>19s</sub>

### `create`

**create a new file at /private/var/tmp/ws/50db6e65/hvir/README.md.**

/private/var/tmp/ws/50db6e65/hvir/README.md

```
Created file /private/var/tmp/ws/50db6e65/hvir/README.md with 1957 characters
```


---

<sub>22s</sub>

### Copilot

Created README.md at the project root with a project overview, feature list, setup instructions, and development commands.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
