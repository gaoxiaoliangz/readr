import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList
} from 'graphql'
import {
  fromGlobalId
} from 'graphql-relay'
import _ from 'lodash'
import dataProvider from '../models/dataProvider'
import {
  GQLAuthorConnection,
  GQLFileConnection,
  GQLBookConnection,
  GQLBook,
  GQLSlideConnection,
  GQLCategoryConnection
} from './types'
import { nodeField } from './node'
import { makeNodeConnectionField } from './utils'
import postsField, { postField } from './fields/postsField'
import api from '../api'
import Mutation from './mutations'
import userField from './fields/userField'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: userField,
    authors: makeNodeConnectionField({
      type: GQLAuthorConnection,
      listAllFn: () => dataProvider.Author.find().exec()
    }),
    categories: makeNodeConnectionField({
      type: GQLCategoryConnection,
      listAllFn: () => dataProvider.Category.find().exec()
    }),
    slides: makeNodeConnectionField({
      type: GQLSlideConnection,
      listAllFn: () => dataProvider.Slide
        .find({
          published: true
        })
        .exec()
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
        },
        categories: {
          type: new GraphQLList(GraphQLID)
        }
      },
      listAllFn: async (upper, args) => {
        const searchQuery = args.query
        let cateIds = []
        let query = dataProvider.Book.find({})
          .sort({
            created_at: -1
          })

        if (args.categories) {
          cateIds = args.categories.map(gqlId => {
            return fromGlobalId(gqlId).id
          })
        }

        let list = await query
          .populate('file authors categories')
          .exec()

        if (searchQuery) {
          list = list.filter(item => {
            return item['title'].indexOf(searchQuery) !== -1
          })
        }

        if (cateIds.length !== 0) {
          list = list.filter(item => {
            const itemCateIds = item['categories'].map(cat => cat._id.toString()) || []
            const diffResult = _.difference(cateIds, itemCateIds)
            if (diffResult.length === cateIds.length) {
              return false
            }
            return true
          })
        }

        return list
      }
    }),
    posts: postsField,
    post: postField
  }
})

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
