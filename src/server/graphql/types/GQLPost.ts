import _ from 'lodash'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import dataProvider from '../../models/dataProvider'
import GQLAuthor from './GQLAuthor'
import GQLTag from './GQLTag'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLPost, connectionType: GQLPostConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Post',
  description: 'Post ...',
  model: dataProvider.Post,
  refTypes: [GQLAuthor, GQLTag]
})

export default GQLPost
