
console.log('START OF THE ASSIGNMENTS .JS--------');
let country = 'Italy'; 
let continent = 'Europe'; 
let population = '500 000 000'; 

console.log('stringa: ', country,continent, population);
//! DATA TYPES 
true; 
console.log();
console.log();
let jsIsFun = true; ;
console.log('javascript is fun?:', jsIsFun)
// console.log(typeof 12);
console.log(typeof "string");
console.log(typeof true);
jsIsFun = 12; 

let year = 1991; 
console.log(year);
console.log(typeof year);

console.log(typeof null);

// ! 12. LET CONST AND VAR 

console.log('');
console.log('12. LET CONST AND VAR ');

let age = 30; 
age = 31; 

const birthDay = 1991; 
// birthDay = 1990; 
// const x ; 

var xnuova = 'programmer';
xnuova = 'teacher'; 
console.log(xnuova);

let firstName = 'Davide'; 
let lastName = 'Schmedtmann'; 
lastName = 'Schirru'; 
console.log(lastName );

//! 13. OPERATORS
console.log('');
console.log('13. OPERATORS');

const now = 2037; 
const ageJonas = now - 1991;
const ageSara = now - 2019; 


console.log(ageJonas * 2, ageSara / 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2  
console.log(ageSara);
console.log(firstName + lastName);
console.log(firstName + ' ' +  lastName );

let z = 10 + 5; 

z += 10; // z = z + 10 = 15 + 10 = 25
z *= 4;  // z = z * 4 = 25 * 4 = 100
z--; // z = z -1 
z++ ; 
console.log(z);

// comparison operators 
console.log( ageJonas > ageSara);
console.log(ageSara >= 18); 
const isFullAge = ageSara >= 18  ; 
console.log(isFullAge );
console.log(now - 1991 > now - 2018);

// ! 14. OPERATORS PRECEDENCE 

console.log('14. OPERATORS PRECEDENCE');
console.log('');

console.log(now - 1991 > now -2018);
console.log(25 - 10 - 5);

let a , y; 
a = y = 25 - 10 - 5; // 10 x = y = 10
console.log(a, y);

const avarageAge = (ageJonas + ageSara) / 2; 
console.log('avarage: ', avarageAge);


const jonas = 'I am ' + firstName + ', a' + (year - birthDay) + ' years old ' + job1 + '!'; 
console.log(jonas);


//! TEMPLATE LITTERALS 
const jonasNew = `Ì am ${firstName}, a ${year - birthDay} years old ${job2} `
console.log(jonasNew);

console.log(` Just a regular string using backticks :) ...`);

// multi line literal \n\

console.log('string with \n\
    multiple \n\
    lines');

console.log(` string
    multiple
    line
    `);


// !18. IF ELSE 
console.log('');
const ageIF = 10; 
// const isOldEnough = ageIF >= 18; 
// console.log(isOldEnough);

if(ageIF >= 18){
console.log('Sarah can start driving license 🐷');
} else {
    const yearsLeft = 18 - ageIF; 
    console.log(` Sarah is too young. Wait another ${yearsLeft} years`);
}

console.log('');

const birthYear = 2020; 
let century; 
if(birthYear <= 2000){
    century = 20; 
} else {
     century = 21; 
}
console.log( ` The century is: ${century}` );

//! 20. COVERSION COERCION 
console.log('');
const inputYear = '1991'; 
console.log(Number(inputYear) +  18);
console.log(inputYear + 18);

console.log(Number('jonas'));
console.log(typeof NaN); // invalid number 

// convert numbers to string 
console.log(String(23), 23);
console.log(23);

// type coercion 
console.log('I am ' + 23 + ' year old');
console.log('23' - '10' + 3 );
console.log('23' * 2);

let n = '1' + 1; // string 11 
n = n - 1 ;  // menus (-) convert into a number 
console.log(n);

// !21 TRUTHY AND FALSY 
//* 5 FALSY : 0, '', undefined , null , NaN, ''
// when you want converto into a boolean are falsy 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log('');

console.log(Boolean('jonas'));
console.log(Boolean({}));

const money = 0; 
// js try to convert into boolean 
if(money){
    console.log('Do not spend it all');
} else {
    console.log('You should get a job!');
}

// variable is defined? 
let height; 
if(height){
    console.log('YAY! heigh is defined');
} else {
    console.log('Height is UNDEFINED');
}
console.log('');


// !22 EQUALITY OPERATORS 

const age0 = 18; 

if(age0 === 18){
    console.log('You just become an adult :D (STRICT)', age0);
}

// strict equality operator === 
if(age0 == 18){
    console.log('You just become an adult to (LOSE)');
}

// const favorite = Number(prompt('write your favorite number: ')) ; 
console.log(typeof favorite);// print a string

// if(favorite == 23){ // type courcion because ev if is a string == 
//     console.log('Cool! 23 is an amazing number');
// } else if(favorite === 7){
// console.log('7 is also a cool number');
// }  else if(favorite === 9){
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7');
// }

//!ELSE IF BLOCK 
//* always use strict version 

// console.log('');
// console.log('!== strict');
// if(favorite !== 23 ){
//     console.log('why not 23');
// }


// ! 23 BOOLEAN LOGIC [&& 2, ||1 , ! opposite]
// Solve problems - use operator 
// * && both need to be true , || just 1 need to be true  , ! NOT 

// examples 
// age0 >= 20; 
// age0 < 30; 

// !24 logical operator 

const hasDriverLicense = true; // A 
const hasGoodVision = true; // B 

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense );

const shoudDrive = hasDriverLicense && hasGoodVision

// if(hasDriverLicense && !hasGoodVision){
//     console.log('Sara is able to drive! ');
// } else {
//     console.log('Someone else shoud drive...');
// } 

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Sara is able to drive! ');
} else {
    console.log('Someone else shoud drive...');
} 

console.log('');
// ! 25 SWITCH STATMENT similar to if else 

const day = 'sborra'; 
switch(day){
    case 'monday': // day === 'monday'
        console.log('Plan course structure'); 
        console.log('Go to coding meetup');
        break; 
    case 'tuesday': 
        console.log('Prepare theory videos');
        break; 
    case 'wednesday':
    case 'thursday': 
        console.log('Write code examples');
        break; 
    case 'friday': 
        console.log('Record videos');
        break; 
    case 'saturday': 
    case 'sunday': 
        console.log('Enjoy the weekend');
        break; 
    default: 
        console.log('Not a valid day!');
}

// !IF ELSE COPYING THE SWITCH STATEMENT 
console.log('');
if(day === 'monday'){
    console.log('Plan course structure'); 
    console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
} else if(day === 'friday'){
    console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}

//! 27 . STATEMENTS AND EXPRESSIONS 

3 + 4

1991 

true && false && !false 

if(23 > 10){
    // * statement (dichiarazione )who doesnt produce a value 
    const str = '23 is bigger'; // expression  doesnt produce values 
}
const me = 'Jonas'; 
console.log(` I am:  ${2037 - 1991} years old ${me}`);

// !28. CONDITIONAL OPERATOR (challenge #4)
// * TERNARY OPERATOR 
// all in 1 line like if() 
const age1 = 18; 
// similar to if block 
age1 >= 7 ? console.log('I like to drink wine 🍷') : console.log('You cannot drink alchol , drink 🧊!'); ;

const drink = age1 >= 18 ? 'wine 🍷' : 'water 🌊 '; 
console.log(drink);

let drink2; 
if(age1 >= 18){
    drink2 = 'wine'; 
} else {
    drink2 = 'water'; 
}
console.log(drink2);

// tamplate literal 
// if eles with bigger block of codes 
console.log(`I like to drink ${age1 >= 18 ? 'wine 🍷' : 'water 🌊 '}`);

// ! 30 javascript versions 
// 1995 Brendan Eich - Mocha 
// 1996 
// ECMA 1997 
// 2009 ES5 
// 2015 !!!! ES6/ ES2015 ECMA script 2015 Biggest update to the language ever 
// annual release like iphone 
// 15:ES6 ; 16:ES7 ; 17:ES8 ; 18:ES9 ; 19: ES19; 2020: ES11 ; 
// 2021: ES12; 2022: ES13 ; 2023: ES14 ; 2024: ES15 ; 2025: ES16
//* 2025 is ES16 June will be Ecma internation general assembly 
//* how to use modern javascript today 
// BABEL 