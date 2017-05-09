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
} from 'graphql-relay'
import _ from 'lodash'

export const mgFieldsToGQLFields = mgFields => {
  return _.mapValues(mgFields, (val, key) => {
    let type: any = GraphQLString
    if (val.required) {
      type = new GraphQLNonNull(type)
    }

    return {
      type,
      resolve: obj => obj[key]
    }
  })
}

type MakeGQLNodeTypeConfig = {
  name: string
  description: string
  mgFields: {
    [key: string]: any
  }
}
export const makeGQLNodeType = nodeInterface => ({ name, mgFields, description }: MakeGQLNodeTypeConfig) => {
  return new GraphQLObjectType({
    name,
    description,
    fields: {
      ...mgFieldsToGQLFields(mgFields),
      id: globalIdField(name)
    },
    interfaces: [nodeInterface]
  })
}

export const makeGQLNodeTypeAndConnectionType = nodeInterface => (config: MakeGQLNodeTypeConfig) => {
  const nodeType = makeGQLNodeType(nodeInterface)(config)
  const { connectionType } = connectionDefinitions({ name: config.name, nodeType })
  return { nodeType, connectionType }
}

const utilsWithContext = ({ nodeInterface }) => {
  return {
    mgFieldsToGQLFields,
    makeGQLNodeType: makeGQLNodeType(nodeInterface),
    makeGQLNodeTypeAndConnectionType: makeGQLNodeTypeAndConnectionType(nodeInterface)
  }
}

export default utilsWithContext
