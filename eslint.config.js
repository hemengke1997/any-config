import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./packages/eslint/index.ts')} */
const { defineConfig } = require('./packages/eslint/index.ts')

export default defineConfig([], {
  react: false,
  sortKey: true,
})
