# hvir

> A lightweight, view-first workbench for agentic development.

**hvir** is an Electron-based desktop application designed as a workbench for building and managing agentic systems. It provides a modern terminal interface, integrated Git support, SSH connectivity, and developer tools—all optimized for iterative, agent-driven development workflows.

## Features

- 🖥️ **Integrated Terminal** - Powerful terminal interface built on Node PTY with theme support
- 🌳 **Project Explorer** - Browse and manage project files with Git integration
- 🔀 **Git Workflow** - Built-in Git status, diff viewing, and repository management
- 🔐 **SSH Support** - Seamless remote development with SSH host configuration
- 📄 **Document Review** - Markdown rendering with syntax highlighting via Shiki
- 🎨 **Themable UI** - Ghostty-based terminal themes for customization
- 🏗️ **Multi-Terminal Sessions** - Create and manage multiple terminal sessions
- ⚡ **Responsive UI** - React-based renderer with high-performance updates

## Getting Started

### Prerequisites

- **Node.js** 24 or higher
- **npm** (included with Node.js)
- macOS, Linux, or Windows (Electron support)

### Installation

```bash
# Clone the repository
git clone https://github.com/jarmak-personal/hvir.git
cd hvir

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Typecheck the project
npm run typecheck

# Run linter
npm run lint

# Format code
npm run format
```

### Building

```bash
# Build the application
npm run build

# Create a macOS ARM64 package
npm run pack:mac:arm64

# Create a Linux x64 package
npm run pack:linux:x64

# Create a Linux ARM64 package
npm run pack:linux:arm64
```

## Testing

```bash
# Run all tests once
npm run test

# Run tests in watch mode
npm run test:watch

# Run mutation tests
npm run test:mutation

# Run smoke tests
npm run smoke

# Run specific smoke scenarios
npm run smoke:scenario <scenario-name>
```

### Smoke Testing Scenarios

Available scenarios include:
- `pty-native` - PTY functionality
- `git-workflow` - Git operations
- `workspace-remote` - Remote workspace handling
- `terminal-presentation` - Terminal rendering
- `terminal-lifecycle` - Terminal lifecycle management
- And many more...

```bash
npm run smoke:macos        # macOS-specific smoke tests
npm run smoke:capacity     # Capacity/performance tests
```

## Verification

Run the complete verification suite:

```bash
npm run verify
```

This runs:
- Seam checks
- Architecture checks
- Linting
- Type checking
- All tests

## Project Structure

```
hvir/
├── src/
│   ├── main/           # Electron main process
│   ├── preload/        # Preload scripts
│   ├── renderer/       # React UI components
│   ├── shared/         # Shared utilities and types
│   └── workers/        # Web workers
├── test/               # Test files
├── packages/           # Local npm packages
├── scripts/            # Build and utility scripts
├── build/              # Build output
└── out/                # Production output
```

## Contributing

1. **Code Quality**: Ensure your code passes linting and type checking:
   ```bash
   npm run lint
   npm run typecheck
   ```

2. **Testing**: Add tests for new features and ensure all tests pass:
   ```bash
   npm run test
   ```

3. **Architecture**: Follow existing architectural patterns and run checks:
   ```bash
   npm run architecture:check
   ```

4. **Git Hooks**: Install pre-commit hooks for automatic checks:
   ```bash
   npm run hooks:install
   ```

## Commands Reference

### Development
- `npm run dev` - Start development server
- `npm run typecheck` - Type check the project
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Building
- `npm run build` - Build the application
- `npm run build:dir` - Build directory distribution
- `npm run build:smoke` - Build smoke test variant
- `npm run pack:mac:arm64` - Package for macOS ARM64
- `npm run pack:linux:x64` - Package for Linux x64

### Testing & Quality
- `npm run test` - Run tests once
- `npm run test:watch` - Watch mode testing
- `npm run test:mutation` - Mutation testing with Stryker
- `npm run verify` - Full verification suite
- `npm run check-seams` - Check architectural seams
- `npm run check-adrs` - Check Architecture Decision Records

### Project Management
- `npm run project:status` - View contributor status
- `npm run issue:context` - Get issue context
- `npm run issue:start` - Start working on an issue
- `npm run project:pr` - Sync pull request planning

## Architecture

hvir is built with a multi-process Electron architecture:

- **Main Process** - Application lifecycle, window management, native APIs
- **Preload Process** - Secure IPC bridge between main and renderer
- **Renderer Process** - React-based UI with hot reload support
- **Shared** - Common utilities, types, and business logic
- **Workers** - Background processing for heavy computations

For detailed architecture insights, run:
```bash
npm run architecture:report    # Generate architecture report
npm run architecture:check     # Validate architecture rules
```

## License

MIT © 2026 hvir contributors

See the [LICENSE](LICENSE) file for details.

## Support

- 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/jarmak-personal/hvir/issues)
- 💬 **Discussion**: Use GitHub Discussions for feature requests
- 📚 **Documentation**: Check the [GitHub Pages](https://github.com/jarmak-personal/hvir) site

## Acknowledgments

hvir uses several excellent open-source projects:

- [Electron](https://www.electronjs.org/) - Cross-platform desktop apps
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- [React](https://react.dev/) - UI library
- [Node PTY](https://github.com/microsoft/node-pty) - Terminal emulation
- [Ghostty Web](https://github.com/mitchellh/ghostty) - Terminal UI component
- [Shiki](https://shiki.style/) - Syntax highlighting
