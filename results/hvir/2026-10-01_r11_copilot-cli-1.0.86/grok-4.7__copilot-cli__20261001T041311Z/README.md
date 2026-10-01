# hvir

hvir is a desktop workbench for local and SSH projects. It keeps a Ghostty terminal, project files, Git, document review, and coding-agent launch profiles in one Electron app.

The package is private. Releases are native installers, not an npm publish.

## Features

- Split terminal workspaces backed by `node-pty` and a bundled `ghostty-web` runtime
- Project file tree, viewer, filename search, and confined file operations
- Git status, diffs, history, branches, and worktrees
- Local projects and SSH hosts behind one project-host seam
- Document review with provider-specific insert and send contracts
- Sessions overview, web panes, diagnostics, and workbench health
- Harness profiles for Shell, Claude Code, Codex, Pi, Gemini CLI, GitHub Copilot CLI, Cursor CLI, and a custom command

## Requirements

- Node.js 24 or newer
- npm
- A native toolchain for the postinstall rebuild of `node-pty` and `@hvir/rename-noreplace` (Xcode Command Line Tools on macOS; a C++ compiler and Python on Linux)

Development and packaging are set up for macOS and Linux. CI runs on Ubuntu 24.04 and macOS 15 (arm64).

## Development

```bash
npm ci
npm run dev
```

`npm ci` rebuilds native modules against Electron. `npm run dev` checks the terminal runtime, then starts electron-vite.

Install the local pre-push hook if you want typecheck and the platform smoke test before every push:

```bash
npm run hooks:install
```

On Linux without a display, smoke tests need `xvfb-run`.

## Verification

```bash
npm run verify
```

That runs seam checks, ADR checks, the architecture gate, ESLint, TypeScript, and Vitest.

Other useful commands:

| Command | What it does |
| --- | --- |
| `npm test` | Unit and contract tests |
| `npm run typecheck` | Main and renderer TypeScript |
| `npm run lint` | ESLint |
| `npm run format:check` | Prettier check (Markdown is excluded) |
| `npm run smoke` | Unpackaged Electron smoke scenarios |
| `npm run smoke:macos` | macOS-focused smoke scenarios |
| `npm run smoke:scenario -- <name>` | One smoke scenario after a smoke build |
| `npm run test:mutation` | Stryker mutation run |
| `npm run gauntlet` | Longer local verification script |

## Packaging

```bash
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

macOS output is a `.pkg` that installs to `/Applications`. Linux output is a `.deb`. Signed macOS packaging and installer smoke tests live in `scripts/` and `.github/workflows/`.

## Layout

| Path | Role |
| --- | --- |
| `src/main` | Electron main process, hosts, PTY, Git, harnesses, IPC |
| `src/preload` | Sandboxed preload bridge |
| `src/renderer` | React workbench |
| `src/shared` | Types and contracts shared across the process boundary |
| `src/workers` | Utility workers |
| `packages/rename-noreplace` | Native no-replace rename binding |
| `scripts` | Smoke, release, architecture, and project-management tooling |
| `test` | Vitest suites and fixtures |
| `build` | Installer icons, entitlements, and Linux packaging assets |

## License

MIT. See [LICENSE](LICENSE). Redistributed third-party notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
