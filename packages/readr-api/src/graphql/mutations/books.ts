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
    const bookId = fromGlobalId(args.id).id

    const doDel = () => {
      return dataProvider.Book.utils.removeById(bookId)
    }

    const error = checkPermissionsOf(req, 'admin')
    const book = await dataProvider.Book.findById(bookId)

    if (!book) {
      return Promise.reject(new Error('书籍不存在！'))
    }

    if (!error) {
      return doDel()
    }

    const currentUser = req.user._id

    if (!currentUser) {
      return Promise.reject(new Error('需要登录！'))
    }

    if ((book['provided_by'] && book['provided_by'].toString()) === currentUser) {
      return doDel()
    }
    return Promise.reject(new Error('没有删除该书籍的权限！'))
  }
})
