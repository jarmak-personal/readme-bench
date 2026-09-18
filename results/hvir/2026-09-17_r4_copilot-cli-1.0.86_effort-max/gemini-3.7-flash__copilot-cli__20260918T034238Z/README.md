# hvir

**hvir** is a high-performance developer workbench and terminal multiplexer designed specifically for working with **AI coding agents**, **Git worktrees**, and **local or remote SSH projects**.

Built on Electron, React, TypeScript, and Vite, hvir pairs GPU-accelerated terminal emulation (powered by a custom WebAssembly/WebGL Ghostty engine) with deep AI agent integration, multi-pane layouts, interactive Git visualization, side-by-side diffing, and structured document review.

---

## Key Features

### 🤖 First-Class AI Coding Agent Harnesses
- **Built-in Agent Profiles**: Preconfigured and customizable launch profiles for leading coding agents:
  - **Claude Code**
  - **GitHub Copilot CLI**
  - **OpenAI Codex**
  - **Cursor**
  - **Google Gemini**
  - **Pi**
  - **Plain Shell & Custom Commands**
- **Live Context Meter**: Real-time token usage and context pressure monitoring with warning and critical thresholds directly in the terminal interface.
- **Intentional Submit / Composer Modes**: Configurable keybindings (`Meta+Enter` / `Control+Enter`) to prevent accidental prompt submission while composing multi-line agent instructions.
- **Remote & Local Image Pasting**: Direct clipboard image pasting into terminal sessions and AI agent prompts.
- **Telemetry & Session Projections**: Session history, token usage telemetry, and agent lifecycle observation.

### ⚡ Ghostty-Powered Terminal Multiplexing
- **Hardware-Accelerated Rendering**: Smooth, high-throughput WebAssembly and WebGL rendering via a specialized `ghostty-web` compatibility engine.
- **Robust PTY Supervisor**: Process lifecycle management, automatic rollover, resume capabilities, and crash recovery powered by `node-pty`.
- **Flexible Layouts**: Horizontal/vertical split panes, terminal decks, tabs, and workspace collections.
- **Terminal Rails & Attention Badges**: Compact and expanded terminal rails with visual attention indicators for background tasks and agent completions.
- **Rich Terminal Interactions**: OSC 52 clipboard integration, terminal clipboard file pasting, semantic navigation, clickable hyperlinks, and automatic file path activation.
- **Theme Gallery**: Integrated terminal theme catalog and color customization.

### 🌐 Local & Remote SSH Workspaces
- **Multi-Project Management**: Switch between local repositories and remote projects seamlessly.
- **Git Worktree Discovery**: Automatic detection and instant switching between Git worktrees within each project.
- **Remote Development over SSH**: Full SSH remote execution, identity/key authentication, host trust verification, and remote file browsing.
- **Fast Search**: In-workspace fuzzy filename searching and project navigation.

### 📝 Document Review & Delivery Workflow
- **Structured Review Flow**: Review code modifications and generated markdown/documents produced during AI agent turns.
- **Inline Reviews & Anchors**: Comment anchors, batch review management, and side-by-side verification.
- **Delivery Actions**: One-click **Insert**, **Send Now**, or **Copy** review responses directly into active terminal agent sessions.

### 🔍 Multi-Mode File Viewer & 3-Way Diff
- **Smart Mode Detection**: Opens files automatically in `rendered`, `source`, or `diff` mode based on context and file type.
- **Code Editor & 3-Way Diff**: Powered by CodeMirror 6 and Shiki syntax highlighting, supporting diff comparisons against `Working Tree`, `HEAD`, or `Branch Point`.
- **Rich Markdown & Diagrams**: Full GitHub Flavored Markdown (GFM) rendering with task lists, KaTeX math typesetting, repository image resolution, and Mermaid (`.mmd`, `.mermaid`) diagram visualization.
- **Data & Media Viewers**: Interactive CSV table views, formatted JSON/YAML, sandboxed HTML previews, and high-performance image rendering (PNG, SVG, JPEG, WebP, GIF, AVIF, BMP, ICO).

### 🌿 Visual Git Inspector
- **Interactive Git Graph**: Visual commit graph with lanes, branch heads, and tags.
- **Commit Details & File Trees**: Inspect changes, commit messages, authors, and per-commit diffs.
- **Non-Blocking Operations**: Background Git worker thread handles repository inspection and porcelain commands off the UI thread.

### 🖥️ Embedded Web Panes
- Embedded web preview surface with loopback HTTP proxy and secure navigation policies for inspecting local development servers and dashboards.

---

## Architecture & Security

hvir is structured into strict architectural layers with automated invariant verification:

- **Main Process (`src/main/`)**: Controls Electron application lifecycle, window management, PTY supervisor, `ProjectHost` implementations (`LocalHost`, `SshHost`), Git worker brokers, and IPC authority routing.
- **Preload Bridge (`src/preload/`)**: Context-isolated bridge exposing strictly typed, safe IPC channels to the renderer without direct Node.js or `ipcRenderer` exposure.
- **Renderer (`src/renderer/`)**: React 19 UI built with Vite, managing workspace layouts, Ghostty terminal viewports, CodeMirror 6 editors, and web workers.
- **Utility Workers (`src/workers/`)**: Off-main-thread processes (such as `git-worker`) for non-blocking file system and Git operations.
- **Shared Contracts (`src/shared/`)**: Common TypeScript definitions, serialization protocols, and IPC contracts.
- **Native Extensions (`packages/rename-noreplace/`)**: Platform-specific C syscall wrappers for atomic cross-directory file moves.

### Security & Hardening
- **Linux**: AppArmor profile integration and unprivileged user namespace sandbox enforcement.
- **macOS**: Hardened Runtime with strict entitlements and Apple notarization support.
- **IPC Authority**: Single-point authorization and canonical path resolution for all file system and shell operations.

---

## Prerequisites

- **macOS**: Apple Silicon (arm64)
- **Linux**: x86_64 or arm64 with `glibc >= 2.35`
- **Node.js**: `>= 24.0.0` (for building from source)
- **npm**: `>= 10.0.0`

---

## Installation

### Native Installer Script
You can install or update hvir using the native installer script:

```bash
# Run installer
./scripts/native-installer.template.sh

# Or uninstall
./scripts/native-installer.template.sh --uninstall
```

### Pre-built Packages
Packaged builds are generated for supported platforms:
- **macOS**: `hvir-<version>-macos-arm64.pkg`
- **Linux**: `hvir_<version>_amd64.deb` / `hvir_<version>_arm64.deb`

Once installed, launch hvir from your terminal:

```bash
# Open current directory in hvir
hvir .

# Open specific project directory
hvir /path/to/project
```

---

## Development

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm install
```

> **Note**: The `postinstall` script automatically compiles native bindings (`@hvir/rename-noreplace` and `node-pty` for Electron).

### Running in Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Type Checking & Linting

```bash
# Run TypeScript type check (Node + Web configs)
npm run typecheck

# Run ESLint
npm run lint

# Check code formatting with Prettier
npm run format:check
```

### Testing & Verification

```bash
# Run test suite with Vitest
npm test

# Run tests in watch mode
npm run test:watch

# Run architectural seam check
npm run check-seams

# Run complete verification suite
npm run verify
```

### Packaging & Distribution

```bash
# Compile and build application bundles
npm run build

# Package unpacked directory
npm run build:dir

# Package macOS ARM64 installer (.pkg)
npm run pack:mac:arm64

# Package Linux Debian packages (.deb)
npm run pack:linux:x64
npm run pack:linux:arm64
```

---

## Default Keyboard Shortcuts

| Shortcut | Action | Scope |
|---|---|---|
| <kbd>Mod</kbd> + <kbd>P</kbd> | Find file in workspace | Workbench |
| <kbd>Mod</kbd> + <kbd>F</kbd> | Find in current file / viewer | Workbench |
| <kbd>Mod</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | Find in terminal | Terminal |
| <kbd>Mod</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | Cycle view mode (`rendered` / `source` / `diff`) | Workbench |
| <kbd>Ctrl</kbd> + <kbd>G</kbd> | Go to line | Workbench |
| <kbd>Mod</kbd> + <kbd>J</kbd> | Focus active terminal | Workbench |
| <kbd>Mod</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> | Toggle terminal focus | Workbench |
| <kbd>Mod</kbd> + <kbd>1</kbd> | Focus file viewer | Workbench |
| <kbd>Mod</kbd> + <kbd>0</kbd> | Focus file tree | Workbench |
| <kbd>Mod</kbd> + <kbd>Alt</kbd> + <kbd>]</kbd> | Next workspace | Global |
| <kbd>Mod</kbd> + <kbd>Alt</kbd> + <kbd>[</kbd> | Previous workspace | Global |

> *Note: <kbd>Mod</kbd> corresponds to <kbd>Cmd</kbd> on macOS and <kbd>Ctrl</kbd> on Linux/Windows.*

---

## Project Structure

```text
hvir/
├── build/                # Platform icons, AppArmor profiles, and native packaging scripts
├── packages/             # Internal packages (@hvir/rename-noreplace)
├── scripts/              # Build, release, architecture verification, and tooling scripts
├── src/
│   ├── main/             # Electron main process (host, PTY supervisor, IPC, Git, harness)
│   ├── preload/          # Context-isolated Electron preload scripts
│   ├── renderer/         # React application (UI, terminal canvas, editors, viewers)
│   ├── shared/           # Cross-boundary types, schemas, and utility functions
│   └── workers/          # Utility process workers (Git worker, echo worker)
├── test/                 # Test suites (Vitest unit, component, and integration tests)
├── LICENSE               # MIT License
└── THIRD_PARTY_NOTICES.md # Third-party dependency licenses and notices
```

---

## License

`hvir` is licensed under the [MIT License](LICENSE).

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for licenses and notices of redistributed third-party software and components.
