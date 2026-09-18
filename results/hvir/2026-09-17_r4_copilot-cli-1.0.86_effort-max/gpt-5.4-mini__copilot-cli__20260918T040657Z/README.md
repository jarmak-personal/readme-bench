# hvir

hvir is a terminal-centric Electron workbench for local and SSH-backed software projects. It combines project and workspace management, native terminal sessions, file viewing/editing, Git tools, web panes, sessions history, document review, and configurable harness profiles in one desktop app.

## What it includes

- **Projects and workspaces** - open a local folder or connect to an SSH host, then switch between workspaces from the project bar.
- **Terminal workspaces** - launch and recover terminal sessions, track attention, move terminals between workspaces, and configure terminal settings and themes.
- **File viewing** - browse files in source, diff, rendered, and large-file modes with search, blame, and navigation support.
- **Git tools** - inspect changes, open a Git graph, switch branches, fetch, pull, and follow worktree state.
- **Web panes** - open browser-like panes tied to a workspace for embedded web content.
- **Sessions view** - review terminal sessions separately from the main workbench.
- **Document review** - surface review-oriented interactions alongside files and terminal sessions.
- **Harness profiles** - configure agent and shell providers for workflows such as CLI-based assistants and custom shells.

## Requirements

- Node.js 24 or newer
- Native build tooling for the Electron/native-module install step
- macOS or Linux for the packaged targets currently defined in this repository

`npm install` runs the native runtime setup automatically, including Electron installation and rebuilds for the native modules used by the app.

## Getting started

```bash
npm install
npm run dev
```

On first launch, hvir prompts you to choose a project folder unless you provide one explicitly.

To open a specific root:

```bash
npm run dev -- --project-root=/path/to/project
# or
HVIR_PROJECT_ROOT=/path/to/project npm run dev
```

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm run build` | Type-check and produce a production Electron build |
| `npm run preview` | Preview the production renderer locally |
| `npm run lint` | Run ESLint across the repo |
| `npm run typecheck` | Run the Node and web TypeScript checks |
| `npm run test` | Run the Vitest suite once |
| `npm run verify` | Run the repo-level validation pipeline |
| `npm run smoke` | Run the smoke scenarios against the smoke build |
| `npm run build:dir` | Create an unpacked Electron build directory |
| `npm run pack:mac:arm64` | Build a macOS `.pkg` artifact for arm64 |
| `npm run pack:linux:x64` | Build a Linux `deb` artifact for x64 |
| `npm run pack:linux:arm64` | Build a Linux `deb` artifact for arm64 |

## Repository layout

| Path | Purpose |
| --- | --- |
| `src/main` | Electron main process: project/workspace orchestration, SSH, PTY, Git, sessions, diagnostics |
| `src/preload` | Typed `window.hvir` bridge exposed to the renderer |
| `src/renderer` | React UI for the workbench, terminal, viewer, Git, sessions, and settings |
| `src/shared` | Shared types, contracts, and protocol definitions |
| `src/workers` | Utility-process workers used by the main process |
| `packages/rename-noreplace` | Native addon used during packaging/install |

## Notes

- Startup behavior is driven by `--project-root=<path>` or `HVIR_PROJECT_ROOT`.
- The main app keeps one project active at a time, but can manage multiple projects, workspaces, and SSH connections.
- Third-party notices are collected in `THIRD_PARTY_NOTICES.md`.

## License

MIT
