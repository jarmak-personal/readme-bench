# hvir

A desktop workbench for coding agents. hvir puts agent terminals, a file tree, a
file viewer/diff pane, and Git tooling in one window, so several agent sessions
can run side by side against local or remote projects.

hvir is an Electron application written in TypeScript, with a React renderer and
a Ghostty-based terminal.

## Features

- **Agent harnesses** — launch and resume sessions for Claude Code, Codex,
  Cursor, Gemini, GitHub Copilot CLI, Pi, or a plain shell. Providers are probed
  for availability, and profiles (command, arguments, environment) are editable
  in Settings.
- **Terminal workbench** — split, move, and cycle terminals across workspaces,
  with terminal search, selectable themes, attention badges, and clipboard image
  and file-path pasting.
- **Sessions overview** — a projection of running and past agent sessions with
  per-session detail, context telemetry, and usage reporting.
- **Viewer** — tabbed viewing of source, Markdown (including Mermaid diagrams
  and task lists), CSV, and images, with syntax highlighting, find, go-to-line,
  and diffs against a chosen base.
- **Document review** — capture inline comments against a rendered document and
  deliver them as a batch into an agent terminal.
- **Git** — status and changes panel, commit graph, branch switching, fetch and
  pull, plus worktree management for parallel workspaces.
- **Remote projects** — open projects over SSH using your existing `ssh_config`,
  with host trust prompts, remote file watching, and file transfer.
- **Web panes** — embedded browser panes alongside terminals for dashboards and
  docs.

## Requirements

- macOS or Linux (x64 or arm64)
- Node.js 24 or newer
- A C/C++ toolchain: `postinstall` rebuilds `node-pty` and the bundled
  `@hvir/rename-noreplace` native module against Electron's ABI

## Getting started

```sh
npm ci      # installs dependencies and rebuilds native modules
npm run dev # launch the app with electron-vite in watch mode
```

## Building and packaging

```sh
npm run build            # typecheck, then build main/preload/renderer bundles
npm run build:dir        # unpacked application directory
npm run pack:mac:arm64   # macOS .pkg installer
npm run pack:linux:x64   # Debian package (also: pack:linux:arm64)
```

Installed packages also provide an `hvir` command that opens the current
directory as a project.

## Development

| Command | Purpose |
| --- | --- |
| `npm test` | Vitest unit and integration suites (`npm run test:watch` to iterate) |
| `npm run typecheck` | TypeScript project checks for the node and web configs |
| `npm run lint` | ESLint across the repository |
| `npm run format` | Prettier formatting (`format:check` to verify only) |
| `npm run verify` | Full gate: seams, ADRs, architecture, lint, typecheck, tests |
| `npm run smoke` | Build a smoke bundle and run the end-to-end scenarios |
| `npm run test:mutation` | Stryker mutation testing |

Run `npm run verify` before opening a pull request; CI runs the same checks plus
platform smoke suites.

Architectural boundaries are enforced mechanically. `npm run check-seams` and the
ESLint rules keep main, preload, renderer, and shared code from reaching across
their seams (for example, `ipcRenderer` stays in the preload bridge), and
`npm run check-adrs` validates the architecture decision records in `docs/`. Install the
repository Git hooks with `npm run hooks:install`.

## Repository layout

```
src/main/       Electron main process: IPC, PTY, Git, SSH hosts, harnesses
src/preload/    Context-isolated bridge exposed to the renderer
src/renderer/   React UI: workbench, terminals, viewer, Git, sessions, settings
src/shared/     Contracts and types shared across processes
src/workers/    Background workers hosted by the main process (Git, echo)
packages/       Bundled native helper modules
scripts/        Build, verification, smoke, and project-management tooling
test/           Vitest suites and fixtures
```

## License

MIT — see [LICENSE](LICENSE). Third-party attributions are listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
