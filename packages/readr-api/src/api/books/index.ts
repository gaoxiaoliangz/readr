import { makeBasicAPIMethods } from '../utils'
import dataProvider from '../../models/dataProvider'
import addBook from './addBook'
import findBook from './findBook'
import listBooks from './listBooks'

const basicBookAPI = makeBasicAPIMethods(dataProvider.Book)

export default {
  ...basicBookAPI,
  ...{
    add: addBook,
    find: findBook,
    list: listBooks
  }
}
