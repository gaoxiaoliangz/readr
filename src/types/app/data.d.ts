/**
 * data
 * used between functions, describe data structures
 */


type FetchStatus = 'loading' | 'none' | 'loaded' | 'failed'
type PostStatus = 'PUBLISHED' | 'UNPUBLISHED' | 'DRAFT' | ''
type PostVisibility = 'PUBLIC' | 'PRIVATE' | ''
type PostCategory = 'BLOG' | 'BOOK_WEEKLY' | 'PAGES' | ''
type Roles = 'admin' | 'user' | 'visitor'

interface HtmlNodeObject {
  tag?: string
  type: 1 | 3
  text?: string
  children?: HtmlNodeObject[]
  attrs: {
    nodeId: string
    href: string
    src: string
  }
}

type ConsoleMenus = {
  icon: string
  displayName: string
  path: string
  subMenu?: [
    {
      displayName: string
      path: string
      match?: RegExp
    }
  ]
}[]

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

interface GQLField {
  type: any
  args?: {
    [argName: string]: {
      type: any
      defaultValue?: any
      description?: string
    }
  }
  resolve?: any
  deprecationReason?: string;
  description?: string;
}


type ApolloMutationConfig = {
  variables?: {
    [key: string]: any
  }
  refetchQueries?: {
    [key: string]: any
    query?: any
  }[]
}
declare function ApolloMutation(config?: ApolloMutationConfig): Promise<any>

type Section = {
  id: string
  htmlString: string
  toHtmlObjects: () => HtmlNodeObject[]
  htmlObjects: HtmlNodeObject[]
}
