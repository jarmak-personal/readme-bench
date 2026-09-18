# hvir

hvir is a desktop workbench for software projects and terminal-based coding
agents. It brings project navigation, terminals, source review, Git workflows,
and local or SSH-hosted workspaces into one Electron application.

## Features

- Work with projects on the local machine or over SSH.
- Run multiple persistent terminal workspaces with split and focused layouts.
- Launch plain shells, custom commands, and supported coding-agent CLIs,
  including Claude Code, Codex, Cursor, Gemini, GitHub Copilot, and Pi.
- Browse, create, move, rename, and delete project files.
- View and edit source files, inspect diffs, and render Markdown, Mermaid, YAML,
  and repository images.
- Review Git changes, history, branches, and worktrees without leaving the
  workbench.
- Track agent sessions, resource usage, and document-review workflows.
- Configure terminal themes, typography, keybindings, harness profiles, and
  other workspace preferences.

## Platform support

hvir is packaged for:

- macOS on Apple silicon (`.pkg`)
- Linux on x64 and arm64 (`.deb`)

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 24 or newer
- npm
- Git
- A native build toolchain supported by
  [`node-gyp`](https://github.com/nodejs/node-gyp#installation)

Installing dependencies builds the native terminal modules used by Electron.

```sh
git clone <repository-url>
cd hvir
npm ci
npm run dev
```

The application automatically detects supported agent CLIs that are available
on the host. They are optional; a plain shell and custom command profiles can
be used without installing an agent CLI.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Electron in development mode |
| `npm run build` | Type-check and create a production build |
| `npm test` | Run the Vitest test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm run verify` | Run architecture checks, linting, type checks, and tests |
| `npm run smoke` | Build and run the Linux Electron smoke suite |
| `npm run smoke:macos` | Build and run the macOS Electron smoke suite |

## Packaging

Create an unpacked application directory:

```sh
npm run build:dir
```

Create a platform installer:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Generated artifacts are written to `dist/`.

## Project structure

```text
src/
  main/       Electron main process, project hosts, PTYs, Git, and IPC
  preload/    Typed bridge between the main process and renderer
  renderer/   React workbench UI
  shared/     Contracts and shared domain types
  workers/    Electron utility-process workers
test/         Vitest integration and component tests
scripts/      Build, release, architecture, and smoke-test tooling
packages/     Project-owned native packages
```

Before submitting a change, run:

```sh
npm run verify
```

Changes that affect Electron integration should also run the smoke suite for the
target platform.

## License

hvir is licensed under the [MIT License](LICENSE). Third-party attributions are
listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
