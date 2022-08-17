# @minko-fe/any-config

## Usage

### eslint

#### install

```bash
pnpm add eslint @minko-fe/eslint-config -D
```

### .eslintrc.json

```json
{
  "extends": "@minko-fe"
}
```

### prettier

#### install

```bash
pnpm add prettier @minko-fe/prettier-config -D
```

#### .prettierrc.js

```js
module.exports = {
  ...require('@minko-fe/any-config/prettier'),
  semi: false,
}
```

### commitlint

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

### tsconfig
#### install
```bash
pnpm add @minko-fe/tsconfig
```
#### tsconfig.json

```json
{
  "extends": "@minko-fe/tsconfig/tsconfig.base.json"
}
```
