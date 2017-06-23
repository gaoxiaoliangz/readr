import {
  fromGlobalId,
  nodeDefinitions
} from 'graphql-relay'
import _ from 'lodash'
import dataProvider from '../models/dataProvider'
import * as GQLTypes from './types'
import api from '../api'
const debug = require('debug')('readr:gql-node')

const mapGQLTypeToResolver = type => {
  // globalId has type info, if that type is no longer used, there will
  // be an error, so we have to check that first just to make sure the
  // type is in our system
  const result = _.find(GQLTypes as any, GQLType => {
    return GQLType['name'] === type
  })
  if (!result) {
    debug('mapGQLTypeToResolver: gql type undefined!')
    throw new Error(`Type '${type}' not found!`)
  }

  switch (type) {
    case 'Book':
      return (id) => {
        return api.books.find({ id, includeToc: true })
      }

    default:
      if (!dataProvider[type]) {
        throw new Error('type not defined in dataProvider')
      }

      return (id) => dataProvider[type].findById(id).exec().then(_result => _result.toObject())
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
    debug('mapNodeObjectToGQLType: gql type undefined!')
  }
  return result as any
}

export const { nodeInterface, nodeField } = nodeDefinitions(mapGlobalIdToNodeObject, mapNodeObjectToGQLType)
