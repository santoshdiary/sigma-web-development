// https://excalidraw.com/#json=YDbGNnRtGHAVjxEVA7mwO,AF-zJkPnGZY5TNf5I1bj4Q

// NOTE: in javascript eveything is object 
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.santosh=function(){
    console.log("Santosh is present in Array object ")
}

// let's check in Array
myHeros.santosh()
//let's check in object
heroPower.hitesh()
// That means we can inject our own prototype in any object, since in js every thing is object 


//--------------inheritance------------------------
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User //now teacher, inherites the properties from user. // .__proto__ used to interites the properties using prototype
// console.log(Teacher.name)// can access the properties of user object usig teacher object 

//-------modern syntax of prototype inheritance ------
/*
     Object.setPrototypeOf(object, prototype)

        object → the object whose prototype you want to change
        prototype → the object you want to use as prototype
  

*/

Object.setPrototypeOf(TeachingSupport, Teacher) //parameter1=in which obj , parameter2= from where
console.log(TeachingSupport.makeVideo) // TeachingSupport inherites prototype from Teacher 


//want the trim spaces and return only character length using own prototype. 
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){ // define our own prototype in String obj (:
    console.log(`${this}`); // return current context(CURRENT STRING) 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()