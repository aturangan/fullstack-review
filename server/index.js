var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

//correct path?
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos/import', function (req, res) { 

  //console.log('USERNAME'), req.body.term;

  var user = {
    url: 'https://api.github.com/users/' + req.body.term + '/repos' + '?client_id=8e1af2e2fd8fdde3efc8&client_secret=731cad15b2fb86040c1c9b20a2b2cbad6b2b7ab3',
    headers: {
      'User-Agent': 'aturangan'
    }
  }

  request(user, function (error, response, data) {
    var post = JSON.parse(data);
    console.log('POSTTT', post);

    post.forEach(item => {
      db.findOne({repo: item.full_name}, function(error, data) {
        
        if (data) {
          console.log('duplicate repo'); 
        } else {
          var DB = new db({
            id: item.id,
            name: item.name,
            full_name: item.full_name,
            owner: item.owner
          });

          DB.save(function(error) {
            if (error) {
              console.log('Error Saving to Database'); 
            } else {
              console.log('Repository Saved to Database'); 
            }
          });
        }

        console.log('DATABASE', DB);
      })
    })
  })
  res.end();
})


app.get('/repos', function (req, res) {
  DB.find(function(err, item) {
    if (err) {
      console.log(err);
    } else {
      res.send(item);
      console.log('GET REQUEST');
    }
  })

})

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});