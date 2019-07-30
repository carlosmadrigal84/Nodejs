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

// En los métodos de los modelos de Mongoose no usar arrow functions (perdemos el this a la instancia)
agenteSchema.statics.list = function({filter, skip, limit, fields, sort}) { 
    const query = Agente.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();
}

// Creamos el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema); // Agente es lo que conexta a este modelo con la base de datos de MongoDB

module.exports = Agente;