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
import _ from 'lodash'
import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
import { GQLBookPageConnection, GQLAuthorConnection, GQLFileConnection, GQLBookInfoConnection, GQLBookInfo, GQLReadingProgress } from './gql-types'
import { nodeInterface, nodeField } from './gql-node'
import { makeNodeConnectionField } from './utils'
import resolveBookInfo from './resolvers/resolve-book-info'
import { setReadingProgressCore, getReadingProgressCore } from '../api/user'

// const makeList = (list) => {
//   if (list instanceof Promise) {
//     return list.then(result => {
//       return {
//         list: <any[]>result
//       }
//     })
//   }
//   return {
//     list: <any[]>list
//   }
// }

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
        listAllFn: () => dataProvider.Author.find().exec()
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
          },
          fromLocation: {
            type: GraphQLString,
            description: 'format sectionName,hash'
          }
        },
        sliceStart: (list) => async (parent, args, req) => {
          const bookId = fromGlobalId(args.bookId).id
          const { user: { _id: userId } } = req
          const offset = args.offset || 0

          if (args.before || args.after) {
            return 0
          }

          if (args.fromHistory) {
            const progress = (await getReadingProgressCore({ bookId, userId }) || {})
            const percentage = progress['percentage'] || 0
            const pageNo = Math.floor(list.length * percentage) + 1
            return offset + pageNo
          }

          if (args.fromLocation) {
            const loc = args.fromLocation.split(',')
            const sectionName = loc[0]
            const tagId = loc[1]

            let result = list.filter(d => {
              return d.meta.section === sectionName
            })

            if (tagId) {
              const hasTagIdInElements = elements => {
                return elements.some(e => {
                  // attrs#id is the original key, tagId is renamed in graphql
                  // because of some issue in apollo
                  const hasTagId = _.get(e, 'attrs.id', '') === tagId
                  if (e.children && !hasTagId) {
                    return hasTagIdInElements(e.children)
                  }
                  return hasTagId
                })
              }

              result = result.filter(r => {
                return hasTagIdInElements(r.elements)
              })
            }

            if (result.length === 0) {
              return Promise.reject(new Error('Location not found!'))
            }

            const pageNo = result[0].meta.pageNo - 1
            return offset + pageNo
          }
          return offset
        },
        extendedFields: ({ sliceStart, connection }) => (parent, args, req) => {
          const offset = args.offset || 0

          if (args.before || args.after) {
            if (offset !== 0) {
              throw new Error('Offset not available when using cursor!')
            }

            return {
              offset: 0,
              startPage: _.get(connection, 'edges[0].node.meta.pageNo', null)
            }
          }

          return {
            offset,
            startPage: sliceStart - offset + 1
          }
        },
        listAllFn: async (parent, args, req) => {
          const bookId = fromGlobalId(args.bookId).id

          return resolveBookPages({
            id: bookId,
            pageHeight: args.pageHeight,
            width: args.width,
            fontSize: args.fontSize,
            lineHeight: args.lineHeight
          })
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
