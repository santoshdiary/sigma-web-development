class user {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  greet() {
    console.log(`Hello ${this.username} !`);
  }
}
class Teacher extends user {
  constructor(username, email, password) {
    //NOTE
    super(username); // used to access parent class
    this.email = email;
    this.password = password;
    
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const teacher1=new Teacher('Santosh',"example@gmail.com", 67262)
// console.log(teacher1)
teacher1.greet()

console.log(teacher1 instanceof user); // return wheter teacher1 is instance of user 
