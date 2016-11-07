import Model from '../models/model'
import paginate from '../models/paginate'
import * as schemas from '../data/schemas'
import _ from 'lodash'
import BasicApi from './basic-api'
import humps from 'humps'
import { ROLES } from '../../isomorphic/constants'
import utils from '../utils'
import { notFoundError } from '../helpers'
import { readLoggedEpub, readFile } from './file'

export * from './file'
export * from './books'
export * from './user'

// basic api start
export const author = new BasicApi(schemas.author)
export const collection = new BasicApi(schemas.collection)
export const book = new BasicApi(schemas.book)
export const tag = new BasicApi(schemas.tag)
export const user = new BasicApi(schemas.user)
// end of basic api


// 实例化 Model
const bookModel = new Model(schemas.book)
const collectionModel = new Model(schemas.collection)

const userModel = new Model(schemas.user)

// api
export function findUser(id) {
  return userModel.findOne(id).then(entity => {
    return _.omit(entity, ['password'])
  })
}

export function addUser(userInfo) {
  return userModel.add(_.assign({}, userInfo, {
    role: ROLES.USER
  }))
}

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
