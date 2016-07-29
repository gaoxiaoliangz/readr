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

// declare let Promise
// declare let Symbol

// declare interface ObjectConstructor {
//   assign(target: any, ...sources: any[]): any;
// }

declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}


// for node
declare var module: {
  exports: any
}

declare var process
declare var __dirname
declare var __filename
