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

interface ParsedNode {
  tag?: string
  type: 1 | 3
  text?: string
  children?: ParsedNode[]
  attrs: GeneralObject
}

interface QBookPages {
  edges: {
    cursor: string
    node: {
      elements: ParsedNode[]
      meta: {
        pageNo: number
        offset: number
      }
    }
  }[]
}

type QBookInfo = {
  title: string
}
