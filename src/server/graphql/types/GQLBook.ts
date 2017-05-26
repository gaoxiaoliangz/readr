import _ from 'lodash'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import * as mgSchemas from '../../models/mg-schemas'
import GQLBookToc from './GQLBookToc'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLBook, connectionType: GQLBookConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Book',
  description: 'Book ...',
  mgFields: _.omit(mgSchemas.bookFields, 'file'),
  fields: {
    toc: {
      type: GQLBookToc
    }
  }
})

export default GQLBook
