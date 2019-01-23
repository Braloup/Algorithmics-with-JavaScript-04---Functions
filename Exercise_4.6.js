const readLineSync = require("readline-sync");

let numbFact = 0;
let numMultiply = [];
let total = 0;

let factorial = () => {
  numbFact = readLineSync.question("Enter the number you want to factor: ");

  if (numbFact === 0) { // If numbFact is 0, factor is 1.
    total = 1;
  } else if (numbFact > 0){ // Else put every number between 1 and numbFact in a array.
    while (numbFact > 0) {
      numMultiply.push(numbFact);
      numbFact -= 1;
    }
    for (var i = 0; i < numMultiply.length; i++) { //Multiply every number between 1 numbFact.
      total *= numMultiply[i];
    }
  }
  console.log("The factorial is: " + total);
}

factorial();
