'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos.
function escribeTras2Segundos(texto) {
    setTimeout(function() {
        console.log(texto);
    }, 2000)
}

escribeTras2Segundos('texto');
console.log('termino');