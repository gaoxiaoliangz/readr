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

import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
const debug = require('debug')('readr:gqlschema')

class User { }

const bookPageTypeName = 'BookPage'

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    let { type, id } = fromGlobalId(globalId)
    switch (type) {
      // we will use sequelize to resolve the id of its object
      case bookPageTypeName:
        // return id
        return null
      case 'Author':
        return dataProvider.Author.findById(id)
      default:
        debug('null node interface')
        return null
    }
  },
  (obj) => {
    // we will use sequelize to resolve the object tha timplements node
    // to its type.
    switch (obj.type) {
      default:
        debug('null node field')
        // return null
        return GQLAuthor
    }
  }
)

////////////////////////////////////////////////////////////////////////////////////
//                                  types                                         //
////////////////////////////////////////////////////////////////////////////////////
const GQLHTMLElementObject = new GraphQLObjectType({
  name: 'HTMLElementObject',
  fields: () => ({
    tag: {
      type: GraphQLString
    },
    type: {
      type: GraphQLInt
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
  name: bookPageTypeName,
  description: 'Computed bookpage',
  fields: {
    id: globalIdField(bookPageTypeName),
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
  },
  interfaces: [nodeInterface]
})

const { connectionType: GQLBookPageConnection } =
  connectionDefinitions({ name: 'BookPage', nodeType: GQLBookPage })

const GQLAuthor = new GraphQLObjectType({
  name: 'Author',
  description: 'Book author, normally it\'s fetched from douban.',
  fields: {
    // _id: {
    //   type: GraphQLString
    // },
    id: globalIdField('Author'),
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
})

const { connectionType: GQLAuthorConnection } =
  connectionDefinitions({ name: 'Author', nodeType: GQLAuthor })

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

////////////////////////////////////////////////////////////////////////////////////
//                                  fields                                        //
////////////////////////////////////////////////////////////////////////////////////
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
