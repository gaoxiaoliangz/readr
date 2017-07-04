import {
  fromGlobalId
} from 'graphql-relay'
import _ from 'lodash'
import dataProvider from '../../models/dataProvider'

interface ListBooksArgs {
  query?: string
  categories?: string[]
}
const listBooks = async (args: ListBooksArgs) => {
  const searchQuery = args.query
  let cateIds = []
  let query = dataProvider.Book.find({})
    .sort({
      created_at: -1
    })

  if (args.categories) {
    cateIds = args.categories.map(gqlId => {
      return fromGlobalId(gqlId).id
    })
  }

  let list = await query
    .populate('file authors categories')
    .exec()

  if (searchQuery) {
    list = list.filter(item => {
      return item['title'].indexOf(searchQuery) !== -1
    })
  }

  if (cateIds.length !== 0) {
    list = list.filter(item => {
      const itemCateIds = item['categories'].map(cat => cat._id.toString()) || []
      const diffResult = _.difference(cateIds, itemCateIds)
      if (diffResult.length === cateIds.length) {
        return false
      }
      return true
    })
  }

  return list
}

export default listBooks
