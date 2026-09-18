# hvir

`hvir` is a developer desktop workbench and high-performance terminal application built with Electron, React, TypeScript, and Vite.

It combines native terminal emulators, local and remote SSH workspace management, multi-repository Git mutation workflows, rich document preview/review engines, and AI harness integrations into a unified developer environment.

---

## Key Features

- **Terminal Engine & Workbench**: Native terminal sessions driven by `node-pty` and rendered using `ghostty-web` with WebGL support, split-pane layouts, configurable terminal theme catalogs, workspace movement, and process lifecycle supervisors.
- **Local & Remote SSH Workspaces**: Seamless switching between local filesystem paths and remote SSH hosts (`SshHost`). Features parsing of `~/.ssh/config`, key identity resolution, host key verification, and remote file manipulation.
- **Git Mutation & Worktree Coordination**: Multi-repository Git status tracking, branch management, fetching, pulling, worktree creation/pruning, and Pull Request contribution trailer handling—offloaded off the main thread via utility processes (`git-worker`).
- **Rich Viewer & Editor**: Powered by CodeMirror with syntax highlighting via `shiki`, Markdown rendering (`markdown-it`), inline Mermaid diagram generation, KaTeX math equation rendering, and custom HTML preview protocols.
- **Document Review & Web Panes**: Integrated document review workflows and embedded proxy web panes with loopback HTTP proxies.
- **AI Harness & Telemetry**: First-class support for AI agent harness profiles (`claude-code`, `codex`, `plain-shell`), telemetry collection, and usage session projection.
- **Architectural Seams & Security**: Enforced process isolation separating Main, Renderer, Preload, and Worker processes with strict IPC authority routing and scoped resource access.

---

## Architecture Overview

`hvir` is designed with strict architectural boundaries ("seams") to ensure security, stability, and maintainability across processes:

- **Main Process (`src/main/`)**: Coordinates application lifecycle, window management, project registries, PTY supervision (`PtySupervisor`), SSH connection pools (`SshHost`), and IPC authority routing (`AuthorityRouter`).
- **Preload Bridge (`src/preload/`)**: Secure isolation layer; `ipcRenderer` calls are strictly encapsulated within the preload context to prevent direct IPC leaks to the renderer.
- **Renderer UI (`src/renderer/`)**: React-based frontend providing the workbench layout, terminal panes, workspace tree views, document review interfaces, and settings UI.
- **Worker Threads (`src/workers/`)**: Offloads intensive tasks (such as Git commands in `git-worker.ts`) to Node.js utility processes to keep the UI smooth and non-blocking.

---

## Prerequisites

- **Node.js**: `v24` or higher
- **npm**: `v10` or higher
- Platform C/C++ build tools (for `node-gyp` native modules: `node-pty` and `@hvir/rename-noreplace`)

---

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm install
```

The `postinstall` script automatically builds native Node-API bindings (`@hvir/rename-noreplace`) and rebuilds native dependencies for Electron (`node-pty`).

### 2. Development

Start the application in development mode with Vite hot-reloading:

```bash
npm run dev
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the application in development mode via `electron-vite` |
| `npm run build` | Runs typechecks and compiles production main, preload, and renderer assets |
| `npm run typecheck` | Type-checks both Node (`tsconfig.node.json`) and Web (`tsconfig.web.json`) targets |
| `npm run lint` | Lints all JavaScript and TypeScript files using ESLint |
| `npm run format` | Formats all codebase files with Prettier |
| `npm run format:check` | Verifies code formatting compliance |
| `npm test` | Runs the test suite using Vitest |
| `npm run check-seams` | Verifies architectural boundary invariants and seam checks |
| `npm run verify` | Runs the complete validation suite (`check-seams`, `check-adrs`, `architecture:check`, `lint`, `typecheck`, `test`) |
| `npm run pack:mac:arm64` | Packages the desktop application for macOS ARM64 using `electron-builder` |
| `npm run pack:linux:x64` | Packages the desktop application for Linux x64 (`.deb`) |

---

## Project Structure

```
hvir/
├── build/                # Application icons and platform packaging assets
├── packages/             # Monorepo packages (e.g., @hvir/rename-noreplace)
├── scripts/              # Build, architecture verification, and release tooling
├── src/
│   ├── main/            # Electron main process (project hosts, IPC, PTY, SSH)
│   ├── preload/         # Secure context bridge between main and renderer
│   ├── renderer/        # React workbench UI, terminal components, and styles
│   ├── shared/          # Common types, IPC contracts, and utility protocols
│   └── workers/         # Background utility processes (e.g., Git worker)
└── test/                # Test fixtures and unit/integration test suites
```

---

## License

This project is licensed under the [MIT License](LICENSE).
