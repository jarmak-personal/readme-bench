# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `7486644c-c45d-4a88-b0bf-4fe4f7ff4cf9`  
> - **Started:** 9/22/2026, 11:55:10 PM  
> - **Duration:** 31s  
> - **Exported:** 9/22/2026, 11:55:41 PM  

---

<sub>0s</sub>

### Info

Disabled tools: fetch_copilot_cli_documentation, web_fetch

---

<sub>0s</sub>

### User

Please create a README.md for this project.

---

<sub>3s</sub>

### `bash`

**Inspect repository root and worktree**

$ pwd && git status --short && ls -la

<details>
<summary>31 lines</summary>

```
/private/var/tmp/ws/09787cd9/hvir
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 22 23:55 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:54 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:55 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:54 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:54 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 22 23:54 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 22 23:54 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 22 23:54 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:54 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 22 23:54 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 22 23:54 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 22 23:54 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 22 23:54 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 22 23:54 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 22 23:55 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 22 23:54 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 22 23:54 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:54 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 22 23:54 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 22 23:54 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 22 23:54 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 22 23:54 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 22 23:54 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 22 23:54 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 22 23:54 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 22 23:54 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 22 23:54 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 22 23:54 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>3s</sub>

### `glob`

****/{README*,package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,*.md}**

"**/{README*,package.json,pyproject.toml,Cargo.toml,go.mod,Makefile,*.md}"

<details>
<summary>6 matches</summary>

```
./packages/rename-noreplace/package.json
./scripts/project-management/package.json
./package.json
./THIRD_PARTY_NOTICES.md
./test/fixtures/rendered.md
./test/fixtures/rendered-mmd.md
```

</details>


---

<sub>3s</sub>

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

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/package.json.**

/private/var/tmp/ws/09787cd9/hvir/package.json

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

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/electron-builder.yml.**

/private/var/tmp/ws/09787cd9/hvir/electron-builder.yml

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

<sub>6s</sub>

### `bash`

**Survey source layout and project metadata**

$ git ls-files 'src/*' 'src/*/*' '.github/*' '.github/*/*' 'scripts/*' | head -140 && git remote -v && git log -1 --format='%s'

<details>
<summary>142 lines</summary>

```
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
Initial commit
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>6s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/LICENSE.**

/private/var/tmp/ws/09787cd9/hvir/LICENSE

<details>
<summary>17 lines</summary>

```
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
```

</details>


---

<sub>8s</sub>

### Copilot

I’ll check the app’s entry points and build scripts so the README describes the actual features and setup.

---

<sub>9s</sub>

### `bash`

**Identify user interface and platform files**

$ git ls-files 'src/renderer/**' | head -105; git ls-files 'src/main/**' | grep -E '(menu|index|window|workspace|ssh|settings)' | head -85; git ls-files 'build/**' | head -55

<details>
<summary>164 lines</summary>

```
src/renderer/index.html
src/renderer/src/App.tsx
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/context-menu/viewport-context-menu.ts
src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/dashboards/WebPaneStack.tsx
src/renderer/src/dashboards/use-web-pane-workspace.ts
src/renderer/src/dashboards/web-pane-diagnostics.ts
src/renderer/src/dashboards/web-pane-surface.ts
src/renderer/src/dashboards/web-pane-url.ts
src/renderer/src/dashboards/web-pane-workspace-policy.ts
src/renderer/src/development/development-performance-fixture.tsx
src/renderer/src/development/development-performance-pump.tsx
src/renderer/src/development/development-renderer-instrumentation.tsx
src/renderer/src/development/performance-measure-budget.ts
src/renderer/src/diagnostics/DiagnosticReportDialog.tsx
src/renderer/src/diagnostics/owned-capture-masks.ts
src/renderer/src/document-review/DocumentReviewControls.tsx
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx
src/renderer/src/document-review/document-review-anchor.ts
src/renderer/src/document-review/document-review-batches.ts
src/renderer/src/document-review/document-review-capture.ts
src/renderer/src/document-review/document-review-delivery-client.ts
src/renderer/src/document-review/document-review-delivery-feedback.ts
src/renderer/src/document-review/document-review-eligibility.ts
src/renderer/src/document-review/document-review-inline.ts
src/renderer/src/document-review/document-review-lifecycle.ts
src/renderer/src/document-review/document-review-model.ts
src/renderer/src/document-review/document-review-rendered.ts
src/renderer/src/document-review/document-review-selectors.ts
src/renderer/src/document-review/document-review-source.ts
src/renderer/src/document-review/document-review-types.ts
src/renderer/src/document-review/document-review-validation.ts
src/renderer/src/document-review/document-review-workspace-controller.ts
src/renderer/src/document-review/document-review-workspace.ts
src/renderer/src/document-review/index.ts
src/renderer/src/document-review/use-document-review-delivery.ts
src/renderer/src/document-review/use-document-review-interaction.ts
src/renderer/src/document-review/use-document-review-workspace.ts
src/renderer/src/git/GitBranchControls.tsx
src/renderer/src/git/GitChangesView.tsx
src/renderer/src/git/GitGraphLanes.tsx
src/renderer/src/git/GitGraphView.tsx
src/renderer/src/git/GitHistoryView.tsx
src/renderer/src/git/GitPanel.tsx
src/renderer/src/git/commit-detail-client.ts
src/renderer/src/git/commit-file-tree.ts
src/renderer/src/git/commit-message.ts
src/renderer/src/git/git-capability.ts
src/renderer/src/git/git-graph-lane-metrics.ts
src/renderer/src/git/git-graph-layout.ts
src/renderer/src/git/git-rail-model.ts
src/renderer/src/git/git-sync-coordinator.ts
src/renderer/src/git/git-sync-status.ts
src/renderer/src/git/use-git-commit-details.ts
src/renderer/src/git/use-git-rail-controller.ts
src/renderer/src/git/use-git-workspace.ts
src/renderer/src/git/virtual-range.ts
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/health/use-diagnostic-evidence.ts
src/renderer/src/health/use-workbench-health.ts
src/renderer/src/hvir.d.ts
src/renderer/src/layout/PaneResizer.tsx
src/renderer/src/layout/split-layout-policy.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/main.tsx
src/renderer/src/path-copy/PathCopyMenu.tsx
src/renderer/src/path-copy/path-copy.ts
src/renderer/src/path-copy/use-path-copy-menu.ts
src/renderer/src/scrollbars/scrollbar-presentation.ts
src/renderer/src/sessions/SessionsApplicationDestination.tsx
src/renderer/src/sessions/SessionsCollectionToolbar.tsx
src/renderer/src/sessions/SessionsOverview.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
src/renderer/src/sessions/SessionsOverviewNotice.tsx
src/renderer/src/sessions/SessionsTerminalDetail.tsx
src/renderer/src/sessions/sessions-overview-model.ts
src/renderer/src/sessions/sessions-projection-coordinator.ts
src/renderer/src/sessions/sessions-renderer-observation.ts
src/renderer/src/sessions/sessions-terminal-detail-controller.ts
src/renderer/src/sessions/sessions-terminal-overlay.ts
src/renderer/src/sessions/sessions-terminal-surface.ts
src/renderer/src/sessions/use-sessions-foreground.ts
src/renderer/src/sessions/use-sessions-terminal-detail.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
src/renderer/src/settings/HarnessProfileCommandFields.tsx
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/HarnessProfileEditor.tsx
src/renderer/src/settings/HarnessProfileOverlays.tsx
src/renderer/src/settings/HarnessProfilesSettings.tsx
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/settings/SettingsSection.tsx
src/renderer/src/settings/SettingsSectionNavigation.tsx
src/renderer/src/settings/TerminalThemeGallery.tsx
src/renderer/src/settings/harness-argument-editor.ts
src/renderer/src/settings/harness-profile-draft.ts
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/settings/harness-profile-request-policy.ts
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/sections/AppearanceSettings.tsx
src/main/document-review/index.ts
src/main/filename-search/index.ts
src/main/index.ts
src/main/project-file-operations/index.ts
src/main/project-folder-picker/index.ts
src/main/project-host/index.ts
src/main/project-host/renderer-ssh-prompter.ts
src/main/project-host/ssh-abort.ts
src/main/project-host/ssh-auth.ts
src/main/project-host/ssh-client-lifecycle.ts
src/main/project-host/ssh-config.ts
src/main/project-host/ssh-exclusive-create.ts
src/main/project-host/ssh-file-access.ts
src/main/project-host/ssh-host-options.ts
src/main/project-host/ssh-host-trust.ts
src/main/project-host/ssh-host.ts
src/main/project-host/ssh-identity-source.ts
src/main/project-host/ssh-project-file-transfer.ts
src/main/project-host/ssh-text-prefix.ts
src/main/project-host/ssh-transport-pool.ts
src/main/project-host/ssh-watch-service.ts
src/main/smoke/app-settings.ts
src/main/smoke/harness-settings-layout.ts
src/main/smoke/harness-settings-visual.ts
src/main/smoke/index.ts
src/main/smoke/terminal-context-menu.ts
src/main/smoke/workspace-close.ts
src/main/smoke/workspace-remote.ts
src/main/terminal/terminal-workspace-move-coordinator.ts
src/main/window/electron-renderer-document-lifecycle.ts
src/main/window/electron-renderer-recovery.ts
src/main/window/electron-window-manager.ts
src/main/window/renderer-recovery-monitor.ts
src/main/window/window-health-tracker.ts
src/main/window/window-policy.ts
src/main/workspace-activity.ts
src/main/workspace-cleanup.ts
src/main/workspace-coordinator.ts
src/main/workspace-removal-coordinator.ts
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
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/09787cd9/hvir/scripts/check-terminal-runtime.mts

<details>
<summary>127 lines</summary>

```
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
    ),
  )
  if (!hasCustomLinkProviderPriorityAndForcedRender(runtime.Terminal.prototype)) {
    missing.push('custom link-provider priority and forced render')
  }
  if (missing.length === 0) return

  throw new Error(
    `Installed dependencies do not match this checkout: ghostty-web is missing required terminal runtime capabilities (${missing.join(', ')}). ${RECOVERY}`,
  )
}

export async function verifyInstalledTerminalWasmEvidence(
  readWasmBytes: ReadInstalledWasmBytes = readInstalledWasmBytes,
): Promise<void> {
  let actualBytes: number
  try {
    actualBytes = await readWasmBytes()
  } catch (cause) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm could not be inspected. ${RECOVERY}`,
      { cause },
    )
  }
  const expectedBytes = GHOSTTY_TERMINAL_CAPABILITY_PROFILE.artifact.wasmBytes
  if (actualBytes === expectedBytes) return
  throw new Error(
    `Installed dependencies do not match this checkout: ghostty-web/ghostty-vt.wasm is ${actualBytes} bytes; the reviewed capability profile requires ${expectedBytes}. ${RECOVERY}`,
  )
}

export async function verifyTerminalRuntimeContract(
  loadRuntime: LoadTerminalRuntime = async () => import('ghostty-web'),
): Promise<void> {
  await verifyInstalledTerminalWasmEvidence()
  let runtime: unknown
  try {
    runtime = await loadRuntime()
  } catch (cause) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web could not be loaded. ${RECOVERY}`,
      { cause },
    )
  }
  const terminal = Reflect.get(Object(runtime), 'Terminal') as unknown
  const parser = Reflect.get(Object(runtime), 'GhosttyTerminal') as unknown
  if (!isTerminalConstructor(terminal) || !isTerminalConstructor(parser)) {
    throw new Error(
      `Installed dependencies do not match this checkout: ghostty-web does not export the required Terminal and GhosttyTerminal constructors. ${RECOVERY}`,
    )
  }
  assertTerminalRuntimeContract({ Terminal: terminal, GhosttyTerminal: parser })
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await verifyTerminalRuntimeContract()
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/.github/workflows/ci.yml.**

/private/var/tmp/ws/09787cd9/hvir/.github/workflows/ci.yml (lines 1-150)

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

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/scripts/install-git-hooks.sh.**

/private/var/tmp/ws/09787cd9/hvir/scripts/install-git-hooks.sh

<details>
<summary>12 lines</summary>

```
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
```

</details>


---

<sub>9s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/09787cd9/hvir/electron.vite.config.ts (lines 1-115)

<details>
<summary>111 lines</summary>

```
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
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/App.tsx (lines 1-215)

<details>
<summary>215 lines</summary>

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
  } = web
  const changedCount = gitChanges?.workingTree.length ?? 0
  const changedCountLabel = gitChanges?.workingTreeLimited
    ? `${GIT_CHANGE_DISPLAY_LIMIT.toLocaleString()}+`
    : changedCount.toLocaleString()
  const applyProjectViewState = useCallback(
    (state: ProjectState): void => {
      switchViewerWorkspace(state.root, state.connectionState === 'connected')
      if (!applyWebProjectState(state, rootRef.current)) return
      resetGitGraphRef.current()
      setGitChanges(undefined)
    },
    [applyWebProjectState, switchViewerWorkspace],
  )
  const session = useProjectSession({
    composerSubmitMode: settings.composerSubmitMode,
    onProjectState: applyProjectViewState,
    onReloadFiles: reloadCleanFiles,
    onWatchEvent: reviewWatch.handle,
    isIgnoreRulePath: isGitIgnoreRulePath,
  })
  const accept = session.acceptProjectState
  const {
    projectState,
    root,
    activeWorkspace,
    connectionState,
    rootError,
    refreshHosts,
  } = session
  const documentReview = review.useReviewWorkspace(activeWorkspace, reviewWatch)
  const { watch: watchVersion, ignored: ignoredRefreshVersion } = session.versions
  const { content: contentVersion, git: gitVersion } = session.versions
  useRendererReady(Boolean(root))
  const watchInterests = useProjectWatchInterests({
    root,
    connected: connectionState === 'connected',
    missing: activeWorkspace?.missing,
    openPaths: viewer.openWatchPaths,
    reviewPaths: documentReview.watchPaths,
    dependencyPaths: viewer.renderedWatchPaths,
  })
  const gitEnabled = workspaceGitEnabled(activeWorkspace)
  const terminalWorkspaces = useTerminalWorkspaceRuntime({
    projectState,
    acceptProjectState: session.acceptProjectState,
    forgetWebViews: forgetTerminalViews,
    acknowledgeWorkspaces: session.acknowledgeWorkspaces,
    onError: session.reportError,
  })
  const layout = useWorkbenchLayout({
    root,
    gitAvailable: gitEnabled,
    workspaceMissing: Boolean(activeWorkspace?.missing),
  })
  const {
    workbenchRef,
    viewerGroupsRef,
    railMode,
    setRailMode,
    terminalMode,
    setTerminalMode,
    toggleTerminalFocus,
    restoreViewer,
    treeCollapsed,
    setTreeCollapsed,
    setTreeWidth,
    setTerminalHeight,
    setViewerPrimaryWidth,
    resetViewerPrimaryWidth,
    focusTerminal: showTerminal,
  } = layout
  const git = useGitWorkspace({
    root,
    hasDirtyViewerTabs: () => tabs.some((tab) => tab.dirty),
    acceptProjectState: session.acceptProjectState,
    refreshContent: session.refreshWorkspaceContent,
    refreshGit: session.refreshGit,
    activateViewer: () => {
      focusViewerPane('primary')
      restoreViewer()
    },
    deactivateWebPane: () => setWebViewActive(false),
  })
  const {
    graphOpen: gitGraphOpen,
    graphActive: gitGraphActive,
    graphActiveRef: gitGraphActiveRef,
    graphRequest: gitGraphRequest,
    openGraph: openGitGraph,
    activateGraph: activateGitGraph,
    closeGraph: closeGitGraph,
    resetGraph: resetGitGraph,
    deactivateGraph: deactivateGitGraph,
    switchBranch: switchGitBranch,
```

</details>


---

<sub>11s</sub>

### `bash`

**Find product capabilities and project URL**

$ git ls-files 'src/renderer/src/**/*' | grep -E '(workspace|sidebar|terminal|viewer|settings/sections|shell)' | head -145; git ls-files 'src/main/**/*' | grep -E '(menu|project-host|open-project)' | head -65; git remote -v

<details>
<summary>168 lines</summary>

```
src/renderer/src/dashboards/use-web-pane-workspace.ts
src/renderer/src/dashboards/web-pane-workspace-policy.ts
src/renderer/src/document-review/document-review-workspace-controller.ts
src/renderer/src/document-review/document-review-workspace.ts
src/renderer/src/document-review/use-document-review-workspace.ts
src/renderer/src/git/use-git-workspace.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/sessions/sessions-terminal-detail-controller.ts
src/renderer/src/sessions/sessions-terminal-overlay.ts
src/renderer/src/sessions/sessions-terminal-surface.ts
src/renderer/src/sessions/use-sessions-terminal-detail.ts
src/renderer/src/settings/sections/AppearanceSettings.tsx
src/renderer/src/settings/sections/GitSettings.tsx
src/renderer/src/settings/sections/KeybindingsSettings.tsx
src/renderer/src/settings/sections/TerminalSettings.tsx
src/renderer/src/settings/sections/TypographyFontField.tsx
src/renderer/src/styles/sessions-terminal-detail.css
src/renderer/src/styles/shell.css
src/renderer/src/styles/terminal-context-menu.css
src/renderer/src/styles/terminal-list.css
src/renderer/src/styles/terminal-move.css
src/renderer/src/styles/terminal-pane.css
src/renderer/src/styles/terminal-search.css
src/renderer/src/styles/terminal-shell.css
src/renderer/src/styles/terminal-theme-gallery.css
src/renderer/src/styles/viewer-content.css
src/renderer/src/styles/viewer-find.css
src/renderer/src/styles/viewer-tabs.css
src/renderer/src/styles/viewer-workload.css
src/renderer/src/styles/workspace-catalog.css
src/renderer/src/styles/workspace-state.css
src/renderer/src/terminal/TerminalContextMenu.tsx
src/renderer/src/terminal/TerminalContextMeter.tsx
src/renderer/src/terminal/TerminalDeck.tsx
src/renderer/src/terminal/TerminalMoveDialog.tsx
src/renderer/src/terminal/TerminalRail.tsx
src/renderer/src/terminal/TerminalRailCompact.tsx
src/renderer/src/terminal/TerminalRecoveryDialog.tsx
src/renderer/src/terminal/TerminalSearch.tsx
src/renderer/src/terminal/TerminalSessionRuntimes.tsx
src/renderer/src/terminal/TerminalView.tsx
src/renderer/src/terminal/TerminalWorkspace.tsx
src/renderer/src/terminal/TerminalWorkspaceCollection.tsx
src/renderer/src/terminal/TerminalWorkspaceControls.tsx
src/renderer/src/terminal/TerminalWorkspaceDialogs.tsx
src/renderer/src/terminal/effect-generation.ts
src/renderer/src/terminal/generated-terminal-theme-catalog.ts
src/renderer/src/terminal/ghostty-terminal-events.ts
src/renderer/src/terminal/ghostty-terminal-file-paste.ts
src/renderer/src/terminal/ghostty-terminal-fit.ts
src/renderer/src/terminal/ghostty-terminal-keyboard.ts
src/renderer/src/terminal/ghostty-terminal-pane.ts
src/renderer/src/terminal/harness-launch-menu.ts
src/renderer/src/terminal/terminal-attention.ts
src/renderer/src/terminal/terminal-clipboard-osc.ts
src/renderer/src/terminal/terminal-clipboard-write.ts
src/renderer/src/terminal/terminal-clipboard.ts
src/renderer/src/terminal/terminal-color-schema.mts
src/renderer/src/terminal/terminal-context-menu-position.ts
src/renderer/src/terminal/terminal-context-menu-target.ts
src/renderer/src/terminal/terminal-event-router.ts
src/renderer/src/terminal/terminal-file-link.ts
src/renderer/src/terminal/terminal-fit.ts
src/renderer/src/terminal/terminal-fork-policy.ts
src/renderer/src/terminal/terminal-palette.ts
src/renderer/src/terminal/terminal-pane-event-coordinator.ts
src/renderer/src/terminal/terminal-pane-factory.ts
src/renderer/src/terminal/terminal-pane.ts
src/renderer/src/terminal/terminal-probe-policy.ts
src/renderer/src/terminal/terminal-profile-recovery.ts
src/renderer/src/terminal/terminal-recovery-planner.ts
src/renderer/src/terminal/terminal-runtime-interactions.ts
src/renderer/src/terminal/terminal-runtime-launch.ts
src/renderer/src/terminal/terminal-runtime-live-settings.ts
src/renderer/src/terminal/terminal-runtime-options.ts
src/renderer/src/terminal/terminal-runtime-presentation.ts
src/renderer/src/terminal/terminal-runtime-registry.ts
src/renderer/src/terminal/terminal-runtime.ts
src/renderer/src/terminal/terminal-search-controller.ts
src/renderer/src/terminal/terminal-semantic-regions.ts
src/renderer/src/terminal/terminal-sessions-surface-owner.ts
src/renderer/src/terminal/terminal-split-persistence.ts
src/renderer/src/terminal/terminal-surface-attachment.ts
src/renderer/src/terminal/terminal-theme-catalog.ts
src/renderer/src/terminal/terminal-wheel.ts
src/renderer/src/terminal/terminal-workspace-model.ts
src/renderer/src/terminal/terminal-workspace-runtime-owner.ts
src/renderer/src/terminal/use-new-worktree-move-badge.ts
src/renderer/src/terminal/use-terminal-attention-controller.ts
src/renderer/src/terminal/use-terminal-attention.ts
src/renderer/src/terminal/use-terminal-context-menu.ts
src/renderer/src/terminal/use-terminal-launch-menu-layout.ts
src/renderer/src/terminal/use-terminal-pane-controller.ts
src/renderer/src/terminal/use-terminal-persistence.ts
src/renderer/src/terminal/use-terminal-profiles.ts
src/renderer/src/terminal/use-terminal-recovery.ts
src/renderer/src/terminal/use-terminal-session-commands.ts
src/renderer/src/terminal/use-terminal-workspace-move.ts
src/renderer/src/terminal/use-terminal-workspace-runtime.ts
src/renderer/src/terminal/use-terminal-workspace-transfer.ts
src/renderer/src/viewer/DiffView.tsx
src/renderer/src/viewer/FileViewer.tsx
src/renderer/src/viewer/FindControl.tsx
src/renderer/src/viewer/GoToLineControl.tsx
src/renderer/src/viewer/LargeFileView.tsx
src/renderer/src/viewer/MarkdownFragment.tsx
src/renderer/src/viewer/RenderedView.tsx
src/renderer/src/viewer/RepositoryImageView.tsx
src/renderer/src/viewer/SourceView.tsx
src/renderer/src/viewer/TabStrip.tsx
src/renderer/src/viewer/code-scroll-anchor.ts
src/renderer/src/viewer/codemirror-find-target.ts
src/renderer/src/viewer/csv-parser.ts
src/renderer/src/viewer/csv-protocol.ts
src/renderer/src/viewer/csv.worker.ts
src/renderer/src/viewer/diff-policy.ts
src/renderer/src/viewer/dom-find-target.ts
src/renderer/src/viewer/external-document-context.ts
src/renderer/src/viewer/external-document-tabs.ts
src/renderer/src/viewer/highlight-protocol.ts
src/renderer/src/viewer/highlight-request.ts
src/renderer/src/viewer/highlight-worker.ts
src/renderer/src/viewer/highlight.worker.ts
src/renderer/src/viewer/json-protocol.ts
src/renderer/src/viewer/json.worker.ts
src/renderer/src/viewer/markdown-client.ts
src/renderer/src/viewer/markdown-extensions.ts
src/renderer/src/viewer/markdown-renderer.ts
src/renderer/src/viewer/markdown-repository-images.ts
src/renderer/src/viewer/markdown.worker.ts
src/renderer/src/viewer/render-protocol.ts
src/renderer/src/viewer/rendered-link-handler.ts
src/renderer/src/viewer/rendered-position.ts
src/renderer/src/viewer/retained-viewer-workspace-cache.ts
src/renderer/src/viewer/shiki-grammar-registry.ts
src/renderer/src/viewer/shiki-language-catalog.ts
src/renderer/src/viewer/shiki-language-names.ts
src/renderer/src/viewer/source-blame-gutter.ts
src/renderer/src/viewer/source-coordinate.ts
src/renderer/src/viewer/source-highlighting.ts
src/renderer/src/viewer/structured-data.ts
src/renderer/src/viewer/tab-state.ts
src/renderer/src/viewer/use-diff-inputs.ts
src/renderer/src/viewer/use-source-blame.ts
src/renderer/src/viewer/use-viewer-path-lifecycle.ts
src/main/project-host/electron-project-reveal.ts
src/main/project-host/electron-project-trash.ts
src/main/project-host/index.ts
src/main/project-host/local-host.ts
src/main/project-host/project-host-catalog.ts
src/main/project-host/project-host.ts
src/main/project-host/renderer-ssh-prompter.ts
src/main/project-host/ssh-abort.ts
src/main/project-host/ssh-auth.ts
src/main/project-host/ssh-client-lifecycle.ts
src/main/project-host/ssh-config.ts
src/main/project-host/ssh-exclusive-create.ts
src/main/project-host/ssh-file-access.ts
src/main/project-host/ssh-host-options.ts
src/main/project-host/ssh-host-trust.ts
src/main/project-host/ssh-host.ts
src/main/project-host/ssh-identity-source.ts
src/main/project-host/ssh-project-file-transfer.ts
src/main/project-host/ssh-text-prefix.ts
src/main/project-host/ssh-transport-pool.ts
src/main/project-host/ssh-watch-service.ts
src/main/smoke/terminal-context-menu.ts
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/settings/sections/AppearanceSettings.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/settings/sections/AppearanceSettings.tsx (lines 1-95)

<details>
<summary>93 lines</summary>

```
import type { ReactElement } from 'react'

import type { AppTheme } from '../../theme'
import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft } from '../settings-draft'
import {
  MAX_INTERFACE_SCALE,
  MAX_TERMINAL_TEXT_SIZE,
  MIN_INTERFACE_SCALE,
  MIN_TERMINAL_TEXT_SIZE,
} from '../typography-settings'
import { TypographyFontField } from './TypographyFontField'
import { TerminalThemeGallery } from '../TerminalThemeGallery'

export function AppearanceSettings({
  draft,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  const previewScale = Number(draft.interfaceScale)
  const interfacePreviewScale = Number.isFinite(previewScale) ? previewScale : 1
  const previewTerminalTextSize = Number(draft.terminalTextSize)
  return (
    <SettingsSection
      section="appearance"
      title="Appearance"
      description="Choose how the workbench and its terminals present your workspace."
    >
      <div className="settings-section-scroll settings-fields">
        <label htmlFor="settings-app-theme">
          <span>App theme</span>
          <select
            id="settings-app-theme"
            value={draft.theme}
            onChange={(event) => onChange('theme', event.currentTarget.value as AppTheme)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <label htmlFor="settings-terminal-theme">
          <span>Terminal colors</span>
          <select
            id="settings-terminal-theme"
            value={draft.terminalTheme}
            onChange={(event) =>
              onChange(
                'terminalTheme',
                event.currentTarget.value as SettingsDraft['terminalTheme'],
              )
            }
          >
            <option value="app">Follow app theme</option>
            <option value="dark">Always dark</option>
            <option value="light">Always light</option>
          </select>
        </label>
        <TerminalThemeGallery
          lightThemeId={draft.terminalLightThemeId}
          darkThemeId={draft.terminalDarkThemeId}
          onLightTheme={(id) => onChange('terminalLightThemeId', id)}
          onDarkTheme={(id) => onChange('terminalDarkThemeId', id)}
        />
        <TypographyFontField
          id="settings-interface-font"
          label="Interface font"
          kind="interface"
          mode={draft.interfaceFontMode}
          family={draft.interfaceFontFamily}
          previewText="Harness · View · Interact · Respond"
          previewSize={`calc(14px * ${interfacePreviewScale})`}
          onMode={(mode) => onChange('interfaceFontMode', mode)}
          onFamily={(family) => onChange('interfaceFontFamily', family)}
        />
        <TypographyFontField
          id="settings-monospace-font"
          label="Monospace font"
          kind="monospace"
          mode={draft.monospaceFontMode}
          family={draft.monospaceFontFamily}
          previewText="const hvir = ['view', 'terminal', 'git']"
          previewSize={`${Number.isFinite(previewTerminalTextSize) ? previewTerminalTextSize : 13}px`}
          onMode={(mode) => onChange('monospaceFontMode', mode)}
          onFamily={(family) => onChange('monospaceFontFamily', family)}
        />
        <label htmlFor="settings-interface-scale">
          <span>Interface scale</span>
          <span className="settings-slider">
            <input
              id="settings-interface-scale"
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/.githooks/pre-push.**

/private/var/tmp/ws/09787cd9/hvir/.githooks/pre-push

<details>
<summary>18 lines</summary>

```
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
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/workspaces/ProjectsBar.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/workspaces/ProjectsBar.tsx (lines 1-200)

<details>
<summary>197 lines</summary>

```
import { useEffect, useRef, useState, type ReactElement } from 'react'

import {
  displayHostPath,
  type ProjectState,
  type RegisteredProjectState,
  type HostWatchTier,
  type WorkspaceState,
  type WorkspaceClosePlan,
} from '../../../shared'
import { RemoteConnectionBadge } from './ConnectionStatus'
import { connectionStateLabel } from './connection-status'
import type { WorkspaceAttentionRollups } from './project-session-model'
import {
  aggregateActionableWorkspaceAttention,
  aggregateWorkingWorkspaceTerminals,
  workspaceActionableAttention,
} from './workspace-attention'
import type { AppTheme } from '../theme'
import { ConfirmationDialog } from '../workbench/ConfirmationDialog'
import {
  closeOnMiddleClick,
  guardMiddleClickClosePointerDown,
} from '../workbench/middle-click-close'
import { WorkbenchHealthControl } from '../health/WorkbenchHealthControl'
import { ClosedWorktreesDialog, CloseWorkspaceDialog } from './WorkspaceCatalogDialogs'

interface ProjectsBarProps {
  readonly state: ProjectState
  readonly rollups: WorkspaceAttentionRollups
  readonly busy: boolean
  readonly onAdd: () => void
  readonly onSwitch: (projectId: string, workspaceId: string) => void
  readonly onRefresh: (projectId: string) => void
  readonly onCloseProject: (projectId: string) => void
  readonly onPrune: (projectId: string) => void
  readonly onDismiss: (projectId: string, workspaceId: string) => void
  readonly onPlanCloseWorkspace: (
    projectId: string,
    workspaceId: string,
  ) => Promise<WorkspaceClosePlan | undefined>
  readonly onCloseWorkspace: (
    projectId: string,
    workspaceId: string,
    plan: WorkspaceClosePlan,
    terminateTerminals: boolean,
  ) => void
  readonly onReopenWorkspace: (projectId: string, workspaceId: string) => void
  readonly watchTier: HostWatchTier
  readonly statusError?: string
  readonly onChangeConnection: () => void
  readonly onDisconnect: () => void
  readonly onReconnect: () => void
  readonly theme: AppTheme
  readonly onTheme: (theme: AppTheme) => void
  readonly onSettings: () => void
  readonly sessionsActive: boolean
  readonly onSessions: () => void
}

export function ProjectsBar({
  state,
  rollups,
  busy,
  onAdd,
  onSwitch,
  onRefresh,
  onCloseProject,
  onPrune,
  onDismiss,
  onPlanCloseWorkspace,
  onCloseWorkspace,
  onReopenWorkspace,
  watchTier,
  statusError,
  onChangeConnection,
  onDisconnect,
  onReconnect,
  theme,
  onTheme,
  onSettings,
  sessionsActive,
  onSessions,
}: ProjectsBarProps): ReactElement {
  const [pruneProjectId, setPruneProjectId] = useState<string>()
  const [closeProjectId, setCloseProjectId] = useState<string>()
  const [catalogProjectId, setCatalogProjectId] = useState<string>()
  const [planningWorkspaceId, setPlanningWorkspaceId] = useState<string>()
  const [closeWorkspaceRequest, setCloseWorkspaceRequest] = useState<{
    readonly projectId: string
    readonly workspaceId: string
    readonly plan: WorkspaceClosePlan
  }>()
  const [connectionMenu, setConnectionMenu] = useState<{
    readonly projectId: string
    readonly left: number
    readonly top: number
  }>()
  const connectionMenuRef = useRef<HTMLElement>(null)
  const activeProject = state.projects.find(
    (project) => project.id === state.activeProjectId,
  )
  const prunable =
    activeProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const openWorkspaces =
    activeProject?.workspaces.filter((workspace) => !workspace.closed) ?? []
  const closedWorkspaces =
    activeProject?.workspaces.filter((workspace) => workspace.closed) ?? []
  // A single-checkout project has nothing to switch between; reclaim the row.
  // Errors and prune prompts still force the bar because it is their only home.
  const showWorkspacesBar =
    activeProject !== undefined &&
    (openWorkspaces.length > 1 ||
      closedWorkspaces.length > 0 ||
      Boolean(statusError) ||
      prunable.length > 0)
  const pruneProject = state.projects.find((project) => project.id === pruneProjectId)
  const closeProject = state.projects.find((project) => project.id === closeProjectId)
  const catalogProject = state.projects.find((project) => project.id === catalogProjectId)
  const catalogWorkspaces =
    catalogProject?.workspaces.filter((workspace) => workspace.closed) ?? []
  const closeWorkspace = closeWorkspaceRequest
    ? state.projects
        .find((project) => project.id === closeWorkspaceRequest.projectId)
        ?.workspaces.find(
          (workspace) => workspace.id === closeWorkspaceRequest.workspaceId,
        )
    : undefined
  const pruneTargets =
    pruneProject?.workspaces.filter(
      (workspace) => workspace.prunableReason !== undefined,
    ) ?? []
  const connectionProject =
    activeProject?.id === connectionMenu?.projectId ? activeProject : undefined
  useEffect(() => {
    setConnectionMenu((current) =>
      current && current.projectId !== state.activeProjectId ? undefined : current,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    setCatalogProjectId((current) =>
      current === state.activeProjectId ? current : undefined,
    )
    setCloseWorkspaceRequest((current) =>
      current?.projectId === state.activeProjectId ? current : undefined,
    )
  }, [state.activeProjectId])
  useEffect(() => {
    if (!connectionMenu) return
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setConnectionMenu(undefined)
    }
    window.addEventListener('keydown', handleKeyDown)
    connectionMenuRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [connectionMenu])
  const canCloseWorkspace = (workspace: WorkspaceState): boolean =>
    !busy &&
    !workspace.missing &&
    workspace.id !== state.activeWorkspaceId &&
    planningWorkspaceId !== workspace.id
  const requestWorkspaceClose = (projectId: string, workspace: WorkspaceState): void => {
    if (!canCloseWorkspace(workspace)) return
    setPlanningWorkspaceId(workspace.id)
    void onPlanCloseWorkspace(projectId, workspace.id)
      .then((plan) => {
        if (!plan) return
        if (plan.terminalCount > 0) {
          setCloseWorkspaceRequest({
            projectId,
            workspaceId: workspace.id,
            plan,
          })
        } else {
          onCloseWorkspace(projectId, workspace.id, plan, false)
        }
      })
      .finally(() => setPlanningWorkspaceId(undefined))
  }
  return (
    <>
      <header className="projects-shell">
        <nav
          className="projects-bar"
          aria-label="Projects"
          data-diagnostic-capture="project-navigation"
        >
          <button
            type="button"
            className={`sessions-destination${sessionsActive ? ' active' : ''}`}
            aria-current={sessionsActive ? 'page' : undefined}
            onClick={onSessions}
          >
            Sessions
          </button>
          {state.projects.map((project) => {
            const active = !sessionsActive && project.id === state.activeProjectId
            const remote = project.registeredRoot.hostId !== 'local'
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 1-205)

<details>
<summary>192 lines</summary>

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
    return () => void folderPicker.close(pickerId).catch(() => undefined)
  }, [folderPicker, pickerId])

  useEffect(() => {
    if (stage === 'folder' && !busy && newFolderName === undefined) {
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/viewer/FileViewer.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/viewer/FileViewer.tsx (lines 1-125)

<details>
<summary>121 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import {
  basenameHostPath,
  canRender,
  renderedFileType,
  type DiffBase,
  type ViewMode,
  type GitBlameRun,
  type HostPath,
} from '../../../shared'
import { DiffView } from './DiffView'
import { FindControl } from './FindControl'
import { GoToLineControl } from './GoToLineControl'
import { RenderedView } from './RenderedView'
import { SourceView } from './SourceView'
import { LargeFileView } from './LargeFileView'
import { useSourceBlame } from './use-source-blame'
import { formatViewerBytes } from './viewer-byte-format'
import type { SourceCoordinate } from './source-coordinate'
import type {
  ViewerDocumentPosition,
  ViewerNavigationPosition,
  ViewerTab,
} from './tab-state'
import type { RegisterViewerCommandTarget } from './viewer-command-targets'
import {
  viewerFindUnavailable,
  type RegisterViewerFindTarget,
  type ViewerFindTarget,
} from './viewer-find'
import type { ViewerPositionCapture } from './viewer-position'
import {
  canUseInteractiveSource,
  sourcePreview,
  SOURCE_INTERACTIVE_BYTE_LIMIT,
} from './viewer-workload-policy'
import {
  DocumentReviewChrome,
  DocumentReviewToolbar,
} from '../document-review/DocumentReviewControls'
import { DocumentReviewInlineProvider } from '../document-review/DocumentReviewInlineSurface'
import {
  useDocumentReviewInteraction,
  type DocumentReviewDocumentProjection,
  type DocumentReviewWorkspaceBinding,
} from '../document-review/use-document-review-interaction'

interface FileViewerProps {
  readonly tab?: ViewerTab
  readonly gitRefreshVersion: number
  readonly onMode: (mode: ViewMode, position?: ViewerDocumentPosition) => void
  readonly onDiffBase: (base: DiffBase) => void
  readonly onContent: (content: string) => void
  readonly onSave: () => void
  readonly onReload: () => void
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly onNavigationHandled: (serial: number) => void
  readonly registerCommands: RegisterViewerCommandTarget
  readonly onOpenPath: (path: HostPath) => void
  readonly onRenderedDependencies: (tabId: string, paths: readonly HostPath[]) => void
  readonly documentReview?: DocumentReviewWorkspaceBinding
}

export function FileViewer({
  tab,
  gitRefreshVersion,
  onMode,
  onDiffBase,
  onContent,
  onSave,
  onReload,
  onPosition,
  onNavigationHandled,
  registerCommands,
  onOpenPath,
  onRenderedDependencies,
  documentReview,
}: FileViewerProps): ReactElement {
  const [showBlame, setShowBlame] = useState(false)
  const [modeControlExpanded, setModeControlExpanded] = useState(false)
  const [manualNavigation, setManualNavigation] = useState<ViewerNavigationPosition>()
  const [findTarget, setFindTarget] = useState<ViewerFindTarget>()
  const [findRequest, setFindRequest] = useState<number>()
  const [goToLineRequest, setGoToLineRequest] = useState<number>()
  const manualNavigationSerial = useRef(0)
  const commandSerial = useRef(0)
  const modeControlRef = useRef<HTMLDivElement>(null)
  const tabId = tab?.id
  const currentPath = tab?.path
  const blameMode = tab?.externalWorkspaceRoot ? undefined : tab?.mode
  const positionCapture = useRef<(() => ViewerDocumentPosition) | undefined>(undefined)
  const binaryImage = Boolean(tab?.file?.binary && renderedFileType(tab.path) === 'image')
  const boundedPreview = Boolean(
    tab?.file && tab.file.size > SOURCE_INTERACTIVE_BYTE_LIMIT,
  )
  const navigationContent =
    tab?.file && !tab.file.binary
      ? boundedPreview
        ? sourcePreview(tab.file.content)
        : tab.file.content
      : undefined
  const documentRefreshVersion = tab?.refresh?.version ?? 0
  const { blame, blameStatus } = useSourceBlame(
    currentPath,
    blameMode,
    showBlame,
    documentRefreshVersion,
    gitRefreshVersion,
  )

  const registerFindTarget: RegisterViewerFindTarget = useCallback((target) => {
    setFindTarget(target)
    let active = true
    return () => {
      if (!active) return
      active = false
      setFindTarget((current) => (current === target ? undefined : current))
    }
  }, [])

  const reportRenderedDependencies = useCallback(
    (paths: readonly HostPath[]): void => {
      if (tabId) onRenderedDependencies(tabId, paths)
    },
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/settings/sections/TerminalSettings.tsx (lines 1-95)

<details>
<summary>93 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft, SettingsDraftValidation } from '../settings-draft'

export function TerminalSettings({
  draft,
  validation,
  onChange,
  onComposerSubmitMode,
}: {
  readonly draft: SettingsDraft
  readonly validation?: Exclude<SettingsDraftValidation, { readonly valid: true }>
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
  readonly onComposerSubmitMode: (enabled: boolean) => void
}): ReactElement {
  const idleError = validation?.fieldId === 'settings-idle-threshold'
  return (
    <SettingsSection
      section="terminal"
      title="Terminal"
      description="Control message submission, attention timing, and startup recovery."
    >
      <div className="settings-section-scroll settings-fields">
        <fieldset className="settings-fieldset">
          <legend>Presentation</legend>
          <label htmlFor="settings-terminal-cursor-shape">
            <span>Cursor shape</span>
            <select
              id="settings-terminal-cursor-shape"
              value={draft.terminalCursorShape}
              onChange={(event) =>
                onChange(
                  'terminalCursorShape',
                  event.currentTarget.value as SettingsDraft['terminalCursorShape'],
                )
              }
            >
              <option value="block">Block</option>
              <option value="hollow-block">Hollow block</option>
              <option value="bar">Bar</option>
              <option value="underline">Underline</option>
            </select>
          </label>
          <label htmlFor="settings-terminal-cursor-blink">
            <span>Cursor blinking</span>
            <span className="settings-checkbox-copy">
              <select
                id="settings-terminal-cursor-blink"
                value={draft.terminalCursorBlink}
                onChange={(event) =>
                  onChange(
                    'terminalCursorBlink',
                    event.currentTarget.value as SettingsDraft['terminalCursorBlink'],
                  )
                }
              >
                <option value="terminal">Terminal-controlled</option>
                <option value="blinking">Blinking default</option>
                <option value="steady">Steady default</option>
              </select>
              <small>
                Applications can still request their own cursor. Terminal-controlled also
                follows the terminal's DEC blinking mode; explicit defaults do not.
              </small>
            </span>
          </label>
          <label htmlFor="settings-terminal-ligatures">
            <span>Font ligatures</span>
            <span className="settings-checkbox-copy">
              <span className="settings-checkbox-control">
                <input
                  id="settings-terminal-ligatures"
                  type="checkbox"
                  checked={draft.terminalLigatures}
                  onChange={(event) =>
                    onChange('terminalLigatures', event.currentTarget.checked)
                  }
                />
                Enable compatible terminal line shaping
              </span>
              <small>
                Shape compatible terminal cells as line runs. Cell positions, selection,
                and copying remain unchanged.
              </small>
            </span>
          </label>
        </fieldset>
        <label className="settings-checkbox">
          <span>Message submission</span>
          <span className="settings-checkbox-copy">
            <span className="settings-checkbox-control">
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/main/project-host/ssh-config.ts.**

/private/var/tmp/ws/09787cd9/hvir/src/main/project-host/ssh-config.ts (lines 1-105)

<details>
<summary>46 lines</summary>

```
import SSHConfig from 'ssh-config'

export interface SshAliasConfig {
  readonly alias: string
  readonly hostname: string
  readonly user: string
  readonly port: number
  readonly identityFiles: readonly string[]
}

export function parseSshConfig(text: string, home: string): readonly SshAliasConfig[] {
  const parsed = SSHConfig.parse(text)
  const aliases = parsed.flatMap((line): string[] => {
    if (!('param' in line) || !('config' in line)) return []
    const section = line
    if (section.param.toLowerCase() !== 'host') return []
    const value =
      typeof section.value === 'string'
        ? section.value
        : section.value.map((part) => part.val).join(' ')
    return value.split(/\s+/).filter((alias) => alias && !/[*?]/.test(alias))
  })
  return [...new Set(aliases)].map((alias) => {
    const values = parsed.compute(alias, { ignoreCase: true, matchExec: false })
    const one = (value: string | string[] | undefined): string | undefined =>
      Array.isArray(value) ? value[0] : value
    const hostname = one(values['hostname']) ?? alias
    const user = one(values['user']) ?? process.env['USER'] ?? 'unknown'
    const rawPort = Number.parseInt(one(values['port']) ?? '22', 10)
    const rawIdentity = values['identityfile']
    const identityFiles = (
      Array.isArray(rawIdentity) ? rawIdentity : rawIdentity ? [rawIdentity] : []
    ).map((path) =>
      path
        .replace(/^~(?=\/|$)/, home)
        .replaceAll('%d', home)
        .replaceAll('%h', hostname)
        .replaceAll('%r', user),
    )
    return {
      alias,
      hostname,
      user,
      port: Number.isFinite(rawPort) ? rawPort : 22,
      identityFiles,
    }
  })
}
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/workspaces/SessionDialog.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/workspaces/SessionDialog.tsx (lines 207-330)

<details>
<summary>122 lines</summary>

```
    }
  }, [busy, newFolderName, stage])

  useModalKeyboard(dialogRef, () => void cancel(), !busy, !suspended)

  return (
    <div className="modal-backdrop">
      <section
        className="project-dialog session-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal={suspended ? undefined : true}
        aria-hidden={suspended || undefined}
        inert={suspended || undefined}
        aria-labelledby="session-dialog-title"
        tabIndex={-1}
      >
        <h2 id="session-dialog-title">
          {stage === 'host'
            ? 'Connect to a host'
            : `Open folder on ${connected?.host.label ?? hostId}`}
        </h2>
        {error ? <p className="dialog-error">{error}</p> : null}
        {stage === 'host' ? (
          <div className="session-hosts" role="listbox" aria-label="Hosts">
            {hosts.map((host) => (
              <button
                type="button"
                role="option"
                aria-selected={hostId === host.hostId}
                className={`session-host-option${hostId === host.hostId ? ' selected' : ''}`}
                key={host.hostId}
                onClick={() => setHostId(host.hostId)}
              >
                <span className="session-host-copy">
                  {host.kind === 'ssh' ? (
                    <RemoteConnectionBadge
                      state={host.connectionState}
                      hostLabel={`ssh:${host.label}`}
                    />
                  ) : (
                    <strong>Local</strong>
                  )}
                  <small>
                    {host.kind === 'ssh' ? host.connectionState : 'this machine'}
                  </small>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <>
            <form
              className="folder-path-form"
              onSubmit={(event) => {
                event.preventDefault()
                void selectPath(pathInput)
              }}
            >
              <input
                ref={pathInputRef}
                aria-label="Folder path"
                autoFocus
                disabled={busy}
                value={pathInput}
                onChange={(event) => {
                  setPathInput(event.target.value)
                  setSelectedPath(undefined)
                  setRevealRequest(undefined)
                }}
              />
              <button type="submit" disabled={busy}>
                Show in tree
              </button>
              <button
                type="button"
                disabled={busy || !selectedPath}
                onClick={() => void open()}
              >
                Use this folder
              </button>
            </form>
            {connected ? (
              <div className="recent-folders">
                {recentFolders(connected.host.hostId).map((folder) => (
                  <button
                    type="button"
                    key={folder}
                    disabled={busy}
                    onClick={() => void selectPath(folder)}
                  >
                    {folder}
                  </button>
                ))}
              </div>
            ) : null}
            <div className="folder-browser" aria-label="Folders">
              <div className="folder-selection">
                <small>Selected folder</small>
                <code>{selectedPath ?? 'Choose a folder from the tree'}</code>
                {newFolderName === undefined ? (
                  <button
                    type="button"
                    disabled={busy || !selectedPath}
                    onClick={() => setNewFolderName('')}
                  >
                    New folder
                  </button>
                ) : (
                  <form
                    className="folder-create-form"
                    onSubmit={(event) => {
                      event.preventDefault()
                      void createDirectory()
                    }}
                  >
                    <input
                      aria-label="New folder name"
                      autoFocus
                      disabled={busy}
                      value={newFolderName}
                      onChange={(event) => setNewFolderName(event.target.value)}
                    />
                    <button type="submit" disabled={busy || newFolderName.length === 0}>
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/viewer/RenderedView.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/viewer/RenderedView.tsx (lines 1-100)

<details>
<summary>93 lines</summary>

```
import { ExternalDocumentWorkspace } from './external-document-context'
import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type RefObject,
} from 'react'

import {
  HTML_SANDBOX,
  renderedFileType,
  type CreateHtmlPreviewResponse,
  type HostPath,
} from '../../../shared'
import { renderMarkdown, resetMarkdownRenderer } from './markdown-client'
import { DomFindTarget } from './dom-find-target'
import { handleRenderedLinkClick } from './rendered-link-handler'
import type {
  JsonNodeDescriptor,
  JsonWorkerRequestInput,
  JsonWorkerResponse,
} from './json-protocol'
import { useAppTheme } from '../theme'
import type { CsvTableData } from './csv-parser'
import type { CsvWorkerResponse } from './csv-protocol'
import type { ViewerDocumentPosition, ViewerDocumentRefresh } from './tab-state'
import type { RegisterViewerFindTarget } from './viewer-find'
import { captureRenderedPosition, restoreRenderedPosition } from './rendered-position'
import { documentLineCount, type ViewerPositionCapture } from './viewer-position'
import { RepositoryImageView } from './RepositoryImageView'
import { MarkdownRepositoryImages } from './markdown-repository-images'
import { bindRenderedDocumentReview } from '../document-review/document-review-rendered'
import { useDocumentReviewInlineHostRegistration } from '../document-review/document-review-inline'
import type { DocumentReviewDocumentProjection } from '../document-review/use-document-review-interaction'

let jsonWorker: Worker | undefined
let jsonRequestId = 0
let jsonDocumentId = 0
let mermaidRequestId = 0
let mermaidPromise: Promise<typeof import('mermaid').default> | undefined
let csvWorker: Worker | undefined
let csvRequestId = 0

function getJsonWorker(): Worker {
  jsonWorker ??= new Worker(new URL('./json.worker.ts', import.meta.url), {
    type: 'module',
  })
  return jsonWorker
}

function getCsvWorker(): Worker {
  csvWorker ??= new Worker(new URL('./csv.worker.ts', import.meta.url), {
    type: 'module',
  })
  return csvWorker
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    jsonWorker?.terminate()
    jsonWorker = undefined
    csvWorker?.terminate()
    csvWorker = undefined
  })
}

interface RenderedViewProps {
  readonly path: HostPath
  readonly content: string
  readonly position: ViewerDocumentPosition
  readonly onPosition: (position: ViewerDocumentPosition) => void
  readonly positionCapture: ViewerPositionCapture
  readonly onOpenPath: (path: HostPath) => void
  readonly refresh?: ViewerDocumentRefresh
  readonly onDependencies: (paths: readonly HostPath[]) => void
  readonly registerFindTarget: RegisterViewerFindTarget
  readonly documentReview?: DocumentReviewDocumentProjection
}

export function RenderedView({
  path,
  content,
  position,
  onPosition,
  positionCapture,
  onOpenPath,
  refresh,
  onDependencies,
  registerFindTarget,
  documentReview,
}: RenderedViewProps): ReactElement {
  const renderGeneration = useDevRendererGeneration()
  const theme = useAppTheme()
  const type = renderedFileType(path)
  if (type === 'image') {
    return <RepositoryImageView path={path} refreshVersion={refresh?.version ?? 0} />
  }
  if (type === 'csv') {
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/09787cd9/hvir/src/renderer/src/settings/sections/GitSettings.tsx.**

/private/var/tmp/ws/09787cd9/hvir/src/renderer/src/settings/sections/GitSettings.tsx (lines 1-90)

<details>
<summary>40 lines</summary>

```
import type { ReactElement } from 'react'

import { SettingsSection } from '../SettingsSection'
import type { SettingsDraft } from '../settings-draft'

export function GitSettings({
  draft,
  onChange,
}: {
  readonly draft: SettingsDraft
  readonly onChange: <K extends keyof SettingsDraft>(
    field: K,
    value: SettingsDraft[K],
  ) => void
}): ReactElement {
  return (
    <SettingsSection
      section="git"
      title="Git"
      description="Choose how often hvir refreshes remote repository information."
    >
      <div className="settings-section-scroll settings-fields">
        <label htmlFor="settings-git-auto-fetch">
          <span>Git auto-fetch</span>
          <select
            id="settings-git-auto-fetch"
            value={draft.gitAutoFetchIntervalMs}
            onChange={(event) =>
              onChange('gitAutoFetchIntervalMs', event.currentTarget.value)
            }
          >
            <option value="0">Off</option>
            <option value={String(60_000)}>Every minute</option>
            <option value={String(5 * 60_000)}>Every 5 minutes</option>
            <option value={String(15 * 60_000)}>Every 15 minutes</option>
            <option value={String(30 * 60_000)}>Every 30 minutes</option>
          </select>
        </label>
      </div>
    </SettingsSection>
  )
}
```

</details>


---

<sub>19s</sub>

### Copilot

The app is an Electron workbench for local and SSH folders. I’ll add a README covering its main workflows, development setup, and build commands.

---

<sub>26s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for working in local and SSH-hosted project folders. It brings terminals, files, Git, and web panes into one workspace, with a Sessions view for navigating terminal activity.\n+\n+## What you can do\n+\n+- Open a local folder or connect to a host configured in your SSH config, then browse and switch projects and workspaces.\n+- Run terminal sessions in your workspace, including split panes and configurable terminal themes and harness profiles.\n+- Browse, search, edit, and compare files. View rendered Markdown, images, JSON, and CSV alongside source files.\n+- Inspect Git changes and history, switch branches, and manage worktrees from the workbench.\n+- Open web panes and adjust appearance, keybindings, terminal behavior, and Git refresh settings.\n+\n+## Getting started\n+\n+### Use the desktop app\n+\n+This repository builds macOS arm64 `.pkg` and Linux x64/arm64 `.deb` installers. After installing, open hvir, add a project, choose **Local** or an available SSH host, and select a folder. SSH hosts are discovered from your SSH configuration; configure access to the host before selecting it in hvir. Git features are available for folders containing a Git repository.\n+\n+### Run from source\n+\n+You need Node.js **24 or newer**, npm, Git, and a native build toolchain for the Node modules rebuilt during installation. Run the following from the repository root on macOS or Linux:\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` installs dependencies and rebuilds the native terminal modules. The development command starts Electron via electron-vite. If a build or dev command reports an incompatible terminal runtime, rerun `npm ci` in the current checkout.\n+\n+## Development\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run typecheck` | Check main/preload and renderer TypeScript. |\n+| `npm run lint` | Run ESLint. |\n+| `npm test` | Run the Vitest suite. |\n+| `npm run verify` | Run architecture checks, lint, type checks, and tests. |\n+| `npm run build` | Type-check and build the Electron app into `out/`. |\n+| `npm run smoke` | Build and run the Electron smoke scenarios. |\n+| `npm run build:dir` | Build an unpacked application in `dist/`. |\n+| `npm run pack:mac:arm64` | Build the macOS arm64 `.pkg` in `dist/`. |\n+| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build a Linux `.deb` in `dist/`. |\n+\n+On a headless Linux machine, run GUI smoke tests under Xvfb (for example, `xvfb-run -a npm run smoke`). On macOS, `npm run smoke:macos` runs the platform-specific smoke scenarios.\n+\n+The application uses Electron with a React/TypeScript renderer (`src/renderer`), Electron main process (`src/main`), preload bridge (`src/preload`), and shared contracts (`src/shared`). Tests live in `test/`; packaging assets and configuration live in `build/` and `electron-builder.yml`.\n+\n+## License\n+\n+MIT; see [LICENSE](LICENSE). Third-party acknowledgments are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch\n"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/09787cd9/hvir/README.md
```


---

<sub>29s</sub>

### `bash`

**Check README formatting**

$ ./node_modules/.bin/prettier --check README.md

```
Checking formatting...
All matched files use Prettier code style!
<shellId: 4 completed with exit code 0>
```


---

<sub>29s</sub>

### `bash`

**Review new README and worktree status**

$ git --no-pager diff --no-index -- /dev/null README.md; git status --short

<details>
<summary>58 lines</summary>

````diff
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..d4ac86a
--- /dev/null
+++ b/README.md
@@ -0,0 +1,50 @@
+# hvir
+
+hvir is a desktop workbench for working in local and SSH-hosted project folders. It brings terminals, files, Git, and web panes into one workspace, with a Sessions view for navigating terminal activity.
+
+## What you can do
+
+- Open a local folder or connect to a host configured in your SSH config, then browse and switch projects and workspaces.
+- Run terminal sessions in your workspace, including split panes and configurable terminal themes and harness profiles.
+- Browse, search, edit, and compare files. View rendered Markdown, images, JSON, and CSV alongside source files.
+- Inspect Git changes and history, switch branches, and manage worktrees from the workbench.
+- Open web panes and adjust appearance, keybindings, terminal behavior, and Git refresh settings.
+
+## Getting started
+
+### Use the desktop app
+
+This repository builds macOS arm64 `.pkg` and Linux x64/arm64 `.deb` installers. After installing, open hvir, add a project, choose **Local** or an available SSH host, and select a folder. SSH hosts are discovered from your SSH configuration; configure access to the host before selecting it in hvir. Git features are available for folders containing a Git repository.
+
+### Run from source
+
+You need Node.js **24 or newer**, npm, Git, and a native build toolchain for the Node modules rebuilt during installation. Run the following from the repository root on macOS or Linux:
+
+```sh
+npm ci
+npm run dev
+```
+
+`npm ci` installs dependencies and rebuilds the native terminal modules. The development command starts Electron via electron-vite. If a build or dev command reports an incompatible terminal runtime, rerun `npm ci` in the current checkout.
+
+## Development
+
+| Command | Purpose |
+| --- | --- |
+| `npm run typecheck` | Check main/preload and renderer TypeScript. |
+| `npm run lint` | Run ESLint. |
+| `npm test` | Run the Vitest suite. |
+| `npm run verify` | Run architecture checks, lint, type checks, and tests. |
+| `npm run build` | Type-check and build the Electron app into `out/`. |
+| `npm run smoke` | Build and run the Electron smoke scenarios. |
+| `npm run build:dir` | Build an unpacked application in `dist/`. |
+| `npm run pack:mac:arm64` | Build the macOS arm64 `.pkg` in `dist/`. |
+| `npm run pack:linux:x64` / `npm run pack:linux:arm64` | Build a Linux `.deb` in `dist/`. |
+
+On a headless Linux machine, run GUI smoke tests under Xvfb (for example, `xvfb-run -a npm run smoke`). On macOS, `npm run smoke:macos` runs the platform-specific smoke scenarios.
+
+The application uses Electron with a React/TypeScript renderer (`src/renderer`), Electron main process (`src/main`), preload bridge (`src/preload`), and shared contracts (`src/shared`). Tests live in `test/`; packaging assets and configuration live in `build/` and `electron-builder.yml`.
+
+## License
+
+MIT; see [LICENSE](LICENSE). Third-party acknowledgments are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
?? README.md
<shellId: 5 completed with exit code 0>
````

</details>


---

<sub>30s</sub>

### Copilot

Created `README.md` with an overview of hvir, its main features, installation and source setup, development commands, project structure, and license information.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
