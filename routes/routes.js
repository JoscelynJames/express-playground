const express = require('express');
const router = express.Router();

var pinum = Math.PI;

router.get('/', function(request, response) {
  response.send('<h1>Hello</h1><h2>Welcome to my Express-Playground</h2>')
});

router.get('/math', function(request, response) {
  response.send('<h1>Hello</h1><h2>Welcome to Math</h2>')
});

router.get('/math/pi', function(request, response) {
  response.send('Pi = ' + pinum);
});

router.use('/math/calculate', function(req, res) {
  var operation = req.query.operation;
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var total = 0;

  if(operation === 'add') {
    total = x + y;
  } else if (operation === 'subtract'){
    total = x - y;
  } else if (operation === 'mutliply') {
    total = x * y;
  } else {
    total = x / y;
  };

  console.log( x ,typeof operation, y, typeof total);
   res.send('Total = ' + total);
});

module.exports = router;
