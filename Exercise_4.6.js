const readLineSync = require("readline-sync");

let numbFact = readLineSync.question("Enter the number you want to factor: ");
let factorial = (numbFact) => {

  while (numbFact > 0) { // Else multiply every number between 1 and numbFact.
    return numbFact * factorial(numbFact - 1);
  }
}

console.log(factorial(numbFact));
