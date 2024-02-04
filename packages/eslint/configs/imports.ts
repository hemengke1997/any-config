import { type FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT } from '../globs'
import { pluginAntfu, pluginImport, pluginPerfectionist } from '../plugins'

export const imports: FlatESLintConfigItem[] = [
  {
    plugins: {
      antfu: pluginAntfu,
      import: pluginImport,
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'antfu/import-dedupe': 'error',
      'import/first': 'error',
      'import/namespace': 'off',
      'import/no-absolute-path': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-mutable-exports': 'off',
      'import/no-named-default': 'off',
      'import/no-self-import': 'error',
      'import/no-unresolved': 'off',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': 'off',
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
  {
    files: [
      `**/src/${GLOB_SRC}`,
      `**/*config*.${GLOB_SRC_EXT}`,
      `**/views/${GLOB_SRC}`,
      `**/pages/${GLOB_SRC}`,
      `**/{index,vite,esbuild,rollup,webpack,rspack}.ts`,
      '**/*.d.ts',
      `${GLOB_MARKDOWN}/**`,
    ],
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
