'use strict';

const axios = require('axios');

axios.get('https://swapi.co/api/starships/1/').then( httpResponse => {
  //if (httpResponse.data)
  console.log(httpResponse.data);
}).catch(err => {
    console.log('Error:', err);
});