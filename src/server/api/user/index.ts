const Promise: any = require('bluebird')
const errors = require('../../errors')
const i18n = require('../../utils/i18n')
const models = require('../../models')
import utils from '../utils'
const readingProgress = require('./reading-progress')
const shelf = require('./shelf')

module.exports = {
  readingProgress,
  shelf,
  profile: {
    find(userId) {
      return models.user.findById(userId).list().then(res => {
        if (res.length === 0) {
          return utils.handleNotFound('user')
        }

        return res.map(utils.excludeFields(['password']))[0]
      })
    },
  }

  // getShelfBooks(data) {
  //   const match = utils.getIdMatch(data.options)

  //   return models.progress.find({ user_id: match._id }).listRaw().then(progressRes => {
  //     if (progressRes.length === 0) {
  //       // 书架为空
  //       return progressRes
  //     }

  //     return Promise
  //       .all(progressRes
  //         .map(res => {
  //           const bookId = res.book_id
  //           return models.book.findById(bookId).list().then(bookRes => {
  //             return bookRes[0]
  //           })
  //         })
  //       )
  //       .then(res => {
  //         // 将空的返回结果过滤
  //         return res.filter(res2 => {
  //           return Boolean(res2)
  //         })
  //       })
  //       .then(res => {
  //         // todo: filter results
  //         return res
  //       })
  //   })
  // }
}

