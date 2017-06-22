import pipeline from '../../../utils/pipeline'
import dataProvider from '../../models/dataProvider'
import _ from 'lodash'
import {
  validateOptions as validateRenderOptions,
  convert as convertRenderOptions,
  handleResult,
  BookOptions,
  Book
} from './findBook'
import { queryBoolean } from '../utils'
import { QueryResult } from '../../models/queryResult'
import queryResult from '../../models/queryResult'

const PAGE_LIMIT = 10

interface ListBooksOptions extends BookOptions {
  page?: number
  limit?: number
  providedBy?: string
  published?: boolean
}

const listBooks = (options: ListBooksOptions = {}): Promise<QueryResult<Book>> => {
  const doQuery = async (_options: ListBooksOptions) => {
    let query = dataProvider.Book.find({})
    const limit = _options.limit || PAGE_LIMIT
    const offset = ((options.page || 1) - 1) * limit
    const totalCount = await dataProvider.Book.count({})

    const _handleResult = data => {
      const _data = data.map((result) => {
        return handleResult({ result, options: _options })
      }) as any[]

      return Promise.all(_data).then(finalData => {
        return queryResult({
          limit,
          offset,
          list: finalData,
          totalCount
        })
      })
    }

    if (_options.providedBy) {
      query = query.where('provided_by').equals(_options.providedBy)
    } else {
      // by default unpublished is not listed when provider is not present
      query = query.find({
        $or: [
          { published: true },
          { published: null }
        ]
      })
    }

    if (!_.isUndefined(_options.published)) {
      query = query.where('published').equals(_options.published)
    }

    return query
      .skip(offset)
      .limit(limit)
      .populate('file authors')
      .exec()
      .then(_handleResult)
  }

  const validateOptionsLogic = (_options: ListBooksOptions) => {
    if (!_options.providedBy && _options.published === false) {
      return Promise.reject(new Error('不能列出未指定所有者的私有书籍！'))
    }
    return _options
  }

  const convert = (_options: ListBooksOptions) => {
    return {
      ..._options,
      page: Number(_options.page),
      limit: Number(_options.limit),
      published: queryBoolean(_options.published)
    }
  }

  const tasks = [
    validateRenderOptions,
    convertRenderOptions,
    convert,
    validateOptionsLogic,
    doQuery
  ]

  return pipeline(options)(tasks)
}

export default listBooks
