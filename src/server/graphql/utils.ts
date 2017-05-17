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

export const extendedConnectionDefinitions = (config: { name, nodeType, connectionFields?}) => {
  const { name, nodeType, connectionFields } = config
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
      },
      ...connectionFields
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
  // args: parent: any, args: any, req: any, obj: any
  listAllFn: (...args: any[]) => any[] | Promise<any[]>
  sliceStart?: (list: any[]) => (...args: any[]) => Promisable<number>
  extendedArgs?: {
    [key: string]: any
  },
  extendedFields?: (config: { list: any[], sliceStart: number, connection: any }) => (...args: any[]) => {
    [key: string]: any
  }
}
export const makeNodeConnectionField = (config: makeNodeConnectionFieldConfig) => {
  const { type, listAllFn, extendedArgs, extendedFields: extendedFieldsFn, sliceStart: sliceStartFn } = config
  return {
    type,
    args: {
      // @types has bugs
      ...connectionArgs as any,
      ...extendedArgs,
      offset: {
        type: GraphQLInt
      }
    },
    async resolve(...args) {
      const list = await listAllFn(...args)
      const offset = args[1].offset

      const sliceStart = sliceStartFn
        ? await sliceStartFn(list)(...args)
        : (offset || 0)

      const slicedList = sliceStart ? list.slice(sliceStart) : list

      const connection = connectionFromArraySlice(slicedList, args[1], {
        sliceStart,
        arrayLength: list.length,
      })
      const extendedFields = extendedFieldsFn && extendedFieldsFn({ list, sliceStart, connection })(...args)

      return {
        ...extendedFields,
        ...connection,
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
