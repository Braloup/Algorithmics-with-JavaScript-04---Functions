let toatalNumber = 0;
let averageNumber = 0;

let average = (arr) => {
  for (let i = 0; i < myArr.length; i++) {

    toatalNumber += myArr[i];
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

let myArr = [2, 4, 5, 8];

average(myArr);
min(myArr);
max(myArr);
