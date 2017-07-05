import _ from 'lodash'
import { GraphQLList, GraphQLNonNull, GraphQLBoolean } from 'graphql'
import makeUtils from '../utils'
import { nodeInterface } from '../node'
import dataProvider from '../../models/dataProvider'
import GQLTocItem from './GQLTocItem'
import GQLAuthor from './GQLAuthor'
import GQLCategory from './GQLCategory'
import GQLFile from './GQLFile'
import { parseBookFileMemoized, mapMimetypeToFileType } from '../../api/books/findBook'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLBook, connectionType: GQLBookConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Book',
  description: 'Book ...',
  model: dataProvider.Book,
  refTypes: [GQLAuthor, GQLFile, GQLCategory],
  fields: {
    toc: {
      type: new GraphQLList(GQLTocItem),
      resolve: async (upper, args) => {
        const parsedFile = await parseBookFileMemoized(upper._id, {
          buffer: upper.file.content.buffer,
          fileType: mapMimetypeToFileType(upper.file.mimetype)
        })
        return parsedFile.structure
      }
    },
    published: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (upper) => {
        return _.isUndefined(upper.published) ? true : upper.published
      }
    }
  }
})

export default GQLBook
