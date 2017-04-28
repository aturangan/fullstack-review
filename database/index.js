var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', function(err, db) {
  if (!err) {
    console.log('We are connected to the database'); 
  }
});

var repoSchema = mongoose.Schema({

  //schema for data from the Github API 
  id: Number, 
  name: String,
  full_name: String, 
  owner: Object

});

var Repo = mongoose.model('Repo', repoSchema);

// Repo.save(function(error) {
//   if (error) {
//     console.log('error'); 
//   } else {
//     console.log('Your repo has been saved to the database');
//   }
// })
// module.exports = Repo;
module.exports = Repo;

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });