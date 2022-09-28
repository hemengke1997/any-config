const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:react/recommended', '@minko-fe/eslint-config-ts'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
})
