# hvir

hvir is an Electron-based desktop application focused on terminal/PTY-driven developer workflows. It integrates native PTY support, terminal rendering components, and packaging tooling for macOS and Linux.

> Private repository — for contributors and maintainers.

## Quickstart (development)

Requirements:
- Node.js >= 24
- npm (the project uses npm scripts)
- Platform build tools for native modules (Xcode command line tools on macOS, build-essential/python on Linux)

From the repository root:

```bash
npm ci
npm run dev
```

The `postinstall` script installs the Electron runtime and rebuilds native modules when needed.

## Build & package

Typecheck and build the app:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Package examples:

```bash
# macOS (arm64)
npm run pack:mac:arm64

# Linux (x64)
npm run pack:linux:x64
```

## Testing, linting & formatting

Run tests:

```bash
npm test
```

Typecheck, lint and verify:

```bash
npm run typecheck
npm run lint
npm run format
npm run verify
```

## Notes for maintainers

- The Electron main entrypoint (built output) is `./out/main/index.js`.
- The project contains a local native package (`packages/rename-noreplace`) referenced as an optional dependency.
- Many development and CI scripts (smoke tests, acceptance, packaging) are available in `package.json` scripts.

## Contributing

1. Install local git hooks: `npm run hooks:install`
2. Run tests and verification locally: `npm run verify`
3. Open a PR with a clear description of changes.

## License

MIT — see `package.json` (license: MIT).

## Maintainers

hvir contributors
