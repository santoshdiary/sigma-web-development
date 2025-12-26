
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//***************  CONFUSION CLEAR ************ */
// falsy values--

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values--
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { // to know array is empty ? 
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // to know whether object is empty or not 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1); 

//------------ Terniary Operator--------------------|

// condition ? true : false

const age=34;
(age>=18)?console.log("You can vote"): console.log("Can't vote");

