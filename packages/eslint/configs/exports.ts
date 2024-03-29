import { type FlatESLintConfigItem } from 'eslint-define-config'
import { pluginPerfectionist } from '../plugins'

export const _exports: FlatESLintConfigItem[] = [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-exports': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
]
