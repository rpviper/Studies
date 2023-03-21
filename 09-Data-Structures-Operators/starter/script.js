'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // this.o of course means restaurant object here
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}
will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    // Spread operator example
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
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

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

const [esimene, , second] = restaurant.categories;
console.log(esimene, second);
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // Switches them around
console.log(main, secondary); // Before it was Italian Vegetarian, now its Vegetarian Italian
restaurant.order(2, 0);
console.log(restaurant.order(2, 0));

let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c: 14 };
// prettier-ignore
({a1, b1} = obj)
// Needs to have () for mutation
console.log(a1, b1); // 23 7

const friOpen = ({
  fri: { open, close },
} = openingHours);
console.log('Here:', friOpen); // 11 23

const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArray); // [1, 2, 7, 8, 9]

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

const ingredients = [
  // prompt(`Ingredient 1?`),
  // prompt(`Ingredient 2?`),
  // prompt(`Ingredient 3?`),
];
restaurant.orderPasta(...ingredients); // Will display what is typed into prompt

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); // The rest takes them all, no matter how many numbers
add(4, 5, 6, 7);
add(1, 2, 5, 8, 3, 5, 8);
const e = [23, 5, 7];
add(...e); // Adds new array e no problem

restaurant.numGuests = 23;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// CODING CHALLENGE 1 -------------------------------------------------------------------------------------------------------
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [goalKeeper, ...fieldplayers] = players1;
console.log(goalKeeper, fieldplayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const { team1: team1 } = game.odds;
console.log(team1);
const { x: draw } = game.odds;
console.log(draw);
const { team2: team2 } = game.odds;
console.log(team2);
// const {odds: {team1, x : draw, team2}} = game   // Also can be done
//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Mueller', 'Lebovski', 'Kimmich'); // Basically the idea is, how many players goaled, that is the score
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// CHALLENGE 2 ------------------------------------------------------------------------------------------------------------------------------------------
// 1
for (const [goal, player] of game.scored.entries()) {
  // In here it works because array
  console.log(`Goal ${goal + 1}: ${player}`);
}
// 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
// 3
for (const [team, odd] of Object.entries(game.odds)) {
  // In here we need object.entries
  const teamStr = team === 'x' ? 'Draw' : `Winner ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// Bonus
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter
// a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const orderSet = new Set(['pasta', 'pizza', 'pasta', 'pizza', 'pizza']);
console.log(orderSet); // {'pasta', 'pizza'}
console.log(new Set('aadukas'));

const numbers = [1, 2, 3, 1, 2, 3, 1];
const uniqueNumbers = [...new Set(numbers)];
// Pushing the unique numbers back to an array with the spread operator
console.log(uniqueNumbers);
console.log(new Set('ojdwpojdqwdfoshvdchvdfvhbs').size);

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
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// Gives us boolean comparison, and the rest.set true or false will give us result we are open

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
// console.log(question.get('question')); // What is the best programming language?
for (const [key, value] of question) {
  if (typeof key === 'number')
    // If the key is a number aka [1, 'C']
    console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer?'));
// console.log(question.get(question.get('correct') === answer));

// CHALLENGE 3 --------------------------------------------------------------------------------------------------------------------------------------
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2
gameEvents.delete(64);
console.log(gameEvents);
// 3
const timePlayed = [...gameEvents.keys()].pop(); // To get the last time from the array*
console.log(
  `An event happened, on average, every ${timePlayed / gameEvents.size} minutes`
);
// 4
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'First' : 'Second';
  console.log(`On ${half} half ${minute} minutes, there was ${event}`);
}

const checkMiddleSeat = function (middleSeat) {
  // B and E are middle seats
  const seat = middleSeat.slice(-1);
  if (seat === 'B' || seat === 'E') {
    console.log('You got the middle seat :(');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// const passenger = 'jOnAs';
// const passengerLowerCase = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
// console.log(passengerCorrect);

const fixPassengerNames = function (passenger) {
  const passengerLowerCase = passenger.toLowerCase();
  const passengerCorrect =
    passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
  return passengerCorrect.trim();
};
console.log(fixPassengerNames('manaGemenT'));

const announcement = 'All guests should use gate 1, I repeat gate 1';
console.log(announcement.replaceAll('gate', 'door'));

const plane2 = 'A320neo';
console.log(plane2.includes('A3'));
let [firstName, lastName] = 'Raino Paal'.split(' ');
const newName = ['Mr.', firstName, lastName].join('---');
console.log(newName);

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

const message = 'Go to gate 7!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // To make number to a string, same as String()
  const last = str.slice(-4); // Taking last 4 digits
  return last.padStart(str.length, '*'); // Take the whole string length and replace with *
};
console.log(maskCreditCard(514515611351));
console.log(maskCreditCard(5256358));
console.log(maskCreditCard('514515611351'));

function planesInLine(plane) {
  console.log(`There are ${plane} planes in line ${'✈'.repeat(plane)}`);
}
planesInLine(2);
planesInLine(10);
planesInLine(5);

// Challenge 4 ------------------------------------------------------------------------------------------------------------------------------------------

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value; // Adds text already into the console
  // console.log(text);
  const rows = text.split('\n'); // To make them all separate strings?
  // console.log(rows);
  for (const [i, row] of rows.entries()) {
    // The i was needed for the '✅', and so is rows.entries()
    const [first, second] = row.toLocaleLowerCase().trim().split('_');
    // Changes all to lowercase, then removes caps, then removes _
    // console.log(first, second);
    const output = `${first}${second.replace(
      // First word is already good
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// One more string challenge -----------------------------------------------------------------------------------------------------------------------------
const flights2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
for (const flight of flights2.split('+')) {
  // Split naturally removes the '+'
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(35);
  console.log(output);
}
