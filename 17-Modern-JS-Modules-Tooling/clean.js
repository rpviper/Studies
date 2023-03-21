'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas'; // If no user inserted, change it to Jonas, but instead of doing this, do the upper line
  // user = user.toLowerCase(); // Don't manipulate original data
  const userToLowerCase = user.toLowerCase();

  // let limit; // Bad code example
  // if (spendingLimits[user]) {
  //   limit = spendingLimits[user];
  // } else {
  //   limit = 0;
  // }

  // const limit = getLimit(user);
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0; // One way of doing it
  // const limit = spendingLimits?.[user] ?? 0 // Another way

  return value <= getLimit(limits, userToLowerCase)
    ? [...state, { value: -value, description, user: userToLowerCase }]
    : state;
  // Creating a new array and putting the whole state in there and adding the new object in {}
  // budget.push({ value: -value, description: description, user: user });
  // budget.push({ value: -value, description, user: userToLowerCase }); // When the values stay the same we don't need to write them again
};
addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
// prettier-ignore
const budget2 = addExpense(budget, spendingLimits, 300, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = (
  state,
  limits // The idea is to not manipulate original data, always make copy
) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// for (const entry of budget) {
// let limit;
// if (spendingLimits[entry.user]) {
//   limit = spendingLimits[entry.user];
// } else {
//   limit = 0;
// }

// const limit = getLimit(entry.user);
// const limit = spendingLimits ? spendingLimits[entry.user] : 0;

// if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// }

const checkBudget = checkExpenses(budget2, spendingLimits);

console.log(checkBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit) // Until here is to get the items out
    .map(entry => entry.description.slice(-2))
    .join(' / '); // To get the emojis only
  console.log(bigExpenses);
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
  // If higher than bigLimit we want to add the emoji, if not we don't want to add anything
  // if (entry.value <= -bigLimit) {
  //   // output += entry.description.slice(-2) + ' / '; // Emojis are 2 characters
  //   output += `${entry.description.slice(-2)} /`;
  // }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
};
logBigExpenses(checkBudget, 1000);
//////////////////////
const timeFaster = function (time) {
  const result = (time * 60) / 1.25;
  const min = String(Math.trunc(result / 60)).padStart(2, 0);
  const sec = String(Math.trunc(result % 60)).padStart(2, 0);
  return console.log(`${min}:${sec}`);
};
timeFaster(38);
