import models from '../../models'

const books = {
  add(data) {
    return models.book.insert(data)
  }
}

export default books
