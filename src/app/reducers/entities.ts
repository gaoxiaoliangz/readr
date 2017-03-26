import _ from 'lodash'
import { expandEntities, mockEntity } from '../utils/entity'
import { FETCH_STATUS, ACTION_TYPES } from '../constants'

export const entities = (state = {}, action: LoaderAction) => {
  // TODO
  // if (action.type === ACTION_TYPES.REMOVE_ENTITY) {
  //   const {name, id} = action
  //   return _.assign({}, state, {
  //     [name]: _.omit(state[name], [id])
  //   })
  // }

  const { payload, meta, type } = action

  if (!meta || !meta.schema || !meta.types) {
    return state
  }

  const { types, schema, targetId } = meta

  switch (type) {
    case types.REQUEST:
      if (targetId) {
        const _entities = expandEntities(mockEntity(schema.key, targetId), FETCH_STATUS.LOADING)
        // todo: array content?
        return _.merge({}, state, _entities)
      }
      return state

    case types.SUCCESS:
      return _.merge({}, state, payload.normalized.entities)

    case types.FAILURE:
      if (targetId) {
        const _entities = expandEntities(mockEntity(schema.key, targetId), FETCH_STATUS.FAILED, payload)
        // todo: array content?
        return _.merge({}, state, _entities)
      }
      return state

    default:
      return state
  }
}
