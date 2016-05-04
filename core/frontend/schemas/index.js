import { Schema, arrayOf, normalize, unionOf } from 'normalizr'

const book = new Schema('books', {
  idAttribute: 'id'
})

const doubanBook = new Schema('doubanBooks', {
  idAttribute: 'id'
})

const bookProgress = new Schema('books', {
  idAttribute: 'bookId'
})

export const Schemas = {
  BOOK: book,
  BOOK_PROGRESS: bookProgress,
  BOOK_ARRAY: arrayOf(book),
  DOUBAN_BOOK_SEARCH_RESULTS: {books: arrayOf(doubanBook)}
}
