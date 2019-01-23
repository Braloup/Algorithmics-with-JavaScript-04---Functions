const readLineSync = require("readline-sync");

let toatalNumber = 0;
let averageNumber = 0;
let randomArr = [];

let average = (arr) => {
  for (let i = 0; i < arr.length; i++) {

    toatalNumber += arr[i];
    averageNumber = arr.length;
  }
  console.log("The average of your array is : " + toatalNumber / averageNumber);
}

let min = (arr) => {
  console.log("The minimum element of your aray is: " + Math.min(...arr));
}

let max = (arr) => {
  console.log("The minimum element of your aray is: " + Math.max(...arr));
}

let multiRand = () => {

  let arrNumber = readLineSync.question("Enter the number of digits you want to average: ");

  while (arrNumber > 0) {
    randomArr.push(Math.floor(Math.random() * 100));
    arrNumber -= 1;
  }
  console.log("That is your random array between 1 & 100: " + randomArr);
  average(randomArr);
  min(randomArr);
  max(randomArr);
}

multiRand();
