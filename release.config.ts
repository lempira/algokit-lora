/* eslint-disable no-console */
import type { Options } from 'semantic-release'

// =============================================================================
// COMMIT TYPES CONFIGURATION
// =============================================================================

// Define commit types with their release behavior and changelog appearance
const commitTypes = {
  feat: { release: 'minor', section: '🚀 Features', hidden: false },
  fix: { release: 'patch', section: '🐛 Bug Fixes', hidden: false },
  perf: { release: 'patch', section: '⚡ Performance Improvements', hidden: false },
  revert: { release: 'patch', section: '⏪ Reverts', hidden: false },
  refactor: { release: 'patch', section: '♻️ Code Refactoring', hidden: false },
  docs: { release: false, section: '📚 Documentation', hidden: false },
  style: { release: false, section: '💄 Styles', hidden: true },
  chore: { release: false, section: '🔧 Chores', hidden: true },
  build: { release: false, section: '📦 Build System', hidden: true },
  ci: { release: false, section: '👷 CI/CD', hidden: true },
  test: { release: false, section: '✅ Tests', hidden: true },
} as const

// Special case: docs with readme scope should trigger release
const specialReleaseRules = [{ type: 'docs', scope: 'readme', release: 'patch' }]

// =============================================================================
// BRANCH DETECTION UTILITY
// =============================================================================

type GlobalWithProcess = typeof globalThis & {
  process?: { env: Record<string, string> }
}

function getCurrentBranch(): string {
  // Try to get branch from environment variables (most CI/CD systems)
  const env = (globalThis as GlobalWithProcess).process?.env || {}
  const branchFromEnv = env.GITHUB_REF_NAME

  if (branchFromEnv) {
    return branchFromEnv
  }

  // Fallback to git command if no env var is available
  try {
    const { execSync } = eval('require')('child_process')
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim()
  } catch {
    console.warn('Could not determine current branch, defaulting to main')
    return 'main'
  }
}

// =============================================================================
// BASE CONFIGURATION
// =============================================================================

const baseConfig: Options = {
  branches: [
    { name: 'release', channel: 'stable' },
    { name: 'main', channel: 'beta', prerelease: 'beta' },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          ...specialReleaseRules, // more specific first
          { breaking: true, release: 'major' },
          ...Object.entries(commitTypes).map(([type, config]) => ({
            type,
            release: config.release,
          })),
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: Object.entries(commitTypes).map(([type, config]) => ({
            type,
            section: config.section,
            hidden: config.hidden,
          })),
        },
        writerOpts: {
          groupBy: 'type',
          commitGroupsSort: 'title',
          commitsSort: ['scope', 'subject'],
        },
      },
    ],
    // NOTE: @semantic-release/changelog is conditionally added below
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npm run sync-version',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json', 'src-tauri/Cargo.toml', 'src-tauri/Cargo.lock'],
        message: 'chore(release): ref:${nextRelease.channel} ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        successComment: false,
        failTitle: false,
        assets: [{ path: 'dist/**', label: 'Web Application Build' }],
        addReleases: false,
      },
    ],
    'semantic-release-export-data',
  ],
}

// =============================================================================
// CONDITIONAL CONFIGURATION LOGIC
// =============================================================================

function createConfig(): Options {
  const currentBranch = getCurrentBranch()
  const config = { ...baseConfig }

  // Only add changelog plugin on release branch
  if (currentBranch === 'release') {
    console.log('🔄 Adding changelog plugin for release branch')

    // Insert changelog plugin after release-notes-generator but before npm
    const plugins = [...config.plugins!]
    const releaseNotesIndex = plugins.findIndex(
      (plugin) => Array.isArray(plugin) && plugin[0] === '@semantic-release/release-notes-generator'
    )

    plugins.splice(releaseNotesIndex + 1, 0, [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file.',
      },
    ])

    config.plugins = plugins
  } else {
    console.log(`⏭️  Skipping changelog plugin for branch: ${currentBranch}`)
  }

  return config
}

// =============================================================================
// EXPORT CONFIGURATION
// =============================================================================

export default createConfig()
