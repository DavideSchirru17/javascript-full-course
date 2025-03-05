
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

// !39 INTRODUCTION TO ARRAYS 
// DATA STRUCTURES 

const friend1 = 'Michael'; 
const friend2 = 'Steven'; 
const friend3 = 'Peter'; 

const friends = ['Michael', 'Steven', 'Peter']; 
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020)
console.log(friends[2]);
console.log(friends.length); // length = lunghezza dell' array is not 0 based 

console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // only primitive values are unmutable !! so even if there is a const = because is an array not a primitive can be modified 
console.log(friends);

const firstName = 'Davide'; 
const jonas = [firstName, 'Schirru', 2025 - 1989, 'developer', friends];
console.log(jonas); 

// Ecercise 

const calcAgeNew = function (birthYear){
    return 2025 - birthYear; 
}

const yearsNew = [1990,  1967, 2002, 2010, 2018]
const age11 = calcAgeNew(yearsNew[0])
const age12 = calcAgeNew(yearsNew[1])
const age13 = calcAgeNew(yearsNew[2])
console.log(age11, age12, age13);

const ages = [calcAgeNew(yearsNew[0], calcAgeNew(yearsNew[1]))]
calcAgeNew(yearsNew[yearsNew.length -1]); 
console.log(ages);

// ! 41 BASIC ARRAY METHODS operations 

// most used methods
// ? ( + )  ADD ELEMENTS IN AN ARRAY 
//* .push()  - add element at end 
//* .unshift()  - add element at the beginning 

//! ( - ) REMOVE ELEMENTS IN THE ARRAY 
//* .pop() - remove element at the end 
//* .shift() - remove element at the beginning 

//* altri metodi 
//* .indexOf() - indice 
//* .includes() - e incluso? true or false response boolean 








const friends41 = ['Michael', 'Steven', 'Peter']; 
const newLength = friends41.push('Jay'); // * add at the end of the array 
console.log(friends41);
console.log(newLength);

//*add element beginnign of the array 
//* unshift()

friends41.unshift('John'); 
console.log(friends41);

// !remove elements 
// ? pop method - the last element of the array 
const popped = friends41.pop(); 
friends41.pop(); 
console.log(friends41);
console.log(popped);

friends41.shift(); // !remove the first one 
console.log(friends41);

// position of the element
console.log(friends41.indexOf('Steven'));

//* .include() response with a boolean true or false 
console.log(friends41.includes('Steven'));
console.log(friends41.includes('Davide'));
console.log(friends41.includes('23'));


if(friends41.includes('Steven')){
    console.log('You have a friend called Peter');
}

// ! 42 INTRO TO OBJECTS 
console.log('42 INTRO TO OBJECTS <-----------------');
console.log('');

const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991,  'teacher' , ['Michael', 'Peter', 'Steven']]; 
// key : value 

const jonas2 = {
    firstName : 'Davide', 
    lastName : 'Schirru', 
    age : 2025 - 1989, 
    job: 'developer', 
    friends : ['Michael', 'Peter', 'Steven']
}; 

console.log(jonas2);

//! 43 DOT VS BRACKET NOTATION 
console.log('43 dot vs bracket notation -------');
console.log(jonas2);
console.log(jonas2.lastName); // . operator retriev the propriety 
// you can use also braket notation 
console.log(jonas2['lastName']);

const namekey = 'Name'; 
console.log(jonas2['first' + namekey]);
console.log(jonas2['first' + namekey]); // braket notation not the dot nation 

const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName , age, job, and friends'); // pop up window with input field  
console.log(jonas2[interestedIn]);

if(jonas2[interestedIn]){
    console.log(jonas2[interestedIn]);
} else {
    console.log('Wrong request!');
} // retrieve element from an object 

jonas2.location = 'Portugal'; 
jonas2['twitter'] = '@joansschmedtman'; 
console.log(jonas2);

// Challenge 
// 'jonas has 3 friends and his best friends is called Michael'
jonas2.bestfriend = 'Michael'; 
jonas2['girlfriend'] = 'Natasha'; 
console.log(`${jonas2.firstName} has ${jonas2.friends.length}, and his best friend is called: ${jonas2.friends[0]} `);


// !44 OBJECTS METHODS  - arrays are considered objects
const matteo = {
    firstName: 'Jonas', 
    lastName :'Stroscio', 
    birthYear: '1991', 
    job: 'teacher',  // string value 
    friends : ['Michael', 'Peter', 'Steven'], // array value 
    hasDriversLicense: false,  // boolean value

    // calcAge: function(birthYear){ // function declaration - value 
    //     return 2037 - birthYear; 
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2037 - this.birthYear; // this refer to matteo 
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear; // creando nuova propriety 
        return this.age; 
    }, 

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${matteo.job},  and he has ${matteo.hasDriversLicense ? 'a driver license' : 'he doesn t have drive license'}`;
    }
}; 

console.log(matteo.calcAge(1991)); 
// console.log(matteo["calcAge"](1991));
console.log(matteo.calcAge());


// challenge 
// jonas is a 46 y old teacher  and he has a driver's license 
// console.log(`${matteo.firstName} is a ${matteo.calcAge()} years old ${matteo.job} and he has a drive licence : ${matteo.hasDriversLicense}`);
console.log(matteo.getSummary());
