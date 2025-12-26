// ES 6
// modern way but behind the scene is running older thing

// class user{
//     constructor(userName,email,password){ //constructor is default method of class that initialize the object which is call automatically
//         this.userName=userName;
//         this.email=email;
//         this.password=password;
//     }
//        encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const user1=new user('santosh23','sk@gmail.com',232);
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

// behind the scene: older way 

function user(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword=function(){ // adding method into user prototype
   return `${this.password}abc`;  
}
user.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`
}

const user2=new user('Kushwaha Brother','example@gmai.com',4736)
console.log(user2.changeUsername());

