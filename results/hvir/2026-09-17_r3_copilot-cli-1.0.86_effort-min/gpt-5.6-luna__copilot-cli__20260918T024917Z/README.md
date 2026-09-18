# hvir

hvir is a native Electron workbench for working with local and remote software projects. It combines persistent terminal sessions, Git-aware workspaces, file browsing and editing, rendered document previews, web panes, and integrations with command-line AI development tools in one desktop application.

## Features

- Native terminal workspaces backed by `node-pty`, with searchable output, themes, split layouts, recovery, and session management.
- Local projects and SSH-hosted workspaces, including Git repositories and Git worktrees.
- Git status, history, diffs, branches, fetch/pull, and guarded worktree operations.
- File tree navigation, filename search, source viewing, syntax highlighting, blame, image previews, and Markdown rendering.
- Document review workflows and diagnostic reports for investigating application and project state.
- Configurable harness profiles for providers such as Claude Code, Codex, Cursor, Gemini, GitHub Copilot, Pi, and shell sessions.
- Optional web panes and project-aware workspace persistence.

## Requirements

- Node.js 24 or newer
- npm
- Git
- A supported desktop platform: macOS or Linux

Native dependencies are rebuilt during installation. On Linux, install the standard build tools required by `node-gyp` and Electron native modules.

## Getting started

```bash
git clone <repository-url>
cd hvir
npm install
npm run dev
```

`npm install` also installs the Electron runtime and rebuilds the native modules used by hvir. If the application reports a missing terminal runtime, run the install step again before starting development.

## Common commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Electron development application |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the built application |
| `npm test` | Run the Vitest test suite |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check Prettier formatting |
| `npm run verify` | Run seam, ADR, architecture, lint, type-check, and unit-test checks |
| `npm run build:dir` | Build and package an unpacked desktop application |
| `npm run pack:mac:arm64` | Build a macOS ARM64 package |
| `npm run pack:linux:x64` | Build a Linux x64 Debian package |
| `npm run smoke` | Build the smoke target and run the desktop smoke scenarios |

Use `npm run test:watch` for an interactive test watcher and `npm run format` to format the repository.

## Project structure

```text
src/main/       Electron main process, host access, Git, SSH, IPC, and persistence
src/preload/    Typed, restricted bridge between Electron and the renderer
src/renderer/   React application and desktop workbench UI
shared/         Types and contracts shared across process boundaries
scripts/        Build, architecture, smoke, release, and project-management tooling
test/           Unit, integration, and renderer interaction tests
build/          Application icons and packaging metadata
```

The application uses Electron with React, TypeScript, Vite, CodeMirror, Ghostty terminal rendering, and Vitest.

## Development notes

The renderer communicates with privileged functionality through the typed preload bridge rather than accessing the filesystem, shell, Git, or SSH directly. When adding a feature that crosses the process boundary, update the relevant shared contract, preload API, IPC feature, and renderer surface together.

For a complete local gate, run:

```bash
npm run verify
```

Smoke scenarios require a built smoke target and may need a desktop session. SSH acceptance tests additionally require an accessible test host and credentials configured for the local environment.

## License

hvir is distributed under the [MIT License](LICENSE).
