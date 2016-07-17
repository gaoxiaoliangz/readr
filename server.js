const path = require('path')
const express = require('express')
const app = express()
const hmr = require('./src/server/dev-tools/hot-module-replacement')
const port = 3000
// const parsedOptions = require('./parsedOptions')

// if (parsedOptions.env !== 'production' && parsedOptions.hmr) {
//   app.use(hmr())
// }

app.use(hmr())

app.use(express.static(path.join(__dirname, 'assets')))

// if (parsedOptions.env === 'production') {
//   app.get('/', (req, res) => { res.sendFile(`${__dirname}/assets/built/html/index.test-production.html`) })
// } else {
//   app.get('/', (req, res) => { res.sendFile(`${__dirname}/src/html/index.dev.html`) })
// }

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('=> server running on http://localhost:%s/', port)
  }
})
