// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//  CHALLENGE 1 --------------------------------------------------------------------------------------------------------------------------------

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console */

// const arr = [12, 5, -5, 0, 4];
const arr = [17, 21, 23];

const printForecast = function (arr) {
  let str = ""; // Basically a string version of starting from zero
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}ºC in ${i + 1} days `; //  current value of string + plus array at the current position
    // str += `${arr[i]}ºC`;
    // i + 1 is needed because arrays start from zero, so it would be ... 17ºC in 0 days otherwise
  }
  console.log(str);
};
printForecast(arr);
