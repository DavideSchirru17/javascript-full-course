'strict'; 
console.log('');
console.log('CHALLENGE ARRAY 2');
/*CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

/* Write your code below. Good luck! 🙂 */
/*
steven 
tip calculator
tip 15% if (bill >= 50 && bill <= 300)
*/

//task 1
const bills = [125, 555, 44]; //  data array bills can be used , 125 || 555 || 44 

const calcTip = (bill) =>{ 

    if(bills >= 50 && bills <= 300){
        const tipAddBill = (bill * 15 ) / 100; // 1500 / 100 = $15 TIP to add on the bill 
       // const totalBill = bill + tipAddBill; 
        return tipAddBill; // returning corresponding tip 
    } else {
        const tip20 = (bill * 20 ) / 100;
        return tip20; 
    }
}
console.log(bills); 
const calculationTip = calcTip(100); // test the function 100 value   
console.log(`Tip to add on the bill:', (${calculationTip}) $`) ; // print in the console 
const calculationTip125 = calcTip(bills[0]);
console.log(`Tip for the first element: $(${calculationTip125}) of the bills array`);
const calculationTip555 = calcTip(bills[1]);
console.log(`Tip for the second element: $(${calculationTip555}) of the bills array`);
const calculationTip44 = calcTip(bills[2]);
console.log(`Tip for the second element: $(${calculationTip44}) of the bills array`);


const tips = [calculationTip125, calculationTip555, calculationTip44 ]; 
console.log(tips);

const totals = [(bills[0] + calculationTip125), (bills[1] + calculationTip555 ), (bills[2] + calculationTip44)]; 
console.log(totals);




