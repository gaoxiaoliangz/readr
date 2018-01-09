/**
 * state
 * data that accessed via redux store
 */

declare namespace Viewer {
  type Themes = 'white' | 'night' | 'sepia'

  type Computed = TBookPage[]

  interface LocalProgress {
    percentage: number
    page: number
    pageCount?: number
    timestamp?: string
  }

  interface Components {
    showNavigation?: boolean
    showPanel?: boolean
    showPreference?: boolean
    showProgress?: boolean

    // if true, all components will be hided (highest priority)
    hideAll?: boolean
  }

  interface Config {
    isCalcMode?: boolean
    isTouchMode?: boolean
    isScrollMode?: boolean
    fluid?: boolean
    pageHeight?: number
    fontSize?: number
    theme?: Themes
    width?: number
    lineHeight?: number
  }

  interface Status {
    isReady?: boolean
    statusText?: string
  }
}

declare namespace State {

  type FetchMoreConfig = {
    variables?: any
    query?: any
    updateQuery?: (previousResult, { fetchMoreResult }) => any
  }

  type Apollo<Data> = {
    error: Error
    fetchMore: (config: FetchMoreConfig) => ApolloFetchMoreResult<Data>
    refetch: (variables?: any) => any
    loading: boolean
  } & Data

  interface Routing {
    action: string
    hash: string
    key: string
    pathname: string
    query: {
      [key: string]: any
    }
    search: string
    state: any
  }

  type Session = {
    role: Roles
    username: string
    displayName: string
    fetchStatus: FetchStatus
    id: string
  }

  interface Entity {
    fetchStatus: FetchStatus
    error: any
    [key: string]: any
  }

  // deprecated
  interface Pagination {
    pages: {}
    next: PaginationLink
    last: PaginationLink
    currentPage: number
    fetchStatus: FetchStatus
  }
}
