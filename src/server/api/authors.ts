import _ from 'lodash'
import { makeResult } from './utils'
import dataProvider from '../models/data-provider'
// import * as schemas from '../models/mg-schema'

const debug = require('debug')('readr:api:authors')
const LIMIT = 10

export async function listAuthors(options) {
  let page = 1
  if (options.page) {
    page = options.page
  }

  return dataProvider.Author.utils.list(page)
}

export async function addAuthors(object, options) {
  return dataProvider.Author.utils.save(object)
}

export async function delAuthor(options) {
  const { id } = options
  return dataProvider.Author.utils.removeById(id)
}

// todo: 404 handle
export async function findAuthor(options) {
  const { id } = options
  return dataProvider.Author.utils.findById(id)
}

export async function updateAuthors(object, options) {
  const { id } = options

  return dataProvider.Author.utils.updateById(id, object)
}
