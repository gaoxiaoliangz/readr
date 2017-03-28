import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'

const basicAuthorAPI = makeBasicAPIMethods(dataProvider.Author)

export default basicAuthorAPI
