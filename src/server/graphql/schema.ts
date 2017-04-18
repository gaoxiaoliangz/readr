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

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    viewer: {
      type: GraphQLString,
      resolve: () => 'just a fucking user',
    },
    author: {
      type: new GraphQLObjectType({
        name: 'Author',
        fields: {
          name: {
            type: GraphQLString
          }
        }
      }),
      resolve: (...args) => {
        const hhh = args
        // return dataProvider.Author.findById()
        return {
          name: 'hhhhhh'
        }
      }
    }
    // node: nodeField,
  },
})

export default new GraphQLSchema({
  query: Root,
  // mutation: Mutation,
})
