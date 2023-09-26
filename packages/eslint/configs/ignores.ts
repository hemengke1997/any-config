import { type FlatESLintConfigItem } from 'eslint-define-config'
import gitignore from 'eslint-config-flat-gitignore'
import { GLOB_EXCLUDE } from '../globs'

export const ignores: FlatESLintConfigItem[] = [{ ignores: [...GLOB_EXCLUDE, ...gitignore().ignores] }]
