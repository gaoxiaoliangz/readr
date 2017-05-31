import { GraphQLObjectType } from 'graphql'

import {
  GQLUpdateReadingProgressMutation,
  GQLRemoveReadingProgressMutation,
  GQLUpdateProfileMutation
} from './user'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: GQLUpdateReadingProgressMutation,
    removeReadingProgress: GQLRemoveReadingProgressMutation,
    updateProfile: GQLUpdateProfileMutation
  }
})

export default Mutation
