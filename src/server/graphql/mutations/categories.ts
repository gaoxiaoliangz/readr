import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'

export const AddCategoryMutation = mutationWithClientMutationId({
  name: 'AddCategory',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    slug: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    }
  },
  outputFields: {
    _id: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async (args, req) => {
    if (req.user.role !== 'admin') {
      return Promise.reject(new Error('Require admin permission!'))
    }
    return dataProvider.Category.utils.save({
      ...args
    }).then(res => {
      return res.toObject()
    })
  }
})
