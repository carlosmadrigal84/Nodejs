'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
}


// construir un objeto
const luis = new Persona('Luis')
const pepe = new Persona('Pepe')
const manolo = new Persona('Manolo')

Persona.prototype.saluda = function() {
    console.log('Hola, me llamo', this.nombre);
}
   


luis.saluda();// sale en consola Hola, me llamo Luis

// Herencia de persona -------------------------------------------

// constructor de Agentes
function Agente(nombre) {
    // heredar el constructor de personas
    Persona.call(this, nombre);// call o Apply llaman a la función con el this o Apply que me apetezca 
}

// heredamos sus propiedades y métodos
Agente.prototype = Object.create(Persona.prototype); 
Agente.prototype.constructor = Agente;

const smith = new Agente('Smith');

smith.saluda(); // sale en consola Hola me llamo Smith

console.log(
    smith instanceof Agente,
    smith instanceof Persona, 
    smith instanceof Object,
);

// Herencia múltiple ---------------------------------------

// Mixin Supeheroe
function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    }
    this.esquivabalas = function() {
        console.log(this.nombre, 'esquiva balas');
    }
}

// copiar todas las propiedades y métodos de Superheroe al prototipo del Agente

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivabalas();