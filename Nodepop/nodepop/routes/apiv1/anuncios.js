'use strict'

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

/**
 * GET /anuncios
 * Devuelve una lista de anuncios
 * Por ejemplo
 *  http://localhost:3000/apiv1/anuncios?limit=2&skip=2&fields=name age -_id
 */

router.get('/', async (req, res, next) => {
    try {      // Para los menos expertos en JavaScript, nos recomienda el try y el catch para la gestión de errores.
        
        const nombre = req.query.nombre;
        const precio = req.query.precio;
        const skip = parseInt(req.query.skip); // paginar
        const limit = parseInt(req.query.limit); // paginar
        const fields = req.query.fields; // campos de la base de datos
        const sort = req.query.sort; // ordenar 

        const filter = {};

        if (nombre) {
            filter.nombre = nombre;
        }

        if (typeof precio !== 'undefined') {
            filter.precio = precio;
        }

        const anuncios = await Anuncio.list({ filter: filter, skip, limit, fields, sort});

        res.json({ success: true, results: anuncios});
        
    } catch (err) {
        next(err);
    }
});

module.exports = router;
