// foreach is a method an iterative method used to execute a provided function once for each element in an array, in ascending index order
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item){ // used 'call back function' (removed function name)- foreach method
//     console.log(item);
// })
// NOTE: foreach method don't return anything (undefined)
coding.forEach((item) => {
  // in arrow function form
  console.log(item);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); //can pass a function in foreach

// coding.forEach( (item, index, arr)=> { //we have acess of different values like item, index,and array itself
//     console.log(item, index, arr);
// } )

//----------------------Excessing 'object of array'using foreach loop--------------------------
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName);
});
