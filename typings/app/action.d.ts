type FetchStatus = 'loading' | 'none' | 'loaded' | 'failed'
type Roles = 'admin' | 'user' | 'visitor'
type TNotification = 'success' | 'error' | 'warning' | 'ongoing'

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

interface CreateSagaActionOptions {
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
