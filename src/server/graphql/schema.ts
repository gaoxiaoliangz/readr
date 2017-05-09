import * as mgSchemas from '../models/mg-schemas'
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
import _ from 'lodash'
import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
import makeUtils from './utils'
import md5 from 'vendor/md5'
const debug = require('debug')('readr:gqlschema')

const bookPageTypeName = 'BookPage'

const mapGlobalIdToNodeObject = async globalId => {
  const { type, id } = fromGlobalId(globalId)

  if (!dataProvider[type]) {
    return Promise.reject(new Error('type not defined in dataProvider'))
  }

  const result = await dataProvider[type].utils.findById(id)
  return _.assign({}, result.toObject(), {
    __typeName__: type
  })
}

const mapNodeObjectToGQLType = nodeObject => {
  const { __typeName__: type } = nodeObject
  // tslint:disable-next-line:no-use-before-declare
  return _.find(GQLTypes, GQLType => {
    return GQLType.name === type
  })
}

const { nodeInterface, nodeField } = nodeDefinitions(mapGlobalIdToNodeObject, mapNodeObjectToGQLType)

// const { nodeInterface, nodeField } = nodeDefinitions(
//   async (globalId) => {
//     let { type, id } = fromGlobalId(globalId)
//     switch (type) {
//       case 'Author':
//         const result = await dataProvider.Author.utils.findById(id)
//         return _.assign(author, result.toObject())
//       case 'File':
//         const result2 = await dataProvider.File.utils.findById(id)
//         return _.assign(file, result2.toObject())
//       default:
//         debug('type not defined')
//         return null
//     }
//   },
//   (obj) => {
//     switch (obj.constructor) {
//       case Author:
//         return GQLAuthor

//       case File:
//         return GQLFile

//       default:
//         debug('constructor not defined')
//         return null
//     }
//   }
// )

const utils = makeUtils({ nodeInterface })

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

const { nodeType: GQLAuthor, connectionType: GQLAuthorConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Author',
  mgFields: mgSchemas.authorFields,
  description: 'Book author, normally it\'s fetched from douban.'
})

const { nodeType: GQLTag, connectionType: GQLTagConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Tag',
  description: 'Book tag.',
  mgFields: mgSchemas.tagFields
})

const { nodeType: GQLFile, connectionType: GQLFileConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'File',
  description: 'File ...',
  mgFields: mgSchemas.fileFields
})

const GQLTypes = [GQLAuthor, GQLFile]
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
