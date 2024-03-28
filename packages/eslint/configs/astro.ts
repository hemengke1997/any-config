import * as parser from 'astro-eslint-parser'
import { type FlatESLintConfigItem, type Rules } from 'eslint-define-config'
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'
import { GLOB_ASTRO } from '../globs'
import { parserTypeScript } from '../plugins'

export function resolveAstro(ts?: boolean): FlatESLintConfigItem[] {
  return [
    {
      files: [GLOB_ASTRO],
      languageOptions: {
        globals: {
          ...globals.node,
          // Astro object
          Astro: false,
          // JSX Fragment
          Fragment: false,
        },
        parser,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: parserTypeScript,
        },
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      plugins: {
        astro: eslintPluginAstro,
      },
      processor: ts ? 'astro/client-side-ts' : 'astro/astro',
      rules: {
        ...eslintPluginAstro.configs.recommended.rules,
        'astro/no-set-text-directive': ['error'],
      } as Rules,
    },
  ]
}
