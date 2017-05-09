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
import { GQLBookPageConnection, GQLAuthor, GQLTag, GQLAuthorConnection, GQLFileConnection } from './gql-types'
import { nodeInterface, nodeField } from './gql-node'

const bookPagesField = {
  type: GQLBookPageConnection,
  args: {
    ...connectionArgs,
    ...{
      bookId: {
        type: new GraphQLNonNull(GraphQLString)
      },
      pageHeight: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    }
  } as GeneralObject,
  resolve: async (obj, args) => {
    const list = await resolveBookPages({
      id: args.bookId,
      pageHeight: args.pageHeight
    })
    return connectionFromArray(list, args)
  }
}

const authorField = {
  type: GQLAuthor,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(obj, { id }, req) {
    return dataProvider.Author.findById(id)
  }
}

const tagField = {
  type: GQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(obj, { id }, req) {
    return dataProvider.Tag.findById(id)
  }
}

const viewerField = {
  type: new GraphQLObjectType({
    name: 'User',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      authors: {
        type: GQLAuthorConnection,
        args: connectionArgs,
        async resolve(parent, args) {
          const list = await dataProvider.Author.find({}).exec()
          return connectionFromArray(list, args)
        }
      },
      files: {
        type: GQLFileConnection,
        args: connectionArgs,
        async resolve(parent, args) {
          const list = await dataProvider.File.find({}).exec()
          return connectionFromArray(list, args)
        }
      }
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
    viewer: viewerField,
    author: authorField,
    tag: tagField,
    bookPages: bookPagesField
  }
})

export default new GraphQLSchema({
  query: Query,
  // mutation: Mutation,
})
