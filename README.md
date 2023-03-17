# @minko-fe/any-config

## Usage

### <img style="width: 14px; height: 14px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_eslint.svg" /> eslint

#### install


##### React

```bash
pnpm add eslint @minko-fe/eslint-config -D
```

##### Vue

```bash
pnpm add eslint @minko-fe/eslint-config-vue -D
```

#### React

##### .eslintrc.json

```json
{
  "extends": "@minko-fe" // React
  // "extends": "@minko-fe/eslint-config-vue" // vue
}
```

##### .eslintrc.js

```js
module.exports = {
  extends: '@minko-fe',
  // extends: '@minko-fe/eslint-config-vue' // vue
}
```


### <img style="width: 14px; height: 14px" src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/70702eb811036276c75b7ddf33060ee109026fe9/icons/file_type_light_prettier.svg" /> prettier

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
pnpm add @minko-fe/commitlint-config
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

##### project
```json
{
  "extends": "@minko-fe/tsconfig/tsconfig.project.json"
}
```
