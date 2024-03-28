import { type FlatESLintConfigItem } from 'eslint-define-config'
import {
  _exports,
  asyncSvelte,
  comments,
  gitignores,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  node,
  prettier,
  react,
  resolveAstro,
  sortObjects,
  sortPackageJson,
  sortTsconfig,
  tailwindcss,
  typescript,
  unicorn,
  vue,
  yml,
} from './configs'
import { hasAstro, hasReact, hasSvelte, hasTailwindcss, hasTypeScript, hasVue } from './env'

export const presetJavaScript = [...javascript, ...comments, ...imports, ..._exports, ...unicorn, ...node, ...ignores]

export const presetLangsExtensions = [...markdown, ...yml, ...jsonc, ...sortPackageJson]

export const presetBasic = [...presetJavaScript, ...presetLangsExtensions]

export const presetTypescript = [...typescript, ...sortTsconfig]

export const presetAll = [...presetBasic, ...vue, ...react, ...prettier]

export async function defineConfig(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    astro: enableAstro = hasAstro,
    gitignore: enableGitignore = true,
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    react: enableReact = hasReact,
    sortObjects: enableSortObjects = false,
    svelte: enableSvelte = hasSvelte,
    tailwindcss: enableTailwindcss = hasTailwindcss,
    typescript: enableTypescript = hasTypeScript,
    vue: enableVue = hasVue,
  }: Partial<{
    react: boolean
    vue: boolean
    astro: boolean
    svelte: boolean
    typescript: boolean
    sortObjects: boolean
    prettier: boolean
    markdown: boolean
    tailwindcss: boolean
    gitignore: boolean
  }> = {},
): Promise<FlatESLintConfigItem[]> {
  const configs = []

  configs.push(...presetBasic)
  if (enableGitignore) {
    configs.push(...gitignores)
  }
  if (enableReact) {
    configs.push(...react)
  }
  if (enableVue) {
    configs.push(...vue)
  }
  if (enableTypescript) {
    configs.push(...presetTypescript)
  }
  if (enableTailwindcss) {
    configs.push(...tailwindcss)
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
  if (enableAstro) {
    configs.push(...resolveAstro(enableTypescript))
  }
  if (enableSvelte) {
    configs.push(...(await asyncSvelte()))
  }

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
