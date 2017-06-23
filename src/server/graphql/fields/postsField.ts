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
import { getReadingProgressCore } from '../../api/user'
import dataProvider from '../../models/dataProvider'


interface ListPostsConfig {
  isPublished?: boolean

}

const listPosts = (config: ListPostsConfig) => {

}

const postsField = makeNodeConnectionField({
  type: GQLPostConnection,
  extendedArgs: {
    isPublished: {
      type: GraphQLBoolean
    }
  },
  listAllFn: async (upper, args, req) => {
    return dataProvider.Post.utils.list().then(result => {
      return result.list
    })
  }
})

export default postsField
