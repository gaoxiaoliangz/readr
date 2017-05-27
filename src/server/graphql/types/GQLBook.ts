import _ from 'lodash'
import { GraphQLList } from 'graphql'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import * as mgSchemas from '../../models/mg-schemas'
import GQLTocItem from './GQLTocItem'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLBook, connectionType: GQLBookConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Book',
  description: 'Book ...',
  mgFields: _.omit(mgSchemas.bookFields, 'file'),
  fields: {
    toc: {
      type: new GraphQLList(GQLTocItem)
    }
  }
})

export default GQLBook
