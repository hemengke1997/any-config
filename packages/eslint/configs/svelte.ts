// import type { FlatESLintConfigItem } from 'eslint-define-config'
// import { interopDefault } from '../utils'

// export async function asyncSvelte(): Promise<FlatESLintConfigItem[]> {
//   const eslintPluginSvelte = interopDefault(await import('eslint-plugin-svelte'))
//   return [...eslintPluginSvelte.configs['flat/recommended']] as FlatESLintConfigItem[]
// }

import { type FlatESLintConfigItem, type Rules } from 'eslint-define-config'
import { GLOB_SVELTE } from '../globs'
import { tseslint } from '../plugins'
import { interopDefault } from '../utils'

export async function asyncSvelte(): Promise<FlatESLintConfigItem[]> {
  const eslintPluginSvelte = interopDefault(await import('eslint-plugin-svelte'))
  const svelteParser = interopDefault(await import('svelte-eslint-parser'))
  return [
    {
      files: [GLOB_SVELTE],
      languageOptions: {
        parser: svelteParser,
        parserOptions: {
          extraFileExtensions: ['.svelte'],
          parser: '@typescript-eslint/parser',
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        'svelte': eslintPluginSvelte,
      },
      processor: eslintPluginSvelte.processors.svelte,
      rules: {
        ...eslintPluginSvelte.configs.recommended.rules,
        ...eslintPluginSvelte.configs.prettier.rules,
      } as Rules,
    },
  ]
}
