const fs = require('fs')
const path = require('path')
const { defineConfig } = require('eslint-define-config')
const basic = require('@minko-fe/eslint-config-basic')

module.exports = defineConfig({
  extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended', '@minko-fe/eslint-config-basic'],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: basic.overrides.concat(
    !fs.existsSync(path.join(process.cwd(), 'tsconfig.json'))
      ? []
      : [
          {
            parserOptions: {
              tsconfigRootDir: process.cwd(),
              project: ['tsconfig.json'],
            },
            parser: '@typescript-eslint/parser',
            excludedFiles: ['**/*.md/*.*'],
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
            rules: {
              'no-throw-literal': 'off',
              '@typescript-eslint/no-throw-literal': 'error',
              'no-implied-eval': 'off',
              '@typescript-eslint/no-implied-eval': 'error',
              'dot-notation': 'off',
              '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
              '@typescript-eslint/no-floating-promises': 'off',
              'require-await': 'off',
              '@typescript-eslint/consistent-type-exports': 'error',
              '@typescript-eslint/consistent-type-imports': 'error',
              'no-undef': ['off'],
            },
          },
        ],
  ),
  rules: {
    'import/named': 'off',

    // TS
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    // Override JS
    'no-useless-constructor': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'semi': 'off',
    '@typescript-eslint/semi': 'off',
    'quotes': 'off',
    '@typescript-eslint/quotes': 'off',
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // off
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
})
