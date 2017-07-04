/**
 * schema
 * it refelects the schema defined in graphql
 */

declare namespace Schema {
  type ReadingProgress = {
    percentage: number
  }

  // deprecated
  type BookInfo = {
    title: string
    toc: TocItem[]
  }

  interface Book {
    id: string
    title: string
    authors: {
      name: string
    }[]
    description: string
    cover: string
  }

  interface Category {
    id: string
    name: string
    slug: string
    description: string
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
    startPage: number
    lastProgress: number
    fromHistory: boolean
    fromLocation: string
    offset: number
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

  interface Slide {
    id: string
    url: string
    picture: string
    description: string
    createdAt: string
  }

  interface Post {
    slug: string
    title: string
    description: string
    // # author {
    // #   name
    // #   id
    // # }
    // # tags {
    // #   slug
    // #   name
    // #   id
    // # }
    markdown: string
    visibility: string
    status: string
    image: string
    category: string
    id: string
    objectId: string
    createdAt: string
    updatedAt: string
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
