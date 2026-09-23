# hvir

hvir is an Electron desktop workbench for local and SSH-connected software projects. It
brings project and workspace management, terminal-based coding-agent sessions, file
browsing, Git tools, and web previews into one multi-pane interface.

## Features

- Organize projects and workspaces on local or SSH-connected hosts.
- Launch sessions with Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, Cursor CLI,
  Pi, a plain shell, or custom commands through configurable harness profiles.
- Browse and edit project files, view diffs and history, and work in split viewer panes.
- Inspect Git changes, switch branches, fetch and pull, and manage worktrees.
- Preview web content alongside project files and terminals.
- Configure terminal appearance, workbench layout, and keyboard shortcuts.

Coding-agent and custom-command executables must be installed and, where required,
authenticated on the host where their sessions run.

## Development

### Requirements

- Node.js 24 or later and npm.
- A native build toolchain supported by `node-gyp` for the Electron dependencies.

Install dependencies and start the desktop app:

```sh
npm ci
npm run dev
```

On first launch, choose a local project folder or connect to an SSH host. The development
and production build commands check that the installed `ghostty-web` terminal runtime
matches the version required by this checkout. If that check fails, run `npm ci` again.

### Common commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Electron app in development mode. |
| `npm run build` | Type-check and build the production app. |
| `npm test` | Run the Vitest test suite. |
| `npm run lint` | Run ESLint. |
| `npm run verify` | Run seam, ADR, architecture, lint, type, and test checks. |
| `npm run smoke` | Build the smoke app and run Electron smoke scenarios. |
| `npm run build:dir` | Build and package an unpacked application directory. |

### Packages

The configured package scripts build installers into `dist/`:

| Command | Package |
| --- | --- |
| `npm run pack:mac:arm64` | macOS arm64 `.pkg` |
| `npm run pack:linux:x64` | Linux x64 `.deb` |
| `npm run pack:linux:arm64` | Linux arm64 `.deb` |

## Project layout

| Path | Purpose |
| --- | --- |
| `src/main/` | Electron main-process services for projects, hosts, terminals, and Git. |
| `src/preload/` | The controlled API bridge between the main process and renderer. |
| `src/renderer/` | React workbench interface. |
| `src/shared/` | Shared types, IPC contracts, and policies. |
| `src/workers/` | Utility-process workers. |
| `test/` | Unit, component, and integration-oriented tests. |
| `scripts/` | Development, architecture, release, and smoke-test tooling. |

## License

hvir is licensed under the [MIT License](LICENSE). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for notices covering redistributed
third-party software.
