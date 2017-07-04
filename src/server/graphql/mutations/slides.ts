import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay'
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
    },
    published: {
      type: new GraphQLNonNull(GraphQLBoolean)
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

export const UpdateSlideMutation = mutationWithClientMutationId({
  name: 'UpdateSlide',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    url: {
      type: GraphQLString
    },
    picture: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    published: {
      type: GraphQLBoolean
    }
  },
  outputFields: {
    ok: {
      type: GraphQLInt
    },
    n: {
      type: GraphQLInt
    },
    nModified: {
      type: GraphQLInt
    }
  },
  mutateAndGetPayload: async (args, req) => {
    if (req.user.role !== 'admin') {
      return Promise.reject(new Error('Require admin permission!'))
    }
    const id = fromGlobalId(args.id).id
    return dataProvider.Slide.utils.updateById(id, args)
  }
})
