import _ from 'lodash'
import { normalize } from 'normalizr'
import humps from 'humps'
import { FETCH_STATUS } from '../constants'

const assignEntityStatus = (normalizedData, fetchStatus, error?) => {
  return _.mapValues(normalizedData.entities || {}, (val) => {
    return {
      entities: val,
      errors: error ? _.mapValues(val, () => error) : undefined,
      fetchStatus: _.mapValues(val, () => fetchStatus)
    }
  })
}

const mockNormalizedData = (key, id) => {
  return {
    result: [id],
    entities: {
      [key]: {
        [id]: {}
      }
    }
  }
}

const normalizeEntity = (json, schema) => {
  const camelizedJson = humps.camelizeKeys(json)
  return normalize(camelizedJson, schema)
}

export const entities = (state = {}, action: LoaderAction) => {
  const { payload, meta, type } = action

  if (!payload || !payload.request || !meta || !meta.schema || !meta.types) {
    return state
  }

  const { schema, types } = meta

  switch (type) {
    case types.REQUEST:
      if (payload.id) {
        const dataR = assignEntityStatus(mockNormalizedData(schema.getKey(), payload.id), FETCH_STATUS.LOADING)

        // todo: array content?
        return _.merge({}, state, dataR)
      }
      return state

    case types.SUCCESS:
      const data = assignEntityStatus(normalizeEntity(payload.response.json, schema), FETCH_STATUS.LOADED)
      return _.merge({}, state, data)

    case types.FAILURE:
      if (payload.id) {
        const dataE = assignEntityStatus(mockNormalizedData(schema.getKey(), payload.id), FETCH_STATUS.LOADING, payload)

        // todo: array content?
        return _.merge({}, state, dataE)
      }
      return state

    default:
      return state
  }
}
