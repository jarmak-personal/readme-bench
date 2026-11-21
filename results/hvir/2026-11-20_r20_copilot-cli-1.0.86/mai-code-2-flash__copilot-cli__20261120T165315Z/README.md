# hvir

hvir is a desktop workbench for software projects, built with Electron, React, and TypeScript. It combines local and SSH project access with terminals, file browsing and editing, Git views, document review, web surfaces, and launch profiles for coding harnesses.

## Features

- **Project workspaces** — open local repositories or connect to remote hosts over SSH.
- **Integrated terminals** — split terminal layouts, session recovery, search, themes, and terminal profiling powered by Ghostty-compatible terminal runtime components.
- **Harness integration** — launch and manage Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi, shell, or custom command profiles.
- **File workbench** — browse project files, edit source, preview and diff documents, and perform bounded file operations.
- **Git tools** — inspect changes, status, branches, diffs, and repository history.
- **Document review** — collect review feedback and deliver it to an active harness terminal.
- **Embedded web panes** — open project-related web content alongside the workbench.
- **Sessions overview** — discover and resume supported harness sessions.

## Requirements

- Node.js 24 or newer
- npm
- Native build tools required by Electron and native modules
- A supported desktop environment for Electron
- macOS or Linux for native packaging scripts

The initial `npm ci` runs the project postinstall, which rebuilds the native Electron runtime dependencies.

## Getting started

```bash
npm ci
npm run dev
```

`npm run dev` checks the terminal runtime, starts Electron Vite, and opens the desktop application.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the application in development mode |
| `npm run build` | Type-check and build the Electron application |
| `npm run preview` | Preview a built application |
| `npm run typecheck` | Run Node and renderer TypeScript checks |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm run format` | Format the repository |
| `npm test` | Run the Vitest suite |
| `npm run verify` | Run architecture checks, lint, type checks, and tests |
| `npm run smoke` | Run the Electron smoke workflow |

Use `npm run smoke:scenario -- <scenario-name>` to run one smoke scenario. Use `npm run smoke:macos` for the macOS-focused scenario set.

## Building packages

```bash
npm run build:dir
```

The output is written to `dist/`.

Platform packages can also be created with:

```bash
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

The macOS package target produces an Apple package (`.pkg`) and the Linux targets produce Debian packages (`.deb`). Signing-specific macOS tooling and credentials are only required for the signed packaging workflow.

## Project structure

- `src/main/` — Electron main process, IPC, project hosts, terminals, Git, harnesses, and sessions
- `src/preload/` — the typed `window.hvir` preload bridge
- `src/renderer/` — React workbench UI
- `src/shared/` — contracts shared by main and renderer processes
- `src/workers/` — native main-process worker entry points
- `test/` — unit and integration-oriented Vitest coverage
- `scripts/` — build, smoke, architecture, release, and project-management automation
- `packages/rename-noreplace/` — private native no-replace rename module

## Architecture validation

Run the full local verification suite with:

```bash
npm run verify
```

It validates module seams and architecture rules, checks architecture documentation, runs lint and both TypeScript configurations, and executes the test suite.

## Contributing

Install the repository Git hooks before contributing:

```bash
npm run hooks:install
```

Keep changes scoped, add or update tests for behavioral changes, and run `npm run verify` before submitting a pull request.

## License

MIT — see [LICENSE](LICENSE).
