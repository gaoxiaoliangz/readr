// interface APIResult {
//   data: object
//   meta?: any
// }

interface GeneralObject {
  [key: string]: any
}

interface RectInfo {
  width: number
  height: number
  flow: 'follow' | 'block' | 'newline'
  char: string
  tag: string
}

interface Atom {
  parentTag: string
  type: 1 | 3
  text?: string
  path: string[]
}
