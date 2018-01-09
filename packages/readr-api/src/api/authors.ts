import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/dataProvider'

const basicAuthorAPI = makeBasicAPIMethods(dataProvider.Author)

export default basicAuthorAPI
