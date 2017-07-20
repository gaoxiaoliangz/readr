/**
 * schema
 * it refelects the schema defined in graphql
 */

declare namespace Schema {
  type ReadingProgress = {
    percentage: number
  }

  interface Author {
    name: string
    slug: string
    description: string
    id: string
    objectId: string
    createdAt: string
    updatedAt: string
  }

  interface ReadingHistoryEntry {
    id: string
    bookId: string
    title: string
    description: string
    percentage: number
    authors: any[]
    cover: string
  }

  interface Book {
    id: string
    objectId: string
    title: string
    authors: {
      name: string
    }[]
    description: string
    cover: string
    createdAt: string
    updatedAt: string
    toc: TocItem[]
  }

  interface Category {
    id: string
    name: string
    slug: string
    description: string
    createdAt?: string
    updatedAt: string
  }

  interface Post {
    slug: string
    title: string
    description: string
    author: string
    tags: {
      id: string
      name: string
      slug: string
    }[]
    markdown: string
    visibility: PostVisibility // keyof PostVisibility
    status: PostStatus // keyof PostStatus
    category: PostCategory // keyof PostCategories
    image: string
    id: string
    objectId: string
    createdAt: string
    updatedAt: string
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
        nodes: HtmlNodeObject[]
        pageNo: number
        offset: number
        sectionId: string
        sectionIds: string[]
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
