import Model from '../models/model'
import * as schemas from '../data/schemas'
import _ from 'lodash'
import humps from 'humps'

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
