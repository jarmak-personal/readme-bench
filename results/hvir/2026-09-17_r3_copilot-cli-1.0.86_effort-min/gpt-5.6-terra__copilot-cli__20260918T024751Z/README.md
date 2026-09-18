# hvir

hvir is a desktop workspace for working with local and SSH-hosted projects. It combines project browsing, Git workflows, file editing and previews, and native terminal sessions in one Electron application.

## Features

- Open and manage local or SSH-hosted project workspaces.
- Work with multiple native terminal sessions, including configurable terminal themes and layouts.
- Browse, search, create, move, copy, rename, and delete project files.
- Inspect Git status, branches, diffs, history, and worktrees, and perform supported Git operations.
- View Markdown, rendered HTML, syntax-highlighted source, diffs, and document-review content.
- Configure harness profiles and surface compatible Claude and Codex session information.

## Requirements

- Node.js 24 or later
- npm
- Build tools required by native Node modules (`node-gyp`) on your platform
- Git for repository features

On Linux, Electron smoke tests without a display require Xvfb (`xvfb-run`).

## Development

Install dependencies. The install step downloads Electron and rebuilds the native terminal dependencies for Electron's ABI.

```bash
npm ci
```

Start the application in development mode:

```bash
npm run dev
```

Build the production application:

```bash
npm run build
```

## Validation

Run the focused checks as needed:

```bash
npm run lint
npm run typecheck
npm test
```

Run the repository's complete non-Electron verification suite:

```bash
npm run verify
```

Run Electron smoke coverage:

```bash
npm run smoke
```

On headless Linux:

```bash
xvfb-run -a npm run smoke
```

Install the repository's pre-push hook to run TypeScript checks and the local-platform smoke suite before pushing:

```bash
npm run hooks:install
```

## Packaging

Create platform packages with:

```bash
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Build outputs are written to `dist/`. macOS packaging produces a `.pkg`; Linux packaging produces a `.deb`.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/main` | Electron main process, host integration, Git, SSH, terminals, and application services |
| `src/preload` | Typed, restricted bridge between the renderer and main process |
| `src/renderer` | React user interface |
| `src/shared` | Shared contracts and domain types |
| `src/workers` | Utility-process workers |
| `test` | Vitest unit and integration tests |
| `scripts` | Build, smoke-test, release, and repository automation |

## License

[MIT](LICENSE) © 2026 hvir contributors
