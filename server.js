const express = require('express');
const app = express();
const jade = require('jade');
var port = process.env.PORT || 3000;

var pi = require('./routes/pi.js');

app.use(pi)

app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.send('<h1> Go to /pi </h1> ')
})

app.listen(port, function(req, res) {
  console.log("Listening on port 3000");
})
