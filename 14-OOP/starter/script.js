'use strict';

// creo un prototipo
// ! constructor function

const Person = function (FirstName, birthYear) {
  this.FirstName = FirstName;
  this.birthYear = birthYear;
};
// 2. creo Object linking to the instance prototype
const Jonas = new Person('Jonas', 1991);
console.log(Jonas);
// 3. auth return what is inside of the contrucor function

// 222 PROTOTYPES

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(Jonas instanceof Person);

// prototypes
console.log(Person);
console.log(Person.prototype);

// *aggiungo metodo al person prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Jonas.calcAge();
matilda.calcAge();
console.log(matilda);

console.log(Jonas.__proto__);
console.log(Jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(Jonas.species, matilda.species);

console.log(Jonas.hasOwnProperty('firstName'));
console.log(Jonas.hasOwnProperty('species'));

// 224 prototypal inheritance on built in objects
console.log(Jonas);
// object prototype - top of the prototyupe chain
console.log(Jonas.__proto__);
console.log(Jonas.__proto__.__proto__);
console.log(Jonas.__proto__.__proto__.__proto__); // null

console.dir(Person);
console.dir(Person.prototype);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// ! car prototype CHALLENGE 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// car instance creation 2 cars
const Ferrari = new Car('Ferrari', 300);
const alfa = new Car('Alfa', 220);

// aggiungo method to the car prototype
Car.prototype.acceleration = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

//brake method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} braking is going at ${this.speed}`);
};

// accedere alla funzionalita

Ferrari.acceleration();
Ferrari.acceleration();
Ferrari.acceleration();
Ferrari.brake();
Ferrari.brake();
Ferrari.brake();
// ! ----

// ! 226 ES6
// CLASS DECLARATION
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // Metyods will be added to .prototype property
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
jessica.greet();

// 227 setteers and getters
// 228 static method
//!  229 OBJECT.CREATE
console.log(' ');
console.log('----object create -----');
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// CHLLENGE 2
