import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql'
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay'
import dataProvider from '../../models/dataProvider'
import { checkPermissionsOf } from '../../middleware/requirePermissionsOf'

const cateInputFields = {
  name: {
    type: new GraphQLNonNull(GraphQLString)
  },
  slug: {
    type: new GraphQLNonNull(GraphQLString)
  },
  description: {
    type: GraphQLString
  }
}

export const AddCategoryMutation = mutationWithClientMutationId({
  name: 'AddCategory',
  inputFields: cateInputFields,
  outputFields: {
    _id: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async (args, req) => {
    if (req.user.role !== 'admin') {
      return Promise.reject(new Error('Require admin permission!'))
    }
    return dataProvider.Category.utils.save({
      ...args
    }).then(res => {
      return res.toObject()
    })
  }
})

export const UpdateCategoryMutation = mutationWithClientMutationId({
  name: 'UpdateCategory',
  inputFields: {
    ...cateInputFields,
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
    const cateId = fromGlobalId(args.id).id
    return dataProvider.Category.utils.updateById(cateId, {
      ...args
    })
  }
})

export const DelCategoryMutation = mutationWithClientMutationId({
  name: 'DelCategory',
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
    const cateId = fromGlobalId(args.id).id
    const result = await dataProvider.Category.utils.removeById(cateId)
    return result
  }
})
