import makeUtils from '../utils'
import dataProvider from '../../models/dataProvider'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLTag, connectionType: GQLTagConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Tag',
  description: 'Tag.',
  model: dataProvider.Tag
})

export default GQLTag
