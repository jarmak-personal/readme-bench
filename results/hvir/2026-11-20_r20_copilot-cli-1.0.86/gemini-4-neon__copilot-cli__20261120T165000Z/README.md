# hvir

A desktop developer workbench for working with AI coding agents, terminals, source files, diffs, and Git repositories across local and remote SSH projects. Built with Electron, React, TypeScript, and `ghostty-web`.

## Features

- **Multi-Session Terminal & Harness Workbench** — GPU/WASM-backed `ghostty-web` terminals powered by `node-pty`, supporting split layouts, terminal search, attention badges, session recovery/resume/fork, and context telemetry.
- **Bundled AI Harness Profiles** — Built-in launch profiles and capability probing for **Claude Code**, **Codex**, **Gemini CLI**, **GitHub Copilot CLI**, **Cursor CLI**, **Pi**, plain **Shell**, and **Custom** commands.
- **Sessions Overview** — Unified view of active and recoverable terminal sessions across workspaces.
- **File, Diff & Rendered Document Viewer** — Syntax-highlighted source viewing (`shiki`), side-by-side/unified diffs (`@codemirror/merge`), Git blame gutters, Markdown rendering with Mermaid diagrams, CSV/JSON structured views, image/SVG previews, and sandboxed HTML previews.
- **Inline Document Review** — Attach inline review comments to source or rendered documents and deliver them directly to supported terminal harnesses (insert, send, or copy).
- **Git Integration** — Working tree changes, branch controls, commit history, and commit graph backed by an isolated Git worker process.
- **Local & Remote SSH Workspaces** — Open local repositories, Git worktrees, and remote SSH projects (`ssh2` with `~/.ssh/config` support) through a unified `ProjectHost` abstraction.
- **Web Panes** — Built-in loopback HTTP proxy for previewing local and remote web applications inside the workbench.
- **Customizable Workbench** — Configurable UI and terminal themes, typography, Git settings, harness profiles, and keybindings.

## Supported Platforms

| Platform | Architecture | Native Package | CLI Command |
| --- | --- | --- | --- |
| macOS | Apple Silicon (`arm64`) | `.pkg` | `/usr/local/bin/hvir` |
| Linux | `x64`, `arm64` (glibc ≥ 2.35) | `.deb` | `/usr/bin/hvir` |

Once installed via a native package, launch `hvir` on a project directory from your shell:

```bash
hvir .
hvir /path/to/project
```

## Getting Started (Development)

### Prerequisites

- **Node.js** `>= 24`
- Native C/C++ build tools for `node-gyp` (used to build `node-pty` and `@hvir/rename-noreplace`)
- macOS (Apple Silicon) or Linux (`x64` / `arm64`)

### Install & Run

```bash
npm install
npm run dev
```

`npm install` automatically runs `install:runtime` (`postinstall`), which installs the Electron binary and rebuilds the native addons (`@hvir/rename-noreplace` and `node-pty`).

### Build & Package

```bash
# Typecheck and build Electron bundles
npm run build

# Build unpacked app directory
npm run build:dir

# Build native installers
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

## Default Keybindings

Keybindings are customizable in Settings (`Mod` maps to `Cmd` on macOS and `Ctrl` on Linux):

| Action | Default Shortcut |
| --- | --- |
| Find File | `Mod+P` |
| Find in File | `Mod+F` |
| Find in Terminal | `Mod+Shift+F` |
| Go to Line | `Ctrl+G` |
| Cycle View Mode | `Mod+Shift+M` |
| Focus Terminal | `Mod+J` |
| Toggle Terminal Focus | `Mod+Shift+J` |
| Focus Viewer | `Mod+1` |
| Focus File Tree | `Mod+0` |
| Next Workspace | `Mod+Alt+]` |
| Previous Workspace | `Mod+Alt+[` |

## Architecture

`hvir` enforces strict architectural seams verified in CI (`scripts/check-seams.sh`, ESLint, and architecture checks):

- **`src/main/`** — Electron main process. Owns the `ProjectHost` abstraction (`LocalHost` and `SshHost`), `PtySupervisor` (the sole PTY spawner), the central IPC authority router, bundled harness providers, Git orchestration, loopback web-pane proxy, and workspace/session registries.
- **`src/preload/`** — Context-isolated preload bridge (the only layer permitted to access `ipcRenderer`).
- **`src/renderer/`** — React + TypeScript workbench UI, `ghostty-web` terminal panes, CodeMirror/Shiki/Markdown viewers, inline document review, Git rail, sessions overview, and settings.
- **`src/shared/`** — Process-agnostic types, IPC contracts, keybindings, and domain policies.
- **`src/workers/`** — Isolated Electron utility-process workers (such as `git-worker.ts`).
- **`packages/rename-noreplace/`** — Private Node-API native addon providing atomic no-replace file renames on macOS and Linux.

## Verification & Testing

```bash
# Full static, architectural, and unit test verification
npm run verify

# Individual checks
npm run check-seams
npm run check-adrs
npm run architecture:check
npm run lint
npm run typecheck
npm run format:check
npm test

# Watch mode for unit tests
npm run test:watch

# Electron end-to-end smoke suite
npm run smoke
# On headless Linux:
xvfb-run -a npm run smoke

# Mutation testing (Stryker)
npm run test:mutation
```

To install the repository Git hooks:

```bash
npm run hooks:install
```

## License

MIT — see [LICENSE](LICENSE) for details. Third-party license notices are documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
