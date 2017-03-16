import { selectors as form } from 'better-redux-form'
import _ from 'lodash'
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect'
import * as viewer from './viewer'
import * as entityUtils from './entityUtils'
import schemas from '../schemas'

const collapseEntities = (entities) => {
  return _.mapValues(entities, val => {
    return val.entities
  })
}

export const session = state => {
  return _.get(state, 'session', {})
}

interface Pagination {
  pages: {}
  next: {}
  last: {}
}
export const pagination = (name, key = 'default') => state =>
  _.get(state, ['pagination', name, key], {}) as Pagination

export const collapsedEntities = state =>
  collapseEntities(_.get(state, 'entities', {})) || {}

// export const pagedEntities = (name, schema, _pagination) => state => {
//   const selectedEntities = entityUtils.entities(name)(state)
//   const ids = _pagination.ids
//   const entities = collapseEntities(_.get(state, 'entities'))
//   return denormalize(ids, schema, entities)
// }

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

// export const defaultBooks = state => {
//   const booksPagination = pagination('books')(state)
//   return pagedEntities('books', schemas.BOOK_ARRAY, booksPagination)(state) || []
// }

export const defaultBooks = pagedEntities({
  schema: schemas.BOOK_ARRAY,
  paginationName: 'books'
})

export * from './entityUtils'
export * from './entities'
export { form, viewer }
