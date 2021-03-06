import {
  GraphQLID,
  GraphQLString
} from 'graphql'
import { fromGlobalId } from 'graphql-relay'
import _ from 'lodash'
import { makeNodeConnectionField } from '../utils'
import { GQLPostConnection, GQLPost } from '../types/GQLPost'
import dataProvider from '../../models/dataProvider'
import { GQLPostStatus, GQLPostVisibility, GQLPostCategory } from '../types/GQLPost'
import { PostStatus, PostCategories, PostVisibility } from '../../api/enums'
import { checkPermissionsOf } from '../../middleware/requirePermissionsOf'
import errors from '../../errors'

interface ListPostsConfig {
  status?: PostStatus
  visibility?: PostVisibility
  category?: PostCategories
}

const listPosts = (config: ListPostsConfig = {}) => {
  let query = dataProvider.Post.find({}).sort({
    created_at: -1
  })
  const { status, visibility, category } = config

  if (status) {
    query = query.where('status').equals(status)
  }

  if (visibility) {
    query = query.find({
      visibility
    })
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
      type: GQLPostStatus
    },
    visibility: {
      type: GQLPostVisibility
    },
    category: {
      type: GQLPostCategory
    },
  },
  listAllFn: async (upper, args, req) => {
    const permissionError = checkPermissionsOf(req, 'admin')
    let status = args.status
    let visibility = args.visibility
    if (permissionError) {
      if (args.status && args.status !== PostStatus.Published) {
        return Promise.reject(new errors.NoPermissionError('非管理员权限只能查看已发布 Post！'))
      }
      if (args.visibility && args.visibility !== PostVisibility.Public) {
        return Promise.reject(new errors.NoPermissionError('非管理员权限只能查看公开的 Post！'))
      }
      if (!status) {
        status = PostStatus.Published
      }
      if (!visibility) {
        visibility = PostVisibility.Public
      }
    }
    return listPosts({
      ...args,
      status,
      visibility
    })
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
      query = dataProvider.Post.findById(_id)
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
