'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;

    this.saluda = function() {
        console.log('Hola, me llamo', this.nombre);
    }
    
}

// construir un objeto
const carlos = new Persona('Carlos');

carlos.saluda();// sale en consola Hola, me llamo Luis

