import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat
} from 'graphql'
import {
  fromGlobalId,
  mutationWithClientMutationId,
} from 'graphql-relay'
import { setReadingProgressCore, removeReadingProgress } from '../../api/user'
import api from '../../api'
import dataProvider from '../../models/dataProvider'

export const UpdateReadingProgressMutation = mutationWithClientMutationId({
  name: 'UpdateReadingProgress',
  inputFields: {
    bookId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    percentage: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
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
    const { user: { _id: userId } } = req
    const bookId = fromGlobalId(args.bookId).id
    const result = await setReadingProgressCore({
      ...args,
      userId,
      bookId
    })
    return result
  }
})

export const RemoveReadingProgressMutation = mutationWithClientMutationId({
  name: 'RemoveReadingProgress',
  inputFields: {
    bookId: {
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
    const { user: { _id: userId } } = req
    const bookId = fromGlobalId(args.bookId).id
    const result = await removeReadingProgress({
      userId,
      bookId
    })
    return result
  }
})

export const UpdateProfileMutation = mutationWithClientMutationId({
  name: 'UpdateProfile',
  inputFields: {
    displayName: {
      type: GraphQLString
    },
    bio: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
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
    const { user: { _id: id } } = req
    const { displayName: display_name, username, email, bio } = args || {} as any
    // todo: seems to have a bug
    // const object = humps.decamelizeKeys(args)
    const result = await api.users.update({
      display_name,
      username,
      email,
      bio
    }, {
      id
    })
    // todo: a better way? what if a key has changed its name
    // or I forget to update one of thoses keys
    // update session
    req.session.user.username = username
    req.session.user.display_name = display_name
    return result
  }
})


export const ChangePasswordMutation = mutationWithClientMutationId({
  name: 'ChangePassword',
  inputFields: {
    oldPassword: {
      type: new GraphQLNonNull(GraphQLString)
    },
    newPassword: {
      type: new GraphQLNonNull(GraphQLString)
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
    const { user: { _id: id } } = req
    const { oldPassword, newPassword } = args || {} as any
    // todo: seems to have a bug
    // const object = humps.decamelizeKeys(args)
    const profileDoc = await dataProvider.User.findById(id).exec()
    const { password } = profileDoc.toObject() as any

    if (oldPassword === password) {
      const result = await api.users.update({
        password: newPassword
      }, {
        id
      })
      return result
    }
    return Promise.reject(new Error('Wrong old password provided!'))
  }
})
