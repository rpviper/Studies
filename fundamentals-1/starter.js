let js = "Amazing!"
// if (js === "Amazing!") alert("JavaScript is amazing!")

const rainoBirthYear = 1982
let currentYear = 2022
let rainoAge = currentYear - rainoBirthYear
console.log(rainoAge)

// Challenge 1  -------------------------------------------

const markWeight = 78
const markHeight = 1.69
const johnWeight = 92
const johnHeight = 1.95

const markWeight2 = 95
const markHeight2 = 1.88
const johnWeight2 = 85
const johnHeight2 = 1.76

const marksBMI = markWeight / (markHeight ** 2)
console.log("Marks BMI is" + ' ' + marksBMI)
const marksBMI2 = markWeight2 / (markHeight2 ** 2)
console.log("Marks second BMI is" + ' ' + marksBMI2)

const johnBMI = johnWeight / (johnHeight ** 2)
console.log("Johns BMI is" + ' ' + johnBMI)
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2)
console.log("Johns second BMI is" + ' ' + johnBMI2)

const markHigherBMI = marksBMI > johnBMI
console.log(markHigherBMI)

const markHigherBMI2 = marksBMI2 > johnBMI2
console.log(markHigherBMI2)

// Challenge 2 -----------------------------------------

if (marksBMI > johnBMI) {
    console.log(`Marks BMI (${marksBMI}) is higher than John's BMI (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${marksBMI})`)
}

// Challenge 3 -----------------------------------------------------------------

const dolphinsAverage = (96 + 108 + 89 ) / 3
console.log(dolphinsAverage)
const koalasAverage = (88 + 91 + 110) / 3
console.log(koalasAverage)

if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win the trophy!`)
} else if (dolphinsAverage < koalasAverage) {
    console.log(`Koalas win the trophy!`)
} else {
    console.log(`There is a draw`)
}

const bonusDolphinsScore = (97 + 10 + 10) / 3
const bonusKoalasScore = (97 + 10 + 10) / 3

if (bonusDolphinsScore  > bonusKoalasScore && bonusDolphinsScore >= 100 ) {
    console.log(`Bonus Dolphins win the trophy!`)
} else if (bonusDolphinsScore  < bonusKoalasScore && bonusKoalasScore >= 100) {
    console.log(`Bonus Koalas win the trophy!`)
} else if (bonusDolphinsScore  === bonusKoalasScore && bonusDolphinsScore >= 100 && bonusKoalasScore >= 100) {
    console.log(`There is a draw`)
} else {
    console.log('Nobody wins the trophy')
}

// ---------------------------------------------------------------------------------------

const day = 'Friday'

if (day === 'Monday') {
    console.log('Go to work')
} else if (day === 'Tuesday') {
    console.log('Do studying')
} else if (day === 'Thursday' || 'Friday') {
    console.log('Get ready for the weekend')
} else if (day === 'Saturday') {
    console.log('Have a rest')
} else {
    console.log('Not a valid day')
}

// Challenge 4 -------------------------------------------------------

// const bill = 430
const bill = 100
// const bill = 40

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)


