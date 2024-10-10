import { importx } from 'importx'

/** @type {typeof import('./packages/eslint')} */
const { defineConfig } = await importx('./packages/eslint/index.ts', {
  parentURL: import.meta.url,
})

export default defineConfig([], {
  gitignore: false,
  sortObjects: true,
})
