// 'use strict'
function setUser(userN) {
  this.username = userN;
}
function createUser(username, email, password) {
  setUser.call(this, username); //“Run setUser, but force this inside setUser to be the SAME this as createUser” Since createUser was called using new:
                                //If we do NOT use call(), then setUser is called but username is not stored in the object.
  this.email = email;
  this.password = password;
}

const user1 = new createUser("santosh", "example@gmail.com", 23422);
console.log(user1); //username is not set,i.e. setUser is called but the value is not hold, for this we need to use 'call method ' while calling another method

//-------------another example------------

function greet(){
  console.log(`Hello ${this.name}`)
}
const user= {
  name:"Rohit",
  age:23,
}
const user2 ={
  name:"MOhit",
  age:34,
}
greet(); // gives undefined bc,in non strict mode 'this' of greet function pointing global object which has no any name = undefined 
greet.call(user);
greet.call(user2); 