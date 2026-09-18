# hvir

**hvir** is a desktop developer workbench built with Electron. It combines project workspaces, a native terminal runtime, Git tooling, file viewing, SSH remote hosts, and AI coding-harness launches in one application.

## Features

- **Workbench layout** — multi-pane workspace with project bar, file tree, viewer, Git panel, terminals, and sessions overview
- **Terminals** — PTY-backed sessions via [ghostty-web](https://github.com/jarmak-personal/ghostty-web), splits, themes, search, recovery, and attention indicators
- **Local & SSH projects** — open local folders or remote hosts over SSH with file access and prompts
- **File tree & operations** — browse, create, rename, move, copy, delete, and search project entries
- **Viewer** — source, diff, rendered Markdown/Mermaid, and image tabs with find and blame support
- **Git** — status, graph, worktrees, fetch/pull, and related workspace actions (worker-backed)
- **Harness profiles** — launch and manage coding agents (Claude Code, Codex, Cursor, Gemini, GitHub Copilot, shell, and more)
- **Document review** — review workflows integrated with harness insert/send contracts
- **Web panes** — embedded web views for dashboards and related tooling
- **Diagnostics** — workbench health, diagnostic reports, and runtime evidence collection

## Requirements

- **Node.js** ≥ 24
- **npm** (lockfile present)
- Platform support for packaging: **macOS** (pkg) and **Linux** (deb)
- Native build tooling for `node-pty` / Electron rebuild (and optional `@hvir/rename-noreplace`)

## Quick start

```bash
npm install
npm run dev
```

`postinstall` installs the Electron runtime and rebuilds native modules (`node-pty`, rename-noreplace).

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Start electron-vite development app |
| `npm run build` | Typecheck + production build (`out/`) |
| `npm run preview` | Preview the production build |
| `npm test` | Run Vitest unit/integration tests |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`node` + `web` projects) |
| `npm run format` / `format:check` | Prettier write / check |
| `npm run verify` | Seams, ADRs, architecture hotspots, lint, typecheck, tests |
| `npm run smoke` | Build smoke mode and run smoke scenarios |
| `npm run pack:mac:arm64` | macOS arm64 `.pkg` |
| `npm run pack:linux:x64` / `pack:linux:arm64` | Linux `.deb` packages |

Additional scripts cover SSH acceptance, package smoke, architecture reports, Ghostty web updates, and project-management tooling. See `package.json` for the full list.

## Project layout

```
src/
  main/       Electron main process (IPC, PTY, Git, SSH, harness, windows)
  preload/    Preload bridge
  renderer/   React UI (workbench, terminals, viewer, settings)
  shared/     Cross-boundary types and contracts
  workers/    Worker entrypoints (e.g. Git)
packages/
  rename-noreplace/   Optional native atomic rename helper
scripts/              Build, smoke, release, architecture, project tooling
test/                 Vitest suite and fixtures
build/                Icons, entitlements, packaging assets
```

Built with **electron-vite**, **React 19**, **TypeScript**, and **Vitest**. Packaging uses **electron-builder**.

## Development notes

- Install git hooks (optional): `npm run hooks:install`
- Architecture and ADR checks: `npm run check-seams`, `npm run check-adrs`, `npm run architecture:check`
- Mutation testing: `npm run test:mutation` (Stryker)
- Smoke builds use a dedicated mode (`build:smoke`) and scenario runner under `scripts/`

## License

MIT © hvir contributors

Third-party notices (including terminal runtime and native binding provenance) are in [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md).
