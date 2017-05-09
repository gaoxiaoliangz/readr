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
  GraphQLDeprecatedDirective
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
  toGlobalId,
} from 'graphql-relay'
// tslint:enable:no-unused-variable
import _ from 'lodash'
import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
import { GQLBookPageConnection, GQLAuthorConnection, GQLFileConnection, GQLBookInfoConnection } from './gql-types'
import { nodeInterface, nodeField } from './gql-node'
import { makeNodeConnectionField } from './utils'

const viewerField = {
  type: new GraphQLObjectType({
    name: 'User',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
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
    },
    interfaces: [nodeInterface]
  }),
  resolve(obj, args, req) {
    return {}
  }
}

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: viewerField
  }
})

export default new GraphQLSchema({
  query: Query,
  // mutation: Mutation
})
