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

const GQLTocChapter = new GraphQLObjectType({
  name: 'TocChapter',
  fields: () => ({
    src: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    playOrder: {
      type: GraphQLString
    },
    srcObject: {
      type: new GraphQLObjectType({
        name: 'TocChapterSrcObject',
        fields: () => ({
          name: {
            type: GraphQLString
          },
          ext: {
            type: GraphQLString
          },
          prefix: {
            type: GraphQLString
          },
          url: {
            type: GraphQLString
          }
        })
      })
    },
    children: {
      type: new GraphQLList(GQLTocChapter)
    }
  })
})

const GQLBookToc = new GraphQLList(GQLTocChapter)

export default GQLBookToc
