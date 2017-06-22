import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import {
  connectionArgs,
  connectionDefinitions,
  globalIdField,
  connectionFromArraySlice
} from 'graphql-relay'
import _ from 'lodash'
import humps from 'humps'
const debug = require('debug')('readr:gql-utils')

type ModelToGQLFieldsConfig = {
  refTypes?: any[]
  // fields to omit
  omit?: string[]
}
export const modelToGQLFields = (model, config?: ModelToGQLFieldsConfig) => {
  const { refTypes, omit } = config

  if (!model) {
    return {}
  }
  let fields = {}
  const mapMgSchemaTypeToGqlType = (type) => {
    const ref = (_.get(type, 'caster.options.ref') || _.get(type, 'options.ref')) as string

    let gqlType: any = GraphQLString
    gqlType = ref
      ? (_.find(refTypes, { name: ref }) || GraphQLString)
      : gqlType
    gqlType = type.instance === 'Array' ? new GraphQLList(gqlType) : gqlType
    gqlType = type.isRequired ? new GraphQLNonNull(gqlType) : gqlType

    return gqlType
  }

  model.schema.eachPath((path, type) => {
    const gqlType = mapMgSchemaTypeToGqlType(type)
    if ((omit || []).indexOf(path) === -1) {
      if (path === '_id') {
        fields = {
          ...fields,
          id: globalIdField(model.modelName, (obj) => obj[path]),
          objectId: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => obj[path]
          }
        }
      } else if (path !== '__v') {
        fields = {
          ...fields,
          [humps.camelize(path)]: {
            type: gqlType,
            resolve: (obj) => obj[path]
          }
        }
      }
    }
  })

  return fields
}

type MakeGQLNodeTypeConfig = {
  name: string
  description: string
  model?: any
  fields?: {
    [key: string]: {
      type: any
      resolve?: (obj, args, req, arg) => any
    }
  },
  refTypes?: any[]
  omit?: string[]
}
const makeGQLNodeType = nodeInterface => ({ name, model, description, fields, refTypes, omit }: MakeGQLNodeTypeConfig) => {
  const _fields = {
    ...modelToGQLFields(model, { refTypes, omit }),
    id: globalIdField(name, (obj) => {
      return obj._id
    }),
    ...fields,
  }

  return new GraphQLObjectType({
    name,
    description,
    fields: _fields,
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
  extendedFields?: (config: { list: any[], sliceStart: number, connection: any }) => (...args: any[]) => Promisable<{
    [key: string]: any
  }>
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
      const extendedFields = extendedFieldsFn && await extendedFieldsFn({ list, sliceStart, connection })(...args)

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
    modelToGQLFields,
    makeNodeConnectionField,
    extendedConnectionDefinitions,
    makeGQLNodeType: makeGQLNodeType(nodeInterface),
    makeGQLNodeTypeAndConnectionType: makeGQLNodeTypeAndConnectionType(nodeInterface)
  }
}

export default utilsWithContext
