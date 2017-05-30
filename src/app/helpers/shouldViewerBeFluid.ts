import { VIEWER_DEFS } from '../../constants'
import getScreenInfo from '../utils/browser/getScreenInfo'

const shouldViewerBeFluid = () => {
  const viewerWidth = getScreenInfo().width
  return viewerWidth < VIEWER_DEFS.MOBILE_BREAK_POINT
}

export default shouldViewerBeFluid
