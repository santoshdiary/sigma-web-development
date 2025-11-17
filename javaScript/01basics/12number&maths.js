

//---------------------Number-------------------------
const score=400; // js automatically detects the type of score but, 
console.log(score);
const balance=new Number(5363); // we can explicitly define the variable that stores numbers
console.log(balance);
console.log(balance.toString().length)
console.log(score.toString().length)
console.log(balance.toFixed(2)) // toFixed is used to define the number of decimal points
const otherNumber=123.33233;
console.log(otherNumber.toPrecision(5)) // toPrecision is used to define the total number of digits
const millons=3400000000;
console.log(millons.toLocaleString("en-IN")) // toLocaleString is used to format the number according to the locale (Adds the comma, according to indian number system)

//-------------------------MATHS---------------------------

console.log(Math)
// console.log(Math.max(3,5));
console.log(`Absolute valu of given number is ${Math.abs(-5)}`);
console.log(Math.round(4.2233))
console.log( "print the top(ceiling number) no.o "+Math.ceil(4.2))
console.log(Math.floor(4.2)) //print floor number
//generating the random number
console.log(Math.random()) // generate random no. between 0 t0 1 

//suppose we want to generate random number between 1 to 6 like dice
const min=1;
const max=6;


console.log(Math.floor(Math.random()*(max-min+1))+min) //understand and remember the formula 