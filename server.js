const express = require('express');
const app = express();
const jade = require('jade');
var port = process.env.PORT || 3000;


var routes = require('./routes/routes.js');

app.use(routes);

app.set('view engine', 'jade');

app.get('/', function(reqquest, response){
  response.send('index')
});

app.get('/math', function(reqquest, response){
  response.send('math')
});

app.listen(port, function(reqquest, response) {
  console.log("Listening on port 3000");
});
