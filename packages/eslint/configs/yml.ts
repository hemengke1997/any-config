import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'
import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'

export const yml: FlatESLintConfigItem[] = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    plugins: {
      yml: pluginYml,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-document': 'off',
      'yml/no-empty-mapping-value': 'off',
      'yml/quotes': 'off',
    },
  },
]
