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

interface RLocation {
  action: string
  hash: string
  key: string
  pathname: string
  query: {
    [key: string]: string
  }
  search: string
}

type HTMLProps = React.HTMLAttributes<{
  styleName?: string
}>

type ApolloFetchMoreResult<T> = Promise<{
  data: T
  loading: boolean
  networkStatus: number
  stale: boolean
}>

type ReaderConfig = {
  layout: {
    margin: number
    lineHeight: number
    fontSize: number
    aspectRatio: number

    // 0 means 100%
    width: number
  }
}
