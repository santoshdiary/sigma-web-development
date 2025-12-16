/*In JavaScript, every object property has some hidden settings (called property descriptors).

Object.getOwnPropertyDescriptor(obj, propName)
👉 returns details about a property of an object

These details tell:

Can we change its value?

Can we delete it?

Will it appear in loops?

Is it a value or a getter/setter?*/
//Why value of PI is not changable?

const discriptor=Object.getOwnPropertyDescriptor(Math,'PI') //(object key) PI(key):3.14(value)
console.log(discriptor);

// console.log(Math.PI);
// Math.PI = 5 //value can't override because Maths.PI property is not "writable "
// console.log(Math.PI); 

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//define own property 
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) { // chai obj is not iteratable that's why Object.entries() used 
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}