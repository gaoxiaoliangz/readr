var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Promise = require('bluebird');

// todo: config
var base_url = 'mongodb://localhost:27017/';

var db = {
  connect: function(db_name){
    var db_url = base_url + db_name;
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
