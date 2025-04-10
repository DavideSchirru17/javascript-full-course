'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // most used DOM
const score1El = document.getElementById('score--1'); // a little bit faster
let currentEl0 = document.querySelector('#current--0');
let currentEl1 = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// added the hidden class to hide the dice
let scores, currentScore, activePlayer, playing;

// initial starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//! ROLLING THE DICE functionality
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rollin the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generatig a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    //   src manipulation
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true , switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // score0El.textContent = dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentEl0.textContent = currentScore; // CHANGE LATER --- at the current player!! in the future
    } else {
      // switch to the next player
      switchPlayer();
      // document.querySelector('.player--1').style.backgroundColor = 'red';
    }
  }
});

// math - src - el.toggle() show / hide an element

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1 ADD CURRENT SCORE TO THE ACTIVE PLAYER
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2 . CHECK IF THE PLAYER SCORE IS >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}}`)
        .classList.remove('player--active');
    } else {
      // switch to the other player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
