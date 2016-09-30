import { Schema, arrayOf, normalize, unionOf } from 'normalizr'

const book = new Schema('books', {
  idAttribute: 'id'
})

const author = new Schema('authors', {
  idAttribute: 'id'
})

const collection = new Schema('bookCollections', {
  idAttribute: 'id'
})

const profile = new Schema('profiles', {
  idAttribute: 'id'
})

const user = new Schema('users', {
  idAttribute: 'id'
})

const doubanBook = new Schema('doubanBooks', {
  idAttribute: 'id'
})

const bookProgress = new Schema('books', {
  idAttribute: 'bookId'
})

const matchedBooks = new Schema('books', {
  idAttribute: 'bookId'
})

export default {
  BOOK: book,
  BOOK_PROGRESS: bookProgress,
  BOOK_ARRAY: arrayOf(book),
  DOUBAN_BOOK_SEARCH_RESULTS: {books: arrayOf(doubanBook)},
  USER_ARRAY: arrayOf(user),
  MATCHED_BOOK_ARRAY: arrayOf(matchedBooks),
  COLLECTION: collection,
  COLLECTION_ARRAY: arrayOf(collection),
  PROFILE: profile,
  AUTHOR: author,
  AUTHOR_ARRAY: arrayOf(author)
}
