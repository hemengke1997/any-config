import { type Linter } from 'eslint'
import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'

export const yml: Linter.Config[] = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    plugins: {
      yml: pluginYml as any,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Linter.RulesRecord),
      ...(pluginYml.configs.prettier.rules as Linter.RulesRecord),
      'yml/no-empty-document': 'off',
      'yml/no-empty-mapping-value': 'off',
      'yml/quotes': 'off',
    },
  },
]
