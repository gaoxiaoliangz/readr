import config from './config'
import _ from 'lodash'
import generateBasicApi from '../utils/generate-basic-api'

const basicApi = _.mapValues(config, (val, key) => {
  return generateBasicApi(config[key])
})

export default basicApi
