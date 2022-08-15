const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:react/recommended', '@minko-fe/eslint-config-ts'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
  },
})
