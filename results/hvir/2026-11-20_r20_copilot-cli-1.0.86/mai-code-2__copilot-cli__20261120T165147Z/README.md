# hvir

**hvir** is a desktop workbench for developing with terminals, coding agents, and local or remote projects. It combines a multi-terminal workspace, file browser and viewer, Git tools, web panes, and agent-session management in one Electron application.

## Features

- Open and switch between multiple projects and Git worktrees.
- Work on local directories or SSH hosts configured on the machine.
- Run split terminal sessions with persistent workspaces, search, recovery, and attention indicators.
- Launch a plain shell, custom command, or supported coding-agent harnesses, including Claude Code, Codex, Gemini, GitHub Copilot CLI, Cursor, and Pi.
- Browse files, search filenames, edit source, inspect diffs and Git history, and review rendered Markdown, Mermaid diagrams, images, JSON, and CSV.
- View and manage active terminal/agent sessions from a dedicated Sessions surface.
- Use project-aware web panes alongside source and terminal panes.
- Customize terminal themes, fonts, appearance, keybindings, Git behavior, and harness profiles.
- Export diagnostic evidence from the built-in workbench health tools.

Coding-agent commands must be installed and configured separately. hvir discovers and launches the selected executable; it does not bundle agent credentials or service access.

## Requirements

- **Node.js 24 or newer** and npm
- **Git** for repository and worktree features
- A supported desktop environment:
  - macOS
  - Linux
- A native build toolchain capable of building Node/Electron native modules during `npm ci` (for example, Xcode Command Line Tools on macOS or Python and a C/C++ toolchain on Linux)

Optional features require their corresponding tools and configuration, such as SSH host entries, agent CLIs, or the desired terminal shell.

## Development setup

```bash
git clone <repository-url>
cd hvir
npm ci
npm run dev
```

`npm ci` rebuilds the Electron native runtime dependencies used by terminal sessions and file operations. The development command starts Electron and the renderer with hot reload.

To select a project when launching a packaged installation, pass a directory to the installed `hvir` command:

```bash
hvir /path/to/project
```

## Common commands

```bash
npm run dev                  # Start the development application
npm run build                # Type-check and build production assets
npm run build:dir            # Build an unpacked Electron application
npm run preview              # Preview the built application
npm test                     # Run the Vitest suite
npm run lint                 # Run ESLint
npm run format:check         # Check formatting
npm run typecheck            # Check main/preload and renderer types
npm run verify               # Run architecture, policy, lint, type, and test checks
npm run smoke                # Build and run the Electron smoke scenarios
```

Platform packages can be built with:

```bash
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Package output is written to `dist/`. macOS releases use PKG packaging; Linux releases use DEB packaging.

## Project structure

```text
src/main/       Electron main process, local/SSH hosts, Git, terminals, diagnostics
src/preload/    Restricted, typed renderer IPC bridge
src/renderer/   React user interface and renderer-side workflows
src/shared/     Shared types, policies, and IPC contracts
src/workers/    Background worker entry points
scripts/        Verification, smoke, release, packaging, and maintenance tooling
test/           Unit, integration, architecture, and smoke scenario tests
packages/       Local native packages
build/          Icons and platform packaging resources
```

The preload layer is intentionally the renderer's only application IPC surface. Main-process filesystem and process access are separated behind project-host interfaces so the same workbench can operate against local and SSH-backed projects.

## Development notes

- Use `npm ci`, rather than `npm install`, for reproducible development and CI environments.
- Run `npm run verify` before submitting changes. `npm run smoke` additionally exercises the packaged Electron workflow and native terminal runtime.
- Native smoke and packaging workflows require the target operating system.
- The application enforces architecture import boundaries and automated policy checks; changes crossing process or module seams may require corresponding shared contracts and tests.
- The test suite includes local fixtures and does not require an agent account. Live SSH acceptance tests are separate and require explicitly configured hosts.

See [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) for third-party dependency notices.

## License

hvir is licensed under the [MIT License](LICENSE).
