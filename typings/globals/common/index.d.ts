/**
 * Packages with no type info
 */
declare module "react-side-effect" {
  var noTypeInfoYet: any
  export = noTypeInfoYet
}

declare module "humps" {
  var noTypeInfoYet: any
  export = noTypeInfoYet
}

declare module "react-css-modules" {
  var noTypeInfoYet: any
  export = noTypeInfoYet
}

declare module "colors/safe" {
  var noTypeInfoYet: any
  export = noTypeInfoYet
}


/**
 * webpack require an require.ensure
 * https://github.com/TypeStrong/ts-loader/blob/master/test/codeSplitting/require.d.ts
 */
declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}


/**
 * For node support
 */
declare var module: {
  exports: any
}

declare var process
declare var __dirname
declare var __filename


/**
 * Other
 */
// declare interface ObjectConstructor {
//   assign(target: any, ...sources: any[]): any;
// }
