import Model from '../models-v3/model'
import * as schemas from './schemas'
import _ from 'lodash'

const book = new Model(schemas.book)

export function findBook(id) {
  return book.findById(id)
}

export function listBooks(page?) {
  return book.list({
    page,
    disablePagination: typeof page === 'undefined',
    mapping: entity => _.omit(entity, 'content')
  })
}

const collection = new Model(schemas.collection)

export function listCollection(page?) {
  return collection.list({
    page,
    disablePagination: typeof page === 'undefined',
    mapping: entity => {
      return _.assign({}, entity, {
        items: entity['items'].map(item => _.omit(item, 'content'))
      })
    }
  })
}
