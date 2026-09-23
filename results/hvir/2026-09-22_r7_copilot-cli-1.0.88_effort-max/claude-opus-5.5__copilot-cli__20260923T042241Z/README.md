<p align="center">
  <img src="build/icons-linux/256x256.png" width="96" height="96" alt="hvir icon">
</p>

<h1 align="center">hvir</h1>

<p align="center"><strong>A desktop workbench for terminal coding agents.</strong></p>

hvir runs coding agents such as Claude Code and Codex in real terminals, alongside the
things you keep checking while they work: the project's files, its Git changes and
history, a viewer that renders Markdown, diagrams, HTML, and data files, line-anchored
review comments you can hand back to an agent, and a web pane for the dev server the agent
just started. Projects can live on your machine or on any host in your `~/.ssh/config`.

hvir is an Electron app for Apple-silicon Macs and 64-bit Linux. It is pre-1.0 software
under active development.

## Contents

- [Features](#features)
- [Install](#install)
- [Getting started](#getting-started)
- [Agent harnesses](#agent-harnesses)
- [Remote projects over SSH](#remote-projects-over-ssh)
- [Settings and keyboard shortcuts](#settings-and-keyboard-shortcuts)
- [Where hvir keeps data](#where-hvir-keeps-data)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Architecture](#architecture)
- [Releases](#releases)
- [Contributing](#contributing)
- [License](#license)

## Features

**Agent terminals**

- Real PTYs rendered with the Ghostty terminal core (through a fork of ghostty-web), with
  split terminals, terminal search, and a rail that lists every terminal in the workspace.
- Launch Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi, a login
  shell, or your own command. hvir runs the agent CLIs you already have installed; it does
  not install or update them.
- When hvir starts again it can reopen your terminals, either automatically or after
  asking. Claude Code and Codex terminals resume the exact conversation they were running.
- Fork a Claude Code or Codex conversation into a new terminal, and see a context-window
  meter and usage for both (fork requires a CLI version that supports it).
- File paths printed in a terminal, including `path:line:column`, open in the viewer, and
  `localhost` URLs open in the web pane.
- Paste clipboard images into Claude Code or Codex, even when the agent runs on an SSH
  host.
- Move a live terminal to another worktree without restarting its process.
- Attention markers and an app badge when a terminal goes quiet after producing output,
  plus a **Sessions** overview of every terminal across all projects.

**Projects, files, and viewer**

- Register several projects. Each Git worktree is a workspace you can switch between, and
  worktrees created outside hvir (for example by an agent running `git worktree add`) are
  discovered automatically.
- File tree with Git status, filename search, drag and drop, and create, rename, move, and
  delete (to the Trash where available).
- Viewer tabs with a side-by-side split. Rendered views for Markdown (including Mermaid
  diagrams and task lists), Mermaid files (`.mmd`), sandboxed HTML previews, JSON, YAML,
  CSV, and images.
- Source view with syntax highlighting, find, go to line, a Git blame gutter, and editing
  (<kbd>Mod</kbd>+<kbd>S</kbd> saves).
- Diff view with three bases: `Index → Working tree`, `HEAD → Working tree`, and
  `Branch point → HEAD`.

**Git**

- Changes, per-file diffs, a history graph with commit details, and blame.
- Branch switching, fetch, fast-forward-only pull, and optional auto-fetch.
- Staging, committing, and pushing are left to you and your agents.

**Review and preview**

- **Document review:** comment on lines of a rendered or source document. Drafts survive
  restarts, comments follow their text as the document changes, and hvir flags comments it
  can no longer place. When you are done, copy the review, insert it into a Claude Code or
  Codex prompt without submitting it, or send it to Codex directly.
- **Web pane:** browse `localhost`, `127.0.0.1`, and `[::1]` pages from the project's host
  through an authenticated per-pane proxy. For SSH projects the traffic is tunneled to the
  remote host's loopback interface, so you do not need to set up port forwarding.

**Remote hosts and diagnostics**

- Open projects on SSH hosts. Terminals, file operations, Git, and agent detection all run
  on the remote machine.
- A **Workbench health** indicator collects local faults and can produce a bounded
  diagnostic report, with an optional masked screenshot, that you review before copying or
  saving it.

## Install

### Supported platforms

| Platform               | Package | Notes                                            |
| ---------------------- | ------- | ------------------------------------------------ |
| macOS on Apple silicon | `.pkg`  | Signed with a Developer ID and notarized         |
| Linux x64 and arm64    | `.deb`  | apt-based distributions with glibc 2.35 or newer |

Linux packages are tested on Ubuntu 22.04, Ubuntu 24.04, and Debian 13. Intel Macs and
Windows are not supported.

### Install with the installer script

Download `install.sh` from the latest release and run it:

```sh
curl -fsSLO https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer uses `sudo`. It picks the package for your machine, checks its SHA-256
digest, and installs it with the system package manager:

- **macOS:** verifies the package signature, notarization ticket, and Gatekeeper
  assessment, then installs `/Applications/hvir.app` and the `/usr/local/bin/hvir`
  command.
- **Linux:** checks the glibc version and that apt can resolve the package's
  dependencies, then installs hvir to `/opt/hvir` with the `/usr/bin/hvir` command. On
  hosts that restrict unprivileged user namespaces (such as Ubuntu 24.04), the package
  installs an AppArmor profile so Chromium's sandbox keeps working.

If a legacy `hvir-workbench` npm installation is present, the installer migrates away
from it and removes it.

To confirm that the installer came from an hvir release, verify it with the GitHub CLI
before running it:

```sh
gh release verify-asset install.sh --repo jarmak-personal/hvir
```

### Update and uninstall

To update, download and run the latest `install.sh` again. hvir does not update itself.

```sh
bash install.sh --uninstall           # remove hvir but keep your settings and data
bash install.sh --uninstall --purge   # also remove your hvir settings and cache
```

Uninstalling never touches your project directories.

### Install a package manually

Each [release](https://github.com/jarmak-personal/hvir/releases) also publishes the
packages and a `SHA256SUMS` file. After checking the digest, install the package with your
package manager:

```sh
sudo apt install ./hvir-<version>-linux-x64.deb   # or -linux-arm64.deb
```

On macOS, open `hvir-<version>-darwin-arm64.pkg`. The installer script performs extra
checks that a manual install skips, so prefer the script.

## Getting started

Open a project from your terminal:

```sh
hvir .                # the current directory
hvir ~/src/my-app     # any local directory
```

`hvir <directory>` registers the directory as a project, or selects it if it is already
registered, and opens it. Running `hvir` with no arguments, or starting it from your
application launcher, reopens your registered projects. On first launch it asks you for a
folder. Projects on SSH hosts are added from inside the app (see
[Remote projects over SSH](#remote-projects-over-ssh)).

The window has four areas:

- **Projects bar** (top): your projects, the **Workspaces** (Git worktrees) of the active
  project, **Sessions**, **Workbench health**, and **Settings**. The **+** button
  (**Register project**) adds a local or remote project.
- **Rail** (left): **Files** and **Git**.
- **Viewer** (center): tabs for files and web panes, with each file shown rendered, as
  source, or as a diff. **Split viewer right** opens a second viewer.
- **Terminal panel** (bottom): the workspace's terminals.
  <kbd>Mod</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> maximizes or restores it.

To start an agent, open the **New terminal** (**+**) menu in the terminal panel and pick a
harness. **Add a harness…** lists the agent CLIs that hvir finds on the project's host,
and **Configure harnesses…** opens the harness settings.

## Agent harnesses

A harness is the program that a terminal runs. hvir includes these providers:

| Harness            | Command        | hvir integration                                                                        |
| ------------------ | -------------- | --------------------------------------------------------------------------------------- |
| Shell              | your `$SHELL`  | Default; starts a login shell                                                           |
| Claude Code        | `claude`       | Exact resume and fork, context meter and usage, review insert, SSH image paste          |
| Codex              | `codex`        | Exact resume and fork, context meter and usage, review insert and send, SSH image paste |
| GitHub Copilot CLI | `copilot`      | Launch only                                                                             |
| Gemini CLI         | `gemini`       | Launch only                                                                             |
| Cursor CLI         | `cursor-agent` | Launch only                                                                             |
| Pi                 | `pi`           | Launch only                                                                             |
| Custom             | any command    | Launch only                                                                             |

"Launch only" harnesses start a fresh process when hvir restores them; hvir never guesses
which earlier session to continue.

hvir detects and launches agent CLIs through your login shell (`$SHELL -lic`), so
anything on the `PATH` set up by your shell startup files works, locally and on SSH hosts.
If a CLI is not detected, check that `command -v <cli>` works in a new login shell, choose
**Refresh availability** in the **New terminal** menu, or set an absolute executable path
in the harness profile.

Harness profiles are managed in **Settings → Harnesses**. A profile sets:

- the executable (the provider default, a command on `PATH`, or an absolute path on the
  host),
- extra arguments,
- environment variables (plain values, secret references resolved on the target host or
  forwarded from your local environment, or variables to unset),
- host path bindings, which let arguments refer to host-specific paths, such as
  `--add-dir {binding:monorepo}`, and
- scope: all projects, or one registered project.

## Remote projects over SSH

hvir connects to hosts defined in your `~/.ssh/config`. Every `Host` alias without
wildcards appears next to **Local** when you register a project. Pick a host, then choose
or type a folder on it.

- hvir uses the `HostName`, `User`, `Port`, and `IdentityFile` settings of each alias.
  Other options, including `ProxyJump` and `ProxyCommand`, are not applied, and files
  pulled in with `Include` are not read.
- Authentication tries your SSH agent (`SSH_AUTH_SOCK`), then public keys (the alias's
  `IdentityFile`, or the default `~/.ssh/id_*` keys), then keyboard-interactive and
  password authentication. hvir shows passphrase and password prompts in the app.
- On first connection hvir shows the host key's SHA-256 fingerprint for you to confirm,
  and it warns you if a trusted key changes. hvir keeps its own trust store and does not
  read or modify `~/.ssh/known_hosts`.
- Install `git` and your agent CLIs on the remote host, because terminals, Git, and
  harness detection run there.
- On Linux hosts, install `inotifywait` (the `inotify-tools` package) for efficient file
  watching. Without it, hvir falls back to polling.

## Settings and keyboard shortcuts

Open **Settings** from the projects bar. It has these sections:

- **Appearance:** app theme, terminal colors (a gallery of terminal color schemes),
  interface and monospace fonts, interface scale, and terminal text size.
- **Terminal:** cursor shape and blinking, font ligatures, the idle-after-output
  threshold for attention, which terminals to restore on app start, and message
  submission.
- **Git:** auto-fetch interval (off, or every 1, 5, 15, or 30 minutes).
- **Keybindings:** a JSON object that overrides default shortcuts.
- **Harnesses:** harness profiles (see [Agent harnesses](#agent-harnesses)).

**Message submission.** When you choose to send agent messages with
<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>Enter</kbd> (so <kbd>Enter</kbd> inserts a new line),
hvir asks for consent and then updates the <kbd>Enter</kbd>,
<kbd>Ctrl</kbd>+<kbd>Enter</kbd>, and <kbd>Shift</kbd>+<kbd>Enter</kbd> chat bindings in
Claude Code's `keybindings.json` (in `${CLAUDE_CONFIG_DIR:-~/.claude}`) on each host you
use. It saves the previous values in `.hvir-keybindings-state.json` in the same
directory, so turning the setting off restores them. Codex receives the setting as a
launch option, so restart open Codex terminals after you change it.

**Default shortcuts.** `Mod` is <kbd>Cmd</kbd> on macOS and <kbd>Ctrl</kbd> on Linux.

| Action                                     | Action id             | Default       |
| ------------------------------------------ | --------------------- | ------------- |
| Find a file by name                        | `findFile`            | `Mod+P`       |
| Find in the current file                   | `findInFile`          | `Mod+F`       |
| Find in the terminal                       | `findInTerminal`      | `Mod+Shift+F` |
| Go to line                                 | `goToLine`            | `Ctrl+G`      |
| Cycle the view mode (rendered/source/diff) | `cycleViewMode`       | `Mod+Shift+M` |
| Focus the terminal                         | `focusTerminal`       | `Mod+J`       |
| Maximize or restore the terminal panel     | `toggleTerminalFocus` | `Mod+Shift+J` |
| Focus the viewer                           | `focusViewer`         | `Mod+1`       |
| Focus the file tree                        | `focusTree`           | `Mod+0`       |
| Next workspace                             | `nextWorkspace`       | `Mod+Alt+]`   |
| Previous workspace                         | `previousWorkspace`   | `Mod+Alt+[`   |

To override shortcuts, enter a JSON object keyed by action id in **Settings →
Keybindings**. Bindings combine the modifiers `Mod`, `Ctrl`, `Meta`, `Alt`, and `Shift`
with a key:

```json
{
  "findFile": "Mod+Shift+P",
  "focusTerminal": "Ctrl+`"
}
```

## Where hvir keeps data

| Platform | Application data directory           |
| -------- | ------------------------------------ |
| macOS    | `~/Library/Application Support/hvir` |
| Linux    | `${XDG_CONFIG_HOME:-~/.config}/hvir` |

It contains:

| File                          | Contents                                                |
| ----------------------------- | ------------------------------------------------------- |
| `projects.json`               | Registered projects and their workspaces                |
| `terminal-sessions.json`      | Terminals to restore, and their conversation identities |
| `harness-profiles.json`       | Harness profiles                                        |
| `known-hosts.json`            | SSH host keys you have trusted                          |
| `document-review-drafts.json` | Document review drafts                                  |
| `runtime-diagnostics*.jsonl`  | A bounded local diagnostics journal                     |

Settings, layout, and open tabs are kept in the app's local storage in the same directory.
`install.sh --uninstall --purge` removes this directory and hvir's cache directory
(`~/Library/Caches/hvir` or `${XDG_CACHE_HOME:-~/.cache}/hvir`).

hvir has no telemetry or auto-updater. Diagnostics stay on your machine unless you copy or
save a diagnostic report.

## Troubleshooting

- **An agent CLI is missing from the New terminal menu.** hvir looks for it with your
  login shell on the project's host. See [Agent harnesses](#agent-harnesses).
- **The SSH connection fails for a host that works in your terminal.** Check whether the
  host depends on `ProxyJump`, `ProxyCommand`, `Include`, or other options that hvir does
  not apply.
- **The file tree is slow to notice remote changes.** Install `inotify-tools` on the
  remote Linux host.
- **Something went wrong in the app.** Open **Workbench health** in the projects bar and
  choose **Review diagnostic report**. Review the report, then copy or save it
  (`hvir-diagnostic-report.json`) to attach to a bug report.

## Development

### Prerequisites

- Node.js 24 or newer, and npm
- Git
- Python 3 and a C/C++ toolchain for native modules: the Xcode Command Line Tools on
  macOS, or `build-essential` and `python3` on Debian and Ubuntu
- Network access during installation. npm downloads Electron and hvir's ghostty-web
  fork from GitHub releases.

### Set up

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
```

`npm ci` runs `npm run install:runtime`, which downloads Electron, builds the
`@hvir/rename-noreplace` native addon (in `packages/rename-noreplace`), and rebuilds
`node-pty` for Electron. Run `npm run install:runtime` again if a native module reports an
ABI mismatch.

### Run

```sh
npm run dev                                      # start hvir with hot reload
HVIR_PROJECT_ROOT=/path/to/project npm run dev   # open a specific project
```

A development build shares its data directory with an installed hvir. To keep them
separate, pass Electron a different user data directory:

```sh
npm run dev -- -- --user-data-dir="$HOME/.hvir-dev"
```

`npm run dev` and `npm run build` first check that the installed ghostty-web runtime
matches the one hvir expects. If that check fails, run `npm ci` again.

### Test and check

| Command                       | Purpose                                                            |
| ----------------------------- | ------------------------------------------------------------------ |
| `npm test`                    | Run the Vitest suite                                               |
| `npm run test:watch`          | Run Vitest in watch mode                                           |
| `npm run lint`                | Run ESLint, including the architecture import rules                |
| `npm run typecheck`           | Type-check the Node (main, preload, workers) and renderer projects |
| `npm run format:check`        | Check formatting with Prettier (`npm run format` fixes it)         |
| `npm run check-seams`         | Check the architectural seams (see [Architecture](#architecture))  |
| `npm run architecture:report` | Report architecture hotspots and dependency rules (works offline)  |
| `npm run test:mutation`       | Run Stryker mutation tests for the Git parsers                     |
| `npm run verify`              | Run the full CI verification gate                                  |

To run a single test file, pass its path: `npm test -- test/viewer-types.test.ts`.

`npm run verify` runs `check-seams`, `check-adrs`, `architecture:check`, `lint`,
`typecheck`, and the tests. `architecture:check` validates provenance against the GitHub
repository and needs an `HVIR_REPO_TOKEN`; without one, use `npm run architecture:report`.

### Smoke tests

Smoke tests build hvir and drive the real Electron app through scripted scenarios:

```sh
npm run smoke                                           # the full scenario set
npm run smoke:macos                                     # the set used on macOS
npm run smoke:scenario -- viewer-content git-workflow   # selected scenarios
xvfb-run -a npm run smoke                               # headless Linux
```

Set `HVIR_SMOKE_REPEAT` (1–100) to repeat the selected scenarios, and
`HVIR_SMOKE_ARTIFACT_DIR` to keep bounded failure evidence. `npm run smoke:capacity`
covers capacity, and `npm run gauntlet` runs verification, smoke, and capacity together
(set `HVIR_SKIP_CAPACITY=1` to skip capacity). The `smoke:linux:installed` and
`smoke:macos:installed` scripts install and remove real packages and refuse to run
without an opt-in environment variable, so run them only on disposable machines. The
`acceptance:ssh:*` scripts need a real SSH host and, on macOS, an Apple signing identity.

`npm run hooks:install` adds a `pre-push` hook that runs the type check and the smoke
tests for your platform. Use `git push --no-verify` to skip it.

### Build and package

| Command                    | Output                                   |
| -------------------------- | ---------------------------------------- |
| `npm run build`            | Type-check and build the app into `out/` |
| `npm run preview`          | Run the production build                 |
| `npm run build:dir`        | An unpacked app in `dist/`               |
| `npm run pack:mac:arm64`   | A macOS arm64 `.pkg` in `dist/`          |
| `npm run pack:linux:x64`   | A Linux x64 `.deb` in `dist/`            |
| `npm run pack:linux:arm64` | A Linux arm64 `.deb` in `dist/`          |

`npm run pack:mac:arm64:signed` requires code signing. Release builds are produced by CI
(see [Releases](#releases)).

## Architecture

hvir is a TypeScript Electron app built with electron-vite.

| Path                         | Contents                                                            |
| ---------------------------- | ------------------------------------------------------------------- |
| `src/main/`                  | Main process: projects, hosts, PTYs, harnesses, Git, web pane proxy |
| `src/preload/`               | The preload bridge that exposes `window.hvir` to the renderer       |
| `src/renderer/`              | The React user interface                                            |
| `src/workers/`               | Utility processes, such as the Git worker                           |
| `src/shared/`                | Types and IPC contracts shared across processes                     |
| `packages/rename-noreplace/` | A Node-API addon for atomic, no-replace renames                     |
| `build/`                     | Packaging resources: icons, entitlements, package scripts, AppArmor |
| `scripts/`                   | Build, smoke, release, and maintenance tooling                      |
| `test/`                      | Vitest tests                                                        |

The code is organized around a few seams, enforced by ESLint and
`npm run check-seams`:

- All file system, process, file watching, and PTY access goes through the `ProjectHost`
  interface. `src/main/project-host/local-host.ts` implements it for the local machine,
  and the SSH host modules (the only code that uses `ssh2`) implement it for remote
  hosts.
- Terminals are spawned only by the PTY supervisor (`src/main/pty/pty-supervisor.ts`).
- `ipcRenderer` is used only in `src/preload/`, and `ipcMain` only in
  `src/main/ipc/authority-router.ts`.
- Provider-specific harness code stays in `src/main/harness/`. Everything else treats
  harness providers as opaque catalog entries.
- Loopback network connections are made only by the web pane proxy.
- Git capabilities run commands through one shared command context.

## Releases

Releases are published from GitHub Actions:

1. A maintainer runs the **Release** workflow on `main` with a `patch`, `minor`, or
   `major` bump. The workflow opens a release pull request that changes only the version
   in `package.json` and `package-lock.json`.
2. Merging that pull request starts the release build. CI builds the Linux packages and
   installs, updates, launches, and removes them on Ubuntu 22.04, Ubuntu 24.04, and
   Debian 13. It also builds, signs, notarizes, and tests the macOS package.
3. CI publishes an immutable GitHub release with attestations. The release contains
   `install.sh`, the packages, `SHA256SUMS`, `release-manifest.json`, and
   `THIRD_PARTY_NOTICES.md`.

## Contributing

Report bugs in [GitHub issues](https://github.com/jarmak-personal/hvir/issues).
Conversations on new issues and pull requests are locked automatically, so include all the
context in the description. Before you open a pull request, run `npm run lint`,
`npm run typecheck`, `npm test`, and the smoke tests for your platform. CI runs
`npm run verify` and the Electron smoke tests on Linux, a reduced smoke set on macOS, and
CodeQL analysis.

## License

hvir is released under the [MIT License](LICENSE). It bundles third-party software,
including a fork of ghostty-web that contains a WebAssembly build of the Ghostty terminal
core. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for their notices.
