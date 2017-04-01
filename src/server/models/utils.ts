import { makeResult } from '../api/utils'
import { modifyObject } from '../../utils'
import mongoose from 'mongoose'

const LIMIT = 10

export const addUitlMethods = (Model: mongoose.Model<mongoose.Document>) => {
  const utils = {
    list: async (page = 1) => {
      return utils.listWithOptions()
    },

    listWithOptions: async ({ page, populate, parser } = { page: 1, populate: undefined, parser: undefined }) => {
      const skip = (page - 1) * LIMIT
      const count = await Model.count({})

      let query = Model
        .find({})
        .skip(skip)
        .limit(LIMIT)

      if (populate) {
        query = query.populate(populate)
      }

      return query.exec().then(data => {
        let _data = data
        if (parser) {
          _data = data.map(parser) as any[]
        }

        return Promise.resolve(makeResult(_data, {
          pagination: {
            current: page,
            all: Math.ceil(count / LIMIT)
          }
        }))
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
