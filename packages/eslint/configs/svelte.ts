import type { FlatESLintConfigItem } from 'eslint-define-config'
import { interopDefault } from '../utils'

export async function asyncSvelte(): Promise<FlatESLintConfigItem[]> {
  const eslintPluginSvelte = interopDefault(await import('eslint-plugin-svelte'))
  return [...eslintPluginSvelte.configs['flat/recommended']] as FlatESLintConfigItem[]
}
