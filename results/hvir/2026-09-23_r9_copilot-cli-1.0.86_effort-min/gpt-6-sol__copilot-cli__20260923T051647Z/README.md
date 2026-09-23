# hvir

hvir is a desktop workspace for working on local and SSH-hosted projects. It brings project files, Git worktrees, terminals, code review, and developer tools into one Electron application.

## Features

- Browse and edit project files, view rendered Markdown and images, and inspect diffs.
- Work with Git changes, branches, and worktrees.
- Run multiple terminals, including sessions for supported coding assistants (Claude Code, Codex, Pi, Gemini, GitHub Copilot, and Cursor) or a custom command.
- Connect to remote projects over SSH and manage local projects in the same workspace.
- Open web panes alongside the editor and terminals.

Coding assistants are launched through their own command-line tools; install and configure the tools you want to use separately.

## Getting started

You need Node.js 24 or newer and npm. Building native dependencies also requires a working C/C++ build toolchain and Python for `node-gyp`. The app is developed for macOS and Linux; package targets are macOS (`.pkg`) and Linux (`.deb`).

```sh
npm ci
npm run dev
```

`npm ci` runs the postinstall step, which builds the native filesystem helper and prepares `node-pty` for Electron. Once the app opens, add a local project folder or configure an SSH host to open a remote project.

## Development

| Command | Purpose |
| --- | --- |
| `npm run build` | Type-check and build the Electron application |
| `npm run build:dir` | Build an unpacked app in `dist/` |
| `npm run pack:mac:arm64` | Build a macOS arm64 package |
| `npm run pack:linux:x64` | Build a Linux x64 `.deb` |
| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb` |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check Node and renderer TypeScript |
| `npm test` | Run the Vitest suite |
| `npm run verify` | Run policy checks, lint, type checks, and tests |

The app uses Electron with a React/TypeScript renderer. Main-process code lives in `src/main`, the UI in `src/renderer`, preload bindings in `src/preload`, and shared contracts in `src/shared`. See `package.json` for additional smoke and acceptance-test commands.

## License

MIT; see [LICENSE](LICENSE). Third-party attribution is in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
