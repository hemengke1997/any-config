import { defineConfig } from 'tsup'

export default defineConfig((option) => ({
  dts: !option.watch,
  format: ['esm', 'cjs'],
  splitting: true,
  target: 'node16',
  treeshake: true,
}))
