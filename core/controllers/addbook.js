var express = require('express');
var app = express();
var router = express.Router();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var book_name, book_author, book_cover, book_content

var data = {
  title: 'readr'
}

router.get('/', function(req, res, next) {
  res.render('addbook', data);
});

router.post('/', function(req, res) {
  book_id = req.body.book_id;
  book_name = req.body.book_name;
  book_author = req.body.book_author;
  book_cover = req.body.book_cover;
  book_content = req.body.book_content;

  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/readr';

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);

      var collection = db.collection('books');
      var user = {book_id: book_id, book_name: book_name, book_author: book_author, book_content: book_content, book_cover: book_cover};

      collection.insert([user], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log('Done. ');
        }
        db.close();
      });
    }
  });

  res.send("new book added: "+book_name);
});






module.exports = router;
