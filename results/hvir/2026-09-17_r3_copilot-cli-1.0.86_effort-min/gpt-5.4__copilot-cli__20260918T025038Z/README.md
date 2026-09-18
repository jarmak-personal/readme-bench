# hvir

hvir is a desktop Git and terminal workbench built with Electron, React, and TypeScript. It combines multi-workspace terminal management, Git changes and history, document review flows, session recall, SSH-backed projects, and embedded web panes in one local app.

## Highlights

- **Workspace-first desktop UI** for switching among projects and worktrees, browsing files, and keeping multiple terminal surfaces active at once.
- **Integrated Git tooling** with working tree inspection, branch controls, fetch/pull actions, and history/graph views.
- **Document review surfaces** for creating inline comments and reviewing files inside the app.
- **Sessions overview** for finding and reopening exact terminal sessions across workspaces.
- **SSH-aware project support** with remote host prompts and remote workspace flows.
- **Embedded web panes** that keep terminal-launched web apps close to the source workspace.
- **Configurable workbench settings** for themes, typography, terminal behavior, Git refresh cadence, and keybinding overrides.

## Tech stack

- **Runtime:** Electron
- **UI:** React
- **Language:** TypeScript
- **Build tooling:** electron-vite, Vite
- **Testing:** Vitest
- **Linting/formatting:** ESLint, Prettier

## Requirements

- **Node.js:** 24 or newer
- **npm:** bundled with the supported Node release

Native runtime setup is part of install; the project rebuilds Electron-native dependencies during `postinstall`.

## Getting started

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build
npm test
npm run lint
npm run typecheck
```

## Packaging and verification

- `npm run build:dir` builds the app and produces an unpacked Electron bundle.
- `npm run pack:mac:arm64` builds a macOS ARM64 package.
- `npm run pack:linux:x64` builds a Linux x64 `.deb` package.
- `npm run smoke` runs the smoke scenario suite against a smoke build.
- `npm run verify` runs seam checks, ADR checks, architecture enforcement, lint, typecheck, and tests.

Additional platform-specific packaging and SSH acceptance scripts are defined in `package.json`.

## Project layout

```text
src/main       Electron main-process runtime, IPC, Git, PTY, SSH, and workspace orchestration
src/preload    Renderer bridge exposed as window.hvir
src/renderer   React workbench UI, terminals, viewer, Git, sessions, settings, and web panes
src/workers    Utility-process workers such as Git and echo workers
test           Vitest coverage across runtime, UI, packaging, smoke, and workflow behaviors
build          Packaging assets and platform installer resources
scripts        Build, release, project-management, and smoke helpers
```

## License

[MIT](./package.json)
