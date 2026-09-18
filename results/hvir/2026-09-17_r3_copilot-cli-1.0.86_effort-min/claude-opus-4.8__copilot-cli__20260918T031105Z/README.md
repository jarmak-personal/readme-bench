# hvir

hvir is a cross-platform desktop workbench for developers who drive their work
through terminals and AI coding agents. It brings terminals, a document viewer,
Git workflows, remote (SSH) workspaces, and embedded web panes into a single
Electron application, with first-class support for launching and observing
coding-agent "harnesses" such as Claude Code, Codex, GitHub Copilot, Gemini,
and Cursor.

## Features

- **Integrated terminals** — GPU-accelerated terminals powered by
  [ghostty-web](https://github.com/jarmak-personal/ghostty-web) with split,
  move, and multi-workspace layouts.
- **Coding-agent harnesses** — Launch, configure, and monitor agent CLIs
  (Claude Code, Codex, GitHub Copilot, Gemini, Cursor, or a plain shell) through
  configurable harness profiles, with session discovery and usage telemetry.
- **Document viewer & review** — Read and review files with syntax highlighting
  (Shiki), Markdown rendering (markdown-it), Mermaid diagrams, and CodeMirror
  merge/diff views.
- **Git workflow** — Inspect changes, switch branches, manage worktrees, and
  browse history through an in-app Git panel and graph view.
- **Remote workspaces** — Work against local or SSH-backed project hosts,
  including interactive SSH prompts.
- **Web panes** — Embed loopback HTTP targets (local dev servers, dashboards)
  directly beside your terminals and files.

## Requirements

- **Node.js** >= 24
- Platform build toolchain for native modules (`node-gyp`, `node-pty`,
  Electron rebuild). Native dependencies are rebuilt automatically on install.

## Getting started

```bash
npm install   # installs deps and rebuilds native runtime modules
npm run dev    # launch the app in development
```

## Common scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Run the app in development via electron-vite. |
| `npm run build` | Type-check and build the production bundles. |
| `npm run typecheck` | Type-check the node and web projects. |
| `npm run lint` | Lint the codebase with ESLint. |
| `npm run format` | Format the codebase with Prettier. |
| `npm test` | Run the unit test suite with Vitest. |
| `npm run test:watch` | Run tests in watch mode. |
| `npm run smoke` | Build and run the end-to-end smoke scenarios. |
| `npm run verify` | Run the full gate: seams, ADRs, architecture, lint, types, tests. |

### Packaging

Platform installers are produced with electron-builder, for example:

```bash
npm run pack:mac:arm64     # macOS (arm64) package
npm run pack:linux:x64      # Linux (x64) .deb
```

## Project structure

```
src/
  main/       Electron main process (windows, IPC, git, pty, harness, sessions)
  preload/    Preload bridge exposed to the renderer
  renderer/   React UI (terminals, viewer, git, workspaces, settings)
  shared/     Shared types and IPC contracts
  workers/    Background workers (git, echo)
packages/
  rename-noreplace/  Native helper module
scripts/      Build, smoke, architecture, and project-management tooling
test/         Test fixtures and suites
```

## Contributing

Git hooks and quality gates are provided. Install hooks with
`npm run hooks:install`, and run `npm run verify` before submitting changes.

## License

[MIT](LICENSE) © hvir contributors. See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for bundled third-party
attributions.
