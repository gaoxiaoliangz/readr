import makeUtils from '../utils'
import dataProvider from '../../models/dataProvider'
import { nodeInterface } from '../node'

const utils = makeUtils({ nodeInterface })

export const { nodeType: GQLSlide, connectionType: GQLSlideConnection } = utils.makeGQLNodeTypeAndConnectionType({
  name: 'Slide',
  model: dataProvider.Slide,
  description: 'Slide pics for home page'
})

export default GQLSlide
