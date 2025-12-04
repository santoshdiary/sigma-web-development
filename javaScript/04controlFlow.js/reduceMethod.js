//reduce() method is a higher-order function that processes an array by applying a callback function to each element, accumulating a single result value.

let num=[1,2,3];

// const myTotal=num.reduce(function(accumulatorVal,currentVal){
// console.log(`accumulator value: ${accumulatorVal} and currnet value:${currentVal}`);
//     return accumulatorVal+currentVal;
// }, 0) // here 0 is initial value of accumulator 

const myTotal=num.reduce((acc,curr)=>(acc+curr),0); // in short 
console.log(myTotal);

// PRACTICAL EXAMPLE IN E-COM WEB
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(`Your have to pay:${priceToPay}`);

