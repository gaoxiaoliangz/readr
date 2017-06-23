import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat
} from 'graphql'
import { fromGlobalId } from 'graphql-relay'
import _ from 'lodash'
import { makeNodeConnectionField } from '../utils'
import { GQLPostConnection } from '../types/GQLPost'
import dataProvider from '../../models/dataProvider'
import { PostStatusType, PostVisibilityType, PostCategoryType } from '../types/GQLPost'
import { PostStatus, PostCategories, PostVisibility } from '../../api/enums'

interface ListPostsConfig {
  status?: PostStatus
  visibility?: PostVisibility
  category?: PostCategories
}

const listPosts = (config: ListPostsConfig = {}) => {
  let query = dataProvider.Post.find({})
  const { status, visibility, category } = config

  if (status) {
    query = query.where('status').equals(status)
  }

  if (visibility) {
    query = query.where('visibility').equals(visibility)
  }

  if (category) {
    query = query.where('category').equals(category)
  }

  return query.exec()
}

const postsField = makeNodeConnectionField({
  type: GQLPostConnection,
  extendedArgs: {
    status: {
      type: PostStatusType
    },
    visibility: {
      type: PostVisibilityType
    },
    category: {
      type: PostCategoryType
    },
  },
  listAllFn: async (upper, args, req) => {
    return listPosts(args)
  }
})

export default postsField
