# hvir

hvir is a desktop workbench for running coding-agent CLIs and terminals across the
git worktrees of your projects. It is built with Electron, React, and TypeScript,
and ships for macOS and Linux.

## What it does

- **Projects and worktrees** — register local or remote project folders; hvir
  discovers their git worktrees and treats each one as a workspace you can switch
  between, open terminals in, and prune when stale.
- **Terminals** — a Ghostty-based terminal (via [ghostty-web]) backed by
  `node-pty` on the local host and `ssh2` on remote hosts, with splits, moves
  across worktrees, themes, and layout persistence.
- **Harness profiles** — launch coding-agent CLIs in managed terminals. Bundled
  providers include Claude Code, Codex, Gemini CLI, GitHub Copilot CLI,
  Cursor CLI, Pi, and a plain Shell (the default), plus fully custom commands.
  Providers are probed for capabilities such as session resume/fork and
  context-window telemetry, which drives the in-app context-pressure meter.
- **Sessions overview** — a cross-project dashboard of agent sessions with usage
  telemetry, terminal previews, and the ability to reopen or resume sessions.
- **Git integration** — change panel, branch handling, git graph, fetch/pull, and
  worktree pruning, executed in a sandboxed worker process behind an explicit
  mutation-authorization layer.
- **File viewer and document review** — tabbed viewer with Markdown (including
  task lists and Mermaid diagrams), Shiki syntax highlighting, CodeMirror-based
  diffs, and sandboxed HTML preview; document review comments can be composed and
  delivered straight into a harness's prompt.
- **Remote workspaces over SSH** — `ssh_config`-aware host handling, interactive
  auth prompts, and remote-aware features such as image paste.

[ghostty-web]: https://github.com/jarmak-personal/ghostty-web

## Requirements

- Node.js >= 24 and npm
- A native build toolchain (`node-gyp` requirements: Python plus a C/C++
  compiler) — `npm install` rebuilds `node-pty` and the bundled
  `@hvir/rename-noreplace` addon against Electron's ABI

## Getting started

```sh
npm install        # installs dependencies and rebuilds native modules
npm run dev        # start the app in development mode (electron-vite)
```

Optional, for contributors:

```sh
npm run hooks:install   # install the repository git hooks
```

## Common scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run the app with hot reload |
| `npm test` / `npm run test:watch` | Unit tests (Vitest) |
| `npm run lint` / `npm run format` | ESLint / Prettier |
| `npm run typecheck` | TypeScript checks for node and web configs |
| `npm run verify` | Full gate: seam checks, ADR checks, architecture checks, lint, typecheck, tests |
| `npm run test:mutation` | Mutation testing (Stryker) |
| `npm run build` | Typecheck and build production bundles |
| `npm run smoke` | Build a smoke bundle and drive scripted end-to-end scenarios |
| `npm run pack:mac:arm64` | Package a macOS `.pkg` |
| `npm run pack:linux:x64` / `pack:linux:arm64` | Package Linux `.deb` installers |

## Repository layout

```
src/main/       Electron main process: projects, worktrees, PTYs, harnesses,
                git engine, sessions projection, IPC, diagnostics
src/preload/    Preload bridge exposed to the renderer
src/renderer/   React UI: workbench, terminals, viewer, git panels, sessions
src/shared/     Types and IPC contracts shared across processes
src/workers/    Utility-process workers (e.g. the git worker)
packages/       @hvir/rename-noreplace native addon
scripts/        Development, CI, smoke, packaging, and release tooling
test/           Vitest suites
build/          Packaging resources (icons, entitlements, native helpers)
```

## License

MIT — see [LICENSE](LICENSE). Bundled third-party notices are listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
