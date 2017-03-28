import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'

const basicTagAPI = makeBasicAPIMethods(dataProvider.Tag)

export default basicTagAPI
