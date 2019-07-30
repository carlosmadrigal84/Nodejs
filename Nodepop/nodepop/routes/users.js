var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio')

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*var anuncio = new Anuncio({nombre: 'Smith', venta: true, precio: 20, foto: 'String', tags: ['1', '2']}); 
  anuncio.save(function (err, anuncioCreado) {    
    if (err) throw err;    
    console.log('Anuncio ' + anuncioCreado.nombre + ' creado');
   });*/

  res.send('respond with a resource');
});

module.exports = router;
