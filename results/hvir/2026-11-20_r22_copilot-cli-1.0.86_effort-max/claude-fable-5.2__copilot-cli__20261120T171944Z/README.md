![hvir icon](build/icons-linux/128x128.png)

# hvir

Harness · View · Interact · Respond

hvir is a desktop workbench for terminal coding agents. It runs agent CLIs such as Claude
Code and Codex ("harnesses") in real terminals beside the files, diffs, and Git history
they are changing, so you can follow several agents across several worktrees and answer
them from one window.

hvir is an Electron app for macOS and Linux. A project can be a local folder or a folder
on a remote host reached over SSH.

## Features

- **Projects and worktrees.** Register a folder as a project. hvir discovers the
  repository's Git worktrees and gives each one its own workspace, with separate
  terminals, viewer tabs, and Git state. A folder that is not a Git repository opens as a
  single workspace.
- **Agent terminals.** Each workspace holds multiple terminals, backed by real PTYs and
  rendered with Ghostty's terminal core. Terminals can be split, searched, themed, and
  moved to another worktree without restarting the process. Attention badges show which
  terminals are working and which are ready for you.
- **Harness profiles.** Start a shell, an agent CLI, or a custom command from a profile
  that sets the executable, arguments, and environment. See [Harnesses](#harnesses).
- **Session recovery.** hvir remembers its terminals across restarts and can restore them,
  resuming Claude Code and Codex in the exact conversation they were in.
- **File tree and viewer.** Browse, search, create, move, and delete files. Open them in
  tabs as rendered output (Markdown, Mermaid, HTML, JSON, YAML, CSV, images), as editable
  source with syntax highlighting and Git blame, or as a diff against the index, `HEAD`,
  or the branch point.
- **Git.** Changes in the working tree and since the branch point, commit history, a
  commit graph, and commit details, plus branch switching, fetch, and fast-forward pull.
- **Document review.** Select a passage in the rendered or source view, attach comments,
  and hand the batch to a running agent. Claude Code and Codex receive it in their
  prompt; for any other terminal you can copy it to the clipboard.
- **Web panes.** A `localhost` link printed in a terminal opens in an embedded browser
  pane. Requests go through the workspace's host, so a dev server on a remote machine
  works without manual port forwarding.
- **Sessions overview.** One list of every terminal across all projects, with its status
  and, for Claude Code and Codex, the model, context use, and token usage.
- **Remote projects.** Files, terminals, Git, and web panes all work over an SSH
  connection. hvir does not install a server or helper on the remote host. See
  [Remote projects over SSH](#remote-projects-over-ssh).

## Install

Releases are published on [GitHub](https://github.com/jarmak-personal/hvir/releases) as
native packages:

| Platform | Package |
| --- | --- |
| macOS on Apple silicon | `hvir-<version>-darwin-arm64.pkg` |
| Debian- and Ubuntu-based Linux, x64 | `hvir-<version>-linux-x64.deb` |
| Debian- and Ubuntu-based Linux, arm64 | `hvir-<version>-linux-arm64.deb` |

Linux packages need glibc 2.35 or newer. Windows is not supported.

Each release includes an `install.sh` that picks the package for your machine, verifies
it, and installs it with the system package manager:

```sh
curl -fsSLO https://github.com/jarmak-personal/hvir/releases/latest/download/install.sh
bash install.sh
```

The installer checks the package's SHA-256 digest. On macOS it also checks the Developer
ID signature, the notarization ticket, and Gatekeeper. It then installs through `apt` or
the macOS `installer`, so it asks for your `sudo` password. You get the application and a
`hvir` command (`/usr/local/bin/hvir` on macOS, `/usr/bin/hvir` on Linux).

To update, download the newest `install.sh` and run it again. To install by hand instead,
download the package for your platform, check it against the release's `SHA256SUMS`, and
install it with `sudo apt install ./<package>.deb` or by opening the `.pkg`.

To uninstall:

```sh
bash install.sh --uninstall           # remove hvir, keep your settings
bash install.sh --uninstall --purge   # also delete hvir's settings and cache
```

Neither form touches your project directories. `--purge` deletes
`~/Library/Application Support/hvir` and `~/Library/Caches/hvir` on macOS, or
`~/.config/hvir` and `~/.cache/hvir` on Linux.

## Getting started

Open a project from a shell:

```sh
hvir .                # open the current directory
hvir ~/code/my-app    # open another local folder
hvir                  # reopen the projects you registered before
```

Then:

1. **Start a harness.** Choose **New terminal** in the terminal panel and pick a profile.
2. **Watch the work.** The **Files** and **Git** tabs follow the workspace as it changes.
   Ctrl-click (Cmd-click on macOS) a file path or `localhost` URL in terminal output to
   open it in the viewer or a web pane.
3. **Respond.** Type in the terminal, or review a document and send your comments to the
   agent.
4. **Add more.** **Register project** adds another local folder or a folder on an SSH
   host. **Sessions** lists every terminal across all of them.

## Harnesses

A harness is a command hvir knows how to launch in a terminal. hvir does not bundle agent
CLIs. It launches the ones installed on the project's host, whether local or remote.

| Harness | Command | Integration |
| --- | --- | --- |
| Shell | your login shell | |
| Claude Code | `claude` | Integrated |
| Codex | `codex` | Integrated |
| Pi | `pi` | Launch only |
| Gemini CLI | `gemini` | Launch only |
| GitHub Copilot CLI | `copilot` | Launch only |
| Cursor CLI | `cursor-agent` | Launch only |
| Custom | a command you configure | Launch only |

**Integrated** harnesses resume the exact conversation after a restart, show a
context-usage meter, report their model and token usage to the Sessions view, and accept
document-review comments in their prompt. With a recent enough CLI they can also fork a
conversation into a new terminal. **Launch only** harnesses run as ordinary terminals.
After a restart hvir starts them fresh rather than guess which session to resume.

Manage profiles in **Settings → Harnesses**. A profile chooses the executable, extra
arguments, environment variables, and named path bindings, and applies everywhere or to
one project.

## Remote projects over SSH

Choose **Register project** and pick an SSH host instead of **Local**.

- **Hosts** are the `Host` aliases in `~/.ssh/config`; wildcard patterns are skipped.
  hvir applies `HostName`, `User`, `Port`, and `IdentityFile`. Other options, such as
  `ProxyJump`, are not applied.
- **Authentication** tries your SSH agent, then key files, then keyboard-interactive and
  password prompts. Without an `IdentityFile`, hvir tries the standard `~/.ssh/id_*`
  keys.
- **Host keys** are confirmed by fingerprint on first connection and remembered. A
  changed key is reported and must be accepted explicitly. hvir keeps its own record and
  does not read `~/.ssh/known_hosts`.
- **The remote host** needs `git` for the Git views and whichever agent CLIs you want to
  launch. hvir watches files with `inotifywait` when it is installed and falls back to
  polling when it is not.

## Keyboard shortcuts

| Action | Default |
| --- | --- |
| Find file | `Mod+P` |
| Find in file | `Mod+F` |
| Find in terminal | `Mod+Shift+F` |
| Go to line | `Ctrl+G` |
| Cycle view mode (rendered, source, diff) | `Mod+Shift+M` |
| Focus file tree | `Mod+0` |
| Focus viewer | `Mod+1` |
| Focus terminal | `Mod+J` |
| Maximize or restore the terminal panel | `Mod+Shift+J` |
| Next workspace | `Mod+Alt+]` |
| Previous workspace | `Mod+Alt+[` |

`Mod` is Command on macOS and Ctrl on Linux. **Settings → Keybindings** takes JSON
overrides keyed by action name.

## Development

### Prerequisites

- macOS or Linux
- Node.js 24 or newer, with npm
- Git
- A C/C++ toolchain and Python for `node-gyp`: the Xcode Command Line Tools on macOS, or
  `build-essential` and `python3` on Debian and Ubuntu

### Run from source

```sh
npm ci
npm run dev
```

`npm ci` also downloads Electron and compiles two native modules: `node-pty`, rebuilt for
Electron, and the private `@hvir/rename-noreplace` addon in `packages/`.

`npm run dev` starts the app with hot reload for the renderer. With no registered
projects it asks for a folder. To choose one up front, set `HVIR_PROJECT_ROOT`:

```sh
HVIR_PROJECT_ROOT=~/code/my-app npm run dev
```

### Build and package

| Command | Result |
| --- | --- |
| `npm run build` | Type-checks, then bundles main, preload, and renderer into `out/` |
| `npm run preview` | Builds and runs the production bundle |
| `npm run build:dir` | Builds an unpacked application in `dist/` |
| `npm run pack:mac:arm64` | Builds the macOS arm64 `.pkg` in `dist/` |
| `npm run pack:linux:x64` | Builds the Linux x64 `.deb` in `dist/` |
| `npm run pack:linux:arm64` | Builds the Linux arm64 `.deb` in `dist/` |

Build each package on the platform and architecture it targets, because the native
modules are compiled for the machine that runs `npm ci`.

### Test and check

| Command | What it does |
| --- | --- |
| `npm test` | Unit tests with Vitest. They run in plain Node, without Electron. |
| `npm run typecheck` | `tsc --noEmit` for the Node-side and renderer projects |
| `npm run lint` | ESLint, including the import rules that enforce the architecture |
| `npm run format` | Prettier over the source tree; `format:check` only reports |
| `npm run check-seams` | A grep-level backstop for the same architecture rules |
| `npm run architecture:report` | File-size budgets and the module dependency graph |
| `npm run smoke` | End-to-end scenarios in a real Electron build |
| `npm run verify` | The gate CI runs on pull requests |

`npm run smoke` builds the app in smoke mode and drives it through end-to-end scenarios
in a throwaway repository and user-data directory. On macOS, run `npm run smoke:macos`
instead. To run one scenario, name it: `npm run smoke:scenario -- web-pane`. On Linux
without a display, prefix the command with `xvfb-run -a`.

`npm run verify` chains `check-seams`, `check-adrs`, `architecture:check`, `lint`,
`typecheck`, and `test`. The `architecture:check` step compares your branch with the
upstream repository, so it needs a GitHub token in `HVIR_REPO_TOKEN` and an `origin`
remote that points at `jarmak-personal/hvir`. `architecture:report` is the offline
equivalent.

`npm run hooks:install` installs a pre-push hook that runs the type check and the smoke
suite for your platform. Bypass it with `git push --no-verify`.

## Architecture

```text
src/
  main/       Electron main process: project hosts, PTYs, Git, harnesses, IPC
  preload/    The typed window.hvir bridge between the renderer and main
  renderer/   React UI: file tree, viewer, terminals, Git panel, sessions, settings
  shared/     Types and pure logic used by every process, including the IPC contract
  workers/    Utility-process entry points; Git runs here, off the main process
packages/
  rename-noreplace/   Private Node-API addon for atomic rename without replace
build/        Icons, macOS entitlements, package scripts, and the hvir launcher command
scripts/      Build, release, smoke-test, architecture, and project-management tooling
test/         Vitest unit tests
```

A few rules keep these layers apart. ESLint ([eslint.config.mjs](eslint.config.mjs)) and
[scripts/check-seams.sh](scripts/check-seams.sh) enforce them:

- **Every path is host-qualified.** Code passes `HostPath` values, a host plus a path, and
  never bare strings, so local and remote projects share one code path.
- **All host access goes through `ProjectHost`.** `LocalHost` and `SshHost` implement this
  one interface for filesystem, process, PTY, and watch operations. Only
  `src/main/project-host/local-host.ts` imports `fs`, `child_process`, `chokidar`, or
  `node-pty`.
- **One PTY owner.** Only `src/main/pty/pty-supervisor.ts` spawns terminals.
- **The renderer is sandboxed.** It has no Node.js access and reaches the main process
  only through the typed preload bridge. `ipcRenderer` appears only in `src/preload/`.
- **Harness knowledge stays in one place.** Provider-specific behavior lives in
  `src/main/harness/`. The rest of the app treats provider ids as opaque data.

hvir is built with Electron, React, and TypeScript, and bundled with electron-vite.
Terminals are rendered by ghostty-web, which runs Ghostty's terminal core as WebAssembly,
and local PTYs come from node-pty. Remote hosts use ssh2. The viewer uses CodeMirror,
Shiki, markdown-it, and Mermaid.

## License

hvir is released under the [MIT License](LICENSE). Notices for the third-party software
it redistributes are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
