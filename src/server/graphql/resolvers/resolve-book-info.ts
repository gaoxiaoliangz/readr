import dataProvider from '../../models/data-provider'
import booksAPI from '../../api/books'

const resolveBookInfo = async (id) => {
  const mainInfo = await dataProvider.Book
    .findById(id)
    .exec()
    .then(result => result.toObject())
  const { toc } = await booksAPI.find({ id })

  return {
    ...mainInfo,
    toc
  }
}

export default resolveBookInfo
