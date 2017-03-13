const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const LOAD_CACHE = 'LOAD_CACHE'

export const action = (type, payload = {}) => {
  return Object.assign({}, {
    type
  }, payload)
}

export const createRequestTypes = base => {
  return [REQUEST, SUCCESS, FAILURE, LOAD_CACHE].reduce((acc, type) => {
    acc[type] = `api/${base}/${type}`
    return acc
  }, {}) as RequestTypes
}

export const createComponentActionType = (name, operation) =>
  `components/${name}/${operation}`

export const createSagaTriggerActionType = (operation: string) =>
  `saga-triggers/${operation}/LOAD`

export const createActionEntity = (requestTypes: RequestTypes) => {
  return {
    request: (payload?: Object) => action(requestTypes.REQUEST, payload),
    success: (response?, payload?: Object) => action(requestTypes.SUCCESS, Object.assign({}, { response }, payload)),
    // TODO
    loadCache: (response, payload: Object) => action(requestTypes.SUCCESS, Object.assign({}, { response }, payload, { loadedFromCache: true })),
    failure: (error, payload?: Object) => action(requestTypes.FAILURE, Object.assign({}, { error }, payload)),
  }
}

export const createSagaActionTypes = name => {
  return {
    ...createRequestTypes(name),
    ...{
      trigger: createSagaTriggerActionType(name)
    }
  }
}

type CreateSagaActionOptions = {
  payload?: any
  meta?: object
  parser?: (response: { json: any }) => any
  schema?: any
  entityKey?: string
  entityId?: string
  request: {
    url: string
    method?: 'get' | 'post' | 'put' | 'delete'
  }
}
export const createSagaAction = (types, options: CreateSagaActionOptions) => {
  const { payload, meta, parser, schema, entityKey, entityId, request } = options
  return {
    type: types.trigger,
    payload: {
      ...{
        request
      },
      ...payload
    },
    meta: {
      ...{
        types,
        isSagaActions: true,
        isLoadAction: true,
        parser,
        schema,
        entityKey,
        entityId,
      },
      ...meta
    }
  }
}
