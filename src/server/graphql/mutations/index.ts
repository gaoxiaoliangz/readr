import { GraphQLObjectType } from 'graphql'

import {
  UpdateReadingProgressMutation,
  RemoveReadingProgressMutation,
  UpdateProfileMutation
} from './user'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: UpdateReadingProgressMutation,
    removeReadingProgress: RemoveReadingProgressMutation,
    updateProfile: UpdateProfileMutation
  }
})

export default Mutation
