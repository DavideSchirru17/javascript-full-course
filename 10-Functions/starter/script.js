"use strict";
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   // diversa variabile percio non modifica
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //!  is the same as doing ....
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// js passing by value not references

// call me back when you are ready

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// !higher - order function
const transformer = function (str, fn) {
  // console.log(`Original string: ${str}`);
  // console.log(`Transform string: ${fn(str)}`);
};

transformer("JavaScript is the best!", upperFirstWord);

// Js uses callback all the time
const high5 = function () {
  // console.log('✋🏼');
};

document.body.addEventListener("click", high5);
["Jonas", "Marta", "Adam"].forEach(high5);

// ! 137 FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    // console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Davide");

// ! closures? - difficult to understand
greet("Hello")("Poba");

// challenge arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} `);

//! 138 CALL AND APPLY METHODS
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],

  // book: function(){}
  book(flightNum, name) {
    // console.log(
    //   `${name} booked a set on ${this.airline} flight ${this.iataCode} ${flightNum}`
    // );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "Davide Schirru ");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;
// book from book const - this. is undefined
// book(23, 'Sara Williams');

book.call(eurowings, 23, "Sara");
// console.log(eurowings);

book.call(lufthansa, 239, "Mary");
// console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  booking: [],
};

book.call(swiss, 583, "Mary Cooper");
// console.log(swiss);

//! apply method ( not used anymore in javascript)

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
// console.log(swiss);
book.call(swiss, ...flightData);

//! 139 . BIND return a new function .this diventa eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtman");
bookEW23("Marta Cooper");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);

  this.planes++;
  // console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

// !CODING CHALLENGE
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
