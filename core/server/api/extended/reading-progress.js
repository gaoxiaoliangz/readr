'use strict'
const Promise = require('bluebird')
const errors = require('../../errors')
const i18n = require('../../utils/i18n')
const models = require('../../models')


const readingProgress = {
  _publicMethods: [
    {
      name: 'find',
      url: '/users/:user_id/books/:book_id/progress',
      httpMethod: 'get'
    }, {
      name: 'edit',
      url: '/users/:user_id/books/:book_id/progress',
      httpMethod: 'post'
    }
  ],

  find(data) {
    const userId = data.options.user_id
    const bookId = data.options.book_id

    return models.progress.find({ userId, bookId }).listRaw().then(res => {
      if (res.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound', 'progress')))
      }
      return res[0]
    })
  },

  edit(data) {
    const userId = data.options.user_id
    const bookId = data.options.book_id

    return models.progress.find({ userId, bookId }).update(data.object, {
      upsert: true
    })
  }
}

module.exports = readingProgress
