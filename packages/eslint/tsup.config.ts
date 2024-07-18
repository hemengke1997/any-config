import { defineConfig } from 'tsup'
import { tsup } from '../../tsup.config'

export default defineConfig((option) => ({
  ...tsup(option),
  external: ['svelte/compiler'],
  shims: true,
}))
