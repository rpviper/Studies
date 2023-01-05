'use strict';

// Challenge 1 ------------------------------------------------------------------------------------------------------------------------------------------

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number();
    // prompt(
    //   `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    // )
    // console.log(answer);
    typeof answer === 'number' && // Check if it is indeed a number
      answer < this.answers.length && // Check if the answer user inputs stays below answer length
      this.answers[answer]++; // After all first been true, increase the answer inside the answers [position]
    // console.log(this.answers);
  },
};
poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

const boardingPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    // console.log(`We are boarding now all ${n} passengers`); // These two will be first
    // console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // 1000 milliseconds
  // console.log(`Will start boarding in ${wait} seconds`); // This one follows after 3 second
};
const perGroup = 1000;
boardingPassengers(180, 3);
