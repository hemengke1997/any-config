// @ts-expect-error missing types
import prettierConfig from '@minko-fe/prettier-config'
import { type Linter } from 'eslint'
import { configPrettier, pluginPrettier } from '../plugins'
import { interopDefault } from '../utils'

const prettierConflictRules = { ...configPrettier.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier: Linter.Config[] = [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': ['warn', interopDefault(prettierConfig)],
    },
  },
]
