// @ts-expect-error missing types
import prettierConfig from '@minko-fe/prettier-config'
import { type FlatESLintConfigItem } from 'eslint-define-config'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

export const prettier: FlatESLintConfigItem[] = [
  {
    ...pluginPrettier,
    rules: {
      'prettier/prettier': ['warn', prettierConfig],
    },
  },
]
