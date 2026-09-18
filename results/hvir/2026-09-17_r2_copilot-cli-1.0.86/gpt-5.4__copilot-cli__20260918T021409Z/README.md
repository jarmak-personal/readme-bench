# hvir

**hvir** is an Electron desktop workbench for terminal-centered software development. It brings together project browsing, file viewing, Git workflows, local and SSH-backed workspaces, reusable terminal sessions, and multiple harness integrations in a single app.

The codebase is built with Electron, React, TypeScript, and `electron-vite`, with native terminal support powered by `node-pty` and `ghostty-web`. The repository also includes strong architectural and smoke-test guardrails for shipping desktop builds safely.

## What it does

hvir is organized around a workspace view that combines several development surfaces:

- **Terminal workspaces** with multi-pane layouts, terminal search, movement, recovery, and session tracking.
- **Project navigation** with a file tree, filename search, file create/move/delete flows, and path-aware workspace switching.
- **File viewing** for source, diffs, and rendered content such as Markdown.
- **Git tooling** including changes, history, graph views, branch actions, and guarded mutation flows.
- **Remote development** through SSH-backed project hosts and remote file operations.
- **Harness integrations** for shell and assistant-oriented workflows, including bundled providers for Claude Code, Codex, Gemini, GitHub Copilot, Cursor, and custom commands.
- **Document review and session surfaces** for inline review comments and reopening tracked sessions.
- **Diagnostics and health reporting** for runtime evidence, renderer health, and diagnostic report capture.

## Requirements

- **Node.js 24 or newer** (`package.json` declares `node >=24`)
- **npm**
- A working **native build toolchain** for `node-gyp`
- A desktop environment suitable for Electron development

`npm install` triggers a postinstall step that prepares the Electron runtime and rebuilds native dependencies, including `node-pty` and the local `@hvir/rename-noreplace` package.

## Getting started

```bash
npm install
npm run dev
```

Useful notes:

- `npm run dev` and `npm run build` both run a terminal runtime precheck first.
- The packaged app entrypoint is `src/main/index.ts`.
- The renderer lives under `src/renderer`, and the preload bridge lives under `src/preload`.

## Common scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron app in development mode |
| `npm run build` | Type-check and produce a production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks for main and renderer configs |
| `npm test` | Run the Vitest suite |
| `npm run verify` | Run seam checks, ADR checks, architecture checks, lint, typecheck, and tests |
| `npm run smoke` | Build the smoke variant and run the full cross-platform smoke scenario set |
| `npm run smoke:macos` | Run the macOS smoke subset used by the repository's pre-push hook |
| `npm run build:dir` | Build the app and assemble an unpacked Electron Builder output |
| `npm run pack:mac:arm64` | Build a macOS ARM64 `.pkg` |
| `npm run pack:linux:x64` | Build a Linux x64 `.deb` |

## Repository layout

| Path | Responsibility |
| --- | --- |
| `src/main` | Electron main-process runtime, IPC, project hosts, PTY supervision, Git coordination, diagnostics, sessions, and document review |
| `src/preload` | Typed renderer bridge exposed as `window.hvir` |
| `src/renderer` | React UI, workbench layout, terminals, Git views, file tree/viewer, sessions, settings, and review surfaces |
| `src/workers` | Utility-process workers such as the Git worker |
| `scripts` | Release, architecture, smoke, project-management, and packaging support scripts |
| `test` | Vitest coverage for runtime, UI behavior, architecture policy, smoke helpers, and platform contracts |
| `build` | Packaging assets, entitlements, icons, and installer resources |

## Architecture at a glance

- **Electron main / preload / renderer split** with a single typed preload surface instead of ad hoc IPC.
- **Worker-assisted background work** for Git and auxiliary runtime operations.
- **Native desktop focus** through `node-pty`, Electron Builder packaging, and platform-specific smoke and acceptance scripts.
- **Remote host abstraction** that supports both local and SSH-backed projects.
- **Policy-driven reliability checks** such as seam verification, ADR validation, architecture hotspot enforcement, and smoke-build exclusion guards in `electron.vite.config.ts`.

## Packaging and platform notes

The repository is currently set up to package:

- **macOS** as a signed-or-unsigned `.pkg` for **ARM64**
- **Linux** as a `.deb` for **x64** and **ARM64**

Electron Builder configuration lives in `electron-builder.yml`. Native modules are unpacked for runtime use, and the project intentionally avoids packaging-time rebuilds because native preparation happens during postinstall.

## Development workflow

For the smallest useful local gate:

```bash
npm run typecheck
npm test
```

For the repository's broader quality bar:

```bash
npm run verify
```

An optional Git hook installer is available:

```bash
npm run hooks:install
```

The pre-push hook runs TypeScript checks and a local-platform smoke test (`smoke` on Linux, `smoke:macos` on macOS).

## License

MIT
