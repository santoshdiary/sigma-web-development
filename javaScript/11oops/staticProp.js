class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    //
    return `123`;
  }
}
/* In JavaScript, static keyword is used inside a class.
It means: the property or method belongs to the class itself,
not to its objects (instances).*/

const hitesh = new User("hitesh");
// console.log(hitesh.createId()) //not accessible 👉 Why? Because createId() belongs to class User, not to hitesha(object).

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId()); //not accessible 

// console.log(User.createId()); //works; accessible

