import { GraphQLObjectType } from 'graphql'

import {
  UpdateReadingProgressMutation,
  RemoveReadingProgressMutation,
  UpdateProfileMutation,
  ChangePasswordMutation
} from './user'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: UpdateReadingProgressMutation,
    removeReadingProgress: RemoveReadingProgressMutation,
    updateProfile: UpdateProfileMutation,
    changePassword: ChangePasswordMutation
  }
})

export default Mutation
