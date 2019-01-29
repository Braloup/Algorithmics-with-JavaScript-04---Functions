/*
**This program ask the user how many random number does he want.
**And return an array whit the exact rando number.
*/

const readLineSync = require("readline-sync");//Call the module for ask the user.


// Function who generate random number.
  let rand10 = () => {

    let result = Math.floor(Math.random() * 10);
    return result;
  }

//function return an array with random numbers.
let multiRand = (numRandom) => {

   numRandom = readLineSync.question("Please, enter the number of random number you want: ");// Ask the user how many random number does he want.

  let arrRandom = [];

  for (var i = 0; i < numRandom; i++) { // Push  all of random number the user ask in a array.

    arrRandom.push( rand10());
  }

  return arrRandom;
}

console.log(multiRand());
