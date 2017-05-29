import _ from 'lodash'
import { GraphQLList } from 'graphql'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import dataProvider from '../../models/data-provider'
import GQLTocItem from './GQLTocItem'
import GQLAuthor from './GQLAuthor'
import GQLFile from './GQLFile'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLBook, connectionType: GQLBookConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Book',
  description: 'Book ...',
  model: dataProvider.Book,
  refTypes: [GQLAuthor, GQLFile],
  fields: {
    toc: {
      type: new GraphQLList(GQLTocItem)
    }
  }
})

export default GQLBook
