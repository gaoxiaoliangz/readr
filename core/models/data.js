var db = require("./db");
var db_name = 'readr';

function _genId(len){
  return parseInt(Math.random()*Math.pow(10,len));
}

var content = {
  getData: function(table_name, match, key){
    var data = {};
    console.log(match);
    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);

        collection.find(match).toArray(function (err, result) {
          if (err) {
            data.errorMsg = err;
            data.errorCode = 500;
          } else if (result.length) {
            if(key){
              data.result = result[0][key];
            }else{
              data.result = result[0];
            }
            
          } else {
            data.errorMsg = 'No document(s) found with defined "find" criteria!';
            data.errorCode = 404;
          }
          resolve(data);
          db.close();
        });
      });
    });
  },
  getDataNoPromise: function(table_name, match, key){
    var data = {};
    console.log(match);

    db = db.connect(db_name);
    var collection = db.collection(table_name);

    collection.find(match).toArray(function (err, result) {
      if (err) {
        data.errorMsg = err;
        data.errorCode = 500;
      } else if (result.length) {
        if(key){
          data.result = result[0][key];
        }else{
          data.result = result[0];
        }
        
      } else {
        data.errorMsg = 'No document(s) found with defined "find" criteria!';
        data.errorCode = 404;
      }
      resolve(data);
      db.close();
    });


  },
  putData: function(table_name, data){
    var result = 0;
    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);
        data._id = _genId(8);

        collection.insert([data], function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log('Task Completed.');
            result = 1;
          }
          resolve(result);
          db.close();
        });
      });
    });
  },
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
  }
}

module.exports = content;
