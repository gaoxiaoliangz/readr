import pinyin from 'pinyin'
import _ from 'lodash'
import dataProvider from '../../models/dataProvider'
import { searchBook } from '../doubanAPI'
import validator from 'validator'

const debug = require('debug')('readr:api:books:helpers')

export async function getAuthorId(authorName, description?) {
  return dataProvider.Author.findOne({ name: authorName }).exec().then(async doc => {
    if (doc) {
      return doc._id
    } else {
      const slug = pinyin(
        authorName, {
          style: pinyin.STYLE_NORMAL
        })
        .map(seg => seg[0])
        // isAlphanumeric checks args lenght to determine locale
        // if more than one there will be a problem, and an error
        // will be thrown
        .filter(str => validator.isAlphanumeric(str))
        .join('')

      const result = await dataProvider.Author.utils.save({
        name: authorName,
        slug,
        description
      })
      return result._id
    }
  })
}

export async function getBookMetaByTitle(title: string) {
  let _book
  try {
    _book = await searchBook(title)
  } catch (error) {
    debug(error)
  }
  
  const book = _.get(_book, 'json.books[0]')
  return {
    title: _.get(book, 'title', title),
    cover: _.get(book, ['images', 'large'], ''),
    description: _.get(book, 'summary', ''),
    authorInfo: _.get(book, 'author_intro', ''),
  }
}
