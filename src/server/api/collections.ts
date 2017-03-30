import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'

const basicCollectionAPI = makeBasicAPIMethods(dataProvider.Collection)

const collectionAPI = {
  ...basicCollectionAPI,
  ...{
    list(options) {
      return dataProvider.Collection.utils.listWithOptions({
        page: options.page,
        populate: 'items creator',
        parser: null
      })
    }
  }
}

export default collectionAPI
