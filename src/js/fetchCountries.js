// const axios = require('axios');
import axios from 'axios';

// console.log('this is - fetchCountries.js');

const BASE_URL = 'ttps://restcountries.com/v2/name/{name}';

// old version

// function fetchCountries(name) {
// const PROPERTIES = 'prop=name;capital;population;flag;languages'
//     return fetch(`${BASE_URL}${name}?${PROPERTIES}`).then(response => {
//         return response.json();
//     })
//     .catch(error => {console.log(error)
//     });
// }

async function fetchCountries(name) {
    const PROPERTIES = 'prop=name;capital;population;flag;languages'
    try {
        // add axios-----------

        const response = await axios.get(`${BASE_URL}${name}?${PROPERTIES}`);
        // console.log(response);
        const country = response.data;
        return country;

// bez axios-----------------------------
        // const response = await fetch(`${BASE_URL}${name}?${PROPERTIES}`);
        // const country = await response.json();
        // return country;
// ----------------------------------------
    } catch (error) {
        console.log(error);
    }
}

export default { fetchCountries }
