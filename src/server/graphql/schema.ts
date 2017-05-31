import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'
import {
  fromGlobalId,
  globalIdField
} from 'graphql-relay'
import _ from 'lodash'
import dataProvider from '../models/data-provider'
import { GQLAuthorConnection, GQLFileConnection, GQLBookConnection, GQLBook, GQLReadingProgress } from './types'
import { nodeInterface, nodeField } from './node'
import { makeNodeConnectionField } from './utils'
import { getReadingProgressCore } from '../api/user'
import bookPagesField from './fields/bookPagesField'
import api from '../api'
import Mutation from './mutations'

const viewerField = {
  type: new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: globalIdField('User'),
      role: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      displayName: {
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
  async resolve(obj, args, req) {
    const { user } = req
    const { email, display_name: displayName } = await api.users.find({ id: user._id }) as any

    return {
      ...user,
      id: user._id,
      email,
      displayName
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
        return api.books.find({ id, includeToc: true })
      }
    },
    books: makeNodeConnectionField({
      type: GQLBookConnection,
      listAllFn: () => {
        // tood: max
        return api.books.list({ includeToc: true, limit: 99999 }).then(data => data.list)
      }
    })
  }
})

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
