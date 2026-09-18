# hvir

hvir is a desktop workbench, built on Electron, for working with AI coding agent
CLIs. It brings agent sessions, an integrated terminal, git tooling, and document
review into a single application so you can launch, monitor, and review the work
of coding agents without juggling separate windows.

## Features

- **Multi-agent harness** — launch and manage sessions for [Claude Code], [Codex],
  [Gemini CLI], [GitHub Copilot CLI], [Cursor CLI], Pi, a plain shell, or any custom
  command, each with its own launch profile and resume behavior.
- **Integrated terminal** — terminal rendering via `ghostty-web`, backed by native
  ptys (`node-pty`), with split panes, themes, and per-session identity.
- **Git workflow** — branch switching, worktrees, fetch/pull, and change review
  built directly into the workbench.
- **Document review** — a markdown/Mermaid/diff viewer with syntax highlighting
  (Shiki) for reviewing agent-authored changes.
- **Web panes** — embedded browser dashboards alongside terminal sessions.
- **Remote workspaces** — connect to projects over SSH in addition to local
  folders.
- **Sessions & diagnostics** — session tracking, health checks, and attention
  badges across open workspaces.

[Claude Code]: https://www.anthropic.com/claude-code
[Codex]: https://github.com/openai/codex
[Gemini CLI]: https://github.com/google-gemini/gemini-cli
[GitHub Copilot CLI]: https://github.com/github/copilot-cli
[Cursor CLI]: https://cursor.com/cli

## Requirements

- Node.js >= 24
- macOS (Apple Silicon) or Linux (x64/arm64) — hvir packages a `.pkg` for macOS
  and a `.deb` for Linux; there is currently no Windows build.
- A native build toolchain (Python, make, a C/C++ compiler) — installation
  compiles native modules (`node-pty`, the bundled `rename-noreplace` binding)
  against Electron's ABI.

## Getting started

```bash
git clone <repo-url>
cd hvir
npm install     # also rebuilds native modules for Electron via postinstall
npm run dev     # launches the app in development mode
```

## Building & packaging

| Command | Description |
| --- | --- |
| `npm run build` | Type-check and build the main/preload/renderer bundles. |
| `npm run build:dir` | Build and produce an unpacked app in `dist/` for local testing. |
| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg`. |
| `npm run pack:linux:x64` / `pack:linux:arm64` | Build a Linux `.deb`. |

## Testing & quality gates

| Command | Description |
| --- | --- |
| `npm test` | Unit tests (Vitest). |
| `npm run test:mutation` | Mutation testing (Stryker). |
| `npm run lint` / `npm run format` | ESLint / Prettier. |
| `npm run typecheck` | TypeScript project checks (node + web). |
| `npm run check-seams` / `check-adrs` / `architecture:check` | Architectural governance checks (module boundaries, ADR lifecycle, dependency hotspots). |
| `npm run smoke` | End-to-end smoke scenarios against a built app. |
| `npm run verify` | Full gate (seams, ADRs, architecture, lint, typecheck, tests) used in CI. |

Run `npm run hooks:install` to install a pre-push hook that runs `typecheck`
and a platform-appropriate smoke test before every push.

## Project structure

```
src/
  main/        Electron main process: harness providers, pty, git, project hosts (local + SSH), workers, IPC
  preload/     Preload bridge exposed to the renderer
  renderer/    React UI: terminal, viewer, workspaces, dashboards, sessions, settings
  shared/      Types and utilities shared across processes
  workers/     Utility-process workers (git, echo)
packages/      Private native modules (e.g. rename-noreplace)
scripts/       Dev tooling: architecture checks, release automation, smoke runner, GitHub project sync
test/          Vitest suites
```

## License

MIT — see [LICENSE](LICENSE). Third-party notices are documented in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
