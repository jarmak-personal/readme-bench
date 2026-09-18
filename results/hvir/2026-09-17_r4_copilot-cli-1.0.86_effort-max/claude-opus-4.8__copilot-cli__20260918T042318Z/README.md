# hvir

**hvir** is a desktop workbench for running terminal-based CLI coding agents. It
wraps agent processes such as Claude Code, Codex, Gemini CLI, GitHub Copilot CLI,
and Cursor CLI in managed terminal sessions and surrounds them with the tools you
need while they work: an integrated file tree and viewer, Git panel and history
graph, document review, embedded web panes, and SSH remote workspaces.

Built with Electron, React, and TypeScript.

> **Status:** early development (`0.2.x`, `private`). Interfaces and packaging are
> still evolving.

---

## Features

- **Managed agent sessions** — Launch coding agents in dedicated terminals with
  session recovery and resume (e.g. Claude Code / Codex), attention badges when an
  agent needs you, and context-pressure and token-usage telemetry.
- **Terminal workspaces** — Fast terminals powered by
  [`ghostty-web`](https://github.com/jarmak-personal/ghostty-web) and
  [`node-pty`](https://github.com/microsoft/node-pty), with splits, custom
  layouts, and the ability to move terminals between workspaces.
- **File tree & viewer** — Browse project files and preview them with Markdown
  rendering ([markdown-it](https://github.com/markdown-it/markdown-it), task
  lists), syntax highlighting ([Shiki](https://shiki.style)),
  [Mermaid](https://mermaid.js.org) diagrams, and side-by-side diff/merge views
  (CodeMirror).
- **Git integration** — A Git panel and commit graph with worktrees, branch
  switching, and fetch / pull / prune, driven by a dedicated Git worker.
- **Document review** — A review workspace that can feed selections and notes back
  into an agent's composer.
- **Web panes** — Embedded web content and HTML previews alongside your terminals.
- **SSH remote workspaces** — Open and work in projects hosted on remote machines
  over SSH.
- **Settings & themes** — Configurable preferences and a curated terminal theme
  catalog.

### Supported agents (harnesses)

| Harness | Notes |
|---|---|
| Shell | Plain interactive shell |
| Claude Code | Session recovery/resume, context & usage telemetry |
| Codex | Session discovery/recovery, context & usage telemetry |
| Gemini CLI | |
| GitHub Copilot CLI | |
| Cursor CLI | |
| Pi | |
| Custom | Bring your own command |

---

## Architecture

hvir is an Electron application split across the standard process boundaries plus
dedicated utility-process workers:

- **`src/main`** — Main process: application runtime, PTY supervision, Git
  mutations, project/workspace coordination, harness providers, sessions, and IPC.
- **`src/preload`** — Preload bridge exposed to the renderer (diagnostics,
  clipboard/file paste).
- **`src/renderer`** — React 19 UI: terminal workspaces, viewer, Git panels,
  document review, web panes, settings, and themes.
- **`src/workers`** — Utility-process workers (`git-worker`, `echo-worker`) forked
  by the main process for off-thread work.
- **`src/shared`** — Types and contracts shared across process boundaries.
- **`packages/rename-noreplace`** — Private native (Node-API) module providing
  atomic, no-replace cross-directory rename.

Builds use [electron-vite](https://electron-vite.org). Native modules (`node-pty`
and `@hvir/rename-noreplace`) are rebuilt against Electron's ABI during install.

### Development philosophy

The codebase is governed by Architecture Decision Records (`docs/adr`,
indexed from `docs/design.md`) and automated checks for module seams,
architecture hotspots, and ADR structure. See the scripts under `scripts/` and the
`verify` npm script.

---

## Getting started

### Prerequisites

- **Node.js `>= 24`**
- A C/C++ toolchain for native module builds (needed by `node-gyp` /
  `electron-rebuild`):
  - **macOS:** Xcode Command Line Tools (`xcode-select --install`)
  - **Linux:** `build-essential`, `python3`, and the runtime libraries listed
    under `deb.depends` in `electron-builder.yml`

### Install

```bash
npm install
```

`postinstall` runs `install:runtime`, which installs the Electron runtime and
rebuilds the native modules (`@hvir/rename-noreplace`, `node-pty`) against
Electron's ABI.

### Run in development

```bash
npm run dev
```

### Build

```bash
npm run build        # typecheck + electron-vite build
npm run build:dir    # build and produce an unpacked app directory
```

---

## Packaging

Distribution targets are defined in `electron-builder.yml`.

```bash
# macOS (Apple silicon) .pkg
npm run pack:mac:arm64
npm run pack:mac:arm64:signed   # requires code-signing identity

# Linux .deb
npm run pack:linux:x64
npm run pack:linux:arm64
```

---

## Testing & quality

```bash
npm test               # unit/integration tests (Vitest)
npm run test:watch     # watch mode
npm run test:mutation  # mutation testing (Stryker)
npm run lint           # ESLint
npm run format         # Prettier (write)
npm run format:check   # Prettier (check)
npm run typecheck      # tsc for node + web targets

npm run verify         # seams + ADRs + architecture + lint + typecheck + test
```

Additional end-to-end style **smoke scenarios** exercise real subsystems (PTY,
viewer, Git workflow, remote workspaces, terminal lifecycle, and more):

```bash
npm run smoke              # full scenario suite
npm run smoke:macos        # macOS subset
npm run smoke:scenario     # run specific scenarios by name
```

### Git hooks

```bash
npm run hooks:install
```

---

## Project structure

```
src/
  main/       Electron main process (runtime, PTY, Git, sessions, IPC, harnesses)
  preload/    Preload bridge exposed to the renderer
  renderer/   React UI (terminals, viewer, Git, review, web panes, settings)
  workers/    Utility-process workers (git-worker, echo-worker)
  shared/     Cross-process types and contracts
packages/
  rename-noreplace/   Private native no-replace rename module
scripts/      Build, release, smoke, architecture, and project-management tooling
test/         Test suites and fixtures
build/        Packaging resources (icons, entitlements, platform assets)
```

---

## License

[MIT](LICENSE) © hvir contributors

Redistributed third-party components and their notices are documented in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
