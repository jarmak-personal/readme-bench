# hvir

A lightweight, view-first workbench for agentic development.

hvir is a cross-platform Electron desktop application that brings terminals, Git,
remote SSH workspaces, file and document viewers, and AI coding-agent harnesses
together in a single, view-first workbench. It is designed to keep the code and
context an agent is working on in view while you drive and review its work.

## Features

- **Integrated terminals** — GPU-accelerated terminal panes powered by
  [ghostty-web](https://github.com/jarmak-personal/ghostty-web) and
  [`node-pty`](https://github.com/microsoft/node-pty), with splitting, moving,
  theming, and lifecycle management.
- **Agentic harnesses** — Configurable harness profiles for launching and
  managing coding agents, scoped globally or per project.
- **Git workflows** — Built-in Git integration with a dedicated Git worker for
  status, diffs, and common operations.
- **Remote SSH workspaces** — Work against remote hosts using `ssh2` and
  `ssh-config`, with acceptance tooling for real-host validation.
- **Viewers & document review** — File viewers, filename search, Markdown
  rendering (`markdown-it`) with task lists and [Mermaid](https://mermaid.js.org/)
  diagrams, [Shiki](https://shiki.style/) syntax highlighting, CodeMirror-based
  merge/diff review, and an HTML preview pane.
- **Workbench health & diagnostics** — Runtime health checks, diagnostics
  reporting, and workspace activity tracking.

## Requirements

- **Node.js** `>= 24`
- Platform toolchain for building native modules (`node-gyp`, `electron-rebuild`)
- macOS or Linux for packaging targets (Windows is not a packaging target)

## Getting started

Install dependencies. The `postinstall` step installs the Electron runtime and
rebuilds native modules (`node-pty` and the `@hvir/rename-noreplace` addon):

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

## Scripts

### Build & run

| Command | Description |
| --- | --- |
| `npm run dev` | Start the app in development mode via electron-vite. |
| `npm run build` | Type-check and build all targets. |
| `npm run build:dir` | Build and produce an unpacked directory. |
| `npm run preview` | Preview a production build. |

### Packaging

| Command | Description |
| --- | --- |
| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg`. |
| `npm run pack:mac:arm64:signed` | Build a signed macOS arm64 `.pkg`. |
| `npm run pack:linux:x64` | Build a Linux x64 `.deb`. |
| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb`. |

### Quality & tests

| Command | Description |
| --- | --- |
| `npm run lint` | Run ESLint. |
| `npm run format` / `npm run format:check` | Format with Prettier / check formatting. |
| `npm run typecheck` | Type-check node and web targets. |
| `npm test` | Run the Vitest suite. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run test:mutation` | Run Stryker mutation testing. |
| `npm run verify` | Run seams, ADR, architecture, lint, typecheck, and test gates. |

### Smoke & acceptance

| Command | Description |
| --- | --- |
| `npm run smoke` | Build the smoke bundle and run smoke scenarios. |
| `npm run smoke:macos` | Run the macOS smoke scenario subset. |
| `npm run acceptance:ssh:macos` | Run the macOS SSH acceptance suite. |

Run `npm run` to see the full list of available scripts.

## Project structure

```
src/
  main/        Electron main process: runtime, IPC, git, pty, ssh, viewers, harness
  preload/     Preload bridges exposed to the renderer
  renderer/    React UI (workbench, terminals, git, viewers, settings, themes)
  shared/      Shared types and IPC contracts across processes
  workers/     Utility-process workers (git-worker, echo-worker)
packages/
  rename-noreplace/  Native addon for atomic no-replace renames
scripts/       Build, smoke, acceptance, and project-management tooling
```

The app builds three Electron targets (main, preload, renderer) with
[electron-vite](https://electron-vite.org/). Native `dependencies` are kept out
of the main/preload bundles so they load from `node_modules` at runtime.

## Contributing

Install the Git hooks before contributing:

```bash
npm run hooks:install
```

Please run `npm run verify` before opening a pull request. Report issues at the
[issue tracker](https://github.com/jarmak-personal/hvir/issues).

## License

[MIT](./LICENSE) © hvir contributors.

Third-party dependency notices are listed in
[THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
