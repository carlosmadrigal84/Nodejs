'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;

    this.saluda = function() {
        console.log('Hola, me llamo', this.nombre);
    }
}

// construir un objeto
const luis = new Persona('Luis');

luis.saluda();// sale en consola Hola, me llamo Luis

