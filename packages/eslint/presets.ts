import { type FlatESLintConfigItem } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'
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

export const presetJavaScript = [...javascript, ...comments, ...imports, ..._exports, ...unicorn, ...node, ...ignores]

export const presetLangsExtensions = [...markdown, ...yml, ...jsonc, ...sortPackageJson]

export const presetBasic = [...presetJavaScript, ...presetLangsExtensions]

export const presetTypescript = [...typescript, ...sortTsconfig]

export const presetAll = [...presetBasic, ...vue, ...react, ...prettier]

const VuePackages = ['vue', 'nuxt', 'vitepress']

const ReactPackages = ['react', 'next']

const SveltePackages = ['svelte', 'svelte-kit']

const AstroPackages = ['astro']

export async function defineConfig(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    astro: enableAstro = AstroPackages.some((i) => isPackageExists(i)),
    gitignore: enableGitignore = true,
    markdown: enableMarkdown = true,
    prettier: enablePrettier = true,
    react: enableReact = ReactPackages.some((i) => isPackageExists(i)),
    sortObjects: enableSortObjects = false,
    svelte: enableSvelte = SveltePackages.some((i) => isPackageExists(i)),
    tailwindcss: enableTailwindcss = isPackageExists('tailwindcss'),
    typescript: enableTypescript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
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
