import _ from 'lodash'
import mongoose from 'mongoose'
import modifyObject from '../utils/modifyObject'
import queryResult from './queryResult'

type ListConfig = {
  offset?: number
  limit?: number
  populate?: string
  parser?: any
}

function handleValidationError(error) {
  if (error.name === 'ValidationError' && error.errors) {
    const errAll = new Error(_.map(error.errors, (err: Error) => {
      return err.message
    }).join('. '))
    return Promise.reject(errAll)
  }
  return Promise.reject(error)
}

export const addUitlMethods = (Model: mongoose.Model<mongoose.Document>) => {
  const utils = {
    list: async (config?: ListConfig) => {
      const defaultConfig = {
        offset: 0,
        limit: 9999999999
      }
      const { offset, limit, populate, parser } = {
        ...defaultConfig,
        ...config
      } as ListConfig

      const totalCount = await Model.count({})

      let query = Model
        .find({})
        .skip(offset)
        .limit(limit)

      if (populate) {
        query = query.populate(populate)
      }

      const makeResult = (list) => queryResult({
        limit,
        offset,
        list,
        totalCount
      })

      return query.exec().then(data => {
        let _data = data
        if (parser) {
          _data = data.map(parser) as any[]

          return Promise.all(_data).then(finalData => {
            return makeResult(finalData)
          })
        }

        return Promise.resolve(makeResult(_data))
      })
    },

    save: async (data) => {
      const model = new Model(data)
      return model.save().catch(handleValidationError)
    },

    updateById: async (id, data) => {
      const omitUndefined = () => {
        const _data = {} as any
        Object.keys(data).forEach(key => {
          if (typeof data[key] !== 'undefined') {
            _data[key] = data[key]
          }
        })
        return _data
      }

      return Model
        .update({ _id: id }, omitUndefined(), { runValidators: true })
        .exec()
        .catch(handleValidationError)
    },

    findById: async (id) => {
      return Model.findById(id)
    },

    removeById: async (id) => {
      return Model.findByIdAndRemove(id).catch(handleValidationError)
    }
  }

  return modifyObject(Model, {
    utils
  })
}
