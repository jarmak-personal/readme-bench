# hvir

hvir is a desktop workbench built with Electron, TypeScript, and React. It brings
terminals, git, file viewing, document review, and agent sessions into a single
window, with support for local and remote (SSH) workspaces.

> **Status:** version 0.2.3, private and pre-release. Packaged builds are produced
> for macOS (`pkg`) and Linux (`deb`).

## Features

- **Terminals:** PTY-backed terminals (`node-pty`) rendered with `ghostty-web`,
  including themes, splits, and moving between panes.
- **Git:** repository status and workflows, with git work handled in a worker thread.
- **Viewers:** file viewing and content rendering, including Markdown
  (`markdown-it`), syntax highlighting (`shiki`), Mermaid diagrams, and CodeMirror-based
  editing and diffs.
- **Document review:** review workflow for documents within a workspace.
- **Filename search** and a file tree for each project.
- **Web pane:** embedded web content inside the workbench.
- **Remote workspaces:** SSH-based workspaces via `ssh2` and `~/.ssh/config` parsing.
- **Sessions and harness profiles:** tracking and configuration for agent harness sessions.
- **Diagnostics and health:** runtime health reporting and diagnostic reports.

## Requirements

- Node.js 24 or later (`engines.node` is `>=24`)
- npm
- A C/C++ toolchain for native modules (`node-pty`, `node-gyp`)
- macOS or Linux. Linux smoke tests need a display, or `xvfb-run`.

## Getting started

```bash
git clone <repository-url> hvir
cd hvir
npm install        # postinstall fetches Electron and rebuilds native modules
npm run dev        # start the app in development mode
```

`npm install` runs a postinstall step (`install:runtime`) that installs the Electron
binary, builds the private `@hvir/rename-noreplace` addon, and rebuilds `node-pty`
against Electron's ABI. If that step fails, check your compiler setup and rerun `npm install`.

Git hooks are optional. To install them, run:

```bash
npm run hooks:install
```

The `pre-push` hook runs typechecking and the local Electron smoke test.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run the app with electron-vite in development mode |
| `npm run build` | Typecheck, then build main, preload, and renderer into `out/` |
| `npm run build:dir` | Build and create an unpacked app with `electron-builder --dir` |
| `npm run pack:mac:arm64` | Build a macOS arm64 `pkg` installer |
| `npm run pack:linux:x64` | Build an x64 `deb` package |
| `npm run typecheck` | Typecheck the node and web tsconfig projects |
| `npm run lint` | Run ESLint |
| `npm run format` / `format:check` | Format with Prettier / check formatting |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:mutation` | Run Stryker mutation tests |
| `npm run smoke` | Build the smoke variant and run the Electron smoke scenarios |
| `npm run verify` | Run seam, ADR, and architecture checks, then lint, typecheck, and tests |

## Project layout

```
src/
  main/       Electron main process: IPC, PTY, git, workspaces, SSH, viewers, windows
  preload/    Context-bridge preload scripts exposed to the renderer
  renderer/   React UI (workbench, terminal, viewer, git, settings, themes)
  shared/     Types and contracts shared across processes (IPC, diagnostics, git, etc.)
  workers/    Worker-thread entry points (git, echo)
test/         Vitest test suites
scripts/      Build, release, smoke, architecture, and project-management tooling
build/        App icons, entitlements, installer scripts, native resources
packages/
  rename-noreplace/  Node-API addon for atomic no-replace renames
```

Build output goes to `out/` and packaged artifacts to `dist/`. Both are git-ignored.

## Testing

- **Unit and integration tests:** `npm test` (Vitest, `happy-dom` for DOM tests).
- **Mutation testing:** `npm run test:mutation` (Stryker, configured in `stryker.config.json`).
- **Smoke tests:** `npm run smoke` runs real Electron scenarios. Use
  `npm run smoke:scenario -- <name>` to run a single scenario.
- **Architecture checks:** `npm run architecture:check` and `npm run check-seams`.

CI runs on pull requests to `main` and `epic/**` (see `.github/workflows/ci.yml`).

## Packaging

Packaging uses `electron-builder` with the configuration in `electron-builder.yml`.
Third-party notices are bundled from `THIRD_PARTY_NOTICES.md`. Release-specific
scripts are in `scripts/` (for example `assemble-native-release.mjs`,
`render-native-installer.mjs`, and `prepare-release-linux-package.mts`).

## Contributing

1. Create a branch from `main`.
2. Run `npm run verify` before opening a pull request.
3. Keep changes focused, and update tests and docs alongside code changes.

## License

MIT. See [LICENSE](LICENSE). Third-party components are listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
