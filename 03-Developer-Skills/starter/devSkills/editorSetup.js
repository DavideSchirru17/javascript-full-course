"use strict";
console.log("------ INSTALL NODE");
// ------ X live server to install
// Node.js npm packages
const birthYear = 1991;
const x = "23";
if (x === "23") console.log(23);

const calcAge = function calcYear() {
  return 2025 - birthYear;
};

console.log(calcAge());

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const arrayConcat = [2, 3, 4, 5];
// ! 1) understand the problem
// - what the temperature amplitude ? difference between highest and lowest temperature
// - how the computer max and min temperature ?
// what's a sensor error? and what to do

// ! 2) breaking up into su-problems
// - how to ignore errors?
// - Find max value in tem array
// - find min value in tem array
// Subtrac min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i <= temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 1, 8]);
// max = 3
// max = 7
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2
// Function should now receice 2 arrays of temp

// 1) Understand the problem
// - With 2 arrays . should we implement functionality twice? No! Just merge 2 arrays
//* .concat()

const concatArrays = temperature.concat(arrayConcat);
console.log(concatArrays);
