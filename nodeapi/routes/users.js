var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { // '/' es un filtro para Express. Ejecutará sólo las peticiones que vayan a la raiz de este router 
  res.send('respond with a resource');
});

module.exports = router;
