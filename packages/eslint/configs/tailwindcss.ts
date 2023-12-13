import { type FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TSX, GLOB_VUE } from '../globs'
import { pluginTailwindcss } from '../plugins'

export const tailwindcss: FlatESLintConfigItem[] = [
  {
    files: [GLOB_VUE, GLOB_JSX, GLOB_TSX],
    plugins: {
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      ...pluginTailwindcss.configs.recommended.rules,
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]
