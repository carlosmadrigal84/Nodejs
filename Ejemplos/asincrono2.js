'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos.
function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000)
}

escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2', function() {
        console.log('termino2');
    });

});