// Challenge 1
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const dogsJulia = [3, 5, 2, 12, 7];
const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [4, 1, 15, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];
// dogsJulia.splice(0, 1)   // These two do exactly the same thing
// dogsJulia.splice(-2)
// console.log(dogsJuliaCorrected);

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach((dog, i) => {
    if (dog <= 3) {
      console.log(`Dog nr ${i + 1} is still a puppy`);
    } else {
      console.log(`Dog nr ${i + 1} is an adult, and it's ${dog} years old`);
    }
  });
};
// checkDogs(dogsJulia, dogsKate);

// Challenge 2 ----------------------------------------------------------------------------------------------------------------------------------------
const data = [5, 2, 4, 1, 15, 8, 3];
// const data = [16, 6, 10, 5, 6, 1, 4];
// 1 my version
const humanAge = data.map(function (mov) {
  if (mov <= 2) {
    return 2 * mov;
  } else {
    return 16 + mov * 4;
  }
});
// console.log(humanAge);
// 2
const filterHumans = humanAge.filter(function (age) {
  return age >= 18;
});
// console.log(filterHumans);
// 3
const average = filterHumans.reduce(function (age, i) {
  return age + i / filterHumans.length;
}, 0);
// console.log(average);

// Tutor version
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)); // Map
  const adults = humanAges.filter(age => age >= 18); // Filter
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // console.log(humanAges);
  // console.log(adults);
  // console.log(average);
};
calcAverageHumanAge(data);

const moneyMoves = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const totalDepositsInUSD = moneyMoves
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsInUSD);

// Challenge 4 ---------------------------------------------------------------------------------------------------------------------------------------
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1 My version
const recommendedFood = dogs.flatMap(function (dog) {
  return (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
});
console.log(recommendedFood);
console.log(dogs);
// 2

// Tutors 1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);
// 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    sarahDog.curFood > sarahDog.recFood ? 'too much' : 'too little'
  }`
);
// 3
const dogsEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(dogsEatTooMuch);

const dogsEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(dogsEatTooLittle);
// 4
console.log(`${dogsEatTooMuch.join(' and ')}'s dogs eat too much`);
// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);
// 7
const okAmountOfFood = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.filter(okAmountOfFood));
// 8
const dogsSortedByRecFood = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSortedByRecFood);
