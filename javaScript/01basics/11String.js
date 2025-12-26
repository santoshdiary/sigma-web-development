// String declaration 

const name="Santosh Kushwaha";
let repoCount=20;

// console.log(name.length);
// console.log(name + repoCount + " Value"); //don't do this, it's old syntax to concatenate the strings 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
//using backticks ` ` 

//Another way to create string using Object 
let name1=new String("Santosh Kumar");
console.log(name1);
console.log(name1.length);
console.log(name1.charAt(5));
console.log(name1.indexOf("K"));

console.log(name1.substring(2,6)); //note that 6 is not included
const newString2=name1.slice(1,3);
console.log(newString2);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes extra spaces from start and end

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //returns boolean value False
let gameName = "GTA-5";
console.log(gameName.split('-')); //on the basis of '-' it will split and return array