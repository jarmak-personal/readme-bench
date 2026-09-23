# Copilot CLI Session

> [!NOTE]
> - **Session ID:** `062fc38a-81c9-43be-b703-62fa02eafc6f`  
> - **Started:** 9/22/2026, 11:55:59 PM  
> - **Duration:** 33s  
> - **Exported:** 9/22/2026, 11:56:33 PM  

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

**Inspect worktree and root files**

$ git status --short && printf '\nRoot entries:\n' && ls -la

<details>
<summary>31 lines</summary>

```
Root entries:
total 1024
drwxr-xr-x@  28 air-jarmak  wheel     896 Sep 22 23:55 .
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:55 ..
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:55 .git
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:55 .githooks
drwxr-xr-x@   4 air-jarmak  wheel     128 Sep 22 23:55 .github
-rw-r--r--@   1 air-jarmak  wheel     197 Sep 22 23:55 .gitignore
-rw-r--r--@   1 air-jarmak  wheel     186 Sep 22 23:55 .prettierignore
-rw-r--r--@   1 air-jarmak  wheel     106 Sep 22 23:55 .prettierrc.json
drwxr-xr-x@  12 air-jarmak  wheel     384 Sep 22 23:55 build
-rw-r--r--@   1 air-jarmak  wheel     549 Sep 22 23:55 electron-builder.ssh-acceptance.yml
-rw-r--r--@   1 air-jarmak  wheel    1970 Sep 22 23:55 electron-builder.yml
-rw-r--r--@   1 air-jarmak  wheel    4486 Sep 22 23:55 electron.vite.config.ts
-rw-r--r--@   1 air-jarmak  wheel   18304 Sep 22 23:55 eslint.config.mjs
-rw-r--r--@   1 air-jarmak  wheel    1074 Sep 22 23:55 LICENSE
drwxr-xr-x@ 514 air-jarmak  wheel   16448 Sep 22 23:55 node_modules
-rw-r--r--@   1 air-jarmak  wheel  427844 Sep 22 23:55 package-lock.json
-rw-r--r--@   1 air-jarmak  wheel    6820 Sep 22 23:55 package.json
drwxr-xr-x@   3 air-jarmak  wheel      96 Sep 22 23:55 packages
drwxr-xr-x@  54 air-jarmak  wheel    1728 Sep 22 23:55 scripts
drwxr-xr-x@   7 air-jarmak  wheel     224 Sep 22 23:55 src
-rw-r--r--@   1 air-jarmak  wheel     537 Sep 22 23:55 stryker.config.json
drwxr-xr-x@ 383 air-jarmak  wheel   12256 Sep 22 23:55 test
-rw-r--r--@   1 air-jarmak  wheel    6588 Sep 22 23:55 THIRD_PARTY_NOTICES.md
-rw-r--r--@   1 air-jarmak  wheel     597 Sep 22 23:55 tsconfig.base.json
-rw-r--r--@   1 air-jarmak  wheel     107 Sep 22 23:55 tsconfig.json
-rw-r--r--@   1 air-jarmak  wheel     426 Sep 22 23:55 tsconfig.node.json
-rw-r--r--@   1 air-jarmak  wheel     348 Sep 22 23:55 tsconfig.web.json
-rw-r--r--@   1 air-jarmak  wheel     502 Sep 22 23:55 vitest.config.ts
<shellId: 0 completed with exit code 0>
```

</details>


---

<sub>3s</sub>

### `glob`

****/***

"**/*"

<details>
<summary>331 matches</summary>

```
[glob: 37426 path(s) under /private/var/tmp/ws/255e22c1/hvir; concrete paths]
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

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/package.json.**

/private/var/tmp/ws/255e22c1/hvir/package.json

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

### `bash`

**List project source and scripts**

$ find src packages scripts -type f -not -path '*/node_modules/*' | sort | head -200

<details>
<summary>201 lines</summary>

```
packages/rename-noreplace/binding.gyp
packages/rename-noreplace/build/binding.Makefile
packages/rename-noreplace/build/config.gypi
packages/rename-noreplace/build/gyp-mac-tool
packages/rename-noreplace/build/Makefile
packages/rename-noreplace/build/Release/.deps/Release/obj.target/rename_noreplace/rename_noreplace.o.d
packages/rename-noreplace/build/Release/.deps/Release/rename_noreplace.node.d
packages/rename-noreplace/build/Release/obj.target/rename_noreplace/rename_noreplace.o
packages/rename-noreplace/build/Release/rename_noreplace.node
packages/rename-noreplace/build/rename_noreplace.target.mk
packages/rename-noreplace/index.js
packages/rename-noreplace/LICENSE
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
src/main/harness/claude-keybindings.ts
src/main/harness/claude-session-artifact.ts
src/main/harness/claude-session-recovery.ts
src/main/harness/codex-context-telemetry.ts
src/main/harness/codex-session-discovery.ts
src/main/harness/electron-clipboard-image.ts
src/main/harness/harness-composer-contracts.ts
src/main/harness/harness-launch-selection.ts
src/main/harness/harness-launch.ts
src/main/harness/harness-probe.ts
src/main/harness/harness-profile-store.ts
src/main/harness/harness-provider-capabilities.ts
src/main/harness/harness-provider-contract.ts
src/main/harness/harness-provider-probes.ts
src/main/harness/harness-provider-registry.ts
src/main/harness/harness-provider.ts
src/main/harness/harness-shell-environment.ts
src/main/harness/harness-telemetry-hub.ts
src/main/harness/harness-telemetry-protocol.ts
src/main/harness/harness-text-validation.ts
src/main/harness/harness-usage-artifact.ts
src/main/harness/harness-usage-demand-controller.ts
src/main/harness/harness-usage-read-scheduler.ts
src/main/harness/harness-usage.ts
src/main/harness/providers/claude-code.ts
src/main/harness/providers/codex.ts
src/main/harness/providers/cursor.ts
src/main/harness/providers/gemini.ts
src/main/harness/providers/github-copilot.ts
src/main/harness/providers/pi.ts
src/main/harness/providers/shell.ts
src/main/harness/remote-image-paste-storage.ts
src/main/harness/remote-image-paste.ts
src/main/health/workbench-health-events.ts
<shellId: 1 completed with exit code 0>
```

</details>


---

<sub>5s</sub>

### `rg`

**Hvir|hvir|HVIR|TODO|description**

"Hvir|hvir|HVIR|TODO|description" in **/*.{ts,tsx,js,jsx,json,html,css} (src)

<details>
<summary>43 matches</summary>

```
[grep content: 1262 matches across 252 file(s) under /private/var/tmp/ws/255e22c1/hvir/src]

preload/index.ts (7 match(es)):
    * by lint). It exposes a single typed surface, `window.hvir`, validated against
     type HvirApi,
   const api: HvirApi = {
           new Error(`hvir: blocked non-contract IPC channel '${channel}'`),
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
         throw new Error(`hvir: blocked non-contract IPC channel '${channel}'`)
   contextBridge.exposeInMainWorld('hvir', api)
main/git/mutation-coordinator.ts: /** Coordinates the complete lifecycle of the bounded Git mutations exposed by hvir. */
main/navigation-policy.ts: /** Only these explicit external schemes may leave hvir for the OS browser. */

main/index.ts (10 match(es)):
       app.isPackaged || __HVIR_SMOKE_BUILD__,
             title: 'Choose a folder for hvir',
         createWorkerClient<EchoWorkerProtocol>(workerPath('echo-worker.js'), 'hvir-echo'),
           'hvir-git',
       return fromFlag?.slice('--project-root='.length) || process.env.HVIR_PROJECT_ROOT
         if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) {
             scenario: process.env['HVIR_SMOKE_SCENARIO'],
         console.error('HVIR_STARTUP_FAIL', error)
       if (!__HVIR_SMOKE_BUILD__ && process.platform !== 'darwin') app.quit()
       if (__HVIR_SMOKE_BUILD__ && process.env['HVIR_SMOKE']) return

main/build-environment.d.ts (2 match(es)):
   declare const __HVIR_SMOKE_BUILD__: boolean
   declare const __HVIR_BUILD_CHANNEL__: import('../shared').ApplicationBuildChannel

shared/harness-profile.ts (2 match(es)):
     readonly description?: string
   /** Exhaustive provider-owned ways hvir may start a harness conversation. */

renderer/src/ErrorBoundary.tsx (2 match(es)):
           window.hvir.diagnostics.recordRenderContainment(this.state.occurrenceId)
           <h1>hvir hit a rendering problem</h1>
main/project-registry.ts:     if (this.projects.length <= 1) throw new Error('hvir must keep one project open')

main/window/electron-renderer-document-lifecycle.ts (3 match(es)):
     readonly failed: (code: number, description: string, url: string) => void
       (_event, code, description, url, isMainFrame, processId, frameId) => {
           handlers.failed(code, description, url)
main/ipc/deps.ts: /** The application host's clipboard, narrowed to the one write hvir performs. */

renderer/src/git/use-git-workspace.ts (3 match(es)):
           await window.hvir.invoke('git:switch-branch', {
         unwrapOperation(await window.hvir.invoke('git:fetch', { root: current.root })),
           unwrapOperation(await window.hvir.invoke('git:pull', { root: current.root })),
main/pty/pty-supervisor.ts:           TERM_PROGRAM: 'hvir',

[omitted 1228 match(es) in 240 file(s); see original output for full results]
```

</details>


---

<sub>8s</sub>

### `bash`

**Inspect source layout and project documentation**

$ find src -maxdepth 3 -type f | sort | sed -n '1,180p'; printf '\nTop-level docs/config:\n'; find . -maxdepth 2 -type f \( -name '*.md' -o -path './.github/*' \) -not -path './node_modules/*' | sort

<details>
<summary>184 lines</summary>

```
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
src/main/harness/claude-keybindings.ts
src/main/harness/claude-session-artifact.ts
src/main/harness/claude-session-recovery.ts
src/main/harness/codex-context-telemetry.ts
src/main/harness/codex-session-discovery.ts
src/main/harness/electron-clipboard-image.ts
src/main/harness/harness-composer-contracts.ts
src/main/harness/harness-launch-selection.ts
src/main/harness/harness-launch.ts
src/main/harness/harness-probe.ts
src/main/harness/harness-profile-store.ts
src/main/harness/harness-provider-capabilities.ts
src/main/harness/harness-provider-contract.ts
src/main/harness/harness-provider-probes.ts
src/main/harness/harness-provider-registry.ts
src/main/harness/harness-provider.ts
src/main/harness/harness-shell-environment.ts
src/main/harness/harness-telemetry-hub.ts
src/main/harness/harness-telemetry-protocol.ts
src/main/harness/harness-text-validation.ts
src/main/harness/harness-usage-artifact.ts
src/main/harness/harness-usage-demand-controller.ts
src/main/harness/harness-usage-read-scheduler.ts
src/main/harness/harness-usage.ts
src/main/harness/remote-image-paste-storage.ts
src/main/harness/remote-image-paste.ts
src/main/health/workbench-health-events.ts
src/main/health/workbench-health.ts
src/main/html-preview-protocol.ts
src/main/index.ts
src/main/ipc.ts
src/main/ipc/authority-channel-policy.ts
src/main/ipc/authority-port.ts
src/main/ipc/authority-router.ts
src/main/ipc/deps.ts
src/main/ipc/host-path-authority.ts
src/main/ipc/operation-result.ts
src/main/ipc/project-commands.ts
src/main/navigation-policy.ts
src/main/project-coordinator.ts
src/main/project-file-operations/case-only-project-entry-rename.ts
src/main/project-file-operations/clipboard-file-list.ts
src/main/project-file-operations/create-project-entry.ts
src/main/project-file-operations/delete-project-entry.ts
src/main/project-file-operations/electron-clipboard-files.ts
src/main/project-file-operations/electron-external-move-picker.ts
src/main/project-file-operations/external-file-copy.ts
src/main/project-file-operations/external-file-grants.ts
src/main/project-file-operations/external-file-move-operation.ts
src/main/project-file-operations/external-file-move.ts
src/main/project-file-operations/external-file-operation.ts
src/main/project-file-operations/index.ts
src/main/project-file-operations/project-entry-deletion-operation.ts
src/main/project-file-operations/project-entry-operation-results.ts
src/main/project-file-operations/project-entry-organization.ts
src/main/project-file-operations/project-entry-removal.ts
src/main/project-file-operations/project-file-confinement.ts
src/main/project-file-operations/project-file-copy-limits.ts
src/main/project-file-operations/project-file-operation-coordinator.ts
src/main/project-file-operations/project-file-operation-runtime.ts
src/main/project-file-operations/project-file-path-errors.ts
src/main/project-file-operations/staging-cleanup.ts
src/main/project-file-operations/verified-project-copy-manifest.ts
src/main/project-file-operations/verified-project-copy.ts
src/main/project-file-operations/verified-project-entry-metadata.ts
src/main/project-folder-picker/index.ts
src/main/project-folder-picker/project-folder-picker-coordinator.ts
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
src/main/project-registry.ts
src/main/project-watch.ts
src/main/pty/pty-contract.ts
src/main/pty/pty-launch-admission.ts
src/main/pty/pty-session-lifetime.ts
src/main/pty/pty-session-observation.ts
src/main/pty/pty-stream-attachment.ts
src/main/pty/pty-supervisor.ts
src/main/renderer-event-delivery.ts
src/main/renderer-event-publisher.ts
src/main/renderer-presentation-resources.ts
src/main/renderer-resource-scopes.ts
src/main/sessions/sessions-observation-application.ts
src/main/sessions/sessions-observation-port.ts
src/main/sessions/sessions-open-resolution.ts
src/main/sessions/sessions-projection-identities.ts
src/main/sessions/sessions-projection-values.ts
src/main/sessions/sessions-telemetry-projection.ts
src/main/sessions/sessions-usage-observation-port.ts
src/main/sessions/sessions-usage-projection.ts
src/main/smoke/app-settings.ts
src/main/smoke/bootstrap-contract.ts
src/main/smoke/capacity-live-presentation.ts
src/main/smoke/capacity-output-fixtures.ts
src/main/smoke/capacity-performance.ts
src/main/smoke/capacity-scenario.ts
src/main/smoke/capacity-terminals.ts
src/main/smoke/capacity.ts
src/main/smoke/cleanup.ts
src/main/smoke/development-performance.ts
src/main/smoke/diagnostic-report-restart.ts
src/main/smoke/document-review-driver.ts
src/main/smoke/document-review-evidence.mts
src/main/smoke/document-review-fixture.ts
src/main/smoke/document-review.ts
src/main/smoke/electron-process-metrics.ts
src/main/smoke/external-documents.ts
src/main/smoke/external-file-move.ts
src/main/smoke/failure-evidence.mts
src/main/smoke/filename-search.ts
src/main/smoke/files-interactions.ts
src/main/smoke/git-changes-layout.ts
src/main/smoke/git-diff.ts
src/main/smoke/git-dirty-navigation.ts
src/main/smoke/git-workflow.ts
src/main/smoke/harness-profile-workflow.ts

Top-level docs/config:
./.github/dependabot.yml
./THIRD_PARTY_NOTICES.md
<shellId: 2 completed with exit code 0>
```

</details>


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/main/index.ts.**

/private/var/tmp/ws/255e22c1/hvir/src/main/index.ts

```
File too large to read at once (21.0 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>8s</sub>

### `rg`

**label=|aria-label=|title=|>[^<{]{3,}<|placeholder=**

"label=|aria-label=|title=|>[^<{]{3,}<|placeholder=" in **/*.{tsx,ts} (src/renderer/src)

<details>
<summary>94 matches</summary>

```
[grep content: 545 matches across 91 file(s) under /private/var/tmp/ws/255e22c1/hvir/src/renderer/src]
ErrorBoundary.tsx:         <h1>hvir hit a rendering problem</h1>

git/GitHistoryView.tsx (10 match(es)):
           <div className="git-empty">Loading history…</div>
           <div className="git-empty">Not a Git repository</div>
         {commits.length > 0 ? <HistoryCommitList {...props} /> : null}
         aria-label="Commit history"
           aria-label="Commit history"
                     title={commit.subject || '(no subject)'}
                     aria-label={`Open ${commit.shortHash} in full history`}
                     title="Open in full history"
         <span className="git-rail-history-state" title={item.title}>
         title={entry.file.path.path}

git/use-git-rail-controller.ts (3 match(es)):
     readonly onSwitchBranch: (branch: string) => Promise<void>
     readonly onFetch: () => Promise<void>
     readonly onPull: () => Promise<void>

git/GitBranchControls.tsx (6 match(es)):
         <label htmlFor="git-branch-select">Branch</label>
           title={branchError ?? branchBlockReason ?? 'Switch existing local branch'}
               title={fetchBlockedReason ?? 'Refresh remote branch information'}
               title={pullBlockReason ?? 'Fast-forward from the configured upstream'}
           <small title={new Date(lastFetchedAt).toLocaleString()}>
           <small>Switching…</small>

document-review/document-review-validation.ts (2 match(es)):
   export function reviewPolicySuccess<T>(value: T): ReviewPolicyResult<T> {
   export function reviewPolicyFailure<T>(error: ReviewPolicyError): ReviewPolicyResult<T>

git/GitGraphView.tsx (20 match(es)):
       <section className="git-graph-view" aria-label="Git history graph">
             <strong>Git history</strong>
                 <span>Commit</span>
                     <span>Author</span>
                     <span>Date</span>
                     <span>Hash</span>
                 aria-label="Repository commits"
                             <time title={row.commit.authoredAt}>
             title={ref}
       <aside className="git-commit-inspector" aria-label="Commit details">
           <strong>Commit details</strong>
           <button type="button" aria-label="Close commit details" onClick={onClose}>
                   <dt>Author</dt>
                   <dt>Date</dt>
                   <dt>Commit</dt>
                   <dd title={detail.hash}>{detail.shortHash}</dd>
           aria-label="Commit message"
           <span className="git-commit-message-more" title="More commit message below">
           aria-label="Files changed in commit"
                   title={entry.file.path.path}

git/GitPanel.tsx (5 match(es)):
     readonly onSwitchBranch: (branch: string) => Promise<void>
     readonly onFetch: () => Promise<void>
     readonly onPull: () => Promise<void>
       <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
             <div className="git-empty">Reconnect to inspect Git.</div>

document-review/DocumentReviewInlineSurface.tsx (13 match(es)):
         aria-label={`Document review at ${lineRangeLabel(range)}`}
           <strong>Review</strong>
             aria-label={`Close review at ${lineRangeLabel(range)}`}
           <p className="document-review-empty">No comments at this location.</p>
     readonly onSubmit: (body: string) => Promise<void>
         aria-label={`New comment for ${lineRangeLabel(range)}`}
           aria-label="New review comment"
         aria-label={`Review comment at ${lineRangeLabel(comment.anchor.range)}`}
               aria-label={`Edit comment at ${lineRangeLabel(comment.anchor.range)}`}
             aria-label={`Edit comment at ${lineRangeLabel(comment.anchor.range)}`}
                 aria-label={`Go to review comment at ${lineRangeLabel(comment.anchor.range)}`}
                 aria-label={`Acknowledge stale location for comment at ${lineRangeLabel(comment.anchor.range)}`}
                 aria-label={`Delete comment at ${lineRangeLabel(comment.anchor.range)}`}

git/GitChangesView.tsx (7 match(es)):
           {loading ? <div className="git-empty">Loading changes…</div> : null}
       content = <div className="git-empty">Not a Git repository</div>
               title={group.title}
             title={group.title}
             title={changes.branchPointUnavailableReason}
                 title={file.path.path}
                     <span className="git-count-omitted" title="Line counts unavailable">

document-review/document-review-workspace.ts (2 match(es)):
     readonly readDocument: (document: HostPath) => Promise<DocumentReviewRevalidation>
     readonly flush: () => Promise<void>
git/git-sync-coordinator.ts:     request: () => Promise<void>,

diagnostics/DiagnosticReportDialog.tsx (12 match(es)):
           <h2 id="diagnostic-report-title">Review diagnostic report</h2>
           <p>Local, bounded, and never sent to a harness automatically.</p>
               <h3 id="diagnostic-report-structured-title">Exact structured fields</h3>
                 <dt>Current lifetime</dt>
                 <dt>Preceding lifetime</dt>
               <h3 id="diagnostic-report-image-title">Optional screenshot</h3>
                     <dt>Media type</dt>
                     <dt>Dimensions</dt>
                     <dt>Bytes</dt>
                     <dt>SHA-256</dt>
                     <dt>Masked surfaces</dt>
                 <p>No screenshot is captured by default.</p>

[omitted 463 match(es) in 79 file(s); see original output for full results]
```

</details>


---

<sub>8s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/scripts/check-terminal-runtime.mts.**

/private/var/tmp/ws/255e22c1/hvir/scripts/check-terminal-runtime.mts

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

<sub>11s</sub>

### `bash`

**Identify main renderer screens**

$ find src/renderer/src -maxdepth 2 -type f | sort | head -120; printf '\nRenderer entry files:\n'; find src/renderer -maxdepth 2 -type f \( -name 'App.tsx' -o -name 'main.tsx' -o -name '*.html' \) -print

<details>
<summary>125 lines</summary>

```
src/renderer/src/App.tsx
src/renderer/src/context-menu/viewport-context-menu.ts
src/renderer/src/dashboards/ElectronWebPaneSurface.tsx
src/renderer/src/dashboards/use-web-pane-workspace.ts
src/renderer/src/dashboards/web-pane-diagnostics.ts
src/renderer/src/dashboards/web-pane-surface.ts
src/renderer/src/dashboards/web-pane-url.ts
src/renderer/src/dashboards/web-pane-workspace-policy.ts
src/renderer/src/dashboards/WebPane.tsx
src/renderer/src/dashboards/WebPaneStack.tsx
src/renderer/src/development/development-performance-fixture.tsx
src/renderer/src/development/development-performance-pump.tsx
src/renderer/src/development/development-renderer-instrumentation.tsx
src/renderer/src/development/performance-measure-budget.ts
src/renderer/src/diagnostics/DiagnosticReportDialog.tsx
src/renderer/src/diagnostics/owned-capture-masks.ts
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
src/renderer/src/document-review/DocumentReviewControls.tsx
src/renderer/src/document-review/DocumentReviewDeliveryPanel.tsx
src/renderer/src/document-review/DocumentReviewInlineSurface.tsx
src/renderer/src/document-review/index.ts
src/renderer/src/document-review/use-document-review-delivery.ts
src/renderer/src/document-review/use-document-review-interaction.ts
src/renderer/src/document-review/use-document-review-workspace.ts
src/renderer/src/ErrorBoundary.tsx
src/renderer/src/git/commit-detail-client.ts
src/renderer/src/git/commit-file-tree.ts
src/renderer/src/git/commit-message.ts
src/renderer/src/git/git-capability.ts
src/renderer/src/git/git-graph-lane-metrics.ts
src/renderer/src/git/git-graph-layout.ts
src/renderer/src/git/git-rail-model.ts
src/renderer/src/git/git-sync-coordinator.ts
src/renderer/src/git/git-sync-status.ts
src/renderer/src/git/GitBranchControls.tsx
src/renderer/src/git/GitChangesView.tsx
src/renderer/src/git/GitGraphLanes.tsx
src/renderer/src/git/GitGraphView.tsx
src/renderer/src/git/GitHistoryView.tsx
src/renderer/src/git/GitPanel.tsx
src/renderer/src/git/use-git-commit-details.ts
src/renderer/src/git/use-git-rail-controller.ts
src/renderer/src/git/use-git-workspace.ts
src/renderer/src/git/virtual-range.ts
src/renderer/src/harness/ProviderContextMeter.tsx
src/renderer/src/health/use-diagnostic-evidence.ts
src/renderer/src/health/use-workbench-health.ts
src/renderer/src/health/WorkbenchHealthControl.tsx
src/renderer/src/hvir.d.ts
src/renderer/src/layout/PaneResizer.tsx
src/renderer/src/layout/split-layout-policy.ts
src/renderer/src/layout/workspace-layout-persistence.ts
src/renderer/src/main.tsx
src/renderer/src/path-copy/path-copy.ts
src/renderer/src/path-copy/PathCopyMenu.tsx
src/renderer/src/path-copy/use-path-copy-menu.ts
src/renderer/src/scrollbars/scrollbar-presentation.ts
src/renderer/src/sessions/sessions-overview-model.ts
src/renderer/src/sessions/sessions-projection-coordinator.ts
src/renderer/src/sessions/sessions-renderer-observation.ts
src/renderer/src/sessions/sessions-terminal-detail-controller.ts
src/renderer/src/sessions/sessions-terminal-overlay.ts
src/renderer/src/sessions/sessions-terminal-surface.ts
src/renderer/src/sessions/SessionsApplicationDestination.tsx
src/renderer/src/sessions/SessionsCollectionToolbar.tsx
src/renderer/src/sessions/SessionsOverview.tsx
src/renderer/src/sessions/SessionsOverviewCard.tsx
src/renderer/src/sessions/SessionsOverviewNotice.tsx
src/renderer/src/sessions/SessionsTerminalDetail.tsx
src/renderer/src/sessions/use-sessions-foreground.ts
src/renderer/src/sessions/use-sessions-terminal-detail.ts
src/renderer/src/settings/ComposerSubmitConsentDialog.tsx
src/renderer/src/settings/harness-argument-editor.ts
src/renderer/src/settings/harness-profile-draft.ts
src/renderer/src/settings/harness-profile-editor-policy.ts
src/renderer/src/settings/harness-profile-request-policy.ts
src/renderer/src/settings/HarnessProfileAdvancedFields.tsx
src/renderer/src/settings/HarnessProfileCommandFields.tsx
src/renderer/src/settings/HarnessProfileDialogs.tsx
src/renderer/src/settings/HarnessProfileEditor.tsx
src/renderer/src/settings/HarnessProfileOverlays.tsx
src/renderer/src/settings/HarnessProfilesSettings.tsx
src/renderer/src/settings/keybindings.ts
src/renderer/src/settings/settings-draft.ts
src/renderer/src/settings/settings-model.ts
src/renderer/src/settings/settings-navigation.ts
src/renderer/src/settings/settings.ts
src/renderer/src/settings/SettingsActiveSection.tsx
src/renderer/src/settings/SettingsDialog.tsx
src/renderer/src/settings/SettingsSection.tsx
src/renderer/src/settings/SettingsSectionNavigation.tsx
src/renderer/src/settings/TerminalThemeGallery.tsx
src/renderer/src/settings/typography-presentation.ts
src/renderer/src/settings/typography-settings.ts
src/renderer/src/settings/use-add-harness-dialog.ts
src/renderer/src/settings/use-harness-binding-authorization.ts
src/renderer/src/settings/use-harness-folder-picker.ts
src/renderer/src/settings/use-harness-profile-editor.ts
src/renderer/src/settings/use-harness-profile-load.ts
src/renderer/src/settings/use-settings-controller.ts
src/renderer/src/styles.css
src/renderer/src/styles/base.css
src/renderer/src/styles/composer-submit.css
src/renderer/src/styles/context-menu.css
src/renderer/src/styles/diagnostic-report.css

Renderer entry files:
src/renderer/index.html
src/renderer/src/App.tsx
src/renderer/src/main.tsx
<shellId: 3 completed with exit code 0>
```

</details>


---

<sub>11s</sub>

### `rg`

**provider|Claude|Codex|Gemini|Copilot|Cursor|terminal|worktree|SSH|remote|preview|markdown|review**

"provider|Claude|Codex|Gemini|Copilot|Cursor|terminal|worktree|SSH|remote|preview|markdown|review" in **/*.{tsx,ts} (src/renderer/src)

<details>
<summary>58 matches</summary>

```
[grep content: 1878 matches across 175 file(s) under /private/var/tmp/ws/255e22c1/hvir/src/renderer/src]

git/git-sync-status.ts (4 match(es)):
     if (!model) return 'Checking remote status…'
     if (!model.remoteAvailable) return 'No Git remote configured'
     if (!model) return 'Checking remote status…'
     if (!model.remoteAvailable) return 'No Git remote is configured'

git/use-git-rail-controller.ts (4 match(es)):
         !current.historyCursor
       const cursor = current.historyCursor
         remoteAvailable: Boolean(model.branchModel?.remoteAvailable),
       model.branchModel?.remoteAvailable,

git/GitBranchControls.tsx (4 match(es)):
               branch.worktree &&
               (branch.worktree.hostId !== root.hostId || branch.worktree.path !== root.path)
                 {occupiedElsewhere ? ` — in ${branch.worktree?.path}` : ''}
               title={fetchBlockedReason ?? 'Refresh remote branch information'}

git/GitGraphView.tsx (6 match(es)):
     const [cursor, setCursor] = useState<string>()
             setCursor(page.nextCursor)
       setCursor(undefined)
       const requestCursor = cursor
           cursor: requestCursor,
             setCursor(page.nextCursor)

git/git-rail-model.ts (7 match(es)):
     readonly historyCursor?: string
           historyCursor: action.page.nextCursor,
           : !model.branchModel.remoteAvailable
             ? 'No Git remote is configured'
     remoteAvailable,
     readonly remoteAvailable: boolean
       !remoteAvailable ||

diagnostics/DiagnosticReportDialog.tsx (4 match(es)):
           ? 'Writing the reviewed artifact to the clipboard…'
                 ? 'Exact reviewed artifact copied.'
                 : 'Exact reviewed artifact saved.',
               <pre className="diagnostic-report-preview">
diagnostics/owned-capture-masks.ts:   return ['project-navigation', 'viewer', 'terminal', 'web-pane'].includes(String(value))

dashboards/web-pane-diagnostics.ts (2 match(es)):
   export function reviewedWebPaneConsoleDiagnostic(
       `source terminal: ${view.sourceTerminalId}`,

dashboards/WebPane.tsx (3 match(es)):
             aria-label="Reveal source terminal"
             title="Back to terminal"
                 : 'Browser handoff for SSH panes needs a compatibility route'

dashboards/ElectronWebPaneSurface.tsx (2 match(es)):
   import { reviewedWebPaneConsoleDiagnostic } from './web-pane-diagnostics'
         const diagnostic = reviewedWebPaneConsoleDiagnostic(detail.level, detail.message)

dashboards/use-web-pane-workspace.ts (6 match(es)):
     readonly terminalId: string
                 source: 'terminal',
                 terminalId: activation.terminalId,
               sourceTerminalId: activation.terminalId,
     const forgetTerminalViews = useCallback((terminalId: string): void => {
           .filter((view) => view.sourceTerminalId === terminalId)

workbench/workbench-command-router.ts (2 match(es)):
     context: 'terminal' | 'web-pane' | 'workbench' = 'workbench',
         return context === 'terminal' && ports.findInTerminal()

[omitted 1833 match(es) in 163 file(s); see original output for full results]
```

</details>


---

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/electron-builder.yml.**

/private/var/tmp/ws/255e22c1/hvir/electron-builder.yml

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

<sub>11s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/LICENSE.**

/private/var/tmp/ws/255e22c1/hvir/LICENSE

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

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/255e22c1/hvir/src/renderer/src/App.tsx

```
File too large to read at once (26.4 KB). Consider using the grep tool to search within the file, or view with view_range to read specific sections.
```


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/main/harness/bundled-harness-providers.ts.**

/private/var/tmp/ws/255e22c1/hvir/src/main/harness/bundled-harness-providers.ts

<details>
<summary>65 lines</summary>

```
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
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/main/project-host/project-host-catalog.ts.**

/private/var/tmp/ws/255e22c1/hvir/src/main/project-host/project-host-catalog.ts

<details>
<summary>201 lines</summary>

```
import { homedir } from 'node:os'
import { join } from 'node:path'

import { localPath, type HostPath, type ProjectHostOption } from '../../shared'
import { LocalHost } from './local-host'
import type { Disposer, ProjectHost } from './project-host'
import type { SshAuthPrompter } from './ssh-auth'
import { parseSshConfig, type SshAliasConfig } from './ssh-config'
import { SshHost } from './ssh-host'
import { SshHostTrustStore } from './ssh-host-trust'
import { LocalSshIdentitySource } from './ssh-identity-source'

export interface ProjectHostCatalogOptions {
  readonly prompter: SshAuthPrompter
  readonly trustFile: HostPath
  readonly home?: string
  readonly agentSocket?: string
  readonly trashItem?: (path: HostPath) => Promise<void>
}

/** Owns local/SSH host discovery, materialization, and logical-host lifetime. */
export class ProjectHostCatalog {
  readonly local: LocalHost
  private readonly hosts = new Map<string, ProjectHost>()
  private readonly pendingHosts = new Map<string, Promise<ProjectHost>>()
  private readonly hostStateDisposers = new Map<string, Disposer>()
  private readonly listeners = new Set<() => void>()
  private disposed = false
  private disposal?: Promise<void>

  private constructor(
    local: LocalHost,
    private readonly aliases: readonly SshAliasConfig[],
    private readonly prompter: SshAuthPrompter,
    private readonly trust: SshHostTrustStore,
    private readonly home: string,
    private readonly agentSocket: string | undefined,
  ) {
    this.local = local
    this.hosts.set(local.hostId, local)
  }

  static async create(options: ProjectHostCatalogOptions): Promise<ProjectHostCatalog> {
    const local = new LocalHost({ trashItem: options.trashItem })
    try {
      await local.connect()
      const home = options.home ?? homedir()
      const aliases = await loadSshAliases(local, home)
      const trust = await SshHostTrustStore.load(local, options.trustFile)
      return new ProjectHostCatalog(
        local,
        aliases,
        options.prompter,
        trust,
        home,
        options.agentSocket ?? process.env['SSH_AUTH_SOCK'],
      )
    } catch (error) {
      await local.dispose()
      throw error
    }
  }

  onHostStateChange(listener: () => void): Disposer {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  listHosts(): readonly ProjectHostOption[] {
    return [
      hostOption(this.local, 'Local', 'local'),
      ...this.aliases.map((config) => {
        const host = this.hosts.get(config.alias)
        return host
          ? hostOption(host, config.alias, 'ssh')
          : {
              hostId: config.alias,
              label: config.alias,
              kind: 'ssh' as const,
              connectionState: 'disconnected' as const,
              watchTier: 'polling' as const,
            }
      }),
    ]
  }

  hostById(hostId: string): ProjectHost | undefined {
    return this.hosts.get(hostId)
  }

  connectedHosts(): readonly ProjectHost[] {
    return [...this.hosts.values()].filter(
      ({ connectionState }) => connectionState === 'connected',
    )
  }

  materializeHost(hostId: string): Promise<ProjectHost> {
    if (this.disposed)
      return Promise.reject(new Error('Project host catalog is disposed'))
    const existing = this.hosts.get(hostId)
    if (existing) return Promise.resolve(existing)
    const pending = this.pendingHosts.get(hostId)
    if (pending) return pending
    const creation = Promise.resolve()
      .then(() => this.createSshHost(hostId))
      .finally(() => {
        if (this.pendingHosts.get(hostId) === creation) this.pendingHosts.delete(hostId)
      })
    this.pendingHosts.set(hostId, creation)
    return creation
  }

  async disconnectHost(hostId: string): Promise<ProjectHostOption> {
    if (hostId === this.local.hostId) throw new Error('The local host cannot disconnect')
    const host = this.hosts.get(hostId)
    if (!host) throw new Error(`SSH host is not connected: ${hostId}`)
    await host.dispose()
    return hostOption(host, hostId, 'ssh')
  }

  async disconnectSshHosts(): Promise<void> {
    await Promise.all(
      [...this.hosts.values()]
        .filter((host) => host.hostId !== this.local.hostId)
        .map((host) => host.dispose()),
    )
  }

  dispose(): Promise<void> {
    if (this.disposal) return this.disposal
    this.disposed = true
    this.disposal = this.disposeOwnedHosts()
    return this.disposal
  }

  private async disposeOwnedHosts(): Promise<void> {
    await Promise.all(
      [...this.pendingHosts.values()].map((pending) => pending.catch(() => undefined)),
    )
    for (const dispose of this.hostStateDisposers.values()) await dispose()
    this.hostStateDisposers.clear()
    await Promise.all([...this.hosts.values()].map((host) => host.dispose()))
    this.listeners.clear()
  }

  private createSshHost(hostId: string): ProjectHost {
    const config = this.aliases.find((candidate) => candidate.alias === hostId)
    if (!config) throw new Error(`Unknown SSH host alias: ${hostId}`)
    if (this.disposed) throw new Error('Project host catalog is disposed')
    const existing = this.hosts.get(hostId)
    if (existing) return existing
    const host = new SshHost({
      config,
      identitySource: new LocalSshIdentitySource(
        this.local,
        identityFileCandidates(config, this.home),
      ),
      agentSocket: this.agentSocket,
      prompter: this.prompter,
      trust: this.trust.forAlias(config.alias),
    })
    this.hosts.set(hostId, host)
    this.hostStateDisposers.set(
      hostId,
      host.onConnectionState(() => {
        for (const listener of this.listeners) listener()
      }),
    )
    return host
  }
}

const DEFAULT_IDENTITY_NAMES = [
  'id_rsa',
  'id_ecdsa',
  'id_ecdsa_sk',
  'id_ed25519',
  'id_ed25519_sk',
  'id_xmss',
  'id_dsa',
] as const

/** OpenSSH's conventional identity set applies when no IdentityFile is configured. */
export function identityFileCandidates(
  config: SshAliasConfig,
  home = homedir(),
): readonly string[] {
  if (config.identityFiles.length) return [...new Set(config.identityFiles)]
  return DEFAULT_IDENTITY_NAMES.map((name) => join(home, '.ssh', name))
}

async function loadSshAliases(
  host: LocalHost,
  home: string,
): Promise<readonly SshAliasConfig[]> {
  try {
    return parseSshConfig(
      await host.readTextFile(localPath(join(home, '.ssh/config'))),
      home,
    )
  } catch {
    return []
  }
}

function hostOption(
  host: ProjectHost,
  label: string,
  kind: 'local' | 'ssh',
): ProjectHostOption {
  return {
    hostId: host.hostId,
    label,
    kind,
    connectionState: host.connectionState,
    watchTier: host.watchTier,
  }
}
```

</details>


---

<sub>14s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/electron.vite.config.ts.**

/private/var/tmp/ws/255e22c1/hvir/electron.vite.config.ts (lines 1-145)

<details>
<summary>137 lines</summary>

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
```

</details>


---

<sub>14s</sub>

### `rg`

**<h[1-3]|aria-label="[^"]+"**

"<h[1-3]|aria-label="[^"]+"" in **/*.tsx (src/renderer/src)

<details>
<summary>137 matches</summary>

```
[grep content: 113 matches across 49 file(s) under /private/var/tmp/ws/255e22c1/hvir/src/renderer/src]
ErrorBoundary.tsx:         <h1>hvir hit a rendering problem</h1>

git/GitHistoryView.tsx (2 match(es)):
         aria-label="Commit history"
           aria-label="Commit history"

git/GitGraphView.tsx (7 match(es)):
       <section className="git-graph-view" aria-label="Git history graph">
                 aria-label="Repository commits"
       <aside className="git-commit-inspector" aria-label="Commit details">
           <button type="button" aria-label="Close commit details" onClick={onClose}>
               <h2>{detail.subject || '(no subject)'}</h2>
           aria-label="Commit message"
           aria-label="Files changed in commit"
git/GitPanel.tsx:     <section className="rail-section git-panel" aria-label="Git" hidden={hidden}>
git/GitChangesView.tsx:       <h3>

diagnostics/DiagnosticReportDialog.tsx (3 match(es)):
           <h2 id="diagnostic-report-title">Review diagnostic report</h2>
               <h3 id="diagnostic-report-structured-title">Exact structured fields</h3>
               <h3 id="diagnostic-report-image-title">Optional screenshot</h3>

dashboards/WebPane.tsx (5 match(es)):
             aria-label="Back"
             aria-label="Forward"
             aria-label="Reveal source terminal"
             aria-label="Web pane diagnostics"
           <section className="web-pane-diagnostics" aria-label="Web pane diagnostics">
workbench/TerminalLayoutControls.tsx:     <div className="terminal-mode-controls" role="group" aria-label="Terminal layout">
sessions/SessionsOverviewNotice.tsx:       <h2>{title}</h2>
sessions/SessionsTerminalDetail.tsx:             <h1 id="sessions-detail-title">{state.context.title}</h1>
sessions/SessionsOverviewCard.tsx:           <h3>{identity.title}</h3>
sessions/SessionsCollectionToolbar.tsx:       <section className="sessions-controls" aria-label="Session collection controls">

sessions/SessionsOverview.tsx (4 match(es)):
               <nav className="sessions-pagination" aria-label="Sessions pages">
               <div className="sessions-groups" role="list" aria-label="hvir sessions">
                           <h2 id={headingId}>{group.label}</h2>
                             <h3 className="sessions-worktree-heading">

viewer/FileViewer.tsx (4 match(es)):
           <div className="viewer-floating-controls" role="toolbar" aria-label="Viewer">
                   aria-label="Diff base"
                 aria-label="View mode"
                 aria-label="View mode"
viewer/GoToLineControl.tsx:         <form className="go-to-line-popover" aria-label="Go to line" onSubmit={submit}>

viewer/TabStrip.tsx (4 match(es)):
                 aria-label="Close Git history"
               aria-label="Split viewer right"
               aria-label="Close secondary viewer"
             <h2 id={`dirty-tab-close-${pane}`}>
viewer/DiffView.tsx:     <section className="diff-fallback" aria-label="Bounded diff preview">
viewer/FindControl.tsx:           aria-label="Find in file"
harness/ProviderContextMeter.tsx:             aria-label="Context used"
terminal/TerminalContextMenu.tsx:           aria-label="Terminal actions"
settings/ComposerSubmitConsentDialog.tsx:       <h3 id="composer-submit-consent-title">Allow a Claude configuration change?</h3>
settings/SettingsDialog.tsx:             <h2 id="settings-title">Settings</h2>

terminal/TerminalSearch.tsx (5 match(es)):
         aria-label="Search terminal output"
             aria-label="Find in terminal"
             aria-label="Previous terminal match"
             aria-label="Next terminal match"
             aria-label="Close terminal search"

terminal/TerminalRail.tsx (4 match(es)):
               aria-label="Collapse terminal rail"
               aria-label="Split terminal"
               aria-label="Open settings"
                 aria-label="New terminal"
settings/HarnessProfilesSettings.tsx:             <nav className="settings-profile-list" aria-label="Harness profiles">

terminal/TerminalRailCompact.tsx (2 match(es)):
           aria-label="Restore terminal rail"
           aria-label="Open terminals"
settings/SettingsSectionNavigation.tsx:       <nav className="settings-section-index" aria-label="Settings sections">
terminal/TerminalRecoveryDialog.tsx:         <h2 id="terminal-recovery-title">Restore terminals</h2>

settings/HarnessProfileDialogs.tsx (3 match(es)):
         <h3 id="unsaved-harness-title">Unsaved harness profile</h3>
               <h3 id="add-harness-title">Add a harness</h3>
           <h3 id="harness-folder-title">Choose folder on {root.hostId}</h3>

settings/HarnessProfileAdvancedFields.tsx (8 match(es)):
             aria-label="Executable command"
               aria-label="Absolute executable path"
               aria-label="Environment name"
               aria-label="Environment operation"
                 aria-label="Environment value"
                   aria-label="Reference source"
                   aria-label="Reference name"
               aria-label="Path binding name"

App.tsx (3 match(es)):
             aria-label="Project rail"
             <nav className="rail-nav" aria-label="Project views">
           <section className="viewer-panel" aria-label="File viewer">
settings/SettingsSection.tsx:           <h3 id={headingId} tabIndex={-1}>

terminal/TerminalMoveDialog.tsx (2 match(es)):
           <h2 id="terminal-move-title">Move this live terminal?</h2>
           <dl className="terminal-move-details" aria-label="Terminal workspace move">

settings/HarnessProfileEditor.tsx (2 match(es)):
           aria-label="Move profile earlier"
           aria-label="Move profile later"

terminal/TerminalView.tsx (3 match(es)):
             aria-label="Transcript regions"
               aria-label="Previous transcript region"
               aria-label="Next transcript region"

workspaces/SessionDialog.tsx (5 match(es)):
           <h2 id="session-dialog-title">
             <div className="session-hosts" role="listbox" aria-label="Hosts">
                   aria-label="Folder path"
               <div className="folder-browser" aria-label="Folders">
                         aria-label="New folder name"
workspaces/SshPromptDialog.tsx:         <h2 id="ssh-prompt-title">{prompt.title}</h2>

workspaces/ProjectsBar.tsx (6 match(es)):
             aria-label="Projects"
               aria-label="Register project"
               aria-label="Open settings"
               aria-label="Workspaces"
         <h2 id="close-project-title">Close {project.displayName}?</h2>
         <h2 id="worktree-prune-title">

workspaces/WorkspaceCatalogDialogs.tsx (2 match(es)):
         <h2 id="close-workspace-title">Close {workspace.name}?</h2>
         <h2 id="closed-worktrees-title">Closed worktrees in {project.displayName}</h2>
document-review/DocumentReviewInlineSurface.tsx:         aria-label="New review comment"

health/WorkbenchHealthControl.tsx (3 match(es)):
                 <h2 id="workbench-health-title">Workbench health</h2>
       <section className="workbench-health-storage" aria-label="Local diagnostic evidence">
         <h3>Local diagnostic evidence</h3>

tree/FilenameSearch.tsx (3 match(es)):
           aria-label="Find file"
               aria-label="Clear filename search"
             aria-label="Close filename search"

document-review/DocumentReviewDeliveryPanel.tsx (3 match(es)):
       <section className="document-review-delivery" aria-label="Review handoff preview">
             aria-label="Review handoff destination"
               aria-label="Exact review delivery preview"
tree/FileOrganizationDialog.tsx:           <h2 id="file-organization-title">{verb} Entry</h2>
tree/FileCreateOverlays.tsx:               <h2 id="file-create-title">

document-review/DocumentReviewControls.tsx (4 match(es)):
       <div className="document-review-toolbar" role="group" aria-label="Document review">
             aria-label="Add comment for selected source lines"
       <aside className="document-review-chrome" aria-label="Document review comments">
             <h2 id="document-review-discard-title">Discard this review?</h2>
tree/FileTree.tsx:     <section className="rail-section files-panel" aria-label="Files" hidden={hidden}>
tree/FileDeletionDialog.tsx:           <h2 id="file-deletion-title">
tree/FileExternalMoveDialog.tsx:           <h2 id="file-external-move-title">Move External Items Here</h2>
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/255e22c1/hvir/src/renderer/src/App.tsx (lines 1-150)

<details>
<summary>150 lines</summary>

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
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/renderer/src/App.tsx.**

/private/var/tmp/ws/255e22c1/hvir/src/renderer/src/App.tsx (lines 150-340)

<details>
<summary>191 lines</summary>

```
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
    fetch: fetchGit,
    pull: pullGit,
  } = git
  const terminalPathActivation = useTerminalPathActivation({
    root,
    selectedFile: activeTab?.path,
    openFile: (path, position) =>
      openFile(path, true, 'file-tree', 'head', undefined, position),
    revealDirectory: layout.focusTree,
  })
  rootRef.current = root
  sessionErrorRef.current = session.reportError
  workspaceSwitchRef.current = session.switchRelativeWorkspace
  restoreViewerRef.current = restoreViewer
  resetGitGraphRef.current = resetGitGraph
  deactivateGitGraphRef.current = deactivateGitGraph
  deactivateWebPaneRef.current = () => setWebViewActive(false)
  useEffect(() => {
    if (overlays.projectPickerOpen) void refreshHosts()
  }, [overlays.projectPickerOpen, refreshHosts])
  useEffect(() => {
    if (root) setWebWorkspaceRoot(root)
  }, [root, setWebWorkspaceRoot])
  useEffect(() => {
    if (activeWorkspace?.missing) resetGitGraph()
  }, [activeWorkspace?.missing, resetGitGraph])
  useWorkbenchCommands(settings.keybindings, {
    enabled: destination === 'workspace',
    closeWebPane: closeWebView,
    escapeWebPaneFocus: () => setWebViewFocused(false),
    canUseViewerCommands: () => !gitGraphActiveRef.current && !webViewActiveRef.current,
    cycleViewMode: cycleActiveMode,
    findFile: layout.focusFilenameSearch,
    findInFile: viewerCommands.findInFile,
    findInTerminal: terminalWorkspaces.openTerminalSearch,
    goToLine: viewerCommands.goToLine,
    toggleTerminalFocus,
    focusTerminal: layout.focusTerminal,
    focusViewer: () => layout.focusViewer(getActivePane()),
    focusTree: layout.focusTree,
    switchWorkspace: (direction) => {
      setDestination('workspace')
      workspaceSwitchRef.current(direction)
    },
  })
  const revealSourceTerminal = async (view: WebViewState): Promise<void> => {
    const target = projectState?.projects
      .flatMap((project) =>
        project.workspaces.map((workspace) => ({ project, workspace })),
      )
      .find(({ workspace }) => hostPathEquals(workspace.root, view.workspaceRoot))
    if (!target) {
      session.reportError('The source workspace is no longer registered')
      return
    }
    if (!rootRef.current || !hostPathEquals(rootRef.current, view.workspaceRoot)) {
      await session.switchWorkspace(target.project.id, target.workspace.id)
    }
    window.requestAnimationFrame(() => {
      const source = [
        ...document.querySelectorAll<HTMLElement>('[data-terminal-session]'),
      ].find((element) => element.dataset['terminalSession'] === view.sourceTerminalId)
      source?.click()
      source?.focus()
      if (!source) session.reportError('The source terminal has closed')
    })
  }
  if (rootError) return <div className="startup-error">{rootError}</div>
  if (!root) return <div className="startup-loading">Starting hvir…</div>
  const rootWebViews = webViews.filter((view) => hostPathEquals(view.workspaceRoot, root))
  const renderViewerPane = (
    pane: 'primary' | 'secondary',
    paneTabs: typeof primaryTabs,
    paneTab: typeof primaryActiveTab,
    graphPane: boolean,
  ): ReactElement => (
    <section
      className={`viewer-group viewer-group-${pane}`}
      aria-label={`${pane === 'primary' ? 'Primary' : 'Secondary'} file viewer`}
      data-diagnostic-capture="viewer"
      data-viewer-pane={pane}
      tabIndex={-1}
      onPointerDownCapture={(event) => {
        if (event.button !== 0) return
        if (
          paneTab &&
          !(graphPane && gitGraphActive) &&
          !(pane === 'primary' && webViewActive)
        ) {
          focusViewerPane(pane, paneTab.id)
        } else {
          focusViewerPane(pane)
        }
      }}
    >
      <TabStrip
        tabs={paneTabs}
        pathCopyRoot={root}
        pane={pane}
        activeId={
          (graphPane && gitGraphActive) || (pane === 'primary' && webViewActive)
            ? undefined
            : paneTab?.id
        }
        onActivate={(id) => activateTab(id, pane)}
        onClose={closeTab}
        onPin={pinTab}
        onReorder={reorderViewerTabs}
        onMoveToPane={moveTabToPane}
        split={viewerSplit}
        onSplit={openViewerSplit}
        onClosePane={pane === 'secondary' ? closeViewerSplit : undefined}
        graphOpen={graphPane && gitGraphOpen}
        graphActive={graphPane && gitGraphActive}
        onActivateGraph={activateGitGraph}
        onCloseGraph={closeGitGraph}
        webTabs={
          pane === 'primary'
            ? rootWebViews.map((view) => ({ id: view.id, title: view.title }))
            : undefined
        }
        activeWebId={pane === 'primary' && webViewActive ? activeWebViewId : undefined}
        onActivateWeb={activateWebView}
        onCloseWeb={closeWebView}
      />
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/.gitignore.**

/private/var/tmp/ws/255e22c1/hvir/.gitignore

<details>
<summary>16 lines</summary>

```
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
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/main/harness/providers/claude-code.ts.**

/private/var/tmp/ws/255e22c1/hvir/src/main/harness/providers/claude-code.ts (lines 1-65)

<details>
<summary>62 lines</summary>

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
    supportsExactForkVersion: supportsClaudeExactForkVersion,
  }),
  composerConfiguration: { configure: configureClaudeComposerSubmit },
  remoteImagePaste: pathImagePasteContract(),
  documentReviewInsert: claudeCodeReviewInsert,
```

</details>


---

<sub>16s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/src/main/harness/providers/codex.ts.**

/private/var/tmp/ws/255e22c1/hvir/src/main/harness/providers/codex.ts (lines 1-65)

<details>
<summary>60 lines</summary>

```
import {
  asHarnessProviderId,
  asHarnessProfileId,
  type HarnessLaunchMode,
} from '../../../shared'
import type {
  HarnessProvider,
  HarnessLaunchContext,
  HarnessLaunchSpec,
  HarnessDocumentReviewInsertContract,
  HarnessDocumentReviewInsertLaunch,
  HarnessDocumentReviewSendNowContract,
  HarnessDocumentReviewSendNowLaunch,
} from '../harness-provider-contract'
import {
  observeCodexContext,
  observeCodexUsage,
  snapshotCodexUsage,
} from '../codex-context-telemetry'
import { codexSessionDiscovery } from '../codex-session-discovery'
import { versionProbe } from '../harness-provider-probes'
import {
  pathImagePasteContract,
  documentReviewInsertContract,
} from '../harness-composer-contracts'

const CODEX_THREAD_TITLE_CONFIG = 'tui.terminal_title=["thread-title"]'

const CODEX_SUBCOMMAND_BY_LAUNCH_MODE: Readonly<
  Partial<Record<HarnessLaunchMode, 'resume' | 'fork'>>
> = {
  resume: 'resume',
  fork: 'fork',
}

const codexReviewInsert = documentReviewInsertContract(
  () => codexProvider,
  supportsCodexDocumentReviewProfile,
)

const codexReviewSendNow = codexDocumentReviewSendNowContract(codexReviewInsert)

export const codexProvider: HarnessProvider = {
  manifest: {
    id: asHarnessProviderId('codex'),
    displayName: 'Codex',
    sessionKind: 'agent',
    contextPresentation: 'pressure',
    modifiedKeyProtocol: 'csi-u',
    metaEnterAliasesControl: true,
  },
  profile: {
    version: 2,
    defaultProfile: {
      id: asHarnessProfileId('codex-default'),
      displayName: 'Codex',
      description: 'Codex with exact rollout discovery and recovery.',
    },
    reservedArguments: ['resume', 'fork'],
    reservedEnvironmentKeys: ['CODEX_HOME'],
    artifactEnvironmentKeys: ['CODEX_HOME'],
    artifactExecutable: true,
    artifactPathBindings: [],
    applyArgs: (mode, providerArgs, profileArgs) => {
      const subcommand = CODEX_SUBCOMMAND_BY_LAUNCH_MODE[mode]
```

</details>


---

<sub>23s</sub>

### Copilot

I’m documenting hvir as it exists in the source: its workbench capabilities, external harness requirements, setup, and the project’s actual development and packaging commands.

---

<sub>30s</sub>

### `apply_patch`

<details>
<summary>Arguments</summary>

````json
"*** Begin Patch\n*** Add File: README.md\n+# hvir\n+\n+hvir is a desktop workbench for software projects and coding-agent sessions. It brings project files, terminals, Git activity, and supported coding harnesses together in one workspace. Projects can be opened from the local machine or from SSH hosts configured in `~/.ssh/config`.\n+\n+## Features\n+\n+- Run multiple terminal sessions in resizable workspaces.\n+- Launch Claude Code, Codex, Pi, Gemini, GitHub Copilot, Cursor, a plain shell, or a custom command. These tools must be installed and available on the host; hvir does not bundle their services or credentials.\n+- Browse and edit project files, compare changes, inspect Git history, and perform supported branch and remote operations.\n+- Preview common document and web content in the workspace, including rendered Markdown and terminal-originated web panes.\n+- Keep track of coding sessions and provider context or usage information where available.\n+- Add inline document-review comments and hand off review text to supported harnesses.\n+\n+## Requirements\n+\n+- Node.js 24 or newer for development.\n+- npm and the native build tools needed by `node-gyp` for the terminal runtime modules.\n+- Git for Git integration.\n+- The command-line tools and authentication needed for whichever harnesses or SSH hosts you use.\n+\n+## Getting started\n+\n+```sh\n+npm ci\n+npm run dev\n+```\n+\n+`npm ci` runs the project’s post-install setup, which prepares the Electron runtime and rebuilds native modules. Start hvir, register or open a project, and choose a local folder or a configured SSH host.\n+\n+## Development commands\n+\n+| Command | Purpose |\n+| --- | --- |\n+| `npm run dev` | Run hvir in Electron development mode. |\n+| `npm run build` | Type-check and build the application. |\n+| `npm test` | Run the Vitest suite. |\n+| `npm run lint` | Lint the project. |\n+| `npm run verify` | Run architecture checks, lint, type-check, and tests. |\n+| `npm run smoke` | Build a smoke-test app and run the configured smoke scenarios. |\n+| `npm run format:check` | Check formatting with Prettier. |\n+\n+The terminal runtime is checked before development and production builds. If that check reports that the installed `ghostty-web` runtime does not match this checkout, run `npm ci` in the worktree and retry.\n+\n+## Packaging\n+\n+The repository currently defines these release package targets:\n+\n+```sh\n+npm run pack:mac:arm64\n+npm run pack:linux:x64\n+npm run pack:linux:arm64\n+```\n+\n+Artifacts are written to `dist/`. The macOS command builds a package installer; the Linux commands build Debian packages. Packaging may require platform-specific dependencies and signing configuration. A signed macOS package can be built with `npm run pack:mac:arm64:signed` when the required signing identity is configured.\n+\n+## Project layout\n+\n+- `src/main/` — Electron main-process services, project and SSH hosts, terminal sessions, Git integration, and harness adapters.\n+- `src/preload/` — the typed, restricted bridge between the main process and renderer.\n+- `src/renderer/` — the React workbench UI.\n+- `src/shared/` — shared contracts and types.\n+- `src/workers/` — utility-process workers.\n+- `scripts/` — development, architecture, smoke-test, and release tooling.\n+\n+## License\n+\n+hvir is licensed under the MIT License. See [LICENSE](LICENSE) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).\n*** End Patch"
````

</details>

```
Added 1 file(s): /private/var/tmp/ws/255e22c1/hvir/README.md
```


---

<sub>32s</sub>

### `bash`

**Check README diff and worktree status**

$ git diff --check && git status --short

```
?? README.md
<shellId: 4 completed with exit code 0>
```


---

<sub>32s</sub>

### `view`

**view the file at /private/var/tmp/ws/255e22c1/hvir/README.md.**

/private/var/tmp/ws/255e22c1/hvir/README.md

<details>
<summary>48 lines</summary>

````
# hvir

hvir is a desktop workbench for software projects and coding-agent sessions. It brings project files, terminals, Git activity, and supported coding harnesses together in one workspace. Projects can be opened from the local machine or from SSH hosts configured in `~/.ssh/config`.

## Features

- Run multiple terminal sessions in resizable workspaces.
- Launch Claude Code, Codex, Pi, Gemini, GitHub Copilot, Cursor, a plain shell, or a custom command. These tools must be installed and available on the host; hvir does not bundle their services or credentials.
- Browse and edit project files, compare changes, inspect Git history, and perform supported branch and remote operations.
- Preview common document and web content in the workspace, including rendered Markdown and terminal-originated web panes.
- Keep track of coding sessions and provider context or usage information where available.
- Add inline document-review comments and hand off review text to supported harnesses.

## Requirements

- Node.js 24 or newer for development.
- npm and the native build tools needed by `node-gyp` for the terminal runtime modules.
- Git for Git integration.
- The command-line tools and authentication needed for whichever harnesses or SSH hosts you use.

## Getting started

```sh
npm ci
npm run dev
```

`npm ci` runs the project’s post-install setup, which prepares the Electron runtime and rebuilds native modules. Start hvir, register or open a project, and choose a local folder or a configured SSH host.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run hvir in Electron development mode. |
| `npm run build` | Type-check and build the application. |
| `npm test` | Run the Vitest suite. |
| `npm run lint` | Lint the project. |
| `npm run verify` | Run architecture checks, lint, type-check, and tests. |
| `npm run smoke` | Build a smoke-test app and run the configured smoke scenarios. |
| `npm run format:check` | Check formatting with Prettier. |

The terminal runtime is checked before development and production builds. If that check reports that the installed `ghostty-web` runtime does not match this checkout, run `npm ci` in the worktree and retry.

## Packaging

The repository currently defines these release package targets:

```sh
npm run pack:mac:arm64
npm run pack:linux:x64
npm run pack:linux:arm64
```

Artifacts are written to `dist/`. The macOS command builds a package installer; the Linux commands build Debian packages. Packaging may require platform-specific dependencies and signing configuration. A signed macOS package can be built with `npm run pack:mac:arm64:signed` when the required signing identity is configured.

## Project layout

- `src/main/` — Electron main-process services, project and SSH hosts, terminal sessions, Git integration, and harness adapters.
- `src/preload/` — the typed, restricted bridge between the main process and renderer.
- `src/renderer/` — the React workbench UI.
- `src/shared/` — shared contracts and types.
- `src/workers/` — utility-process workers.
- `scripts/` — development, architecture, smoke-test, and release tooling.

## License

hvir is licensed under the MIT License. See [LICENSE](LICENSE) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
````

</details>


---

<sub>33s</sub>

### Copilot

Created `README.md` with an overview of hvir, its key features and requirements, setup steps, development commands, packaging targets, project layout, and license references. `git diff --check` passed.

---

<sub>Generated by [GitHub Copilot CLI](https://github.com/features/copilot/cli)</sub>
