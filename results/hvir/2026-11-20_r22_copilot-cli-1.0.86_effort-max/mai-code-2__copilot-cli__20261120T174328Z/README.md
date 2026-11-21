# hvir

hvir is an Electron desktop workbench for developing with terminal-based AI coding agents. It brings projects, files, Git, documentation, web previews, and agent terminals into one workspace, with support for both local folders and SSH hosts.

## Features

- Open multiple local projects or remote projects through SSH, including Git worktrees.
- Run shells and supported coding agents in native split terminals.
- Launch plain shells, custom commands, Claude Code, Codex, Gemini, GitHub Copilot CLI, Cursor, and Pi. Agents must be installed and configured separately.
- Recover terminal sessions and inspect active or retained sessions from the Sessions view.
- Browse and manage project files without leaving the workbench.
- View source with syntax highlighting, diffs, rendered Markdown and Mermaid, images, CSV/JSON, and large files.
- Review source in place, collect line comments, and send review instructions to an agent terminal.
- Inspect Git changes, branch history, commit details, and commit graphs; switch branches, fetch, and pull from the UI.
- Open development servers in an embedded web pane with browser navigation controls.
- Customize terminal themes, typography, keybindings, Git behavior, and reusable harness profiles.

## Requirements

- [Node.js](https://nodejs.org/) 24 or newer, including npm
- Git
- Platform build tools required by `node-gyp` for native dependencies

Terminal agents and custom commands are optional and must be available on the selected local or remote host. The source currently includes release packaging for macOS (`arm64`) and Linux (`x64` and `arm64`).

## Development

```bash
git clone <repository-url> hvir
cd hvir
npm ci
npm run dev
```

`npm ci` runs the native runtime setup required for `node-pty` and the bundled `rename-noreplace` module. If those dependencies were installed for a different Node.js or Electron ABI, run:

```bash
npm run install:runtime
```

## Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start hvir in development mode |
| `npm run preview` | Preview the built Electron application |
| `npm run build` | Type-check and build the application |
| `npm run build:dir` | Build an unpacked distributable directory |
| `npm run typecheck` | Check main/preload and renderer TypeScript |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run verify` | Run architecture checks, lint, type checks, and tests |
| `npm run smoke` | Run the production Electron smoke scenarios |
| `npm run pack:mac:arm64` | Build an unsigned macOS `arm64` package |
| `npm run pack:linux:x64` | Build a Linux `x64` Debian package |
| `npm run pack:linux:arm64` | Build a Linux `arm64` Debian package |

On Linux, Electron smoke tests require a display; CI uses `xvfb-run` for this purpose.

## Project structure

- `src/main/` — Electron main process, host integrations, SSH, PTYs, Git workers, and application authority
- `src/preload/` — the narrow, typed API exposed to the renderer
- `src/renderer/` — the React workbench, terminal UI, file viewer, Git views, settings, and sessions
- `src/shared/` — contracts and types shared across process boundaries
- `src/workers/` — utility-process workers
- `packages/rename-noreplace/` — native safe-rename support
- `test/` — unit, integration, and Electron acceptance coverage
- `scripts/` — verification, smoke, packaging, release, and architecture tooling
- `build/` — platform packaging resources and native launcher assets

The main process owns privileged filesystem, SSH, Git, PTY, and window operations. The renderer communicates through explicitly defined preload contracts rather than receiving unrestricted Node.js access.

## Contributing

1. Keep changes within the existing feature and process boundaries.
2. Add or update focused tests for changed behavior.
3. Run `npm run verify` before submitting a change.
4. Run `npm run smoke` for changes affecting Electron process lifecycle, packaging, terminals, viewers, SSH, or end-to-end workflows.

Architecture and seam policies are checked by the verification command. See `scripts/architecture-hotspots.json` for enforced module-size and ownership constraints.

## License

hvir is available under the [MIT License](LICENSE). Third-party notices are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
