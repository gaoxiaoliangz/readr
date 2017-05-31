import { GraphQLObjectType } from 'graphql'

import { GQLUpdateReadingProgressMutation, GQLRemoveReadingProgressMutation } from './user'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: GQLUpdateReadingProgressMutation,
    removeReadingProgress: GQLRemoveReadingProgressMutation
  }
})

export default Mutation
