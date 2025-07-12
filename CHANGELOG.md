# Changelog

All notable changes to this project will be documented in this file.

## [3.1.0](https://github.com/lempira/algokit-lora/compare/v3.0.0...v3.1.0) (2025-07-12)

### 🚀 Features

* a feature bump test ([117f737](https://github.com/lempira/algokit-lora/commit/117f737623fcfc88583674ae404f6a5c35c3f316))
* a feature bump test 2 ([0e4955e](https://github.com/lempira/algokit-lora/commit/0e4955eaf746bb8de1b46fe008ac99acd40ef649))

## [3.1.0-beta.2](https://github.com/lempira/algokit-lora/compare/v3.1.0-beta.1...v3.1.0-beta.2) (2025-07-12)

### 🚀 Features

* a feature bump test 2 ([0e4955e](https://github.com/lempira/algokit-lora/commit/0e4955eaf746bb8de1b46fe008ac99acd40ef649))

## [3.1.0-beta.1](https://github.com/lempira/algokit-lora/compare/v3.0.0...v3.1.0-beta.1) (2025-07-12)

### 🚀 Features

* a feature bump test ([117f737](https://github.com/lempira/algokit-lora/commit/117f737623fcfc88583674ae404f6a5c35c3f316))

## [3.0.0](https://github.com/lempira/algokit-lora/compare/v2.0.0...v3.0.0) (2025-07-12)

### ⚠ BREAKING CHANGES

* **ci:** a major bump test from a fix
* **ci:** test major bump from a fix

### 🐛 Bug Fixes

* **ci:** a major bump test from a fix ([de18e8a](https://github.com/lempira/algokit-lora/commit/de18e8a40e37749300bbb0575b98e141a0db2264))
* **ci:** test major bump from a fix ([95e97ef](https://github.com/lempira/algokit-lora/commit/95e97ef4a4c5d6b60902094d5ec40d11d31f4ccd))
* with breaking word in it should still produce patch bump ([c3a7a91](https://github.com/lempira/algokit-lora/commit/c3a7a9173993ef6ef22598c9345bcc760c03ad71))

## [3.0.0-beta.1](https://github.com/lempira/algokit-lora/compare/v2.0.1-beta.2...v3.0.0-beta.1) (2025-07-12)

### ⚠ BREAKING CHANGES

* **ci:** a major bump test from a fix

### 🐛 Bug Fixes

* **ci:** a major bump test from a fix ([de18e8a](https://github.com/lempira/algokit-lora/commit/de18e8a40e37749300bbb0575b98e141a0db2264))

## [2.0.1-beta.2](https://github.com/lempira/algokit-lora/compare/v2.0.1-beta.1...v2.0.1-beta.2) (2025-07-12)

### ⚠ BREAKING CHANGES

* **ci:** test major bump from a fix

### 🐛 Bug Fixes

* **ci:** test major bump from a fix ([95e97ef](https://github.com/lempira/algokit-lora/commit/95e97ef4a4c5d6b60902094d5ec40d11d31f4ccd))

## [2.0.1-beta.1](https://github.com/lempira/algokit-lora/compare/v2.0.0...v2.0.1-beta.1) (2025-07-12)

### 🐛 Bug Fixes

* with breaking word in it should still produce patch bump ([c3a7a91](https://github.com/lempira/algokit-lora/commit/c3a7a9173993ef6ef22598c9345bcc760c03ad71))

## [2.0.0](https://github.com/lempira/algokit-lora/compare/v1.2.0...v2.0.0) (2025-07-12)

### ⚠ BREAKING CHANGES

* Branching strategy has changed. Production deployments now use 'release' branch, staging uses 'main' branch.

New workflow:
- Feature branches → main (staging environment, beta releases)
- main → release (production environment, stable releases)

- Changed production deployments to trigger on 'release' branch instead of 'main'
- Updated staging deployments to trigger on 'main' branch instead of 'staging'
- Modified promotion workflow to merge 'main' → 'release' instead of 'staging' → 'main'
- Updated semantic-release configuration to create stable releases from 'release' branch and beta releases from 'main'

### ♻️ Code Refactoring

* **ci:** combine build-app and create-release into single job ([84219ab](https://github.com/lempira/algokit-lora/commit/84219aba54a91ad0d73941770eae3d5cc648f1cb))
* removed unused clawback field for asset opt-in txn ([5c0623c](https://github.com/lempira/algokit-lora/commit/5c0623cd9fe1d91b42f68595d923f62f11db4771))
* removed unused clawback field for asset opt-out txn ([28eb31f](https://github.com/lempira/algokit-lora/commit/28eb31fbf3ed23a52627be5226cac4409fa4edb4))
* removed version env vars ([cfd4608](https://github.com/lempira/algokit-lora/commit/cfd4608b5c2db4972fe3529539b66101e7a8b7a2))

### 🐛 Bug Fixes

* Add back copy button on Application Link ([df56770](https://github.com/lempira/algokit-lora/commit/df56770173ad8389f6f87bd8a2737959cc95f806))
* correctly handle b64 asset names which are utf8 strings ([eef7a70](https://github.com/lempira/algokit-lora/commit/eef7a707a8c843d0430e4c9eec49f672f8bcab06))
* handle breaking changes and cleaned main git history ([76f8963](https://github.com/lempira/algokit-lora/commit/76f89638ecc5d93e44716955b9b1f5e9e5f4abe7))
* patch algosdk so deleted applications can be fetched ([7980e4c](https://github.com/lempira/algokit-lora/commit/7980e4c9773982d8761faea1184524cc72ace9b9))
* simplify application box data handling with direct base64 encoding ([fbe6688](https://github.com/lempira/algokit-lora/commit/fbe668885efd75b055ca8bc38f42b18d7fd83f00))
* support visuals for rekeys from app accounts to user accounts ([#453](https://github.com/lempira/algokit-lora/issues/453)) ([50803c9](https://github.com/lempira/algokit-lora/commit/50803c987c9a76e63dfaeddb89420c6052cae794))
* test fix patch bump ([b7ddcfe](https://github.com/lempira/algokit-lora/commit/b7ddcfe9a4cb7d8497f97314bfeb222f7cda1451))
* updated deps to fix vunerabilities ([16fe71e](https://github.com/lempira/algokit-lora/commit/16fe71ec22635f5ed1ce4faee0ca75be15d039f0))
* updated release.yml ([f9d1eba](https://github.com/lempira/algokit-lora/commit/f9d1eba222948f60fb59f75c532c1398d722c875))
* used default import for tailwind animate ([824f50f](https://github.com/lempira/algokit-lora/commit/824f50fc3c66d63bf54c1439e59d252d5df31e11))
* vite vunerability ([59ff1cd](https://github.com/lempira/algokit-lora/commit/59ff1cd7af51adda56a384f4449f5ded2123299a))

### 📚 Documentation

* add comprehensive versioning documentation ([6be41a3](https://github.com/lempira/algokit-lora/commit/6be41a3819d53cf018738ad207b848c30eb62784))
* add comprehensive versioning documentation ([4b84805](https://github.com/lempira/algokit-lora/commit/4b84805383b4b2789df0856f16d7f3bc6e622f48))
* add workflow descriptions and update release process documentation ([17bec6f](https://github.com/lempira/algokit-lora/commit/17bec6f6f8387e64d89b451376ca6bd94e46621c))

### 🚀 Features

* add QR code display for Algorand addresses ([f165af7](https://github.com/lempira/algokit-lora/commit/f165af707cacab6f3cf7f002f2725a242ebe3163))
* add support for viewing application local state ([#456](https://github.com/lempira/algokit-lora/issues/456)) ([7235e66](https://github.com/lempira/algokit-lora/commit/7235e6635f8e6f989dd3ebb37285972469e1cf1c))
* add version environment variables and configuration ([826444c](https://github.com/lempira/algokit-lora/commit/826444c1ca35ea1a250ce6999054698e29d777f3))
* add version synchronization script for web and desktop builds ([5d69bcc](https://github.com/lempira/algokit-lora/commit/5d69bcc2bf21a2107df2e00aad8de4af20dc35b4))
* added asset clawback and tests ([4b785ff](https://github.com/lempira/algokit-lora/commit/4b785ff914c168914814a23f1c3487989ec09624))
* added asset create txn to url search params ([0adf6d4](https://github.com/lempira/algokit-lora/commit/0adf6d42a572206885bba18a94dd6ad928888ded))
* added asset destroy and tests ([e1bb99e](https://github.com/lempira/algokit-lora/commit/e1bb99ed93501b299113a2067cb98f479f1064b0))
* added asset freeze and tests ([dff04e7](https://github.com/lempira/algokit-lora/commit/dff04e7e32330c6512c4f84f21ae47428166ffd6))
* added asset opt-in and tests ([b4ec556](https://github.com/lempira/algokit-lora/commit/b4ec556c3f8eeb3efc0d98b114614e43e93e29cf))
* added asset opt-out and tests ([c5d85d8](https://github.com/lempira/algokit-lora/commit/c5d85d869ca504043f8d75f73dec752c100d01be))
* added asset reconfigure and tests ([f5a3a20](https://github.com/lempira/algokit-lora/commit/f5a3a20fb2e901b24363575b78681168f0da39b7))
* added asset transfer and tests ([9a612a1](https://github.com/lempira/algokit-lora/commit/9a612a14e8650e52cfe81d7aaf242c4b9a5dbdfb))
* added payment txn url search params ([6687005](https://github.com/lempira/algokit-lora/commit/6687005d61f1bbf1617b45b9150b537b85812b61))
* Added plausible custom events ([#389](https://github.com/lempira/algokit-lora/issues/389)) ([0ec0206](https://github.com/lempira/algokit-lora/commit/0ec0206bae71f94058925686a3a88c022dd66237))
* Added plausible snippet ([#388](https://github.com/lempira/algokit-lora/issues/388)) ([e5c3ec2](https://github.com/lempira/algokit-lora/commit/e5c3ec241bc797f9def43ebd99f44b38cfca9a58))
* adjust how we visually represent transactions from rekeyed accounts ([5c5b159](https://github.com/lempira/algokit-lora/commit/5c5b159757455c6be7baefbc7ebdbac43c011cc8))
* app create/update ([e449ffb](https://github.com/lempira/algokit-lora/commit/e449ffb87a14586cacc51b70e3b759effa60d838))
* **ci:** implement orchestrator release workflow for unified web and desktop releases ([14f413a](https://github.com/lempira/algokit-lora/commit/14f413a98778e9689ba1166f3e0d9822a7146bc5))
* create staging deployment workflow for automated beta releases ([522b214](https://github.com/lempira/algokit-lora/commit/522b214f2a1ec1653b3f846639257b345f030e6c))
* create unified version management system ([578b72d](https://github.com/lempira/algokit-lora/commit/578b72d33e7e30b57ca8c77a88d3179f24fc0347))
* enhance semantic-release configuration for staging/production workflow ([73f4932](https://github.com/lempira/algokit-lora/commit/73f49321376fd94d31e1ba0093908d5925886d9f))
* integrate QR code button in account information displays ([3464193](https://github.com/lempira/algokit-lora/commit/3464193ae496c470d00bceb3dfc5f799f22deead))
* integrate QR code functionality alongside existing copy buttons in AccountLink components ([bf87ca3](https://github.com/lempira/algokit-lora/commit/bf87ca3b8c3d48fbe0b51c96911cbb8417c9d0d1))
* render payment txn with close remainder ([dbe6648](https://github.com/lempira/algokit-lora/commit/dbe664846918b760fc9b6bbb00e71b65fcb56623))
* show app update label ([4b6cf20](https://github.com/lempira/algokit-lora/commit/4b6cf20195826e6249352a3596629f58be7841fa))
* update branching strategy to use main as staging and release as production ([ac7f080](https://github.com/lempira/algokit-lora/commit/ac7f080ef93132783f34b62a6a52af1ecac3e1c9))
* update desktop release workflow integration ([047064d](https://github.com/lempira/algokit-lora/commit/047064d922478138c189944da06ef194c37f0b88))
* update production release workflow and add promotion workflow ([f5446d5](https://github.com/lempira/algokit-lora/commit/f5446d525978785669d7e8f1e4c15255edd4e620))
* update settings page with enhanced version display and comprehensive tests ([ac1336c](https://github.com/lempira/algokit-lora/commit/ac1336c557e2d6443a033f14e5ed12bf47a4a571))
* update subscriber which enables block reward synthetic transactions ([bcc81a1](https://github.com/lempira/algokit-lora/commit/bcc81a121d26c7472f147bd91981b6be55163eb2))
* use branch name instead of semantic-release output for production release detection ([9d9f872](https://github.com/lempira/algokit-lora/commit/9d9f87270f8557c3c2ddc7ad4fb0b97eb5dec868))

## [2.0.0-beta.1](https://github.com/lempira/algokit-lora/compare/v1.2.0...v2.0.0-beta.1) (2025-07-11)

### ⚠ BREAKING CHANGES

* Branching strategy has changed. Production deployments now use 'release' branch, staging uses 'main' branch.

New workflow:
- Feature branches → main (staging environment, beta releases)
- main → release (production environment, stable releases)

- Changed production deployments to trigger on 'release' branch instead of 'main'
- Updated staging deployments to trigger on 'main' branch instead of 'staging'
- Modified promotion workflow to merge 'main' → 'release' instead of 'staging' → 'main'
- Updated semantic-release configuration to create stable releases from 'release' branch and beta releases from 'main'

### ♻️ Code Refactoring

* **ci:** combine build-app and create-release into single job ([84219ab](https://github.com/lempira/algokit-lora/commit/84219aba54a91ad0d73941770eae3d5cc648f1cb))
* removed unused clawback field for asset opt-in txn ([5c0623c](https://github.com/lempira/algokit-lora/commit/5c0623cd9fe1d91b42f68595d923f62f11db4771))
* removed unused clawback field for asset opt-out txn ([28eb31f](https://github.com/lempira/algokit-lora/commit/28eb31fbf3ed23a52627be5226cac4409fa4edb4))
* removed version env vars ([cfd4608](https://github.com/lempira/algokit-lora/commit/cfd4608b5c2db4972fe3529539b66101e7a8b7a2))

### 🐛 Bug Fixes

* Add back copy button on Application Link ([df56770](https://github.com/lempira/algokit-lora/commit/df56770173ad8389f6f87bd8a2737959cc95f806))
* correctly handle b64 asset names which are utf8 strings ([eef7a70](https://github.com/lempira/algokit-lora/commit/eef7a707a8c843d0430e4c9eec49f672f8bcab06))
* handle breaking changes and cleaned main git history ([76f8963](https://github.com/lempira/algokit-lora/commit/76f89638ecc5d93e44716955b9b1f5e9e5f4abe7))
* patch algosdk so deleted applications can be fetched ([7980e4c](https://github.com/lempira/algokit-lora/commit/7980e4c9773982d8761faea1184524cc72ace9b9))
* simplify application box data handling with direct base64 encoding ([fbe6688](https://github.com/lempira/algokit-lora/commit/fbe668885efd75b055ca8bc38f42b18d7fd83f00))
* support visuals for rekeys from app accounts to user accounts ([#453](https://github.com/lempira/algokit-lora/issues/453)) ([50803c9](https://github.com/lempira/algokit-lora/commit/50803c987c9a76e63dfaeddb89420c6052cae794))
* test fix patch bump ([b7ddcfe](https://github.com/lempira/algokit-lora/commit/b7ddcfe9a4cb7d8497f97314bfeb222f7cda1451))
* updated deps to fix vunerabilities ([16fe71e](https://github.com/lempira/algokit-lora/commit/16fe71ec22635f5ed1ce4faee0ca75be15d039f0))
* updated release.yml ([f9d1eba](https://github.com/lempira/algokit-lora/commit/f9d1eba222948f60fb59f75c532c1398d722c875))
* used default import for tailwind animate ([824f50f](https://github.com/lempira/algokit-lora/commit/824f50fc3c66d63bf54c1439e59d252d5df31e11))
* vite vunerability ([59ff1cd](https://github.com/lempira/algokit-lora/commit/59ff1cd7af51adda56a384f4449f5ded2123299a))

### 📚 Documentation

* add comprehensive versioning documentation ([6be41a3](https://github.com/lempira/algokit-lora/commit/6be41a3819d53cf018738ad207b848c30eb62784))
* add comprehensive versioning documentation ([4b84805](https://github.com/lempira/algokit-lora/commit/4b84805383b4b2789df0856f16d7f3bc6e622f48))
* add workflow descriptions and update release process documentation ([17bec6f](https://github.com/lempira/algokit-lora/commit/17bec6f6f8387e64d89b451376ca6bd94e46621c))

### 🚀 Features

* add QR code display for Algorand addresses ([f165af7](https://github.com/lempira/algokit-lora/commit/f165af707cacab6f3cf7f002f2725a242ebe3163))
* add support for viewing application local state ([#456](https://github.com/lempira/algokit-lora/issues/456)) ([7235e66](https://github.com/lempira/algokit-lora/commit/7235e6635f8e6f989dd3ebb37285972469e1cf1c))
* add version environment variables and configuration ([826444c](https://github.com/lempira/algokit-lora/commit/826444c1ca35ea1a250ce6999054698e29d777f3))
* add version synchronization script for web and desktop builds ([5d69bcc](https://github.com/lempira/algokit-lora/commit/5d69bcc2bf21a2107df2e00aad8de4af20dc35b4))
* added asset clawback and tests ([4b785ff](https://github.com/lempira/algokit-lora/commit/4b785ff914c168914814a23f1c3487989ec09624))
* added asset create txn to url search params ([0adf6d4](https://github.com/lempira/algokit-lora/commit/0adf6d42a572206885bba18a94dd6ad928888ded))
* added asset destroy and tests ([e1bb99e](https://github.com/lempira/algokit-lora/commit/e1bb99ed93501b299113a2067cb98f479f1064b0))
* added asset freeze and tests ([dff04e7](https://github.com/lempira/algokit-lora/commit/dff04e7e32330c6512c4f84f21ae47428166ffd6))
* added asset opt-in and tests ([b4ec556](https://github.com/lempira/algokit-lora/commit/b4ec556c3f8eeb3efc0d98b114614e43e93e29cf))
* added asset opt-out and tests ([c5d85d8](https://github.com/lempira/algokit-lora/commit/c5d85d869ca504043f8d75f73dec752c100d01be))
* added asset reconfigure and tests ([f5a3a20](https://github.com/lempira/algokit-lora/commit/f5a3a20fb2e901b24363575b78681168f0da39b7))
* added asset transfer and tests ([9a612a1](https://github.com/lempira/algokit-lora/commit/9a612a14e8650e52cfe81d7aaf242c4b9a5dbdfb))
* added payment txn url search params ([6687005](https://github.com/lempira/algokit-lora/commit/6687005d61f1bbf1617b45b9150b537b85812b61))
* Added plausible custom events ([#389](https://github.com/lempira/algokit-lora/issues/389)) ([0ec0206](https://github.com/lempira/algokit-lora/commit/0ec0206bae71f94058925686a3a88c022dd66237))
* Added plausible snippet ([#388](https://github.com/lempira/algokit-lora/issues/388)) ([e5c3ec2](https://github.com/lempira/algokit-lora/commit/e5c3ec241bc797f9def43ebd99f44b38cfca9a58))
* adjust how we visually represent transactions from rekeyed accounts ([5c5b159](https://github.com/lempira/algokit-lora/commit/5c5b159757455c6be7baefbc7ebdbac43c011cc8))
* app create/update ([e449ffb](https://github.com/lempira/algokit-lora/commit/e449ffb87a14586cacc51b70e3b759effa60d838))
* **ci:** implement orchestrator release workflow for unified web and desktop releases ([14f413a](https://github.com/lempira/algokit-lora/commit/14f413a98778e9689ba1166f3e0d9822a7146bc5))
* create staging deployment workflow for automated beta releases ([522b214](https://github.com/lempira/algokit-lora/commit/522b214f2a1ec1653b3f846639257b345f030e6c))
* create unified version management system ([578b72d](https://github.com/lempira/algokit-lora/commit/578b72d33e7e30b57ca8c77a88d3179f24fc0347))
* enhance semantic-release configuration for staging/production workflow ([73f4932](https://github.com/lempira/algokit-lora/commit/73f49321376fd94d31e1ba0093908d5925886d9f))
* integrate QR code button in account information displays ([3464193](https://github.com/lempira/algokit-lora/commit/3464193ae496c470d00bceb3dfc5f799f22deead))
* integrate QR code functionality alongside existing copy buttons in AccountLink components ([bf87ca3](https://github.com/lempira/algokit-lora/commit/bf87ca3b8c3d48fbe0b51c96911cbb8417c9d0d1))
* render payment txn with close remainder ([dbe6648](https://github.com/lempira/algokit-lora/commit/dbe664846918b760fc9b6bbb00e71b65fcb56623))
* show app update label ([4b6cf20](https://github.com/lempira/algokit-lora/commit/4b6cf20195826e6249352a3596629f58be7841fa))
* update branching strategy to use main as staging and release as production ([ac7f080](https://github.com/lempira/algokit-lora/commit/ac7f080ef93132783f34b62a6a52af1ecac3e1c9))
* update desktop release workflow integration ([047064d](https://github.com/lempira/algokit-lora/commit/047064d922478138c189944da06ef194c37f0b88))
* update production release workflow and add promotion workflow ([f5446d5](https://github.com/lempira/algokit-lora/commit/f5446d525978785669d7e8f1e4c15255edd4e620))
* update settings page with enhanced version display and comprehensive tests ([ac1336c](https://github.com/lempira/algokit-lora/commit/ac1336c557e2d6443a033f14e5ed12bf47a4a571))
* update subscriber which enables block reward synthetic transactions ([bcc81a1](https://github.com/lempira/algokit-lora/commit/bcc81a121d26c7472f147bd91981b6be55163eb2))
* use branch name instead of semantic-release output for production release detection ([9d9f872](https://github.com/lempira/algokit-lora/commit/9d9f87270f8557c3c2ddc7ad4fb0b97eb5dec868))

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
