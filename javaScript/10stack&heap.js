/* 
 As usual in javascript there are two memory locations that used in programing
 1. Stack       
 2. Heap

All the primitive data type varibale is stored in stack 
and non primitive data type varibale is stored in Heap 

stack value is not given direct access only copy value is given 
to other variable and changes not reflect on it

while Heap variable gives reference(orignal valuse) to the other variable and 
changes reflect on original variable */

let num1 = 6; // stored in stack
let num2 = num1; // copy value of num1
num2++;
console.log(num1); // 6 
console.log(num2); // 7 
// changes not reflect on num1
// because num1 and num2 are stored in stack

let array1 = ["item1", "item2"]; // stored in heap
let array2 = array1; // reference of array1 
array2.push("item3");
console.log(array1); // ["item1", "item2", "item3"] 
console.log(array2); // ["item1", "item2", "item3"]
// changes reflect on array1 
// because array1 and array2 are stored in heap 