# hvir

hvir is an Electron desktop workbench for local and SSH-backed software projects. It combines a file tree, source and rendered-document viewers, Git controls, terminal workspaces, and agent-oriented terminal sessions in one application.

## Features

- Project catalog with local and SSH hosts, workspace switching, and missing-workspace recovery.
- Multi-tab file viewer with source, diff, rendered Markdown/diagram, image, large-file, search, and go-to-line surfaces.
- Git status, changes, history, graph, branch switching, fetch, and fast-forward pull workflows.
- Integrated terminal workspaces powered by `node-pty` and `ghostty-web`.
- Built-in harness providers for Shell, Claude Code, Codex, Gemini, GitHub Copilot CLI, Cursor, Pi, and custom commands.
- Session overview and recovery surfaces for agent and shell sessions.
- Document review drafts and prepared delivery into supported harness providers.
- Diagnostic reports, workbench health checks, and smoke-test scenarios for Electron runtime behavior.

## Requirements

- Node.js 24 or newer.
- npm, bundled with Node.js.
- Native build tooling for Node/Electron native modules (`node-gyp`, `node-pty`, and `@hvir/rename-noreplace`). On macOS this normally means Xcode Command Line Tools; on Linux install the distribution build-essential toolchain and Python expected by `node-gyp`.
- Platform dependencies required by Electron. Linux package builds target Debian-compatible systems and declare runtime dependencies in `electron-builder.yml`.

## Getting started

```sh
npm ci
npm run dev
```

`npm ci` runs the postinstall runtime setup, including Electron installation and native module rebuilds. `npm run dev` starts the Electron application through electron-vite.

## Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the app in development mode. |
| `npm run build` | Type-check and build the Electron main, preload, and renderer bundles. |
| `npm run typecheck` | Run Node and renderer TypeScript checks. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the Vitest test suite. |
| `npm run verify` | Run seam checks, ADR checks, architecture enforcement, linting, type-checking, and tests. |
| `npm run smoke` | Build the smoke runtime and run the Linux Electron smoke scenarios. |
| `npm run smoke:macos` | Run the macOS-focused smoke scenario set. |
| `npm run build:dir` | Build and assemble an unpacked Electron app directory. |
| `npm run pack:mac:arm64` | Build a macOS arm64 `.pkg`. |
| `npm run pack:linux:x64` | Build a Linux x64 `.deb`. |
| `npm run pack:linux:arm64` | Build a Linux arm64 `.deb`. |

## Project layout

```text
src/main/          Electron main-process application, IPC, hosts, Git, terminal, sessions, and smoke runtimes
src/preload/       Typed preload bridge exposed to the renderer as window.hvir
src/renderer/      React renderer application and UI surfaces
src/shared/        Shared contracts, types, policies, and IPC definitions
src/workers/       Utility-process worker entry points
test/              Vitest unit and interaction tests plus fixtures
scripts/           Build, release, architecture, smoke, and project-management automation
packages/          Private native/runtime packages used by the app
build/             Electron Builder resources, icons, entitlements, and Linux packaging files
```

## Packaging

The app is packaged with Electron Builder. The primary release targets are macOS arm64 packages and Debian packages for Linux x64/arm64. Packaging includes the compiled Electron output, selected native runtime files, third-party notices, and the native `hvir-command` resource.

## Development notes

- The application is private and licensed MIT.
- Runtime and third-party attribution is maintained in `THIRD_PARTY_NOTICES.md`.
- `electron.vite.config.ts` defines separate main, preload, renderer, worker, and smoke build behavior.
- Architecture and seam checks are part of the default verification path; run `npm run verify` before preparing larger changes.
