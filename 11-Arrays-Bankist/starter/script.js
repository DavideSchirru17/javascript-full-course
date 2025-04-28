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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

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

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   // transform age
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // filter
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // .reduce(accumulation, age , index , arr )
//   const avarage = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return avarage;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// costante di cambio
const euroToUSD = 1.1;

// totalDepositUSD : funzione
// 1. elimina i valori negativi
// 2. converte ogni songolo EURO * il cambio in UDS
// 3. riduce ad un singolo valore = somma totale dei depositi fatti

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(
      `Array created by the .map () ${arr} che ha eliminato i valori negativi `
    );
    mov * euroToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

//!164  .find() : find the first element of the condition

// .find mi trova il primo elemento - a differenza di filter the mi trova diversi e crea un array
const firstWithdrawal = movements.find(el => el < 0);
const allNegatives = movements.filter(el => el < 0);
console.log(allNegatives);
console.log(firstWithdrawal);

// trova il nome della persona acc.owner === 'Jessica'
const accountName = accounts.find(el => el.owner === 'Jessica Davis');
console.log(accountName);

// c: .find a name in an object

// ! LOGIN

// 1 current account?
// 2. click del bottone
//  - trova username === oginuser .valaue
// if() curren pin === number input login pin
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// 166 implementing transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// 167 find index
// delte elemnt form array
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // .indexof(23)
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }
});

// 168 findlast findlastindex
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// Your latest large movments was X movements ago
const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 2000
);

console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movments was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

// 169 some every
console.log(movements);
// Equality
console.log(movements.includes(-130));
// some: condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(account4.movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
