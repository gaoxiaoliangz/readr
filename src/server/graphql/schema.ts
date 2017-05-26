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
  globalIdField,
  mutationWithClientMutationId,
} from 'graphql-relay'
import _ from 'lodash'
import dataProvider from '../models/data-provider'
import { GQLAuthorConnection, GQLFileConnection, GQLBookConnection, GQLBook, GQLReadingProgress } from './types'
import { nodeInterface, nodeField } from './node'
import { makeNodeConnectionField } from './utils'
import resolveBookInfo from './resolvers/resolveBook'
import { setReadingProgressCore, getReadingProgressCore } from '../api/user'
import bookPagesField from './fields/bookPagesField'
import api from '../api'

const viewerField = {
  type: new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: globalIdField('User'),
      role: {
        type: GraphQLString
      },
      username: {
        type: GraphQLString
      },
      bookPages: bookPagesField,
      readingProgress: {
        type: GQLReadingProgress,
        args: {
          bookId: {
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve(obj, args, req) {
          const { bookId } = args
          const { user: { _id: userId } } = req
          return getReadingProgressCore({ bookId, userId })
        }
      }
    }),
    interfaces: [nodeInterface]
  }),
  resolve(obj, args, req) {
    const { user } = req
    return {
      ...user,
      id: user._id
    }
  }
}

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: viewerField,
    authors: makeNodeConnectionField({
      type: GQLAuthorConnection,
      listAllFn: () => dataProvider.Author.find().exec()
    }),
    files: makeNodeConnectionField({
      type: GQLFileConnection,
      listAllFn: () => dataProvider.File.find({}).exec()
    }),
    book: {
      type: GQLBook,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: async (parent, args) => {
        const { id } = fromGlobalId(args.id)
        const result = await resolveBookInfo(id)
        return result
      }
    },
    books: makeNodeConnectionField({
      type: GQLBookConnection,
      listAllFn: () => {
        return api.books.list()
      }
    })
  }
})

const GQLUpdateReadingProgressMutation = mutationWithClientMutationId({
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: GQLUpdateReadingProgressMutation
  }
})

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
