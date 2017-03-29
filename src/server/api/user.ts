// import Model from '../models/model'
// import * as schemas from '../data/schemas'
// import _ from 'lodash'
// import humps from 'humps'

// const progressModel = new Model(schemas.progress)



// export function setReadingProgress(userId, bookId, data) {
//   const query = humps.decamelizeKeys({ userId, bookId })

//   return progressModel.update(query, data, {
//     upsert: true
//   })
// }

import { makeBasicAPIMethods, makeResult } from './utils'
import dataProvider from '../models/data-provider'






function getReadingProgress(options) {
  const { user: { id: userId}, bookId } = options.context

  if (!userId) {
    return Promise.reject(new Error('wtf??? no user?'))
  }
  const query = humps.decamelizeKeys({ userId, bookId })

  return dataProvider.Progress.findOne(query).exec().then(doc => {
    const result = doc.toObject()
    return makeResult(result)
  })

  // return progressModel.list({ disablePagination: true, raw: true, query }).then(res => {
  //   if (res['length'] === 0) {
  //     return progressModel.outputEmpty({
  //       user_id: userId,
  //       book_id: bookId
  //     })
  //   }
  //   return res[0]
  // })
}

export default {
  getReadingProgress
}
