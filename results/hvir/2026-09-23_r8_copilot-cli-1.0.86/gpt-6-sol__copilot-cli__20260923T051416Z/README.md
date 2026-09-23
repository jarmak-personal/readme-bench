# hvir

hvir is a desktop workbench for working across local and SSH-hosted projects. It brings terminals, project files, Git worktrees, and development sessions into one Electron app.

## What it does

- Open a folder on your machine or on a host configured in `~/.ssh/config`, then switch between projects and their Git worktrees.
- Run terminals in a workspace and view session activity across projects.
- Browse and edit files, inspect diffs, and render Markdown alongside source.
- Work with Git changes and history from the workbench.
- Configure terminal appearance, keybindings, and profiles for supported command-line harnesses. Harness executables are separate from hvir and must be installed and configured on the host where they run.

## Getting started

Development requires **Node.js 24 or newer**, npm, and the native build tools needed by `node-gyp` and Electron's native modules.

```sh
npm ci
npm run dev
```

In the app, use the project **+** control to choose a local host or an SSH host, then select a folder. SSH hosts are discovered from your local `~/.ssh/config`; configure access to the remote host before connecting. A folder does not have to be a Git repository to use the workbench.

The `npm ci` postinstall step builds the native modules for Electron. If the terminal runtime check reports a dependency mismatch, run `npm ci` again in this checkout.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron development app |
| `npm run build` | Type-check and build the app |
| `npm run verify` | Run architecture checks, lint, type checks, and unit tests |
| `npm test` | Run the Vitest suite |
| `npm run smoke` | Build and run Electron smoke scenarios |
| `npm run build:dir` | Build an unpacked application |
| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg` |
| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build Linux `.deb` packages |

Package output is written to `dist/`. The packaging commands are intended to run on their respective target platforms; macOS signing and distribution require additional credentials. Linux Electron smoke runs need a display server (CI uses `xvfb-run -a npm run smoke`).

## Project layout

- `src/main/`: Electron main process, project hosts, terminals, Git, and IPC.
- `src/preload/`: bridge between the main process and the renderer.
- `src/renderer/`: React workbench UI.
- `src/shared/`: types and contracts shared across processes.
- `src/workers/`: background workers.
- `test/`: automated tests; `scripts/`: build, smoke, and maintenance tooling.

## License

MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).
