var mongodb = require('mongodb')
var Promise = require('bluebird')
var config = require('../config')

var MongoClient = mongodb.MongoClient

var db = {
  connect: function(db_name){
    var db_url = config.dbUrl + db_name;
    return new Promise(function (resolve, reject) {
      MongoClient.connect(db_url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          resolve(db);
        }
      });
    });
  }
}

module.exports = db;
