# hvir

hvir is a lightweight, view-first workbench for agentic development. It is an Electron app built around a terminal, Git workspace controls, file viewing, session tracking, and document review so you can keep code, runtime output, and project state in one place.

## What it does

- **Terminal workspaces** for running and managing agent sessions and local shell processes
- **Git tooling** for history, graph, branches, diffs, fetch/pull/switch workflows, and workspace-aware operations
- **File viewer** support for source, rendered markdown, images, Mermaid, and other previewable content
- **Sessions and workspace management** for organizing projects, reconnecting to workspaces, and handling missing worktrees
- **Document review** flows for inspecting and delivering review artifacts
- **SSH and remote workspace support** through the app’s prompting and workspace orchestration layer
- **Settings and diagnostics** for terminal preferences, themes, health checks, and app behavior

## Requirements

- Node.js 24 or newer
- npm
- A native build toolchain suitable for Electron modules (`node-gyp`, `node-pty`, and related dependencies)

## Getting started

```bash
npm install
npm run dev
```

`npm install` runs the project’s postinstall setup, including runtime preparation for Electron and native dependencies.

## Common scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron app in development mode |
| `npm run build` | Type-check and build the app |
| `npm run build:dir` | Build and produce an unpacked distributable directory |
| `npm run test` | Run the Vitest suite |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type-checking for Node and web code |
| `npm run verify` | Run seams, ADR, architecture, lint, typecheck, and tests |
| `npm run smoke` | Build the smoke bundle and run the smoke scenarios |

Platform packaging helpers are also available:

- `npm run pack:mac:arm64`
- `npm run pack:mac:arm64:signed`
- `npm run pack:linux:x64`
- `npm run pack:linux:arm64`

## Repository notes

- The app is organized as an Electron + Vite project with separate main, preload, and renderer build targets.
- Native and terminal-related behavior is part of the core runtime, so local builds may need platform-specific prerequisites.
- Third-party licensing and redistribution notes are recorded in `THIRD_PARTY_NOTICES.md`.

