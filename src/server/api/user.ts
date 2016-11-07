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

const progressModel = new Model(schemas.progress)

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
