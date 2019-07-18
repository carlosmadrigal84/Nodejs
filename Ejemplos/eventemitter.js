'use strict';

// crear un emisor de eventos
const EventEmitter = require('events'); // lo ponemos en mayúscula porque es una clase. Usamos la librería "events"

const emisor = new EventEmitter();

const EVENT_LLAMADA_TELEFONO = 'llamada de teléfono'

// actuar ante eventos
emisor.on(EVENT_LLAMADA_TELEFONO, (info) => { // si sólo hay un argumento, se pueden omitir los parétesis.
    if (info.llamante === 'madre') {
        return;
    }
    console.log('ring ring');
}); // hereda de un evento

emisor.on(EVENT_LLAMADA_TELEFONO, () => { //emisor.once(EVENT_LLAMADA_TELEFONO, () => {  - Aparece sólo un brrr brrr
    console.log('brrr brrr');
});

// emitir eventos
emisor.emit(EVENT_LLAMADA_TELEFONO, { llamante: 'madre' }); // identificador del evento
emisor.emit(EVENT_LLAMADA_TELEFONO, { llamante: 'madre' });