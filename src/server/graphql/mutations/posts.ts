import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLEnumType,
  GraphQLInt
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'
import { PostVisibility, PostStatus, PostCategories } from '../../api/enums'

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
    type: new GraphQLNonNull(new GraphQLEnumType({
      name: 'PostVisibility',
      values: {
        PUBLIC: { value: PostVisibility.Public },
        PRIVATE: { value: PostVisibility.Private }
      }
    }))
  },
  status: {
    type: new GraphQLNonNull(new GraphQLEnumType({
      name: 'PostStatus',
      values: {
        DRAFT: { value: PostStatus.Draft },
        PUBLISHED: { value: PostStatus.Published },
        UNPUBLISHED: { value: PostStatus.Unpublished }
      }
    }))
  },
  category: {
    type: new GraphQLNonNull(new GraphQLEnumType({
      name: 'PostCategory',
      values: {
        BLOG: {
          value: PostCategories.Blog,
          description: 'site log'
        },
        BOOK_WEEKLY: { value: PostCategories.BookWeekly },
        PAGES: { value: PostCategories.Pages }
      }
    }))
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
    if (req.user.role !== 'admin') {
      return Promise.reject(new Error('Require admin permission!'))
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
    if (req.user.role !== 'admin') {
      return Promise.reject(new Error('Require admin permission!'))
    }
    const postId = fromGlobalId(args.id).id
    return dataProvider.Post.utils.updateById(postId, {
      ...args
    })
  }
})
