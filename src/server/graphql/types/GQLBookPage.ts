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

const GQLHTMLNodeObject = new GraphQLObjectType({
  name: 'HTMLNodeObject',
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
          nodeId: {
            type: GraphQLString,
            resolve: obj => {
              return obj.id
            }
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
      type: new GraphQLList(GQLHTMLNodeObject)
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
    nodes: {
      type: new GraphQLList(GQLHTMLNodeObject)
    },
    pageNo: {
      type: GraphQLInt
    },
    offset: {
      type: GraphQLInt
    },
    sectionId: {
      type: GraphQLString
    },
    sectionIds: {
      type: new GraphQLList(GraphQLString)
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
    lastProgress: {
      type: GraphQLFloat
    },
    offset: {
      type: GraphQLInt,
      deprecationReason: 'not seems to be useful'
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
