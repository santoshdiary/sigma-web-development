//In JavaScript, scope refers to the current context in which variables, functions, and objects are accessible. It determines where in your code you can use a variable or function.

var c=40; 
//local scope
if(true){ 
let a=10;
const b=20;
var c=30; // var has scope problem, because it can be accessible out side as globle variable 
}

// console.log(a); // throws an error because "a" is not accessible out side. it is local scope
// console.log(b)//throws an error because "b" is not accessible out side
console.log(c); //overrides the globle varibale c.  
