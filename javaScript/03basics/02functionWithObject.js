// function addCartPrice(num1){
//     return num1;
// }

// function addCartPrice(num1,num2, ...num){ // here num1,num2 takes first two parameter and rest one "num" is stored in array
//     return num;
// }

function addCartPrice(...num1) {
  // here ... is rest operator that takes more than one parameters
  return num1;
}
// console.log(addCartPrice(200,45,222,588)); //return array of all prices,in which futher we will use loops & addition

// how to pass and use object in function?
const user = {
  userName: "santosh",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `User name is ${anyobject.userName} and price is ${anyobject.price}`
  );
}
handleObject(user);
handleObject({
  // we can directly pass the object in function
  userName: "nayan",
  price: 499,
});

// how to pass an array in function ?
const myArr = [23, 434, 244, 554, 333];
function returnSecondValue(anyArr) {
  return anyArr[2];
}
console.log(returnSecondValue(myArr));
console.log(returnSecondValue([66, 44, 77, 33, 53])); // can pass array directly
