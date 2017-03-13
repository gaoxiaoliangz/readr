import { createSelector } from 'reselect'
import _ from 'lodash'

const DEFAULT_KEY = 'default'

export const entities = name => state => {
  return state.entities[name] || {}
}

export const isPaginationFetching = (name, key = DEFAULT_KEY) => state => {
  return _.get(state, ['pagination', name, key, 'isFetching'], true)
}
export const paginationPages = (name, key = DEFAULT_KEY) => state => {
  return _.get(state, ['pagination', name, key, 'pages'], {})
}

export const paginationLinks = (name, key = DEFAULT_KEY) => state => {
  return _.pick(_.get(state.pagination, `${name}.${key}`, {}), ['next', 'last'])
}

export const nextPage = (name, key = DEFAULT_KEY) => createSelector(
  paginationLinks(name, key),
  selectedPaginationLinks => {
    return _.get(selectedPaginationLinks, 'next.page', 0)
  }
)

export const currentPage = (name, key = DEFAULT_KEY) => createSelector(
  paginationLinks(name, key),
  selectedPaginationLinks => {
    const next = _.get(selectedPaginationLinks, 'next.page')
    const last = _.get(selectedPaginationLinks, 'last.page')

    return next
      ? next as any - 1
      : last
  }
)

export const entity = (name, id) => state => {
  return _.get(state, ['entities', name, id], {})
}

interface EntityPagesOptions {
  entitiesName: string
  paginationName: string
  paginationKey?: string
}
export const entityPages = (options: EntityPagesOptions) => {
  const {entitiesName, paginationName, paginationKey} = options

  return createSelector(
    entities(entitiesName),
    paginationPages(paginationName, paginationKey),
    (selectedEntities, pages) => {
      return _.mapValues(pages, ids => {
        return (ids as string[])
          .map(id => selectedEntities[id])
          .filter(item => Boolean(item))
      })
    }
  )
}

interface PagedEntitiesOptions extends EntityPagesOptions {
  page?: string | number
}
export const pagedEntities = (options: PagedEntitiesOptions) => {
  const { page } = options

  return createSelector(
    entityPages(options),
    pages => {
      if (page) {
        return _.get(pages, [page], [])
      }

      let allEntities = []
      _.keys(pages).forEach(p => {
        allEntities = allEntities.concat(pages[p])
      })

      return allEntities
    }
  )
}
