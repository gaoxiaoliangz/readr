/**
 * data
 * used between functions, describe data structures
 */

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

