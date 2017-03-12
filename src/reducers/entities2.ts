import _ from 'lodash'

const expandEntities = (entities) => {
  return _.mapValues(entities, (val) => {
    return {
      entities: val,
      errors: {},
      // todo
      fetchStatus: _.mapValues(val, () => 'loaded')
    }
  })
}

export const appData = (state = {}, action) => {
  const isNormalized = _.get(action, 'meta.isNormalized', false)
  const entityKey = _.get(action, 'meta.entityKey', 'noname')

  if (isNormalized) {
    return state
  }

  // request
  if (action.meta && action.meta.isApiFlow && action.meta.isRequest) {
    return {
      ...state,
      ...{
        [entityKey]: {
          data: _.get(state, [entityKey, 'data']),
          error: {},
          // todo
          fetchStatus: 'loading'
        }
      }
    }
  }

  // success
  if (action.payload && action.payload.response) {
    return {
      ...state,
      ...{
        [entityKey]: {
          data: action.payload.response,
          error: {},
          // todo
          fetchStatus: 'loaded'
        }
      }
    }
  }

  // failure
  if (action.meta && action.meta.isApiFlow && action.error) {
    return {
      ...state,
      ...{
        [entityKey]: {
          data: _.get(state, [entityKey, 'data']),
          error: action.payload,
          // todo
          fetchStatus: 'failed'
        }
      }
    }
  }

  return state
}

export const entities = (state = {}, action) => {
  const entityKey = _.get(action, 'meta.entityKey', 'noname')
  const entityId = _.get(action, 'meta.entityId', '') as string
  const isNormalized = _.get(action, 'meta.isNormalized', false)

  if (!isNormalized) {
    return state
  }

  if (action.meta && action.meta.isApiFlow && action.meta.isRequest && entityId) {
    return {
      ...state,
      ...{
        [entityKey]: {
          entities: _.get(state, [entityKey, 'entities']),
          errors: {},
          fetchStatus: {
            // todo
            [entityId]: 'loading'
          }
        }
      }
    }
  }

  if (action.payload && action.payload.response && entityId) {
    const expanded = expandEntities(action.payload.response.entities)

    return {
      ...state,
      ...expanded
    }
  } else if (action.payload && action.payload.response && !entityId) {
    return {
      ...state,
      ...action.payload.response
    }
  }

  // todo: error

  return state
}