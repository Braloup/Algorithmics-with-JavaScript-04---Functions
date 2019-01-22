const readLineSync = require("readline-sync");

let calcSurface = (length, width) => {
  return length * width;
}

let lengthRectangle = readLineSync.question("Please enter the length of rectangle: ");
let widthRectangle = readLineSync.question("Please enter the width of the rectangle: ");

console.log("The surface of rectangle is: " + calcSurface(lengthRectangle, widthRectangle));
