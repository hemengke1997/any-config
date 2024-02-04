import { type FlatESLintConfigItem } from 'eslint-define-config'
// @ts-expect-error missing types
import * as pluginTailwindcss from 'eslint-plugin-tailwindcss'
// @ts-expect-error missing types
import * as pluginTailwindcss3_11 from 'eslint-plugin-tailwindcss-3.11.0'
// @ts-expect-error missing types
import * as pluginTailwindcss3_13_1 from 'eslint-plugin-tailwindcss-3.13.1'
import { getPackageInfoSync } from 'local-pkg'
import semver from 'semver'
import { GLOB_HTML, GLOB_JSX, GLOB_TSX, GLOB_VUE } from '../globs'
import { interopDefault } from '../utils'

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
          return interopDefault(plugin)
        }
      }
    }
  }
  return interopDefault(pluginTailwindcss)
}

export const tailwindcss: FlatESLintConfigItem[] = [
  {
    files: [GLOB_VUE, GLOB_JSX, GLOB_TSX, GLOB_HTML],
    plugins: {
      tailwindcss: resolveRightTwVersion(),
    },
    rules: {
      ...pluginTailwindcss.configs.recommended.rules,
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]
