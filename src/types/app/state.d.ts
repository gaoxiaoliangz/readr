/**
 * state
 * data that accessed via redux store
 */

// todo
// put these under State namespace
type FetchStatus = 'loading' | 'none' | 'loaded' | 'failed'
type Roles = 'admin' | 'user' | 'visitor'

interface Link {
  page: string
  url: string
}

type Session = {
  role: Roles
  username: string
  fetchStatus: FetchStatus
  id: string
}

interface SelectedPagination {
  pages: {}
  next: Link
  last: Link
  currentPage: number
  fetchStatus: FetchStatus
}

interface SelectedRouting {
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

interface SelectedEntity {
  fetchStatus: FetchStatus
  error: any
  [key: string]: any
}

declare namespace Viewer {
  type Themes = 'WHITE' | 'NIGHT' | 'SEPIA'

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
  }

  interface Status {
    isReady?: boolean
    statusText?: string
  }
}




declare namespace State {
  type Apollo<T> = {
    error: Error
    fetchMore: any
    loading: boolean
  } & T

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
}
