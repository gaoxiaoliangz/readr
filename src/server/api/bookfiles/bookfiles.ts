// import models from '../../models'
// import BasicApi from '../basic-api'
const multiparty = require('multiparty')

export default {
  add(req) {
    const form = new multiparty.Form()
    form.parse(req, function(err, fields, files) {
      console.log(fields, files[0][0].headers)
    })
    return Promise.resolve({})
  },
}
