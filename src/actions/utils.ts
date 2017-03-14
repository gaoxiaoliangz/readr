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

export const createSagaAction = (types, options: CreateSagaActionOptions) => {
  const { payload, meta, schema, id, request } = options

  return {
    type: types.trigger,
    payload: {
      ...{
        request,
        id
      },
      ...payload
    },
    meta: {
      ...{
        types,
        schema
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
        meta
      }
    },

    success: (payload, meta?: object) => {
      return {
        type: types.SUCCESS,
        payload,
        meta
      }
    },

    failure: (payload, meta?: object) => {
      return {
        type: types.FAILURE,
        payload,
        error: true,
        meta
      }
    }
  }
}
