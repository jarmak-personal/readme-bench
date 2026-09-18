# hvir

A lightweight, view-first workbench for agentic development.

hvir is an Electron desktop app that puts a file viewer, a Git workspace, and
one or more terminals side by side so you can watch what a coding agent is
doing while it works. Launch Claude Code, Codex, GitHub Copilot CLI, Gemini
CLI, Cursor CLI, Pi, or a plain shell in a terminal pane, then read, diff, and
review the files it touches without leaving the window.

## Features

- **View-first layout** – a project tree, a document viewer, and terminal
  panes in a single workbench, with keyboard-driven focus switching.
- **Agent harness profiles** – bundled launch profiles for popular coding
  agents (Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi)
  plus a plain shell. hvir probes the installed CLI, tracks session identity
  for resume/fork where supported, and shows context-window pressure.
- **Rich viewer** – syntax-highlighted code (Shiki/CodeMirror), rendered
  Markdown with Mermaid diagrams and task lists, CSV tables, HTML preview in a
  sandbox, and side-by-side diffs.
- **Document review** – select passages in a rendered document, annotate them,
  and send the review back into the agent's terminal.
- **Git workspace** – status, diffs, and file-tree Git decorations that refresh
  as the working tree changes.
- **Remote projects over SSH** – open a project on a remote host using your
  `~/.ssh/config`; file browsing, terminals, and Git all run against the host.
- **Web pane** – embed a local dev server through a loopback proxy next to
  your terminals.
- **Terminal built on ghostty-web** – GPU-friendly rendering, search,
  synchronized output, image paste, and per-terminal themes.
- **Multiple workspaces** – keep several project workspaces open and cycle
  between them.

## Default keybindings

| Action                    | Shortcut          |
| ------------------------- | ----------------- |
| Find file                 | `Mod+P`           |
| Find in file              | `Mod+F`           |
| Find in terminal          | `Mod+Shift+F`     |
| Go to line                | `Ctrl+G`          |
| Cycle view mode           | `Mod+Shift+M`     |
| Focus terminal            | `Mod+J`           |
| Toggle terminal focus     | `Mod+Shift+J`     |
| Focus viewer              | `Mod+1`           |
| Focus tree                | `Mod+0`           |
| Next / previous workspace | `Mod+Alt+]` / `[` |

`Mod` is `Cmd` on macOS and `Ctrl` on Linux. Keybindings are configurable in
the app settings.

## Installation

Prebuilt packages are published on the
[releases page](https://github.com/jarmak-personal/hvir/releases):

- **macOS (Apple Silicon)** – `hvir-<version>-macos-arm64.pkg`, installs to
  `/Applications`.
- **Linux (x64, arm64)** – `hvir-<version>-linux-<arch>.deb`.

Both installers add an `hvir` command to your `PATH`. Run `hvir` to open the
app or `hvir <path>` to open a project directory directly.

## Development

### Prerequisites

- Node.js ≥ 24
- A C/C++ toolchain for native modules (`node-pty` and the bundled
  `@hvir/rename-noreplace` addon): Xcode Command Line Tools on macOS, or
  `build-essential` and Python on Linux.

### Setup

```sh
npm ci            # installs deps and rebuilds native modules for Electron
npm run dev       # start the app with hot reload
```

`npm ci` runs a `postinstall` step that downloads Electron and rebuilds native
modules against its ABI. If the app refuses to start with a terminal runtime
error, re-run `npm ci`.

### Common scripts

| Command                   | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `npm run dev`             | Run the app in development mode                                         |
| `npm run build`           | Typecheck and build to `out/`                                           |
| `npm test`                | Run the Vitest unit suite                                               |
| `npm run typecheck`       | Typecheck main/preload and renderer projects                            |
| `npm run lint`            | ESLint                                                                  |
| `npm run format`          | Prettier                                                                |
| `npm run verify`          | Full CI gate: seams, ADRs, architecture, lint, typecheck, tests         |
| `npm run smoke`           | Build the smoke bundle and run end-to-end Electron scenarios            |
| `npm run pack:mac:arm64`  | Build a macOS `.pkg`                                                    |
| `npm run pack:linux:x64`  | Build a Linux `.deb` (also `pack:linux:arm64`)                          |
| `npm run hooks:install`   | Install the `pre-push` hook (typecheck + local smoke run)               |

### Project layout

```
src/
  main/       Electron main process: PTY, Git, SSH, harness, viewer, IPC
  preload/    Context-isolated bridge exposed to the renderer
  renderer/   React UI (workbench, tree, viewer, terminal, document review)
  shared/     Types and contracts shared across the process boundary
  workers/    Worker-thread hosts for heavy work
packages/
  rename-noreplace/  Small native addon for atomic no-clobber renames
scripts/      Build, packaging, smoke, release, and architecture tooling
test/         Vitest unit and contract tests
build/        Icons, entitlements, installer scripts, native launcher
```

### Architecture checks

The repository enforces module boundaries and records design decisions as
ADRs. `npm run check-seams`, `npm run check-adrs`, and
`npm run architecture:check` run as part of `npm run verify` and in CI.

## Contributing

Pull requests are welcome. Before pushing, run `npm run verify` and, if you
touched runtime behaviour, `npm run smoke` (or install the pre-push hook with
`npm run hooks:install`). Bug reports and feature requests go to the
[issue tracker](https://github.com/jarmak-personal/hvir/issues).

## License

MIT – see [LICENSE](LICENSE). Bundled third-party software is listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
