const readLineSync = require("readline-sync");

let numRandom = readLineSync.question("Please, enter the number of random number you want: ");

let multiRand = (numRandom) => { //function retur an array with random number.

  let arrRandom = [];

  let rand10 = () => { // Function who generate random number.

    let result = Math.floor(Math.random() * Math.floor(10));

  }

  for (var i = 0; i < numRandom; i++) { // Push in a array all of random number the user ask.

    let random = rand10();

    arrRandom.push(random);
    console.log(arrRandom);
  }
  return arrRandom;
}
console.log(multiRand());
