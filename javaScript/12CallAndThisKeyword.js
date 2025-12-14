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
