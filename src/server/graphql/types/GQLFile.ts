import makeUtils from '../utils'
import dataProvider from '../../models/data-provider'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLFile, connectionType: GQLFileConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'File',
  description: 'File ...',
  model: dataProvider.File
})

export default GQLFile
