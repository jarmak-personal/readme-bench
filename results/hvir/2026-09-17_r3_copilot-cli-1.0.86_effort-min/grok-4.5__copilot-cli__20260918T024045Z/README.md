# hvir

**hvir** is an Electron desktop workbench for local and remote software development. It combines a native-feeling terminal, project file tree, source/diff viewers, Git tooling, SSH workspaces, and optional AI coding harnesses in one multi-window app.

| | |
| --- | --- |
| **Version** | 0.2.3 |
| **License** | MIT |
| **Runtime** | Node.js ≥ 24, Electron |
| **Platforms** | macOS (pkg, arm64), Linux (deb, x64/arm64) |

## Features

- **Workbench layout** — Projects bar, file tree, tabbed viewers, terminal splits, and session surfaces with persistent layout.
- **Terminal** — PTY-backed sessions via `node-pty` and [ghostty-web](https://github.com/jarmak-personal/ghostty-web), with themes, search, recovery, and attention badges.
- **Projects & files** — Open local folders or SSH hosts; browse, create, rename, move, delete, and reveal entries; filename search.
- **Viewers** — Source (CodeMirror), rendered Markdown (with Mermaid/task lists), diffs, images, and HTML preview.
- **Git** — Workspace status, graph, branch switch, fetch/pull, worktrees, and related mutations via a worker host.
- **SSH** — Remote project hosts with trust prompts, file access, and real-host acceptance coverage.
- **Harness profiles** — Launch and manage coding-agent shells (Claude Code, Codex, Cursor, Gemini, GitHub Copilot, Pi, plain shell) with profile settings and probes.
- **Sessions & health** — Session overview/detail, workbench health, and diagnostic reports.
- **Document review & web panes** — Review workflows and embedded web surfaces for dashboards or local tools.

## Requirements

- **Node.js** 24 or newer
- Native build tooling for `node-pty` and optional `@hvir/rename-noreplace` (Xcode CLT on macOS; build-essential equivalents on Linux)
- On Linux packaging targets, GTK/NSS and related runtime libs as listed in `electron-builder.yml`

## Quick start

```bash
npm install
npm run dev
```

`postinstall` installs the Electron runtime and rebuilds native modules (`node-pty`, rename binding).

### Common scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development app (`electron-vite dev`) |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview built app |
| `npm test` | Vitest unit/integration suite |
| `npm run lint` | ESLint |
| `npm run typecheck` | Node + web TypeScript checks |
| `npm run format` / `format:check` | Prettier write / check |
| `npm run verify` | Seams, ADRs, architecture hotspots, lint, typecheck, tests |
| `npm run smoke` | Build smoke mode and run core smoke scenarios |
| `npm run pack:mac:arm64` | macOS arm64 `.pkg` |
| `npm run pack:linux:x64` / `pack:linux:arm64` | Linux `.deb` packages |

Project/planning helpers live under `npm run project:*` and `npm run issue:*` (see `package.json` and `scripts/project-management/`).

## Repository layout

```
src/
  main/       Electron main process (IPC, PTY, Git, SSH, harness, windows)
  preload/    Preload bridge
  renderer/   React workbench UI
  shared/     Shared types and IPC contracts
  workers/    Background workers (e.g. Git)
packages/
  rename-noreplace/   Optional native atomic rename binding
scripts/              Build, smoke, architecture, release, project tooling
test/                 Vitest suites and fixtures
build/                Icons, entitlements, package scripts
```

Stack highlights: **electron-vite**, **React 19**, **TypeScript**, **Vitest**, **electron-builder**, **ssh2**, **CodeMirror**, **Shiki**, **Mermaid**.

## Development notes

- Prefer `npm run verify` before large changes; architecture seam and ADR checks are part of the gate.
- Smoke scenarios exercise PTY, viewers, Git, remote workspace, web pane, sessions, terminal lifecycle, and related contracts (`scripts/run-smoke-scenarios.mts`).
- Git hooks: `npm run hooks:install`.
- Third-party terminal and binding notices: [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).

## Packaging

- **macOS**: `pack:mac:arm64` (optional signed variant via `pack:mac:arm64:signed`); product name `hvir`, app id `dev.hvir.app`.
- **Linux**: deb packages with AppArmor profile and install/remove hooks under `build/linux/`.
- Native release assembly: `assemble:native-release` / `render:native-installer`.

## Contributing

1. Install dependencies and run `npm run dev`.
2. Keep changes covered by tests where behavior is non-trivial.
3. Run `npm run verify` (and relevant smoke scenarios) before opening a PR.
4. Follow existing module boundaries under `src/main`, `src/renderer`, and `src/shared`.

## License

MIT © hvir contributors — see [LICENSE](./LICENSE).
