import { GraphQLObjectType } from 'graphql'

import {
  UpdateReadingProgressMutation,
  RemoveReadingProgressMutation,
  UpdateProfileMutation,
  ChangePasswordMutation
} from './user'
import { AddSlideMutation } from './slides'
import { AddCategoryMutation } from './categories'
import { AddPostMutation, UpdatePostMutation, DelPostMutation } from './posts'

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateReadingProgress: UpdateReadingProgressMutation,
    removeReadingProgress: RemoveReadingProgressMutation,
    updateProfile: UpdateProfileMutation,
    changePassword: ChangePasswordMutation,
    addCategory: AddCategoryMutation,
    addSlide: AddSlideMutation,
    addPost: AddPostMutation,
    updatePost: UpdatePostMutation,
    delPost: DelPostMutation
  }
})

export default Mutation
