'use strict';

// Challenge 1 --------------------------------------------------------------------------------------------------------------------------------------
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} goes ${this.speed}km/h`);
};
bmw.accelerate();
mercedes.accelerate();

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} goes ${this.speed}km/h`);
};
bmw.brake();
mercedes.brake();

// Challenge 2 ------------------------------------------------------------------------------------------------------------------------------------------
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} goes ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} goes ${this.speed}km/h`);
    return this; // So it can be used in the child class below for chaining
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50; // So now the setter is used and 50 * 1.6
console.log(ford);

// Challenge 3 --------------------------------------------------------------------------------------------------------------------------------------
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  return console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(95);
console.log(tesla);
tesla.brake();

// Challenge 4 ---------------------------------------------------------------------------------------------------------------------------------------
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().chargeBattery(60).brake().accelerate(); // These are this keywords used for chaining
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
/*
-
-
-
*/
///////////////////////////////////////////////////
const timeFaster = function (time) {
  const result = (time * 60) / 1.25;
  const min = String(Math.trunc(result / 60)).padStart(2, 0);
  const sec = String(Math.trunc(result % 60)).padStart(2, 0);
  return console.log(`${min}:${sec}`);
};
timeFaster(5);
