'use strict';

// creamos una función para usarla como constructor de objetos
function Fruta(nombre) {
    // this es el objeto que se está creando
    this.nombre = nombre; // Lo que simboliza this es lo que se va a meter dentro de limon
    this.setNombre = function(valor) {
        this.nombre = valor;
    }

    this.getNombre = function() {
        return this.nombre;
    }
}

const limon = new Fruta('limon');

console.log(limon);