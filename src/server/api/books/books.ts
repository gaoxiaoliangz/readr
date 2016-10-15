import models from '../../models'
import BasicApi from '../basic-api'

const books = {
  add(data) {
    return models.book.insert(data)
  },

  find(match: string, options) {
    const bookApi = new BasicApi(models.book)
    return bookApi.find(match, options).then(result => {
      if (result.content) {
        delete result.content.html
      }
      return result
    })
  }
}

export default books
