<p align="center">
  <img src="build/icons-linux/128x128.png" alt="hvir logo" width="96" height="96">
</p>

<h1 align="center">hvir</h1>

<p align="center">
  <strong>A desktop workbench for terminal-based AI coding agents.</strong>
</p>

hvir runs coding agents such as Claude Code and Codex in real terminals, next to everything you need to follow their work: a file tree, a Git panel, a viewer with rendered, source, and diff modes, and embedded previews of the dev servers your agents start. A project can be a folder on your machine or on any host in your `~/.ssh/config`, and it works the same way in both places. Every Git worktree gets its own workspace, so several agents can work on one repository side by side.

hvir is an Electron app written in TypeScript and React. Its terminals use [Ghostty](https://ghostty.org)'s terminal core, compiled to WebAssembly through a [ghostty-web](https://github.com/jarmak-personal/ghostty-web) fork, on native PTYs.

- [Features](#features)
- [Supported agents](#supported-agents)
- [Installation](#installation)
- [Usage](#usage)
- [Remote projects over SSH](#remote-projects-over-ssh)
- [Development](#development)
- [Releases](#releases)
- [License](#license)

## Features

### Agents and terminals

- **Launch agents from the terminal panel.** hvir includes harnesses for Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, Cursor CLI, and Pi, plus a plain login shell and custom commands. It probes each harness on the host where the project lives and shows whether it is available before you launch it.
- **Harness profiles.** Change the executable, arguments, and environment of any harness, globally or for a single project. Arguments can reference the project or workspace root. Environment variables can be plain values, references to a variable on the target host or in your local environment, or unset. A preview shows the exact command before anything runs.
- **Exact resume and fork.** hvir records the session identity of Claude Code and Codex conversations. After a restart it resumes *that* conversation rather than whichever one is newest, and you can fork a conversation into a new terminal.
- **Terminal recovery.** When the app starts, hvir can ask which terminals to restore or restore all of them automatically.
- **Attention tracking.** Terminals you are not looking at are marked *Working*, *Bell*, or *Ready* (output has settled after you submitted input). Workspace tabs count the terminals that need you, and the total appears as an app badge where the desktop supports it.
- **A full-featured terminal.** Split the terminal panel and search scrollback. When the shell marks its prompts, you can step through prompts, commands, and output and copy any of them as a block. Click `path:line:col` references to open them in the viewer, or open `localhost` URLs in a web pane. The theme gallery offers hundreds of Ghostty color schemes, with separate picks for light and dark mode.
- **Move live terminals between worktrees.** When an agent creates a new worktree, you can rehome its terminal there without restarting the process.
- **Message submission.** Optionally send messages with Ctrl+Enter or Cmd+Enter so that Enter inserts a new line in Claude Code and Codex. For Claude Code, hvir asks before editing Claude's `keybindings.json`, and it restores the previous bindings exactly when you turn the setting off.
- **Image paste on remote hosts.** Pasting an image into Claude Code or Codex in an SSH project uploads the image to the host and inserts its path.

### Files, viewer, and Git

- **File tree** with Git status decorations and filename search. You can create, rename, move, and drag and drop files, copy paths, and reveal files in the system file manager. Deleting moves files to the trash in local projects; on SSH hosts, deletion is permanent.
- **Viewer** with tabs, pinning, and a two-pane split. Open files reload when they change on disk, for example when an agent edits them. Each file opens in one of three modes:
  - **Rendered:** Markdown (with task lists, Mermaid diagrams, and repository images), Mermaid files, HTML in a sandboxed preview, JSON, YAML, CSV, and images.
  - **Source:** syntax highlighting, editing and saving, find, go to line, and a blame gutter.
  - **Diff:** `HEAD → Working tree`, `Index → Working tree`, `Branch point → HEAD`, or any historical commit.
- **Git panel** with working-tree changes, commit history and graph, commit details, and blame. You can also switch branches, fetch (on demand or on a timer), and pull (fast-forward only). hvir does not stage or commit; that stays with you and your agents.
- **Worktree workspaces.** Each project shows its Git worktrees as workspace tabs. hvir discovers worktrees that you or your agents create and can prune stale worktree records. Folders that aren't Git repositories work too; they just have no Git panel.

### Review, sessions, and previews

- **Document review.** Comment on source lines of any text file or on blocks of rendered Markdown. Each comment is anchored to the exact file contents, so hvir can tell whether it is still current, has moved, or has gone stale as the agent edits the file. When you're ready, hvir shows the exact feedback and delivers it to a live terminal: **Copy** works with every agent, **Insert** pastes it into Claude Code or Codex without submitting, and **Send now** submits it to Codex.
- **Sessions overview.** One view of every hvir terminal across all projects and worktrees, showing attention state, activity, harness, and token usage (Claude Code and Codex). Filter it, group it by project and worktree, and jump straight to any live terminal.
- **Web panes.** Open loopback URLs such as `http://localhost:5173` from a terminal in an embedded browser pane. An authenticated per-pane proxy routes the traffic through the project's host, so a dev server running on an SSH host works without manual port forwarding.
- **Workbench health.** hvir records application faults, such as a renderer crash or hang, in bounded local storage that you can review or delete. From the health control you can prepare a diagnostic report, optionally with a masked screenshot, and copy or save it. Reports are never handed to an agent automatically.

## Supported agents

Install the agent CLIs you want on the machine where your project lives: your computer for local projects, or the SSH host for remote ones.

| Harness | Command | After a restart | Fork | Context & usage | Review delivery |
| --- | --- | --- | --- | --- | --- |
| Shell (default) | your login shell | starts a new shell | — | — | Copy |
| Claude Code | `claude` | resumes the exact conversation | 2.1.258+ | ✓ | Copy, Insert |
| Codex | `codex` | resumes the exact conversation | 0.151.0+ | ✓ | Copy, Insert, Send now (0.146.0+) |
| Gemini CLI | `gemini` | starts a new session | — | — | Copy |
| GitHub Copilot CLI | `copilot` | starts a new session | — | — | Copy |
| Cursor CLI | `cursor-agent` | starts a new session | — | — | Copy |
| Pi | `pi` | starts a new session | — | — | Copy |
| Custom | a command you choose | starts it again | — | — | Copy |

Harnesses that can't resume the exact conversation start fresh after a restart; hvir never replaces an exact resume with "resume the latest session". Add or edit harnesses under **Settings → Harnesses**, or from the **+** menu in the terminal panel.

## Installation

hvir runs on:

- **macOS** on Apple silicon.
- **Linux** x64 or arm64 with `apt` and glibc 2.35 or newer. Releases are tested on Ubuntu 22.04, Ubuntu 24.04, and Debian 13.

Intel Macs and Windows are not supported. For the Git features, `git` must be installed wherever your projects live.

### Install or update with the installer

Each [GitHub release](https://github.com/jarmak-personal/hvir/releases) includes an `install.sh` that installs the native package for that release:

```sh
curl -fsSLO https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer detects your platform, downloads the matching package from the same release, and checks it against a SHA-256 digest built into the installer. On macOS it also checks the package's Developer ID signature, notarization, and Gatekeeper assessment. On Linux it confirms that `apt` can satisfy the package's dependencies. Then it installs the package with `sudo`. Run the latest installer again to update. If you still have the older npm package (`hvir-workbench`), the installer replaces it.

| | macOS | Linux |
| --- | --- | --- |
| Application | `/Applications/hvir.app` | `/opt/hvir` |
| Command | `/usr/local/bin/hvir` | `/usr/bin/hvir` |

On Linux hosts that restrict unprivileged user namespaces (such as Ubuntu 24.04), the package installs an AppArmor profile so that Chromium's sandbox keeps working.

### Install a package manually

You can also download a package from the release and install it yourself:

```sh
# Linux (use the -linux-arm64.deb on arm64)
sudo apt install ./hvir-<version>-linux-x64.deb

# macOS
sudo installer -pkg hvir-<version>-darwin-arm64.pkg -target /
```

Releases are immutable and include a `SHA256SUMS` file and GitHub release attestations. To verify a download with the [GitHub CLI](https://cli.github.com), run `gh release verify-asset v<version> <file> --repo jarmak-personal/hvir`.

### Uninstall

```sh
bash install.sh --uninstall           # remove hvir and keep your settings
bash install.sh --uninstall --purge   # also remove your hvir settings and cache
```

Uninstalling never touches your project directories.

## Usage

### Open a project

```sh
hvir .              # open the current directory
hvir ~/src/my-app   # open another local directory
hvir                # reopen your saved projects
```

If you run `hvir` without a path and have no saved projects, it asks you to choose a folder. Projects appear in the projects bar at the top of the window. Use **+** there to add another project, either a local folder or a folder on an SSH host. The **Sessions** button opens the overview of all your terminals.

To start an agent, open the **+** menu in the terminal panel and pick a harness.

### Keyboard shortcuts

`Mod` is Cmd on macOS and Ctrl on Linux.

| Shortcut | Action |
| --- | --- |
| `Mod+P` | Find a file by name |
| `Mod+F` | Find in the current file |
| `Mod+Shift+F` | Find in the terminal |
| `Ctrl+G` | Go to line |
| `Mod+Shift+M` | Cycle the viewer mode (rendered, source, diff) |
| `Mod+J` | Focus the terminal |
| `Mod+Shift+J` | Maximize or restore the terminal panel |
| `Mod+1` | Focus the viewer |
| `Mod+0` | Focus the file tree |
| `Mod+Alt+]` / `Mod+Alt+[` | Next / previous workspace |

Change them under **Settings → Keybindings**, which lists every action and its shortcut as JSON; for example, `"findFile": "Mod+Shift+P"` rebinds file search. A shortcut combines one or more of `Mod`, `Ctrl`, `Meta`, `Alt`, and `Shift` with a key.

### Settings

| Section | What it controls |
| --- | --- |
| Appearance | App theme, terminal colors and the Ghostty theme gallery, interface and monospace fonts, interface scale, and terminal text size |
| Terminal | Cursor shape and blinking, ligatures, message submission, the idle threshold that marks a terminal *Ready*, and terminal restore on app start |
| Git | Automatic fetch interval (off, 1, 5, 15, or 30 minutes; the default is 5) |
| Keybindings | Shortcut overrides |
| Harnesses | Harness profiles: executables, arguments, and environment |

### Where hvir keeps its data

hvir stores its settings, project list, saved terminals, harness profiles, and trusted SSH host keys in:

| Platform | Settings and state | Cache |
| --- | --- | --- |
| macOS | `~/Library/Application Support/hvir` | `~/Library/Caches/hvir` |
| Linux | `${XDG_CONFIG_HOME:-~/.config}/hvir` | `${XDG_CACHE_HOME:-~/.cache}/hvir` |

## Remote projects over SSH

hvir connects to SSH hosts itself. Apart from the tools listed below, you don't need to install anything on the remote host.

- **Hosts.** Every non-wildcard `Host` alias in `~/.ssh/config` appears as a host. hvir uses its `HostName`, `User`, `Port`, and `IdentityFile` settings. Other options, including `ProxyJump` and `ProxyCommand`, are not applied.
- **Authentication.** hvir uses your SSH agent (`SSH_AUTH_SOCK`) and your identity files: the ones configured for the host, or the OpenSSH defaults such as `~/.ssh/id_ed25519`. Prompts for passphrases, passwords, and keyboard-interactive authentication appear in the app.
- **Host keys.** The first time you connect, hvir asks you to confirm the host key, then stores it in its own `known-hosts.json` rather than in `~/.ssh/known_hosts`. If a host's key changes later, hvir warns you before connecting.
- **On the remote host** you need SFTP, a POSIX `sh`, `git` for the Git features, and the agent CLIs you want to run. If `inotifywait` (from `inotify-tools`) is installed, hvir uses it to watch files; otherwise it falls back to polling.

## Development

### Prerequisites

- Node.js 24 or newer, and npm
- Git
- A toolchain for native Node modules (node-gyp): Python 3 and a C/C++ compiler, such as the Xcode Command Line Tools on macOS or `build-essential` on Debian and Ubuntu

### Get started

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

`npm ci` also downloads Electron, builds the `rename-noreplace` Node-API addon in [`packages/rename-noreplace`](packages/rename-noreplace), and rebuilds `node-pty` for Electron. Before `dev` and `build`, a check confirms that the installed `ghostty-web` is the build hvir pins. If the check fails, run `npm ci` again.

To open a specific project in a development build, set `HVIR_PROJECT_ROOT`:

```sh
HVIR_PROJECT_ROOT=/path/to/project npm run dev
```

Development builds use the same data directory as an installed hvir, so they see and can change the same projects and settings.

> [!TIP]
> On Linux hosts that restrict unprivileged user namespaces (such as Ubuntu 24.04), the unpackaged Electron binary may fail to start its sandbox. For local development you can run `npm run dev -- --noSandbox`.

### Build and package

| Command | Result |
| --- | --- |
| `npm run build` | Type-check and build the app into `out/` |
| `npm run preview` | Run the built app |
| `npm run build:dir` | Build an unpacked application in `dist/` |
| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build a `.deb` package in `dist/` |
| `npm run pack:mac:arm64` | Build a macOS `.pkg` in `dist/` (`npm run pack:mac:arm64:signed` fails instead of skipping code signing) |

Packaging is configured in [`electron-builder.yml`](electron-builder.yml). Packaging resources live in [`build/`](build): icons, macOS entitlements and package scripts, the Linux AppArmor profile and package maintainer scripts, and the `hvir` command launcher.

### Checks and tests

| Command | What it does |
| --- | --- |
| `npm test` | Run the Vitest unit tests (`npm run test:watch` for watch mode) |
| `npm run typecheck` | Type-check the app, scripts, and tests |
| `npm run lint` | Run ESLint, including the architecture import rules |
| `npm run format` / `npm run format:check` | Format with Prettier, or check formatting |
| `npm run check-seams` | Check the architecture seams described below |
| `npm run architecture:report` | Report on architecture hotspots, offline |
| `npm run test:mutation` | Run Stryker mutation tests |

`npm run verify` is the full CI gate: `check-seams`, `check-adrs`, `architecture:check`, `lint`, `typecheck`, and `test`. `architecture:check` enforces the architecture policy against GitHub issue and branch data, so it needs `HVIR_REPO_TOKEN` and a clone of the canonical repository. Offline, use `architecture:report` instead.

### Smoke tests

The smoke suite drives the real Electron app through end-to-end scenarios, each against a disposable repository and user-data directory:

```sh
npm run smoke                                    # full suite
npm run smoke:macos                              # macOS suite
npm run smoke:scenario -- git-workflow web-pane  # selected scenarios
```

On Linux without a display, run the suite under Xvfb: `xvfb-run -a npm run smoke`. Scenario names are listed in [`src/main/smoke/scenario-selection.mts`](src/main/smoke/scenario-selection.mts). You can also select scenarios with `HVIR_SMOKE_SCENARIO` (not together with arguments), repeat a run with `HVIR_SMOKE_REPEAT=<n>`, and keep failure evidence by setting `HVIR_SMOKE_ARTIFACT_DIR`. `npm run gauntlet` runs `verify`, the smoke suite, and the capacity benchmark (set `HVIR_SKIP_CAPACITY=1` to skip the benchmark).

`npm run hooks:install` sets up a [pre-push hook](.githooks/pre-push) that runs `typecheck` and the smoke suite for your platform. Skip it with `git push --no-verify`.

### Project layout

```text
src/
  main/       Electron main process: project hosts (local and SSH), PTY supervisor,
              harness providers, Git, web-pane proxy, sessions, and diagnostics
  preload/    The bridge between the renderer and the main process
  renderer/   React UI: workbench, terminals, file tree, viewer, Git, sessions, settings
  shared/     Types and IPC contracts shared by all processes
  workers/    Utility processes, including the Git worker
packages/     rename-noreplace, a private Node-API addon for atomic no-replace renames
build/        Packaging resources: icons, entitlements, AppArmor profile, installer scripts
scripts/      Build, smoke, release, and architecture tooling
test/         Vitest unit tests
```

### Architecture seams

[`scripts/check-seams.sh`](scripts/check-seams.sh) and ESLint keep a few boundaries in place:

- **Every path belongs to a host.** Features work with host-qualified paths through a `ProjectHost`. Only the local host adapter ([`src/main/project-host/local-host.ts`](src/main/project-host/local-host.ts)) imports `fs`, `child_process`, `chokidar`, or `node-pty`, and only the SSH host adapter imports `ssh2`. This is why local and remote projects behave the same.
- **One IPC authority.** The renderer has no Node.js access. Only `src/preload` uses `ipcRenderer`, and only [`src/main/ipc/authority-router.ts`](src/main/ipc/authority-router.ts) uses `ipcMain`.
- **One PTY owner.** Only the PTY supervisor ([`src/main/pty/pty-supervisor.ts`](src/main/pty/pty-supervisor.ts)) spawns terminals.
- **Harness details stay in providers.** Only `src/main/harness/` refers to specific harnesses; everything else treats harness IDs as opaque data. Each provider in `src/main/harness/providers/` is registered in [`bundled-harness-providers.ts`](src/main/harness/bundled-harness-providers.ts).
- **Shared Git and loopback paths.** Git commands run through a shared command context, and only the web-pane proxy opens loopback connections.

## Releases

Maintainers cut releases with the **Release** GitHub Actions workflow. Choosing a `patch`, `minor`, or `major` bump opens a version-only pull request, and merging it starts the release for that exact commit. The workflow builds the Linux packages and tests them on Ubuntu 22.04, Ubuntu 24.04, and Debian 13; builds, signs, and notarizes the macOS package; and publishes an immutable GitHub release with `install.sh`, `SHA256SUMS`, and a release manifest.

## License

hvir is released under the [MIT License](LICENSE). Third-party components and their licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
