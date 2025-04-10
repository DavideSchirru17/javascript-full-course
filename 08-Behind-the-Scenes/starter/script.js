'use strict';

// BLOCK OF SCOPES
// VAR a function scope - can be accessed from every where
// functions are
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `You are ${firstName}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh , and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPU';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

// global variable scope
const firstName = 'Jonas';
calcAge(1991);

// console.log(age);
// printAge();

console.log('');
console.log('-------------------');

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// !functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// only function declaration does not influenced by temporary death zone
function addDecl(a, b) {
  return a + b;
}

// fx expression
var addExpr = (a, b) => a + b;

const addArrow = (a, b) => a + b;

// Example
// e-commerce

if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

const calAnni = function (compleanno) {
  console.log(2037 - compleanno);
  console.log(this);
};

const calcAnni = compleanno => {
  console.log(2037 - compleanno);
  console.log(this);
  // this take the parent scope function
  // in this case window is in the global scope
};

calcAnni(2000);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};
// borrow method with out duplicate
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// copiamo un metodo
const f = jonas.calcAge;
// f();
console.log(f);
