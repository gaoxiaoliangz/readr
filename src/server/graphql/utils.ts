// tslint:disable:no-unused-variable
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLDeprecatedDirective
} from 'graphql'
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
  connectionFromArraySlice
} from 'graphql-relay'
// tslint:enable:no-unused-variable

import _ from 'lodash'
const debug = require('debug')('readr:gql-utils')

export const mgFieldsToGQLFields = mgFields => {
  return _.mapValues(mgFields, (val, key) => {
    let type: any = GraphQLString
    if (val.required) {
      type = new GraphQLNonNull(type)
    }

    return {
      type
    }
  })
}

type MakeGQLNodeTypeConfig = {
  name: string
  description: string
  mgFields: {
    [key: string]: any
  }
  fields?: {
    [key: string]: any
  }
}
const makeGQLNodeType = nodeInterface => ({ name, mgFields, description, fields }: MakeGQLNodeTypeConfig) => {
  return new GraphQLObjectType({
    name,
    description,
    fields: {
      ...mgFieldsToGQLFields(mgFields),
      ...fields,
      id: globalIdField(name)
    },
    interfaces: [nodeInterface]
  })
}

export const extendedConnectionDefinitions = ({ name, nodeType }) => {
  return connectionDefinitions({
    name, nodeType, connectionFields: {
      totalCount: {
        type: GraphQLInt,
        resolve: (obj) => {
          if (!obj.totalCount) {
            debug('totalCount shold be provided by upper object')
          }
          return obj.totalCount
        }
      }
    }
  })
}

const makeGQLNodeTypeAndConnectionType = nodeInterface => (config: MakeGQLNodeTypeConfig) => {
  const nodeType = makeGQLNodeType(nodeInterface)(config)
  const { connectionType } = extendedConnectionDefinitions({
    name: config.name,
    nodeType
  })
  return { nodeType, connectionType }
}

type makeNodeConnectionFieldConfig = {
  type: any
  // listAllFn: (parent: any, args: any, req: any, obj: any) => any
  listAllFn: any
  extendedArgs?: {
    [key: string]: any
  }
}
export const makeNodeConnectionField = (config: makeNodeConnectionFieldConfig) => {
  const { type, listAllFn, extendedArgs } = config
  return {
    type,
    args: {
      ...connectionArgs as any,
      ...extendedArgs,
      offset: {
        type: GraphQLInt
      }
    },
    async resolve(...args) {
      let list = await listAllFn(...args)
      const arrayLength = list.length
      const offset = args[1].offset
      if (offset) {
        list = list.slice(offset)
      }
      return {
        ...connectionFromArraySlice(list, args[1], {
          sliceStart: offset || 0,
          arrayLength,
        }),
        totalCount: list.length
      }
    }
  }
}

const utilsWithContext = ({ nodeInterface }) => {
  return {
    mgFieldsToGQLFields,
    makeNodeConnectionField,
    extendedConnectionDefinitions,
    makeGQLNodeType: makeGQLNodeType(nodeInterface),
    makeGQLNodeTypeAndConnectionType: makeGQLNodeTypeAndConnectionType(nodeInterface)
  }
}

export default utilsWithContext
