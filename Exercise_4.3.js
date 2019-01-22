const readLineSync = require("readline-sync");

let numRandom = readLineSync.question("Please, enter the number of random number you want: ");

let arrRandom = [];

let rand10 = () => {
  let result = Math.floor(Math.random() * Math.floor(10));
  console.log(result);
}

let multiRand = (numRandom) => {
  for (var i = 0; i < numRandom; i++) {
    let random = rand10();
    arrRandom.push(random);
  }
}
console.log(arrRandom);
