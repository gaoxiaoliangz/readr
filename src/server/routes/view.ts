import { renderHtml } from '../render-react-components'
import routesWithEnsure from '../../client/routes'
const runtimeOptions: any = require('../utils/runtime-options')

function view(req, res) {
  renderHtml(req.url, routesWithEnsure, runtimeOptions.env === 'production').then(htmlString => {
    res.send(htmlString)
  }, err => {
    res.status(err.statusCode).send(err.htmlString)
  })
}

export default view
