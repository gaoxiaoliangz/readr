'use strict'
const Promise = require('bluebird')
const errors = require('../../errors')
const i18n = require('../../utils/i18n')
const models = require('../../models')
// const utils = require('../utils')
const humps = require('humps')


module.exports = {
  find(userId, bookId) {
    const match = humps.decamelizeKeys({ userId, bookId })

    return models.progress.find(match).listRaw().then(res => {
      if (res.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound', 'progress')))
      }
      return res[0]
    })
  },

  update(userId, bookId, data) {
    const match = humps.decamelizeKeys({ userId, bookId })
    console.log(match)
    

    return models.progress.find(match).update(data, {
      upsert: true
    })
  },
}
