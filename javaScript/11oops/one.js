const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); //this-used to pointing current context 
        console.log(this);
    }

}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

//A JavaScript constructor function is a regular function used as a blueprint to create and initialize multiple objects with similar properties and methods. When invoked with the new operator, it automates object creation and binds the this keyword to the newly created instance. 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true) //new keyword creates new object of user function 
const userTwo = new User("ChaiAurCode", 11, false)

class student{
    student(){
        console.log('student object is creatd.......')
    }
    eat(){
        console.log("I'm eating ...");   
    }
    jump(){
        console.log("I'm jumping....")
    }
}

let rohan =new student();
console.log(rohan);
