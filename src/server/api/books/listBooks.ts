import pipeline from '../../../utils/pipeline'
import dataProvider from '../../models/data-provider'
import _ from 'lodash'
import {
  validateOptions,
  convert,
  handleResult,
  BookOptions,
  Book
} from './findBook'
import { QueryResult } from '../../models/queryResult'

interface ListBooksOptions extends BookOptions {
  page?: number
}

const listBooks = (options: ListBooksOptions = {}): Promise<QueryResult<Book>> => {
  const doQuery = (_options) => {
    return dataProvider.Book.utils
      .list({
        offset: (options.page - 1) * 10,
        limit: 10,
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

  return pipeline(options)(tasks)
}

export default listBooks
