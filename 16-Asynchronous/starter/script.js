'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const newsection = document.querySelector('.where-i-am-shows-countries');

// render error
// const renderError = function (msg) {
//   // ❌ ERRORE: insertAdjacentElement richiede un elemento, non una stringa.
//   // Corretto: usare insertAdjacentHTML per inserire un messaggio di errore come HTML.
//   countriesContainer.insertAdjacentHTML(
//     'beforeend',
//     `<p class="error">${msg}</p>`
//   );
//   countriesContainer.style.opacity = 1;
// };

// const renderCountry = function (data, className = '') {
//   // ⚠️ Controllo se data esiste per evitare errori se undefined
//   if (!data) {
//     renderError('Country data not found!');
//     return;
//   }
//   const html = `
//           <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages?.[0]?.name || 'N/A'
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies?.[0]?.name || 'N/A'
//               }</p>
//             </div>
//           </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX CALL1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const dataArr = JSON.parse(this.responseText);
//     // ⚠️ Controllo se la risposta è valida e contiene almeno un paese
//     if (!Array.isArray(dataArr) || !dataArr[0]) {
//       renderError('Country not found!');
//       return;
//     }
//     const data = dataArr[0];

//     // render country 1
//     renderCountry(data);

//     // get neighbour country 2
//     // ⚠️ Controllo se borders esiste ed è un array
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;

//     // AJAX CALL COUNTRY 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');

// Funzione fetch base con gestione errori
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       if (!response.ok) throw new Error('Country not found');
//       return response.json();
//     })
//     .then(function (data) {
//       if (!data || !data[0]) throw new Error('No data received');
//       renderCountry(data[0]);
//     })
//     .catch(err => renderError(`Something went wrong: ${err.message}`));
// };
// getCountryData('portugal');

// Versione compatta con arrow function e gestione errori
// const getCountryData2 = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error('Country not found');
//       return response.json();
//     })
//     .then(data => {
//       if (!data || !data[0]) throw new Error('No data received');
//       renderCountry(data[0]);
//     })
//     .catch(err => renderError(`Something went wrong: ${err.message}`));
// };
// getCountryData2('italy');

// Chaining promises con gestione errori
// const getCountryData265 = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     // rejected promise
//     .then(response => {
//       // console.log(response);
//       // rendering su window html
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       if (!data || !data[0]) throw new Error('No data received');
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found');

//       //! 2 chain more API call chaining - other country
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('Neighbour country not found');
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err =>
//       renderError(`Something went wrong 🥶🥶🥶 ${err.message}. Try again`)
//     );
// };
// getCountryData265('france');

// Bottone per mostrare il Portogallo
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// getCountryData265('germany');
// getCountryData265('sdfsdfsdf');

// !CHALLENGE 1
// CREO UNA FUNZIONE
// FETCH HTTP
// THEN RES
// IF ERROR
// THEN DATA
// CATH THE ERROR

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// function whereAmI(lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Problem with geolocoding ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       // console.log(`You are in ${data.city}, ${data.countryName}`);
//     })
//     .catch(err => {
//       console.error(`${err.message} sdkjfhskljdfhsdkjl`);
//     });
// }
// whereAmI(52.508, 13.381);

// RENDERING

// *270 event loop in practice
// console.log('test start');
// setTimeout(() => console.log('0 sec timer', 0));
// Promise.resolve('Resolved promise 1').then(res => {
//   for (let i = 0; i < 100000; i++) {
//     // console.log(res); carefull infinite loop
//   }
// });
// console.log('Test end');

// 271 build a simple promise

// 272 geolocation API

// 274 consuming promises asynch / await

// await fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

//*  FUNZIONE DOVE MI TROVO
// const whereIamAsynch = async function () {
//   try {
//     // ! Geolocation
//     const pos = await getPosition();
//     // console.log(pos);
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // ! reverse geocoding
//     const resGeo = await fetch(
//       ` https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//     );
//     console.log(resGeo);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

// ! country data

//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.countryCode}`
//     );
//     if (!res.ok) throw new Error('Problem getting country datas');
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//     console.log(data);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (error) {
//     console.error(`${error} errore`);
//     renderError(` errore ${error.message}`);
//     throw err;
//   }
// };
// console.log('1: will get the location');
// whereIamAsynch();
// whereIamAsynch()
//   .then(city => console.log(`2 ${city}`))
//   .catch(err => console.error(`2: ${err.message} se c e nel codice`))
//   .finally(() => console.log(`3: finish getting location`));

// console.log('first');

// 275 error handling TRY CATCH

// (async function () {
//   try {
//     const city = await whereIamAsynch();
//     console.log(`2: ${city}`);
//   } catch (error) {
//     console.error(`2: ${error.message} questo e un errore`);
//   }
//   console.log('3: finish getting location');
// })();

//! Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, 
this time using async/await (only the part where the promise is consumed). 
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
console.log('');
setTimeout(() => {
  console.log('-----challenge 3 ------');
}, 1000);

// ! CHALLENGE  3
/* 
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
  */

// ?creo un immagine quando carica appende , se c e un errore reject e quindi dice l immagine non è stata trovata
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

//? 2 INVOKO LA FUNZIONE DELLA CREAZIONE DELL IMMAGINE , dopo
// stampo l immagine nella console , e gli passo
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// riscrivo la funzione crea immagine con loadn pausa immagine
const loadNPause = async function () {
  try {
    // load the first img
    let img = await createImage('img/img-1.jpg');
    console.log('1: first img loaded');
    await wait(2);
    img.style.display = 'none';

    // load second img
    img = await createImage('img/img-2.jpg');
    console.log('2: second img loaded');
    await wait(2);
    img.style.display = 'none';

    // load third image
    img = await createImage('img/img-3.jpg');
    console.log('3: third img loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(
      error,
      'this is an error happen when the promise doesnt work'
    );
  }
};

loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgsEl = Promise.all(imgs);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(
      error,
      'this is an error happening when i try to get the datas from the promise array '
    );
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
