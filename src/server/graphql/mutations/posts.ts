import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'

export const AddPostMutation = mutationWithClientMutationId({
  name: 'AddPost',
  inputFields: {
    slug: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    tags: {
      type: new GraphQLList(GraphQLID)
    },
    markdown: {
      type: new GraphQLNonNull(GraphQLString)
    },
    visibility: {
      type: new GraphQLNonNull(GraphQLString)
    },
    status: {
      type: new GraphQLNonNull(GraphQLString)
    },
    image: {
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
    return dataProvider.Post.utils.save({
      ...args,
      author: req.user._id
    }).then(res => {
      return res.toObject()
    })
  }
})
