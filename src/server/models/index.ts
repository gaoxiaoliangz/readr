import schemas from './schemas'
import Model from './model'

const models: {
  [modelName: string]: {
    find: any
  }
} = {}

Object.keys(schemas).forEach(key => {
  models[key] = new Model(schemas[key])
})

export default models as any
