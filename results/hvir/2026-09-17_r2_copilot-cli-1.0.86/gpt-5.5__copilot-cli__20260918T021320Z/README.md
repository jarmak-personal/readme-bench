# hvir

hvir is a desktop developer workbench built with Electron, React, and TypeScript.
It combines project browsing, file viewing/editing, Git inspection, terminal
workspaces, web panes, diagnostics, and AI harness profile management in one
cross-platform application.

## Features

- Electron desktop shell with a React renderer and Vite-powered builds.
- Local and SSH-backed project workspaces with file watching and workspace
  switching.
- Integrated terminal sessions powered by `node-pty`, including persisted
  terminal workspace state.
- Source, Markdown, image, rendered document, and diff viewing.
- Git status, history, graph, branch switching, fetch, pull, and guarded
  mutation flows.
- Configurable harness providers and profiles for terminal-based coding agents.
- Workbench health diagnostics, bounded evidence capture, smoke scenarios, and
  package validation flows.

## Requirements

- Node.js 24 or newer.
- npm.
- A platform supported by Electron and the native `@hvir/rename-noreplace`
  package: macOS or Linux.

The install step rebuilds native runtime dependencies for Electron, including
`node-pty` and the private no-replace rename Node-API binding.

## Getting started

```sh
npm ci
npm run dev
```

`npm run dev` starts the Electron app through `electron-vite`. On launch, hvir
opens or prompts for a project folder and stores user data under Electron's app
data directory.

To open a specific local project folder from the command line, pass it after the
dev command:

```sh
npm run dev -- /path/to/project
```

## Common commands

| Command                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `npm run dev`             | Start the development Electron app.              |
| `npm run build`           | Type-check and build main, preload, and renderer |
| `npm run typecheck`       | Run Node and web TypeScript checks.              |
| `npm run lint`            | Run ESLint across the repository.                |
| `npm test`                | Run the Vitest test suite.                       |
| `npm run verify`          | Run seams, ADR, architecture, lint, type, tests. |
| `npm run smoke`           | Build smoke mode and run Electron smoke flows.   |
| `npm run smoke:scenario`  | Build smoke mode and run selected scenarios.     |
| `npm run format:check`    | Check Prettier formatting.                       |
| `npm run format`          | Format the repository with Prettier.             |
| `npm run build:dir`       | Build and assemble an unpacked app directory.    |
| `npm run pack:linux:x64`  | Build a Linux x64 `.deb` package.                |
| `npm run pack:linux:arm64`| Build a Linux arm64 `.deb` package.              |
| `npm run pack:mac:arm64`  | Build a macOS arm64 `.pkg` package.              |

## Project layout

```text
src/main/       Electron main process, IPC handlers, project hosts, Git,
                terminal, diagnostics, sessions, and smoke runtime.
src/preload/    Electron preload bridge exposed to the renderer.
src/renderer/   React application, workbench UI, settings, viewer, Git,
                terminal, document review, sessions, and styles.
src/shared/     Cross-process contracts, shared types, and IPC definitions.
src/workers/    Utility-process worker entry points.
scripts/        Build, release, smoke, architecture, and project tooling.
packages/       Private native packages used by the app.
build/          Icons, platform packaging resources, entitlements, scripts.
test/           Fixtures used by tests and smoke scenarios.
```

## Packaging

Packaging is handled by `electron-builder` using `electron-builder.yml`.
Artifacts are written to `dist/`.

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

The packaged app includes `THIRD_PARTY_NOTICES.md`, native runtime resources,
and the compiled `@hvir/rename-noreplace` binding. macOS signed packaging is
available with:

```sh
npm run pack:mac:arm64:signed
```

## Validation and CI

Pull request CI installs dependencies with `npm ci`, runs `npm run verify`, runs
Linux and macOS Electron smoke coverage, and performs CodeQL analysis for
JavaScript and TypeScript.

For a local pre-PR check, run:

```sh
npm run verify
```

Use focused commands such as `npm test`, `npm run typecheck`, or
`npm run smoke:scenario -- <scenario>` while developing smaller changes.

## License

This project is licensed under the MIT License. Third-party notices are recorded
in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
