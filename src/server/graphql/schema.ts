// tslint:disable:no-unused-variable
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLDeprecatedDirective,
  GraphQLFloat
} from 'graphql'
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId
} from 'graphql-relay'
// tslint:enable:no-unused-variable
import humps from 'humps'
import _ from 'lodash'
import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
import { GQLBookPageConnection, GQLAuthorConnection, GQLFileConnection, GQLBookInfoConnection, GQLBookInfo, GQLReadingProgress } from './gql-types'
import { nodeInterface, nodeField } from './gql-node'
import { makeNodeConnectionField } from './utils'
import resolveBookInfo from './resolvers/resolve-book-info'
import { setReadingProgressCore } from '../api/user'

const viewerField = {
  type: new GraphQLObjectType({
    name: 'User',
    fields: {
      id: globalIdField('User'),
      role: {
        type: GraphQLString
      },
      username: {
        type: GraphQLString
      },
      authors: makeNodeConnectionField({
        type: GQLAuthorConnection,
        listAllFn: () => dataProvider.Author.find({}).exec()
      }),
      files: makeNodeConnectionField({
        type: GQLFileConnection,
        listAllFn: () => dataProvider.File.find({}).exec()
      }),
      bookInfo: makeNodeConnectionField({
        type: GQLBookInfoConnection,
        listAllFn: () => dataProvider.Book.find({}).exec()
      }),
      bookPages: makeNodeConnectionField({
        type: GQLBookPageConnection,
        extendedArgs: {
          bookId: {
            type: new GraphQLNonNull(GraphQLString)
          },
          pageHeight: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        listAllFn: (parent, args) => resolveBookPages({
          id: args.bookId,
          pageHeight: args.pageHeight
        })
      }),
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

          if (!userId) {
            return Promise.reject(new Error('Sign-in required!'))
          }
          const query = humps.decamelizeKeys({ userId, bookId })

          return dataProvider.Progress.findOne(query).exec()
        }
      }
    },
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
    bookInfo: {
      type: GQLBookInfo,
      args: {
        dbID: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: async (parent, args) => {
        const result = await resolveBookInfo(args.dbID)
        return result
      }
    }
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
  mutateAndGetPayload: (args, req) => {
    const { user: { _id: userId } } = req
    return setReadingProgressCore({
      ...args,
      userId
    })
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
