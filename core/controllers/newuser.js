var express = require('express');
var app = express();
var router = express.Router();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var username, password;

router.post('/', function(req, res) {
    username = req.body.username;
    password = req.body.password;

    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/readr';

    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        console.log('Connection established to', url);

        var collection = db.collection('users');
        var user = {username: username, password: password};

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

    res.send("new user created: "+username);
});






module.exports = router;
