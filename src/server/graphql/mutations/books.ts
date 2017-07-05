import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'
// import { GQLPostVisibility, GQLPostStatus, GQLPostCategory } from '../types/GQLPost'
import { checkPermissionsOf } from '../../middleware/requirePermissionsOf'

const bookInputFields = {
  title: {
    type: GraphQLString
  },
  featured: {
    type: GraphQLBoolean
  },
  categories: {
    type: new GraphQLList(GraphQLID)
  },
  authors: {
    type: new GraphQLList(GraphQLID)
  },
  description: {
    type: GraphQLString
  },
  cover: {
    type: GraphQLString
  },
  file: {
    type: GraphQLID
  },
  providedBy: {
    type: GraphQLID
  },
  published: {
    type: GraphQLBoolean
  }
}

export const UpdateBookMutation = mutationWithClientMutationId({
  name: 'UpdateBook',
  inputFields: {
    ...bookInputFields,
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
    const data = {
      ...args,
      categories: args.categories && args.categories.map(glbId => {
        return fromGlobalId(glbId).id
      }),
      authors: args.authors && args.authors.map(glbId => {
        return fromGlobalId(glbId).id
      })
    }

    const bookId = fromGlobalId(args.id).id
    return dataProvider.Book.utils.updateById(bookId, data)
  }
})

export const DelBookMutation = mutationWithClientMutationId({
  name: 'DelBook',
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
    const bookId = fromGlobalId(args.id).id
    const result = await dataProvider.Book.utils.removeById(bookId)
    return result
  }
})
