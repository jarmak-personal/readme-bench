# hvir

`hvir` is a next-generation, high-performance desktop developer workbench built with **Electron**, **Vite**, **TypeScript**, and **React**. It unifies native, lightning-fast terminal emulation, multi-pane file viewers, seamless Git graph workflows, secure SSH remote workspaces, and native AI developer agent/harness orchestration into a single, cohesive developer environment.

---

## 🚀 Key Features

- **High-Performance Terminal Workbench**:
  - Implements multi-terminal shell environments powered by native `node-pty` backends.
  - Renders ultra-fast terminal emulator screens in-app via `ghostty-web` integrations.
  - Supports terminal persistence, layout splits, tabbed views, drag-and-drop movement, and customized terminal themes.

- **Split-Pane File Viewer & Editor**:
  - Built on CodeMirror for responsive, multi-pane file editing and code review.
  - Provides syntax highlighting for dozens of languages powered by `shiki`.
  - Side-by-side interactive Git diff views with robust diff inputs and line blames.
  - Local workspace explorer featuring drag-and-drop organization, external move/copy picking, and recursive file watchers (`chokidar`).

- **Interactive Git Integration**:
  - Visually rich Git Graph view rendering commits, branch rails, and merging pathways.
  - In-app file staging, commits, branch switching, remote fetches, and worktree pruning.

- **AI Agent (Harness) Orchestration**:
  - Native launcher and supervisor for advanced AI developer tools (e.g., *Claude Code*, *Gemini*).
  - Actively monitors token pressure, telemetry, and input capabilities.
  - Leverages custom terminal input protocol overrides (like modified key bindings) and supports session recovery.

- **SSH Remote Workspaces**:
  - Full-featured connection client managing files, folders, and terminals on remote hosts securely over SSH (`ssh2` and custom configuration parsing).
  - Prompters for SSH key/password credentials directly integrated into the client UI.

- **Embedded Web Panes & Markdown rendering**:
  - Embeds interactive web views, HTML previews (via local preview protocol), and loopback proxies.
  - Complete Markdown parsing with task list rendering and customizable `mermaid` diagram templates.

- **Diagnostics & Health Monitoring**:
  - Comprehensive background diagnostic reporting and window/renderer telemetry.
  - Resilient crash recovery mechanisms that restore workspace state in real-time.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: `v24` or higher is required.
- **npm**: Installed alongside Node.js.
- **C/C++ Build Tools**: Necessary to rebuild native addons (`node-pty` and `@hvir/rename-noreplace`).

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd hvir
   ```

2. Install dependencies (this automatically triggers the native runtime rebuild post-install hook):
   ```bash
   npm install
   ```
   *Note: This script will call `install-electron` and run `node-gyp` to compile `@hvir/rename-noreplace` and `electron-rebuild` for `node-pty`.*

### Development

To start the application in development mode with hot-reloading:
```bash
npm run dev
```

### Building & Compiling

To perform TypeScript type-checking and build production assets:
```bash
npm run build
```

---

## 🧪 Testing & Quality Assurance

`hvir` maintains a rigorous test suite and validation gates to ensure system stability and performance.

### 1. Unit & Integration Testing
Run the complete unit test suite using **Vitest**:
```bash
npm test          # Runs all tests in single-run mode
npm run test:watch # Starts the interactive Vitest watcher
```

### 2. Mutation Testing
Verify test strength with **Stryker** mutation testing:
```bash
npm run test:mutation
```

### 3. Smoke Testing
Evaluate end-to-end user workflows with extensive smoke tests covering multiple scenarios:
```bash
npm run smoke
```
Or target specific platforms:
```bash
npm run smoke:macos    # Run Mac-specific smoke suite
npm run smoke:macos:ci # Run optimized CI macOS smoke suite
```

### 4. Static Checks & Linters
Enforce code quality and formatting before committing:
```bash
npm run typecheck    # Validate TypeScript code for Node and Web
npm run lint         # Run ESLint across all source files
npm run format:check # Verify code formatting with Prettier
npm run format       # Automatically fix formatting with Prettier
```

---

## 📐 Architecture & Standards Compliance

The project enforces strict boundary checks and compliance protocols:

- **Seam Verification**: Run dependency boundary checks across modules.
  ```bash
  npm run check-seams
  ```
- **ADR Verification**: Ensure Architecture Decision Records follow standard formatting and lifecycle states.
  ```bash
  npm run check-adrs
  ```
- **Architecture Health**: Analyze and enforce structural hotspots.
  ```bash
  npm run architecture:check
  ```
- **Verification Gate**: Execute all verification checks (linters, typechecks, seams, ADRs, and tests) simultaneously.
  ```bash
  npm run verify
  ```

---

## 📦 Packaging & Distribution

`hvir` packages production-ready apps using **electron-builder**.

- **macOS Packages**:
  ```bash
  npm run pack:mac:arm64        # Builds Apple Silicon package
  npm run pack:mac:arm64:signed # Builds and signs Apple Silicon package
  ```

- **Linux Packages**:
  ```bash
  npm run pack:linux:x64   # Builds x64 Debian package
  npm run pack:linux:arm64 # Builds arm64 Debian package
  ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
See the [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) file for details regarding third-party open-source libraries included in `hvir`.
