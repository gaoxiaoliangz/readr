/**
 * special file types
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#wildcard-character-in-module-names
 */

declare module '*.scss' {
  const content: any
  export default content
}

declare module '*.json' {
  const content: any
  export default content
}
