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
import dataProvider from '../models/dataProvider'
import {
  GQLAuthorConnection,
  GQLFileConnection,
  GQLBookConnection,
  GQLBook,
  GQLReadingProgress,
  GQLReadingHistoryEntryConnection,
  GQLSlideConnection
} from './types'
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
      bio: {
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
      books: makeNodeConnectionField({
        type: GQLBookConnection,
        extendedArgs: {
          query: {
            type: GraphQLString
          }
        },
        listAllFn: async (upper, args, req) => {
          const userId = _.get(req, ['user', '_id'], '')
          if (!userId) {
            return Promise.reject(new Error('需要登录！'))
          }
          const query = args.query
          // tood: max
          const allResults = await api.books
            .list({
              includeToc: true,
              limit: 99999,
              providedBy: userId
            })
            .then(data => data.list)
          return query
            ? allResults.filter((r) => {
              return r.title.indexOf(query) !== -1
            })
            : allResults
        }
      }),
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
      },
      readingHistory: makeNodeConnectionField({
        type: GQLReadingHistoryEntryConnection,
        listAllFn: async (upper, args, req) => {
          const { user: { _id } } = req
          return api.user.listShelfBooks({ context: { user: { _id } } })
        }
      })
    }),
    interfaces: [nodeInterface]
  }),
  async resolve(obj, args, req) {
    const { user } = req
    if (!user._id) {
      return {
        role: 'visitor'
      }
    }
    const result = await api.users.find({ id: user._id })
    const { display_name: displayName, ...rest } = result.toObject() as any
    return {
      ...rest,
      id: user._id,
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
    slides: makeNodeConnectionField({
      type: GQLSlideConnection,
      listAllFn: () => dataProvider.Slide.find().exec()
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
      extendedArgs: {
        query: {
          type: GraphQLString
        }
      },
      listAllFn: async (upper, args) => {
        const query = args.query
        // tood: max
        const allResults = await api.books.list({ includeToc: true, limit: 99999 }).then(data => data.list)
        return query
          ? allResults.filter((r) => {
            return r.title.indexOf(query) !== -1
          })
          : allResults
      }
    })
  }
})

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
