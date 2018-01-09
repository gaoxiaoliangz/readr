/**
 * special file types
 * https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#wildcard-character-in-module-names
 */
declare module '*.scss' {
  const content: any
  export default content
}

declare module '*.gql' {
  const content: any
  export default content
}

declare module '*.gif' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.json' {
  const content: any
  export default content
}

// modified
declare interface NodeRequire {
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: (path: string) => any) => void) => void
}

interface NodeModule {
  // todo
  hot: any
}
