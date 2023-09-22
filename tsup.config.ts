import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: 'node16.14',
})
