import pipeline from '../../../utils/pipeline'
import dataProvider from '../../models/data-provider'
import BPromise from 'bluebird'
import _ from 'lodash'
import {
  validateOptions,
  convert,
  handleResult,
  BookOptions,
  Book
} from './findBook'

interface ListBooksOptions extends BookOptions {
  page: number
}

const listBooks = (options: ListBooksOptions): BPromise<Book> => {
  const doQuery = (_options) => {
    return dataProvider.Book.utils
      .listWithOptions({
        page: options.page,
        populate: 'file authors',
        parser: (result) => {
          return handleResult({ result, options: _options })
        }
      })
  }

  const convert2 = (_options: ListBooksOptions) => {
    return {
      ..._options,
      page: Number(_options.page)
    }
  }

  const tasks = [
    validateOptions,
    convert,
    convert2,
    doQuery
  ]

  return pipeline(tasks, options)
}

export default listBooks
