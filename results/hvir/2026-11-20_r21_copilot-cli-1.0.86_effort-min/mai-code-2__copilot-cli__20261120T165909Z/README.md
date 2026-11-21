# hvir

**hvir** is a desktop workbench for software projects and command-line workflows. It combines a project file browser, source and document viewer, Git history and diff tools, split terminal workspaces, and local or SSH-hosted projects in one Electron application.

The application is designed around local-first operation and a process boundary between the renderer, Electron main process, and privileged file, Git, SSH, and terminal operations.

## Features

- Register and switch between local projects and SSH-backed workspaces.
- Browse, search, create, copy, move, rename, and remove project files.
- Open files in primary and secondary viewer panes with split-view support.
- Preview source, Markdown, Mermaid diagrams, images, CSV, and other common document formats.
- Review diffs and inline document comments, then hand review text off to a terminal.
- Inspect Git status, branches, history, commit details, and file changes.
- Run multiple native terminal sessions using Ghostty Web and `node-pty`.
- Split terminals, move them between workspaces, and recover terminated sessions.
- Configure terminal appearance, fonts, keybindings, and harness profiles.
- Discover and resume supported Claude and Codex sessions, with usage and context telemetry where available.
- Capture local diagnostic reports and monitor workbench health.

## Requirements

- Node.js 24 or newer
- npm
- A platform toolchain capable of building native Node modules (`node-pty` and `@hvir/rename-noreplace`)
- macOS or Linux

See the platform toolchain requirements for [`node-gyp`](https://github.com/nodejs/node-gyp) and Electron native module rebuilding.

SSH-backed workspaces use the host and identity configuration available through OpenSSH-compatible configuration.

## Development

Install dependencies:

```bash
npm ci
```

The install process rebuilds the native terminal runtime for the bundled Electron version.

Start the application in development mode:

```bash
npm run dev
```

Run the full verification suite:

```bash
npm run verify
```

This covers architecture policies, ADR checks, linting, TypeScript checks, and unit/integration tests. Individual commands are also available:

```bash
npm test
npm run lint
npm run typecheck
npm run format:check
```

Install the repository's Git hooks with:

```bash
npm run hooks:install
```

## Building and packaging

Create a production Electron build:

```bash
npm run build
```

Create an unpacked application for local testing:

```bash
npm run build:dir
```

Platform packages can be built on their corresponding supported platform:

```bash
# macOS Apple Silicon PKG
npm run pack:mac:arm64

# Linux DEB
npm run pack:linux:x64
npm run pack:linux:arm64
```

Release packages are written to `dist/`.

## Testing

The project uses Vitest for unit and integration tests and dedicated Electron smoke scenarios for end-to-end behavior.

```bash
npm test
npm run test:watch
npm run smoke
npm run smoke:macos
```

Run a specific smoke scenario with:

```bash
npm run smoke:scenario -- <scenario-name>
```

Electron smoke runs may require a display on Linux; CI uses `xvfb-run`.

## Project structure

- `src/main/` — Electron main process, IPC authority, filesystem, Git, SSH, PTY, diagnostics, and session services
- `src/preload/` — narrow renderer-to-main API bridge
- `src/renderer/` — React interface, terminals, viewers, workspaces, settings, and application UI
- `src/shared/` — shared contracts and domain types
- `src/workers/` — utility-process workers, including Git operations
- `packages/rename-noreplace/` — native no-replace rename helper
- `scripts/` — build, release, architecture, project-management, and acceptance tooling
- `test/` — tests and fixtures
- `build/` — packaging resources and platform installer files

The renderer intentionally does not receive unrestricted Node.js access. Privileged operations cross the preload bridge and are routed through the main process using explicit authority and confinement policies.

## Architecture checks

The repository enforces architectural boundaries and records in addition to functional tests:

```bash
npm run check-seams
npm run check-adrs
npm run architecture:check
npm run architecture:report
```

Use `npm run verify` before submitting a change to run the standard local checks together.

## License

hvir is licensed under the [MIT License](LICENSE).
