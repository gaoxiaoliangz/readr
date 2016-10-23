// import models from '../../models'
// import BasicApi from '../basic-api'
// const multiparty = require('multiparty')
// const Busboy = require('busboy')
let multer  = require('multer')
let upload = multer({ dest: 'uploads/' })

export default {
  add(req) {
    // multiparty
    // const form = new multiparty.Form()
    // form.parse(req, function(err, fields, files) {
    //   console.log(fields, files[0][0].headers)
    // })

    // let busboy = new Busboy({ headers: req.headers })

    // busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    //   console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    //   file.on('data', function (data) {
    //     console.log('File [' + fieldname + '] got ' + data.length + ' bytes')
    //   })
    //   file.on('end', function () {
    //     console.log('File [' + fieldname + '] Finished')
    //   })
    // })

    // return new Promise(resolve => {
    //   busboy.on('finish', function () {
    //     console.log('Done parsing form!')
    //     resolve({})
    //   })
    // })

    upload.single('book-file')(req)
    console.log(req.file)
    return Promise.resolve({})
  },
}
