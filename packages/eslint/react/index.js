const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '@minko-fe/eslint-config-ts'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-tag-spacing': ['error', { beforeClosing: 'never', beforeSelfClosing: 'always', closingSlash: 'never', afterOpening: 'never' }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['error', { 'when': 'multiline' }],
    'react/jsx-closing-tag-location': ['error', 'tag-aligned'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/no-danger': 'error',
    'react/self-closing-comp': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
  },
})
