import { release } from '@vitejs/release-scripts'

release({
  generateChangelog: async () => {},
  logChangelog: () => {},
  packages: ['eslint', 'commitlint', 'prettier', 'tsconfig'],
  repo: '@minko-fe/xxx',
  toTag: (pkg, version) => `${pkg}@${version}`,
})
