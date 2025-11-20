// several ways to create an object in js

//signleton-
//Object.create

//object literals

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
// data can be accessed using 1. dot , 2. square baracet

// console.log(jsUser.name);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);  //here mySym is a symbol that's why we don't need to use "" in []
// console.log(jsUser.courses.py); // object of object can acssed in this way

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


// console.log(jsUser.greet());
// console.log(jsUser.greet2());

// delete jsUser.location;// location key-value is deleted 
// console.log(jsUser); 


//creating object using constructor-
let person=new Object();
person.name="santosh";
person.age=22;
person.location="Dumka";
console.log(person);


// practise object yourself to read documentation and etc.
