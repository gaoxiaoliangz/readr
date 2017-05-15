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
import { setReadingProgressCore, getReadingProgressCore } from '../api/user'

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
            type: new GraphQLNonNull(GraphQLID)
          },
          pageHeight: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          width: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          fontSize: {
            type: new GraphQLNonNull(GraphQLFloat)
          },
          lineHeight: {
            type: new GraphQLNonNull(GraphQLFloat)
          },
          fromHistory: {
            type: GraphQLBoolean
          }
        },
        listAllFn: async (parent, args, req) => {
          const bookId = fromGlobalId(args.bookId).id
          const { user: { _id: userId } } = req

          const data = await resolveBookPages({
            id: bookId,
            pageHeight: args.pageHeight,
            width: args.width,
            fontSize: args.fontSize,
            lineHeight: args.lineHeight
          })

          if (!args.fromHistory) {
            return data
          }

          const progress = (await getReadingProgressCore({ bookId, userId }) || {})
          const percentage = progress['percentage'] || 0
          const pageNo = Math.floor(data.length * percentage) + 1
          return {
            data,
            meta: {
              offset: pageNo
            }
          }
        }
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
    bookInfo: {
      type: GQLBookInfo,
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
