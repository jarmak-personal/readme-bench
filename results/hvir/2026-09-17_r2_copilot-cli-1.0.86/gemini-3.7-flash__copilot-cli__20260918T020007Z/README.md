# hvir

`hvir` is a desktop developer workbench and terminal workspace manager built for Git worktree workflows, AI coding agent orchestration, and seamless local and remote development.

Powered by [Electron](https://www.electronjs.org/), [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), and the [Ghostty](https://ghostty.org/) terminal engine via [ghostty-web](https://github.com/coder/ghostty-web).

---

## ✨ Features

- **⚡ Ghostty-Powered Terminal**
  - High-performance terminal emulation with WebAssembly and WebGL rendering.
  - Horizontal and vertical splits, tabbed workspaces, pane resizing, and seamless terminal moves across workspaces.
  - Session persistence, recovery modes (automatic / prompt), OSC 52 clipboard integration, hyperlink detection, and semantic region navigation.
  - Built-in terminal theme catalog with dark and light themes.

- **🤖 AI Agent Harness Integration**
  - First-class support for AI coding agent harnesses including Claude Code, Codex, plain shell, and custom commands.
  - Global and project-scoped harness profiles with custom environment bindings, argument templates, and path grants.
  - Session lifecycle management: automatic session discovery, resume, and exact native fork.
  - Real-time token usage telemetry and context pressure monitoring with warning/critical threshold indicators.
  - Document review delivery: insert diffs and review context directly into agent TUIs or dispatch via intentional submit.

- **🌿 Git Worktree & Workspace Management**
  - Multi-project workspace management with automatic Git worktree discovery.
  - Real-time workspace status tracking: changed file count, branch tracking, dirty status, and clean-filter awareness.
  - Interactive Git panel for staging, committing, branch switching, fetching, pulling, and worktree pruning.
  - Visual Git graph for exploring commit history, branches, and merges.

- **🌐 Remote Development via SSH**
  - Native SSH host integration with key-based and SSH agent authentication.
  - Multiplexed SSH transport pooling, remote terminal execution, and remote SFTP file management.
  - Host-qualified paths ensuring consistent operations across local and remote projects.

- **📄 File Viewer & Rich Previews**
  - CodeMirror 6 editor with side-by-side and inline diffs (`@codemirror/merge`).
  - Fast syntax highlighting powered by Shiki grammars.
  - Rendered Markdown previews with live Mermaid diagrams and KaTeX math formulas.
  - Tabular CSV viewer and formatted JSON/TOML/YAML structured data viewers.
  - Sandboxed HTML preview protocol.

- **🧭 Web Panes**
  - Embedded web views for inspecting and interacting with local or remote development servers.
  - Authenticated loopback proxy ensuring secure access to remote workspace web endpoints.

- **🩺 Health & Diagnostics**
  - Active error boundaries, runtime health tracking, and sanitized diagnostic reports for debugging and issue reporting.

---

## 🏗️ Architecture

- **Main Process (`src/main`)**: Manages the application lifecycle, project coordinator, local and SSH host catalogs, PTY supervisor, Git mutation coordinator, harness provider registry, window management, and IPC authority router.
- **Preload Bridge (`src/preload`)**: Context-isolated, type-safe IPC communication layer.
- **Renderer Process (`src/renderer`)**: React 19 application providing the workbench layout, Ghostty terminal panes, CodeMirror viewer, Git graph, Web Panes, and settings.
- **Worker Processes (`src/workers`)**: Utility processes offloading heavy operations (such as Git operations and file parsing) to keep the UI responsive.
- **Shared (`src/shared`)**: Shared type definitions, IPC contracts, and schemas.
- **Native Addons (`packages/rename-noreplace`)**: C++ Node-API binding providing atomic cross-directory rename operations.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v24` or higher
- **npm**: `v10` or higher
- **C++ Build Tools & Python**: Required by `node-gyp` for compiling native modules

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hvir-app/hvir.git
   cd hvir
   ```

2. Install dependencies (this also compiles native modules and rebuilds runtime binaries):
   ```bash
   npm install
   ```

### Running in Development

Start the development application with hot module reloading:

```bash
npm run dev
```

---

## 🛠️ Development Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launch the app in development mode with Vite HMR |
| `npm run build` | Typecheck and build production bundles |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Run TypeScript typechecking for both Node and Web targets |
| `npm run lint` | Run ESLint across the codebase |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting with Prettier |
| `npm test` | Run the unit and integration test suite with Vitest |
| `npm run test:watch` | Run Vitest in interactive watch mode |
| `npm run check-seams` | Enforce architectural boundary seams |
| `npm run check-adrs` | Validate Architecture Decision Records |
| `npm run architecture:check` | Check architecture hotspot budgets and dependency graphs |
| `npm run verify` | Run full verification suite (seams, ADRs, architecture, lint, typecheck, tests) |
| `npm run smoke` | Run end-to-end smoke scenarios |

---

## 📦 Packaging

To package the application for distribution:

- **macOS (`.pkg`)**:
  ```bash
  npm run pack:mac:arm64
  ```

- **Linux (`.deb`)**:
  ```bash
  npm run pack:linux:x64
  # or for ARM64:
  npm run pack:linux:arm64
  ```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Third-party notices and licenses are documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
