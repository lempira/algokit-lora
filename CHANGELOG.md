# Changelog

All notable changes to this project will be documented in this file.

## [2.0.8](https://github.com/lempira/algokit-lora/compare/v2.0.7...v2.0.8) (2025-07-30)

### 🐛 Bug Fixes

* removed unneeded env vars for testing ([4081dbd](https://github.com/lempira/algokit-lora/commit/4081dbd709e9a86e637a72bfe3d31c9af7b9857c))

## [2.0.7](https://github.com/lempira/algokit-lora/compare/v2.0.6...v2.0.7) (2025-07-30)

### 🐛 Bug Fixes

* added debuging to test ci ([fa4f891](https://github.com/lempira/algokit-lora/commit/fa4f89117f5be7185dd24dda1f5ee0caa17078d1))
* added secrets to workflow_call workflows ([a74a63b](https://github.com/lempira/algokit-lora/commit/a74a63b030c2e96dd600e2f92ac3575f83c391f2))
* created a common bot token generator job ([d20ee5c](https://github.com/lempira/algokit-lora/commit/d20ee5ccb28810902798a46b844cf418412fbc2c))
* more logging to debug releaes ([8a7c227](https://github.com/lempira/algokit-lora/commit/8a7c2272d1e2664bc8c3738212812dcd1ce65289))
* reorder steps ([#480](https://github.com/lempira/algokit-lora/issues/480)) ([d5f0d80](https://github.com/lempira/algokit-lora/commit/d5f0d80f1fb102578e3fb41a2766cdca27d5942a))

## [2.0.6](https://github.com/lempira/algokit-lora/compare/v2.0.5...v2.0.6) (2025-07-30)

### 🐛 Bug Fixes

- add secrets to workflow_call workflows ([a8d7abd](https://github.com/lempira/algokit-lora/commit/a8d7abde7e3067dc0885ee3076e3a850cf453cde))

## [2.0.5](https://github.com/lempira/algokit-lora/compare/v2.0.4...v2.0.5) (2025-07-29)

### 🐛 Bug Fixes

- added permissions to workflow ([5578ef6](https://github.com/lempira/algokit-lora/commit/5578ef657ae770e6f5448be08a2bd47b8a762ec3))

## [2.0.4](https://github.com/lempira/algokit-lora/compare/v2.0.3...v2.0.4) (2025-07-28)

### 🐛 Bug Fixes

- npm config ([3763304](https://github.com/lempira/algokit-lora/commit/376330439e10a5db0ca48ed0905c64a572b2c367))

## [2.0.3](https://github.com/lempira/algokit-lora/compare/v2.0.2...v2.0.3) (2025-07-28)

### 🐛 Bug Fixes

- npm config ([3119f6d](https://github.com/lempira/algokit-lora/commit/3119f6d3a22334a8a4fb6020b471e45a67f2633e))

## [2.0.2](https://github.com/lempira/algokit-lora/compare/v2.0.1...v2.0.2) (2025-07-28)

### 🐛 Bug Fixes

- update workflows for test ([d74d429](https://github.com/lempira/algokit-lora/commit/d74d4298a4ad677144ad3c44da94358828092951))

## [2.0.1](https://github.com/lempira/algokit-lora/compare/v2.0.0...v2.0.1) (2025-07-28)

### 🐛 Bug Fixes

- added debug logging ([2ae63fa](https://github.com/lempira/algokit-lora/commit/2ae63fa6f8f42d08940bbbe4a21f9599a553fe81))
- removed version double quotes ([d25c9fc](https://github.com/lempira/algokit-lora/commit/d25c9fcca90e529816c0d213a27e930cbfcaecc3))
- run crab nebula workflow for release ([49cea94](https://github.com/lempira/algokit-lora/commit/49cea94deea099e966834b35fab21597b3604c0d))

## [2.0.0](https://github.com/lempira/algokit-lora/compare/v1.2.0...v2.0.0) (2025-07-26)

### ⚠ BREAKING CHANGES

- Branching strategy has changed. Production deployments now use 'release' branch, staging uses 'main' branch.

New workflow:

- Feature branches → main (staging environment, beta releases)
- main → release (production environment, stable releases)

- Changed production deployments to trigger on 'release' branch instead of 'main'
- Updated staging deployments to trigger on 'main' branch instead of 'staging'
- Modified promotion workflow to merge 'main' → 'release' instead of 'staging' → 'main'
- Updated semantic-release configuration to create stable releases from 'release' branch and beta releases from 'main'

* docs: add workflow descriptions and update release process documentation

- Added detailed descriptions to all GitHub Actions workflow files explaining their role
- Updated README.md release process section with workflow file names for each step
- Clarified staging deployment uses Cloudflare Pages and desktop releases are manual

All workflows now clearly document when they trigger, what they do, and their role in the release process.

- refactor: removed version env vars

- chore(config): convert semantic-release to TypeScript and optimize configuration

- feat(ci): implement orchestrator release workflow for unified web and desktop releases

• Add orchestrator pattern to coordinate web and desktop releases from single workflow
• Create reusable release-desktop.yaml workflow for cross-platform desktop builds
• Implement efficient build strategy: build frontend once, reuse across all platforms
• Fix semantic-release to upload web artifacts to GitHub releases
• Simplify environment configuration with direct production values
• Add tauri:build convenience script and remove beforeBuildCommand from tauri.conf.json

- chore(docs): moved release info to CONTRIBUTING.md

- test: consolidate settings tests at page level

- chore: adjust the build layout and apply some fixes

- refactor(ci): combine build-app and create-release into single job

* Eliminate duplicate Node.js setup and npm install steps
* Combine build-app and create-release into build-and-release job
* Optimize workflow execution flow: version → sync → commit → build
* Update job dependencies to use single upstream job

refactor: rename create-release action to generate-release-version

- feat: use branch name instead of semantic-release output for production release detection

* Add IS_PRODUCTION_RELEASE environment variable for consistency
* Replace release-published checks with github.ref_name == 'release'

- fix: updated release.yml

- fix: handle breaking changes and cleaned main git history

- chore(ci): removed dependency on release web for sync to main

- chore: removed unused workflow output

- chore: uncommented used code

- refactor: removed keywords parseOpts

- docs: updated contributing guide

- refactor: release config ts to conditionally update changelog only on release branch

- Add versioning ([#452](https://github.com/lempira/algokit-lora/issues/452)) ([2e82736](https://github.com/lempira/algokit-lora/commit/2e82736ce80c557549b479b7e2efd562b6e71aa7))

### ♻️ Code Refactoring

- removed unused clawback field for asset opt-in txn ([5c0623c](https://github.com/lempira/algokit-lora/commit/5c0623cd9fe1d91b42f68595d923f62f11db4771))
- removed unused clawback field for asset opt-out txn ([28eb31f](https://github.com/lempira/algokit-lora/commit/28eb31fbf3ed23a52627be5226cac4409fa4edb4))

### 🐛 Bug Fixes

- Add back copy button on Application Link ([df56770](https://github.com/lempira/algokit-lora/commit/df56770173ad8389f6f87bd8a2737959cc95f806))
- correctly handle b64 asset names which are utf8 strings ([eef7a70](https://github.com/lempira/algokit-lora/commit/eef7a707a8c843d0430e4c9eec49f672f8bcab06))
- crab nebula release version ([c68190f](https://github.com/lempira/algokit-lora/commit/c68190f9bb1db6efa2c2f20219b07d61f4d245b1))
- npm audit ([61191ed](https://github.com/lempira/algokit-lora/commit/61191ed5cc8cb0163af0d246dbd2eb9baf768bbb))
- patch algosdk so deleted applications can be fetched ([7980e4c](https://github.com/lempira/algokit-lora/commit/7980e4c9773982d8761faea1184524cc72ace9b9))
- simplify application box data handling with direct base64 encoding ([fbe6688](https://github.com/lempira/algokit-lora/commit/fbe668885efd75b055ca8bc38f42b18d7fd83f00))
- support visuals for rekeys from app accounts to user accounts ([#453](https://github.com/lempira/algokit-lora/issues/453)) ([50803c9](https://github.com/lempira/algokit-lora/commit/50803c987c9a76e63dfaeddb89420c6052cae794))
- updated deps to fix vunerabilities ([16fe71e](https://github.com/lempira/algokit-lora/commit/16fe71ec22635f5ed1ce4faee0ca75be15d039f0))
- used default import for tailwind animate ([824f50f](https://github.com/lempira/algokit-lora/commit/824f50fc3c66d63bf54c1439e59d252d5df31e11))
- vite vunerability ([59ff1cd](https://github.com/lempira/algokit-lora/commit/59ff1cd7af51adda56a384f4449f5ded2123299a))

### 🚀 Features

- add QR code display for Algorand addresses ([f165af7](https://github.com/lempira/algokit-lora/commit/f165af707cacab6f3cf7f002f2725a242ebe3163))
- add support for viewing application local state ([#456](https://github.com/lempira/algokit-lora/issues/456)) ([7235e66](https://github.com/lempira/algokit-lora/commit/7235e6635f8e6f989dd3ebb37285972469e1cf1c))
- added asset clawback and tests ([4b785ff](https://github.com/lempira/algokit-lora/commit/4b785ff914c168914814a23f1c3487989ec09624))
- added asset create txn to url search params ([0adf6d4](https://github.com/lempira/algokit-lora/commit/0adf6d42a572206885bba18a94dd6ad928888ded))
- added asset destroy and tests ([e1bb99e](https://github.com/lempira/algokit-lora/commit/e1bb99ed93501b299113a2067cb98f479f1064b0))
- added asset freeze and tests ([dff04e7](https://github.com/lempira/algokit-lora/commit/dff04e7e32330c6512c4f84f21ae47428166ffd6))
- added asset opt-in and tests ([b4ec556](https://github.com/lempira/algokit-lora/commit/b4ec556c3f8eeb3efc0d98b114614e43e93e29cf))
- added asset opt-out and tests ([c5d85d8](https://github.com/lempira/algokit-lora/commit/c5d85d869ca504043f8d75f73dec752c100d01be))
- added asset reconfigure and tests ([f5a3a20](https://github.com/lempira/algokit-lora/commit/f5a3a20fb2e901b24363575b78681168f0da39b7))
- added asset transfer and tests ([9a612a1](https://github.com/lempira/algokit-lora/commit/9a612a14e8650e52cfe81d7aaf242c4b9a5dbdfb))
- added payment txn url search params ([6687005](https://github.com/lempira/algokit-lora/commit/6687005d61f1bbf1617b45b9150b537b85812b61))
- Added plausible custom events ([#389](https://github.com/lempira/algokit-lora/issues/389)) ([0ec0206](https://github.com/lempira/algokit-lora/commit/0ec0206bae71f94058925686a3a88c022dd66237))
- Added plausible snippet ([#388](https://github.com/lempira/algokit-lora/issues/388)) ([e5c3ec2](https://github.com/lempira/algokit-lora/commit/e5c3ec241bc797f9def43ebd99f44b38cfca9a58))
- adjust how we visually represent transactions from rekeyed accounts ([5c5b159](https://github.com/lempira/algokit-lora/commit/5c5b159757455c6be7baefbc7ebdbac43c011cc8))
- app create/update ([e449ffb](https://github.com/lempira/algokit-lora/commit/e449ffb87a14586cacc51b70e3b759effa60d838))
- bumped the minor version ([f09955b](https://github.com/lempira/algokit-lora/commit/f09955b2ac03fa5bef8f5bee6f52c02503f9346a))
- bumped the minor version ([c7160cc](https://github.com/lempira/algokit-lora/commit/c7160cc97d189358c90e7089232da8629b268713))
- bumped the minor version ([a8c4b6a](https://github.com/lempira/algokit-lora/commit/a8c4b6ad5647426c8896cb15cf2863712ae6ec15))
- integrate QR code button in account information displays ([3464193](https://github.com/lempira/algokit-lora/commit/3464193ae496c470d00bceb3dfc5f799f22deead))
- integrate QR code functionality alongside existing copy buttons in AccountLink components ([bf87ca3](https://github.com/lempira/algokit-lora/commit/bf87ca3b8c3d48fbe0b51c96911cbb8417c9d0d1))
- render payment txn with close remainder ([dbe6648](https://github.com/lempira/algokit-lora/commit/dbe664846918b760fc9b6bbb00e71b65fcb56623))
- show app update label ([4b6cf20](https://github.com/lempira/algokit-lora/commit/4b6cf20195826e6249352a3596629f58be7841fa))
- test minor bump ([b041968](https://github.com/lempira/algokit-lora/commit/b04196871b28ed748e5119778aad17fabfe6ba70))
- test minor bump test ([c007f3c](https://github.com/lempira/algokit-lora/commit/c007f3c200378e49d04b0ebf27b826c89a8dc43f))
- test minor bump test class 2 ([18617a8](https://github.com/lempira/algokit-lora/commit/18617a84fdbd54ed5b52665be681f9e7c1dedbb8))
- update subscriber which enables block reward synthetic transactions ([bcc81a1](https://github.com/lempira/algokit-lora/commit/bcc81a121d26c7472f147bd91981b6be55163eb2))

## [2.1.0](https://github.com/lempira/algokit-lora/compare/v2.0.1...v2.1.0) (2025-07-26)

### 🚀 Features

- bumped the minor version ([a8c4b6a](https://github.com/lempira/algokit-lora/commit/a8c4b6ad5647426c8896cb15cf2863712ae6ec15))
- test minor bump ([b041968](https://github.com/lempira/algokit-lora/commit/b04196871b28ed748e5119778aad17fabfe6ba70))
- test minor bump test ([c007f3c](https://github.com/lempira/algokit-lora/commit/c007f3c200378e49d04b0ebf27b826c89a8dc43f))
- test minor bump test class 2 ([18617a8](https://github.com/lempira/algokit-lora/commit/18617a84fdbd54ed5b52665be681f9e7c1dedbb8))

## [2.0.1](https://github.com/algorandfoundation/algokit-lora/compare/v2.0.0...v2.0.1) (2025-07-25)

### 🐛 Bug Fixes

<<<<<<< HEAD

- # crab nebula release version ([c68190f](https://github.com/algorandfoundation/algokit-lora/commit/c68190f9bb1db6efa2c2f20219b07d61f4d245b1))

* crab nebula release version ([c68190f](https://github.com/algorandfoundation/algokit-lora/commit/c68190f9bb1db6efa2c2f20219b07d61f4d245b1))
  > > > > > > > 0bd83c8 (chore: sync stable release 2.0.4 to main [skip ci])

## [2.0.0](https://github.com/algorandfoundation/algokit-lora/compare/v1.2.0...v2.0.0) (2025-07-25)

### ⚠ BREAKING CHANGES

<<<<<<< HEAD

- Branching strategy has changed. Production deployments now use 'release' branch, staging uses 'main' branch.

New workflow:

=======

- Branching strategy has changed. Production deployments now use 'release' branch, staging uses 'main' branch.

New workflow:

> > > > > > > 0bd83c8 (chore: sync stable release 2.0.4 to main [skip ci])

- Feature branches → main (staging environment, beta releases)
- main → release (production environment, stable releases)

- Changed production deployments to trigger on 'release' branch instead of 'main'
- Updated staging deployments to trigger on 'main' branch instead of 'staging'
- Modified promotion workflow to merge 'main' → 'release' instead of 'staging' → 'main'
- Updated semantic-release configuration to create stable releases from 'release' branch and beta releases from 'main'

* docs: add workflow descriptions and update release process documentation

- Added detailed descriptions to all GitHub Actions workflow files explaining their role
- Updated README.md release process section with workflow file names for each step
- Clarified staging deployment uses Cloudflare Pages and desktop releases are manual

All workflows now clearly document when they trigger, what they do, and their role in the release process.

<<<<<<< HEAD

- refactor: removed version env vars

- chore(config): convert semantic-release to TypeScript and optimize configuration

- # feat(ci): implement orchestrator release workflow for unified web and desktop releases

* refactor: removed version env vars

* chore(config): convert semantic-release to TypeScript and optimize configuration

* feat(ci): implement orchestrator release workflow for unified web and desktop releases
  > > > > > > > 0bd83c8 (chore: sync stable release 2.0.4 to main [skip ci])

• Add orchestrator pattern to coordinate web and desktop releases from single workflow
• Create reusable release-desktop.yaml workflow for cross-platform desktop builds
• Implement efficient build strategy: build frontend once, reuse across all platforms
• Fix semantic-release to upload web artifacts to GitHub releases
• Simplify environment configuration with direct production values
• Add tauri:build convenience script and remove beforeBuildCommand from tauri.conf.json

<<<<<<< HEAD

- chore(docs): moved release info to CONTRIBUTING.md

- test: consolidate settings tests at page level

- chore: adjust the build layout and apply some fixes

- refactor(ci): combine build-app and create-release into single job

* Eliminate duplicate Node.js setup and npm install steps
* Combine build-app and create-release into build-and-release job
* Optimize workflow execution flow: version → sync → commit → build
* Update job dependencies to use single upstream job

refactor: rename create-release action to generate-release-version

- feat: use branch name instead of semantic-release output for production release detection

* Add IS_PRODUCTION_RELEASE environment variable for consistency
* Replace release-published checks with github.ref_name == 'release'

- fix: updated release.yml

- fix: handle breaking changes and cleaned main git history

- chore(ci): removed dependency on release web for sync to main

- chore: removed unused workflow output

- chore: uncommented used code

- refactor: removed keywords parseOpts

- docs: updated contributing guide

- refactor: release config ts to conditionally update changelog only on release branch

- Add versioning ([#452](https://github.com/algorandfoundation/algokit-lora/issues/452)) ([2e82736](https://github.com/algorandfoundation/algokit-lora/commit/2e82736ce80c557549b479b7e2efd562b6e71aa7))

### ♻️ Code Refactoring

- removed unused clawback field for asset opt-in txn ([5c0623c](https://github.com/algorandfoundation/algokit-lora/commit/5c0623cd9fe1d91b42f68595d923f62f11db4771))
- removed unused clawback field for asset opt-out txn ([28eb31f](https://github.com/algorandfoundation/algokit-lora/commit/28eb31fbf3ed23a52627be5226cac4409fa4edb4))

### 🐛 Bug Fixes

- Add back copy button on Application Link ([df56770](https://github.com/algorandfoundation/algokit-lora/commit/df56770173ad8389f6f87bd8a2737959cc95f806))
- correctly handle b64 asset names which are utf8 strings ([eef7a70](https://github.com/algorandfoundation/algokit-lora/commit/eef7a707a8c843d0430e4c9eec49f672f8bcab06))
- npm audit ([61191ed](https://github.com/algorandfoundation/algokit-lora/commit/61191ed5cc8cb0163af0d246dbd2eb9baf768bbb))
- patch algosdk so deleted applications can be fetched ([7980e4c](https://github.com/algorandfoundation/algokit-lora/commit/7980e4c9773982d8761faea1184524cc72ace9b9))
- simplify application box data handling with direct base64 encoding ([fbe6688](https://github.com/algorandfoundation/algokit-lora/commit/fbe668885efd75b055ca8bc38f42b18d7fd83f00))
- support visuals for rekeys from app accounts to user accounts ([#453](https://github.com/algorandfoundation/algokit-lora/issues/453)) ([50803c9](https://github.com/algorandfoundation/algokit-lora/commit/50803c987c9a76e63dfaeddb89420c6052cae794))
- updated deps to fix vunerabilities ([16fe71e](https://github.com/algorandfoundation/algokit-lora/commit/16fe71ec22635f5ed1ce4faee0ca75be15d039f0))
- used default import for tailwind animate ([824f50f](https://github.com/algorandfoundation/algokit-lora/commit/824f50fc3c66d63bf54c1439e59d252d5df31e11))
- vite vunerability ([59ff1cd](https://github.com/algorandfoundation/algokit-lora/commit/59ff1cd7af51adda56a384f4449f5ded2123299a))

### 🚀 Features

- add QR code display for Algorand addresses ([f165af7](https://github.com/algorandfoundation/algokit-lora/commit/f165af707cacab6f3cf7f002f2725a242ebe3163))
- add support for viewing application local state ([#456](https://github.com/algorandfoundation/algokit-lora/issues/456)) ([7235e66](https://github.com/algorandfoundation/algokit-lora/commit/7235e6635f8e6f989dd3ebb37285972469e1cf1c))
- added asset clawback and tests ([4b785ff](https://github.com/algorandfoundation/algokit-lora/commit/4b785ff914c168914814a23f1c3487989ec09624))
- added asset create txn to url search params ([0adf6d4](https://github.com/algorandfoundation/algokit-lora/commit/0adf6d42a572206885bba18a94dd6ad928888ded))
- added asset destroy and tests ([e1bb99e](https://github.com/algorandfoundation/algokit-lora/commit/e1bb99ed93501b299113a2067cb98f479f1064b0))
- added asset freeze and tests ([dff04e7](https://github.com/algorandfoundation/algokit-lora/commit/dff04e7e32330c6512c4f84f21ae47428166ffd6))
- added asset opt-in and tests ([b4ec556](https://github.com/algorandfoundation/algokit-lora/commit/b4ec556c3f8eeb3efc0d98b114614e43e93e29cf))
- added asset opt-out and tests ([c5d85d8](https://github.com/algorandfoundation/algokit-lora/commit/c5d85d869ca504043f8d75f73dec752c100d01be))
- added asset reconfigure and tests ([f5a3a20](https://github.com/algorandfoundation/algokit-lora/commit/f5a3a20fb2e901b24363575b78681168f0da39b7))
- added asset transfer and tests ([9a612a1](https://github.com/algorandfoundation/algokit-lora/commit/9a612a14e8650e52cfe81d7aaf242c4b9a5dbdfb))
- added payment txn url search params ([6687005](https://github.com/algorandfoundation/algokit-lora/commit/6687005d61f1bbf1617b45b9150b537b85812b61))
- Added plausible custom events ([#389](https://github.com/algorandfoundation/algokit-lora/issues/389)) ([0ec0206](https://github.com/algorandfoundation/algokit-lora/commit/0ec0206bae71f94058925686a3a88c022dd66237))
- Added plausible snippet ([#388](https://github.com/algorandfoundation/algokit-lora/issues/388)) ([e5c3ec2](https://github.com/algorandfoundation/algokit-lora/commit/e5c3ec241bc797f9def43ebd99f44b38cfca9a58))
- adjust how we visually represent transactions from rekeyed accounts ([5c5b159](https://github.com/algorandfoundation/algokit-lora/commit/5c5b159757455c6be7baefbc7ebdbac43c011cc8))
- app create/update ([e449ffb](https://github.com/algorandfoundation/algokit-lora/commit/e449ffb87a14586cacc51b70e3b759effa60d838))
- integrate QR code button in account information displays ([3464193](https://github.com/algorandfoundation/algokit-lora/commit/3464193ae496c470d00bceb3dfc5f799f22deead))
- integrate QR code functionality alongside existing copy buttons in AccountLink components ([bf87ca3](https://github.com/algorandfoundation/algokit-lora/commit/bf87ca3b8c3d48fbe0b51c96911cbb8417c9d0d1))
- render payment txn with close remainder ([dbe6648](https://github.com/algorandfoundation/algokit-lora/commit/dbe664846918b760fc9b6bbb00e71b65fcb56623))
- show app update label ([4b6cf20](https://github.com/algorandfoundation/algokit-lora/commit/4b6cf20195826e6249352a3596629f58be7841fa))
- # update subscriber which enables block reward synthetic transactions ([bcc81a1](https://github.com/algorandfoundation/algokit-lora/commit/bcc81a121d26c7472f147bd91981b6be55163eb2))

* chore(docs): moved release info to CONTRIBUTING.md

* test: consolidate settings tests at page level

* chore: adjust the build layout and apply some fixes

* refactor(ci): combine build-app and create-release into single job

- Eliminate duplicate Node.js setup and npm install steps
- Combine build-app and create-release into build-and-release job
- Optimize workflow execution flow: version → sync → commit → build
- Update job dependencies to use single upstream job

refactor: rename create-release action to generate-release-version

- feat: use branch name instead of semantic-release output for production release detection

* Add IS_PRODUCTION_RELEASE environment variable for consistency
* Replace release-published checks with github.ref_name == 'release'

- fix: updated release.yml

- fix: handle breaking changes and cleaned main git history

- chore(ci): removed dependency on release web for sync to main

- chore: removed unused workflow output

- chore: uncommented used code

- refactor: removed keywords parseOpts

- docs: updated contributing guide

- refactor: release config ts to conditionally update changelog only on release branch

- Add versioning ([#452](https://github.com/algorandfoundation/algokit-lora/issues/452)) ([2e82736](https://github.com/algorandfoundation/algokit-lora/commit/2e82736ce80c557549b479b7e2efd562b6e71aa7))

### ♻️ Code Refactoring

- removed unused clawback field for asset opt-in txn ([5c0623c](https://github.com/algorandfoundation/algokit-lora/commit/5c0623cd9fe1d91b42f68595d923f62f11db4771))
- removed unused clawback field for asset opt-out txn ([28eb31f](https://github.com/algorandfoundation/algokit-lora/commit/28eb31fbf3ed23a52627be5226cac4409fa4edb4))

### 🐛 Bug Fixes

- Add back copy button on Application Link ([df56770](https://github.com/algorandfoundation/algokit-lora/commit/df56770173ad8389f6f87bd8a2737959cc95f806))
- correctly handle b64 asset names which are utf8 strings ([eef7a70](https://github.com/algorandfoundation/algokit-lora/commit/eef7a707a8c843d0430e4c9eec49f672f8bcab06))
- npm audit ([61191ed](https://github.com/algorandfoundation/algokit-lora/commit/61191ed5cc8cb0163af0d246dbd2eb9baf768bbb))
- patch algosdk so deleted applications can be fetched ([7980e4c](https://github.com/algorandfoundation/algokit-lora/commit/7980e4c9773982d8761faea1184524cc72ace9b9))
- simplify application box data handling with direct base64 encoding ([fbe6688](https://github.com/algorandfoundation/algokit-lora/commit/fbe668885efd75b055ca8bc38f42b18d7fd83f00))
- support visuals for rekeys from app accounts to user accounts ([#453](https://github.com/algorandfoundation/algokit-lora/issues/453)) ([50803c9](https://github.com/algorandfoundation/algokit-lora/commit/50803c987c9a76e63dfaeddb89420c6052cae794))
- updated deps to fix vunerabilities ([16fe71e](https://github.com/algorandfoundation/algokit-lora/commit/16fe71ec22635f5ed1ce4faee0ca75be15d039f0))
- used default import for tailwind animate ([824f50f](https://github.com/algorandfoundation/algokit-lora/commit/824f50fc3c66d63bf54c1439e59d252d5df31e11))
- vite vunerability ([59ff1cd](https://github.com/algorandfoundation/algokit-lora/commit/59ff1cd7af51adda56a384f4449f5ded2123299a))

### 🚀 Features

- add QR code display for Algorand addresses ([f165af7](https://github.com/algorandfoundation/algokit-lora/commit/f165af707cacab6f3cf7f002f2725a242ebe3163))
- add support for viewing application local state ([#456](https://github.com/algorandfoundation/algokit-lora/issues/456)) ([7235e66](https://github.com/algorandfoundation/algokit-lora/commit/7235e6635f8e6f989dd3ebb37285972469e1cf1c))
- added asset clawback and tests ([4b785ff](https://github.com/algorandfoundation/algokit-lora/commit/4b785ff914c168914814a23f1c3487989ec09624))
- added asset create txn to url search params ([0adf6d4](https://github.com/algorandfoundation/algokit-lora/commit/0adf6d42a572206885bba18a94dd6ad928888ded))
- added asset destroy and tests ([e1bb99e](https://github.com/algorandfoundation/algokit-lora/commit/e1bb99ed93501b299113a2067cb98f479f1064b0))
- added asset freeze and tests ([dff04e7](https://github.com/algorandfoundation/algokit-lora/commit/dff04e7e32330c6512c4f84f21ae47428166ffd6))
- added asset opt-in and tests ([b4ec556](https://github.com/algorandfoundation/algokit-lora/commit/b4ec556c3f8eeb3efc0d98b114614e43e93e29cf))
- added asset opt-out and tests ([c5d85d8](https://github.com/algorandfoundation/algokit-lora/commit/c5d85d869ca504043f8d75f73dec752c100d01be))
- added asset reconfigure and tests ([f5a3a20](https://github.com/algorandfoundation/algokit-lora/commit/f5a3a20fb2e901b24363575b78681168f0da39b7))
- added asset transfer and tests ([9a612a1](https://github.com/algorandfoundation/algokit-lora/commit/9a612a14e8650e52cfe81d7aaf242c4b9a5dbdfb))
- added payment txn url search params ([6687005](https://github.com/algorandfoundation/algokit-lora/commit/6687005d61f1bbf1617b45b9150b537b85812b61))
- Added plausible custom events ([#389](https://github.com/algorandfoundation/algokit-lora/issues/389)) ([0ec0206](https://github.com/algorandfoundation/algokit-lora/commit/0ec0206bae71f94058925686a3a88c022dd66237))
- Added plausible snippet ([#388](https://github.com/algorandfoundation/algokit-lora/issues/388)) ([e5c3ec2](https://github.com/algorandfoundation/algokit-lora/commit/e5c3ec241bc797f9def43ebd99f44b38cfca9a58))
- adjust how we visually represent transactions from rekeyed accounts ([5c5b159](https://github.com/algorandfoundation/algokit-lora/commit/5c5b159757455c6be7baefbc7ebdbac43c011cc8))
- app create/update ([e449ffb](https://github.com/algorandfoundation/algokit-lora/commit/e449ffb87a14586cacc51b70e3b759effa60d838))
- integrate QR code button in account information displays ([3464193](https://github.com/algorandfoundation/algokit-lora/commit/3464193ae496c470d00bceb3dfc5f799f22deead))
- integrate QR code functionality alongside existing copy buttons in AccountLink components ([bf87ca3](https://github.com/algorandfoundation/algokit-lora/commit/bf87ca3b8c3d48fbe0b51c96911cbb8417c9d0d1))
- render payment txn with close remainder ([dbe6648](https://github.com/algorandfoundation/algokit-lora/commit/dbe664846918b760fc9b6bbb00e71b65fcb56623))
- show app update label ([4b6cf20](https://github.com/algorandfoundation/algokit-lora/commit/4b6cf20195826e6249352a3596629f58be7841fa))
- update subscriber which enables block reward synthetic transactions ([bcc81a1](https://github.com/algorandfoundation/algokit-lora/commit/bcc81a121d26c7472f147bd91981b6be55163eb2))
  > > > > > > > 0bd83c8 (chore: sync stable release 2.0.4 to main [skip ci])

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### ✨ Features

- Comprehensive versioning system with staging and production environments
- Automated semantic versioning based on conventional commits
- Enhanced version display in Settings page with environment indicators
- Unified version management for both web and desktop applications
- Version synchronization between package.json and Cargo.toml
- Automated deployment workflows for staging and production

### 🔧 Internal

- Added version environment variables and configuration system
- Enhanced semantic-release configuration for multi-environment support
- Created reusable version display components and hooks
- Comprehensive test coverage for version management features
- Bot token authentication across all workflows
- Version injection into build processes

---

## About This Changelog

This changelog is automatically maintained by [semantic-release](https://github.com/semantic-release/semantic-release) based on [conventional commits](https://www.conventionalcommits.org/).

### Commit Types

- **feat**: ✨ New features
- **fix**: 🐛 Bug fixes
- **docs**: 📝 Documentation changes
- **style**: 💄 Code style changes
- **refactor**: ♻️ Code refactoring
- **perf**: ⚡ Performance improvements
- **test**: 🧪 Test changes
- **chore**: 🔧 Internal/maintenance changes

### Release Channels

- **Production**: Stable releases from `main` branch (e.g., `v1.2.0`)
- **Beta**: Pre-release versions from `staging` branch (e.g., `v1.2.0-beta.1`)
