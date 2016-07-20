'use strict'
const Promise = require('bluebird')
const errors = require('../../errors')
const i18n = require('../../utils/i18n')
const models = require('../../models')
const utils = require('../utils')
const readingProgress = require('./reading-progress')

module.exports = {
  readingProgress
  // _publicMethods: [
  //   {
  //     name: 'getReadingProgress',
  //     url: '/users/:user_id/books/:book_id/progress',
  //     httpMethod: 'get'
  //   }, {
  //     name: 'updateReadingProgress',
  //     url: '/users/:user_id/books/:book_id/progress',
  //     httpMethod: 'post'
  //   }, {
  //     name: 'getProfile',
  //     url: '/users/:_id/profile',
  //     httpMethod: 'get'
  //   }, {
  //     name: 'getShelfBooks',
  //     url: '/users/:_id/shelf',
  //     httpMethod: 'get',
  //     mapDataToApi(data) {
  //       return utils.getIdMatch(data.options)._id
  //     },
  //   }
  // ],

  // getProfile(data) {
  //   const match = utils.getIdMatch(data.options)

  //   return models.user.find(match).list().then(res => {
  //     if (res.length === 0) {
  //       return utils.handleNotFound('user')
  //     }

  //     return res.map(utils.excludeFields(['password']))[0]
  //   })
  // },

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

