import fs from 'node:fs'
import { type FlatESLintConfigItem } from 'eslint-define-config'
// @ts-expect-error missing types
import parse from 'parse-gitignore'
import findUp from 'find-up'
import { GLOB_EXCLUDE } from '../globs'

interface FlatGitignoreOptions {
  files?: string | string[]
}

interface FlatConfigItem {
  ignores: string[]
}

function gitignore(options: FlatGitignoreOptions = {}): FlatConfigItem {
  const ignores: string[] = []

  const { files: _files = '.gitignore' } = options
  const files = Array.isArray(_files) ? _files : [_files]

  for (const file of files) {
    const _file = findUp.sync(file)
    if (!_file) continue
    const content = fs.readFileSync(_file, 'utf8')
    const parsed = parse(content)
    const globs = parsed.globs()
    for (const glob of globs) {
      if (glob.type === 'ignore') ignores.push(...glob.patterns)
      else if (glob.type === 'unignore') ignores.push(...glob.patterns.map((pattern: string) => `!${pattern}`))
    }
  }

  return {
    ignores,
  }
}

export const ignores: FlatESLintConfigItem[] = [{ ignores: [...GLOB_EXCLUDE, ...gitignore().ignores] }]
