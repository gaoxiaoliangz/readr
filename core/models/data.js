var query = require("./query");
var Promise = require('bluebird');

var data = {
  getAllBooks:function(){
    return new Promise(function(resolve){
      var data = {abc:"io"};
      var match = null;
      var result = query.getData('books', match);

      result.then(function(val){
        if(val.error){
          data = val;
          console.log(data);
          resolve(data);
        }else{
          data = val;

          for(var i = 0;i < val.data.length;i++){
            delete val.data[i]['book_content'];
          }
          resolve(data);
        }
      });
    });
  }



}

module.exports = data;