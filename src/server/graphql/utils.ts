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
import * as GQLTypes from './types'
import dataProvider from '../models/data-provider'
const debug = require('debug')('readr:gql-utils')

export const modelToGQLFields = (model) => {
  if (!model) {
    return {}
  }
  let fields = {}
  const makeReferenceType = (name) => {
    const result = _.find(GQLTypes as any, GQLType => {
      return GQLType['name'] === name
    })
    if (result) {
      // it won't be used, 'cause GQLTypes are not created yet
      return result
    }
    const _name = `${name}_${Math.random().toString().substr(2, 3)}`
    return new GraphQLObjectType({
      name: _name,
      fields: modelToGQLFields(dataProvider[name]),
      description: 'Using such a strange type name is actually a technical compromise, maybe I will come up with somthing else later.'
    })
  }

  const mapMgSchemaTypeToGqlType = (type) => {
    const ref = (_.get(type, 'caster.options.ref') || _.get(type, 'options.ref')) as string

    let gqlType: any = GraphQLString
    gqlType = ref
      ? makeReferenceType(ref)
      : gqlType
    gqlType = type.instance === 'Array' ? new GraphQLList(gqlType) : gqlType
    gqlType = type.isRequired ? new GraphQLNonNull(gqlType) : gqlType

    return gqlType
  }

  model.schema.eachPath((path, type) => {
    const gqlType = mapMgSchemaTypeToGqlType(type)

    if (path !== '__v') {
      fields = {
        ...fields,
        [path]: {
          type: gqlType
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
    [key: string]: any
  }
}
const makeGQLNodeType = nodeInterface => ({ name, model, description, fields }: MakeGQLNodeTypeConfig) => {
  const _fields = {
    ...modelToGQLFields(model),
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
    modelToGQLFields,
    makeNodeConnectionField,
    extendedConnectionDefinitions,
    makeGQLNodeType: makeGQLNodeType(nodeInterface),
    makeGQLNodeTypeAndConnectionType: makeGQLNodeTypeAndConnectionType(nodeInterface)
  }
}

export default utilsWithContext
