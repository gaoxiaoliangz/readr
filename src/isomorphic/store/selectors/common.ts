import { createSelector } from 'reselect'
import _ from 'lodash'

const defaultKey = 'default'

export const entities = name => state => {
  return state.entities[name] || {}
}
export const paginatedIds = (name, key = defaultKey) => state => {
  return _.get(state.pagination, `${name}.${key}.ids`, [])
}
export const paginationLinks = (name, key = defaultKey) => state => {
  return _.pick(_.get(state.pagination, `${name}.${key}`, {}), ['next', 'last'])
}

export const nextPage = (name, key = defaultKey) => createSelector(
  paginationLinks(name, key),
  selectedPaginationLinks => {
    return _.get(selectedPaginationLinks, 'next.page', 0)
  }
)

type PaginationOptions = {
  entitiesName: string
  paginationName: string
  paginationKey?: string
}
export const pagination = (options: PaginationOptions) => {
  const {entitiesName, paginationName, paginationKey} = options
  const pagiSelector = paginatedIds(paginationName, paginationKey)

  return createSelector(
    entities(entitiesName),
    pagiSelector,
    (selectedEntities, ids) => {
      return ids
        .map(id => selectedEntities[id])
        .filter(item => Boolean(item))
    }
  )
}
