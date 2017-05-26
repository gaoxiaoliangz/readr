import mongoose from 'mongoose'
import { modifyObject } from '../../utils'
import queryResult from './queryResult'

type ListConfig = {
  offset?: number
  limit?: number
  populate?: string
  parser?: any
}

export const addUitlMethods = (Model: mongoose.Model<mongoose.Document>) => {
  const utils = {
    list: async (config?: ListConfig) => {
      const defaultConfig = {
        offset: 0,
        limit: Infinity
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
      return model.save()
    },

    updateById: async (id, data) => {
      return Model
        .update({ _id: id }, data, { runValidators: true })
        .exec()
    },

    findById: async (id) => {
      return Model.findById(id)
    },

    removeById: async (id) => {
      return Model.findByIdAndRemove(id)
    }
  }

  return modifyObject(Model, {
    utils
  })
}
