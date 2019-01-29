/*
 **Create three function.
 **One for calculate the averange on an array.
 **One for return the minimum value number of an array.
 **One for return the maximum value number of an array.
 **And, last but not leat one more for call this thre one.
 */

const readLineSync = require("readline-sync"); //Call the module for ask the user.

let toatalNumber = 0;
let averageNumber = 0;
let randomArr = [];

//Function who return the average of an an array.
let average = (arr) => {

  for (let i = 0; i < arr.length; i++) {

    toatalNumber += arr[i];
    averageNumber = arr.length;
  }

  return "The average of your array is : " + (toatalNumber / averageNumber).toFixed(2);
}

//Function who return the minimum number of an array
let min = (arr) => {

  return "The minimum element of your aray is: " + Math.min(...arr);
}

// Function who return the maximum number ro an array.
let max = (arr) => {

  return "The minimum element of your aray is: " + Math.max(...arr);
}

//Function who log the three function above.
let multiRand = () => {

  let arrNumber = readLineSync.question("Enter the number of digits you want to average: ");

  while (arrNumber > 0) {

    randomArr.push(Math.floor(Math.random() * 100));
    arrNumber -= 1;
  }

  console.log("That is your random array between 1 & 100: " + randomArr);
  console.log(average(randomArr));
  console.log(min(randomArr));;
  console.log(max(randomArr));
}

multiRand();
