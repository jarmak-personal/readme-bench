# hvir

hvir is a terminal-first desktop workbench for software development. Open local or
SSH projects and keep your shells, Git worktrees, file previews, and coding-agent
sessions in one window.

- Run shells in split terminal panes powered by [Ghostty Web](https://github.com/coder/ghostty-web).
- Switch between Git worktrees, inspect changes, and browse commit history.
- Browse project files, preview Markdown, and open web pages alongside your work.
- Use harness profiles to launch tools such as Claude Code and Codex. Install and
  authenticate the tool separately on the host where it will run.

## Install

Download a package or `install.sh` from the [latest GitHub release](https://github.com/jarmak-personal/hvir/releases/latest):

| Platform                | Release package                   |
| ----------------------- | --------------------------------- |
| macOS (Apple silicon)   | `hvir-<version>-darwin-arm64.pkg` |
| Linux x64 (APT-based)   | `hvir-<version>-linux-x64.deb`    |
| Linux arm64 (APT-based) | `hvir-<version>-linux-arm64.deb`  |

Linux packages require glibc 2.35 or later. Open the `.pkg` on macOS or install the
matching `.deb` with APT on Linux. Alternatively, download and review the release's
`install.sh`, then run `bash install.sh` to let it select and verify the package for
your platform.

## Open a project

Launch hvir and select **Register project**. Choose **Local** or an SSH host from
`~/.ssh/config`, then select a folder. In the workspace, use **New terminal** to
start a shell or launch a configured harness. Git features require `git` on the
project's host.

If you installed a release package, you can also open the current local directory
from your shell with `hvir .`.

## Develop from source

You need Git, Node.js 24 or later, npm, and Python 3 for native module builds. On macOS,
install the Xcode Command Line Tools. On Linux, install `make` and a C/C++ toolchain
(for example, `build-essential` on Ubuntu).

```sh
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

`npm ci` downloads Electron and compiles native dependencies, including `node-pty`
for Electron's ABI.

| Command                     | Purpose                                     |
| --------------------------- | ------------------------------------------- |
| `npm run lint`              | Run ESLint.                                 |
| `npm run typecheck`         | Type-check the Node and renderer code.      |
| `npm test`                  | Run the Vitest suite.                       |
| `npm run build`             | Build production bundles into `out/`.       |
| `npm run smoke:macos`       | Run Electron smoke tests on macOS.          |
| `xvfb-run -a npm run smoke` | Run Electron smoke tests on headless Linux. |

To create a native package on the matching host, run `npm run pack:mac:arm64`,
`npm run pack:linux:x64`, or `npm run pack:linux:arm64`. Packages are written to `dist/`.

## Repository layout

| Path                             | Role                                             |
| -------------------------------- | ------------------------------------------------ |
| [`src/main/`](src/main/)         | Electron main process, terminals, Git, and hosts |
| [`src/preload/`](src/preload/)   | Bridge between Electron and the renderer         |
| [`src/renderer/`](src/renderer/) | React workbench UI                               |
| [`src/shared/`](src/shared/)     | Shared types and IPC contracts                   |
| [`test/`](test/)                 | Test suites and fixtures                         |
| [`scripts/`](scripts/)           | Build, verification, and release tools           |

## License

hvir is licensed under the [MIT License](LICENSE). See
[Third-Party Notices](THIRD_PARTY_NOTICES.md) for bundled components.
