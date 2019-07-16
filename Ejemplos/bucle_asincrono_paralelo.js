'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos.
function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000)
}

// mandar 5 consultas en paralelo. Saca en pantalla empiezo y fin y después termino y texto 5 veces cada uno y 
// cada vuelta no espera a la anterior.
for(let n = 0; n< 5; n++) {
    escribeTras2Segundos('texto', function() {
        console.log('termino');
    });
};

console.log('fin');