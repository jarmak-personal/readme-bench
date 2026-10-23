# hvir

**hvir** is a desktop workbench for terminal-first software development and AI coding agent workflows, built with Electron, React, TypeScript, and `ghostty-web`.

It unifies multi-session PTY terminals, AI coding harness management, Git workflows, rich file inspection, inline document review, and loopback web previews across both local directories and agentless remote SSH hosts.

---

## Key Features

- **Terminal-First Workbench**: Powered by `ghostty-web` (WebAssembly VT parser) and `node-pty` with split panes, session persistence/recovery, search, semantic file-path link activation, synchronized output, and a curated terminal theme gallery.
- **AI Coding Harness Integration**: First-class launch profiles, environment/path bindings, and live context/usage telemetry for bundled providers:
  - Claude Code (`claude-code`)
  - OpenAI Codex (`codex`)
  - GitHub Copilot (`github-copilot`)
  - Gemini CLI (`gemini`)
  - Cursor (`cursor`)
  - Pi (`pi`)
  - Plain shell and custom command profiles
- **Sessions Overview**: Dedicated cross-workspace destination to monitor active terminals, harness sessions, attention badges, and token/context utilization in one place.
- **Agentless Remote SSH Workspaces**: Every filesystem, process, PTY, watch, and loopback operation runs through a unified `ProjectHost` abstraction (`LocalHost` and `SshHost` over `ssh2`), supporting remote workspaces without installing custom server daemons on the target host.
- **Integrated Git Client**: Off-main-thread Git engine (`git-worker`) supporting working-tree status, staging/unstaging, commits, branch & worktree management, commit history, and lane-based commit graph visualization.
- **Rich File Viewer & Editor**: CodeMirror 6 source editing and side-by-side/unified diff views, Shiki syntax highlighting, rendered Markdown with Mermaid diagrams, repository image previews, large-file streaming views, and fast filename search.
- **Inline Document Review**: Anchor comments and review batches directly on source or rendered documents and deliver structured feedback straight to an active terminal session.
- **Loopback Web Panes**: Inspect local or remote dev servers inside the workbench through a main-process loopback HTTP proxy with strict navigation confinement.

---

## Architecture

`hvir` enforces strict architectural seams (verified via `npm run check-seams` and `npm run architecture:check`):

```text
src/
├── main/        # Electron main process: host catalog, PTY supervisor, IPC authority,
│                # harness providers & telemetry, Git coordinator, loopback proxy, diagnostics
├── preload/     # Context-isolated preload bridge (sole caller of ipcRenderer)
├── renderer/    # React 19 UI: terminal deck, file tree, viewer, Git rail, sessions, settings
├── shared/      # Pure domain types, host-qualified paths (HostPath), IPC contracts, keybindings
└── workers/     # Utility-process workers (git-worker, echo-worker)

packages/
└── rename-noreplace/  # Native N-API addon for atomic non-overwriting file renames
```

### Core Invariants
1. **Single IPC Authority**: `ipcRenderer` is confined to `src/preload/`, and `ipcMain` is confined to `src/main/ipc/authority-router.ts` with central renderer-owner and canonical path authorization.
2. **Host Transport Seam (`ProjectHost`)**: Direct Node host primitives (`fs`, `child_process`, `chokidar`, `node-pty`) are imported only in `LocalHost`, and `ssh2` stays inside the `SshHost` adapter. Higher-level features operate strictly on host-qualified `HostPath` values.
3. **Supervised PTYs**: All PTY creation goes through `PtySupervisor`.
4. **Provider Isolation**: Bundled harness provider IDs and probing logic stay encapsulated within `src/main/harness/`.

---

## Prerequisites

- **Node.js**: `>= 24`
- **OS**: macOS (`arm64`) or Linux (`x64` / `arm64`, `glibc >= 2.35`)
- **Build Toolchain**: C/C++ compiler toolchain and Python 3 (required by `node-gyp` to compile `node-pty` and `@hvir/rename-noreplace`)

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

`postinstall` automatically runs `npm run install:runtime`, which downloads the Electron runtime, compiles `@hvir/rename-noreplace`, and rebuilds `node-pty` against Electron's ABI.

### 2. Start in Development Mode

```bash
npm run dev
```

### 3. Build for Production

```bash
# Typecheck and bundle main, preload, renderer, and workers into out/
npm run build

# Preview production bundle in Electron
npm run preview
```

---

## Verification & Testing

Run the full verification suite (architectural seam checks, ADR validation, hotspot enforcement, ESLint, TypeScript typechecking, and Vitest unit tests):

```bash
npm run verify
```

### Individual Commands

| Command | Description |
| :--- | :--- |
| `npm test` | Run unit and integration tests with Vitest |
| `npm run test:watch` | Run Vitest in interactive watch mode |
| `npm run test:mutation` | Run mutation testing with Stryker |
| `npm run typecheck` | Typecheck Node (`tsconfig.node.json`) and Web (`tsconfig.web.json`) targets |
| `npm run lint` | Run ESLint across the repository |
| `npm run format:check` | Check code formatting with Prettier (`npm run format` to write) |
| `npm run check-seams` | Enforce architectural import and authority boundaries |
| `npm run architecture:check` | Enforce module dependency directions and hotspot budgets |
| `npm run smoke` | Build in smoke mode and run end-to-end Electron smoke scenarios |
| `npm run smoke:macos` | Run macOS unpackaged Electron smoke scenarios |

---

## Packaging

Build native desktop packages with `electron-builder`:

```bash
# Unpackaged application directory in dist/
npm run build:dir

# macOS arm64 installer (.pkg)
npm run pack:mac:arm64

# Debian/Ubuntu Linux packages (.deb)
npm run pack:linux:x64
npm run pack:linux:arm64
```

When installed via a native package, the `hvir` CLI launcher (`build/native/hvir-command`) opens the workbench directly at a target directory:

```bash
hvir /path/to/project
```

---

## License

Released under the [MIT License](./LICENSE). See [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) for bundled third-party software notices.
