const mongodb = require('mongodb')
const Promise = require('bluebird')
const config = require('../config')
const MongoClient = mongodb.MongoClient

const db = {
  connect(dbName) {
    const dbUrl = config.dbUrl + dbName
    
    return new Promise((resolve, reject) => {
      MongoClient.connect(dbUrl, (err, db2) => {
        if (err) {
          console.error('Unable to connect to the mongoDB server. Error:', err)
          reject(err)
        } else {
          resolve(db2)
        }
      })
    })
  }
}

module.exports = db
