# hvir

hvir is a desktop workbench for working with projects, terminals, and coding
sessions. It brings local and SSH-hosted projects, files, Git, and terminal
workflows together in one Electron application.

## Features

- Open local projects or connect to an SSH host and browse for a project folder.
  SSH host entries are read from `~/.ssh/config`.
- Work across project workspaces and Git worktrees with split terminal and file
  viewer layouts.
- Browse and edit files, inspect Git changes and history, switch branches, fetch,
  and pull.
- Open web panes from terminal links and review documents with inline comments.
- Configure coding harness profiles and view terminal sessions across workspaces.

## Getting started

The native packages target macOS arm64 (`.pkg`) and Linux x64 and arm64 (`.deb`).
After installing a package, launch hvir from your applications menu and choose a
local or SSH host and a project folder. The installed `hvir` command can also
open a local project:

```sh
hvir /path/to/project
```

## Development

Requirements:

- Node.js 24 or newer and npm.
- Git for repository workflows.
- A native build toolchain for Node.js addons (including Python and a C/C++
  compiler). On macOS, install the Xcode command line tools.

Install dependencies and start the development app:

```sh
npm ci
npm run dev
```

Installation downloads Electron and rebuilds native modules for its runtime.
The application uses Electron, React, TypeScript, and electron-vite.

### Build and package

```sh
npm run build              # Type-check and build the application
npm run preview            # Run the built application
npm run build:dir          # Create an unpacked application in dist/
npm run pack:mac:arm64     # Build a macOS arm64 .pkg
npm run pack:linux:x64     # Build a Linux x64 .deb
npm run pack:linux:arm64   # Build a Linux arm64 .deb
```

Packaging requires the appropriate platform-specific build tools. Signed macOS
packages additionally require a configured signing identity; the
`pack:mac:arm64:signed` script enforces code signing.

### Checks

```sh
npm test                   # Vitest suite
npm run typecheck          # Node and renderer TypeScript checks
npm run lint               # ESLint
npm run verify             # Repository policy, lint, type-check, and tests
npm run smoke              # Electron smoke scenarios
```

Electron smoke tests require a graphical session; CI uses `xvfb-run -a npm run
smoke` on Linux. See `package.json` for focused smoke scenarios and other
development scripts.

## Project layout

- `src/main/` — Electron main process, project hosts, terminals, Git, and IPC.
- `src/preload/` — the bridge between the renderer and main process.
- `src/renderer/` — React workbench UI.
- `src/shared/` — shared types and contracts.
- `src/workers/` — worker processes.
- `test/` — automated tests; `scripts/` contains build and verification tools.

## License

hvir is licensed under the [MIT License](LICENSE). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices.
