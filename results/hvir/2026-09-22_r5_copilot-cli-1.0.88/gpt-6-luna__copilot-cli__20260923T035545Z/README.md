# hvir

hvir is a desktop workbench for software projects and coding-agent sessions. It brings project files, terminals, Git activity, and supported coding harnesses together in one workspace. Projects can be opened from the local machine or from SSH hosts configured in `~/.ssh/config`.

## Features

- Run multiple terminal sessions in resizable workspaces.
- Launch Claude Code, Codex, Pi, Gemini, GitHub Copilot, Cursor, a plain shell, or a custom command. These tools must be installed and available on the host; hvir does not bundle their services or credentials.
- Browse and edit project files, compare changes, inspect Git history, and perform supported branch and remote operations.
- Preview common document and web content in the workspace, including rendered Markdown and terminal-originated web panes.
- Keep track of coding sessions and provider context or usage information where available.
- Add inline document-review comments and hand off review text to supported harnesses.

## Requirements

- Node.js 24 or newer for development.
- npm and the native build tools needed by `node-gyp` for the terminal runtime modules.
- Git for Git integration.
- The command-line tools and authentication needed for whichever harnesses or SSH hosts you use.

## Getting started

```sh
npm ci
npm run dev
```

`npm ci` runs the project’s post-install setup, which prepares the Electron runtime and rebuilds native modules. Start hvir, register or open a project, and choose a local folder or a configured SSH host.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run hvir in Electron development mode. |
| `npm run build` | Type-check and build the application. |
| `npm test` | Run the Vitest suite. |
| `npm run lint` | Lint the project. |
| `npm run verify` | Run architecture checks, lint, type-check, and tests. |
| `npm run smoke` | Build a smoke-test app and run the configured smoke scenarios. |
| `npm run format:check` | Check formatting with Prettier. |

The terminal runtime is checked before development and production builds. If that check reports that the installed `ghostty-web` runtime does not match this checkout, run `npm ci` in the worktree and retry.

## Packaging

The repository currently defines these release package targets:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Artifacts are written to `dist/`. The macOS command builds a package installer; the Linux commands build Debian packages. Packaging may require platform-specific dependencies and signing configuration. A signed macOS package can be built with `npm run pack:mac:arm64:signed` when the required signing identity is configured.

## Project layout

- `src/main/` — Electron main-process services, project and SSH hosts, terminal sessions, Git integration, and harness adapters.
- `src/preload/` — the typed, restricted bridge between the main process and renderer.
- `src/renderer/` — the React workbench UI.
- `src/shared/` — shared contracts and types.
- `src/workers/` — utility-process workers.
- `scripts/` — development, architecture, smoke-test, and release tooling.

## License

hvir is licensed under the MIT License. See [LICENSE](LICENSE) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
