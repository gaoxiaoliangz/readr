// import * as schemas from '../data/schemas'
// import _ from 'lodash'
// import BasicApi from './basic-api'

// export * from './file'
// export * from './books'
// export * from './user'
// export * from './users'
// export * from './collections'

// export const author = new BasicApi(schemas.author)
// export const collection = new BasicApi(schemas.collection)
// export const book = new BasicApi(schemas.book)
// export const tag = new BasicApi(schemas.tag)
// export const user = new BasicApi(schemas.user)
import authors from './authors'
import tags from './tags'
import collections from './collections'
import users from './users'

export default {
  authors,
  collections,
  tags,
  users
}
