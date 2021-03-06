import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat
} from 'graphql'
import { fromGlobalId } from 'graphql-relay'
import _ from 'lodash'
import { makeNodeConnectionField } from '../utils'
import { GQLBookPageConnection } from '../types/GQLBookPage'
import { getReadingProgressCore } from '../../api/user'
import api from '../../api'

const bookPagesField = makeNodeConnectionField({
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
      description: 'format sectionId,hash'
    }
  },
  sliceStart: (list) => async (parent, args, req) => {
    const bookId = fromGlobalId(args.bookId).id
    const { user: { _id: userId } } = req
    const offset = args.offset || 0

    if (args.before || args.after) {
      return 0
    }

    if (args.fromLocation) {
      const loc = args.fromLocation.split(',')
      const sectionId = loc[0]
      const nodeId = loc[1]

      let result = list.filter(d => {
        return d.sectionId === sectionId
      })

      if (nodeId) {
        const hasNodeIdInNodes = nodes => {
          return nodes.some(e => {
            // attrs#id is the original key, tagId is renamed in graphql
            // because of some issue in apollo
            const hasNodeId = _.get(e, 'attrs.id', '') === nodeId
            if (e.children && !hasNodeId) {
              return hasNodeIdInNodes(e.children)
            }
            return hasNodeId
          })
        }

        result = result.filter(item => {
          return hasNodeIdInNodes(item.nodes)
        })
      }

      if (result.length === 0) {
        return Promise.reject(new Error('Location not found!'))
      }

      const pageNo = result[0].pageNo - 1
      return offset + pageNo
    }

    if (args.fromHistory) {
      const progress = (await getReadingProgressCore({ bookId, userId }) || {})
      const percentage = progress['percentage'] || 0
      const pageNo = Math.floor(list.length * percentage)
      return offset + pageNo
    }

    return offset
  },
  extendedFields: ({ sliceStart, connection }) => async (parent, args, req) => {
    const offset = args.offset || 0
    const bookId = fromGlobalId(args.bookId).id
    const { user: { _id: userId } } = req
    const progress = (await getReadingProgressCore({ bookId, userId }) || {})
    const percentage = progress['percentage'] || 0
    const base = {
      fromHistory: !args.fromLocation && req.user.role !== 'visitor' && args.fromHistory,
      fromLocation: args.fromLocation,
      lastProgress: percentage
    }

    if (args.before || args.after) {
      if (offset !== 0) {
        throw new Error('Offset not available when using cursor!')
      }

      return {
        ...base,
        offset: 0,
        startPage: _.get(connection, 'edges[0].node.pageNo', null)
      }
    }

    return {
      ...base,
      offset,
      startPage: sliceStart - offset + 1,
    }
  },
  listAllFn: async (parent, args, req) => {
    const id = fromGlobalId(args.bookId).id
    const book = await api.books.find({
      id,
      includePages: true,
      pageHeight: args.pageHeight,
      width: args.width,
      fontSize: args.fontSize,
      lineHeight: args.lineHeight
    })

    return book.pages
  }
})

export default bookPagesField
