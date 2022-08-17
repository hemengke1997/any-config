const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@minko-fe/eslint-config-react', '@minko-fe/eslint-config-vue'],
})
