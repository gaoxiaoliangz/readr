import { GraphQLObjectType } from 'graphql'
import {
  UpdateReadingProgressMutation,
  RemoveReadingProgressMutation,
  UpdateProfileMutation,
  ChangePasswordMutation
} from './user'
import { AddSlideMutation, UpdateSlideMutation } from './slides'
import { AddCategoryMutation, UpdateCategoryMutation, DelCategoryMutation } from './categories'
import { UpdateBookMutation, DelBookMutation } from './books'
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
    updateSlide: UpdateSlideMutation,
    addPost: AddPostMutation,
    updatePost: UpdatePostMutation,
    delPost: DelPostMutation,
    updateBook: UpdateBookMutation,
    delBook: DelBookMutation,
    updateCategory: UpdateCategoryMutation,
    delCategory: DelCategoryMutation
  }
})

export default Mutation
