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

interface ActionRequestObj extends RequestConfig {
  url: string
}

type CreateSagaActionOptions = {
  payload?: any
  meta?: object
  parser?: (response: { json: any }) => any
  schema?: any
  entityKey?: string
  entityId?: string
  request: ActionRequestObj
}
export const createSagaAction = (types, options: CreateSagaActionOptions) => {
  const { payload, meta, parser, schema, entityKey, entityId, request } = options
  let _entityKey = entityKey
  if (!entityKey && !schema) {
    _entityKey = `key-${Math.random()}`
  }

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
        entityKey: _entityKey,
        entityId,
      },
      ...meta
    }
  }
}

export const createActionEntity2 = (types) => {
  return {
    request: (payload?, meta?: object) => {
      return {
        type: types.REQUEST,
        payload,
        meta: {
          ...{
            isApiFlow: true,
            isRequest: true
          },
          ...meta
        }
      }
    },

    success: (response, meta?: object) => {
      return {
        type: types.SUCCESS,
        payload: { response },
        meta: {
          ...{
            isApiFlow: true,
            isApiResponse: true
          },
          ...meta
        }
      }
    },

    failure: (error, meta?: object) => {
      return {
        type: types.FAILURE,
        payload: error,
        error: true,
        meta: {
          ...{
            isApiFlow: true,
            hasError: true
          },
          ...meta
        }
      }
    }
  }
}
