var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'readr',
  port: 8889
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
    // console.log(err);
} else {
  console.log(err);
    console.log("Error connecting database ... nn");    
}
});

// app.get("/",function(req,res){
// connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
// connection.end();
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
//   });
// });

app.listen(3000);