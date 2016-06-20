const express = require('express')
const router = new express.Router()
const Db = require('../models/db')

const table
const dbName
Db.connect(dbName).then(db => {
  db.collection(table)
})


// more than just a data table
// it extends with ref support
// so it looks more like a model
class Model {
  constructor(schema) {
    this.schema = schema
  }

  findById() {
    // if a ref is used, data will be retrived automaticly
    return this
  }

  find(match) {

  }

  insert(data) {

  }

  update(data) {

  }

  delete() {
    
  }
}

const bookSchema
const bookModel = new Model(bookSchema)











const model = function model() {
  router.get('/model', (req, res) => {
    res.send('hello')
  })
  return router
}

module.exports = model
