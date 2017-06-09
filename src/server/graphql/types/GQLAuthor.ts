import makeUtils from '../utils'
import dataProvider from '../../models/dataProvider'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLAuthor, connectionType: GQLAuthorConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Author',
  model: dataProvider.Author,
  description: 'Book author, normally it\'s fetched from douban.'
})

export default GQLAuthor
