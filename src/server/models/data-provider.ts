import mongoose from 'mongoose'
import Debug from 'debug'
import _ from 'lodash'
import getMongoDBUrl from '../helpers/getMongoDBUrl'
import { makeResult } from '../api/utils'
import * as schemas from './mg-schemas'

const LIMIT = 10

mongoose.Promise = global.Promise
mongoose.connect(getMongoDBUrl())
const debug = Debug('readr:data-provider')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  debug('db connection opened')
})

/**
 * add properties to both object and typing
 * @param originalObj 
 * @param objToMerge 
 */
const modifyObject = <T1, T2>(originalObj: T1, objToMerge: T2) => {
  _.forEach(objToMerge, (val, key) => {
    originalObj[key] = val
  })
  return originalObj as T1 & T2
}

const Author = mongoose.model('Author', schemas.authorSchema)

export const addUitlMethods = (Model: mongoose.Model<mongoose.Document>) => {
  return modifyObject(Model, {
    utils: {
      list: async (page = 1) => {
        const skip = (page - 1) * LIMIT
        const count = await Model.count({})

        return Model
          .find({})
          .skip(skip)
          .limit(LIMIT)
          .exec()
          .then(data => {
            return makeResult(data, {
              pagination: {
                current: page,
                all: Math.ceil(count / LIMIT)
              }
            })
          })
      },

      save: async (data) => {
        const model = new Model(data)

        return model.save().then(res => {
          return makeResult(res)
        })
      },

      updateById: async (id, data) => {
        return Model
          .update({ _id: id }, data, { runValidators: true })
          .exec()
          .then(_data => {
            return makeResult(_data)
          })
      },

      findById: async (id) => {
        const data = await Model.findById(id)
        return makeResult(data)
      },

      removeById: async (id) => {
        const data = await Model.findByIdAndRemove(id)
        return makeResult(data)
      }
    }
  })
}

export default {
  Author: addUitlMethods(Author)
}
