import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
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
  GQLSlideConnection
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
        }
      },
      listAllFn: async (upper, args) => {
        const query = args.query
        const allResults = await api.books.list({ includeToc: true, limit: 99999 }).then(data => data.list)
        return query
          ? allResults.filter((r) => {
            return r.title.indexOf(query) !== -1
          })
          : allResults
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
