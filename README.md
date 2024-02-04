# any-config

## Usage

### <img style="width: 14px; height: 14px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_eslint.svg" /> eslint

#### install
```bash
pnpm add eslint @minko-fe/eslint-config -D
```

.vscode settings.json
```json
{
  "eslint.experimental.useFlatConfig": true
}
```

##### eslint.config.js
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


<img style="width: 14px; height: 14px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_light_prettier.svg" />

###  prettier

#### install

```bash
pnpm add prettier @minko-fe/prettier-config -D
```

#### prettierrc

##### .prettierrc.js

```js
module.exports = {
  ...require('@minko-fe/prettier-config'),
}
```

##### .prettierrc.json
```json
"@minko-fe/prettier-config"
```

### <img style="width: 14px; height: 14px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_commitlint.svg" /> commitlint

#### install

```bash
pnpm add @minko-fe/commitlint-config -D
```
#### commitlint.config.js

```js
module.exports = {
  extends: ['@minko-fe'],
}
```
### <img style="width: 14px; height: 14px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_tsconfig.svg" /> tsconfig

#### install

```bash
pnpm add @minko-fe/tsconfig
```

#### tsconfig.json

##### lib
```json
{
  "extends": "@minko-fe/tsconfig/tsconfig.lib.json"
}
```

##### app
```json
{
  "extends": "@minko-fe/tsconfig/tsconfig.app.json"
}
```
