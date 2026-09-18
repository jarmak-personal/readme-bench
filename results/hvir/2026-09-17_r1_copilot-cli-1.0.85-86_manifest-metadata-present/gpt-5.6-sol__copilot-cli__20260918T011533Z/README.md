# hvir

**hvir** is a lightweight, view-first workbench for agentic development. It
brings terminals, source files, Git workflows, and AI coding agents into one
desktop application, while keeping the project directory at the center of the
experience.

## Features

- Work with local projects or connect to projects over SSH.
- Run multiple terminal sessions and arrange them alongside project files.
- Launch supported coding agents, including GitHub Copilot, Claude Code, Codex,
  Gemini CLI, Cursor, and Pi, or configure a custom command.
- Browse, edit, search, and preview files with syntax highlighting, rendered
  Markdown, diagrams, images, and diffs.
- Inspect repository changes and history, switch branches, fetch, pull, and
  manage Git worktrees without leaving the workbench.
- Review documents and keep track of agent sessions across projects.
- Customize appearance, terminal themes, typography, keybindings, and harness
  profiles.

## Installation

Prebuilt installers are published on the
[GitHub Releases](https://github.com/jarmak-personal/hvir/releases) page.

Current packaging targets are:

- macOS on Apple silicon (`.pkg`)
- Debian-based Linux on x64 and ARM64 (`.deb`)

The command-line tools you want to use in hvir, such as Git or an AI coding
agent, must be installed and authenticated separately. SSH projects also
require access to a configured SSH host.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 24 or newer
- npm
- Git
- A native build toolchain supported by
  [`node-gyp`](https://github.com/nodejs/node-gyp#installation)

### Run locally

```bash
git clone https://github.com/jarmak-personal/hvir.git
cd hvir
npm ci
npm run dev
```

`npm ci` builds the native terminal dependencies against the bundled Electron
runtime, so the first install may take a little longer.

### Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Electron in development mode |
| `npm run build` | Type-check and create a production build |
| `npm test` | Run the Vitest test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check the code with ESLint |
| `npm run format:check` | Check formatting with Prettier |
| `npm run verify` | Run architecture checks, linting, type checks, and tests |
| `npm run build:dir` | Build an unpacked application directory |

Platform packages can be built with:

```bash
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Packaging for another platform or architecture may require running the command
on that target system. macOS signing is configured separately from the default
unsigned development package.

## Project structure

```text
src/
  main/      Electron main process, project hosts, terminals, Git, and IPC
  preload/   Typed bridge between Electron and the renderer
  renderer/  React workbench UI
  shared/    Contracts and models shared across processes
  workers/   Utility-process workers for isolated background operations
test/        Vitest unit and component tests
scripts/     Build, smoke-test, release, and project-management tooling
build/       Icons, entitlements, and packaging resources
```

The application uses Electron, React, TypeScript, Vite, and Ghostty's web
terminal renderer. Local and remote operations are kept in the Electron main
process and exposed to the sandboxed renderer through typed preload APIs.

## Contributing

Before submitting a change, run:

```bash
npm run verify
```

To install the repository's pre-push hook:

```bash
npm run hooks:install
```

Bug reports and feature requests are welcome in
[GitHub Issues](https://github.com/jarmak-personal/hvir/issues).

## License

hvir is available under the [MIT License](LICENSE). Third-party acknowledgments
are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
