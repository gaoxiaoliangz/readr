import makeUtils from '../utils'
import { nodeInterface } from '../node'
import * as mgSchemas from '../../models/mg-schemas'
import GQLBookToc from './GQLBookToc'
import bookPagesField from '../fields/bookPagesField'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLBook, connectionType: GQLBookConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Book',
  description: 'Book ...',
  mgFields: mgSchemas.bookFields,
  fields: {
    toc: {
      type: GQLBookToc
    },
    pages: bookPagesField
  }
})

export default GQLBook
