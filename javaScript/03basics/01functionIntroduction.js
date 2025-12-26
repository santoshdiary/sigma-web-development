function printMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("t");
    console.log("o");
    console.log("s");
    console.log("h");
    
}
// console.log(printMyName());

function addTwoNumbers(num1,num2){
    // const result= num1+ num2;
    // return result;
    return (num1+num2);

}

let result=addTwoNumbers(3,5);
let result1=addTwoNumbers(3,"5"); //remember the converstion of string !!!!!!!!!!

console.log(result);
console.log(result1);

function loginUserMessage(username = "sam"){ //here "sam" is default username that will override while putting argument
    if(!username){ // checking whether username parameter is passed or not through the method
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))

