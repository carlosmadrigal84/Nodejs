'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number,
    /*https://mongoose.jscom/docs/schematypes.html
    email: {
        type: String,
        index: true,
        unique: true,
        default: ''
    }*/
}
//, { collection: 'agentes'} para saltarse la pluralización
);

// Creamos el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;