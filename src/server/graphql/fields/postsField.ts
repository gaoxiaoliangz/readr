import {
  GraphQLID,
  GraphQLString
} from 'graphql'
import { fromGlobalId } from 'graphql-relay'
import _ from 'lodash'
import { makeNodeConnectionField } from '../utils'
import { GQLPostConnection, GQLPost } from '../types/GQLPost'
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

export const postsField = makeNodeConnectionField({
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

export const postField: GQLField = {
  type: GQLPost,
  args: {
    slug: {
      type: GraphQLString
    },
    id: {
      type: GraphQLID
    }
  },
  resolve: (source, context) => {
    let query
    const { slug, id } = context
    if (!slug && !id) {
      return Promise.reject(new Error('slug 或 id 至少提供其一！'))
    }
    if (slug && id) {
      return Promise.reject(new Error('slug 和 id 不能同时提供！'))
    }
    if (id) {
      const _id = fromGlobalId(id).id
      query = dataProvider.Post.findById(id)
    }
    if (slug) {
      query = dataProvider.Post.findOne({
        slug
      })
    }
    return query
      .exec()
      .then(res => res.toObject())
  }
}

export default postsField