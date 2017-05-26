import makeUtils from '../utils'
import * as mgSchemas from '../../models/mg-schemas'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLAuthor, connectionType: GQLAuthorConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Author',
  mgFields: mgSchemas.authorFields,
  description: 'Book author, normally it\'s fetched from douban.'
})

export default GQLAuthor
