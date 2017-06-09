import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/dataProvider'

const basicCollectionAPI = makeBasicAPIMethods(dataProvider.Collection)

const collectionAPI = {
  ...basicCollectionAPI,
  ...{
    list(options) {
      return dataProvider.Collection.utils.list({
        offset: (Number(options.page) - 1) * 10,
        limit: 10,
        populate: 'items creator',
        parser: null
      })
    }
  }
}

export default collectionAPI
