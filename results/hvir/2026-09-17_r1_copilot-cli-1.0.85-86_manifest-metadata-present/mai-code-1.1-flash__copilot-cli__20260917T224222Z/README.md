# hvir

A lightweight, view-first workbench for agentic development.

hvir gives you a single desktop workspace for working across terminals, project files, Git state, browser-like web panes, and remote SSH environments without losing context. It is designed for multi-pane developer workflows where reading, navigating, and acting on code happen in parallel.

## Highlights

- Multi-workspace desktop workbench for local and remote projects
- Terminal-first workflow with persistent terminal sessions and layout controls
- File viewer and project tree for navigating code and documents
- Git-aware workspace views for status, diffs, branches, and worktree operations
- SSH host support and project connection management
- Web-pane integration for docs, dashboards, and browser-style tools
- Document review and session-aware project state tracking

## Why hvir

Most developer tools optimize for either a terminal or an editor. hvir keeps the terminal, file system, Git state, web content, and project context visible at the same time so you can iterate quickly across code, commands, and reviews.

## Requirements

- Node.js 24 or newer
- npm
- Git
- macOS/Linux support for the desktop app

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app in development mode:

   ```bash
   npm run dev
   ```

3. Build the desktop app for production:

   ```bash
   npm run build
   ```

## Common development commands

```bash
npm run dev              # start Electron app in development mode
npm run build            # typecheck + build the app
npm run preview          # preview built renderer output
npm run typecheck        # run TypeScript checks
npm run lint             # run ESLint
npm run test             # run Vitest suite
npm run verify           # run the project verification pipeline
npm run smoke            # run smoke scenarios
```

## Project layout

```text
.
├── src/
│   ├── main/            # Electron main-process runtime and app orchestration
│   ├── preload/         # preload scripts
│   ├── renderer/        # UI/workbench implementation
│   ├── shared/          # shared protocol and type definitions
│   └── workers/         # worker processes
├── packages/            # workspace-local packages and native helpers
├── scripts/             # build, release, project management, and smoke scripts
├── test/                # automated tests
├── electron-builder.yml # app packaging config
├── package.json         # project scripts and dependencies
├── LICENSE              # MIT license
└── THIRD_PARTY_NOTICES.md
```

## Packaging and distribution

The project includes Electron build and packaging scripts for desktop distribution. Examples:

```bash
npm run build:dir
npm run pack:linux:x64
npm run pack:linux:arm64
npm run pack:mac:arm64
```

## Contributing

Contributions are welcome. Please keep changes focused, validate with the relevant checks, and prefer the existing project conventions in the `scripts/` and `src/` directories.

Before opening a PR, a typical verification pass is:

```bash
npm run typecheck
npm run lint
npm test
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
