import { renderHtml } from '../render-react-components'
import routesWithEnsure from '../../client/routes'

function view(req, res) {
  renderHtml(req.url, routesWithEnsure).then(htmlString => {
    res.send(htmlString)
  })
}

export default view
