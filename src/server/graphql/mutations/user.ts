import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat
} from 'graphql'
import {
  fromGlobalId,
  mutationWithClientMutationId,
} from 'graphql-relay'
import { setReadingProgressCore, removeReadingProgress } from '../../api/user'

export const GQLUpdateReadingProgressMutation = mutationWithClientMutationId({
  name: 'UpdateReadingProgress',
  inputFields: {
    bookId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    percentage: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
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
    const { user: { _id: userId } } = req
    const bookId = fromGlobalId(args.bookId).id
    const result = await setReadingProgressCore({
      ...args,
      userId,
      bookId
    })
    return result
  }
})

export const GQLRemoveReadingProgressMutation = mutationWithClientMutationId({
  name: 'RemoveReadingProgress',
  inputFields: {
    bookId: {
      type: new GraphQLNonNull(GraphQLID)
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
    const { user: { _id: userId } } = req
    const bookId = fromGlobalId(args.bookId).id
    const result = await removeReadingProgress({
      userId,
      bookId
    })
    return result
  }
})
