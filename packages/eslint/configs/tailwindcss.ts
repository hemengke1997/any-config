import { type FlatESLintConfigItem } from 'eslint-define-config'
import { getPackageInfoSync } from 'local-pkg'
import semver from 'semver'
import { GLOB_JSX, GLOB_TSX, GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'
import logger from '../utils/logger'

export const tailwindcss = async (): Promise<FlatESLintConfigItem[]> => {
  // @ts-expect-error missing types
  const pluginTailwindcss = await import('eslint-plugin-tailwindcss')
  // @ts-expect-error missing types
  const pluginTailwindcss3_11 = await import('eslint-plugin-tailwindcss-3.11.0')
  // @ts-expect-error missing types
  const pluginTailwindcss3_13_1 = await import('eslint-plugin-tailwindcss-3.13.1')
  const EslintTailwindVersionMap = new Map([
    ['^3.4.0', pluginTailwindcss],
    ['^3.3.2', pluginTailwindcss3_13_1],
    ['^3.2.2', pluginTailwindcss3_11],
  ])

  function resolveRightTwVersion() {
    const tw = getPackageInfoSync('tailwindcss')
    if (tw && tw.version) {
      const userTwVersion = semver.minVersion(tw.version)?.version
      if (userTwVersion) {
        for (const [range, plugin] of EslintTailwindVersionMap) {
          if (semver.satisfies(userTwVersion, range)) {
            logger.debug(`User tailwindcss version: ${userTwVersion}`)
            logger.debug(`tailwindcss range: ${range}`)
            return interopDefault(plugin)
          }
        }
      }
    }

    const [first] = EslintTailwindVersionMap.keys()
    return interopDefault(EslintTailwindVersionMap.get(first))
  }

  const tw = resolveRightTwVersion()

  return [
    {
      files: [GLOB_VUE, GLOB_JSX, GLOB_TSX],
      plugins: {
        tailwindcss: tw,
      },
      rules: {
        ...tw.configs.recommended.rules,
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ]
}
