# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `4568b855-9a01-4888-a549-562132840d09`  
> - **Started:** 10/22/2026, 10:30:17 PM  
> - **Duration:** 12m 51s  
> - **Exported:** 10/22/2026, 10:43:09 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>1s</sub>

### Copilot

I'll start by looking at what's in the repository so the README matches the actual code.

---

<sub>2s</sub>

### `bash`

**Inspect git state and tracked files**

$ cd /private/var/tmp/ws/a8def787/hvir && git --no-pager status --short | head -50; echo "---LOG---"; git --no-pager log --oneline -n 20 2>/dev/null; echo "---BRANCH---"; git --no-pager branch -a 2>/dev/null | head -20; echo "---FILES---"; git ls-files 2>/dev/null | head -200; echo "---COUNT---"; git ls-files 2>/dev/null | wc -l

<details>
<summary>208 lines</summary>

```
---LOG---
9211b32 Initial commit
---BRANCH---
* main
---FILES---
.githooks/pre-push
.github/dependabot.yml
.github/workflows/ci.yml
.github/workflows/codeql.yml
.github/workflows/ghostty-web-update.yml
.github/workflows/lock-tracker-conversations.yml
.github/workflows/macos-package-release.yml
.github/workflows/project-kind.yml
.github/workflows/project-pr-planning.yml
.github/workflows/real-host-ssh.yml
.github/workflows/release-pr-merged.yml
.github/workflows/release.yml
.github/workflows/smoke-stress.yml
.gitignore
.prettierignore
.prettierrc.json
LICENSE
THIRD_PARTY_NOTICES.md
build/entitlements.mac.inherit.plist
build/entitlements.mac.plist
build/icon-linux.svg
build/icon-macos.icns
build/icon-macos.png
build/icon-macos.svg
build/icons-linux/1024x1024.png
build/icons-linux/128x128.png
build/icons-linux/16x16.png
build/icons-linux/256x256.png
build/icons-linux/32x32.png
build/icons-linux/512x512.png
build/icons-linux/64x64.png
build/linux/after-install.sh
build/linux/after-remove.sh
build/linux/hvir.apparmor
build/native/hvir-command
build/pkg-scripts/postinstall
build/pkg-scripts/preinstall
electron-builder.ssh-acceptance.yml
electron-builder.yml
electron.vite.config.ts
eslint.config.mjs
package-lock.json
package.json
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
packages/rename-noreplace/rename_noreplace.c
scripts/adr-lifecycle.mts
scripts/agent-work-checkpoint-store.mts
scripts/architecture-authorization.mts
scripts/architecture-github.mts
scripts/architecture-hotspots.json
scripts/architecture-hotspots.mjs
scripts/architecture-hotspots.mts
scripts/architecture-inventory.mts
scripts/architecture-module-directions.mts
scripts/architecture-module-graph.mts
scripts/architecture-module-resolution.mts
scripts/architecture-policy.mts
scripts/architecture-wiring.mts
scripts/assemble-native-release.d.mts
scripts/assemble-native-release.mjs
scripts/capture-contributor-usage.mts
scripts/check-adrs.mjs
scripts/check-seams.sh
scripts/check-terminal-runtime.mts
scripts/ci-attempt-evidence.mts
scripts/create-smoke-repository.sh
scripts/generate-terminal-theme-catalog.mts
scripts/ghostty-terminal-capability-profile.mts
scripts/ghostty-web-update/candidate-bundle.mts
scripts/ghostty-web-update/cli.mts
scripts/ghostty-web-update/coordinator.mts
scripts/ghostty-web-update/github-client.mts
scripts/ghostty-web-update/github-delivery.mts
scripts/ghostty-web-update/github-release-source.mts
scripts/ghostty-web-update/policy.mts
scripts/ghostty-web-update/repository-candidate.mts
scripts/inspect-packaged-runtime.mts
scripts/install-git-hooks.sh
scripts/installed-harness-dialog-probe.mts
scripts/installed-startup-probe.mts
scripts/native-installer.template.sh
scripts/phase8-gauntlet.sh
scripts/prepare-release-linux-package.mts
scripts/prepare-release-pr.mjs
scripts/project-management/audit-canonical-project.ts
scripts/project-management/canonical-project-config.ts
scripts/project-management/canonical-project-fields.ts
scripts/project-management/canonical-project-item.ts
scripts/project-management/canonical-project.ts
scripts/project-management/contributor-status-cli.ts
scripts/project-management/contributor-status.ts
scripts/project-management/contributor-token-migration.ts
scripts/project-management/github-client.ts
scripts/project-management/github-contributor-acceptance.ts
scripts/project-management/github-delivery-adapters.ts
scripts/project-management/github-issues.ts
scripts/project-management/github-kind-automation.ts
scripts/project-management/github-pagination.ts
scripts/project-management/github-pull-requests.ts
scripts/project-management/github-session-tokens.ts
scripts/project-management/github-token-migration.ts
scripts/project-management/issue-context-cli.ts
scripts/project-management/issue-context.ts
scripts/project-management/issue-delivery.ts
scripts/project-management/issue-planning.ts
scripts/project-management/issue-start-cli.ts
scripts/project-management/issue-start.ts
scripts/project-management/kind-cli.ts
scripts/project-management/kind-policy.ts
scripts/project-management/kind-reconciler.ts
scripts/project-management/legacy-token-evidence.ts
scripts/project-management/migrate-project-tokens.ts
scripts/project-management/native-issue-worktrees.ts
scripts/project-management/package.json
scripts/project-management/planning-cli.ts
scripts/project-management/planning-fields.ts
scripts/project-management/planning-record.ts
scripts/project-management/project-config.ts
scripts/project-management/project-token-fields.ts
scripts/project-management/pull-request-cli.ts
scripts/project-management/pull-request-planning.ts
scripts/project-management/pull-request-relationships.ts
scripts/project-management/read-contributor-status.ts
scripts/project-management/read-issue-context.ts
scripts/project-management/read-planning-record.ts
scripts/project-management/session-token-allocation.ts
scripts/project-management/session-token-capture.ts
scripts/project-management/session-token-receipts.ts
scripts/project-management/start-issue.ts
scripts/project-management/sync-kind.ts
scripts/project-management/sync-pull-request-planning.ts
scripts/project-management/token-migration-plan.ts
scripts/real-host-ssh-contract.mts
scripts/real-host-ssh.vite.config.mts
scripts/record-macos-ssh-identity.sh
scripts/release-changelog.d.mts
scripts/release-changelog.mjs
scripts/release-github-evidence.mts
scripts/render-native-installer.d.mts
scripts/render-native-installer.mjs
scripts/require-release-ci-evidence.mts
scripts/run-linux-package-smoke.sh
scripts/run-macos-package-smoke.sh
scripts/run-macos-ssh-acceptance.sh
scripts/run-real-host-ssh-acceptance.mts
scripts/run-smoke-interruption.mts
scripts/run-smoke-scenarios.mts
scripts/run-smoke.sh
scripts/smoke-failure-artifact.mts
scripts/smoke-import-boundary.mjs
scripts/validate-release-pr.mts
src/main/application-runtime-policy.ts
src/main/application-runtime.ts
src/main/attention-badge.ts
src/main/build-environment.d.ts
src/main/diagnostics/diagnostic-event.ts
src/main/diagnostics/diagnostic-evidence.ts
src/main/diagnostics/diagnostic-intake.ts
src/main/diagnostics/diagnostic-journal.ts
src/main/diagnostics/diagnostic-report-builder.ts
src/main/diagnostics/diagnostic-report-coordinator.ts
src/main/diagnostics/diagnostic-report-evidence.ts
src/main/diagnostics/diagnostic-report-storage.ts
src/main/diagnostics/electron-diagnostic-report-actions.ts
src/main/diagnostics/runtime-diagnostics.ts
src/main/document-review/document-review-application.ts
src/main/document-review/document-review-coordinator.ts
src/main/document-review/document-review-delivery-coordinator.ts
src/main/document-review/document-review-delivery-policy.ts
src/main/document-review/document-review-delivery-terminal.ts
src/main/document-review/document-review-policy.ts
src/main/document-review/document-review-retention.ts
src/main/document-review/document-review-runtime.ts
src/main/document-review/document-review-store-codec.ts
src/main/document-review/document-review-store.ts
src/main/document-review/index.ts
src/main/filename-search/filename-enumerator.ts
src/main/filename-search/filename-search-coordinator.ts
src/main/filename-search/filename-search-policy.ts
src/main/filename-search/index.ts
src/main/git/git-branches.ts
src/main/git/git-command-context.ts
src/main/git/git-detail.ts
src/main/git/git-diff.ts
src/main/git/git-engine.ts
src/main/git/git-history.ts
src/main/git/git-parsers.ts
src/main/git/git-status.ts
src/main/git/git-worktrees.ts
src/main/git/mutation-authorization.ts
src/main/git/mutation-coordinator.ts
src/main/git/untracked-line-counts.ts
src/main/git/worker-host-broker.ts
src/main/git/worker-host-router.ts
src/main/harness/bounded-line-reader.ts
src/main/harness/bundled-harness-providers.ts
src/main/harness/claude-context-telemetry.ts
---COUNT---
    1256
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>2s</sub>

### `glob`

****/***

"**/*"

<details>
<summary>331 matches</summary>

```
[glob: 37426 path(s) under /private/var/tmp/ws/a8def787/hvir; concrete paths]
build/linux/hvir.apparmor
node_modules/@electron/fuses/dist/tsconfig.tsbuildinfo
node_modules/app-builder-lib/certs/root_certs.keychain
node_modules/app-builder-lib/templates/icons/proton-native/proton-native.ico
node_modules/bytestreamjs/README.MD
node_modules/cpu-features/build/Release/cpu_features.a
node_modules/cpu-features/deps/cpu_features/BUILD.bazel
node_modules/cpu-features/deps/cpu_features/bazel/platforms.bzl
node_modules/cpu-features/deps/cpu_features/cmake/ci/doc/docker.dot
node_modules/cpu-features/deps/cpu_features/cmake/ci/sample/main.cpp
node_modules/cpu-features/deps/cpu_features/patches/0001-Add-Apple-Silicon-Support.patch
node_modules/cytoscape-fcose/CITATION.cff
node_modules/dmg-builder/templates/background.tiff
node_modules/electron-winstaller/vendor/Squirrel.com
node_modules/electron-winstaller/vendor/darice.cub
node_modules/electron-winstaller/vendor/template.wxs
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources/MainMenu.nib
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources/icudtl.dat
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources/v8_context_snapshot.arm64.bin
node_modules/electron/dist/Electron.app/Contents/Resources/default_app.asar
node_modules/flatted/golang/pkg/flatted/flatted.go
node_modules/flatted/php/flatted.php
node_modules/json-stringify-safe/test/mocha.opts
node_modules/katex/src/fonts/default.cfg
node_modules/katex/src/fonts/lib/Extra.otf
node_modules/katex/src/fonts/lib/Space.ttx
node_modules/katex/src/fonts/xbbold.mf
node_modules/katex/src/metrics/mapping.pl
node_modules/node-pty/build/Release/node-addon-api/node_addon_api_except.stamp
node_modules/ssh2/lib/protocol/crypto/build/Release/.deps/Release/obj.target/sshcrypto/src/binding.o.d.raw
node_modules/ssh2/test/fixtures/id_rsa.ppk
node_modules/xmlbuilder/perf/perf.list
test/fixtures/Dockerfile.dev
test/fixtures/rendered.csv
node_modules/@electron/rebuild/node_modules/node-gyp/gyp/data/ninja/build.ninja
node_modules/@electron/rebuild/node_modules/node-gyp/gyp/pylib/packaging/LICENSE.APACHE
node_modules/@electron/rebuild/node_modules/node-gyp/gyp/pylib/packaging/py.typed
node_modules/app-builder-lib/templates/nsis/installer.nsi
node_modules/app-builder-lib/templates/nsis/portable.nsi
node_modules/electron-builder-squirrel-windows/template.nuspectemplate
node_modules/electron-winstaller/template.nuspectemplate
node_modules/electron-winstaller/vendor/candle.exe.config
node_modules/electron-winstaller/vendor/light.exe.config
node_modules/iconv-lite/.idea/iconv-lite.iml
node_modules/jsesc/man/jsesc.1
node_modules/marked/man/marked.1
node_modules/node-gyp/gyp/data/ninja/build.ninja
node_modules/node-gyp/gyp/pylib/packaging/LICENSE.APACHE
node_modules/node-gyp/gyp/pylib/packaging/py.typed
node_modules/node-pty/deps/winpty/misc/ConinMode.ps1
node_modules/node-pty/deps/winpty/misc/IdentifyConsoleWindow.ps1
node_modules/ssh2/test/fixtures/https_cert.pem
node_modules/ssh2/test/fixtures/https_key.pem
node_modules/tunnel/.idea/node-tunnel.iml
build/icon-macos.icns
node_modules/@electron/rebuild/node_modules/node-gyp/gyp/pyproject.toml
node_modules/@electron/rebuild/node_modules/node-gyp/lib/Find-VisualStudio.cs
node_modules/app-builder-lib/templates/icons/proton-native/proton-native.icns
node_modules/buildcheck/deps/Find-VisualStudio.cs
node_modules/combined-stream/yarn.lock
node_modules/cpu-features/deps/cpu_features/cmake/CpuFeaturesConfig.cmake.in
node_modules/cpu-features/deps/cpu_features/cmake/CpuFeaturesNdkCompatConfig.cmake.in
node_modules/cpu-features/deps/cpu_features/cmake/googletest.CMakeLists.txt.in
node_modules/electron/dist/Electron.app/Contents/Resources/electron.icns
node_modules/katex/src/styles/fonts.scss
node_modules/katex/src/styles/katex-swap.scss
node_modules/katex/src/styles/katex.scss
node_modules/node-gyp/gyp/pyproject.toml
node_modules/node-gyp/lib/Find-VisualStudio.cs
node_modules/sumchecker/yarn.lock
node_modules/uri-js/yarn.lock
node_modules/xmlbuilder/perf/basic/escaping.coffee
node_modules/xmlbuilder/perf/basic/object.coffee
node_modules/xmlbuilder/perf/index.coffee
test/fixtures/highlight.toml
node_modules/@electron/rebuild/node_modules/node-gyp/gyp/pylib/packaging/LICENSE.BSD
node_modules/@iconify/types/pnpm-lock.yaml
node_modules/@stryker-mutator/core/node_modules/source-map/lib/mappings.wasm
node_modules/app-builder-lib/templates/linux/after-install.tpl
node_modules/app-builder-lib/templates/linux/after-remove.tpl
node_modules/app-builder-lib/templates/linux/apparmor-profile.tpl
node_modules/app-builder-lib/templates/linux/desktop.tpl
node_modules/app-builder-lib/templates/snap/snapcraft.yaml
node_modules/cytoscape-fcose/demo/demo.gif
node_modules/cytoscape-fcose/demo/incrementalConstraints.gif
node_modules/dotenv-expand/tea.yaml
node_modules/electron-winstaller/resources/install-spinner.gif
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libEGL.dylib
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libGLESv2.dylib
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib
node_modules/electron/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libvk_swiftshader.dylib
node_modules/estraverse/LICENSE.BSD
node_modules/esutils/LICENSE.BSD
node_modules/ghostty-web/dist/ghostty-vt.wasm
node_modules/ghostty-web/ghostty-vt.wasm
node_modules/nan/.pre-commit-config.yaml
node_modules/node-gyp/gyp/pylib/packaging/LICENSE.BSD
node_modules/retry/equation.gif
node_modules/shiki/dist/onig.wasm
node_modules/eslint/node_modules/ajv/lib/dot/coerce.def
node_modules/eslint/node_modules/ajv/lib/dot/defaults.def
node_modules/eslint/node_modules/ajv/lib/dot/definitions.def
node_modules/eslint/node_modules/ajv/lib/dot/errors.def
node_modules/eslint/node_modules/ajv/lib/dot/missing.def
node_modules/cpu-features/build/binding.Makefile
node_modules/cpu-features/build/deps/cpu_features/cpu_features.Makefile
node_modules/cpu-features/deps/cpu_features/src/copy.inl
node_modules/cpu-features/deps/cpu_features/src/define_introspection.inl
node_modules/cpu-features/deps/cpu_features/src/define_introspection_and_hwcaps.inl
node_modules/cpu-features/deps/cpu_features/src/equals.inl
node_modules/cpu-features/deps/cpu_features/src/impl_aarch64__base_implementation.inl
node_modules/cpu-features/deps/cpu_features/src/impl_x86__base_implementation.inl
node_modules/cytoscape-cose-bilkent/nbproject/private/private.properties
node_modules/cytoscape-cose-bilkent/nbproject/project.properties
node_modules/cytoscape-fcose/node_modules/layout-base/nbproject/private/private.properties
node_modules/cytoscape-fcose/node_modules/layout-base/nbproject/project.properties
node_modules/js-md4/doc/fonts/OpenSans-Bold-webfont.eot
node_modules/js-md4/doc/fonts/OpenSans-BoldItalic-webfont.eot
node_modules/js-md4/doc/fonts/OpenSans-Italic-webfont.eot
node_modules/js-md4/doc/fonts/OpenSans-Light-webfont.eot
node_modules/js-md4/doc/fonts/OpenSans-LightItalic-webfont.eot
node_modules/js-md4/doc/fonts/OpenSans-Regular-webfont.eot
node_modules/layout-base/nbproject/private/private.properties
node_modules/layout-base/nbproject/project.properties
node_modules/node-pty/build/binding.Makefile
node_modules/node-pty/node-addon-api/node_addon_api.Makefile
node_modules/ssh2/lib/protocol/crypto/build/binding.Makefile
packages/rename-noreplace/build/binding.Makefile
node_modules/@electron/rebuild/node_modules/node-gyp/gyp/gyp.bat
node_modules/node-gyp/gyp/gyp.bat
node_modules/node-pty/deps/winpty/ship/build-pty4j-libpty.bat
node_modules/node-pty/deps/winpty/src/shared/GetCommitHash.bat
node_modules/node-pty/deps/winpty/src/shared/UpdateGenVersion.bat
node_modules/node-pty/deps/winpty/vcbuild.bat
node_modules/ssh2/util/build_pagent.bat
node_modules/concat-map/README.markdown
node_modules/cpu-features/binding.gyp
node_modules/cpu-features/deps/cpu_features/cpu_features.gyp
node_modules/deep-is/README.markdown
node_modules/json-stable-stringify-without-jsonify/readme.markdown
node_modules/mkdirp/readme.markdown
node_modules/node-addon-api/node_addon_api.gyp
node_modules/node-addon-api/node_api.gyp
node_modules/node-pty/binding.gyp
node_modules/node-pty/deps/winpty/src/winpty.gyp
node_modules/object-inspect/readme.markdown
node_modules/postject/README.markdown
node_modules/require-directory/README.markdown
node_modules/semver-compare/readme.markdown
node_modules/ssh2/lib/protocol/crypto/binding.gyp
packages/rename-noreplace/binding.gyp
build/icon-linux.svg
build/icon-macos.svg
node_modules/@electron/rebuild/node_modules/node-gyp/addon.gypi
node_modules/app-builder-lib/templates/icons/proton-native/proton-native.svg
node_modules/cpu-features/build/config.gypi
node_modules/cpu-features/buildcheck.gypi
node_modules/cpu-features/deps/cpu_features/cmake/ci/doc/docker.svg
node_modules/js-md4/doc/fonts/OpenSans-Bold-webfont.svg
node_modules/js-md4/doc/fonts/OpenSans-BoldItalic-webfont.svg
node_modules/js-md4/doc/fonts/OpenSans-Italic-webfont.svg
node_modules/js-md4/doc/fonts/OpenSans-Light-webfont.svg
node_modules/js-md4/doc/fonts/OpenSans-LightItalic-webfont.svg
node_modules/js-md4/doc/fonts/OpenSans-Regular-webfont.svg
node_modules/node-addon-api/common.gypi
node_modules/node-addon-api/except.gypi
node_modules/node-addon-api/noexcept.gypi
node_modules/node-gyp/addon.gypi
node_modules/node-pty/build/config.gypi
node_modules/node-pty/deps/winpty/src/configurations.gypi
node_modules/ssh2/lib/protocol/crypto/build/config.gypi
packages/rename-noreplace/build/config.gypi
test/fixtures/rendered-image.svg
node_modules/@electron/get/node_modules/semver/range.bnf
node_modules/@electron/rebuild/node_modules/semver/range.bnf
node_modules/@stryker-mutator/core/node_modules/semver/range.bnf
node_modules/@stryker-mutator/instrumenter/node_modules/semver/range.bnf
node_modules/@stryker-mutator/vitest-runner/node_modules/semver/range.bnf
node_modules/@typescript-eslint/typescript-estree/node_modules/semver/range.bnf
node_modules/app-builder-lib/node_modules/@electron/get/node_modules/semver/range.bnf
node_modules/app-builder-lib/node_modules/semver/range.bnf
node_modules/cpu-features/build/cpufeatures.target.mk
node_modules/cpu-features/build/deps/cpu_features/cpu_features.target.mk
node_modules/electron-winstaller/vendor/7z-arm64.dll
node_modules/electron-winstaller/vendor/7z-x64.dll
node_modules/electron-winstaller/vendor/7z.dll
node_modules/electron-winstaller/vendor/Microsoft.Deployment.Resources.dll
node_modules/electron-winstaller/vendor/Microsoft.Deployment.WindowsInstaller.dll
node_modules/electron-winstaller/vendor/Setup.pdb
node_modules/electron-winstaller/vendor/Squirrel-Mono.pdb
node_modules/electron-winstaller/vendor/Squirrel.pdb
node_modules/electron-winstaller/vendor/SyncReleases.pdb
node_modules/electron-winstaller/vendor/WixNetFxExtension.dll
node_modules/electron-winstaller/vendor/WriteZipToSetup.pdb
node_modules/electron-winstaller/vendor/wconsole.dll
node_modules/electron-winstaller/vendor/winterop.dll
node_modules/electron-winstaller/vendor/wix.dll
node_modules/global-agent/node_modules/semver/range.bnf
node_modules/node-abi/node_modules/semver/range.bnf
node_modules/node-api-version/node_modules/semver/range.bnf
node_modules/node-gyp/node_modules/semver/range.bnf
node_modules/node-pty/build/pty.target.mk
node_modules/node-pty/build/spawn-helper.target.mk
node_modules/node-pty/deps/winpty/src/agent/subdir.mk
node_modules/node-pty/deps/winpty/src/debugserver/subdir.mk
node_modules/node-pty/deps/winpty/src/libwinpty/subdir.mk
node_modules/node-pty/deps/winpty/src/subdir.mk
node_modules/node-pty/deps/winpty/src/tests/subdir.mk
node_modules/node-pty/deps/winpty/src/unix-adapter/subdir.mk
node_modules/node-pty/node-addon-api/node_addon_api.target.mk
node_modules/node-pty/node-addon-api/node_addon_api_except.target.mk
node_modules/node-pty/node-addon-api/node_addon_api_maybe.target.mk
node_modules/node-pty/prebuilds/win32-arm64/conpty.pdb
node_modules/node-pty/prebuilds/win32-arm64/conpty/conpty.dll
node_modules/node-pty/prebuilds/win32-arm64/conpty_console_list.pdb
node_modules/node-pty/prebuilds/win32-arm64/pty.pdb
node_modules/node-pty/prebuilds/win32-arm64/winpty-agent.pdb
node_modules/node-pty/prebuilds/win32-arm64/winpty.dll
node_modules/node-pty/prebuilds/win32-arm64/winpty.pdb
node_modules/node-pty/prebuilds/win32-x64/conpty.pdb
node_modules/node-pty/prebuilds/win32-x64/conpty/conpty.dll
node_modules/node-pty/prebuilds/win32-x64/conpty_console_list.pdb
node_modules/node-pty/prebuilds/win32-x64/pty.pdb
node_modules/node-pty/prebuilds/win32-x64/winpty-agent.pdb
node_modules/node-pty/prebuilds/win32-x64/winpty.dll
node_modules/node-pty/prebuilds/win32-x64/winpty.pdb
node_modules/node-pty/third_party/conpty/1.23.251008001/win10-arm64/conpty.dll
node_modules/node-pty/third_party/conpty/1.23.251008001/win10-x64/conpty.dll
node_modules/semver/range.bnf
node_modules/simple-update-notifier/node_modules/semver/range.bnf
node_modules/ssh2/lib/protocol/crypto/build/sshcrypto.target.mk
node_modules/tiny-async-pool/node_modules/semver/range.bnf
packages/rename-noreplace/build/rename_noreplace.target.mk
node_modules/app-builder-lib/templates/appx/appxmanifest.xml
node_modules/app-builder-lib/templates/appx/priconfig.xml
node_modules/app-builder-lib/templates/msi/template.xml
node_modules/app-builder-lib/templates/msiWrapped/template.xml
node_modules/app-builder-lib/templates/nsis/assistedInstaller.nsh
node_modules/app-builder-lib/templates/nsis/common.nsh
node_modules/app-builder-lib/templates/nsis/include/FileAssociation.nsh
node_modules/app-builder-lib/templates/nsis/include/StdUtils.nsh
node_modules/app-builder-lib/templates/nsis/include/StrContains.nsh
node_modules/app-builder-lib/templates/nsis/include/UAC.nsh
node_modules/app-builder-lib/templates/nsis/include/allowOnlyOneInstallerInstance.nsh
node_modules/app-builder-lib/templates/nsis/include/extractAppPackage.nsh
node_modules/app-builder-lib/templates/nsis/include/getProcessInfo.nsh
node_modules/app-builder-lib/templates/nsis/include/installUtil.nsh
node_modules/app-builder-lib/templates/nsis/include/installer.nsh
node_modules/app-builder-lib/templates/nsis/include/nsProcess.nsh
node_modules/app-builder-lib/templates/nsis/include/webPackage.nsh
node_modules/app-builder-lib/templates/nsis/installSection.nsh
node_modules/app-builder-lib/templates/nsis/multiUser.nsh
node_modules/app-builder-lib/templates/nsis/multiUserUi.nsh
node_modules/app-builder-lib/templates/nsis/oneClick.nsh
node_modules/app-builder-lib/templates/nsis/uninstaller.nsh
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/filesystem.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/hwcaps.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_aarch64_linux_or_android.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_aarch64_macos_or_iphone.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_aarch64_windows.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_arm_linux_or_android.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_mips_linux_or_android.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_ppc_linux.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_x86_freebsd.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_x86_linux_or_android.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_x86_macos.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/impl_x86_windows.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/stack_line_reader.o
node_modules/cpu-features/build/Release/obj.target/cpu_features/deps/cpu_features/src/string_view.o
node_modules/cpu-features/build/Release/obj.target/cpufeatures/src/binding.o
node_modules/cytoscape-cose-bilkent/nbproject/project.xml
node_modules/cytoscape-fcose/node_modules/layout-base/nbproject/private/private.xml
node_modules/cytoscape-fcose/node_modules/layout-base/nbproject/project.xml
node_modules/iconv-lite/.idea/codeStyles/Project.xml
node_modules/iconv-lite/.idea/codeStyles/codeStyleConfig.xml
node_modules/iconv-lite/.idea/inspectionProfiles/Project_Default.xml
node_modules/iconv-lite/.idea/modules.xml
node_modules/iconv-lite/.idea/vcs.xml
node_modules/layout-base/nbproject/private/private.xml
node_modules/layout-base/nbproject/project.xml
node_modules/node-pty/build/Release/obj.target/pty/src/unix/pty.o
node_modules/node-pty/build/Release/obj.target/spawn-helper/src/unix/spawn-helper.o
node_modules/tunnel/.idea/encodings.xml
node_modules/tunnel/.idea/modules.xml
node_modules/tunnel/.idea/vcs.xml
node_modules/tunnel/.idea/workspace.xml
packages/rename-noreplace/build/Release/obj.target/rename_noreplace/rename_noreplace.o
node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf
node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2
node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf
node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2
node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf
node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2
node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf
node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2
node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf
node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2
node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf
node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2
node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf
node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2
node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf
node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2
node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf
node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2
node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2
node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf
node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2
node_modules/@electron/windows-sign/vendor/signtool.exe
[omitted 37098 path(s); see original output for full results]
[extensions: .js=13403, .ts=9029, .map=5018, .mjs=2544, .mts=1973, .json=1248, .md=1181, [no extension]=981]
```

</details>


---

<sub>5s</sub>

### Copilot

This is a sizeable Electron app. Next I'll check for existing docs, the package manifest, and the top-level structure, excluding `node_modules`.

---

<sub>5s</sub>

### `bash`

**Find existing docs and top-level layout**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "---README/docs---"; git ls-files | grep -v '^node_modules/' | grep -iE 'readme|\.md$|docs/' | head -100; echo "---TOP-LEVEL DIRS (tracked, non node_modules)---"; git ls-files | grep -v '^node_modules/' | awk -F/ '{print $1"/"$2}' | sort | uniq -c | sort -rn | head -80

<details>
<summary>86 lines</summary>

```
---README/docs---
THIRD_PARTY_NOTICES.md
test/fixtures/rendered-mmd.md
test/fixtures/rendered.md
---TOP-LEVEL DIRS (tracked, non node_modules)---
 349 src/renderer
 294 src/main
  48 scripts/project-management
  47 src/shared
  21 test/fixtures
  11 .github/workflows
   8 scripts/ghostty-web-update
   7 build/icons-linux
   5 packages/rename-noreplace
   3 src/preload
   3 build/linux
   2 src/workers
   2 build/pkg-scripts
   1 vitest.config.ts/
   1 tsconfig.web.json/
   1 tsconfig.node.json/
   1 tsconfig.json/
   1 tsconfig.base.json/
   1 THIRD_PARTY_NOTICES.md/
   1 test/workspace-removal-flow.test.ts
   1 test/workspace-removal-coordinator.test.ts
   1 test/workspace-filter-polling.test.ts
   1 test/workspace-coordinator.test.ts
   1 test/workspace-attention.test.ts
   1 test/workspace-activity.test.ts
   1 test/worker-host.typecheck.ts
   1 test/worker-host-broker.test.ts
   1 test/workbench-runtime.test.ts
   1 test/workbench-overlays.test.ts
   1 test/workbench-layout.test.ts
   1 test/workbench-health.test.ts
   1 test/workbench-health-control.test.tsx
   1 test/workbench-commands.test.ts
   1 test/workbench-command-listener.test.tsx
   1 test/window-policy.test.ts
   1 test/window-health-tracker.test.ts
   1 test/web-pane-workspace.test.ts
   1 test/web-pane-surface.test.tsx
   1 test/web-pane-smoke-boundary.test.ts
   1 test/web-pane-route.test.ts
   1 test/web-pane-route-registry.test.ts
   1 test/web-pane-diagnostics.test.ts
   1 test/viewport-context-menu.test.ts
   1 test/viewer-workspace-model.test.ts
   1 test/viewer-workload-policy.test.ts
   1 test/viewer-types.test.ts
   1 test/viewer-tab-close-confirmation.test.tsx
   1 test/viewer-position.test.ts
   1 test/viewer-position-operation.test.ts
   1 test/viewer-ownership.test.ts
   1 test/viewer-find.test.ts
   1 test/viewer-command-targets.test.ts
   1 test/verified-project-entry-metadata.test.ts
   1 test/verified-project-copy.test.ts
   1 test/use-viewer-workspace.test.tsx
   1 test/use-terminal-workspace-runtime.test.tsx
   1 test/use-terminal-attention.test.tsx
   1 test/use-file-organization-actions.test.tsx
   1 test/use-document-review-workspace.test.tsx
   1 test/untracked-line-counts.test.ts
   1 test/typography-settings.test.ts
   1 test/tree-git-status.test.ts
   1 test/token-migration-plan.test.ts
   1 test/test-console-output-policy.ts
   1 test/test-console-output-policy.test.ts
   1 test/terminal-workspace-runtime-owner.test.tsx
   1 test/terminal-workspace-move-coordinator.test.ts
   1 test/terminal-workspace-model.test.ts
   1 test/terminal-workspace-materialization.test.tsx
   1 test/terminal-workspace-collection.test.tsx
   1 test/terminal-wheel.test.ts
   1 test/terminal-view-fork.test.tsx
   1 test/terminal-theme-generator.test.ts
   1 test/terminal-theme-gallery.test.tsx
   1 test/terminal-theme-catalog.test.ts
   1 test/terminal-surface-attachment.test.ts
   1 test/terminal-sessions-surface-owner.test.tsx
   1 test/terminal-session-risk-compatibility.test.ts
   1 test/terminal-session-registry.test.ts
   1 test/terminal-session-commands.test.tsx
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>5s</sub>

### `bash`

**Read package.json**

$ cd /private/var/tmp/ws/a8def787/hvir && cat package.json

<details>
<summary>128 lines</summary>

```
{
  "name": "hvir",
  "version": "0.2.3",
  "author": {
    "name": "hvir contributors"
  },
  "license": "MIT",
  "private": true,
  "engines": {
    "node": ">=24"
  },
  "desktopName": "hvir",
  "main": "./out/main/index.js",
  "scripts": {
    "postinstall": "npm run install:runtime",
    "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
    "prebuild": "node scripts/check-terminal-runtime.mts",
    "predev": "node scripts/check-terminal-runtime.mts",
    "dev": "electron-vite dev",
    "build": "npm run typecheck && electron-vite build",
    "build:smoke": "electron-vite build --mode smoke",
    "build:dir": "npm run build && electron-builder --dir",
    "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
    "pack:mac:arm64:signed": "npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true",
    "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
    "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
    "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
    "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
    "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
    "assemble:native-release": "node scripts/assemble-native-release.mjs",
    "render:native-installer": "node scripts/render-native-installer.mjs",
    "preview": "electron-vite preview",
    "typecheck:node": "tsc --noEmit -p tsconfig.node.json",
    "typecheck:web": "tsc --noEmit -p tsconfig.web.json",
    "typecheck": "npm run typecheck:node && npm run typecheck:web",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "hooks:install": "bash scripts/install-git-hooks.sh",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:mutation": "stryker run",
    "check-seams": "bash scripts/check-seams.sh",
    "check-adrs": "node scripts/check-adrs.mjs",
    "architecture:report": "node scripts/architecture-hotspots.mjs",
    "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
    "generate:terminal-themes": "node scripts/generate-terminal-theme-catalog.mts",
    "update:ghostty-web": "node scripts/ghostty-web-update/cli.mts",
    "project:kind": "node scripts/project-management/sync-kind.ts",
    "project:audit": "node scripts/project-management/audit-canonical-project.ts",
    "project:record": "node scripts/project-management/read-planning-record.ts",
    "project:pr": "node scripts/project-management/sync-pull-request-planning.ts",
    "project:status": "node scripts/project-management/read-contributor-status.ts",
    "project:migrate-tokens": "node scripts/project-management/migrate-project-tokens.ts",
    "issue:context": "node scripts/project-management/read-issue-context.ts",
    "issue:start": "node scripts/project-management/start-issue.ts",
    "verify": "npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test",
    "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
    "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
    "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
    "smoke:scenario": "npm run build:smoke && node scripts/run-smoke-scenarios.mts",
    "smoke:isolation": "npm run build:smoke && node scripts/run-smoke-interruption.mts",
    "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
    "smoke:linux:installed": "bash scripts/run-linux-package-smoke.sh",
    "smoke:macos:installed": "bash scripts/run-macos-package-smoke.sh",
    "smoke:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts",
    "smoke:development-performance": "node scripts/run-smoke-scenarios.mts development-performance",
    "performance:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts",
    "gauntlet": "bash scripts/phase8-gauntlet.sh"
  },
  "dependencies": {
    "@codemirror/merge": "^6.12.2",
    "@codemirror/search": "^6.7.2",
    "@codemirror/state": "^6.7.4",
    "@codemirror/view": "^6.43.11",
    "bplist-parser": "^0.5.0",
    "chokidar": "^5.0.0",
    "ghostty-web": "https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz",
    "markdown-it": "^15.0.1",
    "markdown-it-task-lists": "^2.1.1",
    "mermaid": "^11.17.2",
    "node-pty": "^1.1.0",
    "plist": "^3.1.1",
    "shiki": "^4.4.3",
    "ssh-config": "^5.2.1",
    "ssh2": "^1.17.0",
    "yaml": "^2.9.0"
  },
  "devDependencies": {
    "@electron/rebuild": "^4.2.0",
    "@eslint/js": "^10.0.1",
    "@stryker-mutator/core": "^10.0.0",
    "@stryker-mutator/vitest-runner": "^10.0.0",
    "@types/node": "^24.13.3",
    "@types/plist": "^3.0.5",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@types/ssh2": "^1.15.6",
    "@vitejs/plugin-react": "^5.2.0",
    "cross-env": "^10.0.0",
    "electron": "^43.4.1",
    "electron-builder": "^26.0.0",
    "electron-vite": "^5.0.0",
    "eslint": "^10.10.0",
    "eslint-config-prettier": "^10.1.0",
    "eslint-plugin-react-hooks": "^7.1.0",
    "eslint-plugin-react-refresh": "^0.5.6",
    "happy-dom": "^20.14.0",
    "node-gyp": "^13.0.1",
    "prettier": "^3.9.6",
    "proper-lockfile": "^4.1.2",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "typescript": "^6.0.3",
    "typescript-eslint": "^8.70.0",
    "vite": "^7.3.0",
    "vitest": "^5.0.0"
  },
  "overrides": {
    "typed-rest-client": {
      "qs": "6.15.3"
    }
  },
  "optionalDependencies": {
    "@hvir/rename-noreplace": "file:packages/rename-noreplace"
  }
}
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>11s</sub>

### Copilot

The project is "hvir", an Electron desktop app. Next I'll map the source layout and read the key config, CI, and packaging files.

---

<sub>11s</sub>

### `bash`

**Map src directory structure**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- src top-level dirs and counts ---"; for d in src/*/; do echo "$d: $(git ls-files "$d" | wc -l) files"; done; echo "--- src/main top-level subdirs ---"; git ls-files src/main | awk -F/ 'NF>3{print $3}' | sort | uniq -c | sort -rn; echo "--- src/main top-level files ---"; git ls-files src/main | awk -F/ 'NF==3{print $3}'; echo "--- src/renderer top-level ---"; git ls-files src/renderer | awk -F/ 'NF==3{print $3}'; git ls-files src/renderer | awk -F/ 'NF>3{print $3}' | sort | uniq -c | sort -rn; echo "--- src/shared ---"; git ls-files src/shared | head -60; echo "--- src/preload + workers ---"; git ls-files src/preload src/workers

<details>
<summary>104 lines</summary>

```
--- src top-level dirs and counts ---
src/main/:      294 files
src/preload/:        3 files
src/renderer/:      349 files
src/shared/:       47 files
src/workers/:        2 files
--- src/main top-level subdirs ---
  97 smoke
  36 harness
  25 project-file-operations
  21 project-host
  21 ipc
  14 git
  11 document-review
  10 diagnostics
   8 sessions
   7 terminal
   6 window
   6 pty
   4 filename-search
   2 web-pane
   2 project-folder-picker
   2 health
   1 viewer
--- src/main top-level files ---
application-runtime-policy.ts
application-runtime.ts
attention-badge.ts
build-environment.d.ts
html-preview-protocol.ts
index.ts
ipc.ts
navigation-policy.ts
project-coordinator.ts
project-registry.ts
project-watch.ts
renderer-event-delivery.ts
renderer-event-publisher.ts
renderer-presentation-resources.ts
renderer-resource-scopes.ts
workbench-runtime.ts
worker-host.ts
workspace-activity.ts
workspace-cleanup.ts
workspace-coordinator.ts
workspace-removal-coordinator.ts
--- src/renderer top-level ---
index.html
 348 src
--- src/shared ---
src/shared/application-build-channel.ts
src/shared/composer-submit.ts
src/shared/diagnostic-evidence.ts
src/shared/diagnostic-report-event.ts
src/shared/diagnostic-report.ts
src/shared/diagnostics.ts
src/shared/disposer.ts
src/shared/document-review.ts
src/shared/file-uri.ts
src/shared/filename-search.ts
src/shared/fs-types.ts
src/shared/git-types.ts
src/shared/harness-profile.ts
src/shared/harness-provider.ts
src/shared/harness-telemetry.ts
src/shared/harness-usage.ts
src/shared/host-path.ts
src/shared/html-preview.ts
src/shared/index.ts
src/shared/ipc-contract.ts
src/shared/ipc.ts
src/shared/ipc/app.ts
src/shared/ipc/diagnostics.ts
src/shared/ipc/document-review.ts
src/shared/ipc/filesystem.ts
src/shared/ipc/git.ts
src/shared/ipc/harness.ts
src/shared/ipc/preview.ts
src/shared/ipc/project.ts
src/shared/ipc/sessions.ts
src/shared/ipc/terminal.ts
src/shared/ipc/web-pane.ts
src/shared/keybindings.ts
src/shared/markdown-it-task-lists.d.ts
src/shared/operation-result.ts
src/shared/project-file-operations.ts
src/shared/rendered-link.ts
src/shared/sessions-projection.ts
src/shared/terminal-attention.ts
src/shared/terminal-clipboard-file-paste.ts
src/shared/terminal-start-admission.ts
src/shared/viewer-types.ts
src/shared/viewer-workload-policy.ts
src/shared/web-pane.ts
src/shared/workbench-health.ts
src/shared/worker-protocol.ts
src/shared/workspace-types.ts
--- src/preload + workers ---
src/preload/index.ts
src/preload/renderer-diagnostics.ts
src/preload/terminal-clipboard-file-paste.ts
src/workers/echo-worker.ts
src/workers/git-worker.ts
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>11s</sub>

### `bash`

**Read license, notices, ignore and hook files**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== LICENSE (head) ==="; head -12 LICENSE; echo; echo "=== THIRD_PARTY_NOTICES.md (head 60) ==="; head -60 THIRD_PARTY_NOTICES.md; echo; echo "=== .gitignore ==="; cat .gitignore; echo "=== .githooks/pre-push ==="; cat .githooks/pre-push; echo "=== .prettierignore ==="; cat .prettierignore

<details>
<summary>100 lines</summary>

```
=== LICENSE (head) ===
MIT License

Copyright (c) 2026 hvir contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all

=== THIRD_PARTY_NOTICES.md (head 60) ===
# Third-party notices

hvir includes and redistributes third-party software. Bundled npm dependencies retain
their own license files; this document additionally preserves the notices for the terminal
runtime that hvir modifies and redistributes. The names below identify the upstream
components only; hvir is not affiliated with or endorsed by their authors.

## Skill Steward rename-noreplace binding

Source: <https://github.com/CongBao/skill-steward>

hvir's private `@hvir/rename-noreplace` Node-API package derives its basename
validation and platform syscall wrapper from Skill Steward's binding. hvir modifies
that implementation to accept separate source and destination parent directory file
descriptors for atomic cross-directory no-replace rename.

MIT License

Copyright (c) 2026 Skill Steward contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## ghostty-web

Source: <https://github.com/coder/ghostty-web>

hvir currently consumes a provenance-recorded artifact from its bounded
[ghostty-web compatibility fork](https://github.com/jarmak-personal/ghostty-web/releases/tag/hvir-v0.4.0-19).
That artifact retains ghostty-web's upstream license and authorship.

The fork maintains hvir's demand-driven rendering, terminal presentation lifecycle, and
structured terminal-event compatibility in source. Those modifications are maintained by
hvir contributors, not by Coder or the Ghostty project, and hvir consumes the resulting
immutable artifact without modifying it during installation.

MIT License

Copyright (c) 2025 Coder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is

=== .gitignore ===
# dependencies
node_modules

# build output
out
dist
packages/*/build

# logs
*.log
npm-debug.log*

# editor / OS
.DS_Store
.vscode/*
!.vscode/extensions.json
*.local

# vitest / coverage
coverage
=== .githooks/pre-push ===
#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

echo "[pre-push] Running TypeScript checks..."
npm run typecheck

echo "[pre-push] Running hvir's local-platform Electron smoke test..."

if [[ "$(uname -s)" == "Linux" && -z "${DISPLAY:-}" ]]; then
  if ! command -v xvfb-run >/dev/null 2>&1; then
    echo "[pre-push] Linux has no DISPLAY and xvfb-run is unavailable." >&2
    echo "[pre-push] Install Xvfb, provide DISPLAY, or use git push --no-verify." >&2
    exit 1
  fi
  exec xvfb-run -a npm run smoke
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  exec npm run smoke:macos
fi

exec npm run smoke
=== .prettierignore ===
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
<shellId: 4 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### Copilot

The ignore file mentions design docs and ADRs, but none are tracked. I'll check whether a docs directory exists on disk and read the CI and release workflows.

---

<sub>14s</sub>

### `bash`

**List root and check ADR references**

$ cd /private/var/tmp/ws/a8def787/hvir && ls -la; echo "--- docs dir on disk? ---"; ls -la docs 2>/dev/null || echo "no docs/ dir"; echo "--- ADR refs in check-adrs ---"; head -60 scripts/check-adrs.mjs

<details>
<summary>87 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Oct 22 22:30 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct 22 22:30 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct 22 22:30 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct 22 22:30 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct 22 22:30 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Oct 22 22:30 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Oct 22 22:30 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Oct 22 22:30 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct 22 22:30 build
-rw-r--r--@   1 air-jarmak  wheel     549 Oct 22 22:30 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Oct 22 22:30 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Oct 22 22:30 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Oct 22 22:30 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Oct 22 22:30 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Oct 22 22:30 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Oct 22 22:30 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Oct 22 22:30 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct 22 22:30 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Oct 22 22:30 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Oct 22 22:30 src
-rw-r--r--@   1 air-jarmak  wheel     537 Oct 22 22:30 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Oct 22 22:30 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Oct 22 22:30 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Oct 22 22:30 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Oct 22 22:30 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Oct 22 22:30 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Oct 22 22:30 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Oct 22 22:30 vitest.config.ts
--- docs dir on disk? ---
no docs/ dir
--- ADR refs in check-adrs ---
import console from 'node:console'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { validateAdrLifecycles } from './adr-lifecycle.mts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const adrDirectory = join(root, 'docs', 'adr')
const designPath = join(root, 'docs', 'design.md')
const recordName = /^ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const requiredSections = [
  '## Context',
  '## Decision',
  '## Consequences',
  '## Rejected alternatives',
]
const errors = []

const directoryEntries = readdirSync(adrDirectory).filter((name) =>
  statSync(join(adrDirectory, name)).isFile(),
)
const records = directoryEntries.filter((name) => recordName.test(name)).sort()
const unexpected = directoryEntries
  .filter(
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
  )
  .sort()

for (const name of unexpected) {
  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
}

const recordIds = new Map()
const recordSources = new Map()
for (const name of records) {
  const id = recordName.exec(name)[1]
  const path = join(adrDirectory, name)
  const source = readFileSync(path, 'utf8')
  recordSources.set(name, source)
  const previous = recordIds.get(id)
  if (previous) {
    errors.push(`ADR-${id} is duplicated by ${previous} and ${name}`)
  }
  recordIds.set(id, name)

  if (!source.startsWith(`# ADR-${id}: `)) {
    errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
  }

  let previousOffset = -1
  for (const section of requiredSections) {
    const matches = [...source.matchAll(new RegExp(`^${section}$`, 'gm'))]
    if (matches.length !== 1) {
      errors.push(`docs/adr/${name}: expected exactly one ${section}`)
      continue
    }
    if (matches[0].index < previousOffset) {
      errors.push(`docs/adr/${name}: required decision sections are out of order`)
    }
<shellId: 5 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `bash`

**Read CI workflow**

$ cd /private/var/tmp/ws/a8def787/hvir && cat .github/workflows/ci.yml

<details>
<summary>205 lines</summary>

```
name: CI

on:
  pull_request:
    branches:
      - main
      - 'epic/**'

permissions:
  contents: read

concurrency:
  group: ci-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  release-version-integrity:
    name: Release version integrity
    if: >-
      github.event_name == 'pull_request' &&
      github.actor == 'github-actions[bot]' &&
      github.event.pull_request.user.login == 'github-actions[bot]' &&
      github.event.pull_request.base.ref == github.event.repository.default_branch &&
      github.event.pull_request.head.repo.full_name == github.repository &&
      startsWith(github.event.pull_request.head.ref, 'release/v')
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    permissions:
      contents: read
      pull-requests: read

    steps:
      - name: Check out trusted release validation
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.pull_request.base.sha }}
          persist-credentials: false
          sparse-checkout: |-
            scripts/validate-release-pr.mts
            scripts/release-github-evidence.mts
          sparse-checkout-cone-mode: false

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Validate version-only release change
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          GITHUB_TOKEN: ${{ github.token }}
          RELEASE_PR_HEAD_SHA: ${{ github.event.pull_request.head.sha }}
          RELEASE_PR_MODE: pre-merge
          RELEASE_PR_NUMBER: ${{ github.event.pull_request.number }}
          RELEASE_SOURCE_SHA: ${{ github.event.pull_request.head.sha }}
        run: node scripts/validate-release-pr.mts

  verify:
    name: Verification (Linux)
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: ubuntu-24.04
    timeout-minutes: 15
    permissions:
      actions: read
      contents: read
      issues: read
      pull-requests: read

    steps:
      - name: Check out repository
        uses: actions/checkout@v7
        with:
          # Architecture validates the exact event base/head and accepted epic history.
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run policy, type, and test verification
        env:
          HVIR_REPO_TOKEN: ${{ github.token }}
        run: npm run verify

  electron-smoke:
    name: Electron smoke (Linux)
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: ubuntu-24.04
    timeout-minutes: 15

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run production Electron workflow
        env:
          HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/production
        run: xvfb-run -a npm run smoke

      - name: Run development renderer Performance Timeline containment
        env:
          HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/development-performance
        run: xvfb-run -a npm run smoke:development-performance

      - name: Prove failure and interruption isolation
        run: xvfb-run -a npm run smoke:isolation

      - name: Upload bounded Electron failure evidence
        if: failure()
        uses: actions/upload-artifact@v7
        with:
          name: ci-electron-smoke-failure-${{ github.run_attempt }}
          path: ${{ runner.temp }}/hvir-smoke-artifacts
          if-no-files-found: ignore
          retention-days: 7

  macos-electron-smoke:
    # Temporary reduced gate: terminal-presentation, terminal-lifecycle, and capacity
    # remain available through local commands while their macOS flakes are hardened.
    name: Electron correctness (macOS arm64; temporary reduced gate)
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: macos-15
    timeout-minutes: 15

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run focused unpackaged Electron scenarios
        env:
          HVIR_SMOKE_ARTIFACT_DIR: ${{ runner.temp }}/hvir-smoke-artifacts/macos-ci
        run: npm run smoke:macos:ci

      - name: Upload bounded macOS Electron failure evidence
        if: failure()
        uses: actions/upload-artifact@v7
        with:
          name: ci-macos-electron-smoke-failure-${{ github.run_attempt }}
          path: ${{ runner.temp }}/hvir-smoke-artifacts
          if-no-files-found: ignore
          retention-days: 7

  codeql:
    name: CodeQL analysis
    needs: release-version-integrity
    if: always() && needs.release-version-integrity.result == 'skipped'
    runs-on: ubuntu-24.04
    timeout-minutes: 20
    permissions:
      actions: read
      contents: read
      packages: read
      security-events: write

    steps:
      - name: Check out repository
        uses: actions/checkout@v7

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v4.37.9
        with:
          languages: javascript-typescript

      - name: Analyze
        uses: github/codeql-action/analyze@v4.37.9

  merge-acceptance:
    name: Merge acceptance
    needs:
      - release-version-integrity
      - verify
      - electron-smoke
      - macos-electron-smoke
      - codeql
    if: always()
    runs-on: ubuntu-24.04
    timeout-minutes: 5
    permissions:
      actions: read
      contents: read

    steps:
      - name: Check out exact head for base ancestry proof
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          fetch-depth: 0
          persist-credentials: false

      - name: Require one coherent CI attempt
        env:
          GITHUB_TOKEN: ${{ github.token }}
        run: node scripts/ci-attempt-evidence.mts

      - name: Require exact candidate ancestry
        env:
          BASE_SHA: ${{ github.event.pull_request.base.sha }}
          HEAD_SHA: ${{ github.event.pull_request.head.sha }}
        run: |
          if [[ ! "$BASE_SHA" =~ ^[0-9a-f]{40}$ || ! "$HEAD_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::Pull request base and head must be full commit SHAs"
            exit 1
          fi
          if [ "$(git rev-parse HEAD)" != "$HEAD_SHA" ]; then
            echo "::error::Merge acceptance did not check out the exact pull request head"
            exit 1
          fi
          if ! git merge-base --is-ancestor "$BASE_SHA" "$HEAD_SHA"; then
            echo "::error::The tested pull request base is not an ancestor of its head"
            exit 1
          fi
<shellId: 6 completed with exit code 0>
```

</details>


---

<sub>14s</sub>

### `bash`

**Read electron-builder and vite configs**

$ cd /private/var/tmp/ws/a8def787/hvir && cat electron-builder.yml; echo "=== electron.vite.config.ts ==="; cat electron.vite.config.ts

<details>
<summary>210 lines</summary>

```
appId: dev.hvir.app
productName: hvir
directories:
  output: dist
  buildResources: build
files:
  - out/**
  - package.json
  - '!node_modules/@hvir/rename-noreplace/**'
  - node_modules/@hvir/rename-noreplace/index.js
  - node_modules/@hvir/rename-noreplace/package.json
  - node_modules/@hvir/rename-noreplace/LICENSE
  - node_modules/@hvir/rename-noreplace/build/Release/rename_noreplace.node
extraResources:
  - from: THIRD_PARTY_NOTICES.md
    to: THIRD_PARTY_NOTICES.md
  - from: build/native/hvir-command
    to: hvir-command
asar: true
asarUnpack:
  - node_modules/**/*.node
# postinstall rebuilds the required node-pty module against Electron's ABI. Keep
# packaging from also rebuilding ssh2's optional cpu-features acceleration module;
# ssh2 has a supported JavaScript fallback when that optional module is absent.
npmRebuild: false
mac:
  icon: build/icon-macos.icns
  category: public.app-category.developer-tools
  target:
    - pkg
  hardenedRuntime: true
  entitlements: build/entitlements.mac.plist
  entitlementsInherit: build/entitlements.mac.inherit.plist
pkg:
  artifactName: hvir-${version}-macos-${arch}.${ext}
  scripts: pkg-scripts
  installLocation: /Applications
  allowAnywhere: false
  allowCurrentUserHome: false
  allowRootDirectory: true
  isRelocatable: false
  isVersionChecked: true
  hasStrictIdentifier: true
  overwriteAction: upgrade
linux:
  icon: build/icons-linux
  executableName: hvir
  syncDesktopName: true
  category: Development
  target:
    - deb
deb:
  packageCategory: devel
  appArmorProfile: build/linux/hvir.apparmor
  afterInstall: build/linux/after-install.sh
  afterRemove: build/linux/after-remove.sh
  depends:
    - libc6 (>= 2.35)
    - libstdc++6 (>= 12)
    - libasound2 | libasound2t64
    - libatspi2.0-0 | libatspi2.0-0t64
    - libgtk-3-0 | libgtk-3-0t64
    - libnotify4
    - libnss3
    - libsecret-1-0
    - libuuid1
    - libxss1
    - libxtst6
    - util-linux
    - xdg-utils
  recommends: []
=== electron.vite.config.ts ===
import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin, type UserConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

import { DEVELOPMENT_PERFORMANCE_MEASURE_POLICY_ID } from './src/renderer/src/development/performance-measure-budget'
import type { ApplicationBuildChannel } from './src/shared'

function excludeDevelopmentPerformancePolicyFromProduction(): Plugin {
  return {
    name: 'exclude-development-performance-policy-from-production',
    apply: 'build',
    generateBundle(_options, bundle): void {
      const retainedPolicy = Object.values(bundle).find(
        (output) =>
          output.type === 'chunk' &&
          output.code.includes(DEVELOPMENT_PERFORMANCE_MEASURE_POLICY_ID),
      )
      if (retainedPolicy) {
        this.error(
          `Production renderer chunk ${retainedPolicy.fileName} retained development Performance Timeline policy`,
        )
      }
    },
  }
}

function excludeSmokeRuntimeFromProduction(smokeBuild: boolean): Plugin {
  return {
    name: 'exclude-smoke-runtime-from-production',
    apply: 'build',
    generateBundle(_options, bundle): void {
      if (smokeBuild) return
      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk') continue
        const smokeModule = Object.keys(output.modules).find((moduleId) =>
          moduleId.replaceAll('\\', '/').includes('/src/main/smoke/'),
        )
        if (smokeModule) {
          this.error(
            `Production main chunk ${output.fileName} retained smoke module ${smokeModule}`,
          )
        }
        if (output.code.includes('HVIR_SMOKE')) {
          this.error(
            `Production main chunk ${output.fileName} retained the HVIR_SMOKE activation path`,
          )
        }
      }
    },
  }
}

// Three build targets. `externalizeDepsPlugin` keeps `dependencies` (node-pty,
// chokidar) out of the main/preload bundles so native modules load from
// node_modules at runtime instead of being bundled.
const baseConfig: UserConfig = {
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve('src/main/index.ts'),
          // Utility-process workers are built as sibling entries so the main
          // process can `utilityProcess.fork` their compiled output.
          'echo-worker': resolve('src/workers/echo-worker.ts'),
          'git-worker': resolve('src/workers/git-worker.ts'),
        },
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve('src/preload/index.ts'),
        },
      },
    },
  },
  renderer: {
    root: 'src/renderer',
    // These are loaded from module workers or other dynamic imports. Vite's
    // HTML crawl cannot discover them on a cold dev start, so without an
    // explicit list first use re-optimizes dependencies and reloads the whole
    // Electron renderer in the middle of a view-mode change.
    optimizeDeps: {
      include: [
        'markdown-it',
        'markdown-it-task-lists',
        'mermaid',
        'yaml',
        '@shikijs/langs',
        'shiki/core',
        'shiki/engine/javascript',
        'shiki/langs',
        '@shikijs/themes/dark-plus',
        '@shikijs/themes/github-light-default',
      ],
    },
    worker: {
      // Shiki's fine-grained language imports are split into worker chunks;
      // Rollup cannot represent that graph in the default IIFE worker format.
      format: 'es',
    },
    build: {
      rollupOptions: {
        input: {
          index: resolve('src/renderer/index.html'),
        },
      },
    },
    plugins: [react(), excludeDevelopmentPerformancePolicyFromProduction()],
  },
}

export default defineConfig(({ mode }) => {
  const smokeBuild = mode === 'smoke'
  const buildChannel: ApplicationBuildChannel = smokeBuild
    ? 'smoke'
    : mode === 'ssh-acceptance'
      ? 'ssh-acceptance'
      : mode === 'development'
        ? 'development'
        : 'release'
  return {
    ...baseConfig,
    main: {
      ...baseConfig.main,
      plugins: [
        ...(baseConfig.main?.plugins ?? []),
        excludeSmokeRuntimeFromProduction(smokeBuild),
      ],
      define: {
        ...baseConfig.main?.define,
        __HVIR_SMOKE_BUILD__: JSON.stringify(smokeBuild),
        __HVIR_BUILD_CHANNEL__: JSON.stringify(buildChannel),
      },
    },
  }
})
<shellId: 7 completed with exit code 0>
```

</details>


---

<sub>20s</sub>

### Copilot

The config shows three build targets (main, preload, renderer) plus utility-process workers, and packaging for macOS pkg and Linux deb. Next I'll read the bundled CLI, the harness provider code, and the release workflows.

---

<sub>20s</sub>

### `bash`

**Read hvir-command and harness provider types**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== build/native/hvir-command ==="; cat build/native/hvir-command; echo; echo "=== shared/harness-provider.ts (head 120) ==="; head -120 src/shared/harness-provider.ts

<details>
<summary>124 lines</summary>

```
=== build/native/hvir-command ===
#!/bin/sh
set -eu

# hvir-native-package-command-v1

case "$(/usr/bin/uname -s)" in
Linux)
  application='/opt/hvir/hvir'
  ;;
Darwin)
  application='/Applications/hvir.app/Contents/MacOS/hvir'
  ;;
*)
  echo 'hvir: the installed command is available only on Linux and macOS' >&2
  exit 69
  ;;
esac

if [ "$#" -gt 0 ]; then
  case "$1" in
  -*)
    # Smoke and Chromium switches are explicit internal options.
    ;;
  *)
    caller_directory=$(pwd -P)
    case "$1" in
    /*) project_candidate=$1 ;;
    *) project_candidate=$caller_directory/$1 ;;
    esac
    if [ ! -d "$project_candidate" ]; then
      echo "hvir: project is not a local directory: $1" >&2
      exit 64
    fi
    project_root=$(CDPATH= cd -P "$project_candidate" && pwd -P)
    shift
    set -- "--project-root=$project_root" "$@"
    ;;
  esac
fi

exec "$application" "$@"

=== shared/harness-provider.ts (head 120) ===
/** Serializable harness-provider vocabulary shared across the main/renderer boundary. */

const PROVIDER_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/

declare const harnessProviderIdBrand: unique symbol

/** Opaque persisted identifier. Provider behavior remains owned by main. */
export type HarnessProviderId = string & {
  readonly [harnessProviderIdBrand]: 'HarnessProviderId'
}

export type HarnessSessionIdentity = 'none' | 'preassigned' | 'discovered'

export type HarnessContextPresentation = 'none' | 'count' | 'pressure'

export interface HarnessContextPressurePolicy {
  /** Provider-owned fallback used only when telemetry has no reported window. */
  readonly assumedWindowTokens?: number
  readonly warningPercent: number
  readonly criticalPercent: number
}

export interface HarnessProviderCapabilities {
  readonly sessionIdentity: HarnessSessionIdentity
  readonly exactResume: boolean
  /** Present only when the probed provider version supports an exact native fork. */
  readonly exactFork?: true
  readonly contextPresentation: HarnessContextPresentation
  readonly contextPressure?: HarnessContextPressurePolicy
  /** Trusted effective launch contract; absent means document review is Copy-only. */
  readonly reviewInsertContractRevision?: number
  /** Exact provider/profile submit contract; absent keeps review delivery Insert-only. */
  readonly reviewSendNowContractRevision?: number
}

export type HarnessModifiedKeyProtocol = 'none' | 'modify-other-keys' | 'csi-u'

export interface HarnessTerminalInputCapabilities {
  /** Wire format used by the foreground TUI for otherwise ambiguous modified keys. */
  readonly modifiedKeyProtocol: HarnessModifiedKeyProtocol
  /** Whether hvir should encode Meta+Enter as Control+Enter in intentional-submit mode. */
  readonly metaEnterAliasesControl: boolean
}

/** Bounded data-only description safe to expose to the renderer. */
export interface HarnessProviderDescriptor {
  readonly id: HarnessProviderId
  readonly displayName: string
  readonly default: boolean
  /** The bundled provider has an exact fork contract; a probe still decides version support. */
  readonly exactForkLaunch?: true
  readonly capabilities: HarnessProviderCapabilities
  readonly terminalInput: HarnessTerminalInputCapabilities
  /** Data-only suggestion; catalog membership never materializes a launch profile. */
  readonly profileTemplate?: {
    readonly displayName: string
    readonly description: string
  }
  readonly profileGuidance: {
    readonly reservedArguments: readonly string[]
  }
}

export type HarnessProbeStatus =
  | 'unchecked'
  | 'available'
  | 'executable-missing'
  | 'version-unsupported'
  | 'capability-absent'
  | 'authentication-required'
  | 'disconnected'
  | 'timeout'
  | 'malformed-output'
  | 'probe-failed'

export interface HarnessProfileProbe {
  readonly providerId: HarnessProviderId
  readonly profileId: import('./harness-profile').HarnessProfileId
  readonly launchRevision: number
  readonly hostId: import('./host-path').HostId
  readonly status: HarnessProbeStatus
  readonly checkedAt?: number
  readonly expiresAt?: number
  readonly version?: string
  readonly detail?: string
  readonly capabilities: HarnessProviderCapabilities
}

export function isHarnessProviderId(value: unknown): value is HarnessProviderId {
  return typeof value === 'string' && PROVIDER_ID.test(value)
}

export function asHarnessProviderId(value: string): HarnessProviderId {
  if (!isHarnessProviderId(value)) {
    throw new Error(`Invalid harness provider id '${value}'`)
  }
  return value
}
<shellId: 8 completed with exit code 0>
```

</details>


---

<sub>20s</sub>

### `bash`

**Read bundled harness providers**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== main/harness/bundled-harness-providers.ts (head 150) ==="; head -150 src/main/harness/bundled-harness-providers.ts

<details>
<summary>67 lines</summary>

```
=== main/harness/bundled-harness-providers.ts (head 150) ===
/** The single explicit assembly of trusted, bundled providers. No observers start here. */

import type {
  ComposerSubmitMode,
  HarnessProviderDescriptor,
  HarnessProviderId,
  HarnessProfileId,
} from '../../shared'
import type { ProjectHost } from '../project-host/project-host'
import type { HarnessProvider } from './harness-provider-contract'
import { HarnessProviderRegistry } from './harness-provider-registry'
import { plainShellProvider, customCommandProvider } from './providers/shell'
import { claudeCodeProvider } from './providers/claude-code'
import { codexProvider } from './providers/codex'
import { piProvider } from './providers/pi'
import { geminiProvider } from './providers/gemini'
import { githubCopilotProvider } from './providers/github-copilot'
import { cursorProvider } from './providers/cursor'

export const harnessProviders = new HarnessProviderRegistry([
  plainShellProvider,
  claudeCodeProvider,
  codexProvider,
  piProvider,
  geminiProvider,
  githubCopilotProvider,
  cursorProvider,
  customCommandProvider,
])

export function harnessProvider(id: string): HarnessProvider {
  return harnessProviders.get(id)
}

export function harnessProviderCatalog(): readonly HarnessProviderDescriptor[] {
  return harnessProviders.catalog()
}

export async function configureHarnessComposerSubmit(
  host: ProjectHost,
  mode: ComposerSubmitMode,
): Promise<void> {
  for (const provider of harnessProviders.all()) {
    await provider.composerConfiguration?.configure(host, mode)
  }
}

/** Data-only inspection surface for diagnostics/tests; never provider-contributed UI. */
export function harnessProviderDiagnostics(): readonly {
  readonly id: HarnessProviderId
  readonly profileContractVersion: number
  readonly defaultProfileId?: HarnessProfileId
  readonly artifactInputs: {
    readonly executable: boolean
    readonly environmentKeys: readonly string[]
    readonly pathBindings: readonly string[]
  }
  readonly probeInvokesVersion: boolean
}[] {
  return harnessProviders.all().map((provider) => ({
    id: provider.manifest.id,
    profileContractVersion: provider.profile.version,
    defaultProfileId: provider.profile.defaultProfile?.id,
    artifactInputs: {
      executable: provider.profile.artifactExecutable,
      environmentKeys: provider.profile.artifactEnvironmentKeys,
      pathBindings: provider.profile.artifactPathBindings,
    },
    probeInvokesVersion: provider.probe.versionArgs !== undefined,
  }))
}
<shellId: 9 completed with exit code 0>
```

</details>


---

<sub>20s</sub>

### `bash`

**Read release workflows**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== release.yml (head 150) ==="; head -150 .github/workflows/release.yml; echo "=== macos-package-release.yml (head 80) ==="; head -80 .github/workflows/macos-package-release.yml

<details>
<summary>215 lines</summary>

```
=== release.yml (head 150) ===
name: Release

on:
  workflow_dispatch:
    inputs:
      bump:
        description: current releases package.json; patch/minor/major open a validated release PR.
        required: true
        type: choice
        options:
          - current
          - patch
          - minor
          - major
      source_sha:
        description: Exact merged release source; automation only, normally left blank.
        required: false
        type: string

permissions:
  contents: read

concurrency:
  group: release
  cancel-in-progress: false

jobs:
  prepare:
    name: Prepare ${{ inputs.bump }} release
    runs-on: ubuntu-24.04
    timeout-minutes: 15
    permissions:
      actions: read
      contents: write
      issues: read
      pull-requests: write
    outputs:
      ready: ${{ steps.release.outputs.ready }}
      version: ${{ steps.release.outputs.version }}
      tag: ${{ steps.release.outputs.tag }}
      sha: ${{ steps.release.outputs.sha }}
    steps:
      - name: Require the default branch
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
        run: |
          if [ "$GITHUB_REF" != "refs/heads/$DEFAULT_BRANCH" ]; then
            echo "::error::Run releases from $DEFAULT_BRANCH, not $GITHUB_REF_NAME"
            exit 1
          fi

      - name: Check out release history
        uses: actions/checkout@v7
        with:
          ref: ${{ github.event.repository.default_branch }}
          fetch-depth: 0
          fetch-tags: true

      - name: Select trusted release source
        env:
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          if [ -z "$SOURCE_SHA" ]; then
            exit 0
          fi
          if [[ ! "$SOURCE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::Release source must be a full commit SHA"
            exit 1
          fi
          if ! git cat-file -e "$SOURCE_SHA^{commit}"; then
            echo "::error::Release source $SOURCE_SHA is not available"
            exit 1
          fi
          default_sha=$(git rev-parse "origin/$DEFAULT_BRANCH")
          if ! git merge-base --is-ancestor "$SOURCE_SHA" "$default_sha"; then
            echo "::error::Release source $SOURCE_SHA is not merged into $DEFAULT_BRANCH"
            exit 1
          fi
          git checkout --detach "$SOURCE_SHA"

      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Select release version
        id: version
        env:
          BUMP: ${{ inputs.bump }}
          GH_TOKEN: ${{ github.token }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          current=$(node -p "require('./package.json').version")
          if [ "$BUMP" = current ]; then
            version=$current
          else
            npm version "$BUMP" --no-git-tag-version --ignore-scripts
            version=$(node -p "require('./package.json').version")
          fi
          tag="v$version"

          remote_tag_sha=$(git ls-remote origin "refs/tags/$tag^{}" | awk '{print $1}')
          if [ -z "$remote_tag_sha" ]; then
            remote_tag_sha=$(git ls-remote origin "refs/tags/$tag" | awk '{print $1}')
          fi

          if [ "$BUMP" = current ] && [ -n "$remote_tag_sha" ]; then
            if [ -n "$SOURCE_SHA" ] && [ "$remote_tag_sha" != "$SOURCE_SHA" ]; then
              echo "::error::$tag points at $remote_tag_sha, expected release source $SOURCE_SHA"
              exit 1
            fi
            git checkout --detach "$remote_tag_sha"
            tagged_version=$(node -p "require('./package.json').version")
            if [ "$tagged_version" != "$version" ]; then
              echo "::error::$tag contains package version $tagged_version, expected $version"
              exit 1
            fi
            if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
              if [ "$is_draft" != true ]; then
                echo "::error::$tag is already published; immutable releases require a new version"
                exit 1
              fi
            fi
            echo "Repairing or completing draft $tag at $remote_tag_sha"
          elif [ -n "$remote_tag_sha" ]; then
            echo "::error::$tag already exists; rerun with bump=current"
            exit 1
          elif gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            echo "::error::$tag has a release without the expected source tag"
            exit 1
          fi

          echo "current=$current" >> "$GITHUB_OUTPUT"
          echo "version=$version" >> "$GITHUB_OUTPUT"
          echo "tag=$tag" >> "$GITHUB_OUTPUT"
          echo "sha=$(git rev-parse HEAD)" >> "$GITHUB_OUTPUT"
          {
            echo "### hvir $version"
            echo
            echo "Version: $current -> $version ($BUMP)"
          } >> "$GITHUB_STEP_SUMMARY"

      - name: Require exact-source coherent CI evidence
        if: inputs.bump == 'current'
        timeout-minutes: 5
        env:
          GITHUB_DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
=== macos-package-release.yml (head 80) ===
name: Signed macOS package

on:
  workflow_call:
    inputs:
      source_sha:
        description: Full merged release source commit SHA to package.
        required: true
        type: string
      allow_merged_source:
        description: Permit an exact commit contained in the selected branch for release assembly.
        required: false
        default: false
        type: boolean
    secrets:
      MACOS_APPLICATION_CERTIFICATE:
        required: false
      MACOS_APPLICATION_CERTIFICATE_PASSWORD:
        required: false
      MACOS_INSTALLER_CERTIFICATE:
        required: false
      MACOS_INSTALLER_CERTIFICATE_PASSWORD:
        required: false
      MACOS_NOTARY_KEY:
        required: false
      MACOS_NOTARY_KEY_ID:
        required: false
      MACOS_NOTARY_ISSUER_ID:
        required: false
      MACOS_TEAM_ID:
        required: false
permissions:
  contents: read

concurrency:
  group: signed-macos-package
  cancel-in-progress: false

jobs:
  signed-package:
    name: Sign, notarize, staple, and accept macOS arm64 package
    runs-on: macos-15
    timeout-minutes: 45
    environment: native-release-signing

    steps:
      - name: Require an exact protected merged source
        env:
          ALLOW_MERGED_SOURCE: ${{ inputs.allow_merged_source }}
          REF_TYPE: ${{ github.ref_type }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          if [ "$REF_TYPE" != branch ]; then
            echo "::error::Signed packaging must be dispatched from a protected branch"
            exit 1
          fi
          if [ "$ALLOW_MERGED_SOURCE" != true ]; then
            echo "::error::Signed packaging requires an explicitly selected merged source"
            exit 1
          fi
          if [[ ! "$SOURCE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
            echo "::error::source_sha must be a full commit SHA"
            exit 1
          fi

      - name: Check out trusted source
        uses: actions/checkout@v7
        with:
          ref: ${{ inputs.source_sha }}
          fetch-depth: 0

      - name: Confirm the protected branch contains the exact source
        env:
          SOURCE_BRANCH: ${{ github.ref_name }}
          SOURCE_SHA: ${{ inputs.source_sha }}
        run: |
          git fetch origin "refs/heads/$SOURCE_BRANCH"
          if [ "$(git rev-parse HEAD)" != "$SOURCE_SHA" ]; then
            echo "::error::checkout does not match requested source"
            exit 1
<shellId: 10 completed with exit code 0>
```

</details>


---

<sub>24s</sub>

### Copilot

The app wraps AI coding agent CLIs (Claude Code, Codex, Gemini, Copilot, Cursor, and others) inside terminal panes. Next I'll check the installer template, the rest of the release flow, and the harness provider list.

---

<sub>25s</sub>

### `bash`

**Read native installer template and providers**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== native-installer.template.sh (head 90) ==="; head -90 scripts/native-installer.template.sh; echo "=== providers dir ==="; git ls-files src/main/harness | sed 's#src/main/harness/##'

<details>
<summary>122 lines</summary>

```
=== native-installer.template.sh (head 90) ===
#!/usr/bin/env bash
set -Eeuo pipefail

readonly HVIR_VERSION=@@HVIR_VERSION@@
readonly HVIR_RELEASE_BASE_URL=@@HVIR_RELEASE_BASE_URL@@
readonly HVIR_LINUX_X64_ARTIFACT=@@HVIR_LINUX_X64_ARTIFACT@@
readonly HVIR_LINUX_X64_SHA256=@@HVIR_LINUX_X64_SHA256@@
readonly HVIR_LINUX_ARM64_ARTIFACT=@@HVIR_LINUX_ARM64_ARTIFACT@@
readonly HVIR_LINUX_ARM64_SHA256=@@HVIR_LINUX_ARM64_SHA256@@
readonly HVIR_MACOS_ARM64_ARTIFACT=@@HVIR_MACOS_ARM64_ARTIFACT@@
readonly HVIR_MACOS_ARM64_SHA256=@@HVIR_MACOS_ARM64_SHA256@@
readonly HVIR_MACOS_TEAM_ID=@@HVIR_MACOS_TEAM_ID@@
readonly HVIR_ACCEPTANCE_ASSET_DIRECTORY=@@HVIR_ACCEPTANCE_ASSET_DIRECTORY@@
readonly HVIR_ACCEPTANCE_UNSIGNED_MACOS=@@HVIR_ACCEPTANCE_UNSIGNED_MACOS@@
readonly HVIR_LINUX_MINIMUM_GLIBC=2.35
readonly HVIR_APPARMOR_USERNS_RESTRICTION=/proc/sys/kernel/apparmor_restrict_unprivileged_userns

stage='validating arguments'
temporary_directory=''
platform=''
platform_name=''
artifact_name=''
artifact_sha256=''
native_command=''
install_action='install'
legacy_launcher=''
legacy_npm=''
legacy_cache=''
operation='install'
purge=0

cleanup() {
  status=$?
  trap - EXIT HUP INT TERM
  if [[ -n "$temporary_directory" ]]; then
    case "$temporary_directory" in
    */hvir-installer.*) /bin/rm -rf -- "$temporary_directory" ;;
    *)
      echo "hvir installer refused to clean unexpected path: $temporary_directory" >&2
      status=1
      ;;
    esac
  fi
  if [[ "$status" -ne 0 ]]; then
    echo "hvir $HVIR_VERSION failed while $stage (status $status)." >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

usage() {
  cat <<EOF
hvir $HVIR_VERSION installer

Usage:
  install.sh
  install.sh --uninstall
  install.sh --uninstall --purge

The default operation installs or updates hvir. Uninstall preserves user state;
--purge additionally removes the current user's documented hvir settings and cache.
EOF
}

parse_arguments() {
  case "$#" in
  0) ;;
  1)
    case "$1" in
    --uninstall) operation='uninstall' ;;
    --help | -h)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 64
      ;;
    esac
    ;;
  2)
    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
      usage >&2
      exit 64
    fi
    operation='uninstall'
    purge=1
=== providers dir ===
bounded-line-reader.ts
bundled-harness-providers.ts
claude-context-telemetry.ts
claude-keybindings.ts
claude-session-artifact.ts
claude-session-recovery.ts
codex-context-telemetry.ts
codex-session-discovery.ts
electron-clipboard-image.ts
harness-composer-contracts.ts
harness-launch-selection.ts
harness-launch.ts
harness-probe.ts
harness-profile-store.ts
harness-provider-capabilities.ts
harness-provider-contract.ts
harness-provider-probes.ts
harness-provider-registry.ts
harness-provider.ts
harness-shell-environment.ts
harness-telemetry-hub.ts
harness-telemetry-protocol.ts
harness-text-validation.ts
harness-usage-artifact.ts
harness-usage-demand-controller.ts
harness-usage-read-scheduler.ts
harness-usage.ts
providers/claude-code.ts
providers/codex.ts
providers/cursor.ts
providers/gemini.ts
providers/github-copilot.ts
providers/pi.ts
providers/shell.ts
remote-image-paste-storage.ts
remote-image-paste.ts
<shellId: 11 completed with exit code 0>
```

</details>


---

<sub>25s</sub>

### `bash`

**Scan release workflow publish steps**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== release.yml (150-end, grep key lines) ==="; grep -nE 'uses:|name:|run:|gh release|\.deb|\.pkg|dmg|assets|upload|asset' .github/workflows/release.yml | sed -n '1,200p' | tail -90

<details>
<summary>92 lines</summary>

```
=== release.yml (150-end, grep key lines) ===
252:    name: Accept release package (${{ matrix.name }})
265:          - name: Ubuntu 24.04 x64
267:            artifact_name: release-linux-x64
270:          - name: Ubuntu 24.04 arm64
272:            artifact_name: release-linux-arm64
279:      - name: Check out exact release source
280:        uses: actions/checkout@v7
284:      - name: Set up Node.js
285:        uses: actions/setup-node@v7
290:      - name: Download the accepted baseline package
291:        uses: actions/download-artifact@v8
293:          name: ${{ matrix.artifact_name }}
296:      - name: Verify and restore the exact package for acceptance
298:          DEB_ARCH: ${{ matrix.deb_arch }}
300:        run: node scripts/prepare-release-linux-package.mts "$RELEASE_ARCH" "$DEB_ARCH"
302:      - name: Install, update, launch, and remove native package
303:        run: xvfb-run -a npm run smoke:linux:installed
306:    name: Accept release package (${{ matrix.name }})
322:          - name: Debian 13 x64
324:            artifact_name: release-linux-x64
327:          - name: Debian 13 arm64
329:            artifact_name: release-linux-arm64
334:      - name: Check out exact release source
335:        uses: actions/checkout@v7
339:      - name: Download the accepted baseline package
340:        uses: actions/download-artifact@v8
342:          name: ${{ matrix.artifact_name }}
345:      - name: Prepare the disposable Debian acceptance host
346:        run: |
361:      - name: Verify and restore the exact package for acceptance
363:          DEB_ARCH: ${{ matrix.deb_arch }}
365:        run: |
369:      - name: Install, update, launch, and remove native package
370:        run: |
378:    name: Build and accept macOS arm64
381:    uses: ./.github/workflows/macos-package-release.yml
388:    name: Assemble, verify, and publish immutable release
408:      - name: Check out exact release source
409:        uses: actions/checkout@v7
415:      - name: Set up Node.js
416:        uses: actions/setup-node@v7
421:      - name: Download accepted Linux x64 package
422:        uses: actions/download-artifact@v8
424:          name: release-linux-x64
427:      - name: Download accepted Linux arm64 package
428:        uses: actions/download-artifact@v8
430:          name: release-linux-arm64
433:      - name: Download protected accepted macOS package
434:        uses: actions/download-artifact@v8
436:          name: release-macos-arm64
439:      - name: Verify the exact accepted native artifact set
442:        run: |
444:            "hvir-${VERSION}-darwin-arm64.pkg" \
445:            "hvir-${VERSION}-darwin-arm64.pkg.sha256" \
446:            "hvir-${VERSION}-linux-arm64.deb" \
447:            "hvir-${VERSION}-linux-arm64.deb.sha256" \
448:            "hvir-${VERSION}-linux-x64.deb" \
449:            "hvir-${VERSION}-linux-x64.deb.sha256" |
460:              "hvir-${VERSION}-linux-x64.deb.sha256" \
461:              "hvir-${VERSION}-linux-arm64.deb.sha256" \
462:              "hvir-${VERSION}-darwin-arm64.pkg.sha256"
466:      - name: Require repository release immutability
469:        run: |
484:      - name: Assemble exact release metadata and installer
489:        run: |
495:            --asset-directory dist/release
501:      - name: Create or repair a private draft
507:        run: |
527:          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
528:            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
534:            gh release create "$TAG" \
542:      - name: Upload and validate the complete draft asset set
547:        run: |
548:          gh release upload "$TAG" dist/release/* \
551:          actual=$(gh release view "$TAG" \
553:            --json assets \
554:            --jq '.assets[].name' |
559:            "hvir-${VERSION}-darwin-arm64.pkg" \
560:            "hvir-${VERSION}-linux-arm64.deb" \
561:            "hvir-${VERSION}-linux-x64.deb" \
566:            echo "::error::Draft release asset set is incomplete or unexpected"
571:      - name: Publish the complete immutable release
575:        run: |
576:          gh release edit "$TAG" \
581:      - name: Verify published release attestation and downloaded assets
585:        run: |
588:            if gh release verify "$TAG" --repo "$GITHUB_REPOSITORY"; then
602:          gh release download "$TAG" \
609:          for asset in "$verify_directory"/*; do
610:            gh release verify-asset "$TAG" "$asset" --repo "$GITHUB_REPOSITORY"
<shellId: 12 completed with exit code 0>
```

</details>


---

<sub>31s</sub>

### Copilot

Release assets are a macOS arm64 `.pkg` and Linux x64/arm64 `.deb` files, with an installer script. Next I'll check the renderer's feature folders, the installer's install paths, and the dev tooling configs.

---

<sub>31s</sub>

### `bash`

**Map renderer feature folders**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== renderer/src top-level ==="; git ls-files src/renderer/src | awk -F/ 'NF==4{print $4}' | sort | uniq -c; echo "=== renderer/src/* dirs with counts ==="; git ls-files src/renderer/src | awk -F/ 'NF>=5{print $4"/"$5}' | sort | uniq -c | sort -rn | head -50

<details>
<summary>61 lines</summary>

```
=== renderer/src top-level ===
   1 App.tsx
   1 ErrorBoundary.tsx
   1 hvir.d.ts
   1 main.tsx
   1 styles.css
   1 theme-model.ts
   1 theme.ts
   1 themes.css
=== renderer/src/* dirs with counts ===
   5 settings/sections
   1 workspaces/WorkspaceCatalogDialogs.tsx
   1 workspaces/workspace-session-actions.ts
   1 workspaces/workspace-attention.ts
   1 workspaces/SshPromptDialog.tsx
   1 workspaces/SessionDialog.tsx
   1 workspaces/ProjectsBar.tsx
   1 workspaces/project-watch-interests.ts
   1 workspaces/project-state-delivery.ts
   1 workspaces/project-session.ts
   1 workspaces/project-session-model.ts
   1 workspaces/project-session-events.ts
   1 workspaces/project-folder-picker-client.ts
   1 workspaces/MissingWorkspaceNotice.tsx
   1 workspaces/initial-host-connection.ts
   1 workspaces/ConnectionStatus.tsx
   1 workspaces/connection-status.ts
   1 workbench/workspace-pane-state.ts
   1 workbench/workbench-overlay-model.ts
   1 workbench/workbench-layout-policy.ts
   1 workbench/workbench-command-router.ts
   1 workbench/use-workbench-overlays.ts
   1 workbench/use-workbench-layout.ts
   1 workbench/use-workbench-commands.ts
   1 workbench/use-terminal-path-activation.ts
   1 workbench/use-renderer-ready.ts
   1 workbench/use-modal-keyboard.ts
   1 workbench/TerminalLayoutControls.tsx
   1 workbench/modal-keyboard-model.ts
   1 workbench/middle-click-close.ts
   1 workbench/ConfirmationDialog.tsx
   1 workbench/active-terminal-focus.ts
   1 viewer/viewer-workspace-state.ts
   1 viewer/viewer-workspace-selectors.ts
   1 viewer/viewer-workspace-persistence.ts
   1 viewer/viewer-workspace-model.ts
   1 viewer/viewer-workload-policy.ts
   1 viewer/viewer-read-policy.ts
   1 viewer/viewer-position.ts
   1 viewer/viewer-path-removal.ts
   1 viewer/viewer-path-rebind.ts
   1 viewer/viewer-find.ts
   1 viewer/viewer-document-refresh.ts
   1 viewer/viewer-command-targets.ts
   1 viewer/viewer-byte-format.ts
   1 viewer/use-viewer-workspace.ts
   1 viewer/use-viewer-path-lifecycle.ts
   1 viewer/use-source-blame.ts
   1 viewer/use-diff-inputs.ts
   1 viewer/TabStrip.tsx
<shellId: 13 completed with exit code 0>
```

</details>


---

<sub>31s</sub>

### `bash`

**Check installer install paths**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== installer install paths ==="; grep -nE '/opt/hvir|/Applications|/usr/local/bin|/usr/bin|hvir-command|installer -pkg|dpkg|apt|curl|--uninstall|settings|cache' scripts/native-installer.template.sh | head -60

<details>
<summary>62 lines</summary>

```
=== installer install paths ===
1:#!/usr/bin/env bash
28:legacy_cache=''
60:  install.sh --uninstall
61:  install.sh --uninstall --purge
64:--purge additionally removes the current user's documented hvir settings and cache.
73:    --uninstall) operation='uninstall' ;;
85:    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
101:  kernel=$(/usr/bin/uname -s)
102:  machine=$(/usr/bin/uname -m)
109:    native_command='/usr/bin/hvir'
116:    native_command='/usr/bin/hvir'
123:    native_command='/usr/local/bin/hvir'
142:  require_absolute_tool /usr/bin/sudo
144:    require_absolute_tool /usr/bin/curl
147:    require_absolute_tool /usr/bin/apt
148:    require_absolute_tool /usr/bin/apt-get
149:    require_absolute_tool /usr/bin/dpkg-deb
150:    require_absolute_tool /usr/bin/dpkg-query
151:    require_absolute_tool /usr/bin/getconf
152:    require_absolute_tool /usr/bin/sha256sum
153:    require_absolute_tool /usr/bin/unshare
155:    require_absolute_tool /usr/bin/shasum
159:    require_absolute_tool /usr/bin/xcrun
183:  glibc_output=$(/usr/bin/getconf GNU_LIBC_VERSION 2>/dev/null) || {
196:  if /usr/bin/unshare --user true >/dev/null 2>&1; then
215:  temporary_directory=$(umask 077 && /usr/bin/mktemp -d \
235:    /usr/bin/curl \
251:    digest_output=$(/usr/bin/sha256sum "$artifact")
253:    digest_output=$(/usr/bin/shasum -a 256 "$artifact")
270:    /usr/bin/apt-get \
276:      "The hvir package dependencies are not available from this host's configured apt repositories." \
285:  profile="$package_root/opt/hvir/resources/apparmor-profile"
288:  /usr/bin/dpkg-deb --extract "$artifact" "$package_root"
314:  if ! /usr/bin/grep -Eq \
321:  if ! /usr/bin/grep -Fq 'Signed with a trusted timestamp' "$signature_log"; then
330:    /usr/bin/xcrun stapler validate "$artifact"
341:    /usr/bin/dpkg-query -W -f='${Status}' hvir 2>/dev/null |
342:      /usr/bin/grep -Fq 'install ok installed'
346:      /usr/bin/grep -Fq 'hvir-native-package-command-v1' "$native_command"
352:  target=$(/usr/bin/readlink "$link")
355:  *) target=$(/usr/bin/dirname "$link")/$target ;;
357:  parent=$(cd "$(/usr/bin/dirname "$target")" && pwd -P)
358:  printf '%s/%s\n' "$parent" "$(/usr/bin/basename "$target")"
369:legacy_cache_root() {
375:    printf '%s/.cache/hvir/native\n' "$HOME"
406:  expected_target=$(cd "$(/usr/bin/dirname "$expected_target")" && pwd -P)/$(
407:    /usr/bin/basename "$expected_target"
425:  legacy_cache=$(legacy_cache_root)
434:  /usr/bin/grep -Fq 'hvir-native-package-command-v1' "$native_command" || {
444:safe_remove_legacy_cache() {
445:  [[ -n "$legacy_cache" ]] || return 0
446:  case "$legacy_cache" in
449:    echo "Refusing to remove unexpected legacy cache path: $legacy_cache" >&2
453:  /bin/rm -rf -- "$legacy_cache"
468:  stage='removing the derived ADR-018 native cache'
469:  safe_remove_legacy_cache
514:      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
517:    stage="installing hvir $HVIR_VERSION with apt"
521:      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
539:  /usr/bin/grep -Fxq 'hvir-native-package-inventory-v1' "$inventory"
<shellId: 14 completed with exit code 0>
```

</details>


---

<sub>31s</sub>

### `bash`

**Read hooks, seams, and tooling configs**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== install-git-hooks.sh ==="; cat scripts/install-git-hooks.sh; echo "=== check-seams.sh (head 30) ==="; head -30 scripts/check-seams.sh; echo "=== vitest.config.ts ==="; cat vitest.config.ts; echo "=== stryker.config.json ==="; cat stryker.config.json; echo "=== .prettierrc.json ==="; cat .prettierrc.json; echo "=== tsconfig.json ==="; cat tsconfig.json

<details>
<summary>89 lines</summary>

```
=== install-git-hooks.sh ===
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

configured_hooks_path=$(git config --local --get core.hooksPath || true)
if [[ -n "$configured_hooks_path" && "$configured_hooks_path" != ".githooks" ]]; then
  echo "Refusing to replace existing core.hooksPath: $configured_hooks_path" >&2
  echo "Integrate .githooks/pre-push there manually if you want hvir's local validation hook." >&2
  exit 1
fi

git config --local core.hooksPath .githooks
echo "Installed hvir Git hooks from .githooks/."
echo "Pushes now run TypeScript checks and the local-platform Electron smoke test; use git push --no-verify to bypass them."
=== check-seams.sh (head 30) ===
#!/usr/bin/env bash
#
# Grep-level enforcement of the architectural seams (AGENTS.md "Respect the
# seams"). This is a coarse backstop that complements the precise ESLint rules
# in eslint.config.mjs — it catches a violation even if lint is skipped, and
# documents the invariants in one readable place.
#
set -uo pipefail

fail=0
SRC="src"

report() {
  # $1 = human description, $2 = matching lines (empty = ok)
  if [[ -n "$2" ]]; then
    printf '\033[31m✗ %s\033[0m\n' "$1"
    printf '%s\n' "$2" | sed 's/^/    /'
    fail=1
  else
    printf '\033[32m✓ %s\033[0m\n' "$1"
  fi
}

# 1. ipcRenderer only in the preload bridge.
hits=$(grep -rnw 'ipcRenderer' "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -v '^src/preload/' || true)
report "ipcRenderer used only in src/preload/" "$hits"

# 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
=== vitest.config.ts ===
import { defineConfig } from 'vitest/config'

// Unit tests run under plain Node (not Electron). They cover the pure/seam
// logic — HostPath, LocalHost's fs/exec/watch — never the Electron runtime.
export default defineConfig({
  test: {
    environment: 'node',
    // Node's experimental global shadows happy-dom's renderer-owned storage.
    execArgv: ['--no-experimental-webstorage'],
    include: ['test/**/*.test.{ts,tsx}'],
    setupFiles: ['./test/test-console-output-policy.ts'],
  },
})
=== stryker.config.json ===
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "testRunner": "vitest",
  "mutate": ["src/main/git/git-parsers.ts"],
  "ignorePatterns": [".agents/**"],
  "reporters": ["clear-text"],
  "clearTextReporter": {
    "allowColor": false,
    "logTests": false,
    "reportTests": false,
    "reportMutants": true,
    "reportScoreTable": true,
    "skipFull": false
  },
  "concurrency": 4,
  "tempDirName": "out/stryker-tmp",
  "vitest": {
    "configFile": "vitest.config.ts",
    "related": true
  }
}
=== .prettierrc.json ===
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}
=== tsconfig.json ===
{
  "files": [],
  "references": [{ "path": "./tsconfig.node.json" }, { "path": "./tsconfig.web.json" }]
}
<shellId: 15 completed with exit code 0>
```

</details>


---

<sub>34s</sub>

### Copilot

The repo references `AGENTS.md` and `docs/`, but neither is tracked, so the README shouldn't link to them. Next I'll read the architecture seams, the main entry point, and the host and session modules.

---

<sub>37s</sub>

### `bash`

**Read seams and main entry point**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== check-seams.sh (30-end) ==="; sed -n '30,200p' scripts/check-seams.sh | grep -nE '^# [0-9]+\.|report "' ; echo "=== main/index.ts (head 110) ==="; head -110 src/main/index.ts

<details>
<summary>136 lines</summary>

```
=== check-seams.sh (30-end) ===
4:report "host primitives imported only in local-host.ts" "$hits"
6:# 3. PTY spawning (host.spawnPty call sites) only in the supervisor.
9:report "host.spawnPty() called only in pty-supervisor.ts" "$hits"
11:# 4. Bundled harness identities stay inside provider-owned main modules. Shared
16:report "bundled harness ids used only in src/main/harness/" "$hits"
18:# 5. Raw loopback streams are transport for the main-owned pane proxy, never a
22:report "host.connectLoopback() called only in the web-pane proxy" "$hits"
24:# 6. ipcMain is a single transport choke point. Feature registrars receive the
28:report "ipcMain used only in the IPC authority router" "$hits"
30:# 7. Feature registrars cannot bypass central renderer-owner or canonical-path
34:report "IPC features use central owner/path authority" "$hits"
36:# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
41:report "ssh2 details stay inside the SshHost adapter" "$hits"
43:# 9. Host-local collaborators share SshHost's authentication lifecycle. They
47:report "SSH collaborators do not create independent clients" "$hits"
49:# 10. The collaborators are private composition details, not parallel
53:report "only SshHost is exported as the remote host façade" "$hits"
55:# 11. The project-host catalog is the only main-process owner allowed to
68:report "SSH construction and implementation owners stay in the host catalog" "$hits"
70:# 12. Git capability modules share one command/cancellation/root policy. No
74:report "Git commands use the shared command context" "$hits"
76:# 13. The utility-process proxy implements only Git's exact exec/read/metadata port,
80:report "Git worker proxy exposes only exact exec, read, and metadata operations" "$hits"
=== main/index.ts (head 110) ===
import { app, BrowserWindow, dialog, shell } from 'electron'
import { registerIpcHandlers } from './ipc'
import { createProjectCommands } from './ipc/project-commands'
import { GitMutationCoordinator } from './git/mutation-coordinator'
import { GitMutationAuthorization } from './git/mutation-authorization'
import { GitWorkerHostRouter } from './git/worker-host-router'
import { HtmlPreviewProtocol } from './html-preview-protocol'
import { createWorkerClient, workerPath, type WorkerClient } from './worker-host'
import { electronTrash, ProjectHostCatalog, RendererSshPrompter } from './project-host'
import { ProjectFolderPickerCoordinator as FolderPicker } from './project-folder-picker'
import { electronReveal } from './project-host/electron-project-reveal'
import { ProjectRegistry } from './project-registry'
import { ProjectCoordinator } from './project-coordinator'
import { PtySupervisor } from './pty/pty-supervisor'
import { AttentionBadge } from './attention-badge'
import { HarnessProfileStore } from './harness/harness-profile-store'
import { HarnessProbeManager } from './harness/harness-probe'
import { harnessProviders } from './harness/harness-provider'
import { createElectronRemoteImagePasteCoordinator } from './harness/electron-clipboard-image'
import { ProjectWatchController } from './project-watch'
import { WorkspaceCoordinator } from './workspace-coordinator'
import { createWorkspaceCleanup } from './workspace-cleanup'
import { WorkspaceRemovalCoordinator } from './workspace-removal-coordinator'
import { TerminalSessionRegistry } from './terminal/session-registry'
import { TerminalWorkspaceMoveCoordinator } from './terminal/terminal-workspace-move-coordinator'
import { installTerminalIdentityPublication } from './terminal/terminal-identity-publication'
import { RendererResourceScopes, type RendererOwner } from './renderer-resource-scopes'
import { createRendererPresentationInstaller } from './renderer-presentation-resources'
import { createElectronWindowManager } from './window/electron-window-manager'
import { WorkbenchRuntime } from './workbench-runtime'
import { RuntimeDiagnostics } from './diagnostics/runtime-diagnostics'
import { createDiagnosticReportCoordinator } from './diagnostics/diagnostic-report-coordinator'
import { RendererEventPublisher } from './renderer-event-publisher'
import { createFilenameSearchCoordinator } from './filename-search'
import { createProjectFileOperationCoordinator } from './project-file-operations'
import type { DocumentReviewRuntime } from './document-review'
import { installApplicationDocumentReviewRuntime } from './document-review/document-review-application'
import { installApplicationSessionsObservation } from './sessions/sessions-observation-application'
import { applicationRuntime, applicationUserDataPath } from './application-runtime'
import {
  GIT_WORKSPACE_ACTIVITY_TYPE,
  GIT_FETCH_TYPE,
  GIT_PRUNE_WORKTREES_TYPE,
  GIT_PULL_TYPE,
  GIT_SWITCH_BRANCH_TYPE,
  GIT_WORKTREES_TYPE,
  localPath,
  type EchoWorkerProtocol,
  type GitWorkerProtocol,
} from '../shared'
HtmlPreviewProtocol.registerScheme()
function createWorkbenchEntry(): void {
  const runtime = new WorkbenchRuntime({
    start: startup,
    suspend: suspendWorkbenchSessions,
    reopen: reopenWorkbench,
    shutdown,
  })
  const htmlPreviews = runtime.own(
    'HTML preview protocol',
    new HtmlPreviewProtocol(),
    (previews) => previews.dispose(),
  )
  const harnessProbeManager = runtime.own(
    'harness probe manager',
    new HarnessProbeManager(),
    (probes) => probes.dispose(),
  )
  const rendererScopes = runtime.own(
    'renderer resource scopes',
    new RendererResourceScopes(),
    (scopes) => scopes.dispose(),
  )
  const rendererEvents = new RendererEventPublisher(rendererScopes)
  const diagnostics = RuntimeDiagnostics.create(
    applicationRuntime.userDataRoot,
    app.isPackaged || __HVIR_SMOKE_BUILD__,
    (state) => rendererEvents.toWindows('workbench-health:state', state),
  )
  const diagnosticReports = runtime.own(
    'Diagnostic reports',
    createDiagnosticReportCoordinator(diagnostics, rendererScopes, applicationRuntime),
    (reports) => reports.dispose(),
  )
  const diagnosticIpc = { reports: diagnosticReports, evidence: diagnostics }
  diagnostics.recordApplication('application-starting')
  const gitMutationAuthorizations = runtime.own(
    'Git mutation authorizations',
    new GitMutationAuthorization(),
    (authorizations) => authorizations.dispose(),
  )
  let echoWorker: WorkerClient<EchoWorkerProtocol> | null = null
  let gitWorker: WorkerClient<GitWorkerProtocol> | null = null
  let projectRegistry: ProjectRegistry | null = null
  let sshPrompter: RendererSshPrompter | null = null
  let ptySupervisor: PtySupervisor | null = null
  let terminalSessionRegistry: TerminalSessionRegistry | null = null
  let harnessProfileStore: HarnessProfileStore | null = null
  let documentReview: DocumentReviewRuntime | null = null
  let attentionBadge: AttentionBadge | null = null
  let workspaceCoordinator: WorkspaceCoordinator | null = null
  let hostCatalog: ProjectHostCatalog | null = null
  const installRendererPresentation = createRendererPresentationInstaller({
    scopes: rendererScopes,
    reports: diagnosticReports,
    attention: () => attentionBadge,
    sshPrompter: () => sshPrompter,
  })
  const windowManager = runtime.own(
    'Electron window manager',
<shellId: 16 completed with exit code 0>
```

</details>


---

<sub>37s</sub>

### `bash`

**Map host, session, terminal modules**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== project-host ==="; git ls-files src/main/project-host | sed 's#src/main/project-host/##'; echo "=== sessions ==="; git ls-files src/main/sessions | sed 's#src/main/##'; echo "=== terminal + pty ==="; git ls-files src/main/terminal src/main/pty | sed 's#src/main/##'; echo "=== web-pane, viewer, health, window ==="; git ls-files src/main/web-pane src/main/viewer src/main/health src/main/window | sed 's#src/main/##'; echo "=== shared/ipc-contract head ==="; head -30 src/shared/ipc-contract.ts

<details>
<summary>85 lines</summary>

```
=== project-host ===
electron-project-reveal.ts
electron-project-trash.ts
index.ts
local-host.ts
project-host-catalog.ts
project-host.ts
renderer-ssh-prompter.ts
ssh-abort.ts
ssh-auth.ts
ssh-client-lifecycle.ts
ssh-config.ts
ssh-exclusive-create.ts
ssh-file-access.ts
ssh-host-options.ts
ssh-host-trust.ts
ssh-host.ts
ssh-identity-source.ts
ssh-project-file-transfer.ts
ssh-text-prefix.ts
ssh-transport-pool.ts
ssh-watch-service.ts
=== sessions ===
sessions/sessions-observation-application.ts
sessions/sessions-observation-port.ts
sessions/sessions-open-resolution.ts
sessions/sessions-projection-identities.ts
sessions/sessions-projection-values.ts
sessions/sessions-telemetry-projection.ts
sessions/sessions-usage-observation-port.ts
sessions/sessions-usage-projection.ts
=== terminal + pty ===
pty/pty-contract.ts
pty/pty-launch-admission.ts
pty/pty-session-lifetime.ts
pty/pty-session-observation.ts
pty/pty-stream-attachment.ts
pty/pty-supervisor.ts
terminal/electron-clipboard-file-paste.ts
terminal/renderer-pty-lifecycle.ts
terminal/session-registry.ts
terminal/terminal-identity-publication.ts
terminal/terminal-launch-admission.ts
terminal/terminal-start-response.ts
terminal/terminal-workspace-move-coordinator.ts
=== web-pane, viewer, health, window ===
health/workbench-health-events.ts
health/workbench-health.ts
viewer/document-read-authority.ts
web-pane/loopback-http-proxy.ts
web-pane/web-pane-route-registry.ts
window/electron-renderer-document-lifecycle.ts
window/electron-renderer-recovery.ts
window/electron-window-manager.ts
window/renderer-recovery-monitor.ts
window/window-health-tracker.ts
window/window-policy.ts
=== shared/ipc-contract head ===
/** Static IPC composition only: these witnesses carry types, never handlers or validators. */
interface InvokeDeclaration<Request, Response, Access extends 'renderer' | 'preload'> {
  /** Phantom payload types; no request or response data is allocated here. */
  readonly types: { request: Request; response: Response }
  readonly access: Access
}

interface PayloadDeclaration<Payload> {
  readonly types: Payload
}

export function invoke<Request, Response>(): InvokeDeclaration<
  Request,
  Response,
  'renderer'
> {
  return { access: 'renderer' } as InvokeDeclaration<Request, Response, 'renderer'>
}

export function preloadInvoke<Request, Response>(): InvokeDeclaration<
  Request,
  Response,
  'preload'
> {
  return { access: 'preload' } as InvokeDeclaration<Request, Response, 'preload'>
}

export function payload<Payload>(): PayloadDeclaration<Payload> {
  return {} as PayloadDeclaration<Payload>
}
<shellId: 17 completed with exit code 0>
```

</details>


---

<sub>37s</sub>

### `bash`

**Read eslint config and doc references**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== eslint.config.mjs (head 60) ==="; head -60 eslint.config.mjs; echo "=== AGENTS/.agents/docs refs in repo (non node_modules) ==="; git grep -ln 'AGENTS.md\|docs/design\|\.agents/' -- ':!node_modules' | head -20

<details>
<summary>66 lines</summary>

```
=== eslint.config.mjs (head 60) ===
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'
import { smokeImportBoundary } from './scripts/smoke-import-boundary.mjs'

// --- Seam enforcement (AGENTS.md "Respect the seams") ---------------------
//
// These import bans are how the architecture is enforced mechanically rather
// than by convention. Native/host primitives may only be touched inside the
// `LocalHost` module; `ipcRenderer` only inside the preload bridge; and
// `.spawnPty()` may only be *called* by the PTY supervisor.

/** node builtins + native modules — confined to the LocalHost implementation. */
const HOST_PRIMITIVE_BANS = [
  'fs',
  'node:fs',
  'fs/promises',
  'node:fs/promises',
  'child_process',
  'node:child_process',
  'chokidar',
  'node-pty',
].map((name) => ({
  name,
  message:
    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
    'src/main/project-host/local-host.ts. Go through the ProjectHost seam (ADR-010).',
}))

const DYNAMIC_HOST_IMPORT_BANS = HOST_PRIMITIVE_BANS.map(({ name, message }) => ({
  selector: `ImportExpression[source.value='${name}']`,
  message,
}))

/** `ipcRenderer` — confined to the preload bridge. */
const IPC_RENDERER_BAN = {
  name: 'electron',
  importNames: ['ipcRenderer'],
  message:
    'ipcRenderer may only be used in src/preload. The renderer talks to main ' +
    'through the typed bridge (window.hvir), never ipcRenderer directly.',
}

const SPAWN_PTY_BAN = {
  selector:
    "MemberExpression[property.name='spawnPty'], " +
    "MemberExpression[computed=true][property.value='spawnPty']",
  message:
    'Every PTY must be spawned through the PTY supervisor (ADR-006). Do not access ' +
    'host.spawnPty outside src/main/pty/pty-supervisor.ts.',
}

// Both erased and runtime contract dependencies point inward. The two barrels
// are compatibility/composition surfaces, never domain dependencies.
const SHARED_CONTRACT_IMPORT_BAN =
  '(^|/)(ipc|index|shared)(\\.[cm]?[jt]sx?)?$|(^|/)(main|preload|renderer|workers)(/|$)|^\\.\\.?$|^electron$'
const SHARED_CONTRACT_MESSAGE =
  'Shared capability contracts import named shared leaves, not the IPC aggregate, barrels, or process implementations.'
=== AGENTS/.agents/docs refs in repo (non node_modules) ===
eslint.config.mjs
scripts/check-adrs.mjs
scripts/check-seams.sh
src/main/smoke/viewer-content.ts
stryker.config.json
test/architecture-module-graph.test.ts
test/architecture-policy.test.ts
test/merge-pr-skill.test.ts
test/rendered-link.test.ts
<shellId: 18 completed with exit code 0>
```

</details>


---

<sub>47s</sub>

### Copilot

The architecture is strict: host primitives are confined to `LocalHost`, PTYs go through a supervisor, and IPC runs through a typed preload bridge. Next I'll check the rename-noreplace native package, the terminal runtime check, the keybindings, and the settings sections, so the setup steps are accurate.

---

<sub>47s</sub>

### `bash`

**Read terminal runtime check and native package**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== check-terminal-runtime.mts ==="; cat scripts/check-terminal-runtime.mts | head -80; echo "=== packages/rename-noreplace/index.js ==="; cat packages/rename-noreplace/index.js | head -40; echo "=== packages/rename-noreplace/package.json ==="; cat packages/rename-noreplace/package.json

<details>
<summary>96 lines</summary>

```
=== check-terminal-runtime.mts ===
#!/usr/bin/env node

import console from 'node:console'
import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { GHOSTTY_TERMINAL_CAPABILITY_PROFILE } from './ghostty-terminal-capability-profile.mts'

const REQUIRED_TERMINAL_METHODS = [
  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.synchronizedOutput.terminalMethods,
  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.hostOwnedContextMenu.terminalMethods,
  ...GHOSTTY_TERMINAL_CAPABILITY_PROFILE.retainedBuffer.terminalMethods,
] as const
const REQUIRED_PARSER_METHODS =
  GHOSTTY_TERMINAL_CAPABILITY_PROFILE.synchronizedOutput.parserMethods
const RECOVERY = 'Run `npm ci` in this worktree, then retry the command.'

interface TerminalConstructor {
  readonly prototype: object
}

interface TerminalRuntimeModule {
  readonly Terminal: TerminalConstructor
  readonly GhosttyTerminal: TerminalConstructor
}

type LoadTerminalRuntime = () => Promise<unknown>
type ReadInstalledWasmBytes = () => Promise<number>

const readInstalledWasmBytes: ReadInstalledWasmBytes = async () =>
  (await stat(fileURLToPath(import.meta.resolve('ghostty-web/ghostty-vt.wasm')))).size

function hasCustomLinkProviderPriorityAndForcedRender(prototype: object): boolean {
  const register = Reflect.get(prototype, 'registerLinkProvider') as unknown
  if (typeof register !== 'function') return false

  const provider = Object.freeze({})
  let receivedProvider: unknown
  let receivedPriority: unknown
  let forcedRender: unknown
  try {
    Reflect.apply(
      register,
      {
        linkDetector: {
          registerProvider(candidate: unknown, priority?: boolean) {
            receivedProvider = candidate
            receivedPriority = priority
          },
        },
        requestRender(force?: boolean) {
          forcedRender = force
        },
      },
      [provider],
    )
  } catch {
    return false
  }
  return (
    receivedProvider === provider && receivedPriority === true && forcedRender === true
  )
}

function isTerminalConstructor(value: unknown): value is TerminalConstructor {
  if (typeof value !== 'function') return false
  const prototype = Reflect.get(value, 'prototype') as unknown
  return typeof prototype === 'object' && prototype !== null
}

export function assertTerminalRuntimeContract(runtime: TerminalRuntimeModule): void {
  const missing: string[] = REQUIRED_TERMINAL_METHODS.filter(
    (method) => typeof Reflect.get(runtime.Terminal.prototype, method) !== 'function',
  )
  missing.push(
    ...REQUIRED_PARSER_METHODS.filter(
      (method) =>
        typeof Reflect.get(runtime.GhosttyTerminal.prototype, method) !== 'function',
=== packages/rename-noreplace/index.js ===
'use strict'

/* global module, require */

module.exports = require('./build/Release/rename_noreplace.node')
=== packages/rename-noreplace/package.json ===
{
  "name": "@hvir/rename-noreplace",
  "version": "0.1.0",
  "private": true,
  "description": "Private hvir Node-API binding for atomic no-replace rename",
  "license": "MIT",
  "main": "index.js",
  "files": [
    "index.js",
    "LICENSE",
    "binding.gyp",
    "rename_noreplace.c",
    "build/Release/rename_noreplace.node"
  ],
  "gypfile": true,
  "os": [
    "darwin",
    "linux"
  ]
}
<shellId: 19 completed with exit code 0>
```

</details>


---

<sub>47s</sub>

### `bash`

**Read settings sections and keybindings**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== settings sections ==="; git ls-files src/renderer/src/settings | sed 's#src/renderer/src/settings/##'; echo "=== keybindings head ==="; head -60 src/shared/keybindings.ts

<details>
<summary>91 lines</summary>

```
=== settings sections ===
ComposerSubmitConsentDialog.tsx
HarnessProfileAdvancedFields.tsx
HarnessProfileCommandFields.tsx
HarnessProfileDialogs.tsx
HarnessProfileEditor.tsx
HarnessProfileOverlays.tsx
HarnessProfilesSettings.tsx
SettingsActiveSection.tsx
SettingsDialog.tsx
SettingsSection.tsx
SettingsSectionNavigation.tsx
TerminalThemeGallery.tsx
harness-argument-editor.ts
harness-profile-draft.ts
harness-profile-editor-policy.ts
harness-profile-request-policy.ts
keybindings.ts
sections/AppearanceSettings.tsx
sections/GitSettings.tsx
sections/KeybindingsSettings.tsx
sections/TerminalSettings.tsx
sections/TypographyFontField.tsx
settings-draft.ts
settings-model.ts
settings-navigation.ts
settings.ts
typography-presentation.ts
typography-settings.ts
use-add-harness-dialog.ts
use-harness-binding-authorization.ts
use-harness-folder-picker.ts
use-harness-profile-editor.ts
use-harness-profile-load.ts
use-settings-controller.ts
=== keybindings head ===
export const KEYBINDING_ACTIONS = [
  'cycleViewMode',
  'findFile',
  'findInFile',
  'findInTerminal',
  'goToLine',
  'focusTerminal',
  'focusViewer',
  'focusTree',
  'toggleTerminalFocus',
  'nextWorkspace',
  'previousWorkspace',
] as const

export type KeybindingAction = (typeof KEYBINDING_ACTIONS)[number]
export type KeybindingMap = Readonly<Record<KeybindingAction, string>>

export const DEFAULT_KEYBINDINGS: KeybindingMap = {
  cycleViewMode: 'Mod+Shift+M',
  findFile: 'Mod+P',
  findInFile: 'Mod+F',
  // Keep ordinary PTY Ctrl+F available on every platform. Terminal search uses
  // the existing workbench Shift variant instead of borrowing viewer search.
  findInTerminal: 'Mod+Shift+F',
  goToLine: 'Ctrl+G',
  focusTerminal: 'Mod+J',
  focusViewer: 'Mod+1',
  focusTree: 'Mod+0',
  toggleTerminalFocus: 'Mod+Shift+J',
  nextWorkspace: 'Mod+Alt+]',
  previousWorkspace: 'Mod+Alt+[',
}

export type KeybindingContext = 'workbench' | 'terminal' | 'web-pane'

export function keybindingAvailableInContext(
  action: KeybindingAction,
  context: KeybindingContext,
): boolean {
  if (action === 'findFile') return context !== 'terminal'
  if (action === 'findInFile') return context === 'workbench'
  if (action === 'findInTerminal') return context === 'terminal'
  if (action === 'goToLine') return context === 'workbench'
  if (action === 'cycleViewMode') return context !== 'terminal'
  return true
}

export interface KeyboardStroke {
  readonly key: string
  readonly code?: string
  readonly ctrlKey: boolean
  readonly metaKey: boolean
  readonly altKey: boolean
  readonly shiftKey: boolean
}

interface ParsedKeybinding {
  readonly key: string
  readonly mod: boolean
  readonly ctrl: boolean
<shellId: 20 completed with exit code 0>
```

</details>


---

<sub>47s</sub>

### `bash`

**Summarize test coverage areas**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== test file groups (prefix counts) ==="; git ls-files test | sed 's#test/##; s#\..*##' | awk -F- '{print $1}' | sort | uniq -c | sort -rn | head -70; echo "=== total tests ==="; git ls-files test | grep -c '\.test\.'

<details>
<summary>74 lines</summary>

```
=== test file groups (prefix counts) ===
  52 terminal
  26 project
  21 harness
  14 git
  14 ghostty
  13 document
  12 smoke
  11 pty
   9 viewer
   9 sessions
   9 renderer
   9 github
   8 ssh
   8 external
   7 workbench
   7 diagnostic
   7 architecture
   6 workspace
   6 web
   6 electron
   5 use
   5 fixtures/rendered
   5 fixtures/clipboard
   5 file
   4 settings
   4 release
   4 native
   4 issue
   4 filename
   4 claude
   4 capacity
   3 source
   3 session
   3 rendered
   3 macos
   3 ipc
   3 commit
   3 codex
   2 worker
   2 window
   2 verified
   2 test
   2 real
   2 markdown
   2 installed
   2 html
   2 highlight
   2 fixtures/viewer
   2 fixtures/ghostty
   2 development
   2 contributor
   2 clipboard
   2 ci
   1 viewport
   1 untracked
   1 typography
   1 tree
   1 token
   1 style
   1 structured
   1 staging
   1 shiki
   1 scrollbar
   1 retained
   1 required
   1 remote
   1 projects
   1 private
   1 prepare
   1 path
=== total tests ===
376
<shellId: 21 completed with exit code 0>
```

</details>


---

<sub>53s</sub>

### Copilot

Next I'll verify the specifics the README will state: harness provider names and binaries, user-data paths, and the feature-level module headers.

---

<sub>55s</sub>

### `bash`

**Extract harness provider display names**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== provider display names / executables ==="; grep -nE "displayName|executable|command:|binary" src/main/harness/providers/*.ts | grep -vE "^\s*//" | head -60

<details>
<summary>18 lines</summary>

```
=== provider display names / executables ===
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
src/main/harness/providers/codex.ts:144:    launch.profile.executable.kind === 'provider-default' &&
src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
<shellId: 22 completed with exit code 0>
```

</details>


---

<sub>55s</sub>

### `bash`

**Check user-data paths and module headers**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== userDataRoot / userData paths ==="; grep -rnE "userDataRoot|setPath\(|getPath\('userData'\)|\.config/hvir|Application Support" src/main/application-runtime*.ts | head -20; echo "=== section headers of key shared modules ==="; for f in src/shared/sessions-projection.ts src/shared/document-review.ts src/shared/web-pane.ts src/shared/filename-search.ts src/shared/composer-submit.ts src/shared/html-preview.ts; do echo "--- $f"; head -6 "$f"; done

<details>
<summary>41 lines</summary>

```
=== userDataRoot / userData paths ===
src/main/application-runtime-policy.ts:9:  readonly userDataRoot: string
src/main/application-runtime-policy.ts:14:  setPath(name: 'userData', path: string): void
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:26:  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
src/main/application-runtime-policy.ts:27:  prepareUserDataRoot(userDataRoot)
src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
src/main/application-runtime-policy.ts:29:  return { buildChannel, userDataRoot }
src/main/application-runtime.ts:17:  return join(applicationRuntime.userDataRoot, name)
=== section headers of key shared modules ===
--- src/shared/sessions-projection.ts
import type { HostConnectionState } from './fs-types'
import type { HarnessProfileId } from './harness-profile'
import type { HarnessContextPressurePolicy, HarnessProviderId } from './harness-provider'
import type { HarnessUsageValue } from './harness-usage'
import type { ProjectState } from './workspace-types'

--- src/shared/document-review.ts
import { containsHostPath, hostPathEquals, type HostPath } from './host-path'

export const DOCUMENT_REVIEW_LIMITS = {
  batchesPerWorkspace: 1,
  batchMembers: 64,
  commentsPerDocument: 64,
--- src/shared/web-pane.ts
export type LoopbackHostname = 'localhost' | '127.0.0.1' | '::1'

export interface LoopbackEndpoint {
  readonly hostname: LoopbackHostname
  readonly port: number
}
--- src/shared/filename-search.ts
import type { HostPath } from './host-path'

export const FILENAME_SEARCH_RESULT_LIMIT = 100

export interface FilenameSearchRequest {
  readonly root: HostPath
--- src/shared/composer-submit.ts
export type ComposerSubmitMode = 'enter' | 'ctrl-enter'
--- src/shared/html-preview.ts
import type { HostPath } from './host-path'

/** HTML previews execute only inside an opaque-origin sandboxed frame. */
export const HTML_PREVIEW_SCHEME = 'hvir-preview'
export const HTML_SANDBOX = 'allow-scripts'
<shellId: 23 completed with exit code 0>
```

</details>


---

<sub>55s</sub>

### `bash`

**Check SSH, host, and git module headers**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== ssh-config / auth / trust headers ==="; for f in src/main/project-host/ssh-config.ts src/main/project-host/ssh-auth.ts src/main/project-host/ssh-host-trust.ts src/main/project-host/project-host.ts src/main/project-host/ssh-identity-source.ts; do echo "--- $f"; head -8 "$f"; done; echo "=== git-engine head ==="; head -12 src/main/git/git-engine.ts; echo "=== application-runtime-policy head ==="; head -15 src/main/application-runtime-policy.ts

<details>
<summary>68 lines</summary>

```
=== ssh-config / auth / trust headers ===
--- src/main/project-host/ssh-config.ts
import SSHConfig from 'ssh-config'

export interface SshAliasConfig {
  readonly alias: string
  readonly hostname: string
  readonly user: string
  readonly port: number
  readonly identityFiles: readonly string[]
--- src/main/project-host/ssh-auth.ts
export interface SshPrompt {
  readonly hostId: string
  readonly kind:
    'password' | 'passphrase' | 'keyboard-interactive' | 'host-key' | 'host-key-changed'
  readonly title: string
  readonly instructions?: string
  readonly fingerprint?: string
  readonly previousFingerprint?: string
--- src/main/project-host/ssh-host-trust.ts
import type { HostPath } from '../../shared'
import type { ProjectHost } from './project-host'

type TrustMetadataHost = Pick<ProjectHost, 'readTextFile' | 'writeFile'>

export interface SshHostTrust {
  readonly trustedHostKey: () => string | undefined
  readonly rememberHostKey: (fingerprint: string) => Promise<void>
--- src/main/project-host/project-host.ts
/**
 * `ProjectHost` — the transport seam (ADR-010).
 *
 * Every filesystem, exec, PTY, and watch operation in hvir goes through a
 * `ProjectHost`. `LocalHost` is the default implementation; `SshHost` (Phase 4)
 * will implement the same interface over ssh2. Nothing above this seam knows or
 * cares whether a project is local or remote — remoteness is transport, not a
 * server. All paths are host-qualified `HostPath`s.
--- src/main/project-host/ssh-identity-source.ts
import { localPath } from '../../shared'
import type { ProjectHost } from './project-host'

export interface SshIdentityLease {
  readonly path: string
  readonly privateKey: Buffer
  release(): void
}
=== git-engine head ===
import type {
  DiffBase,
  GitBlameRun,
  GitBranchModel,
  GitChanges,
  GitCommitDetail,
  GitDiffResponse,
  GitHistoryPage,
  HostPath,
  WorktreeDiscovery,
  WorkspaceActivityResult,
} from '../../shared'
=== application-runtime-policy head ===
import { join } from 'node:path'

import type { ApplicationBuildChannel } from '../shared'

export const SSH_ACCEPTANCE_USER_DATA_DIRECTORY = 'hvir-ssh-acceptance'

export interface ApplicationRuntime {
  readonly buildChannel: ApplicationBuildChannel
  readonly userDataRoot: string
}

interface ElectronApplicationPaths {
  getPath(name: 'appData' | 'userData'): string
  setPath(name: 'userData', path: string): void
}
<shellId: 24 completed with exit code 0>
```

</details>


---

<sub>1m 4s</sub>

### Copilot

I have the provider list and SSH model. Next I'll confirm the workbench concepts (workspace, view modes, viewer kinds) and the git feature surface, so the feature list uses the app's own terms.

---

<sub>1m 5s</sub>

### `bash`

**Read workspace and view-mode types**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== workspace-types head ==="; head -40 src/shared/workspace-types.ts; echo "=== view mode types ==="; grep -rnE "export type (\w*ViewMode\w*|\w*Mode)\s*=" src/shared src/renderer/src | head -10

<details>
<summary>45 lines</summary>

```
=== workspace-types head ===
import type { HostConnectionState, HostWatchTier } from './fs-types'
import type { HostPath } from './host-path'

export interface ProjectRootResponse {
  readonly root: HostPath
}

export interface ProjectState extends ProjectRootResponse {
  /** Main-owned identity for ordering and deduplicating authoritative state. */
  readonly revision: number
  readonly connectionState: HostConnectionState
  readonly watchTier: HostWatchTier
  readonly projects: readonly RegisteredProjectState[]
  readonly activeProjectId: string
  readonly activeWorkspaceId: string
}

export const WORKSPACE_ACTIVITY_SCHEMA = 1
export const WORKSPACE_ACTIVITY_STATUS_LIMIT = 2_000
export const WORKSPACE_ACTIVITY_FIELDS = 'head-branch-porcelain-v2-path-state' as const

/** Bounded result of the existing per-worktree porcelain status invocation. */
export interface WorkspaceStatusActivity {
  readonly schema: typeof WORKSPACE_ACTIVITY_SCHEMA
  readonly fields: typeof WORKSPACE_ACTIVITY_FIELDS
  readonly statusLimit: typeof WORKSPACE_ACTIVITY_STATUS_LIMIT
  readonly statusEntryCount: number
  readonly statusTruncated: boolean
  readonly statusDigest: string
}

/** Host-qualified comparison state retained only for a closed workspace. */
export interface WorkspaceActivitySnapshot extends WorkspaceStatusActivity {
  readonly root: HostPath
  readonly head?: string
  readonly branch?: string
}

export interface WorkspaceActivityResult {
  readonly changedFiles: number
=== view mode types ===
src/shared/composer-submit.ts:1:export type ComposerSubmitMode = 'enter' | 'ctrl-enter'
src/shared/viewer-types.ts:5:export type ViewMode = 'rendered' | 'source' | 'diff'
src/shared/harness-profile.ts:89:export type HarnessLaunchMode = 'fresh' | 'resume' | 'fork'
src/renderer/src/settings/settings-model.ts:8:export type TerminalRecoveryMode = 'prompt' | 'auto'
src/renderer/src/settings/settings-model.ts:9:export type FontPreferenceMode = 'system' | 'custom'
src/renderer/src/terminal/terminal-workspace-model.ts:15:export type TerminalStartMode = 'interactive' | 'bulk'
src/renderer/src/workbench/use-workbench-layout.ts:30:export type WorkbenchRailMode = 'files' | 'git'
src/renderer/src/workbench/workspace-pane-state.ts:3:export type TerminalLayoutMode = 'collapsed' | 'restored' | 'maximized'
<shellId: 25 completed with exit code 0>
```

</details>


---

<sub>1m 5s</sub>

### `bash`

**Survey git types and operations**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== git-types exports (sample) ==="; grep -nE "^export (type|interface|const|function) " src/shared/git-types.ts | head -50; echo "=== git IPC ops ==="; grep -nE "^export const GIT_\w+" src/shared/*.ts | head -30

<details>
<summary>39 lines</summary>

```
=== git-types exports (sample) ===
3:export const GIT_CHANGE_DISPLAY_LIMIT = 2_000
5:export interface GitChangedFile {
16:export interface GitChanges {
29:export type GitRepositoryState = 'ready' | 'unborn' | 'not-git'
31:export interface GitCommitSummary {
43:export interface GitHistoryRequest {
53:export interface GitHistoryPage {
60:export interface GitCommitFile {
66:export interface GitCommitDetail extends GitCommitSummary {
71:export interface GitCommitDetailRequest {
77:export interface GitBlameRun {
85:export interface GitBlameRequest {
88:export interface GitChangesRequest {
92:export interface GitIgnoredEntriesRequest {
99:export interface GitIgnoredEntriesResponse {
103:export interface GitBranch {
110:export interface GitBranchModel {
123:export interface GitBranchSync {
138:export interface GitSwitchBranchRequest {
143:export interface GitFetchRequest {
147:export interface GitPullRequest {
=== git IPC ops ===
src/shared/git-types.ts:3:export const GIT_CHANGE_DISPLAY_LIMIT = 2_000
src/shared/worker-protocol.ts:120:export const GIT_DIFF_INPUTS_TYPE = 'git:diff-inputs' as const
src/shared/worker-protocol.ts:121:export const GIT_CHANGES_TYPE = 'git:changes' as const
src/shared/worker-protocol.ts:122:export const GIT_HISTORY_TYPE = 'git:history' as const
src/shared/worker-protocol.ts:123:export const GIT_IGNORED_ENTRIES_TYPE = 'git:ignored-entries' as const
src/shared/worker-protocol.ts:124:export const GIT_IGNORED_PATHS_TYPE = 'git:ignored-paths' as const
src/shared/worker-protocol.ts:125:export const GIT_BLAME_TYPE = 'git:blame' as const
src/shared/worker-protocol.ts:126:export const GIT_COMMIT_DETAIL_TYPE = 'git:commit-detail' as const
src/shared/worker-protocol.ts:127:export const GIT_WORKTREES_TYPE = 'git:worktrees' as const
src/shared/worker-protocol.ts:128:export const GIT_PRUNE_WORKTREES_TYPE = 'git:prune-worktrees' as const
src/shared/worker-protocol.ts:129:export const GIT_WORKSPACE_ACTIVITY_TYPE = 'git:workspace-activity' as const
src/shared/worker-protocol.ts:130:export const GIT_BRANCHES_TYPE = 'git:branches' as const
src/shared/worker-protocol.ts:131:export const GIT_FETCH_TYPE = 'git:fetch' as const
src/shared/worker-protocol.ts:132:export const GIT_PULL_TYPE = 'git:pull' as const
src/shared/worker-protocol.ts:133:export const GIT_SWITCH_BRANCH_TYPE = 'git:switch-branch' as const
<shellId: 26 completed with exit code 0>
```

</details>


---

<sub>1m 5s</sub>

### `bash`

**Check node version and installed toolchain**

$ cd /private/var/tmp/ws/a8def787/hvir && node -v; npm -v; echo "--- key binaries ---"; ls node_modules/.bin | grep -E '^(electron|electron-vite|vitest|tsc|eslint|prettier|electron-builder|stryker)$'; echo "--- electron binary present? ---"; ls node_modules/electron/dist/Electron.app >/dev/null 2>&1 && echo yes || echo no; echo "--- ghostty-web present? ---"; ls node_modules/ghostty-web >/dev/null 2>&1 && echo yes || echo no; echo "--- node-pty build present? ---"; ls node_modules/node-pty/build/Release 2>/dev/null | head; echo "--- rename-noreplace node present? ---"; ls node_modules/@hvir/rename-noreplace/build/Release 2>/dev/null | head; echo "--- workflows list ---"; ls .github/workflows

<details>
<summary>36 lines</summary>

```
v26.5.0
11.17.0
--- key binaries ---
electron
electron-builder
electron-vite
eslint
prettier
stryker
tsc
vitest
--- electron binary present? ---
yes
--- ghostty-web present? ---
yes
--- node-pty build present? ---
node-addon-api
obj.target
pty.node
spawn-helper
--- rename-noreplace node present? ---
obj.target
rename_noreplace.node
--- workflows list ---
ci.yml
codeql.yml
ghostty-web-update.yml
lock-tracker-conversations.yml
macos-package-release.yml
project-kind.yml
project-pr-planning.yml
real-host-ssh.yml
release-pr-merged.yml
release.yml
smoke-stress.yml
<shellId: 27 completed with exit code 0>
```

</details>


---

<sub>1m 14s</sub>

### Copilot

The toolchain is already installed and works on Node 26 (the `engines` field requires 24+). Next I'll confirm what a "workspace" is, what the git mutations cover, and how document review and the web pane work.

---

<sub>1m 15s</sub>

### `bash`

**Check workspace and git mutation semantics**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== workspace-coordinator head ==="; head -25 src/main/workspace-coordinator.ts | grep -vE "^import"; echo "=== workspace-removal-coordinator head ==="; head -20 src/main/workspace-removal-coordinator.ts | grep -vE "^import"; echo "=== git mutation types in worker-protocol ==="; grep -nE "_TYPE = 'git:(stage|unstage|commit|discard|stash|reset|checkout|push|create|remove|add|restore|merge|rebase|delete)" src/shared/worker-protocol.ts; grep -nE "git:[a-z-]+'" src/shared/worker-protocol.ts | sed -E "s/.*'(git:[a-z-]+)'.*/\1/" | sort -u | tr '\n' ' '; echo

<details>
<summary>41 lines</summary>

```
=== workspace-coordinator head ===
  MAX_PROJECT_WATCH_INTERESTS,
  hostPathEquals,
  type HostPath,
  type IpcEventPayload,
  type ProjectState,
  type ProjectWatchInterestsResponse,
  type RegisteredProjectState,
  type WorkspaceActivityResult,
  type WorktreeDiscovery,
} from '../shared'
  canonicalProjectWatchInterests,
  type ProjectWatchCallbacks,
  type ProjectWatchInterestCache,
  type ProjectWatchTarget,
} from './project-watch'

export interface WorkspaceRegistryPort {
  readonly active: {
    readonly host: ProjectHost
    readonly root: HostPath
    readonly projectId: string
=== workspace-removal-coordinator head ===

export interface WorkspaceRemovalRegistryPort {
  state(): ProjectState
  projectById(projectId: string): RegisteredProjectState | undefined
  dismissWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
}

export interface WorkspaceRemovalCleanupPort {
  forgetWorkspaceSessions(root: HostPath): Promise<void>
  revokeWorkspace(root: HostPath): Promise<void>
  closeWorkspaceWebPanes(root: HostPath): Promise<void>
  releaseHtmlPreviews(root: HostPath): void
}

export interface WorkspaceRemovalPort {
  removeMissingWorkspace(projectId: string, workspaceId: string): Promise<ProjectState>
}

/** Owns the shared resource and catalog lifecycle for a definitively missing workspace. */
=== git mutation types in worker-protocol ===
126:export const GIT_COMMIT_DETAIL_TYPE = 'git:commit-detail' as const
git:blame git:branches git:changes git:commit-detail git:diff-inputs git:fetch git:history git:ignored-entries git:ignored-paths git:prune-worktrees git:pull git:switch-branch git:workspace-activity git:worktrees
<shellId: 28 completed with exit code 0>
```

</details>


---

<sub>1m 15s</sub>

### `bash`

**Read document review model**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== document-review.ts limits + types ==="; sed -n '1,60p' src/shared/document-review.ts | grep -vE "^import"; echo "=== document-review policy head ==="; head -15 src/main/document-review/document-review-policy.ts | grep -vE "^import"

<details>
<summary>57 lines</summary>

```
=== document-review.ts limits + types ===

export const DOCUMENT_REVIEW_LIMITS = {
  batchesPerWorkspace: 1,
  batchMembers: 64,
  commentsPerDocument: 64,
  commentsPerWorkspace: 256,
  commentBytes: 8 * 1024,
  contextBytes: 4 * 1024,
  deliveryPayloadBytes: 64 * 1024,
  deliveryQuoteBytes: 2 * 1024,
  excerptBytes: 32 * 1024,
  idBytes: 128,
  revalidationReadBytes: 4 * 1024 * 1024,
  sourceRangeLines: 100,
  storedWorkspaceBytes: 2 * 1024 * 1024,
  workspaceIdBytes: 256,
} as const

export interface ReviewWorkspaceIdentity {
  /** Stable registered project/worktree identity, not a path-derived key. */
  readonly id: string
  readonly root: HostPath
}

export type DocumentReviewDocumentIssue =
  'foreign-document' | 'document-outside-workspace'

export function documentReviewWorkspaceEquals(
  left: ReviewWorkspaceIdentity,
  right: ReviewWorkspaceIdentity,
): boolean {
  return left.id === right.id && hostPathEquals(left.root, right.root)
}

export function documentReviewDocumentIssue(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): DocumentReviewDocumentIssue | undefined {
  if (document.hostId !== workspace.root.hostId) return 'foreign-document'
  if (
    !containsHostPath(workspace.root, document) ||
    hostPathEquals(workspace.root, document)
  ) {
    return 'document-outside-workspace'
  }
  return undefined
}

export function isDocumentReviewDocument(
  workspace: ReviewWorkspaceIdentity,
  document: HostPath,
): boolean {
  return documentReviewDocumentIssue(workspace, document) === undefined
}

export function documentReviewUtf8Bytes(value: string): number {
  return new TextEncoder().encode(value).byteLength
}

=== document-review policy head ===
export function isDocumentReviewRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
<shellId: 29 completed with exit code 0>
```

</details>


---

<sub>1m 15s</sub>

### `bash`

**Read web pane, sessions and theme headers**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== loopback-http-proxy head ==="; head -15 src/main/web-pane/loopback-http-proxy.ts | grep -vE "^import"; echo "=== sessions-observation-port head ==="; head -20 src/main/sessions/sessions-observation-port.ts | grep -vE "^import"; echo "=== terminal theme generator source ==="; head -12 scripts/generate-terminal-theme-catalog.mts | grep -vE "^import"; echo "=== attention ==="; head -12 src/shared/terminal-attention.ts | grep -vE "^import"

<details>
<summary>39 lines</summary>

```
=== loopback-http-proxy head ===
  Agent,
  createServer,
  request as requestHttp,
  type IncomingHttpHeaders,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from 'node:http'

=== sessions-observation-port head ===
  LOCAL_HOST_ID,
  MAX_SESSIONS_PROJECTION_PROVIDERS,
  MAX_SESSIONS_PROJECTION_ROWS,
  MAX_SESSIONS_PROJECTION_WORKSPACES,
  SESSIONS_PROJECTION_VERSION,
  asSessionsPtyHandle,
  asSessionsTerminalHandle,
  sessionsProjectionDisplayTitle,
  sessionsProjectionText,
  sessionsWorkspaceQualifier,
  type ProjectHostOption,
  type ProjectState,
  type SessionsObservationSnapshot,
  type SessionsOpenRequest,
  type SessionsObservedSession,
  type SessionsProjectionChange,
  type SessionsProviderProjection,
  type SessionsTerminalHandle,
  type SessionsUsageDemandRequest,
=== terminal theme generator source ===

  TERMINAL_COLOR_KEYS,
  TERMINAL_COLOR_PATTERN,
  type TerminalColorKey,
} from '../src/renderer/src/terminal/terminal-color-schema.mts'

const SCRIPT_DIRECTORY = dirname(fileURLToPath(import.meta.url))
=== attention ===
/** Provider-neutral terminal activity shared by recovery and delivery presentation. */
export type TerminalAttentionState = 'working' | 'bell' | 'idle'
<shellId: 30 completed with exit code 0>
```

</details>


---

<sub>1m 21s</sub>

### Copilot

The model is clear now: projects are registered folders (local or SSH) and workspaces are their git worktrees. Next I'll confirm which git mutations exist (no commit or stage, from the earlier grep), plus the project registry, document-review delivery, and web-pane behavior.

---

<sub>1m 22s</sub>

### `bash`

**Verify git mutations and project registry**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== any stage/commit/add mutations in git layer? ==="; grep -rniE "'(add|commit|stage|restore|checkout|reset|stash)'" src/main/git src/shared/git-types.ts | head -5; echo "(end)"; echo "=== mutation-authorization head ==="; head -12 src/main/git/mutation-authorization.ts | grep -vE "^import"; echo "=== project-registry head ==="; head -15 src/main/project-registry.ts | grep -vE "^import"; echo "=== document-review delivery policy head ==="; head -15 src/main/document-review/document-review-delivery-policy.ts | grep -vE "^import"

<details>
<summary>40 lines</summary>

```
=== any stage/commit/add mutations in git layer? ===
src/main/git/git-history.ts:69:      if (objectType === 'commit') tips.push(objectName)
src/main/git/git-history.ts:70:      else if (peeledType === 'commit') tips.push(peeledName)
(end)
=== mutation-authorization head ===
  asHostId,
  hostPath,
  hostPathEquals,
  type HostPath,
  type WorkerHostCall,
} from '../../shared'

export type GitMutationKind = 'worktree-prune' | 'branch-switch' | 'fetch' | 'pull'

=== project-registry head ===
  asHostId,
  basenameHostPath,
  hostPathEquals,
  hostPath,
  localPath,
  type HostPath,
  type ProjectState,
  type RegisteredProjectState,
  type WorktreeDiscovery,
  type WorkspaceActivityResult,
  type WorkspaceActivitySnapshot,
  type WorkspaceState,
} from '../shared'
=== document-review delivery policy head ===
  DOCUMENT_REVIEW_LIMITS,
  documentReviewUtf8Bytes,
  documentReviewWorkspaceEquals,
  isDocumentReviewDocument,
  isDocumentReviewIdentifier,
  type DocumentReviewComment,
  type DocumentReviewDeliveryPayload,
  type DocumentReviewDeliverySelection,
  type DocumentReviewModel,
  type ReviewSourceRange,
} from '../../shared'

const QUOTE_TRUNCATION_MARKER = '\n… [quote truncated]'
<shellId: 31 completed with exit code 0>
```

</details>


---

<sub>1m 22s</sub>

### `bash`

**Locate web pane, review, session UI files**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== web pane renderer files ==="; git ls-files src/renderer/src | grep -iE 'web-?pane' | sed 's#src/renderer/src/##'; echo "=== document review renderer files ==="; git ls-files src/renderer/src | grep -iE 'review' | sed 's#src/renderer/src/##' | head -20; echo "=== sessions renderer files ==="; git ls-files src/renderer/src | grep -iE 'session' | sed 's#src/renderer/src/##' | head -20

<details>
<summary>53 lines</summary>

```
=== web pane renderer files ===
dashboards/ElectronWebPaneSurface.tsx
dashboards/WebPane.tsx
dashboards/WebPaneStack.tsx
dashboards/use-web-pane-workspace.ts
dashboards/web-pane-diagnostics.ts
dashboards/web-pane-surface.ts
dashboards/web-pane-url.ts
dashboards/web-pane-workspace-policy.ts
styles/web-pane.css
=== document review renderer files ===
document-review/DocumentReviewControls.tsx
document-review/DocumentReviewDeliveryPanel.tsx
document-review/DocumentReviewInlineSurface.tsx
document-review/document-review-anchor.ts
document-review/document-review-batches.ts
document-review/document-review-capture.ts
document-review/document-review-delivery-client.ts
document-review/document-review-delivery-feedback.ts
document-review/document-review-eligibility.ts
document-review/document-review-inline.ts
document-review/document-review-lifecycle.ts
document-review/document-review-model.ts
document-review/document-review-rendered.ts
document-review/document-review-selectors.ts
document-review/document-review-source.ts
document-review/document-review-types.ts
document-review/document-review-validation.ts
document-review/document-review-workspace-controller.ts
document-review/document-review-workspace.ts
document-review/index.ts
=== sessions renderer files ===
sessions/SessionsApplicationDestination.tsx
sessions/SessionsCollectionToolbar.tsx
sessions/SessionsOverview.tsx
sessions/SessionsOverviewCard.tsx
sessions/SessionsOverviewNotice.tsx
sessions/SessionsTerminalDetail.tsx
sessions/sessions-overview-model.ts
sessions/sessions-projection-coordinator.ts
sessions/sessions-renderer-observation.ts
sessions/sessions-terminal-detail-controller.ts
sessions/sessions-terminal-overlay.ts
sessions/sessions-terminal-surface.ts
sessions/use-sessions-foreground.ts
sessions/use-sessions-terminal-detail.ts
styles/sessions-collection.css
styles/sessions-overview.css
styles/sessions-terminal-detail.css
terminal/TerminalSessionRuntimes.tsx
terminal/terminal-sessions-surface-owner.ts
terminal/use-terminal-session-commands.ts
<shellId: 32 completed with exit code 0>
```

</details>


---

<sub>1m 22s</sub>

### `bash`

**Read harness profile and review delivery**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== harness-profile head ==="; head -30 src/shared/harness-profile.ts | grep -vE "^import"; echo "=== composer-submit usage in review ==="; grep -rnE "'send-now'|'insert'|sendNow|SendNow" src/shared/document-review.ts src/main/document-review/*.ts | head -6

<details>
<summary>30 lines</summary>

```
=== harness-profile head ===

const PROFILE_ID = /^[a-z0-9](?:[a-z0-9._-]{0,78}[a-z0-9])?$/
const BINDING_NAME = /^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/
const ENVIRONMENT_NAME = /^[a-zA-Z_][a-zA-Z0-9_]{0,127}$/

declare const harnessProfileIdBrand: unique symbol

export type HarnessProfileId = string & {
  readonly [harnessProfileIdBrand]: 'HarnessProfileId'
}

export type HarnessProfileScope =
  | { readonly kind: 'global' }
  | { readonly kind: 'project'; readonly projectRoot: HostPath }

export type HarnessProfileExecutable =
  | { readonly kind: 'provider-default' }
  | { readonly kind: 'command'; readonly command: string }
  | { readonly kind: 'path'; readonly path: HostPath; readonly grantId?: string }

export type HarnessArgumentPart =
  | { readonly kind: 'literal'; readonly value: string }
  | {
      readonly kind: 'path'
      readonly source: 'projectRoot' | 'workspaceRoot' | 'binding'
      readonly binding?: string
    }

=== composer-submit usage in review ===
src/shared/document-review.ts:203:export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'
src/shared/document-review.ts:242:export interface DocumentReviewSendNowRequest {
src/shared/document-review.ts:246:export type DocumentReviewSendNowResult =
src/main/document-review/document-review-delivery-coordinator.ts:13:  type DocumentReviewSendNowResult,
src/main/document-review/document-review-delivery-coordinator.ts:18:  HarnessDocumentReviewSendNowContract,
src/main/document-review/document-review-delivery-coordinator.ts:19:  HarnessDocumentReviewSendNowLaunch,
<shellId: 33 completed with exit code 0>
```

</details>


---

<sub>1m 30s</sub>

### Copilot

I have the product picture. A few remaining details need checking before I write: the installer's command paths per platform, the release installer output name, and the provider executable names.

---

<sub>1m 31s</sub>

### `bash`

**Check installer platform paths and output**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== installer platform selection (95-130) ==="; sed -n '95,130p' scripts/native-installer.template.sh; echo "=== render-native-installer output name ==="; grep -nE "install\.sh|writeFile|outputs?|\.sh'" scripts/render-native-installer.mjs | head -10

<details>
<summary>48 lines</summary>

```
=== installer platform selection (95-130) ===
    ;;
  esac
}

detect_target() {
  local kernel machine
  kernel=$(/usr/bin/uname -s)
  machine=$(/usr/bin/uname -m)
  case "$kernel:$machine" in
  Linux:x86_64)
    platform='linux'
    platform_name='Linux (x64)'
    artifact_name=$HVIR_LINUX_X64_ARTIFACT
    artifact_sha256=$HVIR_LINUX_X64_SHA256
    native_command='/usr/bin/hvir'
    ;;
  Linux:aarch64 | Linux:arm64)
    platform='linux'
    platform_name='Linux (Arm64)'
    artifact_name=$HVIR_LINUX_ARM64_ARTIFACT
    artifact_sha256=$HVIR_LINUX_ARM64_SHA256
    native_command='/usr/bin/hvir'
    ;;
  Darwin:arm64)
    platform='macos'
    platform_name='macOS (Apple silicon)'
    artifact_name=$HVIR_MACOS_ARM64_ARTIFACT
    artifact_sha256=$HVIR_MACOS_ARM64_SHA256
    native_command='/usr/local/bin/hvir'
    ;;
  *)
    echo \
      "hvir does not support $kernel $machine. Supported targets are compatible Linux x64/arm64 hosts and Apple-silicon macOS." \
      >&2
    exit 69
    ;;
=== render-native-installer output name ===
5:import { chmod, mkdir, readFile, writeFile } from 'node:fs/promises'
11:const templatePath = resolve(repositoryRoot, 'scripts/native-installer.template.sh')
53:  let output = await readFile(templatePath, 'utf8')
56:    if (!output.includes(token)) throw new Error(`Installer template lacks ${token}.`)
57:    output = output.replaceAll(token, value)
59:  const unresolved = output.match(/@@[A-Z0-9_]+@@/)
64:  const outputPath = resolve(options.output)
65:  await mkdir(dirname(outputPath), { recursive: true })
66:  await writeFile(outputPath, output, { encoding: 'utf8', mode: 0o755 })
67:  await chmod(outputPath, 0o755)
<shellId: 34 completed with exit code 0>
```

</details>


---

<sub>1m 31s</sub>

### `bash`

**Extract provider CLI executable names**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== provider executables (probe args / commands) ==="; grep -nE "command|executable|versionArgs|'(claude|codex|gemini|copilot|cursor-agent|pi|agent)'" src/main/harness/providers/claude-code.ts src/main/harness/providers/codex.ts src/main/harness/providers/gemini.ts src/main/harness/providers/github-copilot.ts src/main/harness/providers/cursor.ts src/main/harness/providers/pi.ts | grep -vE "^\s*\*" | head -40

<details>
<summary>31 lines</summary>

```
=== provider executables (probe args / commands) ===
src/main/harness/providers/claude-code.ts:32:    sessionKind: 'agent',
src/main/harness/providers/claude-code.ts:69:      file: 'claude',
src/main/harness/providers/claude-code.ts:77:      file: 'claude',
src/main/harness/providers/claude-code.ts:87:      file: 'claude',
src/main/harness/providers/codex.ts:45:    id: asHarnessProviderId('codex'),
src/main/harness/providers/codex.ts:47:    sessionKind: 'agent',
src/main/harness/providers/codex.ts:65:      const subcommand = CODEX_SUBCOMMAND_BY_LAUNCH_MODE[mode]
src/main/harness/providers/codex.ts:66:      if (!subcommand) return [...providerArgs, ...profileArgs]
src/main/harness/providers/codex.ts:67:      const subcommandAt = providerArgs.indexOf(subcommand)
src/main/harness/providers/codex.ts:68:      return subcommandAt < 0
src/main/harness/providers/codex.ts:71:            ...providerArgs.slice(0, subcommandAt),
src/main/harness/providers/codex.ts:73:            ...providerArgs.slice(subcommandAt),
src/main/harness/providers/codex.ts:95:      file: 'codex',
src/main/harness/providers/codex.ts:103:      file: 'codex',
src/main/harness/providers/codex.ts:118:      file: 'codex',
src/main/harness/providers/codex.ts:144:    launch.profile.executable.kind === 'provider-default' &&
src/main/harness/providers/gemini.ts:8:    sessionKind: 'agent',
src/main/harness/providers/gemini.ts:29:  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
src/main/harness/providers/gemini.ts:37:    versionArgs: ['--version'],
src/main/harness/providers/github-copilot.ts:8:    sessionKind: 'agent',
src/main/harness/providers/github-copilot.ts:30:    file: 'copilot',
src/main/harness/providers/github-copilot.ts:41:    versionArgs: ['--version'],
src/main/harness/providers/cursor.ts:8:    sessionKind: 'agent',
src/main/harness/providers/cursor.ts:29:  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
src/main/harness/providers/cursor.ts:37:    versionArgs: ['--version'],
src/main/harness/providers/pi.ts:6:    id: asHarnessProviderId('pi'),
src/main/harness/providers/pi.ts:8:    sessionKind: 'agent',
src/main/harness/providers/pi.ts:32:  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
src/main/harness/providers/pi.ts:40:    versionArgs: ['--version'],
<shellId: 35 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### Copilot

Next I'll confirm the remaining facts: the git remote (for any repo links), the SSH config source, and the installer asset name in the release workflow.

---

<sub>2m 7s</sub>

### `bash`

**Check remotes, SSH config, installer asset name**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== remotes ==="; git remote -v; echo "(end remotes)"; echo "=== ssh config source ==="; grep -rnE "\.ssh|known_hosts|ssh/config" src/main/project-host/*.ts | head -8; echo "=== release installer asset name ==="; sed -n '484,500p' .github/workflows/release.yml; grep -nE "install\.sh|installer" .github/workflows/release.yml | head -12

<details>
<summary>25 lines</summary>

```
=== remotes ===
(end remotes)
=== ssh config source ===
src/main/project-host/project-host-catalog.ts:191:  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
src/main/project-host/project-host-catalog.ts:200:      await host.readTextFile(localPath(join(home, '.ssh/config'))),
=== release installer asset name ===
      - name: Assemble exact release metadata and installer
        env:
          MACOS_TEAM_ID: ${{ secrets.MACOS_TEAM_ID }}
          RELEASE_SHA: ${{ needs.prepare.outputs.sha }}
          VERSION: ${{ needs.prepare.outputs.version }}
        run: |
          npm run assemble:native-release -- \
            --version "$VERSION" \
            --source-sha "$RELEASE_SHA" \
            --repository "$GITHUB_REPOSITORY" \
            --macos-team-id "$MACOS_TEAM_ID" \
            --asset-directory dist/release
          (
            cd dist/release
            sha256sum --check SHA256SUMS
          )

484:      - name: Assemble exact release metadata and installer
562:            install.sh \
<shellId: 36 completed with exit code 0>
```

</details>


---

<sub>2m 7s</sub>

### `bash`

**Read project-management CLI headers**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "=== project-management CLI headers ==="; for f in scripts/project-management/start-issue.ts scripts/project-management/issue-context-cli.ts scripts/project-management/planning-cli.ts; do echo "--- $f"; head -12 "$f" | grep -vE "^import"; done; echo "=== sync-kind / pull-request-cli head ==="; head -8 scripts/project-management/pull-request-cli.ts | grep -vE "^import"

<details>
<summary>30 lines</summary>

```
=== project-management CLI headers ===
--- scripts/project-management/start-issue.ts
  formatIssueStartOperationalFailure,
  formatIssueStartReport,
  ISSUE_START_HELP,
  parseIssueStartCliOptions,
} from './issue-start-cli.ts'
--- scripts/project-management/issue-context-cli.ts


export interface IssueContextCliOptions {
  help: boolean
  issueNumber?: number
  json: boolean
}

export const ISSUE_CONTEXT_HELP = `Usage: npm run issue:context -- --issue <number> [options]
--- scripts/project-management/planning-cli.ts

export interface ProjectPlanningCliOptions {
  help: boolean
  issueNumber?: number
  ensureProject: boolean
  status?: ProjectStatus
  apply: boolean
}

export const PROJECT_PLANNING_HELP = `Usage: npm run project:record -- --issue <number> [options]
=== sync-kind / pull-request-cli head ===
  PullRequestPlanningReport,
  ReopenedIssuePlanningReport,
} from './pull-request-planning.ts'

export interface ProjectPullRequestCliOptions {
  help: boolean
<shellId: 37 completed with exit code 0>
```

</details>


---

<sub>2m 15s</sub>

### Copilot

The checkout has no git remote, so the README won't include repo URLs. Now I'll run the documented commands to confirm they work as described, starting with the quick checks.

---

<sub>2m 16s</sub>

### `bash`

**Run seam and ADR checks**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### check-seams"; npm run -s check-seams 2>&1 | tail -25; echo "EXIT=$?"; echo "##### check-adrs"; npm run -s check-adrs 2>&1 | tail -8; echo "EXIT=${PIPESTATUS[0]}"

<details>
<summary>26 lines</summary>

```
##### check-seams
✓ ipcRenderer used only in src/preload/
✓ host primitives imported only in local-host.ts
✓ host.spawnPty() called only in pty-supervisor.ts
✓ bundled harness ids used only in src/main/harness/
✓ host.connectLoopback() called only in the web-pane proxy
✓ ipcMain used only in the IPC authority router
✓ IPC features use central owner/path authority
✓ ssh2 details stay inside the SshHost adapter
✓ SSH collaborators do not create independent clients
✓ only SshHost is exported as the remote host façade
✓ SSH construction and implementation owners stay in the host catalog
✓ Git commands use the shared command context
✓ Git worker proxy exposes only exact exec, read, and metadata operations

seam check passed
EXIT=0
##### check-adrs
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/private/var/tmp/ws/a8def787/hvir/docs/adr'
}

Node.js v26.5.0
EXIT=1
<shellId: 38 completed with exit code 0>
```

</details>


---

<sub>2m 20s</sub>

### Copilot

The seam check passes. `check-adrs` fails because this checkout has no `docs/adr/` directory, which predates my work. I'll note that rather than create ADR files. Next I'll run the typecheck, lint, architecture check, and test suite.

---

<sub>2m 36s</sub>

### `bash`

**Start unit test suite in background**

$ cd /private/var/tmp/ws/a8def787/hvir && T="${TMPDIR:-/tmp}"; echo "TMP=$T" ; (npm test > "$T/hvir-readme-test.log" 2>&1; echo "TEST_EXIT=$?" >> "$T/hvir-readme-test.log") & echo started-test-bg

```
TMP=/private/var/tmp/ws/a8def787/home/tmp
started-test-bg
<shellId: 39 completed with exit code 0>
```


---

<sub>2m 36s</sub>

### `bash`

**Run typecheck and architecture check**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### typecheck"; npm run -s typecheck 2>&1 | tail -15; echo "TYPECHECK_EXIT=${PIPESTATUS[0]}"; echo "##### architecture:check"; npm run -s architecture:check 2>&1 | tail -12; echo "ARCH_EXIT=${PIPESTATUS[0]}"

<details>
<summary>6 lines</summary>

```
##### typecheck
TYPECHECK_EXIT=0
##### architecture:check
Architecture verification failed: HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available
ARCH_EXIT=1
<shellId: 40 completed with exit code 0>
```

</details>


---

<sub>2m 41s</sub>

### Copilot

Typecheck passes. `architecture:check` needs a `HVIR_REPO_TOKEN` (CI supplies it), and the offline `architecture:report` is the local alternative. I'll verify that one, plus lint, and check on the test run.

---

<sub>2m 41s</sub>

### `bash`

**Run offline architecture report and lint**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### architecture:report (offline)"; timeout 300 npm run -s architecture:report 2>&1 | tail -6; echo "REPORT_EXIT=${PIPESTATUS[0]}"; echo "##### lint"; timeout 600 npm run -s lint 2>&1 | tail -15; echo "LINT_EXIT=${PIPESTATUS[0]}"

<details>
<summary>7 lines</summary>

```
##### architecture:report (offline)
/bin/bash: timeout: command not found
REPORT_EXIT=127
##### lint
/bin/bash: timeout: command not found
LINT_EXIT=127
<shellId: 41 completed with exit code 0>
```

</details>


---

<sub>2m 42s</sub>

### Copilot

`timeout` isn't installed on this macOS box, so I'll rerun without it.

---

<sub>3m 19s</sub>

### `bash`

**Run offline architecture report and lint**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### architecture:report (offline)"; npm run -s architecture:report 2>&1 | tail -6; echo "REPORT_EXIT=${PIPESTATUS[0]}"; echo "##### lint"; npm run -s lint 2>&1 | tail -15; echo "LINT_EXIT=${PIPESTATUS[0]}"

<details>
<summary>11 lines</summary>

```
##### architecture:report (offline)
loading: src/renderer/src/viewer/RenderedView.tsx:47 worker process-entry -> src/renderer/src/viewer/json.worker.ts
loading: src/renderer/src/viewer/RenderedView.tsx:54 worker process-entry -> src/renderer/src/viewer/csv.worker.ts
loading: src/renderer/src/viewer/highlight-worker.ts:4 worker process-entry -> src/renderer/src/viewer/highlight.worker.ts
loading: src/renderer/src/viewer/markdown-client.ts:16 worker process-entry -> src/renderer/src/viewer/markdown.worker.ts
loading: test/local-host.test.ts:173 discovery discovery
0 dependency violation(s)
REPORT_EXIT=0
##### lint
LINT_EXIT=0
<shellId: 42 completed with exit code 0>
```

</details>


---

<sub>3m 19s</sub>

### ◌ Conversation Compacted

---

<sub>3m 20s</sub>

### Copilot

Architecture report reports 0 violations and lint passes. Next I'll read the background test log.

---

<sub>3m 21s</sub>

### `bash`

**Read background npm test log**

$ cd /private/var/tmp/ws/a8def787/hvir && LOG="$TMPDIR/hvir-readme-test.log"; ls -la "$LOG" 2>&1; echo "-----tail-----"; tail -n 25 "$LOG" 2>&1

<details>
<summary>21 lines</summary>

```
-rw-r--r--@ 1 air-jarmak  wheel  56308 Oct 22 22:33 /private/var/tmp/ws/a8def787/home/tmp/hvir-readme-test.log
-----tail-----
+ Received

- 1
+ 2

 ❯ test/worker-host-broker.test.ts:575:54
    573|     })
    574|
    575|     expect((await readFile(counter, 'utf8')).length).toBe(afterFirst)
       |                                                      ^
    576|     await actual.dispose()
    577|   })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/26]⎯


 Test Files  10 failed | 366 passed (376)
      Tests  23 failed | 2877 passed | 2 skipped (2902)
   Start at  22:32:39
   Duration  31.91s (tests 68%, import 11%, transform 9%, environment 9%, setup 2%, worker 1%)

    Isolate  376 workers spawned · ~131ms startup each (spawn + environment, per file)
             at least ~6.90s faster with isolate: false — reuses workers across files instead of one per file

TEST_EXIT=1
<shellId: 43 completed with exit code 0>
```

</details>


---

<sub>3m 23s</sub>

### Copilot

The test run finished with 10 failed files and 23 failed tests. I need to see which ones fail and whether the cause is environmental.

---

<sub>3m 23s</sub>

### `bash`

**List failing test files and cases**

$ cd /private/var/tmp/ws/a8def787/hvir && LOG="$TMPDIR/hvir-readme-test.log"; grep -E "^ (FAIL|❯|×) |FAIL  " "$LOG" | sed 's/\x1b\[[0-9;]*m//g' | sort | uniq -c | head -80

<details>
<summary>47 lines</summary>

```
1  ❯ test/external-document-authority.test.ts (11 tests | 1 failed) 32ms
   1  ❯ test/external-document-authority.test.ts:223:23
   1  ❯ test/issue-lifecycle-guidance.test.ts (0 test)
   1  ❯ test/issue-lifecycle-guidance.test.ts:36:18
   1  ❯ test/local-host.test.ts (42 tests | 1 failed) 3056ms
   1  ❯ test/local-host.test.ts:286:28
   1  ❯ test/merge-pr-skill.test.ts (0 test)
   1  ❯ test/merge-pr-skill.test.ts:5:15
   1  ❯ test/project-pr-relationships.test.ts (19 tests | 1 failed) 9ms
   1  ❯ test/project-pr-relationships.test.ts:85:22
   1  ❯ test/smoke-scenario-runner.test.ts (0 test)
   1  ❯ test/smoke-scenario-runner.test.ts:610:24
   1  ❯ test/web-pane-route-registry.test.ts (13 tests | 13 failed) 33ms
   1  ❯ test/web-pane-route-registry.test.ts:217:25
   1  ❯ test/web-pane-route-registry.test.ts:237:25
   1  ❯ test/web-pane-route-registry.test.ts:319:25
   1  ❯ test/web-pane-route.test.ts (18 tests | 5 failed) 32ms
   1  ❯ test/web-pane-smoke-boundary.test.ts (2 tests | 1 failed) 12ms
   1  ❯ test/worker-host-broker.test.ts (22 tests | 1 failed) 835ms
   1  ❯ test/worker-host-broker.test.ts:575:54
   1  FAIL  test/external-document-authority.test.ts > outside-project document authority > uses real LocalHost resolution for symlinks, assets, and missing files
   1  FAIL  test/issue-lifecycle-guidance.test.ts [ test/issue-lifecycle-guidance.test.ts ]
   1  FAIL  test/local-host.test.ts > LocalHost > isolates each buffered command from the app process group
   1  FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
   1  FAIL  test/project-pr-relationships.test.ts > pull request contribution trailers > does not interpret the PR template guidance as a relationship
   1  FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > blocks new routes behind an exact terminal-move authority lease
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > classifies the three navigation outcomes without opening anything
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > coalesces rapid activation without authorizing the stale attachment URL
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > deduplicates an origin while retaining the newly activated path
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > gates attachment once and binds the resulting guest by its partition
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > isolates reused webContents ids by document generation
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > keeps host aliases and renderer owners isolated
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > lists and closes only the routes sourced by one terminal generation
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > refuses host capacity without silently evicting an existing pane
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its renderer owner closes
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its source terminal begins moving
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its workspace closes
   1  FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > tears down every route for one owner without touching another owner
   1  FAIL  test/web-pane-route.test.ts > authenticated pane proxy > authenticates CONNECT and carries WebSocket-style duplex traffic
   1  FAIL  test/web-pane-route.test.ts > authenticated pane proxy > blocks an authenticated request to another loopback endpoint
   1  FAIL  test/web-pane-route.test.ts > authenticated pane proxy > never falls through an authorized remote endpoint to the local service
   1  FAIL  test/web-pane-route.test.ts > authenticated pane proxy > rejects unauthenticated local clients and strips credentials upstream
   1  FAIL  test/web-pane-route.test.ts > ProjectHost loopback streams > opens a direct local socket through the same seam
   1  FAIL  test/web-pane-smoke-boundary.test.ts > web-pane smoke boundaries > force-closes a lingering dashboard connection during teardown
   1  FAIL  test/worker-host-broker.test.ts > Git worker host broker > persists clean-filter stat refreshes instead of filtering the same file again
<shellId: 44 completed with exit code 0>
```

</details>


---

<sub>3m 28s</sub>

### Copilot

The failures fall into several clusters. I'll inspect the error messages to tell real regressions from environment issues.

---

<sub>3m 28s</sub>

### `bash`

**Extract error messages from test log**

$ cd /private/var/tmp/ws/a8def787/hvir && LOG="$TMPDIR/hvir-readme-test.log"; sed 's/\x1b\[[0-9;]*m//g' "$LOG" > "$TMPDIR/hvir-readme-test.clean.log"; grep -nE "^(Error|TypeError|ReferenceError|AssertionError|SyntaxError|Error:)|FAIL  test/(issue-lifecycle|merge-pr|smoke-scenario)|Failed to load|Cannot find|ENOENT|EADDRINUSE|EPERM|EACCES|ECONNREFUSED|Test Files" "$TMPDIR/hvir-readme-test.clean.log" | head -60

<details>
<summary>19 lines</summary>

```
741: FAIL  test/issue-lifecycle-guidance.test.ts [ test/issue-lifecycle-guidance.test.ts ]
742:Error: ENOENT: no such file or directory, open 'CONTRIBUTING.md'
753: FAIL  test/merge-pr-skill.test.ts [ test/merge-pr-skill.test.ts ]
754:Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/a8def787/hvir/.claude/skills/hvir-merge-pr/SKILL.md'
765: FAIL  test/smoke-scenario-runner.test.ts [ test/smoke-scenario-runner.test.ts ]
766:Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/a8def787/hvir/CONTRIBUTING.md'
781:Error: EPERM: operation not permitted, mkdtemp '/tmp/hvir-document-authority-EmmNZc'
793:AssertionError: expected +0 to be 29163 // Object.is equality
812:Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/a8def787/hvir/.github/pull_request_template.md'
839:Error: listen EPERM: operation not permitted 127.0.0.1
843:AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
846:Received: "listen EPERM: operation not permitted 127.0.0.1"
859:AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
862:Received: "listen EPERM: operation not permitted 127.0.0.1"
875:AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
878:Received: "listen EPERM: operation not permitted 127.0.0.1"
891:AssertionError: expected 2 to be 1 // Object.is equality
910: Test Files  10 failed | 366 passed (376)
<shellId: 45 completed with exit code 0>
```

</details>


---

<sub>3m 35s</sub>

### Copilot

The failures trace to missing repo files, sandbox restrictions on `/tmp` and loopback sockets, and two assertions that need a closer look. I'll read those sections.

---

<sub>3m 35s</sub>

### `bash`

**Read details of local-host and worker failures**

$ cd /private/var/tmp/ws/a8def787/hvir && sed -n '776,800p;886,900p' "$TMPDIR/hvir-readme-test.clean.log"

<details>
<summary>28 lines</summary>

```
⎯⎯⎯⎯⎯⎯ Failed Tests 23 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/external-document-authority.test.ts > outside-project document authority > uses real LocalHost resolution for symlinks, assets, and missing files
Error: EPERM: operation not permitted, mkdtemp '/tmp/hvir-document-authority-EmmNZc'
 ❯ test/external-document-authority.test.ts:223:23
    221|
    222|   it('uses real LocalHost resolution for symlinks, assets, and missing…
    223|     const directory = await mkdtemp('/tmp/hvir-document-authority-')
       |                       ^
    224|     const host = new LocalHost()
    225|     const root = localPath(`${directory}/project`)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/26]⎯

 FAIL  test/local-host.test.ts > LocalHost > isolates each buffered command from the app process group
AssertionError: expected +0 to be 29163 // Object.is equality

- Expected
+ Received

- 29163
+ 0

    321|     expect(routes.hasPendingForTerminal('terminal-1', 41, 2)).toBe(fal…

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/26]⎯

 FAIL  test/worker-host-broker.test.ts > Git worker host broker > persists clean-filter stat refreshes instead of filtering the same file again
AssertionError: expected 2 to be 1 // Object.is equality

- Expected
+ Received

- 1
+ 2

 ❯ test/worker-host-broker.test.ts:575:54
    573|     })
<shellId: 46 completed with exit code 0>
```

</details>


---

<sub>3m 38s</sub>

### Copilot

Next I'll check which missing files are tracked or ignored, and read the two non-sandbox assertions in context.

---

<sub>3m 38s</sub>

### `bash`

**Check tracked and ignored status of missing files**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### tracked?"; git ls-files | grep -iE 'contributing|\.claude|pull_request_template|AGENTS|^docs/' ; echo "(end tracked list)"; echo "##### ignored?"; git check-ignore -v CONTRIBUTING.md .claude .github/pull_request_template.md docs 2>&1; echo "(end ignore list)"; echo "##### ls"; ls -la | head -50; ls .github 2>&1

<details>
<summary>38 lines</summary>

```
##### tracked?
(end tracked list)
##### ignored?
(end ignore list)
##### ls
total 1024
drwxr-xr-x@  29 air-jarmak  wheel     928 Oct 22 22:33 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct 22 22:30 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct 22 22:30 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct 22 22:30 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Oct 22 22:30 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Oct 22 22:30 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Oct 22 22:30 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Oct 22 22:30 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Oct 22 22:30 build
-rw-r--r--@   1 air-jarmak  wheel     549 Oct 22 22:30 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Oct 22 22:30 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Oct 22 22:30 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Oct 22 22:30 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Oct 22 22:30 LICENSE
drwxr-xr-x@ 516 air-jarmak  wheel   16512 Oct 22 22:33 node_modules
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct 22 22:33 out
-rw-r--r--@   1 air-jarmak  wheel  427844 Oct 22 22:30 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Oct 22 22:30 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Oct 22 22:30 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Oct 22 22:30 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Oct 22 22:30 src
-rw-r--r--@   1 air-jarmak  wheel     537 Oct 22 22:30 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Oct 22 22:30 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Oct 22 22:30 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Oct 22 22:30 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Oct 22 22:30 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Oct 22 22:30 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Oct 22 22:30 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Oct 22 22:30 vitest.config.ts
dependabot.yml
workflows
<shellId: 47 completed with exit code 0>
```

</details>


---

<sub>3m 46s</sub>

### Copilot

Several test-referenced files (`CONTRIBUTING.md`, `.claude/` skill, PR template, `docs/`) are absent from this checkout and untracked everywhere. I'll read the remaining error blocks to classify the web-pane, process-group, and clean-filter failures.

---

<sub>3m 46s</sub>

### `bash`

**Read remaining failure details in test log**

$ cd /private/var/tmp/ws/a8def787/hvir && sed -n '800,886p' "$TMPDIR/hvir-readme-test.clean.log" | grep -vE '^\s*$' | head -90

<details>
<summary>72 lines</summary>

```
❯ test/local-host.test.ts:286:28
    284|
    285|     expect(pid).toBeGreaterThan(0)
    286|     expect(processGroupId).toBe(pid)
       |                            ^
    287|   })
    288|
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/26]⎯
 FAIL  test/project-pr-relationships.test.ts > pull request contribution trailers > does not interpret the PR template guidance as a relationship
Error: ENOENT: no such file or directory, open '/private/var/tmp/ws/a8def787/hvir/.github/pull_request_template.md'
 ❯ test/project-pr-relationships.test.ts:85:22
     83|
     84|   it('does not interpret the PR template guidance as a relationship', …
     85|     const template = readFileSync(
       |                      ^
     86|       new URL('../.github/pull_request_template.md', import.meta.url),
     87|       'utf8',
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/26]⎯
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > deduplicates an origin while retaining the newly activated path
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > coalesces rapid activation without authorizing the stale attachment URL
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > keeps host aliases and renderer owners isolated
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > isolates reused webContents ids by document generation
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > gates attachment once and binds the resulting guest by its partition
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > classifies the three navigation outcomes without opening anything
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > tears down every route for one owner without touching another owner
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > lists and closes only the routes sourced by one terminal generation
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > blocks new routes behind an exact terminal-move authority lease
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > refuses host capacity without silently evicting an existing pane
 FAIL  test/web-pane-route.test.ts > ProjectHost loopback streams > opens a direct local socket through the same seam
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > rejects unauthenticated local clients and strips credentials upstream
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > never falls through an authorized remote endpoint to the local service
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > blocks an authenticated request to another loopback endpoint
 FAIL  test/web-pane-route.test.ts > authenticated pane proxy > authenticates CONNECT and carries WebSocket-style duplex traffic
 FAIL  test/web-pane-smoke-boundary.test.ts > web-pane smoke boundaries > force-closes a lingering dashboard connection during teardown
Error: listen EPERM: operation not permitted 127.0.0.1
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/26]⎯
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its workspace closes
AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
Expected: "revoked while opening"
Received: "listen EPERM: operation not permitted 127.0.0.1"
 ❯ test/web-pane-route-registry.test.ts:217:25
    215|     finishPreparation!(disposeSession)
    216|
    217|     await expect(opening).rejects.toThrow('revoked while opening')
       |                         ^
    218|     expect(disposeSession).toHaveBeenCalledOnce()
    219|   })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/26]⎯
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its renderer owner closes
AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
Expected: "revoked while opening"
Received: "listen EPERM: operation not permitted 127.0.0.1"
 ❯ test/web-pane-route-registry.test.ts:237:25
    235|     finishPreparation!(disposeSession)
    236|
    237|     await expect(opening).rejects.toThrow('revoked while opening')
       |                         ^
    238|     expect(disposeSession).toHaveBeenCalledOnce()
    239|   })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/26]⎯
 FAIL  test/web-pane-route-registry.test.ts > WebPaneRouteRegistry > revokes a late open when its source terminal begins moving
AssertionError: expected [Function] to throw error including 'revoked while opening' but got 'listen EPERM: operation not permitted…'
Expected: "revoked while opening"
Received: "listen EPERM: operation not permitted 127.0.0.1"
 ❯ test/web-pane-route-registry.test.ts:319:25
    317|     finishPreparation!(disposeSession)
    318|
    319|     await expect(opening).rejects.toThrow('revoked while opening')
       |                         ^
    320|     expect(disposeSession).toHaveBeenCalledOnce()
    321|     expect(routes.hasPendingForTerminal('terminal-1', 41, 2)).toBe(fal…
<shellId: 48 completed with exit code 0>
```

</details>


---

<sub>3m 50s</sub>

### Copilot

The web-pane failures are all `listen EPERM` from the sandbox. Two assertions remain unexplained (process-group ID and clean-filter count), so I'll read those tests.

---

<sub>3m 50s</sub>

### `bash`

**Read the two non-sandbox failing tests**

$ cd /private/var/tmp/ws/a8def787/hvir && grep -n "processGroupId" test/local-host.test.ts | head -5; echo ----; sed -n '262,288p' test/local-host.test.ts; echo ----; sed -n '540,577p' test/worker-host-broker.test.ts

<details>
<summary>64 lines</summary>

```
283:    const [pid, processGroupId] = result.stdout.split('|').map((value) => Number(value))
286:    expect(processGroupId).toBe(pid)
----
    const p = localPath(join(dir, 's.txt'))
    await host.writeFile(p, 'abc')
    const s = await host.stat(p)
    expect(s.type).toBe('file')
    expect(s.size).toBe(3)
    expect(typeof s.mtimeMs).toBe('number')
  })

  it('execs a command and captures stdout', async () => {
    const r = await host.exec('/bin/echo', ['hello'])
    expect(r.code).toBe(0)
    expect(r.stdout.trim()).toBe('hello')
    expect(r.stderr).toBe('')
  })

  const posixIt = process.platform === 'win32' ? it.skip : it
  posixIt('isolates each buffered command from the app process group', async () => {
    const result = await host.exec('/bin/sh', [
      '-c',
      `printf '%s|' "$$"; /bin/ps -o pgid= -p "$$"`,
    ])
    const [pid, processGroupId] = result.stdout.split('|').map((value) => Number(value))

    expect(pid).toBeGreaterThan(0)
    expect(processGroupId).toBe(pid)
  })

----
        dispatchWorkerHostCall(
          {
            kind: 'host-call',
            callId: ++callId,
            hostId: actual.hostId,
            operation: 'exec',
            command,
            args,
            ...opts,
          },
          project,
        ),
      readTextFile: (path: ReturnType<typeof localPath>) =>
        dispatchWorkerHostCall(
          {
            kind: 'host-call',
            callId: ++callId,
            hostId: actual.hostId,
            operation: 'readTextFile',
            path,
          },
          project,
        ),
    } as unknown as ProjectHost
    const engine = new GitEngine(proxy, localPath(rootPath))

    await expect(engine.workspaceActivity(localPath(rootPath))).resolves.toMatchObject({
      changedFiles: 0,
    })
    const afterFirst = (await readFile(counter, 'utf8')).length
    expect(afterFirst).toBeGreaterThan(0)
    await expect(engine.workspaceActivity(localPath(rootPath))).resolves.toMatchObject({
      changedFiles: 0,
    })

    expect((await readFile(counter, 'utf8')).length).toBe(afterFirst)
    await actual.dispose()
  })
<shellId: 49 completed with exit code 0>
```

</details>


---

<sub>3m 57s</sub>

### Copilot

The process-group test reads `ps` output and the clean-filter test depends on git stat caching. I'll check both directly to see if the sandbox is the cause.

---

<sub>4m 0s</sub>

### `bash`

**Probe ps behaviour and rerun two failing files**

$ cd /private/var/tmp/ws/a8def787/hvir && sh -c 'printf "%s|" "$$"; /bin/ps -o pgid= -p "$$"; echo "rc=$?"' 2>&1; echo "----- rerun the two files -----"; npx vitest run test/worker-host-broker.test.ts test/local-host.test.ts 2>&1 | sed 's/\x1b\[[0-9;]*m//g' | grep -E "Test Files|Tests |FAIL " | head -20

<details>
<summary>9 lines</summary>

```
56556|sh: /bin/ps: Operation not permitted
rc=126
----- rerun the two files -----
⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯
 FAIL  test/local-host.test.ts > LocalHost > isolates each buffered command from the app process group
 FAIL  test/worker-host-broker.test.ts > Git worker host broker > persists clean-filter stat refreshes instead of filtering the same file again
 Test Files  2 failed (2)
      Tests  2 failed | 62 passed (64)
<shellId: 50 completed with exit code 0>
```

</details>


---

<sub>4m 12s</sub>

### Copilot

Confirmed: `/bin/ps` is blocked by the sandbox, so the process-group test fails for environmental reasons. The clean-filter test fails consistently. I'll check the test setup and the `out/` and `packages/` directories that appeared during the run.

---

<sub>4m 12s</sub>

### `bash`

**Inspect out, packages, and clean-filter test setup**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### .gitignore"; cat .gitignore; echo "##### out/"; find out -maxdepth 3 | head -20; echo "##### packages/"; find packages -maxdepth 2 -not -path '*/node_modules*' | head -20; echo "##### clean-filter test setup"; grep -n "counter\|clean" test/worker-host-broker.test.ts | head -40

<details>
<summary>60 lines</summary>

```
##### .gitignore
# dependencies
node_modules

# build output
out
dist
packages/*/build

# logs
*.log
npm-debug.log*

# editor / OS
.DS_Store
.vscode/*
!.vscode/extensions.json
*.local

# vitest / coverage
coverage
##### out/
out
out/real-host-ssh
out/real-host-ssh/real-host-ssh-acceptance.cjs
##### packages/
packages
packages/rename-noreplace
packages/rename-noreplace/rename_noreplace.c
packages/rename-noreplace/LICENSE
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/index.js
packages/rename-noreplace/package.json
packages/rename-noreplace/build
##### clean-filter test setup
14:const cleanups: string[] = []
18:  await Promise.all(cleanups.splice(0).map((path) => rm(path, { recursive: true })))
24:    cleanups.push(rootPath)
50:    cleanups.push(rootPath)
94:    cleanups.push(rootPath, outside)
118:    cleanups.push(rootPath)
147:    cleanups.push(rootPath, outside)
174:    cleanups.push(rootPath)
233:    cleanups.push(rootPath)
267:    cleanups.push(rootPath)
306:    cleanups.push(rootPath)
378:    cleanups.push(rootPath)
394:    cleanups.push(rootPath)
506:  it('persists clean-filter stat refreshes instead of filtering the same file again', async () => {
508:    cleanups.push(rootPath)
512:    const filterScript = join(rootPath, '.git', 'count-clean.cjs')
513:    const counter = join(rootPath, '.git', 'clean-count')
519:    await writeFile(counter, '')
520:    await writeFile(join(rootPath, '.gitattributes'), '*.asset filter=count-clean\n')
524:      'filter.count-clean.clean',
525:      `${JSON.stringify(process.execPath)} ${JSON.stringify(filterScript)} ${JSON.stringify(counter)}`,
527:    git(rootPath, ['config', 'filter.count-clean.required', 'true'])
530:    await writeFile(counter, '')
569:    const afterFirst = (await readFile(counter, 'utf8')).length
575:    expect((await readFile(counter, 'utf8')).length).toBe(afterFirst)
581:    cleanups.push(rootPath)
599:    cleanups.push(rootPath)
627:    cleanups.push(rootPath)
<shellId: 51 completed with exit code 0>
```

</details>


---

<sub>4m 27s</sub>

### Copilot

`out/` was created by the test run (gitignored, so I'll remove it at the end). Next I'll read the package scripts, release triggers, and the userData path so the README is accurate.

---

<sub>4m 27s</sub>

### `bash`

**Read scripts, workflow triggers, and userData usage**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e 'const p=require("./package.json");console.log(JSON.stringify({name:p.name,version:p.version,engines:p.engines,scripts:p.scripts},null,1))'; echo "##### release triggers"; grep -nA4 "^on:" .github/workflows/release.yml .github/workflows/macos-package-release.yml .github/workflows/ci.yml | head -40; echo "##### userData / app name"; grep -rn "setName\|setPath('userData'\|getPath('userData')\|userData" src/main --include=*.ts | head -10

<details>
<summary>94 lines</summary>

```
{
 "name": "hvir",
 "version": "0.2.3",
 "engines": {
  "node": ">=24"
 },
 "scripts": {
  "postinstall": "npm run install:runtime",
  "install:runtime": "install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty",
  "prebuild": "node scripts/check-terminal-runtime.mts",
  "predev": "node scripts/check-terminal-runtime.mts",
  "dev": "electron-vite dev",
  "build": "npm run typecheck && electron-vite build",
  "build:smoke": "electron-vite build --mode smoke",
  "build:dir": "npm run build && electron-builder --dir",
  "pack:mac:arm64": "npm run build && electron-builder --mac pkg --arm64 --publish never",
  "pack:mac:arm64:signed": "npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true",
  "build:macos:ssh-acceptance": "bash scripts/run-macos-ssh-acceptance.sh --build-only",
  "acceptance:ssh:macos": "bash scripts/run-macos-ssh-acceptance.sh",
  "acceptance:ssh:macos:identity": "bash scripts/record-macos-ssh-identity.sh",
  "pack:linux:x64": "npm run build && electron-builder --linux deb --x64 --publish never",
  "pack:linux:arm64": "npm run build && electron-builder --linux deb --arm64 --publish never",
  "assemble:native-release": "node scripts/assemble-native-release.mjs",
  "render:native-installer": "node scripts/render-native-installer.mjs",
  "preview": "electron-vite preview",
  "typecheck:node": "tsc --noEmit -p tsconfig.node.json",
  "typecheck:web": "tsc --noEmit -p tsconfig.web.json",
  "typecheck": "npm run typecheck:node && npm run typecheck:web",
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "hooks:install": "bash scripts/install-git-hooks.sh",
  "test": "vitest run",
  "test:watch": "vitest",
  "test:mutation": "stryker run",
  "check-seams": "bash scripts/check-seams.sh",
  "check-adrs": "node scripts/check-adrs.mjs",
  "architecture:report": "node scripts/architecture-hotspots.mjs",
  "architecture:check": "node scripts/architecture-hotspots.mjs --enforce",
  "generate:terminal-themes": "node scripts/generate-terminal-theme-catalog.mts",
  "update:ghostty-web": "node scripts/ghostty-web-update/cli.mts",
  "project:kind": "node scripts/project-management/sync-kind.ts",
  "project:audit": "node scripts/project-management/audit-canonical-project.ts",
  "project:record": "node scripts/project-management/read-planning-record.ts",
  "project:pr": "node scripts/project-management/sync-pull-request-planning.ts",
  "project:status": "node scripts/project-management/read-contributor-status.ts",
  "project:migrate-tokens": "node scripts/project-management/migrate-project-tokens.ts",
  "issue:context": "node scripts/project-management/read-issue-context.ts",
  "issue:start": "node scripts/project-management/start-issue.ts",
  "verify": "npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test",
  "smoke": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles",
  "smoke:macos": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle",
  "smoke:macos:ci": "npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review",
  "smoke:scenario": "npm run build:smoke && node scripts/run-smoke-scenarios.mts",
  "smoke:isolation": "npm run build:smoke && node scripts/run-smoke-interruption.mts",
  "acceptance:ssh:real-host": "vite build --config scripts/real-host-ssh.vite.config.mts && node out/real-host-ssh/real-host-ssh-acceptance.cjs",
  "smoke:linux:installed": "bash scripts/run-linux-package-smoke.sh",
  "smoke:macos:installed": "bash scripts/run-macos-package-smoke.sh",
  "smoke:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity node scripts/run-smoke-scenarios.mts",
  "smoke:development-performance": "node scripts/run-smoke-scenarios.mts development-performance",
  "performance:capacity": "npm run build:smoke && cross-env HVIR_SMOKE_SCENARIO=capacity HVIR_CAPACITY_PERFORMANCE_GATE=controlled node scripts/run-smoke-scenarios.mts",
  "gauntlet": "bash scripts/phase8-gauntlet.sh"
 }
}
##### release triggers
.github/workflows/release.yml:3:on:
.github/workflows/release.yml-4-  workflow_dispatch:
.github/workflows/release.yml-5-    inputs:
.github/workflows/release.yml-6-      bump:
.github/workflows/release.yml-7-        description: current releases package.json; patch/minor/major open a validated release PR.
--
.github/workflows/macos-package-release.yml:3:on:
.github/workflows/macos-package-release.yml-4-  workflow_call:
.github/workflows/macos-package-release.yml-5-    inputs:
.github/workflows/macos-package-release.yml-6-      source_sha:
.github/workflows/macos-package-release.yml-7-        description: Full merged release source commit SHA to package.
--
.github/workflows/ci.yml:3:on:
.github/workflows/ci.yml-4-  pull_request:
.github/workflows/ci.yml-5-    branches:
.github/workflows/ci.yml-6-      - main
.github/workflows/ci.yml-7-      - 'epic/**'
##### userData / app name
src/main/application-runtime.ts:17:  return join(applicationRuntime.userDataRoot, name)
src/main/application-runtime-policy.ts:9:  readonly userDataRoot: string
src/main/application-runtime-policy.ts:13:  getPath(name: 'appData' | 'userData'): string
src/main/application-runtime-policy.ts:14:  setPath(name: 'userData', path: string): void
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:26:  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
src/main/application-runtime-policy.ts:27:  prepareUserDataRoot(userDataRoot)
src/main/application-runtime-policy.ts:28:  paths.setPath('userData', userDataRoot)
src/main/application-runtime-policy.ts:29:  return { buildChannel, userDataRoot }
src/main/diagnostics/runtime-diagnostics.ts:63:    userDataPath: string,
<shellId: 52 completed with exit code 0>
```

</details>


---

<sub>4m 33s</sub>

### Copilot

I have the script list. Next I'll start `npm run build` in the background to verify it, and read the release workflow and product name while it runs.

---

<sub>4m 48s</sub>

### `bash`

**Run production build to verify documented command**

$ cd /private/var/tmp/ws/a8def787/hvir && (npm run build > "$TMPDIR/hvir-readme-build.log" 2>&1; echo "BUILD_EXIT=$?" >> "$TMPDIR/hvir-readme-build.log") ; tail -n 12 "$TMPDIR/hvir-readme-build.log"

<details>
<summary>13 lines</summary>

```
../../out/renderer/assets/ganttDiagram-EL5Y4UJY-BTA0QzkC.js           133.54 kB
../../out/renderer/assets/sequenceDiagram-WJ2MYXX4-D-FOz702.js        201.65 kB
../../out/renderer/assets/cose-bilkent-JH36ORCC-Cp4aKeeS.js           214.53 kB
../../out/renderer/assets/swimlanes-42K2YHIH-BrdLvFWj.js              298.66 kB
../../out/renderer/assets/architectureDiagram-5GKGNRK7-Cg2mlY1s.js    423.22 kB
../../out/renderer/assets/katex-oVG3DVWa.js                           484.52 kB
../../out/renderer/assets/cytoscape.esm-Bx_1tVW-.js                   960.58 kB
../../out/renderer/assets/mermaid.core-DFKK_QXb.js                  1,229.10 kB
../../out/renderer/assets/cynefin-OW5HDTMX-BjbCWK0-.js              1,304.47 kB
../../out/renderer/assets/index-CFfTYprO.js                         2,763.19 kB
✓ built in 5.39s
BUILD_EXIT=0
<shellId: 53 completed with exit code 0>
```

</details>


---

<sub>4m 51s</sub>

### Copilot

The production build passes (`BUILD_EXIT=0`). Next I'll confirm the release workflow, product name, default keybindings, and harness providers before writing.

---

<sub>4m 51s</sub>

### `bash`

**Verify release workflow, product name, keybindings, providers**

$ cd /private/var/tmp/ws/a8def787/hvir && sed -n '1,30p' .github/workflows/release.yml; echo "##### productName"; grep -n "productName\|^appId\|artifactName" electron-builder.yml; echo "##### keybindings"; grep -nE "^\s*'?[a-zA-Z.]+'?: \{|shortcut|binding:|'Mod\+|'Ctrl\+|Mod\+Shift|Mod\+Alt" src/shared/keybindings.ts | head -40; echo "##### providers"; grep -rnE "executable|displayName|label:" src/main/harness/providers/*.ts | grep -vi test | head -30

<details>
<summary>64 lines</summary>

```
name: Release

on:
  workflow_dispatch:
    inputs:
      bump:
        description: current releases package.json; patch/minor/major open a validated release PR.
        required: true
        type: choice
        options:
          - current
          - patch
          - minor
          - major
      source_sha:
        description: Exact merged release source; automation only, normally left blank.
        required: false
        type: string

permissions:
  contents: read

concurrency:
  group: release
  cancel-in-progress: false

jobs:
  prepare:
    name: Prepare ${{ inputs.bump }} release
    runs-on: ubuntu-24.04
##### productName
1:appId: dev.hvir.app
2:productName: hvir
35:  artifactName: hvir-${version}-macos-${arch}.${ext}
##### keybindings
19:  cycleViewMode: 'Mod+Shift+M',
20:  findFile: 'Mod+P',
21:  findInFile: 'Mod+F',
24:  findInTerminal: 'Mod+Shift+F',
25:  goToLine: 'Ctrl+G',
26:  focusTerminal: 'Mod+J',
27:  focusViewer: 'Mod+1',
28:  focusTree: 'Mod+0',
29:  toggleTerminalFocus: 'Mod+Shift+J',
30:  nextWorkspace: 'Mod+Alt+]',
31:  previousWorkspace: 'Mod+Alt+[',
94:  binding: string,
114:function parseKeybinding(binding: string): ParsedKeybinding {
121:    throw new Error(`Invalid keybinding: ${binding}`)
129:    throw new Error(`Invalid keybinding: ${binding}`)
##### providers
src/main/harness/providers/claude-code.ts:31:    displayName: 'Claude Code',
src/main/harness/providers/claude-code.ts:42:      displayName: 'Claude Code',
src/main/harness/providers/codex.ts:46:    displayName: 'Codex',
src/main/harness/providers/codex.ts:56:      displayName: 'Codex',
src/main/harness/providers/codex.ts:144:    launch.profile.executable.kind === 'provider-default' &&
src/main/harness/providers/cursor.ts:7:    displayName: 'Cursor CLI',
src/main/harness/providers/cursor.ts:15:      displayName: 'Cursor CLI',
src/main/harness/providers/gemini.ts:7:    displayName: 'Gemini CLI',
src/main/harness/providers/gemini.ts:15:      displayName: 'Gemini CLI',
src/main/harness/providers/github-copilot.ts:7:    displayName: 'GitHub Copilot CLI',
src/main/harness/providers/github-copilot.ts:15:      displayName: 'GitHub Copilot CLI',
src/main/harness/providers/pi.ts:7:    displayName: 'Pi',
src/main/harness/providers/pi.ts:15:      displayName: 'Pi',
src/main/harness/providers/shell.ts:12:    displayName: 'Shell',
src/main/harness/providers/shell.ts:21:      displayName: 'Shell',
src/main/harness/providers/shell.ts:47:    displayName: 'Custom',
<shellId: 54 completed with exit code 0>
```

</details>


---

<sub>4m 56s</sub>

### Copilot

Keybindings and provider names check out. Last, I'll confirm the executable names, release publishing, and install paths in the installer template.

---

<sub>4m 56s</sub>

### `bash`

**Verify executables, release publishing, installer paths**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### executables"; grep -rnE "executable|command:" src/main/harness/providers/*.ts | grep -E "'(claude|codex|pi|gemini|copilot|cursor-agent|zsh|bash|sh)'" | head -12; echo "##### release publish"; grep -nE "gh release|softprops|action-gh-release|upload|tag_name|draft|prerelease" .github/workflows/release.yml .github/workflows/macos-package-release.yml | head -20; echo "##### installer paths"; grep -nE "/opt/hvir|/usr/bin/hvir|/usr/local/bin/hvir|/Applications/hvir|--purge|--uninstall|Intel|x86_64|arm64" scripts/native-installer.template.sh | head -30

<details>
<summary>43 lines</summary>

```
##### executables
##### release publish
.github/workflows/release.yml:120:            if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
.github/workflows/release.yml:121:              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
.github/workflows/release.yml:122:              if [ "$is_draft" != true ]; then
.github/workflows/release.yml:127:            echo "Repairing or completing draft $tag at $remote_tag_sha"
.github/workflows/release.yml:131:          elif gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
.github/workflows/release.yml:241:        uses: actions/upload-artifact@v7
.github/workflows/release.yml:501:      - name: Create or repair a private draft
.github/workflows/release.yml:527:          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
.github/workflows/release.yml:528:            is_draft=$(gh release view "$TAG" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
.github/workflows/release.yml:529:            if [ "$is_draft" != true ]; then
.github/workflows/release.yml:534:            gh release create "$TAG" \
.github/workflows/release.yml:537:              --draft \
.github/workflows/release.yml:542:      - name: Upload and validate the complete draft asset set
.github/workflows/release.yml:548:          gh release upload "$TAG" dist/release/* \
.github/workflows/release.yml:551:          actual=$(gh release view "$TAG" \
.github/workflows/release.yml:576:          gh release edit "$TAG" \
.github/workflows/release.yml:578:            --draft=false \
.github/workflows/release.yml:588:            if gh release verify "$TAG" --repo "$GITHUB_REPOSITORY"; then
.github/workflows/release.yml:602:          gh release download "$TAG" \
.github/workflows/release.yml:610:            gh release verify-asset "$TAG" "$asset" --repo "$GITHUB_REPOSITORY"
##### installer paths
60:  install.sh --uninstall
61:  install.sh --uninstall --purge
64:--purge additionally removes the current user's documented hvir settings and cache.
73:    --uninstall) operation='uninstall' ;;
85:    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
104:  Linux:x86_64)
109:    native_command='/usr/bin/hvir'
111:  Linux:aarch64 | Linux:arm64)
116:    native_command='/usr/bin/hvir'
118:  Darwin:arm64)
123:    native_command='/usr/local/bin/hvir'
127:      "hvir does not support $kernel $machine. Supported targets are compatible Linux x64/arm64 hosts and Apple-silicon macOS." \
285:  profile="$package_root/opt/hvir/resources/apparmor-profile"
541:  /usr/bin/grep -Fxq 'application=/Applications/hvir.app' "$inventory"
542:  /usr/bin/grep -Fxq 'command=/usr/local/bin/hvir' "$inventory"
547:  [[ -f /usr/local/bin/hvir ]] &&
548:    /usr/bin/grep -Fq 'hvir-native-package-command-v1' /usr/local/bin/hvir
565:      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
567:        /usr/local/bin/hvir \
<shellId: 55 completed with exit code 0>
```

</details>


---

<sub>5m 0s</sub>

### Copilot

Release publishing and installer paths are confirmed. The executable-name grep returned nothing, so I'll look for the names directly.

---

<sub>5m 0s</sub>

### `bash`

**Find harness executable names**

$ cd /private/var/tmp/ws/a8def787/hvir && grep -nE "'(claude|codex|pi|gemini|copilot|cursor-agent)'" src/main/harness/providers/*.ts | grep -v test | head -12; echo "##### providers dir"; ls src/main/harness/providers/

<details>
<summary>21 lines</summary>

```
src/main/harness/providers/claude-code.ts:69:      file: 'claude',
src/main/harness/providers/claude-code.ts:77:      file: 'claude',
src/main/harness/providers/claude-code.ts:87:      file: 'claude',
src/main/harness/providers/codex.ts:45:    id: asHarnessProviderId('codex'),
src/main/harness/providers/codex.ts:95:      file: 'codex',
src/main/harness/providers/codex.ts:103:      file: 'codex',
src/main/harness/providers/codex.ts:118:      file: 'codex',
src/main/harness/providers/cursor.ts:29:  launch: () => ({ file: 'cursor-agent', args: [], shellEnvironment: true }),
src/main/harness/providers/gemini.ts:29:  launch: () => ({ file: 'gemini', args: [], shellEnvironment: true }),
src/main/harness/providers/github-copilot.ts:30:    file: 'copilot',
src/main/harness/providers/pi.ts:6:    id: asHarnessProviderId('pi'),
src/main/harness/providers/pi.ts:32:  launch: () => ({ file: 'pi', args: [], shellEnvironment: true }),
##### providers dir
claude-code.ts
codex.ts
cursor.ts
gemini.ts
github-copilot.ts
pi.ts
shell.ts
<shellId: 56 completed with exit code 0>
```

</details>


---

<sub>5m 18s</sub>

### Copilot

Executable names are confirmed. I'll do one last set of checks on the source layout, the `HVIR_REPO_TOKEN` usage, the ADR path, the license, and the `hvir` launcher before writing.

---

<sub>5m 18s</sub>

### `bash`

**Check source layout, token and ADR usage, license, launcher**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### src layout"; ls src src/main src/renderer src/renderer/src src/shared src/workers src/preload 2>&1 | head -80; echo "##### token/adr"; grep -rn "HVIR_REPO_TOKEN" scripts --include=*.mjs --include=*.ts --include=*.sh | head -4; grep -n "docs/adr" scripts/check-adrs.mjs | head -3; echo "##### license"; head -3 LICENSE; echo "##### launcher"; sed -n '1,40p' build/native/hvir-command

<details>
<summary>126 lines</summary>

```
##### src layout
src:
main
preload
renderer
shared
workers

src/main:
application-runtime-policy.ts
application-runtime.ts
attention-badge.ts
build-environment.d.ts
diagnostics
document-review
filename-search
git
harness
health
html-preview-protocol.ts
index.ts
ipc
ipc.ts
navigation-policy.ts
project-coordinator.ts
project-file-operations
project-folder-picker
project-host
project-registry.ts
project-watch.ts
pty
renderer-event-delivery.ts
renderer-event-publisher.ts
renderer-presentation-resources.ts
renderer-resource-scopes.ts
sessions
smoke
terminal
viewer
web-pane
window
workbench-runtime.ts
worker-host.ts
workspace-activity.ts
workspace-cleanup.ts
workspace-coordinator.ts
workspace-removal-coordinator.ts

src/preload:
index.ts
renderer-diagnostics.ts
terminal-clipboard-file-paste.ts

src/renderer:
index.html
src

src/renderer/src:
App.tsx
context-menu
dashboards
development
diagnostics
document-review
ErrorBoundary.tsx
git
harness
health
hvir.d.ts
layout
main.tsx
path-copy
scrollbars
sessions
settings
styles
styles.css
terminal
theme-model.ts
theme.ts
themes.css
##### token/adr
scripts/project-management/migrate-project-tokens.ts:32:      token: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/migrate-project-tokens.ts:58:    token: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/planning-cli.ts:25:  HVIR_REPO_TOKEN               Token used for repository issue reads
scripts/project-management/contributor-status-cli.ts:20:Credentials: HVIR_REPO_TOKEN and HVIR_PROJECT_TOKEN. Private current identity: CODEX_THREAD_ID
31:  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
48:    errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
55:      errors.push(`docs/adr/${name}: expected exactly one ${section}`)
##### license
MIT License

Copyright (c) 2026 hvir contributors
##### launcher
#!/bin/sh
set -eu

# hvir-native-package-command-v1

case "$(/usr/bin/uname -s)" in
Linux)
  application='/opt/hvir/hvir'
  ;;
Darwin)
  application='/Applications/hvir.app/Contents/MacOS/hvir'
  ;;
*)
  echo 'hvir: the installed command is available only on Linux and macOS' >&2
  exit 69
  ;;
esac

if [ "$#" -gt 0 ]; then
  case "$1" in
  -*)
    # Smoke and Chromium switches are explicit internal options.
    ;;
  *)
    caller_directory=$(pwd -P)
    case "$1" in
    /*) project_candidate=$1 ;;
    *) project_candidate=$caller_directory/$1 ;;
    esac
    if [ ! -d "$project_candidate" ]; then
      echo "hvir: project is not a local directory: $1" >&2
      exit 64
    fi
    project_root=$(CDPATH= cd -P "$project_candidate" && pwd -P)
    shift
    set -- "--project-root=$project_root" "$@"
    ;;
  esac
fi
<shellId: 57 completed with exit code 0>
```

</details>


---

<sub>5m 26s</sub>

### Copilot

Launcher behaviour matches the summary. Two last checks: the `architecture:check` token usage and the remaining `src/shared`, `src/workers`, and project-host files.

---

<sub>5m 26s</sub>

### `bash`

**Check token use in architecture check and src dirs**

$ cd /private/var/tmp/ws/a8def787/hvir && grep -n "HVIR_REPO_TOKEN\|GITHUB_TOKEN\|token" scripts/architecture-hotspots.mjs | head -8; echo "##### shared/workers/project-host/git"; ls src/shared | head -60; echo ---; ls src/workers src/main/project-host src/main/git | head -60

<details>
<summary>80 lines</summary>

```
##### shared/workers/project-host/git
application-build-channel.ts
composer-submit.ts
diagnostic-evidence.ts
diagnostic-report-event.ts
diagnostic-report.ts
diagnostics.ts
disposer.ts
document-review.ts
file-uri.ts
filename-search.ts
fs-types.ts
git-types.ts
harness-profile.ts
harness-provider.ts
harness-telemetry.ts
harness-usage.ts
host-path.ts
html-preview.ts
index.ts
ipc
ipc-contract.ts
ipc.ts
keybindings.ts
markdown-it-task-lists.d.ts
operation-result.ts
project-file-operations.ts
rendered-link.ts
sessions-projection.ts
terminal-attention.ts
terminal-clipboard-file-paste.ts
terminal-start-admission.ts
viewer-types.ts
viewer-workload-policy.ts
web-pane.ts
workbench-health.ts
worker-protocol.ts
workspace-types.ts
---
src/main/git:
git-branches.ts
git-command-context.ts
git-detail.ts
git-diff.ts
git-engine.ts
git-history.ts
git-parsers.ts
git-status.ts
git-worktrees.ts
mutation-authorization.ts
mutation-coordinator.ts
untracked-line-counts.ts
worker-host-broker.ts
worker-host-router.ts

src/main/project-host:
electron-project-reveal.ts
electron-project-trash.ts
index.ts
local-host.ts
project-host-catalog.ts
project-host.ts
renderer-ssh-prompter.ts
ssh-abort.ts
ssh-auth.ts
ssh-client-lifecycle.ts
ssh-config.ts
ssh-exclusive-create.ts
ssh-file-access.ts
ssh-host-options.ts
ssh-host-trust.ts
ssh-host.ts
ssh-identity-source.ts
ssh-project-file-transfer.ts
ssh-text-prefix.ts
ssh-transport-pool.ts
ssh-watch-service.ts

src/workers:
echo-worker.ts
git-worker.ts
<shellId: 58 completed with exit code 0>
```

</details>


---

<sub>5m 29s</sub>

### Copilot

`architecture-hotspots.mjs` doesn't name the token directly, so I'll re-run the two gate commands to capture their exact failure messages for the README.

---

<sub>5m 39s</sub>

### `bash`

**Capture exact gate command results**

$ cd /private/var/tmp/ws/a8def787/hvir && npm run -s architecture:check > "$TMPDIR/hvir-arch.log" 2>&1; echo "ARCH_EXIT=$?"; sed 's/\x1b\[[0-9;]*m//g' "$TMPDIR/hvir-arch.log" | head -8; echo "##### check-adrs"; npm run -s check-adrs > "$TMPDIR/hvir-adr.log" 2>&1; echo "ADR_EXIT=$?"; head -3 "$TMPDIR/hvir-adr.log"; echo "##### check-seams"; npm run -s check-seams > "$TMPDIR/hvir-seams.log" 2>&1; echo "SEAMS_EXIT=$?"; tail -n 2 "$TMPDIR/hvir-seams.log"; echo "##### typecheck"; npm run -s typecheck >/dev/null 2>&1; echo "TYPECHECK_EXIT=$?"

<details>
<summary>13 lines</summary>

```
ARCH_EXIT=1
Architecture verification failed: HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available
##### check-adrs
ADR_EXIT=1
node:fs:1884
  const result = binding.readdir(
                         ^
##### check-seams
SEAMS_EXIT=0

seam check passed
##### typecheck
TYPECHECK_EXIT=0
<shellId: 59 completed with exit code 0>
```

</details>


---

<sub>6m 8s</sub>

### Copilot

All gate results are confirmed. Before drafting, I'll verify the remaining README claims: release asset names, installer usage, the `Mod` key definition, output directories, the renderer libraries, the document-review delivery modes, and the git mutation list.

---

<sub>6m 9s</sub>

### `bash`

**Verify release names, installer usage, and build details**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### asset names"; grep -nE "darwin|linux-|sha256|SHA256SUMS|install\.sh" scripts/assemble-native-release.mjs | head -20; echo "##### installer usage"; sed -n '40,70p' scripts/native-installer.template.sh; echo "##### Mod"; grep -nE "'Mod'|Mod\b.*(meta|ctrl)|metaKey|ctrlKey" src/shared/keybindings.ts | head -6; echo "##### output dir"; grep -nE "output|directories" electron-builder.yml; echo "##### build dir"; ls build; echo "##### OS in release"; grep -nE "ubuntu-|debian" .github/workflows/release.yml | head -8

<details>
<summary>73 lines</summary>

```
##### asset names
28:      name: `hvir-${version}-linux-x64.deb`,
33:      name: `hvir-${version}-linux-arm64.deb`,
38:      name: `hvir-${version}-darwin-arm64.pkg`,
51:      sha256: await sha256File(resolve(assetDirectory, artifact.name)),
54:  const installerPath = resolve(assetDirectory, 'install.sh')
74:      renderedArtifact.sha256 !== artifact.sha256
85:    sha256: await sha256File(installerPath),
89:    sha256: await sha256File(noticesPath),
112:      async (name) => `${await sha256File(resolve(assetDirectory, name))}  ${name}`,
115:  const checksumsPath = resolve(assetDirectory, 'SHA256SUMS')
149:    'install.sh',
151:    'SHA256SUMS',
182:async function sha256File(path) {
183:  const hash = createHash('sha256')
##### installer usage
      status=1
      ;;
    esac
  fi
  if [[ "$status" -ne 0 ]]; then
    echo "hvir $HVIR_VERSION failed while $stage (status $status)." >&2
  fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 129' HUP
trap 'exit 130' INT
trap 'exit 143' TERM

usage() {
  cat <<EOF
hvir $HVIR_VERSION installer

Usage:
  install.sh
  install.sh --uninstall
  install.sh --uninstall --purge

The default operation installs or updates hvir. Uninstall preserves user state;
--purge additionally removes the current user's documented hvir settings and cache.
EOF
}

parse_arguments() {
  case "$#" in
  0) ;;
##### Mod
51:  readonly ctrlKey: boolean
52:  readonly metaKey: boolean
98:  const modDown = mac ? event.metaKey : event.ctrlKey
108:    event.ctrlKey === (parsed.ctrl || (parsed.mod && !mac)) &&
109:    event.metaKey === (parsed.meta || (parsed.mod && mac)) &&
##### output dir
3:directories:
4:  output: dist
##### build dir
entitlements.mac.inherit.plist
entitlements.mac.plist
icon-linux.svg
icon-macos.icns
icon-macos.png
icon-macos.svg
icons-linux
linux
native
pkg-scripts
##### OS in release
30:    runs-on: ubuntu-24.04
188:            os: ubuntu-22.04
193:            os: ubuntu-22.04-arm
251:  accept-linux-ubuntu-24:
266:            os: ubuntu-24.04
271:            os: ubuntu-24.04-arm
305:  accept-linux-debian:
323:            os: ubuntu-22.04
<shellId: 60 completed with exit code 0>
```

</details>


---

<sub>6m 16s</sub>

### Copilot

Asset names, the installer usage text, the `Mod` behaviour, and the `dist/` output directory are confirmed. Remaining checks: how the installer locates its package, the Debian acceptance image, renderer libraries, document-review delivery modes, and git mutation types.

---

<sub>6m 17s</sub>

### `bash`

**Verify installer package lookup and feature claims**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### installer package lookup"; grep -nE "\.deb|\.pkg|sha256|SHA256SUMS|curl|https://" scripts/native-installer.template.sh | head -15; echo "##### debian image"; grep -nE "debian:|trixie|bookworm|Debian" .github/workflows/release.yml | head -6; echo "##### renderer libs"; for lib in "@codemirror" "from 'mermaid'" "shiki" "markdown-it-task-lists"; do printf "%s: " "$lib"; grep -rl "$lib" src/renderer/src 2>/dev/null | wc -l; done; echo "##### delivery modes"; grep -nE "copy-only|insert|send-now" src/shared/document-review.ts | head -5; echo "##### mutation kinds"; grep -nE "'(fetch|pull|switch|prune|commit|stage|push)" src/main/git/mutation-authorization.ts src/shared/git-types.ts 2>/dev/null | head -12

<details>
<summary>36 lines</summary>

```
##### installer package lookup
23:artifact_sha256=''
108:    artifact_sha256=$HVIR_LINUX_X64_SHA256
115:    artifact_sha256=$HVIR_LINUX_ARM64_SHA256
122:    artifact_sha256=$HVIR_MACOS_ARM64_SHA256
144:    require_absolute_tool /usr/bin/curl
152:    require_absolute_tool /usr/bin/sha256sum
235:    /usr/bin/curl \
251:    digest_output=$(/usr/bin/sha256sum "$artifact")
256:  if [[ "$actual_digest" != "$artifact_sha256" ]]; then
258:    echo "Expected: $artifact_sha256" >&2
##### debian image
305:  accept-linux-debian:
315:      image: node:24-trixie
322:          - name: Debian 13 x64
327:          - name: Debian 13 arm64
345:      - name: Prepare the disposable Debian acceptance host
##### renderer libs
@codemirror:        8
from 'mermaid':        0
shiki:        9
markdown-it-task-lists:        1
##### delivery modes
203:export type DocumentReviewDeliveryCapability = 'copy-only' | 'insert' | 'send-now'
239:  readonly outcome: 'inserted'
##### mutation kinds
src/main/git/mutation-authorization.ts:11:export type GitMutationKind = 'worktree-prune' | 'branch-switch' | 'fetch' | 'pull'
src/main/git/mutation-authorization.ts:72:const PRUNE_ARGS = ['worktree', 'prune', '--expire', 'now', '--verbose'] as const
src/main/git/mutation-authorization.ts:223:  if (sameArgs(command, GIT_FETCH_ARGS)) return { kind: 'fetch', root }
src/main/git/mutation-authorization.ts:224:  if (sameArgs(command, GIT_PULL_ARGS)) return { kind: 'pull', root }
src/main/git/mutation-authorization.ts:227:    command[0] === 'switch' &&
src/main/git/mutation-authorization.ts:242:    case 'fetch':
src/main/git/mutation-authorization.ts:244:    case 'pull':
src/main/git/mutation-authorization.ts:289:    value === 'fetch' ||
src/main/git/mutation-authorization.ts:290:    value === 'pull'
<shellId: 61 completed with exit code 0>
```

</details>


---

<sub>6m 22s</sub>

### Copilot

Feature claims check out: git mutations are limited to fetch, pull, branch switch, and worktree prune, and document-review modes match. I'll confirm the Mermaid and ghostty-web usage and how the installer fetches its package.

---

<sub>6m 23s</sub>

### `bash`

**Verify Mermaid, ghostty-web, and installer download source**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### mermaid/ghostty"; grep -rln "mermaid" src/renderer/src | head -3; grep -rln "ghostty-web" src/renderer/src | head -3; echo "##### installer download source"; grep -nE "HVIR_[A-Z_]*URL|release/download|github.com" scripts/native-installer.template.sh | head -8; sed -n '228,240p' scripts/native-installer.template.sh

<details>
<summary>23 lines</summary>

```
##### mermaid/ghostty
src/renderer/src/styles/viewer-content.css
src/renderer/src/viewer/RenderedView.tsx
src/renderer/src/viewer/viewer-find.ts
src/renderer/src/terminal/ghostty-terminal-fit.ts
src/renderer/src/terminal/ghostty-terminal-pane.ts
src/renderer/src/terminal/terminal-pane.ts
##### installer download source
5:readonly HVIR_RELEASE_BASE_URL=@@HVIR_RELEASE_BASE_URL@@
243:      "$HVIR_RELEASE_BASE_URL/$artifact_name"

download_artifact() {
  local destination=$1
  stage="downloading $artifact_name"
  if [[ -n "$HVIR_ACCEPTANCE_ASSET_DIRECTORY" ]]; then
    /bin/cp -- "$HVIR_ACCEPTANCE_ASSET_DIRECTORY/$artifact_name" "$destination"
  else
    /usr/bin/curl \
      --fail \
      --silent \
      --show-error \
      --location \
      --proto '=https' \
<shellId: 62 completed with exit code 0>
```

</details>


---

<sub>6m 46s</sub>

### Copilot

I now have what I need for the README. One final batch checks privilege use in the installer, the Prettier settings, CI's CodeQL job, third-party notices, the shebang, and the pre-push hook.

---

<sub>6m 46s</sub>

### `bash`

**Final checks for installer, prettier, CI, notices, hook**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### sudo uses"; grep -n "sudo" scripts/native-installer.template.sh | head -6; echo "##### shebang"; head -1 scripts/native-installer.template.sh; echo "##### prettier"; cat .prettierrc.json; echo; echo "##### ci codeql"; grep -n -i "codeql" .github/workflows/ci.yml | head -3; echo "##### notices"; grep -n -iE "coder|skill steward|MIT" THIRD_PARTY_NOTICES.md | head -8; echo "##### pre-push"; cat .githooks/pre-push | head -30

<details>
<summary>50 lines</summary>

```
##### sudo uses
142:  require_absolute_tool /usr/bin/sudo
514:      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
521:      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
555:      /usr/bin/sudo /usr/bin/apt remove -y hvir
565:      /usr/bin/sudo /bin/rm -rf -- /Applications/hvir.app
566:      /usr/bin/sudo /bin/rm -f -- \
##### shebang
#!/usr/bin/env bash
##### prettier
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}

##### ci codeql
170:  codeql:
171:    name: CodeQL analysis
186:      - name: Initialize CodeQL
##### notices
8:## Skill Steward rename-noreplace binding
13:validation and platform syscall wrapper from Skill Steward's binding. hvir modifies
17:MIT License
19:Copyright (c) 2026 Skill Steward contributors
23:in the Software without restriction, including without limitation the rights
25:copies of the Software, and to permit persons to whom the Software is
32:IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
41:Source: <https://github.com/coder/ghostty-web>
##### pre-push
#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

echo "[pre-push] Running TypeScript checks..."
npm run typecheck

echo "[pre-push] Running hvir's local-platform Electron smoke test..."

if [[ "$(uname -s)" == "Linux" && -z "${DISPLAY:-}" ]]; then
  if ! command -v xvfb-run >/dev/null 2>&1; then
    echo "[pre-push] Linux has no DISPLAY and xvfb-run is unavailable." >&2
    echo "[pre-push] Install Xvfb, provide DISPLAY, or use git push --no-verify." >&2
    exit 1
  fi
  exec xvfb-run -a npm run smoke
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  exec npm run smoke:macos
fi

exec npm run smoke
<shellId: 63 completed with exit code 0>
```

</details>


---

<sub>6m 52s</sub>

### Copilot

Every claim is now verified. I'll confirm the framework versions for the tech-stack line, then write the README.

---

<sub>6m 52s</sub>

### `bash`

**Read framework versions and scratch files**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e 'const p=require("./package.json");const all={...p.dependencies,...p.devDependencies};for (const k of ["electron","electron-vite","react","typescript","vite","node-pty","ssh2","ghostty-web","@codemirror/view","shiki","mermaid","vitest","electron-builder"]) console.log(k, all[k]??"-")'; ls "$TMPDIR" | head -20

<details>
<summary>24 lines</summary>

```
electron ^43.4.1
electron-vite ^5.0.0
react ^19.2.8
typescript ^6.0.3
vite ^7.3.0
node-pty ^1.1.0
ssh2 ^1.17.0
ghostty-web https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz
@codemirror/view ^6.43.11
shiki ^4.4.3
mermaid ^11.17.2
vitest ^5.0.0
electron-builder ^26.0.0
7b9uxpdu1qvpP09TLPUix
copilot-tool-output-1792722620233-1.txt
egv_tSecPQjfEtTtwVS2j
hvir-adr.log
hvir-arch.log
hvir-readme-build.log
hvir-readme-test.clean.log
hvir-readme-test.log
hvir-seams.log
node-compile-cache
<shellId: 64 completed with exit code 0>
```

</details>


---

<sub>6m 59s</sub>

### Copilot

I have the versions. Before writing, I'll verify three remaining details: harness launch modes, terminal attention states, and settings section names.

---

<sub>6m 59s</sub>

### `bash`

**Verify launch modes, attention states, settings sections**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### launch modes"; grep -rnoE "'(fresh|resume|fork)'" src/shared/harness-provider.ts src/shared/harness-profile.ts 2>/dev/null | sort -u | head -6; echo "##### attention"; grep -rnoE "'(working|bell|idle)'" src/shared/terminal-attention.ts | sort -u | head -4; echo "##### settings sections"; grep -rnoE "'(appearance|typography|terminal|terminal-themes|keybindings|git|harness-profiles|harness)'" src/shared src/renderer/src/settings 2>/dev/null | sort -u | head -12

<details>
<summary>22 lines</summary>

```
##### launch modes
src/shared/harness-profile.ts:89:'fork'
src/shared/harness-profile.ts:89:'fresh'
src/shared/harness-profile.ts:89:'resume'
##### attention
src/shared/terminal-attention.ts:2:'bell'
src/shared/terminal-attention.ts:2:'idle'
src/shared/terminal-attention.ts:2:'working'
##### settings sections
src/renderer/src/settings/sections/AppearanceSettings.tsx:86:'git'
src/renderer/src/settings/sections/AppearanceSettings.tsx:86:'terminal'
src/renderer/src/settings/settings-draft.ts:113:'terminal'
src/renderer/src/settings/settings-draft.ts:119:'keybindings'
src/renderer/src/settings/settings-draft.ts:126:'keybindings'
src/renderer/src/settings/settings-draft.ts:83:'appearance'
src/renderer/src/settings/settings-draft.ts:98:'appearance'
src/renderer/src/settings/settings-navigation.ts:16:'appearance'
src/renderer/src/settings/settings-navigation.ts:2:'appearance'
src/renderer/src/settings/settings-navigation.ts:20:'appearance'
src/renderer/src/settings/settings-navigation.ts:3:'terminal'
src/renderer/src/settings/settings-navigation.ts:4:'git'
<shellId: 65 completed with exit code 0>
```

</details>


---

<sub>7m 33s</sub>

### Copilot

Launch modes and attention states are confirmed. Last checks before writing: which modules import host primitives and `ipcRenderer`, the Linux glibc/libstdc++ requirement source, and the ghostty-web notice.

---

<sub>7m 33s</sub>

### `bash`

**Verify seam importers, Linux requirements, notices**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### primitive importers"; grep -rlE "from '(node:)?(fs|fs/promises|child_process)'|from 'chokidar'|from 'node-pty'|from 'ssh2'" src | sort; echo "##### ipcRenderer importers"; grep -rl "ipcRenderer" src | sort; echo "##### eslint ipc rule"; grep -n "ipcRenderer" eslint.config.mjs | head -3; echo "##### glibc/libstdc"; grep -rnE "2\.35|libstdc|GLIBC" scripts/native-installer.template.sh electron-builder.yml build/linux 2>/dev/null | head -5; echo "##### ghostty notice"; sed -n '34,42p' THIRD_PARTY_NOTICES.md

<details>
<summary>30 lines</summary>

```
##### primitive importers
src/main/project-host/local-host.ts
src/main/project-host/ssh-abort.ts
src/main/project-host/ssh-client-lifecycle.ts
src/main/project-host/ssh-exclusive-create.ts
src/main/project-host/ssh-file-access.ts
src/main/project-host/ssh-host-options.ts
src/main/project-host/ssh-host.ts
src/main/project-host/ssh-project-file-transfer.ts
src/main/project-host/ssh-transport-pool.ts
##### ipcRenderer importers
src/preload/index.ts
##### eslint ipc rule
12:// `LocalHost` module; `ipcRenderer` only inside the preload bridge; and
37:/** `ipcRenderer` — confined to the preload bridge. */
40:  importNames: ['ipcRenderer'],
##### glibc/libstdc
scripts/native-installer.template.sh:15:readonly HVIR_LINUX_MINIMUM_GLIBC=2.35
scripts/native-installer.template.sh:184:    echo "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer." >&2
scripts/native-installer.template.sh:188:  if ! version_at_least "$glibc_version" "$HVIR_LINUX_MINIMUM_GLIBC"; then
scripts/native-installer.template.sh:190:      "hvir requires glibc $HVIR_LINUX_MINIMUM_GLIBC or newer; found ${glibc_version:-unknown}." \
electron-builder.yml:58:    - libc6 (>= 2.35)
##### ghostty notice
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## ghostty-web

Source: <https://github.com/coder/ghostty-web>
<shellId: 66 completed with exit code 0>
```

</details>


---

<sub>7m 45s</sub>

### Copilot

The seam check shows that `fs`, `child_process`, `chokidar`, `node-pty`, and `ssh2` are imported only under `src/main/project-host/`, and `ipcRenderer` only in the preload. I still need the libstdc++ source and the PTY spawn rule before I write.

---

<sub>7m 46s</sub>

### `bash`

**Check libstdc++ requirement and PTY spawn rule**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "##### libstdc"; grep -rn "libstdc" --exclude-dir=node_modules --exclude-dir=.git . | head -5; echo "##### pty rule"; grep -n "SPAWN_PTY_BAN\|pty-supervisor" eslint.config.mjs | head -5; echo "##### pty supervisor users"; grep -rln "pty-supervisor" src | head -5

<details>
<summary>16 lines</summary>

```
##### libstdc
./test/linux-native-package.test.ts:58:    expect(builder.deb?.depends).toContain('libstdc++6 (>= 12)')
./electron-builder.yml:59:    - libstdc++6 (>= 12)
##### pty rule
46:const SPAWN_PTY_BAN = {
52:    'host.spawnPty outside src/main/pty/pty-supervisor.ts.',
102:      SPAWN_PTY_BAN,
137:      'no-restricted-syntax': ['error', SPAWN_PTY_BAN, ...DYNAMIC_HOST_IMPORT_BANS],
161:        SPAWN_PTY_BAN,
##### pty supervisor users
src/shared/diagnostic-report-event.ts
src/main/smoke/web-pane.ts
src/main/smoke/capacity-terminals.ts
src/main/smoke/terminal-scenario-ready.ts
src/main/smoke/platform-contracts.ts
<shellId: 67 completed with exit code 0>
```

</details>


---

<sub>8m 22s</sub>

### Copilot

All facts are verified, including the libstdc++ 12 dependency and the `spawnPty` rule. I'll write the README now, using only checked claims.

---

<sub>9m 1s</sub>

### `create`

**create a new file at /private/var/tmp/ws/a8def787/hvir/README.md.**

/private/var/tmp/ws/a8def787/hvir/README.md

```
Created file /private/var/tmp/ws/a8def787/hvir/README.md with 11301 characters
```


---

<sub>9m 6s</sub>

### Copilot

The README is written. I'll confirm that every file path it references exists, so no link or path is broken.

---

<sub>9m 7s</sub>

### `bash`

**Verify README file references exist**

$ cd /private/var/tmp/ws/a8def787/hvir && for p in LICENSE THIRD_PARTY_NOTICES.md .github/workflows/release.yml .github/workflows/ci.yml eslint.config.mjs scripts/check-seams.sh scripts/check-terminal-runtime.mts scripts/native-installer.template.sh src/main/project-host/ src/main/pty/pty-supervisor.ts src/main/git/mutation-authorization.ts src/main/git/git-parsers.ts src/shared/keybindings.ts src/workers/git-worker.ts src/workers/echo-worker.ts src/preload src/renderer src/shared src/main packages/rename-noreplace build/native/hvir-command .githooks/pre-push .prettierrc.json test/ scripts/; do if [ -e "$p" ]; then echo "OK      $p"; else echo "MISSING $p"; fi; done; echo "---- backticked path refs in README:"; grep -oE '`[^`]+`' README.md | tr -d '`' | grep -E '/|\.(md|ts|mts|sh|yml|json|mjs)$' | sort -u | grep -vE '^(npm|hvir|git|xvfb|sh|bash)' | head -60

<details>
<summary>65 lines</summary>

```
OK      LICENSE
OK      THIRD_PARTY_NOTICES.md
OK      .github/workflows/release.yml
OK      .github/workflows/ci.yml
OK      eslint.config.mjs
OK      scripts/check-seams.sh
OK      scripts/check-terminal-runtime.mts
OK      scripts/native-installer.template.sh
OK      src/main/project-host/
OK      src/main/pty/pty-supervisor.ts
OK      src/main/git/mutation-authorization.ts
OK      src/main/git/git-parsers.ts
OK      src/shared/keybindings.ts
OK      src/workers/git-worker.ts
OK      src/workers/echo-worker.ts
OK      src/preload
OK      src/renderer
OK      src/shared
OK      src/main
OK      packages/rename-noreplace
OK      build/native/hvir-command
OK      .githooks/pre-push
OK      .prettierrc.json
OK      test/
OK      scripts/
---- backticked path refs in README:
.githooks/pre-push
.github/workflows/ci.yml
.github/workflows/release.yml
.prettierrc.json
@hvir/rename-noreplace
/Applications/hvir.app
/opt/hvir
/usr/bin/hvir
/usr/local/bin/hvir
~/.config/hvir
~/.ssh
~/.ssh/config
~/Library/Application Support/hvir
build/
build/native/hvir-command
dist/
docs/adr/
echo-worker.ts
epic/**
eslint.config.mjs
install.sh
out/
packages/rename-noreplace
scripts/
scripts/check-seams.sh
scripts/check-terminal-runtime.mts
scripts/native-installer.template.sh
src/main
src/main/git/git-parsers.ts
src/main/git/mutation-authorization.ts
src/main/project-host/
src/main/pty/pty-supervisor.ts
src/preload
src/renderer
src/shared
src/shared/keybindings.ts
src/workers
test/
<shellId: 68 completed with exit code 0>
```

</details>


---

<sub>10m 43s</sub>

### ◌ Conversation Compacted

---

<sub>10m 46s</sub>

### Copilot

All referenced paths exist. Next I'll check that every npm script named in the README exists in `package.json`, and that `docs/adr/` is present.

---

<sub>10m 46s</sub>

### `bash`

**Check README npm scripts exist in package.json**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e '
const pkg = require("./package.json");
const readme = require("fs").readFileSync("README.md", "utf8");
const names = new Set([...readme.matchAll(/npm run ([a-zA-Z0-9:_-]+)/g)].map(m => m[1]));
names.add("ci"); names.delete("ci");
const missing = [...names].filter(n => !(n in pkg.scripts));
console.log("README npm script refs:", [...names].sort().join(" "));
console.log("MISSING from package.json:", missing.length ? missing.join(", ") : "none");
' && ls -d docs/adr 2>&1 | head -1 && git status --short | head -20

```
README npm script refs: architecture:check architecture:report build build:dir check-adrs check-seams dev format hooks:install lint pack:linux:arm64 pack:linux:x64 pack:mac:arm64 pack:mac:arm64:signed smoke smoke:macos smoke:macos:ci test:mutation test:watch typecheck verify
MISSING from package.json: none
ls: docs/adr: No such file or directory
?? README.md
<shellId: 69 completed with exit code 0>
```


---

<sub>10m 50s</sub>

### Copilot

All npm script names match. `docs/adr/` is absent in this checkout, so I need to confirm how `check-adrs` and `verify` behave before the README describes them.

---

<sub>10m 50s</sub>

### `bash`

**Inspect verify and ADR script definitions**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e 'const p=require("./package.json");for (const k of ["verify","check-adrs","check-seams","architecture:check","architecture:report","lint","typecheck","test","smoke","smoke:macos","smoke:macos:ci","build","hooks:install","pack:mac:arm64:signed"]) console.log(k.padEnd(24), "=>", p.scripts[k])' && echo "---" && grep -rn "docs/adr" scripts/ package.json 2>/dev/null | head -10

<details>
<summary>22 lines</summary>

```
verify                   => npm run check-seams && npm run check-adrs && npm run architecture:check && npm run lint && npm run typecheck && npm test
check-adrs               => node scripts/check-adrs.mjs
check-seams              => bash scripts/check-seams.sh
architecture:check       => node scripts/architecture-hotspots.mjs --enforce
architecture:report      => node scripts/architecture-hotspots.mjs
lint                     => eslint .
typecheck                => npm run typecheck:node && npm run typecheck:web
test                     => vitest run
smoke                    => npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle native-host-worker workbench-health platform-contracts terminal-theme terminal-move workbench-layout terminal-split app-settings harness-profiles
smoke:macos              => npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review terminal-presentation terminal-lifecycle
smoke:macos:ci           => npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review
build                    => npm run typecheck && electron-vite build
hooks:install            => bash scripts/install-git-hooks.sh
pack:mac:arm64:signed    => npm run build && electron-builder --mac pkg --arm64 --publish never --config.forceCodeSigning=true
---
scripts/check-adrs.mjs:31:  errors.push(`docs/adr/${name}: expected ADR-NNN-short-kebab-title.md`)
scripts/check-adrs.mjs:48:    errors.push(`docs/adr/${name}: first heading must be "# ADR-${id}: …"`)
scripts/check-adrs.mjs:55:      errors.push(`docs/adr/${name}: expected exactly one ${section}`)
scripts/check-adrs.mjs:59:      errors.push(`docs/adr/${name}: required decision sections are out of order`)
scripts/check-adrs.mjs:65:    errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
scripts/check-adrs.mjs:73:      `docs/adr/${name}: progress, evidence, and rollout sections do not belong in ADRs`,
<shellId: 70 completed with exit code 0>
```

</details>


---

<sub>10m 52s</sub>

### Copilot

`verify` runs `check-seams`, `check-adrs`, `architecture:check`, lint, typecheck, and tests. I need to see how `check-adrs` handles a missing `docs/adr/` directory.

---

<sub>10m 52s</sub>

### `view`

**view the file at /private/var/tmp/ws/a8def787/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/a8def787/hvir/scripts/check-adrs.mjs (lines 1-30)

<details>
<summary>27 lines</summary>

```
import console from 'node:console'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { validateAdrLifecycles } from './adr-lifecycle.mts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const adrDirectory = join(root, 'docs', 'adr')
const designPath = join(root, 'docs', 'design.md')
const recordName = /^ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const requiredSections = [
  '## Context',
  '## Decision',
  '## Consequences',
  '## Rejected alternatives',
]
const errors = []

const directoryEntries = readdirSync(adrDirectory).filter((name) =>
  statSync(join(adrDirectory, name)).isFile(),
)
const records = directoryEntries.filter((name) => recordName.test(name)).sort()
const unexpected = directoryEntries
  .filter(
    (name) => !['README.md', 'TEMPLATE.md'].includes(name) && !recordName.test(name),
  )
  .sort()

for (const name of unexpected) {
```

</details>


---

<sub>10m 56s</sub>

### Copilot

`readdirSync` on a missing directory throws, so `check-adrs` (and therefore `verify`) cannot pass in this checkout. I'll check whether `docs/` is tracked or ignored in git before I describe it.

---

<sub>10m 57s</sub>

### `bash`

**Check docs/ tracking and ADR references**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- docs dir:" && ls -la docs 2>&1 | head -20; echo "--- tracked under docs/:" && git ls-files docs | head -20; echo "--- gitignore hits:" && git check-ignore -v docs/adr docs/design.md 2>&1 | head -5; echo "--- ADR refs in repo (tracked files):" && git grep -l "docs/adr" -- ':!node_modules' 2>/dev/null | head -20

<details>
<summary>7 lines</summary>

```
--- docs dir:
ls: docs: No such file or directory
--- tracked under docs/:
--- gitignore hits:
--- ADR refs in repo (tracked files):
scripts/check-adrs.mjs
<shellId: 71 completed with exit code 0>
```

</details>


---

<sub>11m 2s</sub>

### Copilot

`docs/` is absent from this repository entirely, and nothing ignores it. I'll confirm the actual failure mode of `check-adrs` and `check-seams`, and that `architecture:check` really requires `HVIR_REPO_TOKEN`, so the README can describe these accurately.

---

<sub>11m 3s</sub>

### `bash`

**Run seam and ADR checks to confirm behavior**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- check-adrs:" && (npm run -s check-adrs 2>&1 | tail -4; echo "exit=${PIPESTATUS[0]}") ; echo "--- check-seams:" && (npm run -s check-seams 2>&1 | tail -4; echo "exit=${PIPESTATUS[0]}"); echo "--- HVIR_REPO_TOKEN in architecture-hotspots:" && grep -n "HVIR_REPO_TOKEN" scripts/architecture-hotspots.mjs | head -5; echo "--- designPath usage in check-adrs:" && grep -n "designPath" scripts/check-adrs.mjs | head -5

<details>
<summary>16 lines</summary>

```
--- check-adrs:
  path: '/private/var/tmp/ws/a8def787/hvir/docs/adr'
}

Node.js v26.5.0
exit=1
--- check-seams:
✓ Git commands use the shared command context
✓ Git worker proxy exposes only exact exec, read, and metadata operations

seam check passed
exit=0
--- HVIR_REPO_TOKEN in architecture-hotspots:
--- designPath usage in check-adrs:
10:const designPath = join(root, 'docs', 'design.md')
78:const design = readFileSync(designPath, 'utf8')
153:      sourcePath === designPath || sourcePath.startsWith(`${adrDirectory}/`)
<shellId: 72 completed with exit code 0>
```

</details>


---

<sub>11m 6s</sub>

### Copilot

Two findings: `check-adrs` fails with ENOENT in this checkout, and `check-seams` passes. Also, `architecture-hotspots.mjs` does not mention `HVIR_REPO_TOKEN`, so one of my README claims may be wrong. I'll trace where that token is actually used.

---

<sub>11m 6s</sub>

### `bash`

**Trace HVIR_REPO_TOKEN usage across repo**

$ cd /private/var/tmp/ws/a8def787/hvir && git grep -n "HVIR_REPO_TOKEN\|HVIR_PROJECT_TOKEN" -- ':!node_modules' | head -40; echo "--- architecture-hotspots imports:"; grep -n "^import" scripts/architecture-hotspots.mjs | head -20; echo "--- enforce path:"; grep -n "enforce" scripts/architecture-hotspots.mjs | head -10

<details>
<summary>44 lines</summary>

```
.github/workflows/ci.yml:89:          HVIR_REPO_TOKEN: ${{ github.token }}
.github/workflows/project-kind.yml:57:          HVIR_REPO_TOKEN: ${{ github.token }}
.github/workflows/project-kind.yml:58:          HVIR_PROJECT_TOKEN: ${{ secrets.HVIR_PROJECT_TOKEN }}
.github/workflows/project-kind.yml:94:          HVIR_REPO_TOKEN: ${{ github.token }}
.github/workflows/project-kind.yml:95:          HVIR_PROJECT_TOKEN: ${{ secrets.HVIR_PROJECT_TOKEN }}
.github/workflows/project-pr-planning.yml:58:          HVIR_REPO_TOKEN: ${{ github.token }}
.github/workflows/project-pr-planning.yml:59:          HVIR_PROJECT_TOKEN: ${{ secrets.HVIR_PROJECT_TOKEN }}
.github/workflows/project-pr-planning.yml:96:          HVIR_REPO_TOKEN: ${{ github.token }}
.github/workflows/project-pr-planning.yml:97:          HVIR_PROJECT_TOKEN: ${{ secrets.HVIR_PROJECT_TOKEN }}
scripts/architecture-github.mts:47:      'HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available',
scripts/architecture-hotspots.mts:85:      const api = githubAdapter(process.env.HVIR_REPO_TOKEN)
scripts/architecture-wiring.mts:114:  if (object(verificationStep(job).env).HVIR_REPO_TOKEN !== '${{ github.token }}')
scripts/architecture-wiring.mts:145:  equal(newStep.env, { ...oldEnvironment, HVIR_REPO_TOKEN: '${{ github.token }}' })
scripts/project-management/audit-canonical-project.ts:11:  HVIR_PROJECT_TOKEN            Token used only for the canonical Project audit
scripts/project-management/audit-canonical-project.ts:33:      token: process.env.HVIR_PROJECT_TOKEN ?? '',
scripts/project-management/contributor-status-cli.ts:20:Credentials: HVIR_REPO_TOKEN and HVIR_PROJECT_TOKEN. Private current identity: CODEX_THREAD_ID
scripts/project-management/github-delivery-adapters.ts:27:    token: environment.HVIR_REPO_TOKEN ?? '',
scripts/project-management/github-delivery-adapters.ts:46:      token: environment.HVIR_PROJECT_TOKEN ?? '',
scripts/project-management/issue-context-cli.ts:22:  HVIR_REPO_TOKEN               Token used for repository issue, PR, and branch reads
scripts/project-management/issue-context-cli.ts:23:  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
scripts/project-management/issue-start-cli.ts:25:  HVIR_REPO_TOKEN               Token used for repository issue, PR, and branch reads
scripts/project-management/issue-start-cli.ts:26:  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
scripts/project-management/kind-cli.ts:30:  HVIR_REPO_TOKEN               Token used for repository issue reads/writes
scripts/project-management/kind-cli.ts:31:  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
scripts/project-management/migrate-project-tokens.ts:28:      token: process.env.HVIR_PROJECT_TOKEN ?? '',
scripts/project-management/migrate-project-tokens.ts:32:      token: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/migrate-project-tokens.ts:54:    token: process.env.HVIR_PROJECT_TOKEN ?? '',
scripts/project-management/migrate-project-tokens.ts:58:    token: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/planning-cli.ts:25:  HVIR_REPO_TOKEN               Token used for repository issue reads
scripts/project-management/planning-cli.ts:26:  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
scripts/project-management/pull-request-cli.ts:30:  HVIR_REPO_TOKEN               Token used for repository issue and PR reads
scripts/project-management/pull-request-cli.ts:31:  HVIR_PROJECT_TOKEN            Token used for the user-owned Project
scripts/project-management/read-contributor-status.ts:35:    token: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/read-contributor-status.ts:41:  const project = process.env.HVIR_PROJECT_TOKEN
scripts/project-management/read-contributor-status.ts:48:          token: process.env.HVIR_PROJECT_TOKEN,
scripts/project-management/read-planning-record.ts:31:      token: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/read-planning-record.ts:41:      token: process.env.HVIR_PROJECT_TOKEN ?? '',
scripts/project-management/sync-kind.ts:29:    repositoryToken: process.env.HVIR_REPO_TOKEN ?? '',
scripts/project-management/sync-kind.ts:30:    projectToken: process.env.HVIR_PROJECT_TOKEN ?? '',
scripts/project-management/sync-pull-request-planning.ts:32:    token: process.env.HVIR_REPO_TOKEN ?? '',
--- architecture-hotspots imports:
3:import { runArchitectureCommand } from './architecture-hotspots.mts'
--- enforce path:
<shellId: 73 completed with exit code 0>
```

</details>


---

<sub>11m 12s</sub>

### Copilot

The token claim holds (`architecture-github.mts` requires it for enforcement), but `package.json` points at `architecture-hotspots.mjs` while the source I found is `.mts`. I'll confirm the file exists and check which CI step gets the token.

---

<sub>11m 12s</sub>

### `bash` — Failed

**Check architecture script files and CI step**

$ cd /private/var/tmp/ws/a8def787/hvir && ls scripts/ | grep -E "architecture|adr" ; echo "--- architecture:check exit (offline check, no token):"; (npm run -s architecture:check >/tmp/arch-check.out 2>&1; echo "exit=$?"; tail -3 /tmp/arch-check.out); echo "--- architecture:report exit:"; (npm run -s architecture:report >/tmp/arch-report.out 2>&1; echo "exit=$?"; tail -3 /tmp/arch-report.out); echo "--- ci.yml verify step:"; sed -n '78,92p' .github/workflows/ci.yml

```
Permission denied and could not request permission from user
```


---

<sub>11m 14s</sub>

### Copilot

The sandbox blocked that command, most likely because I wrote to a literal `/tmp` path. I'll rerun without writing scratch files.

---

<sub>11m 14s</sub>

### `bash`

**List architecture scripts and CI verify step**

$ cd /private/var/tmp/ws/a8def787/hvir && ls scripts/ | grep -E "architecture|adr"; echo "--- ci.yml verify step:"; sed -n '78,92p' .github/workflows/ci.yml

<details>
<summary>27 lines</summary>

```
adr-lifecycle.mts
architecture-authorization.mts
architecture-github.mts
architecture-hotspots.json
architecture-hotspots.mjs
architecture-hotspots.mts
architecture-inventory.mts
architecture-module-directions.mts
architecture-module-graph.mts
architecture-module-resolution.mts
architecture-policy.mts
architecture-wiring.mts
check-adrs.mjs
--- ci.yml verify step:
      - name: Set up Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 24
          package-manager-cache: false

      - name: Install dependencies
        run: npm ci

      - name: Run policy, type, and test verification
        env:
          HVIR_REPO_TOKEN: ${{ github.token }}
        run: npm run verify

  electron-smoke:
<shellId: 75 completed with exit code 0>
```

</details>


---

<sub>11m 17s</sub>

### Copilot

The CI verify step does set `HVIR_REPO_TOKEN`, so that claim holds. The `.mjs` entry point exists. Next I'll run the two architecture commands and confirm their offline and enforcing behavior, without writing files.

---

<sub>11m 24s</sub>

### `bash`

**Run architecture report and enforcing check**

$ cd /private/var/tmp/ws/a8def787/hvir && (npm run -s architecture:report 2>&1 | tail -4; echo "report exit=${PIPESTATUS[0]}"); echo "---"; (env -u HVIR_REPO_TOKEN npm run -s architecture:check 2>&1 | tail -4; echo "check exit=${PIPESTATUS[0]}")

<details>
<summary>9 lines</summary>

```
loading: src/renderer/src/viewer/highlight-worker.ts:4 worker process-entry -> src/renderer/src/viewer/highlight.worker.ts
loading: src/renderer/src/viewer/markdown-client.ts:16 worker process-entry -> src/renderer/src/viewer/markdown.worker.ts
loading: test/local-host.test.ts:173 discovery discovery
0 dependency violation(s)
report exit=0
---
Architecture verification failed: HVIR_REPO_TOKEN is required for enforcing architecture provenance; offline architecture:report remains available
check exit=1
<shellId: 76 completed with exit code 0>
```

</details>


---

<sub>11m 34s</sub>

### Copilot

The architecture behavior matches the README: the report runs offline with 0 violations, and the enforcing check fails without the token. Next I'll confirm the remaining script descriptions and output locations against `package.json` and the build configs.

---

<sub>11m 34s</sub>

### `bash`

**Confirm script definitions and output paths**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e 'const p=require("./package.json");for (const k of ["postinstall","predev","prebuild","install:runtime","dev","build:dir","typecheck:node","typecheck:web","test:mutation","test:watch","pack:linux:x64","pack:linux:arm64","pack:mac:arm64","format","format:check","hooks:install","smoke:macos:ci"]) console.log(k.padEnd(18), "=>", p.scripts[k])' ; echo "--- output dirs:"; grep -n "output" electron-builder.yml | head -3; grep -rn "outDir" electron.vite.config.* 2>/dev/null | head -3; echo "--- stryker mutate:"; grep -rn "mutate" stryker.config.* 2>/dev/null | head -3

<details>
<summary>22 lines</summary>

```
postinstall        => npm run install:runtime
predev             => node scripts/check-terminal-runtime.mts
prebuild           => node scripts/check-terminal-runtime.mts
install:runtime    => install-electron --no && node-gyp rebuild --directory node_modules/@hvir/rename-noreplace && electron-rebuild -f -o node-pty
dev                => electron-vite dev
build:dir          => npm run build && electron-builder --dir
typecheck:node     => tsc --noEmit -p tsconfig.node.json
typecheck:web      => tsc --noEmit -p tsconfig.web.json
test:mutation      => stryker run
test:watch         => vitest
pack:linux:x64     => npm run build && electron-builder --linux deb --x64 --publish never
pack:linux:arm64   => npm run build && electron-builder --linux deb --arm64 --publish never
pack:mac:arm64     => npm run build && electron-builder --mac pkg --arm64 --publish never
format             => prettier --write .
format:check       => prettier --check .
hooks:install      => bash scripts/install-git-hooks.sh
smoke:macos:ci     => npm run build:smoke && node scripts/run-smoke-scenarios.mts pty-native viewer-position viewer-content git-workflow workspace-remote web-pane renderer-authority platform-contracts renderer-recovery sessions-projection document-review
--- output dirs:
4:  output: dist
--- stryker mutate:
stryker.config.json:4:  "mutate": ["src/main/git/git-parsers.ts"],
<shellId: 77 completed with exit code 0>
```

</details>


---

<sub>11m 46s</sub>

### Copilot

Nearly every script description checks out. Two items need correcting: the Testing note must state that `docs/` is missing, and the ADR table row should mention `docs/design.md`. I'll make those edits.

---

<sub>11m 47s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/a8def787/hvir/README.md.**

/private/var/tmp/ws/a8def787/hvir/README.md

```
File /private/var/tmp/ws/a8def787/hvir/README.md updated with changes.
```


---

<sub>11m 47s</sub>

### `edit`

**edit the file at /private/var/tmp/ws/a8def787/hvir/README.md.**

/private/var/tmp/ws/a8def787/hvir/README.md

```
File /private/var/tmp/ws/a8def787/hvir/README.md updated with changes.
```


---

<sub>11m 47s</sub>

### `bash`

**Check prettier config and dependency claims**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- prettier config:" && cat .prettierrc.json && echo && echo "--- prettierignore:" && cat .prettierignore 2>/dev/null | head -20; echo "--- ghostty-web dep:" && node -e 'const p=require("./package.json");console.log(p.dependencies["ghostty-web"]||p.devDependencies?.["ghostty-web"])'; echo "--- electron-vite config:"; ls electron.vite.config.* 2>&1; echo "--- out ignored:"; git check-ignore -v out dist 2>&1 | head -3

<details>
<summary>24 lines</summary>

```
--- prettier config:
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2
}

--- prettierignore:
node_modules
out
dist
package-lock.json
src/renderer/src/terminal/generated-terminal-theme-catalog.ts

# Markdown is hand-authored (design docs, ADRs, plan) — don't reflow prose.
*.md
--- ghostty-web dep:
https://github.com/jarmak-personal/ghostty-web/releases/download/hvir-v0.4.0-19/ghostty-web-0.4.0-hvir-g30b96a57de4c.tgz
--- electron-vite config:
electron.vite.config.ts
--- out ignored:
.gitignore:5:out	out
.gitignore:6:dist	dist
<shellId: 78 completed with exit code 0>
```

</details>


---

<sub>11m 52s</sub>

### Copilot

Config claims are confirmed: Prettier settings match, Markdown is excluded from Prettier, `ghostty-web` comes from a GitHub tarball, and `out/` and `dist/` are gitignored. The last unverified block is the shortcut table, so I'll check it against the keybindings source.

---

<sub>11m 52s</sub>

### `bash`

**Inspect default keybinding definitions**

$ cd /private/var/tmp/ws/a8def787/hvir && grep -n -E "'(Mod|Ctrl|Shift|Alt)[^']*'|mod:|key:|code:" src/shared/keybindings.ts | head -80

<details>
<summary>16 lines</summary>

```
19:  cycleViewMode: 'Mod+Shift+M',
20:  findFile: 'Mod+P',
21:  findInFile: 'Mod+F',
24:  findInTerminal: 'Mod+Shift+F',
25:  goToLine: 'Ctrl+G',
26:  focusTerminal: 'Mod+J',
27:  focusViewer: 'Mod+1',
28:  focusTree: 'Mod+0',
29:  toggleTerminalFocus: 'Mod+Shift+J',
30:  nextWorkspace: 'Mod+Alt+]',
31:  previousWorkspace: 'Mod+Alt+[',
49:  readonly key: string
58:  readonly key: string
59:  readonly mod: boolean
133:    mod: modifiers.includes('mod'),
<shellId: 79 completed with exit code 0>
```

</details>


---

<sub>11m 53s</sub>

### Copilot

All shortcut defaults match the source. I'll do a final read-through of the README for formatting and accuracy.

---

<sub>11m 54s</sub>

### `view`

**view the file at /private/var/tmp/ws/a8def787/hvir/README.md.**

/private/var/tmp/ws/a8def787/hvir/README.md

<details>
<summary>139 lines</summary>

````
# hvir

hvir is a desktop workbench for git projects. It runs AI coding-agent CLIs (Claude Code, Codex, Pi, Gemini CLI, GitHub Copilot CLI, Cursor CLI) and plain shells in terminal panes, next to the files, diffs, and git state they work on. Projects can be local folders or folders on an SSH host.

hvir is built with Electron 43, React 19, and TypeScript. It is version 0.2.3, is not published to npm (`"private": true`), and ships as native installers. The code is MIT licensed.

## Features

- **Projects and workspaces.** Register local or SSH folders. Each git worktree of a project is a workspace. Switch between workspaces with `Mod+Alt+]` and `Mod+Alt+[`.
- **Terminal panes.** PTY-backed terminals (node-pty) rendered with ghostty-web. Panes report `working`, `bell`, or `idle` attention states. `Mod+Shift+F` searches terminal output.
- **Agent harnesses.** Start Claude Code, Codex, Pi, Gemini CLI, GitHub Copilot CLI, Cursor CLI, a shell, or a custom command in a pane. Launches can be fresh, resumed, or forked. hvir does not bundle the agent CLIs. Install them yourself and make sure they are on `PATH`.
- **Viewer.** Browse files in rendered, source, or diff mode. Markdown supports task lists and Mermaid diagrams, and code is highlighted with Shiki.
- **Document review.** Collect review comments on documents in a workspace and deliver them to a harness as copy-only, insert, or send-now, depending on what the provider supports.
- **Git.** Status, history, commit details, blame, diffs, branches, worktrees, and ignored entries. Git mutations are limited to fetch, pull, branch switch, and worktree prune. The git panel does not commit, stage, or push.
- **Web pane.** View a web server running on this machine. Only loopback addresses (`localhost`, `127.0.0.1`, `::1`) are allowed, through an authenticated proxy.
- **Settings.** Appearance, terminal (including a theme gallery), git, keybindings, and harness profiles.

## Platform support

| Platform | Release package | Notes |
|---|---|---|
| macOS, Apple silicon | `hvir-<version>-darwin-arm64.pkg` | The installer refuses Intel Macs. |
| Linux, x64 | `hvir-<version>-linux-x64.deb` | Requires glibc 2.35+ and libstdc++ 12+. |
| Linux, arm64 | `hvir-<version>-linux-arm64.deb` | Same requirements as x64. |
| Windows | none | Not supported. |

Release acceptance runs on Ubuntu 24.04 and Debian 13, on x64 and arm64.

## Installing a release

Each release publishes the package for each platform, plus `install.sh` and `SHA256SUMS`. The installer selects the right package, downloads it over HTTPS, checks its SHA-256 digest, and installs it with `sudo`.

```sh
bash install.sh                      # install or update
bash install.sh --uninstall          # remove hvir; keep settings and cache
bash install.sh --uninstall --purge  # also remove the current user's settings and cache
```

Start hvir from a terminal:

```sh
hvir                    # open hvir
hvir /path/to/project   # open hvir on a local project folder
```

Installed locations:

- **macOS:** the app is at `/Applications/hvir.app`, and the `hvir` command is at `/usr/local/bin/hvir`.
- **Linux:** the app is under `/opt/hvir`, and the `hvir` command is at `/usr/bin/hvir`.

## Development

### Prerequisites

- Node.js 24 or newer, and npm.
- macOS or Linux.
- A C/C++ toolchain, `make`, and Python 3 for native modules. On macOS, install the Xcode Command Line Tools.
- GitHub access during `npm ci`. `ghostty-web` is installed from a release tarball on GitHub, and the Electron binary is downloaded during install.

### Setup

```sh
npm ci
npm run dev
```

`postinstall` runs `install:runtime`. That step fetches the Electron binary, then rebuilds `@hvir/rename-noreplace` and `node-pty` against Electron. `predev` and `prebuild` run `scripts/check-terminal-runtime.mts`. If it reports a problem, run `npm ci` again.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the app in development mode (electron-vite). |
| `npm run build` | Typecheck, then build the main, preload, and renderer bundles into `out/`. |
| `npm run build:dir` | Build, then create an unpacked app with electron-builder in `dist/`. |
| `npm run typecheck` | `tsc --noEmit` for the Node and web configs. |
| `npm run lint` | ESLint, including the architecture seam rules. |
| `npm run format` / `format:check` | Prettier, write or check. |
| `npm test` | Vitest suite (`test/`). |
| `npm run test:watch` | Vitest in watch mode. |
| `npm run test:mutation` | Stryker mutation tests, scoped to `src/main/git/git-parsers.ts`. |
| `npm run check-seams` | Architecture seam checks (`scripts/check-seams.sh`). |
| `npm run architecture:report` | Offline architecture hotspot report. |
| `npm run architecture:check` | Enforcing architecture check. Requires `HVIR_REPO_TOKEN`. |
| `npm run check-adrs` | Validates ADR files in `docs/adr/` (also reads `docs/design.md`). |
| `npm run verify` | Full gate: seams, ADRs, architecture check, lint, typecheck, and tests. |
| `npm run smoke` | Build the smoke variant and run the Electron smoke scenarios. |
| `npm run smoke:macos` | macOS subset of the smoke scenarios. |
| `npm run hooks:install` | Install the git pre-push hook. |

The `issue:*` and `project:*` scripts are maintainer tooling for GitHub issues and Projects. They need `HVIR_REPO_TOKEN`, and some also need `HVIR_PROJECT_TOKEN`.

### Git hooks

`npm run hooks:install` installs `.githooks/pre-push`. The hook runs `npm run typecheck`, then the Electron smoke suite: `npm run smoke:macos` on macOS, or `npm run smoke` on Linux (under `xvfb-run` when there is no display). Skip it with `git push --no-verify`.

### Code style

Prettier is configured in `.prettierrc.json`: no semicolons, single quotes, trailing commas, two-space indentation, and a 90-column print width.

## Testing

- `npm test` runs the Vitest suite. Many tests use real git repositories, child processes, temporary directories, and loopback sockets.
- `npm run verify` is the full gate that CI runs. Two of its steps need more than the source tree. `check-adrs` reads `docs/adr/` and `docs/design.md` and fails when they are missing. `architecture:check` requires `HVIR_REPO_TOKEN`. The repository does not currently include `docs/`, so `check-adrs` and `verify` fail until those files are restored. `npm run architecture:report` runs offline.
- Smoke tests drive the real Electron app through scripted scenarios. On Linux they need a display, so run `xvfb-run -a npm run smoke`. On macOS, run `npm run smoke:macos`. `smoke:linux:installed` and `smoke:macos:installed` check an installed package.
- Tests that bind loopback sockets, write to the OS temp directory, or inspect process groups with `ps` will fail in sandboxes that block those operations.

## Packaging

```sh
npm run pack:mac:arm64         # macOS .pkg for Apple silicon
npm run pack:mac:arm64:signed  # same, with code signing forced
npm run pack:linux:x64         # Linux .deb for x64
npm run pack:linux:arm64       # Linux .deb for arm64
npm run build:dir              # unpacked app, for local checks
```

electron-builder writes to `dist/`. The release workflow uses `render:native-installer` to render `install.sh` from `scripts/native-installer.template.sh`, and `assemble:native-release` to build the full asset set, including `SHA256SUMS`.

## Releases and CI

The **Release** workflow (`.github/workflows/release.yml`) is started by hand with a bump choice: `current`, `patch`, `minor`, or `major`. Patch, minor, and major bumps open a validated release PR. The workflow builds the packages, runs install acceptance on Ubuntu 24.04 and Debian 13, uploads the full asset set to a draft GitHub release, verifies it, and publishes it.

`.github/workflows/ci.yml` runs on pull requests to `main` and `epic/**`. It runs `npm run verify` (with `HVIR_REPO_TOKEN`), the Linux smoke suite under Xvfb, a reduced macOS smoke gate (`npm run smoke:macos:ci`), and CodeQL.

## Architecture

```
renderer (React) ── window.hvir (preload bridge) ──▶ main process
                                                      ├── windows and IPC authority
                                                      ├── PTYs, git engine, project hosts
                                                      ├── harness providers, sessions, document review
                                                      └── utility processes: git-worker, echo-worker
```

| Path | Contents |
|---|---|
| `src/main` | Main process: windows, IPC handlers, PTY supervisor, git engine, project hosts, harness providers, document review, sessions, diagnostics. |
| `src/preload` | The `window.hvir` bridge. The only module that uses `ipcRenderer`. |
| `src/renderer` | React UI: terminals, viewer, git panel, settings, dashboards. |
| `src/shared` | Serializable contracts and pure policies shared by more than one process. |
| `src/workers` | Utility-process workers `git-worker.ts` and `echo-worker.ts`, forked by main. |
| `packages/rename-noreplace` | Native addon for no-replace renames, used as the local package `@hvir/rename-noreplace`. |
| `build/` | Packaging resources, including the installed launcher `build/native/hvir-command`. |
| `scripts/` | Build, smoke, acceptance, release, and project-management scripts. |
| `test/` | Vitest suite. |

The seams are enforced by `scripts/check-seams.sh` and by ESLint rules in `eslint.config.mjs`:

- Node file-system, child-process, file-watcher, and `ssh2` imports are confined to `src/main/project-host/`. The rest of the app reaches projects through the `ProjectHost` interface, which `LocalHost` and `SshHost` implement.
- `host.spawnPty` may be called only from `src/main/pty/pty-supervisor.ts`.
- Only the preload bridge may import `ipcRenderer`.
- Git mutations are authorized in `src/main/git/mutation-authorization.ts`.

## Configuration and security

- Settings and app state live in Electron's `userData` directory: `~/Library/Application Support/hvir` on macOS and `~/.config/hvir` on Linux.
- SSH projects use `~/.ssh/config` and the default keys in `~/.ssh`. hvir prompts for passwords, key passphrases, keyboard-interactive answers, and host-key decisions. Trusted host keys are remembered, and a changed host key raises its own prompt.
- The web pane proxies only loopback addresses, and only for authenticated clients.
- HTML previews run in a sandboxed `hvir-preview` scheme with only `allow-scripts` enabled.

## Keyboard shortcuts

These are the defaults from `src/shared/keybindings.ts`. Change them in Settings → Keybindings. `Mod` means Cmd on macOS and Ctrl elsewhere.

| Action | Shortcut |
|---|---|
| Find file | `Mod+P` |
| Find in file | `Mod+F` |
| Find in terminal | `Mod+Shift+F` |
| Go to line | `Ctrl+G` |
| Focus terminal | `Mod+J` |
| Toggle terminal focus | `Mod+Shift+J` |
| Focus viewer | `Mod+1` |
| Focus file tree | `Mod+0` |
| Cycle view mode | `Mod+Shift+M` |
| Next / previous workspace | `Mod+Alt+]` / `Mod+Alt+[` |

## Known limitations

- Windows is not supported.
- Packages target Apple-silicon macOS. The installer refuses Intel Macs.
- Agent CLIs are not bundled. Install and configure them yourself.
- The git panel cannot commit, stage, or push. Use your terminal or the agent for those.

## License

MIT. See [LICENSE](LICENSE). Notices for bundled third-party code, including ghostty-web and the rename-noreplace binding derived from Skill Steward, are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>12m 6s</sub>

### Copilot

The README reads well. Before finishing, I'll check the remaining specific claims I haven't yet verified in this pass: versions, installer behavior, workflow triggers, seam rules, and the `userData` path.

---

<sub>12m 10s</sub>

### `bash`

**Verify versions and installer behavior claims**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e 'const p=require("./package.json");console.log("version",p.version,"| electron",p.devDependencies?.electron||p.dependencies?.electron,"| react",p.dependencies?.react,"| mermaid",!!(p.dependencies?.mermaid||p.devDependencies?.mermaid),"| shiki",!!(p.dependencies?.shiki||p.devDependencies?.shiki),"| issue:* scripts",Object.keys(p.scripts).filter(k=>k.startsWith("issue:")).length,"| project:* scripts",Object.keys(p.scripts).filter(k=>k.startsWith("project:")).length,"| smoke installed:",!!p.scripts["smoke:linux:installed"],!!p.scripts["smoke:macos:installed"])'; echo "--- installer/launcher:"; git grep -n -E "x86_64|Intel|sha256|sudo|--purge|--uninstall|project-root|/usr/local/bin|/usr/bin/hvir|/opt/hvir|/Applications/hvir" -- scripts build electron-builder.yml | head -25; echo "--- linux deps:"; git grep -n -E "libstdc|libc6" -- electron-builder.yml | head -4

<details>
<summary>31 lines</summary>

```
version 0.2.3 | electron ^43.4.1 | react undefined | mermaid true | shiki true | issue:* scripts 2 | project:* scripts 6 | smoke installed: true true
--- installer/launcher:
build/native/hvir-command:8:  application='/opt/hvir/hvir'
build/native/hvir-command:11:  application='/Applications/hvir.app/Contents/MacOS/hvir'
build/native/hvir-command:36:    set -- "--project-root=$project_root" "$@"
build/pkg-scripts/postinstall:25:application="$volume_root/Applications/hvir.app"
build/pkg-scripts/postinstall:30:command_dir="$volume_root/usr/local/bin"
build/pkg-scripts/postinstall:126:  echo 'application=/Applications/hvir.app'
build/pkg-scripts/postinstall:127:  echo 'command=/usr/local/bin/hvir'
build/pkg-scripts/preinstall:17:command="$volume_root/usr/local/bin/hvir"
scripts/agent-work-checkpoint-store.mts:46:  const key = createHash('sha256')
scripts/architecture-hotspots.json:221:          "sha256": "a7721aa27836926b452ab3756322614b0771518ed2e3171d8e43d0ff387c109e"
scripts/architecture-hotspots.json:225:          "sha256": "94919f83b1b4876ff99f2d6957f27ddb6701a3ecfc399adb7d0cbe464d6483fe"
scripts/architecture-inventory.mts:295:      if (!bytes || createHash('sha256').update(bytes).digest('hex') !== input.sha256)
scripts/architecture-policy.mts:74:  inputs: Array<{ path: string; sha256: string }>
scripts/architecture-policy.mts:296:      closed(input, ['path', 'sha256'], 'generated input')
scripts/architecture-policy.mts:297:      text(input.sha256, 'generated input identity')
scripts/architecture-policy.mts:298:      if (!/^[a-f0-9]{64}$/.test(input.sha256))
scripts/architecture-policy.mts:300:      return { path: repositoryPath(input.path), sha256: input.sha256 }
scripts/assemble-native-release.d.mts:13:  readonly sha256: string
scripts/assemble-native-release.d.mts:23:    readonly sha256: string
scripts/assemble-native-release.d.mts:27:    readonly sha256: string
scripts/assemble-native-release.mjs:51:      sha256: await sha256File(resolve(assetDirectory, artifact.name)),
scripts/assemble-native-release.mjs:74:      renderedArtifact.sha256 !== artifact.sha256
scripts/assemble-native-release.mjs:85:    sha256: await sha256File(installerPath),
scripts/assemble-native-release.mjs:89:    sha256: await sha256File(noticesPath),
scripts/assemble-native-release.mjs:112:      async (name) => `${await sha256File(resolve(assetDirectory, name))}  ${name}`,
--- linux deps:
electron-builder.yml:58:    - libc6 (>= 2.35)
electron-builder.yml:59:    - libstdc++6 (>= 12)
<shellId: 80 completed with exit code 0>
```

</details>


---

<sub>12m 14s</sub>

### Copilot

Versions, Mermaid, Shiki, the Linux dependency floors, and the launcher paths check out. React is not in `dependencies`, so I'll look in `devDependencies`, and I need a narrower look at the installer template since the last grep was flooded.

---

<sub>12m 14s</sub>

### `bash`

**Verify React version and installer, CI triggers**

$ cd /private/var/tmp/ws/a8def787/hvir && node -e 'const p=require("./package.json");console.log("react dev:",p.devDependencies?.react)'; echo "--- install template:"; git grep -n -E "sudo|--purge|--uninstall|x86_64|arm64|Intel|https://|sha256|hvir-command" -- scripts/native-installer.template.sh | head -20; echo "--- userData override:"; git grep -n "userData" -- src/main | head -5; echo "--- ci/release triggers:"; git grep -n -E "branches:|epic/|codeql|CodeQL|workflow_dispatch|draft|bump|patch|minor|major" -- .github/workflows/ci.yml .github/workflows/release.yml | head -20

<details>
<summary>50 lines</summary>

```
react dev: ^19.2.8
--- install template:
scripts/native-installer.template.sh:23:artifact_sha256=''
scripts/native-installer.template.sh:60:  install.sh --uninstall
scripts/native-installer.template.sh:61:  install.sh --uninstall --purge
scripts/native-installer.template.sh:64:--purge additionally removes the current user's documented hvir settings and cache.
scripts/native-installer.template.sh:73:    --uninstall) operation='uninstall' ;;
scripts/native-installer.template.sh:85:    if [[ "$1" != '--uninstall' || "$2" != '--purge' ]]; then
scripts/native-installer.template.sh:104:  Linux:x86_64)
scripts/native-installer.template.sh:108:    artifact_sha256=$HVIR_LINUX_X64_SHA256
scripts/native-installer.template.sh:111:  Linux:aarch64 | Linux:arm64)
scripts/native-installer.template.sh:115:    artifact_sha256=$HVIR_LINUX_ARM64_SHA256
scripts/native-installer.template.sh:118:  Darwin:arm64)
scripts/native-installer.template.sh:122:    artifact_sha256=$HVIR_MACOS_ARM64_SHA256
scripts/native-installer.template.sh:127:      "hvir does not support $kernel $machine. Supported targets are compatible Linux x64/arm64 hosts and Apple-silicon macOS." \
scripts/native-installer.template.sh:142:  require_absolute_tool /usr/bin/sudo
scripts/native-installer.template.sh:152:    require_absolute_tool /usr/bin/sha256sum
scripts/native-installer.template.sh:251:    digest_output=$(/usr/bin/sha256sum "$artifact")
scripts/native-installer.template.sh:256:  if [[ "$actual_digest" != "$artifact_sha256" ]]; then
scripts/native-installer.template.sh:258:    echo "Expected: $artifact_sha256" >&2
scripts/native-installer.template.sh:514:      /usr/bin/sudo /usr/sbin/installer -pkg "$artifact" -target /
scripts/native-installer.template.sh:521:      /usr/bin/sudo /usr/bin/apt install --no-install-recommends -y "$artifact"
--- userData override:
src/main/application-runtime-policy.ts:9:  readonly userDataRoot: string
src/main/application-runtime-policy.ts:13:  getPath(name: 'appData' | 'userData'): string
src/main/application-runtime-policy.ts:14:  setPath(name: 'userData', path: string): void
src/main/application-runtime-policy.ts:24:    return { buildChannel, userDataRoot: paths.getPath('userData') }
src/main/application-runtime-policy.ts:26:  const userDataRoot = join(paths.getPath('appData'), SSH_ACCEPTANCE_USER_DATA_DIRECTORY)
--- ci/release triggers:
.github/workflows/ci.yml:5:    branches:
.github/workflows/ci.yml:7:      - 'epic/**'
.github/workflows/ci.yml:170:  codeql:
.github/workflows/ci.yml:171:    name: CodeQL analysis
.github/workflows/ci.yml:186:      - name: Initialize CodeQL
.github/workflows/ci.yml:187:        uses: github/codeql-action/init@v4.37.9
.github/workflows/ci.yml:192:        uses: github/codeql-action/analyze@v4.37.9
.github/workflows/ci.yml:201:      - codeql
.github/workflows/release.yml:4:  workflow_dispatch:
.github/workflows/release.yml:6:      bump:
.github/workflows/release.yml:7:        description: current releases package.json; patch/minor/major open a validated release PR.
.github/workflows/release.yml:12:          - patch
.github/workflows/release.yml:13:          - minor
.github/workflows/release.yml:14:          - major
.github/workflows/release.yml:29:    name: Prepare ${{ inputs.bump }} release
.github/workflows/release.yml:91:          BUMP: ${{ inputs.bump }}
.github/workflows/release.yml:121:              is_draft=$(gh release view "$tag" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)
.github/workflows/release.yml:122:              if [ "$is_draft" != true ]; then
.github/workflows/release.yml:127:            echo "Repairing or completing draft $tag at $remote_tag_sha"
.github/workflows/release.yml:129:            echo "::error::$tag already exists; rerun with bump=current"
<shellId: 81 completed with exit code 0>
```

</details>


---

<sub>12m 23s</sub>

### Copilot

Most claims check out: React 19, `sudo` and SHA-256 handling in the installer, `--purge` behavior, and the release dispatch inputs. Remaining items: the HTTPS download, CI triggers, release publishing, and the seam and UI claims. I'll check those together.

---

<sub>12m 23s</sub>

### `bash`

**Verify download, triggers, features, and seams**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- download https:"; git grep -n -E "curl|--proto|https" -- scripts/native-installer.template.sh | head -6; echo "--- ci triggers:"; sed -n '1,9p' .github/workflows/ci.yml; echo "--- release publish:"; git grep -n -E "draft=false|--draft|release edit|publish" -- .github/workflows/release.yml | head -6; echo "--- productName:"; git grep -n "productName" -- electron-builder.yml package.json | head -2; echo "--- features:"; git grep -n -E "'bell'|send-now|allow-scripts|hvir-preview|forked|fork\(" -- src | head -12; echo "--- seams:"; git grep -n -E "ipcRenderer|spawnPty|ssh2|child_process" -- eslint.config.mjs scripts/check-seams.sh | head -8; echo "--- src/main dirs:"; ls src/main | tr '\n' ' '; echo; ls -d src/renderer/src/* 2>/dev/null | tr '\n' ' '

<details>
<summary>47 lines</summary>

```
--- download https:
scripts/native-installer.template.sh:144:    require_absolute_tool /usr/bin/curl
scripts/native-installer.template.sh:235:    /usr/bin/curl \
scripts/native-installer.template.sh:240:      --proto '=https' \
--- ci triggers:
name: CI

on:
  pull_request:
    branches:
      - main
      - 'epic/**'

permissions:
--- release publish:
.github/workflows/release.yml:123:                echo "::error::$tag is already published; immutable releases require a new version"
.github/workflows/release.yml:387:  publish-native-release:
.github/workflows/release.yml:388:    name: Assemble, verify, and publish immutable release
.github/workflows/release.yml:537:              --draft \
.github/workflows/release.yml:576:          gh release edit "$TAG" \
.github/workflows/release.yml:578:            --draft=false \
--- productName:
electron-builder.yml:2:productName: hvir
--- features:
src/main/document-review/document-review-delivery-coordinator.ts:186:      prepared.destination.capability !== 'send-now' ||
src/main/document-review/document-review-delivery-coordinator.ts:320:      capability: sendNow ? 'send-now' : insert ? 'insert' : 'copy-only',
src/main/harness/harness-launch.ts:167:  return provider.fork(context)
src/main/harness/providers/claude-code.ts:83:  fork(ctx): HarnessLaunchSpec {
src/main/harness/providers/codex.ts:115:  fork(ctx): HarnessLaunchSpec {
src/main/ipc/authority-channel-policy.ts:35:  'document-review:send-now-delivery',
src/main/ipc/features/document-review.ts:106:  ipc.handle('document-review:send-now-delivery', (request, context) =>
src/main/ipc/features/terminal.ts:470:function isTerminalAttention(value: unknown): value is 'working' | 'bell' | 'idle' {
src/main/ipc/features/terminal.ts:471:  return value === 'working' || value === 'bell' || value === 'idle'
src/main/pty/pty-supervisor.ts:72:    const forked = requestedLaunchMode === 'fork'
src/main/pty/pty-supervisor.ts:74:      forked &&
src/main/pty/pty-supervisor.ts:81:    const launchMode: HarnessLaunchMode = forked ? 'fork' : resumed ? 'resume' : 'fresh'
--- seams:
eslint.config.mjs:12:// `LocalHost` module; `ipcRenderer` only inside the preload bridge; and
eslint.config.mjs:13:// `.spawnPty()` may only be *called* by the PTY supervisor.
eslint.config.mjs:21:  'child_process',
eslint.config.mjs:22:  'node:child_process',
eslint.config.mjs:28:    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
eslint.config.mjs:37:/** `ipcRenderer` — confined to the preload bridge. */
eslint.config.mjs:40:  importNames: ['ipcRenderer'],
eslint.config.mjs:42:    'ipcRenderer may only be used in src/preload. The renderer talks to main ' +
--- src/main dirs:
application-runtime-policy.ts application-runtime.ts attention-badge.ts build-environment.d.ts diagnostics document-review filename-search git harness health html-preview-protocol.ts index.ts ipc ipc.ts navigation-policy.ts project-coordinator.ts project-file-operations project-folder-picker project-host project-registry.ts project-watch.ts pty renderer-event-delivery.ts renderer-event-publisher.ts renderer-presentation-resources.ts renderer-resource-scopes.ts sessions smoke terminal viewer web-pane window workbench-runtime.ts worker-host.ts workspace-activity.ts workspace-cleanup.ts workspace-coordinator.ts workspace-removal-coordinator.ts 
src/renderer/src/App.tsx src/renderer/src/context-menu src/renderer/src/dashboards src/renderer/src/development src/renderer/src/diagnostics src/renderer/src/document-review src/renderer/src/ErrorBoundary.tsx src/renderer/src/git src/renderer/src/harness src/renderer/src/health src/renderer/src/hvir.d.ts src/renderer/src/layout src/renderer/src/main.tsx src/renderer/src/path-copy src/renderer/src/scrollbars src/renderer/src/sessions src/renderer/src/settings src/renderer/src/styles src/renderer/src/styles.css src/renderer/src/terminal src/renderer/src/theme-model.ts src/renderer/src/theme.ts src/renderer/src/themes.css src/renderer/src/tree src/renderer/src/viewer src/renderer/src/workbench src/renderer/src/workspaces
<shellId: 82 completed with exit code 0>
```

</details>


---

<sub>12m 32s</sub>

### Copilot

Most UI and workflow claims hold. Three need a closer look because my output was cut off by `head`: the HTML sandbox flags, the `ssh2` seam claim, and the git mutation kinds. I'll check those directly.

---

<sub>12m 33s</sub>

### `bash`

**Targeted checks for sandbox, seams, mutations**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- sandbox:"; git grep -n -E "allow-scripts|hvir-preview" -- src | head -5; echo "--- seam ssh2/chokidar:"; git grep -n -E "ssh2|chokidar" -- eslint.config.mjs scripts/check-seams.sh | head -6; echo "--- git mutation kinds:"; git grep -n -E "'(fetch|pull|branch-switch|worktree-prune|commit|push|stage)'" -- src/main/git | head -8; echo "--- web pane loopback/auth:"; git grep -n -i -E "loopback|authenticat" -- src/main/web-pane | head -5; echo "--- ProjectHost impls:"; git grep -n -E "implements ProjectHost" -- src | head -4; echo "--- workers forked:"; git grep -n -E "git-worker|echo-worker" -- src/main | head -5; echo "--- host key changed:"; git grep -n -i -E "host.?key.*change|changed.*host.?key|host-key-changed|hostKeyChanged" -- src/main | head -4

<details>
<summary>41 lines</summary>

```
--- sandbox:
src/main/smoke/external-documents.ts:88:        if (preview.getAttribute('sandbox') !== 'allow-scripts') throw new Error('External HTML sandbox changed');
src/main/smoke/viewer-content.ts:471:    if (sandboxPolicy !== 'allow-scripts') {
src/renderer/index.html:8:      content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-src hvir-preview:; connect-src 'self' data: ws://localhost:* http://localhost:*"
src/shared/html-preview.ts:4:export const HTML_PREVIEW_SCHEME = 'hvir-preview'
src/shared/html-preview.ts:5:export const HTML_SANDBOX = 'allow-scripts'
--- seam ssh2/chokidar:
eslint.config.mjs:23:  'chokidar',
eslint.config.mjs:28:    'Host primitives (fs / child_process / chokidar / node-pty) belong only in ' +
scripts/check-seams.sh:29:# 2. Host primitives (fs / child_process / chokidar / node-pty) only in LocalHost.
scripts/check-seams.sh:30:hits=$(grep -rnE "from ['\"](node:)?(fs|fs/promises|child_process)['\"]|from ['\"](chokidar|node-pty)['\"]|import\(['\"]((node:)?(fs|fs/promises|child_process)|chokidar|node-pty)['\"]\)" \
scripts/check-seams.sh:65:# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
scripts/check-seams.sh:67:hits=$(grep -rnE "from ['\"]ssh2['\"]|import\(['\"]ssh2['\"]\)" \
--- git mutation kinds:
src/main/git/git-branches.ts:16:export const GIT_FETCH_ARGS = ['fetch', '--prune', '--no-recurse-submodules'] as const
src/main/git/git-branches.ts:18:  'pull',
src/main/git/git-history.ts:69:      if (objectType === 'commit') tips.push(objectName)
src/main/git/git-history.ts:70:      else if (peeledType === 'commit') tips.push(peeledName)
src/main/git/mutation-authorization.ts:11:export type GitMutationKind = 'worktree-prune' | 'branch-switch' | 'fetch' | 'pull'
src/main/git/mutation-authorization.ts:15:      readonly kind: 'branch-switch'
src/main/git/mutation-authorization.ts:21:      readonly kind: Exclude<GitMutationKind, 'branch-switch'>
src/main/git/mutation-authorization.ts:222:  if (sameArgs(command, PRUNE_ARGS)) return { kind: 'worktree-prune', root }
--- web pane loopback/auth:
src/main/web-pane/loopback-http-proxy.ts:16:  loopbackEndpointEquals,
src/main/web-pane/loopback-http-proxy.ts:17:  parseLoopbackHttpTarget,
src/main/web-pane/loopback-http-proxy.ts:18:  type LoopbackEndpoint,
src/main/web-pane/loopback-http-proxy.ts:52:export interface LoopbackHttpProxyOptions {
src/main/web-pane/loopback-http-proxy.ts:54:  readonly endpoint: LoopbackEndpoint
--- ProjectHost impls:
src/main/project-host/local-host.ts:89:export class LocalHost implements ProjectHost {
src/main/project-host/ssh-host.ts:66:export class SshHost implements ProjectHost {
--- workers forked:
src/main/index.ts:212:      createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
src/main/index.ts:222:        workerPath('git-worker.js'),
src/main/smoke/index.ts:171:          workerPath('echo-worker.js'),
src/main/smoke/index.ts:181:          workerPath('git-worker.js'),
--- host key changed:
src/main/project-host/ssh-auth.ts:4:    'password' | 'passphrase' | 'keyboard-interactive' | 'host-key' | 'host-key-changed'
src/main/project-host/ssh-host.ts:763:          kind: trustedFingerprint ? 'host-key-changed' : 'host-key',
src/main/project-host/ssh-host.ts:765:            ? `Host key changed for ${config.alias}`
<shellId: 83 completed with exit code 0>
```

</details>


---

<sub>12m 38s</sub>

### Copilot

Sandbox flags, mutation kinds, the `ProjectHost` implementations, and the host-key prompt all check out. Two things remain: the exact `ssh2` confinement rule and the web-pane authentication claim.

---

<sub>12m 38s</sub>

### `bash`

**Check ssh2 seam rule and web pane auth**

$ cd /private/var/tmp/ws/a8def787/hvir && echo "--- ssh2 rule:"; sed -n '65,72p' scripts/check-seams.sh; echo "--- web pane auth:"; git grep -n -i -E "auth|token|secret" -- src/main/web-pane | grep -v -i "authority" | head -6; echo "--- loopback names:"; git grep -n -E "'localhost'|127\.0\.0\.1|::1" -- src/main/web-pane | head -5

<details>
<summary>20 lines</summary>

```
--- ssh2 rule:
# 8. ssh2 is an implementation detail of the remote ProjectHost adapter. Main
# consumers continue to depend on ProjectHost and host-qualified paths only.
hits=$(grep -rnE "from ['\"]ssh2['\"]|import\(['\"]ssh2['\"]\)" \
  "$SRC" --include='*.ts' --include='*.tsx' --include='*.mts' \
  | grep -vE '^src/main/project-host/ssh-(client-lifecycle|host|host-options|file-access|exclusive-create|project-file-transfer|abort|transport-pool|watch-service)\.ts' || true)
report "ssh2 details stay inside the SshHost adapter" "$hits"

# 9. Host-local collaborators share SshHost's authentication lifecycle. They
--- web pane auth:
src/main/web-pane/loopback-http-proxy.ts:59: * An authenticated, pane-scoped HTTP proxy. It preserves the browser-visible
src/main/web-pane/loopback-http-proxy.ts:60: * localhost origin while routing only the authorized loopback endpoint through
src/main/web-pane/loopback-http-proxy.ts:149:    if (!this.authorized(request.headers)) {
src/main/web-pane/loopback-http-proxy.ts:150:      this.requireAuthentication(response)
src/main/web-pane/loopback-http-proxy.ts:214:    if (!this.authorized(request.headers)) {
src/main/web-pane/loopback-http-proxy.ts:216:        `HTTP/1.1 407 Proxy Authentication Required\r\nProxy-Authenticate: Basic realm="${this.credentials.realm}"\r\nConnection: close\r\n\r\n`,
--- loopback names:
src/main/web-pane/loopback-http-proxy.ts:37:  ['::1', 128, 'ipv6'],
src/main/web-pane/loopback-http-proxy.ts:113:      this.server.listen(0, '127.0.0.1', () => {
src/main/web-pane/web-pane-route-registry.ts:236:      challenge.host !== '127.0.0.1' ||
<shellId: 84 completed with exit code 0>
```

</details>


---

<sub>12m 44s</sub>

### Copilot

The `ssh2` rule and the proxy's 407 authentication check out. One last check: whether `localhost` is actually accepted as a loopback name, and that my verification runs left no stray changes in the repo.

---

<sub>12m 44s</sub>

### `bash`

**Check localhost loopback name and repo state**

$ cd /private/var/tmp/ws/a8def787/hvir && git grep -n "localhost" -- src/main/web-pane | head -4; echo "--- git status:"; git status --short

```
src/main/web-pane/loopback-http-proxy.ts:60: * localhost origin while routing only the authorized loopback endpoint through
--- git status:
?? README.md
<shellId: 85 completed with exit code 0>
```


---

<sub>12m 46s</sub>

### Copilot

`localhost` appears only in a comment in the proxy file, so I need to see where the loopback host list is defined before keeping that claim.

---

<sub>12m 47s</sub>

### `bash`

**Locate loopback host definitions**

$ cd /private/var/tmp/ws/a8def787/hvir && git grep -n -E "localhost" -- src/shared src/main/web-pane src/main/project-host 2>/dev/null | grep -v "^\S*:\s*\*" | head -8; echo "---"; git grep -n -A4 "export function parseLoopbackHttpTarget\|function loopbackEndpoints\|LOOPBACK" -- src/shared src/main/web-pane | head -20

<details>
<summary>26 lines</summary>

```
src/main/project-host/project-host.ts:244:    !['localhost', '127.0.0.1', '::1'].includes(endpoint.hostname)
src/shared/file-uri.ts:5:    if (uri.protocol !== 'file:' || (uri.hostname && uri.hostname !== 'localhost'))
src/shared/web-pane.ts:1:export type LoopbackHostname = 'localhost' | '127.0.0.1' | '::1'
src/shared/web-pane.ts:9:  /** Normalized browser-visible URL. Unspecified bind addresses become localhost. */
src/shared/web-pane.ts:25:  ['localhost', 'localhost'],
src/shared/web-pane.ts:49:  const hostname = unspecified ? 'localhost' : LOOPBACK_HOSTS.get(rawHostname)
src/shared/web-pane.ts:54:  if (unspecified) candidate.hostname = 'localhost'
---
src/shared/web-pane.ts:24:const LOOPBACK_HOSTS = new Map<string, LoopbackHostname>([
src/shared/web-pane.ts-25-  ['localhost', 'localhost'],
src/shared/web-pane.ts-26-  ['127.0.0.1', '127.0.0.1'],
src/shared/web-pane.ts-27-  ['[::1]', '::1'],
src/shared/web-pane.ts-28-  ['::1', '::1'],
--
src/shared/web-pane.ts:33:export function parseLoopbackHttpTarget(rawUrl: string): LoopbackHttpTarget | undefined {
src/shared/web-pane.ts-34-  let candidate: URL
src/shared/web-pane.ts-35-  try {
src/shared/web-pane.ts-36-    candidate = new URL(rawUrl)
src/shared/web-pane.ts-37-  } catch {
--
src/shared/web-pane.ts:49:  const hostname = unspecified ? 'localhost' : LOOPBACK_HOSTS.get(rawHostname)
src/shared/web-pane.ts-50-  if (!hostname) return undefined
src/shared/web-pane.ts-51-
src/shared/web-pane.ts-52-  const port = candidate.port ? Number(candidate.port) : 80
src/shared/web-pane.ts-53-  if (!Number.isInteger(port) || port < 1 || port > 65_535) return undefined
<shellId: 86 completed with exit code 0>
```

</details>


---

<sub>12m 51s</sub>

### Copilot

I created `README.md` at the repo root. It is untracked and not committed.

It covers what hvir is, platform support, installing releases, development setup, every npm script, testing, packaging, the release and CI workflows, the architecture and seam rules, security notes, keyboard shortcuts, and limitations. I checked the script names, paths, keybindings, installer behavior, and workflow triggers against the source.

One thing I did not fix: the repo has no `docs/` directory, so `check-adrs` fails with ENOENT and `npm run verify` cannot pass. The README documents this. `check-seams` and `architecture:report` both pass.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
