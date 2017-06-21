import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat
} from 'graphql'
import md5 from 'md5'
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
    id: {
      type: GraphQLString,
      resolve(bookPage) {
        return md5(JSON.stringify(bookPage))
      },
      description: 'md5 of bookPage, apollo needs this to normalize data'
    },
    elements: {
      type: new GraphQLList(GQLHTMLElementObject)
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
          sectionId: {
            type: GraphQLString
          }
        }
      })
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
    startPercentage: {
      type: GraphQLFloat
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
