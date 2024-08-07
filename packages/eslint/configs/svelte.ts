import { type Linter } from 'eslint'
import { interopDefault } from '../utils'

export async function asyncSvelte(): Promise<Linter.Config[]> {
  // @ts-ignore
  const eslintPluginSvelte = interopDefault(await import('eslint-plugin-svelte'))
  return [...eslintPluginSvelte.configs['flat/recommended']]
}
