import { type FlatESLintConfig } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks, pluginTypeScript } from '../plugins'
import { typescript } from './typescript'

export const react: FlatESLintConfig[] = [
  {
    files: [GLOB_JSX, GLOB_TSX],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...typescript[0].rules,
      'react-hooks/exhaustive-deps': 'off',
      'react/display-name': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/no-danger': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]
