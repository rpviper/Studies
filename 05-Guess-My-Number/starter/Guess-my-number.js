'use strict';

// GUESS THE NUMBER GAME

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // Made this to a function so for example line 21 disappears
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Input is a string, so need to make it a number

  // WHEN THERE IS NO GUESS
  if (!guess) {
    // Means if there is no value, no guess
    displayMessage("⛔ You didn't insert a number!");
    // document.querySelector('.message').textContent =
    //   "⛔ You didn't insert a number!";

    // WHEN THE GUESS IS RIGHT
  } else if (guess === secretNumber) {
    displayMessage('😜 Correct number!!!');
    document.querySelector('.number').textContent = secretNumber; // Changes the textcontext now to the random number from 1 - 20
    // Secondly it also unhides the question mark and shows the secret number
    document.querySelector('body').style.backgroundColor = '#60b347'; // Changes background color to green
    document.querySelector('.number').style.width = '30rem'; // Making the number box wider
    document.querySelector('title').textContent =
      '💥💥💥Correct number!!!💥💥💥';
    document.querySelector('h1').textContent = '💥💥💥Correct number!!!💥💥💥';

    // CHANGES THE HIGHSCORE
    if (score > highscore) {
      // Changes the highscore to the new highscore
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // CHANGES THE LOW/HIGH MESSAGE
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Means that the score doesn't go to minus when gets below one, needs to be below one otherwise have to press twice for 0
      displayMessage(
        guess > secretNumber
          ? '🔼 Number is too high!'
          : '🔽 Number is too low!'
      );
      score--; // We decrease the score with every wrong answer
      document.querySelector('.score').textContent = score; // Then print the new score
    } else {
      displayMessage('👎 You lost the game!');
      document.querySelector('body').style.backgroundColor = 'orange';
      document.querySelector('.score').textContent = 0;
      document.querySelector('title').textContent = '😥You lost the game!😥';
      document.querySelector('h1').textContent = '😥You lost the game!😥';
    }
  }
});

// TO RESTART THE WHOLE GAME

// document.querySelector('.again').addEventListener('click', function () {   Very easy way to reload the game LOL
//   document.location.reload(true);                                          It does not remember highscore though
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('title').textContent = 'Guess My Number!';
  document.querySelector('h1').textContent = 'Guess My Number!';
});

// WHEN THE GUESS IS TOO HIGH ----- this code got all refactored
/* else if (guess > secretNumber) {
    if (score > 1) {    
      document.querySelector('.message').textContent = '🔼 Number is too high!';
      score--; // We decrease the score with every wrong answer
      document.querySelector('.score').textContent = score; // Then print the new score
    } else {
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'orange';
      document.querySelector('.score').textContent = 0;
      document.querySelector('title').textContent = '😥You lost the game!😥';
      document.querySelector('h1').textContent = '😥You lost the game!😥';
    }

    // WHEN THE GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      
      document.querySelector('.message').textContent = '🔽 Number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'orange';
      document.querySelector('.score').textContent = 0;
      document.querySelector('title').textContent = '😥You lost the game!😥';
      document.querySelector('h1').textContent = '😥You lost the game!😥';
    }
  }
}); */
