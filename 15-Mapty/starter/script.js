'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-6); // Taking the date, converting it into string '', and taking last 6 numbers
  // This is of course bad practice to generate ID-s

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance;
    this.duration = duration;
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()] // The moths array takes the month out from 0 - 11. 0 0=> january and so on
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); // And calling it right away
    this._setDescription();
  }
  calcPace() {
    // Making the function here
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // Since it's km/h need to / 60
    return this.speed;
  }
}
// const run = new Running([39, -12], 5.2, 24, 300); // Way to test if everything works as intended
// const cycle = new Cycling([39, -12], 11, 95, 523);
// console.log(run, cycle);

class App {
  #workouts = [];
  #mapZoomLevel = 13;
  #map;
  #mapEvent;
  constructor() {
    this._getPosition(); // app._getPosition(), is called right away
    this._getLocalStorage();
    form.addEventListener('submit', this._newWorkout.bind(this));
    // addEventListener this. keyword will always point to the thing addeventlistener listens to, aka the form in here
    inputType.addEventListener('change', this._toggleElevationField); // Doesn't need any this. keyword since there is no #map, #mapEvent used
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      // If geolocation exists on browser
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          // Regular function call returns this. as undefined
          // That's why we need to bind it
          alert('Could not find position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords; // We can use restructuring, both the latitude and longitude codes work, we just put it in the {}
    const longitude = position.coords.longitude; // This comes from geolocation from console
    // console.log(position);
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // This. keyword would return undefined error before we bind it

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      // It's called here because map needs to be loaded before we can put a marker
      this.renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; // Global event equals local event
    // console.log(mapEvent);
    // This is needed for to get the coords from the map when we click with mouse
    form.classList.remove('hidden'); // Removes hidden class from html
    inputDistance.focus(); // So the mouse will be right away on input
  }

  _hideForm() {
    // prettier-ignore
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''; // Making the fields empty once enter is pressed
    // Uncaught TypeError: Assignment to constant variable error comes when you forget the .value
    form.style.display = 'none';
    form.classList.add('hidden'); // Removes the form in the beginning
    setTimeout(() => (form.style.display = 'grid'), 1000); // To remove the transformation happening in the beginning, in 1 minute
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); // Closest takes the closest parent element
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); // Toggles the hidden class on n off
  }

  _newWorkout(e) {
    e.preventDefault();
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp)); // Takes any input (...inputs) and checks if it's finite number
    const positiveNumbers = (...inputs) => inputs.every(inp => inp > 0); // Checks if inserted numbers are not negative

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value; // Remember all values are alwys inserted as strings, so need to + to make them numbers
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng; // These come from leaflet console
    let workout; // We define it globally so we can use it down below

    // If workout is running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) || // This is the (...inputs) part // If these are all numbers validInputs will come true
        !positiveNumbers(distance, duration, cadence)
        // !Number.isFinite(distance) || // Basically not a letter or a symbol
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
      )
        return alert('Inputs need to be positive numbers!'); // If not, this will be triggered
      workout = new Running([lat, lng], distance, duration, cadence); // Line 120
    }

    // If workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !positiveNumbers(distance, duration)
      )
        return alert('Inputs need to be positive numbers!');
      workout = new Cycling([lat, lng], distance, duration, elevation); // Line 120
    }

    this.#workouts.push(workout); // So it pushes both running and cycling at once
    // console.log(workout);

    this.renderWorkoutMarker(workout);
    this.renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
  }

  // On the map
  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          // .bindPopup(L.popup({})) from leaflet docs
          maxWidth: 200,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`, // 'running-popup' comes from CSS
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'} ${workout.description}`
      )
      .openPopup();
  }

  // On the side the black area
  renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type} " data-id="${
      workout.id
    } ">
    <h2 class="workout__title">${workout.description} </h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'
      } </span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    if (workout.type === 'running')
      html += `
    <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)} </span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence} </span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)} </span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain} </span>
        <span class="workout__unit">m</span>
      </div>
      </li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    if (!this.#map) return; // If you press on map before it is loaded
    const workoutEl = e.target.closest('.workout'); // Anywhere you click in the field will choose it
    // console.log(workoutEl);
    if (!workoutEl) return; // It's a guard
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    ); // If you look at previus console, you see where dataset comes from
    // console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true, // This all comes from leaflet
      pan: {
        duration: 1,
      },
    });
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return; // If no data, return
    this.#workouts = data;
    this.#workouts.forEach(work => {
      this.renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App(); // For some reason I don't completely understand you need this here so line 18 gets called
// app._getPosition();  // Works also when line 19 is not there but here it is

// edit workout
// delete workout
// delete all
// sort workouts by certain field (distance)
// more realistic error messages, maybe fade out after some time
// ability to position the map so you can see all workouts (VERY HARD) leaflet one
// geocode location from coordinates (run in faro, portugal)[only after asyncronous JS section]
// display weather data for workout time and place [only after asyncronous JS section]

/////////////////////////////////////////////////////
/*
/
/
/
/
*/
const timeFaster = function (time) {
  const result = (time * 60) / 1.25;
  const min = String(Math.trunc(result / 60)).padStart(2, 0);
  const sec = String(Math.trunc(result % 60)).padStart(2, 0);
  return console.log(`${min}:${sec}`);
};
timeFaster(18);
