/*
** Return a random number between 1 and 10.
*/
// Function who return a random number.
let rand10 = () => {

  let result = Math.floor(Math.random() * Math.floor(10));// The random number is between 1 and 10.

  return result;

}
console.log(rand10());
