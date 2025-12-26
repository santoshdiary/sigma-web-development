//--------Immediatly Invoked Function Expression (IIFE)------------;

/*INTRODUCED IN ES5 (ECAMSCRIPT 5, 2009)
An IIFE is a JavaScript function that you define and run immediately. It’s used to create a private scope so variables inside it don’t leak into the global scope.
Why use an IIFE?
-> Avoid polluting global scope — keep variables private.
-> Run initialization code once (setup code, event bindings, module-like pattern).
-> Pass in globals safely (like window, document, or jQuery) without exposing them.
*/

//syntax-
// (function(){}("para1","para2"));

(function dbMessage(){
    console.log("DB CONNECTED....");
    
})(); // can pass parameters in function here 

// IN ARROW FUNCTION FORM
((name)=>{
console.log( name);
})('Santosh Hansdiha'); 
