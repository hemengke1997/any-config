import { type FlatESLintConfigItem } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'
import {
  _exports,
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  prettier,
  react,
  sortObjects,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  vue,
  yml,
} from './configs'

export const presetJavaScript = [...ignores, ...javascript, ...comments, ...imports, ..._exports, ...unicorn]

export const presetLangsExtensions = [...markdown, ...yml, ...jsonc, ...sortPackageJson]

export const presetBasic = [...presetJavaScript, ...presetLangsExtensions]

export const presetTypescript = [...typescript, ...sortTsconfig]

export const presetAll = [...presetBasic, ...vue, ...react, ...prettier]

const VuePackages = ['vue', 'nuxt', 'vitepress']

const ReactPackages = ['react', 'next']

export function defineConfig(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    react: enableReact = ReactPackages.some((i) => isPackageExists(i)),
    sortObjects: enableSortObjects = false,
    typescript: enableTypescript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
  }: Partial<{
    react: boolean
    vue: boolean
    typescript: boolean
    sortObjects: boolean
    prettier: boolean
    markdown: boolean
  }> = {},
): FlatESLintConfigItem[] {
  const configs = []

  configs.push(...presetBasic)
  if (enableReact) {
    configs.push(...react)
  }
  if (enableVue) {
    configs.push(...vue)
  }
  if (enableTypescript) {
    configs.push(...presetTypescript)
  }
  if (enableSortObjects) {
    configs.push(...sortObjects)
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
