/**
 * data
 * used between functions, describe data structures
 */

interface ParsedNode {
  tag?: string
  type: 1 | 3
  text?: string
  children?: ParsedNode[]
  attrs: {
    tagId: string
    href: string
    src: string
  }
}

type FetchStatus = 'loading' | 'none' | 'loaded' | 'failed'

type Roles = 'admin' | 'user' | 'visitor'

interface PaginationLink {
  page: string
  url: string
}
