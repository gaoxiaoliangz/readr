import { makeBasicAPIMethods } from '../utils'
import dataProvider from '../../models/data-provider'
import addBook from './addBook'
import findBook from './findBook'

const basicBookAPI = makeBasicAPIMethods(dataProvider.Book)

// export function listBooks(options) {
//   return dataProvider.Book.utils
//     .listWithOptions({
//       page: options.page,
//       populate: 'file authors',
//       parser: parseBookResult
//     })
// }

export default {
  ...basicBookAPI,
  ...{
    add: addBook,
    find: findBook,
    // list: listBooks
  }
}
