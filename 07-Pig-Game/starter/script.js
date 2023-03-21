'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0'); // This is an ID selector from CSS, the # part
const score1 = document.getElementById('score--1'); // It's also used to get CSS ID but no # needed
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing; // We pullled them out from init function because we need them to be in a global scope

// STARTING CONDITIONS
const init = function () {
  scores = [0, 0]; // These are the ones that have current on top of them
  currentScore = 0;
  activePlayer = 0;
  playing = true; // We are playing the game, so true, if we finish (win), then false

  score0.textContent = 0; // To make the score zero first
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add('hidden'); // Hides the dice first
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active'); // Because player 0 is the active
  player1.classList.remove('player--active');
};
init();

const switchActivePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0; // Basically have to reset the score back to 0 when rolling 1
  activePlayer = activePlayer === 0 ? 1 : 0; // Basically allows active player to switch from 1 to 0 and 0 to 1
  player0.classList.toggle('player--active'); // Changing the active player highlight color
  player1.classList.toggle('player--active');
};

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1; // Roll the dice 1 - 6
    dice.classList.remove('hidden'); // Show the dice
    dice.src = `dice-${diceRoll}.png`; // From line 29 index.html, picture src for the dice
    if (diceRoll !== 1) {
      // If diceroll is not 1, continue
      currentScore += diceRoll; // Current score = currentscore + diceroll
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // This makes active player either 0 or 1 (player1 vs player 2)
    } else {
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore; // Add current score to active players score
    // scores[1] = scores[1] + currentscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // score--${activePlayer} comes from index.htm line 14 and 22
    if (scores[activePlayer] >= 100) {
      // If the active player score is >= 100
      playing = false;
      dice.classList.add('hidden'); // Hides the dice after game is won
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // Winner gets added a new color scheme from CSS
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // Remove active highlight
    } else {
      switchActivePlayer();
    }
  }
});

// NEW GAME
btnNew.addEventListener('click', init);
// init();

const calcAge3 = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // Will be undefined
};
calcAge3(1982);
