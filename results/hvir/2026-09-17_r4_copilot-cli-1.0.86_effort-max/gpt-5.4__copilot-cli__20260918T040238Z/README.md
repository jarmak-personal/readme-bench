# hvir

hvir is a terminal-first desktop workbench for codebases on the local machine or over SSH. It combines project switching, file exploration, rendered/source/diff review, Git inspection, embedded web panes, and recoverable terminal or agent sessions in one Electron app.

## Highlights

- Open and switch between local and SSH-backed projects and workspaces.
- Launch split terminal sessions with persistent recovery, attention tracking, and session moves between workspaces.
- Configure harness profiles for shells and agent CLIs, including Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Cursor CLI, Pi, and custom commands.
- Browse a file tree and open files in rendered, source, or diff modes. Rendered previews support Markdown, Mermaid, HTML, CSV, JSON, YAML, and repository images; source mode adds in-file find and Git blame.
- Review Git changes, history, and commit graphs; fetch, pull, and switch branches from the workbench.
- Open loopback web apps from terminal output in embedded web panes.
- Inspect live or recoverable sessions in the Sessions destination and prepare document-review handoff payloads for compatible terminals.

## Tech stack

- Electron 43
- React 19
- TypeScript 6
- electron-vite
- ghostty-web and node-pty
- CodeMirror, markdown-it, Mermaid, and Shiki
- ssh2
- Vitest, ESLint, Prettier, and Stryker

## Requirements

- Node.js 24 or newer
- npm
- macOS or Linux for packaging and installed-app smoke flows
- Optional provider CLIs on your `PATH` when using harness profiles:
  - `claude`
  - `codex`
  - `copilot`
  - `gemini`
  - `cursor-agent`
  - `pi`

## Getting started

```bash
npm install
npm run dev
```

`npm install` runs the repository's runtime setup: Electron installation plus native rebuilds for `node-pty` and `@hvir/rename-noreplace`.

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron app in development mode |
| `npm run build` | Type-check and build the app |
| `npm run preview` | Preview the built app |
| `npm run lint` | Run ESLint across the repository |
| `npm run typecheck` | Run Node and renderer TypeScript checks |
| `npm test` | Run the Vitest suite |
| `npm run verify` | Run seam checks, ADR checks, architecture enforcement, lint, typecheck, and tests |
| `npm run smoke` | Build the smoke runtime and run the main smoke scenarios |
| `npm run acceptance:ssh:macos` | Run the macOS SSH acceptance flow |
| `npm run pack:mac:arm64` | Build a macOS ARM64 `.pkg` artifact |
| `npm run pack:linux:x64` | Build a Linux x64 `.deb` artifact |
| `npm run hooks:install` | Install the repository Git hooks |

## Project layout

| Path | Responsibility |
| --- | --- |
| `src/main` | Electron main-process orchestration for projects, SSH, Git, PTY sessions, harnesses, and app lifecycle |
| `src/preload` | Typed IPC bridge exposed to the renderer as `window.hvir` |
| `src/renderer` | React workbench UI for terminals, viewer, Git, settings, sessions, and web panes |
| `src/shared` | Shared types, contracts, and cross-process utilities |
| `src/workers` | Utility-process workers, including the Git worker |
| `scripts` | Build, release, smoke, architecture, and project-management tooling |
| `test` | Vitest coverage for application logic, renderer behavior, architecture rules, and workflows |
| `packages/rename-noreplace` | Native helper packaged with the app runtime |

## Packaging and quality gates

Production packaging is managed with `electron-builder` and currently targets macOS `.pkg` and Linux `.deb`, writing artifacts to `dist/`.

The repository also enforces architectural seams in both lint and shell checks. `npm run verify` is the main contributor gate and includes seam checks, ADR validation, architecture hotspot enforcement, linting, type-checking, and the Vitest suite.

## License

MIT
