# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `b50f1402-6f6d-4301-a28c-45f39c8a9224`  
> - **Started:** 9/17/2026, 10:46:01 PM  
> - **Duration:** 45s  
> - **Exported:** 9/17/2026, 10:46:46 PM  

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

I'll start by checking what files and directories exist in the project to understand its structure, language, and purpose. I'll use the `glob` tool to inspect the codebase.

---

<sub>2s</sub>

### `glob`

*****

"*"

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

<sub>3s</sub>

### `glob`

***.json**

"*.json"

<details>
<summary>11 matches</summary>

```
./package.json
./package-lock.json
./.prettierrc.json
./tsconfig.web.json
./stryker.config.json
./tsconfig.base.json
./packages/rename-noreplace/package.json
./tsconfig.node.json
./tsconfig.json
./scripts/architecture-hotspots.json
./scripts/project-management/package.json
```

</details>


---

<sub>4s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/package.json.**

/private/var/tmp/ws/d0fb02f3/hvir/package.json

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

<sub>5s</sub>

### `glob`

**docs/**/***

"docs/**/*"

```
No files matched the pattern.
```


---

<sub>7s</sub>

### `glob`

*****

"*"

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

### `glob`

**src/**/***

"src/**/*"

<details>
<summary>493 matches</summary>

```
[glob: 695 path(s) under ./src; concrete paths]
renderer/index.html
main/smoke/document-review-evidence.mts
main/smoke/failure-evidence.mts
main/smoke/interruption-identity.mts
main/smoke/scenario-selection.mts
renderer/src/terminal/terminal-color-schema.mts
renderer/src/styles.css
renderer/src/styles/base.css
renderer/src/styles/composer-submit.css
renderer/src/styles/context-menu.css
renderer/src/styles/diagnostic-report.css
renderer/src/styles/dialogs.css
renderer/src/styles/document-review.css
renderer/src/styles/file-operations.css
renderer/src/styles/git-controls.css
renderer/src/styles/git-graph.css
renderer/src/styles/git-history.css
renderer/src/styles/git-inspector.css
renderer/src/styles/harness-settings.css
renderer/src/styles/health.css
renderer/src/styles/path-copy.css
renderer/src/styles/primitives.css
renderer/src/styles/projects.css
renderer/src/styles/provider-context.css
renderer/src/styles/scrollbars.css
renderer/src/styles/sessions-collection.css
renderer/src/styles/sessions-overview.css
renderer/src/styles/sessions-terminal-detail.css
renderer/src/styles/settings.css
renderer/src/styles/shell.css
renderer/src/styles/terminal-context-menu.css
renderer/src/styles/terminal-list.css
renderer/src/styles/terminal-move.css
renderer/src/styles/terminal-pane.css
renderer/src/styles/terminal-search.css
renderer/src/styles/terminal-shell.css
renderer/src/styles/terminal-theme-gallery.css
renderer/src/styles/tree.css
renderer/src/styles/viewer-content.css
renderer/src/styles/viewer-find.css
renderer/src/styles/viewer-tabs.css
renderer/src/styles/viewer-workload.css
renderer/src/styles/web-pane.css
renderer/src/styles/workspace-catalog.css
renderer/src/styles/workspace-state.css
renderer/src/themes.css
renderer/src/App.tsx
renderer/src/ErrorBoundary.tsx
renderer/src/dashboards/ElectronWebPaneSurface.tsx
renderer/src/dashboards/WebPane.tsx
renderer/src/dashboards/WebPaneStack.tsx
renderer/src/development/development-performance-fixture.tsx
renderer/src/development/development-performance-pump.tsx
renderer/src/development/development-renderer-instrumentation.tsx
renderer/src/diagnostics/DiagnosticReportDialog.tsx
renderer/src/document-review/DocumentReviewControls.tsx
renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
renderer/src/document-review/DocumentReviewInlineSurface.tsx
renderer/src/git/GitBranchControls.tsx
renderer/src/git/GitChangesView.tsx
renderer/src/git/GitGraphLanes.tsx
renderer/src/git/GitGraphView.tsx
renderer/src/git/GitHistoryView.tsx
renderer/src/git/GitPanel.tsx
renderer/src/harness/ProviderContextMeter.tsx
renderer/src/health/WorkbenchHealthControl.tsx
renderer/src/layout/PaneResizer.tsx
renderer/src/main.tsx
renderer/src/path-copy/PathCopyMenu.tsx
renderer/src/sessions/SessionsApplicationDestination.tsx
renderer/src/sessions/SessionsCollectionToolbar.tsx
renderer/src/sessions/SessionsOverview.tsx
renderer/src/sessions/SessionsOverviewCard.tsx
renderer/src/sessions/SessionsOverviewNotice.tsx
renderer/src/sessions/SessionsTerminalDetail.tsx
renderer/src/settings/ComposerSubmitConsentDialog.tsx
renderer/src/settings/HarnessProfileAdvancedFields.tsx
renderer/src/settings/HarnessProfileCommandFields.tsx
renderer/src/settings/HarnessProfileDialogs.tsx
renderer/src/settings/HarnessProfileEditor.tsx
renderer/src/settings/HarnessProfileOverlays.tsx
renderer/src/settings/HarnessProfilesSettings.tsx
renderer/src/settings/SettingsActiveSection.tsx
renderer/src/settings/SettingsDialog.tsx
renderer/src/settings/SettingsSection.tsx
renderer/src/settings/SettingsSectionNavigation.tsx
renderer/src/settings/TerminalThemeGallery.tsx
renderer/src/settings/sections/AppearanceSettings.tsx
renderer/src/settings/sections/GitSettings.tsx
renderer/src/settings/sections/KeybindingsSettings.tsx
renderer/src/settings/sections/TerminalSettings.tsx
renderer/src/settings/sections/TypographyFontField.tsx
renderer/src/terminal/TerminalContextMenu.tsx
renderer/src/terminal/TerminalContextMeter.tsx
renderer/src/terminal/TerminalDeck.tsx
renderer/src/terminal/TerminalMoveDialog.tsx
renderer/src/terminal/TerminalRail.tsx
renderer/src/terminal/TerminalRailCompact.tsx
renderer/src/terminal/TerminalRecoveryDialog.tsx
renderer/src/terminal/TerminalSearch.tsx
renderer/src/terminal/TerminalSessionRuntimes.tsx
renderer/src/terminal/TerminalView.tsx
renderer/src/terminal/TerminalWorkspace.tsx
renderer/src/terminal/TerminalWorkspaceCollection.tsx
renderer/src/terminal/TerminalWorkspaceControls.tsx
renderer/src/terminal/TerminalWorkspaceDialogs.tsx
renderer/src/tree/DirectoryTree.tsx
renderer/src/tree/FileCreateOverlays.tsx
renderer/src/tree/FileDeletionDialog.tsx
renderer/src/tree/FileExternalMoveDialog.tsx
renderer/src/tree/FileOrganizationDialog.tsx
renderer/src/tree/FileTree.tsx
renderer/src/tree/FilenameSearch.tsx
renderer/src/viewer/DiffView.tsx
renderer/src/viewer/FileViewer.tsx
renderer/src/viewer/FindControl.tsx
renderer/src/viewer/GoToLineControl.tsx
renderer/src/viewer/LargeFileView.tsx
renderer/src/viewer/MarkdownFragment.tsx
renderer/src/viewer/RenderedView.tsx
renderer/src/viewer/RepositoryImageView.tsx
renderer/src/viewer/SourceView.tsx
renderer/src/viewer/TabStrip.tsx
renderer/src/workbench/ConfirmationDialog.tsx
renderer/src/workbench/TerminalLayoutControls.tsx
renderer/src/workspaces/ConnectionStatus.tsx
renderer/src/workspaces/MissingWorkspaceNotice.tsx
renderer/src/workspaces/ProjectsBar.tsx
renderer/src/workspaces/SessionDialog.tsx
renderer/src/workspaces/SshPromptDialog.tsx
renderer/src/workspaces/WorkspaceCatalogDialogs.tsx
main/application-runtime-policy.ts
main/application-runtime.ts
main/attention-badge.ts
main/build-environment.d.ts
main/diagnostics/diagnostic-event.ts
main/diagnostics/diagnostic-evidence.ts
main/diagnostics/diagnostic-intake.ts
main/diagnostics/diagnostic-journal.ts
main/diagnostics/diagnostic-report-builder.ts
main/diagnostics/diagnostic-report-coordinator.ts
main/diagnostics/diagnostic-report-evidence.ts
main/diagnostics/diagnostic-report-storage.ts
main/diagnostics/electron-diagnostic-report-actions.ts
main/diagnostics/runtime-diagnostics.ts
main/document-review/document-review-application.ts
main/document-review/document-review-coordinator.ts
main/document-review/document-review-delivery-coordinator.ts
main/document-review/document-review-delivery-policy.ts
main/document-review/document-review-delivery-terminal.ts
main/document-review/document-review-policy.ts
main/document-review/document-review-retention.ts
main/document-review/document-review-runtime.ts
main/document-review/document-review-store-codec.ts
main/document-review/document-review-store.ts
main/document-review/index.ts
main/filename-search/filename-enumerator.ts
main/filename-search/filename-search-coordinator.ts
main/filename-search/filename-search-policy.ts
main/filename-search/index.ts
main/git/git-branches.ts
main/git/git-command-context.ts
main/git/git-detail.ts
main/git/git-diff.ts
main/git/git-engine.ts
main/git/git-history.ts
main/git/git-parsers.ts
main/git/git-status.ts
main/git/git-worktrees.ts
main/git/mutation-authorization.ts
main/git/mutation-coordinator.ts
main/git/untracked-line-counts.ts
main/git/worker-host-broker.ts
main/git/worker-host-router.ts
main/harness/bounded-line-reader.ts
main/harness/bundled-harness-providers.ts
main/harness/claude-context-telemetry.ts
main/harness/claude-keybindings.ts
main/harness/claude-session-artifact.ts
main/harness/claude-session-recovery.ts
main/harness/codex-context-telemetry.ts
main/harness/codex-session-discovery.ts
main/harness/electron-clipboard-image.ts
main/harness/harness-composer-contracts.ts
main/harness/harness-launch-selection.ts
main/harness/harness-launch.ts
main/harness/harness-probe.ts
main/harness/harness-profile-store.ts
main/harness/harness-provider-capabilities.ts
main/harness/harness-provider-contract.ts
main/harness/harness-provider-probes.ts
main/harness/harness-provider-registry.ts
main/harness/harness-provider.ts
main/harness/harness-shell-environment.ts
main/harness/harness-telemetry-hub.ts
main/harness/harness-telemetry-protocol.ts
main/harness/harness-text-validation.ts
main/harness/harness-usage-artifact.ts
main/harness/harness-usage-demand-controller.ts
main/harness/harness-usage-read-scheduler.ts
main/harness/harness-usage.ts
main/harness/providers/claude-code.ts
main/harness/providers/codex.ts
main/harness/providers/cursor.ts
main/harness/providers/gemini.ts
main/harness/providers/github-copilot.ts
main/harness/providers/pi.ts
main/harness/providers/shell.ts
main/harness/remote-image-paste-storage.ts
main/harness/remote-image-paste.ts
main/health/workbench-health-events.ts
main/health/workbench-health.ts
main/html-preview-protocol.ts
main/index.ts
main/ipc.ts
main/ipc/authority-channel-policy.ts
main/ipc/authority-port.ts
main/ipc/authority-router.ts
main/ipc/deps.ts
main/ipc/features/app.ts
main/ipc/features/clipboard.ts
main/ipc/features/diagnostic-report.ts
main/ipc/features/document-review.ts
main/ipc/features/filesystem.ts
main/ipc/features/git.ts
main/ipc/features/harness.ts
main/ipc/features/image-paste.ts
main/ipc/features/preview.ts
main/ipc/features/project.ts
main/ipc/features/sessions.ts
main/ipc/features/terminal-file-paste.ts
main/ipc/features/terminal.ts
main/ipc/features/web-pane.ts
main/ipc/host-path-authority.ts
main/ipc/operation-result.ts
main/ipc/project-commands.ts
main/navigation-policy.ts
main/project-coordinator.ts
main/project-file-operations/case-only-project-entry-rename.ts
main/project-file-operations/clipboard-file-list.ts
main/project-file-operations/create-project-entry.ts
main/project-file-operations/delete-project-entry.ts
main/project-file-operations/electron-clipboard-files.ts
main/project-file-operations/electron-external-move-picker.ts
main/project-file-operations/external-file-copy.ts
main/project-file-operations/external-file-grants.ts
main/project-file-operations/external-file-move-operation.ts
main/project-file-operations/external-file-move.ts
main/project-file-operations/external-file-operation.ts
main/project-file-operations/index.ts
main/project-file-operations/project-entry-deletion-operation.ts
main/project-file-operations/project-entry-operation-results.ts
main/project-file-operations/project-entry-organization.ts
main/project-file-operations/project-entry-removal.ts
main/project-file-operations/project-file-confinement.ts
main/project-file-operations/project-file-copy-limits.ts
main/project-file-operations/project-file-operation-coordinator.ts
main/project-file-operations/project-file-operation-runtime.ts
main/project-file-operations/project-file-path-errors.ts
main/project-file-operations/staging-cleanup.ts
main/project-file-operations/verified-project-copy-manifest.ts
main/project-file-operations/verified-project-copy.ts
main/project-file-operations/verified-project-entry-metadata.ts
main/project-folder-picker/index.ts
main/project-folder-picker/project-folder-picker-coordinator.ts
main/project-host/electron-project-reveal.ts
main/project-host/electron-project-trash.ts
main/project-host/index.ts
main/project-host/local-host.ts
main/project-host/project-host-catalog.ts
main/project-host/project-host.ts
main/project-host/renderer-ssh-prompter.ts
main/project-host/ssh-abort.ts
main/project-host/ssh-auth.ts
main/project-host/ssh-client-lifecycle.ts
main/project-host/ssh-config.ts
main/project-host/ssh-exclusive-create.ts
main/project-host/ssh-file-access.ts
main/project-host/ssh-host-options.ts
main/project-host/ssh-host-trust.ts
main/project-host/ssh-host.ts
main/project-host/ssh-identity-source.ts
main/project-host/ssh-project-file-transfer.ts
main/project-host/ssh-text-prefix.ts
main/project-host/ssh-transport-pool.ts
main/project-host/ssh-watch-service.ts
main/project-registry.ts
main/project-watch.ts
main/pty/pty-contract.ts
main/pty/pty-launch-admission.ts
main/pty/pty-session-lifetime.ts
main/pty/pty-session-observation.ts
main/pty/pty-stream-attachment.ts
main/pty/pty-supervisor.ts
main/renderer-event-delivery.ts
main/renderer-event-publisher.ts
main/renderer-presentation-resources.ts
main/renderer-resource-scopes.ts
main/sessions/sessions-observation-application.ts
main/sessions/sessions-observation-port.ts
main/sessions/sessions-open-resolution.ts
main/sessions/sessions-projection-identities.ts
main/sessions/sessions-projection-values.ts
main/sessions/sessions-telemetry-projection.ts
main/sessions/sessions-usage-observation-port.ts
main/sessions/sessions-usage-projection.ts
main/smoke/app-settings.ts
main/smoke/bootstrap-contract.ts
main/smoke/capacity-live-presentation.ts
main/smoke/capacity-output-fixtures.ts
main/smoke/capacity-performance.ts
main/smoke/capacity-scenario.ts
main/smoke/capacity-terminals.ts
main/smoke/capacity.ts
main/smoke/cleanup.ts
main/smoke/development-performance.ts
main/smoke/diagnostic-report-restart.ts
main/smoke/document-review-driver.ts
main/smoke/document-review-fixture.ts
main/smoke/document-review.ts
main/smoke/electron-process-metrics.ts
main/smoke/external-documents.ts
main/smoke/external-file-move.ts
main/smoke/filename-search.ts
main/smoke/files-interactions.ts
main/smoke/git-changes-layout.ts
main/smoke/git-diff.ts
main/smoke/git-dirty-navigation.ts
main/smoke/git-workflow.ts
main/smoke/harness-profile-workflow.ts
main/smoke/harness-settings-layout.ts
main/smoke/harness-settings-visual.ts
main/smoke/image-paste-fallback.ts
main/smoke/index.ts
main/smoke/interruption-checkpoint.ts
main/smoke/macos-file-pasteboard.ts
main/smoke/native-host-worker.ts
main/smoke/native-pty.ts
main/smoke/platform-contracts.ts
main/smoke/project-entry-deletion.ts
main/smoke/project-file-fixture.ts
main/smoke/project-file-operations.ts
main/smoke/project-fixture-commands.ts
main/smoke/project-state-fixture.ts
main/smoke/pty-lifecycle.ts
main/smoke/renderer-authority.ts
main/smoke/renderer-isolation.ts
main/smoke/renderer-lifecycle.ts
main/smoke/renderer-readiness-observer.ts
main/smoke/renderer-readiness.ts
main/smoke/renderer-recovery-delivery.ts
main/smoke/renderer-recovery-producer.ts
main/smoke/renderer-recovery-scenario.ts
main/smoke/renderer-recovery.ts
main/smoke/scenarios.ts
main/smoke/scrollbar-presentation.ts
main/smoke/sessions-project-fixture.ts
main/smoke/sessions-projection-scenario.ts
main/smoke/sessions-projection.ts
main/smoke/sessions-usage-provider.ts
main/smoke/sessions-visual.ts
main/smoke/terminal-chrome.ts
main/smoke/terminal-context-menu.ts
main/smoke/terminal-cursor-presentation.ts
main/smoke/terminal-explicit-launch.ts
main/smoke/terminal-file-paste.ts
main/smoke/terminal-hidden-reveal.ts
main/smoke/terminal-horizon-presentation.ts
main/smoke/terminal-keyboard-negotiation.ts
main/smoke/terminal-lifecycle-scenario.ts
main/smoke/terminal-ligature-presentation.ts
main/smoke/terminal-middle-click-close.ts
main/smoke/terminal-move.ts
main/smoke/terminal-palette-presentation.ts
main/smoke/terminal-presentation-scenarios.ts
main/smoke/terminal-presentation.ts
main/smoke/terminal-project-return.ts
main/smoke/terminal-renderer-lifecycle.ts
main/smoke/terminal-scenario-ready.ts
main/smoke/terminal-search.ts
main/smoke/terminal-semantic-navigation.ts
main/smoke/terminal-session-store.ts
main/smoke/terminal-split.ts
main/smoke/terminal-synchronized-output.ts
main/smoke/terminal-theme-gallery-presentation.ts
main/smoke/viewer-content.ts
main/smoke/viewer-find.ts
main/smoke/viewer-fixtures.ts
main/smoke/viewer-live-reload.ts
main/smoke/viewer-position-operation.ts
main/smoke/viewer-position.ts
main/smoke/web-pane-boundary.ts
main/smoke/web-pane.ts
main/smoke/workbench-chrome.ts
main/smoke/workbench-health-scenario.ts
main/smoke/workbench-health.ts
main/smoke/workbench-layout.ts
main/smoke/workspace-close.ts
main/smoke/workspace-remote.ts
main/terminal/electron-clipboard-file-paste.ts
main/terminal/renderer-pty-lifecycle.ts
main/terminal/session-registry.ts
main/terminal/terminal-identity-publication.ts
main/terminal/terminal-launch-admission.ts
main/terminal/terminal-start-response.ts
main/terminal/terminal-workspace-move-coordinator.ts
main/viewer/document-read-authority.ts
main/web-pane/loopback-http-proxy.ts
main/web-pane/web-pane-route-registry.ts
main/window/electron-renderer-document-lifecycle.ts
main/window/electron-renderer-recovery.ts
main/window/electron-window-manager.ts
main/window/renderer-recovery-monitor.ts
main/window/window-health-tracker.ts
main/window/window-policy.ts
main/workbench-runtime.ts
main/worker-host.ts
main/workspace-activity.ts
main/workspace-cleanup.ts
main/workspace-coordinator.ts
main/workspace-removal-coordinator.ts
preload/index.ts
preload/renderer-diagnostics.ts
preload/terminal-clipboard-file-paste.ts
renderer/src/context-menu/viewport-context-menu.ts
renderer/src/dashboards/use-web-pane-workspace.ts
renderer/src/dashboards/web-pane-diagnostics.ts
renderer/src/dashboards/web-pane-surface.ts
renderer/src/dashboards/web-pane-url.ts
renderer/src/dashboards/web-pane-workspace-policy.ts
renderer/src/development/performance-measure-budget.ts
renderer/src/diagnostics/owned-capture-masks.ts
renderer/src/document-review/document-review-anchor.ts
renderer/src/document-review/document-review-batches.ts
renderer/src/document-review/document-review-capture.ts
renderer/src/document-review/document-review-delivery-client.ts
renderer/src/document-review/document-review-delivery-feedback.ts
renderer/src/document-review/document-review-eligibility.ts
renderer/src/document-review/document-review-inline.ts
renderer/src/document-review/document-review-lifecycle.ts
renderer/src/document-review/document-review-model.ts
renderer/src/document-review/document-review-rendered.ts
renderer/src/document-review/document-review-selectors.ts
renderer/src/document-review/document-review-source.ts
renderer/src/document-review/document-review-types.ts
renderer/src/document-review/document-review-validation.ts
renderer/src/document-review/document-review-workspace-controller.ts
renderer/src/document-review/document-review-workspace.ts
renderer/src/document-review/index.ts
renderer/src/document-review/use-document-review-delivery.ts
renderer/src/document-review/use-document-review-interaction.ts
renderer/src/document-review/use-document-review-workspace.ts
renderer/src/git/commit-detail-client.ts
renderer/src/git/commit-file-tree.ts
renderer/src/git/commit-message.ts
renderer/src/git/git-capability.ts
renderer/src/git/git-graph-lane-metrics.ts
renderer/src/git/git-graph-layout.ts
renderer/src/git/git-rail-model.ts
renderer/src/git/git-sync-coordinator.ts
renderer/src/git/git-sync-status.ts
renderer/src/git/use-git-commit-details.ts
renderer/src/git/use-git-rail-controller.ts
renderer/src/git/use-git-workspace.ts
renderer/src/git/virtual-range.ts
renderer/src/health/use-diagnostic-evidence.ts
renderer/src/health/use-workbench-health.ts
renderer/src/hvir.d.ts
renderer/src/layout/split-layout-policy.ts
renderer/src/layout/workspace-layout-persistence.ts
renderer/src/path-copy/path-copy.ts
renderer/src/path-copy/use-path-copy-menu.ts
renderer/src/scrollbars/scrollbar-presentation.ts
renderer/src/sessions/sessions-overview-model.ts
renderer/src/sessions/sessions-projection-coordinator.ts
renderer/src/sessions/sessions-renderer-observation.ts
renderer/src/sessions/sessions-terminal-detail-controller.ts
renderer/src/sessions/sessions-terminal-overlay.ts
renderer/src/sessions/sessions-terminal-surface.ts
renderer/src/sessions/use-sessions-foreground.ts
renderer/src/sessions/use-sessions-terminal-detail.ts
renderer/src/settings/harness-argument-editor.ts
renderer/src/settings/harness-profile-draft.ts
renderer/src/settings/harness-profile-editor-policy.ts
renderer/src/settings/harness-profile-request-policy.ts
renderer/src/settings/keybindings.ts
renderer/src/settings/settings-draft.ts
renderer/src/settings/settings-model.ts
renderer/src/settings/settings-navigation.ts
renderer/src/settings/settings.ts
[omitted 205 path(s); see original output for full results]
[extensions: .ts=564, .tsx=85, .css=40, .mts=5, .html=1]
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/main/index.ts.**

/private/var/tmp/ws/d0fb02f3/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>12s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/main/index.ts.**

/private/var/tmp/ws/d0fb02f3/hvir/src/main/index.ts (lines 1-120)

<details>
<summary>120 lines</summary>

```
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
    createElectronWindowManager({
      htmlPreviews,
      activateRenderer: (ownerId) =>
        installRendererPresentation(rendererScopes.activateOwner(ownerId)),
      rolloverRenderer: (owner) => {
        diagnostics.revokeRenderer(owner)
        const transition = rendererScopes.rolloverOwner(owner.id)
        void transition.cleanup.catch((error) =>
          console.error('[renderer] generation cleanup failed', error),
        )
```

</details>


---

<sub>13s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/shared/index.ts.**

/private/var/tmp/ws/d0fb02f3/hvir/src/shared/index.ts

<details>
<summary>29 lines</summary>

```
export * from './disposer'
export * from './host-path'
export * from './fs-types'
export * from './project-file-operations'
export * from './filename-search'
export * from './ipc'
export * from './worker-protocol'
export * from './viewer-types'
export * from './viewer-workload-policy'
export * from './html-preview'
export * from './git-types'
export * from './rendered-link'
export * from './harness-telemetry'
export * from './harness-usage'
export * from './harness-provider'
export * from './keybindings'
export * from './web-pane'
export * from './harness-profile'
export * from './workspace-types'
export * from './composer-submit'
export * from './application-build-channel'
export * from './diagnostics'
export * from './workbench-health'
export * from './diagnostic-report'
export * from './diagnostic-evidence'
export * from './terminal-start-admission'
export * from './terminal-clipboard-file-paste'
export * from './document-review'
export * from './sessions-projection'
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/d0fb02f3/hvir/src/main/harness/providers/claude-code.ts (lines 1-60)

<details>
<summary>57 lines</summary>

```
import {
  asHarnessProviderId,
  asHarnessProfileId,
  type HarnessContextPressurePolicy,
} from '../../../shared'
import type { HarnessProvider, HarnessLaunchSpec } from '../harness-provider-contract'
import { configureClaudeComposerSubmit } from '../claude-keybindings'
import {
  observeClaudeContext,
  observeClaudeUsage,
  snapshotClaudeUsage,
} from '../claude-context-telemetry'
import { claudeResumeAvailability } from '../claude-session-recovery'
import { versionProbe } from '../harness-provider-probes'
import {
  pathImagePasteContract,
  documentReviewInsertContract,
} from '../harness-composer-contracts'

const CLAUDE_CONTEXT_PRESSURE: HarnessContextPressurePolicy = {
  assumedWindowTokens: 1_000_000,
  warningPercent: 20,
  criticalPercent: 40,
}

const claudeCodeReviewInsert = documentReviewInsertContract(() => claudeCodeProvider)

export const claudeCodeProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('claude-code'),
    displayName: 'Claude Code',
    sessionKind: 'agent',
    contextPresentation: 'pressure',
    contextPressure: CLAUDE_CONTEXT_PRESSURE,
    modifiedKeyProtocol: 'modify-other-keys',
    metaEnterAliasesControl: true,
  },
  profile: {
    version: 3,
    defaultProfile: {
      id: asHarnessProfileId('claude-code-default'),
      displayName: 'Claude Code',
      description: 'Claude Code with exact hvir-managed session recovery.',
    },
    reservedArguments: ['--session-id', '--resume', '--continue', '--fork-session'],
    reservedEnvironmentKeys: ['CLAUDE_CONFIG_DIR'],
    artifactEnvironmentKeys: ['CLAUDE_CONFIG_DIR'],
    artifactExecutable: true,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: true,
  sessionIdentity: 'preassigned',
  telemetry: { observe: observeClaudeContext },
  usageTelemetry: { observe: observeClaudeUsage },
  usageSnapshots: { snapshot: snapshotClaudeUsage },
  resumeValidation: { availability: claudeResumeAvailability },
  probe: versionProbe('preassigned', true, 'pressure', {
    contextPressure: CLAUDE_CONTEXT_PRESSURE,
    reviewInsert: claudeCodeReviewInsert,
```

</details>


---

<sub>15s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/main/harness/providers/github-copilot.ts.**

/private/var/tmp/ws/d0fb02f3/hvir/src/main/harness/providers/github-copilot.ts (lines 1-60)

<details>
<summary>51 lines</summary>

```
import { asHarnessProfileId, asHarnessProviderId } from '../../../shared'
import type { HarnessProvider } from '../harness-provider-contract'

export const githubCopilotProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('github-copilot-cli'),
    displayName: 'GitHub Copilot CLI',
    sessionKind: 'agent',
    contextPresentation: 'none',
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('github-copilot-cli-default'),
      displayName: 'GitHub Copilot CLI',
      description:
        'Copilot CLI. Launch-only across versions without verified --session-id.',
    },
    reservedArguments: ['--session-id', '--resume', '-r', '--continue', '--connect'],
    reservedEnvironmentKeys: [],
    artifactEnvironmentKeys: [],
    artifactExecutable: false,
    artifactPathBindings: [],
    applyArgs: (_mode, providerArgs, profileArgs) => [...providerArgs, ...profileArgs],
  },
  supportsResume: false,
  sessionIdentity: 'none',
  probe: versionProbe(),
  launch: () => ({
    file: 'copilot',
    args: [],
    shellEnvironment: true,
  }),
  resume(ctx) {
    return this.launch(ctx)
  },
}

function versionProbe(): HarnessProvider['probe'] {
  return {
    versionArgs: ['--version'],
    parseVersion: firstLine,
    effectiveCapabilities: () => ({
      sessionIdentity: 'none',
      exactResume: false,
      contextPresentation: 'none',
    }),
  }
}

function firstLine(output: string): string | undefined {
  const line = output.trim().split(/\r?\n/, 1)[0]?.trim()
  return line && line.length <= 160 ? line : undefined
}
```

</details>


---

<sub>19s</sub>

### `glob`

**src/renderer/index.html**

"src/renderer/index.html"

```
./src/renderer/index.html
```


---

<sub>20s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/renderer/index.html.**

/private/var/tmp/ws/d0fb02f3/hvir/src/renderer/index.html

<details>
<summary>25 lines</summary>

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-src hvir-preview:; connect-src 'self' data: ws://localhost:* http://localhost:*"
    />
    <title>hvir</title>
    <style>
      html,
      body,
      #root {
        margin: 0;
        height: 100%;
        background: #0b0d10;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

</details>


---

<sub>22s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/d0fb02f3/hvir/src/renderer/src/App.tsx (lines 1-120)

<details>
<summary>120 lines</summary>

```
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import {
  GIT_CHANGE_DISPLAY_LIMIT,
  hostPathEquals,
  type GitChanges,
  type HostPath,
  type ProjectState,
} from '../../shared'
import { PaneResizer } from './layout/PaneResizer'
import type { WebViewState } from './dashboards/WebPane'
import { WebPaneStack } from './dashboards/WebPaneStack'
import { useWebPaneWorkspace } from './dashboards/use-web-pane-workspace'
import { TerminalWorkspaceCollection } from './terminal/TerminalWorkspaceCollection'
import { useTerminalWorkspaceRuntime } from './terminal/use-terminal-workspace-runtime'
import { useTerminalAttention } from './terminal/use-terminal-attention'
import { ProjectsBar } from './workspaces/ProjectsBar'
import { MissingWorkspaceNotice } from './workspaces/MissingWorkspaceNotice'
import { useProjectSession } from './workspaces/project-session'
import { useProjectWatchInterests } from './workspaces/project-watch-interests'
import { SessionDialog } from './workspaces/SessionDialog'
import { SshPromptDialog } from './workspaces/SshPromptDialog'
import { FileTree } from './tree/FileTree'
import { isGitIgnoreRulePath } from './tree/git-ignore-refresh'
import { GitPanel } from './git/GitPanel'
import { workspaceGitEnabled } from './git/git-capability'
import { GitGraphView } from './git/GitGraphView'
import { useGitWorkspace } from './git/use-git-workspace'
import { FileViewer } from './viewer/FileViewer'
import { TabStrip } from './viewer/TabStrip'
import { useViewerWorkspace } from './viewer/use-viewer-workspace'
import { setAppTheme, useAppTheme } from './theme'
import { SettingsDialog } from './settings/SettingsDialog'
import { setAppSettings, terminalPreferences, useAppSettings } from './settings/settings'
import { useWorkbenchCommands } from './workbench/use-workbench-commands'
import { focusVisibleActiveTerminalAfterLayout } from './workbench/active-terminal-focus'
import { useWorkbenchLayout } from './workbench/use-workbench-layout'
import { useWorkbenchOverlays } from './workbench/use-workbench-overlays'
import { TerminalLayoutControls } from './workbench/TerminalLayoutControls'
import { useRendererReady } from './workbench/use-renderer-ready'
import { useTerminalPathActivation } from './workbench/use-terminal-path-activation'
import * as review from './document-review/use-document-review-workspace'
import { SessionsApplicationDestination } from './sessions/SessionsApplicationDestination'
export function App(): ReactElement {
  const [destination, setDestination] = useState<'workspace' | 'sessions'>('workspace')
  const theme = useAppTheme()
  const settings = useAppSettings()
  const rootRef = useRef<HostPath | undefined>(undefined)
  const workspaceSwitchRef = useRef<(direction: -1 | 1) => void>(() => undefined)
  const sessionErrorRef = useRef<(message: string) => void>(() => undefined)
  const restoreViewerRef = useRef<() => void>(() => undefined)
  const resetGitGraphRef = useRef<() => void>(() => undefined)
  const deactivateGitGraphRef = useRef<() => void>(() => undefined)
  const deactivateWebPaneRef = useRef<() => void>(() => undefined)
  const [gitChanges, setGitChanges] = useState<GitChanges>()
  const overlays = useWorkbenchOverlays()
  const terminalAttention = useTerminalAttention()
  const viewer = useViewerWorkspace({
    onActivateFile: () => {
      deactivateGitGraphRef.current()
      deactivateWebPaneRef.current()
      restoreViewerRef.current()
    },
  })
  const {
    tabs,
    activeTab,
    primaryTabs,
    secondaryTabs,
    primaryActiveTab,
    secondaryActiveTab,
    split: viewerSplit,
    switchWorkspace: switchViewerWorkspace,
    openFile,
    activateTab,
    closeTab,
    pinTab,
    setMode: setViewerMode,
    cycleActiveMode,
    viewerCommands,
    setDiffBase: setViewerDiffBase,
    setContent: setViewerContent,
    navigationHandled,
    schedulePosition,
    reloadTab,
    saveTab,
    handleWatchEvent,
    reloadCleanFiles,
    focusPane: focusViewerPane,
    getActivePane,
    openSplit: openViewerSplit,
    closeSplit: closeViewerSplit,
    moveTab: moveTabToPane,
    reorderTabs: reorderViewerTabs,
  } = viewer
  const reviewWatch = review.useWatchFanout(handleWatchEvent)
  const web = useWebPaneWorkspace({
    onActivate: () => {
      focusViewerPane('primary')
      deactivateGitGraphRef.current()
      restoreViewerRef.current()
    },
    onError: (message) => sessionErrorRef.current(message),
  })
  const {
    views: webViews,
    activeId: activeWebViewId,
    active: webViewActive,
    activeRef: webViewActiveRef,
    focused: webViewFocused,
    setFocused: setWebViewFocused,
    setActive: setWebViewActive,
    applyProjectState: applyWebProjectState,
    setWorkspaceRoot: setWebWorkspaceRoot,
    openLink: openWebLink,
    activateView: activateWebView,
    closeView: closeWebView,
    forgetTerminalViews,
    followBlockedNavigation,
    setTitle: setWebViewTitle,
    openBrowser: openWebViewInBrowser,
```

</details>


---

<sub>24s</sub>

### `glob`

**scripts/**/*.sh**

"scripts/**/*.sh"

<details>
<summary>10 matches</summary>

```
./scripts/create-smoke-repository.sh
./scripts/check-seams.sh
./scripts/record-macos-ssh-identity.sh
./scripts/install-git-hooks.sh
./scripts/run-macos-package-smoke.sh
./scripts/run-smoke.sh
./scripts/phase8-gauntlet.sh
./scripts/run-linux-package-smoke.sh
./scripts/run-macos-ssh-acceptance.sh
./scripts/native-installer.template.sh
```

</details>


---

<sub>26s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/scripts/check-adrs.mjs.**

/private/var/tmp/ws/d0fb02f3/hvir/scripts/check-adrs.mjs

<details>
<summary>162 lines</summary>

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
    previousOffset = matches[0].index
  }

  if (/^\s*[-*]\s+\[[ xX]\]/m.test(source)) {
    errors.push(`docs/adr/${name}: implementation checklists do not belong in ADRs`)
  }
  if (
    /^#{2,}\s+(?:status|implementation|progress|acceptance|verification|test(?: run)? evidence|retrospective|research queue|delivery sequence|rollout plan)\b/im.test(
      source,
    )
  ) {
    errors.push(
      `docs/adr/${name}: progress, evidence, and rollout sections do not belong in ADRs`,
    )
  }
}

const design = readFileSync(designPath, 'utf8')
const indexSection = design.match(/## 4\. Key decisions\n([\s\S]*?)\n## 5\. Architecture/)
if (!indexSection) {
  errors.push('docs/design.md: missing bounded section 4 ADR index')
} else {
  errors.push(...validateAdrLifecycles(recordSources, indexSection[1]))
  const indexed = [
    ...indexSection[1].matchAll(
      /^### \[ADR-(\d{3}) — [^\]]+\]\(adr\/(ADR-(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md)\)$/gm,
    ),
  ]
  const indexedFiles = indexed.map((match) => match[2])
  for (const match of indexed) {
    if (match[1] !== match[3]) {
      errors.push(`docs/design.md: ADR-${match[1]} links to ADR-${match[3]}`)
    }
  }
  for (const name of records) {
    const count = indexedFiles.filter((indexedName) => indexedName === name).length
    if (count !== 1) {
      errors.push(`docs/design.md: ${name} must appear exactly once in the ADR index`)
    }
  }
  for (const name of indexedFiles) {
    if (!records.includes(name)) {
      errors.push(`docs/design.md: index points to non-record ${name}`)
    }
  }
  if (
    /^\*\*Decision:\*\*/m.test(indexSection[1]) ||
    /^#### .*addendum/im.test(indexSection[1])
  ) {
    errors.push(
      'docs/design.md: ADR bodies or implementation addenda remain embedded in the index',
    )
  }
}

function markdownFiles(directory) {
  const files = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || ['node_modules', 'out'].includes(entry.name))
      continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...markdownFiles(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function headingHasFragment(path, fragment) {
  const decoded = decodeURIComponent(fragment).toLowerCase()
  const headings = readFileSync(path, 'utf8').match(/^#{1,6}\s+.+$/gm) ?? []
  return headings.some((heading) => {
    const text = heading
      .replace(/^#{1,6}\s+/, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_~]/g, '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s/g, '-')
    return text === decoded
  })
}

for (const sourcePath of markdownFiles(root)) {
  const source = readFileSync(sourcePath, 'utf8')
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const href = match[1].replace(/^<|>$/g, '')
    if (/^(?:[a-z]+:|#)/i.test(href)) continue
    const [withoutFragment, fragment] = href.split('#', 2)
    const localPart = withoutFragment.split('?', 1)[0]
    const targetPath = resolve(dirname(sourcePath), decodeURIComponent(localPart))
    const sourceIsAdrSurface =
      sourcePath === designPath || sourcePath.startsWith(`${adrDirectory}/`)
    const targetIsAdr =
      targetPath.startsWith(`${adrDirectory}/`) || targetPath === adrDirectory
    if (!sourceIsAdrSurface && !targetIsAdr) continue
    if (!existsSync(targetPath)) {
      errors.push(`${relative(root, sourcePath)}: broken local link ${href}`)
    } else if (
      fragment &&
      targetPath.endsWith('.md') &&
      !headingHasFragment(targetPath, fragment)
    ) {
      errors.push(`${relative(root, sourcePath)}: missing heading fragment in ${href}`)
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exitCode = 1
} else {
  console.log(`ADR structure check passed (${records.length} records)`)
}
```

</details>


---

<sub>28s</sub>

### `glob`

**docs/**/***

"docs/**/*"

```
No files matched the pattern.
```


---

<sub>29s</sub>

### `glob`

****/*.md**

"**/*.md"

```
./THIRD_PARTY_NOTICES.md
./test/fixtures/rendered.md
./test/fixtures/rendered-mmd.md
```


---

<sub>31s</sub>

### `view`

**view the file at /private/var/tmp/ws/d0fb02f3/hvir/package.json.**

/private/var/tmp/ws/d0fb02f3/hvir/package.json (lines 1-20)

<details>
<summary>20 lines</summary>

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
```

</details>


---

<sub>33s</sub>

### `glob`

****/***

"**/*" in ~

<details>
<summary>219 matches</summary>

```
[glob: 253 path(s) under /private/var/tmp/ws/d0fb02f3/home; concrete paths]
.copilot/logs/process-1789699560594-39255.log
.copilot/session-store.db
.copilot/session-store.db-shm
.copilot/session-store.db-wal
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/assets/copilot.ico
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/assets/copilot.svg
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/script/install-utils.cjs
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/Info.plist
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/Resources/Assets.car
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/Resources/icon.icns
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/prebuilds/darwin-arm64/mediaremote-adapter/mediaremote-adapter.pl
.copilot/logs/telemetry.jsonl
.copilot/session-state/b50f1402-6f6d-4301-a28c-45f39c8a9224/events.jsonl
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/animations/app-install-nudge.json.gz
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/animations/banner.json.gz
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/assets/copilot.png
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/assets/copilot_win.png
tmp/copilot-tool-output-1789699563090-1.txt
tmp/copilot-tool-output-1789699568263-2.txt
tmp/copilot-tool-output-1789699569625-3.txt
.copilot/logs/.copilot-log.lock
.copilot/session-state/b50f1402-6f6d-4301-a28c-45f39c8a9224/.workspace-fork.lock
.copilot/session-state/b50f1402-6f6d-4301-a28c-45f39c8a9224/inuse.39255.lock
Library/Caches/copilot/copilot-user-cache.json.lock
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/prebuilds/darwin-arm64/foundry_local_napi.node
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/inuse.39255.lock
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/prebuilds/darwin-arm64/cli-native.node
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/prebuilds/darwin-arm64/runtime.node
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/preloads/extension_bootstrap.mjs
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/preloads/extension_sdk_resolver.mjs
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/lib/mac/arm64/pv_recorder.node
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview-darwin-arm64/webview.darwin-arm64.node
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/cli/build.mjs
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/cli/index.mjs
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/cli/utils.mjs
Library/Application Support/Microsoft/DeveloperTools/deviceid
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/.extraction-complete
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/node_modules/adm-zip/LICENSE
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/.release-target
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/CodeResources
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/MacOS/Copilot Computer Use
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/PkgInfo
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/Copilot Computer Use.app/Contents/_CodeSignature/CodeResources
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/computer-use-mcp
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/prebuilds/darwin-arm64/copilot-runtime
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/prebuilds/darwin-arm64/mediaremote-adapter/LICENSE
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/prebuilds/darwin-arm64/mediaremote-adapter/MediaRemoteAdapter.framework/MediaRemoteAdapter
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/bash-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/c-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/cpp-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/csharp-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/css-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/go-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/html-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/java-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/javascript-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/json-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/php-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/python-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/ruby-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/rust-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/scala-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/queries/typescript-highlights.scm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/ripgrep/bin/darwin-arm64/rg
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tgrep/bin/darwin-arm64/tgrep
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/LICENSE
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/CNAME
.copilot/config.json
.copilot/session-state/b50f1402-6f6d-4301-a28c-45f39c8a9224/rewind-file-snapshots/tracking.json
.copilot/session-state/b50f1402-6f6d-4301-a28c-45f39c8a9224/workspace.yaml
.copilot/settings.json
Library/Caches/copilot/copilot-user-cache.json
Library/Caches/copilot/managed-settings/60a45b6be39b0095748bcdd191f11226f4bef4b55bd37224619b5219be750ceb.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/changelog.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/code-review.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/explore.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/rem-agent.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/research.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/rubber-duck.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/security-review.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/cloud-session-search.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/github-context-memory.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/github-context.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/session-search.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/subconscious-agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/test-sidekick-context-changed.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/test-sidekick-persistent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/test-sidekick-restart.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/sidekick/test-sidekick-trigger-once.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/definitions/task.agent.yaml
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/deps_versions.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/node_modules/adm-zip/package.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/package.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/package.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/.mcp.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/plugins/computer-use/.plugin/plugin.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/package.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/schemas/api.schema.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/schemas/session-events.schema.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview-darwin-arm64/package.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/package.json
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-bash.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-c.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-c_sharp.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-cpp.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-css.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-go.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-html.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-java.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-javascript.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-json.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-php.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-python.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-ruby.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-rust.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-scala.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-tsx.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter-typescript.wasm
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/tree-sitter.wasm
.copilot/session-state/b50f1402-6f6d-4301-a28c-45f39c8a9224/checkpoints/index.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/LICENSE.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/builtin-skills/customize-cloud-agent/SKILL.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/builtin-skills/discover-resources/SKILL.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/builtin-skills/github-pr-media/SKILL.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/builtin/customize-cloud-agent/SKILL.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/builtin/discover-resources/SKILL.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/builtin/github-pr-media/SKILL.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/canvas.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/cliVersion.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/client.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/copilotRequestHandler.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/docs/agent-author.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/docs/examples.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/docs/extensions.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/docs/factories.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/docs/factory-patterns.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/extension.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/factory.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/ffiRuntimeHost.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/generated/rpc.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/generated/session-events.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/index.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/runtimeArtifacts.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/sdkProtocolVersion.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/session.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/sessionFsProvider.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/telemetry.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/toolSet.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/types.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/README.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/catalog.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/configuration.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/coreInterop.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/model.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/modelLoadManager.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/modelVariant.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/foundryLocalManager.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/imodel.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/index.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/audioClient.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/chatClient.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/embeddingClient.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/liveAudioSession.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/liveAudioTypes.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/responsesClient.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/types.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/node_modules/adm-zip/README.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/node_modules/adm-zip/types.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/README.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/dist/types/errors.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/dist/types/index.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/dist/types/platforms.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/dist/types/pv_recorder.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/pvrecorder/node_modules/@picovoice/pvrecorder-node/dist/types/pv_recorder_status_t.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview-darwin-arm64/README.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/README.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/README.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/application.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/browser-window.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/menu.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/notification.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/tray.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/types.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/web-context.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/api/webview.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/getting-started/event-loop.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/getting-started/installation.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/getting-started/quick-start.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/guides/building-executables.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/guides/cookies-and-storage.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/guides/custom-protocols.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/guides/ipc-messaging.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/guides/menus.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/guides/multiple-windows.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/platform/android.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/platform/ios.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/platform/linux.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/platform/macos.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/docs/platform/windows.md
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/index.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/webview/node_modules/@webviewjs/webview/js-bindings.d.ts
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/app.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/extension.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/copilot-sdk/index.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/index.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/catalog.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/configuration.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/coreInterop.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/model.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/modelLoadManager.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/detail/modelVariant.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/foundryLocalManager.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/imodel.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/index.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/audioClient.js
Library/Caches/copilot/pkg/darwin-arm64/1.0.86/foundry-local-sdk/node_modules/foundry-local-sdk/dist/openai/chatClient.js
[omitted 37 path(s); see original output for full results]
[extensions: .js=52, .md=41, .ts=41, .wasm=18, .json=17, .yaml=17, [no extension]=16, .scm=16]
```

</details>


---

<sub>39s</sub>

### `create`

**create a new file at /private/var/tmp/ws/d0fb02f3/hvir/README.md.**

/private/var/tmp/ws/d0fb02f3/hvir/README.md

```
Created file /private/var/tmp/ws/d0fb02f3/hvir/README.md with 3771 characters
```


---

<sub>44s</sub>

### Copilot

I have created a comprehensive, informative, and beautifully formatted `README.md` for the **hvir** project. 

The README provides:
- A high-level overview of the advanced **Electron-based Terminal Workbench** capabilities (integrated AI agent harnesses like Claude Code, Git operations, SSH client lifecycle, diagnostics, and split workspaces).
- A breakdown of the project architecture (Main, Renderer, Preloads, Native packages, and Shared modules).
- Setup prerequisites and commands for installation, development, testing, linting, architecture checking, and executing the automated smoke-testing suite.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
