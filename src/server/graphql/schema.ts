import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
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
import Mutation from './mutations'
import userField from './fields/userField'
import listBooks from './listAllFns/listBooks'
import bookPagesField from './fields/bookPagesField'

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
        .sort({
          created_at: -1
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
        return dataProvider.Book.findById(id)
          .populate('file authors categories')
          .exec()
          .then(res => res.toObject())
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
        },
        isFeatured: {
          type: GraphQLBoolean
        }
      },
      listAllFn: (upper, args) => listBooks(args)
    }),
    bookPages: bookPagesField,
    posts: postsField,
    post: postField
  }
})

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
