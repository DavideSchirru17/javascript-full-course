'use strict';

/*
task 
implement a game rest functionality, so that the player can make a new guess! Here is how: 

1. Select the element with the 'again' class and attach a click event handler 
2. In the handler function , restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color #222 and number width 15rem 

*/

// ! DOM MANIPULATION
const mess = document.querySelector('.message');
console.log(mess);

// real dom manipulation
console.log(
  (document.querySelector('.message').textContent = ' 🤡 Correct Number ')
);

// document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// console.log((document.querySelector('.guess').value = 23));
console.log(document.querySelector('.guess').value);

// ! 75
// ! 75 undling click events EVENT LISTENER
// mouseclick - mouyse moving - key press - etc > react to it
// crea un add event listener - al click btn
// stampa in console l oggetto .guess.value
console.log(document.querySelector('.check'));
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20; // let becaouse need to be changed
let highscore = 0;

// *function DIPLAY THE MESSAGE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// secret number to compare
console.log('number secret: ', secretNumber);

//! FUNCTION  event listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // cambia il .message
  // document.querySelector('.message').textContent = 'cambia testo';

  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No Number';
    displayMessage('🛑 No Number');
    // WHEN PLAYER WIN
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🤡 Correct Number ';
    displayMessage('🤡 Correct Number ');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '100rem';
    //! new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // ! when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high' : '📈 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📈 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 💥 You lost the game ');
      // document.querySelector('.message').textContent = ' 💥 You lost the game ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' 💥 You lost the game ';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' 💥 You lost the game ';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //
    // document.querySelector('.message').textContent = ' Too low';
    // score--;
    // document.querySelector('.score').textContent = score;
  }
});

//! CLICKING ON AGAIN > RESET 1.number 2. message - 3. score
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  // reset the message
  // document.querySelector('.message ').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // reset score
  document.querySelector('.score ').textContent = '20';
  // reset the number
  document.querySelector('.number ').textContent = '?';
  // restore secretNumber
  document.querySelector('.guess ').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.highscore').textContent = highscore;
});

// ? per git hub sintesi
// .textContent - .value -  .addEventListener() - math.trunc() - score-- - if() -
//  manipulating CSS style
// () refactoring -> duplicate code?
