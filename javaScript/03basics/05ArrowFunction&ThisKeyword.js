// this keyword used to refere the current context (object)
//context, i.e.  different values right now

/*************************** THIS KEYWORD **************************/

const user = {
  username: "Santosh",
  price: 999,
  welcomeMessage: function () {
    //this called 'object method'
    // console.log(`${this.username},Welcome to Website.`); // here this refere to current object i.e. 'user' object
    // console.log(this); //returns the current values(object) in this scope
  },
};

// user.welcomeMessage();
// user.username="Mohan34"; //username is updated that means current context is changed
// user.welcomeMessage();

// console.log(this); // return "empty object" {} bc globle vlaue nothing here,but when we run it in brower then it refers window object




//---------------------------- ARROW FUNCTION ---------------------------

//regular function
// function call() {
//   let name = "santosh";
// //console.log(this.name); // can't access name; return undefined ; used in object only
// }
// call();

// in another way also....

// const call=function() {
//   let name = "santosh";
// console.log(this.name); // can't access; return undefined ; used in object only
// }
// call();

//arrow function with this keyword 
// const call =()=>{
//      let name = "santosh";
//     //  console.log(this); // empty object 
     
// console.log(this.name);  //undefined
// }
// call(); 

// const addTwo=(num1,num2) =>{  // explict retun (normal)
//     return num1+num2;
// }
// console.log(addTwo(5,3));


const addTwo=(num1,num2) =>   num1+num2; // implict return 
console.log(addTwo(5,3));

const addTwo2=(num1,num2) =>  (num1+num2); // implict return  
console.log(addTwo(45,3));

const addTwo3=(num1,num2) =>  ( {userName:"santsh23"}); // can return object in this way 
console.log(addTwo(45,3));