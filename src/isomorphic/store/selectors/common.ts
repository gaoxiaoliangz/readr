import { createSelector } from 'reselect'
import _ from 'lodash'

const entitiesSelector = name => state => {
  return state.entities[name] || {}
}
const paginationSelector = (name, key = 'default') => state => {
  return _.get(state.pagination, `${name}.${key}.ids`, [])
}
export const paginationLinkSelector = (name, key = 'default') => state => {
  return {
    next: _.get(state.pagination, `${name}.${key}.next`, []),
    last: _.get(state.pagination, `${name}.${key}.last`, [])
  }
}
const queryPaginationSelector = (name, query) => state => {
  return _.get(state.pagination, [name, 'query', query, 'ids'], [])
}

type SelectPaginatedEntitiesOptions = {
  entitiesName: string
  paginationName: string
  paginationKey?: string
  paginationQuery?: string
}
export const selectPaginatedEntities = (options: SelectPaginatedEntitiesOptions) => {
  const {entitiesName, paginationName, paginationKey, paginationQuery} = options
  let pagiSelector: (state: any) => any[]

  if (paginationQuery) {
    pagiSelector = queryPaginationSelector(paginationName, paginationQuery)
  } else {
    pagiSelector = paginationSelector(paginationName, paginationKey)
  }

  return createSelector(
    entitiesSelector(entitiesName),
    pagiSelector,
    (entities, ids) => {
      return ids.map(id => entities[id])
    }
  )
}