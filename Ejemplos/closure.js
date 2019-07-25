'use strict';

function crear(numero) {
    return {
        porDos: function() { // porDos es un método
            const resultado = numero * 2;
            console.log('el numero es', resultado);
            return numero * 2; // Aquí, la palabra "numero" está vinculado a un contexto fuera del suyo
            //porque las funciones son la que crean contextos en JavaScript, pero este número no pertenece a este contexto
            //nació en un contexto superior.
        }
    };
}

const calculador4 = crear(4);
const calculador6 = crear(6);

console.log(calculador4.porDos());// 8

console.log(calculador6.porDos());// 12

//los métodos creados con closures no pierden nunca el acceso al objeto propietario (no pierden el this por que no lo uso)
setTimeout(calculador6.porDos, 2000)// el número es 8 (y a los 2 segundos) el número es 12.

