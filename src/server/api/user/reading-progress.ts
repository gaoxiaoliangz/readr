const Promise: any = require('bluebird')
const errors: any = require('../../errors')
import i18n from '../../utils/i18n'
const models = require('../../models')
import humps from 'humps'

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

    return models.progress.find(match).update(data, {
      upsert: true
    })
  },
}
