import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'
import globals from 'globals'
import { GLOB_ASTRO } from '../globs'
import { parserAstro, pluginAstro } from '../plugins'

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
        parser: parserAstro,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: '@typescript-eslint/parser',
        },
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      plugins: {
        astro: pluginAstro,
      },
      processor: ts ? 'astro/client-side-ts' : 'astro/astro',
      rules: {
        ...pluginAstro.configs.recommended.rules,
        'astro/no-set-text-directive': ['error'],
      } as Rules,
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        sourceType: 'module',
      },
      rules: {
        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
    {
      // Define the configuration for `<script>` tag when using `client-side-ts` processor.
      // Script in `<script>` is assigned a virtual file name with the `.ts` extension.
      files: ['**/*.astro/*.ts', '*.astro/*.ts'],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: null,
        },
        sourceType: 'module',
      },
      rules: {
        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
  ]
}
