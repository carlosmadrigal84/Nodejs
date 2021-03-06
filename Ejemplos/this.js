'use strict';

// constructor de objetos
function Coche(ruedas) {
    this.ruedas = ruedas;
    this.cuantasRuedas = function() { // Esto es un método.
        console.log('tiene', this.ruedas, 'ruedas');
    }
}

const todoterreno = new Coche(4);

// donde estén los paréntesis () lo que hay a la izq del punto en esa instrucción es el this.
todoterreno.cuantasRuedas();/* sale en consola 4*/

//setTimeout(todoterreno.cuantasRuedas, 2000); sale en consola undefined
/*
const otraVariable = todoterreno.cuantasRuedas;

//otraVariable(); sale en consola Cannot read property "ruedas" of undefined

const otraVariable = todoterreno.cuantasRuedas.bind(todoterreno);

//otraVariable(); sale en consola tiene 4 ruedas (aquí miramos lo que sale en consola desde la línea 22 a la 24)

setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);
*/
