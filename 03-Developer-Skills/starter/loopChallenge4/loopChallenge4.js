"use strict";

console.log("------ LOOPS CHALLENGE 4 --------");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // calculation tips
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// calculation bills[0] + titps[0] = totales[0]
console.log("1 bills", bills);
console.log("2 printing the tips into the array ", tips);
// create empty arrray
console.log("3 print tot = bills + tips each element in each array", totals);
