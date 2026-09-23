# hvir

hvir is a desktop workbench for software projects. It brings project and workspace
navigation, Git tools, file browsing and review, and persistent terminal sessions
into one Electron application. It can connect to local and remote projects over SSH
and work with supported AI coding harnesses from its terminals.

## Features

- Browse project files, preview common source and document formats, and compare
  changes.
- Inspect Git status, history, branches, diffs, and worktrees.
- Manage workspaces and SSH connections, with host-key verification and prompts.
- Run persistent terminal sessions, organize them across panes, and recover them
  through workspace lifecycle changes.
- Configure terminal appearance, keybindings, harness profiles, and other
  workbench preferences.
- Review and deliver documents, and inspect runtime diagnostics when needed.

## Requirements

- Node.js 24 or later
- npm
- Native build tools required by `node-gyp` and Electron's native dependencies

The packaged Linux application requires a compatible modern Linux distribution;
see the dependency list in `electron-builder.yml`. macOS packaging currently
targets Apple Silicon.

## Development

Install dependencies and launch the desktop application:

```sh
npm ci
npm run dev
```

`npm ci` runs the project's install hooks, which prepare Electron and rebuild
native modules for Electron. If the native terminal runtime is missing or
incompatible, the development and build commands check it and report the issue.

## Build and package

```sh
npm run build
npm run build:dir
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

`build` type-checks the Node and renderer code before producing application
artifacts in `out/`. `build:dir` creates an unpacked local package. Platform
packages are written to `dist/`; use the matching platform and architecture.

## Verification

```sh
npm run verify
npm run smoke
```

`verify` runs architecture and repository policy checks, linting, type checks,
and the Vitest suite. `smoke` builds a smoke-mode application and runs the
Electron workflow scenarios; it requires a graphical display (Linux CI uses
`xvfb-run`). Other focused smoke and acceptance scripts are listed in
`package.json`.

## Project layout

- `src/main/` — Electron main process, project/workspace services, Git, SSH,
  terminals, and IPC.
- `src/preload/` — Renderer bridge exposed through Electron preload.
- `src/renderer/` — React workbench UI.
- `src/shared/` — Types and utilities shared across process boundaries.
- `test/` — Unit, integration, and Electron workflow tests.
- `scripts/` — Development, verification, smoke, and release tooling.

## License

This project is licensed under the MIT License; see [LICENSE](LICENSE).
Third-party software notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
