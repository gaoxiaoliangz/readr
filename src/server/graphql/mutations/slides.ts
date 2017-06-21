import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'

export const AddSlideMutation = mutationWithClientMutationId({
  name: 'AddSlide',
  inputFields: {
    url: {
      type: new GraphQLNonNull(GraphQLString)
    },
    picture: {
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
    return dataProvider.Slide.utils.save({
      ...args,
      editor: req.user._id
    }).then(res => {
      return res.toObject()
    })
  }
})
