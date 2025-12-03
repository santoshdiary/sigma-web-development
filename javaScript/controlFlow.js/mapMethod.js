//The map() method in JavaScript is a higher-order function that creates a new array by applying a provided callback function to each element of the original array, without modifying the original array itself

const myNums = [1, 2, 3, 4, 5, 6, 7];
// let newmyNums= myNums.map(function(num){
//     return num=num+10;
// })
//CHANING OF METHOD IN ARRAY
// let newmyNums = myNums.map((element) => element * 10).map((element) => element + 1).filter((element) => element > 35);
let newmyNums = myNums
  .map((element) => element * 10)
  .map((element) => element + 1)
  .filter((element) => element > 35); //can apply multiple methods in chain...
console.log(newmyNums);
