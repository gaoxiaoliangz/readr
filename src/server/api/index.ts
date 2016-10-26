import Model from '../models/model'
import * as schemas from './schemas'
import _ from 'lodash'
import BasicApi from './basic-api'
import humps from 'humps'

// basic api start
export const author = new BasicApi(schemas.author)
export const collection = new BasicApi(schemas.collection)
export const book = new BasicApi(schemas.book)
export const tag = new BasicApi(schemas.tag)
export const user = new BasicApi(schemas.user)
// end of basic api

const bookModel = new Model(schemas.book)

// export function findBook(id) {
//   return bookModel.findById(id)
// }

export function listBooks(page?) {
  return bookModel.list({
    page,
    disablePagination: _.isNil(page),
    mapping: entity => _.omit(entity, 'content')
  })
}

const collectionModel = new Model(schemas.collection)

export function listCollection(page?) {
  return collectionModel.list({
    page,
    disablePagination: _.isNil(page),
    mapping: entity => {
      return _.assign({}, entity, {
        items: entity['items'].map(item => _.omit(item, 'content'))
      })
    }
  })
}

const progress = new Model(schemas.progress)

export function getReadingProgress(userId, bookId) {
  const query = humps.decamelizeKeys({ userId, bookId })

  return progress.list({ disablePagination: true, raw: true, query }).then(res => {
    if ((<any[]>res).length === 0) {
      return progress.outputEmpty({
        user_id: userId,
        book_id: bookId
      })
    }
    return res[0]
  })
}
