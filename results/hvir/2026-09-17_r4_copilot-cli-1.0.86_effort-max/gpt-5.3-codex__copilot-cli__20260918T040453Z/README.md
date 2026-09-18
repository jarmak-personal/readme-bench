# hvir

hvir is a TypeScript/Electron desktop workbench for software projects. It combines local and SSH workspace access, terminal sessions, file viewing, Git workflows, and session/diagnostic tooling in a single app.

## Highlights

- **Workspace-aware project navigation** across local and remote (`ssh:`) hosts
- **Integrated terminal runtime** (Ghostty Web + `node-pty`) with persistent sessions
- **File tree + split viewer workflows** for source exploration and editing
- **Git tooling** for status/history, graph views, branch switching, fetch, and pull
- **Web/document surfaces** including HTML/Markdown-oriented presentation paths
- **Runtime diagnostics** with health reporting and bounded recovery flows

## Tech stack

- Electron 43 + electron-vite
- React 19
- TypeScript 6
- Vitest, ESLint, Prettier
- Native Node-API addon: `@hvir/rename-noreplace` (Darwin/Linux)

## Requirements

- **Node.js 24+** (required by `package.json` engines)
- **npm** (uses `package-lock.json` and `npm` scripts)
- **macOS or Linux** (native addon and packaging targets are Darwin/Linux)
- Native build prerequisites for `node-gyp` dependencies:
  - macOS: Xcode Command Line Tools
  - Linux: compiler toolchain (`gcc`/`clang`), `make`, and Python 3

## Quick start

```bash
npm ci
npm run dev
```

Open a specific workspace at startup:

```bash
npm run dev -- --project-root=/absolute/path/to/repo
# or
HVIR_PROJECT_ROOT=/absolute/path/to/repo npm run dev
```

If terminal runtime validation reports a dependency mismatch, refresh dependencies with:

```bash
npm ci
```

## Common commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the app in development mode |
| `npm run build` | Type-check and build Electron main/preload/renderer outputs |
| `npm run build:dir` | Build and produce an unpacked app directory |
| `npm run preview` | Preview the built app |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks (`node` + `web` configs) |
| `npm test` | Run Vitest suite |
| `npm run smoke` | Run bundled Electron smoke scenarios |
| `npm run smoke:scenario -- <name>` | Run one smoke scenario |
| `npm run verify` | Full gate (seams, ADR/policy checks, lint, typecheck, tests) |

## Packaging

| Command | Artifact target |
|---|---|
| `npm run pack:mac:arm64` | macOS ARM64 `.pkg` |
| `npm run pack:mac:arm64:signed` | macOS ARM64 signed `.pkg` |
| `npm run pack:linux:x64` | Linux x64 `.deb` |
| `npm run pack:linux:arm64` | Linux ARM64 `.deb` |
| `npm run assemble:native-release` | Assemble release artifacts from native package outputs |

## Optional Git hooks

Install local repository hooks:

```bash
npm run hooks:install
```

The included pre-push hook runs TypeScript checks and local-platform smoke coverage.

## Repository layout

```text
src/main        Electron main-process runtime and IPC authority
src/preload     Typed preload bridge (window.hvir)
src/renderer    React UI and renderer feature surfaces
src/shared      Shared contracts/types across process boundaries
src/workers     Utility-process workers (echo/git)
scripts         Automation for checks, smoke, release, and project tooling
test            Vitest suites and fixtures
packages/       Native package(s), including rename-noreplace
```

## License

MIT (`LICENSE`). Third-party notices: `THIRD_PARTY_NOTICES.md`.
