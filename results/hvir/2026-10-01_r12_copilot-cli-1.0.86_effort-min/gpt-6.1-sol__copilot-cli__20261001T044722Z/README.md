# hvir

hvir is an Electron-based desktop development workbench that brings terminals,
files, Git, and web views into one workspace. It supports local projects and
remote workspaces over SSH.

## Features

- Integrated terminals powered by `node-pty` and `ghostty-web`, with split layouts
  and configurable terminal themes.
- Project switching, a file tree, tabbed file viewing and editing, and split
  viewer panes.
- Git change inspection and a Git graph.
- Embedded web panes for working with browser content alongside your project.
- SSH workspaces, session management, and document review.
- Application settings for themes, terminal preferences, and workbench layout.

## Getting started

### Prerequisites

- Node.js **24 or newer** and npm.
- Git for repository workflows.
- A native build toolchain: Python and Xcode Command Line Tools on macOS, or
  Python, `make`, and a C/C++ compiler on Linux.
- A graphical desktop environment to run the Electron application.

The repository provides packaging targets for macOS Apple Silicon (`.pkg`) and
Linux x64/ARM64 (`.deb`). Windows packaging is not configured.

### Run from source

From the repository root:

```sh
npm ci
npm run dev
```

Dependency installation also installs the Electron runtime, builds the local
`@hvir/rename-noreplace` native addon, and rebuilds `node-pty` for Electron. Do not
skip installation scripts or omit optional dependencies: the local native addon
is required by the runtime.

If startup reports that the terminal runtime does not match the checkout, run
`npm ci` again before retrying. Development and production builds check the
installed terminal runtime automatically.

## Development

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the application in development mode. |
| `npm run build` | Type-check and build the application into `out/`. |
| `npm run preview` | Launch the previously built application. |
| `npm run typecheck` | Check main/preload and renderer TypeScript code. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the Vitest suite once. |
| `npm run test:watch` | Run tests in watch mode. |
| `npm run format:check` | Check formatting with Prettier. |
| `npm run format` | Apply Prettier formatting. |
| `npm run verify` | Run seam, ADR, architecture, lint, type, and test checks. |
| `npm run smoke` | Build and run Electron smoke scenarios. |

Electron smoke tests require a display; headless Linux environments need a
virtual display. The architecture checks in `verify` also inspect repository and
GitHub evidence, so they may require additional repository history and credentials.

## Packaging

Run packaging commands on the corresponding target platform with its native build
toolchain available:

```sh
# Unpacked application
npm run build:dir

# macOS Apple Silicon installer
npm run pack:mac:arm64

# Linux Debian packages
npm run pack:linux:x64
npm run pack:linux:arm64
```

Build output goes to `out/`; packaged artifacts go to `dist/`. macOS packages
install the application into `/Applications`. Linux packages declare their system
library dependencies in [`electron-builder.yml`](electron-builder.yml).

For macOS builds that must be signed, use `npm run pack:mac:arm64:signed` with a
configured signing identity. That command requires code signing rather than
silently producing an unsigned package.

## Project structure

| Path | Contents |
| --- | --- |
| `src/main/` | Electron main process and host-side services. |
| `src/preload/` | Bridge between the renderer and host functionality. |
| `src/renderer/` | React workbench UI. |
| `src/shared/` | Shared types and contracts. |
| `packages/rename-noreplace/` | Local native filesystem addon. |
| `test/` | Automated tests. |
| `scripts/` | Build, verification, smoke, and release tooling. |
| `build/` | Icons, native resources, and installer configuration. |

The application uses TypeScript, React, Electron, and electron-vite. Terminal
rendering uses the `ghostty-web` build pinned in `package.json`; native terminal
sessions use `node-pty`.

## License

Licensed under the [MIT License](LICENSE). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices.
