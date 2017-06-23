import { GraphQLObjectType } from 'graphql'

import {
  UpdateReadingProgressMutation,
  RemoveReadingProgressMutation,
  UpdateProfileMutation,
  ChangePasswordMutation
} from './user'
import { AddSlideMutation } from './slides'
import { AddPostMutation, UpdatePostMutation } from './posts'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: UpdateReadingProgressMutation,
    removeReadingProgress: RemoveReadingProgressMutation,
    updateProfile: UpdateProfileMutation,
    changePassword: ChangePasswordMutation,
    addSlide: AddSlideMutation,
    addPost: AddPostMutation,
    updatePost: UpdatePostMutation
  }
})

export default Mutation
