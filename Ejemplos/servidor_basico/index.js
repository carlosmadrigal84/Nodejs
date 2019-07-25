//cargar libreria http
const http = require("http");
const Chance = require('chance'); // libreia chance sirve para sacar nombres aleatorios cada vez que actualizamos el navegador.

const chance = new Chance();
//definir un servidor
const server = http.createServer( function(request, response) {
    // cada petición se ejecuta esto
    response.writeHead(200, {'Content-Type': 'text/html'}); // Esta línea es un Middleware.

    response.end('Wake up, ' + chance.name());

})

//arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337'); // Para arrancar un servidor vale esa dirección o ponemos otra?
