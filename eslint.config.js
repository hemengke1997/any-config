import { require } from 'tsx/cjs/api'
/** @type {typeof import('./packages/eslint')} */
const { defineConfig } = require('./packages/eslint', import.meta.url)

export default defineConfig([], {
  gitignore: false,
  sortObjects: true,
})
