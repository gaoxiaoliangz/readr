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
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string
      endCursor: string
    }
    edges: {
      cursor: string
      node: T
    }[]
  }
}
