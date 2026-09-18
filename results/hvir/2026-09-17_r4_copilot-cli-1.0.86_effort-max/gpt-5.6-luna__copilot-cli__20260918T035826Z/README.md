# hvir

hvir is an Electron desktop development workbench for working across local
projects and SSH-connected hosts. It brings project workspaces, persistent
terminals, file browsing and editing, Git history, and web-based review tools
into one application.

## Features

- Manage multiple projects and workspaces, including local folders and remote
  SSH hosts.
- Run persistent terminal sessions in resizable layouts with terminal themes,
  clipboard/file paste, and attention indicators.
- Browse, edit, search, and review project files with syntax highlighting,
  Markdown, Mermaid diagrams, and diff views.
- Inspect Git changes and history, open the commit graph, switch branches, and
  fetch or pull from the configured remote.
- Open project web panes alongside terminal and file views.
- Discover and reopen sessions from the dedicated Sessions view.
- Use built-in harness profiles for Claude Code and Codex, or configure a
  shell/custom command profile.
- Capture runtime diagnostics and workbench health evidence when troubleshooting.

## Requirements

- Node.js 24 or newer
- npm
- A local Git installation for Git features
- An SSH host and credentials when using remote projects
- Claude Code or Codex installed and available on `PATH` when using those
  harness integrations

The release configuration currently produces macOS and Linux packages:
macOS `pkg` artifacts and Linux `deb` artifacts for x64 and arm64.

## Getting started

From a checkout of this repository:

```sh
npm ci
npm run dev
```

`npm ci` also runs the repository post-install step. That step installs the
Electron runtime and rebuilds the native terminal and file-operation modules
for the installed Electron version. The development preflight checks that the
reviewed `ghostty-web` terminal runtime is installed; if it reports a
dependency mismatch, run `npm ci` again in the worktree.

When hvir opens, add or select a project in the Projects bar. Select a
workspace to work with its files, terminal sessions, Git state, and web panes.
Use the Sessions destination to find sessions that can be reopened across
workspaces.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron development application. |
| `npm run build` | Type-check and create a production application build. |
| `npm run build:dir` | Build and create an unpacked Electron application in `dist/`. |
| `npm run preview` | Preview the built application with Electron Vite. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Type-check the Node and renderer projects. |
| `npm test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run format:check` | Check Prettier formatting. |
| `npm run format` | Format the repository with Prettier. |
| `npm run verify` | Run policy checks, linting, type-checking, and tests. |

The Electron smoke suite exercises the built application and its native
terminal workflow:

```sh
npm run smoke
npm run smoke:macos
npm run smoke:isolation
```

Some smoke and acceptance commands require a graphical desktop session or
additional host credentials. CI supplies those prerequisites where needed.

## Packaging

Build packages locally with the platform-specific commands below:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Artifacts are written to `dist/`. Signed macOS packaging is available through
`npm run pack:mac:arm64:signed` when the required signing environment is
configured.

## Project layout

```text
src/main/       Electron main-process services, IPC, Git, SSH, PTY, and workers
src/preload/    Typed, restricted renderer bridge
src/renderer/   React workbench UI
src/shared/     Shared types, contracts, and protocol definitions
src/workers/    Utility-process worker entry points
packages/       Local native packages used by the application
scripts/        Smoke, architecture, release, and project-management tooling
test/           Vitest unit and integration tests
```

## Contributing

Install the repository hooks once if you want the local pre-push checks:

```sh
npm run hooks:install
```

Before opening a change, run `npm run verify` and the focused smoke command
for any Electron or native-runtime behavior you modify. Keep generated build
output and local dependencies out of commits; they are covered by the
repository's `.gitignore`.

## License

hvir is released under the MIT License. See [LICENSE](LICENSE). Bundled
third-party software and related notices are documented in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
