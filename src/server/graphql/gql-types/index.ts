import GQLBookPage, { GQLBookPageConnection } from './gql-book-page'
import * as mgSchemas from '../../models/mg-schemas'
import makeUtils from '../utils'
import { nodeInterface } from '../gql-node'

const utils = makeUtils({ nodeInterface })

const { nodeType: GQLAuthor, connectionType: GQLAuthorConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Author',
  mgFields: mgSchemas.authorFields,
  description: 'Book author, normally it\'s fetched from douban.'
})

const { nodeType: GQLTag, connectionType: GQLTagConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Tag',
  description: 'Book tag.',
  mgFields: mgSchemas.tagFields
})

const { nodeType: GQLFile, connectionType: GQLFileConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'File',
  description: 'File ...',
  mgFields: mgSchemas.fileFields
})

export {
  GQLAuthor,
  GQLAuthorConnection,
  GQLTag,
  GQLTagConnection,
  GQLFile,
  GQLFileConnection,
  GQLBookPage,
  GQLBookPageConnection
}
