'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// display movimenti - che riceve dati come i movements
const displayMovements = function (movements) {
  // per ogni element ()mov, index iterazione

  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    // ternary operator type class diventa o deposit o withdrow
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // create multiline
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// invoke the function
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// how to loop over a string?
//1 ciclo itera ogni elemento dell array movment in un ciclo loop for of
// for (const mov of movements) {
//   //2 se il numero iterato è > 0 stai depositando
//   if (mov > 0) {
//     console.log(`You deposited ${mov}`);
//   } else {
//     console.log(`You withdrew ${mov}`);
//   }
//   //3 altrimenti stai prelevando
// }
// console.log('----------');
// // can you do a for each emethod for the movements banking ?

// movements.forEach(el => {
//   if (el > 0) {
//     console.log(`You deposited ${el}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(el)}`);
//   }
// });

/////////////////////////////////////////////////
//! 149 SIMPLE ARRAY METHODS SLICE

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); // start posizione n 2
// console.log(arr.slice(2, 4)); // start posizione n 2 4 is not included
// console.log(arr.slice(1, -2)); // start posizione n 2 4 is not included
// console.log(arr.slice()); // create a shallow array
// console.log([...arr]); // create a shallow array

// ! SPLICE METHOD
// !it change the original array

// console.log(arr.splice(1, 2));
// console.log(arr);

// ! reverse method
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// // how to reverse this array ?
// arr2.reverse();
// // console.log(arr2);

// ! concat METHOD : CONCATENATION
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// ! join method
// console.log(letters.join(' - '));

//!  151 LOOPING ARRAYS  FOR EACH METHOD
// const items = ['item1', 'item2', 'item3'];
// const vuoto = [];

// come loopare con ciclo loop ?
// for (let i = 0; i < items.length; i++) {
//   vuoto.push(items[i]);
// }
// console.log(vuoto);

// come pushare su vuoto anziche ciclo loop con forEach( funzione di call back )
// .push l elemento di interesse
// items.forEach(elemento => {
//   vuoto.push(elemento);
// });

// console.log(vuoto);

// !152  CREATE MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// crea un foreach loop sulla mappa currencies con funzione di call bacl
// imposta i valori value , key , map

// currencies.forEach((value, key, map) => {
//   // console.log(`${key}: ${value}`);
// });

//! 152 SET

// challenge

// funzione che controlla il numero di cani
// passo parametri da argument all invoking della funzione
const checkDogs = function (dogsJulia, dogsKate) {
  // .slice : crea un nuovo array con un slice
  const dogsJuliaCorrected = dogsJulia.slice();
  // .splice inserisce o rimuove
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  // console.log(dogsJuliaCorrected);
  // itera nell aray
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy `);
    }
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//!  157 .map
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
let euroToUsd = 1.1;
// nice and clean
const movementsUSD = movements2.map(mov => mov * euroToUsd);
console.log(movements2);
console.log(movementsUSD);

const movimentiUSDfor = [];
for (const mov of movements2) {
  movimentiUSDfor.push(mov * euroToUsd);
}
console.log(movimentiUSDfor);

const movementsDescriptions = movements2.map(
  (mov, index) =>
    // crea la stessa funzione ma con ternary operator

    `movement ${index + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
);

// stampa in console tutti i calcoli fatti dell iterazione all interno dell array
console.log(movementsDescriptions);

const user = 'Steven Thomas Williams';
const userName = user
  .toLowerCase()
  .split(' ')
  .map(el => el[0]);
console.log(userName);

// ! 158 .filter ()

// withdrawals
const movements3 = [1, 2, 3, 4, 5];

// how to create widraw?
// itero sugli elementi negativi

const ritiro = movements3.filter(el => {
  return el < 0;
});
// console.log(ritiro);

// ! 160 .reduce( )
// s: reduce ci permette di creare una somma dei valori dell array

// ? how to do it?
// .reduce(callback(+ current value ) => )
const balance = movements3.reduce(function (acc, cur, i, arr) {
  console.log(
    `Iterazione n°: ${i} -  Accumulator: ${acc} - Current Value: ${cur} - complex: ${
      cur + acc
    }`
  );
  return acc + cur;
});
console.log(balance);

// s: print the new balance to the user interface
// ?

// funzione calcolo display
const calcDisplayBalance = function (movements) {
  // reduce calcolo balance iterando su array movements
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
// .balance__value class

// invok function - passing the value i want
calcDisplayBalance(account1.movements);

// how to display
// s: voglio display un nuovo array
// ? how
// 1. take the element from the Dom (labelBalance)
//2. creo una funzione displaySomma

const displaySomma = function (el) {
  //3. metodo reduce per creare una somma (accumulator, current element , index, array )
  const balance = el.reduce((acc, cur, index, arr) => acc + cur, 0);
  // 4. modifico il DOM inserendo nell' oggetto il valore di balance
  labelBalance.textContent = `${balance} £`;
};

// invoko la funzione passando l' array di interesse che sara el
displaySomma(account4.movements);
// c: print the value in the DOM 1. function display
