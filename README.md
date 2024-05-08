# any-config

> A collection of configuration files for eslint, prettier, commitlint, and tsconfig.


## <img style="width: 20px; height: 20px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_eslint.svg" /> eslint

### install
```bash
pnpm add eslint @minko-fe/eslint-config -D
```

.vscode settings.json
```json
{
  "eslint.experimental.useFlatConfig": true
}
```

#### eslint.config.js
```js
import { defineConfig } from '@minko-fe/eslint-config'

export default defineConfig([
  // your config
], {
  react: false, // up to you
  vue: false, // up to you
  // ...
})
```

## <img style="width: 20px; height: 20px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_light_prettier.svg" /> prettier


### install

```bash
pnpm add prettier @minko-fe/prettier-config -D
```

如果你的项目中使用到了 `svelte` 或 `astro`，请安装 `@minko-fe/prettier-config`


### prettier配置 (<img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/673d2e0299287a61f16033025fdcda9b097ea19e/icons/file_type_svelte.svg" style="width: 14px;height:14px;" /> <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/673d2e0299287a61f16033025fdcda9b097ea19e/icons/file_type_astro.svg" style="width: 14px;height:14px;" />)

#### .prettierrc
```json
"@minko-fe/prettier-config"
```

#### .prettierrc.js

如果你需要重写或新增一些配置，请使用此方式

```js
module.exports = {
  ...require('@minko-fe/prettier-config'),
  // 在这里加配置
}
```


## <img style="width: 20px; height: 20px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_commitlint.svg" /> commitlint

### install

```bash
pnpm add @minko-fe/commitlint-config -D
```
### commitlint.config.js

```js
module.exports = {
  extends: ['@minko-fe'],
}
```
### <img style="width: 20px; height: 20px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_tsconfig.svg" /> tsconfig

### install

```bash
pnpm add @minko-fe/tsconfig
```

### tsconfig.json

#### lib
```json
{
  "extends": "@minko-fe/tsconfig/tsconfig.lib.json"
}
```

#### app
```json
{
  "extends": "@minko-fe/tsconfig/tsconfig.app.json"
}
```
