# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `2e9c836e-f58a-4f87-94cd-8fa0544784c4`  
> - **Started:** 11/20/2026, 11:58:40 AM  
> - **Duration:** 24s  
> - **Exported:** 11/20/2026, 11:59:05 AM  

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

I’ll inspect the project’s structure and entry points, then write a README that reflects how it actually works and how to use it.

---

<sub>4s</sub>

### `bash`

**Inspect project files and working tree**

$ ls -la && git status --short && find . -maxdepth 2 -type f | sort | head -100

<details>
<summary>130 lines</summary>

```
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Nov 20 11:58 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 11:58 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 11:58 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 11:58 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Nov 20 11:58 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Nov 20 11:58 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Nov 20 11:58 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Nov 20 11:58 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Nov 20 11:58 build
-rw-r--r--@   1 air-jarmak  wheel     549 Nov 20 11:58 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Nov 20 11:58 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Nov 20 11:58 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Nov 20 11:58 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Nov 20 11:58 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Nov 20 11:58 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Nov 20 11:58 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Nov 20 11:58 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Nov 20 11:58 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Nov 20 11:58 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Nov 20 11:58 src
-rw-r--r--@   1 air-jarmak  wheel     537 Nov 20 11:58 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Nov 20 11:58 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Nov 20 11:58 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Nov 20 11:58 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Nov 20 11:58 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Nov 20 11:58 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Nov 20 11:58 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Nov 20 11:58 vitest.config.ts
./.git/COMMIT_EDITMSG
./.git/config
./.git/description
./.git/HEAD
./.git/index
./.githooks/pre-push
./.github/dependabot.yml
./.gitignore
./.prettierignore
./.prettierrc.json
./build/entitlements.mac.inherit.plist
./build/entitlements.mac.plist
./build/icon-linux.svg
./build/icon-macos.icns
./build/icon-macos.png
./build/icon-macos.svg
./electron-builder.ssh-acceptance.yml
./electron-builder.yml
./electron.vite.config.ts
./eslint.config.mjs
./LICENSE
./node_modules/.package-lock.json
./package-lock.json
./package.json
./scripts/adr-lifecycle.mts
./scripts/agent-work-checkpoint-store.mts
./scripts/architecture-authorization.mts
./scripts/architecture-github.mts
./scripts/architecture-hotspots.json
./scripts/architecture-hotspots.mjs
./scripts/architecture-hotspots.mts
./scripts/architecture-inventory.mts
./scripts/architecture-module-directions.mts
./scripts/architecture-module-graph.mts
./scripts/architecture-module-resolution.mts
./scripts/architecture-policy.mts
./scripts/architecture-wiring.mts
./scripts/assemble-native-release.d.mts
./scripts/assemble-native-release.mjs
./scripts/capture-contributor-usage.mts
./scripts/check-adrs.mjs
./scripts/check-seams.sh
./scripts/check-terminal-runtime.mts
./scripts/ci-attempt-evidence.mts
./scripts/create-smoke-repository.sh
./scripts/generate-terminal-theme-catalog.mts
./scripts/ghostty-terminal-capability-profile.mts
./scripts/inspect-packaged-runtime.mts
./scripts/install-git-hooks.sh
./scripts/installed-harness-dialog-probe.mts
./scripts/installed-startup-probe.mts
./scripts/native-installer.template.sh
./scripts/phase8-gauntlet.sh
./scripts/prepare-release-linux-package.mts
./scripts/prepare-release-pr.mjs
./scripts/real-host-ssh-contract.mts
./scripts/real-host-ssh.vite.config.mts
./scripts/record-macos-ssh-identity.sh
./scripts/release-changelog.d.mts
./scripts/release-changelog.mjs
./scripts/release-github-evidence.mts
./scripts/render-native-installer.d.mts
./scripts/render-native-installer.mjs
./scripts/require-release-ci-evidence.mts
./scripts/run-linux-package-smoke.sh
./scripts/run-macos-package-smoke.sh
./scripts/run-macos-ssh-acceptance.sh
./scripts/run-real-host-ssh-acceptance.mts
./scripts/run-smoke-interruption.mts
./scripts/run-smoke-scenarios.mts
./scripts/run-smoke.sh
./scripts/smoke-failure-artifact.mts
./scripts/smoke-import-boundary.mjs
./scripts/validate-release-pr.mts
./stryker.config.json
./test/adr-lifecycle.test.ts
./test/application-runtime.test.ts
./test/architecture-command.test.ts
./test/architecture-github.test.ts
./test/architecture-history.test.ts
./test/architecture-module-directions.test.ts
./test/architecture-module-graph.test.ts
./test/architecture-policy.test.ts
./test/architecture-wiring.test.ts
./test/attention-badge.test.ts
./test/canonical-project-config.test.ts
./test/capacity-live-presentation.test.ts
./test/capacity-output-fixtures.test.ts
./test/capacity-performance.test.ts
./test/capacity-terminal-activity.test.ts
./test/ci-attempt-evidence.test.ts
./test/ci-workflow.test.ts
./test/claude-context-telemetry.test.ts
./test/claude-keybindings.test.ts
./test/claude-session-artifact.test.ts
./test/claude-session-recovery.test.ts
./test/clipboard-file-list.test.ts
./test/clipboard-ipc.test.ts
./test/codemirror-find-target.test.tsx
./test/codex-context-telemetry.test.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>4s</sub>

### `glob`

****/{package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,README*,requirements*.txt,setup.py}**

"**/{package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,README*,requirements*.txt,setup.py}"

```
./packages/rename-noreplace/package.json
./package.json
./scripts/project-management/package.json
```


---

<sub>4s</sub>

### `glob`

****/***

"**/*"

<details>
<summary>332 matches</summary>

```
[glob: 37426 path(s) under .; concrete paths]
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
node_modules/app-builder-lib/node_modules/plist/examples/browser/index.html
[omitted 37097 path(s); see original output for full results]
[extensions: .js=13403, .ts=9029, .map=5018, .mjs=2544, .mts=1973, .json=1248, .md=1181, [no extension]=981]
```

</details>


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/c1871d89/hvir/package.json.**

/private/var/tmp/ws/c1871d89/hvir/package.json

<details>
<summary>127 lines</summary>

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
```

</details>


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/c1871d89/hvir/electron-builder.yml.**

/private/var/tmp/ws/c1871d89/hvir/electron-builder.yml

<details>
<summary>71 lines</summary>

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
```

</details>


---

<sub>8s</sub>

### `bash`

**Inspect architecture, license, and CI setup**

$ find src -maxdepth 3 -type d | sort | head -100; ls .github/workflows; head -50 LICENSE; rg -n 'node-version|npm ci|npm run' .github/workflows | head -80

<details>
<summary>76 lines</summary>

```
src
src/main
src/main/diagnostics
src/main/document-review
src/main/filename-search
src/main/git
src/main/harness
src/main/harness/providers
src/main/health
src/main/ipc
src/main/ipc/features
src/main/project-file-operations
src/main/project-folder-picker
src/main/project-host
src/main/pty
src/main/sessions
src/main/smoke
src/main/terminal
src/main/viewer
src/main/web-pane
src/main/window
src/preload
src/renderer
src/renderer/src
src/renderer/src/context-menu
src/renderer/src/dashboards
src/renderer/src/development
src/renderer/src/diagnostics
src/renderer/src/document-review
src/renderer/src/git
src/renderer/src/harness
src/renderer/src/health
src/renderer/src/layout
src/renderer/src/path-copy
src/renderer/src/scrollbars
src/renderer/src/sessions
src/renderer/src/settings
src/renderer/src/styles
src/renderer/src/terminal
src/renderer/src/tree
src/renderer/src/viewer
src/renderer/src/workbench
src/renderer/src/workspaces
src/shared
src/shared/ipc
src/workers
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
MIT License

Copyright (c) 2026 hvir contributors

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
/bin/bash: rg: command not found
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### `rg`

**Hvir|hvir|Open Project|Clone|worktree**

"Hvir|hvir|Open Project|Clone|worktree" in *.tsx (src/renderer)

<details>
<summary>113 matches</summary>

```
[grep content: 94 matches across 33 file(s) under src/renderer/src]

ErrorBoundary.tsx (2 match(es)):
           window.hvir.diagnostics.recordRenderContainment(this.state.occurrenceId)
           <h1>hvir hit a rendering problem</h1>

git/GitBranchControls.tsx (3 match(es)):
               branch.worktree &&
               (branch.worktree.hostId !== root.hostId || branch.worktree.path !== root.path)
                 {occupiedElsewhere ? ` — in ${branch.worktree?.path}` : ''}

git/GitGraphView.tsx (3 match(es)):
             const page = await window.hvir.invoke('git:history', {
       void window.hvir
                 path={joinHostPath(root, '.hvir-commit-message.md')}

diagnostics/DiagnosticReportDialog.tsx (6 match(es)):
       void window.hvir
         void window.hvir
         void window.hvir
       void window.hvir
       void window.hvir
       void window.hvir
dashboards/WebPane.tsx:               ? `This link leaves hvir for ${hostnameOf(view.blockedNavigation.url)}.`
sessions/SessionsCollectionToolbar.tsx:             <option value="workspace">Project → worktree</option>

sessions/SessionsOverview.tsx (7 match(es)):
       createSessionsMainObservationPort(window.hvir),
           const result = await window.hvir.invoke('sessions:open', {
               detail="Focus hvir to refresh Sessions."
               detail="Reading the current hvir-owned session projection."
               title="No hvir sessions"
               <div className="sessions-groups" role="list" aria-label="hvir sessions">
                             <h3 className="sessions-worktree-heading">
terminal/TerminalMoveDialog.tsx:         <p>Rehome the terminal in another worktree without restarting its process.</p>

viewer/DiffView.tsx (2 match(es)):
       fontFamily: 'var(--hvir-monospace-font)',
       fontSize: 'calc(12px * var(--hvir-interface-scale))',
viewer/RepositoryImageView.tsx:     void window.hvir

workspaces/SessionDialog.tsx (2 match(es)):
         localStorage.getItem(`hvir:recent-folders:${hostId}`) ?? '[]',
     localStorage.setItem(`hvir:recent-folders:${hostId}`, JSON.stringify(next))

terminal/TerminalRail.tsx (5 match(es)):
                     ? 'Move terminal, new worktree available'
                     : 'Move terminal to another worktree'
                 title="Move active terminal to another worktree"
                   <span className="terminal-new-worktree-badge">new</span>
                         Dismiss new-worktree indicator

viewer/RenderedView.tsx (3 match(es)):
       void window.hvir.invoke('html-preview:create', { path, content, workspaceRoot }).then(
             window.hvir.send('html-preview:release', { id: created.id })
         if (previewId) window.hvir.send('html-preview:release', { id: previewId })
viewer/TabStrip.tsx: const VIEWER_TAB_DRAG_TYPE = 'application/x-hvir-viewer-tab'

viewer/SourceView.tsx (2 match(es)):
       fontFamily: 'var(--hvir-monospace-font)',
       fontSize: 'calc(13px * var(--hvir-interface-scale))',

workspaces/WorkspaceCatalogDialogs.tsx (8 match(es)):
           {count} hvir terminal{count === 1 ? '' : 's'} will be terminated. hvir will forget{' '}
         labelledBy="closed-worktrees-title"
         className="closed-worktrees-dialog"
         <h2 id="closed-worktrees-title">Closed worktrees in {project.displayName}</h2>
         <p>Reopen a present worktree or manage a worktree that Git no longer finds.</p>
         <div className="closed-worktrees-list">
             <div className="closed-worktree-row" key={workspace.id}>
                   title="Forget removed worktree from hvir"
terminal/TerminalRecoveryDialog.tsx:                       Skip again to forget this record from hvir. Provider-native resume
health/WorkbenchHealthControl.tsx:                 Application faults observed by hvir, separate from terminal attention.

workspaces/ProjectsBar.tsx (13 match(es)):
                       title="Forget removed worktree from hvir"
                     title="Remove Git's stale worktree administrative records"
           This removes the project from hvir and closes its live terminals. Files, Git
           branches, and worktrees are not changed.
         labelledBy="worktree-prune-title"
         className="worktree-prune-dialog"
         <h2 id="worktree-prune-title">
           Prune {workspaces.length} stale worktree
           not delete existing worktree directories.
         <div className="worktree-prune-list">
         <p className="worktree-prune-warning">
       return `${workspace.root.path}\nGit reports this worktree as prunable: ${workspace.prunableReason}`
       return `${workspace.root.path}\nThis worktree was absent from Git's last successful discovery.`
App.tsx:   if (!root) return <div className="startup-loading">Starting hvir…</div>
main.tsx: if (!container) throw new Error('hvir: #root element not found')

tree/FilenameSearch.tsx (3 match(es)):
           window.hvir.send('fs:filename-search-cancel', {
         void window.hvir
         window.hvir.send('fs:filename-search-cancel', {
tree/FileOrganizationDialog.tsx:   return window.hvir.invoke('fs:readdir', { path }).then(unwrapOperation)

tree/FileTree.tsx (3 match(es)):
             const result = await window.hvir.invoke('git:ignored-entries', {
     return window.hvir.invoke('fs:readdir', { path }).then(unwrapOperation)
     return window.hvir
tree/FileCreateOverlays.tsx:           className="file-action-menu viewport-context-menu hvir-scrollbar-obscuring"
tree/FileExternalMoveDialog.tsx:                 Selected sources are copied and completely verified before hvir asks the

development/development-performance-fixture.tsx (3 match(es)):
     'hvir:development-performance-measure-fixture'
       container.dataset.hvirDevelopmentPerformanceFixture = 'running'
             container.dataset.hvirDevelopmentPerformanceFixture = 'complete'

settings/ComposerSubmitConsentDialog.tsx (5 match(es)):
           To keep this behavior consistent, hvir needs to update the Enter, Ctrl+Enter, and
           machine you connect to hvir, now and later while this setting is enabled.
           Other Claude bindings are preserved. hvir stores the three previous values and
           <code>.hvir-keybindings-state.json</code> in Claude&apos;s config directory so
           terminals outside hvir. Open Codex sessions keep their launch-time behavior until
settings/sections/GitSettings.tsx:       description="Choose how often hvir refreshes remote repository information."

development/development-renderer-instrumentation.tsx (7 match(es)):
   const ACTIVE_INSTRUMENTATION_KEY = '__hvirDevelopmentRendererInstrumentation'
     document.documentElement.dataset.hvirDevelopmentPerformanceMeasureBudget = String(
     document.documentElement.dataset.hvirDevelopmentPerformanceMeasureInterval = String(
     document.documentElement.dataset.hvirDevelopmentPerformanceMeasurePolicy =
         delete document.documentElement.dataset.hvirDevelopmentPerformanceMeasureBudget
         delete document.documentElement.dataset.hvirDevelopmentPerformanceMeasureInterval
         delete document.documentElement.dataset.hvirDevelopmentPerformanceMeasurePolicy

settings/TerminalThemeGallery.tsx (2 match(es)):
               {theme.source === 'ghostty' ? 'Ghostty collection' : 'Hvir default'}
             <i>~/hvir</i> <b>git status</b>
settings/SettingsDialog.tsx:           <p>Keep hvir focused, legible, and tuned to the way you work.</p>
settings/sections/AppearanceSettings.tsx:           previewText="const hvir = ['view', 'terminal', 'git']"
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c1871d89/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/c1871d89/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-200)

<details>
<summary>188 lines</summary>

```
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'

import {
  asHostId,
  hostPath,
  type BrowseHostResponse,
  type ConnectedHost,
  type HostPath,
  type ProjectHostOption,
  type ProjectState,
} from '../../../shared'
import { DirectoryTree } from '../tree/DirectoryTree'
import { useModalKeyboard } from '../workbench/use-modal-keyboard'
import { RemoteConnectionBadge } from './ConnectionStatus'
import type { ProjectFolderPickerPort } from './project-folder-picker-client'

export function SessionDialog({
  hosts,
  currentRoot,
  suspended,
  onCancel,
  onConnect,
  onBrowse,
  folderPicker,
  onDisconnect,
  onOpen,
  onOpened,
}: {
  readonly hosts: readonly ProjectHostOption[]
  readonly currentRoot: HostPath
  readonly suspended: boolean
  readonly onCancel: () => void
  readonly onConnect: (hostId: string) => Promise<ConnectedHost>
  readonly onBrowse: (hostId: string, path: string) => Promise<BrowseHostResponse>
  readonly folderPicker: ProjectFolderPickerPort
  readonly onDisconnect: (hostId: string) => Promise<ProjectHostOption>
  readonly onOpen: (hostId: string, path: string) => Promise<ProjectState>
  readonly onOpened: (state: ProjectState) => void
}): ReactElement {
  const dialogRef = useRef<HTMLElement>(null)
  const pathInputRef = useRef<HTMLInputElement>(null)
  const nextRevealToken = useRef(0)
  const [stage, setStage] = useState<'host' | 'folder'>('host')
  const [hostId, setHostId] = useState(
    hosts.some((host) => host.hostId === currentRoot.hostId)
      ? currentRoot.hostId
      : (hosts[0]?.hostId ?? 'local'),
  )
  const [connected, setConnected] = useState<ConnectedHost>()
  const [pickerId, setPickerId] = useState<string>()
  const [pathInput, setPathInput] = useState('')
  const [selectedPath, setSelectedPath] = useState<string>()
  const [revealRequest, setRevealRequest] = useState<{
    readonly path: string
    readonly token: number
  }>()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string>()
  const [newFolderName, setNewFolderName] = useState<string>()
  const [treeRefreshVersion, setTreeRefreshVersion] = useState(0)
  const selectedHost = hosts.find((host) => host.hostId === hostId)

  const releaseUnopenedHost = async (): Promise<void> => {
    if (connected?.host.kind === 'ssh' && connected.host.hostId !== currentRoot.hostId) {
      await onDisconnect(connected.host.hostId)
    }
  }

  const releasePicker = async (): Promise<void> => {
    if (!pickerId) return
    await folderPicker.close(pickerId)
    setPickerId(undefined)
  }

  const cancel = async (): Promise<void> => {
    setBusy(true)
    try {
      await releasePicker()
      await releaseUnopenedHost()
    } finally {
      onCancel()
    }
  }

  const back = async (): Promise<void> => {
    setBusy(true)
    setError(undefined)
    try {
      await releasePicker()
      await releaseUnopenedHost()
      setStage('host')
      setConnected(undefined)
      setPathInput('')
      setSelectedPath(undefined)
      setRevealRequest(undefined)
      setNewFolderName(undefined)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const selectPath = async (targetPath: string): Promise<void> => {
    if (!pickerId) return
    setBusy(true)
    setError(undefined)
    setPathInput(targetPath)
    setSelectedPath(undefined)
    setRevealRequest(undefined)
    try {
      const result = await folderPicker.browse(pickerId, targetPath)
      setPathInput(result.path.path)
      setSelectedPath(result.path.path)
      setRevealRequest({
        path: result.path.path,
        token: ++nextRevealToken.current,
      })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const connect = async (): Promise<void> => {
    setBusy(true)
    setError(undefined)
    try {
      const result = await onConnect(hostId)
      setConnected(result)
      setStage('folder')
      setPathInput(result.suggestedPath)
      setSelectedPath(undefined)
      setRevealRequest(undefined)
      const lease = await folderPicker.start(result.host.hostId)
      setPickerId(lease.pickerId)
      const listing = await folderPicker.browse(lease.pickerId, result.suggestedPath)
      setPathInput(listing.path.path)
      setSelectedPath(listing.path.path)
      setRevealRequest({
        path: listing.path.path,
        token: ++nextRevealToken.current,
      })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const open = async (): Promise<void> => {
    if (!connected || !selectedPath) return
    setBusy(true)
    setError(undefined)
    try {
      const state = await onOpen(connected.host.hostId, selectedPath)
      await releasePicker().catch(() => undefined)
      rememberFolder(connected.host.hostId, state.root.path)
      onOpened(state)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
      setBusy(false)
    }
  }

  const createDirectory = async (): Promise<void> => {
    if (!pickerId || !selectedPath || newFolderName === undefined || !connectedHostId)
      return
    setBusy(true)
    setError(undefined)
    try {
      const created = await folderPicker.createDirectory(
        pickerId,
        hostPath(asHostId(connectedHostId), selectedPath),
        newFolderName,
      )
      setPathInput(created.path)
      setSelectedPath(created.path)
      setRevealRequest({ path: created.path, token: ++nextRevealToken.current })
      setTreeRefreshVersion((version) => version + 1)
      setNewFolderName(undefined)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  const connectedHostId = connected?.host.hostId
  const loadPickerEntries = useCallback(
    async (directory: HostPath) => {
      if (!connectedHostId) return []
      return (await onBrowse(connectedHostId, directory.path)).directories
    },
    [connectedHostId, onBrowse],
  )

  useEffect(() => {
    if (!pickerId) return
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c1871d89/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/c1871d89/hvir/.github/workflows/ci.yml (lines 1-150)

<details>
<summary>127 lines</summary>

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
```

</details>


---

<sub>12s</sub>

### `rg`

**Claude|Codex|Gemini|Copilot|Open project|Add project|SSH**

"Claude|Codex|Gemini|Copilot|Open project|Add project|SSH" in *.tsx (src/renderer/src)

<details>
<summary>10 matches</summary>

```
src/renderer/src/dashboards/WebPane.tsx:              : 'Browser handoff for SSH panes needs a compatibility route'
src/renderer/src/sessions/SessionsOverview.tsx:                            SSH
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:      <h3 id="composer-submit-consent-title">Allow a Claude configuration change?</h3>
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:        Shift+Enter Chat bindings in Claude&apos;s <code>keybindings.json</code> on every
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:        Other Claude bindings are preserved. hvir stores the three previous values and
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:        <code>.hvir-keybindings-state.json</code> in Claude&apos;s config directory so
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:        Claude detects the keybinding update live. Shift+Enter submits in supported
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx:        terminals outside hvir. Open Codex sessions keep their launch-time behavior until
src/renderer/src/settings/sections/TerminalSettings.tsx:              Claude updates live; Shift+Enter also submits in supported external
src/renderer/src/settings/sections/TerminalSettings.tsx:              terminals. Restart open Codex sessions after changing this setting.
```

</details>


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/c1871d89/hvir/.github/workflows/release.yml.**

/private/var/tmp/ws/c1871d89/hvir/.github/workflows/release.yml (lines 1-100)

<details>
<summary>92 lines</summary>

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
```

</details>


---

<sub>22s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for working with projects, Git worktrees, terminals,\n+and files. It brings local and SSH-hosted projects into an Electron application,\n+with tools for navigating code and managing development sessions.\n+\n+## Features\n+\n+- Open project folders on the local machine or an SSH host, and navigate their\n+  Git worktrees.\n+- Run terminals, split and move them between worktrees, and configure terminal\n+  appearance and behavior.\n+- Browse and search project files, view source and rendered content, and inspect\n+  changes and Git history.\n+- Track sessions and use integrations for supported coding-agent harnesses,\n+  including Claude and Codex.\n+\n+## Develop\n+\n+You need Node.js 24 or newer, npm, Git, and the platform build tools required by\n+Node's native addons (including Python and a C/C++ toolchain). Dependency\n+installation downloads Electron and builds native modules.\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+In the app, choose a local or SSH host and open a project folder. Git-related\n+features are available when the folder is a Git repository.\n+\n+## Checks and builds\n+\n+```sh\n+npm test                 # Run the Vitest suite\n+npm run typecheck        # Check main and renderer TypeScript\n+npm run lint             # Run ESLint\n+npm run verify           # Run policy, architecture, lint, type, and test checks\n+npm run build            # Type-check and build the Electron application\n+npm run build:dir        # Build an unpacked application\n+```\n+\n+`npm run smoke` builds and runs the Electron smoke scenarios. On a headless\n+Linux machine, run it under a display server, for example\n+`xvfb-run -a npm run smoke`.\n+\n+Native packaging scripts include `npm run pack:mac:arm64`,\n+`npm run pack:linux:x64`, and `npm run pack:linux:arm64`. Their output goes to\n+`dist/`; signing and platform-specific packaging requirements depend on the\n+build environment.\n+\n+## Project layout\n+\n+- `src/main/` — Electron main process and application services.\n+- `src/preload/` — the bridge between the main process and renderer.\n+- `src/renderer/` — React workbench UI.\n+- `src/shared/` — shared types and IPC contracts.\n+- `src/workers/` — worker code.\n+- `test/` — automated tests; `scripts/` contains build and maintenance tools.\n+\n+## License\n+\n+hvir is licensed under the [MIT License](LICENSE). See\n+[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party notices.\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/c1871d89/hvir/README.md
```


---

<sub>24s</sub>

### Copilot

Created [README.md](README.md) with a project overview, setup instructions, development commands, packaging options, project layout, and license information.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
