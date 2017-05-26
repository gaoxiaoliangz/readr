import {
  fromGlobalId,
  nodeDefinitions
} from 'graphql-relay'
import _ from 'lodash'
import dataProvider from '../models/data-provider'
import * as GQLTypes from './types'
import resolveBookInfo from './resolvers/resolveBook'
const debug = require('debug')('readr:gql-node')

const mapGQLTypeToResolver = type => {
  switch (type) {
    case 'BookInfo':
      return resolveBookInfo

    default:
      if (!dataProvider[type]) {
        throw new Error('type not defined in dataProvider')
      }

      return (id) => dataProvider[type].findById(id).exec().then(result => result.toObject())
  }
}

const mapGlobalIdToNodeObject = async globalId => {
  const { type, id } = fromGlobalId(globalId)
  const resolver = mapGQLTypeToResolver(type)

  const result = await resolver(id)
  return _.assign({}, result, {
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
