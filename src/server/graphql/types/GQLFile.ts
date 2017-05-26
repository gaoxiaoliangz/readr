import makeUtils from '../utils'
import * as mgSchemas from '../../models/mg-schemas'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLFile, connectionType: GQLFileConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'File',
  description: 'File ...',
  mgFields: mgSchemas.fileFields
})

export default GQLFile
