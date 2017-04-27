var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {

  console.log('Post requested'); 

  res.send('post request to /repos/import');

});

app.get('/repos', function (req, res) {
  console.log('The request was received');

  res.send('get request to /repos'); 

});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//what file to add the ajax/jquery?
//every time you send a get request on post man, it'll 
//console log to the terminal 

// When a user types a github username into the text field, 
// use jQuery's ajax method to send a POST request to /repos/import (you'll 
// have to fix the bug in the Search Component first).