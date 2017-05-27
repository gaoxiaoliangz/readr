/**
 * schema
 * it refelects the schema defined in graphql
 */

declare namespace Schema {
  type ReadingProgress = {
    percentage: number
  }

  type BookInfo = {
    title: string
    toc: TocItem[]
  }

  interface TocItem {
    sectionId: string
    hash: string
    name: string
    playOrder: string
    children: [TocItem]
  }

  interface BookPages {
    totalCount: number
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

  interface Connection<T> {
    totalCount: number
    edges: {
      cursor: string
      node: T
    }[]
  }
}

// deprecated
type TBookPage = {
  nodes: string[]
  meta?: {
    pageNo?: number
    offset?: number
    chapterId: string
    hash?: string
  }
}

type TBookFlesh = {
  markdown: string
  id: string
}[]

type TBookNav = {
  index: number
  label: string
  ref: string
  hash?: string
  children?: TBookNav[]
}
