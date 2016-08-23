import models from '../../models'
import _ from 'lodash'

export default {
  list(userId) {
    return models.progress.find({ user_id: userId }).listRaw().then(results => {
      if (results.length === 0) {
        return results
      }

      return Promise.all(
        results.map(result => {
          return models.book.findById(result.book_id).list().then(res => {
            if (_.isEmpty(res)) {
              return models.book.outputEmpty(result.book_id)
            }

            return res[0]
          })
        })
      )
    })
  },
}
