import _ from 'lodash'
import humps from 'humps'
import dataProvider from '../models/data-provider'

export function getReadingProgress(options) {
  const { bookId } = options
  const { user: { _id: userId } } = options.context

  if (!userId) {
    return Promise.reject(new Error('wtf??? no user?'))
  }
  const query = humps.decamelizeKeys({ userId, bookId })

  return dataProvider.Progress.findOne(query).exec()
}

export const setReadingProgressCore = async ({ bookId, userId, percentage }) => {
  const query = humps.decamelizeKeys({ userId, bookId })
  const progressResult = await dataProvider.Progress.findOne(query).exec()

  const object = { percentage }

  if (!progressResult) {
    return dataProvider.Progress.utils.save(_.assign({}, object, query))
  } else {
    const progressId = progressResult._id
    return dataProvider.Progress.utils.updateById(progressId, object)
  }
}

export async function setReadingProgress(object, options) {
  const { bookId } = options
  const { user: { _id: userId } } = options.context
  return setReadingProgressCore({ bookId, userId, percentage: object.percentage })
}

export function listShelfBooks(options) {
  const { user: { _id: user_id } } = options.context
  return dataProvider.Progress.find({ user_id }).exec().then(docs => {
    return Promise
      .all(docs
        .map(doc => {
          return dataProvider.Book.findById(doc._id).exec().then(bookDoc => {
            // todo
            return bookDoc
          })
        })
      )
  })
  //   return progressModel.listRaw({ query: { user_id: userId } }).then(results => {
  //     if (results.length === 0) {
  //       return results
  //     }

  //     return Promise
  //       .all(results
  //         .sort(utils.sortByDate())
  //         .map(result => {
  //           return bookModel.findOne(result.book_id, true).then(res => {
  //             return res
  //           }, error => {
  //             // 如果错误不是 404 也输出空的 entity
  //             return bookModel.outputEmpty(result.book_id)
  //           })
  //         })
  //       )
  //       .then(res => {
  //         return paginate(res.map(entity => _.omit(entity, ['content'])), {
  //           page
  //         }) as Object
  //       })
  //   })
}

export default {
  getReadingProgress,
  setReadingProgress,
  listShelfBooks
}
