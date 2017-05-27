import _ from 'lodash'
import { GraphQLList } from 'graphql'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import dataProvider from '../../models/data-provider'
import GQLTocItem from './GQLTocItem'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLBook, connectionType: GQLBookConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Book',
  description: 'Book ...',
  model: dataProvider.Book,
  fields: {
    toc: {
      type: new GraphQLList(GQLTocItem)
    }
  }
})

export default GQLBook
