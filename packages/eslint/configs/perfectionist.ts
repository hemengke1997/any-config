import { type Linter } from 'eslint'
import { GLOB_SRC } from '../globs'
import { pluginPerfectionist } from '../plugins'

export const sortImports: Linter.FlatConfig[] = [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          'groups': [
            'type',
            'react',
            'nanostores',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          'internal-pattern': ['{{@,~}/,#}**'],
          'newlines-between': 'never',
          'order': 'asc',
          'type': 'natural',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
]

export const sortObjects: Linter.FlatConfig[] = [
  {
    files: [GLOB_SRC],
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
]
