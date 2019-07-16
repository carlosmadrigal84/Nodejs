'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos.
function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000)
}

// bucle asíncrono en serie
// llamar a una función con cada elemento de un array en serie, y al terminar llamar al callback de finalización
function serie(arr, fn, callbackFinalizacion) {
    if (arr.length == 0) {
        callbackFinalizacion();
        return;
    }
    n = n - 1; // Para que salga texto4, texto3, texto2 ...
    fn('texto' + arr.shift(), function() { // fn() sería la llamada a escribeTras2Segundos
        serie(n, fn, callbackFinalizacion);
    })
}
serie( [1, 2, 3, 4, 5], escribeTras2Segundos, function() {
    console.log('fin');
})

