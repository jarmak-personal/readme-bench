# hvir

hvir is a lightweight, view-first desktop workbench for agentic development. It
keeps project files, Git activity, terminals, agent harnesses, and supporting
web views in one Electron application.

## Features

- Open local projects or connect to projects over SSH.
- Browse, edit, preview, and compare files, including Markdown and rendered
  diagrams.
- Run persistent terminal sessions with configurable terminal themes and split
  layouts.
- Configure and launch agent harness profiles, with session recovery and a
  dedicated sessions view.
- Inspect Git status, history, branches, diffs, worktrees, and synchronization
  status from the workspace.
- Review documents inline and deliver review feedback.
- Open project-scoped web panes and capture diagnostic reports when the
  workbench needs investigation.

## Requirements

- Node.js 24 or newer
- npm
- Git, for the Git workspace features
- A supported desktop platform: macOS or Linux
- Native build tools required by `node-gyp`, because hvir rebuilds `node-pty`
  and its local native module during installation

On Linux, Electron also needs its usual desktop runtime libraries. The produced
Debian package declares its required runtime dependencies.

## Getting started

```bash
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm install
npm run dev
```

`npm install` downloads Electron and rebuilds the native terminal dependencies
for Electron's ABI. When hvir opens, choose a project folder, or supply one
when launching the app from a built build.

Remote projects use SSH. hvir prompts for connection details as needed and
records trusted host information in its application data; use standard SSH
configuration and credentials for host access.

## Development

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start hvir in development mode. |
| `npm run build` | Type-check and build the Electron application. |
| `npm run preview` | Preview the built application. |
| `npm test` | Run the Vitest test suite. |
| `npm run lint` | Lint the repository. |
| `npm run typecheck` | Type-check the main and renderer processes. |
| `npm run verify` | Run architecture checks, linting, type-checking, and tests. |
| `npm run smoke` | Build and run the cross-platform Electron smoke scenarios. |
| `npm run format:check` | Check Prettier formatting. |

Install the repository's pre-push hook with:

```bash
npm run hooks:install
```

The hook runs TypeScript checks and platform-appropriate Electron smoke tests.
On headless Linux, it requires `xvfb-run` unless a display is already available.

## Packaging

```bash
# macOS Apple Silicon package
npm run pack:mac:arm64

# Linux Debian packages
npm run pack:linux:x64
npm run pack:linux:arm64
```

Build artifacts are written to `dist/`. The macOS packaging commands are
intended to run on macOS; the Linux commands produce `.deb` packages.

## Architecture

hvir uses Electron with a TypeScript main process, React renderer, Electron
Vite build pipeline, and native terminal integration through `node-pty`.
The source is organized as follows:

- `src/main/` contains application runtime, project/SSH access, Git, terminal,
  diagnostics, and IPC services.
- `src/preload/` exposes the constrained renderer API.
- `src/renderer/` contains the React workbench UI.
- `src/shared/` contains cross-process contracts and domain types.
- `src/workers/` contains utility-process workers.
- `test/` contains unit and integration-oriented tests.

## License

This project is licensed under the [MIT License](LICENSE).
