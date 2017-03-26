import { MOBILE_BREAK_POINT } from '../constants/viewerDefs'
import utils from '../utils'

const shouldViewerBeFluid = () => {
  const viewerWidth = utils.getScreenInfo().width
  return viewerWidth < MOBILE_BREAK_POINT
}

export default shouldViewerBeFluid
