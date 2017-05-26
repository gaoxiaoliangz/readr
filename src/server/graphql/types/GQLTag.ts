import makeUtils from '../utils'
import * as mgSchemas from '../../models/mg-schemas'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLTag, connectionType: GQLTagConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Tag',
  description: 'Book tag.',
  mgFields: mgSchemas.tagFields
})

export default GQLTag
