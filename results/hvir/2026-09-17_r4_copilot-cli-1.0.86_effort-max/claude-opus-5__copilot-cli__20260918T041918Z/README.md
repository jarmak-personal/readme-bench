# hvir

A desktop workbench for driving coding agents across local and remote projects.

hvir is an Electron application that puts a Ghostty-powered terminal surface, a Git-aware file
tree, a split file/diff viewer, and embedded web panes into one project-oriented window. Terminals
are not just shells — they are **harness sessions** launched from bundled provider profiles
(Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi, plain shell, or a custom
command), so the workbench can resume them exactly, track their context pressure, surface them in a
sessions overview, and deliver code-review comments straight into a running agent.

Projects can live on the local machine or on a remote machine reached over SSH; the same file tree,
Git views, viewer, and terminals work against either.

---

## Features

**Projects and workspaces**

- Project bar with tabs, connection status, refresh/disconnect/reconnect, and workspace
  close/prune/reopen flows.
- Git-decorated file tree with filename search, ignore refresh, and missing-workspace handling.
- Local projects and SSH-backed remote projects driven through one host abstraction; remote hosts
  are discovered from `~/.ssh/config`, with transport pooling, SFTP, trust storage, and identity
  resolution.

**Git**

- Changes and History panels, branch switching, fetch/pull, and diff opening.
- Commit graph with layout and navigation.
- Blame, untracked line counts, and worktree awareness.
- Git work runs in a dedicated worker host, off the UI and off the main thread.

**Viewer**

- Split primary/secondary viewer panes with tab strips and drag resizing.
- Syntax-highlighted source (Shiki), rendered Markdown with task lists and Mermaid diagrams,
  sandboxed HTML preview, and a large-file fallback.
- Diff view, go-to-line, in-file search, reload/save, and image rendering.

**Terminals**

- Terminals rendered by [`ghostty-web`](https://github.com/jarmak-personal/ghostty-web) through a
  swappable pane adapter: themes, typography, ligatures, cursor control, and 10 MB scrollback.
- Search with copy-match, semantic prompt/command/output region navigation, host-owned context
  menus, splits, and file/URL link activation.
- Clipboard file paste (including remote workspaces) and OSC clipboard integration.
- Recovery controls — restart, start fresh, resume, and fork — gated by what the underlying
  provider actually supports.
- Attention badges and a context meter showing agent token pressure.

**Harness sessions**

- Bundled providers: Shell, Claude Code, Codex, Pi, Gemini CLI, GitHub Copilot CLI, Cursor CLI,
  and Custom.
- Harness profiles are persisted launch recipes (executable, arguments, environment bindings, path
  bindings) that can start `fresh`, `resume`, or `fork` a session.
- Sessions overview lists live and retained sessions with paging, filtering, and grouping, and
  reopens the exact originating terminal.

**Document review**

- Anchored comments and batches over exact source ranges, with stale-anchor handling.
- Deliver a review to a live agent terminal by copy, insert, or send-now, depending on the
  provider's trusted submit contract.

**Web panes**

- Embedded web views inside the workbench, with title updates, blocked-navigation handling,
  browser-open fallback, and a "reveal source terminal" bridge back to the terminal that produced
  the view.

**Settings and diagnostics**

- Settings dialog for appearance, typography, Git, keybindings, terminal preferences, and harness
  profiles, with consent gating for composer-submit behavior.
- Diagnostic journal, evidence collection, and exportable diagnostic reports.

---

## Requirements

- **Node.js 24 or newer** (`engines.node: >=24`).
- A C/C++ toolchain, because `postinstall` rebuilds native modules:
  - `node-pty` is rebuilt against Electron's ABI.
  - The bundled `@hvir/rename-noreplace` Node-API addon is compiled with `node-gyp`.
- **macOS** or **Linux**. There is no Windows target.
- On headless Linux, `xvfb-run` is required to run the Electron smoke suites.

## Getting started

```bash
git clone <repository-url> hvir
cd hvir
npm ci          # also runs install:runtime (Electron + native module rebuilds)
npm run dev     # launch the app with hot reload
```

`npm run dev` and `npm run build` are preceded by `scripts/check-terminal-runtime.mts`, which
verifies that the installed `ghostty-web` runtime exposes the exact terminal capabilities this
checkout was reviewed against. If it fails, re-run `npm ci`.

Optionally install the repository's Git hooks (a pre-push typecheck + local-platform smoke run):

```bash
npm run hooks:install
```

## Building and packaging

```bash
npm run build          # typecheck, then build main / preload / renderer bundles
npm run build:dir      # unpacked application directory
npm run preview        # run the built app

npm run pack:mac:arm64     # macOS .pkg (arm64)
npm run pack:linux:x64     # Debian .deb (x64)
npm run pack:linux:arm64   # Debian .deb (arm64)
```

Artifacts are written to `dist/`. macOS ships a signed-capable `.pkg` installed to `/Applications`
with a hardened runtime; Linux ships a `.deb` with an AppArmor profile.

Both installers also provide an `hvir` shell command that opens a directory as a project:

```bash
hvir .
hvir ~/code/my-project
```

## Development scripts

| Command | What it does |
| --- | --- |
| `npm run verify` | The full gate: seams, ADRs, architecture, lint, typecheck, unit tests |
| `npm run lint` | ESLint across the repository |
| `npm run typecheck` | `tsc --noEmit` for both the node and web project graphs |
| `npm test` | Vitest unit suite (~376 test files, plain Node environment) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:mutation` | Stryker mutation testing |
| `npm run format` | Prettier write (`format:check` to verify) |
| `npm run check-seams` | Grep-level enforcement of the architectural seams |
| `npm run check-adrs` | Validate `docs/adr` record naming, sections, and lifecycle |
| `npm run architecture:check` | Enforce module size and direction policy (`architecture:report` to inspect) |

### Smoke and acceptance suites

Unit tests run under plain Node and never touch the Electron runtime. Behavior that depends on a
real Electron process is covered by scenario-driven smoke runs against a purpose-built smoke build:

```bash
npm run smoke                 # full scenario set
npm run smoke:macos           # macOS scenario set
npm run smoke:scenario <name> # a single scenario, e.g. git-workflow
npm run smoke:isolation       # failure and interruption isolation
npm run smoke:capacity        # capacity scenario
npm run performance:capacity  # capacity with the controlled performance gate
```

Installed-package and remote-host acceptance:

```bash
npm run smoke:linux:installed
npm run smoke:macos:installed
npm run acceptance:ssh:macos
npm run acceptance:ssh:real-host
```

The smoke runtime is compiled only into `--mode smoke` builds; the Vite config fails the production
build if any `src/main/smoke/` module or `HVIR_SMOKE` activation path survives into it.

## Architecture

hvir uses the standard three-target Electron split, with strict, machine-enforced seams between
them:

```
src/
  main/        Electron main process: window + workbench runtime, project registry,
               project hosts (local and SSH), PTY supervisor, Git engine and worker
               host, harness providers and profiles, sessions, document review,
               viewer, web panes, diagnostics, IPC authority router
  preload/     The only place allowed to touch ipcRenderer; exposes the typed bridge
  renderer/    React 19 UI: workbench layout, file tree, Git panel and graph, viewer
               panes, terminal workspaces, sessions overview, settings, dashboards
  shared/      Serializable vocabulary shared across the boundary (IPC contract,
               workspace/project types, harness provider and profile types,
               sessions projection, document review)
  workers/     Off-thread workers (Git, echo)
packages/      Native addons (rename-noreplace)
scripts/       Build, policy, smoke, release, and project-management tooling
test/          Vitest unit and contract suites
```

The seams are the load-bearing design constraint, checked by both ESLint rules and
`scripts/check-seams.sh`:

- `ipcRenderer` appears only in `src/preload/`; `ipcMain` only in the IPC authority router.
- Host primitives (`fs`, `child_process`, `chokidar`, `node-pty`) are imported only by
  `local-host.ts` — everything else goes through the `ProjectHost` transport seam, which is what
  makes local and SSH workspaces interchangeable.
- `host.spawnPty()` is called only by the PTY supervisor.
- Bundled harness identifiers live only in `src/main/harness/`; shared, persisted, and renderer code
  treat provider ids as opaque catalog data.
- `ssh2` details stay inside the `SshHost` adapter, and only `SshHost` is exported as the remote
  host façade.
- Git commands go through the shared command context; the Git worker proxy exposes only exact exec,
  read, and metadata operations.
- Raw loopback streams are transport for the main-owned web-pane proxy and nothing else.

Architectural decisions belong in `docs/adr` as `ADR-NNN-short-kebab-title.md`, each with
Context / Decision / Consequences / Rejected alternatives sections. `npm run check-adrs` enforces
that naming, structure, and lifecycle, and requires the directory to exist.

## Continuous integration

Pull requests run Linux verification (`npm run verify`), Linux Electron smoke plus development
performance and isolation runs, a reduced macOS arm64 Electron correctness gate, and CodeQL. A merge
acceptance job then proves one coherent CI attempt and exact base/head ancestry. Releases are driven
by the `Release` workflow from the default branch, which opens a validated version-only release PR
before publishing macOS and Linux packages.

## License

MIT — see [LICENSE](LICENSE).

Redistributed third-party components, including the modified terminal runtime and the
`rename-noreplace` binding, are documented in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). hvir is not affiliated with or endorsed by the
authors of the coding agents it can launch.
