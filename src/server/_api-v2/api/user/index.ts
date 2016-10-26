// import Promise from 'bluebird'
// const errors: any = require('../../errors')
// import i18n from '../../utils/i18n'
import models from '../../models'
import utils from '../utils'
import readingProgress from './reading-progress'
import shelf from './shelf'

export default {
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

