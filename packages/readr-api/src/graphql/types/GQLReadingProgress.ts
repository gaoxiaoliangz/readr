import { GraphQLFloat, GraphQLObjectType } from 'graphql'
import { globalIdField } from 'graphql-relay'

const GQLReadingProgress = new GraphQLObjectType({
  name: 'ReadingProgress',
  fields: () => ({
    id: globalIdField('ReadingProgress'),
    percentage: {
      type: GraphQLFloat
    }
  })
})

export default GQLReadingProgress
