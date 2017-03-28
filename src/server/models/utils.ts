import { makeResult } from '../api/utils'
import { modifyObject } from '../../utils'
import mongoose from 'mongoose'

const LIMIT = 10

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
