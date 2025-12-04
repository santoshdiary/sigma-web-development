//---------------IF ELSE STATEMENT -------------------
const temprature=89;

// if statemet- used to check single condition 
if(temprature>40){ // bused to
    console.log("Temprature is too high, can't survive....");
    
}

//if-else statement - used to check two condition 

let age=23;
if(age>18){
    console.log("you can cast Vote.");
    
}
else{
    console.log("You can't cast Vote. ");
    
}

//if-else-if statement--- used to check multiple condition 

let a=45;

if(a<10){
    console.log("Number is less than 10");
    
}
else if(a<25){
    console.log("Number is less than 25");
}
else if(a<50){
    console.log("Number is less than 50");
}
else{
    console.log("Number is greater than 50");
    
}

let num1=4;
let num2=3;
let num3=5;
let largest;
if(num1>num2 && num1>num3)
{
largest=num1;
}
else if(num2>num1 && num2 > num3){
    largest=num2;
}
else{
    largest=num3;
}
console.log(`largest number is ${largest}`);
