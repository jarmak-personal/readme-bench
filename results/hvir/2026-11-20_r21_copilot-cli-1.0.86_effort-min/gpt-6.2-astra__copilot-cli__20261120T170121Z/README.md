# hvir

hvir is a desktop workbench for local and SSH workspaces. Split the terminal into panes to run commands side by side, inspect Git diffs, and view files, rendered Markdown, or web pages without leaving the workspace.

## Run from source

Use Node.js 24 or newer, npm, Python 3, and a native C/C++ toolchain (Xcode Command Line Tools on macOS, or `make` and a C++ compiler on Linux). From the repository root, run:

```sh
npm ci
npm run dev
```

Leave npm install scripts enabled: the postinstall step sets up Electron and builds the native modules, including `node-pty`, which runs the terminal sessions.

## Development

- `npm test` runs the Vitest suite. Use `npm run test:watch` while editing.
- `npm run verify` runs architecture checks, linting, TypeScript checks, and tests.
- `npm run smoke` builds the app in smoke-test mode and exercises desktop workflows.
- `npm run build` type-checks and compiles the app into `out/`. Use `npm run preview` to launch that build.

## Native packages

To build an installer, run the command for your platform and architecture. Packages are written to `dist/`.

| Platform            | Command                    | Format |
| ------------------- | -------------------------- | ------ |
| macOS Apple silicon | `npm run pack:mac:arm64`   | `.pkg` |
| Linux x64           | `npm run pack:linux:x64`   | `.deb` |
| Linux arm64         | `npm run pack:linux:arm64` | `.deb` |

## License

hvir is [MIT licensed](LICENSE). See [third-party notices](THIRD_PARTY_NOTICES.md) for bundled components.
