'use strict';

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

// ! 75 undling click events EVENT LISTENER
// mouseclick - mouyse moving - key press - etc > react to it
// crea un add event listener - al click btn
// stampa in console l oggetto .guess.value
console.log(document.querySelector('.check'));
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20; // let becaouse need to be changed
document.querySelector('.number').textContent = secretNumber;

// secret number to compare
console.log('number secret: ', secretNumber);

// event listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // cambia il .message
  // document.querySelector('.message').textContent = 'cambia testo';

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤡 Correct Number ';

    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '100rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💥 You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💥 You lost the game ';
      document.querySelector('.score').textContent = 0;
    }
    // document.querySelector('.message').textContent = ' Too low';
    // score--;
    // document.querySelector('.score').textContent = score;
  }
});

// ? per git hub sintesi
// .textContent - .value -  .addEventListener() - math.trunc() - score-- - if() -
//  manipulating CSS style
