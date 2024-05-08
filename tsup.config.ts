import type { Options } from 'tsup'

export const tsup = (option: Options): Options => ({
  clean: true,
  dts: !option.watch,
  format: ['esm', 'cjs'],
  minify: false,
  shims: true,
  splitting: false,
  target: 'node16',
  treeshake: true,
})
