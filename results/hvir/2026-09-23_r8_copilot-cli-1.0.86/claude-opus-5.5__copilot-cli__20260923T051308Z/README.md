# hvir

hvir is a desktop workbench for running AI coding agents ("harnesses") in
terminals next to your project. It is built with Electron, React, and a
[ghostty-web](https://github.com/jarmak-personal/ghostty-web) terminal, and it
runs on macOS and Linux.

## Features

- **Harness terminals.** Start and manage sessions for Claude Code, Codex,
  Cursor, Gemini, GitHub Copilot, Pi, or a plain shell. You can split, move, and
  restore terminals within a workspace.
- **Projects and workspaces.** Open local project folders or remote hosts over
  SSH. SSH uses your `~/.ssh/config`, handles host trust, and watches files on the
  remote host.
- **File tree and viewer.** Browse project files, search by filename, and view
  source with syntax highlighting (Shiki), rendered Markdown, and Mermaid
  diagrams.
- **Git.** Inspect changes and diffs (CodeMirror merge view) and run common Git
  operations.
- **Document review.** Add inline review comments on documents and send them to
  a harness session.
- **Web panes.** Show dashboards or local web apps next to your terminals.
- **Settings.** Configure terminal themes, harness profiles, and app
  preferences.

## Installation

Each [GitHub release](https://github.com/jarmak-personal/hvir/releases)
publishes an `install.sh` installer, a macOS arm64 `.pkg`, and Linux x64/arm64
`.deb` packages.

```sh
# Install or update
bash install.sh

# Uninstall (keeps user settings)
bash install.sh --uninstall

# Uninstall and remove the current user's hvir settings and cache
bash install.sh --uninstall --purge
```

The installed packages add an `hvir` command:

```sh
hvir                 # launch hvir
hvir path/to/project # open a local project directory
```

Linux packages need glibc 2.35 or newer.

## Development

### Prerequisites

- Node.js 24 or newer
- A C/C++ toolchain for native modules (`node-pty`, `@hvir/rename-noreplace`)

### Setup

```sh
npm ci                # installs dependencies and rebuilds native modules for Electron
npm run hooks:install # optional: installs the pre-push hook (typecheck + smoke tests)
```

### Common scripts

| Command                   | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| `npm run dev`             | Start the app in development mode with hot reload             |
| `npm run build`           | Typecheck, then build main, preload, and renderer into `out/` |
| `npm run preview`         | Preview the production build                                  |
| `npm test`                | Run unit tests (Vitest)                                       |
| `npm run test:watch`      | Run tests in watch mode                                       |
| `npm run test:mutation`   | Run mutation testing (Stryker)                                |
| `npm run lint`            | Lint with ESLint                                              |
| `npm run typecheck`       | Typecheck the Node and web projects                           |
| `npm run format`          | Format with Prettier                                          |
| `npm run verify`          | Run seam, ADR, architecture, lint, typecheck, and test checks |
| `npm run smoke`           | Build the smoke bundle and run the Electron smoke scenarios   |
| `npm run smoke:macos`     | Run the smoke scenarios that apply on macOS                   |
| `npm run smoke:scenario`  | Run specific smoke scenarios, e.g. `-- terminal-split`        |

On headless Linux, run smoke tests under Xvfb, for example
`xvfb-run -a npm run smoke`.

### Packaging

| Command                     | Output                              |
| --------------------------- | ----------------------------------- |
| `npm run build:dir`         | Unpacked app in `dist/`             |
| `npm run pack:mac:arm64`    | macOS arm64 `.pkg`                  |
| `npm run pack:linux:x64`    | Linux x64 `.deb`                    |
| `npm run pack:linux:arm64`  | Linux arm64 `.deb`                  |

`electron-builder.yml` holds the packaging configuration.

## Project structure

```
src/
  main/       Electron main process: projects, SSH hosts, PTYs, Git, harnesses, IPC
  preload/    Preload bridge exposed to the renderer
  renderer/   React UI: terminals, file tree, viewer, Git, settings, workspaces
  shared/     Types and IPC contracts shared by the main process and renderer
  workers/    Background worker entry points
packages/
  rename-noreplace/  Native Node addon for atomic no-replace renames
scripts/      Build, release, smoke-test, architecture, and project-management tooling
test/         Vitest test suites
build/        Icons, entitlements, and platform packaging resources
```

## License

hvir is released under the [MIT License](LICENSE). Licenses for bundled
third-party components are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
