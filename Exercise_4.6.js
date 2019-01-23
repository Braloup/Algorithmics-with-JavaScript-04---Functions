const readLineSync = require("readline-sync");

let numbFact = readLineSync.question("Enter the number you want to factor: ");
let factorial = (numbFact) => {

  if (numbFact === 0) { // If numbFact is 0, factor is 1.
    return "1";
  }

  while (numbFact > 0) { // Else multiply every number between 1 and numbFact.
    return numbFact * factorial(numbFact - 1);
  }
}

console.log(factorial(numbFact));
