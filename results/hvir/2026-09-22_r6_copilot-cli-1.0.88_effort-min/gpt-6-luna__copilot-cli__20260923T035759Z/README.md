# hvir

hvir is a desktop workbench for software projects. It brings project folders and Git workspaces together with integrated terminals, file browsing and preview, Git tools, and coding-agent sessions in one Electron app. Projects can be opened locally or over SSH.

## Features

- Organize projects and workspaces, including Git worktrees.
- Run multiple persistent terminal sessions with split panes, configurable themes, and supported coding-agent integrations.
- Connect to remote project folders over SSH.
- Browse and edit project files, inspect diffs and history, and preview Markdown and other supported content.
- Configure appearance, terminal behavior, and harness profiles from the app.

## Requirements

- Node.js 24 or newer
- npm
- Native build tools required by Electron and native Node modules (including `node-gyp`)

## Development

```sh
npm install
npm run dev
```

The install step prepares Electron and native runtime dependencies. To create a production build:

```sh
npm run build
```

## Quality checks

Run the complete project verification suite with:

```sh
npm run verify
```

This checks architectural boundaries and records, runs lint and TypeScript checks, and executes the tests. To run tests alone, use `npm test`; `npm run test:watch` starts Vitest in watch mode.

## Packaging

Packaging commands build installers for the target platform and architecture:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

See `package.json` for additional build, smoke-test, and acceptance-test commands.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE). Third-party notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
