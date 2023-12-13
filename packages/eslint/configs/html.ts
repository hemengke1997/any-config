import { type FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_HTML } from '../globs'
import { pluginHtml } from '../plugins'

export const html: FlatESLintConfigItem[] = [
  {
    files: [GLOB_HTML],
    plugins: {
      html: pluginHtml,
    },
  },
]
