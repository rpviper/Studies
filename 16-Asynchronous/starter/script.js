'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <h4 class="country__region">🏙 ${data.capital}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(2)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
// Old way of getting ajax calls
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`); // This comes from website, uses name
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // [data], before stuff was in [{}], now only in {}
    console.log(data);
    renderCountry(data);

    const neighbor = data.borders?.[0];
    if (!neighbor) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`); // This comes from website, uses alpha, aka country code
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText); // [data2], before stuff was in [{}], now only in {}
      console.log(data2);
      renderCountry(data2, 'neighbour'); // This is the className part
    });
  });
};

getCountry('brazil'); */

/*
// Promises
const getCountry = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`) // Fetch function is returning a promise
    .then(function (response) {
      // Handling the promise
      return response.json(); // Returning another promise
    })
    .then(function (data) {
      // Handling that promise
      renderCountry(data[0]);
    });
};
getCountry('estonia'); */
/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}; */
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      // First when everything works
      if (!response.ok)
        // This ok comes from console again, it is when country name is found or not
        throw new Error(`Country not found (${response.status})`); // Same with the status
      // Throw cancels everything right away same as return does
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Neighbour country
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      // The throw part goes all the way down here where catch is
      console.error(`${err} 💥💥💥`);
      renderError(`Sorry,  ${err.message}. Try again!`); // To catch all the errors, it will display the text message part of the error
    })
    .finally(() => {
      // Finally it means needs to happen no matter what
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('poland');
}); */

// Challenge 1 -------------------------------------------------------------------------------------------------------------------------------------------
const getPosition = function () {
  // This was not part of the challenge
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position=> resolve(position),
    //   err => reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject); // This is the same as the notes code above
  });
};
// getPosition().then(pos => console.log(pos));

/*
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords; // pos.coords come from geolocation
      // Here we get the {} from the console, and it is called latitude and longitude there, so we rename them for us
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
btn.addEventListener('click', whereAmI);

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474); */

/*
const where = async function (country) {
  // Makes the async code look like a sync code
  // Geolocation:
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  // Reverse geocoding:
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  // Country data:
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  renderCountry(data[0]);
}; // We can now save all the variables, we could not do that before with promise
where(); */

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // Encapsulates the fetch
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    // And when error throws a new error
    return response.json(); // And also converts response to json
  });
};
const get3Countries = async function (c1, c2, c3) {
  try {
    const url = 'https://restcountries.com/v2/name/';
    const data = await Promise.all([
      // If you need to load something at the same time
      getJSON(`${url}${c1}`),
      getJSON(`${url}${c2}`),
      getJSON(`${url}${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {}
};
get3Countries('estonia', 'canada', 'tanzania');

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};
Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(1)]) // Of course in real world the timeout is like a minute or more
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success again'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

////////////////////////////////////////////////////////////////////////////////////////////

function timeFaster(time) {
  const result = (time * 60) / 1.25;
  const min = String(Math.trunc(result / 60)).padStart(2, 0);
  const sec = String(Math.trunc(result % 60)).padStart(2, 0);
  return console.log(`${min}:${sec}`);
}
timeFaster(14);
