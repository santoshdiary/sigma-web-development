

class user{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    get username(){
        return this._username; // _: It’s a convention to indicate:“This property should not be accessed directly”
    }
    set username(value){
        this._username=this.value;
    }
}
const user5=new user('santosh','s@gmail.com')
console.log(user5.email); //email is not function,email()❌ 
user.username='mohit'
console.log(user.username); 


// Need? 
/*
 First: What are getters and setters?

They are special methods used to
👉 get (read) a property value
👉 set (update) a property value

They look like properties, but work like functions.

Why do we need them? 🤔

Without getters/setters:
Anyone can directly change your object data
No validation
No control

With getters/setters:
✅ Control how data is read
✅ Validate data before updating
✅ Hide internal logic
✅ Very useful in real projects & frameworks (React, etc.)

So yes 👉 they ARE needed in clean, professional code.
*/

//wihout getter and setter 
const userA = {
  name: "Santosh",
  age: 20
};

userA.age = -5;   // ❌ wrong but allowed // since age can't be -ve
// console.log(user.age);

//wih getter and setter

const user1 = {
  name: "Santosh",
  _age: 20,   // private-like property //1️⃣ Why _age? It’s a convention to indicate:“This property should not be accessed directly”




  get age() {
    return this._age;  
  },

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
    } else {
      this._age = value;
    }
  }
};
// console.log(user1.age);   // getter → 20

// user1.age = 25;           // setter
// console.log(user.age);   // 25

// user1.age = -10;          // ❌ blocked
// console.log(user1.age);

//real world usage 
class User {
  constructor(name, password) {
    this.name = name;
    this._password = password;
  }

  get password() {
    return "******";   // hide real password
  }

  set password(value) {
    if (value.length < 6) {
      console.log("Password too short");
    } else {
      this._password = value;
    }
  }
}

const u1 = new User("Santosh", "123456");
console.log(u1.password);   // ******
