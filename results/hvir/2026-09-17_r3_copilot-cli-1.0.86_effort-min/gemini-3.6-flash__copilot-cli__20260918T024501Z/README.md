# hvir

`hvir` is an Electron-based terminal workspace application built for developers working with local and remote environments, terminal harnesses, document reviews, and Git integration.

## Key Features

- **Terminal & Workspace Integration**: Native terminal rendering powered by `ghostty-web` and `node-pty`, with multi-pane layout management and terminal split capabilities.
- **Remote & Local Host Support**: Connect seamlessly to local workspaces or remote environments over SSH with file transport and watch services.
- **Harness Integrations**: First-class support for AI and CLI developer harnesses including Claude Code, Codex, Cursor, Gemini, GitHub Copilot, and Pi.
- **Git & Diff Inspection**: Integrated Git status, diff viewer, history graph, and branch management.
- **Document Review**: In-app rendered document reviews and side-by-side markdown and media previews.
- **Diagnostics & Health Monitoring**: Built-in runtime diagnostic journaling, health tracking, and automated report collection.

## Tech Stack

- **Framework**: Electron (v43+), React 19, TypeScript
- **Build Tools**: Vite, `electron-vite`, `electron-builder`
- **Terminal Engine**: `ghostty-web`, `node-pty`
- **Testing & Verification**: Vitest, Stryker (mutation testing), ESLint, Prettier

## Getting Started

### Prerequisites

- **Node.js**: `>= 24`
- **npm** (comes bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hvir/hvir.git
cd hvir
npm install
```

`npm install` will run the postinstall script to set up necessary native runtime modules (such as `node-pty` and `@hvir/rename-noreplace`).

### Development

To start the app in development mode with hot reloading:

```bash
npm run dev
```

### Verification & Testing

To run the full suite of linting, typechecking, and unit tests:

```bash
npm run verify
```

Other useful testing commands:

- **Unit tests**: `npm test`
- **Watch tests**: `npm run test:watch`
- **Lint**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **Smoke tests**: `npm run smoke`

### Packaging & Building

To build the Electron application:

```bash
npm run build
```

To create platform-specific packages:

- **macOS (arm64)**: `npm run pack:mac:arm64`
- **Linux (x64)**: `npm run pack:linux:x64`
- **Linux (arm64)**: `npm run pack:linux:arm64`

## License

[MIT](package.json)
