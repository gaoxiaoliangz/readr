import models from '../../models'
import humps from 'humps'

export default {
  find(userId, bookId) {
    const match = humps.decamelizeKeys({ userId, bookId })

    return models.progress.find(match).listRaw().then(res => {
      if (res.length === 0) {
        return models.progress.outputEmpty({
          user_id: userId,
          book_id: bookId
        })
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
