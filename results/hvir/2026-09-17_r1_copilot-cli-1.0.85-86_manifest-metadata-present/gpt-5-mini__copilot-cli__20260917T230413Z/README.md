hvir
====

A lightweight, view-first workbench for agentic development.

Summary
-------
hvir is an Electron-based desktop workbench focused on view-first, agentic development workflows. It combines a terminal-centric UI with editor panes, SSH integration, and project tooling to help build, inspect, and run agent workflows locally.

Quick links
-----------
- Repository: https://github.com/jarmak-personal/hvir
- Issues: https://github.com/jarmak-personal/hvir/issues

Requirements
------------
- Node.js >= 24
- npm (recommended) or yarn
- macOS/Linux for native packaging tasks (see build scripts)

Getting started (development)
-----------------------------
1. Install dependencies:

   npm ci

2. Install runtime native dependencies (postinstall runs install-electron and node-gyp):

   npm run postinstall

3. Start the dev environment (hot-reload Electron + Vite):

   npm run dev

Building
--------
- Full build (typecheck + package):

  npm run build

- Build and create platform packages (examples):

  npm run pack:mac:arm64
  npm run pack:linux:x64

Testing & linting
-----------------
- Run tests:

  npm test

- Run linters and type checks:

  npm run lint
  npm run typecheck

Scripts of interest
-------------------
See package.json for many utility scripts including smoke tests, acceptance tests, and packaging helpers. Notable scripts:
- npm run dev — developer hot-reload
- npm run build — full build
- npm run postinstall — runtime native install (install-electron, node-gyp, electron-rebuild)
- npm run smoke — runs smoke scenarios used in CI

Contributing
------------
Contributions welcome. Please open an issue for discussion before large changes. Run tests and lint locally and follow existing code style (Prettier + ESLint + TypeScript).

License
-------
MIT — see LICENSE file.

Contact
-------
Project maintainers: hvir contributors (see package.json author and repository for links).

Notes
-----
- The project uses native modules (node-pty, electron native rebuild). If you hit native build failures, ensure build tools (node-gyp prerequisites) and a matching Electron runtime are installed.
- For CI and packaging details, review electron-builder and the scripts/ directory.
