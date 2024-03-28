import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  splitting: true,
  target: 'node16',
  treeshake: true,
})
