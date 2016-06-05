var mongodb = require('mongodb')
var Promise = require('bluebird')
var config = require('../config')
var MongoClient = mongodb.MongoClient

var db = {
  connect: function(dbName){
    var dbUrl = config.dbUrl + dbName;
    return new Promise(function (resolve, reject) {
      MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err)
        } else {
          resolve(db);
        }
      })
    })
  }
}

module.exports = db
