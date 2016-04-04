'use strict';

var db = require("./db");
var db_name = 'readr';
var colors = require('colors/safe');

function _genId(len) {
  return parseInt(Math.random() * Math.pow(10, len));
}

var query = {

  getData: function getData(table_name, match, key) {
    var json = {};

    return new Promise(function (resolve, reject) {
      db.connect(db_name).then(function (db) {
        var collection = db.collection(table_name);

        collection.find(match).toArray(function (err, result) {
          if (err) {
            json.error = {};
            json.error.msg = err;
            json.error.code = 500;
          } else if (result.length) {
            json.data = [];
            if (key) {
              for (var i = 0; i < result.length; i++) {
                json.data.push(result[i][key]);
              }
            } else {
              json.data = result;
            }
          } else {
            json.error = {};
            json.error.msg = 'No records found!';
            json.error.code = 404;
          }
          resolve(json);
          db.close();
        });
      });
    });
  },

  putData: function putData(table_name, data) {
    return new Promise(function (resolve, reject) {
      db.connect(db_name).then(function (db) {
        db.collection(table_name).insert([data], function (err, result) {
          if (err) {
            console.log(colors.red(err));
            resolve({
              error: {
                msg: err,
                code: 500
              }
            });
          } else {
            resolve({
              data: {}
            });
          }
          db.close();
        });
      });
    });
  },

  updateData: function updateData(table_name, match, data) {
    var json = {};
    return new Promise(function (resolve, reject) {
      db.connect(db_name).then(function (db) {
        var collection = db.collection(table_name);

        collection.update(match, data, {
          upsert: true
        }, function (err, result) {
          if (err) {
            console.log(err);
            json.error = {};
            json.error.msg = err;
            json.error.code = 500;
          } else {
            json.data = {};
          }
          resolve(json);
          db.close();
        });
      });
    });
  }
};

module.exports = query;
