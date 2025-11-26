//Scope more details

function one(){
    userName="santosh"
    function two(){
        friend="Devanshu"
        console.log(userName);
        
    }
    // console.log(friend); // throws an error bc it's out of scope
    two();
}
one();

//---------------------Intersting (hoisting)----------------------

// console.log(addone(5));//this function can be extecuted before initialization
function addone(num){
    return num + 1
}
console.log(addone(5))

// console.log(addTwo(4)); // this function can't be extecuted before initilizatoin
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7))

//hoisting- This allows variables and functions to be used before they are declared in the code.