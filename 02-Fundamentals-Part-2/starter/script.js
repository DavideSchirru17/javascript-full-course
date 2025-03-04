
// ! 32 ACTIVACTING STRICT MODE 
'use strict'; 
// write secure js code 
// avoid introduce bags create visible errors - mistake shown 
let hasDriversLicense = false; 
const passTest = true; 

// introduce a bag 
if(passTest) hasDriversLicense = true; 
if(hasDriversLicense) console.log('I can drive :D');

// *particular words are reserved words 
/*
const interface = 'Audio'; 
const privates = 534; 
const if = 233;
*/

//! 33 FUNCTIONS 

function logger(){
    console.log('my name is Davide');
}

// invoking - running - calling the function 
// reusable blocks - 
logger(); 
logger(); 
logger(); 

// parameter = input datas 
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = ` Juice with ${apples} apples and ${oranges} oranges`; 
    // return the value of the function 
    return juice; 
}
// arguments 
const appleJuice = fruitProcessor(10, 0)
console.log(fruitProcessor(7, 19));
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

// build it function console.log - Number()

const num = Number("23"); 
console.log('built in function:', num); 


//! 34. FUNCTION DECLARATION VS EXPRESSIONS 

// calcola l eta 
// * function declaration > can be called before 
function calcAge1(birthYear){
    // const age = 2037 - birthYear; 
    return 2037 - birthYear; // return the value 
}
const age1 = calcAge1(1989); 

// console.log(age1);
// * function expression cannot before initialization 
const calcAge2 = function(birthYear){
    return 2037 - birthYear; 
}
const age2 = calcAge2(1989); 
console.log(age1, age2);

// !35 ARROW FUNCTIONS 
// shorter and faster 
// function expression because you store in a variable 
// dont need { }
// => simple 1 line function : no need return 
const calcAge3 = birthYear =>  2037 - birthYear; 
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    // need more line of code 
    const age = 2025 - birthYear; 
    const retirementAge = 65 - age; 
    const retirementYear = 2025 + retirementAge; 
    // return retirement; 
    return `${firstName} retires in ${retirementYear}`; 
}

console.log(yearsUntilRetirement(1989, 'Davide')); 
console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1998, 'Stefano')); 

//! 36 FUNCTIONS CALLING OTHER FUNCTIONS 


// Cut the fruit in multiple pieces 
const cutPieces = function (fruit){
    return fruit * 4; 
}; 

// function 
const fruitProcessor2 = function (apples, oranges){
  const applePieces =   cutPieces(apples); // function called in the function 
  const orangePieces = cutPieces(oranges);
    const juice = ` Juice with ${applePieces} pieces apples and ${orangePieces} orange pieces`; 
    // return the value of the function 
    return juice; 
}

console.log(fruitProcessor2(2, 3)); 




//! 37 REVIEWING FUNCTIONS 
// calcola eta
const calcAge4 = function(year){
    // 2025 - 1989 = 36 years
    return 2025 - year
}

// calcolo gli anni che mancano alla pensione
const yearsUntilRetirement2 = function (birthYear, firstName) {
    // need more line of code
    const age = calcAge4(birthYear); // linea calcola eta = 36 y 
    const retirementYears = 65 - age; // quanti anni alla pension? 29 years
    
    // calling immediately this if statement function 
    // do not need any invoking 
    if(retirementYears > 0){
        console.log(`${firstName} retires in ${retirementYears} years`); 
        return retirementYears; 
    } else {
        console.log(`${firstName} has already ritired`)
        return -1; 
    }
}
console.log(yearsUntilRetirement2(1950, 'Davide')); 