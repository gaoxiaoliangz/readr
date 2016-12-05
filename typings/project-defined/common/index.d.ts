type RequestTypes = {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
  LOAD_CACHE: string
}

interface ActionEntity {
  request: any
  success: any
  failure: any
  loadCache: any
}

interface AppConfig {
  api: {
    prefix: string
  },
  database: {
    host: string
    name: string
    mongoStoreName: string
  },
  siteUrl: string
  port: number,
  enableEntityCache: boolean
}


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

// viewer
interface ViewerConfig {
  isCalcMode?: boolean
  fluid?: boolean
  isTouchMode?: boolean
  pageHeight?: number
  fontSize?: number
}


/**
 * types & interfaces
 */
type FetchDataOptions = {
  store: {
    dispatch: (action: any) => any
  }
  params: any
  query: any
  userSession: any
}
