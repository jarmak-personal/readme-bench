# hvir

A lightweight, view-first workbench for agentic development.

hvir is an Electron desktop application that brings terminals, git workflows,
SSH remote workspaces, and document/web review panes together into a single,
fast, keyboard-driven workbench designed for working alongside coding agents.

## Features

- **Native terminal** — GPU-accelerated terminal powered by
  [ghostty-web](https://github.com/jarmak-personal/ghostty-web) and
  [node-pty](https://github.com/microsoft/node-pty).
- **Git workflow integration** — Inspect diffs, review changes, and manage
  work directly from the workbench.
- **SSH remote workspaces** — Connect to and work against remote hosts.
- **Document & web review** — Markdown (with Mermaid diagram support) and web
  content viewers alongside your terminals.
- **Workspace-first UI** — Split, arrange, and manage terminals and viewers
  in a single project workbench.

## Requirements

- Node.js `>=24`
- macOS or Linux (native builds are provided for both)

## Getting started

```bash
npm install
npm run dev
```

`npm install` runs a `postinstall` step that provisions the bundled terminal
runtime and rebuilds native modules (`node-pty`) for Electron via
`electron-rebuild`.

## Development scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Launch the app in development mode (`electron-vite dev`). |
| `npm run build` | Type-check and build the app for production. |
| `npm run typecheck` | Type-check the main/node and web/renderer projects. |
| `npm run lint` | Lint the codebase with ESLint. |
| `npm run format` / `format:check` | Format (or check formatting) with Prettier. |
| `npm test` | Run the unit/integration test suite with Vitest. |
| `npm run test:watch` | Run tests in watch mode. |
| `npm run test:mutation` | Run mutation testing with Stryker. |
| `npm run verify` | Run the full local verification gate (seams, ADRs, architecture, lint, typecheck, tests). |
| `npm run smoke` | Build a smoke bundle and run end-to-end smoke scenarios. |

Run `npm run verify` before submitting changes; it mirrors the checks used in
CI (architecture/seam/ADR conformance, linting, type-checking, and tests).

## Packaging

Platform-specific packaging is handled via `electron-builder`:

```bash
npm run pack:mac:arm64      # macOS (arm64)
npm run pack:linux:x64      # Linux (x64, .deb)
npm run pack:linux:arm64    # Linux (arm64, .deb)
```

## Project structure

```
src/
  main/        # Electron main process (windows, IPC, terminal/pty, git, ssh, workspace)
  preload/     # Preload scripts bridging main and renderer
  renderer/    # React-based UI (workbench, viewers, terminal presentation)
  shared/      # Code shared across processes
  workers/     # Background worker processes
scripts/       # Build, release, smoke-test, and project-management tooling
packages/      # Local workspace packages (e.g. rename-noreplace native module)
test/          # Test suites
```

## License

MIT — see [LICENSE](./LICENSE). See [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)
for third-party license information.
