import type { FlatESLintConfigItem } from 'eslint-define-config'
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
  sortKeys,
  sortObjects,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  vue,
  yml,
} from './configs'
import { hasAstro, hasReact, hasSvelte, hasTypeScript, hasVue } from './env'
import logger from './utils/logger'

export const presetJavaScript = [...javascript, ...comments, ...imports, ..._exports, ...unicorn, ...node, ...ignores]

export const presetLangsExtensions = [...markdown, ...yml, ...jsonc, ...sortPackageJson]

export const presetBasic = [...presetJavaScript, ...presetLangsExtensions, ...sortKeys]

export const presetTypescript = [...typescript, ...sortTsconfig]

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
    gitignore: boolean
  }> = {},
): Promise<FlatESLintConfigItem[]> {
  const configs: FlatESLintConfigItem[] = []

  configs.push(...presetBasic)
  if (enableGitignore) {
    configs.push(...gitignores)
  }
  if (enableReact) {
    logger.debug('React enabled')
    configs.push(...react)
  }
  if (enableVue) {
    logger.debug('Vue enabled')
    configs.push(...vue)
  }
  if (enableTypescript) {
    logger.debug('TypeScript enabled')
    configs.push(...presetTypescript)
  }
  if (enableSortObjects) {
    logger.debug('Sort objects enabled')
    configs.push(...sortObjects)
  }
  if (enableMarkdown) {
    logger.debug('Markdown enabled')
    configs.push(...markdown)
  }
  if (enablePrettier) {
    logger.debug('Prettier enabled')
    configs.push(...prettier)
  }
  if (enableAstro) {
    logger.debug('Astro enabled')
    configs.push(...resolveAstro(enableTypescript))
  }
  if (enableSvelte) {
    logger.debug('Svelte enabled')
    configs.push(...(await asyncSvelte()))
  }

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
