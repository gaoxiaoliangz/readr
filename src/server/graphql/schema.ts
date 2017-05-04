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
import _ from 'lodash'
import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
import md5 from 'vendor/md5'
const debug = require('debug')('readr:gqlschema')

class User { }
class Author { }

const author = new Author

const bookPageTypeName = 'BookPage'

const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    let { type, id } = fromGlobalId(globalId)
    switch (type) {
      // we will use sequelize to resolve the id of its object
      case bookPageTypeName:
        // return id
        return null
      case 'Author':
        const result = await dataProvider.Author.utils.findById(id)
        return _.assign(author, result.toObject())
      default:
        debug('null node interface')
        return null
    }
  },
  (obj) => {
    // we will use sequelize to resolve the object tha timplements node
    // to its type.
    switch (obj.constructor) {
      case Author:
        // tslint:disable-next-line:no-use-before-declare
        return GQLAuthor
    
      default:
        return null
    }

    // if (obj instanceof Author) {
    //   // tslint:disable-next-line:no-use-before-declare
    //   return GQLAuthor
    // } else {
    //   return null
    // }
  }
)

////////////////////////////////////////////////////////////////////////////////////
//                                  types                                         //
////////////////////////////////////////////////////////////////////////////////////
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
  name: bookPageTypeName,
  interfaces: [nodeInterface],
  description: 'Computed bookpage',
  fields: {
    id: globalIdField(bookPageTypeName, (entity) => {
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
      type: GraphQLString,
      resolve(_author) {
        return _author.name
      }
    },
    description: {
      type: GraphQLString,
      resolve(_author) {
        return _author.description
      }
    }
  },
  interfaces: [nodeInterface]
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
