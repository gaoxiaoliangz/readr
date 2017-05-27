import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const GQLTocItem = new GraphQLObjectType({
  name: 'TocItem',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    sectionId: {
      type: GraphQLString
    },
    playOrder: {
      type: GraphQLString
    },
    hash: {
      type: GraphQLString
    },
    children: {
      type: new GraphQLList(GQLTocItem)
    }
  })
})

export default GQLTocItem
