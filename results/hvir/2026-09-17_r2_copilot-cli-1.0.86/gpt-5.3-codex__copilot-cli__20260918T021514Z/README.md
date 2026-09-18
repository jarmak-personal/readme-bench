# hvir

hvir is an Electron + React desktop workbench for software projects, with local and SSH-backed workspaces, integrated terminals, source browsing, and Git workflows in one app.

## Highlights

- **Project workspaces**: open, switch, and monitor project roots with file-tree and watch support.
- **Terminal runtime**: managed terminal sessions backed by `node-pty` and `ghostty-web`.
- **Code and content viewing**: file viewer flows including markdown/document-review surfaces.
- **Git integration**: workspace-aware Git actions and graph/panel UI paths.
- **Remote host support**: SSH host catalog, prompts, trust handling, and remote file/process operations.
- **Hardened IPC model**: typed contract between renderer and main, exposed through a constrained preload bridge (`window.hvir`).

## Tech stack

- **Runtime**: Electron 43
- **UI**: React 19 + TypeScript
- **Build tooling**: electron-vite + Vite
- **Testing**: Vitest
- **Lint/format**: ESLint + Prettier

## Requirements

- **Node.js**: `>=24` (enforced by `package.json`)
- A platform supported by Electron and the packaging targets used in this repo (macOS/Linux are configured)

## Quick start

```bash
npm ci
npm run dev
```

`postinstall` runs `npm run install:runtime`, which rebuilds required native modules for the Electron ABI. If dependencies drift from this checkout, rerun `npm ci`.

## Common scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Electron app in development mode |
| `npm run build` | Type-check and build main/preload/renderer bundles |
| `npm run preview` | Preview built app with electron-vite |
| `npm test` | Run Vitest suites |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks (node + web configs) |
| `npm run verify` | Full local gate: seams, ADR checks, architecture check, lint, typecheck, tests |
| `npm run smoke` | Build smoke mode and run Electron smoke scenarios |

## Repository layout

```text
src/
  main/      Electron main process runtime, orchestration, IPC handlers
  preload/   Typed bridge to renderer (`window.hvir`)
  renderer/  React workbench UI
  shared/    Cross-process contracts, shared types, and utilities
  workers/   Utility-process workers (echo/git)
scripts/     Build, release, policy, and smoke/acceptance automation
test/        Unit and integration-style Vitest suites
build/       Packaging assets and platform resources
```

## Packaging

Electron Builder is configured via `electron-builder.yml`. The repository includes platform-focused packaging scripts such as:

- `npm run pack:mac:arm64`
- `npm run pack:linux:x64`
- `npm run pack:linux:arm64`

## License

MIT — see [LICENSE](./LICENSE).
