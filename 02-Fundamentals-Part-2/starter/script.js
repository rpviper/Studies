'use strict'

// CHALLENGE 1 ----------------------------------------------------------------------------------------

const calcAverage = (score1, score2, score3) => {
    const scoreAverage = (score1 + score2 + score3) / 3
    return scoreAverage
}
// console.log(`Test 1 Dolphins average score is ${calcAverage(44, 23, 71)}`)
// console.log(`Test 1 Koalas average score is ${calcAverage(65, 54, 49)}`)
// console.log(`Test 2 Dolphins average score is ${calcAverage(85, 54, 41)}`)
// console.log(`Test 2 Koalas average score is ${calcAverage(23, 34, 27)}`)


// let avgDolhinsTest = calcAverage(44, 23, 71);
// let avgKoalasTest = calcAverage(65, 54, 49);
const avgDolhinsTest = calcAverage(85, 54, 41);
const avgKoalasTest = calcAverage(23, 34, 27);

const winner = function checkWinner(avgDolhinsTest, avgKoalasTest) {

    if (avgDolhinsTest >= 2 * avgKoalasTest) {
    console.log(`Dolphins win the game (${avgDolhinsTest} vs ${avgKoalasTest})`)
    } else if (avgKoalasTest >= 2 * avgDolhinsTest) {
        console.log(`Koalas win the game (${avgKoalasTest} vs ${avgDolhinsTest})`)
    } else {
        console.log('Nobody wins the game')
    }
}
winner(avgDolhinsTest, avgKoalasTest)     // I forgot to call the function!! Don't forget this!!!
winner(111, 570)                          // This also works, uses the function

// CHALLENGE 2 --------------------------------------------------------------------------------------------------------------------------

const bills = [125, 555, 44];

function calcTip(bill) {
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
/*  or as an arrow function:
const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2  */

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total)

//  CHHALLENGE 3 ---------------------------------------------------------------------------------------------------------------------------------

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,

    calcBMI: function() {
       return this.weight / (this.height ** 2);
    }

    // calcBmi: function() {                           // More correct way
    //     this.bmi = this.weight / this.height ** 2
    //     return this.bmi
    // }
    }

    // mark.calcBMI();
    // console.log(mark.bmi);

const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,

    calcBMI: function() {
        return this.weight / (this.height ** 2);
     }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI ${mark.calcBMI()} 
    is higher than ${john.firstName} ${john.lastName}'s BMI ${john.calcBMI()}`)
    } else {
    console.log(`${john.firstName} ${john.lastName}'s BMI ${john.calcBMI()} 
    is higher than ${mark.firstName} ${mark.lastName}'s BMI ${mark.calcBMI()}`)
    }

// CHALLENGE 4 -----------------------------------------------------------------------------------------------------------------------------------------

const stevenBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const stevenTips = [];
const stevenTotal = [];

const calcTips = function(stevenBills) {
    return stevenBills >= 50 && stevenBills <= 300 ? stevenBills * 0.15 : stevenBills * 0.2
 }
for (let tip = 0; tip < stevenBills.length; tip++) {
    stevenTips.push(calcTip(stevenBills[tip]))
    stevenTotal.push(calcTip(stevenBills[tip]) + stevenBills[tip])
    // const tip = calcTip(stevenBills[tip]);
    // stevenTips.push(tip);
    // stevenTotal.push(tip + stevenBills[tip]);
console.log(`Steven's bill is: ${stevenBills[tip]} and tip is: ${stevenTips[tip]} and total is: ${stevenTotal[tip]}`);
}
// BONUS

const calcAverageTotal = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverageTotal(stevenTotal))







