'use strict';

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

module.exports.multiply = function(a, b) {
    return a * b
}

module.exports.add = suma;
exports.subtract = resta;

