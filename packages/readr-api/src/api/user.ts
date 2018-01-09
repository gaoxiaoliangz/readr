import _ from 'lodash'
import humps from 'humps'
import dataProvider from '../models/dataProvider'
import { sortByNewest } from './utils'

export function getReadingProgressCore({ bookId, userId }) {
  if (!userId) {
    return null
  }
  const query = humps.decamelizeKeys({ userId, bookId })

  return dataProvider.Progress.findOne(query).exec()
}

export function getReadingProgress(options) {
  const { bookId } = options
  const { user: { _id: userId } } = options.context
  return getReadingProgressCore({ bookId, userId })
}

export const removeReadingProgress = ({ bookId, userId }) => {
  const query = humps.decamelizeKeys({ userId, bookId })
  return dataProvider.Progress.findOne(query).remove().exec()
}

export const setReadingProgressCore = async ({ bookId, userId, percentage }) => {
  if (!userId) {
    return Promise.reject(new Error('Sign-in required!'))
  }
  const query = humps.decamelizeKeys({ userId, bookId })
  const progressResult = await dataProvider.Progress.findOne(query).exec()

  const object = { percentage }

  if (!progressResult) {
    return dataProvider.Progress.utils.save(_.assign({}, object, query)).then(data => data.toObject())
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
        .sort(sortByNewest())
        .map(progressDoc => {
          return dataProvider.Book.findById(progressDoc['book_id'])
            .populate('authors file')
            .exec()
            .then(bookDoc => {
              if (!bookDoc) {
                return null
              }
              return {
                ..._.omit(bookDoc.toObject(), ['file']),
                ..._.pick(progressDoc.toObject(), ['updated_at', 'created_at', '_id', 'percentage']),
                book_id: bookDoc._id
              }
            })
        })
      )
      .then(result => {
        return result.filter(item => {
          return !_.isEmpty(item)
        })
      })
  })
}

export const updateProfile = async (object, options) => {
  const { user: { _id: id } } = options.context
  const result = await dataProvider.User.utils.updateById(id, object)

  return result
}

export default {
  getReadingProgress,
  setReadingProgress,
  listShelfBooks
}
