
// console.log('this is - fetchCountries.js');
const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

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
        const response = await fetch(`${BASE_URL}${name}?${PROPERTIES}`);
        const country = await response.json();
        return country;
    } catch (error) {
        console.log(error);
    }
}

export default { fetchCountries }
