'use strict';

/* GIT 
…or create a new repository on the command line
echo "# lol" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rpviper/lol.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/rpviper/lol.git
git branch -M main
git push -u origin main
*/

/* 4 STEPS TO SOLVE A PROBLEM

1. MAKE SURE YOU 100% UNDERSTAND THE PROBLEM. ASK THE RIGHT QUESTIONS.
    We need a function that reverses whatever we pass into it.
    * What is the whatever? Is it a String, a Number, an array?
    * Do we need to return it?
    * Do we return it as original value or as a string*
2. DIVIDE AND CONQUER: BREAK A BIG PROBLEM INTO SMALLER CHUNKS
3. DO RESEARCH RESEARCH RESEARCH
4. FOR BIGGER PROBLEMS WRITE PSEUDO-ConvolverNode, BEFORE WRITING AN ACTUAL CODE.

function reverse(value) {
    if value type !string && !number && !array
    return value

    if value type === string
    reverse string
    if value type === number
    reverse number
    if value type === array
    reverse array

    return reversed value
} */

/*
Best practices:
READABLE CODE
* Write code that others can understand
* Write code you can understand in 1 year
* Avoid too 'clever' code, simple code is the best usually
* Use descriptive variable names: what they contain
* Use descriptive function names: what they do

GENERAL
* Use don't repeat yourself principle (refactor your code)
* Don't pollute global namespace, encapsulate instead
* Use strong type checks (=== and !==)

FUNCTIONS
* Generally, functions should do one thing
* Don't use more than 3 function parameters
* Use default parameters whenever possible
* Generally, return same data type as received (number inserted, number returned)
* Use arrow functions when they make code more readable

OOP
* Use ES6 classes
* Encapsulate data and don't mutate it from outside the class
* Implement method chaining
* Do not use arrow functions as methods (in regular objects)

AVOID NESTED CODE
* Use early return (guard clauses)
*  Use ternary (conditional) or logical operators instead of if
* Use multiple if instead of if/else-if
* Avoid for loops, use array methods instead (map, filter and reduce)
* Avoid callback-based asynchronous API-s

ASYNCHRONOUS CODE
* Consume promises with async/await for best readability
* Whenever possible, run promises in parallel (Promise.all)
* Handle errors and promise rejections
*/

// console.log("Raino")    // Raino and 23 are values
// console.log(23)

let firstName = 'Raino'; // firstName is declaring a variable, means the variable can change
// console.log(firstName)

2 ** 3; // 2 to the power of 3 aka 2 * 2 * 2

// 7 PRIMITIVE DATA TYPES ---------------------------------------------------------------------------------------------------------------------------

let age = 23; // Number
let name = 'Raino'; // String, used for text
let fullAge = true; // Boolean, used for taking decisions, either true or false
let children; // Undefined, empty value, can be added later
// Null, also means emopty value
// Symbol, value that is unique and can't be changed
// BigInt, larger integers than the Number type can hold

// -------------------------------------------------------------------------------------------------------------------------------------------------

let javaScriptIsFun = true; // Simply changing the variable
javaScriptIsFun = 'Yes!';

const rainoBirthYear = 1982;
let currentYear = 2022;
let rainoAge = currentYear - rainoBirthYear;
// console.log(rainoAge)

const rainoNew = `I'm ${firstName}, a ${rainoAge} year old man.`; // Template literal, those are back ticks ``, after the question mark

// IF ELSE ---------------------------------------------------------------------------------------------------------------------------------------

const sarahAge = 18;

if (sarahAge >= 18) {
  // console.log(`Sarah can start driving license.`);
} else {
  const yearsLeft = 18 - sarahAge;
  // console.log(
  `Sarah is too young, she needs to wait another ${yearsLeft} years`;
  // );
}

const yearOfBirth = 1998;

let century; // We don't declare century here so we can change it later
if (yearOfBirth <= 2000) {
  century = 20; // Here we don't use let anymore
} else {
  century = 21;
}
// console.log(century)

// 5 Falsy values are: 0, '' (an empty string), undefined, null, NaN (not a number)
// They will become false value when converted in/to boolean

// console.log(Boolean(0))         // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean('Raino'))   // true
// console.log(Boolean({}))        // true
// console.log(Boolean(''))        // false

const money = 1; // Changing this to 0 changes outcome
if (money) {
  // console.log('Dont sepnd it all at once');
} else {
  // console.log('Youre a poor bastard!');
}

// AND (&&), OR (||), and !not boolean values

/*
AND is true where all is true, when even one false, it's false
OR is true when at least one is true, even if all else is false
!not changes to the opposite, true to false, false to true

age = 16

A: Age is greater or equal 20  = false
B: Age is less than 30         = true

!A       = true
A && B   = false
A || B   = true
!A && B  = true
A || !B  = false
*/

// Switch statement -----------------------------------------------------------------------------------------------------------------------------

const day = 'Friday';

switch (day) {
  case 'Monday':
    // console.log('Go to work');
    break;
  case 'Tuesday':
    // console.log('Do studying');
    break;
  case 'Thursday':
  case 'Friday':
    // console.log('Get ready for the weekend');
    break;
  case 'Saturday':
    // console.log('Have a rest');
    break;
  default:
  // console.log('Not a valid day');
}

// The conditional (Ternary) operator (? :) ----------------------------------------------------------------------------------------------------------

const age1 = 20;
// const age1 = 15

age1 >= 18;
// ? console.log('This person can drink 🍸') // ? is like an and/if, : is else
// console.log('This person is not drinking age yet.')

// const drink = age1 >= 18 ? 'Drink 🍸' : 'No drinks for you'
// console.log(drink)

// console.log(`I like to drink ${age1 >= 18 ? 'wine 🍸' : 'water'}`)

// In between 50 and 300 for example -------------------------------------------------------------------------------------------------------------

// const tip = bill >= 50 && bill <= 300

// Function --------------------------------------------------------------------------------------------------------------------------------------

function declaration(a, b) {
  // Declaration function
  return a + b;
}

const expression = function (a, b) {
  // Expression function
  return a + b;
};

const arrow = (a, b) => a + b; // Arrow function

function logger() {
  // console.log('My name is Raino');
}

// logger()    // calling / running / invoking the function
// logger()    // As many times as you want later in the code too
// logger()

function fruitProcessor(apples, oranges) {
  const juice = `Here is your juice with ${apples} apples and ${oranges} oranges`;
  return juice; // Have to return this otherwise it's undefined
}
const appleJuice = fruitProcessor(5, 2); // You have to declare it before you can call it
// console.log(appleJuice);
// console.log(fruitProcessor(10, 5))  // You can also  do it directly here

// FUNCTION DECLARATION
function calcAge(birthYear) {
  // BirthYear is a parameter
  return currentYear - birthYear; // Can put the calculation straight here without declaring it
}
const age2 = calcAge(1991); // The 1991 is argunent

// FUNCTION EXPRESSION
const calcAge1 = function (birthYear) {
  // Same code can be written like this
  return currentYear - birthYear;
};
const age3 = calcAge1(1991);
// console.log(age2, age3)

// Arrow function ---------------------------------------------------------------------------------------------------------------------------------

const calcAge2 = birthYear => currentYear - birthYear; // Without {} you can have a one line function
const age4 = calcAge2(1982);
// console.log(age4)

const yearsUntilRetirement = (birthYear, firstName) => {
  // In multiple line of code we still need to use {}
  const retireeAge = currentYear - birthYear;
  const retirement = 65 - retireeAge;
  // return retirement;                          // And also we need the return statement
  return `${firstName} retires in ${retirement} years.`;
};
// console.log(yearsUntilRetirement(1982, 'Raino'));
// console.log(yearsUntilRetirement(1975, 'Bob'));

// Function calling functions --------------------------------------------------------------------------------------------------------------------------

// const cutFruitPieces = fruit => fruit * 4;   This code is correct, but won't be read, uncaught error

function cutFruitPieces(fruit) {
  return fruit * 4;
}
/*
Code inside the code is good practice, if you for example wanna change cut fruit to 3 pieces one day, 
you can simply do it by changing this code, and every other function where this is used
follows suit */

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Here is your juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}
const orangeJuice = fruitProcessor(5, 10);
// console.log(orangeJuice);
// ---------------------

const howOld = function (birthYear) {
  return currentYear - birthYear;
};
const yearsUntilRetirement1 = (birthYear, firstName) => {
  const age = howOld(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    // console.log(`${firstName} retires in ${retirement} years.`);
    return retirement; // Return needs to be always after, otherwise problems
  } else {
    // console.log(`${firstName} has already retired.`);
    return -1;
  }
};
// console.log(yearsUntilRetirement1(1982, 'Raino'));
// console.log(yearsUntilRetirement1(1950, 'Bob'));

// Arrays ----------------------------------------------------------------------------------------------------------------------------------

const friends = ['Michael', 'John', 'Peter']; // To put something in the array
// console.log(friends[0]);    // To get something out of the array, zero based, will be Michael
// console.log(friends.length);    // Number of elements in the array
// console.log(friends[friends.length - 1]);   // Will get the last element of the array
friends[2] = 'Jay'; // Now the Peter is changed to Jay
// let birthYear = 1982;
// const Raino = [firstName, 'Paal', currentYear - birthYear, friends]; // It's all valid, even the friends array in here
const years = [1990, 1992, 2000, 2002];

function calcAge(birthYear) {
  return currentYear - birthYear;
}
const ageAge = calcAge(years[0]);
const ageAge1 = calcAge(years[1]);
const ageAge2 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

// ADDS ELEMENTS
friends.push('Rudolph'); // Pushes Rudolph in the end of the array
friends.unshift('Tom'); // Pushes Tom in the beginning of the array

// REMOVES E`LEMENTS
friends.pop(); // Removes the last element
friends.shift(); // Removes the first element

// CHECKING IF SOMETHING IS IN THE ARRAY
// console.log(friends.includes('Michael'));   // Will show true
// console.log(friends.includes('Bob'));   // Will show false

// Objects ---------------------------------------------------------------------------------------------------------------------------

const raino = {
  firstName: 'Raino', // Each of these are called properties
  lastName: 'Ace', // They are shown afterwards aphabetically
  birthYear: 1982,
  job: 'student',
  friends: ['Michael', 'Tom', 'Bob'],
  hasDriversLicense: false,

  // calcAge: function(birthYear) {      // You can insert functions into objects
  //     return currentYear - birthYear;
  // }

  calcAge: function () {
    return currentYear - this.birthYear; // 'This' means the object where it is in, aka raino
    // For example you wanna change the raino object to something else, the 'this' will automatically then also update
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job},
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driving license `;
  },
};
// console.log(raino.getSummary())

raino.location = 'Estonia'; // Will add location to raino object

// console.log(raino.job);     // Dotted notation
// console.log(raino['job']);  // Bracket notation

const nameKey = 'Name';
// console.log(raino['first' + nameKey]);  // Only with the bracket notation you can do stuff like this
// console.log(raino['last' + nameKey]);

// console.log(raino.calcAge(birthYear));
// console.log(raino.calcAge());       // We don't need the birthYear anymore since of the 'this' keyword

// const interestedIn = prompt(`What would you want to know about Raino?
// Choose between firstName, lastName, age, job or friends`)

// if (raino[interestedIn]) {
//     console.log(raino[interestedIn])
// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job or friends`)
// }

// console.log(`${raino.firstName} has ${raino.friends.length} friends, and his best friend is ${raino.friends[0]}`)

// Loops ------------------------------------------------------------------------------------------------------------------------------------------

for (let repetition = 1; repetition <= 10; repetition++) {
  // for loop keeps running until condition is true
  // Repetition is from 1 - 10, increase by 1
  // console.log(`Lifting weights repetition ${repetition}`)
}

const rainoArray = [
  'Raino',
  'Ace',
  'student',
  currentYear - birthYear,
  ['Michael', 'Bob', 'Rob'],
];

const types = [];

for (let i = 0; i < rainoArray.length; i++) {
  // console.log(rainoArray[i])

  /* i has been a counter for programmers, 0 is the first element in array. 
i < .length is to get the length of the array to loop through array.
i++ means to loop through every single line. */

  types[i] = rainoArray[i]; // Two ways how to fill arrays
  types.push(rainoArray[i]);
  // console.log(types[i])
}
// -----------
const years1 = [1982, 1990, 1995, 2001];
const agesToCalculate = [];

for (let i = 0; i < years1.length; i++) {
  agesToCalculate.push(currentYear - years1[i]); // Pushing the ages to the empty array
}
// console.log(agesToCalculate)
// ---------------------
// console.log('---ONLY STRINGS---')
for (let i = 0; i < rainoArray.length; i++) {
  // If there is not a string continue
  if (typeof rainoArray[i] !== 'string') continue;
  // console.log(rainoArray[i])
}
// console.log('---BREAK WITH A NUMBER---')
for (let i = 0; i < rainoArray.length; i++) {
  // When first number is found, break/end the loop completely
  if (typeof rainoArray[i] === 'number') break;
  // console.log(rainoArray[i])
}

for (let i = rainoArray.length - 1; i >= 0; i--) {
  // This is the array backwards
  // console.log(rainoArray[i])
}

for (let exercise = 1; exercise <= 3; exercise++) {
  // Loop inside the loop
  // console.log(`Pushups set ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    // console.log(`Rep ${rep}`)
  }
}

let rep = 1; // Same code written with while loop, more versatile
while (rep <= 10) {
  // console.log(`Rep number ${rep}`)
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // Math.trunc gets rid of comma places
// It gives us number between 0-5, so we add +1 to get it to 6
while (dice !== 6) {
  // If it hits 6 it stops
  // console.log(`You rolled a ${dice}`);    // If you only keep code to this it will crash (infinite loop)
  dice = Math.trunc(Math.random() * 6) + 1;
  // if (dice === 6) console.log('You rolled now a 6')
}

// Example problem -------------------------------------------------------------------------------------------------------------------------
// Problem 2, function now should get 2 arrays of temps, merge them

// Calculate the temperature amplitude

// 1) Understanding the problem
// What is temperature amplitude? -- difference between highest and lowest
// How to compute max and min temp?
// What's an sensor error and what to do?

// 2) Breaking into sub problems
// How ro ignore errors?
// Find min, max in temp array
// Subtract min from max (amplitude) and return it.
// Problem 2, merge the two arrays

const temp1 = [3, -22, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [8, -3, -6, 0, 'error', 9, 13, 'error', 2, 14, 19, 5];

const temperatures = temp1.concat(temp2); // Merge the arrays

const calcTempAmplitude = function (temperatures) {
  let max = temperatures[0]; // Here we start to first insert all the array numbers one by one into function
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];
    if (typeof curTemp !== 'number') continue; // Aka ignore the 'error' part since its not a number

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    // We compare the numbers, is 3 bigger than -2, yes it is,
    // then 3 is compared to -6, -1 until 9, then 9 becomes new max
    // Then 9 > 13 and so on.   max = temperatures[i], aka new max number
  }
  // console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, -1, 2, 85, 2]);
const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
// -----------------------------------------------------------------------------------------------------------------------------------------------

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt("Degrees celcius:")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
// console.log(measureKelvin());

// Selecting a DOM element -------------------------------------------------------------------------------------------------------------------------

document.querySelector('.message').textContent = 'Whatever you wanna say here';
// A class selector, selects this: <p class="message">Start guessing...</p>

document.querySelector('.guess').value = 23; // Is an input field

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value); // Clicking with mouse from class check does the console log function
});

document.querySelector('body').style.backgroundColor = '#60b347'; // CSS selection from body, then style, then background-color
// Written in camelcase in JavaScript background-color = backgroundColor

const displayMessage = function (message) {
  document.querySelector('.message').textContent = 'Some message'; // Making queryselector into a function so you don't
}; // have to type it over and over again

document.querySelectorAll('.show-modal'); // It is used for something that has multiple items you have to choose/loop

modal.classList.remove('hidden'); // To manipulate classes

document.addEventListener('keydown', function () {}); // To listen to a keyboard

document.querySelector('#score--0'); // This is an ID selector from CSS

// SCOPES ------------------------------------------------------------------------------------------------------------------------------------------------
// Scope chain, is the order in which functions are written in the code
// Calls stack is the order in which functions are called
// Global scope
const me = 'Raino';
const born = 1982;
/* Outside of any function or block
Variables declared in global scope are accessible everywhere */

// Function scope / Local scope
// ReferenceError
/* Varables are only accessible inside function, not outside */

// Block scope
if (year >= 1981 && year <= 1991) {
  const millenial = true;
}
// console.log(millenial); // ReferenceError
/* Variables are only accessible inside the block
It only applies to let and const, var will work
Functions are also block scoped */

function calcBornAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${rainoFirstName}, you are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1991) {
      const rainoFirstName = Steven;
      const str = `And you're a millenial ${rainoFirstName}`; // This here now will turn to Steven since it's closer
      // console.log(str); // Will work

      function add(a, b) {
        return a + b;
      }
      add(2, 3); // Will work
    }
    // console.log(str); // Will throw ReferenceError
    add(2, 3); // Will throw ReferenceError, because local function
  }
  printAge();
  return age;
}

const rainoFirstName = 'Raino';
calcBornAge(1982);
// console.log(age); // ReferenceError
printAge(); // ReferenceError

// -------------------------------------

const myName = 'Jonas';

if (myName === 'Jonas') {
  // console.log(`${job}`); // ReferenceError: cannot acces 'job' before initialization
  const age = 2022 - 1982;
  // console.log(age);
  const job = 'teacher';
}

// This keyword ---------------------------------------------------------------------------------------------------------------------------------------

const calcAge3 = function (birthYear) {
  // console.log(2022 - birthYear);
  // console.log(this); // Will be undefined
};
calcAge3(1982);

const calcAgeArrow = birthYear => {
  // console.log(2022 - birthYear);
  // console.log(this); // Will be window, because arrow function doesn't get its own this keyword
};
calcAgeArrow(1982);

const jonas = {
  year: 1991,
  calcAge: function () {
    // console.log(this); // Will be the whole jonas object
    // console.log(2022 - this.year);
  },
};
jonas.calcAge();

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Problems with changing values
// Primitives type example
let age5 = 30;
let oldage = age5;
age5 = 31;
// console.log(age5); // 31
// console.log(oldage); // Will be now 30

// Reference type example
const jessica = {
  name: 'Jessica', // Because these are references only, they will change
  age: 30,
};
const friend = jessica;
friend.age = 27;

// console.log('friend:', friend); // {name: 'Jessica', age: 27}
// console.log('Me:', jessica); // {name: 'Jessica', age: 27}

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['John', 'Mary'], // Because these are nested deeper than just first level, see line 618
};
const jessicaCopy = Object.assign({}, jessica2); // Assigning to an empty object {}
jessicaCopy.lastName = 'Davis';
// console.log('Before marriage:', jessica2); // {lastName: 'Williams'}
// console.log('After marriage:', jessicaCopy); // {lastName: 'Davis'}
jessicaCopy.family.push('Peter'); // Doing this will not replace family array, but add names
jessicaCopy.family.push('Victor'); // to both jessicaCopy and jessica2 objects

// Array destructuring --------------------------------------------------------------------------------------------------------------------------------

const array = [2, 3, 4];
const [x, y, z] = array;
// console.log(x, y, z); // 2, 3, 4, it won't change the original array

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // this.o of course means restaurant object here
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // You can also use default values here, so whenever restaurant.orderDelivery is not filled in, defaults are used
    // Aka: orderDelivery: function ({ starterIndex = 1, mainIndex, time = '12:00', address })
    //     console.log(`Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}
    // will be delivered to ${address} at ${time}`); // When i used only ${mainIndex} and ${starterIndex}, it only showed as 2 and 2
    // If I left out the this. keyowrd, it throws error altogether
  },

  orderPasta: function (ing1, ing2, ing3) {
    // Spread operator example, line 748
    // console.log(
    //   `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    // );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    // Line 790
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Elva 26',
  mainIndex: 2,
  starterIndex: 2,
});

const [esimene, , second] = restaurant.categories; // As you can see you can write whatever, it counts them
// And leaving a cap just skips the one left
// console.log(esimene, second); // Italian, Vegetarian

let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // Switches them around
// console.log(main, secondary); // Before it was Italian Vegetarian, now its Vegetarian Italian

restaurant.order(2, 0);
// console.log(restaurant.order(2, 0)); // Will be garlic bread and pizza
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Garlic bread and pizza

// Nested arrays destructuring
// prettier-ignore
const nested = [2, 4 [5, 6]]
const [a, , b] = nested;
// console.log(a, b); // 2 [5, 6]
const [i, , [j, k]] = nested;
// console.log(i, j, k); // Now gives us 2, 5, 6 without array []

// Object destructuring -----------------------------------------------------------------------------------------------------------------------------
const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);
const {
  restaurantName: pizzaRestaurant,
  openingHours: hours,
  categories: tags,
} = restaurant;
// Changes all the names as shown

const { menu = [], starterMenu: starters = [] } = restaurant;
// It creates a menu line inside restaurant object, with an empty array
// Changes the starterMenu to starters, but keeps everything what was in there

// Mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c: 14 };
// prettier-ignore
({a1, b1} = obj)
// Needs to have () for change
// console.log(a1, b1); // 23 7

const {
  fri: { open, close },
} = openingHours;
// console.log(open, close); // 11 23

// The spread operator ... --------------------------------------------------------------------------------------------------------------------------
// Iterables are arrays, strings, maps, sets, but NOT objects

const arr = [7, 8, 9];
const newArray = [1, 2, ...arr]; // Takes everything that's in arr and adds it to the end
// console.log(newArray); // [1, 2, 7, 8, 9] but it leaves the array [] around it
// console.log(...newArray); // 1, 2, 7, 8, 9 removes the array [] brackets*

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// We make a new array named newMenu, which grabs everything from old mainMenu and adds also Gnocci

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Strings example
const str = 'Jonas';
const letters = [...str, '', 'S.'];
// console.log(letters); // 'J', 'o', 'n', 'a', 's', '', 'S.'
// console.log(...str); // J o n a s without the ''
// console.log(`${...str}`); will NOT work

const ingredients = [
  // prompt(`Ingredient 1?`),
  // prompt(`Ingredient 2?`),
  // prompt(`Ingredient 3?`),
];
restaurant.orderPasta(...ingredients); // Will display what is typed into prompt

// Object example
const newRestaurant = { foundedIn: 1991, ...restaurant, founder: 'Mario' };
// You can use the spread wherever, the order doesn't matter. foundedIn and founder are new and added

// Rest method ... ------------------------------------------------------------------------------------------------------------------------------------
// Spread operator is on the right side of =, rest is on the left side
const [c, d, ...others] = [1, 2, 3, 4, 5]; // Pushed the rest into others
// console.log(c, d, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  // Rest method needs to be the last ...otherFood
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// Objects
const { sat, ...weekdays } = restaurant.openingHours;

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};
add(2, 3); // The rest takes them all, no matter how many numbers
add(4, 5, 6, 7);
add(1, 2, 5, 8, 3, 5, 8);
const e = [23, 5, 7];
add(...e); // Adds new array e no problem

restaurant.orderPizza('mushrooms', 'onion', 'tomato', 'olives');
// Rest method, mushrooms is main ingredient, rest are all in separate array, called other ingredients

// Short-circuiting (&& and ||) -----------------------------------------------------------------------------------------------------------------------------------
// Use any data type, return any data type. Finding first truthy value and it will simply ignore the rest
// console.log(3 || 'Jonas'); // 3 => Both truthy values, but 3 is first
// console.log('' || 'Jonas'); // Jonas => '' is falsy
// console.log(true || 0); // true
// console.log(undefined || null); // null => both falsy, so the last value is returned

// restaurant.numGuests = 23 // If we declare this then the bottom comes to 23
const guests = restaurant.numGuests || 10;
// Do we have any guests in the restaurant? If not then set the value to 10

// And returns the first falsy value, basically opposite the OR
// console.log(0 && 'Jonas'); // 0 => first falsy
// console.log(7 && 'Jonas'); // Jonas, simply returns the last value since no falsy found

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// Checks if restaurant.orderPizza even exists (if it wouldn't, it would stop asap because of short circuit)
// And then checks the other part

// Nullish assigment operator is used with 0 and undefined, since they return falsy value, but they are needed sometimes ??
const rest1 = {
  numberOfGuests: 0, // Totally acceptable to have only 0 guests, but || will return it as falsy
};
const rest2 = {
  name: 'La Plaza',
};
rest1.numberOfGuests = rest1.numberOfGuests || 10; // See if numberOfGuests exists, if not change to 10
rest1.numberOfGuests ||= 10; // Shorthand way to write it
// The above example will change rest1 to 10, which is wrong since 0 is valid guests quantity
rest1.numberOfGuests ??= 10; // Have to use the nullish assignment in this case

// Looping arrays ------------------------------------------------------------------------------------------------------------------------------------
const myMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of myMenu); // It's to get all the products
// console.log(item);

for (const [item, element] of myMenu.entries()) {
  // Because .entries makes two elements place number and the menu element, we restructure it as [item, element]
  // Or [i, el], it doesn't matter
  // console.log(`${item + 1}: ${element}`); // We add +1 since the numbering always starts at 0
}

// Optional chaning -----------------------------------------------------------------------------------------------------------------------------------
// console.log(restaurant.openingHours?.mon?.open);
// Does what is directly left to the ? mark exists (mon), then take open next
// If it doesn't exist, return undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open || 'closed';
  // Since the day is coming dynamically, needs [], || 'closed' gets rid of the undefined part
  // console.log(`On ${day} we open at ${open}`);
}

// Method
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// Does order exist? Return products (0, 1) If not => method does not exist

// Arrays
const users = [{ name: 'Jonas', email: 'some.email@hot.ee' }];
// console.log(users[0]?.name ?? 'User array is empty');
// Does users have someone in pos [0], return name, if not return the message
if (users.length > 0) console.log(users[0].name);
// else console.log('User array is empty');
// This is how we would write it without the optional chaning, more work

// Looping objects: object keys, values and entries -----------------------------------------------------------------------------------------------------
// Property names/keys
// for (const day of Object.keys(openingHours))
// console.log(day); // Will show all the key elements from openingHours: thu, fri, sat
const properties = Object.keys(openingHours);
let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}`; // Here we get the thu, fri, sat part
}
// console.log(openStr); // We are open 3 days: thu, fri, sat

// Property values
const values = Object.values(openingHours);
// console.log(values);  // Shows the open, close values

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);
for (const [key, { open, close }] of entries) {
  // key is my own choosing
  // const [key, value] => but we right away destructuring the value
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// To get the average score from odds
const odds = Object.values(game.odds); // Taking object values out here and making it a constant
let average = 0;
for (const odd of odds) average += odd; // Average = average + odd
average /= odds.length; // Averasge = average / odds.length (aka 3)
// console.log(average);

// To loop over the odds and print winner
for (const [team, odd] of Object.entries(game.odds)) {
  // In here we need object.entries
  const teamStr = team === 'x' ? 'Draw' : `Winner ${game[team]}`;
  // game.odds, when there's x(draw), print it as draw, rest print as winner game[team] comes from the football challenge
  // console.log(`Odd of ${teamStr} ${odd}`);
}

// Sets ------------------------------------------------------------------------------------------------------------------------------------------------
// Basically removes duplicates
const orderSet = new Set(['pasta', 'pizza', 'pasta', 'pizza', 'pizza']);
// console.log(orderSet); // {'pasta', 'pizza'}

// console.log(new Set('Aadukas')); // A a d u k s => be careful with capital letters

// console.log(orderSet.size); // 2, not .length like on array
// console.log(orderSet.has('pizza')); // True
// console.log(orderSet.has('bread'));   // False
orderSet.add('juice');
orderSet.delete('pasta');
for (const order of orderSet) {
}
// console.log(order); // Loops over them

const numbers = [1, 2, 3, 1, 2, 3, 1];
const uniqueNumbers = [...new Set(numbers)];
// Pushing the unique numbers back to an array with the spread operator
// console.log(uniqueNumbers);

// console.log(new Set('ojdwpojdqwdfoshvdchvdfvhbs').size);
// To know how many unique letters, apparently 12

// Maps -----------------------------------------------------------------------------------------------------------------------------------------------
// To map values to keys
const rest = new Map();
rest.set('name', 'Mamma Mia');
rest.set(1, 'Portugal'); // They are added here asap, consolelog would already show them
rest.set(2, 'Estonia');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23) // Can do chaining no problem
  .set(true, 'We are open')
  .set(false, 'We are closed');
// console.log(rest.get('name'));  // Mamma Mia
// console.log(rest.get(1));       // Portugal
// console.log(rest.get(true));    // We are open
const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// Gives us boolean comparison, and the rest.set true or false will give us result we are open
// console.log(rest.has('categories'));  // True
rest.delete(2); // Deletes 2, Estonia
rest.clear(); // Clears/deletes everything
const array2 = [1, 2];
rest.set(array2, 'test'); // We cannot add [1 ,2] simply here and then .get it, it won't work
// Have to make it into array first and then we can call
rest.get(array2);

// Other ways to populate map()
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question.get('question')); // What is the best programming language?
for (const [key, value] of question)
  if (typeof key === 'number') {
  }
// If the key is a number aka [1, 'C']
// console.log(`Answer ${key}: ${value}`);

const answer = Number(prompt('Your answer?'));
// console.log(answer);

// To convert object to map(), since it looks very similar to Object.entries
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// console.log(question.get(question.get('correct') === answer));
// console.log([...question]);   // To see them all
// console.log([...question.keys()]);
// console.log([...question.values()]);

const events = [...new Set(question.values())]; // To get all that's after numbers

// Working with strings -----------------------------------------------------------------------------------------------------------------------------------
const airline = 'TAP Air Portugal';
const plane = 'A234';
// console.log(plane[1]);  // 2
// console.log('B9300' [0]); // B
// console.log(airline.length);  // 16
// console.log('B244'.length); // 4
// console.log(airline.indexOf('r'));  // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.slice(4));  // Air Portugal // Starts from there TAP plus space is 4
// console.log(airline(4, 7)); // Air // Beginning and the end, and it's always end minus beginning
// Aka 7 - 4 = 3 => Air
// console.log(airline.slice(0, airline.indexOf(' ')));  // TAP
// You don't know how many words are in the string, so you start from first slice(0)
// And then to the space indexOf(' ')
// console.log(airline.slice(airline.lastIndexOf(' ')+1)); // Portugal
// To get the last string, last space + 1 to remove the space
// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1));  // AP Air Portuga
// console.log(airline.toLowerCase);
// console.log(airline.toUpperCase);

const checkMiddleSeat = function (middleSeat) {
  // B and E are middle seats
  const seat = middleSeat.slice(-1);
  if (seat === 'B' || seat === 'E') {
    console.log('You got the middle seat :(');
  } else {
    console.log('You got lucky!');
  }
};
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// For example we wanna fix passenger name
const passenger = 'jOnAs';
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
// Same as a function form
const fixPassengerNames = function (passenger) {
  const passengerLowerCase = passenger.toLowerCase();
  const passengerCorrect =
    passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
  // First letter to uppercase, rest slice from pos 1
  return passengerCorrect.trim(); // To remove caps from front
};
// console.log(fixPassengerNames('RaInO'));

// Replacing
const priceGB = '£200,97';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // But it only replaces first occurence only
// First what to replace with what
const announcement = 'All guests should use gate 1, I repeat gate 1';
// console.log(announcement.replaceAll('gate', 'door')); // This replaces all duh

const plane2 = 'BA320neo';
// console.log(plane2.includes('A3')); // True
// console.log(plane2.startsWith('Air'));  // False

// Split and join
// console.log('a+very+nice+string'.split('+')); // 'a', 'very', 'nice', 'string'
let [myFirstName, lastName] = 'Raino Paal'.split(' '); // 'Raino', 'Paal'
const newName = ['Mr.', myFirstName, lastName].join('---');
// console.log(newName); // Mr.---Raino---Paal

// Uppercase function
const capitalizeName = function (inputName) {
  const names = inputName.split(' ');
  const namesUpper = [];
  for (const inputName of names) {
    // namesUpper.push(inputName[0].toUpperCase() + inputName.slice(1));  // Two ways same function
    namesUpper.push(
      inputName.replace(inputName[0], inputName[0].toUpperCase())
    );
    // Take a inputName, replace position [0] and replace the same position with an uppercase
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('raino paal');

// Padding a string
const message = 'Go to gate 7';
console.log(message.padStart(25, '+').padEnd(35, '+'));
// The padding is together with the string, that's why in the end it needs more

const maskCreditCard = function (number) {
  const str = number + ''; // To make number to a string, same as String()
  const last = str.slice(-4); // Taking last 4 digits
  return last.padStart(str.length, '*'); // Take the whole string length and replace with *
};
// console.log(maskCreditCard(514515611351));
// console.log(maskCreditCard(5256358));
// console.log(maskCreditCard('514515611351'));

// Repeat method
const message2 = 'Bad weather warning!';
// console.log(message2.repeat(5));

function planesInLine(plane) {
  // console.log(`There are ${plane} planes in line ${'✈'.repeat(plane)}`);
}
planesInLine(2);
planesInLine(10);
planesInLine(5);

// Functions ------------------------------------------------------------------------------------------------------------------------------------------
// Default values
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1, // Default value is 1
  price = 199 * numPassengers // If there are no price defined, it will use passengers * 199
) {
  // These are the default values set here
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  // console.log(booking);
};
createBooking('LH223', 2, 800);

// Hihjer order functions
// A function that receives another function as an argument, that returns a new function, or both
// const greet = () => console.log('Hey Raino!');
// btnClose.addEventListener('click', greet)
// .addEventListener is higher order function, greet is callback function

function count() {
  // Higher order function
  let counter = 0;
  return function () {
    // Returned function
    counter++;
  };
}

const oneWord = function (str) {
  return str.replaceAll(' ', ''); // Replace space with no space
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); // First word and rest of the words
  return [first.toUpperCase(), ...others].join(' '); // Join them together again
};
// Higher order function
const transformer = function (str, fn) {
  // fn is function
  // console.log(`Original string: ${str}`); // javascript is the best
  // console.log(`Trasnformed string: ${fn(str)}`);
};
// Callback function
transformer('javascript is the best', upperFirstWord); // JAVASCRIPT is the best
transformer('javascript is the best', oneWord); // javascriptisthebest

// Functions returning a new function
const greet = function (greeting) {
  return function (name) {
    // console.log(`${greeting} ${name}`);
  };
};
const greetings = greet('Hello there');
greetings('Raino'); // Hello there Raino
greetings('Julia'); // Hello there Julia
// Can insert directly too
greet('Hello')('Jonas'); // Uses both functions, greet and name

// As an arrow function, passing in another function
// const greetArr = greeting => whosName => console.log(`${greeting} ${whosName}`);
// greetArr('Hi')('John');

// Call method ---------------------------------------------------------------------------------------------------------------------------------------------
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    // console.log(
    //   `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    // );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    // Makes a new object
  },
};
lufthansa.book(239, 'John Smith'); // John Smith booked a flight on Lufthansa fligh LH239
lufthansa.book(666, 'Devils Son');
// console.log(lufthansa);

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// book(23, 'Sarah Williams')  // This DOES not work, since now the this. keyword directs to undefined

book.call(eurowings, 23, 'Sarah Williams'); // Have to use a call
// console.log(eurowings);
book.call(lufthansa, 656, 'Mary Cooper');
// console.log(lufthansa);

const flightData = [583, 'George Looney'];
book.call(eurowings, ...flightData); // Use eurowings and take everything what's in there with ...
// console.log(eurowings);

// Bind method ---------------------------------------------------------------------------------------------------------------------------------------
// The difference between bind and call method is, that bind doesn't call the this. keyword
// It binds to it forever, makes it it's own
const bookEurowings = book.bind(eurowings); // Have to add it to the variable
bookEurowings(23, 'Steven Klein'); // And then can simply call it
// Partial application
const bookEurowings23 = book.bind(eurowings, 23); // In here now we not only bind the airline but also the flight number
bookEurowings23('Jack The Ripper'); // So all we need to add is the name

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this); // Eventlisteners direct the this. to the parent element which is the buy button
  // So it doesn't work as we itend to, if we use the code in 1205
  this.planes++;
  // console.log(this.planes);
};
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// So we have to use the .bind method to make the this. keyword work

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23); // addVAT = value => value + value * 0.23 (23%)
// console.log(addVAT(200));

// Closure function ---------------------------------------------------------------------------------------------------------------------------------
// You can't code a closure function, it just happens, basically a function can access a dead function
let f;
const g = function () {
  const a = 23;
  f = function () {
    // console.log(a * 2);
  };
};
g(); // You have to call them both, otherwise if calling g(), nothing happens
f(); // If calling only f(), it says f is not a function
// console.dir(g)  // Showing the directory

const boardingPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are boarding now all ${n} passengers`); // These two will be first
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // 1000 milliseconds
  console.log(`Will start boarding in ${wait} seconds`); // This one follows after 1 second
};
const perGroup = 1000; // This will not be read, but if you delete line 1232 it would be
boardingPassengers(180, 3);

// Array nethods ------------------------------------------------------------------------------------------------------------------------------------
// Slice, does NOT change the original array
let arr2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr2.slice(2)); // ['c', 'd', 'e'];
// console.log(arr2.slice(2, 4)); // ['c', 'd'];
// console.log(arr2.slice(-1));  // ['e']
// console.log(arr2.slice());  // Makes a shadow copy from the whole array
// console.log(arr2.slice(...arr2));  // Same as above aka ['a', 'b', 'c', 'd', 'e']

// Splice, DOES change original array
// console.log(arr2.splice(2)); // ['a', 'b']
// console.log(arr2.splice(1, 3)); // Works a bit differently from slice, in a sence that, from position 1 delete 2 characters
// Result: ['b', 'c', 'd']

// Reverse, also mutates original
// console.log(arr2.reverse()); // [e d c b a]

// Concat
const letters2 = arr.concat(arr2); // Adds two arrays together
// console.log(letters2);
// console.log();[...arr, ...arr2] // Does exactly the same thing

// Join
// console.log(letters2.join('-'));  // a-b-c-d-e

// At method
const arr3 = [23, 11, 65];
// console.log(arr3.at(0));  // 23
// console.log(arr3.at(-1)); // 65
console.log('Jonas'.at(-1)); // s

// Foreach -------------------------------------------------------------------------------------------------------------------------------------------
// For loop example
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  // To make a counter for example, need .entries() for that
  if (movement > 0) {
    // console.log(`Movement ${i + 1}, You deposited: ${movement}`); // All pos money
  } else {
    // console.log(`Movement ${i + 1}, You withdrew: ${Math.abs(movement)}`); // All neg money, math abs gets rid of minus sign
  }
}
// ForEach example
movements.forEach(function (movement, index, array) {
  // (movement, index, array), the names do not matter, the order DOES, first always needs to be the current element
  // Second needs to be current index, and the third entire array that we looping over
  // Movements will get gone through and each item taken out to a movement, movement name of course my own choosing
  if (movement > 0) {
    // console.log(`Movement ${index + 1}, You deposited: ${movement}`);
  } else {
    // console.log(`Movement ${i + 1}, You withdrew: ${Math.abs(movement)}`);
  }
});

// Map forEach
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  // console.log(`${key}: ${value}`);
});

// Map, filter, reduce methods -------------------------------------------------------------------------------------------------------------------------
// Map returns a new array containing the results of applying an operation on all original array elements
const originArray = [3, 1, 4, 3, 2];
// Map: current * 2 => 6, 2, 8, 6, 4
const eurToUsd = 1.1;
const movementUSD = originArray.map(function (mov) {
  return mov * eurToUsd;
});
// console.log(movementUSD);

const movementUSD2 = originArray.map(mov => mov * eurToUsd);
// console.log(movementUSD2); // As an arrow function

const moneyMoves = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsDescriptions = moneyMoves.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}` // Movement nr 1, you (if movement > 0 : deposited, otherwise withdrew), Math.abs gets rid of minus sign
);
// console.log(movementsDescriptions);

const user = 'Steven Thomas Williams'; // To make this as a username stw
const userName = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    // Make lowercase, make cap in between every word
    return name[0]; // Map through the array (all 3 names), and then take the first letter
  })
  .join(''); // Join them back together again

// Filter returns new array containing the array elements that passed a specific test condition
// Filter: current > 2 => 3, 4, 3
const deposits2 = moneyMoves.filter(function (mov) {
  return mov > 0; // Very simple, simply removes all the negatives
});
// console.log(deposits2);

// Reduce boils all array elements down to one single value
// Reduce: acc(accumulator) + current => 13(reduced value)
const balance = moneyMoves.reduce(function (
  accumulator,
  current,
  index,
  array
) {
  // console.log(`Iteration ${index}: ${accumulator}`); // Shows how all are added together
  return accumulator + current; // Reduce method is a bit different as it starts with an accumulator
},
0); // Reduce method needs also second parameter, initial value of the first loop iteration, in this case 0
// console.log(balance);

// Calculate maximum using .reduce method
const max = moneyMoves.reduce((acc, mov) => {
  if (acc > mov) {
    // If accumulator is bigger than movement, remember that
    return acc; // And return that
  } else {
    return mov; // Otherwise remember movement number
  }
}, moneyMoves[0]); // You have to start from the array pos 0, otherwise what if the first one i minus
// console.log(max);

// Chaining them all together
const totalDepositsInUSD = moneyMoves
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0); // This has to be last though, since others return array

// Find method -------------------------------------------------------------------------------------------------------------------------------------
const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// The difference between find and filter method is, that find only returns first item it finds
// That matches the condition, filter method returns an array
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // To find a single name for example
// console.log(account);   // Jessica Davis

// Some and every -----------------------------------------------------------------------------------------------------------------------------------
// console.log(movements);
// This only checks for equality
// console.log(movements.includes(-130));  // True
// This checks for a condition, handle it as an any
const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits); // True

// console.log(movements.every(mov => mov > 0)); // False
// Every aspect needs to match to return true, if one is wrong, it returns false

// We can get separate callbacks too
const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Map and flatMap for nested arrays -------------------------------------------------------------------------------------------------------------------------------------
const arr4 = [[3, 2, 5], [5, 6, 7], 3, 9];
// console.log(arr4.flat()); // 3, 2, 5, 5, 6, 7, 3, 9 // Flat only goes one level deep
const arrDeep = [[[3, 2], 5], [5, [6, 7]], 3, 9];
// console.log(arrDeep.flat(2)); // 3, 2, 5, 5, 6, 7, 3, 9, now the flat goes two levels deep (2)

// This would be with flat method
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// With flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) // flatMap only goes ONE level deep into arrays
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// Sort ------------------------------------------------------------------------------------------------------------------------------------------------
const owners = ['Jonas', 'Marta', 'Adam', 'Chech'];
// console.log(owners.sort()); // Adam, Chech, Jonas, Marta // The sort method will MODIFY original array
// The same code will NOT work for numbers, since the sort uses strings

// Numbers sort
// If a is bigger than b, return a positive number aka new number
movements.sort((a, b) => a - b);
// console.log(movements);

// Filling arrays programmatically ---------------------------------------------------------------------------------------------------------------------
const arr5 = [1, 2, 3, 4, 5, 6, 7];
arr5.fill(23, 2, 6); // Fill with number 23, from position 2 to 6, six not included
// console.log(arr5);  // 1, 2, 23, 23, 23, 23, 7
// Empty arrays + fill method
const arrx = new Array(7);
// console.log(arrx);  // empty x 7
arrx.fill(1, 3, 5);
// console.log(arrx);  // empty x 3, 1, 1 empty x 2

// Array.from
const arry = Array.from({ length: 7 }, () => 1); // Creates an array without any parameters for 7 places using number 1
// console.log(arry);  // 1, 1, 1, 1, 1, 1, 1
const arrz = Array.from({ length: 7 }, (_, i) => i + 1); // (_, i) => _ is a throwaway function, aka not needed
// console.log(arrz); // 1, 2, 3, 4, 5, 6, 7

// This code works in script file
labelBalance.addEventListener('click', function () {
  // AddEventListener doesn't have to be only on button
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), // Create array from movements__value
    el => Number(el.textContent.replace('€', '')) // Make it numbers and remove € sign
  );
  // console.log(movementsUI);
});

// Adding all deposits together
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements) // First taking all the nested arrays out of the main movements array with flatMap
  .filter(mov => mov > 0) // Then we filter all deposits, aka positive values mov > 0
  .reduce((sum, cur) => sum + cur, 0); // Then we add all together // 0 means start from number 0

// How many deposits in the bank at least 1000
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length; // .length is needed because wanna see how many deposits are > 1000

// Create an object with deposits and withdrawals
// (1) const sums = accounts
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, current) => {
      // current > 0 ? (sums.deposits += current) : (sums.withdrawals += current);
      // return sums; // WARNING: when you have {} you do need the return statement!!!
      sums[current > 0 ? 'deposits' : 'withdrawals'] += current; // Same code as above rewritten
      return sums; // WARNING: when you have {} you do need the return statement!!!
    }, // If current is > 0 it's an deposit + current value and vice versa
    { deposits: 0, withdrawals: 0 }
  ); // Putting the empty objects in here, it is the initial value of the accumulator aka sums
// (1) console.log(sums);  // {deposits: 25180, withdrawals: -7340}
// (2) console.log(deposits, withdrawals); // 25180 -7340

// Convert to titlecase
const convertTitleCase = function (title) {
  // prettier-ignore
  const exceptions = ['as', 'at', 'by', 'for', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via', 'a', 'an', 'the', 'and'];
  const titleCase = title
    .toLowerCase() // First making the sentence lowecase
    .split(' ') // Splitting every word
    .map(
      word =>
        exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
      // If there is exeption word, just return the word (exeptions.includes(word) ? word), otherwise return the rest
    )
    .join(' '); // Taking first letter every word, making capital, and then adding rest on top with slice
  return titleCase;
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a long title bUT NOT too LoNG'));
// console.log(convertTitleCase('and here is another titke with an EXAMPLE'));

// ++ operator problem ---------------------------------------------------------------------------------------------------------------------------------
let a2 = 10;
// console.log(a2++);  // 10 the ++ opeartor returns also the original value, that's why it's still 10
// console.log(a2);  // 11 if doing this now then shows 11
// console.log(++a2);  // Using like this will show 11 asap

// Math, rounding and remainder-------------------------------------------------------------------------------------------------------------------------
// Two ways to convert to a number
// console.log(Number('23'));
// console.log(+'23');
// console.log(Number.parseInt('30px')); // 30, it actually gets the number, won't work px30 tho
// console.log(Number.parseFloat('2.5rem')); // 2.5, reads the commas, pareseInt would return 2
// console.log(Number.isFinite(20)); // True, isFinite checks if something is a number or not
// console.log(Number.isFinite('20')); // False

// Square root
// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5

// Cubic root
// console.log(25 ** (1/3)); // 2

// Max
// console.log(Math.max(5, 18, 23, 16, 3));  // 23, also does type coersion, aka '23' still returns 23, it can't do '23px' tho
// console.log(Math.min(5, 18, 23, 16, 3));  // 3

// Area of an circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.16

// Random number
// console.log(Math.trunc(Math.random() * 6) + 1); // Random from 1...6, the + 1 is needed so the numbers start from 1, not 0
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // Math.floor works better here because then min can even be negative number
// console.log(randomInt(-10, 10)); // Random from -10...10

// Round
// console.log(Math.trunc(23.3)); // 23, always to the left number 25.9 => 25
// console.log(Math.round(23.3)); // 23, normal rounding 23.9 => 24
// console.log(Math.ceil(23.3)); // 24. rounds up always 23.1 => 24
// console.log(Math.floor(23.3)); // 23, rounds down always 23.9 => 23
// console.log(Math.floor(-23.3)); // -24, works other way with negative numbers
// Rounding decimals
// console.log(+(2.7).toFixed(3));  // 2.700, first the number needs to be in (), then + to convert the answer to a number
// And then (3) shows how many places after comma
// console.log(+(2.345).toFixed(2)); // 2.35

// Remainder
// console.log(5 % 2); // 1, 2 goes into 5 and remainder is 1
// console.log(8 % 3); // 2
// Can calculate if something is even or not
const isEven = n => n % 2 === 0; // Remainder left is 0, so the number is even
// console.log(isEven(8)); // True
// console.log(isEven(23)); // False

// This works in script.js file
labelBalance.addEventListener(function () {
  // When clcicking on the big balance number
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // I create an array and spread it in there, so I can call forEach
    if (i % 2 === 0) row.style.backgroundColor = 'orangered'; // To color every second row, if we change === 1, it changes rows
    // i % 2 === 0
    // ? (row.style.backgroundColor = 'orangered')  // Changing one rows to orangered, others to blue
    // : (row.style.backgroundColor = 'blue');
  });
});
// if (i % 3 === 0) // Would change 3, 6, 9 etc rows

// BigInt
// console.log(Number.MAX_SAFE_INTEGER); // Over this number js goes mad
// console.log(143548964653254465n); // We have to put n in the end to use such big number

// Creating dates and time ----------------------------------------------------------------------------------------------------------------------------
const account1 = {
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};
const now = new Date();
// console.log(now);
// console.log(account1.movementsDates[0]); // '2019-11-18T21:31:17.178Z'
// console.log(new Date(2037, 10, 18, 15, 23)); // Wed Nov 18 2037 15:23:00 GMT+0200, month before day
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days, 24h, 60mins, 60sec, 1000 milliseconds
const future = new Date(2037, 10, 18, 15, 23);
// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // November
// console.log(future.getHours()); // 15
// console.log(future.getDay()); // 3 => wednesday, it shows the number of day a week
// console.log(future.toISOString()); // 2037-10-18T21:15:23.178Z, some standard time thingy
// console.log(future.getTime()); // Milliseconds past 1st jan 1970
// console.log(Date.now()); // Giving us the timestamp, in milliseconds
// Calculating with dates, aka days passed
// console.log(+future); // Shows time in milliseconds
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// Convert milliseconds to *1000 milliseconds, * 60sec * 60min * 24h
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 10, 2));
// console.log(days1); // The answer will be in milliseconds, but now since conversion is done it shows in days

// Internationalization ------------------------------------------------------------------------------------------------------------------------------
const US = new Date();
const times = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'long',
  month: 'long', // Can also be numeric // 2-digit
  year: 'numeric', // 2-digit
  weekday: 'long',
};
const locale = navigator.language; // It gets the language from the user directly
// labelDate.textContent = new Intl.DateTimeFormat('en-US', times).format(US);  // When manually
labelDate.textContent = new Intl.DateTimeFormat(locale, times).format(US); // When from user profile

// Numbers
const num = 3882466.23;
const options = {
  style: 'unit', // These actually come from documentation (MDN) for example style: 'currency'
  unit: 'mile-per-hour', // Of course there are more of these for example unit: 'celcius'
};
const USNum = new Intl.NumberFormat('en-US', options).format(num);
// console.log(USNum);
const browserLng = new Intl.NumberFormat(navigator.language, options).format(
  num
);

// Timers ---------------------------------------------------------------------------------------------------------------------------------------------
// setTimeout(() => console.log('Here is your pizza'), 3000); // Time is in milliseconds, so 3000 => 3s
setTimeout(
  // (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'mushrooms'
); // Argumments are added after the time value
const ingredients2 = ['olives', 'spinach'];
setTimeout(
  // (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients2
); // Using spread operator to put ingredients2 in here

setInterval(function () {
  const now = new Date();
  // console.log(now);
}, 1000); // Date every second

// Advanced DOM manipulation --------------------------------------------------------------------------------------------------------------------------
document.documentElement; // Selects the whole page
document.head;
document.body;
const header = document.querySelector('.header'); // To select just one class
const allSections = document.querySelectorAll('.section');
// When there is many classes to select with the same name, aka section-1, section-2 etc
document.getElementById('section--1'); // As name implies
const allButtons = document.getElementsByTagName('button'); // Gets all the button tags for example
document.getElementsByClassName('btn');

// Creating and inserting elements
insertAdjacentHTML();
const messageDiv = document.createElement('div'); // Creating an element
messageDiv.classList.add('cookie-message'); // Search from css file
// messageDiv.textContent = 'We use cookies';
messageDiv.innerHTML =
  'We use cookies. <button class="btn btn--close-cookie">Got it!</button>'; // An actual HTML code
header.prepend(messageDiv); // Now we attach the messageDiv to the const header we did before, prepend is before header
header.append(messageDiv); // Is after
header.append(messageDiv.cloneNode(true)); // If you wanna add prepend and append at the same time (same message)
header.before(messageDiv);
header.after(messageDiv);

// Delete elements
document // Remove cookie message
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    messageDiv.remove();
  });

// Styles
messageDiv.style.backgroundColor = '#37383d';
messageDiv.style.width = '120%';
getComputedStyle(messageDiv).color; // To get styles for something, so the color part changes anything we need to find
messageDiv.style.height = // We want to change the messageDiv height, but we don't know the browser set height
  Number.parseFloat(getComputedStyle(messageDiv).height, 10) + 40 + 'px';
// So we get it from getComputedStyle(messageDiv).height, but since it's a string, we need to Number.parsefloat it
// Parsefloat since it's a float number, we need also the ,10 then 40 we adding and pixels ('px')
document.documentElement.style.setProperty('--color-primary', 'orangered');
// This is changing the root style from CSS, BUT it is easier to do like on top examples

// Chaning attributes (HTML)
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);  // These two work, since they are standard usage for a pic
// console.log(logo.src);
// console.log(logo.designer); // We set the designer ourselves, and it won't work since it's not a standard
// console.log(logo.getAttribute('designer')); // So we have to do this way to get the designer
logo.alt = 'Beautiful picture'; // To set something that's standard
logo.setAttribute('company', 'Bankist'); // To set something non standard

// Classes
logo.classList.add('something', 'something');
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();

// Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to'); // Learn more in index.html
const section1 = document.querySelector('#section--1'); // Features in index.html
btnScrollTo.addEventListener('click', function () {
  // Smoothly scroll into the beginning
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Mouse hover over something
const h1 = document.querySelector('h1'); // When we hover over the heading the alert gets triggered
h1.addEventListener('mouseenter', function (e) {
  alert('Great, hovered over the heading');
});
// Can also be written as:
const alertH1 = function (e) {
  alert('Great, hovered over the heading');
  h1.removeEventListener('mouseenter', alertH1); // So the alert only appears once and done
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // After 3s you can't get the alert anymore

// Event propagation ----------------------------------------------------------------------------------------------------------------------------------
const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  // prettier-ignore
  `rgb ${randomInteger(0, 255)} ,${randomInteger(0, 255)} ,${randomInteger(0, 255)}`;
// Makes random rgb color from 0-255
// console.log(randomColor(0, 255));
document.querySelector('.nav').addEventListener('click', function (e) {
  // This is the main parent element
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // This is a sub parent element
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__link').addEventListener('click', function (e) {
  // last element in the parent tree
  this.style.backgroundColor = randomColor();
}); // When we add this and click the last event listener all other parents bubble up and also change colors

// Add event lsitener to common parent element instead
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // .nav__links is .nav__link parent element
  e.preventDefault();
  if (e.target.classList.contains('.nav__link')) {
    // ONLY if we click on .nav__link, if we click on anything else it won't work
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Choosing child elements from parent element
h1.querySelectorAll('.highlight'); // h1 one is on line 1721, it is select all because there are more than two .highlight
// h1 has a child CSS called highlight, so we can choose that, it doesn't matter how deep it goes
h1.firstElementChild.style.color = 'white'; // Would be the first .highlight in this case
h1.lastElementChild.style.color = 'red'; // Last one
h1.closest('.header').style.background = 'orangered'; // Will find the closest element to the h1 that has the class .header
h1.previousElementSibling; // Null if there are none
h1.nextElementSibling; // h4 in our example
h1.parentElement.children; // Shows all the h1 children, h1 included
[...h1.parentElement.children].forEach(function (el) {
  // Spread all children into an array
  if (el !== h1) el.style.transform = 'scale(0.5)'; // Don't change the parent element itself h1, transform 50%
});

// Tabbed component ----------------------------------------------------------------------------------------------------------------------------------
const tabs = document.querySelectorAll('.operations__tab');
tabsContainer.addEventListener('click', function (e) {
  const buttonClicked = e.target.closest('.operations__tab');
  // e.target.closest was needed here because the button consists of span and button, and if you press on span it is confused
  if (!buttonClicked) return; // New way of writing, if nothing is clicked (or Null in this case), return asap
  // It is the same as writing:
  // if (buttonClicked) {
  //   buttonClicked.classList.add('operations__tab--active');
  // }
  buttonClicked.classList.add('operations__tab--active'); // Style where clicked button moves up a little
});

// Sticky navigation: Intersection Observer API aka sticking nav to the page -----------------------------------------------------------------------------
const navHeight = nav.getBoundingClientRect().height; // It gets the nav height dynamically
const obsCallback = function (entries, observer) {
  // If you check the console, you can see the intersecting part with section1, at 10%
  entries.forEach(entry => {
    // We need foreach only if many thresholds
    // console.log(entry);
  });
};
const obsOptions = {
  root: null, // What the target will intersept
  threshold: [0, 0.2], // Intersection percentage, from zero and then when 20% is not seen
  // threshold: 0.1, // The obsCallback function will be called when scrolling 10% up or down
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // Observing a certain target, line 1714, section1 is the target

const imgTargets = document.querySelectorAll('img[data-src]'); // Selecting a specific type of image: data-source one

// Slider, slides -------------------------------------------------------------------------------------------------------------------------------------
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots'); // The dots under üictures
let currentSlide = 0;
const maxSlide = slides.length; // So the slider don't just keep going till infinity
// TranslateX comes from moving the slides left or right // Slides are 0%, 100%, 200%, 300%
// 0% not seen, 100% in the view, 200% to the right and so on
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) // s, i => slide, index
  );
};
goToSlide(0);
// The dots
const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
// Active dot
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active')); // To make a dot active, we first deactive them all
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    // If we reach the max slide number, we need minus 1 otherwise slider still moves one empty place (zero based)
    currentSlide = 0; // Return slide back to zero
  } else {
    currentSlide++;
  } // Else keep increasing slides by 1
  goToSlide(currentSlide);
  activateDot(currentSlide);
};
const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);
// Pressing arrow right n left
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') previousSlide(); // Both codes work the same
  e.key === 'ArrowRight' && nextSlide();
});
dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // const slide = e.target.dataset.slide  // Comes from line 1831
    const { slide } = e.target.dataset; // Restructured code
    goToSlide(slide);
    activateDot(slide);
  }
});

// OOP, Object Oriented Programming -------------------------------------------------------------------------------------------------------------------
const Person = function (firstName, birthYear) {
  // console.log(this);  // Person{} aka empty object called Person aka constructor function
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const raino2 = new Person('Raino', 1982);
// console.log(raino2);  // Person{firstName: 'Raino', birthYear: 1982}
// 1. New object {} is created
// 2. Function is called, this. keyword equals {}
// 3. {} is linked to the prototype
// 4. Function automagtically returns {}
// Now you can create as many persons as you want
const matilda = new Person('Matilda', 1978);
const jack = new Person('Jack', 1991);
console.log(raino2 instanceof Person); // True, to sheck if something belongs

// Prototypes
Person.prototype.calcAge = function () {
  // Adding the calcAge function to any Person
  // console.log(2022 - this.birthYear);
};
raino2.calcAge(); // And then calling it here
matilda.calcAge();
// console.log(matilda.__proto__); // Shows all the functions and stuff matilda has
Person.prototype.species = 'Homo Aliens'; // Just added a new line species
// console.log(raino2.species);  // Homo Aliens
raino2.hasOwnProperty('firstName'); // True, good way of checking own prototypes
raino2.hasOwnProperty('species'); // False, because it is added under Person
// console.log(arr.__proto__); // Shows every single command you can use with arrays
// console.log(arr.__proto__.__proto__); // This one goes even deeper and shows all the functions you can use

// ES6 classes // MOST USED IN REAL WORLD
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    // Methods will be added to .prototype property
    console.log(2022 - this.birthYear);
  } // This time it's right here, but it's under __proto__
  greet() {
    // console.log(`Hey ${this.firstName}`);
  }
  get futureAge() {
    // Getter used in the class
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    // Setter used as well
    if (name.includes(' ')) this._fullName = name;
    // Simple check if full name has a space, we use _fullName since class already uses fullName
    else alert(`${name} is not a full name!`); // And it will throw a massive error if we do that
  }
  get fullName() {
    // But we have to also do this then
    return this._fullName;
  }
}
const janet = new PersonCl('Janet', 1982);
janet.calcAge();
PersonCl.prototype.greet = function () {
  // This also still works just fine, in line 1923 and in here, two ways can do this
  // console.log(`Hey ${this.firstName}`);
};
janet.greet();
// console.log(janet.futureAge); // Now this is calculated from the futureage

// Class example
class Account {
  bank = 'Bank of England'; // This is public
  #movements = []; // This didn't come from constructor, we just added it here, an empty array // # makes it private
  #pin; // Not accessible from the outside
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.locale = navigator.language; // This didn't come from constructor, we added it ourselves

    // console.log(`Thanks for opening an account with us ${owner}!`);
  }

  deposit(value) {
    // Pushiong deposits into the movements array
    this.#movements.push(value);
    return this; // It's returned so you can do chaining
  }

  withdraw(value) {
    // We can even call deposit function in here, just changing the value to -value
    this.deposit(-value); // Same as this.movements.push(-value)
    return this;
  }
  #approvedLoan(value) {
    // This is a private function
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(200);
acc1.withdraw(140);
// console.log(acc1);
acc1.deposit(300).withdraw(200).withdraw(150).deposit(1000); // We can chain now stuff together because of the this. keyword

// Setters (set) and getters (get) -------------------------------------------------------------------------------------------------------------------
const account2 = {
  owner: 'raino',
  movements: [200, 300, 450, 126],

  get latest() {
    // Slice method takes the last number as an array [126], so pop takes the actual last item 126
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    // A setter needs to have an argument
    this.movements.push(mov);
  },
};
// console.log(account2.latest);
account2.latest = 50; // This is now for the setter function
// console.log(account2.movements); // [200, 300, 450, 126, 50]

// Object.create ---------------------------------------------------------------------------------------------------------------------------------------
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1982);
sarah.calcAge();

// Inheritance
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Instead of repeating, we take the firstName, birthYear from the Person, with the help of this keyword
  this.course = course; // This is student specific, so have to use it here
};
Student.prototype = Object.create(Person.prototype); //Linking prototypes, to get access to calcAge() and etc functions

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2002, 'Medical science');
mike.introduce();
mike.calcAge();

// Class inheritance
class studentCl extends PersonCl {
  // In here extends takes fullName, birthYear from PersonCl
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // This always needs to happen first, or the this. keyword won't work
    this.course = course;
  } // The constructor function is not even needed if student would use only fullName, birthYear as well
  introduce() {
    // Aka class studentCl extends PersonCl would simply suffice
    // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    // console.log(
    //   `I am ${2022 - this.birthYear} years old, but i feel like ${
    //     2022 - this.birthYear + 10
    //   } years old`
    // );
  }
}
const martha = new studentCl('Martha Stuward', 2002, 'Computer Science');
martha.introduce();
martha.calcAge(); // This calcAge function will be the one that is in StudentCl class now since it's sooner

// Object.create inheritance
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  // This init is made here
  PersonProto.init.call(this, firstName, birthYear); // This init is called from PersonProto (firstName, birthYear)
  this.course = course;
};
StudentProto.introduce = function () {
  // console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 1991, 'Medical Surgery');
jay.introduce(); // From StudentProto
jay.calcAge(); // From PersonProto

// One more example
class UniStudent extends PersonCl {
  // PersonCl is parent class, UniStudent is a child class, extends is automatic inheritance
  university = 'Thames'; // Public field
  #studyHours = 0; // Private field, not accessible outside of class
  #course;
  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear); // Call to parent (super) class, necessary with extend, needs to happen before rest
    this.startYear = startYear;
    this.#course = course; // Redefining a private field
  }

  introduce() {
    // Public method
    console.log(`I study ${this.#course} at this ${this.university}`);
  }

  study(hours) {
    this.#makeCoffee(); // Referencing private field and a method
    this.#studyHours += hours;
  }

  #makeCoffee() {
    // Private method
    return 'Here is a coffee for you';
  }

  get testScore() {
    // Getter method
    return this.testScore;
  }

  set testScore(score) {
    // Setter method
    this.testScore = score <= 20 ? score : 0;
  }
}
const student = new UniStudent('Jonas', 1982, 2022, 'Medicine');

// Geolocation ----------------------------------------------------------------------------------------------------------------------------------------
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords; // We can use restructuring, both the latitude and longitude codes work, we just put it in the {}
    const longitude = position.coords.longitude; // This comes from geolocation from console
    // console.log(position);
    // console.log(latitude);
    // console.log(longitude);
  },
  function () {
    alert('Could not find position');
  }
);

// Asynchronous JavaScript ----------------------------------------------------------------------------------------------------------------------------
/* We mostly run synchronous JS, meaning code gets executed line by line, but when we run into a code (for example alert)
The code will stop to do deal with the alert function, until user presses it
timeOut function tho is asynchronous, meaning code gets still executed on the background */

// Which gets done first?
// console.log('Test start'); // This will be 1st, because top level code
// setTimeout(() => console.log('0 second timer'), 0); // This will be added to the call stack asap but will be done last (4th)
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); // This gets into microtasks queue, so gets done second
// console.log('End test'); // This also will be 1st
// setTimeout(() => console.log('0 second timer'), 0); the 0 seconds is not the rule, if Promise.resolve takes a heavy task
// The timeout function will only finish after the resolve function is done, like an example below
// Promise.resolve('Resolved promise 1').then(res => {
// prettier-ignore
// for (let i = 0; i < 10000000000; i++)   // This takes a long time to process, so timeOut will suffer
// console.log(res)
// });

// Fetching some data using promises
const getCountry = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json(), // First when catch data
      err => alert(err) // When error
    )
    .then(data => renderCountry(data[0]));
};
getCountry('estonia');

// Building a promise
const lotteryPromise = new Promise(function (resolve, reject) {
  // console.log('Lottery draw is happening');
  setTimeout(() => {
    // Asynchronous task happenng in promise (callback)
    if (Math.random() >= 0.5) {
      // 50% of time win and 50% time loose
      resolve('You won'); // When 50% win, you get resolve
    } else {
      reject(new Error('You lost')); // Otherwise reject
    }
  }, 2000);
});
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); // This is called consuming the promise
// then means res aka resolve You won, catch is when error aka reject You lost

// Another example
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    // console.log('I waited for 2 seconds');
    return wait(3);
  })
  .then(() => {
    // console.log('I waited for 3 seconds');
  });

// Geocode promise
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position=> resolve(position),
    //   err => reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject); // This is the same as the notes code above
  });
};
// getPosition().then(pos => console.log(pos));

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// Consuming promises with async/await
// It's the same whereAmI code rewritten with async/await
const where = async function (country) {
  // Makes the async code look like a sync code
  // Geolocation:
  try {
    // Since async/await doesn't have catch method, we have to use try/catch method
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding:
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data'); // Ok comes from console
    const dataGeo = await resGeo.json();
    // Country data:
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    ); // We can now save all the variables (const), we could not do that before with promise
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    // If any eerors happen before, this line gets never read, it right away jumps to catch code
  } catch (err) {
    // Catch is used to catch errors
    renderError(`${err.message}`);
  }
};
// where().then(city => console.log(city)); // Now it finds it autom because of the geolocation
// The city part is the `You are in ${dataGeo.city}, ${dataGeo.country}` part
(async function () {
  try {
    const city = await where();
    // console.log(`2: ${city}`);
  } catch (err) {
    // console.log(`2: ${err.message}`);
  }
  // console.log(`3: Finished getting location`);
});

// Get 3 countries, running promises in parallel:
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
    const data = await Promise.all([
      // If you need to load something at the same time
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]); // If one of the promises rejects, the whole thing is stopping
    // console.log(data.map(d => d[0].capital));
    // d is a single arraw element, and we want capital city from it, and it takes it out from the array
  } catch (err) {}
};
get3Countries('portugal', 'canada', 'tanzania');

// Promice.race:
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
    getJSON(`https://restcountries.com/v2/name/austria`),
  ]); // The idea is simple, .race lets the promices race against each other, and the one who wins, gets displayed
  // console.log(res[0]);
})();

// Real life example, like if something takes too long to load:
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v2/name/mexico`),
  // prettier-ignore
  timeout(1),
]) // Of course in real world the timeout is like a minute or more
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success again'),
]);
// .then(res => console.log(res));
// allSettled will return them all even if something is rejected in the middle
// Compared to Promise.all which will stop once there is a reject

// Top level await:
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Google jsonplaceholder
  const data = await res.json();
  // console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
  // Title and text are our choosing, representing title and body from the address provided
};
// const lastPost = getLastPost();
// console.log(lastPost);  // THIS WILL NOT WORK, AND RETURNS ONLY A PROMISE
const lastPost = await getLastPost(); // Top level await
// console.log(lastPost);
//  TOP LEVEL AWAIT WILL BLOCK REST OF THE CODES EXECUTION

// ifi function (it only runs once):
(function () {})(); // Function that immediately invokes

// To make objects unchangeable:
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); // You can also freeze arrays
spendingLimits.jay = 200; // It won't change since bject.freeze() freezes it
// console.log(spendingLimits);
// But it only won't change when we add a new object, if we change something existing inside, then it lets us do it

// Notes ----------------------------------------------------------------------------------------------------------------------------------------------
/**
 * Render the received object to the DOM
 * More info at jsdoc.app
 * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
 * @param {boolean} [render = true] In [] means it's optional, default is true. If false, create markup string instead of rendering to the DOM
 * @returns {undefined | string} A markup string is returned if render = false
 * @this {Object} View instance
 * @author Raino
 * @todo Finish something
 */

/////////////////////////////////////////////////////////////////////////
const timeFaster = function (time) {
  const result = (time * 60) / 1.25;
  const min = String(Math.trunc(result / 60)).padStart(2, 0);
  const sec = String(Math.trunc(result % 60)).padStart(2, 0);
  return console.log(`${min}:${sec}`);
};
timeFaster(14);
