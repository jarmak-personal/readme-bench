# hvir

hvir is a desktop workbench for working with local and SSH-hosted projects. It brings project files, Git changes, document viewing, and persistent terminal sessions into one Electron window. Terminal profiles can launch supported coding assistants, including Claude Code, Codex, and GitHub Copilot CLI.

## Getting started

**Requirements:** Node.js 24 or newer, npm, Git, and the native build tools required by `node-gyp` and Electron's native modules. hvir targets macOS and Linux. To use a coding assistant, install and authenticate its CLI separately; remote projects also require an accessible SSH host.

```sh
npm ci
npm run dev
```

`npm ci` runs a postinstall step that builds the native rename helper and rebuilds `node-pty` for Electron. The development command checks the installed terminal runtime before launching Electron. In the app, choose a local or SSH host and open a project folder, then use the project rail to switch workspaces. Configure assistant launch profiles in Settings.

## What it offers

- Project file browsing, search, source and rendered document viewing, and diff review.
- Git working-tree views and history alongside project workspaces.
- Persistent, splittable terminal workspaces with assistant launch profiles and session views.
- Local and SSH project access, with terminal and file operations on the selected host.
- In-app document review and web panes.

## Development

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Electron development app |
| `npm run build` | Type-check and build the production app |
| `npm run verify` | Run repository checks, linting, type checks, and unit tests |
| `npm test` | Run Vitest tests |
| `npm run smoke` | Build and run Electron smoke scenarios |
| `npm run build:dir` | Create an unpacked application in `dist/` |
| `npm run pack:mac:arm64` | Package an unsigned macOS arm64 installer |
| `npm run pack:linux:x64` | Package a Linux x64 `.deb` |
| `npm run pack:linux:arm64` | Package a Linux arm64 `.deb` |

The main process and host integrations live in `src/main/`, the preload bridge in `src/preload/`, the React interface in `src/renderer/`, and cross-process types in `src/shared/`. Tests are in `test/`; build and release utilities are in `scripts/`.

## License

MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).
