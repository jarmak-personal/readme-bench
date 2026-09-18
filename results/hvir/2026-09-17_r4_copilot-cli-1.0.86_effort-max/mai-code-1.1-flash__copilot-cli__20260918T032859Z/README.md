# HVIR

HVIR is a desktop workbench for software development built with Electron and React. It brings together terminal workspaces, project navigation, file inspection, Git tooling, document review, and web dashboards into a single app optimized for local and remote development workflows.

## Overview

HVIR is designed for developers who need to work across multiple repositories, sessions, and terminal panes without context switching. The app includes:

- Multi-terminal workspace management
- Local and remote project sessions, including SSH-backed hosts
- File tree and viewer panes for source, rendered content, and diffs
- Git status, branch switching, history, and graph views
- Document review and markdown/rendered preview workflows
- Web panes for browser-like dashboards and external tools
- Configurable terminal themes and harness profiles

## Requirements

- Node.js 24 or newer
- npm
- A supported desktop environment for running Electron

## Quick start

```bash
npm install
npm run dev
```

This starts the Electron app in development mode.

## Common commands

```bash
npm run build
npm run test
npm run lint
npm run typecheck
npm run verify
```

Additional project-specific scripts are available for smoke tests, packaging, and validation:

```bash
npm run smoke
npm run pack:mac:arm64
npm run pack:linux:x64
```

## Project structure

```text
.
├── src/
│   ├── main/          # Electron main process and runtime orchestration
│   ├── preload/       # Preload bridge for secure IPC exposure
│   ├── renderer/      # React UI and workbench components
│   ├── shared/        # Cross-process types, protocols, and contracts
│   └── workers/       # Worker implementations
├── packages/          # Optional project packages and local modules
├── scripts/           # Build, validation, packaging, and project automation
├── test/              # Test assets and scenario support
├── package.json       # App metadata and scripts
├── electron-builder.yml
├── LICENSE
├── THIRD_PARTY_NOTICES.md
└── README.md
```

## Development notes

- The app uses Electron Vite for development and build automation.
- Native runtime dependencies are installed via the `postinstall` workflow.
- `npm run verify` runs the project's main validation pipeline, including checks for seams, ADRs, architecture policy, linting, type-checking, and tests.

## Packaging

The repository includes packaging scripts for macOS and Linux builds. For example:

```bash
npm run pack:mac:arm64
npm run pack:linux:x64
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
