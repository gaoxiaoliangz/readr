
// making http request using request
var request = require('request');
request('http://localhost:4000/api/books', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    json.data = body.data;
  }
});
