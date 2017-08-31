const express = require('express');
const router = express.Router();
var pinum = Math.PI;
router.get('/pi', function(reqest, response) {
  response.send('Pi = ' + pinum);
});

module.exports = router;
