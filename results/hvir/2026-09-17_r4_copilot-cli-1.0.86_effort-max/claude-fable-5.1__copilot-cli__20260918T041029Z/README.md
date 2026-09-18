# hvir

A desktop workbench for running AI coding agents across Git worktrees.

hvir is an Electron app for developers who drive coding agents such as Claude
Code or Codex from the terminal. It puts each project's worktrees side by side,
gives every workspace its own terminals, file tree, viewer, and Git panel, and
lets you review files and hand the comments straight back to the agent — on your
machine or over SSH.

## Features

**Projects and workspaces**

- Register a local folder or an SSH host folder as a project; hvir discovers
  its Git worktrees (`git worktree list`) and shows each one as a workspace.
- Switch between workspaces with `Mod+Alt+]` / `Mod+Alt+[`; changed-file counts
  and branch/HEAD are shown per workspace.
- Remote hosts come from `~/.ssh/config`. Host keys are shown with a
  fingerprint and must be trusted explicitly; file watching falls back to
  polling when a host cannot push change events.

**Harnesses**

- Launch an agent (or a plain shell) in a terminal with one click. Bundled
  providers:

  | Provider           | Command        | Exact resume / fork                          |
  | ------------------ | -------------- | -------------------------------------------- |
  | Claude Code        | `claude`       | Yes (`--session-id`, `--resume`, `--fork-session`; fork is version-gated) |
  | Codex              | `codex`        | Yes (`resume`, `fork`; fork is version-gated) |
  | Cursor CLI         | `cursor-agent` | No                                           |
  | Gemini CLI         | `gemini`       | No                                           |
  | GitHub Copilot CLI | `copilot`      | No                                           |
  | Pi                 | `pi`           | No                                           |
  | Shell              | login shell    | —                                            |
  | Custom             | your command   | —                                            |

- **Harness profiles** wrap a provider with a specific executable, extra
  arguments (with `projectRoot` / `workspaceRoot` / path-binding placeholders),
  environment bindings, and path grants. Profiles can be global or scoped to a
  project, and hvir shows a preview of the exact command each one will run.
- Each profile is probed before launch, so hvir can tell you when an executable
  is missing, a version is too old, or authentication is required.
- For Claude Code and Codex, hvir reads the agent's own session artifacts to
  show live **context pressure** and **usage**, and can recover sessions after
  a restart (prompt or automatic, per settings).

**Terminals**

- Terminals are rendered by [ghostty-web](https://github.com/coder/ghostty-web)
  (Ghostty's VT engine compiled to WebAssembly) on top of `node-pty`.
- Split and move terminals; search scrollback with `Mod+Shift+F`.
- Working / bell / idle attention state per terminal, with an app badge count
  for agents that need you.
- Theme catalog generated from the upstream Ghostty theme collection, with
  separate light and dark selections; cursor shape, blink, ligatures, font, and
  text size are all configurable.
- Paste a clipboard image into an agent running over SSH; hvir uploads it to the
  remote host and inserts the path.

**Viewer and document review**

- Open files from the tree (`Mod+P` to find by name) in rendered, source, or
  diff mode. Rendered mode supports Markdown (with task lists and Mermaid),
  Mermaid, HTML preview, JSON, YAML, CSV, and images; source mode uses Shiki
  highlighting and CodeMirror.
- Diff against the working tree, `HEAD`, or the branch point.
- **Document review**: leave comments on a file, then deliver the batch to the
  running agent — inserted into its composer, or sent immediately where the
  provider supports it.

**Git**

- Working-tree and staged changes, file history, branch switching, fetch, and
  pull, with configurable auto-fetch.
- Commit graph view.

**Web pane**

- Embed a loopback (`localhost`) dev server next to your terminals, with
  navigation, request, console, and crash diagnostics surfaced in the app.

**Sessions dashboard and health**

- A cross-workspace view of every live agent session, its provider, context
  pressure, and usage.
- Built-in diagnostics reports and workbench health checks.

## Supported platforms

- macOS (Apple silicon) — `.pkg` installer
- Linux x64 and arm64 (glibc ≥ 2.35, e.g. Ubuntu 22.04+) — `.deb` package with
  an AppArmor profile

Windows is not supported.

## Install

Every release on [GitHub Releases](https://github.com/jarmak-personal/hvir/releases)
ships:

- `hvir-<version>-macos-arm64.pkg`
- `hvir-<version>-linux-x64.deb` and `hvir-<version>-linux-arm64.deb`
- `install.sh` — detects your platform, downloads the matching package, verifies
  its SHA-256, and installs or updates it. `install.sh --uninstall` removes the
  app while keeping your settings; add `--purge` to remove those too.

Each package also installs an `hvir` command:

```sh
hvir            # launch
hvir ~/src/app  # launch with that folder opened as a project
```

The `HVIR_PROJECT_ROOT` environment variable does the same as the path argument.

## Development

### Prerequisites

- Node.js 24 or newer
- A C toolchain for native modules (`node-pty` and hvir's own
  `rename-noreplace` binding): Xcode Command Line Tools on macOS, or
  `build-essential` plus Python on Linux
- The agent CLIs you want to use (`claude`, `codex`, …) on your `PATH`

### Setup

```sh
npm ci          # installs Electron and rebuilds native modules for its ABI
npm run dev     # electron-vite dev server with hot reload
```

`npm run dev` and `npm run build` first verify that the installed `ghostty-web`
matches the version this checkout was reviewed against; if it does not, rerun
`npm ci`.

### Everyday commands

| Command                    | What it does                                                     |
| -------------------------- | ---------------------------------------------------------------- |
| `npm test`                 | Vitest unit tests (`npm run test:watch` to watch)                |
| `npm run typecheck`        | `tsc --noEmit` for the Node (main/preload) and web (renderer) projects |
| `npm run lint`             | ESLint                                                           |
| `npm run format`           | Prettier (`format:check` to verify only)                         |
| `npm run verify`           | The CI gate: seams, ADRs, architecture policy, lint, typecheck, tests |
| `npm run smoke`            | Builds a smoke bundle and drives the real Electron app through end-to-end scenarios |
| `npm run smoke:scenario -- <name>` | Run a single smoke scenario                             |
| `npm run test:mutation`    | Stryker mutation testing                                         |
| `npm run hooks:install`    | Installs the `pre-push` hook (typecheck + local smoke)          |

On Linux without a display, run smoke tests under `xvfb-run -a`.

### Packaging

```sh
npm run pack:mac:arm64     # dist/hvir-<version>-macos-arm64.pkg
npm run pack:linux:x64     # dist/hvir_<version>_amd64.deb
npm run pack:linux:arm64   # dist/hvir_<version>_arm64.deb
```

Packaged builds can be exercised with `npm run smoke:macos:installed` and
`npm run smoke:linux:installed`.

## Project layout

```
src/main/       Electron main process: project hosts (local + SSH), PTY supervisor,
                harness providers and profiles, Git, sessions, document review, IPC
src/preload/    Context-isolated bridge exposed to the renderer as window.hvir
src/renderer/   React UI: workbench layout, terminals, viewer, Git panel, settings
src/shared/     Serializable contracts shared across the main/renderer boundary
src/workers/    Worker-thread hosts (Git)
packages/       @hvir/rename-noreplace — Node-API binding for atomic no-replace rename
scripts/        Build, smoke, release, architecture-policy, and project-management tooling
test/           Vitest suites
build/          Icons, entitlements, Linux packaging assets, the `hvir` launcher script
```

## Settings and keybindings

Settings live in the app (interface and monospace fonts, interface scale,
terminal theme and cursor, Git auto-fetch interval, idle threshold, terminal
recovery mode, composer submit key) and are stored per user. Default
keybindings (`Mod` is `⌘` on macOS and `Ctrl` on Linux):

| Action                    | Default        |
| ------------------------- | -------------- |
| Find file                 | `Mod+P`        |
| Find in file              | `Mod+F`        |
| Find in terminal          | `Mod+Shift+F`  |
| Go to line                | `Ctrl+G`       |
| Cycle view mode           | `Mod+Shift+M`  |
| Focus terminal            | `Mod+J`        |
| Toggle terminal focus     | `Mod+Shift+J`  |
| Focus viewer              | `Mod+1`        |
| Focus file tree           | `Mod+0`        |
| Next / previous workspace | `Mod+Alt+]` / `Mod+Alt+[` |

All of them can be rebound in Settings.

## License

MIT — see [LICENSE](LICENSE). Bundled third-party licenses are listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
