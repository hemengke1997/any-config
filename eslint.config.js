import { tsImport } from 'tsx/esm/api'
/** @type {typeof import('./packages/eslint')} */
const { defineConfig } = await tsImport('./packages/eslint/index.ts', import.meta.url)

export default defineConfig([], {
  gitignore: false,
  sortObjects: true,
})
