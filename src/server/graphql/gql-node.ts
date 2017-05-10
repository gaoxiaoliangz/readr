import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay'
import _ from 'lodash'
const debug = require('debug')('readr:gql-node')
import dataProvider from '../models/data-provider'
import * as GQLTypes from './gql-types'

const mapGQLTypeToModel = type => {
  switch (type) {
    case 'BookInfo':
      return 'Book'
  
    default:
      return type
  }
}

const mapGlobalIdToNodeObject = async globalId => {
  const { type, id } = fromGlobalId(globalId)
  const model = mapGQLTypeToModel(type)

  if (!dataProvider[model]) {
    return Promise.reject(new Error('type not defined in dataProvider'))
  }

  const result = await dataProvider[model].utils.findById(id)
  return _.assign({}, result.toObject(), {
    __typeName__: type
  })
}

const mapNodeObjectToGQLType = nodeObject => {
  const { __typeName__: type } = nodeObject
  const result = _.find(GQLTypes as any, GQLType => {
    return GQLType['name'] === type
  })
  if (!result) {
    debug('gql type undefined!')
  }
  return result as any
}

export const { nodeInterface, nodeField } = nodeDefinitions(mapGlobalIdToNodeObject, mapNodeObjectToGQLType)
