import { type FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TSX } from '../globs'
import { pluginReact, pluginReactHooks, pluginReactRefresh, pluginTypeScript } from '../plugins'
import { typescript } from './typescript'

export const react: FlatESLintConfigItem[] = [
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
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      ...typescript[0].rules,
      'react-hooks/exhaustive-deps': 'off',
      // 先不用react-refresh plugin，不好用
      // 但记住：react-refresh的前提是，tsx文件中，必须有一个默认导出的组件
      'react-refresh/only-export-components': ['off', { allowConstantExport: true, checkJs: false }],
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
