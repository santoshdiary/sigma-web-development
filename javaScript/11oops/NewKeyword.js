//In JavaScript, new is used to create an object from a constructor function or class.

//The new keyword in JavaScript is used to create an instance of an object from a constructor 
// function or class.

function Student(name, age) { //constructor function
  this.name = name;
  this.age = age;
}
let s1 = new Student("Santosh", 21); // object creation 
let s2 = new Student("Amit", 22);

console.log(s1);
// { name: "Santosh", age: 21 }

console.log(s2);
// { name: "Amit", age: 22 }

// Q:What happens internally when you use "new"? ⚙️
// JavaScript does 4 steps automatically:

// 1️⃣ Creates an empty object
// {}

// 2️⃣ Sets "this" to that object
// this → {}

// 3️⃣ Links the object to constructor’s prototype
// s1.__proto__ = Student.prototype 

//4️⃣ Returns the object automatically
// 👉 You don’t need to write return

// 6️⃣ Using new with ES6 class (modern way)
class Student1 {
  constructor(name, age) { // constructor- default method of class used to initialize the object that is called automatically 
    this.name = name;
    this.age = age;
  }
}

let s3 = new Student1("Aman", 29);
console.log(s3);


//8️⃣ Common places where new is used
// new Date()
// new Promise()
// new Object()
// new Array()
// new Map()
// new Set()

