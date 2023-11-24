import { type FlatESLintConfig } from 'eslint-define-config'
import { pluginComments } from '../plugins'

export const comments: FlatESLintConfig[] = [
  {
    plugins: {
      'eslint-comments': pluginComments,
    },
    rules: {
      'eslint-comments/disable-enable-pair': 'off',
      'eslint-comments/no-aggregating-enable': 'error',
      'eslint-comments/no-duplicate-disable': 'error',
      'eslint-comments/no-unlimited-disable': 'off',
      'eslint-comments/no-unused-enable': 'error',
    },
  },
]
