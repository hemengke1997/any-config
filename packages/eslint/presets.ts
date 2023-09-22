import { type FlatESLintConfigItem } from 'eslint-define-config'
import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  prettier,
  react,
  sortKey,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  vue,
  yml,
} from './configs'

export const presetJavaScript = [...ignores, ...javascript, ...comments, ...imports, ...unicorn]

export const presetLangsExtensions = [...markdown, ...yml, ...jsonc, ...sortPackageJson, ...sortTsconfig, ...sortKey]

export const basic = [...presetJavaScript, ...typescript, ...presetLangsExtensions]
export { basic as presetBasic }

export const all = [...basic, ...vue, ...react, ...prettier]

export function defineConfig(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    react: enableReact = false,
    vue: enableVue = false,
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true,
  }: Partial<{
    react: boolean
    vue: boolean
    prettier: boolean
    markdown: boolean
  }> = {}
): FlatESLintConfigItem[] {
  const configs = []
  configs.push(...basic)
  if (enableReact) {
    configs.push(...react)
  }
  if (enableVue) {
    configs.push(...vue)
  }
  if (enableMarkdown) {
    configs.push(...markdown)
  }
  if (enablePrettier) {
    configs.push(...prettier)
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
