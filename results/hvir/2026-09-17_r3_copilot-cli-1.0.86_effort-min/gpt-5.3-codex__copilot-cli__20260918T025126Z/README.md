# hvir

hvir is an Electron + React desktop workbench for local and SSH-backed project work. It combines a file tree/viewer, multi-workspace Git tooling, integrated terminal sessions (via `ghostty-web` and `node-pty`), web panes, and document-review flows that can be delivered into configured harness providers.

## Highlights

- **Workspace-first project model** with local and remote (SSH) project hosts.
- **Integrated terminal runtime** with session/workspace lifecycle management.
- **Git workflows in-app** (status, history, graph, branches, worktrees, guarded mutations).
- **Document review pipeline** with preview/copy/insert/send-now delivery modes.
- **Provider harness integration** for Shell, Claude Code, Codex, Gemini, GitHub Copilot, Cursor, and custom command profiles.
- **Strong verification surface** with unit tests, Electron smoke scenarios, and release/packaging workflows.

## Requirements

- **Node.js 24+** (the repository enforces `engines.node >=24`)
- **npm** (lockfile-based install expected)
- Platform prerequisites for Electron/native modules as needed by your OS (the `postinstall` step rebuilds native pieces)

## Getting started

```bash
npm ci
npm run dev
```

The `postinstall` hook runs `install:runtime`, which installs Electron and rebuilds native/runtime dependencies required by hvir.

## Common commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Electron + Vite development workflow |
| `npm run build` | Typecheck and produce production bundles |
| `npm run preview` | Preview built output with Electron Vite |
| `npm test` | Run Vitest test suite |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run Node + web TypeScript checks |
| `npm run verify` | Run policy checks, lint, typecheck, and tests |
| `npm run smoke` | Run production smoke scenarios |

## Packaging

hvir uses `electron-builder` with project config in `electron-builder.yml`.

- **macOS (arm64 pkg):**
  - `npm run pack:mac:arm64`
  - `npm run pack:mac:arm64:signed`
- **Linux (deb):**
  - `npm run pack:linux:x64`
  - `npm run pack:linux:arm64`

Output artifacts are written to `dist/`.

## Project structure

| Path | Role |
|---|---|
| `src/main` | Electron main process runtime, IPC wiring, host/terminal/git/session orchestration |
| `src/preload` | Renderer bridge APIs |
| `src/renderer` | React UI (workbench, terminal, git, viewer, sessions, settings, dashboards) |
| `src/shared` | Cross-process types/contracts |
| `src/workers` | Utility-process workers (e.g., git/echo workers) |
| `test` | Vitest unit and integration-style tests |
| `scripts` | Verification, smoke, release, and project-management automation |
| `packages/rename-noreplace` | Local native helper package used by hvir |

## CI and release

GitHub Actions workflows in `.github/workflows` cover:

- pull request verification (`verify`, smoke on Linux/macOS, CodeQL),
- release preparation and packaging,
- real-host SSH acceptance checks,
- additional automation for project/release maintenance.

## License

MIT. See [LICENSE](./LICENSE). Third-party attribution and bundled-runtime notices are in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
