import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { extendedConnectionDefinitions } from '../utils'

const GQLHTMLElementObject = new GraphQLObjectType({
  name: 'HTMLElementObject',
  fields: () => ({
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
          tagId: {
            type: GraphQLString,
            resolve: obj => obj.id
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

export const GQLBookPage = new GraphQLObjectType({
  name: 'BookPage',
  description: 'Computed bookpage',
  fields: {
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
          },
          section: {
            type: GraphQLString
          }
        }
      }),
      resolve(bookPage) {
        return bookPage.meta
      }
    }
  }
})

export const { connectionType: GQLBookPageConnection } = extendedConnectionDefinitions({
  name: 'BookPage',
  nodeType: GQLBookPage,
  connectionFields: {
    startPage: {
      type: GraphQLInt
    },
    offset: {
      type: GraphQLInt
    },
    fromHistory: {
      type: GraphQLBoolean
    },
    fromLocation: {
      type: GraphQLString
    }
  }
})

export default GQLBookPage
