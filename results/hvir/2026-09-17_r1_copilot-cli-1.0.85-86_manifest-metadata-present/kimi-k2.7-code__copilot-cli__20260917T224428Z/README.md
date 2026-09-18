# hvir

A lightweight, view-first workbench for agentic development.

hvir is an Electron desktop application that brings together terminals, Git workflows, SSH sessions, and structured viewers in a single, keyboard-driven workspace. It is built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/), and uses [node-pty](https://github.com/microsoft/node-pty) with an embedded [Ghostty](https://ghostty.org/)-based web terminal for native-feeling shell sessions.

## Features

- **Multi-pane terminal workspace** — split, move, and resize terminals; each shell is backed by a real PTY.
- **SSH remote development** — connect to remote hosts through native SSH sessions with config and identity support.
- **Git workflow tools** — stage, diff, commit, and review changes without leaving the workbench.
- **View-first layout** — arrange terminals, web panes, documents, and viewers side by side.
- **Session projection** — restore and reason about workspace state across restarts.
- **Native host integration** — platform-specific contracts for macOS and Linux packaging.

## Requirements

- [Node.js](https://nodejs.org/) >= 24
- npm (ships with Node.js)
- macOS or Linux for full native feature support

## Getting started

Install dependencies and build the native runtime:

```bash
npm install
```

Start the application in development mode:

```bash
npm run dev
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Electron app in development mode |
| `npm run build` | Type-check and build the app for production |
| `npm run typecheck` | Run TypeScript checks for the main and renderer processes |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the codebase with Prettier |
| `npm test` | Run the Vitest unit test suite |
| `npm run smoke` | Build and run the full smoke-test suite |
| `npm run verify` | Run seams, ADR, architecture, lint, type-check, and test checks |

### Packaging

| Script | Platform / output |
| --- | --- |
| `npm run pack:mac:arm64` | macOS `.pkg` for Apple Silicon |
| `npm run pack:linux:x64` | Linux `.deb` for x64 |
| `npm run pack:linux:arm64` | Linux `.deb` for ARM64 |

## Project structure

```text
src/
  main/       # Electron main process
  preload/    # Preload scripts and context-bridge APIs
  renderer/   # React-based UI
  shared/     # Code shared between main, preload, and renderer
  workers/    # Web / service workers
```

## Architecture

The project records architectural decisions in `docs/architecture/` and enforces structural boundaries through seam checks and architecture hotspot reporting. Run the full verification pipeline before opening a pull request:

```bash
npm run verify
```

## Contributing

Contributions are welcome. Please open an issue or pull request at [jarmak-personal/hvir](https://github.com/jarmak-personal/hvir).

## License

hvir is licensed under the [MIT License](LICENSE).
