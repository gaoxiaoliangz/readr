import Model from '../models-v3/model'
import * as schemas from './schemas'
import _ from 'lodash'
import BasicApi from './basic-api'

// basic api start
export const author = new BasicApi(schemas.author)
export const collection = new BasicApi(schemas.collection)
// todo: excludedMethods: ['add']
export const book = new BasicApi(schemas.book)
export const tag = new BasicApi(schemas.tag)
// todo: excludedMethods: ['add', 'find', 'update', 'remove']
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
