var express = require('express');

//correct path?
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) { 

  //request parameters?
  //need to save term somehow 
  //is the request library working?

  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(req + user_id + ' ' + token + ' ' + geo);
});

//   request('https://developer.github.com/v3/', function(error, response, body) {
//     console.log('error:', error); // Print the error if one occurred 
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//     console.log('body:', body);
//   });

//   //store term in post request 
//   //use npm request library to fetch user's github
//   //repositories from the Github API

//   res.send('THIS IS THE REQ');

// });

app.get('/repos', function (req, res) {

  res.send('get request to /repos'); 

});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});