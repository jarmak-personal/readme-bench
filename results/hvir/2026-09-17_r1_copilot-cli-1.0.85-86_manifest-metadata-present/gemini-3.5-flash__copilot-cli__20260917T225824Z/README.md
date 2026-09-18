# hvir

A lightweight, view-first workbench for agentic development. Built on Electron, React, TypeScript, and Vite.

`hvir` is designed to be a highly integrated, visual, and performance-optimized control center and workspace environment tailored specifically for AI-agent workflows, developer productivity, and local/remote environment exploration.

---

## 🚀 Key Features

- **📺 View-First Agentic Workspace:** Tailored interface overlays and control panels to manage and visualize agent/developer workflows, settings, and layout split-panes.
- **⚡ High-Performance Terminal Integration:** Deeply integrated emulator powered by `ghostty-web`, featuring precise keyboard layouts, scrollbar presentation, semantic navigation, and customized terminal theme catalogs.
- **🛠️ PTY Supervisor & Lifetimes:** Precise terminal supervisor system leveraging `node-pty` for robust shell session management, crash recovery, and background terminal tracking.
- **🔒 SSH & Remote Environments:** Secure native SSH transport pooling, host authentication, and remote workspace file system mapping.
- **🌿 Integrated Git Workflows:** Built-in git mutation tracking, conflict visualization, branch sync controllers, and worktree operations for precise version control tracking.
- **📄 Interactive Document & Markdown Review:** Live markdown rendering with math expressions (via KaTeX), embedded repository images, HTML preview protocols, and structured document reviews.
- **🩺 Diagnostics & Health Monitoring:** Real-time application telemetry, workspace status audits, and detailed diagnostic reporting and journaling.

---

## 🏗️ Architecture & Stack

- **Framework:** [Electron](https://www.electronjs.org/) for a secure and high-performance native desktop environment.
- **Frontend:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) inside [Vite](https://vitejs.dev/) (`electron-vite`).
- **Styles:** Custom modular CSS and SCSS.
- **Native Modules:**
  - `node-pty` for terminal session execution.
  - `@hvir/rename-noreplace` (located under `packages/rename-noreplace`): A private native Node-API binding providing safe, atomic, no-replace file renaming across macOS and Linux.
- **Testing Engine:** [Vitest](https://vitest.dev/) for blazing fast unit and integration testing.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: `>= 24`
- **Compiler Tools**: C++ compiler tools (like Xcode Command Line Tools on macOS or `build-essential` on Linux) and `node-gyp` for compiling native modules.

### Installation

Clone the repository and install all dependencies:

```bash
npm install
```

> **Note:** The `postinstall` script automatically builds native Electron headers, compiles the private `@hvir/rename-noreplace` package, and rebuilds `node-pty`.

### Running in Development

Start the development server with hot-reloading:

```bash
npm run dev
```

### Building the Desktop Application

Compile all code and build the production bundles:

```bash
# Typecheck TypeScript files
npm run typecheck

# Build the final production bundles
npm run build

# Create a local platform-specific unpackaged directory
npm run build:dir
```

To pack installers for target platforms:

```bash
# macOS ARM64
npm run pack:mac:arm64

# Linux x64
npm run pack:linux:x64
```

---

## 🧪 Testing & Verification

`hvir` maintains a rigorous quality framework including unit, integration, smoke, and architectural checks.

### Run Tests

To run the full unit and integration test suites:

```bash
npm test
```

### Full Project Verification

Execute the complete verification pipeline (linters, formatting, typecheckers, ADR lifecycles, structural checks, and tests):

```bash
npm run verify
```

### Smoke Scenarios

To validate end-to-end integration and stability across various scenarios (such as terminal PTY, document reviews, and workspace recovery):

```bash
npm run smoke
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
