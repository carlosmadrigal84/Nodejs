var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paramenruta/:numero', (req, res, next) => { // después de ":numero" se puede poner una ? para marcar que ese parámetro es opcional.
  console.log('req.params', req.params);
  res.send('ok');
  /*next();*/
});

router.get('/params/:id/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok');
});

router.get('/enquerystring', (req, res, next) => {
  console.log('req.query', req.query);
  res.send('ok');
})

router.post('/rutapost', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok'); // con esto usar postman. Entorno para desarrollo de API 3:47:00 hace cosas en postman
})
module.exports = router;