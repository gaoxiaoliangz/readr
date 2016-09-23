import { createSelector } from 'reselect'
import _ from 'lodash'
import { selectPaginatedEntities } from './common'

export const queryDoubanBooksSelector = query => createSelector(
  selectPaginatedEntities({
    entitiesName: 'doubanBooks',
    paginationName: 'doubanBooks',
    paginationQuery: query
  }),
  books => books
)

export const queryAuthorsSelector = query => selectPaginatedEntities({
  entitiesName: 'authors',
  paginationName: 'authors',
  paginationQuery: query
})

export const searchBooksSelector = query => selectPaginatedEntities({
  entitiesName: 'books',
  paginationName: 'books',
  paginationQuery: query
})

export const doubanBooksAsOptions = query => createSelector(
  queryDoubanBooksSelector(query),
  books => {
    return books.map(book => ({
      name: book.title,
      value: book.id,
      additional: {
        description: book.summary,
        cover: book.images.large,
        author: book.author.join(', ')
      }
    }))
  }
)

export const authorsAsOptions = query => createSelector(
  queryAuthorsSelector(query),
  items => {
    return items.map(item => ({
      name: item.name,
      value: item.id
    }))
  }
)

export const booksSearchAsOptions = query => createSelector(
  searchBooksSelector(query),
  items => {
    return items.map(item => ({
      name: item.title,
      value: item.id
    }))
  }
)

export const booksSelector = createSelector(
  selectPaginatedEntities({
    entitiesName: 'books',
    paginationName: 'books',
    paginationKey: 'default'
  }),
  books => books
)

export * from './common'
