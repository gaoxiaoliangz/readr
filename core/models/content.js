var db = require("./db");
var db_name = 'readr';


function genId(len){
  return parseInt(Math.random()*Math.pow(10,len));
}



var content = {
  get_data: function(table_name, selector_id, key){
    var text;

    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);

        // todo: book_id
        collection.find({book_id: selector_id}).toArray(function (err, result) {
          if (err) {
            text = err;
          } else if (result.length) {
            text = result[0][key];
          } else {
            text = 'No document(s) found with defined "find" criteria!';
          }
          resolve(text);
          db.close();
        });
      });
    });
  },
  put_data: function(table_name, data){
    var result = 0;
    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);
        data._id = genId(8);

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
