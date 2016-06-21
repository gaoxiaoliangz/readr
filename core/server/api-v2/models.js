'use strict'
const express = require('express')
const router = new express.Router()

const config = require('../config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


// more than just a data table
// it extends with ref support
// so it looks more like a model

// oop
class Model {
  constructor(tableName) {
    // this.schema = schema
    this.tableName = tableName
    this.db = MongoClient.connect(config.db.host + config.db.name)
  }

  findAll() {
    return this.db.then(db => {  
      return db.collection(this.tableName)
        .find({})
        .toArray()
        .then(res => {
          return Promise.resolve(res)
        })
    })
  }

  findById() {
    // if a ref is used, data will be retrived automaticly
    return this
  }

  find(match) {

  }

  insert(data) {

  }

  update(match, data) {
    return this.db.then(db => {
      return db.collection(this.tableName).update(match, { $set: data }, {
        upsert: true
      })
    })
  }

  delete() {
    
  }
}



// fp
// function findAll(db) {
//   return db.collection(this.tableName)
//     .find({})
//     .toArray()
//     .then(res => {
//       return Promise.resolve(res)
//     })
// }

// function update(db) {
//   return (match, data) => {
//     return db.collection(this.tableName).update(match, { $set: data }, {
//       upsert: true
//     })
//   }
// }




// const bookSchema
// const bookModel = new Model(bookSchema)


// bookModel.findById('1948392').edit({a: 1})
// bookModel.edit({a:1}, {a:2})

// return a promise 
// bookModel.find({})
// .read()
// .edit()
// .delete()




const model = function model() {
  router.get('/model', (req, res) => {
    const user = new Model('users')
    // console.log(user.findAll())
    
    user.findAll().then(result => {
      res.send(result)
    })
  })
  return router
}

module.exports = model
