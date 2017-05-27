import makeUtils from '../utils'
import dataProvider from '../../models/data-provider'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLTag, connectionType: GQLTagConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Tag',
  description: 'Book tag.',
  model: dataProvider.Tag
})

export default GQLTag
