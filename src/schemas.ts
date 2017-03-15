import { schema } from 'normalizr'

const author = new schema.Entity('authors', {}, {
  idAttribute: 'id'
})

const book = new schema.Entity('books',
  {
    authors: [author]
  },
  { idAttribute: 'id' }
)

const bookContent = new schema.Entity('bookContents', {}, {
  idAttribute: 'id'
})

const collection = new schema.Entity('bookCollections', {
  items: [book]
}, {
  idAttribute: 'id'
})

const profile = new schema.Entity('profiles', {}, {
  idAttribute: 'id'
})

const user = new schema.Entity('users', {}, {
  idAttribute: 'id'
})

const doubanBook = new schema.Entity('doubanBooks', {}, {
  idAttribute: 'id'
})

const shelfBook = new schema.Entity('shelfBooks', {}, {
  idAttribute: 'id'
})

const bookProgress = new schema.Entity('bookProgress', {}, {
  idAttribute: 'bookId'
})

const matchedBooks = new schema.Entity('books', {}, {
  idAttribute: 'bookId'
})

export default {
  BOOK: book,
  BOOK_CONTENT: bookContent,
  BOOK_PROGRESS: bookProgress,
  BOOK_ARRAY: [book],
  DOUBAN_BOOK_SEARCH_RESULTS: { books: [doubanBook] },
  USER_ARRAY: [user],
  MATCHED_BOOK_ARRAY: [matchedBooks],
  COLLECTION: collection,
  COLLECTION_ARRAY: [collection],
  PROFILE: profile,
  AUTHOR: author,
  AUTHOR_ARRAY: [author],
  SHELF_BOOK_ARRAY: [shelfBook]
}
