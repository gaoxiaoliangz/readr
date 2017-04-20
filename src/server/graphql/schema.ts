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
import { parseReq } from '../api/http-decorator'
import dataProvider from '../models/data-provider'

class User {}

const GQLHTMLNodeObject = new GraphQLObjectType({
  name: 'HTMLNodeObject',
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
      type: new GraphQLList(GQLHTMLNodeObject)
    }
  })
})

const GQLBookPage = new GraphQLObjectType({
  name: 'BookPage',
  description: 'Computed bookpage',
  fields: {
    nodes: {
      type: new GraphQLList(GQLHTMLNodeObject)
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
      })
    }
  }
})

const GQLBookPageCollection = new GraphQLObjectType({
  name: 'BookPageCollection',
  fields: {
    nodes: {
      type: new GraphQLList(GQLBookPage)
    }
  }
})

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
      type: new GraphQLObjectType({
        name: 'user',
        fields: {
          bookPages: {
            type: GQLBookPageCollection,
            args: {
              id: {
                type: GraphQLString
              },
              pageNo: {
                type: GraphQLInt
              },
              pageHeight: {
                type: GraphQLInt
              }
            },
            resolve(obj, args, req) {
              // const { id: bookId, pageNo, pageHeight } = options
              console.log(args);

              return resolveBookPages(args)
            }
          },
          abc: {
            type: GraphQLString
          }
        }
      }),
      resolve(obj, args, req) {
        // return new User()
        return {
          abc: 123,
          bookPages: resolveBookPages(args)
        }
      }
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
