import { isPackageExists } from 'local-pkg'
import process from 'node:process'

export const isInEditor = !!(
  (process.env.VSCODE_PID || process.env.VSCODE_CWD || process.env.JETBRAINS_IDE || process.env.VIM) &&
  !process.env.CI
)

export const hasTypeScript = isPackageExists('typescript')

export const hasVue = ['vue', 'nuxt', 'vitepress', '@slidev/cli'].some((t) => isPackageExists(t))

export const hasSvelte = ['svelte', 'svelte-kit'].some((t) => isPackageExists(t))

export const hasReact = ['react', 'next'].some((t) => isPackageExists(t))

export const hasAstro = ['astro', '@astrojs/check'].some((t) => isPackageExists(t))
