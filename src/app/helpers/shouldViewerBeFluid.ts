import { MOBILE_BREAK_POINT } from '../../constants/viewerDefs'
import getScreenInfo from '../utils/browser/getScreenInfo'

const shouldViewerBeFluid = () => {
  const viewerWidth = getScreenInfo().width
  return viewerWidth < MOBILE_BREAK_POINT
}

export default shouldViewerBeFluid
