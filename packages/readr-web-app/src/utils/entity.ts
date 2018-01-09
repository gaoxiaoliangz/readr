import humps from 'humps'
import { normalize } from 'normalizr'
import _ from 'lodash'

export const normalizeJSON = (json, schema) => {
  const camelizedJson = humps.camelizeKeys(json)
  return normalize(camelizedJson, schema)
}

export const expandEntities = (normalizedEntities, fetchStatus, error?) => {
  return _.mapValues(normalizedEntities || {}, (val) => {
    return {
      entities: val,
      errors: error ? _.mapValues(val, () => error) : undefined,
      fetchStatus: _.mapValues(val, () => fetchStatus)
    }
  })
}

export const mockEntity = (key, id) => {
  return {
    [key]: {
      [id]: {}
    }
  }
}
