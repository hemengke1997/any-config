# @minko-fe/eslint-config

## Usage

### Install

```bash
pnpm add -D eslint @minko-fe/eslint-config-all
```

### Config `.eslintrc`

```json
{
  "extends": "@minko-fe"
}
```

```js
module.exports = {
  extends: ['@minko-fe'],
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```


