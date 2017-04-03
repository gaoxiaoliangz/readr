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
