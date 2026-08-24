let str='Santosh'
let index=0;
let output='';

let char='s' 

console.log(removeChar(str, index, output));


function removeChar(string, index, output){
    
    // base case - check first
    if(index > string.length - 1){
        return output;
    }

    // check if character doesn't match
    if(string.charAt(index) !== char){
        output += string.charAt(index)
    }

    // recursive call
    return removeChar(string, index + 1, output);
}