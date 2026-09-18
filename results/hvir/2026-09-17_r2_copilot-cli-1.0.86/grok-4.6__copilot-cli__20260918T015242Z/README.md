# hvir

hvir is a desktop developer workbench for local and SSH remote projects. It combines a file tree, source and rendered viewers, Git tooling, Ghostty-based terminals, and launch profiles for coding agents in one Electron app.

Version **0.2.3**. macOS (pkg) and Linux (deb) are the supported packaging targets.

## Features

- **Workspaces** — open local folders or connect over SSH; paths stay host-qualified so the same workbench can span machines
- **Files** — tree navigation, filename search, create/rename/move/delete, and reveal in the system file manager
- **Viewer** — CodeMirror source, diffs, Git blame, find/go-to-line, and rendered Markdown (including Mermaid and task lists)
- **Git** — working-tree changes, graph, branch operations, and worktrees when the folder is a repository
- **Terminals** — native PTY sessions with splits, themes, search, and persistence; rendering uses [ghostty-web](https://github.com/jarmak-personal/ghostty-web)
- **Harnesses** — bundled launch profiles for shell, Claude Code, Codex, Gemini, GitHub Copilot, Cursor, and Pi
- **Document review** — review chrome that can insert or send content into a trusted harness composer
- **Sessions** — overview of terminal and agent sessions across workspaces
- **Web panes** — in-app loopback HTTP views for local dashboards

## Requirements

- **Node.js 24+**
- A native toolchain for `node-gyp` (needed by `node-pty` and `@hvir/rename-noreplace`)
- **macOS** or **Linux** (the no-replace rename binding is Darwin/Linux only)

## Development

```bash
npm ci
npm run hooks:install   # optional local git hooks
npm run dev
```

`npm ci` installs dependencies and rebuilds native modules against Electron.

### Common scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Electron + Vite development |
| `npm run build` | Typecheck and production build |
| `npm test` | Vitest unit tests |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run verify` | Seams, ADRs, architecture, lint, typecheck, and tests |
| `npm run smoke` | Unpackaged Electron workflow scenarios |

Preview a production build with `npm run preview`.

## Packaging

```bash
npm run pack:mac:arm64      # hvir-<version>-macos-arm64.pkg
npm run pack:linux:x64      # Debian package
npm run pack:linux:arm64
```

CI on pull requests runs `npm run verify` plus Electron smoke on Linux and a focused macOS gate. Releases are driven from `.github/workflows/release.yml`.

## Repository layout

```
src/main        Electron main process (hosts, PTY, Git workers, IPC)
src/preload     Renderer bridge
src/renderer    React workbench UI
src/shared      Types and contracts used across the process boundary
src/workers     Isolated Git and host work
packages/       Private native addon (`@hvir/rename-noreplace`)
scripts/        Build, smoke, architecture, and project-management tools
test/           Vitest coverage for main, renderer, and scripts
```

Main owns filesystem, exec, PTY, and watch traffic through a `ProjectHost` seam (`LocalHost` or `SshHost`). The renderer presents workbench state over a typed IPC contract.

## License

[MIT](LICENSE) © 2026 hvir contributors.

Bundled third-party notices, including the terminal runtime and rename binding, are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
