import config from './config'
import _ from 'lodash'
import generateBasicApi from '../utils/generate-basic-api'
import BasicApi from '../basic-api'
import models from '../../models'

const basicApi = _.mapValues(config, (val, key) => {
  return generateBasicApi(config[key])
})

const authors = new BasicApi(models.author)

export default {
  authors
}
