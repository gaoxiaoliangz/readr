import Model from '../models-v3/model'
import * as schemas from './schemas'

const book = new Model(schemas.book)

export function listBooks(match) {
  return book.list(match)
}

const collection = new Model(schemas.collection)

export function listCollection(match) {
  return collection.list(match)
}
