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
    toc: TocChapter[]
  }

  interface TocChapter {
    src: string
    name: string
    playOrder: string
    srcObject: TocChapterSrcObject
    children: [TocChapter]
  }

  interface TocChapterSrcObject {
    name: string
    ext: string
    prefix: string
    url: string
    hash: string
  }

  interface BookPages {
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
