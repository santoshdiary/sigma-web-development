//*********** FOR OF LOOP ***********************/
/* This loop is used to iterate over values of iterable objects suc as array, Strings, maps, sets,NodeList and other collection*/

// [ {}, {},{}] // array can contain object like this 

let student=['santohs','mohan','radhe','rajkumar'];
for(let indext of student){
    // console.log(indext);
}

let message='Hello, World!!!';
for(const i of message){  //for of loop helps to iterate without taking different value it understand automatically that required to iterate 
    // console.log(i);
}

//-----------MAPS--- Unique and ordered key value pair data type...
const map = new Map() // creating map object 
map.set('IN', "India") // putting values in maps 
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); // can access the map
// accessing map using for of loop
for(const [key,value] of map){
    // console.log(key+"=>"+value);
}

//--//NOTE OBJECT IS NOT ITERATABLE,HENCE FOR OF LOOP IS NOT WORKS ON IT.---------- 
let myObj={
    1:"Santosh",
    2:"aman",
    3:'rakesh',
    4:"gukesh"
}

for (const objItem of myObj) {
    // console.log(objItem); // NOTE 
    
}
