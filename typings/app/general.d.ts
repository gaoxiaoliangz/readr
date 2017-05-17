/**
 * general
 * some commonly used types and interfaces
 */

interface GeneralObject {
  [key: string]: any
}

type Promisable<T> = T | Promise<T>
