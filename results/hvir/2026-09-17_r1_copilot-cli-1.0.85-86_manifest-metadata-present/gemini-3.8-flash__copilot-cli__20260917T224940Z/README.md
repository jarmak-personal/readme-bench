# hvir

> A lightweight, view-first workbench for agentic development.

**hvir** is an Electron-based desktop developer workbench designed for building with AI coding agents (such as Claude Code, GitHub Copilot CLI, OpenAI Codex, Google Gemini CLI, Cursor, and Pi). Rather than duplicating a full heavyweight IDE, hvir provides a fast, view-first cockpit pairing high-performance terminals, rich file inspection and diffing, document review workflows, visual Git history, and remote SSH project capabilities.

---

## Highlights

- **View-First File & Diff Viewer**: Powered by CodeMirror 6 with syntax highlighting via Shiki, side-by-side or unified diff views, Markdown rendering with Mermaid diagram support and task lists, large file acceleration, and image inspection.
- **AI Agent Harness Integration**: Native profiles and telemetry for agent harnesses (Claude Code, GitHub Copilot CLI, Codex, Gemini, Cursor, Pi, shell, and custom commands). Features real-time context window pressure telemetry, token usage monitoring, session recovery, and intentional composer submit modes (`Enter` vs. `Ctrl+Enter`).
- **Ghostty-Powered Terminal**: Ultra-fast terminal emulation built on WebAssembly (`ghostty-web`) and `node-pty`. Includes multiple terminal workspaces, horizontal/vertical splits, draggable terminal tabs, terminal search, color theme gallery, font ligature controls, and direct clipboard image and file pasting into agent TUIs.
- **Document Review Workflow**: Review agent-generated plans, PR descriptions, and markdown documents inline. Place anchored review comments and deliver structured feedback directly back into the running agent terminal session.
- **Visual Git Operations**: Dedicated Git panel with visual commit branch graph lanes, staged/unstaged changes, hunk diffs, commit composition, branch checkout, and worktree pruning. All Git operations are isolated in a background utility-process worker to keep the UI smooth and responsive.
- **Remote SSH Workspaces**: Work seamlessly on remote servers over SSH using the `ProjectHost` abstraction. Features live remote file watching, streaming file access, key/agent forwarding, and interactive password prompts.
- **Embedded Web Panes**: Preview local dev servers and web dashboards side-by-side with terminals and code via an integrated loopback proxy.
- **Observability & Diagnostics**: Workbench health monitoring, cross-session telemetry projections, and one-click diagnostic report generation.

---

## Prerequisites

- **Node.js**: `>= 24.0.0`
- **npm**: `>= 10.0.0`
- **Supported Platforms**:
  - macOS (Apple Silicon arm64 and Intel x64)
  - Linux (Debian/Ubuntu x64 and arm64)

---

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm install
```

> **Note**: `npm install` automatically triggers postinstall hooks to compile the native `@hvir/rename-noreplace` binding and rebuild `node-pty` against Electron's ABI.

### 2. Development

Run the Vite development server and Electron shell:

```bash
npm run dev
```

### 3. Verification & Code Quality

Run tests, typechecks, linter, and architectural seam validation:

```bash
# Run unit tests
npm test

# Run TypeScript typechecks across node and web targets
npm run typecheck

# Run ESLint
npm run lint

# Check architectural seam boundaries
npm run check-seams

# Run full pre-commit verification suite
npm run verify
```

---

## Building & Packaging

### Production Build

Compile the main process, preload scripts, and renderer bundle:

```bash
npm run build
```

### Native Packages

Package distributables using `electron-builder`:

- **macOS (arm64 `.pkg`)**:
  ```bash
  npm run pack:mac:arm64
  ```

- **Linux (`.deb`)**:
  ```bash
  # For x64
  npm run pack:linux:x64

  # For arm64
  npm run pack:linux:arm64
  ```

### CLI Launcher

When installed from native packages, the `hvir` command-line utility is placed in `/usr/local/bin/hvir` (macOS) or `/usr/bin/hvir` (Linux), allowing you to open projects directly from your terminal:

```bash
hvir .
hvir /path/to/project
```

---

## Default Shortcuts

| Action | Shortcut (macOS / Linux) |
|---|---|
| **Find File** | `Cmd+P` / `Ctrl+P` |
| **Find in File** | `Cmd+F` / `Ctrl+F` |
| **Find in Terminal** | `Cmd+Shift+F` / `Ctrl+Shift+F` |
| **Go to Line** | `Ctrl+G` |
| **Cycle View Mode** (Source / Rendered / Diff) | `Cmd+Shift+M` / `Ctrl+Shift+M` |
| **Focus Terminal** | `Cmd+J` / `Ctrl+J` |
| **Toggle Terminal Focus** | `Cmd+Shift+J` / `Ctrl+Shift+J` |
| **Focus File Viewer** | `Cmd+1` / `Ctrl+1` |
| **Focus File Tree** | `Cmd+0` / `Ctrl+0` |
| **Next Workspace** | `Cmd+Alt+]` / `Ctrl+Alt+]` |
| **Previous Workspace** | `Cmd+Alt+[` / `Ctrl+Alt+[` |

---

## Architecture & Design Principles

hvir enforces strict architectural boundaries to maintain high performance, stability, and clean seams:

- **Isolated Host Abstraction (`ProjectHost`)**: All filesystem, process spawning, and file watching operations go through `ProjectHost` (`LocalHost` or `SshHost`), allowing the entire workbench to operate transparently over local or remote SSH workspaces.
- **Background Git Worker**: Heavyweight Git invocations and repository analysis run inside an Electron utility process (`src/workers/git-worker.ts`), preventing main thread or UI stutter.
- **Strict IPC Routing**: IPC handlers are registered through an authority router with granular channel policies. Direct `ipcMain` and `ipcRenderer` calls are isolated to specific choke points.
- **WebAssembly Terminal Core**: Terminal emulation uses a tailored fork of `ghostty-web` compiling Ghostty's VT engine to WebAssembly, paired with `node-pty` for process management.

---

## License

This project is licensed under the [MIT License](LICENSE).

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for licenses and notices regarding redistributed third-party components (including `@hvir/rename-noreplace` and `ghostty-web`).
