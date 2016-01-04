var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Promise = require('bluebird');
var url = 'mongodb://localhost:27017/readr';

var content = {
  get_book_content: function(book_id){
    var text, db;

    db = new Promise(function (resolve, reject) {
      MongoClient.connect(url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
          console.log('Connection established to', url);

          var collection = db.collection('books');

          collection.find({book_id: book_id}).toArray(function (err, result) {
            if (err) {
              text = err;
            } else if (result.length) {
              text = result[0].book_content;
            } else {
              text = 'No document(s) found with defined "find" criteria!';
            }
            resolve(text);
            db.close();
          });
        }
      });
    });
    
    return db;
  }
}

module.exports = content;
