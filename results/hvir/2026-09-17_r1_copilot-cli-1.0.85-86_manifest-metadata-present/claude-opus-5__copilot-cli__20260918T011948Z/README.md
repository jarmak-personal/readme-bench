# hvir

A lightweight, view-first workbench for agentic development.

hvir is an Electron desktop app that puts terminals, files, diffs, git, and web dashboards
side by side in one window. It is built for workflows where coding agents run in long-lived
terminal sessions and you need to watch, review, and steer them without losing context.

- **Platforms:** macOS (arm64, `.pkg`) and Linux (x64/arm64, `.deb`)
- **License:** MIT
- **Status:** private/pre-release — versioned at `0.2.x`

## Features

| Surface              | What it does                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Terminal**         | Multi-session terminals with splits, profiles, fork/resume, crash recovery, attention tracking, and clickable file/web links.   |
| **Viewer**           | Source, diff, blame, rendered Markdown (Mermaid + task lists), search/go-to-line, split tabs, and large-file fallback.          |
| **Git**              | Branch controls, changes and history views, commit details, fetch/pull/switch, and graph navigation.                           |
| **Sessions**         | A global overview of live terminal and workspace sessions, with jump-to-session from the list.                                  |
| **Workspaces**       | Project tabs and workspace switching, including remote projects over SSH.                                                       |
| **Document review**  | Inline review threads on files, with save, revalidate, preview, and send workflows.                                             |
| **Web pane**         | Embedded web views for dashboards and agent UIs, with navigation controls and external-browser handoff.                         |
| **File tree**        | Navigation plus create/delete/move/copy, reveal, and path-copy actions.                                                         |
| **Health**           | Workbench health dialog surfacing renderer/main faults and local diagnostic evidence.                                           |
| **Settings**         | Terminal, theme, appearance, git, and keybinding preferences, plus harness profile management.                                  |

## Getting started

### Prerequisites

- **Node.js >= 24**
- A C/C++ toolchain for `node-gyp` (Xcode Command Line Tools on macOS; `build-essential` on Linux)
- Linux only: GTK/NSS runtime libraries (`libgtk-3-0`, `libnss3`, `libsecret-1-0`, `libxss1`, `libxtst6`)

### Install and run

```bash
npm ci      # postinstall rebuilds node-pty and the rename-noreplace native addon
npm run dev # launches the app via electron-vite
```

`predev`/`prebuild` run `scripts/check-terminal-runtime.mts`, which verifies that the pinned
`ghostty-web` terminal runtime matches the contract the app expects.

### Build and package

```bash
npm run build            # typecheck + electron-vite build
npm run build:dir        # unpacked app directory
npm run pack:mac:arm64   # macOS .pkg
npm run pack:linux:x64   # Linux .deb (also :arm64)
```

## Architecture

hvir follows a strict process split, mechanically enforced rather than documented-by-convention:

- **`src/main`** — composition root (`src/main/index.ts`). Owns windows, the project registry and
  coordinator, host catalog, PTY supervisor, git/echo workers, and feature coordinators.
- **`src/preload`** — the only place allowed to touch `ipcRenderer`; exposes the typed `window.hvir` bridge.
- **`src/renderer/src`** — React 19 UI, one folder per surface (`terminal`, `viewer`, `git`, `sessions`,
  `workspaces`, `document-review`, `dashboards`, `settings`, `health`, …).
- **`src/shared`** — IPC contracts. `src/shared/ipc.ts` composes per-feature contracts into typed
  invoke/send/event maps; `src/main/ipc/authority-router.ts` registers them and `src/main/ipc/features/*`
  implements them against narrow ports.
- **`src/workers`** — off-main-thread work (`git-worker`, `echo-worker`).

**Seam rules.** ESLint (`eslint.config.mjs`) and `scripts/check-seams.sh` both enforce the boundaries:
host primitives (`fs`, `child_process`, `chokidar`, `node-pty`) only in `src/main/project-host/local-host.ts`,
`ipcRenderer` only in `src/preload`, `ipcMain` only in the authority router, `ssh2` only in the SSH host
adapter, `spawnPty()` only in the PTY supervisor, and bundled harness IDs only under `src/main/harness/`.
`npm run architecture:check` enforces module-direction and hotspot budgets, and `npm run check-adrs`
validates architecture decision records under `docs/adr/` against `docs/design.md`.

### Key technologies

[Electron](https://www.electronjs.org/) · [electron-vite](https://electron-vite.org/) · React 19 ·
TypeScript · [ghostty-web](https://github.com/jarmak-personal/ghostty-web) (terminal) ·
[node-pty](https://github.com/microsoft/node-pty) · [CodeMirror 6](https://codemirror.net/) ·
[shiki](https://shiki.style/) · [mermaid](https://mermaid.js.org/) · [ssh2](https://github.com/mscdex/ssh2) ·
`@hvir/rename-noreplace` (local native addon for atomic no-replace renames).

## Development

```bash
npm run verify        # check-seams + check-adrs + architecture:check + lint + typecheck + test
npm test              # vitest run (npm run test:watch for watch mode)
npm run typecheck     # tsconfig.node.json + tsconfig.web.json
npm run lint          # eslint .
npm run format        # prettier --write .
npm run hooks:install # install the pre-push hook (typecheck + platform smoke)
```

### Test layers

- **Unit** — Vitest over `test/**/*.test.{ts,tsx}` (`vitest.config.ts`).
- **Smoke** — real Electron scenario runs: `npm run smoke` (all scenarios), `npm run smoke:macos`,
  or `npm run smoke:scenario <name>` for one of `pty-native`, `viewer-content`, `git-workflow`,
  `workspace-remote`, `web-pane`, `renderer-recovery`, `document-review`, `terminal-lifecycle`, and more.
- **Packaged smoke** — `npm run smoke:linux:installed`, `npm run smoke:macos:installed`.
- **SSH acceptance** — `npm run acceptance:ssh:macos`, `npm run acceptance:ssh:real-host`.
- **Performance / stress** — `npm run performance:capacity`, `npm run smoke:isolation`.
- **Mutation** — `npm run test:mutation` (Stryker).

CI (`.github/workflows/ci.yml`) runs `npm run verify` plus Linux and macOS smoke suites; the pre-push
hook runs typecheck and the local-platform smoke suite (using `xvfb-run` on headless Linux).

## Contributing

Run `npm run verify` before opening a pull request, and `npm run hooks:install` once so pushes are
gated locally. Changes that cross an architectural seam should come with an ADR under `docs/adr/`.

## License

MIT — see [LICENSE](LICENSE). Bundled dependency notices are in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
