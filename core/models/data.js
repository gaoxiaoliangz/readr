var db = require("./db");
var db_name = 'readr';

function _genId(len){
  return parseInt(Math.random()*Math.pow(10,len));
}

var content = {

  getData: function(table_name, match, key){
    var json = {};
    json.data = [];
    json.error = {};

    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);

        collection.find(match).toArray(function (err, result) {
          if (err) {
            json.status = "ERROR";
            json.error.msg = err;
            json.error.code = 500;
          } else if (result.length) {
            if(key){
              for(var i = 0;i < result.length;i++){
                json.body.push(result[i][key]);
              }
              json.status = "OK";
            }else{
              json.data = result;
              json.status = "OK";
            }
          } else {
            json.status = "ERROR";
            json.error.msg = 'No document(s) found with defined "find" criteria!';
            json.error.code = 404;
          }
          resolve(json);
          db.close();
        });
      });
    });
  },

  putData: function(table_name, data){
    var data = {};
    data.error = {};

    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);
        data._id = _genId(8);

        collection.insert([data], function (err, result) {
          if (err) {
            console.log(err);
            data.status = "ERROR";
            data.error.msg = err;
            data.error.code = 500;
          } else {
            data.status = "OK";
          }
          resolve(data);
          db.close();
        });
      });
    });
  },





  // testing only
  test: function(table_name, data){
    var result = 0;

    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);

        var len = collection.find();
        console.log(len);
        resolve(len);

      });
    });
  },
  getDataNoPromise: function(table_name, match, key){
    var data = {};
    data.error = {};

    db = db.connect(db_name);
    var collection = db.collection(table_name);

    collection.find(match).toArray(function (err, result) {
      if (err) {
        data.status = "ERROR";
        data.error.msg = err;
        data.error.code = 500;
      } else if (result.length) {
        if(key){
          data.result = result[0][key];
        }else{
          data.result = result[0];
        }
        
      } else {
        data.status = "ERROR";
        data.error.msg = "No records found!";
        data.error.code = 404;
      }
      resolve(data);
      db.close();
    });
  }
}

module.exports = content;
