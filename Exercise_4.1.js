/*
**Function who ask the user the length and the width of some one rectangle.
**And return the surface.
*/

const readLineSync = require("readline-sync");// Call read-line-sync

// Function who return the surface of a rectangle
let calcSurface = (length, width) => {
  return length * width;
}

let lengthRectangle = readLineSync.question("Please enter the length of rectangle: ");
let widthRectangle = readLineSync.question("Please enter the width of the rectangle: ");

console.log("The surface of rectangle is: " + calcSurface(lengthRectangle, widthRectangle));
