import dataProvider from '../../models/data-provider'
import { resolveContent } from '../../api/books'

const resolveBookInfo = async (id) => {
  const mainInfo = await dataProvider.Book
    .findById(id)
    .exec()
    .then(result => result.toObject())
  const content = await resolveContent({ id })
  return {
    ...mainInfo,
    toc: content.content.toc
  }
}

export default resolveBookInfo
