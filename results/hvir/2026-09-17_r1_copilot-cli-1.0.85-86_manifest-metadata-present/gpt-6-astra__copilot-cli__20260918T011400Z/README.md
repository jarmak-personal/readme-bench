# hvir

A lightweight, view-first workbench for agentic development.

hvir brings terminals, coding-agent sessions, file previews, and Git workflows into
one desktop application. Work with local projects or connect over SSH, and keep
multiple projects and Git worktrees accessible without switching applications.

Built with Electron, React, and TypeScript, with Ghostty-based terminal rendering.

## Features

- **Projects and worktrees:** switch between projects and their Git worktrees, with
  a Sessions view for activity across workspaces.
- **Terminals and coding agents:** use a plain shell or configure launch profiles
  for Claude Code, Codex, Pi, Gemini, GitHub Copilot, Cursor, and custom commands.
- **File viewing and editing:** browse source, edit files, and switch between
  source, rendered, and diff views. Preview Markdown, Mermaid diagrams, HTML,
  JSON, YAML, CSV, and images.
- **Git inspection:** review working-tree and branch-point changes, browse commit
  history, inspect diffs and blame, and manage branches.
- **Remote projects:** browse files and run workspace commands on SSH hosts.
- **Customizable workspace:** configure appearance, terminal preferences,
  keybindings, and harness profiles.

## Install

Download the appropriate native package from
[GitHub Releases](https://github.com/jarmak-personal/hvir/releases).

| Platform | Architecture | Package |
| --- | --- | --- |
| macOS | Apple Silicon (`arm64`) | `.pkg` |
| Linux | `x64`, `arm64` | `.deb` |

Linux release acceptance covers Ubuntu 24.04 and Debian 13. Windows and Intel
macOS packages are not currently configured.

Install the package using your operating system's installer, then launch **hvir**.
Native packages also provide a command for opening a local project:

```sh
hvir /path/to/project
# Or open the current directory:
hvir .
```

Git is needed for repository operations. Coding-agent CLIs are separate tools:
install and authenticate the ones you want to use on the host where they will run.

## Getting started

1. Launch hvir and select a project folder, or open one with `hvir .`.
2. Use the project controls to open additional local or SSH projects and switch
   between their workspaces.
3. Open **Settings > Harnesses** to configure shell or coding-agent launch profiles.
   Use **Refresh availability** to check which tools are available.
4. Run your shell or agent in a terminal, browse files, and inspect the resulting
   changes in source, rendered, or diff views.

For remote work, select an SSH host in the project dialog, complete any
authentication or host-key prompts, and choose a folder on that host.

## Development

### Prerequisites

- **Node.js 24 or newer** and npm.
- **Git**.
- A native build toolchain for the Node addons: Python and C/C++ build tools
  (Xcode Command Line Tools on macOS; a compiler and `make` on Linux).
- A graphical desktop environment for running the Electron application.

### Run from source

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

The install lifecycle downloads Electron, builds the native rename helper, and
rebuilds `node-pty` for Electron. Do not skip install scripts. If native runtime
dependencies need rebuilding, run `npm run install:runtime`.

To start development with a specific project:

```sh
HVIR_PROJECT_ROOT=/absolute/path/to/project npm run dev
```

### Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development application |
| `npm run build` | Type-check and build into `out/` |
| `npm run preview` | Launch the built application |
| `npm run typecheck` | Check main-process and renderer types |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm test` | Run the Vitest suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run smoke` | Build and run Electron smoke scenarios |
| `npm run build:dir` | Build an unpacked application in `dist/` |

Electron smoke scenarios require a display. Linux CI runs them with
`xvfb-run -a npm run smoke`. Additional checks and targeted scenarios are defined
in [package.json](package.json).

### Native packages

Run the appropriate command on the target platform with its native build tools:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Package artifacts are written to `dist/`. Packaging settings are in
[electron-builder.yml](electron-builder.yml); signing and release acceptance are
handled by the [release workflows](.github/workflows).

### Project layout

| Path | Contents |
| --- | --- |
| `src/main/` | Electron lifecycle, project hosts, terminals, Git, and application services |
| `src/preload/` | Bridge between the renderer and main process |
| `src/renderer/` | React workbench UI |
| `src/shared/` | Shared types, contracts, and policies |
| `src/workers/` | Worker entry points, including Git operations |
| `packages/rename-noreplace/` | Native filesystem helper |
| `scripts/` | Verification, packaging, smoke tests, and project automation |
| `test/` | Automated tests and fixtures |
| `build/` | Application icons, installer hooks, and platform resources |

## License

[MIT](LICENSE). See [Third-party notices](THIRD_PARTY_NOTICES.md) for bundled
component licenses and acknowledgments.
