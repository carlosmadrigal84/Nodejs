var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // __dirname es la ruta absoluta de la carpeta 
app.engine('html', require('ejs')._donde estoy
app.set('view engine', 'ejs'); // __filename es la ruta absoluta del fichero que ejecuto. Dichas rutas aparecen en consola_express);

// Middlewares: una app de express es una lista de Middlewares. Es una función con 3 parámetros(req, res, next).
app.use(logger('dev')); // Este looger usa la librería "morgan", de la línea 5
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/pdf', express.static(path.join(__dirname, 'd:\pdfs'))); Para servir todas las peticiones que te pidan en pdf y vas a buscar ficheros estáticos en d:\pdfs
//con esta línea de encima puedes añadir todos los routers de estáticos que te de la gana

/**
* Conexión con la base de datos
*/
require('./lib/connectMongoose');
require('./models/Agente');

app.use((req, res, next) => {
  // Tiene que hacer una de 2 cosas:
  // - o Responder
  // res.send('ok');
  // - o llamar a next
  next();// Si le pasamos algo a next, hay que intentar que sean objetos que tengan una propiedad message.
  //Una buena práctica es hacer: next(new Error('cosa mala'));
  // Si os da error: Cannot set headers after they are sent to the client
  // Significa que he respondido 2 o más veces.
})

/**
* Rutas de mi API
*/
app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));

app.locals.title = 'NodeAPI';

/**
 * Rutas de mi aplicación web
 */
app.use('/',        require('./routes/index')); // Esto son routers.
app.use('/users',   require('./routes/users')); // Un router es un grupo de Middlewares.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // comprobar error de validación
  if (err.array) { // error de validación
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true})[0];
    err.message = `Not valid - ${errInfo.param} ${errInfo.msg}`;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
