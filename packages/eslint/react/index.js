const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '@minko-fe/eslint-config-ts'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-danger': 'off',
    'react/self-closing-comp': 'error',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
  },
})
