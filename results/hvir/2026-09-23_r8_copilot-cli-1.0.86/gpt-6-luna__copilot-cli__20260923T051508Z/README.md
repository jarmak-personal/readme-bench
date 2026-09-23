# hvir

hvir is a desktop development workbench for working with local or SSH-hosted projects. It brings project files, terminals, Git, and coding-agent sessions together in one Electron application.

## Features

- Browse and edit project files, preview supported documents, and compare changes.
- Work with Git status, diffs, history, branches, and worktrees.
- Run multiple terminal sessions in resizable and split workspaces.
- Connect to remote projects over SSH using your SSH configuration and identities.
- Configure and launch supported coding-agent harnesses, including Claude Code and Codex.
- Review documents with line-based comments and prepare review handoffs.
- Customize the appearance, terminal behavior, and harness profiles.

## Requirements

- macOS or Linux.
- Node.js 24 or newer and npm.
- The native build tools required by `node-gyp` and Electron's `node-pty` dependency.
- For SSH projects, an SSH client configuration and credentials for the remote host.
- For coding-agent sessions, install and authenticate the agent CLI you want to use separately.

## Getting started

Clone the repository, install dependencies, and start the development app:

```sh
git clone <repository-url>
cd hvir
npm ci
npm run dev
```

`npm ci` runs the project's post-install setup, including rebuilding native dependencies for Electron. On first launch, choose a project folder or register an SSH-hosted project. Coding-agent CLIs are external tools; configure their executable and any required arguments in hvir's harness settings.

## Development

Useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the app in development mode. |
| `npm run build` | Type-check and build the application. |
| `npm test` | Run the Vitest test suite. |
| `npm run lint` | Run ESLint. |
| `npm run verify` | Run architecture/policy checks, lint, type-check, and tests. |
| `npm run smoke` | Build and run the Electron smoke scenarios. |

Build output is written to `out/`. `npm run build:dir` creates an unpacked app for the current platform. Release package scripts include `npm run pack:mac:arm64`, `npm run pack:linux:x64`, and `npm run pack:linux:arm64`.

## Project layout

- `src/main/` — Electron main-process services, project and SSH access, Git, terminals, and application coordination.
- `src/renderer/` — React-based workbench UI.
- `src/shared/` — Types and contracts shared between the main process and renderer.
- `scripts/` — Build, release, architecture, and smoke-test tooling.
- `test/` — Unit and UI tests.

## License

hvir is licensed under the [MIT License](LICENSE). Third-party dependency notices are collected in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
