var express = require('express');
var bodyParser = require('body-parser');
var user = require('../database');

//correct path?
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos/import', function (req, res) { 

  console.log('USERNAME'), req.body.term;

  var user = {
    url: 'https://api.github.com/users/' + req.body.term + '/repos' + '?client_id=8e1af2e2fd8fdde3efc8&client_secret=731cad15b2fb86040c1c9b20a2b2cbad6b2b7ab3',
    headers: {
      'User-Agent': 'aturangan'
    }
  }

  request(user, function (error, response, data) {
    if (!error) {
      user.id = data[0].id;
      user.name = data[0].name;
      user.full_name = data[0].full_name; 
      user.owner = data[0].owner; 

      res.send(user); 
    } else {
      res.send(404); 
    }
  });
});


app.get('/repos', function (req, res) {
  res.send('get request to /repos'); 

});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});