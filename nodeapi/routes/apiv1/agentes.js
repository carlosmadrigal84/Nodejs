'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

router.get('/', (req, res, next) => {
    Agente.find().exec((err, agentes) => {
        if (err) {
            next(err); // escalar el error al gestor de errores
            return;
        }
        res.json({ success: true, agentes: agentes });
    });

});

module.exports = router;

// ----------------------------------------------------------------

'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

router.get('/', async (req, res, next) => {
    try {           // Para los menos expertos en JavaScript, nos recomienda el try y el catch para la gestión de errores.
        const agentes = await Agente.find().exec();
        res.json({ sucess: true, agentes: agentes});
    } catch (err) {
        next(err);
    }
});

module.exports = router;