type FetchStatus = 'loading' | 'none' | 'loaded' | 'failed'
type Roles = 'admin' | 'user' | 'visitor'

// state
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


/**
 * General types
 */
type TNotification = 'success' | 'error' | 'warning' | 'ongoing'

// action
interface RequestTypes {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
}

interface SagaActionTypes extends RequestTypes {
  TRIGGER: string
}

interface ActionEntity {
  request: any
  success: any
  failure: any
}

// for thunk actions server side data fetching (deprecated)
// type FetchDataOptions = {
//   store: {
//     dispatch: (action: any) => any
//   }
//   params: any
//   query: any
//   userSession: any
// }

interface RequestConfig {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
  cookie?: boolean | string | object
  dataType?: 'urlencoded' | 'json'
  data?: {}
  query?: object | string
  useJsonp?: boolean
  _rawInit?: RequestInit
}

interface ActionRequestObj extends RequestConfig {
  url: string
}

type CreateSagaActionOptions = {
  payload?: any
  meta?: object
  schema?: any
  request: ActionRequestObj
  targetId?: string
}

interface LoaderAction {
  type: string,
  payload: {
    request: ActionRequestObj & {
      injectedCookie?: any
    }
    response?: {
      json: any
      links?: any
    }
    normalized?: {
      entities: any
      result: string[]
      links?: any
    }
  }
  meta: {
    targetId?: string
    schema?: any
    types: SagaActionTypes
    isSagaTrigger?: boolean
  }
  error?: boolean
}

interface Link {
  page: string
  url: string
}

/**
 * Viewer components & data types
 */

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
