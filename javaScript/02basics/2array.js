const marve_heros=["thor","Ironman","spiderman"]
const indian_heros=["shaktiman","balveer","aladin"]
//marve_heros.push(indian_heros);// it pushes the given array as an array instead of an element 

//console.log(marve_heros); 
const allHero=marve_heros.concat(indian_heros); //concatinates all the element of indian into marvel
console.log(allHero)
//another,most used way
const all_new_hero=[...marve_heros,...indian_heros]
console.log(all_new_hero)


const another_arr=[1,2,3,[4,5,6],[6,7,[4,5]]]
const real_another_array=another_arr.flat(Infinity)// simplifies all array of arrray
console.log(real_another_array);


console.log(Array.isArray("santosh")); //returns boolean whether it is array or not
console.log(Array.from("santosh")) //this will make given string into array
console.log(Array.from({name:"Santosh"})) //Intersting.... 

let score1=100;
let score2=200;
let score3=300;
let score4=400;1

console.log(Array.of(score1,score2,score3));//creates a array from given set of value(variable)
 
