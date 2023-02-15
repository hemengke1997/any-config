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
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
  },
})
