//Object destructuring in JavaScript is a syntax that allows you to extract specific properties from an object and assign them to variables in a clean, short, readable way.
//It is a shorthand way to unpack values from objects into separate variables.

const course={
    name:"javaScript",
    duration:3,
    instructor:"Hitesh Choudhary "

}
// console.log(course.insturctor); // this syntax is fine, but repetition of "course.something" is  perfomed to access the data 
const { instructor:crsIns} = course
// console.log(instructor);
console.log(crsIns);


//-------------------------JSON - javascript object notation-----------------------------------
//It is a data format used to send and receive data between server and client.
// {
//   "name": "Rahul",
//   "age": 22,
//   "city": "Delhi"
// }
//API can return vlaue in object like above or array like below-
[
    {},
    {},
    {}
]



