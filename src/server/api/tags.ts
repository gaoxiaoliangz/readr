import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/dataProvider'

const basicTagAPI = makeBasicAPIMethods(dataProvider.Tag)

export default basicTagAPI
