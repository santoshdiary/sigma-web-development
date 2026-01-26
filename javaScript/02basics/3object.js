// several ways to create an object in js

<<<<<<< HEAD
//singleton-
=======
//signleton-
>>>>>>> 04d34b0cfc04f5f654bb39eddb4d8efe0ad23ed9
//Object.create

//object literals

<<<<<<< HEAD
const mySym = Symbol("key1"); //creating a symobl

const jsUser = {
  name: "Santosh", // here key 'name' is considered as a string
  fullName: "Santosh Kushwaha",
  [mySym]: "mykey1", //here [] respresents symbol, if we ignore [] then it considered String not symbol
  age: 21,
  location: "Dumka",
  email: "santosh.skm2022@gmail.com",
  isLoggedIn: false,
  lastLoggedDays: ["monday", "saturday"],
  courses: {
    py: "python",
    js: "javascript",
  },
};
=======
const mySym = Symbol("key1") //creating a symobl

const jsUser = {
    name:"Santosh", // here key 'name' is considered as a string 
    fullName:"Santosh Kushwaha",
    [mySym]: "mykey1", //here [] respresents symbol, if we ignore [] then it considered String not symbol
    age:21,
    location:"Dumka",
    email:"santosh.skm2022@gmail.com",
    isLoggedIn:false,
    lastLoggedDays:["monday","saturday"],
    courses:{
        py:"python",
        js:"javascript"
    }

}
>>>>>>> 04d34b0cfc04f5f654bb39eddb4d8efe0ad23ed9
// data can be accessed using 1. dot , 2. square baracet

// console.log(jsUser.name);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);  //here mySym is a symbol that's why we don't need to use "" in []
// console.log(jsUser.courses.py); // object of object can acssed in this way

<<<<<<< HEAD
jsUser.email = "santosh.skm2019@gmail.com"; // can update the value of key
//Object.freeze(jsUser) // used to make object immutable (change is not accepted )
jsUser.email = "hitesh@microsoft.com";
// console.log(JsUser); //change will not reflect bc object is freezed

jsUser.greet = function () {
  //adding a function in jsUser object that greet (anonmus function that haven't name)
  console.log("hello js user");
};
jsUser.greet2 = function () {
  //adding another function
  console.log(`hello js user ${this.fullName} !`); //this keyword used to pointing curret context
};
=======
jsUser.email="santosh.skm2019@gmail.com"; // can update the value of key
//Object.freeze(jsUser) // used to make object immutable (change is not accepted )
jsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //change will not reflect bc object is freezed 


jsUser.greet=function(){  //adding a function in jsUser object that greet (anonmus function that haven't name)
console.log("hello js user");

}
jsUser.greet2=function(){ //adding another function
    console.log(`hello js user ${this.fullName} !`); //this keyword used to pointing curret context 
    
}

>>>>>>> 04d34b0cfc04f5f654bb39eddb4d8efe0ad23ed9

// console.log(jsUser.greet());
// console.log(jsUser.greet2());

<<<<<<< HEAD
// delete jsUser.location;// location key-value is deleted
// console.log(jsUser);

//creating object using constructor-
let person = new Object();
person.name = "santosh";
person.age = 22;
person.location = "Dumka";
console.log(person);

=======
// delete jsUser.location;// location key-value is deleted 
// console.log(jsUser); 


//creating object using constructor-
let person=new Object();
person.name="santosh";
person.age=22;
person.location="Dumka";
console.log(person);


>>>>>>> 04d34b0cfc04f5f654bb39eddb4d8efe0ad23ed9
// practise object yourself to read documentation and etc.
