var express = require('express');
var app = express();
var router = express.Router();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));



router.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  var mongodb = require('mongodb');
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/readr';

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);

      var collection = db.collection('users');

      collection.find({username: username, password: password}).toArray(function (err, result) {
        if (err) {
          console.log(err);
          res.send(err);
        } else if (result.length) {
          res.send("found "+username);
          console.log('Found:', result);
        } else {
          console.log('No document(s) found with defined "find" criteria!');
          res.send("not authed");
        }
        db.close();
      });
    }
  });

});

module.exports = router;
