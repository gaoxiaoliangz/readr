import _ from 'lodash'

// action types
export const createRequestTypes = base => {
  return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    acc[type] = `api/${base}/${type}`
    return acc
  }, {}) as RequestTypes
}

export const createComponentActionType = (name, operation) =>
  `components/${name}/${operation}`

export const createSagaTriggerActionType = (operation: string) =>
  `saga-triggers/${operation}/TRIGGER`

export const createSagaActionTypes = (name): SagaActionTypes => {
  return {
    ...createRequestTypes(name),
    ...{
      TRIGGER: createSagaTriggerActionType(name)
    }
  }
}

// action creator helpers
export const createTriggerAction = (types: SagaActionTypes, options: CreateSagaActionOptions): LoaderAction => {
  const { payload, meta, schema, targetId, request } = options

  return {
    type: types.TRIGGER,
    payload: {
      ...{
        request
      },
      ...payload
    },
    meta: {
      ...{
        types,
        targetId,
        schema
      },
      ...meta
    } as any
  }
}

export const createActionEntity = (types) => {
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
