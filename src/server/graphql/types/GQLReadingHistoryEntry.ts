import _ from 'lodash'
import { GraphQLList } from 'graphql'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import dataProvider from '../../models/data-provider'
import GQLTocItem from './GQLTocItem'
import GQLAuthor from './GQLAuthor'
import GQLFile from './GQLFile'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLReadingHistoryEntry, connectionType: GQLReadingHistoryEntryConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'ReadingHistoryEntry',
  description: 'ReadingHistoryEntry looks like Book but different',
  // model just for data structure, the actual data is from api
  model: dataProvider.Book,
  refTypes: [GQLAuthor, GQLFile],
  fields: {
    toc: {
      type: new GraphQLList(GQLTocItem)
    }
  }
})

export default GQLReadingHistoryEntry
