import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'
import { GQLPostVisibility, GQLPostStatus, GQLPostCategory } from '../types/GQLPost'
import { checkPermissionsOf } from '../../middleware/requirePermissionsOf'

const postInputFields = {
  slug: {
    type: new GraphQLNonNull(GraphQLString)
  },
  title: {
    type: new GraphQLNonNull(GraphQLString)
  },
  description: {
    type: GraphQLString
  },
  tags: {
    type: new GraphQLList(GraphQLID)
  },
  markdown: {
    type: new GraphQLNonNull(GraphQLString)
  },
  visibility: {
    type: new GraphQLNonNull(GQLPostVisibility)
  },
  status: {
    type: new GraphQLNonNull(GQLPostStatus)
  },
  category: {
    type: new GraphQLNonNull(GQLPostCategory)
  },
  image: {
    type: GraphQLString
  }
}

export const AddPostMutation = mutationWithClientMutationId({
  name: 'AddPost',
  inputFields: postInputFields,
  outputFields: {
    _id: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async (args, req) => {
    const error = checkPermissionsOf(req, 'admin')
    if (error) {
      return Promise.reject(error)
    }
    return dataProvider.Post.utils.save({
      ...args,
      author: req.user._id
    }).then(res => {
      return res.toObject()
    })
  }
})

export const UpdatePostMutation = mutationWithClientMutationId({
  name: 'UpdatePost',
  inputFields: {
    ...postInputFields,
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  outputFields: {
    ok: {
      type: GraphQLInt
    },
    n: {
      type: GraphQLInt
    },
    nModified: {
      type: GraphQLInt
    }
  },
  mutateAndGetPayload: async (args, req) => {
    const error = checkPermissionsOf(req, 'admin')
    if (error) {
      return Promise.reject(error)
    }
    const postId = fromGlobalId(args.id).id
    return dataProvider.Post.utils.updateById(postId, {
      ...args
    })
  }
})

export const DelPostMutation = mutationWithClientMutationId({
  name: 'DelPost',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  outputFields: {
    id: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async (args, req) => {
    const error = checkPermissionsOf(req, 'admin')
    if (error) {
      return Promise.reject(error)
    }
    const postId = fromGlobalId(args.id).id
    const result = await dataProvider.Post.utils.removeById(postId)
    return result
  }
})
