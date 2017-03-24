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
