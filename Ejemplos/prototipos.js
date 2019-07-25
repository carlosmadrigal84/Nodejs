'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;

    this.saluda = function() {
        console.log('Hola, me llamo', this.nombre);
    }// El problema de esto es que cada vez que llame a la función saluda, se va a crear una función guardada
    // en memoria, y si la llamo 1000 veces, habrá 1000 funciones en memoria. Por eso es mejor hacer el ejemplo 
    // del archivo prototipos2.js
    
}

// construir un objeto
const carlos = new Persona('Carlos');

carlos.saluda();// sale en consola Hola, me llamo Carlos

