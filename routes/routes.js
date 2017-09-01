const express = require('express');
const router = express.Router();

var pinum = Math.PI;

router.get('/', function(request, response) {
  response.send('<h1>Hello</h1><h2>Welcome to my Express-Playground</h2>');
});

router.get('/math', function(request, response) {
  response.send('<h1>Hello</h1><h2>Welcome to Math</h2>');
});

router.get('/math/pi', function(request, response) {
  response.send('Pi = ' + pinum);
});

router.get('/math/calculate', function(req, res) {
  var operation = req.query.operation;
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var total = 0;

  if(operation === 'add') {
    total = x + y;
  } else if (operation === 'subtract'){
    total = x - y;
  } else if (operation === 'mutliply') {
    total = (x * y);
  } else if (operation === 'divide') {
    total = x / y;
  };
  
   res.send('Total = ' + total);
});

router.use('/math/volume/:length/:width/:height', function(req, res) {
  var length = req.params.length;
  var width = req.params.width;
  var height = req.params.height;
  var volume = length * width * height;

  res.send(`The volume of a ${length}x${width}x${height} rectangle is ${volume}`)
});

router.post('/math/area', function(req, res) {
  var type = req.query.type;
  var radius = req.query.radius;
  var width = req.query.width;
  var height = req.query.height;
  var area = 0;

  if (type === 'circle') { {
    if(radius === undefined) {
      res.send('Invalid')
    }
    area = (Math.PI)*(Math.pow(radius, 2));
    res.send(`Area of a circle with a radius of ${radius} is ${area}`);
    }
  };

  if (type === 'rectangle') {
    if(height === undefined) {
      res.send('Invalid')
    } else if (width === undefined) {
      res.send('Invalid')
    } else {
    area = width * height;
    res.send(`Area of a ${width}x${height} rectangle is ${area}`)
    }
  }
});


module.exports = router;
