import { createSelector } from 'reselect'
import _ from 'lodash'
import { denormalize } from 'normalizr'

const DEFAULT_KEY = 'default'

const collapseEntities = (entities) => {
  return _.mapValues(entities, val => {
    return val.entities
  })
}

// new
// entities
export const collapsedEntities = state =>
  collapseEntities(_.get(state, 'entities', {})) || {}

export const pagination = (name, key = 'default') => state =>
  _.get(state, ['pagination', name, key], {}) as State.Pagination

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

export const paginationLinks = (name, key = DEFAULT_KEY) => state => {
  return _.pick(_.get(state.pagination, `${name}.${key}`, {}), ['next', 'last'])
}

export const entity = (schema: { [key: string]: any }, id): any => createSelector(
  collapsedEntities,
  allEntities => {
    const isEntityEmpty = _.isEmpty(_.get(allEntities, [schema.key]))

    return _.isEmpty(allEntities) || isEntityEmpty
      ? {}
      : denormalize(id, schema, allEntities)
  }
)

export const currentPage = (name, key = DEFAULT_KEY) => createSelector(
  pagination(name, key),
  _pagination => {
    const next = _.get(_pagination, 'next.page')
    const last = _.get(_pagination, 'last.page')

    return next
      ? next as any - 1
      : last
  }
)

// old
// export const isPaginationFetching = (name, key = DEFAULT_KEY) => state => {
//   return _.get(state, ['pagination', name, key, 'fetchStatus']) === FETCH_STATUS.LOADING
// }

// export const paginationPages = (name, key = DEFAULT_KEY) => state => {
//   return _.get(state, ['pagination', name, key, 'pages'], {})
// }


// export const nextPage = (name, key = DEFAULT_KEY) => createSelector(
//   paginationLinks(name, key),
//   selectedPaginationLinks => {
//     return _.get(selectedPaginationLinks, 'next.page', 0)
//   }
// )

// interface EntityPagesOptions {
//   entitiesName: string
//   paginationName: string
//   paginationKey?: string
// }
// export const entityPages = (options: EntityPagesOptions) => {
//   const { entitiesName, paginationName, paginationKey } = options

//   return createSelector(
//     entities(entitiesName),
//     paginationPages(paginationName, paginationKey),
//     (selectedEntities, pages) => {
//       return _.mapValues(pages, ids => {
//         return (ids as string[])
//           .map(id => selectedEntities[id])
//           .filter(item => Boolean(item))
//       })
//     }
//   )
// }

// interface PagedEntitiesOptions extends EntityPagesOptions {
//   page?: string | number
// }
// export const pagedEntities = (options: PagedEntitiesOptions) => {
//   const { page } = options

//   return createSelector(
//     entityPages(options),
//     pages => {
//       if (page) {
//         return _.get(pages, [page], [])
//       }

//       let allEntities = []
//       _.keys(pages).forEach(p => {
//         allEntities = allEntities.concat(pages[p])
//       })

//       return allEntities
//     }
//   )
// }
