import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

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
          },
          hash: {
            type: GraphQLString
          },
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
