import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import {
  globalIdField
} from 'graphql-relay'
import _ from 'lodash'

import {
  GQLBookConnection,
  GQLReadingProgress,
  GQLReadingHistoryEntryConnection
} from '../types'
import { nodeInterface } from '../node'
import { makeNodeConnectionField } from '../utils'
import { getReadingProgressCore } from '../../api/user'
import bookPagesField from '../fields/bookPagesField'
import api from '../../api'
import listBooks from '../listAllFns/listBooks'

const userField = {
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
          return listBooks(args)
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
          const result = await api.user.listShelfBooks({ context: { user: { _id } } })
          return result
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

export default userField
