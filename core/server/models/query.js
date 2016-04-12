var db = require("./db")
var db_name = 'readr'
var colors = require('colors/safe')

var query = {
  getData: function(table_name, match, key){
    return new Promise(function(resolve) {
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);
        var data = []

        collection.find(match).toArray(function (err, result) {
          if (err) {
            resolve({
              error: {
                message: err
              },
              statusCode: 500
            })
          } else if (result.length) {
            if(key){
              for(var i = 0;i < result.length;i++){
                data.push(result[i][key])
              }
            }else{
              data = result
            }
            resolve({
              data: data
            })
          } else {
            resolve({
              error: {
                message: 'No records found!'
              },
              statusCode: 404
            })
          }
          db.close()
        })
      })
    })
  },

  putData: function(table_name, data) {
    data.id = Math.random().toFixed(8).substr(2)
    data.date_created = new Date().valueOf()

    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        db.collection(table_name).insert([data], function (err, result) {
          if (err) {
            console.log(colors.red(err));
            resolve({
              error: {
                message: err
              },
              statusCode: 404
            })
          } else {
            resolve({
              data: {
                id: data.id
              }
            })
          }
          db.close();
        })
      })
    })
  },

  updateData: function(table_name, match, data){
    return new Promise(function(resolve,reject){
      db.connect(db_name).then(function(db){
        var collection = db.collection(table_name);

        collection.update(
          match,
          data,
          {
            upsert: true
          },function(err, result){
            if (err) {
              console.log('> models/query.js')
              console.log(err)
              resolve({
                error: {
                  message: err
                },
                statusCode: 404
              })
            } else {
              resolve({data: {}})
            }
            db.close()
          }
        )
      })
    })
  }
}

module.exports = query
