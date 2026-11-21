# hvir

hvir is an Electron-based desktop workbench for working with local and remote projects. It combines an integrated terminal, file browser, source and diff viewer, Git tools, web panes, and AI harness profiles in one workspace.

## Features

- **Project workspaces** — open local folders or connect to remote hosts over SSH.
- **Integrated terminal** — split terminal surfaces, session management, recovery, themes, and launch profiles.
- **File and project tree** — browse, create, move, copy, rename, and delete project files.
- **Code and document viewer** — syntax-highlighted source, diffs, Markdown rendering, diagrams, CSV, JSON, and image views.
- **Git workflow** — working-tree changes, commit history, graphs, diffs, and commit operations.
- **Web panes** — open web views inside the workbench with browser handoff.
- **Harness profiles** — configure and launch terminal-based AI command environments.
- **Document review** — capture and organize review feedback alongside project documents.
- **Cross-platform desktop support** — macOS and Linux packaging targets.

## Requirements

- Node.js 24 or newer
- npm
- Native build prerequisites for Electron, `node-pty`, and `node-gyp`
- macOS or Linux for the supported desktop and packaging workflows

## Getting started

Install dependencies and rebuild the project's native Electron runtime pieces:

```bash
npm ci
```

Start the desktop application in development mode:

```bash
npm run dev
```

> `npm ci` runs the hvir runtime installation step, including Electron rebuild and native dependency setup.

## Building

Type-check and produce the application bundle:

```bash
npm run build
```

Create a packaged directory without installers:

```bash
npm run build:dir
```

Platform-specific package scripts:

```bash
npm run pack:mac:arm64       # macOS arm64 PKG
npm run pack:linux:x64       # Linux x64 DEB
npm run pack:linux:arm64     # Linux arm64 DEB
```

Signed macOS builds use:

```bash
npm run pack:mac:arm64:signed
```

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Electron with hot reload |
| `npm run typecheck` | Type-check the main and renderer processes |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm test` | Run the Vitest suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run verify` | Run architecture, lint, type, and test verification |
| `npm run smoke` | Build and run the full smoke scenario suite |
| `npm run architecture:check` | Enforce architecture hotspot limits |
| `npm run check-seams` | Check application boundary contracts |

Run smoke scenarios after a build is useful for exercising desktop behavior, native terminal handling, Git flows, SSH workspaces, and renderer recovery:

```bash
npm run smoke
```

## Project structure

```text
src/main/       Electron main process, IPC, project sessions, Git, PTY, SSH
src/preload/    Typed preload bridge exposed to the renderer
src/renderer/   React workbench UI
src/shared/     Types and utilities shared across process boundaries
src/workers/    Renderer worker entry points
packages/       Native addon and small supporting packages
scripts/        Builds, verification, smoke tests, and project tooling
test/           Test fixtures and integration support
```

## Contributing

1. Install dependencies with `npm ci`.
2. Install repository hooks if desired:

   ```bash
   npm run hooks:install
   ```

3. Make changes and run the relevant checks:

   ```bash
   npm run verify
   npm run smoke
   ```

## License

MIT — see [LICENSE](LICENSE).

Third-party notices are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
