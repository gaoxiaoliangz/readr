const config = {
  authors: {
    model: 'author',
    url: '/authors',
    excludedMethods: [],
    privateMethods: []
  },

  collections: {
    model: 'collection',
    url: '/collections'
  },

  books: {
    model: 'book',
    url: '/books'
  }
}

module.exports = config
