//Array declaration
const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["shaktiman", "santosh", "hello", "keywords"];
const myArr2 = new Array(3, 24, 23, 224, 43);
// console.log(myArr[3]);

//Array method
myArr.push(4);
myArr.push(9);
myArr.push(3);
myArr.push(5);
// console.log(myArr);
myArr.pop();

myArr.unshift(7); // shift the all element and add it on 0th index
// console.log(myArr);
myArr.shift(); // shift(remove) the added 0th index element;
// console.log(myArr);

//some other methods

// console.log(myArr.includes(8)); //returs ture and flase that isIncludes or not
// console.log(myArr.indexOf(4));

const newArr = myArr.join(); // converts all elements of an array into a single string. It returns a new string and does not modify the original array. 
console.log(myArr); //returns in  array format
console.log(newArr); // return the String of array
console.log(typeof newArr);

// slice, splice

// console.log("A", myArr);
const myn1 = myArr.slice(1, 3); //return an sliced array that inclueds elements from 1 to 2 ;note index 3 is not included
// console.log(myn1);

// console.log("B", myArr);
const myn2 = myArr.splice(1, 3); // NOTE, it includes 3 index as well as it move(cut) the element of myArr from index 1 to 3 .
// console.log(myn2);
//proof
// console.log("C", myArr); // now see the element of index 1 to 3 is moved into myn2, i.e. original array is manipulated..
