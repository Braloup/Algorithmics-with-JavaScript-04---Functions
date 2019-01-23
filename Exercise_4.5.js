const readLineSync = require("readline-sync");

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let distance = 0;

let calcDistance = () => {
  x1 = readLineSync.question("Enter x1 coordinate for the first point: ");
  y1 = readLineSync.question("Enter y1 coordinate for the first point: ");
  x2 = readLineSync.question("Enter x2 coordinate for the second point: ");
  y2 = readLineSync.question("Enter y2 coordinate for the second point: ");

  distance = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))); //Calculate distance between two  point in 2D space.

  console.log("The distance between the first and the second point is: " + distance.toFixed(3)); // return distance around 2 gigit.
}

calcDistance();
