import { createSelector } from 'reselect'
import _ from 'lodash'
import { pagedEntities } from './common'
import * as common from './common'

export const doubanBooks = key => createSelector(
  pagedEntities({
    entitiesName: 'doubanBooks',
    paginationName: 'doubanBooks',
    paginationKey: key
  }),
  books => books
)

export const authors = key => pagedEntities({
  entitiesName: 'authors',
  paginationName: 'authors',
  paginationKey: key
})

export const books = (page?, key?) => pagedEntities({
  entitiesName: 'books',
  paginationName: 'books',
  paginationKey: key,
  page
})

export const doubanBooksAsOptions = key => createSelector(
  doubanBooks(key),
  selectedBooks => {
    return selectedBooks.map(book => ({
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

export const authorsAsOptions = key => createSelector(
  authors(key),
  items => {
    return items.map(item => ({
      name: item.name,
      value: item.id
    }))
  }
)

export const booksAsOptions = (key?) => createSelector(
  books(key),
  items => {
    return items.map(item => ({
      name: item.title,
      value: item.id
    }))
  }
)

export const users = pagedEntities({
  entitiesName: 'users',
  paginationName: 'users',
})

export * from './common'
export { common }
