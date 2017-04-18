import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
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

import dataProvider from '../models/data-provider'

const GQLAuthor = new GraphQLObjectType({
  name: 'Author',
  description: 'Book author, normally it\'s fetched from douban.',
  fields: {
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
})

const GQLTag = new GraphQLObjectType({
  name: 'Tag',
  description: 'Book tag.',
  fields: {
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
})

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    viewer: {
      type: GraphQLString,
      resolve: () => 'just a fucking user',
    },
    author: {
      type: GQLAuthor,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(obj, { id }, req) {
        return dataProvider.Author.findById(id)
      }
    },
    tag: {
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
    // node: nodeField,
  },
})

export default new GraphQLSchema({
  query: Root,
  // mutation: Mutation,
})
