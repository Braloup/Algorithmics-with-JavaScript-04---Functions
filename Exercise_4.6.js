const readLineSync = require("readline-sync");

let numbFact = 0;
let numMultiply = [];

let factorial = () => {
  numbFact = readLineSync.question("Enter the number you want to factor: ");

  while (numbFact > 0) {
    numMultiply.push(numbFact);
    numbFact -= 1;
  }
  console.log(numMultiply);
}

factorial();
