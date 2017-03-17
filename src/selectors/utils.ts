import _ from 'lodash'
import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'

const collapseEntities = (entities) => {
  return _.mapValues(entities, val => {
    return val.entities
  })
}

export const pagination = (name, key = 'default') => state =>
  _.get(state, ['pagination', name, key], {}) as SelectedPagination

export const collapsedEntities = state =>
  collapseEntities(_.get(state, 'entities', {})) || {}

interface PagedEntitiesOptions {
  schema: any
  paginationName: any
  paginationKey?: any
}
export const pagedEntities = ({ schema, paginationName, paginationKey }: PagedEntitiesOptions) => createSelector(
  pagination(paginationName, paginationKey = 'default'),
  collapsedEntities,
  (_pagination, _allEntities) => {
    const pagedIds = _pagination.pages
    const pages = _.mapValues(pagedIds, ids => {
      return denormalize(ids, schema, _allEntities)
    })
    return {
      ..._pagination,
      ...{
        ...{ pages }
      }
    }
  }
)
