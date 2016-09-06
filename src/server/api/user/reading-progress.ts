import Promise from 'bluebird'
import errors from '../../errors'
import i18n from '../../utils/i18n'
import models from '../../models'
import humps from 'humps'

export default {
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
