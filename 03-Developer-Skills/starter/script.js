// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//! 46 THE FOR LOOP
// authomat repetitive tasks

// lifting weights
// dont repeat your self principle
// console.log("Lifting weights repetition 1 🏋🏻‍♀️");
// console.log("Lifting weights repetition 2 🏋🏻‍♀️");
// console.log("Lifting weights repetition 3 🏋🏻‍♀️");
// console.log("Lifting weights repetition 4 🏋🏻‍♀️");
// console.log("Lifting weights repetition 5 🏋🏻‍♀️");
// console.log("Lifting weights repetition 6 🏋🏻‍♀️");
// console.log("Lifting weights repetition 7 🏋🏻‍♀️");
// console.log("Lifting weights repetition 8 🏋🏻‍♀️");
// console.log("Lifting weights repetition 9 🏋🏻‍♀️");
// console.log("Lifting weights repetition 10 🏋🏻‍♀️");

// create a loop for statement loop - loop running until the condition is TRUE
// 1. initial value of the counter
// 2. logical condition before the code is executed - if is true > run , if false stop
// 3. increase the counter each iteration rep = rep +1 || rep++
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
}

//! 47 LOOPING ARRAYS, BRAKING AND COUNTING
// !For loop an array
console.log(47);

const davideArray = [
  "davide",
  "schirru",
  2025 - 1989,
  "developer",
  ["Matteo", "Peter", "Stever"],
  true,
];

const types = [];

console.log(davideArray[0]);
console.log(davideArray[1]);
console.log(davideArray[4]);

for (let i = 0; i < davideArray.length; i++) {
  //console.log("array to print: ", davideArray[i], typeof davideArray[i]);
  // Reading from davide array
  //   console.log(
  //     davideArray[i],
  //     davideArray.indexOf("davide"),
  //     typeof davideArray[i]
  //   );

  // Filling the tupes array
  // types[i] = typeof davideArray[i];
  // add the element at the end of the array
  types.push(typeof davideArray[i]);
}

console.log(types);

const years = [1991, 2007, 1978, 2020];
// calculate the ages with loops
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2025 - years[i]);
}
console.log(age);

// !continue and break
// continue to the next one
// break the loop
console.log("---- ONLY STRINGS --- ");
for (let i = 0; i < davideArray.length; i++) {
  if (typeof davideArray[i] !== "string") continue; // skip the elements who are not strings
  console.log(davideArray[i], typeof davideArray[i]);
}

console.log("---- BREAK WITH NUMBER --- ");
for (let i = 0; i < davideArray.length; i++) {
  if (typeof davideArray[i] == "number") break; // skip the elements who are not strings
  console.log(davideArray[i], typeof davideArray[i]);
}

// ! 48 LOOPING BACKWARDS AND LOOPS IN LOOPS
console.log("---48 looping backwards ---");

const davideReverse = [];
for (let i = davideArray.length - 1; i >= 0; i--) {
  //   const valueAtIndes = davideArray[i];
  //   davideReverse.push(valueAtIndes);
  console.log(i, davideArray[i]);
}

// console.log(davideReverse);

// ! LOOP INSIDE OF A LOOP
console.log("---LOOP INSIDE LOOP---");
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- STARING EXERCISE ${exercise} `);

//   //   loop inside of this loop
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(` Exercise ${exercise}: lifting weifht repetition ${rep} 🏋🏻‍♀️`);
//   }
// }

// ! 49 WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(` Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// }

let ciao = 1;
while (ciao <= 10) {
  console.log(`while: lifting weights repetition ${ciao} 🏋🏻‍♀️`);
  ciao++;
}

// !random number
let dice = Math.trunc(Math.random() * 6); // n between 0 - 1
console.log(dice);

// runnign the loop until dice reach 6
while (dice !== 6) {
  console.log(`You rolled a ${dice}`); // carefull infinite loops
  dice = Math.trunc(Math.random() * 6) + 1; // n between 0 - 1
  if (dice === 6) console.log("Loop is about to end...");
}
