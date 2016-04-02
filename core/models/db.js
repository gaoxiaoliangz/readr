var mongodb = require('mongodb'),
    Promise = require('bluebird'),
    MongoClient = mongodb.MongoClient,
    config = require('../config');

var db = {
  connect: function(db_name){
    var db_url = config.dbUrl + db_name;
    return new Promise(function (resolve, reject) {
      MongoClient.connect(db_url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          console.log('Connection established to', db_url);
          resolve(db);
        }
      });
    });
  }
}

module.exports = db;
