import { type Linter } from 'eslint'
import { interopDefault } from '../utils'

export async function resolveAstro(): Promise<Linter.Config[]> {
  const eslintPluginAstro = interopDefault(await import('eslint-plugin-astro'))

  return [...eslintPluginAstro.configs['flat/recommended']]
}
