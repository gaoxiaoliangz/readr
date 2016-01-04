var express = require('express');
var app = express();
var router = express.Router();
var path    = require("path");

var book_name, book_author, book_cover, book_content

var data = {
  title: 'readr',
  book_id: 1,
  book_progress: 0,
  cloud_progress: 0
}


var text;

router.get('/', function(req, res) {
  // res.sendFile('view.html');
  // res.sendFile(path.join('../view.html'));
  // path.resolve(__dirname, '../views/view.html');

  res.render('view', data);
});



router.get('/get_progress/:book_id/:progress', function(req, res, next) {

  res.send("0");
});

router.get('/set_progress/:book_id/:progress', function(req, res, next) {

  // res.send("0");
});

router.get('/get_book_content/:book_id', function(req, res, next) {

  var book_id = req.params.book_id;

  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/readr';

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);

      var collection = db.collection('books');

      collection.find({book_id: book_id}).toArray(function (err, result) {
        if (err) {
          console.log(err);
          res.send(err);
        } else if (result.length) {
          text = result[0].book_content;
          // res.send(result[0].book_content);

          var data = {};
          var text2 = '';
          var status = 1;
          // var text_arr = explode( "\n", $text);
          var text_arr = text.split("\n");
          for(var i = 0; i < text_arr.length; i++){
            text2 = "<p>" + text_arr[text_arr.length-i-1] + "</p>" + text2;
          }
          data.text = text;
          data.text2 = text2;
          data.status = status;
          data_str = JSON.stringify(data);


          res.send(data_str);



          console.log('Found:', result[0].book_name);
        } else {
          console.log('No document(s) found with defined "find" criteria!');
          res.send("not found");
        }
        db.close();
      });
    }
  });



  // res.send('getting book: '+book_id);
});


module.exports = router;
