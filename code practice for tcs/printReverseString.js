let st='happy';
let output='';
let index=0;

function reverse(string, index, outPut){

    if(index>string.length-1){
        return ''
    }

    let currChar=string.charAt(index)
    return reverse(string, index+1, outPut)+ currChar ;
}

console.log(reverse(st,index,output));


