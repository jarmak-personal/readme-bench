# hvir

hvir is a desktop workbench for software development with terminals and coding agents.
Built with Electron, React, and TypeScript, it brings local and SSH-backed projects,
agent sessions, file editing, and Git inspection into one workspace.

## Features

- **Projects and workspaces:** Open local folders or remote projects over SSH, manage
  multiple projects, and switch between discovered Git worktrees.
- **Coding-agent harnesses:** Built-in providers for Claude Code, Codex, Pi, Gemini CLI,
  GitHub Copilot CLI, and Cursor CLI, alongside a plain shell and custom commands.
  Configure reusable profiles and browse supported provider histories in the Sessions
  view. History, resume, and other capabilities vary by provider.
- **Terminals:** Ghostty-powered PTY terminals with split panes, workspace-specific
  layouts, configurable typography, and light/dark terminal themes.
- **Files and previews:** Browse and edit source files, inspect diffs, and render
  Markdown, Mermaid diagrams, HTML, images, CSV, JSON, and YAML.
- **Git inspection:** Explore working-tree changes, commit history, blame, and a commit
  graph; switch branches, fetch, and pull from the workbench.
- **Review and web panes:** Annotate documents for agent feedback and open development
  URLs in embedded web panes.

## Install

Download the appropriate native package from
[GitHub Releases](https://github.com/jarmak-personal/hvir/releases).

| Platform | Architecture | Package |
| --- | --- | --- |
| macOS | Apple silicon (arm64) | `.pkg` |
| Linux, Debian/Ubuntu-compatible | x64 | `.deb` |
| Linux, Debian/Ubuntu-compatible | arm64 | `.deb` |

The Linux package requires glibc 2.35 or newer and the `libstdc++6` package at version 12
or newer. Other desktop dependencies are declared in the package.

Native packages install the desktop application and an `hvir` command. Launch the app
from your desktop, or open a local project from a terminal:

```sh
hvir .
```

Coding-agent CLIs are **not bundled**. Install and authenticate the agents you want to
use on the host where they will run. Git must also be available on that host for Git
features.

## Run from source

### Requirements

- macOS or Linux.
- Node.js **24 or newer** and npm.
- Git.
- Python 3 and a native C/C++ build toolchain for the native modules: Xcode Command Line
  Tools on macOS, or tools such as `make` and `g++` on Linux.
- On Linux, the system libraries needed to run Electron in a desktop session.

### Development setup

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

Run subsequent npm commands from the repository root. Installation downloads Electron,
builds the native file-operation binding, and rebuilds `node-pty` for Electron's ABI.
Do not skip npm lifecycle scripts.

If native modules need rebuilding after a runtime change, run:

```sh
npm run install:runtime
```

If startup reports a terminal-runtime capability mismatch, restore the lockfile-pinned
dependencies with `npm ci`.

## Getting started

1. On first launch, choose a local project folder. A folder does not have to be a Git
   repository; Git tools are available when it is.
2. Use the project bar to add more projects and switch between their workspaces. For
   remote projects, define a host alias in `~/.ssh/config`, then select that host in the
   project picker and choose a remote folder.
3. Open **Settings > Harnesses** to configure agent profiles, commands, arguments, and
   project-specific or global defaults. Start a terminal with the desired profile.
4. Use **Files** and **Git** to inspect your project alongside its terminals. Open
   **Sessions** to browse histories supported by the installed providers.

Settings also provides appearance, terminal, Git, and keybinding preferences. Project
registrations, harness profiles, and terminal recovery records are stored in Electron's
application user-data directory.

**Environment values:** Literal values in harness profiles are stored and displayed as
plaintext. Use reference-sourced environment bindings rather than literals for secrets;
only reference-sourced values are redacted.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Electron with the development renderer. |
| `npm run build` | Type-check and build the application into `out/`. |
| `npm run preview` | Launch the previously built application. |
| `npm test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run typecheck` | Check main/preload and renderer TypeScript. |
| `npm run lint` | Run ESLint. |
| `npm run format:check` | Check formatting with Prettier. |
| `npm run architecture:report` | Inspect architecture budgets and dependencies offline. |
| `npm run verify` | Run seam, ADR, architecture, lint, type, and test checks. |
| `npm run smoke` | Build and run the Electron smoke scenarios. |

Full `verify` includes GitHub-backed architecture provenance checks. These require the
canonical repository origin and Git history, plus an `HVIR_REPO_TOKEN` with access to
repository, issue, pull-request, and Actions evidence. Use `architecture:report` for
offline architecture inspection.

Electron smoke scenarios need a graphical session. On headless Linux with Xvfb installed:

```sh
xvfb-run -a npm run smoke
```

For the focused macOS smoke suite, use `npm run smoke:macos`. To run an individual
scenario, use `npm run smoke:scenario -- <scenario>`; scenario names are listed in the
`smoke` script in [package.json](package.json).

## Build native packages

Run packaging on the matching operating system and CPU architecture so the native
modules match the target.

| Command | Output |
| --- | --- |
| `npm run build:dir` | Unpacked application for the current platform. |
| `npm run pack:mac:arm64` | macOS Apple silicon `.pkg`. |
| `npm run pack:linux:x64` | Linux x64 `.deb`. |
| `npm run pack:linux:arm64` | Linux arm64 `.deb`. |

Package artifacts are written to `dist/`. Packaging configuration is in
[electron-builder.yml](electron-builder.yml); release and package-acceptance automation
is in [.github/workflows](.github/workflows).

## Project layout

| Path | Responsibility |
| --- | --- |
| `src/main/` | Electron lifecycle, local/SSH hosts, terminals, harnesses, and application services. |
| `src/preload/` | Renderer-to-main IPC bridge. |
| `src/renderer/` | React workbench, terminals, viewers, Git tools, and settings. |
| `src/shared/` | Shared types, models, and IPC contracts. |
| `src/workers/` | Background utility-process workers. |
| `packages/rename-noreplace/` | Native atomic no-replace rename binding. |
| `test/` | Automated tests. |
| `scripts/` | Verification, smoke, maintenance, and release tooling. |
| `build/` | Icons, entitlements, and native package resources. |

## License

hvir is licensed under the [MIT License](LICENSE). Bundled third-party components retain
their own licenses; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
