import _ from 'lodash'
import { GraphQLEnumType, GraphQLNonNull } from 'graphql'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import dataProvider from '../../models/dataProvider'
import GQLAuthor from './GQLAuthor'
import GQLTag from './GQLTag'
import { PostVisibility, PostStatus, PostCategories } from '../../api/enums'

const utils = makeUtils({ nodeInterface })

export const GQLPostVisibility = new GraphQLEnumType({
  name: 'PostVisibility',
  values: {
    PUBLIC: { value: PostVisibility.Public },
    PRIVATE: { value: PostVisibility.Private }
  }
})

export const GQLPostStatus = new GraphQLEnumType({
  name: 'PostStatus',
  values: {
    DRAFT: { value: PostStatus.Draft },
    PUBLISHED: { value: PostStatus.Published },
    UNPUBLISHED: { value: PostStatus.Unpublished }
  }
})

export const GQLPostCategory = new GraphQLEnumType({
  name: 'PostCategory',
  values: {
    BLOG: {
      value: PostCategories.Blog,
      description: 'site log'
    },
    BOOK_WEEKLY: { value: PostCategories.BookWeekly },
    PAGES: { value: PostCategories.Pages }
  }
})

export const { nodeType: GQLPost, connectionType: GQLPostConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Post',
  description: 'Post ...',
  model: dataProvider.Post,
  refTypes: [GQLAuthor, GQLTag],
  fields: {
    visibility: {
      type: new GraphQLNonNull(GQLPostVisibility)
    },
    category: {
      type: new GraphQLNonNull(GQLPostCategory)
    },
    status: {
      type: new GraphQLNonNull(GQLPostStatus)
    }
  }
})

export default GQLPost
