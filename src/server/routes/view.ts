import { renderHtml } from '../render-react-components'
import routesWithEnsure from '../../client/routes'
import print from '../utils/print'
const runtimeOptions: any = require('../utils/runtime-options')

function view(req, res) {
  renderHtml(req.url, routesWithEnsure, runtimeOptions.env === 'production').then(htmlString => {
    res.send(htmlString)
  }, err => {
    const statusCode = err.statusCode || 500
    const htmlString = err.htmlString || 'Unknown error occurred!'

    if (!err.htmlString) {
      print.error(err)
    }

    res.status(statusCode).send(htmlString)
  })
}

export default view
