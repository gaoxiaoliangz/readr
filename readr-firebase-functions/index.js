const express = require('express');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const gcs = require('@google-cloud/storage')();
const mkdirp = require('mkdirp-promise');
const os = require('os');
const path = require('path');
const fs = require('fs');
const _ = require('lodash')
const epubParser = require('@gxl/epub-parser').default

const app = express();

admin.initializeApp(functions.config().firebase);

const cors = (allowedOrigins) => (req, res, next) => {
  const origin = req.headers.origin
  if (origin && (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins === '*')) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', 'get,post,put')
  }
  next()
}

const handleNotFound = (req, res, next) => {
  res.send({
    code: 404
  })
}

app.use(cors('*'));

const getBookFileById = (id) => {
  return admin.database().ref('files/' + id)
    .once('value')
    .then(data => {
      const { filename } = data.val()
      const tempLocalFile = path.join(os.tmpdir(), filename);
      const tempLocalDir = path.dirname(tempLocalFile);

      return mkdirp(tempLocalDir)
        .then(() => {
          // Download file from bucket.
          return admin.storage().bucket().file(filename).download({ destination: tempLocalFile });
        })
        .then(() => {
          console.log('The file has been downloaded to', tempLocalFile);
          // Delete the file
          // fs.unlinkSync(tempLocalFile);
          return epubParser(tempLocalFile).then(epub => {
            return _.pick(epub, ['structure', 'info', 'sections'])
          })
        })
    })
}

const createRouter = () => {
  const router = express.Router()
  router.get('/book-files/:id', (req, res) => getBookFileById(req.params.id).then(json => {
    res.send(json)
  }));

  router.use(handleNotFound)
  return router
}

app.use(createRouter())

exports.app = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`
  }
  console.log(`requesting ${req.url}`)
  return app(req, res)
})
