# hvir

hvir is a desktop developer workbench for local and SSH-remote projects. It combines a Ghostty-based terminal, file tree, source viewer, Git tools, and AI coding-agent “harness” profiles (Claude Code, Codex, Gemini, custom commands) in one Electron app.

## Features

- **Projects & workspaces** — Open local folders or connect over SSH; persist layout and sessions per project.
- **Terminal** — Native PTY sessions with Ghostty Web, splits, themes, search, and session recovery.
- **Harness profiles** — Launch and resume coding agents with provider-specific capabilities (resume, fork, context pressure, document-review insert).
- **Viewer** — Syntax-highlighted source (Shiki/CodeMirror), diffs, blame, markdown/Mermaid, CSV/JSON, HTML preview.
- **Git** — History graph, changes, branch switch, fetch/pull, worktrees.
- **Document review** — Capture review comments and deliver them into a harness session.
- **Web panes** — In-app dashboards and loopback HTTP views.
- **Workbench health** — Diagnostics, reports, and recovery when a renderer or session fails.

## Requirements

- Node.js **24+**
- npm
- Native build tools (for `node-pty` and `@hvir/rename-noreplace`)
- Git on the PATH for Git features
- Optional: SSH config/keys for remote hosts; Claude/Codex/Gemini CLIs for harness providers

Packaged builds: **macOS** (`.pkg`) and **Linux** (`.deb`).

## Develop

```bash
npm install
npm run hooks:install   # optional git hooks
npm run dev
```

`npm install` rebuilds native modules against Electron.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Electron + Vite development |
| `npm run build` | Typecheck and production bundle |
| `npm test` | Vitest |
| `npm run lint` | ESLint |
| `npm run typecheck` | Node + web TypeScript |
| `npm run verify` | Seams, ADRs, architecture, lint, typecheck, tests |
| `npm run smoke` | Headless smoke scenarios |
| `npm run pack:mac:arm64` | macOS pkg |
| `npm run pack:linux:x64` / `pack:linux:arm64` | Linux deb |

## Layout

```
src/main/        Electron main process (hosts, PTY, Git, IPC, harness)
src/preload/     Preload bridge
src/renderer/    React workbench UI
src/shared/      Types and contracts shared across processes
src/workers/     Git and other worker protocols
packages/        Native addons (e.g. rename-noreplace)
test/            Unit and contract tests
scripts/         Build, smoke, packaging, project-management CLIs
```

Architecture decisions live as ADRs in-repo and are checked by `npm run check-adrs`.

## License

MIT. See [LICENSE](LICENSE) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
