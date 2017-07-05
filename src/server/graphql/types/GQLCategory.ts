import makeUtils from '../utils'
import dataProvider from '../../models/dataProvider'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLCategory, connectionType: GQLCategoryConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Category',
  description: 'A common category thing',
  model: dataProvider.Category
})

export default GQLCategory
