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
import { PAGE_LIMIT } from '../../../constants'

interface ListBooksOptions extends BookOptions {
  page?: number
  limit?: number
}

const listBooks = (options: ListBooksOptions = {}): Promise<QueryResult<Book>> => {
  const doQuery = (_options: ListBooksOptions) => {
    const limit = _options.limit || PAGE_LIMIT

    return dataProvider.Book.utils
      .list({
        offset: ((options.page || 1) - 1) * limit,
        limit,
        populate: 'file authors',
        parser: (result) => {
          return handleResult({ result, options: _options })
        }
      })
  }

  const convert2 = (_options: ListBooksOptions) => {
    return {
      ..._options,
      page: Number(_options.page),
      limit: Number(_options.limit)
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
