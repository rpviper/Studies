'use strict';

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
  console.log(`Sarah can start driving license.`);
} else {
  const yearsLeft = 18 - sarahAge;
  console.log(
    `Sarah is too young, she needs to wait another ${yearsLeft} years`
  );
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
  console.log('Dont sepnd it all at once');
} else {
  console.log('Youre a poor bastard!');
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
    console.log('Go to work');
    break;
  case 'Tuesday':
    console.log('Do studying');
    break;
  case 'Thursday':
  case 'Friday':
    console.log('Get ready for the weekend');
    break;
  case 'Saturday':
    console.log('Have a rest');
    break;
  default:
    console.log('Not a valid day');
}

// The conditional (Ternary) operator (? :) ----------------------------------------------------------------------------------------------------------

const age1 = 20;
// const age1 = 15

age1 >= 18
  ? console.log('This person can drink 🍸') // ? is like an and/if, : is else
  : // console.log('This person is not drinking age yet.')

    // const drink = age1 >= 18 ? 'Drink 🍸' : 'No drinks for you'
    // console.log(drink)

    // console.log(`I like to drink ${age1 >= 18 ? 'wine 🍸' : 'water'}`)

    // In between 50 and 300 for example -------------------------------------------------------------------------------------------------------------

    // const tip = bill >= 50 && bill <= 300

    // Function -------------------------------------------------------------------------------------------------------------------------------------

    function logger() {
      console.log('My name is Raino');
    };

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
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement; // Return needs to be always after, otherwise problems
  } else {
    console.log(`${firstName} has already retired.`);
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
birthYear = 1982;
const Raino = [firstName, 'Paal', currentYear - birthYear, friends]; // It's all valid, even the friends array in here
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
  console.log(document.querySelector('.guess').value); // Clicking with mouse from class chech does the console log function
});

document.querySelector('body').style.backgroundColor = '#60b347'; // CSS selection from body, then style, then background-color
// Written in camelcase in JavaScript background-color = backgroundColor

const displayMessage = function (message) {
  document.querySelector('.message').textContent = 'Some message'; // Making queryselector into a function so you don't
}; // have to type it over and over again

document.querySelectorAll('.show-modal'); // It is used for something that has multiple items you have to choose/loop

modal.classList.remove('hidden'); // To manipulate classes

// -------------------------------------
function calcTime(time) {
  return time / 1.25;
}
// const howMuchFaster = calcTime(13)
// console.log(calcTime(26));for

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    return `(${(numbers[0], numbers[1], numbers[3])})`;
  }
}
console.log(createPhoneNumber);
