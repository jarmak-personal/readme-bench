# hvir (Desktop AI Developer Harness & Collaboration Workbench)

`hvir` is a high-performance local developer workbench that seamlessly integrates cutting-edge, terminal-based AI coding assistants (known as **Harnesses**) with full-fledged terminal emulation, Git management, live web previews, and structured document reviews. 

Built on top of **Electron**, **React**, **Vite**, and **TypeScript**, `hvir` is designed to be a highly secure, sandboxed, and optimized environment that bridges the gap between your local source files, powerful terminals, and interactive LLM-driven tooling.

---

## 🚀 Key Features

*   **Multi-Harness AI Orchestration**: Streamlined, secure integration with top AI coding tools and assistants out-of-the-box:
    *   **Claude Code** (`claude-code`)
    *   **GitHub Copilot** (`github-copilot`)
    *   **Gemini** (`gemini`)
    *   **Cursor** (`cursor`)
    *   **Codex** (`codex`)
    *   **Pi** (`pi`)
    *   Custom shells and custom executable command harnesses.
*   **High-Performance Terminal Emulation**: Employs a custom, WASM-powered virtual terminal based on **Ghostty** (`ghostty-web`), supporting advanced features like split terminal layouts, synchronized outputs, custom context menus, and smart keyboard/clipboard negotiation.
*   **Interactive Git Workspace**: High-fidelity local Git integration including:
    *   Live Git graph visualization and rail rendering.
    *   Branch and worktree navigation.
    *   Local and staging diff viewer.
    *   Strict mutation authorizations protecting your codebase.
*   **Sandboxed Web Preview (Web Pane)**: Built-in, sandboxed browser panel with local loopback proxying, enabling real-time preview of web development servers running within your terminal workspaces.
*   **Interactive Document Review**: Integrated Markdown and AsciiDoc rendering engine (using `markdown-it` and `mermaid` for diagramming) supporting document check-lists, retention reviews, and automated delivery.
*   **Architectural Hotspot Enforcement**: Self-verifying design with active automated scripts that check code seams, boundary encapsulation, and architecture decision compliance.

---

## 🛠 Project Structure

The codebase is organized into highly decoupled boundaries:

```
hvir/
├── build/                        # Native build assets and package-specific profiles (Linux/macOS)
├── packages/
│   └── rename-noreplace/         # C-based Node-API binding for safe, atomic no-replace renames
├── scripts/                      # Project orchestration, architecture checks, smoke tests, and release tools
├── src/
│   ├── main/                     # Electron main process (IPC handlers, SSH/local host-management, PTY supervisors)
│   ├── preload/                  # Electron preload scripts exposing the secure 'window.hvir' bridge
│   ├── renderer/                 # React frontend (Vite-built SPA for the multi-panel workspace UI)
│   └── shared/                   # Shared type contracts, IPC interfaces, and helper libraries
└── test/                         # Unit tests, functional fixtures, and automation targets
```

---

## 🏃 Getting Started

### Prerequisites

*   **Node.js**: Version `24` or higher is required.
*   **Native Toolchain**: Python, C++ compiler, and standard build tools (required by `node-gyp` for compiling native bindings like `node-pty` and `@hvir/rename-noreplace`).

### Installation

Install dependencies and build the necessary terminal runtimes and native modules:

```bash
npm install
```

The `postinstall` hook will automatically execute `npm run install:runtime`, which installs the required Electron binaries, compiles the private `@hvir/rename-noreplace` native binding, and rebuilds `node-pty` against the active Electron version.

### Development

Launch the application in hot-reloading development mode:

```bash
npm run dev
```

---

## 🧪 Testing & Verification

`hvir` enforces a strict verification pipeline to preserve codebase reliability and structural sanity.

### 1. Code Validation & Linting

Run complete typechecking and linting against both main-process and web-renderer workspaces:

```bash
npm run typecheck       # Checks main-process (Node) and renderer-process (Web) TypeScript types
npm run lint            # Runs ESLint across the codebase
npm run format:check    # Verifies formatting using Prettier
```

### 2. Unit & Integration Testing

Run unit tests powered by **Vitest**:

```bash
npm test                # Runs unit tests once
npm run test:watch      # Runs unit tests in watch mode
```

### 3. Mutation Testing

We use **Stryker Mutator** to check test suite strength and isolate untested code paths:

```bash
npm run test:mutation
```

### 4. Architectural Verification

We enforce clean architectural boundaries using custom validation scripts:

```bash
npm run check-seams     # Verifies no leaky dependencies exist between system boundaries
npm run check-adrs      # Checks structure and ordering of Architecture Decision Records (ADRs)
npm run architecture:check # Enforces that there are no unauthorized hotspot/boundary crossings
```

To run all code quality, seam, and unit tests in a single command:

```bash
npm run verify
```

---

## 📦 Building & Packaging

Compile production assets and package the Electron application for distribution:

### Local Packaging
```bash
# Build the application and generate a local build directory
npm run build:dir

# Package for macOS (Apple Silicon - Unsigned)
npm run pack:mac:arm64

# Package for macOS (Apple Silicon - Code Signed)
npm run pack:mac:arm64:signed

# Package for Linux (Debian Package - x64)
npm run pack:linux:x64

# Package for Linux (Debian Package - ARM64)
npm run pack:linux:arm64
```

---

## 💨 Smoke & Integration Testing

To verify end-to-end user workflows, `hvir` features an extensive set of smoke-test suites covering native PTYs, git layouts, viewer positioning, document reviews, and IPC recovery:

```bash
# Run all smoke tests
npm run smoke

# Run macOS specific smoke test suites
npm run smoke:macos
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
