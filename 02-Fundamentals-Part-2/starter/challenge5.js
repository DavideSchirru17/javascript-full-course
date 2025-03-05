//! functions - strict mode - declaration vs expression - arrow functions - 
/*CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

👋 OPTIONAL: You can watch my solution in video format in the next lecture */

'strict'

/* Write your code below. Good luck! 🙂 */
//finisci questo 38 > copia nella cartella javscript code 
console.log('');
console.log('CHALLENGE 5 FUNCTIONS');

const calcAverage = (match1, match2, match3) =>{
    //calculation avarage 3 scores 
    const avarageAfter3Matches = (match1 + match2 + match3)/ 3; 
    return avarageAfter3Matches; 
}


const scoreDolphins = calcAverage(10, 250, 10); // 850 / 3 = 283
const scoreKoalas = calcAverage(500, 90, 240); // 380 / 3 = 126.667

console.log('dolphins avarage: ', scoreDolphins);
console.log('koalas avarage: ', scoreKoalas);

//3

const checkWinner = (scoreDolphins, scoreKoalas) =>{
   // if scoreDolphins is doubled scoreKoalas 
    // log winner to the console 
    if(scoreDolphins >= scoreKoalas * 2){
        console.log("Dolphins win the trophy 🏆");
    } else if(scoreKoalas >= scoreDolphins * 2 ){
        console.log("Koalas win the trophy 🏆");
    } else {
        console.log("No team wins...")
    }
}
checkWinner(scoreDolphins, scoreKoalas); 