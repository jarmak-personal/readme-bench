# hvir

**hvir** is a desktop developer workbench for working across local and remote (SSH) repositories, Git worktrees, files, diffs, and terminal-based coding agents. Built with Electron, React, TypeScript, and a WebAssembly build of the Ghostty terminal core, hvir combines a multi-mode document and code viewer, inline document review, non-blocking Git workflows, and structured agent session management in a single native application.

---

## Features

### Projects, Worktrees & Remote Hosts
- **Worktree-native workspaces:** Automatically discovers and tracks Git worktrees (`git worktree list`), treating each checkout as an independent workspace with its own file state, branch status, and terminal sessions.
- **Unified local & SSH transport (`ProjectHost`):** Work with remote repositories over SSH (`ssh2` with OpenSSH config discovery, host trust management, interactive authentication prompts, SFTP file operations, remote PTYs, and remote file watching) through the same interface as local directories.
- **Loopback web panes:** Preview local or remote loopback HTTP services (`localhost`, `127.0.0.1`, `::1`) inside the workbench through a main-process loopback proxy without exposing raw socket primitives to the renderer.

### Terminal & Coding Agent Harnesses
- **Ghostty terminal core:** Powered by `ghostty-web` (WebAssembly build of Ghostty's VT core) with demand-driven rendering, synchronized output, ligature support, semantic file-path activation, in-terminal search, split/deck layouts, and an iTerm2-derived color theme gallery.
- **Bundled harness providers & custom profiles:** Launch and manage interactive shells alongside CLI coding agents with customizable executable, argument, and environment profiles:
  - **Claude Code** (`claude`) — Preassigned session identity, exact session resume and fork, context-window pressure telemetry, token usage observation, composer submit configuration, remote clipboard image paste, and document review insertion.
  - **Codex** (`codex`) — Rollout session discovery, exact session resume and fork, context pressure and usage telemetry, remote clipboard image paste, and document review insertion/direct submission.
  - **GitHub Copilot CLI** (`copilot`)
  - **Gemini CLI** (`gemini`)
  - **Cursor CLI** (`cursor-agent`)
  - **Pi** (`pi`)
  - **Shell & Custom Commands** — Host-resolved interactive login shells (`-l`) and user-defined command profiles.
- **Sessions destination:** Cross-project overview of live and retained sessions displaying turn status (`working`, `waiting-for-user`, `waiting-for-approval`, `idle`), active model, context window utilization, attention badges, and cumulative usage lenses.
- **Workspace mobility:** Move live or retained terminal sessions across worktree workspaces.

### Multi-Mode File Viewer & Editor
- **Rendered, Source, and Diff modes:** Cycle seamlessly between representations (`Mod+Shift+M`):
  - **Rendered:** Markdown (`.md`, `.mdx`, `.markdown` with task lists and repository images), Mermaid diagrams (`.mmd`, `.mermaid`), sandboxed HTML previews (`hvir-preview:` scheme), structured JSON/YAML/CSV views, and repository images (`.png`, `.svg`, `.webp`, `.jpg`, `.gif`, `.avif`, `.bmp`, `.ico`).
  - **Source:** CodeMirror 6 editor with worker-offloaded Shiki syntax highlighting, inline Git blame annotations, find-in-file, go-to-line, and optimistic concurrency checks (`expectedMtimeMs`) on save.
  - **Diff:** CodeMirror merge view comparing against the working tree, `HEAD`, branch point, or historical commit revisions.
- **Split panes & tab management:** View files side by side in primary and secondary viewer groups with preview/pinned tabs, drag reordering, and live reload for clean files on disk change.

### Inline Document Review
- **Source-anchored comments:** Capture inline review comments and review batches anchored to exact 1-based line ranges and SHA-256 document snapshots across both Rendered and Source modes.
- **Edit-resilient tracking:** Automatically tracks anchor movement across file edits and flags stale anchors with explicit reasons when underlying lines change or disappear.
- **Agent delivery:** Preview, copy, insert, or immediately submit formatted review feedback into live coding agent terminals in the workspace.

### Git & File Operations
- **Utility-process Git engine:** Runs Git commands through a dedicated Electron utility process (`git-worker`) with shared cancellation and mutation coordination.
- **Interactive Git panel & graph:** Inspect working tree changes, browse commit history and lane graphs, switch branches, fetch (including configurable background auto-fetch), pull, and prune stale worktrees.
- **Safe filesystem operations:** Fast filename search (`Mod+P`), exclusive file/directory creation, verified cross-directory copy, recoverable OS trash deletion, and atomic no-replace renames backed by a native Node-API addon (`@hvir/rename-noreplace`).

### Workbench Health & Diagnostics
- **Resilient lifecycle:** Tracks renderer generations, isolates unresponsive or crashed renderer frames, and scopes host watches and IPC subscriptions to active owners.
- **Diagnostic reports:** Captures bounded runtime journals and exports redacted diagnostic bundles for troubleshooting.

---

## Supported Platforms

| Platform | Architecture | Package Format | Notes |
| --- | --- | --- | --- |
| **Linux** | `x64`, `arm64` | `.deb` | Requires `glibc >= 2.35` (e.g., Ubuntu 22.04+, Debian 12/13+) |
| **macOS** | `arm64` (Apple silicon) | `.pkg` | Installs `/Applications/hvir.app` and `/usr/local/bin/hvir` |

Once installed via the native package or release `install.sh` script, launch hvir from any terminal:

```sh
# Open the current directory in hvir
hvir .

# Open a specific local repository or directory
hvir /path/to/project
```

---

## Getting Started (Development)

### Prerequisites
- **Node.js** `>= 24` and `npm`
- **C/C++ build toolchain** and Python 3 (required by `node-gyp` and `@electron/rebuild` to compile `@hvir/rename-noreplace` and `node-pty`)
- **Git**

### Install & Run

```sh
# Install dependencies and rebuild native addons against the Electron runtime ABI
npm ci

# Start hvir in development mode with hot reload
npm run dev
```

To point a development launch at a specific directory, set `HVIR_PROJECT_ROOT=/path/to/project` or pass `--project-root=/path/to/project`.

### Build & Package

```sh
# Typecheck and build main, preload, renderer, and utility workers into out/
npm run build

# Preview the production build locally
npm run preview

# Build an unpacked application directory in dist/
npm run build:dir

# Package native installers
npm run pack:mac:arm64      # macOS Apple silicon (.pkg)
npm run pack:linux:x64      # Linux x64 (.deb)
npm run pack:linux:arm64    # Linux arm64 (.deb)
```

---

## Testing & Verification

```sh
# Run unit and component tests (Vitest)
npm test

# Run tests in watch mode
npm run test:watch

# Run architectural seam, ADR, hotspot, lint, typecheck, and unit test gates
npm run verify

# Check or apply formatting
npm run format:check
npm run format

# Run end-to-end Electron smoke scenarios
npm run smoke               # Full smoke suite (use `xvfb-run -a npm run smoke` on headless Linux)
npm run smoke:macos         # macOS smoke suite
npm run smoke:isolation     # Renderer crash and interruption isolation suite

# Run mutation testing (Stryker)
npm run test:mutation
```

---

## Default Keybindings

`Mod` maps to `Cmd` on macOS and `Ctrl` on Linux. All shortcuts can be customized in **Settings → Keybindings**.

| Action | Default Shortcut | Context |
| --- | --- | --- |
| Find file by name | `Mod+P` | Workbench / Web pane |
| Find in file | `Mod+F` | Workbench |
| Find in terminal | `Mod+Shift+F` | Terminal |
| Go to line | `Ctrl+G` | Workbench |
| Cycle view mode (`rendered` / `source` / `diff`) | `Mod+Shift+M` | Workbench / Web pane |
| Focus terminal | `Mod+J` | All |
| Toggle terminal maximize / restore | `Mod+Shift+J` | All |
| Focus active file viewer | `Mod+1` | All |
| Focus file explorer tree | `Mod+0` | All |
| Next workspace | `Mod+Alt+]` | All |
| Previous workspace | `Mod+Alt+[` | All |

---

## Architecture Overview

```text
hvir/
├── src/
│   ├── main/                 # Electron main process (authoritative state & host orchestration)
│   │   ├── diagnostics/      # Runtime health tracking & redacted diagnostic report export
│   │   ├── document-review/  # Source-anchored review persistence, revalidation & PTY delivery
│   │   ├── filename-search/  # Workspace filename enumeration & ranking
│   │   ├── git/              # Git engine, parsers, mutation coordination & worker routing
│   │   ├── harness/          # Agent provider contracts, profiles, probes & telemetry observers
│   │   ├── health/           # Workbench health snapshot & event publication
│   │   ├── ipc/              # Single authority router & feature registrars
│   │   ├── project-file-operations/ # Safe file creation, copy, rename & trash workflows
│   │   ├── project-host/     # ProjectHost seam (LocalHost and SshHost implementations)
│   │   ├── pty/              # PtySupervisor & session lifecycle management
│   │   ├── sessions/         # Cross-workspace session & usage projection
│   │   ├── smoke/            # Built-in end-to-end Electron smoke scenarios (stripped in release builds)
│   │   ├── terminal/         # Terminal session registry, admission & workspace moves
│   │   ├── viewer/           # Document read authority
│   │   ├── web-pane/         # Loopback HTTP proxy & route registry
│   │   └── window/           # BrowserWindow management & renderer crash recovery
│   ├── preload/              # Context-isolated window.hvir bridge
│   ├── renderer/             # React 19 UI (viewer, terminal, git, tree, sessions, settings)
│   ├── shared/               # Pure inward-facing contracts, IPC schemas & domain policies
│   └── workers/              # Electron utility processes (git-worker, echo-worker)
├── packages/
│   └── rename-noreplace/     # Private Node-API C addon (@hvir/rename-noreplace)
├── build/                    # Icons, macOS entitlements/pkg scripts, Linux AppArmor & CLI wrapper
├── scripts/                  # Build, smoke, architecture enforcement & release tooling
└── test/                     # Vitest unit, integration & UI tests
```

### Enforced Architectural Seams
hvir enforces strict module boundaries via ESLint (`eslint.config.mjs`), `scripts/check-seams.sh`, and `scripts/architecture-hotspots.mjs`:
1. **Preload-only `ipcRenderer`:** The renderer communicates with the main process strictly through the typed `window.hvir` bridge defined in `src/preload/`.
2. **Single IPC authority choke point:** `ipcMain` is touched only in `src/main/ipc/authority-router.ts`, which validates renderer ownership and canonical `HostPath` authority before dispatching to feature handlers.
3. **`ProjectHost` transport boundary:** Host primitives (`node:fs`, `node:child_process`, `chokidar`, `node-pty`) are imported only in `src/main/project-host/local-host.ts`, and `ssh2` is confined to `SshHost` modules under `src/main/project-host/`.
4. **Centralized PTY supervision:** `host.spawnPty()` is called exclusively by `src/main/pty/pty-supervisor.ts`.
5. **Confined loopback transport:** `host.connectLoopback()` is called exclusively by `src/main/web-pane/loopback-http-proxy.ts`.

---

## License

hvir is licensed under the [MIT License](LICENSE). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for license notices and attributions for redistributed third-party components, including the Ghostty terminal core, `ghostty-web`, `iTerm2-Color-Schemes`, and the `@hvir/rename-noreplace` binding.
