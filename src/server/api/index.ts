import Model from '../models/model'
import paginate from '../models/paginate'
import * as schemas from './schemas'
import _ from 'lodash'
import BasicApi from './basic-api'
import humps from 'humps'
import { ROLES } from '../../isomorphic/constants'
import utils from '../utils'

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
const progressModel = new Model(schemas.progress)
const userModel = new Model(schemas.user)

// api
// export function findBook(id) {
//   return bookModel.findById(id)
// }

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

export function listBooks(page?) {
  return bookModel.list({
    page,
    disablePagination: _.isNil(page),
    mapping: entity => _.omit(entity, 'content')
  })
}

export function listShelfBooks(userId, page?) {
  return progressModel.listRaw({ query: { user_id: userId } }).then(results => {
    if (results.length === 0) {
      return results
    }

    return Promise
      .all(results
        .sort(utils.sortByDate())
        .map(result => {
          return bookModel.findOne(result.book_id).then(res => {
            return res
          }, error => {
            // 如果错误不是 404 也输出空的 entity
            return bookModel.outputEmpty(result.book_id)
          })
        })
      )
      .then(res => {
        return paginate(res.map(entity => _.omit(entity, ['content'])), {
          page
        }) as Object
      })
  })
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

export function getReadingProgress(userId, bookId) {
  const query = humps.decamelizeKeys({ userId, bookId })

  return progressModel.list({ disablePagination: true, raw: true, query }).then(res => {
    if ((<any[]>res).length === 0) {
      return progressModel.outputEmpty({
        user_id: userId,
        book_id: bookId
      })
    }
    return res[0]
  })
}

export function setReadingProgress(userId, bookId, data) {
  const query = humps.decamelizeKeys({ userId, bookId })

  return progressModel.update(query, data, {
    upsert: true
  })
}
