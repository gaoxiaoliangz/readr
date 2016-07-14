declare module "react-side-effect" {
   var noTypeInfoYet: any
   export = noTypeInfoYet
}

declare module "schemas" {
   export const Schemas: any;
}

declare module "humps" {
   var noTypeInfoYet: any
   export = noTypeInfoYet
}

// declare let Promise
// declare let require

// declare interface ObjectConstructor {
//     assign(target: any, ...sources: any[]): any;
// }

// type Symbol = any

declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}