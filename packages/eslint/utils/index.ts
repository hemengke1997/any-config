// @ts-nocheck

export type InteropDefault<T> = T extends { default: infer U } ? U : T

export function interopDefault<T>(m: T): InteropDefault<T> {
  return 'default' in m ? interopDefault(m.default) : m
}
