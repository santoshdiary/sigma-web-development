const tinderUser=new Object(); //creating an object using constructor
tinderUser.name="tonny";
tinderUser.gender="male";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName: {
            frist:"Harry",
            last:"chordhary"
        }
    }
}
// console.log(regularUser.fullName?.userFullName.frist); //here ? is used to avoid error incase of missing of fullName

const obj1={1:"a", 2:"b" }
const obj2={3:"c", 4:"d" }

// const obj3={obj1,obj2}; // it combines the obj1 & obj2 but, not simplifies(obj of obj) 
// console.log(obj3);
const obj3=Object.assign({},obj1,obj2); //solve the above problem
// console.log(obj3); 

//Array can store object 
const users=[
    {
        name:"user1",
        email:"user1@gmail.com"
    },
    {
        name:"user2",
        email:"user2@gmail.com"
    },
    {
        name:"user3",
        email:"user3@gmail.com"
    }
]
// console.log(users[1].email); //accssing the index 1's email of users array

//some useful method of object (Prototypes) 
console.log(Object.keys(tinderUser)); //return all keys of object tinderUser
console.log(Object.values(tinderUser)); //----- vlaues ----
console.log(Object.entries(tinderUser)); // --- entries(key-value)--

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// return boolean, is it 'isLoggIn' availbe in tinderUser or not?







