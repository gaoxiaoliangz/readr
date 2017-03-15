import _ from 'lodash'

export const entities = (state = {}, action: LoaderAction) => {
  const { payload, meta, type } = action

  if (!meta || !meta.schema || !meta.types) {
    return state
  }

  const { types } = meta

  switch (type) {
    case types.REQUEST:
      if (payload.targetId) {
        // todo: array content?
        return _.merge({}, state, payload.entities)
      }
      return state

    case types.SUCCESS:
      return _.merge({}, state, payload.entities)

    case types.FAILURE:
      if (payload.targetId) {
        // todo: array content?
        return _.merge({}, state, payload.entities)
      }
      return state

    default:
      return state
  }
}
