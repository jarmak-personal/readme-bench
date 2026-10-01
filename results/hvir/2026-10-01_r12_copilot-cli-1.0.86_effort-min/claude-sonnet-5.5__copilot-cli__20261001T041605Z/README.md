# hvir

hvir is an Electron desktop workbench for working with projects and terminal-based coding harnesses. It combines a Ghostty-based terminal (node-pty), file viewer, git workspace and diff views, document review, a web pane, and local or SSH-hosted projects in one window.

## Requirements

- Node.js >= 24
- A toolchain able to build native modules (`node-gyp`, for `node-pty` and `@hvir/rename-noreplace`)

## Getting started

```sh
npm install        # also rebuilds native runtime modules
npm run hooks:install   # optional: install git hooks
npm run dev        # start the app in development mode
```

## Common scripts

| Command | Purpose |
| --- | --- |
| `npm run build` | Typecheck and build with electron-vite |
| `npm run typecheck` | Typecheck main and renderer code |
| `npm run lint` / `npm run format` | ESLint / Prettier |
| `npm test` | Run unit tests (Vitest) |
| `npm run smoke` | Build and run Electron smoke scenarios |
| `npm run verify` | Seams, ADRs, architecture, lint, typecheck, and tests |
| `npm run pack:mac:arm64` | Package a macOS arm64 `.pkg` |
| `npm run pack:linux:x64` | Package a Linux x64 `.deb` (`pack:linux:arm64` for arm64) |

See `package.json` for the full list (SSH acceptance, performance, mutation testing, project-management helpers).

## Project layout

- `src/main` – Electron main process (PTY, projects, git, sessions, harnesses, workers)
- `src/preload` – preload bridge
- `src/renderer` – UI
- `src/shared` – code shared across processes
- `src/workers` – worker threads
- `packages/rename-noreplace` – native helper module
- `test` – Vitest tests
- `scripts` – build, release, smoke, and project tooling

## License

MIT – see [LICENSE](LICENSE). Third-party licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
