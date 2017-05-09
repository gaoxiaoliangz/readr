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
import md5 from 'vendor/md5'
import { nodeInterface } from '../gql-node'
import { extendedConnectionDefinitions } from '../utils'

const GQLHTMLElementObject = new GraphQLObjectType({
  name: 'HTMLElementObject',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('HTMLElementObject', (entity) => {
      return md5(JSON.stringify(entity))
    }),
    tag: {
      type: GraphQLString
    },
    type: {
      type: GraphQLInt
    },
    text: {
      type: GraphQLString
    },
    attrs: {
      type: new GraphQLObjectType({
        name: 'HTMLAttrObject',
        fields: {
          id: {
            type: GraphQLString
          },
          href: {
            type: GraphQLString
          },
          src: {
            type: GraphQLString
          }
        }
      })
    },
    children: {
      type: new GraphQLList(GQLHTMLElementObject)
    }
  })
})

const GQLBookPage = new GraphQLObjectType({
  name: 'BookPage',
  interfaces: [nodeInterface],
  description: 'Computed bookpage',
  fields: {
    id: globalIdField('BookPage', (entity) => {
      return md5(JSON.stringify(entity))
    }),
    elements: {
      type: new GraphQLList(GQLHTMLElementObject),
      resolve(bookPage) {
        return bookPage.elements
      }
    },
    meta: {
      type: new GraphQLObjectType({
        name: 'BookPageMeta',
        fields: {
          pageNo: {
            type: GraphQLInt
          },
          offset: {
            type: GraphQLInt
          }
        }
      }),
      resolve(bookPage) {
        return bookPage.meta
      }
    }
  }
})

export const { connectionType: GQLBookPageConnection } =
  extendedConnectionDefinitions({ name: 'BookPage', nodeType: GQLBookPage })

export default GQLBookPage
