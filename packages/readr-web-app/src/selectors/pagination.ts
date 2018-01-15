import schemas from '../schemas'
import { pagedEntities } from './utils'
import _ from 'lodash'

export const bookList = pagedEntities({
  schema: schemas.BOOK_ARRAY,
  paginationName: 'books'
})

export const shelf = pagedEntities({
  schema: schemas.SHELF_BOOK_ARRAY,
  paginationName: 'bookShelves'
})

export const userList = pagedEntities({
  schema: schemas.USER_ARRAY,
  paginationName: 'users'
})

// old
// export const doubanBooks = key => createSelector(
//   pagedEntities({
//     entitiesName: 'doubanBooks',
//     paginationName: 'doubanBooks',
//     paginationKey: key
//   }),
//   books => books
// )

// export const doubanBooksAsOptions = key => createSelector(
//   doubanBooks(key),
//   selectedBooks => {
//     return selectedBooks.map(book => ({
//       name: book.title,
//       value: book.id,
//       additional: {
//         description: book.summary,
//         cover: book.images.large,
//         author: book.author.join(', ')
//       }
//     }))
//   }
// )

// export const authorsAsOptions = key => createSelector(
//   authors(key),
//   items => {
//     return items.map(item => ({
//       name: item.name,
//       value: item.id
//     }))
//   }
// )

// export const booksAsOptions = (key?) => createSelector(
//   books(key),
//   items => {
//     return items.map(item => ({
//       name: item.title,
//       value: item.id
//     }))
//   }
// )
