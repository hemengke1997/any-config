import { type FlatESLintConfigItem } from 'eslint-define-config'

// @ts-expect-error missing types
import prettierConfig from '@minko-fe/prettier-config'
import { configPrettier, pluginPrettier } from '../plugins'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier: FlatESLintConfigItem[] = [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': ['warn', prettierConfig],
    },
  },
]
