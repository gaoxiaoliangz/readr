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
import humps from 'humps'
import { setReadingProgressCore, removeReadingProgress } from '../../api/user'
import api from '../../api'

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

export const GQLUpdateProfileMutation = mutationWithClientMutationId({
  name: 'UpdateProfile',
  inputFields: {
    displayName: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
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
    const { user: { _id: id } } = req
    const { displayName: display_name, username, email } = args || {} as any
    // todo: seems to have a bug
    // const object = humps.decamelizeKeys(args)
    const result = await api.users.update({
      display_name,
      username,
      email
    }, {
      id
    })
    return result
  }
})
