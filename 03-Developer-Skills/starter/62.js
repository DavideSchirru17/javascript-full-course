"use strict";

console.log("---- 62 -----");

// THINKING about the problem
// break up in sub problems

// forecast temperatures : previsione delle temperature massime
// display : termometer with these temperatures

// example [17, 21, 23]
// will print
const t = [17, 21, 23];
const d = [12, 5, -5, 0, 4];
//!1 UNDERSTAND THE PROBLEM  //
// - Array transform into a string separated by ...
//- what is x ? answer: index + 1

//!2 BREAKING UP INTO SUBPROBLEMS
// -----------transform array into string
// - transform each element to string with °C
// - String need to contain day (index + 1)
// - And ... beetween elements and statt and end of string

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days...`;
  }
  // 0: ? yes > arr [0] = 17 °C
  // 1: ? yes > arr[1] = 21 °C > +1 = 2
  // 2 ? yes > arr[2] str = 17 , 21, + 23 °C  i + 1 = 3
  // 3  no > escape from the loop
  // str = 17 ° c, 21 °C , 23 °C
  console.log("...", str); //
};
printForecast(t);
console.log(
  `example: ${t[0]}°C - ${d[0]} March , ${t[1]}°C - ${d[1]} March , ${t[2]}°C - ${d[2]} March`
);

console.log("------63 AI tools -----");
console.log("-----64 Ai challange -----");
/*lets say youre builgind a time tracking application for freelencer. 
I am building a time tracking application for freelancers. 
Write a  function called analyseWorkWeek that receive an array of daily work hours for a certain week, and returns an object with the following data: 
1. total hours wored 
2. Avarage daily hours 
3. the day with the most hours worked 
4. Number of days worked 
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// 1 UNDERSTAND THE PROBLEM

//2 BREAKING UP INTO SUBPROBLEMS

function analyseWorkWeek(workHours) {
  // Calculate total hours worked in the week
  const totalHours = workHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = parseFloat((totalHours / workHours.length).toFixed(1));

  // Find the maximum hours worked in a single day
  const maxHours = Math.max(...workHours);

  // Find the index (day) with the most hours worked (Monday is 0)
  const mostWorkedDay = workHours.indexOf(maxHours);

  // Count the number of days worked (days with more than 0 hours)
  const daysWorked = workHours.filter((hours) => hours > 0).length;

  // Check if the total hours meet or exceed the 35-hour full-time threshold
  const isFullTime = totalHours >= 35;

  // Return an object containing the calculated data
  return {
    totalHours, // Total hours worked in the week
    averageHours, // Average daily hours (rounded)
    mostWorkedDay, // Day with the most hours worked (0 = Monday)
    daysWorked, // Number of days worked (non-zero hours)
    isFullTime, // Boolean: true if worked 35 hours or more
  };
}

// Example usage:
const workWeek = [7.5, 8, 6.5, 0, 8.5, 4, 0]; // Monday to Sunday
console.log(analyseWorkWeek(workWeek));
