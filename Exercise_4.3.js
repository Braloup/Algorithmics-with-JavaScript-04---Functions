const readLineSync = require("readline-sync");

let numRandom = readLineSync.question("Please, enter the number of random number you want: ");

let arrRandom = [];

let rand10 = () => {
  let result = Math.floor(Math.random() * Math.floor(10));
  return result;
}

let multiRand = (numRandom) => {

  while (numRandom > 0) {
    arrRandom.push(rand10());

    numRandom -= 1;
  }

  console.log(arrRandom);
}
multiRand(numRandom);
